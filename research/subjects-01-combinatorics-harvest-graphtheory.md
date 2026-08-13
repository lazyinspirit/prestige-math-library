# subjects-01 · combinatorics lane — STRUCTURAL AND EXTREMAL GRAPH THEORY source harvest

Research-only artifact. Written by the source-research subagent for the `combinatorics`
scaffolder lane of run `subjects-01`. No scaffold file, no `items/`, no `library/`, no
`plan-spec.json` was touched.

Harvest date: 2026-08-13.

---

## A. Source ledger

### A.1 Diestel — obtained IN FULL (all 12 chapters + appendices)

**Reinhard Diestel, _Graph Theory_, 5th edition, Graduate Texts in Mathematics 173,
Springer 2017 (corrected reprint).**

- Landing page: `https://diestel-graph-theory.com/` → `https://diestel-graph-theory.com/basic.html`
- Per-chapter free preview PDFs, all reachable, all downloaded and text-extracted:
  - Contents `https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Contents.pdf` (4 pp)
  - Ch1 `.../preview/Ch1.pdf` (35 pp) · Ch2 `.../Ch2.pdf` (25 pp) · Ch3 `.../Ch3.pdf` (30 pp)
  - Ch4 `.../Ch4.pdf` (30 pp) · Ch5 `.../Ch5.pdf` (32 pp) · Ch6 `.../Ch6.pdf` (23 pp)
  - Ch7 `.../Ch7.pdf` (48 pp) · Ch8 `.../Ch8.pdf` (75 pp) · Ch9 `.../Ch9.pdf` (20 pp)
  - Ch10 `.../Ch10.pdf` (16 pp) · Ch11 `.../Ch11.pdf` (23 pp) · Ch12 `.../Ch12.pdf` (54 pp)
  - Appendices `.../Appendices.pdf` (12 pp) · Hints `.../HintsPage.pdf`
- **Form obtained: FULL TEXT.** The "preview" PDFs are the complete chapters, not excerpts —
  411 pages of body text in total, covering the entire book. Every proof, every exercise,
  every chapter-end Notes section is present.
- **Range read: the entire book, chapters 1–12.** Chapter 5 (Colouring) and chapter 7
  (Extremal graph theory) were read line-by-line in full; chapters 1, 2, 3, 6, 8, 12 were read
  in full for the sections cited below; every numbered result in all 12 chapters was extracted
  mechanically together with Diestel's margin dependency references.

**Practical note for future harvests.** These PDFs are AES-encrypted with an empty user
password. `pypdf` alone raises `DependencyError: cryptography>=3.1 is required for AES
algorithm`. Install `cryptography` into the venv and call `reader.decrypt('')` when
`reader.is_encrypted`. Without that step a future session will wrongly conclude the source
is unreachable.

### A.2 Zhao — obtained IN FULL

**Yufei Zhao, _Graph Theory and Additive Combinatorics: Exploring Structure and Randomness_,
Cambridge University Press 2023; free author's version, last updated 18 June 2024.**

- Working URL: `https://yufeizhao.com/gtacbook/gtacbook.pdf` (landing page `https://yufeizhao.com/gtacbook/`).
  **The URL in the brief, `https://yufeizhao.com/gtac/`, does NOT serve the PDF** — both
  `/gtac/gtac.pdf` and `/gtac/gtacbook.pdf` 404. Use `/gtacbook/gtacbook.pdf`.
- **Form obtained: FULL TEXT**, 342 pp, unencrypted.
- **Range read:** front matter (Contents, Preface, Notation) plus **Chapter 1 (Forbidding a
  Subgraph) and Chapter 2 (Graph Regularity Method) in full**; chapters 3–9 at TOC granularity.
- This is the single best source for the regularity-method block, and it is the source that
  should back the library's regularity pages.

### A.3 Cambridge Part II Graph Theory — obtained IN FULL (two independent note sets)

- **I. B. Leader, _Graph Theory_, Part II, Michaelmas 2007**, 50 pp.
  `https://tartarus.org/gareth/maths/notes/ii/Graph_Theory.pdf` — full text; chapters 1–7 read.
  Contains the DPMMS official course schedule reproduced verbatim on its p. 2.
- **A. G. Thomason, _Graphs_, Part II, Michaelmas 2005**, LaTeXed by Sebastian Pancratz, 55 pp.
  `http://www.pancratz.org/notes/Graphs.pdf` — full text; chapters 1–7 read. Explicitly
  disclaimed as unofficial student notes, so it is a **convention tiebreaker, not primary backing**.
- `https://dec41.user.srcf.net/notes/II_L/graph_theory.pdf` is dead (404).

### A.4 Oxford course synopses — obtained (synopsis only)

- **B8.5 Graph Theory** (Oliver Riordan, Michaelmas, 16 lectures), 2025–26 run:
  `https://courses.maths.ox.ac.uk/course/view.php?id=6064`. Synopsis only, no notes.
- **C8.3 Combinatorics** (Alexander Scott, Michaelmas, 16 lectures, M-level), 2025–26 run:
  `https://courses.maths.ox.ac.uk/course/view.php?id=6104`. Synopsis only.
- These are syllabus statements, not treatments. They can corroborate that a topic is standard
  graduate material; they can never be a pair's primary backing.

### A.5 Schrijver — obtained IN FULL

**Alexander Schrijver, _A Course in Combinatorial Optimization_**, 221 pp, dated 23 March 2017.
`https://homepages.cwi.nl/~lex/files/dict.pdf` — full text; chapters 1–10 TOC read, chapters
3, 5, 7 read for content.

**Alexander Schrijver, _Advanced Graph Theory and Combinatorial Optimization_**, five
standalone parts, all live and full-text:
- I. Matchings and coverings — `https://homepages.cwi.nl/~lex/files/agt1.pdf`
- II. Stable sets and colourings — `https://homepages.cwi.nl/~lex/files/agt2.pdf`
- III. Disjoint paths — `https://homepages.cwi.nl/~lex/files/agt3.pdf`
- IV. Stable matchings — `https://homepages.cwi.nl/~lex/files/stable_matching.pdf`
- V. Szemerédi's regularity lemma — `https://homepages.cwi.nl/~lex/files/szem_rev.pdf`

**Alexander Schrijver, "A Pythagoras proof of Szemerédi's regularity lemma"**, 2 pp,
`https://homepages.cwi.nl/~lex/files/szem_pf3.pdf` — a **third, independent proof route** for
the regularity lemma, distinct from Diestel's and Zhao's. See §C.12.

### A.6 Harju — obtained IN FULL

**Tero Harju, _Lecture Notes on Graph Theory_, University of Turku, 1994–2012**, 98 pp.
`https://users.utu.fi/harju/graphtheory/graphtheory.pdf` — full text; chapters 1–6 read at
TOC and section granularity.

### A.7 Keller & Trotter — obtained IN FULL

**Mitchel T. Keller & William T. Trotter, _Applied Combinatorics_, 2017 Edition**, 393 pp,
CC BY-SA 4.0, used at Georgia Tech MATH 3012.
`https://www.rellek.net/book-2017/app-comb-2017.pdf` (home `https://appliedcombinatorics.org/appcomb/`)
— full text; chapters 5, 6, 11–14, 16 read at section granularity. **Undergraduate level** —
useful for conventions and for the poset/Dilworth interface, not for graduate extremal theory.

### A.8 West — obtained IN FULL (contents + preface, BOTH editions)

**Douglas B. West, _Introduction to Graph Theory_, Prentice Hall; 1st ed. 1996, 2nd ed. 2001.**
Author-published Contents + Preface, PostScript, converted locally:
- 2nd ed.: `https://dwest.web.illinois.edu/igt/igt2pref.ps`
- 1st ed.: `https://dwest.web.illinois.edu/igt/igtpref.ps`
- Book page: `https://dwest.web.illinois.edu/igt/`

**Form obtained: complete Contents to named-subsection level, for both editions, from the
author's own site**, plus the full preface. This is the most authoritative possible source for
the chapter 6/7 question, and it settles it — see §B.4.2.

### A.9 Bondy & Murty — obtained IN FULL (both books)

- **J. A. Bondy and U. S. R. Murty, _Graph Theory_, GTM 244, Springer 2008.** Full-text PDF
  mirror, 654 pp, text-extracted:
  `https://raw.githubusercontent.com/chanqi4444/GTM/master/GTM244.Graph.Theory,.Bondy,.J.A.,.Murty,.U.S.R.,.(2007,.ISBN.978-1-84628-969-9).1846289696.pdf`
  Form: FULL TEXT; master Contents plus every chapter's own contents sub-page read.
  *(Mirror of a copyrighted Springer book; cite the book, and prefer the Springer product page
  `https://link.springer.com/book/10.1007/978-1-84628-970-5` as the reader-facing URL.)*
- **J. A. Bondy and U. S. R. Murty, _Graph Theory with Applications_, Macmillan/North-Holland
  1976.** Full-text scan hosted by the Zuse Institute Berlin for a Grötschel course, 270 pp:
  `https://www.zib.de/groetschel/teaching/WS1314/BondyMurtyGTWA.pdf`
  Form: FULL TEXT, reachable in full.

### A.10 Bollobás — PARTIAL

- **Béla Bollobás, _Modern Graph Theory_, GTM 184, Springer 1998.** Contents to section level,
  from the Göttingen State and University Library front-matter scan:
  `https://www.gbv.de/dms/goettingen/240955692.pdf`. **Form: TOC only.**
- **Béla Bollobás, _Extremal Graph Theory_, Academic Press 1978 / Dover 2004.**
  **Form: chapter list only** — see §F, this is the one genuine blocker in the harvest.

---

## B. The canonical-coverage harvest — Diestel, _Graph Theory_ 5th ed.

### B.0 Verbatim table of contents (chapter and section headings, Diestel's own numbering)

Reproduced exactly as the `Contents.pdf` states them. An asterisk `*` marks sections Diestel
recommends for a first course; `(*)` marks sections whose beginning is recommended.

```
Preface

1. The Basics                                              1
   1.1  Graphs*                                            2
   1.2  The degree of a vertex*                            5
   1.3  Paths and cycles*                                  6
   1.4  Connectivity*                                     10
   1.5  Trees and forests*                                13
   1.6  Bipartite graphs*                                 17
   1.7  Contraction and minors*                           18
   1.8  Euler tours*                                      21
   1.9  Some linear algebra                               23
   1.10 Other notions of graphs                           27
   Exercises 29 · Notes 34

2. Matching, Covering and Packing                         37
   2.1  Matching in bipartite graphs*                     38
   2.2  Matching in general graphs(*)                     43
   2.3  The Erdős–Pósa theorem                            47
   2.4  Tree packing and arboricity                       50
   2.5  Path covers                                       54
   Exercises 56 · Notes 59

3. Connectivity                                           63
   3.1  2-Connected graphs and subgraphs*                 63
   3.2  The structure of 3-connected graphs(*)            66
   3.3  Menger's theorem*                                 71
   3.4  A-paths and Mader's theorem                       76
   3.5  Linking pairs of vertices(*)                      79
   Exercises 87 · Notes 90

4. Planar Graphs                                          93
   4.1  Topological prerequisites*                        94
   4.2  Plane graphs*                                     96
   4.3  Drawings                                         102
   4.4  Planar graphs: Kuratowski's theorem*             106
   4.5  Algebraic planarity criteria                     111
   4.6  Plane duality                                    114
   Exercises 117 · Notes 121

5. Colouring                                             123
   5.1  Colouring maps and planar graphs*                124
   5.2  Colouring vertices*                              126
   5.3  Colouring edges*                                 131
   5.4  List colouring                                   134
   5.5  Perfect graphs                                   139
   5.6  χ-bounded graph properties                       146
   Exercises 148 · Notes 152

6. Flows                                                 155
   6.1  Circulations(*)                                  156
   6.2  Flows in networks*                               158
   6.3  Group-valued flows                               161
   6.4  k-Flows for small k                              165
   6.5  Flow-colouring duality                           167
   6.6  Tutte's flow conjectures                         171
   Exercises 174 · Notes 176

7. Extremal Graph Theory                                 179
   7.1  Subgraphs*                                       180
   7.2  Minors(*)                                        185
   7.3  Hadwiger's conjecture*                           189
   7.4  Szemerédi's regularity lemma                     192
   7.5  Applying the regularity lemma                    200
   7.6  Two regularity tools                             206
   7.7  Szemerédi's theorem                              216
   Exercises 219 · Notes 223

8. Infinite Graphs                                       227
   8.1  Basic notions, facts and techniques*             228
   8.2  Paths, trees, and ends(*)                        237
   8.3  Homogeneous and universal graphs*                246
   8.4  Connectivity and matching                        249
   8.5  Recursive structures                             260
   8.6  Graphs with ends: the complete picture           263
   8.7  The topological cycle space                      272
   8.8  Infinite graphs as limits of finite ones         277
   Exercises 280 · Notes 293

9. Ramsey Theory for Graphs                              303
   9.1  Ramsey's original theorems*                      304
   9.2  Ramsey numbers(*)                                307
   9.3  Induced Ramsey theorems                          310
   9.4  Ramsey properties and connectivity(*)            316
   Exercises 319 · Notes 320

10. Hamilton Cycles                                      323
   10.1 Sufficient conditions*                           323
   10.2 Hamilton cycles and degree sequences             327
   10.3 Hamilton cycles in the square of a graph         330
   Exercises 335 · Notes 336

11. Random Graphs                                        339
   11.1 The notion of a random graph*                    340
   11.2 The probabilistic method*                        345
   11.3 Properties of almost all graphs*                 348
   11.4 Threshold functions and second moments           351
   Exercises 358 · Notes 360

12. Graph Minors                                         363
   12.1 Well-quasi-ordering(*)                           364
   12.2 The graph minor theorem for trees                365
   12.3 Tree-decompositions(*)                           367
   12.4 Tree-width(*)                                    371
   12.5 Tangles                                          376
   12.6 Tree-decompositions and forbidden minors         391
   12.7 The graph minor theorem(*)                       396
   Exercises 405 · Notes 412

A. Infinite sets                                         417
B. Surfaces                                              423
Hints for all the exercises                              431
Index 433 · Symbol index 451
```

**Note for the scaffolder:** the printed chapter-12 title in `Contents.pdf` is
**"Graph Minors"**; the chapter-12 running title in the body and the brief's expected name is
"Minors, Trees and WQO" (that is the 4th-edition title). The 5th edition renamed it. Use
"Graph Minors" when citing the 5th edition.

### B.1 Named-result headings, chapter by chapter (Diestel's numbering, verbatim names)

Notation used below, reproducing Diestel's own margin apparatus:
`used:` = the results Diestel prints in the margin *of that proof* (his `(x.y.z)` markers),
i.e. what the proof depends on. `→` = his `[x.y.z]` markers, i.e. later results that use this
one. Diestel's preface states that "apart from two clearly marked exceptions, any results used
in the proof of others precede them in the text", so the `used:` lists are a genuine
topological order.

#### Chapter 1 — The Basics

- **Proposition 1.2.1.** The number of vertices of odd degree in a graph is always even. → 10.3.1
- **Proposition 1.2.2.** Every graph *G* with at least one edge has a subgraph *H* with δ(H) > ε(H) ≥ ε(G). → 1.4.3, 7.2.2
- **Proposition 1.3.1.** Every graph *G* contains a path of length δ(G) and a cycle of length at least δ(G)+1 (provided that δ(G) ≥ 2). → 1.4.3, 7.2.2
- **Proposition 1.3.2.** Every graph *G* containing a cycle satisfies g(G) ≤ 2·diam(G)+1.
- **Proposition 1.3.3.** A graph *G* of radius at most *k* and maximum degree at most *d* ≥ 3 has fewer than (d/(d−2))(d−1)^k vertices. → 9.4.1, 9.4.2
- **Theorem 1.3.4. (Alon, Hoory & Linial 2002)** Let *G* be a graph. If d(G) ≥ d ≥ 2 and g(G) ≥ g ∈ ℕ then |G| ≥ n₀(d,g). *(stated without proof)*
- **Corollary 1.3.5.** If δ(G) ≥ 3 then g(G) < 2 log|G|. → 2.3.1
- **Proposition 1.4.1.** The vertices of a connected graph *G* can always be enumerated, say as v₁,…,vₙ, so that Gᵢ := G[v₁,…,vᵢ] is connected for every *i*. → 1.5.2
- **Proposition 1.4.2.** If *G* is non-trivial then κ(G) ≤ λ(G) ≤ δ(G). → 3.2.1
- **Theorem 1.4.3. (Mader 1972)** Let 0 ≠ k ∈ ℕ. Every graph *G* with d(G) ≥ 4k has a *k*-connected subgraph. In fact, every such *G* has a (k+1)-connected subgraph *H* such that d(H) > d(G) − 2k ≥ 2k. → 7.2.3, 11.2.3
- **Theorem 1.5.1.** The following assertions are equivalent for a graph *T*: (i) *T* is a tree; (ii) any two vertices of *T* are linked by a unique path in *T*; (iii) *T* is minimally connected …. → 1.6.1, 1.9.5, 4.2.9
- **Corollary 1.5.2.** A connected graph with *n* vertices is a tree if and only if it has *n*−1 edges. → 1.9.5, 2.4.4, 4.2.9
- **Corollary 1.5.3.** If *T* is a tree and *G* is any graph with δ(G) ≥ |T|−1, then *T* is (isomorphic to) a subgraph of *G*. → 9.2.1, 9.2.3
- **Lemma 1.5.4.** Let *T* be a normal tree in *G*. (i) Any two vertices x,y of *T* that are incomparable in its tree-order are separated in *G* by the set ⌈x⌉ ∩ ⌈y⌉. (ii) If V(T)=V(G)=:V and S ⊆ V is down-closed …. → 8.2.3, 8.6.8
- **Proposition 1.5.5.** Every connected graph has a normal spanning tree. → 6.5.3, 8.2.4
- **Proposition 1.6.1.** A graph is bipartite if and only if it contains no odd cycle. → 1.9.4, 5.3.1, 6.4.2
- **Proposition 1.7.1.** The minor relation ≼ and the topological-minor relation are partial orderings on the class of finite graphs, i.e. they are reflexive, antisymmetric and transitive. → 12.6.1
- **Corollary 1.7.2.** Let *X* and *Y* be finite graphs. *X* is a minor of *Y* if and only if there are graphs G₀,…,Gₙ such that G₀=Y and Gₙ=X and each Gᵢ₊₁ arises from Gᵢ by deleting an edge, contracting an edge, or deleting a vertex.
- **Proposition 1.7.3.** (i) Every *TX* is also an *IX*; thus, every topological minor of a graph is also its (ordinary) minor. (ii) If Δ(X) ≤ 3, then every *IX* contains a *TX*. → 4.4.2, 7.3.1, 12.7.3
- **Theorem 1.8.1. (Euler 1736)** A connected graph is Eulerian if and only if every vertex has even degree. → 2.1.5, 10.3.1
- **Proposition 1.9.1.** The following assertions are equivalent for edge sets D ⊆ E: (i) D ∈ 𝒞(G); (ii) D is a (possibly empty) disjoint union of edge sets of cycles in G; (iii) all vertex degrees of (V,D) are even. → 4.5.1, 8.7.3
- **Proposition 1.9.2.** Together with ∅, the cuts in *G* form a subspace ℬ = ℬ(G) of ℰ(G). This space is generated by atomic cuts. → 4.6.3
- **Lemma 1.9.3.** Every cut is a disjoint union of bonds. → 4.6.2, 6.5.2
- **Theorem 1.9.4.** The cycle space 𝒞 and the cut space ℬ of any graph satisfy 𝒞 = ℬ^⊥ and ℬ = 𝒞^⊥. *used: 1.6.1, 1.10* → 4.6
- **Theorem 1.9.5.** Let *G* be a connected graph with *n* vertices and *m* edges, and let T ⊆ G a spanning tree. (i) The fundamental cuts and cycles of *G* with respect to *T* form bases of ℬ(G) and 𝒞(G) respectively …. → 4.5.1
- **Proposition 1.9.6.** (i) The kernel of *B* is 𝒞(G). (ii) The image of Bᵀ is ℬ(G).
- **Proposition 1.9.7.** BBᵀ = A + D.

#### Chapter 2 — Matching, Covering and Packing

- **Theorem 2.1.1. (König 1931)** The maximum cardinality of a matching in *G* is equal to the minimum cardinality of a vertex cover of its edges.
- **Theorem 2.1.2. (Hall 1935)** *G* contains a matching of *A* if and only if |N(S)| ≥ |S| for all S ⊆ A. **Diestel gives three proofs "of rather different character".** → 2.2.3
- **Corollary 2.1.3.** Every *k*-regular (k ≥ 1) bipartite graph has a 1-factor.
- **Theorem 2.1.4. (Gale & Shapley 1962)** For every set of preferences, *G* has a stable matching. → 5.4.4
- **Corollary 2.1.5. (Petersen 1891)** Every regular graph of positive even degree has a 2-factor. *used: 1.8.1*
- **Theorem 2.2.1. (Tutte 1947)** A graph *G* has a 1-factor if and only if q(G−S) ≤ |S| for all S ⊆ V(G).
- **Corollary 2.2.2. (Petersen 1891)** Every bridgeless cubic graph has a 1-factor.
- **Theorem 2.2.3. (Gallai 1964; Edmonds 1965)** Every graph *G* has a set *S* of vertices with the following two properties: (i) *S* is matchable to 𝒞_{G−S}; (ii) every component of G−S is factor-critical. Given any such set *S*, the graph *G* contains a 1-factor if and only if |S| = |𝒞_{G−S}|. *used: 2.1.2*
- **Lemma 2.3.1.** Let k ∈ ℕ, and let *H* be a cubic multigraph. If |H| ≥ s_k, then *H* contains *k* disjoint cycles. *used: 1.3.5*
- **Theorem 2.3.2. (Erdős & Pósa 1965)** There is a function f: ℕ→ℕ such that, given any k ∈ ℕ, every graph contains either *k* disjoint cycles or a set of at most f(k) vertices meeting all its cycles.
- **Theorem 2.4.1. (Nash-Williams 1961; Tutte 1961) — "tree packing theorem"** A multigraph contains *k* edge-disjoint spanning trees if and only if for every partition *P* of its vertex set it has at least k(|P|−1) cross-edges. → 8.6.9
- **Corollary 2.4.2.** Every 2k-edge-connected multigraph has *k* edge-disjoint spanning trees. *(used at 6.4.4)*
- **Theorem 2.4.3. (Nash-Williams 1964) — "tree covering theorem"** The edges of a multigraph G=(V,E) can be covered by at most *k* trees if and only if ‖G[U]‖ ≤ k(|U|−1) for every non-empty set U ⊆ V.
- **Theorem 2.4.4. (Bowler & Carmesin 2015) — "packing-covering theorem"** For every connected multigraph G=(V,E) and every k ∈ ℕ there is a partition *P* of *V* such that every G[U] with U ∈ P has *k* edge-disjoint spanning trees and the edges … *used: 1.5.2*
- **Lemma 2.4.5.** If e₀ starts an exchange chain with respect to 𝒯 and lies in two of its trees, then there is a family 𝒯′ of *k* spanning trees of *G* such that E(𝒯) ⊊ E(𝒯′).
- **Theorem 2.5.1. (Gallai & Milgram 1960)** Every directed graph *G* has a path cover 𝒫 and an independent set {v_P | P ∈ 𝒫} of vertices such that v_P ∈ P for every P ∈ 𝒫.
- **Corollary 2.5.2. (Dilworth 1950)** In every finite partially ordered set (P,≤), the minimum number of chains with union *P* is equal to the maximum cardinality of an antichain in *P*.

#### Chapter 3 — Connectivity

