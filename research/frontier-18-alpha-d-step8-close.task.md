# Step 8 — group **d**, run `frontier-18`

You are the group Alpha for batches **2**, **9**: 3 A/B pair(s), 6 page(s), 202 item(s), 0 open rejection(s) over 0 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-18-alpha-d-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
in `research/frontier-18-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 2 | `extraspecial-p-groups-and-central-products` | A | group-theory | 71.003 | `frattini-subgroups-and-the-burnside-basis-theorem-examples` |
| 2 | `extraspecial-p-groups-and-central-products-examples` | B | group-theory | 71.004 | `extraspecial-p-groups-and-central-products` |
| 2 | `cayley-graphs-word-metrics-and-quasi-isometry` | A | group-theory | 302.001 | `applications-of-the-fundamental-group-examples`, `graphs-walks-and-connectivity`, `trees-forests-and-spanning-trees`, `semidirect-products-and-automorphism-groups` |
| 2 | `cayley-graphs-word-metrics-and-quasi-isometry-examples` | B | group-theory | 302.002 | `cayley-graphs-word-metrics-and-quasi-isometry` |
| 9 | `ends-coends-and-weighted-limits` | A | category-theory | 365.009 | `monadicity-and-becks-theorem-examples` |
| 9 | `ends-coends-and-weighted-limits-examples` | B | category-theory | 365.01 | `ends-coends-and-weighted-limits` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `extraspecial-p-groups-and-central-products` — Extraspecial $p$-Groups and Central Products (48 item(s))

- `lem-commutator-identities-in-a-group-of-class-two` · lemma — Commutator identities in a group whose derived subgroup is central
- `lem-power-of-a-product-in-a-group-of-class-two` · lemma — In a group with central derived subgroup, $(xy)^n=[y,x]^{\binom{n}{2}}x^ny^n$
- `cor-the-p-th-power-map-is-a-homomorphism-in-a-class-two-group-for-odd-p` · corollary — For an odd prime $p$, the $p$-th power map is a homomorphism on a finite group whose derived subgroup is central of exponent dividing $p$
- `def-special-and-extraspecial-p-groups` · definition — Special and extraspecial $p$-groups
- `prop-equivalent-characterisations-of-an-extraspecial-p-group` · proposition — Three equivalent descriptions of an extraspecial $p$-group
- `cor-an-extraspecial-p-group-has-class-two-and-derived-subgroup-of-order-p` · corollary — An extraspecial $p$-group is nilpotent of class exactly two and its derived subgroup has order $p$
- `cor-an-extraspecial-p-group-has-no-complement-to-its-centre` · corollary — The centre of an extraspecial $p$-group has no complement
- `prop-noncentral-conjugacy-classes-of-an-extraspecial-p-group-have-size-p` · proposition — Every conjugacy class of an extraspecial $p$-group outside the centre has exactly $p$ elements
- `cor-the-centralizer-of-a-noncentral-element-of-an-extraspecial-p-group-has-index-p` · corollary — A noncentral element of an extraspecial $p$-group has centraliser of index $p$
- `def-central-product-of-two-groups-along-an-isomorphism-of-central-subgroups` · definition — The central product $G\circ_\alpha H$ of two groups along an isomorphism of central subgroups
- `lem-the-antidiagonal-subgroup-of-a-central-product-is-a-central-normal-subgroup` · lemma — The identified subgroup used to form a central product is central, hence normal
- `prop-the-canonical-maps-into-a-central-product-are-injective-with-commuting-images` · proposition — The two canonical maps into a central product are injective homomorphisms whose images commute, generate it, and meet in the identified centre
- `prop-order-centre-and-derived-subgroup-of-a-central-product` · proposition — Order, centre and derived subgroup of a central product
- `thm-universal-property-of-the-central-product` · theorem — Homomorphisms out of a central product
- `def-internal-central-product-of-a-family-of-subgroups` · definition — Internal central products of a finite family of subgroups
- `thm-recognition-of-an-internal-central-product` · theorem — Internal central products are the images of external ones
- `thm-a-central-product-of-extraspecial-p-groups-is-extraspecial` · theorem — A central product of extraspecial $p$-groups identified along their centres is extraspecial
- `def-commutator-pairing-of-an-extraspecial-p-group` · definition — The commutator pairing of an extraspecial $p$-group relative to a chosen generator of its centre
- `lem-the-commutator-pairing-is-well-defined-biadditive-and-alternating` · lemma — The commutator pairing is well defined on the central quotient, is bilinear over $\mathbb F_p$, and is alternating
- `lem-the-commutator-pairing-is-nondegenerate` · lemma — The commutator pairing of an extraspecial $p$-group has trivial radical
- `lem-two-noncommuting-elements-of-an-extraspecial-p-group-generate-a-subgroup-of-order-p-cubed` · lemma — Two elements of an extraspecial $p$-group with nontrivial commutator generate an extraspecial subgroup of order $p^3$
- `thm-an-extraspecial-p-group-is-an-internal-central-product-of-subgroups-of-order-p-cubed` · theorem — Every extraspecial $p$-group is an internal central product of nonabelian subgroups of order $p^3$
- `cor-the-order-of-an-extraspecial-p-group-is-p-to-one-plus-an-even-number` · corollary — An extraspecial $p$-group has order $p^{1+2n}$ for some $n\ge1$
- `cor-the-generator-rank-of-an-extraspecial-p-group-is-twice-its-symplectic-rank` · corollary — An extraspecial $p$-group of order $p^{1+2n}$ has generator rank $2n$
- `lem-orthogonal-complement-counting-for-the-commutator-pairing` · lemma — A subgroup of the central quotient and its orthogonal complement have orders multiplying to the order of the quotient
- `prop-maximal-abelian-subgroups-of-an-extraspecial-p-group-have-order-p-to-one-plus-n` · proposition — In an extraspecial $p$-group of order $p^{1+2n}$ every maximal abelian subgroup has order $p^{1+n}$
- `cor-an-extraspecial-p-group-is-a-product-of-two-maximal-abelian-subgroups` · corollary — An extraspecial $p$-group is the product of two maximal abelian subgroups meeting in its centre
- `def-heisenberg-group-of-order-p-cubed` · definition — The Heisenberg group of order $p^3$ over $\mathbb Z/p$
- `prop-the-heisenberg-group-of-order-p-cubed-is-a-nonabelian-group-of-order-p-cubed` · proposition — The Heisenberg multiplication is a group law, nonabelian, on a set of $p^3$ elements
- `prop-the-heisenberg-group-of-order-p-cubed-is-extraspecial-and-has-exponent-p-for-odd-p` · proposition — The Heisenberg group of order $p^3$ is extraspecial, and for odd $p$ it has exponent $p$
- `lem-the-order-p-automorphism-of-a-cyclic-group-of-order-p-squared` · lemma — Raising to the power $1+p$ is an automorphism of order $p$ of a cyclic group of order $p^2$
- `def-modular-group-of-order-p-cubed` · definition — The modular group of order $p^3$ as a semidirect product $C_{p^2}\rtimes C_p$
- `prop-the-modular-group-of-order-p-cubed-is-extraspecial-and-has-exponent-p-squared-for-odd-p` · proposition — The modular group of order $p^3$ is extraspecial, of exponent $p^2$ when $p$ is odd
- `prop-the-dihedral-and-quaternion-groups-of-order-eight-are-extraspecial` · proposition — $\operatorname{Dih}(C_4)$ and $Q_8$ are extraspecial of order $8$, with six and two solutions of $x^2=1$ respectively
- `thm-every-nonabelian-group-of-order-p-cubed-is-extraspecial` · theorem — A nonabelian group of order $p^3$ is extraspecial
- `thm-classification-of-the-nonabelian-groups-of-order-p-cubed` · theorem — For each prime there are exactly two nonabelian groups of order $p^3$ up to isomorphism
- `lem-a-central-product-of-two-quaternion-groups-is-a-central-product-of-two-dihedral-groups` · lemma — $Q_8\circ Q_8\cong\operatorname{Dih}(C_4)\circ\operatorname{Dih}(C_4)$
- `lem-counting-elements-of-order-dividing-two-in-a-central-product-of-extraspecial-two-groups` · lemma — A product formula for the number of square roots of the identity in a central product of extraspecial $2$-groups
- `thm-classification-of-extraspecial-two-groups` · theorem — For each $n\ge1$ there are exactly two extraspecial groups of order $2^{1+2n}$
- `lem-central-product-absorption-of-the-exponent-p-squared-factor-for-odd-p` · lemma — For odd $p$, a central product of two modular groups of order $p^3$ is a central product of a modular group with a Heisenberg group
- `thm-classification-of-extraspecial-p-groups-for-odd-p` · theorem — For odd $p$ and each $n\ge1$ there are exactly two extraspecial groups of order $p^{1+2n}$, distinguished by their exponent
- `def-plus-and-minus-type-of-an-extraspecial-p-group` · definition — Plus and minus type of an extraspecial $p$-group
- `cor-the-exponent-of-an-extraspecial-p-group` · corollary — An extraspecial group of odd order has exponent $p$ or $p^2$, and an extraspecial $2$-group has exponent $4$
- `def-square-map-of-an-extraspecial-two-group` · definition — The square map of an extraspecial $2$-group relative to a chosen generator of its centre
- `lem-the-square-map-is-well-defined-and-refines-the-commutator-pairing` · lemma — The square map is well defined on the central quotient and satisfies $q(\bar x\bar y)=q(\bar x)+q(\bar y)+b(\bar x,\bar y)$
- `prop-an-automorphism-of-an-extraspecial-p-group-trivial-on-the-frattini-quotient-is-inner` · proposition — An automorphism of an extraspecial $p$-group acting trivially on its Frattini quotient is inner
- `prop-a-centre-fixing-automorphism-of-an-extraspecial-p-group-preserves-its-commutator-pairing` · proposition — An automorphism fixing the centre pointwise induces a pairing-preserving automorphism of the central quotient, with kernel the inner automorphisms
- `prop-maximal-elementary-abelian-subgroups-distinguish-the-two-extraspecial-two-groups` · proposition — The maximal elementary abelian subgroups of the two extraspecial groups of order $2^{1+2n}$ have orders $2^{n+1}$ and $2^{n}$

### `extraspecial-p-groups-and-central-products-examples` — Extraspecial $p$-Groups and Central Products — Examples (16 item(s))

- `ex-the-commutator-pairings-of-the-dihedral-and-quaternion-groups-of-order-eight` · example — The commutator pairings of $\operatorname{Dih}(C_4)$ and $Q_8$ are the same, while the groups are not isomorphic
- `ex-the-heisenberg-group-of-order-twenty-seven` · example — The Heisenberg group of order $27$ has exponent $3$ and thirteen subgroups of order $3$
- `ex-the-heisenberg-group-at-the-prime-two-is-the-dihedral-group-of-order-eight` · example — At $p=2$ the Heisenberg construction produces $\operatorname{Dih}(C_4)$, not a group of exponent $2$
- `ex-the-modular-group-of-order-twenty-seven` · example — The modular group of order $27$ has exponent $9$ and exactly three cyclic subgroups of order $9$
- `ex-the-two-extraspecial-groups-of-order-thirty-two` · example — The two extraspecial groups of order $32$ have $20$ and $12$ solutions of $x^2=1$
- `ex-a-generating-pair-decomposition-of-an-extraspecial-group-of-order-thirty-two` · example — A choice of four generators exhibiting an extraspecial group of order $32$ as an internal central product
- `ex-a-central-product-of-two-cyclic-groups-of-order-four` · example — The central product of two cyclic groups of order four along their subgroups of order two is abelian of order eight
- `ex-maximal-abelian-subgroups-of-the-dihedral-group-of-order-eight` · example — The three maximal abelian subgroups of $\operatorname{Dih}(C_4)$ have order four, as the general bound predicts
- `cex-a-special-p-group-that-is-not-extraspecial` · counterexample — A direct product of two Heisenberg groups is special with centre of order $p^2$, hence not extraspecial
- `cex-the-central-product-decomposition-of-an-extraspecial-group-is-not-unique` · counterexample — An extraspecial group of order $32$ decomposes both as two quaternion factors and as two dihedral factors
- `fs-every-special-p-group-is-extraspecial` · false-statement — FALSE: every special $p$-group is extraspecial
- `fs-there-is-exactly-one-extraspecial-group-of-each-admissible-order` · false-statement — FALSE: for each $n\ge1$ there is exactly one extraspecial group of order $p^{1+2n}$ up to isomorphism
- `fs-the-commutator-pairing-determines-an-extraspecial-p-group-up-to-isomorphism` · false-statement — FALSE: two extraspecial $p$-groups whose commutator pairings agree are isomorphic
- `fs-the-commutator-pairing-needs-no-choice-of-a-central-generator` · false-statement — FALSE: the commutator pairing of an extraspecial $p$-group is defined without choosing a generator of its centre
- `fs-an-extraspecial-p-group-has-a-complement-to-its-centre` · false-statement — FALSE: the centre of an extraspecial $p$-group has a complement
- `fs-a-group-of-order-p-to-an-even-power-can-be-extraspecial` · false-statement — FALSE: some extraspecial $p$-group has order $p^{2n}$

### `cayley-graphs-word-metrics-and-quasi-isometry` — Cayley Graphs, Word Metrics and Quasi-Isometry (60 item(s))

- `def-simple-graph-without-a-finiteness-hypothesis` · definition — Simple graphs on an arbitrary vertex set
- `def-walks-paths-and-connectedness-in-a-simple-graph` · definition — Walks, paths, connectedness and components in a simple graph on an arbitrary vertex set
- `lem-every-walk-in-a-simple-graph-contains-a-path-with-the-same-endpoints` · lemma — Every walk contains a path between the same endpoints, of no greater length
- `def-graph-path-metric` · definition — The path metric of a connected simple graph
- `thm-the-path-metric-of-a-connected-simple-graph-is-a-metric` · theorem — The path metric of a connected simple graph is a metric on its vertex set
- `lem-a-vertex-bijection-is-an-isometry-of-path-metrics-exactly-when-it-is-a-graph-isomorphism` · lemma — A bijection of vertex sets is an isometry for the path metrics if and only if it is a graph isomorphism
- `lem-the-graph-notions-agree-with-the-published-finite-graph-theory` · lemma — On a finite vertex set these notions are the published ones, and the path metric is the published graph distance
- `def-locally-finite-graph` · definition — Locally finite graphs and vertex degree without a finiteness hypothesis
- `lem-balls-in-a-connected-locally-finite-graph-are-finite` · lemma — In a locally finite graph every ball of the path metric is finite
- `def-cycles-trees-and-forests-in-a-simple-graph` · definition — Cycles, trees and forests in a simple graph on an arbitrary vertex set
- `thm-a-simple-graph-is-a-tree-exactly-when-every-two-vertices-are-joined-by-a-unique-path` · theorem — A simple graph is a tree if and only if each pair of vertices is joined by exactly one path
- `def-labelled-directed-graph-and-labelled-graph-isomorphism` · definition — Labelled directed graphs, their underlying simple graphs, and label-preserving isomorphisms
- `def-directed-labelled-cayley-graph` · definition — The directed labelled Cayley graph of a group with respect to a subset
- `def-cayley-graph` · definition — The Cayley graph of a group with respect to a subset
- `def-finitely-generated-group` · definition — Finitely generated groups
- `lem-a-cayley-graph-is-connected-exactly-when-its-defining-subset-generates-the-group` · lemma — A Cayley graph is connected if and only if the subset generates the group
- `prop-a-cayley-graph-is-regular-and-is-locally-finite-exactly-when-its-defining-subset-is-finite` · proposition — Every vertex of a Cayley graph has the same degree, and the graph is locally finite exactly when the symmetrised generating set is finite
- `thm-left-translation-is-a-free-action-by-labelled-graph-automorphisms-of-a-cayley-graph` · theorem — Left translation acts on a Cayley graph by label-preserving automorphisms, freely on vertices
- `thm-the-left-translation-action-on-a-cayley-graph-restricts-the-embedding-of-cayleys-theorem` · theorem — The label-preserving automorphism action on a Cayley graph is the left regular representation of Cayley's theorem
- `lem-the-cayley-graph-of-a-finite-group-with-a-finite-generating-set-is-a-finite-simple-graph` · lemma — For a finite group the Cayley graph is a finite simple graph in the published sense and the two distances agree
- `def-word-length-with-respect-to-a-generating-set` · definition — Word length of a group element with respect to a generating set
- `lem-word-length-is-well-defined-and-satisfies-the-length-laws` · lemma — Word length is defined on every element and satisfies the subadditivity, inversion and vanishing laws
- `def-word-metric` · definition — The word metric of a group with respect to a generating set
- `thm-the-word-metric-is-a-left-invariant-metric-and-is-the-path-metric-of-the-cayley-graph` · theorem — The word metric is a left-invariant metric and coincides with the path metric of the Cayley graph
- `prop-word-metric-balls-are-finite-exactly-when-the-generating-set-is-finite` · proposition — Balls of a word metric are finite if and only if the generating set is finite
- `prop-the-word-metric-is-the-largest-left-invariant-metric-giving-every-generator-distance-at-most-one-from-the-identity` · proposition — The word metric is the largest left-invariant metric in which each generator and its inverse lie within distance one of the identity
- `prop-right-translation-moves-every-point-of-a-word-metric-space-the-same-bounded-distance` · proposition — Right translation by a fixed element displaces every point of a word metric space by exactly the word length of that element
- `thm-the-cayley-graph-of-a-free-group-with-respect-to-a-free-basis-is-a-tree` · theorem — The Cayley graph of a free group with respect to a free basis is a tree
- `cor-word-length-in-a-free-group-with-respect-to-a-free-basis-is-reduced-word-length` · corollary — With respect to a free basis, the word length of an element is the length of its reduced word
- `thm-a-generating-set-with-no-two-letter-relation-whose-cayley-graph-is-a-tree-is-a-free-basis` · theorem — If no product of two members of a generating set is the identity and the Cayley graph is a tree, the set is a free basis
- `def-geodesic-and-geodesic-metric-space` · definition — Geodesics and geodesic metric spaces
- `def-coarse-lipschitz-map-and-quasi-isometric-embedding` · definition — Coarse Lipschitz maps and quasi-isometric embeddings
- `def-bounded-distance-between-maps` · definition — Bounded distance between two maps into a metric space
- `lem-bounded-distance-is-an-equivalence-relation-compatible-with-composition` · lemma — Bounded distance is an equivalence relation and is preserved by pre-composition and by post-composition with a coarse Lipschitz map
- `def-coarsely-dense-subset-and-quasi-isometry` · definition — Coarsely dense subsets, quasi-inverses and quasi-isometries
- `lem-composites-of-coarse-lipschitz-maps-and-of-quasi-isometric-embeddings` · lemma — Composites of coarse Lipschitz maps and of quasi-isometric embeddings are again such, with explicit constants
- `lem-a-map-at-bounded-distance-from-a-quasi-isometric-embedding-is-a-quasi-isometric-embedding` · lemma — A map at bounded distance from a quasi-isometric embedding is one, with the additive constant enlarged
- `thm-a-quasi-isometric-embedding-with-coarsely-dense-image-admits-a-quasi-inverse` · theorem — A quasi-isometric embedding with coarsely dense image has a quasi-inverse quasi-isometric embedding
- `cor-quasi-isometries-are-exactly-the-coarsely-dense-quasi-isometric-embeddings` · corollary — A map is a quasi-isometry exactly when it is a quasi-isometric embedding with coarsely dense image
- `thm-quasi-isometry-is-an-equivalence-relation-on-metric-spaces` · theorem — Being quasi-isometric is reflexive, symmetric and transitive
- `def-quasi-isometry-group-of-a-metric-space` · definition — The quasi-isometry group of a metric space
- `prop-the-quasi-isometry-group-is-a-group-and-quasi-isometric-spaces-have-isomorphic-quasi-isometry-groups` · proposition — Quasi-isometries modulo bounded distance form a group, and a quasi-isometry induces an isomorphism of these groups
- `def-bilipschitz-embedding-and-bilipschitz-equivalence` · definition — Bilipschitz embeddings and bilipschitz equivalences of metric spaces
- `prop-isometries-bilipschitz-equivalences-and-quasi-isometries-form-a-hierarchy` · proposition — Every isometry is a bilipschitz equivalence and every bilipschitz equivalence is a quasi-isometry, and two metrics on one set are Lipschitz equivalent exactly when the identity is a bilipschitz equivalence between them
- `def-separated-net-in-a-metric-space` · definition — Separated nets in a metric space
- `thm-two-metric-spaces-are-quasi-isometric-exactly-when-they-contain-bilipschitz-equivalent-separated-nets` · theorem — Two metric spaces are quasi-isometric if and only if each contains a separated net and the two nets are bilipschitz equivalent
- `prop-a-metric-space-is-quasi-isometric-to-a-one-point-space-exactly-when-it-is-nonempty-of-finite-diameter` · proposition — The nonempty metric spaces quasi-isometric to a one-point space are exactly those of finite diameter
- `thm-two-finite-generating-sets-of-a-group-give-bilipschitz-equivalent-word-metrics` · theorem — The identity map between the word metrics of two finite generating sets is a bilipschitz equivalence
- `def-quasi-isometry-type-of-a-finitely-generated-group` · definition — The quasi-isometry type of a finitely generated group
- `prop-a-finitely-generated-group-is-finite-exactly-when-it-is-quasi-isometric-to-a-one-point-space` · proposition — A finitely generated group is finite if and only if it is quasi-isometric to a point
- `prop-a-finite-index-subgroup-of-a-finitely-generated-group-is-finitely-generated-and-quasi-isometrically-included` · proposition — A subgroup of finite index in a finitely generated group is finitely generated, and its inclusion is a quasi-isometry
- `prop-the-quotient-of-a-finitely-generated-group-by-a-finite-normal-subgroup-is-a-quasi-isometry` · proposition — The quotient map by a finite normal subgroup is a quasi-isometry of word metric spaces
- `def-quasi-geodesic-and-quasi-geodesic-metric-space` · definition — Quasi-geodesics and quasi-geodesic metric spaces
- `prop-the-path-metric-of-a-connected-simple-graph-is-quasi-geodesic-with-constants-one-and-one` · proposition — The vertex set of a connected simple graph with its path metric is a $(1,1)$-quasi-geodesic space
- `cor-a-finitely-generated-group-with-a-word-metric-is-a-quasi-geodesic-space` · corollary — A group with the word metric of any generating set is a $(1,1)$-quasi-geodesic space
- `prop-a-quasi-isometric-embedding-carries-a-quasi-geodesic-to-a-quasi-geodesic` · proposition — The composite of a quasi-geodesic with a quasi-isometric embedding is a quasi-geodesic, with computed constants
- `prop-a-coarse-lipschitz-map-between-finitely-generated-groups-with-word-metrics-is-lipschitz` · proposition — A coarse Lipschitz map between word metric spaces of finitely generated groups is Lipschitz
- `cor-a-bijective-quasi-isometry-between-finitely-generated-groups-is-a-bilipschitz-equivalence` · corollary — A bijective quasi-isometry between word metric spaces of finitely generated groups is a bilipschitz equivalence
- `def-quasi-isometry-invariant-and-geometric-property-of-a-finitely-generated-group` · definition — Quasi-isometry invariants and geometric properties of finitely generated groups
- `prop-finiteness-is-a-geometric-property-of-finitely-generated-groups` · proposition — Finiteness is a geometric property of finitely generated groups

### `cayley-graphs-word-metrics-and-quasi-isometry-examples` — Cayley Graphs, Word Metrics and Quasi-Isometry — Examples (19 item(s))

- `ex-the-cayley-graph-and-word-metric-of-the-integers` · example — The Cayley graph of $\mathbb Z$ for the generating set $\{1\}$ is a line and its word metric is $|m-n|$
- `ex-two-generating-sets-of-the-integers-give-different-but-bilipschitz-equivalent-word-metrics` · example — The word metrics of $\mathbb Z$ for $\{1\}$ and for $\{2,3\}$ differ at $1$ and are bilipschitz equivalent
- `ex-the-cayley-graph-of-a-free-abelian-group-of-finite-rank` · example — The Cayley graph of $\mathbb Z^n$ for the standard basis is the integer lattice, and its word metric is the sum of coordinate differences
- `ex-the-cayley-tree-of-a-free-group-of-rank-two` · example — The Cayley graph of the free group on two generators is the tree in which every vertex has four neighbours
- `ex-two-generating-sets-of-a-dihedral-group` · example — The dihedral group of order eight has Cayley graphs that are a cycle of length eight and a cube
- `ex-the-integers-are-quasi-isometric-to-the-real-line` · example — The inclusion of $\mathbb Z$ in $\mathbb R$ is a quasi-isometry that is neither surjective nor a bilipschitz equivalence
- `ex-a-finite-index-subgroup-of-a-free-abelian-group-is-quasi-isometric-to-it` · example — The subgroup $2\mathbb Z\times\mathbb Z$ has index two in $\mathbb Z^2$ and its inclusion is a quasi-isometry
- `ex-the-infinite-dihedral-group-is-quasi-isometric-to-the-integers` · example — The infinite dihedral group is quasi-isometric to $\mathbb Z$, and to $\mathbb Z\times\mathbb Z/2$
- `cex-an-infinite-generating-set-destroys-the-comparison-of-word-metrics` · counterexample — Taking $\mathbb Z$ itself as a generating set gives a word metric of diameter one, not bilipschitz equivalent to the standard one
- `cex-a-quasi-isometry-need-not-be-continuous-injective-or-surjective` · counterexample — A single map exhibiting a quasi-isometry that is discontinuous, non-injective and non-surjective
- `fs-the-cayley-graph-of-a-group-does-not-depend-on-the-generating-set` · false-statement — FALSE: the Cayley graph of a group is independent of the chosen generating set
- `fs-the-word-metric-is-right-invariant` · false-statement — FALSE: every word metric is invariant under right translation
- `fs-a-quasi-isometry-is-continuous-or-bijective` · false-statement — FALSE: every quasi-isometry is continuous, or bijective
- `fs-all-infinite-finitely-generated-groups-are-quasi-isometric` · false-statement — FALSE: any two infinite finitely generated groups are quasi-isometric
- `fs-a-finitely-generated-group-with-a-word-metric-is-a-geodesic-metric-space` · false-statement — FALSE: a nontrivial finitely generated group with a word metric is a geodesic metric space
- `fs-nonisomorphic-groups-cannot-have-isomorphic-cayley-graphs` · false-statement — FALSE: groups with isomorphic Cayley graphs are isomorphic
- `cex-a-tree-cayley-graph-need-not-come-from-a-free-generating-set` · counterexample — The Cayley graphs of $\mathbb Z/2$ for $\{1\}$ and of $\mathbb Z$ for $\{-1,1\}$ are trees, and neither generating set is free
- `ex-the-quasi-isometry-group-of-a-metric-space-of-finite-diameter-is-trivial` · example — A nonempty metric space of finite diameter has trivial quasi-isometry group
- `ex-the-quasi-isometry-group-of-the-integers-contains-the-multiplicative-group-of-nonzero-reals` · example — Scaling maps embed the multiplicative group of nonzero reals into the quasi-isometry group of $\mathbb Z$

### `ends-coends-and-weighted-limits` — Ends Coends and Weighted Limits (50 item(s))

- `def-dinatural-transformation` · definition — Dinatural transformation between functors on $\mathcal C^{\mathrm{op}}\times\mathcal C$
- `prop-a-natural-transformation-composed-with-a-dinatural-transformation-is-dinatural` · proposition — Composing a dinatural transformation with a natural transformation on either side gives a dinatural transformation
- `thm-dinatural-transformations-do-not-compose-in-general` · theorem — Dinatural transformations do not compose in general
- `def-wedge-and-cowedge` · definition — Wedges and cowedges, and the categories they form
- `def-end-and-coend` · definition — The end and the coend of a functor $\mathcal C^{\mathrm{op}}\times\mathcal C\to\mathcal D$
- `thm-ends-and-coends-are-unique-up-to-unique-isomorphism` · theorem — An end and a coend are unique up to a unique isomorphism compatible with every component
- `thm-a-natural-transformation-induces-a-morphism-of-ends-and-of-coends` · theorem — A natural transformation of functors induces a unique morphism of their ends and of their coends
- `def-twisted-arrow-category` · definition — The twisted arrow category and its projection to $\mathcal C^{\mathrm{op}}\times\mathcal C$
- `thm-the-twisted-arrow-category-is-the-category-of-elements-of-the-hom-bifunctor` · theorem — The twisted arrow category is the category of elements of the hom-bifunctor
- `thm-an-end-is-a-limit-over-the-twisted-arrow-category` · theorem — An end is a limit over the twisted arrow category, and a coend is a colimit over its opposite
- `prop-the-end-of-a-functor-mute-in-its-first-variable-is-the-limit-of-that-functor` · proposition — The end of a functor made mute in its contravariant variable is the ordinary limit of that functor
- `cor-ends-and-coends-exist-when-the-index-category-is-small-and-the-target-is-complete-or-cocomplete` · corollary — Ends exist over a small index category in a complete target, and coends in a cocomplete one
- `thm-an-end-is-an-equalizer-between-two-products` · theorem — An end is the equalizer of two products, and a coend the coequalizer of two coproducts
- `thm-a-set-valued-coend-is-a-quotient-of-a-coproduct-by-the-dinaturality-relation` · theorem — A set-valued coend is the disjoint union of the diagonal values modulo the dinaturality relation
- `thm-a-module-valued-coend-is-a-quotient-of-a-direct-sum-by-the-dinaturality-submodule` · theorem — A module-valued coend is the direct sum of the diagonal values modulo the dinaturality submodule
- `thm-a-continuous-functor-preserves-ends-and-a-cocontinuous-functor-preserves-coends` · theorem — A functor preserving twisted-arrow limits preserves ends, and dually for coends
- `cor-a-right-adjoint-preserves-ends-and-a-left-adjoint-preserves-coends` · corollary — A right adjoint preserves ends and a left adjoint preserves coends
- `cor-the-hom-functor-turns-a-coend-into-an-end-and-preserves-ends` · corollary — The hom-functor turns a coend into an end and carries an end to an end
- `def-parametrised-end-and-parametrised-coend` · definition — Ends and coends with parameters
- `thm-a-chosen-family-of-ends-assembles-into-a-functor-of-the-parameters` · theorem — A chosen family of ends is the object part of exactly one functor making the counit natural in the parameters
- `thm-a-family-natural-in-the-parameter-factors-through-the-parametrised-end` · theorem — A family into a parametrised end is natural in the parameter exactly when its composite with the counit is
- `lem-a-wedge-on-a-product-index-category-is-dinatural-in-each-variable-separately` · lemma — A wedge on a product index category is exactly a family dinatural in each variable separately
- `thm-fubini-for-ends` · theorem — Fubini: an end over a product index category and the two iterated ends exist together and agree
- `cor-ends-commute-with-ends` · corollary — Iterated ends may be taken in either order
- `thm-the-set-of-natural-transformations-is-an-end` · theorem — For a small source category, the set of natural transformations is an end of the hom-bifunctor of the values
- `cor-the-end-of-the-hom-functor-is-the-monoid-of-natural-endomorphisms-of-the-identity` · corollary — The end of the hom-bifunctor is the commutative monoid of natural endomorphisms of the identity functor
- `thm-the-end-form-of-the-yoneda-lemma` · theorem — The end of the function-set functor on a representable is evaluation
- `thm-the-ninja-yoneda-lemma-in-coend-form` · theorem — The co-Yoneda isomorphisms: a set-valued functor is a coend against a representable
- `def-functor-tensor-product` · definition — The tensor product of a presheaf and a covariant set-valued functor
- `def-set-weighted-limit-and-weighted-colimit` · definition — Set-weighted limits and colimits
- `thm-a-weighted-limit-is-unique-up-to-unique-isomorphism` · theorem — A weighted limit and a weighted colimit are unique up to a unique compatible isomorphism
- `prop-a-weighted-limit-in-set-is-the-set-of-natural-transformations-from-the-weight` · proposition — A weighted limit of a set-valued diagram is the set of natural transformations from the weight
- `def-power-and-copower-by-a-set` · definition — The power and the copower of an object by a set
- `thm-a-power-is-a-product-of-copies-and-a-copower-is-a-coproduct-of-copies` · theorem — A power by a set is the product of that many copies and a copower is the coproduct
- `thm-a-weighted-limit-is-an-end` · theorem — A weighted limit is an end of powers and a weighted colimit a coend of copowers
- `thm-a-set-weighted-limit-is-a-limit-over-a-category-of-elements` · theorem — A weighted limit is an ordinary limit over the category of elements of the weight, and a weighted colimit an ordinary colimit over it
- `cor-set-weighted-limits-and-colimits-exist-over-a-small-index-category-in-a-complete-or-cocomplete-target` · corollary — A limit weighted by a $\mathbf{Set}$-valued weight on a small index category exists in a complete target, and the weighted colimit in a cocomplete one
- `cor-a-colimit-of-a-set-valued-functor-is-the-set-of-connected-components-of-its-category-of-elements` · corollary — A colimit of a set-valued functor is the set of connected components of its category of elements
- `thm-the-constant-singleton-weight-recovers-an-ordinary-limit` · theorem — Weighting by the constant singleton gives exactly the ordinary limit
- `thm-weighted-limits-over-a-representable-weight-are-evaluation` · theorem — Weighting by a representable evaluates the diagram
- `thm-representable-functors-carry-weighted-limits-to-weighted-limits` · theorem — A representable functor carries a weighted limit to the weighted limit of the composed diagram
- `thm-a-coend-is-a-colimit-weighted-by-the-hom-bifunctor` · theorem — A set-valued coend is a colimit weighted by the hom-bifunctor, and a set-valued end a limit weighted by it
- `rem-why-the-enriched-generalisation-cannot-stop-at-conical-limits` · remark — Why weights are needed once the base of enrichment is not $\mathbf{Set}$
- `rem-orientation-and-notation-conventions-for-ends-coends-and-twisted-arrows` · remark — Orientation and notation conventions in force on this page
- `fs-dinatural-transformations-compose` · false-statement — Dinatural transformations compose
- `fs-every-end-exists` · false-statement — Every functor on $\mathcal C^{\mathrm{op}}\times\mathcal C$ has an end
- `fs-a-coend-is-a-colimit-over-the-twisted-arrow-category-under-this-pages-convention` · false-statement — Under this page's convention a coend is the colimit of the same twisted-arrow diagram whose limit is the end
- `fs-every-functor-preserves-ends` · false-statement — Every functor preserves the ends that exist in its domain
- `fs-a-weighted-limit-is-the-ordinary-limit-of-the-same-diagram` · false-statement — Every weighted limit is the ordinary limit of the diagram it weights
- `fs-yonedas-original-notation-agrees-with-the-modern-one` · false-statement — The integral notation of Yoneda's original paper means the same as the modern one

### `ends-coends-and-weighted-limits-examples` — Ends Coends and Weighted Limits — Examples (9 item(s))

- `ex-the-end-formula-checked-against-natural-transformations-on-a-small-diagram` · example — The end formula checked by hand against natural transformations on the walking arrow
- `ex-the-evaluation-family-is-dinatural` · example — Evaluation of functions is dinatural in its argument set
- `ex-the-twisted-arrow-category-of-the-walking-arrow` · example — The twisted arrow category of the walking arrow is a cospan
- `ex-the-tensor-product-of-a-right-and-a-left-monoid-set-as-a-coend` · example — The tensor product of monoid sets as a coend
- `ex-the-coend-of-a-hom-functor` · example — The coend of the hom-bifunctor
- `ex-fubini-verified-on-a-two-object-index` · example — Fubini checked by hand on a product of two walking arrows
- `ex-a-weighted-limit-computing-a-kernel-pair` · example — A weighted limit computing a kernel pair
- `ex-copowers-and-powers-in-set` · example — Powers and copowers of a set by a set
- `ex-a-module-valued-coend-computed-as-a-quotient-of-a-direct-sum` · example — A module-valued coend computed as a quotient of a direct sum

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Alerts from other groups

None. No other group flagged an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: both
lanes may have passed every item you own. Verify it against
`research/frontier-18-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — frozen post-rejudge integrity close, run `frontier-18`

You are the resumed group Alpha for the group described above. The mathematical
rejudge boundary has already completed. This dispatch exists only because a
repository, contract, receipt, or ledger gate found residue on the final tree.

Item mathematics is frozen. Do not edit, create, delete, rename, or reorder an
item, and do not launch or request another judge cycle. You may correct a
mechanically stale contract or receipt only when it describes the current item
exactly and the correction does not conceal a real defect. If the honest fix
would change mathematics, report the exact item, failed gate, and defect as an
intervention blocker.

Read the latest failure in `.autopilot/events.jsonl`, take only exact ids owned
by your group, and rerun only the targeted gate where supported. Do not run a
whole-repository battery, `level-coverage`, or a workflow transition; the
engine owns those checks.

Return a concise report naming the gate, ids reviewed, non-item records changed,
targeted checks run, and every blocker. No permission prompts.
