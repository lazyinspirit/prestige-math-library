# Braid Groups rendering audit — lane 01

Reviewed all 45 assigned items and all 107 revision-2 screenshot tiles at original resolution. Each frozen ItemBody was reviewed through the final screenshot tile, including statements/definitions/examples, facts, proof or verification sections, remarks, and scratch content where present.

**Coverage:** 45 items; 6 items with confirmed title rendering defects; 39 clean.

## Findings

### `cex-equal-actions-on-k-zero-do-not-imply-isomorphic-derived-autoequivalences`

- Section: title; frozen snapshot line 4.
- Excerpt: `title: "Equal actions on K_0 do not imply isomorphic derived autoequivalences"`
- Symptom: The page title visibly displays the underscore notation literally instead of formatting the index as a subscript.
- Suggested repair: Use inline math delimiters in the title: $K_0$.
- Screenshot: `screenshots/cex-equal-actions-on-k-zero-do-not-imply-isomorphic-derived-autoequivalences--01.png`

### `def-graded-khovanov-seidel-module-category-and-projectives`

- Section: title; frozen snapshot line 4.
- Excerpt: `title: "Finite graded A_m-modules, internal shifts and the vertex projectives"`
- Symptom: The page title visibly displays the underscore notation literally instead of formatting the index as a subscript.
- Suggested repair: Use inline math delimiters in the title: $A_m$.
- Screenshot: `screenshots/def-graded-khovanov-seidel-module-category-and-projectives--01.png`

### `def-standard-pure-braid-generators`

- Section: title; frozen snapshot line 4.
- Excerpt: `title: "Standard geometric pure braid generators A_ij"`
- Symptom: The page title visibly displays the underscore notation literally instead of formatting the index as a subscript.
- Suggested repair: Use inline math delimiters in the title: Standard geometric pure braid generators $A_{ij}$.
- Screenshot: `screenshots/def-standard-pure-braid-generators--01.png`

### `def-triangulated-k-zero-of-khovanov-seidel-projectives`

- Section: title; frozen snapshot line 4.
- Excerpt: `title: "The triangulated K_0 of the Khovanov–Seidel projective category"`
- Symptom: The page title visibly displays the underscore notation literally instead of formatting the index as a subscript.
- Suggested repair: Use inline math delimiters in the title: The triangulated $K_0$ of the Khovanov–Seidel projective category.
- Screenshot: `screenshots/def-triangulated-k-zero-of-khovanov-seidel-projectives--01.png`

### `ex-the-a-two-khovanov-seidel-algebra-and-its-projectives`

- Section: title; frozen snapshot line 4.
- Excerpt: `title: "The algebra A_2 and its vertex projectives"`
- Symptom: The page title visibly displays the underscore notation literally instead of formatting the index as a subscript.
- Suggested repair: Use inline math delimiters in the title: The algebra $A_2$ and its vertex projectives.
- Screenshot: `screenshots/ex-the-a-two-khovanov-seidel-algebra-and-its-projectives--01.png`

### `lem-homological-and-internal-shifts-on-khovanov-seidel-k-zero`

- Section: title; frozen snapshot line 4.
- Excerpt: `title: "Homological and internal shifts on K_0(C_m)"`
- Symptom: The page title visibly displays the underscore notation literally instead of formatting the index as a subscript.
- Suggested repair: Use inline math delimiters in the title: Homological and internal shifts on $K_0(C_m)$.
- Screenshot: `screenshots/lem-homological-and-internal-shifts-on-khovanov-seidel-k-zero--01.png`

## Coverage

All items below were reviewed in full. Screenshot names are the complete revision-2 tile lists from each local screenshot manifest.

