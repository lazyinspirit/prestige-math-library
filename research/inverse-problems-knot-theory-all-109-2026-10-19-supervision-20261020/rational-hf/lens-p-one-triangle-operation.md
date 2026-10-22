# The actual q=1 lens triangle and characteristic evaluation

This is a local finite construction for the unresolved lens-grading input.
The absolute grading and global cobordism-map invariance are still being
assembled in the adjacent working proofs. No canonical change or final
correction-term acceptance is claimed.

## A concrete torus model

Take the oriented complex torus R²/Z². Let α be horizontal, β vertical, and
let γ be the straight circle px+y=ε modulo Z, for an integer p≥1 and a
small positive irrational ε. Thus γ represents −α+pβ. The αβ and βγ
pairs are diagrams of S³; the αγ pair represents −L(p,1) in the OS
convention. A basepoint z is chosen with x,y both sufficiently close to 1,
so px+y>p+ε, and outside all three curves.

For i=0,…,p let ψ_i be the projected Euclidean triangle with lifted
vertices

    (0,0),    ((i+ε)/p,0),    (0,i+ε).

Use the ordered triangle convention in which the oriented boundary runs
from the first input along α to the output, then on γ to the second
input, then back on β. These triangles are positively oriented. Their
outgoing αγ intersections advance cyclically by one as i increases. The
first and last outgoing intersections agree on the torus. Every lift of z
with nonnegative coordinates has px+y>p+ε, whereas any other lift has a
negative coordinate. Therefore none lies inside any ψ_i and n_z(ψ_i)=0.

The relative homotopy class determines the three lifted boundary lines and
their lifted vertices. A holomorphic representative lifts to a holomorphic
map to the plane. Reflection across the straight edges and the argument
principle show that its image is the corresponding Euclidean triangle with
degree one: the boundary follows its three prescribed lines once between
the vertices; a second covering would multiply its boundary winding and
contradict that relative class. The Riemann map normalized at the three
corners is unique. Doubling the linearized problem identifies its kernel
with vector fields on the sphere vanishing at three points, and its
cokernel is zero. Thus this triangle has Maslov index zero and contributes
one modulo two. This is the local rigid count, not a count inferred from a
source recurrence.

## The periodic domain and its actual spider count

On the open fundamental square use the integral function

    P(x,y) = floor(px+y−ε) − p.

Across a γ lift its value increases by one; across the vertical cut its
periodic value jumps by −p; across the horizontal cut it jumps by −1.
It is therefore the integral triply-periodic domain with boundary
multiplicities p,1,1 on β,α,γ respectively, with orientations determined
by these jumps. All its coefficients are nonpositive, its maximum is zero,
and its minimum is −p−1. The chosen basepoint has coefficient zero.
Counting boundary circles with multiplicity gives p+2.

Its Euler measure is zero. One direct calculation is to cut along the
three families of straight boundary segments, sum each region's ordinary
Euler characteristic minus one quarter for each right-angle corner, and
use the displayed jump relations at the cuts. The pairs at the horizontal
and vertical identifications cancel, as do the two sides of each γ strip;
there is no exterior boundary of the torus left. Equivalently this is the
relative Euler number of its pulled-back torus tangent bundle, using the
constant tangent direction on each straight attaching segment: each closed
straight boundary circle has zero tangent winding and the torus tangent
bundle has a constant frame. The latter description also applies to the
integer signed domain, by additivity.

For ψ_i choose the central point of the dual spider very close to (0,0),
inside px+y<ε and the first quadrant. Its P coefficient is −p−1. Choose
its α and β legs short, so they meet no translated boundary. Take the γ
leg transverse towards the third edge px+y=i+ε. It crosses precisely the
i intervening γ lifts, with signed contribution +1 each; the translate of
its final edge is pushed to the outside. The translates of the α and β
boundaries are likewise taken outside the small triangle at the two short
legs, consistently with their induced orientations as boundaries of P.
Consequently the actual dual-spider number is

    σ(ψ_i,P) = −p−1+i.

This count also works for the largest projected triangle: its leg crosses
the p intervening lifts in the plane, so no projection ambiguity loses a
crossing. In particular σ is not −p+i, which is the q=1 substitution in
the inconsistent displayed values of the old absolute-grading paper.

## Chern evaluation from the plane-field clutching

Here is the geometric content of the triangle Chern calculation, specialized
to this domain. Cap the α,β,γ boundary circles of P by their compressing
disks in the triple cobordism. A representative of the resulting closed
two-cycle is arranged over the central point and three legs of the spider.
The oriented two-plane field defining the triangle Spin-c structure splits
the four-dimensional tangent bundle into it and its complementary plane;
the latter has a nonvanishing vector along this representative, pulled back
from the spider. Only the first plane contributes to c₁.

Over the central P piece its relative Euler number is the Euler measure.
A cap disk contributes one, with the signed boundary multiplicity: this
totals the p+2 boundary circles. The local modification of the plane at a
triangle sheet contributes two times that sheet's signed intersection;
sliding that sheet along a spider leg across a translated attaching curve
adds the same two turns to the determinant clutching map. This is seen in
one complex normal coordinate: use the unit normal
`n(u,v)=(2u,2v,1−u²−v²)/(1+u²+v²)` on the one-point compactification
of the normal plane. Its degree is +1, and its orthogonal oriented plane
is the pullback of TS², whose Euler number is 2. Thus the modification
changes the relative Euler number by +2 at a positive sheet crossing;
reversing the oriented crossing reverses the degree. The basepoint
modification uses the opposite local degree and has winding −2.
Adding the relative clutching degrees on these pieces therefore gives

    <c₁(s_z(ψ_i)),H(P)> = e(P)+(p+2)−2n_z(P)+2σ(ψ_i,P)
                       = 0+(p+2)+2(−p−1+i)
                       = 2i−p.

Thus the missing characteristic evaluation is obtained from the actual
domain and its legs, with consistent arithmetic. It is characteristic
because it is congruent to −p modulo two. Advancing i changes it by two;
advancing i by p changes it by 2p, the change produced by twisting by the
Poincaré dual of the capped core. Hence the boundary labels are exactly the
cyclic Spin-c labels modulo p, including the duplicated label at i=p.

Filling the auxiliary S³ turns this triple cobordism into the punctured
disk bundle of Euler number −p. Its zero section is the capped-core cycle
H(P), with square −p: a normal section winds −p times around the boundary
framing. The handle linking matrix is (−p). The rational-square calculation
from the adjacent working proof consequently gives

    c₁(s_z(ψ_i))² = −(2i−p)²/p.

## The precise grading consequence

The rigid count above gives the generator-to-generator triangle term with
no power of U. In each outgoing Spin-c summand there is just one αγ
generator, so its Floer differential is zero: a nonconstant disk from that
generator to itself would lift to a disk with boundary on two straight
lines and would have index minus twice the basepoint multiplicity zero;
an index-one counted disk is impossible. Thus this local complex is one
Laurent generator and its usual plus quotient. In the candidate absolute
grading its zero-U generator has degree

    (c₁²−2χ−3σ)/4 = [1−(2i−p)²/p]/4,

since χ=1, σ=−1 and the incoming S³ normalization is zero. This is the
bottom tower degree of −L(p,1). Reversing orientation negates the bottom
degree once the full grading/duality bridge is established, yielding the
original positive-surgery formula

    d(L(p,1),i) = ((2i−p)²−p)/(4p).

The final sentence remains an implication using the still-owed global
absolute-grading/duality bridge. The local triangle count, characteristic
label and rational-square computation above do not depend on pretending
that this remaining bridge has been supplied.
