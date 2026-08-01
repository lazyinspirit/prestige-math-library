# Frontier-6 batch 1 — scaffold amendments and authoring notes

Beta-F6-1. This batch covers the following three A/B pairs only:

- `cosets-and-lagranges-theorem` / `cosets-and-lagranges-theorem-examples`
- `trees-forests-and-spanning-trees` /
  `trees-forests-and-spanning-trees-examples`
- `induced-subgraphs-and-hereditary-graph-classes` /
  `induced-subgraphs-and-hereditary-graph-classes-examples`

The complete item lists and item-level dependency declarations are in
`research/frontier-6-batch-1.pages.json`. No mathematical item has been authored
in this pass.

## 1. Mechanical result

The batch has 97 proposed items:

| pair | A items | B items | total |
|---|---:|---:|---:|
| cosets | 15 | 8 | 23 |
| trees | 27 | 12 | 39 |
| induced subgraphs | 23 | 12 | 35 |
| **total** | **65** | **32** | **97** |

Checks actually run against a scratch splice into the current
`research/plan-spec.json`:

- JSON parsing succeeded.
- `node tools/validate-plan.mjs <scratch-splice> --max-items 100` exited 0.
  It reported no item cycles, page cycles, forward references, B-page
  dependencies, unresolved IDs, duplicate IDs, intra-page ordering failures, or
  undeclared page prerequisites in these six pages. Its many
  `redundant-prereq` warnings belong to other existing pages.
- `tools/depsource.mjs` reported the following per-page counts:

  | page | published | own A / same-page earlier | unresolved, homeless, draft, later |
  |---|---:|---:|---:|
  | cosets A | 61 | 0 | 0 |
  | cosets B | 34 | 12 | 0 |
  | trees A | 57 | 0 | 0 |
  | trees B | 8 | 27 | 0 |
  | induced A | 39 | 0 | 0 |
  | induced B | 20 | 17 | 0 |

- There are 62 distinct external dependency IDs. Every corresponding item file
  exists, every one has `status: published`, and every published dependency was
  opened to compare the proposed use with its actual Definition or Statement.
- Each B page declares only its own A page in `requires`. There are no cross-pair
  item dependencies in this batch and no forward references.
- Every A page is well below the 100-item review ceiling. The largest is trees,
  at 27 items. The ceiling was not used as a target and no scoped result was
  dropped merely to make an item count smaller.

### Proposed item lists

**Cosets A (15):**
`def-coset`, `lem-coset-membership-and-equality`, `lem-coset-partition`,
`lem-coset-equinumerous-with-subgroup`,
`lem-left-and-right-cosets-equinumerous`, `def-index`,
`lem-finite-coset-partition`, `thm-lagrange`,
`cor-order-of-element-divides-group-order`,
`cor-g-to-the-group-order-is-identity`, `cor-prime-order-group-is-cyclic`,
`cor-index-tower-finite`, `cor-index-one-iff-whole-group`,
`thm-eulers-theorem`, and `thm-fermats-little-theorem`.

**Cosets B (8):**
`ex-cosets-of-nz-in-z`, `ex-index-of-the-trivial-subgroups`,
`ex-lagrange-in-sym-three`, `cex-left-coset-that-is-not-a-right-coset`,
`ex-every-divisor-is-a-subgroup-order-in-a-cyclic-group`,
`cex-subgroup-of-an-infinite-group-equinumerous-with-it`,
`cex-product-of-two-subgroups-not-a-subgroup`, and
`fs-every-coset-is-a-subgroup`.

**Trees A (27):**
`def-tree-forest-and-leaf`, `lem-nonempty-forest-has-low-degree-vertex`,
`thm-forest-edge-component-count`, `cor-tree-edge-count`,
`lem-edge-deletion-in-a-tree`, `lem-edge-addition-to-a-tree`,
`thm-tree-characterisations`, `cor-nontrivial-tree-has-two-leaves`,
`def-rooted-tree`, `lem-rooted-tree-parent-and-levels`, `def-spanning-tree`,
`lem-maximal-acyclic-spanning-subgraph-is-a-spanning-tree`,
`thm-connected-iff-has-spanning-tree`,
`lem-fundamental-cycle-of-a-spanning-tree`,
`lem-fundamental-cut-of-a-spanning-tree`,
`lem-spanning-tree-set-is-finite`, `def-number-of-spanning-trees`,
`def-prufer-code`, `lem-prufer-decoding-produces-a-tree`,
`thm-prufer-code-bijection`, `thm-cayley-formula`,
`def-weighted-graph-and-minimum-spanning-tree`,
`lem-spanning-tree-exchange`,
`thm-cut-and-cycle-properties-for-minimum-spanning-trees`,
`cor-distinct-edge-weights-give-a-unique-minimum-spanning-tree`,
`thm-kruskals-minimum-spanning-tree-algorithm`, and
`thm-prims-minimum-spanning-tree-algorithm`.

