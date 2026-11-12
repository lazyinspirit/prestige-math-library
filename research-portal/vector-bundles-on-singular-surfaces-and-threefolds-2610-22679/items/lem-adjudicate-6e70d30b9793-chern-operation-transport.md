---
id: lem-adjudicate-6e70d30b9793-chern-operation-transport
kind: lemma
title: Projective relations transport the actual universal Chern operations
status: published
domain: mathematics
deps:
  - lem-adjudicate-6e70d30b9793-field-unit-zigzag
  - lem-adjudicate-6e70d30b9793-em-picard-square
  - lem-chern-relation-uniqueness
  - thm-author-d026a7b99ace-universal-chern-space
  - def-motivic-chern-classes
  - math:def-axiom-of-choice
  - lem-adjudicate-00232ac8c49e-stable-universal-class-detection
  - math:def-perfect-field
  - math:def-smooth-morphism-schemes
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-grothendieck-universe-closure-convention
  - def-scheme-sites-and-sheafification
  - def-nisnevich-covering-interface
  - def-derived-sections-on-sites
  - def-stable-spectra-interface
  - def-cohomology-with-support
  - lem-adjudicate-3ef731a812d9-em-coefficient-mapping-bridge
  - def-nonconnective-k-spectrum-interface
  - lem-adjudicate-a6bf10648fa2-finite-type-field-qcqs
  - math:lem-finite-type-local-on-source-and-target
  - math:def-quasi-compact-and-quasi-separated-morphism
dependency_roles:
  lem-adjudicate-6e70d30b9793-field-unit-zigzag: mathematical-premise
  lem-adjudicate-6e70d30b9793-em-picard-square: mathematical-premise
  lem-chern-relation-uniqueness: mathematical-premise
  thm-author-d026a7b99ace-universal-chern-space: mathematical-premise
  def-motivic-chern-classes: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  lem-adjudicate-00232ac8c49e-stable-universal-class-detection: mathematical-premise
  math:def-perfect-field: mathematical-premise
  math:def-smooth-morphism-schemes: mathematical-premise
  math:def-locally-finite-type-and-finite-type-morphism: mathematical-premise
  math:def-quasi-compact-and-quasi-separated-scheme: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
  def-scheme-sites-and-sheafification: mathematical-premise
  def-nisnevich-covering-interface: mathematical-premise
  def-derived-sections-on-sites: mathematical-premise
  def-stable-spectra-interface: mathematical-premise
  def-cohomology-with-support: mathematical-premise
  lem-adjudicate-3ef731a812d9-em-coefficient-mapping-bridge: mathematical-premise
  def-nonconnective-k-spectrum-interface: mathematical-premise
  lem-adjudicate-a6bf10648fa2-finite-type-field-qcqs: mathematical-premise
  math:lem-finite-type-local-on-source-and-target: mathematical-premise
  math:def-quasi-compact-and-quasi-separated-morphism: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 22
formulation_deps:
  - lem-adjudicate-6e70d30b9793-field-unit-zigzag
  - lem-adjudicate-6e70d30b9793-em-picard-square
  - thm-author-d026a7b99ace-universal-chern-space
  - def-motivic-chern-classes
  - math:def-axiom-of-choice
  - lem-adjudicate-00232ac8c49e-stable-universal-class-detection
  - math:def-perfect-field
  - math:def-smooth-morphism-schemes
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-grothendieck-universe-closure-convention
  - def-scheme-sites-and-sheafification
  - def-nisnevich-covering-interface
  - def-derived-sections-on-sites
  - def-stable-spectra-interface
  - def-cohomology-with-support
  - lem-adjudicate-3ef731a812d9-em-coefficient-mapping-bridge
  - def-nonconnective-k-spectrum-interface
  - lem-adjudicate-a6bf10648fa2-finite-type-field-qcqs
  - math:lem-finite-type-local-on-source-and-target
  - math:def-quasi-compact-and-quasi-separated-morphism
