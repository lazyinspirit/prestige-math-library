# Step 3a scope review — `reeb-stability-and-global-foliation-constructions` / `reeb-stability-and-global-foliation-constructions-examples`

- **Run:** frontier-41-ha-dt-29 (role alpha, dispatch `step3a-pair-reeb-stability-and-global-foliation-constructions-ed7424825d6cf079`)
- **Pair:** A `reeb-stability-and-global-foliation-constructions` (order 575) /
  B `reeb-stability-and-global-foliation-constructions-examples` (order 576),
  batch 22 (batch 22 contains exactly this pair; no sibling pairs to preserve).
- **Decision:** `sufficient` — the planned definitions, results and examples
  cover design block DT-30 at design strength. Four findings (F1–F4) are
  recorded for owner attention under the Step-3a unmet-prerequisite /
  reconciliation rules; none is an omitted topic and no pair merger is
  warranted.
- **Assessed scope, not proof correctness.** No scaffold or item file was
  edited; no item approval or owner record is written here.
- **Scope hash at review time:** `77225fb0f4d26623181dca1b6775d702287a4d86e7ba1326717d76fd1f389d6f`
  (`scopeHash` of the current pair). A later change to any A/B statement makes
  this receipt stale.

## 1. Inputs read

- **Manifests:** `research/frontier-41-ha-dt-29-batch-22.pages.json` — all 48
  items (43 A + 5 B) read at statement level, with strategies read for the
  design items, the global-theorem chain, the C¹/Thurston block, the countable
  choice block and all five B items. `research/plan-spec.json` page rows
  575/576 (ids, titles, category, companion, `requires`); page metadata agrees
  exactly with the manifest. Supplier scaffold `research/frontier-41-ha-dt-29-batch-21.pages.json`
  (DT-29, `foliation-holonomy-and-the-holonomy-groupoid`, 23 A + 6 B items) for
  every cross-batch interface; consumer scaffold `research/frontier-41-ha-dt-29-batch-23.pages.json`
  (DT-31, `codimension-one-foliations-and-secondary-classes`) at the
  consumer-row level.
- **Coverage:** `research/frontier-41-ha-dt-29-batch-22.coverage.json` (108
  harvested rows: 68 A-page, 40 B-page; 13 source entries), its fetch stamps
  and drop records; `node tools/coverage-checklist.mjs …` reproduced
  `0 error(s), 2 warning(s)` (the two documented `coverage-low-yield` rows;
  both confirmed below).
- **Prose/plan:** `research/plan-differential-topology-track.md` DT-30 block
  L1497–L1538 (A items 1–15, hard-proof closure, B items 1–5), §8 source row
  L1680, §9.5 rows H142–H146 L1859–L1863, §11.4 source blocker L2009–L2012,
  §12.4 requires row L2255, §12.5 binding DT-30 repair L2331, §12.6
  disposition L2450, §12.8 L2570; `research/frontier-41-ha-dt-29-batch-22.notes.md`
  (all sections, including the ACω audit and the owner-local readiness repair).
