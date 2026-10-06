# Step 3b dispatch report — `projective-git-from-linearized-line-bundles`

- Run: `frontier-40-geometry-braids-rep-27`
- Dispatch label: `step3b-pair-projective-git-from-linearized-line-bundles-78a2afc1ebab6a06` (role alpha-high)
- A page: `projective-git-from-linearized-line-bundles` (order 883, batch 17)
- B page: `projective-git-from-linearized-line-bundles-examples` (order 884, batch 17)
- Status at handoff: **all 19 items authored, checked, and carrying current
  Step-3b `accept`/`repaired` decisions at confidence 1**; both library pages
  created; batch-17 proof contracts present and strict-clean; no added items,
  no escalations left open for this pair.

## Owned items (19), authoring/decision order

Levels recomputed from the run manifests with `dependencyLevels` after the
final edits; all 19 match their recorded `dependency_level`.

| # | level | id | kind | decision |
|---|-------|----|------|----------|
| 1 | 0 | `def-g-linearization-of-an-invertible-sheaf` | definition | accept |
| 2 | 0 | `lem-proj-of-finitely-generated-graded-algebra-is-projective` | lemma | **repaired** |
| 3 | 0 | `rem-linearization-existence-outside-this-pair` | remark (`proved_here: false`) | accept |
| 4 | 1 | `def-good-and-geometric-quotients-for-group-actions` | definition | accept |
| 5 | 1 | `lem-linearizations-powers-and-equivariant-section-ring` | lemma | repaired |
| 6 | 2 | `def-invariant-section-ring-and-projective-git-quotient` | definition | repaired |
| 7 | 2 | `lem-ample-linearization-power-equivariant-embedding` | lemma | repaired |
| 8 | 2 | `lem-good-quotient-local-on-target` | lemma | repaired |
| 9 | 3 | `def-semistable-and-stable-points-for-a-linearization` | definition | repaired |
| 10 | 3 | `lem-ample-invariant-section-charts-are-affine` | lemma | repaired |
| 11 | 3 | `lem-graded-invariants-of-localization-at-an-invariant-element` | lemma | repaired |
| 12 | 3 | `lem-section-ring-of-ample-line-bundle-finitely-generated` | lemma | repaired |
| 13 | 4 | `lem-invariants-of-finitely-generated-graded-rational-algebra-are-finitely-generated` | lemma | repaired |
| 14 | 4 | `cex-semistable-locus-depends-on-linearization` | counterexample (B) | repaired |
| 15 | 7 | `lem-affine-chart-quotients-for-invariant-sections` | lemma | repaired |
| 16 | 9 | `thm-linear-action-projective-git-quotient` | theorem | repaired |
| 17 | 10 | `thm-projective-git-quotient-from-invariant-section-ring` | theorem | repaired |
| 18 | 11 | `thm-good-and-geometric-quotient-on-stable-locus` | theorem | repaired |
| 19 | 12 | `ex-gm-on-projective-line-with-two-linearizations` | example (B) | repaired |

All 19 ids are original scaffold ids; no item was added, dropped or re-homed.
`repaired` is recorded where authoring corrected a scaffold defect (statement,
proof route, stale step reference, placeholder, provenance placement or
contract-facing citation); `accept` where the authored item passed a full
re-read unmodified.

## Mathematical repair of `lem-proj-of-finitely-generated-graded-algebra-is-projective`

The scaffold statement claimed that for **every** common multiple $d$ of the
degrees of a finite homogeneous generating set the Veronese $S^{(d)}$ is
generated in degree one. That claim is false. Counterexample:
$S=\mathbb C[x_1,\dots,x_4]$ with $\deg x_1=2$, $\deg x_2=12$, $\deg x_3=15$,
$\deg x_4=20$; then $L=\operatorname{lcm}=60$ and the monomial
$x_1x_2^4x_3^2x_4^2$ has degree $120=2L$, but no sub-multiset of
$\{2,12,12,12,12,15,15,20,20\}$ sums to $60$, so it is not a product of two
monomials of degree $L$; hence $S^{(L)}$ is not generated in degree one.

