# Step 3b — pair `finite-lattice-projections-and-coxeter-chain-labels`

- Run: `frontier-42-coxeter-32`; role `alpha-high`; label
  `step3b-pair-finite-lattice-projections-and-coxeter-chain-labels-8db9187a8d98e81c`.
  This dispatch continues the interrupted receipt
  `...-dcbc7517108b6cb7` (entry checkpoint retained and completed below).
- A page: `finite-lattice-projections-and-coxeter-chain-labels` (order 1726,
  batch 5, `coxeter-groups`, label CG-02, 4 items).
- B page: `finite-lattice-projections-and-coxeter-chain-labels-examples`
  (order 1727, batch 5, 3 items); B is a leaf served only by the A page.
- Owned items, in the dispatch's dependency-level order:
  0. `def-cg-finite-lattice-congruence-and-interval-projections` (A)
  1. `lem-cg-lattice-quotient-descent-and-class-intervals` (A)
  1. `lem-cg-lexicographic-chain-shelling-and-mobius-cancellation` (A)
  2. `thm-cg-finite-lattice-interval-congruence-criterion` (A)
  2. `ex-cg-rank-three-chain-labeling-and-order-complex-facets` (B)
  3. `cex-cg-interval-partition-with-nonmonotone-endpoints-is-not-a-congruence` (B)
  3. `ex-cg-interval-congruence-criterion-on-a-chain-and-a-diamond` (B)
- Owned batch files: `research/frontier-42-coxeter-32-batch-5.pages.json`,
  `...batch-5.coverage.json`, `...batch-5.cross-batch-dependencies.json` (`[]`),
  `...batch-5.notes.md`, `...batch-5.proof-contracts.json`,
  `library/coxeter-groups/finite-lattice-projections-and-coxeter-chain-labels.md`,
  `library/coxeter-groups/finite-lattice-projections-and-coxeter-chain-labels-examples.md`.

## Inputs read at entry

- `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md` (including the Step 3b gate list and
  the finite-smoke liveness requirement), `briefs/tasks/frontier-dependency-ledger.md`.
- Step 3a pair report and `sufficient` receipt
  `research/frontier-42-coxeter-32-step3a-review-finite-lattice-projections-and-coxeter-chain-labels.json`
  (current: verified that the recorded scope hash still matches the live manifest,
  `scopeDecision.closed === true`).
- Batch-5 manifest, Step-1 note, coverage (4 fetch-verified sources),
  cross-batch input `[]`, proof contracts, `plan-spec.json` CG-02, owner
  authoring direction, `research/coxeter-scaffold/inventory.json` CG-02 and
  `definition-justifications.json`.
- All seven item scaffolds and both page files; the published suppliers
  consumed (`def-partial-order`, `def-chain`, `def-equivalence-relation`,
  `def-lattice-distributive-lattice-and-order-ideal`, `def-graded-poset-and-rank`,
  `def-poset-interval-and-finiteness-conditions`, `def-finite-cardinality`,
  `thm-subset-of-a-finite-set`, `def-face-poset-and-order-complex`,
  `def-poset-mobius-function`, `lem-poset-mobius-recurrence`,
  `def-boolean-lattice-and-levels`, `thm-mobius-function-of-a-boolean-lattice`,
  `cor-mobius-inversion-for-finite-posets`, `lem-equivalence-classes-partition`,
  `thm-induction-principle`).
- In-run consumers of this pair (read for interface only; not edited):
  batch 16 `bruhat-interval-labels-shellings-and-mobius-functions` (five items
  on the definition and the shelling lemma) and batch 32
  `sortable-projections-and-finite-cambrian-lattices` (three items on the
  definition, the quotient lemma and the criterion).
