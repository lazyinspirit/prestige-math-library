# subjects-01 · combinatorics lane — GAP-FILL source harvest

Closes the four topics that `research/subjects-01-combinatorics-harvest-graphtheory.md`
promised in a "§C.13" it never wrote:

| gap | topic | status |
|---|---|---|
| 1 | edge colouring beyond Vizing's simple-graph theorem | see §A.1/§B.1/§C.1 |
| 2 | matching beyond Tutte's 1-factor theorem | **closed** |
| 3 | infinite graphs — the Rado graph | **closed** |
| 4 | de Bruijn–Erdős and the exact choice principle | **closed, with a sourced equivalence** |

Everything below is quoted from sources actually opened and read in this session; page
locators are PDF-page or printed-page as marked. Wikipedia and encyclopedia entries were
used nowhere as primary backing.

---

## A. Source ledger

### A.2 Gap 2 — matching theory

**A.2.1 Alexander Schrijver, _A Course in Combinatorial Optimization_, 221 pp, dated
23 March 2017.**
`https://homepages.cwi.nl/~lex/files/dict.pdf` — **full text, re-downloaded and verified
in this session.** Range read: front-matter Contents (pp. 1–4 of the PDF) in full, and
**Chapter 5, "Nonbipartite matching", §§5.1–5.5** (printed pp. 78–96).

**A.2.2 Alexander Schrijver, _Advanced Graph Theory and Combinatorial Optimization_,
Part I: "Matchings and coverings"**, 12 pp.
`https://homepages.cwi.nl/~lex/files/agt1.pdf` — **full text, all 12 pages read.**
This is the single most valuable Gap-2 source: it carries a **complete, self-contained
proof of the Tutte–Berge formula in one page**, derives Tutte's 1-factor theorem as a
corollary, and gives Edmonds' blossom algorithm with a **full correctness proof** in
2½ pages. Range read: §§1–6 plus the reference list, i.e. all of it.

**A.2.3 J. A. Bondy and U. S. R. Murty, _Graph Theory_, GTM 244, Springer 2008.**
Full-text mirror (see §F.2 for the citation caveat):
`https://raw.githubusercontent.com/chanqi4444/GTM/master/GTM244.Graph.Theory,.Bondy,.J.A.,.Murty,.U.S.R.,.(2007,.ISBN.978-1-84628-969-9).1846289696.pdf`
Reader-facing URL for `sources.references`:
`https://link.springer.com/book/10.1007/978-1-84628-970-5`
Range read: **Chapter 16 "Matchings" in full** — §16.1 Maximum Matchings (pp. 413–418),
§16.2 Matchings in Bipartite Graphs (pp. 419–425), §16.3 Matchings in Arbitrary Graphs
(pp. 426–429), §16.4 Perfect Matchings and Factors (pp. 430–436), §16.5 Matching
Algorithms (pp. 437–448), §16.6 Related Reading (p. 449), including the chapter's own
contents page and all exercise numbering.

**A.2.4 Douglas B. West, "A short proof of the Berge–Tutte Formula and the
Gallai–Edmonds Structure Theorem", _European J. Combin._ **32** (2011), 674–676.**
Author-deposited full text, 5 pp:
`http://www.isid.ac.in/~dmishra/mpdoc/galledm.pdf` — **full text, all 5 pages read.**
Publisher record: `https://doi.org/10.1016/j.ejc.2011.01.010`.
**This is the decisive Gap-2 source.** It proves the Tutte–Berge (there "Berge–Tutte")
formula AND the full Gallai–Edmonds structure theorem in D/A/C form **from Hall's
theorem alone**, in three lemmas and two theorems.

**A.2.5 Chandra Chekuri, CS 598CSC "Combinatorial Optimization", Lecture 8
(11 February 2010), "Edmonds-Gallai Decomposition and Factor-Critical Graphs",
University of Illinois**, 6 pp.
`https://courses.grainger.illinois.edu/cs598csc/sp2010/Lectures/Lecture8.pdf`
— **full text, all 6 pages read.** Independent second treatment of the D(G)/A(G)/C(G)
form, with a proof routed through Edmonds' algorithm rather than through Hall.
Self-declares its basis as Cook–Cunningham–Pulleyblank–Schrijver and Schrijver's
_Combinatorial Optimization_ ch. 24.

**A.2.6 Nicole Immorlica, combinatorial optimization Lecture 3, "Edmonds-Gallai
Decomposition"**, 4 pp. `https://immorlica.com/combOpt/lec3.pdf` — obtained, skimmed;
consistent with A.2.5, not separately relied on.

**A.2.7 L. Lovász and M. D. Plummer, _Matching Theory_, Ann. Discrete Math. 29,
North-Holland 1986; AMS Chelsea 367 reprint 2009. — PARTIAL, chapter level only.**
See **§F.1**. The canonical monograph, and the reference West's paper measures itself
against ("shorter than earlier inductive proofs (see Theorem 3.2.1 of [8])"), but its
section-level contents could not be reached. **It must not be counted as one of a
pair's two independent treatments** under the source-depth rule. AMS product page:
`https://bookstore.ams.org/chel-367-h/`.

### A.3 Gap 3 — the Rado graph

**A.3.1 Peter J. Cameron, "The Random Graph", arXiv:1301.7544v1 [math.CO],
31 January 2013, 27 pp.**
`https://arxiv.org/abs/1301.7544` · PDF `https://arxiv.org/pdf/1301.7544`
— **full text, all 27 pages downloaded and read.** This is the author's own posting of
the survey chapter that appeared as "The Random Graph" in R. L. Graham and J. Nešetřil
(eds.), _The Mathematics of Paul Erdős II_, Springer (1st ed. 1997, pp. 331–351; 2nd ed.
2013, pp. 353–378). **Open access, author-hosted, and it is the canonical treatment.**
Range read: §§1.1–1.10 (all), with §§1.1–1.5 and §1.7 read line by line.
Springer record for the published version:
`https://link.springer.com/chapter/10.1007/978-3-642-60406-5_32`.

**A.3.2 Reinhard Diestel, _Graph Theory_, 5th ed., GTM 173, Springer 2017 —
§8.3 "Homogeneous and universal graphs".**
`https://diestel-graph-theory.com/basic.html` (free 5th-edition chapter PDFs)
— **full text of chapter 8 already obtained in this run; §8.3 re-read line by line
here** (printed pp. 246–249). This is the independent second treatment for the pair.

**A.3.3 Peter J. Cameron, "The random graph revisited" (slides), 8 pp.**
`https://webspace.maths.qmul.ac.uk/p.j.cameron/slides/rgr.pdf` — obtained (PDF verified),
used only as a cross-check on naming.

### A.4 Gap 4 — de Bruijn–Erdős and the choice principle

**A.4.1 Danny Rorabaugh, Claude Tardif and David Wehlau, "Logical compactness and
constraint satisfaction problems", _Logical Methods in Computer Science_ **13**(1:1)
(2017), 1–11.** Open access, CC BY-ND.
`https://lmcs.episciences.org/` · DOI `10.23638/LMCS-13(1:1)2017` · arXiv:1609.05221.
PDF `https://arxiv.org/pdf/1609.05221` — **full text, all 11 pages read.**
**This is the decisive Gap-4 source.** Range read: §1 Introduction, §2 (Props 2.1–2.3),
§3 Structures of width one, **§4 Compactness results equivalent to the ultrafilter
axiom (Lemma 4.1, Corollary 4.2, Prop 4.3)**, §5 Axioms of set theory, §6 (Props
6.1–6.4), §7 Conclusion, References.

**A.4.2 Amitayu Banerjee, "Maximal independent sets, variants of chain/antichain
principle and cofinal subsets without AC", arXiv:2009.05368v2 [math.LO],
12 February 2021, 16 pp.** `https://arxiv.org/abs/2009.05368` — **full text obtained;
§1 and §2 (Definition 2.4, items (18)–(21)) read.** Used for the **Howard–Rubin form
number** of the de Bruijn–Erdős theorem.

**A.4.3 William Gasarch and Jeffry L. Hirst, "Reverse mathematics and recursive graph
theory", _Math. Logic Quarterly_ **44** (1998), 465–473; author copy dated 30 October
1994, 6 pp.** `https://www.cs.umd.edu/~gasarch/papers/rr.pdf` (also arXiv:math/9404206)
— **full text, all 6 pages obtained; §1 "Graph Colorings" read line by line.**
Gives the **countable** case's exact logical strength.

**A.4.4 Ahmet Tachtsis / Amitayu Banerjee, "On Erdős–Dushnik–Miller theorem without
AC", arXiv:2211.05665, 16 pp.** `https://arxiv.org/pdf/2211.05665` — obtained,
abstract and §1.2 read; corroborates that the de Bruijn–Erdős theorem for
*n*-colourings is a standard node in the ZF choice hierarchy.

**A.4.5 H. Läuchli, "Coloring infinite graphs and the Boolean prime ideal theorem",
_Israel J. Math._ **9** (1971), 422–429.** DOI `10.1007/BF02771458`.
**Form obtained: bibliographic record + publisher abstract only** — the article itself
is paywalled (see §F.3). **This does not matter**, because A.4.1 §4 reproves Läuchli's
theorem in full and openly, and attributes it correctly.

**A.4.6 J. Mycielski, "Some remarks and problems on the colouring of infinite graphs
and the theorem of Kuratowski", _Acta Math. Acad. Sci. Hungar._ **12** (1961), 125–129.**
**Form obtained: bibliographic record only**, via A.4.1's reference [8] and its
statement on p. 9. Not needed directly; A.4.1 states the result it is cited for.

---

## B. Verbatim headings harvest

### B.2 Gap 2

**B.2.1 Schrijver, _A Course in Combinatorial Optimization_ — verbatim Contents,
chapter 5 (the range read), and the surrounding chapters for context:**

```
3. Matchings and covers in bipartite graphs 39
3.1. Matchings, covers, and Gallai's theorem 39
3.2. M-augmenting paths 40
3.3. Konig's theorems 41
3.4. Cardinality bipartite matching algorithm 45
3.5. Weighted bipartite matching 47
3.6. The matching polytope 50
5. Nonbipartite matching 78
5.1. Tutte's 1-factor theorem and the Tutte-Berge formula 78
5.2. Cardinality matching algorithm 81
5.3. Weighted matching algorithm 85
5.4. The matching polytope 91
5.5. The Cunningham-Marsh formula 94
7. Cliques, stable sets, and colourings 111
7.1. Introduction 111
7.2. Edge-colourings of bipartite graphs 115
7.3. Partially ordered sets 121
7.4. Perfect graphs 125
7.5. Chordal graphs 128
```

**B.2.2 Schrijver, _Advanced Graph Theory and Combinatorial Optimization_, Part I —
verbatim section headings and named results, all of them:**

```
I. Matchings and coverings
1. Matchings, covers, and Gallai's theorem
   Theorem 1 (Gallai's theorem).
2. M-augmenting paths
   Theorem 2.                              [Berge's theorem, unnamed here]
3. Bipartite matching: Konig's theorems
   Theorem 3 (Konig's matching theorem).
4. Cardinality bipartite matching algorithm
   Theorem 4.
5. Nonbipartite matching: Tutte's 1-factor theorem and the Tutte-Berge formula
   Theorem 5 (Tutte-Berge formula).
   Corollary 5a (Tutte's 1-factor theorem).
   Corollary 5b.                           [rho(G) = max_U (|U| + o(U))/2]
6. Cardinality matching algorithm
   Theorem 6.                              [blossom shrinking preserves maximality]
   Theorem 7.                              [shortest even alternating W-v walk structure]
   Theorem 8.                              [O(|V|^2|E|) maximum matching]
References
```

