# Step 7 adjudication — group **j**, run `frontier-41-ha-dt-29`

You are the group Alpha for batches **10**, **14**, **17**: 3 A/B pair(s), 6 page(s), 94 item(s), 0 open rejection(s) over 0 item(s).

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
| 10 | `the-hopf-degree-theorem` | A | differential-topology | 551 | `smooth-cobordism-relations-groups-and-rings`, `pontryagin-thom-and-framed-cobordism`, `the-de-rham-theorem-and-degree`, `higher-homotopy-groups-and-cofiber-sequences`, `hurewicz-whitehead-freudenthal-and-cw-approximation`, `oriented-and-mod-two-intersection-numbers` |
| 10 | `the-hopf-degree-theorem-examples` | B | differential-topology | 552 | `the-hopf-degree-theorem` |
| 14 | `the-whitney-trick-and-surgery-below-the-middle-dimension` | A | differential-topology | 559 | `handle-cancellation-slides-and-elementary-moves`, `oriented-and-mod-two-intersection-numbers`, `smooth-surgery-traces-and-handle-trading`, `sard-theorem-and-transversality`, `whitney-embedding-tubular-neighbourhoods-and-approximation`, `relative-homology-excision-and-mayer-vietoris`, `orientations-poincare-lefschetz-and-alexander-duality`, `higher-homotopy-groups-and-cofiber-sequences`, `hurewicz-whitehead-freudenthal-and-cw-approximation`, `the-fundamental-group`, `riemannian-comparison-theorems`, `simple-homotopy-whitehead-groups-and-torsion` |
| 14 | `the-whitney-trick-and-surgery-below-the-middle-dimension-examples` | B | differential-topology | 560 | `the-whitney-trick-and-surgery-below-the-middle-dimension` |
| 17 | `formal-immersions-and-the-smale-hirsch-theorem` | A | differential-topology | 565 | `morse-functions-critical-values-and-genericity`, `sublevel-deformation-and-the-handle-attachment-theorem`, `handle-decompositions-duality-and-rearrangement`, `smooth-vector-bundles-and-sections`, `sard-theorem-and-transversality`, `whitney-embedding-tubular-neighbourhoods-and-approximation`, `obstruction-theory-postnikov-towers-and-classifying-spaces`, `topological-vector-bundles-and-grassmannian-classification`, `leray-hirsch-thom-isomorphism-and-gysin-sequences`, `direct-matrix-factorisations-lu-cholesky-and-qr`, `tangent-cotangent-and-the-differential` |
| 17 | `formal-immersions-and-the-smale-hirsch-theorem-examples` | B | differential-topology | 566 | `formal-immersions-and-the-smale-hirsch-theorem` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `the-hopf-degree-theorem` — The Hopf Degree Theorem (20 item(s))

- `def-frame-bundle-of-a-smooth-manifold` · definition — The frame bundle of a smooth manifold
- `lem-components-of-the-frame-bundle-of-a-connected-manifold` · lemma — The components of the frame bundle of a connected manifold
- `lem-framed-points-in-one-component-of-the-frame-bundle-are-framed-cobordant` · lemma — Framed points joined by a path of framings are framed cobordant
- `lem-disjoint-union-of-framed-cobordisms-is-a-framed-cobordism` · lemma — Disjoint unions of framed cobordisms
- `def-framing-sign-of-a-zero-dimensional-regular-preimage` · definition — The framing sign of a zero-dimensional regular preimage
- `lem-oppositely-framed-points-are-framed-null-cobordant-in-pairs` · lemma — Oppositely framed points are framed null-cobordant in pairs
- `lem-equal-framing-sign-points-do-not-cancel-in-oriented-zero-bordism` · lemma — The signed count is invariant under framed cobordism
- `thm-oriented-zero-dimensional-framed-bordism-is-the-integers` · theorem — Framed 0-manifolds in an oriented manifold are classified by the integers
- `thm-unoriented-zero-dimensional-bordism-is-mod-two` · theorem — Framed 0-manifolds in a nonorientable manifold are classified by parity
- `lem-pontryagin-thom-signed-preimage-count-equals-the-dg-degree` · lemma — The Pontryagin-Thom signed preimage count equals the degree
- `lem-every-integer-degree-is-realized-by-a-map-to-the-sphere` · lemma — Every integer is realized by a map to the sphere
- `lem-bordism-of-regular-preimages-produces-a-homotopy-of-sphere-maps` · lemma — A framed cobordism of regular preimages produces a homotopy of maps
- `def-mod-two-degree-of-a-map-to-a-sphere` · definition — The mod-two degree of a map to a sphere
- `lem-mod-two-degree-is-well-defined-and-homotopy-invariant` · lemma — The mod-two degree is well defined and homotopy invariant
- `thm-hopf-degree-classification-for-oriented-domains` · theorem — The Hopf degree classification for oriented domains
- `thm-hopf-mod-two-degree-classification-for-nonorientable-domains` · theorem — The mod-two degree classification for nonorientable domains
- `cor-maps-between-oriented-spheres-are-homotopic-iff-their-degrees-agree` · corollary — Sphere self-maps are homotopic exactly when their degrees agree
- `cor-an-oriented-sphere-self-map-is-a-homotopy-equivalence-iff-its-degree-is-plus-or-minus-one` · corollary — Sphere self-maps of degree $\pm1$ are exactly the homotopy equivalences
- `rem-connectedness-is-needed-for-a-single-degree-invariant` · remark — Connectedness is needed for a single degree invariant
- `rem-closedness-is-needed-for-hopf-degree-classification` · remark — Closedness is needed for the Hopf degree classification

