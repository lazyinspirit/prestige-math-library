# Batch 23 — Quantum Source Compression and Classical Communication over Quantum Channels

## Scope, plan, and design

- Run: `non-ml-math-remaining-81-2026-10-18`; role beta; batch 23 is scheduled at dependency level 3 with prerequisite batches 9 and 22. Scheduling input hash: `fe3632ea0e8c2e13af3a43480f3e2c640e8cd264bb8fb612dce845c573c5b1aa`. Assigned pair IT14 only. A page order 2538 is `quantum-source-compression-and-cq-capacity`; B page order 2539 is its examples companion. The plan-spec scope is finite-dimensional Schumacher compression and HSW capacity for a fixed finite-input, finite-output memoryless cq channel.
- No pair-specific design section exists; the assignment says “design: none found.” The IT14 plan section and the controlling owner direction govern scope. No plan conflict was found. The plan requires natural-log nats; the carriers state this and label bit/qubit conversions.
- The controlling owner direction says the common finite Holevo claim keeps canonical ID `thm-it-holevo-measurement-bound` in batch21 and batch22 reuses it. Batch23 uses the current canonical batch21 carrier; this is an ownership direction, not acceptance.
- Both pages are below the 100-item cap. The A page contains 12 proof/definition items; the B page contains 3 worked examples/counterexample. The diagrams are explanatory only; proofs use explicit maps and inequalities.

## Inventory, dependencies, and levels

The synchronized manifest records every direct `deps` edge. Levels were recomputed over the current run graph, counting only suppliers in this run; each level is zero without an in-run supplier and otherwise one plus the maximum supplier level. Authors wrote local suppliers before consumers.

| Level | Item | Direct batch23 suppliers |
|---:|---|---|
| 0 | `lem-it-finite-gentle-measurement` | — |
| 0 | `lem-it-finite-positive-square-root-is-order-preserving` | — |
| 1 | `lem-it-hayashi-nagaoka-finite-operator-inequality` | `lem-it-finite-positive-square-root-is-order-preserving` |
| 1 | `def-it-quantum-source-and-compression-code` | — |
| 1 | `lem-it-finite-quantum-entropy-continuity` | — |
| 2 | `lem-it-square-root-cq-packing-bound` | `lem-it-finite-gentle-measurement`, `lem-it-hayashi-nagaoka-finite-operator-inequality` |
| 2 | `lem-it-schmidt-rank-compression-fidelity-bound` | `def-it-quantum-source-and-compression-code` |
| 3 | `def-it-classical-quantum-memoryless-channel` | — |
| 4 | `def-it-cq-channel-block-code-and-error` | `def-it-classical-quantum-memoryless-channel` |
| 5 | `lem-it-cq-typical-projector-dimension` | — |
| 6 | `thm-it-schumacher-quantum-source-coding` | `def-it-quantum-source-and-compression-code`, `lem-it-cq-typical-projector-dimension`, `lem-it-schmidt-rank-compression-fidelity-bound` |
| 7 | `thm-it-hsw-classical-quantum-channel-capacity` | `def-it-cq-channel-block-code-and-error`, `def-it-classical-quantum-memoryless-channel`, `lem-it-cq-typical-projector-dimension`, `lem-it-square-root-cq-packing-bound`, `lem-it-finite-quantum-entropy-continuity` |
| 7 | `ex-it-qubit-source-compression` | `thm-it-schumacher-quantum-source-coding` |
| 7 | `cex-it-ensemble-holevo-information-is-not-measured-by-a-fixed-povm` | — |
| 8 | `ex-it-cq-binary-pure-state-channel` | `def-it-classical-quantum-memoryless-channel`, `thm-it-hsw-classical-quantum-channel-capacity` |

Dependency chains central to the arguments are: positive square-root order (0) → finite Hayashi–Nagaoka (1) → square-root packing (2) → HSW (7); finite cq/channel definitions → block codes → typical projectors (5) → HSW (7); entropy definition → source-code definition and entropy continuity → Schmidt-rank bound (2) → Schumacher (6); and Schumacher/HSW → B examples. The manifest retains every additional published prerequisite, including trace-norm duality, support conventions, trace identities, Riemann integration results, Chebyshev, and finite-dimensional spectral facts.

## Supplier interfaces and unresolved readiness

Actual statements and proof bodies were read for the suppliers used. Exact excerpts are in the proof-contract file; direct and transitive dependency edges are in [cross-batch dependencies](non-ml-math-remaining-81-2026-10-18-batch-23.cross-batch-dependencies.json). Readiness remains unresolved for the following draft suppliers; no acceptance or approval is inferred:

