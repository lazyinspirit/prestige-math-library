# subjects-01 — abstract-algebra source harvest: SYMMETRIC POLYNOMIALS, and ALGEBRAIC EXTENSIONS / DEGREE / FINITE FIELDS

Two pages:

- **Page A `symmetric-polynomials`** — elementary symmetric polynomials and the S_n action, the
  fundamental theorem (existence AND uniqueness), the arbitrary-commutative-ring version, power
  sums and the Newton identities, complete homogeneous symmetric functions and the ω involution,
  the discriminant, the resultant and the Sylvester matrix, and the "symmetric in the roots ⟹
  polynomial in the coefficients" passage that the Galois block consumes.
- **Page B `algebraic-extensions-degree-and-finite-fields`** — degree, the tower law, finite ⟹
  algebraic, finitely generated algebraic ⟹ finite, the field of algebraic elements, transitivity
  of algebraicity, existence/uniqueness/structure of finite fields, primitive roots mod p, and the
  straightedge-and-compass impossibility results.

Everything below was read from the source. Where a source could not be obtained it is marked
`UNOBTAINED` with what was tried. Where a heading list is reconstructed rather than read off the
source's own printed table of contents, that is stated explicitly.

---

## PART 0 — Source register (what actually resolved)

| # | source | URL that resolved | status |
|---|---|---|---|
| S1 | J.S. Milne, *Fields and Galois Theory*, v5.10 | `https://www.jmilne.org/math/CourseNotes/FT.pdf` | full PDF, 144 pp; PDF bookmark outline + full text extracted. Ch. 1, Ch. 4 (finite fields; resultant appendix), Ch. 5 (symmetric polynomials) read |
| S2 | Keith Conrad, "Symmetric polynomials" | `https://kconrad.math.uconn.edu/blurbs/galoistheory/symmfunction.pdf` | full text, 14 pp, **read end to end** |
| S3 | Keith Conrad, "Finite fields" | `https://kconrad.math.uconn.edu/blurbs/galoistheory/finitefields.pdf` | full text, 13 pp |
| S4 | Keith Conrad, "Galois groups as permutation groups" | `https://kconrad.math.uconn.edu/blurbs/galoistheory/galoisaspermgp.pdf` | full text, 12 pp; §4 is the discriminant |
| S5 | Keith Conrad, "Cyclicity of (Z/p)^×" | `https://kconrad.math.uconn.edu/blurbs/grouptheory/cyclicmodp.pdf` | full text |
| S6 | Keith Conrad, "Roots and irreducibles" | `https://kconrad.math.uconn.edu/blurbs/galoistheory/rootirred.pdf` | full text, 7 pp |
| S7 | Michael Artin, *Algebra*, 2nd ed. | `https://www.cse.iitb.ac.in/~sohoni/CS782/ArtinAlgebra.pdf` | full PDF, 555 pp (OCR of a scan; formulas are lightly garbled and I flag every place I rely on one). Printed TOC for Ch. 15–16 verbatim; **§§15.3, 15.5, 15.6, 15.7, 16.1, 16.2 read in full** |
| S8 | **I. G. Macdonald, *Symmetric Functions and Hall Polynomials*, 2nd ed. (1995)** | `https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf` | full scanned PDF, 475 pp. Printed TOC verbatim with page numbers; **Ch. I §§1–2 (pp. 1–39) read in full**, including every numbered result (2.1)–(2.15). OCR is imperfect — I mark reconstructions |
| S9 | Darij Grinberg & Victor Reiner, *Hopf Algebras in Combinatorics* | `https://arxiv.org/pdf/1409.8356` | full PDF, 282 pp; **Ch. 2 §§2.1–2.5 read**. Works over an arbitrary commutative ring `k` throughout — the source for "what exactly does the ring version need" |
| S10 | **Darij Grinberg, *An Introduction to Algebraic Combinatorics* (Math 701, version 31 May 2025)** | `https://arxiv.org/abs/2506.00738`, PDF `https://arxiv.org/pdf/2506.00738v1` | full PDF, 703 pp; **Ch. 7 read**. States the fundamental theorem for **N variables over an arbitrary commutative ring K**, all three generating sets, with the Newton–Girard formulas proved |
| S11 | **Anthony W. Knapp, *Basic Algebra*, Digital Second Edition** | `https://www.math.stonybrook.edu/~aknapp/download/b2-alg-clickable.pdf` | full PDF, 764 pp. Author-hosted, explicitly free for noncommercial education/scholarship/research. Printed TOC for Ch. IX verbatim; **§§IX.1–IX.5 read in full** |
| S12 | **Anthony W. Knapp, *Advanced Algebra*, Digital Second Edition** | `https://www.math.stonybrook.edu/~aknapp/download/a2-alg-clickable.pdf` | full PDF, 760 pp, same licence. **Ch. VIII §2 "Resultant and Bezout's Theorem" read in full** — this is the harvest's authoritative resultant source |
| S13 | Pete L. Clark, *Field Theory* | `https://web.archive.org/web/2023/http://alpha.math.uga.edu/~pete/FieldTheory.pdf` | full PDF, 167 pp; **Ch. 3 read in full**. `alpha.math.uga.edu` is dead; only the Wayback copy works |
| S14 | Robert B. Ash, *Abstract Algebra: The Basic Graduate Year*, Ch. 3 and Ch. 6 | `https://web.archive.org/web/2023/https://faculty.math.illinois.edu/~r-ash/Algebra/Chapter3.pdf`, `.../Chapter6.pdf` | full text of both chapters. Direct `faculty.math.illinois.edu` does not respond; Wayback works |
| S15 | Serge Lang, *Algebra*, rev. 3rd ed. (GTM 211) | `https://unina2.on-line.it/sebina/repository/catalogazione/documenti/Lang%20-%20Algebra.%203rd%20ed..pdf` | **front matter only** (the file that resolved is a 7-page stub: title, copyright, and the complete printed Contents). Printed TOC for Ch. IV, V, IX read **verbatim with page numbers**. Section bodies UNOBTAINED |
| S16 | The Stacks Project, chapter "Fields" | `https://stacks.math.columbia.edu/tag/09FA` (and `/09G2`) | section list with tags; exact statements of 09G3, 09G5, 09G9, 0BU1 |
| S17 | "Lecture 10 — The Sylvester Resultant" (PDMI course notes) | `https://www.pdmi.ras.ru/~lowdimma/topics_nth/Resultants.pdf` | 9 pp; single lecture, used only as a cross-check on the Sylvester matrix |
| S18 | "Lesson 21 — Resultants" (Cornell, D. Mehrle course notes) | `https://pi.math.cornell.edu/~dmehrle/notes/old/alggeo/21Resultants.pdf` | 6 pp; single lecture, cross-check only. States the theorem over a **UFD**. OCR of the math is poor |

**Rejected after obtaining:** N. Kender, *Symmetric Polynomials: the Fundamental Theorem and
Uniqueness* (Union College undergraduate thesis, 2019),
`https://www.math.union.edu/~hatleyj/student_theses/kender.pdf`. It is a student thesis whose §4 is
titled "Cheeseburgers"; it adds nothing S2 does not do better and must not be cited.

`UNOBTAINED`, with what was tried:

- **Dummit & Foote full text.** No legitimate open copy. `proofwiki.org` returned 403 this run (it
  worked for the sibling Galois harvest with a browser UA); `catdir.loc.gov` returned 403.
  Chapter-13 **section titles** were recovered only from aggregated search results and are recorded
  in §1.11 with that caveat — they are NOT read off the book and must not be quoted as such.
- **Stanley, *Enumerative Combinatorics* vol. 2, Ch. 7.** No free author-hosted copy exists;
  `math.mit.edu/~rstan/ec/` does not post it. Macdonald (S8) plus Grinberg (S10) cover everything
  the commission wanted from it, and both are freely available.
- **Lang, *Algebra*, §§IV.6 and IV.8 bodies.** Only the printed TOC resolved (S15). Knapp
  *Advanced Algebra* VIII.2 (S12) is a full, free substitute for IV.8; Conrad/Artin/Grinberg/
  Macdonald together are a full substitute for IV.6.
- **van der Waerden, *Moderne Algebra*.** Not attempted — no open copy expected, and five
  independent modern treatments already exceed the two-treatment requirement.
- **MIT OCW 18.702.** Not fetched; it follows Artin (S7), which I have in full.

---

## PART 1 — Canonical-coverage harvest (source-anchored heading enumerations)

### 1.1 I. G. Macdonald, *Symmetric Functions and Hall Polynomials*, 2nd ed. — printed Contents, verbatim

Read range: **Chapter I, §§1–2, pp. 1–39** (partitions; the ring of symmetric functions), plus the
whole printed Contents. Verbatim from the book's own Contents pages (page numbers as printed):

```
I. SYMMETRIC FUNCTIONS
  1. Partitions                                                     1
  2. The ring of symmetric functions                               17
  3. Schur functions                                               40
  4. Orthogonality                                                 62
  5. Skew Schur functions                                          69
  6. Transition matrices                                           99
  7. The characters of the symmetric groups                       112
  8. Plethysm                                                     135
  9. The Littlewood-Richardson rule                               142
  Appendix A: Polynomial functors and polynomial representations  149
  Appendix B: Characters of wreath products                       169
II. HALL POLYNOMIALS
  1. Finite o-modules 179 · 2. The Hall algebra 182 ·
  3. The LR-sequence of a submodule 184 · 4. The Hall polynomial 187 ·
  Appendix (by A. Zelevinsky): Another proof of Hall's theorem 199
III. HALL-LITTLEWOOD SYMMETRIC FUNCTIONS
  1. The symmetric polynomials RA 204 · 2. Hall-Littlewood functions 208 ·
  3. The Hall algebra again 215 · 4. Orthogonality 222 ·
  5. Skew Hall-Littlewood functions 226 · 6. Transition matrices 238 ·
  7. Green's polynomials 246 · 8. Schur's Q-functions 250
IV. THE CHARACTERS OF GL_n OVER A FINITE FIELD
  1. The groups L and M 269 · 2. Conjugacy classes 270 ·
  3. Induction from parabolic subgroups 273 · 4. The characteristic map 276 ·
  5. Construction of the characters 280 · 6. The irreducible characters ·
  Appendix: proof of (5.1)
V. THE HECKE RING OF GL_n OVER A LOCAL FIELD
  1. Local fields · 2. The Hecke ring H(G,K) · 3. Spherical functions ·
  4. Hecke series and zeta functions for … · 5. Hecke series and zeta functions for …
VI. SYMMETRIC FUNCTIONS WITH TWO PARAMETERS
  1. Introduction · 2. Orthogonality · 3. The operators D · 4. The symmetric functions P(x;q,t) ·
  5. Duality · 6. Pieri formulas · 7. The skew functions · 8. Integral forms ·
  9. Another scalar product · 10. Jack's symmetric functions
VII. ZONAL POLYNOMIALS
  1. Gelfand pairs and zonal spherical functions · 2. The Gelfand pair (S_2n, H_n) ·
  3. The Gelfand pair (…, O(n)) · 4. Integral formulas · 5. The complex case ·
  6. The quaternionic case
BIBLIOGRAPHY · NOTATION · INDEX
```

(The Ch. IV–VII page numbers did not survive OCR of the Contents pages; the section titles did.)

### 1.1b Macdonald — the run-in headings and numbered results of Ch. I §2 (pp. 17–39)

Macdonald has no numbered theorems; he has **numbered displayed results** `(2.n)` and italic
**run-in headings**. Both are transcribed here. Run-in headings, in order: *(no heading — the
graded ring Λ_n and the monomial basis)* · **Elementary symmetric functions** · **Complete
symmetric functions** · **power sums** · **Examples** (a numbered exercise set, 1–…, running
pp. 26–39) · **Notes and references**.

Numbered results over the read range:

- **(2.1)** the monomial symmetric polynomial m_λ = Σ x^α over all distinct permutations α of λ;
  the m_λ with ℓ(λ) ≤ n form a **Z**-basis of Λ_n.
- **(2.2)** E(t) = Σ_{r≥0} e_r t^r = ∏_{i≥1}(1 + x_i t). "If the number of variables is finite,
  say n, then e_r … is zero for all r > n."
