# Frontier-32 Step 6c — cross-batch audit and closure

**Run:** `frontier-32`  
**Role:** lead Alpha (`6c-lead`)  
**Computed scope:** 0 saved cross-group edges, 9 saved forward references, and
0 saved post-6b changes. The licensed work introduced four current item-carrier
changes: three forward-reference carriers and one repaired target.  
**Disposition:** all nine computed mathematical obligations are closed. The
repository-wide Step-6 closure battery remains blocked by two external or
upstream outcomes listed below. No judge action, stamp, stage transition, page
addition, page removal, or reading-order change was made.

## Evidence basis and currency

I read `research/frontier-32-cross-group-edges.json`, the current batch-5 and
batch-8 page manifests and proof contracts, every citing and target item, the
relevant independent-reader and refuter evidence, the group-b and group-e 6b
reports and decisions, and their prior-retry result records. The reader,
refuter, and Alpha reports were treated as routing evidence only; every claim,
hypothesis, endpoint, construction, dependency, and current carrier was checked
directly.

Before editing, the three citing-item SHA-256 values exactly matched the saved
post-6b work list: `3fe6960013ef66be988bd3b30815ddff9887adcce1ae745ea4323b41ce5bb893`,
`c38dabfa4366c6992ead30046955bc7872713be41e437427b22181a1a416dac9`,
and `db2c2a75076825d5833c0558ffb1e08162c25b2b480b0b41af3d28b5fbef130f`.
The current and attempt-1 dispatch results agreed. Neither independent review
reported a defect in these particular forward links; that absence did not
pre-clear them.

The append-only machine record is
`research/frontier-32-6c-verdicts.jsonl`: nine `kind:"forward"` rows and four
`kind:"item"` rows. Each carries its current raw-item or composite-carrier hash.
Every non-clean outcome binds one distinct closed `6c-cross` ledger row; clean
item outcomes have `defect_ids:[]`.

## Computed forward-reference obligations

All nine use the required decision `lemmas-added`: the citing carrier now
contains the load-bearing witness, and the corresponding `forward_refs` entry
is absent. None has a remaining blocker.

| citing item → former target | current evidence and disposition | closed defect |
|---|---|---|
| `fs-a-triangle-is-distinguished-whenever-the-three-composites-vanish` → `cex-a-three-term-zero-composite-diagram-that-is-not-distinguished` | The false statement itself uses a nonzero stalk complex and the all-zero diagram. A distinguished cone triangle has a nonzero identity final map (up to the fixed convention), so an isomorphism to the all-zero triangle would force an isomorphism component to be zero. The separately checked target gives the same typed counterexample. | `frontier-32-S6c-forward-triangle-zero-composites` |
| `fs-the-third-map-in-a-morphism-of-triangles-is-unique` → `cex-nonuniqueness-of-a-tr-three-completion` | In `K(Z-Mod)`, the cone of the zero stalk-complex map admits the identity completion and a distinct off-diagonal endomorphism. Both required squares commute, and the latter is nonzero in the homotopy category. The target independently matches the construction. | `frontier-32-S6c-forward-tr3-nonuniqueness` |
| `rem-complete-convergence-implication-diagram` → `cex-almost-sure-convergence-does-not-imply-convergence-of-expectations` | The remark now gives `X_n=n 1_(0,1/n)`: pointwise convergence to zero on `(0,1)` but expectation one. | `frontier-32-S6c-forward-convergence-as-expectation` |
| same remark → `cex-almost-sure-convergence-need-not-imply-lp-convergence` | The inlined shrinking spike `n^(1/p) 1_(0,1/n)` converges pointwise to zero and has constant `p`th moment. | `frontier-32-S6c-forward-convergence-as-lp` |
| same remark → `cex-convergence-in-distribution-need-not-be-in-probability` | For a symmetric two-point variable, `X_n=-X` has the same law as `X`, while `|X_n-X|=2` almost surely. | `frontier-32-S6c-forward-convergence-distribution-probability` |
| same remark → `cex-convergence-in-probability-need-not-be-almost-sure` | Independent indicators with probabilities `1/(n+1)` converge in probability to zero, while the second Borel--Cantelli lemma gives infinitely many unit values almost surely. The target's strict-threshold endpoint was repaired as described below. | `frontier-32-S6c-forward-convergence-probability-as` |
| same remark → `cex-convergence-in-probability-need-not-imply-lp-convergence` | The shrinking spike is nonzero with probability `1/n`, tending to zero, but its `p`th moment remains one. | `frontier-32-S6c-forward-convergence-probability-lp` |
| same remark → `cex-lp-convergence-need-not-imply-almost-sure-convergence` | The dyadic typewriter sequence converges in every finite `L^p`, while every non-endpoint point is hit and missed infinitely often; the endpoint exception is null. | `frontier-32-S6c-forward-convergence-lp-as` |
| same remark → `cex-lp-convergence-need-not-imply-lq-convergence-for-p-less-than-q` | For `1 <= p < q < infinity`, `n^(1/q) 1_(0,1/n)` has `p`th moment `n^(p/q-1) -> 0` and `q`th moment one. | `frontier-32-S6c-forward-convergence-lp-lq` |

