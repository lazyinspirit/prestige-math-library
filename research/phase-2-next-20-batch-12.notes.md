# Batch 12 construction handoff — phase-2-next-20

Status: **escalated**, not ready for Step 3 admission. The assigned pair has 19 A items and 3 B items. All 20 design IDs are retained; two necessary A lemmas expose the primitive-recursive coding and machine-history proof obligations. Every item was written in prerequisite order and its escalation recorded with `step1-decisions.mjs record` before advancing. No owner override or escalation overwrite was used. No published content, canonical plan, selected pair, engine state or verdict was edited. The consumer input is empty because this batch has no dependency on another selected batch; the prescribed frontier-ledger refresh was run.

## Binding scope and conflicts

Read CLAUDE.md, README.md, SCHEMA.md, WORKFLOW.md, briefs/beta-scaffold.md, the frontier dependency instructions, the generated batch manifest, planning notes and drift report. Read the entire assigned design section from research/plan-computability-theory-track.md lines 3135–3234, and its following placement/cutover context. Compared the canonical plan object with the generated batch metadata. A612.2/B612.4, category, companions and all six prerequisites agree. Canonical B title uses a colon, where prose uses an em dash: preserve canonical title. Canonical item arrays were empty placeholders, not an instruction to omit the design inventory. No substantive prerequisite conflict found. Git log includes f9857f71e (affine resolution); the on-disk autopilot status report was stale and was not used to infer permission to operate the engine. This dispatch does not operate it.

Local additions, no pair split or new page requested:

- `lem-fixed-coding-primitive-recursive-arithmetic-and-sequences` follows `def-primitive-recursive-functions-by-initial-functions-and-schemes`, before `def-kleene-computation-predicate-and-output-map`. Its explicit cons coding supplies length, coordinates, bounded arithmetic and parsing.
- `lem-fixed-machine-history-predicate-is-primitive-recursive` follows that predicate definition, before `thm-kleene-normal-form-for-the-fixed-machine-coding`. It supplies PR-ness, exact run recognition and output uniqueness, avoiding a definition that silently asserts a theorem.

## Source evidence and recovery hold

Four original sources and their URLs, locators, reading limits, dispositions and six genuine native retrieval attempts each are retained in the coverage file. The initial curl failures reported `Could not resolve host`; the subsequent `source-fetch-check --stamp --timeout-sec 5` automatically used the remaining five attempts per source, all `EAI_AGAIN`. Initial receipt timestamps explicitly record the observation time, not an invented exact request instant. The tool timestamps its own retries. Do not reset these allowances on redispatch.

Authoritative browser recovery located/read portions of Arora–Barak, Gallier's cis2620 recovery edition, and Aspnes. Patey was not independently readable. Searches also located Aspnes's arXiv version and an institutional mirror; no bytes from these were downloaded. The coverage distinguishes excerpts read from requested sections still unread. In particular: Arora–Barak Appendix 1.A's buffer argument was inspected through its displayed QED; Gallier's s-m-n composition argument was inspected through the final compiler formula; Aspnes H.2.2's exponential induction was read but refers back to the main bound whose complete reading remains pending. A source named in an item is proposed backing, not a claim of complete inspection.

Every source has `source_resolution.status: owner-escalation`. None has a fetch stamp, a confident-drop decision, or fabricated alternative-proof certification. The source/coverage checks intentionally fail these unresolved records. Native DNS failure is not evidence of permanent unavailability. Required next action is owner/operator retrieval reconciliation, followed by genuine complete reading and mathematical audit. A later worker must reuse the attempt history rather than run another six-attempt loop. The source count itself is four treatments, including a textbook; complete usable backing is not established.

The coverage lists 16 located source headings/obligations with dispositions. It is **not a complete harvest**: verifier/constructibility/class/hash sections and the original Patey treatment still need their full source-range inventories after reading. The Patey entry is explicitly a design obligation, not a falsely harvested result. The original Gallier URL is retained even though the browser recovery used another edition. Source locators across those editions must not be silently interchanged.

