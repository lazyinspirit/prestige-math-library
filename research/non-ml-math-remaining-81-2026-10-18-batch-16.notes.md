# Batch 16 — Distributed Source Coding

Run: `non-ml-math-remaining-81-2026-10-18`  
Role: beta  
Pages: `distributed-source-coding` (A), `distributed-source-coding-examples` (B)  
Dispatch scheduling input: `fe3632ea0e8c2e13af3a43480f3e2c640e8cd264bb8fb612dce845c573c5b1aa`

## Scope and plan reconciliation

The assigned task says no pair-specific design was found; the design-directory search confirmed that there is no design section for this pair. Therefore no absent design requirements were invented. The controlling information-theory plan and `research/plan-spec.json` agree on IT10: prove the finite-IID (k)-source lossless Slepian–Wolf region by all-subset converse and independent random binning; distinguish the deterministic Gács–Körner common part from Wyner common information; include two-source corner examples; do not assert an exact general distributed lossy region. The track convention is natural logarithms and nats.

The literature statement in Cover–Thomas §15.4.3 gives the many-source inequalities but omits their proof. The local theorem supplies a complete all-subset converse and achievability argument, including the closed boundary. This fills the planned proof obligation and does not change the scope. The B page computes the binary symmetric source boundary and compares independent versus shared random maps. It does not give a numerical Wyner common-information value.

The assigned A-page `requires` remain batches 6 and 9 (`method-of-types-and-finite-large-deviations` and `iid-lossless-source-coding-and-the-aep`). The current run-level dependency graph also sees direct carrier edges to batch 4, including the finite entropy, information-unit, mutual-information and logarithm suppliers; batch 16 remains at `dependency_level: 3`. These are item-level prerequisites, not an additional pair-design requirement. The frozen scheduler and autopilot state were not edited.

## Inventory, direct dependencies and levels

The manifest is the authoritative machine-readable inventory. Direct `deps` are listed here so the topological author order and logical edges are reviewable.

| Item | Level | Direct dependencies |
|---|---:|---|
| `def-it-gacs-korner-and-wyner-common-information` | 2 | `def-it-finite-mutual-information`, `def-it-information-units-and-logarithm-base`, `def-qa-35-finite-probability-entropy-and-stochastic-matrices` |
| `lem-it-finite-conditional-entropy-continuity` | 2 | `def-it-finite-conditional-entropy`, `lem-it-finite-marginals-and-conditionals-are-pmfs`, `lem-it-finite-relative-entropy-continuity-on-simplex`, `def-qa-35-finite-probability-entropy-and-stochastic-matrices` |
| `def-it-finite-iid-multisource` | 3 | `def-finite-alphabet-iid-source`, `def-it-finite-conditional-entropy`, `def-it-information-units-and-logarithm-base`, `def-qa-35-finite-probability-entropy-and-stochastic-matrices` |
| `lem-it-conditional-type-class-cardinality` | 3 | `def-it-empirical-type-and-type-class`, `lem-it-finite-marginals-and-conditionals-are-pmfs`, `lem-it-type-class-cardinality-bounds`, `def-it-finite-conditional-entropy`, `def-qa-35-finite-probability-entropy-and-stochastic-matrices` |
| `def-it-multiterminal-lossless-code` | 4 | `def-it-finite-iid-multisource`, `def-it-information-units-and-logarithm-base` |
| `lem-it-multisource-block-conditional-law-factorization` | 4 | `def-it-finite-iid-multisource`, `def-it-finite-conditional-entropy`, `lem-it-finite-marginals-and-conditionals-are-pmfs`, `def-qa-35-finite-probability-entropy-and-stochastic-matrices` |
| `def-it-jointly-typical-multisource-blocks` | 5 | `def-it-finite-iid-multisource`, `def-it-empirical-type-and-type-class`, `def-finite-law-self-information-and-entropy`, `def-finite-source-information-density-and-typical-set`, `def-it-finite-conditional-entropy`, `def-qa-35-finite-probability-entropy-and-stochastic-matrices`, `lem-it-multisource-block-conditional-law-factorization` |
| `lem-it-conditional-typical-fan-cardinality` | 6 | `def-it-jointly-typical-multisource-blocks`, `def-it-empirical-type-and-type-class`, `lem-it-conditional-type-class-cardinality`, `lem-it-finite-conditional-entropy-continuity`, `def-it-finite-conditional-entropy`, `def-qa-35-finite-probability-entropy-and-stochastic-matrices` |
| `lem-it-multisource-typicality-probability` | 6 | `def-it-finite-iid-multisource`, `def-it-jointly-typical-multisource-blocks`, `def-it-empirical-type-and-type-class`, `def-it-finite-conditional-entropy`, `def-finite-alphabet-iid-source`, `def-identically-distributed-and-iid-random-variables`, `lem-finite-alphabet-iid-information-aep`, `def-qa-35-finite-probability-entropy-and-stochastic-matrices`, `lem-it-multisource-block-conditional-law-factorization` |
| `thm-it-slepian-wolf-rate-region` | 7 | `def-it-finite-iid-multisource`, `def-it-multiterminal-lossless-code`, `def-it-jointly-typical-multisource-blocks`, `lem-it-multisource-typicality-probability`, `lem-it-conditional-typical-fan-cardinality`, `thm-logarithm-derivative-and-integral` |
| `ex-it-binary-symmetric-slepian-wolf-region` | 8 | `thm-it-slepian-wolf-rate-region`, `def-it-finite-iid-multisource`, `def-it-multiterminal-lossless-code`, `def-it-gacs-korner-and-wyner-common-information`, `def-it-finite-conditional-entropy`, `def-it-information-units-and-logarithm-base`, `thm-it-finite-kl-nonnegative-equality`, `thm-natural-logarithm-laws`, `def-qa-35-finite-probability-entropy-and-stochastic-matrices` |
| `ex-it-shared-random-binning-collision-probability` | 8 | `thm-it-slepian-wolf-rate-region`, `def-it-finite-iid-multisource`, `def-it-multiterminal-lossless-code` |