### `the-hopf-degree-theorem-examples` — The Hopf Degree Theorem — Examples (5 item(s))

- `ex-power-maps-on-the-circle-have-their-exponent-as-degree` · example — Circle power maps are classified by their exponent
- `ex-reflection-of-a-sphere-has-degree-minus-one` · example — A sphere reflection has degree minus one
- `ex-collapse-of-k-oriented-disks-realizes-degree-k` · example — Collapsing $k$ oriented disks realizes degree $k$
- `ex-maps-from-real-projective-n-space-to-s-n-use-mod-two-degree-when-n-is-even` · example — Maps from even projective space to the sphere use mod-two degree
- `cex-equal-total-degree-does-not-classify-maps-from-a-disconnected-domain-componentwise` · counterexample — Equal total degree does not classify maps from a disconnected domain

### `the-whitney-trick-and-surgery-below-the-middle-dimension` — The Whitney Trick and Surgery Below the Middle Dimension (29 item(s))

- `cor-mod-two-evenness-does-not-by-itself-supply-a-whitney-move` · corollary — Mod-two evenness does not by itself supply a Whitney move
- `def-whitney-circle-for-a-pair-of-intersection-points` · definition — Whitney circle for a pair of intersection points
- `lem-arcs-in-a-connected-submanifold-avoiding-finitely-many-double-points` · lemma — Arcs joining two points of a connected submanifold avoiding finitely many points
- `lem-double-cover-branched-over-a-slice-disk-is-a-rational-homology-ball` · lemma — The double cover branched over a slice disk is a rational homology ball
- `lem-one-relative-map-cell-kills-its-class-with-the-correct-fundamental-group-action` · lemma — A relative map cell kills its class with the correct fundamental-group action
- `lem-rational-homology-four-ball-boundary-has-square-torsion-order` · lemma — A rational homology four-ball has square boundary torsion order
- `lem-real-stiefel-spaces-with-complement-rank-at-least-two-are-simply-connected` · lemma — Real Stiefel spaces with complement rank at least two are simply connected
- `rem-nonsimply-connected-whitney-tricks-carry-group-ring-and-whitney-disk-obstructions` · remark — Non-simply-connected Whitney tricks carry group-ring and Whitney-disk obstructions
- `rem-the-smooth-whitney-trick-fails-in-dimension-four` · remark — The smooth Whitney trick fails in dimension four
- `lem-a-normal-summand-of-rank-at-least-two-surjects-on-the-framing-loop-obstruction` · lemma — A normal summand of rank at least two realizes every framing-loop obstruction
- `lem-fundamental-group-label-is-the-obstruction-to-contracting-the-whitney-circle` · lemma — The fundamental-group label controls contractibility of the Whitney circle
- `lem-metastable-embedding-for-maps-from-a-compact-manifold` · lemma — Metastable approximation of maps by embeddings
- `lem-opposite-local-signs-give-the-compatible-whitney-circle-framing` · lemma — Opposite local signs give the compatible Whitney-circle framing
- `lem-the-trefoil-does-not-bound-a-smooth-proper-disk-in-the-four-ball` · lemma — The trefoil does not bound a smooth proper disk in the four-ball
- `def-whitney-disk-and-clean-framed-whitney-disk` · definition — Whitney disk, clean Whitney disk and framed Whitney disk
- `def-local-whitney-move` · definition — The local Whitney move
- `lem-general-position-makes-a-whitney-disk-embedded-and-interior-disjoint-in-the-stable-range` · lemma — General position makes a Whitney disk embedded and interior-disjoint in the stable range
- `lem-orthonormal-frame-fields-along-a-clean-whitney-disk-in-the-stable-range` · lemma — Frame fields with prescribed boundary conditions along a clean Whitney disk
- `lem-stably-trivial-bundles-over-spheres-below-the-rank-are-trivial` · lemma — Stably trivial bundles over spheres below the rank are trivial
- `lem-whitney-disk-framing-obstruction-can-be-corrected-under-the-standard-high-dimensional-hypotheses` · lemma — The Whitney framing extends over a clean disk in the stable range
- `lem-a-clean-framed-whitney-bigon-has-an-adapted-tube` · lemma — A clean framed Whitney bigon has an adapted tube
- `thm-whitney-move-removes-a-cancelling-pair-of-intersections` · theorem — The Whitney move removes a cancelling pair of intersection points
- `lem-relative-hurewicz-and-general-position-produce-surgery-spheres` · lemma — Kernel classes are represented by embedded spheres below the middle dimension
- `thm-high-dimensional-whitney-trick` · theorem — The high-dimensional Whitney trick
- `thm-whitney-trick-in-the-two-dimensional-borderline-case` · theorem — The Whitney trick in the codimension-two borderline case
- `thm-vanishing-algebraic-intersection-can-be-realized-by-geometric-disjunction-in-the-simply-connected-stable-range` · theorem — Vanishing algebraic intersection gives geometric disjunction in the simply connected stable range
- `lem-stable-normal-data-supplies-framings-below-the-middle-dimension` · lemma — Stable normal data supplies framings of the surgery spheres below the middle dimension
- `lem-the-homotopy-effect-of-a-surgery-killing-a-relative-class-below-the-middle` · lemma — The homotopy effect of a surgery killing a relative class below the middle
- `prop-surgery-below-the-middle-dimension-improves-connectivity` · proposition — Surgery below the middle dimension improves connectivity

