---
id: lem-gts-two-marked-spine-and-elliptic-symmetry
kind: lemma
title: Two-marked spine factors and elliptic evaluation symmetry
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 8
domain: mathematics
library: physics
category: string-theory
proof_strategy: direct
deps:
  - lem-gts-adapted-log-map-atlas-and-supported-vertex-cone-comparison
  - lem-gts-projective-df-log-map-foundations
  - lem-gts-toric-local-virtual-and-scattering-comparison
  - thm-qftx-projective-gaga-for-monad-data
dependency_roles:
  lem-gts-adapted-log-map-atlas-and-supported-vertex-cone-comparison: mathematical-premise
  lem-gts-projective-df-log-map-foundations: mathematical-premise
  lem-gts-toric-local-virtual-and-scattering-comparison: mathematical-premise
  thm-qftx-projective-gaga-for-monad-data: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pending
---

## Statement

For the supplied one-end connected smooth anticanonical pair and canonical enumerative theta algebra, the supported two-marked spine comparison has theta_q coefficient p R_(p,q), with the external constrained leg contributing the denominator p. The actual original two-marked virtual one-cycle satisfies p^2 R_(p,q)=q^2 R_(q,p). No rationality hypothesis on X is needed. The conclusion uses the same proper full-type vertex comparison and componentwise integral curve-class convention.

## Facts & Assumptions

**Given:** The actual scheme/log/trace data specified in the Statement.

[F0] The declared native dependencies supply their exact contracts. No native acceptance or published attribution is inferred for this candidate.

[F1] The local derivations written in full below establish the constituent constructions, retaining all local units, original trait parameters, source/base nilpotents and component labels. They are proved parts of this item; the companion manifest records source paths and hashes solely as provenance.

## Inline local derivations

### Inline construction 1

#### Coherent comparison for projective curves and surfaces by finite projection

Research binding lemma, using the ACTUAL P² projective-coherent GAGA supplier rather than extending its public dimension scope by assertion. Exact published item read in full: `physics/items/thm-qftx-projective-gaga-for-monad-data.md`, whose absolute Statement is for P²/P³. Its exact local flatness/coherence supplier applies to all finite-type complex local rings. We need only cohomology and Hom comparison for algebraic coherent sheaves on an algebraic projective curve or surface, not essential surjectivity for arbitrary analytic sheaves.

Embed an integral projective variety Z of dimension r≤2 in P^N. Choose r+1 general linear forms with no common zero on Z; the incidence dimension for a codimension-r-1 linear center gives this choice. They define a morphism f:Z→P^r with f*O(1)=O_Z(1) ample. No fiber contains a curve, because its pullback O(1) would have degree zero on it. Thus f is proper quasi-finite and hence FINITE. The same argument on finitely many components handles any projective coherent sheaf support needed here. For r=1 include P¹ as a line in P² after taking finite projection; for r=0 include its finite support in P². Consequently a finite map followed by a closed inclusion reduces every required cohomology comparison to a coherent sheaf on P².

For a finite algebraic map, pushforward of quasi-coherent modules is exact on each affine inverse image, higher direct images vanish, and H^q(Z,F)=H^q(P^r,f_*F). Analytification commutes with this FINITE pushforward. To check this last assertion without a general relative-GAGA claim, take a finite affine algebra presentation and a finite module presentation. The natural comparison (f_*F)^an→f^an_*F^an has, at a complex base point, the completed stalk map equal to the finite product of the completed module maps over its finitely many preimages. The local analytic/algebraic comparison gives exactly these common completions. Both sides are coherent analytic modules: the finite algebra/module matrices give their finite analytic presentations. Faithful flatness of completion of a Noetherian analytic local ring therefore makes the map an isomorphism.

Analytic finite pushforward is exact even on underlying abelian sheaves. The map is closed with finite fibers in Hausdorff analytic spaces. For disjoint neighborhoods of the finitely many preimages of a point, properness shrinks a base neighborhood whose whole inverse image lies in their union. These neighborhoods are cofinal, so the pushforward stalk is the finite product of the source stalks. Finite products are exact. Pushforward also preserves flasque sheaves (restriction is restriction on inverse-image opens). Pushing a flasque resolution thus proves H^q(Z^an,F^an)=H^q((P^r)^an,f^an_*F^an) directly. Closed inclusions are treated the same way, or by their exact extension-by-zero pushforward.

