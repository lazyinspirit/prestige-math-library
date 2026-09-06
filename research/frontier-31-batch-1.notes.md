# frontier-31 / beta / batch-1 — scaffold notes

## Scope and controlling design

Owned artifacts are this file, `frontier-31-batch-1.pages.json`, and
`frontier-31-batch-1.coverage.json`. No page, item, plan, workflow, or other
batch file was changed.

For each pair I read the entire named design section, not merely its two line
anchors. The anchors `plan-group-theory-track.md:L2548` and `:L2620` are the
start of GT-20 and its B-page subsection; likewise `:L2860` and `:L2940` are
the start of GT-23 and its B-page subsection. Thus they are parts of one
section, not competing amendments; the full later-visible section controls.

There are two spec/design drifts. They are recorded, not adjudicated here:

| page | design requires | batch/spec requires retained |
| --- | --- | --- |
| CFSG landscape | socles, composition-series, Sylow/nilpotent | brauer-character examples; socles/Onan–Scott |
| Schur multipliers | second cohomology A, derived group cohomology, Ext, tensors | second-cohomology examples |

The manifest retains the batch/spec requirements exactly. The needed lower
items are nevertheless declared as item dependencies, so drift stage—not this
batch—can decide whether the page-level edges must change.

## Mathematical convention, item and proof record

Every manifest item has an explicit `deps` array. The manifest is the exact
claim/dependency ledger; this table records the authored route and limits.

| page | ids in dependency order | route and limits |
| --- | --- | --- |
| CFSG A (24) | `rem-simple-groups-as-composition-factors`; `def-quasisimple-group-component-and-layer`; `lem-distinct-components-commute`; `def-generalized-fitting-subgroup`; `thm-generalized-fitting-subgroup-contains-its-centralizer`; `def-p-local-subgroup`; `rem-cyclic-and-alternating-simple-families`; `rem-finite-simple-groups-of-lie-type-as-named-families`; `rem-the-twenty-six-sporadic-simple-groups`; `thm-classification-of-finite-simple-groups`; `rem-low-rank-coincidences-and-duplicate-family-names`; `rem-history-of-the-first-generation-classification`; `rem-the-quasithin-gap-and-its-repair`; `rem-status-of-the-second-generation-proof`; `thm-feit-thompson-odd-order-theorem`; `rem-schreier-conjecture-as-a-cfsg-consequence`; `rem-two-generation-of-finite-simple-groups`; `rem-what-the-library-does-and-does-not-prove-about-cfsg`; six listed `fs-` items | Locally prove only the component/layer/generalized-Fitting spine (items 2–5); use source tables for all family names. CFSG, Feit–Thompson, Schreier, and two-generation are non-load-bearing source-recorded landmarks, never targets. No Lie algebra, recognition, order, character-table, or sporadic construction claim. |
| CFSG B (6) | `ex-cyclic-simple-groups-of-prime-order`; `ex-a-five-as-the-smallest-nonabelian-simple-group`; `ex-psl-two-seven-and-a-low-rank-coincidence`; `ex-a-suzuki-group-family-entry`; `ex-the-mathieu-groups-among-the-sporadics`; `cex-composition-factors-do-not-determine-the-extension` | Prove the elementary cyclic/A5 and C4 versus C2×C2 checks locally. The three table examples are source-labelled rather than constructions. |
| Schur A (38) | `def-schur-multiplier-of-a-group` through `rem-projective-representations-and-the-schur-multiplier`, followed by six listed `fs-` items | Convention: **M(G)=H_2(G;Z)**. Hopf follows the free-presentation low-degree homology sequence; UCE uses `[F,F]/[F,R]` only for perfect G; UCT is natural but split only noncanonically. The added focused prerequisites are finite presentation, low-degree sequence, finite-generation, perfectness, transfer torsion, and finite multiplier; they are necessary to prove cover existence rather than smuggling it in. Finite covers are not declared unique. |
| Schur B (6) | `ex-schur-multiplier-of-a-cyclic-group`; `ex-schur-multiplier-of-a-finite-abelian-group`; `ex-the-binary-icosahedral-cover-of-a-five`; `ex-hopf-formula-from-a-one-relator-presentation`; `ex-a-stem-extension-that-is-not-universal`; `cex-nonuniqueness-of-schur-covering-groups` | The calculations use Hopf/exterior-square results. Matrix and nonunique-cover examples must retain their cited source identifications and invariants when authored. |