argument_deps:
  - lem-adjudicate-6e70d30b9793-field-unit-zigzag
  - lem-adjudicate-6e70d30b9793-em-picard-square
  - lem-chern-relation-uniqueness
  - thm-author-d026a7b99ace-universal-chern-space
  - def-motivic-chern-classes
  - math:def-axiom-of-choice
  - lem-adjudicate-00232ac8c49e-stable-universal-class-detection
  - math:def-perfect-field
  - math:def-smooth-morphism-schemes
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-grothendieck-universe-closure-convention
  - def-scheme-sites-and-sheafification
  - def-nisnevich-covering-interface
  - def-derived-sections-on-sites
  - def-stable-spectra-interface
  - def-cohomology-with-support
  - lem-adjudicate-3ef731a812d9-em-coefficient-mapping-bridge
  - def-nonconnective-k-spectrum-interface
  - lem-adjudicate-a6bf10648fa2-finite-type-field-qcqs
  - math:lem-finite-type-local-on-source-and-target
  - math:def-quasi-compact-and-quasi-separated-morphism
local_argument_provenance: ai-generated
---

## Statement
Assume the Axiom of Choice and the compatible nested Grothendieck universes of the supplied constructions, with $\omega$ in the smaller universe. Fix a perfect field $k$. Work on the size-bounded site $\mathrm{Sm}_k$ of smooth finite-type qcqs $k$-schemes and all $k$-morphisms, with the Zariski or Nisnevich topology. Separatedness is not required. The specified integral Spitzweck/classical-to-EM coefficient comparison preserves every projective-relation bundle coefficient, including the universal finite-rank coefficients. For every $i\geq1$, the actual EM stable universal map has a classical preimage, unique as a pointed homotopy class among stable maps with those finite-rank coefficients.

Define the classical pointed perfect-$K$ operation on this site by transporting the supplied actual EM operation through the inverse coefficient equivalence. With this explicit construction, the two pointed perfect-$K$ operations and their closed-support fiber maps agree under the coefficient comparison, naturally in the whole restriction diagram. The transported operation has the original classical projective-relation values on bundles. The term completed pointed operation here denotes this explicit transported operation and the supplied actual EM operation; agreement with an independently constructed classical Gillet, Asakura–Sato or Riemann–Roch operation is a separate construction-comparison obligation, not a conclusion of this lemma. The coefficient $c_0=1$ is preserved separately as the unpointed total-series constant and supplies no additive-target support-fiber operation. All comparisons are integral in every characteristic. Retain the supplied inverse-limit convention for open restrictions; every open complement in the stated smooth finite-type domain is itself a site object.

## Statement references

[[lem-adjudicate-6e70d30b9793-field-unit-zigzag]]

[[lem-adjudicate-6e70d30b9793-em-picard-square]]

[[lem-chern-relation-uniqueness]]

[[thm-author-d026a7b99ace-universal-chern-space]]

[[def-motivic-chern-classes]]

[[lem-adjudicate-00232ac8c49e-stable-universal-class-detection]]

## Definition

A perfect field has every nonconstant irreducible polynomial separable. Smooth and finite type refer to the structural morphism to $\operatorname{Spec}k$. A qcqs scheme is quasi-compact and has quasi-compact intersections of affine opens. Use the fixed universe-bounded category of such smooth finite-type schemes. Zariski covers are jointly surjective open-immersion families; Nisnevich covers are the supplied étale families with residue-field-preserving lifts. Universe existence is a separate size assumption, independent of Choice. Space-valued sheaves use ordinary covering-sieve descent and the localization convention supplied by the coefficient bridge, before any optional further hypercompletion.

