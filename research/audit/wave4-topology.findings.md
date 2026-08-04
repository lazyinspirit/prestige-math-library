# Wave 4 topology Audit-Beta findings

## Continuity checkpoint — 2026-08-04T17:39:58+10:00

- Substage: A1/A2 in progress; A4 is not authorized because no A3 approval has been received.
- Scope: the `compactness` A page (31 items) and `compactness-examples` B page (8 items), exactly the 39 items in `wave4-topology.pages.json` (manifest SHA-256 `361c840bb8e5035526433b97f2055ecaf4540cdd5f6b8901e630e076e04b657a`).
- Owned artifacts: this file, `wave4-topology.provenance.jsonl`, and `wave4-topology.proof-contracts.json`. No topology item or page file has been edited.
- Completed checks: governing instructions recovered; manifest and dirty-tree boundaries verified; both pages and all 39 in-scope item bodies read once; 33 proof-bearing items identified; preliminary mathematical review completed.
- Open mathematical constraints: verify every Fact citation against the target clause on disk; finish the 33 full proof contracts and eight-case worksheets; locate and HTTP-check provenance sources for all 39 items; determine the exact repair surface for the repeated false claim that compactness is ambient-independent without requiring the same induced topology.
- Exact next action: inspect the strict proof-contract format and extract the complete Fact-link/step map for the scoped items, then verify each cited target before writing the contracts.

## A1 provenance disposition

All 39 statements have recognizable counterparts in established topology. I found no statement that I can positively classify as genuinely invented, and no item needs the `established-knowledge`/Alpha-concurrence fallback. Every statement is therefore `ai-altered` with `semantic-source`; every recorded URL was retrieved through the model-side web route at HTTP 200. The exact source mapping, convention deltas, and rationales are in `wave4-topology.provenance.jsonl`.

The proof classifications are:

- `not-applicable` (6): `def-compact-space`, `def-compactness-variants`, `def-locally-compact-space`, `def-baire-space`, `def-one-point-compactification`, `rem-compactness-conventions-and-choice-ledger`.
- `ai-altered` (18): `lem-compactness-of-a-subspace-is-ambient`, `thm-compactness-agrees-with-metric-compactness`, `thm-compact-iff-fip`, `thm-closed-subspace-of-a-compact-space-is-compact`, `thm-compact-subset-of-a-hausdorff-space-is-closed`, `thm-compactness-under-continuous-maps`, `lem-tube-lemma-for-a-compact-factor`, `thm-finite-products-of-compact-spaces`, `thm-alexander-subbase-lemma`, `thm-tychonoff`, `thm-locally-compact-hausdorff-basics`, `thm-baire-category-locally-compact-hausdorff`, `thm-one-point-compactification-properties`, `lem-the-order-topology-on-an-ordinal`, `thm-quasicomponents-equal-components-in-a-compact-hausdorff-space`, `ex-one-point-compactifications-of-the-line-and-of-the-naturals`, `ex-the-sorgenfrey-line-is-lindelof-and-its-square-is-not`, `cex-a-continuous-image-of-a-locally-compact-space`.
- `ai-generated` (15): `thm-compactness-variants-hierarchy`, `cor-heine-borel-in-the-product-topology`, `lem-dependent-choice-along-a-sequence-of-relations`, `thm-ordinal-spaces-and-compactness`, `thm-the-long-line-is-countably-compact-and-not-compact`, `fs-a-compact-subset-is-closed-in-every-space`, `fs-compact-implies-sequentially-compact`, `fs-sequentially-compact-implies-compact`, `fs-countably-compact-implies-compact`, `fs-local-compactness-is-hereditary`, `ex-compactness-in-the-standard-topologies`, `ex-the-interval-the-cantor-set-and-the-hilbert-cube-are-compact`, `ex-sigma-compactness-and-lindelof-in-the-line-and-the-rationals`, `cex-limit-point-compact-without-countable-compactness`, `ex-the-alexander-subbase-lemma-applied-to-a-closed-interval`.

