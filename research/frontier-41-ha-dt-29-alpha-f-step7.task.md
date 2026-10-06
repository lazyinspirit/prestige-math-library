# Step 7 adjudication — group **f**, run `frontier-41-ha-dt-29`

You are the group Alpha for batches **1**, **4**, **13**: 3 A/B pair(s), 6 page(s), 81 item(s), 0 open rejection(s) over 0 item(s).

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
| 1 | `handle-decompositions-duality-and-rearrangement` | A | differential-topology | 527 | `morse-functions-critical-values-and-genericity`, `gradient-like-vector-fields-and-morse-trajectories`, `sublevel-deformation-and-the-handle-attachment-theorem`, `manifolds-with-boundary-collars-and-orientations`, `cw-complexes-and-cellular-homology`, `higher-homotopy-groups-and-cofiber-sequences`, `homology-axioms-degree-and-classical-applications`, `hurewicz-whitehead-freudenthal-and-cw-approximation` |
| 1 | `handle-decompositions-duality-and-rearrangement-examples` | B | differential-topology | 528 | `handle-decompositions-duality-and-rearrangement` |
| 4 | `morse-inequalities-and-the-handle-chain-complex` | A | differential-topology | 535 | `sublevel-deformation-and-the-handle-attachment-theorem`, `handle-decompositions-duality-and-rearrangement`, `handle-cancellation-slides-and-elementary-moves`, `singular-chains-and-singular-homology`, `relative-homology-excision-and-mayer-vietoris`, `cw-complexes-and-cellular-homology`, `chain-complexes-and-homology` |
| 4 | `morse-inequalities-and-the-handle-chain-complex-examples` | B | differential-topology | 536 | `morse-inequalities-and-the-handle-chain-complex` |
| 13 | `smooth-surgery-traces-and-handle-trading` | A | differential-topology | 557 | `sublevel-deformation-and-the-handle-attachment-theorem`, `handle-decompositions-duality-and-rearrangement`, `handle-cancellation-slides-and-elementary-moves`, `oriented-and-mod-two-intersection-numbers`, `intersection-pairings-self-intersection-and-euler-classes`, `smooth-cobordism-relations-groups-and-rings`, `thom-spaces-normal-data-and-collapse-maps`, `whitney-embedding-tubular-neighbourhoods-and-approximation`, `relative-homology-excision-and-mayer-vietoris`, `orientations-poincare-lefschetz-and-alexander-duality`, `higher-homotopy-groups-and-cofiber-sequences`, `hurewicz-whitehead-freudenthal-and-cw-approximation`, `obstruction-theory-postnikov-towers-and-classifying-spaces`, `the-fundamental-group` |
| 13 | `smooth-surgery-traces-and-handle-trading-examples` | B | differential-topology | 558 | `smooth-surgery-traces-and-handle-trading` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `handle-decompositions-duality-and-rearrangement` — Handle Decompositions Duality and Rearrangement (29 item(s))

- `def-smooth-cobordism-triad-for-morse-theory` · definition — Smooth cobordism triad for Morse theory
- `def-morse-function-adapted-to-a-cobordism` · definition — Morse function adapted to a cobordism
- `lem-boundary-product-function-on-a-collared-cobordism` · lemma — Boundary product function on a collared cobordism
- `thm-adapted-excellent-morse-functions-exist-on-compact-cobordisms` · theorem — Adapted excellent Morse functions exist on compact cobordisms
- `lem-separating-critical-values-far-from-the-boundary` · lemma — Separating critical values far from the boundary
- `def-handle-decomposition-relative-to-the-incoming-boundary` · definition — Handle decomposition relative to the incoming boundary
- `lem-standard-handle-admits-an-adapted-morse-function` · lemma — Standard handle admits an adapted Morse function
- `lem-gluing-handle-morse-models-along-collars` · lemma — Gluing handle Morse models along collars
- `lem-interior-slab-handle-attachment` · lemma — Interior slab handle attachment
- `lem-handle-attachments-are-relative-cell-attachments-up-to-homotopy` · lemma — Handle attachments are relative cell attachments up to homotopy
- `lem-a-one-handle-between-distinct-boundary-components-is-a-boundary-connected-sum` · lemma — A one-handle between distinct manifold components is a boundary connected sum
- `lem-boundary-connected-sum-with-a-disk-does-not-change-the-diffeomorphism-type` · lemma — Boundary connected sum with a disk does not change the diffeomorphism type
- `thm-morse-functions-and-handle-decompositions-correspond` · theorem — Morse functions and handle decompositions correspond
- `lem-a-handle-decomposition-gives-a-relative-cw-complex` · lemma — A handle decomposition gives a relative CW complex
- `def-dual-handle-decomposition` · definition — Dual handle decomposition
- `thm-handle-duality-from-negating-a-morse-function` · theorem — Handle duality from negating a Morse function
- `lem-product-cobordisms-have-critical-point-free-presentations` · lemma — Product cobordisms have critical-point-free presentations
- `lem-spheres-of-adjacent-critical-levels-have-product-neighbourhoods` · lemma — Spheres of adjacent critical levels have product neighbourhoods
- `lem-a-sphere-with-a-product-neighbourhood-can-be-moved-off-a-lower-dimensional-submanifold` · lemma — Moving a sphere off a lower-dimensional submanifold
- `lem-flow-reparametrization-realizes-a-level-isotopy` · lemma — Flow reparametrization realizes a level isotopy
- `lem-critical-values-of-disjoint-trajectory-closures-can-be-interchanged` · lemma — Critical values of disjoint trajectory closures can be interchanged
- `lem-gradient-like-perturbation-separates-adjacent-critical-levels` · lemma — Gradient-like perturbation separates adjacent critical levels
- `thm-morse-rearrangement-by-index` · theorem — Rearrangement of critical levels by index
- `lem-increasing-reparametrization-of-finitely-many-critical-levels` · lemma — Increasing reparametrization of finitely many critical levels
- `thm-self-indexing-morse-function-existence` · theorem — Self-indexing Morse functions exist
- `lem-handles-of-equal-index-can-be-attached-on-one-level` · lemma — Handles of equal index can be attached on one level
- `prop-connected-cobordisms-admit-presentations-without-superfluous-zero-handles` · proposition — Connected cobordisms admit presentations without superfluous zero handles
- `prop-dual-elimination-of-top-index-handles` · proposition — Dual elimination of top-index handles
- `rem-handle-decompositions-are-not-canonical` · remark — Handle decompositions are not canonical

