# Step 3b — pair tits-cones-chambers-and-parabolic-stabilizers

- Run: `frontier-42-coxeter-32` · role alpha-high · label
  `step3b-pair-tits-cones-chambers-and-parabolic-stabilizers-20429ceb1b2cde70`
  (third dispatch of this pair; earlier attempts `...-29cbf8618fc377b7` and
  `...-2df5876c204ef820` wrote the item carriers and this report's first entry
  checkpoint, then the run was paused at 09:22:38Z).
- A page: `tits-cones-chambers-and-parabolic-stabilizers` (order 1734, batch 9)
- B page: `tits-cones-chambers-and-parabolic-stabilizers-examples` (order 1735)
- Batches containing this pair: 9 only (the batch-9 manifest, coverage,
  contracts, ledger input and notes are this pair's, so no sibling rows exist
  in them).
- Owned IDs (dependency order): `def-cg-tits-cone-and-fundamental-chamber`
  (L11), `thm-cg-tits-cone-finite-negativity-and-convexity` (L12),
  `thm-cg-dual-chamber-intersections-and-point-stabilizers` (L12),
  `thm-cg-tits-cone-interior-and-local-finiteness` (L13),
  `ex-cg-tits-cone-of-infinite-dihedral-type` (L13),
  `ex-cg-chamber-face-stabilizers-in-a2` (L14),
  `ex-cg-outside-tits-cone-point-with-infinite-stabilizer` (L14).

## Entry checkpoint (open obligations)

(a) audit every carrier file against its exact suppliers and the current
formatting/contract rules, repairing defects; (b) verify the two page files
list exactly the seven items; (c) run precheck/rendercheck/prosecheck/pathcheck/
proof-layout/content-policy/coverage/manifest-integrity/source-fetch/
depcheck/fwdcheck/extcheck/depsource/item-dependency-levels/validate-plan and
the contract battery; (d) record `step3-decisions.mjs record-item` decisions
for the seven original scaffold IDs; (e) recheck the Step-3a finding 1
(batch-4 supplier clause `lem-cg-dual-action-and-chamber-faces-exist` (3)(ii)
union sentence) against the current inputs; (f) report at handoff.

Entry state verified on disk: all seven item carriers exist with statements
and drafted proofs (previous attempts), both page files exist and list
4 A items / 3 B examples, the batch-9 manifest and coverage exist, and no item
decision existed for any of the seven IDs.

## Per-item checkpoints (audit → repair → check → decision)

All seven decisions were recorded with
`node tools/step3-decisions.mjs record-item --run frontier-42-coxeter-32
--item <id> --decision repaired --confidence 1 --dependencies '<deps>'`
(receipts `research/frontier-42-coxeter-32-step3b-review-<id>.json`); the
pair's scope is closed at hash
`e789e0f92140cb3538fac9503fb9e0c62fa64f33ace92365f8e2e07e55e76f32`, and
`check --phase final` lists no open entry for this pair.

