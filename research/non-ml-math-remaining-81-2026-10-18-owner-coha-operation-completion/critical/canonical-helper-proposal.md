# Exact helper contracts for parent integration

Proposal only; parent owns canonical authoring, dependency-level recomputation,
consumer repair, proof-layout and every native check. Proofs are fully expanded
in rational-topological-supplier.md, sections indicated below. No source theorem
is substituted for those arguments.

## H1: `lem-algebraic-milnor-neighborhoods-admit-controlled-sector-transport`

**Statement.** Assume AC. Let X be a smooth affine complex variety, f:X→C
regular, and p∈f^{-1}(0). For every finite complex algebraic Whitney
stratification of X there is a cofinal system of generic-centred ball/function-
box neighborhoods of p such that f on their closed-ball models is proper
and stratumwise submersive over a punctured rectangle, including the sphere
boundary strata. The maps admit continuous stratum-preserving controlled
transports over compact base paths; these transports preserve the sphere,
its interior and bounded constructible coefficients. Product neighborhoods
for two such functions lift the mixed-quadrant deformation in §2 of the
proof and identify the canonical complement restriction cochain map as a
quasi-isomorphism. Smooth affine charts supply the same statement for
smooth quasi-projective varieties.

**Exact deps.**

- def-axiom-of-choice
- cor-dimension-of-image-plus-generic-fibre
- lem-zero-dimensional-classical-variety-finite
- lem-classical-variety-noetherian-components
- lem-dimension-nonempty-open-subset
- lem-controlled-stratified-submersions-have-continuous-local-trivializations
- lem-complex-algebraic-stratifications-have-finite-conical-cochain-models
- def-finite-complex-algebraic-whitney-stratification-and-control-data
- thm-complex-algebraic-varieties-and-maps-admit-compatible-finite-stratifications

The conormal rank calculation and dense real-diagonal parameter argument are
proved locally, not imported from an unproved relative Thom condition.
Proof: rational-topological-supplier.md §1 and the explicit deformation of §2.
Source: Massey math/9908101, Lemma1.2, full proof read; its implicit Milnor-
box step is filled by the new conormal argument. The existing generic-distance
exhaustion proof inspired this expansion but does not itself assert H1.

## H2: `thm-normalized-rational-vanishing-cycles-have-coherent-operations`

**Statement.** Assume AC. For regular f on a smooth finite-type separated
complex variety X, define

    V_f A=i*RΓ_{Re f≤0}A

in the ambient analytic derived category, with positive-loop continuation.
For constant input Q_X (and its constant shifts), V_fQ_X is bounded
ALGEBRAICALLY constructible. For every bounded algebraically constructible input A, V_fA is bounded
algebraically constructible, and the local-support comparisons have the
following properties:

1. smooth pullback commutes with V, naturally under composition;
2. V_fRp_*≅Rp_*V_fp for proper p, naturally under units, proper composition
   and smooth Cartesian base change;
3. the natural support-Künneth/inclusion map is a Thom–Sebastiani
   isomorphism V_fA⊠V_gB≅k*V_{f+g}(A⊠B), with associative/unit coherence,
   external-product compatibility and tensor-product monodromy;
4. D V_f≅V_f D, with the specified opposite-halfspace/half-turn comparison;
5. affine fibrations yield the ordinary and compact-support homotopy
   identifications with their positive complex orientations.

For the standard constant-input coefficients the proper images, smooth
pullbacks, tensor products and duals used in the quiver correspondence all
lie in the canonical bounded constructible category. The exact normalization
is V_0Q=Q and H^k(V_fQ)_p=tilde H^{k-1}(F_{f,p}); in particular for f=x²
on A¹ the one-dimensional reduced H^0 appears in degree1, and positive
monodromy acts by−1 on that group. No ordinary mixed-Hodge tensor product,
Tate twist or MHM formalism is asserted.

**Exact deps.**

- def-axiom-of-choice
- lem-algebraic-milnor-neighborhoods-admit-controlled-sector-transport
- lem-analytic-six-operation-support-and-trace-calculus
- lem-analytic-constructible-sheaves-admit-coherent-six-operations
- thm-verdier-duality-on-oriented-stratified-complex-varieties
- lem-complex-algebraic-stratifications-have-finite-conical-cochain-models
- thm-principalization-of-ideals
- prop-canonical-resolution-of-marked-ideals
- thm-resolution-of-singularities-in-characteristic-zero
- def-simple-normal-crossings-divisors
- thm-holomorphic-implicit-function-theorem

Proof: rational-topological-supplier.md §§2–4 and6. The nearby-cycle
universal-cover expansion, natural restriction to a chosen lifted positive
sector and its stalkwise quasi-isomorphism are explicitly given in §6;
therefore the support/nearby-cone identification is a natural map, not an
inference from equal stalk dimensions. The principalization/marked-ideal
centres are bound explicitly to their proved support condition.

Sources: complete Massey math/9908101 and0908.2799 arguments read. The actual
canonical principalization and marked-ideal proofs were read in full;
no claim to new reading of their entire external source corpus is made.