**Trees B (12):**
`ex-trees-on-at-most-five-vertices`, `ex-prufer-code-and-decoding`,
`ex-spanning-trees-of-a-cycle`, `ex-spanning-trees-of-k-four`,
`ex-fundamental-cycle-and-cut`, `ex-two-spanning-trees-of-one-graph`,
`ex-kruskal-and-prim-on-a-weighted-graph`,
`cex-acyclic-disconnected-graph`, `cex-n-minus-one-edges-without-a-tree`,
`cex-minimum-spanning-tree-not-unique`,
`fs-cayley-formula-counts-unlabelled-trees`, and
`fs-every-edge-lies-in-every-spanning-tree`.

**Induced-subgraphs A (23):**
`def-induced-embedding-and-induced-copy`, `lem-induced-embeddings-compose`,
`def-induced-copy-number`, `lem-induced-copy-number-isomorphism-and-complement`,
`def-h-free-and-family-free-graph`,
`lem-induced-freeness-passes-to-induced-subgraphs`,
`def-hereditary-graph-class`,
`lem-forbidden-induced-subgraph-classes-are-hereditary`,
`def-minimal-forbidden-induced-subgraph`,
`thm-hereditary-classes-have-a-unique-minimal-forbidden-basis`,
`cor-nonempty-hereditary-class-contains-the-null-graph`,
`def-complement-of-a-graph-class`, `lem-complement-commutes-with-induced-subgraphs`,
`thm-complementation-preserves-hereditary-classes-and-bases`,
`cor-h-free-complement-dictionary`, `def-clique-stable-set-and-numbers`,
`lem-complement-swaps-cliques-and-stable-sets`,
`def-anticonnected-graph-and-anticonnected-component`,
`lem-anticonnected-components-are-complement-components`,
`thm-every-nontrivial-graph-is-connected-or-anticonnected`,
`def-edges-between-sets-and-pure-mixed-pairs`,
`lem-purity-symmetry-and-complementation`, and
`lem-components-are-anticomplete-and-anticomponents-complete`.

**Induced-subgraphs B (12):**
`cex-a-subgraph-copy-need-not-be-induced`, `ex-induced-k-two-copy-count`,
`ex-complete-graphs-as-a-hereditary-class`,
`ex-edgeless-graphs-as-a-hereditary-class`,
`ex-cluster-graphs-are-p-three-free`,
`cex-connected-graphs-are-not-hereditary`,
`cex-regular-graphs-are-not-hereditary`,
`ex-p-four-is-connected-and-anticonnected`,
`ex-pure-and-mixed-pairs-in-p-four`,
`fs-every-hereditary-class-has-a-finite-forbidden-basis`,
`fs-hereditary-classes-are-closed-under-all-subgraphs`, and
`ex-complementary-forbidden-bases`.

## 2. Step-3 recommendations, in severity order

### 2.1 Required corrections to the prose plans

1. **The AA-2 finite-counting warning is obsolete and must be deleted.** The
   published page `finite-counting-and-binomial-coefficients` now supplies
   finite cardinality, subsets of finite sets, the finite sum rule, finite-index
   sums, and power-set cardinality. Re-minting local counting lemmas on the
   cosets page would duplicate published mathematics and create a two-notions
   defect. The scaffold cites the published items instead.

2. **The old AA-2 B inventory promises an $A_4$ counterexample that this page
   still cannot present cleanly.** Keep the existing firm deferral to the later
   symmetric-group/sign page. Although `def-symmetric-group` and elementary
   cycle notation are now published, the sign homomorphism and the economical
   identification/counting of $A_4$ are not. This batch instead gives two
   immediate converse boundaries: a positive divisor does occur as a subgroup
   order in every finite cyclic group, while `HK` for two subgroups need not be
   a subgroup. Neither falsely claims to replace the later $A_4$ witness.