- `def-it-von-neumann-entropy` (batch 21): draft; precheck n/a; acceptance/readiness unresolved. Inspected actual current canonical batch21 carrier Statement/Definition and proof body; required hypotheses and conventions are recorded. The carrier remains draft (draft; precheck n/a; acceptance/readiness unresolved); this is not acceptance.
- `def-it-classical-quantum-state-and-holevo-information` (batch 21): draft; precheck n/a; acceptance/readiness unresolved. Inspected actual current canonical batch21 carrier Statement/Definition and proof body; required hypotheses and conventions are recorded. The carrier remains draft (draft; precheck n/a; acceptance/readiness unresolved); this is not acceptance.
- `thm-it-holevo-measurement-bound` (batch 21): draft; precheck not-recorded; acceptance/readiness unresolved. Inspected actual current canonical batch21 carrier Statement/Definition and proof body; required hypotheses and conventions are recorded. The carrier remains draft (draft; precheck not-recorded; acceptance/readiness unresolved); this is not acceptance.
- `thm-it-finite-strong-subadditivity` (batch 22): draft; precheck not-recorded; acceptance/readiness unresolved. Inspected actual current batch22 carrier Statement/Definition and proof body; required hypotheses and conventions are recorded. The carrier remains draft (draft; precheck not-recorded; acceptance/readiness unresolved); this is not acceptance.
- `thm-it-fano-inequality` (batch 4): draft; precheck not-recorded; acceptance/readiness unresolved. Inspected actual current batch4 carrier Statement/Definition and proof body; required hypotheses and conventions are recorded. The carrier remains draft (draft; precheck not-recorded; acceptance/readiness unresolved); this is not acceptance.
- `thm-it-finite-entropy-chain-rule` (batch 4): draft; precheck not-recorded; acceptance/readiness unresolved. Inspected actual current batch4 carrier Statement/Definition and proof body; required hypotheses and conventions are recorded. The carrier remains draft (draft; precheck not-recorded; acceptance/readiness unresolved); this is not acceptance.
- `def-it-finite-mutual-information` (batch 4): draft; precheck n/a; acceptance/readiness unresolved. Inspected actual current batch4 carrier Statement/Definition and proof body; required hypotheses and conventions are recorded. The carrier remains draft (draft; precheck n/a; acceptance/readiness unresolved); this is not acceptance.
- `def-finite-alphabet-iid-source` (batch 9): draft; precheck n/a; acceptance/readiness unresolved. Inspected actual current batch9 carrier Statement/Definition and proof body; required hypotheses and conventions are recorded. The carrier remains draft (draft; precheck n/a; acceptance/readiness unresolved); this is not acceptance.
- `def-finite-law-self-information-and-entropy` (batch 9): draft; precheck n/a; acceptance/readiness unresolved. Inspected actual current batch9 carrier Statement/Definition and proof body; required hypotheses and conventions are recorded. The carrier remains draft (draft; precheck n/a; acceptance/readiness unresolved); this is not acceptance.
- `def-finite-source-information-density-and-typical-set` (batch 9): draft; precheck n/a; acceptance/readiness unresolved. Inspected actual current batch9 carrier Statement/Definition and proof body; required hypotheses and conventions are recorded. The carrier remains draft (draft; precheck n/a; acceptance/readiness unresolved); this is not acceptance.
- `def-it-information-units-and-logarithm-base` (batch 4): draft; precheck n/a; acceptance/readiness unresolved. Inspected actual current batch4 carrier Statement/Definition and proof body; required hypotheses and conventions are recorded. The carrier remains draft (draft; precheck n/a; acceptance/readiness unresolved); this is not acceptance.
- `def-it-finite-quantum-information-measures` (batch 21): draft; precheck n/a; acceptance/readiness unresolved. Inspected actual current canonical batch21 carrier Statement/Definition and proof body; required hypotheses and conventions are recorded. The carrier remains draft (draft; precheck n/a; acceptance/readiness unresolved); this is not acceptance.
- `lem-it-finite-cq-block-sum-is-a-state` (batch 21): draft; precheck not-recorded; acceptance/readiness unresolved. Inspected actual current canonical batch21 carrier Statement/Definition and proof body; required hypotheses and conventions are recorded. The carrier remains draft (draft; precheck not-recorded; acceptance/readiness unresolved); this is not acceptance.
- `lem-it-partial-traces-of-a-state-are-states` (batch 21): draft; precheck not-recorded; acceptance/readiness unresolved. Inspected actual current canonical batch21 carrier Statement/Definition and proof body; required hypotheses and conventions are recorded. The carrier remains draft (draft; precheck not-recorded; acceptance/readiness unresolved); this is not acceptance.
- `lem-it-finite-marginals-and-conditionals-are-pmfs` (batch 4): draft; precheck not-recorded; acceptance/readiness unresolved. Inspected actual current batch4 carrier Statement/Definition and proof body; required hypotheses and conventions are recorded. The carrier remains draft (draft; precheck not-recorded; acceptance/readiness unresolved); this is not acceptance.
- `def-it-finite-dimensional-quantum-relative-entropy` (batch 21): draft; precheck n/a; acceptance/readiness unresolved. Inspected actual current canonical batch21 carrier Statement/Definition and proof body; required hypotheses and conventions are recorded. The carrier remains draft (draft; precheck n/a; acceptance/readiness unresolved); this is not acceptance.
- `thm-it-quantum-relative-entropy-channel-data-processing` (batch 21): draft; precheck not-recorded; acceptance/readiness unresolved. Inspected actual current canonical batch21 carrier Statement/Definition and proof body; required hypotheses and conventions are recorded. The carrier remains draft (draft; precheck not-recorded; acceptance/readiness unresolved); this is not acceptance.
- `lem-it-finite-povm-measurement-channel` (batch 21): draft; precheck not-recorded; acceptance/readiness unresolved. Inspected actual current canonical batch21 carrier Statement/Definition and proof body; required hypotheses and conventions are recorded. The carrier remains draft (draft; precheck not-recorded; acceptance/readiness unresolved); this is not acceptance.
- `thm-it-finite-markov-data-processing` (batch 4): draft; precheck not-recorded; acceptance/readiness unresolved. Inspected actual current batch4 carrier Statement/Definition and proof body; required hypotheses and conventions are recorded. The carrier remains draft (draft; precheck not-recorded; acceptance/readiness unresolved); this is not acceptance.
- `thm-it-finite-kl-nonnegative-equality` (batch 4): draft; precheck not-recorded; acceptance/readiness unresolved. Inspected actual current batch4 carrier Statement/Definition and proof body; required hypotheses and conventions are recorded. The carrier remains draft (draft; precheck not-recorded; acceptance/readiness unresolved); this is not acceptance.
- `def-it-finite-conditional-entropy` (batch 4): draft; precheck n/a; acceptance/readiness unresolved. Inspected actual current batch4 carrier Statement/Definition and proof body; required hypotheses and conventions are recorded. The carrier remains draft (draft; precheck n/a; acceptance/readiness unresolved); this is not acceptance.
- `def-it-finite-conditional-mutual-information` (batch 4): draft; precheck n/a; acceptance/readiness unresolved. Inspected actual current batch4 carrier Statement/Definition and proof body; required hypotheses and conventions are recorded. The carrier remains draft (draft; precheck n/a; acceptance/readiness unresolved); this is not acceptance.
- `thm-it-finite-conditional-mutual-information-identities-and-equality` (batch 4): draft; precheck not-recorded; acceptance/readiness unresolved. Inspected actual current batch4 carrier Statement/Definition and proof body; required hypotheses and conventions are recorded. The carrier remains draft (draft; precheck not-recorded; acceptance/readiness unresolved); this is not acceptance.
- `lem-it-quantum-entropy-support-and-finiteness` (batch 21): draft; precheck not-recorded; acceptance/readiness unresolved. Inspected actual current canonical batch21 carrier Statement/Definition and proof body; required hypotheses and conventions are recorded. The carrier remains draft (draft; precheck not-recorded; acceptance/readiness unresolved); this is not acceptance.
- `thm-it-quantum-entropy-identities` (batch 21): draft; precheck not-recorded; acceptance/readiness unresolved. Inspected actual current canonical batch21 carrier Statement/Definition and proof body; required hypotheses and conventions are recorded. The carrier remains draft (draft; precheck not-recorded; acceptance/readiness unresolved); this is not acceptance.
- `thm-it-quantum-relative-entropy-partial-trace-dpi` (batch 22): draft; precheck not-recorded; acceptance/readiness unresolved. Inspected actual current batch22 carrier Statement/Definition and proof body; required hypotheses and conventions are recorded. The carrier remains draft (draft; precheck not-recorded; acceptance/readiness unresolved); this is not acceptance.

