# Batch 81 authoring notes

Run: physics-non-fluid-129-2026-10-21-r2  
Pair: qftx-hall-bps-wall-crossing  
Owner authoring direction: research/physics-non-fluid-129-2026-10-21-r2-owner-authoring-direction.md is absent.

## Scope and plan comparison

The beta-81 assignment and the complete design section at
research/plan-quantum-field-theory-frontier-expansion-track.md:1726–1758
agree with the canonical plan and batch manifest on both page IDs, title,
category, mathematical library, page requirements, A/B split, and B_leaf
status. There is no plan/design conflict. The empty item arrays in
research/plan-spec.json are the expected future-build placeholders; the
detailed design assigns the following carriers, which are populated in the
batch manifest:

- A: def-qftx-hall-spectrum-generator,
  prop-qftx-hall-spectrum-invariance,
  def-qftx-cy3-bps-integration-contract.
- B: ex-qftx-a-two-hall-flags.

The A page retains requirements
hall-stability-dt-bps-and-wall-crossing and
qftx-ribbon-braid-representations; the B page requires its A page.

## Dependency order

The run's full dependency-level file gives batch 81 level 4 and requires batch
75; batch 75 is level 3 and requires batch 61. Those are batch/page priorities.
The authored item dependency levels are computed from the current in-run item
graph:

| Item | Item level | In-run item suppliers |
|---|---:|---|
| def-qftx-hall-spectrum-generator | 0 | none |
| prop-qftx-hall-spectrum-invariance | 1 | def-qftx-hall-spectrum-generator |
| def-qftx-cy3-bps-integration-contract | 2 | generator and invariance proposition |
| ex-qftx-a-two-hall-flags | 2 | generator and invariance proposition |

All other item suppliers are mathematical context outside this run. No
additional intermediate result or dependency cycle was needed. The exact
item-level premises and proof-step inputs are recorded in the item carriers and
batch-81.proof-contracts.json.

## Published Hall supplier review

The required Hall page is published. Its current physics import page hash is
3132e9462af223a5f38c9adeffc637f9634d08af29ee22f5ed5a4ed3696f4111, matching
the research/math-imports.json pin. The local imported item
items/thm-finite-quiver-hall-wall-crossing.md and the read-only root original
are byte-identical at SHA-256
4f076afe829d4f9f97205e90184ecfd685eb14f784e2a3358ed6739260ab31a7.
The older research/frontier-expansion-2026-10-19/quantum-field-theory/suppliers.json
row's draft status and item hash describe historical bytes and are stale; the
current root original is published, and its complete current proof was
inspected. Its actual interface is: any finite acyclic quiver over
F_q, including wild quivers; any two vertex-charge assignments in the open
upper half-plane; subobject-first dimension completion; unique HN filtrations
with strictly decreasing semistable phases; equal Euler- and skew-integrated
ordered products; and a formal unit in each completed torus. No generic
stability, finite representation type, CY3, orientation data, analytic
convergence, or physical state-counting premise is used.

The proof's actual inputs were inspected in their read-only current snapshots:
def-finite-acyclic-quiver-stability-data,
lem-finite-acyclic-quiver-representations-are-finitary-hereditary-with-euler-form,
lem-upper-half-plane-sum-phase-between,
lem-quiver-hardernarasimhan-filtrations-exist-are-unique-and-descend,
def-subobject-first-completed-finite-quiver-hall-algebra-and-tori,
lem-finite-quiver-hall-extension-orbit-count, and
thm-finite-quiver-euler-and-skew-integration-is-multiplicative, together
with the generic untwisted Hall finiteness/associativity inputs used by the
integration proof. The checks confirmed the arrow/Euler-form convention, the
subobject-first direction, inclusion of strictly semistable objects, exact
automorphism weights, and continuous maps into the stated Euler and skew
tori. The HN construction and finite-dimensional extension arguments are
choice-free; no Axiom of Choice dependency is added to the finite-field items.

## Batch-75 page prerequisite

The plan's qftx-ribbon prerequisite is retained as a page edge. Its exact
planned interfaces were read in the complete QFT scaffold. The A-side
definition specifies a braided rigid linear tensor category with an
associator, an object, and the resulting exact algebraic braid operators; a
physical adiabatic-exchange interpretation additionally needs a gapped family,
isolated finite-rank state space, transport connection, and a stated
operator-norm error bound. The planned Temperley–Lieb/Hecke theorem assumes the
displayed Temperley–Lieb relations and q != 0, with
delta = q + q^{-1}; it does not infer a unitary modular theory. The planned
example retains the signed Frobenius–Schur parameter.

The actual local batch-75 A/B page files and all items in their current
manifest were inspected. The current inventory contains four A-page items:
def-qftx-braided-line-model,
lem-qftx-anyonic-vacuum-reverse-adjacent-relation,
thm-qftx-tl-hecke-braid, and prop-qftx-coxeter-specialization; its B page
contains ex-qftx-vacuum-channel-exchange. The lemma is an additional current
inventory item beyond the four item IDs named in the batch-75 dispatch; its
complete statement and proof were also read. The four dispatch items match
their planned interfaces, and stale or missing readiness alone was not
treated as a proof defect.