- Sources re-fetched in this session and hash-verified against the coverage
  stamps: BB `EntireBook.pdf` `sha256_16 ad1e7d9260127bb2` (§2.7 printed
  pp. 48–55: deletion labeling, Lemmas 2.7.2/2.7.4, printed pp. 49–51, and the
  full proof of Theorem 2.7.5, printed pp. 51–52); Wachs `math/0602226`
  `c23fb90ff3cb3973` (Def. 3.2.1, Thm. 3.2.2, Remark 3.2.5, Def. 3.3.1 with
  rooted intervals, printed pp. 46–48 and 58–59); Stanley `sp06stanley.pdf`
  `d3cc5d2586e773d1` (Lemma 4.4 and the complete proof of Theorem 4.11 with the
  flag f-vector claim (27) and the evaluation (28)–(29), printed pp. 42–44);
  Reading `TLC.pdf` `6edf3d06363ab085` (slides 2–9: congruence, quotient
  operations, order-theoretic characterization).

## Open obligations (entry checkpoint, now closed)

1. Audit each item's hypotheses, suppliers and proof route in dependency order
   — DONE, with one repair (item 0) and one contract extension (items 6–7).
2. Keep manifest, coverage, cross-batch input, contracts, item decisions and the
   two page files consistent — DONE; see the pre-splice observations below for
   the one statement-mirror note on item 6.
3. Run the batch-5 check battery — DONE; results below.
4. Run `tools/proof-layout.mjs` once on all changed item paths before handoff and
   record item decisions with confidence 1 — DONE.
5. Re-check the finite-smoke/gate-liveness observation — DONE and FIXED: a
   relevant registered finite model now exists and is bound (see "Additions").
6. Clear the Step-3b `scope-decisions` gate for this page's coverage declines —
   DONE: 18/18 rows for this page (`15` out-of-scope, `3` deferred) are recorded
   `stands` with item-specific evidence in
   `research/frontier-42-coxeter-32-alpha-d-scope-decisions.json` (group d =
   batches 5/26/30; the remaining 19 group-d rows belong to batches 26 and 30
   and are left `pending` for their owners).

## Item checkpoints

### 0. `def-cg-finite-lattice-congruence-and-interval-projections` (A, level 0)

- Claim/conventions audited: lattice congruence on a finite lattice; proposed
  quotient operations and class endpoints with **no** existence or
  representative-independence claim (discharged by the quotient lemma; the
  binding `justified_by` target is the criterion item); descending rooted-chain
  labels with labels depending on the chain above the cover; maximal chains of
  `[x,y]` as chains with `ρ(x,y)` steps; top-down label words and the
  rooted-interval extension formula; increasing/falling/strictly falling
  words, descent sets, lexicographic order; (N) and (L) with the rank-0/rank-1
  vacuous meaning; ordinary edge labeling as the root-independent special case.
- Source locators checked against full texts: Wachs Def. 3.3.1 + Remark 3.2.5,
  BB §2.7 (deletion labeling and Lemma 2.7.4), Stanley Def. 4.11.
- Dependencies examined: `def-partial-order`, `def-chain`,
  `def-lattice-distributive-lattice-and-order-ideal`,
  `def-graded-poset-and-rank`, `def-poset-interval-and-finiteness-conditions`
  (all present and used), plus the newly declared `def-equivalence-relation`.
- Repair: declared the used prerequisite `def-equivalence-relation` (the term
  "equivalence relation" in clause (1)) in the item frontmatter and the batch-5
  manifest. The mathematical text is byte-identical to the scaffolded
  statement, so no consumer statement is altered; the definition's `deps` now
  name every notion it uses.
- Decision: `repaired`, confidence 1, sha256 `c7a3aa737a08873b…`
  (`2026-10-07T10:07:01.739Z`), receipt
  `research/frontier-42-coxeter-32-step3b-review-def-cg-finite-lattice-congruence-and-interval-projections.json`.
- Open gaps: none. Contract scope excludes definitions (no proof phase);
  rendercheck/precheck n/a path checked.

### 1a. `lem-cg-lattice-quotient-descent-and-class-intervals` (A, level 1)

