# Reader 29 — batch 29

Run: `frontier-44-special-representation-examples-28-six-step`.

## Scope and outcome

Both assigned draft pages and all seven assigned items were reviewed. The active engine reports Step 3a; the manifest, rather than historical run labels in item metadata, identifies this dispatch's write scope. Five assigned lemmas received local mathematical repairs, their affected contracts were synchronized, and the required checks passed. No uneditable defect remains from this review. No publication, judgment or verification stamp was issued.

## Assigned inventory

Pages:
- `library/homological-algebra/lefschetz-splitting-in-bounded-triangulated-categories.md` (A).
- `library/homological-algebra/lefschetz-splitting-in-bounded-triangulated-categories-examples.md` (B).

Items, supplier before consumer within each branch:
- `def-truncation-functors-and-cohomology-of-a-t-structure`.
- `lem-truncation-triangles-are-essentially-unique-and-functorial`.
- `lem-t-cohomology-is-additive-shift-compatible-and-detects-amplitude`.
- `lem-hard-lefschetz-splits-a-bounded-t-structure-complex`.
- `lem-graded-hard-lefschetz-has-a-canonical-primitive-decomposition`.
- `lem-nilpotent-lefschetz-filtration-is-canonical-and-self-dual`.
- `ex-hard-lefschetz-splitting-for-a-three-degree-complex`.

The first two assigned items were initially opened with the pages before opening their external suppliers; their inferences were checked after reading those suppliers. This report does not claim that every initial file opening followed dependency order. Both proof branches were subsequently checked from suppliers to consumers.

## Repairs and mathematical evidence

1. `lem-truncation-triangles-are-essentially-unique-and-functorial`, Statement (iv), Proof 3.1: the original unrestricted two-out-of-three assertion for an aisle is false. In the canonical derived t-structure, the distinguished triangle `k[-1] → 0 → k → k` has its middle and third vertices in the upper aisle at zero but its first vertex outside it. The dual failure is `k → 0 → k[1] → k[1]` for the lower aisle. Replaced this with extension closure and all four valid rotated bounds, retaining the strongest sound claims. These follow from Hom exactness, orthogonality, rotations and the shift inclusions.
2. Same lemma, Proof 1.1, 2.2 and 3.3: made the two exact Hom windows explicit; replaced the ill-typed composite involving two different truncation maps and corrected the direction of the lower-truncation unit and the index of the triangle furnishing its adjunction. The new iteration argument gives mutually inverse maps via the adjunction bijections and proves naturality by their uniqueness.
3. `lem-t-cohomology-is-additive-shift-compatible-and-detects-amplitude`, Proof 1.1: the old argument used extension closure to infer the first vertex from the middle and third vertices without rotating. Replaced it by the lower-aisle Hom criterion and the upper-truncation adjunction, proving that the unshifted double truncation lies in both degree-n aisles. Proof 2.2: corrected the lower-amplitude induction from `τ≥k` to `τ≥k+1`, so each iteration actually advances its bound. Proof 1.2: clarified parentheses around shifted truncations.
4. `lem-hard-lefschetz-splits-a-bounded-t-structure-complex`, Proof 5.1–7.1: the old equality between the split retraction and the initially constructed retraction was both ill-typed (the initial `r'` lands only in the first extreme) and circular (it used the biproduct identity it was trying to obtain). Retained the retraction supplied by the split triangle and used it consistently as `R`. Corrected `H^m(B[-n])` to `H^(m-n)(B)`. The splitting statement, extreme section/retraction constructions, interior Lefschetz induction and noncanonical caveat remain intact.
5. `lem-graded-hard-lefschetz-has-a-canonical-primitive-decomposition`, Proof 2.1: the old `e=sp` is an endomorphism of `H^-r`, not a map into its image, so the asserted projection identities were ill-typed; the proof also used element language in a general abelian category. Replaced this with the explicitly inverse morphisms `(i,t)` and `(π,g^-1 p)`, where `t=L` and `g=L^(r+2)`. The monomorphism-image identification then gives the same subobject decomposition. Distinguished degree-indexed maps `L_j` from iterates `L^r` in Statement/Given, fixed a primitive target sign in Proof 7.1, and replaced the claim that the zero-th restricted power is an identity by the actual kernel inclusion.
6. `lem-nilpotent-lefschetz-filtration-is-canonical-and-self-dual`, F4 and Proof 1.4, 2.5, 3.2: the statement permits a nonsymmetric nondegenerate bilinear form, but the old argument confused `S(x,-)` with `S(-,x)` and asserted double right-orthogonal involution without symmetry. Introduced the transpose correspondence and separate left/right annihilators; proved the mixed identity `left-perp(right-perp(U))=U` using dimensions; corrected skew-adjointness in the right-orthogonal argument and both errors in descending the cross-graded pairing. This preserves the broader statement rather than adding symmetry. Proof 1.2: replaced the incorrect crossing-bound assertion (which fails at large positive indices) with an integer interval calculation valid at every index. Proof 2.4 and 4.1: corrected the direction to finite ascending induction. Proof 3.1: supplied the finite-dimensional basis prerequisite explicitly. Proof 4.2: supplied the finite-dimensional transpose-isomorphism argument. Statement provenance now records the broader locally proved version as `ai-altered`.

