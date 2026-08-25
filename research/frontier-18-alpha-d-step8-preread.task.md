# Step 8 — group **d**, run `frontier-18`

You are the group Alpha for batches **2**, **9**: 3 A/B pair(s), 6 page(s), 202 item(s), 162 open rejection(s) over 98 item(s).

You are a **fresh agent**. Nothing you did at step 3 or step 6 is in this
context, and nothing from any other group ever will be. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## Read your own pre-read first

**No pre-read digest exists for this group.** The step-7 pass did not run or did
not produce one, so you are meeting this mathematics for the first time with the
rejections already in front of you. Read the pages before the verdicts anyway —
the order matters more than where the notes came from.

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
`{from_group, item, owning_group, model, context_sha256, finding}` and adjudicate
your own rejection on what is true. The gate routes it to the owning group,
and a finding nobody answers fails the stage.

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

## Your rejections

| item | page | model | context_sha256 |
|---|---|---|---|
| `thm-a-central-product-of-extraspecial-p-groups-is-extraspecial` | `extraspecial-p-groups-and-central-products` | deepseek-v4-pro | `ae887021ec61e540f3105e0dc4c9110108541e0bc270a74de3ad41d2349293be` |
| `cor-the-order-of-an-extraspecial-p-group-is-p-to-one-plus-an-even-number` | `extraspecial-p-groups-and-central-products` | deepseek-v4-pro | `290f850888f07cf442a6db2dc6564ceec1f2c82becaa69eab1bc395b0f49dccc` |
| `thm-recognition-of-an-internal-central-product` | `extraspecial-p-groups-and-central-products` | deepseek-v4-pro | `841a5ef79bc249d1f2465785c9fe1da93786149241120d5299b58aeb3ff9b6d0` |
| `ex-the-heisenberg-group-of-order-twenty-seven` | `extraspecial-p-groups-and-central-products-examples` | claude-sonnet-4-6 | `f9eed6d3245e3fdde9cf8dd05f008127a27bdcd3c570b3046fdba021bef39f8b` |
| `def-plus-and-minus-type-of-an-extraspecial-p-group` | `extraspecial-p-groups-and-central-products` | claude-sonnet-4-6 | `555bf668c7b77752424b631918ddac5663b274702da47d3df61d7a53b361ae9c` |
| `ex-the-modular-group-of-order-twenty-seven` | `extraspecial-p-groups-and-central-products-examples` | claude-sonnet-4-6 | `85cacdfb763e944e191e2df95a880275cd38a4bf0cefc2f2e33c4a005bc16330` |
| `ex-the-heisenberg-group-at-the-prime-two-is-the-dihedral-group-of-order-eight` | `extraspecial-p-groups-and-central-products-examples` | deepseek-v4-pro | `6309fcdfb3d1c35708320e1b15835110b435685e71c9ddf1da0c73eee82df1c2` |
| `def-plus-and-minus-type-of-an-extraspecial-p-group` | `extraspecial-p-groups-and-central-products` | deepseek-v4-pro | `555bf668c7b77752424b631918ddac5663b274702da47d3df61d7a53b361ae9c` |
| `ex-a-generating-pair-decomposition-of-an-extraspecial-group-of-order-thirty-two` | `extraspecial-p-groups-and-central-products-examples` | deepseek-v4-pro | `f82d73c5b9022281494488c8d224cbc2a9e7b897fd5a6b1d66585d0c415f3236` |
| `fs-every-special-p-group-is-extraspecial` | `extraspecial-p-groups-and-central-products-examples` | deepseek-v4-pro | `d885dabe36143ce35bb23433d95fbcfe050e528f1bc6858860ed9ad6fb6acdac` |
| `fs-an-extraspecial-p-group-has-a-complement-to-its-centre` | `extraspecial-p-groups-and-central-products-examples` | claude-sonnet-4-6 | `3ed92de1d12faf69e234327919d02714766a32c4a17eefed36d1b1625e2f45ca` |
| `fs-every-special-p-group-is-extraspecial` | `extraspecial-p-groups-and-central-products-examples` | claude-sonnet-4-6 | `d885dabe36143ce35bb23433d95fbcfe050e528f1bc6858860ed9ad6fb6acdac` |
| `ex-the-heisenberg-group-of-order-twenty-seven` | `extraspecial-p-groups-and-central-products-examples` | deepseek-v4-pro | `f9eed6d3245e3fdde9cf8dd05f008127a27bdcd3c570b3046fdba021bef39f8b` |
| `prop-an-automorphism-of-an-extraspecial-p-group-trivial-on-the-frattini-quotient-is-inner` | `extraspecial-p-groups-and-central-products` | deepseek-v4-pro | `cbbfc574ed4faaa85923bf8bd5e408bf4da6208481ed0b141d994a1072cd7a4f` |
| `fs-the-commutator-pairing-needs-no-choice-of-a-central-generator` | `extraspecial-p-groups-and-central-products-examples` | deepseek-v4-pro | `1f2bd328502eb8c033eb5d51b58865ace96c918986faed2f8154c51b2b074425` |
| `thm-classification-of-extraspecial-p-groups-for-odd-p` | `extraspecial-p-groups-and-central-products` | deepseek-v4-pro | `26c4234146e3831ca53bcb51d782904fa7d86a161eb7bd348d85847fef88b15d` |
| `ex-a-central-product-of-two-cyclic-groups-of-order-four` | `extraspecial-p-groups-and-central-products-examples` | deepseek-v4-pro | `7864b386c70c05f1e46dfc9738b17063c6bf65d2b15571516edd0af6938c04f6` |
| `def-special-and-extraspecial-p-groups` | `extraspecial-p-groups-and-central-products` | deepseek-v4-pro | `eeb82e374e5fceb7736257874cb17be4ff731c4c3c32b31257fa70500ab0419a` |
| `prop-noncentral-conjugacy-classes-of-an-extraspecial-p-group-have-size-p` | `extraspecial-p-groups-and-central-products` | deepseek-v4-pro | `2d32bb72765dc723e09554b59d610cb6b2e97cba9476c6465d0a9a708d0c4ac0` |
| `prop-noncentral-conjugacy-classes-of-an-extraspecial-p-group-have-size-p` | `extraspecial-p-groups-and-central-products` | deepseek-v4-pro | `2d32bb72765dc723e09554b59d610cb6b2e97cba9476c6465d0a9a708d0c4ac0` |
| `lem-power-of-a-product-in-a-group-of-class-two` | `extraspecial-p-groups-and-central-products` | gpt-5.6-terra | `5b926cb8e3bf51447ff3f5e4dbbffc9175b034212e6ea607ecd8dee3d29e8fbe` |
| `prop-equivalent-characterisations-of-an-extraspecial-p-group` | `extraspecial-p-groups-and-central-products` | gpt-5.6-terra | `cb1952bfc65b9122e2dca70dac1cc7e48ff085128854669f4504f5c176149ac2` |
| `cor-the-p-th-power-map-is-a-homomorphism-in-a-class-two-group-for-odd-p` | `extraspecial-p-groups-and-central-products` | gpt-5.6-terra | `e20940464d5af2926b7c7bf4d5fc76b793c96ace30ac385155797095687effc4` |
| `def-special-and-extraspecial-p-groups` | `extraspecial-p-groups-and-central-products` | gpt-5.6-terra | `eeb82e374e5fceb7736257874cb17be4ff731c4c3c32b31257fa70500ab0419a` |
| `fs-an-extraspecial-p-group-has-a-complement-to-its-centre` | `extraspecial-p-groups-and-central-products-examples` | deepseek-v4-pro | `3ed92de1d12faf69e234327919d02714766a32c4a17eefed36d1b1625e2f45ca` |
| `lem-the-antidiagonal-subgroup-of-a-central-product-is-a-central-normal-subgroup` | `extraspecial-p-groups-and-central-products` | gpt-5.6-terra | `7290a79e1845d976120758b43d0fb7c4dd8fbbaa2605462b8a91dfc205b62e16` |
| `prop-a-centre-fixing-automorphism-of-an-extraspecial-p-group-preserves-its-commutator-pairing` | `extraspecial-p-groups-and-central-products` | deepseek-v4-pro | `7d33fbd774a1635600f8c163b9464ae49240ab2fe937bcd87f596b217702aaa2` |
| `thm-an-extraspecial-p-group-is-an-internal-central-product-of-subgroups-of-order-p-cubed` | `extraspecial-p-groups-and-central-products` | deepseek-v4-pro | `86f66599fa346723101155bddd23dcc0e3e5b6c680dd2e86f7375bb92b7e8cec` |
| `cor-an-extraspecial-p-group-is-a-product-of-two-maximal-abelian-subgroups` | `extraspecial-p-groups-and-central-products` | deepseek-v4-pro | `ff4d4c5fb52697cd08ba3bf094fb7cc694d2a092d4ee62f310c83bac0bc7500c` |
| `ex-the-modular-group-of-order-twenty-seven` | `extraspecial-p-groups-and-central-products-examples` | deepseek-v4-pro | `85cacdfb763e944e191e2df95a880275cd38a4bf0cefc2f2e33c4a005bc16330` |
| `prop-maximal-elementary-abelian-subgroups-distinguish-the-two-extraspecial-two-groups` | `extraspecial-p-groups-and-central-products` | deepseek-v4-pro | `26239dfe967dbedfe6febb3edea3fe52d0a56f7360504e4fc26d489d1dd56a28` |
| `thm-recognition-of-an-internal-central-product` | `extraspecial-p-groups-and-central-products` | gpt-5.6-terra | `841a5ef79bc249d1f2465785c9fe1da93786149241120d5299b58aeb3ff9b6d0` |
| `lem-the-commutator-pairing-is-nondegenerate` | `extraspecial-p-groups-and-central-products` | gpt-5.6-terra | `445425b6bdcea3c7a39d1c65b6688fd3281aeea32215019a08f0a5120be30225` |
| `lem-two-noncommuting-elements-of-an-extraspecial-p-group-generate-a-subgroup-of-order-p-cubed` | `extraspecial-p-groups-and-central-products` | gpt-5.6-terra | `a078a01436288606186a3be0f3fc15fde3b9c31e996c74b4de1ddf6352f401f8` |
| `lem-orthogonal-complement-counting-for-the-commutator-pairing` | `extraspecial-p-groups-and-central-products` | gpt-5.6-terra | `4ab404e56038caff7ae9e145fcba33231bc4938555d6753e66410ff617eb355f` |
| `prop-maximal-abelian-subgroups-of-an-extraspecial-p-group-have-order-p-to-one-plus-n` | `extraspecial-p-groups-and-central-products` | gpt-5.6-terra | `ed820d1a74fe15ade8fc101ae6b552c6aedec4ad76e6215c5acfe6d04b79ce53` |
| `cor-an-extraspecial-p-group-is-a-product-of-two-maximal-abelian-subgroups` | `extraspecial-p-groups-and-central-products` | gpt-5.6-terra | `ff4d4c5fb52697cd08ba3bf094fb7cc694d2a092d4ee62f310c83bac0bc7500c` |
| `prop-the-heisenberg-group-of-order-p-cubed-is-a-nonabelian-group-of-order-p-cubed` | `extraspecial-p-groups-and-central-products` | gpt-5.6-terra | `9daa8a0d145a34336dace33ba66ff8f0a4ea01433d89d81e0f3ee1b0152d0ff1` |
| `thm-an-extraspecial-p-group-is-an-internal-central-product-of-subgroups-of-order-p-cubed` | `extraspecial-p-groups-and-central-products` | gpt-5.6-terra | `86f66599fa346723101155bddd23dcc0e3e5b6c680dd2e86f7375bb92b7e8cec` |
| `lem-the-order-p-automorphism-of-a-cyclic-group-of-order-p-squared` | `extraspecial-p-groups-and-central-products` | gpt-5.6-terra | `8b9a8ae5ec1dc4389d1e360e2aa61b6210af7f924cf19cc6f9ae0ae1387e5d85` |
| `thm-every-nonabelian-group-of-order-p-cubed-is-extraspecial` | `extraspecial-p-groups-and-central-products` | gpt-5.6-terra | `17716c5e6ff03d335c7dc456c158ffe192d7e3906a8a0a539ae96191c0e52c74` |
| `prop-the-modular-group-of-order-p-cubed-is-extraspecial-and-has-exponent-p-squared-for-odd-p` | `extraspecial-p-groups-and-central-products` | gpt-5.6-terra | `94a0e3974d1f6f1619fb6becc632d8e279dc2584def609f75489e3134056759a` |
| `prop-the-dihedral-and-quaternion-groups-of-order-eight-are-extraspecial` | `extraspecial-p-groups-and-central-products` | gpt-5.6-terra | `bf68ad046d472b6e761d8cd6ad5337f471619394efc126c55bb31455278d9c8c` |
| `def-modular-group-of-order-p-cubed` | `extraspecial-p-groups-and-central-products` | gpt-5.6-terra | `8caab94e940bc7882374671fe736f1a2f4027c9aab20c877dcd0d82c28e39517` |
| `thm-classification-of-extraspecial-two-groups` | `extraspecial-p-groups-and-central-products` | gpt-5.6-terra | `4b558468692c769123bf013912b5ac3159fdef5890b0cee6222295becaa15120` |
| `def-plus-and-minus-type-of-an-extraspecial-p-group` | `extraspecial-p-groups-and-central-products` | gpt-5.6-terra | `555bf668c7b77752424b631918ddac5663b274702da47d3df61d7a53b361ae9c` |
| `lem-a-central-product-of-two-quaternion-groups-is-a-central-product-of-two-dihedral-groups` | `extraspecial-p-groups-and-central-products` | gpt-5.6-terra | `a306ce77a9a7f97a292b72baa4b35e9d4096fb27f8121cbeb908599d4f554d13` |
| `cor-the-exponent-of-an-extraspecial-p-group` | `extraspecial-p-groups-and-central-products` | gpt-5.6-terra | `34f7f3154dc4d3f5b6775027182e8b7483e8071bd3dfebc7a254012f96d79f98` |
| `thm-classification-of-extraspecial-p-groups-for-odd-p` | `extraspecial-p-groups-and-central-products` | gpt-5.6-terra | `26c4234146e3831ca53bcb51d782904fa7d86a161eb7bd348d85847fef88b15d` |
| `prop-a-centre-fixing-automorphism-of-an-extraspecial-p-group-preserves-its-commutator-pairing` | `extraspecial-p-groups-and-central-products` | gpt-5.6-terra | `7d33fbd774a1635600f8c163b9464ae49240ab2fe937bcd87f596b217702aaa2` |
| `prop-maximal-elementary-abelian-subgroups-distinguish-the-two-extraspecial-two-groups` | `extraspecial-p-groups-and-central-products` | gpt-5.6-terra | `26239dfe967dbedfe6febb3edea3fe52d0a56f7360504e4fc26d489d1dd56a28` |
| `ex-the-two-extraspecial-groups-of-order-thirty-two` | `extraspecial-p-groups-and-central-products-examples` | gpt-5.6-terra | `1d09c697d6ef813f44c38475af396310ede4d3f68b017b8fb7bc029f2616f772` |
| `ex-the-heisenberg-group-at-the-prime-two-is-the-dihedral-group-of-order-eight` | `extraspecial-p-groups-and-central-products-examples` | gpt-5.6-terra | `6309fcdfb3d1c35708320e1b15835110b435685e71c9ddf1da0c73eee82df1c2` |
| `ex-a-generating-pair-decomposition-of-an-extraspecial-group-of-order-thirty-two` | `extraspecial-p-groups-and-central-products-examples` | gpt-5.6-terra | `f82d73c5b9022281494488c8d224cbc2a9e7b897fd5a6b1d66585d0c415f3236` |
| `lem-the-square-map-is-well-defined-and-refines-the-commutator-pairing` | `extraspecial-p-groups-and-central-products` | gpt-5.6-terra | `0a8e686b8fb81a4ab046b368c2c65108dc234b1ddfd2515acc71f4320a3fb724` |
| `ex-the-heisenberg-group-of-order-twenty-seven` | `extraspecial-p-groups-and-central-products-examples` | gpt-5.6-terra | `f9eed6d3245e3fdde9cf8dd05f008127a27bdcd3c570b3046fdba021bef39f8b` |
| `ex-the-modular-group-of-order-twenty-seven` | `extraspecial-p-groups-and-central-products-examples` | gpt-5.6-terra | `85cacdfb763e944e191e2df95a880275cd38a4bf0cefc2f2e33c4a005bc16330` |
| `lem-a-vertex-bijection-is-an-isometry-of-path-metrics-exactly-when-it-is-a-graph-isomorphism` | `cayley-graphs-word-metrics-and-quasi-isometry` | deepseek-v4-pro | `e3f6ba202bec0f48bc927766a20dad2986e7917ac693f5e8f862e8faefe7b7c5` |
| `ex-the-commutator-pairings-of-the-dihedral-and-quaternion-groups-of-order-eight` | `extraspecial-p-groups-and-central-products-examples` | gpt-5.6-terra | `035963914529009a877254639b866bac259857293152ef7ed2776358925bb2ed` |
| `ex-a-central-product-of-two-cyclic-groups-of-order-four` | `extraspecial-p-groups-and-central-products-examples` | gpt-5.6-terra | `7864b386c70c05f1e46dfc9738b17063c6bf65d2b15571516edd0af6938c04f6` |
| `fs-every-special-p-group-is-extraspecial` | `extraspecial-p-groups-and-central-products-examples` | gpt-5.6-terra | `d885dabe36143ce35bb23433d95fbcfe050e528f1bc6858860ed9ad6fb6acdac` |
| `thm-a-simple-graph-is-a-tree-exactly-when-every-two-vertices-are-joined-by-a-unique-path` | `cayley-graphs-word-metrics-and-quasi-isometry` | deepseek-v4-pro | `9e7a9ad56d1eabcab43650f8b6a3cd8d3248340bf17dcdbc90e371def6e318fc` |
| `fs-there-is-exactly-one-extraspecial-group-of-each-admissible-order` | `extraspecial-p-groups-and-central-products-examples` | gpt-5.6-terra | `9c4093425f368febed5490b6e41bc517faf271a7fbac1774e0b920c90e87a562` |
| `fs-an-extraspecial-p-group-has-a-complement-to-its-centre` | `extraspecial-p-groups-and-central-products-examples` | gpt-5.6-terra | `3ed92de1d12faf69e234327919d02714766a32c4a17eefed36d1b1625e2f45ca` |
| `cex-a-special-p-group-that-is-not-extraspecial` | `extraspecial-p-groups-and-central-products-examples` | gpt-5.6-terra | `12ec09455621f4b5d1768c36c85f013c6ad816d57328a0181a2c31e3cf85646b` |
| `lem-balls-in-a-connected-locally-finite-graph-are-finite` | `cayley-graphs-word-metrics-and-quasi-isometry` | deepseek-v4-pro | `acb986bafe2f805648fa8e4b1151a9e0d0cb7d49f163fe95d47a90eae025a415` |
| `lem-a-cayley-graph-is-connected-exactly-when-its-defining-subset-generates-the-group` | `cayley-graphs-word-metrics-and-quasi-isometry` | deepseek-v4-pro | `b1b818f4bce676dbfefc922680f5915dacfce9252f0aa8ca9396a3f6959f4be4` |
| `cex-the-central-product-decomposition-of-an-extraspecial-group-is-not-unique` | `extraspecial-p-groups-and-central-products-examples` | gpt-5.6-terra | `3b4cc64d9c898dbbcae0bbe79199b93bc2aa9cfd01d778d13d892077fe59df73` |
| `lem-a-vertex-bijection-is-an-isometry-of-path-metrics-exactly-when-it-is-a-graph-isomorphism` | `cayley-graphs-word-metrics-and-quasi-isometry` | gpt-5.6-terra | `e3f6ba202bec0f48bc927766a20dad2986e7917ac693f5e8f862e8faefe7b7c5` |
| `prop-a-cayley-graph-is-regular-and-is-locally-finite-exactly-when-its-defining-subset-is-finite` | `cayley-graphs-word-metrics-and-quasi-isometry` | deepseek-v4-pro | `7bccdcac41ee411f5710b7ce8005e456b933642a0f7dd5d636ee7402d19ba73f` |
| `lem-the-graph-notions-agree-with-the-published-finite-graph-theory` | `cayley-graphs-word-metrics-and-quasi-isometry` | gpt-5.6-terra | `16cf74007a0374822fd2005ee297d8ba938051e7a29546b9634f566b7dfbab72` |
| `lem-balls-in-a-connected-locally-finite-graph-are-finite` | `cayley-graphs-word-metrics-and-quasi-isometry` | gpt-5.6-terra | `acb986bafe2f805648fa8e4b1151a9e0d0cb7d49f163fe95d47a90eae025a415` |
| `def-word-length-with-respect-to-a-generating-set` | `cayley-graphs-word-metrics-and-quasi-isometry` | deepseek-v4-pro | `cb960b329c003f48f5bbe33aacc153956526c69a5b9ee67b184d5ff9550ca83e` |
| `thm-a-simple-graph-is-a-tree-exactly-when-every-two-vertices-are-joined-by-a-unique-path` | `cayley-graphs-word-metrics-and-quasi-isometry` | gpt-5.6-terra | `9e7a9ad56d1eabcab43650f8b6a3cd8d3248340bf17dcdbc90e371def6e318fc` |
| `lem-a-cayley-graph-is-connected-exactly-when-its-defining-subset-generates-the-group` | `cayley-graphs-word-metrics-and-quasi-isometry` | gpt-5.6-terra | `b1b818f4bce676dbfefc922680f5915dacfce9252f0aa8ca9396a3f6959f4be4` |
| `thm-the-left-translation-action-on-a-cayley-graph-restricts-the-embedding-of-cayleys-theorem` | `cayley-graphs-word-metrics-and-quasi-isometry` | deepseek-v4-pro | `108664112ea99d10a6623870e7d00aa8d95fb75a3e346296aef2466e7532ee04` |
| `prop-a-cayley-graph-is-regular-and-is-locally-finite-exactly-when-its-defining-subset-is-finite` | `cayley-graphs-word-metrics-and-quasi-isometry` | gpt-5.6-terra | `7bccdcac41ee411f5710b7ce8005e456b933642a0f7dd5d636ee7402d19ba73f` |
| `thm-left-translation-is-a-free-action-by-labelled-graph-automorphisms-of-a-cayley-graph` | `cayley-graphs-word-metrics-and-quasi-isometry` | gpt-5.6-terra | `e46e19f6d0d3c5c63fbf752a3daf03d45cae171f8e635f3d3f37bd77ba04eb0a` |
| `lem-the-cayley-graph-of-a-finite-group-with-a-finite-generating-set-is-a-finite-simple-graph` | `cayley-graphs-word-metrics-and-quasi-isometry` | deepseek-v4-pro | `765ce543e070f978977767c8b2c28eb275b70534487b3e7e31c1cb19722a4b1c` |
| `thm-the-left-translation-action-on-a-cayley-graph-restricts-the-embedding-of-cayleys-theorem` | `cayley-graphs-word-metrics-and-quasi-isometry` | gpt-5.6-terra | `108664112ea99d10a6623870e7d00aa8d95fb75a3e346296aef2466e7532ee04` |
| `def-word-length-with-respect-to-a-generating-set` | `cayley-graphs-word-metrics-and-quasi-isometry` | gpt-5.6-terra | `cb960b329c003f48f5bbe33aacc153956526c69a5b9ee67b184d5ff9550ca83e` |
| `cor-word-length-in-a-free-group-with-respect-to-a-free-basis-is-reduced-word-length` | `cayley-graphs-word-metrics-and-quasi-isometry` | deepseek-v4-pro | `ce772e2f24d2e388bfd8158e0567d32dbf9fbb6bcf07ce6be88dd40e612ba427` |
| `lem-the-cayley-graph-of-a-finite-group-with-a-finite-generating-set-is-a-finite-simple-graph` | `cayley-graphs-word-metrics-and-quasi-isometry` | gpt-5.6-terra | `765ce543e070f978977767c8b2c28eb275b70534487b3e7e31c1cb19722a4b1c` |
| `lem-word-length-is-well-defined-and-satisfies-the-length-laws` | `cayley-graphs-word-metrics-and-quasi-isometry` | gpt-5.6-terra | `236c0d813b094ab25c8192c11be970cf2dfe06210fe0f07ef1ef0af1e07cfc63` |
| `def-separated-net-in-a-metric-space` | `cayley-graphs-word-metrics-and-quasi-isometry` | deepseek-v4-pro | `4407ef1cb405feb184fae70983a94032797013b46aa10291957271a2c2540773` |
| `thm-the-word-metric-is-a-left-invariant-metric-and-is-the-path-metric-of-the-cayley-graph` | `cayley-graphs-word-metrics-and-quasi-isometry` | gpt-5.6-terra | `23bfeaa9a0eaddb62d861e9dbaef2cb486fb8b5f406d68dd69e88fb88fbd13f5` |
| `prop-the-word-metric-is-the-largest-left-invariant-metric-giving-every-generator-distance-at-most-one-from-the-identity` | `cayley-graphs-word-metrics-and-quasi-isometry` | gpt-5.6-terra | `4d2e5fb4223826c6795ffc61ea8412a22682a4c323d3fd2fd395356971ba6a51` |
| `prop-word-metric-balls-are-finite-exactly-when-the-generating-set-is-finite` | `cayley-graphs-word-metrics-and-quasi-isometry` | gpt-5.6-terra | `fecdb7ac64f918282108db8e8a5d76168dbbc6e2429174c6c1e48ec6b05fd95b` |
| `thm-left-translation-is-a-free-action-by-labelled-graph-automorphisms-of-a-cayley-graph` | `cayley-graphs-word-metrics-and-quasi-isometry` | deepseek-v4-pro | `e46e19f6d0d3c5c63fbf752a3daf03d45cae171f8e635f3d3f37bd77ba04eb0a` |
| `thm-the-cayley-graph-of-a-free-group-with-respect-to-a-free-basis-is-a-tree` | `cayley-graphs-word-metrics-and-quasi-isometry` | gpt-5.6-terra | `06e0727699f329d26b5618c0296d836f7222b86e88091c221dafb3d3f1697132` |
| `prop-right-translation-moves-every-point-of-a-word-metric-space-the-same-bounded-distance` | `cayley-graphs-word-metrics-and-quasi-isometry` | gpt-5.6-terra | `f38921c0fb9d02057e09efa8f3989e38ea9df7f4d50cefcc1134429be33b68c1` |
| `prop-isometries-bilipschitz-equivalences-and-quasi-isometries-form-a-hierarchy` | `cayley-graphs-word-metrics-and-quasi-isometry` | deepseek-v4-pro | `4ab9a157d40a0fbe62441ee4c7e16ba9e4ae3f88222a9d71dc702774c62b8018` |
| `def-quasi-isometry-type-of-a-finitely-generated-group` | `cayley-graphs-word-metrics-and-quasi-isometry` | deepseek-v4-pro | `0cbe93be9d43fc3c6da01260dbe0692c67090d3f5339781ed40b5afa8988f0ad` |
| `cor-quasi-isometries-are-exactly-the-coarsely-dense-quasi-isometric-embeddings` | `cayley-graphs-word-metrics-and-quasi-isometry` | deepseek-v4-pro | `f515575322ba4414a9c4c0b469cd5b2499d7547d3dbf6a4714ab38e8437d55e0` |
| `thm-the-cayley-graph-of-a-free-group-with-respect-to-a-free-basis-is-a-tree` | `cayley-graphs-word-metrics-and-quasi-isometry` | deepseek-v4-pro | `06e0727699f329d26b5618c0296d836f7222b86e88091c221dafb3d3f1697132` |
| `cor-word-length-in-a-free-group-with-respect-to-a-free-basis-is-reduced-word-length` | `cayley-graphs-word-metrics-and-quasi-isometry` | gpt-5.6-terra | `ce772e2f24d2e388bfd8158e0567d32dbf9fbb6bcf07ce6be88dd40e612ba427` |
| `thm-a-generating-set-with-no-two-letter-relation-whose-cayley-graph-is-a-tree-is-a-free-basis` | `cayley-graphs-word-metrics-and-quasi-isometry` | gpt-5.6-terra | `43214f2a49794f21bda4a3760d4d7941d9592e4a7cf5ac8951c170d28dc5c0f5` |
| `thm-the-word-metric-is-a-left-invariant-metric-and-is-the-path-metric-of-the-cayley-graph` | `cayley-graphs-word-metrics-and-quasi-isometry` | deepseek-v4-pro | `23bfeaa9a0eaddb62d861e9dbaef2cb486fb8b5f406d68dd69e88fb88fbd13f5` |
| `lem-bounded-distance-is-an-equivalence-relation-compatible-with-composition` | `cayley-graphs-word-metrics-and-quasi-isometry` | gpt-5.6-terra | `a866c96b4997b53bbd2fd59b068b083003a6dd167e66741f719943e490c6732e` |
| `def-coarsely-dense-subset-and-quasi-isometry` | `cayley-graphs-word-metrics-and-quasi-isometry` | deepseek-v4-pro | `d77e132fff79d78663d0ddf7f58a751f59da65e510dcb045d641782469df6f96` |
| `prop-a-quasi-isometric-embedding-carries-a-quasi-geodesic-to-a-quasi-geodesic` | `cayley-graphs-word-metrics-and-quasi-isometry` | deepseek-v4-pro | `5bc4f97882eb696476f006fca234d919dd49e470eb913e50117047969fb52cc8` |
| `def-coarsely-dense-subset-and-quasi-isometry` | `cayley-graphs-word-metrics-and-quasi-isometry` | gpt-5.6-terra | `d77e132fff79d78663d0ddf7f58a751f59da65e510dcb045d641782469df6f96` |
| `prop-the-quasi-isometry-group-is-a-group-and-quasi-isometric-spaces-have-isomorphic-quasi-isometry-groups` | `cayley-graphs-word-metrics-and-quasi-isometry` | deepseek-v4-pro | `00f90b0139b64f1b2515a5cc73bf1c69bbeacd3bc16e967f668cf95de071f91a` |
| `lem-a-map-at-bounded-distance-from-a-quasi-isometric-embedding-is-a-quasi-isometric-embedding` | `cayley-graphs-word-metrics-and-quasi-isometry` | gpt-5.6-terra | `8228850c78b3d86fdf3ad2d2a26f6ca212c59b7bf1292eb3bf23af3956406b92` |
| `lem-composites-of-coarse-lipschitz-maps-and-of-quasi-isometric-embeddings` | `cayley-graphs-word-metrics-and-quasi-isometry` | gpt-5.6-terra | `6c860f32fc78e3f242c6ea0707df066eba9c4de82c3e19306c1f63f6f959f0fa` |
| `cor-quasi-isometries-are-exactly-the-coarsely-dense-quasi-isometric-embeddings` | `cayley-graphs-word-metrics-and-quasi-isometry` | gpt-5.6-terra | `f515575322ba4414a9c4c0b469cd5b2499d7547d3dbf6a4714ab38e8437d55e0` |
| `prop-a-finite-index-subgroup-of-a-finitely-generated-group-is-finitely-generated-and-quasi-isometrically-included` | `cayley-graphs-word-metrics-and-quasi-isometry` | deepseek-v4-pro | `5462ab1f710439882bdeecc12a80c8826e23291465982c98c1f1eb1dd4f0fac3` |
| `prop-word-metric-balls-are-finite-exactly-when-the-generating-set-is-finite` | `cayley-graphs-word-metrics-and-quasi-isometry` | deepseek-v4-pro | `fecdb7ac64f918282108db8e8a5d76168dbbc6e2429174c6c1e48ec6b05fd95b` |
| `def-quasi-isometry-group-of-a-metric-space` | `cayley-graphs-word-metrics-and-quasi-isometry` | gpt-5.6-terra | `01dc8c85e4e053eba9b60f6dd1ea142078f3c1d091cd49b6278bb2e352ddcfd4` |
| `prop-the-quasi-isometry-group-is-a-group-and-quasi-isometric-spaces-have-isomorphic-quasi-isometry-groups` | `cayley-graphs-word-metrics-and-quasi-isometry` | gpt-5.6-terra | `00f90b0139b64f1b2515a5cc73bf1c69bbeacd3bc16e967f668cf95de071f91a` |
| `ex-the-cayley-graph-and-word-metric-of-the-integers` | `cayley-graphs-word-metrics-and-quasi-isometry-examples` | deepseek-v4-pro | `83ec7e5b8f8db9626abbdde119a4b71569c911f2489c5d5ca62c5bac73501350` |
| `prop-isometries-bilipschitz-equivalences-and-quasi-isometries-form-a-hierarchy` | `cayley-graphs-word-metrics-and-quasi-isometry` | gpt-5.6-terra | `4ab9a157d40a0fbe62441ee4c7e16ba9e4ae3f88222a9d71dc702774c62b8018` |
| `thm-a-quasi-isometric-embedding-with-coarsely-dense-image-admits-a-quasi-inverse` | `cayley-graphs-word-metrics-and-quasi-isometry` | gpt-5.6-terra | `05abf1e6715efd855ef7c178504f8f53728f72050e0bf754795ca1394f294fa2` |
| `def-separated-net-in-a-metric-space` | `cayley-graphs-word-metrics-and-quasi-isometry` | gpt-5.6-terra | `4407ef1cb405feb184fae70983a94032797013b46aa10291957271a2c2540773` |
| `thm-a-generating-set-with-no-two-letter-relation-whose-cayley-graph-is-a-tree-is-a-free-basis` | `cayley-graphs-word-metrics-and-quasi-isometry` | deepseek-v4-pro | `43214f2a49794f21bda4a3760d4d7941d9592e4a7cf5ac8951c170d28dc5c0f5` |
| `lem-the-graph-notions-agree-with-the-published-finite-graph-theory` | `cayley-graphs-word-metrics-and-quasi-isometry` | deepseek-v4-pro | `16cf74007a0374822fd2005ee297d8ba938051e7a29546b9634f566b7dfbab72` |
| `cex-an-infinite-generating-set-destroys-the-comparison-of-word-metrics` | `cayley-graphs-word-metrics-and-quasi-isometry-examples` | deepseek-v4-pro | `b72913325d394f223c264db928285d286d98327dca8de51e7c05bb2502048715` |
| `thm-two-finite-generating-sets-of-a-group-give-bilipschitz-equivalent-word-metrics` | `cayley-graphs-word-metrics-and-quasi-isometry` | gpt-5.6-terra | `1ea0ec449d25fb6fe26c291efd663c15f2514f052c4b143450363f88f8bf0aad` |
| `prop-a-metric-space-is-quasi-isometric-to-a-one-point-space-exactly-when-it-is-nonempty-of-finite-diameter` | `cayley-graphs-word-metrics-and-quasi-isometry` | gpt-5.6-terra | `50e7f0176fbee3b9a09e62e991dfdcbd838e7b2bfea1532942f20c370cfcc0cb` |
| `def-quasi-isometry-type-of-a-finitely-generated-group` | `cayley-graphs-word-metrics-and-quasi-isometry` | gpt-5.6-terra | `0cbe93be9d43fc3c6da01260dbe0692c67090d3f5339781ed40b5afa8988f0ad` |
| `ex-two-generating-sets-of-a-dihedral-group` | `cayley-graphs-word-metrics-and-quasi-isometry-examples` | deepseek-v4-pro | `c8ae255a8ebea936a22cd862b5512ea87a3a15004bec839aceace5405f04d5c2` |
| `prop-a-finite-index-subgroup-of-a-finitely-generated-group-is-finitely-generated-and-quasi-isometrically-included` | `cayley-graphs-word-metrics-and-quasi-isometry` | gpt-5.6-terra | `5462ab1f710439882bdeecc12a80c8826e23291465982c98c1f1eb1dd4f0fac3` |
| `def-quasi-geodesic-and-quasi-geodesic-metric-space` | `cayley-graphs-word-metrics-and-quasi-isometry` | gpt-5.6-terra | `ec44d00255d1a5d525f75c4e792b12e38063a7d69db9f68edd5e586dac04ff4e` |
| `ex-the-cayley-graph-of-a-free-abelian-group-of-finite-rank` | `cayley-graphs-word-metrics-and-quasi-isometry-examples` | deepseek-v4-pro | `6ada15de1fbbc0d32ecbd4a1b9c69069df2ba60812b75e32835abfd76c9b6930` |
| `prop-the-quotient-of-a-finitely-generated-group-by-a-finite-normal-subgroup-is-a-quasi-isometry` | `cayley-graphs-word-metrics-and-quasi-isometry` | gpt-5.6-terra | `69848648a9f70b83e1696e9af68358f6ed7ce330685d87cbb1bd99c53a250a32` |
| `ex-the-cayley-tree-of-a-free-group-of-rank-two` | `cayley-graphs-word-metrics-and-quasi-isometry-examples` | deepseek-v4-pro | `e41bcb26283b922208dd5b4bf1b62733d16344ed70426108a0fc7eda44018f0d` |
| `fs-the-word-metric-is-right-invariant` | `cayley-graphs-word-metrics-and-quasi-isometry-examples` | deepseek-v4-pro | `5e0a5d840b5b156c3d4e128543729fa05ba5f308375654703bed4966f3b43cea` |
| `ex-the-infinite-dihedral-group-is-quasi-isometric-to-the-integers` | `cayley-graphs-word-metrics-and-quasi-isometry-examples` | deepseek-v4-pro | `9a4e27737560ebd5b95c76678c32a2ff697442bd8a04615a9261454a84a0539b` |
| `prop-the-path-metric-of-a-connected-simple-graph-is-quasi-geodesic-with-constants-one-and-one` | `cayley-graphs-word-metrics-and-quasi-isometry` | gpt-5.6-terra | `afbeb200ac989f1f4db7ce1f2c86e52b9bd3fedfd08e9c9283c8e8c1c64c2c54` |
| `prop-a-quasi-isometric-embedding-carries-a-quasi-geodesic-to-a-quasi-geodesic` | `cayley-graphs-word-metrics-and-quasi-isometry` | gpt-5.6-terra | `5bc4f97882eb696476f006fca234d919dd49e470eb913e50117047969fb52cc8` |
| `cor-a-bijective-quasi-isometry-between-finitely-generated-groups-is-a-bilipschitz-equivalence` | `cayley-graphs-word-metrics-and-quasi-isometry` | gpt-5.6-terra | `bab5ceb73bd0f02c8a093a8cb91c98fe4daf0eee8af06d05e55ee3d26a2147c0` |
| `prop-a-coarse-lipschitz-map-between-finitely-generated-groups-with-word-metrics-is-lipschitz` | `cayley-graphs-word-metrics-and-quasi-isometry` | gpt-5.6-terra | `2f7a1532ef03ff45f9f9fd6b36de3f024fecfefee0637bf4dee0f1cabab56b11` |
| `ex-the-cayley-graph-and-word-metric-of-the-integers` | `cayley-graphs-word-metrics-and-quasi-isometry-examples` | gpt-5.6-terra | `83ec7e5b8f8db9626abbdde119a4b71569c911f2489c5d5ca62c5bac73501350` |
| `lem-composites-of-coarse-lipschitz-maps-and-of-quasi-isometric-embeddings` | `cayley-graphs-word-metrics-and-quasi-isometry` | deepseek-v4-pro | `6c860f32fc78e3f242c6ea0707df066eba9c4de82c3e19306c1f63f6f959f0fa` |
| `cex-a-tree-cayley-graph-need-not-come-from-a-free-generating-set` | `cayley-graphs-word-metrics-and-quasi-isometry-examples` | deepseek-v4-pro | `e8e31f525c7597d94e17a06c61988a65bcdbf3952874164c42dced5a548e797d` |
| `ex-the-cayley-graph-of-a-free-abelian-group-of-finite-rank` | `cayley-graphs-word-metrics-and-quasi-isometry-examples` | gpt-5.6-terra | `6ada15de1fbbc0d32ecbd4a1b9c69069df2ba60812b75e32835abfd76c9b6930` |
| `ex-the-cayley-tree-of-a-free-group-of-rank-two` | `cayley-graphs-word-metrics-and-quasi-isometry-examples` | gpt-5.6-terra | `e41bcb26283b922208dd5b4bf1b62733d16344ed70426108a0fc7eda44018f0d` |
| `fs-a-quasi-isometry-is-continuous-or-bijective` | `cayley-graphs-word-metrics-and-quasi-isometry-examples` | deepseek-v4-pro | `e75d8984ded920013be03b4dd56b2992cbdf0cca17769bc389015106a9b4f47b` |
| `ex-two-generating-sets-of-a-dihedral-group` | `cayley-graphs-word-metrics-and-quasi-isometry-examples` | gpt-5.6-terra | `c8ae255a8ebea936a22cd862b5512ea87a3a15004bec839aceace5405f04d5c2` |
| `fs-all-infinite-finitely-generated-groups-are-quasi-isometric` | `cayley-graphs-word-metrics-and-quasi-isometry-examples` | deepseek-v4-pro | `1c5887e34504a2f17728dbad80931a82aa1c5ba1fcd7450e66a381b117e72249` |
| `ex-the-integers-are-quasi-isometric-to-the-real-line` | `cayley-graphs-word-metrics-and-quasi-isometry-examples` | gpt-5.6-terra | `609ef2bc10ec15871d35d943819c008e6360a241448d1452b1210c5bf2e43a1a` |
| `ex-the-infinite-dihedral-group-is-quasi-isometric-to-the-integers` | `cayley-graphs-word-metrics-and-quasi-isometry-examples` | gpt-5.6-terra | `9a4e27737560ebd5b95c76678c32a2ff697442bd8a04615a9261454a84a0539b` |
| `ex-a-finite-index-subgroup-of-a-free-abelian-group-is-quasi-isometric-to-it` | `cayley-graphs-word-metrics-and-quasi-isometry-examples` | gpt-5.6-terra | `767f081887c3a1eab92433b23134491f0304d95942613a8744f19d7c77bba62b` |
| `cex-an-infinite-generating-set-destroys-the-comparison-of-word-metrics` | `cayley-graphs-word-metrics-and-quasi-isometry-examples` | gpt-5.6-terra | `b72913325d394f223c264db928285d286d98327dca8de51e7c05bb2502048715` |
| `fs-the-word-metric-is-right-invariant` | `cayley-graphs-word-metrics-and-quasi-isometry-examples` | gpt-5.6-terra | `5e0a5d840b5b156c3d4e128543729fa05ba5f308375654703bed4966f3b43cea` |
| `fs-nonisomorphic-groups-cannot-have-isomorphic-cayley-graphs` | `cayley-graphs-word-metrics-and-quasi-isometry-examples` | deepseek-v4-pro | `efd4b6d1454d17a5514c41018cbd09dbf2eb36d2a59024ad2806b7b2df544bae` |
| `cex-a-quasi-isometry-need-not-be-continuous-injective-or-surjective` | `cayley-graphs-word-metrics-and-quasi-isometry-examples` | gpt-5.6-terra | `9b16eccff1e7b44d1aa2a1e6cd1790da7f638e3be23f9da1492c2cb06a8181ae` |
| `fs-a-quasi-isometry-is-continuous-or-bijective` | `cayley-graphs-word-metrics-and-quasi-isometry-examples` | gpt-5.6-terra | `e75d8984ded920013be03b4dd56b2992cbdf0cca17769bc389015106a9b4f47b` |
| `fs-all-infinite-finitely-generated-groups-are-quasi-isometric` | `cayley-graphs-word-metrics-and-quasi-isometry-examples` | gpt-5.6-terra | `1c5887e34504a2f17728dbad80931a82aa1c5ba1fcd7450e66a381b117e72249` |
| `cex-a-quasi-isometry-need-not-be-continuous-injective-or-surjective` | `cayley-graphs-word-metrics-and-quasi-isometry-examples` | deepseek-v4-pro | `9b16eccff1e7b44d1aa2a1e6cd1790da7f638e3be23f9da1492c2cb06a8181ae` |
| `fs-a-finitely-generated-group-with-a-word-metric-is-a-geodesic-metric-space` | `cayley-graphs-word-metrics-and-quasi-isometry-examples` | gpt-5.6-terra | `494d901f47c819d45fd2c3e6ae5264fb7a14807f9936e528e468ec0f40c3554c` |
| `fs-nonisomorphic-groups-cannot-have-isomorphic-cayley-graphs` | `cayley-graphs-word-metrics-and-quasi-isometry-examples` | gpt-5.6-terra | `efd4b6d1454d17a5514c41018cbd09dbf2eb36d2a59024ad2806b7b2df544bae` |
| `cex-a-tree-cayley-graph-need-not-come-from-a-free-generating-set` | `cayley-graphs-word-metrics-and-quasi-isometry-examples` | gpt-5.6-terra | `e8e31f525c7597d94e17a06c61988a65bcdbf3952874164c42dced5a548e797d` |
| `ex-the-quasi-isometry-group-of-a-metric-space-of-finite-diameter-is-trivial` | `cayley-graphs-word-metrics-and-quasi-isometry-examples` | gpt-5.6-terra | `7a7a2ad76090252caebe5a4a63cdd872d775327d60c9a907f3947c3cf6ed4d8d` |
| `ex-the-quasi-isometry-group-of-the-integers-contains-the-multiplicative-group-of-nonzero-reals` | `cayley-graphs-word-metrics-and-quasi-isometry-examples` | gpt-5.6-terra | `cd6800b578992d3df88a6df2560beda9c4220542a689d143765e1f122a0a2c5b` |
| `ex-the-quasi-isometry-group-of-the-integers-contains-the-multiplicative-group-of-nonzero-reals` | `cayley-graphs-word-metrics-and-quasi-isometry-examples` | deepseek-v4-pro | `cd6800b578992d3df88a6df2560beda9c4220542a689d143765e1f122a0a2c5b` |
| `def-quasi-geodesic-and-quasi-geodesic-metric-space` | `cayley-graphs-word-metrics-and-quasi-isometry` | deepseek-v4-pro | `ec44d00255d1a5d525f75c4e792b12e38063a7d69db9f68edd5e586dac04ff4e` |
| `ex-a-finite-index-subgroup-of-a-free-abelian-group-is-quasi-isometric-to-it` | `cayley-graphs-word-metrics-and-quasi-isometry-examples` | deepseek-v4-pro | `767f081887c3a1eab92433b23134491f0304d95942613a8744f19d7c77bba62b` |
| `def-quasi-isometry-group-of-a-metric-space` | `cayley-graphs-word-metrics-and-quasi-isometry` | deepseek-v4-pro | `01dc8c85e4e053eba9b60f6dd1ea142078f3c1d091cd49b6278bb2e352ddcfd4` |
| `prop-the-quotient-of-a-finitely-generated-group-by-a-finite-normal-subgroup-is-a-quasi-isometry` | `cayley-graphs-word-metrics-and-quasi-isometry` | deepseek-v4-pro | `69848648a9f70b83e1696e9af68358f6ed7ce330685d87cbb1bd99c53a250a32` |
| `thm-two-finite-generating-sets-of-a-group-give-bilipschitz-equivalent-word-metrics` | `cayley-graphs-word-metrics-and-quasi-isometry` | deepseek-v4-pro | `1ea0ec449d25fb6fe26c291efd663c15f2514f052c4b143450363f88f8bf0aad` |
| `ex-the-integers-are-quasi-isometric-to-the-real-line` | `cayley-graphs-word-metrics-and-quasi-isometry-examples` | deepseek-v4-pro | `609ef2bc10ec15871d35d943819c008e6360a241448d1452b1210c5bf2e43a1a` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step-7 pre-read — build your group's context before the verdicts exist

