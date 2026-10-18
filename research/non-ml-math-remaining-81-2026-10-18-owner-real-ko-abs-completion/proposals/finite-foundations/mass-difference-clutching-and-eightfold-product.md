# Reference-preserving mass differences, Clifford clutching, and eightfold product

This is an isolated mathematical source proposal, not native acceptance. It uses the actual normalized finite positive-extension model and the actual ABS symbol/product interface from the sibling proposals. Nothing here sends a raw mass to an abstract module while discarding its reference identification.

## Inputs and precise comparison

Let W be a finite real inner-product space with fixed orthogonal symmetric involutions e1,…,eq anticommuting pairwise. A mass H is another orthogonal symmetric involution anticommuting with all ei. A difference object has masses H on W and H0 on W0 together with an isometric identification w:W0→W intertwining every fixed generator. Transport H0 by w, henceforth denoting the transported mass again by H0. The identity identification of the underlying fixed representation is retained in this notation. Allowed relations are continuous mass homotopies, simultaneous changes of the fixed representation's orthonormal coordinates (conjugating H and the transported H0 together), direct sum, and addition/deletion of a common reference extension. Every construction below respects those relations. This is the difference model actually classified by the finite homogeneous spaces, rather than the unbased set of abstract extended modules.

For q=0 send the difference to dim(W_H^+)−dim(W_H0^+) in KO^0(pt). Choosing negative eigenspaces instead negates this integer convention and must be done consistently throughout the table. For q≥1 the following clutching construction gives Φq(H,H0,w) in reduced KO(S^q)=KO^−q(pt).

For q=1 split W=W+⊕W− by e1. The masses have matrices [[0,g*],[g,0]] and [[0,g0*],[g0,0]], where g,g0:W+→W− are isometries. Clutch over S^1 by the map S^0→O(W+) with values I and g0^−1g. The base identification w is exactly what made the comparison g0^−1g meaningful. Its determinant gives the component invariant.

For q≥2 use e2 to identify W− with W+. Thus e1=diag(I,−I), e2=[[0,I],[I,0]]. Write every remaining fixed generator ej (j=3,…,q) as [[0,−J(j−2)],[J(j−2),0]], and H as [[0,−A],[A,0]]. The anticommutation and square conditions give

J_i*=−J_i, J_i²=−I, J_iJ_j+J_jJ_i=0; A*=−A, A²=−I, AJ_i+J_iA=0.

The reference mass gives A0 with the same relations to the SAME fixed J_i. Let x=(x0,x1,…,x(q−2),t) lie in S^(q−1). Define

F(A,A0)(x)=x0 I+Σ_i x_i J_i+ t A for t≥0,

F(A,A0)(x)=x0 I+Σ_i x_i J_i−t A0 for t≤0.

On the common equator t=0 these formulas agree. In each hemisphere, skew-adjointness and anticommutation give F*F=(x0²+Σ x_i²+t²)I=I. Thus F is a continuous map S^(q−1)→O(W+), based at (1,0,…,0). Use it as the transition function of two trivial bundles on hemispheres of S^q, and subtract their common rank. This defines Φq.

If A=A0, F factors through the closed upper hemisphere via t↦|t|, and is therefore based nullhomotopic: that hemisphere is a disk, and a disk contracts to the chosen equatorial basepoint while fixing that point. Thus a common reference block contributes zero. Homotopies of A or A0 give homotopies of F. Conjugating the original fixed representation and masses conjugates F by its restriction to W+, giving isomorphic clutched bundles. Direct sums become block sums of transitions, hence sums of reduced classes. This proves well-definedness on stable difference classes. It also shows precisely why the reference is indispensable: changing w can change A0 or g0 relative to H, even when all abstract extension modules are isomorphic.

Reversing H and H0 reverses the hemispheres and gives inverse reduced class. The rotation argument in the relative foundation proposal proves that reflection of the clutching sphere negates its class, including the real component-group convention at q=1. Additivity of general differences can equivalently be seen by gluing the upper-A/lower-A0 hemisphere and upper-A0/lower-A1 hemisphere, then cancelling the two coincident A0 halves; the remaining upper-A/lower-A1 transition is the composition in the stable clutching group. At q=1 this is the multiplication (g0^−1g)(g1^−1g0), after transporting bases, whose component is det(g1^−1g); the stable block-sum and product operations agree.

## The actual generators in low degrees

For q=1 a one-dimensional reflection g0^−1g=−1 gives transition signs +1,−1 on S^0. Following a vector around the clutched real line returns its negative: this is the Möbius line. Its determinant is negative, and stabilization preserves determinant. Hence it is the actual nonzero generator of reduced KO(S^1), not merely an element in a group abstractly isomorphic to Z/2.

For q=2 let W+=R², A=J=[[0,−1],[1,0]] and A0=−J. Then both hemispheres combine to