### `handle-decompositions-duality-and-rearrangement-examples` — Handle Decompositions Duality and Rearrangement — Examples (5 item(s))

- `ex-relative-handle-decomposition-of-a-cylinder` · example — The relative handle decomposition of a cylinder
- `ex-dual-handle-presentations-of-a-genus-g-surface` · example — Dual handle presentations of a genus-g surface
- `ex-reordering-independent-one-handles` · example — Reordering independent one-handles
- `cex-critical-levels-cannot-always-be-interchanged-across-a-connecting-trajectory` · counterexample — Critical levels connected by a trajectory cannot always be interchanged
- `ex-empty-incoming-boundary-requires-zero-handles` · example — An empty incoming boundary requires zero handles

### `morse-inequalities-and-the-handle-chain-complex` — Morse Inequalities and the Handle Chain Complex (19 item(s))

- `def-morse-numbers-and-morse-polynomial` · definition — Morse numbers and the Morse polynomial
- `def-poincare-polynomial-over-a-field` · definition — Poincare polynomial of a space and of a pair over a field
- `lem-exact-sequence-dimension-inequality` · lemma — Rank bookkeeping for a long exact sequence of finite-dimensional vector spaces
- `lem-long-exact-sequence-of-a-triple-in-singular-homology` · lemma — Long exact sequence of a triple in singular homology
- `lem-a-collar-product-region-deformation-retracts-onto-its-face` · lemma — A product collar deformation retracts onto its face
- `lem-a-k-handle-deformation-retracts-onto-its-cocore-and-outgoing-region` · lemma — The dual handle retraction onto the cocore, with the outgoing region carried onto the belt sphere
- `lem-one-handle-changes-relative-homology-in-one-degree` · lemma — One handle changes relative homology in one degree only
- `lem-higher-index-handle-attachments-do-not-change-lower-homology` · lemma — Attaching handles of index at least q preserves homology below q-1
- `thm-morse-polynomial-identity` · theorem — Morse polynomial identity
- `cor-strong-morse-inequalities` · corollary — Strong Morse inequalities
- `cor-weak-morse-inequalities` · corollary — Weak Morse inequalities
- `def-perfect-morse-function-over-a-field` · definition — Perfect Morse function over a field
- `cor-total-critical-point-lower-bound` · corollary — Total critical point lower bound
- `prop-relative-morse-inequalities-for-a-cobordism` · proposition — Relative Morse inequalities for a cobordism
- `prop-morse-handle-chain-complex-computes-singular-homology` · proposition — The handle chain complex computes singular homology
- `cor-morse-euler-characteristic-identity` · corollary — Morse Euler characteristic identity
- `lem-perfectness-is-equivalent-to-vanishing-morse-correction-polynomial` · lemma — Perfectness, vanishing correction, and vanishing handle boundaries
- `lem-handle-boundary-coefficients-are-attaching-belt-intersection-numbers` · lemma — Handle boundary coefficients are attaching-belt intersection numbers
- `rem-morse-inequalities-depend-on-the-coefficient-field` · remark — Morse inequalities and perfectness depend on the coefficient field

### `morse-inequalities-and-the-handle-chain-complex-examples` — Morse Inequalities and the Handle Chain Complex — Examples (5 item(s))

- `ex-perfect-height-function-on-a-sphere` · example — The height function on a sphere is perfect
- `ex-perfect-morse-function-on-a-torus` · example — A Morse function on the torus is perfect over every field
- `ex-real-projective-space-shows-coefficient-dependent-perfectness` · example — Real projective space shows coefficient-dependent perfectness
- `ex-cancellation-pair-contributes-a-one-plus-t-term` · example — A created cancelling pair contributes a $(1+t)t^k$ term
- `cex-euler-equality-alone-does-not-imply-perfectness` · counterexample — Euler equality alone does not imply perfectness