3. **The GT-2 order and inventory are stale.** The live spec places the pair at
   209/210, not 191/192. The finite forest identity, the parent/level lemma, the
   finiteness of the spanning-tree set, the exchange lemma, and exact cut/cycle
   MST clauses should be named. “The number of labelled forests, if it drops out
   cheaply” should be removed: it is not a single elementary corollary with a
   stable statement and is not needed by later pages.

4. **The extension-plan row for induced subgraphs is too compressed to preserve
   its conventions.** It must say that `ind_H(G)` counts injective induced
   embeddings, that hereditary means isomorphism-closed as well as induced-
   subgraph-closed, and that the page proves the unique possibly infinite
   minimal forbidden induced-subgraph basis. These choices are load-bearing for
   the later Erdős–Hajnal pages.

### 2.2 Approved scope decisions

- **Approve** Euler's theorem and Fermat's little theorem on cosets A. Their
  arithmetic data really are published below the page, and both results become
  precise corollaries of the finite-group exponent result in the published unit
  group.
- **Approve** the full finite-tree characterisation theorem, Prüfer bijection,
  Cayley formula, spanning-tree infrastructure, and correctness of Kruskal and
  Prim. The algorithms are constructive existence procedures only; make no time
  or complexity claim.
- **Deny** the infinite spanning-tree theorem on this page. The library's graph
  convention is finite, and the infinite statement changes both scope and
  choice strength.
- **Approve** clique/stable-set vocabulary here. The published graph page did
  not add it, while the later Erdős–Hajnal pages require it. The definition must
  prove that its two maxima exist, including on the null graph.
- **Approve** the minimal-forbidden-basis theorem for hereditary classes of
  finite graphs, with uniqueness up to isomorphism and an explicit convention
  for canonical representatives if a set rather than a class is formed.
- **Approve** connected/anticonnected and pure/mixed vocabulary here. It is basic
  induced-subgraph infrastructure and matches the later paper's notation.

### 2.3 Dependency corrections already incorporated in the JSON

- `thm-forest-edge-component-count` now cites the finite sum rule and the
  finiteness of a component family as a subset of a finite power set.
- `lem-maximal-acyclic-spanning-subgraph-is-a-spanning-tree` now carries the
  finite-cardinality and well-ordering support needed to show that a maximal
  acyclic edge set exists before using maximality.
- `ex-every-divisor-is-a-subgroup-order-in-a-cyclic-group` says **positive
  divisor**, not merely divisor. Divisibility in this library is over
  `Z`, so negative divisors exist. It also cites ordered-integer arithmetic and
  integer cancellation for the quotient and order calculation.
- `def-clique-stable-set-and-numbers` now cites the finite-subset and
  well-ordering results required to establish maxima rather than silently
  assuming a maximum cardinality exists.

## 3. Applyable prose-plan edits

### 3.1 Replace the AA-2 block in `research/plan-algebra-track.md`

Replace the block beginning
`## AA-2. Cosets, Index and Lagrange's Theorem  (order 28)` and ending with the
obsolete finite-cardinal-arithmetic paragraph immediately before `## AA-3` by:

```text
## AA-2. Cosets, Index and Lagrange's Theorem  (order 32)

`requires`: `congruences-and-the-chinese-remainder-theorem`

Left and right cosets; membership and equality criteria; the coset equivalence
relation and partition; explicit bijections between a subgroup and each coset
and between the left- and right-coset sets; the index [G:H], finite when the
coset set is finite and infinity otherwise; the finite coset-partition lemma;
Lagrange's theorem; element order divides group order; g^{|G|}=e; prime-order
groups are cyclic; the finite index-tower formula; and index one iff H=G.
Euler's theorem and Fermat's little theorem are corollaries in the published
unit group (Z/n)^times and cite the published unit criterion and totient values.

B page: the cosets of nZ in Z; the two trivial subgroup indices; subgroup
orders in Sym({1,2,3}); a left coset unequal to the corresponding right coset;
every positive divisor of a finite cyclic group's order occurring as a subgroup
order; the distinction between finite index and equinumerosity for 2Z <= Z; a
product HK of two subgroups that is not a subgroup; and the false statement that
every coset is itself a subgroup.

Traps. Lagrange requires G finite, while index is defined without finiteness.
The finite cardinality notation is natural-valued, but divisibility and primality
are integer notions; use the canonical embedding explicitly at every seam.
The index-tower proof cancels |K| only after noting K contains the identity, so
|K| is nonzero. Euler and Fermat use the already-published arithmetic and do not
rederive the unit criterion or totient. The A_4 counterexample to the converse
of Lagrange remains a firm obligation of the later symmetric-group/sign B page:
the economical proof requires sign and |A_4|=12.

The former warning that finite cardinal arithmetic was absent is superseded.
`finite-counting-and-binomial-coefficients` now publishes finite cardinality,
subsets and power sets of finite sets, finite-index sums, and the sum rule; this
page cites those results and mints no competing counting theory.

Forward references: NONE.
```