## Current post-6b carriers and edits

- Removed only the nine redundant forward-reference metadata entries and their
  later-target prose. The two triangulated false statements retained their
  complete direct proofs. The convergence remark now records all converse
  witnesses inline.
- Repaired `cex-convergence-in-probability-need-not-be-almost-sure`: for the
  strict event `|X_n| > epsilon`, the probability is `1/(n+1)` for
  `0 < epsilon < 1` and zero for `epsilon >= 1`, including the formerly
  misstated endpoint `epsilon=1`. Its batch-5 proof-contract row was corrected
  and synchronized (`frontier-32-S6c-item-probability-threshold-endpoint`).
- Synchronized the affected batch-5 and batch-8 manifest strategies, reconciled
  the plan, and regenerated the merged proof-contract artifact. No stable item
  id changed.

The four item verdicts are: repaired for the probability counterexample, and
clean accepted outcomes for the two triangulated false statements and the
convergence remark.

| current carrier | composite SHA-256 |
|---|---|
| `fs-a-triangle-is-distinguished-whenever-the-three-composites-vanish` | `3328124547d4437cc04c84507405c398851684cd0002b160572345c3434298d4` |
| `cex-a-three-term-zero-composite-diagram-that-is-not-distinguished` | `11f8a7631db8b8e76136807f94fb7498fe95481ba29747fe5e97161ea95ee60d` |
| `fs-the-third-map-in-a-morphism-of-triangles-is-unique` | `a756b03297d7e99214cf38573fe3b99c31b9c7316a316126201755e6bfdc45b2` |
| `cex-nonuniqueness-of-a-tr-three-completion` | `b713492a2210e3f14e1a819e5bc797d1f4b0af0fcb860d1a3f4932aa0565e0a8` |
| `rem-complete-convergence-implication-diagram` | `f5a0ad9db309603689e6e6486a4bdfea3eb255ca2d60a25366632ac38c76fd33` |
| `cex-almost-sure-convergence-does-not-imply-convergence-of-expectations` | `feb42c850f2f0f8c51e5b6a743d0baec03c6e74a9408c9c9c1ddadf9d6ad9440` |
| `cex-almost-sure-convergence-need-not-imply-lp-convergence` | `ba12668a00ceeea56a7bc1eaa25f361127655d350cc950c3a77311333c21998f` |
| `cex-convergence-in-distribution-need-not-be-in-probability` | `69e4c16ed51bbc00b140969caa3c484b1454308271d209471968d79ad7aeae7a` |
| `cex-convergence-in-probability-need-not-be-almost-sure` | `d43883193fd4357f5c250b7a240cbd92a3b2ea9076b4be04295d5d1ff10c4290` |
| `cex-convergence-in-probability-need-not-imply-lp-convergence` | `d4e8144b73f6f5a2ccf492d836d5d4f7209c1f71af0a23d939663b3443fbdea4` |
| `cex-lp-convergence-need-not-imply-almost-sure-convergence` | `251f18c2470c986a4c4e90855ff0098c68e948d460013fa36dfca7b1c10b27e9` |
| `cex-lp-convergence-need-not-imply-lq-convergence-for-p-less-than-q` | `fde376fdef50a679280ff15796ffd4cc20d05e27375bad4c142b5acf6d7b1ed7` |

