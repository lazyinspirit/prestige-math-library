# Step 7 whole-group reading — group **a**, run `phase-2-wave-1`

You are the group Alpha for batches **1**, **3**, **6**: 4 A/B pair(s), 8 page(s), 82 item(s).

Read every owned item and every listed seam before returning the compact
schema-constrained digest. That file, not this conversation, is the handoff
to a fresh Step-8 adjudicator. No judge verdict is supplied here.
In the digest, `pages_read` is exactly the ids under **Your pages** and
`items_read` exactly the ids under **Your content**. External items you
open belong only in `published_dependencies`; never add them to those inventories.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## Read scope

**Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything an owned item touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**This dispatch is read-only.** Record concerns about owned items and alerts
about other groups in the returned digest; do not repair anything.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 1 | `small-cancellation-disc-diagrams-and-torsion-toolkit` | A | group-theory | 71.0142 | `free-groups-and-presentations`, `free-products-and-amalgamation`, `hnn-extensions-and-brittons-lemma` |
| 1 | `small-cancellation-disc-diagrams-and-torsion-toolkit-examples` | B | group-theory | 71.0144 | `small-cancellation-disc-diagrams-and-torsion-toolkit` |
| 3 | `modular-traces-and-brauer-character-independence` | A | group-theory | 150.0021 | `modular-representations-and-projective-covers`, `the-group-algebra-and-representations`, `chain-conditions-and-semisimple-modules` |
| 3 | `modular-traces-and-brauer-character-independence-examples` | B | group-theory | 150.0022 | `modular-traces-and-brauer-character-independence` |
| 3 | `group-homology-transfer-and-low-degree-exact-sequences` | A | group-theory | 365.0721 | `chain-complexes-and-homology`, `group-cohomology-as-a-derived-functor`, `free-groups-and-presentations`, `group-extensions-complements-and-schur-zassenhaus` |
| 3 | `group-homology-transfer-and-low-degree-exact-sequences-examples` | B | group-theory | 365.0722 | `group-homology-transfer-and-low-degree-exact-sequences` |
| 6 | `hall-malcev-coordinates-and-bass-guivarch-growth` | A | group-theory | 302.0022 | `cayley-graphs-word-metrics-and-quasi-isometry`, `composition-series-and-solvable-groups`, `modules-over-a-pid-and-canonical-forms` |
| 6 | `hall-malcev-coordinates-and-bass-guivarch-growth-examples` | B | group-theory | 302.0024 | `hall-malcev-coordinates-and-bass-guivarch-growth` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `small-cancellation-disc-diagrams-and-torsion-toolkit` — Small-Cancellation Disc Diagrams and the Torsion Toolkit (17 item(s))

- `def-sc-toolkit-symmetrised-relators-and-pieces` · definition — Sc toolkit symmetrised relators and pieces
- `def-sc-toolkit-labelled-planar-disc-diagram` · definition — Sc toolkit labelled planar disc diagram
- `thm-sc-toolkit-van-kampen-existence` · theorem — Sc toolkit van kampen existence
- `lem-sc-toolkit-minimal-diagrams-and-cut-vertex-reduction` · lemma — Sc toolkit minimal diagrams and cut vertex reduction
- `def-arc-reduction-and-combinatorial-curvature-of-a-disc-diagram` · definition — Arc reduction and combinatorial curvature of a disc diagram
- `lem-internal-arcs-of-a-reduced-small-cancellation-diagram-are-pieces` · lemma — Internal arcs of a reduced small cancellation diagram are pieces
- `lem-c-prime-one-sixth-interior-faces-have-at-least-seven-arcs` · lemma — C prime one sixth interior faces have at least seven arcs
- `lem-euler-curvature-identity-for-an-arc-reduced-disc-diagram` · lemma — Euler curvature identity for an arc reduced disc diagram
- `lem-boundary-spur-or-at-most-three-shell-from-curvature` · lemma — Boundary spur or at most three shell from curvature
- `thm-greendlinger-shell-existence-from-the-curvature-count` · theorem — Greendlinger shell existence from the curvature count
- `def-minimal-cyclic-power-diagram-and-relator-root` · definition — Minimal cyclic power diagram and relator root
- `lem-sc-toolkit-commuting-positive-words-have-a-common-root` · lemma — Sc toolkit commuting positive words have a common root
- `lem-sc-toolkit-periodic-relator-overlap-is-a-piece` · lemma — Sc toolkit periodic relator overlap is a piece
- `def-sc-toolkit-cyclically-dehn-reduced-word` · definition — Cyclically Dehn-reduced words
- `lem-sc-toolkit-periodic-word-square-alternative` · lemma — Periodic words: a relator root or Dehn-reduced powers
- `lem-minimal-power-diagram-has-a-periodic-boundary-shell` · lemma — A shortest finite-order representative shares a word root with a relator
- `thm-c-prime-one-sixth-torsion-elements-come-from-relator-roots` · theorem — C prime one sixth torsion elements come from relator roots