### 3.2 Replace the GT-2 block in
`research/plan-combinatorics-and-categories.md`

Replace the block beginning
`## GT-2. Trees, Forests and Spanning Trees  (order 191, combinatorics)` and
ending at its `Forward references: NONE.` by:

```text
## GT-2. Trees, Forests and Spanning Trees  (order 209, combinatorics)

`requires`: `graphs-walks-and-connectivity` (207)

DEFS: tree, forest and leaf; rooted tree, parent and level; spanning tree; the
finite set of spanning trees and tau(G); labelled Prüfer encoding and decoding;
a real-weighted graph and minimum spanning tree.

THMS: every nonempty forest has a vertex of degree at most one; the forest
identity |V|=|E|+c and the tree edge count; deletion of a tree edge and addition
of a nonedge; the full nonempty finite-tree characterisation theorem; every
nontrivial tree has two leaves; rooted-tree parent and level properties; a
maximal acyclic spanning subgraph of a connected graph is a spanning tree, and
a finite graph is connected iff it has a spanning tree; fundamental cycles and
cuts; finiteness of the spanning-tree set; the Prüfer bijection and Cayley's
formula; the spanning-tree exchange lemma; exact MST cut and cycle properties;
distinct edge weights imply uniqueness; and correctness of Kruskal and Prim as
constructive finite existence procedures, with arbitrary tie-breaking.

B: trees through five vertices; a Prüfer computation in both directions;
tau(C_n)=n and tau(K_4)=16; fundamental cycle and cut computations; two spanning
trees in one graph; a complete Kruskal/Prim computation; disconnected acyclic
and n-1-edge counterexamples; a nonunique MST with repeated weights; and the
false statements that Cayley counts unlabelled trees and that every edge belongs
to every spanning tree.

Traps. Every graph here is finite, simple and undirected. The null graph is not
connected, K_1 is a tree with no degree-one leaf, and the equivalence list is
stated for a nonempty graph. Write |V|=|E|+c rather than natural subtraction.
Prüfer labels are the von Neumann natural n={0,...,n-1}; the code and formula are
stated for n>=2, with tau(K_0)=0 and tau(K_1)=1 handled separately. Cayley's
formula is labelled, not unlabelled. The infinite spanning-tree theorem is
outside scope. MST algorithms carry no computational-complexity assertion.

Forward references: NONE.
```

### 3.3 Replace the 393/394 extension-table row

Replace:

```text
| 393/394 | induced-subgraphs-and-hereditary-graph-classes | induced-subgraphs-and-hereditary-graph-classes-examples | Induced embeddings, ind_H(G), hereditary classes, complements, connected/anticonnected components, pure/mixed pairs and basic notation. |
```

with:

```text
| 393/394 | induced-subgraphs-and-hereditary-graph-classes | induced-subgraphs-and-hereditary-graph-classes-examples | Injective induced embeddings and the injection count ind_H(G); H-free and family-free graphs; isomorphism-closed hereditary graph classes and their unique possibly infinite minimal forbidden induced-subgraph bases; complementation; clique and stable-set numbers; connected/anticonnected components; and complete, anticomplete, pure and mixed disjoint vertex-set pairs. |
```

Insert immediately after the table:

```text
CONVENTION AMENDMENT (Beta-F6-1). Here ind_H(G) counts injective maps preserving
both adjacency and nonadjacency, not unlabelled vertex subsets; in particular
ind_{K_2}(G)=2|E(G)|. Hereditary means closed under isomorphism as well as under
induced subgraphs. A forbidden basis is unique only up to graph isomorphism and
may be infinite. Every graph is finite, simple and undirected. Complete and
anticomplete are both vacuously true when one of the two disjoint vertex sets is
empty, so such a pair is pure, not mixed.
```

## 4. Authoring brief — cosets

### 4.1 Required two-paragraph A-page opening

Paragraph 1 should say that cosets turn subgroup multiplication into a
partition of a group, and that each block is in explicit bijection with the
subgroup. This makes index a genuine size and makes Lagrange a finite partition
count rather than an unexplained formula.

Paragraph 2 should say that the resulting divisibility statement controls
element orders and prime-order groups, and, when applied to the published unit
group modulo `n`, gives Euler and Fermat. Distinguish the finite hypotheses from
the index-one and coset facts that remain valid in infinite groups.

### 4.2 Proof-obligation map

| stage | items | obligation that must appear explicitly |
|---|---|---|
| coset algebra | `def-coset`, `lem-coset-membership-and-equality` | Define both `gH` and `Hg`; prove both membership rewrites and the equality criterion with the multiplication order correct. |
| partition | `lem-coset-partition` | Define `a~b` by `a^{-1}b in H`, prove reflexive/symmetric/transitive, and identify its class with `aH` before invoking the published partition lemma. |
| bijections | the two equinumerosity lemmas | Give the maps `h -> gh` and `x -> x^{-1}` (sending `gH` to `Hg^{-1}`), their inverses, and their exact codomains. |
| index | `def-index`, `lem-finite-coset-partition` | Define `G/H` as left cosets. If this set is finite, `[G:H]` is its natural cardinality; otherwise use the symbol infinity and perform no arithmetic with it. For finite G, show `G/H` is a subset of `P(G)` and every coset is finite. |
| Lagrange | `thm-lagrange` | Sum the equal natural cardinalities over the finite partition. State `|G|=[G:H]|H|` in naturals, then use `iota` to interpret divisibility in integers. |
| element order | the next three corollaries | Cite `|<g>|=ord(g)` exactly. For `g!=e`, record `ord(g)>=2`; when `iota(|G|)` is prime, its only positive integer divisors force `ord(g)=|G|`. |
| index consequences | the two index corollaries | In the tower formula apply Lagrange to the three finite groups and cancel only after proving `|K|!=0`. For index one, prove the unique coset is H and contains all of G; do not assume G finite. |
| modular consequences | Euler and Fermat | Translate the unit-group identity back to congruence. Separate the `p` not dividing `a` case from the unconditional `a^p congruent a` case; handle the divisible case directly. Do not silently treat integer exponents as natural cardinalities. |

### 4.3 Boundary pass

- `H=G` and `H={e}` must be stated. The second cardinal identity needs finite
  `G`; the first does not.
- Infinite index is a symbol, not a natural or cardinal and not an operand in
  Lagrange's formula.
- At modulus `1`, the unit group is the one-element group and Euler's congruence
  is still true.
- A prime in this library is a positive integer greater than one. Whenever a
  group order is used as a prime or divisor, write its image under `iota`.
- The cyclic-subgroup example is for a **positive** divisor `d` of the positive
  integer `iota(n)`. Extract the unique positive natural quotient before using
  it as an exponent.
- A coset containing the identity is the subgroup; arbitrary cosets need not be
  subgroups. Left and right cosets may differ when the subgroup is not normal.

### 4.4 Decomposition and corollary pass

The partition, the two bijections, the finite-coset lemma, element-order
divisibility, and the index tower are deliberately separate reusable items.
Do not merge them into Lagrange. Conversely, do not split Euler or Fermat into
local modular-arithmetic lemmas: the published congruence and unit-group items
already carry that work. No normality theorem, quotient group, group action,
converse-to-Lagrange witness, or classification of cyclic subgroups belongs on
this A page.

## 5. Authoring brief — trees

### 5.1 Required two-paragraph A-page opening

Paragraph 1 should present trees as the finite graphs for which connectivity,
acyclicity, unique paths, minimal connectivity, maximal acyclicity, and the
edge count all coincide. Explain that forest component counting supplies the
arithmetic spine and the deletion/addition lemmas supply the structural spine.