- Claim/conventions audited: (i) closure of a class under binary meet/join and
  under the meet/join of any nonempty finite subfamily; (ii) unique endpoints
  and class = interval; (iii) representative independence and the quotient
  lattice with order `[x] ≤ [y] iff x∨y ≡ y`; (iv) monotone endpoint maps.
- Independent verification: closure from congruence + reflexivity (1.1); the
  finite listing `z_0,…,z_{k−1}` with iterated meet lying in the class and
  being the glb (2.1) and the least member (3.1); class = `[π↓,π↑]` by meeting
  a member with the endpoints (4.1); monotonicity by the standard sandwich
  (4.2/4.3). Finiteness is spent exactly on listing the finite class; the
  argument is choice-free (the listing is a single existential witness; no
  family of nonempty sets is selected). This matches the Reading slides and
  the choice-free clauses 1–2 of `thm-subset-of-a-finite-set`.
- Dependencies examined: the eight declared deps (all present and used; the
  contract quotes `def-cg-…`'s Definition, `def-poset-interval-…`,
  `def-equivalence-relation`, `lem-equivalence-classes-partition`,
  `def-partial-order`, `def-finite-cardinality`, `thm-subset-of-a-finite-set`).
- Decision: `accept`, confidence 1, sha256 `c7a3aa737a08873b…`
  (`2026-10-07T10:07:06.843Z`). No repair needed.
- Open gaps: none.

### 1b. `lem-cg-lexicographic-chain-shelling-and-mobius-cancellation` (A, level 1)

- Claim/conventions audited: (i) the first-divergence/first-reunion
  replacement and the pairwise facet criterion for `Δ([x,y])` and
  `Δ((x,y))`; (ii) `μ(v,w) = (−1)^{ρ(v,w)}·#(strictly falling maximal
  chains)` for every rooted interval, with the rank-0 (empty word, `μ = 1`)
  and rank-1 (open interval empty, `μ = −1`) conventions.
- Independent verification: 1.3 shows the window word of `m` is not increasing
  (otherwise (L) yields `λ(m) ≺ λ(m')`, contradicting the hypothesis, or
  contradicts uniqueness of the increasing chain) and (N) upgrades the
  non-increase to a strict descent; 2.1/3.2 build `k` with `λ(k) ≺ λ(m)`,
  `k ∩ m = m \ {m_e}` and `m' ∩ m ⊆ k ∩ m`; 4.3 covers tied words; 4.2
  proves endpoint removal. For (ii): 4.1 constructs the inverse bijection
  `α(S) = f(k−S)` by segmentwise increasing refinement (inverse of truncation);
  5.1 is Boolean Möbius inversion; 6.1 evaluates with Hall's chain-sum identity,
  which 1.2 derives by induction from the published recurrence instead of
  assuming it. This is BB Theorem 2.7.5's proof (read in full) abstracted from
  deletion labels to (N)+(L), and Stanley Theorem 4.11's proof (read in full)
  for the flag f-vector/Möbius part. The tied-word case in 4.3 is a genuine
  strengthening over BB's injective deletion labeling and is correct.
- Dependencies examined: the eleven declared deps (all present and used;
  contract quotes verified for `def-cg-…` clauses (2)–(4),
  `def-graded-poset-and-rank`, `def-face-poset-and-order-complex`,
  `lem-poset-mobius-recurrence`, `def-boolean-lattice-and-levels`,
  `thm-mobius-function-of-a-boolean-lattice`,
  `cor-mobius-inversion-for-finite-posets`, `thm-subset-of-a-finite-set`,
  `thm-induction-principle`).
- Decision: `accept`, confidence 1, sha256 `e52404f3e89791f8…`
  (`2026-10-07T10:07:47.819Z`). No repair needed.
- Open gaps: none.

### 2a. `thm-cg-finite-lattice-interval-congruence-criterion` (A, level 2)

- Claim/conventions audited: an equivalence relation whose classes are
  intervals `[d(x),u(x)]` with endpoints in the class is a congruence iff `d`
  and `u` are order-preserving; (i) necessity = quotient lemma (iv) after
  identifying `d,u` with `π↓,π↑`; (ii) sufficiency reduces an arbitrary
  equivalent pair through `c = x∧y`, which lies in the class of `x` and of
  `y`, then sandwiches both operations; well-definedness of the quotient
  operations follows.