## Proof dependency audit: scope and limits

Direct published statements/proofs examined include the machine tuple/configuration/one-step/boundary definitions; effective encoding and tuple decoder; step-by-step interpreter; partial-function semantics; natural-number recursion/induction; finite Bernoulli independence, product expectation and Markov; field axioms; monomial/total-degree definition and domain root bound. The records enumerate the direct texts actually examined before each decision, rather than claiming every transitive item was read. The definitions' implicit computation and output conventions require the new explicit numeric coding; the definition of effective decoder alone does not assert Turing computability.

A mechanical `deps` traversal of the owned manifest found 442 nodes, including 22 new nodes and 420 existing published nodes: no missing node, no draft external node and no `proved_here:false` node. This is **not** an audit of all 420 proofs or of `justified_by` discharges/implicit uses. It does not certify Foundations prerequisites. The page prerequisite closure contains 86 plan pages. Some base published IDs have no item inventory in the canonical plan; a home lookup against plan item arrays consequently returned null, not evidence of a missing or out-of-order item. The owned content-policy check passes. No planned supplier is treated as published.

A graph route from Chernoff reached AC:
`lem-chernoff-bound-for-independent-bernoulli-trials -> def-natural-logarithm -> cor-exponential-is-a-bijection-onto-positive-reals -> thm-intermediate-value -> thm-sequential-criterion-for-continuity -> def-countable-choice -> def-axiom-of-choice`.
After this discovery, read the complete five latter texts and the AC definition. This route does **not** show a mathematical AC use: IVT fact L6 and step 6.1 use only continuity implies sequential continuity, the choice-free direction proved in step 1.2 of the sequential criterion. The converse at step 1.3 is the choice-dependent clause and is not consumed by IVT. Do not strengthen Chernoff's assumptions based only on graph reachability. Preserve its finite/choice-free route; the remaining full analytic proof closure is unaudited. If a genuinely choice-dependent argument is eventually used, state AC, cite `def-axiom-of-choice`, and identify that use. No Recorded result is used as a replacement supplier.

## Exact unresolved mathematical work

These findings remain open even if source transport is restored:

1. `thm-clocked-universal-simulation-with-time-and-space-bounds`: the full checked buffer redistribution/base-zone/reset charging proof is not completed. Finish a positive integral base-zone convention, prove reset charging even with intervening higher resets, lazy treatment of long input for small b, fixed finite alphabet/block encoding and clamped semi-infinite compilation. Keep O_M constants, binary clock input length, decoder space, b=0,1, and the last allowed transition explicit. Its separate current-configuration space strategy must not inherit the time buffer's space use. This is the principal unresolved proof, not an available supplier.
2. `lem-chernoff-bound-for-independent-bernoulli-trials`: the strategy gives optimized and simplified multiplicative tails plus additive centered-mgf tails, but the analytic prerequisites are not completely declared/audited. Candidate existing IDs are `thm-exponential-addition-formula`, `thm-derivative-of-exponential`, `thm-exponential-is-strictly-increasing`, `thm-logarithm-derivative-and-integral` and the needed differentiation/comparison/union-bound rules. The derivative and exponential-series convergence proofs were subsequently read; the other candidates and all transitive well-definedness proofs still require examination before adding them. This is not a claim those candidate interfaces already suffice. Give the elementary inequalities locally before their probabilistic consumers. Preserve mu=0, empty sum, delta=1 and mutual independence.
3. `def-rp-corp-zpp-bpp-and-pp-classes`: complete the nonnegative-series/survival-sum foundation for expected runtime over finite prefixes and declare its earlier suppliers. This avoids an undeclared infinite probability space, but the scaffold's current dependency list does not certify those analytic steps. Preserve ZPP's expected-time meaning and PP's strict majority.
4. Both F_5 B examples need the exact published construction of the prime field, or an explicit modular field verification, before their calculations are accepted; the general field parameter in the A result alone does not construct F_5. No decimal program index is fabricated for the s-m-n example.
5. Numeric coding, bounded parser construction, compiled primitive-recursion/minimization routines, acceptable-numbering composition compiler and the universal evaluator require complete detailed audit. Total computability does not imply primitive recursiveness. Keep canonical-output and invalid-output/divergence conventions, prefix-free tuple arities, and equality of domains in specialization/fixed points. The many-one numeric-to-string bridge is only on canonical inputs with canonical outputs; it is not an unrestricted numeral-image language reduction.
6. Finish the 420-node actual proof closure, including every used well-definedness discharge and implicit supplier. Items remain escalated precisely because this is incomplete; publication status was not substituted for a proof check.