F(x0,t)=x0 I+tJ, (x0,t)∈S^1.

This is one full rotation in SO(2). As a complex scalar it is x0+it, so the clutched bundle is the underlying real bundle of the complex Hopf line. Under SO(2)→SO(3), lift its rotation by angle θ to the unit quaternion cos(θ/2)+k sin(θ/2); the lift begins at 1 and ends at −1. The quaternion double cover's lifting criterion therefore proves this loop is nontrivial in π1(SO(3)). The sphere-fibration stability proof in the low-clutching lemma keeps it nontrivial in stable π1(O)=Z/2. Thus this is the actual stable generator. This argument also supplies the explicit generator detection requested by the ABS sibling's Fact F3.

For general q=2, a fixed reference orthogonal complex structure A0 is in one of the two O(2n)/U(n) components. Every A in that same component can be joined to A0 and contributes zero. The other component is represented by changing A0 to −A0 on ONE complex line and leaving the other lines unchanged: conjugation by a real reflection does exactly this in an adapted frame. Path connectedness of SO(2n) and U(n) gives the asserted component paths. The unchanged blocks factor through a hemisphere and contribute zero; the changed line gives the preceding one-turn loop, possibly reversed. This proves Φ2 is an isomorphism of the actual component difference group with reduced KO(S²).

For q=4, identify the two fixed negative generators J1,J2 on W+ with left multiplication by i,j on a direct sum of quaternionic lines. Put K=J1J2, left multiplication by k. Every allowed A has A=KS with S an orthogonal symmetric involution commuting with J1,J2: since A anticommutes J1 and J2, it commutes with K, and S=−KA has S*=S and S²=I. Conversely such S gives an allowed A. Choose the elementary opposite pair S=+1,S0=−1 on one quaternionic line. Then A=K,A0=−K and

F(x0,x1,x2,t)=x0 I+x1 L_i+x2 L_j+t L_k.

This is left multiplication by the unit quaternion x0+x1 i+x2 j+t k. It is right-H linear, so it is literally the transition of the tautological quaternionic Hopf line, regarded as a real bundle. The rank-four spinor Thom supplier identifies this SAME symbol with its chosen generator in reduced KO(S⁴); generator status is not inferred from real dimension four. With compatible volume and source-minus-target conventions, it is the positive generator; reversing the chosen difference negates it.

For arbitrary S,S0, connectedness of the quaternionic isometry group allows each involution to be joined, separately, to a diagonal involution in the same fixed quaternionic coordinates. Common +/+ and −/− lines give folded-null transitions. The excess +/− lines give the displayed Hopf map, while −/+ gives its inverse. Thus Φ4 is the integer rank-difference isomorphism to reduced KO(S⁴). The q=0 assertion is the identical real eigenspace rank calculation before clutching. At q=3,5,6,7 the finite extension spaces are connected by the explicit U/Sp orbit models, so their difference component groups are zero; the independent KO coefficient proof makes the targets zero too. Hence Φq is an isomorphism for 0≤q<8 using actual maps.

## Opposite masses give the exact ABS symbol

The key point needed for periodicity is stronger than identifying abstract group names. Suppose H0=−H on a summand of the fixed representation, with w the identity on that summand. For q≥2, A0=−A there, so the piecewise transition becomes the globally linear map

h(x)=x0 I+Σ_i x_i J_i+tA.

Construct a graded negative-square Cq module M on W by taking grading e1 and Clifford generators

c1=e1e2, c2=e1e3,…,c(q−1)=e1eq, cq=e1H.

Every ci is skew-adjoint, squares to −1, is odd for e1 and anticommutes with the others, directly from the positive-generator relations. Identify the odd part W− with W+ using −e2. In this identification c1 from even to odd is I, the middle generators are J_i, and the final generator is A. Therefore its actual even-to-odd symbol c(v) on S^(q−1) is EXACTLY h. Thus Φq of this opposite difference summand is the actual ABS symbol s_q(M), with no loss of reference data and no appeal to an abstract isomorphism of groups.

For q=1 take grading e1 and c1=e1H. Its transition values on S^0 are opposite isometries, and the gauge normalization to I at one point gives −I at the other. For an elementary rank-one determinant change this is the Möbius clutching above and hence the same ABS simple symbol. For q=0 the elementary positive-versus-negative mass difference on a real line is the graded real line, whose even-minus-odd dimension is the integer convention already chosen.

The finite orbit calculations show that, stably, each component difference class is a sum of these elementary opposite pairs and folded-null common blocks: for q0 and q4 this follows by diagonalizing real/quaternionic involutions; for q1 and q2 it follows by one reflection on an adapted real/complex line; for the four connected rows every class is zero. Thus this symbol identification is applied to actual generators of a reference-preserving difference group, not incorrectly to a raw mass in isolation.

## Eightfold matrix stabilization and product by the same beta

