"""
Finds the multiplication and division of two numbers.
"""

import sys

def main():
    try:
        num1 = float(input('Input first number:'))
    except ValueError:
        print("Not a number.")
        sys.exit()
    try: 
        num2 = float(input('Input second number:'))
    except ValueError:
        print("Not a number.")
        sys.exit()

    product = num1 * num2
    quotient = num1//num2
    print("Product: ", product)
    print("Quotient: ", quotient)

if __name__ == "__main__":
    main()