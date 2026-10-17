# Batch 36 — authoring notes

Run: physics-remaining-80-2026-10-17
Page pair: qsm-states-ensembles / qsm-states-ensembles-examples
Topic: Normal density states and spectral moments

## Plan and inventory reconciliation

- The source design at research/plan-quantum-statistical-mechanics-track.md L24 lists five earlier-page prerequisites. The current plan-spec.json entry and the dispatch list ten. The current plan/dispatch governs this batch; the ten prerequisites are kept on the A manifest and are not edited here.
- The original A reservation has 17 items. The current QGA audit adds the finite Gibbs purification definition, its sparse-oracle procedure, and the circuit marginal-error theorem, giving 20 A items. The paired inventory has three B examples. Both pages remain well below the 100-item cap.
- The 2026-10-17 QSM cycle amendment binds QGA0 to local finite matrix calculus and the published QC density/partial-trace interfaces. It replaces the false later-page tensor-state dependency. This batch preserves that binding.
- The historical Q0 supplier qsm-contract-td-M32 is research-only. The local lemma lem-qsm-matrix-state-calculus instead uses published cor-bolzano-weierstrass-in-rn and gives a complete deterministic dense-rational maximizing-sequence proof; no other pair's supplier was authored.
- The Q6 source proof uses finite spectral calculus, the exponential power series, and trace cyclicity. Its original inventory also listed lem-qsm-matrix-exponential-response, but the complete Q6 argument does not use that response lemma, whose stated path is Hermitian and cannot justify the non-Hermitian complex-time evolution. The KMS item's direct dependency was therefore removed after inspection; its in-run level is 1. The original design/dependency discrepancy is recorded for owner review.

## Recomputed in-run levels

Levels use direct suppliers on these two pages only; out-of-run dependencies do not increase the level.

| Level | Items |
|---:|---|
| 0 | def-qsm-density-trace-state; lem-qsm-matrix-state-calculus |
| 1 | def-qsm-finite-gibbs-purification; lem-qsm-matrix-exponential-response; lem-qsm-trace-state-calculus; lem-qsm-finite-gibbs-kms |
| 2 | post-qsm-normal-measurement-state; alg-qsm-finite-gibbs-state-preparation; def-qsm-relative-entropy-domain |
| 3 | thm-qsm-finite-gibbs-variational; thm-qsm-finite-gibbs-circuit-marginal-error; thm-qsm-trace-cross-log-inequality |
| 4 | thm-qsm-finite-entropy-composition; thm-qsm-trace-gibbs-variational |
| 5 | post-qsm-band-and-grand-preparation; post-qsm-thermal-gibbs-preparation; ex-qsm-entanglement-mixture |
| 6 | pthm-qsm-commuting-grand-response; pthm-qsm-equilibrium-unitary-entropy; pthm-qsm-gibbs-energy-entropy; pthm-qsm-static-quantum-response; ex-qsm-oscillator-trace-gibbs |
| 7 | ex-qsm-two-level-noncommuting |

The level-5/6/7 items are downstream of unresolved cross-batch carriers and remain escalated. Levels are dispatch order, not a wait barrier; their conditional arguments and examples have been completed.

## Mathematical repairs and limits

- The finite spectral/state-calculus lemma defines density matrices as positive Hermitian trace-one matrices, states the exact Bolzano–Weierstrass supplier interface, and explicitly uses continuity to keep the maximizing-sequence limit on the unit sphere.
- The finite exponential-response proof now derives the log-concavity bound in its Kubo–Mori/variance comparison. The finite noncommuting example uses \(\chi=\beta\tanh(x)/x\), proves \(\tanh x<x\) by integration, and records the zero-gap limit.
- The finite cross-log equality proof separates the Jensen, classical KL, and normalization gaps; it includes the trace-zero support argument for \(\sigma\) outside \(\operatorname{supp}\rho\).
- The normative precheck required a dependency-valid phase ordering for 12 proof-bearing items. Its canonical ordering was adopted, prose references and proof-contract boundary anchors were rebased to the current steps, and TeX delimiters in the 23 items and both pages were converted to the renderer-supported dollar form.
- The entropy-composition support proof explicitly infers \(Rz=0\) from \(R^{1/2}z=0\), then identifies the intersection of the two support tensor subspaces.
- The oscillator item proves self-adjointness by testing the adjoint domain on each basis vector, proves the geometric moment and entropy formulas, and supplies the infinite-degeneracy counterexample. It makes no claim that a lower bound alone yields trace normalization.
- The finite KMS proof retains the finite strip only. The infinite trace-Gibbs theorem retains the actual trace-class/open-\(\beta\)-interval condition and derives the compact moment envelope before invoking M16. Full Choice is explicit for the unbounded spectral/M33 branch; no unbounded cyclic product is used.
- The unitary-entropy theorem now declares its unbounded Hamiltonian spectral-calculus suppliers and proves \(e^{-itH/\hbar}\) unitary through the bounded PVM star-homomorphism. Its trace-normalization step explicitly uses bounded cyclicity under the exact M9 interface; M9 is a direct unresolved prerequisite for this item as well as for the trace-state lemma.
- M36's classical/counted common-basis covariance is used only for commuting \(H,N\). The finite noncommuting response is proved from the local Duhamel/Kubo–Mori lemma, not from a classical variance formula.
- The A/B examples are mathematical model calculations and adopted-state predictions. No experimental result, measurement precision, thermalization, or observed frequency is claimed.