**B.2.3 Bondy & Murty, _Graph Theory_ GTM 244 — chapter 16's own contents page,
verbatim, with its printed page numbers:**

```
16 Matchings
Contents
16.1 Maximum Matchings ............................. 413
     Augmenting Paths ................................... 415
     Berge's Theorem .................................... 415
16.2 Matchings in Bipartite Graphs .................... 419
     Hall's Theorem ...................................... 419
     Matchings and Coverings ............................ 420
16.3 Matchings in Arbitrary Graphs .................... 426
     Barriers ............................................. 426
     The Tutte-Berge Theorem .......................... 427
16.4 Perfect Matchings and Factors .................... 430
     Tutte's Theorem .................................... 430
     Factors ............................................. 431
     T-Joins .............................................. 432
16.5 Matching Algorithms ............................. 437
     Augmenting Path Search ............................ 437
     Egervary's Algorithm ............................... 440
     Blossoms ............................................ 442
     Flowers ............................................. 444
     Edmonds' Algorithm ................................. 446
16.6 Related Reading. ................................. 449
     Stable Sets in Claw-Free Graphs .................... 449
     Transversal Matroids ............................... 449
     Rado's Theorem ..................................... 449
     Pfaffians ............................................ 449
```

**B.2.4 Bondy & Murty ch. 16 — verbatim named-result headings, in order:**

- **Problem 16.1 The Maximum Matching Problem**
- **Problem 16.2 The Assignment Problem**
- **Theorem 16.3 Berge's theorem** — "A matching *M* in a graph *G* is a maximum
  matching if and only if *G* contains no *M*-augmenting path."
- **Theorem 16.4 Hall's Theorem**
- **Corollary 16.5** — bipartite perfect-matching criterion
- **Corollary 16.6** — "Every nonempty regular bipartite graph has a perfect matching."
- **Proposition 16.7** — |M| = |K| ⟹ M maximum, K minimum
- **Lemma 16.8** — "The empty set is a barrier of every hypomatchable graph."
- **Lemma 16.9** — v essential, B a barrier of G−v ⟹ B ∪ {v} a barrier of G
- **Lemma 16.10** — "Let *G* be a connected graph no vertex of which is essential.
  Then *G* is hypomatchable."
- **Theorem 16.11 The Tutte–Berge Theorem** — "Every graph has a barrier."
- **Corollary 16.12 The Tutte–Berge Formula**
- **Theorem 16.13 Tutte's Theorem**
- **Theorem 16.14 Petersen's Theorem** — "Every 3-regular graph without cut edges has
  a perfect matching."
- **Problem 16.15 The Weighted T-Join Problem**
- **Problem 16.16 The Minimum-Weight Matching Problem**
- **Algorithm 16.18 Augmenting Path Search: APS(G, M, u)**
- **Theorem 16.21** — "The matching M\* returned by Egerváry's Algorithm is a maximum
  matching."
- Sub-headings **Blossoms**, **Flowers**, **Edmonds' Algorithm**
- Named exercises used below: **⋆16.1.15 Essential Vertex**, **⋆16.2.8 The König–Ore
  Formula**, **16.2.18 The Birkhoff–von Neumann Theorem**, **16.3.9**, **16.4.8**,
  **⋆16.4.16** ("a) every *k*-regular bipartite graph is 1-factorable, (D. König)
  b) every 2*k*-regular graph is 2-factorable. (J. Petersen)")

**B.2.5 West, "A short proof of the Berge–Tutte Formula and the Gallai–Edmonds
Structure Theorem" — every named result, verbatim, all of them:**

```
Lemma 1 (Parity Lemma)   If G is an n-vertex graph and S subset V(G), then
                         o(G-S)-|S| = n mod 2. In particular, if S is a Tutte set
                         and n is even, then o(G-S) >= |S|+2.
Lemma 2                  Let T be a maximal set among the vertex sets of maximum
                         deficiency in a graph G. If u is a vertex of an odd
                         component C of G-T, then the graph C-u satisfies Tutte's
                         Condition. Also, all components of G-T are odd.
Lemma 3                  If T is a maximal set of maximum deficiency in a graph G,
                         then H(T) contains a matching that covers T.
Theorem 4 (Berge-Tutte Formula; Berge [2]).  If G is an n-vertex graph, then the
                         maximum size of a matching in G is (1/2)(n - def(G)).
Theorem 5 (Gallai-Edmonds Structure Theorem)  [full text quoted in C.2.3 below]
```

**B.2.6 Chekuri, CS 598CSC Lecture 8 — verbatim section and named-result headings:**

```
1 Edmonds-Gallai Decomposition and Factor-Critical Graphs
  Theorem 1 (Tutte-Berge)
  Definition 2                [factor-critical]
  Theorem 3                   [G factor-critical iff every node missed by some max matching]
  Proposition 4               [odd cycle C, G/C factor-critical => G factor-critical]
1.1 Edmonds-Gallai Decomposition
  Theorem 5 (Edmonds-Gallai)
  Corollary 6
  Lemma 7                     [Even/Odd/Free = D(G)/A(G)/C(G)]
  Lemma 8
  Corollary 9
  Lemma 10
  Proposition 11
```

### B.3 Gap 3

**B.3.1 Cameron, "The Random Graph" (arXiv:1301.7544) — verbatim section headings,
all of them:**

```
1.1  Introduction
1.2  Some constructions
1.3  Indestructibility
1.4  Graph-theoretic properties
1.5  Homogeneity and categoricity
1.6  First-order theory of random graphs
1.7  Measure and category
1.8  The automorphism group
       1.8.1 General properties
1.9  Topological aspects
1.10 Some other structures
```

**B.3.2 Cameron — verbatim named-result headings over §§1.1–1.10 (the whole paper):**

- **Theorem 1.** [Erdős–Rényi 1963] "There exists a graph *R* with the following
  property. If a countable graph is chosen at random, by selecting edges independently
  with probability ½ from the set of 2-element subsets of the vertex set, then almost
  surely (i.e., with probability 1), the resulting graph is isomorphic to *R*."
- **Fact 1.** "With probability 1, a countable random graph satisfies (∗)."
- **Fact 2.** "Any two countable graphs satisfying (∗) are isomorphic."
- **Remark 1.** [Shelah–Spencer, Hrushovski]
- **Theorem 2.** countable model of set theory ⟹ its ∈-graph ≅ *R*
- **Proposition 1.** the correctly-joined set *Z* is infinite and induces a copy of *R*
- **Proposition 2.** indestructibility under (a) finite vertex deletion, (b) finite
  edge complementation, (c) finite switching
- **Proposition 3.** the pigeonhole / indivisibility property
- **Proposition 4.** the partition property characterises *R*, K^{ℵ₀}, and its complement
- **Proposition 5.** "*R* is isomorphic to its complement."
- **Proposition 6.** universality for induced subgraphs
- **Proposition 7.** spanning-subgraph characterisation
- **Proposition 8.** edge-partition into prescribed locally finite spanning subgraphs
- **Proposition 9.** "*R* is homogeneous."
- **Theorem 3.** [Fraïssé] age / amalgamation property / Fraïssé limit, (a) and (b)
- **Proposition 10.** strong amalgamation ⟺ M∖A ≅ M ⟺ infinite G_A-orbits
- **Proposition 11.** "*R* is ℵ₀-categorical."
- **Theorem 4.** [Engeler; Ryll-Nardzewski; Svenonius]
- **Remark 2.** on *n*-types
- **Theorem 5.** ℵ₀-categorical or homogeneous ⟹ universal
- **Theorem 6.** zero-one law for first-order sentences
- **Corollary 1.** the zero-one law's dichotomy
- **Theorem 7.** [Baire category theorem] "In a complete metric space, any residual set
  is non-empty."
- **Fact 3.** "Almost all countable graphs (in the sense of either measure or Baire
  category) have property (∗)."
- **Proposition 12.** ubiquity of a countable homogeneous relational structure
- **Proposition 13.** |Aut(R)| = 2^{ℵ₀} · **Theorem 8.** Aut(R) is simple ·
  **Theorem 9.** strong small index property · **Corollary 2.** · **Proposition 14.** ·
  **Theorem 10.** residual conjugacy class · **Proposition 15.** · **Proposition 16.** ·
  **Proposition 17.** · **Theorem 11.** the five reducts of *R* · **Remark 3.** ·
  **Theorem 12.** · **Proposition 18.** · **Theorem 13.** · **Proposition 19.** ·
  **Theorem 14.** [Lachlan–Woodrow] · **Theorem 15.** · **Theorem 16.** [Ramsey classes]
  · **Theorem 17.**

**B.3.3 Diestel 5th ed. §8.3 "Homogeneous and universal graphs" — verbatim named
results over the range read (printed pp. 246–249):**

- **Theorem 8.3.1. (Erdős & Rényi 1963)** "There exists a unique countable graph *R*
  with property (∗)."
- **Proposition 8.3.2.** "The Rado graph is the unique countable graph *G* other than
  K^{ℵ₀} and its complement such that, no matter how V(G) is partitioned into two parts,
  one of the parts induces an isomorphic copy of *G*."
- **Theorem 8.3.3. (Lachlan & Woodrow 1980)** "Every countably infinite homogeneous
  graph is one of the following: • a disjoint union of complete graphs of the same
  order, or the complement of such a graph; • the graph R^r or its complement, for some
  r ≥ 3; • the Rado graph *R*."
- **Theorem 8.3.4. (Diestel & Kühn 1999)** "There exists a universal planar graph for
  the minor relation."
- Exercises named in the text: **Exercise 54** (indestructibility), **Exercise 56**
  (homogeneity).

### B.4 Gap 4

**B.4.1 Rorabaugh–Tardif–Wehlau, LMCS 13(1:1) 2017 — verbatim section and named-result
headings, all of them:**

```
1. Introduction
2. [Compactness via filtered powers]
   Proposition 2.1.
   Proposition 2.2.
   Proposition 2.3.
3. Structures of width one
   Proposition 3.1.
   Problem 3.2.
4. Compactness results equivalent to the ultrafilter axiom
   Lemma 4.1.
   Corollary 4.2 (Lauchli [5]).
   Proposition 4.3.
   Problem 4.4.
5. Axioms of set theory
   Order extension principle. / Ordering principle. / Axiom of choice for finite sets.
   Choice(n): / Proposition 5.1 (Gauntt [2]). / Kinna-Wagner Principle. / KW(n):
6. [Cardinal-specific compactness]
   Proposition 6.1. / Proposition 6.2. / Proposition 6.3. / Proposition 6.4.
7. Conclusion
References
```

**B.4.2 Gasarch & Hirst, "Reverse mathematics and recursive graph theory" — verbatim
named-result headings over §1 "Graph Colorings" (the range read):**

```
1. Graph Colorings.
   Definition 1 (RCA_0). A graph G is locally k-chromatic if every finite subgraph
       of G is k-chromatic.
   Theorem 2 (RCA_0). For every k >= 2, the following are equivalent:
       (1) WKL_0.
       (2) If G is locally k-chromatic, then G is k-chromatic.
   Theorem 3 (RCA_0). For each k >= 2, the following are equivalent:
       (1) WKL_0.
       (2) If G is locally k-chromatic, then G is (2k-1)-chromatic.
```

**B.4.3 Banerjee, arXiv:2009.05368 — verbatim, Definition 2.4 item (18):**

> **(18) The Boolean Prime Ideal Theorem, BPI (Form 14 in [HR98]):** Every Boolean
> algebra has a prime ideal. We recall the following equivalent formulation of BPI.
> • **The *n*-coloring theorem for n ≥ 3, (Form 14 G(n) (n ∈ ω, n ≥ 3) in [HR98]):**
> For every graph G = (V_G, E_G) if every finite subgraph of *G* is *n*-colorable then
> *G* is *n*-colorable. **This is De Bruijn–Erdős theorem for n ≥ 3 colorings.**