You are a **group Alpha for run `frontier-18`**, and this is the reading pass that
happens *while* the paired judges are still sweeping. Your group is named in the
context above, along with every page and item you own.

## You are READ-ONLY, and that is a kernel guarantee

Your sandbox refuses every write. This is not a request you could comply with
badly: step 7 judges a frozen text, and an edit landing during the sweep would
void verdicts already cast against the old bytes and silently produce a level
judged in two states at once. You cannot cause that here.

So: **do not attempt to repair anything.** If you find a defect — and you may —
record it in `concerns` and stop there. Step 8 is where you act on it, under the
fatal-only rule, after a verdict exists.

## Why this pass exists

Step 8 partitions the judges' rejections across the group Alphas, and each
step-8 Alpha is a **fresh dispatch** carrying nothing from earlier stages. Fresh
is deliberate — a reader who already decided a proof was fine is the worst-placed
reader of an objection to it — but it means the adjudicator meets 200 items and a
list of rejections in the same context window, and reads the mathematics through
the objections.

This pass separates those two readings. You read the mathematics **now**, before
any verdict exists, and your notes become the first thing your step-8 self reads.
Its judgement is then made against your own unprompted account of what the pages
say, not against the judges' framing of it.

Your `concerns` list is the sharpest part. A concern you record here was found
with nobody suggesting where to look; if a judge later objects at the same place,
that is two independent readings agreeing, and it is much stronger evidence than
your agreeing with a rejection you were shown.

