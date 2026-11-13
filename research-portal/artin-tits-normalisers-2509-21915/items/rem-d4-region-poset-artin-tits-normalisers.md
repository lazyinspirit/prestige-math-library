---
id: rem-d4-region-poset-artin-tits-normalisers
kind: remark
title: D4 grading, region poset and simple-morphism divisibility
status: published
domain: mathematics
origin: pipeline
deps:
  - ex-d4-labelled-chamber-graph-artin-tits-normalisers
  - lem-standard-geodesic-artin-tits-normalisers
  - thm-spherical-deligne-topology-artin-tits-normalisers
  - ex-d4-normaliser-orbits-artin-tits-normalisers
  - prop-gallery-separation-interface-artin-tits-prerequisites
  - def-garside-interface-artin-tits-prerequisites
  - math:def-partial-order
  - thm-deligne-simplicial-input-artin-tits-prerequisites
  - ex-d4-restricted-arrangement-artin-tits-normalisers
  - def-standard-expressions-artin-tits-normalisers
dependency_roles:
  ex-d4-labelled-chamber-graph-artin-tits-normalisers: mathematical-premise
  lem-standard-geodesic-artin-tits-normalisers: mathematical-premise
  thm-spherical-deligne-topology-artin-tits-normalisers: mathematical-premise
  ex-d4-normaliser-orbits-artin-tits-normalisers: mathematical-premise
  prop-gallery-separation-interface-artin-tits-prerequisites: mathematical-premise
  def-garside-interface-artin-tits-prerequisites: mathematical-premise
  math:def-partial-order: mathematical-premise
  thm-deligne-simplicial-input-artin-tits-prerequisites: mathematical-premise
  ex-d4-restricted-arrangement-artin-tits-normalisers: mathematical-premise
  def-standard-expressions-artin-tits-normalisers: mathematical-premise
proof_strategy: separation
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Hankyung Ko, An atomic Coxeter presentation
      url: https://arxiv.org/abs/2312.16666v3
      locator: §8.2, PDF pp. 28–29, especially diagram immediately before Remark 8.6
        on p. 29
      statement: The diagram of the weak Bruhat poset on the central-singleton
        core-coset collection has eight rows of sizes 1,3,6,6,6,6,3,1 from top
        to bottom; its numerals count atomic reduced expressions. Its complete
        edge transcription is given below.
      hypotheses: Coxeter type D4 with central generator c and P=SCcore_{ {c} } as
        specified at the start of §8.2. The diagram is monochrome and does not
        supply chamber colours.
      reading_limits: Read the §8.2 text on p. 28 and the diagram and surrounding text
        on p. 29 in arXiv v3. Inspected the rendered diagram and extracted its
        vector segments and numeral positions to transcribe every vertex and
        edge. No reconstruction of Ko's general atomic presentation theorem or
        Proposition 9.2 is claimed.
formulation_deps:
  - ex-d4-labelled-chamber-graph-artin-tits-normalisers
  - ex-d4-restricted-arrangement-artin-tits-normalisers
  - def-standard-expressions-artin-tits-normalisers
  - lem-standard-geodesic-artin-tits-normalisers
  - prop-gallery-separation-interface-artin-tits-prerequisites
  - thm-spherical-deligne-topology-artin-tits-normalisers
  - def-garside-interface-artin-tits-prerequisites
  - ex-d4-normaliser-orbits-artin-tits-normalisers
  - math:def-partial-order
  - thm-deligne-simplicial-input-artin-tits-prerequisites
argument_deps:
  - ex-d4-labelled-chamber-graph-artin-tits-normalisers
  - lem-standard-geodesic-artin-tits-normalisers
  - thm-spherical-deligne-topology-artin-tits-normalisers
  - ex-d4-normaliser-orbits-artin-tits-normalisers
  - prop-gallery-separation-interface-artin-tits-prerequisites
  - def-garside-interface-artin-tits-prerequisites
  - math:def-partial-order
  - thm-deligne-simplicial-input-artin-tits-prerequisites
  - ex-d4-restricted-arrangement-artin-tits-normalisers
  - def-standard-expressions-artin-tits-normalisers
