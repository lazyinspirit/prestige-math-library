# Step 6 Alpha group reader — read-only digest — group **d**, run `frontier-38-owner-30`

- You are the read-only Step 6 Alpha group reader for batches **15**, **16**, **17**: 3 A/B pair(s), 6 page(s), 102 item(s).

- Read every owned item and every listed seam before returning the compact
  schema-constrained digest. That file, not this conversation, is the handoff
  to a fresh Step-7 adjudicator. No judge verdict is supplied here.
- Read items in dependency order across the group: suppliers before their
  direct and indirect consumers, including prerequisites outside the group.
- In the digest, `pages_read` is exactly the ids under **Your pages** and
  `items_read` exactly the ids under **Your content**. External items you
  open belong only in `published_dependencies`; never add them to those inventories.
- Everything below is derived from disk by `tools/step7-scope.mjs`; no line
  of it is a judgement about mathematics.

## Read scope

- **Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything an owned item touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

- **This dispatch is read-only.** Record concerns about owned items and alerts
  about other groups in the returned digest; do not repair anything.

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

---

# Step 6 Alpha group reader — read-only digest, `frontier-38-owner-30`

- **Role and scope:** You are the Step 6 Alpha group reader for the assigned group in the generated group header. Read every assigned page and item, its cited published dependencies, and every listed cross-group seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned group: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the group.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-7 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the group's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-group findings correctly:** Put a finding about another group's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