The class-(c) A3 proposal is a bulk provenance retag of all 39 items from those ledger rows. Each item should receive the two-component `provenance` block, every URL in its row should be present in `sources.references`, and any legacy `authorship` key should be removed. None of these items currently has an `authorship` or `provenance` block. Where no mathematical text is changed, this is the single bulk pure-retag pass bracketed by the stage `pre-A4` and `post-A4` snapshots; it does not invalidate an existing judge block or audit stamp.

## A2 defects and A3 proposals

### Class (a): compactness is not independent of an arbitrary ambient topology

The repeated claim that the same underlying set is compact in every ambient space is false unless the ambients induce the same topology on it. Let `A` be any infinite set. As the whole subspace of `(A,{empty,A})`, it is compact; as the whole subspace of the discrete space `(A,P(A))`, it is not compact, because the singleton cover has no finite subcover. What is intrinsic is compactness of the *topological space* `(A,T_A)`, hence invariance under homeomorphism, not compactness of a bare set under every possible induced topology.

The statement and proof of `lem-compactness-of-a-subspace-is-ambient` are correct for one fixed ambient/subspace topology. Only the unrestricted extrapolations are defective. I propose these material repairs:

- `items/def-compact-space.md:63`: replace “Taking the intrinsic reading as the definition is what makes ‘compact’ a property of the space `(A,T_A)` alone, so that a set compact in one ambient space is compact in every other one in which it sits as a subspace” with “Taking the intrinsic reading makes compactness a property of the topological space `(A,T_A)` alone. Hence it is preserved when `A` is embedded homeomorphically as a subspace, or when another ambient space induces the same topology on `A`; it need not be preserved if the induced topology changes.”
- `items/lem-compactness-of-a-subspace-is-ambient.md:94`: replace “it is the reason compactness of `A` does not depend on which space `A` is regarded as sitting inside” with “it shows that compactness can be checked using ambient open sets for this fixed induced topology. A different ambient gives the same answer only when it induces the same topology on `A`.”
- `items/rem-compactness-conventions-and-choice-ledger.md:58`: replace “compactness then belongs to the space `A` alone, so a set compact in one ambient space is compact in every other one in which it sits as a subspace” with “compactness belongs to `A` together with its topology. It is preserved under a homeomorphic realization as a subspace, but a different ambient may induce a different topology and a different compactness answer.”
- `items/fs-a-compact-subset-is-closed-in-every-space.md:77`: replace “A compact subset of an arbitrary space is still compact in every space containing it as a subspace” with “A compact subset remains compact in any other ambient that induces the same topology on it; in particular, compactness is invariant under homeomorphism.”
- `library/topology/compactness.md:36`: replace “That is a statement about the subspace alone, so the notion does not depend on which larger space the subset is regarded as sitting in” with “That is a statement about the topological subspace, so it is invariant under homeomorphism. For the same underlying set in another ambient, the answer agrees only when the induced topology agrees.”

These are judge-visible mathematical changes. Each affected item needs its own named material-repair touchlog snapshot before editing, removal of stale `verification.judge` and `audited` data, reflow/precheck where applicable, and a fresh A6 reading. The page-summary edit should be included in the corresponding impact audit. No such edit or snapshot has been made because A3 approval is absent.

### Class (b): `def-sequence` has the wrong domain for three citations

`items/def-sequence.md:47` defines only a sequence of reals, `x:N -> R`. It does not license a sequence in an arbitrary set, a sequence of subsets of a space, or a sequence of relations. `items/def-sequence-convergence-top.md:40` gives the needed general clause verbatim: a sequence in an arbitrary `X` is a function `N -> X`.

I propose replacing `def-sequence` by `def-sequence-convergence-top` in the relevant `deps` arrays and direct links:

- `lem-dependent-choice-along-a-sequence-of-relations`: Statement lines 42-43 and Fact L1 line 61. Both functions have codomain an arbitrary `A` or `X`.
- `def-baire-space`: Definition lines 40-42. The terms are subsets of arbitrary `X`, not reals.
- `thm-baire-category-locally-compact-hausdorff`: Statement lines 45-46 and Fact L6 line 72. The two sequences take values in `P(X)` and in an arbitrary state set `A`.