Write $D_i^{\rm cl}$ and $D_i^{\rm EM}$ for the classical integral and actual EM weight-$i$ coefficient complexes on this site, and $A_i^a=H(D_i^a[2i])$, $Y_i^a=\Omega^\infty A_i^a$, for $a\in\{\mathrm{cl},\mathrm{EM}\}$. Evaluation means derived evaluation; $H$ is the fixed coherent Eilenberg–Mac Lane realization, with $\pi_mH(C)=H^{-m}(C)$. The specified equivalence $e_i:Y_i^{\rm cl}\simeq Y_i^{\rm EM}$ is induced by the unit zigzag $H_{\rm Spi}\leftarrow s^0\mathbf1_k\to s^0KGL_k$ and the inverse structured EM comparison to the represented slice coefficients. The graded comparison preserves products, units and the actual Picard first-Chern map. Choose its inverse as a natural equivalence in the same functor category, retaining its inverse homotopies. Mapping classes mean components of mapping spaces in this category; a natural map identity includes an existing homotopy and makes no uniqueness assertion about that homotopy.

Let $BGL_n$ be the local stack of rank-$n$ vector bundles and their isomorphisms, pointed by $\mathcal O^n$, and put $BGL_\infty=\operatorname*{colim}_{n\geq1}BGL_n$ in pointed sheaves under $E\mapsto E\oplus\mathcal O$. Write $s_i^{\rm EM}:BGL_\infty\to Y_i^{\rm EM}$ for the actual stable pointed universal map supplied by the universal-Chern construction. Define $s_i^{\rm cl}=e_i^{-1}s_i^{\rm EM}$. Its finite-rank restrictions will be the classical projective-relation coefficients, with the signed monic quotient-projective convention and the separate rank-zero convention of the Chern-class definition. An independently given stable classical map can therefore be compared with this one by finite-rank detection; no independently given classical stable map is assumed to be supplied by the EM construction.

Let $K(T)=\mathbb K(\operatorname{Perf}(T))$ be the specified coherent perfect K-spectrum and put $\mathcal P(T)=\Omega^\infty K(T)$, pointed by zero. Write $C_i^{\rm EM}:\mathcal P\to Y_i^{\rm EM}$ for the actual natural operation supplied by the universal-Chern theorem, restricted to this smooth site, including its ordinary source-sheafification factorization and canonical source unit. Define $C_i^{\rm cl}=e_i^{-1}C_i^{\rm EM}$ as a pointed natural transformation. On the ordinary sheafified source, use the same formula with the supplied EM sheaf map and then precompose with its source unit. This is the classical perfect-K construction used here. It requires the coefficient comparison only on this smooth site; it applies neither a classical affine extension to singular schemes nor a conditional native completion formula. There is no assumption that the actual EM construction independently constructs a classical endpoint.

For $Z\subseteq V$ closed, put $U=V\setminus Z$, $K(V/U)=\operatorname{fib}(K(V)\to K(U))$ and $M_i^a(V/U)=\operatorname{fib}(HD_i^a(V)\to HD_i^a(U))$. A fiber is a coherent homotopy pullback over zero. The supported operation has type $\Omega^\infty K(V/U)\to\Omega^\infty(M_i^a(V/U)[2i])$ and is induced by the pointed operation on the restriction arrow. Its forget-support map is the fiber projection. The supplied inverse-limit extension over quasi-compact opens specifies restrictions whenever necessary; within this lemma all these opens remain in the fixed smooth site. These definitions assert neither additivity of higher Chern operations nor identification with category-defined supported perfect K-theory.

## Definition references

[[math:def-perfect-field]]

[[math:def-smooth-morphism-schemes]]

[[math:def-locally-finite-type-and-finite-type-morphism]]

[[math:def-quasi-compact-and-quasi-separated-scheme]]

[[math:def-quasi-compact-and-quasi-separated-morphism]]

[[math:def-grothendieck-universe-closure-convention]]

[[def-scheme-sites-and-sheafification]]

[[def-nisnevich-covering-interface]]

[[def-derived-sections-on-sites]]

[[def-stable-spectra-interface]]

[[def-nonconnective-k-spectrum-interface]]

[[def-cohomology-with-support]]

[[lem-adjudicate-3ef731a812d9-em-coefficient-mapping-bridge]]

[[lem-adjudicate-a6bf10648fa2-finite-type-field-qcqs]]

[[math:lem-finite-type-local-on-source-and-target]]

## Facts & Assumptions

