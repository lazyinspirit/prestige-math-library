# Step 7 adjudication — group **k**, run `frontier-41-ha-dt-29`

You are the group Alpha for batches **31**: 1 A/B pair(s), 2 page(s), 55 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

**No step-6 digest exists for this group.** The reading half did not run or did
not produce one, so you are meeting this mathematics for the first time with the
rejections already in front of you. Read the pages before the verdicts anyway —
the order matters more than where the notes came from.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-41-ha-dt-29-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 31 | `vanishing-cycles-novikov-and-taut-foliations` | A | differential-topology | 578.2 | `codimension-one-foliations-and-secondary-classes`, `smooth-cobordism-relations-groups-and-rings`, `foliation-holonomy-and-the-holonomy-groupoid`, `reeb-stability-and-global-foliation-constructions`, `distributions-integral-manifolds-and-the-frobenius-theorem`, `tensor-fields-exterior-algebra-and-differential-forms`, `the-exterior-derivative-and-cartan-calculus`, `integration-of-forms-and-the-general-stokes-theorem`, `the-de-rham-complex-homotopy-and-mayer-vietoris`, `chern-weil-theory-and-characteristic-forms`, `the-fundamental-group`, `singular-cohomology-and-coefficient-theorems`, `cup-cap-cross-products-and-cohomology-rings`, `orientations-poincare-lefschetz-and-alexander-duality`, `stiefel-whitney-and-euler-classes-by-universal-constructions`, `chern-and-pontryagin-classes-by-splitting-and-complexification` |
| 31 | `vanishing-cycles-novikov-and-taut-foliations-examples` | B | differential-topology | 578.4 | `vanishing-cycles-novikov-and-taut-foliations` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `vanishing-cycles-novikov-and-taut-foliations` — Vanishing Cycles, Novikov and Taut Foliations (52 item(s))

