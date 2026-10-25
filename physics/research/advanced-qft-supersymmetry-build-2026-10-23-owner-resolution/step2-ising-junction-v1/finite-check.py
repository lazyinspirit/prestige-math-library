"""Bounded independent integer checks, not proof/gate acceptance."""
from itertools import product

def bitvectors(length):
    return list(product((0, 1), repeat=length))

checked = 0
for length in range(2, 7):
    bits = bitvectors(length)
    size = len(bits)
    # Raw K multiplied by sqrt(2^L); j here is the zero-based array index.
    raw = [[(-1) ** sum(a[j] * (h[(j-1)%length] + h[j]) for j in range(length)) for h in bits] for a in bits]
    # Source convention r_j = hat h_(1/2-j) for one-based j.
    # Therefore a[j] = r[-j-1] in zero-based array indices.
    endo = [raw[bits.index(tuple(r[(-j-1)%length] for j in range(length)))] for r in bits]
    for i, v in enumerate(bits):
        for j, h in enumerate(bits):
            assert endo[i][j] == endo[j][i]
            target = size * (int(v == h) + int(v == tuple(1-x for x in h)))
            assert sum(endo[i][k] * endo[k][j] for k in range(size)) == target
            assert sum(raw[k][i] * raw[k][j] for k in range(size)) == target
            assert sum(raw[i][k] * raw[j][k] for k in range(size)) == target
            # H / J has diagonal -sum ZZ and off-diagonal -X flips.
            diag_h = -sum((-1)**(h[k] + h[(k+1)%length]) for k in range(length))
            diag_v = -sum((-1)**(v[k] + v[(k+1)%length]) for k in range(length))
            right = endo[i][j] * diag_h
            left = diag_v * endo[i][j]
            for k in range(length):
                flip_h = tuple(x ^ int(t == k) for t, x in enumerate(h))
                flip_v = tuple(x ^ int(t == k) for t, x in enumerate(v))
                right -= endo[i][bits.index(flip_h)]
                left -= endo[bits.index(flip_v)][j]
            assert left == right
            checked += 1

def delta(x,y): return int(x == y)
def shift(x,y): return int(y == (x+1)%2)
def sign(x,y): return (-1)**x * delta(x,y)
for h,hp in product((0,1),repeat=2):
    assert sum(delta(h,k)*delta(k,hp) for k in (0,1)) == delta(h,hp)
    assert sum(shift(h,k)*shift(k,hp) for k in (0,1)) == delta(h,hp)
    assert sum(sign(h,k)*sign(k,hp) for k in (0,1)) == delta(h,hp)
    assert delta(h,hp) + shift(h,hp) == 1
    assert delta(h,hp) - shift(h,hp) == (-1)**(h+hp)
    for a,b in product((0,1),repeat=2):
        qa = shift if a else delta
        zb = sign if b else delta
        lhs = sum(zb(h,k)*qa(k,hp) for k in (0,1))
        rhs = sum(qa(h,k)*zb(k,hp) for k in (0,1))
        assert lhs == (-1)**(a*b)*rhs
print(f'PASS: L=2..6, {checked} matrix entries: reflected symmetry, both typed fusions, endodefect fusion and Hamiltonian commutator; all binary delta/shift/sign recouplings.')