[A9] Choice is inherited by the smooth coefficient comparison, the actual perfect theory and universal EM operations, and the finite-rank detector. It permits the recursive choices in that detector's surjective-tower argument. Universe existence and size bounds are separate assumptions. [[math:def-axiom-of-choice]] [[math:def-grothendieck-universe-closure-convention]]

[F1] The field zigzag and actual Picard square supply the natural integral graded coefficient equivalence preserving products, units and the actual first-Chern map. Coefficient uniqueness gives the unique signed monic quotient-projective coefficients. [[lem-adjudicate-6e70d30b9793-field-unit-zigzag]] [[lem-adjudicate-6e70d30b9793-em-picard-square]] [[lem-chern-relation-uniqueness]] [[def-motivic-chern-classes]]

[F2] The universal-Chern theorem supplies the actual EM stable map and coherent pointed perfect-K operation, their projective-relation bundle values, ordinary sheafification factorization, source unit, restriction diagrams and support convention. Its construction includes the stack-level projective relation, not merely values on affine bundle classes. Its separate native completion clause is conditional on a specified admissible theory and does not identify a classical operation with the actual EM operation. Only the actual EM construction is used here. [[thm-author-d026a7b99ace-universal-chern-space]]

[F3] The finite-rank detector gives injectivity of $[BGL_\infty,Y_i^a]_*\to\varprojlim_n[BGL_n,Y_i^a]_*$ for $i\geq1$, for the classical and EM targets on either fixed smooth site. It proves the surjectivity of the odd reduced restriction system and removes its $R^1\varprojlim$ ambiguity. Split basepoint evaluation also makes equality of unpointed classes imply equality of pointed classes when both maps are pointed. [[lem-adjudicate-00232ac8c49e-stable-universal-class-detection]]

[F4] Perfectness, smoothness, finite type, qcqs and the universe closure convention have the meanings of the declared mathematical definitions. The site and Nisnevich interfaces specify categories, covers and sieves; derived sections specify the coefficient grading. The coefficient bridge supplies the actual shifted EM target and ordinary space-valued sheaf localization for both topologies, and identifies the finite-rank bundle stacks. The stable interface fixes coherent functors, mapping spaces, limits and fibers; the perfect interface fixes $K$ and its coherent pullbacks. [[math:def-perfect-field]] [[math:def-smooth-morphism-schemes]] [[math:def-locally-finite-type-and-finite-type-morphism]] [[math:def-quasi-compact-and-quasi-separated-scheme]] [[math:def-grothendieck-universe-closure-convention]] [[def-scheme-sites-and-sheafification]] [[def-nisnevich-covering-interface]] [[def-derived-sections-on-sites]] [[lem-adjudicate-3ef731a812d9-em-coefficient-mapping-bridge]] [[def-stable-spectra-interface]] [[def-nonconnective-k-spectrum-interface]]

[F5] Under Choice, every open of a finite-type field-scheme is quasi-compact. Local finite type survives open source restriction by affine locality. A morphism is quasi-compact when inverse images of quasi-compact target opens are quasi-compact. The support definition supplies coherent inverse-limit extensions, the unshifted coefficient fibers, their $[2i]$ shifts and forget-support projections. [[lem-adjudicate-a6bf10648fa2-finite-type-field-qcqs]] [[math:lem-finite-type-local-on-source-and-target]] [[math:def-quasi-compact-and-quasi-separated-morphism]] [[def-cohomology-with-support]]

**Given:** The perfect field, fixed smooth finite-type qcqs site, specified coefficient models and comparison, actual EM stable and perfect-K maps, positive integer $i$, Choice and the size assumptions above. For supports fix a site object $V$ and a closed subset $Z$.

**Goal:** Identify the projective-relation coefficients and stable classical class, then construct and compare the transported perfect-K and support operations.

## Proof

