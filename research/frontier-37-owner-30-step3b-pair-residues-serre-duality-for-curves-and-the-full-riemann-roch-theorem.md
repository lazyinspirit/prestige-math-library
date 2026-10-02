# Step 3b authoring record — Residues, Serre duality, and the full Riemann–Roch theorem

- Run: `frontier-37-owner-30`
- Pair: A `residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem`; B `residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem-examples`
- Batch: 8
- Scope source: `research/frontier-37-owner-30-step3b-pair-residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem-180e6fd81944c89d.task.md`; scope review `research/frontier-37-owner-30-step3a-pair-residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem.md` (decision: sufficient)
- This file is the checkpoint required by the dispatch. It records verifiable state only; it is not an item approval or a review.

## Initial state (entry checkpoint)

- The dispatch enumerates 58 owned item IDs (47 A, 11 B). Disk inventory at entry: 40 item files present, 18 absent. The absent IDs are exactly the ones marked `missing` in the inventory below.
- The two page files `library/scheme-theory/residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem.md` and `...-examples.md` exist as drafts written during this dispatch.
- `research/frontier-37-owner-30-batch-8.proof-contracts.json` holds 12 contract entries at entry; contract coverage of the remaining authored items is part of this dispatch's workload.
- Precheck was run over the 40 present item files at entry: 34 proof-bearing files checked, 0 failing (the six definition/remark files carry no phase body).
- Known unfinished in-run suppliers consumed by this pair (to be flagged, not waited on): `cor-existence-rational-function-bounded-pole`, `cor-smooth-proper-curve-finite-map-projective-line` (batch 6), `cor-twist-exact-sequence-effective-divisor` (batch 5), `def-index-speciality-divisor`, `def-riemann-roch-space-of-divisor`, `thm-line-bundle-rational-section-cartier-divisor` (batches 5/7/6). Items consuming these are authored but their decisions stay escalated until the suppliers and exact proof uses are reconciled.
- Method: work in ascending scaffold dependency level; author/audit one item, run precheck, write its proof contract, checkpoint here, then advance. Never use a later item to justify an earlier one.

## Owned inventory (generated dependency order)

