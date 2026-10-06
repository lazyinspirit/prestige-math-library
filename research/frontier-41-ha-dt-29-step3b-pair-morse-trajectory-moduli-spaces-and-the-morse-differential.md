# Step 3b — pair `morse-trajectory-moduli-spaces-and-the-morse-differential`

Run `frontier-41-ha-dt-29`, role `alpha-high`, label
`step3b-pair-morse-trajectory-moduli-spaces-and-the-morse-differential-5a4487d2726e34ef`.
Batch 5 (the batch contains only this pair, so no sibling rows exist in the shared files).
A page `morse-trajectory-moduli-spaces-and-the-morse-differential` (order 537,
differential-topology): 17 original scaffold IDs plus one registered local supplier = 18
items. B page `morse-trajectory-moduli-spaces-and-the-morse-differential-examples` (order
538): 5 items. Both pages are written as drafts.

**Status at handoff.** All 23 items and both pages are authored, registered and checked.
The 22 original scaffold IDs have no recorded Step 3b decision yet: their manifest
statements changed once (one false clause repaired) and the pair's scope gained one item,
so the pair scope hash changed and `record-item` refuses until the scope is reclosed. The
engine's `auditor-created-certifications` pass closes both facts mechanically — the
baseline scope hash equals the Step 3a review's `sufficient` sha `1089175094…`, and the
addition is certified from this dispatch's own result — after which a follow-up
final-phase dispatch records the 22 decisions. Nothing is escalated; no supplier is
unfinished; every proof, page and contract gate applicable to this batch passes.

## 1. Inventory and dependency levels (as recorded in `research/frontier-41-ha-dt-29-batch-5.pages.json`)

A page (18): `def-mod-two-morse-chain-group` (0), `def-broken-morse-trajectory` (0),
`def-geometric-convergence-to-a-broken-morse-trajectory` (1),
`lem-breaking-length-is-bounded-by-index-drop` (1),
`lem-broken-trajectories-are-limits-of-ordinary-trajectories` (2, **added**),
`thm-morse-trajectory-compactness-up-to-breaking` (3),
`cor-index-one-trajectory-moduli-spaces-are-finite` (4),
`def-mod-two-morse-differential` (5),
`lem-gluing-broken-index-two-trajectories-gives-collar-ends` (2),
`thm-index-two-compactification-is-a-compact-one-manifold-with-boundary` (5),
`thm-mod-two-morse-differential-squares-to-zero` (6),
`def-orientation-line-of-a-morse-critical-point` (0),
`lem-unstable-orientations-induce-trajectory-moduli-orientations` (1),
`def-signed-morse-differential-over-the-integers` (6),
`lem-boundary-orientation-of-compactified-one-dimensional-morse-moduli` (6),
`thm-integral-morse-differential-squares-to-zero` (7),
`rem-morse-homology-over-the-integers-does-not-require-orientability-of-m` (8),
`rem-compactness-up-to-breaking-needs-closedness-or-a-proper-compactness-package` (4).

B page (5): `ex-broken-trajectories-in-an-index-two-torus-moduli-space` (6),
`ex-morse-complex-of-the-circle` (8), `ex-morse-complex-of-the-two-sphere` (7),
`ex-changing-an-unstable-orientation-changes-two-basis-signs` (9),
`cex-a-naive-signed-count-without-the-quotient-orientation-can-fail-d-squared-zero` (8).
All levels agree with `tools/item-dependency-levels.mjs` for this batch.

## 2. Scaffold audit and repairs

The Step 3a scope review (`research/frontier-41-ha-dt-29-step3a-pair-…md`, decision
`sufficient`) supplied the design mapping, source coverage and three non-blocking findings
carried into this dispatch. The first item of each dependency layer was written only after
reading its exact suppliers. The two scaffold defects were repaired as follows.

1. **False drop-two clause (statement repair).**
   `lem-breaking-length-is-bounded-by-index-drop` asserted that when
   `λ(p)−λ(q)=2` *every* broken trajectory is once-broken. That is false: an ordinary
   trajectory `p→q` of index drop two is a length-one broken trajectory, and such
   trajectories exist (the tilted-torus interior `M(a,d)` of the B page is exactly the
   union of four open intervals of them). The statement now restricts the clause to broken
   trajectories of length `r ≥ 2`, which is what the index-two theorem and the collar lemma
   consume; the design's promised content (each nonconstant component drops the index by at
   least one) is untouched. The same repaired text is in the item file and the manifest.