No numerical or order property specific to real sequences is used in these items. This is a citation-precision repair, not a change to the intended theorem. Because the dependency metadata and reader-visible links change, treat each as material for snapshot/audit purposes unless A3 rules otherwise.

### Class (b), owner-only A10 queue: Facts with no proof use

The strict proof-contract gate exposes six direct Fact citations that license no numbered step. Adding fake `uses` entries would conceal the defect, so the contract preserves them as failures.

- `thm-alexander-subbase-lemma`, Fact L8: the cited union/intersection axioms from `def-topological-space` are not used by any step. The proof uses that members of a cover are open, but never needs the union itself to be open. Remove L8; `def-topological-space` remains a declared dependency through the Statement.
- `fs-a-compact-subset-is-closed-in-every-space`, Fact L3: the Hausdorff definition is used only in the Remark, not in the refutation. Remove L3; retain the direct Remark citation and dependency.
- `ex-the-alexander-subbase-lemma-applied-to-a-closed-interval`, Fact L5: it explicitly says its four cited comparisons are used nowhere in the verification. Move this scope-denial prose to Remarks or remove it from Facts. The four unused citation entries target `def-subspace-topology-top`, `def-metrizable-space`, `lem-real-line-is-a-metric-space`, and `def-metric-topology`.

These operations delete or move published prose and therefore belong to the owner-only A10 queue under the brief. Until that queue is resolved, the strict contract gate correctly remains red.

### Class (c): provenance-only work

Apart from the material items above, the A4 provenance work is a pure retag. The ledger deliberately uses no `exact-source`, `established-knowledge`, or statement-level `ai-generated` classifications: every statement source is a located semantic counterpart, while local proof composition is recorded independently. All `alpha_concurred` fields remain `false` pending Alpha's independent A3/A6 action.

## Recorded nonfatal observations

The `compactness` A-page introduction is 1,264 words in 10 paragraphs, far beyond the repository's two-paragraph/roughly-150-word summary target. This is a prose/layout defect, recorded but not chased under the triage rule. Its mathematical ambient-invariance sentence is separately fatal and included above.

I found several gaps that a competent reader closes within 30 seconds and propose no repair: the closed-subspace proof says the empty `F` case was settled where the cited step explicitly names empty `X`; the Sorgenfrey closed-subspace/Lindeloef inheritance argument suppresses a routine representative choice; and the quotient counterexample's locally finite spacing argument suppresses one final shrinking of a neighbourhood after observing it meets at most one point. None changes a claim, dependency direction, or choice cost.

## Coverage and gate state

I read all 39 in-scope item bodies, their Remarks, and the A-page summary. I read every numbered step in all 33 proof-bearing items and mapped each step exactly once in `wave4-topology.proof-contracts.json`. I checked every Fact citation against an exact clause in the cited target on disk and every declared dependency citation for existence, legal reading order, hypotheses, quantifiers, and direction. `audit-manifest` reports only `published-backward` (361) and `same-batch` (127) edges; no illegal forward edge appeared. No citation to a statement tagged `ai-generated` was found.

`node tools/proof-contract.mjs research/audit/wave4-topology.proof-contracts.json --strict --json` checks all 33 contracts and fails only on the six unused citations listed above. The item-specific eight-case worksheets and the exact one-entry-per-step maps otherwise pass. `finite-smoke` passes with no applicable finite check type. `risk-report` routes all 33 proof-bearing items to Alpha proof-refutation (28 critical, 5 high); their `risk_review` records correctly remain pending.

A1 and A2 are complete. A4 has not started: no A3 approval was received, no touchlog snapshot was taken, and no item or page file was edited.

## A4 dispatch blocker — 2026-08-04

The unattended run later dispatched this batch for A4, but no mathematical A3 adjudication exists. There is no `research/audit/wave4-A3.md`, and `research/wave4-dispatch/orchestrator-A3-judgment.log` states explicitly that it took no audit action because the driver supplied the Alpha A6/A8 brief instead of the A3 task. The `wave4-run-state.json` status marking A3 complete is therefore not approval of any topology proposal.