No new cross-batch supplier or pair is asserted necessary on the current evidence. If these local attempts require a new pair, escalate its exact placement, A/B inventory, source and item chain instead of extending selected scope.

## Published consumer defect for canonical reconciliation

Confirmed existing ledger finding, not a new duplicate: `def-efficient-universal-simulation-with-clock`, published on `time-and-space-hierarchy-theorems`. Its current Definition fixes one U and asserts both O(n+b log(b+2)) time and O(n+S+log(b+2)) space with no supplied joint proof. Read its entire current text and the ledger UC-73 entry (around line 13342). The canonical repair is already specified: after the new theorem is genuinely proved and published, split time consumers onto U_time and space consumers onto U_space. The exact supplier `thm-clocked-universal-simulation-with-time-and-space-bounds` is now an **escalated scaffold**, absent from published items, not yet proved. Its local prerequisites are the resource definitions, raw finite machine tables/configurations and the buffer and current-configuration arguments. Arora–Barak Appendix 1.A supports the time route only. Preserve clock-constructor time/workspace terms. This published consumer is not an actual prerequisite of our theorem and does not itself block construction; the missing new proof does. The shared canonical ledger was not edited by this consumer worker.

No new defect is claimed in IVT or the sequential criterion; the apparent AC propagation was resolved by direction-sensitive reading. No exhaustive published census or independent mathematical review is claimed.

## Recorded outcomes

- `def-uniform-asymptotic-time-space-comparison`: **escalated**; record `phase-2-next-20-step1-def-uniform-asymptotic-time-space-comparison.json`.
- `def-machine-time-and-space-constructibility`: **escalated**; record `phase-2-next-20-step1-def-machine-time-and-space-constructibility.json`.
- `thm-clocked-universal-simulation-with-time-and-space-bounds`: **escalated**; record `phase-2-next-20-step1-thm-clocked-universal-simulation-with-time-and-space-bounds.json`.
- `def-primitive-recursive-functions-by-initial-functions-and-schemes`: **escalated**; record `phase-2-next-20-step1-def-primitive-recursive-functions-by-initial-functions-and-schemes.json`.
- `lem-fixed-coding-primitive-recursive-arithmetic-and-sequences`: **escalated**; record `phase-2-next-20-step1-lem-fixed-coding-primitive-recursive-arithmetic-and-sequences.json`.
- `def-kleene-computation-predicate-and-output-map`: **escalated**; record `phase-2-next-20-step1-def-kleene-computation-predicate-and-output-map.json`.
- `lem-fixed-machine-history-predicate-is-primitive-recursive`: **escalated**; record `phase-2-next-20-step1-lem-fixed-machine-history-predicate-is-primitive-recursive.json`.
- `thm-kleene-normal-form-for-the-fixed-machine-coding`: **escalated**; record `phase-2-next-20-step1-thm-kleene-normal-form-for-the-fixed-machine-coding.json`.
- `def-computable-many-one-reducibility-interface`: **escalated**; record `phase-2-next-20-step1-def-computable-many-one-reducibility-interface.json`.
- `def-oracle-turing-reducibility-interface`: **escalated**; record `phase-2-next-20-step1-def-oracle-turing-reducibility-interface.json`.
- `def-acceptable-numbering-with-universal-evaluation`: **escalated**; record `phase-2-next-20-step1-def-acceptable-numbering-with-universal-evaluation.json`.
- `thm-smn-for-the-fixed-acceptable-numbering`: **escalated**; record `phase-2-next-20-step1-thm-smn-for-the-fixed-acceptable-numbering.json`.
- `thm-kleene-fixed-point-theorem-for-program-indices`: **escalated**; record `phase-2-next-20-step1-thm-kleene-fixed-point-theorem-for-program-indices.json`.
- `def-polynomial-time-verifier-and-reduction-interface`: **escalated**; record `phase-2-next-20-step1-def-polynomial-time-verifier-and-reduction-interface.json`.
- `def-probabilistic-polynomial-time-machine-interface`: **escalated**; record `phase-2-next-20-step1-def-probabilistic-polynomial-time-machine-interface.json`.
- `def-rp-corp-zpp-bpp-and-pp-classes`: **escalated**; record `phase-2-next-20-step1-def-rp-corp-zpp-bpp-and-pp-classes.json`.
- `def-pairwise-independent-hash-family-interface`: **escalated**; record `phase-2-next-20-step1-def-pairwise-independent-hash-family-interface.json`.
- `lem-chernoff-bound-for-independent-bernoulli-trials`: **escalated**; record `phase-2-next-20-step1-lem-chernoff-bound-for-independent-bernoulli-trials.json`.
- `thm-schwartz-zippel-over-finite-fields`: **escalated**; record `phase-2-next-20-step1-thm-schwartz-zippel-over-finite-fields.json`.
- `ex-smn-specializes-a-two-argument-index`: **escalated**; record `phase-2-next-20-step1-ex-smn-specializes-a-two-argument-index.json`.
- `ex-pairwise-independent-affine-hashing-over-a-prime-field`: **escalated**; record `phase-2-next-20-step1-ex-pairwise-independent-affine-hashing-over-a-prime-field.json`.
- `ex-schwartz-zippel-for-a-bivariate-polynomial`: **escalated**; record `phase-2-next-20-step1-ex-schwartz-zippel-for-a-bivariate-polynomial.json`.