The item now states and proves generation in degree one for the specific
multiple $d=kL$ with $k=\max(1,N-1)$, $N$ the number of positive-degree
generators, by a self-contained minimal-counterexample argument: a degree-$md$
monomial ($m\ge2$) that is not a product of $m$ degree-$d$ monomials has no
sub-vector of degree $kL$; a maximal family of $L$-blocks then leaves a
leftover $u$ with $\deg u\ge NL$ but $u_i<L/d_i$ for all $i$, so
$\deg u<NL-\sum_i d_i<NL$, a contradiction. The Remarks record the
counterexample and the standard consequence that all sufficiently large
multiples of $L$ work (apply the lemma to the standard graded $S^{(d)}$).
Reference for the phenomenon (not used as a proof input): D. Muller and
B. Paemurru, *Very ample line bundles on weighted projective spaces and
weighted blowups*, arXiv:2510.03036v2, Example 1.7 (Deligne weights
$(1,6,10,15)$: $d=60$ works, $d=30$ fails).

Consumers use only the resulting projectivity of $\operatorname{Proj}$ of a
finitely generated graded $\mathbb C$-algebra: `[F2]` of
`thm-linear-action-projective-git-quotient` and `[F1]` of
`thm-projective-git-quotient-from-invariant-section-ring`. The manifest
statement and strategy for this item were updated to the repaired form, and
the Step 3a pair-scope decision was refreshed (see below).

## Other authoring repairs

- `thm-linear-action-projective-git-quotient`: the stable-locus argument was
  rewritten. $X_c$ is the union of the charts $X_f$ on which all orbits are
  closed, and $X^s=X_c\cap\{\dim G_x=0\}$ is proved in both directions. A
  point of a closed chart has closed orbit in $X^{ss}$ because every semistable
  limit point of its orbit lies in every chart containing the point (invariant
  forms have constant vanishing behaviour on orbit closures). Conversely a
  stable point admits an invariant $h$ on a chart separating it from the
  positive-dimensional-stabilizer locus, by clause (v) of the affine good
  quotient applied to two disjoint closed $G$-stable subsets; on $X_h$ all
  stabilizers are zero-dimensional, so all orbits have dimension $\dim G$ and
  a limit orbit of smaller dimension is impossible. The chart quotients are
  geometric, glue, and the closed complement of the finite-stabilizer locus
  has closed image (clause (iv)), giving $Y^s$ open, $X^s=\pi^{-1}(Y^s)$ and
  $\pi:X^s\to Y^s$ geometric. Statement (iv) now also records the chart
  characterization required by `thm-good-and-geometric-quotient-on-stable-locus`.
- `thm-good-and-geometric-quotient-on-stable-locus`: the scaffold's two
  chart-wise directions (which were incomplete) were replaced by a correct
  transfer from the linear-action theorem along a $G$-equivariant very ample
  power $i:X\hookrightarrow\mathbf P(V)$ with $i^*\mathcal O(1)\cong L^{\otimes m}$,
  using $X^{ss}(L)=X'^{ss}$, $X^s(L)=X'^s$, the Veronese identification of the
  quotients and the correspondence of invariant-section charts with invariant
  forms (restriction on invariants is surjective). Deps now match actual use.
- `thm-projective-git-quotient-from-invariant-section-ring`: the Statement's
  awkward parenthetical was replaced by explicit links to
  `def-g-linearization-of-an-invertible-sheaf` and `def-ample-invertible-sheaf`
  (dep added), the spurious QED tombstone on step 1.4 was removed
  (proof-layout defect) and the conclusion now cites the actual steps.
- `lem-affine-chart-quotients-for-invariant-sections`: the literal placeholder
  `g^{...}` was replaced by $g^{\deg f}/f^{\deg g}$, a stale remark reference
  corrected, and the inherited AC use recorded.
- Stale internal references after canonical relabeling were fixed in
  `lem-linearizations-powers-and-equivariant-section-ring` (terminal list),
  `lem-graded-invariants-of-localization-at-an-invariant-element` (2.1/3.1),
  `lem-ample-linearization-power-equivariant-embedding` (2.1/3.1);
  `lem-good-quotient-local-on-target`, `lem-graded-...`, `lem-affine-chart-...`
  and `thm-good-...` now record their inherited AC use so the declared AC
  facts are contract-covered.
- `def-semistable-and-stable-points-for-a-linearization`: the Remark claiming
  that "only the common multiples of the degrees of a generating set" suffice
  was corrected to "a suitable common multiple", consistent with the repaired
  lemma.