- `def-taut-codimension-one-foliation` · definition — Taut codimension-one foliations
- `def-dead-end-component` · definition — Dead-end components
- `def-accessible-manifold-of-a-leaf` · definition — The accessible manifold of a leaf
- `def-positive-transverse-accessibility-between-leaves` · definition — Positive transverse accessibility between leaves
- `lem-a-taut-foliation-of-a-compact-connected-manifold-is-met-by-a-single-closed-transversal` · lemma — A taut foliation of a compact connected manifold has a single closed transversal
- `lem-finite-c2-surface-carriers-have-smooth-normal-forms-and-relative-cap-approximations` · lemma — Finite C2 surface carriers have smooth normal forms and relative cap approximations
- `lem-finite-tangent-zero-count-and-inward-boundary-sum-without-general-thom-existence` · lemma — Finite tangent index count and inward boundary sum
- `def-reeb-component-in-a-cooriented-three-manifold-foliation` · definition — Reeb components of a codimension-one foliation
- `lem-positive-transverse-accessibility-is-a-preorder` · lemma — Positive transverse accessibility is a preorder and mutual accessibility is an equivalence relation
- `lem-a-noncompact-leaf-of-a-compact-c2-foliation-meets-a-positive-closed-transversal` · lemma — A noncompact leaf meets a positive closed transversal at C2 regularity
- `def-foliation-component-by-mutual-positive-transverse-accessibility` · definition — Foliation components as mutual positive transverse-accessibility classes
- `lem-null-simple-center-frontier-supplies-the-exact-cancellation-scalar` · lemma — A null simple center frontier supplies the exact cancellation scalar
- `lem-nested-pinched-center-frontier-has-a-strict-inner-disk-search` · lemma — A nested pinched center frontier gives a strict inner-disk search
- `lem-null-characteristic-frontier-cap-transports-nullity-to-adjacent-annulus` · lemma — A compact leafwise cap transports nullity across a regular characteristic orbit
- `lem-a-cancelling-disk-triad-has-an-exact-c2-boundary-scalar` · lemma — A cancelling disk triad has an exact C² boundary scalar
- `lem-first-saddle-lobe-admits-a-collar-fixed-center-saddle-cancellation` · lemma — A first saddle lobe admits a collar-fixed center-saddle cancellation
- `lem-area-minimal-three-sector-homoclinic-cycle-has-identity-inward-holonomy` · lemma — An area-minimal three-sector cycle has identity inward holonomy
- `lem-haefliger-nulltransversal-disk-has-a-minimal-one-sided-cycle` · lemma — A generic null-transversal disk has a minimal one-sided cycle
- `def-vanishing-cycle-of-a-codimension-one-foliation` · definition — Vanishing cycles of a codimension-one foliation
- `lem-a-compact-leaf-near-a-compact-reference-leaf-is-a-one-sheeted-collar-graph` · lemma — Finite transversal control and compact collar graphs
- `lem-closed-null-fence-word-has-an-essential-lower-endpoint` · lemma — Closed null fence words have essential lower endpoints
- `lem-a-vanishing-cycle-determines-a-nontrivial-limitwise-nullhomotopy-class` · lemma — A vanishing cycle determines a nonzero limitwise-nullhomotopy class
- `lem-c2-spherical-leaf-stability-on-a-closed-manifold-needs-only-countable-choice` · lemma — Spherical stability at C² and countable-choice strength
- `lem-compatible-arbitrary-pi-fence-reduction` · lemma — Finite compatible reduction of an arbitrary Π fence
- `lem-no-transversal-leaf-bounds-a-positive-accessibility-region-with-finite-inward-boundary` · lemma — A no-transversal leaf bounds a finite inward accessibility region
- `lem-first-essential-loop-of-a-transverse-family-is-a-vanishing-cycle` · lemma — The first essential loop in a transverse family is a vanishing cycle
- `lem-a-no-transversal-leaf-is-a-torus-via-the-finite-accessibility-boundary-sum` · lemma — A no-transversal Π leaf is a torus
- `lem-canonical-jordan-cap-bundle-develops-coherently-over-every-positive-band` · lemma — Canonical Jordan cap development and an infinite normal clock
- `lem-a-foliation-is-taut-if-and-only-if-it-has-no-dead-end-component` · lemma — Tautness is equivalent to the absence of dead-end components
- `lem-center-frontier-selection-and-cancellation-search-has-a-finite-rank` · lemma — Center-frontier selection and cancellation have a finite rank
- `lem-a-nonzero-pi-class-on-a-torus-has-a-primitive-embedded-pi-root` · lemma — A nonzero pi class on a torus has a primitive embedded pi root
- `lem-paired-regular-disk-sweep-is-open-across-its-base-gluing` · lemma — Paired cap sweeps are locally open across their seams
- `lem-simple-lifted-caps-avoid-the-original-essential-loop-and-a-fixed-intrinsic-neighborhood` · lemma — Jordan lifted caps avoid the original essential loop
- `lem-a-reeb-component-obstructs-tautness` · lemma — A Reeb component obstructs tautness
- `prop-transverse-volume-preserving-flow-implies-tautness-in-the-compact-cooriented-three-dimensional-setting` · proposition — A transverse volume-preserving flow forces tautness
- `prop-a-leafwise-positive-closed-two-form-calibrates-a-taut-foliation` · proposition — A closed two-form positive on the leaves forces tautness and calibrates
- `lem-characteristic-disk-with-essential-boundary-data-produces-a-vanishing-cycle` · lemma — A characteristic disk with essential boundary data produces a vanishing cycle
- `lem-a-primitive-pi-torus-collar-has-contracting-longitude-and-exhausting-plane-caps` · lemma — A contracting longitude exhausts the nearby plane leaves
- `lem-an-infinite-cap-center-trajectory-has-recurrent-common-plaque-interior-patches` · lemma — Infinite cap tracks give actual common-plaque recurrence
- `rem-reebless-and-taut-are-not-equivalent-without-extra-hypotheses` · remark — Reeblessness and tautness are not equivalent without extra hypotheses
- `lem-a-compressible-leaf-yields-a-vanishing-cycle` · lemma — A compressible leaf yields a vanishing cycle
- `lem-a-nullhomotopic-closed-transversal-yields-a-vanishing-cycle` · lemma — A null-homotopic closed transversal yields a vanishing cycle
- `lem-common-plaque-lifted-caps-admit-nested-source-disk-inclusions` · lemma — Recurrent caps have nested source-disk inclusions
- `lem-the-primitive-pi-cap-block-embeds-and-gives-the-global-reeb-model` · lemma — The primitive pi cap block embeds and gives the global Reeb model
- `lem-a-paired-immersed-cap-sweep-excludes-a-positive-closed-transversal` · lemma — An immersed paired cap sweep excludes closed transversals
- `lem-recurrent-pi-side-leaf-identifies-a-distinct-accessibility-boundary-class` · lemma — A recurrent Π-side leaf gives a distinct accessibility boundary
- `lem-nontrivial-limitwise-nullhomotopy-class-forces-compact-boundary-leaf` · lemma — A nonzero limitwise-nullhomotopy class forces a compact boundary leaf
- `lem-a-simple-vanishing-cycle-produces-a-compact-leaf` · lemma — A nonzero limitwise-nullhomotopy class yields a compact boundary leaf
- `lem-the-compact-leaf-produced-by-a-vanishing-cycle-bounds-a-reeb-component` · lemma — The compact leaf produced by a vanishing cycle bounds a Reeb component
- `thm-novikov-reeb-component-theorem` · theorem — Novikov's Reeb component theorem
- `cor-reebless-leaves-are-pi-one-injective-under-novikov-hypotheses` · corollary — Reebless leaves are pi-one-injective and transverse loops are essential
- `rem-novikov-conclusions-do-not-extend-to-arbitrary-codimension-or-noncompact-manifolds` · remark — Novikov's conclusions do not extend to higher dimensions or noncompact manifolds

### `vanishing-cycles-novikov-and-taut-foliations-examples` — Vanishing Cycles, Novikov and Taut Foliations — Examples (3 item(s))

- `ex-reeb-foliation-of-s-three-is-not-taut` · example — The Reeb foliation of the three-sphere is not taut
- `ex-fibre-foliation-of-a-mapping-torus-is-taut` · example — A fibre foliation of a mapping torus is taut
- `cex-a-noncompact-codimension-one-foliation-need-not-satisfy-novikov-compactness-conclusions` · counterexample — A noncompact foliation violating Novikov's compactness conclusions

## Your seams

Your pages depend on another group's:

- `vanishing-cycles-novikov-and-taut-foliations` requires `codimension-one-foliations-and-secondary-classes` (group a, batch 23)
- `vanishing-cycles-novikov-and-taut-foliations` requires `foliation-holonomy-and-the-holonomy-groupoid` (group i, batch 21)
- `vanishing-cycles-novikov-and-taut-foliations` requires `reeb-stability-and-global-foliation-constructions` (group c, batch 22)

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-6 reader warnings

None. No Step-6 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/frontier-41-ha-dt-29-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 7 batch adjudication, `frontier-41-ha-dt-29`

- Follow `briefs/step7-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.