### `the-whitney-trick-and-surgery-below-the-middle-dimension-examples` — The Whitney Trick and Surgery Below the Middle Dimension — Examples (5 item(s))

- `cex-a-nontrivial-whitney-circle-in-the-fundamental-group-blocks-cancellation` · counterexample — A nontrivial Whitney circle in the fundamental group blocks cancellation
- `cex-an-immersed-whitney-disk-in-a-four-manifold-does-not-give-the-smooth-trick` · counterexample — An immersed disk in the four-ball cannot always be cleaned relative to its boundary
- `ex-a-local-whitney-move-in-euclidean-space` · example — A local Whitney move in Euclidean space
- `cex-same-sign-intersection-points-cannot-be-whitney-cancelled-orientedly` · counterexample — Same-sign intersection points cannot be cancelled orientedly
- `ex-oppositely-signed-intersections-of-two-three-manifolds-in-a-simply-connected-six-manifold` · example — Oppositely signed intersections of two three-manifolds in a simply connected six-manifold

### `formal-immersions-and-the-smale-hirsch-theorem` — Formal Immersions and the Smale Hirsch Theorem (30 item(s))

- `def-formal-immersion-between-smooth-manifolds` · definition — Formal immersion between smooth manifolds
- `def-weak-compact-open-smooth-topology-on-mapping-spaces` · definition — The weak compact-open C-infinity topology on mapping spaces
- `lem-the-weak-smooth-topology-is-independent-of-the-chosen-atlas` · lemma — The weak smooth topology is independent of the chosen atlas
- `def-space-of-immersions-and-space-of-formal-immersions` · definition — Space of immersions and space of formal immersions
- `lem-joint-jet-continuity-and-the-weak-smooth-topology` · lemma — Joint jet continuity characterises the weak smooth topology
- `lem-the-immersion-condition-is-open-in-the-weak-topology-for-compact-sources` · lemma — For compact sources the immersion condition is open in the weak smooth topology
- `def-compact-parameter-pair` · definition — Compact parameter pairs and relative families
- `lem-smoothing-formal-immersion-families` · lemma — Smoothing continuous families of formal immersions
- `lem-smoothing-genuine-immersion-families` · lemma — Smoothing continuous families of genuine immersions
- `lem-smooth-families-and-path-components-in-the-weak-topology` · lemma — Smooth families and path components in the weak topology
- `def-derivative-map-from-immersions-to-formal-immersions` · definition — The derivative map from immersions to formal immersions
- `lem-the-derivative-map-is-continuous` · lemma — The derivative map is continuous
- `def-regular-homotopy-of-immersions` · definition — Regular homotopy of immersions
- `lem-parametric-immersion-extension-on-a-disk` · lemma — Immersion extension on a disk: absolute and relative parametric forms
- `lem-restriction-of-formal-immersion-data-has-the-parametric-lifting-property` · lemma — Restriction of formal-immersion data has the parametric lifting property
- `lem-regular-sublevels-are-compact-manifolds-with-boundary` · lemma — Regular sublevels are compact manifolds with boundary
- `lem-the-disk-bundle-of-a-smooth-vector-bundle-is-a-compact-manifold-with-boundary` · lemma — Disk bundles over compact bases are compact manifolds with boundary
- `lem-open-manifolds-admit-exhaustions-with-no-caps` · lemma — Open manifolds admit exhaustions with no caps
- `lem-open-manifolds-admit-handle-filtrations-without-top-index-handles` · lemma — Open manifolds admit handle filtrations without top-index handles
- `lem-formal-immersion-homotopies-extend-over-a-subcritical-handle` · lemma — Formal-immersion homotopies extend over a subcritical handle
- `lem-formal-immersion-homotopies-extend-over-a-collar` · lemma — Formal-immersion homotopies extend over a collar
- `thm-smale-hirsch-for-open-source-manifolds` · theorem — Smale–Hirsch for open source manifolds
- `def-normal-bundle-of-a-formal-immersion` · definition — Normal bundle of a formal immersion
- `lem-formal-immersion-gives-the-tangent-normal-bundle-identity` · lemma — Formal immersion gives the tangent normal-bundle identity
- `lem-positive-codimension-thickening-reduces-closed-sources-to-the-open-case` · lemma — Positive-codimension thickening reduces closed sources to the open case
- `thm-smale-hirsch-immersion-theorem` · theorem — The Smale–Hirsch immersion theorem
- `cor-regular-homotopy-classes-of-immersions-are-formal-homotopy-classes` · corollary — Regular homotopy classes of immersions are formal homotopy classes
- `rem-arbitrary-compact-parameter-immersion-classification-needs-a-mapping-space-comparison` · remark — Arbitrary compact-parameter immersion classification needs a mapping-space comparison
- `rem-smale-hirsch-is-a-weak-homotopy-equivalence-not-asserted-as-an-actual-homotopy-equivalence` · remark — Smale–Hirsch is a weak homotopy equivalence, not asserted as an actual homotopy equivalence
- `rem-a-closed-n-manifold-cannot-immerse-in-r-n` · remark — A nonempty closed n-manifold cannot immerse in R-n for n at least one

