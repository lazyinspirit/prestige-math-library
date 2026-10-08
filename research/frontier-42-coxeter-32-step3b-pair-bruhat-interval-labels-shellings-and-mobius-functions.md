# Step 3b — scaffold audit and authoring: `bruhat-interval-labels-shellings-and-mobius-functions`

Run `frontier-42-coxeter-32`, batch 16, design label CG-13 (orders 1748/1749),
role `alpha-high`. A page `bruhat-interval-labels-shellings-and-mobius-functions`,
B page `bruhat-interval-labels-shellings-and-mobius-functions-examples`, category
`coxeter-groups`. Only this pair is owned; sibling rows in the shared batch
files are preserved.

## Owned IDs and open obligations (entry record, 2026-10-07)

Authoring order (dependency level, then page order and item ID as dispatched):

1. `def-cg-deletion-chain-labels-and-shelling` (A, level 16)
2. `lem-cg-bruhat-increasing-chain-and-local-descent-replacement` (A, level 17)
3. `thm-cg-bruhat-deletion-label-shelling` (A, level 18)
4. `thm-cg-bruhat-eulerian-intervals-and-mobius` (A, level 19)
5. `ex-cg-s4-rank-three-interval-chain-labels-and-lex-first-chain` (B, level 19)
6. `cex-cg-parabolic-quotient-interval-eulerian-claim-fails` (B, level 20)
7. `ex-cg-s4-rank-three-interval-mobius-from-recurrence` (B, level 20)

Pages to author after their items:

- `library/coxeter-groups/bruhat-interval-labels-shellings-and-mobius-functions.md`
  (items list: the four A items, in order).
- `library/coxeter-groups/bruhat-interval-labels-shellings-and-mobius-functions-examples.md`
  (examples list: the three B items).

Open obligations at entry:

- Both pages are prose scaffolds with empty `items`/`examples` lists; all seven
  item carriers are unauthored.
- In-run suppliers are being authored concurrently by sibling Step-3b agents and
  their carriers do not exist yet on disk: batch 2
  (`def-hh-coxeter-matrix-word-group-and-length`,
  `thm-hh-coxeter-exchange-deletion-and-faithfulness`,
  `thm-hh-parabolic-minimal-representatives-and-length-additivity`), batch 4
  (`def-cg-canonical-reflection-homomorphism`), batch 5
  (`def-cg-finite-lattice-congruence-and-interval-projections`,
  `lem-cg-lexicographic-chain-shelling-and-mobius-cancellation`), batch 10
  (`def-cg-parabolic-quotient-and-two-sided-minima`) and batch 12
  (`def-cg-bruhat-order-by-reflection-chains`,
  `lem-cg-bruhat-right-exchange-and-augmentation`,
  `thm-cg-bruhat-subword-characterization`,
  `lem-cg-bruhat-chain-refinement-and-gradedness`,
  `thm-cg-bruhat-lifting-and-cover-criterion`,
  `thm-cg-bruhat-parabolic-projection-and-quotients`). Exact consuming steps are
  flagged in the per-item checkpoints below; item decisions stay escalated
  until each supplier carrier and its actual use are reconciled.
- Step 3a findings to carry into authoring (`research/frontier-42-coxeter-32-step3a-pair-bruhat-interval-labels-shellings-and-mobius-functions.md`):
  §6.1 B2's declared dependency on the `ai-generated` B1 statement is an
  item-mode content-policy error — repair locally by recomputing the needed
  chain data inside B2 (or an eligible supplier); §6.2 "facet" vocabulary — add
  the one-line maximal-simplex clarification in the A definition; §6.3 the
  1-based S₄ display versus the published 0-based convention — declare the
  letter-shift dictionary once in B1; §6.4 the C1 lifting-case cross-check in
  the Eulerian strategy (case (1a) for `(u,z)`, not (1d)) is confirmed by
  clause-level reading and is handled in the authored proof.
- Any item whose proof consumes a supplier that is not yet authored is written
  against the recorded supplier contract, with the exact supplier ID, consuming
  step and the residual obligation stated in the report; its decision is
  recorded `escalate`, not `accept`.

## Checkpoint log

### 1. `def-cg-deletion-chain-labels-and-shelling` (A, level 16) — authored

- Carrier `items/def-cg-deletion-chain-labels-and-shelling.md` written from the
  batch-16 scaffold statement, with the Step-3a §6.2 clarification added in (4):
  facets are "its maximal simplices under inclusion". Clauses (1)–(5) keep the
  promised claims; (2), (3) keep the fixed-expression and chain-dependence
  caveats; the abstention paragraph keeps the (N)/(L)/shelling claims out of the
  definition and attributes them to the justifier `thm-cg-bruhat-deletion-label-shelling`.