## H3: `lem-standard-rational-quiver-vanishing-cycles-realize-critical-correspondences`

**Statement.** Assume AC. Let Q be any finite quiver over C, W any finite
potential, including nonhomogeneous potentials and nonzero critical values.
For M_d=[Rep_Q(d)/G_d] put Φ_{d,z}=V_{Tr(W)_d-z}Q and use the intrinsic
critical homology coefficient K_{d,z}=DΦ_{d,z}. These coefficients descend
coherently to the action nerve, retain their monodromy and have faithful
degreewise product-frame comparisons. Define

    C_n(d,z)=H^{-n}(M_d,K_{d,z}).

For E_{a,b} with a the subobject and b the quotient, put z=z1+z2.
Thom–Sebastiani and smooth commutation give an intrinsic coefficient Ψ_E
with q*(Φ_a⊠Φ_b)≅Ψ_E. There is a canonical proper coefficient morphism

    Φ_{a+b,z}→Rp_*Ψ_E,

obtained by applying V to the constant-sheaf unit. Its dual is the
proper homological coefficient map Rp_*DΨ_E→K_{a+b,z}. It is generally
not an isomorphism. The smooth pullback on C has degree
2r=−2χ_Q(b,a), the proper map has degree0, and both obey composition,
proper/smooth Cartesian pasting, TS and unit coherence on every finite
quiver flag correspondence. Finite disjoint critical-value decomposition
makes the product land in z1+z2. These statements realize the full rational critical coefficient package,
with no restriction on loops or multiplicities. The existing critical CoHA
associativity theorem retains ownership of the final algebra claim.

**Exact deps.**

- def-axiom-of-choice
- thm-normalized-rational-vanishing-cycles-have-coherent-operations
- def-intrinsic-quotient-stack-borel-moore-grading
- lem-quiver-parabolic-levi-borel-model-comparisons
- thm-quiver-quotient-stack-borel-moore-operation-package
- lem-product-general-linear-stiefel-approximations-stabilize-bounded-constructible-hom
- def-quiver-representation-stacks-and-exact-sequence-correspondences
- lem-quiver-exact-sequence-correspondence-is-smooth-and-proper
- lem-quiver-potential-trace-is-additive-on-extensions

Avoid a cycle: H3 may use the trace-additivity lemma, which must depend on
a POTENTIAL-ONLY definition, not on H3. If the current potential/datum
definition is kept combined, put H3 in its justified_by and ensure none of
its outgoing deps reaches back to H3. The simplest split is to retain
potential definition plus generic homology datum in the existing ID, and
let the separate H3 explicitly establish the standard-instance assertion.

Proof: rational-topological-supplier.md §§3,5,7, and the flag/orientation
proof in construction.md (read with rational-only enrichment). The parent
ordinary bridge supplies its actual fixed-group operation maps and
parabolic/Levi identifications; it does not supply critical coefficients.

## Exact corrected generic datum preserving the sound generality

Use PRIMARY HOMOLOGICAL COEFFICIENT complexes K_{d,z} on M_d, each with an
invertible monodromy automorphism, rather than silently equating every
arbitrary coefficient with its Verdier dual. For each extension/value pair
provide K_E together with

    q*(K_{a,z1}⊠K_{b,z2})[2r] ≅ K_E,
    Rp_* K_E → K_{a+b,z1+z2},       r=−χ_Q(b,a).

Require the same identities on iterated flag correspondences: the two
external-product/smooth identifications agree under the tensor associator;
proper coefficient maps compose, commute with proper/smooth Cartesian
exchange and external products, and respect monodromy. Require K_0=Q
and identity coefficient maps in the endpoint correspondences. Define
C_n(d,z)=H^{-n}(M_d,K_{d,z}); multiplication is its oriented smooth
pullback of degree2r followed by the supplied proper coefficient map.
This formulation retains arbitrary supplied coherent rational complexes.
In particular the original generic choice ω⊗Φ is still an admissible K
when its required operations actually exist. It avoids an unsupported
self-duality assertion for arbitrary complexes.

For the STANDARD realization take K=D V_fQ and K_E=DΨ_E. The first
identification follows from smooth duality and TS; the second is the dual
of V_fQ→Rp_*V_fpQ. On smooth charts one can use the proved comparison
K=ω⊗V_fQ. This last identity is special to the standard constant input
and must not be generalized to arbitrary Φ. Give the original vanishing
cycle Φ the positive-loop monodromy, and K its induced dual transport
D(T^{-1}); every operation is equivariant for these automorphisms.

If one prefers to retain both Φ and K in the definition, state K=DΦ only
for the standard instance, and keep arbitrary K as the generic datum.
The term “Thom–Sebastiani” refers to q*(Φ_a⊠Φ_b)≅Ψ_E; there is NEVER an
asserted isomorphism to p*Φ_{a+b}. The two-cycle xy counterexample in
construction.md proves why the distinction is necessary.
