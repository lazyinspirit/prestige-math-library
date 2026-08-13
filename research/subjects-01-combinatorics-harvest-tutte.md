# subjects-01 · combinatorics lane — GRAPH AND MATROID POLYNOMIALS, NOWHERE-ZERO FLOWS, THE CHROMATIC POLYNOMIAL

Research-only artifact. Written by the source-research subagent for the `combinatorics`
scaffolder lane of run `subjects-01`. No scaffold file, no `items/`, no `library/`, no
`plan-spec.json` was touched.

Harvest date: 2026-08-13.

Scope handed to this agent: the Tutte polynomial (which Diestel never defines), the
chromatic polynomial (which Diestel gives only as Exercise 19 of ch. 5), Whitney's
broken-circuit theorem, Stanley's reciprocity theorem, the universality/recipe theorem,
the specialisations, the flow polynomial, and the spanning-tree activity expansion.

---

## A. Source ledger

| # | source | working URL | form obtained | exact range read |
|---|---|---|---|---|
| A.1 | **A. Goodall**, *The Tutte polynomial and related polynomials*, lecture notes 2010/2012/2014, Charles University Prague (Vybrané kapitoly z kombinatoriky I) | `https://iuuk.mff.cuni.cz/~andrew/VKKI.pdf` | **FULL TEXT**, 134 pp, unencrypted | §1 in full (pp. 1–16); §2.1–2.2, §2.4–2.8 (pp. 17–34); §3.1–3.5 in full (pp. 35–51); §3.6–3.11 at named-result level (pp. 51–63); §§4–7 at heading level |
| A.2 | **M. Beck & R. Sanyal**, *Combinatorial Reciprocity Theorems: An Invitation to Enumerative Geometric Combinatorics*, beta version 4 Oct 2018 (published AMS, GSM 195) | `https://math.sfsu.edu/beck/crt.html` → local copy `/tmp/chromres/crt.pdf` | **FULL TEXT**, 317 pp | Front matter + Chapter 1 in full (pp. 1–28: §1.1, §1.2, Notes, Exercises 1.1–1.18); Chapters 2–7 at TOC level |
| A.3 | **J. A. Ellis-Monaghan & C. Merino**, *Graph Polynomials and Their Applications I: The Tutte Polynomial* (chapter in *Structural Analysis of Complex Networks*, Birkhäuser 2011) | `https://export.arxiv.org/abs/0803.3079`; **LaTeX source** obtained at `/tmp/tutte/em/` | **FULL LaTeX SOURCE**, 9 section files + bibliography | §§1–7 read in full from source (`1.introduction`…`7.properties`); §8 (complexity) and §9 at heading level |
| A.4 | **A. D. Sokal**, *The multivariate Tutte polynomial (alias Potts model) for graphs and matroids*, Surveys in Combinatorics 2005, CUP, pp. 173–226 | `https://export.arxiv.org/pdf/math/0503607` | **FULL TEXT**, 54 pp | §§1–4 in full (pp. 1–21); §§5–10 at heading level |
| A.5 | **A. D. Sokal**, same, arXiv **abs** page | `https://arxiv.org/abs/math/0503607` | metadata only | — |
| A.6 | **R. P. Stanley**, *Acyclic orientations of graphs*, Discrete Math. 5 (1973) 171–178; reprinted Discrete Math. 306 (2006) 905–909 | local copy `/tmp/chromres/18.pdf` (Elsevier reprint) | **FULL TEXT**, 5 pp | §1 in full (Prop. 1.1, Thm 1.2, Cor. 1.3); §2 (labelled acyclic digraphs) and §3 skimmed |
| A.7 | **A. Blass & B. E. Sagan**, *Bijective proofs of two broken circuit theorems*, J. Graph Theory 10 (1986) 15–21 | local copy `/tmp/chromres/bpt.pdf` | **FULL TEXT**, 7 pp | entire paper |
| A.8 | **K. Dohmen**, *An inductive proof of Whitney's broken circuit theorem*, arXiv:0912.1182v2 | `https://export.arxiv.org/abs/0912.1182` | **FULL TEXT**, 5 pp | entire paper (§§1–3, Lemmas 1–3 + main theorem) |
| A.9 | **R. C. Read**, *An introduction to chromatic polynomials*, J. Combin. Theory 4 (1968) 52–71 | local copy `/tmp/chromres/klug.pdf` | **FULL TEXT**, 20 pp | §§1–7 read; §§8–10 skimmed |
| A.10 | **J. A. Bondy & U. S. R. Murty**, *Graph Theory with Applications*, North-Holland 1976 | local copy `/tmp/chromres/GTWA.pdf` | **FULL TEXT**, 270 pp | Contents in full; ch. 8 (Vertex Colourings) §8.1–8.5 read, §8.4 line-by-line |
| A.11 | **R. P. Stanley**, *Enumerative Combinatorics* vol. 1, 2nd ed. | `https://math.mit.edu/~rstan/ec/ec1.pdf` (already obtained in this run) | **FULL TEXT**, 725 pp | ch. 3 Contents; Exercises 3.108–3.109 and their solutions (pp. 430–431, 496–497); §3.11 at heading level |
| A.12 | **B. Bollobás**, *Modern Graph Theory*, GTM 184, Springer 1998 | local copy `/tmp/bollobas_mgt.pdf` | **TOC ONLY**, 4 pp of front matter | full Contents incl. ch. X §§X.1–X.8 with page numbers |
| A.13 | **C. Godsil & G. Royle**, *Algebraic Graph Theory*, GTM 207 | `https://faculty.etsu.edu/gardnerr/5340/notes-Godsil-Royle-AlgebraicGT-G.htm` | **TOC ONLY** (chapter + §-titles of ch. 15) | chapter list; ch. 15 §§15.1–15.15 |
| A.14 | **R. Diestel**, *Graph Theory* 5th ed., ch. 6 (Flows) | already obtained IN FULL by the sibling harvest; see `research/subjects-01-combinatorics-harvest-graphtheory.md` §A.1 and its ch.-6 result list (lines 447–470) | **FULL TEXT** | not re-harvested here; cross-referenced only |
| A.15 | **R. Diestel**, *Graph Theory* 2nd ed. (Electronic Edition 2000) | local copy `/tmp/tutte/diestel.pdf` | **FULL TEXT**, 322 pp, AES-encrypted with empty password | consulted only to cross-check ch. 6 numbering against the 5th ed. |

Two independent treatments per prospective pair (rule: at least one a textbook,
monograph or full lecture-note set with a harvestable TOC):

- **chromatic polynomial pair** — Goodall §1 (lecture-note set, TOC) **+** Beck–Sanyal §1.1
  (textbook) **+** Bondy–Murty §8.4 (textbook) **+** Read 1968 (survey).
- **broken-circuit pair** — Goodall §1.4 Thm 1.3 (with proof) **+** Blass–Sagan **+** Dohmen
  **+** Read 1968 Thm 17 (proof-sketch only).
- **acyclic-orientation / reciprocity pair** — Stanley 1973 (original, full proof)
  **+** Beck–Sanyal Thm 1.1.5 & Ex. 1.9 **+** Goodall Thm 1.4 **+** EC1 Ex. 3.109 with solution.
- **Tutte-polynomial pair** — Goodall §3 (lecture-note set) **+** Ellis-Monaghan–Merino
  (survey chapter) **+** Sokal §§2, 4 **+** Bollobás MGT ch. X (TOC only).
- **flow-polynomial pair** — Goodall §2 **+** Beck–Sanyal §1.2 **+** Ellis-Monaghan–Merino §6.3
  **+** Diestel ch. 6 (already harvested).

Wikipedia was not consulted and is not backing anything here.

---

## B. The canonical-coverage harvest

Verbatim section and named-result headings, in each source's own numbering, over the
range read. Disposition column uses the LEVELS.md vocabulary
(`included` / `inline` / `already-published` / `deferred` / `out-of-scope`); the
scaffolder assigns the concrete item ids, so `included` here means "carry into the
scaffold, item id to be minted".

### B.1 Goodall, *The Tutte polynomial and related polynomials* — full Contents, verbatim

```
1 The chromatic polynomial                                                  1
  1.1 Graph-theoretic preliminaries                                         1
  1.2 The chromatic polynomial and proper colourings                        2
  1.3 Deletion and contraction                                              6
  1.4 Subgraph expansions                                                   12
  1.5 Some other deletion–contraction invariants.                           15
2 Flows and tensions                                                        17
  2.1 Orientations                                                          17
  2.2 Circuits and cocircuits                                               18
  2.3 The incidence matrix of an oriented graph                             21
  2.4 A-flows and A-tensions                                                23
  2.5 Tensions and colourings                                               26
  2.6 Duality of bases for A-tensions and A-flows                           28
  2.7 Examples of nowhere-zero flows                                        29
  2.8 The flow polynomial                                                   33
3 The Tutte polynomial                                                      35
  3.1 Deletion-contraction recurrence                                       35
  3.2 Sugraph expansion of the Tutte polynomial                             42
  3.3 Coefficients. Spanning tree expansion.                                45
  3.4 The Tutte polynomial of a planar graph                                48
  3.5 The spanning tree partition of subgraphs.                             50
  3.6 The beta invariant.                                                   51
  3.7 Computational complexity                                              54
  3.8 The Laplacian and the number of spanning trees                        56
  3.9 Hamming weight enumerator for tensions and flows                      57
  3.10 Bicycles                                                             58
  3.11 Z3-tension-flows                                                     61
4 The Tutte polynomial in statistical physics                               64
  4.1 Colourings and flows in the ice model                                 64
  4.2 The Potts model                                                       68
  4.3 The Fortuin-Kasteleyn random cluster model                            69
5 Graph homomorphisms                                                       71
  5.1 Graph invariants and graph homomorphism profiles                      72
  5.2 Homomorphism profiles determining graph invariants                    74
  5.3 Spectrum and degree sequence by left profiles                         76
6 From graphs to matroids                                                   77
  6.1 Cuts, circuits and cycles                                             78
  6.2 Orthogonality of cycles and cutsets                                   81
  6.3 Graph duality                                                         82
  6.4 Matroids                                                              84
  6.5 Dual matroids                                                         88
  6.6 Deletion and contraction                                              89
7 Connections to knot theory                                                91
  7.1 The medial of a plane graph                                           91
  7.2 Eulerian tours of digraphs                                            92
  7.3 2-in 2-out digraphs                                                   96
  7.4 Interlace polynomial                                                  99
  7.5 The Kauffman bracket of a link                                        109
```

