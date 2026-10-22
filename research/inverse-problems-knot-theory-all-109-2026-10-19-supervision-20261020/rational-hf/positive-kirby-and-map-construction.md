# Positive Kirby normalization and the rational-HF map construction

Continuation of `absolute-index-operation.md`; its fixed-presentation and
negative-blow-up calculations are reused unchanged. This file develops the
remaining operations. No canonical edit, independent review, or full original
correction-term closure is claimed.

## The missing Hopf index calculation

Work in a small annular part of a complex torus with coordinates (x,y), x
modulo one. Put α={y=0}, β={y=ε sin(2πx)}, and put the transverse curve
γ={x=1/4}; extend the curves by their usual torus identifications. Place the
basepoint outside the two small triangular regions used below. The αβ pair
is the standard diagram of S¹×S². Its two intersections are θ₊ at x=0 and
θ₋ at x=1/2, with relative grading gr(θ₊)−gr(θ₋)=1. Indeed, the upper
small bigon has oriented boundary going from x=0 to x=1/2 on α and back
on β; it is a Maslov-one disk from the former point to the latter, with
n_z=0. This determines the relative grading without a Morse-sign convention.
Both other pairs give S³.

Use the triangle convention whose oriented boundary runs from the first
input to the output on the first attaching curve. For the ordered triple
(α,γ,β), the small triangle at θ₋ is positively oriented: its boundary runs
from (1/4,0) right on α to (1/2,0), left along β to (1/4,ε), then down γ.
It is the rigid triangle from the S³ generators to θ₋. For (α,β,γ), the
small triangle at θ₊ is positively oriented: its boundary runs from (0,0)
right on α to (1/4,0), up γ, and left along β back to (0,0). It is the
rigid triangle from θ₊ to the S³ generator. The opposite
choices of θ have the wrong orientation for those small regions.

These small embedded triangles have n_z=0 and µ=0. Indeed a conformal
parametrization of each curvilinear triangular disk is unique with the three
corners fixed; doubling the linearized boundary problem gives a vector field
on the sphere vanishing at its three corners, so there is neither kernel nor
cokernel. Their fixed-vertex counts over F₂ are one. This uses only the
one-dimensional local triangle model; stabilization and gluing with the old
diagram use the already accepted analytic interfaces.

To concatenate the two triangle classes, use θ₋ at the intermediate αβ
boundary. Replace θ₊ in the second class by θ₋ using a connecting disk
class. Since gr(θ₋)−gr(θ₊)=−1, this disk has µ−2n_z=−1. Consequently the
two composed topological triangle classes have total µ−2n_z=−1, or raw
grading contribution −µ+2n_z=+1. No holomorphic representative is claimed
for the index-negative connecting class, and no nonzero composite Floer map
is inferred. This is an index comparison, which is exactly what is needed
for grading normalization.

The associated two-handle picture is the zero-framed unknot followed by its
meridian, with the meridian framing −1 chosen in the Hopf gluing. Its
intersection form in capped-handle coordinates is

    Q_H = [[0,1],[1,−1]].

The first sphere is the zero-surgery S². Extensions torsion on the
intermediate S¹×S² have evaluation zero on it. Thus the characteristic
vector has form (0,b), with b odd; Q_H⁻¹=[[1,1],[1,0]], so its rational
Chern square is zero for every b. The signature is zero and χ=2. Its
topological term is therefore −1, exactly cancelling the raw index +1.
The integer ambiguity in gluing the two Spin-c structures is measured by
the periodic sphere at the intermediate boundary. Its c₁ evaluation is
zero, so adding this gluing parameter changes µ−2n_z by zero. The index
calculation consequently applies to every odd b, not just one extension.

## Positive blow-up normalization

Start with a +1-framed unknot and any odd characteristic value a. Add a
disjoint −1-framed unknot with characteristic value −a. In the diagonal
basis (H,E) its form is diag(1,−1), with characteristic evaluations (a,−a).
Slide the first component over the second. The basis (F=H+E,E), after
reversing one orientation if necessary, gives precisely Q_H above, with
evaluation zero on F. The Hopf calculation therefore proves the total
grading contribution is zero. The disjoint negative-blow-up contribution is
already zero by the preceding working proof. Subtracting it proves that a
disjoint +1-framed unknot also changes the grading by zero, for every odd a.

