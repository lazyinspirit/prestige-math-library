# Step 6 Alpha group reader — read-only digest — group **b**, run `frontier-37-owner-30`

- You are the read-only Step 6 Alpha group reader for batches **20**, **21**, **22**: 3 A/B pair(s), 6 page(s), 45 item(s).

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
| 20 | `punctured-disks-mapping-classes-and-point-pushing` | A | braid-groups | 735 | `braids-as-fundamental-groups-of-configuration-spaces`, `fibrations-fiber-bundles-and-homotopy-exact-sequences`, `partitions-of-unity-and-paracompactness`, `vector-fields-flows-and-lie-derivatives`, `ascoli-arzela` |
| 20 | `punctured-disks-mapping-classes-and-point-pushing-examples` | B | braid-groups | 736 | `punctured-disks-mapping-classes-and-point-pushing` |
| 21 | `pure-braids-fadell-neuwirth-and-asphericity` | A | braid-groups | 737 | `ordered-and-unordered-configuration-spaces`, `braids-as-fundamental-groups-of-configuration-spaces`, `punctured-disks-mapping-classes-and-point-pushing`, `free-groups-and-presentations`, `semidirect-products-and-automorphism-groups`, `fibrations-fiber-bundles-and-homotopy-exact-sequences`, `group-extensions-complements-and-schur-zassenhaus`, `asymptotic-cones-and-the-sublinear-triangle-criterion` |
| 21 | `pure-braids-fadell-neuwirth-and-asphericity-examples` | B | braid-groups | 738 | `pure-braids-fadell-neuwirth-and-asphericity`, `permutation-statistics-inversions-and-eulerian-numbers` |
| 22 | `artin-presentation-completeness-and-braid-combing` | A | braid-groups | 739 | `pure-braids-fadell-neuwirth-and-asphericity`, `punctured-disks-mapping-classes-and-point-pushing`, `geometric-braids-and-artin-generators` |
| 22 | `artin-presentation-completeness-and-braid-combing-examples` | B | braid-groups | 740 | `artin-presentation-completeness-and-braid-combing` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `punctured-disks-mapping-classes-and-point-pushing` — Punctured Disks, Mapping Classes, and Point Pushing (14 item(s))

- `def-boundary-fixed-mapping-class-group-of-a-punctured-disk` · definition — Boundary-fixed mapping class group of a punctured disk
- `def-pure-mapping-class-group-of-a-punctured-disk` · definition — Pure boundary-fixed mapping classes
- `thm-alexander-contractibility-of-the-boundary-fixed-disk-homeomorphism-group` · theorem — Alexander contraction of the boundary-fixed disk homeomorphism group
- `lem-boundary-fixed-disk-evaluation-has-continuous-local-point-motion-sections` · lemma — Continuous local sections for disk point evaluation
- `lem-a-smooth-finite-disk-arc-system-isotopy-extends-relative-boundary-and-marked-points` · lemma — Smooth relative isotopy extension for finite disk arc systems
- `lem-evaluation-on-an-unordered-marked-set-is-a-numerable-bundle-and-fibration` · lemma — Evaluation is a numerable bundle and Hurewicz fibration
- `def-boundary-map-from-point-motions-to-punctured-disk-mapping-classes` · definition — Boundary map from point motions
- `lem-the-point-motion-boundary-map-is-a-well-defined-homomorphism` · lemma — Point-motion boundary map is a homomorphism
- `thm-the-evaluation-bundle-boundary-map-is-an-isomorphism-for-the-disk` · theorem — Evaluation boundary isomorphism for the disk
- `lem-configuration-loops-admit-smooth-separated-point-motion-representatives` · lemma — Smooth representatives of configuration loops
- `lem-smooth-finite-point-motions-extend-to-boundary-fixed-disk-isotopies` · lemma — Smooth finite point motions extend to disk isotopies
- `thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk` · theorem — Braid group as boundary-fixed punctured-disk mapping classes
- `cor-pure-braids-are-pure-punctured-disk-mapping-classes` · corollary — Pure braids as pure mapping classes
- `def-point-pushing-homomorphism-for-a-puncture` · definition — Point pushing the last puncture

### `punctured-disks-mapping-classes-and-point-pushing-examples` — Punctured Disks, Mapping Classes, and Point Pushing — Examples (4 item(s))

- `ex-a-half-twist-as-a-punctured-disk-homeomorphism` · example — A supported half-twist homeomorphism
- `ex-point-pushing-one-puncture-around-another` · example — Point pushing one puncture around another
- `cex-fixing-the-boundary-only-setwise-changes-the-disk-mapping-class-group` · counterexample — Setwise boundary preservation kills a nontrivial braid
- `cex-setwise-puncture-preservation-does-not-define-the-pure-mapping-class-group` · counterexample — Setwise puncture preservation does not imply purity