Paragraph 2 should move from structure to enumeration and optimization:
spanning trees witness finite connectivity, Prüfer codes count the spanning
trees of a complete labelled graph, and exchange along fundamental cycles and
cuts proves the correctness of minimum-spanning-tree rules and algorithms.

### 5.2 Proof-obligation map

| stage | items | obligation that must appear explicitly |
|---|---|---|
| forest base | first four items | A forest is acyclic and a tree is connected and acyclic. A leaf has degree one. Prove the low-degree lemma from the published minimum-degree cycle result, then prove `|V|=|E|+c` by vertex deletion, separating isolated and leaf cases and counting components exactly. |
| structural operations | deletion/addition lemmas | Deleting a tree edge gives exactly two components, not merely a disconnected forest. Adding a nonedge to a tree gives exactly one cycle, namely the old unique path plus the new edge. |
| equivalence theorem | `thm-tree-characterisations` | State one exact hypothesis: a nonempty finite simple graph. Prove all six forms and do not use `n-1` before translating it into `|E|+1=|V|` in the natural-number implementation. |
| leaves/rooting | leaf corollary, rooted definition and lemma | `K_1` is explicitly excluded from the two-leaf statement. A root determines one parent for every nonroot vertex by the unique root path; levels are graph distances already defined in the published page. |
| spanning trees | five spanning-tree items | Establish existence of a maximal acyclic spanning edge set using finiteness, then use connectedness to rule out multiple components. Fundamental cycles and cuts must be unique. The set of spanning trees is a subset of `P(E)`, hence finite, before `tau(G)` is defined. |
| Prüfer | four items | Labels are the natural `n`. For `n>=2` repeatedly delete the least leaf; define the length through the unique `m` with `m+2=n`, not unlicensed truncated subtraction. In decoding, prove a missing label exists at every step, that the output is a tree, and that encoding/decoding are inverse maps. |
| Cayley | `thm-cayley-formula` | Count functions from the `n-2` position set to `n`, using natural-valued exponentiation. State `tau(K_n)=n^{n-2}` only for `n>=2`; separately prove `tau(K_0)=0`, `tau(K_1)=1`. |
| weighted trees | definition and exchange lemma | Weights are real and tree weight is a finite edge sum. An MST exists for a connected graph because the nonempty spanning-tree set is finite. The exchange lemma must name the removed edge and show the result is again a spanning tree. |
| cut/cycle rules | theorem and uniqueness corollary | State the weak and strict forms precisely: a minimum cut edge is in some MST; a unique minimum cut edge is in every MST; a maximum cycle edge can be avoided by some MST; a unique maximum cycle edge is in no MST. Derive distinct-weight uniqueness by the lightest symmetric-difference exchange. |
| algorithms | Kruskal and Prim | Define the finite iterative choices, prove the invariant that the current forest extends to an MST, prove termination with a spanning tree, and permit arbitrary choices among equal minimum weights. No pseudocode or complexity bound is required. |

### 5.3 Boundary pass

- The null graph is a forest but not a tree under the published connectivity
  convention. Its component family is empty, so the forest identity reads
  `0=0+0`.
- `K_1` is a tree and has no degree-one leaf. It has one spanning tree, itself.
- “Every nontrivial tree has two leaves” means at least two vertices.
- A disconnected graph has no spanning tree and hence no MST. If `tau` is
  defined for every graph, its value there is zero because its spanning-tree set
  is empty.
- Cayley's formula counts labelled trees on the fixed vertex set `n`, not
  isomorphism classes.
- Distinct weights are sufficient, not necessary, for a unique MST. Repeated
  weights do not force nonuniqueness.
- “Minimum/maximum edge on a cut/cycle” allows ties; universal membership or
  exclusion requires uniqueness of the extremal edge.

### 5.4 Decomposition and corollary pass

The forest identity, deletion/addition lemmas, parent lemma, spanning-tree
finiteness, Prüfer decoder, exchange lemma, and cut/cycle theorem are retained
as reusable internal nodes. The two greedy algorithms share the exchange and
cut infrastructure rather than reproducing it. Do not add the matrix-tree
theorem, rooted-forest formulas, infinite trees, arborescences, algorithmic
complexity, or general labelled-forest enumeration; each belongs to a later
page or requires additional infrastructure.

## 6. Authoring brief — induced subgraphs and hereditary classes