("Sugraph" in §3.2 is the source's own typo, reproduced.)

Named results over the range read, with dispositions:

| result | content | disposition |
|---|---|---|
| Def. 1.1 | colour-partition; chromatic number χ(G) | **included** |
| Def. 1.2 | `P(G;z) = Σ_i a_i(G) z^{\underline i}` (falling-factorial basis) | **included** — this is the definition that makes polynomiality free |
| Prop. 1.3 | `[z^{n−1}]P(G;z) = −m` | **included** |
| Prop. 1.4 | `P(G₁+G₂;z) = P(G₁;z) ∘ P(G₂;z)` (umbral join) | **inline** (worked example; absorb into the join example) |
| Def. 1.5 | proper k-colouring | **included** |
| Prop. 1.6 | for `k ∈ ℕ`, `P(G,k)` = number of proper vertex k-colourings | **included** |
| Prop. 1.7 | adding a vertex joined to an r-clique multiplies by `(z−r)`; corollary for trees and chordal graphs | **included** |
| Prop. 1.8 | clique-separator product formula; block factorisation `P(G;z)=z^{1−ℓ}∏P(G_i;z)` | **included** |
| Prop. 1.9 | deletion–contraction `P(G;z)=P(G∖e;z)−P(G/e;z)` for **any** edge | **included** |
| Prop. 1.10 | coefficients alternate in sign; `c_i>0` for `0≤i≤r(G)`, `=0` above | **included** |
| Prop. 1.11 | `c_2 = C(m,2) − #triangles` | **included** |
| Prop. 1.12 | `P(G;z)=z^c(z−1)^{n−c}` ⟺ G is a forest | **included** |
| Thm 1.2 | Whitney subgraph (rank) expansion `P(G;z)=Σ_{F⊆E}(−1)^{|F|}z^{c(F)}` | **included** |
| Thm 1.3 | **Whitney's broken-circuit theorem** | **included** |
| Prop. 1.13 | girth bound: `c_i=C(m,i)` for `i ≤ g−2`, `c_{g−1}=C(m,g−1)−t` | **included** |
| Prop. 1.14 | `c_{i−1} ≤ c_i` for `i ≤ ½(n−1)` (half of Read's unimodality conjecture) | **included** |
| Rem. 1.1 | Brenti's rising-factorial expansion | **deferred** — needs the acyclic-orientation-of-blocks statistic and Brenti's paper; not load-bearing and no accessible primary source obtained |
| Prop. 1.15 | monochrome polynomial `B(G;k,y)` is a polynomial with `B(G)= (y−1)B(G/e)+B(G∖e)` | **included** (the bad-colouring / Potts specialisation) |
| Thm 1.4 | **Stanley 1973**: `#acyclic orientations = (−1)^{|V|}P(G;−1)` | **included** |
| Def. 2.1 | signed characteristic vector of a circuit | **included** |
| Prop. 2.2 | circuit ⟂ cocircuit | **included** |
| Def. 2.3, Prop. 2.4 | incidence matrix; `im D`, `ker D` description | **included** |
| Def. 2.5, 2.6 | A-flow; A-tension | **included** |
| Thm 2.7 | A-flows ⟂ A-tensions over a commutative ring | **included** |
| Prop. 2.8 | ℤ₂-flows = Eulerian subgraphs; ℤ₂-tensions = cutsets | **included** |
| Prop. 2.9 | `χ(G) ≤ k` ⟺ G has a nowhere-zero A-tension, `|A| = k` | **included** |
| Thm 2.10 | nowhere-zero ℤ_k-flow ⟺ nowhere-zero k-flow (Tutte 1950) | **already-published-adjacent** — this is Diestel Thm 6.3.3, already in the sibling harvest; cite, do not re-scaffold |
| Prop. 2.11 | fundamental-circuit basis of the flow space from a spanning tree | **included** |
| Prop. 2.12 | plane dual incidence matrices | **included** |
| Thm 2.13 | Whitney 1933: planar ⟺ has an abstract dual | **already-published-adjacent** — Diestel Thm 4.6.3, in the sibling harvest |
| Prop. 2.14–2.20 | small-k flow examples: face 2-colouring ⟺ even degrees; cubic ⟺ bipartite for ℤ₃; plane triangulation 3-colouring; cubic 4-flow ⟺ proper edge 3-colouring; 4-flow ⟺ union of two Eulerian subgraphs; 4-regular ℤ₃-flows ⟺ Eulerian orientations | **included** (overlaps Diestel 6.4.1–6.4.5 — reconcile with the sibling harvest before scaffolding) |
| Lem. 2.21 | given a spanning tree T and arbitrary `φ₀ : E∖T → A`, there is a **unique** A-flow extending it | **included** — this is the load-bearing counting lemma |
| Thm 2.22 | Hamiltonian ⇒ nowhere-zero `ℤ₂×ℤ₂`-flow | **included** |
| Prop. 2.23 | `K_n`: ℤ₂-flow for odd `n≥3`, ℤ₃-flow for even `n≥6` | **included** |
| **Thm 2.24** | **flow polynomial** `F(G;k)=Σ_{F⊆E}(−1)^{|E|−|F|}k^{n(F)}` (Tutte) | **included** |
| Prop. 2.25 | flow polynomial deletion–contraction, incl. `0` on a bridge and `(k−1)F(G∖e)` on a loop | **included** |
| Prop. 3.1 | **order-independence** of the Tutte deletion–contraction recursion | **included** |
| Prop. 3.2 | `T` multiplicative over components and over blocks (one-point joins) | **included** |
| Thm 3.3 | `T(G;x,y)` irreducible in `ℤ[x,y]` for 2-connected loopless G | **deferred** — the source cites [60] and gives no proof; genuinely long |
| Prop. 3.4 | 2-isomorphic graphs have equal `T` (Whitney twists) | **deferred** — needs Whitney's 2-isomorphism theorem, which the library does not have |
| Prop. 3.5 | coefficient facts: `t_{0,0}=0`; `t_{1,0}≠0 ⟺ 2-connected`; `x^k ∣ T` ⟺ k bridges; degree bounds | **included** |
| **Thm 3.6** | **Recipe Theorem** (universality), 5-parameter form `f(G)=γ^{c(G)}α^{r(G)}β^{n(G)}T(G;x/β, y/α)` | **included** |
| Prop. 3.7 | chromatic specialisation `P(G;z)=(−1)^{r(G)}z^{c(G)}T(G;1−z,0)`; monochrome specialisation | **included** |
| Thm 3.8 | Greene–Zaslavsky: `T(G;1,0)` = #acyclic orientations with a unique prescribed source | **included** |
| Prop. 3.9 | reliability `R(G;p)=(1−p)^{|E|−|V|+1}p^{|V|−1}T(G;1,1/(1−p))` | **included** |
| Prop. 3.10 | **rank–nullity (subgraph) expansion** and its equivalence to the recursion | **included** |
| Def. 3.11 | internal / external activity | **included** |
| **Thm 3.12** | **Tutte's spanning-tree expansion** `T=Σ t_{ij}x^i y^j`, `t_{ij}` order-independent | **included** |
| Cor. 3.13 | same for maximal spanning forests of a disconnected graph | **included** |
| Prop. 3.14 | `t_{1,0}=t_{0,1}` (first Brylawski identity), bijective proof | **included** |
| Prop. 3.15 | `t_{i,0}>0`, `t_{0,j}>0` for 2-connected loopless G | **deferred** — proof deferred to Bollobás X.5, which was not obtained |
| Prop. 3.16 | `T(G*;x,y)=T(G;y,x)` for a connected plane graph, via deletion–contraction | **included** |
| Prop. 3.17 | activity-swapping bijection `T ↦ T* = E∖T`, `t_{ij}(G)=t_{ji}(G*)` | **included** |
| Cor. 3.18 | restatement of planar duality | **inline** (identical to 3.16) |
| Prop. 3.19 | `t_{1,0}` invariant under homeomorphism (≥2 edges) | **included** |
| Def. 3.20, Thm 3.21 | series-parallel; `t_{1,0}(G)=1 ⟺ series-parallel` | **included** |
| Ex. 3.22, Prop. 3.23 | `t_{1,0}(K_n)=(n−2)!`; clique-sum formula for `t_{1,0}` | **included** |
| Thm 3.24 | `t_{2,0} ≤ t_{0,2}+1` for simple 2-connected series-parallel, equality ⟺ outerplanar | **deferred** — cited to [33], no proof given |
| Thm 3.25 | Greene–Zaslavsky / Las Vergnas: `t_{1,0}` = #acyclic orientations with prescribed unique source **and** unique sink | **deferred** — source notes the original proofs use hyperplane arrangements; out of library reach |
| Thm 3.26, 3.27 | #P-hardness of evaluating `T` (Jaeger–Vertigan–Welsh; planar case) | **out-of-scope** — computational complexity is a whole subject area the library has not reached; state as a remark at most |
| Prop. 3.28, Thm 3.29 | `Q = DDᵀ = Δ − A`; Matrix–Tree `det Q[u] = τ(G)` | **included** (Goodall proves it by deletion–contraction, **not** Cauchy–Binet — see §E) |
| Thm 3.30–3.33, Cor. 3.34 | bicycles; principal tripartition; `T(G;−1,−1)=(−1)^{|E|}(−2)^{b(G)}`; odd #spanning trees ⟺ no non-trivial bicycle | **deferred** — needs the bicycle space `C ∩ C^⊥` over 𝔽₂ and a trichotomy theorem; a good second-wave target, not a first-wave one |
| Lem. 3.35–Thm 3.39 | ℤ₃-tension-flows, `T(G;ω,ω²)` | **out-of-scope** for this wave — needs orthogonal bases over 𝔽₃ and Gauss sums |
| §3.9 Hamming weight enumerator | Greene's theorem relating `T` to the weight enumerator of a code | **out-of-scope** — coding theory is a subject area the library has not reached |
| §§4–7 | Potts model, random cluster model, graph homomorphisms, matroids, knot theory | **out-of-scope** for this pair; matroids belong to the sibling matroid harvest, knots to no current lane |

### B.2 Beck & Sanyal, *Combinatorial Reciprocity Theorems* — Contents, verbatim

```
Preface                                                                     xi
Chapter 1. Four Polynomials                                                  1
  §1.1. Graph Colorings                                                      1
  §1.2. Flows on Graphs                                                      7
  §1.3. Order Polynomials                                                   12
  §1.4. Ehrhart Polynomials                                                 15
  Notes                                                                     21
  Exercises                                                                 22
Chapter 2. Partially Ordered Sets                                           29
  §2.1. Order Ideals and the Incidence Algebra                              29
  §2.2. The Möbius Function and Order Polynomial Reciprocity                33
  §2.3. Zeta Polynomials, Distributive Lattices, and Eulerian Posets        36
  §2.4. Inclusion–Exclusion and Möbius Inversion                            38
Chapter 3. Polyhedral Geometry                                              51
  §3.1. Inequalities and Polyhedra                                          52
  §3.2. Polytopes, Cones, and Minkowski–Weyl                                60
  §3.3. Faces, Partially Ordered by Inclusion                               65
  §3.4. The Euler Characteristic                                            72
  §3.5. Möbius Functions of Face Lattices                                   81
  §3.6. Uniqueness of the Euler Characteristics and Zaslavsky's Theorem     85
  §3.7. The Brianchon–Gram Relation                                         90
Chapter 4. Rational Generating Functions                                   105
  §4.1. Matrix Powers and the Calculus of Polynomials                      105
  §4.2. Compositions                                                       113
  §4.3. Plane Partitions                                                   114
  §4.4. Restricted Partitions                                              117
  §4.5. Quasipolynomials                                                   120
  §4.6. Integer-point Transforms and Lattice Simplices                     122
  §4.7. Gradings of Cones and Rational Polytopes                           126
  §4.8. Stanley Reciprocity for Simplicial Cones                           130
  §4.9. Chain Partitions and the Dehn–Sommerville Relations                135
Chapter 5. Subdivisions                                                    151
  §5.1. Decomposing a Polyhedron                                           151
  §5.2. Möbius Functions of Subdivisions                                   160
  §5.3. Beneath, Beyond, and Half-open Decompositions                      163
  §5.4. Stanley Reciprocity                                                169
  §5.5. h*-vectors and f-vectors                                           171
  §5.6. Self-reciprocal Complexes and Dehn–Sommerville Revisited           177
  §5.7. A Combinatorial Triangulation                                      183
Chapter 6. Partially Ordered Sets, Geometrically                           199
  §6.1. The Geometry of Order Cones                                        200
  §6.2. Subdivisions, Linear Extensions, and Permutations                  205
  §6.3. Order Polytopes and Order Polynomials                              210
  §6.4. The Arithmetic of Order Cones and P-Partitions                     216
Chapter 7. Hyperplane Arrangements                                         231
  §7.1. Chromatic, Order Polynomials, and Subdivisions Revisited           232
  §7.2. Flats and Regions of Hyperplane Arrangements                       235
  §7.3. Inside-out Polytopes                                               241
  §7.4. Alcoved Polytopes                                                  246
  §7.5. Zonotopes and Tilings                                              257
  §7.6. Graph Flows and Totally Cyclic Orientations                        269
```

Named results in Chapter 1 (the range read in full):

| result | content | disposition |
|---|---|---|
| Four-color Theorem (unnumbered) | every planar graph has a proper 4-colouring | **inline** as a stated-without-proof remark; the library must not claim it |
| Prop. 1.1.1 | `χ_G(n)` agrees with a degree-`|V|` integer polynomial for loopless G; `=0` if G has a loop | **included** |
| Cor. 1.1.2 | `c_d=1`, `c_0=0`, `(−1)^dχ_G(−n)>0` | **included** |
| Prop. 1.1.3 | a proper colouring induces an acyclic orientation | **included** |
| Prop. 1.1.4 | strictly compatible pairs ⟺ proper colouring + induced acyclic orientation | **included** |
| **Thm 1.1.5** | **Stanley reciprocity**: `(−1)^dχ_G(−n)` = #compatible pairs (ρ,c); at n=1, #acyclic orientations | **included** |
| Prop. 1.2.1 | `φ_G(n)` independent of the orientation | **included** — this is the well-definedness obligation the brief asks about |
| Prop. 1.2.2 | for plane G, n-colourings of G ↔ ℤ_n-flows on G*; proper ⟺ nowhere-zero | **included** |
| Cor. 1.2.3 | Dual Four-color Theorem: `φ_G(4)>0` for planar bridgeless G | **inline** remark only |
| Prop. 1.2.4 | for bridgeless connected G, `φ_G(n)` is monic of degree `|E|−|V|+1` | **included** |
| Five-flow Conjecture (unnumbered) | every bridgeless graph has a nowhere-zero ℤ₅-flow | **inline** remark (open problem) |
| **Thm 1.2.5** | flow reciprocity: `(−1)^{ξ(G)}φ_G(−n)` counts pairs (f, ρ) with ρ totally cyclic on `G/supp(f)`; at n=1, #totally cyclic orientations | **deferred** — Beck–Sanyal prove it only in §7.6 via inside-out polytopes; no elementary route obtained. A real gap; see §F |
| §1.3, §1.4 | order polynomials, Ehrhart polynomials | **out-of-scope** for this assignment (order polynomials belong to the poset lane; Ehrhart needs polyhedral geometry) |
| Notes to ch. 1 | attributions: Birkhoff 1912 for maps, Whitney 1932 for graphs; Appel–Haken; Tutte for flows; Seymour 6-flow; Jaeger 8-flow; **the generalized Tutte–Grothendieck invariant and the universal `T_G(x,y)`**; Huh's log-concavity, Read's conjecture | **included** as the provenance/history source for the whole block |
| Ex. 1.5 | `n^c ∣ χ_G(n)` | **included** |
| Ex. 1.6 | proof obligations for Cor. 1.1.2 | **inline** |
| Ex. 1.7 | `K_d` has `d!` acyclic orientations | **included** |
| Ex. 1.8 | `χ_G(n)=Σ a_i C(n,i)` with explicit non-negative `a_i` (third polynomiality proof) | **included** — this is Goodall's Def. 1.2 in binomial rather than falling-factorial form |
| **Ex. 1.9** | **deletion–contraction proof of Thm 1.1.5**, in three steps (a) (b) (c) | **included** — this is the elementary route; see §C.3 |
| Ex. 1.10 | `χ_{K_{r,s}}(n)` | **inline** worked example |
| Ex. 1.11 | proof of Prop. 1.2.1 (orientation-independence) | **included** |
| Ex. 1.12 | reverse direction of the flow/colouring duality: each nowhere-zero flow on G* gives n proper colourings of G | **included** |
| Ex. 1.13 | proof of Prop. 1.2.4 | **included** |
| Ex. 1.14 | integer n-flow vs ℤ_n-flow, augmenting-path proof, `φ_G(n)≠0 ⇒ φ_G(n+1)≠0` | **included** — an independent second route to Diestel Thm 6.3.3 |
| Ex. 1.15 | nowhere-zero flows on contractions; cut characterisation; bridge ⇒ `φ_G≡0` | **included** |
| Ex. 1.16 | "Discover the notion of tensions" | **inline** — Goodall §2.4–2.5 supplies this properly |
| Ex. 1.17 | Petersen graph: `φ_G(4)=0`; non-real flow roots | **included** (the (a) part; (b)/(c) **deferred**) |
| Ex. 1.18+ | order-polynomial and Ehrhart exercises | **out-of-scope** |

### B.3 Ellis-Monaghan & Merino, *Graph Polynomials and Their Applications I* — headings, verbatim from source

```
1  Introduction
2  Preliminary Notions
   2.x Basic Concepts
   2.x Deletion and Contraction
   2.x The Rank and Nullity Functions for Graphs
   2.x Planar Graphs and Duality
3  Defining the Tutte Polynomial
   3.1 Linear Recursion Definition
   3.2 Rank-Nullity Generating Function Definition
   3.3 Spanning Trees Expansion Definition
4  Universality of the Tutte Polynomial
5  Combinatorial Interpretations of Some Evaluations
   5.1 Spanning Subgraphs
   5.2 The Tutte Polynomial at y = x
   5.3 Orientations and Score Vectors
6  Some Specializations
   6.1 The Chromatic Polynomial
   6.2 The Bad Coloring Polynomial
   6.3 The Flow Polynomial
   6.4 Abelian Sandpile Models
   6.5 The Reliability Polynomial
   6.6 The Shelling Polynomial
7  Some Properties of the Tutte Polynomial
   7.1 The Beta Invariant
   ...
8  The Complexity of the Tutte Polynomial
9  Conclusion
```

(§2's subdivisions are `\subsubsection`s and carry no numbers in the source; §7's later
subsections were read but are dominated by material already covered by Goodall §3.6.)

| result | content | disposition |
|---|---|---|
| Def. `rank` | `r(A)=|V(G)|−κ(A)`, `n(A)=|A|−r(A)` | **included** |
| eq. `rankDuality` | `r*(A)=|A|−r(E)+r(E∖A)` for a plane dual | **included** |
| Def. `recursive` | Tutte polynomial by deletion–contraction with terminal `x^i y^j` | **included** |
| Prop. `product-formula` | `T(G∪H)=T(G)T(H)`, `T(G*H)=T(G)T(H)` (one-point join) | **included** |
| Def. `rank_generating_expansion` | `T(G;x,y)=Σ_{A⊆E}(x−1)^{r(E)−r(A)}(y−1)^{n(A)}` | **included** |
| Prop. `planar-dual` | `T(G;x,y)=T(G*;y,x)` | **included** |
| Def. `trees_expansion` | `T(G;x,y)=Σ t_{ij}x^iy^j` by internal/external activity | **included** |
| Def. `T-G` | generalized Tutte–Grothendieck invariant | **included** |
| **Thm `universal`** | **recipe theorem** `f(G)=a^{|E|−r(E)}b^{r(E)}T(G;x₀/b, y₀/a)` | **included** |
| **Thm `unique`** | unique-extension: for any `a,b,x₀,y₀` there is a **unique** T-G invariant | **included** — this is the existence half that the recipe theorem alone does not give |
| Thm `trivial_interpretations` | `T(1,1)=τ(G)`; `T(2,1)`=#spanning forests; `T(1,2)`=#connected spanning subgraphs; `T(2,2)=2^{|E|}` | **included** |
| Thm `cofactors` | `T(G;1,1)=det(L')` (Matrix–Tree) | **included** |
| Thm `bicycle` | `T(G;−1,−1)=(−1)^{|E|}(−2)^{dim ℬ}` (Read–Rosenstiehl) | **deferred** (see B.1 Thm 3.33) |
| Thms on `D_n(Ĝ_m)` | medial-graph / Martin-polynomial evaluations along `y=x` | **out-of-scope** — needs the Martin polynomial |
| Thm `orientation_results` | `T(2,0)`=#acyclic orientations; `T(0,2)`=#totally cyclic orientations; `T(1,0)`=#acyclic with one prescribed source; `T(2,1)`=#score vectors | **included** for items 1 and 3; **deferred** for items 2 and 4 (Greene–Zaslavsky and Stanley 1980, no elementary proof obtained) |
| Thm `minusone`, `three` | Las Vergnas / Martin anticircuit evaluations at `(−1,−1)` and `(3,3)` | **out-of-scope** |
| **Thm `TheoWhitney`** | `χ(G;λ)=Σ_{A⊆E}(−1)^{|A|}λ^{κ(A)}` with the inclusion–exclusion proof written out | **included** |
| Prop. `chrom_props` | edgeless ⇒ `λ^n`; loop ⇒ 0; `χ(K_n;λ)=λ^{\underline n}`; deletion–contraction | **included** |
| Thm `ChrJoint` | clique-separator quotient formula | **included** (= Goodall Prop. 1.8) |
| Thm (chromatic ↔ Tutte) | `χ(G;λ)=(−1)^{r(E)}λ^{κ(G)}T(G;1−λ,0)`, proof written out | **included** |
| Def. `bad coloring` + Thm | `B(G;λ,t+1)=t^{r(E)}λ^{κ(G)}T(G;(λ+t)/t, 1+t)`, proof written out | **included** |
| **Thm `thm:flow_polynomial`** | `χ*(G;H)=(−1)^{|E|−r(E)}T(G;0,1−|H|)`; proof by universality | **included** |
| Cor. (ice) | 4-regular G: `T(G;0,−2)` = #ice configurations | **inline** |
| (flow/colour duality) | `χ(G;λ)=λ·χ*(G*;λ)` for connected plane G | **included** |
| §6.4 Abelian Sandpile Models | `T(1,y)` and the sandpile group | **out-of-scope** for this wave — needs the sandpile group and recurrent configurations |
| Def. + Thm `reliability Tutte` | `R(G;p)=p^{n−1}(1−p)^{m−n+1}T(G;1,1/(1−p))`, two proofs | **included** |
| §6.6 The Shelling Polynomial | shellable simplicial complexes, h-vector | **out-of-scope** — needs simplicial complexes and shellability |
| §7.1 The Beta Invariant | `β(G)=(−1)^{r(G)}Σ_{A⊆E}(−1)^{|A|}r(A)`; Crapo | **included** (agrees with Goodall §3.6, `β = t_{1,0}`) |
| §8 Complexity | #P-hardness | **out-of-scope** |

### B.4 Sokal, *The multivariate Tutte polynomial* — headings, verbatim

```
1   Introduction
2   The multivariate Tutte polynomial for graphs, and its specializations
  2.1 q = 1
  2.2 q = 1, 2, 3, … (q-state Potts model) and the chromatic polynomial
  2.3 q → 0 limits
  2.4 The multivariate flow polynomial
  2.5 Comparison to the standard Tutte polynomial
3   The multivariate Tutte polynomial for matroids
  3.1 q = 1
  3.2 q = 1, 2, 3, … (generalized Potts models)
  3.3 q → 0 limits
  3.4 A final remark
4   Elementary identities
  4.1 Disjoint unions and direct sums
  4.2 Duality
  4.3 Deletion-contraction identity
  4.4 Parallel-reduction identity
  4.5 Series-reduction identity
  4.6 Reduction formulae for 2-rooted subgraphs
  4.7 Analogy with electrical circuit theory
5   Complex zeros of Z_G: Why should we care?
6   [zeros / half-plane property]
  6.1 The matrix-tree theorem
  6.2 Electric circuits and the half-plane property for graphs
  6.3 The half-plane property for matroids
  6.4 The Rayleigh property for graphs and matroids
7   [Brown–Colbourn]
  7.1 The Brown–Colbourn property for graphs
  7.2 The Brown–Colbourn property for matroids
8   q = 0 yet again: Spanning forests
9   Absence of zeros at large |q|
  9.1 Bounds in terms of maximum degree and its relatives
  9.2 Bounds in terms of maxmaxflow?
  9.3 Some further questions
  9.4 A final remark
```

| result | content | disposition |
|---|---|---|
| eq. (1.1) | `Z_G(q,𝐯)=Σ_{A⊆E} q^{k(A)}∏_{e∈A}v_e` (multivariate Tutte polynomial) | **deferred** — genuinely valuable and elementary, but it is a *generalisation* of the pair's target and would double the page; revisit in a second wave |
| eq. (2.2) | `k(A)=|V|−|A|+c(A)` | **included** (this identity is used everywhere) |
| Ex. 2.1, 2.2 | `Z_T`, `Z_{C_n}` closed forms | **inline** |
| Thm 2.3 | Fortuin–Kasteleyn representation of the Potts model | **out-of-scope** (statistical mechanics) |
| §2.2 (unnumbered) | `P_G(q)=Z_G(q,−1)`; chromatic polynomial = zero-temperature antiferromagnetic Potts | **included** as the provenance note for the Whitney expansion |
| §2.3 | `q→0` limits give the connected-spanning-subgraph, spanning-forest and spanning-tree generating polynomials | **included** as the source for the `T(1,1+v)`/`T(1+1/w,1)` identities (2.28)/(2.29) |
| Thm 2.4 | multivariate flow polynomial `F_G(Γ,𝐮)=q^{−|V|}(∏u_e)Z_G(q,q/𝐮)`; `F_G(Γ)=q^{−|V|}(−1)^{|E|}Z_G(q,−q)`; **consequently `F_G(Γ)` depends only on `|Γ|`** | **included** — a second independent proof of the "depends only on the order" fact |
| eq. (2.25a/b), (2.26), (2.27a–d) | **the canonical statement of `T_G(x,y)` and the exact change of variables** `x=1+q/v`, `y=1+v`, `q=(x−1)(y−1)`, `v=y−1` | **included** — this is the normalisation authority for §D |
| eq. (2.28), (2.29) | `C_G(v)=v^{|V|−k(E)}T_G(1,1+v)`; `F_G(w)=w^{|V|−k(E)}T_G(1+1/w,1)` | **included** |
| eq. (2.30) | `T_{G*}(x,y)=T_G(y,x)` | **included** |
| §3 (matroids) | everything | **out-of-scope here** — routed to the sibling matroid harvest |
| §4.1, 4.2 | disjoint unions/direct sums; duality | **included** |
| §4.3 + its Remark | deletion–contraction, **and the explicit warning that defining `T` by the recursion incurs a well-definedness obligation the subgraph expansion does not** | **included** — this Remark is exactly the brief's question, in a citable form |
| §4.4, 4.5 | parallel reduction `1+v` multiplies; series reduction | **included** — cheap, useful, and they give `T` of series-parallel graphs |
| §4.6, 4.7 | 2-rooted reduction formulae; electrical-circuit analogy | **deferred** |
| §§5–9 | complex zeros, half-plane property, Rayleigh, Brown–Colbourn, `|q|` bounds | **out-of-scope** — complex analysis of zeros, and Sokal's §6.1 matrix-tree route uses the half-plane property machinery |

### B.5 Stanley, *Acyclic orientations of graphs* (1973) — headings, verbatim

```
1. The chromatic polynomial with negative arguments
2. Enumeration of labeled acyclic digraphs
3. [algebras of full binomial type]
```

| result | content | disposition |
|---|---|---|
| Prop. 1.1 | `χ(λ)` = #pairs (σ,O) with O acyclic and `σ(u)>σ(v)` whenever `u→v` | **included** |
| **Thm 1.2** | `χ̄(λ)=(−1)^p χ(−λ)`, `χ̄` counting **compatible** (`≥`) pairs | **included** — the primary source, with the full elementary proof |
| Cor. 1.3 | `(−1)^p χ(G,−1)` = #acyclic orientations | **included** |
| (unnumbered) | `χ̄(G,λ)=Σ_O Ω(Ō,λ)` and `χ(G,λ)=Σ_O Ω̄(Ō,λ)` — chromatic ↔ order polynomial | **deferred** — the order polynomial belongs to the poset lane; record as a cross-lane seam |
| Prop. 2.1 | generating function for labelled acyclic digraphs | **deferred** — needs Read's `M_n(k)` identity and exponential generating functions; cheap once the library has EGFs, but not in this pair |
| §3 | algebras of full binomial type | **out-of-scope** |

### B.6 Blass & Sagan, *Bijective proofs of two broken circuit theorems* (1986)

The paper has no section headings. Its two named results, verbatim:

> **Whitney's Theorem [3].** Let `d_i(G)` be the collection of all sets `A` that consist of
> exactly `i` edges of `G` and contain no broken circuit; then
> `f(G,λ) = Σ_{i=0}^{…} (−1)^i |d_i(G)| λ^{p−i}`.

> **Stanley's Theorem [2].** The number of acyclic orientations of `G` equals the number of
> sets `A ⊆ E(G)` that contain no broken circuit.

Disposition: **included** — both. Blass–Sagan is the source for the *bijective* proofs and
for the explicit remark that the two theorems together make Stanley's Corollary equivalent
to Whitney's theorem. Their "Added in proof" note (Stanton–White: the bijection is Whitney's
proof under the Garsia–Milne involution principle) is **inline** provenance only.

### B.7 Dohmen, *An inductive proof of Whitney's broken circuit theorem* (2010)

```
1 Introduction
2 Preliminaries
3 Proof of Whitney's broken circuit theorem
```

| result | content | disposition |
|---|---|---|
| Theorem (Whitney, 1932), as restated | for `k=0,…,n(G)`, `a_k(G)` = #`k`-subsets of `E(G)` including no broken circuit | **included** |
| eq. (2) | `P_G(λ)=P_{G−e}(λ)−P_{G|e}(λ)` | **included** |
| §2 contraction definition | `G|e := (V/∼_e, (E∖{e})/∼_e, φ_e)`, with `[x]_e` **identified with the maximum edge of its class**, so `E(G|e) ⊆ E(G)` inherits the linear order | **included** — this is the technical device that makes the induction work, and it is the single most easily botched detail in the whole broken-circuit block |
| Lemma 1 | parallel edges `e<f`: `X` includes no broken circuit of `G` ⟺ `X ⊆ E(G−e)` and `X` includes no broken circuit of `G−e` | **included** |
| Lemma 2 | `e` minimum: `Y ⊆ E(G−e)` includes a broken circuit of `G−e` ⟺ of `G` | **included** |
| Lemma 3 | `e` minimum, `e ∈ X` no broken circuit ⇒ (a) `X∖{e} ⊆ E(G|e)`, (b) `X∖{e}` includes no broken circuit of `G|e` | **included** |

### B.8 Read, *An introduction to chromatic polynomials* (1968) — headings, verbatim

```
1. INTRODUCTION
2. SOME ILLUSTRATIONS
3. A FUNDAMENTAL THEOREM
4. SOME SHORT CUTS
5. ILLUSTRATIONS
6. PROPERTIES OF CHROMATIC POLYNOMIALS
7. INTERPRETATION OF THE COEFFICIENTS
8. MAP COLORING PROBLEMS
9. UNSOLVED PROBLEMS
10. TWO APPLICATIONS
```

| result | content | disposition |
|---|---|---|
| §3 "fundamental theorem" | deletion–contraction | **already covered** by Goodall Prop. 1.9 / Bondy–Murty Thm 8.6 |
| §6 Thms 7, 8, 9, 11 | degree, leading coefficient, constant term, `−|E|` coefficient, sign alternation | **already covered** |
| §7 eq. (4) + Thm 16 | Whitney rank expansion `M_G(λ)=Σ_r Σ_p (−1)^r N(p,r)λ^p`, with the inclusion–exclusion derivation written out informally | **included** as a corroborating treatment |
| §7 Thm 17 | broken-circuit theorem, **proof sketch only** ("the full proof … is contained in the paper [7] by Whitney, and we shall not give it here") | **included** as a statement-level corroborator; NOT usable as the proof source |
| §9 | Read's unimodality conjecture | **inline** remark; now Huh's theorem — state as a remark, do not prove |
| §§2, 4, 5, 8, 10 | worked computations, map colouring, applications | **inline** / **out-of-scope** |

### B.9 Bondy & Murty, *Graph Theory with Applications* — chapter 8 headings, verbatim

```
8 VERTEX COLOURINGS
  8.1 Chromatic Number                                                       117
  8.2 Brooks' Theorem                                                        122
  8.3 Hajós' Conjecture                                                      123
  8.4 Chromatic Polynomials                                                  125
  8.5 Girth and Chromatic Number                                             129
  Applications
  8.6 A Storage Problem                                                      131
```

| result | content | disposition |
|---|---|---|
| Thm 8.6 | `π_k(G)=π_k(G−e)−π_k(G·e)` for simple G | **included** (corroborates Goodall Prop. 1.9) |
| Cor. 8.6 | `π_k(G)` is a polynomial of degree `ν`, integer coefficients, leading `k^ν`, constant `0`, coefficients alternate in sign — with the induction written out | **included** — the cleanest textbook write-up of the polynomiality proof |
| Ex. 8.4.2 | coefficient of `k^{ν−1}` is `−ε`; `k⁴−3k³+3k²` is not a chromatic polynomial | **included** (8.4.2a) / **inline** (8.4.2b) |
| Ex. 8.4.3 | trees: `k(k−1)^{ν−1}`, and `π_k(G) ≤ k(k−1)^{ν−1}` with equality iff G is a tree | **included** |
| Ex. 8.4.4 | `π_k(C_n)=(k−1)^n+(−1)^n(k−1)` | **included** |
| Ex. 8.4.5 | `π_k(G ∨ K_1)=k·π_{k−1}(G)`; wheel formula | **included** |
| Ex. 8.4.6, 8.4.7 | multiplicativity over components; clique-intersection quotient | **included** (= Goodall Prop. 1.8) |
| Ex. 8.4.8 | no real root exceeds `ν` (Lovász) | **deferred** — starred exercise, no proof given |
| §§8.1–8.3, 8.5, 8.6 | chromatic number, Brooks, Hajós, Mycielski, storage | **already-published-adjacent** / routed to the colouring pair of the sibling graph-theory harvest |

### B.10 Stanley, *Enumerative Combinatorics* vol. 1, 2nd ed. — relevant headings, verbatim

```
3.10 The Möbius Function of a Semimodular Lattice                           317
3.11 Hyperplane Arrangements                                                321
  3.11.1 Basic definitions                                                  321
  3.11.2 The intersection poset and characteristic polynomial               322
  3.11.3 Regions                                                            325
  3.11.4 The finite field method                                            328
3.12 Zeta Polynomials                                                       333
```

| result | content | disposition |
|---|---|---|
| Ex. 3.108(a) | `χ_G(n)=Σ_j S_G(j)(n)_j` from stable partitions; deduce monic, degree `p`, `[n^{p−1}]=−#E` | **included** |
| Ex. 3.108(b) | `χ_G(n)=Σ_{π∈L_G} μ(0̂,π) n^{#π}` over the **bond lattice** `L_G` (a geometric lattice); `χ_G(n)=n^c χ_{L_G}(n)`. Solution given in full via Möbius inversion on `L_G`; attributed to Rota | **included** — the library has Möbius inversion and incidence algebras, so this route is available and is the conceptually right one |
| Ex. 3.108(c) | `L_G ≅ L(B_G)`, the graphical hyperplane arrangement | **out-of-scope** — hyperplane arrangements |
| Ex. 3.108(d) | deletion–contraction, plus "give also a direct combinatorial proof" | **included** |
| Ex. 3.108(e) | umbral `χ_G(B)=B_G` | **deferred** |
| **Ex. 3.109(a)** | `ao(G)=(−1)^pχ_G(−1)` via `ao(G)=ao(G−e)+ao(G/e)`; solution reproduces Stanley 1973's key step | **included** |
| Ex. 3.109(b) | second proof via Zaslavsky's theorem 3.11.7 | **out-of-scope** |

### B.11 Bollobás, *Modern Graph Theory* — Contents of ch. X, verbatim

```
X The Tutte Polynomial                                                      335
  X.1 Basic Properties of the Tutte Polynomial                              336
  X.2 The Universal Form of the Tutte Polynomial                            340
  X.3 The Tutte Polynomial in Statistical Mechanics                         342
  X.4 Special Values of the Tutte Polynomial                                345
  X.5 A Spanning Tree Expansion of the Tutte Polynomial                     350
  X.6 Polynomials of Knots and Links                                        358
  X.7 Exercises                                                             371
  X.8 Notes                                                                 377
```

Body text NOT obtained (see §F). Headings alone confirm that the standard textbook
ordering is exactly the one recommended in §C: basic properties → universal form →
special values → spanning-tree expansion. Also relevant: `II.3 Vector Spaces and Matrices
Associated with Graphs 51` and `III.1 Flows in Directed Graphs 68`.

### B.12 Godsil & Royle, *Algebraic Graph Theory* — ch. 14–15 headings, verbatim

```
14. Cuts and Flows
15. The Rank Polynomial
  15.1  Rank Functions
  15.2  Matroids
  15.3  Duality
  15.4  Restriction and Contraction
  15.5  Codes
  15.6  The Deletion-Contraction Algorithm
  15.7  Bicycles in Binary Codes
  15.8  Two Graph Polynomials
  15.9  Rank Polynomial
  15.10 Evaluations of the Rank Polynomial
  15.11 The Weight Enumerator of a Code
  15.12 Colourings and Codes
  15.13 Signed Matroids
  15.14 Rotors
  15.15 Submodular Functions
```

Body text NOT obtained. The heading `15.9 Rank Polynomial` (rather than "Tutte
polynomial") is itself the convention datum recorded in §D.2.

---

## C. Mathematical detail the scaffolder needs

Notation fixed for the whole of §C, following Goodall and Ellis-Monaghan–Merino (they
agree): `G=(V,E)` a finite multigraph (loops and parallel edges allowed unless a result
says "simple"); `c(A)` = number of connected components of the spanning subgraph `(V,A)`;
`r(A)=|V|−c(A)`; `n(A)=|A|−r(A)`; `r(G):=r(E)`, `n(G):=n(E)`. An edge is a **bridge** if
`r(G∖e)<r(G)`, a **loop** if its ends coincide, **ordinary** otherwise.

Difficulty key: **[A]** ≤ 12 proof steps · **[B]** 12–30 steps, or one new prerequisite ·
**[C]** long or out of reach.

### C.1 The chromatic polynomial

**C.1.1 Definition and polynomiality.** There are three independent routes, and the
library should pick one as *the* definition and derive the others.

*Route 1 (Goodall Def. 1.2 + Prop. 1.6; Stanley EC1 Ex. 3.108(a); Beck–Sanyal Ex. 1.8) —
recommended.* Define a **colour-partition** of `G` to be a partition of `V` into non-empty
independent sets. Let `a_i(G)` be the number of colour-partitions into `i` classes, and
**define**

> `P(G;z) := Σ_{i=1}^{|V|} a_i(G) · z^{\underline i}`,  where `z^{\underline i}=z(z−1)⋯(z−i+1)`.

Then polynomiality is free (it is a finite `ℤ`-combination of falling factorials), and:

> **Proposition (Goodall 1.6).** For `k ∈ ℕ`, `P(G,k)` is the number of proper vertex
> `k`-colourings of `G`.

*Proof.* A proper colouring using exactly `i` colours determines a colour-partition into
`i` classes; conversely a colour-partition into `i` classes extends to `k^{\underline i}`
proper `k`-colourings. Sum. ∎ **[A], 4 steps.**

*Route 2 (Bondy–Murty Cor. 8.6; Beck–Sanyal Prop. 1.1.1).* Define `χ_G(n)` as the count,
prove `χ_G(n)=χ_{G∖e}(n)−χ_{G/e}(n)`, induct on `|E|` from `χ_{\overline{K_n}}(n)=n^{|V|}`.
Yields degree `|V|`, leading coefficient 1, constant term 0, integer coefficients, and
alternating signs in one induction. **[A], 8–10 steps.**

*Route 3 (Stanley EC1 Ex. 3.108(b)).* `χ_G(n)=Σ_{π ∈ L_G} μ(0̂,π) n^{#π}` where `L_G` is
the lattice of connected partitions (**bond lattice**), ordered by refinement. The proof is
Möbius inversion: for `π ∈ L_G`, let `χ_π(n)` count maps constant on blocks of `π` and
different across `π`-inequivalent adjacent vertices; then `n^{#π}=Σ_{σ≥π}χ_σ(n)`, and
Möbius inversion gives `χ_π(n)=Σ_{σ≥π}n^{#σ}μ(π,σ)`; take `π=0̂`. **[B], 12–15 steps** —
its one new obligation is that `L_G` is a lattice (join = transitive closure of the union;
meet = common refinement into connected blocks). **The library already has posets,
lattices, Möbius inversion and incidence algebras**, so this route is affordable and is
worth including as a second proof.

**C.1.2 Deletion–contraction.**

> **Proposition (Goodall 1.9).** For **any** edge `e` of `G`,
> `P(G;z)=P(G∖e;z)−P(G/e;z)`.

*Proof.* Loop: both sides `0` (since `G∖e=G/e`). Parallel edge: `P(G;z)=P(G∖e;z)` and
`P(G/e;z)=0` because `G/e` has a loop. Otherwise, split the proper `k`-colourings of
`G∖e` by whether the ends of `e` get equal colours. Interpolate. ∎ **[A], 6 steps.**

Careful: Bondy–Murty state Thm 8.6 for *simple* `G` only; Goodall's version covers loops
and parallel edges and is the one to adopt.

**C.1.3 Top coefficients.** Write `P(G;z)=Σ_{i=0}^{|V|}(−1)^i c_i(G) z^{|V|−i}`.

- `c_0=1` (Bondy–Murty Cor. 8.6; Beck–Sanyal Cor. 1.1.2(a)). **[A], 2 steps.**
- `c_1=|E|` for simple `G` (Goodall Prop. 1.3; Bondy–Murty Ex. 8.4.2a). *Proof:* a
  colour-partition into `n−1` blocks is `n−2` singletons plus one non-adjacent pair, so
  `a_{n−1}=C(n,2)−m`; then read `[z^{n−1}]` off the falling-factorial expansion. **[A], 4
  steps.**
- `c_2=C(m,2)−t`, `t` = number of triangles (Goodall Prop. 1.11), by induction on `|E|`
  with the deletion–contraction recurrence `c_2(G)=c_2(G∖e)−(−1)c_1(G/e)` and a careful
  count of parallel classes created by contraction. **[B], 14 steps.**
- Constant term `0`, and `z^{c(G)} ∣ P(G;z)` exactly (Goodall Prop. 1.10; Beck–Sanyal
  Ex. 1.5). **[A].**
- `c_i>0` for `0 ≤ i ≤ r(G)` and `c_i=0` for `i>r(G)` (Goodall Prop. 1.10). *Proof:*
  `(−1)^{|V|}P(G;z)` has non-negative coefficients; induct with
  `c_i(G)=c_i(G∖e)+c_{i−1}(G/e)`, treating bridge and non-bridge `e` separately.
  **[A], 10 steps.** Goodall's Question 11(i) gives a shorter version using forests as the
  induction base and a **non-bridge** edge — adopt that.

**C.1.4 The Whitney rank expansion.**

> **Theorem (Whitney 1932; Goodall Thm 1.2; Ellis-Monaghan–Merino Thm `TheoWhitney`;
> Read 1968 eq. (4)/Thm 16).**
> `P(G;z) = Σ_{S ⊆ E} (−1)^{|S|} z^{c(S)}`.

*Proof (verbatim structure, Goodall).*
1. Prove it for `z=k ∈ ℤ_{>0}` and interpolate.
2. For `e=uv ∈ E` set `M_e = {φ : V→[k] : φ(u)=φ(v)}`.
3. The proper `k`-colourings are `⋂_{e∈E} \overline{M_e}`.
4. Inclusion–exclusion: `|⋂_e \overline{M_e}| = Σ_{S⊆E}(−1)^{|S|}|⋂_{f∈S}M_f|`.
5. `|⋂_{f∈S}M_f| = k^{c(S)}`: a map monochromatic on every edge of `S` is exactly a map
   constant on each component of `(V,S)`, and every such map arises.
6. Conclude; polynomial identity from agreement at all positive integers. ∎
**[A], 8 steps.** Prerequisite: inclusion–exclusion (available as Möbius inversion on a
Boolean lattice) and the fact that a polynomial agreeing with another at infinitely many
points is equal to it.

*Equivalent form to record:* since `c(S)=|V|−r(S)`, `P(G;z)=z^{|V|}Σ_S(−1)^{|S|}z^{−r(S)}`,
and this is the identity that converts directly to `T` in C.4.6.

**C.1.5 Broken circuits and Whitney's broken-circuit theorem.**

Fix a linear order `e_1<e_2<⋯<e_m` on `E`. Goodall's definition (adopted here after the
convention warning in §D.1):

> **Definition (Goodall §1.4).** A **broken circuit** is a set `B ⊆ E` such that for some
> `e_l` the set `B ∪ {e_l}` is (the edge set of) a circuit of `G` and `i>l` for every
> `e_i ∈ B` — i.e. `B` is a circuit with its **first** edge removed.

> **Theorem (Whitney 1932; Goodall Thm 1.3; Blass–Sagan; Dohmen).** Let `G` be simple with
> a total order on `E` and `P(G;z)=Σ_i(−1)^i c_i(G) z^{n−i}`. Then `c_i(G)` is the number of
> `i`-edge subsets of `E` containing no broken circuit.

Three proof routes, all obtained in full:

*Route A — sign-reversing involution over the lexicographic list of broken circuits
(Whitney's own; written out by Goodall).*
1. List the broken circuits `B_1,…,B_t` in lexicographic order; let `f_j` be the edge whose
   addition to `B_j` completes a circuit.
2. Observe `f_j ∉ B_k` for `k ≤ j` (else `B_k` would contain an edge smaller than every edge
   of `B_j`, contradicting lexicographic order). **This step is the crux and is easy to get
   wrong.**
3. Let `S_0` = subsets containing no broken circuit; for `1≤j≤t` let `S_j` = subsets
   containing `B_j` but no `B_k` with `k>j`. These partition `2^E`.
4. For `A ∈ S_j` with `f_j ∉ A`: `A` contains `B_j` ⟺ `A∪{f_j}` does, and `A` contains `B_k`
   (`k>j`) ⟺ `A∪{f_j}` does. So `A ↔ A∪{f_j}` is an involution on `S_j`.
5. `c(A)=c(A∪{f_j})` (the ends of `f_j` are already joined by `B_j ⊆ A`), so the two terms
   cancel in the Whitney expansion.
6. Only `S_0` survives; a broken-circuit-free `i`-set is a forest, so `c(A)=n−i`. ∎
**[B], 16–18 steps.**

*Route B — induction on `|E|` with the greatest edge (Dohmen 2010; Goodall Question
11(iii)).* Show `c_i(G)=c_i(G∖e)+c_{i−1}(G/e)` where `e` is chosen appropriately, and match
against the recurrence for the chromatic coefficients. Dohmen chooses `e` **minimum** and
needs three lemmas plus a *specific* contraction convention: in `G|e`, the class `[x]_e` is
**identified with the maximum edge of the class**, so that `E(G|e) ⊆ E(G)` inherits the
order. Goodall's Question 11(iii) chooses `e` **greatest**. **[B], 20–25 steps**, with the
contraction-order convention as an explicit hypothesis.

*Route C — Blass–Sagan's bijection.* Restate as: `𝒫 ∪ ⋃_{i odd}𝒞_i` and `⋃_{i even}𝒞_i`
are equinumerous, where `𝒞_i={(A,C) : A ∈ d_i(G), C an A-improper colouring}` and
`A`-improper means every edge of `A` is monochromatic. Bijection: send a proper `C` to
`(∅,C)`; for improper `C`, let `e` be the **last** monochromatic edge and set
`φ(A)=A △ {e}`. Verify (i) `φ` is an involution, (ii) parity flips, (iii) `C` is
`φ(A)`-improper iff `A`-improper, (iv) `φ(A)` is broken-circuit-free if `A` is. **[B],
14–16 steps.** Step (iv) is the only real work: if `A∪{e}` contained a broken circuit `B ∋ e`
with completing edge `l>e`, then the ends of `l` are joined by `B ⊆ A∪{e}` and so receive
equal colours, contradicting the maximality of `e`.

**Recommendation:** author Route A as the proof, and record Route C as a second proof for
the Alpha refuter's cross-check.

**C.1.6 The no-broken-circuit basis and the well-definedness obligation.**

The brief asks for "independence of the coefficients from the chosen edge order". Two
statements must be separated, because only the first is true in general:

1. **The counts are order-independent.** `|d_i(G)|` equals `c_i(G)`, and `c_i(G)` is a
   coefficient of `P(G;z)`, which is defined with no reference to any order. So the
   `f`-vector of the broken-circuit complex is independent of the order. **[A], 1 step,
   *given* the broken-circuit theorem.** This is the cheap and correct way to discharge the
   obligation — do **not** attempt a direct combinatorial proof that the counts agree for
   two orders; it is much harder and gains nothing.
2. **The complex itself is not claimed order-independent.** The set of NBC subsets does
   change with the order (an NBC set for one order need not be one for another). No source
   obtained asserts that the broken-circuit complexes for two orders are isomorphic, and
   the library must **not** state that. Scaffold only the `f`-vector statement.

Corollaries that come free (Goodall Prop. 1.13): if `G` is simple connected with girth `g`,
then `c_i=C(m,i)` for `0 ≤ i ≤ g−2`, and `c_{g−1}=C(m,g−1)−t` with `t` = number of
`g`-circuits. *Proof:* no broken circuit has fewer than `g−1` edges, and the broken circuits
of size exactly `g−1` are in bijection with `g`-circuits. **[A], 5 steps.**

Goodall Prop. 1.14 (`c_{i−1} ≤ c_i` for `i ≤ ½(n−1)`) needs the **tree basis**
`P(G;z)=Σ_i(−1)^{n−i}t_i(G)z(z−1)^{i−1}` and unimodality of binomial coefficients.
**[B], 14 steps.**

### C.2 Acyclic orientations

> **Definition.** An **orientation** of `G` assigns a direction to each edge; it is
> **acyclic** if the resulting digraph has no directed cycle. A loop has no acyclic
> orientation.

> **Theorem (Stanley 1973 Cor. 1.3; Goodall Thm 1.4).** For `G` with at least one edge, the
> number of acyclic orientations of `G` is `(−1)^{|V|}P(G;−1)`.

*Direct proof (Goodall Thm 1.4) — the shortest route if you only want the count.*
1. `Q(G)` := number of acyclic orientations. `Q(K_2)=2`, `Q(\text{loop})=0`.
2. Parallel edges must be codirected in an acyclic orientation, so `Q(G)=Q(G∖e)` for `e`
   parallel to another edge.
3. `Q` is multiplicative on disjoint unions.
4. For `e=uv` simple: for every acyclic orientation `O` of `G∖e`, at least one direction of
   `e` extends `O` acyclically (if both failed there would be directed `u→v` and `v→u`
   paths in `O`, hence a directed cycle).
5. Those `O` admitting exactly one direction correspond bijectively to acyclic orientations
   of `G` whose `e` cannot be reversed; each contributes `1` to `Q(G)` and `1+0` to
   `Q(G∖e)+Q(G/e)`.
6. Those admitting both correspond to pairs of acyclic orientations of `G` differing on
   `e`; each pair contributes `2` to `Q(G)` and `1+1` to `Q(G∖e)+Q(G/e)`.
7. Hence `Q(G)=Q(G∖e)+Q(G/e)`, matching `(−1)^{|V|}P(G;−1)`'s recurrence. ∎
**[B], 14 steps.**

**Caution.** Steps 5–6 as Goodall writes them are the only loose part: "acyclic
orientations of `G` where the direction of `e` can be reversed to make another acyclic
orientation of `G` are in bijective correspondence with those orientations of `G` that
induce acyclic orientations on `G/e`". Stanley's own §C.3 argument is tighter and should be
preferred if the library wants one proof serving both the count and the reciprocity.

Free corollaries: `K_d` has `d!` acyclic orientations (Beck–Sanyal Ex. 1.7) **[A], 3
steps**, since `χ_{K_d}(n)=n^{\underline d}` and `(−1)^dχ(−1)=d!`.

> **Theorem (Greene–Zaslavsky 1983; Goodall Thm 3.8).** For connected `G` and any fixed
> `u ∈ V`, the number of acyclic orientations with unique source `u` equals `T(G;1,0)`; in
> particular it does not depend on `u`.

*Proof (Goodall, purely by deletion–contraction — no hyperplane arrangements).* Let
`Q_u(G)` be that number. `Q_u=0` if the chosen `e=uv` is a loop; `Q_u(G)=Q_u(G/e)` if `e` is
a bridge (in the component of `G∖e` containing `v`, the only source must be `v`);
`Q_u(G)=Q_u(G/e)+Q_u(G∖e)` if `e` is ordinary, by splitting on whether `uv` is the only edge
into `v`. Apply the recipe theorem with `α=β=γ=1`, `x=1`, `y=0`. ∎ **[B], 16 steps.**
Note `T(G;1,0)=P'(G;0)` for connected `G`, i.e. it is the coefficient of `z` in `P(G;z)`.

The refinement **Thm 3.25** (unique source `u` *and* unique sink `v` counted by `t_{1,0}`)
is **deferred**: Goodall's own footnote says the original Greene–Zaslavsky and Las Vergnas
proofs use hyperplane arrangements.

### C.3 Stanley's reciprocity theorem

> **Definition (Beck–Sanyal §1.1; Stanley 1973).** An orientation `ρ` and an `n`-colouring
> `c` of `G` are **compatible** if `c(u) ≥ c(v)` for every oriented edge `u→v`, and
> **strictly compatible** if `c(u) > c(v)` for every oriented edge `u→v`.

> **Theorem (Stanley 1973, Thm 1.2; Beck–Sanyal Thm 1.1.5).** Let `G` be a finite graph on
> `d` nodes with chromatic polynomial `χ_G`. Then `(−1)^d χ_G(−n)` equals the number of
> **compatible** pairs `(ρ,c)` where `c` is an `n`-colouring and `ρ` is an acyclic
> orientation. In particular `(−1)^d χ_G(−1)` is the number of acyclic orientations of `G`.

Two supporting statements come first and are cheap:

> **Prop. (Beck–Sanyal 1.1.3).** If `c` is proper and `ρ` is the orientation induced by `c`
> (`v_i ← v_j` when `i<j` and `c(v_i)>c(v_j)`), then `ρG` is acyclic. *Proof:* a directed
> cycle would give `c(v_{i_0})<c(v_{i_1})<⋯<c(v_{i_0})`. ∎ **[A], 2 steps.**

> **Prop. (Beck–Sanyal 1.1.4).** If `(ρ,c)` is strictly compatible then `c` is proper and
> `ρ` acyclic; hence `χ_G(n)` counts the strictly compatible pairs. **[A], 4 steps.**
> (Equivalently Stanley's Prop. 1.1.)

*Proof route (Stanley 1973, Thm 1.2) — decomposed:*
1. Define `χ̄_G(n)` := number of compatible pairs `(ρ,c)` with `ρ` acyclic.
2. Establish that `χ_G` is uniquely determined by: (i) `χ_{G_0}(n)=n` for the one-vertex
   graph; (ii) `χ_{G+H}=χ_Gχ_H` on disjoint unions; (iii) `χ_G=χ_{G∖e}−χ_{G/e}`.
   *(This is itself an induction on `|E|` — count it as 4 of the steps.)*
3. Verify (i′) `χ̄_{G_0}(n)=n` and (ii′) multiplicativity. Both immediate.
4. Prove (iii′) `χ̄_G(n)=χ̄_{G∖e}(n)+χ̄_{G/e}(n)`. Fix `e={u,v}`; for each pair `(σ,O)` on
   `G∖e` with `O` acyclic and compatible with `σ`, let `O_1 = O ∪ (u→v)`, `O_2 = O ∪ (v→u)`.
   - **Case `σ(u)>σ(v)`:** `O_2` is incompatible; `O_1` is compatible and acyclic (a cycle
     `u→v→w_1→⋯→u` would force `σ(u)>σ(v)≥σ(w_1)≥⋯≥σ(u)`).
   - **Case `σ(u)<σ(v)`:** symmetric.
   - **Case `σ(u)=σ(v)`:** both `O_1,O_2` are compatible; at least one is acyclic, since if
     `O_1` had a cycle `u→v→w_1→⋯→u` and `O_2` a cycle `v→u→w'_1→⋯→v`, splicing gives a
     directed cycle in `O`.
5. Show the pairs for which **both** `O_1,O_2` are acyclic are in bijection with the pairs
   `(σ′,O′)` on `G/e`: with `z` the identified vertex, put `σ′(z)=σ(u)=σ(v)`, `σ′=σ`
   elsewhere, and `O′` the induced orientation. *(Stanley writes "It is easily seen"; a
   library write-up must actually verify that `O′` is acyclic and that the map is
   bijective. Budget 4 steps for this.)*
6. Conclude `χ̄_G(n)=(−1)^dχ_G(−n)` by (i′)–(iii′) and step 2.
7. Set `n=1`: every orientation is compatible with the constant map, so `χ̄_G(1)` is the
   number of acyclic orientations. ∎

**[B], 22–26 steps.** Prerequisites: chromatic polynomial + deletion–contraction +
directed cycles only. **No geometry.** Beck–Sanyal's Exercise 1.9 is the same route in
three lines and is a good corroborator, but Stanley's paper is the write-up to follow.

Beck–Sanyal give a *geometric* proof in §7.1 (inside-out polytopes); that route is
**out of reach** and must not be scaffolded.

Companion statement, already in hand:

> **Theorem (Stanley, via Blass–Sagan).** The number of acyclic orientations of `G` equals
> the number of `A ⊆ E(G)` containing no broken circuit.

Given C.1.5 and C.3 this is a one-line corollary: both equal `Σ_i c_i(G) = (−1)^p χ_G(−1)`.
**[A], 2 steps.** Blass–Sagan additionally give a direct bijection (an algorithm that walks
the edges in order and either un-orients or deletes each), which is **[B], ~15 steps** and
is optional.

### C.4 The Tutte polynomial

**C.4.1 The two definitions.**

> **Definition R (rank–nullity / corank–nullity generating function).** *(Sokal eq. (2.25a);
> Ellis-Monaghan–Merino Def. `def:rank_generating_expansion`; Goodall Prop. 3.10.)*
> `T(G;x,y) = Σ_{A ⊆ E} (x−1)^{r(E)−r(A)} (y−1)^{|A|−r(A)}`
> `           = Σ_{A ⊆ E} (x−1)^{c(A)−c(E)} (y−1)^{|A|+c(A)−|V|}`.

> **Definition D (deletion–contraction recursion).** *(Ellis-Monaghan–Merino Def.
> `def:recursive`; Goodall eq. (6)/(7).)*
> `T(G;x,y) = T(G∖e;x,y) + T(G/e;x,y)` for `e` ordinary;
> `T(G;x,y) = x·T(G/e;x,y)` for `e` a bridge;
> `T(G;x,y) = y·T(G∖e;x,y)` for `e` a loop;
> `T(G;x,y) = 1` if `E=∅`. Equivalently, `T(G;x,y)=x^k y^ℓ` when `G` has exactly `k` bridges
> and `ℓ` loops and nothing else.

**Which definition avoids the independence-of-deletion-order obligation? Definition R.**
This is stated explicitly by three of the sources:

- Sokal §4.3, Remark: *"Many treatments in the literature define the Tutte polynomial by
  the deletion-contraction identity … together with the initial condition … But this
  approach has the disadvantage that one must prove that this `Z_G` is well-defined, i.e.
  that the result does not depend on the order in which one applies (4.16) to the various
  edges. A much cleaner approach, it seems to me, is to define `Z_G(q,𝐯)` by the explicit
  formula (1.1), and then deduce the deletion-contraction identity as an immediate
  property."*
- Ellis-Monaghan–Merino §3: *"Showing that the linear recursion form is equivalent to rank
  generating function form also establishes the essential fact that it is well-defined,
  that is, independent of the order in which the edges are deleted and contracted."*
- Goodall §3.2: *"It is common to define the Tutte polynomial by its subgraph expansion
  (11), having over the deletion–contraction formulation (6) the advantage of being
  transparently well-defined."*

**Recommendation: define by R, prove D as a theorem.**

**C.4.2 What must be proved to get from R to D.** *(Goodall's proof of Prop. 3.10, written
out; he introduces the auxiliary Whitney rank-nullity generating function
`R(G;u,v)=Σ_{A⊆E}u^{r(E)−r(A)}v^{|A|−r(A)}` and shows `T(G;x,y)=R(G;x−1,y−1)`.)*

Three rank identities are the whole content:
- (12) `e ∉ A ⟹ r_G(A) = r_{G∖e}(A)`.
- (13) `e ∈ A ⟹ r_{G∖e}(A∖e) = r_G(A)−1` if `e` is a bridge, `= r_G(A)` if `e` is a loop.
- (14) `r_{G/e}(A∖e) = r_G(A)−1` if `e` is ordinary or a bridge.

Then split `Σ_{A⊆E}` into `A ⊆ E∖e` and `e ∈ A`, and check four cases:
1. `E=∅`: `R=1`.
2. `e` a bridge: `R(G;u,v)=(u+1)R(G∖e;u,v)`, i.e. `T` picks up a factor `x`.
3. `e` a loop: `R(G;u,v)=(v+1)R(G∖e;u,v)`, i.e. `T` picks up a factor `y`.
4. `e` ordinary: `R(G;u,v)=R(G∖e;u,v)+R(G/e;u,v)`.
**[B], 16–20 steps** (the case bookkeeping is what costs; each individual step is trivial).

**C.4.3 The converse direction (D ⟹ R) and the order-independence obligation.** If the
library ever wants D as the definition, Goodall Prop. 3.1 is the required lemma: for
distinct `e,f`, applying the recursion to `e` then `f` gives the same result as `f` then
`e`. The proof is a case analysis on edge-type preservation:
(a) `e` a bridge in `G` ⟹ bridge in `G/f` and `G∖f`; (a)* dual for loops;
(b) `e` ordinary and some cutset contains `e` but not `f` ⟹ `e` ordinary in `G/f`;
(b)* `e` ordinary and some cycle contains `e` but not `f` ⟹ `e` ordinary in `G∖f`;
(c) `e` ordinary but every cutset through `e` contains `f` (⟺ `e ∥ f`) ⟹ `e` is a loop in
`G/f` and symmetrically `f` is a loop in `G/e`;
(c)* dual, with bridges in `G∖f`, `G∖e`.
Plus the commutation `G/e∖f = G∖f/e`. **[B], 20–24 steps.** *This is exactly the work the
rank–nullity definition avoids.*

**C.4.4 Multiplicativity.**

> **Proposition (Goodall 3.2; Ellis-Monaghan–Merino Prop. `product-formula`).** If
> `G=G_1∪G_2` with `|V(G_1)∩V(G_2)| ≤ 1` then `T(G)=T(G_1)T(G_2)`. So `T` is multiplicative
> over connected components **and** over blocks.

*Proof:* true when every edge is a bridge or loop; induct on the number of ordinary edges,
choosing `e` ordinary inside one block. **[A], 8 steps.**

**C.4.5 The universality / recipe theorem.**

Two statements are needed, and the sources split them:

> **Theorem (Recipe / universality; Goodall Thm 3.6).** Let `𝒢` be a minor-closed class.
> There is a **unique** graph invariant `f : 𝒢 → ℤ[x,y,α,β,γ]` with
> `f(G) = f(G/e)+f(G∖e)` for `e` ordinary, `= x f(G/e)` for `e` a bridge,
> `= y f(G∖e)` for `e` a loop, and `f(G)=γ^{|V|}` when `E(G)=∅`; and it is
> `f(G) = γ^{c(G)} α^{r(G)} β^{n(G)} T(G; x/β, y/α)`.

> **Theorem (Ellis-Monaghan–Merino Thms `universal` and `unique`).** Let `𝒢` be minor-closed,
> `R` a commutative ring with `1`, `f : 𝒢 → R`. If `f(E_1)=1`, `f(G)=a f(G∖e)+b f(G/e)` for
> every ordinary `e`, and `f` is multiplicative on disjoint unions and one-point joins,
> then `f(G) = a^{|E(G)|−r(E(G))} b^{r(E(G))} T(G; x₀/b, y₀/a)` where `x₀=f(B)`, `y₀=f(L)`
> (`B` a single bridge, `L` a single loop). Conversely, for **any** `a,b,x₀,y₀ ∈ R` there is
> a **unique** such invariant, given by the same formula.

Proof: induction on the number of ordinary edges, after checking the formula on graphs
consisting only of bridges and loops. **[B], 14–18 steps.**

**Three traps the scaffolder must handle:**
1. *Non-units.* If `a` or `b` is not a unit of `R`, the formula must be read as: expand via
   the rank–nullity expansion (R) and **cancel before evaluating**. Both sources say this
   explicitly (Ellis-Monaghan–Merino after Thm `unique`; Goodall's Note (ii) gives the
   explicit values when `α=0`, `β=0`, or both).
2. *Bridge convention.* Goodall's Note (i): if one instead requires `f(G)=x f(G∖e)` on a
   bridge, the evaluation point becomes `(x/α, y/α)` rather than `(x/β, y/α)`. When `α=1`
   it does not matter whether bridges are deleted or contracted.
3. *One-point joins.* The chromatic polynomial is **not** a T-G invariant as stated,
   because it is not multiplicative on one-point joins (Ellis-Monaghan–Merino Thm
   `ChrJoint`: `χ(G;λ)=χ(H_1;λ)χ(H_2;λ)/χ(K_p;λ)` over a `K_p`-separator). The fix is the
   normalisation `λ^{−κ(G)}χ(G;λ)`, which **is** a T-G invariant. Any library statement of
   the recipe theorem that omits the one-point-join hypothesis is wrong.

**C.4.6 The specialisations — exact normalisations.**

All of the following are stated identically by at least two of Goodall, Ellis-Monaghan–
Merino and Sokal; the checked cross-derivations are noted.

| target | exact identity | source | difficulty |
|---|---|---|---|
| spanning trees | `T(G;1,1)=τ(G)` for connected `G` | EM-M Thm `trivial_interpretations`(1); Goodall Q24(i) | **[A], 3 steps** from R: the surviving `A` are exactly those with `r(A)=r(E)` and `|A|=r(A)` |
| spanning forests | `T(G;2,1)` = number of `A ⊆ E` with `n(A)=0` (forests) | same | **[A], 2 steps** |
| connected spanning subgraphs | `T(G;1,2)` = number of `A ⊆ E` with `r(A)=r(E)` | same | **[A], 2 steps** |
| all subgraphs | `T(G;2,2)=2^{|E|}` | same | **[A], 1 step** |
| orientations | `T(G;2,2)` = number of orientations of `G` | EM-M §5.3 | **[A], 1 step** |
| acyclic orientations | `T(G;2,0)` = number of acyclic orientations | EM-M Thm `orientation_results`(1) | **[A], 3 steps** once C.2 and the chromatic specialisation are in place |
| acyclic, one source | `T(G;1,0)` = number of acyclic orientations with a prescribed unique source | Goodall Thm 3.8 | **[B], 16 steps**, see C.2 |
| **chromatic** | `P(G;z) = (−1)^{r(E)} z^{c(G)} T(G; 1−z, 0)` | Goodall Prop. 3.7; EM-M §6.1 | **[A], 6 steps** |
| bad-colouring / monochrome | `B(G;λ,t+1) = t^{r(E)} λ^{κ(G)} T(G; (λ+t)/t, 1+t)`, i.e. `T(G;1+λ/t, t+1)` | EM-M §6.2 | **[A], 8 steps** |
| | equivalently `B(G;k,y) = k^{c(G)}(y−1)^{r(G)} T(G; (y−1+k)/(y−1), y)` | Goodall Prop. 3.7 | — |
| **flow** | `F(G;k) = (−1)^{|E|−r(E)} T(G; 0, 1−k)` | EM-M Thm `thm:flow_polynomial`; equivalent to Goodall Thm 2.24 | **[A], 6 steps** |
| **reliability** | `R(G;p) = p^{|V|−1}(1−p)^{|E|−|V|+1} T(G; 1, 1/(1−p))` for connected `G` | EM-M Thm `reliability Tutte`; Goodall Prop. 3.9 | **[A], 8 steps** |
| planar duality | `T(G;x,y) = T(G*;y,x)` | EM-M Prop. `planar-dual`; Goodall Prop. 3.16; Sokal (2.30) | **[B], 12 steps** |
| `(x−1)(y−1)=1` | `T(G;x,y)=(x−1)^{r(E)}y^{|E|}` | Goodall Q24(ii) | **[A], 5 steps** |
| Sokal's `Z`–`T` bridge | `T_G(x,y)=(x−1)^{−k(E)}(y−1)^{−|V|}Z_G((x−1)(y−1), y−1)`, with `x=1+q/v`, `y=1+v` | Sokal (2.26)–(2.27) | **[A]** if `Z` is scaffolded; otherwise skip |

I verified the chromatic and flow normalisations against each other and against the
rank–nullity definition:

- Chromatic. `T(G;1−λ,0) = Σ_A (−λ)^{r(E)−r(A)}(−1)^{|A|−r(A)}
  = (−1)^{r(E)}Σ_A(−1)^{|A|}λ^{r(E)−r(A)}`, and `r(E)−r(A)=c(A)−c(G)`, so
  `(−1)^{r(E)}λ^{c(G)}T(G;1−λ,0)=Σ_A(−1)^{|A|}λ^{c(A)} = P(G;λ)` by C.1.4. ✔
- Flow. `T(G;0,1−k) = Σ_A(−1)^{r(E)−r(A)}(−k)^{n(A)} = (−1)^{r(E)}Σ_A(−1)^{|A|}k^{n(A)}`,
  hence `(−1)^{|E|−r(E)}T(G;0,1−k) = Σ_A(−1)^{|E|−|A|}k^{n(A)} = F(G;k)` by C.5.3. ✔

**C.4.7 The spanning-tree (activity) expansion — in reach.**

> **Definition (Goodall Def. 3.11; Ellis-Monaghan–Merino Def. `def:trees_expansion`).** Fix
> a linear order on `E`. For a spanning tree `T` of connected `G`: for `e ∉ T` let
> `cyc(T,e)` be the unique cycle in `T∪{e}`; for `e ∈ T` let `cut(T,e)` be the unique bond
> contained in `(E∖T)∪{e}`. Then `e ∈ T` is **internally active** if it is the **least**
> edge of `cut(T,e)`, and `e ∉ T` is **externally active** if it is the least edge of
> `cyc(T,e)`.

> **Theorem (Tutte 1954; Goodall Thm 3.12).** For connected `G` with an edge order,
> `T(G;x,y) = Σ_{i,j} t_{ij}(G) x^i y^j`, where `t_{ij}(G)` is the number of spanning trees
> of internal activity `i` and external activity `j`. In particular each `t_{ij}` is
> independent of the order.

*Proof route (Goodall, induction on `|E|`, always deleting/contracting the **greatest**
edge `e_m`):*
1. Base: `G=K_1`, `t_{00}=1`.
2. `e_m` a **bridge**: `e_m` lies in every spanning tree, `cut(T,e_m)={e_m}` so `e_m` is
   internally active in every `T`; hence `t_{0j}(G)=0` and `t_{ij}(G)=t_{i−1,j}(G/e_m)`;
   apply `T(G)=xT(G/e_m)`.
3. `e_m` a **loop**: `e_m` is in no spanning tree, `cyc(T,e_m)={e_m}`, so `e_m` is
   externally active in every `T`; `t_{ij}(G)=t_{i,j−1}(G∖e_m)`; apply `T(G)=yT(G∖e_m)`.
4. `e_m` **ordinary**: spanning trees of `G` not containing `e_m` = spanning trees of
   `G∖e_m` with identical activities (every other edge precedes `e_m`, and `cyc(T,e_m)`
   contains a smaller edge); spanning trees of `G` containing `e_m` correspond to spanning
   trees of `G/e_m` with identical activities (`cut(T,e_m)` contains a smaller edge since
   `e_m` is not a bridge). So `t_{ij}(G)=t_{ij}(G/e_m)+t_{ij}(G∖e_m)`.
5. Order-independence: the left side is order-free by C.4.1/C.4.2, so each `t_{ij}` is too.
6. Non-negativity of the coefficients of `T` follows at once (Ellis-Monaghan–Merino make
   this remark explicitly). ∎

**[B], 22–26 steps.** Prerequisites: fundamental cycle and fundamental cut of a spanning
tree — **the library has spanning trees**, so these two uniqueness facts are either already
present or a short addition.

Corollaries that come free:
- `t_{ij}` counts maximal spanning forests when `G` is disconnected (Goodall Cor. 3.13).
  **[A], 3 steps.**
- `deg_x T = r(G)`, `deg_y T = n(G)` (Goodall, after Prop. 3.14): choose the edge order so
  that a maximal spanning forest comes first, resp. last. **[A], 4 steps.**
- `t_{1,0}(G)=t_{0,1}(G)` when `|E|>1` (Goodall Prop. 3.14): a bijection swapping `e_1` and
  `e_2` in a spanning tree. **[B], 14 steps.**
- Planar duality via activities: `T ↦ T* = E∖T` is a bijection between spanning trees of a
  connected plane `G` and of `G*` that **swaps** internal and external activity, so
  `t_{ij}(G)=t_{ji}(G*)` (Goodall Prop. 3.17). **[B], 14 steps** — and Goodall's footnote 3
  observes that Euler's formula falls out of it.

**Verdict: in reach.** Scaffold it. It is the only route to non-negativity of the Tutte
coefficients and it is what makes the `t_{1,0}` (beta invariant) results possible.

**C.4.8 Coefficient facts (Goodall Prop. 3.5).** `t_{00}(G)=0` if `E≠∅`; for loopless `G`,
`t_{10}(G)≠0` ⟺ `G` is 2-connected; `x^k ∣ T` ⟺ `G` has ≥ `k` bridges (dually `y^ℓ`);
`t_{ij}=0` for `i>r(G)` or `j>n(G)` except `t_{r(G),ℓ}=1=t_{k,n(G)}`. Proofs by induction on
ordinary edges. **[B], 18 steps** for the package.

**C.4.9 The beta invariant.** `β(G)=(−1)^{r(G)}Σ_{A⊆E}(−1)^{|A|}r(A)` (Crapo;
Ellis-Monaghan–Merino §7.1) `= t_{1,0}(G)` (Goodall §3.6). Also `t_{1,0}(K_n)=(n−2)!`
(Goodall Ex. 3.22); `t_{1,0}(G)=1` ⟺ `G` is series-parallel for 2-connected `G` (Goodall
Thm 3.21). **[B]** each. Good second-tier material.

### C.5 Nowhere-zero flows and the flow polynomial

**C.5.1 Definitions.** *(Goodall Def. 2.5; Beck–Sanyal §1.2; Ellis-Monaghan–Merino §6.3;
Diestel §6.3 — all in agreement.)* Fix an orientation `ω` of `G` and an abelian group `A`.
An **`A`-flow** is `φ : E → A` with `Σ_{e ∈ ω^+(v)} φ(e) = Σ_{e ∈ ω^−(v)} φ(e)` for every
vertex `v` (Kirchhoff's law). It is **nowhere zero** if `φ(e) ≠ 0` for all `e`.

**C.5.2 The orientation-independence obligation.** *(Beck–Sanyal Prop. 1.2.1 + Ex. 1.11;
Ellis-Monaghan–Merino §6.3; Sokal §2.4 "all subsequent results will be independent of this
choice".)*

> **Proposition.** The number of nowhere-zero `A`-flows does not depend on the chosen
> orientation.

*Proof.* Two orientations differing on exactly one edge `e`: the map replacing `φ(e)` by
`−φ(e)` and fixing all other values is a bijection between the nowhere-zero `A`-flows for
the two orientations (Kirchhoff's law at both ends of `e` is preserved, and `−φ(e) ≠ 0`
since `φ(e) ≠ 0`). Any two orientations differ on a finite set of edges; compose. ∎
**[A], 6 steps.** This is exactly the well-definedness obligation the brief asks about,
and it is genuinely cheap. Ellis-Monaghan–Merino write it in one sentence; the library
should write the induction on the symmetric difference explicitly.

**C.5.3 The counting lemma and the flow polynomial.**

> **Lemma (Goodall Lem. 2.21).** Let `G` be connected with spanning tree `T`, `A` an abelian
> group, and `φ₀ : E∖T → A` arbitrary. Then there is a **unique** `A`-flow `φ` of `G` with
> `φ|_{E∖T} = φ₀`.

*Proof:* induct on `|T|`, peeling leaves of `T`: at a leaf `v` incident to exactly one tree
edge `f`, Kirchhoff's law at `v` determines `φ(f)` uniquely from the already-fixed values
on the non-tree edges at `v`; check that the law at the last vertex holds automatically by
summing the laws at all others. **[B], 12–14 steps.** Consequence: the number of `A`-flows
of `(V,F)` is `|A|^{|F|−r(F)} = |A|^{n(F)}`.

> **Theorem (Tutte 1954; Goodall Thm 2.24; Diestel Thm 6.3.1).** For a finite abelian group
> `A` with `|A|=k`, the number of nowhere-zero `A`-flows of `G` is
> `F(G;k) = Σ_{F ⊆ E} (−1)^{|E|−|F|} k^{n(F)}`.

*Proof.* `k^{n(F)}` is the number of `A`-flows supported inside `F`; inclusion–exclusion
over `F ⊆ E`. ∎ **[A], 5 steps** *given* the counting lemma.

**Corollary (the fact that surprises everyone):** the number of nowhere-zero `A`-flows
depends only on `|A|`, not on the group structure — because the right-hand side does. So no
structure theorem for finite abelian groups is needed. This is Diestel Cor. 6.3.2 and is
also Sokal's Thm 2.4. **[A], 1 step.**

> **Proposition (Goodall 2.25).** `F(G;k) = F(G/e;k) − F(G∖e;k)` for `e` ordinary; `= 0` for
> `e` a bridge; `= (k−1)F(G∖e;k)` for `e` a loop; `= 1` if `E=∅`.

*Proof.* Bridge: `{e}` is a cut, so a flow must vanish on `e`. Loop: any nonzero value
works. Ordinary: bijections between (nowhere-zero flows of `G∖e`) and (flows of `G` zero
exactly at `e`), and between (nowhere-zero flows of `G/e`) and (flows of `G` nowhere zero
except possibly at `e`). ∎ **[A], 8 steps.**

*Careful:* Ellis-Monaghan–Merino's sketch phrases the ordinary case as
`χ*(G;H)=χ*(G∖e;H)−χ*(G/e;H)`, i.e. with the two terms in the other order — check the sign
against C.4.6 before authoring. Goodall's `F(G)=F(G/e)−F(G∖e)` is the one consistent with
`F(G;k)=(−1)^{n(E)}T(G;0,1−k)`.

> **Corollary (Beck–Sanyal Prop. 1.2.4).** For bridgeless connected `G`, `F(G;k)` agrees
> with a **monic** integer polynomial of degree `|E|−|V|+1`. **[A], 6 steps** from the
> subgraph expansion (`F=E` is the unique term of top degree).

**C.5.4 Flow–colouring duality.**

> **Theorem (Ellis-Monaghan–Merino §6.3; Beck–Sanyal Prop. 1.2.2 + Ex. 1.12; Diestel Thm
> 6.5.3).** For a connected plane graph `G` with dual `G*`,
> `P(G;λ) = λ · F(G*;λ)`.

Two routes:
- *Algebraic:* combine the chromatic specialisation, the flow specialisation and
  `T(G;x,y)=T(G*;y,x)`. **[A], 6 steps** once C.4.6 is in place.
- *Bijective (Beck–Sanyal):* from a colouring `c : V → ℤ_n`, record the colour gradient
  `t(u→v)=c(v)−c(u)`; `t` is well defined around every cycle; transport `t` to `G*` by the
  90°-rotation edge bijection; the result is a `ℤ_n`-flow on `G*`, nowhere zero exactly
  when `c` is proper; the fibre over each flow has size `n` (the colour of one basepoint).
  **[B], 16–20 steps**, and it needs the plane-dual edge bijection and the fact that each
  face of `G` is bounded by a cycle.

**C.5.5 What to import rather than re-prove.** Diestel ch. 6 is already harvested by the
sibling agent: Thm 6.3.3 (`k`-flow ⟺ `ℤ_k`-flow), 6.4.1–6.4.5 (small `k`), 6.5.1–6.5.3
(duality), 6.6.1 (Seymour's 6-flow theorem). Beck–Sanyal Ex. 1.14 gives an **independent**
augmenting-path proof of `k`-flow ⟺ `ℤ_k`-flow, which is worth recording as a second
source. Seymour's 6-flow theorem should be **stated only** (or deferred): Goodall does not
prove it, Diestel does, and it is long.

**C.5.6 Flow reciprocity — a real gap.** `(−1)^{ξ(G)}φ_G(−n)` counts pairs of a `ℤ_n`-flow
`f` and a totally cyclic reorientation of `G/supp(f)`; at `n=1` it is the number of totally
cyclic orientations (Beck–Sanyal Thm 1.2.5, `ξ(G)=|E|−|V|+c`). Beck–Sanyal prove it **only**
in §7.6 via inside-out polytopes and zonotopes. No elementary route was obtained. Mark
**deferred [C]** and record the gap; `T(G;0,2)` = number of totally cyclic orientations
(Ellis-Monaghan–Merino Thm `orientation_results`(2)) is the same content and is cited there
to Greene–Zaslavsky with no proof.

### C.6 Matrix–Tree, and the one place a prerequisite is genuinely missing

> **Theorem (Goodall Thm 3.29).** For connected `G` with Laplacian `Q = D Dᵀ = Δ − A` and
> any vertex `u`, `det Q[u]` equals the number of spanning trees of `G`; equivalently
> `T(G;1,1) = det Q[u]`.

Goodall proves it by showing `det Q[u]` satisfies the **same deletion–contraction
recurrence** as `τ(G)` — **not** by Cauchy–Binet. Ellis-Monaghan–Merino instead cite the
Cauchy–Binet/`L=DDᵀ` proof. Since the library has determinants with the Laplace cofactor
expansion but (per the brief) **not** Cauchy–Binet, **use Goodall's route**: it needs only
cofactor expansion and the recurrence. **[B], 18–22 steps**, and Prop. 3.28 (`DDᵀ=Δ−A`) is
a **[A], 5-step** warm-up.

---

## D. Convention disagreements, with sources and a recommendation

### D.1 Broken circuits: remove the FIRST edge or the LAST edge?

The four sources split, and they are **not** interchangeable for a fixed order.

| source | verbatim | which edge removed |
|---|---|---|
| Goodall §1.4 | *"A broken circuit is the result of removing the first edge from some circuit, i.e., a subset `B ⊆ E` such that for some edge `e_l` the edges `B ∪ {e_l}` form a circuit of `G` and `i>l` for each `e_i ∈ B`."* | **first / least** |
| Blass–Sagan | *"Following Whitney [3], we define a broken circuit to be a set of edges obtained by removing from some circuit in `G` its last edge."* | **last / greatest** |
| Dohmen §1 | *"A broken circuit of a graph `G` arises from the edge-set of a cycle of `G` by removing its maximum edge with respect to some fixed linear ordering relation on the edges."* | **maximum** |
| Read 1968 §7 | *"…from each circuit we remove the edge with highest number."* | **highest** |

**This is a genuine conflict, not a notational one.** For a fixed order the two definitions
give different families of broken circuits and hence different NBC sets. They are related by
order reversal: the Goodall broken circuits for `<` are exactly the Blass–Sagan/Dohmen/Read
broken circuits for the reverse order `>`. Whitney's theorem is true under either
convention (because both counts equal the order-free `c_i(G)`), but a proof written for one
convention **must not** be pasted onto the other: Goodall's Route A picks the
lexicographically smallest broken circuit and adds `f_j`; Dohmen's Route B contracts along
the **minimum** edge and identifies contracted classes with their **maximum** member;
Blass–Sagan pick the **last** monochromatic edge.

**Recommendation:** adopt the **majority convention — remove the LAST (greatest) edge** —
because three of the four sources use it, it is Whitney's own, and both the Blass–Sagan
bijection and Dohmen's induction are written for it. Then Goodall Thm 1.3's proof must be
transcribed with the order reversed, and the batch notes must record that the source's
orientation was flipped. Whichever is chosen, state it in the Definition item and never
mix.

### D.2 Rank polynomial vs Tutte polynomial

| convention | statement | source |
|---|---|---|
| Whitney rank-nullity generating function | `R(G;u,v)=Σ_{A⊆E} u^{r(E)−r(A)} v^{|A|−r(A)}` | Goodall §3.2 (proof of Prop. 3.10), named there "the Whitney rank-nullity generating function" |
| Tutte polynomial | `T(G;x,y)=R(G;x−1,y−1)` | Goodall §3.2; Sokal (2.25a) |
| Godsil & Royle | the whole of their ch. 15 is titled **"The Rank Polynomial"**, with §15.9 "Rank Polynomial" and §15.10 "Evaluations of the Rank Polynomial" — the Tutte polynomial appears only as a shifted variant | Godsil–Royle TOC (A.13) |
| Sokal | `Z_G(q,𝐯)=Σ_{A⊆E}q^{k(A)}∏_{e∈A}v_e`, with `T_G(x,y)=(x−1)^{−k(E)}(y−1)^{−|V|}Z_G((x−1)(y−1),y−1)` | Sokal (1.1), (2.26) |

**Recommendation:** define `T(G;x,y)` by the rank–nullity expansion (Sokal (2.25a) =
Ellis-Monaghan–Merino Def. `def:rank_generating_expansion` = Goodall (11)), which all three
Tutte-facing sources give **identically**, and introduce `R(G;u,v)` only as an internal
device inside the proof of C.4.2. Add a Remark recording the Godsil–Royle "rank polynomial"
naming so a reader meeting that book is not confused. Do **not** scaffold Sokal's
multivariate `Z_G` in this wave (see B.4).

### D.3 The sign in the chromatic specialisation

All sources agree, and the agreement is worth stating because it is easy to get wrong:

> `P(G;λ) = (−1)^{r(E)} λ^{c(G)} T(G; 1−λ, 0)`

- Ellis-Monaghan–Merino §6.1: `χ(G;λ)=(−1)^{r(E)}λ^{κ(G)}T(G;1−λ,0)`.
- Goodall Prop. 3.7: `P(G;z)=(−1)^{r(G)}z^{c(G)}T(G;1−z,0)`.
- Sokal: `P_G(q)=Z_G(q,−1)`, which under (2.26)–(2.27) is the same identity.

**The convention that makes it come out right** is precisely:
`r(A)=|V|−c(A)` (so `r(E)=|V|−c(G)`); `n(A)=|A|−r(A)`;
`T(G;x,y)=Σ_{A⊆E}(x−1)^{r(E)−r(A)}(y−1)^{n(A)}`;
and `P(G;λ)=Σ_{A⊆E}(−1)^{|A|}λ^{c(A)}` (Whitney, C.1.4).
The three-line derivation is in C.4.6. Any source that instead defines rank as `|V|−1` for
connected graphs, or writes the Whitney expansion with `λ^{|V|−r(A)}` and then drops the
`λ^{c(G)}` prefactor, will produce a sign error. The library must fix `r(A)=|V|−c(A)` **at
the top of the Tutte page** and never vary it.

### D.4 The flow-polynomial sign

`F(G;k) = (−1)^{|E|−r(E)} T(G;0,1−k) = (−1)^{n(G)} T(G;0,1−k)`
(Ellis-Monaghan–Merino Thm `thm:flow_polynomial`), equivalently
`F(G;k)=Σ_{F⊆E}(−1)^{|E|−|F|}k^{n(F)}` (Goodall Thm 2.24). Verified consistent in C.4.6.
Beck–Sanyal write the exponent as `ξ(G)=|E|−|V|+c` in their reciprocity statement — the
same number as `n(G)`; the two names should not both appear in the library.

### D.5 Diestel's flow polynomial is in `|H|−1`, not `|H|`

Diestel Thm 6.3.1 (per the sibling harvest) says: *"there exists a polynomial `P` such that,
for any finite abelian group `H`, the number of `H`-flows on `G` is `P(|H|−1)`"* — note the
shift, and note that Diestel counts **`H`-flows** in his sense (which for him means
nowhere-zero). Goodall, Beck–Sanyal, Ellis-Monaghan–Merino and Sokal all write the flow
polynomial as a function of `k=|H|` directly. **Recommendation:** use `F(G;k)` in `k=|H|`,
and add an explicit Remark reconciling it with Diestel's `P(|H|−1)` if any library item
cites Diestel 6.3.1. This is the single likeliest source of a wrong citation on the page.

### D.6 Multigraph vs simple graph hypotheses

- Whitney's broken-circuit theorem is stated by Goodall and Blass–Sagan for **simple** `G`;
  Dohmen handles parallel edges via his Lemma 1 (a parallel edge `e<f` makes `{e}` a broken
  circuit) and loops by `P_G=0`. If the library states the theorem for multigraphs it must
  import Dohmen's Lemma 1.
- Bondy–Murty Thm 8.6 is stated for **simple** `G`; Goodall Prop. 1.9 is for arbitrary
  multigraphs. Use Goodall's.
- Beck–Sanyal work with **simple** graphs throughout Chapter 1 and say so explicitly
  (*"we dread the formal overhead nonsimple graphs entail"*). Their Prop. 1.1.1 mentions
  loops but the rest of §1.1 assumes simple. Do not import a Beck–Sanyal statement into a
  multigraph context without checking.
- The Tutte polynomial genuinely needs loops and parallel edges (contraction creates them),
  so the Tutte page must be multigraph from the start.

### D.7 `c` vs `κ` vs `k` for the number of components

Goodall writes `c(G)`; Ellis-Monaghan–Merino write `κ(G)` (and reserve `c(G)` for the number
of *non-trivial* components — a genuine trap); Sokal writes `k(A)` and reserves `c(A)` for
the **cyclomatic number** `|A|−r(A)`, i.e. Sokal's `c` is everyone else's `n`.
**Recommendation:** `c(A)` = components, `r(A)` = rank, `n(A)` = nullity, and never use
`κ` or `k` for components on these pages. Add an explicit notation Remark, because a reader
coming from Sokal will read `c(A)` as nullity.

---

## E. Prerequisite audit

Library **has** (per the brief): finite sets, induction, posets and lattices, Möbius
inversion and incidence algebras, graphs, trees, spanning trees, Menger, network flows and
Ford–Fulkerson, plane graphs and Euler's formula, polynomial rings over a commutative ring,
formal power series, vector spaces and rank, determinants with Laplace cofactor expansion.
Library **lacks**: matroids, spectral theorem, algebraic topology, measure theory.

| result | genuinely needs | in library? |
|---|---|---|
| chromatic polynomial via colour-partitions (C.1.1 Route 1) | finite sets, falling factorials, polynomial ring `ℤ[z]` | **yes** |
| polynomiality via deletion–contraction (Route 2) | induction on `|E|`, contraction of an edge | **yes** — but *contraction* must exist as a library operation; check whether the graph pages define `G/e` for multigraphs. If not, that is the one definitional addition the whole block needs |
| polynomiality via the bond lattice (Route 3) | `L_G` is a lattice; Möbius inversion on a finite poset | **yes** — Möbius inversion and incidence algebras are present. Needs a new item: "the connected partitions of `V(G)` form a lattice under refinement" |
| Whitney rank expansion | inclusion–exclusion; "two polynomials agreeing at infinitely many points are equal" | **yes** (I–E as Möbius inversion on a Boolean lattice); the polynomial-identity lemma is elementary over an infinite integral domain and may need to be authored |
| broken-circuit theorem, Route A | linear orders, circuits, forests, the Whitney expansion | **yes** |
| broken-circuit theorem, Route B (Dohmen) | a contraction operation that **inherits a linear order** on edges | **needs authoring** — Dohmen's `G|e` with `[x]_e` identified with `max[x]_e`; this is a genuine new definition, not a library gap |
| Stanley reciprocity | directed cycles; acyclic orientations; chromatic deletion–contraction | **yes** |
| Blass–Sagan bijection | involutions, symmetric difference, orders | **yes** |
| Tutte, rank–nullity definition | `r(A)=|V|−c(A)` and `n(A)=|A|−r(A)`; `ℤ[x,y]` | **yes** — no matroid needed. `r` can be introduced as a purely graph-theoretic function |
| Tutte, deletion–contraction from R (C.4.2) | the three rank identities (12)(13)(14) | **yes** — all elementary |
| Tutte, order-independence of D (C.4.3) | bridge/loop/ordinary type preservation; `G/e∖f=G∖f/e` | **yes** |
| recipe / universality theorem | commutative ring with 1; polynomial ring in 5 indeterminates; minor-closed class | **yes** — `ℤ[x,y,α,β,γ]` is a polynomial ring over a commutative ring, which the library has. "Minor-closed class" needs defining (minor = `G∖A/A'`) |
| specialisations `T(1,1)`, `(2,1)`, `(1,2)`, `(2,2)` | rank–nullity expansion only | **yes** |
| chromatic and flow specialisations | rank–nullity expansion + C.1.4 / C.5.3 | **yes** |
| reliability polynomial | rank–nullity expansion; the definition of the all-terminal reliability as a probability | **yes** as an algebraic identity. **Caution:** if the library states `R(G;p)` probabilistically it needs a finite probability space on `2^E`; if it states it as the polynomial `Σ_{A conn. spanning} p^{|A|}(1−p)^{|E∖A|}`, no probability is needed. **Prefer the polynomial statement**, with the probabilistic reading as a Remark |
| spanning-tree activity expansion | fundamental cycle `cyc(T,e)` and fundamental cut `cut(T,e)` of a spanning tree, and their uniqueness | **probably yes** — spanning trees are present; verify the two uniqueness lemmas exist, else author them (each **[A]**, 5 steps) |
| planar duality `T(G*;x,y)=T(G;y,x)` | geometric dual of a plane graph; the edge bijection; `A` is a spanning tree of `G` ⟺ `E∖A` is one of `G*`; `r*(A)=|A|−r(E)+r(E∖A)` | **yes** — plane graphs and Euler's formula are present; Diestel Prop. 4.6.1 and Thm 4.6.3 are in the sibling harvest. The rank-duality identity needs authoring (**[B]**, 10 steps) |
| `A`-flows and the counting lemma | finite abelian group; order of a group; `ℤ_k` | **not in the brief's list** — check the abstract-algebra lane. Only the *definition* of a finite abelian group and its order is needed. **The structure theorem is NOT needed** (that is the whole point of Tutte's theorem) |
| flow polynomial | counting lemma + inclusion–exclusion | **yes**, given the above |
| orientation-independence of the flow count | group inverses | **yes** |
| flow–colouring duality, algebraic route | the two specialisations + planar duality | **yes** |
| flow–colouring duality, bijective route | plane duality, faces bounded by cycles, colour gradients in `ℤ_n` | **yes** |
| `k`-flow ⟺ `ℤ_k`-flow | augmenting paths (Beck–Sanyal Ex. 1.14) — the library **has** Ford–Fulkerson, so augmenting paths are available | **yes**; also already in Diestel 6.3.3 |
| Matrix–Tree `T(1,1)=det Q[u]` | Laplacian; cofactor expansion; deletion–contraction (Goodall's route) | **yes**. Ellis-Monaghan–Merino's Cauchy–Binet route is **NOT** available — Cauchy–Binet is not listed |
| Read–Rosenstiehl `T(−1,−1)` and bicycles | the bicycle space `C ∩ C^⊥` over `𝔽₂`; a trichotomy theorem | **partly** — vector spaces and rank are present, but the cycle/cut spaces over `𝔽₂` and their orthogonality must exist. Diestel Thm 1.9.4 (in the sibling harvest) supplies exactly `C = B^⊥`, `B = C^⊥`. Still **[C]** for this wave |
| flow reciprocity (totally cyclic orientations) | inside-out polytopes / zonotopes | **NO** — polyhedral geometry. **Defer** |
| Greene–Zaslavsky source-and-sink (`t_{1,0}`) | hyperplane arrangements per the source | **NO**. Defer |
| `T(G;2,1)` = #score vectors (Stanley 1980) | no elementary proof obtained | **defer** |
| #P-hardness results | complexity theory | **NO**. Out of scope |
| Greene's weight-enumerator theorem, `ℤ₃`-tension-flows, Potts/random-cluster, medial/Martin, sandpiles, shelling polynomial | coding theory, statistical mechanics, knot theory, simplicial topology | **NO**. Out of scope |

**Single largest prerequisite risk:** whether `G/e` (edge contraction, producing loops and
parallel edges) exists as a published library operation with the properties `G/e∖f=G∖f/e`
and "contracting a loop = deleting it". Every proof in this harvest uses it. If it is
absent, it is the first item to scaffold.

**Second risk:** whether finite abelian groups are published. If not, the flow pair should
either import them from the abstract-algebra lane or be scoped to `ℤ_k` only — which is
enough for everything except the "depends only on `|A|`" statement, and that statement is
the interesting one, so importing is preferable.

---

## F. Blockers

**F.1 Whitney's original papers — not obtained.**
- H. Whitney, *The coloring of graphs*, Ann. of Math. 33 (1932) 688–718 — JSTOR-gated; not
  attempted beyond a search, since JSTOR requires authentication.
- H. Whitney, *A logical expansion in mathematics*, Bull. Amer. Math. Soc. 38 (1932)
  572–579 — tried `https://www.ams.org/journals/bull/1932-38-08/S0002-9904-1932-05460-X/S0002-9904-1932-05460-X.pdf`;
  AMS returns an HTML landing page saved with a `.pdf` extension (`file -b` reports "HTML
  document text"), the same failure mode the brief warns about. **Untried route:** the AMS
  "free access" mirror at `ams.org/bull/1932-38-08/` with a `Referer` header for
  `www.ams.org`; also EuDML/Zentralblatt scans.
- **Severity: low.** Both statements are given verbatim by four independent secondary
  sources that agree (Blass–Sagan, Dohmen, Read, Goodall), and Goodall and Dohmen both give
  complete proofs. The library can cite Whitney by attribution and cite a proof source
  separately, which is the honest arrangement anyway.

**F.2 Bollobás, *Modern Graph Theory*, ch. X — TOC only.** The 4-page front matter at
`/tmp/bollobas_mgt.pdf` gives the complete Contents (reproduced verbatim at B.11) but no
body text. **Untried routes:** archive.org lending copy; the Springer GTM 184 chapter PDFs
(publisher domains were the least reliable in this run). **Severity: low** — Goodall §3 and
Ellis-Monaghan–Merino together cover X.1, X.2, X.4, X.5 completely. The only thing lost is
Bollobás X.5's constructive (Crapo-style) proof of the spanning-tree expansion, which
Goodall points at but does not reproduce, and Prop. 3.15 (`t_{i,0}>0`, `t_{0,j}>0`), which
Goodall defers to Bollobás X.5. **Prop. 3.15 is therefore unproved in anything I obtained**
— it must be marked `deferred` and not asserted.

**F.3 Godsil & Royle ch. 15 — TOC only.** Springer redirects to `idp.springer.com` for
authentication. The ETSU course page gave the chapter and section titles (B.12).
**Severity: negligible** for content; the TOC alone supplies the convention datum in D.2.

**F.4 Ellis-Monaghan & Moffatt, *The Tutte polynomial for graphs* (handbook chapter),
`personal.rhul.ac.uk/uxah/001/papers/tuttechap.pdf` — server unreachable.** Both `http`
and `https` fail with `curl: (28) Failed to connect … port 80 after 75014 ms`. This is a
host outage, not hotlink protection. **Untried routes:** the CRC *Handbook on the Tutte
Polynomial and Related Topics* (2022) via a library proxy; `pure.royalholloway.ac.uk`
institutional repository; Moffatt's own page. **Severity: low** — it would have been a
fourth Tutte treatment; three were obtained in full.

**F.5 Welsh, *Complexity: Knots, Colourings and Counting* (LMS LNS 186) — not attempted
beyond identifying it.** Cambridge Core was ruled out by the brief's practical note.
**Severity: negligible** — its content on the Tutte polynomial is subsumed by
Ellis-Monaghan–Merino, which cites it.

**F.6 Brylawski & Oxley, "The Tutte polynomial and its applications" (in *Matroid
Applications*, CUP 1992) — not obtained.** This is the reference both Ellis-Monaghan–Merino
and Goodall point to for the detailed proofs of the recipe theorem and the unique-extension
theorem. **Severity: medium-low** — Goodall Thm 3.6 gives a complete proof of the recipe
theorem, and Ellis-Monaghan–Merino state the unique-extension theorem precisely but *do
not prove it* ("These results can be proved by induction on the number of ordinary edges
… See, for example, Brylawski"). So **the unique-extension half of the universality
theorem has a statement but no obtained proof.** Goodall's Thm 3.6 does prove uniqueness of
`f` (by induction on edges) and then verifies the formula, which together amount to the
same thing in his 5-parameter setting — so the gap is closable by adopting **Goodall's**
formulation rather than Ellis-Monaghan–Merino's. Record this in the batch notes.

**F.7 Flow reciprocity has no elementary proof in hand.** See C.5.6. Beck–Sanyal Thm 1.2.5
is proved only in their §7.6 (inside-out polytopes); Ellis-Monaghan–Merino's
`T(G;0,2)` = #totally cyclic orientations is cited to Greene–Zaslavsky without proof. This
is the one genuinely missing piece of mathematics in the assignment. **Untried route:**
Las Vergnas, *The Tutte polynomial of a morphism of matroids* / Gioan–Las Vergnas activity
papers, which are said to give combinatorial proofs. **Recommendation: defer, and say
explicitly in the coverage row that the reason is the absence of an in-reach proof, not
lack of interest.**

**F.8 `arxiv.org/pdf/…` and `arxiv.org/e-print/…` returned HTML** for both the PDF and the
source of `math/0503607` under a browser user-agent. `export.arxiv.org/pdf/…` worked
immediately. **Practical note for the next harvest in this run: use `export.arxiv.org`,
not `arxiv.org`, for arXiv PDFs.**

**F.9 `pypdf` text extraction of the Goodall notes drops the `fi`/`fl` ligatures as
control characters** (`fi` → `\x0c`, and the file registers as `data` rather than text, so
plain `grep` silently matches nothing). `grep -a` plus `tr '\014'` → `fi` fixes it. Anyone
re-reading `/tmp/tut2/goodall.txt` who greps for "Definition" and gets zero hits has hit
this, not a missing source.

---

## Appendix: recommended page split

Sizes are item-count estimates against the 60-item A-page ceiling (`validate-plan.mjs`
error code `size`).

| pair | A page | est. items | notes |
|---|---|---|---|
| 1 | **The chromatic polynomial** — colour-partitions, falling-factorial definition, proper-colouring interpretation, deletion–contraction, loops/parallel edges, `K_n`/trees/cycles/chordal/wheels, clique-separator and block factorisations, degree/leading/constant/`−|E|` coefficients, sign alternation, `z^{c(G)} ∣ P`, Whitney rank expansion, bond-lattice Möbius expression, rational roots | 35–45 | Goodall §1.1–1.3 + Beck–Sanyal §1.1 + Bondy–Murty §8.4 + EC1 Ex. 3.108 |
| 2 | **Broken circuits and the coefficients of the chromatic polynomial** — broken circuit, NBC set, Whitney's broken-circuit theorem (Route A, with Route C as a second proof), order-independence of the counts, girth corollary, `c_2 = C(m,2)−t`, tree basis, partial unimodality | 20–28 | keep separate from pair 1; combining them lands near 65 items |
| 3 | **Acyclic orientations and Stanley's reciprocity theorem** — orientations, acyclic, compatible/strictly compatible pairs, `χ̄`, the `+` deletion–contraction, Stanley reciprocity, `#`acyclic orientations `= (−1)^{|V|}P(G;−1)`, `K_d` gives `d!`, the NBC ↔ acyclic-orientation corollary, Greene–Zaslavsky unique source | 20–28 | Stanley 1973 + Beck–Sanyal Thm 1.1.5/Ex. 1.9 + Blass–Sagan |
| 4 | **The Tutte polynomial** — rank and nullity, rank–nullity definition, the three rank identities, deletion–contraction as a theorem, terminal forms, multiplicativity over components and blocks, coefficient facts, the recipe/universality theorem (Goodall's 5-parameter form) and unique extension, `T(1,1)/(2,1)/(1,2)/(2,2)`, the `(x−1)(y−1)=1` hyperbola, planar duality, chromatic specialisation, monochrome/bad-colouring specialisation, reliability polynomial, Matrix–Tree via deletion–contraction, beta invariant | 45–55 | tight against the ceiling; if it overruns, move the beta invariant and Matrix–Tree to pair 6 |
| 5 | **Nowhere-zero flows and the flow polynomial** — `A`-flows, nowhere zero, orientation-independence, the spanning-tree counting lemma, `#A`-flows `= |A|^{n(F)}`, the flow polynomial by inclusion–exclusion, dependence on `|A|` only, deletion–contraction, bridge ⟹ 0, monic of degree `n(G)`, the Tutte specialisation `F(G;k)=(−1)^{n(G)}T(G;0,1−k)`, flow–colouring duality (both routes), Petersen has no 4-flow | 30–40 | reconcile against Diestel ch. 6 in the sibling harvest before scaffolding so nothing is authored twice |
| 6 | **The spanning-tree expansion of the Tutte polynomial** — fundamental cycle and cut, internal/external activity, Tutte's theorem, order-independence of `t_{ij}`, non-negativity of the coefficients, `deg_x = r(G)`, `deg_y = n(G)`, `t_{1,0}=t_{0,1}`, the planar activity-swapping bijection `t_{ij}(G)=t_{ji}(G*)`, series-parallel characterisation of `t_{1,0}=1` | 18–25 | can be folded into pair 4 only if pair 4 is trimmed below ~40 |

Dependency order: **1 → 2, 1 → 3, 1 → 4, 4 → 5, 4 → 6.** Pairs 2 and 3 are independent of
each other except that the NBC ↔ acyclic-orientation corollary in pair 3 cites pair 2.
