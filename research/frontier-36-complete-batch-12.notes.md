# Frontier 36 complete — batch 12 Step-1 scaffold

## Scope and controlling inputs

Owns only the PDE-14F A/B pair bessel-potential-completions-and-real-order-sobolev-spaces and its examples companion. I read CLAUDE.md, README.md, SCHEMA.md, WORKFLOW.md, the batch task, the complete PDE-14F design section, the current plan, the batch manifest, the drift review and owner authoring direction before writing any item. The owner direction changes other pairs but imposes no amendment on PDE-14F. The drift review records this pair as no-drift.

The current plan gives A order 458.026001 with exactly normed-and-banach-spaces, schwartz-space-and-the-plancherel-theorem, and tempered-distributions-and-the-fourier-transform as page prerequisites; B order 458.026002 requires only A. These match the design. The plan's empty item arrays are the expected unspliced Step-1 state, while the design provides the 8 A and 2 B item inventory. **No plan/design conflict was found.** The design's source matrix lists Laugesen Chapter 3 as a second PDE-14F treatment, but its actual Chapter 3 assumes a bounded domain and real-valued integer-order weak-derivative spaces. This is a source-support qualification, not a plan conflict: Melrose §4 independently treats real-order Fourier spaces and supplies the second direct treatment.

The local convention is complex $\mathcal S(\mathbb R^n)$ and $L^2(\mathbb R^n)$, $n\ge1$, $\widehat{\partial_j u}=2\pi i\xi_j\widehat u$, first-variable-linear $L^2$ inner product, and bilinear distribution/test pairing. The weight is $\langle\xi\rangle^s=(1+|\xi|^2)^{s/2}$. At integer order the resulting norm is generally not equal to the derivative-sum norm or the $(I-\Delta)^{k/2}$ norm under this Fourier convention; FR-6 owns their equivalence. No FR-6 item is used here.

## Source reading and harvest

Full PDF bodies were retrieved and the relevant printed arguments inspected, beyond search snippets:

- [Dyatlov, Lecture Notes for 18.155](https://math.mit.edu/~dyatlov/18.155/155-notes.pdf), current 2026 revision: Exercise 11.3 at printed p. 135; §12.1.1, Proposition 12.1 and Remark 12.2 at pp. 139–140; §12.1.2, Definition 12.3 and properties (1)–(5) at pp. 140–141. The URL now serves a revision later than the design's 2022 description; the current printed locators are recorded in coverage. Exercise 11.3 states a general multiplier exercise; the bracket derivative estimates are proved locally, not attributed to an unwritten exercise solution.
- [Melrose, Differential Analysis, Chapter 3](https://math.mit.edu/~rbm/18-155-F17/Chapter3.pdf), §4 at printed pp. 66–70: Fourier inversion/L2 interfaces, formulas (4.8) and (4.14), Lemma 4.4, Definition 4.5, Propositions 4.6–4.8 and the complete Proposition 4.8 proof. Its Fourier transform uses $e^{-ix\cdot\xi}$ and a $(2\pi)$ Plancherel factor; the manifest uses the repository's unitary $e^{-2\pi ix\cdot\xi}$ convention instead.
- [Laugesen, Linear Analysis and Partial Differential Equations](https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf), Chapter 3 opening and §3.3 at printed pp. 49, 54–55: bounded-domain real-valued hypotheses, Definition 3.5 and Theorem 3.6 statement. These integer-order weak-derivative results are deferred to the planned weak-derivatives-and-sobolev-spaces page; they are not backing for this real-order completion.

The source-specific names, exact dispositions, item IDs or valid destinations, and reasons are in research/frontier-36-complete-batch-12.coverage.json. Dyatlov's order inclusions, derivative mapping and integer norm comparisons are deferred to fourier-multipliers-and-sobolev-characterisations; Melrose's negative-integer derivative decomposition and H^s duality are out of this pair's completion-bridge scope with separate reasons. Source-fetch-check --stamp fetched and stamped all 3 full PDFs on this dispatch. No source failed and no source_resolution decision was needed.

## Dependency and proof-route audit

All 14 distinct out-of-run direct item dependencies in the manifest exist with status published. The actual clauses used were examined, including their arguments:

- def-schwartz-space-and-its-seminorms fixes actual smooth functions and seminorms. lem-smooth-polynomially-bounded-multipliers-on-schwartz-space proves the finite-seminorm bound and transposed action, provided the local bracket derivative bounds are supplied first. This is the A1 proof route.
- cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space, lem-schwartz-space-is-dense-in-l-two, thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p, and lem-complex-lp-completeness-density-and-inner-product supply the inverse Fourier transform, compactly supported smooth approximation, L2 completeness and the first-variable-linear pairing. Their countable-choice hypotheses are retained.
- thm-plancherel, def-tempered-distribution, thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions, thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms, and thm-polynomial-growth-functions-define-tempered-distributions supply Fourier injectivity, the bilinear S' convention, L2/tempered agreement and the regular-L2 interface. The A6 strategy separately proves the weighted regular functional is tempered and that the map $L^2\to\mathcal S'$ is injective by testing against Schwartz approximants to the conjugate L2 function.
- def-completion-of-a-normed-space and thm-metric-completion-carries-a-unique-banach-space-structure were read with the latter's thm-metric-completion-exists supplier. The published completion proof uses Countable Choice to choose a countable family of approximants. This pair declares def-countable-choice where it relies on that construction. It does not require full AC, DC, any Recorded result, or an incompatible-axiom branch.

The hard local steps are explicit in the manifest: derivative bounds for both bracket powers; Schwartz multiplier continuity; compactly supported smooth frequency functions lying in the weighted Fourier image; Cauchy-class independence; a surjective isometry onto L2; the well-defined tempered embedding and its injectivity; and the converse weighted-distribution characterization. The positivity proof uses the strictly positive weight and Plancherel, then upgrades almost-everywhere zero to pointwise zero for a continuous Schwartz function. The embedding proof never treats an arbitrary distributional Fourier transform as a pointwise function. No missing, forward, circular, or inadequate actual prerequisite was found in this batch's proof path. No defect was found in the used clauses of these published suppliers; thus there is no published-defect report to send to the canonical ledger from this batch.

The source-backed scaffold claims still require Step-3 authorship and independent review. A readiness record is not a proof certificate.

## Inventory and readiness

Items were added once in the design's prerequisite order and a Step-1 outcome was recorded before the next item. All records are current and ready; no earlier ready item or escalation was overwritten.

| Page | Item | Level |
|---|---|---:|
| A | lem-japanese-bracket-powers-preserve-schwartz-space | 0 |
| A | def-bessel-potential-pre-hilbert-norm-on-schwartz-space | 1 |
| A | lem-bessel-potential-norm-is-positive-definite | 2 |
| A | lem-weighted-fourier-images-of-schwartz-functions-are-dense-in-ltwo | 2 |
| A | def-real-order-bessel-potential-sobolev-space | 3 |
| A | thm-bessel-potential-completions-embed-in-tempered-distributions | 4 |
| A | cor-bessel-potential-spaces-are-hilbert-and-complete | 5 |
| A | thm-bessel-potential-space-has-the-weighted-tempered-distribution-characterisation | 5 |
| B | ex-zero-order-bessel-completion-is-ltwo | 5 |
| B | ex-schwartz-functions-in-every-bessel-potential-completion | 5 |

An independent read-only recomputation against all current in-run manifests found all 10 labels exact and no batch-12 cycle. The 10 batch-12 step1Decision calls returned closed: true, decision: ready. This is the complete selected inventory, with no filler items or new A/B pair.

The owned cross-batch dependency input is an empty array: this pair has no direct same-run supplier in another batch. A read-only frontier-dependency-ledger.collect confirmed batch 12 is reviewed, has no cross-batch edge and has no orphaned review. The shared derived ledger was not refreshed by this worker because this dispatch permits writing only consumer-batch dependency inputs and other owned artifacts; its serial owner/operator merge remains available at the workflow join.

## Checks run on current disk

| Check | Result |
|---|---|
| Batch-12 coverage-checklist --require-destination | Exit 0; 1 page, 23 harvested results, 0 errors; one advisory low-yield warning (8 included of 23) from intentionally deferred/out-of-scope classical and later multiplier results. |
| Whole-run manifest-deps | Exit 0; 287 items, 0 missing dependency arrays, 0 errors at check time. |
| Whole-run content-policy --manifest-only | Exit 0; 288 scoped items, 0 errors, 0 warnings at check time. Other writers were active, explaining the adjacent item-count change. |
| item-dependency-levels check --run frontier-36-complete | Exit 1 solely on empty inventories of still-unscaffolded other-batch pages; no batch-12 label or cycle finding. The independent local recomputation matched 10/10 labels. |
| validate-plan research/plan-spec.json | Exit 0; declared page order acyclic and consistent, no unresolved item ID among pages with lists. Existing redundant-page-edge notices are diagnostic only. |
| extcheck | Exit 0; its published Recorded-result notices are outside this batch's proof paths. |
| Batch-12 source-fetch-check | Exit 0; 3/3 full-text PDFs fetch-verified. |
| Batch-12 url-sweep --fail-on-dead to /tmp | Exit 0; 3/3 cited URLs live, no suspect or failed link. |
| Batch-12 source-backing --require-verified | Exit 0; all 5 directly harvested included-result IDs retain openable verified backing. |
| Whole-run step1-decisions check | Exit 1 while other batches were actively changing. A later read-only recomputation found 404 items, 402 ready, two foreign escalations (ex-fredholm-determinant-of-a-finite-rank-operator and ex-nevanlinna-characteristic-of-reciprocal-gamma), 27 empty foreign pages and no stale rows. All 10 batch-12 readiness records were separately checked current and ready. |

The global Step-1 gate remains an owner/operator join after all other assigned batches finish and their holds are reconciled. No published content, canonical plan, shared run state, unified ledger, or verdict was edited here.
