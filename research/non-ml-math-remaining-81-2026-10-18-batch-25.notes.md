# Batch 25 — Quantum Key Distribution and Composable Secrecy

## Scope, plan, and design

The assigned task reports **no pair-specific design section found**. I read the complete information-theory track plan and the current `IT22` entry in `research/plan-spec.json`. Both specify: define a finite authenticated protocol, its public transcript, the abort-aware real/ideal trace-distance criterion, and a separate correctness error; prove the additive correctness-plus-secrecy bound only. They agree on scope and conventions. There is no design/plan conflict to record; the task's request to read a complete pair design has no such section to read.

The authored protocol model takes every register, including Eve's retained system, to be finite-dimensional, with finite key and transcript alphabets and finite rounds. This matches the finite quantum state/channel interfaces used by the assigned prerequisite track. The ideal authenticated public channel delivers messages unchanged and discloses them to Eve. The items do not prove security of an authentication implementation or a particular QKD protocol. No infinite-dimensional trace-class extension or variable-length key theorem is asserted.

## Inventory and dependency levels

Batch dependency input: `research/non-ml-math-remaining-81-2026-10-18-batch-dependency-levels.json`, input SHA-256 `b7524d72dd7f2094de088d31db079bcd74b1b07560eb88bb8bb10788b351c0b4`. Batch 25 is level 5 and requires batches 20 and 22. The page-level requirements remain exactly those in the plan.

| Item | Home | In-run suppliers | Item level |
|---|---|---|---:|
| `def-qkd-finite-authenticated-protocol` | A | none | 0 |
| `lem-qkd-classical-key-copy-map-is-channel` | A | none | 0 |
| `lem-qkd-trace-norm-adds-over-classical-blocks` | A | none | 0 |
| `def-qkd-abort-aware-composable-security` | A | finite protocol definition | 1 |
| `lem-qkd-copy-replacement-distance-is-correctness-error` | A | key-copy channel, block trace-norm lemma | 1 |
| `lem-qkd-abort-aware-ideal-output-is-state` | A | abort-aware criterion definition | 2 |
| `thm-qkd-composable-secrecy-sum-bound` | A | criterion, copy and block-norm lemmas, correctness lemma, state well-definedness lemma | 3 |
| `ex-qkd-abort-weighted-secrecy-distance` | B | A-page theorem | 4 |
| `ex-qkd-secrecy-and-correctness-are-independent` | B | A-page theorem | 4 |

The A and B inventories contain 7 and 2 items, respectively. The B examples remain non-suppliers. Their explicit external `deps` list the quantum density, register, trace-distance, trace-norm, spectral, and channel facts they use. The QRE page remains a page prerequisite, but no QRE inequality is a logical premise of the copy/block trace-distance proof.

## Prerequisite inspection and unresolved interface

The required page `quantum-relative-entropy-data-processing-and-strong-subadditivity` exists as a draft. I read its page summary and the actual statement and complete proof of `thm-it-quantum-relative-entropy-data-processing-finite`; that theorem uses finite-dimensional positive operators, a finite Stinespring dilation, partial-trace data processing, and isometric invariance. Its convention is support-sensitive QRE with natural logarithms. The QKD proof does not use QRE data processing. The relevant trace-distance definition is the published `def-qc-trace-distance`, which defines state distance as one half of the trace norm.

The other required supplier page, `secrecy-and-information-privacy` (batch 20), is absent from `library/information-theory/` and its current batch-20 manifest has an empty item inventory. The plan-level IT12 scope lists weak/strong secrecy, equivocation/leakage, finite source privacy–utility, and the wiretap channel, but it gives no exact item IDs or authored definitions. No item supplier ID can honestly be named yet. Before readiness, the owner must reconcile the quantum trace-distance secrecy convention here with the actual batch-20 definitions, including whether its finite leakage/equivocation conventions carry any transcript, support, or abort hypotheses. Affected claims are `def-qkd-abort-aware-composable-security`, `lem-qkd-abort-aware-ideal-output-is-state`, `thm-qkd-composable-secrecy-sum-bound`, and both B examples. The full intended sum-of-errors claim is retained; dependent readiness is escalated for the missing page interface. The independent protocol, key-copy channel, block-norm, and correctness-distance items do not use batch-20 theory.

The QRE supplier page is present and inspected. Its theorem `thm-it-quantum-relative-entropy-data-processing-finite` is context only, not an invented item dependency. No source excerpt or acceptance is claimed for the missing batch-20 page.

## Source reading and retrieval

I inspected the complete full texts below and recorded supported items and dispositions in `batch-25.coverage.json` and `batch-25.source-coverage.json`.