`[HR98]` = P. Howard and J. E. Rubin, _Consequences of the Axiom of Choice_, Math.
Surveys and Monographs **59**, AMS, Providence RI, 1998.

---

## C. Mathematical detail

Difficulty tags: **[A]** ≤ 12 numbered steps · **[B]** 12–30 steps · **[C]** out of
reach for a single library item.

### C.2 Gap 2 — matching theory beyond Tutte

#### C.2.1 The Tutte–Berge formula — **[A], and it is the best-value item in this file**

**Exact statement (Schrijver, AGT I, Theorem 5, verbatim):**
> **Theorem 5 (Tutte-Berge formula).** For each graph G = (V,E),
> ν(G) = min_{U ⊆ V} ½(|V| + |U| − o(G − U)).

with, verbatim from the same page: "Call a component of a graph **odd** if it has an odd
number of vertices. For any graph *G*, define o(G) := number of odd components of *G*."

**Note the two normal forms.** The brief's form
ν(G) = ½(|V| − max_S (o(G−S) − |S|)) is *identical* — max_S(o(G−S)−|S|) = def(G), and
½(|V| − def(G)) = min_U ½(|V| + |U| − o(G−U)). Record both; do not treat them as
different theorems. West writes the second, Schrijver and Chekuri the first.

**Proof route (Schrijver's, decomposed).** Uses only: Berge's augmenting-path theorem,
which the library already publishes.

1. (≤) For each U ⊆ V: ν(G) ≤ |U| + ν(G−U) ≤ |U| + ½(|V∖U| − o(G−U))
   = ½(|V| + |U| − o(G−U)).
2. (≥) Induction on |V|; V = ∅ trivial.
3. **Case A — some vertex *v* is covered by every maximum matching.** Then
   ν(G−v) = ν(G)−1. Apply induction to G−v, obtaining U′ ⊆ V∖{v} with
   ν(G−v) = ½(|V∖{v}| + |U′| − o(G−v−U′)).
4. Put U := U′ ∪ {v}; the arithmetic gives equality in (1) for that U.
5. **Case B — every vertex is missed by some maximum matching.** Claim (22): there is a
   matching containing at least ⌊½|K|⌋ edges in every component *K* of *G*; this yields
   ν(G) ≥ ½(|V| − o(G)), i.e. U = ∅ attains the minimum.
6. Suppose not: for each maximum *M* some component contains two *M*-missed vertices
   u, v. Choose M, u, v minimising dist(u,v).
7. dist(u,v) = 1 is impossible (augment along uv), so pick an intermediate vertex *t* on
   a shortest u–v path. By assumption some maximum *N* misses *t*; by minimality *N*
   covers u and v, and *M* covers *t*.
8. Let P_u, P_t, P_v be the components of (V, M ∪ N) containing u, t, v. Each is a path
   with equally many M- and N-edges (else it augments one of them), so P_u ≠ P_v; wlog
   P_u ≠ P_t.
9. Then N △ E(P_u) is a maximum matching missing both *u* and *t*, and
   dist(u,t) < dist(u,v) — contradiction.

**Length: 9–11 numbered steps. [A].** Schrijver notes the proof is Lovász's, from his
proof of Edmonds' matching polytope theorem. **Dependencies: Berge's theorem only.**
The library has Berge. This is the cheapest substantial addition on this page.

**Tutte's 1-factor theorem falls out in 2 steps** (Schrijver, **Corollary 5a**): *G* has
a perfect matching iff ν(G) ≥ ½|V| iff the min in Theorem 5 is ≥ ½|V| iff
o(G−U) ≤ |U| for all U. Diestel proves Tutte independently at 2.2.1; the library gains
the *formula*, and gets Tutte free.

**Bonus corollary, also [A] and 3 steps** (Schrijver **Corollary 5b**): for *G* without
isolated vertices, ρ(G) = max_{U⊆V} (|U| + o(U))/2, where ρ is the edge-cover number.
Needs Gallai's identity α + τ = |V| = ν + ρ, which the library publishes.

**Independent route (Bondy–Murty).** BM reach the same theorem through **barriers**:
"a set *B* ⊆ V such that o(G − B) − |B| = |U|, where *U* is the set of uncovered
vertices of a maximum matching" — **Theorem 16.11 "Every graph has a barrier"**, with
**Corollary 16.12** the formula. Their route is Lemma 16.8 → Lemma 16.9 → Lemma 16.10
(a connected graph with no essential vertex is hypomatchable) → Exercise 16.3.7. It is
attributed to **Gallai (1964a)** and is about 14 steps, i.e. **[B]** — longer than
Schrijver's, but it produces the *barrier* concept, which is what the Gallai–Edmonds
item then needs. **Scaffolder's call: prove the formula by Schrijver's route
(cheapest), and introduce "barrier" as a definition item for the Gallai–Edmonds page.**

#### C.2.2 Factor-critical / hypomatchable — a definitional prerequisite, **[A], 4 steps**

Two source spellings for one notion. **Bondy–Murty, verbatim:** "Graphs which are very
nearly matchable, in the sense that every vertex-deleted subgraph is matchable, are said
to be **hypomatchable** or **factor-critical**. In particular, trivial graphs are
hypomatchable." **Chekuri, Definition 2, verbatim:** "A graph G = (V,E) is
**factor-critical** if *G* has no perfect matching but for each v ∈ V, G−v has a perfect
matching." **West, verbatim:** "A graph *G* is **factor-critical** if every subgraph
obtained by deleting one vertex has a 1-factor." Diestel matches Chekuri.
**See §D.2 — the definitions differ on K₁ and this matters.**

Cheap companions worth scaffolding:
- **Chekuri Theorem 3** — "A graph *G* is factor-critical if and only if for each node
  *v* there is a maximum matching that misses *v*." **[A], ~5 steps**, and it falls
  straight out of the Tutte–Berge proof's Case B.
- **Chekuri Proposition 4** — "Let *C* be an odd cycle in *G*. If the graph G/C,
  obtained by shrinking *C* into a single vertex, is factor-critical then *G* is
  factor-critical." **[A], ~6 steps.**
- Factor-critical graphs are connected and have odd order (Chekuri, in-text). **[A], 3
  steps.**
- **Bondy–Murty Exercise 16.3.8(a)(ii)** — "*G* is hypomatchable if and only if
  o(G−S) ≤ |S| − 1 for every nonempty proper subset *S* of *V*." **[A].**
- **Bondy–Murty Exercise 16.3.9** — "Let *B* be a maximal barrier of a graph *G*. Show
  that each component of G−B is hypomatchable." **[A].**

#### C.2.3 The full Gallai–Edmonds structure theorem — **[B], and it is writable**

**Exact statement, West's paper, Theorem 5, verbatim in full:**

> In a graph *G*, let *B* be the set of vertices covered by every maximum matching in
> *G*, and let D = V(G) − B. Further partition *B* by letting *A* be the subset
> consisting of vertices with at least one neighbor outside *B*, and let C = B − A. The
> **Gallai–Edmonds Decomposition** of *G* is the partition of V(G) into the three sets
> A, C, D.
>
> **Theorem 5 (Gallai–Edmonds Structure Theorem)** Let A, C, D be the sets in the
> Gallai–Edmonds Decomposition of a graph *G*. Let G₁, …, G_k be the components of G[D].
> If *M* is a maximum matching in *G*, then the following properties hold.
> **a)** *M* covers *C* and matches *A* into distinct components of G[D].
> **b)** Each G_i is factor-critical, and *M* restricts to a near-perfect matching on G_i.
> **c)** If ∅ ≠ S ⊆ A, then N_G(S) has a vertex in at least |S| + 1 of G₁, …, G_k.
> **d)** def(A) = def(G) = k − |A|.

*(The paper prints "in least |S| + 1" in (c); "at least" is meant, and Chekuri's
Lemma 8/Theorem 5 confirm the reading.)*

**Chekuri's equivalent statement, Theorem 5, verbatim** — this is the D(G)/A(G)/C(G)
spelling the brief asked for:

> Given a graph G = (V,E), let
> D(G) := {v ∈ V | there exists a maximum matching that misses *v*}
> A(G) := {v ∈ V | *v* is a neighbor of D(G) but v ∉ D(G)}
> C(G) := V ∖ (D(G) ∪ A(G)).
> Then, the following hold.
> 1. The set U = A(G) is a Tutte-Berge witness set for *G*.
> 2. C(G) is the union of the even components of G − A(G).
> 3. D(G) is the union of the odd components of G − A(G).
> 4. Each component in G − A(G) is factor-critical.

**Note the two definitions of D agree**: West's D = V − B where B = covered by *every*
maximum matching, i.e. D = missed by *some* maximum matching = Chekuri's D(G).
**Chekuri's clause 4 is stronger than West's (b)** — Chekuri asserts every component of
G−A(G) is factor-critical, which with clause 2 forces the components of G[C] to be
single even components that are… — careful: Chekuri's clause 4 as printed says "each
component in G − A(G)", but clauses 2 and 3 already split G−A(G) into C's even
components and D's odd ones, and a factor-critical graph has odd order. **Read clause 4
as applying to the components of G[D(G)]**, which is what his Lemma 10(2) actually
proves and what West's (b) states. **Flagged as a defect in the lecture notes; scaffold
West's (b).** See §F.4.

**Proof route (West's, decomposed) — this is the one to scaffold.** Needs **Hall's
theorem only**, which the library publishes.

Setup. def_G(S) := o(G−S) − |S|; def(G) := max_S def_G(S); a **Tutte set** is a vertex
subset of positive deficiency. For T ⊆ V(G), **H(T)** is the auxiliary bipartite graph
got by contracting each component of G−T to a single vertex and deleting edges inside
*T*; with *Y* the set of components of G−T, H(T) is a T,Y-bigraph with ty ∈ E iff *t*
has a neighbour in the component *y*.

1. **Lemma 1 (Parity).** o(G−S) + |S| ≡ n (mod 2), by counting vertices. Hence a Tutte
   set in an even-order graph has o(G−S) ≥ |S| + 2. *(1 step.)*
2. **Lemma 2.** Let *T* be a **maximal** set of maximum deficiency. For *u* in an odd
   component *C* of G−T and S ⊆ V(C−u):
   def_G(T ∪ u ∪ S) = def_G(T) − 2 + def_{C−u}(S) (three-line computation).
3. Maximality of *T* gives def_G(T ∪ u ∪ S) < def_G(T); parity gives equal parity;
   hence def_{C−u}(S) ≤ 0, so C−u satisfies Tutte's condition.
4. Also every component of G−T is odd — otherwise add a leaf of a spanning tree of an
   even component to *T*, contradicting maximality.
5. **Lemma 3.** For S ⊆ T, all vertices of Y − N_{H(T)}(S) are odd components of
   G−(T−S); the choice of *T* gives (|Y| − |N_H(S)|) − |T−S| ≤ def(T); since
   def(T) = |Y| − |T| this simplifies to |S| ≤ |N_H(S)|. **Hall's condition holds**, so
   H(T) has a matching covering *T*.
6. **Theorem 4 (Tutte–Berge / Berge–Tutte).** ½(n − def(G)) is an upper bound (noted).
   For the lower bound, induct on *n*: take *T* maximal of deficiency def(G); by Lemma 2
   each C−u has a perfect matching (induction); G−T has |T| + def(G) odd components; by
   Lemma 3 cover *T* by edges into distinct components. Done.
7. **Theorem 5, part 1.** Take *T* maximal of deficiency def(G). By Theorem 4, a maximum
   *M* leaves def(G) vertices uncovered, matches *T* into distinct components of G−T
   (all odd), and restricts to a near-perfect matching on each component.
8. Since Hall's condition holds in H(T), and |N_{H(T)}(∅)| = 0, let **R** be a *maximal*
   subset of *T* achieving equality |N_{H(T)}(S)| = |S|.
9. **The crucial point:** C = R ∪ R′, where R′ is the union of the vertex sets of the
   components of G−T lying in N_{H(T)}(R). *M* matches *R* into distinct components of
   G[R′] and covers the rest of R′; no vertex of R ∪ R′ has a neighbour in the other odd
   components; so R ∪ R′ ⊆ C.
10. Let D′ := V(G) − T − R′ and H′ := H(T) − (R ∪ N_{H(T)}(R)). For nonempty
    S ⊆ T − R we get |N_{H′}(S)| > |S| (else *R* could be enlarged).
11. Hence deleting any vertex of N_{H′}(T−R) from H′ leaves Hall's condition intact, so
    H′ has a maximum matching omitting any such vertex; with Lemma 2 and Theorem 4, each
    component of G−T is factor-critical, so each vertex of D′ is avoided by some maximum
    matching. That gives D = D′, A = T − R, and parts (a), (b), (c).
12. **(d):** o(G[D]) = k, so def(T) = o(G−T) − |T| = k + |R| − |A ∪ R| = k − |A|; G[C]
    has a perfect matching so its components are even, so o(G−A) = k; hence *A* is
    another set of maximum deficiency.

**Length: 12–16 numbered steps for Gallai–Edmonds on top of a 6-step Tutte–Berge —
so 18–22 all told. [B], and comfortably under the library's page discipline if the
Tutte–Berge formula is its own item and Gallai–Edmonds cites it.** West states outright
that his route is "shorter than earlier inductive proofs (see Theorem 3.2.1 of
[Lovász–Plummer])… by not needing a characterization of factor-critical graphs or a
'Stability Lemma'." **That is exactly the property the library needs.**