dependency_level: 20
---

## Statement

The $D_4$ chamber graph is graded by distance from $C=(e,2)$, equivalently by standard-expression length $\ell_{\mathcal{BH}}(x)$ for a label $(x,I)$. Here a standard expression is a composable factorisation into simple wall-crossing morphisms whose Coxeter lengths add to the Coxeter length of their product. The notation $\ell_{\mathcal{BH}}(x)$ means the common number of factors in standard expressions for $x:\{2\}\to I$; its independence of the expression is verified below. Singleton second labels are abbreviated, so $(x,i)$ means $(x,\{i\})$. Define the region order by $A\leq B$ if $S(A)\subseteq S(B)$, where $S(A)$ is the subset of the seven arrangement hyperplanes that separate $C$ from $A$. Its Hasse diagram, meaning its graph of cover relations, is this graded chamber graph. Its minimum is $C$ and its maximum is $-C=(stuvtsutvtu,2)$. It is also the left-divisibility diagram of simple arrows with source $C$ in the positive Garside category underlying $\mathcal D$.

The underlying graph agrees with Ko's diagram immediately before Remark 8.6, with the vertical orientation reversed. The full correspondence is given below. The chamber colours record second labels: black $1$, red $2$, green $3$, blue $4$. Together with the specified base chamber and the edges of the diagram, these uniquely determine all chamber labels. Ko's original diagram is monochrome; its numerical labels count reduced atomic expressions and are not chamber colours.

## External input

Ko §8.2 takes $D_4$ with central generator $c$ and the core-coset collection indexed by $\{c\}$. On PDF p. 29 its diagram has rows of sizes $1,3,6,6,6,6,3,1$ from top to bottom. The preceding paragraph says that a numeral on a vertex is the number of atomic reduced expressions for that element. All vertices and edges of that displayed graph are transcribed in the next two tables. This is an input from Ko, not from the article under study.

Number Ko's rows $r=0,\ldots,7$ from top to bottom, and positions within each row from left to right. In the table, vertex numbers refer to [[ex-d4-labelled-chamber-graph-artin-tits-normalisers]]. Colour codes $B,R,G,U$ mean black, red, green, blue, respectively.

| Ko row | Corresponding chamber vertices, left to right | Chamber colours | Ko numerals |
|---|---|---|---|
| 0 | 7 | R | 1 |
| 1 | 4,16,15 | B,G,U | 1,1,1 |
| 2 | 2,6,10,22,14,21 | B,B,G,G,U,U | 1,1,1,1,1,1 |
| 3 | 1,3,9,25,28,20 | R,B,R,G,R,U | 2,2,2,2,2,2 |
| 4 | 8,5,13,32,30,24 | U,R,G,R,B,R | 2,2,2,2,2,2 |
| 5 | 11,23,12,19,31,27 | U,U,G,G,B,B | 4,4,4,4,4,4 |
| 6 | 17,18,29 | U,G,B | 8,8,8 |
| 7 | 26 | R | 24 |

Each pair $(i,j)$ in the next table is the edge from position $i$ of row $r$ to position $j$ of row $r+1$. There are no other edges.

| Row $r$ | Pairs $(i,j)$ |
|---|---|
| 0 | $(1,1),(1,2),(1,3)$ |
| 1 | $(1,1),(1,2),(2,3),(2,4),(3,5),(3,6)$ |
| 2 | $(1,1),(1,2),(2,2),(2,3),(3,1),(3,4),(4,4),(4,5),(5,3),(5,6),(6,5),(6,6)$ |
| 3 | $(1,1),(2,2),(3,3),(4,4),(5,5),(6,6)$ |
| 4 | $(1,1),(1,2),(2,1),(2,3),(3,3),(3,4),(4,2),(4,5),(5,5),(5,6),(6,4),(6,6)$ |
| 5 | $(1,1),(2,1),(3,2),(4,2),(5,3),(6,3)$ |
| 6 | $(1,1),(2,1),(3,1)$ |

## Statement references

[[ex-d4-labelled-chamber-graph-artin-tits-normalisers]]