Apply the published P² comparison to the coherent pushforward (and its closed inclusion if r<2). This gives the canonical isomorphism

    H^q(Z,F) → H^q(Z^an,F^an)

for EVERY q and every algebraic coherent F on the projective curve or surface Z. The construction is natural, since it is the same finite-presentation and cohomology pullback comparison on both sides. For coherent F,G, exact analytification and finite presentation identify Hom-sheaves; the q=0 comparison gives full faithfulness on algebraic coherent objects. In particular an algebraic line bundle on a projective curve which is holomorphically trivial is algebraically trivial: its holomorphic nowhere-vanishing section algebraizes, and its zero locus is empty on the algebraic scheme as well.

This supplies the algebraic/analytic H¹(O_S) comparison used in the outer-cycle Hodge argument and the holomorphic-to-algebraic line-bundle step used in the elliptic evaluation symmetry. It invokes neither GAGA on arbitrary P^N outside the published supplier's Statement nor algebraization of holomorphic families over a nonproper base. Published status is the actual item metadata, not a new acceptance receipt; its scoped verification remains Root-owned.

### Inline construction 2

#### Two marked spines: the external contact denominator and actual evaluation symmetry

Research proof packet. The global degeneration/type-inventory theorem remains the separately owned geometric input; this note supplies its two-contact multiplicity and the symmetry on the original proper moduli. No rationality assumption on the surface is made. The boundary is connected, smooth, nonempty and anticanonical. Infinity means the supplied single primitive end of the actual dual complex, not a consequence asserted merely from smoothness.

#### 1. Actual moduli and the claimed factors

Let X be a smooth connected projective complex surface, D a connected smooth divisor with O_X(D)=K_X^{-1}, and beta an effective nonzero curve class with beta.D=p+q, p,q>0. Let M be the actual proper basic genus-zero logarithmic stable-map stack with labelled contacts (p,q), actual virtual dimension one and virtual class V. Let e_1,e_2:M→D be its two evaluations. Thus R_(p,q)=deg(e_1^*[x] cap V). Relabelling the two sections identifies the stack, its obstruction theory and virtual class with those defining R_(q,p), and carries the second evaluation to the first. This operation does not silently move the point insertion while leaving the notation fixed.

The two conclusions are

    [s^beta y^(−p)] theta_(q,infinity) = p R_(p,q),
    p² R_(p,q) = q² R_(q,p).

The first formula suppresses the source's separate filtration monomial. It compares the actual curve-class coefficient with the same filtration convention on both sides; it does not assert a new power of t. Its required global input is an exhaustive supported virtual specialization into the actual anchored tree types described below. The second formula is proved directly on M and needs no tropical correspondence or rationality classification.

#### 2. The constrained external leg has NO normal-node gluing factor

Take an actual rigid transverse genus-zero type with two labelled ordinary unbounded legs of weights p,q. The point constraint is on the p-leg, in the open torus of its boundary divisor. All remaining terminals are the supplied actual anchored relative pieces. Orient the unique spine from the p-leg toward the q-leg; orient each attached disk toward its attachment. Retain all exceptional virtual degrees and automorphism groups. First solve the attached disk matching equations as in the actual prelog packet.

At the first spine vertex, the boundary evaluation condition is the primitive quotient equation N_v→N_v/Z n_p. It is an actual boundary-torus point equation, not multiplication by p on that torus: characters annihilating n_p have zero order at the marking and evaluate to the primitive quotient of the translation constant. At subsequent spine vertices, the incoming parent-edge quotient and the already solved side-disk quotient give the two matching rows. Ordering vertices from the constrained p-leg toward the free q-leg gives the same block-triangular elimination as the prelog packet. Each diagonal block is the pair of primitive quotient maps, with determinant |det(n_parent,n_side)|. Normal logarithmic gluing and Cartier specialization supply the contact weight for EACH COMPACT edge, and for each actual attached relative node. They supply no such factor for the external constrained marking. In particular there is no equation uv=t or primitive-base root choice at that external marking.

For comparison, expand the product of weighted trivalent determinants. Allocate a parent-spine weight and a side-attachment weight to each receiving vertex. Each compact spine edge and each side attachment is used exactly once. The free q-leg is never allocated. The constrained p-leg IS allocated at the first spine vertex and contributes precisely p. Consequently, writing W(Gamma) for the product of weighted vertex determinants, actual attached relative weights and the inverse of the actual label-preserving automorphism order, the actual graph contribution is

    Cont_(p-fixed)(Gamma) = W(Gamma)/p.                         (1)