**The independent Chekuri route** proves Lemma 7 (Even/Odd/Free(G,M) = D/A/C for *any*
maximum matching *M*), Lemma 8, Corollary 9, then the technical Lemma 10 by induction
using M-flowers and blossoms. **It depends on Edmonds' algorithm having been developed
first**, so it costs more, but Lemma 7 is a beautiful independent characterisation worth
scaffolding as a separate item: *D(G) = the set of vertices reachable from an exposed
vertex by an even M-alternating path*, and it holds for every maximum *M*. **[A], ~8
steps** given Berge.

**Also worth taking, verbatim from Bondy–Murty p. 428:** "A refinement of Theorem 16.11
states that every graph *G* has a barrier *B* such that each odd component of G−B is
hypomatchable and each even component of G−B has a perfect matching. Such a barrier is
known as a **Gallai barrier**." That is the same theorem in barrier language, and it is
the bridge between Diestel's partial 2.2.3 and the full D/A/C form.

#### C.2.4 Edmonds' blossom algorithm — **[B]: a correctness proof IS writable**

**Answer to the brief's question: yes, bounded, and Schrijver's is the version to use.**
Bondy–Murty's §16.5 (APS, APS⁺, Egerváry's algorithm, blossoms, flowers, Edmonds'
algorithm, pp. 437–448) is 12 printed pages and is **[C]** as a single item. Schrijver's
AGT I §6 does the same job in 2½ pages with three theorems.

**Definitions, Schrijver verbatim.** "Let X and Y be sets. Then we define X/Y as
follows: X/Y := X if X ∩ Y = ∅, X/Y := (X∖Y) ∪ {Y} if X ∩ Y ≠ ∅." Shrinking:
"G/C := (V/C, E/C) is again a graph. We say that G/C arises from *G* by **shrinking**
*C*." Alternating walk: "A walk P = (v₀, v₁, …, v_t) is called **M-alternating** if for
each i = 1,…,t−1 exactly one of v_{i−1}v_i and v_i v_{i+1} belongs to *M*."
**M-blossom:** "We call an M-alternating walk *P* an **M-blossom** if v₀, …, v_{t−1} are
distinct, v₀ is missed by *M*, and v_t = v₀."

**Theorem 6 (the core), verbatim:** "Let *C* be an M-blossom in *G*. Then *M* has
maximum size in *G* if and only if M/C has maximum size in G/C."
*Proof route:* both directions by transporting an augmenting path across the shrink; the
converse splits on the parity of the index *i* at which the path re-enters *C*.
**~8 steps. [A].**

**Theorem 7, verbatim:** "Let P = (v₀, v₁, …, v_t) be a shortest even-length
M-alternating W−v walk. Then either *P* is simple or there exist i < j such that
v_i = v_j, *i* is even, *j* is odd, and v₀, …, v_{j−1} are all distinct."
*Proof:* choose *j* minimal with v_j = v_i; if j−i is even delete v_{i+1},…,v_j for a
shorter walk; if *j* even and *i* odd then v_{i+1} = v_{j−1}, contradicting minimality.
**~4 steps. [A].**

**Algorithm (30) + Theorem 8** (an O(|V|²|E|) maximum matching, Edmonds 1965) then costs
another ~8 steps. **Total for a complete correctness proof: 20–24 numbered steps, [B].**

**Recommendation.** Scaffold **Theorem 6 and Theorem 7 as two separate lemma items**
([A] each), then the algorithm's correctness as a third item citing them. Do *not*
scaffold the running-time analysis — it needs an algorithmic cost model this library
does not have (see §E.2). Cite Edmonds, "Paths, trees, and flowers", _Canad. J. Math._
**17** (1965), 449–467.

#### C.2.5 Petersen's theorem and the 2-factor theorem — **[A], both very cheap**

**Petersen's 1-factor theorem, Bondy–Murty Theorem 16.14, verbatim:**
> **Theorem 16.14 Petersen's Theorem.** Every 3-regular graph without cut edges has a
> perfect matching.

**Proof, decomposed (Bondy–Murty's, from Tutte's theorem — 6 steps, [A]):**
1. Let *S* ⊆ V and let S₁, …, S_k be the vertex sets of the odd components of G−S.
2. *G* has no cut edge, so d(S_i) ≥ 2 for each *i*.
3. |S_i| is odd and *G* is 3-regular, so d(S_i) is odd (a degree-sum parity argument).
4. Hence d(S_i) ≥ 3.
5. The edge cuts ∂(S_i) are pairwise disjoint and contained in ∂(S), so
   3k ≤ Σ d(S_i) = d(∪S_i) ≤ d(S) ≤ 3|S|.
6. So o(G−S) = k ≤ |S|; Tutte's theorem gives a perfect matching.

**Necessity of bridgelessness** is witnessed by the **Sylvester graph** (Bondy–Murty
Fig. 16.5, "a 3-regular graph with no perfect matching"): an explicit, checkable
counterexample the library can carry as an example item. **[A], 3 steps** via
Exercise 16.1.8.

**Strengthening, Bondy–Murty Exercise 16.4.8, verbatim:** "Deduce from Tutte's Theorem
(16.13) that every edge of a 3-regular graph without cut edges belongs to some perfect
matching." **[A], ~6 steps** by the same counting applied to G − {ends of e}.

