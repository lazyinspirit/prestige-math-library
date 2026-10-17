# Batch 74 authoring notes — tgr-mhs02

## Scope and plan reconciliation

- Owner direction assigns this A/B pair and keeps its carriers in draft. The three reserved items and one locally required mathematical supplier were authored on the A page; the rescaling example remains on the B page.
- The active plan-spec requires qft-mf01 for A page tgr-mhs02; the older TGR reservation says requires: []. The active plan controls, so the A page requires qft-mf01.
- The older proposed inventory places ex-tgr-chiral-generator-rescaling in the A page's page field, while the active plan and batch manifest place it on tgr-mhs02-examples. The active A/B split controls.
- The current plan-spec item arrays are empty under its scaffold convention. The reservation supplies lem-tgr-exponential-current, lem-tgr-thermal-contour-spectrum, and ex-tgr-chiral-generator-rescaling. The extra A-page supplier lem-tgr-positive-damping-boundary is local mathematics required by the complete covariance proof.
- The source inventory omitted mathematical inputs used by the reserved arguments. Direct dependencies were added for the L2 Hilbert/separability facts, Hilbert-space Cauchy–Schwarz, integration by parts, dominated convergence, Fubini, smooth changes of variables, real exponential/logarithm conventions, complex power-series differentiability, rectifiable line-integral existence, and the one-pole contour calculation.
- The real differentiability-implies-continuity corollary was inspected but not used for the complex contour argument: its statement concerns real functions. The continuity implication needed there is proved from the complex difference quotient in the local facts.

## Supplier and proof review

- qft-mf01 is published and remains read-only. Its actual page lists def-qft-fock-and-test-spaces, lem-qft-fock-ccr-car, and lem-qft-segal-weyl-domain. The definition fixes the second-variable-linear Hilbert pairing, test space, Fock sectors, vacuum, finite-particle domain, and creation/annihilation formulas. The CCR/CAR lemma supplies sector maps and operator bounds. The Segal/Weyl lemma requires separability; the current item proves separability of L2((0,infinity),dk) by zero extension and restriction of the rational-box dense family.
- Countable Choice is explicit wherever it is used. No stronger choice principle is used.
- The local supplier lem-tgr-positive-damping-boundary proves the positive smooth variable-damping limit, including the lower-boundary sign, compact-parameter uniformity, and the O(epsilon log(1/epsilon)) error estimate. Its statement carries local positivity and C2 bounds; the current item applies it after the explicit diffeomorphism y=Y_b(s). No pointwise value at the double pole or four-dimensional null pullback is assumed.
- The Fourier-inversion supplier uses cyclic frequency. The thermal item converts to angular frequency with omega = 2 pi xi; continuity of the fixed-damping L1 Fourier transform fixes the zero-frequency value.
- The contour proof uses the published null-homotopic Cauchy theorem, whose actual homotopy-invariance supplier and proof were inspected. The single double-pole rectangle integral is computed directly from the explicit argument change and the fundamental theorem for a derivative along a closed contour. The general residue theorem is not used; its pre-existing source record reports an unrelated proof gap involving zero-winding poles.
- The thermal claim is limited to the tested two-point strip boundary and spectrum. It does not claim a norm-continuous C*-algebra KMS dynamics, an exact detector transition probability, or a physical black-hole temperature.

## Source reading and dispositions

- Wald's complete 46-page arXiv PDF was opened as full text; Section 3, PDF pp. 11–16, was inspected for collapse, exponential redshift, and free-field thermal context.
- Crispino, Higuchi, and Matsas's complete 53-page arXiv PDF was opened as full text; Section III.A.1–2, PDF pp. 19–22, and the detailed-balance discussion around equation 3.40 were inspected. Detector-specific transition probabilities and the infinite-duration rate prescription are out of scope.
- Jacobson's complete 59-page author-hosted lecture-note PDF was opened as full text; Sections 6.2.1–6.2.3, PDF pp. 32–39, were inspected. The Schwarzschild collapse state, greybody factors, and four-dimensional flux are out of scope.
- Grubb's complete 30-page distribution-theory module was fetched and opened; the relevant distribution-functional and test-function calculus in Section 3.1, PDF pp. 1–3, and Section 3.2, PDF pp. 4–5, were inspected.
- Kristensen's complete 58-page distribution-theory lecture notes were fetched and opened; Lecture 3, Section 3.2, PDF p. 10, and Lecture 14, Corollary 14.2, PDF pp. 51–52, were inspected. These notes and Grubb's notes support the distribution framework, not the local variable-damping estimate, which is proved in full in lem-tgr-positive-damping-boundary.
- Coverage records all five full-text URLs, ten harvested results, and the disposition of each result. source-fetch-check stamped the two new mathematical treatments and verified all five sources; no retrieval failed or was dropped, so no source_resolution failure record was required. The coverage checklist retains one advisory low-yield warning: 2/10 harvested results are marked included, while the physical literature is context rather than a mathematical proof supplier.

## Dependency levels

- The batch-dependency-levels file assigns batch 74 level 0 with requires: []. Its refreshed current graph still assigns batch 74 level 0 with no in-run batch prerequisite.
- Recomputed item levels are lem-tgr-positive-damping-boundary 0, lem-tgr-exponential-current 1, lem-tgr-thermal-contour-spectrum 2, and ex-tgr-chiral-generator-rescaling 3. The batch-74 manifest calculation reports no cycles or mismatched labels.
- qft-mf01 is the page's published external prerequisite. The other direct mathematical inputs are published imported mathematics. The assigned batch has no cross-batch item edges; its cross-batch dependency input is [].

## Final scoped checks

- source-fetch-check --stamp: 5/5 source URLs verified; 2 newly stamped, 0 documented drops.
- coverage-checklist: 1 page, 10 harvested results, 0 errors, 1 advisory low-yield warning (2/10 included).
- precheck: all 4 authored items passed.
- proof-layout: 4 items, 21 proof steps, 0 defects.
- rendercheck: all 4 item files passed math parsing and frontmatter validation.
- content-policy: 4 scoped items, 0 errors, 0 warnings.
- depcheck, fwdcheck, extcheck, and citecheck passed their focused checks for these four items.
- proof-contract strict check: 4/4 items, 0 errors, 0 warnings.
- physics-content scoped check: 4 items and 2 pages, 0 errors.
- The official run-wide batch-dependency-levels write and check both passed after the final refresh; all 80 batch rows are current, and batch 74 remains level 0 with requires: [].
- The run-wide item-dependency-levels check still reports 91 errors in other in-flight manifests, including empty scaffolds and stale item labels; none names the four batch-74 carriers. The scoped batch-74 calculation passes.
- Run-wide proof-contract coverage is blocked by the empty manifest inventory for emg-pcp01, and the run-wide physics-content command is blocked by the invalid or empty batch-10 page inventory. Their scoped checks for this pair pass; no other batch was edited.
- Manifest integrity: all 160 pages owed are present with no scope drift.
- The four assigned carriers have ready Step-1 records with owner: false. The run-wide decision check remains closed: false (162/385 ready) because other batches still have owner escalations and empty scaffolds; none of the four batch-74 carriers appears in its unresolved-work list. Completion records are not independent approval.