- **(2.3)** e_{λ'} = m_λ + Σ_{μ<λ} a_{λμ} m_μ with a_{λμ} non-negative integers, sum over
  partitions μ < λ in the natural (dominance) ordering.
- **(2.4)** **Λ = Z[e_1, e_2, …] and the e_r are algebraically independent over Z.** Proof: "The
  m_λ form a Z-basis of Λ, and (2.3) shows that the e_λ form another Z-basis: in other words,
  every element of Λ is uniquely expressible as a polynomial in the e_r."
  **Remark (verbatim in substance):** "When there are only finitely many variables x_1,…,x_n,
  (2.4) states that Λ_n = Z[e_1,…,e_n], and that e_1,…,e_n are algebraically independent. This is
  the usual statement of the 'fundamental theorem on symmetric functions'."
- **(2.5)** H(t) = Σ_{r≥0} h_r t^r = ∏_{i≥1}(1 − x_i t)^{−1}.
- **(2.6)** H(t)E(−t) = 1; **(2.6')** Σ_{r=0}^{n} (−1)^r e_r h_{n−r} = 0 for all n ≥ 1.
- **(2.7)** ω (defined by ω(e_r) = h_r) is an involution, ω² = id.
- **(2.8)** Λ = Z[h_1, h_2, …] and the h_r are algebraically independent over Z.
  **Remark (finite variables):** with n variables, ω is defined by ω(e_r) = h_r for 1 ≤ r ≤ n and
  is still an involution by (2.6'); Λ_n = Z[h_1,…,h_n] with h_1,…,h_n algebraically independent —
  but the higher h's are non-zero polynomials in h_1,…,h_n (equivalently in e_1,…,e_n).
  *(OCR loses two symbols in this remark; the mathematical content is unambiguous.)*
- **(2.9)**, **(2.9')** the Jacobi–Trudi / Aitken determinant identities relating minors of the
  h-matrix to complementary cofactors of the transposed e-matrix; (2.9') is
  det(h_{λ_i − i + j}) = det(e_{λ'_i − i + j}).
- **(2.10)** P(t) = Σ_{r≥1} p_r t^{r−1} = d/dt log H(t) = H'(t)/H(t);
  **(2.10')** P(−t) = d/dt log E(t) = E'(t)/E(t).
- **(2.11)**, **(2.11')** — **"These equations are due to Isaac Newton, and are known as Newton's
  formulas"**:
  n·h_n = Σ_{r=1}^{n} p_r h_{n−r} and n·e_n = Σ_{r=1}^{n} (−1)^{r−1} p_r e_{n−r}, for n ≥ 1.
- **(2.12)** Λ_Q = Λ ⊗_Z Q = Q[p_1, p_2, …] and the p_r are algebraically independent **over Q**.
  Macdonald derives it precisely from (2.11): "From (2.11) it is clear that h_n ∈ Q[p_1,…,p_n] and
  p_n ∈ Z[h_1,…,h_n], and hence that Q[p_1,…,p_n] = Q[h_1,…,h_n]." He then notes the p_λ "do not
  form a Z-basis of Λ: for example, h_2 = ½(p_1² + p_2) does not have integral coefficients."
- **(2.13)** ω(p_n) = (−1)^{n−1} p_n; ω(p_λ) = ε_λ p_λ.
- **(2.14)**, **(2.14')** H(t) = Σ_λ z_λ^{−1} p_λ t^{|λ|}, E(t) = Σ_λ ε_λ z_λ^{−1} p_λ t^{|λ|};
  h_n = Σ_{|λ|=n} z_λ^{−1} p_λ, e_n = Σ_{|λ|=n} ε_λ z_λ^{−1} p_λ, with
  z_λ = ∏_i i^{m_i} m_i!.
- **(2.15) Remark** — Λ is the free λ-ring in one variable; the dictionary e_r ↔ Λ^r(x),
  h_r ↔ σ^r(x), p_r ↔ ψ^r(x) (Adams operations), ω ↔ (x ↦ −x).

Explicit remark in §2 before (2.4): **"We could use any commutative ring A in place of Z as
coefficient ring; in place of Λ we should obtain Λ_A = Λ ⊗ A."**

### 1.2 Darij Grinberg, *An Introduction to Algebraic Combinatorics* — Ch. 7, printed TOC verbatim

Read range: **Chapter 7 §7.1 in full (pp. 434–449)**, plus the §7.2–§7.3 headings. Verbatim from
the printed Contents (page numbers as printed):

```
7. Symmetric functions                                              433
  7.1. Definitions and examples of symmetric polynomials            434
  7.2. N-partitions and monomial symmetric polynomials              449
  7.3. Schur polynomials                                            453
    7.3.1. Alternants                                               453
    7.3.2. Young diagrams and Schur polynomials                     455
    7.3.3. Skew Young diagrams and skew Schur polynomials           460
    7.3.4. The Bender–Knuth involutions                             464
    7.3.5. The Littlewood–Richardson rule                           473
    7.3.6. The Pieri rules                                          499
    7.3.7. The Jacobi–Trudi identities                              502
```

Named results in §7.1: Proposition 7.1.11 (e_n = 0 for n > N; "there are only N 'interesting'
elementary symmetric polynomials … In contrast, there are infinitely many 'interesting' complete
homogeneous symmetric polynomials and power sums") · **Theorem 7.1.12 (Newton–Girard
formulas)** · Example 7.1.13 · Proposition 7.1.14 (the three generating-function identities in
P[t], P[u,v] and P[[t]]) · **Theorem 7.1.15 (Fundamental Theorem of Symmetric Polynomials, due to
Gauss et al.)**, parts (a) e's, (b) h's, (c) p's under a Q-algebra hypothesis · Example 7.1.16
(the recursion that turns (268) into p_n as a polynomial in e_1,…,e_n, with p_1…p_4 written out).

### 1.3 Grinberg & Reiner, *Hopf Algebras in Combinatorics* — Ch. 2 headings, verbatim from the PDF outline

Read range: **§§2.1–2.5** (definition of Λ, other bases, comultiplication, the antipode / ω /
algebra generators, Cauchy product and self-duality). The chapter's own headings:

```
2. Review of symmetric functions Λ as Hopf algebra
  2.1. Definition of Λ
  2.2. Other Bases
  2.3. Comultiplications
  2.4. The antipode, the involution ω, and algebra generators
  2.5. Cauchy product, Hall inner product, self-duality
  2.6. Bialternants, Littlewood-Richardson: Stembridge's concise proof
  2.7. The Pieri and Assaf-McNamara skew Pieri rule
  2.8. Skewing and Lam's proof of the skew Pieri rule
  2.9. Assorted exercises on symmetric functions
```

Named results over the read range that bear on this page: Proposition 2.2.10 (the m_λ, e_λ, h_λ,
s_λ bases of Λ over any commutative ring k; p_λ only when Q ⊆ k) · **Remark 2.3.9**, the
finite-variable analogue, parts (a)–(f), whose part (c) they themselves restate as: "The elementary
symmetric polynomials e_i(x_1,…,x_N), for i ∈ {1,2,…,N}, form an algebraically independent
generating set of Λ(x_1,…,x_N). **This is precisely the well-known theorem (due to Gauss) that
every symmetric polynomial in N variables x_1,…,x_N can be written uniquely as a polynomial in the
N elementary symmetric polynomials.**" · **Proposition 2.4.1** ({e_n} and {h_n} are algebraically
independent and generate Λ_k as a polynomial algebra **for any commutative ring k**; the same for
{p_n} **when Q is a subring of k**; S(p_n) = −p_n, S(e_n) = (−1)^n h_n, S(h_n) = (−1)^n e_n) ·
(2.4.1)/(2.4.2) the generating functions H(t), E(t) · **Definition 2.4.2** ω, "the fundamental
involution of Λ" · **Proposition 2.4.3** ω(e_n) = h_n, ω(h_n) = e_n, ω(p_n) = (−1)^{n−1} p_n.

### 1.4 Keith Conrad, "Symmetric polynomials" — §-headings and named results, verbatim

Read range: **the whole 14-page blurb.** Its own printed §-headings:

```
1. Introduction
2. Lexicographic ordering on F[X1,…,Xn]
3. Proof of Theorem 1.5
4. Uniqueness for Theorem 1.5
5. History
References
```

Named results, with enough of the printed statement to identify each:

- Example 1.1 (sums, products, power sums are symmetric) · Example 1.2 (X₁⁵ + X₂X₃ is only
  "partially symmetric") · **(1.1)** the defining identity
  (T − X₁)⋯(T − X_n) = Tⁿ − s₁T^{n−1} + s₂T^{n−2} − ⋯ + (−1)ⁿ s_n, with
  s_k = Σ_{i₁<⋯<i_k} X_{i₁}⋯X_{i_k} · Examples 1.3, 1.4 (roots of T³ − T − 1).
- **Theorem 1.5.** "The set of symmetric polynomials in F[X₁,…,X_n] is F[s₁,…,s_n]."
- Definition 2.1 (lexicographic order on N^n) · Examples 2.2, 2.3 · **Theorem 2.4** (lex order is
  total, transitive, compatible with addition) · Definition 2.5 (multidegree, leading term,
  leading coefficient) · Examples 2.6–2.9 (mdeg s_k = (1,…,1,0,…,0), lead s_k = 1) ·
  **Theorem 2.10** (mdeg(fg) = mdeg f + mdeg g and lead(fg) = (lead f)(lead g); mdeg(f+g) ≤ max) ·
  Example 2.11 · **Theorem 2.12** (every nonempty subset of N^n has a lex-least element; every
  strictly decreasing sequence is finite) — with the explicit warning that N^n is **not**
  well-founded by "finitely many elements below", since (0,b) < (1,0) for all b.
- §3: the proof of Theorem 1.5, with **(3.2)** a_1 = d_1 − d_2, …, a_n = d_n and **(3.3)**
  d_1 ≥ d_2 ≥ ⋯ ≥ d_n ≥ 0 as the step that uses symmetry · Remark 3.2 (why this is induction on
  N^n, and the graded-lex alternative) · **Corollary 3.3** (if f ∈ K[T] splits as ∏(T − α_i) in
  L[T] then ∏(T − α_i^r) ∈ K[T]) · Remark 3.4 (same for any h ∈ K[X], not just X^r) ·
  Examples 3.5–3.8 (power sums in 2 and 3 variables; the "universal" formulas p₁ = s₁,
  p₂ = s₁² − 2s₂, p₃ = s₁³ − 3s₁s₂ + 3s₃, p₄ = s₁⁴ − 4s₁²s₂ + 2s₂² + 4s₁s₃ − 4s₄ with the
  convention s_k = 0 for k > n), and the **determinant formulas** for p₂, p₃, p₄.
- **Theorem 4.1.** "Every symmetric polynomial in F[X₁,…,X_n] can be written in only one way as a
  polynomial in the elementary symmetric functions of X₁,…,X_n."
- Example 4.2 · the paragraph "In the proofs of Theorems 1.5 and 4.1, the fact that the
  coefficients come from a field F rather than a ring is not important since we never had to divide
  in F" · **Theorem 4.3** (the Z-version) · Example 4.4 · Remark 4.5 (used in the proof that π is
  transcendental).
- §5 History: lexicographic ordering and this proof "go back to Gauss [4, pp. 36–37], who used
  Theorem 1.5 in his second proof of the Fundamental Theorem of Algebra", with a facsimile of
  Gauss's Latin definition of lex order.
- **Footnote 1** (load-bearing for the library's dependency order): "Historically, Theorem 1.5 used
  to be part of the mathematical development leading to Galois theory, which would make a proof of
  Theorem 1.5 by Galois theory circular, but Galois theory in its modern form does not require
  Theorem 1.5."
- **Footnote 4** (load-bearing for the ring version): "if R is not a domain then the formula
  mdeg(fg) = mdeg f + mdeg g is true only as long as the leading coefficients of f and g are both
  not zero-divisors in R, and that is true for the case of elementary symmetric polynomials
  s₁,…,s_n since their leading coefficients equal 1."

### 1.5 J.S. Milne, *Fields and Galois Theory* — the sections and named results in range

Read range: **Ch. 1 (the "Constructions with straight-edge and compass" section), Ch. 4 (including
"Finite fields" and "Appendix: Computing discriminants using resultants"), and Ch. 5 ("Symmetric
polynomials", "The general polynomial of degree n").** Milne's own bookmark outline for these
chapters, verbatim:

```
1 Basic Definitions and Results
  Rings / Fields / The characteristic of a field / Review of polynomial rings /
  Factoring polynomials / Extensions / The subring generated by a subset /
  The subfield generated by a subset / Construction of some extensions / Stem fields /
  Algebraic and transcendental elements / Transcendental numbers /
  Constructions with straight-edge and compass. / Algebraically closed fields / Exercises
4 Computing Galois Groups
  When is Gf in An? / When does Gf act transitively on the roots? /
  Polynomials of degree at most three / Quartic polynomials /
  Examples of polynomials with Sp as Galois group over Q / Finite fields /
  Computing Galois groups over Q / Appendix: Computing discriminants using resultants / Exercises
5 Applications of Galois Theory
  … / Proof of Galois's solvability theorem / Symmetric polynomials /
  The general polynomial of degree n / Norms and traces / Exercises
```

Named results in range:

- **4.1 Prop** σΔ(f) = sign(σ)Δ(f), σD(f) = D(f) · **4.2 Cor** D(f) ∈ F, and (char ≠ 2) the fixed
  field of A_n ∩ G_f is F[Δ(f)], so G_f ⊆ A_n ⟺ D(f) is a square in F · **4.3 Rem** the sign of
  D(f) and the number of nonreal roots · **4.4 Aside** in characteristic 2 the discriminant is
  always a square; one must use the Berlekamp discriminant δ² + δ = D instead.
- **4.19 Prop** every extension of finite fields is simple · **4.20 Prop** existence and uniqueness
  of F_q for q = p^n; Galois over F_p with cyclic group generated by Frobenius · **4.21 Cor** one
  subfield of order p^m for each m | n · **4.22 Cor** a monic irreducible of degree d | n divides
  X^{p^n} − X exactly once · **4.23 Prop** the subfield lattice of F̄_p ≅ (Z_{≥1}, |) ·
  **4.24 Prop** F_p has an algebraic closure, constructed as an explicit union.
- **4.35 Prop** Res(f,g) = a^m b^n ∏_{i,j}(α_i − β_j) satisfies (a) Res(f,g) = (−1)^{mn}Res(g,f),
  (b) Res(f,g) = a^m ∏_{i} g(α_i), (c) g ≡ g₁ mod f with deg g₁ = m₁ ⟹
  Res(f,g) = a^{m−m₁}Res(f,g₁) · **4.36 Prop** for monic f of degree n,
  D(f) = (−1)^{n(n−1)/2} Res(f, f′) = (−1)^{n(n−1)/2} Res(f′, f) ·
  Examples 4.37 (D(X³+bX+c) = −4b³ − 27c²), 4.38 (X⁵+X+1), 4.39.
- **5.36 Thm (Symmetric polynomials theorem)** "Every symmetric polynomial P in R[X₁,…,X_n] is a
  polynomial in the elementary symmetric polynomials with coefficients in R, i.e., P ∈ R[p₁,…,p_n]"
  — stated for **R a commutative ring with 1** · **5.37 Rem** (a) the proof is algorithmic, with a
  worked example; (b) **the expression is unique**, because the highest monomials of the
  p_1^{d_1}⋯p_n^{d_n} are distinct, the map (d₁,…,d_n) ↦ (d₁+⋯+d_n, …, d_n) being injective ·
  the paragraph deducing that every symmetric polynomial in the roots of a monic f ∈ R[X] that
  splits over S ⊇ R lies in R, "For example, the discriminant D(f) = ∏_{i<j}(α_i − α_j)² of f lies
  in R" · **5.38 Thm (Symmetric functions theorem)** for a field F, the field of S_n-invariants in
  F(X₁,…,X_n) is F(p₁,…,p_n) · **5.39 Cor** F(X₁,…,X_n) is Galois over F(p₁,…,p_n) with group S_n ·
  **5.40 Thm** the Galois group of the general polynomial of degree n is S_n · Asides 5.41, 5.42
  (inverse Galois problem; the discriminant hypersurface) · **5.49 Prop**
  disc f = (−1)^{m(m−1)/2} Nm_{F[α]/F} f′(α).
- **9.14 Ex** (Ch. 9, transcendental extensions): p₁,…,p_n are algebraically independent.

### 1.6 Michael Artin, *Algebra*, 2nd ed. — printed TOC for Ch. 15–16, verbatim

Read range: **§§15.3, 15.5, 15.6, 15.7 and §§16.1, 16.2 in full**, plus the printed TOC.

```
15 Fields
  15.1 Examples of Fields
  15.2 Algebraic and Transcendental Elements
  15.3 The Degree of a Field Extension
  15.4 Finding the Irreducible Polynomial
  15.5 Ruler and Compass Constructions
  15.6 Adjoining Roots
  15.7 Finite Fields
  15.8 Primitive Elements
  15.9 Function Fields
  15.10 The Fundamental Theorem of Algebra
16 Galois Theory
  16.1 Symmetric Functions
  16.2 The Discriminant
  16.3 Splitting Fields
  16.4 Isomorphisms of Field Extensions
  16.5 Fixed Fields
  16.6 Galois Extensions
  16.7 The Main Theorem
  16.8 Cubic Equations
  16.9 Quartic Equations
  16.10 Roots of Unity
  16.11 Kummer Extensions
  16.12 Quintic Equations
```

Named results in the read range (Artin numbers everything `chapter.section.item`):

- **15.3.1** definition of [K:F] · **15.3.2** degree 1 ⟺ F = K · **15.3.3** char ≠ 2: every
  quadratic extension is F(δ) with δ² ∈ F · **15.3.4** [F(α):F] = deg of α; α algebraic ⟺
  [F(α):F] finite · **15.3.5 Multiplicative Property of the Degree** [L:F] = [L:K][K:F], "therefore
  both [L:K] and [K:F] divide [L:F]" · 15.3.6 (degree of an element divides the degree of the
  field).
- **15.5.1** the three rules for ruler-and-compass construction · Constructions 15.5.2 (perpendicular),
  15.5.3 (parallel), 15.5.4 (marking off a length) · **15.5.5** (a) the line through two F-points and
  the circle centred at an F-point through an F-point have equations over F; (b) intersections of
  such lines/circles have coordinates in F or in a **real quadratic** extension F′ of F, with the
  explicit "lucky event" that two circles subtract to a *linear* equation · **15.5.6** every
  constructible point lies at the top of a chain Q = F₀ ⊂ ⋯ ⊂ F_n = K of **real** fields with each
  [F_{i+1}:F_i] = 2, so [K:Q] is a power of 2 · **15.5.7** a constructible real is algebraic of
  degree a power of 2, **with the explicit note that the converse is false** · **15.5.8**
  cos 20° has degree 3 (root of x³ − 3x − 1), so the 60° angle cannot be trisected · the 7-gon
  argument · **15.5.9** if the regular p-gon is constructible then p = 2^r + 1 · **15.5.10** the
  converse to 15.5.6 for towers of real quadratic extensions · **15.5.11** the constructible
  numbers form a subfield of R closed under positive square roots.
- **15.6.2** F[x]/(f) is a field for irreducible f · **15.6.3** a splitting field exists ·
  **15.6.4** (a)–(f) base change of divisibility, division, gcd, common roots · **15.6.5** the
  formal derivative · **15.6.6** α is a multiple root ⟺ f(α) = f′(α) = 0 · **15.6.7** f has a
  multiple root in some extension ⟺ gcd(f,f′) ≠ 1 · **15.6.8** an irreducible f has no multiple
  root unless f′ = 0; in characteristic 0, never.
- **15.7.1** |K| = p^r = q · **15.7.3** the five main facts: (a) the elements of a field of order q
  are the roots of x^q − x; (b) the irreducible factors of x^q − x over F_p are exactly the
  irreducibles whose degree divides r; (c) K^× is cyclic of order q − 1; (d) a field of order q
  exists and all are isomorphic; (e) F_{p^r} contains a subfield of order p^k ⟺ k | r ·
  **15.7.4** an irreducible of every degree r exists over F_p · Examples 15.7.5 (F₄, F₈, F₁₆, with
  the explicit "F₈ does not contain F₄") · **15.7.10** (a) x^q − x has no multiple root;
  (b) (x+y)^q = x^q + y^q · **15.7.11** the roots of x^q − x in any characteristic-p field form a
  subfield.
- **16.1.1** the S_n action by R-automorphisms of R[u₁,…,u_n] · orbit sums as a basis of the
  symmetric polynomials · **16.1.2** P(x) = ∏(x − u_i) = xⁿ − s₁x^{n−1} + s₂x^{n−2} − ⋯ ± s_n ·
  **16.1.3** the sign convention f(x) = xⁿ − a₁x^{n−1} + a₂x^{n−2} − ⋯ ± a_n adopted for the whole
  chapter · **16.1.5** a_i = s_i(α₁,…,α_n) for a completely split f · **16.1.6 Symmetric Functions
  Theorem** "Every symmetric polynomial g(u₁,…,u_n) with coefficients in a ring R can be written in
  a unique way as a polynomial in the elementary symmetric functions s₁,…,s_n", with the precise
  restatement in terms of a unique G(z₁,…,z_n) ∈ R[z] · Examples 16.1.7–16.1.10 · **16.1.11** the
  key lemma (if g⁰ = Q(s⁰) then g = Q(s₁,…,s_{n−1}) + s_n h with h symmetric of degree d − n) ·
  **16.1.12 Corollary** a symmetric polynomial over F evaluated at the roots of a monic
  f ∈ F[x] that splits lies in F · **16.1.14** substituting an orbit {p₁,…,p_k} into a symmetric
  polynomial in k variables yields a symmetric polynomial · Example 16.1.15.
- **16.2.1** D(u) = ∏_{i<j}(u_i − u_j)², with the two main properties: D is a symmetric polynomial
  **with integer coefficients**, and for field elements D(a) = 0 ⟺ two a_i coincide ·
  **16.2.2** the polynomial Δ(z) with D(u) = Δ(s) · **16.2.5** the cubic discriminant
  D = −4s₁³s₃ + s₁²s₂² + 18s₁s₂s₃ − 4s₂³ − 27s₃² · the definition of disc f for a *general* (not
  necessarily split) f as Δ(a₁,…,a_n) · **16.2.6** the Tschirnhausen substitution x = y + s₁/3
  (needs char ≠ 3) · **16.2.7/16.2.8** for x³ + px + q, Δ = −4p³ − 27q² · the **weighted-degree**
  bookkeeping (assign weight i to z_i; a symmetric g of degree d gives G of weighted degree d).
  Artin's own aside is worth recording: "Unfortunately, D and Δ are very complicated when n is
  larger. I don't know what they are when n > 3."

### 1.7 Anthony W. Knapp, *Basic Algebra*, Digital 2nd ed. — printed TOC for Ch. IX, verbatim

Read range: **§§IX.1–IX.5 in full (pp. 452–474)**, plus the printed Contents.

```
IX. FIELDS AND GALOIS THEORY                                          452
  1. Algebraic Elements                                              453
  2. Construction of Field Extensions                                457
  3. Finite Fields                                                   461
  4. Algebraic Closure                                               464
  5. Geometric Constructions by Straightedge and Compass             468
  6. Separable Extensions                                            474
  7. Normal Extensions                                               481
  8. Fundamental Theorem of Galois Theory                            484
  9. Application to Constructibility of Regular Polygons             489
 10. Application to Proving the Fundamental Theorem of Algebra       492
 11. Application to Unsolvability of Polynomial Equations with
     Nonsolvable Galois Group                                        493
 12. Construction of Regular Polygons                                499
 13. Solution of Certain Polynomial Equations with Solvable
     Galois Group                                                    506
 14. Proof That π Is Transcendental                                  515
 15. Norm and Trace                                                  519
 16. Splitting of Prime Ideals in Extensions                         526
 17. Two Tools for Computing Galois Groups                           532
 18. Problems                                                        539
```

Named results in the read range:

- **Proposition 9.1** (the minimal polynomial is irreducible and generates the ideal of relations) ·
  **Theorem 9.2** (k(x) = k[x] for algebraic x) · **Corollary 9.3** (k(x) has k-dimension deg of the
  minimal polynomial) · **Proposition 9.4** (finite ⟹ algebraic) · **Corollary 9.5** (x algebraic ⟺
  k(x) finite-dimensional) · **Theorem 9.6** the tower basis theorem, stated with
  "[K:k] = n and [L:K] = m, **finite or infinite**", concluding the mn products ω_iξ_j form a basis
  of L over k · **Corollary 9.7** [L:k] = [L:K][K:k] · **Theorem 9.8** k(x₁,…,x_n) is a *finite*
  algebraic extension when each x_i is algebraic · **Corollary 9.9** the elements of K algebraic
  over k form a field.
- **Theorem 9.10** existence, **Theorem 9.11** uniqueness of simple algebraic extensions ·
  **Theorem 9.12** existence, **Theorem 9.13** uniqueness of splitting fields, with the σ-twisted
  refinements **9.11′**, **9.13′**.
- **Theorem 9.14** "For each p^n with p a prime number and n a positive integer" — existence and
  uniqueness of the field of that order · **Proposition 9.15** the product rule for formal
  differentiation · **Corollaries 9.16, 9.17** (multiple roots via the derivative) · **Lemma 9.18**
  the Frobenius map is a field mapping in characteristic p · **Corollary 9.19** "If q and r are
  integers with 2 ≤ q ≤ r, then the finite field …" (the containment F_q ⊆ F_r criterion).
- **Proposition 9.20** equivalent conditions for k algebraically closed · **Lemma 9.21** ·
  **Theorem 9.22 (Steinitz)** every field has an algebraic closure, unique up to isomorphism ·
  **Theorem 9.23** the extension theorem into an algebraically closed field.
- **Theorem 9.24** the constructibility characterisation: "The set C of x coordinates that can be
  constructed from x = 1 and x = 0 by straightedge and compass forms a subfield of **R** such that
  the square root of any positive element of the field lies in the field. Conversely the members of
  C are those real numbers lying in some subfield F_n of **R** of the form F₁ = Q(√a₀),
  F₂ = F₁(√a₁), …, F_n = F_{n−1}(√a_{n−1}) with each a_j in F_j and with a₀,…,a_{n−1} all ≥ 0."
  · **Theorem 9.25 (Gauss)** the regular n-gon is constructible ⟺ n is a power of 2 times distinct
  Fermat primes (proved in §12; stated in §5).

Knapp's §5 also lists the three classical problems verbatim: "(i) how to double a cube …
(ii) how to trisect any constructible angle … (iii) how to square a circle …", and says explicitly
that (iii) is **reduced to** the transcendence of π, which he proves only in §14.

### 1.8 Anthony W. Knapp, *Advanced Algebra*, Digital 2nd ed. — Ch. VIII printed TOC, verbatim

Read range: **§VIII.2 in full (pp. 451–456)**.

```
VIII. BACKGROUND FOR ALGEBRAIC GEOMETRY                              447
  1. Historical Origins and Overview                                 448
  2. Resultant and Bezout's Theorem                                  451
  3. Projective Plane Curves                                         456
  4. Intersection Multiplicity for a Line with a Curve               466
  5. Intersection Multiplicity for Two Curves                        473
  6. General Form of Bezout's Theorem for Plane Curves               488
  7. Gröbner Bases                                                   491
  8. Constructive Existence                                          499
  9. Uniqueness of Reduced Gröbner Bases                             508
 10. Simultaneous Systems of Polynomial Equations                    510
 11. Problems                                                        516
```

Named results in §2: the definition of the **(m+n)×(m+n) matrix R(f,g)** (Knapp's own name for the
Sylvester matrix) and R(f,g) = det R(f,g) · **Theorem 8.1** (the equivalence (a)⟺(b)⟺(c) plus the
Bezout identity af + bg = R(f,g); full statement in §2.7 below) · **Theorem 8.2 (Bezout's
Theorem)**, the affine plane-curve form.

### 1.9 Keith Conrad, "Finite fields" — §-headings and named results, verbatim

Read range: **the whole 13-page blurb.**

```
1. Construction
2. Finite fields as splitting fields
3. Describing Fp-conjugates
4. Galois groups
5. General finite base fields
6. Applications
7. History
Appendix A. The maximal order in a finite abelian group
```

Named: **Thm 1.1** (F_p[x]/(π) is a field of order p^n) · **Thm 1.5** every finite field has prime
power order · **Lem 1.6** F finite ⟹ F^× cyclic · **Thm 1.10** every finite field is isomorphic to
some F_p[x]/(π(x)), with the explicit warning "Theorem 1.10 does not assure us that a field of each
prime power order exists" · **Lem 2.1** a field of order p^n is a splitting field over F_p of
x^{p^n} − x · **Thm 2.2** for every prime power p^n a field of order p^n exists · **Cor 2.3** a
monic irreducible of degree n exists in F_p[x] · **Thm 2.5** each irreducible of degree n divides
x^{p^n} − x · **Thm 2.7** all finite fields of the same size are isomorphic · **Thm 2.8** a subfield
of F_{p^n} has order p^d with d | n, and there is exactly one such · **Lem 3.1**, **Thm 3.3**,
**Thm 3.4**, **Cor 3.7** (conjugates) · **Thm 4.1** the p-th power map generates Gal(F_{p^n}/F_p) ·
**Cor 4.2** an irreducible in F_p[x] is separable · **Thm 4.6** trace and norm formulas ·
**Thm 5.1**, **Thm 5.2**, **Lem 5.3**, **Lem 5.4**, **Thm 5.5**, **Thm 5.6** (F_{q^n}/F_q is Galois
with cyclic group of order n), **Thm 5.7** · **Thm A.1**, **Thm A.2**, **Cor A.4** (the abelian
group fact behind cyclicity: if g₁, g₂ have orders n₁, n₂ then there is an element of order
lcm(n₁,n₂)).

### 1.10 Robert Ash, *Abstract Algebra: The Basic Graduate Year*, Ch. 3 and §6.4 — Ash's own numbering, verbatim

Read range: **Chapter 3 in full; Chapter 6 §6.4 in full.**

```
3.1 Field Extensions
  3.1.1 Definitions · 3.1.2 Lemma · 3.1.3 Theorem · 3.1.4 Proposition · 3.1.5 Corollary
  3.1.7 Theorem · 3.1.8 Lemma · 3.1.9 The Degree is Multiplicative · 3.1.10 Theorem
3.2 Splitting Fields
  3.2.1 Definitions and Comments · 3.2.2 Proposition · 3.2.3 Theorem · 3.2.4 Definition
  3.2.5 Isomorphism Extension Theorem
3.3 Algebraic Closures
  3.3.1 Proposition · 3.3.2 Definitions and Comments · 3.3.3 Proposition · 3.3.4 Corollary
  3.3.5 Corollary (Transitivity of Algebraic Extensions) · 3.3.7 Theorem · 3.3.8 Theorem
  3.3.9 Theorem
3.4 Separability
  3.4.1 Definitions and Comments · 3.4.2 Proposition · 3.4.3 Corollary
  3.4.4 The Frobenius Automorphism · 3.4.5 Proposition · 3.4.7 Lemma · 3.4.8 Example
3.5 Normal Extensions
  3.5.1 Lemma · … · 3.5.11 The Normal Closure · 3.5.12 Theorem of the Primitive Element
6.4 Finite Fields
  6.4.1 Proposition · 6.4.2 Corollary · 6.4.3 Corollary · 6.4.4 Theorem · 6.4.5 Proposition
  6.4.6 Theorem · 6.4.7 The Explicit Construction of a Finite Field
```

**3.1.9 "The Degree is Multiplicative"** and **3.3.5 "Corollary (Transitivity of Algebraic
Extensions)"** are the two headings this page consumes; Ash gives them *named* headings rather than
bare "Theorem", which is a useful signal that he regards them as the load-bearing results of §3.

### 1.11 Pete L. Clark, *Field Theory*, Ch. 3 — printed TOC and named results

Read range: **Chapter 3 in full (pp. 23–30).**

```
Chapter 3. Field Extensions 23
  1. Introduction 23
  2. Some Impossible Constructions 26
  3. Subfields of Algebraic Numbers 27
  4. Distinguished Classes 29
```

Named: **Theorem 3.1 (Degree multiplicativity in towers)** · **Remark 3.1** (the degree is in
general a **cardinal number** and Theorem 3.1 is an identity of possibly infinite cardinals) ·
Example 3.2, Exercises 3.1–3.5 · **Theorem 3.3** (a)(b)(c) the algebraic/transcendental dichotomy ·
**Corollary 3.4** finite ⟹ algebraic · **Proposition 3.5** (Cl_L(K), the algebraic closure of K in
L, is a subfield) · **Theorem 3.6** the four equivalents for integrality · **Lemma 3.7**,
**Lemma 3.8**, **Corollary 3.9 (Transitivity of integrality)**, **Corollary 3.10**,
**Proposition 3.11**, **Proposition 3.12** (an integral extension of a field is a field).

Clark's §2 is a *narrative* rather than a numbered development: he derives "any constructible
number α lies in a field which is at the top of a tower of quadratic field extensions, so
[Q(α):Q] is a power of 2" and then disposes of doubling the cube ([Q(∛2):Q] = 3), trisecting the
60° angle (cos 20° satisfies an irreducible cubic), and squaring the circle ("π is not even
algebraic!"). The construction rules themselves and the closure properties are set as
**Exercise 3.5** — i.e. **Clark does not prove the geometry-to-algebra translation**; Artin
(15.5.5) and Knapp (9.24) do.

### 1.12 Serge Lang, *Algebra*, rev. 3rd ed. — printed Contents for Ch. IV, V, IX, verbatim with page numbers

Read range: **the printed Contents only** (the body did not resolve — see PART 0).

```
Chapter IV  Polynomials                                              173
  1. Basic properties for polynomials in one variable                173
  2. Polynomials over a factorial ring                               180
  3. Criteria for irreducibility                                     183
  4. Hilbert's theorem                                               186
  5. Partial fractions                                               187
  6. Symmetric polynomials                                           190
  7. Mason-Stothers theorem and the abc conjecture                   194
  8. The resultant                                                   199
  9. Power series                                                    205
Chapter V  Algebraic Extensions                                      223
  1. Finite and algebraic extensions                                 225
  2. Algebraic closure                                               229
  3. Splitting fields and normal extensions                          236
  4. Separable extensions                                            239
  5. Finite fields                                                   244
  6. Inseparable extensions                                          247
Chapter IX  Algebraic Spaces                                         377
  1. Hilbert's Nullstellensatz                                       378
  2. Algebraic sets, spaces and varieties                            381
  3. Projections and elimination                                     388
  4. Resultant systems                                               401
  5. Spec of a ring                                                  405
```

Disposition note: Conrad (S2) states that Lang IV §6 proves the fundamental theorem "by a double
induction on n and on the degree of the polynomial" — i.e. Lang's proof is the same shape as
Artin's (S7 §16.1), not Conrad's/Milne's lexicographic one. Lang IV §8 and IX §4 are the resultant
sections; **their statements were not obtained**, and Knapp (S12) is the substitute.

### 1.13 The Stacks Project, chapter "Fields" — section list with tags

Read range: **§9.7 "Finite extensions" (tag 09G2) statements; the whole chapter's section list.**

```
9.1  (09FB) Introduction              9.15 (09HL) Normal extensions
9.2  (09FC) Basic definitions         9.16 (09HT) Splitting fields
9.3  (09FF) Examples of fields        9.17 (09HW) Roots of unity
9.4  (09FM) Vector spaces             9.18 (09HY) Finite fields
9.5  (09FQ) The characteristic of a field   9.19 (09HZ) Primitive elements
9.6  (09FT) Field extensions          9.20 (0BIE) Trace and norm
9.7  (09G2) Finite extensions         9.21 (09DU) Galois theory
9.8  (09GB) Algebraic extensions      9.22 (0BMI) Infinite Galois theory
9.9  (09GL) Minimal polynomials       9.23 (09I4) The complex numbers
9.10 (09GP) Algebraic closure         9.24 (09I6) Kummer extensions
9.11 (09GW) Relatively prime polynomials   9.25 (09I7) Artin-Schreier extensions
9.12 (09GZ) Separable algebraic extensions 9.26 (030D) Transcendence
9.13 (0CKK) Linear independence of characters  9.27 (09IC) Linearly disjoint extensions
9.14 (09HD) Purely inseparable extensions      9.28 (037H) Review
```

Statements obtained verbatim: **Definition 9.7.1 (09G3)** the degree; **Lemma 9.7.3 (09G5)** "Let
K/E/F be a tower of algebraic field extensions. If K is finite over F, then K is finite over E.";
**Lemma 9.7.5 (0BU1)** "A finite extension of fields is a finitely generated field extension. The
converse is not true."; **Lemma 9.7.7 (09G9) Multiplicativity** "Suppose given a tower of fields
F/E/k. Then [F:k] = [F:E][E:k]". The Stacks Project statement of 09G9 carries **no explicit
cardinal-arithmetic clause** — see PART 3.

### 1.14 Dummit & Foote — section titles, CAVEATED

**Not read off the book.** Recovered only from aggregated search results this run (ProofWiki and
`catdir.loc.gov` both returned 403). Recorded so the scaffolder knows what the commission's
pointers refer to, and **must not be quoted as a source**:

```
13.1 Basic Theory of Field Extensions
13.2 Algebraic Extensions
13.3 Classical Straightedge and Compass Constructions
13.4 Splitting Fields and Algebraic Closures
13.5 Separable and Inseparable Extensions
13.6 Cyclotomic Polynomials and Extensions
14.6 Galois Groups of Polynomials  [from the sibling Galois harvest §1.6]
```

Everything the commission wanted from D&F 13.1–13.2 is in Knapp IX.1, Clark 3.1, Ash 3.1 and
Artin 15.3; from 13.3 in Artin 15.5, Knapp IX.5 and Clark 3.2; from 13.5–13.6 in the sibling Galois
harvest; from 14.6 in Milne Ch. 4 and Conrad `galoisaspermgp`.

### 1.15 Resultant lecture notes (cross-checks only)

- **S17, "Lecture 10 — The Sylvester Resultant"** (9 pp, no §-numbering beyond
  `10.1 Common Zeros of Univariate Polynomials`, `10.2 Common Zeros of Bivariate Polynomials`).
  Named: **Lemma 1** (f and g have a common zero iff ∃ nonzero s,t with deg s < deg g,
  deg t < deg f and fs + gt ≡ 0) · the definition of Syl(f,g) and res(f,g) := det Syl(f,g) ·
  **Theorem 2** "Let f,g ∈ R[x]. Then f and g have a common zero if and only if res(f,g) = 0."
  **This statement is sloppy about where the "common zero" lives** and about the leading-coefficient
  hypotheses; do not follow it. Use Knapp Theorem 8.1.
- **S18, "Lesson 21 — Resultants"** (6 pp; headings `I. The Resultant`, `II. Finding Intersection
  Points of Curves`). States the criterion over a **UFD** R for f, g of positive degree, with the
  three equivalents (common non-constant divisor in R[x] ⟺ ∃ u,v ⟺ Res = 0) — i.e. it agrees with
  Knapp. The OCR of its formulas is unusable; the agreement is what it contributes.

---

## PART 2 — The mathematics, with exact hypotheses, proof strategies, prerequisites

Numbering below is mine; the source citation after each statement is the one the exact wording
comes from.

# PAGE A — SYMMETRIC POLYNOMIALS

### 2.1 The S_n action, and the elementary symmetric polynomials

**Setting (Artin 16.1.1, Milne p. 78, Grinberg 7.1, Conrad §1).** Let R be a commutative ring with
1 and let R[u₁,…,u_n] be the polynomial ring. A permutation σ ∈ S_n acts by
σ·f(u₁,…,u_n) = f(u_{σ(1)},…,u_{σ(n)}). Artin's phrasing: "In this way, σ defines an automorphism
of R[u] that we denote by σ too. Because σ acts as the identity on the constant polynomials, it is
called an R-automorphism. The symmetric group S_n operates by R-automorphisms on the polynomial
ring." A polynomial is **symmetric** if it is fixed by every permutation; the symmetric
polynomials form a **subring**.

**Definition (e_k).** e_k = Σ_{1 ≤ i₁ < ⋯ < i_k ≤ n} u_{i₁}⋯u_{i_k}, with e₀ = 1 and, in n
variables, **e_k = 0 for k > n** (Macdonald (2.2) parenthesis; Grinberg Prop. 7.1.11: "there are
only N 'interesting' elementary symmetric polynomials").

**The defining identity, with the sign convention** (Conrad (1.1), Artin 16.1.2, Milne p. 80,
Grinberg Prop. 7.1.14(b)):

> (T − X₁)(T − X₂)⋯(T − X_n) = Tⁿ − e₁T^{n−1} + e₂T^{n−2} − ⋯ + (−1)ⁿ e_n.

Equivalently ∏_{i=1}^{N}(1 − t x_i) = Σ_{n} (−1)ⁿ tⁿ e_n (Grinberg 7.1.14(a)) and
∏_{i}(1 + x_i t) = Σ_r e_r t^r (Macdonald (2.2), Grinberg–Reiner (2.4.2)).

**Orbit sums / monomial symmetric polynomials.** Artin: "A polynomial g is symmetric if two
monomials that are in the same orbit … have the same coefficient in g. We call the sum of the
monomials in an orbit an **orbit sum**. The orbit sums form a basis for the space of symmetric
polynomials." Macdonald's (2.1) is the same statement in partition indexing: the m_λ with
ℓ(λ) ≤ n form a **Z**-basis of Λ_n. **This is a free-module statement over Z (or over any R), not
merely a vector-space statement** — a cheap and useful lemma for the page.

*Prerequisites:* polynomial rings in several variables over a commutative ring; group actions; the
symmetric group. Nothing from field theory. **Conrad's footnote 1 is load-bearing for the library:
modern Galois theory does not use this theorem, so the page may be placed either before or after
the Galois block without circularity — but the Galois block's "general polynomial has group S_n"
does use it.**

### 2.2 The fundamental theorem — the five treatments, side by side

The commission asked for at least two independent full treatments. Five were obtained. Their exact
statements:

1. **Conrad, Theorem 1.5 + Theorem 4.1 + Theorem 4.3 (S2).** "The set of symmetric polynomials in
   F[X₁,…,X_n] is F[s₁,…,s_n]." Uniqueness is a *separate theorem*: "Every symmetric polynomial in
   F[X₁,…,X_n] can be written in only one way as a polynomial in the elementary symmetric functions
   of X₁,…,X_n." Ring version: "The set of all symmetric polynomials in Z[X₁,…,X_n] is
   Z[s₁,…,s_n], and each element of Z[s₁,…,s_n] is a polynomial in s₁,…,s_n in exactly one way."
   Hypotheses: F a field for 1.5/4.1; for the general case, R a **nonzero commutative ring**.
2. **Milne, Theorem 5.36 + Remark 5.37(b) (S1).** "Every symmetric polynomial P in R[X₁,…,X_n] is
   a polynomial in the elementary symmetric polynomials with coefficients in R, i.e.,
   P ∈ R[p₁,…,p_n]." Stated **directly for a commutative ring R with 1**; uniqueness is a remark,
   not a theorem.
3. **Artin, Theorem 16.1.6 (S7).** "Every symmetric polynomial g(u₁,…,u_n) with coefficients in a
   ring R can be written in a unique way as a polynomial in the elementary symmetric functions
   s₁,…,s_n." Artin then makes the meaning precise: "there is a unique polynomial G(z₁,…,z_n) with
   coefficients in R in another set of variables z₁,…,z_n, such that g(u) is obtained by the
   substitution z_i ↦ s_i". **Existence and uniqueness in one statement, over a ring.**
4. **Macdonald, (2.4) + Remark (S8).** "Λ = Z[e₁, e₂, …] and the e_r are algebraically independent
   over Z", with the explicit finite-variable remark "Λ_n = Z[e₁,…,e_n], and e₁,…,e_n are
   algebraically independent. This is the usual statement of the 'fundamental theorem on symmetric
   functions'."
5. **Grinberg, Theorem 7.1.15(a) (S10).** For K an arbitrary commutative ring and S the ring of
   symmetric polynomials in N variables over K: "The elementary symmetric polynomials e₁,e₂,…,e_N
   are algebraically independent (over K) and generate the K-algebra S. In other words, each f ∈ S
   can be uniquely written as a polynomial in e₁,e₂,…,e_N. In yet other words, the map
   K[y₁,…,y_N] → S, g ↦ g[e₁,…,e_N] is a K-algebra isomorphism." Grinberg–Reiner Remark 2.3.9(c)
   is the same statement, attributed to **Gauss**.

**The three genuinely different proofs of existence:**

- **(P1) Lexicographic / Gauss's algorithm — Conrad §3, Milne 5.36.** Order N^n lexicographically
  (Conrad Def. 2.1) or graded-lexicographically (Milne: compare total degree first, then lex).
  Take f symmetric, nonzero, with multidegree d = (d₁,…,d_n) and leading coefficient c.
  *Step 1 (the only place symmetry is used):* because f is symmetric, every permutation of d is
  also the multidegree of a monomial of f, and d is the largest, so **d₁ ≥ d₂ ≥ ⋯ ≥ d_n ≥ 0**
  (Conrad (3.3)). *Step 2:* mdeg(e₁^{a₁}⋯e_n^{a_n}) = (a₁+⋯+a_n, a₂+⋯+a_n, …, a_n), so the
  system a₁ = d₁−d₂, …, a_{n−1} = d_{n−1}−d_n, a_n = d_n (Conrad (3.2)) has **nonnegative**
  solutions exactly because of Step 1, and c·e₁^{a₁}⋯e_n^{a_n} has the same leading term as f.
  *Step 3:* f − c·e₁^{a₁}⋯e_n^{a_n} is symmetric with strictly smaller multidegree; iterate.
  *Termination:* Conrad Theorem 2.12 — lex order on N^n is a **well-order**, so there is no
  infinite strictly decreasing sequence. **Conrad's Remark 3.2 is a genuine trap he flags: lex
  order on N^n for n ≥ 2 does NOT have finitely many elements below a given element ((0,b) < (1,0)
  for every b), so this is transfinite/well-founded induction, not ordinary induction on a
  numerical parameter.** Milne sidesteps it by using graded lex, where the set below a given
  monomial *is* finite.
- **(P2) Double induction on the number of variables and the degree — Artin §16.1, and (per
  Conrad's bibliography) Lang IV §6.** Set g⁰(u₁,…,u_{n−1}) = g(u₁,…,u_{n−1}, 0), which is
  symmetric in n−1 variables; by induction on n, g⁰ = Q(s⁰₁,…,s⁰_{n−1}). Then **Lemma 16.1.11**:
  p := g − Q(s₁,…,s_{n−1}) is symmetric and vanishes when u_n = 0, so u_n | p; by symmetry every
  u_i | p, hence s_n = u₁⋯u_n divides p, and p = s_n·h with h symmetric of degree deg g − n.
  Induct on the degree. **Note the second induction is on degree and strictly decreases by n**, so
  it terminates.
- **(P3) Triangularity of the e_λ against the m_λ — Macdonald (2.3) ⟹ (2.4), Grinberg–Reiner
  Prop. 2.2.10.** Show e_{λ'} = m_λ + Σ_{μ<λ} a_{λμ}m_μ with a_{λμ} ∈ Z_{≥0} and the coefficient
  of m_λ equal to 1 (a unitriangular change of basis in the dominance order). Since the m_λ are a
  **Z**-basis, so are the e_λ; and "the e_λ form a Z-basis" is *literally the same statement* as
  "every symmetric function is uniquely a polynomial in the e_r". **This proof gets existence and
  uniqueness simultaneously and over any coefficient ring**, at the cost of first developing
  partitions and the dominance order.

*Recommendation for the scaffold:* P1 or P2 as the main proof (both are elementary and
self-contained); P3 as a remark, since it requires partitions. The library must pick one and be
consistent, because the **statement of the uniqueness half depends on which** (see 2.3).

### 2.3 Uniqueness = algebraic independence — three genuinely different arguments

The three sources that actually *prove* uniqueness prove it three ways, and the commission is right
that this is the half that gets waved at (Artin's whole proof of uniqueness is the sentence "One can
show that G is uniquely determined by going over this proof").

- **(U1) Conrad Theorem 4.1 — the multidegree-injectivity argument, done carefully.** Reduce to:
  g ≠ 0 in F[Y₁,…,Y_n] ⟹ g(e₁,…,e_n) ≠ 0 in F[X₁,…,X_n]. Write g = Σ_i c_i Y^i. The map
  i = (i₁,…,i_n) ↦ mdeg(e₁^{i₁}⋯e_n^{i_n}) = (i₁+⋯+i_n, i₂+⋯+i_n, …, i_n) is **injective** —
  Conrad's proof reads the coordinates "from rightmost to leftmost" to recover i. So the nonzero
  terms c_i e^i have pairwise distinct multidegrees and leading coefficients c_i, hence exactly one
  of them has the largest multidegree and cannot be cancelled. Conrad explicitly flags the
  subtlety that "the leading term of g(Y₁,…,Y_n) need not contain the leading term of
  g(e₁,…,e_n)", with the witness **g(Y₁,Y₂) = Y₁⁵ + Y₂⁵**: its lex-leading term is Y₁⁵, but
  g(e₁,e₂) = (X₁+X₂)⁵ + (X₁X₂)⁵ has leading term (X₁X₂)⁵, which comes from the *non-leading* term.
- **(U2) Milne Remark 5.37(b).** Same idea, stated in three sentences: "the highest monomials in
  the polynomials p₁^{d₁}⋯p_n^{d_n} are distinct (the map (d₁,…,d_n) ↦ (d₁+⋯+d_n,…,d_n) is
  injective), and so they can't cancel." **Milne then reuses exactly this injectivity to prove
  Theorem 5.40** (the homomorphism F[t₁,…,t_n] → F[e₁,…,e_n], t_i ↦ e_i, is injective), which is
  the point where the Galois block consumes it.
- **(U3) Macdonald (2.4) / Grinberg–Reiner 2.2.10 / Grinberg 7.1.15.** Uniqueness is the
  *basis* statement: the e_λ are a Z-basis (resp. K-basis) of Λ_n, which is by definition the
  assertion that each symmetric polynomial is uniquely a Z-linear (K-linear) combination of the
  e_λ, i.e. uniquely a polynomial in e₁,…,e_n. No separate argument is needed once (2.3) is
  proved.

**Reformulation the Galois block wants (record this):** uniqueness ⟺ **e₁,…,e_n are algebraically
independent over R**, ⟺ the R-algebra map R[y₁,…,y_n] → R[x₁,…,x_n]^{S_n}, y_i ↦ e_i, is an
isomorphism (Grinberg 7.1.15(a)'s third formulation). That isomorphism is exactly what turns "the
general polynomial of degree n" into "the splitting field of ∏(T − X_i) over F(e₁,…,e_n)"
(Milne 5.40).

### 2.4 The arbitrary-commutative-ring version — exactly what the proof needs

**Statement (strongest obtained).** For **any** commutative ring K and any N ≥ 0, the K-algebra
K[x₁,…,x_N]^{S_N} is a polynomial algebra on e₁,…,e_N: they are algebraically independent over K
and generate (Grinberg Theorem 7.1.15(a); Grinberg–Reiner Prop. 2.4.1 and Remark 2.3.9(c);
Macdonald (2.4) + Remark 2 of §2; Milne 5.36; Artin 16.1.6). **No domain hypothesis, no
Noetherian hypothesis, no characteristic hypothesis.**

**What the proof actually needs, and what it does not** — this is exactly the question the
commission asked, and Conrad answers it explicitly in two places:

- "In the proofs of Theorems 1.5 and 4.1, the fact that the coefficients come from a field F rather
  than a ring is not important **since we never had to divide in F**." The only arithmetic used is
  subtraction of like terms and multiplication of leading coefficients.
- **Conrad footnote 4, the one real technicality:** "if R is not a domain then the formula
  mdeg(fg) = mdeg f + mdeg g is true only as long as the leading coefficients of f and g are both
  not zero-divisors in R, and that is true for the case of elementary symmetric polynomials
  s₁,…,s_n **since their leading coefficients equal 1**." So the proof survives zero divisors
  **only because the e_i are monic in the relevant sense**. Artin's proof (P2) needs the same
  observation in a different place: "u_n divides p … because p is symmetric, every u_i divides p,
  and therefore s_n divides p" uses that R[u] is a UFD-free argument on monomials, valid over any
  commutative ring since s_n = u₁⋯u_n and the u_i are non-zero-divisors in R[u] whenever R ≠ 0.
- Macdonald's version of "what it needs" is Remark 2 of §2: "We could use any commutative ring A in
  place of Z as coefficient ring; in place of Λ we should obtain Λ_A = Λ ⊗ A" — i.e. the whole
  theory is defined over **Z** and everything else is base change. **This is the cleanest thing for
  the library to say:** prove it over Z (Conrad Theorem 4.3), then base-change.

*Boundary cases to state explicitly (none of the sources does all of them):* N = 0 (the ring is K,
there are no e's); R = 0 (Conrad says "nonzero commutative ring"; over the zero ring everything is
trivially true but "uniquely" is vacuous); the zero polynomial (Conrad handles it separately,
"the multidegree of the zero polynomial is not defined").

### 2.5 Power sums, the Newton identities, and the characteristic hypothesis

**Definition.** p_r = x₁^r + ⋯ + x_N^r for r ≥ 1 (Macdonald §2 "power sums"; Conrad Example 1.1;
Grinberg 7.1). Unlike the e's, **p_r ≠ 0 for all r** when N > 0 (Grinberg Prop. 7.1.11).

**The identities, exactly as the sources state them.** There are three inequivalent-looking
presentations of the same facts; the scaffolder must not mix them.

- **Macdonald (2.11), (2.11') — "Newton's formulas":** for n ≥ 1,
  n·h_n = Σ_{r=1}^{n} p_r h_{n−r} and n·e_n = Σ_{r=1}^{n} (−1)^{r−1} p_r e_{n−r},
  derived from (2.10) P(t) = H′(t)/H(t) and (2.10′) P(−t) = E′(t)/E(t).
- **Grinberg Theorem 7.1.12 (Newton–Girard formulas)** — the same, in N variables, for **any
  positive integer n** with the convention e_m = 0 for m > N:
  (267) Σ_{j=0}^{n} (−1)^j e_j h_{n−j} = 0;
  (268) Σ_{j=1}^{n} (−1)^{j−1} e_{n−j} p_j = n·e_n;
  (269) Σ_{j=1}^{n} h_{n−j} p_j = n·h_n.
- **The classical two-case form the commission asked about.** Substituting i = k − j into (268)
  and multiplying by (−1)^{k−1} gives, in N variables, for every k ≥ 1:
  Σ_{i=0}^{k−1} (−1)^i e_i p_{k−i} + (−1)^k k·e_k = 0, i.e.
  - **for 1 ≤ k ≤ N:** p_k − e₁p_{k−1} + e₂p_{k−2} − ⋯ + (−1)^{k−1}e_{k−1}p₁ + (−1)^k k·e_k = 0;
  - **for k > N:** e_k = 0 and e_i = 0 for i > N, so the identity collapses to
    p_k − e₁p_{k−1} + e₂p_{k−2} − ⋯ + (−1)^N e_N p_{k−N} = 0 — **no k·e_k term, and only N+1
    terms.**

  **This two-case split is a presentational artefact, not two theorems**: Grinberg's (268) is one
  identity covering both, and the split appears only when one refuses to write e_m = 0 for m > N.
  Whichever the library picks, it must state the convention e₀ = 1, e_m = 0 for m > N, in the same
  breath. *(The two-case form is my derivation from Grinberg (268), checked against Conrad's
  worked "universal formulas" p₁ = s₁, p₂ = s₁²−2s₂, p₃ = s₁³−3s₁s₂+3s₃, p₄ = s₁⁴−4s₁²s₂+2s₂²
  +4s₁s₃−4s₄, which Conrad says hold "in any number of variables" under exactly that convention.
  It is not a verbatim quotation from any harvested source — flagged as such.)*
- **The determinant form (Conrad §3, end).** p₂ = det[[s₁,1],[2s₂,s₁]], p₃ and p₄ as 3×3 and 4×4
  determinants of the same banded shape. Cheap, checkable, and a good `ex-` item.

**Do the power sums generate? — the characteristic hypothesis, stated exactly.**

- **Macdonald (2.12):** "Λ_Q = Λ ⊗_Z Q = Q[p₁,p₂,…] and the p_r are algebraically independent
  **over Q**", with the explicit obstruction "they do not form a Z-basis of Λ: for example
  h₂ = ½(p₁² + p₂) does not have integral coefficients."
- **Grinberg Theorem 7.1.15(c):** "**Now assume that K is a commutative Q-algebra** (e.g., a field
  of characteristic 0). Then the power sums p₁,p₂,…,p_N are algebraically independent (over K) and
  generate the K-algebra S."
- **Grinberg–Reiner Prop. 2.4.1:** the same, phrased as "**when Q is a subring of k**".
- **Grinberg–Reiner Remark 2.3.9(e)(f):** the p_λ form a graded basis of Λ(x₁,…,x_N) "**If Q is a
  subring of k**".

**GAP, and it is a real one for this page.** *Every* source obtained states the hypothesis as
"Q ⊆ K" / "char 0", **not** as "char 0 or char > N". The sharper statement — that p₁,…,p_N generate
K[x₁,…,x_N]^{S_N} whenever K is a field of characteristic 0 or characteristic p > N — is *visibly*
what the proof gives (Grinberg's own recursion in Example 7.1.16 solves (268) for p_n, and in the
other direction solving (268) for e_n requires **dividing by n**, so only 1,2,…,N need be
invertible), but **no harvested source states it**. See PART 5 gap 1. Scaffolder options: (a) state
the Q-algebra version and cite Grinberg/Macdonald; (b) state the char > N version and prove it
locally from Newton's identity (268) by the same recursion, which is a short honest inline proof;
(c) both, as theorem + corollary. **Do not attribute the char > N version to a harvested source.**

**Proof strategy for Newton's identities.** Grinberg proves (267)–(269) with generating functions
in P[[t]] where P = K[x₁,…,x_N] (Prop. 7.1.14 supplies ∏(1−tx_i) = Σ(−1)ⁿtⁿe_n and
∏(1−tx_i)^{−1} = Σ tⁿh_n), and remarks that this "attests to the usefulness of generating
functions: even though the polynomials f ∈ P already involve N variables …, the proof proceeds by
adjoining yet another variable t". Macdonald's route is the same in disguise: logarithmic
derivative of H(t) and E(t). **A formal-power-series ring over a commutative ring, and formal
differentiation, are the prerequisites; the library must have them or the proof must be done
combinatorially.** (Grinberg also gives a bijective/counting proof of (267).)

### 2.6 Complete homogeneous symmetric polynomials, generating functions, ω

- **Definition (Macdonald §2).** h_r = Σ_{|λ|=r} m_λ = the sum of all monomials of total degree r;
  h₀ = 1, h₁ = e₁, and h_r := e_r := 0 for r < 0.
- **(2.5)** H(t) = Σ_{r≥0} h_r t^r = ∏_{i}(1 − x_i t)^{−1}; **(2.2)** E(t) = ∏_i(1 + x_i t).
- **(2.6)** H(t)E(−t) = 1, equivalently **(2.6′)** Σ_{r=0}^{n} (−1)^r e_r h_{n−r} = 0 for n ≥ 1.
  This is Grinberg's (267) and Grinberg–Reiner's (2.4.4). It is the **cheapest** of all these
  identities and the one everything else bootstraps from.
- **(2.7)/(2.8)** ω : e_r ↦ h_r is well defined (because the e_r are algebraically independent),
  is an **involution** (because (2.6′) is symmetric in e and h), hence an automorphism; therefore
  Λ = Z[h₁,h₂,…] with the h_r algebraically independent. Grinberg–Reiner Definition 2.4.2 calls ω
  "the fundamental involution of Λ" and Prop. 2.4.3 records ω(e_n) = h_n, ω(h_n) = e_n,
  ω(p_n) = (−1)^{n−1}p_n; Macdonald (2.13) is the same.
- **Finite-variable caveat, and it is the trap.** In N variables **h₁,…,h_N are also algebraically
  independent and generate** (Grinberg 7.1.15(b); Macdonald's remark after (2.8);
  Grinberg–Reiner 2.3.9 by symmetry). **But the h_r for r > N are NOT zero** — unlike the e_r —
  they are nonzero polynomials in h₁,…,h_N. So the e ↔ h symmetry that makes ω an involution on Λ
  is *not* a symmetry of the finite-variable picture, and ω on Λ_N must be defined by
  ω(e_r) = h_r for 1 ≤ r ≤ N and *checked* to be an involution via (2.6′).
- **Cheap corollaries available at essentially no cost:** the Jacobi–Trudi determinants
  Macdonald (2.9)/(2.9′) det(h_{λ_i−i+j}) = det(e_{λ'_i−i+j}); Macdonald (2.14)/(2.14′)
  h_n = Σ_{|λ|=n} z_λ^{−1}p_λ, e_n = Σ_{|λ|=n} ε_λ z_λ^{−1}p_λ with z_λ = ∏_i i^{m_i}m_i!
  (**rational coefficients — a Q-statement, not a Z-statement**).

### 2.7 The resultant and the Sylvester matrix — exact hypotheses

**The authoritative statement obtained (Knapp, *Advanced Algebra*, Theorem 8.1, S12).** Let A be a
**unique factorization domain**. For f(X) = Σ_{i=0}^{m} f_iX^i and g(X) = Σ_{j=0}^{n} g_jX^j in
A[X], both nonzero, with **m > 0 and n > 0 and at least one of f_m and g_n nonzero**, let R(f,g)
be the (m+n)×(m+n) matrix with n rows of shifted f-coefficients above m rows of shifted
g-coefficients (Knapp writes the coefficients left-to-right in increasing degree), and let
R(f,g) = det R(f,g). Then the following are equivalent:

> (a) f and g have a common factor of degree > 0 in X;
> (b) af + bg = 0 for some nonzero a and b in A[X] with deg a < n and deg b < m;
> (c) R(f,g) = 0.

Moreover, **when R(f,g) ≠ 0 there exist unique a, b ∈ A[X] with deg a < n, deg b < m and
a(X)f(X) + b(X)g(X) = R(f,g)**; both are nonzero if f and g are nonconstant.

**Knapp's own remark on the hypotheses is exactly what the commission asked for:** "The theorem
says that af + bg = R(f,g) holds in every case for which at least one of the coefficients f_m and
g_n is nonzero. **Sometimes the theorem appears in texts with the assumption that both coefficients
are nonzero.**" So the degree-vs-formal-degree question is a real convention flashpoint, and Knapp
is the source that resolves it. Note also that Knapp does **not** state the criterion in terms of
"a common root in a splitting field" — he states it in terms of **a common factor of positive
degree in A[X]**, which is the ring-correct form.

**The passage to "common root in a splitting field", with its hypotheses.** For A = K a **field**,
"f and g have a common factor of positive degree in K[X]" ⟺ "f and g have a common root in some
extension of K" ⟺ "f and g have a common root in a splitting field of fg (equivalently in K̄)".
The ⟸ direction needs only that a common root α gives the common factor min_K(α); the ⟹ direction
needs the existence of a splitting field for the common factor. **Artin Proposition 15.6.4(e) is
the exact statement of this bridge, and it is the one the library should cite:** "If f and g have a
common root in K, they are not relatively prime in F[x]. If f and g are not relatively prime in
F[x], there exists an extension field in which they have a common root." Artin 15.6.4(d) supplies
the base-change stability of the gcd, which is what makes "common root in *some* extension" a
well-posed condition. *So the chain of dependencies for the exact-hypotheses statement is:
Knapp 8.1 (over a UFD) + Artin 15.6.4(d)(e) (over a field) + existence of splitting fields.*

**Milne's root formula, and why it is a different theorem.** Milne's appendix (S1) *defines*
Res(f,g) = a^m b^n ∏_{i,j}(α_i − β_j) where f = a∏(X−α_i), g = b∏(X−β_j) **in a splitting field
of fg, with ab ≠ 0** — i.e. Milne's definition presupposes that f and g have exact degrees n and
m and that a splitting field is at hand. **Milne never writes down the Sylvester matrix.** The
equality of the two definitions is a genuine theorem (Milne does not prove it; nor does any
harvested source) — see PART 5 gap 3. Milne's usable properties, all proved:
4.35(a) Res(f,g) = (−1)^{mn}Res(g,f); 4.35(b) Res(f,g) = a^m ∏_i g(α_i);
4.35(c) if g ≡ g₁ mod f with deg g₁ = m₁ then Res(f,g) = a^{m−m₁}Res(f,g₁) — the last is what
makes a Euclidean-algorithm computation possible.

**Cross-checks.** S18 (Cornell) states the same equivalence over a **UFD** for f, g of positive
degree. S17 (PDMI) states "f and g have a common zero iff res(f,g) = 0" over R[x] without saying
where the zero lives and without the leading-coefficient hypothesis — **it is wrong as literally
written** (take f = g = 1 + 0·x with formal degrees declared positive, or f with f_m = g_n = 0)
and must not be followed.

### 2.8 The discriminant

**Definition (two conventions, both harvested).**
- *Root form:* Δ(f) = ∏_{1≤i<j≤n}(α_i − α_j), D(f) = Δ(f)² = ∏_{i<j}(α_i − α_j)²
  (Milne p. 47; Conrad `galoisaspermgp` Def. 4.1 writes ∏_{i<j}(r_j − r_i)² — same D, opposite
  ordering inside Δ).
- *Universal-polynomial form:* D(u) = ∏_{i<j}(u_i − u_j)² is a **symmetric polynomial with integer
  coefficients** (Artin 16.2.1), hence by the fundamental theorem D(u) = Δ(s) for a **unique**
  integer polynomial Δ(z) (Artin 16.2.2); and then for a general monic
  f = xⁿ − a₁x^{n−1} + ⋯ ± a_n over **any ring**, disc f := Δ(a₁,…,a_n), *whether or not f
  splits*. **Artin's is the definition the library should adopt** — it is the only one that makes
  the discriminant defined without a splitting field, and it is a direct application of the page's
  own main theorem.

**Facts.**
- Δ(f) depends on the numbering of the roots; **D(f) does not** (Milne, after 4.1).
- D(a) = 0 ⟺ two of the a_i coincide, for elements of a **field** (Artin 16.2.1, second bullet);
  equivalently D(f) ≠ 0 ⟺ f is separable (Milne p. 47).
- **Milne 4.36:** for monic f of degree n, D(f) = (−1)^{n(n−1)/2} Res(f, f′) = (−1)^{n(n−1)/2}
  Res(f′, f). *(Note: the second equality is not the sign rule 4.35(a) applied blindly — Milne
  states both, and 4.35(a) with m = n−1 gives (−1)^{n(n−1)}= +1, consistent.)*
  **Hypothesis:** f monic, over a field, with a splitting field available (Milne's Res is defined
  by roots).
- **Milne 5.49:** disc f = (−1)^{m(m−1)/2} Nm_{F[α]/F} f′(α) — a norm formula, needs the norm.
- **The cubic, in every source.** Artin 16.2.5: for x³ − s₁x² + s₂x − s₃,
  D = −4s₁³s₃ + s₁²s₂² + 18s₁s₂s₃ − 4s₂³ − 27s₃². Milne (via PARI, p. 47): for X³+aX²+bX+c,
  D = −4ca³ + b²a² + 18cba − 4b³ − 27c². **These agree** under a↦−s₁, b↦s₂, c↦−s₃. For the
  depressed cubic x³ + px + q: **Δ = −4p³ − 27q²** (Artin 16.2.8, Milne p. 47, Conrad Ex. 4.3).
  Reduction to the depressed form is the **Tschirnhausen substitution x = y + s₁/3, which requires
  char ≠ 3** (Artin 16.2.6). Artin's own aside — "Unfortunately, D and Δ are very complicated when
  n is larger. I don't know what they are when n > 3" — plus Milne's note that the quintic
  discriminant "has 59 terms", is the honest reason the page stops at the cubic.
- **Weighted degree (Artin, after 16.2.8):** assign weight i to z_i; then if g(u) is symmetric of
  degree d and g(u) = G(s), G has **weighted degree d**. A cheap, checkable grading lemma, and the
  right way to bound the shape of Δ(z) before computing it (Artin uses exactly this to say Δ for
  the cubic is an integer combination of the seven weighted-degree-6 monomials in z₁,z₂,z₃).
- **Characteristic 2.** Milne Aside 4.4: "When F has characteristic 2, the discriminant is always
  a square, and so it is not useful for deciding whether G_f is contained in A_n. Instead, we must
  use the **Berlekamp discriminant**", the solution of δ² + δ = D. Conrad `galoisaspermgp`
  Remark 4.8 says the criterion is "completely false" in char 2. See PART 4.

### 2.9 The passage the Galois block actually consumes

Three statements of increasing strength, all harvested:

- **(G1) Artin Corollary 16.1.12.** "Suppose that a polynomial f(x) = xⁿ − a₁x^{n−1} + ⋯ ± a_n has
  coefficients in a field F, and that it splits completely in an extension field K, with roots
  α₁,…,α_n. Let g(u₁,…,u_n) be a symmetric polynomial in u₁,…,u_n with coefficients in F. Then
  g(α₁,…,α_n) is an element of F." Proof: g = G(s) and s_i(α) = a_i (Artin 16.1.5), so
  g(α) = G(a₁,…,a_n) ∈ F. **This is one line once the fundamental theorem is available, and it is
  exactly what makes the discriminant lie in the base field.**
- **(G2) Milne, the paragraph after 5.37.** The same over a **ring**: for
  f = Xⁿ + a₁X^{n−1} + ⋯ + a_n ∈ R[X] splitting over a ring S ⊇ R, "the elementary symmetric
  polynomials in the roots of f(X) lie in R, and so the theorem shows that **every symmetric
  polynomial in the roots of f(X) lies in R**. For example, the discriminant D(f) = ∏_{i<j}
  (α_i−α_j)² of f lies in R." *Hypotheses: R a commutative ring, S a commutative ring containing R
  over which f splits. No field, no separability, no characteristic condition.*
- **(G3) Milne Theorem 5.38 (Symmetric functions theorem) + 5.39 + 5.40.** For a **field** F, the
  field of S_n-invariants in F(X₁,…,X_n) is F(e₁,…,e_n). Proof: write a symmetric f = g/h, set
  H = ∏_{σ∈S_n} σh; then H and Hf are symmetric polynomials, so both lie in F[e₁,…,e_n] by 5.36,
  and f = Hf/H ∈ F(e₁,…,e_n). **This is the rational-function upgrade and it needs a field** (one
  divides). Then 5.39: F(X₁,…,X_n)/F(e₁,…,e_n) is Galois with group S_n; and 5.40: the general
  polynomial of degree n has Galois group S_n, proved by showing t_i ↦ e_i is injective — which is
  the uniqueness half of 2.3, reused verbatim.
- **Conrad Corollary 3.3 and Remark 3.4** are the cheap consequences worth carrying: if
  f ∈ K[T] splits as ∏(T−α_i) in L[T], then ∏(T − α_i^r) ∈ K[T] for every r ≥ 1, and more
  generally ∏(T − h(α_i)) ∈ K[T] for every h ∈ K[X].
- **Conrad Example 4.4** is the Z-version and a nice `ex-` item: α = (−5+√17)/2, β = (−5−√17)/2
  have α+β = −5, αβ = 2 ∈ Z, so **every** symmetric integer polynomial in α, β is an integer;
  hence p₂ = 21, p₃ = −95, p₄ = 433, and Conrad observes p_r is the nearest integer to β^r.

### 2.10 Schur polynomials and the other bases — the optional material, costed

Harvestable cheaply from Macdonald I.3 and Grinberg §7.3 / Grinberg–Reiner §2.2. **Cost
assessment:** Schur polynomials require partitions, Young diagrams, semistandard tableaux, and
either the bialternant definition s_λ = det(x_i^{λ_j+n−j})/det(x_i^{n−j}) (needs the Vandermonde
determinant and that Λ_n is a domain) or the tableau definition (needs a proof of symmetry, which
is the Bender–Knuth involution, Grinberg §7.3.4). **Recommendation: the four bases m_λ, e_λ, h_λ,
p_λ (the last only over Q) are cheap and belong on this page; Schur polynomials are a page of their
own and should be `deferred` with the reason recorded, not squeezed in.** The one Schur fact that
*is* cheap and worth a remark is that the same determinant that defines s_λ, at λ = ∅, is the
Vandermonde — which ties directly to the discriminant (PART 4 item 8).

# PAGE B — ALGEBRAIC EXTENSIONS, DEGREE, FINITE FIELDS

### 2.11 Degree and the tower law — and exactly how careful sources state it

**Definition.** [K:F] := dim_F K (Artin 15.3.1; Knapp Def. 9.7.1 / Stacks 09G3; Clark §3.1). K/F
is **finite** if [K:F] < ∞.

**Clark's warning, worth reproducing on the page:** "The term 'finite field extension' is
ambiguous: it could presumably also refer to an extension of fields L/K in which L and K are both
finite fields. In practice, one should expect the term to have the former meaning."

**The tower law, in four sources with four different levels of care:**

| source | statement | infinite case |
|---|---|---|
| **Clark Thm 3.1 + Remark 3.1** | [M:F] = [M:K][K:F] | **explicitly an identity of cardinals**: "In general the degree [L:K] of a field extension is a cardinal number, and the statement of Theorem 3.1 is to be interpreted as an identity of (possibly infinite) cardinals." Proof produces the basis {a_i b_j} indexed by I × J and concludes #(I×J) = #I · #J |
| **Knapp Thm 9.6 + Cor 9.7** | "[K:k] = n and [L:K] = m, **finite or infinite**. … the mn products ω_iξ_j form a basis of L over k", then [L:k] = [L:K][K:k] "immediate by counting basis elements" | handled by producing the basis; the arithmetic "mn" is cardinal multiplication, though Knapp does not use the word |
| **Artin Thm 15.3.5** | [L:F] = [L:K][K:F], "therefore both [L:K] and [K:F] divide [L:F]" | one sentence: "The reasoning in case one of the degrees is infinite is similar." **Least careful of the four** |
| **Stacks 09G9** | "Suppose given a tower of fields F/E/k. Then [F:k] = [F:E][E:k]" | **no clause at all**; the statement is bare |
| **Ash 3.1.9** | headed "The Degree is Multiplicative" | not checked for the infinite case |

**Recommendation:** state it Clark's way (cardinals), prove it Knapp's way (exhibit the basis
{ω_iξ_j} and prove spanning + independence), and record the divisibility corollary separately since
it needs finiteness. **The proof of linear independence is the only subtle step and both Clark and
Knapp do it in two moves: fix j and use K-independence of the ξ_j, then use k-independence of the
ω_i.**

Related, obtained: **Stacks 09G5** "Let K/E/F be a tower of algebraic field extensions. If K is
finite over F, then K is finite over E." **Stacks 0BU1** "A finite extension of fields is a
finitely generated field extension. **The converse is not true.**"

### 2.12 finite ⟹ algebraic (and the converse fails); f.g. algebraic ⟹ finite; the compositum

- **finite ⟹ algebraic.** Knapp Prop. 9.4; Clark Cor. 3.4; Artin 15.3.4(b). Clark's proof is the
  crisp one: if α ∈ L is transcendental then [K(α):K] ≥ [K[α]:K] = [K[t]:K] = ℵ₀, and the tower law
  forces [L:K] ≥ ℵ₀.
- **The converse fails.** Clark, immediately after Cor. 3.4: "The converse does not hold: many
  fields admit infinite algebraic extensions. … it is easy to see that the extension
  Q[⋃_{n≥2} 2^{1/n}] is an infinite algebraic extension, since it contains subextensions of
  arbitrarily large finite degree." Q̄/Q and F̄_p/F_p are the other two standard witnesses (see
  PART 4 item 1).
- **α algebraic ⟺ [F(α):F] < ∞, and then F[α] = F(α).** Knapp Thm 9.2, Cor. 9.3, Cor. 9.5;
  Clark Thm 3.3(a)(b)(c) — Clark's (c) also records the transcendental case
  K[t] ≅ K[α] ⊊ K(α) ≅ K(t), with the memorable consequence "there is no genuinely algebraic
  distinction to be made between 'fields of numbers' and 'fields of functions'."
- **finitely generated by algebraic elements ⟹ finite.** **Knapp Theorem 9.8:** "If K/k is a field
  extension and if x₁,…,x_n are members of K that are algebraic over k, then k(x₁,…,x_n) is a
  finite algebraic extension of k." Proof: x_i is algebraic over k(x₁,…,x_{i−1}); apply Cor. 9.7
  repeatedly; then Prop. 9.4.
- **The compositum.** Clark §3.4 is the organizing frame: a class C of extensions is
  **distinguished** if (DC1) for a tower M/K/F, M/F ∈ C ⟺ M/K ∈ C and K/F ∈ C, and (DC2) base
  change: K/F ∈ C and L/F any extension with K, L in a common field ⟹ LK/L ∈ C; and these imply
  (DC3) the compositum property K₁K₂/F ∈ C. **Clark leaves "the class of all finite degree
  extensions is distinguished" and "the class of all algebraic extensions is distinguished" as
  Exercise 3.6 — he does not prove them.** The library must prove them (they are short: for finite,
  [K₁K₂:F] ≤ [K₁:F][K₂:F] via Knapp 9.8; for algebraic, via 2.13 below), or cite elsewhere.
  **No harvested source proves the sharp compositum degree bound [KL:F] ≤ [K:F][L:F].** See PART 5.

### 2.13 The field of algebraic elements; transitivity of algebraicity

- **Knapp Corollary 9.9:** "If K/k is a field extension, then the elements of K that are algebraic
  over k form a field." Proof: for x, y algebraic, k(x,y) is a finite algebraic extension by
  Thm 9.8, and it contains x ± y, xy, x^{−1}.
- **Clark Proposition 3.5:** "The set Cl_L(K) [of elements of L algebraic over K] is a subfield."
  Clark then **generalises to integrality over a domain**, which is strictly more work but pays for
  itself: **Theorem 3.6** gives four equivalents for α integral over R (α integral; R[α] a finitely
  generated R-module; ∃ intermediate ring S ∋ α finitely generated as an R-module; ∃ a faithful
  R[α]-submodule M of T finitely generated over R), proved by the **determinant-trick /
  adjugate-matrix** argument; **Lemma 3.8** (module-finiteness is transitive); **Corollary 3.9
  (Transitivity of integrality)**; **Corollary 3.10** (the integral closure is a subring);
  **Proposition 3.12** (an integral extension of a field is a field).
- **Transitivity of algebraicity.** Ash gives it a named heading, **3.3.5 "Corollary (Transitivity
  of Algebraic Extensions)"**. Clark's Cor. 3.9 is the ring version; the field version is the
  special case. **Statement to use:** if L/K and K/F are algebraic, so is L/F. *Hypotheses: none
  beyond the three fields being nested; in particular no finiteness.* The proof needs the "finitely
  generated algebraic ⟹ finite" step (2.12) applied to the finitely many coefficients of a
  polynomial witnessing algebraicity over K.

### 2.14 Finite fields: existence, uniqueness, structure

**|F| is a prime power.** Clark, §3.1: F finite ⟹ F is finite-dimensional over its prime subfield
F_p, say of dimension d, so |F| = p^d. Artin 15.7.1; Conrad `finitefields` Thm 1.5;
Knapp Thm 9.14.

**The four facts, stated as Artin Theorem 15.7.3 states them** (this is the tightest single
statement obtained; p prime, q = p^r):

> (a) Let K be a field of order q. The elements of K are roots of the polynomial x^q − x.
> (b) The irreducible factors of x^q − x over the prime field F = F_p are the irreducible
>     polynomials in F[x] whose degrees divide r.
> (c) Let K be a field of order q. The multiplicative group K^× of nonzero elements of K is a
>     cyclic group of order q − 1.
> (d) There exists a field of order q, and all fields of order q are isomorphic.
> (e) A field of order p^r contains a subfield of order p^k if and only if k divides r.

Corroborating exact statements: **Conrad `finitefields`** splits (d) into Thm 2.2 (existence, via
"a field of prime power order p^n is a splitting field over F_p of x^{p^n} − x", Lem. 2.1) and
Thm 2.7 (uniqueness), and gives Thm 2.8 for (e) with the sharpening that the subfield of each
admissible order is **unique**. **Milne 4.20** packages existence + uniqueness + "Galois over F_p
with cyclic group generated by the Frobenius" in one proposition, and 4.21/4.22/4.23 give the
subfield lattice and the divisibility of x^{p^n}−x by irreducibles of degree d | n **exactly once**.
**Knapp Thm 9.14** is the existence-and-uniqueness statement; **Knapp Cor. 9.19** the containment
criterion. **Ash §6.4** covers the same ground (6.4.1–6.4.6) and adds **6.4.7 "The Explicit
Construction of a Finite Field"**.

**Proof strategies, and they differ — see PART 3 flashpoint 6.**
- *Via x^q − x (Artin, Conrad, Milne, Knapp).* (i) x^q − x has no repeated root because its
  derivative is qx^{q−1} − 1 = −1 in characteristic p (Artin Lemma 15.7.10(a)); (ii) the set of
  roots of x^q − x in any characteristic-p field is a **subfield**, because Frobenius is additive
  ((x+y)^q = x^q + y^q, Artin 15.7.10(b)) and multiplicative (Artin Lemma 15.7.11); (iii) so the
  splitting field of x^q − x over F_p *is* a field of order exactly q. Uniqueness: any field of
  order q is a splitting field of x^q − x over F_p, and splitting fields are unique up to
  isomorphism.
- *Via the multiplicative group first (the ordering used when K^× cyclic is proved first).* Artin
  proves (a) from Lagrange in K^× and (c) from the structure theorem for finite abelian groups plus
  "x^d − 1 has at most d roots in a field".

**K^× is cyclic — three proofs are available, at different prerequisite costs.**
- *Structure theorem for finite abelian groups* (Artin's proof of 15.7.3(c)): K^× ≅ H₁ ⊕ ⋯ ⊕ H_k
  with d₁|d₂|⋯|d_k; every element satisfies x^{d_k} = 1; x^{d_k} − 1 has ≤ d_k roots; so
  q−1 = d₁⋯d_k ≤ d_k, forcing k = 1.
- *Maximal-order lemma* (Conrad `finitefields` Lem. 1.6 with Appendix A: Thm A.1/A.2/Cor A.4 — in
  an abelian group, elements of orders n₁ and n₂ produce an element of order lcm(n₁,n₂)). **Cheaper
  than the structure theorem** and the one to prefer if the library lacks the structure theorem.
- *Counting elements of each order via Σ_{d|n} φ(d) = n* (Conrad `cyclicmodp` §2, Thms 2.1, 2.5,
  2.6).

**Everything rests on:** "a nonzero polynomial of degree d over a field has at most d roots" —
Conrad `cyclicmodp` **Theorem 1.1** states it for Z/(p) and it is the hypothesis that fails over a
ring with zero divisors (PART 4 item 2).

**Consequences worth scaffolding:** an irreducible of every degree exists over F_p (Artin 15.7.4,
Conrad Cor. 2.3, Conrad Thm 5.1 over F_q); every extension of finite fields is simple
(Milne 4.19); **Conrad `rootirred` Thm 6.1 (Gauss)** X^{p^n} − X = ∏_{d|n} ∏_{deg π = d} π(X) and
hence p^n = Σ_{d|n} d·N_p(d). **The Möbius closed form N_q(n) = (1/n)Σ_{d|n}μ(d)q^{n/d} is proved
in NO harvested source** — Conrad writes "which we omit". Same gap as the sibling Galois harvest.

### 2.15 Primitive roots modulo p — the case q = p

**Statement.** (Z/pZ)^× is cyclic for every prime p; a generator is a **primitive root mod p**.
This is the q = p case of 2.14(c), but Conrad's dedicated blurb `cyclicmodp` (S5) gives **nine
independent proofs**, with these section headings:

```
1. Introduction
2. First Proof: Counting Elements of all Orders
3. Second Proof: One Subgroup per Size
4. Third Proof: Bounding with the Maximal Order
5. Fourth proof: Induction and Homomorphisms, I
6. Fifth proof: Induction and Homomorphisms, II
7. Sixth Proof: Elements of Prime-Power Order
8. Seventh proof: Subgroups of Prime-Power Order
9. Eighth Proof: Cyclotomic Polynomials
```

Named results: **Theorem 1.1** (a nonconstant f over Z/(p) of degree d has at most d roots) ·
**Theorem 2.1** (if N_p(d) > 0 then N_p(d) = φ(d), where N_p(d) counts elements of order d) ·
**Theorem 2.5** (Σ_{d|n} φ(d) = n) · **Theorem 2.6 / 3.5 / 4.1 / 6.3 / 7.6 / 8.3** (each proof's
conclusion: (Z/(p))^× is cyclic) · **Lemma 3.1** (in a finite abelian group, every element's order
divides the maximal order) · **Theorem 3.3** (a finite abelian group with at most one subgroup per
size is cyclic) · **Theorem 5.1** (every subgroup of (Z/(p))^× is cyclic) · **Lemma 7.1**,
**Lemma 7.3** (existence of elements of order q and q^e for q^e | p−1) · **Theorem 8.1**.

*Scaffolding note:* the library should prove it **once**, in the F_q generality (2.14(c)), and let
primitive roots mod p be a corollary — the nine proofs are a source of `ex-` items and alternative
routes, not nine items.

### 2.16 Straightedge and compass — the algebraic core, and what the geometry costs

**This is the part the commission asked me to report on honestly. Here is the honest report.**

**The algebraic core, which costs nothing beyond 2.11–2.12:**

> If α is constructible then α is algebraic over Q and **[Q(α):Q] is a power of 2**
> (Milne Cor. 1.38; Artin Cor. 15.5.7; Clark §3.2; Knapp Thm 9.24).

and its sharp form,

> α is constructible ⟺ α lies in a subfield of **R** of the form Q(√a₁,…,√a_r) with
> a_i ∈ Q(√a₁,…,√a_{i−1}) and a_i > 0 (Milne Thm 1.37(b); Knapp Thm 9.24; Artin Thms 15.5.6 and
> 15.5.10 as a matched pair).

**What the geometric formalisation actually costs.** Every source pays the same three prices:

1. **It needs R (or at least an ordered field in which positive elements have square roots).**
   Every statement above is *about subfields of R*. Milne: "Let F be a subfield of **R**. For a
   positive a ∈ F, √a denotes the positive square root of a **in R**. The F-plane is
   F × F ⊂ R × R." Artin 15.5.5(b) says intersections lie "in F, or in a **real** quadratic field
   extension F′ of F", and adds "If D is negative, there is no real solution to the equations. Then
   the line and circle do not intersect." Knapp 9.24 is stated for "a subfield of **R**" with
   "a₀,…,a_{n−1} all ≥ 0". **The positivity/ordering is not decoration: the converse direction
   (Artin 15.5.10, Milne 1.37(b) ⟸, Knapp 9.24 converse) is false without it**, since a
   degree-2^k extension of Q need not be real and need not be constructible.
2. **It needs a definition of "constructible" as a closure under an explicitly listed set of
   geometric operations**, and this is *stipulated*, not derived. Artin 15.5.1 lists three rules;
   Milne lists two bullet points; Knapp lists four allowable constructions; Clark describes the
   compass and straightedge in prose. **These four rule-sets are not literally identical** (Knapp
   allows "the line through a given point different from finitely many other lines through that
   point", a genericity clause the others omit), though they generate the same field.
3. **It needs the coordinate translation, i.e. the little analytic-geometry lemma.** This is
   Milne **Lemma 1.35** (L∩L′ is empty or a single F-point; L∩C and C∩C′ are empty or one or two
   points in the F[√e]-plane for some e ∈ F, e > 0) and Artin **Proposition 15.5.5**. Both are
   proved by writing the equations down and solving; Artin adds the essential observation that
   **two circles subtract to a linear equation** ("whereas a pair of conics may intersect in four
   points, two circles intersect in at most two points"), so circle∩circle costs one quadratic, not
   a quartic.
   **And the reverse direction — that the field operations and square roots are geometrically
   realisable — is where the sources get soft.** Milne Lemma 1.36 is labelled "**Sketch of proof**"
   and defers: "(For more details, see Michael Artin, Algebra, 1991, Chap. 13, Section 4.)"
   Artin 15.5.11 proves it with **similar triangles and the inscribed-right-triangle theorem**,
   citing "a theorem of high school geometry". Knapp does the same with Figures 9.1 and 9.2.
   Clark makes it **Exercise 3.5** and proves nothing.

**Verdict for the scaffolder.** The impossibility results are stated in a purely algebraic form and
are cheap *once* the library grants a definition of "constructible number" as
`α ∈ R lies in a tower of real quadratic extensions of Q`. Under that definition:

- **Doubling the cube is impossible**: [Q(∛2):Q] = 3 is not a power of 2 (Milne 1.39, Clark, Knapp).
- **Trisecting a general angle is impossible**: from cos 3θ = 4cos³θ − 3cos θ with 3θ = 60°,
  cos 20° is a root of 8x³ − 6x − 1 (Milne 1.40) — equivalently 2cos 20° is a root of x³ − 3x − 1
  (Artin 15.5.8) — irreducible over Q, so the degree is 3.
- **Squaring the circle is impossible**: needs √π, and π is transcendental — **which no source
  here proves in place**. Milne cites a footnote; Knapp defers to his §IX.14; Clark says "π is not
  even algebraic!". **This one is not cheap** and must be `deferred` with the reason recorded.
- **Regular n-gon**: Artin Cor. 15.5.9 gives the easy half for primes (constructible ⟹ p = 2^r+1);
  the full Gauss theorem (Knapp Thm 9.25; Milne 5.12) needs cyclotomic extensions and the Galois
  correspondence — **it belongs to the Galois block, not to page B**.

**If the library will not accept a geometric definition**, the honest move is to define the field
of constructible numbers *algebraically* (the smallest subfield of R closed under positive square
roots — Artin 15.5.11 and Knapp Thm 9.24's direct half are literally that characterisation), prove
the degree obstruction, and record in a Remark that the identification with straightedge-and-compass
constructibility is a geometric translation (Milne 1.35/1.36, Artin 15.5.5, Knapp §IX.5) which the
library does not develop. **This is honest, costs nothing, and every result above survives it**
except the sentence "therefore the Greeks' problems have no solution", which becomes conditional.

---

## PART 3 — Convention disagreements, named, with the sources on each side

| # | Flashpoint | Position A | Position B | Notes / what the library must decide |
|---|---|---|---|---|
| 1 | **The NAME of the elementary symmetric polynomials** | `e_r` — **Macdonald** §2, **Grinberg** 7.1, **Grinberg–Reiner** 2.1, and essentially all of modern combinatorics | `s_k` — **Conrad** §1, **Artin** 16.1 | **and Milne uses `p_i` for them** (Milne p. 78: "These particular polynomials are called the elementary symmetric polynomials", after defining p₁,…,p_n). **This is the single most dangerous collision in the harvest**: `p_r` is the universal notation for the *power sums* in Macdonald, Grinberg, Grinberg–Reiner and Conrad. A scaffolder reading Milne 5.36 and Macdonald (2.11) in the same session will silently conflate the elementary symmetric polynomials with the power sums. **Recommendation: adopt `e_r`, `h_r`, `p_r`, `m_λ` (the Macdonald/Grinberg convention), and add an explicit Remark that Milne's FT writes `p_i` for `e_i`.** `s_k` also collides with the Schur polynomial `s_λ`. |
| 2 | **Are the signs absorbed into the coefficients?** | **No** — the identity is ∏(T−X_i) = Tⁿ − e₁T^{n−1} + e₂T^{n−2} − ⋯ + (−1)ⁿe_n, and a polynomial is written f = Xⁿ + a₁X^{n−1} + ⋯ + a_n with a_i = (−1)^i e_i(roots): **Milne** (p. 79: a₁ = −p₁(α), a₂ = p₂(α), …, a_n = (−1)ⁿp_n(α)), **Conrad** (1.1), **Macdonald** (2.2) | **Yes, by renaming the coefficients** — **Artin 16.1.3** *changes the convention for the whole chapter*: "The order of the indices in (16.1.2) is the reverse of the one we have used for the coefficients of a polynomial previously, and the signs alternate. Because of the way these indices and signs appear, we will label undetermined coefficients of a polynomial in the analogous form in this chapter: f(x) = xⁿ − a₁x^{n−1} + a₂x^{n−2} − ⋯ ± a_n", so that **a_i = s_i(roots)** with no sign (Lemma 16.1.5) | Nobody absorbs the sign into the *definition of e_i itself*; the disagreement is entirely about how the polynomial's coefficients are named. **Artin's convention makes every formula sign-free but is incompatible with the rest of the library, which will write f = Xⁿ + a₁X^{n−1} + ⋯.** Decide once; the discriminant formulas in 2.8 differ by these substitutions and a mismatched quotation of Artin 16.2.5 would be a false statement. |
| 3 | **Which order on monomials?** | **pure lexicographic** — Conrad Def. 2.1, and Gauss originally (Conrad §5 reproduces Gauss's Latin) | **graded lexicographic** (total degree first, lex to break ties) — **Milne 5.36** | Not a cosmetic choice: under pure lex, N^n is well-ordered but has **infinitely many elements below some elements**, so the induction is well-founded induction, not ordinary induction (Conrad Remark 3.2 states this explicitly and gives (0,b) < (1,0) as the witness). Under graded lex the set below any monomial is finite. **Conrad Remark 3.2 recommends graded lex if you want ordinary induction; Cox–Little–O'Shea (Conrad's ref [3]) does it that way.** |
| 4 | **Uniqueness: theorem, remark, or built-in?** | separate **theorem** with a real proof: **Conrad Thm 4.1**. Or a **remark** with a compressed proof: **Milne 5.37(b)** | built into the statement as *algebraic independence* / *basis*: **Macdonald (2.4)**, **Grinberg 7.1.15**, **Grinberg–Reiner 2.2.10**. Or **asserted with no proof: Artin**, "One can show that G is uniquely determined by going over this proof" | The library must prove uniqueness, not inherit Artin's sentence. **Artin 16.1.6 asserts uniqueness in the theorem statement and does not prove it — a Statement asserting more than the proof gives, in the library's own terminology.** |
| 5 | **The characteristic hypothesis for "power sums generate"** | stated as **Q ⊆ K** (K a commutative Q-algebra): **Grinberg 7.1.15(c)**, **Grinberg–Reiner Prop. 2.4.1** and Remark 2.3.9(e)(f), **Macdonald (2.12)** (over Q) | stated as **char 0 or char > n**: **no harvested source** | Every source obtained takes the safe hypothesis. The sharper one is true and provable from Newton (268) alone, but **must be proved locally, not cited**. See PART 5 gap 1. |
| 6 | **Newton's identities: one identity or two cases?** | **one** identity for all k, with e_m := 0 for m > N: **Grinberg Thm 7.1.12 (268)**; **Macdonald (2.11′)** likewise, in Λ | **two** cases k ≤ n and k > n: the classical textbook presentation; **no harvested source writes it this way** | The two-case split is bookkeeping, not mathematics. If the library states two cases it must also state that they are the single identity Σ_{j}(−1)^{j−1}e_{n−j}p_j = n e_n under the convention e_m = 0 for m > N — otherwise a reader will think there are two theorems. |
| 7 | **Discriminant of a non-monic polynomial** | disc f = ∏_{i<j}(r_j−r_i)² **with the leading coefficient c appearing in the factorization but NOT in the discriminant**: **Conrad `galoisaspermgp` Def. 4.1** ("for a nonconstant f(T) ∈ K[T] of degree n that factors over a splitting field as f(T) = c(T−r₁)⋯(T−r_n), the discriminant of f(T) is defined to be ∏_{i<j}(r_j−r_i)²") | the resultant normalisation disc f = (−1)^{n(n−1)/2}Res(f,f′)/a_n, which for non-monic f differs from Conrad's by a factor a_n^{2n−2} | **Milne 4.36 and Artin 16.2 both restrict to MONIC f, where the two agree.** Simplest safe rule for the library: **define disc only for monic polynomials** (Artin's Δ(a₁,…,a_n) route), and record the non-monic conventions as a Remark. Any statement mixing them is a false statement. |
| 8 | **Sign of Δ, and of the resultant** | Δ(f) = ∏_{i<j}(α_i−α_j): **Milne** p. 47 | Δ = ∏_{i<j}(r_j−r_i): **Conrad** Def. 4.1 | These differ by (−1)^{n(n−1)/2}; **only D = Δ² is intrinsic** (Milne says so explicitly: "While Δ(f) depends on the choice of the numbering of the roots, D(f) does not"). Resultant: Milne 4.35(a) Res(f,g) = (−1)^{mn}Res(g,f), so the *order of the arguments* is a live convention too; Milne 4.36 states D(f) = (−1)^{n(n−1)/2}Res(f,f′) **and** = (−1)^{n(n−1)/2}Res(f′,f), which is consistent only because mn = n(n−1) is even. |
| 9 | **What "the resultant" IS** | a **determinant** of the Sylvester matrix, over a **UFD**, characterised by "common factor of positive degree": **Knapp Adv. Alg. Thm 8.1**, **S18** | a **product over root differences** a^m b^n∏(α_i−β_j), over a **field with a splitting field**: **Milne**, appendix to Ch. 4 | **Milne never writes the Sylvester matrix; Knapp never writes the root product.** They are equal, but **no harvested source proves it** (PART 5 gap 3). Also note Knapp's own remark that some texts require **both** leading coefficients nonzero where he requires only one — a hypothesis difference with a concrete counterexample (PART 4 item 11). |
| 10 | **Where does "disc f lies in the base field" come from?** | from the **symmetric-function theorem**, no Galois theory: **Artin Cor. 16.1.12**, **Milne** after 5.37 (over a ring) | from **Galois theory**: **Conrad `galoisaspermgp`** — "disc f is a symmetric polynomial in the r_i's, so it is fixed by Gal(K(r₁,…,r_n)/K) and therefore disc f ∈ K **by Galois theory**" | A pure dependency-order question, and it decides where the page sits. Artin's/Milne's route makes `symmetric-polynomials` a **prerequisite** of the Galois block with no back-edge; Conrad's route would make it a consequence. **Conrad's own footnote 1 in `symmfunction` settles it: modern Galois theory does not need the symmetric-function theorem, so the acyclic choice is Artin's/Milne's, and it also works over a ring where Galois theory does not apply.** |
| 11 | **"finite extension"** | [K:F] < ∞: everyone | K and F both finite fields: a real reading in the wild | **Clark §3.1 warns about it explicitly.** Worth a sentence on page B, which discusses both meanings within two sections of each other. |
| 12 | **Is the tower law stated for infinite degrees?** | **yes, as cardinals**: **Clark Thm 3.1 + Remark 3.1**; **Knapp Thm 9.6** ("finite or infinite", basis produced) | **not addressed**: **Stacks 09G9** (bare statement); **Artin 15.3.5** ("The reasoning in case one of the degrees is infinite is similar") | The library should state and prove the cardinal version — Knapp's proof gives it for free — and derive the finite corollary with the divisibility clause. |
| 13 | **Finite fields: which proof of existence?** | via the **splitting field of x^q − x** (and the Frobenius-fixed-set argument): **Artin 15.7.10/15.7.11**, **Conrad Lem. 2.1/Thm 2.2**, **Knapp Thm 9.14**, **Milne 4.20** | via the **multiplicative group first** (Lagrange in K^×, then structure theorem): **Artin's proof of 15.7.3(a)(c)** | Nobody proves *existence* from the multiplicative group — that route only gives (a) and (c) for an already-existing field. **The x^q − x route is the only existence proof in the harvest and it needs: derivative criterion for repeated roots, Frobenius additivity, and existence of splitting fields.** The multiplicative-group route additionally needs either the structure theorem for finite abelian groups (Artin) or the maximal-order lemma (Conrad `finitefields` A.1/A.2 — **cheaper, prefer it**). |
| 14 | **Constructibility: geometric or algebraic definition?** | **geometric**, with the rules stipulated and a translation lemma: **Artin 15.5.1 + 15.5.5**, **Milne** (two bullets + Lemma 1.35), **Knapp §IX.5** (four allowable constructions) | **algebraic**, C = the smallest subfield of R closed under positive square roots: this is what **Artin 15.5.11 / Knapp Thm 9.24 direct half** actually characterise | The four rule-sets are not literally identical (Knapp inserts a genericity clause the others omit), and **Milne's Lemma 1.36 is only a "Sketch of proof", Clark's is Exercise 3.5**. See 2.16. |

---

## PART 4 — Hypothesis-sensitivity and counterexample seeds

Places where a commonly quoted statement becomes **false** if a hypothesis is dropped. Each is a
candidate `ex-` item. Witnesses marked **[mine]** are my own constructions, checked by hand, not
quotations from a harvested source — the scaffolder must re-verify them before authoring.

1. **An algebraic extension that is not finite.** Three witnesses, in increasing cost:
   (a) **Clark, after Cor. 3.4:** Q[⋃_{n≥2} 2^{1/n}] "is an infinite algebraic extension, since it
   contains subextensions of arbitrarily large finite degree" — the *cheapest*, because it needs
   only that X^n − 2 is Eisenstein.
   (b) **Q̄/Q**, the field of all algebraic numbers (Knapp Cor. 9.9 constructs it; Clark
   Exercise 3.2 shows it is countable).
   (c) **F̄_p/F_p** — **Milne 4.24** constructs it as an explicit union and **Milne 4.23** shows
   its subfield lattice is (Z_{≥1}, |), so it contains subfields of every finite degree.
   **This kills "algebraic ⟹ finite" and shows the converse of Knapp Prop. 9.4 / Clark Cor. 3.4 is
   strictly one-directional.**
2. **"A finite subgroup of K^× is cyclic" needs a field (or a domain).** The proof rests on
   Conrad `cyclicmodp` **Theorem 1.1**, "a nonconstant polynomial of degree d over Z/(p) has at
   most d roots", which fails over a ring with zero divisors. **Witness:** in Z/8, X² − 1 has the
   four roots 1, 3, 5, 7, and (Z/8)^× ≅ Z/2 × Z/2 is **not cyclic** — a finite subgroup of the unit
   group of a commutative *ring* that is not cyclic.
3. **The multidegree product rule needs non-zero-divisor leading coefficients.**
   Conrad's footnote 4 flags it; **witness [mine]:** over R = Z/4, take f = g = 2X. Then
   mdeg f = mdeg g = 1 but fg = 4X² = 0, whose multidegree is undefined, so
   mdeg(fg) ≠ mdeg f + mdeg g. **The fundamental theorem nevertheless survives over Z/4 precisely
   because the e_i have leading coefficient 1.** This is the sharpest possible illustration of
   "what the ring version actually needs".
4. **The leading term of g(Y) is not the leading term of g(e).** Conrad's own witness, §4:
   g(Y₁,Y₂) = Y₁⁵ + Y₂⁵ has lex-leading term Y₁⁵, but g(e₁,e₂) = (X₁+X₂)⁵ + (X₁X₂)⁵ has leading
   term (X₁X₂)⁵, coming from the **non-leading** term Y₂⁵. This is exactly why the uniqueness proof
   needs the injectivity of i ↦ mdeg(e^i) and cannot just "track leading terms".
5. **"Power sums generate" fails in characteristic p ≤ n — the commission's own example, verified.**
   Take F = F₂, n = 2, variables x, y. Then p₁ = x + y = e₁ and
   p₂ = x² + y² = (x+y)² = e₁² (Frobenius). So **F₂[p₁,p₂] = F₂[e₁] ⊊ F₂[e₁,e₂]**, and
   **e₂ = xy is a symmetric polynomial over F₂ that is NOT a polynomial in the power sums.**
   *Why, via Newton:* the k = 2 instance of Grinberg (268) is p₂ − e₁p₁ + 2e₂ = 0, and in
   characteristic 2 the term 2e₂ vanishes, so the identity carries **no information about e₂**.
   More generally in characteristic p ≤ n the k = p instance loses its p·e_p term and e_p becomes
   unreachable. **[mine, from Grinberg (268); the F₂ computation is elementary and checkable.]**
   This is simultaneously the commission's "symmetric polynomial over F₂ showing a char-2
   subtlety" and its "failure of power sums generating".
6. **The p_λ are a Q-basis, never a Z-basis.** Macdonald (2.12): "they do not form a Z-basis of Λ:
   for example, h₂ = ½(p₁² + p₂) does not have integral coefficients when expressed in terms of the
   p_λ." A one-line, fully checkable witness.
7. **The Vandermonde: fixed by A_n, not by S_n — and what it is for.**
   Δ = ∏_{1≤i<j≤n}(x_i − x_j). **Milne Prop. 4.1(a):** σΔ = sign(σ)Δ; hence Δ is fixed by exactly
   A_n (when char ≠ 2) and D = Δ² is fixed by all of S_n (4.1(b)). **Its role:**
   (i) it is the smallest concrete non-symmetric polynomial with a full S_n-orbit description, so it
   is the natural `ex-` companion to "the symmetric polynomials are exactly F[e₁,…,e_n]";
   (ii) squaring it produces the discriminant, which *is* symmetric and therefore *is* a polynomial
   in the e_i (Artin 16.2.1–16.2.2);
   (iii) **Milne Cor. 4.2(b)**: for separable f over F with char F ≠ 2, the subfield of the
   splitting field fixed by A_n ∩ G_f is F[Δ(f)], whence G_f ⊆ A_n ⟺ D(f) is a square in F. That
   corollary is the entire reason the Galois block wants this page.
   **Caution:** the *ring-level* statement "F[x₁,…,x_n]^{A_n} = F[e₁,…,e_n] ⊕ Δ·F[e₁,…,e_n]" is
   **not** in any harvested source. Do not assert it without a source or a local proof.
8. **Characteristic 2 destroys the discriminant test, in two separate ways.**
   (a) In char 2, sign(σ) = 1 in F, so **Δ itself is symmetric**, hence Δ ∈ F and
   **D = Δ² is always a square** — Milne Aside 4.4: "When F has characteristic 2, the discriminant
   is always a square, and so it is not useful for deciding whether G_f is contained in A_n."
   (b) Conrad `galoisaspermgp` **Remark 4.8** gives the sharp witness: "Theorem 4.7 is completely
   false in characteristic 2 … For example, if F is a field of characteristic 2, then over F(u) the
   polynomial **T³ + uT + u** is separable and irreducible with **discriminant u² (a square)** and
   **Galois group S₃**."
   The replacement is Milne's Aside 4.4 **Berlekamp discriminant**, the solution of δ² + δ = D.
   Note also that the Tschirnhausen reduction to x³ + px + q needs **char ≠ 3** (Artin 16.2.6), so
   the "classical cubic formula" Δ = −4p³ − 27q² has *two* excluded characteristics for different
   reasons.
9. **The two cases of Newton's identity really are different — a checkable witness.** In N = 2
   variables, k = 3 > N: the identity has no 3e₃ term and reads p₃ = e₁p₂ − e₂p₁. Check:
   (x+y)(x²+y²) − xy(x+y) = x³ + xy² + x²y + y³ − x²y − xy² = x³ + y³ ✓. Contrast k = 2 ≤ N:
   p₂ − e₁p₁ + 2e₂ = 0, which **does** carry the 2e₂ term. **[mine]**
10. **The converse of "constructible ⟹ degree a power of 2" is FALSE.** Artin, right after
    Cor. 15.5.7: "The converse of this corollary is false. There exist real numbers of degree 4
    over Q that aren't constructible. Galois theory provides a way to understand this. (This is
    Exercise 9.17 of Chapter 16.)" **The page must not state the converse.** The correct converse is
    Artin Thm 15.5.10 / Knapp Thm 9.24, which requires a **tower of real quadratic extensions**,
    not merely 2-power degree.
11. **The resultant criterion needs a leading-coefficient hypothesis.** Knapp's Theorem 8.1
    requires "at least one of f_m and g_n nonzero" and he remarks that other texts require both.
    **Witness that the hypothesis cannot be dropped entirely [mine]:** declare m = n = 2 and take
    f(X) = 0·X² + 1·X + 0 = X, g(X) = 0·X² + 1·X + 1 = X + 1. The 4×4 Sylvester matrix has a zero
    last column, so R(f,g) = 0, yet f and g are coprime — (c) does not imply (a). So the resultant
    is a function of the *declared formal degrees*, not of f and g alone.
12. **`e_r = 0 for r > N` but `h_r ≠ 0 for r > N`.** Grinberg Prop. 7.1.11 with his own example:
    for N = 2, h₅ = x₁⁵ + x₁⁴x₂ + x₁³x₂² + x₁²x₂³ + x₁x₂⁴ + x₂⁵ ≠ 0 and p₅ = x₁⁵ + x₂⁵ ≠ 0, while
    e₃ = e₄ = e₅ = 0. Any "by symmetry between e and h" argument in finitely many variables is
    therefore suspect and must be checked (2.6).
13. **A finitely generated field extension that is not finite.** Stacks **0BU1**: "A finite
    extension of fields is a finitely generated field extension. **The converse is not true.**"
    Witness: k(t)/k is generated by one element but has infinite degree — the transcendental case of
    Clark Thm 3.3(c), K[t] ≅ K[α] ⊊ K(α) ≅ K(t).
14. **F₈ does not contain F₄** — Artin Example 15.7.5(ii), with the reason spelled out:
    "[F₈:F₂] = 3, [F₄:F₂] = 2, and 2 does not divide 3", visible in the factorisation
    x⁸ − x = x(x−1)(x³+x+1)(x³+x²+1), in which x²+x+1 does **not** appear. The crisp `ex-` item
    for the divisibility clause of Artin 15.7.3(e) / Conrad Thm 2.8 / Knapp Cor. 9.19.
15. **"All fields of order q are isomorphic" — but not canonically.** Milne's Warning 6.8 in the
    Galois-harvest range applies here too, and Artin says it in §15.7 directly: "all finite fields
    of order q are isomorphic, so this notation isn't too ambiguous, though **when r > 1 the
    isomorphism between two of them will not be unique**." The nonuniqueness is exactly
    Gal(F_q/F_p) ≅ Z/r (Conrad Thm 4.1, Milne 4.20).
16. **The gcd is insensitive to field extension — the hypothesis that makes "common root" a
    well-posed notion.** Artin 15.6.4(d); without it, "f and g have a common root" would depend on
    which extension you look in. The dependent statement 15.6.4(e) is what converts Knapp's
    ring-level resultant criterion into the root-level one (2.7).
17. **Positive worked examples to carry.** Conrad Example 3.1: X⁴+Y⁴+Z⁴ = e₁⁴ − 4e₁²e₂ + 2e₂² +
    4e₁e₃, with the full four-step algorithm and the decreasing multidegree chain
    (4,0,0) > (3,1,0) > (2,2,0) > (2,1,1). Artin Example 16.1.9/16.1.10: the orbit sum of u₁²u₂
    equals s₁s₂ − 3s₃, "valid when g is the orbit sum of u₁²u₂ in any number n ≥ 3 of variables".
    Milne Remark 5.37(a): (X₁+7X₁X₂+X₂)² = e₁² + 14e₁e₂ + 49e₂². Conrad Examples 3.7/3.8/4.4: the
    power sums of the roots of T²+5T+2 and of T³−T−1, computed with no radicals at all.

---

## PART 5 — Gaps in this harvest that the scaffolder should know about

1. **The sharp characteristic hypothesis for power sums.** Every source states "Q ⊆ K" or
   "char 0"; **none states "char 0 or char > n"**, which is what the commission asked for. The
   sharper statement follows from Grinberg (268) by solving for e_k, which needs 1,…,n invertible —
   a short honest inline proof. **Do not attribute it to Grinberg, Macdonald or Grinberg–Reiner.**
2. **No harvested source proves the compositum degree bound** [KL:F] ≤ [K:F][L:F], nor the
   equality [KL:F] = [K:F][L:F]/[K∩L:F] in the Galois case (that one is Milne 3.20, in the sibling
   Galois harvest, and it needs the Galois correspondence). Clark's framework (DC1)/(DC2)/(DC3)
   reduces the compositum to base change but leaves **"the class of finite extensions is
   distinguished" and "the class of algebraic extensions is distinguished" as Exercise 3.6, with no
   proof**. The library must prove them or drop the compositum from page B.
3. **Nobody proves that the Sylvester determinant equals the root product.** Knapp gives the
   determinant characterisation over a UFD (Thm 8.1); Milne defines Res by roots and proves 4.35;
   **the bridge Res_Sylvester(f,g) = a^m b^n ∏_{i,j}(α_i − β_j) is asserted by neither.** If the
   page wants both faces of the resultant it must prove the bridge (the standard argument
   specialises the universal case over Z[a_i, b_j] and compares degrees and leading coefficients —
   itself a nice application of the fundamental theorem of symmetric polynomials, which is a
   pleasing internal dependency, but it is real work).
4. **The Möbius closed form for the number of monic irreducibles of degree n over F_q** is proved
   in no harvested source. Conrad `rootirred` Thm 6.1 proves X^{p^n} − X = ∏_{d|n}∏_{deg π = d}π
   and the recursion p^n = Σ_{d|n} d·N_p(d), then writes "A formula for N_p(n) … can be derived
   from (6.1) using the Möbius inversion formula, which we omit." **Identical gap to the sibling
   Galois harvest §5 item 1.** If the library wants N_q(n) = (1/n)Σ_{d|n}μ(d)q^{n/d} it must supply
   Möbius inversion from a number-theory/combinatorics dependency or prove it inline.
5. **Transcendence of π is used but proved nowhere in range.** It is the only thing standing
   between page B and "squaring the circle is impossible". Knapp proves it in *Basic Algebra*
   §IX.14 (p. 515) — obtained, but a substantial development. Milne and Clark cite it. **Recommend
   `deferred` with the reason recorded, and state the squaring-the-circle result conditionally or
   omit it.**
6. **The A_n-invariant ring.** "F[x₁,…,x_n]^{A_n} = F[e₁,…,e_n] ⊕ Δ·F[e₁,…,e_n] for char ≠ 2" is
   **not in any harvested source**. Milne 4.2(b) gives only the *field* statement for the splitting
   field of a specific separable f. Do not assert the ring version.
7. **The general Newton-identity determinant formulas.** Conrad gives the 2×2, 3×3 and 4×4
   determinant expressions for p₂, p₃, p₄ but **states no general theorem**; Macdonald's (2.9)
   determinants are Jacobi–Trudi (h's and e's), a *different* family. The general
   p_n = det(banded matrix in e's) is not harvested.
8. **Dummit & Foote statements.** Only aggregated-search section titles were recovered (§1.14), and
   they must not be quoted as read. Everything the commission wanted from D&F is available in
   Knapp, Artin, Clark, Ash and Milne, all read in full.
9. **Lang IV §6 and IV §8 bodies.** TOC only. Conrad reports that Lang IV §6's proof is a double
   induction on n and degree — i.e. Artin's proof shape — so nothing is lost by using Artin.
   Lang IV §8 and IX §4 (Resultant systems) are replaced by Knapp *Advanced Algebra* VIII.2.
10. **Stanley EC2 Ch. 7 and Macdonald I.3–I.9** were not harvested beyond headings. If the page
    ever wants Schur polynomials, transition matrices, or the Littlewood–Richardson rule, Macdonald
    Ch. I and Grinberg Ch. 7.3 (both obtained in full text) are the sources — but see 2.10:
    **this is a separate page, not an add-on.**
11. **Artin's OCR.** The Artin PDF is an OCR of a scan and its displayed formulas are lightly
    corrupted (e.g. 16.2.5 reads "−4si S3 + sp2 + I8S1S2S3 − 4¾ − 27^3" before reconstruction).
    **Every Artin formula I quote in PART 2 has been reconstructed and cross-checked against Milne
    or Conrad, and I say so at the point of use; the scaffolder must not lift a formula from the
    Artin text file without the same cross-check.** Artin's *prose* and *theorem statements* came
    through cleanly and are safe.
12. **Macdonald's OCR** is likewise imperfect (subscripts and the ≤ / < distinction are the usual
    casualties; e.g. (2.3)'s "µ < λ" and "µ > λ" appear inconsistently in the extracted text —
    the correct statement is that the sum is over **µ < λ**, as Macdonald's own proof shows via
    α ≤ λ and (1.12)). Same rule: cross-check every Macdonald formula against Grinberg–Reiner or
    Grinberg, both of which are born-digital and extract cleanly.
13. **`e_0` and boundary conventions** are stated by Macdonald and Grinberg (e₀ = h₀ = 1,
    h_r = e_r = 0 for r < 0, e_r = 0 for r > N) but **not** by Conrad, Milne or Artin, whose
    statements are therefore ambiguous at the boundary. The page must fix the conventions in a
    Definition before any identity is stated, or several identities will be literally false at
    k = 0 and k > N.


