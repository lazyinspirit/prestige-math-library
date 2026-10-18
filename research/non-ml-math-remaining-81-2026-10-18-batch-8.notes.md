# Batch 8 authoring notes — Prefix Codes and Finite Lossless Coding

## Scope and controlling plan

This batch owns the prefix-codes-and-finite-lossless-coding A/B pair only. No separate pair-specific design section or item-design document was found. The canonical plan-spec.json IT03 row points to the prose in research/plan-information-theory-track.md; that track section controls the scope. The generated task's “design none found” means no separate design governed this pair, not that the track plan is absent.

The controlling IT03 scope is preserved: finite source and block conventions; code, prefix-free and uniquely-decodable extensions; the exact binary Kraft supplier; McMillan; Shannon and Huffman length results; deterministic finite tie-breaking and termination; and the distinction between ideal-real interval coding and an exact finite-register procedure. The track plan's arithmetic-coding warning is respected: the finite coder here is a fixed-length rational block coder with a public maximum block size, exact integer endpoints, known model/frame count, and registers sized from the finite configuration. No guarantee is borrowed from an ideal-real or renormalized streaming procedure.

The page-level requirements from the controlling plan and task remain on the A page: finite-alphabet-entropy-and-divergence and kolmogorov-complexity-and-algorithmic-randomness. The B page requires the A page. No plan scope was dropped to fit the page.

## Inventory and dependency levels

The A page has 18 items and the B page has 3 examples, below the 100-item cap. The item rows in batch-8.pages.json are regenerated from the current carrier frontmatter and Definition/Statement/Example sections. The batch scheduling input SHA-256 is 7096b1bbc6f2d70796b6d63080bb4b0fc6e781f6a5e4da539963fbb746842903; batch 8 is dependency level 1 with prerequisite batch 4.

The levels below use the full run graph. Published and out-of-run suppliers do not raise an item level; the draft batch-4 item def-it-information-units-and-logarithm-base is an in-run supplier at level 0.

| Level | Items and direct in-run dependencies |
|---:|---|
| 0 | def-finite-discrete-source-and-blocks; lem-finite-gibbs-inequality |
| 1 | def-base-two-entropy-of-a-finite-source ← source definition, def-it-information-units-and-logarithm-base; def-binary-source-code-and-extension ← source definition |
| 2 | def-binary-prefix-code ← code definition; thm-mcmillan-inequality-for-finite-binary-codes ← code definition; def-ideal-real-arithmetic-interval-code ← source and code definitions |
| 3 | lem-prefix-codes-are-uniquely-decodable ← code and prefix definitions; thm-binary-kraft-criterion-for-finite-lengths ← code and prefix definitions; alg-binary-huffman-coding ← source, code and prefix definitions; thm-ideal-real-arithmetic-interval-code-is-prefix-and-lossless ← source, code, prefix and ideal-interval definitions; alg-finite-register-rational-arithmetic-coder ← source, code, prefix and ideal-interval definitions; ex-uniquely-decodable-code-not-prefix ← code, prefix and McMillan |
| 4 | thm-shannon-bounds-for-finite-binary-codes ← source, base-two entropy, code, binary Kraft criterion, McMillan and Gibbs; thm-huffman-coding-is-prefix-optimal ← source, code, prefix, binary Kraft criterion and Huffman algorithm; cor-ideal-real-arithmetic-code-average-length ← source, base-two entropy and ideal interval theorem; thm-finite-register-rational-arithmetic-coder-is-prefix-and-lossless ← source, code, prefix, ideal interval definition and finite coder algorithm |
| 5 | cor-huffman-code-lengths-are-within-one-bit-of-entropy ← source, base-two entropy, Huffman algorithm/theorem, Shannon theorem and prefix-decodability lemma; cor-finite-register-arithmetic-coder-average-length ← source, base-two entropy and finite coder theorem; ex-finite-register-arithmetic-coder-block-ab ← source, finite coder algorithm and finite coder theorem |
| 6 | ex-huffman-dyadic-source-and-code-tree ← source, base-two entropy, code, prefix, Huffman algorithm/theorem and Huffman entropy corollary |