## Checks actually run

Checks are observations during concurrent construction, not a frozen whole-run gate. Counts differed as other workers wrote their own manifests. No shared file was repaired to clear these results.

| Check | Exit | Actual result |
|---|---:|---|
| coverage-checklist --require-destination, batch 12 | 1 | 1 page, 16 source rows, 27 errors, 0 warnings; owner-escalated sources and absence of certified alternatives remain explicit. |
| manifest-deps, all run manifests | 0 | 401 items, explicit deps arrays, no errors (earlier observation: 397). |
| content-policy --manifest-only, all run manifests | 1 | 402 items, 22 errors, 0 warnings; missing supplier IDs in batches 5 and 10, none in batch 12. |
| content-policy --manifest-only, batch 12 | 0 | 22 items, 0 errors, 0 warnings. |
| validate-plan research/plan-spec.json | 0 | Acyclic/consistent declared page order; 978 pages with item lists and 641 empty planned inventories. Does not splice or mathematically certify the new scaffold. |
| extcheck --quiet | 0 | No hard errors; 55 existing unproved-on-published warnings. This checks disk content, not all new scaffold strategies. |
| source-fetch-check --stamp | 1 | 0/4 verified; remaining native attempts exhausted with EAI_AGAIN. |
| source-fetch-check, final check mode | 1 | 0/4 resolved; four owner-escalation records intentionally held. |
| frontier-dependency-ledger refresh | 0 | Derived ledger refreshed from consumer inputs; batch 12 input is []. |

The whole-run policy findings include `thm-plancherel`, `thm-fourier-inversion-on-schwartz-space`, `def-schwartz-space-and-its-seminorms`, `def-fourier-transform-on-l-one-of-rn` in batch 5; and Weyl/root/weight/highest-weight supplier identities in batch 10. Their owners must reconcile them; this dispatch has no edit authority there.

Next action: owner/operator reconciles source retrieval and the held items; then complete source harvesting and the named local proofs/dependency audits. Do not re-record these escalations as ready without authorized owner resolution. Step 3 supplies independent mathematical review after the construction gate; this worker exit is not that review.
