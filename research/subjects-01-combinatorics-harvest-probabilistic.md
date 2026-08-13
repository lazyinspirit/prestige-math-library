# subjects-01 · combinatorics lane — source harvest: probabilistic method, Ramsey theory, additive combinatorics

Research subagent report. Read-only research artifact: no scaffold file, no `items/`, no
`plan-spec.json` was touched.

**Hard constraint governing every verdict below.** The library has NO measure theory and NO
σ-additive probability. A finite probability space is a finite set with nonnegative weights
summing to 1; expectation is a finite sum. The library DOES have real limits, sequences, `exp`
and `log`, so a statement about a *sequence* of finite spaces is expressible. Every result in
§C carries an explicit reachability verdict, and §E is the consolidated audit.

---

## A. Source ledger

| # | Source | URL | Form obtained | Range read |
|---|---|---|---|---|
| S1 | Alon, Noga & Spencer, Joel H., *The Probabilistic Method*, 4th ed., Wiley 2016 (Wiley Series in Discrete Mathematics and Optimization), ISBN 978-1-119-06195-3 | `http://lib.ysu.am/disciplines_bk/39cbf4832349c9024453be49f58db93e.pdf` | **Full text PDF, 394 pp** | Complete TOC (pp. vii–xii); read in full detail §1.1–1.3, §5.1–5.7, §6.1–6.3, §7.1–7.6, §8.1–8.2, §9.2–9.3, §13.1–13.5, §15.7, §16.1–16.2; TOC + named-result sweep over all of Chs. 1–17 and Appendices A–B |
| S2 | Zhao, Yufei, *Graph Theory and Additive Combinatorics: Exploring Structure and Randomness*, CUP 2023 — free author-hosted draft | `https://yufeizhao.com/gtacbook/gtacbook.pdf` | **Full text PDF, 342 pp** | Complete TOC (pp. i–iii); read in detail Ch. 6 (§6.1, §6.2, §6.5), Ch. 7 headings; named-result sweep over Chs. 0–9 |
| S3 | Zhao, Yufei, *Probabilistic Methods in Combinatorics* — MIT 18.226 lecture notes (Fall 2022, rev. 18 Jun 2024) | `https://yufeizhao.com/pm/probmethod_notes.pdf` (mirror: `https://ocw.mit.edu/courses/18-226-probabilistic-methods-in-combinatorics-fall-2022/mit18_226_f22_lec_full.pdf`) | **Full text PDF, 214 pp** | Complete TOC; read in detail Ch. 1, §5.0–5.1, §9.1–9.2; named-result sweep over Chs. 1–11 |
| S4 | Matoušek, Jiří & Vondrák, Jan, *The Probabilistic Method* (lecture notes, Charles University / KAM-DIMATIA) | `https://www.cs.cmu.edu/~15850/handouts/matousek-vondrak-prob-ln.pdf` | **Full text PDF, 71 pp** | Complete TOC + §1.1 in full; named-result sweep over Chs. 1–9 |
| S5 | Gowers, W. T. (lect.), *Entropy Methods in Combinatorics*, Cambridge Part III, June 2025 (notes by D. Naylor) | `https://danielnaylor.uk/notes/III/Lent/EMC/EMC.pdf` (HTML: `https://danielnaylor.uk/notes/III/Lent/EMC/HTML/EMCse4.html`) | **Full text PDF, 49 pp** | Complete TOC + §1 in full; named-result sweep over §§1–7 |

Sources S6–S13 (Graham–Rothschild–Spencer; Landman–Robertson; Hindman–Strauss; Tao–Vu;
Green's notes; Bollobás; Janson–Łuczak–Ruciński; Molloy–Reed; Frieze–Karoński; Spencer's
*Ten Lectures*; and the additional lecture-note sets) are recorded in §B.6–§B.8 below with their
own URLs and forms.

**Source-depth check (the two-independent-treatments rule).** Every topic block below is
backed by at least two independent treatments of which at least one is a textbook/monograph
with a harvestable TOC: probabilistic method → S1 (monograph) + S3/S4 (two independent full
note sets); regularity + additive → S2 (monograph) + Tao–Vu (monograph) + Green's notes;
entropy → S1 §15.7 (monograph) + S5 (full course) + S3 Ch. 10; Ramsey → GRS (monograph) +
Landman–Robertson (monograph) + the note sets. No entry rests on an encyclopedia article.

---

## B. The canonical-coverage harvest

Verbatim section headings with each source's own numbering, exhaustive over the range read.

### B.1 Alon & Spencer, *The Probabilistic Method*, 4th ed. — full TOC (verbatim)

Interludes titled "The Probabilistic Lens: …" sit between chapters and are reproduced in place
(they are the untitled trailing entries in the published TOC).

```
PART I  METHODS

1 The Basic Method
  1.1 The Probabilistic Method
  1.2 Graph Theory
  1.3 Combinatorics
  1.4 Combinatorial Number Theory
  1.5 Disjoint Pairs
  1.6 Independent Sets and List Coloring
  1.7 Exercises
  The Probabilistic Lens: The Erdős–Ko–Rado Theorem

2 Linearity of Expectation
  2.1 Basics
  2.2 Splitting Graphs
  2.3 Two Quickies
  2.4 Balancing Vectors
  2.5 Unbalancing Lights
  2.6 Without Coin Flips
  2.7 Exercises
  The Probabilistic Lens: Brégman's Theorem

3 Alterations
  3.1 Ramsey Numbers
  3.2 Independent Sets
  3.3 Combinatorial Geometry
  3.4 Packing
  3.5 Greedy Coloring
  3.6 Continuous Time
  3.7 Exercises
  The Probabilistic Lens: High Girth and High Chromatic Number

4 The Second Moment
  4.1 Basics
  4.2 Number Theory
  4.3 More Basics
  4.4 Random Graphs
  4.5 Clique Number
  4.6 Distinct Sums
  4.7 The Rödl nibble
  4.8 Exercises
  The Probabilistic Lens: Hamiltonian Paths

5 The Local Lemma
  5.1 The Lemma
  5.2 Property B and Multicolored Sets of Real Numbers
  5.3 Lower Bounds for Ramsey Numbers
  5.4 A Geometric Result
  5.5 The Linear Arboricity of Graphs
  5.6 Latin Transversals
  5.7 Moser's Fix-It Algorithm
  5.8 Exercises
  The Probabilistic Lens: Directed Cycles

6 Correlation Inequalities
  6.1 The Four Functions Theorem of Ahlswede and Daykin
  6.2 The FKG Inequality
  6.3 Monotone Properties
  6.4 Linear Extensions of Partially Ordered Sets
  6.5 Exercises
  The Probabilistic Lens: Turán's Theorem

7 Martingales and Tight Concentration
  7.1 Definitions
  7.2 Large Deviations
  7.3 Chromatic Number
  7.4 Two General Settings
  7.5 Four Illustrations
  7.6 Talagrand's Inequality
  7.7 Applications of Talagrand's Inequality
  7.8 Kim–Vu Polynomial Concentration
  7.9 Exercises
  The Probabilistic Lens: Weierstrass Approximation Theorem

8 The Poisson Paradigm
  8.1 The Janson Inequalities
  8.2 The Proofs
  8.3 Brun's Sieve
  8.4 Large Deviations
  8.5 Counting Extensions
  8.6 Counting Representations
  8.7 Further Inequalities
  8.8 Exercises
  The Probabilistic Lens: Local Coloring

9 Quasirandomness
  9.1 The Quadratic Residue Tournaments
  9.2 Eigenvalues and Expanders
  9.3 Quasirandom Graphs
  9.4 Szemerédi's Regularity Lemma
  9.5 Graphons
  9.6 Exercises
  The Probabilistic Lens: Random Walks

PART II  TOPICS

10 Random Graphs
  10.1 Subgraphs
  10.2 Clique Number
  10.3 Chromatic Number
  10.4 Zero–One Laws
  10.5 Exercises
  The Probabilistic Lens: Counting Subgraphs

11 The Erdős–Rényi Phase Transition
  11.1 An Overview
  11.2 Three Processes
  11.3 The Galton–Watson Branching Process
  11.4 Analysis of the Poisson Branching Process
  11.5 The Graph Branching Model
  11.6 The Graph and Poisson Processes Compared
  11.7 The Parametrization Explained
  11.8 The Subcritical Regions
  11.9 The Supercritical Regimes
  11.10 The Critical Window
  11.11 Analogies to Classical Percolation Theory
  11.12 Exercises
  The Probabilistic Lens: Long paths in the supercritical regime

12 Circuit Complexity
  12.1 Preliminaries
  12.2 Random Restrictions and Bounded-Depth Circuits
  12.3 More on Bounded-Depth Circuits
  12.4 Monotone Circuits
  12.5 Formulae
  12.6 Exercises
  The Probabilistic Lens: Maximal Antichains

13 Discrepancy
  13.1 Basics
  13.2 Six Standard Deviations Suffice
  13.3 Linear and Hereditary Discrepancy
  13.4 Lower Bounds
  13.5 The Beck–Fiala Theorem
  13.6 Exercises
  The Probabilistic Lens: Unbalancing Lights

14 Geometry
  14.1 The Greatest Angle Among Points in Euclidean Spaces
  14.2 Empty Triangles Determined by Points in the Plane
  14.3 Geometrical Realizations of Sign Matrices
  14.4 ε-Nets and VC-Dimensions of Range Spaces
  14.5 Dual Shatter Functions and Discrepancy
  14.6 Exercises
  The Probabilistic Lens: Efficient Packing

15 Codes, Games, and Entropy
  15.1 Codes
  15.2 Liar Game
  15.3 Tenure Game
  15.4 Balancing Vector Game
  15.5 Nonadaptive Algorithms
  15.6 Half Liar Game
  15.7 Entropy
  15.8 Exercises
  The Probabilistic Lens: An Extremal Graph

16 Derandomization
  16.1 The Method of Conditional Probabilities
  16.2 d-Wise Independent Random Variables in Small Sample Spaces
  16.3 Exercises
  The Probabilistic Lens: Crossing Numbers, Incidences, Sums and Products

17 Graph Property Testing
  17.1 Property Testing
  17.2 Testing Colorability
  17.3 Testing Triangle-Freeness
  17.4 Characterizing the Testable Graph Properties
  17.5 Exercises
  The Probabilistic Lens: Turán Numbers and Dependent Random Choice

Appendix A  Bounding of Large Deviations
  A.1 Chernoff Bounds
  A.2 Lower Bounds
  A.3 Exercises
  The Probabilistic Lens: Triangle-Free Graphs Have Large Independence Numbers

Appendix B  Paul Erdős
  B.1 Papers
  B.2 Conjectures
  B.3 On Erdős
  B.4 Uncle Paul
  The Probabilistic Lens: The Rich Get Richer

Appendix C  Hints to Selected Exercises
References · Author Index · Subject Index
```

**Disposition of every Alon–Spencer chapter.** Chs. 1–3 `already-published`
(finite-probability-and-the-probabilistic-method, 28 items — first moment, alteration,
deletion, high girth/high chromatic). Ch. 4 `included` (second moment; §4.7 Rödl nibble
`deferred`). Ch. 5 partly `already-published` (§5.1–5.3 LLL symmetric + asymmetric);
§5.5–5.7 `included`. Chs. 6, 7, 8 `included` — the core new material. Ch. 9 `included`
(§9.1–9.3), §9.4–9.5 `deferred` (regularity/graphons belong to a regularity page, and §9.5
graphons rest on measure theory). Ch. 10 `included` with care (§10.4 zero–one laws
`out-of-scope`: first-order logic + Ehrenfeucht games). Ch. 11 `out-of-scope` — the
Erdős–Rényi phase transition rests on Galton–Watson branching processes and Poisson limits,
i.e. genuinely infinite probability. Ch. 12 `out-of-scope` (circuit complexity — a
computability/complexity level the library has not reached). Ch. 13 `included`. Ch. 14
`included` selectively (§14.4 VC dimension, ε-nets). Ch. 15 `included` (§15.7 entropy is the
prize; §15.1–15.6 games `deferred`). Ch. 16 `included`. Ch. 17 `deferred` (property testing
rests on the regularity lemma). Appendix A `already-published` in part (Chernoff for random
signs) and `included` for the general bounds.

### B.2 Alon & Spencer — named-result headings (verbatim, 182 harvested)

Sweep over Chs. 1–17 + Appendix A. Bracketed names are the book's own.

```
1.1.1 Prop | 1.2.1 Thm | 1.2.2 Thm | 1.2.3 Lem | 1.3.1 Prop [Erdős (1963a)] | 1.3.3 Thm
1.4.1 Thm [Erdős (1965a)] | 1.6.1 Thm
2.1.1 Thm | 2.2.1 Thm | 2.2.2 Thm | 2.2.3 Thm | 2.2.4 Lem | 2.3.1 Thm | 2.3.2 Thm
2.4.1 Thm | 2.4.2 Thm | 2.5.1 Thm
3.1.2 Thm | 3.1.3 Thm | 3.2.1 Thm | 3.3.1 Thm | 3.4.1 Thm | 3.5.1 Thm | 3.6.1 Thm
[Spencer (1995)] | 3.6.2 Cor
4.1.1 Thm [Chebyshev's Inequality] | 4.2.2 Thm | 4.3.4 Cor | 4.3.5 Cor | 4.4.1 Thm
4.4.4 Thm | 4.5.1 Thm | 4.7.1 Thm
5.1.1 Lem [The Local Lemma; General Case] | 5.1.2 Cor [The Local Lemma; Symmetric Case]
5.2.1 Thm | 5.2.2 Thm | 5.3.1 Prop | 5.4.1 Thm
5.5.1 Conj [The Linear Arboricity Conjecture] | 5.5.2 Conj | 5.5.3 Prop | 5.5.4 Thm
5.5.5 Lem | 5.5.6 Thm | 5.5.7 Thm | 5.6.1 Thm
5.7.1 Thm | 5.7.2 Thm | 5.7.3 Thm | 5.7.4 Thm | 5.7.5 Thm | 5.7.6 Thm [Grytczuk et al. (2013)]
6.1.1 Thm [The Four Functions Theorem] | 6.1.2 Cor | 6.1.3 Cor | 6.1.4 Cor
6.2.1 Thm [The FKG inequality] | 6.3.1 Prop | 6.3.2 Thm | 6.3.3 Thm | 6.4.1 Thm
7.2.1 Thm [Azuma's Inequality] | 7.2.2 Cor | 7.2.3 Thm | 7.2.4 Thm [Shamir and Spencer (1987)]
7.3.1 Lem | 7.3.2 Thm | 7.3.3 Thm | 7.3.4 Lem | 7.4.1 Thm | 7.4.3 Thm
7.6.1 Thm | 7.6.2 Thm  [§7.6 Talagrand's Inequality; §7.8 Kim–Vu Polynomial Concentration]
8.1.1 Thm [The Janson Inequality] | 8.1.2 Thm [The Extended Janson Inequality]
8.4.1 Lem | 8.4.2 Lem | 8.6.1 Lem [The Borel–Cantelli Lemma] | 8.6.2 Thm [Erdős (1956)]
8.7.1 Thm [Suen]
9.1.1 Thm | 9.1.2 Lem | 9.2.1 Thm | 9.2.2 Cor | 9.2.4 Thm | 9.2.5 Cor | 9.2.7 Thm
9.3.1 Thm | 9.3.2 Thm | 9.4.1 Thm | 9.4.2 Lem | 9.4.3 Prop | 9.4.4 Thm | 9.5.1 Thm | 9.5.3 Thm
10.1.1 Thm | 10.3.1 Thm | 10.4.1 Thm | 10.4.3 Lem | 10.4.4 Thm | 10.4.5 Thm
10.4.6 Lem [Generic Extension] | 10.4.7 Lem
11.5.1 Thm | 11.6.2 Thm
12.2.1 Lem [The Switching Lemma] | 12.2.2 Thm | 12.2.3 Cor | 12.3.1 Lem | 12.3.2 Lem
12.3.3 Cor | 12.4.1 Thm | 12.4.2 Lem | 12.5.1 Lem | 12.5.2 Cor | 12.5.3 Cor
13.1.1 Thm | 13.2.1 Thm | 13.2.2 Thm | 13.2.3 Thm | 13.2.4 Thm | 13.2.5 Thm
13.3.1 Thm | 13.3.2 Thm | 13.3.3 Cor | 13.3.4 Cor | 13.4.1 Thm | 13.5.1 Thm | 13.5.2 Conj
14.1.1 Thm | 14.1.2 Thm | 14.2.1 Thm | 14.2.2 Thm | 14.3.1 Thm | 14.3.2 Lem | 14.3.3 Lem
14.4.1 Lem | 14.4.2 Cor | 14.4.3 Cor | 14.4.4 Thm | 14.4.5 Thm | 14.4.6 Claim | 14.4.7 Claim
14.5.1 Thm | 14.5.2 Lem | 14.5.3 Thm
15.1.1 Thm [Shannon's Theorem] | 15.1.2 Thm | 15.2.1 Thm | 15.2.2 Cor | 15.3.1 Thm
15.3.2 Lem | 15.3.3 Thm | 15.4.1 Thm | 15.4.2 Cor | 15.4.3 Thm | 15.4.4 Cor
15.6.1 Thm [Dumitriu and Spencer (2004)]
15.7.1 Lem | 15.7.2 Prop | 15.7.3 Cor | 15.7.4 Prop | 15.7.5 Cor | 15.7.6 Cor
15.7.7 Cor [Chung et al. (1986)] | 15.7.8 Cor
16.1.1 Prop | 16.1.2 Thm | 16.1.3 Claim | 16.1.4 Claim | 16.2.1 Thm | 16.2.2 Lem | 16.2.3 Prop
17.2.3 Claim | 17.2.4 Claim | 17.2.5 Claim | 17.2.6 Claim | 17.3.1 Lem
17.4.1 Lem | 17.4.2 Thm [Alon and Shapira (2005)] | 17.4.3 Thm
A.1.1 Thm | A.1.2 Cor | A.1.15 Thm | A.1.16 Thm
```

### B.3 Zhao, *Graph Theory and Additive Combinatorics* — full TOC (verbatim)