Here c₁ need not be the zero class. Only its square vanishes. This avoids
the misleading sentence `c₁(s′)=0` in the old source's positive-blow-up
proof: in the diagonal coordinates (a,−a) the class is usually nonzero.

## Transport under diagram and Kirby moves

Root supplied the existing accepted surgery-classification interface from
`research/inverse-problems-knot-theory-all-109-2026-10-19-owner-knot-surgery-presentations-round-1/root-integration/root-acceptance.json`.
Its exact scope includes the full Kirby supplier and the relative
existence/completeness used before local S³ O3 elimination. That accepted
topological interface is reused without rereading its repaired sources,
hashing them, or checking them again.

Here is the new index transport. An attaching-family isotopy supplies
moving-boundary strips at the canonical inputs. Their relative-degree
condition is µ−2n_z=0. Splicing them to a triangle changes neither
−µ+2n_z nor its Spin-c extension. For an attaching-circle slide, glue its
canonical equivalence triangle to the old surgery triangle. Split the same
quadrilateral along the other diagonal into the new surgery triangle and
the auxiliary canonical triangle. Additivity identifies the two index
expressions, because the equivalence triangles have µ−2n_z=0. A periodic
ambiguity on an auxiliary boundary has torsion c₁ and contributes zero.
This covers slides among all three attaching families. Stabilization adds
the small triangle with µ=n_z=0 and leaves the topology term unchanged.

Move the joining paths of a bouquet past its attaching disks one at a time.
Cutting the complement along these disks expresses each crossing as a slide
of a surgery curve over an auxiliary curve; between crossings the change is
an isotopy. Hence bouquet changes are covered too. A four-dimensional slide
is represented by the surgery-curve slide and its dual-meridian slide in
the subordinate triple. The preceding transport handles its index part;
the unimodular calculation in the preceding file handles c₁² and σ. The
two signed blow-up calculations handle the remaining Kirby generators.

## Independence of surgery and extending Spin-c structure

Applying this transport and the signed normalization calculations through
the accepted Kirby classification shows that every surgery presentation of
S³, with every extending Spin-c structure, induces degree zero there.
For a fixed boundary structure, compare two extensions over surgery traces
by attaching the same dual-surgery trace back to S³. At a rational homology
sphere the gluing structure is unique once its restrictions are fixed,
since H¹(Y;Z)=0. The index-composition identity cancels the common outgoing
trace. Both composite surgery presentations of S³ have degree zero, so the
original two gradings agree. This proves both extension independence and
surgery-presentation independence. Extension over the traces is described
by characteristic covectors modulo twice the linking lattice, which is
exactly the boundary Spin-c quotient; thus every boundary structure used
here has such extensions.

For intermediate torsion Spin-c manifolds with positive first Betti number,
use the nonsingular quotient of the linking form: k annihilates ker Q
exactly when its boundary Chern class is torsion. Solve Qv=k over Q and
put c₁²=kᵀv. Any other solution differs by ker Q and has the same pairing.
The fixed-triangle and index-transport arguments remain valid. This is the
grading needed on the connected sums with S¹×S² between handle stages.

These constructions therefore give the absolute rational grading under the
reused accepted topology, closed-HF and analytic interfaces. This is an
authored construction, not new independent acceptance or completion of the
infinity-isomorphism part of the rational-ball original.

## Chosen-handle maps and their degree

The remaining full map construction starts with explicit chain maps:

    F₂,s[x,j] = Σ_(y,ψ: µψ=0,s_zψ=s) #₂M(ψ) [y,j−n_zψ],
    F₁[x,j]   = [x⊗θ₊,j],
    F₃[x⊗θ₋,j] = [x,j],    F₃[x⊗θ₊,j]=0.