## Authoritative source checks

- [BBD, *Faisceaux pervers*](https://www.numdam.org/item/AST_1982__100__1_0.pdf): downloaded the complete PDF and extracted/read PDF pages 30–34 (printed pp. 29–33), §1.3.1–1.3.7 with their proofs. Proposition 1.3.3 establishes the truncation adjunction and unique truncation triangle; §1.3.4 establishes orthogonal aisle descriptions, extension closure and iteration. These passages support extension closure, not the original arbitrary two-out-of-three claim.
- [Deligne, *Théorème de Lefschetz et critères de dégénérescence de suites spectrales*](https://www.numdam.org/item/PMIHES_1968__35__107_0.pdf): read §1, printed pp. 107–110, including Proposition 1.2, Theorem 1.5 and their complete arguments. Theorem 1.5 is the bounded-derived splitting criterion; Remark 1.8 warns that a splitting need not identify the degree-two map with its cohomological action. The assigned abstract proof supplies the general bounded t-category argument locally.
- [de Cataldo–Migliorini, *The Hodge theory of algebraic maps*, v2](https://arxiv.org/pdf/math/0306030): read Theorem 4.4.4 and Remark 4.4.5, and §4.5 through formulas (22)–(27), printed pp. 36–37. These give the primitive-decomposition interface, convolution filtration and the self-duality/form formulas. The §4.5 passage assumes a symmetric or skew-symmetric form, while the assigned item permits arbitrary nondegenerate bilinear forms. The repaired local proof establishes that broader case without citing the narrower source as a discharge.

## Contracts and source metadata

Updated `research/frontier-44-special-representation-examples-28-six-step-batch-29.proof-contracts.json`: derivations and their inputs now match every changed proof step; quoted assigned supplier statements were refreshed; affected boundary evidence was corrected. The definition contract formerly characterized the heart by cohomological concentration without boundedness; it now distinguishes the unconditional forward implication from the bounded converse. The nilpotent contract no longer describes a symmetry assumption absent from its Statement or a descending induction that actually starts at the bottom. Also corrected Theorem 4.4.4's printed-page locator from 35 to 36 in the three assigned items carrying that source. The five changed carriers had no `verification.judge` records to retain or remove; none was introduced.

## Opened external supplier inventory

The following 46 direct supplier files were opened at `items/<id>.md`; their relevant statements/definitions and proofs were read. No recursive audit of the entire published dependency graph is claimed.

- `cor-any-adjoint-between-additive-categories-is-additive`.
- `cor-dimension-of-a-direct-sum`.
- `cor-finite-dimensional-vector-spaces-are-isomorphic-iff-equal-dimension`.
- `cor-triangulated-five-lemma`.
- `def-abelian-category`.
- `def-additive-category`.
- `def-additive-functor`.
- `def-annihilators-under-the-evaluation-pairing`.
- `def-bilinear-symmetric-skew-and-alternating-forms`.
- `def-biproduct`.
- `def-canonical-t-structure-on-a-derived-category`.
- `def-category-with-translation`.
- `def-derived-category-of-an-abelian-category`.
- `def-dimension`.
- `def-exact-sequence-and-short-exact-sequence-in-an-abelian-category`.
- `def-image-and-coimage-in-a-category-with-kernels-and-cokernels`.
- `def-kernel-and-image-of-a-linear-map`.
- `def-kernels-and-cokernels-as-equalizers-and-coequalizers`.
- `def-linear-subspace`.
- `def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form`.
- `def-morphism-and-isomorphism-of-triangles`.
- `def-nilpotent-endomorphism`.
- `def-rotation-of-a-triangle`.
- `def-split-short-exact-sequence-in-an-abelian-category`.
- `def-triangulated-category`.
- `def-triangulated-category-axiom-tr-one`.
- `def-triangulated-category-axiom-tr-three`.
- `def-vector-space`.
- `prop-a-distinguished-triangle-with-zero-first-map-is-split`.
- `prop-an-additive-functor-preserves-split-biproduct-diagrams`.
- `prop-cohomology-factors-through-the-derived-category`.
- `prop-distinguished-triangles-are-closed-under-shifts-and-both-rotations`.
- `prop-zero-and-split-triangles-are-distinguished`.
- `thm-a-short-exact-sequence-is-a-kernel-cokernel-pair`.
- `thm-bilinear-forms-correspond-to-linear-maps-into-the-dual`.
- `thm-dimension-of-a-linear-subspace`.
- `thm-dual-family-is-a-basis-in-finite-dimension`.
- `thm-every-monomorphism-is-the-kernel-of-its-cokernel`.
- `thm-first-isomorphism-theorem-in-an-abelian-category`.
- `thm-long-exact-hom-sequences-of-a-distinguished-triangle`.
- `thm-modules-over-a-ring-form-an-abelian-category`.
- `thm-nilpotent-jordan-string-basis`.
- `thm-rank-nullity`.
- `thm-splitting-lemma-in-an-abelian-category`.
- `thm-the-canonical-pair-is-a-t-structure`.
- `thm-the-derived-category-inherits-a-triangulated-structure`.

Additional Hom-sequence suppliers opened and read:

- `thm-representable-hom-functors-on-a-triangulated-category-are-homological-or-cohomological`.
- `thm-five-lemma-for-a-morphism-of-long-exact-sequences`.

## Consumer checks

The original and current logical edges of the changed Statement carriers were used to trace their consumers; no dependency edge was deleted. Within the batch, the t-cohomology lemma, splitting lemma, nilpotent lemma and three-degree example were checked after their suppliers. The truncation definition's discharge remains valid. The t-cohomology consumer imports extension closure, not arbitrary two-out-of-three closure. The graded consumer imports the same primitive decompositions and monomorphism conclusions, with degree-index notation merely disambiguated. The splitting, nilpotent-filtration and example statements keep their original mathematical conclusions.

The following outside consumers received focused checks of their statements and relevant supplier imports, in logical order. This checks propagation of the repaired interfaces; it does not claim an independent full proof audit of their other mathematics.

- `lem-middle-lefschetz-primitive-polarization-follows-from-nonmiddle-polarizations`.
- `thm-fixed-part-for-geometric-polarizable-variations-on-smooth-algebraic-bases`.
- `thm-smooth-projective-gauss-manin-local-systems-are-semisimple`.
- `ex-cyclic-etale-covers-give-geometric-semisimple-weight-zero-monodromy`.
- `lem-projective-hodge-perverse-package-closes-under-defect-and-image-dimension-induction`.
- `thm-relative-hard-lefschetz-and-perverse-splitting-for-projective-algebraic-maps`.
- `thm-projective-pushforward-of-smooth-constant-sheaves-has-semisimple-perverse-cohomology`.
- `cor-quiver-full-flag-pushforwards-are-semisimple-in-characteristic-zero`.
- `ex-projective-perverse-decomposition-for-projective-space-to-a-point`.
- `thm-self-dual-indecomposable-klr-projectives-give-the-negative-half-lower-global-basis`.
- `lem-cyclotomic-extension-of-scalars-respects-the-based-quotient`.
- `thm-self-dual-indecomposable-cyclotomic-klr-projectives-give-the-lower-global-basis`.
- `thm-self-dual-simple-cyclotomic-klr-modules-give-the-upper-global-basis`.
- `prop-qg8-categorification-transports-across-the-hecke-klr-bridge`.
- `thm-graded-specht-classes-realize-standard-fock-vectors`.
- `cor-graded-specht-classes-form-a-basis-of-the-module-grothendieck-group`.
- `thm-ariki-canonical-basis-theorem-in-characteristic-zero`.
- `thm-graded-decomposition-numbers-equal-canonical-basis-coefficients-in-characteristic-zero`.
- `ex-projective-versus-simple-grothendieck-classes-in-a-small-block`.
- `thm-graded-specht-heads-classify-the-graded-simple-modules`.
- `cex-specializing-v-to-one-forgets-graded-decomposition-information`.
- `lem-reduction-of-characteristic-zero-simple-modules-modulo-p`.
- `lem-positive-characteristic-specht-head-and-cyclotomic-crystal-labels-agree`.
- `def-graded-adjustment-polynomials-in-positive-characteristic`.
- `thm-positive-characteristic-decomposition-polynomials-factor-through-adjustment`.
- `rem-canonical-bases-do-not-solve-arbitrary-positive-characteristic-decomposition-numbers`.

The immediate outside uses are: the fixed-part theorem imports finite noncanonical splitting; the middle-primitive lemma imports the finite homogeneous Jordan-string description and centered filtration; the projective induction package imports derived splitting, primitive decompositions and intrinsic self-dual filtration. Those interfaces and hypotheses are preserved. The subsequent consumers import conclusions of these unchanged outside interfaces, so the local corrections add no hypothesis or narrower conclusion to their imported results. No outside carrier was edited.

## Page verdicts

- **A — `lefschetz-splitting-in-bounded-triangulated-categories`: repaired; no remaining defect found in the assigned content.** The prose accurately distinguishes abstract noncanonical splitting, graded primitive decomposition and intrinsic filtration/form results. Its extension-closure summary remains correct with the repaired bounds. No A-page prose edit was necessary.
- **B — `lefschetz-splitting-in-bounded-triangulated-categories-examples`: no defect found.** The example's coefficient category, bounded canonical t-structure, three cohomology degrees, degree-two map, second iterate and zero-to-zero Lefschetz cases were checked. Its splitting caveat and page summary are consistent. B-page prose was not edited.

No algorithms occur in the assigned inventory. No withdrawal is proposed. No confirmed uneditable prerequisite, citation or mathematical defect remains.

## Validation and limitations

- Reflow and precheck ran on each of the five changed item paths. Reflow reported each unchanged; precheck passed each proof. The truncation lemma was checked again after its final adjunction-index correction.
- After the final item edits and formatters, one batched `node tools/proof-layout.mjs` invocation on exactly the five changed paths reported **5 items, 59 steps, 0 defects**, exit 0.
- `node tools/rendercheck.mjs` on the seven assigned items and both assigned pages reported **9 files OK**, exit 0; the real renderer parsed all YAML and mathematics.
- A consistency check compared the five lemma contracts' derivations and input tags with the final proof text. It also located all 64 derivation records across the batch (59 lemma steps and five example steps). This is a mechanical consistency check, not a mathematical judgment.

The review covered all assigned authored content and the external suppliers listed above. Relevant source sections, rather than entire source books, were read. The web fetch of BBD exceeded its size limit; downloading the complete PDF and extracting its cited pages with PyMuPDF recovered the relevant argument. The broader nonsymmetric bilinear statement is supported by the repaired local argument, not by the narrower symmetry-qualified source passage. Outside consumer checks were limited to interface propagation, and unrelated source-dependent proofs in other batches were not audited. Initial file opening order is disclosed above. No blocker remains for handing this review to the Step 3b lead.