- Suppliers consumed: `thm-cg-bruhat-lifting-and-cover-criterion` (3) for the
  recursion (batch 12, carrier not yet on disk), `lem-cg-bruhat-chain-refinement-and-gradedness`
  (1),(3) (batch 12), `def-cg-finite-lattice-congruence-and-interval-projections`
  (2)–(4) (batch 5, carrier on disk since 2026-10-07 19:08, statement matches the
  scaffold verbatim), plus published items read on disk.
- Checks: `rendercheck` OK (1 file), `precheck` reports 0 checked / 0 failing
  (definition, `precheck: n/a`). Open obligation: the batch-12 supplier carriers
  are not yet on disk, so the item is written against the recorded supplier
  contracts; decision to be recorded after reconciliation.

### 2. `lem-cg-bruhat-increasing-chain-and-local-descent-replacement` (A, level 17) — authored

- Carrier written with the nine-step proof of (i)–(iv): the cancellation identity
  (step 1.1), the minimal-last-deleted-position construction of the increasing
  chain (1.2), the lexicographic minimality of prefix and suffix (1.3), increasing
  uniqueness (2.1), the mirrored falling chain (2.2), falling uniqueness (3.1),
  the lex-first chain (3.2), the rank-two diamond count (4.1) and the local
  descent replacement (5.1). The mirror is transported through inversion
  (`F8`,`F9`), which the batch notes record as the designed route.
- `precheck` PASS (direct), `rendercheck` OK. Open obligations: consumed in-run
  suppliers `thm-cg-bruhat-lifting-and-cover-criterion`,
  `lem-cg-bruhat-right-exchange-and-augmentation`, `thm-cg-bruhat-subword-characterization`,
  `lem-cg-bruhat-chain-refinement-and-gradedness`, `def-cg-bruhat-order-by-reflection-chains`
  (batch 12), `def-hh-coxeter-matrix-word-group-and-length` (batch 2, carrier on
  disk 19:10) and `thm-hh-parabolic-minimal-representatives-and-length-additivity`
  (batch 2) are not all on disk yet; flagged for reconciliation, decision
  `escalate` until then.

## Continuation — retry dispatch `step3b-pair-…-4291cb287b0e6093` (2026-10-07)

Recovery note. This pair was dispatched twice: attempt `…-123fc90b95cdcbe1`
(08:04Z) authored the seven carriers in dependency-level order and wrote
checkpoints 1–2 above; attempt `…-4291cb287b0e6093` (09:21Z, after the owner
`retry`) resumed from disk, where the carriers for items 3–7 already contained
complete statements, Facts and proofs but had no checkpoints, no authored pages,
no cross-batch reconciliation and no item decisions. The retry re-read every
carrier, every direct supplier now on disk, the Step-3a report and the batch-16
notes; made two proof-precision edits; authored both pages; reconciled the
batch-16 cross-batch input; ran the checks below and recorded the seven
decisions. This pass changed no item statement, manifest statement, title,
kind or dependency ID and added no item or page beyond the scaffold. For the
record, the first pass had already made four convention-level statement
adjustments relative to the batch-16 manifest: the A definition gained the
Step-3a §6.2 clarification "its maximal simplices under inclusion"; the level-17
lemma gained the retained-expression relabelling clause in its Statement; the
two S₄ B items and the quotient counterexample were phrased in the type-A
letters $\{1,2,3,4\}$ with the letter-shift dictionary of §6.3; and B2 became
self-contained instead of citing B1 (§6.1 repair). In every case the promised
clauses are preserved verbatim in content; the manifest statements, which the
Step-3a scope receipt hashes, were not edited.

### 3. `thm-cg-bruhat-deletion-label-shelling` (A, level 18) — complete

- Carrier `items/thm-cg-bruhat-deletion-label-shelling.md`. Steps 1.1–3.1 prove
  (i) (N) and (L) on every rooted interval (via the level-17 lemma (i),(iii)),
  that the label word determines the chain and that distinct chains have
  distinct words, the empty/rank-one/rank-two conventions, and the shelling of
  the open-interval order complex by endpoint removal, using the batch-5
  abstract comparison lemma (i) with its hypotheses (N), (L) and finite
  gradedness now established locally. The full earlier/later comparison
  `m′∩m⊆k∩m`, `|k∩m|=|m|−1` is `[F7]`, quoted from the batch-5 lemma.
- Suppliers read on disk and reconciled: `lem-cg-lexicographic-chain-shelling-and-mobius-cancellation`
  [F7],[F8]; `lem-cg-bruhat-chain-refinement-and-gradedness` (1),(3) [F9];
  `def-cg-bruhat-order-by-reflection-chains` (2) [F10];
  `def-cg-finite-lattice-congruence-and-interval-projections` (3),(4) in the
  Statement and (i); `def-cg-deletion-chain-labels-and-shelling` (2),(3),(4)
  [F1]–[F4]. Checks: precheck PASS, rendercheck OK, proof-layout 0 defects.
  Choice-free. No open obligation.