[x] `lem-uniformizer-differential-is-a-basis` (level 2; lemma) — authored; precheck PASS; contract strict 0 errors; decision accept recorded; supplier `thm-local-ring-smooth-curve-dvr` is an in-flight batch-6 draft, flagged for reconciliation
[x] `def-residue-rational-differential-curve-point` (level 3; definition) — authored; rendercheck OK; contract strict 0 errors; decision accept recorded; supplier `thm-local-ring-smooth-curve-dvr` in-flight, flagged
[x] `lem-residue-independent-uniformizer` (level 4; lemma) — authored; precheck PASS; contract strict 0 errors; decision accept recorded; supplier `thm-local-ring-smooth-curve-dvr` in-flight, flagged
[ ] `lem-residue-exact-differential-zero` (level 5; lemma) — missing; author and contract
[x] `lem-finite-potent-trace-existence-and-uniqueness` (level 0; lemma) — existing draft; read in full; precheck PASS; rendercheck OK; contract strict 0 errors; decision accept recorded
[x] `def-commensurable-subspaces-and-ideals-of-endomorphisms` (level 1; definition) — existing draft; read in full; rendercheck OK; contract strict 0 errors; decision accept recorded
[x] `lem-finite-potent-trace-linearity-and-conjugation` (level 2; lemma) — existing draft; read in full; precheck PASS; rendercheck OK; contract strict 0 errors; decision accept recorded
[x] `lem-e-ideals-and-commutator-trace` (level 3; lemma) — existing draft; read in full; precheck PASS; rendercheck OK; contract strict 0 errors; decision accept recorded
[x] `thm-abstract-residue-exists-unique` (level 4; theorem) — existing draft; read in full; precheck PASS; rendercheck OK; contract strict 0 errors; decision accept recorded
[x] `lem-abstract-residue-basic-properties` (level 5; lemma) — authored; precheck PASS; contract strict 0 errors; decision accept recorded; general Tate (R4) restored; statement (2) wording reconciled against the manifest (open obligation row below)
[ ] `lem-abstract-residue-additivity` (level 5; lemma) — missing; author and contract
[ ] `lem-abstract-residue-trace-under-finite-free-extension` (level 5; lemma) — missing; author and contract
[ ] `cor-coefficient-trace-residue-agreement` (level 6; corollary) — missing; author and contract
[x] `lem-adelic-quotient-computes-h1-structure-sheaf` (level 2; lemma) — existing draft read in full; precheck PASS; rendercheck OK; contract strict 0 errors; decision accept recorded
[x] `thm-global-residue-theorem-algebraic-curve` (level 7; theorem) — existing draft read in full; [F4]/step 2.1 reconciled to the valid continuity hypothesis (see obligation row); precheck PASS; rendercheck OK; decision accept recorded
[x] `def-principal-parts-sheaf-line-bundle-curve` (level 6; definition) — existing draft; audit and preserve if complete
[x] `lem-principal-parts-cech-h1-presentation` (level 7; lemma) — existing draft; audit and preserve if complete
[x] `def-residue-pairing-principal-parts` (level 8; definition) — existing draft; audit and preserve if complete
[x] `lem-residue-pairing-descends-cohomology` (level 9; lemma) — existing draft; audit and preserve if complete
[ ] `lem-residue-pairing-functorial-line-bundle` (level 10; lemma) — missing; author and contract
[x] `lem-local-residue-annihilator-regular-sections` (level 7; lemma) — existing draft; audit and preserve if complete
[ ] `lem-global-residue-pairing-injective-left` (level 10; lemma) — missing; author and contract
[x] `lem-twisting-sheaf-projective-space-ample` (level 0; lemma) — authored; precheck PASS; contract strict 0 errors; decision accept recorded
[ ] `cor-projective-embedding-every-smooth-proper-curve` (level 20; corollary) — missing; author and contract
[ ] `lem-global-residue-pairing-dimension-balance` (level 21; lemma) — missing; author and contract
[ ] `thm-serre-duality-curves-line-bundles` (level 22; theorem) — missing; author and contract
[ ] `thm-serre-duality-curves-vector-bundles` (level 21; theorem) — missing; author and contract
[ ] `thm-serre-duality-curves-coherent-sheaves` (level 22; theorem) — missing; author and contract
[ ] `cor-h1-line-bundle-dual-sections` (level 23; corollary) — missing; author and contract
[x] `thm-full-riemann-roch-divisor` (level 24; theorem) — existing draft; audit and preserve if complete
[x] `cor-h0-canonical-differentials-genus` (level 23; corollary) — existing draft; audit and preserve if complete
[x] `cor-canonical-degree-two-g-minus-two` (level 25; corollary) — existing draft; audit and preserve if complete
[x] `cor-h1-line-bundle-vanishes-degree-over-two-g-minus-two` (level 26; corollary) — existing draft; audit and preserve if complete
[x] `cor-rr-exact-high-degree-formula` (level 27; corollary) — existing draft; audit and preserve if complete
[x] `thm-degree-two-g-line-bundle-basepoint-free` (level 28; theorem) — existing draft; audit and preserve if complete
[x] `thm-degree-two-g-plus-one-line-bundle-very-ample` (level 29; theorem) — existing draft; audit and preserve if complete
[x] `def-hyperelliptic-curve` (level 7; definition) — existing draft; audit and preserve if complete
[x] `thm-canonical-map-nonhyperelliptic-curve` (level 26; theorem) — existing draft; audit and preserve if complete
[x] `thm-adjunction-smooth-plane-curve` (level 0; theorem) — authored; precheck PASS; contract strict 0 errors; decision accept recorded
[x] `cor-genus-degree-smooth-plane-curve` (level 26; corollary) — existing draft; audit and preserve if complete
[x] `lem-degree-pullback-divisor-finite-morphism-curves` (level 10; lemma) — existing draft; audit and preserve if complete
[x] `thm-riemann-hurwitz-complete` (level 26; theorem) — existing draft; audit and preserve if complete
[x] `cor-unramified-cover-curves-genus-complete` (level 27; corollary) — existing draft; audit and preserve if complete
[x] `thm-genus-one-canonical-bundle-trivial` (level 26; theorem) — existing draft; audit and preserve if complete
[x] `cor-degree-three-line-bundle-embeds-genus-one-plane-cubic` (level 30; corollary) — existing draft; audit and preserve if complete
[x] `rem-duality-trace-normalization` (level 24; remark) — existing draft; audit and preserve if complete
[x] `rem-general-serre-duality-deferred` (level 23; remark) — existing draft; audit and preserve if complete
[x] `ex-residue-projective-line` (level 25; example) — existing draft; audit and preserve if complete
[x] `ex-serre-duality-projective-line-twists` (level 26; example) — existing draft; audit and preserve if complete
[x] `ex-full-rr-projective-line` (level 26; example) — existing draft; audit and preserve if complete
[x] `ex-genus-one-rr-degree-positive` (level 28; example) — existing draft; audit and preserve if complete
[x] `ex-plane-cubic-canonical-trivial` (level 31; example) — existing draft; audit and preserve if complete
[x] `ex-plane-quartic-canonical-hyperplane` (level 27; example) — existing draft; audit and preserve if complete
[x] `cex-canonical-map-hyperelliptic-not-embedding` (level 27; counterexample) — existing draft; audit and preserve if complete
[x] `cex-degree-two-g-minus-one-not-always-basepoint-free` (level 29; counterexample) — existing draft; audit and preserve if complete
[x] `cex-degree-two-g-not-always-very-ample` (level 30; counterexample) — existing draft; audit and preserve if complete
[x] `ex-riemann-hurwitz-double-cover` (level 27; example) — existing draft; audit and preserve if complete
[x] `ex-residue-pairing-one-cocycle` (level 25; example) — existing draft; audit and preserve if complete
## Progress log