- Independent verification: 1.1 (both directions of the endpoint identity),
  1.2 (class-determined endpoints), 2.1 (the meet of equivalent elements lies
  in both classes), 2.2/2.3 (join and meet sandwiches), 3.1 (transitivity),
  4.1 (congruence property for arbitrary equivalent pairs). Exactly Reading's
  order-theoretic characterization, slides 2–9 read in full.
- Dependencies examined: the seven declared deps (all present and used).
- Decision: `accept`, confidence 1, sha256 `c7a3aa737a08873b…`
  (`2026-10-07T10:07:53.897Z`). No repair needed.
- Open gaps: none.

### 2b. `ex-cg-rank-three-chain-labeling-and-order-complex-facets` (B, level 2)

- Claim/conventions audited: the element-added edge labeling of `B_3` is an
  ordinary (hence descending rooted-chain) labeling satisfying (N) and (L) on
  every rooted interval; six maximal chains with the six permutation words;
  unique increasing chain (word `(1,2,3)`) and unique strictly falling chain
  (word `(3,2,1)`); the six facets of `Δ((∅,{1,2,3}))` in the induced order;
  one shelling replacement for `(1,3,2) ≺ (2,1,3)`; `μ(∅,{1,2,3}) = −1`
  against the recurrence; Stanley's `B_n` labeling is the cited archetype.
- Independent verification: hand-enumeration of the six chains, their words
  and descents, the six facets, the replacement chain `k` (word `(1,2,3)`,
  `|k ∩ m| = 3 = |m|−1`, `m' ∩ m ⊆ k ∩ m`), and the recurrence values
  `μ = 1, −1, 1, −1` by `|S| = 0,1,2,3`.
- Dependencies examined: the seven declared deps (all present and used).
- Decision: `accept`, confidence 1, sha256 `57906bfc95915928…`
  (`2026-10-07T10:07:59.183Z`). No repair needed.
- Open gaps: none.

### 3a. `cex-cg-interval-partition-with-nonmonotone-endpoints-is-not-a-congruence` (B, level 3)

- Claim/conventions audited: the partition `{0,a}|{b}|{1}` of the diamond is a
  partition into intervals with endpoints in the class, fails the congruence
  property (`0 ≡ a`, `0∨b = b`, `a∨b = 1`, `b ≢ 1`), and fails the criterion at
  `0 ≤ b` with `u(0) = a ≰ b = u(b)`; so the monotonicity hypothesis is not
  redundant.
- Independent verification: direct two-line computation on `M_3`; confirmed
  by the new exhaustive finite model (below).
- Dependencies examined: the six declared deps (all present and used).
- Contract repair: bound the registered finite model
  `interval-partition-criterion-on-chain-and-diamond` with the exact assertion
  excerpt `"It is a partition into intervals, but it is not a lattice congruence"`
  in `...batch-5.proof-contracts.json` (the excerpt is matched against the item
  text by `finite-smoke`; the model recomputes the failure).
- Decision: `accept`, confidence 1, sha256 `3b03f886e1748a79…`
  (`2026-10-07T10:08:05.110Z`). The item text is unchanged.
- Open gaps: none.

### 3b. `ex-cg-interval-congruence-criterion-on-a-chain-and-a-diamond` (B, level 3)

- Claim/conventions audited: four interval partitions of the three-element
  chain, all congruences, quotients `C`, two two-element chains, one point;
  eight interval partitions of the diamond; exactly four with monotone
  endpoints (discrete, `{0,a}|{b,1}`, `{0,b}|{a,1}`, all-one), which are
  exactly the four congruences; the other four fail with explicit endpoint
  violations; the two 2+2 congruences have the two-element chain as quotient;
  the congruence lattice of the diamond has four elements.