- `cex-semistable-locus-depends-on-linearization`: the `generation` block was
  moved from inside `provenance` to a top-level frontmatter key (content-policy
  reads it at top level); role `counterexample` is the permitted role for an
  ai-generated counterexample.
- `def-invariant-section-ring-and-projective-git-quotient` and
  `def-semistable-and-stable-points-for-a-linearization`: `forward_refs` added
  for the two companion-page demonstrations linked in Remarks, clearing
  fwdcheck `forward-undeclared` findings.
- `ex-gm-on-projective-line-with-two-linearizations`: the conclusion cited
  "Example 4.1"/"Example 5.8", whose decimals the contract reader parses as
  step tokens; rewritten to name the sources' examples without decimal
  numerals (exact locators remain in `sources.references`).

## Step 3a uncertainties rechecked

1. The Künneth-type identification
   $\Gamma(G\times X,\mathcal O_G\boxtimes L)\cong\mathcal O(G)\otimes\Gamma(X,L)$
   is not imported: step 1.3 of
   `lem-linearizations-powers-and-equivariant-section-ring` derives orbit
   finiteness directly from a finite affine cover, local trivializations and
   the affine-product coordinate-ring supplier. No supplier item was created.
2. Degree preservation of the Reynolds operator in
   `lem-graded-invariants-of-localization-at-an-invariant-element` is carried
   as an explicit hypothesis and discharged against the completed batch-16
   item `lem-reynolds-operator-and-invariant-subring-properties` (verified
   accept, confidence 1).
3. No Hilbert–Mumford criterion appears anywhere; every theorem keeps the
   linearization as an explicit hypothesis, and no linearization-existence
   claim is made (the external record is `rem-linearization-existence-outside-this-pair`,
   `proved_here: false`, connected + normal hypotheses, matching source URL).

## Supplier reconciliation (batch-16)

All 10 batch-16 suppliers are on disk and their Step-3b item receipts were
current at decision time (`check --phase final` showed none of them open;
decisions: 8 accept, `lem-stabilizer-dimension-semicontinuity` and
`lem-orbit-dimension-and-closed-orbits-for-complex-group-actions` repaired).
Their statements were re-read against the consuming steps:

- `def-categorical-and-geometric-quotients-of-classical-varieties` →
  `def-good-and-geometric-quotients-for-group-actions` (Definition),
  `lem-good-quotient-local-on-target` (F1/F2, steps 1.1/2.2/3.1),
  `thm-linear-action-...` (F6), `lem-affine-chart-...` (F5).
- `thm-complete-reducibility-and-reynolds-operator-for-complex-reductive-group`
  and `lem-reynolds-operator-and-invariant-subring-properties` →
  `lem-graded-invariants-...` (F1, steps 1.1–3.1),
  `lem-invariants-...` (F3/F4, steps 2.1/3.1),
  `lem-affine-chart-...` (F3, step 2.1), `thm-good-...` (F3, step 3.1).
- `lem-invariant-ring-of-finite-dimensional-module-is-finitely-generated` →
  `lem-invariants-...` (F4, steps 2.1/3.1).
- `thm-invariant-ring-finite-generation-and-affine-categorical-quotient` →
  `lem-affine-chart-...` (F5, step 3.1), `thm-linear-action-...` (F4, steps
  2.1/2.3/3.2/4.1).
- `lem-stabilizer-dimension-semicontinuity` and
  `lem-orbit-dimension-and-closed-orbits-for-complex-group-actions` →
  `thm-linear-action-...` (F5, steps 2.3/3.1/4.1).
- `def-stable-points-of-an-affine-action`, `thm-stable-locus-geometric-quotient`
  → `thm-linear-action-...` (F4); `lem-positively-graded-noetherian-algebra-is-finitely-generated`
  → `lem-affine-chart-...` (F4, step 1.2).

No escalated supplier/consumer/step triple remains for this pair.

## Scope refresh and decisions

- Step 3a pair scope was refreshed after the two statement repairs
  (`lem-proj...`, `thm-linear-action...(iv)`) and the deps sync, since the
  manifest statements are part of `scopeHash`. The refreshed review receipt is
  `...-step3a-review-projective-git-from-linearized-line-bundles.json`,
  decision `sufficient`, sha256 `971331bb9aeb2e627071b38a8eb830a249ff6c4da40065694d75f930634a8d94`.
  No item, page, pair or promised claim was added or dropped; scope is
  unchanged.