[[lem-standard-geodesic-artin-tits-normalisers]]

[[thm-spherical-deligne-topology-artin-tits-normalisers]]

[[ex-d4-normaliser-orbits-artin-tits-normalisers]]

[[prop-gallery-separation-interface-artin-tits-prerequisites]]

[[def-garside-interface-artin-tits-prerequisites]]

[[math:def-partial-order]]

[[thm-deligne-simplicial-input-artin-tits-prerequisites]]

[[ex-d4-restricted-arrangement-artin-tits-normalisers]]

[[def-standard-expressions-artin-tits-normalisers]]

## Facts & Assumptions


[F1] The completed chamber-graph example supplies all 32 labels and exactly 48 adjacency pairs; vertex 7 has label $(e,2)$ and vertex 26 has label $(stuvtsutvtu,2)$. The completed normaliser-orbit example supplies the colour key by second labels. [[ex-d4-labelled-chamber-graph-artin-tits-normalisers]] [[ex-d4-normaliser-orbits-artin-tits-normalisers]]

[F2] Gallery distance is the number of separating hyperplanes; shortest galleries cross exactly those hyperplanes. Every Brink–Howlett morphism has a standard expression. Standard expressions lift uniquely to geodesic galleries and conversely, preserving the number of factors/crossings. [[prop-gallery-separation-interface-artin-tits-prerequisites]] [[lem-standard-geodesic-artin-tits-normalisers]]

[F3] This finite central restricted arrangement is simplicial. For such an arrangement the positive gallery category has antipodal Garside arrow $\Delta_A=u(A,-A)$, and its simple arrows are minimal galleries modulo common-endpoint minimal-gallery relations. A simple arrow means a left divisor of $\Delta_A$. [[thm-spherical-deligne-topology-artin-tits-normalisers]] [[thm-deligne-simplicial-input-artin-tits-prerequisites]] [[def-garside-interface-artin-tits-prerequisites]]

[F4] The relative space is all of $\Theta_J$, and its arrangement consists of seven distinct central hyperplanes, the kernels of the seven restricted root evaluations specified in the restricted-arrangement example. [[ex-d4-restricted-arrangement-artin-tits-normalisers]]

[F5] A standard expression is a composable sequence of simple wall-crossing morphisms whose Coxeter lengths add to the length of their product. Its expression length is the number of factors; the empty expression has zero factors. The notation $\ell_{\mathcal{BH}}(x)$ for a morphism is used only after existence and independence of this count have been established. [[def-standard-expressions-artin-tits-normalisers]]

## Verification


**Given:** The completed $D_4$ chamber graph, the suppliers [F1]–[F5], and Ko's independently transcribed diagram.

**Goal:** Establish the region and divisibility descriptions and the full diagram correspondence.

1.1 For each of the seven hyperplanes, two chambers lie on opposite sides precisely when exactly one of them lies opposite $C$. Thus the hyperplanes separating $A$ and $B$ form $S(A)\mathbin{\triangle}S(B)$, and [F2] gives $d(A,B)=|S(A)\mathbin{\triangle}S(B)|$. In particular, $S(A)=S(B)$ implies $d(A,B)=0$ and hence $A=B$. Set inclusion is reflexive, antisymmetric and transitive, so the displayed relation is a partial order in the sense of [[math:def-partial-order]]. Also $d(C,A)=|S(A)|$. [F1, F2, F4]

2.1 For a label $(x,I)$, [F2] supplies a standard expression for the morphism $x:\{2\}\to I$. Every such expression lifts from $(e,2)$ to a geodesic ending at $(x,I)$, with one crossing per factor. Hence every expression has exactly $d(C,(x,I))$ factors. This proves the existence and independence required for the notation in [F5] and gives $\ell_{\mathcal{BH}}(x)=d(C,(x,I))=|S((x,I))|$. At $x=e$ the empty expression has zero factors, agreeing with the distance. [F2, F5, step 1.1]

