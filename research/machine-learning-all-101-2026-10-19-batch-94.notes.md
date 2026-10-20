# Batch 94 authoring notes

Run machine-learning-all-101-2026-10-19; pair exact-tiled-attention-and-memory-aware-differentiation.

## Plan reconciliation and scope

The current ML-86 design in research/plan-machine-learning-track.md lines 574–580 and the matching A/B entries in research/plan-spec.json agree on page IDs, page requirements, the five A-page items, the exact nonempty-row online-summary recurrence, the scalar workspace/work claim, the backward recomputation convention, and the four promised examples. There is no substantive design conflict. The plan's warning is retained: Dao et al.'s SRAM/HBM result and endpoint input-size lower bound belong to its stated device-memory model and schedule; this pair makes no such theorem claim.

The generated batch-94.pages.json initially had empty item inventories. Before creating the carriers, the controlling ML-86 design supplied the five A-item IDs, the four example obligations, and the direct prerequisite interfaces; the current batch manifest now records their exact dependencies and levels. The manifest itself was populated after carrier creation, so the owner should retain that procedural fact when reconciling the authoring evidence. Current carriers, actual pages, and manifest now agree, and each item level is recomputed from its current in-run item suppliers.

The A page has five items and the B page has four examples, both below the 100-item limit. Both page files are YAML frontmatter only, with empty Markdown bodies and no authored page_layout flag. No TikZ diagram was needed: the finite block recurrence and its vectors are specified directly by formulas and loops, and the proof does not rely on a picture.

## Inventory, direct dependencies, and item levels

| Item | Role and exact claim | Direct deps | Level |
|---|---|---|---:|
| def-attention-block-summary | Empty sentinel and stable (m,ell,z) summary for a finite nonempty key subset, with its rescaled merge | def-scaled-dot-product-attention | 1 |
| alg-exact-tiled-softmax-attention | One-query finite key-block forward pass and recomputed VJP, with fixed mask and max shifts frozen in the reverse rule | def-attention-block-summary; def-scaled-dot-product-attention; thm-shared-parameter-backpropagation-gradient-formula | 2 |
| thm-tiled-attention-exactness | Exact dense masked row output and exact Q,K,V VJP for every finite nonempty row, including score ties | alg-exact-tiled-softmax-attention; def-attention-block-summary; def-scaled-dot-product-attention; def-finite-straight-line-computational-program; thm-chain-rule-for-total-derivatives; thm-reverse-mode-computes-gradient; alg-backpropagation-through-shared-parameter-recurrence; thm-shared-parameter-backpropagation-gradient-formula | 3 |
| thm-tiled-attention-workspace-and-work | O(n²(d+v)) scalar work and O(n(d+v))+O(b+v) retained/workspace storage for the specified forward and reverse loops, excluding caller-owned mask representation | alg-exact-tiled-softmax-attention; def-attention-block-summary; thm-tiled-attention-exactness | 4 |
| rem-attention-io-model-and-roundoff | Separates the proved scalar model from the paper's hardware I/O theorem and rounded execution | alg-exact-tiled-softmax-attention; thm-tiled-attention-workspace-and-work | 5 |
| ex-tiled-attention-one-key | n=d=v=b=1: output 7 and VJP (0,0,4) for the stated inputs | alg-exact-tiled-softmax-attention; thm-tiled-attention-exactness | 4 |
| ex-tiled-attention-empty-first-masked-block | Empty first allowed block is skipped; outputs are 5 and 4 on the stated two rows | alg-exact-tiled-softmax-attention; thm-tiled-attention-exactness | 4 |
| ex-tiled-attention-two-merge-orders | Two singleton summaries merge in either order to (ln 2,3/2,3) and output 2 | def-attention-block-summary; thm-tiled-attention-exactness | 4 |
| ex-tiled-attention-replay-dropout-mask | In the optional inverted-dropout extension, a different replay mask changes the value gradient | alg-exact-tiled-softmax-attention | 3 |

The batch input records level 2 and batch dependencies 36 and 38. The item levels above use the current in-run suppliers' levels: def-scaled-dot-product-attention and alg-backpropagation-through-shared-parameter-recurrence are level 0, and thm-shared-parameter-backpropagation-gradient-formula is level 1. Published prerequisite items are context, not current-run item levels. The exact manifest mirror is in research/machine-learning-all-101-2026-10-19-batch-94.pages.json.

## Supplier and hypothesis audit