## Validation and closure-gate outcomes

- PASS: reflow left all four edited items stable; focused precheck passed all
  three proof-bearing edited items. Focused strict contracts passed `26/26`
  for batch 5 and `35/35` for batch 8. Focused content policy, dependency, and
  forward-reference checks were clean.
- PASS: `cross-group-edges check --reconcile-plan` and the final currency check
  both report 0 edges, 9 saved forwards, 0 saved changes, and 0 errors. The
  checker accepts all four introduced item changes and all verdict/ledger
  bindings.
- PASS: final routing reports 717 items, 359 adjudication obligations, and zero
  errors. Plan validation, manifest integrity (`46/46` pages), splice
  verification, and the repo-wide precheck, depcheck, fwdcheck, extcheck,
  rendercheck, prosecheck, depsource, and pathcheck commands exited zero.
- PASS: all 19 coverage checklists have zero errors (five retain their existing
  low-yield warnings); all 19 content-policy checks have zero errors and zero
  warnings.
- PASS: merged strict proof contracts cover `478/478` items with zero errors or
  warnings. Finite smoke is live and passes its selected check; risk-report has
  zero errors; boundary-audit finds no contradicted or template dispositions;
  citation-fidelity finds no missing quote or widening candidate; gate-liveness
  reports nonzero checks for all four gate families.
- PASS: the post-6b-to-current impact audit records three changed interfaces
  and two affected consumers. Both consumers were reread against the current
  source carriers and are `still-licensed` in
  `research/frontier-32-impact-6c.json`.
- PASS: the 10 distinct closed `6c-cross` defect rows validate through the
  append-only defect-ledger interface; the generated ledger view is current.

## Repair cycle 1 — impact-audit receipt closure

The repair dispatch recomputed the exact `pre-author` to `post-6b` impact set
from the current tree before editing the receipt: 679 changed public interfaces
and exactly the 593 live affected items named by the task. The original receipt
had one missing-reviewer error plus a pending status and empty note for every
item (1,187 errors total).

All 593 consumers changed within that same snapshot window and all map to one
of the current 19 batch/page carriers. Frozen Step-6 routing covers every row:
110 are reader-touched only, 446 are refuter-opened only, and 37 have both
routes. The current reader and refuter JSON hashes match all 19 hashes frozen in
the Step-6 scope artifacts, including the corrected retry artifacts. All 11
reader findings and all 187 refuter findings have matching, resolved Alpha
decisions; no Alpha decision has an unresolved verdict. The high-risk detector
routed 79 of the affected carriers. The four affected carriers changed after
the post-6b snapshot are already covered by current `kind:"item"` 6c verdicts.

`research/frontier-32-impact.json` now names the repair reviewer and contains
593 item-specific `repaired` dispositions. Each note records the current batch
and page, frozen review route, direct changed-interface citation channels,
complete current changed-source cone, applicable high-risk and Alpha decisions,
and post-6b currency evidence. This repaired only the missing receipt state: no
item or page changed, so no mathematical defect-ledger row or new 6c gate/item
verdict was created.

Focused verification passes on the current tree:

- `impact-audit` reports 679 changed interfaces, 593 affected items, zero
  errors, and zero warnings.
- `cross-group-edges check --reconcile-plan` reports 0 current edges, 9 saved
  forward references, 0 post-6b changes, and 0 errors.
- The receipt parses with 593 unique rows, no blank notes, and no invalid
  statuses; the pre-existing 6c verdict ledger remains byte-identical.

## Remaining blockers after repair cycle 1

1. **Audit-manifest dependency:** the consolidated audit manifest finds one
   unresolved dependency outside the computed queue:
   `lem-h-five-and-co-e-free-family-has-the-erdos-hajnal-property` (batch 13)
   declares `cor-leaf-and-coleaf-deletion-preserves-the-erdos-hajnal-property`,
   which resolves to no published or in-run item. This dispatch did not alter
   another group's item.