### `formal-immersions-and-the-smale-hirsch-theorem-examples` — Formal Immersions and the Smale Hirsch Theorem — Examples (5 item(s))

- `ex-immersing-the-circle-in-the-plane-from-a-formal-line-monomorphism` · example — Immersing the circle in the plane from a formal line monomorphism
- `ex-the-standard-sphere-immersion-and-its-normal-line` · example — The standard sphere immersion and its normal line
- `ex-an-open-parallelizable-manifold-immerses-in-euclidean-space-of-equal-dimension` · example — An open parallelizable manifold immerses in Euclidean space of equal dimension
- `cex-a-closed-manifold-with-formally-plausible-rank-data-needs-positive-codimension` · counterexample — A closed manifold with formally plausible rank data needs positive codimension
- `cex-a-bundle-map-with-rank-drop-is-not-a-formal-immersion` · counterexample — A bundle map with rank drop is not a formal immersion

## Your seams

Your pages depend on another group's:

- `the-hopf-degree-theorem` requires `pontryagin-thom-and-framed-cobordism` (group i, batch 9)
- `the-whitney-trick-and-surgery-below-the-middle-dimension` requires `handle-cancellation-slides-and-elementary-moves` (group h, batch 3)
- `the-whitney-trick-and-surgery-below-the-middle-dimension` requires `smooth-surgery-traces-and-handle-trading` (group f, batch 13)
- `formal-immersions-and-the-smale-hirsch-theorem` requires `handle-decompositions-duality-and-rearrangement` (group f, batch 1)

Another group's pages depend on yours:

- `regular-homotopy-and-sphere-eversion` (group b) requires your `formal-immersions-and-the-smale-hirsch-theorem`
- `isotopy-extension-and-embedding-theory-beyond-whitney` (group g) requires your `formal-immersions-and-the-smale-hirsch-theorem`
- `isotopy-extension-and-embedding-theory-beyond-whitney` (group g) requires your `the-whitney-trick-and-surgery-below-the-middle-dimension`
- `characteristic-class-obstructions-to-immersions-and-embeddings` (group g) requires your `formal-immersions-and-the-smale-hirsch-theorem`
- `the-smooth-h-cobordism-theorem` (group h) requires your `the-whitney-trick-and-surgery-below-the-middle-dimension`

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