```
Preface · Notation and Conventions

0 Appetizer: Triangles and Equations
  0.1 Schur's Theorem
  0.2 Progressions
  0.3 What's Next in the Book?

1 Forbidding a Subgraph
  1.1 Forbidding a Triangle: Mantel's Theorem
  1.2 Forbidding a Clique: Turán's Theorem
  1.3 Turán Density and Supersaturation
  1.4 Forbidding a Complete Bipartite Graph: Kővári–Sós–Turán Theorem
  1.5 Forbidding a General Subgraph: Erdős–Stone–Simonovits Theorem
  1.6 Forbidding a Cycle
  1.7 Forbidding a Sparse Bipartite Graph: Dependent Random Choice
  1.8 Lower Bound Constructions: Overview
  1.9 Randomized Constructions
  1.10 Algebraic Constructions
  1.11 Randomized Algebraic Constructions

2 Graph Regularity Method
  2.1 Szemerédi's Graph Regularity Lemma
  2.2 Triangle Counting Lemma
  2.3 Triangle Removal Lemma
  2.4 Graph Theoretic Proof of Roth's Theorem
  2.5 Large 3-AP-Free Sets: Behrend's Construction
  2.6 Graph Counting and Removal Lemmas
  2.7 Exercises on Applying Graph Regularity
  2.8 Induced Graph Removal and Strong Regularity
  2.9 Graph Property Testing
  2.10 Hypergraph Removal and Szemerédi's Theorem
  2.11 Hypergraph Regularity

3 Pseudorandom Graphs
  3.1 Quasirandom Graphs
  3.2 Expander Mixing Lemma
  3.3 Abelian Cayley Graphs and Eigenvalues
  3.4 Quasirandom Groups
  3.5 Quasirandom Cayley Graphs and Grothendieck's Inequality
  3.6 Second Eigenvalue: Alon–Boppana Bound

4 Graph Limits
  4.1 Graphons
  4.2 Cut Distance
  4.3 Homomorphism Density
  4.4 W-Random Graphs
  4.5 Counting Lemma
  4.6 Weak Regularity Lemma
  4.7 Martingale Convergence Theorem
  4.8 Compactness of the Graphon Space
  4.9 Equivalence of Convergence

5 Graph Homomorphism Inequalities
  5.1 Edge vs. Triangle Densities
  5.2 Cauchy–Schwarz
  5.3 Hölder
  5.4 Lagrangian
  5.5 Entropy

6 Forbidding 3-Term Arithmetic Progressions
  6.1 Fourier Analysis in Finite Field Vector Spaces
  6.2 Roth's Theorem in the Finite Field Model
  6.3 Fourier Analysis in the Integers
  6.4 Roth's Theorem in the Integers
  6.5 Polynomial Method
  6.6 Arithmetic Regularity
  6.7 Popular Common Difference

7 Structure of Set Addition
  7.1 Sets of Small Doubling: Freiman's Theorem
  7.2 Sumset Calculus I: Ruzsa Triangle Inequality
  7.3 Sumset Calculus II: Plünnecke's Inequality
  7.4 Covering Lemma
  7.5 Freiman's Theorem in Groups with Bounded Exponent
  7.6 Freiman Homomorphisms
  7.7 Modeling Lemma
  7.8 Iterated Sumsets: Bogolyubov's Lemma
  7.9 Geometry of Numbers
  7.10 Finding a GAP in a Bohr Set
  7.11 Proof of Freiman's Theorem
  7.12 Polynomial Freiman–Ruzsa Conjecture
  7.13 Additive Energy and the Balog–Szemerédi–Gowers Theorem

8 Sum-Product Problem
  8.1 Multiplication Table Problem
  8.2 Crossing Number Inequality and Point-Line Incidences
  8.3 Sum-Product via Multiplicative Energy

9 Progressions in Sparse Pseudorandom Sets
  9.1 Green–Tao Theorem
  9.2 Relative Szemerédi Theorem
  9.3 Transference Principle
  9.4 Dense Model Theorem
  9.5 Sparse Counting Lemma
  9.6 Proof of the Relative Roth Theorem

References · Index
```

**Disposition.** Ch. 0 `already-published` in part (Schur — ramsey-theory) / `included`
(0.1.3 Fermat mod p). Ch. 1 `already-published` (extremal-graph-theory, 20 items, through
Erdős–Stone–Simonovits and hypergraph KST); §1.7 dependent random choice, §1.10–1.11
algebraic/randomized-algebraic constructions `included`. Ch. 2 `deferred` — the regularity
method deserves its own A/B pair; §2.5 Behrend `included` (elementary). Ch. 3 `included`
(§3.1–3.3 quasirandomness, expander mixing, Cayley eigenvalues); §3.5 Grothendieck, §3.6
Alon–Boppana `deferred`. Ch. 4 **`out-of-scope`** — graphons are measurable functions on
[0,1]²; §4.7 is the martingale *convergence* theorem, genuinely measure-theoretic. Ch. 5
`included` for §5.5 (entropy), rest `deferred`. Ch. 6 `included` — §6.1–6.2 and §6.5 are the
highest-value reachable additive combinatorics in the whole harvest. Ch. 7 `included` for
§7.1–7.4, §7.13; §7.9–7.11 `deferred` (geometry of numbers). Ch. 8 `included` for §8.1;
§8.2–8.3 `deferred` (needs Szemerédi–Trotter). Ch. 9 `out-of-scope` (Green–Tao).

### B.4 Zhao, *Probabilistic Methods in Combinatorics* (MIT 18.226) — full TOC (verbatim)

```
1 Introduction
  1.1 Lower bounds to Ramsey numbers
  1.2 Set systems
  1.3 2-colorable hypergraphs
  1.4 List chromatic number of K_{n,n}
2 Linearity of Expectations
  2.1 Hamiltonian paths in tournaments
  2.2 Sum-free subset
  2.3 Turán's theorem and independent sets
  2.4 Sampling
  2.5 Unbalancing lights
  2.6 Crossing number inequality
3 Alterations
  3.1 Dominating set in graphs
  3.2 Heilbronn triangle problem
  3.3 Markov's inequality
  3.4 High girth and high chromatic number
  3.5 Random greedy coloring
4 Second Moment
  4.1 Does a typical random graph contain a triangle?
  4.2 Thresholds for fixed subgraphs
  4.3 Thresholds
  4.4 Clique number of a random graph
  4.5 Hardy–Ramanujan theorem on the number of prime divisors
  4.6 Distinct sums
  4.7 Weierstrass approximation theorem
5 Chernoff Bound
  5.1 Discrepancy
  5.2 Nearly equiangular vectors
  5.3 Hajós conjecture counterexample
6 Lovász Local Lemma
  6.1 Statement and proof
  6.2 Coloring hypergraphs
  6.3 Independent transversal
  6.4 Directed cycles of length divisible by k
  6.5 Lopsided local lemma
  6.6 Algorithmic local lemma
7 Correlation Inequalities
  7.1 Harris–FKG inequality
  7.2 Applications to random graphs
8 Janson Inequalities
  8.1 Probability of non-existence
  8.2 Lower tails
  8.3 Chromatic number of a random graph
9 Concentration of Measure
  9.1 Bounded differences inequality
  9.2 Martingales concentration inequalities
  9.3 Chromatic number of random graphs
  9.4 Isoperimetric inequalities: a geometric perspective
  9.5 Talagrand's inequality
  9.6 Euclidean traveling salesman problem
10 Entropy
  10.1 Basic properties
  10.2 Permanent, perfect matchings, and Steiner triple systems
  10.3 Sidorenko's inequality
  10.4 Shearer's lemma
11 Containers
  11.1 Containers for triangle-free graphs
  11.2 Graph containers
  11.3 Hypergraph container theorem
```

Named results harvested (149) include, verbatim: `Theorem 1.1.9 (Ramsey lower bound via local
lemma; Spencer 1977)`, `Theorem 1.2.2 (Sperner's theorem, 1928)`, `Theorem 1.2.3 (LYM
inequality; Bollobás 1965, Lubell 1966, Meshalkin 1963, and Yamamoto 1954)`, `Theorem 1.2.4
(Bollobás' two families theorem 1965)`, `Theorem 1.2.9 (Erdős–Ko–Rado 1961; proved in 1938)`,
`Theorem 1.4.5 (Saxton and Thomason 2015)`, `Theorem 2.1.2 (Tournaments wit many Hamilton
paths; Szele 1943)`, `Theorem 2.3.2 (Caro 1979, Wei 1981)`, `Theorem 2.6.2 (Crossing number
inequality)`, `Theorem 3.5.1 (Radhakrishnan and Srinivasan (2000))`, `Theorem 4.2.10 (Threshold
for containing a fixed graph: Bollobás 1981)`, `Definition 4.3.1 (Threshold)`, `Theorem 4.3.5
(Monotonicity of satisfying probability)`, `Theorem 4.3.6 (Existence of thresholds: Bollobás
and Thomason 1987)`, `Lemma 4.3.7 (Multiple round exposure)`, `Definition 4.3.14 (Sharp
thresholds)`, `Corollary 4.3.15 (of Friedgut's sharp threshold theorem)`, `Conjecture 4.3.16
(k-colorability threshold)`, `Theorem 4.3.17 (Achlioptas and Friedgut 2000)`, `Theorem 4.4.2
(Second moment bound for clique number)`, `Theorem 4.4.3 (Two-point concentration for clique
number)`, `Theorem 4.5.1 (Hardy and Ramanujan 1917)`, `Theorem 4.5.2 (Central limit theorem for
sums of independent Bernoullis)`, `Theorem 4.5.3 (Asymptotic normality: Erdős and Kac 1940)`,
`Theorem 4.5.4 (Method of moments)`, `Theorem 4.6.4 (Vertex-isomperimetric inequality on the
hypercube: Harper 1966)`, `Theorem 4.6.6 (Dubroff–Fox–Xu 2021)`, `Theorem 4.7.1 (Weierstrass
approximation theorem 1885)`, `Theorem 5.0.1 (Chernoff bound)`, `Theorem 5.0.5 (Chernoff bound
with bounded variables)`, `Theorem 5.0.7`, `Theorem 5.1.1`, `Theorem 5.1.3 (Six standard
deviations suffice: Spencer 1985)`, `Conjecture 5.1.5 (Komlós)`, `Lemma 5.1.6`, `Theorem 5.2.1
(Exponentially many approximately equiangular vectors)`, `Conjecture 5.3.1 (Hadwiger 1936)`,
`Definition 6.1.1 (Independence from a set of events)`, `Definition 6.1.2 (Dependency
(di)graph)`, `Theorem 6.1.7 (Lovász local lemma; symmetric form)`, `Theorem 6.1.9 (Lovász local
lemma; general form)`, `Lemma 6.2.7 (Compactness argument)`, `Theorem 6.2.11 (Beck 1980)`,
`Theorem 6.2.12 (Mani-Levitska and Pach 1986)`, `Theorem 6.4.1 / 6.4.3 (Alon and Linial 1989)`,
`Theorem 6.5.1 (Lopsided local lemma)`, `Corollary 6.5.2 (Lopsided local lemma; symmetric
version)`, `Theorem 6.5.5 (Nonnegative dependence for random injections)`, `Corollary 6.5.6
(Derangement lower bound)`, `Conjecture 6.5.8 (Ryser 1967)`, `Conjecture 6.5.9
(Ryser-Brualdi-Stein conjecture)`, `Theorem 6.5.11 (Erdős and Spencer 1991)`, `Theorem 6.6.3
(Moser and Tardos 2010)`, `Theorem 6.6.6 (Correctness of Moser's algorithm)`, `Lemma 6.6.7
(Outer while loop)`, `Lemma 6.6.8 (The number of recursive calls to fix)`, `Theorem 7.1.1
(Harris 1960)`, `Theorem 7.1.5 (Harris)`, `Corollary 7.1.6 (Decreasing events and multiple
events)`, `Theorem 7.2.5 (Riordan and Selby 2000)`, `Theorem 8.1.2 (Janson inequality I)`,
`Theorem 8.1.8 (Janson inequality II)`, `Theorem 8.2.2 (Janson inequality III)`, `Theorem 8.2.5
(Harel, Mousset, Samotij 2022)`, `Theorem 8.3.2 (Chromatic number of a random graph — Bollobás
1988)`, `Theorem 9.1.1 / 9.1.3 (Bounded differences inequality)`, `Definition 9.2.1
(martingale)`, `Example 9.2.4 (Doob martingale)`, `Example 9.2.5 (Edge-exposure martingale)`,
`Example 9.2.6 (Vertex-exposure martingale)`, `Theorem 9.2.7 / 9.2.8 (Azuma's inequality)`,
`Theorem 9.2.9 (Azuma's inequality for Doob martingales)`, `Lemma 9.2.12 (Hoeffding's lemma)`,
`Theorem 9.3.1 / 9.3.4 (Shamir and Spencer 1987)`, `Theorem 9.4.1 (Isoperimetric inequality in
Euclidean space)`, `Theorem 9.4.3 (Isoperimetic inequality in the Hamming cube; Harper 1966)`,
`Theorem 9.4.8 (Equivalence between notions of concentration of measure)`, `Theorem 9.4.10
(Lévy's isoperimetric inequality on the sphere)`, `Theorem 9.4.15 (Gaussian isoperimetric
inequality)`, `Definition 9.4.17 (Sub-Gaussian distribution)`, `Theorem 9.4.22 (Johnson and
Lindenstrauss 1982)`, `Theorem 9.5.3 / Corollary 9.5.6 / 9.5.8 (Talagrand)`, `Theorem 9.5.11
(Talagrand's inequality: general form)`, `Lemma 9.5.12 (Convex distance upper bounds Euclidean
distance)`, `Corollary 9.5.13 (Talagrand's inequality: convex sets and convex Lipschitz
functions)`, `Theorem 9.5.14 (Talagrand's inequality — functions with weighted certificates)`,
`Theorem 9.5.21 / Corollary 9.5.22 (Talagrand's inequality for certifiable functions)`,
`Corollary 9.5.23 (Longest increasing subsequence)`, `Theorem 9.6.1 (Rhee and Talagrand 1987)`,
`Lemma 10.1.4 (Uniform bound)`, `Lemma 10.1.5 (Independence)`, `Definition 10.1.6 (Conditional
entropy)`, `Lemma 10.1.7 (Chain rule)`, `Lemma 10.1.8 (Subadditivity)`, `Lemma 10.1.10
(Dropping conditioning)`, `Theorem 10.2.1 (Brégman–Minc inequality)`, `Corollary 10.2.2 (Kahn
and Lovász)`, `Theorem 10.2.4 / 10.2.6 (Alon 1990)`, `Definition 10.2.8 (Steiner triple
system)`, `Theorem 10.2.10 (Upper bound on the number of STS — Linial and Luria 2013)`,
`Conjecture 10.3.2 (Sidorenko)`, `Theorem 10.3.3 (Blakey and Roy 1965)`, `Theorem 10.3.7
(Conlon, Fox, Sudakov 2010)`, `Theorem 10.4.1 (Shearer's lemma, special case)`, `Theorem 10.4.5
(Shearer's lemma)`, `Corollary 10.4.6 (Loomis–Whitney inequality)`, `Theorem 10.4.9 (Chung,
Graham, Frankl, and Shearer 1986)`, `Theorem 10.4.12 (Kahn, Zhao)`, `Theorem 10.4.14 (Galvin
and Tetali 2004)`, `Theorem 10.4.15 (Sah, Sawhney, Stoner, and Zhao 2020)`, `Theorem 11.0.2
(Erdős, Kleitman, and Rothschild 1973)`, `Theorem 11.1.1 (Containers for triangle-free
graphs)`, `Theorem 11.2.1 (Container theorem for independent sets in graphs)`, `Theorem 11.2.3
(Graph container theorem, with fingerprints)`, `Theorem 11.3.1 (Container theorem for 3-uniform
hypergraph)`.

**Disposition.** Chs. 1–3 `already-published`. Ch. 4 `included`. Ch. 5 `included` (§5.1
discrepancy). Ch. 6: §6.1–6.4 `already-published`, §6.5 lopsided + §6.6 algorithmic
`included`. Chs. 7, 8 `included`. Ch. 9: §9.1–9.3 `included`; §9.4 (Euclidean/spherical/
Gaussian isoperimetry) `out-of-scope`; §9.5 Talagrand `included` with a caveat (see §E);
§9.6 `out-of-scope`. Ch. 10 `included` — entropy in full. Ch. 11 containers `deferred` (a
large, self-contained modern topic deserving its own pair).

### B.5 Matoušek & Vondrák, *The Probabilistic Method* — full TOC (verbatim)

```
1 Preliminaries
  1.1 Probability Theory
  1.2 Useful Estimates
2 The Probabilistic Method
  2.1 Ramsey Numbers
  2.2 Hypergraph Coloring
  2.3 The Erdős–Ko–Rado Theorem
  2.4 Pairs of Sets
3 Linearity of Expectation
  3.1 Computing Expectation Using Indicators
  3.2 Hamiltonian Paths
  3.3 Splitting Graphs
4 Alterations
  4.1 Independent Sets
  4.2 High Girth and High Chromatic Number
5 The Second Moment
  5.1 Variance and the Chebyshev Inequality
  5.2 Estimating the Middle Binomial Coefficient
  5.3 Threshold Functions
  5.4 The Clique Number
6 The Lovász Local Lemma
  6.1 Statement and Proof
  6.2 Hypergraph Coloring Again
  6.3 Directed Cycles
  6.4 Ridiculous Injections
  6.5 Coloring of Real Numbers
7 Strong Concentration Around the Expectation
  7.1 Sum of Independent Uniform ±1 Variables
  7.2 Sums of Bounded Independent Random Variables
  7.3 A Lower Bound For the Binomial Distribution
  7.4 Sums of Moderately Dependent Indicator Variables
8 Concentration of Lipschitz Functions
  8.1 Concentration on Product Spaces
  8.2 Concentration of Lipschitz Functions, With a Proof
  8.3 Martingales, Azuma's Inequality, and Concentration on Permutations
  8.4 Isoperimetric Inequalities and Concentration on the Sphere
9 Concentration: Beyond the Lipschitz Condition
  9.1 Talagrand's Inequality
  9.2 The Vu–Kim Inequality
```

Named results (55 harvested) include verbatim: `2.3.2 Theorem (The Erdős–Ko–Rado Theorem)`,
`4.0.2 Lemma (Markov's inequality)`, `4.1.2 Theorem (A weak Turán theorem)`, `5.1.4 Lemma
(Chebyshev inequality)`, `5.3.4 Theorem` (balanced-graph threshold), `5.3.5 Theorem`
(max-density subgraph threshold), `6.1.3 Lemma (Symmetric Lovász Local Lemma)`, `6.1.4 Lemma
(Lovász Local Lemma)`, `7.4.3 Theorem (Janson–Suen inequality)`, `8.1.1 Theorem (Concentration
on product spaces)`, `8.1.2 Theorem (Shamir–Spencer)`, `8.1.3 Theorem (Four-value
concentration)`, `8.3.2 Theorem (Azuma's inequality)`, `8.4.1 Theorem (Measure concentration for
the sphere)`, `8.4.2 Theorem (Lévy's Lemma)`, `9.1.1 Theorem (Talagrand's inequality, special
case)`, `9.1.2 Theorem (Talagrand's inequality)`, `9.2.2 Theorem (Vu–Kim inequality)`.

**Value for the scaffolder.** §1.1 is the single best source in the whole harvest for the
*finite* framing: Definition 1.1.1 gives the general (Ω,Σ,P) triple and then says explicitly
"In this text, we will consider mostly **finite** probability spaces where the set of elementary
events Ω is finite and Σ = 2^Ω. Then the probability measure is determined by its values on
elementary events … by specifying a function p : Ω → [0,1] with Σ_{ω∈Ω} p(ω) = 1." Definition
1.1.2 defines G(n,p) as "a **finite** probability space whose elementary events are all graphs on
a fixed set of n vertices". This is exactly the library's convention, in print, from a reputable
source — cite it for the G(n,p) construction.

