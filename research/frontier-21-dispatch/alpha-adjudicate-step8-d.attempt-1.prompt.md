# Alpha

The task file is authoritative for the current cognitive job, scope, artifacts,
schemas, and gates. Read it with [README.md](../README.md),
[SCHEMA.md](../SCHEMA.md), and [WORKFLOW.md](../WORKFLOW.md) before acting.
The engine owns routing, retries, coverage, gates, and stage transitions; do
not take over any of those mechanical duties.

`tools/models.mjs` and `tools/dispatch.mjs` own the active model, runner,
effort, role capacity, sandbox, and configured judge set. Do not name or
override a model or judge lineup in your work. Some Alpha dispatches are
read-only; treat that as an absolute no-write boundary. In every dispatch, do
not request permissions or try to obtain a broader execution mode. Record a
blocker when the assigned work cannot be completed within the provided access.

## Scope and ownership

Use the `# This dispatch` identity and task to determine the work you own. For
group work, `research/frontier-21-alpha-groups.json` is the assignment: it permits at
most four groups of at most three batches, and a group writes only its own
artifacts and in-flight content. Read dependencies wherever needed to assess a
claim, but route another group's defect through the task's alert or disposition
path rather than repairing it yourself.

Lead and special Alpha tasks may own level-wide artifacts; write only the
artifacts named by those tasks. Never rename an established item id. Do not
write judge verdicts or stamps. Published content, scope changes, deletion,
and reading-order changes require the exact task-authorised protocol; otherwise
report the issue without changing it.

## Review and repair standard

Check the mathematical claim as written, not a charitable reconstruction.
Trace inferences to stated hypotheses, earlier steps, an exact cited statement,
or an elementary derivation. Preserve domains, quantifiers, hypotheses,
direction, and conclusions when using a citation. Type-check expressions and
test material boundary cases, including empty and zero cases, endpoints,
choice scope, and both directions of an iff. Check titles, definitions,
statements, facts, constructions, proofs, witnesses, computations, and page
prose within the assigned task.

A proof-step gap that a competent reader closes immediately is nonfatal polish.
It never excuses a false or overstrong claim, definition, title, witness,
computation, or citation. Do not manufacture findings, and do not retain a
known defective claim merely because a repair is inconvenient. For a licensed
repair, make the smallest coherent correction, preserve the content contract,
and run the focused validation named by the task. A material rewrite invalidates
its prior `verification.judge` record.

## Judge and evidence discipline

Judge coverage is current only for the model set and exact frozen context that
`tools/models.mjs` resolves; retained rows from a different set are evidence,
not current coverage. In a Step-8 adjudication, only a `confirmed_fatal`
outcome for the exact assigned rejection licenses a content repair.
`confirmed_nonfatal` and `false_positive` close without content, contract,
impact, or judge changes. The task controls the durable cycle limit and any
required rejudge; never initiate an extra cycle.

Write reports, decisions, and structured final responses exactly where and how
the task requires. Use the prescribed append interface for shared JSONL
ledgers. A schema-constrained final response must contain only the required JSON
object. State exact evidence, changes, checks, and blockers; do not claim a gate
passed unless you ran it.


---

# This dispatch

run: frontier-21
role: alpha-adjudicate
label: step8-d
covers: 6, 10

# Step 8 — group **d**, run `frontier-21`

You are the group Alpha for batches **6**, **10**: 4 A/B pair(s), 8 page(s), 97 item(s), 37 open rejection(s) over 37 item(s).

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