2. **URL environment:** URL sweep found three URLs and could resolve no host;
   all three failures are `curl: (6) Could not resolve host`, with no local
   archive recovery. This is an unresolved environmental liveness result, not
   evidence that the citations are dead and not a mathematical defect.

The verdict schema has no unresolved gate value. Accordingly, no clean or
defect gate row was invented for these blockers: the exact failure artifacts
and commands above are the evidence, and the blockers remain named rather than
misclassified. The computed 6c queue itself has no remaining blocker.

## Repair cycle 2 — audit-manifest dependency closure

### Reproduction and evidence

- The current-tree reproduction of the task's primary gate failed with one
  actual unresolved dependency, but it was not the relationship printed as the
  dispatch reason. The printed
  `lem-germ-equivalence-relation -> def-equivalence-relation` edge resolves to
  the current published definition and was correctly classified
  `published-backward`.
- The sole failing edge was
  `lem-h-five-and-co-e-free-family-has-the-erdos-hajnal-property ->
  cor-leaf-and-coleaf-deletion-preserves-the-erdos-hajnal-property`. The target
  file exists, but it remains draft, is on no published page, is outside all 19
  current batches, and itself cites an unpublished theorem. The governing
  `audit-manifest` rule therefore correctly classified the load-bearing edge
  as `unresolved`; this was not a false positive.
- The independent batch-13 reader had opened the lemma, its Erdős--Hajnal and
  graph-definition interfaces, and Huang--Ju--Zhou Lemma 6.3 and its surrounding
  proof route. The refuter also opened the lemma and did not flag its induction;
  its only batch-13 finding concerned the separate finite co-$E$ witness
  example. Repair cycle 1 left this exact manifest failure named and did not
  alter the item. Those artifacts support the mathematics but do not override
  the current target's unavailable publication status.

### Disposition and edits

The defect is confirmed nonfatal and closed as
`frontier-32-S6c-gate-audit-manifest-leaf-coleaf`. The lemma's claim and
induction are sound, while its internal carrier contract was not. Promoting the
draft corollary would also have promoted an unaudited dependency chain, so the
repair instead states Huang--Ju--Zhou Corollary 1.8 exactly as source fact F4
and removes the draft internal dependency and wikilink.

The mathematical read checks the full induction. The $i=0$ family inherits the
property from $H_0$; every $\{H_i,\overline{P_5}\}$-free class inherits it from
$\overline{P_5}$. For $1\le i\le5$, deleting the defining leaf $v_i'$ from
$H_i$ gives $H_{i-1}$. The vertex $q$ is the displayed leaf of $E$, hence a
co-leaf of co-$E$, and deleting it from co-$E$ gives $\overline{P_5}$. Thus the
two families in Corollary 1.8 are exactly the induction-hypothesis family and
the second base family. The finite family is nonempty, the $i=0$ base is
explicit, and all five induction steps are covered.

The item, batch-13 manifest strategy/dependencies, batch notes, batch proof
contract, merged proof contract, and plan entry now agree. The current
composite carrier hash is
`24ac0313de31431ea9f56a15d4102b4f9d3aa93494ef29386ec0f912c7dd3d5d`.
The append-only 6c verdict file contains one `kind:"gate"` row owning the
defect and one clean `kind:"item"` current-carrier row.

### Focused validation and remaining blocker

- Reflow completed, and focused precheck reports one induction item checked
  with zero failures.
- Focused renderer validation passes for the item and its page; batch-13
  manifest-deps and content-policy report 17 scoped items and zero errors or
  warnings.
- The focused strict batch contract and merged strict contract each report
  one of one item checked with zero errors or warnings. Plan validation passes
  with only its standing redundant-prerequisite notices.
- The reproduced primary gate now reports 1,811 relationships over 717 items
  in 19 batches and zero defects; `unresolved` is absent from its summary.