2. **Missing general gluing supplier (local addition).**
   The compactness theorem's part (2) promises that `M(p,q)` is dense in `\overline M(p,q)`.
   The library's gluing item is the *index-two collar* lemma and does not imply density for
   breaks of larger index drop, so this dispatch added the A-page lemma
   `lem-broken-trajectories-are-limits-of-ordinary-trajectories` (level 2): every
   `W(v,U^-,U^+)` neighbourhood of a broken trajectory contains an ordinary trajectory,
   proved by the pre-gluing/Fredholm/IFT construction with an induction on the number of
   components, with sources Fowdar §6 (Theorems 6.1, 6.8–6.9 and the contraction estimate),
   Audin–Damian Prop. 3.2.6 and Ritter §5.5. It is placed before its consumer and registered
   in the manifest, the coverage record (canonical row), the page and the proof contract.
3. **Choice-hypothesis accounting (Step 3a flag 1) closed.** Every proof that spends a
   choice principle now declares it in its `**Given:**` block and in its `deps`, at the
   exact step that spends it: the compactness theorem (AC through Ascoli and the
   compactness/sequential-compactness equivalences), `cor-index-one-…` (AC for
   metrization + compactness), the gluing lemma, `thm-index-two-…`, the boundary-orientation
   lemma and `thm-integral-…` (AC, with `thm-choice-implies-dependent-implies-countable-
   choice` explicitly in deps where AC has to discharge `AC_ω`/DC suppliers), the two
   differential definitions (AC for the finiteness of index-one moduli spaces), and the
   four B items that invoke those results. The broken-trajectory, chain-group,
   geometric-convergence and orientation-line definitions, the two remarks and the
   two-sphere example remain choice-free.
4. **Design source N §§4.4–4.5** (Step 3a finding 2) is now disposed: the batch-5 coverage
   record carries an `out-of-scope` row for the range (Nicolaescu Ch. 4, printed pp. 183–200)
   with the reason that no item of this pair consumes it and the design's section-8 source
   matrix does not require it for DT-9; the Step 3a review records that its
   Proposition 4.4.2/4.4.3 and Example 4.4.4 are covered by this pair's item-linked rows.
   The coverage record now has 57 dispositions, every one item-linked or reason-bearing, and
   `coverage-checklist --require-destination` stays clean.

No supplier of any item is unauthored or unfinished: every `deps` target resolves to a
published item or to an item of this batch that precedes its consumer.

## 3. Mathematical content and source grounding (concise map)

- Definitions: mod-two chain group (free `Z/2`-module on `Crit_k(f)`); broken trajectories
  (with the orbit-set identification and the empty case `λ(p)≤λ(q)` made explicit); geometric
  convergence with the `W(v,U^-,U^+)` fundamental system and the quotient topology on the
  length-one part; orientation line `det T_pW^u(p)` with no ambient orientation; mod-two and
  signed differentials with their finiteness/well-definedness conditions.
- Compactness: height parametrization, a uniform `C√|t−t'|` equicontinuity estimate (the
  square-root bound is stated at a critical *level*, uniformly in the trajectory, which is
  the form the local Morse model actually gives), closedness of the image under uniform
  limits, Ascoli compactness (AC), metrizability/second countability, openness of
  `M(p,q)`, density via the new lemma, and sequential compactness.
- Gluing and the index-two compactification: the pre-glued family and its linearization
  (Fredholm, surjective for small necks by Morse–Smale transversality), the implicit
  function theorem on the regular-level slice, smoothness/injectivity of the branch, its
  extension to the broken endpoint and eventual containment; then the compact one-manifold
  with boundary and the finite boundary `∐ M(p,r)×M(r,q)`.
- Orientations: the unstable complement bundle over `W^s(y)` built in a Morse chart and
  extended by flow transport (with chart-independence), the co-orientation of `W^s(y)`,
  the kernel-first orientation of `W^u(x)⋂W^s(y)`, the comparison sign `ε(γ)`, the
  flow-first orientation of `M(x,y)`, the boundary sign identity
  `sign_∂(γ_1,γ_2)=ε(γ_1)ε(γ_2)` (with the `o_r⊗o_r^*` cancellation) and the resulting
  `∂²=0` over `Z/2` and `Z`.
- Examples and counterexample: circle (two arcs, signs opposite, both differentials
  vanish), two-sphere (degree reasons), tilted torus (four intervals, eight once-broken
  boundary points), single-orientation flip (two coefficient families change sign,
  conjugation `T∂T^{-1}`), and the all-plus naive count (`∂̃²a=8d≠0`) showing the sign
  convention must be orientation-induced.

