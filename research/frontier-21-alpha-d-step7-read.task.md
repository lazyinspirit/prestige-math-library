# Step 8 — group **d**, run `frontier-21`

You are the group Alpha for batches **6**, **10**: 4 A/B pair(s), 8 page(s), 97 item(s), 0 open rejection(s) over 0 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-21-alpha-d-step8-context.json` is what a group Alpha for this group wrote during step 7,
while the judges were still sweeping and no verdict existed. It records the
conventions your pages fix, which items the rest lean on, which published
dependencies were actually opened, and what already looked thin.

**Its `concerns` list is evidence, not decoration.** Each entry was found with
nobody suggesting where to look. A judge rejection landing at the same place is
two independent readings agreeing and should be very hard to call a
`false_positive`; a rejection landing nowhere near any of them is not thereby
wrong, but it is the case to read most carefully against the text.

It is notes, not authority. Where it and the item files disagree, the files win.

## Read scope, write scope

**You may read the entire library.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-21-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 6 | `integer-partitions-and-the-twelvefold-way` | A | combinatorics | 201 | `set-partitions-stirling-numbers-and-exponential-generating-functions`, `formal-power-series` |
| 6 | `integer-partitions-and-the-twelvefold-way-examples` | B | combinatorics | 202 | `integer-partitions-and-the-twelvefold-way` |
| 6 | `counting-up-to-symmetry-burnside-and-polya` | A | combinatorics | 205 | `group-actions-and-cayleys-theorem`, `symmetric-groups-and-the-sign-homomorphism`, `set-partitions-stirling-numbers-and-exponential-generating-functions`, `symmetric-polynomials` |
| 6 | `counting-up-to-symmetry-burnside-and-polya-examples` | B | combinatorics | 206 | `counting-up-to-symmetry-burnside-and-polya` |
| 10 | `pure-pairs-forests-and-path-antipath-classes` | A | combinatorics | 409 | `blockades-combs-and-pattern-graphs` |
| 10 | `pure-pairs-forests-and-path-antipath-classes-examples` | B | combinatorics | 410 | `pure-pairs-forests-and-path-antipath-classes` |
| 10 | `quotient-blockades-and-mixing-relations` | A | combinatorics | 435 | `blockades-combs-and-pattern-graphs` |
| 10 | `quotient-blockades-and-mixing-relations-examples` | B | combinatorics | 436 | `quotient-blockades-and-mixing-relations` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `integer-partitions-and-the-twelvefold-way` — Integer Partitions and the Twelvefold Way (21 item(s))

- `def-twelvefold-way-ball-box-conventions` · definition — Conventions for integer partitions, Ferrers diagrams, and the twelvefold-way table
- `def-ferrers-young-diagram-conjugate-partition-and-durfee-square` · definition — Ferrers and Young diagrams, conjugate partitions, self-conjugacy, and the Durfee square
- `def-partition-counting-functions-and-restricted-families` · definition — The functions p(n), p_k(n), and the standard restricted partition families
- `lem-partition-conjugation-is-an-involution` · lemma — Conjugating a partition twice returns the original partition
- `thm-partitions-with-k-parts-equal-largest-part-k` · theorem — Partitions with k parts are equinumerous with partitions whose largest part is k
- `cor-partitions-with-at-most-k-parts-equal-parts-at-most-k` · corollary — Partitions with at most k parts are equinumerous with partitions whose parts are all at most k
- `thm-partitions-into-k-parts-recurrence` · theorem — Exact-k partition recurrence
- `rem-euler-product-agrees-with-the-published-multiset-corollary` · remark — The direct multiplicity product and the published multiset proof give the same Euler product
- `cor-distinct-partitions-have-product-generating-function` · corollary — Distinct-part product generating function
- `cor-odd-partitions-have-product-generating-function` · corollary — Odd-part product generating function
- `thm-euler-distinct-parts-equal-odd-parts-by-generating-functions` · theorem — Euler's theorem by generating functions
- `thm-glaisher-bijection-between-odd-and-distinct-partitions` · theorem — Glaisher's bijection between odd-part and distinct-part partitions
- `rem-distinct-odd-proof-agreement` · remark — The generating-function proof and Glaisher's bijection prove the same Euler theorem
- `thm-self-conjugate-partitions-correspond-to-distinct-odd-partitions` · theorem — Self-conjugate partitions correspond to distinct odd-part partitions
- `thm-durfee-square-identity` · theorem — Durfee-square decomposition of the partition series
- `thm-unlabelled-unlabelled-placement-counts` · theorem — The unlabelled-to-unlabelled cells of the twelvefold way
- `thm-twelvefold-way` · theorem — The twelvefold way
- `thm-euler-pentagonal-number-theorem-by-franklin` · theorem — Euler's pentagonal number theorem by Franklin's involution
- `cor-pentagonal-recurrence-for-partition-numbers` · corollary — Euler's pentagonal recurrence for partition numbers
- `fs-partitions-into-k-parts-are-counted-by-binomial-coefficients` · false-statement — FALSE: p_k(n) is counted by C(n-1,k-1)
- `fs-conjugation-by-itself-carries-distinct-partitions-to-odd-partitions` · false-statement — FALSE: conjugation itself is the distinct-parts to odd-parts bijection

### `integer-partitions-and-the-twelvefold-way-examples` — Integer Partitions and the Twelvefold Way — Examples (15 item(s))

- `ex-partitions-of-six-listed` · example — The eleven partitions of 6
- `ex-conjugation-of-the-partitions-of-six` · example — Conjugation pairs the partitions of 6 by swapping length and largest part
- `ex-a-self-conjugate-partition-and-its-diagonal-hooks` · example — A self-conjugate partition produces distinct odd diagonal hooks
- `ex-glaisher-bijection-on-an-odd-partition` · example — Glaisher's bijection on an odd-part partition
- `ex-durfee-square-decomposition-of-five-three-three-two-one` · example — The partition (5,3,3,2,1) decomposes by its Durfee square
- `ex-pentagonal-recurrence-computes-p-ten` · example — Euler's pentagonal recurrence computes p(10)=42
- `ex-twelvefold-way-labelled-labelled-at-three-and-two` · example — The labelled-to-labelled cells of the twelvefold way at n=3 and k=2
- `ex-twelvefold-way-unlabelled-to-labelled-at-three-and-two` · example — The unlabelled-domain to labelled-codomain cells at n=3 and k=2
- `ex-twelvefold-way-labelled-to-unlabelled-at-three-and-two` · example — The labelled-domain to unlabelled-codomain cells at n=3 and k=2
- `ex-twelvefold-way-unlabelled-unlabelled-at-three-and-two` · example — The unlabelled-to-unlabelled cells at n=3 and k=2
- `ex-partitions-into-three-parts-of-five-from-the-recurrence` · example — The recurrence gives p_3(5)=2
- `ex-distinct-and-odd-partitions-of-seven` · example — The partitions of 7 into distinct parts and into odd parts match
- `cex-a-partition-that-is-not-self-conjugate` · counterexample — The partition (4,2,1) is not self-conjugate
- `cex-conjugation-does-not-send-distinct-parts-to-odd-parts` · counterexample — Conjugating (4,2,1) does not produce an odd-part partition
- `cex-manipulating-the-euler-product-without-summability` · counterexample — Ignoring summability in the Euler product leads to illegal coefficient manipulations

### `counting-up-to-symmetry-burnside-and-polya` — Counting up to Symmetry: Burnside and Pólya (20 item(s))

- `rem-cycle-index-and-polya-naming-conventions` · remark — Naming conventions for Burnside, Cauchy-Frobenius, and Redfield-Pólya
- `def-cycle-index-of-a-permutation-group` · definition — The cycle index of a finite permutation group
- `def-colouring-action-weight-function-and-pattern-inventory` · definition — Colourings, weight functions, and the pattern inventory
- `def-cycle-index-series-of-a-graded-symmetric-family` · definition — The cycle-index series of a graded family of S_n-actions
- `lem-fixed-colourings-factor-by-cycle-type` · lemma — Fixed colourings factor by cycle type
- `thm-polya-enumeration-theorem` · theorem — Pólya's enumeration theorem
- `thm-weighted-pattern-inventory-formula` · theorem — The weighted pattern inventory is the cycle index evaluated at the power sums
- `thm-cycle-index-of-cyclic-group` · theorem — The cycle index of the cyclic group C_n
- `thm-cycle-index-of-dihedral-group` · theorem — The cycle index of the dihedral group D_{2n}
- `lem-permutations-with-a-given-cycle-type-count` · lemma — Permutations with a fixed cycle type are counted by the standard factorial denominator
- `thm-cycle-index-of-symmetric-group` · theorem — The cycle index of S_n is the sum over cycle types
- `thm-cycle-index-of-alternating-group` · theorem — The cycle index of A_n is the parity-filtered symmetric-group sum
- `cor-necklace-count-via-cycle-index` · corollary — Necklace count from the cyclic-group cycle index
- `rem-necklace-count-agrees-with-the-published-cycle-construction` · remark — The cycle-index necklace count agrees with the published CYC count
- `cor-bracelet-count-via-cycle-index` · corollary — Bracelet count from the dihedral-group cycle index
- `thm-edge-set-orbits-on-two-subsets-by-polya` · theorem — Pólya enumeration counts edge-set orbits on the 2-subsets of [n]
- `cor-symmetric-group-cycle-index-series-is-exponential` · corollary — The symmetric-group cycle-index series is coefficientwise exponential
- `fs-distinct-groups-have-distinct-cycle-indices` · false-statement — FALSE: nonisomorphic groups acting on finite sets always have different cycle indices
- `fs-cycle-index-determines-the-abstract-group` · false-statement — FALSE: the cycle index of a permutation action determines the abstract group
- `fs-pattern-inventory-specialises-to-the-plain-count-under-every-weight-assignment` · false-statement — FALSE: every weight substitution collapses the pattern inventory to the plain orbit count

### `counting-up-to-symmetry-burnside-and-polya-examples` — Counting up to Symmetry: Burnside and Pólya — Examples (12 item(s))

- `ex-cycle-index-of-c-four` · example — The cycle index of C_4
- `ex-cycle-index-of-d-four` · example — The cycle index of D_8
- `ex-cycle-index-of-s-three` · example — The cycle index of S_3
- `ex-a-nonfree-action-with-three-orbits-on-four-points` · example — A nonfree action can have 3 orbits on 4 points
- `ex-pattern-inventory-of-square-colourings-by-number-of-red-vertices` · example — Pattern inventory of square colourings by number of red vertices
- `ex-two-colour-necklaces-of-length-six-by-polya` · example — Two-colour necklaces of length 6 by Pólya
- `ex-two-colour-necklaces-of-length-six-by-the-cycle-construction` · example — Two-colour necklaces of length 6 by the published CYC formula
- `ex-two-colour-bracelets-of-length-six` · example — Two-colour bracelets of length 6
- `ex-cube-face-colourings-under-rotations` · example — Colourings of the faces of a cube up to rotation
- `ex-edge-set-orbits-on-four-vertices-by-polya` · example — There are 11 S_4-orbits of edge-sets on the pairs of [4]
- `cex-c-four-and-v-four-can-share-a-nonfaithful-cycle-index` · counterexample — C_4 and V_4 can share the same cycle index through nonfaithful actions
- `cex-substituting-x-i-equals-x-power-i-loses-colour-profile-information` · counterexample — The substitution x_i=x^i can erase colour-profile information

### `pure-pairs-forests-and-path-antipath-classes` — Pure Pairs, Forests and Path–Antipath Classes (14 item(s))

- `def-strong-erdos-hajnal-property-for-a-hereditary-class` · definition — The strong Erdős–Hajnal property for a hereditary graph class
- `thm-nontrivial-p-four-free-graphs-are-disconnected-or-their-complements-are-disconnected` · theorem — Every nontrivial $P_4$-free graph is disconnected or has disconnected complement
- `cor-p-four-free-graphs-have-a-clique-or-stable-set-of-size-at-least-square-root-order` · corollary — Every $P_4$-free graph has a clique or stable set of size at least the square root of its order
- `thm-strong-erdos-hajnal-property-implies-erdos-hajnal-property` · theorem — The strong Erdős–Hajnal property implies the Erdős–Hajnal property
- `thm-erdos-hajnal-pach-pure-pair-theorem` · theorem — Every $H$-free graph has a polynomial-size pure pair
- `thm-path-and-antipath-free-graphs-have-the-strong-erdos-hajnal-property` · theorem — For every $k$, the class forbidding $P_k$ and $\overline{P_k}$ has the strong Erdős–Hajnal property
- `cor-path-and-antipath-free-graphs-have-the-erdos-hajnal-property` · corollary — For every $k$, the class forbidding $P_k$ and $\overline{P_k}$ has the Erdős–Hajnal property
- `thm-forest-free-graphs-have-a-linear-anticomplete-pair-or-a-high-degree-vertex` · theorem — Every forest-free graph has a linear anticomplete pair or a linear-degree vertex
- `thm-forest-and-complement-free-graphs-have-the-strong-erdos-hajnal-property` · theorem — For every forest $H$, graphs excluding $H$ and $\overline{H}$ have a linear pure pair
- `cor-forest-and-complement-free-graphs-have-the-erdos-hajnal-property` · corollary — For every forest $H$, graphs excluding $H$ and $\overline{H}$ have the Erdős–Hajnal property
- `def-coleaf-of-a-graph` · definition — Co-leaves of a finite graph
- `thm-leaf-deletion-preserves-virality-of-a-finite-family` · theorem — Deleting a leaf from each of two forbidden graphs preserves virality
- `thm-leaf-and-coleaf-deletion-preserves-virality-of-a-finite-family` · theorem — Deleting a leaf and a co-leaf preserves virality of a finite forbidden family
- `cor-leaf-and-coleaf-deletion-preserves-the-erdos-hajnal-property` · corollary — Deleting a leaf and a co-leaf preserves the Erdős–Hajnal property of a finite forbidden family

### `pure-pairs-forests-and-path-antipath-classes-examples` — Pure Pairs, Forests and Path–Antipath Classes — Examples (4 item(s))

- `ex-the-path-antipath-theorem-specialized-to-the-five-vertex-path` · example — The path-antipath theorem specialized to $P_5$ and $\overline{P_5}$
- `ex-the-forest-theorem-specialized-to-the-four-vertex-path` · example — The forest pure-pair theorem specialized to $P_4$
- `ex-a-coleaf-is-a-leaf-in-the-complement-of-the-five-vertex-path` · example — A co-leaf of $\overline{P_5}$ is exactly a leaf of $P_5$
- `ex-the-leaf-coleaf-corollary-recovers-the-five-vertex-path-case-from-the-four-vertex-path-case` · example — The leaf/co-leaf corollary recovers the $P_5$ case from the $P_4$ case

### `quotient-blockades-and-mixing-relations` — Quotient Blockades and Mixing Relations (7 item(s))

- `def-mixed-block-reachability-relation-on-a-blockade` · definition — The mixed-block reachability relation on a blockade
- `lem-mixed-block-reachability-is-an-equivalence-relation` · lemma — Mixed-block reachability is an equivalence relation
- `def-quotient-blockade-by-mixed-block-reachability` · definition — The quotient blockade obtained from mixed-block reachability
- `lem-quotient-blocks-preserve-connectedness-and-anticonnectedness` · lemma — A quotient block of connected or anticonnected blocks is again connected or anticonnected
- `lem-blocks-from-different-mixed-block-classes-form-pure-pairs` · lemma — Blocks from distinct mixed-block classes are pure to each other
- `lem-a-vertex-mixed-on-a-quotient-block-yields-opposite-adjacency-on-two-member-blocks` · lemma — A vertex mixed on a quotient block but pure on each member block yields two mixed member blocks with opposite adjacency
- `lem-a-quotient-mixed-block-witness-descends-to-two-member-blocks` · lemma — A quotient-level mixed-block witness descends to two mixed member blocks

### `quotient-blockades-and-mixing-relations-examples` — Quotient Blockades and Mixing Relations — Examples (4 item(s))

- `cex-mixedness-of-blocks-is-not-transitive` · counterexample — Mixedness of block pairs is not transitive
- `ex-a-mixed-chain-collapses-to-one-quotient-block` · example — A mixed chain of blocks collapses to one quotient block
- `ex-a-vertex-can-be-mixed-on-a-quotient-block-while-pure-on-each-member-block` · example — A vertex may be mixed on a quotient block while pure on each member block
- `ex-the-quotient-witness-reduction-in-a-four-block-configuration` · example — The quotient-witness reduction in a four-block configuration

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Alerts from other groups

None. No other group flagged an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/frontier-21-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 7 — group reading digest, `frontier-21`

Read every page and item in the generated group header, its cited published
dependencies, and every listed cross-group seam. This dispatch is read-only;
record concerns and alerts without repairing them.

Return only the supplied Step-8 context JSON. `pages_read`, `items_read`, and
`seams_checked` must be exact inventories of the generated scope. Record the
group's conventions, load-bearing items, opened published dependencies, and
concrete concerns; an empty concerns or alerts list is valid.

Put a finding about another group's item in `alerts`, not `concerns`; the scope
tool routes it to that item's owning group before adjudication.