- Independent verification: recount `1 + 4 + 2 + 1 = 8` interval partitions of
  the diamond; the four 2+2 pairings with the failing pairing `{a,b}|{0,1}`
  excluded because `{0,1}` is not an interval; monotonicity of `d,u` on the
  five comparable pairs for each partition; the four explicit failures.
  Additionally re-derived by the new exhaustive finite model.
- Dependencies examined: the eight declared deps (all present and used).
- Contract repair: bound the registered finite model with the exact assertion
  excerpt `"On $D$ there are exactly eight interval partitions"`.
- Decision: `accept`, confidence 1, sha256 `667e1f8d3ffc078d…`
  (`2026-10-07T10:08:07.086Z`). The item text is unchanged.
- Open gaps: none.

## Additions and tool changes

1. **Declared prerequisite (item 0).** `def-equivalence-relation` added to the
   definition's `deps` (item and batch-5 manifest). Reason: Step 3a observation
   §4.1 handed this declaration choice to Step 3b; clause (1) uses the notion.
   The item's statement text is unchanged.
2. **Finite-smoke model (new, `tools/finite-smoke.mjs`).**
   `interval-partition-criterion-on-chain-and-diamond` independently enumerates
   all set partitions of the chain (5) and diamond (15), identifies the interval
   partitions (4 and 8), tests endpoint monotonicity on every comparable pair
   (96 checks), tests the congruence property directly on every partition, and
   verifies the quotient class operations (`[x] ∨ [y] = [x ∨ y]`,
   `[x] ∧ [y] = [x ∧ y]`, chain-ness of the two-class quotients) of the 8
   surviving congruences (43 least-upper/greatest-lower class checks), plus the
   explicit failure witness for `{0,a}|{b}|{1}`. It is exhaustive for these two
   lattices and proves no general criterion. Registered because the proof
   contracts carried a zero-check `finite_smoke` scope and `gate-liveness`
   demands a non-vacuous scope ("a zero-check contract cannot satisfy gate
   liveness", WORKFLOW.md); the model is bound to items 3a and 3b with exact
   assertion excerpts.
3. **Test (new, `tools/finite-smoke-lattice-congruence.test.mjs`)** validates the
   binding against the real items and that a fabricated or unknown check fails
   (`node --test` passes; `finite-smoke --self-test` passes all 20 registered checks).
4. **Batch-5 note correction.** The Step-1 axiom paragraph misattributed
   "clauses 1–2 / Proof 6.1" to `thm-well-ordering-principle`; the Step 3a
   report §4.2 recorded this wording defect. The paragraph now attributes
   clauses 1–2 and Proof 6.1 to `thm-subset-of-a-finite-set`, records that its
   clause 4 (Proof 9.1) is the only place the well-ordering of the naturals is
   invoked, and that clause 4 is not consumed here. No substance changed.
5. **Contract extension (`...batch-5.proof-contracts.json`).** The two
   `finite_smoke` bindings above. No other contract row changed; all 47 citation
   quotes still match their sources, boundaries unchanged.

No items, pairs, pages or suppliers were added or removed; no sibling or
published content was edited.

## Cross-batch consumers and reconciliation

- Consumers of this pair inside the run (declared in their own manifests):
  batch 16 `bruhat-interval-labels-shellings-and-mobius-functions`
  (`def-cg-deletion-chain-labels-and-shelling`,
  `lem-cg-bruhat-increasing-chain-and-local-descent-replacement`,
  `thm-cg-bruhat-deletion-label-shelling`,
  `thm-cg-bruhat-eulerian-intervals-and-mobius`,
  `ex-cg-s4-rank-three-interval-mobius-from-recurrence`) and batch 32
  `sortable-projections-and-finite-cambrian-lattices`
  (`def-cg-recursive-sortable-projection-and-cambrian-congruence`,
  `thm-cg-sortable-meet-join-closure-and-cambrian-quotient`,
  `thm-cg-sortable-projection-greatest-element-and-interval-fibers`).
- Interface check: the consumers quote the definition's clauses (2)–(4) and the
  shelling lemma's (i)/(ii) verbatim. All seven statements are byte-identical to
  the scaffolded statements, so no consumer statement is altered; the only
  interface-adjacent edit in this batch is the definition's `deps` metadata
  (plus contract-only bindings). Batch-16's contract quotes of the definition's
  clause (3) still match the unchanged text.
- Mechanical consequence: the Step-3b item hashes of those consumers include
  this batch's item bytes, so their current receipts are invalidated by this
  dispatch's edits (verified: `itemDecision(thm-cg-bruhat-deletion-label-shelling)`
  now reports "current item audit required"). The engine's Step-3b failure loop
  re-dispatches those pairs for fresh item audits; this report does not attempt
  to edit or re-record sibling decisions.