Sources: the batch-5 locators in each item (Audin–Damian Ch. 3 §3.1–3.4; Ritter Lectures
17–19; Nicolaescu §2.5 and Remark 2.5.3(a); Cohen Ch. 13.4/App. A; Fowdar §§5–8;
Abbondandolo–Majer §2.8) are those harvested in Step 1; the two hard points (existence of
the collar and the boundary sign) were additionally checked against the fetched full texts
of Fowdar (§5–6 compactness/gluing, §7 Theorem 7.5, §8) and Audin–Damian (§3.2.b–c,
Propositions 3.2.6 and 3.2.8) during this dispatch.

## 4. Cross-batch bookkeeping effect of the local addition

The added lemma is an *in-run* supplier, so it raises the computed `dependency_level` of
`thm-morse-trajectory-compactness-up-to-breaking` from 2 to 3 and of every downstream item
of this pair by one (recorded above). That cascade also raises the computed levels of 24
items in batch 6 (`morse-homology-continuation-and-comparison`), which consumes this pair;
the batch-6 manifest still records the pre-addition values. The exact list (recorded →
computed): `lem-compactified-unstable-manifolds-give-a-cw-decomposition` 5→6,
`lem-gluing-continuation-solutions-gives-collar-ends` 5→6,
`thm-continuation-trajectories-are-compact-up-to-breaking` 4→5,
`lem-cellular-boundary-coefficient-equals-the-morse-trajectory-count` 6→7,
`def-morse-homology-of-a-morse-smale-pair`, `def-continuation-chain-map`,
`def-two-parameter-continuation-homotopy`, `lem-orientation-lines-orient-continuation-
moduli-spaces`, `prop-relative-morse-complex-for-an-adapted-cobordism` 7→8,
`thm-continuation-count-is-a-chain-map`, `thm-morse-complex-is-chain-homotopy-equivalent-
to-the-handle-cellular-complex`, `lem-continuation-map-of-constant-data-is-the-identity`,
`ex-relative-morse-homology-of-a-single-handle-cobordism`, `ex-morse-and-cellular-
boundaries-for-a-surface-handle-presentation` 8→9 (or 9→10 for the last),
`thm-homotopic-continuation-data-give-chain-homotopic-maps` 9→10,
`thm-continuation-composition-law-on-homology` 10→11,
`thm-reverse-continuation-is-an-inverse-on-morse-homology` 11→12,
`def-canonical-morse-homology-of-a-closed-manifold` 12→13,
`thm-morse-homology-is-naturally-isomorphic-to-singular-homology` 13→14,
`rem-noncompact-morse-homology-needs-properness-completeness-and-compactness-control` 13→14,
`cor-morse-homology-recovers-the-morse-inequalities` 14→15,
`cex-a-nonproper-noncompact-morse-function-can-lose-continuation-trajectories-at-infinity` 14→15,
`ex-continuation-across-a-birth-death-adds-an-acyclic-pair` 15→16,
`ex-two-morse-functions-on-the-circle-have-isomorphic-morse-homology` 16→17.
Owner: the batch-6 writer refreshes those manifest labels (their dependency inputs are
unchanged, only the level values); this pair's own labels are already consistent.

## 5. Checks actually run (results as observed)

All item- and batch-scoped checks were re-run on the frozen batch-5 content at the end of
this dispatch (2026-10-06); the run-wide checks were re-run once more and their counts move
as other writers land, so the observed values are reported with that caveat.