All signs from exceptional covers remain in W. This is not a quotient by a group of order p: it is the absence of an external normal-node factor. A bivalent degree-p propagation component, if introduced by target refinement, must retain its ordinary mu_p automorphisms and its p enhancement choices together; these cancel, so (1) is unchanged. Vanishing determinant blocks give nonrigid or empty generic incidence fibers and are not treated as transverse contributions.

The proof uses the actual Smith-normal-form degree, actual normalization tangent/obstruction complex and primitive-base Cartier multiplicity in [[lem-gts-toric-local-virtual-and-scattering-comparison]]. It is equally the one-constrained-external-contact instance of the external-weight denominator proved in [[lem-gts-toric-local-virtual-and-scattering-comparison]], after all other incoming contacts have been glued to their actual anchored pieces.

#### 3. Broken-line completion and coefficient pR

The exponential wall crossing on an incoming spine monomial z^m is

    z^m exp(sum_U det(U,m) A_U z^U).

It holds for EVERY integral m, including m=q n_infinity; primitivity was not used in its derivation. Expanding assigns to each unordered collection of attached connected disks its determinant factors and its actual symmetry divisor. Following the unique spine gives exactly the completed-tree weight W(Gamma). Starting with q instead of one changes the actual integral spine vectors and hence their determinants; it contributes no additional normalization q. Cutting the spine recovers the broken line and its attached multisets, so weighted completion is a bijection of these finite coefficientwise groupoids. This is the explicit exponential/polarization construction in [[lem-gts-toric-local-virtual-and-scattering-comparison]], with the word “primitive” removed only from the incoming-spine hypothesis; its formulas themselves already allow arbitrary m.

Place the constrained endpoint in the unbounded chamber. Cut the p-leg at that endpoint to obtain the completed disk; extend it again to recover the labelled two-ended curve. The endpoint carries multiplicity one and no extra vertex determinant. Thus the coefficient of beta y^(−p) is sum_Gamma W(Gamma). If the actual supported virtual specialization has precisely this exhaustive incidence inventory, (1) gives

    R_(p,q) = sum_Gamma W(Gamma)/p,

which proves the first formula. Proper supported specialization, exhaustiveness and existence of the target refinement are premises at this join; neither the finite matching calculation nor a formal scattering identity proves them. No claim is made that selecting some rigid drawings establishes the inventory.

#### 4. The fixed elliptic restriction class, without Pic0(X)=0

Adjunction makes K_D trivial, so the connected smooth projective curve D has genus one. Fix an origin o∈D and identify Pic^d(D) with the elliptic curve E=D by O_D(sum n_i x_i)↦sum n_i(x_i−o), d=p+q.

Restriction Pic0(X)→Pic0(D) is ZERO. Indeed the divisor sequence is

    0→K_X→O_X→O_D→0.

The connecting map H¹(O_D)→H²(K_X) is Serre-dual to restriction H⁰(O_X)→H⁰(O_D), under adjunction and the trace pairing. The latter is an isomorphism because X and D are connected and projective. Hence the connecting map is an isomorphism, and exactness makes H¹(O_X)→H¹(O_D) zero. This is the differential of the restriction homomorphism of complex Picard varieties. A homomorphism of complex tori with zero differential lifts to a zero complex-linear map on their universal covers and is the zero homomorphism. The same conclusion needs no representability theorem for Picard varieties: on the analytic spaces, the exponential exact sequence 0→Z→O→O*→1 says that a line bundle with c_1=0 is represented by a class in H¹(O_X). Its restriction vanishes because the just-computed restriction H¹(O_X)→H¹(O_D) is zero. The exponential sequence is locally exact by a holomorphic logarithm of a nonvanishing function. Its integer connecting cocycle is the ordinary integral c_1, obtained by choosing logarithms of transition functions. Coherent analytic/algebraic comparison for the proper curve D identifies the resulting holomorphic trivialization with an algebraic one. Thus all line bundles on X with the same integral first Chern class restrict to one fixed line bundle L_beta on D. This uses the integral curve class, rather than an unspecified numerical class modulo torsion; if a curve-class coefficient groups several integral classes, apply the argument to each first and then sum.