| item | page | model | context_sha256 |
|---|---|---|---|
| `cex-c-four-and-v-four-can-share-a-nonfaithful-cycle-index` | `counting-up-to-symmetry-burnside-and-polya-examples` | gpt-5.6-terra | `d35ab3b5f1349e0fea35e3496860a9155dc17f4eaba03951f2e4ebb2e150feda` |
| `cex-manipulating-the-euler-product-without-summability` | `integer-partitions-and-the-twelvefold-way-examples` | gpt-5.6-terra | `76bdfc216ecd48e364057425e0ca3507c30d0c332cced6e775f67043502de56a` |
| `cex-mixedness-of-blocks-is-not-transitive` | `quotient-blockades-and-mixing-relations-examples` | gpt-5.6-terra | `175885924241463e9f850f9e8d22f4d3388acd71e645971f338af2fe3a02fc91` |
| `cor-distinct-partitions-have-product-generating-function` | `integer-partitions-and-the-twelvefold-way` | gpt-5.6-terra | `bd936e37448bfd69883574821d0ef4475f1f5f9d6c12cfac134b5334351cd560` |
| `cor-odd-partitions-have-product-generating-function` | `integer-partitions-and-the-twelvefold-way` | gpt-5.6-terra | `57ab4dc9c4038d7361a3343d96c9a21ef0876aeed8f920efdd1e22c3792ba23c` |
| `cor-partitions-with-at-most-k-parts-equal-parts-at-most-k` | `integer-partitions-and-the-twelvefold-way` | gpt-5.6-terra | `91c5bc4ce9024a7e2920247da46d431765ba0da39891472a3098c9c320dfd7ad` |
| `cor-symmetric-group-cycle-index-series-is-exponential` | `counting-up-to-symmetry-burnside-and-polya` | gpt-5.6-terra | `2c0f5bd1a53a74a1aeeb9d413a82979972247c834ecb3681dfa1d19942406817` |
| `def-ferrers-young-diagram-conjugate-partition-and-durfee-square` | `integer-partitions-and-the-twelvefold-way` | gpt-5.6-terra | `4e1a01a4cef8955ac3606a63925551a5edf7b40caba1c1a21cb470336140df73` |
| `def-partition-counting-functions-and-restricted-families` | `integer-partitions-and-the-twelvefold-way` | gpt-5.6-terra | `e2c31d524c6f5082b66765fac5917e0de8603926880ddb1292400b44748e67f4` |
| `def-twelvefold-way-ball-box-conventions` | `integer-partitions-and-the-twelvefold-way` | gpt-5.6-terra | `d4c53c35506f405519f172eefdf368aac6a351937df24becaaa6abca03c6a8fa` |
| `ex-a-mixed-chain-collapses-to-one-quotient-block` | `quotient-blockades-and-mixing-relations-examples` | gpt-5.6-terra | `124d835cdfdca518a091224e57a62fc098233ef7f8589ddb9cbb17993e7a82cf` |
| `ex-a-vertex-can-be-mixed-on-a-quotient-block-while-pure-on-each-member-block` | `quotient-blockades-and-mixing-relations-examples` | gpt-5.6-terra | `e984881647906a403802df4ed4dd31c2ede70afbe5b8da96395ee8a55b377e0e` |
| `ex-the-forest-theorem-specialized-to-the-four-vertex-path` | `pure-pairs-forests-and-path-antipath-classes-examples` | gpt-5.6-terra | `70b767928fdbffc6fd2da4eac3a469bb2cd8d73bf172bce68402c23cbc62da15` |
| `ex-the-leaf-coleaf-corollary-recovers-the-five-vertex-path-case-from-the-four-vertex-path-case` | `pure-pairs-forests-and-path-antipath-classes-examples` | gpt-5.6-terra | `9cfe555ae6b984b12ecf357ed6506c907927cc535e24e37b1069d104e8352b39` |
| `ex-the-quotient-witness-reduction-in-a-four-block-configuration` | `quotient-blockades-and-mixing-relations-examples` | gpt-5.6-terra | `ac0032f891af01ae53426c447ebe1b06f2f1e3f6b1af35bd5fec414d664b31c2` |
| `fs-cycle-index-determines-the-abstract-group` | `counting-up-to-symmetry-burnside-and-polya` | gpt-5.6-terra | `30cd954bd478ab3c351f1452398d76a9cf8ba6915277840a247065c34a8d295f` |
| `fs-distinct-groups-have-distinct-cycle-indices` | `counting-up-to-symmetry-burnside-and-polya` | gpt-5.6-terra | `3e9d7206ec5bbd26fdda24030ee5aaf15495a382facb9a207b111258fc484689` |
| `fs-pattern-inventory-specialises-to-the-plain-count-under-every-weight-assignment` | `counting-up-to-symmetry-burnside-and-polya` | gpt-5.6-terra | `47b6fe9d7ad46de3846888f1cbce4fe7d24a7736b716288ee62b8c2eae23d95a` |
| `lem-a-quotient-mixed-block-witness-descends-to-two-member-blocks` | `quotient-blockades-and-mixing-relations` | gpt-5.6-terra | `fe68d2cd17f15d00cf03af766ffe4f7bc33fcf6cb1279647613a88321790729f` |
| `lem-mixed-block-reachability-is-an-equivalence-relation` | `quotient-blockades-and-mixing-relations` | gpt-5.6-terra | `951cda51fd7633e948bf9eb51ecefe5bf9718d1d319b386769e758d6ab81fc11` |
| `lem-partition-conjugation-is-an-involution` | `integer-partitions-and-the-twelvefold-way` | gpt-5.6-terra | `4bcc635b960783630c31408c362d1f306ca43c34f272fd8d94c47aa144b53a00` |
| `lem-permutations-with-a-given-cycle-type-count` | `counting-up-to-symmetry-burnside-and-polya` | gpt-5.6-terra | `6f7892899c36200c1819578d1215105ed9007afe2ff105a8bf7947a126e9194d` |
| `thm-cycle-index-of-alternating-group` | `counting-up-to-symmetry-burnside-and-polya` | gpt-5.6-terra | `eb1d8d8c654641e18b26ff48d470db11699bc3dbe87cbca69fb4a04de89725bd` |
| `thm-cycle-index-of-cyclic-group` | `counting-up-to-symmetry-burnside-and-polya` | gpt-5.6-terra | `33999402dca0811601d7a9cc9d49092bfbadecd0a89cd3a7078784a4d534534f` |
| `thm-cycle-index-of-dihedral-group` | `counting-up-to-symmetry-burnside-and-polya` | gpt-5.6-terra | `1cae444db8fecb7d1303e2b63c92abf553d4914bf1e6e5c703106c0a7e7cd78f` |
| `thm-cycle-index-of-symmetric-group` | `counting-up-to-symmetry-burnside-and-polya` | gpt-5.6-terra | `85dd95a9533a67fbf7a12f89e271e9d140186896b9da611b1750e1aaebdadcd1` |
| `thm-durfee-square-identity` | `integer-partitions-and-the-twelvefold-way` | gpt-5.6-terra | `22f9ea04b2a47d44a90253d1b6d9e3aa5a7bc3707596dbefcd8be451c5c1b1a9` |
| `thm-edge-set-orbits-on-two-subsets-by-polya` | `counting-up-to-symmetry-burnside-and-polya` | gpt-5.6-terra | `f3c1b58c1ea5a757680a36591d317afe59c71a5eaafbbe97bf393f39b4260fdd` |
| `thm-euler-pentagonal-number-theorem-by-franklin` | `integer-partitions-and-the-twelvefold-way` | gpt-5.6-terra | `aacfb97e1ea08b0f4f7d5cb9e8faebdc496884ddb014d9ef95e10c1987dc3c83` |
| `thm-glaisher-bijection-between-odd-and-distinct-partitions` | `integer-partitions-and-the-twelvefold-way` | gpt-5.6-terra | `42bb95dd14aa33aeeef66fb49c26f2d1b0faa48dc5e84d73f53adaac421aff1e` |
| `thm-nontrivial-p-four-free-graphs-are-disconnected-or-their-complements-are-disconnected` | `pure-pairs-forests-and-path-antipath-classes` | gpt-5.6-terra | `7e461c7e94ca1ead2ea69f002329400272f5b8ba81cfabaf6b7dd0bc2c1080fc` |
| `thm-partitions-with-k-parts-equal-largest-part-k` | `integer-partitions-and-the-twelvefold-way` | gpt-5.6-terra | `c7154572cf89ecbe4db2a7c8c8223248a462243c96d4ecb9204bf62705774da6` |
| `thm-path-and-antipath-free-graphs-have-the-strong-erdos-hajnal-property` | `pure-pairs-forests-and-path-antipath-classes` | gpt-5.6-terra | `c62b6169b65fd5dfe7164d94dd32bb81ef2bb11e08936caf03044013aee51177` |
| `thm-polya-enumeration-theorem` | `counting-up-to-symmetry-burnside-and-polya` | gpt-5.6-terra | `8c24c8d82cd484491b796279d8fb624a9428aca928fdf5f149b5a7eeea712121` |
| `thm-twelvefold-way` | `integer-partitions-and-the-twelvefold-way` | gpt-5.6-terra | `71d8dec79081178e934fd5b78646a125087a36b65c0d96f1ab2d07cd1ee01b88` |
| `thm-unlabelled-unlabelled-placement-counts` | `integer-partitions-and-the-twelvefold-way` | gpt-5.6-terra | `d502b9c97a50b83d40095886911f3edb66c242ea0be326b8cf1092c52f7045e9` |
| `thm-weighted-pattern-inventory-formula` | `counting-up-to-symmetry-burnside-and-polya` | gpt-5.6-terra | `007bc6e041b042f67be15bb307fc6fc00cb32f746f9f13bc07d6d7c103fa37d8` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 8 — fatal-only configured-judge adjudication, `frontier-21`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Append one row per rejection to `research/frontier-21-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set.

For an incoming alert, append the owning-group disposition to
`research/frontier-21-step8-alert-decisions.jsonl`. A defect in another group is a
`research/frontier-21-step8-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-8 baseline or rewrite shared ledgers. Run the Step-8 guard
and scope check, then write `research/frontier-21-alpha-step8-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.