### `smooth-surgery-traces-and-handle-trading` — Smooth Surgery Traces and Handle Trading (18 item(s))

- `def-framed-embedded-surgery-sphere` · definition — Framed embedded surgery sphere
- `def-p-surgery-on-a-smooth-m-manifold` · definition — p-surgery on a smooth m-manifold
- `lem-isotopy-extension-for-a-compact-source-with-boundary` · lemma — Isotopy extension for a compact source with boundary
- `lem-surgery-gluing-has-a-canonical-smooth-structure-up-to-diffeomorphism` · lemma — The surgery gluing has a canonical smooth structure up to diffeomorphism
- `def-surgery-trace-cobordism` · definition — Surgery trace cobordism
- `lem-outgoing-boundary-of-a-handle-attachment-trades-the-disk-factors` · lemma — The outgoing boundary of a handle attachment trades the disk factors
- `thm-upper-boundary-of-the-surgery-trace-is-the-surged-manifold` · theorem — The upper boundary of the surgery trace is the surgered manifold
- `def-dual-surgery-sphere` · definition — Dual surgery sphere
- `thm-surgery-is-reversed-by-dual-surgery` · theorem — Surgery is reversed by dual surgery
- `lem-attaching-a-single-cell-kills-the-represented-homotopy-class` · lemma — Attaching a single cell kills the represented homotopy class
- `lem-p-surgery-kills-the-represented-pi-p-class-when-p-is-below-the-middle` · lemma — p-surgery kills the represented pi-p class below the middle dimension
- `prop-homology-effect-of-surgery-away-from-the-middle-dimensions` · proposition — The homology effect of surgery away from the middle dimensions
- `lem-framing-obstruction-lives-in-the-normal-bundle-of-the-surgery-sphere` · lemma — The framing obstruction lives in the normal bundle of the surgery sphere
- `def-degree-one-normal-map-for-the-surgery-program` · definition — Degree-one normal map for the surgery program
- `prop-surgery-on-a-normal-map-preserves-its-normal-bordism-class` · proposition — Surgery on a normal map preserves its normal bordism class
- `rem-middle-dimensional-surgery-has-an-intersection-form-obstruction` · remark — Middle-dimensional surgery has an intersection-form obstruction
- `rem-surgery-exact-sequence-and-l-groups-are-a-dedicated-sequel` · remark — The surgery exact sequence and L-groups are a dedicated sequel
- `rem-smooth-four-dimensional-surgery-is-not-covered-by-the-high-dimensional-program` · remark — Smooth four-dimensional surgery is not covered by the high-dimensional program

### `smooth-surgery-traces-and-handle-trading-examples` — Smooth Surgery Traces and Handle Trading — Examples (5 item(s))

- `ex-zero-surgery-on-the-circle` · example — Zero-surgery on the circle
- `ex-surgery-on-s-p-times-s-q-produces-a-sphere-in-the-standard-framing` · example — Surgery on a product of spheres produces a sphere in the standard framing
- `ex-one-surgery-on-a-three-manifold-as-framed-knot-surgery` · example — One-surgery on a three-manifold as framed knot surgery
- `cex-an-embedded-sphere-with-nontrivial-normal-bundle-is-not-valid-framed-surgery-data` · counterexample — An embedded sphere with nontrivial normal bundle is not valid framed surgery data
- `cex-middle-dimensional-surgery-can-change-an-intersection-form` · counterexample — Middle-dimensional surgery can change an intersection form

## Your seams

Your pages depend on another group's:

- `morse-inequalities-and-the-handle-chain-complex` requires `handle-cancellation-slides-and-elementary-moves` (group h, batch 3)
- `smooth-surgery-traces-and-handle-trading` requires `handle-cancellation-slides-and-elementary-moves` (group h, batch 3)
- `smooth-surgery-traces-and-handle-trading` requires `intersection-pairings-self-intersection-and-euler-classes` (group d, batch 2)

Another group's pages depend on yours:

- `morse-homology-continuation-and-comparison` (group e) requires your `handle-decompositions-duality-and-rearrangement`
- `handle-cancellation-slides-and-elementary-moves` (group h) requires your `handle-decompositions-duality-and-rearrangement`
- `vector-field-index-euler-characteristic-and-poincare-hopf` (group h) requires your `morse-inequalities-and-the-handle-chain-complex`
- `the-smooth-h-cobordism-theorem` (group h) requires your `handle-decompositions-duality-and-rearrangement`
- `the-smooth-h-cobordism-theorem` (group h) requires your `morse-inequalities-and-the-handle-chain-complex`
- `the-smooth-h-cobordism-theorem` (group h) requires your `smooth-surgery-traces-and-handle-trading`
- `the-whitney-trick-and-surgery-below-the-middle-dimension` (group j) requires your `smooth-surgery-traces-and-handle-trading`
- `formal-immersions-and-the-smale-hirsch-theorem` (group j) requires your `handle-decompositions-duality-and-rearrangement`

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