### 4. `thm-cg-bruhat-eulerian-intervals-and-mobius` (A, level 19) — complete

- Carrier `items/thm-cg-bruhat-eulerian-intervals-and-mobius.md`. Steps 1.1–5.1
  prove (i) the cancellation formula by Verma's two-case lifting induction
  (descent-paired involution; reduction to the strip `[u′,v]` with `B=[u′,v′]∖[u,v′]`),
  (ii) `μ(u,v)=(-1)^{ℓ(v)-ℓ(u)}` from the recurrence and its uniqueness clause,
  (iii) the falling-chain count one derived from the batch-5 falling-chain
  formula applied through the shelling theorem, and (iv) the scope refusal for
  proper parabolic quotients.
- Step-3a §6.4 is resolved in the authored proof: both directions of the paired
  involution and the induction use lifting case (a) of the batch-12 table for
  the pairs `(u,z)`/`(z,v)`; no use of case (1d) remains.
- Suppliers read on disk and reconciled: `thm-cg-bruhat-lifting-and-cover-criterion`
  (1a) [F1]; `thm-hh-coxeter-exchange-deletion-and-faithfulness` (1) [F2];
  `def-hh-coxeter-matrix-word-group-and-length` [F3],[F4];
  `lem-cg-bruhat-chain-refinement-and-gradedness` (1),(3) [F5],[F11];
  `lem-poset-mobius-recurrence` [F6],[F7]; `def-finite-cardinality` [F8];
  `lem-cg-lexicographic-chain-shelling-and-mobius-cancellation` (ii) [F9];
  `thm-cg-bruhat-deletion-label-shelling` (i) [F10];
  `thm-cg-bruhat-parabolic-projection-and-quotients` (3) [F14]. Checks:
  precheck PASS, rendercheck OK, proof-layout 0 defects. Choice-free.

### 5. `ex-cg-s4-rank-three-interval-chain-labels-and-lex-first-chain` (B, level 19) — complete

- Verification: the eight elements of `[e,2341]` as the reduced subword
  products of `s₁s₂s₃`, the twelve covers, all six maximal chains with words
  `(1,2,3),(1,3,2),(2,1,3),(2,3,1),(3,1,2),(3,2,1)`, the lex-first/unique
  increasing chain and the explicit local descent replacement. Step-3a §6.3 is
  addressed: the Statement declares once that the 1-based display is the
  published 0-based `S₄` notation under `j↦j−1`, which preserves the order,
  inversion numbers and the Bruhat order.
- The finite data were independently reproduced by the Step-3a review's
  brute-force `S₄` enumeration (0 discrepancies). The statement is
  `ai-generated` with `generation.role: example`; no item depends on it.
- Suppliers read on disk: `thm-hh-parabolic-minimal-representatives-and-length-additivity`
  (4) [F3]; `thm-cg-bruhat-subword-characterization` (1) [F2];
  `thm-cg-bruhat-lifting-and-cover-criterion` (3) [F1];
  `lem-cg-bruhat-chain-refinement-and-gradedness` (3) [F11];
  `def-cg-finite-lattice-congruence-and-interval-projections` (3) [F6].
  Checks: precheck PASS, rendercheck OK, proof-layout 0 defects,
  content-policy scoped 0 errors. Choice-free.

### 6. `cex-cg-parabolic-quotient-interval-eulerian-claim-fails` (B, level 20) — complete

- Counterexample: `W^{s₁,s₃}⊆S₄` is the six-element set
  `{1234,1324,1423,2314,2413,3412}` of lengths 0,1,2,2,3,4 with the six
  displayed covers; the recurrence gives `μ(1234,3412)=0`, while
  `(-1)^{ℓ(3412)-ℓ(1234)}=1`; the refuted indiscriminate claim is displayed and
  the exact dropped hypothesis is identified as fullness, since `1432≤3412` by
  the subword criterion while `1432∉W^{s₁,s₃}`. The finite data match the
  Step-3a review's independent enumeration. Statement `ai-generated` with
  `generation.role: counterexample`; no item depends on it.
- Suppliers read on disk: `def-cg-parabolic-quotient-and-two-sided-minima` (2)
  [F1]; `thm-cg-bruhat-parabolic-projection-and-quotients` (3) [F2];
  `thm-cg-bruhat-subword-characterization` (1) [F3];
  `thm-hh-parabolic-minimal-representatives-and-length-additivity` (4) [F4];
  `lem-poset-mobius-recurrence` [F5]; `thm-cg-bruhat-eulerian-intervals-and-mobius`
  (ii),(iv) [F6],[F7]. Checks: precheck PASS, rendercheck OK, proof-layout 0
  defects. Choice-free.

### 7. `ex-cg-s4-rank-three-interval-mobius-from-recurrence` (B, level 20) — complete