### B.6 Gowers, *Entropy Methods in Combinatorics* (Cambridge Part III) — full TOC (verbatim)

```
1 The Khinchin (Shannon?) axioms for entropy      p. 2
2 A special case of Sidorenko's conjecture        p. 11
3 Brégman's Theorem                               p. 13
4 Shearer's lemma and applications                p. 17
5 The union-closed conjecture                     p. 25
6 Entropy in additive combinatorics               p. 32
7 A proof of Marton's conjecture in F_2^n         p. 39
Index                                             p. 48
```

Named results (60 harvested), verbatim:

```
§1  Lemma 1.1 | Corollary 1.2 | Lemma 1.3 (Chain rule) | Lemma 1.4 | Lemma 1.5
    Proposition 1.6 | Proposition 1.7 | Theorem 1.8 (Khinchin) | Corollary 1.9 | Corollary 1.10
    Proposition 1.11 (Subadditivity) | Corollary 1.12 | Corollary 1.13
    Proposition 1.14 (Submodularity) | Lemma 1.15 | Lemma 1.16 | Lemma 1.17 | Corollary 1.18
§2  Theorem 2.1
§3  Theorem 3.1 (Brégman) | Theorem 3.2 (Kahn-Lovasz)
§4  Lemma 4.1 (Shearer) | Lemma 4.2 (Shearer, expectation version) | Corollary 4.3
    Theorem 4.4 | Theorem 4.5 | Theorem 4.6 (Edge-isoperimetric inequality in Z^n)
    Theorem 4.7 (Edge-isoperimetric inequality in the cube) | Theorem 4.8 (Kruskal-Katona)
§5  Lemma 5.1 | Lemma 5.2 (Boppana) | Lemma 5.3
§6  Lemma 6.1 (Ruzsa triangle inequality) | Lemma 6.2 (Ruzsa covering lemma) | Lemma 6.3
    Lemma 6.4 | Corollary 6.5 | Lemma 6.6 | Lemma 6.7 (The entropic Ruzsa triangle inequality)
    Lemma 6.8 (Submodularity for sums) | Lemma 6.9 | Corollary 6.10
    Lemma 6.11 (The entropic BSG theorem)
§7  Theorem 7.1 (Green, Manners, Tao, Gowers) | Theorem 7.2 (Entropic Polynomial Freiman–Ruzsa)
    Lemma 7.3 | Proposition 7.4 | Theorem 7.5 (EPFR′) | Proposition 7.6
    Lemma 7.7 (Fibring lemma) | Corollary 7.8 | Lemma 7.9 | Lemma 7.10 | Lemma 7.11
    Lemma 7.12 | Corollary 7.13 | Corollary 7.14 | Corollary 7.15 | Lemma 7.16 | Corollary 7.17
```

