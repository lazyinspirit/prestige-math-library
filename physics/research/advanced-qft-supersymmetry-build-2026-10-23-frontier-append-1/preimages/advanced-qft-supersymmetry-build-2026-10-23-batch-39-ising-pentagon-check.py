"""Exact finite pentagon check for the skeletal Ising F-symbols.

The scalar pair (a, b) represents a + b/sqrt(2) with rational a,b.
No floating-point arithmetic is used.
"""
from fractions import Fraction
from itertools import product

UNIT, PSI, SIGMA = range(3)
LABELS = (UNIT, PSI, SIGMA)
ZERO = (Fraction(0), Fraction(0))
ONE = (Fraction(1), Fraction(0))
MINUS_ONE = (Fraction(-1), Fraction(0))
INV_SQRT2 = (Fraction(0), Fraction(1))


def add(x, y):
    return (x[0] + y[0], x[1] + y[1])


def multiply(x, y):
    return (x[0] * y[0] + x[1] * y[1] / 2,
            x[0] * y[1] + x[1] * y[0])


def fusion(a, b):
    if a == UNIT:
        return (b,)
    if b == UNIT:
        return (a,)
    if (a, b) == (PSI, PSI):
        return (UNIT,)
    if (a, b) in ((PSI, SIGMA), (SIGMA, PSI)):
        return (SIGMA,)
    if (a, b) == (SIGMA, SIGMA):
        return (UNIT, PSI)
    raise AssertionError("unrecognized simple labels")


def f_symbol(a, b, c, total, left, right):
    """F^{abc}_total[left,right], zero on forbidden fusion channels."""
    if (left not in fusion(a, b) or total not in fusion(left, c)
            or right not in fusion(b, c) or total not in fusion(a, right)):
        return ZERO
    if a == b == c == SIGMA and total == SIGMA:
        sign = -1 if left == PSI and right == PSI else 1
        return (ZERO[0], Fraction(sign))
    if (a, b, c, total) in (
            (PSI, SIGMA, PSI, SIGMA),
            (SIGMA, PSI, SIGMA, PSI)):
        return MINUS_ONE
    return ONE


def pentagon(a, b, c, d, total, f, g, k, ell):
    left = multiply(
        f_symbol(f, c, d, total, g, ell),
        f_symbol(a, b, ell, total, f, k),
    )
    right = ZERO
    for h in LABELS:
        term = multiply(
            multiply(f_symbol(a, b, c, g, f, h),
                     f_symbol(a, h, d, total, g, k)),
            f_symbol(b, c, d, k, h, ell),
        )
        right = add(right, term)
    return left, right


checked = 0
nonzero = 0
for labels in product(LABELS, repeat=9):
    checked += 1
    left, right = pentagon(*labels)
    if left != right:
        raise SystemExit(f"pentagon failure at {labels}: {left} != {right}")
    if left != ZERO or right != ZERO:
        nonzero += 1

if checked != 3 ** 9 or nonzero != 132:
    raise SystemExit(f"unexpected enumeration totals: {checked=}, {nonzero=}")
print(f"PASS: {checked} exact channel assignments; {nonzero} nonzero; 0 failures")
