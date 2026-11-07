---
id: lem-proper-curve-torsion-cohomology-finite-and-field-invariant
kind: lemma
title: Finite and field-invariant torsion cohomology of proper curves
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
- def-axiom-of-choice
- thm-choice-implies-dependent-implies-countable-choice
- def-constructible-etale-sheaf-of-finite-modules
- lem-qcqs-etale-cohomology-has-finite-affine-limit-witnesses
- lem-torsion-etale-cohomology-classes-have-finite-constructible-coefficient-witnesses
- lem-finite-morphism-etale-direct-image-calculus
- lem-site-slice-restriction-locality-and-composition
- lem-etale-module-sheaves-have-exact-conservative-stalks-and-enough-injectives
- thm-tsen-brauer-group-of-function-field-over-algebraically-closed-field-zero
- thm-hilbert-90-for-absolute-galois-group
- thm-continuous-profinite-cohomology-as-direct-limit-of-finite-quotients
- thm-restriction-corestriction-composite-is-multiplication-by-the-index
- thm-sylow-first-theorem
- thm-picard-zero-represented-by-jacobian
- lem-multiplication-by-n-on-abelian-scheme
- thm-curves-function-fields-equivalence
- lem-rational-map-smooth-curve-to-proper-scheme-extends
- thm-proper-quasi-finite-is-finite
- cor-projective-embedding-every-smooth-proper-curve
- lem-projective-coherent-cohomology-finite-and-vanishing
- thm-cohomological-dimension-noetherian-scheme
- thm-cech-computes-qc-cohomology-separated-scheme-affine-cover
- thm-global-functions-proper-integral-variety
- thm-line-bundle-rational-section-cartier-divisor
- thm-cartier-weil-divisors-curves-agree
- thm-local-ring-smooth-curve-dvr
- cor-lisse-etale-sheaves-and-finite-pi1-modules
- thm-finite-etale-covers-equivalent-to-finite-continuous-pi1-sets
- lem-nonempty-finite-type-scheme-over-algebraically-closed-field-has-rational-point
- thm-etale-locally-standard-etale
- thm-jacobian-criterion-smooth-morphism
- thm-etale-equivalent-flat-unramified-fp
- thm-faithfully-flat-ring-map-characterisations
- lem-faithfully-flat-effective-descent-of-modules-and-algebras
- lem-constructible-etale-module-sheaves-embed-in-finite-constant-pushforwards
proof_strategy: direct
axiom_use: AC is explicit; it implies DC where the accepted Picard and Brauer comparisons require it. Geometric points, cohomology models, finite group covers and the supplied algebraic-geometric interfaces are used at that scope. No proper etale base change, curve duality or trace theorem is imported from batch25.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: The Stacks Project, Cohomology of torsion sheaves on curves
    url: https://stacks.math.columbia.edu/tag/03SC
    locator: Full03SC,03SD,0GJA,0A5C,0A3Q,03SG,0A5E displayed proofs read; proper-curve specialization reconstructed locally, without importing the cited curve cohomology calculations.
  - title: The Stacks Project, Methode de la trace
    url: https://stacks.math.columbia.edu/tag/0A3R
    locator: Full59.66.2 proof read; Sylow filtration and trace splitting derived below.
  - title: SGA4 ExposeXIV section1
    url: https://grothendiecksga.com/read/sga4/en/XIV-1.html
    locator: Full displayed section read; proper curve finiteness is developed independently using existing accepted Tsen and field Picard providers.
---

## Statement

Assume the Axiom of Choice. Let k be separably closed and let X be a proper finite-type k-scheme of dimension at most one. For every constructible torsion abelian sheaf F on X_et, all H^q_et(X,F), q≥0, are finite. For every torsion abelian sheaf F they vanish for q>2; if char(k)=p>0 and F is p-primary, they vanish for q>1. For every extension k'/k of separably closed fields and every torsion abelian F, the natural scalar-extension map H^q_et(X,F)→H^q_et(X_k',F|X_k') is an isomorphism for every q≥0. The conclusions require no invertibility of the torsion order for proper X.