The direct external item dependencies and their transitive closures, along with both page-level prerequisites, are recorded in batch-8.cross-batch-dependencies.json. There are no cycles in this pair. The scoped level computation over all 21 items found no label mismatches.

One sequencing deviation is recorded: the starting generated batch-8 manifest had empty item inventories. The inventory and graph were reasoned through while scaffolding, but the materialized item rows were added after the first carriers had been drafted. The final item levels were recomputed against the actual full run graph and are consistent; this does not undo the required pre-carrier inventory sequencing.

## Supplier-body checks and unresolved page route

The published def-qa-35-finite-probability-entropy-and-stochastic-matrices Definition and its finite-probability supplier were inspected. The used interface is a finite probability vector with nonnegative entries summing to one, entropy in nats with 0 ln 0 = 0, and directed D(p||q) with +infinity when p has positive mass outside the support of q. The local source convention is full support; the Gibbs proof separately states the positive-reference hypothesis. The base-two entropy definition now directly cites the current batch-4 def-it-information-units-and-logarithm-base, whose draft body and direct logarithm dependencies were read; it states natural logarithms/nats by default, log_b(t)=ln(t)/ln(b) for b>1, ln(b)>0, and the zero/support conventions. No batch-4 acceptance is claimed.

The batch-4 A-page manifest and library page appeared during this authoring turn, after the initial scaffold check. The actual bodies of def-it-information-units-and-logarithm-base, lem-it-finite-log-sum-inequality, thm-it-finite-kl-nonnegative-equality, and thm-it-information-unit-conversion were inspected. The log-sum and finite-KL proofs state the finite support cases and equality conditions; the unit-conversion theorem explicitly handles +infinity. Their current carriers are drafts. The batch-4 coverage and proof-contract files exist, but no Step-1 readiness records were found for the relevant batch-4 suppliers, and this note does not claim that batch's proof/coverage gates or owner acceptance.

The actual finite-alphabet-entropy-and-divergence library A page currently omits the requires route to probability-spaces-random-variables-and-expectation, although the batch-4 manifest declares it. The mathematical interface is therefore visible, but its required page route is not currently consistent on disk. The unresolved supplier is exactly finite-alphabet-entropy-and-divergence; the exact route discrepancy, provisional item interfaces, required hypotheses and affected batch-8 item IDs are in the cross-batch dependency input. All 21 items are escalated for this page-level readiness hold, including B items through the B-to-A route. Entropy-specific claims additionally affected are the base-two entropy definition, Shannon theorem, entropy-average corollaries, and dyadic Huffman example. The local Gibbs, Shannon, arithmetic, and Huffman arguments remain fully stated and proved; no missing supplier excerpt or acceptance was invented.

The other page prerequisite is published. The actual KCS page and complete thm-kraft-inequality statement/proof were inspected. Its used claims are precisely the binary prefix-free Kraft inequality and the effective converse for a computably enumerable request list of positive lengths with total Kraft sum at most one. The finite positive list in the local Kraft criterion satisfies those hypotheses. The theorem's transitive dependency closure is listed in the cross-batch file; the relevant prefix-machine, description-machine, computation-alphabet and computability interfaces were read. No Choice axiom is used by the finite specialization.

## Source reading and dispositions

The coverage file records three selected full-text sources, exact locators, fetch stamps, and a disposition for each harvested result (16 results total):

- Stanford EE376A, Information Theory Course Notes, Chapter 4, §§4.1–4.6 (75-page PDF): the finite source/code definitions, Shannon lengths and entropy bound, complete McMillan counting proof, Huffman construction, and sibling/contraction induction were read. These results are included on the A page.
- MIT OpenCourseWare 6.450 Lecture 3 (25-slide PDF): the finite DMS model and entropy bounds were read; the Huffman slides provide the exchange/contraction route but leave proof work to the reader, so the full local proof is inline. The slide's McMillan proof outline is marked out of scope as a proof source because the local carrier gives its own complete counting proof.
- Scott Roweis, CSC310 Lecture 8x (5-page PDF): the ideal-real interval refinement/termination sections and the finite-register integer section were read. Its renormalized streaming coder is marked out of scope for the authored fixed-frame rational coder; no guarantee is transferred between them.