- Entry checkpoint written before further authoring.
- 11:11:46 `lem-twisting-sheaf-projective-space-ample` — authored; precheck PASS; contract strict 0 errors; item decision accept recorded.
- 11:11:46 `thm-adjunction-smooth-plane-curve` — authored; precheck PASS; contract strict 0 errors; item decision accept recorded.
- 11:13:22 `lem-uniformizer-differential-is-a-basis` — authored; precheck PASS; contract strict 0 errors; decision accept recorded; supplier thm-local-ring-smooth-curve-dvr is an in-flight batch-6 draft, flagged for reconciliation.
- 11:41:18 `lem-abstract-residue-basic-properties` — authored; general Tate (R4) two-term formula restored in full (steps 1.2, 2.2, 3.3, 4.6, 5.4) instead of only the gA⊆A special case; precheck PASS; rendercheck OK; contract strict 0 errors; item decision accept recorded. `def-vector-space` added to frontmatter deps and to the batch-8 manifest deps (cited in F1); depcheck no longer reports cited-not-in-deps.
- 11:43:37 `lem-residue-independent-uniformizer` — authored/audited; precheck PASS; rendercheck OK; contract strict 0 errors; item decision accept recorded.
- 11:43:42 `def-residue-rational-differential-curve-point` — authored/audited; definition (no proof body); rendercheck OK; contract strict 0 errors; item decision accept recorded; well-definedness carried by the justified_by lemma.
- 11:44 Consumer maintenance on this pair: `ex-serre-duality-projective-line-twists` cited `lem-residue-independent-uniformizer` in [F4] without listing it; dep added to frontmatter and to the batch-8 manifest, and a two-line display formula joined to one source line (rendercheck now OK).
- 11:44:43/11:44:47 Decision refresh: `lem-twisting-sheaf-projective-space-ample` and `lem-uniformizer-differential-is-a-basis` were re-recorded after the 11:16Z item/manifest update invalidated the earlier receipts; both items were re-read in full and passed precheck, rendercheck and the strict proof-contract check again. With this, all six authored items of this checkpoint's foundation slice are closed in the Step 3 final check (`step3-decisions check --phase final`).
- 11:54 Rendercheck repairs (consumer maintenance, no mathematical change) on five pre-existing items of this pair whose display math spanned two source lines: `def-residue-pairing-principal-parts`, `def-principal-parts-sheaf-line-bundle-curve`, `lem-residue-pairing-descends-cohomology`, `lem-local-residue-annihilator-regular-sections`, `ex-residue-pairing-one-cocycle`. All five now pass rendercheck; precheck for the proof-bearing ones is PASS. None had a current item decision, so no receipt was invalidated.
- 11:54 Flagged to the sibling authors (messages to `author_core_residues` and `author_pairing_duality`): their items `lem-residue-pairing-functorial-line-bundle` (3), `lem-global-residue-pairing-injective-left` (1), `lem-abstract-residue-trace-under-finite-free-extension` (1), `lem-abstract-residue-additivity` (1), `cor-coefficient-trace-residue-agreement` (1) still fail rendercheck with multiline displays; each edit will invalidate the decision already on disk, so the repairs must be followed by a decision re-record.
- 11:51:15-11:51:24 Foundation audit complete: the five level-0..4 suppliers of the abstract residue chain (`lem-finite-potent-trace-existence-and-uniqueness`, `def-commensurable-subspaces-and-ideals-of-endomorphisms`, `lem-finite-potent-trace-linearity-and-conjugation`, `lem-e-ideals-and-commutator-trace`, `thm-abstract-residue-exists-unique`) were read in full, re-checked (precheck/rendercheck/proof-contract strict, all clean) and given accept decisions. Together with the six items above, this closes the whole linear-algebra/residue foundation of the pair in `step3-decisions check --phase final`.
- 11:52 Pair state (sibling work, verified on disk): sibling authors recorded decisions for `lem-residue-exact-differential-zero`, `lem-abstract-residue-additivity`, `lem-abstract-residue-trace-under-finite-free-extension`, `cor-coefficient-trace-residue-agreement` (accept) and `lem-residue-pairing-functorial-line-bundle` (escalate: supplier `cor-twist-exact-sequence-effective-divisor` not on disk), and wrote `cor-projective-embedding-every-smooth-proper-curve`, `lem-global-residue-pairing-dimension-balance`, `thm-serre-duality-curves-vector-bundles`. Their files currently carry 10 multiline-display rendercheck defects (functorial 3, vector-bundles 2, injective-left 1, dimension-balance 1, trace-under-finite-free-extension 1, additivity 1, coefficient-trace 1); none of the 11 closed items of this checkpoint carries a rendercheck defect. Still absent on disk: `thm-serre-duality-curves-line-bundles`, `thm-serre-duality-curves-coherent-sheaves`, `cor-h1-line-bundle-dual-sections` (sibling slice, in flight).
- 11:53:34/11:53:39 The global residue chain completed: `lem-adelic-quotient-computes-h1-structure-sheaf` and `thm-global-residue-theorem-algebraic-curve` were read in full and given accept decisions. The (R2) consumer reconciliation is discharged: the theorem's [F4] and step 2.1 had cited the continuity property in the manifest-literal form `fA+fgA+fg^{-1}A subset A` that the supplier does not assert; the item now cites the proved equivalent `fA subset A` and `gA subset A`, derived on the tail from the supplier's own tail inclusion. The only remaining (R2) divergence is the manifest `statement` field itself, which is deliberately left untouched because it is covered by the closed Step 3a scope hash; the item text is the authoritative mathematical statement.

