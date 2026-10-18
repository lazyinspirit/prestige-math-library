"""Exact integer certificates for the inverse-Wishart 9/5 slack bound."""
from math import comb, prod

ROWS = [
    (2, 3, 2), (4, 7, 3), (8, 15, 4), (16, 31, 7),
    (32, 63, 11), (64, 127, 17), (128, 255, 27),
    (256, 511, 42), (512, 1023, 67), (1024, 2047, 105),
    (2048, 4095, 167), (4096, 8191, 265),
    (8192, 16383, 421), (16384, 32767, 667),
    (32768, 65535, 1059), (65536, 131071, 1681),
    (131072, 262143, 2000), (262144, 524287, 2000),
    (524288, 999999, 2000),
]

previous = 1
for lo, hi, q in ROWS:
    assert lo == previous + 1 and q <= lo
    catalan = comb(2*q-2, q-1) // q
    for p in (lo, hi):
        left = p * prod(p*p-j*j for j in range(1, q)) * 41**q
        right = 10**q * p**(2*q) * catalan
        assert left >= right, (p, q)
    previous = hi
assert previous == 999999
print('PASS: 38 exact integer endpoint inequalities; intervals cover 2..999999.')

# Simpler sufficient certificate for the downstream ratio 3/2.
previous = 1
for lo, hi, q in [(2, 20, 2), (21, 100, 4), (101, 2499, 16)]:
    assert lo == previous + 1 and q <= lo
    catalan = comb(2*q-2, q-1) // q
    for p in (lo, hi):
        left = p * prod(p*p-j*j for j in range(1, q)) * 123**q
        right = 25**q * p**(2*q) * catalan
        assert left >= right, (p, q)
    previous = hi
assert previous == 2499
print('PASS: 6 exact integer endpoint inequalities; intervals cover 2..2499.')