- **Proposition 3.1.1.** A graph is 2-connected if and only if it can be constructed from a cycle by successively adding *H*-paths to graphs *H* already constructed. → 4.2.6 *(this is Diestel's form of the open-ear-decomposition theorem)*
- **Lemma 3.1.2.** Let *G* be any graph. (i) The cycles in *G* are precisely the cycles in its blocks. (ii) The bonds of *G* are precisely the bonds of its blocks. → 4.6
- **Lemma 3.1.3.** The following statements are equivalent for distinct edges e,f of a graph *G*: (i) the edges e,f belong to a common block of *G*; (ii) the edges e,f belong to a common cycle in *G*; …. → 4.6
- **Lemma 3.1.4.** The block graph of a connected graph is a tree.
- **Lemma 3.2.1.** Let *e* be an edge in a graph *G*. If G·e is 3-connected, then so is *G*. *used: 1.4.2*
- **Lemma 3.2.2.** Every 3-connected graph G ≠ K⁴ has an edge *e* such that G·e is another 3-connected graph.
- **Theorem 3.2.3. (Tutte 1966) — the wheel theorem** A graph *G* is 3-connected if and only if there exists a sequence G₀,…,Gₙ of graphs such that (i) G₀ = K⁴ and Gₙ = G; (ii) Gᵢ₊₁ has an edge *e* such that Gᵢ = Gᵢ₊₁·e, for every i < n. Moreover, …
- **Lemma 3.2.4.** Every 3-connected graph G ≠ K⁴ has an edge *e* such that G/e is again 3-connected. → 4.4.3
- **Theorem 3.2.5. (Tutte 1961)** A graph *G* is 3-connected if and only if there exists a sequence G₀,…,Gₙ of graphs with the following two properties: (i) G₀ = K⁴ and Gₙ = G; (ii) Gᵢ₊₁ has an edge xy such that d(x), d(y) ≥ 3 and Gᵢ = Gᵢ₊₁/xy.
- **Theorem 3.2.6. (Tutte 1963)** The cycle space of every 3-connected graph *G* is generated by its non-separating induced cycles. → 4.5.2
- **Theorem 3.3.1. (Menger 1927)** Let G=(V,E) be a graph and A,B ⊆ V. Then the minimum number of vertices separating *A* from *B* in *G* is equal to the maximum number of disjoint A–B paths in *G*. → 3.5.2, 8.2.5, 8.4.3, 12.4.3, 12.6.3
- **Lemma 3.3.2.** If an alternating walk *W* as above ends in B ∖ V[𝒫], then *G* contains a set of disjoint A–B paths exceeding 𝒫. → 8.4.7
- **Lemma 3.3.3.** If no alternating walk *W* as above ends in B ∖ V[𝒫], then *G* contains an A–B separator on 𝒫. → 8.4.7
- **Corollary 3.3.4.** For B ⊆ V and a ∈ V∖B, the minimum number of vertices separating *a* from *B* in *G* is equal to the maximum number of paths forming an a–B fan in *G*.
- **Corollary 3.3.5.** Let *a* and *b* be two distinct vertices of *G*. (i) If ab ∉ E, then the minimum number of vertices separating *a* from *b* in *G* is equal to the maximum number of independent a–b paths in *G*. (ii) [edge version].
- **Theorem 3.3.6. (Global Version of Menger's Theorem)** (i) A graph is *k*-connected if and only if it contains *k* independent paths between any two vertices. (ii) A graph is *k*-edge-connected if and only if it contains *k* edge-disjoint paths between any two vertices. → 4.2.7, 6.6.1, 9.4.2
- **Theorem 3.4.1. (Gallai 1961)** Let *A* be a set of vertices in a graph *G*, and k ≥ 1 an integer. Then *G* either contains *k* disjoint A-paths or has a set of at most 2k−2 vertices that meets every A-path.
- **Theorem 3.4.2. (Mader 1978)** Given a graph *G* with an induced subgraph *H*, there are always M_H(G) independent H-paths in *G*.
- **Lemma 3.5.1.** There is a function h: ℕ→ℕ such that, for every r ∈ ℕ, every graph of average degree at least h(r) contains K^r as a topological minor.
- **Theorem 3.5.2. (Jung 1970; Larman & Mani 1970)** There is a function f: ℕ→ℕ such that every f(k)-connected graph is *k*-linked, for all k ∈ ℕ. *used: 3.3.1*
- **Theorem 3.5.3. (Thomas & Wollan 2005)** Let *G* be a graph and k ∈ ℕ. If *G* is 2k-connected and ε(G) ≥ 8k, then *G* is *k*-linked. → 7.2.3
- **Lemma 3.5.4.** Any graph *H* with δ(H) ≥ 8k ≥ |H|/2 has a *k*-linked subgraph.

#### Chapter 4 — Planar Graphs

- **Theorem 4.1.1. (Jordan Curve Theorem for Polygons)** For every polygon P ⊆ ℝ², the set ℝ²∖P has exactly two regions. Each of these has the entire polygon *P* as its frontier. → 4.2.2, 4.2.5, 4.2.6, 4.2.7, 4.3.1, 4.5.1, 4.6.1, 5.1.2
- **Lemma 4.1.2.** Let P₁,P₂,P₃ be three arcs, between the same two endpoints but otherwise disjoint. (i) ℝ²∖(P₁∪P₂∪P₃) has exactly three regions, with frontiers …. → 4.2.6, 4.2.7, 4.2.8, 12.7.4
- **Lemma 4.1.3.** Let X₁,X₂ ⊆ ℝ² be disjoint sets, each the union of finitely many points and arcs, and let *P* be an arc between a point in X₁ and one in X₂ whose interior lies in a region *O* of ℝ²∖(X₁∪X₂) …. → 4.2.2, 4.2.4
- **Theorem 4.1.4.** Let φ: C₁→C₂ be a homeomorphism between two circles on S², let O₁ be a region of S²∖C₁, and let O₂ be a region of S²∖C₂. Then φ can be extended to a homeomorphism C₁∪O₁ → C₂∪O₂. → 4.3.1
- **Lemma 4.2.1.** Let *G* be a plane graph, f ∈ F(G) a face, and H ⊆ G a subgraph. (i) *H* has a face f′ containing *f*. (ii) If the frontier of *f* lies in *H*, then f′=f. → 4.4.3
- **Lemma 4.2.2.** Let *G* be a plane graph and *e* an edge of *G*. (i) If *X* is the frontier of a face of *G*, then either e ⊆ X or X ∩ e̊ = ∅. (ii) If *e* lies on a cycle C ⊆ G, then *e* lies on the frontier of exactly two faces …. → 4.5.1, 4.5.2, 12.7.4
- **Corollary 4.2.3.** The frontier of a face is always the point set of a subgraph.
- **Proposition 4.2.4.** A plane forest has exactly one face. *used: 4.1.3* → 4.6.1
- **Lemma 4.2.5.** If a plane graph has different faces with the same boundary, then the graph is a cycle. *used: 4.1.1* → 4.3.1
- **Proposition 4.2.6.** In a 2-connected plane graph, every face is bounded by a cycle. *used: 3.1.1, 4.1.1, 4.1.2* → 4.3.1, 4.4.3, 4.5.1, 4.5.2
- **Proposition 4.2.7.** The face boundaries in a 3-connected plane graph are precisely its non-separating induced cycles. → 4.3.2, 4.5.2
- **Proposition 4.2.8.** A plane graph of order at least 3 is maximally plane if and only if it is a plane triangulation. → 4.4.1, 5.4.2
- **Theorem 4.2.9. (Euler's Formula)** Let *G* be a connected plane graph with *n* vertices, *m* edges, and ℓ faces. Then n − m + ℓ = 2. *used: 1.5.1, 1.5.2*
- **Corollary 4.2.10.** A plane graph with n ≥ 3 vertices has at most 3n−6 edges. Every plane triangulation with *n* vertices has 3n−6 edges. → 4.4.1, 5.1.2, 7.3.5
- **Corollary 4.2.11.** A plane graph contains neither K⁵ nor K₃,₃ as a topological minor. → 4.4.5, 4.4.6, 5.1.2
- **Theorem 4.3.1.** (i) Every graph-theoretical isomorphism between two plane graphs is combinatorial. Its extension to a face bijection is unique if and only if the graph is not a cycle. (ii) Every combinatorial isomorphism between two plane graphs is topological …
- **Theorem 4.3.2. (Whitney 1933)** Any two planar embeddings of a 3-connected graph are equivalent. *used: 4.2.7, 4.3.1* → 12.7.4
- **Proposition 4.4.1.** (i) Every maximal plane graph is maximally planar. (ii) A planar graph with n ≥ 3 vertices is maximally planar if and only if it has 3n−6 edges.
- **Lemma 4.4.2.** A graph contains K⁵ or K₃,₃ as a minor if and only if it contains K⁵ or K₃,₃ as a topological minor. *used: 1.7.3*
- **Lemma 4.4.3.** Every 3-connected graph *G* without a K⁵ or K₃,₃ minor is planar. *used: 3.2.4, 4.2.1, 4.2.6*
- **Lemma 4.4.4.** Let 𝒳 be a set of 3-connected graphs. Let *G* be a graph with a proper separation {V₁,V₂} of order κ(G) ≤ 2. If *G* is edge-maximal without a topological minor in 𝒳, then so are G[V₁] and G[V₂] … → 7.3.1
- **Lemma 4.4.5.** [construction lemma used for Kuratowski]
- **Theorem 4.4.6. (Kuratowski 1930; Wagner 1937)** The following assertions are equivalent for graphs *G*: (i) *G* is planar; (ii) *G* contains neither K⁵ nor K₃,₃ as a minor; (iii) *G* contains neither K⁵ nor K₃,₃ as a topological minor. → 4.5.1, 5.1.2, 12.6.4
- **Corollary 4.4.7.** Every maximal planar graph with at least four vertices is 3-connected.
- **Theorem 4.5.1. (MacLane 1937)** A graph is planar if and only if its cycle space has a sparse basis. *used: 1.9.1, 1.9.5, 4.1.1, 4.2.6, 4.4.6* → 4.6.3
- **Theorem 4.5.2. (Kelmans 1978)** A 3-connected graph is planar if and only if every edge lies on at most (equivalently: exactly) two non-separating induced cycles. *used: 3.2.6, 4.2.6, 4.2.7*
- **Theorem 4.5.3. (Schnyder 1989)** A graph is planar if and only if its incidence poset has dimension ≤ 3. *(stated without proof)*
- **Proposition 4.6.1.** For any connected plane multigraph *G*, an edge set E ⊆ E(G) is the edge set of a cycle in *G* if and only if E* := {e* | e ∈ E} is a bond in G*. → 6.5.2
- **Proposition 4.6.2.** If G* is an abstract dual of *G*, then the cut space of G* is the cycle space of *G*, i.e. ℬ(G*) = 𝒞(G). *used: 1.9.2, 1.9.3*
- **Theorem 4.6.3. (Whitney 1932)** A graph is planar if and only if it has an abstract dual. *used: 1.9.2, 4.5.1*

#### Chapter 5 — Colouring  ← **the library's biggest gap; harvested exhaustively**

- **Theorem 5.1.1. (Four Colour Theorem)** Every planar graph is 4-colourable. *(stated without proof)*
- **Proposition 5.1.2. (Five Colour Theorem)** Every planar graph is 5-colourable.
  - *First proof* (Kempe-chain): *used: 4.1.1, 4.2.10*
  - *Second proof* (contraction/Woodall): *used: 4.2.10, 4.2.11, 4.4.6*
- **Theorem 5.1.3. (Grötzsch 1959)** Every planar graph not containing a triangle is 3-colourable. *(stated without proof)*
- **Proposition 5.2.1.** Every graph *G* with *m* edges satisfies χ(G) ≤ ½ + √(2m + ¼).
- **Proposition 5.2.2.** Every graph *G* satisfies χ(G) ≤ col(G) = max{δ(H) | H ⊆ G} + 1. *(the colouring number / degeneracy bound)*
- **Lemma 5.2.3.** Every *k*-chromatic graph has a *k*-chromatic subgraph of minimum degree at least k−1. → 7.3, 9.2.1, 9.2.3, 11.2.3
- **Theorem 5.2.4. (Brooks 1941)** Let *G* be a connected graph. If *G* is neither complete nor an odd cycle, then χ(G) ≤ Δ(G).
- **Theorem 5.2.5. (Erdős 1959)** For every integer *k* there exists a graph *G* with girth g(G) > k and chromatic number χ(G) > k. *(proved in ch. 11 as Theorem 11.2.2)* → 9.2.3
- **Theorem 5.2.6. (Hajós 1961)** Let *G* be a graph and k ∈ ℕ. Then χ(G) ≥ k if and only if *G* has a *k*-constructible subgraph. *(the Hajós construction is defined immediately before, as rules (i)–(iii))*
- **Proposition 5.3.1. (König 1916)** Every bipartite graph *G* satisfies χ′(G) = Δ(G). *used: 1.6.1* → 5.4.5
- **Theorem 5.3.2. (Vizing 1964)** Every graph *G* satisfies Δ(G) ≤ χ′(G) ≤ Δ(G)+1.
- **Theorem 5.3.3. (Csaba, Kühn, Lo, Osthus, Treglown 2016)** There exists an n₀ ∈ ℕ such that, for all even n ≥ n₀ and d ≥ n/2, every *d*-regular graph *G* of order *n* satisfies χ′(G) = Δ(G). *(stated without proof)*
- **Theorem 5.4.1. (Alon 1993)** There exists a function f: ℕ→ℕ such that, given any integer *k*, all graphs *G* with average degree d(G) ≥ f(k) satisfy ch(G) ≥ k. *(stated without proof; probabilistic)*
- **Theorem 5.4.2. (Thomassen 1994)** Every planar graph is 5-choosable. *used: 4.2.8*
- **Lemma 5.4.3.** Let *H* be a graph and (S_v)_{v∈V(H)} a family of lists. If *H* has an orientation *D* with d⁺(v) < |S_v| for every *v*, and such that every induced subgraph of *D* has a kernel, then *H* can be coloured from the lists S_v. *(the kernel lemma, Bondy–Boppana–Siegel)*
- **Theorem 5.4.4. (Galvin 1995)** Every bipartite graph *G* satisfies ch′(G) = χ′(G). *used: 2.1.4*
- **Corollary 5.4.5.** Every bipartite graph *G* satisfies ch′(G) = Δ(G). *used: 5.3.1*
- **List Colouring Conjecture.** Every graph *G* satisfies ch′(G) = χ′(G).
- **Proposition 5.5.1.** A graph is chordal if and only if it can be constructed recursively by pasting along complete subgraphs, starting from complete graphs. → 12.3.6
- **Proposition 5.5.2.** Every chordal graph is perfect. *used: 5.5.1*
- **Theorem 5.5.3. (Chudnovsky, Robertson, Seymour & Thomas 2006) — strong perfect graph theorem** A graph *G* is perfect if and only if neither *G* nor Ḡ contains an odd cycle of length at least 5 as an induced subgraph. *(stated without proof)*
- **Theorem 5.5.4. (Lovász 1972) — perfect graph theorem** A graph is perfect if and only if its complement is perfect. **Diestel gives two proofs.**
- **Lemma 5.5.5. (Replication Lemma)** Any graph obtained from a perfect graph by replicating a vertex is again perfect.
- **Theorem 5.5.6. (Lovász 1972)** A graph *G* is perfect if and only if |H| ≤ α(H)·ω(H) for all induced subgraphs H ⊆ G. *(Gasparian's linear-algebra proof; implies 5.5.4)*
- **Theorem 5.6.1. (Scott & Seymour 2016)** The graphs with no odd hole are χ-bounded. *(stated without proof)*
- **Proposition 5.6.2.** If *P* is any fixed path, then the graphs not containing *P* as an induced subgraph are χ-bounded.
- **Lemma 5.6.3.** There is a function g: ℕ²→ℕ such that χ(G) ≤ g(c,k) for every connected graph *G* satisfying (i) χ(G[N(v)]) ≤ c for every vertex v ∈ G; (ii) *G* has a vertex *v* at which no induced path of length *k* starts.
- **Conjecture. (Gyárfás 1975; Sumner 1981)** If *F* is any fixed forest, then the graphs not containing *F* as an induced subgraph are χ-bounded.

**Chapter-5 exercise headings that name results the library will want** (these are the topics
Diestel relegates to exercises, and they are exactly what a proper colouring development must
supply from other sources — see §C):
Ex. 4 chromatic number in terms of blocks · Ex. 5 homomorphism to K_k characterisation ·
Ex. 10–11 **critical graphs**: "A *k*-chromatic graph *G* is called *critically k-chromatic*, or
just *critical*, if χ(G−v) < k for every v ∈ V(G)"; Ex. 11 "Show that every critical
*k*-chromatic graph is (k−1)-edge-connected" (**Dirac**) · Ex. 14 arboricity vs colouring number ·
Ex. 17 **Lovász's proof of Brooks's theorem** via a good vertex ordering, decomposed into two
lemmas (i) and (ii) · Ex. 18 **Gallai–Roy**: "(i) χ(G) ≤ k; (ii) *G* has an orientation without
directed paths of length *k*; (iii) *G* has an acyclic such orientation" · Ex. 19 **chromatic
polynomial**: "Show that P_G is a polynomial in *k* of degree n := |G|, in which the coefficient
of kⁿ is 1 and the coefficient of k^{n−1} is −‖G‖. (P_G is called the *chromatic polynomial*
of *G*.)" · Ex. 20 characterise graphs with P_G(k)=k(k−1)^{n−1} · Ex. 22 **triangle-free
k-chromatic graphs** (Mycielski territory) · Ex. 23 the shift-graph-style triangle-free
construction · Ex. 24 alternative Hajós axioms · Ex. 25 Latin squares as a colouring problem ·
Ex. 26–27 χ′ of a *k*-regular bipartite graph without 5.3.1 · Ex. 28 cubic graphs decompose
into two linear forests · Ex. 29 every plane graph is 6-list-colourable · Ex. 30 2-chromatic
graphs of arbitrarily large choice number · Ex. 31 upper bound for ch′ in terms of χ′ ·
Ex. 33 "Prove that the choice number of K^r₂ is *r*" · Ex. 34 **total chromatic number** and the
**total colouring conjecture** χ″(G) ≤ Δ(G)+2 · Ex. 35–37 kernels; every digraph without odd
directed cycles has a kernel; bipartite planar graphs are 3-list-colourable · Ex. 41 complement
of a bipartite graph is perfect · Ex. 43 **comparability graphs are perfect** · Ex. 44 **interval
graphs**: every interval graph is chordal; the complement of an interval graph is a
comparability graph; the **Gilmore–Hoffman** converse · Ex. 45 χ(H) ∈ {ω(H), ω(H)+1} for a line
graph *H* · Ex. 48 perfection ⟺ every induced subgraph has an independent set meeting all
maximum cliques · Ex. 52 χ(G) ≥ max{ω(G), ⌈|G|/α(G)⌉}.

#### Chapter 6 — Flows

- **Proposition 6.1.1.** If *f* is a circulation, then f(X, X̄) = 0 for every set X ⊆ V. → 6.3.1, 6.5.2
- **Corollary 6.1.2.** If *f* is a circulation and e = xy is a bridge in *G*, then f(e,x,y) = 0.
- **Lemma 6.1.3.** Given any edge e₀ = xy of *G*, every circulation on G/e₀ extends to a circulation on *G*. → 6.3.1, 6.6.1
- **Proposition 6.2.1.** Every cut (S, S̄) in *N* satisfies f(S,S̄) = f(s,V).
- **Theorem 6.2.2. (Ford & Fulkerson 1956) — max-flow min-cut theorem** In every network, the maximum total value of a flow equals the minimum capacity of a cut.
- **Corollary 6.2.3.** In every network (with integral capacity function) there exists an integral flow of maximum total value.
- **Theorem 6.3.1. (Tutte 1954)** For every multigraph *G* there exists a polynomial *P* such that, for any finite abelian group *H*, the number of *H*-flows on *G* is P(|H|−1). *(this is the flow polynomial)*
- **Corollary 6.3.2.** If *H* and H′ are two finite abelian groups of equal order, then *G* has an *H*-flow if and only if *G* has an H′-flow. → 6.4.5, 6.6.1
- **Theorem 6.3.3. (Tutte 1950)** A multigraph admits a *k*-flow if and only if it admits a ℤ_k-flow. → 6.4.1, 6.4.2, 6.4.3, 6.4.5
- **Proposition 6.4.1.** A graph has a 2-flow if and only if all its degrees are even. *used: 6.3.3*
- **Proposition 6.4.2.** A cubic graph has a 3-flow if and only if it is bipartite. *used: 1.6.1, 6.3.3*
- **Proposition 6.4.3.** For all even n ≥ 4, φ(Kⁿ) = 3. *used: 6.3.3*
- **Proposition 6.4.4.** Every 4-edge-connected graph has a 4-flow. *used: 2.4.2*
- **Proposition 6.4.5.** [cubic graphs: a cubic graph has a 4-flow iff it is 3-edge-colourable] *used: 6.3.3, 6.3.2*
- **Corollary 6.4.6.** Every cubic 3-edge-colourable graph is bridgeless.
- **Lemma 6.5.1.** There exists a bijection ∗: e⃗ ↦ e⃗* from E⃗ to E⃗* with the following properties: (i) the underlying edge of e⃗* is always e*, …
- **Lemma 6.5.2.** (i) The map *g* satisfies (F1) if and only if *f* does. (ii) The map *g* is a circulation on G* if and only if *f* satisfies (F1) and f(C⃗)=0 for every cycle C⃗ with orientation. *used: 1.9.3, 4.6.1*
- **Theorem 6.5.3. (Tutte 1954) — flow-colouring duality** For every dual pair G, G* of plane multigraphs, χ(G) = φ(G*). *used: 1.5.5*
- **Five-Flow Conjecture. (Tutte 1954)** Every bridgeless multigraph has a 5-flow.
- **Four-Flow Conjecture. (Tutte 1966)** Every bridgeless multigraph not containing the Petersen graph as a minor has a 4-flow.
- **Three-Flow Conjecture. (Tutte 1972)** Every multigraph without a cut consisting of exactly one or exactly three edges has a 3-flow.
- **Theorem 6.6.1. (Seymour 1981)** Every bridgeless multigraph has a 6-flow. *used: 3.3.6, 6.1.3, 6.3.2, 6.3.3*

#### Chapter 7 — Extremal Graph Theory

- **Theorem 7.1.1. (Turán 1941)** For all integers r,n with r > 1, every graph G ⊉ K^r with *n* vertices and ex(n, K^r) edges is a T^{r−1}(n). **Diestel gives two proofs.** → 7.1.2, 9.2.2
- **Theorem 7.1.2. (Erdős & Stone 1946)** For all integers r ≥ 2 and s ≥ 1, and every ε > 0, there exists an integer n₀ such that every graph with n ≥ n₀ vertices and at least t_{r−1}(n) + εn² edges contains K^r_s as a subgraph. *used: 7.4.1, 7.5.2* *(proved via the regularity lemma in §7.5)*
- **Corollary 7.1.3.** For every graph *H* with at least one edge, lim_{n→∞} ex(n,H)·binom(n,2)^{−1} = (χ(H)−2)/(χ(H)−1). *(Erdős–Stone–Simonovits)*
- **Lemma 7.1.4.** lim_{n→∞} t_{r−1}(n)·binom(n,2)^{−1} = (r−2)/(r−1). → 7.1.2
- **Proposition 7.2.1.** Every graph of average degree at least 2^{r−2} has a K^r minor, for all r ∈ ℕ.
- **Proposition 7.2.2.** Every graph of average degree at least 2^{binom(r,2)} has a topological K^r minor, for every integer r ≥ 2. *used: 1.2.2, 1.3.1*
- **Theorem 7.2.3.** There is a constant c ∈ ℝ such that, for every r ∈ ℕ, every graph *G* of average degree d(G) ≥ cr² contains K^r as a topological minor. *used: 1.4.3, 3.5.3*
- **Theorem 7.2.4. (Kostochka 1982)** There exists a constant c ∈ ℝ such that, for every r ∈ ℕ, every graph *G* of average degree d(G) ≥ cr√(log r) contains K^r as a minor. *(stated without proof)*
- **Lemma 7.2.5.** Let d,k ∈ ℕ with d ≥ 3, and let *G* be a graph of minimum degree δ(G) ≥ d and girth g(G) > 8k+3. Then *G* has a minor *H* of minimum degree δ(H) ≥ d(d−1)^k.
- **Theorem 7.2.6. (Thomassen 1983)** There exists a function f: ℕ→ℕ such that every graph of minimum degree at least 3 and girth at least f(r) has a K^r minor, for all r ∈ ℕ.
- **Theorem 7.2.7. (Kühn & Osthus 2002)** There exists a constant *g* such that G ⊇ TK^r for every graph *G* satisfying δ(G) ≥ r−1 and g(G) ≥ g. → 7.3.9
- **Hadwiger's Conjecture. (Hadwiger 1943)** For every integer r > 0, every graph *G* with χ(G) ≥ r has a K^r minor.
- **Proposition 7.3.1.** A graph with at least three vertices is edge-maximal without a K⁴ minor if and only if it can be constructed recursively from triangles by pasting along K²s. *used: 1.7.3, 3.2.2, 4.4.4* → 12.6.2
- **Corollary 7.3.3.** Hadwiger's conjecture holds for r = 4. *used: 5.5.2, 7.3.1*
- **Theorem 7.3.4. (Wagner 1937)** Let *G* be an edge-maximal graph without a K⁵ minor. … *(stated without proof; the "Wagner decomposition" into 3-connected planar pieces and copies of the Wagner graph W)*
- **Corollary 7.3.5.** A graph with *n* vertices and no K⁵ minor has at most 3n−6 edges. *used: 4.2.10*
- **Corollary 7.3.6.** Hadwiger's conjecture holds for r = 5. *(uses the four colour theorem)*
- **Theorem 7.3.7. (Robertson, Seymour & Thomas 1993)** Hadwiger's conjecture holds for r = 6. *(stated without proof)*
- **Theorem 7.3.8. (Kühn & Osthus 2005)** For every integer *s* there is an integer r_s such that Hadwiger's conjecture holds for all graphs G ⊉ K_{s,s} and r ≥ r_s. *(stated without proof)*
- **Corollary 7.3.9.** There is a constant *g* such that all graphs *G* of girth at least *g* satisfy the implication χ(G) ≥ r ⇒ G ⊇ TK^r for all *r*. *used: 5.2.3, 7.2.7* *(Hajós's conjecture for large girth)*
- **Theorem 7.4.1. (Regularity Lemma)** For every ε > 0 and every integer m ≥ 1 there exists an integer *M* such that every graph of order at least *m* admits an ε-regular partition {V₀,V₁,…,V_k} with m ≤ k ≤ M. → 7.1.2, 9.2.2
- **Lemma 7.4.2.** (i) Let C,D ⊆ V be disjoint. If 𝒞 is a partition of *C* and 𝒟 is a partition of *D*, then q(𝒞,𝒟) ≥ q(C,D). (ii) If 𝒫, 𝒫′ are partitions of *V* and 𝒫′ refines 𝒫, then q(𝒫′) ≥ q(𝒫).
- **Lemma 7.4.3.** Let ε > 0, and let C,D ⊆ V be disjoint. If (C,D) is not ε-regular, then there are partitions 𝒞={C₁,C₂} of *C* and 𝒟={D₁,D₂} of *D* such that q(𝒞,𝒟) ≥ q(C,D) + ε⁴|C||D|/n².
- **Lemma 7.4.4.** Let 0 < ε ≤ 1/4, and let 𝒫 = {C₀,C₁,…,C_k} be a partition of *V*, with exceptional set C₀ of size |C₀| ≤ εn and |C₁|=…=|C_k| =: c. If 𝒫 is not ε-regular, then there is a partition 𝒫′ = {C₀′,C₁′,…,C_ℓ′} of *V* with exceptional set C₀′, where k ≤ ℓ ≤ k·4^{k+1}, such that |C₀′| ≤ |C₀| + n/2^k, all other sets C_i′ have equal size, and either 𝒫′ is ε-regular or q(𝒫′) ≥ q(𝒫) + ε⁵/2.
- **Lemma 7.5.1.** Let (A,B) be an ε-regular pair, of density *d* say, and let Y ⊆ B have size |Y| ≥ ε|B|. Then all but fewer than ε|A| of the vertices in *A* have (each) at least (d−ε)|Y| neighbours in *Y*.
- **Lemma 7.5.2. (Blow-up Lemma)** For all d ∈ (0,1] and Δ ≥ 1 there exists an ε₀ > 0 with the following property: if *G* is any graph, *H* is a graph with Δ(H) ≤ Δ, s ∈ ℕ, and *R* is any regularity graph of *G* with parameters ε ≤ ε₀, ℓ ≥ 2s/d^Δ and *d*, then H ⊆ R_s ⇒ H ⊆ G. → 9.2.2
- **Proposition 7.6.1.** Let ε > 0, and let *G* be a multipartite graph with vertex classes V₁,…,V_k whose pairs (Vᵢ,V_j) are (ε,d_{ij})-uniform in *G*. Then | |K_k(G)| − ∏_{i<j} d_{ij} · ∏_i |Vᵢ| | ≤ ε·binom(k,2)·∏_i |Vᵢ|.
- **Lemma 7.6.2. (Counting Lemma)** Let *R* be a graph on {1,…,k} ⊆ ℕ, and φ: H→R a homomorphism for some graph *H*. Let *G* be a multipartite graph with vertex classes V₁,…,V_k, whose pairs (Vᵢ,V_j) with ij ∈ E(R) are (ε,d_{ij})-uniform in *G* for some ε > 0 and various d_{ij} ≥ 0. Then | hom_φ(H,G) − ∏_{e∈E(H)} d_e^φ · ∏_{u∈V(H)} |V_{φ(u)}| | ≤ ε‖H‖ ∏_{u∈V(H)} |V_{φ(u)}|.
- **Lemma 7.6.3. (Removal Lemma)** For every graph *H* and every ρ > 0 there exist η > 0 and n₀ such that the following holds for all graphs *G* of order n ≥ n₀: if there are at most ηn^{|H|} injective homomorphisms H→G, then *G* contains a set *E* of at most ρn² edges such that H ⊄ G−E. *used: 7.4.1, 7.6.2*
- **Theorem 7.6.4.** Let *H* be any graph with at least 3 vertices. Let 𝒢 be a class of graphs over which their subgraphs isomorphic to *H* are spread thinly. Then for every γ > 0 there exists an integer n₀ such that every G ∈ 𝒢 of order n ≥ n₀ has at most γn² edges and contains at most γn² copies of *H*.
- **Corollary 7.6.5.** For every γ > 0 there exists an integer n₀ such that the following holds for every graph *G* of order n ≥ n₀: if every edge of *G* lies in exactly one triangle, then *G* has at most γn² edges. → 7.7.3 *(this is the triangle removal lemma in the form Diestel uses for Roth)*
- **Theorem 7.7.1. (Szemerédi 1975)** Every set A ⊆ ℕ of positive upper density contains arbitrarily long arithmetic progressions. *(stated without proof)*
- **Theorem 7.7.2.** For all integers k ≥ 3 we have lim_{n→∞} r_k(n)/n = 0. *(stated without proof)*
- **Proposition 7.7.3.** lim_{n→∞} r₃(n)/n = 0. *(Roth's theorem, proved from Corollary 7.6.5)* *used: 7.6.5*

#### Chapter 8 — Infinite Graphs

- **Proposition 8.1.1.** Every connected graph contains a spanning tree. *(first proof by Zorn's lemma; a second proof is given)*
- **Lemma 8.1.2. (König's Infinity Lemma)** Let V₀,V₁,… be an infinite sequence of disjoint non-empty finite sets, and let *G* be a graph on their union. Assume that every vertex *v* in a set V_n with n ≥ 1 has a neighbour f(v) in V_{n−1}. Then *G* contains a ray v₀v₁… with v_n ∈ V_n for all *n*. → 8.2.1, 8.2.6, 8.6.1, 8.6.10, 8.7.3, 9.1.3
- **Theorem 8.1.3. (de Bruijn & Erdős, 1951)** Let G=(V,E) be a graph and k ∈ ℕ. If every finite subgraph of *G* has chromatic number at most *k*, then so does *G*. **Diestel gives three proofs:** first for countable *G* by the infinity lemma; second for arbitrary *G* by the "compactness principle" of Appendix A; third for arbitrary *G* by Tychonoff's theorem on {1,…,k}^V.
- **Proposition 8.2.1.** Every infinite connected graph has a vertex of infinite degree or contains a ray. *used: 8.1.2*
- **Lemma 8.2.2. (Star-Comb Lemma)** Let *U* be an infinite set of vertices in a connected graph *G*. Then *G* contains either a comb with all teeth in *U* or a subdivision of an infinite star with all leaves in *U*. → 8.6.3
- **Lemma 8.2.3.** If *T* is a normal spanning tree of *G*, then every end of *G* contains exactly one normal ray of *T*. *used: 1.5.4* → 8.6.8
- **Theorem 8.2.4. (Jung 1967)** Every countable connected graph has a normal spanning tree. *used: 1.5.5* → 8.7.2
- **Theorem 8.2.5. (Halin 1965)** (i) If an infinite graph *G* contains *k* disjoint rays for every k ∈ ℕ, then *G* contains infinitely many disjoint rays. (ii) same for edge-disjoint rays.
- **Theorem 8.2.6. (Halin 1965)** Whenever a graph contains a thick end, it has a TH_∞ subgraph whose rays belong to that end. *used: 8.1.2*
- **Theorem 8.3.1. (Erdős & Rényi 1963)** There exists a unique countable graph *R* with property (∗). *(the Rado graph)* → 11.3.5
- **Proposition 8.3.2.** The Rado graph is the unique countable graph *G* other than K^{ℵ₀} and its complement such that, no matter how V(G) is partitioned into two parts, one of the parts induces an isomorphic copy of *G*.
- **Theorem 8.3.3. (Lachlan & Woodrow 1980)** Every countably infinite homogeneous graph is one of the following: a disjoint union of complete graphs of the same order, or the complement of such a graph; the graph *R*; …
- **Theorem 8.3.4. (Diestel & Kühn 1999)** There exists a universal planar graph for the minor relation.
- **Theorem 8.4.1. (Laviolette 2005)** Every graph has a bond-faithful decomposition into countable graphs.
- **Theorem 8.4.2. (Nash-Williams 1960)** Every graph with no odd cut has an edge-decomposition into cycles.
- **Proposition 8.4.3.** Let *G* be any graph, k ∈ ℕ, and let A,B be two sets of vertices in *G* that can be separated by *k* but no fewer than *k* vertices. Then *G* contains *k* disjoint A–B paths. *used: 3.3.1*
- **Theorem 8.4.4. (Aharoni & Berger 2009)** Let *G* be any graph, and let A,B ⊆ V(G). Then *G* contains a set 𝒫 of disjoint A–B paths and an A–B separator on 𝒫. *(the infinite Menger theorem / Erdős–Menger conjecture)*
- **Lemma 8.4.5 · Lemma 8.4.6 · Lemma 8.4.7** [the wave machinery for the countable case] *8.4.7 used: 3.3.2, 3.3.3*
- **Proposition 8.4.8.** Let *G* be a bipartite graph, with bipartition {A,B} say. If *G* contains a matching of *A* and a matching of *B*, then *G* has a 1-factor.
- **Theorem 8.4.9. (Pym 1969)** Let *G* be a graph, and let A,B ⊆ V(G). Suppose that *G* contains two sets of disjoint A–B paths, one covering *A* and one covering *B*. Then *G* contains a set of disjoint A–B paths covering …
- **Theorem 8.4.10. (Aharoni 1984)** Every bipartite graph has a matching, *M* say, and a vertex cover of its edge set that consists of exactly one vertex from every edge in *M*. *(the infinite König theorem)*
- **Corollary 8.4.11.** A bipartite graph with bipartition {A,B} contains a matching of *A* unless there is a set S ⊆ A such that *S* is not matchable to N(S) but N(S) is matchable to *S*.
- **Theorem 8.4.12. (Milner & Shelah 1974)** A bipartite graph with bipartition {A,B} contains a matching of *A* if d(a) ≥ 1 for every a ∈ A and d(a) ≥ d(b) for every edge ab with a ∈ A.
- **Theorem 8.4.13. (Steffens 1977)** A countable graph has a 1-factor if and only if for every partial matching there exists an augmenting path.
- **Theorem 8.4.14. (Aharoni 1988)** A graph *G* has a 1-factor if and only if, for every set S ⊆ V(G), the set 𝒞⁰_{G−S} is matchable to *S* in G⁰_S. *(the infinite Tutte theorem)*
- **Corollary 8.4.15.** Every graph G=(V,E) has a set *S* of vertices that is matchable to 𝒞⁰_{G−S} in G⁰_S and such that every component of G−S not in 𝒞⁰_{G−S} has a 1-factor. *(the infinite Gallai–Edmonds statement)*
- **Proposition 8.5.1.** A rooted tree is recursively prunable if and only if it contains no subdivision of the infinite binary tree T₂ as a subgraph.
- **Lemma 8.5.2.** A graph has a rank if and only if it is rayless.
- **Theorem 8.5.3.** Every countable rayless graph *G* has an unfriendly partition.
- **Proposition 8.6.1.** If *G* is connected and locally finite, then |G| is a compact Hausdorff space. *used: 8.1.2* *(the Freudenthal compactification)*
- **Lemma 8.6.3. (Jumping Arc Lemma)** Let F ⊆ E be a cut of *G* with sides V₁,V₂. (i) If *F* is finite, then V̄₁ ∩ V̄₂ = ∅, and there is no arc in |G|∖F̊ with one endpoint in V₁ and the other in V₂. (ii) If *F* is infinite, then …. → 8.7.1
- **Lemma 8.6.4.** The image of a topological x–y path in a Hausdorff space contains an x–y arc. → 8.7.3
- **Lemma 8.6.5.** Connected standard subspaces of |G| are arc-connected. → 8.7
- **Lemma 8.6.6.** Arc-components of standard subspaces of |G| are closed. → 8.7
- **Lemma 8.6.7.** A standard subspace of |G| is connected if and only if it contains an edge from every finite cut of *G* of which it meets both sides. → 8.7.1
- **Lemma 8.6.8.** The closure in |G| of any normal spanning tree of *G* is a topological spanning tree of *G*. *used: 1.5.4, 8.2.3* → 8.7
- **Lemma 8.6.10.** If for every finite partition of *V*, into ℓ sets say, *G* has at least k(ℓ−1) cross-edges, then *G* has *k* edge-disjoint spanning sub-multigraphs whose closures in |G| are topologically connected.
- **Theorem 8.7.1.** The following statements are equivalent for every set *D* of edges of a locally finite connected graph *G*: (i) D ∈ 𝒞(G); (ii) *D* meets every finite cut *F* of *G* in an even number of edges; ….
- **Corollary 8.7.2.** 𝒞(G) is generated by finite circuits. *used: 8.2.4, 8.6.8*
- **Theorem 8.7.3.** [every element of the topological cycle space is a disjoint union of circuits] *used: 1.9.1, 8.1.2, 8.6.4*
- **Corollary 8.7.4.** 𝒞(G) is closed under infinite thin sums.
- **Lemma 8.8.1.** X = lim←(X_p | p ∈ P) is a compact Hausdorff space. It is non-empty if X_p ≠ ∅ for all p ∈ P.
- **Theorem 8.8.2.** If *G* is locally finite and connected, then ‖G‖ is homeomorphic to |G|.
- **Lemma 8.8.3 · Lemma 8.8.4 (lifting lemma).**

#### Chapter 9 — Ramsey Theory for Graphs

*(the library already has 21 Ramsey items; recorded for completeness and for the dependency order)*

- **Theorem 9.1.1. (Ramsey 1930)** For every r ∈ ℕ there exists an n ∈ ℕ such that every graph of order at least *n* contains either K^r or K̄^r as an induced subgraph. → 9.2.2
- **Theorem 9.1.2.** Let k,c be positive integers, and *X* an infinite set. If [X]^k is coloured with *c* colours, then *X* has an infinite monochromatic subset. → 12.1.1
- **Theorem 9.1.3.** For all k,c,r ≥ 1 there exists an n ≥ k such that every *n*-set *X* has a monochromatic *r*-subset with respect to any *c*-colouring of [X]^k. *used: 8.1.2* → 9.3.3
- **Proposition 9.2.1.** Let s,t be positive integers, and let *T* be a tree of order *t*. Then R(T, K^s) = (s−1)(t−1)+1. *used: 1.5.3, 5.2.3*
- **Theorem 9.2.2. (Chvátal, Rödl, Szemerédi & Trotter 1983)** For every positive integer Δ there is a constant *c* such that R(H) ≤ c|H| for all graphs *H* with Δ(H) ≤ Δ. *used: 7.1.1, 7.4.1, 7.5.2*
- **Proposition 9.2.3.** If *T* is a tree but not a star, then infinitely many graphs are Ramsey-minimal for *T*. *used: 1.5.3, 5.2.3, 5.2.5*
- **Theorem 9.3.1.** Every graph has a Ramsey graph. *(the induced Ramsey theorem — Deuber, Erdős–Hajnal–Pósa, Rödl)*
- **Lemma 9.3.2 · Lemma 9.3.3.** [bipartite embedding lemmas] *9.3.3 used: 9.1.3*
- **Theorem 9.3.4. (Reiher & Rödl 2023)** Every graph *H* has a Ramsey graph *G* that satisfies g(G) = g(H) unless *H* is a forest, in which case g(G) can be made arbitrarily large.
- **Proposition 9.4.1.** For every integer r ≥ 1 there is an n ∈ ℕ such that every connected graph of order at least *n* contains K^r, K_{1,r} or P^r as an induced subgraph. *used: 1.3.3*
- **Proposition 9.4.2.** For every integer r ≥ 2 there is an n ∈ ℕ such that every 2-connected graph of order at least *n* contains C^r or K_{2,r} as a topological minor. *used: 1.3.3, 3.3.6*
- **Theorem 9.4.3. (Oporowski, Oxley & Thomas 1993)** For every integer r ≥ 3 there is an n ∈ ℕ such that every 3-connected graph of order at least *n* contains a wheel of order *r* or a K_{3,r} as a minor.
- **Theorem 9.4.4. (Oporowski, Oxley & Thomas 1993)** For every integer r ≥ 4 there is an n ∈ ℕ such that every 4-connected graph with at least *n* vertices has a minor of order at least *r* that is a double wheel, a crown, a Möbius crown, or …
- **Theorem 9.4.5.** (i) The stars and the paths form the (2-element) Kuratowski set for connectedness and the subgraph relation. (ii) The cycles and the graphs K_{2,r} (r ≥ 2) form the (2-element) Kuratowski set for 2-connectedness …

#### Chapter 10 — Hamilton Cycles

- **Theorem 10.1.1. (Dirac 1952)** Every graph with n ≥ 3 vertices and minimum degree at least n/2 has a Hamilton cycle.
- **Proposition 10.1.2.** Every graph *G* with |G| ≥ 3 and α(G) ≤ κ(G) has a Hamilton cycle. *(**this is the Chvátal–Erdős theorem**, and Diestel proves it in about half a page)*
- **Theorem 10.1.3. (Asratian & Khachatrian 1990)** A connected graph *G* of order at least 3 is hamiltonian if d(u)+d(w) ≥ |N(u) ∪ N(v) ∪ N(w)| for every induced path uvw. *(implies Dirac and Ore)*
- **Theorem 10.1.4. (Tutte 1956)** Every 4-connected planar graph has a Hamilton cycle. *(stated without proof)*
- **Theorem 10.2.1. (Chvátal 1972)** An integer sequence (a₁,…,aₙ) such that 0 ≤ a₁ ≤ … ≤ aₙ < n and n ≥ 3 is hamiltonian if and only if the following holds for every i < n/2: aᵢ ≤ i ⇒ a_{n−i} ≥ n−i.
- **Corollary 10.2.2.** An integer sequence (a₁,…,aₙ) such that n ≥ 2 and 0 ≤ a₁ ≤ … ≤ aₙ < n is path-hamiltonian if and only if every i ≤ n/2 is such that aᵢ < i ⇒ a_{n+1−i} ≥ n−i.
- **Theorem 10.3.1. (Fleischner 1974)** If *G* is a 2-connected graph, then G² has a Hamilton cycle. *used: 1.2.1, 1.8.1*
- **Lemma 10.3.2.** For every 2-connected graph *G* and x ∈ V(G), there is a cycle C ⊆ G that contains *x* as well as a vertex y ≠ x with N_G(y) ⊆ V(C).
- **Theorem 10.3.3. (Georgakopoulos 2009)** The square of every 2-connected locally finite graph contains a Hamilton circle.

#### Chapter 11 — Random Graphs

*(recorded for the dependency order; the library has no random-graph items yet)*

- **Proposition 11.1.1.** The events A_e are independent and occur with probability *p*.
- **Lemma 11.1.2.** For all integers n,k with n ≥ k ≥ 2, the probability that G ∈ 𝒢(n,p) has a set of *k* independent vertices is at most P[α(G) ≥ k] ≤ binom(n,k) q^{binom(k,2)}. → 11.2.1, 11.3.4
- **Theorem 11.1.3. (Erdős 1947)** For every integer k ≥ 3, the Ramsey number of *k* satisfies R(k) > 2^{k/2}.
- **Lemma 11.1.4.** The expected number of *k*-cycles in G ∈ 𝒢(n,p) is E(X) = ((n)_k/2k)p^k. → 11.2.2, 11.4.3
- **Lemma 11.1.5. (Markov's Inequality)** Let X ≥ 0 be a random variable on 𝒢(n,p) and a > 0. Then P[X ≥ a] ≤ E(X)/a. → 11.2.2, 11.4.1, 11.4.3
- **Lemma 11.2.1.** Let k > 0 be an integer, and let p = p(n) be a function of *n* such that p(n) ≥ 6k²(ln n)/n for large *n*. Then lim_{n→∞} P[α ≥ ½n/k] = 0.
- **Theorem 11.2.2. (Erdős 1959)** For every integer *k* there exists a graph *H* with girth g(H) > k and chromatic number χ(H) > k. *used: 11.1.4, 11.1.5* → 9.2.3
- **Corollary 11.2.3.** There are graphs with arbitrarily large girth and arbitrarily large values of the invariants κ, ε and δ. *used: 1.4.3, 5.2.3*
- **Proposition 11.3.1.** For every constant p ∈ (0,1) and every graph *H*, almost every G ∈ 𝒢(n,p) contains an induced copy of *H*.
- **Lemma 11.3.2.** For every constant p ∈ (0,1) and i,j ∈ ℕ, almost every graph G ∈ 𝒢(n,p) has the property P_{i,j}.
- **Corollary 11.3.3.** For every constant p ∈ (0,1) and k ∈ ℕ, almost every graph in 𝒢(n,p) is *k*-connected.
- **Proposition 11.3.4.** For every constant p ∈ (0,1) and every ε > 0, almost every graph G ∈ 𝒢(n,p) has chromatic number χ(G) > (log(1/q)/(2+ε))·(n/log n). *used: 11.1.2*
- **Theorem 11.3.5. (Erdős & Rényi 1963)** With probability 1, a random graph G ∈ 𝒢(ℵ₀,p) with 0 < p < 1 is isomorphic to the Rado graph *R*. *used: 8.3.1*
- **Lemma 11.4.1. (Chebyshev's Inequality)** For all real λ > 0, P[|X−μ| ≥ λ] ≤ σ²/λ². *used: 11.1.5*
- **Lemma 11.4.2.** If μ > 0 for all large enough *n*, and σ²/μ² → 0 as n→∞, then X(G) > 0 for almost all G ∈ 𝒢(n,p).
- **Lemma 11.4.3 · Lemma 11.4.4.** [the two halves of the threshold theorem]
- **Theorem 11.4.5. (Erdős & Rényi 1960; Bollobás 1981)** Let *H* be a graph with at least one edge. Then t = n^{−1/ε′(H)} is a threshold function for 𝒫_H.
- **Corollary 11.4.6.** If k ≥ 3, then t(n) = n^{−1} is a threshold function for the property of containing a *k*-cycle.
- **Corollary 11.4.7.** If *T* is a tree of order k ≥ 2, then t(n) = n^{−k/(k−1)} is a threshold function for the property of containing a copy of *T*.

#### Chapter 12 — Graph Minors

- **Proposition 12.1.1.** A quasi-ordering ≤ on *X* is a well-quasi-ordering if and only if *X* contains neither an infinite antichain nor an infinite strictly decreasing sequence x₀ > x₁ > …. *used: 9.1.2*
- **Corollary 12.1.2.** If *X* is well-quasi-ordered, then every infinite sequence in *X* has an infinite increasing subsequence.
- **Lemma 12.1.3.** If *X* is well-quasi-ordered by ≤, then so is [X]^{<ω}. → 12.2.1, 12.7.1
- **Theorem 12.2.1. (Kruskal 1960)** The finite trees are well-quasi-ordered by the topological minor relation. *used: 12.1.3* → 12.7.1
- **Lemma 12.3.1.** Let t₁t₂ be any edge of *T* and let T₁,T₂ be the components of T−t₁t₂, with t₁ ∈ T₁ and t₂ ∈ T₂. Then V_{t₁} ∩ V_{t₂} separates U₁ := ⋃_{t∈T₁}V_t from U₂ := ⋃_{t∈T₂}V_t in *G*. → 12.4.3, 12.5, 12.6.5
- **Lemma 12.3.2.** For every H ⊆ G, the pair (T, (V_t ∩ V(H))_{t∈T}) is a tree-decomposition of *H*. → 12.4.1, 12.4.3, 12.4.4, 12.6.2
- **Lemma 12.3.3.** Suppose that G = IH with branch sets U_h, h ∈ V(H). … → 12.4.1, 12.4.3
- **Lemma 12.3.4.** Any set of vertices not contained in a bag of (T,𝒱) contains two vertices that are separated by an adhesion set of (T,𝒱). → 12.4.3
- **Corollary 12.3.5.** Every complete subgraph of *G* is contained in some part of (T,𝒱). → 12.6.2
- **Proposition 12.3.6.** *G* is chordal if and only if *G* has a tree-decomposition into complete parts. *used: 5.5.1* → 12.4.4, 12.6.2
- **Theorem 12.3.7.** For every integer k ≥ 1, every graph *G* has a tree-decomposition (T,𝒱) with the following properties: (i) (T,𝒱) has adhesion < k. (ii) Distinct *k*-blocks lie in different bags. Moreover …
- **Lemma 12.4.1.** If H ≼ G then tw(H) ≤ tw(G). *used: 12.3.2, 12.3.3* → 12.6.2
- **Theorem 12.4.2. (Robertson & Seymour 1990)** For every integer k ≥ 0, the graphs of tree-width < k are well-quasi-ordered by the minor relation. → 12.7.1, 12.7.3
- **Theorem 12.4.3. (Seymour & Thomas 1993) — tree-width duality theorem** Let k ≥ 0 be an integer. A graph has tree-width < k if and only if it contains no bramble of order > k. *used: 3.3.1, 12.3.1, 12.3.2, 12.3.3, 12.3.4*
- **Proposition 12.4.4.** tw(G) = min{ω(H)−1 | G ⊆ H; H chordal}. *used: 12.3.2, 12.3.5, 12.3.6*
- **Theorem 12.4.5. (Thomas 1990)** Every graph *G* has a lean tree-decomposition of width tw(G).
- **Theorem 12.4.6.** There is a function f: ℕ²→ℕ such that every graph of tree-width ≤ w ∈ ℕ that has no geodesic cycle of length > k ∈ ℕ has connected tree-width at most f(w,k).
- **Theorem 12.5.1. (Robertson & Seymour 1991) — tree-of-tangles theorem** Every graph *G* has a nested set of separations that distinguishes all the tangles in *G* efficiently.
- **Lemma 12.5.2. (Fish Lemma)** Any separation *r* that is nested with two crossing separations *s* and *t* is also nested with their four corners.
- **Lemma 12.5.3. (Splinter Lemma)** Every splintering family (A₁,…,Aₙ) of non-empty sets of separations has a nested family (a₁,…,aₙ) of representatives aᵢ ∈ Aᵢ.
- **Lemma 12.5.4 · 12.5.5 · 12.5.6 · 12.5.7.** [entanglement and corner-crossing machinery]
- **Theorem 12.5.9. (Robertson & Seymour 1991) — tangle–tree duality theorem** The following assertions are equivalent for all graphs *G* and integers k ≥ 0: (i) *G* has no tangle of order *k*; (ii) *G* has an S_k-tree over T*.
- **Lemma 12.5.10. (Uncrossing Lemma)** Every consistent orientation of S_k that has a subset σ ∈ T also has a subset in T*.
- **Theorem 12.5.11.** The following two assertions are equivalent for all graphs *G* and integers k ≥ 0: (i) *G* has tree-width less than k−1; (ii) *G* has no F_k-tangle of S_k.
- **Lemma 12.6.1.** A graph property 𝒫 can be expressed by forbidden minors if and only if it is closed under taking minors. → 5.2
- **Proposition 12.6.2.** A graph has tree-width < 3 if and only if it has no K⁴ minor. *used: 7.3.1, 12.3.2, 12.3.5, 12.3.6, 12.4.1*
- **Theorem 12.6.3. (Robertson & Seymour 1986) — the grid theorem** For every integer *r* there is an integer *k* such that every graph of tree-width at least *k* has an r×r grid minor. → 12.7.1, 12.7.3
- **Corollary 12.6.4.** Given a graph *H*, the graphs without an *H* minor have bounded tree-width if and only if *H* is planar. *used: 4.4.6, 12.6.3*
- **Theorem 12.6.5. (Robertson & Seymour 1986)** ℋ has the Erdős–Pósa property if *H* is planar. *used: 12.3.1, 12.6.3*
- **Theorem 12.6.6. (Robertson & Seymour 2003)** For every n ≥ 5 there exists a k ∈ ℕ such that every graph not containing K^n as a minor has a tree-decomposition whose torsos are *k*-nearly embeddable in a surface in which K^n is not embeddable. *(the structure theorem; stated without proof)*
- **Theorem 12.6.7. (Grohe & Marx 2012)** For every n ≥ 5 there exists a k ∈ ℕ such that every graph not containing K^n as a topological minor has a tree-decomposition whose torsos are either *k*-nearly embeddable in a surface of Euler genus ≤ k or …
- **Theorem 12.6.8.** A graph *G* has no K^{ℵ₀} minor if and only if *G* has a tree-decomposition of finite adhesion whose torsos are nearly planar.
- **Theorem 12.6.9.** The following assertions are equivalent for connected graphs *G*: (i) *G* does not contain K^{ℵ₀} as a topological minor; (ii) *G* has finite tree-width; (iii) *G* has a normal spanning tree *T* such that for every …
- **Theorem 12.7.1. (Robertson & Seymour 1986–2004) — graph minor theorem** The finite graphs are well-quasi-ordered by the minor relation ≼. *(proof sketched; uses 12.1.3, 12.2.1, 12.4.2, 12.6.3, 12.6.6)*
- **Corollary 12.7.2.** The Kuratowski set for any minor-closed graph property is finite.
- **Corollary 12.7.3.** For every surface *S* there exists a finite set of graphs H₁,…,Hₙ such that a graph is embeddable in *S* if and only if it contains none of H₁,…,Hₙ as a minor.
- **Lemma 12.7.4.** [the surface/grid lemma feeding the sketch] *used: 4.1.2, 4.2.2, 4.3.2, 1.7.3, 12.6.3, 12.4.2*

---

## B.2 The canonical-coverage harvest — Zhao, _Graph Theory and Additive Combinatorics_

### B.2.0 Verbatim table of contents (Zhao's own numbering)

```
0  Appetizer: Triangles and Equations                              1
   0.1  Schur's Theorem                                            1
   0.2  Progressions                                               5
   0.3  What's Next in the Book?                                   9
1  Forbidding a Subgraph                                          11
   1.1  Forbidding a Triangle: Mantel's Theorem                    12
   1.2  Forbidding a Clique: Turán's Theorem                       14
   1.3  Turán Density and Supersaturation                          19
   1.4  Forbidding a Complete Bipartite Graph: Kővári–Sós–Turán Theorem   22
   1.5  Forbidding a General Subgraph: Erdős–Stone–Simonovits Theorem     27
   1.6  Forbidding a Cycle                                         31
   1.7  Forbidding a Sparse Bipartite Graph: Dependent Random Choice      33
   1.8  Lower Bound Constructions: Overview                        37
   1.9  Randomized Constructions                                   38
   1.10 Algebraic Constructions                                    40
   1.11 Randomized Algebraic Constructions                         46
2  Graph Regularity Method                                        53
   2.1  Szemerédi's Graph Regularity Lemma                         54
   2.2  Triangle Counting Lemma                                    62
   2.3  Triangle Removal Lemma                                     64
   2.4  Graph Theoretic Proof of Roth's Theorem                    67
   2.5  Large 3-AP-Free Sets: Behrend's Construction               70
   2.6  Graph Counting and Removal Lemmas                          72
   2.7  Exercises on Applying Graph Regularity                     76
   2.8  Induced Graph Removal and Strong Regularity                77
   2.9  Graph Property Testing                                     84
   2.10 Hypergraph Removal and Szemerédi's Theorem                 86
   2.11 Hypergraph Regularity                                      87
3  Pseudorandom Graphs                                            91
   3.1  Quasirandom Graphs                                         92
   3.2  Expander Mixing Lemma                                     103
   3.3  Abelian Cayley Graphs and Eigenvalues                     107
   3.4  Quasirandom Groups                                        111
   3.5  Quasirandom Cayley Graphs and Grothendieck's Inequality   118
   3.6  Second Eigenvalue: Alon–Boppana Bound                     122
4  Graph Limits                                                   131
   4.1 Graphons · 4.2 Cut Distance · 4.3 Homomorphism Density · 4.4 W-Random Graphs
   4.5 Counting Lemma · 4.6 Weak Regularity Lemma · 4.7 Martingale Convergence Theorem
   4.8 Compactness of the Graphon Space · 4.9 Equivalence of Convergence
5  Graph Homomorphism Inequalities                                163
   5.1 Edge vs. Triangle Densities · 5.2 Cauchy–Schwarz · 5.3 Hölder · 5.4 Lagrangian · 5.5 Entropy
6  Forbidding 3-Term Arithmetic Progressions                      203
   6.1 Fourier Analysis in Finite Field Vector Spaces · 6.2 Roth's Theorem in the Finite Field Model
   6.3 Fourier Analysis in the Integers · 6.4 Roth's Theorem in the Integers · 6.5 Polynomial Method
   6.6 Arithmetic Regularity · 6.7 Popular Common Difference
7  Structure of Set Addition                                      237
   7.1 Sets of Small Doubling: Freiman's Theorem … 7.13 Additive Energy and the
       Balog–Szemerédi–Gowers Theorem
8  Sum-Product Problem                                            273
9  Progressions in Sparse Pseudorandom Sets                       283
   9.1 Green–Tao Theorem · 9.2 Relative Szemerédi Theorem · 9.3 Transference Principle
   9.4 Dense Model Theorem · 9.5 Sparse Counting Lemma · 9.6 Proof of the Relative Roth Theorem
References 307 · Index 323
```

### B.2.1 Named results in Zhao ch. 1–2 (verbatim numbering)

**§2.1** — Definition 2.1.1 (edge density) · Definition 2.1.2 (ε-regular pair) ·
Definition 2.1.7 (ε-regular partition) · **Theorem 2.1.9 (Szemerédi's graph regularity lemma)** ·
Lemmas 2.1.11–2.1.14 (the energy-increment chain) · **Theorem 2.1.17** (Gowers' tower-type
lower bound on the number of parts; stated without proof, cites Moshkovitz–Shapira 2016) ·
**Theorem 2.1.19** (regularity refining an arbitrary initial partition) ·
**Theorem 2.1.20 (equitable regularity lemma)** · **Theorem 2.1.26** (ε-regular subset).

**§2.2** — **Theorem 2.2.1 (Triangle Counting Lemma)** · Lemma 2.2.3 (most vertices have
about the expected degree).

**§2.3** — **Theorem 2.3.1 (Triangle Removal Lemma)** (Ruzsa–Szemerédi 1978) ·
Remark 2.3.2 (the "partition–clean–count" recipe) · **Corollary 2.3.3 (diamond-free lemma)** ·
**Theorem 2.3.5 (the (6,3)-theorem)**.

**§2.4** — **Theorem 2.4.1 (Roth's theorem)** · **Theorem 2.4.2** (corners in ℤ²;
Ajtai–Szemerédi 1974, with Solymosi's 2003 simplified proof) · **Proposition 2.4.4**
(r₃(N)·N ≤ r_corner(2N)).

**§2.6** — **Theorem 2.6.2 (Graph Counting Lemma)**, strengthened as **Theorem 2.6.4** ·
**Theorem 2.6.5 (Graph Removal Lemma)** · Exercise 2.6.6 (bipartite *H* admits a
polynomial-bound removal lemma without regularity) · **Theorem 2.6.7 (Erdős–Stone–Simonovits,
regularity proof)**.

**§2.8** — **Theorem 2.8.1 (Induced graph removal lemma)** (Alon–Fischer–Krivelevich–Szegedy
2000) · **Theorem 2.8.3 / 2.8.9 (Strong Regularity Lemma)**.

**§1** — §1.1 Mantel · §1.2 **Turán (Corollary 1.2.6)** · §1.3 Turán density and
**supersaturation (Theorem 1.3.4)** · §1.4 Kővári–Sós–Turán · §1.5 **Theorem 1.5.1
(Erdős–Stone–Simonovits)**, **Theorem 1.5.5 (pure Erdős–Stone, H = K_{s,…,s})**,
**Theorem 1.5.6 / 1.5.7 (hypergraph KST)**, Remark 1.5.2 (history) · §1.6 forbidding a cycle ·
§1.7 dependent random choice.

## B.3 The canonical-coverage harvest — the open lecture-note sets

### B.3.1 Cambridge Part II Graph Theory (Leader, Michaelmas 2007) — chapter headings

```
Chapter 1  Introduction                    1
Chapter 2  Connectivity and Matchings      9
Chapter 3  Extremal Problems              15
Chapter 4  Colourings                     21
Chapter 5  Ramsey Theory                  29
Chapter 6  Random Graphs                  34
Chapter 7  Algebraic Methods              40
Examples Sheets
```

**The DPMMS official course schedule, reproduced verbatim inside those notes** — this is the
department's own canonical syllabus text, and it is a useful independent check that a topic is
standard graduate material:

```
GRAPH THEORY (D) 24 lectures, Michaelmas term
No specific prerequisites.

Introduction
Basic definitions. Trees and spanning trees. Bipartite graphs. Euler circuits. Elementary
properties of planar graphs. Statement of Kuratowski's theorem. [3]

Connectivity and matchings
Matchings in bipartite graphs; Hall's theorem and its variants. Connectivity and Menger's
theorem. [3]

Extremal graph theory
Long paths, long cycles and Hamilton cycles. Complete subgraphs and Turan's theorem.
Bipartite subgraphs and the problem of Zarankiewicz. The Erdős-Stone theorem; *sketch of
proof*. [5]

Eigenvalue methods
The adjacency matrix and the Laplacian. Strongly regular graphs. [2]

Graph colouring
Vertex and edge colourings; simple bounds. The chromatic polynomial. The theorems of
Brooks and Vizing. Equivalent forms of the four colour theorem; the five colour theorem.
Heawood's theorem for surfaces; the torus and the Klein bottle. [5]

Ramsey theory
Ramsey's theorem (finite and infinite forms). Upper bounds for Ramsey numbers. [3]

Probabilistic methods
Basic notions; lower bounds for Ramsey numbers. The model G(n, p); graphs of large girth
and large chromatic number. The clique number. [3]

Appropriate books
B. Bollobás   Modern Graph Theory. Springer 1998.
J.A. Bondy and U.S.R. Murty  Graph Theory with Applications. Elsevier 1976.
R. Diestel    Graph Theory. Springer 2000.
D. West       Introduction to Graph Theory. Prentice Hall 1999.
```

**Note the schedule names the chromatic polynomial explicitly**, alongside Brooks and Vizing,
as core Part II material. That is direct external evidence that the library's four-item
colouring page is far below the standard graduate treatment.

### B.3.2 Cambridge Part II Graph Theory (Thomason, Michaelmas 2005) — chapter headings

```
1  Basic Definitions and Properties      1
2  Matchings and Connectivity            9
3  Extremal Graph Theory                15
4  Colouring                            23
5  Ramsey Theory                        35
6  Probabilistic Methods                39
7  Eigenvalue Methods                   47
```

### B.3.3 Oxford B8.5 Graph Theory — verbatim synopsis

> "Introduction: basic definitions and examples. Trees and their characterization. Euler
> circuits; long paths and cycles. Vertex colourings: Brooks' theorem, chromatic polynomial.
> Edge colourings: Vizing's theorem. Planar graphs, including Euler's formula, dual graphs.
> Maximum flow – minimum cut theorem: applications including Menger's theorem and Hall's
> theorem. Tutte's theorem on matchings. Extremal Problems: Turan's theorem, Zarankiewicz
> problem, Erdős-Stone theorem."

### B.3.4 Oxford C8.3 Combinatorics — verbatim synopsis

> "Chains and antichains. Sperner's Lemma. LYM inequality. Dilworth's Theorem. Shadows.
> Kruskal-Katona Theorem. Isoperimetry in the cube. Intersecting families. Erdos-Ko-Rado
> Theorem. Cross-intersecting families. t-intersecting families. Fisher's Inequality.
> Frankl-Wilson Theorem. Application to Borsuk's Conjecture. VC-dimension. Sauer-Shelah
> Theorem. Combinatorial Nullstellensatz."

**Disposition note:** C8.3 is *extremal set theory*, not graph theory. Only **Kruskal–Katona**
and **Dilworth** fall inside this lane's remit; the rest (Sperner, LYM, EKR, Frankl–Wilson,
VC-dimension, Sauer–Shelah, Combinatorial Nullstellensatz) belong to a separate extremal-set-
theory page and should be recorded `out-of-scope` for a *structural and extremal graph theory*
scaffold, with that reason.

### B.3.5 Schrijver, _A Course in Combinatorial Optimization_ — verbatim TOC

```
1.  Shortest paths and trees                                             5
    1.1 Shortest paths with nonnegative lengths
    1.2 Speeding up Dijkstra's algorithm with heaps
    1.3 Shortest paths with arbitrary lengths
    1.4 Minimum spanning trees
2.  Polytopes, polyhedra, Farkas' lemma, and linear programming          23
    2.1 Convex sets · 2.2 Polytopes and polyhedra · 2.3 Farkas' lemma · 2.4 Linear programming
3.  Matchings and covers in bipartite graphs                             39
    3.1 Matchings, covers, and Gallai's theorem · 3.2 M-augmenting paths
    3.3 König's theorems · 3.4 Cardinality bipartite matching algorithm
    3.5 Weighted bipartite matching · 3.6 The matching polytope
4.  Menger's theorem, flows, and circulations                            54
    4.1 Menger's theorem · 4.2 Flows in networks · 4.3 Finding a maximum flow
    4.4 Speeding up the maximum flow algorithm · 4.5 Circulations · 4.6 Minimum-cost flows
5.  Nonbipartite matching                                                78
    5.1 Tutte's 1-factor theorem and the Tutte-Berge formula
    5.2 Cardinality matching algorithm · 5.3 Weighted matching algorithm
    5.4 The matching polytope · 5.5 The Cunningham-Marsh formula
6.  Problems, algorithms, and running time                               97
    6.1 Introduction … 6.5 The class NP · 6.6 The class co-NP · 6.7 NP-completeness
    6.8 NP-completeness of the satisfiability problem
    6.9 NP-completeness of some other problems · 6.10 Turing machines
7.  Cliques, stable sets, and colourings                                111
    7.1 Introduction · 7.2 Edge-colourings of bipartite graphs
    7.3 Partially ordered sets · 7.4 Perfect graphs · 7.5 Chordal graphs
8.  Integer linear programming and totally unimodular matrices          132
9.  Multicommodity flows and disjoint paths                             148
    9.1 Introduction · 9.2 Two commodities · 9.3 Disjoint paths in acyclic directed graphs
    9.4 Vertex-disjoint paths in planar graphs · 9.5 Edge-disjoint paths in planar graphs
    9.6 A column generation technique for multicommodity flows
10. Matroids                                                            173
    10.1 Matroids and the greedy algorithm … 10.7 Matroids and polyhedra
References 199 · Name index 210 · Subject index 212
```

### B.3.6 Schrijver, _Advanced Graph Theory and Combinatorial Optimization_ — section headings

- **I. Matchings and coverings** — §1 Matchings, covers, and Gallai's theorem · §2 M-augmenting
  paths · §3 Bipartite matching: König's theorems · §4 Cardinality bipartite matching algorithm ·
  §5 **Nonbipartite matching: Tutte's 1-factor theorem and the Tutte–Berge formula** ·
  §6 Cardinality matching algorithm.
- **II. Stable sets and colourings** — §1 Stable sets and colourings · §2 Bounds ·
  §3 Edge-colourings of bipartite graphs · §4 Partially ordered sets · §5 Perfect graphs ·
  §6 Consequences of the perfect graph theorem · §7 Chordal graphs · §8 **Lovász' ϑ-function** ·
  §9 **The Shannon capacity Θ(G)** · §10 Vizing's theorem.
- **III. Disjoint paths** — §1 Shortest paths · §2 Length functions · §3 Menger's theorem ·
  §4 Flows in networks · §5 Finding a maximum flow.
- **IV. Stable matchings** — §1 Stable matchings · §2 **List-edge-colouring**.
- **V. Szemerédi's regularity lemma** — §1 Szemerédi's regularity lemma · §2 Arithmetic
  progressions.

### B.3.7 Harju, _Lecture Notes on Graph Theory_ — verbatim TOC

```
1  Introduction                                     2
   1.1 Graphs and their plane figures               4
   1.2 Subgraphs                                    7
   1.3 Paths and cycles                            11
2  Connectivity of Graphs                          16
   2.1 Bipartite graphs and trees                  16
   2.2 Connectivity                                23
3  Tours and Matchings                             29
   3.1 Eulerian graphs                             29
   3.2 Hamiltonian graphs                          31
   3.3 Matchings                                   35
4  Colourings                                      42
   4.1 Edge colourings                             42
   4.2 Ramsey Theory                               46
   4.3 Vertex colourings                           52
5  Graphs on Surfaces                              60
   5.1 Planar graphs                               60
   5.2 Colouring planar graphs                     67
   5.3 Genus of a graph                            74
6  Directed Graphs                                 82
   6.1 Digraphs                                    82
   6.2 Network Flows                               88
Index                                              95
```

### B.3.8 Keller & Trotter, _Applied Combinatorics_ 2017 — graph-relevant TOC

```
5  Graph Theory                                                69
   5.1 Basic Notation and Terminology for Graphs               69
   5.2 Multigraphs: Loops and Multiple Edges                   74
   5.3 Eulerian and Hamiltonian Graphs                         75
   5.4 Graph Coloring                                          80
   5.5 Planar Graphs                                           88
   5.6 Counting Labeled Trees                                  96
   5.7 A Digression into Complexity Theory                    100
   5.8 Discussion · 5.9 Exercises
6  Partially Ordered Sets                                     113
   6.1 Basic Notation and Terminology · 6.2 Additional Concepts for Posets
   6.3 Dilworth's Chain Covering Theorem and its Dual · 6.4 Linear Extensions
   6.5 The Subset Lattice · 6.6 Interval Orders
   6.7 Finding a Representation of an Interval Order · 6.8 Dilworth's Theorem for Interval Orders
11 Applying Probability to Combinatorics                      229
   11.1 A First Taste of Ramsey Theory · 11.2 Small Ramsey Numbers
   11.3 Estimating Ramsey Numbers · 11.4 Applying Probability to Ramsey Theory
   11.5 Ramsey's Theorem · 11.6 The Probabilistic Method
12 Graph Algorithms                                           239
   12.1 Minimum Weight Spanning Trees · 12.2 Digraphs
   12.3 Dijkstra's Algorithm for Shortest Paths · 12.4 Historical Notes
13 Network Flows                                              259
   13.1 Basic Notation and Terminology · 13.2 Flows and Cuts · 13.3 Augmenting Paths
   13.4 The Ford-Fulkerson Labeling Algorithm · 13.5 A Concrete Example
   13.6 Integer Solutions of Linear Programming Problems
14 Combinatorial Applications of Network Flows                279
   14.1 Introduction · 14.2 Matchings in Bipartite Graphs · 14.3 Chain partitioning
16 The Many Faces of Combinatorics                            315
   16.1 On-line algorithms · 16.2 Extremal Set Theory · 16.3 Markov Chains
   16.4 The Stable Matching Theorem · 16.5 Zero–One Matrices
   16.6 Arithmetic Combinatorics · 16.7 The Lovász Local Lemma · 16.8 Applying the Local Lemma
```

---

## B.4 The canonical-coverage harvest — the textbooks

### B.4.1 Bollobás, _Modern Graph Theory_ (GTM 184, 1998) — verbatim TOC

```
Apologia                                                          vii
Preface                                                            ix

I    Fundamentals                                                    1
     I.1  Definitions                                                1
     I.2  Paths, Cycles, and Trees                                   8
     I.3  Hamilton Cycles and Euler Circuits                        14
     I.4  Planar Graphs                                             20
     I.5  An Application of Euler Trails to Algebra                 25
     I.6  Exercises                                                 28
II   Electrical Networks                                            39
     II.1 Graphs and Electrical Networks                            39
     II.2 Squaring the Square                                       46
     II.3 Vector Spaces and Matrices Associated with Graphs         51
     II.4 Exercises                                                 58
     II.5 Notes                                                     66
III  Flows, Connectivity and Matching                               67
     III.1 Flows in Directed Graphs                                 68
     III.2 Connectivity and Menger's Theorem                        73
     III.3 Matching                                                 76
     III.4 Tutte's 1-Factor Theorem                                 82
     III.5 Stable Matchings                                         85
     III.6 Exercises                                                91
     III.7 Notes                                                   101
IV   Extremal Problems                                             103
     IV.1 Paths and Cycles                                         104
     IV.2 Complete Subgraphs                                       108
     IV.3 Hamilton Paths and Cycles                                115
     IV.4 The Structure of Graphs                                  120
     IV.5 Szemerédi's Regularity Lemma                             124
     IV.6 Simple Applications of Szemerédi's Lemma                 130
     IV.7 Exercises                                                135
     IV.8 Notes                                                    142
V    Colouring                                                     145
     V.1  Vertex Colouring                                         146
     V.2  Edge Colouring                                           152
     V.3  Graphs on Surfaces                                       154
     V.4  List Colouring                                           161
     V.5  Perfect Graphs                                           165
     V.6  Exercises                                                170
     V.7  Notes                                                    177
VI   Ramsey Theory                                                 181
     VI.1 The Fundamental Ramsey Theorems                          182
     VI.2 Canonical Ramsey Theorems                                189
     VI.3 Ramsey Theory For Graphs                                 192
     VI.4 Ramsey Theory for Integers                               197
     VI.5 Subsequences                                             205
     VI.6 Exercises                                                208
     VI.7 Notes                                                    213
VII  Random Graphs                                                 215
     VII.1 The Basic Models—The Use of the Expectation             216
     VII.2 Simple Properties of Almost All Graphs                  225
     VII.3 Almost Determined Variables—The Use of the Variance     228
     VII.4 Hamilton Cycles—The Use of Graph Theoretic Tools        236
     VII.5 The Phase Transition                                    240
     VII.6 Exercises                                               246
     VII.7 Notes                                                   251
VIII Graphs, Groups and Matrices                                   253
     VIII.1 Cayley and Schreier Diagrams                           254
     VIII.2 The Adjacency Matrix and the Laplacian                 262
     VIII.3 Strongly Regular Graphs                                270
     VIII.4 Enumeration and Polya's Theorem                        276
     VIII.5 Exercises                                              283
IX   Random Walks on Graphs                                        295
     IX.1 Electrical Networks Revisited                            296
     IX.2 Electrical Networks and Random Walks                     301
     IX.3 Hitting Times and Commute Times                          309
     IX.4 Conductance and Rapid Mixing                             319
     IX.5 Exercises                                                327
     IX.6 Notes                                                    333
X    The Tutte Polynomial                                          335
     X.1  Basic Properties of the Tutte Polynomial                 336
     X.2  The Universal Form of the Tutte Polynomial               340
     X.3  The Tutte Polynomial in Statistical Mechanics            342
     X.4  Special Values of the Tutte Polynomial                   345
     X.5  A Spanning Tree Expansion of the Tutte Polynomial        350
     X.6  Polynomials of Knots and Links                           358
     X.7  Exercises                                                371
     X.8  Notes                                                    377
Symbol Index 379 · Name Index 383 · Subject Index 387
```

**Note:** chapter X is the reference treatment of the **Tutte polynomial**, which Diestel never
defines. §X.2 "The Universal Form of the Tutte Polynomial" is the universality/recipe theorem
and §X.4 "Special Values" is the specialisation table. Chapter IX §IX.4 "Conductance and Rapid
Mixing" is Bollobás's expander/Cheeger material. These are the two places to send the
scaffolder for topics Diestel omits.

### B.4.2 Bollobás, _Extremal Graph Theory_ (1978 / Dover 2004) — chapter list only

```
I    Connectivity
II   Matching
III  Cycles
IV   The Diameter
V    Colourings
VI   Complete Subgraphs
VII  Topological Subgraphs
VIII Complexity and Packing
```

**Provenance warning.** This list is **reconstructed from a publisher blurb**
(`https://books.google.com/books/about/Extremal_Graph_Theory.html?id=gX6WyUQvwDwC`, which reads
verbatim: "Connectivity; Matching; Cycles; The diameter; Colourings; Complete subgraphs;
Topological subgraphs; Complexity and packing.") corroborated by a *Proceedings of the Edinburgh
Mathematical Society* review (I. Anderson,
`https://www.cambridge.org/core/services/aop-cambridge-core/content/view/834509A41DADF1E0D4AE40C72A90C08B/S0013091500003709a.pdf`).
It is **not a photographed table of contents**: the exact chapter-title wording, numeral form and
capitalisation are not independently confirmed, and there is **no section-level or
named-theorem-level data at all**. **Do not treat this as a harvested source under the
source-depth rule** — it cannot carry a disposition for its own headings, because we do not have
its headings. See §F.

### B.4.3 West, _Introduction to Graph Theory_ (2nd ed., 2001) — verbatim TOC

```
Preface                                                            xi
1  Fundamental Concepts                                             1
   1.1  What Is a Graph?                                            1
        The Definition · Graphs as Models · Matrices and Isomorphism
        Decomposition and Special Graphs · Exercises
   1.2  Paths, Cycles, and Trails                                   19
        Connection in Graphs · Bipartite Graphs · Eulerian Circuits · Exercises
   1.3  Vertex Degrees and Counting                                 34
        Counting and Bijections · Extremal Problems · Graphic Sequences · Exercises
   1.4  Directed Graphs                                             53
        Definitions and Examples · Vertex Degrees · Eulerian Digraphs
        Orientations and Tournaments · Exercises
2  Trees and Distance                                               67
   2.1  Basic Properties                                            67
        Properties of Trees · Distance in Trees and Graphs
        Disjoint Spanning Trees (optional) · Exercises
   2.2  Spanning Trees and Enumeration                              81
        Enumeration of Trees · Spanning Trees in Graphs
        Decomposition and Graceful Labelings · Branchings and Eulerian Digraphs (optional)
   2.3  Optimization and Trees                                      95
        Minimum Spanning Tree · Shortest Paths · Trees in Computer Science (optional)
3  Matchings and Factors                                           107
   3.1  Matchings and Covers                                       107
        Maximum Matchings · Hall's Matching Condition · Min-Max Theorems
        Independent Sets and Covers · Dominating Sets (optional)
   3.2  Algorithms and Applications                                123
        Maximum Bipartite Matching · Weighted Bipartite Matching
        Stable Matchings (optional) · Faster Bipartite Matching (optional)
   3.3  Matchings in General Graphs                                136
        Tutte's 1-factor Theorem · f-factors of Graphs (optional)
        Edmonds' Blossom Algorithm (optional)
4  Connectivity and Paths                                          149
   4.1  Cuts and Connectivity                                      149
        Connectivity · Edge-connectivity · Blocks
   4.2  k-connected Graphs                                         161
        2-connected Graphs · Connectivity of Digraphs
        k-connected and k-edge-connected Graphs · Applications of Menger's Theorem
   4.3  Network Flow Problems                                      176
        Maximum Network Flow · Integral Flows · Supplies and Demands (optional)
5  Coloring of Graphs                                              191
   5.1  Vertex Colorings and Upper Bounds                          191
        Definitions and Examples · Upper Bounds · Brooks' Theorem
   5.2  Structure of k-chromatic Graphs                            204
        Graphs with Large Chromatic Number · Extremal Problems and Turán's Theorem
        Color-Critical Graphs · Forced Subdivisions
   5.3  Enumerative Aspects                                        219
        Counting Proper Colorings · Chordal Graphs · A Hint of Perfect Graphs
        Counting Acyclic Orientations (optional)
6  Planar Graphs                                                   233
   6.1  Embeddings and Euler's Formula                             233
        Drawings in the Plane · Dual Graphs · Euler's Formula
   6.2  Characterization of Planar Graphs                          246
        Preparation for Kuratowski's Theorem · Convex Embeddings
        Planarity Testing (optional)
   6.3  Parameters of Planarity                                    257
        Coloring of Planar Graphs · Crossing Number · Surfaces of Higher Genus (optional)
7  Edges and Cycles                                                273
   7.1  Line Graphs and Edge-coloring                              273
        Edge-colorings · Characterization of Line Graphs (optional)
   7.2  Hamiltonian Cycles                                         286
        Necessary Conditions · Sufficient Conditions · Cycles in Directed Graphs (optional)
   7.3  Planarity, Coloring, and Cycles                            299
        Tait's Theorem · Grinberg's Theorem · Snarks (optional)
        Flows and Cycle Covers (optional)
8  Additional Topics (optional)                                    319
   8.1  Perfect Graphs                                             319
        The Perfect Graph Theorem · Chordal Graphs Revisited
        Other Classes of Perfect Graphs · Imperfect Graphs
        The Strong Perfect Graph Conjecture
   8.2  Matroids                                                   349
        Hereditary Systems and Examples · Properties of Matroids · The Span Function
        The Dual of a Matroid · Matroid Minors and Planar Graphs
        Matroid Intersection · Matroid Union
   8.3  Ramsey Theory                                              378
        The Pigeonhole Principle Revisited · Ramsey's Theorem · Ramsey Numbers
        Graph Ramsey Theory · Sperner's Lemma and Bandwidth
   8.4  More Extremal Problems                                     396
        Encodings of Graphs · Branchings and Gossip · List Coloring and Choosability
        Partitions Using Paths and Cycles · Circumference
   8.5  Random Graphs                                              425
        Existence and Expectation · Properties of Almost All Graphs · Threshold Functions
        Evolution and Graph Parameters · Connectivity, Cliques, and Coloring · Martingales
   8.6  Eigenvalues of Graphs                                      452
        The Characteristic Polynomial · Linear Algebra of Real Symmetric Matrices
        Eigenvalues and Graph Parameters · Eigenvalues of Regular Graphs
        Eigenvalues and Expanders · Strongly Regular Graphs
Appendix A  Mathematical Background                                471
Appendix B  Optimization and Complexity                            493
Appendix C  Hints for Selected Exercises                           507
Appendix D  Glossary of Terms                                      515
Appendix E  Supplemental Reading                                   533
Appendix F  References                                             567
```

**The chapter 6/7 swap, settled from West's own preface (verbatim, 2nd ed.):**
> "Chapters 6 and 7 have been switched to introduce the idea of planarity earlier, and the
> section on complexity has become an appendix."

Concretely:

| | 1st ed. (1996) | 2nd ed. (2001) |
|---|---|---|
| Ch. 5 | Graph Coloring | Coloring of Graphs |
| Ch. 6 | **Edges and Cycles** (6.1 Line Graphs and Edge-coloring · 6.2 Hamiltonian Cycles · 6.3 Complexity (optional)) | **Planar Graphs** |
| Ch. 7 | **Planar Graphs** (7.1 Embeddings and Euler's Formula · 7.2 Characterization of Planar Graphs · 7.3 Parameters of Planarity) | **Edges and Cycles** |

Two further edition differences the scaffolder must not trip over:
- 1st-ed. §6.3 "Complexity (optional)" became **Appendix B "Optimization and Complexity"**; a
  new **Appendix A "Mathematical Background"** was added.
- 1st-ed. §7.3 folded "Edge-colorings and Hamiltonian Cycles" in as a subsection; 2nd ed. splits
  that material out into §7.3 "Planarity, Coloring, and Cycles" (Tait, Grinberg, snarks, flows
  and cycle covers). **§5.2 also changed**: 1st ed. has "Critical Graphs", 2nd ed. has
  "Extremal Problems and Turán's Theorem" *and* "Color-Critical Graphs".

**Always cite the edition and check the chapter number.** A citation of "West ch. 6" is
ambiguous and is exactly the sort of imprecise locator the audit workflow flags.

**Value note for this lane:** West §5.3 "Enumerative Aspects" is the reference treatment of the
**chromatic polynomial**, including "Counting Acyclic Orientations" — i.e. **Stanley's
reciprocity theorem** — and it is the natural primary backing for that block, since Diestel
relegates the whole topic to Exercises 19–20.

### B.4.4 Bondy & Murty, _Graph Theory_ (GTM 244, 2008) — verbatim TOC, section and named-subsection level

Master contents:
```
1 Graphs 1 · 2 Subgraphs 39 · 3 Connected Graphs 79 · 4 Trees 99 · 5 Nonseparable Graphs 117
6 Tree-Search Algorithms 135 · 7 Flows in Networks 157 · 8 Complexity of Algorithms 173
9 Connectivity 205 · 10 Planar Graphs 243 · 11 The Four-Colour Problem 287
12 Stable Sets and Cliques 295 · 13 The Probabilistic Method 329 · 14 Vertex Colourings 357
15 Colourings of Maps 391 · 16 Matchings 413 · 17 Edge Colourings 451 · 18 Hamilton Cycles 471
19 Coverings and Packings in Directed Graphs 503 · 20 Electrical Networks 527
21 Integer Flows and Coverings 557 · Unsolved Problems 583 · References 593 · Index 637
```

Chapters most relevant to this lane, with the book's own section and named-subsection headings:

```
5 Nonseparable Graphs
  5.1 Cut Vertices                                      117
  5.2 Separations and Blocks                            119
      Nonseparable Graphs · Blocks · Proof Technique: Splitting off Edges
  5.3 Ear Decompositions                                125
      Strong orientations
  5.4 Directed Ear Decompositions                       129
  5.5 Related Reading                                   133
      Even Cycle Decompositions · Matroids and Nonseparability

9 Connectivity
  9.1 Vertex Connectivity                               205
      Connectivity and Local Connectivity · Vertex Cuts and Menger's Theorem
  9.2 The Fan Lemma                                     213
  9.3 Edge Connectivity                                 216
      Essential Edge Connectivity · Connectivity in Digraphs
  9.4 Three-Connected Graphs                            219
      Decomposition Trees · Contractions of Three-Connected Graphs
      Expansions of Three-Connected Graphs
  9.5 Submodularity                                     226
      Edge Connectivity of Vertex-Transitive Graphs · Nash-Williams' Orientation Theorem
  9.6 Gomory–Hu Trees                                   231
      Determining Edge Connectivity
  9.7 Chordal Graphs                                    235
      Clique Cuts · Simplicial Vertices · Tree Representations
  9.8 Related Reading                                   238
      Lexicographic Breadth-First Search · Tree-Decompositions

10 Planar Graphs
  10.1 Plane and Planar Graphs 243 (The Jordan Curve Theorem · Subdivisions)
  10.2 Duality 249 (Faces · Duals · Deletion–Contraction Duality · Vector Spaces and Duality)
  10.3 Euler's Formula 259
  10.4 Bridges 263 (Bridges of Cycles · Unique Plane Embeddings)
  10.5 Kuratowski's Theorem 268 (Minors · Wagner's Theorem · Recognizing Planar Graphs)
  10.6 Surface Embeddings of Graphs 275 (Orientable and Nonorientable Surfaces ·
       The Euler Characteristic · The Orientable Embedding Conjecture)
  10.7 Related Reading 282 (Graph Minors · Linkages · Brambles · Matroids and Duality ·
       Matroid Minors)

12 Stable Sets and Cliques
  12.1 Stable Sets 295 (Stability and Clique Numbers · Shannon Capacity · Kernels)
  12.2 Turán's Theorem 301 (An Application to Combinatorial Geometry)
  12.3 Ramsey's Theorem 308 (Ramsey Numbers and Ramsey Graphs · Bounds on Ramsey Numbers ·
       An Application to Number Theory)
  12.4 The Regularity Lemma 317 (Regular Pairs and Regular Partitions · The Erdős–Stone
       Theorem · Linear Ramsey Numbers · A Proof of the Regularity Lemma)
  12.5 Related Reading 326 (Hypergraph Extremal Problems · Constructions from Hypergraphs ·
       Ramsey Theorems in Other Contexts)

14 Vertex Colourings
  14.1 Chromatic Number                                 357
       A Greedy Colouring Heuristic · Brooks' Theorem · Colourings of Digraphs
  14.2 Critical Graphs                                  366
  14.3 Girth and Chromatic Number                       370
       Mycielski's Construction
  14.4 Perfect Graphs                                   373
       The Perfect Graph Theorem · The Strong Perfect Graph Theorem
  14.5 List Colourings                                  377
       List Chromatic Number
  14.6 The Adjacency Polynomial                         380
       Proof Technique: The Combinatorial Nullstellensatz
  14.7 The Chromatic Polynomial                         386
  14.8 Related Reading                                  389
       Fractional Colourings · Homomorphisms and Circular Colourings

15 Colourings of Maps
  15.1 Chromatic Numbers of Surfaces 391 (Heawood's Inequality · The Map Colour Theorem)
  15.2 The Four-Colour Theorem 395 (Kempe Chains · Kempe's Erroneous Proof · Reducibility ·
       Unavoidability · Proof Technique: Discharging)
  15.3 List Colourings of Planar Graphs 405 (Thomassen's Proof of the Five-Colour Theorem)
  15.4 Hadwiger's Conjecture 407 (Hadwiger's Conjecture · Hajós' Conjecture)
  15.5 Related Reading 411 (Near 4-Colourings of Graphs on Surfaces)

16 Matchings
  16.1 Maximum Matchings 413 (Augmenting Paths · Berge's Theorem)
  16.2 Matchings in Bipartite Graphs 419 (Hall's Theorem · Matchings and Coverings)
  16.3 Matchings in Arbitrary Graphs 426 (Barriers · The Tutte–Berge Theorem)
  16.4 Perfect Matchings and Factors 430 (Tutte's Theorem · Factors · T-Joins)
  16.5 Matching Algorithms 437 (Augmenting Path Search · Egerváry's Algorithm · Blossoms ·
       Flowers · Edmonds' Algorithm)
  16.6 Related Reading 449 (Stable Sets in Claw-Free Graphs · Transversal Matroids ·
       Rado's Theorem · Pfaffians)

17 Edge Colourings
  17.1 Edge Chromatic Number 451 (Edge Colourings of Bipartite Graphs)
  17.2 Vizing's Theorem 455
  17.3 Snarks 461
  17.4 Coverings by Perfect Matchings 464 (Fulkerson's Conjecture)
  17.5 List Edge Colourings 466 (The List Edge Colouring Conjecture · Galvin's Theorem)
  17.6 Related Reading 470 (Total Colourings · Fractional Edge Colourings)

18 Hamilton Cycles
  18.1 Hamiltonian and Nonhamiltonian Graphs 471 (Tough Graphs · Hypohamiltonian Graphs)
  18.2 Nonhamiltonian Planar Graphs 478 (Grinberg's Theorem · Barnette's Conjecture)
  18.3 Path and Cycle Exchanges 483 (Path Exchanges · Cycle Exchanges · Dirac's Theorem ·
       The Closure of a Graph · The Chvátal–Erdős Theorem)
  18.4 Path Exchanges and Parity 492 (The Lollipop Lemma · Uniquely Hamiltonian Graphs ·
       Sheehan's Conjecture)
  18.5 Hamilton Cycles in Random Graphs 499 (Pósa's Lemma)
  18.6 Related Reading 501 (The Bridge Lemma · The Hopping Lemma · Long Paths and Cycles)

19 Coverings and Packings in Directed Graphs
  19.1 Coverings and Packings in Hypergraphs 503 (Coverings and Decompositions · Packings and
       Transversals · Min–Max Theorems · The Erdős–Pósa Property)
  19.2 Coverings by Directed Paths 507 (The Gallai–Milgram Theorem · Berge's Path Partition
       Conjecture · The Path Partition Conjecture)
  19.3 Coverings by Directed Cycles 512 (Coherent Cyclic Orders · The Bessy–Thomassé Theorem ·
       Cycle Coverings and Ear Decompositions)
  19.4 Packings of Branchings 518 (Edmonds' Branching Theorem)
  19.5 Packings of Directed Cycles and Directed Bonds 520 (Directed Bonds and Cuts ·
       The Lucchesi–Younger Theorem · Woodall's Conjecture)
  19.6 Related Reading 526 (Packing T-Cuts)

21 Integer Flows and Coverings
  21.1 Circulations and Colourings 557 (Nowhere-Zero Circulations and Tensions)
  21.2 Integer Flows 560 (k-Flows · Flow Number · The Flow Polynomial · Integer Flows and
       Covers by Even Subgraphs)
  21.3 Tutte's Flow Conjectures 567 (The Five-Flow Conjecture · The Four-Flow Conjecture ·
       The Three-Flow Conjecture)
  21.4 Edge-Disjoint Spanning Trees 569 (The Nash-Williams–Tutte Theorem)
  21.5 The Four-Flow and Eight-Flow Theorems 573 (Uniform Covers by Even Subgraphs)
  21.6 The Six-Flow Theorem 575 (Sextuple Covers by Even Subgraphs · Jaeger's Conjecture)
  21.7 The Tutte Polynomial 578
  21.8 Related Reading 582 (Packing Bases in Matroids · The Tutte Polynomial for Matroids)
```

**Bondy–Murty (2008) is the best single complement to Diestel for this lane.** It carries, with
proofs, everything Diestel omits or exercises away: **§5.3 Ear Decompositions**, **§9.4
Three-Connected Graphs (Decomposition Trees)**, **§14.2 Critical Graphs**, **§14.3 Mycielski's
Construction**, **§14.7 The Chromatic Polynomial**, **§16.3 The Tutte–Berge Theorem**, **§17.3
Snarks**, **§18.2 Grinberg's Theorem**, **§21.2 The Flow Polynomial**, **§21.7 The Tutte
Polynomial**. Its "Proof Technique:" subsections are named and reusable, which is unusual and
worth mimicking in Remarks.

### B.4.5 Bondy & Murty, _Graph Theory with Applications_ (1976) — verbatim TOC

```
1  GRAPHS AND SUBGRAPHS
   1.1 Graphs and Simple Graphs · 1.2 Graph Isomorphism
   1.3 The Incidence and Adjacency Matrices · 1.4 Subgraphs · 1.5 Vertex Degrees
   1.6 Paths and Connection · 1.7 Cycles
   Applications: 1.8 The Shortest Path Problem · 1.9 Sperner's Lemma
2  TREES
   2.1 Trees · 2.2 Cut Edges and Bonds · 2.3 Cut Vertices · 2.4 Cayley's Formula
   Applications: 2.5 The Connector Problem
3  CONNECTIVITY
   3.1 Connectivity · 3.2 Blocks
   Applications: 3.3 Construction of Reliable Communication Networks
4  EULER TOURS AND HAMILTON CYCLES
   4.1 Euler Tours · 4.2 Hamilton Cycles
   Applications: 4.3 The Chinese Postman Problem · 4.4 The Travelling Salesman Problem
5  MATCHINGS
   5.1 Matchings · 5.2 Matchings and Coverings in Bipartite Graphs · 5.3 Perfect Matchings
   Applications: 5.4 The Personnel Assignment Problem · 5.5 The Optimal Assignment Problem
6  EDGE COLOURINGS
   6.1 Edge Chromatic Number · 6.2 Vizing's Theorem
   Applications: 6.3 The Timetabling Problem
7  INDEPENDENT SETS AND CLIQUES
   7.1 Independent Sets · 7.2 Ramsey's Theorem · 7.3 Turán's Theorem
   Applications: 7.4 Schur's Theorem · 7.5 A Geometry Problem
8  VERTEX COLOURINGS
   8.1 Chromatic Number · 8.2 Brooks' Theorem · 8.3 Hajós' Conjecture
   8.4 Chromatic Polynomial · 8.5 Girth and Chromatic Number
   Applications: 8.6 A Storage Problem
9  PLANAR GRAPHS
   9.1 Plane and Planar Graphs · 9.2 Dual Graphs · 9.3 Euler's Formula · 9.4 Bridges
   9.5 Kuratowski's Theorem · 9.6 The Five-Colour Theorem and the Four-Colour Conjecture
   9.7 Nonhamiltonian Planar Graphs
   Applications: 9.8 A Planarity Algorithm
10 DIRECTED GRAPHS
   10.1 Directed Graphs · 10.2 Directed Paths · 10.3 Directed Cycles
   Applications: 10.4 A Job Sequencing Problem · 10.5 Designing an Efficient Computer Drum
   10.6 Making a Road System One-Way · 10.7 Ranking the Participants in a Tournament
11 NETWORKS
   11.1 Flows · 11.2 Cuts · 11.3 The Max-Flow Min-Cut Theorem
   Applications: 11.4 Menger's Theorems · 11.5 Feasible Flows
12 THE CYCLE SPACE AND BOND SPACE
   12.1 Circulations and Potential Differences · 12.2 The Number of Spanning Trees
   Applications: 12.3 Perfect Squares
Appendix I   Hints to Starred Exercises            246
Appendix II  Four Graphs and a Table of their Properties  254
Appendix III Some Interesting Graphs               257
Appendix IV  Unsolved Problems                     261
Appendix V   Suggestions for Further Reading
Glossary of Symbols · Index
```

**Extraction caveat, recorded honestly:** in the ZIB scan the OCR of contents pages 5–7
interleaves the two printed columns, so the **page numbers** for chapters 7 and 8 and for the
back matter came through visually reordered. The **section titles and numbering above are exact
as printed**; the page numbers for ch. 7–8 should be re-checked against the PDF before being
quoted as locators.

**Note §8.4 "Chromatic Polynomial"** — the 1976 book already treats it as core, thirty years
before GTM 244 §14.7. Both are usable primary backing.

---

## C. Mathematical detail the scaffolder needs

Every "length" figure below is my own estimate of how many **numbered proof steps** the result
needs when written in this library's house style (`items/lem-cauchy-bounded.md`), given the
dependencies named. Where Diestel supplies the proof I read it line by line and counted the
distinct moves; where he states a result without proof I say so explicitly.

### C.1 — COLOURING: the size of the gap

The library currently publishes **four** colouring items. Every source harvested here treats
vertex colouring, edge colouring, list colouring and perfect graphs as **four separate
developments**, each of which is itself a full page in this library's sense. Diestel's ch. 5
alone contains 6 sections, 21 numbered results, and 54 exercises. The Cambridge Part II
schedule allots **5 of 24 lectures** to colouring, equal-largest with extremal graph theory.
See §C.14 for the sizing conclusion.

### C.2 Brooks's theorem

**Exact statement (Diestel Theorem 5.2.4, p. 127).**
> Let *G* be a connected graph. If *G* is neither complete nor an odd cycle, then χ(G) ≤ Δ(G).

**Both exceptions are exactly K^{Δ+1} and the odd cycles C_{2k+1}** (for which
χ = Δ+1). Connectedness is essential: without it the statement is false for a disjoint union
containing a K^{Δ+1}. Note the exception list depends on Δ: for Δ = 2 the exceptions are the
odd cycles and K³ (= C₃), for Δ ≥ 3 only K^{Δ+1}.

**Diestel's proof route** — induction on |G|, *not* the Lovász route. Decomposed:
1. Base case Δ(G) ≤ 2: *G* is a path or a cycle; assertion trivial.
2. Set Δ := Δ(G) ≥ 3, assume χ(G) > Δ. Pick v ∈ G, put H := G − v.
3. Show χ(H) ≤ Δ: every component H′ of *H* satisfies χ(H′) ≤ Δ(H′) ≤ Δ by induction
   *unless* H′ is complete or an odd cycle, in which case χ(H′) = Δ(H′)+1 ≤ Δ because every
   vertex of H′ has maximum degree in H′ and one such vertex is also adjacent to *v* in *G*.
4. **Claim (1).** Every Δ-colouring of *H* uses all the colours 1,…,Δ on the neighbours of *v*;
   in particular d(v) = Δ.
5. Notation: v_i = the neighbour of *v* coloured *i*; H_{i,j} = the subgraph of *H* spanned by
   the vertices coloured *i* or *j*.
6. **Claim (2).** For all i ≠ j, the vertices v_i and v_j lie in a common component C_{i,j}
   of H_{i,j}. *(else swap colours i,j in one component, contradicting (1))*
7. **Claim (3).** C_{i,j} is always a v_i–v_j **path**. *(three sub-moves: neighbours of v_i
   have pairwise different colours; if C_{i,j} ≠ P then P has an inner vertex u with three
   identically coloured neighbours; recolour u and contradict (2))*
8. **Claim (4).** For distinct i,j,k, the paths C_{i,j} and C_{i,k} meet only in v_i.
9. Case A: the neighbours of *v* are pairwise adjacent ⇒ G = K^{Δ+1}, nothing to show.
10. Case B: v₁v₂ ∉ G. Let u ≠ v₂ be the neighbour of v₁ on C_{1,2}; then c(u) = 2. Interchange
    colours 1 and 3 on C_{1,3} to get c′. Then u ∈ C′_{2,3} and, by (4) for *c*, also
    u ∈ v̊₁C_{1,2} ⊆ C′_{1,2} — contradicting (4) for c′.

**Length: ~14–18 numbered steps.** Comfortably a bounded proof, but it is the largest single
proof in the colouring block after the regularity lemma. **Splitting recommendation:** claims
(2), (3), (4) are natural intermediate lemmas ("Kempe components of a Δ-colouring join the
neighbours of v", "each Kempe component is a path", "distinct Kempe paths meet only at v_i").
Doing so turns one 18-step proof into four items of ≤ 8 steps each, which is what the house
style wants. Diestel does *not* need connectivity theory or blocks for this route.

**Lovász's alternative route** (Diestel Exercise 17, p. 149, attributed in the Notes to Lovász
1973). Diestel states it as: show one may assume the graph is 2-connected and Δ(G) ≥ 3, then
prove the theorem from two lemmas, quoted verbatim:
> "(i) Let v₁,…,vₙ be an enumeration of *V*. If every vᵢ (i < n) has a neighbour v_j with
> j > i, and if v₁vₙ, v₂vₙ ∈ E but v₁v₂ ∉ E, then the greedy algorithm uses at most Δ(G)
> colours."
> "(ii) If *G* is not complete, it has a vertex vₙ with non-adjacent neighbours v₁,v₂ that do
> not separate *G*."

This is the route the brief asks for. It is **shorter overall** (~10 steps for (i), ~8 for (ii),
~4 to assemble) but it **needs connectivity machinery** — the non-separating-pair lemma (ii) is
where all the work hides, and it needs 3-connectivity/block structure the library already has.
**Recommendation: scaffold BOTH.** Diestel's is self-contained given only greedy colouring;
Lovász's exhibits the greedy-order technique that the degeneracy/colouring-number items also
use, so the two proofs pay for different machinery.

### C.3 Degeneracy and the colouring number

**Exact statement (Diestel Proposition 5.2.2, p. 127).**
> Every graph *G* satisfies χ(G) ≤ col(G) = max{δ(H) | H ⊆ G} + 1.

**Definition (Diestel, p. 127, verbatim):** "The least number *k* such that *G* has a vertex
enumeration in which each vertex is preceded by fewer than *k* of its neighbours is called the
**colouring number** col(G) of *G*."

**Proof route** (Diestel gives it in a paragraph, then states the Proposition with a bare ⧠):
1. Greedy: fix v₁,…,vₙ, colour each vᵢ with the smallest positive integer not used on a
   neighbour among v₁,…,v_{i−1}; this uses at most Δ(G)+1 colours.
2. Sharpen: at vᵢ only d_{G[v₁,…,vᵢ]}(vᵢ)+1 colours are needed.
3. Build the good order **backwards**: choose vₙ first with d(vₙ) = δ(G), then v_{n−1} of
   minimum degree in G−vₙ, and so on. This is the *smallest-last / degeneracy* ordering.
4. Hence col(G) ≤ max_{H⊆G} δ(H) + 1.
5. Conversely for H ⊆ G, col(G) ≥ col(H) ≥ δ(H)+1, since the back-degree of the last vertex in
   any enumeration of *H* is its ordinary degree in *H*, which is at least δ(H).

**Length: 6–8 numbered steps.** Trivially bounded. This is the **first item any colouring page
should carry after the greedy Δ+1 bound**, and the library already has the Δ+1 bound, so this
is a one-item extension with immediate payoff — Diestel uses Prop 5.2.2 and its companion
Lemma 5.2.3 in chapters 7, 9 and 11.

**Companion, Diestel Lemma 5.2.3 (p. 127):** "Every *k*-chromatic graph has a *k*-chromatic
subgraph of minimum degree at least k−1." Proof is **3 steps** (take H ⊆ G minimal with
χ(H)=k; a vertex of degree ≤ k−2 would let a (k−1)-colouring of H−v extend). This tiny lemma
is used at 7.3, 9.2.1, 9.2.3 and 11.2.3 — it is high-fan-out and cheap. **Scaffold it.**

Terminology note: Diestel writes `col(G)`; most of the literature says *G* is **k-degenerate**
when col(G) ≤ k+1, i.e. **degeneracy = col − 1**. Record both. Diestel also relates col to
**arboricity** (Exercise 14 and the remark after Theorem 2.4.3, the Nash-Williams tree-covering
theorem) — that link is a natural corollary the library can already prove, since it has
Nash-Williams-adjacent tree material.

### C.4 Edge colouring

**König's edge-colouring theorem (Diestel Proposition 5.3.1, p. 132).**
> Every bipartite graph *G* satisfies χ′(G) = Δ(G).

*Proof route:* induction on ‖G‖. Remove xy; Δ-edge-colour G−xy; find α missing at *x* and β
missing at *y*; if α = β colour xy; else extend the β-edge at *x* to a maximal α/β-alternating
walk *W*, note *W* is a path and cannot contain *y* (else W+xy is an odd cycle, contradicting
**Proposition 1.6.1**, bipartite ⟺ no odd cycle); swap α and β along *W*; colour xy with β.
**Length: 8–10 steps.** *Dependency:* Prop 1.6.1 only — which the library already publishes as
bipartite-iff-no-odd-cycle. **This is the single cheapest substantial colouring item available
to this lane.**

**Vizing's theorem (Diestel Theorem 5.3.2, p. 133).**
> Every graph *G* satisfies Δ(G) ≤ χ′(G) ≤ Δ(G)+1.

*Proof route (the fan argument, in Diestel's sequence formulation):* induction on ‖G‖.
1. For every edge *e* there is a (Δ+1)-colouring of G−e; at each vertex *v* some colour is
   missing, since edges at *v* use at most d(v) ≤ Δ colours.
2. Define the **α/β-path from v**: the unique maximal alternating walk starting at *v*; it is a
   path.
3. **Claim (∗).** Given xy ∈ E and any colouring of G−xy in which α is missing at *x* and β is
   missing at *y*, the α/β-path from *y* ends in *x*. (Else swap along it and colour xy with α.)
4. Fix xy₀ ∈ G; let c₀ be a colouring of G₀ := G−xy₀ and α a colour missing at *x*.
5. **Build the fan:** let y₀,…,y_k be a maximal sequence of distinct neighbours of *x* such that
   c₀(xy_{i+1}) is missing in c₀ at y_i for every i < k.
6. Define shifted colourings c_i of G_i := G−xy_i by c_i(xy_j) = c₀(xy_{j+1}) for j < i,
   c_i(e) = c₀(e) otherwise; the same colours are missing at *x* in each c_i as in c₀.
7. Let β be a colour missing at y_k in c₀. By (∗) the α/β-path *P* from y_k in G_k (w.r.t. c_k)
   ends in *x*, on an edge yx coloured β.
8. By maximality of the sequence, y = y_i for some 0 ≤ i < k; so β = c_k(xy_i) = c₀(xy_{i+1}).
9. By the choice of y_{i+1}, β was missing at y_i in c₀ and hence in c_i.
10. The α/β-path P′ from y_i in G_i w.r.t. c_i starts with y_i P y_k, since the edges of P−x̊
    are coloured the same in c_i as in c_k.
11. But in c₀, hence in c_i, there is no edge at y_k coloured β; so P′ ends in y_k,
    contradicting (∗).

**Length: 12–16 numbered steps** — the fan is steps 5–6, and it is the only conceptually hard
move. Diestel's proof is exactly one printed page. **This is bounded and writable.** Compare
the textbook "fan + Kempe chain" presentations (West §7.1, Bondy–Murty §17.2): they are the
same argument with the fan drawn as a set of edges at *x* rather than as a sequence, and they
run to 2–3 pages because they carry more case analysis. **Diestel's sequence formulation is the
one to scaffold** — it is strictly shorter and loses nothing.

**Class 1 / class 2 (Diestel, p. 133, verbatim):** "graphs satisfying χ′ = Δ are called
**class 1**, those with χ′ = Δ+1 are **class 2**. There is no good characterization theorem
that enables us to tell these classes apart, because no easily checkable 'certificate' is known
for a graph to be class 2." Cheap class-2 witnesses the library can prove in ≤ 6 steps: every
regular graph of **odd** order is class 2 (a colour class is a matching, so has ≤ (n−1)/2
edges, so Δ colour classes cover ≤ Δ(n−1)/2 < Δn/2 = ‖G‖); the Petersen graph is class 2
(it is a snark — see §C.10).

**Shannon's bound and Vizing's multigraph theorem** are NOT in Diestel; see the sourced entry
below in §C.13.

### C.5 List colouring

**Definitions (Diestel, p. 134, verbatim).** "*G* is called **k-list-colourable**, or
**k-choosable**, if, for every family (S_v)_{v∈V} with |S_v| = k for all *v*, there is a vertex
colouring of *G* from the lists S_v. The least integer *k* for which *G* is *k*-choosable is the
**list-chromatic number**, or **choice number** ch(G) of *G*." Edge version:
ch′(G) := ch(L(G)). Both inequalities ch(G) ≥ χ(G) and ch′(G) ≥ χ′(G) hold because ordinary
colouring is the special case of equal lists.

**Thomassen's 5-choosability theorem (Diestel Theorem 5.4.2, p. 135).**
> Every planar graph is 5-choosable.

*Proof route — and it IS short enough for a bounded item.* Diestel proves the strengthened
assertion, quoted verbatim:
> "(∗) Suppose that every inner face of *G* is bounded by a triangle and its outer face by a
> cycle C = v₁…v_kv₁. Suppose further that v₁ has already been coloured with the colour 1, and
> v₂ has been coloured 2. Suppose finally that with every other vertex of *C* a list of at least
> **3** colours is associated, and with every vertex of G−C a list of at least **5** colours.
> Then the colouring of v₁ and v₂ can be extended to a colouring of *G* from the given lists."

1. (∗) ⇒ theorem: add edges to make the plane graph maximal; by **Proposition 4.2.8** it is a
   plane triangulation; colour v₁,v₂ of the outer triangle differently from their lists; apply (∗).
2. Prove (∗) by induction on |G|. Base |G| = 3: G = C, trivial.
3. **Case chord.** If *C* has a chord vw, it lies on two cycles C₁,C₂ ⊆ C+vw with v₁v₂ ∈ C₁ and
   v₁v₂ ∉ C₂. Apply the induction hypothesis to G₁, then — with the colours now on v,w — to G₂.
4. **Case no chord.** Let v₁,u₁,…,u_m,v_{k−1} be the neighbours of v_k in cyclic order; all uᵢ
   lie inside *C*; P := v₁u₁…u_mv_{k−1} is a path and C′ := P ∪ (C−v_k) a cycle.
5. Choose two colours j,ℓ ≠ 1 from v_k's list and delete them from every uᵢ's list. Every list
   on C′ still has ≥ 3 colours, so by induction colour C′ and its interior, i.e. G−v_k.
6. At least one of j,ℓ is unused on v_{k−1}; assign it to v_k.

**Length: 8–12 numbered steps.** This is one of the **best value-for-length results in the whole
of graph colouring** — a deep theorem with a genuinely bounded proof. **Dependency: Proposition
4.2.8 only** (a plane graph of order ≥ 3 is maximally plane iff it is a plane triangulation),
which the library's 40-item plane-graph page should already carry or can carry cheaply. Diestel
notes explicitly: "The proof of this does not use the five colour theorem (or even Euler's
formula …). We thus reobtain the five colour theorem as a corollary, with a very different
proof." **That corollary is free and should be scaffolded.**

Diestel also notes: **planar graphs are NOT in general 4-choosable** — Voigt (1993) constructed
a plane graph of order 238 that is not 4-choosable, so Thomassen's theorem is best possible.
Statement only; the construction is far too large to reproduce.

**The kernel lemma (Diestel Lemma 5.4.3, p. 137).**
> Let *H* be a graph and (S_v)_{v∈V(H)} a family of lists. If *H* has an orientation *D* with
> d⁺(v) < |S_v| for every *v*, and such that every induced subgraph of *D* has a kernel, then
> *H* can be coloured from the lists S_v.

**Definition (verbatim):** "an independent set U ⊆ V(D) [is] a **kernel** of *D* if, for every
vertex v ∈ D−U, there is an edge in *D* directed from *v* to a vertex in *U*."
*Proof:* induction on |H|; take a colour α, let D′ be the subgraph spanned by vertices with
α ∈ S_v, take a kernel U ≠ ∅ of D′, colour *U* with α, delete α from the other lists of D′, and
recurse. **Length: 6–8 steps.** Diestel remarks that keeping list lengths **variable** is
essential — the induction fails with uniform lengths.

**Galvin's theorem (Diestel Theorem 5.4.4, p. 137).**
> Every bipartite graph *G* satisfies ch′(G) = χ′(G).

*Proof route:* let χ′(G) = k with a *k*-edge-colouring c. Orient the line graph *H* of *G*:
for adjacent e,e′ with c(e) < c(e′), orient e e′ **from e′ to e** if they meet in *X*, and
**from e to e′** if they meet in *Y*. Compute d⁺(e) < k. Then every induced subgraph of *D* has
a kernel, **immediately from the stable marriage theorem (Diestel 2.1.4, Gale–Shapley)**,
reading the directions as preferences: a stable matching is exactly a kernel.
**Length: 10–14 steps**, plus the kernel lemma (6–8) and Gale–Shapley (which the library may or
may not have). **Corollary 5.4.5** is then free: ch′(G) = Δ(G) for bipartite *G*, using König
5.3.1.

**List Colouring Conjecture (Diestel, p. 137, verbatim):** "Every graph *G* satisfies
ch′(G) = χ′(G)." Kahn (1994) proved it asymptotically: for every ε > 0, every *G* with large
enough maximum degree satisfies ch′(G) ≤ (1+ε)Δ(G).

**ch(G) ≥ χ(G) with a witness.** Diestel Exercise 30: "For every integer *k*, find a
2-chromatic graph whose choice number is at least *k*" — so the gap is unbounded even for
bipartite graphs. Diestel Exercise 33: "Prove that the choice number of K^r₂ is *r*"
(i.e. ch(K_{2,2,…,2}) = r for the complete *r*-partite graph with parts of size 2). The
standard smallest explicit witness is **K_{2,4}**: χ = 2 but ch = 3. **Theorem 5.4.1 (Alon
1993)** is the general statement that large average degree forces large choice number; it is
probabilistic and Diestel does not prove it.

### C.6 Perfect graphs

**Definitions (Diestel, p. 139, verbatim).** ω(G) = "the greatest integer *r* such that
K^r ⊆ G", the **clique number**; α(G) = "the greatest size of a set of independent vertices",
the **independence number**; "A graph is called **perfect** if every induced subgraph H ⊆ G has
chromatic number χ(H) = ω(H)". **Holes and antiholes (p. 141, verbatim):** "induced cycles of
length at least 4 in *G* are usually referred to as **holes** in *G*, while holes in Ḡ are
**antiholes** of *G*."

**Perfect graph theorem (Diestel Theorem 5.5.4, Lovász 1972).**
> A graph is perfect if and only if its complement is perfect.

Diestel gives **two proofs**, and they have very different costs.

*Route A (Lovász's original, via replication).* Needs:
- **Lemma 5.5.5 (Replication Lemma).** "Any graph obtained from a perfect graph by replicating
  a vertex is again perfect." (Replicating x = adding x′ joined to *x* and all neighbours of
  *x*.) Proof by induction on the order: **~10 steps**, with the key case split on whether
  ω(G′) = ω+1 or ω.
- The claim (∗): "Every induced subgraph *H* of *G* has a complete subgraph *K* that meets all
  its independent vertex sets of size α(H)." Proof builds a blow-up H′ on disjoint copies of the
  maximum independent sets, shows χ(H′) = |𝒜′| and applies the replication lemma: **~12 steps**.
- Assembly: α(H) applications of (∗) cover *H* by α(H) cliques: **~4 steps**.
  **Total: ~26 steps across 3 items.** Diestel adds a full page of motivating commentary
  explaining that the trick is "simply to *make* the sets in 𝒜 disjoint" — worth reproducing as
  a Remark.

*Route B (Gasparian 1996, via Theorem 5.5.6).*
> **Theorem 5.5.6 (Lovász 1972).** A graph *G* is perfect if and only if |H| ≤ α(H)·ω(H) for
> all induced subgraphs H ⊆ G.

Since the condition is symmetric in *G* and Ḡ, this **implies** the perfect graph theorem.
*Proof route:* necessity is 3 steps. Sufficiency by induction on n = |G|:
(1) every non-empty independent U satisfies χ(G−U) = ω(G−U) = ω;
(2)–(3) a K^ω either meets every colour class of G−u, or all but exactly one;
(4) taking A₀ = a maximum independent set and A₁,…,A_{αω} the colour classes of ω-colourings of
G−u_i, every K^ω misses exactly one Aᵢ;
(5) form the incidence matrices *A* (rows = Aᵢ) and *B* (columns = Kⱼ), note J := AB is the
(αω+1)×(αω+1) matrix with 0 diagonal and 1 elsewhere, hence non-singular, hence rank αω+1;
(6) *A* has *n* columns so n ≥ αω+1, contradicting the hypothesis.
**Length: 12–16 numbered steps, and it is entirely self-contained** — it needs only linear
algebra over ℝ and the definition of perfection.

**Recommendation: scaffold Route B as the main proof and Route A as the second proof.**
Route B is shorter, proves a strictly stronger theorem, and depends on nothing the library
lacks. Route A is worth having anyway because the **replication lemma is independently useful**
and because Diestel's Exercise 51 generalises it to substituting whole perfect graphs for
vertices.

**Chordal graphs are perfect.**
- **Definition (verbatim):** "a graph is **chordal** (or **triangulated**) if each of its cycles
  of length at least 4 has a chord, i.e. if it contains no induced cycles other than triangles."
- **Proposition 5.5.1.** "A graph is chordal if and only if it can be constructed recursively by
  pasting along complete subgraphs, starting from complete graphs." *(Definition of pasting,
  verbatim: "If *G* is a graph with induced subgraphs G₁, G₂ and *S*, such that G = G₁ ∪ G₂ and
  S = G₁ ∩ G₂, we say that *G* arises from G₁ and G₂ by **pasting** these graphs together along
  S.")* Proof: forward is 4 steps; converse is induction on |G| using a minimal a–b separator
  *X* and showing S = G[X] is complete via two shortest X-paths forming a chordless cycle of
  length ≥ 4. **~10 steps.**
- **Proposition 5.5.2.** "Every chordal graph is perfect." Proof: **6 steps**, by pasting and
  combining an ω(H₁)- and an ω(H₂)-colouring across the complete T.
- Prop 5.5.1 is reused at **12.3.6** (chordal ⟺ tree-decomposition into complete parts), which
  in turn feeds **12.4.4** (tw(G) = min{ω(H)−1 : G ⊆ H chordal}). High fan-out; scaffold it.

**Other perfect classes** Diestel relegates to exercises, all cheap:
- complement of a bipartite graph is perfect (Ex. 41, from **König's Theorem 2.1.1**, which the
  library already publishes) — ~5 steps;
- **comparability graphs** are perfect (Ex. 43): "a graph is a **comparability graph** if there
  exists a partial ordering of its vertex set such that two vertices are adjacent if and only if
  they are comparable" — the proof is Mirsky/Dilworth-flavoured, ~8 steps;
- **interval graphs** (Ex. 44): "*G* is an **interval graph** if there exists a set
  {I_v | v ∈ V(G)} of real intervals such that I_u ∩ I_v ≠ ∅ if and only if uv ∈ E(G)";
  (i) every interval graph is chordal; (ii) the complement of an interval graph is a
  comparability graph; and the converse is **Gilmore–Hoffman (1964)**. Each part ~6 steps.
- **line graphs:** Ex. 45 "χ(H) ∈ {ω(H), ω(H)+1} for every line graph *H*" — this is Vizing
  restated, ~3 steps given Vizing.

**Strong perfect graph theorem (Diestel Theorem 5.5.3, Chudnovsky–Robertson–Seymour–Thomas
2006).**
> A graph *G* is perfect if and only if neither *G* nor Ḡ contains an odd cycle of length at
> least 5 as an induced subgraph.

**Statement only.** Diestel: "The proof of the strong perfect graph theorem is long and
technical, and it would not be too illuminating to attempt to sketch it." Published as
Ann. Math. 164 (2006), 51–229 — 178 journal pages. This is a **hard `rem-` / `proved_here:
false` case**, and it is exactly the narrow last resort the owner rule contemplates: it is
well-established, source-checked, and cannot be built in scope.

**χ-boundedness (Diestel §5.6)** is a live research area with two genuinely bounded results:
**Proposition 5.6.2** (P-free graphs are χ-bounded, for a fixed path *P*) via **Lemma 5.6.3**,
together about **12 steps** and needing nothing but induction. **Theorem 5.6.1**
(Scott–Seymour 2016: no odd hole ⇒ χ-bounded) is statement-only.

### C.7 De Bruijn–Erdős compactness

**Exact statement (Diestel Theorem 8.1.3, de Bruijn & Erdős 1951).**
> Let G = (V,E) be a graph and k ∈ ℕ. If every finite subgraph of *G* has chromatic number at
> most *k*, then so does *G*.

**Diestel gives three proofs**, and this is unusually valuable: it lets the library show the
same theorem at three different choice-strengths.

*Proof 1 — for **countable** *G*, by **König's Infinity Lemma** (Lemma 8.1.2).* Enumerate
V = v₀,v₁,…; put Gₙ := G[v₀,…,vₙ]; let Vₙ = the set of *k*-colourings of Gₙ; join c ∈ Vₙ to its
restriction c′ ∈ V_{n−1}. Each Vₙ is finite and non-empty, so the infinity lemma gives a ray
c₀c₁…, and c := ⋃cₙ is a *k*-colouring of *G*. **Length: 5–6 steps** given König's lemma
(which the library already publishes). König's lemma itself is ~6 steps.

*Proof 2 — for **arbitrary** *G*, by the "compactness principle" of Diestel's Appendix A.*
X := V, S := {1,…,k}, ℱ := the finite subsets of *V*, A(Y) := the *k*-colourings of G[Y].
**Length: ~6 steps.**

*Proof 3 — for **arbitrary** *G*, by **Tychonoff's theorem**.* Take the compact product space
X := {1,…,k}^V with each factor discrete. For finite U ⊆ V let A_U := {f ∈ X : f|U is a
*k*-colouring of G[U]}; these are closed (and open); every finite intersection is non-empty
because G[⋃𝒰] is *k*-colourable; the finite intersection property gives ⋂A_U ≠ ∅, and any
element of it is a *k*-colouring of *G*. **Length: 7–9 steps.**

**Choice principle.** Diestel does not analyse this; the sourced answer is in §C.13. For
scaffolding purposes the safe, fully-honest framing is: Proof 1 needs no choice beyond what the
enumeration supplies (for countable *G* with a given enumeration it is effectively choice-free);
Proofs 2 and 3 are stated over ZFC. The library already declares AC, countable choice and
dependent choice as adopted foundational axioms, so **all three proofs are in scope**, but the
choice cost should be declared per proof.

### C.8 Szemerédi's regularity lemma

**Exact statement (Diestel Theorem 7.4.1).**
> For every ε > 0 and every integer m ≥ 1 there exists an integer *M* such that every graph of
> order at least *m* admits an ε-regular partition {V₀,V₁,…,V_k} with m ≤ k ≤ M.

**Definitions, verbatim (Diestel p. 193).** For disjoint X,Y ⊆ V, ‖X,Y‖ is the number of X–Y
edges and d(X,Y) := ‖X,Y‖/|X||Y| is the **density**. "Given any ε > 0, we call a pair (A,B) of
disjoint sets A,B ⊆ V **ε-regular** if all X ⊆ A and Y ⊆ B with |X| ≥ ε|A| and |Y| ≥ ε|B|
satisfy |d(X,Y) − d(A,B)| ≤ ε." A partition {V₀,V₁,…,V_k} of *V* with **exceptional set** V₀
is an **ε-regular partition** if:
> "(i) |V₀| ≤ ε|V|; (ii) |V₁| = … = |V_k|; (iii) all but at most εk² of the pairs (Vᵢ,V_j) with
> 1 ≤ i < j ≤ k are ε-regular."

**Zhao's statement (Theorem 2.1.9)**, for comparison: "For every ε > 0, there exists a constant
*M* such that every graph has an ε-regular partition into at most *M* parts." Zhao's
Theorem 2.1.20 is the **equitable** version. **The two statements differ**: Diestel builds
equitability into the definition (an exceptional bin V₀ plus exactly equal other parts) and
adds a lower bound *m* on the number of parts; Zhao states the plain version first and derives
equitability. See §D.

**The energy-increment proof, decomposed** (Diestel §7.4, pp. 194–200; this is what a scaffold
should mirror):
- **(0) Defect Cauchy–Schwarz.** For reals μᵢ > 0 and eᵢ ≥ 0, Σ eᵢ²/μᵢ ≥ (Σeᵢ)²/Σμᵢ. Diestel
  derives it from Cauchy–Schwarz with aᵢ = √μᵢ, bᵢ = eᵢ/√μᵢ. **~3 steps.**
- **(1) The energy.** q(A,B) := (|A||B|/n²)d²(A,B) = ‖A,B‖²/(|A||B|n²); q(𝒜,ℬ) := Σ q(A′,B′);
  q(𝒫) := Σ_{i<j} q(Cᵢ,C_j); for a partition with exceptional set C₀, treat C₀ as singletons.
  Note q(𝒫) ≤ 1 always. **~4 steps.**
- **(2) Lemma 7.4.2 — refinement never decreases energy.** (i) for a pair, (ii) for a partition.
  **~8 steps**, both from (0).
- **(3) Lemma 7.4.3 — an irregular pair gives a definite gain.** If (C,D) is not ε-regular there
  are 2-part partitions 𝒞, 𝒟 with q(𝒞,𝒟) ≥ q(C,D) + ε⁴|C||D|/n². **~10 steps** — this is the
  only genuinely computational item, a chain of algebraic inequalities.
- **(4) Lemma 7.4.4 — an irregular partition gives a constant gain.** For 0 < ε ≤ 1/4, a
  partition 𝒫 = {C₀,…,C_k} with |C₀| ≤ εn and equal other parts that is not ε-regular refines to
  𝒫′ with k ≤ ℓ ≤ k·4^{k+1}, |C₀′| ≤ |C₀| + n/2^k, equal non-exceptional parts, and either 𝒫′
  is ε-regular or q(𝒫′) ≥ q(𝒫) + ε⁵/2. **~15 steps**, including the bookkeeping that cuts the
  refined sets into equal pieces of size d = ⌊c/4^k⌋.
- **(5) The iteration.** s := 2/ε⁵ bounds the number of applications since q ≤ 1 and each gains
  ε⁵/2. Choose k ≥ m with 2^{k−1} ≥ s/ε so that s increments of n/2^k plus the initial |C₀|
  stay below εn; set M := max{f^s(k), 2k/ε} with f(x) = x·4^{x+1}. **~12 steps.**

**Total: 5–6 items, each ≤ 15 numbered steps.** The regularity lemma **is** affordable in this
library, provided it is split exactly along Diestel's lemma boundaries. Do not attempt it as
one item.

**Tower-type bound.** Diestel does not state a lower bound; **Zhao Theorem 2.1.17** does
(Gowers' tower-type lower bound on the number of parts, citing Moshkovitz–Shapira 2016).
Statement only.

**Sparseness caveat, verbatim (Diestel p. 194):** "the regularity lemma in this form is designed
for use with dense graphs: for sparse graphs it becomes trivial, because all densities of pairs
– and hence their differences – tend to zero." Worth a Remark; it prevents a reader misusing it.

### C.9 Counting, removal, and Roth

**Blow-up / embedding lemma (Diestel Lemma 7.5.2).**
> For all d ∈ (0,1] and Δ ≥ 1 there exists an ε₀ > 0 with the following property: if *G* is any
> graph, *H* is a graph with Δ(H) ≤ Δ, s ∈ ℕ, and *R* is any **regularity graph** of *G* with
> parameters ε ≤ ε₀, ℓ ≥ 2s/d^Δ and *d*, then H ⊆ R_s ⇒ H ⊆ G.

*(Regularity graph, verbatim: given an ε-regular partition with |V₁|=…=|V_k|=:ℓ and d ∈ [0,1],
R is the graph on {1,…,k} in which i,j are adjacent iff (Vᵢ,V_j) is ε-regular of density ≥ d.)*
Proof is a greedy embedding maintaining target sets Yᵢ, using **Lemma 7.5.1** (in an ε-regular
pair, all but < ε|A| vertices of *A* have ≥ (d−ε)|Y| neighbours in any Y ⊆ B with |Y| ≥ ε|B|;
**~4 steps**). **Blow-up lemma: ~15 steps.**

**Counting lemma (Diestel Lemma 7.6.2; Zhao Theorem 2.6.2/2.6.4).** Diestel's version, exact:
> Let *R* be a graph on {1,…,k} ⊆ ℕ, and φ: H→R a homomorphism for some graph *H*. Let *G* be a
> multipartite graph with vertex classes V₁,…,V_k, whose pairs (Vᵢ,V_j) with ij ∈ E(R) are
> (ε,d_{ij})-**uniform** in *G* for some ε > 0 and various d_{ij} ≥ 0. Then
> | hom_φ(H,G) − ∏_{e∈E(H)} d_e^φ · ∏_{u∈V(H)} |V_{φ(u)}| | ≤ ε‖H‖ ∏_{u∈V(H)} |V_{φ(u)}|.

Diestel switches to **ε-uniformity** here rather than ε-regularity: (A,B) is
**(ε,d)-uniform** if every non-empty X ⊆ A, Y ⊆ B satisfies | ‖X,Y‖ − d|X||Y| | ≤ ε|A||B|,
equivalently |d(X,Y) − d| ≤ ε|A||B|/|X||Y|. He proves ε-regular ⇒ ε-uniform and
ε-uniform ⇒ ∛ε-regular (Ex. 42). Proof of the counting lemma is induction on ‖H‖:
**~20 steps.** Zhao's triangle-only version (**Theorem 2.2.1, Triangle Counting Lemma**) is far
shorter — about **8 steps** — and is the right starting point.

**Removal lemma (Diestel Lemma 7.6.3).**
> For every graph *H* and every ρ > 0 there exist η > 0 and n₀ such that the following holds for
> all graphs *G* of order n ≥ n₀: if there are at most ηn^{|H|} injective homomorphisms H→G,
> then *G* contains a set *E* of at most ρn² edges such that H ⊄ G−E.

**Zhao's phrasing (Theorem 2.6.5)** is the one most readers know, and is cleaner:
> For every graph *H* and constant ε > 0, there exists δ = δ(H,ε) > 0 such that every *n*-vertex
> graph *G* with fewer than δ n^{v(H)} copies of *H* can be made *H*-free by removing fewer than
> εn² edges.

**Zhao Theorem 2.3.1 (Triangle Removal Lemma, Ruzsa–Szemerédi 1978)**, the H = K₃ case:
> For all ε > 0, there exists δ > 0 such that any graph on *n* vertices with fewer than δn³
> triangles can be made triangle-free by removing fewer than εn² edges.

Zhao's **Remark 2.3.2** names the proof recipe: **"partition–clean–count"** — apply the
regularity lemma, delete edges in irregular pairs / low-density pairs / inside parts, then use
the counting lemma to show any surviving copy would force many copies. **Length: ~15 steps**
given regularity + counting. Zhao notes the resulting δ is **tower-type**,
δ = 1/tower(ε^{−O(1)}), improved by Fox (2011) to 1/tower(O(log(1/ε))) by a non-regularity
method. Diestel's route to Roth goes via **Theorem 7.6.4** (thinly spread copies) and
**Corollary 7.6.5**:
> For every γ > 0 there exists an integer n₀ such that the following holds for every graph *G*
> of order n ≥ n₀: if every edge of *G* lies in **exactly one triangle**, then *G* has at most
> γn² edges.

Zhao's equivalent is **Corollary 2.3.3, the "diamond-free lemma"**, and **Theorem 2.3.5, the
"(6,3)-theorem"**.

**Roth's theorem (Diestel Proposition 7.7.3; Zhao Theorem 2.4.1).** Diestel:
> lim_{n→∞} r₃(n)/n = 0, where r_k(n) := max{|D| : D ⊆ n and *D* contains no AP of length k}.

Zhao: "Let A ⊆ [N] be 3-AP-free. Then |A| = o(N)."

*Diestel's proof, decomposed — this is a beautiful bounded item:*
1. Given ε > 0, take γ := ε/12 and let n₀ come from Corollary 7.6.5.
2. Let D ⊆ n contain no 3-AP. Build the tripartite *G* on X := {1,…,n}, Y := {1,…,2n},
   Z := {1,…,3n} (disjoint copies).
3. Edges are those of the **defining triangles** K(x,d) = K³ on {x, x+d, 2x+d} for x ∈ X, d ∈ D.
4. Any two vertices of a defining triangle determine the third, so the defining triangles are
   edge-disjoint; |G| = 6n and ‖G‖ = 3n|D|.
5. Suppose T ⊆ G is a non-defining triangle; its three edges come from three distinct defining
   triangles T₁,T₂,T₃.
6. *T* has one vertex in each class. With T₁ = K(x,a), T₂ = K(x,b), T₃ = K(x′,c) and x′ ≠ x,
   the vertices of *T* are x, x+a = x′+c, 2x+b = 2x′+c.
7. Hence a = c + (x′−x) and b = c + 2(x′−x), so (c,a,b) or (b,a,c) is a 3-AP in *D* with
   non-zero difference — contradiction.
8. So every edge of *G* lies in exactly one triangle; Corollary 7.6.5 gives ‖G‖ ≤ γ(6n)².
9. ‖G‖ = 3n|D| gives |D| ≤ 12γn = εn.

**Length: 9–12 numbered steps.** Fully bounded, fully self-contained given the triangle removal
lemma. **This is the single highest-value item in the regularity block.**

**Zhao's route differs slightly**: he applies the **diamond-free lemma (Corollary 2.3.3)** rather
than restating a removal lemma, and gives an extra corner-free strengthening
(**Theorem 2.4.2**, Ajtai–Szemerédi 1974, with Solymosi's 2003 proof) plus **Proposition 2.4.4**:
r₃(N)·N ≤ r_corner(2N). **Schrijver's route differs again** (see §C.12).

**Szemerédi's theorem itself (Diestel 7.7.1 / 7.7.2)** is statement-only in every source
harvested. Diestel: "Even given the regularity lemma, Szemerédi's theorem is still a deep result
far beyond the scope of this book."

**Erdős–Stone–Simonovits, second proof.** Both Diestel (§7.5) and Zhao (**Theorem 2.6.7**)
derive Erdős–Stone from regularity. Zhao frames it explicitly as the template of "boosting an
exact extremal result (Turán) to an asymptotic result via regularity" — a Remark worth
reproducing. The library already publishes Erdős–Stone–Simonovits, so this is a **second proof**
of a published item, not a new one; per SCHEMA that is an addition, not a rewrite.

### C.10 Flows, the flow polynomial, and flow–colouring duality

**The flow polynomial (Diestel Theorem 6.3.1, Tutte 1954).**
> For every multigraph *G* there exists a polynomial *P* such that, for any finite abelian group
> *H*, the number of *H*-flows on *G* is P(|H|−1).

*Proof:* induction on ‖G‖ via deletion–contraction, using **Lemma 6.1.3** (every circulation on
G/e₀ extends to a circulation on *G*). **~12 steps.** **Corollary 6.3.2** is immediate and
striking: whether *G* has an *H*-flow depends only on |H|, not on the group structure.
**Theorem 6.3.3 (Tutte 1950):** a multigraph admits a *k*-flow iff it admits a ℤ_k-flow.

**Flow–colouring duality (Diestel Theorem 6.5.3, Tutte 1954).**
> For every dual pair G, G* of plane multigraphs, χ(G) = φ(G*).

where φ(G) is the **flow number**, the least *k* such that *G* has a *k*-flow.
*Proof route:* **Lemma 6.5.1** (a bijection e⃗ ↦ e⃗* on directed edges compatible with duality)
then **Lemma 6.5.2** (g is a circulation on G* iff *f* satisfies (F1) and vanishes on every
oriented cycle), then the main argument, using **Proposition 1.5.5** (normal spanning trees).
**~20 steps across 3 items.** Diestel: "every *k*-colouring of a plane multigraph gives rise to
a *k*-flow on its dual, and vice versa."

**Tutte's flow conjectures, verbatim (Diestel §6.6).**
- **Five-Flow Conjecture (Tutte 1954):** "Every bridgeless multigraph has a 5-flow."
- **Four-Flow Conjecture (Tutte 1966):** "Every bridgeless multigraph not containing the
  Petersen graph as a minor has a 4-flow." *(By Prop 1.7.3, 'minor' may be replaced by
  'topological minor'.)*
- **Three-Flow Conjecture (Tutte 1972):** "Every multigraph without a cut consisting of exactly
  one or exactly three edges has a 3-flow."
- **Snark, verbatim:** "A cubic bridgeless graph or multigraph without a 4-flow (equivalently,
  without a 3-edge-colouring) is called a **snark**."
- Diestel's own dictionary, worth reproducing as a Remark: by Theorem 6.5.3 "the 3-flow
  conjecture translates to Grötzsch's theorem (5.1.3), the 4-flow conjecture to the four colour
  theorem (since the Petersen graph is not planar, it is not a minor of a planar graph), the
  5-flow conjecture to the five colour theorem."

**Small-k results, all short and all scaffoldable:**
- **6.4.1.** A graph has a 2-flow iff all its degrees are even. **~4 steps.**
- **6.4.2.** A cubic graph has a 3-flow iff it is bipartite. **~10 steps**, uses Prop 1.6.1.
- **6.4.3.** For all even n ≥ 4, φ(Kⁿ) = 3. **~10 steps.**
- **6.4.4.** Every 4-edge-connected graph has a 4-flow. **~10 steps**, uses Corollary 2.4.2
  (2k-edge-connected ⇒ *k* edge-disjoint spanning trees).
- **6.4.5.** A cubic graph has a 4-flow iff it is 3-edge-colourable. **~10 steps.** *(This is
  what makes "snark" and "class 2" the same notion for cubic bridgeless graphs.)*
- **Theorem 6.6.1 (Seymour 1981).** Every bridgeless multigraph has a 6-flow. Uses global
  Menger 3.3.6, 6.1.3, 6.3.2, 6.3.3. **Longer — ~30 steps**; a candidate for splitting into a
  main lemma plus assembly, or for deferral.

**Not in Diestel: the Tutte polynomial itself.** Diestel's flow polynomial (6.3.1) is a
specialisation of it, but he never defines T(G;x,y). See §C.13.

### C.11 Structural results

**Tutte's 1-factor theorem (Diestel Theorem 2.2.1, Tutte 1947).**
> A graph *G* has a 1-factor if and only if q(G−S) ≤ |S| for all S ⊆ V(G).

(q(G) = number of odd components.) *Proof route:*
1. Necessity is immediate: each odd component of G−S sends a factor edge to *S*.
2. May assume *G* edge-maximal without a 1-factor (a bad set for a supergraph is bad for *G*).
3. **(∗)** If *G* contains a bad set *S* then all components of G−S are complete and every
   s ∈ S is adjacent to all of G−s. Conversely, if S satisfies (∗) then *S* or ∅ is bad.
4. So it suffices to find *S* satisfying (∗). Take *S* = the set of vertices adjacent to every
   other vertex.
5. If (∗) fails, some component of G−S has non-adjacent a,a′; take a,b,c the first three
   vertices on a shortest a–a′ path, so ab, bc ∈ E, ac ∉ E; b ∉ S gives d with bd ∉ E.
6. Maximality gives matchings M₁ of *V* in G+ac and M₂ of *V* in G+bd.
7. Take *P* maximal alternating from *d* starting with an M₁-edge; case-split on whether the
   last edge is in M₁ or M₂ to build an even cycle *C* whose only non-edge of *E* is bd.
8. Swap M₂ along *C* to get a matching of *V* inside *E* — contradiction.

**Length: 12–16 numbered steps.** Bounded, and needs nothing the library lacks (it already
publishes Berge, Hall, König, Gallai). **This is a high-value, low-cost addition** — Tutte's
theorem is the one obvious hole in the library's otherwise complete matching page.

**Gallai–Edmonds (Diestel Theorem 2.2.3, Gallai 1964; Edmonds 1965).** Diestel's form:
> Every graph *G* has a set *S* of vertices with the following two properties: (i) *S* is
> matchable to 𝒞_{G−S}; (ii) every component of G−S is factor-critical. Given any such set *S*,
> the graph *G* contains a 1-factor if and only if |S| = |𝒞_{G−S}|.

*Definitions, verbatim:* "A non-empty graph G = (V,E) is called **factor-critical** if *G* has
no 1-factor but for every vertex v ∈ G the graph G−v has a 1-factor." "We call a vertex set
S ⊆ V **matchable** to 𝒞_{G−S} if the bipartite graph G_S, which arises from *G* by contracting
the components C ∈ 𝒞_{G−S} to single vertices and deleting all the edges inside *S*, contains a
matching of *S*."

Diestel **proves** this (it is his second proof of Tutte's theorem) using Hall 2.1.2.
**Length: ~25 steps** — longer than Tutte, and a candidate for splitting. Note Diestel's form is
**not** the full three-set D(G)/A(G)/C(G) statement of the Gallai–Edmonds structure theorem; see
§C.13 for that and for the Tutte–Berge formula, neither of which Diestel states.

**2-connected structure (Diestel Proposition 3.1.1).**
> A graph is 2-connected if and only if it can be constructed from a cycle by successively
> adding *H*-paths to graphs *H* already constructed.

**This is Diestel's form of the open ear decomposition theorem** (Whitney). *Proof:* forward is
2 steps; converse takes a maximal constructible subgraph *H*, notes it is induced, and extends
it along an edge vw with v ∉ H using a v–H path in G−w. **~8 steps.** Very cheap, and the
library's 25-item connectivity/Menger page is the natural home.

**Blocks (Diestel §3.1).** Definition, verbatim: "a **block** is a maximal connected subgraph
without a cutvertex. Thus, every block is either a maximal 2-connected subgraph, or a bridge
(with its ends), or an isolated vertex." **Lemma 3.1.4:** the block graph of a connected graph
is a tree. **Lemma 3.1.2** (cycles and bonds of *G* are those of its blocks) and **Lemma 3.1.3**
(three equivalent conditions for two edges to lie in a common block). All **≤ 8 steps each**.

**Tutte's wheel theorem (Diestel Theorem 3.2.3, Tutte 1966).**
> A graph *G* is 3-connected if and only if there exists a sequence G₀,…,Gₙ of graphs such that
> (i) G₀ = K⁴ and Gₙ = G; (ii) G_{i+1} has an edge *e* such that Gᵢ = G_{i+1}·e, for every i < n.

Built from **Lemma 3.2.1** (if G·e is 3-connected so is *G*, ~8 steps, uses Prop 1.4.2) and
**Lemma 3.2.2** (every 3-connected G ≠ K⁴ has an edge *e* with G·e 3-connected, ~15 steps, via
finding a TK⁴). **Theorem 3.2.5 (Tutte 1961)** is the contraction version with G/xy.
**Theorem 3.2.6 (Tutte 1963):** the cycle space of every 3-connected graph is generated by its
non-separating induced cycles. Each theorem **~12–18 steps** given its lemmas.

**Tree-decompositions and tree-width (Diestel §§12.3–12.4).** Definitions, verbatim:
> "Let *G* be a graph, *T* a tree, and let 𝒱 = (V_t)_{t∈T} be a family of **bags** V_t ⊆ V(G)
> indexed by the nodes *t* of *T*. The pair (T,𝒱) is called a **tree-decomposition** of *G* if it
> satisfies the following three conditions: **(T1)** V(G) = ⋃_{t∈T} V_t; **(T2)** for every edge
> e ∈ G there exists a t ∈ T such that both ends of *e* lie in V_t; **(T3)**
> V_{t₁} ∩ V_{t₃} ⊆ V_{t₂} whenever t₁,t₂,t₃ ∈ T satisfy t₂ ∈ t₁Tt₃."
> "The **width** of (T,𝒱) is the number max{|V_t| − 1 : t ∈ T}, and the **tree-width** tw(G) of
> *G* is the least width of any tree-decomposition of *G*."
> "Let us say that two subsets of V(G) **touch** if they have a vertex in common or *G* contains
> an edge between them. A set of mutually touching connected vertex sets in *G* is a
> **bramble**. … The least number of vertices covering a bramble is the **order** of that
> bramble. A **k-bramble** is one of order *k*."
> "The **k×k grid** is the graph on {1,…,k}² with the edge set
> {(i,j)(i′,j′) : |i−i′| + |j−j′| = 1}. The **crosses** of this grid are the k² sets
> C_{ij} := {(i,ℓ) | ℓ=1,…,k} ∪ {(ℓ,j) | ℓ=1,…,k}."

- **Lemma 12.3.1** (an edge of *T* induces a separation of *G*): **3 steps** — remarkably short,
  and it is the whole point of tree-decompositions.
- **Lemma 12.3.2, 12.3.3, 12.3.4, Corollary 12.3.5:** each **≤ 8 steps.**
- **Proposition 12.3.6.** *G* is chordal iff *G* has a tree-decomposition into complete parts.
  Uses Prop 5.5.1. **~10 steps.**
- **Lemma 12.4.1.** H ≼ G ⇒ tw(H) ≤ tw(G). **~4 steps** given 12.3.2, 12.3.3.
- **Theorem 12.4.3 (Seymour & Thomas 1993), tree-width duality.** "A graph has tree-width < k if
  and only if it contains no bramble of order > k." Uses Menger 3.3.1 and 12.3.1–12.3.4.
  **~30 steps** — the forward implication is short, the converse is the long half. **Split it.**
  Diestel's own remark, worth reproducing: the theorem "is often stated in terms of the
  **bramble number** of a graph, the largest order of any bramble in it. The theorem then says
  that the tree-width of a graph is exactly one less than its bramble number." The crosses
  bramble in the k×k grid has order *k*, so the grid has tree-width ≥ k−1 (in fact *k*,
  Exercise 34).
- **Proposition 12.4.4.** tw(G) = min{ω(H) − 1 : G ⊆ H, *H* chordal}. **~10 steps.**

**The grid theorem (Diestel Theorem 12.6.3, Robertson & Seymour 1986).**
> For every integer *r* there is an integer *k* such that every graph of tree-width at least *k*
> has an r×r grid minor.

**Statement only in the 5th edition.** Important sourcing note from Diestel's ch. 12 Notes: the
Diestel–Gorbunov–Jensen–Thomassen proof ("Highly connected sets and the excluded grid theorem",
*J. Comb. Theory Ser. B* **75** (1999), 61–73) "was included in editions 2–4 of this book"; it
was further simplified by A. Leaf and P. D. Seymour, "Treewidth and planar minors", *JCTB* **111**
(2015), 38–53; the first polynomial bound is Chekuri & Chuzhoy, *J. ACM* **63** (2016), 1–65,
arXiv:1602.02629. **If the library wants a proved grid theorem, the source is Diestel 4th ed.
or Leaf–Seymour, not the 5th ed.** Consequence **Corollary 12.6.4** ("the graphs without an *H*
minor have bounded tree-width if and only if *H* is planar") is **~6 steps** given the grid
theorem, and is the reason the grid theorem matters.

**Graph minor theorem (Diestel Theorem 12.7.1, Robertson & Seymour 1986–2004).**
> The finite graphs are well-quasi-ordered by the minor relation ≼.

Statement only (Diestel gives a sketch, not a proof). **Corollary 12.7.2** (every minor-closed
property has a finite Kuratowski set) and **Corollary 12.7.3** (finite excluded-minor
characterisation of embeddability in each surface) are each **~3 steps** given it, and are what
make the theorem worth stating. **Kruskal's theorem (12.2.1)** — the finite trees are wqo by the
topological minor relation — **is** proved, via **Lemma 12.1.3** (X wqo ⇒ [X]^{<ω} wqo), and is
**~25 steps across 2 items** using the minimal-bad-sequence argument.

**Hamiltonicity (Diestel ch. 10).**
- **Chvátal–Erdős — Diestel states it as Proposition 10.1.2:** "Every graph *G* with |G| ≥ 3 and
  α(G) ≤ κ(G) has a Hamilton cycle." *Proof:* take a longest cycle *C*, enumerate V(C)
  cyclically, and derive a contradiction from a component of G−C. **~12 steps.** Bounded, and
  the library already has κ and α. **High-value.**
- **Theorem 10.1.3 (Asratian & Khachatrian 1990):** "A connected graph *G* of order at least 3
  is hamiltonian if d(u)+d(w) ≥ |N(u) ∪ N(v) ∪ N(w)| for every induced path uvw." This
  **implies both Dirac and Ore**, which the library already publishes — so it is a strict
  strengthening of published content. **~20 steps.**
- **Chvátal's degree-sequence theorem (Theorem 10.2.1, Chvátal 1972):** "An integer sequence
  (a₁,…,aₙ) such that 0 ≤ a₁ ≤ … ≤ aₙ < n and n ≥ 3 is **hamiltonian** if and only if the
  following holds for every i < n/2: aᵢ ≤ i ⇒ a_{n−i} ≥ n−i." **~20–25 steps** (both directions).
  **Corollary 10.2.2** is the path version.
- **Theorem 10.1.4 (Tutte 1956):** "Every 4-connected planar graph has a Hamilton cycle."
  **Statement only** in Diestel.
- **Theorem 10.3.1 (Fleischner 1974):** "If *G* is a 2-connected graph, then G² has a Hamilton
  cycle." Diestel proves it; it is the longest proof in ch. 10, ~5 pages. **Defer or split.**

**Infinite graphs (Diestel ch. 8).** The **topological cycle space** (§8.7) is statement-level
for this lane; **ends** are defined in §8.2 as equivalence classes of rays (two rays are
equivalent if no finite vertex set separates them), and the **Freudenthal compactification |G|**
is Proposition 8.6.1 (for connected locally finite *G*, |G| is a compact Hausdorff space).
**Lemma 8.2.2 (Star-Comb Lemma)** is short and genuinely useful. **Theorem 8.2.5 and 8.2.6
(Halin 1965)** on disjoint rays and thick ends are the classical end-degree results.

### C.12 Three independent proof routes for the regularity lemma

The harvest turned up **three genuinely different proofs**, which is unusual and valuable — the
library can carry one as the main proof and the others as second proofs, and the comparison is
itself a good Remark.

1. **Diestel §7.4 — energy increment, elementary.** The energy is
   q(𝒫) = Σ_{i<j} (|Cᵢ||C_j|/n²)d²(Cᵢ,C_j); the engine is defect Cauchy–Schwarz. Fully
   elementary; no linear algebra beyond Cauchy–Schwarz. **Decomposed in §C.8 above.**
2. **Zhao §2.1 — energy increment, same idea, cleaner bookkeeping.** Theorem 2.1.9 with
   Lemmas 2.1.11–2.1.14; equitability is a separate theorem (2.1.20) rather than baked into the
   definition, which makes the main proof shorter. ~4 printed pages.
3. **Schrijver, "A Pythagoras proof of Szemerédi's regularity lemma"
   (`https://homepages.cwi.nl/~lex/files/szem_pf3.pdf`, 2 pp) — entirely linear-algebraic.** The
   energy is realised as ‖A_P‖², the squared Frobenius norm of the **orthogonal projection of
   the adjacency matrix onto the subspace spanned by the partition's indicator blocks**, and the
   refinement increase is then just the **Pythagorean theorem** in that matrix inner-product
   space, not a density computation. Statement (Schrijver's numbering, directed-graph form):
   > "**Theorem 1** (Szemerédi's regularity lemma). For each ε > 0 and directed graph G = (V,E),
   > each partition *P* of *V* has an ε-balanced ε-regular refinement of size
   > ≤ f_ε^{⌈ε^{−5}⌉}(|P|)", where f_ε(x) := (1 + ε^{−1})x·4^x.

   **This is by far the shortest route** — two pages — and it is the one to consider if the
   regularity lemma has to fit a tight item budget. Its cost is a prerequisite the library may
   not have: orthogonal projection in a finite-dimensional real inner-product space of matrices.
   Schrijver then applies it in §2 to prove **Roth's theorem (his Corollary 1a: α₃(n) = o(n))**
   via a **directed Cayley-type graph on [2n] with edge set E = {(u,v) : v − u ∈ S}** — a
   different construction from both Diestel's and Zhao's tripartite graphs, and self-contained
   without a separately stated removal lemma, in ~1.5 pages.

**Three constructions for Roth, worth recording so the scaffolder picks deliberately:**
Diestel's tripartite X/Y/Z graph with defining triangles K(x,d) on {x, x+d, 2x+d};
Zhao's tripartite graph on three copies of ℤ/Mℤ; Schrijver's directed Cayley graph on [2n].
Diestel's is the most transparent and the easiest to verify step by step. **Recommend
Diestel's.**

## D. Convention disagreements

Quotations marked **[verified]** are copied from text I extracted and read in this session.
Items marked **[standard, not quoted]** are conventions I am asserting from subject knowledge
because I did not extract a verbatim definition from a harvested source — a Beta must confirm
those against the source before making them load-bearing.

### D.1 "Graph": simple, or including multigraphs?

**Diestel [verified], §1.1:** "A **graph** is a pair G = (V,E) of sets such that E ⊆ [V]²."
So Diestel's *graph* is **simple** — no loops, no multiple edges. §1.10 [verified]: "A
**multigraph** is a pair (V,E) of disjoint sets (of *vertices* and *edges*) together with a map
E → V ∪ [V]² assigning to every edge either one or two vertices, its *ends*." And, crucially,
Diestel's own note on the disagreement, **verbatim**:
> "Finally, it should be pointed out that authors who usually work with multigraphs tend to call
> them 'graphs'; in their terminology, our graphs would be called 'simple graphs'."

**Bondy & Murty (2008)** are on the other side: their §1.1 is titled "Graphs and Their
Representation" and their basic object admits loops and parallel edges, with *simple graph* as
the restricted notion — the 1976 book's §1.1 is literally titled **"Graphs and Simple Graphs"**
[verified from the TOC]. **West** and **Bollobás** follow Diestel's convention: graph = simple.

**Which is more standard in the graduate literature: graph = simple.** Diestel, West, Bollobás
and the Cambridge/Oxford syllabi all take it. But note **Diestel deliberately switches to
multigraphs in exactly two places** and says why [verified, §1.10]:
> "there are areas in graph theory (such as plane duality; see Chapters 4.6 and 6.5) where
> multigraphs arise more naturally than graphs, and where any restriction to the latter would
> seem artificial and be technically complicated."

**Consequence for this lane:** every flow item and every plane-duality item must declare
`multigraph`, not `graph`. Diestel's Theorem 6.3.1, 6.3.3, 6.5.3, 6.6.1 and all three Tutte
flow conjectures are stated for **multigraphs**, and they are *false or vacuous* if silently
restricted to simple graphs (contracting a plane graph produces loops and parallel edges).
Diestel also records the small print [verified]: "A loop at a vertex makes it its own neighbour,
and contributes **2** to its degree"; "a multigraph with a loop is never 2-connected, and any
3-connected multigraph is in fact a graph."

### D.2 Path vs walk

**Diestel [verified], §1.3:** "A **path** is a non-empty graph P = (V,E) of the form
V = {x₀,x₁,…,x_k}, E = {x₀x₁, x₁x₂, …, x_{k−1}x_k}, where the xᵢ are all distinct." A path is
therefore a *graph*, and its vertices are automatically distinct. Walks are defined separately
(§1.4 footnote [verified]: "We shall often use terms defined for graphs also for walks, as long
as their meaning is obvious"). Diestel notes P₀ = K¹, i.e. **length 0 is allowed**.

**The disagreement is real and it bites.** In one tradition (Diestel, West, Bollobás) *path*
means no repeated vertices and *walk* allows repetition; in another (much of the algorithms
literature, and some older texts) *path* allows repetition and *simple path* means no
repetition. **Graduate graph theory uniformly uses Diestel's convention: path ⇒ distinct
vertices.** Adopt it and say so once.

Related: **Diestel's cycle** [verified] requires k ≥ 3 in a graph ("If P = x₀…x_{k−1} is a path
and k ≥ 3, then the graph C := P + x_{k−1}x₀ is called a **cycle**"), but in a **multigraph**
"A multigraph may have cycles of length 1 or 2: loops, and pairs of multiple edges (or *double
edges*)" [verified]. So the minimum cycle length is convention-dependent on the ambient object,
not a universal 3.

### D.3 "H-free": ordinary subgraph or induced?

**This is the most dangerous ambiguity in the whole lane, because both readings are standard in
different subfields and neither is marked.**

- In **extremal graph theory** — Turán, Erdős–Stone, Kővári–Sós–Turán, ex(n,H), the regularity
  method — *H-free* means **no copy of H as a (not necessarily induced) subgraph**. Diestel's
  ex(n,H) [verified, §7.1] is the maximum number of edges of a graph with no *subgraph*
  isomorphic to *H*, written G ⊉ H. Zhao's Chapter 1 is titled "Forbidding a Subgraph"
  [verified] and is unambiguous.
- In **structural / perfect-graph theory** — the strong perfect graph theorem, χ-boundedness,
  hereditary classes, the Gyárfás–Sumner conjecture — *H-free* means **no copy of H as an
  INDUCED subgraph**. Diestel is explicit here, always writing "as an induced subgraph"
  [verified, Theorems 5.5.3, 5.6.1, Prop 5.6.2]; his §5.6 phrase is "the graphs not containing
  *P* as an induced subgraph are χ-bounded."

**The library already has an "induced subgraphs and hereditary classes" page (23 items) and an
"extremal graph theory" page (20 items), so it already straddles the two conventions.** The
correct discipline is: **never write "H-free" bare.** Write "H-subgraph-free" / "no subgraph
isomorphic to H" on extremal pages and "H-induced-subgraph-free" / "no induced copy of H" on
structural pages, and add a Remark on each page saying which reading is in force. Note that
"triangle-free" is one of the few cases where the two coincide (an induced K³ and a K³
subgraph are the same thing), which is exactly why the ambiguity survives unnoticed.

### D.4 k-connectivity of small and complete graphs

**Diestel [verified], §1.4:** "*G* is called **k-connected** (for k ∈ ℕ) if |G| > k and G−X is
connected for every set X ⊆ V with |X| < k." Consequences he states explicitly: "Every
(non-empty) graph is 0-connected, and the 1-connected graphs are precisely the non-trivial
connected graphs. The greatest integer *k* such that *G* is *k*-connected is the
**connectivity** κ(G) of *G*. Thus, κ(G) = 0 if and only if *G* is disconnected or a K¹, and
**κ(Kⁿ) = n−1 for all n ≥ 1**."

The `|G| > k` clause is the whole point: without it Kⁿ would be *k*-connected for every *k*
(since K^n − X is connected for every proper X), and κ(Kⁿ) would be ∞. **Diestel's convention,
κ(Kⁿ) = n−1, is the graduate standard** [standard, not quoted, for the other texts] — it is what
makes Menger's global form (Theorem 3.3.6) come out right and what makes κ ≤ λ ≤ δ
(Proposition 1.4.2) hold for complete graphs. Some sources instead declare κ(Kⁿ) = ∞ or leave
it undefined; **record κ(Kⁿ) = n−1 and cite Diestel 1.4.**

Note κ(K¹) = 0 under this convention (K¹ is 0-connected but not 1-connected, since 1-connected
requires non-trivial). K² has κ = 1. These edge cases must be handled in any boundary pass.

### D.5 Edge-connectivity

**Diestel [verified], §1.4:** "If |G| > 1 and G−F is connected for every set F ⊆ E of fewer than
ℓ edges, then *G* is called **ℓ-edge-connected**. The greatest integer ℓ such that *G* is
ℓ-edge-connected is the **edge-connectivity** λ(G) of *G*. In particular, we have λ(G) = 0 if
*G* is disconnected."

Two asymmetries with κ worth a Remark: the vertex version has `|G| > k` (a bound depending on
*k*), the edge version has `|G| > 1` (a fixed bound). So λ(Kⁿ) = n−1 too, but λ(K¹) is not
defined by this clause — K¹ fails |G| > 1. **The literature disagrees on λ(K¹): some set it to
0, some to ∞, some leave it undefined.** Diestel's text does not settle it. Declare a choice
explicitly and do not let it become load-bearing.

### D.6 Girth of a forest, and circumference

**Diestel [verified], §1.3:** "The minimum length of a cycle (contained) in a graph *G* is the
**girth** g(G) of *G*; the maximum length of a cycle in *G* is its **circumference**. (If *G*
does not contain a cycle, we set the former to **∞**, the latter to **zero**.)"

So **girth of a forest = ∞** in Diestel; circumference of a forest = 0. This is the standard
graduate convention and it is what makes statements like "girth at least g" behave monotonically
and makes Corollary 1.3.5 (δ ≥ 3 ⇒ g < 2 log|G|) contrapositive-clean. Some sources instead
leave the girth of a forest undefined, and a few set it to 0. **∞ is correct and is what the
harvested sources use**; record it and cite Diestel 1.3.

### D.7 Is the null graph connected?

**Diestel [verified], §1.4:** "A graph *G* is called **connected** if it is **non-empty** and any
two of its vertices are linked by a path in *G*." And, immediately: "Since connected graphs are
non-empty, **the empty graph has no components**."

So in Diestel the **null graph ∅ is NOT connected**, and K¹ *is* connected. The opposite
convention (∅ vacuously connected) is common in topology-influenced treatments and in some
combinatorics texts. **Diestel's choice is the one that makes the component count well behaved**
(a graph is the disjoint union of its components; if ∅ were a component every graph would have
one extra). There is a well-known survey ("The Null Graph", Harary & Read) arguing the question
is genuinely undecidable on aesthetic grounds. **Declare Diestel's convention, cite §1.4, and
add a Remark noting the alternative.** It is load-bearing for Tutte's 1-factor theorem, where
q(G−S) counts *odd components* and S = V(G) must give q(∅) = 0.

### D.8 Chromatic polynomial sign conventions

Three conventions circulate, and they differ in sign and in what the variable means.

1. **P(G,k) = the number of proper colourings V(G) → {1,…,k}** — the "counting" convention.
   Diestel's Exercise 19 [verified]: "let P_G(k) denote the number of vertex colourings
   V(G) → {1,…,k}. Show that P_G is a polynomial in *k* of degree n := |G|, in which the
   coefficient of kⁿ is **1** and the coefficient of k^{n−1} is **−‖G‖**." So under this
   convention the polynomial is **monic** and the coefficients **alternate in sign**.
2. **The deletion–contraction recurrence** is stated two ways:
   P(G,k) = P(G−e,k) − P(G/e,k)  (the standard, matching convention 1), or equivalently
   P(G−e,k) = P(G,k) + P(G/e,k). Both appear; the first is the one that makes the alternating
   signs come out.
3. **The Whitney rank expansion** P(G,k) = Σ_{S⊆E} (−1)^{|S|} k^{c(S)}, where c(S) is the number
   of connected components of the spanning subgraph (V,S). The (−1)^{|S|} is intrinsic and not a
   convention.
4. **The Tutte-polynomial normalisation** P(G,k) = (−1)^{r(E)} k^{c(G)} T(G; 1−k, 0), where
   r(E) = |V| − c(G) is the rank. **This is where sign conventions actually bite**, because
   different books absorb the (−1)^{r} and the k^{c} differently. Bollobás *Modern Graph
   Theory* §X.4 "Special Values of the Tutte Polynomial" is the reference; check the exact
   normalisation there before writing it.

**Recommendation: adopt convention 1 (P(G,k) = number of proper k-colourings, monic, alternating
signs) as the library's definition**, prove the polynomiality and the top two coefficients from
deletion–contraction, and state the Whitney and Tutte forms as separate theorems with their own
explicitly stated normalisations. Do NOT let a Tutte-normalised identity and a counting-
normalised identity sit on the same page without a Remark reconciling them.

### D.9 ch(G) versus χ_ℓ(G) for the list chromatic number

**Diestel [verified], §5.4:** "The least integer *k* for which *G* is *k*-choosable is the
**list-chromatic number**, or **choice number** ch(G) of *G*." Edge version: ch′(G) := ch(L(G)).
Bondy–Murty §14.5 is titled "List Colourings" with subsection "List Chromatic Number"
[verified from TOC].

The competing notation is **χ_ℓ(G)** (and χ′_ℓ for the edge version), which is now at least as
common as ch(G) in the research literature — Molloy–Reed and most recent papers use χ_ℓ.
**Both are entirely standard; neither is wrong.** ch(G) reads better in running prose and is
what Diestel, the source this lane will lean on hardest, uses. **Recommendation: define both in
the same sentence — "the list-chromatic number or choice number, written ch(G) or χ_ℓ(G)" —
and then use ch(G) consistently.** A reader who knows only one notation must not be stranded.

### D.10 Regularity-lemma statement forms

Three harvested sources state the regularity lemma three different ways, and they are **not
interchangeable**:

- **Diestel 7.4.1 [verified]** builds equitability into the *definition* of an ε-regular
  partition (an exceptional bin V₀ with |V₀| ≤ ε|V|, all other parts exactly equal, at most εk²
  irregular pairs) **and** allows the caller to demand a lower bound m ≤ k on the number of
  parts.
- **Zhao 2.1.9 [verified]** states the plain version ("an ε-regular partition into at most M
  parts") and derives the **equitable** version separately as **Theorem 2.1.20**, and the
  refine-an-initial-partition version as **Theorem 2.1.19**.
- **Schrijver Part V, Theorem 1 [verified]** states it for **directed** graphs, as a *refinement*
  statement: "each partition *P* of *V* has an ε-balanced ε-regular refinement of size
  ≤ f_ε^{⌈ε^{−5}⌉}(|P|)", with f_ε(x) := (1 + ε^{−1})x·4^x.

**Also two different regularity notions inside Diestel alone.** §7.4 uses **ε-regular**
(the inequality is required only for X,Y with |X| ≥ ε|A|, |Y| ≥ ε|B|, and asks
|d(X,Y) − d(A,B)| ≤ ε); §7.6 switches to **(ε,d)-uniform** (all non-empty X,Y, with the slack
scaled by |A||B|/|X||Y|). Diestel warns explicitly [verified]: "To avoid confusion, we shall
call this 'ε-uniformity' here; but in the literature it is usually referred to as (another
version of) 'ε-regularity' as well." The two are related by: ε-regular ⇒ ε-uniform, and
ε-uniform ⇒ ∛ε-regular (Diestel Ex. 42).

**Recommendation:** pick Diestel's ε-regular as the library's primary definition, state
equitability and the lower bound *m* as explicit clauses rather than hiding them in the
definition, and give ε-uniformity its own definition item with the two implications proved. A
proof that silently swaps the two notions is a fatal citation defect, not a nitpick.

### D.11 Degeneracy versus colouring number

Diestel's **col(G)** [verified] and the literature's **degeneracy** differ by exactly one:
`degeneracy(G) = col(G) − 1 = max_{H⊆G} δ(H)`. "*G* is k-degenerate" means col(G) ≤ k+1. The
greedy bound is χ(G) ≤ col(G) = degeneracy(G) + 1. **Both names are standard; the off-by-one is
a real trap.** State both and the relation in the definition item.

### D.12 Tree-width's "− 1"

Diestel [verified] defines width as max{|V_t| − 1}, and adds a footnote that is worth quoting:
> "Indeed the '−1' in the definition of width serves no other purpose than to make this
> statement true." — namely that trees themselves have tree-width 1.

Every source uses the −1. Record it and the reason; a reader who omits it gets tw(tree) = 2.

### D.13 Chapter-numbering traps in the sources themselves

- **West:** chapters 6 and 7 are swapped between the 1st and 2nd editions (§B.4.3). A bare
  "West ch. 6" citation is ambiguous. **Always cite the edition.**
- **Diestel:** chapter 12 is titled **"Graph Minors"** in the 5th edition and
  "Minors, Trees and WQO" in the 4th. More importantly, **the grid theorem (12.6.3) is PROVED in
  editions 2–4 and only STATED in edition 5** — so "Diestel ch. 12, grid theorem, with proof"
  is a 4th-edition citation, never a 5th-edition one.
- **Diestel:** the 5th edition's chapter 12 is heavily rewritten (§12.5 Tangles is new). Section
  numbers across editions do not correspond.

### D.14 Smaller items worth pinning once

- **Independent vs stable.** Diestel [verified]: "Independent sets of vertices are also called
  **stable**." Bondy–Murty's ch. 12 is "Stable Sets and Cliques" [verified]; Schrijver's Part II
  is "Stable sets and colourings" [verified]. The optimization literature says *stable*, the
  graph-theory literature says *independent*. Same object.
- **Nonseparable vs 2-connected.** Bondy–Murty ch. 5 is "Nonseparable Graphs" [verified];
  Diestel says 2-connected. Not quite the same: Diestel's **block** [verified] "is either a
  maximal 2-connected subgraph, or a bridge (with its ends), or an isolated vertex", so
  nonseparable includes K² and K¹.
- **Chordal vs triangulated.** Diestel [verified]: "a graph is **chordal** (or
  **triangulated**)". Same notion; "triangulated" collides with the plane-triangulation sense,
  so prefer **chordal**.
- **α and ω complementation.** Diestel [verified]: "α(Ḡ) = ω(G) and ω(Ḡ) = α(G)." Free and
  worth stating once.
- **log base.** Diestel [verified], §1: "Logarithms written as 'log' are taken at **base 2**;
  the natural logarithm will be denoted by 'ln'." Every asymptotic statement quoted from Diestel
  inherits this. Do not silently reinterpret his `log`.
- **ℕ includes 0.** Diestel [verified]: "By ℕ we denote the set of natural numbers, **including
  zero**."

---

## E. Dependency structure

Diestel's preface states, and the margin apparatus enforces, that his book is **topologically
sorted**:
> "apart from two clearly marked exceptions, any results used in the proof of others precede
> them in the text."

The apparatus works in two directions, and both were extracted mechanically from all 12 chapters:
- a number in **parentheses** `(x.y.z)` in the margin *beside a proof* = a result **used by**
  that proof (a `deps` edge, pointing backwards);
- a number in **square brackets** `[x.y.z]` in the margin *beside a result's statement* = a later
  result that **uses** it (a reverse-`deps` edge, pointing forwards).

The `used:` and `→` annotations throughout §B.1 are exactly these. **That whole section is
directly usable as a scaffold dependency order.** Below are the chains that matter most for this
lane.

### E.1 The colouring cone

```
1.6.1  bipartite ⟺ no odd cycle        ──→ 5.3.1 (König edge-colouring)
4.2.8  maximally plane ⟺ triangulation ──→ 5.4.2 (Thomassen 5-choosability)
4.2.10 plane ⇒ ≤ 3n−6 edges            ──→ 5.1.2 (five colour theorem, both proofs)
4.2.11 plane ⇏ TK⁵, TK₃,₃              ──→ 5.1.2 (second proof)
4.1.1  Jordan curve for polygons       ──→ 5.1.2 (first proof)
4.4.6  Kuratowski–Wagner               ──→ 5.1.2 (second proof)
2.1.4  Gale–Shapley stable matching    ──→ 5.4.4 (Galvin)
5.3.1  König edge-colouring            ──→ 5.4.5 (ch′ = Δ for bipartite)
5.5.1  chordal ⟺ pasting along cliques ──→ 5.5.2 (chordal ⇒ perfect), and ──→ 12.3.6
5.5.5  replication lemma               ──→ 5.5.4 (perfect graph theorem, proof 1)
5.6.3  the χ-bounding lemma            ──→ 5.6.2 (P-free ⇒ χ-bounded)
```

**The colouring chapter's outgoing edges are what make it high-fan-out.** Diestel's markers show
Lemma 5.2.3 (every k-chromatic graph has a k-chromatic subgraph of min degree ≥ k−1) is used at
**7.3, 9.2.1, 9.2.3 and 11.2.3** — four separate later chapters. Proposition 5.5.2 (chordal ⇒
perfect) is used at 7.3.3 (Hadwiger for r = 4). Proposition 5.5.1 is used at 12.3.6, which feeds
12.4.4. **Colouring is not a leaf topic in this library; it is load-bearing for extremal graph
theory, Ramsey theory, random graphs and graph minors alike.** That is a second, structural
argument for closing the four-item gap.

### E.2 The extremal / regularity cone

```
1.2.2  δ(H) ≥ ε(H) ≥ ε(G) subgraph      ──→ 7.2.2
1.3.1  long path/cycle from δ           ──→ 7.2.2
1.4.3  Mader: high d ⇒ k-connected sub  ──→ 7.2.3, 11.2.3
3.5.3  Thomas–Wollan k-linked           ──→ 7.2.3
7.1.1  Turán                            ──→ 7.1.2, 9.2.2
7.1.4  t_{r−1}(n) asymptotics           ──→ 7.1.2
7.4.1  Regularity Lemma                 ──→ 7.1.2 (Erdős–Stone), 7.6.3, 9.2.2
7.5.1  ε-regular degree lemma           ──→ 7.5.2
7.5.2  Blow-up Lemma                    ──→ 7.1.2, 9.2.2
7.6.2  Counting Lemma                   ──→ 7.6.3 (Removal Lemma)
7.6.3  Removal Lemma                    ──→ 7.6.4 ──→ 7.6.5 ──→ 7.7.3 (Roth)
```

Read bottom-up this is the exact build order for a regularity page:
**ε-regular pair → energy q → refinement monotone (7.4.2) → single-pair gain (7.4.3) →
partition gain (7.4.4) → Regularity Lemma (7.4.1) → degree lemma (7.5.1) →
blow-up (7.5.2) / counting (7.6.2) → removal (7.6.3) → thinly-spread (7.6.4) →
triangle removal (7.6.5) → Roth (7.7.3).** Twelve items, in a strict chain, no cycles.
The Erdős–Stone reproof (7.1.2) branches off after 7.5.2.

### E.3 The connectivity → planarity → minors cone

```
1.4.2  κ ≤ λ ≤ δ                    ──→ 3.2.1
3.1.1  2-connected ⟺ ear/H-path      ──→ 4.2.6
3.2.4  contractible edge (3-conn)    ──→ 4.4.3
3.2.6  non-sep induced cycles span 𝒞 ──→ 4.5.2
3.3.1  Menger (A–B form)             ──→ 3.5.2, 8.2.5, 8.4.3, 12.4.3, 12.6.3
3.3.6  Menger (global)               ──→ 4.2.7, 6.6.1, 9.4.2
4.2.6  2-conn plane ⇒ faces bounded by cycles ──→ 4.3.1, 4.4.3, 4.5.1, 4.5.2
4.4.4  edge-maximal without 𝒳 splits at order ≤ 2 ──→ 7.3.1
4.4.6  Kuratowski–Wagner             ──→ 4.5.1, 5.1.2, 12.6.4
12.1.3 [X]^{<ω} wqo                  ──→ 12.2.1 (Kruskal), 12.7.1
12.2.1 Kruskal                       ──→ 12.7.1
12.3.1 tree-decomp edge ⇒ separation ──→ 12.4.3, 12.5, 12.6.5
12.4.2 bounded tw wqo by minors      ──→ 12.7.1, 12.7.3
12.4.3 bramble/tree-width duality    ──→ (12.6.3 territory)
12.6.3 grid theorem                  ──→ 12.6.4, 12.6.5, 12.7.1, 12.7.3
12.6.6 structure theorem             ──→ 12.7.1
```

**Menger 3.3.1 is the single highest-fan-out result in the book** — five forward markers, in
chapters 3, 8 and 12. The library already publishes all four Menger forms, so the whole of
12.3–12.4 is reachable without new connectivity work.

### E.4 The flow cone

```
1.5.5  normal spanning trees        ──→ 6.5.3
1.6.1  bipartite ⟺ no odd cycle     ──→ 6.4.2
1.9.3  every cut is a disjoint union of bonds ──→ 6.5.2
4.6.1  cycles of G ⟷ bonds of G*    ──→ 6.5.2
2.4.2  2k-edge-conn ⇒ k spanning trees ──→ 6.4.4
6.1.1  circulation vanishes on cuts ──→ 6.3.1, 6.5.2
6.1.3  circulations extend over G/e ──→ 6.3.1, 6.6.1
6.3.2  H-flow depends only on |H|   ──→ 6.4.5, 6.6.1
6.3.3  k-flow ⟺ ℤ_k-flow            ──→ 6.4.1, 6.4.2, 6.4.3, 6.4.5
3.3.6  global Menger                ──→ 6.6.1 (Seymour 6-flow)
```

Note the flow chapter **rests on the plane-duality material the library already publishes**
(1.9.3, 4.6.1) and on Prop 1.6.1. A flows page is therefore cheap to reach from where the
library already is — Ford–Fulkerson is published, and 6.1.1 → 6.1.3 → 6.3.1 → 6.3.3 → 6.4.x is
a short chain.

### E.5 Diestel's two declared exceptions

Diestel's preface says "apart from **two clearly marked exceptions**" the order is topological.
The margin apparatus makes these visible as forward citations inside a proof — for instance
Diestel's §5.2 discussion cites **Lemma 12.6.1** ("cf. Lemma 12.6.1") when characterising the
minimal *k*-chromatic graphs 𝒳_k, and Lemma 12.6.1 carries the reverse marker `[5.2]`. **Any
scaffold item that mirrors that passage inherits a genuine forward reference** and must be
tagged with `forward_refs` per SCHEMA §3, with its consequences marked too. This is the one
place in the book where copying Diestel's order naively would produce a cycle.

---

## F. Blockers

**F.1 — Bollobás, _Extremal Graph Theory_ (1978 / Dover 2004): only a chapter list obtained.**
No section-level or named-theorem-level table of contents could be reached. What was tried:
- archive.org scans `extremalgraphthe0000boll` and `bwb_KS-459-725` — every derivative
  (`djvu.txt`, `fulltext/inside.php` search-inside, `chocr`) returns *"Item not available due to
  issues with the item's content"*. This is a content block, not a lending restriction.
- WorldCat `worldcat.org/title/extremal-graph-theory/oclc/4407748` and an Arcadia University
  Koha OPAC record — both behind a Cloudflare JS bot challenge for curl and WebFetch alike.
- Google Books "About this book" for both editions (`id=gX6WyUQvwDwC`, `id=fkLDAgAAQBAJ`) — no
  structured contents beyond the publisher blurb; the Books API returned HTTP 429 quota-exceeded.
- pdfcoffee.com, zoboko.com, scribd.com — gated download flow, maintenance page, or no content.
- ACM DL guide-book page `dl.acm.org/doi/10.5555/1024185` — HTTP 403.
- OpenLibrary edition `OL4563284M` — no `table_of_contents` field.
- Direct MARC retrieval from the Library of Congress record cited in OpenLibrary's
  `source_records` (`marc_loc_2016`, `BooksAll.2016.part10.utf8`, byte offset 123113569) — the
  raw MARC-8 record was retrieved successfully but carries **no 505 Formatted Contents Note**.

**Consequence for the source-depth rule:** this book **cannot** satisfy clause (b)/(c) of the
canonical-coverage harvest — we cannot enumerate its headings, so we cannot give each heading a
disposition. **It must not be counted as one of a pair's two independent treatments.** Untried
routes for a future session: a different institutional archive.org mirror, a HathiTrust catalog
snippet search, or a library-proxy PDF.

**F.2 — Diestel 4th edition not obtained.** The grid theorem's proof (Diestel–Gorbunov–Jensen–
Thomassen) is in editions 2–4 only; the free preview PDFs on `diestel-graph-theory.com` are the
5th edition, which states the theorem without proof. Only the 5th edition is free. If the
library wants a **proved** grid theorem, use Leaf & Seymour, "Treewidth and planar minors",
*J. Comb. Theory Ser. B* **111** (2015), 38–53 instead — not a 5th-edition citation.

**F.3 — Bondy & Murty GTM 244 obtained via a third-party GitHub mirror**, not a publisher
source. The mathematics is verbatim and the TOC is reliable, but the **reader-facing URL in any
`sources.references` must be the Springer product page**
(`https://link.springer.com/book/10.1007/978-1-84628-970-5`), not the mirror.

**F.4 — No blocker, but a correction to the brief.** The brief gives Zhao's book URL as
`https://yufeizhao.com/gtac/`; that path does not serve the PDF. The working URL is
`https://yufeizhao.com/gtacbook/gtacbook.pdf`.

**F.5 — No blocker, but a correction to the brief.** The brief lists
`dec41.user.srcf.net/notes/II_L/graph_theory.pdf` for the Cambridge Part II notes; that link is
dead (404). Two live substitutes were obtained instead (§A.3).

**F.6 — Minor residual gap.** In the ZIB scan of Bondy & Murty 1976, the OCR of contents pages
5–7 interleaves two printed columns, so the **page numbers** for chapters 7–8 and the back matter
came through reordered. Section titles and numbering are exact; page-number locators for those
two chapters should be re-checked before being quoted.

**F.7 — Not attempted.** Molloy & Reed, _Graph Colouring and the Probabilistic Method_; Lovász,
_Combinatorial Problems and Exercises_; Golumbic, _Algorithmic Graph Theory and Perfect Graphs_;
Oporowski's LSU notes. The brief listed these as candidates to *verify*, and four independent
open note sets plus five textbooks were obtained without them, so the source-depth requirement
is met. Golumbic in particular would be the right primary backing if the library later wants a
full perfect-graph-classes page (interval, comparability, split, permutation graphs); it is
worth a targeted search then.