- All 19 item decisions were recorded after the final content edits with
  `node tools/step3-decisions.mjs record-item --decision accept|repaired
  --confidence 1 --dependencies <direct deps>`: 3 `accept`
  (`def-g-linearization-...`, `rem-...`, `def-good-and-geometric-...`) and 16
  `repaired`. `check --phase final` shows none of the 19 open.

## Checks actually run (after the final edits)

| check | result |
|-------|--------|
| `precheck` explicit paths, all 19 | 14 proof-bearing items checked, 0 failing; 5 definition/remark items n/a |
| `proof-layout` all 19 in one command | 19 items, 77 steps, 0 defects |
| `rendercheck` all 19 | OK: no wikilink-in-math, no delimiter defects, every math span KaTeX-parses |
| `proof-contract --strict` batch-17 | 19/19 items checked, 0 errors, 1 non-fatal `shotgun-bracket` warning on `thm-linear-action-...` (step 2.3 cites 4 of 6 facts) |
| `manifest-deps` batch-17 | 19 items, 0 missing, 0 errors |
| `manifest-integrity --run` | 54/54 pages represented, no scope drift |
| `coverage-checklist` batch-17 | 2 pages, 48 harvested results, 0 errors, 0 warnings |
| `content-policy` batches 13–17 item mode | 77 scoped items, 0 errors, 0 warnings |
| `depcheck --items-file` (19 items) | no errors; links resolve |
| `fwdcheck` | no findings in this pair after the `forward_refs` additions (run-level findings in other pairs reported below) |
| `extcheck` | no findings in this pair; `rem-...` declared and matched |
| `item-dependency-levels check --run` | no errors touching this pair; all 19 levels recomputed and equal: 0,0,0,1,1,2,2,2,3,3,3,3,4,4,7,9,10,11,12 |
| `validate-plan research/plan-spec.json` | OK (acyclic and consistent; warnings are for other pages) |

## Artifacts written

- 19 item files under `items/` (all owned ids).
- `research/frontier-40-geometry-braids-rep-27-batch-17.pages.json` — deps
  synced to item frontmatter, `dependency_level` unchanged/corrected, and the
  two repaired statements plus strategies for `lem-proj...`,
  `thm-linear-action-...`, `thm-good-...` updated. Sibling rows: batch-17
  contains only this pair, so nothing else was touched.
- `research/frontier-40-geometry-braids-rep-27-batch-17.proof-contracts.json` —
  version 1, scope = the 19 ids, 117 citations, derivations for all 77 steps,
  and all 8 standard boundary cases disposed per item.
- `library/algebraic-geometry/projective-git-from-linearized-line-bundles.md`
  and `...-examples.md` — status draft, `requires` as planned, item/example
  lists in manifest order, with page prose.

## Published concerns and out-of-scope findings

- **Confirmed in-scope defect, repaired:** the false scaffold claim of
  `lem-proj-of-finitely-generated-graded-algebra-is-projective` (exact evidence
  above). Because the item is part of this dispatch's own scaffold, this was
  repaired in scope and reported to Step 4 through the refreshed manifest
  statement rather than the published-defect ledger; a Step 4 splice check
  should confirm the manifest carries the repaired statement.
- No published item outside this pair was found defective during the authoring
  reads. Run-level gates surfaced defects owned by other pairs, left untouched:
  `cex-no-claim-of-resolution-in-positive-characteristic` (extcheck
  external-unused), `thm-homogeneous-space-for-smooth-affine-group`
  (fwdcheck forward-undeclared), `thm-the-hecke-trace-construction-is-an-oriented-link-invariant`
  and `thm-the-homflypt-skein-relation` (fwdcheck link-unplanned
  `def-temperley-lieb-quotient-and-jones-specialization`), and the
  `highest-weights-and-rational-representations-of-split-reductive-groups` pair
  (8 dependency-level mismatches in the 28–32 range). These belong to their
  respective owners; none is consumed by this pair.

## Added suppliers

