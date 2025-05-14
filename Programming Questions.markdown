# Programming Questions with Scenarios

Below is a list of programming questions, each accompanied by a real-world scenario to provide context for their application. These questions build on algorithmic and problem-solving concepts, introducing advanced challenges suitable for practical use cases.

---

1.  
**Question:**  
Write a function `findPairsWithSum(arr, target)` that takes an array of numbers `arr` and a target sum `target`, and returns all unique pairs of numbers that sum to the target. If no pairs are found, return an empty array.

**Scenario:**  
You are developing a financial planning tool that helps users allocate investments. Write a function to identify pairs of stocks whose combined prices equal a user-specified budget, enabling users to diversify their portfolio efficiently.

---

2.  
**Question:**  
Write a function `maxSubArraySum(arr)` that takes an array of numbers `arr` and returns the maximum sum of any contiguous subarray. If the array contains only negative numbers, return the largest single number.

**Scenario:**  
You are building a stock market analysis tool. Write a function to find the maximum profit achievable from a sequence of stock prices over a period, helping traders identify the best buying and selling period.

---

3.  
**Question:**  
Write a function `compressString(str)` that takes a string `str` and compresses it by replacing consecutive repeated characters with the character followed by the count of repetitions (e.g., `"aabcccc" -> "a2b1c4"`). If the compressed string is not shorter than the original, return the original string.

**Scenario:**  
You are developing a messaging app with limited bandwidth. Write a function to compress message text before transmission to reduce data usage, ensuring efficient communication in low-network conditions.

---

4.  
**Question:**  
Write a function `findCycleLength(arr)` that takes an array of integers `arr` representing a permutation (where each element is an index pointing to another position in the array) and returns the length of the cycle starting from index 0. If no cycle exists, return -1.

**Scenario:**  
You are designing a task scheduler for a project management system. Write a function to detect and measure the length of cyclic task dependencies, helping project managers identify and resolve circular dependencies.

---

5.  
**Question:**  
Write a function `matrixSpiralOrder(matrix)` that takes a 2D matrix `matrix` and returns an array containing the elements of the matrix traversed in a spiral order (starting from the top-left corner, moving right, down, left, and up).

**Scenario:**  
You are developing a game with a grid-based map. Write a function to generate a path for an NPC (non-player character) to traverse the map in a spiral pattern, creating an engaging exploration mechanic for players.

---

6.  
**Question:**  
Write a function `longestCommonPrefix(strs)` that takes an array of strings `strs` and returns the longest common prefix shared by all strings. If no common prefix exists, return an empty string.

**Scenario:**  
You are building an autocomplete feature for a search engine. Write a function to find the longest common prefix among search suggestions, improving the efficiency of displaying relevant results to users.

---

7.  
**Question:**  
Write a function `isValidParentheses(s)` that takes a string `s` containing parentheses (e.g., `()`, `[]`, `{}`) and returns `true` if the parentheses are validly nested and matched, and `false` otherwise.

**Scenario:**  
You are developing a code editor for a programming language. Write a function to validate the nesting of parentheses in user-written code, ensuring syntactical correctness before compilation.

---

8.  
**Question:**  
Write a function `mergeIntervals(intervals)` that takes an array of intervals (each interval is an array `[start, end]`) and merges overlapping intervals, returning the merged intervals in sorted order.

**Scenario:**  
You are creating a scheduling application for meeting rooms. Write a function to merge overlapping meeting times, helping administrators optimize room bookings and avoid scheduling conflicts.

---

9.  
**Question:**  
Write a function `wordBreak(s, wordDict)` that takes a string `s` and an array of words `wordDict`, and returns `true` if `s` can be segmented into a space-separated sequence of words from `wordDict`, and `false` otherwise.

**Scenario:**  
You are developing a natural language processing tool for text analysis. Write a function to check if a given sentence can be broken down into valid words from a dictionary, aiding in spell-checking and text validation.

---

10.  
**Question:**  
Write a function `findMedianSortedArrays(arr1, arr2)` that takes two sorted arrays `arr1` and `arr2` and returns the median of the combined sorted array. If the total length is even, return the average of the two middle numbers.

**Scenario:**  
You are building a data analytics platform for medical research. Write a function to calculate the median value of two sorted datasets (e.g., patient test results), ensuring accurate statistical analysis for research reports.

---

