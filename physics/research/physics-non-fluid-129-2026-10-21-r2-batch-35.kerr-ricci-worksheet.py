"""Exact-coordinate worksheet for lem-gr-fx-kerr-vacuum-verification.

Coordinates are (t, phi, r, u), u=cos(theta), with -1<u<1 and r>r_+.
All arithmetic is exact SymPy rational-function arithmetic. The curvature
sign is R^a_bcd = d_c Gamma^a_db - d_d Gamma^a_cb + Gamma^a_ce Gamma^e_db - Gamma^a_de Gamma^e_cb,
and Ric_bd = R^a_bad.
"""
import sympy as sp

r, u, M, a = sp.symbols("r u M a", real=True)
t, phi = sp.symbols("t phi")
S = r**2 + a**2 * u**2
D = r**2 - 2 * M * r + a**2
q = 1 - u**2
A = r**2 + a**2

G = sp.Matrix([
    [2 * M * r - S, -2 * M * a * r * q],
    [-2 * M * a * r * q, q * (A**2 - a**2 * D * q)],
]) / S
Ginv = sp.Matrix([
    [-(A**2 - a**2 * D * q) / (S * D), -2 * M * a * r / (S * D)],
    [-2 * M * a * r / (S * D), (D - a**2 * q) / (S * D * q)],
])
h = sp.diag(S / D, S / q)
hinv = sp.diag(D / S, q / S)

# Check the block inverses from the displayed metric, not a numerical sample.
I2 = sp.eye(2)
assert all(sp.cancel(x) == 0 for x in G * Ginv - I2)
assert all(sp.cancel(x) == 0 for x in h * hinv - I2)
assert sp.cancel(sp.det(G) + D * q) == 0
assert sp.cancel(sp.det(h) - S**2 / (D * q)) == 0

g = sp.zeros(4)
ginv = sp.zeros(4)
g[:2, :2], g[2:, 2:] = G, h
ginv[:2, :2], ginv[2:, 2:] = Ginv, hinv
coords = (t, phi, r, u)
Gamma = {}
for upper in range(4):
    for lower1 in range(4):
        for lower2 in range(lower1, 4):
            value = sp.cancel(sum(
                ginv[upper, d] * (
                    sp.diff(g[d, lower2], coords[lower1])
                    + sp.diff(g[d, lower1], coords[lower2])
                    - sp.diff(g[lower1, lower2], coords[d])
                )
                for d in range(4)
            ) / 2)
            if value != 0:
                Gamma[(upper, lower1, lower2)] = sp.factor(value)
                if lower1 != lower2:
                    Gamma[(upper, lower2, lower1)] = Gamma[(upper, lower1, lower2)]

zero = sp.Integer(0)
def gamma(upper, lower1, lower2):
    return Gamma.get((upper, lower1, lower2), zero)

Ric = sp.zeros(4)
for b_index in range(4):
    for d_index in range(4):
        component = zero
        for upper in range(4):
            component += sp.diff(gamma(upper, d_index, b_index), coords[upper])
            component -= sp.diff(gamma(upper, upper, b_index), coords[d_index])
            for e_index in range(4):
                component += gamma(upper, upper, e_index) * gamma(e_index, d_index, b_index)
                component -= gamma(upper, d_index, e_index) * gamma(e_index, upper, b_index)
        Ric[b_index, d_index] = sp.factor(sp.cancel(component))

print(f"nonzero Christoffel components including lower-index symmetry: {len(Gamma)}")
print("independent Ricci components in order (t, phi, r, u):")
for b_index in range(4):
    for d_index in range(b_index, 4):
        value = Ric[b_index, d_index]
        print(f"  ({b_index},{d_index}) = {value}")
assert all(value == 0 for value in Ric)
print("all 10 independent signed Ricci components reduce exactly to zero")
