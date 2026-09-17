# Step 3a scope review — `shelahs-baire-property-model-and-inner-model-lower-bounds`

- Run: `phase-2-remaining-27`, stage `3a-scope`, role alpha
- A page: `shelahs-baire-property-model-and-inner-model-lower-bounds` (order 703,
  `foundations`, batch 15, 29 items)
- B page: `shelahs-baire-property-model-and-inner-model-lower-bounds-examples`
  (order 704, 4 items)
- Decision: **insufficient**. The A inventory covers the designed subject and its
  target remark; the B page omits the design-mandated concrete
  "sweet-forcing amalgamation" witness (B-companion contract, SET-23--26).
- This is a scope decision only. No proof-correctness verdict, item approval or
  owner record is expressed here.

## Evidence read

- `research/plan-spec.json`: orders 703/704, companion wiring, `requires`
  (`solovays-model-and-regularity-of-all-sets-of-reals`,
  `finite-support-iterations-and-martins-axiom`); both item arrays still empty
  (plan splice is later-stage work).
- Prose design `research/plan-set-theory-completion-track.md` §SET-25 (lines
  820--830), its source-discipline sentence, its target
  (`rem-shelah-inaccessible-and-the-baire-property`), and the B-companion
  contract (lines 118--121 and table row line 135).
- Binding `research/phase-2-remaining-27-owner-authoring-direction.md` lines
  104--106: the lower bound is exactly "`omega_1` inaccessible in `L`"; the
  every-`L[r]` strengthening is forbidden.
- Batch 15 manifest, coverage, notes and cross-batch input:
  `research/phase-2-remaining-27-batch-15.{pages,coverage,notes,cross-batch-dependencies}.json|md`.
  All 33 item statements were read; the cross-batch input is `[]` and the only
  recorded page edge is the consumer-side edge from batch 14
  (`normal-moore-spaces-pmea-and-consistency-strength`).
- Dependency records: 81 distinct direct dependencies = 52 existing/published
  items + 29 in-run manifest items. Every published dependency page lies in the
  transitive page closure of the two declared prerequisites (191 pages
  recomputed from `plan-spec.json`); no Foundations item reaches the deferred
  catalogue.
- Published targets/prerequisites: `items/rem-shelah-inaccessible-and-the-baire-property.md`
  (complete), `library/foundations/solovays-model-and-regularity-of-all-sets-of-reals.md`,
  `library/foundations/finite-support-iterations-and-martins-axiom.md`.
- Primary sources (fetched and read; page images are scans, text read through
  `mutool` extraction, key arguments complete):
  - Shelah, *Can You Take Solovay's Inaccessible Away?*,
    <https://shelah.logic.at/files/95333/176.pdf>: §4.1--4.2 (Baire case,
    `4.1A` real-with-correct-`omega_1` remark, UM definition), §5.1--5.3
    (`5.1` main theorem, `5.1A` equiconsistency list, `5.1B`, null-union
    lemma `5.2`), §7.2--7.5 and §7.12--7.17 (sweetness definition, density
    transfer, amalgamation, composition, `7.13` isomorphism extension,
    `7.14` CH-length continuous construction, `7.15` UM absorption,
    `7.16`/`7.17` Baire model and equiconsistency).
  - Ishii, *Regularity Properties and Inaccessible Cardinals*,
    <https://tsukuba.repo.nii.ac.jp/record/37187/files/Hiromi%20ISHII.pdf>:
    Chapter 3, §§3.1--3.3 — Theorems 3.1--3.4, Definitions 3.1--3.4,
    Lemmas 3.5--3.11, Theorem 3.12 (the Raisonnier-filter route the manifest
    uses).
  - Solovay, *A Model of Set-Theory in Which Every Set of Reals Is Lebesgue
    Measurable*, <https://people.math.ethz.ch/~fdalio/ZKmodel.pdf>: Part III
    §1 (random-real analysis for measurability) and §2 (hereditarily
    ordinal-sequence-definable model, ZF/DC, internal Baire property), checked
    at numbered-statement level; the page consumes this material through the
    published SET-24 items.

## A-page coverage against the design

| design item (line 822--826) | manifest realization |
|---|---|
| sweet ccc forcings and amalgamation | `def-shelah-sweetness-model`, `lem-shelah-sweet-forcings-are-sigma-directed-ccc`, `lem-shelah-sweet-density-transfer-along-complete-suborders`, `thm-shelah-sweet-amalgamation-preserves-sweetness` |
| the CH-length iteration | `thm-shelah-ch-omega-one-sweet-construction` (She. 7.14; the manifest deliberately does not call it a finite-support iteration) |
| preservation and coding | `lem-shelah-real-name-capture-and-coded-meagre-unions`, with the composition/limit preservation items 7--9 |
| `HOD(real,ordinal)` model | `def-shelah-hereditarily-ordinal-sequence-definable-model` (HOD(S) presentation with the real+ordinal reading proved; no `L(R)`/`HOD(R)` identification) |
| ZF+DC verification | `thm-shelah-inner-model-satisfies-zf-and-dependent-choice` |
| every set of reals has BP | `thm-shelah-inner-model-all-sets-of-reals-have-baire-property` |
| equiconsistency as in She. §§7.16--7.17 | `thm-baire-property-model-equiconsistent-with-zfc` (the three theories of 7.17) |
| Solovay random-real analysis | on-page `lem-shelah-homogeneous-truth-has-baire-representatives` and the null-code/Fubini items 22--24; the published SET-24 random/Cohen-genericity analysis is consumed by item 28. Interpretive naming ambiguity noted below. |
| `Sigma^1_3` measurability ⇒ `omega_1` inaccessible in `L` | items 18--26 (`def-boldface-sigma-one-three-measurability` through `thm-sigma-one-three-measurability-implies-omega-one-inaccessible-in-l`) |
| inaccessible lower bound for "all sets measurable" | `thm-all-real-sets-measurable-gives-an-inaccessible-inner-model` |
| exact equiconsistency formulation | `thm-measurability-of-all-real-sets-equiconsistent-with-an-inaccessible` |
| separation of BP from measurability | `thm-shelah-baire-model-separates-baire-property-from-measurability` |
| `fs-the-baire-property-model-needs-an-inaccessible` | B item with that exact ID |