None. No prerequisite item had to be created: all direct and in-run
dependencies exist, the ids added to dependency lists during repair
(`def-twisting-sheaf-proj`, `def-associated-sheaf-graded-module-proj` for
`lem-proj-...`; `def-reductive-and-linearly-reductive-over-c`,
`def-homogeneous-coordinate-ring`, `def-affine-cone-projective-set` for
`def-semistable-...`; `thm-hilbert-basis-theorem`,
`cor-projective-cohomology-finite-dimensional-field` and friends) are already
published items on disk.

## Open obligations

- None for this pair. All 19 items carry current Step-3b decisions, both pages
  and the batch-17 contract exist, and the pair-scope decision is current.
- Non-fatal: the contract `shotgun-bracket` warning on
  `thm-linear-action-...` step 2.3 is informational; the step genuinely uses
  the four facts it cites.
- Run-level continuity: other pairs in this run are still mid-authoring
  (`check --phase final` showed 622/894 items accepted overall at handoff).
  Their open
  items are not this pair's obligations, but a later edit to any completed
  batch-16 supplier would invalidate the transitive input hash of the
  consumers here and require a fresh item decision; re-run
  `step3-decisions check --run frontier-40-geometry-braids-rep-27 --phase final`
  before the Step 3 gate.

## Checkpoints (per-item, condensed)

- `def-g-linearization-of-an-invertible-sheaf`: total-space and cocycle forms,
  twists, no-existence boundary; 6 deps published; accept.
- `lem-proj-...`: false scaffold claim repaired to $d=kL$, counterexample and
  minimal-counterexample proof; manifest statement/strategy updated; repaired.
- `rem-linearization-existence-outside-this-pair`: recorded external statement,
  `proved_here: false`, external record complete; accept.
- `def-good-and-geometric-quotients-for-group-actions`: clauses (i)–(v);
  categorical/geometric relation proved by `lem-good-quotient-local-on-target`;
  accept.
- `lem-linearizations-powers-and-equivariant-section-ring`: tensor-power
  linearizations, rational section modules, graded rational $G$-algebra;
  terminal reference fixed; repaired.
- `def-invariant-section-ring-and-projective-git-quotient`: Proj of the
  invariant section ring; `forward_refs` added; repaired.
- `lem-ample-linearization-power-equivariant-embedding`: equivariant very ample
  power via the complete linear system; reference fixed; repaired.
- `lem-good-quotient-local-on-target`: locality, categorical property,
  geometric criterion; AC use recorded; repaired.
- `def-semistable-and-stable-points-for-a-linearization`: invariant-section
  definition of the loci; Remark corrected; `forward_refs`; repaired.
- `lem-ample-invariant-section-charts-are-affine`: invariant nonvanishing loci
  are affine and $G$-stable and cover $X^{ss}$; relabeled; repaired.
- `lem-graded-invariants-...`: $(A_f)^G=(A^G)_f$ and its degree-zero form via a
  localized Reynolds operator and complete reducibility; references/AC fixed;
  repaired.
- `lem-section-ring-...`: finite generation of $R(X,L)$ via coherent tails over
  an equivariant very ample power; relabeled; repaired.
- `lem-invariants-...`: Nagata finite generation in graded form; relabeled;
  repaired.
- `cex-semistable-locus-depends-on-linearization`: trivial vs. twisted
  linearization on the one-point variety; generation block moved; repaired.
- `lem-affine-chart-quotients-...`: affine chart quotient and overlap
  compatibility; placeholder/references fixed; repaired.
- `thm-linear-action-projective-git-quotient`: full good quotient, fibre
  description and stable-locus theorem for a linear action; stable-locus proof
  rewritten; repaired.
- `thm-projective-git-quotient-from-invariant-section-ring`: ample case through
  an equivariant power and Veronese invariance; statement/refs fixed; repaired.
- `thm-good-and-geometric-quotient-on-stable-locus`: stable-locus theorem
  transported from the linear case; proof replaced; repaired.
- `ex-gm-on-projective-line-with-two-linearizations`: standard and twisted
  linearizations on $\mathbf P^1$; citation text fixed; repaired.

The entry report's note that the 16 `research/*RESUME.md` files belong to
concluded runs and that `.autopilot/` plus `git log` are the authority was
re-verified: no RESUME file was read or used as evidence in this dispatch.
