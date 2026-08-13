# subjects-01 · combinatorics lane — GAP-FILL source harvest

Closes the four topics that `research/subjects-01-combinatorics-harvest-graphtheory.md`
promised in a "§C.13" it never wrote:

| gap | topic | status | where |
|---|---|---|---|
| 1 | edge colouring beyond Vizing's simple-graph theorem | **closed** (Goldberg–Seymour statement-only, as licensed) | **Part II** |
| 2 | matching beyond Tutte's 1-factor theorem | **closed** | Part I |
| 3 | infinite graphs — the Rado graph | **closed** | Part I |
| 4 | de Bruijn–Erdős and the exact choice principle | **closed, with a sourced equivalence** | Part I |

Everything below is quoted from sources actually opened and read in this session; page
locators are PDF-page or printed-page as marked. Wikipedia and encyclopedia entries were
used nowhere as primary backing.

**Headline answer, Gap 4** (full detail at §C.4): for each fixed **k ≥ 3**, the
de Bruijn–Erdős theorem is **equivalent** to the ultrafilter lemma / Boolean prime ideal
theorem over ZF — Läuchli 1971, reproved openly as Corollary 4.2 of
Rorabaugh–Tardif–Wehlau, *LMCS* 13(1:1) 2017, and catalogued as Howard–Rubin **Form
14 G(n)**. For **k = 2** it is equivalent to Choice(2) (Mycielski 1961), strictly weaker.
For **countable** *G* with a given enumeration it is a **ZF theorem** — Gasarch–Hirst
place it exactly at WKL₀ over RCA₀, a choice-free system, and the library's own
`thm-konig-infinity-lemma-for-ordered-trees` proves it.

**The file is in two parts.** Part I (below) covers gaps 2, 3 and 4. **Part II** covers
gap 1 and carries its own A–F; its internal section labels are local to it.

---

# PART I — GAPS 2, 3 AND 4

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

**Better still — and this is a correction in the library's favour.** The library
publishes **`def-erdos-renyi-random-graph`, "The Erdős–Rényi *finite* random graph
G(n,p)"**, together with `def-finite-probability-space-and-event`,
`def-uniform-finite-probability-space`, `def-product-of-finite-probability-spaces` and
`lem-finite-probability-basic-laws` (verified against `items/`; see §E.1). **So the
substitute can be stated as an honest probability statement over a finite space, not as
raw counting:**

> For fixed m, n ≥ 0, ℙ[G(k, ½) has the (m,n)-extension property] → 1 as k → ∞, with the
> explicit bound ℙ[failure] ≤ C(k,m)·C(k−m,n)·(1 − 2^{−(m+n)})^{k−m−n}.

Every ingredient — the finite product space, the union bound, independence of finitely
many coordinates — is a published finite-probability item. **This is what the scaffolder
should offer in place of the Erdős–Rényi almost-sure theorem**, and the Remark should say
plainly that the infinite statement needs a measure on an infinite product and is
deferred until the library has a measure-theory level.

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
| Tychonoff on {1,…,k}^V | arbitrary *G* | **exactly BPI** (each factor is finite discrete, hence compact Hausdorff) | **`thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma` — published, and stated with the ultrafilter lemma as an explicit hypothesis** | 7–9, **[A], IN SCOPE** |
| Diestel's Appendix-A compactness principle | arbitrary *G* | BPI (it is a repackaging of the ultrafilter argument) | — | ~6 |

**The Tychonoff row's justification, and a correction in the library's favour.**
Tychonoff's theorem *restricted to Hausdorff spaces* is equivalent to BPI over ZF —
Łoś & Ryll-Nardzewski, "Effectiveness of the representation theory for Boolean algebras",
_Fund. Math._ **41** (1954), 60–62, and Rubin & Scott, "Some topological theorems
equivalent to the Boolean prime ideal theorem", _Bull. Amer. Math. Soc._ **60** (1954),
389. {1,…,k}^V with discrete finite factors is compact Hausdorff, so Diestel's third
proof spends BPI and no more. **I did not obtain either 1954 paper's full text (§F.3), so
the *equivalence* must be a source-cited Remark if it is stated at all — but the
implication the proof needs is already published:**
`thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma` states "Assume the
ultrafilter lemma. If (X_i) is any family of compact Hausdorff spaces, then ∏X_i is
compact." **So Diestel's third proof is directly available to this library**, giving it
a genuine second route to the general theorem at the same choice cost. Whether to write
both routes is a scaffolder judgement; the ultrafilter route (§C.4.5 below) is shorter
and needs no topology, so it should be the *proof*, with the Tychonoff route recorded as
a cited alternative in the Remark.

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

### E.1 What I verified against the actual `items/` directory (not against the brief)

The brief's inventory summary is accurate but **understates** what is available, in five
ways that change the dispositions below. All of the following were confirmed by reading
the item files:

- **`thm-eulers-euler-circuit-characterisation`** — "Euler's theorem and Hierholzer's
  construction: a connected finite undirected **multigraph** has an Euler circuit if and
  only if every degree is even". **Euler's theorem is published.** The 2-factor theorem's
  prerequisite gap I would otherwise have flagged does not exist.
- **`def-graph-deletion-contraction-minor-and-subdivision`** — deletion and contraction
  are published definitions.
- **`thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma`** — "**Assume the
  ultrafilter lemma.** If (X_i)_{i∈I} is any family of compact Hausdorff spaces, then
  ∏X_i, with its product topology, is compact." **Diestel's Tychonoff proof of
  de Bruijn–Erdős is therefore fully in scope**, and at exactly the right choice
  strength, resting on a published item. This corrects the "out of scope" row in §C.4.5.
- **`thm-konig-infinity-lemma-for-ordered-trees`** — verbatim from the item: "Let *T* be
  an ordered finitely branching tree of finite sequences. If every level T_n is nonempty,
  then *T* has an infinite branch. The branch is constructed in ZF by least successors
  and natural recursion; **no choice principle is used**." This is an exact fit for the
  countable de Bruijn–Erdős tree (§C.4.4) — the levels are finite sets of functions into
  {1,…,k}, i.e. finite sequences, canonically ordered.