The published remark's two clauses are both represented: the
no-inaccessible Baire model by item 17 plus the formal-transfer suppliers, and
the measurability lower bound/equiconsistency by items 27--28. Source
discipline is respected: the manifest proves the authorized `L` conclusion and
does not assert the stronger every-`L[r]` statement.

## The gap: missing required B witness

The design says (lines 118--121): "Each companion proves concrete instances and
failure modes; it is not a second theory page. Step 1 must keep at least the
following witnesses", and the table row (line 135) requires for SET-23--26:
"ultrapower calculation, Solovay factorization, sweet-forcing amalgamation,
Prikry sequence". The other three are present on the group's published B
pages (`ex-lc-principal-ultrapower-calculation`,
`ex-solovay-collapse-factorization-around-a-real-parameter`,
`ex-prikry-stems-and-direct-extensions`), and the earlier runs' scope reports
cite the contract for exactly those witnesses. No sweet-forcing amalgamation
instance exists anywhere:

- the batch-15 B inventory is
  `ex-a-universal-meagre-stage-absorbs-old-nowhere-dense-sets`,
  `ex-raisonnier-first-difference-cover`,
  `ex-uniform-null-capture-on-a-block-function`,
  `fs-the-baire-property-model-needs-an-inaccessible`;
- the batch-15 B coverage lists only the absorption computation and the false
  statement as required companion computations;
- `grep -rli sweet library/ items/` and a full `research/` search return no
  other candidate: the only sweet-forcing content is this pair's A page, whose
  `thm-shelah-sweet-amalgamation-preserves-sweetness` is the general Claim
  7.5/7.12 theorem and not a concrete instance or failure mode.

Recommended owner action (enrichment, no merger): add one concrete
amalgamation example to the B page, e.g.
`ex-sweet-amalgam-over-a-common-complete-subalgebra`. A self-contained
instance can take two sweet models with a common countably generated complete
subalgebra (the natural choice is the UM forcing of Definition 7.7 and a
countably generated `P_0`), display the amalgam's dense set and the `E_n`
classes exactly as in Claim 7.12, verify the uniform modulus supplied by the
Claim 7.4 density-transfer lemma, and check ccc plus the two canonical complete
embeddings. Keep the existing four B items; the A page needs no scope change.
If the owner instead judges the A-page theorem sufficient to "keep" that
witness, the owner should record `proceed` for the current scope; until then
the pair remains blocked per the Step 3a rule.

## Non-blocking observations

- **Published remark already flagged for the ledger.** The published
  `rem-shelah-inaccessible-and-the-baire-property` is `proved_here: false`,
  depends only on the Recorded `rem-solovay-model`, and its "What would prove
  it" paragraph asserts the stronger every-`L[r]` repair that the owner
  direction forbids. Batch 15 recorded the defect and a repair strategy in its
  notes, but a current grep of
  `research/published-consumer-supplier-ledger.md` finds no entry for the item
  ID (only `rem-solovay-model` is indexed; the nearest match is the planned
  supplier mention at line 11662). The owner/operator should add the promised
  canonical-ledger entry. This published debt is not a prerequisite of any new
  item here and does not itself change the scope decision.
- **Interpretive uncertainty (stated honestly).** I could not pin the design's
  phrase "Solovay random-real analysis" to a single named item. Its two
  mathematical roles are covered: the homogeneous-truth/category analysis
  (item 12, Solovay Part III) and the null-code Fubini analysis used by the
  lower bound (items 22--24), with the SET-24 random/Cohen-genericity material
  already published and consumed. If the design intended a further separate
  item, I found no theorem of the design's item list left unproved; the
  intended target `rem-shelah-inaccessible-and-the-baire-property` is fully
  mapped.
- **Dependency interface.** All 52 published direct dependencies exist with
  `status: published`; the 29 in-run dependencies are manifest items; no
  published dependency lies outside the declared prerequisite closure; the
  batch-14 consumer edge is page-level only and imposes no unmet item supplier.

## Decision

Recorded non-owner scope decision `insufficient` for
`shelahs-baire-property-model-and-inner-model-lower-bounds` with the omitted
B-contract witness named above. No item decisions were recorded; authoring of
this pair should not start until the owner proceeds or the B enrichment is
applied and a `proceed` decision is recorded for the resulting scope.
