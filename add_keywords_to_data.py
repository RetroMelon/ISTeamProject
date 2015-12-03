# Michael McKay
# This script adds keywords to the restaurant CSV data
# provided by the lecturer. It does this randomly,
# Doing this manually would be a big task.

# First open the styles.txt file, on each line is
# one style. Store the styles in an array.
# REMEMBER NOT TO STORE NATIONAL ONES
styles = []

# Now open restaurants.csv

# Now open restaurants_new.csv

# For each line
expected_commas_for_line_without_keywords = 2

restaurants_csv_lines = [""]
for line in restaurants_csv_lines:
    modified_line = line

    # Count the number of commas.
    number_of_commas = 3 
    if (number_of_commas < expected_commas_for_line_without_keywords):
            # There are no keywords in this line. Choose some randomly.
            number_of_keywords = rand(3,8)
            new_keywords = []
            for _ in range(number_of_keywords):
                new_keywords += styles[rand() % len(styles)]

            # Now we have constructed the new array of keywords,
            # add them on to the new line.
            modified_line += "," + new_keywords.join(" ")

    # Now add the new line into the restaurants_new.csv
    restaurants_new_csv += modified_line + "\n"
    
# Close restaurants_csv
# Close restaurants_new_csv
# Close styles.txt 