11.  
**Question:**  
Write a function `reverseWords(s)` that takes a string `s` and reverses the order of words in the string while keeping the characters within each word unchanged. For example, `"Hello World"` becomes `"World Hello"`.

**Scenario:**  
You are developing a text processing tool for a publishing platform. Write a function to reverse the order of words in article titles, creating unique headline formats for improved reader engagement.

---

12.  
**Question:**  
Write a function `shortestPath(graph, start, end)` that takes an adjacency list representation of a weighted graph `graph`, a start node `start`, and an end node `end`, and returns the shortest path length between them using Dijkstra’s algorithm. If no path exists, return -1.

**Scenario:**  
You are building a navigation app for a delivery service. Write a function to compute the shortest delivery route between two locations, optimizing fuel usage and delivery time for drivers.

---

13.  
**Question:**  
Write a function `generateCombinations(n, k)` that takes two integers `n` and `k` and returns all possible combinations of `k` numbers chosen from the range `[1, n]`.

**Scenario:**  
You are developing a lottery ticket generator. Write a function to generate all possible combinations of `k` numbers from a pool of `n` numbers, helping users create valid ticket entries.

---

14.  
**Question:**  
Write a function `maxProfit(prices, k)` that takes an array of stock prices `prices` and an integer `k`, and returns the maximum profit possible from at most `k` buy-sell transactions.

**Scenario:**  
You are building a trading platform for stock market enthusiasts. Write a function to calculate the maximum profit a user can achieve with a limited number of trades, helping them optimize their investment strategy.

---

15.  
**Question:**  
Write a function `kthSmallest(matrix, k)` that takes a sorted `n x n` matrix `matrix` (where each row and column is sorted in ascending order) and an integer `k`, and returns the `k`th smallest element in the matrix.

**Scenario:**  
You are developing a ranking system for a sports analytics platform. Write a function to find the `k`th smallest score in a sorted matrix of player performance metrics, enabling accurate ranking of athletes.

---

16.  
**Question:**  
Write a function `lruCache(capacity)` that implements a Least Recently Used (LRU) cache with a given `capacity`. The cache should support two operations: `get(key)` to retrieve the value associated with a key (returning -1 if the key does not exist) and `put(key, value)` to insert or update a key-value pair, evicting the least recently used item if the cache is full.

**Scenario:**  
You are building a web browser with limited memory. Write a function to implement an LRU cache for storing recently visited web pages, ensuring efficient memory usage and quick access to frequently visited sites.

---

17.  
**Question:**  
Write a function `minWindowSubstring(s, t)` that takes two strings `s` and `t` and returns the minimum window substring of `s` that contains all characters of `t` (including duplicates). If no such substring exists, return an empty string.

**Scenario:**  
You are developing a text search tool for a document management system. Write a function to find the shortest section of a document that contains all specified keywords, helping users quickly locate relevant content.

---

18.  
**Question:**  
Write a function `topKFrequent(nums, k)` that takes an array of numbers `nums` and an integer `k`, and returns the `k` most frequent elements in the array in any order.

**Scenario:**  
You are creating a recommendation system for an e-commerce platform. Write a function to identify the `k` most frequently purchased products, enabling personalized product recommendations for users.

---

19.  
**Question:**  
Write a function `isValidSudoku(board)` that takes a 9x9 Sudoku board (represented as a 2D array of characters, where empty cells are denoted by '.') and returns `true` if the board is a valid partial Sudoku (i.e., no duplicate numbers in any row, column, or 3x3 subgrid), and `false` otherwise.

**Scenario:**  
You are developing a Sudoku game app. Write a function to validate the current state of a player's Sudoku board, ensuring it adheres to game rules before allowing further moves.

---

20.  
**Question:**  
Write a function `reconstructQueue(people)` that takes an array of people, where each person is represented as an array `[h, k]` (height `h` and the number of people `k` in front who are taller or the same height), and returns the reconstructed queue as an array of `[h, k]` pairs.

**Scenario:**  
You are building an event management system for seating arrangements. Write a function to reconstruct the order of attendees in a queue based on their heights and the number of taller or equal-height people in front, ensuring accurate seating assignments.

---

These questions and scenarios introduce advanced algorithmic challenges, such as sliding window techniques, priority queues, and constraint-based reconstructions, while remaining grounded in practical, real-world applications. Let me know if you'd like sample solutions or further details for any of these!