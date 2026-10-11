# Reader 43 — batch 43

Run: `frontier-44-special-representation-examples-28-six-step`.

Independent review completed for the assigned carriers; one uneditable B-page citation-summary defect remains. The current authored carriers, rather than manifest strategies or earlier acceptance records, are the mathematical subjects.

## Opened inventory

Pages: `library/representation-theory/signed-quiver-flag-convolution-and-klr-ext-realization.md` (A); `library/representation-theory/signed-quiver-flag-convolution-and-klr-ext-realization-examples.md` (B).

Assigned items, opened in their logical supplier order:

1. `def-quiver-full-flag-incidence-varieties-and-geometric-klr-generators`.
2. `thm-quiver-flag-relative-position-strata-give-a-faithful-geometric-pbw-basis`.
3. `thm-quiver-flag-convolution-generators-satisfy-the-signed-klr-relations`.
4. `thm-signed-klr-algebra-is-the-equivariant-ext-algebra-of-quiver-flag-complexes`.
5. `ex-equal-color-quiver-flag-correspondence-is-nilhecke`.
6. `ex-signed-two-direction-multiedge-quiver-flag-crossing`.

Opened direct suppliers (complete carriers): `def-axiom-of-choice`; `lem-flag-variety-of-a-vector-space`; `prop-first-chern-class-of-tensor-dual-and-conjugate-lines`; `lem-complex-tautological-euler-class-restricts-to-the-projective-fiber-generator`; `thm-leray-hirsch-module-isomorphism`; `thm-schubert-cells-give-the-stable-grassmannian-cw-structure`; `thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle`; `def-equivariant-constructible-derived-category-for-complex-algebraic-varieties`; `thm-constructible-six-functors-proper-base-change-and-verdier-duality`; `def-equivariant-borel-moore-homology-and-correspondence-convolution`; `lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports`; `lem-smooth-flag-incidence-correspondences-have-the-required-oriented-push-pull-calculus`; `thm-proper-pushforward-ext-is-equivariant-borel-moore-homology-of-the-fiber-product`; `thm-verdier-duality-identification-intertwines-yoneda-product-and-convolution`.

Additional suppliers opened completely: `lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom`; `thm-constructible-sheaves-admit-finite-stratified-triangulations-and-finite-local-cohomology`.

Current batch manifest and proof contracts opened. The contract header says batch 47 despite the current filename/dispatch assigning batch 43; this is metadata evidence, not a mathematical verdict.

## Confirmed defects and repair obligations

- Definition, geometric dots: `Delta^! x_r` applies a BM pullback symbol to a cohomology class with no typed domain. Replace with the diagonal pushforward of the Chern cap class; retain the same dot, orientation and grading. Clarify corner idempotents in the mixed and braid relations.
- PBW, Facts F4: the supplier lowers BM degree by twice the complex dimension, rather than by the complex dimension.
- PBW, Proof 1.1: `H_G(F)=H_G(pt)[x_1,...,x_m]` is false; already GL(2) flags have rank two over `H_G(pt)`, whereas that displayed extension has infinite rank. Establish the polynomial ring instead through the Borel stabilizer and its torus.
- PBW, Proof 1.2–3.2: make the row-echelon orbit/stabilizer construction, closed filtration, cellwise localization, scalar extension from G to T, and top reduced-product coefficient explicit. Injectivity of restriction alone does not show that an element annihilating the G module annihilates its T counterpart.
- PBW, Proof 4.1: the terminal reference to geometric dot-slide/mixed/square relations is premature: their proof is the subsequent theorem, which consumes PBW faithfulness. Remove this unnecessary circular use; the polynomial module basis already gives the monomial basis.
- Relations, Facts F3: the cited smooth-incidence supplier gives the calculus, not the asserted description of every elementary correspondence as flag push–pull. Derive the elementary geometry in the proof.
- Relations, Proof 2.1: the adjacent repeated-color braid patterns are waved through as a reduction to the all-distinct case; supply their actual divided-difference identities.
- Relations, Proof 4.1: `2=-a_ii` is a false numeric equality; the degree is `-2=-a_ii`.
- Ext identification, Proof 3.1: "finitely many normal forms" is false with arbitrary nonnegative dot powers. There are finitely many crossing words, and infinitely many dot monomials. Give the reduction argument with an established word theorem or an explicit terminating sorting argument.
- Equal-color example, Verification 1.1: freeness on the two stated classes is not supplied by F1 (a definition). Add the actual PBW dependency and cite it.
- Multiedge example, Verification 3.1: the text claims an independent exact arithmetic computation by its author. This review must itself recompute the operator subtraction and cannot treat that claim as evidence.

## Source evidence