### Open obligations carried by this checkpoint

- Update 11:53 (discharge of the (R2) consumer side): `thm-global-residue-theorem-algebraic-curve` [F4] and step 2.1 now cite the valid continuity hypothesis, and `cor-coefficient-trace-residue-agreement` already cites the valid form; only the manifest `statement` field keeps the scaffold wording, deliberately, because the closed Step 3a scope hash covers it (divergence recorded in the (R2) row below).
- (R2) wording reconciliation (owner of `lem-abstract-residue-basic-properties`): the manifest `statement` field promises "if $fA+fgA+fg^{-1}A\subseteq A$ then $\operatorname{res}_V(f\,\mathrm dg)=0$". That literal condition is not sufficient — it is satisfied by examples with nonzero residue (verified counterexample: in $B/C$ with $fa'''=\pi fa$ one gets $[\pi f,g]\equiv f(a'''-a')\neq0$) — while the equivalent valid form is $fA\subseteq A$ and $gA\subseteq A$, equivalently $fA+gA+fgA\subseteq A$. The item states and proves the valid form; a reconciliation row against the manifest `statement` field is owed in the pair report / manifest update for this item.
- The final formula promised for (R4) in the manifest is the $gA<A$ form $\operatorname{res}_V(fg^{-1}\mathrm dg)=\operatorname{Tr}_{A/(A\cap gA)}(m_f)-\operatorname{Tr}_{(A\cap gA)/gA}(m_{fg^{-1}})$; the item proves the equivalent $h=fg^{-1}$ form with $hA\subseteq A$ and records the $gA\subseteq A$, $h=1$ special case. No claim dropped; wording differs and is covered by the (R2)/(R4) reconciliation row.
- In-run suppliers flagged for reconciliation (not waited on): `cor-existence-rational-function-bounded-pole`, `cor-smooth-proper-curve-finite-map-projective-line` (batch 6), `cor-twist-exact-sequence-effective-divisor` (batch 5), `def-index-speciality-divisor`, `def-riemann-roch-space-of-divisor`, `thm-line-bundle-rational-section-cartier-divisor` (batches 5/7/6), `thm-local-ring-smooth-curve-dvr` (batch 6, in flight).

## Completion pass — provider-recovery resumption (22:24–23:0x local)

Scope: the owner direction `research/frontier-37-owner-30-owner-authoring-direction.md` (22:24)
authorises authoring resumption on current drafts. No file outside this pair's batch-8 scope was
edited: batches 5/9/16/19 and the batch-1 Markov items were left untouched, as were all sibling
pairs. All work below is on the 58 owned items and the batch-8 manifest/contract/ledger files.

### Decisions refreshed

- `lem-adelic-quotient-computes-h1-structure-sheaf` and
  `thm-global-residue-theorem-algebraic-curve`: the two accept receipts were re-recorded
  (2:37Z) after the 12:30Z supplier edit invalidated them; the items themselves were not edited
  since the full read recorded in the previous checkpoint. Both became stale again within minutes
  through concurrent sibling edits to dependency items/manifests (mtime-checked: no file of these
  two items' own inputs changed after the re-record; the moving parts are other batches' manifest
  entries). This is a mechanical refresh that must be the last write before freeze; it is not a
  mathematical re-open.
- Current pair decision state at handoff (final refresh 12:53:36Z): 17 accepted, 41 escalated
  (owner-held; `step3-decisions` refuses non-owner overwrite of an escalate), 0 pending. Both
  refreshed accepts verify as current (`closed=true`) at the final check; further concurrent
  sibling edits can invalidate the hashes again without touching these items, which is why the
  refresh must be re-run (mechanically) immediately before freeze.
- Exact cause of the repeated invalidation, traced on 12:52Z: the two accepts' transitive input
  closure (2249 and 2402 files respectively) contains `items/def-sheaf-total-quotient-rings.md`,
  an in-run supplier of both items that a sibling batch is actively rewriting (mtimes 22:36, then
  22:52:57, then 22:53:25). Every such edit invalidates the accept hash of both items even though
  neither item changed. The final 12:53:36Z receipts are current against the 22:53:25 revision;
  if the sibling edits that file again before the pair freezes, the refresh is a one-command
  mechanical re-record, not a new audit.

### Proof contracts written this pass (11, each strict-clean on its own item)

Each entry below was written from the completed item text: one citation per `[F#] -> [[source]]`
link, every numbered step mapped with its actual claim and its cited inputs, and all eight boundary
axes with item-specific dispositions. Command: `node tools/proof-contract.mjs
research/frontier-37-owner-30-batch-8.proof-contracts.json --strict --items <id>`.

- `cor-h0-canonical-differentials-genus` — 9 citations / 5 steps / 8 boundary rows.
- `cor-canonical-degree-two-g-minus-two` — 11 / 6 / 8.
- `thm-canonical-map-nonhyperelliptic-curve` — 20 / 16 / 8.
- `thm-riemann-hurwitz-complete` — 11 / 5 / 8.
- `cor-rr-exact-high-degree-formula` — 10 / 5 / 8.
- `ex-plane-quartic-canonical-hyperplane` — 14 / 5 / 8.
- `cex-canonical-map-hyperelliptic-not-embedding` — 10 / 6 / 8.
- `ex-riemann-hurwitz-double-cover` — 18 / 14 / 8.
- `thm-degree-two-g-plus-one-line-bundle-very-ample` — 18 / 7 / 8.
- `cor-degree-three-line-bundle-embeds-genus-one-plane-cubic` — 11 / 7 / 8.
- `thm-genus-one-canonical-bundle-trivial` — 9 / 6 / 8 (written after its blocker
  `cor-degree-zero-line-bundle-section-trivial` landed on disk at 22:43).

Batch-8 contract file after this pass: version 1, scope 49/58 owned items, every scope id has an
entry; `--strict` reports 0 errors, 0 warnings, 49/49 checked. `citation-fidelity
--fail-on-missing-quote` reports no widening candidates; `boundary-audit
--fail-on-template --fail-on-contradicted` reports 384 rows (228 n/a), no template cluster and no
contradicted disposition.

### Item-level repairs made while authoring (concrete defects, repaired in place)

1. `cex-canonical-map-hyperelliptic-not-embedding`, step 1.2: the source space was written
   "$(g+1)$-dimensional space $H^0(\mathbb P^1,\mathcal O(g-1))$" — this is false; with $m=g-1$
   one has $h^0(\mathbf P^1,\mathcal O(g-1))=g$, and the same step already calls the target space
   $g$-dimensional (as do the cited theorem's step 7.2 and the $g$ monomials $1,t,\dots,t^{g-1}$).
   The dimension was corrected to $g$. Item re-read after the edit; precheck and rendercheck clean.
2. `thm-degree-two-g-plus-one-line-bundle-very-ample`, step 1.1: the list of twists to which the
   high-degree formulas apply repeated "$L(-p)$" twice; the duplicate was removed. No other change.
3. Boundary worksheet repairs in the batch-8 contract file: item-specific `empty` dispositions for
   `thm-serre-duality-curves-coherent-sheaves` and `cor-h1-line-bundle-dual-sections` (the shared
   "C is a curve, hence nonempty" wording across three items was the boundary-audit template
   cluster), and for `lem-residue-pairing-functorial-line-bundle` the `empty` axis is now
   *checked* with evidence at steps 1.3/2.2/3.2 (the effective divisor $D=0$ gives an empty
   support and an empty sum; both sides vanish), which also cleared the contradicted-disposition
   candidate the audit had flagged on that item.

### Remaining 9 items without contracts — exact blockers (all are missing in-run suppliers)

A citation contract cannot be written or checked while a fact-linked supplier has no file on disk.
Each row: consumer <- missing fact-linked supplier (fact label, consuming steps) [owning batch]:

- `thm-full-riemann-roch-divisor` <- `def-invertible-sheaf-of-cartier-divisor` (F6, step 1.1) [5]
- `cor-h1-line-bundle-vanishes-degree-over-two-g-minus-two` <- `def-invertible-sheaf-of-cartier-divisor` (F5, steps 1.1, 2.1) [5]
- `thm-degree-two-g-line-bundle-basepoint-free` <- `def-invertible-sheaf-of-cartier-divisor` (F2, steps 1.1, 3.1); `cor-smooth-proper-curve-finite-map-projective-line` (F6, step 1.1) [5/6]
- `lem-degree-pullback-divisor-finite-morphism-curves` <- `def-pullback-cartier-divisor` (F4, steps 3.1, 4.1, 6.1); `lem-pullback-cartier-divisor-line-bundle` (F6, steps 3.1, 7.1) [5]
- `ex-full-rr-projective-line` <- `def-invertible-sheaf-of-cartier-divisor` (F1, step 1.1) [5]
- `ex-genus-one-rr-degree-positive` <- `def-invertible-sheaf-of-cartier-divisor` (F2, statement-only use); `cor-dimension-complete-linear-system` (F4, steps 2.2, 3.1) [5/7]
- `ex-plane-cubic-canonical-trivial` <- `thm-line-bundle-rational-section-cartier-divisor` (F3, step 2.1) [5]
- `cex-degree-two-g-minus-one-not-always-basepoint-free` <- `def-invertible-sheaf-of-cartier-divisor` (F1, steps 1.1, 2.1, 5.1) [5]
- `cex-degree-two-g-not-always-very-ample` <- `def-invertible-sheaf-of-cartier-divisor` (F1, steps 1.1, 2.2, 7.1) [5]

All nine items are fully authored, pass precheck, and stay escalated; when the named suppliers land
the contracts are mechanical to finish (citation quote + uses) and the strict check re-run. Note
the moving frontier: `cor-smooth-proper-curve-finite-map-projective-line` landed during this pass
(after the table's scan), so `thm-degree-two-g-line-bundle-basepoint-free` now blocks only on
`def-invertible-sheaf-of-cartier-divisor`; `cor-degree-zero-line-bundle-section-trivial` landed at
22:43 and unblocked `thm-genus-one-canonical-bundle-trivial`, whose contract was written.

### Escalated items and their direct missing suppliers (generated 23:0x from the current items)

```
OPEN lem-adelic-quotient-computes-h1-structure-sheaf
OPEN thm-global-residue-theorem-algebraic-curve
OPEN def-principal-parts-sheaf-line-bundle-curve
      declared-but-missing (no fact link): lem-principal-weil-divisor-locally-finite thm-line-bundle-rational-section-cartier-divisor
OPEN lem-principal-parts-cech-h1-presentation
OPEN def-residue-pairing-principal-parts
OPEN lem-residue-pairing-descends-cohomology
OPEN lem-residue-pairing-functorial-line-bundle
      declared-but-missing (no fact link): cor-twist-exact-sequence-effective-divisor
OPEN lem-local-residue-annihilator-regular-sections
OPEN lem-global-residue-pairing-injective-left
OPEN cor-projective-embedding-every-smooth-proper-curve
OPEN lem-global-residue-pairing-dimension-balance
OPEN thm-serre-duality-curves-line-bundles
OPEN thm-serre-duality-curves-vector-bundles
OPEN thm-serre-duality-curves-coherent-sheaves
OPEN cor-h1-line-bundle-dual-sections
      declared-but-missing (no fact link): thm-line-bundle-rational-section-cartier-divisor
OPEN thm-full-riemann-roch-divisor
      cite def-invertible-sheaf-of-cartier-divisor via F6 at steps 1.1
OPEN cor-h0-canonical-differentials-genus
OPEN cor-canonical-degree-two-g-minus-two
OPEN cor-h1-line-bundle-vanishes-degree-over-two-g-minus-two
      cite def-invertible-sheaf-of-cartier-divisor via F5 at steps 1.1,2.1
OPEN cor-rr-exact-high-degree-formula
OPEN thm-degree-two-g-line-bundle-basepoint-free
      cite def-invertible-sheaf-of-cartier-divisor via F2 at steps 1.1,3.1
OPEN thm-degree-two-g-plus-one-line-bundle-very-ample
OPEN def-hyperelliptic-curve
OPEN thm-canonical-map-nonhyperelliptic-curve
OPEN cor-genus-degree-smooth-plane-curve
OPEN lem-degree-pullback-divisor-finite-morphism-curves
      cite def-pullback-cartier-divisor via F4 at steps 3.1,4.1,6.1
      cite lem-pullback-cartier-divisor-line-bundle via F6 at steps 3.1,7.1
OPEN thm-riemann-hurwitz-complete
OPEN cor-unramified-cover-curves-genus-complete
OPEN thm-genus-one-canonical-bundle-trivial
OPEN cor-degree-three-line-bundle-embeds-genus-one-plane-cubic
OPEN rem-duality-trace-normalization
OPEN rem-general-serre-duality-deferred
OPEN ex-residue-projective-line
OPEN ex-serre-duality-projective-line-twists
OPEN ex-full-rr-projective-line
      cite def-invertible-sheaf-of-cartier-divisor via F1 at steps 1.1
OPEN ex-genus-one-rr-degree-positive
      cite def-invertible-sheaf-of-cartier-divisor via F2 at steps (none: statement-only)
      cite cor-dimension-complete-linear-system via F4 at steps 2.2,3.1
OPEN ex-plane-cubic-canonical-trivial
      cite thm-line-bundle-rational-section-cartier-divisor via F3 at steps 2.1
OPEN ex-plane-quartic-canonical-hyperplane
OPEN cex-canonical-map-hyperelliptic-not-embedding
OPEN cex-degree-two-g-minus-one-not-always-basepoint-free
      cite def-invertible-sheaf-of-cartier-divisor via F1 at steps 1.1,2.1,5.1
OPEN cex-degree-two-g-not-always-very-ample
      cite def-invertible-sheaf-of-cartier-divisor via F1 at steps 1.1,2.2,7.1
OPEN ex-riemann-hurwitz-double-cover
OPEN ex-residue-pairing-one-cocycle
```

(Snapshot note: the first two entries of that block are this pair's two sound accepts, which were
in stale-receipt state at scan time; both were refreshed at 12:52Z and verify `closed=true` at
handoff. Every other entry is a genuine owner-held escalation.)

Union of in-run suppliers this pair consumes that were still unauthored at this scan:
`thm-line-bundle-rational-section-cartier-divisor`, `lem-cartier-divisor-sheaf-invertible`,
`def-invertible-sheaf-of-cartier-divisor`, `def-effective-cartier-divisor`,
`lem-principal-weil-divisor-locally-finite`, `cor-twist-exact-sequence-effective-divisor`,
`lem-cartier-divisor-addition-tensor`, `lem-effective-cartier-divisor-exact-sequence`,
`thm-effective-cartier-divisor-closed-immersion`, `thm-cartier-weil-isomorphism-locally-factorial`,
`def-principal-weil-divisor-and-class-group`, `thm-cartier-divisors-mod-principal-to-picard`,
`def-linear-equivalence-cartier-divisors`, `def-principal-cartier-divisor`,
`lem-cartier-to-weil-respects-principal-and-addition`, `thm-cartier-to-weil-divisor-normal-scheme`,
`def-pullback-cartier-divisor`, `lem-pullback-cartier-divisor-line-bundle`,
`lem-finite-flat-curve-fibre-degree`, `cor-smooth-proper-curve-finite-map-projective-line`,
`lem-global-section-effective-divisor`, `cor-degree-descends-picard-curve`,
`thm-principal-divisor-degree-zero-proper-curve`, `cor-dimension-complete-linear-system`.
Every one is a batch-5/6/7 sibling item outside this dispatch's write scope; they are flagged here
for the owner, and no sibling file was edited.

### Checks actually run in this pass (exact commands and results)

- `node tools/tsx-run.mjs tools/precheck.mts <58 owned item paths>` — 51 checked, 0 failing.
- `node tools/rendercheck.mjs <58 items + the two owned pages>` — 60 files, no errors/warnings.
- `node tools/content-policy.mjs research/frontier-37-owner-30-batch-8.pages.json` — 58 scoped
  items, 0 errors, 0 warnings.
- `node tools/proof-contract.mjs research/frontier-37-owner-30-batch-8.proof-contracts.json
  --strict` — 0 errors, 0 warnings, 49/49.
- `node tools/boundary-audit.mjs <batch-8 contracts> --fail-on-template --fail-on-contradicted` —
  clean (no clusters, no contradicted candidates).
- `node tools/citation-fidelity.mjs <batch-8 contracts> --fail-on-missing-quote` — no widening
  candidates.
- `node tools/item-dependency-levels.mjs check --run frontier-37-owner-30` — 812 items, 60 pages,
  maximum level 24, exit 0 (manifest `dependency_level`s match the computed order).
- `node tools/validate-plan.mjs research/plan-spec.json` — OK: page order acyclic and consistent,
  no item-level cycles, forward references, B-page dependencies or unresolved ids among the 1300
  pages with item lists (367 planned pages still have no item list).
- Page/manifest consistency: A page frontmatter lists 47/47 manifest items; B page carries
  `items: []` plus `examples:` with 11/11 manifest examples (the schema convention for
  example pages).
- `node tools/depcheck.mjs` — FAIL run-wide; 151 distinct item files reported, 13 of them this
  pair's consumers; every failure is `[link-unresolved]`/counterpart for a supplier that has no
  file yet. Expected to clear as siblings land; no fixable defect local to this pair.
- `node tools/fwdcheck.mjs` — FAIL run-wide; 76 lines, 14 of them this pair's consumers, all
  `[link-unplanned]` for the same not-yet-authored suppliers (Step 4 has not spliced them into
  plan-spec).
- `node tools/extcheck.mjs` — OK (the one `[unproved-on-published]` line is
  `items/thm-urysohn-lemma.md`, not this pair's).
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-37-owner-30` — FAILS before
  reaching any batch-8 row: `items/lem-roots-of-unity-in-a-number-field-are-finite.md: justified_by
  must be an array` (line 24 is an empty `justified_by: `; that file is batch 3, page
  `dirichlets-unit-theorem-regulators-and-s-units`, outside this pair). The run-wide ledger gate is
  therefore red for a sibling defect; flag to owner / route to that pair's author. As a
  consequence the batch-8 cross-batch ledger was refreshed directly:
  `research/frontier-37-owner-30-batch-8.cross-batch-dependencies.json` holds 190 `verified`
  rows (supplier file on disk; statement read and matched to the consumer's use) and 17 `open`
  rows (supplier still absent, consumer flagged) at the final 23:3x scan, with sibling pairs' rows
  preserved untouched. Open suppliers at that scan: the two direct prerequisite pairs
  `riemann-roch-for-curves-via-euler-characteristics` and
  `smooth-proper-curves-divisors-genus-and-ramification` (page-level rows), plus
  `def-invertible-sheaf-of-cartier-divisor`, `thm-line-bundle-rational-section-cartier-divisor`,
  `lem-principal-weil-divisor-locally-finite`, `cor-dimension-complete-linear-system`,
  `def-pullback-cartier-divisor`, `lem-pullback-cartier-divisor-line-bundle` and
  `cor-twist-exact-sequence-effective-divisor`.
- `node tools/step3-decisions.mjs check --phase final` — run-wide not closed. For this pair at
  the final check (12:52Z): 17 closed accepts, 41 escalations, 0 pending; the two refreshed
  receipts were verified `closed=true` after the re-record.

### Published-consumer concerns

None found for this pair: all 58 owned items are drafts (`status: draft`) and no published item in
the library consumes them yet. The only defects found this pass are the two in-draft defects
repaired above (mathematical typo in a dimension; duplicated factor in a list). No suspicion of a
defect in any *published* item was raised.

### Open obligations carried forward

1. Nine contracts blocked on the named suppliers (table above); write them as soon as those files
   exist, then re-run the strict check, precheck and rendercheck for each.
2. `lem-adelic-quotient-computes-h1-structure-sheaf` and
   `thm-global-residue-theorem-algebraic-curve` were re-recorded at 12:52Z and both verify current
   at handoff. If any sibling edit lands before freeze, repeat the mechanical refresh
   (`node tools/step3-decisions.mjs record-item ... accept ...` with the item's dependency list) so
   the two accepts stay current.
3. (R2)/(R4) wording reconciliation rows from the previous checkpoint (manifest `statement`
   fields of `lem-abstract-residue-basic-properties` and the `gA<A` form of the two-term Tate
   formula) remain owed to the manifest-vs-item reconciliation in Step 4; the item texts are the
   authoritative statements and no claim was dropped.
4. The run-wide gates listed above (depcheck, fwdcheck, frontier-dependency-ledger) cannot go green
   until the sibling batches land and the batch-3 `justified_by` defect is repaired by its owner.
   This pair's own contribution to each failure is limited to the flagged missing suppliers.
5. The 41 escalated item decisions are owner-held; none was marked complete and no owner decision
   was overwritten.
