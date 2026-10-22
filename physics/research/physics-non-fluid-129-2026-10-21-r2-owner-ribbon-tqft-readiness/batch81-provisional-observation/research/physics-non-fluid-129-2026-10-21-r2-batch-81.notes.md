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

The actual local batch-75 A/B page files and all four planned item carriers
exist, and their complete current statements and proofs were inspected. Their
statements match the planned interfaces; their draft or pending-precheck labels
were not treated as defects. However, the current batch-75 manifest still has
items: [] on both pages, and loadStep1Record followed by step1Decision
reports Readiness record missing for def-qftx-braided-line-model,
thm-qftx-tl-hecke-braid, prop-qftx-coxeter-specialization, and
ex-qftx-vacuum-channel-exchange. This is a fresh missing current readiness
record and inventory transcription, so the page edge remains open. No
qftx-ribbon statement is a premise in the four authored mathematical items;
the finite-field Hall proofs use the published Hall supplier above. The
missing page-edge readiness is recorded rather than promoted to a claim that
the inspected ribbon proofs failed.

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
suppliers. Final item readiness is nevertheless recorded as escalated
because the A page's explicit batch-75 page prerequisite lacks a current
manifest/readiness record. The exact edge remains open in
research/physics-non-fluid-129-2026-10-21-r2-batch-81.cross-batch-dependencies.json;
this records dependency currency only and makes no independent proof-approval
claim. Scoped check results are appended after the final authoring checks.