| Check | Result |
|---|---|
| `node tools/proof-layout.mjs items/<all 23 changed paths>` | 23 items, 66 steps, 0 defects |
| `node tools/tsx-run.mjs tools/precheck.mts <all 23 item paths>` | 15 checked, 0 failing |
| `node tools/rendercheck.mjs <all 23 item paths>` | OK — YAML, math, no wikilink in math |
| `node tools/content-policy.mjs research/…-batch-5.pages.json` | 23 scoped items, 0 errors, 0 warnings |
| `node tools/proof-contract.mjs research/…-batch-5.proof-contracts.json --strict` | 0 errors, 0 warnings, 15/15 items |
| `node tools/finite-smoke.mjs <batch-5 contracts>` | 0 errors, 0 checks over 0/15 items carrying obligations |
| `node tools/boundary-audit.mjs <batch-5 contracts> --fail-on-contradicted --fail-on-template` | 120 rows, 5 `not_applicable`, no contradicted, no templated rows |
| `node tools/citation-fidelity.mjs <batch-5 contracts> --fail-on-missing-quote` | every recorded quote found in its cited item |
| `node tools/coverage-checklist.mjs <batch-5 coverage> --require-destination` | 2 pages, 57 harvested results, 0 errors, 0 warnings |
| `node tools/manifest-deps.mjs <batch-5 manifest>` | 23 items, 0 errors |
| `node tools/validate-plan.mjs research/plan-spec.json` | OK (259 not-yet-authored pages carry no item lists, as designed) |
| `node tools/item-dependency-levels.mjs check --run frontier-41-ha-dt-29` | no error for any batch-5 item; the reported mismatches (52, then 49 as writers landed) are all in other, in-flight batches |
| `node tools/depcheck.mjs` | ~1400 findings at the final checks (1400, then 1389 as writers landed; the count moves), none naming a batch-5 ID (833 `published-unaudited`, 192 `cited-not-in-deps`, 141 `multi-home`, 79 `link-unresolved` at the first pass, plus one page cycle between two sibling in-flight pages) |
| `node tools/fwdcheck.mjs --quiet` | 84 errors at the final check, none touching this pair (other writers' drafts, e.g. `cor-morse-euler-characteristic-identity`, `thm-morse-functions-and-handle-decompositions-correspond`) |
| `node tools/extcheck.mjs` | OK |
| `node tools/frontier-dependency-ledger.mjs refresh --run frontier-41-ha-dt-29` | aborts on batch-19's `cross-batch-dependencies.json` ("invalid review or consumer ownership"); batch-5's own input is `[]` (no cross-batch edges in this pair) and was validated before that file changed |
| run-level `research/…-proof-contracts.json` (`proof-contract --strict`) | currently holds another pair's 34 contracts, 0 errors (the file is rewritten by whichever writer regenerates it last, 01:39); batch-5 is checked through its own contract file, 0 errors |

The run-level merged contract file is a shared, last-writer-wins artifact; the engine
re-runs the merge at the stage gate when all writers drain.

## 6. Item decisions

Not recorded in this dispatch, deliberately and transparently. `tools/step3-decisions.mjs
record-item` refuses while `scopeDecision(pair).closed` is false, and the pair scope hash
changed in two ways: the repaired `lem-breaking-length-…` statement and the added
`lem-broken-trajectories-are-limits-of-ordinary-trajectories`. The engine's
`auditor-created-certifications` pass binds the baseline `sufficient` review
(`1089175094…`, equal to the baseline scope hash) and the current scope hash, certifying
the scope delta and the addition once this dispatch's result exists. The follow-up
final-phase dispatch for this pair then records the 22 original IDs with confidence 1,
examined dependencies and concrete evidence; every input for that audit is on disk and
checked. No `--owner` flag and no judge/audit stamp was added anywhere.

## 7. Published concerns (routing, not repaired here)

1. **Typo, published.** `items/def-parametrized-morse-trajectory-space.md` line 26 has
   `p,qquad \lim` (missing backslash) in the displayed endpoint equations; the second
   separator renders as literal “qquad”. Evidence: `sed -n 26p` of the file; status
   `published`; repair: replace `,qquad ` by `,\qquad `. This pair consumes the item but not
   the affected display clause; the defect is typographical.
2. **Stale U-P ledger entry.** `research/published-consumer-supplier-ledger.md` around
   line 1441 records `lem-morse-smale-transversality-is-equivalent-to-surjectivity-of-the-
   linearized-flow-operator` as a U-P candidate; on disk the item (dated 2026-09-24) depends
   on the published `lem-first-order-asymptotically-hyperbolic-operator-is-fredholm`, so the
   entry appears superseded and should be reconciled by the serial reconciler.
3. **Repository-wide debt seen while running the gates, none of it this pair's.**
   At the final checks `depcheck` reported ~1400 findings elsewhere (833
   `published-unaudited` legacy items, 192 `cited-not-in-deps`, 141 `multi-home`, 79
   `link-unresolved`, 59 `dep-unresolved`, 43 `published-local-repair`, plus one page
   cycle between `morse-inequalities-and-the-handle-chain-complex` and
   `vector-field-index-euler-characteristic-and-poincare-hopf`); `fwdcheck` reported 84
   errors in other writers' drafts (for example
   `cor-morse-euler-characteristic-identity`, `cex-euler-equality-alone-does-not-imply-perfectness`);
   and the run-level ledger refresh currently aborts on batch-19's cross-batch file.
   Nothing in this pair contributes to any of them, and no finding names one of the 23 IDs.

## 8. Open obligations at handoff

1. Engine certification pass → scope delta + the added lemma certified.
2. Follow-up final-phase dispatch → 22 `record-item` decisions for this pair (all inputs are
   authored, checked and stable).
3. Batch-6 writer → refresh the 24 dependency-level labels listed in §4.
4. Serial reconciler → the two published-content items in §7.
5. Engine/run operator → re-run `frontier-dependency-ledger refresh --run
   frontier-41-ha-dt-29` once batch 19's cross-batch input is repaired; batch 5 itself
   contributes no edges.