Specific dependent claims and hypotheses:

- `lem-finite-alphabet-iid-information-aep` (batch 9): its finite-alphabet IID natural-log surprisal and variance bound support spectral mass convergence in `lem-it-cq-typical-projector-dimension` step 1.1. Its current precheck is pass, but it remains a draft supplier.
- `thm-it-finite-strong-subadditivity` (batch 22): HSW step 3.2 requires SSA for a finite tripartite state. It instantiates (	au_{AC}otimes |0
anglelangle0|_B) with nonzero one-dimensional B, deriving finite entropy subadditivity. Its body is present; current precheck/readiness is not complete. The SSA proof itself uses batch22 partial-trace QRE DPI and the canonical batch21 QRE/entropy interfaces, listed transitively.
- `thm-it-holevo-measurement-bound` (canonical batch 21): HSW step 3.1 uses (I(J;widehat J)lechi) for the finite codeword ensemble and B counterexample step 2.1 cites the bound. Required interface: finite ensemble of density operators, finite POVM, natural-log mutual information. The actual proof body was read; precheck/acceptance is unresolved. Its transitive supplier requirements include channel QRE DPI and the finite POVM measurement channel.
- Batch21 `def-it-von-neumann-entropy` and `def-it-classical-quantum-state-and-holevo-information` supply nats conventions and (chi=S(ar
ho)-sum_xp_xS(
ho_x)); `def-it-finite-mutual-information` supplies the finite KL formula; `thm-it-fano-inequality` and `thm-it-finite-entropy-chain-rule` supply the converse identities. Their current draft bodies were inspected; upstream acceptance is not claimed. HSW uses Fano/chain rule in step 3.1; B counterexample uses finite MI in step 2.1.