- Batch-5 cross-batch input remains `[]` and is correct: every supplier of this
  pair's seven items is published. `frontier-dependency-ledger.mjs refresh`
  run after the dependency edit (exit 0).

## Checks run (actual results)

| Check | Command | Result |
|---|---|---|
| manifest deps | `node tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-5.pages.json` | `7 item(s), 0 normalized, 0 error(s)` |
| policy, items | `node tools/content-policy.mjs research/frontier-42-coxeter-32-batch-5.pages.json` | `7 scoped item(s), 0 error(s), 0 warning(s)` |
| precheck (explicit paths) | `node tools/tsx-run.mjs tools/precheck.mts <7 items>` | `6 checked, 0 failing` (definition has no proof phase) |
| rendercheck | `node tools/rendercheck.mjs <7 items + 2 pages>` | OK, 9 files, all math parses |
| proof-layout | `node tools/proof-layout.mjs <7 items>` | `7 items, 49 steps, 0 defects` |
| proof contracts | `merge-proof-contracts` to `/tmp` + `proof-contract --strict` | `0 error(s), 0 warning(s), 6/6` |
| finite-smoke | `finite-smoke <merged>` | `0 error(s), 2 check(s) over 2/6 items` (both PASS) |
| risk-report | `risk-report <merged>` | `0 error(s), 6 items routed` |
| boundary-audit | `--fail-on-contradicted --fail-on-template --json` | 0 template clusters, 0 contradicted |
| citation-fidelity | `--fail-on-missing-quote` | 47 citations, every quote found |
| gate-liveness | `--contracts <merged> --checklists batch-5.coverage.json --min-checks 1` | live: finite-smoke 2, proof-contract 6, coverage 37, precheck 21k+ |
| depcheck (focused) | `--items-file <7 items>` | OK, 0 warnings |
| fwdcheck / extcheck (focused) | `--items-file` | OK / no active unproved or external records |
| depsource | `--items-file --run` | 7/7 consumers, 0 unresolved, 42 published-page deps |
| pathcheck | `--pages-file <2 pages>` | 1 pathway, 0 errors, 0 warnings |
| coverage | `coverage-checklist --require-destination` | 37 results, 0 errors, 1 expected low-yield warning |
| source fetch | `source-fetch-check --coverage batch-5` | 4/4 fetch-verified, 4/4 resolved |
| item levels | `item-dependency-levels check --run` | no finding for this pair (levels 0,1,1,2,2,3,3 verified against the manifest and the computed graph) |
| Step 3 items | `step3-decisions check --phase final` | all seven owned items `closed` (run-wide 23/303 at the time of the pass) |
| scope declines | `scope-decisions refresh --group d` then `check --run` | 18/18 rows for this page recorded `stands` with evidence; 0 remaining errors for this page (the run-wide check still lists other groups' pending rows) |
| manifest integrity | `manifest-integrity --run` | 64 pages owed, 64 in the manifests, no scope drift |
| consumer smoke test | `node --test tools/finite-smoke-lattice-congruence.test.mjs` | pass |

## Run-level observations (for Step 4 and the owner; not owned by this pair)

1. **`validate-plan` is currently FAIL run-wide** with 17 `undeclared-prereq`
   errors, all on other pairs' pages (`generic-coxeter-hecke-…-examples`,
   `tits-cones-chambers-and-parabolic-stabilizers`,
   `finite-reflection-length-…`(+examples), `coxeter-descents-…`(+examples));
   this pair shows only `redundant-prereq` warnings for the design-frozen
   `requires` list of the A page, and they stay as warnings.