I did not edit any topology item or page. The 39-row provenance ledger still matches the 39 manifest ids exactly, the proof-contract file still covers all 33 proof-bearing items, and the strict contract gate still reports exactly the six intentionally unused Fact citations already named above. `finite-smoke` and the non-review-gated risk report pass. A4 remains blocked until an orchestrator verifies the proposals from disk and records explicit approvals and declines.

## A4 application record — 2026-08-04

The blocker above is historical. `research/audit/wave4-A3.md` now contains the
orchestrator's complete A3 receipt and explicitly authorises the topology A4
work. I applied only those approvals, including the two amended
ambient-invariance sentences and the reclassification of the six unused Fact
citations as delegated class-(b) repairs.

All 39 items now carry the approved statement provenance
`ai-altered`/`semantic-source`. Their proof census is unchanged from A1: 18
`ai-altered`, 15 `ai-generated`, and 6 `not-applicable`. There is no
statement-level `ai-generated`, `exact-source`, or `established-knowledge` row,
and no legacy `authorship` key. The 30 items with no mathematical or citation
repair were pure retags: only their provenance and missing source references
changed, and their historical verification evidence was retained. The other
nine item files were material repairs and had their stale `verification.judge`
and `verification.verified` evidence removed; I wrote no replacement
certification.

I reopened all 37 distinct topology source URLs through the model-side route.
Every URL resolved successfully. In particular, the CiteseerX *General
Topology* PDF that the A3 shell sweep could not verify opened successfully; its
ledger rationale now records that A4 recheck. Every ledger URL is present in
the corresponding item's `sources.references`.

### Applied class-(a) repairs

- `def-compact-space`: the old sentence said that a set compact in one ambient
  is compact in every ambient containing it as a subspace. It now says that
  compactness is a property of `(A,T_A)`, is preserved under homeomorphic
  embeddings or another ambient inducing the same topology, and need not be
  preserved when the induced topology changes.
- `lem-compactness-of-a-subspace-is-ambient`: the old Remark said the lemma made
  compactness independent of the containing space. Under A3's amendment it now
  says that ambient open sets test compactness for the fixed induced topology;
  the same answer is guaranteed when another ambient induces the same topology,
  while a changed induced topology may change the answer.
- `rem-compactness-conventions-and-choice-ledger`: the old sentence assigned
  compactness to the bare set and asserted invariance across every ambient. It
  now assigns compactness to the set together with its topology, records
  invariance under homeomorphic subspace realisation, and allows a changed
  induced topology to change compactness.
- `fs-a-compact-subset-is-closed-in-every-space`: the old Remark said a compact
  subset stays compact in every space containing it as a subspace. It now says
  this is guaranteed for an ambient inducing the same topology and, in
  particular, under homeomorphism. The repaired grammatical sentence retains
  both `def-compact-space` and
  `thm-closed-subspace-of-a-compact-space-is-compact` citations.
- `library/topology/compactness.md`: the old summary said the notion did not
  depend on which larger space contained the subset. It now says compactness is
  a property of the topological subspace, hence is homeomorphism-invariant, and
  is guaranteed to agree for the same set when the induced topology agrees.

The written-out check is elementary. For any infinite set `A`, the whole space
`(A,{empty,A})` is compact, whereas the same set with the discrete topology is
not compact because its singleton cover has no finite subcover. Thus the old
ambient-independent claim was false. The A3 amendment also avoids the converse
error: distinct topologies can both be compact, so equality of induced
topologies is sufficient for agreement, not necessary.

### Applied class-(b) repairs

- In `lem-dependent-choice-along-a-sequence-of-relations`, `def-baire-space`,
  and `thm-baire-category-locally-compact-hausdorff`, the old dependency and
  direct citation was `def-sequence`, whose on-disk clause defines only a
  sequence of real numbers, `N -> R`. The new target is
  `def-sequence-convergence-top`, whose exact relevant clause defines a sequence
  in an arbitrary `X` as a function `N -> X`. This licenses respectively a
  sequence of relations/states, a sequence of subsets, and the arbitrary
  sequences used in the Baire proof. `audit-manifest` classifies all three new
  edges as legal `published-backward` edges.