Strong admissibility and the accepted compactness/gluing interfaces make
the first sum finite on each generator and give its chain-map equation by
the ends of one-dimensional triangle moduli. The tensor interface gives the
chain equations for F₁,F₃. All n_z of counted holomorphic curves are
nonnegative, so each map preserves CF⁻ and descends to CF⁺. The infinity/plus
square therefore commutes already on chains. These facts construct maps
for a chosen handle presentation; their invariance under all changes of
that presentation, and their infinity nonvanishing/isomorphism, still need
the actual handle identities and are not asserted merely by these formulas.

The Hopf model also fixes the S¹×S² absolute degrees once full surgery
independence is established: zero surgery has topological degree −1/2 and
its rigid small triangle takes the degree-zero S³ generator to θ₋. Thus
gr(θ₋)=−1/2 and gr(θ₊)=+1/2. F₁ and F₃ then have degree +1/2, agreeing
with χ=−1, σ=0, c₁²=0 for one- and three-handle additions. Together with
the two-handle calculation this gives the desired Δ formula for a chosen
whole handle presentation.

## The handle identities for the constructed maps

Use the accepted relative handle-move completeness as a topological input,
and keep the fixed global Spin-c structure attached to each moduli problem.
For a two-handle slide use a subordinate quadruple with the old and new
surgery curves and their dual-meridian slide. The boundary strata of its
one-dimensional rectangle moduli give the homotopy between the two ways
of composing the canonical equivalence triangles with F₂. The auxiliary
product of the canonical top generators is the canonical top generator:
in each changed torus there is exactly the small nonnegative triangle
with those corners and n_z=0, counted once; all other local domains have a
negative region. Gluing these local factors with the unaltered diagram is
the accepted analytic operation. Thus F₂ is invariant under the link
slide, and the same argument treats a bouquet or subordinate-diagram
change. Retaining the actual global Spin-c label proves the equality for
that structure; no equality of separately chosen summands across an
intermediate positive-b₁ boundary is assumed.

One-handles append the tensor θ₊ on each new torus. Reordering factors
therefore commutes. A slide changes the generators of the new H¹ by a
unimodular basis change; the appended top exterior generator changes by
its determinant, which is 1 over F₂. This is also seen by the small
canonical-slide triangles in the two involved tori. Three-handles extract
the corresponding bottom factor and kill the top factor; reversing this
same local diagram proves their ordering and slide identities. A change
which moves a two-handle past a one-handle merely changes the bouquet and
the meridian basis at that one-handle; the already described simultaneous
curve-slide identity identifies its map. The reversed statement treats a
two-/three-handle interchange. Disjoint critical events commute by choosing
the separated local diagrams and applying the tensor/gluing interface.

For a cancelling one-/two-handle pair, take the αβ pair in the explicit
torus model at the beginning of this file and its transverse γ. F₁ appends
θ₊. The second of the two displayed small triangles takes θ₊ to the
unique αγ intersection with coefficient one and n_z=0. The composite is
therefore the ordinary stabilization equivalence on the old diagram, with
no U power. A different attaching meridian which cancels the same
one-handle is obtained after compressing the old meridian disks by a
meridian-preserving change of basis of this punctured torus. Perform that
basis change before the local calculation; the associated strong
equivalence is the canonical diagram equivalence, so the composite is
again the identity on the original Floer group. Turning this diagram
around gives the two-/three-handle cancellation: its small triangle lands
in θ₋ and F₃ extracts it, again with coefficient one and n_z=0. These
calculations are the cancellation identities, not assertions based only
on the existence of a topological cancelling pair.

Every generating handle change has now been covered by a canonical
equivalence, associativity homotopy, tensor identity, or one of the two
explicit cancelling-pair counts. The accepted relative move completeness
therefore makes F₃F₂F₁ independent of the chosen handle presentation.
All these homotopies use nonnegative basepoint multiplicities, so they
preserve the negative subcomplex as well and descend to the plus theory.
It follows that the infinity/plus square, already commuting on chosen
chains, is independent of all construction choices. Index transport and
the preceding normalization prove its homogeneous degree is
(c₁²−2χ−3σ)/4 in each flavor.

This finishes the authored map construction/degree operation using the
stated accepted analytic and topology interfaces. It does **not** prove
that its infinity map is nonzero for a rational homology cobordism. That
remaining property requires a separate localization/surgery argument; it
cannot be deduced from the handle-change identities or degree zero alone.