The manifest’s `claim` field is the exact per-item statement (including all
six false statements in each A page); it is deliberately the single canonical
claim record to prevent a second paraphrased list drifting from dependencies.
No A page is near the split threshold: counts are 24 and 38, respectively.

## Source harvest and support

All URLs, exact read ranges, source headings, and item dispositions are in the
coverage JSON. Independent treatments read were:

- CFSG: Stephen D. Smith’s 342-page lecture notes, pp. 1–23; Aschbacher’s
  five-page status survey; Solomon’s history opening and §1; and the AMS
  Number-10 page. Smith supplies the family table, components, F* and Schreier;
  Aschbacher supplies the gap/status history; Solomon supplies first-generation
  history; AMS supplies the date-qualified continuing-series wording.
- Schur: Clara Löh’s 257-page course notes, contents and §1.5 pp. 30–48;
  Caroline Lassueur’s 120-page notes, Chapter 9 §§34–37 pp. 98–103; and
  Weibel’s textbook Chapter 6 §§6.8–6.9 pp. 38–41. They respectively support
  Hopf/extension classification, multiplier conventions and finite properties,
  and universal-central-extension construction and the binary icosahedral
  example.

Both pairs therefore have more than two independent full treatments and at
least one harvestable lecture-note or textbook source. Every source heading
read has a concrete included/inline/already-published/out-of-scope disposition
in the coverage ledger; the two out-of-scope rows name their specific omitted
result and reason. Projective representations are included only as a seam
remark because the library’s representation-theory route lacks K× factor sets.

## Validation checkpoint

- `node tools/manifest-deps.mjs research/frontier-31-batch-1.pages.json`:
  **PASS** — 74 items, 0 normalized, 0 errors.
- `node tools/coverage-checklist.mjs --require-destination research/frontier-31-batch-1.coverage.json`:
  **PASS** — 2 pages, 45 harvested results, 0 errors/warnings.
- `node tools/source-fetch-check.mjs --coverage research/frontier-31-batch-1.coverage.json --stamp`:
  **BLOCKED** — every URL failed from Node fetch with `EAI_AGAIN`, including
  all seven unrelated hosts. This is a process DNS failure, not a bad-URL
  determination: each full document was opened and read through the web
  source reader before it was recorded. No fetch stamps were fabricated.
- A second stamp attempt and check-mode attempt produced the identical seven
  `EAI_AGAIN` failures / seven unstamped-source failures.
- `node tools/content-policy.mjs --manifest-only research/frontier-31-batch-1.pages.json`:
  **NOT READY** — it reports six missing homological-algebra suppliers:
  `def-group-homology-as-a-derived-functor` (four consumers),
  `def-group-cohomology-as-a-derived-functor`, and
  `thm-universal-coefficient-theorem-for-cohomology-over-a-pid`. They are
  named by the controlling GT-23 route but are neither on disk nor currently
  declared in this batch. They must be supplied by the intended HA pages or
  explicitly re-homed by the run owner; deleting the dependencies would make
  the Schur proofs falsely self-contained.

Next action: retry the required fetch-and-stamp command when DNS is available;
then run check mode, `validate-plan` on a temporary merged spec, content-policy
manifest mode, and `git diff --check`. The future HA supplier ids remain an
unresolved whole-run splice obligation, not permission to weaken dependencies.
