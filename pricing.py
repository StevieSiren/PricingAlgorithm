#new component price = a * b**x
# Assuming micro plan is $10 and Power is $150

def price():
    x = input("Enter VCPU Amount: ")
    y = input("Enter RAM Amount: ")
    z = input("Enter SSD Amount: ")

    vcpuPrice = 2.36 * (1.0277 ** x)
    ramPrice = 1.17435 * (0.9991 ** y)
    ssdPrice = 0.04769 * (1.0008 ** z)

    vcpuCost = vcpuPrice * x
    ramCost = ramPrice * y
    ssdCost = ssdPrice * z

    # Could add logic for static dollar amount when going above certain resource


    if(x == 2 and y == 8 and z == 100):
        totalPrice += 1
    elif(x == 4 and y == 12 and z == 200):
        totalPrice += 4
    elif(x == 6 and y == 24 and z == 400):
        totalPrice += 4
    else:
        totalPrice = vcpuCost + ramCost + ssdCost





    print("Total Price: " + str(round(totalPrice)))


price()