No `audit-manifest` blocker remains. The prior URL-resolution environment issue
is outside this dispatch's primary gate and was not reclassified or repaired.

## Repair cycle 3 — impact-audit-6c receipt closure

### Reproduction and current evidence

The exact current-tree gate recomputed four changed public interfaces and five
affected items. The cycle-2 repair of
`lem-h-five-and-co-e-free-family-has-the-erdos-hajnal-property` added that lemma
to the three interfaces already recorded in the receipt and added exactly three
batch-13 consumers. The receipt was therefore stale; the five reported errors
were not false positives.

The batch-13 reader opened all three live consumers, their dependency
interfaces, and the complete Huang--Ju--Zhou Lemmas 6.3--6.4 route. The refuter
opened the structural theorem and the four-tooth example and reported only a
different example. The frozen Step-6 scope routes the corollary and theorem as
touched and the example as refuter-opened. Their current item hashes exactly
match the post-6b snapshot:

| live consumer | current/post-6b item SHA-256 | current composite carrier SHA-256 |
|---|---|---|
| `cor-the-singleton-family-containing-e-has-property-star` | `882f5bd473bab9be3e4bf28c2dae7384ac8f2ccd775c5b917f4228ca804e3533` | `1f198cbb92ff2a2872965cda5c890c605567bbda98458e2d7e054830ef4aba27` |
| `ex-a-bipartite-four-tooth-comb-has-the-co-e-structural-partition` | `b6a0fd6400657082537048eca9f7ad875c2762a50923c726be4ae275bf64e3f0` | `d478164c44a83186edede69906ff6f2248107f55328ef88d22a5de0aba9646c4` |
| `thm-co-e-free-comb-blocks-admit-an-h-five-co-e-structural-partition` | `8de7ff9cb69cb93a34b66a5d9d273f2f243019b0e357d6557cbb09c8a8dee223` | `06e55b617236cfdeb9fc0e26b85fae643eeb69fcca70fa571265a5a7449a374a` |

The current risk detector classifies the corollary MODERATE, the theorem
CRITICAL, and the example ORDINARY. The theorem's item-specific risk review is
complete and checks quotient termination, cross-block quantifiers, the empty
`X_i^0` branch, the nonempty choice from each comb block, and the one-block
pattern. The scoped reviewed-risk gate has zero errors.

The primary source currently states Corollary 1.8 at HTML lines 113--115,
Lemma 6.3 and its five leaf-deletion steps at lines 970--974, and the exact
special-vertex structural partition at lines 975--1048. Those statements agree
with the current lemma, structural theorem, and local property-(*) route.

### Dispositions and edit

- `cor-the-singleton-family-containing-e-has-property-star` is
  `still-licensed`. Its F1 uses the unchanged conclusion that
  `\{H_5,co-E\}` has the Erdős--Hajnal property. The current source-level
  Corollary 1.8 proof of that conclusion therefore still supplies the common
  constant used with the unchanged local partition theorem.
- `thm-co-e-free-comb-blocks-admit-an-h-five-co-e-structural-partition` is
  `not-load-bearing` with respect to the changed lemma. Although the lemma is
  present in `deps`, no Fact or proof step invokes it: the theorem uses only
  the overlap-quotient, terminal-pattern, external-purity, and graph-definition
  interfaces. Its two cases prove the structural partition without an
  Erdős--Hajnal constant.
- `ex-a-bipartite-four-tooth-comb-has-the-co-e-structural-partition` is
  `not-load-bearing`. Its impact is only transitive through the theorem, while
  its proof directly checks the displayed singleton partition. Bipartiteness
  excludes co-$E$ because co-$E$ contains a triangle; every four-vertex block
  licenses the singleton choice; each residual set is independent and hence
  $H_5$-free; and every external block vertex is anticomplete to the singleton.

`research/frontier-32-impact-6c.json` now contains the exact four-interface,
five-consumer scope and all five evidence-bearing dispositions. No item, page,
manifest, proof contract, or provenance record changed. The stale receipt was
a confirmed nonfatal verification-contract defect caused by the authorised
cycle-2 item repair. It is closed as
`frontier-32-S6c-gate-impact-audit-6c-receipt-scope` through the canonical
append-only ledger interface and a current-hash `kind:"gate"` verdict. The
changed lemma's current `kind:"item"` verdict already exists from cycle 2; no
new item or page verdict was added because cycle 3 changed neither carrier.

