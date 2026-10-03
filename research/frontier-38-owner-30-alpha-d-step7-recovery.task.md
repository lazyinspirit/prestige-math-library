# Step 7 adjudication — group **d**, run `frontier-38-owner-30`

You are the group Alpha for batches **15**, **16**, **17**: 3 A/B pair(s), 6 page(s), 102 item(s), 0 open rejection(s) over 0 item(s).

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
in `research/frontier-38-owner-30-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 15 | `the-artin-action-on-a-free-group` | A | braid-groups | 743 | `punctured-disks-mapping-classes-and-point-pushing`, `free-groups-and-presentations`, `artin-presentation-completeness-and-braid-combing`, `hurewicz-whitehead-freudenthal-and-cw-approximation`, `classification-of-compact-connected-surfaces` |
| 15 | `the-artin-action-on-a-free-group-examples` | B | braid-groups | 744 | `the-artin-action-on-a-free-group` |
| 16 | `lawrence-krammer-bigelow-and-linearity` | A | braid-groups | 747 | `ordered-and-unordered-configuration-spaces`, `braids-as-fundamental-groups-of-configuration-spaces`, `covering-spaces-and-lifting`, `singular-chains-and-singular-homology`, `modules-over-a-pid-and-canonical-forms`, `punctured-disks-mapping-classes-and-point-pushing`, `garside-structure-normal-forms-and-the-center`, `classification-of-compact-connected-surfaces`, `the-artin-action-on-a-free-group` |
| 16 | `lawrence-krammer-bigelow-and-linearity-examples` | B | braid-groups | 748 | `lawrence-krammer-bigelow-and-linearity` |
| 17 | `oriented-links-braid-closures-and-markov-equivalence` | A | braid-groups | 749 | `geometric-braids-and-artin-generators`, `artin-presentation-completeness-and-braid-combing`, `manifolds-with-boundary-collars-and-orientations`, `classification-of-compact-connected-surfaces`, `the-artin-action-on-a-free-group`, `geodesics-the-exponential-map-completeness-and-hopf-rinow` |
| 17 | `oriented-links-braid-closures-and-markov-equivalence-examples` | B | braid-groups | 750 | `oriented-links-braid-closures-and-markov-equivalence` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `the-artin-action-on-a-free-group` — The Artin Action on a Free Group (24 item(s))

- `def-standard-meridians-of-a-punctured-disk` · definition — Standard meridians of a punctured disk
- `lem-the-standard-flower-is-a-deformation-retract-with-free-meridian-basis` · lemma — The standard flower is a deformation retract with free meridian basis
- `thm-the-punctured-disk-fundamental-group-is-free-on-standard-meridians` · theorem — The punctured-disk fundamental group is free on the standard meridians
- `lem-the-standard-stem-system-cuts-the-punctured-disk-open-to-a-disk` · lemma — The standard stem system cuts the punctured disk open to a disk
- `lem-the-oriented-boundary-loop-represents-the-ordered-product-of-the-standard-meridians` · lemma — The oriented boundary loop represents the ordered product of the standard meridians
- `lem-a-based-self-map-of-the-punctured-disk-inducing-the-identity-on-pi-one-is-based-homotopic-to-the-identity` · lemma — A based self-map inducing the identity on the fundamental group is based-homotopic to the identity
- `lem-a-plane-arc-has-a-rectangular-neighborhood-by-schoenflies` · lemma — Plane arc extension and rectangular neighborhoods
- `lem-homotopic-simple-proper-arcs-in-the-punctured-disk-are-isotopic-relative-to-their-endpoints` · lemma — Homotopic simple proper arcs in the punctured disk are isotopic relative to their endpoints
- `lem-smooth-relative-isotopy-extension-for-disk-arcs-with-puncture-endpoints` · lemma — Smooth relative isotopy extension for disk arcs with puncture endpoints
- `lem-trivial-action-on-standard-meridians-fixes-the-stem-arc-system-up-to-isotopy` · lemma — Trivial action on the standard meridians fixes the punctures and the stem arcs up to homotopy
- `lem-a-standard-stem-arc-system-can-be-straightened-by-boundary-and-puncture-fixed-ambient-isotopy` · lemma — A standard stem arc system can be straightened by a boundary- and puncture-fixed ambient isotopy
- `lem-a-boundary-fixed-punctured-disk-map-acting-trivially-on-pi-one-is-isotopic-to-the-identity` · lemma — A boundary-fixed punctured-disk homeomorphism acting trivially on the fundamental group is isotopic to the identity
- `def-artin-automorphisms-of-the-free-group` · definition — Artin automorphisms of the free group
- `lem-artin-automorphisms-satisfy-the-braid-relations` · lemma — The Artin automorphisms satisfy the braid relations
- `def-the-artin-representation-on-a-free-group` · definition — The Artin representation on a free group
- `prop-the-geometric-action-on-meridians-is-the-artin-representation` · proposition — The geometric action on meridians is the Artin representation
- `thm-the-artin-representation-is-faithful` · theorem — The Artin representation is faithful
- `lem-artin-automorphisms-permute-meridian-conjugacy-classes-and-fix-the-boundary-word` · lemma — Artin automorphisms permute meridian conjugacy classes and fix the boundary word
- `def-peripheral-boundary-preserving-automorphism-of-f-n` · definition — Peripheral-boundary-preserving automorphisms of F_n
- `lem-artins-product-cancellation-dichotomy` · lemma — Artin's product-cancellation dichotomy
- `lem-an-extremal-cancellation-shortens-an-artin-substitution` · lemma — An extremal cancellation shortens an Artin substitution
- `thm-every-peripheral-boundary-preserving-free-group-automorphism-is-an-artin-automorphism` · theorem — Every peripheral-boundary-preserving automorphism is an Artin automorphism
- `thm-artins-characterization-of-the-braid-subgroup-of-aut-f-n` · theorem — Artin's characterization of the braid subgroup of Aut(F_n)
- `cor-the-artin-action-solves-the-braid-word-problem` · corollary — The Artin action solves the braid word problem

### `the-artin-action-on-a-free-group-examples` — The Artin Action on a Free Group — Examples (4 item(s))

- `ex-the-artin-action-of-the-b-three-generators` · example — The Artin action of the B_3 generators
- `ex-the-full-twist-acts-by-boundary-conjugation` · example — The full twist acts by boundary conjugation
- `cex-permuting-meridian-conjugacy-classes-without-fixing-the-boundary-word-is-not-artin` · counterexample — A conjugate-permuting automorphism that does not fix the boundary word is not in the braid image
- `cex-the-induced-permutation-does-not-determine-a-braid` · counterexample — The induced permutation does not determine a braid

### `lawrence-krammer-bigelow-and-linearity` — Lawrence–Krammer–Bigelow Representations and Linearity (27 item(s))

- `def-two-point-configuration-space-of-a-punctured-disk` · definition — The two-point configuration space of a punctured disk
- `def-lkb-two-variable-covering-homomorphism` · definition — The two-variable covering homomorphism
- `def-lawrence-krammer-bigelow-cover` · definition — The Lawrence-Krammer-Bigelow cover
- `def-lkb-absolute-second-homology-module` · definition — The integral LKB module as absolute second homology
- `def-lkb-relative-pairing-modules` · definition — The relative pairing modules as stabilized direct limits
- `def-forks-noodles-and-their-lkb-intersection-pairing` · definition — Forks, noodles and the LKB intersection pairing
- `lem-a-multiple-of-a-fork-surface-has-a-closed-compact-replacement` · lemma — A multiple of a fork surface has a closed compact replacement
- `lem-lkb-small-end-neighbourhoods-stabilize-equivariantly` · lemma — Equivariant stabilization of the LKB end neighbourhoods
- `lem-the-unordered-two-point-punctured-plane-has-an-equivariant-two-dimensional-cell-model` · lemma — An equivariant two-dimensional model for the LKB configuration space
- `lem-lkb-lifted-absolute-cellular-boundary-and-fraction-field-rank` · lemma — The absolute LKB cellular boundary and fraction-field rank
- `lem-lkb-deleting-the-last-puncture-gives-a-saturated-absolute-homology-inclusion` · lemma — The absolute LKB inclusion obtained by deleting the last puncture is saturated
- `lem-the-fork-noodle-pairing-is-well-defined-and-equivariant` · lemma — The fork-noodle pairing is well defined and equivariant
- `def-lexicographic-order-on-fork-noodle-deck-monomials` · definition — The lexicographic order on fork-noodle deck monomials
- `lem-extremal-fork-noodle-terms-have-one-sign-and-cannot-cancel` · lemma — Extremal fork-noodle terms have one sign and cannot cancel
- `lem-arcs-in-a-punctured-disk-have-disjointness-detecting-minimal-positions` · lemma — Minimal-position representatives and the arc bigon criterion
- `lem-the-fork-noodle-pairing-detects-essential-intersections` · lemma — The fork-noodle pairing detects essential intersections
- `lem-fork-detection-transports-to-arbitrary-boundary-crosscuts` · lemma — Fork detection transports to arbitrary boundary crosscuts
- `lem-an-lkb-kernel-braid-fixes-every-standard-adjacent-edge-up-to-isotopy` · lemma — An LKB kernel braid fixes every standard adjacent edge up to isotopy
- `lem-a-punctured-disk-mapping-class-fixing-all-standard-adjacent-edges-is-a-boundary-twist-power` · lemma — A mapping class fixing all standard adjacent edges is a boundary twist power
- `lem-the-full-boundary-twist-acts-on-lkb-by-the-scalar-q-to-two-n-t-squared` · lemma — The full boundary twist acts on LKB by the scalar q to two n t squared
- `def-lawrence-krammer-bigelow-representation` · definition — The Lawrence-Krammer-Bigelow representation
- `lem-braids-lift-to-the-lkb-cover-and-act-lambda-linearly` · lemma — Braids lift to the LKB cover and act Lambda-linearly
- `lem-closed-lkb-basis-surfaces-have-the-three-required-topological-types-and-factors` · lemma — Closed LKB basis surfaces have the three required topological types and factors
- `lem-fraction-field-coefficients-of-an-integral-lkb-class-are-laurent-polynomials` · lemma — Fraction-field coefficients of an integral LKB class are Laurent polynomials
- `thm-the-integral-lkb-module-is-free-of-rank-n-choose-two` · theorem — The integral LKB module is free of rank n choose two
- `thm-the-lawrence-krammer-bigelow-representation-is-faithful` · theorem — The Lawrence-Krammer-Bigelow representation is faithful
- `cor-every-classical-braid-group-is-linear` · corollary — Every classical braid group is linear

### `lawrence-krammer-bigelow-and-linearity-examples` — Lawrence–Krammer–Bigelow Representations and Linearity — Examples (4 item(s))

- `ex-the-krammer-fraction-field-generator-matrices-for-b-three` · example — The Krammer fraction-field generator matrices for B three
- `ex-a-fork-noodle-pairing-computation` · example — A fork-noodle pairing computation
- `cex-ordinary-intersection-number-alone-does-not-give-the-lkb-pairing` · counterexample — Ordinary intersection number alone does not give the LKB pairing
- `cex-a-linear-representation-need-not-be-faithful` · counterexample — A linear representation need not be faithful

### `oriented-links-braid-closures-and-markov-equivalence` — Oriented Links, Braid Closures, and Markov Equivalence (39 item(s))

- `def-oriented-link-in-s-three-and-ambient-isotopy` · definition — Oriented links in the three-sphere and ambient isotopy
- `def-regular-oriented-link-diagram` · definition — Regular oriented link diagrams
- `def-planar-isotopy-of-link-diagrams` · definition — Planar isotopy of link diagrams
- `def-oriented-reidemeister-moves` · definition — Oriented Reidemeister moves
- `lem-each-oriented-reidemeister-move-is-realized-by-ambient-isotopy` · lemma — Each oriented Reidemeister move is realized by an ambient isotopy
- `lem-every-oriented-link-admits-a-regular-projection` · lemma — Existence of regular projections
- `lem-a-smooth-isotopy-of-links-can-be-put-in-general-position` · lemma — General-position isotopies of links
- `lem-a-generic-isotopy-of-links-has-only-reidemeister-singular-times` · lemma — Generic isotopies have only Reidemeister singular times
- `thm-oriented-reidemeister-equivalence-theorem` · theorem — Reidemeister's theorem for oriented links
- `lem-every-geometric-braid-is-braid-isotopic-to-a-smooth-braid` · lemma — Every geometric braid is braid-isotopic to a smooth braid
- `def-closure-of-a-geometric-braid` · definition — The closure of a geometric braid
- `lem-a-smooth-isotopy-of-compact-embedded-submanifolds-extends-to-an-ambient-isotopy` · lemma — Isotopy extension for compact submanifolds
- `lem-closure-depends-only-on-the-braid-isotopy-class` · lemma — Closure depends only on the braid isotopy class
- `def-seifert-smoothing-and-seifert-circles-of-an-oriented-link-diagram` · definition — Seifert smoothing and Seifert circles of an oriented diagram
- `lem-two-disjoint-circles-in-s-two-cobound-an-annulus` · lemma — Two disjoint circles in the two-sphere cobound an annulus
- `def-coherence-of-seifert-circles-and-the-height-of-a-diagram` · definition — Coherence of Seifert circles and the height of a diagram
- `def-reducing-arc-and-yamada-vogel-reducing-move` · definition — Reducing arcs and Yamada-Vogel reducing moves
- `lem-yamada-vogel-reducing-moves-lower-bad-seifert-circle-complexity` · lemma — A reducing move lowers the height by exactly one
- `lem-a-positive-height-diagram-has-a-defect-region` · lemma — A diagram of positive height has a defect region
- `lem-a-height-zero-diagram-represents-a-closed-braid` · lemma — A height-zero diagram represents a closed braid
- `thm-alexanders-closed-braid-theorem` · theorem — Alexander's theorem: every link is a closed braid
- `def-braid-index-of-an-oriented-link` · definition — The braid index of an oriented link
- `def-markov-conjugation-and-stabilization-moves` · definition — Conjugation and stabilization moves on braids
- `lem-markov-moves-preserve-oriented-closure-isotopy` · lemma — Markov moves preserve the oriented closure
- `lem-free-homotopy-classes-of-loops-are-conjugacy-classes` · lemma — Free homotopy classes of loops are conjugacy classes
- `lem-braid-isotopic-closed-braids-are-conjugate` · lemma — Braid-isotopic closed braids are conjugate
- `lem-braid-like-reidemeister-moves-on-closed-braids-are-braid-isotopies` · lemma — Braid-like moves on closed braids are braid isotopies
- `lem-non-braid-like-reidemeister-moves-are-generated-by-braid-like-moves-and-reductions` · lemma — Non-braid-like Reidemeister moves are generated by braid-like moves and reducing moves
- `lem-braid-like-moves-can-be-moved-to-height-zero` · lemma — Braid-like moves can be performed at height zero
- `lem-ordinary-exchange-moves-are-markov-sequences` · lemma — Ordinary exchange moves are Markov sequences
- `lem-reducing-move-peaks-can-be-lowered-to-the-four-band-case` · lemma — Reducing-move peaks can be lowered to the four-band case
- `lem-block-interchanges-transport-arbitrary-braid-boxes` · lemma — Block interchanges transport arbitrary braid boxes
- `lem-compensated-band-kinks-decompose-into-ordinary-markov-moves` · lemma — Compensated band kinks decompose into ordinary Markov moves
- `lem-band-exchanges-decompose-into-ordinary-markov-moves` · lemma — Band exchanges decompose into ordinary Markov moves
- `lem-the-first-four-band-comparison-is-a-compensated-band-stabilization` · lemma — The first four-band comparison is a compensated band stabilization
- `lem-the-second-four-band-comparison-is-a-compensated-band-destabilization` · lemma — The second four-band comparison is a compensated band destabilization
- `lem-the-four-band-d-pair-case-is-a-markov-sequence` · lemma — The four-band case is a Markov sequence
- `lem-reidemeister-moves-between-closed-braid-diagrams-factor-through-markov-moves` · lemma — Reidemeister moves between closed braids factor through Markov moves
- `thm-markovs-closed-braid-equivalence-theorem` · theorem — Markov's theorem for braid closures

### `oriented-links-braid-closures-and-markov-equivalence-examples` — Oriented Links, Braid Closures, and Markov Equivalence — Examples (4 item(s))

- `ex-torus-links-as-closures-of-two-strand-braids` · example — Torus links as closures of two-strand braids
- `ex-a-markov-stabilization-preserves-the-unknot-closure` · example — A Markov stabilization preserves the unknot closure
- `ex-alexanders-braiding-algorithm-on-a-small-diagram` · example — The Yamada-Vogel algorithm on a small diagram
- `cex-conjugacy-alone-does-not-classify-braid-closures` · counterexample — Conjugacy alone does not classify braid closures

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-6 reader warnings

None. No Step-6 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/frontier-38-owner-30-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Historical Step-7 closure recovery, `frontier-38-owner-30`

Historical compatibility task only. Preserve historical exact-tuple decisions
as evidence; this template grants no current repair or certification authority.
Historical receipts constrain `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`; do not reinterpret those records
as current round coverage.

Current rounds use `tools/step7-workflow.mjs`, `briefs/step7-adjudicator.md`
and `briefs/step7-owner-repair.md`. Follow those briefs
and the generated round-bound task. Repair all confirmed defects, including
nonfatal defects, and continue downstream repair until complete before the
single central certification pass.
