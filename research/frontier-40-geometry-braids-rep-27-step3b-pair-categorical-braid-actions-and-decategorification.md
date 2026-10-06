# Step 3b report — A/B pair `categorical-braid-actions-and-decategorification`

- Run: `frontier-40-geometry-braids-rep-27`
- Role: alpha-high; pair dispatch `step3b-pair-categorical-braid-actions-and-decategorification-c88da534429edc68`
- A page: `categorical-braid-actions-and-decategorification` (order 757, 30 items, `braid-groups`)
- B page: `categorical-braid-actions-and-decategorification-examples` (order 758, 4 items)
- Batches: 8 (both pages live in `batch-8`; 34 items)
- Output artifacts: this report; `research/frontier-40-geometry-braids-rep-27-batch-8.pages.json`;
  `research/frontier-40-geometry-braids-rep-27-batch-8.proof-contracts.json`;
  `research/frontier-40-geometry-braids-rep-27-batch-8.coverage.json`;
  `research/frontier-40-geometry-braids-rep-27-batch-8.cross-batch-dependencies.json`;
  `library/braid-groups/categorical-braid-actions-and-decategorification.md`;
  `library/braid-groups/categorical-braid-actions-and-decategorification-examples.md`;
  and the 34 item files.

## Entry checkpoint (attempt 2)

The pair's attempt-1 authoring lane wrote all 34 items, both pages, the manifest,
coverage, cross-batch input and 34 Step-3 item receipts, and repaired several
sources and dependencies; its session then ended without a terminal response.
The engine rejected the attempt for one artifact: it looked for
`research/frontier-40-geometry-braids-rep-27-batch-8.proof-contracts.json` while
the author had written the same 34-item contract as the sibling
`batch-8.contracts.json` (run record, 2026-10-04T15:23:04Z). This attempt (a)
reconciled the canonical artifact path, (b) re-audited the pair on current
inputs, (c) repaired the local defects found, (d) re-recorded every invalidated
item decision, and (e) wrote this report.

Open obligations inherited at entry: the two escalated items
`lem-a-nontrivial-five-strand-braid-lies-in-the-burau-kernel` and
`cex-equal-actions-on-k-zero-do-not-imply-isomorphic-derived-autoequivalences`
(escalated at 15:07 because the in-run supplier pair `the-burau-representations`
was unfinished), the missing canonical proof-contracts file, and this report.

## Final checkpoint — all owned items and pages authored

All 30 A-page items + 4 B-page items and both library pages exist and are
authored. Every item was re-read on disk in dependency order in this session
(lower `dependency_level` first, ties by page order and item ID); the levels in
the item frontmatter and in the manifest agree and recompute without error.
The four level-0 items' suppliers were read first (`def-curves-…`'s suppliers
and the `A_m` interface items), then the topological layer, the bigraded layer,
the algebraic layer, the action, the decategorification comparison and the two
consumer items.

**In-run supplier reconciliation (was the entry-blocking escalation).** The
direct prerequisite pair `the-burau-representations` (batch 5, order 745) is now
authored. Its consumed items were read against the exact consuming steps:

- `def-unreduced-burau-matrices` — relative lifted-edge basis `e_1..e_n`, block
  `[[1-t,t],[1,0]]` at rows/columns `i,i+1`, column vectors, rightmost letter
  first. Consumed by `prop-…-decategorification-…` ([L4], step 2.2),
  `ex-decategorifying-a-khovanov-seidel-generator` (step 1.1),
  `lem-a-nontrivial-five-strand-braid-lies-in-the-burau-kernel` ([L4],
  step 3.1) and `cex-equal-actions-…` ([L1], step 2.1). The decategorification
  proposition's normalisation was re-verified by direct computation (the
  identity `C[R_i]C^{-1}=B_i|_{t=q}` checked for `m = 1,2,3,5` and all `i`).
- `prop-reduced-and-unreduced-burau-representations-have-the-same-kernel` —
  exactly the same-kernel clause over `Z[t^{±1}]` consumed in step 3.1 of the
  five-strand lemma, with its field-splitting caveat (no integral complement
  claimed), which is all that step 3.1 uses.
- `thm-topological-and-matrix-burau-representations-agree` — clause (1) is
  exactly the statement that the topological action on the relative lifted-edge
  basis is `rho^mat_n`, the clause [L4] consumes.
- `def-burau-infinite-cyclic-cover` and `def-the-laurent-polynomial-ring` — the
  `Z`-cover and the coefficient ring used in [L1] and by the local-index
  reversal rule.

With the suppliers on disk and their clauses matching the consuming steps, the
factual reason for the two escalations no longer holds. A non-owner cannot
rewrite an escalation receipt (`tools/step3-decisions.mjs` refuses it), so both
items remain **owner-held** as recorded; the evidence needed to resolve them is
in this report and in `batch-8.cross-batch-dependencies.json` (all nine batch-8
edges `verified`).