2. **`item-dependency-levels check --run`** reports one error on another pair:
   `ex-cg-reducible-semidefinite-forms-are-factorwise` has level 15 but
   computed 16 (affine-Coxeter pair, batch 24). No finding for batch 5.
3. **`step3-auditor-items.mjs certify`** is currently blocked on
   `def-cg-linear-extension-of-a-finite-poset` (batch 28, the
   heaps/commutation pair): no successful Step 3 result covers that dispatch
   yet. Not this pair.
4. **Manifest mirror note for item 3a.** The batch-5 manifest's planned
   statement for `cex-cg-interval-partition-with-nonmonotone-endpoints-is-not-a-congruence`
   ends with a wikilink to `ex-cg-interval-congruence-criterion-on-a-chain-and-a-diamond`,
   while the authored item text names "the companion example on a chain and a
   diamond" without the link. The claim is identical, and the authored text is
   the depcheck-clean form (the link inside `## Statement refuted` would demand
   the sibling example in this item's `deps`). Left deliberately unsynchronized
   so the recorded Step 3a scope receipt stays current; Step 4 will transcribe
   the manifest statement as planned text. (Run-wide, 93 items currently show
   substantive manifest-vs-authored statement drift, so this is the normal
   pre-splice state.)
5. **prosecheck warning** `count-of-this-page` on the chain/diamond example
   ("four of them"): a mathematical count of the diamond's interval partitions,
   not a claim about the page. Legitimate.

## Handoff

- **Additional gate work:** the Step-3b `scope-decisions` gate needed the page's
  coverage-decline decisions; the 18 rows for this page (15 out-of-scope, 3
  deferred to the planned Bruhat-interval and sortable-projection pages) are
  recorded `stands` with item-specific evidence in the group-d file, so no
  decline for this page is unresolved.
- **Completed IDs (all seven owned items, with current decisions):**
  `def-cg-finite-lattice-congruence-and-interval-projections` (repaired),
  `lem-cg-lattice-quotient-descent-and-class-intervals` (accept),
  `lem-cg-lexicographic-chain-shelling-and-mobius-cancellation` (accept),
  `thm-cg-finite-lattice-interval-congruence-criterion` (accept),
  `ex-cg-rank-three-chain-labeling-and-order-complex-facets` (accept),
  `cex-cg-interval-partition-with-nonmonotone-endpoints-is-not-a-congruence`
  (accept),
  `ex-cg-interval-congruence-criterion-on-a-chain-and-a-diamond` (accept);
  both pages written; report, manifest, coverage, contracts and cross-batch
  input present and current.
- **Checks actually run:** the table above (all on disk, with the commands and
  their real outputs). No gate result is claimed beyond what was run.
- **Added suppliers:** none. Declared the missing published prerequisite
  `def-equivalence-relation` on item 0; registered one new finite model in the
  shared `tools/finite-smoke.mjs` registry with a test, and bound it to items 3a
  and 3b.
- **Published concerns:** none confirmed in this pair. The published suppliers
  were read at the clauses consumed, not recursively audited; no defect found
  at those clauses. The Step-1 note's axiom-attribution wording was corrected
  (record only, no mathematical change).
- **Open obligations:** none for this pair. The four run-level observations
  above are owned by other pairs/the engine; the invalidation of batch-16/32
  consumer receipts is expected Step-3b churn that the engine's failure loop
  re-dispatches, not an unreconciled supplier.
- **Confidence:** confidence 1 on each item decision refers to the audit
  described in its receipt (claims, hypotheses, supplier uses, choice status and
  the listed checks), not to an independent review; Steps 5–8 follow.
