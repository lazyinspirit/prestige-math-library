# Periodic tensor escape: construction checkpoint

This is continuing constructive authoring, not a review round or acceptance.
The original two source claims remain unchanged. The root has authorized only
two new carriers: the periodic finite-cut escape lemma and the integral tensor
balancedness counterexample.

## Exact reductions established

At total weight zero put a=first divided position and d=second distance from
bottom. The actual periodic shears preserve 0<=a,d<=3. Quasi-R only decreases
these offsets. First weight 2+2t has exactly two possible factor states in
this envelope, hence four raw tensor states. For t=4k+s the two states are:

| s | lower-index state | higher-index state |
|---|---|---|
| 0 | (2k,0) | (2k+1,1) |
| 1 | (2k+1,0) | (2k+2,3) |
| 2 | (2k+2,2) | (2k+3,3) |
| 3 | (2k+2,1) | (2k+3,2) |

For the second factor the listed offset means distance from bottom. Order
the four tensor states LL,LH,HL,HH. The exact raw bar has diagonal I and
transfer matrices B_(t,r), r=1,2,3, since evaluated raising degrees are at
most 3. Its normalized formal coefficient family is uniquely determined by
f_0=(1,0,0,0) and

`f_t=positive_part(sum_(1<=r<=min(3,t)) B_(t-r,r) bar(f_(t-r)))`.

No infinite formal vector is declared to be in the algebraic tensor product.
Each layer is a finite four-vector. Any finite normalized lift must agree
with this family; coordinates outside the stable envelope vanish by the
earliest-first-weight argument.

At odd layers 4k+1 write f=(P,Q,-Q,R) and
L_h=P-2hQ-h²R, h=q²+q^-². The standard diagonal constituent 2k+2 first
appears there at offsets (3,3), with coefficient -L_h/h². All other possible
future residual contributions at that moment have an old first top or an
old second bottom and are bar fixed. Thus the next four-layer completion
depends only on the bar-fixed scalar center coefficient -L_h/h².

The scalar cycle identity, for normalized input
`c=-p((2k-1)h-1)/h²`, is

`L_h,next=-(2k+2)(2k+3)p((2k+1)h-1)`.

The first cycle has L_h=-p(h+1). Hence the exact intended induction is

`L_h(f_(4k+1))=(-1)^k(2k+1)! p((2k-1)h-1)`.

Reduction modulo Phi8=q^4+1 then gives odd endpoint coefficient remainder
`(-1)^k(2k+1)!(q³-q)`, nonzero for every k.

## All-parameter calculation, not extrapolation

`periodic-cycle-symbolic.py` splits k=3m+c, c=0,1,2, and sets x=q^(24m).
For a fixed denominator D dividing a power of q^24-1, it evaluates
q^(24am) modulo D by the exact finite binomial jet
sum_j binom(am,j)(q^24-1)^j modulo D. Rational polynomial quotient/remainder
then evaluates the Laurent positive part. All three symbolic differences
are exactly zero in Q(q,x,m), with required m>=0, recorded in
`periodic-cycle-symbolic.json`. The currently running final rerun adds
explicit denominator/valuation/range information; no new proof conclusion
depends on finite sample extrapolation.

The independent extraction-method cross-check
`periodic-cycle-direct-check.py` uses direct exact Laurent monomial extraction,
without jets. For k=0,...,5 it checked sixteen corrected coordinates per
cycle, anti-bar residuals, normalization equations and the scalar identity;
all differences were zero. This is a second local calculation, not an
independent mathematical audit.

## Finite-cut endpoint coherence

Let P_J retain raw coordinates with both constituent indices <=J and send
them to the corresponding cut raw basis. C and C^-1 only increase constituent
indices, whereas every standard quasi-R term preserves both constituent
indices. An omitted last outgoing shear T_J therefore sends a term outside
the retained rectangle, from which no operator can return. Input coordinates
outside the rectangle likewise cannot return. Consequently

`P_J Psi_full = Psi_cut,J P_J`.

This is an equality of raw-coordinate semilinear maps, not an unproved
restriction to standard cyclic orbits. It also holds between any two cuts.
Finite-cut normalized uniqueness gives P_J g^(L)=g^(J) for L>=J. Thus each
odd endpoint formula remains true in every cut retaining that endpoint,
including a cut whose final outgoing shear has been deleted. Every cut J>=1
has nonzero endpoint index at least J-1.

## Balancedness consequence

Use the explicit natural integral reduction map even though the repository's
balanced-triple definition begins in finite dimension. If g belongs to
L_A intersection L_0 intersection Psi(L_0), then g and Psi(g) have raw
coefficients in Z[q]. Their finite difference w=Psi(g)-g is anti-invariant.
At its least first weight the diagonal bar gives bar(s)=-s. A polynomial
with that property is constant and then zero over Z. Thus w=0. Any natural
balanced lift of the seed would therefore be bar fixed. Its raw-coordinate
projection to every sufficiently large cut would be the normalized cut lift,
contradicting the nonzero escaping endpoints. The natural reduction map is
not surjective; no unsupported unbounded tensor balancedness remains claimed.
