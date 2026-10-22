# Rational-HF absolute-index operation: constructive working proof

This is mathematical authoring for the unresolved rational-grading/map branch,
not a new review cycle or a claim that the full correction-term package is
complete. Accepted closed-HF invariance, analytic gluing/compactness, relative
disk gradings, and tensor interfaces are reused without inspection or checks.
No canonical carrier or original Statement/Definition is changed.

## A grading for one actual surgery presentation

Let an integral framed link with m components present the rational homology
sphere Y as surgery on S³. Its trace W has nonsingular integral linking matrix
Q. Choose a subordinate pointed Heegaard triple, the canonical-degree input
generators x of S³ and Θ of the auxiliary connected sum of S¹×S², and one
Whitney triangle ψ from (x,Θ) to y, representing an extension s of the
specified boundary Spin-c structure. Define

    G_(W,s)([y,j]) = 2j − µ(ψ) + 2n_z(ψ)
                    + (kᵀQ⁻¹k − 2m − 3 signature(Q))/4,

where k is the vector of evaluations of c₁(s) on the capped handle surfaces.
For another output y′ in the same boundary Spin-c structure, concatenate ψ
with a disk from y to y′ and use the displayed formula. The disk relative
grading interface is an accepted input. Thus the formula actually assigns a
rational number to every generator in that Spin-c summand; no assertion about
the holomorphic triangle count being nonzero is needed.

Here is the precise fixed-presentation well-definedness argument. For fixed
corner generators, two triangles defining the same Spin-c extension differ by
a sum of self-disks on the three boundary pairs and a sphere class. One can
see the kernel statement directly by cutting each triangle at three paths
from an interior point to its boundary sides. Matching the induced Spin-c
obstruction removes the interior two-cycle; the three remaining boundary
cycles are exactly the self-disks. The remaining difference is the sphere
obtained by identifying the boundaries of the two cut disks. This is the
usual topological triangle-class/Spin-c identification, not a claim that all
triangles are holomorphic. Stabilize once if necessary so that the sphere
class of the symmetric product has index 2 and basepoint multiplicity 1.

For a self-disk on a boundary pair, its index minus twice its basepoint
multiplicity is the evaluation of the boundary c₁ on its capped periodic
domain. All three boundary c₁ classes here are torsion. Consequently those
differences vanish. A sphere changes the index and twice the multiplicity by
the same number. Additivity now proves that −µ+2n_z is independent of the
chosen triangle representing the fixed extension. Replacing x or Θ by
another generator in its canonical relative degree has the same proof,
using a connecting disk with µ−2n_z=0. For a disk φ from y to y′,

    G(y) − G(y′) = µ(φ) − 2n_z(φ).

In particular the differential has degree −1 and U has degree −2. The
inclusion of the negative subcomplex and the quotient to the plus complex
have degree zero. These statements prove an actual rational chain grading
for the fixed surgery data, rather than merely assigning a degree to maps.

## The rational Chern square in that formula

The capped handle surfaces are a basis of H₂(W;Q), with intersection matrix
Q. Under Poincaré–Lefschetz duality, the map from absolute to relative
two-dimensional homology is represented by Q in the corresponding dual
bases. Hence the rational inverse image of the cohomology class whose
evaluation vector is k is Q⁻¹k. Pairing once more gives

    c₁(s)² = kᵀQ⁻¹k.

This also proves independence of the handle basis: for a basis change P the
matrix becomes PᵀQP and the evaluation vector becomes Pᵀk; substituting
their inverses gives the same scalar. A handle slide is just such an integral
unimodular change. The intersection form is nonsingular because the two
boundary components are rational homology spheres: the long exact sequence
of the pair makes H₂(W;Q) → H₂(W,∂W;Q) an isomorphism. Torsion components
of c₁ vanish after tensoring with Q. Finally W is obtained from S³×I by m
two-handles, so χ(W)=m. This establishes every topological term used above.

## Actual negative blow-up normalization

Add a disjoint −1-framed unknot. Its characteristic evaluation is any odd
integer a=±(2r+1), r≥0. The linking matrix gains a summand (−1), so its
contribution to the topological degree term is

    (−a²−2+3)/4 = −r(r+1).