## Unresolved production carriers

Eight research-only carriers are absent: supplier-nrqm-M2, supplier-nrqm-M3, supplier-nrqm-M9, supplier-nrqm-M25, supplier-thermo-M16, supplier-thermo-M27, supplier-thermo-M33, and supplier-thermo-M36. The cross-batch JSON records ten consumer/carrier rows, including the direct M9 use in unitary entropy, with exact read statements, hypotheses, proof status, and conditional use. M2/M9 affect trace-state calculus; M25 finite Gibbs optimization; M3 partial trace/entropy composition; M27 countable KL; M33 unbounded Gibbs normalization; M16 countable moment differentiation; M36 commuting grand response. Dependent items remain escalated even where local reasoning narrows or independently checks part of an interface.

## Source retrieval and source history

- Read the full Watrous standalone Chapter 2 and Chapter 5 PDFs; the complete MIT OCW Lectures 21 and 23; Jiang's full arXiv paper, §II; Connes–Marcolli's complete author-hosted book, Chapter 3 §§2.1–2.2; Gibbs's full 1902 text at the Project Gutenberg PDF; and the full van Apeldoorn et al. and Gilyén et al. papers at the cited Gibbs-sampling sections. Exact locators, harvests, dispositions, and mechanical fetch stamps are in the batch coverage file.
- The historical full-book Watrous URL TQI.pdf had an initial page-count failure and five retries in the earlier QFT batch-36 coverage. Its complete relevant Chapter 2 text was inspected there, and this batch cites the official standalone TQI.2.pdf / TQI.5.pdf chapters. The earlier failure history remains in that prior coverage; this batch does not repeat those attempts.
- The Internet Archive direct Gibbs PDF endpoint returned an internal retrieval error on its initial browser attempt. A targeted search found the full Project Gutenberg 273-page PDF for the same 1902 book; its complete Chapter IV canonical-distribution discussion, printed pp. 35–40, was read in full. Because the alternative succeeded, no further recovery retry was made and the active citation uses that full text. The failed candidate and successful alternative are preserved in this note and the coverage search/candidate history.
- The KMS reference is corrected from the inaccurate draft title “The Scaling Site” to Alain Connes and Matilde Marcolli, Noncommutative Geometry, Quantum Fields and Motives, Chapter 3, §2.2. The cited section defines the exact finite-height strip boundary condition; the local proof independently derives the finite Hamiltonian formula and keeps the \(\hbar\) scaling explicit.
- The noncommuting static-response source supports the finite exponential/Kubo–Mori calculation; the MIT notes support quantum canonical/grand ensemble context. The classical Gibbs text is used only for canonical normalization context, not as proof of an operator trace theorem.

## Scoped-check outcomes

- `proof-layout.mjs` on all 23 explicit item paths: 23 items, 67 proof steps, 0 defects.
- The scoped `author-check.mts` run reports precheck 22 checked/0 failing, rendercheck pass, and content-policy 23 items/0 errors/0 warnings. Its only failing subcheck is the strict proof-contract gate below, which reports the expected absent carriers.
- Scoped dependency calculation on this manifest: 23 items, maximum in-run level 7, no errors. The required whole-run dependency-level check still fails on unrelated batches: many other EMG, CSM, QSM, and TGR pages have empty scaffold inventories, and existing level mismatches include `def-tgr-charged-liouville-data` (declared 0, computed 1) and its downstream TGR items. No batch-36 item is named in those global errors; those pages and levels were not edited.
- `coverage-checklist.mjs --require-destination`: 1 page, 22 harvested results, 0 errors, 0 warnings.
- `source-fetch-check.mjs` without stamping: 9/9 sources fetch-verified and 9/9 resolved, with no documented drops; the nine stamps were created on the prior successful `--stamp` run.
- Strict proof-contract check: 23/23 contracts structurally checked, 0 warnings, and exactly 9 `citation-source-missing` errors for the absent production carriers: M2, M3, M9 (used by two contracts), M25, M27, M16, M33, and M36. These match the cross-batch records; no other contract errors remain.
- Step 1 recording: 23/23 current records present, 7 `ready` and 16 `escalated`; no `--owner` flag was used. The seven ready records were refreshed after final item/manifest edits; the 16 escalations remain open on the exact carrier gaps above. The larger run remains open on other batches. Records and their direct dependency arrays are in the run's `step1-<item>.json` files.