#### 5. Abel relation for EVERY geometric log map, including boundary components

No rational irreducible component maps nonconstantly to the smooth genus-one curve D: a nonconstant map P¹→D is finite, and the ramification formula −2=deg(f)·0+deg(R) is impossible. Thus all source components contained in D are constant. The pushforward of the remaining source components with their actual map degrees is an effective Cartier divisor A on the smooth surface X, of integral class beta.

The scheme-theoretic intersection divisor A|D is

    p e_1 + q e_2.                                             (2)

Here is the necessary check at boundary ghosts. Remove the non-D source components. A connected remaining subtree maps to a single x∈D. At a contracted vertex the degree of the pulled-back normal line O_X(D)|D is zero. The line/section interpretation of its logarithmic contact relation therefore says that the signed outgoing slopes, including marked slopes, sum to zero. Sum this equality over the subtree: internal-edge slopes cancel. The contacts arriving from non-D components equal the sum of the marked orders on that subtree. The contacts on a non-D component are exactly the zero orders of its pulled-back canonical D-section, hence its intersection multiplicities with D. Markings directly on non-D components obey the same zero-order statement. Summing over all subtrees gives (2), including coincident evaluations and arbitrary multiple covers. There are no omitted positive-degree components inside D.

By §4, O_D(A|D)=L_beta. Therefore every geometric point of M satisfies

    [p](e_1−o)+[q](e_2−o)=a_beta in E,                         (3)

where a_beta is fixed by L_beta. Equality on geometric points is sufficient here: it makes each reduced integral cycle supporting the virtual one-cycle map into the closed fiber F_beta of the indicated morphism E×E→E. No assertion that a set-theoretic identity supplies a new infinitesimal moduli equation is required.

#### 6. Actual evaluation degrees on the elliptic fiber

On F_beta, the morphisms [p]∘pr_1 and translation_(a_beta)∘[−q]∘pr_2 agree. Translation acts trivially on H²(E;Q), and multiplication [n] acts by n²: on E=C/Lambda its action on each of the two degree-one generators is multiplication by n, hence on their cup product by n². Consequently on every integral proper curve in F_beta,

    p² deg(pr_1^*[o]) = q² deg(pr_2^*[o]).                     (4)

This argument also covers constant projections, singular curves and disconnected fibers. Equivalently normalize each curve before taking degrees; the finite stack stabilizer factors multiply both sides by the same rational number. The actual virtual class is a rational one-cycle on the proper DM stack M, represented by a finite rational sum of integral one-dimensional substacks. Apply (3)–(4) to each representative and use linearity. This proves

    p² deg(e_1^*[o] cap V) = q² deg(e_2^*[o] cap V).

Finally the actual relabelling isomorphism from §1 identifies the second degree with R_(q,p). This is the required symmetry with the point on the FIRST contact in each notation. It does not arise from assuming the two evaluation degrees equal, nor by simply reversing a weighted tropical path.

#### Completed comparison interface

The elliptic symmetry is proved independently of the global tropical comparison. The coefficient theorem uses the now-supplied native prerequisite [[lem-gts-adapted-log-map-atlas-and-supported-vertex-cone-comparison]]: steps 1.4 and 14.2 supply the finite full-type envelopes and steps 1.5, 2.3, 14.3, 15.2, 16.1, 17.1, 14.4 and 18.1 supply their nontransverse logarithmic-diagonal, original-generic-cone and local-expansion equality. Its A1 dependency supplies the actual local target refinement, while [[lem-gts-toric-local-virtual-and-scattering-comparison]] supplies the local vertex/scattering factors. These are declared dependencies of this package, so no unresolved global-inventory premise remains here. This construction supplies the external factor and independent symmetry, rather than claiming to derive those separate target-model results. The stated proof applies to one connected smooth anticanonical D and one supplied infinity end; a disconnected boundary needs its component-assigned evaluation/Picard relation and cannot inherit this scalar formula by suppressing component labels.

## Proof

1.1 Apply the inline local derivations in their stated finite branch order, with the actual scheme, log and trace data of the Statement. The derivations preserve the entire generic pair, class and component labels, nilpotent equations and supported cone operations wherever those occur. [F1]

2.1 Their combination gives the Statement using exactly the declared native dependency contracts. Provenance paths are not logical suppliers. This is a draft source candidate; dependency levels and ordinary native review/acceptance remain owner operations. [1.1,F0] ∎