- Verification recomputes all `[e,2341]` data locally (eight elements, twelve
  covers, three atoms, three rank-two elements, six label words): the Step-3a
  §6.1 repair is in place — the deps edge on the `ai-generated` B1 statement
  `ex-cg-s4-rank-three-interval-chain-labels-and-lex-first-chain` is gone and
  steps 1.1/4.1 recompute the needed cover list and label words, so no
  `ai-generated` statement is a dependency target. The recurrence gives
  `μ(1234,2341)=−1=(−1)³`, the parity balance is 4 even/4 odd, and the
  falling-chain formula through the shelling theorem gives the same value, with
  `(3,2,1)` the unique strictly falling word. Suppliers read on disk:
  `thm-cg-bruhat-lifting-and-cover-criterion` (3) [F2],
  `thm-cg-bruhat-subword-characterization` (1) [F1],
  `lem-cg-bruhat-chain-refinement-and-gradedness` (3) [F12],
  `lem-cg-lexicographic-chain-shelling-and-mobius-cancellation` (ii) [F10],
  `def-cg-finite-lattice-congruence-and-interval-projections` (3) [F6],
  `lem-poset-mobius-recurrence` [F4], `thm-cg-bruhat-eulerian-intervals-and-mobius`
  (i)–(iii) [F7],[F8],[F9]. Checks: precheck PASS, rendercheck OK, proof-layout
  0 defects. Choice-free.

### Pages — authored

- `library/coxeter-groups/bruhat-interval-labels-shellings-and-mobius-functions.md`:
  `items` list set to the four A items in dependency order; prose rewritten to
  summarise the labelling caveats (fixed expression, chain-dependence, no
  independence claim), the rank-two/lex-first/local-descent input, the full
  earlier/later shelling comparison with the rank ≤ 2 conventions, the
  cancellation-first Eulerian proof with the falling-chain form, the
  quotient-scope refusal, the two required earlier pages and the choice-freedom.
- `library/coxeter-groups/bruhat-interval-labels-shellings-and-mobius-functions-examples.md`:
  `examples` list set to B1, B2, C1; prose states the dependency-leaf status, the
  finite `S₄` computations, the letter-shift declaration and the fullness
  boundary.
- rendercheck on both pages: OK. depcheck names neither page.

### Cross-batch reconciliation