- In `thm-alexander-subbase-lemma`, the old Fact L8 cited the union and
  intersection axioms from `def-topological-space` but licensed no proof step.
  L8 is removed. The Statement still cites that definition, so the dependency
  remains live.
- In `fs-a-compact-subset-is-closed-in-every-space`, the old Fact L3 stated the
  Hausdorff definition but licensed no refutation step. L3 is removed. The
  Remark still cites `def-hausdorff-space`, so the dependency remains live.
- In `ex-the-alexander-subbase-lemma-applied-to-a-closed-interval`, the old Fact
  L5 explicitly said that its four topology comparisons were used nowhere in
  the verification. Its prose and all four citations are now in Remarks,
  verbatim apart from the Fact label; the dependency list is unchanged.

These unused-citation determinations came from the exact proof-step maps and
were confirmed against the item bodies: no numbered step named any of the six
citations. The repair removes the false Fact-to-step contract without inventing
`uses` entries.

### Snapshots, contracts, and gates

The material baselines are recorded in `wave4-touches.json` as
`pre-A4-def-compact-space`,
`pre-A4-lem-compactness-of-a-subspace-is-ambient`,
`pre-A4-rem-compactness-conventions-and-choice-ledger`,
`pre-A4-fs-a-compact-subset-is-closed-in-every-space`,
`pre-A4-page-compactness`,
`pre-A4-lem-dependent-choice-along-a-sequence-of-relations`,
`pre-A4-def-baire-space`,
`pre-A4-thm-baire-category-locally-compact-hausdorff`,
`pre-A4-thm-alexander-subbase-lemma`, and
`pre-A4-ex-the-alexander-subbase-lemma-applied-to-a-closed-interval`. The bulk
retag remains bracketed by the existing stage `pre-A4` baseline and the final
`post-A4-topology` snapshot; no per-item snapshots were made for the 30 pure
retags.

The proof-contract file now matches the repaired items exactly. I removed the
six obsolete citation records, changed the two contract sources that had cited
`def-sequence`, and refreshed the 29 exact source clauses affected by the
`def-compact-space` Remark repair. Strict checking now passes all 33 contracts
with no errors or warnings. `finite-smoke` passes with no applicable finite
tests. The non-review-gated risk report routes all 33 proof-bearing items (28
critical, 5 high) and leaves independent review for A6.

`reflow` left all six changed proof-bearing files unchanged, and their targeted
`precheck` runs all pass. `content-policy --audit` passes all 39 scoped items;
the provenance/URL reconciliation passes all 39; `audit-manifest` reports 361
`published-backward` and 127 `same-batch` edges; `rendercheck`, `depsource`,
`extcheck`, and `fwdcheck` pass. `citecheck` reports 22 corpus-wide heuristic
warnings and none names a topology-manifest item. `prosecheck` reports its 580
legacy heuristic warnings and no error. The scoped diff passes `git diff
--check`.

The global `depcheck` is red only in the expected post-material-repair state:
it reports 20 wave-wide `published-unaudited` items awaiting A6, exactly nine
from this topology batch and eleven from sibling batches. Its other
`cited-not-in-deps` lines are the pre-existing corpus warning class, not errors;
no topology A4 repair appears there. The local `audit-split` invocation could
not start `/bin/sh` under this sandbox (`EPERM`), so the orchestrator should run
that mechanical classifier. The disk-verified topology split is 30 pure retags
and nine materially changed items, with the page-summary repair recorded
separately. The whole-wave `impact-audit` template remains an orchestrator task
after all batches finish.

### Coverage handed to Alpha

A1, A2, and the authorised A4 application are complete for all 39 manifest
items. I read every numbered step in all 33 proof-bearing items, every Fact
citation against the exact target clause, every declared dependency citation
for existence, ordering, hypotheses, quantifiers, and direction, every Remark,
and the A-page summary. There is no coverage exception and no unresolved
mathematical concern in this batch. The only outstanding work is independent
A6 proof-refutation, certification of the nine material items, and the
orchestrator's whole-wave impact/gate bookkeeping. The nonfatal long A-page
summary observation remains recorded and the owner queue is empty.