Choose positive anticommuting orthogonal generators a1,…,a8 on the real irreducible Cl_(8,0) module S of dimension sixteen. Put Γ8=a1…a8. Since 8·7/2 is even, Γ8²=1; Γ8 is symmetric and anticommutes with each aj. Define the graded negative C8 module B on S with grading Γ8 and bj=Γ8 aj. These bj are odd, skew-adjoint and negative-square. Their ordered product is Γ8. Thus B is the volume-graded irreducible C8 spinor module in the previously fixed ABS/Bott convention; its symbol is the SAME beta, not an arbitrary rank-eight class.

The positive-eight stabilization of a mass model is

E_i=e_i⊗Γ8 (1≤i≤q), F_j=1⊗aj (1≤j≤8), H'=H⊗Γ8, H0'=H0⊗Γ8, w'=w⊗1.

All displayed fixed generators and masses are positive symmetric involutions with the required anticommutations. This is an equivalence of fixed-representation mass problems: the F_j generate 1⊗M16(R); every anticommuting mass M' has M'(1⊗Γ8) in their commutant and hence equals H⊗Γ8. The same calculation recovers the old fixed generators. Matrix units extract the multiplicity space and reconstruct it. This proves actual eightfold Morita equivalence of masses, reference identifications, homotopies and direct-sum stabilization.

For an opposite generator pair with q≥1, take the first fixed generator E1 as grading in the preceding construction. The negative generators of its degree-(q+8) module are

(e1e2)⊗1,…,(e1eq)⊗1; e1⊗(Γ8 a1),…,e1⊗(Γ8 a8); (e1H)⊗1,

and its grading is e1⊗Γ8. Move the last mass coordinate across the eight new coordinates. This permutation is even, hence its orthogonal coordinate change lies in the identity component and induces a homotopy of the compactified symbol. The resulting ordered generators are exactly

c1⊗1,…,cq⊗1; Γ_M⊗b1,…,Γ_M⊗b8,

with grading Γ_M⊗Γ8, where Γ_M=e1. This is LITERALLY the graded tensor module M tensor-graded B. The actual ABS symbol-product lemma therefore gives

Φ(q+8)(stabilize(H,−H,w)) = s_(q+8)(M tensor-graded B) = s_q(M) external-product beta.

Here the symbol-product lemma is the proved matrix totalization argument in the sibling `abs-morita/items/thm-abs-orientation-identifies-cokernels-with-ko.md`, steps 2.1–2.2; it relies on the actual relative product construction, not on a table. Its stated source-minus-target and volume conventions must be retained.

At q=0 check the elementary line separately. Stabilizing H=+1,H0=−1 gives opposite masses Γ8,−Γ8 on S. Its semicircle construction is the linear S7 Clifford-Hopf map on an eight-plane. The associated degree-eight module has grading a1 and generators a1a2,…,a1a8,a1Γ8. Their product is a1: the seven factors a2,…,a8 have square −1, and moving a1 past seven factors contributes another minus. Thus this is the volume-graded irreducible C8 module. By the actual matrix-algebra classification there is a graded orthogonal intertwiner with B: the underlying irreducible C8=M16(R) modules are isomorphic, their volume gradings are the same algebra element, and polar normalization of an intertwiner preserves the action. Consequently its symbol is beta with the same sign. A negative line gives −beta. This verifies the missing rank-zero base case rather than silently changing the grading.

All stable components in degrees 0,…,7 are generated by the elementary pairs described above. Eightfold Morita equivalence transports those actual generators to every nonnegative degree. The equation just proved therefore extends by additivity and homotopy to EVERY mass difference class, and inductively proves Φq is an isomorphism for all q≥0. It intertwines eightfold stabilization with multiplication by beta. The negative-index forms used after adding Dirac generators follow by this explicit periodic stabilization and the same independently proved invertibility of beta. No claim about ordinary maps into a classifying space, arbitrary disorder, or interactions follows from this finite extension model.

## Proof status and exact dependencies

This proposal supplies the previously missing actual difference-to-KO construction and its generator/product comparison. It depends on the complete finite AZ orbit/stabilizer and eightfold matrix-algebra calculations in the parent proposal, the finite real relative triple/product and low-clutching lemmas, the actual Clifford classification, the actual ABS totalization/product proof, and the rank-four/rank-eight spinor Hopf generator/real Bott suppliers. Those sibling sources remain proposed and any mathematical gap in them remains a dependency hold here. In particular this note does not establish the independently required geometric family-Hopf theorem.

No new external source reading is claimed for this extension. The actual source and local proof inputs inspected were the full parent finite-AZ proposal and the full sibling actual-ABS item, plus the explicit finite-foundations source proofs already authored in this directory. A citation to ABS or Kitaev is not replacing the argument above. No canonical edit, native check, gate or commit was performed.
