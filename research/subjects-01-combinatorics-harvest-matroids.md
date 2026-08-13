# subjects-01 · combinatorics lane — MATROID THEORY source harvest

Research-only artifact. Written by the source-research subagent for the `combinatorics`
scaffolder lane of run `subjects-01`. No scaffold file, no `items/`, no `library/`, no
`plan-spec.json` was touched.

Harvest date: 2026-08-13. Researcher: Claude Opus 5, xhigh.

**Purpose.** The existing combinatorics harvests (Diestel, Zhao, West, Bondy–Murty,
Bollobás, Schrijver-graph-chapters) contain no matroid treatment deep enough to back an
A/B pair. This file supplies that backing and the mathematical detail needed to scaffold
one or two graduate-level matroid pairs.

**Headline results of the harvest.**

1. **Six independent treatments obtained in full text** (S1–S4, S7, S8; 45 + 26 + 61 + 42 +
   90 + 88 pp), five of them with complete proofs, plus four tables of contents (S5, S6,
   S9, S10) used only as structure checks. Every pair proposed in §G has at least three
   proof-bearing sources.
2. **The library already owns every prerequisite the core theory needs** — including
   **König's theorem** (`thm-konig-bipartite-matching-cover`), which is what makes Edmonds'
   matroid intersection theorem reachable rather than aspirational, and
   `lem-symmetric-difference-of-two-matchings`, which halves the cost of the transversal
   matroid.
3. **There is no matroid content in the library at all** (`ls items/ | grep -i matroid` is
   empty across 4172 items), so the whole subject is greenfield and nothing is retrofitted.
4. **The sources disagree about the order of matroid union and matroid intersection** —
   Schrijver derives union from intersection, Waterloo derives intersection from union.
   §C.11 tables the trade-off. This is the single most consequential scaffolding choice in
   the harvest and it must be made deliberately.
5. **Two of the brief's target results are out of reach and one is half in reach:** Whitney's
   2-isomorphism theorem is [C]; the converse half of Whitney's planarity criterion is [C]
   (source-confirmed, §C.7g); the forward half is [B]. Everything else the brief named is
   provable, and §C gives the step counts.

---

## A. Source ledger

