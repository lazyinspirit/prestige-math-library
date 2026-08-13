# subjects-01 — combinatorics lane — ENUMERATIVE COMBINATORICS source harvest

Run: `subjects-01` · lane: `combinatorics` · role: source-research subagent (read/report only)
Date: 2026-08-13

Scope of this document: sources for **enumerative combinatorics** (counting, generating
functions, the symbolic method, partitions, sieve methods, lattice paths, group-action
enumeration). All sources below were **downloaded and read as full extracted text** unless
the ledger says otherwise. Verbatim headings are reproduced from the sources' own text.

---

# A. Source ledger

| # | Source | Working URL | Form obtained | Range actually read |
|---|---|---|---|---|
| S1 | Stanley, *Enumerative Combinatorics, Volume 1*, 2nd edition (version of 15 July 2011) | `https://math.mit.edu/~rstan/ec/ec1.pdf` | **Full PDF, 725 pp., full text extracted** | Front matter + printed TOC in full; Chapters 1, 2, 3, 4 main text in full (pp. 9–654); Notes and Exercises/Solutions consulted selectively for named identities (Ex. 1.86–1.91) |
| S2 | Flajolet & Sedgewick, *Analytic Combinatorics*, CUP 2009 | `https://ac.cs.princeton.edu/home/AC.pdf` (the `algo.inria.fr/flajolet/Publications/AnaCombi/anacombi.pdf` path 404s; `https://algo.inria.fr/flajolet/Publications/book.pdf` also serves the same PDF, 200 OK) | **Full PDF, 824 pp., full text extracted** | Printed TOC in full (all Parts A–D); **Part A read carefully**: Ch. I (pp. 15–94), Ch. II (pp. 95–150), Ch. III (pp. 151–220); **Appendix A read in full** (pp. 721–738); Part B/C TOC + chapter-opening statements only (deliberately — that is the analytic side) |
| S3 | Sagan, *Combinatorics: The Art of Counting*, AMS GSM 210 (author-hosted final PDF) | `https://users.math.msu.edu/users/bsagan/Books/Aoc/final.pdf` | **Full PDF, 325 pp., full text + embedded outline extracted** | TOC in full; Ch. 1–6 read; Ch. 7–8 TOC + named results |
| S4 | Wilf, *generatingfunctionology*, 2nd ed. | `https://www2.math.upenn.edu/~wilf/gfology2.pdf` | **Full PDF, 231 pp., full text extracted** | Printed TOC in full; §2.1–2.6, §3.1–3.18, §4.2, §4.7, §5.1 read |
| S5 | Cameron, *Enumerative Combinatorics — The LTCC lectures*, Autumn 2013 | `https://cameroncounts.wordpress.com/wp-content/uploads/2013/12/ec.pdf` | **Full PDF, 65 pp., full text extracted** | Read in full (lectures 1–10) |
| S6 | Postnikov (lectures) / Dillon (notes), *A Survey of Enumerative Combinatorics* (MIT 18.315-style) | `https://travisadillon.com/documents/Enumerative-combinatorics.pdf` | **Full PDF, 96 pp., full text + outline extracted** | Read in full |
| S7 | de Mier, *Lecture notes for "Enumerative Combinatorics"*, Oxford, Michaelmas 2004 | `https://web.mat.upc.edu/anna.de.mier/ec/lectec.pdf` | **Full PDF, 47 pp., full text extracted** | Read in full |
| S8 | Grinberg, *Enumerative Combinatorics: class notes* (Drexel 19fco) | `https://darijgrinberg.gitlab.io/t/19fco/n/n.pdf` (mirror `https://www.cip.ifi.lmu.de/~grinberg/t/19fco/n/n.pdf`) | **Full PDF, 564 pp., outline extracted** | TOC in full; body sampled (see §F for the caveat) |
| S9 | Bóna, *A Walk Through Combinatorics* | — | **TOC only**, from publisher/aggregator pages | chapter list only |
| S10 | Bóna, *Introduction to Enumerative and Analytic Combinatorics*, 2nd ed. | — | **TOC only**, from publisher/aggregator pages | part/chapter list only |

**Pair-backing status (per the source-depth rule).** S1 (Stanley) and S2 (Flajolet–Sedgewick)
are both full monographs with harvestable tables of contents, and S3 (Sagan), S4 (Wilf),
S6, S5, S7 give further independent treatments. **No page in this subject needs to lean on
Wikipedia**: every topic listed in §C has at least two of {S1, S2, S3, S4, S5, S6} carrying it.

---

# B. The canonical-coverage harvest

## B1. Stanley, *Enumerative Combinatorics* vol. 1, 2nd ed. (S1)

### B1.1 Printed table of contents, verbatim (pp. 3–5 of the PDF)

```
Preface 6
Acknowledgments 7

Chapter 1  What is Enumerative Combinatorics?
1.1  How to count 9
1.2  Sets and multisets 23
1.3  Cycles and inversions 29
1.4  Descents 38
1.5  Geometric representations of permutations 48
1.6  Alternating permutations, Euler numbers, and the cd-index of Sn 54
   1.6.1  Basic properties 54
   1.6.2  Flip equivalence of increasing binary trees 56
   1.6.3  Min-max trees and the cd-index 57
1.7  Permutations of multisets 62
1.8  Partition identities 68
1.9  The Twelvefold Way 79
1.10 Two q-analogues of permutations 89
   1.10.1  A q-analogue of permutations as bijections 89
   1.10.2  A q-analogue of permutations as words 100
Notes 105 · Exercises 114 · Solutions to exercises 160

Chapter 2  Sieve Methods
2.1  Inclusion-Exclusion 223
2.2  Examples and Special Cases 227
2.3  Permutations with Restricted Positions 231
2.4  Ferrers Boards 235
2.5  V-partitions and Unimodal Sequences 238
2.6  Involutions 242
2.7  Determinants 246
Notes 249 · Exercises 253 · Solutions to exercises 266

Chapter 3  Partially Ordered Sets
3.1  Basic Concepts 277
3.2  New Posets from Old 283
3.3  Lattices 285
3.4  Distributive Lattices 290
3.5  Chains in Distributive Lattices 295
3.6  Incidence Algebras 299
3.7  The Möbius Inversion Formula 303
3.8  Techniques for Computing Möbius Functions 305
3.9  Lattices and Their Möbius Functions 314
3.10 The Möbius Function of a Semimodular Lattice 317
3.11 Hyperplane Arrangements 321
   3.11.1 Basic definitions 321
   3.11.2 The intersection poset and characteristic polynomial 322
   3.11.3 Regions 325
   3.11.4 The finite field method 328
3.12 Zeta Polynomials 333
3.13 Rank Selection 335
3.14 R-labelings 338
3.15 (P,ω)-partitions 341
   3.15.1 The main generating function 341
   3.15.2 Specializations 344
   3.15.3 Reciprocity 346
   3.15.4 Natural labelings 348
3.16 Eulerian Posets 353
3.17 The cd-index of an Eulerian Poset 359
3.18 Binomial Posets and Generating Functions 364
3.19 An Application to Permutation Enumeration 371
3.20 Promotion and Evacuation 374
3.21 Differential Posets 379
Notes 391 · Exercises 401 · Solutions to exercises 468

Chapter 4  Rational Generating Functions
4.1  Rational Power Series in One Variable 535
4.2  Further Ramifications 539
4.3  Polynomials 543
4.4  Quasipolynomials 546
4.5  Linear Homogeneous Diophantine Equations 548
4.6  Applications 561
   4.6.1  Magic squares 561
   4.6.2  The Ehrhart quasipolynomial of a rational polytope 566
4.7  The Transfer-matrix Method 573
   4.7.1  Basic principles 573
   4.7.2  Undirected graphs 575
   4.7.3  Simple applications 576
   4.7.4  Factorization in free monoids 580
   4.7.5  Some sums over compositions 591
Notes 597 · Exercises 605 · Solutions to exercises 629

Appendix  Graph Theory Terminology 655
First Edition Numbering 658 · List of Notation 670 · Index
```

### B1.2 Named-result headings, Chapter 1, verbatim as Stanley states them

Stanley's format is `<number> <Type>.`; where he supplies a parenthesised name I reproduce it.

```
1.1.1 Example.   1.1.2 Example.   1.1.3 Example.   1.1.4 Example.   1.1.5 Example.
1.1.6 Example.   1.1.7 Example.
1.1.8 Proposition.  (convergence criterion for infinite series in C[[x]])
1.1.9 Proposition.  (convergence criterion for infinite products in C[[x]])
1.1.10 Example.  1.1.11 Example.  1.1.12 Example.  1.1.13 Example.  1.1.14 Example.
1.1.15 Example.  1.1.16 Example.  1.1.17 Example.
1.2.1 Proposition.
1.3.1 Proposition.   1.3.2 Proposition.   1.3.3 Theorem.
1.3.4 Example.   1.3.5 Example.
1.3.6 Lemma.  (recurrence for c(n,k))
1.3.7 Proposition.
1.3.8 Example.   1.3.9 Example.
1.3.10 Proposition.   1.3.11 Corollary.   1.3.12 Proposition.   1.3.13 Corollary.
1.3.14 Proposition.  (inv(w) = inv(w^{-1}))
1.4.1 Proposition.   1.4.2 Example.   1.4.3 Proposition.   1.4.4 Proposition.
1.4.5 Proposition.   1.4.6 Proposition.   1.4.7 Example.   1.4.8 Theorem.
1.4.9 Corollary.  ((inv,maj),(inv,imaj),(maj,imaj) equidistributed)
1.4.10 Definition.   1.4.11 Lemma.   1.4.12 Lemma.
1.5.1 Proposition.   1.5.2 Example.   1.5.3 Proposition.   1.5.4 Example.
1.5.5 Proposition.
1.6.1 Proposition.   1.6.2 Proposition.   1.6.3 Theorem.   1.6.4 Proposition.
1.6.5 Corollary.
1.7.1 Proposition.   1.7.2 Proposition.   1.7.3 Proposition.
1.8.1 Proposition.   1.8.2 Corollary.   1.8.3 Proposition.   1.8.4 Proposition.
1.8.5 Proposition.   1.8.6 Proposition.   1.8.7 Proposition.  (pentagonal number formula)
1.9.1 Proposition.  (S and s are mutually inverse; Stirling inversion)
1.9.2 Proposition.   1.9.3 Corollary.
1.10.1 Proposition.  1.10.2 Proposition.  1.10.3 Example.  1.10.4 Theorem.
1.10.5 Lemma.  1.10.6 Corollary.  1.10.7 Theorem.  1.10.8 Example.  1.10.9 Lemma.
1.10.10 Corollary.  1.10.11 Corollary.  1.10.12 Proposition.  1.10.13 Example.
1.10.14 Lemma.  1.10.15 Proposition.
```