1. `def-cg-tits-cone-and-fundamental-chamber` (L11, definition).
   Claim/conventions: chambers `wC`, the Tits cone `U=⋃_w wC` with the explicit
   abstentions (no convexity, no closedness, no chamber-disjointness, no local
   finiteness, no finiteness of `Neg(f)`), the coordinate metric on `V*` with
   its `S=∅` case, `U°=int U`, `Neg(f)={α∈Φ_+: f(α)<0}`; justifier
   `thm-cg-tits-cone-finite-negativity-and-convexity`.
   Repair: clause (2)'s `w'U=U`/`C⊆U` use the left-action property of the dual
   action, which `def-cg-dual-chambers-and-reflection-hyperplanes` explicitly
   defers to `lem-cg-dual-action-and-chamber-faces-exist` (1); that item was
   added to `deps` and cited. Manifest `deps` synchronized; ledger row added.
   Sources: Davis Appendix D.1–D.2 and Perrin §6.5 (locators in the item and
   the batch-9 coverage). Checks: precheck n/a, rendercheck OK, proof-layout
   OK, content-policy OK, depcheck/depsource OK, proof-contract --strict OK.
   No Choice. Decision `repaired`, confidence 1.

2. `thm-cg-tits-cone-finite-negativity-and-convexity` (L12).
   Claim: (1) `f∈U ⟺ Neg(f)` finite; (2) `Neg(f)=∅ ⟺ f∈C`; (3) the
   one-letter reduction `Neg(s·f)=r_s(Neg(f)∖{e_s})` with `|…|=|Neg(f)|−1` and
   iteration into `C`; (4) convexity and nonnegative scaling; (5) the bounds
   `Neg(f)⊆N(w^{-1})`, `|Neg(f)|≤ℓ(w)`. Proof: direct, by induction on
   `|Neg(f)|`.
   Repair: [F9] now derives `ℓ(w^{-1})=ℓ(w)` explicitly (a reversed reduced
   word for `w` is a word of the same length for `w^{-1}`, and the argument
   applied to `w^{-1}` gives equality) instead of attributing it to `def-hh`,
   which does not state it.
   Checks: precheck PASS, rendercheck OK, proof-layout 0 defects, content
   policy 0/0, depcheck/depsource OK, proof-contract --strict 0 errors,
   boundary rows realigned to steps 4.1. No Choice. Decision `repaired`.

3. `thm-cg-dual-chamber-intersections-and-point-stabilizers` (L12).
   Claim: (1) `wH_{e_s}=H_{ρ(w)e_s}` and walls = root hyperplanes; (2) the
   side rule `wC°⊆{f(e_s)>0} ⟺ ℓ(sw)>ℓ(w)` (and the negative variant), with
   `C`/`wC` on opposite sides when `ℓ(sw)<ℓ(w)`; (3) collision
   (`f,g∈C`, `w·f=g ⟹ f=g`, `w∈W_{S(f)}`) by induction on `ℓ(w)`;
   (4) `Stab_W(f)=W_{S(f)}` for `f∈C` and its conjugate form on `U`;
   (5) `wC∩C={f∈C: w∈W_{S(f)}}=⋃_{T: w∈W_T}\overline C_T`; (6) strict
   fundamental domain and disjoint open chambers.
   Repairs: [F8] derives inversion invariance of length explicitly (same as
   item 2); [F2] now records the left-action property of the dual action with
   its citation (`lem-cg-dual-action-and-chamber-faces-exist` (1)), which
   step 2.1 uses in `s·(w·f)=(sw)·f`.
   Checks as in item 2 (precheck PASS, contracts strict OK, etc.). No Choice.
   Decision `repaired`.

4. `thm-cg-tits-cone-interior-and-local-finiteness` (L13).
   Claim: for `f∈C`, `f∈U° ⟺ W_{S(f)}` finite; `U°=⋃_w w·C^f` with
   `C^f={f∈C: W_{S(f)} finite}`; neighbourhood and compact-set local
   finiteness in `U°` (chambers and walls); the boundary clause
   `f−tδ_I∉U` for `t>0` with every neighbourhood meeting infinitely many
   chambers; `0∈U° ⟺ W` finite; no local finiteness at the boundary.
   Proof: averaged `W_I`-invariant inner product on a finite parabolic, the
   finite-parabolic lemma, then the explicit negative-root perturbation.
   Repairs: (a) step 5.1 now derives `f_0∈U°` by transporting a ball along the
   linear isomorphism `x↦w·x` (using `L(U)=U`) and applies the contrapositive
   of step 2.2 to obtain finiteness of `W_I`, the hypothesis that steps 3.1
   and 4.1 require and that the previous text invoked without deriving;
   (b) [F17] now cites `lem-finite-set-has-max` (max/min of nonempty finite
   real sets), `def-finite-cardinality` and `def-generated-subgroup`
   (`W_I≠∅`); `lem-finite-set-has-max` added to `deps` and to the manifest;
   (c) step 3.1 now carries [F17]; (d) the empty/zero/one/degenerate/endpoint/
   Choice/iff boundary rows were realigned to the actual steps 1.2, 2.1, 2.2,
   3.1, 3.2, 6.2.
   Checks: precheck PASS, rendercheck OK, proof-layout 0 defects, content
   policy 0/0, depcheck/depsource OK, proof-contract --strict 0 errors,
   boundary-audit 0 contradicted / 0 template rows. No Choice (finite average,
   finite maxima, explicit perturbation). Decision `repaired`.

5. `ex-cg-tits-cone-of-infinite-dihedral-type` (L13, B page).
   Claim: dual action `s:(x_s,x_t)↦(−x_s,2x_s+x_t)`, `t:(x_s,x_t)↦(x_s+2x_t,−x_t)`
   and `Δ`-invariance; chambers `u^kC`, `u^ksC` with unit-interval traces;
   `U={Δ>0}∪{0}`, `U°={Δ>0}`, `Ū={Δ≥0}`, boundary `{Δ=0}` meeting `U` only at
   `0`; the sample membership tests via infinite negative-root families; the
   stabilizer list including `Stab_W(−1,0)={1,t}`.
   Repair: [F8] aligned with the current (repaired) clause (3)(ii) of
   `lem-cg-dual-action-and-chamber-faces-exist` — it now states the union
   `{φ:φ(e_s+e_t)>0}∪{0}` and the integer root traces (with the finite-case
   simple transitivity), and the example cites only the correct parts; the
   recorded source slip is not imported. [F1] additionally records the
   left-action property of the dual action with its citation
   (`lem-cg-dual-action-and-chamber-faces-exist` (1)), used in the iterated
   computations of step 2.1.
   Checks: precheck PASS, rendercheck OK, proof-layout 0 defects, content
   policy OK, depcheck/depsource OK, proof-contract --strict OK, source fetch
   2/2 verified. No Choice. Decision `repaired`.

6. `ex-cg-chamber-face-stabilizers-in-a2` (L14, B page).
   Claim: the six sectors with `c=cos(π/3)=1/2` derived from the addition
   formulas; `Stab_W(0,1)=W_{{s}}={1,s}` and the symmetric wall case;
   interior/vertex stabilizers; the orbit
   `W·(0,1)={(0,1),(1,−1),(−1,0)}` of cardinality `3=|W|/|Stab|`; the
   intersection rule `sC∩C={x_s=0,x_t≥0}`; `U=U°=V*`.
   Repairs: (a) `thm-cg-root-length-criterion-and-faithfulness` added to
   `deps` with the new fact [F9] (`ρ` injective), because `|W|=6` and simple
   transitivity of the `W`-action follow from the rank-two lemma's description
   of the image group `W_{s,t}=ρ(W)` only together with injectivity; step 1.1
   now instantiates this; (b) [F10] no longer claims that "the assignment
   sending each generator to itself is injective" (which `def-hh` explicitly
   does not assert) gives a word-set description of `W`; (c) step 2.2 now
   identifies the orbit as the explicit `W`-stable three-element set instead
   of listing six group elements as distinct; (d) [F7] now records the
   left-action property of the dual action with its citation
   (`lem-cg-dual-action-and-chamber-faces-exist` (1)), used in
   `st·(0,1)=s·(t·(0,1))` in step 2.2; (e) manifest `deps` synchronized and a
   ledger row added.
   Checks: precheck PASS, rendercheck OK, proof-layout 0 defects, content
   policy 0/0, depcheck/depsource OK, proof-contract --strict 0 errors.
   No Choice. Decision `repaired`.

7. `ex-cg-outside-tits-cone-point-with-infinite-stabilizer` (L14, B page).
   Claim: `W≅W_1×W_2` with block decomposition, `C=C_1×C_2`, `U=U_1×U_2`;
   `f=(−1,0,1,−1)∉U`; `Stab_W(f)={1,s_2}×⟨s_3s_4⟩` infinite, hence not a
   finite parabolic; `f` lies outside even the closed cone `Ū`; the rank-two
   contrast for `Δ≠0` points.
   Repairs: (a) `thm-hh-parabolic-minimal-representatives-and-length-additivity`
   added to `deps` so that the rank-two results of the D∞ example transfer to
   the subgroups `W_i` (the Coxeter groups of the restricted matrices), as now
   stated in [F1] and used in step 1.1; (b) [F7] now records the universal
   property of the presented group, needed by the isomorphism argument;
   (c) step 1.1 spells out the relator check and the two inverse composites;
   (d) manifest `deps` synchronized and a ledger row added.
   Checks: precheck PASS, rendercheck OK, proof-layout 0 defects, content
   policy OK, depcheck/depsource OK, proof-contract --strict OK. No Choice.
   Decision `repaired`.

## Pages

- `library/coxeter-groups/tits-cones-chambers-and-parabolic-stabilizers.md`
  (A): `items` lists the four A items in scaffold order; the prose summarises
  the definition, the three theorems and the boundary abstention; `requires`
  is `canonical-roots-signs-and-faithful-reflections` (unchanged).
- `library/coxeter-groups/tits-cones-chambers-and-parabolic-stabilizers-examples.md`
  (B): `examples` lists the three B examples; the prose matches the three
  example statements; `requires` is the A page.
- rendercheck OK, prosecheck 0 errors (3 heuristic `count-in-prose` warnings,
  all verified false positives: "three theorems" and "four items" are correct
  counts on the A page, and "two example" is a substring of "rank-two
  example"), pathcheck on the A page's pathway 0 errors/0 warnings.

## Added suppliers and dependency records

Added to item `deps` (and mirrored in `research/frontier-42-coxeter-32-batch-9.pages.json`;
one row per new cross-batch edge added to
`research/frontier-42-coxeter-32-batch-9.cross-batch-dependencies.json`, then
`frontier-dependency-ledger.mjs refresh` run):

- `lem-cg-dual-action-and-chamber-faces-exist` (batch 4) ←
  `def-cg-tits-cone-and-fundamental-chamber`;
- `thm-cg-root-length-criterion-and-faithfulness` (batch 7) ←
  `ex-cg-chamber-face-stabilizers-in-a2`;
- `thm-hh-parabolic-minimal-representatives-and-length-additivity` (batch 2) ←
  `ex-cg-outside-tits-cone-point-with-infinite-stabilizer`;
- `lem-finite-set-has-max` (published) ←
  `thm-cg-tits-cone-interior-and-local-finiteness` (no ledger row; published).

The manifest `deps` of the interior theorem, the D∞ example and the A₂
example were also synchronized with the authored item `deps` (the scaffold
manifest predated published deps added by the earlier attempts:
`thm-riesz-representation-in-finite-dimensions`,
`def-algebraic-dual-and-linear-functional`,
`def-metric-interior-closure-boundary`, and the four trigonometric items).
`dependency_level` labels are unchanged (all new suppliers sit at lower
levels); `item-dependency-levels.mjs check` reports no error for any batch-9
item.

The page-prerequisite row (`tits-cones-chambers-and-parabolic-stabilizers` ←
`canonical-roots-signs-and-faithful-reflections`, status `open`) was refreshed
with the Step-3b reconciliation: every clause this pair actually consumes from
the batch-7 page (root signs, root-length criterion and faithfulness,
inversion set and inversion formula, rank-two chamber and reflection facts)
was re-read in the current carriers and matches; this is a use
reconciliation, not an independent verification of that page's proofs.

## Step-3a findings rechecked

- Finding 1 (batch-4 `lem-cg-dual-action-and-chamber-faces-exist` (3)(ii)
  union sentence) is **resolved on disk**: the current clause (3)(ii) states
  `⋃_w wC_P={φ:φ(e_s+e_t)>0}∪{0}` (the closed half-plane with the nonzero
  boundary points removed) and the integer root traces. The D∞ example cites
  only that corrected content. The related loose phrase in
  `lem-cg-rank-two-prefix-and-chamber-length-induction` step 1.3 is also
  rephrased correctly (the complement is taken inside
  `{f:f(e_s+e_t)>0}`). No defect remains to route.
- Source caveat (Davis D.2.1(i) closed-half-plane slip) and the Perrin
  6.5.2(vi) stabilizer-vs-orbit caveat are both recorded and not imported
  (batch-9 notes items 4–5; the items prove the corrected statements).

## Checks actually run (results)

| check | command (prefix `node`; selection = the seven item files or the batch-9 manifest) | result |
|---|---|---|
| precheck | `tools/tsx-run.mjs tools/precheck.mts items/<7 files>` | 1 n/a (definition) + 6 PASS, 0 failing |
| rendercheck | `tools/rendercheck.mjs items/<7> library/coxeter-groups/<2 pages>` | 9 files OK |
| proof-layout | `tools/proof-layout.mjs items/<7>` | 7 items, 47 steps, 0 defects |
| content policy (item mode) | `tools/content-policy.mjs research/frontier-42-coxeter-32-batch-9.pages.json` | 7 scoped items, 0 error(s), 0 warning(s) |
| depcheck | `tools/depcheck.mjs --items-file <7 ids>` | selected item/page + prerequisite cycle checks passed |
| fwdcheck | `tools/fwdcheck.mjs --items-file <7 ids>` | passed |
| extcheck | `tools/extcheck.mjs --items-file <7 ids>` | 7 items, 0 recorded-not-proved |
| depsource | `tools/depsource.mjs --items-file <7 ids> --run frontier-42-coxeter-32` | 0 unresolved; consumer coverage 7/7 |
| item dependency levels | `tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` | one error, for the sibling item `ex-cg-reducible-semidefinite-forms-are-factorwise` (batch 27); batch-9 labels clean |
| validate-plan | `tools/validate-plan.mjs research/plan-spec.json --run frontier-42-coxeter-32` | FAIL only on sibling `coxeter-descents-poincare-polynomials-and-growth` (+ examples) undeclared-prereq rows (batch 25); this pair contributes no diagnostic |
| manifest integrity | `tools/manifest-integrity.mjs --run frontier-42-coxeter-32` | 64 pages owed / 64 present, no scope drift |
| manifest deps | `tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-9.pages.json` | 7 items, 0 missing, 0 errors |
| coverage | `tools/coverage-checklist.mjs research/frontier-42-coxeter-32-batch-9.coverage.json --require-destination` | 1 page, 25 harvested results, 0 error(s)/0 warning(s) |
| source fetch | `tools/source-fetch-check.mjs --coverage research/frontier-42-coxeter-32-batch-9.coverage.json` | 2/2 fetch-verified, 2/2 resolved |
| proof contracts | `tools/proof-contract.mjs research/frontier-42-coxeter-32-batch-9.proof-contracts.json --strict --items <7 ids>` | 0 error(s), 0 warning(s), 7/7 items |
| finite smoke | `tools/finite-smoke.mjs research/frontier-42-coxeter-32-batch-9.proof-contracts.json` | 0 errors over 0/7 obligation-carrying items (none declared) |
| risk report | `tools/risk-report.mjs research/frontier-42-coxeter-32-batch-9.proof-contracts.json` | 0 errors, 7 items routed (informational) |
| boundary audit | `tools/boundary-audit.mjs … --fail-on-contradicted --fail-on-template` | 0 template clusters, 0 contradicted candidates |
| citation fidelity | `tools/citation-fidelity.mjs … --fail-on-missing-quote` | no missing quotes; 8 `widening` candidates, all false positives of the full-statement quote convention (verified by hand, e.g. quote contains `λ_s≥0`) |
| dependency ledger | `tools/frontier-dependency-ledger.mjs refresh --run frontier-42-coxeter-32` | refreshed and deduplicated |
| prosecheck | `tools/prosecheck.mjs <2 pages + 7 items>` | 0 errors, 3 heuristic count warnings (false positives, above) |
| pathcheck | `tools/pathcheck.mjs --pages-file <A page>` | 1 pathway file, 0 errors, 0 warnings |
| decisions | `tools/step3-decisions.mjs check --run frontier-42-coxeter-32 --phase final` | no open entry for this pair; all 7 items closed by `repaired` receipts |

The proof contracts were regenerated with
`tools/regen-contract-entries.mjs` after the item repairs (citations and
derivations rebuild from the on-disk facts and steps), then the boundary
worksheets were corrected; `--strict` is green.

After the final item edits the affected receipts were re-recorded
(`repaired`, confidence 1); `check --phase final` then listed no open entry
for this pair, and the final proof-layout run reads 7 items / 47 steps /
0 defects, with precheck 6 PASS + 1 `n/a`, rendercheck 9/9 files OK,
content-policy 7 scoped items 0/0, `proof-contract --strict` 0 errors,
citation-fidelity no missing quotes (95 citations, 8 widening candidates that
are false positives of the full-statement quote convention), finite-smoke
0 errors, boundary-audit 0 contradicted / 0 template rows.

## Out-of-scope findings (reported, not repaired)

1. `ex-cg-reducible-semidefinite-forms-are-factorwise` (batch 27):
   `item-dependency-levels.mjs check` reports stored level 15 vs computed 16.
   Owner/dispatch of batch 27 needs the label or deps corrected.
2. `coxeter-descents-poincare-polynomials-and-growth` and its examples page
   (batch 25): `validate-plan` reports undeclared prerequisites
   (`braided-and-symmetric-monoidal-categories`,
   `fundamental-trigonometric-identities-examples`,
   `root-systems-dynkin-diagrams-and-cartan-killing-classification`,
   `formal-power-series-examples`, `weak-order-inversions-and-lattice-operations`
   outside the declared `requires` closure). Owner work for that pair.
3. Four sibling pairs currently have stale scope reviews (their manifest
   statements changed after their Step-3a decisions):
   `finite-reflection-length-and-orthogonal-moved-spaces`,
   `large-spherical-metric-flags-and-the-moussong-girth-theorem`,
   `weak-order-inversions-and-lattice-operations`,
   `heaps-commutation-classes-and-fully-commutative-elements`. Not this pair.

## Open obligations at handoff

1. Sibling suppliers are still being authored in parallel. All clauses this
   pair cites were read in the current on-disk carriers; if a supplier's
   statement changes, the `repaired` decisions for this pair's items become
   stale by construction (the receipt hash covers the transitive input
   closure) and must be refreshed before the Step-3 gate. This happened once
   during this dispatch: `thm-hh-parabolic-minimal-representatives-and-length-additivity`
   gained a parenthetical in clauses 3–4 (the clause (2) interface used here
   is unchanged), which invalidated the contract quote and the outside
   example's receipt; both were refreshed and re-recorded, and the seven
   receipts are current as of the final edits recorded above.
2. The seven decisions are non-owner `repaired`, confidence 1; no escalation
   is open for this pair. No item of this pair is recorded `escalate` or
   held.
3. Step 4 should splice the batch-9 manifest; note that the manifest
   `statement` mirrors still carry the scaffold text for
   `def-cg-tits-cone-and-fundamental-chamber` (clause (3)'s `S=∅` refinement
   and clause (2)'s added citation are authored-only), while the manifest
   `deps` were synchronized to the authored items.
4. The two out-of-scope mechanical findings above remain for their owners.
5. No published-content defect was identified by this pair's audit; the two
   recorded source caveats remain non-imported and are documented in the
   batch-9 notes and the coverage file.