### Focused verification and remaining blocker

- PASS: the reproduced `impact-audit-6c` reports 4 changed interfaces, 5
  affected items, 0 errors, and 0 warnings.
- PASS: focused precheck reports 3/3 clean; the strict proof-contract check
  reports 3/3 with zero errors or warnings.
- PASS: the scoped risk report, including `--require-reviewed`, routes all
  three items with zero errors.
- PASS: focused rendercheck accepts the three items and both batch-13 pages;
  manifest-deps and content-policy each report 17 scoped items and zero errors
  (content-policy also has zero warnings).
- PASS: `cross-group-edges check --reconcile-plan` reports 0 edges, 9 saved
  forward references, 0 post-6b changes, and 0 errors. The current 406-row
  frontier-32 defect ledger validates with zero errors.

No `impact-audit-6c` blocker remains. The prior URL-resolution environment
issue is outside this dispatch's primary gate and was not reclassified.

## Repair cycle 4 — audit-manifest liveness output

### Reproduction and current evidence

The cycle-4 task contains 86,430 characters of primary-gate output, stops after
a batch-12 published-backward relationship, and contains no
`over N item(s) in` summary. This is why the liveness probe returned unknown.
The current receipt itself is clean and complete: 1,811 relationships over 717
items in 19 batches, comprising 1,199 same-batch and 612 published-backward
edges, with no unresolved or missing-source edge. The exact current-tree gate
also exits zero when its stdout is redirected to a file.

The cycle-2 reader/refuter evidence and current carriers remain consistent with
that clean result. Batch 13 still contains the repaired
`lem-h-five-and-co-e-free-family-has-the-erdos-hajnal-property`; the current
composite carrier hash is
`24ac0313de31431ea9f56a15d4102b4f9d3aa93494ef29386ec0f912c7dd3d5d`.
The saved cross-group work list still has zero edges, nine resolved forward
references, and zero post-6b changes. No reader or refuter was rerun, and no
mathematical item, page, manifest, contract, provenance record, or ledger row
was changed in this cycle.

### Disposition and mechanical repair

This is a clean `false_positive` gate outcome rather than an item defect.
`tools/audit-manifest.mjs` wrote a large human-readable report and then called
`process.exit(...)`. When stdout is the engine's pipe, forced termination can
discard buffered writes; the captured prefix therefore omitted the terminal
summary even though the computation was clean. The tool now assigns
`process.exitCode` after printing, preserving the same zero/nonzero status while
allowing stdout and stderr to drain.

`tools/autopilot/test/audit-manifest-exit.test.mts` now includes a large piped
fixture that exceeds the immediately writable buffer and requires the terminal
liveness summary. The append-only 6c verdict file contains a current-hash
`kind:"gate"` row with `defect_ids:[]`; under the mechanical-failure rule, no
item defect or defect-ledger row was invented.

### Focused verification and remaining blocker

- PASS: the exact piped frontier-32 `audit-manifest` gate emits
  `audit-manifest: 1811 relationship(s) over 717 item(s) in 19 batch(es); 0
  defect(s)` and exits zero.
- PASS: `node --check tools/audit-manifest.mjs` and the autopilot TypeScript
  typecheck exit zero.
- PASS: `cross-group-edges check --reconcile-plan` reports zero edges, nine
  saved forward references, zero post-6b changes, and zero errors; the current
  406-row frontier-32 defect ledger validates with zero errors.
- The focused Node test file cannot execute its existing `spawnSync` fixtures
  inside this dispatch sandbox: nested process creation returns `EPERM`. The
  direct shell-pipe reproduction exercises the same buffering boundary and is
  clean; this sandbox limitation is not a primary-gate blocker.

No `audit-manifest` blocker remains. The prior URL-resolution environment issue
is outside this dispatch's primary gate and was not reclassified.