- `research/frontier-42-coxeter-32-batch-16.cross-batch-dependencies.json`: all
  50 rows (48 item edges over 13 distinct in-run suppliers + the two page
  prerequisites) now carry clause-level `verified` evidence naming the Facts
  labels and proof steps of the actual use. Four rows were added because
  authoring introduced cross-batch edges absent from the Step-1 input:
  `ex-cg-s4-rank-three-interval-chain-labels-and-lex-first-chain →
  def-cg-finite-lattice-congruence-and-interval-projections`,
  `ex-cg-s4-rank-three-interval-mobius-from-recurrence →
  def-cg-finite-lattice-congruence-and-interval-projections`,
  `…-mobius-from-recurrence → thm-cg-bruhat-lifting-and-cover-criterion`,
  `…-mobius-from-recurrence → thm-cg-bruhat-subword-characterization`.
  No row was removed; no sibling row is touched (batch 16 is this pair alone).
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-42-coxeter-32`:
  refreshed; the unified ledger holds 50 batch-16 edges, 0 unreviewed, and all
  32 batch inputs are present. Run-wide `--require-reviewed` still fails on 36
  unreviewed declared edges owned by other batches (e.g. batch 28
  `ex-cg-distributive-weak-intervals-of-fully-commutative-elements →
  def-hh-coxeter-matrix-word-group-and-length`); none is a batch-16 edge and
  none is this pair's obligation.

### Checks actually run (2026-10-07, this pass)

| check | command | result |
|---|---|---|
| proof format | `node tools/tsx-run.mjs tools/precheck.mts items/<7 paths>` | `6 checked, 0 failing` (definition n/a) |
| layout after final edits | `node tools/proof-layout.mjs items/<7 paths>` | `7 items, 37 steps, 0 defects` |
| rendering | `node tools/rendercheck.mjs items/<7> library/<2 pages>` | OK — 9 files |
| content policy (pair scope) | `node tools/content-policy.mjs research/frontier-42-coxeter-32-batch-16.pages.json` | `7 scoped item(s), 0 error(s), 0 warning(s)` |
| content policy (run scope) | `node tools/content-policy.mjs research/frontier-42-coxeter-32-batch-*.pages.json` | 111 errors, none naming a pair item (all `scope-item-missing`/`generated-role` in sibling batches) |
| dependency levels | `node tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` | `303 item(s) checked`, no error naming a pair item |
| manifest deps | `node tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-*.pages.json` | `303 item(s), 0 normalized, 0 error(s)` |
| depcheck (frontier scope) | `node tools/frontier-item-gate.mjs --run … --tool depcheck` | 188 errors, none naming a pair item |
| fwdcheck / extcheck / prosecheck | `… --tool fwdcheck/extcheck/prosecheck` | 159/101 errors (prosecheck aborts on a missing sibling carrier), none naming a pair item |
| depsource | `… --tool depsource` | OK — 0 unresolved; the pair's edges resolve to their supplier pages |
| pathcheck | `… --tool pathcheck` | OK — 0 errors, 0 warnings |
| validate-plan | `… --tool validate-plan` | 4 errors, all `undeclared-prereq` in sibling pairs (`generic-coxeter-hecke-algebras…`, `tits-cones…`, `coxeter-artin-and-hecke-interfaces`); none in this pair |
| dependency ledger | `node tools/frontier-dependency-ledger.mjs refresh --run frontier-42-coxeter-32` | refreshed, batch-16 edges all reviewed |

The pre-splice run-wide joins (validate-plan, depcheck, fwdcheck, extcheck,
prosecheck, content-policy, item decisions) cannot pass while sibling batches
are mid-flight; every remaining failure names only other batches' unfinished
carriers, and every check that this pair can complete passes for its seven items
and two pages.

### Item decisions

All seven original scaffold IDs were recorded with `tools/step3-decisions.mjs
record-item --decision accept --confidence 1` and their full examined
dependency lists (14, 12, 11, 14, 13, 12, 16 IDs), after the supplier
reconciliation above:

`research/frontier-42-coxeter-32-step3b-review-<id>.json` for
`def-cg-deletion-chain-labels-and-shelling`,
`lem-cg-bruhat-increasing-chain-and-local-descent-replacement`,
`thm-cg-bruhat-deletion-label-shelling`,
`thm-cg-bruhat-eulerian-intervals-and-mobius`,
`ex-cg-s4-rank-three-interval-chain-labels-and-lex-first-chain`,
`cex-cg-parabolic-quotient-interval-eulerian-claim-fails`,
`ex-cg-s4-rank-three-interval-mobius-from-recurrence`.

`node tools/step3-decisions.mjs check --run frontier-42-coxeter-32 --phase final`
reports `accepted 7` and no work entry for any pair item (run-wide closure is
still pending the other authors' decisions). No earlier escalation receipt
existed, so no owner resolution was needed; no `--owner` flag and no
judge/audit stamp was used.

### Step-3a findings disposition

- §6.1 (B2 → B1 ai-generated dependency): **repaired** — the edge is gone and
  B2's steps 1.1/4.1 recompute the cover list and the six label words locally.
- §6.2 (the word "facet"): **addressed** — the A definition now says "its
  maximal simplices under inclusion".
- §6.3 (0-based published `Sₙ` versus 1-based display): **addressed** — the
  dictionary is declared once in B1 and referenced in B2.
- §6.4 (lifting case in the Eulerian strategy): **resolved** — the authored
  proof uses case (a) for the pairs `(u,z)`/`(z,u)` and `(z,v)` as in the
  batch-12 table; no case (d) use remains.

### Open obligations, escalations, published concerns

- No open mathematical obligation remains for this pair: every direct supplier
  carrier exists on disk with `precheck: pass`, the used clauses were read, the
  consumers' uses were checked against them, and all seven decisions are
  `accept` with confidence 1. Earlier checkpoint escalations (items 1–2 written
  against not-yet-existing batch-2/4/5/10/12 carriers) are discharged.
- The accept receipts are closure-sensitive by design: any later edit to a
  transitive supplier carrier invalidates the recorded hash, and the Step-3
  pre-gate recertification must re-record the affected items at drained state.
- No item or page was added; no new supplier was created; the pair stays within
  the batch-16 manifest (4 A + 3 B items; pages' lists now carry them).
- No published item was edited, and no published defect was confirmed or
  suspected in the suppliers consumed by this pair (the published definitions
  and the Möbius recurrence were re-read and match their uses). The two source
  observations recorded in the batch notes (Zhao's printed `=1` read as parity
  balance; the Björner–Brenti appendix facts not consumed) remain the only
  source caveats and are already carried in the item source locators.
- Reported for Step 4: none — no plan/prose amendment is required; `validate-plan`
  shows no pair-level mismatch and the page `items`/`examples` lists now match
  the manifest rows.

## Continuation — retry dispatch `step3b-pair-…-aa6ec20df767fba9` (2026-10-07, 21:13 local / 10:13Z)

This pass resumed from disk. All seven carriers and both pages written by the
earlier passes were present; the seven item receipts had gone stale
(`step3-decisions check --phase final` listed every owned item as "current item
audit required") because the direct supplier pages had been re-authored in the
current wave: batch 12 (`bruhat-subword-order-and-lifting`) was rewritten at
21:12–21:17 and its re-dispatch reported `exit=0` at 10:22:45Z, batch 5
(`finite-lattice-projections-and-coxeter-chain-labels`) at 21:06 with
`exit=0` at 10:13:02Z, batch 2
(`coxeter-presentations-exchange-and-reduced-word-theorems`) at 21:07 and again
at 21:23:47 with its manifest at 21:24:57. No statement, manifest statement,
title, kind or dependency ID of this pair was changed in this wave; the
authored page lists and prose stand.

### Independent re-audit (dependency order)

Every owned item was re-read in full at its current content, together with the
current carrier of every supplier it cites, in the dispatched order
(levels 16, 17, 18, 19, 19, 20, 20):

1. `def-cg-deletion-chain-labels-and-shelling` — clauses (1)–(5), the
   well-definedness recursion (cover criterion and reflection deletion of
   `thm-cg-bruhat-lifting-and-cover-criterion` (3), re-read verbatim), the
   fixed-expression and chain-dependence caveats, the shelling criterion with
   the "maximal simplices under inclusion" clarification, and the (N)/(L)
   abstention paragraph are all intact and supported by the current suppliers.
2. `lem-cg-bruhat-increasing-chain-and-local-descent-replacement` — steps
   1.1–5.1 were re-checked line by line: the cancellation identity (1.1), the
   augmentation construction of the increasing rank-two chain (1.2), the
   prefix/suffix lexicographic minimality (1.3), the uniqueness induction
   (2.1), the mirrored falling chain and its uniqueness (2.2, 3.1), the
   lex-first chain (3.2), the diamond count (4.1) and the local descent
   replacement (5.1). The augmentation use matches Björner–Brenti Lemma 2.2.1
   and the current `lem-cg-bruhat-right-exchange-and-augmentation` (2)
   verbatim; the inversion transport of the mirror uses only the inversion
   order isomorphism and length preservation, both re-read.
3. `thm-cg-bruhat-deletion-label-shelling` — (i)–(iv) and steps 1.1–3.1: (N)
   and (L) from the leveled lemma, the label-word-determines-the-chain fact,
   the empty/rank-one/rank-two conventions, the abstract comparison lemma [F7]
   and endpoint removal [F8] quoted from the current batch-5 carrier, and the
   bijection between maximal chains of `[u,v]` and of `(u,v)` by the grading.
4. `thm-cg-bruhat-eulerian-intervals-and-mobius` — (i)–(iv) and steps 1.1–5.1:
   the descent-paired involution (Case 1), the reduction to the strip with
   `B=[u',v']∖[u,v']` (Case 2), the induction on `ℓ(a)+ℓ(b)`, the Möbius
   recurrence uniqueness, and the falling-chain count one through the shelling
   theorem; every lifting use is case (a) of the current batch-12 table at the
   pairs `(u,z)`/`(z,v)` (Step-3a §6.4 disposition confirmed again).
5–7. The three B items — the finite `S₄` data (eight elements, twelve covers,
   six maximal chains with words the six permutations of `{1,2,3}`, unique
   increasing/lex-first chain `(1,2,3)`, unique strictly falling chain
   `(3,2,1)`, `μ(1234,2341)=−1`, parity balance `4/4`, the quotient
   `W^{s₁,s₃}` with `μ(1234,3412)=0≠(−1)^4` and the fullness witness
   `1432`) were re-verified; they match the Step-3a independent enumeration and
   the current suppliers.

**Source verification (this pass).** The Björner–Brenti PDF was re-fetched
(4,320,702 bytes) and read in the extracted full text at the exact locators
used by these items: §2.2, printed pp. 33–34 (Lemma 2.2.1 and its proof: the
deleted positions `i₁<…<i_k` with `i_k` minimal, the reflection
`t=s_q⋯ŝ_{i_k}⋯s_q`, and the displayed word for `ut` obtained by deleting only
`i₁,…,i_{k−1}`), §2.7, printed pp. 48–51 (the induced label `λ(m)`; Lemma
2.7.2 with the cancellation computation `ℓ(x'_{k−1}) ≤ ℓ(u)−1`; Lemma 2.7.3
with the diamond and the extremal choices, `i<j≤p`; Lemma 2.7.4(ii) with the
prefix/suffix lexicographic-minimality observations; Theorem 2.7.5 with the
first-divergence replacement `k∩m=m∖{x_e}⊇m′∩m`), and §2.7, printed pp. 52–53
(Corollaries 2.7.10–2.7.11). The authored arguments follow these proofs in the
full-interval (rooted) specialization the pair promises; the quotient case is
used only by the counterexample, which cites the quotient chain property of the
earlier page. The independence and fixed-expression caveats of the labeling are
stated exactly as the source uses them (BB fix one reduced word of the top and
restrict labels to quotient chains, never comparing labels from different
fixed words).

### Repairs made in this pass (minimal, local)

1. `lem-cg-bruhat-increasing-chain-and-local-descent-replacement`, [F9]: the
   quoted text of `thm-hh-parabolic-minimal-representatives-and-length-additivity`
   (3) had gone stale when that supplier was rewritten; the quote was refreshed
   to the current sentence ("By inversion ($w\mapsto w^{-1}$ preserves lengths
   and interchanges the two coset families …)").
2. The three B items' [F3]/[F4] quotes of the type-A clause (4) of the same
   supplier were refreshed to the current text (which now carries the
   order-preserving letter-identification parenthetical), and the corresponding
   proof-contract quotes were matched.
3. `ex-cg-s4-rank-three-interval-mobius-from-recurrence`: the two sentences
   describing the elements below a rank-two element were made precise ("the
   elements of `[e,x]` other than `x` are exactly `e` and the two atoms it
   covers"), so the displayed sum `−(1−1−1)` is exactly the recurrence's.
4. `cex-cg-parabolic-quotient-interval-eulerian-claim-fails`: step 1.1 no
   longer asserts the maximality of `3412` ahead of its proof; step 2.1 now
   derives it from the six displayed covers ("these covers chain every element
   of `W^I` below `3412`; so `3412` is the greatest element …"), removing the
   only forward-looking claim of that item.
5. `research/frontier-42-coxeter-32-batch-16.proof-contracts.json`: the
   duplicated `F9 → lem-cg-bruhat-chain-refinement-and-gradedness` row of
   `thm-cg-bruhat-deletion-label-shelling` was deleted; the spurious
   `F14 → thm-cg-bruhat-subword-characterization` row of the Eulerian theorem
   (a source the fact neither links nor declares) was deleted and the remaining
   `F14 → thm-cg-bruhat-parabolic-projection-and-quotients` quote was aligned
   with the excerpt the item actually quotes. The strict contract gate is now
   clean (previously 7 errors: 4 quote mismatches, 1 duplicate, 2 undeclared
   source rows).
6. `research/frontier-42-coxeter-32-batch-16.cross-batch-dependencies.json`:
   all 50 rows (48 item edges over 13 in-run suppliers + 2 page prerequisites)
   were re-read against the current carriers and each row carries a dated
   current-pass re-verification note; no row was added, removed or downgraded,
   and no sibling row exists in this batch-16 input. The unified ledger was
   refreshed after the edit.

No statement, promised claim, dependency ID, title, kind or page list was
changed; the manifest statements hashed by the Step-3a scope receipts are
untouched.

### Checks actually run (final state, after all edits)

| check | command (prefix `node`) | result |
|---|---|---|
| proof format | `tools/tsx-run.mjs tools/precheck.mts items/<7 paths>` | `6 checked, 0 failing` (definition `n/a`) |
| rendering (items + pages) | `tools/rendercheck.mjs items/<7> library/<2 pages>` | OK — 9 files |
| proof layout after final edits (single batched command) | `tools/proof-layout.mjs items/<7 paths>` | `7 items, 37 steps, 0 defects` |
| content policy (pair scope) | `tools/content-policy.mjs research/frontier-42-coxeter-32-batch-16.pages.json` | `7 scoped item(s), 0 error(s), 0 warning(s)` |
| strict proof contracts | `tools/proof-contract.mjs research/frontier-42-coxeter-32-batch-16.proof-contracts.json --strict` | `0 error(s), 0 warning(s), 7/7 item(s) checked` |
| manifest deps | `tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-16.pages.json` | `7 item(s), 0 normalized, 0 error(s)` |
| dependency levels | `tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` | no error names a batch-16 item; the remaining errors name sibling pairs (`ex-cg-reducible-semidefinite-forms-are-factorwise`, and earlier in the pass `ex-cg-interval-realized-tree-versus-vertex-graph-metric`, `ex-cg-hexagonal-a2-cell-and-graph-distance`) |
| coverage | `tools/coverage-checklist.mjs research/frontier-42-coxeter-32-batch-16.coverage.json --require-destination` | `1 page(s), 21 harvested result(s), 0 error(s), 0 warning(s)` |
| plan (pair scope) | `tools/validate-plan.mjs research/plan-spec.json --pages-file /tmp/pair-pages.json` | page order acyclic and consistent; no item-level or prerequisite error; both pages carry no plan-spec item lists (expected for a new pair), so the item pass is vacuous |
| dependency ledger | `tools/frontier-dependency-ledger.mjs refresh --run frontier-42-coxeter-32` | refreshed and deduplicated; batch-16 edges all reviewed |
| item decisions | `tools/step3-decisions.mjs check --run frontier-42-coxeter-32 --phase final` | no work row names any of the seven owned items; run-wide closure still pending the other authors (27 accepted of 303 at the time of the run) |

### Item decisions (re-recorded)

All seven original scaffold IDs were recorded with
`tools/step3-decisions.mjs record-item --decision accept --confidence 1` and
their examined dependency lists (14, 12, 11, 14, 13, 12, 16 IDs) after the
supplier reconciliation above; the receipts are
`research/frontier-42-coxeter-32-step3b-review-<id>.json`. The two receipts
whose inputs were captured while the batch-2 manifest was being rewritten at
21:24:57 (definition and level-17 lemma) were re-recorded once the batch-2
items and manifest had settled, and `check --phase final` then reported no open
work row for any owned item. No `--owner` flag and no judge or audit stamp was
used.

### Step-3a findings disposition (unchanged, re-verified)

- §6.1 (B2's `ai-generated` dependency on B1): still repaired — B2 recomputes
  the cover list and the six label words in its own verification (steps
  1.1/4.1) and declares no edge to B1.
- §6.2 (the word "facet"): addressed — the A definition says "its maximal
  simplices under inclusion".
- §6.3 (published 0-based `Sₙ` versus the 1-based display): addressed — the
  dictionary is declared in B1 and referenced in B2 and the counterexample.
- §6.4 (lifting case in the Eulerian strategy): resolved — the authored proof
  uses case (a) only.

### Open obligations, escalations, published concerns

- No open mathematical obligation, no escalation and no owner-held decision
  remains for this pair. Every direct supplier carrier now exists on disk with
  `precheck: pass`; its used clause was re-read at the current content and the
  consumer's use was checked against it, and the strict contract gate verifies
  every recorded quote.
- The accept receipts are closure-sensitive by design: any later edit to a
  transitive supplier carrier (several sibling pairs are still authoring in
  this live wave) invalidates the recorded hash, and the engine's Step-3
  pre-gate recertification must re-record the affected items at drained state.
- Run-wide joins remain blocked only by sibling batches mid-flight (for
  example the `undeclared-prereq` plan errors and unreviewed declared edges of
  other batches); no run-wide failure names an item, page or edge of this pair.
- No item or page was added, no new supplier was created, and the pair remains
  exactly the batch-16 manifest (4 A + 3 B items; both page lists carry them).
- No published item was edited and no published defect was confirmed or
  suspected in the suppliers consumed by this pair. The two source
  observations recorded in the batch-16 notes (Zhao's printed `=1` read as
  parity balance; the Björner–Brenti appendix facts recorded as cited but not
  consumed) remain the only source caveats, and they are carried in the item
  source locators.
- Reported for Step 4: none — `validate-plan` shows no pair-level mismatch and
  the page `items`/`examples` lists match the manifest rows.

### Handoff summary

Completed IDs: `def-cg-deletion-chain-labels-and-shelling`,
`lem-cg-bruhat-increasing-chain-and-local-descent-replacement`,
`thm-cg-bruhat-deletion-label-shelling`,
`thm-cg-bruhat-eulerian-intervals-and-mobius`,
`ex-cg-s4-rank-three-interval-chain-labels-and-lex-first-chain`,
`cex-cg-parabolic-quotient-interval-eulerian-claim-fails`,
`ex-cg-s4-rank-three-interval-mobius-from-recurrence`; both pages authored.
Checks actually run: the ten checks tabulated above, all pair-scoped, all
passing for this pair. Added suppliers: none. Published concerns: none. Open
obligations: none, beyond the run-level fact that a later supplier edit
invalidates the closure-sensitive receipts and must be re-recorded by the
engine's recertification pass.

### Additional scoped joins (frontier-item-gate, this pass)

- `--tool depcheck`: FAILs on sibling diagnostics only; a grep of the output
  finds zero occurrences of the seven owned item IDs (the two lines naming the
  pair's pages are the informational order listing).
- `--tool fwdcheck`: FAILs with 78 `focus-item-unknown` and 45
  `link-unplanned` diagnostics, all on sibling items; the seven owned items
  appear only in the informational list of items that rest on later material
  ("inherited"), which is the expected state of a frontier leaf pair.
- `--tool extcheck`: FAILs on sibling items only; no owned item is referenced.
- `--tool depsource`: OK — `0 unresolved; 1973 dep(s) link to a published page,
  117 to an earlier planned page, 1765 to neither`.
- `--tool pathcheck`: OK — `2 pathway files checked, 0 errors, 0 warnings`.
- `--tool validate-plan` (run mode): FAILs only on sibling items absent from
  the selected plan pages; the pair-scoped invocation above is clean.
- `--tool prosecheck`: cannot complete in this live wave — it aborts reading
  the missing sibling carrier
  `items/cex-cg-rank-two-inversion-set-violating-closure.md`; the owned carriers
  all exist and pass their own checks.

None of these run-level failures names an item, page or edge of this pair, and
all of them are owned by sibling batches still authoring in the current wave.