### 6.1 Required two-paragraph A-page opening

Paragraph 1 should explain that an induced embedding preserves both edges and
nonedges, so induced containment is stricter than ordinary subgraph containment.
Fix the embedding-count convention for `ind_H(G)` before using it in any later
Erdős–Hajnal statement.

Paragraph 2 should explain that hereditary classes are exactly classes
describable by their minimal forbidden induced subgraphs, possibly infinitely
many, and that complementation transports this dictionary. Then introduce the
clique/stable-set and connected/anticonnected language used by later structural
arguments, together with pure and mixed pairs of disjoint vertex sets.

### 6.2 Proof-obligation map

| stage | items | obligation that must appear explicitly |
|---|---|---|
| induced copies | first four items | An induced embedding is an injection `phi:V(H)->V(G)` satisfying adjacency iff adjacency. Prove its image induces a graph isomorphic to H and the converse. Composition remains induced. Define `ind_H(G)` as the finite cardinality of the set of these injections; prove invariance in both variables and under simultaneous complementation. |
| freeness/heredity | next four items | Define single-H and family freeness. Prove transitivity of induced containment through composed embeddings. Define hereditary to include isomorphism closure and closure under induced subgraphs. |
| forbidden basis | definition, theorem, null corollary | A minimal obstruction is outside the class while every proper induced subgraph lies inside. Given a graph outside the class, choose an outside induced subgraph of least vertex cardinality. Prove it is minimal, and prove any defining obstruction family contains, up to isomorphism, every minimal one. Handle the empty class and canonical representatives explicitly. |
| complements | four items | Define the complement class, prove `bar(G[S])=bar(G)[S]`, and use it to transport heredity, minimal bases, and H-free classes. State every equality up to the published graph-isomorphism convention. |
| clique/stable | definition and lemma | Include the empty subset as both a clique and stable set, prove the two maximum cardinalities exist for every finite graph, and prove `omega(G)=alpha(bar G)` and `alpha(G)=omega(bar G)`. |
| anticonnected | definition and next two results | Define anticonnected as complement-connected and anticomponents as complement components. For a graph with at least two vertices, if G is disconnected, show its complement is connected by routing within a component through a vertex of a different component. |
| pure/mixed | final three items | Require A and B to be disjoint. Define complete-to, anticomplete-to, pure, and mixed. Prove symmetry and the complement swap, then show distinct components are anticomplete and distinct anticomponents are complete. |

### 6.3 Boundary pass

- All graphs are finite, simple, and undirected.
- An induced-copy count is an embedding count. Thus automorphisms are counted:
  `ind_{K_2}(G)=2|E(G)|`, not `|E(G)|`.
- The null graph embeds inducedly in every graph by the unique empty map.
- A nonempty hereditary class therefore contains the null graph; the empty
  hereditary class has the null graph as its minimal forbidden obstruction.
- A minimal forbidden basis can be infinite. Bipartite graphs have all odd
  cycles as pairwise nonisomorphic minimal forbidden induced subgraphs.
- A one-vertex graph is both connected and anticonnected, but the structural
  connected-or-anticonnected theorem is stated for at least two vertices because
  that is the useful nontrivial form.
- If either of two disjoint vertex sets is empty, they are both complete and
  anticomplete by vacuity and therefore pure, not mixed.
- Hereditary means induced-subgraph closure, not closure under arbitrary edge
  deletion. Complete graphs give the shortest counterexample.

### 6.4 Decomposition and corollary pass

Keep embedding composition separate because every later transitivity argument
uses it. Keep the complement-induced-subgraph identity separate because it
drives four later dictionaries. Keep maximal clique/stable-set existence inside
their definition instead of postponing the well-definedness obligation. Do not
add modules, substitution, regularity, Erdős–Hajnal exponents, sparse/restricted
sets, blockades, or viral properties here; the extension plan deliberately
assigns each to later A pages.

## 7. Source ledger and convention comparison

All URLs below were retrieved successfully during this scaffold pass on
2026-08-01. No unverified legacy URL is included.

### Cosets

- Thomas W. Judson, *Abstract Algebra: Theory and Applications*:
  <https://judsonbooks.org/abstract-algebra-theory-and-applications/>. Used for
  the standard coset partition, index, Lagrange, cyclic and modular corollary
  scope.