## Local repairs recorded (this session)

1. **Canonical proof-contracts artifact.** Created
   `research/frontier-40-geometry-braids-rep-27-batch-8.proof-contracts.json`
   from the attempt-1 `batch-8.contracts.json` content, then (a) repaired the
   fact label set of one item in the contract (below) and (b) replaced the
   templated boundary rationales of all 34 items with item-specific
   dispositions. The historical `batch-8.contracts.json` is retained unmodified
   as the attempt-1 receipt; no tool reads it.
2. **Boundary dispositions made item-specific.** The merged-corpus
   `boundary-audit` had flagged the batch's 34-row identical rationales on
   `degenerate`, `endpoints`, `nonempty-choice`, `one`, `iff-forward` and
   `iff-reverse` (and smaller `empty`/`zero` clusters). All 272 rows were
   rewritten to state, for that item, what the axis means or why it does not
   arise; the count and content of `checked` rows now reflects the actual proof
   steps (for example `lem-bigradings-of-curves-exist-and-are-unique-up-to-the-deck-action`
   carries checked `iff-forward`/`iff-reverse` rows crediting steps 1.2 and 1.1,
   and the family-detector items carry real `empty` dispositions). The canonical
   file now reports **0 template clusters and 0 contradicted dispositions**.
3. **Fact labels renumbered** in
   `lem-khovanov-seidel-complexes-satisfy-the-three-term-braid-relation`: the
   facts ran `[L1],[L2],[L4]...[L7]` with a stray blank line, so every proof
   citation pointed at a label set with a gap. Renumbered to `[L1]..[L6]` and
   updated every in-proof citation and the contract citations and derived-step
   inputs to match. No mathematical content changed.
4. **Rendered prose de-fused** in six items where inline mathematics had been
   written flush against the surrounding words, so that the renderer produced
   runs like "ofR_σis": `lem-geometric-intersection-numbers-are-isotopy-invariants`
   (step 3.1/4.1), `lem-standard-disk-twists-generate-a-free-abelian-subgroup`
   (steps 2.1/3.1), `lem-the-preferred-lift-of-a-half-twist-shifts-the-bigrading`
   (steps 1.2/3.1), `thm-khovanov-seidel-homs-compute-bigraded-arc-intersections`
   (step 1.2), `lem-khovanov-seidel-basic-arcs-detect-the-identity-braid`
   (steps 1.2/3.1/4.1) and `thm-the-khovanov-seidel-weak-braid-action-is-faithful`
   (steps 1.1/2.1/3.1). Only spaces were inserted; every math span, citation,
   step and trailing tag is unchanged (rendercheck re-parses all six).
5. **One missing cross-batch review row added.** The derived ledger has nine
   edges consumed by batch 8; the attempt-1 input reviewed eight. The missing
   edge `cex-equal-actions-on-k-zero-do-not-imply-isomorphic-derived-autoequivalences
   <- def-unreduced-burau-matrices` (added by the attempt-1 late manifest sync)
   was verified against the authored supplier and recorded `verified` with its
   exact clause.

**Step 3a findings rechecked on current inputs.** The Step 3a review asked for
three repairs plus one coverage attribution (F1–F4). On the current tree:
F1 — the five-strand kernel clause now states Bigelow's element (half twist
about a regular neighbourhood of `α` composed as a commutator with the *full*
twist about a regular neighbourhood of `β ∪ ∂D`), matching Bigelow §2–§3, and
the manifest statement is mirrored; F2 — the cancellation example now displays
the four totalization terms `U_i` (deg −1), `U_i⊗U_i{−1}` and `A_m` (deg 0) and
`U_i{−1}` (deg 1), matching KS Proposition 2.4; F3/F4 — the coverage file now
carries fetch-verified rows for Khovanov–Thomas, Birman–Brendle, Bar-Natan and
the Stacks lemma, and all five previously uncovered item ids appear in coverage
rows (`coverage-checklist`: 70 harvested results, 0 errors). The Step 3a scope
receipt (sufficient, 2026-10-04T15:05:57Z) binds the current scope hash, so the
amended statements are the approved ones.

## Proof contracts

`research/frontier-40-geometry-braids-rep-27-batch-8.proof-contracts.json`
covers all 34 manifest items: citations are generated verbatim from the cited
items' own statement sections, derivations cover every numbered step, and every
item carries the eight standard boundary axes (272 rows).

- `tools/proof-contract.mjs … --strict`: **0 errors, 0 warnings, 34/34 items**.
- `tools/boundary-audit.mjs … --fail-on-contradicted --fail-on-template`:
  **0 template clusters, 0 contradicted dispositions** (272 rows, 196 marked
  not-applicable).
