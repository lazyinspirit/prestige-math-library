# Batch 35 authoring notes — qft-mc02

## Inventory, assignment, and dependency order

This batch owns only the pair qft-mc02 / qft-mc02-examples (orders 509–510) in quantum-field-theory-mathematics, library mathematics. The A page requires qft-mc01; the B page requires the A page. The run's batch-dependency-levels.json gives batch 35 level 1 because it requires batch 34. The item manifest records the computed item-level labels after authoring.

The two originally reserved A items and the B counterexample were retained. Four A-page prerequisites were added because the consuming proof needs explicit definitions of a weak common-domain operator-valued tempered distribution, the Poincaré test pullback, the Minkowski Fourier/support convention, and the continuity of that pullback on Schwartz space. The local lemma proves the needed continuity estimate. These additions stay on the assigned A page and have mathematical dependencies only.

## Design versus plan-spec comparison

The plan-spec row and the complete plan-quantum-field-theory-track.md section agree on the pair/page IDs, A/B classification, order, title, category, library, companion, and declared qft-mc01 prerequisite. No page-level metadata conflict was found.

The older track reservation and the 2026-10-12 repaired QFT research inventory both reserve two A items and one B item. The repaired inventory is authoritative for the reconstruction scope: actually positive continuous moments on Schwartz tensor algebra yield a weak field on the common GNS domain; covariance, tested locality/equations, and matrix-coefficient spectrum are conditional on their displayed moment identities. The full Wightman reconstruction theorem, positivity/existence of unspecified interaction data, joint self-adjoint generators, and a joint spectral measure are outside this carrier.

The additional four A items are a justified prerequisite expansion required by the explicit-definition rule. They do not replace or weaken either reserved A claim, add another pair, or add an item on the B page. The plan-spec remains unchanged. Its `items` arrays were empty as planning placeholders.

## Current qft-mc01 supplier interface and status

The batch-34 manifest now contains the complete qft-mc01 A inventory: the unital star-algebra state definition (level 0), positive-state Cauchy–Schwarz lemma (level 1), algebraic GNS theorem (level 2), and state-symmetry implementation lemma (level 3). The qft-mc01 page exists with status draft and requires the published read-only Hilbert Space Geometry and Riesz Representation page. The GNS theorem's imported completion supplier is the current read-only root item `thm-completion-of-an-inner-product-space-is-hilbert`; its full proof was inspected, including its exact Countable Choice premise. The imported theorem states no stronger choice axiom than the consumer carries.

I re-read the current full statements and proofs of the three in-run carriers used by the consuming theorem. Their full-file SHA-256 values are recorded in batch-35.cross-batch-dependencies.json, and their Step-1 records recompute as ready/closed on current dependencies. The interfaces match the consumer's exact uses: GNS quotient/common domain/closability/adjoint/state recovery; Cauchy–Schwarz including zero cases and the left radical; and the symmetry lemma's state invariance plus coefficient continuity at the identity. The consuming theorem explicitly assumes the separate moment identities needed for covariance, tested locality/relations, and matrix-coefficient spectrum. It does not claim essential self-adjointness or generators from the GNS representation.

The cross-batch page/item rows are now `verified` for current carrier/interface availability. Each qft-mc01 supplier remains `status: draft`; these interface checks and Step-1 completion records do not constitute independent approval. The consuming proof remains conditional on the exact supplier statements and the qft-mc02 theorem's readiness record records the draft status.

## Source reading and dispositions