The standard torus triple for this handle has straight attaching lines of
slopes 0, infinity, and −1, each pair intersecting once on the torus. Lift
to the plane. Triangles in the two families with characteristic evaluation
±(2r+1) consist of the smallest triangular region together with r further
successive layers. The added layers contain respectively 1,2,…,r lifts of
the basepoint. Thus n_z=r(r+1)/2. Each triangle lifts to a Euclidean
triangle with its three ordered vertices fixed. Its conformal parametrization
is unique modulo the automorphisms of the disk fixing these three boundary
points; that automorphism group is trivial. Schwarz reflection identifies
the kernel of its linearized problem with holomorphic vector fields on the
doubled sphere vanishing at three points, hence with zero. The same doubling
shows cokernel zero. Its Maslov index is therefore zero. Reflection gives
the other family, with the same multiplicity and index.

Consequently the added triangle contributes −µ+2n_z=r(r+1), which exactly
cancels the topological term. The fixed-presentation rational grading is
unchanged by a disjoint negative blow-up, for every Spin-c extension on the
exceptional summand. This is an actual index/basepoint cancellation, not an
appeal to the absolute-grading theorem. The triangle gluing interface makes
the same calculation apply when it is connected-summed with the original
triple. It also fixes the normalization for the empty S³ presentation at zero.

## Composition over a rational homology sphere

For two actual traces glued along a rational homology sphere, rational
Mayer–Vietoris identifies their H₂ groups as an orthogonal direct sum: the
outer capped surfaces can be chosen on their own sides and have zero mutual
intersection. Thus c₁² and the signature add. Euler characteristic adds
because the gluing three-manifold has Euler characteristic zero. Therefore
the topological degree expression Δ=(c₁²−2χ−3σ)/4 adds exactly.

Gluing two triangle classes into a quadrilateral adds their indices and
basepoint multiplicities. The other splitting of that quadrilateral changes
them by the index and multiplicity of the auxiliary canonical triangle.
The canonical-degree choice makes that triangle's index minus twice its
basepoint multiplicity zero. Therefore the two expressions −µ+2n_z agree
under this change of splitting. Combined with the preceding additive Δ
calculation, this proves the composition identity for the candidate grading.
It is the finite index operation behind the two-handle degree-shift formula.
Analytic associativity remains supplied by the accepted polygon interface.

For a chosen two-handle map, a counted triangle has index zero. Its output
integer is j−n_z. Substituting in the definition gives, term by term,

    G(output) − G(input) = Δ(W,s).

This is the promised degree calculation at the chain level for the chosen
trace. Choice independence of the trace and the naturality of the full map
are not inferred from this term-by-term calculation.

## A zero-degree calculation requiring no Floer-map assumption

If W is a rational homology cobordism between rational homology spheres,
then H₂(W;Q)=0, σ(W)=0, and χ(W)=0. The rational square of every extending
c₁ is zero. Hence its required degree shift is zero in both orientations.
This calculation does not prove that the infinity map is nonzero or an
isomorphism. A zero map is homogeneous of every degree; replacing that
missing nonvanishing statement by a degree assignment would be invalid.

## Exact remaining construction

The candidate above has not yet been shown independent of an arbitrary
surgery presentation or of its Spin-c extension. In the source route the
next real operations are positive Kirby stabilization, the zero-framed Hopf
index model used to normalize it, and the reverse-surgery comparison. They
cannot be omitted merely because the negative blow-up calculation is done.
The full one-/two-/three-handle map must also be assembled with its actual
handle-change identities, and its infinity isomorphism proved. The
rational-ball original remains held until those operations are supplied.

The lens-space calculation has a separate concrete source issue. In OS
*Absolutely graded Floer homologies*, Proposition 4.8, the displayed values
on PDF p.27 of v1 are χhat(P)=0, #(∂P)=p+q+1, n_z(P)=0, and
σ(ψ_i,P)=−p−q+i+1. Inserting them into the stated Chern formula
χhat+#(∂P)−2n_z+2σ gives 2i+3−p−q, not its claimed 2i+1−p−q.
The PDF was visually inspected; the current arXiv text repeats the values.
The desired q=1 evaluation 2i−p therefore still needs an independent
matching of the characteristic structure to the actual triangle. This note
does not copy the inconsistent arithmetic or claim the full lens formula
proved from it.

Primary proof reading: actual OS *Holomorphic triangles and invariants for
smooth four-manifolds*, math/0110169v2, §6 and all of §7; OS *Absolutely
graded Floer homologies*, math/0110170v1, §4.1 and §9.1–9.2. These are
authoritative full-text readings of those sections, not a claim to have read
every section of either paper. Sources are cached alongside this note under
`sources/`. No accepted library supplier was reread, hashed or validated.