- **Finite probability is published**: `def-finite-probability-space-and-event`,
  `def-uniform-finite-probability-space`, `def-product-of-finite-probability-spaces`,
  `def-expectation-on-a-finite-probability-space`, `lem-finite-probability-basic-laws`,
  and **`def-erdos-renyi-random-graph`** ("The Erdős–Rényi **finite** random graph
  G(n,p)"). **This upgrades the Gap-3 substitute in §C.3.6**: it need not be stated as
  raw counting, it can be stated as a probability over the finite space G(n,½) — the
  library's own object — with no measure theory anywhere.

And two confirmations of genuine holes:
- **No Tutte 1-factor theorem, no Tutte–Berge, no Gallai–Edmonds, no factor-critical
  item.** Matching stops at `def-matching-maximum-perfect-and-matching-number`,
  `thm-berge-augmenting-path-characterisation`, `lem-symmetric-difference-of-two-
  matchings`, `thm-konig-bipartite-matching-cover`, `thm-hall-marriage-finite-bipartite`,
  `cor-hall-deficiency-formula`, `thm-gallai-matching-edge-cover-identity`,
  `prop-bipartite-matching-flow-model`. **Gap 2 is real and the whole of §C.2 is new.**
- **No edge colouring of any kind** — no chromatic-index item, no edge-colouring
  definition. Vertex colouring is well covered
  (`def-proper-vertex-colouring-and-chromatic-number`, five- and six-colour theorems,
  greedy bound, …), and **`lem-kempe-component-colour-swap` and
  `ex-five-colouring-by-a-kempe-swap` are published**, so the Kempe-chain machinery
  Gap 1 needs already exists. **Gap 1 is real and starts from a definition.**
- **No Rado graph, no de Bruijn–Erdős, no infinite-graph colouring item.** Gaps 3 and 4
  are real. (`def-erdos-renyi-random-graph` is the *finite* G(n,p) and is unrelated.)

**The library's matching notation is ν(G)**, confirmed from
`def-matching-maximum-perfect-and-matching-number`: "Matchings, saturated vertices,
maximal and maximum matchings, perfect matchings and $\nu(G)$". §D.2.3's recommendation
is therefore not a recommendation but a requirement: **use ν, never α′.**

### E.2 Gap 2

| result | needs | library has it? |
|---|---|---|
| Tutte–Berge formula (Schrijver route) | Berge's augmenting-path theorem; symmetric difference of matchings; finite induction | **yes, all of it** |
| Tutte's 1-factor theorem | Tutte–Berge | yes (Diestel also proves it independently) |
| ρ(G) = max(|U|+o(U))/2 | Gallai's identity α+τ = |V| = ν+ρ | **yes** — but verify the library publishes the *second* equality, not only the first |
| Gallai–Edmonds (West route) | **Hall's theorem only**, plus finite parity counting | **yes** |
| Gallai–Edmonds (Chekuri route) | Edmonds' algorithm and blossoms first | **no** — costs the algorithm items first |
| factor-critical basics | nothing beyond finite graphs | yes |
| Edmonds' blossom algorithm, correctness | Berge; graph contraction/shrinking as an operation | **yes** — `def-graph-deletion-contraction-minor-and-subdivision` is published. It defines contraction of an *edge*; blossom shrinking contracts a connected *vertex set*, so check whether that generalisation is already in the item and, if not, mint it (**[A], 3 steps**) |
| Edmonds' blossom algorithm, O(\|V\|²\|E\|) | an algorithmic cost model | **no — omit.** The library has no complexity vocabulary; state the algorithm and its correctness, and put the running time in a `rem-` with `proved_here: false` |
| Petersen (bridgeless cubic) | Tutte's theorem; edge-cut parity (d(S) ≡ Σ_{v∈S} d(v) mod 2) | **yes**, given Tutte; the parity lemma is 2 steps inline |
| Sylvester-graph counterexample | nothing | yes |
| 2-factor theorem (2k-regular ⟹ 2-factorable) | **Euler's theorem** (connected + all degrees even ⟹ Euler circuit) and König's 1-factor corollary for regular bipartite graphs | **yes** — `thm-eulers-euler-circuit-characterisation` is published *for multigraphs*, which is what this proof needs; and `thm-konig-bipartite-matching-cover` plus Hall give the bipartite 1-factor |
| König–Ore formula | Hall | yes |

**One prerequisite item to check rather than assume:** whether
`def-graph-deletion-contraction-minor-and-subdivision` covers contraction of a connected
**vertex set** (blossom shrinking) or only of a single edge. Everything else Gap 2 needs
is published.

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
| the finite substitute (§C.3.6) | finite probability spaces, finite products, union bound, (1−x)^N ≤ e^{−xN} | **yes, all published** — `def-finite-probability-space-and-event`, `def-product-of-finite-probability-spaces`, `def-erdos-renyi-random-graph`, `lem-finite-probability-basic-laws`; prove the exponential bound inline (2 steps from 1−x ≤ e^{−x}) if it is not already there |
| Baire-category version | complete metric spaces + Baire category theorem (which needs DC) | **NO — omit; do not offer as the substitute** |
| ∈-graph of a countable model of set theory | Löwenheim–Skolem | **NO — remark only** |
| quadratic-residue construction | quadratic reciprocity, CRT, **Dirichlet** | **NO — remark only, `proved_here: false`** |
| Fraïssé limits, ℵ₀-categoricity, Aut(R) | first-order logic, permutation groups, Polish topology | **NO — all remarks** |

### E.4 Gap 4

| result | needs | library has it? |
|---|---|---|
| DBE for countable *G* | König's infinity lemma for ordered trees; a fixed enumeration; finite sets of colourings canonically ordered | **yes — the library publishes exactly this lemma, "in ZF"** |
| DBE for arbitrary *G*, ultrafilter route | **the ultrafilter lemma**; finite intersection property; the fact that an ultrafilter meets exactly one block of a finite partition of a member | **yes** — the last fact is 2 steps inline |
| DBE by Tychonoff | product topology, compactness of a product of compact Hausdorff spaces from the ultrafilter lemma, finite intersection property | **yes** — `thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma` is published; also `thm-compactness-via-nets-filters-and-ultrafilters` and `cor-tychonoff-spaces-have-compactifications-under-the-ultrafilter-lemma`. Available as a second route, at the same choice cost |
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
dispatch and is reproduced in full as Part II below**, with its own source ledger,
verbatim headings harvest, mathematical detail, conventions, prerequisite audit and
blockers (Part II §F1–§F8). Its headline results: **Shannon's ⌊3Δ/2⌋ bound has a
complete 16-step route** from Kostochka's UIUC Math 412 slides; **Vizing's multigraph
theorem χ′ ≤ Δ + μ has a complete route from Vizing's own 1964 paper**, obtained in
English translation from the author-hosted back matter of Stiebitz–Scheide–Toft–Favrholdt
at `https://www.tu-ilmenau.de/fileadmin/Bereiche/MN/komgra/BackMatterWiley.pdf`; and
**Goldberg–Seymour is statement-only and explicitly labelled as such**, with the cheap
lower bound χ′ ≥ ⌈Γ(G)⌉ separated out as a 4-step item. Part II also flags one
**unproved, unsourced** exercise (Bondy–Murty Ex. 17.2.8a, χ′ ≤ 2Δ − μ) that must not be
scaffolded, and marks every proof step it supplied where a source left a gap.

**Two cross-part dependencies the scaffolder must not miss.**
- Part II §C1.3's supplementary even-Δ route to Shannon needs **Petersen's 2-factor
  theorem**, which Part I §C.2.5 costs out at **[A], ~8 steps** and confirms is fully in
  scope (the library publishes Euler's theorem for multigraphs). Part II records it as
  absent; Part I supplies the route.
- Part II §C5.1 Route K-b (König for bipartite multigraphs via optimal colourings) also
  rests on Euler circuits in multigraphs, which the library has. **The two gaps share this
  prerequisite; build it once.**


---
---

# PART II — GAP 1: EDGE COLOURING BEYOND VIZING'S SIMPLE-GRAPH THEOREM

*Researched as a separate dispatch and reproduced here in full. **Section labels inside
this Part are internal to it**: a reference below to "§B3", "§C4", "§D2" or "§E" means
Part II's own §B3, §C4, §D2, §E — not Part I's. Part I's sections are §A.2–§A.4,
§B.2–§B.4, §C.2–§C.4, §D.2–§D.4, §E.1–§E.4 and §F.1–§F.6.*

*Legend, unchanged from Part I: **[A]** ≤ 12 numbered steps · **[B]** 12–30 · **[C]** out
of reach for a single library item.*

### A. SOURCE LEDGER

Legend for **form**: `FULL` = the actual mathematical text of the stated range was
read; `TOC` = table of contents / headings only; `APPENDIX` = a specific appendix
of a book, verbatim, but not the body chapters.

#### A1 — PRIMARY (textbook / monograph / thesis, harvestable headings)

| # | Source | URL / local path | Form | Exact range read |
|---|---|---|---|---|
| S1 | J. A. Bondy and U. S. R. Murty, *Graph Theory*, Graduate Texts in Mathematics 244, Springer, 2008 | local `/tmp/gtm244.pdf` (654 pp, text layer extracts cleanly); mirror obtained earlier this run at `https://raw.githubusercontent.com/chanqi4444/GTM/master/GTM244.Graph.Theory,.Bondy,.J.A.,.Murty,.U.S.R.,.(2007,.ISBN.978-1-84628-969-9).1846289696.pdf` | FULL for §17.1–17.2; TOC-level for §17.3–17.6 | Chapter 17 "Edge Colourings", pp. 451–470 (PDF pages 453–472). §17.1 and §17.2 read in full including every exercise; §17.3–17.6 read at heading + named-result level. |
| S2 | J. A. Bondy and U. S. R. Murty, *Graph Theory with Applications*, North-Holland, 1976 | local `/tmp/bondy_murty_1976.pdf` (270 pp, OCR text layer, legible but with OCR noise: `X'` for χ′, `~`/`b..`/`A` for Δ, `IL`/`lot` for μ); free full scan at `https://www.zib.de/groetschel/teaching/WS1314/BondyMurtyGTWA.pdf` | FULL | Chapter 6 "Edge Colourings", pp. 91–100 (PDF pages 98–107): §6.1 Edge Chromatic Number, §6.2 Vizing's Theorem, §6.3 The Timetabling Problem, plus the chapter reference list. |
| S3 | M. Stiebitz, D. Scheide, B. Toft, L. M. Favrholdt, *Graph Edge Coloring: Vizing's Theorem and Goldberg's Conjecture*, Wiley-Interscience Series in Discrete Mathematics and Optimization, John Wiley & Sons, 2012, ISBN 9781118091371 | TOC confirmed independently from `https://searchworks.stanford.edu/view/9626841` and `https://vdoc.pub/documents/graph-edge-coloring-vizings-theorem-and-goldbergs-conjecture-2cu9l3i7p1qg`; **author-hosted front and back matter (Ilmenau, Stiebitz's institution)** at `https://www.tu-ilmenau.de/fileadmin/Bereiche/MN/komgra/FrontMatterWiley.pdf` and `https://www.tu-ilmenau.de/fileadmin/Bereiche/MN/komgra/BackMatterWiley.pdf` | TOC (whole book) + APPENDIX (verbatim) | Front matter pp. vii–ix (the printed Contents, read verbatim from the author-hosted PDF). Back matter pp. 269–322 read in full: **Appendix A "Vizing's Two Fundamental Papers" pp. 269–280** (English translations of Vizing 1964 and Vizing 1965, complete with proofs), **Appendix B "Fractional Edge Colorings" pp. 281–294**, References pp. 295–311, Symbol/Name/Subject indexes pp. 312–322. Body chapters 1–9 NOT obtained. |
| S4 | Jessica M. McDonald, *Multigraphs with High Chromatic Index*, PhD thesis, University of Waterloo, 2009 | local `/tmp/edgecolor/mcdonald-thesis.pdf` (115 pp) | FULL for Ch. 1–3; TOC for Ch. 4–7 | Abstract, Contents, Chapter 1 "Introduction" pp. 1–4, Chapter 2 "Edge-colourings, alternating paths and Tashkinov trees" §2.1–2.3.1 pp. 5–17, Chapter 3 "Achieving maximum chromatic index" pp. 27–37 in full. |
| S5 | R. Diestel, *Graph Theory*, 5th ed., §5.3 "Colouring edges" | local `/tmp/edgecolor/diestel-full.pdf` (422 pp) | FULL | §5.3, pp. 119–121 (PDF pages 129–131). Read only to characterise the *simple-graph* fan for the comparison in §C4; this is the section the library already harvested. |
| S6 | A. V. Kostochka, Math 412 "Introduction to Graph Theory", University of Illinois Urbana-Champaign, Sections C13/C14, lecture slides | `http://kostochk.web.illinois.edu/math412-10/Lec36-f25.pdf` and `.../Lec37-f25.pdf` (verified live this session; byte sizes 313734 and 244206 match the local copies at `/tmp/edgecolor/m412/Lec36.pdf`, `Lec37.pdf`); course page `http://kostochk.web.illinois.edu/math412-10/` | FULL | Lecture 36 (11 slides) and Lecture 37 (11 slides). Lecture 36 defines edge colouring, line graphs, χ′ ≥ Δ, χ′ ≤ 2Δ−2, and begins Shannon's Theorem; **Lecture 37 completes the proof of Shannon's Theorem** and states Vizing/Tait, then moves to Hamiltonicity. |
| S7 | D. B. West, *Introduction to Graph Theory*, 2nd ed., Prentice-Hall — **Instructor's Solution Manual**, Section 7.1 "Line Graphs and Edge-Coloring" | local `/tmp/gsrc/dok.html` (a `dokumen.pub` mirror captured earlier this run; the live page now returns "website under maintenance") | PARTIAL (solutions to §7.1 exercises only, not the main text) | Solutions 7.1.32–7.1.35 and 7.1.39 read verbatim. This yields West's exercise statements 7.1.34 (Shannon's bound "almost") and 7.1.35 (the Ore and Andersen–Goldberg bounds). |

#### A2 — PRIMARY (research papers, with full proofs of their own results)

| # | Source | URL / local path | Form | Range read |
|---|---|---|---|---|
| S8 | G. Chen, G. Jing, W. Zang, "Proof of the Goldberg-Seymour Conjecture on Edge-Colorings of Multigraphs", arXiv:1901.10316 (v1 29 Jan 2019, v2 7 Jun 2022), 81 pp. Journal version: *J. Comb. Optim.* (2025), DOI `10.1007/s10878-025-01348-6` | downloaded to `/tmp/gapfill/cjz.pdf` from `https://arxiv.org/pdf/1901.10316v2`; abstract page `https://arxiv.org/abs/1901.10316` | FULL for §1–§2.1; section headings for the rest | Abstract and §1 "Introduction" pp. 1–5, §2.1 "Terminology and Notation" p. 6, plus every section heading. |
| S9 | J. Misra and D. Gries, "A Constructive Proof of Vizing's Theorem" (Sept 1990; published *Inf. Process. Lett.* 41 (1992) 131–133) | local `/tmp/edgecolor/misra-gries.pdf` (4 pp) | FULL | All 4 pages. |
| S10 | Y. Cao, G. Chen, S. Shan, "Overfullness of critical class 2 graphs with a small core degree", arXiv:2008.08135v1 (18 Aug 2020), 31 pp | local `/tmp/edgecolor/critical-overfull.pdf` | FULL for §1–§2.3 | §1 "Introduction" pp. 1–3 and §2 "Preliminaries" §2.1–2.3 pp. 4–8. Source for the modern statement of **VAL**, of **overfull**, of **multifan** and of **Kierstead path**. |
| S11 | S. Shan, "Towards the Overfull Conjecture", arXiv:2308.16808v4 (5 Sep 2024), 44 pp | local `/tmp/edgecolor/overfull1.pdf` | FULL for §1–§2.1 | Abstract, §1 "Introduction" pp. 1–3, §2 "Notation and preliminaries" p. 4. |
| S12 | M. G. Dunaway, *Generalizing Vizing's Theorem to Multigraphs*, MSc Mathematical Literature and Problems project, Portland State University (dir. J. Caughman) — an exposition of **C. Berge and J. C. Fournier, "A short proof for a generalization of Vizing's theorem", J. Graph Theory 15 (1991) 333–336** | local `/tmp/edgecolor/dunaway.pdf` (25 pp) | FULL | All 25 pages. |
| S13 | P. Aboulker, G. Aubian, C.-C. Huang, "Vizing's and Shannon's Theorems for Defective Edge Colouring", *Electron. J. Combin.* 29(4) (2022) #P4.1, `https://doi.org/10.37236/11049` | local `/tmp/edgecolor/aboulker.pdf` (13 pp) | SKIMMED | §1 Introduction. Used only for a cross-check on the statements of Shannon and Vizing–Gupta; the paper's own subject (defective colouring) is out of scope. |

#### A3 — SUPPORTING / TIEBREAKER ONLY (never a pair's primary backing)

| # | Source | Path | Use |
|---|---|---|---|
| S14 | R. Green, "Vizing's Theorem and Edge-Chromatic Graph Theory", UChicago REU 2015 | `/tmp/edgecolor/green-reu.pdf` | Contains a *broken* attempted proof of Shannon (p. 6, the argument is cut off mid-sentence and the Vizing proof on p. 2 has an uninstantiated "colour {v,wj} blue"). **Do not use.** Recorded only so nobody re-fetches it. |
| S15 | RPI edge-colouring slides | `/tmp/edgecolor/rpi-edgecol.pdf` | States Shannon and Vizing with "Proof. Not obvious." — no proofs. Gives a variant density parameter ω(G). |

---

### B. VERBATIM HEADINGS HARVEST

#### B1 — Bondy & Murty 2008 (S1), Chapter 17, the chapter's own Contents page, verbatim

> 17 Edge Colourings
> Contents
> 17.1 Edge Chromatic Number . . . 451
>   Edge Colourings of Bipartite Graphs . . . 452
> 17.2 Vizing's Theorem . . . 455
> 17.3 Snarks . . . 461
> 17.4 Coverings by Perfect Matchings . . . 464
>   Fulkerson's Conjecture . . . 465
> 17.5 List Edge Colourings . . . 466
>   The List Edge Colouring Conjecture . . . 467
>   Galvin's Theorem . . . 467
> 17.6 Related Reading . . . 470
>   Total Colourings . . . 470
>   Fractional Edge Colourings . . . 470

Named results and named exercises in the range, verbatim:

- "Example 17.1 The Timetabling Problem"
- "Theorem 17.2 If G is bipartite, then χ′= ∆."
- "Lemma 17.3 Let G be a simple graph, v a vertex of G, e an edge of G incident to v, and k an integer, k ≥ ∆. Suppose that G \ e has a k-edge-colouring c with respect to which every neighbour of v in G has at least one available colour. Then G is k-edge-colourable."
- "Theorem 17.4 Vizing's Theorem — For any simple graph G, χ′ ≤ ∆ + 1."
- "Theorem 17.5 For any graph G, χ′ ≤ ∆ + µ."
- "17.1.14 Kirkman's Schoolgirl Problem"
- "17.1.16 Gupta's Theorem"
- "17.2.1 Overfull Graph"
- "17.2.10 Uniquely Edge-Colourable Graph"
- "17.2.15 Vizing's Adjacency Lemma"
- "Conjecture 17.6 Every 2-connected cubic graph admits a double cover by six perfect matchings." (Fulkerson)
- "Conjecture 17.7 Every 2-connected cubic graph admits a covering by five perfect matchings."
- "Conjecture 17.8 For every loopless graph G, χ′…" (the List Edge Colouring Conjecture)
- "Theorem 17.9 Let G[X,Y] be a simple bipartite graph, and let D be an orien…" (Galvin)
- "Theorem 17.10 Every simple bipartite graph G is ∆-list-edge-colourable."
- Named exercises 17.3.2 "Blanuša Snark", 17.3.3 "Flower Snark", 17.3.5 "Meredith Graph", 17.4.5 "Perfect Matching Polytope", 17.4.7 "Matching Polytope".

**Disposition note for the harvest**: the range 17.1–17.2 is the part relevant to GAP 1. §17.3 (Snarks), §17.4 (Coverings by Perfect Matchings), §17.5 (List Edge Colourings), §17.6 (Related Reading: Total Colourings, Fractional Edge Colourings) are enumerated here so the scaffolder can dispose of them explicitly; they are outside GAP 1's remit.

#### B2 — Bondy & Murty 1976 (S2), Chapter 6, verbatim

> 6 Edge Colourings
> 6.1 EDGE CHROMATIC NUMBER
> 6.2 VIZING'S THEOREM
> APPLICATIONS
> 6.3 THE TIMETABLING PROBLEM
> REFERENCES

Named results, verbatim (OCR of χ′ is `X'`, of Δ is `~`/`A`/`b..`, of μ is `IL`/`lot`; I restore them and mark the restoration):

- "Lemma 6.1.1 Let G be a connected graph that is not an odd cycle. Then G has a 2-edge colouring in which both colours are represented at each vertex of degree at least two."
- "Lemma 6.1.2 Let 𝒞 = (E₁, E₂, …, E_k) be an optimal k-edge colouring of G. If there is a vertex u in G and colours i and j such that i is not represented at u and j is represented at least twice at u, then the component of G[E_i ∪ E_j] that contains u is an odd cycle."
- "Theorem 6.1 If G is bipartite, then X' = Δ."  [OCR `X' = ~`]
- "Theorem 6.2 If G is simple, then either X' = Δ or X' = Δ + 1."  — with the attribution "An important theorem due to Vizing (1964) and, independently, Gupta (1966) … The proof given here is by Fournier (1973)."
- Vizing's multigraph theorem is stated in prose, not as a numbered theorem: "We can now state Vizing's theorem in its full generality: if G is loopless, then Δ ≤ X' ≤ Δ + μ."
- "Lemma 6.3 Let M and N be disjoint matchings of G with |M| > |N|. Then there are disjoint matchings M' and N' of G such that |M'| = |M| − 1, |N'| = |N| + 1 and M' ∪ N' = M ∪ N."
- "Theorem 6.3 If G is bipartite and if p ≥ Δ, then there exist p disjoint matchings M₁, M₂, …, M_p of G such that (6.4) … and, for 1 ≤ i ≤ p (6.5)"
- Named exercises: 6.2.3 attributed "(V. G. Vizing)" and "(L. W. Beineke and R. J. Wilson)"; 6.2.4(b) with the parenthetical "(Shannon, 1949 has shown that this inequality also holds when Δ is odd.)"; 6.2.5 "(D. L. Greenwell and H. V. Kronk)"; 6.1.6 and 6.2.8 "(R. P. Gupta)".
- Chapter reference list, verbatim: Dempster (1971); Fournier, J.-C. (1973). Colorations des aretes d'un graphe. Cahiers du CERO, 15, 311–14; Gupta, R. P. (1966). The chromatic index and the degree of a graph. Notices Amer. Math. Soc., 13, abstract 66T-429; Shannon, C. E. (1949). A theorem on coloring the lines of a network. J. Math. Phys., 28, 148–51; Vizing, V. G. (1964). On an estimate of the chromatic class of a p-graph (Russian). Diskret. Analiz., 3, 25–30; de Werra, D. (1970).

*(The text at PDF page 105 refers to "theorem 6.4" and "theorem 6.3" for the same statement; there is no Theorem 6.4 in the chapter. This is an OCR/typo artefact of the print — treat "theorem 6.4" as "theorem 6.3".)*

#### B3 — Stiebitz, Scheide, Toft, Favrholdt 2012 (S3), the book's printed CONTENTS, verbatim

Read from the author-hosted `FrontMatterWiley.pdf`, pp. vii–ix, and cross-checked against Stanford SearchWorks.

> Preface xi
> 1 Introduction 1
>   1.1 Graphs 1
>   1.2 Coloring Preliminaries 2
>   1.3 Critical Graphs 5
>   1.4 Lower Bounds and Elementary Graphs 6
>   1.5 Upper Bounds and Coloring Algorithms 11
>   1.6 Notes 15
> 2 Vizing Fans 19
>   2.1 The Fan Equation and the Classical Bounds 19
>   2.2 Adjacency Lemmas 24
>   2.3 The Second Fan Equation 26
>   2.4 The Double Fan 31
>   2.5 The Fan Number 32
>   2.6 Notes 39
> 3 Kierstead Paths 43
>   3.1 Kierstead's Method 43
>   3.2 Short Kierstead's Paths 46
>   3.3 Notes 49
> 4 Simple Graphs and Line Graphs 51
>   4.1 Class One and Class Two Graphs 51
>   4.2 Graphs whose Core has Maximum Degree Two 54
>   4.3 Simple Overfull Graphs 63
>   4.4 Adjacency Lemmas for Critical Class Two Graphs 73
>   4.5 Average Degree of Critical Class Two Graphs 84
>   4.6 Independent Vertices in Critical Class Two Graphs 89
>   4.7 Constructions of Critical Class Two Graphs 93
>   4.8 Hadwiger's Conjecture for Line Graphs 101
>   4.9 Simple Graphs on Surfaces 105
>   4.10 Notes 110
> 5 Tashkinov Trees 115
>   5.1 Tashkinov's Method 115
>   5.2 Extended Tashkinov Trees 127
>   5.3 Asymptotic Bounds 139
>   5.4 Tashkinov's Coloring Algorithm 144
>   5.5 Polynomial Time Algorithms 148
>   5.6 Notes 152
> 6 Goldberg's Conjecture 155
>   6.1 Density and Fractional Chromatic Index 155
>   6.2 Balanced Tashkinov Trees 160
>   6.3 Obstructions 162
>   6.4 Approximation Algorithms 183
>   6.5 Goldberg's Conjecture for Small Graphs 185
>   6.6 Another Classification Problem for Graphs 186
>   6.7 Notes 193
> 7 Extreme Graphs 197
>   7.1 Shannon's Bound and Ring Graphs 197
>   7.2 Vizing's Bound and Extreme Graphs 201
>   7.3 Extreme Graphs and Elementary Graphs 203
>   7.4 Upper Bounds for χ′ Depending on Δ and μ 205
>   7.5 Notes 209
> 8 Generalized Edge Colorings of Graphs 213
>   8.1 Equitable and Balanced Edge Colorings 213
>   8.2 Full Edge Colorings and the Cover Index 222
>   8.3 Edge Colorings of Weighted Graphs 224
>   8.4 The Fan Equation for the Chromatic Index χ′_f 228
>   8.5 Decomposing Graphs into Simple Graphs 239
>   8.6 Notes 243
> 9 Twenty Pretty Edge Coloring Conjectures 245
> Appendix A: Vizing's Two Fundamental Papers 269
>   A.1 On an Estimate of the Chromatic Class of a p-Graph 269
>   References 272
>   A.2 Critical Graphs with a Given Chromatic Class 273
>   References 278
> Appendix B: Fractional Edge Colorings 281
>   B.1 The Fractional Chromatic Index 281
>   B.2 The Matching Polytope 284
>   B.3 A Formula for χ′_f 290
> References 295
> Symbol Index 312
> Name Index 314
> Subject Index 318

Named results in **Appendix A**, verbatim (this is the range I read in full):

- "Lemma A.1  A properly colored multigraph is still properly colored after recoloring a maximal (s,t)-path."
- "Lemma A.2  Let x, y and z be three different vertices in a properly colored multigraph G. Suppose that in each of x, y and z either the color s or the color t is missing. Then at least one of x, y and z is not contained in the same (s,t)-path as any of the two other vertices."
- "Theorem A.3  If m is the maximum degree in the p-graph G, then q(G) ≤ m + p."
- "Corollary A.4  If m is the maximum degree in the graph G, then m ≤ q(G) ≤ m + 1. Moreover, for each m ≥ 2 there is a graph G with σ(G) = m and q(G) = m + 1"
- "Lemma A.5  Let G be a graph with σ(G) = m and q(G) = m + 1. Then for any k satisfying m ≥ k ≥ 2 there exists a critical graph of degree k as a subgraph of G."
- "PROPERTY I. A critical graph of degree m cannot have a separating vertex."
- "PROPERTY II. The sum of the degrees of two adjacent vertices in a critical graph of degree m is ≥ m + 2."
- "PROPERTY III. In a critical graph of degree m each vertex is adjacent to at least two vertices of degree m."
- "Theorem A.6  In a critical graph of degree m each vertex incident with a vertex of degree k is in addition also incident with m − k + 1 vertices of degree m."
- "Theorem A.7  A critical graph of degree m contains an elementary cycle of length ≥ m + 1."
- "Theorem A.8  In a critical graph of degree m the number of edges is ≥ (3m² + 6m − 1)/8."
- "Theorem A.9  If G ∈ L_k and σ(G) ≥ 2k, then q(G) = σ(G)."
- "Theorem A.10  If G is planar and σ(G) ≥ 8, then q(G) = σ(G)."
- "Theorem A.11  χ′(G) ≤ Δ(G) + μ(G) − 1 for all graphs with μ(G) ≥ 2 and Δ(G) = 2μ(G) − 1."
- Appendix A also contains the section headings "DEFINITION OF A CRITICAL GRAPH OF DEGREE m AND ITS PROPERTIES" and "A METHOD FOR CLASSIFICATION OF GRAPHS", and the closing editorial "Notes".
- **Appendix B** named result: "Theorem B.1  Every weighted graph (G, f) satisfies χ′*_f(G) = min{ Σ_{M∈M_f(G)} w(M) | w ∈ R′_f(G) }."

Key bibliography entries confirmed verbatim from the book's References (pp. 295–311):

- "Shannon, C. E. (1949). A theorem on coloring the lines of a network. J. Math. Phys., 28:148–151."
- "Vizing, V. G. (1964). On an estimate of the chromatic class of a p-graph (in Russian). Diskret. Analiz, 3:25–30."
- "Vizing, V. G. (1965). The chromatic class of a multigraph (in Russian). Kibernetika (Kiev), 3:29-39. English translation in: Cybernetics and System Analysis, 1:32–41."
- "Vizing, V. G. (1965). Critical graphs with a given chromatic class …" (Diskret. Analiz 5, 9–17)
- "Gupta, R. P. (1967). Studies in the Theory of Graphs. Ph.D. Thesis, Tata Institute of Fundamental Research, Bombay."
- "Berge, C. and Fournier, J. C. (1991). A short proof for a generalization of Vizing's theorem. J. Graph Theory, 15:333–336."
- "Fournier, J. C. (1973). Coloration des arêtes d'un graphe. Cahiers Centre Études Recherche Opér., 15:311–314."
- "Fournier, J. C. (1977). Méthode et théorème général de coloration des arêtes d'un multigraphe. J. Math. Pures Appl., 56:437–453."
- "Kierstead, H. A (1984). A new method of proving theorems on chromatic index. Discrete Math., 52:159–164."
- "Goldberg, M. K. (1984). Edge-coloring of multigraphs: recoloring technique. J. Graph Theory, 8:123–137."
- "Seymour, P. (1979). On multicolorings of cubic graphs, and conjectures of Fulkerson and Tutte. Proc. London Math. Soc., 38:423–460."
- "Holyer, I. (1981). The NP-completeness of edge-colouring. SIAM J. Comput., 10:718–720."
- "Frink, O. (1926). A proof of Petersen's theorem. Ann. Math., 27:491–493."
- "Steffen, E. (2000). A refinement of Vizing's theorem. Discrete Math., 218:289–291."
- "Andersen, L. D. (1977). On edge-colourings of graphs. Math. Scand., 40:161–175."
- "Soifer, A. (2009). The Mathematical Coloring Book, Springer, Berlin."

#### B4 — McDonald 2009 (S4), thesis Contents, verbatim

> 1 Introduction 1
> 2 Edge-colourings, alternating paths and Tashkinov trees 5
>   2.1 Central results in edge-colouring 5
>   2.2 From alternating paths to Tashkinov trees 8
>   2.3 The proof of Tashkinov's Theorem 12
>     2.3.1 Filling the gap 12
>     2.3.2 As an algorithm 18
> 3 Achieving maximum chromatic index 27
>   3.1 Canonical examples 27
>   3.2 Shannon's bound and Goldberg's bound 29
>   3.3 Vizing's bound 31
> 4 Bounding chromatic index 38
>   4.1 A general result 39
>   4.2 Specific new results 45
>   4.3 Corresponding colouring algorithms 54
> 5 Characterizing high chromatic index 65
>   5.1 General characterization techniques 66
>   5.2 High chromatic index with respect to g_o 74
>   5.3 Multiples of simple graphs and Vizing's bound 78
> 6 Vertex-colouring 81
>   6.1 Vertex-colouring results as edge-colouring results 81
>   6.2 Edge-colouring results as vertex-colouring results 86
>   6.3 Vertex-Tashkinov trees? 89
> 7 Conclusion and future work 96
> References 105

Named results in Chapters 2–3, verbatim:

- "Theorem 2.1.1. [24] (König's Theorem) Let G be a bipartite multigraph. Then, χ′(G) = ∆."
- "Theorem 2.1.2. [38] (Shannon's Theorem) Let G be a multigraph. Then, χ′(G) ≤ 3∆/2."
- "Theorem 2.1.3. [44] (Vizing's Theorem) Let G be a multigraph. Then, χ′(G) ≤ ∆ + µ."
- "Theorem 2.1.4. [11] (Goldberg's Theorem) Let G be a multigraph containing an odd cycle. Then, χ′(G) ≤ ∆ + 1 + (∆ − 2)/(g_o − 1)."
- "Theorem 2.1.5. [39] (Steffen's Theorem) Let G be a multigraph containing a cycle. Then, χ′(G) ≤ ∆ + ⌈µ/⌊g/2⌋⌉."
- "Theorem 2.1.6. [30] (Ore's Theorem) Let G be a multigraph. Then, χ′(G) ≤ max{d(v) + µ(v) | v ∈ V(G)}."
- "Theorem 2.2.1. [42] (Tashkinov's Theorem) Let G be a multigraph and let φ be a partial (∆ + s)-edge-colouring of G, with s ≥ 1. Suppose that there exists a φ-Tashkinov tree T = (p₀, e₀, p₁, …, p_n) in G which is not φ-elementary. Then, there exists a (∆ + s)-edge colouring ψ of dom(φ) ∪ {e₀}."
- "Theorem 2.2.2. [21] (Kierstead's Theorem)" — same statement with "φ-Kierstead path P" in place of the tree.
- "Theorem 3.1.1. Let µK_{d+1} be a multiple of an odd clique. Then, χ′(µK_{d+1}) = µ(d + 1) = ∆ + µ."
- "Theorem 3.1.2. Let µC_k be a multiple of an odd cycle. Then, χ′(µC_k) = ⌈∆k/(k−1)⌉ = ∆ + 1 + ⌊(∆−2)/(k−1)⌋."
- "Theorem 3.2.1. [43] Let G be a connected multigraph. Then, χ′(G) = 3∆/2 if and only if G = µK₃."
- "Theorem 3.2.2. Let G be a connected multigraph containing an odd cycle. Then, χ′(G) = ∆ + 1 + (∆−2)/(g_o−1) if and only if G = µC_{g_o} and (g_o − 1) | 2(µ − 1)."
- "Theorem 3.3.1. [21] Let G be a multigraph with µ ≥ 2. If χ′(G) = ∆ + µ, then G contains a 2µ-sided triangle as a subgraph."
- "Lemma 3.3.2.", "Theorem 3.3.3.", "Theorem 3.3.4.", "Theorem 3.3.5.", "Corollary 3.3.6."

The Seymour–Goldberg Conjecture is given in §2.1 in three equivalent forms, verbatim:

> χ′ ≤ max{⌈ρ⌉, ∆ + 1},
> χ′ > ∆ + 1 ⇒ χ′ = ⌈ρ⌉,
> and
> χ′ ∈ {⌈ρ⌉, ∆, ∆ + 1}.

with

> ρ(G) := max { 2|E[S]| / (|S| − 1) : S ⊆ V(G), |S| ≥ 3 and odd }.

#### B5 — Diestel 5th ed. (S5), §5.3, verbatim

> 5.3 Colouring edges
> Proposition 5.3.1. (König 1916) Every bipartite graph G satisfies χ′(G) = ∆(G).
> Theorem 5.3.2. (Vizing 1964) Every graph G satisfies ∆(G) ⩽ χ′(G) ⩽ ∆(G) + 1.

(Diestel's "graph" is simple; see §D1.)

#### B6 — Kostochka Math 412 (S6), Lectures 36–37, verbatim

Lecture 36 slide headings and statements:
- "A (proper) k-edge-coloring of a graph G is a mapping f : E(G) → {1, …, k} such that f⁻¹(i) is a matching for all i ∈ {1, …, k}."
- "Observation: χ′(G) ≥ ∆(G) for every G."
- "Line graphs" — "For a loopless G, the line graph L(G) has V(L(G)) = E(G) … By construction, χ′(G) = χ(L(G)) for every graph G."
- "It follows that χ′(G) ≤ 2∆(G) − 2 for every graph G. In particular, if ∆(G) = 3, then χ′(G) ≤ 4."
- "Shannon's application and example. ∆(S_k) = k and χ′(S_k) = ⌊3k/2⌋."
- "Theorem 7.1 (Shannon's Theorem) Let G = (V, E) be a loopless graph with maximum degree ∆. Then χ′(G) ≤ 3∆/2."

Lecture 37: the proof of Theorem 7.1 with "Claim 1", "Claim 2", "Claim 3", "Claim 4"; then
- "Theorem 7.2 (Vizing, 1963) Let G = (V, E) be a simple graph with maximum degree ∆. Then χ′(G) ≤ ∆ + 1."
- "Theorem 7.3 (Tait, 1878) A simple 2-edge-connected 3-regular plane graph is 3-edge-colorable if and only if it is 4-face-colorable."
- "Theorem 7.4 (Dirac)", "Theorem 7.5 (Turán)" — out of scope.

#### B7 — West, Instructor's Solution Manual (S7), §7.1, verbatim exercise statements

Section heading: "Section 7.1: Line Graphs and Edge-Coloring" (within "Chapter 7: Edges and Cycles").

- "7.1.32. Every bipartite graph G with minimum degree k has a k-edge-coloring in which at each vertex v, each color appears ⌈d(v)/k⌉ or ⌊d(v)/k⌋ times."
- "7.1.33. Every simple graph with maximum degree ∆ has a proper (∆+1)-edge-coloring in which each color is used ⌈e(G)/(∆+1)⌉ or ⌊e(G)/(∆+1)⌋ times."
- "7.1.34. Shannon's bound on χ′(G), almost. a) Every loopless graph G has a ∆(G)-regular loopless supergraph. … b) If G is a loopless graph with even maximum degree, then χ′(G) ≤ 3∆(G)/2."
- "7.1.35. Bounds on χ′(G). … the last bound below (Anderson–Goldberg) implies the earlier bounds. Shannon: χ′(G) ≤ ⌊3∆(G)/2⌋. Vizing, Gupta: χ′(G) ≤ ∆(G) + µ(G). Ore: χ′(G) ≤ max{∆(G), max_P ½(d(x) + d(y) + d(z))}. χ′(G) ≤ max{∆(G), max_P ½(d(x) + µ(xy) + µ(yz) + d(z))}."
- "7.1.39. Characterization of graphs with the same line graph." — out of scope.

#### B8 — Chen, Jing, Zang (S8), section headings, verbatim

> 1 Introduction
> 2 Preliminaries
>   2.1 Terminology and Notation
>   2.2 Elementary Multigraphs
>   2.3 Stable Colorings
>   2.4 Tashkinov Trees
> 3 Extended Tashkinov Trees
> 4 Auxiliary Results
> 5 Good Hierarchies
> 6 Basic Properties
> 7 Elementariness and Interchangeability
>   7.1 Proof of Theorem 5.3
>   7.2 Proof of Theorem 3.10(ii)

Named results in §1, verbatim: "Conjecture 1.1", "Conjecture 1.2", "Conjecture 1.3", "Conjecture 1.4", "Conjecture 1.5", "Conjecture 1.6", "Theorem 1.1", "Theorem 1.2", "Theorem 1.3", "Theorem 1.4", "Theorem 1.5".

#### B9 — Misra & Gries (S9), section headings, verbatim

> A Constructive Proof of Vizing's Theorem
> The fan
> The algorithm
> Inverting the cd-path
> Rotating fan ⟨f..w⟩
> 1 Discussion
> References

#### B10 — Cao, Chen, Shan (S10), headings and named results in the range read, verbatim

> 1 Introduction
> 2 Preliminaries
>   2.1 Basic notation and terminologies
>   2.2 Modified Vizing fans and Kierstead paths
>   2.3 τ-sequence, rotation, and shifting

- "Theorem 1.1. Let G be a ∆-critical graph of order n. If δ(G_∆) ≤ 2 and ∆(G) > n/2 + 1, then G is overfull."
- "Conjecture 1.2. Let G be a ∆-critical graph of order n. If ∆(G) ≥ n/2, then G is just overfull."
- "Lemma 1.3 (Vizing's Adjacency Lemma (VAL)). Let G be a class 2 graph with maximum degree ∆. If e = xy is a critical edge of G, then x is adjacent to at least ∆ − d(y) + 1 ∆-vertices from V(G) \ {y}."
- "Theorem 1.4.", "Theorem 1.5.", "Theorem 1.6."
- "Definition 2.1." (multifan), "Lemma 2.2.", "Lemma 2.3.", "Definition 2.4." (Kierstead path), "Lemma 2.5.", "Lemma 2.6."

#### B11 — Shan (S11), headings in the range read, verbatim

> 1 Introduction
> 2 Notation and preliminaries
>   2.1 Results on degree sequences

- "Conjecture 1.1 (Overfull Conjecture). Let G be a graph with ∆(G) > ⅓|V(G)|. Then χ′(G) = ∆(G) if and only if G contains no ∆(G)-overfull subgraph."
- "Theorem 1.3.", "Theorem 1.4."

#### B12 — Dunaway / Berge–Fournier (S12), headings, verbatim

> Introduction
> Main Result
> Proof of Main Result
> Corollaries
> Examples
> Conclusion
> References

- "Theorem [1]: Fix any positive integers D, t. Suppose G is a non-empty loopless multigraph with maximum degree Δ(G) ≤ D and multiplicity μ(G) ≤ t. Let S be the following set: S = {x | x ∈ V(G); d_G(x) = D; m_G(x) = t}. If this set is independent or empty, then χ′(G) ≤ D + t − 1."
- "Corollary 1: Let G be a multigraph of maximum degree Δ and of maximum multiplicity μ. If the set of vertices of maximum degree is independent, then Δ + μ − 1 colors suffice to color the edge-set of G."
- "Corollary 2: Let G be a multigraph of maximum degree Δ and of multiplicity μ, and let M be a maximal matching of G. The edges of G can be colored with Δ + μ colors so that all the edges in M get the same color."

---

### C. MATHEMATICAL DETAIL

Throughout: *loopless multigraph* means finite, undirected, parallel edges permitted,
loops forbidden. Δ = Δ(G) is the maximum degree; μ(u,v) is the number of edges with
ends u and v; μ(G) = max_{u≠v} μ(u,v); χ′(G) is the chromatic index. For a proper
edge colouring φ and a vertex x, write φ̄(x) for the set of colours **missing** at x
(the palette minus the colours on edges at x).

#### C0. The two shared prerequisites everything below needs

**(P1) Kempe chains for edge colourings.** For a proper edge colouring with palette
including distinct colours α, β, let H be the spanning subgraph on the edges coloured
α or β. Every component of H is a path or an even cycle; interchanging α and β on any
one component yields another proper edge colouring.

Source wording, Bondy–Murty 2008 §17.1: "Let i and j be any two distinct colours, and
set H_ij := H[M_i ∪ M_j]. Because M_i and M_j are disjoint matchings, each component of
H_ij is either an even cycle or a path…; we refer to the path-components of H_ij as
ij-paths. These are akin to Kempe chains". Vizing's own version is **Lemma A.1**
(verbatim in §B3). Cao–Chen–Shan §2.1 call the components "(α, β)-chains" and the swap
a "Kempe change"; Diestel calls the component through v the "α/β-path from v".

Proof route: every vertex has degree ≤ 2 in H (at most one α-edge, at most one β-edge),
so components are paths or cycles; cycles alternate so have even length; the swap keeps
each colour class a matching. **≈ 5 numbered steps. [A].**

**(P2) A vertex missing a colour is an endpoint of its chain.** If α ∈ φ̄(v) or
β ∈ φ̄(v), then v has degree ≤ 1 in the (α,β)-subgraph, so its component is a path and v
is an end of it. Immediate from (P1). This is the single fact that powers Vizing's
Lemma A.2 and Kostochka's Claim 3, and the library will want it as its own one-line
lemma. **≈ 2 steps. [A].**

---

#### C1. SHANNON'S BOUND

##### C1.1 Exact statements (four independent wordings)

- **Chen, Jing, Zang (S8) §1**, the modern reference form:
  > "the first of these, χ′(G) ≤ ⌊3∆(G)/2⌋, was established by Shannon [35] in 1949"
- **Vizing 1964 (S3, Appendix A.1)**, in Vizing's own words:
  > "C. E. Shannon [2] proved that any multigraph G satisfies q(G) ≤ ⌊(3/2)σ(G)⌋, where the parenthesis denotes the lower integer part. It is possible for each m to construct a multigraph G with σ(G) = m and q(G) = ⌊(3/2)m⌋"
- **McDonald (S4) Theorem 2.1.2**:
  > "Let G be a multigraph. Then, χ′(G) ≤ 3∆/2."
- **Kostochka (S6) Theorem 7.1**:
  > "Let G = (V, E) be a loopless graph with maximum degree ∆. Then χ′(G) ≤ 3∆/2."
- **West (S7) Ex. 7.1.35**: "Shannon: χ′(G) ≤ ⌊3∆(G)/2⌋."

**Recommended library statement**: *Let G be a loopless multigraph with maximum degree
Δ. Then χ′(G) ≤ ⌊3Δ/2⌋.* (See §D3 for why the floor belongs in the statement.)

**Sharpness.** The extremal family is the *fat triangle* μK₃: McDonald §3.1, verbatim:
"χ′(µK₃) = 3µ … Since ∆ = 2µ, we can also express 3µ as 3∆/2 … all multiples of
triangles achieve Shannon's upper bound." Kostochka's slide calls it "Shannon's
application and example. ∆(S_k) = k and χ′(S_k) = ⌊3k/2⌋". The characterisation
(McDonald Theorem 3.2.1, due to Vizing's 1968 dissertation) is: *for connected G,
χ′(G) = 3Δ/2 iff G = μK₃.* Bondy–Murty 1976 Figure 6.3 and Bondy–Murty 2008 Figure 17.3
show the same graph as the Δ+μ extremal example.

##### C1.2 ROUTE R1 — Kostochka's proof (RECOMMENDED). Uniform in Δ, self-contained.

Source: S6, Lecture 36 slides 7–11 and Lecture 37 slides 1–4. The slides state Claims
1–3 without proof and prove only Claim 4 and the closing contradiction; the proofs of
Claims 1–3 below are the standard one-line arguments and are supplied here so the
scaffolder does not have to invent them. **Each such supplied step is flagged
`[gap-filled]`; the scaffolder must re-derive and check it, not copy it on my word.**

Setup: k := ⌊3Δ/2⌋, M := {1, …, k}, and for a proper colouring f of a subgraph,
O_f(x) := M \ {colours f uses on edges at x}.

1. If Δ ≤ 1 the statement is immediate (colour every edge 1). Assume Δ ≥ 2.
2. Induct on |E(G)| over the class of loopless multigraphs with maximum degree at most Δ.
   Base: |E(G)| ≤ k — give every edge its own colour.
3. Induction step. Fix an edge e₁ with ends u, v. Set G₁ := G − e₁. Then Δ(G₁) ≤ Δ and
   |E(G₁)| = |E(G)| − 1, so by induction there is a proper colouring f : E(G₁) → M.
4. For every x ∈ V(G): |O_f(x)| ≥ k − d_{G₁}(x) ≥ ⌊3Δ/2⌋ − Δ = ⌊Δ/2⌋.
5. Because e₁ was deleted, d_{G₁}(u) ≤ Δ − 1 and d_{G₁}(v) ≤ Δ − 1, so
   |O_f(u)| ≥ ⌊Δ/2⌋ + 1 and |O_f(v)| ≥ ⌊Δ/2⌋ + 1.  (This is the slides' equation (1).)
6. **Suppose, for contradiction, that G has no proper k-edge-colouring.** Then for
   *every* proper k-colouring f of G₁, statements 7–9 hold. `[gap-filled: the slides
   leave this quantifier implicit; making it explicit is what licenses re-applying
   Claim 3 to the modified colouring at step 14.]`
7. **Claim 1.** O_f(u) ∩ O_f(v) = ∅. `[gap-filled: a colour in both could be assigned
   to e₁, giving a k-colouring of G.]`
8. **Claim 2.** For α ∈ O_f(v) and β ∈ O_f(u), the (α, β)-chain containing v is a v–u
   path whose edges alternate β, α, starting with a β-edge at v and ending with an
   α-edge at u. `[gap-filled: by Claim 1, α ≠ β. By (P2) v is an end of its chain, and
   the chain's first edge at v is coloured β since α ∈ O_f(v). If the chain did not end
   at u, swapping α and β on it would make β missing at v while β stays missing at u,
   and e₁ could be coloured β — contradiction with step 6.]`
9. Fix α ∈ O_f(v) and β ∈ O_f(u). Since α ∉ O_f(u) by Claim 1, some edge e₂ at u carries
   colour α; because colour classes are matchings, e₂ is **the** α-edge at u. Let w be
   its other end. Then w ≠ u (G is loopless) and w ≠ v (α is missing at v).
10. **Claim 3.** O_f(w) ∩ O_f(u) = ∅. `[gap-filled: if γ lies in both, recolour e₂ = uw
    from α to γ; the result is proper because γ is missing at both ends. Now α is missing
    at u (e₂ was the only α-edge at u) and α is still missing at v, so e₁ can be coloured
    α — contradiction with step 6.]`
11. **Claim 4.** O_f(w) ∩ O_f(v) ≠ ∅. Proof, verbatim from the slides: "By (1),
    |O_f(w)| + |O_f(v)| + |O_f(u)| ≥ ⌊Δ/2⌋ + ⌊Δ/2⌋ + 1 + ⌊Δ/2⌋ + 1 > |M|. On the other
    hand, by Claims 1 and 3, (O_f(v) ∪ O_f(w)) ∩ O_f(u) = ∅. This proves the claim."
12. The strict inequality 3⌊Δ/2⌋ + 2 > ⌊3Δ/2⌋ must be checked in both parities:
    Δ = 2t gives 3t + 2 > 3t; Δ = 2t + 1 gives 3t + 2 > 3t + 1.
    `[boundary case — must appear in the proof contract.]`
13. Pick γ ∈ O_f(w) ∩ O_f(v). Then γ ≠ α (α is present at w, on e₂) and γ ≠ β
    (γ ∈ O_f(v), β ∈ O_f(u), disjoint by Claim 1). `[gap-filled; both are needed at
    step 15 and neither is stated on the slides.]`
14. Apply Claim 2 with γ in place of α: the (β, γ)-chain P containing v is a v–u path.
    w ∉ V(P): w ≠ v, w ≠ u, and by (P2) γ ∈ O_f(w) forces w to be an *end* of its own
    (β, γ)-chain, so w cannot be an interior vertex of P. Verbatim on the slides:
    "This path cannot go through w since γ ∈ O_f(w)."
15. Interchange β and γ on P, giving a proper k-colouring f′ of G₁. Then: α ∉ {β, γ}, so
    α ∈ O_{f′}(v) and e₂ is still the α-edge at u with other end w; the P-edge at u was
    coloured γ (since β ∈ O_f(u)) and becomes β, so γ ∈ O_{f′}(u); and w is untouched, so
    γ ∈ O_{f′}(w).
16. But step 6 makes Claim 3 available for f′ as well, giving O_{f′}(w) ∩ O_{f′}(u) = ∅ —
    contradicting γ ∈ both. Hence the assumption at step 6 fails and G is k-edge-colourable.

**Step count and tag.** Main theorem ≈ 16 numbered steps → **[B]** (comfortably inside
12–30). Plus (P1) ≈ 5 steps **[A]** and (P2) ≈ 2 steps **[A]** as separate items. Total
scaffold for Shannon: 3 items, roughly 23 steps.

**Structural note for the scaffolder.** Claims 1, 2, 3 are each of the form "if X then G
is k-colourable"; under the contradiction hypothesis at step 6 they become universally
quantified facts about every proper k-colouring of G₁. Scaffold them as three separate
lemmas of the *contrapositive* form so that step 16's re-application to f′ is a plain
citation, not a re-proof.

##### C1.3 ROUTE R2 — the even-Δ route via Petersen's 2-factor theorem (SUPPLEMENTARY)

Stated as an exercise in three independent sources: Bondy–Murty 2008 Ex. 17.2.7
("Using Exercise 16.4.16b, show that if ∆ is even, then χ′ ≤ 3∆/2"), Bondy–Murty 1976
Ex. 6.2.4, and West Ex. 7.1.34 — the last with a **complete written solution**, quoted
verbatim below (S7):

> "a) Every loopless graph G has a ∆(G)-regular loopless supergraph. Given G with vertex
> set x₁, …, x_n, add another copy of G, disjoint from it, with vertex set y₁, …, y_n.
> Add ∆(G) − d_G(v_i) copies of the edge x_i y_i to complete the construction."
> "b) If G is a loopless graph with even maximum degree, then χ′(G) ≤ 3∆(G)/2. By part
> (a), we can find a ∆(G)-regular supergraph H of G; by Petersen's Theorem, we can
> partition H into ∆(G)/2 2-factors. Since each 2-factor is a disjoint union of cycles,
> each 2-factor is 3-edge-colorable. Hence we can color E(H) with 3∆(G)/2 colors, and we
> can delete the edges of H − G to obtain a proper edge-coloring of G with 3∆(G)/2
> colors."

Decomposed:
1. Δ-regular loopless supergraph exists (West's construction above). ≈ 4 steps.
2. Petersen's 2-factor theorem: every 2k-regular loopless multigraph decomposes into k
   edge-disjoint 2-factors. **Not in the library** — see §E.
3. Each 2-factor is a disjoint union of cycles, hence 3-edge-colourable (even cycles
   need 2, odd cycles need 3). ≈ 4 steps, with the odd/even boundary case explicit.
4. χ′(G) ≤ χ′(H) ≤ 3·(Δ/2). ≈ 2 steps.

**Step count and tag.** ≈ 10 steps **[A]** *given* Petersen's theorem; Petersen's theorem
itself is a separate **[B]** item (Frink's 1926 proof, or the standard Euler-circuit +
bipartite-König route — the library already has Euler circuits for multigraphs).

**Verdict:** does NOT prove Shannon (only Δ even). Bondy–Murty 1976 says so explicitly:
"(Shannon, 1949 has shown that this inequality also holds when Δ is odd.)" Scaffold it,
if at all, as a corollary of Petersen's theorem, and do not present it as Shannon.

##### C1.4 ROUTE R3 — via min{Δ+μ, 2Δ−μ}. **DO NOT SCAFFOLD — unverified.**

Bondy–Murty 2008 Ex. 17.2.8, verbatim: "a) Show that χ′ ≤ 2∆ − µ. b) Deduce that
χ′ ≤ 3∆/2. (C. Shannon)". Part (b) is trivial from (a) plus Vizing (§C2): if μ ≤ Δ/2
then Δ + μ ≤ 3Δ/2, and if μ > Δ/2 then 2Δ − μ < 3Δ/2.

I could **not** source or reconstruct a correct proof of (a). The natural counting
argument — for a maximum-multiplicity pair {u,v} and an uncoloured e ∈ E(u,v), the sets
φ̄(u), φ̄(v) and the colours on the other μ−1 parallel uv-edges are pairwise disjoint,
giving 2Δ − μ ≤ d(u) + d(v) − μ − 1 ≤ 2Δ − μ − 1 — closes only for **critical**
multigraphs, and the induction does not descend, because deleting an edge from the unique
maximum-multiplicity pair *lowers* μ and therefore *raises* the target bound 2Δ − μ.
Passing to a critical subgraph has the same defect. This is recorded as blocker F3.

---

#### C2. VIZING'S MULTIGRAPH THEOREM

##### C2.1 Exact statements

- **Vizing 1964 (S3, Appendix A.1) Theorem A.3**, the original, verbatim:
  > "If m is the maximum degree in the p-graph G, then q(G) ≤ m + p."
  with, verbatim from the same page: "A multigraph is a finite nonoriented multigraph
  without loops [1]. It is called a p-graph if it has at most p parallel edges. A 1-graph
  is just a graph. … The smallest number of colors needed to color the multigraph G
  properly is called the chromatic class of G and denoted q(G). … The maximum degree in G
  we denote σ(G)."
- **Bondy–Murty 2008 Theorem 17.5**: "For any graph G, χ′ ≤ ∆ + µ." — preceded, verbatim,
  by the definition: "For vertices u and v of G, we denote by µ(u, v) the number of
  parallel edges joining u and v. The multiplicity of G, denoted by µ(G), is the maximum
  value of µ, taken over all pairs of vertices of G. Vizing (1964) extended his theorem as
  follows." Bondy–Murty give **no proof**: "This more general theorem can be established by
  adapting the proof of Theorem 17.4 (Exercise 17.2.6)."
- **McDonald Theorem 2.1.3**: "Let G be a multigraph. Then, χ′(G) ≤ ∆ + µ."
- **Bondy–Murty 1976**, prose: "if G is loopless, then Δ ≤ X′ ≤ Δ + μ", with "The maximum
  number of edges joining two vertices in G is called the multiplicity of G, and denoted
  by μ(G)."
- **Chen–Jing–Zang §1**: "χ′(G) ≤ ∆(G) + µ(G), where µ(G) is the maximum multiplicity of
  edges in G, was proved independently by Vizing [38] and Gupta [11] in the 1960s. This
  second result is widely known as Vizing's theorem".

**Recommended library statement**: *Let G be a loopless multigraph with maximum degree Δ
and maximum edge multiplicity μ. Then χ′(G) ≤ Δ + μ.* Record the p-graph form as the
source form (see §D2).

**Sharpness.** Bondy–Murty 2008: "The graph G depicted in Figure 17.3 shows that the
theorem is best possible for any value of µ. Here ∆ = 2µ and, the edges being pairwise
adjacent, χ′ = m = 3µ = ∆ + µ." Generalisation, McDonald Theorem 3.1.1: for a multiple of
an odd clique, χ′(μK_{d+1}) = μ(d+1) = Δ + μ.

##### C2.2 ROUTE V1 — Vizing's own 1964 proof (RECOMMENDED)

Available **verbatim, in full, with proof**, in S3 Appendix A.1 pp. 269–272. This is the
only complete multigraph proof I obtained; Bondy–Murty relegate it to an exercise,
Diestel does not treat multigraphs, and McDonald derives it from Kierstead's Theorem
(itself unproved in the thesis).

**Is it fan or Kempe?** *Both, and the two are interleaved.* The editorial Notes in the
same appendix say so verbatim: "In the first paper [297] Vizing dealt with graphs with
multiple edges, and he **introduced fans** to obtain the inequality χ′ ≤ Δ + μ." The fan is
the sequence of edges (a,x₁), …, (a,x_k) at the centre a with the "downshift" recolouring;
the two collision cases are closed by **Kempe (s,t)-chain swaps** licensed by Lemma A.2.
Bondy–Murty 1976 note the same for the simple-graph analogue: Fournier's proof also builds
a fan-sequence and closes it with an odd-cycle argument via Lemma 6.1.2.

**Does it subsume μ = 1?** *Yes, verbatim.* Corollary A.4 immediately after Theorem A.3
reads: "If m is the maximum degree in the graph G, then m ≤ q(G) ≤ m + 1" — the simple
case is literally p = 1. There is no separate simple-graph argument in Vizing's paper.

Decomposed route, with Vizing's own labels:

**Item V1a — Lemma A.1 (Kempe recolouring).** Identical to (P1)/(P2) above. Verbatim
statement in §B3. ≈ 5 steps. **[A].**

**Item V1b — Lemma A.2 (the three-vertex separation lemma).** Verbatim statement in §B3.
Proof route (Vizing states it without proof; the derivation is `[gap-filled]` but forced):
1. By (P1) each (s,t)-chain is a path or an even cycle.
2. By (P2) a vertex at which s or t is missing has degree ≤ 1 in the (s,t)-subgraph, so it
   is an *end* of its chain and the chain is a path.
3. A path has at most 2 ends.
4. If all three of x, y, z lay on one common (s,t)-path they would be three distinct ends —
   impossible. Hence some one of them lies on a chain containing neither of the others.
≈ 5 steps. **[A].**

**Item V1c — the association lemma (the multigraph-specific ingredient).** Vizing, verbatim:
> "We associate to each colored edge between a and a neighbor x of a a color missing at x
> in such a way that different colored edges between a and x are associated with different
> missing colors at x. This is possible because there are at least p missing colors at each
> vertex."
1. Palette has m + p colours; every vertex has degree ≤ m; hence ≥ p colours are missing at
   every vertex.
2. At most p edges join a to x (G is a p-graph), so an injective assignment
   {coloured a–x edges} → φ̄(x) exists.
≈ 4 steps. **[A].** *This lemma has no counterpart in any simple-graph proof; it is exactly
the extra bookkeeping the multigraph fan needs (see §C4).*

**Item V1d — Theorem A.3, the main theorem.** Numbered route, faithful to the source text:
1. Colours 1, …, m + p. Take a partial proper colouring with exactly one uncoloured edge
   (a,b); it suffices to colour it, and iterate over the edges.
2. A := colours missing at a, B := colours missing at b; |A|, |B| ≥ p by V1c step 1.
3. If A ∩ B ≠ ∅, colour (a,b) with a common colour. So assume A ∩ B = ∅.
4. Fix the association of V1c. At most p − 1 of the a–b edges are coloured (one, namely
   (a,b), is uncoloured), so some s₀ ∈ B is associated with no a–b edge. Verbatim: "Let
   s₀, β₁, …, β_{p−1} be colors not present at b. We may assume that the color s₀ is not
   associated with any edge between a and b."
5. s₀ ∈ B and A ∩ B = ∅ give s₀ ∉ A, so some edge (a, x₁) is coloured s₀, and x₁ ≠ b.
6. Inductively build a *fan-sequence* of **distinct edges** (a, x₁), …, (a, x_k) with
   colours s₀, s₁, …, s_{k−1}, where s_i is the colour associated with (a, x_i). Vizing's
   footnote 3, verbatim: "Note that we may have that x_ℓ = x_r for ℓ ≠ r; 1 ≤ ℓ, r ≤ k. But
   even then the edges (a, x_ℓ) and (a, x_r) are different parallel edges, because the edges
   (a, x_i) for i = 1, 2, …, k are all different."
7. Let s_k be the colour associated with (a, x_k). **Case 1: s_k ∈ A.** Then s_k ≠ s_j for
   all j. Downshift: recolour (a, x_k) by s_k, (a, x_{k−1}) by s_{k−1}, …, (a, x₁) by s₁;
   the result is proper because each s_j is missing at x_j; then colour (a,b) with s₀. Done.
8. **Case 2: s_k ∉ A.** Three subcases.
9. **(a) s_k = s₀.** Then x_k ≠ x₁ (s₀ is present at x₁) and x_k ≠ b (s₀ is unassociated
   with a–b edges). Choose t ∈ A. Then t is missing at a, s₀ is missing at b, s₀ is missing
   at x_k. Apply Lemma A.2 to (a, b, x_k) with the pair (s₀, t):
   - if a and b lie on different (s₀,t)-paths, recolour the maximal (s₀,t)-path starting at
     a with the edge (a, x₁); s₀ becomes missing at both a and b; colour (a,b) with s₀;
   - if x_k is separated, recolour the maximal (s₀,t)-path at x_k; then t ∈ A becomes
     missing at x_k; re-associate t with (a, x_k) and fall into Case 1.
10. **(b) s_k = s_i for some 1 ≤ i ≤ k − 2.** (s_k = s_{k−1} is impossible because
    (a, x_k) is coloured s_{k−1}.) Then x_i ≠ x_k, since otherwise two parallel edges
    (a, x_i), (a, x_k) would be associated with the same missing colour, contradicting V1c.
    Choose t ∈ A; t missing at a, s_i missing at x_k, s_i missing at x_i; apply Lemma A.2 to
    (a, x_i, x_k) with (s_i, t). Each of the three branches returns to Case 1; the third
    branch (a separated from both) recolours the maximal (s_i,t)-path from a, whose first
    edge is (a, x_{i+1}) coloured s_i, after which s_i is missing at a and is associated with
    (a, x_i), and s_i is still missing at x_i.
11. **(c) s_k ∉ {s₀, …, s_{k−1}}.** Then some edge (a, x_{k+1}) carries colour s_k and is
    distinct from all earlier fan edges; extend the sequence and repeat.
12. Termination: the fan edges are distinct edges at a and d(a) ≤ m is finite, so after
    finitely many extensions Case 1 or Case 2(a)/(b) occurs. Verbatim: "Since the graph is
    finite we get either Case 1 or Case 2 (a or b) after a finite number of steps."

**Step count and tag.** Item V1d ≈ 22–26 numbered steps → **[B]**, but near the top of the
band. **Recommend splitting** V1d into two items: (i) "the fan-sequence exists and
terminates" (steps 1–7 + 11–12, ≈ 12 steps, [A]/[B] boundary) and (ii) "the two collision
cases close" (steps 8–10, ≈ 12 steps, [B]). Whole cluster: 4–5 items, ≈ 40 steps.

**Boundary cases the proof contract must anchor:** p = 1 (Corollary A.4, the simple case);
k = 1 (the fan has a single edge); x_ℓ = x_r for ℓ ≠ r (parallel fan edges to the same
neighbour, Vizing's footnote 3); s_k = s_{k−1} (shown impossible); x_k = b and x_k = x₁
(both excluded in case (a)); A = ∅ or B = ∅ (excluded by |A|, |B| ≥ p ≥ 1); the empty
multigraph and the one-edge multigraph.

##### C2.3 ROUTE V2 — Berge–Fournier 1991 via Dunaway (S12). **Stronger result, defective write-up.**

Berge–Fournier prove the *stronger* theorem quoted verbatim in §B12: with D ≥ Δ(G),
t ≥ μ(G), and S = {x : d_G(x) = D and m_G(x) = t} independent or empty, χ′(G) ≤ D + t − 1.
Vizing's theorem is the case D = Δ + 1, t = μ: then S = ∅ automatically (no vertex has
degree Δ + 1), and D + t − 1 = Δ + μ. The mechanism is a **"sequential f-recoloring"** — a
fan where each edge e_i has a *reserved* colour f(e_i), subject to Dunaway's conditions
B.1 "α_{i+1} ∉ C_{y_i}" and B.2 "α_{i+1} ≠ f(e_j) for all j < i where y_j = y_i"; condition
B.2 is exactly the multigraph bookkeeping that Vizing's association lemma (V1c) supplies.

**Defect found.** Dunaway's Case 2 (S = ∅) opens: "we choose any vertex x₀ of maximum degree
such that d_G(x₀) = D", which is impossible in precisely the instantiation that yields
Vizing's theorem (D = Δ + 1 > Δ). The exposition also mixes "Δ" and "D" in the displayed
inequalities of Case 2 ("|C_{y₀}| ≤ Δ < Δ < D + t − 1"). **Do not scaffold from Dunaway.**
The original is 4 pages: Berge & Fournier, *J. Graph Theory* 15 (1991) 333–336 — not
obtained (paywalled, see blocker F2). Tag as written: **[C]**.

Two corollaries of Berge–Fournier are worth recording as `deferred` results if the pair is
ever revisited: Corollary 1 (independent max-degree set ⇒ Δ + μ − 1) and Corollary 2
(maximal matching monochromatic within Δ + μ colours) — both verbatim in §B12.

##### C2.4 ROUTE V3 — Kierstead paths (McDonald §2.2). **Elegant but rests on an unproved theorem.**

McDonald derives *both* Vizing and Shannon from Kierstead's Theorem (Theorem 2.2.2) in
under a page. Verbatim, the counting:

> "n(χ′ − 1 − ∆) + 2 ≤ nµ  ⇒  χ′ − 1 − ∆ ≤ µ − 2/n  ⇒  χ′ ≤ ∆ + µ, proving Vizing's
> Theorem. Shannon's Theorem is even easier to obtain - just note that p_n has degree at
> most ∆, and get n(χ′ − 1 − ∆) + 2 ≤ ∆ ⇒ 2(χ′ − 1 − ∆) + 2 ≤ ∆ ⇒ χ′ ≤ 3∆/2."

This is ≈ 8 steps **[A]** *given* Kierstead's Theorem — but Kierstead's Theorem is stated,
not proved, in the thesis ("Kierstead's original proof of his Theorem is easy to follow,
and fits comfortably on a single page", but the page is not reproduced). Kierstead 1984,
*Discrete Math.* 52:159–164 — not obtained. Tag: **[C]** as a whole; if Kierstead's paper
were obtained this would become the cheapest route to *both* theorems at once.
McDonald's Kierstead-path definition, verbatim from the (T1)/(T2) conditions with
"k required to be i": (T2) "e₀ is uncoloured by φ and for each i ∈ {1, …, n−1},
φ(e_i) ∈ ∪_{j≤i} φ̄(p_j)"; a path P is φ-elementary if φ̄(p_i) ∩ φ̄(p_j) = ∅ for i < j.

---

#### C3. THE GOLDBERG–SEYMOUR THEOREM — **STATEMENT ONLY**

**I am offering no proof route for this result, and none should be scaffolded.** The proof
is a research monograph: Chen–Jing–Zang's preprint is **81 pages** of extended Tashkinov
trees, "good hierarchies", and a control mechanism over Kempe changes. It is out of reach
for a library item: tag **[C]**.

**Exact statement (Chen, Jing, Zang, Theorem 1.1), verbatim:**
> "Theorem 1.1. Every multigraph G satisfies χ′(G) ≤ max{∆(G) + 1, ⌈Γ(G)⌉}."

**The density parameter, verbatim from the same paper:**
> "let Γ(G) be the density of G, defined by
> Γ(G) = max { 2|E(U)| / (|U| − 1) : U ⊆ V, |U| ≥ 3 and odd },
> where E(U) is the set of all edges of G with both ends in U."

**The conjecture as originally posed, verbatim (Conjecture 1.1):**
> "In the early 1970s Goldberg [9] and Seymour [34] independently made the following
> conjecture. Conjecture 1.1. Every multigraph G satisfies χ′(G) ≤ max{∆(G) + 1, ⌈Γ(G)⌉}."

**Same parameter written ρ(G) by McDonald**, verbatim: "ρ(G) := max{ 2|E[S]|/(|S| − 1) :
S ⊆ V(G), |S| ≥ 3 and odd }." Stiebitz et al. call it "Density" (§6.1 "Density and
Fractional Chromatic Index").

**Companion facts worth recording alongside it (all verbatim from Chen–Jing–Zang §1):**
- "As shown by Seymour [34] using Edmonds' matching polytope theorem [7], it is always true
  that χ*(G) = max{∆(G), Γ(G)}." (χ* = fractional chromatic index.)
- "there are only two possible values for the chromatic index of a multigraph G:
  max{∆(G), ⌈Γ(G)⌉} and max{∆(G) + 1, ⌈Γ(G)⌉}."
- "every multigraph G = (V, E) satisfies χ′(G) − χ*(G) ≤ 1".
- Corollaries proved: "Theorem 1.2. Every r-graph G satisfies χ′(G) ≤ r + 1." (Seymour's
  weaker conjecture); "Theorem 1.3." (Gupta's 1967 conjecture); "Theorem 1.4." and
  "Theorem 1.5." (Jakobsen's conjectures).

**Bibliographic data for the citation.** Guantao Chen (Georgia State), Guangming Jing
(Augusta), Wenan Zang (Hong Kong). "Proof of the Goldberg-Seymour Conjecture on
Edge-Colorings of Multigraphs." arXiv:1901.10316; v1 submitted 29 January 2019, v2
7 June 2022; 81 pages. Journal publication: *Journal of Combinatorial Optimization*,
2025, DOI `10.1007/s10878-025-01348-6`. Abstract page:
`https://arxiv.org/abs/1901.10316`; PDF `https://arxiv.org/pdf/1901.10316v2`.

**What IS cheap and library-buildable here — the matching lower bound.** McDonald, verbatim:
> "note that for a multigraph G, given any odd set S ⊆ V(G) with |S| ≥ 3, the maximum size
> of a colour class in G[S] is (|S| − 1)/2. Hence, since chromatic index is an integer,
> χ′(G[S]) ≥ ⌈2|E[S]|/(|S| − 1)⌉."

So χ′(G) ≥ ⌈Γ(G)⌉ is a **≈ 4-step [A]** item. Bondy–Murty 2008 state the same bound as
(17.2), verbatim: "χ′ ≥ max{ ⌈2e(H)/(v(H) − 1)⌉ : H ⊆ G, v(H) odd, v(H) ≥ 3 }", with the
historical parenthetical, verbatim: "(Goldberg (1974) and Seymour (1979a) have conjectured
that if neither bound is tight, then χ′ = ∆ + 1.)" Bondy–Murty Ex. 17.2.3 gives a
checkable example: "Let G be a graph obtained from a cycle by replacing each edge by a set
of one or more parallel edges. Show that G satisfies the Goldberg bound (17.2) with
equality."

**Recommended scaffold shape:** one `[A]` lemma for the lower bound χ′ ≥ ⌈Γ⌉, one `def-`
item for Γ(G), and the Goldberg–Seymour theorem as a source-cited `rem-` with
`proved_here: false`, `external_dependency` recorded, and the fuchsia ‡ marker. The lower
bound must be proved locally; only the upper bound is imported.

---

#### C4. THE FAN AND THE KEMPE CHAIN IN A MULTIGRAPH — HOW THEY DIFFER FROM DIESTEL

Diestel's §5.3 proof of Theorem 5.3.2 (verbatim in §B5) builds, in his words:

> "Let y₀, y₁, …, y_k be a maximal sequence of **distinct neighbours of x** in G, such that
> c₀(x y_i) is missing in c₀ at y_{i−1} for each i = 1, …, k."

Five concrete differences from a multigraph fan.

**(i) Vertices vs edges.** Diestel's fan is indexed by *distinct neighbours* y_i, and the
edge x y_i is determined by y_i. In a multigraph there can be up to μ distinct edges
between x and y, so the fan must be a sequence of **distinct edges**, and the same
neighbour may occur several times. Vizing's footnote 3 makes exactly this point (quoted in
C2.2 step 6). Cao–Chen–Shan's Definition 2.1 keeps distinct vertices s₁, …, s_p but is
stated for *simple* graphs; the genuinely multigraph object is Stiebitz et al.'s multifan
in the general form, where the fan edges rs_i are a set of distinct edges.

**(ii) Predecessor vs any earlier vertex.** Diestel's condition is a *chain*:
c₀(x y_i) is missing at **y_{i−1}**, the immediate predecessor. The multifan condition is
weaker and is the essential generalisation. Cao–Chen–Shan Definition 2.1, verbatim:

> "a multifan centered at r w.r.t. e and φ is a sequence F_φ(r, s₁ : s_p) = (r, rs₁, s₁,
> rs₂, s₂, …, rs_p, s_p) with p ≥ 1 consisting of distinct vertices r, s₁, s₂, …, s_p and
> edges rs₁, rs₂, …, rs_p satisfying the following condition:
> (F1) For every edge rs_i with i ∈ [2, p], **there exists j ∈ [1, i − 1]** such that
> φ(rs_i) ∈ φ̄(s_j)"

— any earlier fan vertex, not just the previous one. The controlling property is
Cao–Chen–Shan Lemma 2.2, verbatim: "If F_φ(r, s₁ : s_p) is a multifan w.r.t. e and φ, then
V(F) is φ-elementary" — i.e. the missing-colour sets of the fan vertices are pairwise
disjoint. Diestel never needs "elementary" because his chain condition already forces it.

**(iii) One missing colour vs μ missing colours.** Diestel's counting is "the edges at a
given vertex v use at most d(v) ⩽ ∆ colours, so some colour β ∈ {1, …, ∆+1} is missing at
v" — exactly one colour is needed per fan vertex. In the multigraph fan each neighbour x
must feed up to μ(a,x) parallel edges, so the palette must guarantee **at least p missing
colours at every vertex**, and the proof must *reserve* a distinct one per parallel edge.
Vizing's association step (V1c) and Berge–Fournier's condition B.2 are the two published
ways of doing this bookkeeping. This is where Δ + μ comes from, and it is the single reason
Δ + 1 is not enough.

**(iv) One collision mode vs two.** Diestel's fan closes with a single α/β-path uniqueness
argument: "By (1), P ends in x, and it does so on a β-edge… Since P′ is uniquely
determined, it starts with y_{i−1}Py_k … Therefore P′ ends in y_k, contradicting (1)."
Vizing's multigraph fan terminates in **two** distinct collision modes — s_k = s₀ (the
colour returns to the seed) and s_k = s_i for some i ≤ k−2 (the colour returns to an
interior fan edge) — and each needs its own Kempe argument. That is why Vizing needs Lemma
A.2, a three-vertex pigeonhole on chain endpoints, where Diestel needs only path
uniqueness. Diestel's simple-graph situation collapses the first mode away.

**(v) The Kempe chain itself is unchanged.** (P1) and (P2) hold verbatim in multigraphs —
colour classes are still matchings, so the (α,β)-subgraph still has maximum degree 2 and
its components are still paths and even cycles. Vizing's Lemma A.1 is stated for
multigraphs and his footnote 1 records the degenerate cases explicitly, verbatim: "Such a
2-colored (s, t)-path might be a cycle, or it might contain only one edge, or no edges."
**Nothing about the Kempe machinery needs multigraph repair; only the fan does.** That is
the single most useful sentence for the scaffolder's dependency planning.

**Terminology cross-walk for the scaffolder:**

| object | Diestel §5.3 | Bondy–Murty 2008 §17.1 | Vizing 1964 | Stiebitz et al. / Cao–Chen–Shan | Misra–Gries |
|---|---|---|---|---|---|
| 2-coloured component | "the α/β-path from v" | "ij-path", "H_ij" | "(s,t)-path", "maximal" | "(α,β)-chain", "P_v(α,β,φ)" | "cd-path" |
| the swap | "interchange the colours" | "swapping the colours on an ij-path" | "recolored" | "Kempe change", "(α,β)-swap", "φ/C" | "Invert the cd-path" |
| the fan | "maximal sequence of distinct neighbours" | (not named; inside Lemma 17.3 as a bipartite auxiliary graph + Hall) | "fan-sequence" (named in the 1965 paper) | "multifan F_φ(r, s₁ : s_p)" | "fan ⟨f..l⟩" |
| the downshift | "c_i(x y_j) := c₀(x y_{j+1})" | — | "We recolour the edge (a,x_k) by s_k, …" | "shifting", "rotation" | "Rotate fan ⟨f..w⟩" |
| missing colour | "missing at v" | "available at v" (vs "represented at v") | "missing at vertex x", δ(x) | "φ̄(v)", "missing"; "φ(v)" = present | "free on that vertex" |

**Bondy–Murty's Lemma 17.3 is a genuinely different simple-graph proof** worth recording:
instead of a fan it builds a bipartite auxiliary graph H[X, Y] with X = N_G(v),
Y = {1, …, k}, x ~ i iff colour i is available at x, and runs an **augmenting-path /
Hall's-theorem** argument on H. Verbatim: "As in the proof of Hall's Theorem (16.4),
N_H(R) = B and B is matched under M with R \ {u}, so |B| = |R| − 1." This route reuses
Hall/König, which the library already has, but it is intrinsically simple-graph (the
matching M := {(x, c(xv)) : x ∈ X \ {u}} presupposes one edge per neighbour). Bondy–Murty
Ex. 17.2.6(a) asserts its multigraph generalisation — "Suppose that G \ e has a
k-edge-colouring with respect to which every neighbour of v has at least µ available
colours. Show that G is k-edge-colourable" — but supplies no proof.

---

#### C5. THE CHEAP EXTRAS

##### C5.1 König's edge-colouring theorem for bipartite MULTIgraphs — **YES, it holds, and three of my sources say so explicitly**

| source | statement | multigraph? |
|---|---|---|
| McDonald Theorem 2.1.1 | "Let G be a **bipartite multigraph**. Then, χ′(G) = ∆." | **YES, explicit in the statement** |
| Bondy–Murty 2008 Theorem 17.2 | "If G is bipartite, then χ′ = ∆." | **YES** — in this book "graph" permits parallel edges ("simple graph" is always said explicitly); §17.1 assumes only looplessness. Confirmed by use: Example 17.1 builds a bipartite H "where vertices x_i and y_j are joined by p_ij edges" and solves it by Theorem 17.2. Ex. 17.5.3 says "a bipartite graph G (**whether simple or not**)". |
| Bondy–Murty 1976 Theorem 6.1 | "If G is bipartite, then X′ = Δ." | **YES** — stated for a "loopless graph"; §6.3 applies it to a bipartite multigraph with p_ij parallel edges. |
| Diestel Proposition 5.3.1 | "Every bipartite graph G satisfies χ′(G) = ∆(G)." | **NO** — Diestel's "graph" is simple throughout. |

**Two independent proof routes, both fully written out in my sources.**

**Route K-a — alternating path (Bondy–Murty 2008 Theorem 17.2, and Diestel Prop. 5.3.1).**
Induct on the number of edges; delete e = uv; some colour i is available at u and some j at
v; if i = j colour e; otherwise consider the ij-path P from u; it cannot terminate at v,
since P + e would then be an odd cycle; swap on P and colour e with i. ≈ 10 steps, **[A]**,
needs (P1) + "bipartite ⇒ no odd cycle". Bondy–Murty's version is stated for multigraphs
verbatim; Diestel's identical argument needs only the observation that a closed walk of odd
length contains an odd cycle.

**Route K-b — optimal colourings (Bondy–Murty 1976 §6.1).** Three items:
- **Lemma 6.1.1** (verbatim in §B2). Proof: if G is Eulerian and not an even cycle it has a
  vertex of degree ≥ 4; take an Euler tour v₀e₁v₁…e_ε v₀ and set E₁ = {e_i : i odd},
  E₂ = {e_i : i even}; every vertex is internal to the tour. If G is not Eulerian, add a
  new vertex v₀ joined to every odd-degree vertex, take an Euler tour of the enlarged
  graph, and restrict. ≈ 8 steps, **[A]**. **The library already has Euler circuits for
  multigraphs** — see §E.
- **Lemma 6.1.2** (verbatim in §B2), using the "improvement"/"optimal k-edge colouring"
  notion, verbatim: "We shall call a k-edge colouring 𝒞′ an improvement on 𝒞 if
  Σ_{v∈V} c′(v) > Σ_{v∈V} c(v). An optimal k-edge colouring is one which cannot be
  improved." ≈ 8 steps, **[A]**.
- **Theorem 6.1** itself: 5 steps, **[A]**.

**Route K-b is strictly more valuable to the library**, because Lemmas 6.1.1 and 6.1.2 are
*also* exactly what Bondy–Murty 1976's Fournier proof of the simple-graph Vizing theorem
(Theorem 6.2) needs. Building them once buys two theorems.

##### C5.2 Fournier's proof of the simple-graph Vizing theorem (Bondy–Murty 1976 Theorem 6.2)

A third, independent proof of Vizing for simple graphs, ≈ 12 steps **[B]**, resting only on
Lemmas 6.1.1 + 6.1.2 above. Route: suppose χ′ > Δ + 1; take an **optimal** (Δ+1)-edge
colouring and a vertex u with c(u) < d(u); build a fan-sequence v₁, v₂, … with colours
i₁, i₂, … such that u v_j has colour i_j and i_{j+1} is not represented at v_j; let ℓ be
least with i_ℓ₊₁ = i_k for some k < ℓ; recolour u v_j by i_{j+1} for 1 ≤ j ≤ k−1, obtaining
another optimal colouring, so by Lemma 6.1.2 the component of G[E′_{i₀} ∪ E′_{i_k}]
containing u is an odd cycle; recolour differently to get a second optimal colouring in
which the corresponding component is again an odd cycle, but v_k now has degree 1 rather
than 2 in it — contradiction. Attractive because it needs no Hall's theorem and no
bipartite auxiliary graph, and it shares its lemmas with König.

##### C5.3 Overfull graphs

- **Definition (Cao–Chen–Shan §1, verbatim):** "A graph G is **overfull** if
  |E(G)|/⌊|V(G)|/2⌋ > ∆(G)."
- **Definition (Shan §1, verbatim, subgraph form):** "An overfull subgraph H of G is a
  subgraph satisfying the condition |E(H)| > ∆(G)⌊½|V(H)|⌋."
- **Definition (Bondy–Murty 2008 Ex. 17.2.1, verbatim):** "A simple graph G is overfull if
  m > ⌊n/2⌋∆." — with the three parts: "(a) Show that every overfull graph: (i) is of odd
  order, (ii) belongs to Class 2. (b) Show that a nonempty simple graph is overfull if
  either: (i) it is obtained from a regular graph of even order by subdividing one edge, or
  (ii) it is obtained from a simple k-regular graph of odd order by deleting fewer than k/2
  edges. (L. W. Beineke and R. J. Wilson)"
- Cheap facts: χ′(G) ≥ |E(G)|/⌊|V(G)|/2⌋ (a matching has at most ⌊n/2⌋ edges); overfull ⇒
  χ′ = Δ + 1 for simple G; overfull ⇒ n odd. **≈ 5–7 steps, [A].** Also Green (S14)
  Theorem 3.8: "If |E(G)| > α′(G)∆(G), then G is class two", a one-line variant using the
  matching number.
- **Overfull Conjecture (Chetwynd–Hilton 1986)**, verbatim (Shan Conjecture 1.1): "Let G be
  a graph with ∆(G) > ⅓|V(G)|. Then χ′(G) = ∆(G) if and only if G contains no ∆(G)-overfull
  subgraph." — record as an open conjecture, not a theorem.

##### C5.4 Critical graphs and Vizing's Adjacency Lemma

- **Critical (Cao–Chen–Shan §1, verbatim):** "A graph G is critical if χ′(H) < χ′(G) for
  every proper subgraph H of G." Also: "An edge e of a graph G is critical if
  χ′(G − e) < χ′(G)."
- **Edge-chromatic critical (Shan §1, verbatim):** "We say a graph G is edge-chromatic
  critical if χ′(G) = ∆(G) + 1 but any proper subgraph H of G satisfies χ′(H) ≤ ∆(G)."
- **Vizing's original definition (Vizing 1965, verbatim):** "A graph G is called critical of
  degree m, where m ≥ 2 is an integer, when: (a) G is connected; (b) σ(G) = m;
  (c) q(G) = m + 1; (d) The chromatic class of a graph obtained by removing any edge from G
  is equal to m."
- **VAL, modern form (Cao–Chen–Shan Lemma 1.3, verbatim):** "Let G be a class 2 graph with
  maximum degree ∆. If e = xy is a critical edge of G, then x is adjacent to at least
  ∆ − d(y) + 1 ∆-vertices from V(G) \ {y}."
- **VAL as Bondy–Murty state it (Ex. 17.2.15, verbatim):** "Let G be a minimal simple graph
  that is not ∆-edge-colourable, and let u and v be adjacent vertices of G, where d(u) = k.
  a) Show that v is adjacent to at least ∆ − k + 1 vertices of degree ∆ different from u.
  (V. G. Vizing) b) Deduce that each vertex of G has at least two neighbours of degree ∆."
- **VAL with a full proof — Vizing 1965 Theorem A.6 (S3 Appendix A.2), verbatim statement:**
  "In a critical graph of degree m each vertex incident with a vertex of degree k is in
  addition also incident with m − k + 1 vertices of degree m." The proof, which I read in
  full, runs: colour all edges but (a,b) with m colours; |δ(b)| = m − k + 1, |δ(a)| ≥ 1,
  δ(a) ∩ δ(b) = ∅; show no fan-sequence at a starting with a colour of δ(b) contains an
  edge (a,x) with a missing colour from δ(a) or a repeated earlier colour; show that
  fan-sequences at a starting with two different colours of δ(b) are **edge-disjoint** (a
  Kempe swap on the maximal (s_r, t)-chain at x_{r−1} produces the contradiction); then for
  each colour of δ(b) take a maximal fan-sequence, whose last vertex x has δ(x) = ∅ and
  σ(x) = m, and count. **≈ 14 numbered steps, [B].** Depends on VAL's prerequisites:
  Lemma A.1, Lemma A.2, criticality, and the fan-sequence definition (all in the same
  appendix), so it can be scaffolded on top of the C2.2 cluster with no new machinery.
- Vizing's Properties I–III (verbatim in §B3) are the corollaries; Property III is the
  familiar "at least two neighbours of degree Δ".

##### C5.5 Misra–Gries: constructive Vizing — **SIMPLE GRAPHS ONLY**

The paper opens, verbatim: "We consider finite graphs with **no self-loops and no multiple
edges**." So it does **not** close the multigraph gap. It is nonetheless the cleanest
algorithmic simple-graph proof I found and is a good `alg-`/constructive companion item.

Structure (all verbatim labels): the **fan** ⟨f..l⟩ defined by

> "F0 : ⟨f..l⟩ is a nonempty sequence of distinct neighbors of X;
> F1 : edge X f is uncolored; and
> F2 : (∀u :: color of edge X u⁺ is free on u)."

the three operations "Invert the cd-path", "Rotate fan ⟨f..w⟩", and the four-line algorithm

> "Let ⟨f..l⟩ be a maximal fan; Let c be a color that is free on X and d a color that is
> free on l; Invert the cd-path; … Let w satisfy: w ∈ ⟨f..l⟩, ⟨f..w⟩ is a fan, and d free
> on w; Rotate fan ⟨f..w⟩ and give edge X w the color d"

with the correctness argument split into Case 0 (no fan edge has colour d) and Case 1
(some fan edge has colour d), invariant F3, and separate validity proofs for inversion and
rotation. **≈ 16–20 numbered steps, [B].** Note its Discussion section's warning about
Bollobás's one-page proof, verbatim: "Bollobás's proof is only one page long, the shortness
being achieved through omission of necessary arguments." Two other named routes for the
simple case are already in hand (Diestel §5.3; Fournier via Bondy–Murty 1976), so
Misra–Gries is optional.

##### C5.6 Other bounds worth a `deferred` or `inline` disposition

- **Ore's theorem** (McDonald Theorem 2.1.6, verbatim): "Let G be a multigraph. Then,
  χ′(G) ≤ max{d(v) + µ(v) | v ∈ V(G)}", where μ(v) is the local maximum multiplicity at v.
  Refines Vizing. McDonald notes it "can be easily proved by using a Tashkinov tree that is
  a fan (as noted by Favrholt, Stiebitz and Toft [8])" — no proof given. **[C] as sourced.**
- **Steffen's theorem** (McDonald Theorem 2.1.5, verbatim): "Let G be a multigraph
  containing a cycle. Then, χ′(G) ≤ ∆ + ⌈µ/⌊g/2⌋⌉." **[C].**
- **Goldberg's theorem** (McDonald Theorem 2.1.4, verbatim): "Let G be a multigraph
  containing an odd cycle. Then, χ′(G) ≤ ∆ + 1 + (∆ − 2)/(g_o − 1)." **[C]**; see §D4 for a
  discrepancy in the thesis's own abstract.
- **Vizing's Theorem A.11** (verbatim, §B3): "χ′(G) ≤ Δ(G) + μ(G) − 1 for all graphs with
  μ(G) ≥ 2 and Δ(G) = 2μ(G) − 1." Stated without proof in Vizing 1964, proved in Vizing
  1965 (not the paper reproduced in Appendix A). **[C] as sourced.**
- **The trivial upper bounds**, cheap and worth having as warm-ups: χ′ ≤ 2Δ − 1 (greedy;
  RPI Theorem 3, verbatim: "Apply the greedy algorithm: color edges one-by-one, using for
  each edge the smallest positive integer which is available"); χ′ ≤ 2Δ − 2 (Kostochka
  Lec36, via the line graph and Brooks); Vizing 1964, verbatim: "There is also a trivial
  upper bound q(G) ≤ 2σ(G) − 1." Each **≈ 4 steps, [A]**.
- **χ′(G) = χ(L(G))** (Kostochka Lec36, verbatim: "By construction, χ′(G) = χ(L(G)) for
  every graph G"). ≈ 4 steps, **[A]** — but needs the line graph and vertex chromatic number.

---

### D. CONVENTION DISAGREEMENTS, WITH RECOMMENDATIONS

**D1 — Does "graph" mean simple or multi? (The single most dangerous ambiguity here.)**

- Diestel: "graph" = simple; multigraphs are a separate notion. His Prop. 5.3.1 and Thm
  5.3.2 are simple-graph statements.
- Bondy–Murty 2008: "graph" permits parallel edges; "simple graph" is always said. Chapter
  17 additionally assumes looplessness throughout, verbatim: "(Because loops are
  self-adjacent, only loopless graphs admit proper edge colourings.) As we are concerned
  here only with proper edge colourings, all graphs are assumed to be loopless".
- Bondy–Murty 1976: same; the running phrase is "loopless graph".
- Vizing 1964: "A multigraph is a finite nonoriented multigraph without loops"; "p-graph"
  = at most p parallel edges; "A 1-graph is just a graph."
- McDonald, Chen–Jing–Zang, Shan, Cao–Chen–Shan, Aboulker et al.: "multigraph" explicit,
  "graph"/"simple graph" reserved for simple. Aboulker et al., verbatim: "Graphs in this
  paper are finite, undirected, and without loops, but may have multiple edges. A graph is
  simple if it has no parallel edges."

**RECOMMENDATION.** The library's `def-finite-simple-graph` + `rem-finite-simple-graph-convention`
already pin "graph" = finite simple, and `def-multigraph-loop-and-digraph` explicitly says
"A theorem stated merely for a graph therefore neither permits loops or parallel edges nor
supplies directions to its edges." So **every edge-colouring item must say "loopless
multigraph" in its Statement**, never "graph", and the loopless hypothesis must be stated,
not assumed — because in this library it is not a running convention. Restating a source's
"graph" as "loopless multigraph" is a faithful shortening only where that source's "graph"
means multigraph (Bondy–Murty, Vizing); it is an **unlicensed strengthening** where the
source means simple (Diestel, Misra–Gries, Cao–Chen–Shan). Cite accordingly.

**D2 — μ(G) vs μ(u,v) vs μ(v) vs Vizing's p.**

- Bondy–Murty 2008, verbatim: "we denote by µ(u, v) the number of parallel edges joining u
  and v. The multiplicity of G, denoted by µ(G), is the maximum value of µ, taken over all
  pairs of vertices of G."
- Bondy–Murty 1976, verbatim: "The maximum number of edges joining two vertices in G is
  called the multiplicity of G".
- Shan, verbatim: "Let µ(G) = max{e_G(u, v) : u, v ∈ V(G)} be the multiplicity of G, and
  for v ∈ V(G), let µ_G(v) = max{e_G(u, v) : u ∈ N_G(v)} be the **multiplicity of v**".
  McDonald uses the same local μ(v) in Ore's theorem.
- Berge–Fournier/Dunaway: `m_G(x,y)` for the pair count, `m_G(x) = max_y m_G(x,y)` local, and
  `t` for an **upper bound** on μ(G).
- **Vizing 1964 has no μ at all.** His parameter p is an *upper bound*: "It is called a
  p-graph if it has at most p parallel edges." So Theorem A.3 is literally "q(G) ≤ m + p
  for every p-graph", and μ(G) is merely the least valid p.

**RECOMMENDATION.** Define three things and keep them apart: μ(u,v) (pair), μ(v) := max_u
μ(u,v) (local; needed for Ore), μ(G) := max_{u≠v} μ(u,v) (global). State the theorem as
χ′ ≤ Δ + μ(G). Record the p-graph form in the Facts block as the source form and note that
the theorem is monotone in p, so the μ(G) form is the sharp instance. Do **not** silently
translate Vizing's "p-graph, q(G) ≤ m + p" into "χ′ ≤ Δ + μ" without saying that
substitution — it is a changed quantifier.

**D3 — ⌊3Δ/2⌋ or 3Δ/2?**

`⌊3Δ/2⌋`: Chen–Jing–Zang, Vizing 1964, West Ex. 7.1.35, Kostochka's Shannon *example*.
`3Δ/2` with no floor: McDonald Thm 2.1.2, Kostochka's Thm 7.1 *statement*, Green, RPI.

They are equivalent because χ′ is an integer, but the **proof** must use the palette
M = {1, …, ⌊3Δ/2⌋} (Kostochka's does, verbatim: "colors in M = {1, 2, …, ⌊3∆/2⌋}"), and the
counting at step 12 of C1.2 is parity-sensitive.

**RECOMMENDATION.** State **χ′(G) ≤ ⌊3Δ(G)/2⌋**. It is the stronger form, it is the form
the extremal example μK₃ achieves with equality, and it is the form Vizing and
Chen–Jing–Zang use. A statement of "χ′ ≤ 3Δ/2" would be a weaker theorem than the proof
delivers, which SCHEMA-wise is fine but wastes the result; the reverse (stating the floor
and proving only 3Δ/2) would be a fatal title/statement overreach.

**D4 — Goldberg's bound: g_o − 1 or g_o + 1?**

McDonald's thesis is **internally inconsistent**. Its *abstract* prints
"χ′ ≤ ∆ + 1 + (∆−2)/(g_o+1)" and "(g_o + 1)|2(µ − 1)"; its *body* (Theorem 2.1.4 and
Theorem 3.2.2) prints "(g_o − 1)" and "(g_o − 1) | 2(µ − 1)" throughout, and the body's
Theorem 3.1.2 computation ⌈∆k/(k−1)⌉ = ∆ + 1 + ⌊(∆−2)/(k−1)⌋ is consistent only with
g_o − 1. Chen–Jing–Zang's approximation family (m∆ + (m−3))/(m−1) matches the g_o − 1 form.

**RECOMMENDATION.** If Goldberg's theorem is mentioned at all, use **g_o − 1**, cite the
thesis *body* (Theorem 2.1.4, p. 6), never the abstract, and prefer citing Goldberg 1984 or
Stiebitz et al. §6 directly.

**D5 — Name of the density parameter.**

Γ(G) in Chen–Jing–Zang; ρ(G) in McDonald; "Density" in Stiebitz et al. §6.1; unnamed and
inline as bound (17.2) in Bondy–Murty 2008; and RPI's slides define a **different** quantity
ω(G) = max_{H⊆G} ⌈|E(H)|/⌊|V(H)|/2⌋⌉ — over *all* subgraphs with a floor in the denominator,
not over odd sets. **RECOMMENDATION.** Use **Γ(G)** with Chen–Jing–Zang's definition
verbatim; record "ρ(G)" as the alias McDonald uses; do **not** import RPI's ω, which is the
overfullness parameter, not the density.

**D6 — Vizing's own notation is a trap.** In Vizing 1964/1965: σ(G) = maximum degree,
q(G) = chromatic index ("chromatic class"), and **δ(x) = the set of colours missing at x**.
That δ collides head-on with the standard minimum-degree δ(G) which the library certainly
uses. **RECOMMENDATION.** Translate Vizing's notation on import: Δ for σ, χ′ for q, φ̄(x)
(or "the set of colours missing at x") for δ(x). Say in the Facts block that the source uses
σ/q/δ. The Stiebitz editorial Notes explain the historical reason for "chromatic class",
verbatim: "The terminology seems due to Sainte-Laguë … who used the term rank for the
vertex-chromatic number and class for the edge-chromatic number … in the English
translation of Berge's book the translator Alison Doig … changed the terminology from class
to index."

**D7 — "critical" is not one notion.** Cao–Chen–Shan / Chen–Jing–Zang: χ′(H) < χ′(G) for
every proper subgraph. Shan: "edge-chromatic critical", χ′ = Δ+1 and every proper subgraph
Δ-colourable. Vizing 1965: connected **and** σ = m **and** q = m+1 **and** every single-edge
deletion drops to m. These are not interchangeable — Vizing's carries connectivity, and
"every proper subgraph" vs "every edge deletion" differ a priori. **RECOMMENDATION.** Adopt
"χ′(H) < χ′(G) for every proper subgraph H of G" as the definition, derive the edge form as
a corollary, and when quoting Vizing's Theorem A.6 state his four-part definition in the
Facts block rather than substituting the modern one.

**D8 — Dates and attributions.**
- Shannon: **1949**, "A theorem on coloring the lines of a network", J. Math. Phys. 28,
  148–151 (Bondy–Murty 1976, Stiebitz et al. references, Chen–Jing–Zang). RPI's slides say
  "Shannon [1948]" — wrong. Vizing's own reference list cites a 1960 Russian translation.
- Vizing: **1964**, "On an estimate of the chromatic class of a p-graph", Diskret. Analiz 3,
  25–30 (Bondy–Murty both editions, Diestel, Chen–Jing–Zang, McDonald, Stiebitz et al.).
  Kostochka's slide says "(Vizing, 1963)" — wrong.
- Gupta: independent discovery. Bondy–Murty 1976 cite "Gupta, R. P. (1966). The chromatic
  index and the degree of a graph. Notices Amer. Math. Soc., 13, abstract 66T-429"; Stiebitz
  et al. cite "Gupta, R. P. (1967). Studies in the Theory of Graphs. Ph.D. Thesis, Tata
  Institute of Fundamental Research, Bombay"; Chen–Jing–Zang say "proved independently by
  Vizing [38] and Gupta [11] in the 1960s". **RECOMMENDATION.** Attribute the multigraph
  theorem to "Vizing (1964) and, independently, Gupta" and cite both the 1966 abstract and
  the 1967 thesis.
- Berge–Fournier: the author order differs between sources. Dunaway's bibliography has
  "J. C. Fournier and C. Berge"; Stiebitz et al.'s References has "Berge, C. and Fournier,
  J. C. (1991)". **Prefer the Stiebitz form** (a monograph bibliography over a student
  project's).

**D9 — Loops.** Bondy–Murty 2008 state the reason properly, verbatim: "Because loops are
self-adjacent, only loopless graphs admit proper edge colourings." **RECOMMENDATION.** Put
this as an explicit remark, not a silent hypothesis, since the library's multigraph
definition admits loops.

---

### E. PREREQUISITE AUDIT

**What the library already has that matters here** (verified by grep of `items/` on disk,
2026-08-13):

- `items/def-multigraph-loop-and-digraph.md` — published; defines finite undirected
  multigraph, loop, parallel edges, and states that a theorem "stated merely for a graph"
  does not cover multigraphs. **This is the right base object for every item below.**
- `items/thm-eulers-euler-circuit-characterisation.md` — published; "Let M be a connected
  finite undirected **multigraph**. Then M has an Euler circuit if and only if every vertex
  of M has even degree." Plus `lem-hierholzer-maximal-unused-edge-trail-closes`,
  `lem-splicing-edge-disjoint-closed-trails`, `cor-euler-trail-characterisation`,
  `def-euler-trail-and-circuit`, `def-multigraph-and-digraph-degrees-and-connectivity`.
- Hall / König / Gallai / Berge, Menger in four forms, Ford–Fulkerson, finite sets, posets,
  trees, vector spaces and rank (per the assignment brief).
- `items/def-petersen-graph.md` and `ex-petersen-graph-basic-invariants` — the *graph*, not
  Petersen's 2-factor theorem.

**What the library does NOT have** (grep found zero items mentioning edge colouring,
chromatic index, matchings-as-colour-classes, or 2-factors): **the entire edge-colouring
vocabulary is missing.** Everything in §C therefore rests on a foundation layer that must
be built first.

| result | needs | in library? |
|---|---|---|
| **Foundation layer (must be built first)** | | |
| `def` proper k-edge-colouring, χ′(G), k-edge-colourable, k-edge-chromatic | finite multigraph; matchings | multigraph ✓; **matching in a multigraph: verify** — the library's Hall/König matching theory is presumably simple-graph. If so this needs a small extension item. |
| `rem` only loopless multigraphs admit proper edge colourings | def loop | ✓ |
| `lem` χ′(G) ≥ Δ(G) | degrees | ✓ (`def-multigraph-and-digraph-degrees-and-connectivity`) |
| `def` colour missing/available at a vertex | above | n/a (new) |
| **(P1) Kempe chains: (α,β)-components are paths or even cycles; swapping preserves properness** | colour classes are matchings; degree ≤ 2 ⇒ path or cycle; alternation ⇒ even | **the "degree ≤ 2 ⇒ disjoint paths and cycles" classification must be checked**; if absent it is a 5-step [A] item on its own |
| **(P2) a vertex missing α or β is an end of its (α,β)-chain** | (P1) | new, 2 steps |
| **C5.1 König for bipartite multigraphs, Route K-a** | (P1), (P2), bipartite ⇒ no odd cycle, induction on \|E\| | bipartite/odd-cycle characterisation: **verify** the library has "G bipartite ⟺ no odd cycle" for multigraphs. Everything else new. |
| **C5.1 Route K-b (Lemma 6.1.1)** | **Euler circuits in multigraphs**, adding a vertex joined to all odd-degree vertices, handshake parity | **✓ — this is the one place the library's existing Euler machinery pays off directly** |
| C5.1 Route K-b (Lemma 6.1.2, optimal colourings) | Lemma 6.1.1, improper colourings, the "improvement" order | new |
| **C1.2 Shannon, Route R1** | (P1), (P2), induction on \|E\|, floor arithmetic in both parities, pigeonhole | all new; no exotic prerequisite. **The cleanest self-contained target in this gap.** |
| C1.3 Shannon, even-Δ route | Δ-regular loopless supergraph; **Petersen's 2-factor theorem**; cycles are 3-edge-colourable | **Petersen's 2-factor theorem is ABSENT.** Building it costs another item (Frink 1926, or Euler circuit + bipartite split + König — the Euler half is already in the library, the König half likely needs a multigraph version). |
| C1.4 Shannon via 2Δ−μ | — | **route unverified; see F3. Do not scaffold.** |
| **C2.2 Vizing multigraph, Route V1** | (P1)=Lemma A.1, (P2), Lemma A.2 (pigeonhole on chain ends), the association lemma (pigeonhole/injection into a set of size ≥ p), finite descent | all new, but **nothing beyond finite pigeonhole and Kempe chains**. No Hall, no flows, no linear algebra. Genuinely in scope. |
| C2.3 Berge–Fournier | as above + independence of a vertex set | source defective (§C2.3) |
| C2.4 Kierstead-path route | Kierstead's Theorem | **not obtained; blocker F4** |
| Bondy–Murty Lemma 17.3 (alternative simple-graph Vizing) | **Hall's theorem** and M-alternating/augmenting paths | ✓ library has Hall/König/Berge — this route is unusually well supported, but it is simple-graph only |
| C5.2 Fournier's simple Vizing | Lemma 6.1.1 + Lemma 6.1.2 | shares prerequisites with K-b |
| **C5.3 overfull** | matchings have ≤ ⌊n/2⌋ edges; χ′ ≥ \|E\|/⌊n/2⌋; parity | new but trivial; **[A]** |
| C5.4 critical graphs + VAL | criticality, fan-sequences, Lemma A.1/A.2 | rests entirely on the C2.2 cluster |
| **C3 lower bound χ′ ≥ ⌈Γ(G)⌉** | colour classes are matchings; a matching inside an odd set S has ≤ (\|S\|−1)/2 edges; ceiling | new, **[A]**, 4 steps — **cheap and worth having** |
| C3 Goldberg–Seymour upper bound | Tashkinov trees, extended Tashkinov trees, good hierarchies, Kempe control | **[C], out of reach — `proved_here: false` only** |
| Ore, Steffen, Goldberg, Vizing A.11 | Tashkinov/Kierstead machinery | **[C]** |
| χ′(G) = χ(L(G)) | line graph; **vertex chromatic number** | vertex colouring: **verify**. If the library has no χ(G), skip this and the 2Δ−2 bound. |

**Nothing in §C needs the spectral theorem, measure theory, or algebraic topology.** The
only heavyweight external prerequisite anywhere is Petersen's 2-factor theorem, and only for
the supplementary even-Δ route.

**Suggested build order for the scaffolder** (each arrow = strict dependency):

```
def multigraph (have) ─┬─> def proper edge colouring, χ′ ──> χ′ ≥ Δ
                       └─> def missing/available colour
                              │
                              v
                        (P1) Kempe chains ──> (P2) missing ⇒ endpoint
                              │        │
      ┌───────────────────────┘        └────────────────┐
      v                                                  v
König bipartite multigraph (K-a)                Lemma A.2 (3-vertex separation)
      │                                                  │
      │                             association lemma ───┤
      v                                                  v
Shannon ⌊3Δ/2⌋  (C1.2)                    Vizing multigraph Δ+μ  (C2.2)
                                                         │
                                          ┌──────────────┴───────────┐
                                          v                          v
                              Corollary: simple Vizing Δ+1     VAL (Thm A.6) ──> critical graph properties
```

Independently, and cheaply: `def Γ(G)` → `χ′ ≥ ⌈Γ⌉`; `def overfull` → overfull ⇒ odd order,
Class 2; `rem` Goldberg–Seymour theorem with `proved_here: false`.

---

### F. BLOCKERS

**F1 — Stiebitz, Scheide, Toft, Favrholdt, body chapters 1–9: NOT OBTAINED.**
What I tried: Wiley product page (HTTP 403 Forbidden, as predicted in the brief); the
Ilmenau `komgra` directory with guessed names `Chapter1Wiley.pdf`, `Chapter2Wiley.pdf`,
`PrefaceWiley.pdf`, `TOCWiley.pdf`, `ContentsWiley.pdf` (all returned 236-byte HTML error
pages — only `FrontMatterWiley.pdf` and `BackMatterWiley.pdf` exist there); web search for a
GBV/Göttingen contents scan (no hit). **What I did get instead** more than compensates: the
complete printed Contents verbatim from the author-hosted front matter, cross-checked
against Stanford SearchWorks and vdoc.pub, plus **Appendices A and B in full**, which
contain Vizing's 1964 and 1965 papers with proofs — the actual mathematics the body
chapters expound. A full-book PDF appears to be posted at
`https://vdoc.pub/documents/graph-edge-coloring-vizings-theorem-and-goldbergs-conjecture-2cu9l3i7p1qg`;
**I deliberately did not download it** — a whole copyrighted Wiley monograph on a
file-sharing mirror is not a reputable source and the repo's citation rules should not rest
on one. If the owner wants Chapters 2 and 7 (the Vizing-fan and Shannon/extreme-graph
chapters), that is a library-access decision, not a scraping one.

**F2 — Berge & Fournier, "A short proof for a generalization of Vizing's theorem",
J. Graph Theory 15 (1991) 333–336: NOT OBTAINED.**
What I tried: I have the full secondary exposition (Dunaway, S12) and identified a concrete
defect in it (§C2.3, Case 2 selects "any vertex x₀ of maximum degree such that d_G(x₀) = D"
when D = Δ+1 makes that vertex nonexistent). Wiley Online Library hosts the original and is
paywalled; I did not attempt to bypass. **Impact: low** — Vizing's own 1964 proof (§C2.2) is
in hand verbatim and is the recommended route, so Berge–Fournier is only needed if the
scaffolder wants the *stronger* Δ+μ−1 statement.

**F3 — χ′(G) ≤ 2Δ − μ (Bondy–Murty 2008 Ex. 17.2.8a): STATED, NOT PROVED, NOT SOURCED.**
What I tried: the exercise is bare in Bondy–Murty; I searched McDonald, Stiebitz Appendix A,
Vizing 1964, West's solution manual §7.1 (which solves 7.1.34 and 7.1.35 but not this
bound), Kostochka's slides, and the RPI/Green/Aboulker notes — none proves it. I then
attempted a direct maximum-domain counting proof; it closes for **critical** multigraphs
(§C1.4) but the induction does not descend, because deleting an edge of the unique
maximum-multiplicity pair lowers μ and thereby *raises* the target bound. **Recorded as an
open item, not as a proof route.** The scaffolder must not scaffold this bound, and must not
present my partial counting as a proof. Shannon is fully covered by §C1.2 without it.

**F4 — Kierstead, "A new method of proving theorems on chromatic index", Discrete Math. 52
(1984) 159–164: NOT OBTAINED.** Would make §C2.4 (a ~8-step derivation of *both* Shannon and
Vizing from one theorem) viable. I have the theorem's exact statement (McDonald Theorem
2.2.2, verbatim in §B4) but not its proof; McDonald explicitly declines to reproduce it.
Elsevier-hosted, paywalled.

**F5 — West, *Introduction to Graph Theory* 2nd ed., MAIN TEXT of §7.1: NOT OBTAINED.**
What I tried: the `dokumen.pub` mirror of the book now returns "website under maintenance";
web search for a §7.1 PDF found nothing usable. **What I did get**: West's *Instructor's
Solution Manual* for §7.1 (captured earlier this run at `/tmp/gsrc/dok.html`), from which the
exercise statements and their solutions are quoted verbatim in §B7 and §C1.3. West's own
theorem numbering for §7.1 (whether König is 7.1.7, Vizing 7.1.10, etc.) is therefore
**unverified — do not cite a West theorem number**. The section is titled "Section 7.1: Line
Graphs and Edge-Coloring" inside "Chapter 7: Edges and Cycles" (this much is verbatim in the
manual's running heads). **Impact: low** — the source-depth rule is already satisfied by four
independent primary treatments (Bondy–Murty 2008, Bondy–Murty 1976, Stiebitz et al.
Appendix A, McDonald), of which three are textbooks/monographs/theses with harvestable
contents.

**F6 — Soifer, *The Mathematical Coloring Book*: NOT ATTEMPTED.** It is in the Stiebitz
bibliography ("Soifer, A. (2009). The Mathematical Coloring Book, Springer, Berlin.") but is
a history-and-exposition volume on *vertex* colouring problems; with four primary
edge-colouring treatments already secured, chasing it was not worth the fetch budget. Record
its `deferred` disposition as "vertex-colouring history; not an edge-colouring treatment".

**F7 — Kostochka's Math 412 slides state Claims 1, 2 and 3 without proof.** This is a
property of the source, not a fetch failure. The three proofs are supplied in §C1.2, each
marked `[gap-filled]`, and each is a two-to-four-line standard argument. **The scaffolder
must re-derive them and must not attribute them to Kostochka.** Under the repo's
generated-claim rules these are AI-supplied *proof* steps for a literature-derived
*statement*, which is permitted — `provenance.statement: literature-derived`,
`provenance.proof: ai-altered` — but the Statement itself (Theorem 7.1) is fully sourced.

**F8 — Bondy–Murty 1976 is an OCR scan.** Every quotation from it in §B2 required restoring
χ′ from `X'`, Δ from `~`/`A`/`b..`, and μ from `IL`/`lot`. The restorations are marked at the
point of use. A scaffolder citing this source should re-open PDF pages 98–107 of
`/tmp/bondy_murty_1976.pdf` (or `https://www.zib.de/groetschel/teaching/WS1314/BondyMurtyGTWA.pdf`)
before quoting, and should prefer Bondy–Murty 2008 for any statement that appears in both.
