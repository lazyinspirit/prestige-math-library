# Proposed third frontier: scope and isolation

The owner requested a preflight for all five new homological algebra pairs and
all 24 unfinished differential topology pairs, while two other Codex sessions
build frontier-39-analysis-30 and frontier-40-geometry-braids-rep-27. This file
prepares the proposal; the owner approved starting this exact scope in the
isolated clone on 2026-10-04. The approval is recorded here and the final
prerequisite recheck is recorded in `research/third-frontier-ha-dt-preflight.md`.

The owner originally approved 29 A/B pairs (five homological algebra and 24
differential topology) at preflight. After Step-1 audits exposed missing local
Algebraic Topology proofs needed by DT-19, the owner approved adding exactly one
supporting A/B pair on 2026-10-04 at approximately 15:10 UTC. The current
approved scope is therefore 30 pairs, 60 pages: the original 29 plus
`thom-spectra-and-unoriented-bordism-detection` /
`thom-spectra-and-unoriented-bordism-detection-examples` at plan orders
548.5/548.6, after the published Thom-spaces A/B pages 547/548 and before the
framed DT-9 page 549 and characteristic-numbers DT-19 page 553. The new A
page's sole page prerequisite is `thom-spaces-normal-data-and-collapse-maps`
(547); its published prerequisite closure contains every cited supplier,
including the Chern/Pontryagin page 366.039 and the 1,476 item files cited by
the support proof across 119 page homes. The earlier 366.0245/366.0246 and
366.0385/366.0386 placements were superseded when the source and item-home
audits found later representability, Serre, Pontryagin-class, and generic
Thom-quotient suppliers.

The complete proof and dependency-ordered inventory are in
`research/frontier-41-ha-dt-29-at-support-thom-detection-integration-draft.md`;
the six supplier proof drafts are the Steenrod/EM, Hopf-freeness, Thom
prespectrum, odd-primary, finite-range, and rational-Hurewicz drafts in the
same research namespace. Register 54 new A items and four B examples. The Whitney-sum coalgebra
and finite detector map definitions each have a separately inventoried local
well-definedness lemma; the moved prespectrum definition contains its complete
construction proof and direct CW/CGWH suppliers. Move the
single existing `def-thom-prespectrum-of-the-universal-real-and-oriented-bundles`
item from DT-19 to the AT A page, with its locally proved MO/MSO construction;
merge the temporary MO-only definition into it. DT-19 is the only downstream
page consumer and receives the new AT page edge. DT-9 receives no edge. Do not
depend on DT-19 from the new A page.

**Superseding F41 inventory note:** the `54 A / 4 B` count above records the
initial AT integration draft and is no longer the current batch-24 inventory.
The live `plan-spec.json`, batch-24 manifest, and batch-24 coverage record
control the current scaffold, which is now 43 A items and 5 B examples (48
items total). Preserve and refine those local support items only to repair
exact mathematical defects; do not regenerate the pair from the historical
count or rehome its definitions again.

Preserve the audited strict comparison endpoints in every scaffold and proof:
mod-two cohomology isomorphism for degrees $k<2r$; integral homology
isomorphism for $i<2r-1$ and surjectivity at $2r-1$; homotopy isomorphism
through $2r-2$, so stable degree $n$ uses $r\ge n+2$. The separate rational
Hurewicz branch proves the range $c\le i\le2c-2$ and feeds DT-19's rational
oriented statements. All definitions must include their local justifications
or have a separately inventoried justification lemma. Keep each definition,
map, and structure map as specified in the integration draft; do not import a
represented-spectrum comparison, a spectrification, or an unstated Omega
condition.

Preserve all original pairs and their dependency order. No other run's draft
content or receipt supplies mathematics or acceptance. The third run uses this
independent clone on main, its own .autopilot/frontier-41-ha-dt-29 state
directory, and the frontier-41-ha-dt-29 research namespace. Do not write into
the original checkout or control either existing frontier. Do not fetch or push
the source repository. Integration of this clone's final changes requires
later reconciliation of shared plan, published-supplier ledger, and any
published repairs; never replace the original checkout's whole files with this
clone's stale versions.

For homological algebra, bind the HA-25–HA-29 statements, complete local proof
contracts, and justified definitions in research/plan-homological-algebra-track.md
and research/eilenberg-watts-expansion/proposed-items.json. These are proposed
items and must pass normal authoring and proof review.