The batch-local dependency-level check over the batch 16 closure passed for 28 items across five pages (batches 4, 6, 9 and 16); no item cycle or label mismatch was found. The full-run level command reports unrelated empty inventories and level mismatches elsewhere in this 81-pair run. Those other pairs were not edited.

## Supplier interfaces and open checks

The exact item-level supplier edges, required hypotheses and affected claims are recorded in `research/non-ml-math-remaining-81-2026-10-18-batch-16.cross-batch-dependencies.json` (42 verified edges, including the two page prerequisites). I inspected the actual current supplier definitions and proofs before using their statements; `status: verified` records interface inspection only, not supplier acceptance.

The batch 6 interfaces used here are the attainable empirical-type/type-class definitions, the (e^{nH(q)}) type-class upper bound, and full-simplex continuity of relative entropy against a fixed full-support reference. The batch 9 interfaces are the finite-alphabet IID block law, support-restricted information density, and quantitative finite-source AEP bound. Their hypotheses—finite alphabets, positive blocklength, natural logs, support restrictions, and explicit zero-mass conventions—are retained in the local definitions and proofs. The finite conditional block-law factorization is supplied locally before the jointly typical definition and typicality probability proof use it. No required supplier body remains unavailable; the local proof contracts quote the exact supplier sections used.

The batch 6 notes still contain an older pre-reconciliation missing-page hold. The current batch 6 cross-batch evidence and actual carrier bodies establish the owner-resolved route. This batch follows the current evidence while retaining the stale-note discrepancy here for reconciliation; no approval is inferred from the route record.

## Sources and retrieval record

Full-text source inventory, locators, supported items, and the disposition of all 22 harvested results are recorded in `research/non-ml-math-remaining-81-2026-10-18-batch-16.coverage.json`. The A page has four independent treatments: Cover–Thomas, *Elements of Information Theory*, Chapter 15 §§15.2 and 15.4.1–15.4.3 and Chapter 11 §11.1; Polyanskiy–Wu, *Information Theory: From Coding to Learning*, Chapter 11 §§11.2 and 11.6 and Chapter 1 §1.2 Proposition 1.5; Gács–Körner, “Common Information Is Far Less Than Mutual Information,” §2 Definitions 4–5; and Tan’s EASIT notes reproducing Wyner’s original §1 definition. The B page records Cover–Thomas and Polyanskiy–Wu on Slepian–Wolf plus the Gács–Körner and Wyner treatments for the common-information example. The coverage file has two successful full-text retrieval attempts and fetch stamps for each of its eight source records; `source-fetch-check --stamp` verified and stamped all eight. The coverage checklist passes.

The browser PDF text opener failed on the Cover–Thomas PDF; I recovered by downloading the full 774-page PDF, extracting it with MuPDF, and inspecting the cited sections. That success and the later fetch check are preserved in `recovery_attempts` and `fetch_verified`. I also inspected MIT 6.441 S10 lecture 07a; it did not cover Slepian–Wolf and was excluded from the source set. No source remains unresolved or was dropped, so no `source_resolution` drop/escalation record was created. No source excerpt or retrieval result was inferred from a landing page.

## Authoring and checks

The A page contains the finite-IID source, lossless code and jointly typical block definitions; both required local lemmas (conditional type-class size and block conditional-law factorization); the finite conditional-entropy continuity lemma; the joint typicality probability and conditional fan bounds; and the all-subset Slepian–Wolf theorem. The B page contains the BSC boundary/common-part calculation and the finite shared-map collision comparison. The A-page TikZ commutative diagram states its decoder and identity conventions in prose; no proof relies on the diagram. All local proof steps give their hypotheses and supplier facts with exact wikilinks, and each proof contract names the actual steps, inputs, source excerpts, and standard boundary worksheets. No information-theory finite-smoke registry check exists; the contracts therefore leave `finite_smoke` empty rather than claiming a test. The examples’ finite calculations are shown directly in their verification arguments.

Checks after the final carrier edits:

- `content-policy`: 12 items, 0 errors, 0 warnings.
- `manifest-deps`: 12 items, all explicit, 0 errors.
- scoped item levels: 28 items across five dependency pages, 0 errors.
- `coverage-checklist`: 2 pages, 22 harvested results, 0 errors, 0 warnings.
- `source-fetch-check` check mode: all 8 source records stamped.
- scoped precheck: 8 proof-bearing items, 8 passed.
- strict proof contract: 8 items, 42 exact citations, 30 derivation rows, 0 errors or warnings.
- `proof-layout`: 12 edited items, 30 steps, 0 defects.
- scoped `rendercheck`: 14 files (12 items and 2 pages), 0 errors, 0 warnings.

The full-run `item-dependency-levels` check is not green because of unrelated empty inventories and dependency-label mismatches outside this batch’s closure. The batch-scoped closure check is green. Completion/readiness records are separate from owner review and do not constitute independent approval.

All 12 batch items were recorded `ready` with `owner: false`, explicit direct dependency IDs, and evidence-based reasons using `node tools/step1-decisions.mjs record`. Their readiness hashes currently close. The run-wide readiness check remains open for other batches; this batch does not resolve or overwrite their records.