No proof claim is omitted because these suppliers remain draft. Reconciliation must recheck the actual supplier bodies, all stated hypotheses, and the complete transitive proof dependencies before changing readiness.

## Sources and retrieval

Two independent full-text textbooks were read for each page. Full URLs, precise locators, item support, and dispositions are recorded in [coverage](non-ml-math-remaining-81-2026-10-18-batch-23.coverage.json) and its [source-coverage mirror](non-ml-math-remaining-81-2026-10-18-batch-23.source-coverage.json):

- John Watrous, *The Theory of Quantum Information*, complete author-hosted PDF; relevant full sections include §§3.1.2, 3.2.3, 5.2.4, 5.3.2, 5.3.3, 8.1.2, and Appendix B.
- Mark M. Wilde, *From Classical to Quantum Shannon Theory*, full author-hosted second-edition v8 PDF; relevant full sections include Lemma 9.4.2, §11.10, Ch.15 typical projectors, Ch.16 cq coding/Hayashi–Nagaoka, Ch.18 Schumacher coding, Ch.20 cq coding, and §11.9.2 Holevo measurement.

The complete relevant source arguments were inspected; the local carriers provide complete finite proofs and preserve their stated squared entanglement-fidelity, average-error, finite-alphabet, and nats conventions. No retrieval failure occurred in the prior full-text inspection; the required source-fetch stamp is recorded separately. No `source_resolution` drop or waiver is used.

## Proof contracts and readiness

[Proof contracts](non-ml-math-remaining-81-2026-10-18-batch-23.proof-contracts.json) contain a contract for each of the 15 items, actual proof steps and terminal-tag inputs, exact supplier excerpts, standard boundary worksheets, supplier interfaces, finite checks where applicable, and an author self-review record. Author self-review is not independent approval. Final `ready`/`escalated` decisions and scoped check results are recorded after the checks below.

## Scoped check results and Step 1 decisions

- `proof-layout`: 15 changed items, 42 numbered steps, 0 defects. The required proof-step terminal tags remain at the ends of their full step blocks.
- `proof-contract --strict`: 15/15 items checked, 0 errors, 0 warnings. The strict contracts include exact supplier excerpts and all eight standard boundary dispositions.
- `rendercheck`: all 15 items and both pages passed; KaTeX and renderer-YAML parsing succeeded, with no multiline display blocks or delimiter defects.
- `depcheck --items-file`: focused scope covers all 15 batch items and their closure; 0 errors and 0 warnings, including no unresolved links, dependency cycles, or page cycles.
- `content-policy`: 15 items checked, 0 errors and 0 warnings.
- `coverage-checklist --require-destination`: 2 pages, 23 harvested results, 0 errors and 0 warnings. `source-fetch-check`: 4/4 full-text sources verified, 0 retrieval failures, 0 drops.
- `item-dependency-levels check --run`: all 15 batch23 labels match the run graph. The full run command still reports 121 unrelated errors from other batches' empty scaffold inventories and existing dependency-level mismatches; it reports 0 batch23 item-level errors.
- The normative phase `precheck` checked 12 proof-bearing items and returned 9 nonpassing statuses: 7 `untagged-steps`, 2 auto-repair proposals; the remaining 3 proof-bearing examples/lemma pass, and the 3 definitions are not applicable. Inspection of `prestige-intelligence/worker/src/precheck.ts` shows it tests the numbered opening line for a trailing tag, while this dispatch requires justification tags at the end of the entire multi-line step. I retained the required terminal-tag format; `proof-layout` validates it. This checker-format mismatch is recorded for reconciliation and is not represented as a proof pass.
- `step1-decisions record` produced a readiness record for all 15 items without `--owner`: 4 `ready` (the finite gentle bound, positive square-root order, Hayashi–Nagaoka inequality, and square-root packing bound) and 11 `escalated` because the recorded upstream draft suppliers are not closed. Each record includes the examined direct dependencies and a reason; none is an independent proof approval.

No tests were added or run. The run-wide blockers and upstream supplier IDs remain outside batch23 ownership; no other pair's files, shared plans, engine state, or verdicts were edited.