Opened primary papers through the web tool: Varagnolo–Vasserot, [arXiv:0901.3992](https://arxiv.org/pdf/0901.3992), and Rouquier, [arXiv:1112.3619](https://arxiv.org/pdf/1112.3619). Read the complete retrieved relevant arguments of VV Proposition 2.23 (PDF pp. 16–18), Lemmas 3.7–3.8 (PDF pp. 22–23), and Theorem 3.6 (PDF pp. 21–23), together with Lemma 2.27 and its stated omission of details (PDF p. 19). Rouquier Lemma 3.6 and Propositions 3.7–3.8 (PDF pp. 14–15) give the filtered spanning/polynomial argument. VV uses cotangent Euler factors; the local carriers fix positive complex tangent orientations and normalize crossing classes explicitly, so signs must be derived locally rather than copied blindly. VV Remark 3.3(b) addresses arbitrary multiplicities; the local weight argument must retain those multiplicities.

## Consumer maintenance

The definition's notation repairs preserve its intended Chern cap class, parameters, domains and sign conventions. All five assigned consumers have been opened. The additional direct consumer `thm-self-dual-indecomposable-klr-projectives-give-the-negative-half-lower-global-basis` was opened completely: Facts F3 and Proof 1.1 use the same unchanged polynomial operators, corner convention and degrees. Its indirect closure was enumerated and its unchanged interfaces were checked in the focused passages listed below.

## Completed repairs and evidence

All six assigned item carriers were edited. The definition's intended objects and the result statements' substantive quiver, coefficient, grading and sign conventions were preserved.

| Carrier | Final repaired location and evidence |
| --- | --- |
| Definition | Geometric dots now use the typed diagonal pushforward of the Chern cap class. Equal-color mixed relations carry their word idempotents; the braid is stated in its corner with its valid index range. The unchanged diagonal/cup action in PBW and the Chern supplier identify the intended dot. |
| PBW theorem | F1 now attributes only the BM product to its definition; F3 attributes the Ext/BM applicability to the smooth-incidence supplier that actually states it. F4 now records the supplier's real degree drop. Proof 1.1 replaces the false polynomial extension with the stabilizer/torus calculation. Steps 2.1, 3.1, 3.2, 4.1 and 4.2 supply echelon strata, closed rank conditions, affine-cell localization, flag-bundle scalar extension for dualizing coefficients, and the unit top coefficient of reduced chains. Step 5.1 obtains monomials without invoking the later relation theorem. The required Stiefel and CW-type suppliers were explicitly added to deps. |
| Relation theorem | F3 is restricted to the supplied calculus; elementary correspondence geometry is proved in 1.2–1.3. These steps compute dimensions, quotient Euler factors, all unequal dot slides and the positively oriented projective-line push-pull sign. Step 2.1 gives the actual adjacent repeated-color braid calculations. Step 4.1 corrects the equal-color degree to -2. The native outer-equal braid polynomial and both oriented multiplicities are unchanged. |
| Ext identification | The Statement and step 4.1 replace the misleading exemption from all finiteness hypotheses by the precise absence of a total-Ext finite-dimensionality assumption. F5 now cites the actual BM convolution definition for its geometric product, and that supplier was added to deps. Step 1.2 proves adjacent-word braid connectivity and shortening by explicit canonical coset absorption; step 3.1 then gives terminating normal-form spanning with finitely many crossing words and arbitrary dot powers. This proves the missing prerequisite internally, without relying on a literature assertion as a proof. |
| Equal-color example | F3 and deps now name geometric PBW. Step 1.1 uses it for the two-class free module, and step 3.1 proves that the nil-Hecke presentation is isomorphic to the corner, rather than merely satisfying some nil-Hecke relations. |
| Multiedge example | Step 3.1 now displays both skew-group expansions and their cancelling longest-permutation coefficients. Independent exact Fraction arithmetic checked every permutation coefficient on a 6-by-6-by-6 Cartesian grid (216 points). After multiplication by the three difference factors each coefficient is a polynomial of degree at most 5 in each variable, so this grid verifies the coefficient identities by interpolation as well. The resulting correction is exactly the stated nonzero difference-of-cubes quotient. |
| A-page prose | The module basis is described over the first-coordinate polynomial corners, and the top-product explanation now names reduced flag chains and weighted arrow entries. No B-page prose was changed. |

The batch proof contract was updated for all changed derivations, fact uses and numbering. Its header was corrected from 47 to this dispatch's 43. A false zero-arrow boundary record was corrected: Q_ij=1 for distinct colors with no arrows, whereas Q_ii=0. The stale definition-source citation attached to Ext F5 was replaced by its actual BM source. The two example proof-provenance fields now record ai-altered. None of the six carriers contained a verification.judge record at repair time, so none needed removal. No judge, certification or publication record was added.

The format checker proposed canonical phase numbering for PBW and the Ext proof. Its proposals were adopted, preserving their complete arguments and updating internal references and contracts. Final PBW numbering is 1.1, 2.1, 3.1, 3.2, 4.1, 4.2, 5.1; final Ext numbering is 1.1, 1.2, 2.1, 3.1, 4.1, 5.1.

## Focused downstream checks

The additional direct consumer was read completely as stated above. For the following sixteen indirect consumers, the actual supplier-use passages (and, where necessary, Statements and Facts) were opened and checked for an effect of the definition's changes:

- `lem-cyclotomic-extension-of-scalars-respects-the-based-quotient`
- `thm-self-dual-indecomposable-cyclotomic-klr-projectives-give-the-lower-global-basis`
- `prop-qg8-categorification-transports-across-the-hecke-klr-bridge`
- `thm-ariki-canonical-basis-theorem-in-characteristic-zero`
- `thm-self-dual-simple-cyclotomic-klr-modules-give-the-upper-global-basis`
- `cor-graded-specht-classes-form-a-basis-of-the-module-grothendieck-group`
- `def-graded-adjustment-polynomials-in-positive-characteristic`
- `ex-projective-versus-simple-grothendieck-classes-in-a-small-block`
- `lem-reduction-of-characteristic-zero-simple-modules-modulo-p`
- `rem-canonical-bases-do-not-solve-arbitrary-positive-characteristic-decomposition-numbers`
- `thm-graded-decomposition-numbers-equal-canonical-basis-coefficients-in-characteristic-zero`
- `thm-graded-specht-classes-realize-standard-fock-vectors`
- `thm-graded-specht-heads-classify-the-graded-simple-modules`
- `cex-specializing-v-to-one-forgets-graded-decomposition-information`
- `lem-positive-characteristic-specht-head-and-cyclotomic-crystal-labels-agree`
- `thm-positive-characteristic-decomposition-polynomials-factor-through-adjustment`

These consumers use the preserved quiver parameters, polynomial crossing operators, source-first Ext product, grading and characteristic-zero global-basis conclusions; none uses the ill-typed dot notation as a new operation. The based-quotient, lower/upper basis and Hecke transport outputs used downstream are unchanged. No repair to these outside-batch carriers was indicated by this interface check. This was a focused consumer-maintenance check, not an independent audit of their entire mathematics.

Additional opened published source items: `thm-hh-matsumoto-reduced-word-theorem` and `thm-hh-coxeter-exchange-deletion-and-faithfulness`. No dependency on them was added: the exact type-A word prerequisite was instead proved within the assigned Ext item.

## Uneditable finding and page verdicts

The B page `signed-quiver-flag-convolution-and-klr-ext-realization-examples`, lines 22–24, ends by claiming that both examples depend only on the definition and the relation theorem. The equal-color example's two-class freeness and presentation isomorphism require the PBW theorem, now explicitly cited as F3 and in its deps. The relation theorem supplies operator identities and a homomorphism, but its Statement does not establish that two-class basis or an isomorphism. Thus the page's supporting-item attribution is incomplete. Minimal lead repair: include the PBW theorem in that final sentence. B-page prose is outside this reader's edit license. This is a citation-inaccurate finding, severity fatal under the instruction that a defective citation is not excused as a short proof-step omission.

| Assigned page | Reader verdict |
| --- | --- |
| `signed-quiver-flag-convolution-and-klr-ext-realization` (A) | Reviewed and repaired; no remaining mathematical defect identified in the assigned items or current A prose. |
| `signed-quiver-flag-convolution-and-klr-ext-realization-examples` (B) | Example calculations checked and repaired; hold its final supporting-item sentence for the lead's correction. |

## Validation and handoff

Each edited carrier received its required reflow and precheck. Final results: the definition had zero applicable proofs and zero failures; all five proof-bearing items passed. The final batched command was:

```text
node tools/proof-layout.mjs items/def-quiver-full-flag-incidence-varieties-and-geometric-klr-generators.md items/thm-quiver-flag-relative-position-strata-give-a-faithful-geometric-pbw-basis.md items/thm-quiver-flag-convolution-generators-satisfy-the-signed-klr-relations.md items/thm-signed-klr-algebra-is-the-equivariant-ext-algebra-of-quiver-flag-complexes.md items/ex-equal-color-quiver-flag-correspondence-is-nilhecke.md items/ex-signed-two-direction-multiedge-quiver-flag-crossing.md
```

It exited 0: `proof-layout: 6 items, 26 steps, 0 defects`. Rendering passed for both pages and all six items, with affected files checked again after the last edits. The explicitly scoped strict proof-contract check exited 0 with `0 error(s), 0 warning(s), 6/6 item(s) checked`. Earlier precheck canonical-form and contract-use failures were corrected before these final results; no mathematical acceptance is inferred from these checks.

The authored manifest was left untouched under the item/A-prose-only repair scope. The lead must synchronize its mirrored deps with four newly explicit carrier edges: PBW to the Stiefel-model and finite-triangulation suppliers; Ext to the BM convolution definition; the equal-color example to PBW. All four targets were already in the corresponding original transitive supplier closures, so these additions introduce no new supplier batch. No research/plan-spec.json, outside-batch item, published carrier, or B-page prose was edited.

Coverage limitations: all assigned carriers and pages and all direct suppliers were opened; extra foundations were read only where the repair needed them. The entire recursive foundational dependency corpus was not audited, and some external suppliers were initially opened before their own suppliers. Assigned items themselves were reviewed in dependency order. Only the complete relevant retrieved sections of the cited papers were read, not the complete papers. Indirect consumers received the focused interface checks above. No unresolved source-access or mathematical-understanding blocker remains for these local repairs; the uneditable B sentence and manifest synchronization are the stated handoff work.