| # | Source | Working URL | Form obtained | Exact range read |
|---|---|---|---|---|
| S1 | Oxley, *What is a matroid?* (rev. 31 Oct 2014) | `https://www.math.lsu.edu/~oxley/survey4.pdf` | **full-text**, 45 pp | §1–§7 **in full** (pp. 1–45), i.e. the entire paper |
| S2 | Schrijver, *A Course in Combinatorial Optimization* (23 Mar 2017) | `https://homepages.cwi.nl/~lex/files/dict.pdf` | **full-text**, 221 pp | **Ch. 10 "Matroids" in full, pp. 173–198** (§10.1–§10.7, Theorems 10.1–10.17, Exercises 10.1–10.41); front-matter Contents pp. 2–4 |
| S3 | Reiner, *Lectures on Matroids and Oriented Matroids* (ACE Summer School, Vienna, July 2005) | `https://www-users.cse.umn.edu/~reiner/Talks/Vienna05/Lectures.pdf` | **full-text**, 61 pp | Lecture 1 (§1.1–§1.10), Lecture 2 (§2.1–§2.5), Lecture 3 (§3.1–§3.4), Lecture 4, Problems §5.1–§5.3 — read in full; oriented-matroid-only subsections skimmed |
| S4 | Ellis-Monaghan & Merino, *Graph Polynomials and Their Applications I: The Tutte Polynomial*, arXiv:0803.3079v2 (28 Jun 2008) | `https://arxiv.org/pdf/0803.3079` | **full-text**, 42 pp | §1–§9 **in full**; §2–§4 and §6.1, §6.5 read line-by-line |
| S5 | Oxley, *Matroid Theory*, 2nd ed., Oxford 2011 — **in copyright** | GBV contents scan, `gbv-oxley-toc.pdf` (3 pp) | **toc** (chapter + section titles with page numbers) | full table of contents, pp. 1–668 mapped |
| S6 | Gordon & McNulty, *Matroids: A Geometric Introduction*, Cambridge 2012 — **in copyright** | GBV contents scan for ISBN 9780521145688 | **toc** (chapter level only, supplied by Blackwell's/Bowker) | chapter titles only |
| S7 | **CO 446 Matroid Theory**, University of Waterloo, typeset by Kevin Matthews, Spring 2015 | `https://csclub.uwaterloo.ca/~krmatthe/CO/446/1.pdf` | **full-text**, 90 pp | §1.1–§1.21, §4.1–§4.8, §6.1–§6.6 read in full; §2–§3 (extremal/Ramsey) and §5 (connectivity), §7 (Seymour) read at heading + statement level |
| S8 | **MAS480A Matroid Theory**, KAIST, lectures by Sang-il Oum, notes by Donggyu Kim, Fall 2019 | `https://mathsci.kaist.ac.kr/~dgkim/Lecture_note_on_MAS480A_Matroid_Theory%20(lastly%20updated%20in%202019.12.14).pdf` | **full-text**, 88 pp | Weeks 01–06 (Ch. 1–2: axioms, cryptomorphisms, circuits, bases, rank, closure, flats, greedy) read in full; Weeks 07–15 at heading level |
| S9 | Whitney, *On the Abstract Properties of Linear Dependence*, Amer. J. Math. **57** (1935) 509–533 | JSTOR scan, `https://graal.ens-lyon.fr/~abenoit/algo09/matroids.pdf` | **full-text**, 26 pp (24 article + 2 cover) | consulted for the original axioms and terminology only |
| S10 | Schrijver, *Combinatorial Optimization: Polyhedra and Efficiency* (Springer 2003) — **in copyright** | author's front matter, `https://homepages.cwi.nl/~lex/files/book.pdf` | **toc** (sub-section granularity, with page numbers) | Part IV "Matroids and Submodular Functions", Ch. 39–42 |

### A.1 Which of these can be a pair's *primary backing*

Under `CLAUDE.md` §"Source depth and the canonical-coverage harvest", a pair needs **at
least two independent treatments, at least one a textbook / monograph / full lecture-note
set with a harvestable table of contents.**

- **S2 (Schrijver) is a full lecture-note set / course book with a genuine table of
  contents and complete proofs.** It qualifies as primary backing on its own.
- **S3 (Reiner) is a full lecture-note set** (ACE summer school, 4 lectures + problem
  sets) with a harvestable section structure. It qualifies as primary backing, with the
  caveat below.
- **S1 (Oxley) is a survey, not a textbook**, but it is a 45-page survey by the author of
  the standard monograph, it carries **complete proofs for a substantial subset** of what
  it states, and it has its own numbered-result structure. Treat it as a **primary
  treatment for the results it actually proves** and as a statement-level source (with
  pointer into Oxley's book) for the rest. §C marks which is which, per result.
- **S4 (Ellis-Monaghan & Merino) is a full survey chapter with complete proofs and a real
  section structure**, and it is the *only* source in this harvest that develops the Tutte
  polynomial at length. It qualifies as primary backing for the Tutte block. It is
  **graph-centric rather than matroid-centric** — which is a feature for the chromatic and
  reliability specialisations and a limitation for the matroid-level statements, where
  Reiner (S3) supplies the matroid generalisation.
- **S7 (Waterloo CO 446, 90 pp) and S8 (KAIST MAS480A, 88 pp) are full graduate course
  note sets with harvestable structure and complete proofs.** Either one satisfies the
  textbook/monograph/full-lecture-note-set requirement on its own. S7 is the strongest
  single source in the harvest for Pair 1 and for the optimization block, because it is the
  only source that develops **both** the foundations and matroid union/intersection with
  proofs; S8 is the best model for the *organisation* of the axiom-equivalence block.
- **S5, S6 and S10 are `toc` only** and are used in §B.6 purely to check that the scaffold's
  topic selection matches how the canonical monographs organise the subject. **None may be
  a pair's backing** and none is cited for any mathematical content.
- **S9 (Whitney 1935)** is the founding paper, consulted only for the original axioms and
  terminology. It is a historical citation, not backing.

None of these is Wikipedia or an encyclopedia entry, so the tiebreaker restriction does
not bite.

**Coverage complementarity — this matters for the scaffold.** The three sources overlap
much less than their titles suggest:

| topic | S1 Oxley | S2 Schrijver | S3 Reiner | S4 Ellis-Monaghan–Merino |
|---|---|---|---|---|
| axiom systems + equivalence | states, proof deferred to book | **full proof** (Thm 10.2) | states, defers to exercise | not covered |
| duality | states (Thm 3.4), proof deferred | **full proof** (Cor 10.2a, Thm 10.3) | develops (§2.1.4) | graph duality only (§2.0.4) |
| minors | **full proofs** (3.17–3.20) | brief (§10.2) | develops (§2.1.2–§2.1.3) | graph minors (§2.0.2) |
| greedy / Rado–Edmonds | **full proof both directions** (4.7, 4.8) | **full proof** (Thm 10.1) | sketch (§1.7) | not covered |
| transversal matroids | **full proof** (Thm 4.1) | states (§10.3, Thm 10.5) | mentions | not covered |
| matroid intersection | not covered | **full development** §10.4–§10.5 | not covered | not covered |
| matroid union / packing | Exercise 3.12 only | **Exercises 10.27–10.32** (statements + hints) | not covered | not covered |
| representability / excluded minors | **the core of the paper**, §5–§6 | not covered | §2.3 states | not covered |
| Tutte polynomial: definitions | not covered | not covered | one (corank–nullity), §3.1 | **three, with proofs of equivalence** (§3.1–§3.3) |
| Tutte: universality / recipe | not covered | not covered | Prop 28 (matroid form) | **Thms 1, 2 (graph form, full)** (§4) |
| Tutte: chromatic / flow / reliability | not covered | not covered | states (§3.1.3, §3.1.8) | **full proofs** (§6.1, §6.3, §6.5) |
| Whitney 2-isomorphism | not covered | not covered | states (Thm 23) | not covered |

So: **Oxley + Schrijver** back a foundations pair and an optimization pair;
**Reiner + Ellis-Monaghan–Merino + Oxley §5** back a representability-and-invariants pair.
**No pair rests on a single source**, and the Tutte block — which before S4 rested on
Reiner alone and would have failed the two-treatments rule — is now properly backed.

### A.2 Sources deliberately *not* used as backing

- **Oxley, *Matroid Theory*, 2nd ed. (Oxford 2011)** — in copyright, full text not
  obtained. S1 cites it throughout as `[34]` with precise theorem numbers, and those
  pointers are recorded in §C wherever S1 defers a proof to it. Those pointers are
  **provenance for "this result is standard and its proof lives at X"**, not a substitute
  for a proof the library must supply itself.
- **Wikipedia / Encyclopedia of Mathematics** — not consulted as backing. Where §D
  records a convention, the convention is read off S1/S2/S3 directly.

---

## B. The canonical-coverage harvest

Verbatim section and named-result headings, each source in its own numbering. Every
heading below was read off the extracted text of the PDF, not from memory.

### B.1 Oxley, *What is a matroid?* — complete enumeration of §1–§7

Sections:

```
1. Introduction
2. The Definition and Some Examples
3. Circuits, Bases, Duals, and Minors
4. Matroids and Combinatorial Optimization
5. Excluded-minor Theorems
6. Decomposition of regular matroids
7. Conclusion
```

Named / numbered results, verbatim opening text (Oxley numbers *every* item —
Examples, Exercises, Questions and Theorems share one counter):

**§2. The Definition and Some Examples**
```
2.1.  Example.    Consider the matrix A = ...
2.2.  Exercise.   Show that if I is a non-empty hereditary set of subsets of a finite set E,
                  then (E,I) is a matroid if and only if, for all X ⊆ E, all maximal members
                  of {I : I ∈ I and I ⊆ X} have the same number of elements.
2.3.  Example.    If E = ∅, then there is exactly one matroid on E ...
2.4.  Exercise.   Let E = {1,2,3}. (i) Show that there are exactly eight non-isomorphic
                  matroids on E. (ii) How many non-isomorphic matroids are there on a
                  4-element set?
2.5.  Example.    Let E be an n-element set and, for an integer r with 0 ≤ r ≤ n, let I be
                  the collection of subsets of E with at most r elements. [uniform matroid U_{r,n}]
2.6.  Theorem.    Let A be a matrix over a field F. Let E be the set of column labels ...
2.7.  Question.   Is every matroid representable over some field?
2.8.  Proposition. The matroid U_{2,4} is not binary but is ternary.
2.9.  Exercise.   Show that ...
2.10. Question.   Which matroids are regular, that is, representable over every field?
2.11. Question.   Which matroids are binary?
2.12. Question.   Which matroids are ternary?
2.13. Exercise.   Show that the set I just defined coincides with the set of ...
2.14. Exercise.   Use a graph-theoretic argument to show that if G is a graph, ...
2.15. Question.   Which matroids are graphic?
2.16. Theorem.    Let G be a graph and A_G be its vertex-edge incidence matrix ...
2.17. Exercise.   For a graph G, let A' ...
2.18. Exercise.   Find 8 graphs each with 3 edges such that the associated ...
2.19. Theorem.    The number b(n) of non-isomorphic binary matroids on an ...
```

**§3. Circuits, Bases, Duals, and Minors**
```
3.1.  Theorem.    Let M be a matroid and C be its collection of circuits. Then C satisfies
                  (C1)–(C3). Conversely, suppose C is the collection of subsets of a finite
                  set E satisfying (C1)–(C3) and let I be those subsets of E that contain no
                  member of C. Then (E,I) is a matroid having C as its collection of circuits.
3.2.  Theorem.    Let B be a set of subsets of a finite set E. Then B is the collection of
                  bases of a matroid on E if and only if B satisfies (B1) and (B2).
3.3.  Proposition. Let G be a graph with edge set E(G). Then the set of bonds of G is the
                  set of circuits of a matroid on E(G).
3.4.  Theorem.    Let M be a matroid on a set E and B be the collection of bases of M. Let
                  B* = {E − B : B ∈ B}. Then B* is the collection of bases of a matroid M* on E.
3.5.              (M*)* = M.
3.6.              (M(G))* = M*(G).
3.7.              (U_{r,n})* ≅ U_{n−r,n}.
3.8.  Exercise.   A matroid is self-dual if it is isomorphic to its dual. ...
3.9.  Theorem.    Let M be a matroid. (i) A set C* is a cocircuit of M if and only if C* is a
                  minimal set having non-empty intersection with every basis of M.
                  (ii) A set B is a basis of M if and only if B is a minimal set having
                  non-empty intersection with every cocircuit of M.
3.10. Theorem.    The following statements are equivalent for a matroid M with ground set E.
                  (i) Player C plays first and player B can win against all possible
                  strategies of C. (ii) The matroid M has 2 disjoint bases.
                  (iii) For all subsets X of E, |X| ≥ 2(r(M) − r(M\X)).
3.11. Corollary.  The following statements are equivalent for a connected graph G. ...
                  (ii) The graph G has 2 edge-disjoint spanning trees. (iii) For all
                  partitions π of the vertex set of G, the number of edges of G that join
                  vertices in different classes of the partition is at least 2(|π| − 1).
3.12. Exercise.   Let (E,I_1) and (E,I_2) be matroids M_1 and M_2. (i) Show that (E,I) is a
                  matroid where I = {I_1 ∪ I_2 : I_1 ∈ I_1, I_2 ∈ I_2}. This matroid is the
                  union M_1 ∨ M_2 of M_1 and M_2. ...
3.13.             For a matroid M on an n-element set, r(M) + r(M*) = n.
3.14. Lemma.      Suppose that the entries of a matrix A are taken from a field F. Then M[A]
                  remains unaltered by performing any of the following operations on A. ...
3.15. Theorem.    Let M be an n-element matroid that is representable over a field F. Then M*
                  is representable over F. Indeed, if M = M[I_r|D], then M* = [−D^T|I_{n−r}].
3.16. Exercise.   Using the facts that a matroid is determined by its set of bases ...
3.17.             M\e\f = M\f\e;  M/e/f = M/f/e;  and  M\e/f = M/f\e.
3.18. Proposition. Let M be a matroid on a set E and let T be a subset of E. Then M\T and
                  M/T are matroids on E − T. Moreover, for a subset X of E − T, (i)–(vi) ...
3.19.             M*/T = (M\T)*  and  M*\T = (M/T)*.
3.20. Theorem.    The classes of uniform, graphic, and cographic matroids are minor-closed.
                  Moreover, for all fields F, the class of F-representable matroids is
                  minor-closed. In particular, the classes of binary and ternary matroids
                  are minor-closed.
3.21. Proposition. Let M_1 and M_2 be the matroids (E_1,I_1) and (E_2,I_2) ... [direct sum]
3.23. Proposition. The unique excluded minor for the class U is U_{0,1} ⊕ U_{1,1}.
3.24. Exercise.   Let M be a rank-r matroid. ...
3.25. Question.   What is the collection of excluded minors for the class of ...
3.26. Theorem.    The following statements are equivalent for a matroid M. [binary characterisations]
3.27. Exercise.   In the last theorem, show that (i) implies (ii).
3.28. Question.   What is the collection of excluded minors for the class of ...
3.29. Conjecture. For every finite field GF(q), the collection of excluded minors for the
                  class of GF(q)-representable matroids is finite. [Rota's conjecture]
```
*(Oxley's counter skips 3.22 in the source text; recorded as-is.)*

**§4. Matroids and Combinatorial Optimization**
```
4.1. Theorem.     Let A be a collection of subsets of a finite set E. Let I be the collection
                  of all partial transversals of A. Then (E,I) is a matroid.
4.2. Theorem.     Let A be a family (A_1,...,A_m) of subsets of a finite set E. Then the rank
                  of M[A] is min{|∪_{j∈J} A_j| − |J| + m : J ⊆ {1,...,m}}.
4.3. Example.     Consider the graphs G_1 and G_1/7 shown in Figure 5. ...
4.4. Exercise.    Show that (i) every uniform matroid is transversal; (ii) M(K_4) is not
                  transversal.
4.5. Theorem.     Let G be a graph and I be the set of subsets X of V(G) such that G has a
                  matching whose set of endpoints contains X. Then (V(G),I) is a matroid.
4.6. The Greedy Algorithm.
4.7. Lemma.       When the Greedy Algorithm is applied to M, the set B_G it produces is a
                  maximum-weight independent set and hence a maximum-weight basis of M.
4.8. Theorem.     Let I be a collection of subsets of a finite set E. Then (E,I) is a matroid
                  if and only if I satisfies (I1), (I2), and (G) for all positive real weight
                  functions w on E, the Greedy Algorithm produces a maximum-weight member of I.
```

**§5. Excluded-minor Theorems**
```
5.1.  Exercise.   Show that we get a matroid on E having as its independent ...
5.2.  Lemma.      If M is a binary matroid with ground set E and a basis B, then M is uniquely
                  determined by B and the set of circuits C(e,B) such that e ∈ E − B.
5.3.  Proposition. Let F be a field. (i) F_7 is F-representable if and only if the
                  characteristic of F is two; and (ii) F_7^- is F-representable if and only
                  if the characteristic of F is not two.
5.4.  Corollary.  The matroid F_7 ⊕ F_7^- is not representable.
5.5.  Proposition. Let M be a matroid with ground set E and collection of bases B. If C is a
                  circuit of M such that E − C is a cocircuit of M, then B ∪ {C} is the set of
                  bases of a matroid M'_C on E. [relaxation]
5.6.  Lemma.      Let M be a matroid with ground set E and let C be a circuit of M such that
                  E − C is a cocircuit of M. (i) ... (ii) ...
5.7.  Theorem.    Every matroid on a set of at most 7 elements is representable. Moreover,
                  every non-representable matroid on an 8-element set has rank 4.
5.8.  Exercise.   Show that ...
5.9.  Theorem.    Let F be a field of characteristic 0. For all prime numbers ...
5.10. Theorem.    A graph is planar if and only if it has no minor isomorphic to ...
5.11. Theorem.    A matroid is graphic if and only if it has no minor isomorphic to ...
5.12. Corollary.  A matroid is cographic if and only if it has no minor ...
5.13. Lemma.      The matroid U_{2,n} is representable over a field F if and only if F has at
                  least n − 1 elements.
5.14. Theorem.    A matroid is ternary if and only if it has no minor isomorphic to U_{2,5},
                  U_{3,5}, F_7, or F_7^*.
5.15. Theorem.    A matroid is binary if and only if it has no minor isomorphic to U_{2,4}.
5.16. Theorem.    The following statements are equivalent for a matroid M. (i) M is regular.
                  (ii) M is both binary and ternary. (iii) M is representable over GF(2) and
                  some field of characteristic other than 2. (iv) M is representable over R by
                  a matrix all of whose square submatrices have determinants in {0,1,−1}.
                  (v) M has no minor isomorphic to U_{2,4}, F_7, or F_7^*.
5.17. Exercise.   Let A be a totally unimodular matrix. ...
5.18. Lemma.      Let A be a real matrix with every entry in {0,1,−1} such that ...
5.19. Theorem.    Let A_1 and A_2 be matrices over GF(3) such that the ...
5.20. Exercise.   Show that ...
5.21. Theorem.    If M is a 3-connected GF(4)-representable matroid, then ...
5.22. Theorem.    A matroid is quaternary if and only if it has no minor ...
5.23. Theorem.    For all prime powers q, there are at least 2^{q−4} excluded ...
5.24. Theorem.    Every 3-connected GF(5)-representable matroid has at ...
5.25. Theorem.    In every infinite set of finite graphs, there is always one ...
                  [Robertson–Seymour graph minor theorem]
5.26. Exercise.   For r ≥ 2, let N_r be the binary matroid that is represented ...
5.27. Question.   Is there an infinite set of binary matroids none of which is ...
```

**§6. Decomposition of regular matroids**
```
6.1. Example.     Suppose that we seek to maximize cx + dy subject to the ...
6.2. Theorem.     The problem: ...
6.3. Theorem.     There is a polynomial-time algorithm which, given a rational ...
6.4. Theorem.     Let A be an integral matrix. The polyhedron {x : x ≥ ...
6.5. Exercise.    Let M_1, M_2, and T be as above.
6.6. Theorem.     The class of regular matroids coincides with the class of ...
                  [Seymour's decomposition theorem]
6.7. Exercise.    Show that R_10 has no 3-element circuits and so is not in- ...
6.8. Corollary.   There is a polynomial-time algorithm to determine whether ...
```

**§7. Conclusion** — narrative survey of omitted areas, no numbered results.

### B.2 Schrijver, *A Course in Combinatorial Optimization* — Chapter 10, pp. 173–198

Chapter and section headings, verbatim from the book's own Contents (p. 3–4) and chapter
body:

```
10. Matroids                                    173
10.1. Matroids and the greedy algorithm         173
10.2. Equivalent axioms for matroids            176
10.3. Examples of matroids                      180
10.4. Two technical lemmas                      183
10.5. Matroid intersection                      184
10.6. Weighted matroid intersection             190
10.7. Matroids and polyhedra                    194
```

Named results, verbatim:

```
Theorem 10.1.    The pair (X,I) satisfying (2)(i) and (ii) is a matroid if and only if
                 [the greedy algorithm gives a maximum-weight set for each weight function]
Theorem 10.2.    Let I, B, C, and r be as above. Then the following are equivalent:
                 (i)   if F, F' ∈ I and |F'| > |F|, then F ∪ {x} ∈ I for some x ∈ F' \ F;
                 (ii)  if B, B' ∈ B and x ∈ B' \ B, then (B' \ {x}) ∪ {y} ∈ B for some y ∈ B \ B';
                 (iii) if B, B' ∈ B and x ∈ B' \ B, then (B \ {y}) ∪ {x} ∈ B for some y ∈ B \ B';
                 (iv)  if C, C' ∈ C with C ≠ C' and x ∈ C ∩ C', then (C ∪ C') \ {x} contains
                       a set in C;
                 (v)   if C, C' ∈ C, x ∈ C ∩ C', and y ∈ C \ C', then (C ∪ C') \ {x} contains
                       a set in C containing y;
                 (vi)  for all Y, Z ⊆ X one has r(Y ∩ Z) + r(Y ∪ Z) ≤ r(Y) + r(Z).
Corollary 10.2a. If B is the collection of bases of some matroid M, then B* also is the
                 collection of bases of some matroid on X, denoted by M*.
Theorem 10.3.    The rank function r_{M*} of the dual matroid M* satisfies:
                 r_{M*}(Y) = |Y| + r_M(X \ Y) − r_M(X).
Theorem 10.4.    (X,I) is a matroid.  [§10.3, graphic matroid]
Theorem 10.5.    (X,I) is a matroid.  [§10.3, transversal matroid]
Lemma 10.1.      Let M = (X,I) be a matroid and let Y, Z ∈ I with |Y| = |Z|. Then H(M,Y)
                 contains a perfect matching on Y △ Z.
Lemma 10.2.      Let M = (X,I) be a matroid and let Y ∈ I. Let Z ⊆ X be such that |Y| = |Z|
                 and such that H(M,Y) contains a unique perfect matching N on Y △ Z. Then Z
                 belongs to I.
Theorem 10.6.    If Case 1 applies, then Y' ∈ I_1 ∩ I_2.
Theorem 10.7.    If Case 2 applies, then Y is a maximum-cardinality common independent set.
Theorem 10.8.    A maximum-cardinality common independent set in two matroids can be found
                 in polynomial time.
Theorem 10.9     (Edmonds' matroid intersection theorem). Let M_1 = (X,I_1) and M_2 = (X,I_2)
                 be matroids. Then  max_{Y ∈ I_1 ∩ I_2} |Y| = min_{U ⊆ X} (r_{M_1}(U) + r_{M_2}(X \ U)).
Theorem 10.10.   Let C be a directed circuit in H(M_1,M_2,Y), and let t ∈ VC. ...
Theorem 10.11.   Let Y ∈ I_1 ∩ I_2. Then Y is extreme if and only if H(M_1,M_2,Y) ...
Theorem 10.12.   If Case 1 applies, Y' is an extreme common independent set.
Theorem 10.13.   A maximum-weight common independent set in two matroids can ...
Theorem 10.14.   If w is integer, then (42) and (43) have integer optimum solutions.
Corollary 10.14a. The matroid polytope P(M) is determined by (41).
Theorem 10.15.   Let M_1 = (X,I_1) and M_2 = (X,I_2) be matroids, let w : X → Z ...
Theorem 10.16.   Let M_1 = (X,I_1) and M_2 = (X,I_2) be matroids, let w : X → Z ...
Theorem 10.17.   If w is integer, then (52) and (53) have integer optimum solutions.
Corollary 10.17a. The convex hull of the common independent sets of two matroids ...
```

Exercises carrying results the library would want (verbatim statements, these are where
Schrijver puts **matroid union and the packing/covering theorems**):

```
10.27. Let M_1 = (X,I_1) and M_2 = (X,I_2) be matroids. Define I_1 ∨ I_2 := {Y_1 ∪ Y_2 |
       Y_1 ∈ I_1, Y_2 ∈ I_2}.
       (i)   Show that the maximum cardinality of a set in I_1 ∨ I_2 is equal to
             min_{U ⊆ X} (r_{M_1}(U) + r_{M_2}(U) + |X \ U|).
             (Hint: Apply the matroid intersection theorem to M_1 and M_2*.)
       (ii)  Derive that for each Y ⊆ X:  max{|Z| : Z ⊆ Y, Z ∈ I_1 ∨ I_2}
             = min_{U ⊆ Y} (r_{M_1}(U) + r_{M_2}(U) + |Y \ U|).
       (iii) Derive that (X, I_1 ∨ I_2) is again a matroid.
             (Hint: Use axiom (vi) in Theorem 10.2.)
             This matroid is called the union of M_1 and M_2, denoted by M_1 ∨ M_2.
             (Edmonds and Fulkerson [1965], Nash-Williams [1967].)
       (iv)  [k-fold union and its rank function]
10.28. (i)   Let M = (X,I) be a matroid and let k ≥ 0. Show that X can be covered by k
             independent sets if and only if |U| ≤ k · r_M(U) for each subset U of X.
             (Hint: Use Exercise 10.27.) (Edmonds [1965b].)
       (ii)  [polynomial-time solvability]
10.29. Let G = (V,E) be a graph and let k ≥ 0. Show that E can be partitioned into k forests
       if and only if each nonempty subset W of V contains at most k(|W| − 1) edges of G.
       (Hint: Use Exercise 10.28.) (Nash-Williams [1964].)
10.30. [partition into k partial transversals; Edmonds and Fulkerson 1965]
10.31. (i)   Let M = (X,I) be a matroid and let k ≥ 0. Show that there exist k pairwise
             disjoint bases of M if and only if k(r_M(X) − r_M(U)) ≥ |X \ U| for each
             subset U of X. (Hint: Use Exercise 10.27.) (Edmonds [1965b].)
10.32. Let G = (V,E) be a connected graph and let k ≥ 0. Show that there exist k pairwise
       edge-disjoint spanning trees if and only if for each t, for each partition
       (V_1,...,V_t) of V into t classes, there are at least k(t − 1) edges connecting
       different classes of this partition.
       (Hint: Use Exercise 10.31.) (Nash-Williams [1961], Tutte [1961].)
10.26. Let M = (X,I) be a matroid and let X_1,...,X_m be subsets of X. Then (X_1,...,X_m)
       has an independent transversal if and only if the rank of the union of any t sets
       among X_1,...,X_m is at least t, for any t ≥ 0. (Rado [1942].)
10.22. Derive König's matching theorem from Edmonds' matroid intersection theorem.
10.34. [Y_1/Y_2 basis-splitting; hint applies matroid intersection to (M\Y_1)/Y_2 and (M*\Y_1)/Y_2]
10.35. [Nash-Williams 1985 detachment theorem — statement only]
```

Other exercises read (10.1–10.21, 10.23–10.25, 10.33, 10.36–10.41): k-uniform and
k-truncation matroids, parallel elements, loops, contraction rank formulas
(r_{M/Y}(U) = r_M(U ∪ Y) − r_M(Y)), commuting of deletion and contraction, duals of linear
matroids, cycle matroid of a planar dual, common transversals, Hamiltonian cycles as
3-matroid intersection, rainbow spanning trees.

### B.3 Reiner, *Lectures on Matroids and Oriented Matroids* — §1–§5

```
1. Lecture 1: Motivation, examples and axioms
   1.1.   Motivation.
   1.2.   Brief early history.
   1.2.1. Matroids.
   1.2.2. Oriented matroids (OM's).
   1.3.   Motivating examples.
   1.3.1. Motivating example: vector configurations.
   1.3.2. Motivating example: algebraic independence and transcendence bases (Mac Lane 1938).
   1.3.3. Motivating example: forests and spanning trees (Whitney 1932).
   1.3.4. Historically later example: partial matchings in bipartite graphs (Edmonds ...)
   1.4.   Definition. Finally, the definition of a matroid (Whitney 1935)...
   1.5.   Other axiom systems.
   1.5.1. Circuits.
   1.5.2. The semimodular rank function.
   1.5.3. The exchange closure operation.
   1.5.4. The geometric lattice of flats.
   1.6.   Simplicial complexes.
   1.7.   The greedy algorithm.
   1.8.   Oriented matroids.
   1.9.   Covectors.
   1.10.  Chirotopes.
2. Lecture 2: Constructions, representations, and realizations
   2.1.   The most basic constructions.
   2.1.1. Direct sum (boring).
   2.1.2. Deletion (boring).
   2.1.3. Contraction (seems, a priori, less boring).
   2.1.4. Duality/Orthogonality (Fascinating!)
   2.2.   Duality in other guises.
   2.2.1. Dual linear codes.
   2.2.2. Linear programming duality.
   2.2.3. Gale transforms.
   2.3.   Representability questions.
   2.3.1. Algebraic representability.
   2.3.2. Linear representability.
   2.3.3. Digression: How much of a graph is captured by its matroid?
   2.4.   Orientability, topological representations and realizations.
   2.4.1. Realization spaces and OM strata in the Grassmannian.
   2.5.   Passing between polytopes and matroids and OM's.
   2.5.1. Independent set and basis polytopes.
   2.5.2. Zonotopes.
   2.5.3. Matroid polytopes.
   2.5.4. Lawrence polytopes.
3. Lecture 3: Invariants (enumerative, topological, algebraic)
   3.1.    Enumerative invariants.
   3.1.1.  Independent sets, spanning sets.
   3.1.2.  Basis activities.
   3.1.3.  Chromatic and flow polynomials.
   3.1.4.  Finite field interpretations.
   3.1.5.  Two-variable coloring.
   3.1.6.  Acyclic and totally cyclic orientations.
   3.1.7.  Weight enumerators of linear codes.
   3.1.8.  Reliability polynomials.
   3.1.9.  Crapo's beta-invariant.
   3.1.10. The rank partition.
   3.2.    Topological invariants.
   3.2.1.  The independent sets I(M), and the nonspanning sets NS(M).
   3.2.2.  The (non-reduced and reduced) broken circuit complexes NBC(M), NBC(M).
   3.2.3.  The order complex of the geometric lattice L(M).
   3.2.4.  Some oriented matroid complexes.
   3.3.    Topology of hyperplane complements.
   3.3.1.  Finite fields: counting points.
   3.3.2.  The field R: chambers, separating sets of hyperplanes, weak orders.
   3.3.3.  The field C: topology of the complexified complement.
   3.4.    Algebraic invariants.
   3.4.1.  Resonance varieties and A_M as a chain complex.
   3.4.2.  Basis monomial rings.
   3.4.3.  Matroidal and oriented matroid ideals.
4. Lecture 4: New directions (maps and Hopf algebras)
5. Problems to accompany the lectures
   5.1. Lecture 1 problems.
   5.2. Lecture 2 problems.
   5.3. Lecture 3 problems.
```

Named results, verbatim:

```
Theorem 9.   (G. Birkhoff) Geometric lattices = posets of flats of simple matroids.
Theorem 21.  (i) A matroid is representable over F_2 if and only if it has [no U_{2,4} minor] ...
Theorem 23.  (Whitney's 2-isomorphism theorem, 1933) Two graphs G on edge [set E have the
             same cycle matroid if and only if they are related by a sequence of Whitney
             twists / vertex identifications and cleavings]
Theorem 25.  Arrangements of pseudospheres A in S^{r−1} are in bijective correspondence
             [with rank-r oriented matroids — Folkman–Lawrence topological representation]
Theorem 27.  There exists an isomorphism invariant of matroid M on ground set E in the form
             of a polynomial T_M(x,y) in two variables x, y, called the Tutte polynomial of
             M, having these properties:
             T1.  If e ∈ E is neither a loop nor coloop of M, then
                  T_M(x,y) = T_{M\e}(x,y) + T_{M/e}(x,y)
             T2.  If e is a coloop of M, then T_M(x,y) = x T_{M/e}(x,y). If e is a loop of M,
                  then T_M(x,y) = y T_{M\e}(x,y).
             T2'. T_{M_1 ⊕ M_2}(x,y) = T_{M_1}(x,y) T_{M_2}(x,y).
             T3.  When E = {e} has cardinality 1, T_M(x,y) = x if e is a coloop/isthmus,
                  y if e is a loop.
             T4.  T_{M^⊥}(x,y) = T_M(y,x).
             Furthermore, T_M(x,y) is characterized by properties T1, T2, T3 above, or
             alternatively by the properties T1, T2', T3.
Proposition 28. Let Ψ(M) be any isomorphism invariant of matroids taking values in a
             commutative ring R, satisfying these properties: [multiplicative on direct sums;
             Ψ(M) = aΨ(M\e) + bΨ(M/e) when e is neither loop nor isthmus; Ψ = c on a coloop,
             d on a loop]. Then Ψ(M) = a^{r(M^⊥)} b^{r(M)} T_M(c/b, d/a).
Definitions 3, 4, 7, 13, 24 and Examples 1, 2, 5, 6, 8, 10, 11, 12, 14, 15, 17, 18, 20,
29, 30, 31, 32 — worked vector/graphic/transversal configurations and their axiom systems.
```

Reiner also states verbatim the corank-nullity generating function used to *construct* the
Tutte polynomial:
```
(3)  S_M(x,y) = Σ_{A ⊆ E} x^{rank(M) − r(A)} y^{|A| − r(A)}     [Whitney corank-nullity polynomial]
     T_M(x,y) := S_M(x − 1, y − 1)
```
and the characteristic polynomial:
```
χ_M(t) := Σ_{X ∈ L(M)} μ(0̂, X) t^{rank(M) − rank(X)} = (−1)^{rank(M)} T_M(1 − t, 0)
```

### B.4 Ellis-Monaghan & Merino, *The Tutte Polynomial* — §1–§9

```
1   Introduction
2   Preliminary Notions
    2.0.1 Basic Concepts
    2.0.2 Deletion and Contraction
    2.0.3 The Rank and Nullity Functions for Graphs
    2.0.4 Planar Graphs and Duality
3   Defining the Tutte Polynomial
    3.1 Linear Recursion Definition
    3.2 Rank-Nullity Generating Function Definition
    3.3 Spanning Trees Expansion Definition
4   Universality of the Tutte Polynomial
5   Combinatorial Interpretations of Some Evaluations
    5.1 Spanning Subgraphs
    5.2 The Tutte Polynomial at y = x
    5.3 Orientations and Score Vectors
6   Some Specializations
    6.1 The Chromatic Polynomial
    6.2 The Bad Coloring Polynomial
    6.3 The Flow Polynomial
    6.4 Abelian Sandpile Models
    6.5 The Reliability Polynomial
    6.6 The Shelling Polynomial
7   Some Properties of the Tutte Polynomial
    7.1 The Beta Invariant
    7.2 Coefficient Relations
    7.3 Zeros of the Tutte Polynomial
    7.4 Derivatives of the Tutte Polynomial
    7.5 Convolution and the Tutte Polynomial
8   The Complexity of the Tutte Polynomial
9   Conclusion
```

Named results (Propositions 1–3, Theorems 1–33, Corollaries 1–5), the ones bearing on the
scaffold:
```
Proposition 1   If G and H are graphs then [T is multiplicative over disjoint unions / one-point joins]
Proposition 2   If G is a planar graph with dual G* then [T(G*;x,y) = T(G;y,x)]
Theorem 1       Let G be a minor closed class of graphs, let R be a commutative ring ...
                [the recipe theorem / universality]
Theorem 2       Let G be a minor closed class of graphs, let R be a commutative ring ...
                [universality, second form]
Theorem 3       If G = (V,E) is a connected graph then: [T(1,1) = # spanning trees,
                T(2,1) = # spanning forests, T(1,2) = # spanning connected subgraphs,
                T(2,2) = 2^|E|]
Theorem 4       If G is a connected graph with Laplacian L, then [Matrix–Tree connection]
Theorem 5       T(G;−1,−1) = (−1)^|E| (−2)^{dim(B)}   [B = bicycle space]
Theorems 6–9    [medial graphs, orientations, score vectors]
Theorem 10      If G = (V,E) is a graph, then [χ(G;λ) = (−1)^{r(E)} λ^{κ(G)} T(G; 1−λ, 0)]
Proposition 3   If G is a graph with chromatic polynomial χ(G;λ), then: [coefficient facts]
Theorems 11–12  [chromatic polynomial of a union; the Whitney rank formulation]
Theorem 13      For a graph G = (V,E) we have that [the bad-colouring / Whitney rank polynomial]
Theorem 14      Let G = (V,E) be a graph and H a finite Abelian group ... [flow polynomial]
Theorems 15–16, Corollaries 2–3   [abelian sandpiles, critical configurations]
Theorem 17      If G is a connected graph with m edges and n vertices, then [reliability polynomial]
Theorem 18, Corollary 4           [shelling polynomial, face enumerators]
Theorems 19–23  [the beta invariant; series-parallel iff β = 1]
Theorems 24–25  [coefficient relations]
Theorem 26, Corollary 5           [irreducibility / zeros]
Theorems 27–28  [derivatives]
Theorems 29–30  [convolution formulas for T and for χ]
Theorems 31–33  [#P-hardness of evaluation]
```

**Note for the scaffolder:** S4 states the three definitions (linear recursion, rank–nullity
generating function, spanning-tree expansion) **and proves them equivalent**. That is
exactly the content Reiner's Theorem 27 asserts and does not prove, so S4 is what makes
the Tutte block honestly provable rather than assertible.

### B.5 Waterloo CO 446 and KAIST MAS480A — the two full course sets

**S7, CO 446 (Waterloo), 90 pp.** Section headings, verbatim:
```
1    Introduction
1.1  Circuits                        1.12 Graphicness and duality
1.2  Bases                           1.13 Euler's Formula
1.3  Rank                            1.14 Minors
1.4  Ingleton's Inequality           1.15 Minors
1.5  Local Connectivity              1.16 Regular Matroids
1.6  Closure                         1.17 Signed Incidence Matrix
1.7  Geometric drawings of matroids  1.18 Incidence matrix
1.8  Simplification                  1.21 Excluded Minors
1.9  Projective Geometries
1.10 Duality
1.11 Representability and duality
2.2  Graphs                          2.3 Affine Matroids      2.4 Affine Geometries
2.5  Critical Number                 2.6 Bose-Burton Geometries
2.7  Reformulations of the Four Colour Theorem
3.1  Turan   3.2 Triangle-free binary matroids   3.3 PG(t−1,2)-free binary matroids
3.4  Ramsey  3.5 Hales-Jewett  3.6 More Ramsey  3.7 Erdős-Stone
4.1  Direct Sum                      4.5 Packing Bases
4.2  Extending freely into a flat.   4.6 Covering with independent sets
4.3  Constructing M1 ∪ M2            4.7 Matroid Intersection
4.4  Matroid Algorithms (Oracle Model)   4.8 Application to bipartite matching
5.1  Bixby-Coullard Inequality       5.5 Tutte Connectivity
5.2  Fundamental graphs              5.6 Vertical connectivity
5.3  Connectivity between two sets   5.8 Wheels
5.4  Application to graphs
6.1  Recognizing graphic matroids    6.4 Excluded minors for graphic matroids
6.2  Extensions                      6.5 Graft Minors
6.3  Coextensions                    6.6 Signed graph Minors
7.1  Sums of binary matroids         7.2 Seymour's Decomposition Theorem
```
Named results bearing on the scaffold, verbatim:
```
Lemma 21.  [1.7]  Let C denote the collection of circuits of a matroid M. Then [(C1)–(C3)]
Theorem 22.[1.8]  Let C be a collection of subsets of a finite set E. Then C is the collection
                  [of circuits of a matroid iff (C1)–(C3)]
Lemma 26.  [1.9]  Let B denote the set of bases of a matroid M. Then [(B1),(B2)]
Theorem 27.[1.10] Let B be a collection of subsets of a finite set E. Then B is the [basis
                  family of a matroid iff (B1),(B2)]
Lemma 29.  [1.11] For a matroid M = (E,I) [the rank axioms hold]
Theorem 31.[1.12] Let E be a finite set and let r : 2^E → Z. Then r is the rank function
                  [of a matroid iff the rank axioms hold]
Lemma 37.  [1.14] [closure is well defined]
Theorem 53.[1.16] If M is a matroid then M* is a matroid.
Theorem 59.[1.17] Let A1 ∈ F^{r1×E} and A2 ∈ F^{r2×E}. If rowspace(A1)^⊥ = rowspace(A2),
                  [then M[A2] = M[A1]*]
Corollary 60.[1.18] A matroid M is F-representable if and only if M* is F-representable.
Theorem 61.[1.19] If G is a plane graph, then M(G*) = M(G)*.
Lemma 63.  [1.20] For a graph G and X ⊆ E(G), G[X] is a forest if and only if G* − X is connected.
Theorem 64. [Euler's Formula]
Theorem 66.[1.21 - Whitney] A graph G is planar if and only if M(G)* is graphic.
Lemma 72,75,78, Lemma 81 [1.25 - Scum Theorem]
Theorem 85. [Tutte] For a matroid M, the following are equivalent: [regular characterisations]
Lemma 88,89 [1.26],[1.27]; Theorem 91.[1.28] Graphic matroids are regular.
Theorem 99, 103. [Kuratowski's Theorem] (graph form, and excluded-minor form)
Definition 202; Lemma 203.[4.4] If M1 and M2 are matroids then (M1∇M2)|E = M1 ∪ M2.
Theorem 214.[4.9 - Tutte, Nash-Williams] A matroid M = (E,I) has k disjoint bases if and
                  only if |M/X| ≥ k·r(M/X) for each X ⊆ E.
Corollary 220.[4.12] Each simple planar graph can be covered by three forests.
Proposition 229, Remark 230 [bipartite matching as a 2-matroid intersection]
Lemma 231.[4.14] Let M1 = (E,I1) and M2 = (E,I2) be matroids. Then
                  ν(M1,M2) = r(M1 ∪ M2*) − r(M2*).
Lemma 302.[6.1], Corollary 303.[1.24] A graph G is planar if and only if M(G)* is graphic.
```

**S8, MAS480A (KAIST), 88 pp.** Structure is by lecture date; the mathematical spine is
labelled by chapter:
```
Week01-1  1.1 Whitney, 1935
Week01-2
Week02-1  Chapter 2. Cryptomorphisms.
          Chapter 2.1. Circuit (= minimally dependent set)
          Chapter 2.2. Base (= maximally independent set)
Week02-2  Chapter 2.3. Rank
          Chapter 2.4. Closure
Week03-1  Chapter 2.5. Flat (or Closed set)
Week03-2  Chapter 2.6. Greedy Algorithm and Matroids
          6.1 Homework 2.3, Hyperplane Axioms
Week05-1 … Week15-2  [duality, representability, minors, connectivity, relaxation]
          21.1 Midterm Exam 4, Circuit-hyperplane relaxation
```
S8's value is that it is organised **explicitly around "cryptomorphisms"** — the word for
the axiom-system equivalences — and treats circuits, bases, rank, closure, flats and
hyperplanes as six parallel presentations. That is the cleanest available model for how to
structure the equivalence block of Pair 1, and it independently confirms the ordering §C.1
argues for.

### B.6 In-copyright tables of contents — used only as a structure check

**S5, Oxley, *Matroid Theory* 2nd ed. (Oxford 2011)** — full section-level TOC with page
numbers:
```
Preliminaries 1
1  Basic definitions and examples 7: Independent sets and circuits 7 · Bases 15 · Rank 20 ·
   Closure 25 · Geometric representations of matroids of small rank 32 · Transversal
   matroids 43 · The lattice of flats 48 · The greedy algorithm 58
2  Duality 64: The definition and basic properties 64 · Duals of representable matroids 77 ·
   Duals of graphic matroids 87 · Duals of transversal matroids 93
3  Minors 100: Contraction 100 · Minors of certain classes of matroids 106 · The Scum
   Theorem, projection, and flats 113
4  Connectivity 118: Connectivity for graphs and matroids 118 · Properties of matroid
   connectivity 122 · More properties of connectivity 126
5  Graphic matroids 135: Representability 135 · Duality in graphic matroids 140 ·
   Whitney's 2-Isomorphism Theorem 145 · Series-parallel networks 151
6  Representable matroids 158: Projective geometries 159 · Affine geometries 170 ·
   Different matroid representations 176 · Constructing representations for matroids 181 ·
   Representability over finite fields 192 · Regular matroids 204 · Algebraic matroids 211 ·
   Characteristic sets and decidability 220 · Modularity 228 · Dowling geometries 235
7  Constructions 251: Series and parallel connection and 2-sums 251 · Single-element
   extensions 264 · Quotients and related operations 272 · A non-commutative operation 282
8  Higher connectivity 291: Tutte's definition 291 · Properties of the connectivity
   function 296 · 3-connected matroids and 2-sums 304 · Wheels and whirls 316 · Tutte's
   Linking Theorem 319 · Matroid versus graph connectivity 324 · Some extremal
   connectivity results 332 · Tutte's Wheels-and-Whirls Theorem 337
9  Binary matroids 344: Characterizations 344 · Circuit and cocircuit spaces 349 · The
   operation of 3-sum 353 · Other special properties 360
10 Excluded-minor theorems 372: The characterization of regular matroids 372 · of ternary
   matroids 380 · of graphic matroids 385 · Further properties of regular and graphic
   matroids 398
11 Submodular functions and matroid union 404: Deriving matroids from submodular
   functions 404 · The theorems of Hall and Rado 411 · Matroid union and its
   applications 427 · Amalgams and the generalized parallel connection 436 ·
   Generalizations of delta-wye exchange 448
12 The Splitter Theorem 457 · 13 Seymour's Decomposition Theorem 489 ·
14 Research in representability and structure 525 · 15 Unsolved problems 583
References 608 · Appendix: Some interesting matroids 639 · Notation 666 · Index 668
```

**This TOC is the single best check on the scaffold's shape**, and it validates §G: Oxley's
chapters 1–3 are exactly Pair 1; his chapter 11 is the matroid-union half of Pair 2; his
chapters 5, 6, 9, 10 are Pair 3. It also confirms that everything §B.7 marks `deferred` or
`out-of-scope` — connectivity (ch. 4, 8), constructions (ch. 7), the Splitter Theorem
(ch. 12), Seymour (ch. 13) — is material Oxley himself places *after* the foundations.

**S6, Gordon & McNulty** (chapter level only): A tour of matroids 1 · Cryptomorphisms 39 ·
New matroids from old 100 · Graphic matroids 152 · Finite geometry 180 · Representable
matroids 221 · Other matroids 261 · Matroid minors 296 · The Tutte polynomial 323 ·
Projects 355 · Appendix: Matroid axiom systems 381.

**S10, Schrijver, *Combinatorial Optimization*, Part IV** (sub-section granularity):
```
39 Matroids 651: 39.1 Matroids 651 · 39.2 The dual matroid 652 · 39.3 Deletion,
   contraction, and truncation 653 · 39.4 Examples 654 · 39.5 Characterizing matroids by
   bases 662 · 39.6 by circuits 662 · 39.6a Lehman's characterization 663 · 39.7 by rank
   functions 664 · 39.8 The span function and flats 666 · 39.9 Further exchange
   properties 669 · 39.10 Historical notes 672
40 The greedy algorithm and the independent set polytope 688
41–42 Matroid intersection; matroid union
```
This confirms Schrijver's own book orders the material exactly as §G's Pair 1 → Pair 2.

### B.7 Disposition of every harvested heading

Legend: `included` (scaffold an item), `inline` (absorbed in another item's proof),
`already-published` (library has it), `deferred`, `out-of-scope`. Page-pair labels
P1/P2/P3 refer to §G.

**Oxley §2–§4** — the foundations spine.

| heading | disposition |
|---|---|
| 2.1, 2.3, 2.5 (uniform), 2.6 (vector matroid) | `included` P1 — definitions + `ex-`/`def-` items |
| 2.2 (maximal independent subsets of every X are equicardinal) | `included` P1 — **this is the well-definedness of rank**; see §C.1 |
| 2.4 (counting small matroids) | `included` P1 as an `ex-` item, 3-element case only |
| 2.7, 2.10–2.12, 2.15 (Questions) | `inline` — these are motivating questions, absorbed into page prose |
| 2.8 (U_{2,4} not binary, is ternary) | `included` P3 |
| 2.9, 2.13, 2.14, 2.17, 2.18 (Exercises) | `inline` |
| 2.16 (incidence matrix represents M(G) over GF(2)) | `included` P3 |
| 2.19 (counting binary matroids) | `deferred` — asymptotic enumeration, belongs with a counting page, not a structure page |
| 3.1 (circuit axioms) | `included` P1 |
| 3.2 (basis axioms) | `included` P1 |
| 3.3 (bonds are circuits of a matroid) | `included` P1 |
| 3.4 (dual exists), 3.5, 3.6, 3.7, 3.13 | `included` P1 |
| 3.8 (self-dual matroids) | `included` P1 as `ex-` |
| 3.9 (cocircuit = minimal blocker of bases) | `included` P1 |
| 3.10, 3.11 (Shannon switching game; 2 disjoint bases) | 3.11(ii)⇔(iii) `included` P2 (Nash-Williams/Tutte, k=2 then general k); the **game** formulation `out-of-scope` — it is a recreational packaging of the same theorem and adds no mathematics the library needs |
| 3.12 (matroid union, rank formula) | `included` P2 |
| 3.14 (matrix ops preserving M[A]) | `included` P3 |
| 3.15 (dual of a representable matroid; M* = [−D^T|I]) | `included` P3 |
| 3.16 (Exercise: prove 3.15) | `inline` in 3.15 |
| 3.17 (deletion/contraction commute), 3.18, 3.19, 3.20 | `included` P1 |
| 3.21 (direct sum) | `included` P1 |
| 3.23 (excluded minor for class U) | `deferred` — depends on an "unbounded" class definition that costs more than it returns |
| 3.24 | `inline` |
| 3.25, 3.28, 3.29 (Questions/Rota's conjecture) | `included` P3 as a single `rem-` open-problems item, or `inline` |
| 3.26 (equivalent characterisations of binary matroids) | `included` P3 |
| 3.27 | `inline` |
| 4.1 (transversal matroid), 4.2 (its rank, Ore) | 4.1 `included` P1; 4.2 `included` P2 (it is a defect-Hall statement and sits better with the min-max block) |
| 4.3 (transversal matroids not minor-closed) | `included` P1 as a `cex-` |
| 4.4 | `included` P1 as `ex-` |
| 4.5 (Edmonds–Fulkerson matching matroid on V(G)) | `included` P1 |
| 4.6, 4.7, 4.8 (greedy; Rado–Edmonds) | `included` P2 — the centrepiece |

**Oxley §5–§6** — representability.

| heading | disposition |
|---|---|
| 5.1 | `inline` |
| 5.2 (fundamental circuits determine a binary matroid) | `included` P3 — load-bearing for 5.15 |
| 5.3 (F_7 / F_7^- representability by characteristic) | `included` P3 |
| 5.4 (F_7 ⊕ F_7^- non-representable) | `included` P3 |
| 5.5, 5.6 (relaxation) | `included` P3 |
| 5.7 (Fournier: every ≤7-element matroid is representable) | `deferred` — a case analysis whose proof S1 does not give and which is not in the sources obtained |
| 5.9 | `deferred` — S1 states without proof |
| 5.10 (Wagner planarity) | `already-published` — the library has `thm-kuratowski-wagner-planarity-characterisation` |
| 5.11, 5.12 (Tutte: excluded minors for graphic/cographic) | `deferred` with a `rem-` statement — see §C.14; S1 gives no proof and the proof needs machinery beyond the harvest |
| 5.13 (U_{2,n} representable iff \|F\| ≥ n−1) | `included` P3 |
| 5.14 (ternary excluded minors) | `deferred`, `rem-` statement only — **S1 says verbatim "None is elementary enough for inclusion here."** |
| 5.15 (binary iff no U_{2,4} minor) | `included` P3 — **S1 gives a complete proof**; the capstone |
| 5.16 (regular matroid characterisations) | (i)⇔(ii)⇔(iii) `deferred`/`rem-`; the definition of regular and totally unimodular `included` P3 |
| 5.17, 5.18, 5.19, 5.20 | `deferred` — totally-unimodular machinery, a page of its own |
| 5.21–5.24 (GF(4), GF(5), excluded-minor counts) | `out-of-scope` — current structural matroid theory, far past a first pair |
| 5.25 (Robertson–Seymour) | `out-of-scope` — a research programme, statement belongs to a graph-minors page if ever |
| 5.26, 5.27 | `out-of-scope` |
| 6.1–6.8 (Seymour decomposition, TU polyhedra, LP) | `out-of-scope` — **rests on linear programming duality and integral polyhedra, which the library does not have**; §6.6 (Seymour) may appear as a `rem-` signpost only |

**Schrijver Ch. 10.**

| heading | disposition |
|---|---|
| §10.1 + Thm 10.1 (greedy characterisation) | `included` P2 — second independent treatment of Oxley 4.8 |
| §10.2 + Thm 10.2 (six-way axiom equivalence) | `included` P1, **split into a cycle of lemmas** — see §C.4 |
| Cor 10.2a (dual exists) | `included` P1 |
| Thm 10.3 (rank of the dual) | `included` P1 |
| §10.2 deletion/contraction/minor | `included` P1 |
| Exercises 10.1–10.3 (parallel elements, loops) | `included` P1 as `def-`/`ex-` |
| Ex 10.4 (uniform), 10.5 (truncation), 10.6 | 10.4 `included` P1; 10.5 `included` P1; 10.6 `deferred` |
| Ex 10.7, 10.8 (contraction rank formulas), 10.9 (commuting) | `included` P1 |
| Ex 10.10, 10.33 (oracle complexity) | `out-of-scope` — complexity of oracles is not this library's subject |
| §10.3 Thm 10.4 (graphic), Thm 10.5 (transversal) | `included` P1 |
| Ex 10.11–10.18 (partition matroid, circuit bases, planar duals, incidence matrices) | 10.11, 10.16, 10.17, 10.18 `included` P1/P3; 10.13–10.15 `inline` |
| §10.4 Lemma 10.1, Lemma 10.2 | `included` P2 — the two technical lemmas |
| Ex 10.19 (local optimality of a max-weight basis) | `included` P2 |
| Ex 10.20 | `inline` |
| §10.5 Thm 10.6, 10.7, 10.8, **Thm 10.9 (Edmonds)** | Thm 10.6/10.7/10.9 `included` P2; Thm 10.8 (polynomial time) `inline` as a remark |
| Ex 10.21 (I_1 ∩ I_2 need not be a matroid) | `included` P2 as a `cex-` — **important, prevents a natural false belief** |
| Ex 10.22 (König from intersection) | `included` P2 |
| Ex 10.23 (common transversals) | `included` P2 |
| Ex 10.24 (Hamiltonian cycle as 3-matroid intersection) | `deferred` — needs NP-hardness framing the library lacks |
| Ex 10.25 (rainbow spanning tree) | `included` P2 |
| Ex 10.26 (Rado's independent transversal theorem) | `included` P2 |
| **Ex 10.27 (matroid union)** | `included` P2 |
| **Ex 10.28 (Edmonds covering)** | `included` P2 |
| **Ex 10.29 (Nash-Williams arboricity)** | `included` P2 |
| Ex 10.30 (partition into partial transversals) | `included` P2 |
| **Ex 10.31 (Edmonds base packing)** | `included` P2 |
| **Ex 10.32 (Nash-Williams/Tutte tree packing)** | `included` P2 |
| Ex 10.34 | `deferred` |
| Ex 10.35 (Nash-Williams detachment) | `out-of-scope` — a 1985 theorem stated without proof, in a different problem family |
| §10.6 Weighted matroid intersection (Thm 10.10–10.13) | `deferred` — a second full algorithm; P2 is already large, and the min-max content is in §10.5 |
| §10.7 Matroids and polyhedra (Thm 10.14–10.17, Cor 10.14a, 10.17a) | `out-of-scope` — **requires linear programming duality and integral polyhedra, which the library does not have** (§E) |
| Ex 10.36–10.41 | `out-of-scope` with §10.6/§10.7 |

**Reiner.**

| heading | disposition |
|---|---|
| §1.1, §1.2, §1.3 (motivation, history, examples) | `inline` — page prose |
| §1.3.1 (vector configurations), §1.3.3 (forests/spanning trees) | `included` P1 (same content as Oxley 2.6 / Schrijver Thm 10.4) |
| §1.3.2 (algebraic independence / transcendence bases give a matroid) | `deferred` — needs transcendence degree, which the library does not have |
| §1.3.4 (partial matchings) | `included` P1 (= Oxley 4.5) |
| §1.4, §1.5, §1.5.1, §1.5.2 | `included` P1 |
| §1.5.3 (exchange closure operation) | `included` P1 — **closure axioms** |
| §1.5.4 + **Theorem 9 (Birkhoff: geometric lattices = flats of simple matroids)** | `included` P1 for the flats/lattice definition; **Theorem 9 itself `deferred`** — it needs geometric-lattice theory (semimodularity, atomicity) the library does not have; see §C.15 |
| §1.6 (simplicial complexes) | `deferred` — the library has no simplicial complex machinery |
| §1.7 (greedy) | `included` P2 |
| §1.8, §1.9, §1.10 (oriented matroids, covectors, chirotopes) | `out-of-scope` — **oriented matroids are a whole subject area the library has not reached**, the exact disposition `LEVELS.md` reserves for that case |
| §2.1.1–§2.1.4 (direct sum, deletion, contraction, duality) | `included` P1 |
| §2.2.1 (dual linear codes) | `included` P3 as a `rem-`/`ex-` — the parity-check-matrix reading of M* is cheap and illuminating, and Oxley §3 gives the same content |
| §2.2.2 (LP duality), §2.2.3 (Gale transforms) | `out-of-scope` — LP duality absent from the library |
| §2.3.1 (algebraic representability) | `deferred` with §1.3.2 |
| §2.3.2 + **Theorem 21** (F_2-representability) | `included` P3 (= Oxley 5.15) |
| §2.3.3 + **Theorem 23 (Whitney 2-isomorphism)** | **`deferred`, `rem-` statement only** — see §C.13 |
| §2.4 + Theorem 25 (Folkman–Lawrence) | `out-of-scope` — oriented matroids + topology |
| §2.5.1–§2.5.4 (polytopes, zonotopes, matroid polytopes) | `out-of-scope` — polyhedral theory absent |
| §3.1 + **Theorem 27 (Tutte polynomial)** | `included` P3 |
| §3.1 + **Proposition 28 (universality)** | `included` P3 |
| §3.1.1 (independent/spanning set specialisations) | `included` P3 |
| §3.1.2 (basis activities) | `included` P3 — but see §C.12, it is the most expensive item in the block |
| §3.1.3 (chromatic and flow polynomials) | chromatic `included` P3 **after building the chromatic polynomial** (§E); flow polynomial `deferred` |
| §3.1.4 (finite field interpretations) | `deferred` — needs hyperplane arrangements |
| §3.1.5 (two-variable colouring) | `deferred` |
| §3.1.6 (acyclic/totally cyclic orientations) | `deferred` — the acyclic-orientation count T(2,0) is attractive but its proof needs a deletion–contraction argument on orientations that is a page of its own |
| §3.1.7 (weight enumerators of linear codes) | `deferred` — coding theory not in the library |
| §3.1.8 (reliability polynomials) | `included` P3 — cheap given T |
| §3.1.9 (Crapo's beta invariant) | `deferred` |
| §3.1.10 (rank partition) | `deferred` |
| §3.2.1–§3.2.4 (topological invariants, shellability, order complexes, OM complexes) | `out-of-scope` — **algebraic topology, which the library explicitly does not have** |
| §3.3.1–§3.3.3 (hyperplane arrangement complements) | `out-of-scope` — same reason |
| §3.4.1–§3.4.3 (resonance varieties, basis monomial rings, matroid ideals) | `out-of-scope` — commutative algebra beyond the library's reach |
| §4 (Lecture 4: maps and Hopf algebras) | `out-of-scope` |
| §5.1–§5.3 (problems) | `inline` — used as boundary-case and example sources |

**Ellis-Monaghan & Merino (S4).**

| heading | disposition |
|---|---|
| §1 Introduction | `inline` |
| §2.0.1–§2.0.4 (basic concepts, deletion/contraction, rank & nullity, planar duality) | `already-published` for the graph notions (`def-graph-deletion-contraction-minor-and-subdivision`, `def-plane-dual-multigraph`); the rank/nullity functions `included` P3 |
| §3.1 Linear Recursion Definition | `included` P3 |
| §3.2 Rank-Nullity Generating Function Definition | `included` P3 — **the definition of record** |
| §3.3 Spanning Trees Expansion Definition | `deferred` — this is the basis-activity expansion; see §C.12, its interval-partition lemma is the expensive part |
| §4 Universality (Thms 1, 2) | `included` P3 |
| §5.1 Spanning Subgraphs (Thm 3) | `included` P3 — T(1,1), T(2,1), T(1,2), T(2,2) are cheap and vivid |
| §5.1 Thm 4 (Laplacian / Matrix–Tree) | `deferred` — the library has determinants but no Matrix–Tree theorem; a good future pair, not this one |
| §5.2 (T at y = x, bicycle space), §5.3 (orientations, score vectors), Thms 5–9, Cor 1 | `deferred` — medial graphs and bicycle spaces are machinery of their own |
| §6.1 The Chromatic Polynomial (Thms 10–12, Prop 3) | `included` P3 **after the 3-item chromatic-polynomial build** (§E.2) |
| §6.2 The Bad Coloring Polynomial (Thm 13) | `deferred` |
| §6.3 The Flow Polynomial (Thm 14, Cor 2) | `deferred` — no nowhere-zero-flow machinery |
| §6.4 Abelian Sandpile Models (Thms 15–16, Cor 3) | `out-of-scope` |
| §6.5 The Reliability Polynomial (Thm 17) | `included` P3 |
| §6.6 The Shelling Polynomial (Thm 18, Cor 4) | `out-of-scope` — shellability is algebraic topology |
| §7.1 The Beta Invariant (Thms 19–23) | `deferred` |
| §7.2 Coefficient Relations (Thms 24–25) | `deferred` |
| §7.3 Zeros (Thm 26, Cor 5) | `deferred` |
| §7.4 Derivatives (Thms 27–28) | `deferred` |
| §7.5 Convolution (Thms 29–30) | `deferred` |
| §8 Complexity (Thms 31–33) | `out-of-scope` — #P-hardness needs complexity theory the library lacks |
| §9 Conclusion | `inline` |

**Waterloo CO 446 (S7).** Only the headings not already dispositioned above are listed.

| heading | disposition |
|---|---|
| §1.1–§1.3, §1.6, §1.10 (circuits, bases, rank, closure, duality) with Lemmas 21/26/29/37 and Theorems 22/27/31/53 | `included` P1 — **a second independent treatment of every axiom-system equivalence**, which is what lets P1 satisfy the two-treatments rule on its core |
| §1.4 Ingleton's Inequality | `deferred` — a representability obstruction, interesting but a page of its own |
| §1.5 Local Connectivity, §1.14 skew sets, Lemma 78 | `deferred` |
| §1.7 Geometric drawings of matroids | `included` P1 as one `ex-` item only — the pictures do not survive into house style, the rank-3 point/line examples do |
| §1.8 Simplification | `included` P1 |
| §1.9 Projective Geometries, §2.3–§2.4 Affine matroids/geometries | `deferred` — needed only for the deeper representability results P3 already defers |
| §1.11 Representability and duality, Thm 59 [1.17], Cor 60 [1.18] | `included` P3 — **Thm 59 is exactly the orthogonality route §C.7e recommends over the Cauchy–Binet route** |
| §1.12–§1.13 (graphicness/duality, Euler), Thm 61, Lemma 63, Thm 64 | `included` P1 |
| Claim: M(K_5)* is not graphic; Exercise 65: M(K_{3,3})* is not graphic | `included` P1 — see §C.7g, these are the affordable substitute for Whitney planarity |
| §1.15 Scum Theorem (Lemma 81 [1.25]) | `deferred` |
| §1.16 Regular Matroids, Thm 85 [Tutte] | statement `included` P3, proof `deferred` |
| §1.17–§1.18 Signed/plain incidence matrices, Lemmas 88–89, **Thm 91 [1.28] Graphic matroids are regular** | `included` P3 — Thm 91 is a genuinely nice **[B]** result (~20 steps) and it is the cheapest true statement about regular matroids |
| §1.21 Excluded Minors, Thms 99, 103 (Kuratowski) | `already-published` — `thm-kuratowski-wagner-planarity-characterisation` |
| §2.2 Graphs, §2.5 Critical Number, §2.6 Bose-Burton, §2.7 Four Colour reformulations | `out-of-scope` |
| §3.1–§3.7 (Turán, Ramsey, Hales-Jewett, Erdős-Stone for matroids) | `out-of-scope` — extremal matroid theory, and the graph analogues belong to the existing extremal harvest |
| §4.1 Direct Sum | `included` P1 |
| §4.2 Extending freely into a flat | `deferred` unless Route C is chosen (§C.11) |
| §4.3 Constructing M_1 ∪ M_2 (Def 202, Lemma 203 [4.4]) | Route-C alternative, see §C.11 |
| §4.4 Matroid Algorithms (Oracle Model) | `out-of-scope` |
| §4.5 Packing Bases, **Thm 214 [4.9 - Tutte, Nash-Williams]** | `included` P2 — and S7's contraction form is cleaner than Schrijver's, see §C.11 |
| §4.6 Covering with independent sets, **Cor 220 [4.12] every simple planar graph is covered by three forests** | `included` P2 — Cor 220 is a delightful **[B]** payoff item resting on published planarity bounds (`cor-planar-simple-graph-edge-bound`) |
| §4.7 Matroid Intersection (Def 227–228, Prop 229, Lemma 231 [4.14]) | `included` P2 — second treatment |
| §4.8 Application to bipartite matching | `included` P2 |
| §5.1–§5.8 (Bixby-Coullard, fundamental graphs, Tutte connectivity, vertical connectivity, wheels) | `deferred` — **this is precisely the apparatus Whitney planarity needs and the library lacks** (§C.7g) |
| §6.1–§6.6 (recognizing graphic matroids, extensions, coextensions, excluded minors for graphic matroids, graft/signed-graph minors) | `deferred`, except Lemma 302 [6.1]/Cor 303 [1.24] which are the `rem-` statement of Whitney planarity |
| §7.1–§7.2 (sums of binary matroids, Seymour's Decomposition Theorem) | `out-of-scope` |

**KAIST MAS480A (S8).**

| heading | disposition |
|---|---|
| §1.1 Whitney, 1935 | `inline` — historical framing, with S9 as the primary citation |
| Ch. 2 Cryptomorphisms; §2.1 Circuit, §2.2 Base, §2.3 Rank, §2.4 Closure, §2.5 Flat | `included` P1 — **third independent treatment; S8's parallel six-presentation organisation is the recommended model for the block** |
| §2.6 Greedy Algorithm and Matroids | `included` P2 |
| Homework 2.3, Hyperplane Axioms | `included` P1 — the **hyperplane axiomatisation** is the one cryptomorphism S1/S2/S3 all omit; a `def-` plus a short equivalence lemma, **[B]** |
| Weeks 05–15 (duality, representability, minors, connectivity, circuit-hyperplane relaxation) | covered by the S1/S7 dispositions above; relaxation `included` P3 |

---

## C. Mathematical detail the scaffolder needs

Difficulty key, as set by the brief: **[A]** ≤12 steps, no new machinery. **[B]** 12–30
steps, or one new prerequisite. **[C]** long, or needs machinery a library with linear
algebra, finite fields, posets, graphs, trees and Menger's theorem does not have.

Step counts are for the house's rigorous numbered-step style, and every one below is my
own decomposition, not a source's.

### C.1 The independence axioms, and why equicardinality must come first

**The brief's concern is correct and is the single most important ordering constraint in
the whole scaffold.** Rank is *defined* as the common size of the maximal independent
subsets; if that common size is not first proved to exist, the definition is vacuous.

Oxley states the axioms as (S1 §2):

> (I1) I is non-empty.
> (I2) Every subset of every member of I is also in I.
> (I3) If X and Y are in I and |X| = |Y| + 1, then there is an element x in X − Y such
> that Y ∪ {x} is in I.

Schrijver states the augmentation axiom in the strict-inequality form (S2 Thm 10.2(i)):

> if F, F' ∈ I and |F'| > |F|, then F ∪ {x} ∈ I for some x ∈ F' \ F

**Recommendation:** adopt Schrijver's strict-inequality form as the axiom, because it is
the form every downstream proof actually invokes, and record Oxley's `|X| = |Y|+1` form as
an equivalent variant. The equivalence is a 4-step induction and should be its own small
lemma — otherwise every later proof silently does the shrinking step.

**Result: all maximal independent subsets of any X ⊆ E have the same size.**
This is Oxley's Exercise 2.2, and it is the *local* statement, not just the statement
about E. Scaffold it in the local form; the global "all bases are equicardinal" is then
the case X = E.

Proof route:
1. Fix X ⊆ E. Let B_1, B_2 be maximal members of {I ∈ I : I ⊆ X}.
2. Such maximal members exist: {I ∈ I : I ⊆ X} is a nonempty (by (I1),(I2), ∅ belongs)
   finite collection, so it has an inclusion-maximal member.
3. Suppose |B_1| < |B_2|.
4. By (I3) applied with F = B_1, F' = B_2, there is x ∈ B_2 \ B_1 with B_1 ∪ {x} ∈ I.
5. B_1 ∪ {x} ⊆ X since both B_1 ⊆ X and x ∈ B_2 ⊆ X.
6. B_1 ∪ {x} strictly contains B_1, contradicting maximality of B_1.
7. So |B_1| ≥ |B_2|; by symmetry |B_1| = |B_2|.

**7 steps. [A].** Boundary cases the proof must dispose of: X = ∅ (unique maximal
member ∅); B_1 = ∅; the existence claim at step 2 requires E finite, which is part of the
definition.

**Then, and only then:** define r(X) := |B| for any maximal independent B ⊆ X, and
r(M) := r(E). **[A]**, 3 steps.

Note (I1) has two circulating forms — Oxley's "I is non-empty" and Reiner's "∅ ∈ I". They
are equivalent given (I2), in one step. Pick one and prove the other; §D.

### C.2 The rank function and the rank axioms

**Rank axioms** (Reiner §1.5.2 calls r "the semimodular rank function"):
- (R1) 0 ≤ r(X) ≤ |X| for all X ⊆ E
- (R2) X ⊆ Y ⟹ r(X) ≤ r(Y)   (monotone)
- (R3) r(X ∪ Y) + r(X ∩ Y) ≤ r(X) + r(Y)   (submodular / semimodular)

An equivalent and often more convenient package is the *unit-increase* form: r(∅)=0;
r(X) ≤ r(X ∪ {e}) ≤ r(X) + 1; and if r(X ∪ {e}) = r(X ∪ {f}) = r(X) then r(X ∪ {e,f}) = r(X).

**(a) A matroid's rank function is submodular** (Schrijver's (i)⇒(vi), proof given
verbatim in S2 p. 177):
1. Fix Y, Z ⊆ X. Let F be a maximal member of I with F ⊆ Y ∩ Z, so |F| = r(Y ∩ Z) by C.1.
2. Extend F to a maximal F' ∈ I with F ⊆ F' ⊆ Y ∪ Z; then |F'| = r(Y ∪ Z) by C.1.
3. F' ∩ Y ∈ I by (I2) and F' ∩ Y ⊆ Y, so |F' ∩ Y| ≤ r(Y).
4. Likewise |F' ∩ Z| ≤ r(Z).
5. Inclusion–exclusion on the finite sets: |F' ∩ Y| + |F' ∩ Z| = |F' ∩ (Y ∩ Z)| + |F' ∩ (Y ∪ Z)|.
6. F' ⊆ Y ∪ Z, so |F' ∩ (Y ∪ Z)| = |F'| = r(Y ∪ Z).
7. F ⊆ F' and F ⊆ Y ∩ Z, so F ⊆ F' ∩ (Y ∩ Z), giving |F' ∩ (Y ∩ Z)| ≥ |F| = r(Y ∩ Z).
8. Chain 3–7: r(Y) + r(Z) ≥ r(Y ∩ Z) + r(Y ∪ Z).

**~10 steps. [A].** Step 2's extension needs "every independent subset of a set extends to
a maximal one", itself a 3-step finiteness argument — make it a named micro-lemma, it is
used everywhere.

**(b) Conversely, a submodular monotone integer function with r(X) ≤ |X| and the
unit-increase property is the rank function of a matroid** (Schrijver's (vi)⇒(i), S2 p. 178):
1. Given F, F' ∈ I with |F| < |F'|.
2. Let U be the largest subset of F' \ F with r(F ∪ U) = |F|.
3. U ≠ F' \ F, since r(F ∪ F') ≥ r(F') = |F'| > |F|.
4. Pick x ∈ (F' \ F) \ U.
5. If F ∪ {x} ∈ I we are done; so assume not, i.e. r(F ∪ {x}) = |F|.
6. Set U' := U ∪ {x}. Submodularity on F ∪ U and F ∪ {x}, whose intersection contains F:
   r(F ∪ U') ≤ r(F ∪ U) + r(F ∪ {x}) − r(F) = |F|.
7. This contradicts the maximality of U.

**~10 steps. [B]** — it needs the auxiliary equivalence "A ∈ I ⟺ r(A) = |A|", which must
be proved first (3 steps from C.1).

**Recommendation:** scaffold (a) and (b) as two separate lemmas, then a short theorem
item "the rank axioms characterise matroids" that cites both. Do **not** write the
six-way equivalence as one item.

### C.3 Circuit axioms

Oxley's (C1)–(C3) (S1 §3, verbatim):

> (C1) The empty set is not in C.
> (C2) No member of C is a proper subset of another member of C.
> (C3) If C_1 and C_2 are distinct members of C and e ∈ C_1 ∩ C_2, then (C_1 ∪ C_2) − {e}
> contains a member of C.

Schrijver's (v) is the **strong circuit elimination** refinement: additionally, the member
found inside (C ∪ C') \ {x} may be chosen to contain any prescribed y ∈ C \ C'.

**Circuits of a matroid satisfy (C1)–(C3).** [A], ~9 steps. (C3) is the only real content:
suppose (C_1 ∪ C_2) − {e} contains no circuit, so it is independent; extend to a maximal
independent B ⊆ C_1 ∪ C_2; count using |B| ≤ r(C_1 ∪ C_2) and r(C_1 ∪ C_2) ≤ |C_1 ∪ C_2| − 2
(each C_i is dependent so drops the rank by at least one, and submodularity gives the
second drop). This is a genuinely slick argument and worth an item of its own.

**Conversely (C1)–(C3) define a matroid.** This is Schrijver's (iv)⇒(i), S2 p. 177:
1. Let F, F' be a counterexample to (i) with |F ∩ F'| as large as possible.
2. F ⊄ F', so choose y ∈ F \ F'. (Note: S2's text picks y here and re-picks y at step 8;
   the scaffolder must rename one of them — see §F.3.)
3. By maximality of |F ∩ F'|, F' ∪ {x} ∉ I for the relevant x; so some C ∈ C lies inside F' ∪ {x}.
4. C ⊄ F', so x ∈ C.
5. C is the **unique** member of C inside F' ∪ {x}: if C' were another, x ∈ C' too, and by
   (C3) some C'' ⊆ (C ∪ C') \ {x} ⊆ F', contradicting F' ∈ I.
6. C ⊄ F, so C meets F' \ F; choose y ∈ C ∩ (F' \ F).
7. F'' := (F' ∪ {x}) \ {y} contains no member of C, by the uniqueness at step 5.
8. So F'' ∈ I, and replacing F' by F'' keeps a counterexample while increasing |F' ∩ F| —
   contradiction.

**~14 steps. [B].** The uniqueness step 5 is where a careless proof goes wrong.

**Strong circuit elimination (Schrijver's (i)⇒(v))**: ~14 steps, **[B]**, and it needs
basis exchange (ii) already in hand. Scaffold it after duality, not before.

### C.4 Basis axioms and the equivalence theorem

Oxley (B1)/(B2) (verbatim):
> (B1) B is non-empty.
> (B2) If B_1 and B_2 are members of B and x ∈ B_1 − B_2, then there is an element y of
> B_2 − B_1 such that (B_1 − {x}) ∪ {y} ∈ B.

Schrijver splits this into **two** exchange axioms, and the split is the key to duality:
> (ii) if B, B' ∈ B and x ∈ B' \ B, then (B' \ {x}) ∪ {y} ∈ B for some y ∈ B \ B'
> (iii) if B, B' ∈ B and x ∈ B' \ B, then (B \ {y}) ∪ {x} ∈ B for some y ∈ B \ B'

**(i)⇒(ii)**: 6 steps, [A]. (i) gives equicardinality; then B' \ {x} ∈ I has size |B|−1, so
augment from B.

**(ii)⇒(iii)**: the elegant one. **Axioms (ii) and (iii) interchange when B is replaced by
the collection of complements** {E \ B : B ∈ B}. Since (iii)⇒(ii) has already been shown,
the complementation symmetry yields (ii)⇒(iii). ~6 steps, **[A]**, but the symmetry claim
must be *verified* elementwise, not asserted — that is 4 of the 6 steps.

**(iii)⇒(i)**: S2 p. 177, ~10 steps, **[A]/[B]**, by a maximal-|F ∩ F'| counterexample.

**The equivalence theorem itself.** Schrijver's Theorem 10.2 is a six-way equivalence
proved by the cycle (i)⇒(ii), (iii)⇒(i), (ii)⇒(iii), (i)⇒(v), (v)⇒(iv), (iv)⇒(i),
(i)⇒(vi), (vi)⇒(i) — **eight implications**.

**As a single item this is [C] and must not be written as one item.** As a scaffold:
seven or eight lemma items, each [A] or [B], plus one short theorem item that chains them
and is itself ~8 steps of bookkeeping, **[A]**. This decomposition is exactly what the
owner's scaffold-richness rule asks for.

The brief asks for the equivalence "as a theorem, not an assertion" — this satisfies it,
and the chaining item is the theorem.

### C.5 Closure and flats

Closure: cl(X) := {e ∈ E : r(X ∪ {e}) = r(X)}. Flats: X with cl(X) = X.

Closure axioms (Reiner §1.5.3, "the exchange closure operation"):
- X ⊆ cl(X); X ⊆ Y ⟹ cl(X) ⊆ cl(Y); cl(cl(X)) = cl(X);
- **(MacLane–Steinitz exchange)** if y ∈ cl(X ∪ {x}) \ cl(X) then x ∈ cl(X ∪ {y}).

**cl is a closure operator with the exchange property**: ~14 steps, **[B]**. Idempotence
needs r(cl(X)) = r(X), which is a submodularity induction (~6 steps) and should be its own
lemma. The exchange property is a 5-step rank computation.

**Converse (exchange closure operators are matroid closures)**: ~16 steps, **[B]**.

**Flats form a lattice under inclusion**: [A], ~8 steps — meet is intersection (flats are
closed under intersection, 4 steps), join is cl of the union. The library has
`def-lattice-distributive-lattice-and-order-ideal` and poset machinery, so this lands
cleanly.

**Birkhoff's theorem (geometric lattices = lattices of flats of simple matroids)** —
Reiner Theorem 9. **[C], deferred.** It needs semimodular, atomic, graded lattice theory
the library does not have; the library's poset pages give `def-graded-poset-and-rank` but
not geometric lattices. Recommend a `rem-` signpost at most.

### C.6 The standard examples

| example | route | steps | grade |
|---|---|---|---|
| **Uniform** U_{r,n} | I = subsets of size ≤ r; (I1)–(I3) direct | 6 | **[A]** |
| **Vector / representable** M[A] | independence = linear independence of the indexed column family; augmentation is **Steinitz exchange**, which the library has as `thm-steinitz-exchange` | 8 | **[A]** |
| **Graphic** M(G) | I = edge sets of forests | 12 | **[A]** |
| **Partition** | E = ⊔E_i, I = {X : |X ∩ E_i| ≤ k_i} | 7 | **[A]** |
| **Transversal** M[A] | partial transversals of a set family | 18 | **[B]** |
| **Cographic** M*(G) | bonds of G are the circuits | 15 | **[B]** |
| **Matching matroid** on V(G) (Oxley 4.5) | Edmonds–Fulkerson | 20 | **[B]** |

**Graphic matroid, recommended route** (do *not* go via circuit axioms):
1. Forests are closed under subsets. (I2) ✓; ∅ is a forest. (I1) ✓.
2. For a forest F on vertex set V, the graph (V, F) has exactly |V| − |F| components.
   (Induction on |F|; the library has `cor-tree-edge-count` and
   `def-tree-forest-and-leaf`, so this is a short corollary — but it is **not currently in
   the library in the forest form**, see §E.)
3. Let F_1, F_2 be forests with |F_2| > |F_1|. By step 2, (V,F_1) has more components than (V,F_2).
4. So some edge e ∈ F_2 has its two ends in different components of (V, F_1) — otherwise
   every component of (V,F_2) lies inside a component of (V,F_1), forcing (V,F_2) to have
   at least as many components.
5. F_1 ∪ {e} is acyclic: a cycle through e would give an e-avoiding path between its ends
   inside F_1, putting them in one component.
6. Hence (I3).

**~12 steps. [A].** Step 4 is the one that needs care.

**Transversal matroid, Oxley Thm 4.1** — the source gives a complete proof by alternating
paths in the bipartite incidence graph Δ(A):
1. (I1),(I2) are immediate.
2. Build Δ(A): one class E, one class {A_1,…,A_m}, edge e–A_j iff e ∈ A_j.
3. Partial transversals of A ↔ matchings of Δ(A) (restricted to the E-side).
4. Given partial transversals X, Y with |X| = |Y| + 1, take matchings M_X, M_Y.
5. Colour M_X blue, M_Y red, common edges purple; consider H = M_X △ M_Y.
6. Every vertex of H meets one edge or one red and one blue edge, so every component of H
   is an alternating path or an alternating cycle.
7. Δ(A) is bipartite, so every cycle in H is even and has equally many red and blue edges.
8. Blue outnumber red, so some component is a path beginning and ending in blue.
9. Swap colours on that path; the red-plus-purple edges again form a matching.
10. Its E-side is Y ∪ {x} for some x ∈ X \ Y.

**~18 steps. [B].** **The library already has step 5–6 as
`lem-symmetric-difference-of-two-matchings`** — that is the single most useful existing
dependency for this proof and it turns a hard item into a moderate one.

**Cographic.** Two routes. (a) Define M*(G) := (M(G))* and *prove* its circuits are the
bonds. (b) Verify (C1)–(C3) for bonds directly (Oxley 3.3). Route (a) is better: it needs
Theorem 3.9 (§C.8) and gives (M(G))* = M*(G) for free. ~15 steps, **[B]**.

**Counterexample to have on the page:** transversal matroids are **not** minor-closed —
Oxley 4.3 gives M(G_1) transversal with M(G_1)/7 not transversal, with a complete
6-step verification. `cex-`, **[A]**.

### C.7 Duality

**(a) The dual exists.** Given the (ii)⇔(iii) symmetry of §C.4, this is Schrijver's
Corollary 10.2a and is essentially free:
1. B* := {E \ B : B ∈ B}.
2. B* is nonempty.
3. Under complementation, axiom (ii) for B* is literally axiom (iii) for B, and vice versa.
4. B satisfies both (ii) and (iii) (Theorem of §C.4), so B* satisfies both.
5. By (iii)⇒(i), B* is the basis family of a matroid.

**5 steps. [A]** — *provided* the two exchange axioms and their equivalence are already
scaffolded. This is the strongest single argument for adopting Schrijver's two-axiom
presentation rather than Oxley's single (B2).

**(b) Complements of bases are bases** is the content of (a); (M*)* = M is 3 steps, [A].

**(c) r*(X) = |X| − r(M) + r(E \ X)** (Schrijver Thm 10.3):
1. r*(Y) = max{|A ∩ Y| : A ∈ B*}  — rank is the max size of an independent subset, and
   every independent set sits in a basis.
2. = max{|Y| − |B ∩ Y| : B ∈ B} = |Y| − min{|B ∩ Y| : B ∈ B}.
3. |B ∩ Y| = |B| − |B \ Y| = r(M) − |B \ Y|.
4. So r*(Y) = |Y| − r(M) + max{|B \ Y| : B ∈ B}.
5. max{|B \ Y| : B ∈ B} = r(E \ Y): "≤" because B \ Y is independent and inside E \ Y;
   "≥" by taking a maximal independent subset of E \ Y and extending it to a basis.
6. Conclude.

**~11 steps. [A].** Step 5's "≥" direction is the only substantive one and needs the
extension micro-lemma from §C.2.

Immediate corollaries, each **[A]**, 3–5 steps: r(M) + r(M*) = |E| (Oxley 3.13);
(U_{r,n})* ≅ U_{n−r,n} (Oxley 3.7).

**(d) Cocircuits are the minimal blockers of bases** (Oxley 3.9). ~12 steps, **[A]/[B]**.
This is the bridge to bonds and hence to cographic matroids; make it a named lemma.

**(e) Dual of a representable matroid** (Oxley 3.15): if M = M[I_r|D] over F then
M* = M[−D^T|I_{n−r}]. Proof route: bases of M[I_r|D] correspond to nonsingular r×r
submatrices; a determinant identity relates the r×r minors of [I_r|D] to the complementary
(n−r)×(n−r) minors of [−D^T|I_{n−r}]. **[B], ~18 steps** — and see §E, the clean proof of
that minor identity is a **Cauchy–Binet / Jacobi complementary-minor** computation, which
the library does **not** have. There is an alternative orthogonality route (Oxley's own
remark, S1 p. 14): the row space of [I_r|D] and the row space of [−D^T|I_{n−r}] are
orthogonal complements, and a basis-complement argument on subspaces gives the result
without complementary minors. **Recommend the orthogonality route**, ~16 steps, **[B]**,
using only rank–nullity and orthogonal complements.

**(f) (M(G))* = M*(G)** (Oxley 3.6) and **planar duality**. For a **plane** graph G, the
library has `def-plane-dual-multigraph` and
`thm-plane-dual-exists-and-double-dual-recovers-primal`. The needed bridge is:

> T is (the edge set of) a spanning tree of G if and only if E \ T is a spanning tree of G*.

Proof via Euler's formula (`thm-euler-formula-for-connected-plane-graphs`, published):
count |V| − 1 = |T| and |V*| − 1 = |E| − |T| using |V| − |E| + |F| = 2 and |V*| = |F|.
**~16 steps, [B]**, plus an acyclicity/connectivity argument that is the fiddly half.
From it, M(G*) = (M(G))* for plane G, ~6 steps, **[A]**.

**(g) Whitney: a graphic matroid's dual is cographic iff the graph is planar.** The brief
asks "is that in reach?" **Answer: half of it.**
- **Forward (G planar ⟹ M(G)* is graphic, i.e. M(G) is cographic): in reach, [B]**, via
  (f) — it is essentially (f) plus the definition.
- **Converse (M(G)* graphic ⟹ G planar): [C], not in reach — and this is now
  source-confirmed rather than inferred.** Two independent routes appear in the harvest and
  both are expensive:
  - *Via excluded minors:* Tutte's characterisation of graphic matroids (Oxley 5.11), for
    which S1 supplies no proof at all.
  - *Via matroid connectivity:* **S7 proves it** — Lemma 302 [6.1] plus Corollary 303
    [1.24] — but Lemma 302 runs an induction on deletion/contraction using *dual planar
    embeddings* and cites S7's Theorem 5.4 ("either M/e or M\e is connected"), so it rests
    on the whole of S7 §5 (Bixby–Coullard, fundamental graphs, Tutte connectivity, vertical
    connectivity, wheels). The library has none of that apparatus.
  S7 itself flags the cost, verbatim at its Remark 67: *"We will return to the proof of
  Theorem 1.21 later in the course. We could prove it now but it would take considerable
  time."* The library's `thm-kuratowski-wagner-planarity-characterisation` gets you the
  graph side but not the matroid side.
- **A cheap and genuinely satisfying substitute exists.** S7 gives a complete ~10-step
  proof that **M(K_5)\* is not graphic** (count |V(G)| = r(M(K_5)*) + 1 = 7 against
  |E| = 10, find a vertex of degree ≤ 2, get a cocircuit of size ≤ 2, contradict the fact
  that M(K_5) has no 2-element circuit), with M(K_{3,3})* left as its Exercise 65.
  **[A]/[B], ~12 steps each.** These two give the reader the real content of "duality sees
  planarity" at a fraction of the cost, and they are the right `included` items.
- **Recommendation:** prove the forward direction; state the converse as a source-cited
  `rem-` item with `proved_here: false`, or defer it. Do **not** let a page title claim
  "Whitney's planarity criterion" if only one direction is proved — that is exactly the
  title-overclaims-the-proof fatal defect `CLAUDE.md` §"Step-6" names.

### C.8 Minors

Deletion M\e (restrict I), contraction M/e (I'' = {I ⊆ E−e : I ∪ {e} ∈ I} for e not a
loop; M/e := M\e for e a loop).

| result | source | steps | grade |
|---|---|---|---|
| M\e, M/e are matroids | Oxley §3, Schrijver §10.2 | 10 | **[A]** |
| M\e\f = M\f\e, M/e/f = M/f/e, M\e/f = M/f\e (Oxley 3.17) | | 9 | **[A]** |
| independent sets / circuits / bases of M\T and M/T (Oxley 3.18, six parts) | | 22 | **[B]** — split into two items, one for deletion one for contraction |
| r_{M/Y}(U) = r_M(U ∪ Y) − r_M(Y) (Schrijver Ex. 10.8) | | 8 | **[A]** |
| **M*/T = (M\T)*, M*\T = (M/T)*** (Oxley 3.19) | | 10 | **[A]** — the duality–minor interchange, load-bearing everywhere downstream |
| uniform / graphic / cographic / F-representable classes are minor-closed (Oxley 3.20) | full proof in S1 | 16 | **[B]** |
| direct sum M_1 ⊕ M_2 (Oxley 3.21) | | 8 | **[A]** |

**Deletion–contraction "of matroids"** in the brief's sense — the recursion
X = (X\e) ⊎ (X/e) on a counting invariant — is not itself a theorem about matroids; it is
the mechanism behind the Tutte polynomial. See §C.12.

### C.9 The greedy algorithm characterises matroids (Rado–Edmonds)

**Both directions have complete proofs in S1 (Oxley 4.7, 4.8); S2 Theorem 10.1 is an
independent second treatment.**

**Direction 1 — greedy works on a matroid** (Oxley Lemma 4.7):
1. Weights positive ⟹ a maximum-weight independent set is a basis.
2. B_G = {e_1,…,e_r} in the order chosen, so w(e_1) ≥ … ≥ w(e_r).
3. Let B = {f_1,…,f_r} be a maximum-weight basis, w(f_1) ≥ … ≥ w(f_r).
4. Claim w(e_j) ≥ w(f_j) for all j. Suppose not; let k+1 be least with w(e_{k+1}) < w(f_{k+1}).
5. Y = {e_1,…,e_k}, X = {f_1,…,f_{k+1}}; |X| = |Y| + 1.
6. By (I3), Y ∪ {f_i} ∈ I for some i ≤ k+1.
7. w(f_i) ≥ w(f_{k+1}) > w(e_{k+1}), so greedy would have taken f_i at step k+1 — contradiction.
8. Sum: w(B_G) ≥ w(B).

**~14 steps. [A]/[B].** Boundary cases: r = 0; ties in the weights (the argument is
tie-safe but the scaffold must say so).

**Direction 2 — greedy works ⟹ matroid** (Oxley Theorem 4.8). This is the striking half:
1. Assume (I1),(I2) and the greedy property (G); suppose (I3) fails.
2. Take X, Y ∈ I with |X| = |Y| + 1 and Y ∪ {e} ∉ I for all e ∈ X \ Y.
3. |X \ Y| = |Y \ X| + 1 and Y \ X ≠ ∅.
4. Choose ε with 0 < ε < 1 and 0 < (1 + 2ε)|Y \ X| < |X \ Y|.
5. Define w: 2 on X ∩ Y; 1/|Y \ X| on Y \ X; (1+2ε)/|X \ Y| on X \ Y;
   ε/(|X \ Y|·|E \ (X ∪ Y)|) on E \ (X ∪ Y).
6. Greedy picks all of X ∩ Y first, then all of Y \ X.
7. By assumption it can then take nothing from X \ Y; the rest of B_G lies in E \ (X ∪ Y).
8. w(B_G) ≤ 2|X ∩ Y| + 1 + ε.
9. X extends to a maximal X' ∈ I, and w(X') ≥ w(X) = 2|X ∩ Y| + 1 + 2ε.
10. w(X') > w(B_G), contradicting (G).

**~18 steps. [B].**

**Boundary case the scaffolder must not miss:** Oxley writes the fourth weight branch as
"if e ∈ E − (X ∪ Y) ≠ ∅". **When E = X ∪ Y that branch is empty and the denominator
|E \ (X ∪ Y)| is zero.** The proof is fine — the branch simply does not occur, and step 8
becomes w(B_G) ≤ 2|X ∩ Y| + 1 — but a numbered-step rendering that writes the formula
unconditionally divides by zero. This is exactly a boundary-pass item under the owner's
proof-design rule. Flagging it explicitly.

Schrijver's Theorem 10.1 proves the same equivalence with a different weight construction;
having both means the pair has two independent treatments of its centrepiece.

**Also worth an item:** Schrijver Exercise 10.19 — a basis B is of maximum weight iff
w(B') ≤ w(B) for every basis B' with |B' \ B| = 1 (local optimality suffices). ~10 steps,
**[A]**. It is the cleanest statement of why greedy is not a coincidence.

### C.10 Matroid intersection (Edmonds)

**The brief asks: how long is this really? Answer: as one item [C]; decomposed into five
items, each [B] — and it IS in reach, because the library has König's theorem.**

Schrijver's development, §10.4–§10.5:

**Exchange graph** H(M, Y) for Y ∈ I: bipartite on X with classes Y and X \ Y; y ∈ Y and
x ∈ X \ Y adjacent iff (Y \ {y}) ∪ {x} ∈ I. `def-`, [A].

**Lemma 10.1** — *Y, Z ∈ I with |Y| = |Z| ⟹ H(M,Y) has a perfect matching on Y △ Z.*
1. Suppose not.
2. **By König's matching theorem** there are S ⊆ Y \ Z and S' ⊆ Z \ Y with |S| < |S'| such
   that every edge of H(M,Y) meeting S' has its other end in S.
3. |(Y ∩ Z) ∪ S| < |(Y ∩ Z) ∪ S'|, so by augmentation there is z ∈ S' with
   T := (Y ∩ Z) ∪ S ∪ {z} ∈ I.
4. Extend: there is U ∈ I with T ⊆ U ⊆ T ∪ Y and |U| = |Y|.
5. So U = (Y \ {x}) ∪ {z} for some x ∉ S.
6. Then {x, z} is an edge of H(M,Y) with z ∈ S', x ∉ S — contradicting step 2.

**~14 steps. [B].** **Dependency: `thm-konig-bipartite-matching-cover`, published.**
This is the load-bearing fact and it is already in the library.

**Lemma 10.2** — *Y ∈ I, |Z| = |Y|, and H(M,Y) has a **unique** perfect matching N on
Y △ Z ⟹ Z ∈ I.* Induction on k = |Z \ Y|.
1. k = 0 trivial.
2. Uniqueness gives an edge {y,z} ∈ N with no other z' ∈ Z \ Y adjacent to y.
3. Z' := (Z \ {z}) ∪ {y}, N' := N \ {{y,z}}; N' is the unique matching with union Y △ Z'.
4. By induction Z' ∈ I.
5. Choose S ∈ I with Z' \ {y} ⊆ S ⊆ (Y \ {y}) ∪ Z and |S| = |Y|.
6. If Z ∉ I then z ∉ S, so r((Y ∪ Z') \ {y}) = |Y|.
7. Hence some z' ∈ Z' \ Y has (Y \ {y}) ∪ {z'} ∈ I, contradicting step 2.

**~18 steps. [B].** The induction bookkeeping at 3 and the rank argument at 6 are both
delicate; this is the hardest of the five.

**Augmenting digraph** H(M_1, M_2, Y) plus source class X_1 and sink class X_2. `def-`, [A].

**Case 1 (a shortest X_1–X_2 path augments)** — Schrijver Theorem 10.6, ~22 steps, **[B]/[C]**;
uses Lemma 10.2 on each of M_1 and M_2.

**Case 2 (no path ⟹ Y is maximum)** — Schrijver Theorem 10.7:
1. No directed X_1–X_2 path, so let U be the set of vertices not reachable from X_1;
   then X_2 ⊆ U, U ∩ X_1 = ∅, no arc enters U.
2. Claim r_{M_1}(U) = |Y ∩ U|. "≥" is clear.
3. If ">", there is x ∈ U \ Y with (Y ∩ U) ∪ {x} ∈ I_1.
4. Then there is Z ∈ I_1, |Z| ≥ |Y|, with (Y ∩ U) ∪ {x} ⊆ Z ⊆ Y ∪ {x};
   so Z = Y ∪ {x} or Z = (Y \ {y}) ∪ {x} with y ∈ Y \ U.
5. First alternative puts x ∈ X_1, contradicting x ∈ U.
6. Second makes (y,x) an arc entering U — contradiction.
7. Symmetrically r_{M_2}(X \ U) = |Y \ U|.
8. So r_{M_1}(U) + r_{M_2}(X \ U) = |Y|.
9. For any Z ∈ I_1 ∩ I_2: |Z| = |Z ∩ U| + |Z \ U| ≤ r_{M_1}(U) + r_{M_2}(X \ U) = |Y|.

**~16 steps. [B].**

**Edmonds' matroid intersection theorem** (Thm 10.9):
> max_{Y ∈ I_1 ∩ I_2} |Y| = min_{U ⊆ X} (r_{M_1}(U) + r_{M_2}(X \ U))

Given the above, ~8 steps, **[A]**: "≤" is step 9 above for every U; "≥" is the U produced
by Case 2.

**Total honest cost: 5 items, ~78 numbered steps, plus 2 definitions.** That is a
substantial but entirely feasible block, and it is the natural spine of a second pair.

**Alternative route worth recording.** There is a non-algorithmic induction-on-|E| proof of
Theorem 10.9 (delete/contract an element and induct) that avoids the exchange graph, the
two technical lemmas and König entirely, at roughly 30–35 steps in one item — **[B]/[C]**,
splittable into two. **None of the three sources obtained gives it**, so scaffolding it
would mean writing a proof the harvest does not back. **Recommendation: use Schrijver's
route.** It is fully source-backed, it reuses a published library dependency (König), and
its pieces are individually short enough for the house style.

**Counterexample to include:** (X, I_1 ∩ I_2) is generally **not** a matroid (Schrijver
Ex. 10.21). `cex-`, ~6 steps, **[A]**. Without it a reader will assume intersection of
matroids is a matroid, which is the single most common misconception here.

**Cheap consequences of Thm 10.9**, each **[A]/[B]**:
- König's matching theorem re-derived (Ex. 10.22), ~12 steps — a satisfying loop back to a
  published item.
- Common transversals of two set families (Ex. 10.23), ~14 steps.
- Rado's independent transversal theorem (Ex. 10.26), ~14 steps.
- Rainbow spanning trees (Ex. 10.25), ~12 steps.

### C.11 Matroid union, covering, packing, arboricity and tree packing

**Matroid union theorem.** I_1 ∨ I_2 := {Y_1 ∪ Y_2 : Y_i ∈ I_i}; k-fold analogously.

> (X, I_1 ∨ … ∨ I_k) is a matroid, with
> r_{∨}(Y) = min_{U ⊆ Y} ( Σ_i r_{M_i}(U) + |Y \ U| ).

**Route A — via matroid intersection** (Schrijver Ex. 10.27, with his hint "apply the
matroid intersection theorem to M_1 and M_2*"):
1. Establish the max-cardinality formula for I_1 ∨ I_2 from Thm 10.9. ~14 steps.
2. Relativise to each Y ⊆ X. ~6 steps.
3. Deduce (X, I_1 ∨ I_2) is a matroid by verifying that r_∨ is submodular — a **min of
   submodular functions is not generally submodular**, so this step is real work; Schrijver's
   hint is to use axiom (vi). ~14 steps.
4. Iterate to k matroids by induction. ~6 steps.

**~40 steps across 3 items, each [B].** Grade of the whole: **[B]** decomposed, [C] as one item.

**Route B — direct, via "matroid induced by a function"**: prove that the image of a
matroid under a function is a matroid with an explicit rank formula, then apply it to
M_1 ⊕ … ⊕ M_k over k disjoint copies of E. ~25 steps in one lemma plus 8 to apply it.
Shorter, and it does **not** require matroid intersection. **No source in this harvest
proves it**, so under the source-grounding rule it would have to be sourced elsewhere first.

**Route C — via free extension into a line, and it REVERSES the dependency order.**
S7 §4.2–§4.3 builds union first and gets intersection as a consequence:
- *Definition 202.* Take disjoint copies N_1, N_2 of M_1, M_2 on disjoint ground sets;
  form N_1 ⊕ N_2; then for each e ∈ E, **freely extend into the line {e_1, e_2}**, adding a
  new element e. Call the result M_1 ∇ M_2.
- *Lemma 203 [4.4].* `(M_1 ∇ M_2)|E = M_1 ∪ M_2` — the union is a **restriction** of an
  explicitly constructed matroid, so it is a matroid with no submodularity verification at
  all. ~20 steps, plus ~15 for the free-extension construction it depends on. **[B].**
- *Lemma 231 [4.14].* `ν(M_1, M_2) = r(M_1 ∪ M_2*) − r(M_2*)` — **matroid intersection
  derived from matroid union**, the exact reverse of Schrijver's hint. ~16 steps, **[B]**.

**This is the most consequential scaffolding choice in the whole harvest**, and the
scaffolder must make it deliberately rather than drift into one:

| | Route A (Schrijver, S2) | Route C (Waterloo, S7) |
|---|---|---|
| order | intersection → union | union → intersection |
| prerequisite | König's theorem (**published**) | free extension into a flat (**must be built**) |
| intersection cost | ~78 steps / 5 items | ~16 steps / 1 item, *given* union |
| union cost | ~40 steps / 3 items, *given* intersection | ~35 steps / 2 items |
| gives an algorithm? | yes (augmenting paths) | no, min-max only |
| total | ~118 steps | ~51 steps + free-extension machinery |

**Recommendation: Route A as the spine, Route C's Lemma 231 as a `rem-` or a second
proof.** Route A is longer but every one of its pieces is short, it reuses a published
library dependency, and the exchange-graph machinery is independently valuable. Route C is
seductively short but the free-extension construction is a genuine new prerequisite
(single-element extensions, freedom, modular cuts) that costs more than the table shows
and that no other part of either pair needs. Having both sources means **either choice is
fully backed** — which is the real payoff of holding S2 and S7 together.

**Downstream, all from the union rank formula, all cheap:**

| result | source | route | steps | grade |
|---|---|---|---|---|
| **Edmonds' covering theorem** — X is coverable by k independent sets iff \|U\| ≤ k·r(U) ∀U | Schrijver Ex. 10.28(i) | k-fold union of M with itself has rank \|X\| iff the inequality | 12 | **[A]** |
| **Nash-Williams arboricity** — E partitions into k forests iff every W ⊆ V spans ≤ k(\|W\|−1) edges | Schrijver Ex. 10.29 | covering applied to M(G), then translate r_{M(G)}(U) = \|V(U)\| − c(U) and reduce the worst U to an induced edge set | 16 | **[A]/[B]** |
| **Edmonds' base packing** — k disjoint bases iff k(r(E) − r(U)) ≥ \|E \ U\| ∀U | Schrijver Ex. 10.31(i) | union rank formula with Y = X | 13 | **[A]/[B]** |
| same, **contraction form**: k disjoint bases iff \|M/X\| ≥ k·r(M/X) for every X ⊆ E | **S7 Thm 214 [4.9 – Tutte, Nash-Williams]** | union rank formula, but stated over contractions | 12 | **[A]/[B]** — **prefer this form.** It is visibly a statement about minors, it avoids the E\U bookkeeping that makes Schrijver's version error-prone, and S7 supplies the four supporting remarks (213(1)–(4)) as free lemmas |
| **every simple planar graph is covered by three forests** | **S7 Cor 220 [4.12]** | arboricity applied to a planar G, using \|E(H)\| ≤ 3\|V(H)\| − 6 on every subgraph | 14 | **[B]** — a genuinely memorable payoff, and its planarity input `cor-planar-simple-graph-edge-bound` is **already published** |
| **Nash-Williams / Tutte tree packing** — k edge-disjoint spanning trees iff every partition into t classes has ≥ k(t−1) crossing edges | Schrijver Ex. 10.32; Oxley Cor. 3.11 for k = 2 | base packing applied to M(G), then the U ⊆ E ↔ vertex-partition translation | 18 | **[B]** |
| partition into k partial transversals | Schrijver Ex. 10.30 | covering applied to a transversal matroid | 14 | **[B]** |

**The one genuinely fiddly step in the whole block** is the U ⊆ E ↔ partition translation
in tree packing: given U ⊆ E, take the partition into components of (V,U); conversely,
given a partition, take U to be the edges inside classes. Both directions need
r_{M(G)}(U) = |V| − c(V,U). Budget 6 of the 18 steps there.

**Oxley's Corollary 3.11 gives the k = 2 case with a complete, charming proof** (the
strategy-stealing argument for the Shannon switching game). It is worth an item on its own
as the k=2 case even though the general theorem subsumes it, because it is the only place
in the harvest where a *constructive* argument appears.

### C.12 The Tutte polynomial

Reiner §3.1 is the only source in the harvest that develops it, but it develops it
completely enough to scaffold, and Oxley §7 signposts the literature.

**Definition (rank–nullity / corank–nullity form).** Verbatim from Reiner:
> S_M(x,y) = Σ_{A ⊆ E} x^{rank(M) − r(A)} y^{|A| − r(A)},  T_M(x,y) := S_M(x − 1, y − 1)

i.e. T_M(x,y) = Σ_{A ⊆ E} (x−1)^{r(E) − r(A)} (y−1)^{|A| − r(A)}. `def-`, **[A]**.

| result | route | steps | grade |
|---|---|---|---|
| T_M is a polynomial in x,y with integer coefficients | the exponents are non-negative integers by (R1),(R2) | 8 | **[A]** |
| **T4: T_{M*}(x,y) = T_M(y,x)** | substitute r*(A) = \|A\| − r(E) + r(E\A) into the sum and reindex A ↦ E \ A | 12 | **[A]/[B]** |
| **T2': T_{M_1 ⊕ M_2} = T_{M_1}·T_{M_2}** | ranks add over the direct sum; the sum over A ⊆ E_1 ⊎ E_2 factorises | 10 | **[A]** |
| **T1/T2: deletion–contraction** | split Σ_A into A ∌ e and A ∋ e; use r_{M\e}(A) = r_M(A) and r_{M/e}(A) = r_M(A ∪ e) − r_M({e}); then the loop and coloop cases separately | 22 | **[B]** |
| **T3 + uniqueness/existence (Reiner Thm 27)** | induction on \|E\|, using T1/T2/T3 | 16 | **[B]** |
| **Universality (Reiner Prop 28)**: Ψ(M) = a^{r(M*)} b^{r(M)} T_M(c/b, d/a) | induction on \|E\| against the recursion | 20 | **[B]** |
| independent-set and spanning-set specialisations T(1+t,1), T(1,1+u) | direct from the rank–nullity sum | 12 | **[A]/[B]** |
| **basis-activity expansion** T = Σ_B x^{ia(B)} y^{ea(B)} | Tutte's internal/external activity | 30+ | **[C]** as one item; **[B]** if split into (a) activities are well defined, (b) the bases partition 2^E into intervals, (c) the count. **The interval-partition lemma is the expensive part and no source here proves it.** Recommend `deferred` unless P3 has room |
| reliability polynomial | evaluation of T | 8 | **[A]** |
| **chromatic polynomial specialisation** χ_G(t) = (−1)^{r(M(G))} t^{c(G)} T_{M(G)}(1−t, 0) | see below | 16 | **[B]** |
| flow polynomial | needs nowhere-zero Z/uZ flows | 25+ | **[C]** — `deferred`, the library has no flow-polynomial or nowhere-zero-flow machinery |
| characteristic polynomial via Möbius μ of the lattice of flats | Reiner's χ_M(t) = Σ_{X ∈ L(M)} μ(0̂,X) t^{r(M)−r(X)} | 18 | **[B]** — **and this one is unexpectedly affordable**, because the library already has `cor-mobius-inversion-for-finite-posets`, `def-poset-mobius-function` and lattice definitions |

**The chromatic-polynomial specialisation has a prerequisite the library lacks.** There is
**no chromatic polynomial in the library** — `grep` finds `chromatic number` items only.
Under the owner's build-the-machinery rule this is a *build*, not a drop: it costs three
items (define P_G(t); prove it is a monic degree-|V| polynomial; prove its
deletion–contraction recursion), each **[A]/[B]**, ~30 steps total. Only then is the
specialisation a 16-step item. Budget accordingly.

### C.13 Whitney's 2-isomorphism theorem

Reiner Theorem 23 states it; **no source in this harvest proves it**, and Oxley's survey
does not state it at all (it lives in Oxley's book, ch. 5).

**Verdict: [C], not in reach.** The proof requires 2-sums/3-connectivity theory for
matroids and graphs, Tutte's wheels-and-whirls-style connectivity apparatus, and a careful
treatment of Whitney twists. That is a page of its own resting on machinery the library
does not have.

**Recommendation:** a source-cited `rem-` item with `proved_here: false`, stating the
theorem exactly, citing Reiner Thm 23 with the working URL plus Oxley's book, and recorded
in the batch notes with the failed in-library route. Or defer entirely. The related and
much cheaper fact — *a 3-connected graph is determined up to isomorphism by its cycle
matroid* — is also not proved in the harvest and should not be smuggled in as "obvious".

### C.14 Representability and excluded minors — what is provable and what is statement-only

| result | status in the harvest | verdict |
|---|---|---|
| **U_{2,n} is F-representable iff \|F\| ≥ n − 1** (Oxley 5.13) | stated, "the reader will easily show"; the proof is a short scaling argument on 2×n matrices | **[A]/[B]**, ~12 steps. **Provable.** Gives U_{2,4} not binary in 2 more steps |
| **U_{2,4} is not binary but is ternary** (Oxley 2.8) | | **[A]**, ~8 steps from 5.13 |
| **binary matroids: fundamental circuits determine M** (Oxley Lemma 5.2) | stated; proof is a GF(2) linear-algebra argument | **[B]**, ~16 steps. Load-bearing for 5.15 |
| **A matroid is binary iff it has no U_{2,4} minor** (Tutte; Oxley Thm 5.15) | **complete proof given in S1**, pp. 32–33 | **[B]/[C]** — ~38 steps, and it cites Lemma 5.2, Theorem 3.9, (3.19) and Prop 3.18(ii), all of which P1 supplies. **Provable, and it is the right capstone for P3.** Split into the main theorem plus the internal claim (5.15.3) as a lemma |
| **F_7 / F_7^- representability by characteristic** (Oxley Prop 5.3) | **complete proof in S1** | **[B]**, ~26 steps; needs field characteristic and the fact that a prime-characteristic field contains GF(p). The library has `def-field` and `def-integers-modulo-n` but **no developed finite-field theory** — see §E |
| **F_7 ⊕ F_7^- is not representable over any field** (Oxley Cor 5.4) | **complete proof in S1** (2 lines from 5.3) | **[A]**, ~6 steps. A genuinely striking result for the cost |
| **relaxation of a circuit-hyperplane** (Oxley 5.5, 5.6) | stated, "can be proved using Theorem 3.2", "not difficult" | **[B]**, ~18 + ~16 steps |
| **AG(3,2)' is a smallest non-representable matroid** | S1 constructs it, citing Fournier 5.7 for minimality | construction **[B]**; **minimality `deferred`** (5.7 unproved in S1) |
| **ternary iff no U_{2,5}, U_{3,5}, F_7, F_7^* minor** (Oxley 5.14) | **S1 states verbatim: "None is elementary enough for inclusion here."** | **[C], statement-only.** `rem-` with `proved_here: false` |
| **regular ⟺ binary and ternary ⟺ TU-representable ⟺ no U_{2,4}, F_7, F_7^* minor** (Oxley 5.16) | stated, no proof | **[C], statement-only** |
| **graphic / cographic excluded minors** (Oxley 5.11, 5.12) | stated, no proof | **[C], statement-only** |
| **Seymour's regular decomposition** (Oxley 6.6) | stated; §6 rests on LP and integral polyhedra | **[C], out-of-scope** — see §E |
| Rota's conjecture (Oxley 3.29) | open problem | `rem-` or page prose only |

**Net:** a representability page can honestly prove U_{2,n} representability, U_{2,4}
non-binary, Lemma 5.2, **Tutte's binary excluded-minor theorem in full**, the Fano
characteristic proposition, and non-representability of F_7 ⊕ F_7^-. Everything past that
is statement-only. That is a respectable page, and its title must not promise "Tutte's
excluded-minor theorems" plural.

### C.15 Results the brief asked about, answered directly

- **"All bases have the same size, before rank is defined"** — yes, and in the *local*
  form (§C.1). **[A].** Non-negotiable ordering constraint.
- **"The equivalence of these axiomatisations as a theorem, not an assertion"** — yes,
  fully proved in S2 Thm 10.2; scaffold as 7–8 lemmas + 1 chaining theorem, **not** one item.
- **"Whitney: graphic dual is cographic iff planar"** — forward direction **[B]**, in reach;
  converse **[C]**, not in reach (§C.7g).
- **"Greedy characterises matroids"** — yes, both directions, two independent sources.
  **[A]/[B] + [B]**.
- **"Matroid union, matroid intersection, matroid partition — how long are these really?"**
  — intersection ~78 steps over 5 items; union ~40 steps over 3 items given intersection;
  covering/packing/arboricity/tree-packing ~59 steps over 4 items. **Total for the
  optimization block: ~180 numbered steps over 12 items plus definitions.** That is a full
  A page's worth, and it is why §G recommends a separate pair.
- **"Nash-Williams / Tutte tree packing and arboricity via matroid union"** — yes, both,
  and they are *cheap* once union is in hand (**[A]/[B]** and **[B]**). They are the payoff
  that justifies the union machinery.
- **"Which excluded-minor results are provable in bounded steps?"** — only the binary one
  (§C.14). Ternary, regular, graphic, cographic and Seymour are statement-only.
- **"Tutte polynomial, deletion–contraction, specialisations"** — definition and T1–T4 all
  **[A]/[B]**; universality **[B]**; chromatic specialisation **[B] plus a 3-item
  chromatic-polynomial build**; flow polynomial and basis activities **[C]/deferred**.
- **"Whitney's 2-isomorphism"** — **[C], not in reach.** `rem-` or defer (§C.13).

---

## D. Convention disagreements, with sources and a recommendation

**D.1 The augmentation axiom.** Oxley (S1 §2): `|X| = |Y| + 1`. Schrijver (S2 Thm 10.2(i))
and Reiner (S3 I3): `|F'| > |F|`. Equivalent given (I2).
**Recommend the strict-inequality form** as the definition, with the `+1` form as a
one-lemma equivalent. Every downstream proof uses the strict form.

**D.2 (I1).** Oxley: "I is non-empty". Reiner: "∅ ∈ I". Equivalent given (I2).
**Recommend "∅ ∈ I"** — it is what proofs cite, and it makes the empty matroid legal
without a special case.

**D.3 Loops and parallel elements.** All three sources allow them; a matroid with neither
is **simple** (Reiner §1.5.4 and Birkhoff's theorem are about *simple* matroids; Rota's
"combinatorial geometry", quoted by Oxley S1 p. 3, is a simple matroid).
**Recommend: allow loops and parallel elements, define `simple` explicitly, and never
silently assume simplicity.** Schrijver Ex. 10.2 defines parallel elements; Ex. 10.7
handles loops in contraction (`M/{x} = M \ {x}` for a loop x) — that case split is real
and a proof that omits it is wrong.

**D.4 The vector matroid's ground set is an index set, not a set of vectors.** Oxley
S1 §2.1 is careful: E is "the set of column labels", and independence is of "the **multiset**
of columns labelled by I". If the ground set were the set of vectors, repeated columns
would collapse and parallel elements would be impossible. **Recommend Oxley's phrasing
verbatim**; this is the most common silent error in a first matroid definition.

**D.5 "Circuit" vs "cycle".** Matroid theory: **circuit** = minimal dependent set (all
three sources). Graph theory: a **cycle** is a subgraph; its edge set is a circuit of M(G).
The library's graph pages use graph-theoretic "cycle".
**Recommend: "circuit" throughout the matroid pages, with an explicit bridging sentence
and a `def-` cross-reference the first time M(G) appears.** Do not redefine "cycle".
Note also **cocircuit** = circuit of M*, and in a graphic matroid a cocircuit is a **bond**
(minimal edge cut) — Oxley S1 §3 defines bond exactly this way.

**D.6 "Corank" is ambiguous, and the harvest contains both uses.** Reiner §3.1 calls
S_M(x,y) the "**corank**-nullity polynomial", where the exponent of x is
`rank(M) − r(A)` — i.e. corank *of a subset A relative to M*. But "corank" is elsewhere
used for `r(M*) = |E| − r(M)`. Nullity is unambiguous: `n(A) = |A| − r(A)`.
**Recommend: use `n(A) = |A| − r(A)` for nullity, and write `r(E) − r(A)` out in full
rather than calling it corank.** If the word is wanted, define it once, explicitly, in the
subset sense, and never use it for r(M*).

**D.7 `U_{r,n}` index order.** Oxley (S1 2.5): `U_{r,n}` = rank r on n elements, and
`(U_{r,n})* ≅ U_{n−r,n}`. Schrijver instead says "**k-uniform matroid**" (Ex. 10.4) with no
two-index notation. Reiner uses Oxley's.
**Recommend Oxley's `U_{r,n}`, rank first.** It is the dominant convention in the matroid
literature and it is the one under which the duality formula reads correctly.

**D.8 Dual notation.** Oxley and Schrijver: `M*`. Reiner: `M^⊥`.
**Recommend `M*`** (2 of 3 sources, and `M^⊥` collides with orthogonal complement, which
the library uses in linear algebra).

**D.9 Coloop / isthmus / bridge.** Reiner writes "coloop/isthmus" (S3 Thm 27 T2, T3).
Oxley writes "coloop". Graph theory says "bridge" or "cut edge".
**Recommend "coloop"**, defined as an element in every basis (equivalently a loop of M*),
with a one-line note that in M(G) a coloop is a bridge of G.

**D.10 Basis exchange: two different axioms share one name.** Oxley's (B2) removes from
B_1 and adds from B_2; Schrijver's (ii) and (iii) are the two directions and he keeps both.
**Recommend: state both, name them distinctly (e.g. "basis exchange" and "dual basis
exchange"), and prove their equivalence.** This is not pedantry — the whole existence
proof of the dual matroid (§C.7a) is the observation that complementation swaps them, and
that argument is unavailable if the page carries only one.

**D.11 Finiteness.** All three sources take E finite throughout and none says so in a
displayed hypothesis. Infinite matroids are a genuinely different theory.
**Recommend: put "finite" in the definition, in the displayed statement, not in prose.**
Several proofs (existence of maximal independent sets; the greedy algorithm terminating)
are false without it.

**D.12 `r(∅) = 0`.** No disagreement across the three sources. Recorded because the brief
asked; it is a theorem from (I1)+(I2), not a separate axiom, in the independence
presentation, and an axiom in the rank presentation.

**D.13 Matroid union notation.** Oxley (Ex. 3.12) and Schrijver (Ex. 10.27) both write
`M_1 ∨ M_2`. **Recommend `∨`**, and note it is *not* a lattice join of matroids.

---

## E. Prerequisite audit

The library was inspected directly (`items/`, 4172 items). **There is currently no matroid
content of any kind** — `ls items/ | grep -i matroid` is empty. So the whole subject is
greenfield and nothing needs retrofitting.

### E.1 Present and published — usable as load-bearing dependencies

Verified present in `items/`:

| need | library item(s) | used by |
|---|---|---|
| Steinitz exchange | `thm-steinitz-exchange` | vector matroid (§C.6) |
| rank, dimension, rank–nullity | `thm-rank-nullity`, `cor-matrix-rank-nullity` | vector matroid, dual of representable |
| determinants, Laplace, adjugate | `thm-laplace-cofactor-expansion`, `def-matrix-minors-cofactors-and-adjugate`, `thm-adjugate-identity-over-a-commutative-ring` | representability |
| **König's bipartite matching–cover theorem** | `thm-konig-bipartite-matching-cover` | **Schrijver Lemma 10.1 — the enabler for matroid intersection** |
| Hall's theorem | `thm-hall-marriage-finite-bipartite`, `cor-hall-sdr-finite-families`, `cor-hall-deficiency-formula` | transversal matroids, Rado's theorem |
| symmetric difference of two matchings | `lem-symmetric-difference-of-two-matchings` | **transversal matroid (§C.6) — turns a hard proof into a moderate one** |
| Menger, all forms | `thm-menger-finite-directed-and-undirected-path-forms` | not strictly needed, available |
| trees, forests, spanning trees | `def-tree-forest-and-leaf`, `def-spanning-tree`, `thm-tree-characterisations`, `cor-tree-edge-count`, `lem-maximal-acyclic-spanning-subgraph-is-a-spanning-tree`, `lem-spanning-tree-exchange` | graphic matroid, tree packing |
| fundamental cycle / fundamental cut | `lem-fundamental-cycle-of-a-spanning-tree`, `lem-fundamental-cut-of-a-spanning-tree` | **circuits and cocircuits of M(G) — a very close fit, these are the graphic case of C(e,B)** |
| graph deletion, contraction, minor | `def-graph-deletion-contraction-minor-and-subdivision` | minors (§C.8) |
| plane dual | `def-plane-dual-multigraph`, `thm-plane-dual-exists-and-double-dual-recovers-primal`, `ex-one-planar-graph-two-nonisomorphic-duals` | cographic matroids, planar duality (§C.7f) |
| Euler's formula | `thm-euler-formula-for-connected-plane-graphs`, `cor-euler-formula-for-disconnected-plane-graphs` | plane spanning-tree complementation |
| Kuratowski–Wagner | `thm-kuratowski-wagner-planarity-characterisation` | the graph half of Whitney planarity |
| connected components | `cor-connected-components-partition-the-vertex-set`, `def-connected-graph-and-connected-component` | graphic matroid rank |
| posets, lattices, Möbius | `def-lattice-distributive-lattice-and-order-ideal`, `def-graded-poset-and-rank`, `def-poset-mobius-function`, `cor-mobius-inversion-for-finite-posets` | flats, characteristic polynomial |
| fields, Z/nZ | `def-field`, `def-integers-modulo-n` | binary/ternary matroids |
| minimum spanning tree | `def-weighted-graph-and-minimum-spanning-tree`, `cor-distinct-edge-weights-give-a-unique-minimum-spanning-tree`, `cex-minimum-spanning-tree-not-unique` | greedy — **Kruskal is the motivating instance and the library already frames it** |

`lem-spanning-tree-exchange` and the two fundamental-cycle/cut lemmas deserve special
note: they are the graphic-matroid shadows of basis exchange and of C(e,B), so P1 can
open by *recognising* published results rather than by asserting an abstraction. That is
the strongest available answer to "why should a reader care".

### E.2 Missing but cheap to build — the owner's build-the-machinery rule applies

| gap | cost | needed for |
|---|---|---|
| **forest edge count**: a forest on vertex set V with c components has \|V\| − c edges | 1 item, ~8 steps, **[A]**, a direct corollary of the published `cor-tree-edge-count` | graphic matroid (§C.6), arboricity, tree packing |
| **chromatic polynomial**: definition, polynomiality, deletion–contraction | 3 items, ~30 steps, **[A]/[B]** | the Tutte→chromatic specialisation (§C.12). The library has chromatic *number* only |
| **maximal-independent-extension micro-lemma** | 1 item, ~4 steps, **[A]** | used ~10 times across P1/P2; scaffold it early and explicitly |

None of these is a reason to drop a result — all three are exactly the "build the missing
prerequisite" case, not the `deferred` case.

### E.3 Missing and expensive — these determine what must be statement-only

| absent machinery | blocks |
|---|---|
| **Linear programming duality; integral polyhedra; total unimodularity** | Schrijver §10.7 (matroid polytopes) entirely; Oxley §6 (Seymour decomposition, TU) entirely; Reiner §2.2.2. **This is the single largest exclusion** and it is clean — those sections are `out-of-scope`, not `deferred` |
| **Cauchy–Binet / Jacobi complementary-minor identity** (explicitly named absent in the brief) | the determinant proof of "M* = [−D^T \| I]" (§C.7e). **Workaround exists**: the orthogonal-complement route needs only rank–nullity, which is published. Use it |
| **Developed finite-field theory** (GF(q) for prime powers; characteristic; prime subfield) | Oxley Prop 5.3 needs "a field of characteristic p contains GF(p)" and "characteristic 0 contains Q". The library has `def-field` and `def-integers-modulo-n` but no `def-`/`thm-` for prime subfields or GF(q). **Cost to build: ~2–3 items, [B].** Binary matroids alone need only GF(2) = Z/2Z, which is nearly free; the Fano results need the full characteristic apparatus |
| **Geometric lattices** (semimodular + atomic + graded) | Reiner Theorem 9 (Birkhoff). Deferred |
| **Simplicial complexes, shellability, algebraic topology** | Reiner §1.6, §3.2, §3.3 entirely. Out-of-scope — the brief confirms algebraic topology is absent |
| **Transcendence degree / algebraic independence** | Reiner §1.3.2, §2.3.1. Deferred |
| **Nowhere-zero flows over Z/uZ** | the flow-polynomial specialisation. Deferred |
| **Hyperplane arrangements** | Reiner §3.1.4, §3.3. Out-of-scope |
| **Oriented matroids** | Reiner §1.8–§1.10, §2.4, §3.2.4. Out-of-scope — a whole subject area the library has not reached, which is the disposition `LEVELS.md` reserves for exactly this |
| **Coding theory** | Reiner §3.1.7. Deferred (though the parity-check reading of M* in §C.7e is a free `rem-`) |
| **Matroid 3-connectivity / Whitney twists** | Whitney's 2-isomorphism (§C.13), Tutte's graphic/cographic excluded minors. Deferred, statement-only |

### E.4 Prerequisite verdict per headline theorem

| theorem | genuinely needs | in reach? |
|---|---|---|
| equicardinality of bases | (I1)–(I3), finiteness | **yes, [A]** |
| rank axioms + equivalence of axiomatisations | the above only | **yes, [B] decomposed** |
| circuit / basis / closure axioms | the above | **yes, [B]** |
| duality, r*, cocircuits | two basis-exchange axioms | **yes, [A]** |
| minors + duality interchange | duality | **yes, [A]/[B]** |
| graphic matroid | forest edge count (build, §E.2) | **yes, [A]** |
| transversal matroid | `lem-symmetric-difference-of-two-matchings` ✓ | **yes, [B]** |
| vector matroid | `thm-steinitz-exchange` ✓ | **yes, [A]** |
| cographic + planar duality (forward) | plane dual ✓, Euler ✓ | **yes, [B]** |
| Whitney planarity (converse) | Tutte's graphic excluded minors ✗ | **no, [C]** |
| **greedy / Rado–Edmonds** | nothing beyond the axioms | **yes, [A]/[B]** |
| **matroid intersection** | **König ✓** | **yes, [B] × 5** |
| **matroid union** | matroid intersection | **yes, [B] × 3** |
| **covering, base packing, arboricity, tree packing** | matroid union; forest edge count | **yes, [A]/[B]** |
| Tutte polynomial T1–T4, universality | duality, minors | **yes, [B]** |
| Tutte → chromatic | chromatic polynomial (build, §E.2) | **yes, [B] + 3 items** |
| Tutte → flow | nowhere-zero flows ✗ | **no, [C]** |
| basis activities | interval-partition lemma, unproved in the harvest | **no, [C]** |
| binary iff no U_{2,4} minor | Lemma 5.2, Thm 3.9, minor duality — all in P1 | **yes, [B]/[C]** |
| Fano representability | field characteristic + prime subfields (build, §E.3) | **yes, [B] + 2–3 items** |
| ternary / regular / graphic excluded minors | Bixby–Seymour machinery ✗ | **no, [C], statement-only** |
| Seymour decomposition | LP duality, TU ✗ | **no, out-of-scope** |
| Whitney 2-isomorphism | 3-connectivity, Whitney twists ✗ | **no, [C], statement-only** |

---

## F. Blockers and cautions

**F.1 Sources not obtained.** A parallel source-hunt was dispatched for Oxley's *Matroid
Theory* 2nd ed. TOC, Gordon–McNulty's *Matroids: A Geometric Introduction* TOC, Welsh's
TOC, Ardila's and Goemans' lecture notes, the Ellis-Monaghan–Merino Tutte survey
(arXiv 0803.3079), and Whitney's 1935 paper. **Those results are recorded in §F.6 if they
arrived before this file was written; where §F.6 is silent, the source was not obtained
and the harvest does not rest on it.** The three sources in §A are sufficient on their own
under the two-independent-treatments rule, so nothing in §B–§E is blocked by this.

Untried routes for a future session, in the order I would try them: author-hosted pages
first (they were the most reliable in this run); then national-library contents scans
(GBV, DNB) for the in-copyright TOCs; then arXiv for surveys; **publisher domains
(Springer, Wiley, SIAM, Cambridge Core) last — they were the least reliable route in this
run.**

**F.2 `WebFetch` cannot read PDFs.** Confirmed again. Every PDF here was fetched with
`curl -L` under a browser user-agent and extracted with `pypdf` in a venv
(`/tmp/aa-venv4/bin/python`, pypdf 6.15.0). Extraction helper left at `/tmp/mat/ex.py`.
Downloaded copies: `/tmp/mat/oxley-survey4.pdf`, `/tmp/mat/schrijver-dict.pdf`,
`/tmp/mat/reiner-matroids.pdf`; extracted text alongside as `.txt`.

**F.3 Two textual defects in the sources that a scaffolder will otherwise inherit.**
- **Schrijver's proof of (iv)⇒(i) (S2 p. 177) reuses the variable `y`** for two different
  elements — first `y ∈ F \ F'` at the start, then `y ∈ C ∩ (F' \ F)` later. The proof is
  correct; the naming is not. **Rename one of them** when scaffolding (§C.3).
- **Schrijver's (i)⇒(vi) (S2 p. 177) contains a typo**: "let F' be an inclusionwise maximal
  set in I with `F ⊆ F ⊆ Y ∪ Z`". It should read `F ⊆ F' ⊆ Y ∪ Z`. The argument is
  unaffected.

**F.4 `reiner.txt` and the other extracts contain non-UTF-8 bytes**, so plain `grep`
reports "binary file matches" and prints nothing. Use `grep -a`. A future session that
skips this will wrongly conclude the extraction failed.

**F.5 Oxley's survey defers many proofs to his book.** §C marks, per result, whether the
source supplies a proof or only a pointer (`[34, Theorem x.y.z]`). **A pointer is not a
proof and must not be scaffolded as though the library had one** — under the
self-contained-scope rule those results must be proved locally from library dependencies,
rescoped, or routed to the narrow `rem-` fallback with the failed in-library route
recorded. The results where S1 *does* give a complete proof are: 3.11 (k=2 tree packing),
3.20 (minor-closure), 4.1 (transversal), 4.7 and 4.8 (greedy, both directions), 5.3 (Fano
characteristic), 5.4 (non-representability), 5.15 (binary excluded minor). Everything else
in S1 is statement-plus-pointer.

**F.6 Parallel source-hunt results — RETURNED.** The dispatched hunt completed and its
finds are folded into §A (S4–S10) and §B.4–§B.6. Everything reported below was verified by
download plus a `pypdf` page count.

**Obtained and harvested** (now part of §A): Ellis-Monaghan–Merino (42 pp), Waterloo
CO 446 (90 pp), KAIST MAS480A (88 pp), Whitney 1935 (26 pp), Oxley book TOC (3 pp, GBV),
Gordon–McNulty TOC (chapter level), Schrijver *Combinatorial Optimization* front matter
(34 pp, full sub-section TOC).

**Obtained but NOT harvested** — verified PDFs available in `/tmp/mathunt/` for a future
session, not read in depth because §A already exceeds the two-treatments requirement:
- **Bonin** (GWU): "A brief introduction to matroid theory" 35 pp
  `https://blogs.gwu.edu/jbonin/files/2016/04/survey-13wdl4r.pdf`; "An introduction to
  transversal matroids" 27 pp; "Introduction to extremal matroid theory" 75 pp; "Old and
  new connections between matroids and codes" 59 pp. **Caution: the brief-introduction PDF
  uses a subsetted Type-3 font with a custom encoding and `pypdf` extracts pure garbage
  from it.** It would need OCR or a different extractor. This is a new failure mode not in
  the run's existing notes.
- **Ardila** (SFSU): matroid course lectures 1–25, 64 pp
  `https://fardila.com/Clase/Matroids/LectureNotes/lectures1-25.pdf`; lectures 26–32, 20 pp;
  "The Geometry of Matroids" 10 pp; "Algebraic and geometric methods in enumerative
  combinatorics" 144 pp. Note the working host is `fardila.com`, **not** `math.sfsu.edu`
  (dead).
- **Goemans** (MIT): 18.438 F09 lec10–lec13 and lec16; 18.433/18.453 standalone
  `matroid-notes.pdf` (14–15 pp), `matroid-intersect-notes.pdf` (13 pp),
  `matroidunion.pdf`. `https://math.mit.edu/~goemans/18438F09/lec13.pdf` covers matroid
  union, Nash-Williams and the Shannon switching game with proofs.
- **Král'–Pangrác** (Charles Univ.) chapters 1–7, 76 pp total, at
  `https://iuuk.mff.cuni.cz/~pangrac/vyuka/matroids/matroid-ch{1..7}.pdf`.
- **Cameron**, "Notes on matroids and codes", 29 pp,
  `https://webspace.maths.qmul.ac.uk/p.j.cameron/comb/matroid.pdf`.
- **Tutte's own RAND R-448**, "Introduction to the Theory of Matroids", 109 pp,
  `https://www.rand.org/content/dam/rand/pubs/reports/2009/R448.pdf` — **image scan with no
  text layer**; usable only with OCR.
- **Welsh** TOC at full section level via ProofWiki
  (`https://proofwiki.org/wiki/Book:Dominic_Welsh/Matroid_Theory`), including Ch. 8
  "Covering and Packing" §4 Covering and packing theorems, §5 Edmonds' intersection theorem.

**Genuinely blocked, with what was tried:**
- **Gordon–McNulty section-level TOC** — not publicly reachable. Cambridge's frontmatter
  PDF host (`assets.cambridge.org`) never completes a TLS connection (HTTP 000) over
  default HTTP/2, `--http1.1`, or with a same-host `Referer`; the `core-prod.cambridgecore.org`
  CDN path refuses the connection; the `www.cambridge.org` services path returns HTTP 200
  with `content-type: text/html` — an HTML page saved under a `.pdf` name, the exact trap
  the brief warned about. Only chapter-level TOC was obtainable. **Untried:** a library
  proxy, or the book's Google Books preview pane.
- **Ardila's AMS *Notices* article "The Geometry of Matroids"** — `ams.org` is behind a
  genuine Cloudflare JS challenge. The first fetch saved a 5,751-byte "Just a moment…"
  interstitial as a `.pdf`; adding a `Referer` header returned HTTP 403. **No header
  combination defeats a JS challenge.** Untried: a headless browser.
- **Library of Congress catalog** — HTTP 403 even with a browser user-agent.
- **The full 113 pp Král'–Pangrác monograph** — no open full text located; a
  Semantic Scholar hit that looked like it was in fact a different author's slide deck
  (Congduan Li, Drexel), a **misidentification worth flagging: a valid PDF at a plausible
  URL was not the document its citation claimed.**

**F.7 A copyright flag, recorded and deliberately not acted on.** A full-text copy of
Oxley's *Matroid Theory* 2nd ed. — an in-copyright Oxford monograph — is publicly reachable
at `https://www.math.ens.psl.eu/~benoist/refs/Oxley.pdf`. **It was not downloaded and this
harvest does not rest on it.** The scaffolder should not use it either: S5's legitimate GBV
TOC gives the structural information that was wanted, and every mathematical claim in this
harvest is backed by an openly licensed or author-hosted source.

**F.8 `file -b` page counts are unreliable on this corpus and nearly caused two false
negatives.** On pdfTeX output with object streams, `file -b` reported "6 pages" for
documents that are actually 13, 15, 29, 42 and 90 pages. Ellis-Monaghan–Merino would have
been discarded as a truncated 6-page fragment on the `file` count alone; it is 42 pp.
**Use `pypdf`'s `len(reader.pages)` (or `pdfinfo`) as the authoritative count, and treat
`file -b`'s count as a hint only.** This supersedes the run's existing note, which framed
the risk as server-side truncation; the more common failure is local misreporting.

---

## G. Recommended split into A/B page pairs

The 60-item ceiling (`CLAUDE.md`, error code `size`, enforced at steps 0/2/4) is the
binding constraint. My honest count of the `included` dispositions in §B.7 is **well over
120 items**, so this is **two pairs minimum, three if representability and the Tutte
polynomial are both wanted**.

**Pair 1 — "Matroids: axioms, duality and minors"** (~55 items)
Definitions and the independence axioms; the local equicardinality theorem; rank and the
rank axioms; circuits and circuit elimination; bases and the two exchange axioms; closure
and flats; **the equivalence theorem, as a chained cycle of lemmas**; the examples
(uniform, vector, graphic, partition, transversal, matching, cographic) with the
non-minor-closure counterexample; duality (existence via the exchange symmetry, r*,
cocircuits, bonds, r(M)+r(M*)=|E|); minors (deletion, contraction, commuting, the
duality–minor interchange, minor-closed classes, direct sum); the plane-dual bridge and
the forward half of Whitney planarity.
*Backing: Schrijver §10.2–§10.3 (S2) + Waterloo §1.1–§1.18 (S7) + KAIST Ch. 2 (S8), with
Oxley §2–§3 (S1) as the fourth voice.* **Four independent treatments, three of them with
complete proofs of the axiom equivalences** — this is the best-backed block in the harvest.
Watch the ceiling: if it exceeds 60, split off duality-and-minors as its own pair rather
than dropping the closure/flats block.

**Pair 2 — "Matroids and combinatorial optimization"** (~40 items)
The greedy algorithm and Rado–Edmonds, both directions, from both sources; local optimality
of a maximum-weight basis; the exchange graph and the two technical lemmas; the augmenting
digraph; **Edmonds' matroid intersection theorem**; the counterexample that I_1 ∩ I_2 is
not a matroid; König and Rado re-derived from it; **matroid union**; **Edmonds' covering
and base-packing theorems**; **Nash-Williams arboricity**; **Nash-Williams/Tutte tree
packing** (with Oxley's constructive k=2 case); partition into partial transversals.
*Backing: Schrijver §10.1, §10.4–§10.5 and Exercises 10.19–10.32 (S2) + Waterloo §4.1–§4.8
(S7) + Oxley §4 and Cor 3.11 (S1).* **Three independent treatments, and S2 and S7 develop
intersection and union in opposite orders** (§C.11), so whichever route the scaffolder picks
is fully source-backed. This is the pair with the highest payoff-per-step in the whole
harvest, and Route A is only affordable because König is already published.

**Pair 3 (optional) — "Representable matroids and the Tutte polynomial"** (~40 items)
Binary/ternary/regular definitions; U_{2,n} representability; U_{2,4} is not binary;
matrix operations preserving M[A]; the dual of a representable matroid by the orthogonality
route; fundamental circuits determine a binary matroid; **Tutte's binary excluded-minor
theorem, proved in full**; Fano and non-Fano and the non-representable direct sum;
relaxation; the Tutte polynomial (rank–nullity definition, T1–T4, universality); the
independent/spanning-set and reliability specialisations; the characteristic polynomial via
poset Möbius inversion; **plus the three-item chromatic-polynomial build** and then the
chromatic specialisation. Statement-only `rem-` items for ternary/regular/graphic excluded
minors and Whitney 2-isomorphism, each with `proved_here: false` and a working source URL.
*Backing: Oxley §5 (S1) + Ellis-Monaghan–Merino §2–§6 (S4) + Reiner §2.3, §3.1 (S3) +
Waterloo §1.11, §1.16–§1.18 (S7).* Requires the finite-field build of §E.3 and the
chromatic-polynomial build of §E.2. **Before S4 and S7 were obtained this pair rested on
Reiner alone for the whole Tutte block and would have failed the two-treatments rule;** it
now has a proof-bearing second treatment for every result it claims.

**If only two pairs are wanted, build Pair 1 and Pair 2.** They are fully source-backed,
they need no new prerequisite beyond the two cheap builds in §E.2, and together they carry
the results that make matroids worth having: the axiom equivalence, duality, greedy,
intersection, union, and the Nash-Williams theorems.