## Statement references

[The Stacks Project, Theorem59.83.10](https://stacks.math.columbia.edu/tag/03SC)

[The Stacks Project, Lemma59.83.12](https://stacks.math.columbia.edu/tag/0A5E)

## Facts & Assumptions

**Given:** AC, k, X, F and k'/k at the scope of the Statement. Fix small sites and the required containing universes.

[A1] AC is assumed and supplies DC for the explicitly qualified interfaces. [[def-axiom-of-choice]] [[thm-choice-implies-dependent-implies-countable-choice]]

[F1] At explicit AC scope, Tsen gives Br(K)=0 for every one-variable function field over an algebraically closed field; its current local theorem includes the continuous-cohomological Brauer interpretation. [[thm-tsen-brauer-group-of-function-field-over-algebraically-closed-field-zero]]

[F2] Absolute Hilbert90 gives H1_cts(G_K,K_s^×)=0. Continuous profinite cohomology is computed by finite quotient cochains at AC scope, and the finite-index restriction/corestriction composite is multiplication by the index. [[thm-hilbert-90-for-absolute-galois-group]] [[thm-continuous-profinite-cohomology-as-direct-limit-of-finite-quotients]] [[thm-restriction-corestriction-composite-is-multiplication-by-the-index]]

[F3] A finite group has a Sylow subgroup of the maximal prime-power order dividing its order. [[thm-sylow-first-theorem]]

[F4] The accepted field Picard theorem at AC/DC represents Pic^0 by the Jacobian with its rigidified line-bundle interpretation on all field extensions. Multiplication by an invertible n on an abelian scheme is finite étale and surjective, with finite étale kernel. [[thm-picard-zero-represented-by-jacobian]] [[lem-multiplication-by-n-on-abelian-scheme]]

[F5] At AC scope one-variable function fields over a perfect field have smooth proper geometric curve models; rational maps from a smooth curve into a proper target extend, and proper quasi-finite maps are finite. [[thm-curves-function-fields-equivalence]] [[lem-rational-map-smooth-curve-to-proper-scheme-extends]] [[thm-proper-quasi-finite-is-finite]]

[F6] Smooth proper curves are projective; coherent projective cohomology is finite, dimension-one quasi-coherent cohomology vanishes above one, and finite affine covers compute the latter. Global functions on a proper geometric integral curve are k. [[cor-projective-embedding-every-smooth-proper-curve]] [[lem-projective-coherent-cohomology-finite-and-vanishing]] [[thm-cohomological-dimension-noetherian-scheme]] [[thm-cech-computes-qc-cohomology-separated-scheme-affine-cover]] [[thm-global-functions-proper-integral-variety]]

[F7] Line bundles have rational sections and Cartier/Weil divisors agree on smooth curves; the local rings at closed smooth curve points are DVRs. [[thm-line-bundle-rational-section-cartier-divisor]] [[thm-cartier-weil-divisors-curves-agree]] [[thm-local-ring-smooth-curve-dvr]]

[F8] At AC scope finite lisse module sheaves correspond to finite fundamental-group modules, and finite continuous group sets correspond to finite étale covers. Nonempty finite-type schemes over an algebraically closed field have a rational point. [[cor-lisse-etale-sheaves-and-finite-pi1-modules]] [[thm-finite-etale-covers-equivalent-to-finite-continuous-pi1-sets]] [[lem-nonempty-finite-type-scheme-over-algebraically-closed-field-has-rational-point]]

[F9] Finite pushforward is exact with arbitrary base change and the actual finite product stalk formula. At explicit AC scope geometric stalks are exact and conservative, and the site calculus supplies actual derived composition. [[lem-finite-morphism-etale-direct-image-calculus]] [[lem-etale-module-sheaves-have-exact-conservative-stalks-and-enough-injectives]] [[lem-site-slice-restriction-locality-and-composition]]

[F10] The corrected AC affine-limit witness theorem and the distinct coefficient-colimit helper give the actual fixed-coefficient field-limit and varying-coefficient comparisons. [[lem-qcqs-etale-cohomology-has-finite-affine-limit-witnesses]] [[lem-torsion-etale-cohomology-classes-have-finite-constructible-coefficient-witnesses]]

[F11] At AC scope a standard monic presentation with invertible derivative is étale, a finite-presentation square system with invertible Jacobian is smooth of relative dimension zero and hence étale, and a flat map surjective on spectra is faithfully flat. Effective module/algebra descent uses the invariant equalizer. [[thm-etale-locally-standard-etale]] [[thm-jacobian-criterion-smooth-morphism]] [[thm-etale-equivalent-flat-unramified-fp]] [[thm-faithfully-flat-ring-map-characterisations]] [[lem-faithfully-flat-effective-descent-of-modules-and-algebras]]

## Proof

**Proof technique:** field cohomology, Kummer/Artin–Schreier calculations, finite trace devissage and purely inseparable reduction.

1.1 For a field K with fixed separable closure K_s, its étale abelian sheaves are the discrete continuous G_K-modules. On the affine basis an étale object is a finite product of finite separable fields; a finite Galois extension dominates any finite diagram of these. The sheaf condition on its Galois fibre products is exactly the invariant-section condition M↦M^(G_L), while taking the colimit of sections over finite Galois L gives the inverse discrete module functor. These are inverse exact functors and identify global sections with invariants. Their derived comparison is actual: continuous coinduction Ccts(G,N) is exact under AC because a continuous function has finite image and its finitely many values lift across a surjection. It is right adjoint to exact forgetful restriction, hence sends injective abelian groups to injective G-modules. Coinducing an abelian injective embedding gives enough injectives. The homogeneous continuous-cochain resolution has its underlying extra-degeneracy contraction by insertion of1; its coinduced terms are invariant-acyclic by an abelian injective resolution. Thus its invariant complex computes derived cohomology. This proves the étale/continuous-cochain identification used below, rather than importing a field-cohomology comparison with unspecified models. [A1, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, given, construct, algebra]

2.1 Suppose now K is a one-variable function field over an algebraically closed k and ℓ≠char(k). Fix a primitive ℓ-th root in k. The exact sequence 1→μ_ℓ→K_s^×→K_s^×→1 and Hilbert90 [F2] inject H2(G_K,μ_ℓ) into Br(K)[ℓ], which is zero by [F1]. Thus H2(G_K,F_ℓ)=0. The same proof applies to every finite separable extension L/K, since L is another such function field over k. [A1, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 1.1, given, construct, algebra]

3.1 For every finite discrete F_ℓ[G_K]-module M, choose the finite image G of its action and an ℓ-Sylow P⊂G by [F3]. The open subgroup H mapping to P has index prime to ℓ. Every nonzero finite F_ℓ[P]-module has a nonzero invariant vector: its underlying finite set has ℓ-power cardinality and all nontrivial P-orbits have cardinality divisible by ℓ, so the fixed-vector set has cardinality divisible by ℓ and contains more than zero. Repeating on the quotient gives a finite filtration with trivial one-dimensional quotients. For the finite field extension fixed by H, step 2.1 and the long exact coefficient sequences make H2(H,M)=0. Restriction/corestriction [F2], first on finite quotients and then on their continuous colimit, is multiplication by the prime-to-ℓ index. It follows that H2(G_K,M)=0. [A1, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 2.1, given, construct, algebra]

4.1 Any discrete F_ℓ[G_K]-module is the filtered union of its finite stable submodules: a vector has finite orbit under a compact profinite group, and finitely many finite orbits span a finite F_ℓ-module. Continuous cohomology commutes with this coefficient union because a fixed cochain has finite image and a finite quotient table; a cocycle or a bounding cochain uses finitely many coefficient values and equations. Hence H2 vanishes for every such discrete module. Embed one into Ccts(G_K,M_underlying). The coinduced module is invariant-acyclic by the abelian injective-resolution calculation in step 1.1: coinduce an injective resolution of its underlying abelian group; exact coinduction preserves it and its invariant complex is that original exact resolution. This avoids confusing injectivity over F_ℓ with injectivity among abelian groups. The quotient is again a discrete F_ℓ-module. The long exact sequence gives dimension shifting, and induction proves Hq(G_K,M)=0 for every q≥2. This proves the prime-to-characteristic field cohomological-dimension bound without a free-pro-ℓ-group theorem. [A1, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 3.1, given, construct, algebra, step 1.1]

5.1 A finite radicial surjective morphism induces an equivalence on étale abelian sheaves under the present AC scope. Indeed [F9] identifies both adjunction unit and counit on a given geometric stalk with the identity indexed by its single geometric fibre point. Conservative exact stalks make the two maps isomorphisms. This equivalence preserves global sections and thus all cohomology. It applies to nilpotent reductions and to finite purely inseparable field base changes; an arbitrary algebraic purely inseparable field extension is a filtered union of the finite ones, and [F10] gives the same cohomology invariance for the union. [A1, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 4.1, given, construct, algebra]

6.1 For a quasi-coherent module on an affine scheme, positive étale cohomology vanishes. Here is a local derivation. A class in an actual injective resolution is locally a boundary, so some étale cover kills it. Refine to a finite affine étale covering; its product algebra B is faithfully flat by [F11]. The augmented Amitsur complex M→B⊗M→B⊗B⊗M→... is exact: after tensoring with B, multiplication in the distinguished first factors supplies the split-cover contraction, and faithful flatness reflects exactness. Induct on the cohomological degree for all affine schemes and quasi-coherent modules simultaneously. In the Čech-to-derived spectral sequence, the intermediate positive rows on affine intersections vanish by induction and the coefficient row is the exact Amitsur complex. The edge map into the degree-q cohomology of the cover is therefore injective; our class maps to zero there, so is zero. This proves the induction. Finite diagonals justify the spectral-sequence comparison in each fixed degree. [A1, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 5.1, given, construct, algebra]

7.1 Let C be smooth proper geometrically integral over algebraically closed k. By [F6] it is projective, H0(C,O)=k, H1(C,O) is finite-dimensional, and higher quasi-coherent cohomology vanishes above one. The same groups are its étale O-cohomology: a finite affine cover has affine intersections, which are étale-acyclic by step 6.1, so its Čech complex computes both theories. Under any field extension k'/k, tensoring this finite-cover complex with k' proves the canonical coherent base-change isomorphism Hi(C,O)⊗k k'≅Hi(C_k',O). This is a direct flat-vector-space calculation and is not proper étale base change. [A1, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 6.1, given, construct, algebra]

8.1 If char(k)=p>0, the Artin–Schreier sequence 0→F_p→O→O→0, with arrow Frob-1, is étale-exact: T^p-T-a is monic with derivative -1 and gives the required local roots. On k, Frob-1 is surjective with kernel F_p. On V=H1(C,O), Frobenius is p-semilinear. Since k is perfect, kernels and images of its iterates are k-subspaces. For a sufficiently large iterate, V is the direct sum of its nilpotent kernel part and its stable-image part, on which Frobenius is bijective. On the nilpotent part Frob-1 has polynomial inverse -(1+Frob+...+Frob^(N-1)). [A1, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 7.1, given, construct, algebra]

9.1 On the stable-image part choose a basis and write Frob(x)=A x^[p] with A invertible. The equations Frob(x)-x=b become x_i^p=(A^(-1)x)_i+(A^(-1)b)_i. Reduction of powers gives a basis consisting of monomials with every exponent<p: the reductions terminate by total degree, and overlapping reductions of x_i^p x_j^p give the same product of the two linear right sides, so the normal form is unique. Thus every fibre algebra is finite free of positive rank p^r. Its Jacobian is the invertible matrix -A^(-1), hence it is étale by [F11]. Over an algebraically closed field each nonzero finite-dimensional fibre algebra has a k-point. Therefore Frob-1 is surjective on V(k), with finite étale kernel. The Artin–Schreier long exact sequence now gives H1(C,F_p)=ker(Frob-1 on V), finite, and Hq(C,F_p)=0 for q>1. [A1, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 8.1, given, construct, algebra]

10.1 The Artin–Schreier comparisons are invariant under algebraically closed field extension. Step 7.1 identifies the new coherent H1 with V⊗k k', and its Frobenius is the base-changed additive polynomial just computed. Its finite étale kernel over k is a finite disjoint union of k-points, so its k-points and k'-points agree canonically. The O-coefficient map here is the natural scalar-extension map, not a false identification of the inverse-image O-sheaf with O on the new scheme. Naturality of the two Artin–Schreier sequences gives precisely the required comparison on constant F_p cohomology. [A1, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 9.1, given, construct, algebra, step 7.1]

11.1 For ℓ≠char(k), identify constant F_ℓ with μ_ℓ by the chosen primitive root. The étale Kummer sequence is exact: adjoining an ℓ-th root of a unit is finite étale, since its derivative is a unit. H1_et(C,G_m) is Pic(C): étale G_m-torsors descend rank-one free modules by [F11], producing line bundles, and a global torsor section is a trivialization. Thus H1(C,μ_ℓ) is Pic(C)[ℓ], since k^× is ℓ-divisible. We next compute H2 and higher cohomology independently of duality. [A1, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 10.1, given, construct, algebra]

12.1 Write η=Spec(k(C)) and j:η→C. On an affine étale object over C its generic fibre is a finite product of one-variable function fields finite over k(C); step 4.1 makes their μ_ℓ-cohomology zero in degree≥2. Hence Rq j_*μ_ℓ=0 for q≥2. Also j_*μ_ℓ=μ_ℓ: a generic root of unity is integral and extends on the normal smooth étale curve. For a closed geometric point x, the directed pointed étale local rings over O_C,x are DVRs with the same uniformizer and residue k; their filtered union is again a DVR with value group Z. Each unit there is ℓ-divisible: its data occur at a stage, and adjoining a root of its unit by the standard monic étale equation gives a further pointed neighbourhood. Kummer therefore identifies the stalk of R1 j_*μ_ℓ with Z/ℓ by valuation. At the generic stalk it is zero. The valuation map consequently gives the sheaf identity R1 j_*μ_ℓ=⊕_x i_x,*Z/ℓ, by [F9]. Only the chosen trivialization of μ_ℓ is suppressed in this notation. [A1, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 11.1, given, construct, algebra, step 4.1]

13.1 The positive cohomology of that direct-sum skyscraper sheaf vanishes: each finite sum is a finite closed pushforward from algebraically closed points, whose étale sections functor is exact, and [F10] passes to the filtered sum. Leray for j therefore gives 0→H1(C,μ_ℓ)→k(C)^×/ℓ→Div(C)/ℓ→H2(C,μ_ℓ)→0 and Hq(C,μ_ℓ)=0 for q>2. The middle map is the actual valuation map. By [F7], Pic(C)=Div(C)/principal divisors, so its cokernel is Pic(C)/ℓ. The resulting Pic(C)/ℓ→H2(C,μ_ℓ) is the canonical Kummer boundary: on local trivializations its Čech representative is the same collection of local divisor equations and chosen ℓ-th roots. Thus the isomorphism is natural for field base change, without asserting that generic-point squares are Cartesian under transcendental field extensions. [A1, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 12.1, given, construct, algebra]

14.1 Choose a k-point P of C by [F8]. The rigidified field Picard theorem [F4] identifies Pic^0(C) with J_C(k), and degree splits Pic(C)→Z by P. Under [A1] its DC hypothesis holds. Multiplication by ℓ on J_C is finite étale and surjective by [F4], so J_C(k) is ℓ-divisible and J_C[ℓ](k) is finite. Consequently H1(C,F_ℓ) is finite and H2(C,F_ℓ)≅Z/ℓ by degree. Under extension to algebraically closed k', the relative Picard interpretation identifies the new Jacobian with J_C,k'. Its finite étale ℓ-kernel has exactly the same geometric points, and degree on the two Picard groups agrees. The canonical Kummer diagrams therefore give the required isomorphisms in degrees1 and2. Degree0 is F_ℓ and higher degrees are zero. No generic-field base-change theorem is used in this conclusion. [A1, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 13.1, given, construct, algebra]

15.1 The calculations in steps 8.1–14.1 extend from constant F_ℓ to all finite constant abelian groups by their finite prime-power filtrations and the long exact coefficient sequences. Finiteness, the q>2 bound, the p-primary q>1 bound and the algebraically closed field-extension isomorphism are stable under extensions: kernels, images and quotients of the relevant finite groups are finite, and the natural long exact diagrams give the isomorphism by the five-lemma. Direct sums over finitely many geometric connected components are allowed. [A1, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 14.1, given, construct, algebra, step 8.1]

16.1 We record the finite curve geometry needed to treat general coefficients. For any finite extension L/k(U) from a connected smooth curve open U over algebraically closed k, [F5] gives a smooth proper geometric curve Y with function field L. Its generic map into a proper integral curve X containing U extends to Y→X by [F5]. It is proper: the graph is closed because X is separated, and projection is a base change of proper Y→Spec(k). It is quasi-finite, since a positive-dimensional fibre in an integral curve would be the entire curve, contradicting its nonconstant generic map. Thus it is finite by [F5]. If V→U was the finite étale cover with field L, then Y×X U=V: both finite normal U-schemes have the same function field and are the integral closure of O_U in L. This equality uses normality of the smooth curve algebras, not finiteness of normalization over an arbitrary Noetherian base. [A1, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 15.1, given, construct, algebra]

17.1 We may replace X by its reduction using step 5.1. Remove the finitely many intersections of its one-dimensional irreducible components and the finitely many points where a finite curve-model map from step 16.1 is not an isomorphism. The latter is finite birational; on an affine base its finitely many algebra generators lie in the common function field and their denominators can be cleared, proving that it is an isomorphism on a dense open. Thus there is a dense open U which is a finite disjoint union of smooth connected curves and isolated algebraically closed points. For a constructible sheaf, shrink U further so its restriction is finite locally constant. The complement Z is a finite set of k-points. [A1, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 16.1, given, construct, algebra, step 5.1]

18.1 For an open j:U→X and the finite closed complement i:Z→X, the sheaf sequence 0→j_!j^*F→F→i_*i^*F→0 is exact by its geometric stalks. Here j_! is the ordinary sheaf extension by zero, defined by sections with support closed in the test object and contained in its open inverse image. Its stalk is the original stalk on U and zero off U, so it is exact. These constructions use no derived proper-support functor. By [F9], Hq(X,i_*i^*F)=Hq(Z,i^*F), zero for q>0 and finite in degree0 for finite constructible F. Its field-extension comparison is the identity on the finitely many point stalks. The long exact sequence therefore reduces all the required properties to j_!j^*F. [A1, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 17.1, given, construct, algebra]

19.1 For constructible F take a finite common exponent n. Its primary decomposition and the sequences 0→F[ℓ]→F→F/F[ℓ]→0 reduce, by induction on n, to a finite lisse F_ℓ-vector sheaf G on one connected smooth U and its extension j_!G. The required vanishing, finiteness and field-comparison properties are all stable in those exact sequences as in step 15.1. The isolated dimension-zero components were handled in step 18.1. [A1, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 18.1, given, construct, algebra, step 15.1]

20.1 Choose a geometric basepoint of U, possible by [F8]. Its finite lisse representation has finite monodromy image G0 in GL_d(F_ℓ). Choose an ℓ-Sylow P and let f:V→U be the finite étale connected cover corresponding to the inverse-image subgroup under [F8]. Its degree is [G0:P], prime to ℓ. By the orbit-counting filtration argument in step 3.1, f^*G has a finite filtration with constant F_ℓ quotients. The diagonal and finite étale trace maps G→f_*f^*G→G compose to multiplication by that degree: verify on an étale trivialization of the finite cover by summing its finitely many sheets. Multiplying the trace by the inverse degree modulo ℓ splits the diagonal. [A1, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 19.1, given, construct, algebra, step 3.1]

21.1 Complete V to Y finite over X by step 16.1, with j':V→Y and finite fbar:Y→X. There is a canonical sheaf isomorphism j_!f_*f^*G≅fbar_*j'_!f^*G. Construct the map by the open restriction adjunction. On U it is the stated finite pushforward; off U every fibre coefficient on the right is zero because V=Y×X U. The finite product stalk formula [F9] proves it is an isomorphism everywhere. Finite pushforward is exact and computes cohomology on Y. Exact j'_! preserves the finite filtration, so it remains only to treat j'_!constant F_ℓ on the smooth proper curve Y. [A1, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 20.1, given, construct, algebra, step 16.1]

22.1 The sequence 0→j'_!F_ℓ→F_ℓ,Y→i'_*F_ℓ,Y\V→0 has finite point support on the right. Steps 15.1 and18.1 therefore give finiteness, the stated vanishing bounds and field-extension invariance for j'_!F_ℓ. These pass through its finite filtration and finite pushforward in step 21.1, and then to the direct summand j_!G by the split trace in step 20.1. All constructions commute with field scalar extension: open extension by zero is checked on its stalks, and finite pushforward uses its actual arbitrary-base-change map [F9]. Their trace and diagonal maps are the same finite sheet sums. This proves the properties for every finite constructible sheaf over algebraically closed k. [A1, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 21.1, given, construct, algebra, step 15.1, step 20.1]

23.1 For arbitrary torsion F, [F10] expresses it as a filtered colimit of finite constructible coefficient objects and commutes cohomology with that colimit. Exact inverse image to k' also preserves it. The q>2 vanishing and the field-extension isomorphism now pass to the colimit; finiteness was asserted only for constructible F. If F is p-primary, first write F as the union of F[p^r] and use finite coefficient presentations over Z/p^r, so the same argument uses only p-primary finite witnesses and gives the q>1 bound. No spurious prime-to-p witness is required. [A1, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 22.1, given, construct, algebra]

24.1 Finally let k and k' be merely separably closed. In characteristic zero they are already algebraically closed. In characteristic p, their algebraic closures are their perfect closures, which are algebraic purely inseparable extensions; choose compatible embeddings, or use the uniqueness of p-power roots in a common closure. Each is a filtered union of finite purely inseparable field extensions. Step 5.1 and [F10] identify the cohomology over k with that over its perfect closure, and similarly over k'. The algebraically closed comparison proved in steps 22.1–23.1 between these closures gives the original comparison. Properness, finite type, dimension and constructibility persist under these field base changes. Thus finiteness and both vanishing assertions descend as well. [A1, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 23.1, given, construct, algebra, step 5.1, step 22.1]

25.1 A proper dimension-zero scheme over a separably closed field has, after its nilpotent reduction, finitely many purely inseparable residue extensions; the same finite radicial equivalence reduces it to finitely many points with exact section functor. The empty scheme and zero coefficient groups therefore satisfy all conclusions too. The maps throughout are the actual restriction/scalar-extension maps from the sheaf adjunctions and natural coefficient sequences. This completes the full proper-curve claim at explicit AC scope, independently of batch25 proper base change, Poincaré duality, trace and weight theorems. [A1, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 24.1, given, construct, algebra] ∎