### `pure-braids-fadell-neuwirth-and-asphericity` — Pure Braids, Fadell–Neuwirth, and Asphericity (12 item(s))

- `lem-a-finitely-punctured-disk-retracts-to-a-wedge-of-circles` · lemma — A finitely punctured open disk has a finite wedge of circles as a spine
- `lem-planar-configuration-spaces-have-vanishing-pi-two-by-simultaneous-induction` · lemma — Vanishing π₂ for every ordered planar configuration space
- `thm-pure-braid-forgetting-a-strand-short-exact-sequence` · theorem — The Fadell–Neuwirth short exact sequence for pure braids
- `thm-point-pushing-is-the-kernel-of-forgetting-a-puncture` · theorem — Point pushing is the kernel of forgetting the last disk puncture
- `lem-the-planar-forgetful-map-has-a-continuous-section` · lemma — A choice-free continuous section of planar coordinate forgetting
- `cor-the-pure-braid-extension-splits` · corollary — The pure braid extension splits as a semidirect product
- `thm-ordered-planar-configuration-spaces-are-aspherical` · theorem — Ordered planar configuration spaces are aspherical
- `cor-unordered-planar-configuration-spaces-are-aspherical` · corollary — Unordered planar configuration spaces are aspherical
- `def-standard-pure-braid-generators` · definition — Standard geometric pure braid generators A_ij
- `lem-standard-pure-braids-generate-each-free-kernel` · lemma — The A_in are meridian generators of the forgetful free kernel
- `thm-standard-pure-braids-generate-the-pure-braid-group` · theorem — All standard A_ij generate PB_n
- `thm-pure-braid-groups-are-torsion-free` · theorem — Pure braid groups are torsion-free

### `pure-braids-fadell-neuwirth-and-asphericity-examples` — Pure Braids, Fadell–Neuwirth, and Asphericity — Examples (4 item(s))

- `ex-the-pure-two-strand-braid-group-is-infinite-cyclic` · example — The two-strand pure braid group is infinite cyclic
- `ex-the-pure-three-strand-group-as-a-split-free-by-cyclic-extension` · example — PB₃ as F₂ by Z, with its section action
- `ex-pure-braid-generators-as-point-pushes` · example — Standard A_ij as point pushes after relabeling
- `cex-the-short-exact-sequence-to-s-n-does-not-prove-b-n-torsion-free` · counterexample — A torsion-free kernel and finite quotient can have a torsion middle group

### `artin-presentation-completeness-and-braid-combing` — Artin Presentation Completeness and Braid Combing (8 item(s))

- `def-zariski-braid-combing-words-alpha-and-x` · definition — The Zariski combing words α_i and x_i in the Artin presentation
- `lem-prefix-position-insertion-rewrites-a-trivial-braid-word-into-combing-factors` · lemma — Prefix insertion rewrites a trivial braid word into combing factors
- `lem-each-combing-factor-reduces-to-a-lower-rank-letter-or-an-x-letter` · lemma — Each combing factor reduces to a lower-rank letter or an x-letter
- `lem-lower-rank-artin-letters-conjugate-x-letters-within-the-free-kernel` · lemma — Lower-rank Artin letters conjugate x-letters
- `lem-every-trivial-braid-word-combs-as-w-one-w-two` · lemma — Every trivial braid word combs as W_1W_2
- `lem-the-combed-geometric-decomposition-is-unique` · lemma — The combed geometric decomposition is unique
- `thm-the-artin-presentation-is-complete-for-geometric-braids` · theorem — The Artin presentation is complete for geometric braids
- `cor-all-four-classical-braid-models-realize-the-artin-presentation` · corollary — All four classical braid models realize the Artin presentation

### `artin-presentation-completeness-and-braid-combing-examples` — Artin Presentation Completeness and Braid Combing — Examples (3 item(s))

- `ex-combing-a-four-strand-braid-word` · example — Combing a four-strand braid word
- `ex-the-free-kernel-words-for-three-strand-braid-combing` · example — The free-kernel words for three-strand braid combing
- `cex-visible-artin-relations-alone-do-not-prove-presentation-completeness` · counterexample — Visible Artin relations alone do not prove presentation completeness

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

---

# Step 6 Alpha group reader — read-only digest, `frontier-37-owner-30`

- **Role and scope:** You are the Step 6 Alpha group reader for the assigned group in the generated group header. Read every assigned page and item, its cited published dependencies, and every listed cross-group seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned group: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the group.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-7 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the group's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-group findings correctly:** Put a finding about another group's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