A fresh final read-only loadStep1Record/step1Decision check returns
`decision: escalated` and `closed: false` for all five current batch-75 items.
Their stored reasons say the shared-plan A-page `requires` list does not close
the pages declared by item dependencies: tensor-and-fusion-categories,
braided-and-symmetric-monoidal-categories, and free-groups-and-presentations
for the braided-line definition; unitary-fusion-spaces-f-and-r-symbols-and-
anyon-models for the additional lemma; braided-and-symmetric-monoidal-
categories, free-groups-and-presentations, and
principal-series-representations-of-gl-n-over-a-finite-field for the Hecke
theorem and Coxeter proposition; and those pages plus
unitary-fusion-spaces-f-and-r-symbols-and-anyon-models for the B example. The
readiness rows state these are existing published suppliers and request owner
reconciliation of the design/plan page-requirement closure. The current
qftx-ribbon page carrier and inventory exist, but its page edge remains open
until that prerequisite reconciliation closes. No qftx-ribbon item is an
item-level premise in the four batch-81 proofs; the finite-field Hall
arguments use the published Hall supplier above. This is a readiness and
page-dependency blocker, not a finding that the inspected ribbon arguments
fail.

The four batch-81 Step 1 records were written as `escalated` using earlier
readiness observations. Their stored reason text is not the latest prerequisite
snapshot; the live batch-75 inventory/readiness state above supersedes it.
They remain escalated and were not overwritten. The current cross-batch row
below records the latest evidence.

## Sources and retrieval

Full-text reading, exact locators, supported items, limitations, and harvested
result dispositions are recorded per page in
research/physics-non-fluid-129-2026-10-21-r2-batch-81.coverage.json.

- Bridgeland, https://arxiv.org/pdf/1611.03696: Sections 2.1 and 4.4–4.6
  for Hall multiplication, stability, the complete HN Hall identity proof,
  chamber crossing, and the A2 example; Section 3.5 for the separate CY3
  integration and orientation-data scope. The earlier 2026-10-19 reading
  record covered only pp. 1–4; this batch records the additional passages
  actually inspected.
- Reineke, https://arxiv.org/pdf/math/0204059: Section 2, including the
  HN existence/uniqueness argument, and Section 4's quiver Hall algebra and
  HN-system factorization. Its slope and twisted Hall conventions are
  distinguished from this batch's central-charge and integration conventions.
- Schiffmann, full lecture notes,
  https://arxiv.org/pdf/math/0611617: Sections 1.1 and 1.3 and Lecture 3,
  Section 3.3, for finitary Hall algebras, subobject/extension products,
  associativity, flags, and finite-field quiver Hall calculations. These
  notes do not supply the local wall-crossing or BPS dictionary proof.

source-fetch-check --stamp succeeded for all 5 page/source entries: each
full PDF was fetched and inspected, each required more than one page, and no
retrieval failed or needed a recovery retry. No source_resolution failure
record is applicable.

## Readiness and cross-batch status

All four assigned carriers and both pages are authored, placed, and contracted.
The finite-field proofs are complete under their stated mathematical
suppliers. All four batch-81 Step 1 records are `escalated` because the A
page's required batch-75 prerequisite has escalated readiness over its
page-requirement closure. The exact page edge remains open in
research/physics-non-fluid-129-2026-10-21-r2-batch-81.cross-batch-dependencies.json;
this records dependency currency only and makes no independent proof-approval
claim.

## Final scoped checks

- `content-policy.mjs ...batch-81.pages.json --manifest-only --authored --json`:
  pass; 4 items, 0 errors, 0 warnings.
- Focused `depcheck.mjs` over the 4 assigned items and 2 pages: pass; 0 errors,
  0 warnings.
- `precheck.mts` on all 4 carriers: pass; 2 proof-bearing items checked,
  0 failures; the 2 definitions are not applicable.
- `proof-layout.mjs` on the 4 carriers: pass; 6 proof steps, 0 defects.
- `rendercheck.mjs` on the 4 carriers and 2 pages: pass; all 6 files parse
  under the renderer's YAML and KaTeX checks.
- Strict `proof-contract.mjs` for the proposition and example: pass; 2 checked,
  0 errors, 0 warnings.
- Scoped item dependency calculation: pass; levels are 0, 1, 2, and 2 in the
  table above, with 0 graph errors.
- `source-fetch-check.mjs --coverage ...batch-81.coverage.json`: pass; all 5
  source entries are currently fetch-verified, with 0 documented drops.
- Pure run-graph recomputation gives batch 75 level 3 requiring 61 and batch 81
  level 4 requiring 75 (maximum run level 5). The shared
  `batch-dependency-levels.mjs check` reports stale run-level metadata after
  manifest changes; that shared file was not rewritten.
- Full-run `proof-contract-coverage.mjs` is not a batch-scoped check: it scanned
  837 run items / 658 proof-bearing items, while this batch contract covers
  only its 2 proof-bearing items. It reports 656 missing entries outside this
  batch and none for the 4 assigned items. The strict batch contract check
  above passes.