- UCL lecture notes, “Cosets and Lagrange's theorem”:
  <https://www.homepages.ucl.ac.uk/~ucahmto/0007/_book/4-6-cosets-and-lagranges-theorem.html>.
  Used to cross-check the equality/partition proof order and finite hypothesis.
- University of Minnesota Open Textbook Library record for Judson:
  <https://open.umn.edu/opentextbooks/textbooks/217>. Used to confirm the open
  textbook identity and edition/source provenance.

The source convention that “order divides order” is ordinary positive-integer
language must be translated into this library's types: finite cardinalities are
naturals, while `def-divides-in-z` and `def-prime` are integer notions.

### Trees

- Reinhard Diestel, *Graph Theory*, Chapter 1 preview:
  <https://diestel-graph-theory.com/basic.html?level=1>. Used for trees,
  forests, unique paths, spanning trees, fundamental cycles/cuts, and standard
  graph conventions.
- Peter T. Wood, MAS341 lecture 8:
  <https://ptwiddle.github.io/MAS341-Graph-Theory-2017/lecturenotes/lecture8.html>.
  Used to cross-check tree equivalences, leaves, and spanning trees.
- Indian Statistical Institute discrete-mathematics notes, Chapter 4.1:
  <https://www.isibang.ac.in/~d.yogesh/Course_Notes/DM1/Ch4.S1.html>. Used to
  cross-check Prüfer coding and Cayley enumeration.

Source texts commonly label `K_n` by `{1,...,n}` and write `n-2` without a type
comment. This library uses the von Neumann natural
`n={0,...,n-1}` and does not silently import truncated subtraction. Sources also
often call `K_1`'s vertex a leaf under a “degree at most one” convention; this
library's proposed leaf is degree exactly one, so `K_1` has no leaf.

### Induced subgraphs

- LIPIcs ISAAC 2022 paper:
  <https://drops.dagstuhl.de/storage/00lipics/lipics-vol248-isaac2022/LIPIcs.ISAAC.2022.14/LIPIcs.ISAAC.2022.14.pdf>.
  Used to verify that every hereditary graph class has a unique, possibly
  infinite, minimal forbidden induced-subgraph basis.
- Current Erdős–Hajnal paper used by the extension plan:
  <https://arxiv.org/html/2606.06258v2>. Used for the injection convention for
  induced copies and `ind_H(G)`, H-free graphs, connected/anticonnected, and
  pure/mixed terminology.
- Survey on forbidden induced subgraphs:
  <https://arxiv.org/abs/1610.04691>. Used to cross-check hereditary-class and
  forbidden-induced-subgraph vocabulary.

The critical convention disagreement is counting: some graph texts count
unlabelled image vertex sets, but the target paper counts injections. The
scaffold follows the paper. It also keeps “homogeneous set” out of this page
because later sources overload that phrase for both clique/stable sets and
modules.

## 8. Identifier, forward-reference, and source limitations

- `rg` checks over `items/`, the live `research/plan-spec.json`, and current
  research artifacts found no collision with a published item or a live planned
  item. Several coset IDs also occur in
  `research/level8-algebra-aborted.pages.json`; that artifact explicitly records
  an aborted and superseded scaffold. Reusing those stable descriptive IDs is
  deliberate, while its obsolete local finite-counting items were not reused.
- There are no forward references. The only future orientations are prose
  exclusions: the `A_4` converse-to-Lagrange witness belongs later; the
  matrix-tree proof of Cayley belongs later; modules and the Erdős–Hajnal theory
  belong later. None appears in an item dependency or `forwardRefs` field.
- No `justified_by` seam is needed. Every definition whose well-definedness
  needs a theorem has the discharge immediately before it: finite coset data
  before Lagrange, spanning-tree-set finiteness before `tau`, and finite maxima
  support inside the clique/stable definition's backward closure.
- Confidence is high on statement truth, page order, dependency resolution, and
  boundary conventions. Confidence is moderate-high on final item granularity:
  the full authoring pass may expose a genuinely reusable microlemma, but it
  must not change page scope or hide an undeclared dependency.
- This pass did not author proofs, run proof prechecks, or ask judge models to
  assess mathematical items; those belong to later workflow steps. Source URLs
  ground the scope and conventions, not the eventual line-by-line proof.
