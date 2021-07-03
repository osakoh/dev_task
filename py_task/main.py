import pandas as pd

# folder containing data
path = '../data'


# step 1: create a function which reads a csv and transforms into a dataframe
def load_file(file_path, pds):
    """
    :param file_path: ref to folder containing the csv file
    :param pds: ref to the Pandas package
    :return: a dataframe
    """
    return pds.read_csv(f'{file_path}/input/anonoymous_data.csv')


# step 3: create a new dataframe which counts the number of times each emotion appears
def count_emotion(df):
    """
    :param df: ref to a dataframe
    :return: a sorted dataframe
    """
    # delete log_id column
    df = df.head(10).drop(['log_id', 'user_id'], axis=1)
    # extract first 4 columns
    df = df.loc[0:, 'emotion_id': 'Y']
    # add new column, counting each emotion
    df['log_count'] = df['emotion'].map(df['emotion'].value_counts())
    # delete duplicates
    df = df.drop_duplicates()
    return df


# step 4: Export the new dataframe to a json file in the js_task folder to be used in part 2 - visualising
def to_json(df, output_path):
    """
    :param df: ref to a dataframe
    :param output_path: path to save the json file
    :return: a data json file
    """
    # create JSON file
    json_file = df.to_json(orient='records')

    # export JSON file
    with open(output_path, 'w') as f:
        f.write(json_file)
    print('completed.....')


# export to json file
to_json(count_emotion(load_file(path, pd)), f'{path}/output/data.json')

# print(to_json.__doc__)
# help(to_json)