2.2 By [F3], for each chamber $A$ there is exactly one simple arrow $u(C,A)$, the class of its minimal galleries. It left-divides $u(C,B)$ precisely when a minimal gallery from $C$ to $B$ can pass through $A$. Indeed all relations preserve path length, so a factorisation between these minimal arrows has additive lengths; conversely such a gallery gives a factorisation. By [F2], length additivity here is $|S(A)|+|S(A)\mathbin{\triangle}S(B)|=|S(B)|$, which is equivalent to $S(A)\subseteq S(B)$. Thus the simple-arrow divisibility order is exactly the region order. [F1, F2, F3, step 1.1]

3.1 If $S(A)\subseteq S(B)$, a shortest gallery from $A$ to $B$ crosses exactly the hyperplanes in $S(B)\setminus S(A)$, so its intermediate separation sets increase one at a time. Thus a cover in the region order is exactly an adjacent pair whose ranks differ by one. Every adjacent pair differs in one sign, so it is such a cover in one direction. The empty separation set gives the minimum $C$, vertex 7. By [F4], negation preserves the arrangement and sends $C$ to a chamber $-C$ lying across every hyperplane from $C$. Thus $S(-C)$ is the full seven-element set, so $-C$ is the maximum and has rank seven. This proves the grading and the geometric description of both extrema; the graph calculation below identifies the label of $-C$. [F1, F2, F4, step 1.1, step 2.1]

4.1 Use the first table to define the bijection from Ko's 32 vertices to the 32 chamber vertices. For each row of the second table, substitution gives adjacency pairs from [F1]; conversely their numbers are $3,6,12,6,12,6,3$, totaling 48, with distinct endpoints and no repetitions. These exhaust [F1]'s 48 pairs. Thus both vertices and edges correspond. Every listed edge joins consecutive rows, and every vertex in a positive-numbered row has a neighbour in the preceding row. Consequently a vertex in row $r$ has a path of length $r$ from vertex 7, and no shorter path can reach its row. Its graph distance and rank are therefore $r$. Row 7 consists only of vertex 26, so step 3.1 identifies this vertex as $-C$, with label $(stuvtsutvtu,2)$ from [F1]. This is a calculation from the complete adjacency graph, requiring no imported vertex sign strings. Ko places row 0 at the top, whereas the article's region diagram places $C$ at the bottom; this is the asserted opposite vertical orientation. No reversal of the definition of set inclusion is needed. [F1, step 1.1, step 3.1]

5.1 The second label of every chamber in the first table gives exactly the stated transported colour by [F1]. Ko's printed numerals instead count reduced atomic expressions. Starting with 1 at row 0 and summing along incoming edges gives successive rows $1$; $1,1,1$; six $1$'s; six $2$'s; six $2$'s; six $4$'s; three $8$'s; $24$, agreeing with his numerical annotations. The comparison does not identify these numerals with chamber labels or orbit colours. [F1, step 4.1]

6.1 The coloured graph with its specified base determines the chamber labels uniquely. To make the uniqueness explicit, graph distance from the base fixes every row. Row 1 has three different colours, so its vertices are fixed. In row 3, the three red vertices have rank-2 neighbours of colour pairs $\{B,G\}$, $\{B,U\}$ and $\{G,U\}$, respectively, so they are individually distinguished. Each rank-2 vertex is then distinguished by its rank-1 neighbour and its red rank-3 neighbour. Each remaining rank-3 vertex is distinguished by its two rank-2 neighbours. The row-3 to row-4 edges are a perfect matching, fixing row 4; every row-5 vertex has a distinct pair of row-4 neighbours, and every row-6 vertex a distinct pair of row-5 neighbours. The final vertex is unique. Hence a colour-preserving automorphism fixing the base fixes every vertex. The completed labelled graph [F1] is one reconstruction, so it is the unique one on this coloured graph; its labelled crossings recover the displayed chamber labels. [F1, F2, step 4.1] ∎

## Source notes

Ko's diagram is used only for the independent finite diagram comparison. Its drawing is monochrome, so the colour column is a transport of the chamber colours, not a claim about colours printed by Ko. The explicit tables close the comparison without using the original article's assertion as a proof premise. No mathematical review or test receipt is claimed for this authoring proposal.