- **Owner decisions:** `research/frontier-41-ha-dt-29-owner-authoring-direction.md`
  (no DT-30-specific clause; the general "preserve hypotheses, report blockers
  honestly, do not rehome published definitions" clauses bind this pair) and
  `research/frontier-41-ha-dt-29-scope-ledger.json` (pages 575/576 present,
  `allow_in_run_dependencies: true`).
- **Dependency records:** `research/frontier-41-ha-dt-29-batch-22.cross-batch-dependencies.json`
  (37 rows: 36 item + 1 page edge to batch 21, all `verified` against the
  current batch-21 scaffold); direct resolution of all 48 items' `deps` and
  `justified_by`.

## 2. Design vs scaffold

All **15 designed A items** and all **5 designed B items** are present with
their design ids, kinds and claims:

| design role | scaffold id | status |
| --- | --- | --- |
| local stability block | `def-saturated-neighbourhood-of-a-leaf`, `lem-finite-holonomy-acts-on-a-small-transverse-disk`, `def-finite-holonomy-normal-model`, `thm-local-reeb-stability` | present unchanged |
| trivial holonomy / finite π₁ corollaries | `cor-trivial-holonomy-gives-a-product-foliated-neighbourhood`, `cor-finite-fundamental-group-is-a-sufficient-not-necessary-reeb-stability-hypothesis` | present unchanged |
| global codim-one theorem and its two halves | `thm-global-reeb-stability-for-transversely-oriented-codimension-one-foliations`, `lem-compact-stable-leaves-form-an-open-saturated-set`, `lem-compact-leaf-control-and-compact-ambientness-give-the-required-closedness` | present; items 8–9 placed before item 7 so the theorem consumes them (claim order preserved) |
| global model / Reeb constructions | `prop-mapping-torus-foliations-realize-global-reeb-stable-examples`, `prop-reeb-foliation-of-the-solid-torus-has-the-boundary-as-a-leaf`, `prop-gluing-two-reeb-components-gives-a-foliation-of-s-three` | present |
| Thurston refinement + caveats | `thm-reeb-thurston-stability-for-codimension-one-leaves`, `rem-transverse-orientability-is-load-bearing-in-the-global-codimension-one-form`, `rem-compact-leaf-does-not-mean-finite-holonomy-or-finite-fundamental-group` | present at design strength (local-only Thurston form; no global fibration asserted) |
| B examples | all five `ex-`/`cex-` ids of the design | present, each keyed to a specific A statement (product corollary; normal model; mapping torus; local-theorem hypothesis; finite-π₁ non-necessity) |

The §12.5 binding repairs are applied: item 7 is stated for a **closed**
connected ambient manifold (boundary/interval form explicitly not asserted);
item 10 says the suspension/base direction is transverse to the fibres with
first-return map the monodromy. The scaffold adds **28 support items** before
their consumers (co-orientation and boundary-tangency definitions, stable-leaf
definition, torsion-freeness of 1-dimensional germs, deck-group/holonomy-cover
transport lemmas, the two normal-model lemmas, the closed-transversal lemma,
the countable-choice carrier and ACω ⟹ AC, the finite-CW and rational-homology
limit carriers, the intersection-detection and circle/foliation-bundle
lemmas, the gluing lemma, and the C¹ foliation/germ/holonomy/Thurston block).
Each was traced to a named closure need in the batch notes; none weakens or
rewords a designed claim, and the count matches `43 A = 15 design + 28 support`.

## 3. Source coverage

- 13 source entries, **11 fetch-verified** (Calegari monograph with Theorem
  4.5 and 2.119 read in full; MIT 18.965 §§20–24; Leiden 2023 notes; del
  Hoyo–Fernandes; Santos; Gabai commentary; Milnor *Topology* appendix; Milnor
  *Morse Theory* §3/§6), **2 documented drops** with explicit alternatives:
  - MMF *Introduction to Foliations and Lie Groupoids* (unavailable; the design
    results H142–H143 are covered by the local scaffolded proof route plus
    Calegari/Mrowka/Leiden/del Hoyo–Fernandes/Santos).
  - Thurston 1974 (unavailable; the C¹ local item is rebuilt from Calegari
    §2.16.2 Theorem 2.119 with its complete proof plus local C¹ items).
  The design's §8/§11.4 one-treatment source-depth warning for the general
  local theorem is preserved honestly, not silently repaired.
- The 108 harvested rows resolve to 25 dedicated on-pair items (17 A + 8 B);
  the remainder are recorded `inline` (used inside an item's proof/strategy) or
  declined with a written reason. The declines are the neighbouring DT-31
  tautness/dead-end/Godbillon–Vey material, the DT-29 holonomy/groupoid
  construction, Riemannian foliations and Molino theory, MMF §2.2/§2.4,
  variational Morse chapters, Dehn-surgery/spinning examples, and the
  unreadable Thurston/MMF primaries. None belongs to DT-30's designed subject.
- The two `coverage-low-yield` warnings (17/68 and 8/40) are therefore
  understood and confirmed as focused disposition, not unread text. The
  coverage file records the declines page-locally with reasons.

## 4. Intended role and page-level requirements

- The manifest `requires` array equals plan §12.4 exactly: DT-29
  (`foliation-holonomy-and-the-holonomy-groupoid`), Frobenius
  (`distributions-integral-manifolds-and-the-frobenius-theorem`), boundary
  collars/orientation, covering spaces, fundamental group, singular
  cohomology/coefficient theorems. Page ids/titles/orders 575–576 and the
  companion pointers agree with `plan-spec.json`.
- Role in the library: compact-leaf stability in general codimension, the
  global codimension-one theorem, suspension/mapping-torus and Reeb-component
  constructions, Thurston's cohomological local refinement, and the exact
  hypothesis caveats. The pair sits between DT-29 (supplier) and DT-31
  (consumer) and is **load-bearing for DT-31**: 83 batch-23 items consume
  batch-22 items, in addition to the 36 item edges + 1 page edge into batch 21.
- Interface note: any change to a batch-22 statement invalidates the batch-23
  consumer rows and the batch-21 edges; the current cross-batch records were
  verified against the current scaffolds only, and batch 21's own Step-3a
  review is still in flight.

## 5. Dependency and prerequisite audit

- **Direct resolution:** every `deps`/`justified_by` id of both pages resolves
  to a published `items/*.md` item or to a batch-21/22 scaffold item; 0
  missing targets. 137 dependency edges stay inside batch 22; 36 item edges
  plus 1 page edge go to batch 21, all `verified`. No id collides with a
  published file and no id repeats across batch manifests.
- **Mechanical checks re-run:** `manifest-deps.mjs` `0 error(s)`;
  `item-dependency-levels.mjs check --run …` `883 item(s), maximum level 23`
  with no mismatch; `coverage-checklist.mjs` `0 error(s), 2 warning(s)`.
- **Published suppliers sampled at statement level** for hypothesis fit: the
  oriented-intersection definition is stated for *maps* from a compact oriented
  source, so the immersed-transversal use in
  `lem-oriented-intersection-detects-nonvanishing-rational-homology` fits; the
  finite-CW/Morse corollaries are stated under AC and are consumed with AC
  declared; UCT/Hurewicz/`H_0`-free items match the Thurston route;
  partition-of-unity, ODE-flow, Seifert–van Kampen, fibre-bundle and
  free-proper-quotient items exist and state what the strategies use; the
  published ACω items (`def-countable-choice`,
  `thm-choice-implies-dependent-implies-countable-choice`) are present on disk
  (see F4).

## 6. Findings for owner attention

**F1 (confirmed absence of a stated supplier; elementary, dischargeable
inline).** The two Thurston/global items and two corollaries use, without any
supplier, the closure facts *"the image of a finitely generated group is
finitely generated"* and *"the image of a finite group is finite"*:

- `thm-thurston-stability-for-c1-interval-germ-groups-are-locally-indicable`
  ("its image is a nonzero finitely generated torsion-free abelian subgroup of
  ℝ"; twice),
- `thm-reeb-thurston-stability-for-codimension-one-leaves` ("the holonomy image
  is a finitely generated subgroup"),
- `cor-finite-fundamental-group-is-a-sufficient-not-necessary-reeb-stability-hypothesis`
  and `lem-a-compact-codimension-one-leaf-with-finite-fundamental-group-has-trivial-holonomy-when-transversely-oriented`
  ("homomorphic image of a finite group").

Evidence of absence: a filename and full-text search of `items/` and of all
`research/frontier-41-ha-dt-29-batch-*.pages.json` found no item stating either
closure fact (`def-finitely-generated-group` gives only the definition;
`def-kernel-and-image-of-group-homomorphism` gives the image without
finiteness; `thm-closure-under-homomorphic-image` is about regular languages).
Related, one level up: `lem-compact-leaf-control-and-compact-ambientness-give-the-required-closedness`
uses "finitely many generators of π₁(A), available from its compact smooth
finite-CW model"; the C¹ analogue proves exactly this inside
`lem-compact-c1-leaf-has-finitely-generated-fundamental-group`, but no stated
smooth companion exists. Recommended owner action: either authorise one small
page-local lemma (e.g. `lem-images-of-finitely-generated-and-finite-groups-are-finitely-generated-and-finite`,
plus a smooth compact-manifold f.g.-π₁ corollary) or record that the Step-3b
authors prove these instances inline and name them in the four strategies and
in the closedness strategy. No design claim is affected.

**F2 (confirmed scaffold defect in one B item; owner amendment recommended
before authoring).** `ex-a-fibration-over-the-circle-as-a-global-stable-foliation`
contains three connected defects:

1. Its statement says "the first-return map on a fibre is the Dehn twist f",
   but the consumed A proposition fixes the convention: "after one unit of its
   flow the point (x,0) represents (f⁻¹(x),0), so the first-return map is f⁻¹"
   (`prop-mapping-torus-foliations-realize-global-reeb-stable-examples`,
   statement (v) and strategy). Since f(x,y)=(x+y,y) is not f⁻¹, the two items
   contradict each other.
2. Its strategy claims "the global theorem applies since a torus leaf is
   compact with finite fundamental group". π₁(T²) ≅ ℤ² is infinite, so the
   finite-π₁ hypothesis of `thm-global-reeb-stability-…` fails; the theorem
   does not apply as an instance (its conclusion happens to hold here via the
   mapping-torus proposition).
3. The statement's clause "it shows that the global model need not be the
   product foliation of L×S¹: the monodromy is a non-identity diffeomorphism"
   is disclaimed by its own strategy ("deliberately does not assert
   non-triviality of the bundle"), and a non-identity representative does not
   by itself prove non-isotopy to the identity. Keeping the clause requires the
   π₀Diff(T²) computation [f]=[[1,1],[0,1]]≠[id] (no supplier for π₀Diff(T²)
   is currently declared) or the equivalent abelianization computation;
   otherwise the clause should be dropped.

Recommended owner action: direct a recorded Step-3b amendment of this B item
— align the first-return sign with the A convention, replace the false
"applies" sentence with the true observation that the conclusion holds while
the finite-π₁ hypothesis fails (the theorem is sufficient, not necessary),
and either support or drop the non-product clause. Its declared dependency on
the global theorem should then reflect that corrected role.

**F3 (minor; authoring-time citation).** `rem-transverse-orientability-is-load-bearing-in-the-global-codimension-one-form`
asserts "the quotient is therefore a closed manifold" for the free involution
τ on S²×S¹ without declaring the published supplier
`thm-free-proper-action-quotient-manifold` (with properness automatic on the
compact manifold). Recommended: declare it at authoring; this is a citation
omission, not a scope gap.

**F4 (reconciliation; owner decision needed).** The pair-local countable-choice
carrier duplicates published content:
`def-countable-choice-principle-for-foliation-pair` restates the published
`def-countable-choice` (ACω) verbatim in substance, and
`lem-axiom-of-choice-implies-countable-choice` duplicates the published
`thm-choice-implies-dependent-implies-countable-choice`;
`lem-countable-choice-sequence-and-product-formulations-are-equivalent` is a
definitional restatement. The local definition is consumed by 33 batch-22
items and **80 batch-23 items** (113 total), and the local AC⟹ACω lemma by 3
batch-22 items, all of which the published items could supply. This is a
duplicate-carrier/interface issue, not a missing prerequisite. Recommended
owner action: either (i) re-point the 113 consumers to the published
`def-countable-choice` (and the 3 to the published implication), delete the
local carrier, and refresh the batch-22/23 cross-batch and readiness records,
or (ii) record explicitly that the pair-local carrier is retained and why.
Nothing about DT-30's coverage changes either way.

## 7. Recorded uncertainty

- The general local finite-holonomy Reeb theorem has no second independently
  inspected full treatment; the alternatives are narrower (spherical-leaf /
  codimension-one specialisations) or MMF-derived corroboration. This is the
  design's recorded source-depth exception, not a scope omission; proof-level
  adequacy is Step-3b/Step-5 subject matter.
- The batch-21 edges are current only against the batch-21 scaffold snapshot
  (its own scope review is running concurrently); any batch-21 statement
  change invalidates the 36 item rows and the page edge and requires recompute.
- If the owner applies F2/F4 amendments, the current scope hash changes; this
  review receipt then becomes stale by construction and must be re-recorded
  against the amended scope (owner `proceed`/`merge`/`enrich` per the task
  protocol).
- No claim of proof correctness is made here; proofs, hypothesis closure at the
  proof level, and the batch-23 consumer content are outside this review.

## 8. Decision

`sufficient` for `reeb-stability-and-global-foliation-constructions` (pair
scope fixed by the manifests as of this review): all 15 designed results and
all 5 examples are present at design strength; the 28 support items close the
design's stated proof obligations without narrowing any claim; 13 sources with
11 fetch-verified treatments and 2 documented drops cover the designed
material; the `requires` array, orders and companion pointers match the plan;
all dependencies resolve with no cycles. F1–F4 are recorded for owner action
under the Step-3a unmet-prerequisite / reconciliation rules; no item approval,
owner record or scaffold edit is made here.

**Recorded receipt:** `research/frontier-41-ha-dt-29-step3a-review-reeb-stability-and-global-foliation-constructions.json`
(`decision: sufficient`, `sha256: 77225fb0f4d26623181dca1b6775d702287a4d86e7ba1326717d76fd1f389d6f`,
recorded 2026-10-05T13:32:53.412Z; `scopeDecision` returns `closed: true` for
the current scope). The receipt becomes stale if any pair statement changes;
this report then needs the same review repeated against the amended scope.
