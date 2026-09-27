# Fatal-defect review of the 1,017 selected published items

## Scope and evidence

Ten disjoint GPT-6 Sol (high) shards reviewed the frozen 1,017-item candidate
list in assignment order. The candidate rule and its limits are in
`../high-risk-phase2-summary.json` and
`../../pre-phase-2-prerequisite-screening-plan.md`. Each assigned item has one
item-specific JSONL receipt in `agent-01-receipts.jsonl` through
`agent-10-receipts.jsonl`; each shard also has an `agent-NN-report.md`.
The reviewers checked Statements/Definitions, proof inferences, declared and
implicit supplier contracts, and citation adequacy. They consulted exact
published suppliers and authoritative external sources where needed. This is a
bounded fatal-defect review of the selected items, not independent certification
of every proof or a census audit of all historically published items.

All **1,017/1,017** receipts validate, with 590 bounded-clear, 330 already-U-P,
68 already-A-P, 23 locally repaired and six `propose_up` dispositions. A receipt's
`clear` disposition says its bounded mathematical use read correctly; the
canonical index may still put a different item in a precautionary impact queue.
Thirty-three assigned item files were edited. Eleven assigned items had an
actual Statement/Definition change and six have an expected interface change.
The Riesz–Thorin item was also moved from the maximal-function page to the
complex-interpolation page after its exact finite-simple-core supplier.

The current canonical `research/published-consumer-supplier-ledger.md` has
**U-P 1,630; U-C 0; A-R 213; A-P 325**. Within the 1,017 selected items,
334 are U-P, 67 A-P, 53 A-R and 563 outside the four active defect queues.
U-P includes precautionary downstream classifications and is not a tally of
confirmed false theorems.

## Statement/Definition impact

The 18 `*impact.json` files record the published dependency/body-reference
closure, depth, route and source hash for each actual or expected change with
an identified interface. The owner-directed rule places **all published
downstream references** in U-P after an actual or expected original-interface
change, even where a bounded use appears unaffected. Key actual changes:

| Origin | Change | Published reference closure |
|---|---|---:|
| CW compactness lemma | Adds AC | 153 |
| Symmetric Lovász local lemma | Finite event family | 2 |
| Universal Turing machine pair code | Removes false self-delimiting claim | 14 |
| Normal Moore-space remark | Qualifies independence relative to strong-compact-cardinal consistency | 4 |
| Shapiro homology and cohomology | Add AC for coset transversals | 2 shared consumers each |
| Riesz–Thorin interpolation | Adds countable choice and precise complex-Lp/core domain | 0 |
| Jacobi theta transformation | Adds countable choice and exact Fourier/Poisson suppliers | 74 |
| Free-presentation five-term homology lemma | Adds DC and supplied-resolution premises | 17 |
| Great Picard theorem | Adds AC from omitted-values supplier | 3 |
| Logspace many-one reduction | Bounds random-access output and defines its end marker | 6, already U-P |

The expected-interface files cover the homology UCT supplier and its splitting
corollary, density integration, vector fields, Doob–Dynkin, a false
birational-dimension clause, and a Künneth example. The first UCT closure has
ten published items, density has twenty and vector fields twenty-eight.
Doob–Dynkin, the birational-dimension correction and the Künneth example have
zero published item-reference consumers under the recorded search method.

## Open mathematical obligations

The six `propose_up` receipts identify the primitive Dirichlet L-function
analytic-continuation proof, complex-Lp norming example, current status of the
aleph-one Dowker-space remark, homology UCT splitting argument, recursive-Dehn
word-problem proof and finite-CW-pair simplicial-model lemma. Exact witnesses,
scope and source limits are in their receipts and shard reports. Additional
existing U-P/A-P rows were sharpened for circular Morse stability and
hyperbolic-group free-subgroup citations, unsupported hyperbolic-surface/H²
inputs, arbitrary simplicial compact support, the Weyl highest-weight
expansion and Doob–Dynkin's Borel-lift/rational-cut steps. No source search
match alone was treated as a defect.

## Checks and publication state

`validate-review.py` passes: 1,017 unique ordered receipts, changed-file and
Statement flags, current index classes, all impact rows U-P, current impact
hashes and ledger counts. Focused precheck passes on all 29 modified
proof-bearing items. Rendercheck passes on all 35 changed item/page files;
`git diff --check` passes. The global depcheck still reports 33 errors:
32 `published-unaudited` and one `published-unchecked`. These arise because
post-edit independent audit/source-check stamps were deliberately removed from
changed published content; no new certification was invented. The local repair
and classification work is reviewable, but the repository-wide publication
gate needs its independent certification step before it can pass.