### `small-cancellation-disc-diagrams-and-torsion-toolkit-examples` — Small-Cancellation Disc Diagrams and the Torsion Toolkit: Examples (4 item(s))

- `ex-curvature-ledger-for-a-two-cell-diagram` · example — Curvature ledger for a two cell diagram
- `ex-a-three-shell-after-arc-reduction` · example — A three shell after arc reduction
- `ex-relator-root-versus-proper-power` · example — Relator root versus proper power
- `cex-a-boundary-spur-when-free-reduction-is-omitted` · counterexample — A boundary spur when free reduction is omitted

### `modular-traces-and-brauer-character-independence` — Modular Traces and Brauer-Character Independence (7 item(s))

- `lem-a-finite-dimensional-algebra-separates-its-simple-modules` · lemma
- `lem-modular-trace-functions-of-simple-modules-are-linearly-independent` · lemma
- `lem-modular-trace-depends-only-on-the-p-regular-part` · lemma
- `lem-prime-to-p-roots-lift-uniquely-in-a-complete-discrete-valuation-ring` · lemma
- `def-lifted-modular-trace-on-p-regular-elements` · definition
- `lem-reduction-of-teichmuller-lifted-traces-recovers-modular-traces` · lemma
- `thm-irreducible-brauer-characters-are-linearly-independent-on-p-regular-elements` · theorem

### `modular-traces-and-brauer-character-independence-examples` — Modular Traces and Brauer-Character Independence: Examples (3 item(s))

- `ex-modular-traces-for-a-cyclic-p-prime-group` · example
- `ex-brauer-character-independence-for-s-three-in-characteristic-two` · example
- `cex-ordinary-traces-on-p-singular-elements-do-not-define-brauer-characters` · counterexample

### `group-homology-transfer-and-low-degree-exact-sequences` — Group Homology Transfer and Low-Degree Exact Sequences (21 item(s))

- `lem-diagonal-bar-coinvariants-compute-group-homology` · lemma
- `def-finite-index-transfer-on-normalized-bar-chains` · definition
- `lem-bar-transfer-is-a-chain-map-and-choice-independent-up-to-chain-homotopy` · lemma
- `lem-corestriction-after-bar-transfer-is-index-multiplication-on-homology` · lemma
- `thm-positive-degree-integral-homology-of-a-finite-group-is-annihilated-by-its-order` · theorem
- `lem-bar-first-integral-homology-is-the-abelianization` · lemma
- `lem-free-group-augmentation-ideal-has-the-generator-difference-basis` · lemma
- `lem-low-degree-filtration-sequence-for-a-first-quadrant-bicomplex` · lemma
- `def-free-presentation-lyndon-bar-bicomplex-and-edge-maps` · definition
- `lem-free-presentation-bicomplex-collapses-in-positive-middle-group-degree` · lemma
- `thm-free-presentation-homology-five-term-sequence` · theorem
- `def-crossed-homomorphisms-principal-coboundaries-and-first-cohomology` · definition
- `def-degree-one-restriction-inflation-and-quotient-action` · definition
- `lem-degree-one-maps-and-quotient-action-are-well-defined` · lemma
- `thm-degree-one-inflation-restriction-exact-sequence` · theorem
- `lem-bar-two-cocycles-classify-abelian-kernel-extensions` · lemma
- `lem-pullback-and-coefficient-pushout-realize-bar-cohomology-maps` · lemma
- `def-low-degree-transgression-for-a-group-extension` · definition
- `lem-transgression-kernel-is-the-image-of-restriction` · lemma
- `lem-kernel-of-degree-two-inflation-is-the-transgression-image` · lemma
- `thm-inflation-restriction-transgression-five-term-sequence` · theorem

### `group-homology-transfer-and-low-degree-exact-sequences-examples` — Group Homology Transfer and Low-Degree Exact Sequences: Examples (3 item(s))

- `ex-transfer-annihilation-for-a-cyclic-group` · example
- `ex-free-presentation-five-term-sequence-for-a-cyclic-group` · example
- `ex-transgression-for-the-integral-heisenberg-extension` · example

### `hall-malcev-coordinates-and-bass-guivarch-growth` — Hall–Mal’cev Coordinates and Bass–Guivarc’h Growth (20 item(s))