- Schmüdgen, An Invitation to Unbounded Representations of *-Algebras on Hilbert Space, §2.4 and §4.4 (printed pp. 20–21, 78–81), complete book text: positive functionals, GNS quotient, left multiplication, adjoint identity, closability, and cyclic uniqueness. Disposition: included for the algebraic representation framework; the local qft-mc02 proof supplies the test-space continuity and exact weak-field conclusion.
- Mund, General Aspects of Relativistic Quantum Field Theory, §2.1, Theorem 2.6 and proof (PDF pp. 15–17), complete 39-page lecture-note text inspected in the web reader. The notes call themselves incomplete; their theorem assumes Hermiticity, positivity, covariance, causality, spectral and cluster conditions and states a stronger Wightman reconstruction. `source-resolution` records that only the original compressed-PDF delivery URL was dropped after the initial attempt and all five retries failed page counting because `mutool` is unavailable. The relevant full text was read; this drop does not remove a claim or waive coverage. The local proofs and two fetch-verified independent texts cover every assigned item.
- Fewster and Rejzner, Algebraic Quantum Field Theory—an introduction, §2.3 (printed pp. 7–9), complete 47-page arXiv source: generic GNS quotient and common domain. Disposition: included as the second fetch-verified independent treatment for the A page. Its PDF pp. 10–11 also records the r^-2 Yukawa expression; the B counterexample proves the off-origin residual directly and does not infer the singular delta normalization.
- Littlejohn, Physics 221B Notes 34: Time-Dependent Perturbation Theory, §20, printed pp. 28–29, full 32-page Berkeley PDF: equations (116)–(119) give the r^-1 Yukawa profile and the origin-supported delta source. Disposition: included as the second fetch-verified independent treatment for the B page. The local counterexample proves the r^-2 residual itself.
- Bastianelli, Relativistic quantum mechanics, lecture notes (a.a. 2021/22), complete 55-page author-hosted PDF, pp. 7–8 inspected in the web reader: static point-source Klein–Gordon equation and Fourier-derived r^-1 Yukawa solution. Its PDF delivery URL was dropped only from the mechanically stamped source set after one initial failure and five retries; the full text was read, and the B-page proof is covered by the two fetch-verified sources above plus the complete local calculation.

The per-page URLs, locators, supported items, dispositions, retrieval attempts, source-resolution decisions, and fetch stamps are in batch-35.coverage.json. The A page has two fetch-verified independent full texts (Schmüdgen's book and the complete Fewster–Rejzner notes); the B page has two fetch-verified independent full texts (Fewster–Rejzner and Littlejohn). Mund's and Bastianelli's complete notes were read, but their compressed PDF delivery URLs are recorded as dropped for mechanical stamping only. Final source check: 4/6 listed source records fetch-verified and 6/6 resolved (two documented delivery-URL drops; not fetch stamps).

## Checks and readiness

All seven assigned items have current Step-1 `ready` records with their exact direct dependency lists; the final readiness check returned all seven closed/current. A page/item synchronization check covered both pages and all seven carriers, including statement text, sources, dependencies, roles, provenance, levels, and page requirements, with 0 mismatches. The reconstruction theorem is ready as a complete conditional draft: the current qft-mc01 input carriers and their interfaces exist and match, while their item status remains `draft` and no independent approval is implied. The pair uses six A items and one B example, within page capacity.

Scoped checks after the final carrier edits:

- `content-policy`: 7 items, 0 errors and 0 warnings.
- `depcheck`: 0 errors and 0 warnings. An initial warning identified the definition's forward citation to its continuity lemma; the definition was narrowed to the pointwise pullback, leaving the Schwartz-preservation result to the complete later lemma.
- `fwdcheck`, `extcheck`, and `citecheck`: 0 errors and 0 warnings.
- `rendercheck`: all 7 items and both pages checked, 0 errors and 0 warnings.
- `precheck`: all 3 proof-bearing items pass; 0 failures after the final dependency-ordered step labels.
- Strict proof-contract check: all 3 proof-bearing items checked, 0 errors and 0 warnings.
- `proof-layout`: all 7 assigned items, 16 steps, 0 defects. The app checkout has no installed `tsx` package, so the first invocation could not resolve its existing `@/*` TypeScript path alias. The successful rerun used a temporary resolver matching `web/tsconfig.json` (`@/*` → `./*`); no app-checkout files were changed.
- `coverage-checklist`: 2 pages, 14 harvested results, 0 errors and 0 warnings.
- `source-fetch-check`: 4/6 listed source rows fetch-verified and 6/6 resolved; two full texts were read but their compressed delivery URLs are documented drops for mechanical page-count verification. No claim or proof obligation was dropped.
- Scoped item-level dependency calculation on qft-mc01, qft-mc02 and their example pages: 12 items, no errors. Levels are qft-mc01 items 0–3; qft-mc02 items are 0, 0, 0, 1, 1, 4, 0 in manifest order.

Run-wide checks remain owner-scope blockers and were not rewritten here. The run-wide item-level dependency check reports 108 errors: 72 empty scaffold inventories in other pages and 36 stale labels in other items (for example, `def-tdmath-fenchel-transform-and-subgradient` 0 vs computed 1 and `lem-tdmath-fenchel-young-equality` 1 vs computed 2). The scoped qft item graph is clean. `batch-dependency-levels check` reports the shared run-level digest as stale; its recorded row still lists batch 35 at level 1 requiring batch 34. The shared dependency-level file was left to the owner. Finally, autopilot status could not recompute live because the workflow revision differs; its historical report was not used as current evidence, and no engine state was changed.
