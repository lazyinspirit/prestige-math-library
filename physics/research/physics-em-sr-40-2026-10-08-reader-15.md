# Reader 15 — batch 15

Run: `physics-em-sr-40-2026-10-08`. Independent Step 5a reader. All content remains draft; no judgment, acceptance stamp, publication or withdrawal was made.

## Opened inventory

Read `../CLAUDE.md`, local `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, `../PHYSICS-CONTENT-MODEL.md`, `briefs/reader.md`, the relevant run owner directions, the batch-15 page manifest and proof contracts, and the import registry `research/math-imports.json`. No rendered reader bundle was found in the current research inventory; current carriers supplied the review evidence. Manifests and author contracts were not treated as verdicts.

Both assigned pages were opened completely:

- `library/classical-electromagnetism-mathematics/em-variational-mathematical-prerequisites.md` (A).
- `library/classical-electromagnetism-mathematics/em-variational-mathematical-prerequisites-examples.md` (B).

All assigned items were opened completely, after their suppliers and in this order:

1. `items/lem-em-fundamental-variation-lemma.md`.
2. `items/lem-em-compact-field-variation.md`.
3. `items/ex-em-variational-mathematical-prerequisites-hypothesis-boundaries.md`.

All direct external supplier definitions/statements were opened at `items/<id>.md`:

- `cor-continuous-functions-are-borel-measurable`.
- `def-borel-sigma-algebra`.
- `def-ck-euclidean-maps-and-diffeomorphisms`.
- `def-countable-choice`.
- `def-directional-and-partial-derivatives`.
- `def-em-minkowski-affine-space`.
- `def-euclidean-inner-product`.
- `def-integrable-real-and-complex-functions-and-their-integrals`.
- `def-integral-of-a-nonnegative-simple-function`.
- `def-integral-over-a-measurable-set`.
- `def-metric-ball`.
- `def-metric-continuity`.
- `def-test-function-space-d-of-an-open-set`.
- `def-weak-derivative-of-a-locally-integrable-function`.
- `lem-classical-derivatives-are-weak-derivatives`.
- `lem-derivative-of-a-power`.
- `lem-em-continuous-localization`.
- `lem-test-function-cutoffs-and-euclidean-localization`.
- `prop-order-and-scalar-rules-for-the-nonnegative-integral`.
- `prop-the-nonnegative-integral-agrees-with-the-simple-integral`.
- `thm-algebra-of-total-derivatives`.
- `thm-borel-sets-are-lebesgue-measurable`.
- `thm-compact-subset-is-closed-and-bounded`.
- `thm-componentwise-limits-and-continuity`.
- `thm-extreme-value-metric`.
- `thm-heine-borel-rn`.
- `thm-lebesgue-measure-of-a-box-of-every-kind`.
- `thm-linearity-of-the-lebesgue-integral-on-l-one`.

Additional prerequisite passages opened:

- `def-ck-and-multi-index-notation-in-several-variables`.
- `def-total-derivative-in-euclidean-space`.
- `lem-schwartz-cutoffs-from-the-standard-smooth-step`.
- `thm-distributional-differentiation-is-continuous-and-commutes`.
- `lem-euclidean-balls-have-positive-finite-lebesgue-measure`.
- `cor-disc-jordan-content-is-pi-r-squared`.
- `lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals`.

The localization, compact-cutoff, classical-to-weak derivative, explicit smooth-step construction, and distributional classical-compatibility arguments were also read. Other published suppliers were checked at their relevant exact interfaces, without claiming a complete recursive audit of their proofs. Imports remained read-only. The local Minkowski definition and localization lemma are current-run draft suppliers, not published mathematical imports.

## Independent mathematical checks

The fundamental lemma specifies the open domain, continuity, positive dimensions, real compact smooth tests and Countable Choice. Zero extensions of the coefficient/test products are continuous; boundedness on compact supports and finite box measure justify their finite integrals. Component tests and sign reversal reduce to a positive scalar value. The cutoff is smooth; its product with the coefficient only needs continuity. Applying the independently checked integral-localization clause to that nonzero nonnegative product and then integral monotonicity produces the contradiction. No coefficient smoothness, extremum, existence or physical claim is inferred.

The compact-field lemma explicitly fixes the four-dimensional domains, closure neighborhood, regularity, signature, contractions and source term. The compact cutoff and finite-measure bounds justify S[A]. Compact tests extend smoothly by zero. Expansion gives a polynomial of degree at most two; antisymmetry makes the cross contraction twice F^{mu nu} partial_mu h_nu. Integral linearity and a polynomial derivative yield the first variation without exchanging limits and integrals. Each weak-derivative test identity applies with its stated C1 and compact-test hypotheses. Lowering is an invertible constant sign change, so the fundamental lemma applies to every numeric test tuple. Both directions of stationarity equivalence are proved, including empty U and zero h. The adopted positive source coupling correctly yields divergence F = -kappa J. No regular boundary or physical identification is assumed.

The saddle's zero differential is now proved by the total-derivative remainder criterion; arbitrarily small axis values of both signs exclude both local extrema. For the first field witness, F01=-2x1, F10=2x1, F^{01}=2x1 and F^{10}=-2x1 give divergence at nu=0 equal to -2; the contraction is -8(x1)^2 and L=2(x1)^2. The constant lowered direction leaves F unchanged. For the second witness, F01(s)=-(1+s), the contraction is -2(1+s)^2 and L(s)=(1+s)^2/2. The volume-16 box gives S(s)=8(1+s)^2 and derivative 16, despite zero base-field divergence. Both noncompact-support witnesses are exact; only the Lebesgue-functional branch carries Countable Choice. None of these items records empirical observations or proves physical applicability.

All assigned titles, hypotheses, facts, argument steps, computations and summaries were checked. Contract citation hypotheses and boundaries were checked; each contract derivation claim matches the final numbered carrier step exactly.

## Retrieved primary-source evidence

- [Figueroa-O'Farrill, Brief Notes on the Calculus of Variations](https://webhomes.maths.ed.ac.uk/~jmf/Teaching/Lectures/CoV.pdf): read printed pp. 4–6, 10–11, 19–20 and 22–26. Theorem 1 is in §4, pp. 4–5; Theorem 4 is in §12, p. 19 and has bounded-domain boundary-test hypotheses. Section 14, p. 23 discusses compact tests. The arbitrary-open-domain extension is proved locally, not attributed verbatim to that theorem. The indefinite-Hessian discussion on p. 10 supports the saddle context; the witnesses are computed locally. Unrelated claims in this source were not adopted.
- [Tong, Electromagnetism, Chapter 5](https://davidtong.org/pdfs/teaching/electromagnetism/electro4.pdf): read printed pp. 124–126, especially §5.5.3, pp. 125–126, equations (5.42)–(5.43) and the variation between them. Tong has negative source coupling and an overall 1/c factor. The assigned mathematical functional expressly adopts its positive coupling and normalization, with the correspondingly negative source equation.

Both PDFs were retrieved successfully. `pdftotext` was unavailable; PyMuPDF provided the complete relevant pages. No full-book reading is claimed.

## Edits and their evidence

1. `items/lem-em-fundamental-variation-lemma.md`, source title, line 35: fixed a **citation-inaccurate** locator. The earlier §14 Theorem 4 / pp. 22–23 location is contradicted by the retrieved theorem on §12, p. 19. The new source title separates the theorem and compact-support discussion. Statement and numbered proof are unchanged, so their contract rows and consumer interfaces remain current.
2. Same item, proof introduction, line 65: fixed **ill-formed** terminology calling the nonnegative coefficient/test product a test function. A merely continuous coefficient need not produce a smooth product. The introduction now calls it a product; the already-sound numbered proof only requires its continuity. No contract derivation changed.
3. `items/ex-em-variational-mathematical-prerequisites-hypothesis-boundaries.md`, Example first field witness: fixed a **false-claim** that all components other than F01/F^{01} vanished. Antisymmetry, the opened index definition and existing Verification 1.2 give nonzero F10/F^{10}; the summary now includes both.
4. Same item, Facts L3 and Verification 1.1: repaired **ill-formed** coordinate indices and supplied the omitted total-differential justification. Earlier coordinates are indexed from zero; the saddle used partial_1 and partial_2 without redefining them. L3 now defines partial_x and partial_y along (1,0) and (0,1). New L5 cites the opened exact total-derivative definition and states its remainder criterion. Verification 1.1 proves that the zero linear map has remainder ratio bounded by the Euclidean norm, tending to zero. Added `def-total-derivative-in-euclidean-space` directly to deps with mathematical-premise role. All saddle and field conclusions are preserved.
5. Updated `research/physics-em-sr-40-2026-10-08-batch-15.proof-contracts.json` for the example's repaired derivation, inputs, L3 citation uses, new L5 citation and zero-boundary evidence. Neither repaired item had an existing judge record; none was added.

The example has no item consumers: content search found only its own carrier and the assigned B page. That prose already states the correct computations. No page prose, another batch, published carrier, imported supplier or plan file was edited. `lem-em-compact-field-variation` remains unchanged.

## Historical uneditable dependency finding and concurrent correction

Subject: `lem-em-continuous-localization`, draft batch 13; assigned consumer: `lem-em-fundamental-variation-lemma`. Location: pre-reader Proof 4.1, using Proof 2.2 and 2.1/3.1. Class: **unlicensed-inference**; severity: **nonfatal**.

The observed step used a zero open-ball integral where 2.2 gave closed-disc integrals, without supplying the comparison, and assumed h(0,0)/2>0 without repeating the sign reduction. Both omissions are immediately closable: negate the component when necessary, choose a small closed disc in its positive continuity neighborhood, and lower-bound its integral by a positive constant times its inner open-ball measure. The consumed integral clause was independently sound.

A handoff hash check detected another writer's correction. I opened the changed Facts F8 and Proof 3.1/4.1. F8 now supplies Heine–Borel; 3.1 makes local zero-extension measurability explicit; 4.1 explicitly reduces the sign and estimates the closed-disc integral. This closes the observed disc gap, without importing a sphere-null theorem. I made no supplier edit. The historical finding is retained for the owner to reconcile with that repair, not asserted against corrected current bytes.

Observed raw SHA-256, computed while the old source was current: `254a2bb7e322edbc1b6546f390d7620bc483dd6fdbb9dcb35137e9694a2555d4`. It matches `research/physics-em-sr-40-2026-10-08-step5-hash-13-pre.json` exactly; thus the JSON finding uses snapshot `pre`. The stored fingerprint alone was not used as proof of observation. Corrected source hash when rechecked: `45c513caacd85e0c981db596a8f760325b451021451b67c31c29c2c783ce2f80`.

## Checks, verdicts and blockers

- Reflow on both changed items: exit 0; both unchanged by the formatter.
- Precheck on both changed items: exit 0; 2 checked, 0 failing.
- Rendercheck on all three assigned items: exit 0; frontmatter and mathematical expressions parse.
- Required final batched proof-layout on both changed items: exit 0; **2 items, 10 steps, 0 defects**, after the final item edit and formatter.
- Parsed comparison of contract derivations against all assigned final carriers: exact matches throughout.

A page `em-variational-mathematical-prerequisites`: **sound after the recorded source/introduction repairs**; the two claims and page summary agree. The only observed external omission was in an unused clause and has since been corrected.

B page `em-variational-mathematical-prerequisites-examples`: **sound after the recorded item repairs**; its unchanged prose matches the saddle and both field witnesses. B prose remained read-only.

No unresolved mathematical blocker remains for this reader's handoff. Step 5b retains disposition authority, including reconciliation of the historical supplier finding. These are reader recommendations, not acceptance stamps.

## Coverage limits

Opened both assigned pages and all three items, direct supplier statements/definitions, relevant localization/cutoff/classical-to-weak proofs, and assigned contracts. Read the cited primary-source sections. Repaired two assigned carriers; retained one historical nonfatal batch-13 finding, bound to the pre-reader hash, whose corrected current proof was checked during handoff. No whole-corpus, whole-book or complete recursive audit of imported proofs is claimed.