Named exercises in Ch. 1 that carry standard results (statements harvested):
`Exercise 1.86` (Schur's partition theorem), `Exercise 1.87`,
`Exercise 1.88` (**the Rogers–Ramanujan identities**), `Exercise 1.89` (lecture hall partitions),
`Exercise 1.90`, `Exercise 1.91` (**the Jacobi triple product identity**, with the pentagonal
number formula deduced in 1.91(b)).

### B1.3 Named-result headings, Chapter 2 (Sieve Methods), verbatim

```
2.1.1 Theorem.   (inclusion–exclusion as invertibility of φ on K^{2^S})
2.2.1 Example.   (The "derangement problem" or "problème des rencontres")
2.2.2 Proposition.   2.2.3 Example.   2.2.4 Example.   2.2.5 Example.
2.2.6 Proposition.
2.3.1 Theorem.   (N_n(x) = Σ r_k (n−k)! (x−1)^k — rook polynomial / restricted positions)
2.3.2 Example. (Derangements revisted)
2.3.3 Example (Problème des ménages).
2.3.4 Lemma.   2.3.5 Corollary.
2.4.1 Theorem.   (factorization theorem for the rook polynomial of a Ferrers board)
2.4.2 Corollary.   2.4.3 Corollary.   2.4.4 Theorem.   2.4.5 Corollary.
2.5.1 Proposition.   2.5.2 Proposition.   2.5.3 Corollary.
2.6.1 Example.   (the involution principle / sieve-equivalence)
2.7.1 Theorem.   (the determinant/nonintersecting-lattice-path theorem, i.e. LGV)
2.7.2 Example.
```

### B1.4 Named-result headings, Chapter 3 (Partially Ordered Sets), verbatim

```
3.1.1 Example.
3.3.1 Proposition.  3.3.2 Proposition.  3.3.3 Proposition.
3.4.1 Theorem (FTFDL).   3.4.2 Proposition.  3.4.3 Proposition.  3.4.4 Example.
3.4.5 Proposition.
3.5.1 Proposition.  3.5.2 Proposition.  3.5.3 Example.  3.5.4 Example.  3.5.5 Example.
3.6.1 Definition.  (the incidence algebra I(P,K))    3.6.2 Proposition.
3.7.1 Proposition (Möbius inversion formula).
3.7.2 Proposition (Möbius inversion formula, dual form).
3.8.1 Example.
3.8.2 Proposition (the product theorem).
3.8.3 Example.  3.8.4 Example.
3.8.5 Proposition (Philip Hall's theorem).
3.8.6 Proposition (Proposition 3.8.5, restated).
3.8.7 Example (for readers familiar with some topology).
3.8.8 Proposition.  3.8.9 Proposition.  3.8.10 Example.  3.8.11 Proposition.
3.9.1 Definition.  (the Möbius algebra A(L,K))
3.9.2 Theorem.
3.9.3 Corollary (Weisner's theorem).
3.9.4 Corollary (Crosscut Theorem).
3.9.5 Corollary.  3.9.6 Example.
3.10.1 Proposition.  3.10.2 Example.  3.10.3 Example.  3.10.4 Example.
3.11.1 Example.  3.11.2 Proposition.  3.11.3 Proposition.  3.11.4 Example.
3.11.5 Proposition (Deletion-Restriction).
3.11.6 Lemma.  3.11.7 Theorem.
3.11.8 Proposition (general position).
3.11.9 Proposition.  3.11.10 Theorem.  3.11.11 Example.  3.11.12 Example.
3.11.13 Theorem.  3.11.14 Corollary.
3.12.1 Proposition.  3.12.2 Example.
3.13.1 Theorem.  3.13.2 Corollary.  3.13.3 Theorem.
3.14.1 Definition.  (R-labeling)     3.14.2 Theorem.  3.14.3 Example.  3.14.4 Example.
3.14.5 Example.
3.15.1 Definition.  ((P,ω)-partition)   3.15.2 Example.  3.15.3 Lemma.  3.15.4 Lemma.
3.15.5 Theorem.  3.15.6 Example.  3.15.7 Theorem.  3.15.8 Theorem.  3.15.9 Lemma.
3.15.10 Theorem (the reciprocity theorem for (P,ω)-partitions).
3.15.11 Lemma.
3.15.12 Corollary (the reciprocity theorem for order polynomials).
3.15.13 Corollary.  3.15.14 Example.  3.15.15 Lemma.  3.15.16 Theorem.  3.15.17 Lemma.
3.15.18 Corollary.  3.15.19 Example.
3.16.1 Proposition.  3.16.2 Proposition.  3.16.3 Lemma.  3.16.4 Lemma.
3.16.5 Proposition.  3.16.6 Corollary.  3.16.7 Example.  3.16.8 Example.  3.16.9 Theorem.
3.17.1 Theorem.  3.17.2 Theorem.
3.18.1 Example.  (Ordinary generating functions)
3.18.2 Definition.  (binomial poset)
3.18.3 Example.  3.18.4 Theorem.  3.18.5 Proposition.  3.18.6 Example.  3.18.7 Example.
3.18.8 Example.  3.18.9 Example.  3.18.10 Example.  3.18.11 Example.
3.19.1 Lemma.  3.19.2 Lemma.  3.19.3 Corollary.  3.19.4 Proposition.
3.20.1 Theorem.  3.20.2 Lemma.
3.21.1 Definition.  (r-differential poset)
3.21.2 Example.  3.21.3 Proposition.  3.21.4 Proposition.  3.21.5 Example.
3.21.6 Theorem.  3.21.7 Theorem.  3.21.8 Theorem.  3.21.9 Theorem.  3.21.10 Theorem.
3.21.11 Theorem.  3.21.12 Theorem.  3.21.13 Corollary.
```

### B1.5 Named-result headings, Chapter 4 (Rational Generating Functions), verbatim

```
4.1.1 Theorem.   (the rational-GF ⟺ linear-recurrence ⟺ Σ P_i(n) γ_i^n trichotomy)
4.1.2 Example.  (Fibonacci)   4.1.3 Example.
4.2.1 Corollary.  4.2.2 Proposition.  4.2.3 Proposition.  4.2.4 Corollary.
4.2.5 Proposition.  (Hadamard product of rational power series is rational)
4.3.1 Corollary.
4.4.1 Proposition.  (quasipolynomials)   4.4.2 Example.
4.5.1 Lemma.  4.5.2 Lemma.  4.5.3 Example.  4.5.4 Lemma.  4.5.5 Example.  4.5.6 Lemma.
4.5.7 Lemma.  4.5.8 Corollary.  4.5.9 Example.  4.5.10 Proposition.  4.5.11 Theorem.
4.5.12 Lemma.  4.5.13 Lemma.
4.5.14 Theorem (the reciprocity theorem for linear homogeneous diophantine equations).
4.5.15 Example.  4.5.16 Corollary.  4.5.17 Lemma.
4.6.1 Lemma.  4.6.2 Proposition.  4.6.3 Lemma.  4.6.4 Proposition.  4.6.5 Example.
4.6.6 Lemma.  4.6.7 Lemma.  4.6.8 Theorem.
4.6.9 Theorem (the reciprocity theorem for Ehrhart quasipolynomials).
4.6.10 Example.  4.6.11 Corollary.  4.6.12 Example.  4.6.13 Proposition.
4.6.14 Corollary.  4.6.15 Example.
4.6.16 Example (Propositions 4.6.2 and 4.6.4 revisited).
4.6.17 Example.
4.7.1 Theorem.   ((A^n)_{ij} = A_{ij}(n): weighted walks of length n)
4.7.2 Theorem.   (F_{ij}(D,λ) = (−1)^{i+j} det(I−λA : j,i) / det(I−λA))
4.7.3 Corollary.  (Σ_{n≥1} C_D(n) λ^n = −λ Q'(λ)/Q(λ))
4.7.4 Corollary.  4.7.5 Example.  4.7.6 Example.  4.7.7 Example.  4.7.8 Proposition.
4.7.9 Example.  4.7.10 Proposition.  4.7.11 Proposition.  4.7.12 Proposition.
4.7.13 Proposition.  4.7.14 Lemma.  4.7.15 Example.  4.7.16 Example.  4.7.17 Example.
4.7.18 Example.  4.7.19 Example (k-discordant permutations).  4.7.20 Proposition.
```

---

## B2. Flajolet & Sedgewick, *Analytic Combinatorics* (S2)

### B2.1 Printed table of contents, verbatim (pp. v–viii)

```
PREFACE ix
AN INVITATION TO ANALYTIC COMBINATORICS 1

Part A. SYMBOLIC METHODS 13

I. COMBINATORIAL STRUCTURES AND ORDINARY GENERATING FUNCTIONS 15
  I. 1. Symbolic enumeration methods 16
  I. 2. Admissible constructions and specifications 24
  I. 3. Integer compositions and partitions 39
  I. 4. Words and regular languages 49
  I. 5. Tree structures 64
  I. 6. Additional constructions 83
  I. 7. Perspective 92

II. LABELLED STRUCTURES AND EXPONENTIAL GENERATING FUNCTIONS 95
  II. 1. Labelled classes 96
  II. 2. Admissible labelled constructions 100
  II. 3. Surjections, set partitions, and words 106
  II. 4. Alignments, permutations, and related structures 119
  II. 5. Labelled trees, mappings, and graphs 125
  II. 6. Additional constructions 136
  II. 7. Perspective 147

III. COMBINATORIAL PARAMETERS AND MULTIVARIATE GENERATING FUNCTIONS 151
  III. 1. An introduction to bivariate generating functions (BGFs) 152
  III. 2. Bivariate generating functions and probability distributions 156
  III. 3. Inherited parameters and ordinary MGFs 163
  III. 4. Inherited parameters and exponential MGFs 174
  III. 5. Recursive parameters 181
  III. 6. Complete generating functions and discrete models 186
  III. 7. Additional constructions 198
  III. 8. Extremal parameters 214
  III. 9. Perspective 218

Part B. COMPLEX ASYMPTOTICS 221
IV. COMPLEX ANALYSIS, RATIONAL AND MEROMORPHIC ASYMPTOTICS 223
  IV. 1. Generating functions as analytic objects 225
  IV. 2. Analytic functions and meromorphic functions 229
  IV. 3. Singularities and exponential growth of coefficients 238
  IV. 4. Closure properties and computable bounds 249
  IV. 5. Rational and meromorphic functions 255
  IV. 6. Localization of singularities 263
  IV. 7. Singularities and functional equations 275
  IV. 8. Perspective 286
V. APPLICATIONS OF RATIONAL AND MEROMORPHIC ASYMPTOTICS 289
  V. 1. A roadmap to rational and meromorphic asymptotics 290
  V. 2. The supercritical sequence schema 293
  V. 3. Regular specifications and languages 300
  V. 4. Nested sequences, lattice paths, and continued fractions 318
  V. 5. Paths in graphs and automata 336
  V. 6. Transfer matrix models 356
  V. 7. Perspective 373
VI. SINGULARITY ANALYSIS OF GENERATING FUNCTIONS 375
  VI. 1. A glimpse of basic singularity analysis theory 376
  VI. 2. Coefficient asymptotics for the standard scale 380
  VI. 3. Transfers 389
  VI. 4. The process of singularity analysis 392
  VI. 5. Multiple singularities 398
  VI. 6. Intermezzo: functions amenable to singularity analysis 401
  VI. 7. Inverse functions 402
  VI. 8. Polylogarithms 408
  VI. 9. Functional composition 411
  VI. 10. Closure properties 418
  VI. 11. Tauberian theory and Darboux's method 433
  VI. 12. Perspective 437
VII. APPLICATIONS OF SINGULARITY ANALYSIS 439
  VII. 1. A roadmap to singularity analysis asymptotics 441
  VII. 2. Sets and the exp–log schema 445
  VII. 3. Simple varieties of trees and inverse functions 452
  VII. 4. Tree-like structures and implicit functions 467
  VII. 5. Unlabelled non-plane trees and Pólya operators 475
  VII. 6. Irreducible context-free structures 482
  VII. 7. The general analysis of algebraic functions 493
  VII. 8. Combinatorial applications of algebraic functions 506
  VII. 9. Ordinary differential equations and systems 518
  VII. 10. Singularity analysis and probability distributions 532
  VII. 11. Perspective 538
VIII. SADDLE-POINT ASYMPTOTICS 541
  VIII. 1. Landscapes of analytic functions and saddle-points 543
  VIII. 2. Saddle-point bounds 546
  VIII. 3. Overview of the saddle-point method 551
  VIII. 4. Three combinatorial examples 558
  VIII. 5. Admissibility 564
  VIII. 6. Integer partitions 574
  VIII. 7. Saddle-points and linear differential equations. 581
  VIII. 8. Large powers 585
  VIII. 9. Saddle-points and probability distributions 594
  VIII. 10. Multiple saddle-points 600
  VIII. 11. Perspective 606

Part C. RANDOM STRUCTURES 609
IX. MULTIVARIATE ASYMPTOTICS AND LIMIT LAWS 611  [IX.1–IX.13]

Part D. APPENDICES 719
Appendix A. AUXILIARY ELEMENTARY NOTIONS 721
  A.1. Arithmetical functions 721
  A.2. Asymptotic notations 722
  A.3. Combinatorial probability 727
  A.4. Cycle construction 729
  A.5. Formal power series 730
  A.6. Lagrange inversion 732
  A.7. Regular languages 733
  A.8. Stirling numbers. 735
  A.9. Tree concepts 737
Appendix B. BASIC COMPLEX ANALYSIS 739
  B.1. Algebraic elimination 739 · B.2. Equivalent definitions of analyticity 741 ·
  B.3. Gamma function 743 · B.4. Holonomic functions 748 ·
  B.5. Implicit Function Theorem 753 · B.6. Laplace's method 755 ·
  B.7. Mellin transforms 762 · B.8. Several complex variables 767
Appendix C. CONCEPTS OF PROBABILITY THEORY 769  [C.1–C.5]
BIBLIOGRAPHY 779 · INDEX 801
```

### B2.2 Part A sub-subsection headings, verbatim (running heads inside I, II, III)

```
I. 2.1. Basic constructions.
I. 2.2. The admissibility theorem for ordinary generating functions.
I. 2.3. Constructibility and combinatorial specifications.
I. 2.4. Exploiting generating functions and counting sequences.
I. 3.1. Compositions and partitions.
I. 3.2. Related constructions.
I. 4.1. Regular specifications.
I. 4.2. Finite automata.
I. 4.3. Related constructions.
I. 5.1. Plane trees.
I. 5.2. Non-plane trees.
I. 5.3. Related constructions.
I. 5.4. Context-free specifications and languages.
I. 6.1. Restricted constructions.
I. 6.2. Pointing and substitution.
I. 6.3. Implicit structures.

II. 2.1. Labelled constructions.
II. 2.2. Labelled versus unlabelled enumeration.
II. 3.1. Surjections and set partitions.
II. 3.2. Applications to words and random allocations.
II. 4.1. Alignments and permutations.
II. 4.2. Second-level structures.
II. 5.1. Trees.
II. 5.2. Mappings and functional graphs.
II. 5.3. Labelled graphs.
II. 6.1. Pointing and substitution.
II. 6.2. Implicit structures.
II. 6.3. Order constraints.

III. 2.1. Distributions and moments.
III. 2.2. Moment inequalities and concentration of distributions.
III. 3.1. Multivariate generating functions (MGFs).
III. 3.2. Inheritance and MGFs.
III. 3.3. Number of components in abstract unlabelled schemas.
III. 6.1. Word models.
III. 6.2. Tree models.
III. 7.1. Pointing and substitution.
III. 7.2. Order constraints.
III. 7.3. Implicit structures.
III. 7.4. Inclusion–exclusion.
III. 8.1. Largest components.
III. 8.2. Height.
III. 8.3. Averages and moments.
```

### B2.3 Named results in Part A and Appendix A, verbatim

```
Theorem I.1 (Basic admissibility, unlabelled universe).   [p. 27]
Theorem I.2 (Symbolic method, unlabelled universe).       [p. 34]
Theorem I.3 (Component-restricted constructions).         [p. 84]
Theorem I.4 (Pointing and substitution).                  [p. 87]
Theorem I.5 (Implicit specifications).                    [p. 89]
Proposition I.1.  (OGFs of compositions with summands in T ⊆ I)
Proposition I.2.  (Any S–regular language has an OGF that is a rational function.)
Proposition I.3.  (deterministic finite automaton ⇒ rational OGF)
Proposition I.4.  (OGF of words not containing the pattern p as a factor)
Proposition I.5.  (OGF T_Ω(z) of the class T_Ω of Ω–trees)
Proposition I.6.  (OGF U(z) for Ω ⊂ N finite containing 0)
Proposition I.7.  (A combinatorial class C that is context-free admits an algebraic OGF.)
Definition I.6, Definition I.11  (convolution / deterministic automaton)
Note I.47. Conjugacy principle and cycle lemma.           [p. 75]

Theorem II.1 (Basic admissibility, labelled universe).    [p. 103]
Theorem II.2 (Symbolic method, labelled universe).        [p. 104]
Theorem II.3.  (pointing and substitution, labelled)      [p. 136]
Theorem II.4 (Implicit specifications).                   [p. 137]
Theorem II.5.  (the boxed product is admissible)          [p. 139]
Proposition II.1.  (Â_n ≤ A_n ≤ n! Â_n)
Proposition II.2.  (surjections R(A,B): EGF β(α(z)))
Proposition II.3.  (words over an alphabet of cardinality r)
Proposition II.4.  (permutations with cycle lengths in A)
Proposition II.5.  (rooted non-plane trees with outdegrees restricted)
Proposition II.6.  (EGF W_k(z) of connected graphs with excess k)

Theorem III.1 (Inherited parameters and ordinary MGFs).   [p. 165]
Theorem III.2 (Inherited parameters and exponential MGFs).[p. 177]
Proposition III.1 (PGFs from BGFs).
Proposition III.2 (Moments from BGFs).
Proposition III.3 (Concentration of distribution).
Proposition III.4 (Summands in integer compositions).
Proposition III.5 (Components in unlabelled schemas).     [p. 171]
Proposition III.6.  (labelled structures, parameter χ)
Proposition III.7 (Degree profile of trees).              [p. 194]
Proposition III.8 (Level profile of trees).

Theorem A.1 (Markov–Chebyshev inequalities).             [p. 728]
Theorem A.2 (Lagrange Inversion Theorem).                 [p. 732]
Definition A.1.  (the category RegExp of regular expressions)
Note A.11. Lagrange–Bürmann inversion for fractional powers.
Note A.12. Abel's identity.
Note A.13. A variant of Lagrange inversion.
Figure A.1.  (Equivalence between various notions of regularity: Kleene / Rabin–Scott)
```

Part B chapter-opening summary theorem list (the analytic side, harvested only to fix the seam):
```
THEOREM IV.1 [Basic Equivalence Theorem] (p. 232)
THEOREM IV.2 [Null Integral Property] (p. 234)
THEOREM IV.3 [Cauchy's residue theorem] (p. 234)
THEOREM IV.4 [Cauchy's Coefficient Formula] (p. 237)
THEOREM IV.5 [Boundary singularities] (p. 240)
THEOREM IV.6 [Pringsheim's Theorem] (p. 240)
THEOREM IV.7 [Exponential Growth Formula] (p. 244)
THEOREM IV.8 [Computability of growth] (p. 251)
THEOREM IV.9 [Expansion of rational functions] (p. 256)
THEOREM IV.10 [Expansion of meromorphic functions] (p. 258)
```

---

## B3. Sagan, *Combinatorics: The Art of Counting* (S3)

### B3.1 Table of contents, verbatim (from the PDF outline)

```
Preface · List of Notation
Chapter 1. Basic Counting
  1.1. The Sum and Product Rules for sets      1.2. Permutations and words
  1.3. Combinations and subsets                1.4. Set partitions
  1.5. Permutations by cycle structure         1.6. Integer partitions
  1.7. Compositions                            1.8. The twelvefold way
  1.9. Graphs and digraphs                     1.10. Trees
  1.11. Lattice paths                          1.12. Pattern avoidance
Chapter 2. Counting with Signs
  2.1. The Principle of Inclusion and Exclusion
  2.2. Sign-reversing involutions
  2.3. The Garsia–Milne Involution Principle
  2.4. The Reflection Principle
  2.5. The Lindström–Gessel–Viennot Lemma
  2.6. The Matrix-Tree Theorem
Chapter 3. Counting with Ordinary Generating Functions
  3.1. Generating polynomials                  3.2. Statistics and q-analogues
  3.3. The algebra of formal power series      3.4. The Sum and Product Rules for ogfs
  3.5. Revisiting integer partitions           3.6. Recurrence relations and generating functions
  3.7. Rational generating functions and linear recursions
  3.8. Chromatic polynomials                   3.9. Combinatorial reciprocity
Chapter 4. Counting with Exponential Generating Functions
  4.1. First examples                          4.2. Generating functions for Eulerian polynomials
  4.3. Labeled structures                      4.4. The Sum and Product Rules for egfs
  4.5. The Exponential Formula
Chapter 5. Counting with Partially Ordered Sets
  5.1. Basic properties of partially ordered sets
  5.2. Chains, antichains, and operations on posets
  5.3. Lattices                                5.4. The Möbius function of a poset
  5.5. The Möbius Inversion Theorem            5.6. Characteristic polynomials
  5.7. Quotients of posets                     5.8. Computing the Möbius function
  5.9. Binomial posets
Chapter 6. Counting with Group Actions
  6.1. Groups acting on sets                   6.2. Burnside's Lemma
  6.3. The cycle index                         6.4. Redfield–Pólya theory
  6.5. An application to proving congruences   6.6. The cyclic sieving phenomenon
Chapter 7. Counting with Symmetric Functions
  7.1. The algebra of symmetric functions, Sym 7.2. The Schur basis of Sym
  7.3. Hooklengths                             7.4. P-partitions
  7.5. The Robinson–Schensted–Knuth correspondence
  7.6. Longest increasing and decreasing subsequences
  7.7. Differential posets                     7.8. The chromatic symmetric function
  7.9. Cyclic sieving redux
Chapter 8. Counting with Quasisymmetric Functions
  8.1. The algebra of quasisymmetric functions, QSym
  8.2. Reverse P-partitions                    8.3. Chain enumeration in posets
  8.4. Pattern avoidance and quasisymmetric functions
  8.5. The chromatic quasisymmetric function
Appendix. Introduction to Representation Theory  (A.1. Basic notions)
Bibliography · Index
```

### B3.2 Named results, Chapters 1–6, verbatim

```
Lemma 1.1.1.  Theorem 1.1.2.  Corollary 1.1.3.
Theorem 1.2.1.  Theorem 1.2.2.
Theorem 1.3.1.  Theorem 1.3.2.  Theorem 1.3.3.  Theorem 1.3.4.
Theorem 1.4.1.  (Bell number recursion)   Theorem 1.4.2.  (S(n,k) recursion)
Theorem 1.5.1.  (cycle decomposition)     Theorem 1.5.2.  (signless Stirling 1st kind recursion)
Corollary 1.5.3.
Proposition 1.6.1.  (conjugate partition)  Theorem 1.6.2.
Theorem 1.7.1.  Theorem 1.7.2.
Table 1.1. The twelvefold way
Lemma 1.9.1.  Theorem 1.9.2.  Theorem 1.9.3.  (Handshaking)  Theorem 1.9.4.  Lemma 1.9.5.
Lemma 1.10.1.  Theorem 1.10.2.  Theorem 1.10.3.
Theorem 1.11.1.  Theorem 1.11.2.  Theorem 1.11.3.  (Catalan closed form)
Lemma 1.12.1.  Theorem 1.12.2.  Lemma 1.12.3.  Lemma 1.12.4.  Theorem 1.12.5.

Theorem 2.1.1 (Principle of Inclusion and Exclusion, PIE).
Theorem 2.1.2.  (derangement number)   Corollary 2.1.3.
Lemma 2.2.1.  Theorem 2.2.2.
Lemma 2.3.1.  Theorem 2.3.2 (Garsia–Milne Involution Principle).
Theorem 2.3.3 (Euler).  (distinct parts = odd parts)
Theorem 2.4.1 (Reflection Principle).   Theorem 2.4.2.  (binomial row unimodal)
Proposition 2.5.1.  Lemma 2.5.2.  Corollary 2.5.3.
Lemma 2.5.4 (Lindström–Gessle–Viennot).   [sic — Sagan's typo for "Gessel"]
Theorem 2.5.5.  (binomial row is PF)
Proposition 2.6.1.  Proposition 2.6.2.
Theorem 2.6.3 (Cauchy–Binet Theorem).   Theorem 2.6.4 (Matrix-Tree Theorem).

Theorem 3.1.1 (Binomial Theorem).  Theorem 3.1.2.
Theorem 3.2.1.  Theorem 3.2.2.  Theorem 3.2.3.  Theorem 3.2.4.  Theorem 3.2.5.
Theorem 3.2.6.  (Gaussian binomial counts subspaces of F_q^n)
Theorem 3.3.1.  (f(x)^{-1} exists iff a_0 ≠ 0)
Theorem 3.3.2.  (Σ f_k converges iff mdeg f_k → ∞)
Theorem 3.3.3.  (f(g(x)) exists iff f polynomial or g has zero constant term)
Theorem 3.3.4.  (∏(1+f_k) converges iff mdeg f_k → ∞)
Lemma 3.4.1.  Theorem 3.4.2.  Theorem 3.4.3.  (Newton's binomial series, n ∈ Q)
Theorem 3.5.1.  Theorem 3.5.2.  Proposition 3.5.3.  Corollary 3.5.4.  Theorem 3.5.5.
Theorem 3.5.6 (Euler).
Theorem 3.6.1.  Theorem 3.6.2.  Theorem 3.6.3.
Theorem 3.7.1.  (linear recursion ⟺ rational gf ⟺ Σ p_i(n) r_i^n)
Theorem 3.8.1 (The Four Color Theorem).
Lemma 3.8.2 (Deletion-Contraction Lemma).
Theorem 3.8.3.  Theorem 3.8.4.  Theorem 3.8.5.  Theorem 3.8.6.
Lemma 3.8.7.  Theorem 3.8.8.  Lemma 3.8.9.  Theorem 3.8.10.
Theorem 3.9.1.  (combinatorial reciprocity)

Theorem 4.1.1.  Theorem 4.1.2.  Theorem 4.1.3.
Theorem 4.2.1.  Theorem 4.2.2.  Corollary 4.2.3.  Theorem 4.2.4.  Theorem 4.2.5.
Proposition 4.3.1.
Proposition 4.4.1.  Theorem 4.4.2.  (Sum and Product Rules for egfs)
Theorem 4.5.1 (Exponential Formula).   Theorem 4.5.2.  (odd/even partition structures)

Proposition 5.1.1.  Proposition 5.1.2.  Proposition 5.1.3.
Proposition 5.2.1.  Proposition 5.2.2.
Proposition 5.3.1.  Proposition 5.3.2.  Proposition 5.3.3.  Proposition 5.3.4.
Proposition 5.3.5.
(5.4–5.9: Möbius function, Möbius Inversion Theorem, characteristic polynomials,
 quotients, computing μ, binomial posets)

Proposition 6.1.1.  Lemma 6.1.2.
Lemma 6.2.1 (Burnside's Lemma).   Lemma 6.2.2.
Lemma 6.3.1.  Theorem 6.3.2.  (cycle-index generating function for orbits on subsets/multisets)
Proposition 6.4.1.  Theorem 6.4.2 (Redfield–Pólya Theorem).  Proposition 6.4.3.
Lemma 6.5.1.  Theorem 6.5.2 (Fermat's Little Theorem).  Lemma 6.5.3.
Theorem 6.5.4 (Wilson's Congruence).  Lemma 6.5.5.  Theorem 6.5.6 (Lucas's Congruence).
Theorem 6.5.7.  Proposition 6.5.8.  Proposition 6.5.9.
Lemma 6.6.1.  Theorem 6.6.2.  Lemma 6.6.3.  Corollary 6.6.4.  Lemma 6.6.5.
Corollary 6.6.6.
```

---

## B4. Wilf, *generatingfunctionology*, 2nd ed. (S4)

Printed TOC, verbatim:
```
Chapter 1: Introductory Ideas and Examples
  1.1 An easy two term recurrence 3            1.2 A slightly harder two term recurrence 5
  1.3 A three term recurrence 8                1.4 A three term boundary value problem 10
  1.5 Two independent variables 11             1.6 Another 2-variable case 16
Chapter 2: Series
  2.1 Formal power series 30
  2.2 The calculus of formal ordinary power series generating functions 33
  2.3 The calculus of formal exponential generating functions 39
  2.4 Power series, analytic theory 46          2.5 Some useful power series 52
  2.6 Dirichlet series, formal theory 56
Chapter 3: Cards, Decks, and Hands: The Exponential Formula
  3.1 Introduction 73                          3.2 Definitions and a question 74
  3.3 Examples of exponential families 76       3.4 The main counting theorems 78
  3.5 Permutations and their cycles 81          3.6 Set partitions 83
  3.7 A subclass of permutations 84             3.8 Involutions, etc. 84
  3.9 2-regular graphs 85                       3.10 Counting connected graphs 86
  3.11 Counting labeled bipartite graphs 87     3.12 Counting labeled trees 89
  3.13 Exponential families and polynomials of 'binomial type.' 91
  3.14 Unlabeled cards and hands 92             3.15 The money changing problem 96
  3.16 Partitions of integers 100               3.17 Rooted trees and forests 102
  3.18 Historical notes 103
Chapter 4: Applications of generating functions
  4.1 Generating functions find averages, etc. 108
  4.2 A generatingfunctionological view of the sieve method 110
  4.3 The 'Snake Oil' method for easier combinatorial identities 118
  4.4 WZ pairs prove harder identities 130
  4.5 Generating functions and unimodality, convexity, etc. 136
  4.6 Generating functions prove congruences 140
  4.7 The cycle index of the symmetric group 141
  4.8 How many permutations have square roots? 146
  4.9 Counting polyominoes 150                  4.10 Exact covering sequences 154
Chapter 5: Analytic and asymptotic methods
  5.1 The Lagrange Inversion Formula 167
  5.2 Analyticity and asymptotics (I): Poles 171
  5.3 Analyticity and asymptotics (II): Algebraic singularities 177
  5.4 Analyticity and asymptotics (III): Hayman's method 181
Appendix: Using Maple and Mathematica 192 · Solutions 197 · References 224
```
Named result harvested: `Theorem 5.1.1. (The Lagrange Inversion Formula)`.

---

## B5. Cameron, *Enumerative Combinatorics — The LTCC lectures* (S5)

Section headings, verbatim (the notes carry no printed TOC; these are the in-text headings):
```
1 Subsets, Partitions, Permutations
  1.1 Subsets       1.2 Partitions       1.3 Permutations
2 Formal power series
  2.1 Formal power series                2.2 Example: partitions
3 Catalan numbers
  3.1 Analysis      3.2 Example: Catalan numbers    3.3 Other Catalan objects
  3.4 Young diagrams and tableaux        3.5 Wedderburn–Etherington numbers
4 Unimodality
  4.1 Unimodality and log-concavity      4.2 Binomial coefficients and Stirling numbers
5 [Gaussian coefficients]
  5.1 Definition of Gaussian coefficients 5.2 Interpretations
  5.3 Combinatorial properties           5.4 The q-binomial theorem
  5.5 Jacobi's Triple Product Identity
6 Symmetric polynomials
  6.1 Symmetric polynomials              6.2 Generating functions
  6.3 Functions indexed by partitions    6.4 Appendix: Selections with repetition
7 Group actions
  7.1 The Orbit-Counting Lemma           7.2 Labelled and unlabelled     7.3 Cycle index
8 Species
  8.1 What is a species?                 8.2 Examples
  8.3 Operations on species              8.4 Exercises
9 Möbius inversion
  9.1 Inclusion-Exclusion                9.2 Applications
  9.3 The Möbius function of a poset     9.4 Some examples
10 Cayley's Theorem
  10.1 Prüfer codes                      10.2 A proof using species
  10.3 The Matrix-Tree Theorem           10.4 Lagrange inversion
  10.5 Stirling's formula
```
Named results harvested: `Theorem 5.7` (the q-binomial theorem),
`Theorem 5.8 (Jacobi's Triple Product Identity)`, and the unnumbered
`Orbit-Counting Lemma` of §7.1.

---

## B6. Postnikov lectures / Dillon notes, *A Survey of Enumerative Combinatorics* (S6)

Table of contents, verbatim (from the PDF outline):
```
1 The twelvefold way
  1.1 Introduction       1.2 The easy entries      1.3 Stars and bars and donuts and dividers
  1.4 Stirling numbers   1.5 An aside: Inclusion-Exclusion
  1.6 Partitions         1.7 The completed table
2 Generating functions
  2.1 Introduction       2.2 Lagrange inversion    2.3 Applications of Lagrange inversion
  2.4 Proof of Lagrange inversion                  2.5 An extension of Lagrange inversion
  2.6 Statistics
3 A handful of sequences
  3.1 Labelled trees     3.2 Parking functions     3.3 The Cayley numbers
4 Polytopes
  4.1 The beginning      4.2 Faces, f-vectors, and h-vectors    4.3 The permutohedron
  4.4 Eulerian numbers and the gamma vector        4.5 Volume of polytopes
  4.6 The associahedron  4.7 Geometric realization of the associahedron
  4.8 Graphical associahedra
5 Posets
  5.1 Definitions        5.2 q-analogues and the lattice of subspaces
  5.3 The partition lattice                        5.4 Symmetric group lattices
  5.5 Decompositions of the long cycle             5.6 Möbius inversion
  5.7 The Möbius function
6 Hyperplane arrangements
  6.1 Graphical arrangements
  6.2 Möbius functions, chromatic polynomials, and hyperplane arrangements, oh my!
  6.3 Characteristic polynomial of hyperplane arrangements
  6.4 The Catalan arrangement    6.5 Interval orders
  6.6 Complex hyperplane arrangements              6.7 The Orlik-Solomon algebra
  6.8 New formulas for the characteristic polynomial
7 Matroids
  7.1 What are they?     7.2 Geometric lattices    7.3 Matroid polytopes
  7.4 Graph duality      7.5 Matroid duality
  7.6 Graphical and cographical hyperplane arrangements
  7.7 Diversion: counting totally cyclic orientations
  7.8 The Tutte polynomial                         7.9 Polymatroids
Appendix  A.1 Finite fields    A.2 Systems of linear equations
```
Named results harvested: `Theorem 2.13 (Complex Lagrange inversion)`,
`Theorem 2.14 (Combinatorial Lagrange inversion)`, `Theorem 2.26` (the k-th power extension),
`Proposition 2.8`, `Exercise 2.6`, `Exercise 2.7`.

---

## B7. de Mier, Oxford *Enumerative Combinatorics* notes (S7)

Printed TOC, verbatim:
```
1 Subsets, multisets, and balls-in-bins 3
  1.1 Words and permutations 3            1.2 Subsets and binomial numbers 4
  1.3 Multisets and integer compositions 7 1.4 Balls-and-bins and multinomial numbers 9
  1.5 Mappings 10
2 The Principle of Inclusion and Exclusion 10
3 Integer and set partitions; Stirling numbers 14
  3.1 Integer partitions 14               3.2 Set partitions 17
  3.3 Decomposition of permutations into disjoint cycles 19
4 Generating functions and recurrences 20
  4.1 Formal power series 24              4.2 Linear recurrences 26
  4.3 A non-linear recurrence: Catalan numbers 29
  4.4 The generating function for integer partitions 31
5 The symbolic method for unlabelled structures 33
  5.1 Constructions 34                    5.2 Compositions revisited 38
  5.3 Rooted plane trees 39
6 The symbolic method for labelled structures 41
  6.1 Constructions 42                    6.2 Labelled graphs 45
  6.3 Set partitions revisited 46         6.4 Permutation decompositions revisited 47
```

---

## B8. Grinberg, *Enumerative Combinatorics: class notes* (S8)

Table of contents, verbatim (outline; solutions index omitted):
```
Notations
1 Introduction
  1.1 Domino tilings  (The problem · The odd-by-odd case and the sum rule ·
      The symmetry and the bijection rule · The m=1 case · The m=2 case and Fibonacci
      numbers · Kasteleyn's formula (teaser) · Axisymmetric domino tilings ·
      Tiling rectangles with k-bricks)
  1.2 Sums of powers  (The sum 1+2+...+n · What is a sum, actually? · Rules for sums ·
      While at that, what is a finite product? · The sums 1^k+2^k+...+n^k)
  1.3 Factorials and binomial coefficients  (Factorials · Definition of binomial
      coefficients · Fundamental properties of the binomial coefficients · Binomial
      coefficients count subsets · Integrality and some arithmetic properties ·
      The binomial formula · Other properties of binomial coefficients)
  1.4 Counting subsets  (All subsets · Lacunar subsets: the basics · Intermezzo: SageMath ·
      Counting lacunar subsets · Counting k-element lacunar subsets · Counting subsets with
      a even and b odd elements · The addition formula for Fibonacci numbers ·
      More subset counting · Counting subsets containing a given subset)
  1.5 Counting tuples and maps  (Tuples · Counting maps · Applications)
  1.6 Interchange of summations  (The finite Fubini principle · The Fubini principle with
      a predicate · A cautionary tale about infinite sums)
  1.7 Counting permutations: an introduction  (Permutations and derangements · Only the
      size counts · Intermezzo: OEIS · The one-line notation · Short-legged permutations ·
      Long-legged permutations)
2 Binomial coefficients
  2.1 The alternating sum of a row of Pascal's triangle  (Telescoping sums · A war between
      the odd and the even)
  2.2 The trinomial revision formula  (An algebraic proof · A double counting proof · A variant)
  2.3 The hockey-stick identity revisited
  2.4 Counting maps  (All maps · Injective maps · The pigeonhole principles ·
      Permutations · Surjective maps)
  2.5 1^m+2^m+...+n^m
  2.6 The Vandermonde convolution  (The Vandermonde convolution theorem · The polynomial
      identity trick · Salvaging the proofs of Theorem 2.6.1 · More consequences of the
      polynomial identity trick · Mutating the Chu–Vandermonde identity)
  2.7 Counting subsets again
  2.8 Another use of polynomials
  2.9 The Principle of Inclusion and Exclusion  (The principles · The cancellation lemma ·
      The proofs · Application: Surjections · Application: Derangements ·
      Application: Euler's totient function · Other cancellation-type lemmas)
  2.10 Compositions and weak compositions  (Compositions · Binary compositions ·
      Weak compositions · Other composition-like counting problems)
  2.11 Multisubsets  (Definitions · Counting multisubsets of given size ·
      An application to lacunar subsets)
  2.12 Multinomial coefficients  (Definition and formulas · Counting maps that take values
      a given number of times · Counting anagrams · More formulas)
3 The twelvefold way
  3.1 What is the twelvefold way?   3.2 LL   3.3 Equivalence relations  (Relations ·
      Equivalence relations · Equivalence classes · Defining unlabelled boxes and balls)
  3.4 UL   3.5 LU   3.6 UU and integer partitions
  3.7 Integer partitions (an introduction)   3.8 Odds and ends
4 Permutations
  4.1 Introduction  4.2 Definitions  4.3 Transpositions and cycles
  4.4 Inversions and lengths  4.5 Descents  4.6 Signs
5 Lattice paths (brief introduction)
6 Generating functions (introduction)
Solutions and references to the exercises
```

---

## B9. Bóna (S9, S10) — TOC only

**Bóna, *A Walk Through Combinatorics*** (chapter-level):
```
Part I: Basic Methods
  Ch. 1  Seven Is More Than Six. The Pigeon-Hole Principle
  Ch. 2  One Step at a Time. The Method of Mathematical Induction
Part II: Enumerative Combinatorics
  Ch. 3  There are a Lot of Them. Elementary Counting Problems
  Ch. 4  No Matter How You Slice It. The Binomial Theorem and Related Identities
  Ch. 5  Divide and Conquer. Partitions
  Ch. 6  Not So Vicious Cycles. Cycles in Permutations
  Ch. 7  You Shall Not Overcount. The Sieve
  Ch. 8  A Function Is Worth Many Numbers. Generating Functions
Part III: Graph Theory  (Ch. 9–12)
Part IV: Horizons  (Ch. 13–…, incl. Ch. 15 "Who Knows What It Looks Like, But It Exists")
```
(3rd ed. adds chapters on block designs and on counting unlabeled structures.)

**Bóna, *Introduction to Enumerative and Analytic Combinatorics*, 2nd ed.**:
```
Part I  Methods:  1 Basic methods · 2 Applications of basic methods · 3 Generating functions
Part II Topics:   4 Counting permutations · 5 Counting graphs · 6 Extremal combinatorics
Part III An Advanced Method: 7 Analytic combinatorics
Part IV Special Topics: 8 Symmetric structures · 9 Sequences in combinatorics ·
                        10 Counting magic squares and magic cubes
Appendix  The method of mathematical induction
```

---

# C. Mathematical detail the scaffolder needs

Throughout: `K[[z]]` is the ring of formal power series over a commutative ring `K` with 1.

## C1. Ordinary generating functions and the symbolic method (unlabelled)

**Best source: F&S Theorem I.1 (Basic admissibility, unlabelled universe), p. 27.** Exact
statement: *"The constructions of union, cartesian product, sequence, powerset, multiset, and
cycle are all admissible. The associated operators are as follows."*

| construction | OGF operator |
|---|---|
| Sum | `A = B + C ⇒ A(z) = B(z) + C(z)` |
| Cartesian product | `A = B × C ⇒ A(z) = B(z)·C(z)` |
| Sequence | `A = SEQ(B) ⇒ A(z) = 1/(1 − B(z))` |
| Powerset | `A = PSET(B) ⇒ A(z) = ∏_{n≥1}(1+z^n)^{B_n} = exp(Σ_{k≥1} ((−1)^{k−1}/k) B(z^k))` |
| Multiset | `A = MSET(B) ⇒ A(z) = ∏_{n≥1}(1−z^n)^{−B_n} = exp(Σ_{k≥1} (1/k) B(z^k))` |
| Cycle | `A = CYC(B) ⇒ A(z) = Σ_{k≥1} (φ(k)/k) log(1/(1 − B(z^k)))` |

**Hypothesis, stated verbatim by F&S immediately after the table:** *"For the sequence,
powerset, multiset, and cycle translations, it is assumed that B_0 = ∅."* Also
`E = {ε}` has `E(z) = 1` and the atomic class `Z` has `Z(z) = z`.

**Proof route.** Case by case, purely by manipulation of `Σ_{α∈A} z^{|α|}`. Sum and
Cartesian product are one-line. Sequence uses the quasi-inverse `Q(f) = Σ_{k≥0} f^k`, which
converges in the formal topology exactly because `B_0 = ∅` forces `val(B) ≥ 1`. Multiset,
powerset and cycle need the "Pólya operators"; the cycle case is derived independently in
**Appendix A.4 "Cycle construction"**, and that derivation is worth flagging: it goes through
primitive (aperiodic) sequences, `S(z,u) = Σ_{k≥1} PS(z^k,u^k)`, **Möbius inversion**,
term-wise integration `PC(z,u) = ∫_0^u PS(z,v) dv/v`, and finally `Σ_{d|k} μ(d)/d = φ(k)/k`.
Everything there is formal.

**Which of these need analysis: NONE.** F&S themselves say of Part A that "This translation
process is a purely formal one." Confirmed by reading the proofs: the only convergence used
is the formal (valuation) topology of Appendix A.5. See §E.

**Theorem I.2 (Symbolic method, unlabelled universe), p. 34**, is the closure statement: the
GF of a constructible class is a component of a system of functional equations built from
`1, z, +, ×, Q, Exp, Exp‾, Log` with
`Q[f] = 1/(1−f)`, `Log[f] = Σ_{k≥1}(φ(k)/k) log(1/(1−f(z^k)))`,
`Exp[f] = exp(Σ_{k≥1} f(z^k)/k)`, `Exp‾[f] = exp(Σ_{k≥1}(−1)^{k−1} f(z^k)/k)`.

**Theorem I.3 (Component-restricted constructions), p. 84** gives `SEQ_k`, `PSET_k`,
`MSET_k`, `CYC_k`, all as `[u^k]` extractions from the above.

**Theorem I.4 (Pointing and substitution), p. 87**: `A = ΘB ⇒ A(z) = z ∂_z B(z)`;
`A = B ∘ C ⇒ A(z) = B(C(z))`. (Substitution needs `C_0 = ∅`, i.e. `C(0)=0`.)

**Theorem I.5 (Implicit specifications), p. 89**: for `A = B+X`, `A = B×X`, `A = SEQ(X)`,
`X(z) = A(z)−B(z)`, `A(z)/B(z)`, `1 − 1/A(z)`; and for `A = MSET(X)`,
`X(z) = Σ_{k≥1} (μ(k)/k) log A(z^k)` — proved by taking logs of the MSET relation and applying
Möbius inversion. Fully formal.

Independent treatments of the same material: **de Mier §5.1 "Constructions"** (unlabelled) and
**Sagan §3.4 "The Sum and Product Rules for ogfs"**.

## C2. Exponential generating functions (labelled)

**Best source: F&S Theorem II.1 (Basic admissibility, labelled universe), p. 103.** Exact
statement: *"The constructions of combinatorial sum, labelled product, sequence, set, and
cycle are all admissible. Associated operators on EGFs are:"*

```
Sum:      A = B + C   ⇒ A(z) = B(z) + C(z)
Product:  A = B ⋆ C   ⇒ A(z) = B(z)·C(z)
Sequence: A = SEQ(B)  ⇒ A(z) = 1/(1 − B(z));   SEQ_k(B) ≡ (B)^{⋆k} ⇒ B(z)^k
Set:      A = SET(B)  ⇒ A(z) = exp(B(z));      SET_k(B)          ⇒ B(z)^k / k!
Cycle:    A = CYC(B)  ⇒ A(z) = log(1/(1−B(z))); CYC_k(B)         ⇒ B(z)^k / k
```
`SEQ`, `SET`, `CYC` again require `B_0 = ∅`. The archetype specifications F&S then record:
`R ≅ SEQ(SET_{≥1}(Z))` surjections, `S ≅ SET(SET_{≥1}(Z))` set partitions,
`O ≅ SEQ(CYC(Z))` alignments, `P ≅ SET(CYC(Z))` permutations.

**Coefficient-ring hypothesis.** The labelled product rule rests on the binomial convolution
`A_n = Σ_k C(n,k) B_k C_{n−k}`, and the EGF form `Σ A_n z^n/n!` divides by `n!`. So the
**EGF calculus requires a Q-algebra of coefficients** (F&S take `K ∈ {Q, R, C}` in A.5);
`SET_k ⇒ B(z)^k/k!` and `CYC_k ⇒ B(z)^k/k` make the denominators explicit. The OGF calculus
in C1 needs no such hypothesis and works over any commutative ring — **this is the sharpest
scaffolding-relevant difference between the two calculi, and it is not a stylistic point.**

**Theorem II.2 (Symbolic method, labelled universe), p. 104**: operators `+, ×, Q(f)=1/(1−f)`,
`E(f)=e^f`, `L(f)=log(1/(1−f))`, plus `f^k`, `f^k/k!`, `f^k/k` for the restricted versions.

**Theorem II.3** (pointing/substitution, labelled), **Theorem II.4 (Implicit specifications)**:
for `A = SEQ(X)`, `SET(X)`, `CYC(X)`, one gets `X = 1 − 1/A`, `X = log A`, `X = 1 − e^{−A}`.

**Theorem II.5** (the *boxed product*, p. 139): `A = (B^□ ⋆ C) ⇒ A(z) = ∫_0^z (∂_t B(t))·C(t) dt`,
proved from `A_n = Σ_k C(n−1,k−1) B_k C_{n−k}`. Formal (integration of formal power series is
the coefficient shift `z^n ↦ z^{n+1}/(n+1)`, again a Q-algebra requirement).

**The exponential formula.** Two independent statements:
- **Sagan Theorem 4.5.1 (Exponential Formula):** *"If 𝒮 is a labeled structure satisfying
  (4.16), then F_{Π(𝒮)}(x) = e^{F_𝒮(x)}."* Condition (4.16) is that the structure is applied
  to the blocks of a set partition, blocks nonempty. Proof: `e^{F} = Σ_k F^k/k!`; by the
  Product Rule for egfs (Theorem 4.4.2) `F^k` is the egf for 𝒮-structures on *ordered* k-block
  partitions, so `F^k/k!` handles unordered ones; sum over k. **Purely formal.**
  Sagan Theorem 4.5.2 gives the odd/even refinements `sinh F_𝒮` and `cosh F_𝒮`.
- **Wilf Ch. 3 "Cards, Decks, and Hands: The Exponential Formula"**, §3.4 "The main counting
  theorems", with the same content in the deck/hand language, and §3.14 for the *unlabelled*
  ("Unlabeled cards and hands") analogue.
- F&S phrase the same thing as `SET(B) ⇒ exp(B(z))` (Theorem II.1); Cameron §8.3 remarks
  that "The fact that substituting a species into `Set` exponentiates the generating function
  for labelled structures is sometimes called the *exponential principle*."

**Cycle construction, labelled**: `CYC(B) ⇒ log(1/(1−B(z)))`, immediately from
`CYC_k ⇒ B^k/k` and `Σ_k f^k/k = log(1/(1−f))`. The **unlabelled** cycle construction is the
genuinely harder one (`Σ_k (φ(k)/k) log(1/(1−B(z^k)))`) and is the only admissible-construction
proof that needs an arithmetic input (Möbius inversion / Euler's totient); see F&S Appendix A.4
and Cameron Exercise 8.4.1, which derives `Z(Circ) = −Σ_{m≥1} (φ(m)/m) log(1−s_m)`.

## C3. The transfer-matrix method

**Best source: Stanley EC1 §4.7 "The Transfer-matrix Method", pp. 573–596.** The setup: `D`
is a finite digraph on vertices `v_1,…,v_p` with edge weights in a commutative ring; `A` is the
`p × p` transfer matrix `A_{ij} = Σ` (weights of edges `v_i → v_j`); `A_{ij}(n)` is the sum of
weights of walks of length `n` from `v_i` to `v_j`.

**4.7.1 Theorem.** *"Let n ∈ N. Then the (i,j)-entry of A^n is equal to A_{ij}(n). (Here we
define A^0 = I even if A is not invertible.)"* Proof: immediate from the definition of matrix
multiplication, expanding `(A^n)_{ij} = Σ A_{i i_1} A_{i_1 i_2} ⋯ A_{i_{n−1} j}`.

**4.7.2 Theorem.** With `F_{ij}(D,λ) = Σ_{n≥0} A_{ij}(n) λ^n`,
```
F_ij(D,λ) = (−1)^{i+j} det(I − λA : j,i) / det(I − λA)        (4.34)
```
*"where (B : j,i) denotes the matrix obtained by removing the jth row and ith column of B.
Thus in particular F_{ij}(D,λ) is a rational function of λ whose degree is strictly less than
the multiplicity n_0 of 0 as an eigenvalue of A."*
**Proof route, and its dependence:** `F_{ij}` is the `(i,j)` entry of `Σ_{n≥0} λ^n A^n =
(I − λA)^{−1}`, and then the *cofactor formula for the inverse of a matrix*,
`(B^{−1})_{ij} = (−1)^{i+j} det(B : j,i)/det(B)`. So the theorem's whole linear-algebra
dependency is: **(a) the geometric series `(I−λA)^{−1} = Σ λ^n A^n` in the ring of matrices
over `K[[λ]]`** (formal, valid because `λA` has positive valuation), and **(b) the adjugate /
cofactor formula `B·adj(B) = det(B)·I`.** No eigenvalue theory is needed for 4.7.2 itself;
the degree bound uses `det(I−λA) = 1 + α_1λ + ⋯ + α_{p−n_0}λ^{p−n_0}` read off from the
characteristic polynomial.

**4.7.3 Corollary.** With `C_D(n) = Σ_Γ w(Γ)` over closed walks of length n, and
`Q(λ) = det(I − λA)`: `Σ_{n≥1} C_D(n) λ^n = −λ Q'(λ)/Q(λ)`. Proof uses `C_D(n) = tr A^n =
ω_1^n + ⋯ + ω_q^n` over the **nonzero eigenvalues** — this one *does* invoke eigenvalues, but
over an algebraically closed field it is still pure algebra, and Stanley notes it "may be
deduced directly from Theorem 4.7.2" instead.

Later in §4.7.4 "Factorization in free monoids": `4.7.11–4.7.14` (very pure submonoids,
`B^*` freely generated) — this is the Cartier–Foata style development and is fully formal.

Second treatment: **F&S §V.6 "Transfer matrix models" (p. 356)** — but note that is inside
**Part B**, i.e. F&S present transfer matrices as an *asymptotic* tool. The exact-enumeration
content the library would want is Stanley's.

## C4. Lagrange inversion / Lagrange–Bürmann

Three independent statements, and they differ in what they assume.

**(i) F&S Theorem A.2 (Lagrange Inversion Theorem), Appendix A.6, p. 732.** Exact statement:
*"Let φ(u) = Σ_{k≥0} φ_k u^k be a power series of C[[u]] with φ_0 ≠ 0. Then, the equation
y = zφ(y) admits a unique solution in C[[z]] whose coefficients are given by (Lagrange form)*
```
y(z) = Σ_{n≥1} y_n z^n,   where  y_n = (1/n) [u^{n−1}] φ(u)^n            (12)
```
*Furthermore, one has for k > 0 (Bürmann form)*
```
y(z)^k = Σ_{n≥1} y_n^{(k)} z^n,  where  y_n^{(k)} = (k/n) [u^{n−k}] φ(u)^n   (13)
```
*By linearity, a form equivalent to Bürmann's (13), with H an arbitrary function, is*
```
[z^n] H(y(z)) = (1/n) [u^{n−1}] ( H'(u) φ(u)^n )                          (14)
```
The setup sentence is worth quoting because it fixes hypotheses: *"It is assumed that
`[y^0]h(y) = 0`, so that inversion is formally well defined, and `[y^1]h(y) ≠ 0`. The problem
is then conveniently standardized by defining `φ(y) = y/h(y)`."*

**F&S's proof route is via the residue identity and it is complex-analytic.** The chain, quoted:
```
n y_n = [z^{n−1}] y'(z)        (Direct coefficient formula for y'(z))
      = (1/2iπ) ∫_{0+} y'(z) dz / z^n
      = (1/2iπ) ∫_{0+} dy / (y/φ(y))^n     (Change of variable z ↦ y)
      = [y^{n−1}] φ(y)^n                    (Reverse coefficient formula for φ(y)^n)
```
They reduce to the polynomial case first ("Since `y_n` only depends polynomially on the
coefficients of `φ(u)` till order n, one may assume without loss of generality … that φ is a
polynomial"), then use Cauchy's coefficient formula. They openly say: *"Although the proof is
technically simple, the result is altogether non-elementary."* They then note the alternatives:
*"There exist instructive (but longer) combinatorial proofs based on what is known as the
'cyclic lemma' or 'conjugacy principle' [503] for Łukasiewicz words … Another classical proof
due to Henrici relies on properties of iteration matrices."*

Extensions in the same appendix: **Note A.11 "Lagrange–Bürmann inversion for fractional
powers"** — `[z^n](y(z)/z)^α = (α/(n+α)) [u^n] φ(u)^{n+α}` for any real or complex α;
**Note A.12 "Abel's identity"**; **Note A.13 "A variant of Lagrange inversion"** —
`[z^n] (y a(y))/(1 − zφ'(y)) = [u^{n−1}] a(u) φ(u)^n`.

**(ii) Wilf Theorem 5.1.1 (The Lagrange Inversion Formula), §5.1, p. 167.** *"Let f(u) and
φ(u) be formal power series in u, with φ(0) = 1. Then there is a unique formal power series
u = u(t) that satisfies (5.1.1). Further, the value f(u(t)) … satisfies*
`[t^n]{f(u(t))} = (1/n) [u^{n−1}]{f'(u) φ(u)^n}`.*"
Wilf normalises `φ(0) = 1` rather than `φ_0 ≠ 0`. **His proof is also via the residue theorem**
— he reduces to polynomials, then writes explicitly "the third [equality] is the residue
theorem of complex integration", and argues `g(u) = u/φ(u)` is a conformal 1-1 map near 0.
Note the placement: Wilf files Lagrange inversion in **Chapter 5 "Analytic and asymptotic
methods"**, which is itself a signal about how the classical literature views it.

**(iii) Postnikov/Dillon §2.2–2.4 — the one that matters for a formal-only library.**
`Theorem 2.13 (Complex Lagrange inversion)`: *"If f = Σ_{n≥1} a_n x^n is analytic at x = 0 with
a_1 ≠ 0, then it has a unique compositional inverse function g = Σ b_n x^n analytic at x = 0,
and b_n = (1/n)[x^{n−1}](x/f(x))^n."*
`Theorem 2.14 (Combinatorial Lagrange inversion)`: *"If R(t) = Σ_{n≥0} r_n t^n and r_0 ≠ 0,
then the equation f(x) = x·R(f(x)) has a unique solution whose coefficients are
`[x^n]f = (1/n)[t^{n−1}] R(t)^n`."*
The notes state plainly: *"It turns out the same is true if you remove the condition of
analyticity, and it's easier to prove, because you don't need any complex analysis."*
`Theorem 2.26` extends it to `[x^n] f(x)^k = (k/n)[t^{n−k}] R(t)^n`, "The proof requires only
a slight modification of the argument from above."

**The formal proof route (§2.4), summarised faithfully.** Both sides are shown to count the
same weighted objects. The coefficient is written
`a_n = (1/n) Σ_{c_1+⋯+c_n = n−1, c_i ≥ 0} r_{c_1} ⋯ r_{c_n}`, indexed by weak compositions of
`n−1` into `n` parts. Cyclic shift classes each have **exactly n** members (if a class has `k`
members then `k | n` and `(n/k) | n−1`, forcing `k = n`) — *this is precisely the cycle lemma
argument* — so after absorbing `1/n` the terms are indexed by cyclic classes; each class has a
unique representative whose "Dyck-type" path stays above the axis until the last step; and a
weight-preserving bijection plane trees ↔ modified Dyck paths (depth-first first-encounter
order, `r_T = ∏ a_{ch(v_i)} = ∏ a_{p_i} = r_P`) closes the argument. **Every step is finite
combinatorics.** This is the source to use if the library wants Lagrange inversion without
complex analysis. See §E.

## C5. Linear recurrences ⟷ rational generating functions

**Best source: Stanley EC1 Theorem 4.1.1, p. 535.** Exact statement, verbatim:

> *"Let `α_1, α_2, …, α_d` be a fixed sequence of complex numbers, `d ≥ 1` and `α_d ≠ 0`.
> The following conditions on a function `f : N → C` are equivalent:*
> *i. `Σ_{n≥0} f(n) x^n = P(x)/Q(x)`, where `Q(x) = 1 + α_1 x + α_2 x^2 + ⋯ + α_d x^d` and
>    `P(x)` is a polynomial in x of degree less than d.*
> *ii. For all `n ≥ 0`, `f(n+d) + α_1 f(n+d−1) + α_2 f(n+d−2) + ⋯ + α_d f(n) = 0`.*
> *iii. For all `n ≥ 0`, `f(n) = Σ_{i=1}^{k} P_i(n) γ_i^n`, where
>    `1 + α_1 x + ⋯ + α_d x^d = ∏_{i=1}^{k}(1 − γ_i x)^{d_i}`, the `γ_i`'s are distinct and
>    nonzero, and `P_i(n)` is a polynomial of degree less than `d_i`."*

**Proof route (Stanley's, and it is elegant and entirely linear-algebraic):** define four
`C`-vector spaces `V_1,…,V_4` of functions satisfying (i), (ii), (iii), and a partial-fraction
form respectively; show `dim V_4 = d` (the `R_{ij}(x) = (1−γ_i x)^{−j}` are linearly
independent — multiply a putative relation by `(1−γ_i x)^j` and set `x = 1/γ_i`); `dim V_1 = d`
(free choice of the `d` coefficients of `P`); `dim V_2 = d` (free choice of the `d` initial
values `f(0),…,f(d−1)`); `dim V_3 ≤ d`; then `V_4 ⊆ V_3` via
`(1−γx)^{−j} = Σ_n x^n γ^n C(j+n−1, j−1)` (a polynomial in `n` of degree `j−1`), and
`V_4 ⊆ V_1` by putting the partial-fraction sum over a common denominator. Equating
coefficients in `Q(x) Σ f(n)x^n = P(x)` gives `V_1 ⊆ V_2`.

**Field hypothesis.** Stanley states it over `C`. **What the proof actually needs is:**
(a) `α_d ≠ 0` so `Q(0) = 1` and `Q` is invertible in the power series ring; (b) for the
equivalence *with form (iii)*, that `Q(x)` **splits into linear factors** — i.e. an
algebraically closed field, or at any rate a field containing all roots of the reciprocal
characteristic polynomial; (c) characteristic 0 (or at least `char K = 0` / `char K > d`) for
the "polynomial of degree `< d_i`" basis argument in the repeated-root case, since
`C(j+n−1, j−1)` must be a genuine degree-`(j−1)` polynomial in `n`. **(i) ⟺ (ii) alone needs
no splitting and works over any field, indeed any commutative ring**; only the closed form
(iii) needs the roots. This distinction is worth carrying into the scaffold: the
"rational GF ⟺ linear recurrence" equivalence is much cheaper than the "closed form" clause.

**Second, independent treatment: Sagan Theorem 3.7.1**, §3.7 "Rational generating functions
and linear recursions", same trichotomy (a)/(b)/(c) with `q(x) = 1 + c_1x + ⋯ + c_dx^d`,
`deg p(x) < d`, `1 + c_1x + ⋯ + c_dx^d = ∏(1 − r_i x)^{d_i}`, `deg p_i(n) < d_i`. Sagan's proof
of (b)⇒(c) is explicitly *"partial fraction expansion"*, spelled out at (3.22). Third:
**de Mier §4.2 "Linear recurrences"**.

Companion results in Stanley Ch. 4 worth scaffolding alongside: **4.2.5 Proposition** (the
Hadamard product of rational power series is rational), **4.3.1 Corollary** (polynomiality
criterion), **4.4.1 Proposition** (quasipolynomials).

## C6. Lattice paths, reflection principle, cycle lemma, Catalan numbers

**Reflection principle — Sagan Theorem 2.4.1 (Reflection Principle):** *"Given `L : y = x + b`
for `b ∈ Z` and `v ∈ Z^2`, we let `v'` be the reflection of `v` in `L`. Then the map
`Υ_L : 𝒩ℰ_L(u; v) → 𝒩ℰ_L(u; v')` is a bijection."* Here `𝒩ℰ_L(u;v)` is the set of northeast
lattice paths from `u` to `v` that **touch** `L`. Proof: `Υ_L` (reflect the initial segment up
to the first intersection with `L`) is an involution on the union, because reflection in `L`
is an involution and the set of intersection points with `L` is unchanged.

**Catalan closed form via reflection (Sagan, immediately after 2.4.1):**
`C(n) = C(2n,n) − C(2n, n+1) = (1/(n+1)) C(2n,n)`, because a NE path from `(0,0)` to `(n,n)`
fails to stay weakly above `y = x` iff it meets `L : y = x−1`, and reflection puts those in
bijection with **all** paths to `(n+1, n−1)`. Also **Sagan Theorem 1.11.3** (the closed form,
proved earlier by a different route) and **Theorem 1.11.1/1.11.2** (path counts and the
Catalan recursion). Independent: **de Mier §4.3 "A non-linear recurrence: Catalan numbers"**,
**Cameron §3 "Catalan numbers"** with §3.3 "Other Catalan objects", **F&S** Invitation p. 7
(`C = □ ∪ (C,•,C) ⇒ C(z) = 1 + zC(z)^2`).

**Cycle lemma (Dvoretzky–Motzkin) — F&S Note I.47 "Conjugacy principle and cycle lemma",
p. 75.** Statement as F&S give it, verbatim in substance: let `L` be the class of Łukasiewicz
paths; define a *relaxed* path as one that starts at level 0, ends at level −1, but is
otherwise allowed to include arbitrary negative points, and let `M` be that class. Then each
relaxed path can be cut-and-pasted uniquely after its **left-most minimum**, and *"This
associates to every relaxed path of length ν a unique standard path. A bit of combinatorial
reasoning shows that correspondence is 1-to-ν (each element of L has exactly ν preimages.)
One thus has `M_ν = ν L_ν`."* Since the correspondence preserves the step-type multiset, the
number of Łukasiewicz paths with `ν_j` steps of type `f_j` is
```
(1/ν) [x^{−1} u_0^{ν_0} u_1^{ν_1} ⋯] (x^{−1}u_0 + u_1 + x u_2 + x^2 u_3 + ⋯)^ν
      = (1/ν) multinomial(ν; ν_0, ν_1, …)
```
under the necessary condition `(−1)ν_0 + 0·ν_1 + 1·ν_2 + 2·ν_3 + ⋯ = −1`.
F&S's own attribution sentence, verbatim: *"This combinatorial way of obtaining refined Catalan
statistics is known as the conjugacy principle [503] or the cycle lemma [129, 155, 184]. It is
logically equivalent to the Lagrange Inversion Theorem, as shown by Raney [503]. Dvoretzky &
Motzkin [184] have employed this technique to solve a number of counting problems related to
circular arrangements."* **"Logically equivalent to Lagrange inversion" is the load-bearing
sentence for §E.** The same argument appears, in the orientation of weak compositions rather
than paths, as the counting step in Postnikov/Dillon §2.4.

**Łukasiewicz/Dyck dictionary — F&S Example I.16 "Binary tree codes and Dyck paths"**, giving
the characterisation `x_0 = 0; x_j ≥ 0 for 1 ≤ j ≤ 2n; |x_{j+1} − x_j| = 1; x_{2n+1} = −1`.

## C7. Lindström–Gessel–Viennot

**Two independent statements; use Stanley's for the general form and Sagan's for the digraph
form.**

**Sagan Lemma 2.5.4 (Lindström–Gessle–Viennot)** [Sagan's spelling]: *"Let D be an acyclic
digraph. Consider two sequences of vertices `u_1,…,u_n, v_1,…,v_n ∈ V(D)` such that every
`P ∈ 𝒫_π` is intersecting for `π ≠ id`, the identity permutation. We have*
`det[p(u_i; v_j)]_{1≤i,j≤n}` = *number of nonintersecting `P ∈ 𝒫_id`. In particular, the
determinant is nonnegative."*
Here `p(u;v)` = number of directed paths `u → v`, `𝒫_π` = n-tuples of paths `u_i → v_{π(i)}`.
**The hypothesis is the crucial part and is often misquoted**: it is not "the vertices are in
general position" but literally *every* path system for a non-identity permutation must be
intersecting — the "compatible/nonpermutable" condition. Acyclicity of `D` is needed so that
`p(u;v)` is finite.

**Stanley EC1 Theorem 2.7.1** is the weighted lattice-path form. Verbatim: *"Let
`α, β, γ, δ ∈ N^n` such that for `w ∈ S_n`, `B(w(α), β, γ, w(δ))` is empty unless `w` is the
identity permutation. (For example, this condition occurs if `α_i < α_{i+1}`, `β_i < β_{i+1}`,
`γ_i ≤ γ_{i+1}`, and `δ_i ≤ δ_{i+1}` for `1 ≤ i ≤ n−1`.) Then*
`B(α,β,γ,δ) = det[h(α_j − β_i; γ_i, δ_j)]_1^n`  (2.37) *where we set `h(α_j−β_i; γ_i,δ_j) = 0`
whenever there are no sequences (2.35)."*
Note Stanley's parenthesis: he **supplies an explicit checkable sufficient condition** for the
"empty unless identity" hypothesis. That is exactly what a scaffolded statement needs.

**Proof route (Stanley, §2.7, and it is the standard one).** Expand the determinant as
`Σ_{w∈S_n} (sgn w) A(w(α), β, γ, w(δ))` and construct an involution `L ↦ L*` on
`(⋃_w A_w) − B` — the *intersecting* path systems — with (a) `L** = L`, (b) `Λ(L*) = Λ(L)`
(weight-preserving), (c) if `L ∈ A_u` and `L* ∈ A_v` then `sgn u = −sgn v`. The involution is
the canonical tail-swap: take `i` least such that `L_i` meets some `L_k`, `x` least such that
`L_i` meets some `L_k` (`k > i`) at `(x,y)`, `j` minimal among such `k`; swap tails at that
first intersection. Since `v = u·(i,j)`, (c) holds; the sign-reversing involution cancels
everything but the nonintersecting identity systems. **Entirely finite/formal.** Stanley then
notes *"Theorem 2.7.1 has important applications in the theory of symmetric functions (see the
first proof of Theorem 7.16.1)"* — i.e. the Jacobi–Trudi identity, in EC2.

This is the same technique as **Sagan §2.2 "Sign-reversing involutions"** and
**§2.3 "The Garsia–Milne Involution Principle" (Theorem 2.3.2)**.

## C8. Set partitions, Stirling numbers, Bell numbers, Dobinski

**The two conventions, and both sources' notation.**

*F&S Appendix A.8 "Stirling numbers", p. 735*, verbatim: *"the **Stirling cycle number** (also
called 'of the first kind') `[n k]` enumerates permutations of size n having k cycles"*;
*"the **Stirling partition number** (also called 'of the second kind') `{n k}` enumerates
partitions of an n-set into k non-empty equivalence classes."* And explicitly on notation:
*"The notations `[n k]` and `{n k}` proposed by Knuth (himself anticipated by Karamata) are
nowadays most widespread."* Note that F&S's `[n k]` is the **signless** first-kind number.

*Stanley EC1 §1.3* uses `c(n,k)` for the **signless** Stirling number of the first kind (number
of `w ∈ S_n` with `k` cycles) and `s(n,k) = (−1)^{n−k} c(n,k)` for the **signed** one, and
`S(n,k)` for the second kind. See §D1.

**Vertical EGFs (F&S A.8), the cleanest definitions:**
```
Σ_n [n k] z^n/n! = (1/k!)(log(1/(1−z)))^k        Σ_n {n k} z^n/n! = (1/k!)(e^z − 1)^k
Σ_{n,k} [n k] u^k z^n/n! = exp(u log(1/(1−z))) = (1−z)^{−u}
Σ_{n,k} {n k} u^k z^n/n! = exp(u(e^z − 1))
```
**Recurrences (F&S A.8, verbatim):**
`[n k] = [n−1 k−1] + (n−1)[n−1 k]` and `{n k} = {n−1 k−1} + k{n−1 k}`.
(Sagan Theorem 1.5.2 and Theorem 1.4.2 give the same two, with `c(n,k)` and `S(n,k)`.)

**The connection matrices are mutually inverse — Stanley EC1 Proposition 1.9.1**, verbatim:
> *"a. For all `m,n ∈ N`, we have `Σ_{k≥0} S(m,k) s(k,n) = δ_{mn}`.*
> *b. Let `a_0,a_1,…` and `b_0,b_1,…` be two sequences of elements of a field K. The following
> two conditions are equivalent: i. For all `n ∈ N`, `b_n = Σ_{k=0}^{n} S(n,k) a_k`.
> ii. For all `n ∈ N`, `a_n = Σ_{k=0}^{n} s(n,k) b_k`."*

The **proof route is the change-of-basis argument** and it is the right one to scaffold:
`P = K[x]`, bases `B_1 = {1, x, x^2, …}` and `B_2 = {1, (x)_1, (x)_2, …}` (falling factorials);
`x^n = Σ_k S(n,k)(x)_k` (equation 1.96, itself proved combinatorially — the left side counts all
`f : N → X`, each surjecting onto a unique `Y ⊆ X`) says `S` is the transition matrix `B_2 → B_1`,
and `Σ_k s(n,k) x^k = (x)_n` says `s` is the transition matrix `B_1 → B_2`; transition matrices
between two bases are mutually inverse. **Hypothesis:** part (b) is stated over a field `K`;
part (a) is an identity of integers. The matrices are infinite but row-finite/triangular, so
the products are finite sums — worth stating explicitly in a scaffolded version.

**Bell numbers.** `B(n) = Σ_k S(n,k)`; EGF `Σ B(n) z^n/n! = e^{e^z − 1}` — F&S Ch. II
(`S ≅ SET(SET_{≥1}(Z))`), Sagan §4.5 (as the first application of the Exponential Formula:
`F_B(x) = e^{F_E(x)} = e^{e^x − 1}`), Wilf §3.6 "Set partitions", Cameron §1.2. Recurrence:
Sagan Theorem 1.4.1, `B(0) = 1` and the binomial recursion.

**Dobinski's formula.** F&S state it in Ch. II (p. 109) as
```
S_n = (1/e) Σ_{ℓ≥0} ℓ^n / ℓ!        (companion: R_n = (1/2) Σ_{ℓ≥0} ℓ^n / 2^ℓ  for surjections)
```
with the sentence *"The formula for Bell numbers was found by Dobinski in 1877."*
**What analysis it needs — this is a genuine seam point.** The derivation F&S give is
coefficient extraction from `e^{e^z − 1}` after writing `e^{e^z} = Σ_ℓ e^{ℓz}/ℓ!`; the step
`Σ_ℓ (1/ℓ!) e^{ℓz}` is **not** a legal formal-power-series manipulation, because
`Σ_ℓ e^{ℓz}/ℓ!` has constant term `Σ_ℓ 1/ℓ! = e`, which does not converge in the formal
topology (this is exactly Stanley's **Example 1.1.7** cautionary example: *"`Σ_{n≥0}(x+1)^n/n!
= e Σ_{n≥0} x^n/n!` is valid at the function-theoretic level … but does not make sense as a
statement involving formal power series"*). Dobinski's formula also asserts the convergence of
an infinite series of reals to an integer, which is not a formal-power-series statement at all.
**Verdict: Dobinski's formula needs real analysis (dominated convergence / absolute convergence
of `Σ ℓ^n/ℓ!`), and it cannot be obtained inside `R[[x]]`.** It is not, however, *complex*
analysis, and it does not need singularity analysis — a probabilistic proof via `E[N^n]` for
`N ~ Poisson(1)` is available. See §E.

## C9. Integer partitions

**Euler's product identities. Stanley EC1 Proposition 1.8.1**, verbatim: *"For each `i ∈ P`,
fix a set `S_i ⊆ N`. Let `S = (S_1, S_2, …)`, and define `P(S)` to be the set of all partitions
λ such that if the part i occurs `m_i = m_i(λ)` times, then `m_i ∈ S_i`. Define the generating
function in the variables `q = (q_1,q_2,…)`, `F(S,q) = Σ_{λ∈P(S)} q_1^{m_1(λ)} q_2^{m_2(λ)} ⋯`.
Then `F(S,q) = ∏_{i≥1} (Σ_{j∈S_i} q_i^j)`."* (1.78)
**Corollary 1.8.2**: `Σ_{n≥0} p(S,n) q^n = ∏_{i≥1} (Σ_{j∈S_i} q^{ij})`.
This single proposition is the master identity: `S_i = N` for all `i` gives
`Σ p(n)q^n = ∏ 1/(1−q^i)`; `S_i = {0,1}` gives `∏(1+q^i)`; etc.
**Proof: "by inspection"** — the coefficient of `q_1^{m_1}q_2^{m_2}⋯` on the right is 1 iff each
`m_i ∈ S_i`. **Purely formal**; the infinite product converges in `K[[q]]` by Stanley
Proposition 1.1.9 (`∏(1+G_j)` converges iff `deg G_j → ∞`).

**Conjugation and Durfee squares. Proposition 1.8.3**: `Σ_{i≥1}(i−1)λ_i = Σ_{i≥1} C(λ'_i, 2)`,
proved by placing `i−1` in each square of row `i` of the Young diagram and summing by rows
versus by columns. **Proposition 1.8.4**: `Σ_n c(n)q^n = (1+q)(1+q^3)(1+q^5)⋯` where `c(n)`
counts **self-conjugate** partitions — proof by the **diagonal-hook bijection** onto partitions
into distinct odd parts. Durfee squares appear as **Proposition 1.8.6(b)**:
`1/∏_{i≥1}(1−xq^i) = Σ_{k≥0} x^k q^{k^2} / ((1−q)⋯(1−q^k)(1−xq)⋯(1−xq^k))` — the `q^{k^2}` is
the Durfee square.

**Glaisher/odd-vs-distinct. Proposition 1.8.5**: *"Let `q(n)` denote the number of partitions of
n into distinct parts and `p_odd(n)` the number of partitions of n into odd parts. Then
`q(n) = p_odd(n)` for all `n ≥ 0`."* Stanley gives **two** proofs: a generating-function proof
(`∏(1+q^i) = ∏ (1−q^{2n})/(1−q^n) = 1/∏(1−q^{2i−1})`) and a **bijective** proof (the
repeatedly-halve-even-parts map, Figure 1.17) — this is Glaisher's bijection. Sagan states the
same as **Theorem 2.3.3 (Euler)** and proves it by the Garsia–Milne involution principle.

**Pentagonal number theorem and Franklin's involution. Stanley Proposition 1.8.7**, verbatim:
```
∏_{k≥1}(1 − x^k) = Σ_{n∈Z} (−1)^n x^{n(3n−1)/2}                          (1.88)
                 = 1 + Σ_{n≥1} (−1)^n ( x^{n(3n−1)/2} + x^{n(3n+1)/2} )   (1.89)
                 = 1 − x − x^2 + x^5 + x^7 − x^{12} − x^{15} + x^{22} + x^{26} − ⋯
```
**Proof route — this is Franklin's involution, and Stanley's write-up is the one to follow.**
Set `f(n) = q_e(n) − q_o(n)` (partitions of n into an even / odd number of distinct parts), so
`∏(1−x^k) = Σ f(n)x^n`, and show
`f(n) = (−1)^k if n = k(3k±1)/2, and 0 otherwise` (1.90).
Define on `Q(n)` (partitions of n into distinct parts): `L_λ` = the last row of the Ferrers
diagram, `D_λ` = the set of last elements of all rows `i` with `λ_i = λ_1 − i + 1` (the
staircase from the top-right). If `#D_λ < #L_λ`, move `D_λ` under `L_λ` as a new row; if
`#L_λ ≤ #D_λ`, move `L_λ` parallel and to the right of `D_λ` starting at the top row. This
`φ` is an involution reversing the parity of `ℓ(λ)`, hence sign-reversing, **except** on the
two families where the result is not a valid Ferrers diagram:
`λ = (2k−1, 2k−2, …, k)` with `|λ| = k(3k−1)/2, ℓ(λ) = k`, and
`λ = (2k, 2k−1, …, k+1)` with `|λ| = k(3k+1)/2, ℓ(λ) = k`.
Stanley names the technique: *"Such a method of proof is called a **sign-reversing involution
argument**."* **Purely combinatorial; no analysis.**

**Jacobi triple product.** Two independent statements.
- *Stanley EC1 Exercise 1.91(a)* [3−]: `Σ_{n∈Z} x^n q^{n^2} = ∏_{k≥1}(1−q^{2k})(1+xq^{2k−1})(1+x^{−1}q^{2k−1})`,
  with (b) *"Deduce from (a) the Pentagonal Number Formula (Proposition 1.8.7)"* and (c) two
  further specialisations. The solutions section records: *"This famous result is the Jacobi
  triple product identity."*
- *Cameron Theorem 5.8 (Jacobi's Triple Product Identity)*:
  `∏_{n>0}(1+q^{2n−1}z)(1+q^{2n−1}z^{−1})(1−q^{2n}) = Σ_{l∈Z} q^{l^2} z^l`.
  Cameron flags the formal subtlety himself: *"The sharp-eyed will notice that the series on the
  right breaks my rules that formal Laurent series should have only finitely many negative
  terms … You can check that the three infinite products on the left contribute only finitely
  many terms to each power, positive or negative, of z."* **He then gives a complete
  combinatorial proof** (attributed to Richard Borcherds) via "states", "energy" and "particle
  number" in a Dirac-sea model, matching `q^m z^l` coefficients on both sides against the number
  of states with energy `m` and particle number `l`, using `p(m)` and the ground-state energy
  `1/2 + 3/2 + ⋯ + (2l−1)/2 = l^2/2`. **This proof is finite/bijective — no analysis.** It is
  the right route for a formal-only library.

**Rogers–Ramanujan. Stanley EC1 Exercise 1.88**, verbatim:
```
Σ_{n≥0} x^{n^2} / ((1−x)(1−x^2)⋯(1−x^n))     = 1 / ∏_{k≥0} (1−x^{5k+1})(1−x^{5k+4})
Σ_{n≥0} x^{n(n+1)} / ((1−x)(1−x^2)⋯(1−x^n)) = 1 / ∏_{k≥0} (1−x^{5k+2})(1−x^{5k+3})
```
and (b) the combinatorial equivalents: *"The number of partitions of n into parts ≡ ±1 (mod 5)
is equal to the number of partitions of n whose parts differ by at least 2"* and *"The number
of partitions of n into parts ≡ ±2 (mod 5) is equal to the number of partitions of n whose
parts differ by at least 2 and for which 1 is not a part."*
**What their proofs need — Stanley's own assessment, verbatim and load-bearing:**
> *"These are the famous Rogers-Ramanujan identities, first proved by L. J. Rogers, Proc.
> London Math. Soc. 25 (1894) … For a non-combinatorial proof, see e.g. [1.2, §7.3]. For an
> exposition and discussion of bijective proofs, see Pak [1.62, §7 and pp. 62–63]. …
> **None of the known bijective proofs of the Rogers-Ramanujan identities can be considered
> "simple," comparable to the proof we have given of the pentagonal number formula.** An
> interesting reason for the impossibility of a nice proof was given by I. Pak, The nature of
> partition bijections II. Asymptotic stability."*
Part (b) is by contrast easy: *"They can be proved similarly to the proof of Proposition 1.8.6,
based on the observation that `(λ_1,…,λ_k)` is a partition of n with at most k parts if and only
if `(λ_1+2k−1, λ_2+2k−3, …, λ_k+1)` is a partition of `n+k^2` whose parts differ by at least two
and with exactly k parts."*
**Scaffolding verdict: (b) is cheap and formal; (a) is expensive.** It is *not* an analytic
seam — Rogers–Ramanujan is a formal `q`-series identity provable inside `Z[[q]]` (Rogers'/
Schur's proofs are `q`-difference-equation arguments) — but it is a large amount of machinery
(`q`-difference equations, or Bailey pairs) for one page. This is the strongest candidate in
the whole subject for `deferred` with a written reason, or for its own dedicated page.

## C10. The twelvefold way

**Two sources give the complete table. Sagan Table 1.1 is the cleanest and I reproduce it
verbatim** (`|D| = n`, `|R| = k`; `k↓n` is the falling factorial; `δ(S)` is Sagan's extended
Kronecker delta, `δ(S) = 1` if S true, 0 otherwise):

| `D` | `R` | arbitrary `f` | injective `f` | surjective `f` |
|---|---|---|---|---|
| dist. | dist. | `k^n` | `k↓n` | `k! S(n,k)` |
| indist. | dist. | `C(n+k−1, n)` | `C(k, n)` | `C(n−1, k−1)` |
| dist. | indist. | `Σ_{j=0}^{k} S(n,j)` | `δ(n ≤ k)` | `S(n,k)` |
| indist. | indist. | `p(n,k)` | `δ(n ≤ k)` | `p(n,k) − p(n,k−1)` |

Sagan's framing sentence, verbatim: *"There are 12 types of such functions and so this scheme
is called the twelvefold way, an idea which was introduced in a series of lectures by
Gian-Carlo Rota. The name was suggested by Joel Spencer."* His formalisation of the
indistinguishable case is worth copying: *"when `D` is a multiset and `R` is a set, suppose `D'`
is a set with `|D'| = |D|`. Then a function `f : D → R` is an equivalence class of functions
`f : D' → R` where `f` and `g` are equivalent if `#f^{-1}(r) = #g^{-1}(r)` for all `r ∈ R`."*

**Which result populates each cell, per Sagan's own cross-references:**
`k^n` = Theorem 1.2.2 (words); `k↓n` = Theorem 1.2.1 (permutations/injections);
`k!S(n,k)` = the kernel argument (`f` determined by `ker f` and a bijection from its blocks);
`C(n+k−1,n)` = Theorem 1.3.4 (multisets); `C(k,n)` = subsets; `C(n−1,k−1)` = Theorem 1.7.2
(compositions of n into k positive parts); `Σ_j S(n,j)` = Bell-type partial sums;
`S(n,k)` = Definition of the Stirling partition number; `p(n,k)` = Theorem 1.6.2 (partitions of
n into at most/exactly k parts, per Sagan's convention); `p(n,k) − p(n,k−1)` = partitions into
exactly k parts.

**Stanley EC1 §1.9 "The Twelvefold Way"** is the second treatment (with the row/column layout
transposed relative to Sagan's) and it is where **Proposition 1.9.1** (Stirling inversion, §C8)
is proved, together with equation (1.96) `x^n = Σ_k k! S(n,k) C(x,k) = Σ_k S(n,k)(x)_k`, which
is exactly the "entry 3" verification. Third and fourth treatments: **Grinberg Ch. 3 "The
twelvefold way"** (with the mnemonic cell names `LL`, `UL`, `LU`, `UU`) and
**Postnikov/Dillon Ch. 1 "The twelvefold way"**, whose §1.7 is literally "The completed table".
This is a four-source topic — unusually well covered.

## C11. Burnside / Cauchy–Frobenius, cycle index, Pólya enumeration

**Burnside's lemma — Sagan Lemma 6.2.1 (Burnside's Lemma):** *"Let `G` act on `X` with `G, X`
finite. Then number of orbits `= (1/#G) Σ_{g∈G} #X^g`."* Proof: `Σ_{x∈𝒪} 1/#𝒪 = 1` for each
orbit, so number of orbits `= Σ_{x∈X} 1/#𝒪_x`, then orbit–stabiliser (`#𝒪_x · #G_x = #G`,
Sagan Lemma 6.1.2(c)) and double counting of `{(g,x) : gx = x}`. **Hypotheses: `G` and `X`
finite** (the group must be finite for the average to make sense; `X` finite for the orbit
decomposition). Cameron calls the same result **"The Orbit-Counting Lemma"** (§7.1) — see §D5
on the name.

**Cycle index. Sagan §6.3**: `z(g; x_1,…,x_n) = ∏_i x_i^{(number of i-cycles of g)}` and
`Z(G; x_1,…,x_n) = (1/#G) Σ_{g∈G} z(g; ·)`.
**Sagan Theorem 6.3.2:** with `b_k` = number of orbits of `G` on `C(X,k)` (k-subsets) and
`p_k` = number of orbits on `P(X,k)`,
```
(a) Σ_{k=0}^{n} b_k t^k = Z(G; 1+t, 1+t^2, …, 1+t^n)
(b) Σ_{k=0}^{n} p_k t^k/k! = Z(G; 1+t, 1, …, 1)
```
Proof: apply Burnside to `C(X,k)` for each k and interchange summations, reducing to
`z(g; 1+t,…,1+t^n) = Σ_k #C(X,k)^g t^k`.
**Sagan Proposition 6.4.3:** if `λ = (1^{m_1},…,n^{m_n})` then the number of `π ∈ S_n` of cycle
type λ is `n! / ∏_i i^{m_i} m_i!` — this is the ingredient for `Z(S_n)`.
**Cameron §7.3** and **Wilf §4.7 "The cycle index of the symmetric group"** are independent
treatments; Cameron computes `Z(Set) = exp(Σ_{i≥1} s_i/i)` (i.e. `Σ_n Z(S_n)` in his
normalisation) and `Z(Perm) = ∏_{n≥1}(1−s_n)^{−1}`.

**Pólya's theorem — Sagan Theorem 6.4.2 (Redfield–Pólya Theorem):** *"Let `G` be a finite group
acting on `X` where `#X = n`. Suppose `Y` is a set of variables. Then*
```
Σ_𝒪 wt 𝒪 = Z(G; Σ_{y∈Y} y, Σ_{y∈Y} y^2, …, Σ_{y∈Y} y^n)
```
*where the left-hand sum is over the orbits of `G` acting on `Y^X`."*
This is the **weighted pattern inventory**: `wt f = ∏_{x∈X} f(x)` and `wt 𝒪 = wt f` for any
`f ∈ 𝒪` (well-defined by **Proposition 6.4.1**). Proof: `Σ_{f∈𝒪} wt f/#𝒪_f = wt 𝒪`, then
`Σ_𝒪 wt 𝒪 = (1/#G) Σ_{f∈Y^X} |G_f| wt f` and a row/column double count of the matrix
`M_{g,f} = wt f` if `gf = f`, `0` otherwise. Setting all `y = 1` recovers Burnside.
**Note Sagan's attribution in the theorem name — "Redfield–Pólya".** See §D5.

**de Bruijn's generalisation.** *Not present in Sagan, Cameron, Wilf, F&S Part A, Stanley EC1,
de Mier, Postnikov, or Grinberg in any harvestable form.* F&S gesture at Pólya theory in
Note I.58 (p. 85) and §VII.5 "Unlabelled non-plane trees and Pólya operators" (which is in
Part B). **BLOCKER-adjacent:** de Bruijn's theorem (group acting on the range as well as the
domain, `Z(G) × Z(H)` pattern inventory) has **no open-access primary treatment among the
sources I obtained.** Do not scaffold it from memory; either defer it with a written reason,
or source it before authoring. Reasonable scaffolding: cover Burnside → cycle index →
Redfield–Pólya from Sagan §6.2–6.4 + Cameron §7, and record de Bruijn as `deferred` for
want of a source.

## C12. q-analogues

**Gaussian binomial coefficients.** Definitions agree across sources:
`[n k]_q = ((1−q^n)(1−q^{n−1})⋯(1−q^{n−k+1})) / ((1−q)(1−q^2)⋯(1−q^k))`.
**Sagan Theorem 3.2.6:** *"If `V` is a vector space over `F_q` of dimension `n`, then"* the
number of k-dimensional subspaces is `[n k]_q` — same as **Stanley Proposition 1.7.2**.
Stanley §1.3/§1.7 also gives the two statistic interpretations: `Σ_{w∈S_n} q^{inv(w)} = [n]_q!`
(Corollary 1.3.13) and the multiset/lattice-path interpretation of `[n k]_q`.

**The q-binomial theorem — two inequivalent statements in the literature, both harvested.**
*Stanley EC1 equation (1.87)*, the **finite/terminating** form:
```
∏_{i=0}^{j−1} (1 + x q^i) = Σ_{k=0}^{j} x^k q^{C(k,2)} [j k]_q
```
with Stanley's own gloss: *"Equation (1.87) is known as the q-binomial theorem, since setting
`q = 1` gives the usual binomial theorem. It is a good illustration of the difficulty of writing
down a q-analogue of an identity by inspection; it is difficult to predict without any prior
insight why the factor `q^{C(k,2)}` appears."* He gives **two proofs**: a partition-counting
proof (from Proposition 1.8.6(c)) and a **finite-field proof** (regard q as a prime power,
count subspaces via row-reduced echelon form) — and notes *"a straightforward induction on j"*
also works.
*Cameron Theorem 5.7*, the same statement in his indexing:
`∏_{i=1}^{n}(1 + q^{i−1}z) = Σ_{k=0}^{n} q^{k(k−1)/2} z^k [n k]_q`, proved by **induction on n**
using the "alternative recurrence relation" `[n k]_q = [n−1 k]_q + q^{n−k}[n−1 k−1]_q`.
Cameron additionally records **Heine's formula**, *"the q-analogue of the negative binomial
theorem"*: `∏_{i=1}^{n}(1 − q^{i−1}z)^{−1} = Σ_{j≥0} [n+j−1 j]_q z^j` — stated without proof.

**What is purely formal here: all of it.** Both the terminating q-binomial theorem and Heine's
formula are identities in `Z[q][[z]]` / `Z[[q,z]]`; the finite products are finite, and the
infinite sum in Heine's formula converges in the formal topology since the `z`-valuation of the
`j`-th term is `j`. The **non-terminating** q-binomial theorem (Cauchy's
`Σ_n ((a;q)_n/(q;q)_n) z^n = (az;q)_∞/(z;q)_∞`) is also formal in `z`, but requires care and is
not stated in any source I obtained — do not scaffold it from memory.

Companion: **Cameron §5.1–5.3** for definition/interpretations/combinatorial properties;
**Stanley §1.10 "Two q-analogues of permutations"** for the deeper `GL(n,q)` material.

## C13. Species (Joyal; Bergeron–Labelle–Leroux)

**Is there an open-access treatment? YES — Cameron §8 "Species" (S5), pp. 45–50.** This is the
single most useful find of the harvest for this topic, because BLL is not open access (see §F).

Cameron's development, faithfully:
- *§8.1 "What is a species?"* — *"A species is a functor F … which takes an n-element set and
  produces the set of objects in which we are interested; it should also have the property that
  the functor transforms any bijection between n-element sets A and B to a bijection between
  the sets F(A) and F(B) of objects built on these sets."* Joyal's intuition:
  `F = Σ_{n≥0} F({1,…,n}) x^n`, a "power series where the coefficients are not numbers, but
  sets of combinatorial objects".
- The **cycle index** `Z(F)` is the sum of the cycle indices of the automorphism groups of the
  unlabelled structures; the two specialisations
  `f(x) = Z(F; s_n ← x^n for all n)` and `F(x) = Z(F; s_1 ← x, s_n ← 0 for n > 1)`
  give the **ordinary** GF for unlabelled structures and the **exponential** GF for labelled
  structures respectively. *This is the single formula that unifies C1 and C2.*
- *§8.2 "Examples"* — `Set` with `Z(Set) = exp(Σ_{i≥1} s_i/i)`, giving `set(x) = 1/(1−x)` and
  `Set(x) = exp(x)`; `Lin` with `Z(Lin) = 1/(1−s_1)`.
- *§8.3 "Operations on species"* — **Sum** (disjoint), **Product** (partition `A` into `B ⊎ C`,
  put an `F`-object on `B` and a `G`-object on `C`; cycle indices multiply), **Substitution**
  (`F[G]` requires `G(∅) = ∅`; partition `A` into non-empty parts, put a `G`-structure on each
  part and an `F`-structure on the set of parts), with the cycle-index rule
  `Z(F[G]) = Z(F : s_n ← Z(G, s_m ← s_{nm}))`, and the two GF consequences
  `F[G](x) = F(G(x))` (labelled) and `fg(x) = Z(F; s_n ← g(x^n))` (unlabelled).
  **Rooting**: apply `s_1 ∂/∂s_1` to the cycle index and `x d/dx` to the labelled GF;
  rooting-then-deleting is differentiation.
- Worked identities available as scaffolding targets: `Set[Set*] = ` set partitions,
  `Set[Circ] = Perm`, `Graph = Set[ConnGraph]`, `F = Set[Set_2]` (1-factors),
  `Cat = E + Cat^2`, `W = E + Set_2[W]` (Wedderburn–Etherington), and
  `Z(Circ) = −Σ_{m≥1}(φ(m)/m) log(1−s_m)`.
- **Cameron §10.2 "A proof using species"** proves Cayley's theorem this way, and **§10.4** is
  Lagrange inversion — so the notes carry a complete species→application arc.

**What a formal (non-analytic) development of species would need.** From the above:
(a) the category of finite sets and bijections, and functors out of it — so the library must
have a minimal category-theory vocabulary (category, functor, natural transformation) before a
faithful Joyal-style definition is possible; (b) the ring of symmetric functions / the
cycle-index ring `Q[[s_1, s_2, …]]` — note the **`Q`-coefficients again**, since `Z(Set)` has
`1/i` and `1/n!` factors; (c) formal power series and formal substitution (F&S A.5 /
Sagan §3.3). **No analysis whatsoever.** But (a) is a real prerequisite cost: if the library has
no category theory, Cameron's own *"I will take a more informal approach"* is the honest route,
and the scaffolder should either follow it (species as a bijection-respecting assignment) or
defer species until the category-theory track exists.
Cameron's own bibliographic judgement, verbatim: *"There is a book on species, by Bergeron,
Labelle and Leroux, entitled Combinatorial Species and Tree-Like Structures; but I think that
Joyal's original paper in Advances in Mathematics is hard to beat."*
F&S Note II.25 corroborates: *"(Joyal's 'theory of species' [359] and the book by Bergeron,
Labelle, and Leroux [50] show that a far-reaching theory of combinatorial enumeration can be
based on the concept of substitution.)"*

## C14. Sieve methods

**Inclusion–exclusion — Stanley EC1 Theorem 2.1.1**, and note that Stanley states it as a
statement about a **linear operator**, which is the version worth scaffolding:
> *"Let `S` be an n-set. Let `V` be the `2^n`-dimensional vector space (over some field K) of
> all functions `f : 2^S → K`. Let `φ : V → V` be the linear transformation defined by
> `φf(T) = Σ_{Y ⊇ T} f(Y)`, for all `T ⊆ S`. Then `φ^{−1}` exists and is given by
> `φ^{−1} f(T) = Σ_{Y ⊇ T} (−1)^{#(Y−T)} f(Y)`, for all `T ⊆ S`."*
Proof: define `ψ` by the second formula and compute `φψf(T)`, reducing to
`Σ_{Z ⊇ Y ⊇ T} (−1)^{#(Y−T)} = Σ_{i=0}^{m} (−1)^i C(m,i) = δ_{0m}` with `m = #(Z−T)`.
Then the combinatorial reading: `f_≥(T) = Σ_{Y⊇T} f_=(Y)` (2.3) inverts to the usual sieve.
Second treatment: **Sagan Theorem 2.1.1 (Principle of Inclusion and Exclusion, PIE)** with
**Theorem 2.1.2** (derangements) and **Corollary 2.1.3** (`→ 1/e`). Third: **Grinberg §2.9**
("The principles · The cancellation lemma · The proofs · Application: Surjections ·
Application: Derangements · Application: Euler's totient function"). Fourth:
**de Mier §2**; fifth: **Cameron §9.1**; sixth: **Wilf §4.2 "A generatingfunctionological view
of the sieve method"**. Six independent treatments — this is the best-covered topic in the
subject.

**Permutations with restricted position and rook polynomials — Stanley EC1 §2.3.**
`B ⊆ [n]×[n]` is a "board"; `r_k` = number of ways to place `k` non-attacking rooks on `B`;
`N_j` = number of `w ∈ S_n` with `#(B ∩ G(w)) = j` (`G(w)` = graph of `w`);
`N_n(x) = Σ_j N_j x^j`.
**2.3.1 Theorem:** `N_n(x) = Σ_{k=0}^{n} r_k (n−k)! (x−1)^k` (2.22), and in particular
`N_0 = N_n(0) = Σ_{k=0}^{n} (−1)^k r_k (n−k)!` (2.23).
**Stanley gives two proofs.** *First proof:* double count `C_k` = the number of pairs `(w, C)`
with `C` a k-subset of `B ∩ G(w)` — one way gives `Σ_j C(j,k) N_j`, the other gives
`r_k(n−k)!`; multiply by `y^k`, sum, put `y = x−1`. *Second proof:* a direct
placement/labelling argument valid for `x ∈ P`, extended by polynomiality.
Applications: **2.3.2 Example (Derangements revisted)**, **2.3.3 Example (Problème des
ménages)** with **2.3.4 Lemma** (choose k non-consecutive points from a cycle) and
**2.3.5 Corollary**.
**§2.4 "Ferrers Boards": 2.4.1 Theorem** — the factorisation theorem for the rook polynomial of
a Ferrers board of shape `(b_1,…,b_m)`; **2.4.3 Corollary** — rook-equivalence of Ferrers
boards; **2.4.4 Theorem** and **2.4.5 Corollary** (unique increasing representative).
**Permanents:** the connection is `N_0 = per(J − A_B)` for the 0/1 board matrix; Stanley
develops the sieve rather than permanent theory, so if the scaffold wants permanents it must
build them (this is a genuine gap in the harvested sources).

**The involution principle — Stanley §2.6**, with **2.6.1 Example** working the
`Y = {w : w(1) = 1}`, `Ỹ = {w : w has exactly one cycle}` case, and the geometric picture
(Figure 2.2: every component of Γ is either a cycle disjoint from `Fix(τ)` and `Fix(τ̃)`, or a
path with one endpoint in each). Independent and more explicitly named:
**Sagan §2.3 "The Garsia–Milne Involution Principle", Theorem 2.3.2**, with
**Lemma 2.3.1** (the digraph characterisation) and the application **Theorem 2.3.3 (Euler)**.
Also **Sagan §2.2 "Sign-reversing involutions", Lemma 2.2.1**: *"Consider `ι : S → S`. The
function `ι` is an involution if and only if S is the [disjoint union of fixed points and
2-element orbits]"*, and **Theorem 2.2.2**.

**Determinant evaluations.** Covered above: LGV (§C7 — Stanley 2.7.1 / Sagan 2.5.4), transfer
matrices (§C3 — Stanley 4.7.2, via the cofactor formula), plus **Sagan Theorem 2.6.3
(Cauchy–Binet Theorem)** and **Theorem 2.6.4 (Matrix-Tree Theorem)** and **Cameron §10.3**.
All are sign-reversing-involution or linear-algebra arguments; **none needs analysis.**

---

# D. Convention disagreements

## D1. Stirling numbers — notation AND signedness

| convention | source | meaning |
|---|---|---|
| `[n k]`, `{n k}` (Karamata–Knuth brackets/braces) | **F&S Appendix A.8**; Graham–Knuth–Patashnik | `[n k]` = **signless** first kind (permutations of size n with k cycles); `{n k}` = second kind |
| `c(n,k)` signless, `s(n,k) = (−1)^{n−k}c(n,k)` signed, `S(n,k)` second kind | **Stanley EC1 §1.3, §1.9** | Stanley keeps *both* first-kind variants in play and needs the signed one for Proposition 1.9.1 |
| `c(n,k)` signless / `S(n,k)` second kind | **Sagan §1.5, §1.4** | Sagan uses "signless Stirling numbers of the first kind" `c(n,k)` |
| `S(n,k)` second kind, first kind mostly avoided | **Cameron §1.2, de Mier §3.2** | |

**Which is more standard in the graduate literature: the `[n k]` / `{n k}` brackets.**
F&S say so outright — *"The notations `[n k]` and `{n k}` proposed by Knuth (himself
anticipated by Karamata) are nowadays most widespread"* — and the reason is substantive, not
fashion: the brackets are *unambiguously signless*, so they never force the reader to remember
a sign convention, and they typographically mirror `C(n,k)`, making the parallel recurrences
`[n k] = [n−1 k−1] + (n−1)[n−1 k]` and `{n k} = {n−1 k−1} + k{n−1 k}` legible at a glance.
**But note the trap:** the mutually-inverse-matrices theorem (Stanley 1.9.1) is a statement
about the **signed** first-kind numbers. `[S(n,k)]` and `[c(n,k)]` are *not* inverse; `S` and
`s` are. A scaffold that adopts the bracket notation must still introduce a signed symbol for
that theorem, or state it as `Σ_k (−1)^{k−n} S(m,k)[k n] = δ_{mn}`. **Recommendation:** adopt
`{n k}` and `[n k]` with an explicit remark that `[n k]` is signless and that the inversion
theorem carries the sign `(−1)^{n−k}`.

## D2. EGF normalisation and the labelled product

There is no real disagreement on `Σ a_n z^n/n!` — F&S, Stanley (§1.1), Sagan (§4.1), Wilf
(§2.3), Cameron (§1) and de Mier (§6) all use it. Two presentational splits worth recording:
- **Labelled product as an operation on *structures* (F&S `B ⋆ C`, via order-consistent
  relabelling) vs. as a *convolution identity* (Sagan Theorem 4.4.2, Wilf §2.3
  "The calculus of formal exponential generating functions").** F&S's is the more standard in
  the modern graduate literature because it is what makes `SET`, `CYC`, `SEQ` and the boxed
  product uniform; Sagan's/Wilf's requires re-deriving each rule.
- **Wilf's "cards, decks, hands" vocabulary (Ch. 3)** is idiosyncratic to that book. The
  literature standard is the `SET`/exponential-formula language. Do not adopt Wilf's terms.

## D3. "Composition" vs "weak composition"

| convention | source |
|---|---|
| **composition** = parts `≥ 1`; **weak composition** = parts `≥ 0` | **Grinberg §2.10** ("Compositions · Binary compositions · Weak compositions"), **Postnikov/Dillon §2.4** ("weak compositions of `n−1` into `n` parts") |
| **composition** of n = sequence of positive parts, no separate "weak" term used | **Sagan §1.7 "Compositions"** (Theorem 1.7.2 gives `C(n−1,k−1)`, so positive parts), **de Mier §1.3 "Multisets and integer compositions"** |
| F&S write `SEQ(SEQ_{≥1}(Z))` and speak of "integer compositions" (positive summands), handling the `≥0` case by an explicit construction rather than a name | **F&S §I.3.1 "Compositions and partitions"** |

**More standard in the graduate literature: composition = positive parts, weak composition =
nonnegative parts.** That is the pair Stanley EC1 uses, it is what Grinberg and Postnikov use,
and it is the only convention under which the two counts `C(n−1,k−1)` and `C(n+k−1,k−1)` can
both be quoted without ambiguity. **A scaffold must state which it means at first use** —
the twelvefold-way table (§C10) depends on it: the `indist./dist./surjective` cell is
`C(n−1,k−1)` (compositions) while the `indist./dist./arbitrary` cell is `C(n+k−1,n)`
(weak compositions).

## D4. Cycle-lemma orientation and the Lagrange normalisation

- **Orientation.** F&S Note I.47 cuts a "relaxed" path (ends at level `−1`, may go negative)
  **after its left-most minimum**, obtaining a standard Łukasiewicz path; `M_ν = ν L_ν`.
  Postnikov/Dillon §2.4 instead works with weak compositions and their **cyclic shifts**, and
  selects *"the leftmost one [of the lowest points] follows the i-th down step"*. These are the
  same lemma; the choice is left-most vs. right-most minimum, and each source must be internally
  consistent or the bijection is 1-to-`ν` in the wrong direction. **F&S's "left-most minimum"
  is the more common phrasing**; Dershowitz–Zaks ("The cycle lemma and some applications",
  F&S ref. [155]) is the standard citable source.
- **Lagrange normalisation.** F&S Theorem A.2 assumes `φ_0 ≠ 0`; **Wilf Theorem 5.1.1 assumes
  `φ(0) = 1`**; Postnikov Theorem 2.14 assumes `r_0 ≠ 0`. The `φ(0) = 1` normalisation is a
  strict specialisation (rescale `z`), so Wilf's statement is weaker as written.
  **`φ_0 ≠ 0` (F&S/Postnikov) is the standard graduate form** and should be the scaffolded one.
- **Which functional equation.** F&S/Postnikov state it as `y = zφ(y)`; Postnikov's Theorem 2.13
  and much of the complex-analysis literature state it as *compositional inverse of `f`*.
  Postnikov §2.2 proves the two forms equivalent explicitly (`f = t/R(t)` in one direction,
  `R(t) = 1/(f(t)/t)` in the other) — that equivalence proof is itself a good scaffolding target
  and closes a gap most sources leave implicit.

## D5. Burnside's lemma — the name

**Sagan calls it "Burnside's Lemma" (Lemma 6.2.1). Cameron calls it "The Orbit-Counting Lemma"
(§7.1).** The result is due to Cauchy and Frobenius, not Burnside — hence also
"Cauchy–Frobenius lemma". **In the graduate literature "Burnside's lemma" remains the most
recognisable label**, and Sagan (a research combinatorialist writing a graduate text in 2020)
uses it without hedging; but Cameron's "orbit-counting lemma" is the historically honest one
and is standard in the permutation-group community. **Recommendation:** title the item
"Burnside's lemma" for findability, and record the Cauchy–Frobenius attribution and the
"orbit-counting lemma" alias in a remark — do not silently pick one.
Similarly, Sagan titles the pattern-inventory theorem **"Redfield–Pólya Theorem"** (Theorem
6.4.2), crediting Redfield's independent 1927 discovery; much of the literature says "Pólya's
enumeration theorem". Both are defensible; "Redfield–Pólya" is the better-attributed modern form.

## D6. Gaussian binomial / q-binomial indexing

Stanley's (1.87) runs the product `∏_{i=0}^{j−1}(1+xq^i)` and Cameron's Theorem 5.7 runs
`∏_{i=1}^{n}(1+q^{i−1}z)` — **these are the same identity** with `(j,x) ↔ (n,z)`, but the
exponent conventions on `[n k]_q` differ elsewhere in the literature (some authors define
`[n k]_q` with `q^{k(n−k)}` normalisation, i.e. as the *centred* Gaussian coefficient). Sagan
Theorem 3.2.6 and Stanley Proposition 1.7.2 both fix it by the **subspace-counting
characterisation** (`[n k]_q` = number of k-dimensional subspaces of `F_q^n`), which is
convention-free once `q` is a prime power. **Recommendation: define `[n k]_q` by the explicit
quotient of `q`-integers and immediately state the subspace theorem as the sanity anchor** —
that makes any later convention drift detectable.

## D7. Twelvefold-way cell ordering

**Sagan's Table 1.1** puts `D` and `R` as rows (dist./indist. pairs) and
arbitrary/injective/surjective as columns — a `4 × 3` table.
**Stanley §1.9** and **Grinberg Ch. 3** use the transposed/`3 × 4` layout and Grinberg further
names the four domain/range regimes `LL`, `UL`, `LU`, `UU` (labelled/unlabelled).
**Neither ordering is more standard**; Rota's original presentation is a `3 × 4` grid.
The one thing that *is* substantive: **the "balls in boxes" reading is the inverse of the
"functions" reading** — `D` = balls, `R` = boxes, and a source that says "n balls into k boxes"
must be checked against `f : D → R` with `|D| = n`, `|R| = k`. Sagan's `|D| = n, |R| = k` and
the row order (dist./dist., indist./dist., dist./indist., indist./indist.) is the clearest of
the harvested layouts and is the one I recommend copying, **with the ball/box gloss stated
explicitly**.

---

# E. The analytic seam

This is the load-bearing section. The library's combinatorics track is formal-only in `R[[x]]`.

**Where F&S themselves put the seam.** The book's own architecture answers the question:
**Part A (Chapters I, II, III, pp. 13–220) is symbolic and formal; Part B (Chapters IV–VIII,
pp. 221–608) is complex asymptotics.** F&S's Preface, verbatim: *"a collection of general (and
simple) theorems provide a systematic translation mechanism between combinatorial constructions
and operations on generating functions. **This translation process is a purely formal one.**"*
And of Part B: *"Chapter IV serves as an introduction to complex-analytic methods."*
**Everything in Part A is scaffoldable formally. Nothing in Part B is.** The boundary is not
approximate — it is where the book itself cuts.

## E1. Results in range that CANNOT be proved without analysis

1. **Any asymptotic estimate.** `n! ~ n^n e^{−n}√(2πn)` (Stirling), `C_n ~ 4^n/√(πn^3)`,
   `T_n/n! ~ 2(2/π)^{n+1}`, `R_n ~ n!/(2(log 2)^{n+1})`, `S_n ~ …` (F&S (16), p. 109),
   `p(n) ~ e^{π√(2n/3)}/(4n√3)` (Hardy–Ramanujan; F&S §VIII.6 by saddle point). These are
   statements about limits of real sequences; they are not power-series identities and have no
   formal meaning. **All out of scope.**
2. **Every result in F&S Part B and Part C**, by construction: singularity analysis
   (Ch. VI), transfer theorems (VI.3), Pringsheim's theorem (IV.6), the exponential growth
   formula (IV.7), meromorphic expansion (IV.10), the saddle-point method (Ch. VIII), the
   supercritical sequence schema (V.2), the exp–log schema (VII.2), quasi-powers/Gaussian limit
   laws (IX.5). **Note the trap:** F&S §V.6 is called "Transfer matrix models" and §V.3
   "Regular specifications and languages" — a scaffolder who greps for "transfer matrix" in F&S
   lands in Part B and will import analysis. The *exact* transfer-matrix theory belongs to
   **Stanley §4.7** (§C3), which is formal.
3. **Wilf Chapter 5, §5.2–5.4** ("Analyticity and asymptotics (I): Poles", "(II): Algebraic
   singularities", "(III): Hayman's method") — and, as written, **Wilf §5.1 and F&S A.6, since
   both prove Lagrange inversion by the residue theorem.** But see E2(1): the *theorem* is
   formal even though *those two proofs* are not.
4. **Dobinski's formula** `B_n = (1/e) Σ_{ℓ≥0} ℓ^n/ℓ!` (§C8). Needs real analysis: the series
   `Σ_ℓ ℓ^n/ℓ!` must be summed, and the manipulation `e^{e^z} = Σ_ℓ e^{ℓz}/ℓ!` is illegal in
   `R[[z]]` for exactly the reason Stanley's **Example 1.1.7** gives. **Out of scope for a
   formal track**, or in scope only if the library has a real-analysis track to lean on. Note
   this is *not* complex analysis — a Poisson-moment proof is elementary — so it is a
   "cross-track dependency", not a hard seam.
5. **Corollary 2.1.3 in Sagan** (`the probability that no man gets his hat back → 1/e`) — a
   limit statement. The exact derangement formula `D(n) = n! Σ_{i=0}^{n}(−1)^i/i!` (Stanley
   (1.1), Sagan Theorem 2.1.2) is finite and formal; only the limit is analytic.
6. **Rogers–Ramanujan is NOT on this list**, but flag it anyway: it is a formal `q`-series
   identity, provable in `Z[[q]]`, but by Stanley's own testimony (§C9) no *simple* bijective
   proof exists and the standard routes need `q`-difference equations or Bailey pairs. It is
   expensive, not analytic.

## E2. Results a reader might assume need analysis but which have purely formal proofs

This list is the actionable one.

1. **LAGRANGE INVERSION.** Both F&S (Theorem A.2) and Wilf (Theorem 5.1.1) prove it with
   Cauchy's coefficient formula and a conformal-mapping argument, and F&S call it
   *"altogether non-elementary"*. **A reader would reasonably conclude it needs complex
   analysis. It does not.** **Postnikov/Dillon Theorem 2.14 and §2.4** give a complete
   combinatorial proof (cyclic-shift classes of weak compositions + the plane-tree ↔
   modified-Dyck-path weight-preserving bijection), and state the point explicitly: *"It turns
   out the same is true if you remove the condition of analyticity, and it's easier to prove,
   because you don't need any complex analysis."* F&S corroborate the existence of such proofs
   (Note under A.2: *"combinatorial proofs based on … the 'cyclic lemma' or 'conjugacy
   principle' … logically equivalent to the Lagrange Inversion Theorem, as shown by Raney"*).
   **This is the most consequential finding in §E: Lagrange inversion is in scope, but only if
   the scaffold takes Postnikov's route and not F&S's or Wilf's.** The extension
   `[x^n]f(x)^k = (k/n)[t^{n−k}]R(t)^n` (Postnikov Theorem 2.26) comes free.
2. **The entire admissible-construction table, OGF and EGF** (§C1, §C2). The `exp`, `log`,
   `1/(1−f)` and infinite products/sums that appear look analytic and are not: they are defined
   by the **formal topology of F&S Appendix A.5** (valuation `val(f)`, distance `2^{−val(f−g)}`,
   `K[[z]]` a complete ultrametric space) or equivalently by **Stanley Propositions 1.1.8/1.1.9**
   (`Σ F_j` converges iff `deg F_j → ∞`; `∏(1+G_j)` converges iff `deg G_j → ∞`) or
   **Sagan Theorems 3.3.2/3.3.3/3.3.4** (`mdeg f_k → ∞`). **Any one of these three gives the
   library a complete, citable foundation for formal convergence.** Sagan's is the most
   explicitly written-out for a student; F&S A.5 is the most compact; Stanley's is embedded in
   §1.1 with the useful cautionary Examples 1.1.6/1.1.7 marking exactly what is *not* legal.
3. **The pentagonal number theorem** (§C9). An identity of infinite products and infinite
   series that looks like it wants convergence; Franklin's involution proves it by pure
   bijection. Formal.
4. **The Jacobi triple product identity** (§C9). Same appearance, same verdict — Cameron
   Theorem 5.8's Borcherds-style state-counting proof is finite. (Cameron even pauses to
   justify the formal legitimacy of the two-sided Laurent series.)
5. **All of Euler's partition product identities** (Stanley Proposition 1.8.1 / Corollary 1.8.2,
   Proposition 1.8.4, Proposition 1.8.5, Proposition 1.8.6, Sagan §3.5, Theorem 3.5.6).
   Infinite products, purely formal by 1.1.9.
6. **The rational-GF ⟺ linear-recurrence theorem** (§C5). Partial fractions look analytic
   (they are usually taught in a calculus context); Stanley's proof is a **dimension count of
   four vector spaces** and Sagan's is algebraic partial-fraction expansion. Formal, over a
   field containing the roots.
7. **The transfer-matrix theorem** (§C3). `(I − λA)^{−1} = Σ λ^n A^n` reads like a Neumann
   series with a spectral-radius hypothesis; formally it is just invertibility in
   `M_p(K[[λ]])`, valid because `λA` has positive valuation. **No spectral radius, no
   convergence condition.** (Only Corollary 4.7.3's eigenvalue form touches algebraic closure.)
8. **The exponential formula** (§C2). `e^{F(x)}` is a formal exponential of a series with zero
   constant term; Sagan Theorem 4.5.1's proof is a two-line combinatorial argument.
9. **The q-binomial theorem and Heine's formula** (§C12), and **Gaussian binomial identities**.
10. **LGV, the involution principle, sign-reversing involutions, the reflection principle,
    Burnside, cycle index, Redfield–Pólya, inclusion–exclusion, Möbius inversion, rook
    polynomials, Stirling inversion, the twelvefold way** — all finite combinatorics or linear
    algebra. **The entire §C6, §C7, §C8 (except Dobinski), §C10, §C11, §C14 are in scope.**
11. **Species** (§C13). The cycle-index ring is a formal power series ring in infinitely many
    variables; nothing analytic. The prerequisite cost is *category theory*, not analysis.

## E3. Practical seam summary for the scaffolder

| in scope, formal | out of scope (needs analysis) |
|---|---|
| F&S **Part A entire** (Ch. I, II, III) + **Appendix A.1, A.4, A.5, A.7, A.8** | F&S **Parts B and C entire**; Appendix A.2 (asymptotic notations), A.3 partially; Appendix B |
| Stanley EC1 **Ch. 1 (except limit remarks), Ch. 2 entire, Ch. 3 entire, Ch. 4 entire** | Stanley's asymptotic asides (e.g. `f(n) ~ e^{−2}6^{−n}(3n)!` in Example 1.1.3) |
| Sagan **Ch. 1–8 essentially entire** | Sagan Corollary 2.1.3 (the `1/e` limit) |
| Wilf **Ch. 1, 2 (except §2.4 "Power series, analytic theory"), Ch. 3, Ch. 4** | Wilf **§2.4, Ch. 5** — including §5.1 *as proved there* |
| Cameron **§1–4, 5, 6, 7, 8, 9, 10.1–10.4** | Cameron **§10.5 "Stirling's formula"** |
| Postnikov/Dillon **Ch. 1, 2, 3, 5** (and 4, 6, 7 if the library reaches polytopes/matroids) | — (these notes are essentially analysis-free) |
| de Mier **entire**; Grinberg **entire** | — |

**One-sentence version:** *the seam runs exactly along F&S's Part A / Part B boundary, with two
adjustments — Lagrange inversion sits on the formal side despite F&S and Wilf proving it
analytically (take Postnikov's proof), and Dobinski's formula sits on the analytic side despite
looking like an ordinary Bell-number identity.*

---

# F. Blockers

1. **`https://algo.inria.fr/flajolet/Publications/AnaCombi/anacombi.pdf` — 404.** The path given
   in the assignment does not exist. Resolved: `https://ac.cs.princeton.edu/home/AC.pdf`
   (200 OK, `application/pdf`, 11,364,619 bytes, 824 pp.) serves the full book; so does
   `https://algo.inria.fr/flajolet/Publications/book.pdf` (200 OK, 12,141,468 bytes).
   `https://algo.inria.fr/flajolet/Publications/AnaCombi/anacombi1.pdf` also 404s.
   **Not a blocker — the book was obtained in full.**
2. **Bergeron–Labelle–Leroux, *Combinatorial Species and Tree-like Structures* — NOT open
   access.** Published by CUP (Encyclopedia of Mathematics and its Applications 67, 1998); no
   author-hosted or publisher-hosted free full text found. The French predecessor
   (*Théorie des espèces et combinatoire des structures arborescentes*, LaCIM 1994) was also not
   locatable as open access. **Mitigation: Cameron §8 (S5) is a genuine open-access species
   treatment** and is what §C13 is built on. Secondary open-access material exists on arXiv
   (`arXiv:1312.0542` "Combinatorial species and graph enumeration";
   `arXiv:math/0512052` "An introduction to q-species"; `arXiv:2305.05059`) but I did not read
   these — a scaffolder wanting more species depth should read them before authoring.
   Joyal's original 1981 *Advances in Mathematics* paper was not retrieved.
3. **de Bruijn's generalisation of Pólya enumeration — NO SOURCE OBTAINED.** Not in Sagan,
   Cameron, Wilf, Stanley EC1, F&S Part A, de Mier, Postnikov, or Grinberg. See §C11.
   **Do not scaffold it from memory.** Either defer with a written reason or find a source first.
4. **Permanent theory** (beyond the rook-polynomial connection) — Stanley §2.3–2.4 develops
   rook polynomials but not permanents as such; no harvested source gives a permanent-theoretic
   development. Minor gap; the sieve results do not depend on it.
5. **Bóna, both books — TOC only, no full text.** Neither *A Walk Through Combinatorics* nor
   *Introduction to Enumerative and Analytic Combinatorics* has an author-hosted or otherwise
   legitimately open full text. Chapter lists in §B9 are from publisher and aggregator pages and
   are **not** verified against the books themselves; the *Walk* chapter titles for Ch. 6–8 in
   particular should be re-checked before being quoted anywhere load-bearing. Neither book is
   needed — S1–S8 cover the subject — so this is recorded, not escalated.
6. **Grinberg (S8) — TOC extracted from the PDF outline; body sampled, not read end to end.**
   564 pages; the outline in §B8 is complete and verbatim, but I did not verify every section's
   contents against its heading. Treat §B8 as a reliable *structure* harvest and an unverified
   *content* harvest. Grinberg is exceptionally careful about hypotheses (his §1.6.3 is
   literally "A cautionary tale about infinite sums"), so it is a good place to check a
   formal-convergence subtlety, but a scaffolder should open the relevant section rather than
   trust the heading.
7. **The MIT OCW 18.212 / Berkeley Math 172 (Haiman) / Cambridge Part II / Zhao 18.225
   candidates were not pursued**, because four independent lecture-note sets (S5, S6, S7, S8)
   with harvestable TOCs were already obtained and read, exceeding the "at least three"
   requirement. Andrews' *The Theory of Partitions*, Aigner's *A Course in Enumeration*, and
   Loehr's *Bijective Combinatorics* were likewise not pursued; **Andrews is the obvious source
   to add if the scaffold decides to attempt Rogers–Ramanujan** (§C9), since none of the
   obtained sources proves it.