For differential topology, §12 of research/plan-differential-topology-track.md
supersedes the historical unspliced-status and supplier-token paragraphs.
The published predecessor pairs and external supplier pages are inherited.
In particular DT-19 must reuse these existing published definitions in their
current homes, not mint or overwrite them:

- def-stiefel-whitney-number-of-a-closed-manifold
- def-pontryagin-number-of-a-closed-oriented-manifold

Both are supplied by smooth-cobordism-relations-groups-and-rings, already in
DT-19's declared prerequisite closure. Replace the two historical new-item
slots with exact inherited citations; retain every intended mathematical claim.
Do not rehome either definition.

Retain the four source-only orientation leaves prescribed by §12.1 as recorded,
non-load-bearing remarks under SCHEMA.md. They do not license dependencies or
supply the missing proofs of other results. Retain all explicit dimension,
coefficient, regularity, relative/parametric, and convergence restrictions.
Report newly discovered mathematical or source blockers honestly rather than
claiming preflight certified future proofs.

## Owner continuation after provider429 failure (2026-10-05)

Finish authoring and handoff from the existing files and reports; do not restart a broad review or re-author unchanged complete items. The owner topped up DeepSeek and explicitly reactivated its original author profile; the temporary Codex fallback is removed. Preserve actual failed receipts and all unresolved mathematical escalations. Eight successful pair units remain covered.

For batch8, root has integrated seven explicit repaired item files: two orientation-coefficient/twisted-diagonal lemmas, the full all-map/nonorientable Lefschetz–Hopf theorem, its homotopy corollary, corrected oriented diagonal and nondegenerate lemmas, and the finite simultaneous fixed-point perturbation lemma. Normative precheck passes7/7; proof-layout has28steps/0defects. Finish matching proof contracts, coverage, page inventory, source uses and handoff. Retain the full restored claim and inherited AC; no orientation-cover lift is required for the main theorem. Root constructive evidence is in the nonorientable-lefschetz proposal/memo and lefschetz-owner-integration record.

For batch14, apply the owner-adjudicated surgical framing and local-move corrections in `frontier-41-ha-dt-29-immersed-whitney-cleanliness-repair-proposal.json` to the assigned batch14 suppliers, including its normal-summand framing-loop adapter on this A page. Circle normal rank is n−1; disk normal rank is n−2. The valid claim is existence of an admissible extendible disk frame after an allowed sheet-normal-summand correction, not extension of every arbitrarily prescribed full boundary frame. The two partial frames must satisfy the correct sheet tangencies and remain orthogonal; preserve the actual Milnor construction. An auxiliary ambient isotopy moves ONE selected sheet while the other is held fixed, not both images simultaneously. Root is separately repairing the batch19 immersion consumer and triple-point terminology; do not edit its owned files. Preserve the full mathematically valid stable-range Whitney theorem and all earlier approved witnesses.


## Current scope after the owner foliation split

The owner subsequently split the former 99-item foliation A page into the retained foundations/secondary-classes pair and the new vanishing-cycles/Novikov/tautness pair. The current approved frontier is31pairs/62pages: five HA,25DT,one supporting AT. The current manifests and append-only owner split supplement control; historical30-pair counts above are superseded. Preserve all original item identities and the supplier-first placement of the two split pairs.


## Bounded genuine completion handoffs for14 and22

The authorized constructive Codex completions have finished all originally missing files and their local proof prerequisites, and their writers have drained. Existing original inventories are retained: batch14 has30original items plus3local adapters; batch22 has48original items plus one finite-group-image supplier. Focused checks and actual changed-file hashes are in their completed pair reports and batch22.author-completion-checks.json. Root has approved the current scopes with supported owner scope decisions.

On the next genuine native dispatch, finish the assigned pair's actual item decisions, current proof-contract and supplier-use reconciliation, and final handoff from these completed files. Do not start a new broad review or rewrite unchanged complete proofs; repair only a concrete remaining item/contract failure in the assigned pair. Preserve root's corrected full claims and genuine old failure history. No outside-pair writes. Root is independently resolving exact owner-held23 foliation findings; these do not authorize either handoff to change23/31 files. Never manufacture a dispatch result or infer proof completion from file presence. If a concrete gap remains, name the smallest exact local missing premise in the handoff.