source-fetch-check in check mode verifies all 3 selected URLs. A Witten–Neal–Cleary paper candidate had an earlier web-reader error, then one source-fetch-check recovery fetched its 9-page PDF at 2026-10-17T15:46:17.624Z; no passages were read or cited, and it remains unselected. Earlier candidate searches also had a MacKay official-PDF timeout and an NUS-link cache miss. Their exact URLs, timestamps and retry counts are not in the retained evidence, so they are recorded as candidate-only history here rather than invented as harvested sources. The selected Stanford, MIT and Roweis texts plus the complete local arguments cover every in-scope claim; no selected source remains failed or is marked dropped, so no source-drop record is claimed.

## Mathematical checks and evidence

- The McMillan proof expands the Kraft sum to the k-th power, counts injective concatenations by total length, and supplies the limiting estimate ln(k)/k -> 0.
- Shannon's lower bound uses the finite Gibbs lemma and the exact natural-unit KL formula; the upper construction uses ceiling self-information lengths and the finite binary Kraft criterion.
- Huffman is deterministic by (weight, serial) ordering. The proof establishes finite optimal-code existence, full-tree sibling exchange, contraction, a size-two induction base, and the induction step for every tie choice. The one-symbol case returns 0 as a one-bit word.
- The ideal-real and finite-register interval theorems separately prove cell containment, prefix-freeness and losslessness. The finite theorem bounds the exact integer registers and the fixed frame's bit count; it makes no constant-word-width streaming claim.
- The custom exact BigInt check for q=(3,2,1), Q=6, N=n=2 enumerated all nine blocks and confirmed distinct prefix-free outputs by exact interval/cell comparisons. It is documented as a custom finite check, not a registered finite-smoke test. For AB, D=36, the exact interval is [9/36,15/36)=[1/4,5/12), u=2, s=4, k=5, output 0101, and cell [5/16,3/8).
- The diagrams state their coordinates, labels and interval conventions in the B-page prose; the proofs use the exact word paths and rational inequalities, not the drawings.

batch-8.proof-contracts.json covers all 21 items, with exact supplier excerpts, actual derivation steps, boundary cases and the finite-check record. Strict contract checking reports 0 errors and 1 nonfatal shotgun-bracket warning for the Huffman proof: its sibling-exchange step uses four of seven declared facts while two induction/conclusion steps use only prior steps. Each fact is cited at a step that uses it; the warning is a heuristic, not a missing proof input.

## Scoped checks and handoff blockers

- author-check.mts RUN 8: passed; the receipt records precheck, rendercheck, content policy and strict proof-contract checks.
- precheck.mts: 14 proof-bearing items checked, 0 failures.
- proof-layout.mjs on the 21 assigned carriers: 46 steps, 0 defects.
- content-policy.mjs: 21 scoped items, 0 errors and 0 warnings.
- coverage-checklist.mjs: 1 A page, 16 harvested results, 0 errors and 0 warnings.
- source-fetch-check.mjs in check mode: 3/3 selected sources fetch-verified.
- The full-run item graph has 513 items and 115 structural errors elsewhere (empty future scaffold inventories, duplicate items and stale labels); none of the batch-8 labels mismatch. The scoped/full-graph calculation gives all 21 batch-8 items their declared levels.
- batch-dependency-levels.mjs check --run ... and autopilot status report the existing run blocker Duplicate item lem-it-quantum-relative-entropy-support-regularization; the run remains at 1-scaffold, with nothing in flight. No shared dependency artifact or engine state was edited.
- step1-decisions.mjs record was attempted for the first assigned item and failed before writing because loadStep3 hits that same run-wide duplicate. No --owner flag was used and no readiness record was fabricated or overwritten. The page-level supplier hold above calls for escalation of all 21 items, but the required per-item JSON records remain blocked until the owner resolves the duplicate. Completion records would not constitute independent approval.

No tests were added or run.