- `tools/citation-fidelity.mjs … --fail-on-missing-quote`: no missing quote and
  no widening candidate.
- `tools/finite-smoke.mjs` and `tools/risk-report.mjs` on the same file: no
  errors; 34 items routed.

The contract's Choice rows record the pair's Choice discipline: the
braid-to-mapping-class dictionary (and its isotopy consequences) is the only
place AC enters, and the seven items that consume it declare it, list
`def-axiom-of-choice` and name the exact use; the topological, algebraic and
matrix layers are choice-free.

## Manifest, coverage and dependency inputs

- **Local suppliers added at Step 1 scaffold and fully authored here** (12 of
  the 30 A items): the topological layer
  `def-curves-and-geometric-intersection-numbers-on-the-marked-disk`,
  `lem-geometric-intersection-numbers-are-isotopy-invariants`,
  `def-basic-arcs-admissible-curves-and-normal-form`,
  `lem-standard-twists-fix-the-complementary-basic-arcs-and-commute`,
  `lem-standard-disk-twists-generate-a-free-abelian-subgroup`; the bigraded
  split `def-khovanov-seidel-bigraded-cover-and-bigraded-curves`,
  `lem-bigradings-of-curves-exist-and-are-unique-up-to-the-deck-action`,
  `lem-the-preferred-lift-of-a-half-twist-shifts-the-bigrading`,
  `lem-normal-form-string-types-and-their-geometric-intersection-contributions`,
  `lem-bigraded-string-type-contributions-to-bigraded-intersection-numbers`;
  the freeness lemma
  `lem-graded-grothendieck-group-of-a-m-is-free-on-the-shifted-vertex-projectives`;
  and the five-strand kernel element
  `lem-a-nontrivial-five-strand-braid-lies-in-the-burau-kernel`. Each is a
  prerequisite of a design item's stated proof route (the source's §3/§4
  topology and the freeness clause hidden in the `K_0` row), not a scope
  addition; all twelve lie inside the approved pair scope and none is absent
  from the immutable pre-author scaffold inventory.
- `manifest-deps.mjs` on `batch-8.pages.json`: 34 items, 0 normalized,
  0 errors; every manifest dependency row equals the authored frontmatter.
- Item and manifest `dependency_level`s agree for all 34 items;
  `item-dependency-levels.mjs check --run …`: 895 items across 54 pages, no
  error (the dispatch order is a valid topological order).
- Coverage `batch-8.coverage.json` is unchanged (2 pages, 70 harvested results,
  0 errors, 0 warnings under `--require-destination`); `source-fetch-check`
  reports 12/12 sources fetch-verified and 12/12 resolved.
- `cross-batch-dependencies.json`: all 9 edges consumed by batch 8 are
  `verified` with the exact authoring clause. The run-wide
  `frontier-dependency-ledger refresh --require-reviewed` still exits 1 because
  10 edges elsewhere in the run (other, still in-flight batches) carry no
  review; no batch-8 edge is open or orphaned.
- `validate-plan.mjs research/plan-spec.json`: exit 0, acyclic and consistent.

## Checks actually run (batch-8 scope)

| command | exit | result |
|---|---|---|
| `tsx-run.mjs tools/precheck.mts` on the 34 explicit item paths | 0 | `28 checked, 0 failing — all clean` (6 definition files carry no proof body) |
| `rendercheck.mjs` on the 34 items + 2 pages | 0 | `OK — 36 file(s)`; every math span parses under KaTeX |
| `proof-layout.mjs` on all 34 item paths (one batched command) | 0 | `34 items, 133 steps, 0 defects` |
| `proof-layout.mjs` on the 7 edited item paths (final, one batched command) | 0 | `7 items, 36 steps, 0 defects` |
| `content-policy.mjs` on `batch-8.pages.json` | 0 | `34 scoped item(s), 0 error(s), 0 warning(s)` |
| `proof-contract.mjs … --strict` (canonical file) | 0 | `0 error(s), 0 warning(s), 34/34 item(s)` |
| `boundary-audit.mjs … --fail-on-contradicted --fail-on-template` | 0 | 272 rows; 0 template clusters; 0 contradicted |
| `citation-fidelity.mjs … --fail-on-missing-quote` | 0 | no missing quotes; no widening candidates |
| `finite-smoke.mjs` / `risk-report.mjs` (canonical file) | 0 | no errors; 34 items routed |
| `manifest-deps.mjs` (batch-8 manifest) | 0 | 34 items, 0 normalized, 0 errors |
| `item-dependency-levels.mjs check --run …` | 0 | 895 items, 54 pages, max level 38, no finding |
| `coverage-checklist.mjs --require-destination` (batch 8) | 0 | 2 pages, 70 harvested results, 0 errors, 0 warnings |
| `source-fetch-check.mjs --coverage` (batch 8) | 0 | 12/12 fetch-verified, 12/12 resolved |
| `validate-plan.mjs research/plan-spec.json` | 0 | acyclic and consistent (257 planned pages still item-list-free, pre-splice) |
| `frontier-dependency-ledger.mjs refresh --run … --require-reviewed` | 1 (global) | batch-8 edges all reviewed; 10 unreviewed edges elsewhere |
| `depcheck.mjs` / `fwdcheck.mjs` / `extcheck.mjs` | 1 (global) | no finding names a batch-8 item or page |
| `step3-decisions.mjs check --run … --phase final` | 1 (global) | 32/34 batch-8 items closed; 2 owner-held (below) |
| merged contracts (27 batches, 874 items): `proof-contract --strict` | 0 | 0 errors, 6 warnings, none naming a batch-8 item |
| merged `boundary-audit` | — | 15 template clusters and 2 contradicted candidates, none naming a batch-8 item |