- items/def-scaled-dot-product-attention.md is the actual batch-36 supplier. Its Definition specifies finite real Q,K,V, row softmax of scaled scores, mask entries 0 and −∞, and the nonempty-allowed-row condition. The local interface generalizes its scale to a fixed real c as ML-86 requires. Its current saved Step-1 record is ready, and it is absent from the current full-run readiness work list.
- items/alg-backpropagation-through-shared-parameter-recurrence.md and items/thm-shared-parameter-backpropagation-gradient-formula.md are the actual batch-38 suppliers. Their open-domain finite C1 hypotheses, repeated shared-parameter input, total derivatives, and additive reverse pullbacks were checked against their full current Definitions and theorem proof. The current full-run readiness snapshot closes both saved ready records.
- The published computational-graph context was checked in library/numerical-optimization-inverse-problems-and-uncertainty-quantification/automatic-differentiation-and-computational-graphs.md and its actual items: def-finite-straight-line-computational-program, alg-reverse-mode-automatic-differentiation, thm-reverse-mode-computes-gradient, and thm-checkpointed-reverse-schedules-preserve-adjoints-and-cost-bounds. The local algorithm does not invoke a generic checkpoint schedule; its backward pass directly recomputes probabilities and proves the VJP.
- The exact dense attention map is smooth on all finite real inputs: each fixed nonempty row has a finite sum of positive exponentials. The tiled forward code's maximum is a numerical scaling statistic, not part of the differentiated dense graph. The reverse pass uses the normalized probabilities with those shifts held fixed; the probability formula is independent of the fixed shift, so the VJP remains valid at ties.
- The mask is fixed and not differentiated. The workspace theorem excludes storage for a caller-owned mask representation; if a caller stores a dense mask, its O(n²) representation is separately charged as input storage. The proof counts only the algorithm's arrays and additional live workspace.
- All arguments use finite sums over explicit index sets and ordinary real arithmetic. No choice axiom or other set-theoretic axiom is used.
- No original supplier Statement or Definition was changed; the downstream impact is not applicable.

The direct page/item use audit is research/machine-learning-all-101-2026-10-19-batch-94.cross-batch-dependencies.json; supplier paths, saved records, current levels, and readiness evidence are in research/machine-learning-all-101-2026-10-19-batch-94.dependency-inputs.json.

## Sources and dispositions

Three independent full-text sources were inspected for the A page, including the complete MIT lecture-note PDF:

1. Dao, Fu, Ermon, Rudra, and Ré, [FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness](https://arxiv.org/pdf/2205.14135), §2.2 and §3.1, Appendix B.2–B.4, and the complete Appendix C proof of Theorem 1. The block summary, exactness, and recomputed gradient formulas are included locally. The paper's HBM-access theorem and endpoint input-size argument are explicitly out of scope.
2. Milakov and Gimelshein, [Online normalizer calculation for softmax](https://arxiv.org/pdf/1805.02867), §2, §3 Algorithm 3, the complete induction proof of Theorem 1, and §3.1. The max/normalizer recurrence is included; the paper's parallel merge associativity assertion has no proof there and is not imported.
3. MIT OCW 18.S096, [Matrix Calculus for Machine Learning and Beyond, complete lecture notes](https://ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/mit18_s096iap23_lec_full.pdf), Chapter 8 §§8.3–8.3.1. Reverse path products and accumulation over shared uses are included in the local chain-rule argument.

The exact locators, harvested headings, every included/out-of-scope disposition, searches, and full-text fetch hashes are in the batch coverage/source-evidence files. source-fetch-check --stamp fetched and verified 3/3 full documents; it added zero recovery retries and recorded zero drops or retrieval failures. No source_resolution failure record was needed.

## Proof contracts and checks

- The proof contracts cover all nine items. The exactness proof has seven mapped phase steps; the workspace proof has four; each of the four examples has two. Supplier quotations are checked against exact source sections.
- Precheck on all nine items: 9 files, 6 proof-bearing, 0 failures.
- Strict proof-contract check: 9/9, 0 errors, 0 warnings.
- Citation fidelity: 19 citations, 0 missing quotations, 0 widening candidates.
- Rendercheck on nine items and two pages: pass; no malformed YAML, invalid math, or multiline display formulas.
- Content policy on the batch manifest: 9 items, 0 errors, 0 warnings.
- Coverage checklist: 1 A page, 11 harvested results, 0 errors, 0 warnings.
- Source-fetch check mode: 3/3 full texts verified.
- Proof-layout and dependency-level checks are recorded after the final edits below. No finite-smoke registry entry is available for this attention fixture; the four finite example verifications are proved directly rather than assigned an invented check name.

## Final validation, readiness, and owner-held inputs

### Scoped checks

- `node tools/proof-layout.mjs` on the nine explicit item paths: 9 items, 19 proof steps, 0 defects.
- `precheck.mts` on the nine items: 6 proof-bearing items checked, 0 failing.
- Strict proof-contract check: 9/9 items, 0 errors, 0 warnings. Citation fidelity: 19 citations, no missing quotations and no widening candidates.
- `rendercheck` on the nine items and both pages: 11 files passed.
- Post-authoring `content-policy` on the batch manifest: 9 items, 0 errors, 0 warnings. The manifest-only mint check is a pre-authoring mode; after the carriers existed it correctly reported those existing files, so it is not the post-authoring result.
- Focused `depcheck`: 9 authored items; prerequisite closure covered 352 items and 211 pages; 0 errors and 0 warnings.
- Coverage checklist: 1 page, 11 harvested results, 0 errors, 0 warnings. The recorded source fetch stamps still verify all 3 full texts.
- Recomputed levels over the actual batch 36, 38, and 94 manifests: 35 items, 0 errors. The nine batch-94 levels in the inventory table above match the run suppliers' levels.

The full-run item-level command still exits 1 because 34 unrelated scaffold pages have empty inventories; it reported no batch-94 item-level errors. The batch-level command exits 1 with `Stale batch dependency levels for machine-learning-all-101-2026-10-19; recompute before authoring`. The dispatch input hash is `f96f1199b172f526c5313a8f8d289929560d8e348d8081d118d3e0010793b785`; the current shared artifact input hash is `f67de7c77457c5c85f03476ca95886c82544413f7329861e3f62aedb9724d436`. The artifact still lists batch 94 at level 2 requiring 36 and 38. Recomputing or editing this shared owner/engine artifact is outside this pair's write boundary.

### Step-1 records

All nine items were recorded `ready` with the ordinary `node tools/step1-decisions.mjs record` command, without `--owner`. The current focused full-run check reports 1,107 items, 945 ready, `closed: false`, and no open work row for the nine batch-94 items or the three in-run suppliers. The run remains globally open. Record paths are `research/machine-learning-all-101-2026-10-19-step1-<item-id>.json`; current record hashes are:

| Item | Record SHA-256 |
|---|---|
| `def-attention-block-summary` | `d70b9930d932e815124299ef4ed8d2600e1bdc59234cc3188823ef2daade940c` |
| `alg-exact-tiled-softmax-attention` | `20be9cb137a4da7a37b856ea024c13af3e92f6d95019561b6722cf71765e0c76` |
| `thm-tiled-attention-exactness` | `b4c9631e52483fe366a57004caac47492fb234d17cdb89481b6baa172a2139f1` |
| `thm-tiled-attention-workspace-and-work` | `534148243e4157c56be1d7b983111805440448e78c4432009bf763abb06c75d9` |
| `rem-attention-io-model-and-roundoff` | `229d510c8749edef5729e4ab9fb2912876f143084f05fa8fa4c476dffe7b5578` |
| `ex-tiled-attention-one-key` | `54f0ef0814a05f790def7aaed864892ba175a91434aae108eb56a588392a8bcd` |
| `ex-tiled-attention-empty-first-masked-block` | `9cc019990e417a24e4f461f4b2aca751c221dd62f7a78b4394ef93d49b446f4c` |
| `ex-tiled-attention-two-merge-orders` | `d46008f8e5c0023e8332144a3ea5821865aeda140df8f8242869c1a5f57f5398` |
| `ex-tiled-attention-replay-dropout-mask` | `e4d9a32a9f060a06fabc96f6563fe760cb03bf55077e7f115f5ae3a6b13f8716` |

One record has a clipped reason string: `ex-tiled-attention-empty-first-masked-block` currently ends with `The theorems`. Its proof, dependencies, contract, hash, and decision are intact, but the evidence prose is incomplete. The recorder refuses to replace an unchanged closed ready record without owner override, and this dispatch forbids `--owner`; I left the record untouched. Proposed corrected reason for owner reconciliation: “Complete finite masked-block calculation skips the empty first block and verifies each stated row output. It uses the algorithm's empty sentinel, the theorem's nonempty-row hypothesis, and exact row normalization.”

The dependency-input sidecar now records the nine readiness decisions and current full-run snapshot. The cross-batch dependency audit remains verified against the actual supplier bodies and proofs. The earlier temporary parse failure in batch 101 cleared while its owner was updating that manifest; the ordinary readiness check now loads the run successfully.

### Run state

The final `.autopilot/machine-learning-all-101-2026-10-19` status remains `running` at `1-scaffold`, 71/101 pairs covered, with no in-flight dispatches. The existing owner repair/recertification hold remains in `research/machine-learning-all-101-2026-10-19-step1-blockers.json`. The current HEAD remains `50139bdcb6` (`Defer compact construction artifact scans until author drain`). No shared plan, engine state, verdict, or published content was edited.