- Portmann and Renner, *Cryptographic Security of Quantum Key Distribution*, [arXiv full PDF](https://arxiv.org/pdf/1409.3525), §§3.1–3.3 and §§4.1–4.3, including Eqs. (12)–(15), the abort-weighted error definitions, and the full proof of Theorem 4.1. This is one of two independent research-paper treatments used for the composability theorem.
- Ben-Or, Horodecki, Leung, Mayers, and Oppenheim, *The Universal Composable Security of Quantum Key Distribution*, [arXiv full PDF](https://arxiv.org/pdf/quant-ph/0409078), §2 and §§4.1–4.3. This separate author team supplies an independent ideal-real security treatment, authenticated-channel assumptions, and the abort-preserving simulator criterion. Its model allows variable key lengths and an initial authentication key; it is cited for the ideal-real interface, not as a proof of the local additive theorem.
- Renes, *Quantum Information Theory*, [complete ETH Zürich lecture notes](https://edu.itp.phys.ethz.ch/hs15/QIT/renes_lecture_notes14.pdf), §8.3, Eqs. (8.6)–(8.10), and the complete proof of Proposition 8.3.1. The source calls the adversary side-information system E; the local statements split out the public transcript T and quantum system E.
- Watrous, *The Theory of Quantum Information*, [complete author-hosted textbook PDF](https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf), Chapter 1, §1.1.3, Eq. (1.181), and Chapter 2, §§2.2.1–2.2.2. This supports the trace-norm spectral convention and finite Kraus/channel facts. Watrous sometimes calls the **unhalved** norm of a state difference “trace distance”; all local QKD errors instead use the root library's half-norm definition from `def-qc-trace-distance`.

`source-fetch-check --stamp` succeeded for 4/4 full-text sources: 58, 20, 187, and 598 pages respectively. There were no retrieval failures or source drops, so no `source_resolution` failure record was needed. The source records' `recovery_attempts`/`fetch_verified` fields contain the actual fetch stamps; they do not certify mathematical acceptance. No registered finite-smoke check applies to these exact matrix examples; their finite calculations are proved in the example bodies.

## Checks, readiness, and blockers

The final proof contracts mirror actual local proof steps and supplier excerpts; definitions have no proof contracts. Item-level levels are recomputed from the current manifest, independently of the batch-level priority level. The intended item decisions are four independent protocol/channel/trace-norm/correctness items `ready` and the abort-aware criterion, its well-definedness lemma, theorem, and two examples `escalated` because the required batch-20 page interface is unavailable. No Step 1 decision record was written: `node tools/step1-decisions.mjs record` and `check` both fail while loading the whole run because batch 78 contains `lem-3-manifold-boundary-kernel-is-lagrangian` twice on `modular-categories-verlinde-and-tqft` (indices 8 and 9). This is outside batch 25 and was left untouched; no batch-25 record was created (0/9). The run-wide record/check gate needs owner repair of that duplicate before the required records can be created.

The live run status was read from `.autopilot/non-ml-math-remaining-81-2026-10-18`: it reported no writers in flight, stage `1-scaffold` at 45/81 coverage, and a recorded blocker `plan() threw — Unexpected non-whitespace character after JSON at position 6647 (line 129 column 2)`. Its missing batch list included 20. This batch did not modify the shared plan, autopilot state, or verdicts. The inspected Git head was `9095f0ed8a` (`Preserve adoption history when delegated repairs are refreshed`); the workspace had unrelated existing edits, which were left untouched.

## Final scoped checks

- Manifest/item `deps` and `dependency_level` agree for all 9 items; recomputed levels are 0, 1, 2, 3, and 4, with no in-batch cycle.
- `proof-contract.mjs --strict`: 7/7 proof-bearing items, 0 errors, 0 warnings. Definitions have no proof contracts.
- `precheck.mts`: 7 proof-bearing items checked, 0 failures. `proof-layout.mjs`: 7 items, 20 steps, 0 defects.
- `rendercheck.mjs`: all 9 item files and both page carriers passed (11 files). `content-policy.mjs`: 9 scoped items, 0 errors, 0 warnings. Scoped `depcheck.mjs`: selected item/page checks and prerequisite-cycle checks passed.
- `source-fetch-check.mjs --stamp`: 4/4 sources were already fetch-verified; both current coverage files pass check mode with 4/4 resolved and no drops.
- Readiness recording remains blocked by the unrelated batch-78 duplicate above. The separate live-run planning blocker remains the malformed `plan-spec.json` parse reported by `.autopilot`; neither shared blocker was edited here.