1.1 The comparison in [F1] takes $\xi=c_1(\mathcal O(1))$ to the same tautological quotient-line class and preserves pullbacks and products. It therefore takes the signed monic relation to the same relation. Coefficient uniqueness identifies every bundle coefficient in both theories; the unit and the prescribed zero coefficients also agree. At finite rank the supplied actual EM stack class in [F2] satisfies this projective relation on its universal bundle. Transporting that class and its relation through the natural coefficient equivalence defines the classical stack class. Transport of the projective-bundle isomorphism makes its coefficients unique on that stack as well, so this is a statement about classes of maps of $BGL_n$, not just values on isomorphism classes of bundles. Its pointed structure for $i\geq1$ is inherited from the actual pointed EM map. This proves the asserted universal finite-rank comparison with the fixed quotient convention. [F1, F2, F4, A9]

2.1 The supplied stable EM map is an existing coherent map. Postcomposition with the inverse natural equivalence constructs $s_i^{\rm cl}$ as an existing coherent pointed map, whose finite-rank restrictions are the classes of step 1.1. For any other existing pointed stable classical map with these same finite-rank coefficients, split basepoint evaluation and [F3] identify its finite-rank pointed classes with those of $s_i^{\rm cl}$. Injectivity in [F3] then puts the stable maps in the same component, hence gives a homotopy of sheaf maps and all its coherent site restrictions. This proves existence and uniqueness of the classical stable homotopy class without assuming an independently constructed classical endpoint, or assembling arbitrarily selected finite-rank homotopies. [F1, F2, F3, F4, A9, step 1.1]

2.2 Restrict the supplied actual transformation $C_i^{\rm EM}$ and its source factorization to the fixed smooth site. Postcomposition with $e_i^{-1}$ defines the pointed natural transformation $C_i^{\rm cl}$ and its ordinary sheafified-source map. Composing the inverse homotopy $e_ie_i^{-1}\simeq\mathrm{id}$ with $C_i^{\rm EM}$ gives $e_iC_i^{\rm cl}\simeq C_i^{\rm EM}$ as a single homotopy of transformations. The common source unit commutes with this composition. Its value on a bundle is the inverse image of its actual EM projective-relation value; step 1.1 identifies this with the classical bundle coefficient. The source operation has already been constructed on all qcqs schemes by [F2]; the present postcomposition is made only after restricting to smooth $k$-schemes. No new affine extension, relative-base-change identification of completed operations, or identification with an independently specified classical operation is required. [F1, F2, F4, step 1.1]

3.1 Check the support domain before evaluating that homotopy. For $V$ in the site and $U=V\setminus Z$, [F5] makes $U$ quasi-compact. Smoothness survives open source restriction by its germwise definition in [F4], and affine locality in [F5] gives local finite type over $k$. The structure morphism of $U$ is quasi-compact because the only opens of $\operatorname{Spec}k$ are the empty and whole subsets and $U$ is quasi-compact. Thus it is finite type by [F4], and [F5]'s finite-type field lemma gives qcqs. This includes the empty complement. Hence the entire coefficient and K restriction arrow stays in the stated comparison domain. Evaluate the one natural homotopy of step 2.2 on this arrow and take homotopy fibers. The functor $\Omega^\infty E=\operatorname{Map}_{\mathrm{Sp}}(\mathbb S,E)$ preserves limits, and shift is an equivalence, so the resulting targets are exactly $\Omega^\infty(M_i^a(V/U)[2i])$. Functorial fiber projections give the forget-support square. The prescribed inverse-limit extension, if used to express these restrictions, is a limit of the same transformations and retains the comparison. The unit compatibility separately gives $c_0=1$ in both theories, without applying the positive pointed construction to that unpointed constant. This proves all assertions for the explicit classical construction and the supplied actual EM operation. [F1, F2, F4, F5, A9, step 2.2] ∎

## Reading limits

This repair reads the current generated item and the current declared supplier contracts, with their relevant arguments. The substantial imported results remain premises supplied by those items. No new direct literature input, fresh primary-PDF reading, independent acceptance or original-author defect is claimed. The earlier direct Annala–Iwasa reference supported the superseded reduced-K endpoint argument; the present perfect-K construction uses the supplied actual EM transformation and an inverse coefficient equivalence on the fixed smooth site. The classical stable uniqueness assertion uses the existing finite-rank detector and does not identify an independent completed classical operation.