The course opens with the sentence that settles the entropy reachability question: *"In this
course, 'random variable' will mean 'discrete random variable'."* Every result in §§1–7 is a
theorem about discrete random variables on finite sets. §1 is a complete axiomatic development
of entropy (Khinchin's axioms → uniqueness) which the library could adopt wholesale.

**Disposition.** §1 `included` (the entropy foundation). §2 `included` (Sidorenko special
case). §3 `included` (Brégman, entropy proof). §4 `included` — Shearer + Kruskal–Katona +
both edge-isoperimetric inequalities, all finite. §5 `deferred` (union-closed — active
research, long). §6 `included` (entropic Ruzsa calculus). §7 `deferred` (Marton/PFR — the
2023 Gowers–Green–Manners–Tao theorem; finite but a whole page in itself).

### B.7 Random graphs and probabilistic combinatorics — additional sources

**S6. Bollobás, *Random Graphs*, 2nd ed.**, Cambridge Studies in Advanced Mathematics 73, CUP
2001, ISBN 0-521-80920-7. URL: `https://epdf.pub/random-graphs-second-edition-cambridge-studies-in-advanced-mathematics-73.html`.
Form: OCR of the printed Contents (pp. vii–ix) + Preface. Range: front matter pp. ii–xiv.

```
1  Probability Theoretic Preliminaries    1      1.1 Notation and Basic Facts · 1.2 Some Basic
   Distributions · 1.3 Normal Approximation · 1.4 Inequalities · 1.5 Convergence in Distribution
2  Models of Random Graphs               34      2.1 The Basic Models · 2.2 Properties of Almost
   All Graphs · 2.3 Large Subsets of Vertices · 2.4 Random Regular Graphs
3  The Degree Sequence                   60      3.1 The Distribution of an Element of the Degree
   Sequence · 3.2 Almost Determined Degrees · 3.3 The Shape of the Degree Sequence · 3.4 Jumps
   and Repeated Values · 3.5 Fast Algorithms for the Graph Isomorphism Problem
4  Small Subgraphs                       78      4.1 Strictly Balanced Graphs · 4.2 Arbitrary
   Subgraphs · 4.3 Poisson Approximation
5  The Evolution of Random Graphs—Sparse Components  96   5.1 Trees of Given Sizes As Components ·
   5.2 The Number of Vertices on Tree Components · 5.3 The Largest Tree Components ·
   5.4 Components Containing Cycles
6  The Evolution of Random Graphs—the Giant Component 130  6.1 A Gap in the Sequence of Components ·
   6.2 The Emergence of the Giant Component · 6.3 Small Components after Time n/2 ·
   6.4 Further Results · 6.5 Two Applications
7  Connectivity and Matchings           160      7.1 The Connectedness of Random Graphs ·
   7.2 The k-Connectedness of Random Graphs · 7.3 Matchings in Bipartite Graphs · 7.4 Matchings
   in Random Graphs · 7.5 Reliable Networks · 7.6 Random Regular Graphs
8  Long Paths and Cycles                201      8.1–8.6 (Long Paths in G_{c/n}, Hamilton Cycles,
   first and second approaches; Hamilton Cycles in Regular Graphs)
9  The Automorphism Group               229      9.1 The Number of Unlabelled Graphs · 9.2 The
   Asymptotic Number of Unlabelled Regular Graphs · 9.3 Distinguishing Vertices by Their Distance
   Sequences · 9.4 Asymmetric Graphs · 9.5 Graphs with a Given Automorphism Group
10 The Diameter                         251      10.1 Large Graphs of Small Diameter · 10.2 The
   Diameter of G_p · 10.3 The Diameter of Random Regular Graphs · 10.4 Graph Processes ·
   10.5 Related Results · 10.6 Small Worlds
11 Cliques, Independent Sets and Colouring 282   11.1 Cliques in G_p · 11.2 Poisson Approximation ·
   11.3 Greedy Colouring of Random Graphs · 11.4 The Chromatic Number of Random Graphs ·
   11.5 Sparse Graphs
12 Ramsey Theory                        319      12.1 Bounds on R(s) · 12.2 Off-Diagonal Ramsey
   Numbers · 12.3 Triangle-Free Graphs · 12.4 Dense Subgraphs · 12.5 The Size-Ramsey Number of a Path
13 Explicit Constructions               348      13.1 Character Sums · 13.2 The Paley Graph P_q ·
   13.3 Dense Graphs · 13.4 Sparse Graphs · 13.5 Pseudorandom Graphs
14 Sequences, Matrices and Permutations 383      14.1 Random Subgraphs of the Cube · 14.2 Random
   Matrices · 14.3 Balancing Families of Sets · 14.4 Random Elements of Finite Groups ·
   14.5 Random Mappings
15 Sorting Algorithms                   425      15.1–15.4
16 Random Graphs of Small Order         447      16.1 Connectivity · 16.2 Independent Sets ·
   16.3 Colouring · 16.4 Regular Graphs
```

**S7. Janson, Łuczak & Ruciński, *Random Graphs***, Wiley 2000, ISBN 0-471-17541-2.
URL: `https://www2.math.uu.se/~svantejs/papers/RG2000_contents.html` (**author-hosted**). Form: HTML TOC, complete.

```
1  Preliminaries 1        1.1 Models of random graphs · 1.2 Notes on notation and more ·
   1.3 Monotonicity · 1.4 Asymptotic equivalence · 1.5 Thresholds · 1.6 Sharp thresholds
2  Exponentially Small Probabilities 25   2.1 Independent summands · 2.2 Binomial random subsets ·
   2.3 Suen's inequality · 2.4 Martingales · 2.5 Talagrand's inequality · 2.6 The upper tail
3  Small Subgraphs 53     3.1 The containment problem · 3.2 Leading overlaps and the subgraph plot ·
   3.3 Subgraph count at the threshold · 3.4 The covering problem · 3.5 Disjoint copies ·
   3.6 Variations on the theme
4  Matchings 81           4.1 Perfect matchings · 4.2 G-factors · 4.3 Two open problems
5  The Phase Transition 103   5.1 The evolution of the random graph · 5.2 The emergence of the giant
   component · 5.3 The emergence of the giant: A closer look · 5.4 The structure of the giant
   component · 5.5 Near the critical period · 5.6 Global properties and the symmetry rule ·
   5.7 Dynamic properties
6  Asymptotic Distributions 139   6.1 The method of moments · 6.2 Stein's method: The Poisson case ·
   6.3 Stein's method: The normal case · 6.4 Projections and decompositions · 6.5 Further methods
7  The Chromatic Number 179   7.1 The stability number · 7.2 The chromatic number: A greedy approach ·
   7.3 The concentration of the chromatic number · 7.4 The chromatic number of dense random graphs ·
   7.5 The chromatic number of sparse random graphs · 7.6 Vertex partition properties
8  Extremal and Ramsey Properties 201   8.1 Heuristics and results · 8.2 Triangles: The first
   approach · 8.3 The Szemerédi Regularity Lemma · 8.4 A partition theorem for random graphs ·
   8.5 Triangles: An approach with perspective
9  Random Regular Graphs 233   9.1 The configuration model · 9.2 Small cycles · 9.3 Hamilton cycles ·
   9.4 Proofs · 9.5 Contiguity of random regular graphs · 9.6 A brief course in contiguity
10 Zero-One Laws 271      10.1 Preliminaries · 10.2 Ehrenfeucht games and zero-one laws ·
   10.3 Filling gaps · 10.4 Sums of models · 10.5 Separability and the speed of convergence
```

**S8. Molloy & Reed, *Graph Colouring and the Probabilistic Method***, Algorithms and
Combinatorics 23, Springer 2002, ISBN 3-540-42139-4. URL: `https://d-nb.info/962814776/04`
(Deutsche Nationalbibliothek scan of the printed Contents, pp. IX–XIV). **Correction to a
widely-repeated error: the book has NINE parts, not seven.** Part structure and the chapters
most relevant here:

```
Part I  Preliminaries        1. Colouring Preliminaries · 2. Probabilistic Preliminaries
                                (2.1 Finite Probability Spaces · 2.2 Random Variables and Their
                                Expectations · 2.3 One Last Definition · 2.4 The Method of
                                Deferred Decisions)
Part II  Basic Probabilistic Tools   3. The First Moment Method · 4. The Lovász Local Lemma ·
                                5. The Chernoff Bound
Part III Vertex Partitions   6. Hadwiger's Conjecture · 7. A First Glimpse of Total Colouring ·
                                8. The Strong Chromatic Number · 9. Total Colouring Revisited
Part IV  A Naive Colouring Procedure  10. Talagrand's Inequality and Colouring Sparse Graphs ·
                                11. Azuma's Inequality and a Strengthening of Brooks' Theorem
Part V   An Iterative Approach  12. Graphs with Girth at Least Five · 13. Triangle-Free Graphs ·
                                14. The List Colouring Conjecture
Part VI  A Structural Decomposition  15. The Structural Decomposition · 16. ω, Δ and χ ·
                                17. Near Optimal Total Colouring I: Sparse Graphs ·
                                18. Near Optimal Total Colouring II: General Graphs
Part VII Sharpening our Tools   19. Generalizations of the Local Lemma (19.4 The Lopsided Local
                                Lemma) · 20. A Closer Look at Talagrand's Inequality
Part VIII Colour Assignment via Fractional Colouring  21. Finding Fractional Colourings and Large
                                Stable Sets · 22. Hard-Core Distributions on Matchings ·
                                23. The Asymptotics of Edge Colouring Multigraphs
Part IX  Algorithmic Aspects    24. The Method of Conditional Expectations ·
                                25. Algorithmic Aspects of the Local Lemma
```

Note **§2.1 is literally titled "Finite Probability Spaces"** — another reputable monograph
building the whole subject on the library's convention.

**S9. Frieze & Karoński, *Introduction to Random Graphs*** — author-hosted continuously-updated
edition dated **7 August 2026**, 854 pp., 38 chapters in 5 parts (substantially expanded beyond
the CUP 2016 print edition). URL: `https://www.math.cmu.edu/~af1p/BOOK.pdf` — **confirmed live**,
2,848,732 bytes. Part V "Tools and Methods" is the directly relevant range:

```
33 Moments 691          33.1 First and Second Moment Method · 33.2 Convergence of Moments ·
                        33.3 Stein–Chen Method
34 Inequalities 701     34.1 Binomial Coefficient Approximation · 34.2 Balls in Boxes ·
                        34.3 FKG Inequality · 34.4 Sums of Independent Bounded Random Variables ·
                        34.5 Sampling Without Replacement · 34.6 Janson's Inequality ·
                        34.7 Suen's Inequality · 34.8 Martingales. Azuma-Hoeffding Bounds ·
                        34.9 Talagrand's Inequality · 34.10 Dominance
35 Differential Equations Method 729
36 Branching Processes 735
37 Random Walk 737      37.1 Mixing time · 37.2 First Visit Time Lemma
38 Entropy 749          38.1 Basic Notions · 38.2 Shearer's Lemma
```

Parts I–IV cover: 1 Random Graphs · 2 Evolution · 3 Vertex Degrees · 4 Connectivity · 5 Small
Subgraphs · 6 Spanning Subgraphs · 7 Extreme Characteristics · 8 Inhomogeneous Graphs · 9 Fixed
Degree Sequence · 10 Intersection Graphs · 11 Digraphs · 12 Hypergraphs · 13 Random Simplicial
Complexes · 14 Random Subgraphs of the Hypercube · 15 Edge Colored Random Graphs · 16 Randomly
Perturbed Dense Graphs · 17 Constrained Random Graph Processes · 18 Achlioptas Processes ·
19 Semi-Random Processes · 20 Trees · 21 Mappings · 22 k-out · 23 Real World Networks ·
24 Weighted Graphs · 25 Resilience · 26 Extremal Properties · 27 Thresholds (27.1 The Kahn-Kalai
conjecture · 27.2 Proof of the Kahn-Kalai conjecture) · 28 Universality · 29 Contiguity ·
30 Random Walk on Random Graphs · 31 Games · 32 Brief notes on uncovered topics.

**S10. Spencer, *Ten Lectures on the Probabilistic Method*, 2nd ed.**, CBMS-NSF Regional
Conference Series in Applied Mathematics 64, SIAM 1994 (1st ed. 1987). URL:
`https://epdf.pub/ten-lectures-on-the-probabilistic-methodafe3d1e35a082fb6fad7430e0da7b0602435.html`;
also `https://archive.org/details/tenlecturesonpro0000spen`. The printed TOC is lecture-level
only (the book has no numbered subsections). Verbatim:

```
PREFACE to the Second Edition                                              v
LECTURE 1.       The Probabilistic Method                                  1
LECTURE 2.       The Deletion Method and Other Refinements                11
LECTURE 3.       Random Graphs I                                          17
LECTURE 4.       Large Deviations and Nonprobabilistic Algorithms         29
LECTURE 5.       Discrepancy I                                            37
LECTURE 6.       Chaos from Order                                         45
LECTURE 7.       Random Graphs II                                         51
LECTURE 8.       The Lovasz Local Lemma                                   57
LECTURE 9.       Discrepancy II                                           67
LECTURE 10.      Six Standard Deviations Suffice                          75
BONUS LECTURE.   The Janson Inequalities                                  81
INDEX                                                                     87
```

**S11. Erde, *Random Graphs*** (TU Graz, WS 2019), 95 pp. URL:
`https://www.math.tugraz.at/comb/lehre/2021/RG/Exercises/Random%20graphs.pdf`. Chapters:
1 Preliminaries (1.2 Probability Theory) · 2 Random Graph Models · 3 Thresholds (3.1 Thresholds ·
3.2 Coarse and Sharp Thresholds · 3.3 Hitting Times) · 4 Small Subgraphs (4.4 Harris' Inequality
and Janson's Inequality) · 5 Evolution of the random graph (5.2 The Galton-Watson Process) ·
6 Spanning Subgraphs (6.1 Connectivity Threshold · 6.2 Matching thresholds · 6.3 Hamiltonicty
threshold [sic]) · 7 Chromatic Number (7.1 Martingales and the Azuma-Hoeffding inequality) ·
8 Random Regular Graphs.

**S12. Sudakov, *Probabilistic Method in Combinatorics*** (ETH Zürich Math 218A), syllabus-level
topic list only. URL: `https://people.math.ethz.ch/~sudakovb/probabilistic.html`. Weaker harvest
target than S3/S4/S11 — it publishes a numbered lecture-topic syllabus, not downloadable notes.

### B.8 Additive combinatorics — additional sources

**S13. Tao & Vu, *Additive Combinatorics***, Cambridge Studies in Advanced Mathematics 105, CUP
2006, ISBN 978-0-521-85386-6. URL (full PDF): `http://math.bme.hu/~gabor/oktatas/SztoM/TaoVu.AddComb.pdf`
(532 pp.). Publisher contents: `https://www.cambridge.org/core/books/abs/additive-combinatorics/contents/BF0022319B937B3BCE8027C333B70320`.
Full verbatim TOC:

```
Prologue                                                        xi
1  The probabilistic method                                      1
   1.1 The first moment method · 1.2 The second moment method · 1.3 The exponential moment method ·
   1.4 Correlation inequalities · 1.5 The Lovász local lemma · 1.6 Janson's inequality ·
   1.7 Concentration of polynomials · 1.8 Thin bases of higher order · 1.9 Thin Waring bases ·
   1.10 Appendix: the distribution of the primes
2  Sum set estimates                                            51
   2.1 Sum sets · 2.2 Doubling constants · 2.3 Ruzsa distance and additive energy ·
   2.4 Covering lemmas · 2.5 The Balog–Szemerédi–Gowers theorem · 2.6 Symmetry sets and imbalanced
   partial sum sets · 2.7 Non-commutative analogs · 2.8 Elementary sum-product estimates
3  Additive geometry                                           112
   3.1 Additive groups · 3.2 Progressions · 3.3 Convex bodies · 3.4 The Brunn–Minkowski inequality ·
   3.5 Intersecting a convex set with a lattice · 3.6 Progressions and proper progressions
4  Fourier-analytic methods                                    149
   4.1 Basic theory · 4.2 L^p theory · 4.3 Linear bias · 4.4 Bohr sets · 4.5 Λ(p) constants, B_h[g]
   sets, and dissociated sets · 4.6 The spectrum of an additive set · 4.7 Progressions in sum sets
5  Inverse sum set theorems                                    198
   5.1 Minimal size of sum sets and the e-transform · 5.2 Sum sets in vector spaces ·
   5.3 Freiman homomorphisms · 5.4 Torsion and torsion-free inverse theorems ·
   5.5 Universal ambient groups · 5.6 Freiman's theorem in an arbitrary group
6  Graph-theoretic methods                                     246
   6.1 Basic Notions · 6.2 Independent sets, sum-free subsets, and Sidon sets · 6.3 Ramsey theory ·
   6.4 Proof of the Balog–Szemerédi–Gowers theorem · 6.5 Plünnecke's theorem
7  The Littlewood–Offord problem                               276
   7.1 The combinatorial approach · 7.2 The Fourier-analytic approach · 7.3 The Esséen concentration
   inequality · 7.4 Inverse Littlewood–Offord results · 7.5 Random Bernoulli matrices ·
   7.6 The quadratic Littlewood–Offord problem
8  Incidence geometry                                          308
   8.1 The crossing number of a graph · 8.2 The Szemerédi–Trotter theorem · 8.3 The sum-product
   problem in R · 8.4 Cell decompositions and the distinct distances problem · 8.5 The sum-product
   problem in other fields
9  Algebraic methods                                           329
   9.1 The combinatorial Nullstellensatz · 9.2 Restricted sum sets · 9.3 Snevily's conjecture ·
   9.4 Finite fields · 9.5 Davenport's problem · 9.6 Kemnitz's conjecture · 9.7 Stepanov's method ·
   9.8 Cyclotomic fields, and the uncertainty principle
10 Szemerédi's theorem for k = 3                               369
   10.1 General strategy · 10.2 The small torsion case · 10.3 The integer case · 10.4 Quantitative
   bounds · 10.5 An ergodic argument · 10.6 The Szemerédi regularity lemma · 10.7 Szemerédi's argument
11 Szemerédi's theorem for k > 3                               414
   11.1 Gowers uniformity norms · 11.2 Hard obstructions to uniformity · 11.3 Proof of Theorem 11.6 ·
   11.4 Soft obstructions to uniformity · 11.5 The infinitary ergodic approach · 11.6 The hypergraph
   approach · 11.7 Arithmetic progressions in the primes
12 Long arithmetic progressions in sum sets                    470
   12.1 Introduction · 12.2 Proof of Theorem 12.4 · 12.3 Generalizations and variants ·
   12.4 Complete and subcomplete sequences · 12.5 Proof of Theorem 12.17 · 12.6 Further applications
```

**S14. Green, *Additive Combinatorics* (Oxford C3.10, 2024–25)**, 50 pp., 16 lectures.
URL: `https://people.maths.ox.ac.uk/greenbj/papers/C3.10-Oxford-2025.pdf`. Index:
`https://people.maths.ox.ac.uk/greenbj/notes.html`. **The single best free self-contained
treatment for a scaffolder.** Contents:

```
1. Roth's theorem on progressions of length 3                 6
   1.1 The density increment strategy · 1.2 Fourier transform on Z · 1.3 A large Fourier
   coefficient · 1.4 From a large Fourier coefficient to a density increment
2. Progressions in finite fields and the polynomial method   10
3. Sumset inequalities                                       12
   3.1 Basic notation and definitions · 3.2 Ruzsa's triangle inequality and covering lemma ·
   3.3 Petridis's inequality · 3.4 The Plünnecke–Ruzsa inequality · 3.5 Additive energy and
   Balog–Szemerédi-Gowers
4. Freiman's theorem                                         16
   4.1 Generalised progressions and Freiman's theorem · 4.2 Freiman homomorphisms · 4.3 Ruzsa's
   model lemma · 4.4 Bogolyubov's lemma · 4.5 Generalised progressions in Bohr sets ·
   4.6 Freiman's theorem: conclusion of the proof · 4.7 Freiman's lemma
5. Entropy methods                                           25
   5.1 Entropy · 5.2 Entropic Ruzsa distance · 5.3 Entropic analogue of PFR
6. Proof of Polynomial Freiman-Ruzsa                         29
   6.1 An iterative strategy · 6.2 Using sums and fibres · 6.3 Finishing the argument: entropic BSG
7. The weak PFR in the integers                              35
   7.1 Projections modulo 2 · 7.2 Projections and iterated PFR · 7.3 Proof of weak PFR in the integers
8. Combinatorial geometry and sum-product                    40
   8.1 Crossing number inequality · 8.2 The Szemerédi-Trotter theorem · 8.3 Sum-product
9. Higher sum-product theorems                               43
   9.1 Higher-order additive energies · 9.2 A lemma of Chang · 9.3 The Bourgain-Chang theorem
Appendix A. Proof of Balog–Szemerédi–Gowers                  47
Appendix B. Entropic Balog-Szemerédi-Gowers                  50
Appendix C. Geometry of numbers                              51
```

Named results verbatim: `Theorem 1.1 (Roth's theorem)`, `Proposition 1.2`, `Lemma 1.3 (Parseval
identity)`, `Lemma 1.4`, `Theorem 2.1 (Ellenberg–Gijswijt cap set bound)`, `Definition 2.2 (slice
rank)`, `Lemma 2.3`, `Lemma 2.4`, `Proposition 2.5`, `Lemma 3.1 (Ruzsa triangle inequality)`,
`Lemma 3.2 (Ruzsa's covering lemma)`, `Lemma 3.3 (submodularity)`, `Lemma 3.4`, `Proposition 3.5
(Petridis)`, `Corollary 3.6`, `Theorem 3.7 (Plünnecke–Ruzsa)`, `Lemma 3.8`, `Corollary 3.9`,
`Definition 3.10 (doubling constant)`, `Definition 3.11 (additive energy)`, `Proposition 3.12`,
`Theorem 3.13 (Balog-Szemerédi-Gowers)`, `Theorem 4.1 (Freiman)`, `Lemma 4.3`, `Proposition 4.4
(Ruzsa model lemma)`, `Proposition 4.7 (Bogolyubov's lemma)`, `Proposition 4.11 (Minkowski's
Second Theorem)`, `Proposition 4.12 (Freiman's lemma)`, `Theorem 5.7 (Entropic PFR)`, `Lemma 6.6
(Entropic BSG)`, `Theorem 7.1 (Weak PFR in Z)`, `Theorem 8.1 (Szemerédi-Trotter)`, `Theorem 8.4
(Elekes sum-product)`, `Lemma A.1 (dependent random selection)`, `Lemma A.2 (paths of length 3)`,
`Lemma C.1 (lattice determinant)`, `Theorem C.2 (Minkowski I)`, `Theorem C.3 (Minkowski II)`.

**S15. Green, *Additive Combinatorics* (Cambridge Part III, 2009)** — per-chapter, author-hosted
at `https://people.maths.ox.ac.uk/greenbj/papers/addcomb2009-{1,2,3,4,5,7}.pdf`. (**There is no
`-6.pdf` or `-8.pdf`** — both 404; the file named `-7` is internally headed "CHAPTER 8".)
Ch. 1 Roth's theorem · Ch. 2 Sumsets · Ch. 3 Small doubling and the Freiman-Ruzsa theorem
(3.4 Freĭman homomorphisms · 3.5 Ruzsa's model lemma · 3.6 Bogolyubov's lemma · 3.7 Geometry of
numbers and progressions in Bohr sets · 3.8 Chang's covering argument) · Ch. 4 Additive Energy
and Balog-Szemerédi-Gowers · Ch. 5 Longer progressions and higher Gowers norms · Ch. 8 The
sum-product phenomenon in C.

**S16. Petridis, *Introduction to the Theory of Set Addition***, Block Course, FU Berlin, 6–10
October 2014, 36 pp. URL: `https://web.mat.upc.edu/juan.jose.rue/BlockCourse-FUBerlin-Week1/Berlin_notes.pdf`.
§1 Cardinality inequalities (Lemma 1.1 Ruzsa's triangle inequality · Cor 1.2 From sums to
differences · Lemma 1.4 From two to many summands · Thm 1.5 Plünnecke's inequality · Thm 1.6 The
Plünnecke–Ruzsa inequalities · Lemmas 1.7, 1.8) · §2 The power trick · §3 Covering lemmas
(Lemma 3.1 Ruzsa's covering lemma · Lemma 3.3 Chang's covering lemma · Lemma 3.4) · §4 Freiman
isomorphisms (Prop 4.2 Ruzsa · Thm 4.3 Green-Ruzsa) · §5 Representation as sums and additive
energy · §6 The Balog–Szemerédi–Gowers theorem · §7 The Szemerédi–Trotter theorem (Lemma 7.1 ·
Cor 7.2 · Lemma 7.3 Ajtai–Chvátal–Newborn–Szemerédi, Leighton · Thm 7.4 Szemerédi–Trotter ·
Thm 7.6 Elekes).

**S17. Tao, Math 254A (UCLA, Winter 2003), *Arithmetic combinatorics***.
URL: `https://www.math.ucla.edu/~tao/254a.1.03w/`. Verbatim lecture titles: Lecture 1
Cauchy-Davenport inequality, Plunnecke's theorem, sum set estimates · Lecture 2 Freiman's theorem
(both in the torsion and torsion-free cases), Gowers-Walters theorem, Chang's refinement of
Freiman's theorem · Lecture 3 Gowers' quantitative Balog-Szemeredi theorem; applications to the
Kakeya problem · Lecture 4 Roth's theorem for APs of length 3; Gowers' proof of Szemeredi's
theorem for APs of length 4 · Lecture 5 Behrend's example; Bourgain's refinement of Roth's theorem ·
Lecture 6 Crossing numbers and Szemeredi's theorem; Elekes's sum-product theorem;
Bourgain-Katz-Tao sum-product theorem.
Also **Tao's cap-set post**, *A symmetric formulation of the Croot-Lev-Pach-Ellenberg-Gijswijt
capset bound*, 18 May 2016,
`https://terrytao.wordpress.com/2016/05/18/a-symmetric-formulation-of-the-croot-lev-pach-ellenberg-gijswijt-capset-bound/`
— the symmetric slice-rank presentation Green and Zhao both follow. And **254B (Spring 2010),
Higher order Fourier analysis**: Notes 1 Equidistribution of polynomial sequences in tori ·
Notes 2 Roth's theorem · Notes 3 Linear patterns · Notes 4 Equidistribution of polynomials over
finite fields · Notes 5 The inverse conjecture for the Gowers norm I. The finite field case ·
Notes 6 …II. The integer case · Notes 7 The transference principle, and linear equations in primes.

---

## C. Mathematical detail the scaffolder needs

Each entry: exact statement with hypotheses → proof route → difficulty → source locator →
**finite-reachability verdict**.

### C.1 The second moment method and G(n,p) thresholds

**Statement (threshold for a balanced graph).** Let H be a graph with v vertices and e edges,
`e ≥ 1`, and suppose H is *balanced*: every subgraph H′ satisfies e(H′)/v(H′) ≤ e/v. Set
ρ = e/v. If p ≪ n^{−1/ρ} then Pr[H ⊆ G(n,p)] → 0; if p ≫ n^{−1/ρ} then Pr[H ⊆ G(n,p)] → 1.
For general H the exponent uses the maximum-density subgraph (Matoušek–Vondrák Thm 5.3.4,
5.3.5; Alon–Spencer §4.4 Thm 4.4.1, 4.4.4; Zhao PM Thm 4.2.10 attributing to Bollobás 1981).

**Proof route.** First moment + Markov for the 0-statement; second moment with X = number of
copies, Δ = Σ_{S∼S′} Pr[A_S ∧ A_{S′}], and Corollary 4.3.4/4.3.5 (`E[X] → ∞` and
`Δ = o(E[X]²)` ⟹ `X > 0` a.a.) for the 1-statement. 4–8 numbered steps once Chebyshev and the
variance-of-a-sum decomposition are available — both are already published.

**Finiteness — how to state it finitely.** This is the single most important framing point for
the whole page. Each `Pr[H ⊆ G(n,p)]` is a **finite sum over a finite space** (there are
2^{C(n,2)} graphs). The threshold statement is therefore a statement about the *real sequence*
a_n = Pr[H ⊆ G(n, p(n))], namely `lim_{n→∞} a_n = 0` or `= 1`. The library has real limits and
sequences, so this is directly expressible **with no measure theory whatsoever**. The honest
formulation for the library is:

> For each n let μ_n denote the finite probability space G(n,p(n)) and let a_n = μ_n({G : H ⊆ G}).
> Then lim a_n = 0 / 1.

The *quantitative* forms are even better and should be preferred where the scaffolder can get
them: Chebyshev gives `Pr[X = 0] ≤ Var[X]/E[X]²`, an inequality valid for **each fixed finite
n** with no limit at all. Author the finite inequality as the theorem and the limit as a
corollary. **VERDICT: IN REACH (with care) — and the finite inequality underneath is IN REACH
outright.**

Trap to avoid: `Definition 4.3.1 (Threshold)` and `Theorem 4.3.6 (Existence of thresholds:
Bollobás and Thomason 1987)` quantify over *all* monotone properties and are genuinely
asymptotic; `Corollary 4.3.15 (of Friedgut's sharp threshold theorem)` rests on harmonic
analysis on the cube plus a compactness argument. Scaffold the concrete thresholds, not the
general existence theorem.

### C.2 Janson's inequalities and the correlation inequalities

**Janson (Alon–Spencer Thm 8.1.1).** Let Ω be a **finite** universal set, R ⊆ Ω random with
Pr[r ∈ R] = p_r, mutually independent over r ∈ Ω. Let {A_i}_{i∈I} be subsets of Ω, I a **finite**
index set, B_i the event A_i ⊆ R. Write i ∼ j when i ≠ j and A_i ∩ A_j ≠ ∅;
Δ = Σ_{i∼j} Pr[B_i ∧ B_j] (ordered pairs); M = Π_i Pr[¬B_i]; μ = Σ_i Pr[B_i]. If all
Pr[B_i] ≤ ε then `M ≤ Pr[∧ ¬B_i] ≤ M·e^{Δ/(2(1−ε))}` and `Pr[∧ ¬B_i] ≤ e^{−μ+Δ/2}`.

**Extended Janson (Thm 8.1.2).** Same hypotheses plus Δ ≥ μ: `Pr[∧ ¬B_i] ≤ e^{−μ²/(2Δ)}`.

**Proof route.** Boppana–Spencer (Alon–Spencer §8.2), via the two conditional inequalities
`Pr[B_i | ∧_{j∈J} ¬B_j] ≤ Pr[B_i]` and `Pr[B_i | B_k ∧ ∧_{j∈J} ¬B_j] ≤ Pr[B_i | B_k]`. ~8–12
numbered steps. The first of these conditional inequalities is exactly Harris/FKG, so the
correlation chapter should precede it.

**FKG / Harris / Four Functions.** Alon–Spencer Thm 6.1.1 (Four Functions Theorem of Ahlswede
and Daykin): α,β,γ,δ : P(N) → ℝ⁺ with `α(A)β(B) ≤ γ(A∪B)δ(A∩B)` for all A,B ⊆ N implies
`α(𝒜)β(ℬ) ≤ γ(𝒜∪ℬ)δ(𝒜∩ℬ)` for all families. Proof is **induction on n = |N|**, base case
n = 1 a two-line algebraic identity reducing to `(γ₁δ₀ − α₀β₁)(γ₁δ₀ − α₁β₀) ≥ 0`. Corollary
6.1.2 extends to a **finite distributive lattice**; Thm 6.2.1 (FKG) follows in ~4 steps by
setting α = μf, β = μg, γ = μfg, δ = μ.

**VERDICT: ALL IN REACH.** Every object is finite by hypothesis in the source itself — "Let Ω
be a finite universal set", "Let L be a finite distributive lattice". Nothing here even mentions
a σ-algebra. This is among the most attractive material in the harvest: high mathematical value,
short bounded proofs, zero measure theory. Recommend a dedicated A/B pair.

### C.3 The Lovász Local Lemma beyond what is authored

**Lopsided LLL (Zhao PM Thm 6.5.1, Cor 6.5.2).** Replace mutual independence by the one-sided
condition `Pr[A_i | ∧_{j∈S} ¬A_j] ≤ Pr[A_i]` for S not adjacent to i. Same conclusion. Proof is
the same induction as the ordinary LLL — the ordinary proof only ever uses that inequality.
**IN REACH**, and cheap: given the published symmetric/asymmetric LLL, this is a short
strengthening. `Theorem 6.5.5 (Nonnegative dependence for random injections)` and
`Corollary 6.5.6 (Derangement lower bound)` are attractive finite applications.

**Shearer's bound (Shearer 1985).** The exact characterisation of which probability vectors
admit the LLL conclusion for a *fixed* dependency graph D, in terms of the **independent set
polynomial** of D: writing `Q_D(p) = Σ_{I independent} (−1)^{|I|} Π_{i∈I} p_i`, the conclusion
holds for all instances with dependency graph D iff `Q_{D[S]}(p) ≥ 0` for every S. Shearer also
proved the constant `e` in `epd ≤ 1` is best possible. **IN REACH** — it is a finite
combinatorial/algebraic statement about a finite graph — but the proof is substantially harder
than the LLL itself. Recommend: state Shearer's bound as a source-cited `rem-` item or
scaffold only the "e is optimal" half.

**Moser–Tardos (Alon–Spencer §5.7, Thms 5.7.1–5.7.5; Zhao PM §6.6, Thm 6.6.3).** Alon–Spencer's
framing: Ω a finite set, C[v] independent values, I a finite index set, BAD[α] depending only on
C[v] for v ∈ A[α]. FIX-IT resamples a violated event's variables. Thm 5.7.4/5.7.5: if
`p ≤ (d−1)^{d−1}d^{−d}` (resp. `epd ≤ 1`) then `E[T_LOG] ≤ |I|/(d−1)`.

**Finiteness — this is the one genuinely awkward case in the probabilistic-method block.**
Alon–Spencer say explicitly: *"A priori, T_LOG = ∞ is possible, but we shall give conditions
that imply E[T_LOG] < ∞, which in turn implies that the FIX-IT Algorithm will terminate with
probability 1."* An unbounded run of resamplings is an **infinite** sequence of independent
choices; "terminates with probability 1" and `E[T_LOG]` are statements about an infinite product
space. Theorem 5.7.1 further sums p[T] over the **infinite** set of all Moser trees.
**VERDICT: the runtime theorem as stated is OUT OF REACH.** Two honest routes remain:
(i) scaffold only the finite truncation — for each N, `Pr[the algorithm has not terminated
within N steps] ≤ ...`, which is a finite statement about the first N resamplings and is
provable; or (ii) note that the *existence* conclusion of the LLL is already published and
Moser–Tardos adds only algorithmic content. Recommend (i) with the limiting statement recorded
as a Remark, or defer the whole section. Do **not** let a scaffolder write "E[T_LOG] ≤ |I|/(d−1)"
as a theorem of finite probability — it is not one.

**LLL improvement to Ramsey lower bounds (Alon–Spencer §5.3).** Diagonal: Prop 5.3.1, if
`e·C(k,2)·C(n−2,k−2)·2^{1−C(k,2)} < 1` then `R(k,k) > n`, giving
`R(k,k) > (√2/e)(1+o(1))k·2^{k/2}` — only a factor-2 improvement, and Alon–Spencer say so
("somewhat disappointing"). Off-diagonal is where LLL earns its keep: the asymmetric LLL with
p = c₁n^{−1/2}, k = c₂n^{1/2}log n, x = c₃n^{−3/2} gives `R(k,3) > c₅k²/log²k`, and similarly
`R(k,4) > k^{5/2+o(1)}`. **IN REACH** — a single finite probability space on the edges of K_n
for each n; the bound is an implication about a fixed n. The `o(1)` version is a limit
statement, expressible. Zhao PM `Theorem 1.1.9 (Ramsey lower bound via local lemma; Spencer
1977)` is the cleanest write-up.

**⚠ Choice-scope warning the library must respect.** Alon–Spencer Thm 5.2.2 (multicoloured sets
of real numbers) proves a finite case by LLL and then extends to all of ℝ **by Tychonoff's
theorem, which the text explicitly flags as equivalent to AC**. Alon–Spencer then warn: *"it is
impossible, in general, to apply the Local Lemma to an infinite number of events and conclude
that in some point of the probability space none of them holds"*, with a counterexample. Any
item in this family must declare the compactness/AC step explicitly. Zhao PM `Lemma 6.2.7
(Compactness argument)` is the same move.

### C.4 Martingales and concentration — THE decisive finiteness question

This is the question the assignment flags as most consequential. **The answer is favourable:
the martingale concentration inequalities used in combinatorics are theorems about FINITE
probability spaces and are IN REACH.** Evidence, from the sources themselves:

**Azuma–Hoeffding (Alon–Spencer Thm 7.2.1).** *"A martingale is a sequence X₀,…,X_m of random
variables so that for 0 ≤ i < m, E[X_{i+1} | X_i,…,X₀] = X_i."* — a **finite** sequence.
Statement: if X₀ = 0 and |X_{i+1} − X_i| ≤ 1 for all i, then `Pr[X_m > λ√m] < e^{−λ²/2}`.
Corollary 7.2.2 gives the two-sided form. **Proof** (verbatim structure): set α = λ/√m,
Y_i = X_i − X_{i−1}; use `E[e^{αY_i} | X_{i−1},…,X₀] ≤ cosh α ≤ e^{α²/2}`; telescope the
product to get `E[e^{αX_m}] ≤ e^{α²m/2}`; apply Markov to `e^{αX_m}`. **Six numbered steps.**
Every ingredient — conditional expectation with respect to a finite partition, a finite product
of exponentials, Markov's inequality — is a finite sum, and Markov is already published.
**VERDICT: IN REACH.** This is a clean, short, high-value item.

**Edge- and vertex-exposure martingales (Alon–Spencer §7.1).** The underlying probability space
is *G(n,p)*, which the library already has as a finite space. The edge-exposure martingale is
X_i(H) = E[f(G) | e_j ∈ G ⟺ e_j ∈ H, 1 ≤ j ≤ i] — a conditional expectation over a finite
partition of a finite set, i.e. a weighted finite average. m = C(n,2) steps. The vertex-exposure
martingale is the analogous n-step object. **VERDICT: IN REACH.** No filtration, no σ-algebra,
no measurability is needed: on a finite space "conditional expectation given the first i
coordinates" is literally a finite sum, and the martingale property is a finite identity.
Zhao PM `Example 9.2.4 (Doob martingale)` / `9.2.5` / `9.2.6` are the reference write-ups; note
Zhao's own parenthetical *"(To be more formal, we should talk about filtrations of a probability
space …)"* — that formality is exactly what a finite space lets the library skip.

**The Lipschitz transfer (Alon–Spencer Thm 7.2.3, Thm 7.4.1).** f satisfies the edge (vertex)
Lipschitz condition ⟹ the edge (vertex) exposure martingale has |X_{i+1} − X_i| ≤ 1. Thm 7.4.1
proves this in the general setting Ω = A^B with a gradation ∅ = B₀ ⊂ B₁ ⊂ … ⊂ B_m = B and
independent coordinates. **The proof is a finite double-sum rearrangement** — reproduced in the
source in about ten lines. **IN REACH.**

**Bounded differences / McDiarmid (Zhao PM Thm 9.1.1, 9.1.3).** X₁ ∈ Ω₁, …, X_n ∈ Ω_n
independent; f : Ω₁×…×Ω_n → ℝ with |f(x) − f(x′)| ≤ c_i whenever x, x′ differ only in
coordinate i. Then `Pr[Z − EZ ≥ λ] ≤ exp(−2λ²/Σc_i²)` and symmetrically. Proof: Doob martingale
+ Hoeffding's lemma (`Lemma 9.2.12`). **VERDICT: IN REACH whenever each Ω_i is finite**, which
covers every combinatorial application (colourings, random graphs, random permutations, coupon
collector). Zhao explicitly notes the theorem is known as *"McDiarmid's inequality,
Azuma–Hoeffding inequality, and bounded differences inequality"* — record all three names.

**Shamir–Spencer (Alon–Spencer Thm 7.2.4).** For any n, p, with c = E[χ(G(n,p))]:
`Pr[|χ(G) − c| > λ√(n−1)] < 2e^{−λ²/2}`. Proof: vertex-exposure martingale + a single vertex can
always take a new colour ⟹ vertex Lipschitz + Corollary 7.2.2. **Three steps. IN REACH.** This
is the flagship application and should be authored.

**Bollobás's chromatic number theorem (Alon–Spencer §7.3, Thm 7.3.2 / 10.3.1).** χ(G(n,½)) ∼
n/(2log₂n) a.a.; via Y(H) = maximal size of a family of edge-disjoint k-cliques, Lemma 7.3.1
`E[Y] ≥ (1+o(1))n²/(2k⁴)`, then edge-exposure martingale. Every step is finite; the conclusion
is a limit statement about a sequence of finite spaces. **IN REACH (with care)** — long
(a full page's worth), so scaffold as its own item chain or defer.

**Talagrand's inequality (Alon–Spencer §7.6, Thms 7.6.1–7.6.2; Zhao PM §9.5;
Matoušek–Vondrák §9.1).** Ω = Π_{i=1}^n Ω_i with the product measure; ρ(A,x) the convex
distance; `Pr[A](1 − Pr[A_t]) ≤ e^{−t²/4}`. **Careful verdict: the probability is finite but the
geometry is not trivial.** If each Ω_i is finite then Ω is finite and Alon–Spencer's
`∫_Ω exp[¼ρ²(A,x)]dx ≤ 1/Pr[A]` is a finite sum, and the proof is an induction on n. **But**
ρ(A,x) is defined as `min_{v ∈ V(A,x)} |v|` over the **convex hull** V(A,x) ⊂ ℝⁿ, so the
definition needs: convex hulls in ℝⁿ, the attainment of a minimum on a compact convex set, and
a separating-hyperplane argument (Thm 7.6.1's proof separates V(A,x) from the origin).
**VERDICT: IN REACH in probability terms, but it imports real convex geometry in ℝⁿ that the
library may not have.** It is *not* blocked by measure theory; it is gated by convexity
prerequisites. Flag to the scaffolder as "reachable only after a convex-geometry prerequisite;
otherwise `deferred`". Note the convex hull of the finite set U(A,x) ⊆ {0,1}ⁿ is a polytope, so
a scaffolder willing to build finite polytope machinery could close it.

**Kim–Vu polynomial concentration (Alon–Spencer §7.8; Matoušek–Vondrák Thm 9.2.2).** Statement
only; the proof is long. **`deferred`.**

**OUT OF REACH in this block, unambiguously:** Alon–Spencer Ch. 11 (Erdős–Rényi phase
transition — Galton–Watson branching processes, Poisson limits, the critical window);
Zhao PM §9.4 (isoperimetry on the sphere, Gaussian isoperimetric inequality, Lévy's lemma,
sub-Gaussian distributions); Matoušek–Vondrák §8.4; Zhao PM §9.6 (Euclidean TSP); the
martingale **convergence** theorem (Zhao GTAC §4.7) and everything graphon-based (Zhao GTAC
Ch. 4). Also Alon–Spencer Lemma 8.6.1 (Borel–Cantelli) — a genuinely infinite statement about
Σ_{n=1}^∞ Pr[A_n]; the library must not use it.

### C.5 The entropy method — the second big favourable verdict

**Entropy on a finite space is finitely definable, and the whole area is IN REACH.**
Alon–Spencer §15.7 defines `H(X) = Σ_{x∈S} P(X=x) log₂(1/P(X=x))` for X taking values in a
range S; every application in the chapter has S finite. Gowers's course states outright that
"random variable" means "discrete random variable" throughout. Nothing anywhere in this block
needs a σ-algebra.

Ingredients and their difficulty:

| Result | Statement | Route | Steps | Locator |
|---|---|---|---|---|
| Basic entropy bounds | (i) H(X) ≤ log₂\|S\|; (ii) H(X,Y) ≥ H(X); (iii) H(X,Y) ≤ H(X)+H(Y); (iv) H(X\|Y,Z) ≤ H(X\|Y) | Jensen on `log z` and on `f(z)=z log z` (convexity) | 4 short parts | A&S Lemma 15.7.1 |
| Subadditivity | H(X) ≤ Σ_{i=1}^n H(X_i) for X = (X₁,…,X_n) | induction from 15.7.1(iii) | 1 | A&S Prop 15.7.2 |
| Chain rule | H[X₁,…,X_n] = H[X₁] + H[X₂\|X₁] + … | induction from additivity | 2 | Gowers Lemma 1.3; Zhao PM Lem 10.1.7 |
| Submodularity | — | from 15.7.1(iv) | 2 | Gowers Prop 1.14 |
| **Shearer's lemma** | If 𝒢 is a family of subsets of [n] with each i in ≥ k members, then `k·H(X) ≤ Σ_{G∈𝒢} H(X(G))` | **induction on k**; the k ≥ 2 step replaces G₁,G₂ by G₁∪G₂ and G₁∩G₂ using submodularity, and terminates because each such move decreases the sum | ~6 | A&S Prop 15.7.4; Zhao PM Thm 10.4.5; Gowers Lem 4.1 |
| Shearer, counting form | \|ℱ\|^k ≤ Π_{i=1}^m \|ℱ_i\| where ℱ_i is the projection of ℱ onto G_i | uniform X on ℱ; H(X) = log\|ℱ\|; H(X(G_i)) ≤ log\|ℱ_i\| | 3 | A&S Cor 15.7.5 |
| **Loomis–Whitney** | discrete form: \|A\|^{n−1} ≤ Π \|π_i(A)\| for A ⊆ ℤⁿ (π_i the coordinate-hyperplane projections) | Shearer with 𝒢 = all (n−1)-subsets, k = n−1 | 2 | Zhao PM Cor 10.4.6; Gowers Cor 4.3 |
| **Kruskal–Katona** (Lovász's version) | \|∂A\| ≥ t_{d−1} where \|A\| = C(t,d), t real | entropy argument | moderate | Gowers Thm 4.8; also arXiv 2307.15379 |
| **Brégman's theorem** (Minc conjecture) | per(A) ≤ Π_i (d_i!)^{1/d_i} for a 0/1 matrix with row sums d_i | entropy of a uniformly random permutation contributing to the permanent, revealed in a random order | ~8 | A&S "The Probabilistic Lens: Brégman's Theorem"; Zhao PM Thm 10.2.1; Gowers Thm 3.1 |
| Kahn–Lovász | corollary on matchings | from Brégman | 2 | Gowers Thm 3.2; Zhao PM Cor 10.2.2 |
| Sidorenko (special cases) | h_H(G) ≥ h_{K₂}(G)^{e(H)} for H bipartite, known cases | entropy | moderate | Gowers Thm 2.1; Zhao PM §10.3, Thm 10.3.3 (Blakey–Roy) |
| Edge-isoperimetry in the cube | \|∂A\| ≥ \|A\|(n − log\|A\|) | Shearer | ~4 | Gowers Thm 4.7 |
| Edge-isoperimetry in ℤⁿ | \|∂A\| ≥ 2n\|A\|^{(n−1)/n} | Shearer | ~4 | Gowers Thm 4.6 |
| Δ-intersecting families | \|ℱ\| ≤ 2^{n−2}·... (Kleitman–Shearer–Sturtevant) | subadditivity | ~4 | A&S Cor 15.7.3, Cor 15.7.7; Gowers Thm 4.5 |
| Entropic Ruzsa calculus | entropic triangle inequality, submodularity for sums, entropic BSG | discrete random variables on a finite abelian group | moderate | Gowers Lem 6.7, 6.8, 6.11 |

**VERDICT for the whole entropy block: IN REACH, and it is the strongest single recommendation
in this report.** Definitions are finite sums; proofs are inductions and convexity (Jensen)
arguments; the results are famous and load-bearing. Two independent full treatments exist
(Alon–Spencer §15.7 + Zhao PM Ch. 10 + Gowers's whole course). The only prerequisite the library
may need to add is Jensen's inequality for a finite convex combination — itself a short finite
induction from convexity, and worth building as a lemma rather than deferring.

One caveat: A&S Cor 15.7.6 is stated for "a measurable body B in n-dimensional Euclidean space"
(the continuous Loomis–Whitney). Take the **discrete** Loomis–Whitney (Zhao PM Cor 10.4.6,
Gowers Cor 4.3) instead — same content for the library's purposes, no measure theory.

### C.6 Discrepancy

| Result | Statement | Route | Verdict |
|---|---|---|---|
| Random colouring bound (A&S Thm 13.1.1) | ℱ a family of n subsets of an m-set ⟹ `disc(ℱ) ≤ √(2m ln(2n))` | Chernoff + union bound | **IN REACH** — 3 steps, and Chernoff for random signs is already published |
| **Beck–Fiala (A&S Thm 13.5.1)** | ℱ a finite family of finite sets, no restriction on the number or size of sets, with `deg(ℱ) ≤ t` ⟹ `disc(ℱ) ≤ 2t − 1` | **pure linear algebra**: keep all "active" sets at value 0; active sets < floating points ⟹ underdetermined system ⟹ move along a line until some x_j hits ±1; iterate | **IN REACH, and outstanding.** A&S say it "uses only methods from linear algebra and thus is technically outside the scope we have set for this book" — which is precisely why it fits a library with no measure theory. ~7 numbered steps, no probability at all. **Top recommendation in this block.** |
| Beck–Fiala/Komlós conjecture (A&S Conj 13.5.2) | `deg(ℱ) ≤ t ⟹ disc(ℱ) ≤ K√t` | — | statement only |
| Komlós conjecture (Zhao PM Conj 5.1.5) | v₁,…,v_m in the unit ball of ℝⁿ ⟹ ∃ signs with `Σεᵢvᵢ ∈ [−K,K]ⁿ` | — | statement only |
| **Six standard deviations (A&S Thm 13.2.1; Zhao PM Thm 5.1.3)** | ℱ a family of n subsets of an n-element set ⟹ `disc(ℱ) ≤ 6√n` | **Two routes, and the choice matters.** (a) Spencer's original **partial colouring / entropy** method: a pigeonhole over finitely many colourings using the entropy bound of A&S Prop 15.7.2 — **entirely finite**. (b) The 4th edition's presentation follows **Lovett–Meka** (Thms 13.2.2–13.2.5), a Gaussian random walk in ℝⁿ — **needs Gaussians, hence not finite** (see A&S Ex. 13.6.3, chi-squared, and Ex. 13.6.4, Gaussian martingales). | **IN REACH via route (a) only.** Explicitly instruct the scaffolder: take the entropy/partial-colouring proof, not the 4th-edition Lovett–Meka presentation. A&S §13.2 itself notes the entropy method "has already been applied in Section 13.2" when introducing Prop 15.7.2 — the cross-reference confirms the finite route is in the book. |
| Linear and hereditary discrepancy (A&S §13.3, Thms 13.3.1–13.3.2, Cors 13.3.3–13.3.4) | `lindisc(ℱ) ≤ herdisc(ℱ)`; `disc(ℱ) ≤ 12√n` for arbitrary set sizes | finite rounding argument | **IN REACH** |
| Lower bounds via Hadamard (A&S Thm 13.4.1) | a Hadamard matrix of order n > 1 gives n subsets of an n-set with `disc(ℱ) ≥ √n/2` | finite linear algebra | **IN REACH** |

### C.7 Derandomization

**Method of conditional probabilities (A&S §16.1, Prop 16.1.1, Thm 16.1.2, Claims 16.1.3–16.1.4).**
Statement: the existence proofs of Prop 1.1.1 / Thm 2.5.1 can be converted into polynomial-time
deterministic constructions by fixing the random bits one at a time, always choosing the value
that keeps the conditional expectation favourable. The mathematical content — `f^{i}_{p−1}(ε₁,…,ε_{p−1}) = ½[f^i_p(…,−1) + f^i_p(…,+1)]`
and `f^i_{p−1}(ε₁,…,ε_{p−1}) ≥ Pr[A_i | ε₁,…,ε_{p−1}]` — is a finite identity plus a finite
inequality on a finite space. **VERDICT: IN REACH** as a mathematical statement. The
*algorithmic* wrapper ("in polynomial time") belongs to a complexity level the library has not
reached; author the conditional-expectation splitting identity and the pessimistic-estimator
inequality, and leave the running-time claim to a Remark.

**d-wise independence in small sample spaces (A&S §16.2, Thm 16.2.1, Lemma 16.2.2, Prop 16.2.3).**
Thm 16.2.1: if `n = 2^k − 1` and `d = 2t + 1` then there is a symmetric probability space Ω of
size `2(n+1)^t` and d-wise independent random variables y₁,…,y_n over Ω each taking 0/1 with
probability ½. Route: the parity-check matrix H of a BCH code; Lemma 16.2.2 says any d = 2t+1
columns of H are linearly independent over GF(2). **VERDICT: IN REACH and excellent** — the
entire construction is finite linear algebra over GF(2), the space Ω is finite *by
construction*, and this is one of the few places where a small explicit finite probability space
is the object of study rather than an approximation to an infinite one. Strongly recommended.

### C.8 Pseudorandomness and quasirandom graphs

**Chung–Graham–Wilson (A&S Thm 9.3.1, Thm 9.3.2).** For a d-regular graph G on n vertices with
d = (½+o(1))n, the seven properties P₁(s), P₂, P₃, P₄, P₅, P₆, P₇ (discrepancy, 4-cycle count,
eigenvalue separation, subgraph-count, codegree, etc.) are pairwise equivalent. Zhao GTAC
Thm 3.1.1 / Def 3.1.2 give the modern statement.

**Finiteness.** Each individual property is a statement about a **single finite graph** with an
explicit error parameter; the *equivalence* as classically stated is asymptotic — A&S are
explicit: *"the notions below apply to a sequence of graphs G = G_n … for which the number of
vertices n is going to infinity"*. **VERDICT: IN REACH (with care).** The right move for this
library is to author the **quantitative, single-n** implications (e.g. "if
`|e(S) − ½C(|S|,2)| = o(n²)` for all S then the C₄-count is `(1+o(1))n⁴/16`", stated with
explicit ε–δ constants), each of which is a finite theorem, and record the seven-way asymptotic
equivalence as the organising corollary. Zhao GTAC §3.1 states them in exactly this
ε-quantified single-graph form, which is why S2 is the better source here than S1.

**Expander mixing lemma (A&S Thm 9.2.1, Thm 9.2.4, Cor 9.2.5; Zhao GTAC Thm 3.2.4, 3.2.6).**
For an (n,d,λ)-graph and any B, C ⊆ V, `|e(B,C) − d|B||C|/n| ≤ λ√(|B||C|)`. Proof: expand
1_B, 1_C in an orthonormal eigenbasis of the adjacency matrix and apply Cauchy–Schwarz.
**VERDICT: IN REACH — a single finite graph, finite-dimensional spectral theory over ℝ, and
Cauchy–Schwarz (already published).** ~6 steps. The prerequisite is the spectral theorem for
real symmetric matrices; if the library has it, this is one of the best items in the harvest.
A&S Thm 9.2.1 is the partition form: `e(B,C) ≥ (d−λ)|B||C|/n`. Converse: Zhao GTAC Thm 3.2.12.
Cheeger's inequality: Zhao GTAC Thm 3.2.13. Alon–Boppana: Zhao GTAC Thm 3.6.2 — `deferred`.

**Abelian Cayley graph eigenvalues (Zhao GTAC Thm 3.3.8, Def 3.3.5 Paley graphs, Thm 3.3.12,
Thm 3.3.14 Gauss sum).** The eigenvalues of a Cayley graph on a finite abelian group are
character sums. **IN REACH** — finite character theory of a finite abelian group; this pairs
naturally with the Fourier machinery needed for Roth (C.10) and should share those definitions.

**Quadratic residue tournaments (A&S §9.1, Thm 9.1.1, Lemma 9.1.2).** The Paley tournament has
property S_k for k = O(log p); Lemma 9.1.2 is a character-sum estimate. **IN REACH** — and note
the library already has "tournament property S_k", so this is the explicit construction matching
the published existence proof. Very attractive pairing.

### C.9 Random graph landmarks — reachability triage

**Critical framing finding, and it changes how these must be authored.** Checking the exact
printed statements in Frieze–Karoński, Bollobás and Matoušek–Vondrák shows these results are
**not all "whp" statements of one kind**. They come in three grades of sharpness, and flattening
grade 2 to grade 3 would author a *weaker* statement than the source while flattening grade 3 to
a finite claim would author a *stronger* — i.e. false — one.

- **Grade 1** — coarse/sharp threshold: "0 if p ≪ p̂, 1 if p ≫ p̂".
- **Grade 2** — convergence at the exact scaling window to a **named non-trivial constant**.
- **Grade 3** — whp-only, sometimes with an `o(1)` sitting *inside* the statement.

Bollobás's Preface fixes his convention verbatim: *"we shall say that a typical element of our
space has a property Q when the probability that a random graph on n vertices has Q tends to 1
as n → ∞. We also say that **almost every (a.e.) graph** has property Q."* Frieze–Karoński and
the lecture notes say **"w.h.p."** for the same notion — same meaning, different vocabulary; an
item citing both must not treat them as different notions.

| Result | Exact form in the sources | Grade | Verdict |
|---|---|---|---|
| **Connectivity** (Frieze–Karoński **Thm 4.1**, Erdős–Rényi) | with `m = ½n(log n + c_n)`: `lim P(G_m connected) = 0` if `c_n → −∞`; `= e^{−e^{−c}}` if `c_n → c`; `= 1` if `c_n → ∞` | **2** | **[L] IN REACH with care.** The middle branch is load-bearing and **cannot** be restated as "whp connected". Frieze **Thm 4.2** also gives the hitting-time form `m₁* = m_c*` whp. Erde §6.1 Thm 6.3 states only grade 1. |
| **Hamiltonicity** (Frieze–Karoński **Thm 6.5**; Komlós–Szemerédi, Bollobás, Ajtai–Komlós–Szemerédi) | with `p = (log n + log log n + c_n)/n`: same three-way limit, `e^{−e^{−c}}` in the window; moreover `lim P(Hamiltonian) = lim P(δ ≥ 2)` | **2** | **[L] IN REACH with care**, hard |
| **Giant component** (Frieze–Karoński **Thm 2.14**) | `m = cn/2, c > 1` ⟹ whp a unique giant component with `(1 − x/c + o(1))n` vertices, where `xe^{−x} = ce^{−c}`, `0 < x < 1`; other components `O(log n)` | **3** | **[X] OUT OF REACH.** Note the `o(1)` is **inside** the statement — the size is pinned only to leading order, so this is not merely un-quantified but un-quantifiable as written. And the standard proof runs through the Galton–Watson branching process (A&S §11.3–11.4; Erde §5.2), a genuinely infinite object. |
| **Clique number of G(n,½), two-point concentration** | **Not present in Frieze–Karoński at all** (the subagent grepped all 854 pp. for "two point"/"two-point"/"concentrated on two" — zero hits; Frieze Thm 7.3 gives only `α(G_{n,p}) ≈ 2log_b n` whp). The two-point result must be sourced from Bollobás §11.1 or Matoušek–Vondrák §5.4: *"Bollobás, Erdős and Matula proved that there exists a function k(n) such that `lim_{n→∞} P[k(n) ≤ ω(G(n,½)) ≤ k(n)+1] = 1`."* | **3** | **[L] IN REACH with care — but with a hard warning.** This is a pure limit statement with an **unspecified k(n)**, not given in closed form and with no error bound. **Any library item claiming a finite-n two-point bound would overstate every standard source.** The two bracketing lemmas are also limits (M–V Lem 5.4.1, Thm 5.4.2). |
| **Chromatic number value** (A&S Thm 10.3.1; Frieze–Karoński **Thm 7.7**, Bollobás) | `χ(G_{n,p}) ≈ n/(2log_b n)` whp | **3** | **[L] IN REACH with care**, long |
| **Chromatic number CONCENTRATION** (Frieze–Karoński **Thm 7.8**; A&S Thm 7.2.4 Shamir–Spencer) | `P(\|χ(G_{n,p}) − Eχ(G_{n,p})\| ≥ t) ≤ 2exp(−t²/(2n))` | **—** | **[F] IN REACH — the one genuine exception.** Holds for **every n and every t**, with an explicit constant and **no limit at all**. Proved from Azuma–Hoeffding via the vertex-exposure martingale. **Author this one as a finite theorem.** |
| Threshold for a fixed subgraph (M–V Thms 5.3.4, 5.3.5) | `r(n) = n^{−1/ρ}` is a threshold function | **1** | **[L]** — and the Chebyshev inequality underneath is **[F]** |
| Zero–one laws (A&S §10.4; JLR Ch. 10) | for fixed p, every first-order property has probability → 0 or 1 | — | **[X] `out-of-scope`** — first-order logic + Ehrenfeucht–Fraïssé games, a different subject |

**The general pattern, and it is the single most useful rule for the scaffolder:
concentration/deviation results are finite-n with explicit bounds; threshold/location results
are asymptotic.** Author the former as theorems and the latter as limit statements, preserving
the `e^{−e^{−c}}` window rather than flattening it to "whp".

### C.10 Roth's theorem and the polynomial method — the best additive material in reach

**Roth in F₃ⁿ / Meshulam's bound (Zhao GTAC Thm 6.2.1).** *"Every 3-AP-free subset of F₃ⁿ has
size O(3ⁿ/n)."* Remark 6.2.2: for every odd prime p there is C_p with every 3-AP-free subset of
F_pⁿ of size ≤ C_p·pⁿ/n.

**Exactly what the Fourier proof needs — answering the assignment's question directly.** It
needs **only finite Fourier analysis on the finite abelian group F_pⁿ**, and nothing else. The
complete chain, from Zhao GTAC §6.1–6.2:

1. `Definition 6.1.1` — fix ω = exp(2πi/p); `f̂(r) = E_{x∈F_pⁿ} f(x)ω^{−r·x} = p^{−n} Σ_x f(x)ω^{−r·x}`. A **finite sum**.
2. `Theorem 6.1.2 (Fourier inversion formula)` — `f(x) = Σ_r f̂(r)ω^{r·x}`.
3. `Theorem 6.1.3 (Parseval / Plancherel)` — `E_x f(x)ḡ(x) = Σ_r f̂(r)ĝ(r)‾`.
4. `Definition 6.1.5 / Theorem 6.1.7` — convolution and the convolution identity.
5. `Proposition 6.1.9` — the 3-AP density Λ₃(f) equals `Σ_r f̂(r)²f̂(−2r)`.
6. `Lemma 6.2.4 (3-AP counting lemma)`, `Lemma 6.2.6 (3-AP-free implies a large Fourier coefficient)`, `Lemma 6.2.7 (Large Fourier coefficient implies density increment)`, `Lemma 6.2.8 (3-AP-free implies density increment)`.
7. Iterate the density increment on a descending chain of subspaces `V₀ ⊇ V₁ ⊇ …`, with `α_{i+1} ≥ α_i + α_i²/4`; the careful doubling analysis gives O(1/α) rounds and hence α = O(1/n).

**Prerequisites: complex numbers, p-th roots of unity, orthogonality of characters of a finite
abelian group, Cauchy–Schwarz. No measure theory, no infinite groups, no analysis beyond finite
sums.** **VERDICT: IN REACH, strongly recommended.** This is the highest-value additive
combinatorics result the library can honestly reach, and its Fourier prerequisites are shared
with C.8 (Cayley graph eigenvalues) — scaffold them once.

Roth in the integers (Zhao GTAC §6.3–6.4, Thm 6.4.1) is the same architecture transported to
Z/NZ, plus `Lemma 6.4.4 (Dirichlet's lemma)` and `Lemma 6.4.5 (Partition into progression level
sets)`. Fourier analysis on Z/NZ is again finite. **IN REACH**, somewhat longer.

**Cap set / Ellenberg–Gijswijt via slice rank (Zhao GTAC §6.5).** Thm 6.5.1: every 3-AP-free
subset of F₃ⁿ has size `O(2.756ⁿ)` (power-saving). The proof chain is exactly:

- `Definition 6.5.2 (Slice rank)` — F : A×A×A → 𝔽 has slice rank 1 if it equals f(x)g(y,z), f(y)g(x,z), or f(z)g(x,y); the slice rank is the least k with F a sum of k such.
- `Lemma 6.5.3 (Trivial upper bound for slice rank)` — every F has slice rank ≤ |A|. *Proof: restrict to slices F_a(x,y,z) = δ_a(x)F(a,y,z); sum over a.* **Four lines.**
- `Lemma 6.5.4 (Vector with large support)` — every k-dimensional subspace of an n-dimensional vector space over any field contains a point with ≥ k nonzero coordinates. *Proof: a k×n matrix of rank k has an invertible k×k submatrix.* **Four lines.**
- `Lemma 6.5.5 (Slice rank of a diagonal)` — if F(x,y,z) ≠ 0 iff x=y=z, then slice rank(F) = |A|.
- `Lemma 6.5.6 (Upper bound on the slice rank of 1_{x+y+z=0})` — via Croot–Lev–Pach: expand the polynomial `Π_i (1 − (x_i+y_i+z_i)²)` and split monomials by degree.
- `Lemma 6.5.7 (A trinomial coefficient estimate)` — count monomials of bounded degree.
- `Theorem 6.5.9 (Roth's theorem in the finite field model)` — combine.

**VERDICT: IN REACH, in bounded numbered steps, and famously short.** Everything lives in the
polynomial ring F₃[x₁,…,x_n] modulo `x_i³ = x_i` — a **finite-dimensional** vector space — plus
rank arguments and a monomial count. No probability at all. Prerequisites: finite-dimensional
linear algebra over a finite field, polynomial rings, a binomial/trinomial coefficient estimate.
**This and C.10's Fourier route are the two strongest additive recommendations.** Note
Zhao's own caveat (Remark 6.2.10): *"the polynomial method proof appears to be specific to the
finite field model, and it is not known how to extend the strategy to the integers."*

**Behrend's construction (Zhao GTAC Thm 2.5.1).** A 3-AP-free subset of [N] of size
`N·e^{−O(√(log N))}`. Construction: points of [n]^d on a sphere `Σx_i² = r`, chosen by
pigeonhole, mapped to integers by base-2n digits; convexity of the sphere kills 3-APs.
**VERDICT: IN REACH** — elementary counting, pigeonhole, and the strict convexity of the
Euclidean sphere. ~6 steps. Excellent companion to C.10 (it shows Roth's bound cannot be
improved past a certain point). Corollary 2.5.2 gives the diamond-free lower bound.

### C.11 Sumset calculus

| Result | Statement | Verdict |
|---|---|---|
| **Ruzsa triangle inequality** (Zhao GTAC Thm 7.2.1; Gowers Lem 6.1) | `\|A\|·\|B−C\| ≤ \|A−B\|·\|A−C\|` | **IN REACH** — an injection argument on finite sets, 3–4 steps. Outstanding first item of a sumset page. |
| **Plünnecke's inequality** (Zhao GTAC Thm 7.3.1, 7.3.3; Lem 7.3.4 expansion-ratio bounds) | if `\|A+B\| ≤ K\|A\|` then `\|mB − nB\| ≤ K^{m+n}\|A\|` | **IN REACH** — Petridis's proof is a purely finite combinatorial induction choosing a subset X ⊆ A minimising `\|X+B\|/\|X\|`; no graph-theoretic magnification needed. ~8 steps. |
| Ruzsa covering lemma (Zhao GTAC Thm 7.4.1; Gowers Lem 6.2) | if `\|A+B\| ≤ K\|B\|` then A ⊆ X + B − B for some X with `\|X\| ≤ K` | **IN REACH** — greedy maximal disjoint family, 3 steps |
| Additive energy / small doubling (Zhao GTAC Def 7.13.1, Prop 7.13.4) | small doubling ⟹ large additive energy | **IN REACH** |
| **Balog–Szemerédi–Gowers** (Zhao GTAC Thm 7.13.6/7.13.7, Graph BSG 7.13.9, Lems 7.13.10–7.13.11) | large additive energy ⟹ a large subset with small doubling | **IN REACH but long** — the proof is finite graph theory (path-of-length-2 and path-of-length-3 lemmas). Recommend `deferred` unless the pair has room. Entropic route: Gowers Lem 6.11. |
| **Freiman's theorem** (Zhao GTAC Thm 7.1.10, proof at 7.11.1) | `\|A+A\| ≤ K\|A\|` for A ⊆ ℤ ⟹ A is contained in a GAP of bounded rank and size `≤ C(K)\|A\|` | **NEEDS GEOMETRY OF NUMBERS — `deferred`.** Zhao's §7.9 is explicitly *"Geometry of Numbers"*, containing `Definition 7.9.1 (Lattice)`, `Definition 7.9.2 (Successive minima)`, `Theorem 7.9.4 (Minkowski's second theorem)`, `Theorem 7.9.6 (Blichfeldt's theorem)`, `Theorem 7.9.7 (Minkowski's first theorem)`, then §7.10 finds a GAP in a Bohr set. Answering the assignment's question: **yes, Freiman needs geometry of numbers** (Minkowski's second theorem on successive minima), plus Bogolyubov's lemma, Freiman homomorphisms and the Ruzsa modeling lemma. The whole chain §7.6–§7.11 is a page in itself. |
| Freiman in bounded exponent (Zhao GTAC Thm 7.5.4) and in F₂ⁿ (Thm 7.5.1) | `\|A+A\| ≤ K\|A\|` in a group of exponent r ⟹ A is in a subgroup of size `≤ C(K,r)\|A\|` | **IN REACH** — this is the geometry-of-numbers-free special case, provable from Ruzsa covering + Plünnecke alone. **Strong recommendation: scaffold this instead of full Freiman.** |
| Bogolyubov's lemma (Zhao GTAC Thm 7.8.3 in F_pⁿ; 7.8.5 in Z/NZ) | `2A − 2A` contains a large subspace / Bohr set | **IN REACH in F_pⁿ** — finite Fourier, shares C.10's machinery |
| Polynomial Freiman–Ruzsa (Zhao GTAC Conj 7.12.1–7.12.9) | — | statements only; the F₂ⁿ case is now the Gowers–Green–Manners–Tao theorem (Gowers EMC Thm 7.1), proved by **entropy**, hence finite — but long |
| Sum-product (Zhao GTAC Conj 8.0.2, Thm 8.2.1 Elekes, Thm 8.2.5 Szemerédi–Trotter, Thm 8.3.1 Solymosi) | Erdős–Szemerédi: `max(\|A+A\|,\|A·A\|) ≥ \|A\|^{2−o(1)}` | **`deferred`** — Elekes's proof needs Szemerédi–Trotter, which needs the crossing number inequality (Zhao GTAC Thm 8.2.3; also A&S "Probabilistic Lens: Crossing Numbers, Incidences, Sums and Products" and Zhao PM Thm 2.6.2). The crossing number inequality itself **is** in reach and already sits in Zhao PM §2.6; a scaffolder could build crossing-number → Szemerédi–Trotter → Elekes as a chain if the pair has room. |

### C.11b Cauchy–Davenport, Erdős–Ginzburg–Ziv, Kneser, Vosper — the cheapest additive cluster

**Cauchy–Davenport (Tao–Vu Thm 5.4, p. 199; restated Thm 9.4, p. 333).** *If p is a prime and
A, B are additive sets in ℤ_p (finite, non-empty), then `|A+B| ≥ min(|A|+|B|−1, p)`.* Sharp at
A = B = {0,…,k−1}.

*Route 1 — e-transform (self-contained, ~6 steps).* Define `A^{(e)} := A ∪ (B+e)`,
`B^{(e)} := B ∩ (A−e)`; Lemma 5.2 gives `A^{(e)}+B^{(e)} ⊆ A+B` and
`|A^{(e)}|+|B^{(e)}| = |A|+|B|`. Induct on |B|. If some e ∈ A−B strictly shrinks B, apply the
hypothesis; otherwise `A − B + B ⊆ A`, so by Tao–Vu Prop 2.2 B lies in a coset of a subgroup
G ≤ ℤ_p, and p prime forces G ∈ {0, ℤ_p}. **VERDICT: IN REACH.** Only prerequisite outside
finite set manipulation is Prop 2.2.

*Route 2 — Combinatorial Nullstellensatz (Alon–Nathanson–Ruzsa; Tao–Vu §9.1–9.2).* Lemma 9.1 →
**Theorem 9.2 (Combinatorial Nullstellensatz, Alon)**: over any field F, if
`P ∈ F[t_1,…,t_n]` has degree d with a non-zero coefficient at `t_1^{d_1}⋯t_n^{d_n}` where
`Σd_i = d`, and `|S_i| > d_i`, then P is non-zero somewhere on `S_1×⋯×S_n` (proved by induction
on n via long division by `∏_{s∈S_n}(t_n − s)`, ~6 lines) → Lemma 9.3 → Thm 9.4, where the needed
coefficient of `(t_1+t_2)^K` at `t_1^{|A|−1}t_2^{|B|−1}` is `C(K,|A|−1) mod p ≠ 0` because
`K < p`. **VERDICT: IN REACH; ~4–5 steps at the point of use but a heavier prerequisite.**
Worth the extra machinery only if the page also wants **Erdős–Heilbronn** (Tao–Vu Thm 9.5:
`|A ⊕ B| ≥ min(|A|+|B|−3, p)`), which the e-transform provably cannot reach — Tao–Vu say so
explicitly on p. 334.

**Erdős–Ginzburg–Ziv (Tao–Vu Thm 9.28, p. 350).** *Let Z be a finite additive group and
a₁,…,a_{2|Z|−1} ∈ Z. Then there is I ⊆ [1, 2|Z|−1] with |I| = |Z| and `Σ_{i∈I} a_i = 0`.* Sharp:
2|Z|−2 elements do not suffice (take |Z|−1 copies each of 0 and 1). Cyclic form: any 2n−1
elements of ℤ_n contain n summing to 0.

*Proof from Cauchy–Davenport, 8 numbered steps.* **Prime case (5 steps):** order
`a_1 ≤ … ≤ a_{2p−1}` in {0,…,p−1}; if `a_i = a_{i+p−1}` those p equal terms sum to `p·a_i ≡ 0`;
otherwise set `A_i := {a_i, a_{i+p−1}}` for i = 1,…,p−1, each of size 2, and iterated
Cauchy–Davenport gives `|A_1+⋯+A_{p−1}| ≥ min(p, 2(p−1)−(p−2)) = p`, so the sum set is all of
ℤ_p; pick `−a_{2p−1}` and adjoin `a_{2p−1}`. **Induction n = pm (3 steps):** greedily extract
2m−1 disjoint p-element subsets with sums ≡ 0 mod p, write those sums as `p·b_j`, apply the
hypothesis in ℤ_m. **VERDICT: IN REACH.** An alternative Tao–Vu route replaces Cauchy–Davenport
by **Chevalley–Warning** (Tao–Vu Cor 9.25) — cheaper if the library already has finite fields.

**Kneser (Tao–Vu Thm 5.5, p. 200).** *For additive sets A, B in any additive group Z,
`|A+B| ≥ |A + Sym₁(A+B)| + |B + Sym₁(A+B)| − |Sym₁(A+B)| ≥ |A| + |B| − |Sym₁(A+B)|`,* where
`Sym₁(A) := {h ∈ Z : A + h = A}` is the stabilizer (Tao–Vu Def 2.32). **No primality, and no
finiteness assumption on Z** — only A, B finite non-empty and Z abelian. Cauchy–Davenport is the
Z = ℤ_p case. **VERDICT: IN REACH**, but Tao–Vu's proof is a **triple induction** (upward on
|A+B|, downward on |A|+|B| for fixed |A+B|, upward on |B|) which they themselves flag as
"surprisingly delicate". Recommend scaffolding it only with that warning attached.

**Vosper (Tao–Vu Thm 5.9, p. 205).** *Let p be prime and A, B additive sets in ℤ_p with
`|A|, |B| ≥ 2` and `|A+B| ≤ p−2`. Then `|A+B| = |A|+|B|−1` **iff** A and B are arithmetic
progressions with the same step.* **Both side conditions are necessary** — singletons and
near-full sumsets are genuine exceptions, and a scaffolder dropping either would author a false
statement. Proof: the case A a progression via two applications of Cauchy–Davenport, then a
duality trick with `C := −(ℤ_p ∖ (A+B))`. **VERDICT: IN REACH.**

**Sum-product, current record (for a `rem-` statement only).** Writing
`max(|A+A|, |AA|) ≥ |A|^{1+c−o(1)}` over ℝ: Erdős–Szemerédi 1983 (non-explicit c > 0) → Elekes
1997 (c = 1/4) → Solymosi 2009 (1/3) → Konyagin–Shkredov 2015/2016 → Shakan 2019 →
**Rudnev–Stevens 2022, c = 1/3 + 2/1167 ≈ 0.33504** (arXiv:2005.11145) → **Bloom 2025,
c = 1/3 + 2/951 ≈ 0.33543**. Source: Bloom, *A history of the sum-product problem*,
`http://thomasbloom.org/notes/sumproduct.html`. **Rudnev–Stevens is the safe citable state of
the art.** A December 2025 preprint (arXiv:2512.13849) claims c ≈ 0.33560 — **provisional, not
yet refereed; do not cite as established.** Over 𝔽_p the record is 1/4 (Mohammadi–Stevens 2023),
and Garaev's obstruction means some size restriction is unavoidable there.

### C.12 Ramsey lower bounds — the modern record

- **LLL improvement:** see C.3. `R(k,3) > c·k²/log²k` (Spencer 1977), `R(k,4) > k^{5/2+o(1)}`.
- **Shearer's bound (1983)** for the independence number of triangle-free graphs gives
  `R(3,k) ≤ (1+o(1))k²/log k`, the still-standard upper bound. The matching-order lower bound
  `R(3,k) = Ω(k²/log k)` is Kim's (1995) semi-random/nibble construction.
- **Newest lower bound (2025):** Campos, Jenssen, Michelen & Sahasrabudhe, *A new lower bound
  for the Ramsey numbers R(3,k)*, arXiv:2505.13371 — `R(3,k) ≥ (1/3 + o(1))·k²/log k`,
  improving the previous `(1/4 + o(1))k²/log k` and **disproving a conjecture of Fiz Pontiveros,
  Griffiths and Morris** that 1/4 was sharp.
- **The exponential improvement for diagonal Ramsey:** Campos, Griffiths, Morris &
  Sahasrabudhe, *An exponential improvement for diagonal Ramsey*, arXiv:2303.09521 —
  `R(k) ≤ (4 − ε)^k` for some constant ε > 0; the announced explicit form is `R(k) < 3.993^k`.
  This is the first exponential improvement on the Erdős–Szekeres 1935 bound. Follow-up work
  (arXiv:2407.19026, *Optimizing the CGMS upper bound on Ramsey numbers*) reports
  `R(k,k) ≤ 3.8^{k+o(k)}`. **Statement only** — `out-of-scope` for a local proof; if cited it
  must be a source-cited `rem-` item with `proved_here: false`.

### C.13 Ramsey theory — the choice-principle audit

The library states choice strength explicitly and already has published: König's infinity lemma
in ZF, the infinite Ramsey theorem in ZF, the canonical Ramsey theorem for pairs, van der
Waerden, Schur, and an ultrafilter lemma / BPI. The precise question is which of the natural
extensions need what. Findings:

| Statement | Choice strength | Note |
|---|---|---|
| **Finite Ramsey** (all uniformities, all colour counts) | **ZF** | a finite combinatorial statement; already published for k-uniform hypergraphs |
| **Infinite Ramsey for pairs / k-tuples, ℕ, finitely many colours** | **ZF** | already published. The usual textbook proof builds a nested sequence of infinite sets by *definable* recursion on ℕ, so no choice is needed — but a scaffolder must make the definability explicit, because the "obvious" proof that picks an arbitrary element at each stage is a DC argument in disguise |
| Infinite Ramsey with **infinitely many colours**, or on an arbitrary infinite set | needs **more** | the arbitrary-infinite-set version is not a ZF theorem; it needs a well-ordering or a weak choice principle. Scaffold only the ℕ version unless the extra hypothesis is stated |
| **König's infinity lemma** for finitely-branching trees | **ZF** | already published |
| König's lemma for **arbitrary** branching | **DC** (indeed equivalent over ZF to a form of it) | do not conflate with the published finitely-branching version |
| **Compactness / Rado selection** transfer (finite ⟸ infinite) | **BPI** (ultrafilter lemma) suffices; the library has it | this is the standard route from an infinite Ramsey-type theorem to its finite version |
| **Hales–Jewett**, **van der Waerden**, **Gallai**, **Rado**, **Deuber**, **Folkman** — finite versions | **ZF** | all are finite combinatorial statements with combinatorial (Shelah-style) proofs |
| **Hindman's theorem (finite sums)** | **ZF** — see below | |
| **Idempotent ultrafilters in βℕ / Ellis's lemma** | **AC** (Zorn on closed subsemigroups) | the *proof technique*, not the theorem |

**Hindman's theorem, and the answer to the assignment's exact question.** The statement: *for
every finite colouring of ℕ there is an infinite set D ⊆ ℕ with all finite sums of distinct
elements of D the same colour.* There are three standard proofs and they have **strikingly
different** logical strength — Blass, Hirst & Simpson's reverse-mathematics analysis is the
reference:

- **Hindman's original combinatorial proof** formalises in **ACA₀⁺**.
- **Baumgartner's streamlined combinatorial proof** formalises in **Π¹₂−TI₀** (stronger).
- **The Galvin–Glazer ultrafilter proof** via idempotents in βℕ needs more still.
- The strongest reversal known is that Hindman's theorem **implies ACA₀** over RCA₀; the exact
  strength remains open.

**So the answer is: Hindman's theorem does NOT need full AC, and does not even need BPI.** It is
provable in second-order arithmetic (ACA₀⁺), hence in ZF outright, via Hindman's own or
Towsner's purely combinatorial proof. What needs AC is only the *ultrafilter* proof: the
existence of an idempotent ultrafilter comes from Ellis's lemma, which applies Zorn's lemma to
the closed subsemigroups of βℕ. **A library item must therefore not state "Hindman's theorem
requires AC".** If the library wants the elegant ultrafilter proof it must declare AC (or at
least Zorn on that family) for *that proof*, while the theorem itself is a ZF theorem — exactly
the statement/proof provenance split SCHEMA already supports. Recommended: state Hindman in ZF,
cite the combinatorial proof, and record the Galvin–Glazer route as a Remark with its choice
cost named. Source: Blass–Hirst–Simpson, *Logical analysis of some theorems of combinatorics and
topological dynamics*; Hirst, *Hindman's Theorem, ultrafilters, and reverse mathematics*;
Towsner, *A Simple Proof and Some Difficult Examples for Hindman's Theorem*, arXiv:0906.3885.

**A second, cheaper warning already visible in the probabilistic sources.** A&S Theorem 5.2.2
proves a colouring statement about **all** of ℝ by proving the finite case with the Local Lemma
and then invoking **Tychonoff's theorem, which A&S explicitly flag as equivalent to AC**. A&S
immediately add that one may *not* apply the Local Lemma to infinitely many events directly, and
give a counterexample. Any Ramsey-flavoured item that upgrades a finite result to an infinite one
by compactness must name the principle used.

---

## D. Convention disagreements

Both conventions recorded with sources, and a recommendation.

**D.1 `G(n,p)` versus `G(n,M)`.** `G(n,p)` (binomial/Erdős–Rényi–Gilbert): each of the C(n,2)
pairs is an edge independently with probability p — Matoušek–Vondrák Def 1.1.2 states this as a
*finite* space with `p(G) = p^m(1−p)^{C(n,2)−m}`. `G(n,M)` (uniform): a graph chosen uniformly
from all graphs with exactly M edges. **`G(n,p)` is overwhelmingly more standard** in the
probabilistic-method literature (A&S, Zhao, Matoušek–Vondrák all use it as default) because
independence across edges makes every calculation factor. Janson–Łuczak–Ruciński treat both and
develop the transfer between them. **For this library `G(n,p)` is also the only sane choice**:
it is a product of finite two-point spaces, which is exactly the published `product spaces`
construction. Note the library has already committed to `G(n,p)` (published item: "G(n,p) as a
finite space").

**D.2 "with high probability".** Three conventions in circulation: (a) **whp / a.a.s.** —
probability → 1 as n → ∞ (Bollobás, JLR, Zhao); (b) **almost always / a.a.** — A&S's phrase for
the same thing ("X > 0 almost always", Cor 4.3.4); (c) **whp meaning ≥ 1 − n^{−C}** for a fixed
constant, common in theoretical computer science. **(a)/(b) are the same and are standard in
combinatorics; (c) is the CS convention and is genuinely different** (it is quantitative).
A&S's "almost always" is the older usage and can mislead a reader into thinking of almost-sure
convergence in a measure-theoretic sense — **the library should prefer an explicit
`lim_{n→∞} μ_n(P_n) = 1`** and avoid the phrase "almost surely" entirely, since it carries
measure-theoretic freight this library cannot support.

**D.3 Arrow notation for hypergraph Ramsey.** `n → (k)^r_c` means: for every c-colouring of the
r-subsets of an n-set there is a monochromatic k-subset. Disagreement is in **argument order and
placement**: GRS write `n → (ℓ)^r_k` with k the number of colours as subscript; some authors
write `n → (k₁,…,k_c)^r` listing a target size per colour. For r = 2, c = 2 both reduce to the
library's published arrow notation. **Recommend: superscript = uniformity, subscript = number of
colours, parenthesised = target size(s)** — the GRS convention, which is the most standard.
The library already has arrow notation published for pairs; extending it must preserve that
reading.

**D.4 Ramsey numbers for more than two colours.** `R_c(k)` versus `R(k,k,…,k)` (c arguments)
versus `R_c(k₁,…,k_c)`. Zhao GTAC uses "multicolor triangle Ramsey theorem" (Thm 0.1.4) and
`Proposition 0.1.12 (Multicolor triangle Ramsey numbers: exponential lower bound)`.
**Recommend `R(k₁,…,k_c)` with the number of colours read off from the argument count** — it
degrades gracefully to the published two-colour `R(s,t)` with no notational break, whereas
`R_c(k)` introduces a second parameter position for the same information.

**D.5 Additive energy normalisation.** Zhao GTAC `Definition 7.13.1 (Additive energy)`:
`E(A,B) = #{(a₁,a₂,b₁,b₂) ∈ A²×B² : a₁ + b₁ = a₂ + b₂}` — an **unnormalised count**. Tao–Vu and
much of the analytic literature use the normalised `E(A,B)/(|A|^{3/2}|B|^{3/2})` or write
`E(A) = ‖1_A * 1_A‖₂²`. **The unnormalised count is more standard in the combinatorial
literature and is the right choice here** — it is an integer, avoids a division, and makes
`Proposition 7.13.4 (Small doubling implies large additive energy)` a clean inequality between
integers.

**D.6 Sidon set / B_h set.** A **Sidon set** (= B₂ set) is a set A with all pairwise sums
a + a′ (a ≤ a′) distinct — equivalently all differences a − a′ (a ≠ a′) distinct. A **B_h set**
has all h-fold sums `a₁ + … + a_h` with `a₁ ≤ … ≤ a_h` distinct. Disagreement: some authors
define B_h[g] sets (each sum has at most g representations), and some use "Sidon set" for the
harmonic-analysis notion (a set of characters on which every bounded function extends), which is
a **completely different concept**. **The combinatorial B₂ definition is the standard one in
additive combinatorics; the harmonic-analysis "Sidon set" is a false friend and must not be
conflated.** A&S §4.6 "Distinct Sums" and Zhao PM §4.6 (`Conjecture 4.6.2 (Erdős)`) treat the
related Erdős distinct-sums problem — note that is the *subset-sum* condition (all 2^k subset
sums distinct), which is **stronger** than Sidon and a third distinct notion. Three concepts,
easily confused; state whichever is used explicitly.

**D.7 Discrepancy sign conventions.** A&S §13.1 uses colourings `χ : Ω → {−1,+1}` with
`χ(A) = Σ_{j∈A} χ(j)` and `disc(ℱ) = min_χ max_{A∈ℱ} |χ(A)|`. The alternative "red/blue"
convention measures `| |A ∩ R| − |A ∩ B| |`, which is **numerically identical**; and a third
convention measures the deviation from half, `| |A ∩ R| − |A|/2 |`, which is **half** the first.
**The ±1 convention is standard and is what every theorem constant (6√n, 2t−1) is stated
against** — a scaffolder using the half-deviation convention would silently halve every bound.
Flag this explicitly in any discrepancy item.

**D.8 Entropy base.** A&S §15.7 and Gowers both fix **log base 2** ("all logarithms are to the
base 2"), so H(uniform on {0,1}) = 1. The information-theory literature also uses natural log
(nats). **Base 2 is standard in combinatorial applications** and makes `H(X) ≤ log₂|S|` and the
counting corollaries (`|ℱ| ≤ 2^{ΣH(p_i)}`) come out cleanly. Since the library has `log`, fix
base 2 explicitly in the definition and never leave it implicit.

**D.9 Martingale indexing.** A&S Thm 7.2.1 states Azuma for a martingale **starting at
X₀ = 0** and concludes `Pr[X_m > λ√m] < e^{−λ²/2}`; Cor 7.2.2 restates for `X₀ = c` with the
two-sided `2e^{−λ²/2}`. Matoušek–Vondrák Thm 8.3.2 indexes `Z₀,…,Z_n = f`. Zhao PM's
`Theorem 9.2.7/9.2.8` uses the increment-bound vector form with `Σc_i²`. **The general form with
per-step bounds c_i (giving `exp(−λ²/(2Σc_i²))`) is the most useful and subsumes the others** —
recommend authoring that and deriving the `√m` form.

**D.10 Quasirandomness parameter.** "(n,d,λ)-graph" (A&S §9.2, Zhao GTAC Def 3.2.1) takes λ to
be the **second-largest absolute value** of an eigenvalue; some authors take λ = second-largest
eigenvalue (signed), which differs for bipartite-like graphs. **Absolute value is standard**
and is what makes the expander mixing lemma true as stated.

---

## E. The finiteness audit

The load-bearing table. Three verdicts:

- **[F] IN REACH** — a theorem about a single finite probability space (or no probability at
  all). Statable and provable with the library's existing finite apparatus.
- **[L] IN REACH, with care** — a statement about a *sequence* of finite spaces, expressed with
  real limits. Legitimate, because the library has real limits, sequences, `exp`, `log`. In
  almost every case there is a **finite inequality underneath** that should be authored as the
  theorem, with the limit as a corollary.
- **[X] OUT OF REACH** — genuinely needs measure theory, an infinite probability space, or
  another subject area the library has not reached.

| Result | Verdict | Why |
|---|---|---|
| **Martingales & concentration** | | |
| Martingale (finite sequence X₀,…,X_m) | **[F]** | A&S define it as a finite sequence; the defining identity is a finite conditional expectation |
| Edge-exposure martingale | **[F]** | conditional expectation over a finite partition of the finite space G(n,p) |
| Vertex-exposure martingale | **[F]** | same |
| **Azuma–Hoeffding inequality** | **[F]** | 6 steps: cosh bound, telescoping finite product, Markov. **No measure theory.** |
| Lipschitz ⟹ bounded differences (A&S 7.2.3, 7.4.1) | **[F]** | finite double-sum rearrangement |
| **Bounded differences / McDiarmid** | **[F]** | Doob martingale on a finite product + Hoeffding's lemma, provided each Ω_i is finite |
| Shamir–Spencer concentration of χ | **[F]** | holds for **each fixed n, p** — no limit in the statement at all |
| Bollobás χ(G(n,½)) ∼ n/2log₂n | **[L]** | finite martingale estimates; conclusion is a limit |
| Talagrand's inequality | **[F]** *probabilistically*, but gated | finite product space and a finite sum; **but** the convex distance needs convex hulls in ℝⁿ, attainment of a minimum on a compact convex set, and separating hyperplanes. Not blocked by measure theory — blocked by convex geometry prerequisites. Treat as `deferred` unless that machinery is built. |
| Kim–Vu polynomial concentration | **[F]** but long | `deferred` |
| Martingale **convergence** theorem (Zhao GTAC 4.7) | **[X]** | genuinely measure-theoretic |
| Borel–Cantelli (A&S Lem 8.6.1) | **[X]** | `Σ_{n=1}^∞ Pr[A_n] < ∞` over infinitely many events |
| Isoperimetry on the sphere / Gaussian isoperimetry / Lévy's lemma | **[X]** | continuous measure spaces |
| Central limit theorem, Erdős–Kac (Zhao PM 4.5.2–4.5.3) | **[X]** | limit theorem requiring a continuous limit law |
| **Correlation & Janson** | | |
| Four Functions Theorem (Ahlswede–Daykin) | **[F]** | "for four functions on P(N)"; induction on \|N\|. Finite by hypothesis. |
| FKG inequality | **[F]** | "Let L be a **finite** distributive lattice" — the source says finite |
| Harris inequality / monotone properties | **[F]** | corollary of FKG on the finite cube |
| Ahlswede–Daykin corollaries 6.1.3, 6.1.4 | **[F]** | finite lattices |
| **Janson's inequality** (both forms) | **[F]** | "Let Ω be a **finite** universal set … I a **finite** index set" |
| Extended Janson | **[F]** | same |
| Suen's inequality (A&S 8.7.1), Janson–Suen (M–V 7.4.3) | **[F]** | same setting |
| Brun's sieve (A&S §8.3) | **[L]** | finite inclusion–exclusion identities; Poisson conclusion is a limit |
| **Local Lemma** | | |
| Symmetric / asymmetric LLL | **[F]** | already published |
| Lopsided LLL | **[F]** | same induction, weaker hypothesis |
| Shearer's exact bound | **[F]** | independent-set polynomial of a finite graph; hard but finite |
| LLL ⟹ R(k,3) > ck²/log²k | **[F]** for each fixed n | the `o(1)` refinement is **[L]** |
| **Moser–Tardos runtime `E[T_LOG] ≤ \|I\|/(d−1)`** | **[X]** | unbounded resampling ⟹ infinite product space; A&S themselves write "A priori, T_LOG = ∞ is possible"; Thm 5.7.1 sums over **infinitely many** Moser trees. Author only the finite truncation `Pr[not terminated within N steps] ≤ …`, or defer. |
| LLL applied to infinitely many events | **[X]** | A&S give an explicit counterexample and note the extension needs **Tychonoff = AC** |
| **Entropy** | | |
| Shannon entropy on a finite range | **[F]** | `H(X) = Σ_{x∈S} P(X=x)log₂(1/P(X=x))`, a finite sum |
| Khinchin axioms & uniqueness | **[F]** | Gowers §1, discrete random variables throughout |
| Chain rule, subadditivity, submodularity | **[F]** | Jensen on finite convex combinations |
| **Shearer's entropy lemma** | **[F]** | induction on k over a finite family of subsets of [n] |
| Shearer counting form / projection inequality | **[F]** | uniform variable on a finite family |
| **Discrete Loomis–Whitney** | **[F]** | Shearer with 𝒢 = all (n−1)-subsets |
| Continuous Loomis–Whitney (A&S Cor 15.7.6) | **[X]** | stated for "a measurable body B in ℝⁿ" — use the discrete form instead |
| **Kruskal–Katona** via entropy | **[F]** | finite set systems |
| **Brégman's theorem** | **[F]** | entropy of a random permutation on a finite set |
| Kahn–Lovász | **[F]** | corollary |
| Sidorenko (known cases, entropy proof) | **[F]** | finite graphs |
| Edge-isoperimetry in the cube / in ℤⁿ | **[F]** | Shearer |
| Entropic Ruzsa calculus, entropic BSG | **[F]** | discrete r.v.s on a finite abelian group |
| **Discrepancy** | | |
| Random-colouring bound `√(2m ln 2n)` | **[F]** | Chernoff + union bound |
| **Beck–Fiala `2t − 1`** | **[F]** | **no probability at all** — pure finite linear algebra |
| Six standard deviations, **entropy/partial-colouring proof** | **[F]** | finite pigeonhole over colourings |
| Six standard deviations, **Lovett–Meka proof** (A&S 4th ed. 13.2.2–13.2.5) | **[X]** | Gaussian random walk, chi-squared, Gaussian martingales |
| Linear/hereditary discrepancy | **[F]** | finite rounding |
| Hadamard lower bound | **[F]** | finite linear algebra |
| **Derandomization** | | |
| Method of conditional expectations (the identity + pessimistic estimator) | **[F]** | finite splitting identity on a finite space |
| "…in polynomial time" | **[X]** *as stated* | belongs to a complexity level not yet reached; keep as a Remark |
| d-wise independence in small sample spaces (BCH construction) | **[F]** | the space is finite **by construction**; GF(2) linear algebra |
| **Pseudorandomness** | | |
| Expander mixing lemma | **[F]** | one finite graph; finite-dimensional spectral theory + Cauchy–Schwarz |
| Converse to expander mixing / Cheeger | **[F]** | finite |
| Chung–Graham–Wilson equivalences, **ε-quantified single-graph form** | **[F]** | Zhao GTAC §3.1 states them this way |
| Chung–Graham–Wilson, **classical asymptotic equivalence** | **[L]** | A&S: "the notions below apply to a **sequence** of graphs" |
| Abelian Cayley graph eigenvalues, Paley graphs, Gauss sums | **[F]** | finite character theory |
| Quadratic residue tournaments, property S_k | **[F]** | finite |
| Alon–Boppana | **[F]** but long | `deferred` |
| **Random graphs** | | |
| `Pr[X = 0] ≤ Var[X]/E[X]²` for a fixed n | **[F]** | Chebyshev, already published |
| **χ concentration, `P(\|χ − Eχ\| ≥ t) ≤ 2e^{−t²/2n}`** | **[F]** | holds for **every n, every t**, explicit constant, no limit — the one genuinely finite result in this block |
| Threshold for a fixed subgraph | **[L]** | limit of a sequence of finite probabilities |
| Clique number two-point concentration | **[L]** | existence-of-k(n) limit statement; **k(n) is not in closed form and there is no error bound** — do not author a finite-n version |
| Connectivity / Hamiltonicity thresholds | **[L]** | three-way limit with an `e^{−e^{−c}}` window; preserve the window, do not flatten to "whp" |
| χ(G(n,½)) ∼ n/2log₂n | **[L]** | |
| **Giant component / Erdős–Rényi phase transition** | **[X]** | Galton–Watson branching processes, Poisson limits; and the `o(1)` sits *inside* the statement |
| Zero–one laws | **[X]** | first-order logic + Ehrenfeucht games — `out-of-scope`, a different subject |
| Graph limits / graphons (Zhao GTAC Ch. 4) | **[X]** | measurable W : [0,1]² → [0,1] |
| Szemerédi regularity lemma | **[F]** | finite graph, finite partition — reachable, but a page of its own |
| **Additive combinatorics** | | |
| Finite Fourier analysis on F_pⁿ (inversion, Parseval, convolution) | **[F]** | finite sums over a finite abelian group |
| **Roth in F₃ⁿ (Meshulam)** | **[F]** | finite Fourier + density increment on a descending chain of subspaces. **No measure theory, no infinite objects.** |
| Roth in ℤ/Nℤ | **[F]** | finite Fourier on ℤ/Nℤ + Dirichlet's lemma |
| Roth in ℤ (from ℤ/Nℤ) | **[L]** | the bound is asymptotic in N |
| **Cap set / Ellenberg–Gijswijt slice rank** | **[F]** | finite-dimensional polynomial ring over F₃, rank arguments, monomial counting. **No probability at all.** |
| Croot–Lev–Pach lemma | **[F]** | same |
| **Behrend's construction** | **[F]** | pigeonhole + convexity of the Euclidean sphere |
| **Ruzsa triangle inequality** | **[F]** | injection between finite sets |
| **Plünnecke–Ruzsa (Petridis proof)** | **[F]** | finite combinatorial induction |
| Ruzsa covering lemma | **[F]** | greedy maximal disjoint family |
| Additive energy, small doubling ⟹ large energy | **[F]** | finite counts |
| Balog–Szemerédi–Gowers | **[F]** but long | finite graph theory; `deferred` |
| Freiman in F₂ⁿ / bounded exponent | **[F]** | covering + Plünnecke only |
| **Freiman's theorem in ℤ** | **[F]** in principle, **gated** | needs geometry of numbers (Minkowski's second theorem, successive minima, Blichfeldt) + Bohr sets + modeling lemma. Not measure theory — a different prerequisite subject. `deferred` |
| Bogolyubov's lemma in F_pⁿ | **[F]** | finite Fourier |
| **Cauchy–Davenport** | **[F]** | e-transform induction in ℤ_p, ~6 steps |
| Combinatorial Nullstellensatz | **[F]** | induction on n via polynomial long division over any field |
| Erdős–Heilbronn | **[F]** | needs the Nullstellensatz — the e-transform provably cannot reach it |
| **Erdős–Ginzburg–Ziv** | **[F]** | 8 steps from Cauchy–Davenport (or from Chevalley–Warning) |
| **Kneser's theorem** | **[F]** | any abelian Z, A/B finite; but a "surprisingly delicate" triple induction |
| **Vosper's theorem** | **[F]** | both side conditions `\|A\|,\|B\| ≥ 2` and `\|A+B\| ≤ p−2` are necessary |
| Sum-product (Elekes) | **[F]** | but needs Szemerédi–Trotter ← crossing number inequality; chain is buildable, `deferred` unless room |
| Crossing number inequality | **[F]** | Euler's formula + a probabilistic sampling argument on a finite graph |
| Szemerédi–Trotter | **[F]** | from the crossing number inequality |
| Szemerédi's theorem, Green–Tao, relative Szemerédi | **[X]** | `out-of-scope` |
| Gowers uniformity norms / higher-order Fourier | **[X]** | `out-of-scope` at this level |

**Summary of the two questions the assignment singled out.**

1. **Martingale concentration: IN REACH.** Azuma–Hoeffding, the edge- and vertex-exposure
   martingales, the Lipschitz transfer, bounded differences/McDiarmid and Shamir–Spencer are all
   theorems about finite probability spaces, proved by finite sums, Markov's inequality and a
   telescoping product. A martingale in this subject is a *finite sequence*, and conditional
   expectation on a finite space is a weighted finite average — no filtration, no σ-algebra, no
   measurability hypothesis is needed anywhere. Only Talagrand (gated by convex geometry, not
   measure theory), Kim–Vu (length), and the *convergence* theorem (genuinely measure-theoretic)
   fall outside.
2. **The entropy method: IN REACH, in full, and it is the best value in the harvest.** Entropy on
   a finite range is a finite sum; Shearer's lemma is a finite induction; Loomis–Whitney (discrete),
   Kruskal–Katona, Brégman, Kahn–Lovász, Sidorenko's known cases and both edge-isoperimetric
   inequalities all follow. Three independent treatments exist, one of them a complete Cambridge
   Part III course whose first line restricts to discrete random variables. The only prerequisite
   worth checking is Jensen's inequality for finite convex combinations.

---

## G. Recommended pair structure (synthesis, for the scaffolder to accept or override)

Ranked by (value × reachability) ÷ cost. Each block is sized to respect the 60-item A-page
ceiling.

**Tier 1 — build these first; highest value, lowest risk, no measure theory anywhere.**

1. **Entropy in combinatorics.** Khinchin axioms or the direct definition → chain rule →
   subadditivity → submodularity → **Shearer's lemma** → counting form → discrete
   Loomis–Whitney → Kruskal–Katona → Brégman → Kahn–Lovász. Sources S1 §15.7, S3 Ch. 10, S5
   (whole course). Prerequisite to check: finite Jensen.
2. **Correlation inequalities and Janson.** Four Functions Theorem → FKG on a finite
   distributive lattice → Harris → monotone properties → Janson I → Extended Janson → Suen.
   Sources S1 Chs. 6 and 8, S3 Chs. 7–8. Every object is finite *by hypothesis in the source*.
3. **Martingales and concentration.** Finite martingale → Azuma–Hoeffding → edge/vertex exposure
   → Lipschitz transfer → bounded differences (McDiarmid) → Shamir–Spencer → χ concentration
   `2e^{−t²/2n}`. Sources S1 Ch. 7, S3 Ch. 9, S4 §8.3. **Explicitly exclude** Talagrand, Kim–Vu,
   and everything in S3 §9.4/§9.6.

**Tier 2 — excellent, slightly more prerequisite risk.**

4. **Roth's theorem in the finite field model.** Finite Fourier on F_pⁿ (inversion, Parseval,
   convolution) → 3-AP density identity → counting lemma → large Fourier coefficient → density
   increment → iteration. Then **Behrend's construction** as the matching lower bound. Sources
   S2 §§6.1–6.2, §2.5; S14 §1. Shares its Fourier prelude with item 6.
5. **The polynomial method and the cap set problem.** Slice rank → trivial upper bound → vector
   with large support → slice rank of a diagonal → Croot–Lev–Pach → trinomial count →
   Ellenberg–Gijswijt. Sources S2 §6.5, S14 §2, S17 (Tao's symmetric formulation). ~13 steps,
   **no probability and no analysis at all** — the cheapest famous theorem in the harvest.
6. **Sumset calculus.** Ruzsa triangle inequality → covering lemma → submodularity → Petridis →
   Plünnecke–Ruzsa → `|A∓B| ≤ |A±B|³/(|A||B|)`. Sources S14 §3 (4 pages), S16 §§1–3, S2
   §§7.2–7.4. Six results, all finite counting.
7. **Cauchy–Davenport and friends.** Cauchy–Davenport (e-transform) → Kneser → Vosper →
   Erdős–Ginzburg–Ziv. Source S13 §§5.1, 9.2, 9.5. Needs only ℤ_p and the coset lemma.
8. **Discrepancy.** Random-colouring bound → **Beck–Fiala** → linear/hereditary discrepancy →
   Hadamard lower bound → six standard deviations **via the entropy/partial-colouring route
   only**. Source S1 Ch. 13, S3 §5.1. Beck–Fiala is pure finite linear algebra and is the single
   most elegant cheap item in the report.
9. **Pseudorandomness.** Expander mixing lemma → converse → abelian Cayley eigenvalues → Paley
   graphs → quadratic residue tournaments (which explicitly realises the library's already-
   published tournament property S_k) → ε-quantified quasirandomness equivalences. Sources S1
   Ch. 9, S2 Ch. 3. Prerequisite to check: the spectral theorem for real symmetric matrices.

**Tier 3 — reachable but expensive, or gated by a prerequisite subject.**

10. Derandomization (conditional expectations; d-wise independence via BCH — finite GF(2) linear
    algebra, very attractive but small). 11. Lopsided LLL + Shearer's bound. 12. Second-moment
    thresholds, stated as limits with the finite Chebyshev inequality underneath.
13. Balog–Szemerédi–Gowers. 14. Freiman in bounded exponent / F₂ⁿ (**not** full Freiman).
15. Crossing number → Szemerédi–Trotter → Elekes sum-product.

**Do not scaffold** (record as `deferred` or `out-of-scope` with the reason): Moser–Tardos
runtime, Talagrand (unless convex geometry is built), graph limits/graphons, the Erdős–Rényi
phase transition, zero–one laws, circuit complexity, full Freiman's theorem, Szemerédi's theorem,
Green–Tao, and everything in the isoperimetry/Gaussian block.

---

## F. Blockers

Publisher routes that failed, with the substitute used. No source in the assignment was lost.

| Source | What was tried | Outcome |
|---|---|---|
| Zhao, *GTAC* | `yufeizhao.com/gtac/gtac.pdf`, `yufeizhao.com/gtacbook/gtac.pdf` | HTTP 404 both. **Resolved:** correct path is `yufeizhao.com/gtacbook/gtacbook.pdf` (9.1 MB, 342 pp.). Also mirrored full-text on MIT OCW at `ocw.mit.edu/courses/18-225-graph-theory-and-additive-combinatorics-fall-2023/mit18_225_f23_lec_full.pdf` |
| Zhao, *Probabilistic Methods* | `yufeizhao.com/pm/probmethods_notes.pdf` | HTTP 404 (note the missing/extra `s`). **Resolved:** `yufeizhao.com/pm/probmethod_notes.pdf` |
| Molloy & Reed | `link.springer.com/book/10.1007/978-3-540-27890-8` | HTTP 404. **Resolved** via the Deutsche Nationalbibliothek Contents scan `d-nb.info/962814776/04`. This also **corrected a widely-repeated error**: the book has nine parts, not seven |
| Janson–Łuczak–Ruciński | `onlinelibrary.wiley.com/doi/book/10.1002/9781118032718` | HTTP 403, Cloudflare. **Resolved** via Janson's own page `www2.math.uu.se/~svantejs/papers/RG2000_contents.html` — a strictly better source |
| Spencer, *Ten Lectures* | `epubs.siam.org/doi/book/10.1137/1.9781611970074` | HTTP 403. **Resolved** via epdf.pub OCR of the printed Contents; cross-checked against `archive.org/details/tenlecturesonpro0000spen` |
| Bollobás, *Random Graphs* | `cambridge.org/core`, `assets.cambridge.org` frontmatter PDFs | HTTP 500 / timeouts. **Resolved** via epdf.pub scan, cross-checked against a second render |
| Green, Cambridge Part III 2009 | `.../addcomb2009-6.pdf`, `.../addcomb2009-8.pdf` | HTTP 404 — **these files do not exist**; the set is chapters 1–5 and 7, and the file named `-7` is internally headed "CHAPTER 8". Not a fetch failure |
| Bloom, sum-product history | `thomasbloom.org/notes/sumproduct.html` | TLS certificate error under WebFetch; retrieved with `curl --insecure`. Content is sound but the host's certificate is currently broken |
| dokumen.pub | several titles | site returns "website under maintenance" this session |
| Gowers, *Entropy Methods* index | `danielnaylor.uk/notes/III/Lent/EMC/HTML/` and `.../index.html` | HTTP 404 on the directory and on `index.html`. **Resolved:** the PDF is at `danielnaylor.uk/notes/III/Lent/EMC/EMC.pdf` and per-section HTML at `.../HTML/EMCse{1..7}.html` |

**Standing methodological note for future harvests in this repo.** `WebFetch` cannot read PDFs —
every PDF above had to be downloaded with `curl -L` and extracted locally with `pypdf` in a venv.
Always check `file -b` reports "PDF document" and the byte size is plausible before concluding a
source is unreachable: four of the "404s" above were HTML error pages saved with a `.pdf`
extension, which `file` catches immediately. Publisher domains (Springer, Wiley, SIAM, Cambridge
Core) were the *least* reliable route in this session; author-hosted pages and national-library
Contents scans were the most reliable.