## Item decisions recorded

All 34 items now carry current `research/frontier-40-geometry-braids-rep-27-step3b-review-<id>.json`
receipts. In this session 22 receipts were re-recorded on the changed inputs:
7 `repaired` (the local repairs above) and 15 `accept` (content re-read
unchanged on refreshed inputs). The other 10 receipts were already current and
are preserved. `step3-decisions check --phase final` now reports exactly two
open rows for this pair, both the owner-held escalations below.

## Escalations, open obligations and published concerns

- **Owner-held (2 items).** `lem-a-nontrivial-five-strand-braid-lies-in-the-burau-kernel`
  (consuming step 3.1 uses `prop-reduced-and-unreduced-burau-representations-have-the-same-kernel`
  and `thm-topological-and-matrix-burau-representations-agree`) and
  `cex-equal-actions-on-k-zero-do-not-imply-isomorphic-derived-autoequivalences`
  (step 1.1 uses the kernel lemma). Both suppliers are now authored and their
  clauses verified; the escalations remain because only the owner may replace an
  escalation receipt. **Remedy:** owner resolution of the two receipts on the
  current hashes (accept or repaired with the examined dependency list); no
  content change is required.
- **Open obligations for Steps 5–8** (deep independent audit; flagged, not
  claimed defective): the string-type and local-index tables transcribed from
  Khovanov–Seidel Lemmas 3.18/3.20 and Figures 12–18; the loop-class
  computation in the preferred-lift lemma (source Lemma 3.14, Figure 9); the
  case-by-case intertwiners of `lem-khovanov-seidel-curve-complexes-intertwine-the-braid-generators`
  (source Proposition 4.4 and Lemmas 4.5–4.7); the thirty-eight-term finite
  computation of Bigelow's Section 3 inside the five-strand kernel lemma; and
  the general (all-`m`) decategorification identity, of which the `m = 1,2,3,5`
  instances were re-verified here by direct computation.
- **No confirmed published defect and no new published concern** was found by
  this batch. The global tools' published findings (`published-unaudited`
  remark, `b-leaf-content` findings, one `external-unused` row) name items and
  pages of other pairs only; unrelated published debt does not block this
  handoff.
- **Run-level observations for the orchestrator (not batch-8 repairs):** the
  current manifests enumerate 895 item IDs against the immutable pre-author
  scaffold inventory's 892 (the three extras are
  `def-simple-and-semisimple-representations`, `lem-tensor-and-hom-representations-are-rational`
  and `def-nondegenerate-star-representation-of-a-banach-star-algebra`, all in
  other pairs); and the merged-corpus boundary audit carries 15 template
  clusters in other batches, which will fail the run-level
  `boundary-audit --fail-on-template` gate until those authors repair them.

## Step 4 inputs (pre-splice)

- `research/plan-spec.json` pages 757/758 still carry empty `items` lists while
  `batch-8.pages.json` and both library pages carry the full 30 + 4 inventory;
  this is the ordinary pre-splice state and needs the Step 4 splice, not a plan
  amendment.
- The shared files touched are `batch-8.pages.json`,
  `batch-8.proof-contracts.json`, `batch-8.coverage.json` and
  `batch-8.cross-batch-dependencies.json`; no sibling row in any shared file was
  changed.
- The dependency levels recompute without error, so no level relabelling is
  handed to Step 4 from this pair.

## Handoff statement

All 34 assigned items and both assigned pages are authored; the canonical batch
proof-contracts artifact, manifest, coverage, cross-batch input, item decisions
and this report are present and current. The only open batch-8 rows are the two
owner-held escalations, whose factual cause (an unfinished in-run supplier) has
been removed and whose resolution is an owner act on current hashes.