- `cex-a-braiding-alone-does-not-define-a-link-trace` — clean; sections checked: Statement refuted, Facts & Assumptions, Counterexample, The braiding already gives the actions., The closure of the one-braid has no value in the non-rigid model., A rigid model with two different ribbon evaluations., Conclusion.; tiles: 2.
- `cex-equal-actions-on-k-zero-do-not-imply-isomorphic-derived-autoequivalences` — findings; sections checked: Statement refuted, Facts & Assumptions, Counterexample, The witness braid and its categorical action., Its action on $K_0$ is trivial., Conclusion.; tiles: 1.
- `cex-setwise-puncture-preservation-does-not-define-the-pure-mapping-class-group` — clean; sections checked: Statement refuted, Facts & Assumptions, Counterexample, Remarks, The witness and the permutation it induces., The permutation is an isotopy invariant., The class is not pure., Conclusion.; tiles: 2.
- `cor-pure-braids-are-pure-punctured-disk-mapping-classes` — clean; sections checked: Statement, Facts & Assumptions, Proof, Remarks, The lift endpoint induces the endpoint permutation., Trivial permutation is exactly purity., Conclusion.; tiles: 3.
- `def-artin-automorphisms-of-the-free-group` — clean; sections checked: Definition, Remarks; tiles: 1.
- `def-braid-isotopy-relative-top-and-bottom` — clean; sections checked: Definition; tiles: 2.
- `def-elementary-ideals-of-a-finitely-presented-module` — clean; sections checked: Definition; tiles: 1.
- `def-graded-khovanov-seidel-module-category-and-projectives` — findings; sections checked: Definition, Facts & Assumptions, Proof, $A_m$ is left and right Noetherian., The category and its ambient category., $P_i$ is a degree-zero direct summand of $A_m$., The internal shift is an automorphism of $A_m\text{-mod}$., Closure of the finitely generated objects under kernels, cokernels and finite sums., $P_i$ is finite graded projective., ${}_iP$ is finite graded projective on the right., $A_m\text{-mod}$ is abelian., Conclusion.; tiles: 4.
- `def-khovanov-seidel-type-a-quiver-algebra` — clean; sections checked: Definition, Facts & Assumptions, Proof, Additivity of the internal degree., The path ring is a graded ring for this degree., Each relation generator is homogeneous., The ideal is homogeneous., The quotient is a graded ring., Conclusion and conventions.; tiles: 2.
- `def-markov-conjugation-and-stabilization-moves` — clean; sections checked: Definition; tiles: 1.
- `def-planar-isotopy-of-link-diagrams` — clean; sections checked: Definition; tiles: 1.
- `def-reduced-type-a-polynomial-ring-for-hhh` — clean; sections checked: Definition; tiles: 1.
- `def-standard-pure-braid-generators` — findings; sections checked: Definition; tiles: 1.
- `def-triangulated-k-zero-of-khovanov-seidel-projectives` — findings; sections checked: Definition, Facts & Assumptions, Proof, The coded projective category is small and represents $C_m$., $K_0(C_m)$ is a well-defined abelian group., Code types and choice., The relations are genuine triangle relations., Isomorphic objects have equal classes, and $[0]=0$., Direct sums add., Conclusion.; tiles: 3.
- `def-unreduced-burau-relative-homology-module` — clean; sections checked: Definition, Facts & Assumptions, Proof, Deck automorphisms of the pair and of $U$., The $\Lambda_1$-module structure., Conventions and invariants.; tiles: 2.
- `ex-a-left-garside-normal-form-computation-in-b-three` — clean; sections checked: Example, Facts & Assumptions, Verification, Remarks, The half twist and the rewriting of $\sigma_1^{-1}$., The atoms are coprime., The meet with $\sigma_1\sigma_2^{2}$., The maximal $\Delta$-exponent is $-1$., The permutation images and left weighting., The two greedy factors., The normal form conditions hold., Conclusion.; tiles: 3.
- `ex-decategorifying-a-khovanov-seidel-generator` — clean; sections checked: Example, Facts & Assumptions, Verification, The matrix of $[R_1]$ for $m=2$., The change of basis., The matrix identity., Conclusion.; tiles: 2.
- `ex-the-a-two-khovanov-seidel-algebra-and-its-projectives` — findings; sections checked: Example, Facts & Assumptions, Proof, The nine basis paths and their degrees., The vanishing and identification rules at $m=2$., The multiplication table., The quotient by the arrows is $\mathbb Z^3$., The vertex projectives., The right modules ${}_jP$., Conclusion.; tiles: 2.
- `ex-the-khovanov-rozansky-unknot-factorization` — clean; sections checked: Example, Facts & Assumptions, Verification, The factorization., Cohomology., Euler characteristic.; tiles: 2.
- `ex-the-two-point-unordered-cover-and-its-monodromy` — clean; sections checked: Example, Facts & Assumptions, Verification, The transposition acts by $(c,w)\mapsto(c,-w)$., $\bar\Phi$ is continuous., The half turn $\gamma$ is a continuous path in $\mathbb C^\times$ from $1$ to $-1$., $\bar\Phi$ and $\bar\Psi$ are well defined and mutually inverse., $\bar\Psi$ is continuous., Claim 2., $\alpha$ is a based loop at $[q]$ and $\widetilde\alpha$ is a lift., The endpoint of the lift is $\tau\cdot q$, so the monodromy is nontrivial., Conclusion.; tiles: 5.
- `lem-a-central-positive-braid-is-a-power-of-delta-squared-for-n-greater-than-two` — clean; sections checked: Statement, Facts & Assumptions, Proof, Remarks, The normal form of a central positive braid., A is central when $p$ is even, and satisfies a twisted identity when $p$ is odd., Propagation from one atom prefix., Every atom divides $A$., The exponent is even., The exponent is nonnegative., Assembly.; tiles: 3.
- `lem-a-positive-height-diagram-has-a-defect-region` — clean; sections checked: Statement, Facts & Assumptions, Proof, Ignore the signed arcs temporarily., Restore the signed arcs., A reducing arc.; tiles: 2.
- `lem-artin-automorphisms-permute-meridian-conjugacy-classes-and-fix-the-boundary-word` — clean; sections checked: Statement, Facts & Assumptions, Proof, Remarks, The generator substitutions have the two properties., The two properties are preserved by composition and inversion., Induction on the letters of the word., Conclusion.; tiles: 2.
- `lem-boundary-fixed-disk-evaluation-has-continuous-local-point-motion-sections` — clean; sections checked: Statement, Facts & Assumptions, Proof, Remarks, Small displacements give boundary-fixed homeomorphisms., Local order of an unordered configuration., Evaluation is surjective., Continuous local sections.; tiles: 3.
- `lem-compensated-band-kinks-decompose-into-ordinary-markov-moves` — clean; sections checked: Statement, Facts & Assumptions, Proof, Remarks, Empty and single-strand packets., The substitutions needed for the packet identity., A general braid identity., One destabilization with an arbitrary surrounding braid., Induction, signs and conjugation bookkeeping.; tiles: 3.
- `lem-euler-class-of-a-rouquier-complex-is-homotopy-invariant-and-multiplicative` — clean; sections checked: Statement, Facts & Assumptions, Proof; tiles: 3.
- `lem-forgetting-configuration-points-is-locally-trivial` — clean; sections checked: Statement, Facts & Assumptions, Proof, Chart data., The bump function., The radial mover of the coordinate space., The inverse family and its Lipschitz estimate., Point-moving homeomorphisms of $M$., Joint continuity of the point-moving family., The family $h_x$ and its inverse., The trivialization is well defined., $\Phi$ is continuous., The inverse trivialization., Conclusion.; tiles: 5.
- `lem-homological-and-internal-shifts-on-khovanov-seidel-k-zero` — findings; sections checked: Statement, Facts & Assumptions, Proof, The homological shift is negation on $K_0$., $\{1\}$ is an automorphism of $C_m$., $\{1\}$ commutes with the homological shift., $\{1\}$ commutes with cones., $\{1\}$ preserves distinguished triangles., The induced automorphism $q$ of $K_0(C_m)$., Powers of $q$ realise all internal shifts., The group-ring module structure., Conclusion.; tiles: 3.
- `lem-koszul-row-operations-and-variable-exclusion-preserve-factorization-homotopy-type` — clean; sections checked: Statement, Facts & Assumptions, Proof, Row operations., Polynomial remainders., Exclusion of the row., Standard form of graph factorizations., The splitting., Closed graphs.; tiles: 2.
- `lem-ordinary-exchange-moves-are-markov-sequences` — clean; sections checked: Statement, Facts & Assumptions, Proof, Remarks, Supports and mixed relations., Stabilization and the first weaving., The exchange calculation and the last weaving., Signs and endpoints.; tiles: 2.
- `lem-ribbon-trace-equals-the-framed-closure-evaluation` — clean; sections checked: Statement, Facts & Assumptions, Proof, The exact closing word., Monoidality of the comparison., Inductively evaluate the nested cups and caps., Framed isotopy and the stabilization curl., Conclusion and choice.; tiles: 3.
- `lem-slicing-and-tracing-are-mutually-inverse-on-classes` — clean; sections checked: Statement, Facts & Assumptions, Proof, Trace is well-defined on path classes., Slice is well-defined on braid-isotopy classes., Slice after trace is the original loop., Trace after slice is the original braid.; tiles: 3.
- `lem-the-complement-of-an-oriented-link-is-a-connected-smooth-three-manifold` — clean; sections checked: Statement, Facts & Assumptions, Proof, The link exterior and its retraction., Local structure., Connectedness., Path-connectedness., Finite CW type., Conclusion.; tiles: 3.
- `lem-the-hecke-generators-satisfy-the-artin-relations-and-are-units` — clean; sections checked: Statement, Facts & Assumptions, Proof, The assignment kills the relators., Words and compatibility.; tiles: 2.
- `lem-the-planar-forgetful-map-has-a-continuous-section` — clean; sections checked: Statement, Facts & Assumptions, Proof, The plane section., Complements of finite sets in the disc are path-connected., Conjugation and the constant loop., The disc section., The based splitting.; tiles: 2.
- `lem-the-standard-stem-system-cuts-the-punctured-disk-open-to-a-disk` — clean; sections checked: Statement, Facts & Assumptions, Proof, A concrete model of a slit tip., The outer piece., Attaching the completed tips., The quotient and its topology., Lifting maps., Regluing maps and isotopies.; tiles: 2.
- `lem-type-a-soergel-frobenius-biadjunction` — clean; sections checked: Statement, Facts & Assumptions, Proof; tiles: 2.
- `prop-decategorification-of-a-rouquier-complex-is-the-hecke-braid-generator` — clean; sections checked: Statement, Facts & Assumptions, Proof, Remarks; tiles: 2.
- `thm-a-ribbon-object-defines-a-unique-framed-tangle-evaluation-functor` — clean; sections checked: Statement, Facts & Assumptions, Proof, Transport the structure., Yang–Baxter, snakes, inverses and slide., Bent inverses, including both orders and signs., The twist-square relation., Redundant cups, caps, crossings and negative twists., Extend and prove uniqueness., Return to the original category.; tiles: 3.
- `thm-evaluated-double-leaves-form-bases-of-type-a-soergel-bimodule-homs` — clean; sections checked: Statement, Facts & Assumptions, Proof, Remark; tiles: 2.
- `thm-khovanov-rozansky-complex-is-invariant-under-braid-reidemeister-two-a` — clean; sections checked: Statement, Facts & Assumptions, Proof, The splitting criterion., Koszul form of the diagram and its first reduction., Quadratic polynomial division., Splitting the reduced diagram., Conclusion and mirror image.; tiles: 2.
- `thm-ordered-configurations-cover-unordered-configurations-regularly` — clean; sections checked: Statement, Facts & Assumptions, Proof, Punctured relative balls are path-connected., Local form of $M$., $p$ is an $n!$-sheeted covering., M is infinite., $M$ is locally path-connected., $M$ is path-connected., Complements of finite sets are path-connected., $F_n(M)$ is path-connected., $C_n(M)$ is path-connected., Deck group., Regularity., Conclusion.; tiles: 5.
- `thm-rouquier-complex-is-well-defined-up-to-canonical-homotopy-equivalence` — clean; sections checked: Statement, Facts & Assumptions, Proof, Remarks; tiles: 2.
- `thm-the-diagrammatic-character-is-the-split-k-zero-hecke-isomorphism` — clean; sections checked: Statement, Facts & Assumptions, Proof, Remark; tiles: 3.
- `thm-the-punctured-disk-fundamental-group-is-free-on-standard-meridians` — clean; sections checked: Statement, Facts & Assumptions, Proof, Remarks, The universal-property map., The basis map., The case $n=0$., Comparison.; tiles: 2.