- `lem-hall-malcev-integer-abelian-structure-and-rank` · lemma — Integer abelian structure and rank by finite reduction
- `lem-hall-malcev-commutator-product-identities` · lemma — Commutator product identities in the fixed convention
- `lem-hall-malcev-three-subgroup-containment` · lemma — The three-subgroup containment for normal subgroups
- `lem-hall-malcev-lower-central-commutators-add-weights` · lemma — Lower-central commutators add weights
- `lem-lower-central-quotients-of-finitely-generated-nilpotent-groups-are-finitely-generated-abelian` · lemma — Finite generation of lower-central factors
- `lem-hall-malcev-subgroups-of-finitely-generated-nilpotent-groups-are-finitely-generated` · lemma — Subgroups of finitely generated nilpotent groups are finitely generated
- `lem-hall-malcev-torsion-is-a-finite-characteristic-subgroup` · lemma — Finite torsion and the torsion-free quotient
- `lem-hall-malcev-upper-central-factors-are-torsion-free` · lemma — Upper-central factors of a torsion-free nilpotent group
- `lem-hall-malcev-integral-coordinates-from-a-central-cyclic-refinement` · lemma — Integral coordinates from a central cyclic refinement
- `def-bass-guivarch-dimension` · definition — Bass–Guivarc’h dimension and nilpotent Hirsch length
- `def-lower-central-generators-and-weighted-coordinate-length` · definition — Lower-central generators, residue coordinates and weighted length
- `lem-hall-malcev-finite-normal-quotients-preserve-lower-central-ranks` · lemma — Finite normal quotients preserve lower-central ranks
- `lem-growth-is-unchanged-by-quotienting-a-finite-normal-subgroup` · lemma — Finite normal quotients preserve ball growth
- `lem-finite-lower-central-coordinate-systems-exist` · lemma — Finite lower-central coordinate systems with torsion accounted for
- `lem-hall-malcev-finite-collection-alphabets-include-torsion-carries` · lemma — Finite collection alphabets include commutators and torsion carries
- `lem-weighted-collection-in-lower-central-coordinates` · lemma — Weighted collection with finite-order carries
- `lem-hall-malcev-powers-in-the-last-central-term-have-short-words` · lemma — Power compression in the last lower-central term
- `thm-last-lower-central-term-has-exact-weighted-distortion` · theorem — Both bounds for last-term weighted distortion
- `lem-weighted-coordinate-boxes-give-matching-growth-bounds` · lemma — Coordinate boxes and word balls have matching size
- `thm-bass-guivarch-growth-degree-formula-with-proof` · theorem — The Bass–Guivarc’h growth degree formula

### `hall-malcev-coordinates-and-bass-guivarch-growth-examples` — Hall–Mal’cev Coordinates and Bass–Guivarc’h Growth: Examples (7 item(s))

- `ex-bass-dimension-of-a-free-abelian-group` · example — Free abelian groups have degree equal to rank
- `ex-bass-dimension-of-the-discrete-heisenberg-group` · example — The discrete Heisenberg group has growth degree four
- `ex-central-distortion-in-the-discrete-heisenberg-group` · example — The Heisenberg center is quadratically distorted
- `ex-bass-dimension-of-unitriangular-four-by-four-integers` · example — UT_4(Z) has ranks three, two, one and growth degree ten
- `ex-hirsch-length-and-growth-degree-need-not-agree` · example — Hirsch length and growth degree differ
- `cex-counting-every-lower-central-generator-with-weight-one` · counterexample — Weight-one counting misses Heisenberg growth
- `cex-torsion-free-nilpotent-group-with-torsion-in-abelianization` · counterexample — Torsion-free does not mean torsion-free lower-central factors

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

---

# Step 7 — group reading digest, `phase-2-wave-1`

Read every page and item in the generated group header, its cited published
dependencies, and every listed cross-group seam. This dispatch is read-only;
record concerns and alerts without repairing them.

Return only the supplied Step-8 context JSON. `pages_read`, `items_read`, and
`seams_checked` must be exact inventories of the generated scope. Record the
group's conventions, load-bearing items, opened published dependencies, and
concrete concerns; an empty concerns or alerts list is valid.

Inventory boundary: `pages_read` must contain exactly the ids under **Your
pages**, and `items_read` exactly the ids under **Your content**, with no extras.
Opening a published dependency does not expand either inventory; record its item
only under `published_dependencies`.

Put a finding about another group's item in `alerts`, not `concerns`; the scope
tool routes it to that item's owning group before adjudication.
