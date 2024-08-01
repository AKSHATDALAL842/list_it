#include <iostream>
using namespace std;

int cntgloves(int arr[], int n){
	int count = 0;
	sort(arr, arr + n);
	for (int i = 0; i < n - 1;) {
		if (arr[i] == arr[i + 1]) {
			count++;
			i = i + 2;
		}
		else {
			i++;
		}
	}
	return count;
}
int main()
{
	int arr[] = { 6, 5, 2, 3, 5, 2, 2, 1 };
	int n = sizeof(arr) / sizeof(arr[0]);
	std::cout << cntgloves(arr, n);
	return 0;
}