**The 2-factor theorem.** Bondy–Murty give it only as **Exercise ⋆16.4.16(b)**: "every
2*k*-regular graph is 2-factorable. (J. Petersen)". Diestel states it as
**Corollary 2.1.5 (Petersen 1891)**: "Every regular graph of positive even degree has a
2-factor", using **Theorem 1.8.1** (a connected graph has an Euler tour iff every vertex
has even degree). The route is: Euler tour ⟹ orient each component along it ⟹ the
bipartite "in/out" double cover is *k*-regular ⟹ König's Corollary 2.1.3 gives a
1-factor ⟹ pull back to a 2-factor. **~8 steps, [A] — but it needs Euler's theorem,
which is a prerequisite gap (see §E.2).** Schrijver's Exercise 3.13 states the same
result for the k = 1 case ("each 2*k*-regular graph contains a set *F* of edges so that
each vertex is incident with exactly two edges in *F*"), also routed through bipartite
matching.

#### C.2.6 Smaller Gap-2 results worth scaffolding, all **[A]**

- **König–Ore formula** (Bondy–Murty ⋆16.2.8(b), verbatim): "The matching number of a
  bipartite graph G := G[X,Y] is given by α′ = |X| − max{|S| − |N(S)| : S ⊆ X}." The
  bipartite shadow of Tutte–Berge; ~5 steps from Hall.
- **Corollary 16.6** (Bondy–Murty): "Every nonempty regular bipartite graph has a
  perfect matching." 4 steps, edge-counting + Hall.
- **Gallai's identity** (Schrijver AGT I Theorem 1, verbatim): "If G = (V,E) is a graph
  without isolated vertices, then α(G) + τ(G) = |V| = ν(G) + ρ(G)." The library already
  publishes Gallai; check whether it publishes *both* equalities.
- **Essential vertex** (Bondy–Murty ⋆16.1.15, verbatim): "A vertex *v* of a graph *G* is
  **essential** if *v* is covered by every maximum matching in *G*, that is, if
  α′(G−v) = α′(G) − 1." With Bondy–Murty ⋆16.1.14(b): "every vertex of a connected
  nontrivial graph is covered by some maximum matching" — **false as printed unless
  "nontrivial" excludes factor-critical graphs; see §F.4.**
- **Bondy–Murty ⋆16.1.5(c)**: "a tree has at most one perfect matching." 3 steps.
- **Exercise 16.4.1** (Chungphaisan): "a tree *G* has a perfect matching if and only if
  o(G−v) = 1 for all v ∈ V." 4 steps.

### C.3 Gap 3 — the Rado graph

#### C.3.1 The extension property (∗) — the definition everything rests on

**Diestel's form, verbatim (5th ed. p. 246):**
> Whenever *U* and *W* are disjoint finite sets of vertices in *R*, there exists a vertex
> v ∈ R − U − W that is adjacent in *R* to all the vertices in *U* but to none in *W*.
> **(∗)**

**Cameron's form, verbatim (§1.1):**
> **(∗)** Given finitely many distinct vertices u₁, …, u_m, v₁, …, v_n, there exists a
> vertex *z* which is adjacent to u₁, …, u_m and nonadjacent to v₁, …, v_n.
> Often I will say, for brevity, "*z* is correctly joined".

**They are the same property.** Cameron does not say U, W are disjoint but does say the
listed vertices are distinct; Diestel says disjoint finite sets. Cameron's immediate
consequence: "Obviously, a graph satisfying (∗) is infinite, since *z* is distinct from
all of u₁, …, u_m, v₁, …, v_n." **See §D.3 on the (m,n)-indexed weakening E(m,n).**

#### C.3.2 Explicit constructions — **[A] each**

**(i) The BIT construction (Rado's).** Cameron derives it from set theory and states it
verbatim: "there is a familiar way to encode finite subsets of ℕ as natural numbers: the
set {a₁, …, a_n} of distinct elements is encoded as 2^{a₁} + ⋯ + 2^{a_n}. This leads to
an explicit description of *R*: the vertex set is ℕ; *x* and *y* are adjacent if the
*x*th digit in the base 2 expansion of *y* is a 1 or vice versa. This description was
given by Rado [55]." **Note this is Cameron's symmetrised phrasing** — "or vice versa" —
whereas the brief's phrasing ("join m < n iff the m-th binary digit of n is 1") fixes the
order. **They define the same graph**: for m < n the *n*-th digit of *m* is necessarily 0,
because n < 2^n for every n ≥ 0, so m < n < 2^n and *m* has no bit at position *n* set.
Hence the symmetrised condition reduces, for m < n, to "bit *m* of *n* is 1".
**Record the ordered form as the definition and the symmetrised form as a remark; the
0-indexing is Cameron's and Rado's.** See §D.3.

*Verification of (∗), decomposed:* given disjoint finite U, W ⊆ ℕ, put
z := Σ_{u∈U} 2^u + 2^k where 2^k > max(U ∪ W) and k ∉ U ∪ W. Then bit *u* of *z* is 1
for u ∈ U, bit *w* of *z* is 0 for w ∈ W, and *z* > every element of U ∪ W so no
reversed adjacency arises. **~6 steps. [A].** *(This is the standard verification;
Cameron gives the set-theoretic version, from which it is a transcription.)*

**(ii) The ∈-graph of a countable model of set theory.** Cameron **Theorem 2**,
verbatim: "Let *M* be a countable model of set theory. Define a graph M\* by the rule
that x ∼ y if and only if either x ∈ y or y ∈ x. Then M\* is isomorphic to *R*."
*Proof, verbatim in essence:* given distinct u₁,…,u_m,v₁,…,v_n ∈ M, set
x = {v₁,…,v_n} and z = {u₁,…,u_m, x}; *z* witnesses (∗), using Foundation twice.
**~6 steps, [A] — but it needs a countable model of set theory (Löwenheim–Skolem), which
this library does not have. OUT OF SCOPE; record as a remark, not an item.** Cameron's
own comment is worth quoting to readers: "Note how little set theory was actually used:
only our ability to gather finitely many elements into a set (a consequence of the Empty
Set, Pairing and Union Axioms) and the Axiom of Foundation. In particular, the Axiom of
Infinity is not required."

**(iii) The quadratic-residue construction.** Cameron, §1.2: vertices = primes
p ≡ 1 (mod 4); p ∼ q iff (p/q) = 1. *Proof of (∗)* uses **quadratic reciprocity** (to
make adjacency symmetric), the **Chinese Remainder Theorem**, and **Dirichlet's theorem
on primes in arithmetic progressions**. **[C] for this library — Dirichlet is far out of
scope.** Record as a sourced remark with `proved_here: false`, or omit.

**(iv) Universal sets / binary sequences.** Cameron, §1.2, verbatim: "A set *S* of
positive integers is called **universal** if, given k ∈ ℕ and T ⊆ {1,…,k}, there is an
integer *N* such that, for i = 1,…,k, N + i ∈ S if and only if i ∈ T." Then vertex set
ℤ, x ∼ y iff |x−y| ∈ S, gives *R*. "The simplest construction of a universal sequence is
to enumerate all finite binary sequences and concatenate them." **[A], ~7 steps, fully
in scope, and the concatenation construction is completely explicit.** A good second
construction for the page.

**(v) Diestel's inductive construction** (Theorem 8.3.1, existence half), verbatim:
"Let R₀ := K¹. For all n ∈ ℕ, let R_{n+1} be obtained from R_n by adding for every set
U ⊆ V(R_n) a new vertex *v* joined to all the vertices in *U* but to none outside *U*.
(In particular, the new vertices form an independent set in R_{n+1}.) Clearly
R := ⋃_{n∈ℕ} R_n has property (∗)." **[A], ~4 steps.** Cameron gives the same
construction at the end of §1.2. **This is the cheapest existence proof, and it needs
nothing but ℕ-indexed unions.**

#### C.3.3 Uniqueness by back-and-forth — **[A], and the choice audit lives here**

**Diestel, Theorem 8.3.1, uniqueness half, verbatim:**
> To prove uniqueness, let R = (V, E) and R′ = (V′, E′) be two graphs with property (∗),
> **each given with a fixed vertex enumeration**. We construct a bijection φ: V → V′ in
> an infinite sequence of steps, defining φ(v) for one new vertex v ∈ V at each step.
> At every odd step we look at the **first** vertex *v* in the enumeration of *V* for
> which φ(v) has not yet been defined. […] At even steps […] we look at the **first**
> vertex v′ in the enumeration of V′ that does not yet lie in the image of φ […]
> **By our minimum choices of *v* and v′,** the bijection gets defined on all of *V* and
> all of V′, and it is clearly an isomorphism.

**Cameron, Fact 2, verbatim on the same point:**
> Enumerate the vertices of Γ₁ and Γ₂, as {x₁, x₂, …} and {y₁, y₂, …} respectively. We
> build finite isomorphisms f_n as follows. Start with f₀ = ∅. Suppose that f_n has been
> constructed. If *n* is even, let *m* be the smallest index of a vertex of Γ₁ not in the
> domain of f_n; then extend f_n (as above) to a map f_{n+1} with x_m in its domain.
> **(To avoid the use of the Axiom of Choice, select the correctly-joined vertex of Γ₂
> with smallest index to be the image of x_m.)** If *n* is odd, we work backwards. […]

**SOURCED ANSWER TO THE BRIEF'S QUESTION.** The claim is confirmed, and by **two
independent sources, one of which states it in exactly those words**. Cameron's
parenthesis is an explicit, citable assertion that the back-and-forth construction of
the isomorphism is **choice-free once both graphs carry a given enumeration**, and
Diestel's "each given with a fixed vertex enumeration … by our minimum choices" is the
same observation made structurally. **The library may state uniqueness in ZF**, provided
the Statement carries the hypothesis that the two graphs are given *with* enumerations
(equivalently: given bijections with ℕ — which is what "countable" means, and
instantiating one existential witness in a proof costs no choice).

**Decomposed proof route:**
1. One-step extension lemma: if f is an isomorphism of finite induced subgraphs of Γ₁
   into Γ₂ and x ∉ dom f, then f extends to x. (Apply (∗) in Γ₂ to U = f(neighbours of x
   in dom f), W = f(non-neighbours); **take the witness of least index**.)
2. Symmetric statement going back.
3. Define f₀ = ∅; at even n extend forward to the least-index undomained vertex of Γ₁;
   at odd n extend backward to the least-index unimaged vertex of Γ₂.
4. Each f_n is a finite isomorphism of induced subgraphs, and f_n ⊆ f_{n+1}.
5. The sequence (f_n) is defined by primitive recursion on a **canonically determined**
   step, so no choice function is invoked.
6. f := ⋃ f_n has domain all of V (forward steps) and range all of V′ (backward steps).
7. f is a bijection and preserves adjacency and non-adjacency in both directions, so it
   is an isomorphism.

**Length: 7–9 numbered steps. [A].** **Choice cost: none (ZF).**

**The corollaries follow by restarting the machine, each [A]:**
- **Homogeneity.** Cameron **Proposition 9**, verbatim proof: "In the proof of Fact 2,
  the back-and-forth machine can be started with any given isomorphism between finite
  substructures of the graphs Γ₁ and Γ₂, and extends it to an isomorphism between the two
  structures. Now, taking Γ₁ and Γ₂ to be *R* gives the conclusion." Diestel makes it
  Exercise 56. **~3 steps on top of C.3.3. ZF.**
- **Universality.** Cameron **Proposition 6**, verbatim: "Every finite or countable graph
  can be embedded as an induced subgraph of *R*." Proof: "just 'go forth'… (The point is
  that, going forth, we only require that property (∗) holds in the *target* graph.)"
  **~5 steps. ZF** (same least-index device). Diestel gives the same argument inline
  before Theorem 8.3.1.
- **Vertex-transitivity** (Diestel, in-text): immediate from homogeneity. **2 steps.**

#### C.3.4 Indestructibility — **[A]**

**Cameron Proposition 1, verbatim:**
> Let u₁, …, u_m, v₁, …, v_n be distinct vertices of *R*. Then the set
> Z = {z : z ∼ u_i for i = 1,…,m; z ≁ v_j for j = 1,…n} is infinite; and the induced
> subgraph on this set is isomorphic to *R*.

*Proof, verbatim:* "It is enough to verify property (∗) for *Z*." Two lines. **[A], 3
steps.** This is the workhorse; everything in §1.3 follows from it.

**Cameron Proposition 2, verbatim:**
> The result of any of the following operations on *R* is isomorphic to *R*:
> (a) deleting a finite number of vertices;
> (b) changing a finite number of edges into non-edges or vice versa;
> (c) switching with respect to a finite set of vertices.

with **switching** defined verbatim: "Replace each edge between a vertex of *X* and a
vertex of its complement by a non-edge, and each such non-edge by an edge; leave the
adjacencies within *X* or outside *X* unaltered." *Proof:* (a), (b) by Proposition 1;
(c) by choosing the witness outside *X* with adjacencies flipped on the right pieces.
**[A], ~6 steps for all three.**

**Cameron Proposition 5, verbatim:** "*R* is isomorphic to its complement." Proof, in
full: "For property (∗) is clearly self-complementary." **[A], 2 steps.**

**Cameron's caution, worth carrying to readers verbatim:** "Not every graph obtained
from *R* by switching is isomorphic to *R*. For example, if we switch with respect to
the neighbours of a vertex *x*, then *x* is an isolated vertex in the resulting graph.
However, if *x* is deleted, we obtain *R* once again!" **This is a genuine boundary case
and belongs in the item's Remark.**

#### C.3.5 The partition / indivisibility property — **[A] one way, [B] with uniqueness**

**Cameron Proposition 3, verbatim:** "If the vertex set of *R* is partitioned into a
finite number of parts, then the induced subgraph on one of these parts is isomorphic to
*R*." *Proof:* if (∗) fails in every X_i with witnesses U_i, V_i, then it fails in *R*
for U = ⋃U_i, V = ⋃V_i. **[A], 4 steps.** *(Cameron calls this "the pigeonhole
property"; the standard name is **indivisibility**. See §D.3.)*

**The converse — Cameron Proposition 4 = Diestel Proposition 8.3.2.** Cameron's version
is stated for partitions into two parts and characterises *R* among countable graphs
together with the complete and null graphs; Diestel's is identical. **Both proofs are
given above in full.** Diestel's is the more explicit and is ~14 steps: **[B]**. It
splits on whether *G* has an isolated vertex / a vertex joined to all others, then takes
U, W failing (∗) with |U ∪ W| minimum and case-splits on U ≠ ∅ vs U = ∅.

#### C.3.6 The measure-theoretic statement — **CONFIRMED OUT OF SCOPE, and here is why**

**The brief asked me to confirm that "G(ℕ,½) is almost surely isomorphic to the Rado
graph" is genuinely measure-theoretic. It is, and Cameron makes the dependence explicit
in the text of the proof.** Verbatim, from the proof of Fact 1:

> We have to show that the event that (∗) fails has probability 0, i.e., the set of
> graphs not satisfying (∗) is a **null set**. For this, it is enough to show that the
> set of graphs for which (∗) fails for some given vertices u₁, …, u_m, v₁, …, v_n is
> null. **(For this deduction, we use an elementary lemma from measure theory: the union
> of countably many null sets is null.** There are only countably many values of *m* and
> *n*, and for each pair of values, only countably many choices of the vertices
> u₁, …, u_m, v₁, …, v_n.) Now we can calculate the probability of this set. […] The
> probability that any z_i is not correctly joined is 1 − 1/2^{m+n}; since these events
> are **independent** (for different z_i), the probability that none of z₁, …, z_N is
> correctly joined is (1 − 1/2^{m+n})^N. This tends to 0 as N → ∞; so the event that no
> vertex is correctly joined does have probability 0.

And in §1.7, verbatim: "The simplest situation concerns the space 2^ℕ of all infinite
sequences of zeros and ones. This is a probability space, with the **'coin-tossing
measure'** — this was the basis of our earlier discussion."

**What the statement actually requires, itemised, so the scaffolder can deny it
honestly:**
1. A **probability measure on an infinite product** — the coin-tossing (Bernoulli-½
   product) measure on 2^{[ℕ]²}. Building it is Carathéodory extension from the algebra
   of cylinder sets, or the Kolmogorov/Ionescu-Tulcea construction. **The library has no
   measure theory.**
2. **Countable additivity / the countable union of null sets is null**, used explicitly.
3. **Independence** of the coordinate events, i.e. the product structure.
4. A limit (1 − 2^{−(m+n)})^N → 0.

**The honest denial, and the in-scope substitute.** The scaffolder should state that the
Erdős–Rényi almost-sure statement (Diestel **Theorem 11.3.5**, Cameron **Theorem 1**) is
`deferred` with reason **"rests on a whole subject area the library has not reached
(a measure-theory level)"** — which is exactly the disposition CLAUDE.md reserves for
this case — and offer instead the **finite counting statement**, which is pure finite
combinatorics and fully in scope:

> For fixed m, n ≥ 0 and k > m + n, among the 2^{C(k,2)} graphs on vertex set {1,…,k},
> the number failing the (m,n)-extension property for *some* choice of disjoint
> U, W ⊆ {1,…,k} with |U| = m, |W| = n is at most
> C(k,m)·C(k−m,n)·2^{C(k,2)}·(1 − 2^{−(m+n)})^{k−m−n},
> and this bound is o(2^{C(k,2)}) as k → ∞.

**[A], ~7 steps**, needs only binomial counting and the elementary bound
(1−x)^N ≤ e^{−xN}. It is the finite shadow of Cameron's Fact 1 with the measure removed,
and it gives readers the same insight ("almost all finite graphs have the extension
property") with no measure at all.

**A second in-scope substitute exists but costs more.** Cameron's **Fact 3** and §1.7
give a **Baire-category** version — "Almost all countable graphs (in the sense of either
measure or Baire category) have property (∗)", with his own note "In fact, it is simpler
for Baire category than for measure — no limit is required!" This needs the space 2^ℕ
with d(x,y) = 2^{−n}, complete metric spaces, and the **Baire category theorem**
(Cameron's Theorem 7). **The library's stated inventory has no metric spaces, so this is
also out of scope**; and the Baire category theorem for complete metric spaces is
itself equivalent to **dependent choice** over ZF, so it is *not* free even if the
metric machinery were added. **Do not offer it as the cheap alternative.**

#### C.3.7 Bonus results from the same range, for the scaffolder's judgement

- **Lachlan–Woodrow classification** (Diestel Theorem 8.3.3) — statement only, **[C]**,
  `proved_here: false` if used.
- **The Henson graphs R^r** (Diestel, §8.3, in-text construction, verbatim): "for every
  integer r ≥ 3 there is a homogeneous K^r-free graph R^r, constructed as follows. Let
  R^r₀ := K¹, and let R^r_{n+1} be obtained from R^r_n by joining, for every induced
  subgraph H ⊉ K^{r−1} of R^r_n, a new vertex v_H to every vertex in *H*." Universality
  among K^r-free countable graphs and homogeneity both follow by the same back-and-forth.
  **[A]–[B], entirely in scope, and it makes the Rado page a genuine pair rather than a
  single theorem.**
- **Fraïssé's theorem** (Cameron Theorem 3) — the age/amalgamation framework. **[B]** and
  it needs a general relational-structure vocabulary the library does not have. Record as
  a Remark naming *R* as the Fraïssé limit of the class of finite graphs, with
  `external_refs`, not as a dependency.
- **ℵ₀-categoricity** (Cameron Proposition 11) and **Engeler–Ryll-Nardzewski–Svenonius**
  (Theorem 4) — needs first-order logic and types. **[C] here.** But Cameron's explicit
  axiom scheme is quotable and cheap as a remark: σ_{m,n} =
  (∀u₁..u_m v₁..v_n)(((u₁≠v₁)&…&(u_m≠v_n)) → (∃z)((z∼u₁)&…&(z∼u_m)&¬(z∼v₁)&…&¬(z∼v_n))).
- **Aut(R) is simple** (Cameron Theorem 8), **|Aut(R)| = 2^{ℵ₀}** (Proposition 13),
  **strong small index property** (Theorem 9), **five reducts** (Theorem 11) — all **[C]**.
- **Spanning-subgraph characterisation** (Cameron Proposition 7) and **1-factorization**
  (Proposition 8) — **[A]** and **[B]** respectively; both are pure back-and-forth
  variants and both are in scope. Proposition 8 verbatim: "The edge set of *R* can be
  partitioned into spanning subgraphs isomorphic to any given countable sequence of
  non-null countable locally finite graphs. In particular, *R* has a 1-factorization, and
  a partition into Hamiltonian paths."

### C.4 Gap 4 — de Bruijn–Erdős: THE EXACT CHOICE PRINCIPLE

**This is the headline finding of the file. The answer is sourced, and it is an
equivalence, not just an implication.**

#### C.4.1 The statement

**Diestel Theorem 8.1.3 (de Bruijn & Erdős 1951), verbatim** (already in the run's
graph-theory harvest, restated here for self-containedness):
> Let G = (V, E) be a graph and k ∈ ℕ. If every finite subgraph of *G* has chromatic
> number at most *k*, then so does *G*.

#### C.4.2 The sourced answer — **DBE_k for k ≥ 3 is EQUIVALENT to BPI in ZF**

**Primary source, Rorabaugh–Tardif–Wehlau, LMCS 13(1:1) 2017, §4, verbatim:**

> In graph theory, the De Bruijn-Erdős theorem is the statement that a graph is
> *k*-colourable if and only if all of its finite subgraphs are *k*-colourable. In our
> terminology, this is the statement that the complete graphs are compact. (The complete
> graph K_n on *n* vertices is the structure with universe {0,…,n−1} and the binary
> adjacency relation ≠.) Various proofs were known in the early fifties. Then in 1971,
> **Läuchli [5] proved that the ultrafilter axiom is a consequence of the compactness of
> K_n for any n ≥ 3.**

and, as the section's conclusion, verbatim:

> **Corollary 4.2 (Läuchli [5]).** For every n ≥ 3, the ultrafilter axiom is equivalent
> to the statement that K_n is compact.

**Corroborating source, Banerjee arXiv:2009.05368, Definition 2.4(18), verbatim** (full
text quoted in §B.4.3): BPI is Howard–Rubin **Form 14**, and "The *n*-coloring theorem
for n ≥ 3" is **Form 14 G(n)**, listed as an *equivalent formulation of BPI*, and
identified there as "De Bruijn–Erdős theorem for n ≥ 3 colorings".

**Original reference for the hard direction:** H. Läuchli, "Coloring infinite graphs and
the Boolean prime ideal theorem", _Israel J. Math._ **9** (1971), 422–429,
DOI `10.1007/BF02771458`. Publisher abstract, verbatim: "there is a function *G* which
assigns to each Boolean algebra *B* a graph G(B) such that (1) if G(B) is 3-colorable
then there is a prime ideal in *B* and (2) every finite subgraph of G(B) is 3-colorable."

**So the reversal DOES hold, and it holds for each fixed k ≥ 3 separately.** This is the
precise thing the brief asked to establish and not assert.

#### C.4.3 The k = 2 case is genuinely weaker — also sourced

**Rorabaugh–Tardif–Wehlau, p. 9, verbatim:** "The fact that Choice(2) = KW(2) is
equivalent to the compactness of C₂ was proved by Mycielski [8]. **(Note that
C₂ = K₂.)**"

with **Choice(n) defined verbatim** on their p. 7: "For every set *X* of sets of
cardinality *n*, there is a function f: X → ∪X such that for each x ∈ X, f(x) is an
element of *x*."

**So: DBE₂ ⟺ Choice(2) = AC for families of 2-element sets**, which is strictly weaker
than BPI and is *not* provable in ZF. (Reference [8] there is J. Mycielski, "Some remarks
and problems on the colouring of infinite graphs and the theorem of Kuratowski", _Acta
Math. Acad. Sci. Hungar._ **12** (1961), 125–129.) The reason is intuitive and worth a
Remark: a 2-colouring of a component is determined by the parity of distance from a
chosen root, and choosing a root in each of arbitrarily many components is exactly
Choice-like.

#### C.4.4 The countable case IS a ZF theorem — sourced, and it is the library's route

**Gasarch & Hirst, "Reverse mathematics and recursive graph theory", §1, verbatim:**

> **Definition 1 (RCA₀).** A graph *G* is **locally k-chromatic** if every finite
> subgraph of *G* is *k*-chromatic.
>
> **Theorem 2 (RCA₀).** For every k ≥ 2, the following are equivalent:
> (1) WKL₀. (2) If *G* is locally *k*-chromatic, then *G* is *k*-chromatic.

with the paper's own description of the forward proof, verbatim: "To prove that (1)
implies (2), a tree is constructed in which every infinite path encodes a *k*-coloring."
Their graphs are countable by definition: "A (countable) graph *G* consists of a set of
vertices V ⊆ ℕ and a set of edges E ⊆ [ℕ]²."

**How to read this correctly, because it is easy to misread.** Reverse mathematics
measures *arithmetic comprehension* strength, not choice strength. WKL₀ and RCA₀ are
subsystems of second-order arithmetic and contain **no choice axioms**; every theorem of
WKL₀ is a theorem of ZF. So Theorem 2 says two things the library cares about:
- **(i) the countable de Bruijn–Erdős theorem is provable in ZF, with no choice at all**;
- **(ii) it is nevertheless not *effective*** — the paper's next paragraph, verbatim:
  "In [2], Bean proved that there is a recursive 3-chromatic graph with no recursive
  coloring, regardless of the number of colors allowed." So the countable case is
  choice-free but not constructive, and the library should not claim more.

**This is exactly the library's `thm-konig-infinity-lemma-for-ordered-trees` (titled "in
ZF").** Diestel's Proof 1 builds the tree whose level-*n* nodes are the *k*-colourings of
G[v₀,…,v_n], which is a **finite set of functions into {1,…,k}, canonically ordered
lexicographically**. The ordered-tree infinity lemma applies verbatim, and no choice is
spent. **The library already owns both halves of the countable result.**

#### C.4.5 The three proofs, re-costed with their exact choice bills

| proof | scope | choice spent | library route | steps |
|---|---|---|---|---|
| König's infinity lemma | countable *G* with a given enumeration | **none — ZF** | `thm-konig-infinity-lemma-for-ordered-trees` | 5–7, **[A]** |
| ultrafilter argument | arbitrary *G* | **exactly BPI (= the ultrafilter lemma)** | `thm-ultrafilter-lemma` | 8–10, **[A]** |
| Tychonoff on {1,…,k}^V | arbitrary *G* | **exactly BPI** (each factor is finite discrete, hence compact Hausdorff) | needs product topology — not in library | 7–9, **[A]** but out of scope |
| Diestel's Appendix-A compactness principle | arbitrary *G* | BPI (it is a repackaging of the ultrafilter argument) | — | ~6 |

**The Tychonoff row's justification.** Tychonoff's theorem *restricted to Hausdorff
spaces* is equivalent to BPI over ZF — Łoś & Ryll-Nardzewski, "Effectiveness of the
representation theory for Boolean algebras", _Fund. Math._ **41** (1954), 60–62, and
Rubin & Scott, "Some topological theorems equivalent to the Boolean prime ideal theorem",
_Bull. Amer. Math. Soc._ **60** (1954), 389. {1,…,k}^V with discrete finite factors is
compact Hausdorff, so Diestel's third proof spends BPI and no more. **I did not obtain
either 1954 paper's full text — see §F.3 — so if the scaffolder wants to *state* this
equivalence it should carry the two references, not a proof.** It is not needed: the
ultrafilter route is strictly better for this library.

**The explicit ultrafilter route, decomposed — this is the item to scaffold.** It is a
specialisation of Rorabaugh–Tardif–Wehlau's Propositions 2.1 + 2.2 (both quoted in full
in the source; Prop 2.2 verbatim: "If *F* is contained in an ultrafilter, then for every
finite structure *A*, A^I_F admits a homomorphism to *A*"), unfolded for graphs:

1. Let *I* be the set of all pairs (F, c) where F ⊆ V is finite and *c* is a
   *k*-colouring of G[F]. For v ∈ V put I_v := {(F,c) ∈ I : v ∈ F}.
2. Every finite intersection I_{v₁} ∩ ⋯ ∩ I_{v_n} is nonempty: G[{v₁,…,v_n}] is a finite
   subgraph, hence *k*-colourable by hypothesis. **(No choice — this is an existential
   instantiation, not a selection.)**
3. So {I_v : v ∈ V} has the finite intersection property and generates a filter on *I*.
4. **Apply the ultrafilter lemma** to get an ultrafilter *U* on *I* containing it.
5. For v ∈ V, the set I_v ∈ *U* is partitioned into the *k* pieces
   I_v^j := {(F,c) ∈ I_v : c(v) = j}. An ultrafilter containing a set containing exactly
   one member of a finite partition; so there is a **unique** j with I_v^j ∈ *U*. Define
   χ(v) := that *j*.
6. χ is a well-defined function V → {1,…,k}, defined without any selection.
7. Let xy ∈ E. Then I_x ∩ I_y ∈ *U*, and every (F,c) in it has c(x) ≠ c(y).
8. Also I_x^{χ(x)} ∩ I_y^{χ(y)} ∩ I_x ∩ I_y ∈ *U*, hence nonempty; take any (F,c) in it.
9. Then χ(x) = c(x) ≠ c(y) = χ(y). So χ is a *k*-colouring of *G*. ∎

**Length: 9 numbered steps. [A]. Choice cost: exactly the ultrafilter lemma, which the
library publishes as `thm-ultrafilter-lemma`.**

#### C.4.6 What the scaffolder should actually write

1. **`thm-de-bruijn-erdos-countable`** — statement restricted to countable *G* given with
   an enumeration, "in ZF", proved from
   `thm-konig-infinity-lemma-for-ordered-trees`. **[A].** The title and Statement may
   say "in ZF" because §C.4.4 sources it.
2. **`thm-de-bruijn-erdos`** — the general statement, "from the ultrafilter lemma",
   proved by §C.4.5. **[A].** The Statement declares the ultrafilter lemma as a
   hypothesis-level dependency, exactly as the library does for choice principles.
3. **A `rem-` item recording the converse**, source-cited to Läuchli 1971 and
   Rorabaugh–Tardif–Wehlau Corollary 4.2, with `proved_here: false`: for each fixed
   k ≥ 3 the *k*-colouring compactness statement **implies** the ultrafilter lemma, so no
   proof from a weaker principle exists. **This is the item that makes the pair honest**,
   and it is precisely the "narrow last resort" CLAUDE.md licenses: a well-established,
   source-checked result whose local proof cannot be built in scope (Läuchli's
   construction is a Boolean-algebra-to-graph functor the library has no vocabulary for).
   **Do NOT try to prove it.**
4. Optionally a second `rem-` for the k = 2 case ⟺ Choice(2) (Mycielski 1961, via
   Rorabaugh–Tardif–Wehlau p. 9), which is a genuinely surprising and cheap remark.

**If the scaffolder wants only what its own proof gives, it can stop at 1 and 2 and omit
3 and 4. But 3 is now sourced, so there is no longer any reason to be vague.**

---

## D. Convention disagreements, with recommendations

### D.2 Gap 2

**D.2.1 "factor-critical": does the definition forbid a perfect matching?**
Chekuri and Diestel say "*G* has **no** perfect matching but for every v ∈ V, G−v has
one." West says only "every subgraph obtained by deleting one vertex has a 1-factor."
Bondy–Murty say "every vertex-deleted subgraph is matchable" and add "In particular,
**trivial graphs are hypomatchable**" — i.e. K¹ counts.
*The definitions coincide for graphs of odd order (a graph with a perfect matching has
even order, so a graph all of whose vertex-deleted subgraphs are matchable has odd
order and so has no perfect matching).* **Recommendation: adopt West's/Bondy–Murty's
positive form** ("G−v has a 1-factor for every v"), **note in the item that odd order and
the absence of a perfect matching are consequences**, and **state explicitly that K¹ is
factor-critical** — Bondy–Murty's Lemma 16.8 and the empty-barrier statements depend on
it, and the Gallai–Edmonds theorem's components G_i include singletons.

**D.2.2 "hypomatchable" vs "factor-critical".** Bondy–Murty use both as synonyms;
everyone else uses factor-critical. **Recommendation: `factor-critical` as the item id
and title, `hypomatchable` as an `aliases` entry and a parenthetical in the Definition.**

**D.2.3 Matching number: ν(G) or α′(G).** Schrijver and Chekuri write ν(G); Bondy–Murty
write α′(G) and use α for the stable-set number *and* β for the covering number, i.e.
their α/β are Schrijver's α/τ. **Recommendation: follow Schrijver — ν, τ, α, ρ — because
the library already publishes Gallai's identity, and check which spelling the published
items use before minting anything.** Never mix the two in one item.

**D.2.4 The Tutte–Berge formula's two normal forms.** min-over-U with +|U|, versus
½(n − def). Identical (see §C.2.1). **Recommendation: state the min form in the theorem
and give the deficiency form as an immediate corollary**, since the deficiency form is
what Gallai–Edmonds part (d) needs.

**D.2.5 "Berge–Tutte" vs "Tutte–Berge".** West's paper title says **Berge–Tutte**;
Schrijver, Bondy–Murty and Chekuri all say **Tutte–Berge**. **Recommendation:
Tutte–Berge (3–1 majority, and it matches the run's existing harvest), with Berge–Tutte
in `aliases` so West's citation is findable.**

**D.2.6 o(G) counts odd *components*, and G−S means deleting vertices.** All four
sources agree; Schrijver spells it out: "the graph obtained by deleting all vertices in
*U* and all edges incident with *U*, is denoted by G − U". No disagreement, but the
library should pin it because the empty graph's component count is a real edge case.

**D.2.7 "barrier".** Only Bondy–Murty use the word. Chekuri says "**Tutte-Berge witness
set**"; West says "a **Tutte set** is a vertex subset with positive deficiency" — which is
*not* the same thing (a Tutte set need not attain the maximum). **Recommendation: define
`barrier` = a set attaining the maximum deficiency, note Chekuri's "Tutte–Berge witness
set" as a synonym, and do NOT reuse West's "Tutte set" for it — West's is a weaker
notion and conflating them would be a fatal citation error.**

**D.2.8 Petersen's name attaches to three different theorems** — the bridgeless-cubic
1-factor theorem, the 2-factorability of 2k-regular graphs, and the Petersen graph.
**Recommendation: title the items by content, not by name** (`thm-bridgeless-cubic-has-
perfect-matching`, `thm-even-regular-graph-is-2-factorable`), with "Petersen's theorem"
in the Statement's attribution.

### D.3 Gap 3

**D.3.1 Naming.** Diestel: "**Rado graph**", "usually called the Rado graph, named after
Richard Rado who gave one of its earliest explicit definitions", and adds "In the context
of infinite graphs, the Rado graph is therefore also called the (countably infinite)
'**the**' random graph." Cameron's whole survey calls it "the random graph" and writes
*R*. Erdős–Rényi 1963 is the existence/uniqueness citation in both.
**Recommendation: `Rado graph` as the title and id, `the random graph` and
`the countable universal homogeneous graph` in `aliases`, and a Remark that the
"random graph" name comes from the measure-theoretic theorem the library does not
prove.** Naming it "the random graph" while denying the probabilistic theorem would read
as a contradiction to a reader.

**D.3.2 BIT indexing.** Cameron's encoding is **0-indexed**: {a₁,…,a_n} ↦ 2^{a₁}+⋯+2^{a_n}
with vertex set ℕ (so 0 is a vertex and bit 0 is the least significant). The brief's
phrasing "the *m*-th binary digit of *n*" is the same if digits are numbered from 0.
**Recommendation: state the vertex set as ℕ = {0,1,2,…}, number bits from 0, and give
the formula 2^{a₁}+⋯+2^{a_n} explicitly in the construction so the indexing cannot be
misread.**

**D.3.3 Ordered vs symmetrised adjacency in the BIT graph.** Cameron: "x and y are
adjacent if the *x*th digit in the base 2 expansion of *y* is a 1 **or vice versa**".
The brief: "join m < n iff the *m*-th binary digit of *n* is 1". **These agree** (for
m < n the *n*-th bit of *m* is 0 since m < 2^n), but only the symmetrised form is
manifestly a graph. **Recommendation: define adjacency by the symmetrised condition (it
is visibly symmetric and therefore visibly a graph), then prove as a 2-step lemma that
for m < n it reduces to the ordered condition.** Defining by the ordered condition first
requires a side remark that the relation is well defined.

**D.3.4 Property (∗) vs the indexed family E(m,n).** Diestel and Cameron both state a
single unindexed (∗). Cameron's §1.5 shows it is *equivalent to* the countable scheme
{σ_{m,n}}. **Recommendation: state (∗) unindexed as the Definition; if a finite version
is needed for the counting item (§C.3.6), name it the (m,n)-extension property and
define it separately, without calling it "(∗) for m,n".**

**D.3.5 Does "countable" include finite?** Cameron's Proposition 6 says "Every finite or
countable graph", making the inclusion explicit; Diestel's universality argument
enumerates v₁, v₂, … and is stated for countable graphs. **Recommendation: say "finite or
countably infinite" wherever universality is claimed; the library's convention for
"countable" should be checked against its published items before minting.**

**D.3.6 "Indivisible" vs "pigeonhole property".** Cameron writes "*R* satisfies the
**pigeonhole principle**"; the standard literature name is **indivisible**. Diestel gives
it no name at all. **Recommendation: title it the partition property, mention
"indivisible" in the Statement, and avoid "pigeonhole principle", which the library
almost certainly already uses for the finite counting principle** — a collision that
would be a genuine reader hazard.

**D.3.7 Number of parts in the partition property.** Cameron's Proposition 3 is for
finitely many parts; Proposition 4 and Diestel's 8.3.2 characterise *R* using **two**
parts. **Recommendation: prove the finite-parts version (it is no harder — one union),
and state the characterisation for two parts, which is the stronger uniqueness claim.**

### D.4 Gap 4

**D.4.1 "Ultrafilter axiom" vs "ultrafilter lemma" vs "BPI".** Rorabaugh–Tardif–Wehlau
say "the ultrafilter axiom"; Banerjee/Howard–Rubin say BPI, Form 14; Läuchli's title says
"the Boolean prime ideal theorem". These are the same principle over ZF. **The library
publishes `thm-ultrafilter-lemma`. Recommendation: state everything in terms of the
ultrafilter lemma, and add one Remark naming BPI / Form 14 / "the Boolean prime ideal
theorem" as the same principle, with the Howard–Rubin citation** — otherwise a reader
comparing the library to the literature cannot match the statements.

**D.4.2 Which k.** The equivalence holds for **each fixed k ≥ 3**; k = 2 is a different,
weaker principle; k = 1 and k = 0 are trivial. **Recommendation: state the theorem for
arbitrary k ∈ ℕ (the ultrafilter proof works for all k), and put the k-dependence of the
*converse* into the Remark, where it belongs.**

**D.4.3 "Compactness of K_n" vs "de Bruijn–Erdős".** Rorabaugh–Tardif–Wehlau reformulate
DBE as "K_n is compact" in a homomorphism/CSP framework. That framework is not in this
library. **Recommendation: quote their Corollary 4.2 with a one-line translation
("`K_n` is compact" means exactly "every graph all of whose finite subgraphs are
n-colourable is n-colourable", since a k-colouring is a homomorphism to K_k), and do not
import the CSP vocabulary.** The translation is stated in their own §4, first paragraph,
so it is not an interpolation.

**D.4.4 "Locally k-chromatic" (Gasarch–Hirst) = "every finite subgraph is k-colourable".**
Their Definition 1. **Recommendation: do not adopt "locally k-chromatic" — it collides
with "locally finite" and "local colouring" — but cite it when quoting their Theorem 2.**

---

## E. Prerequisite audit

The target library **HAS**: finite sets, posets, graphs, trees, Menger in all four forms,
Ford–Fulkerson, Hall / König / Gallai / Berge, the ultrafilter lemma, König's infinity
lemma for ordered trees, vector spaces and rank; and it declares **AC, countable choice
and dependent choice** as adopted foundational axioms. It does **NOT** have the spectral
theorem, measure theory, or algebraic topology.

### E.2 Gap 2

| result | needs | library has it? |
|---|---|---|
| Tutte–Berge formula (Schrijver route) | Berge's augmenting-path theorem; symmetric difference of matchings; finite induction | **yes, all of it** |
| Tutte's 1-factor theorem | Tutte–Berge | yes (Diestel also proves it independently) |
| ρ(G) = max(|U|+o(U))/2 | Gallai's identity α+τ = |V| = ν+ρ | **yes** — but verify the library publishes the *second* equality, not only the first |
| Gallai–Edmonds (West route) | **Hall's theorem only**, plus finite parity counting | **yes** |
| Gallai–Edmonds (Chekuri route) | Edmonds' algorithm and blossoms first | **no** — costs the algorithm items first |
| factor-critical basics | nothing beyond finite graphs | yes |
| Edmonds' blossom algorithm, correctness | Berge; graph contraction/shrinking as an operation | **shrinking must be defined** — Diestel has contraction for minors; check whether the library publishes edge/vertex-set contraction as a named operation. If not, that is a small definition item, **[A], 3 steps** |
| Edmonds' blossom algorithm, O(\|V\|²\|E\|) | an algorithmic cost model | **no — omit.** The library has no complexity vocabulary; state the algorithm and its correctness, and put the running time in a `rem-` with `proved_here: false` |
| Petersen (bridgeless cubic) | Tutte's theorem; edge-cut parity (d(S) ≡ Σ_{v∈S} d(v) mod 2) | **yes**, given Tutte; the parity lemma is 2 steps inline |
| Sylvester-graph counterexample | nothing | yes |
| 2-factor theorem (2k-regular ⟹ 2-factorable) | **Euler's theorem** (connected + all degrees even ⟹ Euler tour) and König's 1-factor corollary | **Euler's theorem is NOT in the stated inventory.** It is itself **[A], ~8 steps**, and worth minting as its own item — it unlocks this and much else |
| König–Ore formula | Hall | yes |

**Two prerequisite gaps to flag to the scaffolder: (a) Euler's theorem, (b) contraction
of a vertex set as a named operation.** Both are cheap and both are needed by more than
one item on this page.

### E.3 Gap 3

| result | needs | library has it? |
|---|---|---|
| existence of *R* by the inductive construction | ℕ-indexed unions of graphs; power set of a finite set | **yes** |
| existence by the BIT construction | binary expansions of naturals; finite sums of powers of 2 | **yes** — but confirm the library publishes base-2 representation; if not it is **[A], ~6 steps** |
| existence by the universal-sequence construction | concatenation of an enumeration of finite binary strings | **yes** |
| uniqueness by back-and-forth | a fixed enumeration of each vertex set; primitive recursion; unions of a chain of finite functions | **yes — and no choice, see §C.3.3** |
| homogeneity | uniqueness proof, restarted from a finite isomorphism | yes |
| universality | the "go forth" half only | yes |
| vertex-transitivity | homogeneity | yes |
| indestructibility (finite deletion / edge changes / switching) | Proposition 1 | yes |
| *R* ≅ complement of *R* | (∗) is self-complementary | yes |
| partition property (finite parts) | (∗) | yes |
| the converse characterisation (Diestel 8.3.2) | (∗), plus a minimal-counterexample argument | yes |
| Henson graphs R^r | the same machinery | yes |
| **Erdős–Rényi almost-sure statement** | **product probability measure on 2^{[ℕ]²}, countable additivity, independence** | **NO — defer with reason "rests on a measure-theory level"** |
| the finite counting substitute (§C.3.6) | binomial coefficients, (1−x)^N ≤ e^{−xN} | **yes** — confirm the library has the exponential bound or prove it inline (2 steps by 1−x ≤ e^{−x}) |
| Baire-category version | complete metric spaces + Baire category theorem (which needs DC) | **NO — omit; do not offer as the substitute** |
| ∈-graph of a countable model of set theory | Löwenheim–Skolem | **NO — remark only** |
| quadratic-residue construction | quadratic reciprocity, CRT, **Dirichlet** | **NO — remark only, `proved_here: false`** |
| Fraïssé limits, ℵ₀-categoricity, Aut(R) | first-order logic, permutation groups, Polish topology | **NO — all remarks** |

### E.4 Gap 4

| result | needs | library has it? |
|---|---|---|
| DBE for countable *G* | König's infinity lemma for ordered trees; a fixed enumeration; finite sets of colourings canonically ordered | **yes — the library publishes exactly this lemma, "in ZF"** |
| DBE for arbitrary *G*, ultrafilter route | **the ultrafilter lemma**; finite intersection property; the fact that an ultrafilter meets exactly one block of a finite partition of a member | **yes** — the last fact is 2 steps inline |
| DBE by Tychonoff | product topology, compactness, finite intersection property | **no — omit** |
| the converse (DBE_k ⟹ ultrafilter lemma, k ≥ 3) | Läuchli's Boolean-algebra-to-graph construction, or Rorabaugh–Tardif–Wehlau's filtered-power argument | **no — this is the documented `proved_here: false` last resort** |
| DBE₂ ⟺ Choice(2) | Mycielski's argument | **no — remark only** |

**Note for the proof-contract file:** the DBE items are exactly the kind CLAUDE.md's
"choice cost in the Statement" rule was written for. Item 1's Statement should say
"in ZF"; item 2's should say "from the ultrafilter lemma"; and the Remark should say
that item 2's hypothesis cannot be weakened, citing the converse.

---

## F. Blockers

**F.1 — Lovász & Plummer, _Matching Theory_: only a chapter list obtained.**
Chapters 1–12 plus the AMS Chelsea appendix are known (1 Matchings in bipartite graphs ·
2 Flow theory · 3 Size and structure of maximum matchings · 4 Bipartite graphs with
perfect matchings · 5 General graphs with perfect matchings · 6 Some graph-theoretical
problems related to matchings · 7 Matching and linear programming · 8 Determinants and
matchings · 9 Matching algorithms · 10 The f-factor problem · 11 Matroid matching ·
12 Vertex packing and covering · Appendix: Developments in matching theory since this
book was first published). **No section-level or named-result-level contents could be
reached.** What was tried:
- `https://www.ams.org/books/chel/367/chel367-frontmatter.pdf` and `…-endmatter.pdf`
  (with a same-host `Referer`) — both return **HTML**, not PDF; the AMS serves a
  paywall/interstitial page under a `.pdf` path.
- `https://bookstore.ams.org/view?ProductCode=CHEL/367.H` and
  `https://www.ams.org/books/chel/367/` — **HTTP 403** to WebFetch.
- ScienceDirect `bookseries/annals-of-discrete-mathematics/vol/29/suppl/C` — **HTTP 403**.
- K10plus OPAC (`opac.k10plus.de`) full-text search — returns a 4 kB session page with no
  Inhaltsverzeichnis link.
- Google Books API `volumes?q=intitle:"Matching Theory"+inauthor:Lovasz` — returned an
  empty body (quota).
**Consequence for the source-depth rule: this book cannot satisfy clause (b)/(c), so it
must NOT be counted as one of the Gap-2 pair's two independent treatments.** It is not
needed — Bondy–Murty ch. 16 (full text, full contents, textbook) and Schrijver
(full text, full TOC, 221-page course notes) already satisfy the rule, with West's
_EJC_ paper and Chekuri's notes as further independent treatments. **Untried routes for
a future session:** a HathiTrust catalog snippet search on the North-Holland 1986
printing; the Elsevier "Annals of Discrete Mathematics" series volume page via a
different user-agent; a Library of Congress MARC 505 lookup (the route that failed for
Bollobás but is worth one try here).

**F.2 — Bondy & Murty GTM 244 obtained via a third-party GitHub mirror**, not a
publisher source. Unchanged from the run's earlier harvest (§F.3 there): the mathematics
is verbatim and the contents are reliable, but the reader-facing URL in any
`sources.references` must be the Springer product page
`https://link.springer.com/book/10.1007/978-1-84628-970-5`.

**F.3 — Three historical papers obtained as bibliographic records only, not full text.**
None is load-bearing, because an open source proves or states each result:
- **Läuchli 1971**, _Israel J. Math._ 9, 422–429, DOI `10.1007/BF02771458` — Springer
  paywall. **Covered:** Rorabaugh–Tardif–Wehlau §4 reproves it in full (their Lemma 4.1
  + Corollary 4.2) and attributes it.
- **Mycielski 1961**, _Acta Math. Acad. Sci. Hungar._ 12, 125–129 — no open copy found.
  **Covered:** Rorabaugh–Tardif–Wehlau state the result on their p. 9 and cite it as [8].
- **Łoś & Ryll-Nardzewski 1954** and **Rubin & Scott 1954** (Tychonoff-for-Hausdorff ⟺
  BPI) — bibliographic records only. **Not needed** (§C.4.5); if the scaffolder states
  that equivalence it must be a source-cited Remark, not a proved item.

**F.4 — Two defects found in secondary sources; do not propagate them.**
- **Chekuri, Lecture 8, Theorem 5, clause 4** reads "Each component in G − A(G) is
  factor-critical." Taken literally with clauses 2 and 3 this is false, because clause 2
  puts the *even* components of G−A(G) inside C(G) and a factor-critical graph has odd
  order. His own Lemma 10(2) proves it only for components of G[D(G)]. **Scaffold West's
  Theorem 5(b) instead.**
- **West's paper, Theorem 5(c)** prints "N_G(S) has a vertex in least |S| + 1 of
  G₁, …, G_k" — a typo for "at least". Confirmed against Chekuri's Lemma 8. **Quote it
  with the correction and say so**, or quote Chekuri.
- **Bondy–Murty Exercise ⋆16.1.14(b)** — "every vertex of a connected nontrivial graph is
  covered by some maximum matching" — is stated without a factor-critical caveat and, as
  printed, is exactly the definition of *inessential*, so it asserts that connected
  nontrivial graphs have no essential vertex, which is false (K₂ has two). It is an
  exercise, not a theorem, and their Exercise ⋆16.1.15(a) asks for graphs with **no**
  essential vertices, so the two read inconsistently. **Do not cite ⋆16.1.14(b); use
  16.1.14(a), which is correct.**

**F.5 — Not a blocker, but a correction for the run's records.** The run's earlier
graph-theory harvest points forward to a "§C.13" for Shannon's bound, Vizing's multigraph
theorem, the Tutte–Berge formula and the full Gallai–Edmonds theorem. **That section was
never written; this file is its replacement.** Any future reader following the §C.13
pointer in `subjects-01-combinatorics-harvest-graphtheory.md` (at its lines ~1576 and
~2016) should be sent here instead.

**F.6 — The Gap-1 research lane (edge colouring for multigraphs) was run as a separate
dispatch.** See §A.1/§B.1/§C.1 above for its result, and §F.7 for its own blockers.