## What to do

1. **Open every A page and its `-examples` companion**, and the item files under
   `items/` for each. The inventory above lists them; it is an inventory, not the
   mathematics.
2. **Open every published dependency your pages actually cite.** You may read the
   entire library — `items/` holds every published item and every item this run
   has built. Record a dependency only if you opened it; `opened: false` is an
   honest answer and a fabricated `true` is worse than either.
3. **Write down the conventions your pages fix** — the orientation sign, the
   boundary regularity, whether a measure is complete, where an index starts,
   which direction an iff is stated in. These are what a rejection usually turns
   on, and they are the thing a reader arriving cold does not have.
4. **Check each cross-group edge** your context names, in both directions. If it
   names none, `seams_checked` is empty and that is the expected answer.
5. **Record what already looks thin**, honestly graded. `would-be-fatal` means the
   claim as written looks false or unsupported — not that you would phrase it
   differently. `gap-a-reader-closes` is the 30-second class. Never manufacture an
   entry to look thorough; an empty list from a careful reading is a result.

## What this pass is not

It is not an audit, and it does not replace one. Step 6 already ran independent
readers, refuters and adjudication over this text. You are not re-running that
and you are not being asked for a verdict on anything. You are building the
context your step-8 self will otherwise have to build under time pressure with
the judges talking over you.

Do not summarise the pages for a reader who has not seen them. Write for
yourself, six hours from now, holding a list of rejections.

**No permission prompts of any kind**, including inside an `&&` chain.
