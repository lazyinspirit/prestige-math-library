from fractions import Fraction as Q
import json
from pathlib import Path
base=Path('research/inverse-problems-knot-theory-all-109-2026-10-19-owner-tau-whitehead-computation')
d=json.loads((base/'ho25-model-development.json').read_text())
P=[tuple(map(Q,p)) for p in d['period_vertices']]
def T(p):return (Q(121,2)-p[0],Q(89,2)-p[1])
def mod(p):return (p[0]%25,p[1]%16)
assert all(T(P[j])==P[25-j] for j in range(1,25))
W=(Q(20),Q(17,2));Z=(Q(31,2),Q(4))
assert mod(T(W))==Z and mod(T(Z))==W
image=mod(T((Q(0),Q(0))))
assert image==(Q(21,2),Q(25,2))
# Track beta from y=25/2 to16 on the straight final alpha segment x=y+16.
a,b=P[24],P[25]
assert a[0]-a[1]==b[0]-b[1]==16
assert b[1]<Q(89,2)<48<a[1]
assert mod((Q(48+16),Q(48)))==(Q(14),Q(0))
assert all(not Q(25,2)<=y<16 for x,y in [W,Z])
# The affine image of the bridge has the reversed lifted endpoints plus one common deck translation.
assert T(W)==(Z[0]+25,Z[1]+32) and T(Z)==(W[0]+25,W[1]+32)
print('24 genuine corners paired exactly; straight seam preserved; W/Z exchanged; x1 tracks transversely to x25 through the mark-free beta band')
