# subjects-01 — `measure-theory` source-corpus notes

Written by the measure-theory source-research subagent, 2026-08-13.
**This file has one writer.** Everything here was checked against a URL that was
actually fetched in-session; the HTTP status recorded is the status observed, not
a status assumed. PDFs were downloaded with `curl` and read locally with
`pypdf` (WebFetch cannot read PDFs).

Conventions for this file:

- **"pdfpage N"** means the zero-indexed page of the downloaded PDF file, which
  is what a re-checker should use to re-find a quote. **"p. N"** means the
  printed page number of the book/notes.
- Quotations are verbatim from the extracted text. PDF text extraction mangles
  some ligatures, math and spacing (`ﬀ`→`ﬀ`, `Egoroﬀ`, `Diﬀerentiation`,
  broken sub/superscripts). Where I have silently repaired such an artifact I
  say so inline; where a quote is a *paraphrase* it is explicitly marked
  `[paraphrase]`. Nothing here should be copied into an item without one more
  read of the source.
- **12 sources verified reachable.** Target was 8.

---

## SOURCES

### S1 — Tao, *An Introduction to Measure Theory*

- **URL:** `https://terrytao.files.wordpress.com/2012/12/gsm-126-tao5-measure-book.pdf`
  (301-redirects to `https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf`)
- **Status observed:** `200 application/pdf`, 1,338,765 bytes, 265 PDF pages.
- **Title:** *An Introduction to Measure Theory* (GSM 126)
- **Author:** Terence Tao · **Institution:** UCLA; published AMS
- **Kind:** `monograph` (author-hosted preliminary version)
- **Honesty:** FULL TEXT. Title page carries, on every page,
  "Author's preliminary version made available with permission of the publisher,
  the American Mathematical Society". This is the book form of the 245A blog
  notes, so it also discharges the "Tao 245A/245B blog notes" candidate: the
  Preface says "This text is based on my lecture notes of that course, which are
  also available online on my blog terrytao.wordpress.com". Read: Chapter 1
  entire (§1.1–§1.7), Chapter 2 headings.
- **Primary-backing eligible:** yes.

### S2 — Bass, *Real Analysis for Graduate Students*, version 5.0 (2024)

- **URL:** `https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf`
- **Status observed:** `200 application/pdf`, 10,060,295 bytes, 480 PDF pages.
- **Found via:** `https://r-bass.scholar.uconn.edu/` (`200 text/html`), which is
  the author's current UConn page. **The old `bass.math.uconn.edu/real.html` and
  `bass.math.uconn.edu/3rd.pdf` now 404** (redirect to
  `r-bass.scholar.uconn.edu`, `404 text/html`). A stale third-party mirror of
  version 2.1 is live at
  `https://www.math.wustl.edu/~victor/classes/ma5051/rags100514.pdf`
  (`200 application/pdf`, 1,355,783 bytes) — **do not cite the mirror**, cite the
  author-hosted v5.0.
- **Title:** *Real Analysis for Graduate Students*
- **Author:** Richard F. Bass · **Institution:** University of Connecticut
- **Kind:** `monograph` (self-published, author states "provide a version in
  .pdf format for free")
- **Honesty:** FULL TEXT, 27 chapters incl. hints on exercises.
- **Primary-backing eligible:** yes.

### S3 — Hunter, *Measure Theory* (UC Davis)

- **URL:** `https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf`
- **Status observed:** `200 application/pdf`, 592,859 bytes, 93 PDF pages.
- **Title:** *Measure Theory*
- **Author:** John K. Hunter · **Institution:** UC Davis, Dept. of Mathematics
- **Kind:** `lecture-notes` (© John K. Hunter, 2011)
- **Honesty:** FULL TEXT, 7 chapters. Author's own abstract states what is
  *missing*: "change of variable formula … absolutely continuous functions and
  functions of bounded variation of a single variable … Radon measures on Rn,
  and other locally compact Hausdorﬀ topological spaces, and the Riesz
  representation theorem … k-dimensional Hausdorﬀ measure … Wiener measure …
  Haar measure". So this source **cannot** back the differentiation-of-functions
  or RMK pairs; it is excellent on measures, integration, Radon–Nikodym and
  L^p duality.

### S4 — Norris, *Probability and Measure* (Cambridge Part II)

- **URL requested:** `https://www.dpmms.cam.ac.uk/~james/Lectures/pm.pdf`
  → redirects to `https://www.statslab.cam.ac.uk/~jrn10//Lectures/pm.pdf`
- **Status observed:** `200 application/pdf`, 412,898 bytes, 50 PDF pages.
- **Title:** *Probability and Measure*
- **Author:** J. R. Norris · **Institution:** University of Cambridge, Statistical Laboratory
- **Kind:** `course-notes` ("These notes are intended for use by students of the
  Mathematical Tripos at the University of Cambridge. Copyright remains with the
  author.")
- **Honesty:** FULL TEXT, 10 sections. This is the lecturer's own note set —
  higher-trust than the student-transcribed S5.

### S5 — Chua (after Miller), *Part II — Probability and Measure*

- **URL:** `https://dec41.user.srcf.net/notes/II_M/probability_and_measure.pdf`
- **Status observed:** `200 application/pdf`, 633,450 bytes, 95 PDF pages.
- **Title:** *Part II — Probability and Measure*, Michaelmas 2016
- **Author:** notes taken by **Dexter Chua**, based on lectures by **J. Miller**
  · **Institution:** University of Cambridge (SRCF-hosted student archive)
- **Kind:** `course-notes`
- **Honesty:** FULL TEXT, but **the notes themselves disclaim endorsement**:
  "These notes are not endorsed by the lecturers, and I have modiﬁed them (often
  signiﬁcantly) after lectures. They are nowhere near accurate representations of
  what was actually lectured, and in particular, all errors are almost surely
  mine." → **Convention/tiebreaker use only. Never a primary backing.** Use S4
  in its place wherever both cover the result.

### S6 — MIT OCW 18.125 *Measure and Integration*, Fall 2003

- **Index URL:** `https://ocw.mit.edu/courses/18-125-measure-and-integration-fall-2003/pages/lecture-notes/`
  — **Status observed:** `200 text/html`.
- **PDF URLs are content-hashed**; resolved and downloaded in-session:
  - lec11 `https://ocw.mit.edu/courses/18-125-measure-and-integration-fall-2003/b80a07e10d51c7982516a10d9fdd41e1_18125_lec11.pdf` — `200`, 160,459 B
  - lec13 `https://ocw.mit.edu/courses/18-125-measure-and-integration-fall-2003/8ee188461695d9db958de0347471d0db_18125_lec13.pdf` — `200`, 167,955 B
  - lec22 `https://ocw.mit.edu/courses/18-125-measure-and-integration-fall-2003/31864359c21e7fd7f0559904c8876e7a_18125_lec22.pdf` — `200`, 189,049 B
  - lec23 `https://ocw.mit.edu/courses/18-125-measure-and-integration-fall-2003/86bc06ae34f123bfc85ac30d455be03f_18125_lec23.pdf` — `200`, 189,479 B
  - the human-facing resource pages `.../resources/18125_lecN/` all return `200 text/html` for N = 1…24.
- **Kind:** `lecture-notes` (MIT OpenCourseWare, CC-licensed)
- **Honesty:** the FULL 24-lecture topic list was harvested from the index page;
  I read **lectures 11, 13, 22, 23 in full**. Note: this OCW course is the
  Fall 2003 instance and is **not** Stroock's — the Stroock instance is Spring
  2011 (see S12). Do not attribute the Fall 2003 notes to Stroock.

### S7 — Einsiedler & Ward, *Ergodic Theory with a view towards Number Theory*

- **URL:** `https://webspace.maths.qmul.ac.uk/f.vivaldi/teaching/ETAD/NotesI.pdf`
- **Status observed:** `200 application/pdf`, 1,024,475 bytes, 171 PDF pages.
- **Title page reads:** "Manfred Einsiedler / Thomas Ward / Ergodic Theory /
  with a view towards Number Theory / (**ﬁrst four Chapters and Appendices only,
  for LMS–EPSRC Summer School July 2010**) / – Monograph – / June 21, 2010 /
  Springer"
- **Institution hosting:** Queen Mary University of London (F. Vivaldi's ETAD
  course page). Published as Springer GTM 259 (2011).
- **Kind:** `monograph` (partial, distributed for a summer school)
- **Honesty:** PARTIAL — Chapters 1–4 and Appendices A–C in full text, **plus
  the complete table of contents for all 11 chapters**. That covers exactly
  the remit: measure-preserving systems, Poincaré recurrence, ergodicity, the
  mean and pointwise ergodic theorems (Ch. 2). Chapters 5–11 are TOC only.
- **BLOCKER (minor):** Thomas Ward's own book page `https://tbward0.wixsite.com/books`
  returns `200` but is a JS-rendered Wix shell — WebFetch retrieved no book
  titles or links from either `/books` or `/books/home`. The
  `tbward0.wixsite.com/books/ergodic` guess **404s**. The QMUL copy is therefore
  the reachable author-text; treat it as course-distributed rather than
  author-hosted.

### S8 — Bruckner, Bruckner & Thomson, *Real Analysis*, 2nd ed. (2008)

- **URL:** `https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf`
  (note the **triple `l` in `AlllChapters`** — the natural spelling
  `BBT-AllChapters-Landscape.pdf` **404s**)
- **Status observed:** `200 application/pdf`, 6,013,715 bytes, **1124 PDF pages**.
- **Title:** *Real Analysis*, Second Edition (2008)
- **Authors:** Brian S. Thomson, Judith B. Bruckner, Andrew M. Bruckner
  · **Institution:** ClassicalRealAnalysis.com (author-published, free PDF)
- **Kind:** `monograph`
- **Honesty:** FULL TEXT, both volumes (Ch. 1–8 = Vol. One, Ch. 9+ = Vol. Two).
- **This is the single most important source for the differentiation remit.** It
  is the only open source in this corpus that states and proves BOTH the
  mini-Vitali covering theorem AND the genuine Vitali covering theorem for fine
  covers AND the Banach–Zarecki theorem with a complete proof.
- **Primary-backing eligible:** yes.

### S9 — Bishop, *MAT 533 Real Analysis II*, Chapter 7 notes (Folland Ch. 7, Radon measures)

- **URL:** `https://www.math.stonybrook.edu/~bishop/classes/math533.S21/Notes/chap7notes.pdf`
- **Status observed:** `200 application/pdf`, 253,934 bytes, 53 PDF pages.
- **Course index:** `https://www.math.stonybrook.edu/~bishop/classes/math533.S21/` — `200 text/html`;
  it also links `Notes/chap4notes.pdf`, `chap5notes.pdf`, `chap8notes.pdf`,
  `chap9notes.pdf`, `chap10notes.pdf` (not fetched this session).
- **Title:** "MAT 533, SPRING 2021, STONY BROOK UNIVERSITY / REAL ANALYSIS II /
  FOLLAND'S REAL ANALYSIS: CHAPTER 7 / RADON MEASURES"
- **Author:** Christopher Bishop · **Institution:** Stony Brook University
- **Kind:** `lecture-notes` (slide-style, tracking Folland Ch. 7 numbering)
- **Honesty:** FULL TEXT of the Radon-measure chapter, with proofs. It carries
  Folland's numbering (Prop. 7.1, Thm 7.2 = RMK, Prop. 7.5, Cor. 7.6, Prop. 7.7,
  Thm 7.8, Prop. 7.9, Lusin), which makes it a usable open proxy for **Folland,
  *Real Analysis*, 2nd ed., Chapter 7** — but it is a slide set and has visible
  typos (see the caveats logged in the HARVEST section).

### S10 — Mahdipour-Shirayeh & Eshraghi, *A new proof for the Banach–Zarecki theorem*

- **URL:** `https://arxiv.org/pdf/1206.2602` (abs: `https://arxiv.org/abs/1206.2602`)
- **Status observed:** `200 application/pdf`, 171,453 bytes, 15 PDF pages.
- **Title:** "A NEW PROOF FOR THE BANACH-ZARECKI THEOREM: A LIGHT ON
  INTEGRABILITY AND CONTINUITY"
- **Authors:** A. Mahdipour–Shirayeh, H. Eshraghi
  · **Venue:** Bull. Iranian Math. Soc. (arXiv:1206.2602v1, 12 Jun 2012)
- **Kind:** `survey` / research note (expository new proof)
- **Honesty:** FULL TEXT. Proves only the **sufficiency** direction and says so:
  "The necessary condition is straightforward and will not be discussed here."
  Useful as a **second, independent** route to Banach–Zarecki (Radon–Nikodym,
  no Vitali covering theorem) to cross-check S8.

### S11 — Espejo, *The Riesz–Markov–Kakutani Representation Theorem* (UChicago REU 2023)

- **URL:** `https://www.math.uchicago.edu/~may/REU2023/REUPapers/Espejo.pdf`
- **Status observed:** `200 application/pdf`, 18 PDF pages.
- **Author:** Danny Espejo · **Institution:** University of Chicago Mathematics REU 2023 (P. May)
- **Kind:** `survey` (expository paper)
- **Honesty:** FULL TEXT. Explicitly says its general-case proof "is mostly a
  reproduction of the proof given for Theorem 7.2 in [Folland]". So S9 and S11
  are **not independent of each other** — both descend from Folland Ch. 7. If a
  pair needs two independent treatments of RMK, pair one of them with Bass
  Ch. 17 (S2), which proves RMK for a **compact metric** X by a different route.

### S12 — Lee (notes on Stroock's lectures), *Measure Theory*, MIT 18.125 Spring 2011

- **URL:** `https://holdenlee.github.io/coursework/math/18125/notes.pdf`
- **Status observed:** `200 application/pdf`, 23 PDF pages.
- **Title:** "Measure Theory / Lectures delivered by D. Stroock / Notes by Holden Lee /
  Spring 2011, MIT / Last updated 2/19/2011"
- **Kind:** `course-notes`, student-transcribed ("live-TeXed")
- **Honesty:** PARTIAL and **truncated** — the note set stops at Lecture 8
  (2/18/2011), i.e. it covers Riemann/Riemann–Stieltjes integration, bounded
  variation, measures, σ-algebras and the construction of measures, and then
  ends. **Convention/tiebreaker use only.** Cited here because it is the only
  reachable trace of the *Stroock* 18.125, which the brief named. The
  corresponding official OCW page is Fall 2003 (S6), a different instructor.

---

## HARVEST

### H1 — Tao, *An Introduction to Measure Theory* (S1)

**Top-level TOC, verbatim (pdfpage 4–5):**

```
Preface                                                        ix
Notation                                                        x
Acknowledgments                                               xvi
Chapter 1.  Measure theory                                      1
 §1.1.  Prologue: The problem of measure                        2
 §1.2.  Lebesgue measure                                       17
 §1.3.  The Lebesgue integral                                  46
 §1.4.  Abstract measure spaces                                79
 §1.5.  Modes of convergence                                  114
 §1.6.  Differentiation theorems                               131
 §1.7.  Outer measures, pre-measures, and product measures    179
Chapter 2.  Related articles                                  209
 §2.1.  Problem solving strategies                            210
 §2.2.  The Rademacher differentiation theorem                226
 §2.3.  Probability spaces                                    232
 §2.4.  Infinite product spaces and the Kolmogorov extension
        theorem                                               235
Bibliography                                                  243
Index                                                         245
```

**Subsection headings actually harvested from the body (verbatim, with pdfpage):**

| pdfpage | heading |
|---|---|
| 20 | `1.1.1. Elementary measure.` |
| 24 | `1.1.2. Jordan measure.` |
| 29 | `1.1.3. Connection with the Riemann integral.` |
| 36 | `1.2.1. Properties of Lebesgue outer measure.` |
| 46 | `1.2.2. Lebesgue measurability.` |
| 58 | `1.2.3. Non-measurable sets.` |
| 65 | `1.3.1. Integration of simple functions.` |
| 72 | `1.3.2. Measurable functions.` |
| 78 | `1.3.3. Unsigned Lebesgue integrals.` |
| 83 | `1.3.4. Absolute integrability.` |
| 87 | `1.3.5. Littlewood's three principles.` |
| 95 | `1.4.1. Boolean algebras.` |
| — | `1.4.2.` (σ-algebras and measurable spaces; heading did not survive extraction) |
| 104 | `1.4.3. Countably additive measures and measure spaces.` |
| 110 | `1.4.4. Measurable functions, and integration on a measure [space]` |
| 120 | `1.4.5. The convergence theorems.` |
| 134 | `1.5.1. Uniqueness.` |
| 136 | `1.5.2. The case of a step function.` |
| 138 | `1.5.3. Finite measure spaces.` |
| 138 | `1.5.4. Fast convergence.` |
| 140 | `1.5.5. Domination and uniform integrability.` |
| 151 | `1.6.1. The Lebesgue differentiation theorem in one dimension.` |
| 161 | `1.6.2. The Lebesgue differentiation theorem in higher dimensions.` |
| 170 | `1.6.3. Almost everywhere differentiability.` |
| 182 | `1.6.4. The second fundamental theorem of calculus.` |
| 195 | `1.7.1. Outer measures and the Carathéodory extension theorem.` |
| 199 | `1.7.2. Pre-measures.` |
| 203 | `1.7.3. Lebesgue-Stieltjes measure.` |
| 209 | `1.7.4. Product measure.` |

**Named results harvested from §1.6 and §1.7 (verbatim label + pdfpage):**

```
147  Theorem 1.6.2  (Rolle's theorem)
148  Corollary 1.6.5 (Mean value theorem)
149  Theorem 1.6.7  (Second fundamental theorem of calculus)
150  Theorem 1.6.9  (First fundamental theorem of calculus)
150  Corollary 1.6.10 (Differentiation theorem for continuous functions)
151  Theorem 1.6.11 (Lebesgue differentiation theorem, one-dimensional ...)
152  Theorem 1.6.12 (Lebesgue differentiation theorem, second formulation)
153  Proposition 1.6.13 (Translation is continuous in L1)
155  Exercise 1.6.8 (Steinhaus theorem)
156  Lemma 1.6.16 (One-sided Hardy-Littlewood maximal inequality)
158  Lemma 1.6.17 (Rising sun lemma)
160  Exercise 1.6.11 (Two-sided Hardy-Littlewood maximal inequality)
161  Exercise 1.6.12 (Rising sun inequality)
161  Theorem 1.6.19 (Lebesgue differentiation theorem in general dimension)
163  Theorem 1.6.20 (Hardy-Littlewood maximal inequality)
163  Lemma 1.6.22 (Vitali-type covering lemma)
165  Remark 1.6.23  [the actual Vitali covering lemma is different — see below]
166  Exercise 1.6.19 [improve 3^d to 2^d]
166  Remark 1.6.24  [optimal constant; Melas; Stein–Strömberg]
166  Exercise 1.6.20 (Dyadic maximal inequality)
167  Exercise 1.6.21 (Besicovich covering lemma in one dimension)
168  Exercise 1.6.23 (Cousin's theorem)
170  Exercise 1.6.28 (Weierstrass function)
171  Theorem 1.6.25 (Monotone differentiation theorem)
172  Lemma 1.6.26 (One-sided Hardy-Littlewood inequality)
174  Lemma 1.6.28 (E has density less than one)
175  Definition 1.6.30 (Jump function)
176  Lemma 1.6.31 (Continuous-singular decomposition for monotone ...)
179  Definition 1.6.33 (Bounded variation)
180  Proposition 1.6.34 [BV = difference of monotone]
181  Corollary 1.6.35 (BV differentiation theorem)
181  Exercise 1.6.41 (Lipschitz differentiation theorem, one-dimensional)
182  Remark 1.6.36 [Rademacher differentiation theorem, deferred to §2.2]
182  Proposition 1.6.37 (Upper bound for second fundamental theorem)
183  Exercise 1.6.44 (Second fundamental theorem for Lipschitz functions)
184  Exercise 1.6.45 (Integration by parts formula)
185  Exercise 1.6.47 (Cantor function)
186  Definition 1.6.39 [absolutely continuous]
187  Exercise 1.6.49 [AC maps null sets to null sets; Cantor function does not]
187  Theorem 1.6.40 (Second fundamental theorem for absolutely continuous functions)
190  Exercise 1.6.50 [F is AC iff F(x) = ∫_[a,x] f + C]
190  Proposition 1.6.41 (Second fundamental theorem of calculus, again)
192  Exercise 1.6.53 (Henstock-Kurzweil integral)
195  Definition 1.7.1 (Abstract outer measure)
196  Definition 1.7.2 (Carathéodory measurability)
196  Theorem 1.7.3 (Carathéodory extension theorem)
200  Definition 1.7.7 (Pre-measure)
200  Theorem 1.7.8 (Hahn-Kolmogorov theorem)
203  Theorem 1.7.9 (Existence of Lebesgue-Stieltjes measure)
```

### H2 — Bass, *Real Analysis for Graduate Students* v5.0 (S2)

**TOC, verbatim (pdfpage 4–10), measure-theory-relevant chapters:**

```
1  Preliminaries                                   1
   1.1 Notation and terminology / 1.2 Some undergraduate mathematics /
   1.3 Proofs of propositions
2  Families of sets                                11
   2.1 Algebras and σ-algebras 11 / 2.2 The monotone class theorem 14 / 2.3 Exercises
3  Measures                                        17
   3.1 Definitions and examples 17 / 3.2 Exercises
4  Construction of measures                        23
   4.1 Outer measures 24 / 4.2 Lebesgue-Stieltjes measures 28 /
   4.3 Examples and related results 32 / 4.4 Nonmeasurable sets 35 /
   4.5 The Carathéodory extension theorem 36 / 4.6 Exercises
5  Measurable functions                            43
   5.1 Measurability 43 / 5.2 Approximation of functions 47 /
   5.3 Lusin's theorem 48 / 5.4 Exercises
6  The Lebesgue integral                           53
   6.1 Definitions 53 / 6.2 Exercises
7  Limit theorems                                  57
   7.1 Monotone convergence theorem 57 / 7.2 Linearity of the integral 58 /
   7.3 Fatou's lemma 61 / 7.4 Dominated convergence theorem 62 / 7.5 Exercises
8  Properties of Lebesgue integrals                71
   8.1 Criteria for a function to be zero a.e. 71 / 8.2 An approximation result 73
9  Riemann integrals                               77
   9.1 Comparison with the Lebesgue integral 77
10 Types of convergence                            83
   10.1 Definitions and examples 83
11 Product measures                                89
   11.1 Product σ-algebras 90 / 11.2 The Fubini theorem 93 / 11.3 Examples 96
12 Signed measures                                103
   12.1 Positive and negative sets 103 / 12.2 Hahn decomposition theorem 105 /
   12.3 Jordan decomposition theorem 107
13 The Radon-Nikodym theorem                      111
   13.1 Absolute continuity 112 / 13.2 The main theorem 112 /
   13.3 Lebesgue decomposition theorem 115
14 Differentiation                                121
   14.1 Maximal functions 122 / 14.2 Antiderivatives 127 /
   14.3 Increasing functions 128 / 14.4 Bounded variation 132 /
   14.5 Absolutely continuous functions 135
15 Lp spaces                                      141
   15.1 Norms 141 / 15.2 Completeness 145 / 15.3 Convolutions 147 /
   15.4 Bounded linear functionals 151
16 Fourier transforms                             161
17 Riesz representation                           171
   17.1 Partitions of unity 172 / 17.2 The representation theorem 173 /
   17.3 Regularity 177 / 17.4 Bounded linear functionals 179
18 Banach spaces  185      19 Hilbert spaces 197
20 Topology       217      21 Probability   267
22 Harmonic functions 323  23 Sobolev spaces 337
24 Singular integrals 345  25 Spectral theory 369
26 Distributions  401      27 Hints on exercises 415
```

**Dispositions I flag now, because they are cheap at scaffold time:**

- Bass Ch. 20 (Topology: Urysohn, Tietze, Stone–Čech, Stone–Weierstrass,
  Ascoli–Arzelà, LCH) is **already-published** in this library (267–275) — do
  not re-mint from Bass.
- Bass Ch. 9 (Riemann integrals) is **already-published** (159–165).
- Bass Ch. 16 (Fourier transforms), Ch. 23 (Sobolev), Ch. 24 (Singular
  integrals), Ch. 26 (Distributions) are **out-of-scope** — they belong to
  `functional-analysis` / `pde` per the track remit.
- Bass Ch. 18/19/25 (Banach, Hilbert, spectral theory) → **out-of-scope**,
  `functional-analysis`.
- Bass Ch. 21 (Probability), Ch. 22 (Harmonic functions) → **out-of-scope**
  for this track.

### H3 — Hunter, *Measure Theory* (S3)

**TOC, verbatim (pdfpage 2–3):**

```
Chapter 1. Measures                                   1
 1.1 Sets 1 / 1.2 Topological spaces 2 / 1.3 Extended real numbers 2 /
 1.4 Outer measures 3 / 1.5 σ-algebras 4 / 1.6 Measures 5 / 1.7 Sets of measure zero 6
Chapter 2. Lebesgue Measure on R^n                    9
 2.1 Lebesgue outer measure 10 / 2.2 Outer measure of rectangles 12 /
 2.3 Carathéodory measurability 14 / 2.4 Null sets and completeness 18 /
 2.5 Translational invariance 19 / 2.6 Borel sets 20 / 2.7 Borel regularity 22 /
 2.8 Linear transformations 27 / 2.9 Lebesgue-Stieltjes measures 30
Chapter 3. Measurable functions                      33
 3.1 Measurability 33 / 3.2 Real-valued functions 34 / 3.3 Pointwise convergence 36 /
 3.4 Simple functions 37 / 3.5 Properties that hold almost everywhere 38
Chapter 4. Integration                               39
 4.1 Simple functions 39 / 4.2 Positive functions 40 / 4.3 Measurable functions 42 /
 4.4 Absolute continuity 45 / 4.5 Convergence theorems 47 /
 4.6 Complex-valued functions and a.e. convergence 50 / 4.7 L1 spaces 50 /
 4.8 Riemann integral 52 / 4.9 Integrals of vector-valued functions 52
Chapter 5. Product Measures                          55
 5.1 Product σ-algebras 55 / 5.2 Premeasures 56 / 5.3 Product measures 58 /
 5.4 Measurable functions 60 / 5.5 Monotone class theorem 61 /
 5.6 Fubini's theorem 61 / 5.7 Completion of product measures 61
Chapter 6. Differentiation                           63
 6.1 A covering lemma 64 / 6.2 Maximal functions 65 / 6.3 Weak-L1 spaces 67 /
 6.4 Hardy-Littlewood theorem 67 / 6.5 Lebesgue differentiation theorem 68 /
 6.6 Signed measures 70 / 6.7 Hahn and Jordan decompositions 71 /
 6.8 Radon-Nikodym theorem 74 / 6.9 Complex measures 77
Chapter 7. Lp spaces                                 79
 7.1 Lp spaces 79 / 7.2 Minkowski and Hölder inequalities 80 / 7.3 Density 81 /
 7.4 Completeness 81 / 7.5 Duality 83
Bibliography                                         89
```

**Convention note recorded now:** Hunter uses `p′` for the Hölder conjugate
(Definition 7.6), with `1′ = ∞, ∞′ = 1`. Bass uses `q` with `p^{-1}+q^{-1}=1`.
Tao uses neither in the measure book. **Library adoption recommendation:** use
`q` with `1/p + 1/q = 1` and the explicit conventions `q = ∞` when `p = 1` and
`q = 1` when `p = ∞`, i.e. Bass's convention — it reads better in a `[F#]` fact
line than a primed exponent.

Also from Hunter §1.1: "We use standard deﬁnitions and notations from set theory
and **will assume the axiom of choice when needed**." (pdfpage 4) — a global
choice declaration, recorded under CHOICE COST.

### H4 — Norris, *Probability and Measure* (S4)

**TOC, verbatim (pdfpage 0):**

```
1. Measures                                       3
2. Measurable functions and random variables     11
3. Integration                                   18
4. Norms and inequalities                        28
5. Completeness of Lp and orthogonal projection  31
6. Convergence in L1(P)                          34
7. Fourier transforms                            37
8. Gaussian random variables                     43
9. Ergodic theory                                44
10. Sums of independent random variables         48
```

**Subsection headings actually read:**

```
1.1 Definitions / 1.2 Discrete measure theory / 1.3 Generated σ-algebras /
1.4 π-systems and d-systems   [Lemma 1.4.1 (Dynkin's π-system lemma)]
1.5 Set functions and properties / 1.6 Construction of measures
   [Theorem 1.6.1 (Carathéodory's extension theorem)]
1.7 Uniqueness of measures   [Theorem 1.7.1 (Uniqueness of extension)]
...
9.1 Measure-preserving transformations
   [Prop 9.1.1, Prop 9.1.2]
9.2 Bernoulli shifts   [Theorem 9.2.1: the shift map is an ergodic m.p.t.]
9.3 Birkhoff's and von Neumann's ergodic theorems
   [Lemma 9.3.1 (Maximal ergodic lemma);
    Theorem 9.3.2 (Birkhoff's almost everywhere ergodic theorem);
    Theorem 9.3.3 (von Neumann's Lp ergodic theorem)]
```

**Convention note:** Norris states Carathéodory's extension theorem for a **ring**
of subsets ("Let A be a ring of subsets of E and let µ : A → [0,∞] be a countably
additive set function"), whereas Bass, Tao (Hahn–Kolmogorov) and Hunter state it
for a **Boolean algebra**. These differ (a ring need not contain E). Record the
disagreement; recommend the library state it for a Boolean algebra (Tao's
`Theorem 1.7.8` form) and give the ring form as a remark, because the algebra
form is what the Lebesgue-measure construction actually uses.

### H5 — Chua/Miller, Part II (S5)

**TOC, verbatim (pdfpage 1):**

```
0 Introduction 3
1 Measures 5          1.1 Measures 5 / 1.2 Probability measures 16
2 Measurable functions and random variables 20
   2.1 Measurable functions 20 / 2.2 Constructing new measures 23 /
   2.3 Random variables 25 / 2.4 Convergence of measurable functions 29 /
   2.5 Tail events 34
3 Integration 36
   3.1 Definition and basic properties 36 / 3.2 Integrals and limits 42 /
   3.3 New measures from old 44 / 3.4 Integration and differentiation 46 /
   3.5 Product measures and Fubini's theorem 48
4 Inequalities and Lp spaces 54
   4.1 Four inequalities 54 / 4.2 Lp spaces 59 / 4.3 Orthogonal projection in L2 61 /
   4.4 Convergence in L1(P) and uniform integrability 65
5 Fourier transform 69
6 Ergodic theory 83     6.1 Ergodic theorems 85
7 Big theorems 90       7.1 The strong law of large numbers 90 / 7.2 Central limit theorem 92
Index 94
```

### H6 — MIT OCW 18.125 (S6)

**Complete lecture list, topic strings verbatim from the OCW index page:**

```
 1 Why Measure Theory? Measure Spaces and Sigma-algebras; Operations on Measurable
   Functions (Sums, Products, Composition); Borel Sets
 2 Real-valued Measurable Functions; Limits of Measurable Functions; Simple Functions;
   Positive Measures; Definition of Lebesgue Integral
 3 Riemann Integral; Riemann Integrable <-> Continuous Almost Everywhere; Comparison of
   Lebesgue and Riemann Integrals; Properties of Positive Measures; Elementary Properties
   of the Lebesgue Integral
 4 Integral is Additive for Simple Functions; Monotone Convergence Theorem; Integral is
   Additive for All Non-negative Measurable Functions; Interchanging Summation and
   Integration; Fatou's Lemma
 5 Integral of Complex Functions; Dominated Convergence Theorem; Sets of Measure Zero;
   Completion of a Sigma-algebra
 6 Lebesgue Measure on R^n; Measure of Special Rectangles; Measure of Special Polygons;
   Measure of Open Sets (Approximate from within by Polygons); Measure of Compact Sets
   (Approximate from outside by Opens); Outer and Inner Measures
 7 Definition of Lebesgue Measurable for Sets with Finite Outer Measure; Remove Restriction
   of Finite Outer Measure; (R^n, L, Lambda) is a Measure Space, i.e., L is a Sigma-algebra,
   and Lambda is a Measure
 8 Caratheodory Criterion; Cantor Set; There exist (many) Lebesgue measurable sets which
   are not Borel measurable
 9 Invariance of Lebesgue Measure under Translations and Dilations; A Non-measurable Set;
   Invariance under Rotations
10 Integration as a Linear Functional; Riesz Representation Theorem for Positive Linear
   Functionals; Lebesgue Integral is the "Completion" of the Riemann Integral
11 Lusin's Theorem (Measurable Functions are nearly continuous); Vitali-Caratheodory Theorem
12 Approximation of Measurable Functions by Continuous Functions; Convergence Almost
   Everywhere; Integral Convergence Theorems Valid for Almost Everywhere Convergence;
   Countable Additivity of the Integral
13 Egoroff's Theorem (Pointwise Convergence is nearly uniform); Convergence in Measure;
   Converge Almost Everywhere -> Converges in Measure; Converge in Measure -> Some
   Subsequence Converges Almost Everywhere; Dominated Convergence Theorem Holds for
   Convergence in Measure
14 Convex Functions; Jensen's Inequality; Hölder and Minkowski Inequalities
15 L^p Spaces, 1 <= p <= Infty; Normed Spaces, Banach Spaces; Riesz-Fischer Theorem
   (L^p is complete)
16 C_c Dense in L^p, 1 <= p < Infty; C_c Dense in C_o (Functions which vanish at Infty)
17 Inclusions between L^p Spaces? l^p Spaces? Local L^p Spaces; Convexity Properties of
   L^p-norm; Smooth Functions Dense in L^p
18 Fubini's Theorem in R^n for Non-negative Functions
19 Fubini's Theorem in R^n for L^1 Functions; The Product Measure for Products of General
   Measure Spaces
20 Fubini's Theorem for Product Measure; Completion of Product Measures; Convolutions
21 Young's Inequality; Mollifiers; C^{Infty} Dense in L^p, 1 <= p < Infty
22 Fundamental Theorem of Calculus for Lebesgue Integral; Vitali Covering Theorem; Maximal
   Function; f in L^1 -> Mf in Weak L^1 (Hardy-Littlewood Theorem)
23 Lebesgue's Differentiation Theorem; The Lebesgue Set of an L^1 Function; Fundamental
   Theorem of Calculus I
24 Generalized Minkowski Inequality; Another Proof of Young's Inequality; Distribution
   Functions; Marcinkiewicz Interpolation: Maximal Operator Maps L^p to L^p for
   1 < p <= Infty
```

**Naming caveat that matters, logged now:** lecture 22 calls the **3r covering
lemma** the "Vitali covering theorem". It is not the Vitali covering theorem in
the sense of S8/S1; it is the finite/greedy covering lemma. Do not import MIT's
name. See HR-1 below.

### H7 — Einsiedler & Ward (S7)

**Full TOC (all 11 chapters + appendices), verbatim (pdfpage 10–13):**

```
1  Motivation 1
   1.1 Examples of Ergodic Behavior 1 / 1.2 Equidistribution for Polynomials 3 /
   1.3 Szemerédi's Theorem 4 / 1.4 Indefinite Quadratic Forms and Oppenheim's Conjecture 5 /
   1.5 Littlewood's Conjecture 7 / 1.6 Integral Quadratic Forms 8 /
   1.7 Dynamics on Homogeneous Spaces 9 / 1.8 An Overview of Ergodic Theory 10
2  Ergodicity, Recurrence and Mixing 13
   2.1 Measure-Preserving Transformations 13 / 2.2 Recurrence 21 / 2.3 Ergodicity 23 /
   2.4 Associated Unitary Operators 28 / 2.5 The Mean Ergodic Theorem 32 /
   2.6 Pointwise Ergodic Theorem 37 / 2.7 Strong-mixing and Weak-mixing 48 /
   2.8 Proof of Weak-mixing Equivalences 54 / 2.9 Induced Transformations 61
3  Continued Fractions 69
   3.1 Elementary Properties 69 / 3.2 The Continued Fraction Map and the Gauss Measure 76 /
   3.3 Badly Approximable Numbers 87 / 3.4 Invertible Extension of the Continued Fraction Map 91
4  Invariant Measures for Continuous Maps 97
   4.1 Existence of Invariant Measures 98 / 4.2 Ergodic Decomposition 103 /
   4.3 Unique Ergodicity 105 / 4.4 Measure Rigidity and Equidistribution 110
5  Conditional Measures and Algebras 121
   5.1 Conditional Expectation 121 / 5.2 Martingales 126 / 5.3 Conditional Measures 133 /
   5.4 Algebras and Maps 145
6  Factors and Joinings 153
   6.1 The Ergodic Theorem and Decomposition Revisited 153 / 6.2 Invariant Algebras and
   Factor Maps 156 / 6.3 The Set of Joinings 158 / 6.4 Kronecker Systems 159 /
   6.5 Constructing Joinings 163
7  Furstenberg's Proof of Szemerédi's Theorem 171   [7.1–7.13]
8  Actions of Locally Compact Groups 231            [8.1–8.8]
9  Geodesic Flow on Quotients of the Hyperbolic Plane 277  [9.1–9.7]
10 Nilrotation 331                                  [10.1–10.6]
11 More Dynamics on Quotients of the Hyperbolic Plane 347   [11.1–11.7]
Appendix A: Measure Theory 403
   A.1 Measure Spaces 403 / A.2 Product Spaces 406 / A.3 Measurable Functions 407 /
   A.4 Radon–Nikodym Derivatives 409 / A.5 Convergence Theorems 410 /
   A.6 Well-behaved Measure Spaces 411 / A.7 Lebesgue Density Theorem 412 /
   A.8 Substitution Rule 413
Appendix B: Functional Analysis 417   [B.1–B.7]
Appendix C: Topological Groups 429    [C.1–C.3]
Hints for Selected Exercises 441 / References 447 / Indexes 463
```

**Named results in §2.2, §2.5, §2.6 (verbatim label, pdfpage of the *PDF*):**

```
34  Theorem 2.11 (Poincaré Recurrence)
44  Theorem 2.19  [ergodicity of a surjective endomorphism of a compact abelian group]
44  Corollary 2.20 [toral endomorphism ergodic iff no eigenvalue is a root of unity]
45  Theorem 2.21 (Mean Ergodic Theorem)       [von Neumann]
51  Theorem 2.24 (Maximal Ergodic Theorem)
52  Proposition 2.26 (Maximal Inequality)
53  Lemma 2.27 (Finite Vitali covering lemma)
54  Corollary 2.28 [Vitali covering lemma in Z]
55  Lemma 2.29 [ℓ^1(Z) maximal inequality with constant 3]
57  Theorem 2.30 (Birkhoff)
```

**Dispositions for this track:** chapters 3–11 are ergodic theory / homogeneous
dynamics and are **out-of-scope** for a measure-theory level; the track remit
takes only §2.1, §2.2, §2.3, §2.5, §2.6 (and §2.4 as the machinery for §2.5).
§2.7–2.9 (mixing, induced transformations) are `deferred` — they need no new
measure theory but belong to an ergodic-theory topic rather than to a
measure-and-integration page.

### H8 — Bruckner–Bruckner–Thomson, *Real Analysis* 2nd ed. (S8)

**TOC, verbatim (pdfpage 3–16), chapters 1–8 (Volume One) and the relevant
Volume-Two sections. The PDF page offset is +25: printed p. N ↔ pdfpage N+25.**

```
1  BACKGROUND AND PREVIEW
   1.5 Transfinite Ordinals 25 [1.5.1 A transfinite covering argument 29]
   1.6 Category 30 [1.6.1 The Baire category theorem on the real line 31 /
       1.6.2 An illustration of a category argument 32]
   1.7 Outer Measure and Outer Content 35
   1.8 Small Sets 39 [1.8.1 Cantor sets 40 / 1.8.2 Expressing the real line as the
       union of two "small" sets 42]
   1.9 Measurable Sets of Real Numbers 44
   1.10 Nonmeasurable Sets 50 [1.10.1 Existence of sets of real numbers not
        Lebesgue measurable 53]
   1.11 Zorn's Lemma 56
   1.12 Borel Sets of Real Numbers 59
   1.13 Analytic Sets of Real Numbers 61
   1.14 Bounded Variation 64
   1.15 Newton's Integral 69   1.16 Cauchy's Integral 71
   1.17 Riemann's Integral 75 [1.17.1 Necessary and sufficient conditions for
        Riemann integrability 76]
   1.18 Volterra's Example 78   1.19 Riemann–Stieltjes Integral 82
   1.20 Lebesgue's Integral 87  1.21 The Generalized Riemann Integral 91
2  MEASURE SPACES 100
   2.1 One-Dimensional Lebesgue Measure 101 [2.1.1 Lebesgue outer measure 104 /
       2.1.2 Lebesgue inner measure 105 / 2.1.3 Lebesgue measurable sets 106]
   2.2 Additive Set Functions 110 [2.2.1 Example: Distributions of mass 112 /
       2.2.2 Positive and negative variations 113 / 2.2.3 Jordan decomposition theorem 115]
   2.3 Measures and Signed Measures 119 [2.3.1 σ–algebras of sets 121 /
       2.3.2 Signed measures 121 / 2.3.3 Computations with signed measures 122 /
       2.3.4 The σ-algebra generated by a family of sets 124]
   2.4 Limit Theorems 126 [2.4.1 Limsup and liminf of a sequence of sets 126 /
       2.4.2 Monotone limits in a measure space 127 / 2.4.3 Liminfs and limsups 129]
   2.5 The Jordan and Hahn Decomposition Theorems 131 [2.5.1 Jordan Decomposition 131]
   2.6 Hahn Decomposition 134
   2.7 Complete Measures 137 [2.7.1 The completion of a measure space 138]
   2.8 Outer Measures 141 [2.8.1 Measurable sets with respect to an outer measure 143 /
       2.8.2 The σ-algebra of measurable sets 144]
   2.9 Method I 148 [2.9.1 A warning 151]
   2.10 Regular Outer Measures 153 [2.10.1 Regularity of Method I outer measures 155 /
        2.10.2 Regularity of Lebesgue outer measure 156 / 2.10.3 Summary 157]
   2.11 Nonmeasurable Sets 159 [2.11.1 Ulam's theorem 160]
   2.12 More About Method I 164   2.13 Completions 170
3  METRIC OUTER MEASURES 179
   3.1 Metric Space 180 [3.1.1–3.1.3]
   3.2 Measures on Metric Spaces 189 [3.2.1 Metric Outer Measures 191 /
       3.2.2 Measurability of Borel sets 192]
   3.3 Method II 196 [3.3.1 / 3.3.2]
   3.4 Approximations 203 [3.4.1 Approximation from inside 203 / 3.4.2 Approximation
       from outside 205 / 3.4.3 Approximation using Fσ and Gδ sets 206]
   3.5 Construction of Lebesgue–Stieltjes Measures 207
   3.6 Properties of Lebesgue–Stieltjes Measures 217 [3.6.1 How regular are Borel
       measures? 219 / 3.6.2 A characterization of finite Borel measures on the real
       line 221 / 3.6.3 Measuring the growth of a continuous function on a set 221]
   3.7 Lebesgue–Stieltjes Measures in R^n 224
   3.8 Hausdorff Measures and Hausdorff Dimension 227 [3.8.1–3.8.3]
   3.9 Methods III and IV 240 [3.9.1 Constructing measures using full and fine covers 243 /
       3.9.2 A regularity theorem 246]
   3.10 Mini-Vitali Theorem 249 [3.10.1 Covering lemmas 250 / 3.10.2 Proof of the
        Mini-Vitali covering theorem 255]
   3.11 Lebesgue differentiation theorem 256 [3.11.1 A geometrical lemma 258 /
        3.11.2 Proof of the Lebesgue differentiation theorem 260]
   3.12 Additional Remarks on Special Sets 264 [3.12.1 Cantor sets 264 /
        3.12.2 Bernstein sets 266 / 3.12.3 Lusin sets 267]
4  MEASURABLE FUNCTIONS 278
   4.1 Definitions and Basic Properties 279 [4.1.1 Combining measurable functions 283]
   4.2 Sequences of Measurable Functions 289 [4.2.1 Convergence almost everywhere 291 /
       4.2.2 Convergence in measure 292 / 4.2.3 Pointwise convergence and convergence
       in measure 294]
   4.3 Egoroff's Theorem 297 [4.3.1 Comparisons 300]
   4.4 Approximations by Simple Functions 302 [4.4.1 Approximation by bounded,
       measurable functions 306]
   4.5 Approximation by Continuous Functions 309 [4.5.1 Tietze extension theorem 310 /
       4.5.2 Lusin's theorem 311 / 4.5.3 Further discussion 314]
5  INTEGRATION 322
   5.1 Introduction 323 [5.1.1 Scope of the Concept of Integral 323 / 5.1.2 The Class of
       Integrable Functions 325 / 5.1.3 The fundamental theorem of calculus for Riemann
       integrals 327]
   5.2 Integrals of Nonnegative Functions 330 [5.2.1 / 5.2.2]
   5.3 Fatou's Lemma 337 [5.3.1 / 5.3.2]
   5.4 Integrable Functions 344 [5.4.1 Properties of integrals 346 / 5.4.2 The Lebesgue
       dominated convergence theorem 347]
   5.5 Riemann and Lebesgue 350 [5.5.1 Approximation by step functions 353 /
       5.5.2 Upper and lower boundaries of a function 355 / 5.5.3 Lebesgue's
       characterization of Riemann integrability 358 / 5.5.4 Fundamental theorem of the
       calculus for Lebesgue integrals 359]
   5.6 Countable Additivity of the Integral 365
   5.7 Absolute Continuity 368 [5.7.1 Absolutely continuous functions 369 /
       5.7.2 A characterization of absolutely continuous functions 371 /
       5.7.3 Absolute continuity and Lebesgue-Stieltjes measures 373]
   5.8 Radon–Nikodym Theorem 377 [5.8.1–5.8.5, incl. 5.8.3 The Vitali-Lebesgue theorem 384
       and 5.8.5 The Lebesgue decomposition 387]
   5.9 Convergence Theorems 390 [5.9.1 Convergence in the mean 390 / 5.9.2 A more
       illuminating proof using the rectangle principle 393 / 5.9.3 Comparison of
       convergence conditions 394 / 5.9.4 Dominated convergence and uniform absolute
       continuity 397]
   5.10 Relations to Other Integrals 400 [5.10.1 / 5.10.2]
   5.11 Integration of Complex Functions 408
6  FUBINI'S THEOREM 420
   6.1 Product Measures 423 [6.1.1 The measure of rectangles 424 / 6.1.2 Preliminary
       version of the Fubini theorem 430]
   6.2 Fubini's Theorem 435   6.3 Tonelli's Theorem 438
7  DIFFERENTIATION 444
   7.1 The Vitali Covering Theorem 445 [7.1.1 Growth properties of real functions 445 /
       7.1.2 The Vitali covering theorem 447 / 7.1.3 Proof of the growth lemma 448 /
       7.1.4 Elementary proof of the Vitali theorem 451 / 7.1.5 Banach's proof of the
       Vitali theorem 454]
   7.2 Lebesgue's Differentiation Theorem 458 [7.2.1 Constructing a monotonic function
       with an infinite derivative 460 / 7.2.2 Integrating a derivative 461]
   7.3 The Banach–Zarecki Theorem 465
   7.4 Determining a Function by a Derivative 470
   7.5 Calculating a Function from a Derivative 473
   7.6 Total Variation of a Function 484 [7.6.1 Growth lemmas 489 / 7.6.2 VBG* Functions 491]
   7.7 Approximate Continuity and Lebesgue Points 500 [7.7.1 Approximately continuous
       functions 501 / 7.7.2 Lebesgue points 505]
8  DIFFERENTIATION OF MEASURES 520
   8.1 Differentiation of Lebesgue–Stieltjes Measures 521 [8.1.1 The ordinary derivative
       using the cube basis 522 / 8.1.2 Mixed partial derivatives 524 / 8.1.3 The strong
       derivative using the interval basis 526]
   8.2 The Cube Basis 528 [8.2.1 Vitali's covering theorem for the cube basis 529 /
       8.2.2 Differentiability of Lebesgue–Stieltjes measures on R^n 531 / 8.2.3 A theorem
       of Fubini 533 / 8.2.4 The fundamental theorem of the calculus 535]
   8.3 Lebesgue Decomposition Theorem 538
   8.4 The Interval Basis 541 [8.4.1 The Lebesgue density theorem for the interval
       basis 542 / 8.4.2 Approximate continuity 545 / 8.4.3 Differentiation of the
       integral for bounded functions 546 / 8.4.4 Mixed partials 548]
   8.5 Net Structures 553 [8.5.1–8.5.4]
   8.6 Radon–Nikodym Derivative in a Measure Space 562 [8.6.1 Liftings 565 /
       8.6.2 Growth lemmas 569 / 8.6.3 The Radon–Nikodym derivative as a genuine
       derivative 571]
   8.7 Summary, Comments, and References 575
--- Volume Two, sections relevant to this track ---
12 BANACH SPACES 784
   12.5 The Hahn–Banach Theorem 811 [12.5.1 Banach's version 813 / 12.5.2 Hahn's version 816]
   12.6 Improving Lebesgue Measure 818 [12.6.1 Extension of Lebesgue measure to a finitely
        additive measure 820 / 12.6.2 The Banach–Tarski paradox 825 / 12.6.3 A translation
        invariant improvement of Lebesgue measure 826]
   12.7 The Dual Space 828   12.8 The Riesz Representation Theorem 833
```

**Dispositions I flag now:** BBT §1.14–1.21 (bounded variation, Newton's,
Cauchy's, Riemann's, Riemann–Stieltjes integral) are **already-published**
(159–165 plus `cantor-set-baire-and-measure-zero`) — including
§1.17.1 "Necessary and sufficient conditions for Riemann integrability", which is
Lebesgue's criterion, already published. §3.8 (Hausdorff measure/dimension),
§7.6.2 (VBG*), §8.5 (net structures), Ch. 9–13 → `deferred` or `out-of-scope`.

### H9 — Bishop, MAT 533 Ch. 7 notes (S9)

**TOC, verbatim (pdfpage 2):**

```
Chapter 7: Radon Measures
7.1 Positive linear functionals on Cc(X)
7.2 Regularity and approximation theorems
7.3 The dual of C0(X)
7.4* Products of Radon measures
7.5 Notes and References
```

**Named results actually read (Folland's numbering, pdfpage in this PDF):**

```
 4  Prop. 7.1  [positive linear functional is locally bounded]
 5  Defn of outer regular / inner regular / regular / Radon measure / f ≺ U
 7  The Riesz Representation Theorem  [= Folland Thm 7.2]
12–20  Proof, Steps 1–4 (uniqueness; outer measure; open sets μ*-measurable;
       (7.4) for compact sets; inner regularity on open sets; I(f)=∫f dμ)
21–24  Example: Harmonic measure; F. and M. Riesz theorem; Makarov's theorem;
       Bishop–Jones theorem
25  Prop. 7.5  [every Radon measure is inner regular on all of its σ-finite sets]
26  Cor. 7.6   [every σ-finite Radon measure is regular; if X is σ-compact,
                every Radon measure on X is regular]
27  Prop. 7.7  [Fσ/Gδ approximation for σ-finite Radon measures]
30  Thm 7.8    [on an LCH space in which every open set is σ-compact, every Borel
                measure finite on compact sets is regular, hence Radon]
32  Prop. 7.9  [Cc(X) is dense in Lp(μ) for 1 ≤ p < ∞]
33  Lusin's Theorem  [Radon-measure version]
```

**Transcription caveats found in S9 (these are slide typos, do not copy):** the
displayed (7.4) reads `µ(K) = ∫{I(f) : ...}` where it must be `inf{…}`; Prop. 7.9's
proof ends `‖χE−f‖p ≤ µ(U\F)^{1/p}, ε^{1/p}`; the definition of inner regular
reads "sup{µ(K) : K ⊆ E, K **open**}" where it must be `K compact`; Thm 7.8's
proof says "We want to show µ = µ" where it means `µ = ν`. **Always re-derive
from Folland or from S11 before quoting S9 in a `[F#]` line.**

### H10 — Espejo, RMK (S11)

```
1. Introduction 1                       [Theorem 1.1 (RMK for Cc)]
2. Preliminaries for the Case X = [a,b] 2  [Riemann–Stieltjes, BV, ‖·‖_BV, BV_0^+]
3. The Case X = [a,b] 5                 [Riesz's Theorem via Hahn–Banach;
                                         Theorem 3.4 (Riesz Representation Theorem
                                         for Hilbert space) as a contrast]
4. Preliminaries for the General Case 9 [Theorem 4.1 (Carathéodory's Theorem for Outer
                                         Measures); Definition 4.2 (Borel measure);
                                         Definition 4.3 (Radon measure);
                                         Theorem 4.4 (Urysohn's Lemma for LCH Spaces);
                                         Lemma 4.5 (partitions of unity);
                                         Proposition 4.6; Corollary 4.7]
5. The General Case 11                  [Steps (i)–(v)]
6. Applications 15                      [6.1 Alternate Approach to Measure Theory /
                                         6.2 Haar Measures / 6.3 The Dual of ℓ∞]
```

### H11 — Lee/Stroock, 18.125 Spring 2011 (S12)

```
Lecture 1  §1 Riemann integration 3
Lecture 2  §1 Riemann integrability 5  §2 Riemann-Stieltjes integral 6
Lecture 3  §1 Integration by parts 7  §2 Riemann-Stieltjes integrability 8  §3 Variation 9
Lecture 4  §1 Functions of Bounded Variation 10  §2 Convergence rate 10
           §3 Lebesgue integration: Motivation 12
Lecture 5  §1 Measure 12  §2 Basic results 14
Lecture 6  §1 More on σ-algebras 15
Lecture 7  §1 Constructing measures 17
Lecture 8  §1 Constructing measures, continued 20
[note set ends here]
```

---

## THE HARD RESULTS, STATED EXACTLY

### HR-1 — Vitali covering lemma (finite version) vs. the Vitali covering theorem

**These are different results and the corpus is genuinely inconsistent about the
names.** Both must be minted; the library should name them distinctly.

**(a) The finite/greedy covering lemma ("3r-lemma").**

Tao, `Lemma 1.6.22 (Vitali-type covering lemma)`, S1 pdfpage 163, verbatim:

> Let B₁,…,Bₙ be a **finite** collection of open balls in Rᵈ (not necessarily
> disjoint). Then there exists a subcollection B′₁,…,B′ₘ of **disjoint** balls in
> this collection, such that
> ⋃ᵢ₌₁ⁿ Bᵢ ⊂ ⋃ⱼ₌₁ᵐ 3B′ⱼ.
> In particular, by finite subadditivity, m(⋃ᵢ₌₁ⁿ Bᵢ) ≤ 3ᵈ ∑ⱼ₌₁ᵐ m(B′ⱼ).

Tao immediately adds, `Remark 1.6.23` (S1 pdfpage 165), verbatim:

> The actual Vitali covering lemma [Vi1908] is slightly different to this one,
> but we will not need it here.

Einsiedler–Ward, `Lemma 2.27 (Finite Vitali covering lemma)`, S7 pdfpage 53,
verbatim (metric-space version, no ambient measure):

> Let B_{r₁}(a₁),…,B_{r_K}(a_K) be any collection of balls in a metric space.
> Then there exists a subcollection B_{r_{j(1)}}(a_{j(1)}),…,B_{r_{j(k)}}(a_{j(k)})
> of those balls which are disjoint and satisfy
> B_{r₁}(a₁) ∪ ⋯ ∪ B_{r_K}(a_K) ⊆ B_{3r_{j(1)}}(a_{j(1)}) ∪ ⋯ ∪ B_{3r_{j(k)}}(a_{j(k)}),
> where in the right-hand side we have tripled the radii of the balls in the
> subcollection.

BBT, `Lemma 3.40`, S8 pdfpage 276 (one-dimensional, in the "covering relation"
language of full/fine covers), verbatim:

> Let β be a finite subset of the covering relation H₀. Then there is a packing
> π ⊂ β, π = {([cᵢ,dᵢ],eᵢ) : i = 1,2,…,m}, for which
> ⋃_{([u,v],w)∈β} [u,v] ⊂ ⋃ᵢ₌₁ᵐ 3∗[cᵢ,dᵢ].
> [footnote] By 3∗[u,v] we mean the interval centered at the same point as [u,v]
> but with three times the length.

Bass, `Proposition 14.1`, S2 pdfpage 139 — **a different constant, 5ⁿ, and an
infinite family with bounded diameters:**

> Suppose E ⊂ Rⁿ is covered by a collection of balls {B_α} and there exists a
> positive real number R such that the diameter of each B_α is bounded by R.
> Then there exists a **disjoint sequence** B₁, B₂, … of elements of {B_α} such
> that m(E) ≤ 5ⁿ ∑_k m(B_k).

MIT 18.125 lec22, `Theorem 0.2`, S6 `mit-lec22.pdf` pdfpage 1 — **called "Vitali
covering theorem" but it is the 3r lemma with centred balls:**

> Let E ⊂ Rⁿ be a bounded set, and suppose we have a collection of balls F
> containing E such that every point of E is at the center of some ball (there
> may be several balls at each point). Then there exist balls B₁, B₂, … ∈ F so
> that (1) B₁, B₂, … are disjoint, and (2) E ⊂ ⋃_{α≥1} 3B_α.

**Variation across sources on (a):** dilation factor 3 (Tao, E&W, BBT, MIT) vs. 5
(Bass, using diameter-halving selection rather than largest-first, and getting a
countable disjoint sequence for a possibly infinite family). Tao asks for the
improvement to 2ᵈ as `Exercise 1.6.19`, "observe that with the construction used
to prove the Vitali covering lemma, the centres of the balls Bᵢ are contained in
⋃ⱼ 2B′ⱼ and not just in ⋃ⱼ 3B′ⱼ". **Recommendation:** mint the 3r form (finite,
factor 3) as the headline lemma and Bass's 5ⁿ form as a separate lemma, since the
5ⁿ form is the one that handles an infinite family and is what Bass's
differentiation chapter actually consumes.

**(b) The Vitali covering theorem (fine covers, a.e. disjoint exhaustion).**
This is the real thing and only S8 has it.

BBT, `Definition 7.2` then `Theorem 7.4`, S8 pdfpage 472–473, verbatim:

> **Definition 7.2:** Let 𝒥 be the family of nondegenerate closed intervals in ℝ.
> Let E ⊂ ℝ and let 𝒱 ⊂ 𝒥. If for each x ∈ E and ε > 0 there exists V ∈ 𝒱 such
> that x ∈ V and λ(V) < ε, then 𝒱 is called a **Vitali cover** for E (or a Vitali
> covering of E).
>
> **Theorem 7.4 (Vitali covering theorem)** Let 𝒱 be a Vitali covering of a set
> E ⊂ ℝ. Then there exists a countable family {V_k} of sets chosen from 𝒱 such
> that V_i ∩ V_j = ∅ (i ≠ j) and λ(E \ ⋃_{k=1}^∞ V_k) = 0.

BBT's remark on attribution, same page, verbatim:

> Theorem 7.4 was first obtained by Vitali in 1907. The standard proof nowadays
> is due to the Polish mathematician Stefan Banach (1892-1945). Banach's proof
> has the virtue of extending naturally to more general settings.

Note that BBT gives **two proofs**: §7.1.4 "Elementary proof of the Vitali
theorem" (p. 451) and §7.1.5 "Banach's proof of the Vitali theorem" (p. 454), and
an Rⁿ cube-basis version at §8.2.1 "Vitali's covering theorem for the cube basis"
(p. 529).

**Important:** the Vitali covering theorem as stated does **not** require E
measurable, and asserts nothing about λ(E) being finite. BBT applies it to a
possibly nonmeasurable E in `Lemma 7.1`:

> **Lemma 7.1:** Let f be strictly increasing on an interval [a,b], and let
> E ⊂ [a,b]. If at each point x ∈ E there exists a derived number Df(x) < p, then
> λ*(f(E)) ≤ p λ*(E).

(with `λ*` = outer measure; BBT is explicit "We do not assume f differentiable,
and we do not assume E measurable").

**(c) The mini-Vitali theorem** — BBT's `Theorem 3.39`, S8 pdfpage 275, verbatim:

> **Theorem 3.39 (Mini-Vitali Covering Theorem)** The following are three
> equivalent statements that assert that a set E of real numbers has Lebesgue
> measure zero:
> 1. For every ε > 0 there is an open set G containing E for which λ(G) < ε.
> 2. For every ε > 0 there is a **full cover** (relative to H₀) β of E for which V(ℓ,β) < ε.
> 3. For every ε > 0 there is a **fine cover** (relative to H₀) β of E for which V(ℓ,β) < ε.

with `H₀ = {([u,v],w) : u < v, u ≤ w ≤ v}` and premeasure `ℓ([u,v],w) = v − u`.
BBT's framing sentence for the whole business, verbatim (pdfpage 274):

> The classical Vitali covering theorem asserts that ℓ° = ℓ• = λ*.

The full/fine distinction is defined in `Exercise 7:3.2` (S8 pdfpage 494),
verbatim:

> Let E ⊂ ℝ, and let W be a family of intervals. If each x ∈ E is in arbitrarily
> small intervals from W, then W is a **Vitali cover** for E. If for every x ∈ E
> **all sufficiently small** intervals containing x are in W, we say that W is a
> **full cover** of E. … (a) A full cover is a Vitali cover.

### HR-2 — Hardy–Littlewood maximal inequality

**Tao, `Theorem 1.6.20`, S1 pdfpage 163, verbatim (centred, uncentred-in-radius,
open balls):**

> Let f : Rᵈ → C be an absolutely integrable function, and let λ > 0. Then
> m({x ∈ Rᵈ : sup_{r>0} (1/m(B(x,r))) ∫_{B(x,r)} |f(y)| dy ≥ λ}) ≤ (C_d/λ) ∫_ℝ |f(t)| dt
> for some constant C_d > 0 depending only on d.

Tao then says, verbatim (S1 pdfpage 165): "Now we can prove the Hardy-Littlewood
inequality, which we will do with the constant **C_d := 3ᵈ**." — so **3ᵈ** for the
centred version in Rᵈ, exactly as the brief expected. Tao's `Exercise 1.6.19`
asks for the improvement to **2ᵈ**. `Remark 1.6.24`, verbatim:

> The optimal value of C_d is not known in general, although a fairly recent
> result of Melas [Me2003] gives the surprising conclusion that the optimal value
> of C₁ is C₁ = (11+√61)/12 = 1.56…. It is known that C_d grows at most linearly
> in d, thanks to a result of Stein and Strömberg [StSt1983], but it is not known
> if C_d is bounded in d or grows as d → ∞.

`Exercise 1.6.20 (Dyadic maximal inequality)` gives constant **1** for the
dyadic-cube maximal function.

**MIT 18.125 lec22, `Theorem 0.3`, S6, verbatim (also 3ⁿ):**

> If f ∈ L¹(Rⁿ), then λ({x | Mf(x) > t}) ≤ (3ⁿ/t) ‖f‖₁ for all 0 < t < ∞, i.e.,
> Mf is weak (1,1).

with `Mf(x) = sup_{0<r<∞} (1/λ(B(x,r))) ∫_{B(x,r)} |f(y)| dy` (S6 lec22 pdfpage 1;
the extracted "sup_{0<f<∞}" is an extraction artifact for `0<r<∞`). Also
`Remark. Mf is not L¹ unless f = 0`, with a proof.

**Bass, `Theorem 14.2`, S2 pdfpage 141, verbatim (constant 5ⁿ):**

> If f is integrable, then for all β > 0,
> m({x : Mf(x) > β}) ≤ (5ⁿ/β) ∫ |f(x)| dx.

Bass names it: "We now prove a weak 1-1 inequality, due to Hardy and Littlewood.
It is so named because M does not map integrable functions into integrable
functions, but comes close in a certain sense to doing so."

**One-sided / rising-sun version.** Tao `Lemma 1.6.16 (One-sided
Hardy-Littlewood maximal inequality)` (S1 pdfpage 156) and `Exercise 1.6.12
(Rising sun inequality)`, verbatim (S1 pdfpage 161):

> Let f : ℝ → ℝ be an absolutely integrable function, and let f* : ℝ → ℝ be the
> one-sided signed Hardy-Littlewood maximal function
> f*(x) := sup_{h>0} (1/h) ∫_{[x,x+h]} f(t) dt.
> Establish the rising sun inequality
> λ m({f*(x) > λ}) ≤ ∫_{x : f*(x) > λ} f(x) dx
> for all real λ (note here that we permit λ to be zero or negative)…

Tao's `Exercise 1.6.13` asserts the two sides of Lemma 1.6.16 are in fact
**equal** — the one-sided constant is exactly **1**.

**Strong (p,p) bound.** *None of Tao §1.6, MIT lec22–23, Bass §14 or Hunter §6
proves the strong (p,p) bound in the differentiation chapter.* It appears
separately:
- MIT 18.125 **lecture 24** (topic string): "Distribution Functions; **Marcinkiewicz
  Interpolation: Maximal Operator Maps L^p to L^p for 1 < p <= Infty**".
- Bass **Chapter 24** "Singular integrals", §24.1 "Marcinkiewicz interpolation
  theorem" 345 and §24.2 "Maximal functions" 349.
- Hunter §6.3 "Weak-L¹ spaces" / §6.4 "Hardy-Littlewood theorem" — weak type only.

**Recommendation:** the weak (1,1) bound with the explicit constant 3ᵈ is in
scope (it is what Lebesgue differentiation needs); the strong (p,p) bound needs
Marcinkiewicz interpolation and should be `deferred` with that reason recorded,
unless the track also mints interpolation.

### HR-3 — Lebesgue differentiation theorem and Lebesgue points

**Tao, `Theorem 1.6.19 (Lebesgue differentiation theorem in general dimension)`,
S1 pdfpage 161, verbatim:**

> Let f : Rᵈ → C be an absolutely integrable function. Then for almost every
> x ∈ Rᵈ, one has
> (1.26)  lim_{r→0} (1/m(B(x,r))) ∫_{B(x,r)} |f(y) − f(x)| dy = 0
> and
> lim_{r→0} (1/m(B(x,r))) ∫_{B(x,r)} f(y) dy = f(x),
> where B(x,r) := {y ∈ Rᵈ : |x−y| < r} is the open ball of radius r centred at x.

**Tao's definition of a Lebesgue point**, verbatim (S1 pdfpage 162):

> A point x for which (1.26) holds is called a **Lebesgue point** of f; thus, for
> an absolutely integrable function f, almost every point in Rᵈ will be a Lebesgue
> point for Rᵈ.

(The trailing "for Rᵈ" is a typo in the source for "of f".)

**MIT lec23's version has a strictly stronger notion of Lebesgue point**, verbatim
(S6 lec23 pdfpage 3):

> **Lebesgue set.** Let f ∈ L¹(Rⁿ). Then x ∈ Rⁿ is in the Lebesgue set of f if
> there exists a number A such that
> lim_{r→0} (1/λ(B(x,r))) ∫_{B(x,r)} |f(y) − A| dy = 0.
> From before, we see that A is unique (for each x).
> Note that f does not have to be defined at x in order for x to be in the
> Lebesgue set of f. If f = g a.e., then the Lebesgue set of f coincides with the
> Lebesgue set of g. If we think of functions in L¹(Rⁿ) as equivalence classes,
> then the Lebesgue set of f is well defined.

**This is a real convention disagreement and it matters.** Tao's Lebesgue point
is defined relative to the chosen representative's value `f(x)`; MIT's is defined
by existence of *some* A, hence is a property of the **equivalence class**, which
Tao's is not. MIT's `g(x) = sin(1/x)` for x ≠ 0, `g(0) = 0` example shows 0 is not
in the Lebesgue set of g. **Recommendation:** adopt MIT's representative-free
definition (`∃A`) as the *definition* of Lebesgue point, and record Tao's as the
equivalent statement for a chosen representative — this is the version that makes
"the Lebesgue set of an L¹ class" well posed and is what the library needs for
`f*` and for the FTC.

**MIT lec23 also has the regular-convergence strengthening** (`Theorem 0.2`,
verbatim):

> A sequence of measurable functions [sets] E₁, E₂, … converges **regularly** to x
> if there exists c > 0 and r₁, r₂, … such that E_k ⊂ B(x,r_k), lim_{k→∞} r_k = 0,
> and λ(B(x,r_k)) ≤ c λ(E_k) for all k.
> **Theorem 0.2.** Let f ∈ L¹(Rⁿ), x in the Lebesgue set of f, and E₁, E₂, …
> converge regularly to x. Then f(x) = lim_{k→∞} (1/λ(E_k)) ∫_{E_k} f(y) dy.
> The point here is that we do not have to use balls.

(Tao's `Exercise 1.6.15` is the same statement.)

**BBT proves the Lebesgue differentiation theorem twice**: §3.11 from the
mini-Vitali theorem (p. 256, "our first proof"), and again in Ch. 7 §7.2 from the
full Vitali covering theorem. That is a useful pedagogical fact — the mini
version suffices.

### HR-4 — A monotone function is differentiable a.e.; ∫F′ ≤ F(b) − F(a) with strict inequality possible

**Tao, `Theorem 1.6.25 (Monotone differentiation theorem)`, S1 pdfpage 171,
verbatim:**

> Any function F : ℝ → ℝ which is monotone (either monotone non-decreasing or
> monotone non-increasing) is differentiable almost everywhere.

**Proof route — Tao uses the RISING SUN LEMMA, not Vitali.** He says so (S1
pdfpage 171): "We also first focus on the case when F is continuous, as this
allows us to use the rising sun lemma." He then introduces the four Dini
derivatives `D⁺F, D₊F, D⁻F, D₋F` explicitly. The rising sun lemma,
`Lemma 1.6.17`, S1 pdfpage 158, verbatim:

> Let [a,b] be a compact interval, and let F : [a,b] → ℝ be a **continuous**
> function. Then one can find an at most countable family of disjoint non-empty
> open intervals I_n = (a_n,b_n) in [a,b] with the following properties:
> (i) For each n, either F(a_n) = F(b_n), or else a_n = a and F(b_n) ≥ F(a_n).
> (ii) If x ∈ [a,b] does not lie in any of the intervals I_n, then one must have
>      F(y) ≤ F(x) for all x ≤ y ≤ b.

with `Remark 1.6.18` explaining the name ("imagine the graph … as depicting a
hilly landscape, with the sun shining horizontally from the rightward infinity
(+∞,0)… The intervals I_n then represent the portions of the landscape that are
in shadow").

**BBT uses the VITALI route instead** — §7.1 "Growth properties of real
functions" → `Lemma 7.1` → §7.2 "Lebesgue's Differentiation Theorem". So the two
routes are cleanly separated across the corpus:
`rising sun` = Tao §1.6.3 (continuous monotone case first, then jump
decomposition `Lemma 1.6.31`); `Vitali covering` = BBT §7.1–7.2.
**Bass takes a third route**: §14.3 "Increasing functions" via Lebesgue–Stieltjes
measures and the Lebesgue decomposition (`Lemma 14.6`, S2 pdfpage 145: for λ ⊥ m
arising from a right-continuous increasing H, `lim_{r→0} λ(B(x,r))/m(B(x,r)) = 0`
for m-a.e. x), using his 5ⁿ covering lemma.

**The inequality.** Tao, `Proposition 1.6.37 (Upper bound for second fundamental
theorem)`, S1 pdfpage 182, verbatim:

> Let F : [a,b] → ℝ be monotone non-decreasing (so that, as discussed above, F′
> is defined almost everywhere, is unsigned, and is measurable). Then
> ∫_{[a,b]} F′(x) dx ≤ F(b) − F(a).
> In particular, F′ is absolutely integrable.

(Proof: Fatou's lemma on the Newton quotients `f_n(x) = (F(x+1/n) − F(x))/(1/n)`.)

**Strictness is possible — the Cantor function.** Tao, `Exercise 1.6.47 (Cantor
function)` part (v), S1 pdfpage 185, verbatim:

> Show that if x ∈ [0,1] lies outside the middle thirds Cantor set (Exercise
> 1.2.9), then F is constant in a neighbourhood of x, and in particular F′(x) = 0.
> Conclude that ∫_{[0,1]} F′(x) dx = 0 ≠ 1 = F(1) − F(0), so that the second
> fundamental theorem of calculus fails for this function.

Tao's Cantor function is built by the explicit recursion
`F₀(x) := x`; `F_n(x) := ½F_{n−1}(3x)` on [0,1/3], `½` on (1/3,2/3),
`½ + ½F_{n−1}(3x−2)` on [2/3,1]; the F_n converge uniformly. Parts (vi)(1)–(2):
each nth-cover interval I has length 3⁻ⁿ but F(I) has length 2⁻ⁿ, and **F is not
differentiable at any element of the Cantor set C**.

BBT's version, `Example 5.26`, S8 pdfpage 395, verbatim:

> Let f be the Cantor function and C the Cantor ternary set… Let ε = ½ and δ > 0.
> Since C has zero Lebesgue measure, we can cover C with a finite number of
> pairwise disjoint intervals [a₁,b₁],…,[a_n,b_n] such that ∑ₖ(b_k − a_k) < δ,
> but ∑ₖ |f(b_k) − f(a_k)| = 1 > ε.

`Corollary 1.6.35 (BV differentiation theorem)` (S1 pdfpage 181) extends
differentiability a.e. to bounded variation; `Exercise 1.6.43`: "any function of
bounded variation has an (almost everywhere defined) derivative that is
absolutely integrable."

### HR-5 — The sharp FTC for absolutely continuous functions, both directions

**Definition.** Tao, `Definition 1.6.39`, S1 pdfpage 186, verbatim:

> A function F : ℝ → ℝ is said to be **absolutely continuous** if, for every ε > 0,
> there exists a δ > 0 such that ∑_{j=1}^n |F(b_j) − F(a_j)| ≤ ε whenever
> (a₁,b₁),…,(a_n,b_n) is a **finite** collection of **disjoint** intervals of
> total length ∑_{j=1}^n b_j − a_j at most δ.
> We define absolute continuity for a function F : [a,b] → ℝ defined on an
> interval [a,b] similarly, with the only difference being that the intervals
> [a_j,b_j] are of course now required to lie in the domain [a,b] of F.

BBT, `Definition 5.25`, S8 pdfpage 395, verbatim — **note BBT allows countable
collections and "nonoverlapping" rather than "disjoint":**

> Let f : [a,b] → ℝ. We say that f is **absolutely continuous** if for each ε > 0
> there exists δ > 0 such that if {[a_n,b_n]} is any **finite or countable**
> collection of **nonoverlapping** closed intervals in [a,b], with
> ∑_{k=1}^∞(b_k − a_k) < δ, then ∑_{k=1}^∞ |f(b_k) − f(a_k)| < ε.

MIT lec22, S6, verbatim (finite, disjoint open segments):

> A function f : [a,b] → ℝ is absolutely continuous if for all ε > 0 there exists
> δ > 0 such that ∑_{i=1}^n |f(β_i) − f(α_i)| < ε for any n and collection of
> disjoint segments (α₁,β₁),…,(α_n,β_n) in [a,b] such that ∑_{i=1}^n(β_i − α_i) < δ.
> Absolute continuity is stronger than continuity: continuity is when n = 1.

**Convention disagreement:** finite (Tao, MIT) vs. finite-or-countable (BBT);
disjoint (Tao, MIT) vs. nonoverlapping closed (BBT). These give the same class,
but the equivalence is a small lemma. **Recommendation:** state the finite,
disjoint form as the definition (Tao/MIT), and prove the countable/nonoverlapping
form as an immediate lemma — BBT itself uses the countable form in its
Banach–Zarecki proof, so the library needs it available.

**Direction 1 (AC ⟹ FTC).** Tao, `Theorem 1.6.40 (Second fundamental theorem for
absolutely continuous functions)`, S1 pdfpage 187, verbatim:

> Let F : [a,b] → ℝ be absolutely continuous. Then ∫_{[a,b]} F′(x) dx = F(b) − F(a).

Tao's proof route is **Cousin's theorem** (`Exercise 1.6.23`) plus a gauge
function — a Henstock–Kurzweil-flavoured argument, not the usual one. That is an
unusual dependency; the more standard route (Vitali + absolute continuity of the
integral) is BBT §7.3/§5.7.

**Direction 2 (FTC form ⟹ AC).** Tao, `Exercise 1.6.50`, S1 pdfpage 190,
verbatim — this is the *iff* the brief asked for:

> Show that a function F : [a,b] → ℝ is absolutely continuous **if and only if**
> it takes the form F(x) = ∫_{[a,x]} f(y) dy + C for some absolutely integrable
> f : [a,b] → ℝ and a constant C.

together with `Exercise 1.6.48(ii)`, verbatim: "Show that every absolutely
continuous function is of bounded variation on every compact interval [a,b]. …
In particular (by Exercise 1.6.40), absolutely continuous functions are
differentiable almost everywhere." and `Exercise 1.6.48(vi)`: "If f : ℝ → ℝ is
absolutely integrable, show that the indefinite integral F(x) := ∫_{[−∞,x]} f(y) dy
is absolutely continuous, and that F is differentiable almost everywhere with
F′(x) = f(x) for almost every x."

So the **sharp FTC**, assembled: *F is absolutely continuous on [a,b] ⟺ F′ exists
a.e., F′ ∈ L¹[a,b], and F(x) − F(a) = ∫_a^x F′ for every x ∈ [a,b].*
Tao supplies ⟸ via Exercise 1.6.48(vi) and ⟹ via Theorem 1.6.40 + Exercise
1.6.48(ii). BBT supplies the same as §5.5.4 "Fundamental theorem of the calculus
for Lebesgue integrals" (p. 359) plus §5.7.2 and §7.2.2 "Integrating a
derivative" (p. 461).

**The everywhere-differentiable variant (a genuinely different theorem).** Tao,
`Proposition 1.6.41 (Second fundamental theorem of calculus, again)`, S1 pdfpage
190, verbatim:

> Let [a,b] be a compact interval of positive length, let F : [a,b] → ℝ be a
> **differentiable** function, such that F′ is absolutely integrable. Then the
> Lebesgue integral ∫_{[a,b]} F′(x) dx of F′ is equal to F(b) − F(a).

Tao explains the hypothesis swap (S1 pdfpage 190), verbatim: "Inspecting the
proof of Theorem 1.6.40, we see that the absolute continuity was used primarily in
two ways: firstly, to ensure the almost everywhere existence, and to control an
exceptional null set E. It turns out that one can achieve the latter control by
making a different hypothesis, namely that the function F is **everywhere**
differentiable rather than merely almost everywhere differentiable."

MIT lec22 states the same dichotomy informally, verbatim: "This is not
necessarily true. It is true is [sic] f is absolutely continuous on [a,b] or if f
is everywhere differentiable and f′ ∈ L¹."

`Exercise 1.6.44 (Second fundamental theorem for Lipschitz functions)` is the
easy special case, by dominated convergence rather than Fatou.

### HR-6 — Banach–Zarecki, with a full proof

**Luzin's condition (N).** BBT's phrasing, in `Theorem 7.14` clause 3, verbatim:
"f satisfies Lusin's condition (N); that is, **f maps zero measure sets onto zero
measure sets**." Tao's `Exercise 1.6.49`, verbatim: "(i) Show that absolutely
continuous functions map null sets to null sets, i.e. if F : ℝ → ℝ is absolutely
continuous and E is a null set then F(E) := {F(x) : x ∈ E} is also a null set.
(ii) Show that the Cantor function does not have this property."

**BBT, `Theorem 7.14 (Banach–Zarecki)`, S8 pdfpage 492, verbatim — FULL PROOF at
pdfpage 492–493:**

> Let f be defined on [a,b]. A necessary and sufficient condition that f be
> absolutely continuous is that f satisfy the following three conditions:
> 1. f is continuous on [a,b].
> 2. f is of bounded variation on [a,b].
> 3. f satisfies Lusin's condition (N); that is, f maps zero measure sets onto
>    zero measure sets.

BBT attributes it, verbatim: "Theorem 7.14 was proved independently by S. Banach
and M. A. Zarecki." The proof uses two growth lemmas, both stated in full:

> **Lemma 7.12:** Let f be a finite function on an interval I, and let E ⊂ I. If
> there exists p > 0 such that, for every x ∈ E, **all** derived numbers Df(x)
> satisfy |Df(x)| < p, then λ*(f(E)) ≤ p λ*(E).
>
> **Lemma 7.13:** Let f be measurable on an interval I, and let E be a measurable
> subset of I. If f is differentiable at each point of E, then
> λ*(f(E)) ≤ ∫_E |f′| dλ.

BBT notes that Lemma 7.12 "is similar to but more elementary than the growth
lemmas of Section 7.1, since we need not use the Vitali Covering Theorem" — so
**Banach–Zarecki does not require the Vitali covering theorem** in BBT's route
(only Lemma 7.13's `f′ ∈ L¹` input does, via BV differentiability).

**Necessity is BBT `Theorem 5.27`, S8 pdfpage 396, verbatim, and proved there:**

> Let f be absolutely continuous on [a,b]. Then
> 1. f is continuous on [a,b].
> 2. f is of bounded variation on [a,b].
> 3. For every set E of Lebesgue measure zero in [a,b], λ(f(E)) = 0.

**BBT's corollaries, verbatim:**

> **Corollary 7.15:** Let f be continuous and satisfy Lusin's condition (N) on
> [a,b]. Then f is absolutely continuous if and only if f is differentiable a.e.
> and f′ is integrable.

and the composition remark (S8 pdfpage 494), verbatim: "Theorem 7.14 also
indicates that a composition of two absolutely continuous functions can fail to
be absolutely continuous if and only if it is not of bounded variation. To see
this, observe that both continuity and Lusin's condition (N) are preserved under
composition."

Two exercises worth minting as corollaries (S8 pdfpage 495), verbatim:

> 7:3.5 Let f : ℝ → ℝ be measurable and let Z = {x : f′(x) = 0}. Prove that λ(f(Z)) = 0.
> 7:3.6 Prove that a differentiable function f must satisfy Lusin's condition (N)
>       and deduce that f is absolutely continuous on an interval [a,b] if and
>       only if f is of bounded variation.
> 7:3.7 Prove that if f is differentiable on [a,b] and f′ = 0 a.e. then f is
>       constant. [Hint: Use Exercise 7:3.5 and the fact that f satisfies Lusin's
>       condition (N). Compare with the Cantor function.]

**Second, independent proof of sufficiency: S10.** `Theorem 1.1` there is stated
verbatim as

> Let F is [sic] a real–valued function defined on a real bounded closed interval
> [a,b]. A necessary and sufficient condition for F to be absolutely continuous
> is that (i) F is continuous and of bounded variation on [a,b], (ii) F satisfies
> Lusin's condition, i.e. it maps sets of Lebesgue measure zero into sets of
> Lebesgue measure zero.

and S10 proves it via `Theorem 1.2`: "Suppose that F : [a,b] → ℝ is a continuous
and of bounded variation and satisfies Lusin's condition. Then there exists an
integrable function and in fact a Borel–measurable function f : [a,b] → ℝ such
that F(x) = F(a) + ∫_{[a,x]} f dλ", by Radon–Nikodym in three steps (strictly
increasing → non-decreasing via `G(x) = F(x) + x` → general via the Jordan
decomposition with `Lemma 2.1`: "Let F : [a,b] → ℝ be a continuous function of
bounded variation. If F = p − n is the Jordan decomposition for F, then p and n
are continuous"; `Lemma 2.2` / `Corollary 2.3`: p and n also satisfy Lusin's
condition). S10 states explicitly: "The concept of almost everywhere
differentiability and thus the Vitali covering lemma is not used."

**Recommendation:** mint Banach–Zarecki with BBT's proof (it is the self-contained
one and its two growth lemmas are useful in their own right), and record S10's
Radon–Nikodym route as a Remark with the exact source. S10 also names, as a
warning worth carrying: "the sufficient condition is rather technical and
requires some non–trivial efforts and may rarely be found in common references."

### HR-7 — Egorov's theorem (exact finiteness hypothesis) and Lusin's theorem

**Egorov.**

BBT, `Theorem 4.16 (Egoroff)`, S8 pdfpage 323, verbatim:

> Let (X, M, µ) be a measure space with **µ(X) < ∞**. Let {f_n} be a sequence of
> finite a.e., measurable functions such that f_n → f [a.e.]. Then f_n → f [a.u.].

with `Definition 4.15`, verbatim:

> Let (X, M, µ) be a measure space. Let {f_n} be a sequence of finite a.e.,
> measurable functions on X. We say that {f_n} converges **almost uniformly** to
> f on X if for every ε > 0 there exists a measurable set E such that
> µ(X \ E) < ε and {f_n} converges uniformly to f on E.

BBT's framing sentence, verbatim: "**On a finite measure space** convergence
[a.u.] and convergence [a.e.] are equivalent. This is a form of a theorem due to
D. Egoroff (1869–1931)… **If the measure space is not finite then different
conditions are needed**" (footnoted to R. G. Bartle, *An extension of Egorov's
theorem*, Amer. Math. Monthly **87** (1980), no. 8, 628–633).

Bass, `Theorem 10.8`, S2 pdfpage 103, verbatim:

> Suppose µ is a **finite measure**, ε > 0, and f_n → f a.e. Then there exists a
> measurable set A such that µ(A) < ε and f_n → f **uniformly on A^c**.

Bass's editorial, verbatim, worth heeding in scaffolding: "Egorov's theorem is not
as useful for solving problems as one might expect, and students have a tendency
to try to use it when other methods work much better."

**So the finiteness hypothesis is `µ(X) < ∞` on the whole space, not σ-finiteness,
and not merely finiteness of the set where convergence is being examined.** Both
sources agree; both require the f_n finite a.e. and measurable, and f measurable
(BBT derives measurability of f). MIT lec13's topic string calls it "Egoroff's
Theorem (Pointwise Convergence is nearly uniform)".

**Lusin.** Three genuinely different hypothesis sets in this corpus:

BBT, `Theorem 4.25 (Lusin)`, S8 pdfpage 338, verbatim:

> Let (X, M, µ) be a **finite measure space with X a metric space and µ a Borel
> measure**. Suppose that M satisfies condition 4.21. Let f be finite a.e. and
> measurable on X, and let ε > 0. There exists a **continuous function g on X**
> such that f(x) = g(x) for all x in a **closed** set F with µ(X \ F) < ε. If
> |f(x)| ≤ M for all x ∈ X, we can choose g to satisfy |g(x)| ≤ M for all x ∈ X.

BBT's regularity input is "condition 4.21" (inner approximation of measurable sets
by closed sets); the proof runs Tietze extension + Egoroff + Theorem 4.24. BBT
also records the attribution, verbatim: "an important theorem discovered
independently by Guiseppe Vitali (1875–1932) and Nikolai Lusin (1883–1950). It is
almost universally called Lusin's theorem."

Bishop/Folland, S9 pdfpage 33, verbatim — **the Radon-measure version, no
finiteness of X, but the function must vanish outside a finite-measure set:**

> **Lusin's Theorem:** Suppose that µ is a **Radon measure** on X and f : X → ℂ
> is a measurable function that **vanishes outside a set of finite measure**.
> Then for any ε > 0 there exists φ ∈ C_c(X) such that φ = f except on a set of
> measure < ε. If f is bounded, φ can be taken to satisfy ‖φ‖_u ≤ ‖f‖_u.

Bass, §5.3, S2 pdfpage 66 — the [0,1] Lebesgue version, whose conclusion is
**weaker** ("f restricted to F is continuous", not "f agrees with a continuous
function on X"). Bass flags the distinction himself, verbatim (S2 pdfpage 67):

> This does not contradict Lusin's theorem. No claim is made that the function f
> is continuous at most points of [0,1]. What is asserted is that there is a
> closed set F with large measure so that f restricted to F is continuous when
> viewed as a function from F to ℝ.

**Which regularity Lusin needs:** inner regularity by closed sets (BBT's
"condition 4.21") or, in the topological setting, that µ is Radon — i.e. finite on
compacts, outer regular on Borel sets, inner regular on open sets (S9/S11
Definition, quoted at HR-9). Plus Urysohn/Tietze to build the continuous
extension. The library already publishes Urysohn and Tietze (267–275), so this is
a clean citation.

### HR-8 — Birkhoff, von Neumann, Poincaré

**Poincaré recurrence.** Einsiedler–Ward, `Theorem 2.11 (Poincaré Recurrence)`,
S7 pdfpage 34, verbatim:

> Let T : X → X be a measure-preserving transformation on a **probability space**
> (X, ℬ, µ), and let E ⊆ X be a measurable set. Then almost every point x ∈ E
> returns to E infinitely often. That is, there exists a measurable set F ⊆ E
> with µ(F) = µ(E) with the property that for every x ∈ F there exist integers
> 0 < n₁ < n₂ < ⋯ with T^{n_i}x ∈ E for all i ⩾ 1.

E&W's own sharpness remark, verbatim: "Poincaré recurrence is entirely a
consequence of the measure space being of finite measure, as shown in the next
example." — `Example 2.12`, `T(x) = x + 1` on ℝ with Lebesgue measure: "For any
bounded set E ⊆ ℝ and any x ∈ E, the set {n ⩾ 1 | T^n x ∈ E} is finite. Thus the
map T exhibits no recurrence."

E&W also give a **finitely-additive, quantitative** version as `Exercise 2.2.1`,
verbatim:

> Let (X, ℬ, µ, T) be a measure-preserving system with µ only assumed to be a
> **finitely additive** measure, and let A ∈ ℬ have µ(A) > 0. Show that there is
> some positive n ⩽ 1/µ(A) for which µ(A ∩ T^{−n}A) > 0.

**Mean ergodic theorem (von Neumann) — Hilbert-space decomposition route.**
E&W, `Theorem 2.21 (Mean Ergodic Theorem)`, S7 pdfpage 45, verbatim:

> Let (X, ℬ, µ, T) be a measure-preserving system, and let P_T denote the
> orthogonal projection onto the closed subspace
> I = {g ∈ L²_µ | U_T g = g} ⊆ L²_µ.
> Then for any f ∈ L²_µ, (1/N) ∑_{n=0}^{N−1} U_T^n f → P_T f (in L²_µ).

**Route:** pure Hilbert-space decomposition. E&W set `B = {U_T g − g : g ∈ L²_µ}`,
prove `B^⊥ = I`, so `L²_µ = I ⊕ closure(B)`, then telescope on B. No maximal
inequality. E&W date it, verbatim: "Theorem 2.21 is due to von Neumann [267] and
predates the pointwise ergodic theorem (Theorem 2.30) of Birkhoff, despite the
dates of the published versions."

Norris's version is **L^p, not L², and requires a finite measure space** —
`Theorem 9.3.3 (von Neumann's L^p ergodic theorem)`, S4 pdfpage 46, verbatim:

> Assume that **µ(E) < ∞**. Let p ∈ [1,∞). Then, for all f ∈ L^p(µ),
> S_n(f)/n → f̄ in L^p.

and Norris **derives it from Birkhoff** (via truncation + bounded convergence +
Fatou), which is the reverse of E&W's logical order. Chua/Miller (S5) states the
same L^p form. **Record this: "von Neumann's ergodic theorem" names two different
statements in this corpus** — the L² projection theorem (E&W) and the L^p mean
convergence theorem on a finite measure space (Norris, Chua). The library should
mint the L² projection form as the theorem and the L^p form as a corollary of
Birkhoff, naming both.

**Birkhoff pointwise ergodic theorem.** E&W, `Theorem 2.30 (Birkhoff)`, S7
pdfpage 57, verbatim:

> Let (X, ℬ, µ, T) be a measure-preserving system. If f ∈ 𝓛¹_µ, then
> lim_{n→∞} (1/n) ∑_{j=0}^{n−1} f(T^j x) = f*(x)
> converges almost everywhere and in L¹_µ to a T-invariant function f* ∈ 𝓛¹_µ,
> and ∫ f* dµ = ∫ f dµ. If T is ergodic, then f*(x) = ∫ f dµ almost everywhere.

Note E&W's standing assumption: "measure spaces are assumed to be Borel
probability spaces". So E&W's Birkhoff is on a **probability space** and gets
`∫f* = ∫f`.

Norris, `Theorem 9.3.2 (Birkhoff's almost everywhere ergodic theorem)`, S4
pdfpage 45, verbatim — **σ-finite, and only the inequality µ(|f̄|) ≤ µ(|f|):**

> Assume that (E, ℰ, µ) is **σ-finite** and that f is an integrable function on E.
> Then there exists an invariant function f̄, with µ(|f̄|) ≤ µ(|f|), such that
> S_n(f)/n → f̄ a.e. as n → ∞.

Chua/Miller (S5 pdfpage 85) states Norris's form plus "If Θ is ergodic, then f̄ is
a constant", and adds the caveat, verbatim: "Note that the theorem only gives
µ(|f̄|) ≤ µ(|f|). However, in many cases, we can use some integration theorems
such as dominated convergence to argue that they must in fact be equal."

**This is a real hypothesis difference to record:** probability space ⟹ equality
of integrals and (if ergodic) `f* = ∫f`; σ-finite only ⟹ the inequality, and `f̄`
need not have the same integral (e.g. `T(x) = x+1` on ℝ gives `f̄ = 0`).

**Proof routes — the corpus has three, and they differ.**

1. **Maximal ergodic theorem via a maximal inequality for positive operators**
   (E&W's "first proof", `Proposition 2.26 (Maximal Inequality)`, S7 pdfpage 52,
   verbatim): "Let U : L¹_µ → L¹_µ be a positive linear operator with ‖U‖ ⩽ 1.
   For f ∈ 𝓛¹_µ a real-valued function, define inductively … f_n = f + Uf + ⋯ +
   U^{n−1}f … and F_N = max{f_n | 0 ⩽ n ⩽ N}. Then ∫_{{x | F_N(x)>0}} f dµ ⩾ 0."
   This yields `Theorem 2.24 (Maximal Ergodic Theorem)`, S7 pdfpage 51, verbatim:
   "…Define E_α = {x ∈ X | sup_{n⩾1} (1/n) ∑_{i=0}^{n−1} g(T^i x) > α}… Then
   α µ(E_α) ⩽ ∫_{E_α} g dµ ⩽ ‖g‖₁. Moreover, α µ(E_α ∩ A) ⩽ ∫_{E_α∩A} g dµ
   whenever T^{−1}A = A." **This is Garsia's proof.**
2. **Maximal ergodic theorem via a covering lemma in ℤ** (E&W §2.6.3): uses
   `Lemma 2.27 (Finite Vitali covering lemma)` and `Corollary 2.28` to get the
   weaker `α µ(E_α) ⩽ 3‖g‖₁` (E&W's eq. 2.14). E&W say why this route is worth
   having, verbatim: "This demonstrates very clearly the strong link between the
   Lebesgue density theorem (Theorem A.24), whose proof involves the
   Hardy–Littlewood maximal inequality, and the pointwise ergodic theorem, whose
   proof involves the maximal ergodic theorem."
3. **Maximal ergodic lemma, Garsia-style, stated as one clean lemma** —
   Norris `Lemma 9.3.1 (Maximal ergodic lemma)`, S4 pdfpage 45, verbatim:
   "Let f be an integrable function on E. Set S* = sup_{n≥0} S_n(f). Then
   ∫_{{S*>0}} f dµ ≥ 0." (with `S₀ = 0`, `S_n = f + f∘θ + ⋯ + f∘θ^{n−1}`). Chua
   (S5) reproduces it. This is the shortest correct route and I recommend it.

Norris/Chua's Birkhoff proof then localises to
`D(a,b) = {liminf S_n/n < a < b < limsup S_n/n}` and shows `µ(D) = 0` — a clean
argument the library can carry directly.

**Ergodicity definitions agree across S4, S5, S7:** `A` invariant iff
`θ^{-1}(A) = A`; `θ` ergodic iff the invariant σ-algebra contains only null sets
and their complements. E&W add the equivalence via associated unitary operators
(§2.4) and the character criterion (`Theorem 2.19`, `Corollary 2.20`: a toral
endomorphism `T_A` is ergodic iff no eigenvalue of `A` is a root of unity).

### HR-9 — Riesz–Markov–Kakutani, in a lecture-note source, with the regularity clauses

**Radon measure — the definition that carries the regularity clauses.**
Bishop/Folland, S9 pdfpage 5, verbatim (with the one typo repaired, marked):

> **Defn:** let µ be a Borel measure on X and E a Borel subset of X. µ is called
> **outer regular on E** if µ(E) = inf{µ(U) : U ⊃ E, U open}, and is **inner
> regular on E** if µ(E) = sup{µ(K) : K ⊆ E, K [compact]}.
> **Defn:** if µ is outer and inner regular on all Borel sets, then it is called
> **regular**.
> It turns out that regularity is a bit too much to ask for when X is not
> σ-compact, so we adopt the following definition.
> **Defn:** A **Radon measure** on X is a Borel measure that is (i) finite on all
> compact sets, (ii) outer regular on all Borel sets, and (iii) inner regular on
> all **open** sets.

[The source prints "K ⊆ E, K open" in the inner-regular definition; that is a
slide typo — every other use in the same file and Espejo's Definition 4.3 have
`K compact`.]

Espejo, `Definition 4.3`, S11 p. 9–10, verbatim (same content, cleaner):

> A Borel measure µ on X is called a **Radon measure** if
> (a) µ is **locally finite**: for any x ∈ X, there exists a neighborhood U of x
>     in X such that µ(U) < ∞.
> (b) µ is **outer regular**: for any Borel subset E of X,
>     µ(E) = inf{µ(U) : E ⊆ U, U is open in X}.
> (c) µ is **weakly inner regular**: for any open subset U of X,
>     µ(U) = sup{µ(K) : K ⊆ U, K is compact}.

Espejo's warning is worth carrying verbatim into a Remark:

> Be warned, however, that there are several different definitions of Radon
> measures in the literature. Some definitions are equivalent to ours, while
> others are not. Moreover, many people call what we defined to be a Radon measure
> a regular Borel measure instead, while some people have a slightly different
> definition for the latter. There are also notions of outer Radon measures and
> inner Radon measures. Finally, there are Baire measures, which are related to
> all of the above, but certainly different. It's all very confusing.

**The theorem.** Bishop/Folland, S9 pdfpage 7, verbatim:

> **The Riesz Representation Theorem:** If I is a positive linear functional on
> C_c(X), then there is a **unique Radon measure** µ on X so that I(f) = ∫ f dµ
> for all f ∈ C_c(X). Moreover,
> (7.3) µ(U) = sup{I(f) : f ∈ C_c(X), f ≺ U} for all open sets U, and
> (7.4) µ(K) = inf{I(f) : f ∈ C_c(X), f ≥ χ_K} for all compact sets K in X.

[The source prints `∫{I(f) : …}` in (7.4); it must be `inf`, as the proof of Step
3 makes plain.] Notation, verbatim from S9: "we write f ≺ U if f [and] U is open
in X, 0 ≤ f ≤ 1 and supp(f) ⊂ U." X is a locally compact Hausdorff space.

Espejo, `Theorem 1.1`, S11 p. 2, verbatim: "Let X be an LCH space. If T is a
positive linear functional on C_c(X), then there exists a unique Radon measure µ
on X such that Tf = ∫ f dµ for all f ∈ C_c(X)."

**The follow-on regularity theorems, all verbatim from S9:**

> **Prop. 7.5:** Every Radon measure is inner regular on all of its **σ-finite**
> sets.
> **Cor. 7.6:** Every **σ-finite** Radon measure is regular. If X is
> **σ-compact**, every Radon measure on X is regular.
> **Prop. 7.7:** Suppose that µ is a σ-finite Radon measure on X and E is a Borel
> set in X. (a) For every ε > 0 there exists an open U and a closed F ⊂ E ⊂ U
> [with] µ(U \ F) < ε. (b) There exists an F_σ set A and a G_δ set B such that
> A ⊂ E ⊂ B and µ(B \ A) = 0.
> **Thm 7.8:** Let X be an LCH space in which **every open set is σ-compact**
> (this occurs if X is second countable). Then every Borel measure on X that is
> finite on compact sets is regular and hence Radon.
> **Prop. 7.9:** If µ is a Radon measure on X, then C_c(X) is dense in L^p(µ) for
> 1 ≤ p < ∞.

**Bass's independent version, for compact metric X** — `Theorem 17.3`, S2
pdfpage 191, verbatim:

> Let X be a **compact metric space** and L a positive linear functional on C(X).
> Then there exists a measure µ on (X, ℬ) such that L(f) = ∫ f(y) µ(dy), f ∈ C(X).

Bass adds, verbatim: "Since X is compact, taking f identically equal to 1 in
(17.1) shows that µ is a **finite** measure." He also states, verbatim (S2
pdfpage 188): "In fact, with almost no changes in the proof, we could let X be a
compact Hausdorff space, and with only relatively minor changes, we could even let
X be a locally compact Hausdorff metric space. See Remark 17.1." Bass's
§17.3 is a separate "Regularity" section, and §17.4 handles non-positive
functionals (the dual of C(X)). His Remark 17.1 is the honest statement about
what topology is being consumed:

> If X is a compact Hausdorff space instead of a compact metric one, we can still
> find such an f, that is, f ∈ 𝓕_G with f ≥ χ_K when K ⊂ G, K is compact, and G
> is open. **Urysohn's lemma** is the result from topology that guarantees such an
> f exists.

**Dependency note for scaffolding:** every RMK proof in this corpus consumes
(a) Urysohn's lemma for LCH spaces, (b) partitions of unity subordinate to a
finite open cover of a compact set, and (c) the Carathéodory extension theorem
for outer measures. (a) and (b) are already published in this library (267–275),
so RMK is affordable here provided the Carathéodory machinery is minted first.

### HR-10 — Duality (L^p)* ≅ L^q, and where σ-finiteness enters

**Hunter, `Theorem 7.14 (Dual space of L^p)`, S3 pdfpage 88, verbatim:**

> Let (X, 𝒜, µ) be a measure space. If **1 < p < ∞**, then (7.2) defines an
> isometric isomorphism of L^{p′}(X) onto the dual space of L^p(X).

where `(7.2) J : L^{p′}(X) → L^p(X)*, J(f) : g ↦ ∫ fg dµ`.

Hunter's proof structure and where σ-finiteness enters, verbatim (S3 pdfpage 90):

> which proves the result when X has **finite** measure. The extension to
> non-finite measure spaces is straightforward, and we only outline the proof. If
> X is **σ-finite**, then there is an increasing sequence {A_n} of sets with
> finite measure whose union is X. … Finally, if X is **not σ-finite**, then for
> each σ-finite subset A ⊂ X, let f_A ∈ L^{p′}(A) be the function such that
> F(g) = ∫_A f_A g dµ for every g ∈ L^p(A). Define
> M′ = sup{‖f_A‖_{L^{p′}(A)} : A ⊂ X is σ-finite} ≤ ‖F‖_{L^p(X)*}, and choose an
> increasing sequence of sets A_n such that ‖f_{A_n}‖ → M′. Defining B = ⋃ A_n,
> one may verify that f_B is the required function.

**So for 1 < p < ∞ the theorem needs NO σ-finiteness** — the exhaustion-by-σ-finite-
subsets trick works because an L^p function (p < ∞) is supported on a σ-finite
set. **σ-finiteness is needed exactly at p = 1.** Hunter's statements, verbatim:

> (S3 pdfpage 87) For L^p spaces, we will use the Radon-Nikodym theorem to show
> that L^p(X)* may be identified with L^{p′}(X) for 1 < p < ∞. **Under a
> σ-finiteness assumption, it is also true that L¹(X)* = L^∞(X), but in general
> L^∞(X)* ≠ L¹(X).**
> (S3 pdfpage 90) Theorem 7.14 also holds if **p = 1 provided that X is
> σ-finite**, but we omit a detailed proof. On the other hand, the theorem does
> not hold if p = ∞. Thus L¹ and L^∞ are not reflexive Banach spaces, except in
> trivial cases.

σ-finiteness also enters one step earlier, in the isometry direction:
`Proposition 7.13`, verbatim (S3 pdfpage 87): "Suppose that (X, 𝒜, µ) is a measure
space and **1 < p ≤ ∞**. If f ∈ L^{p′}(X), then F(g) = ∫ fg dµ defines a bounded
linear functional F : L^p(X) → ℝ, and ‖F‖_{L^{p*}} = ‖f‖_{L^{p′}}. **If X is
σ-finite, then the same result holds for p = 1.**"

`Corollary 7.15`: "If X is a measure space and 1 < p < ∞, then L^p(X) is
reflexive."

**Bass, `Theorem 15.12`, S2 pdfpage 170, verbatim:**

> Suppose **1 < p < ∞**, p^{-1} + q^{-1} = 1, and H is a real-valued bounded
> linear functional on L^p. Then there exists g ∈ L^q such that H(f) = ∫ fg and
> ‖g‖_q = ‖H‖.

Bass's proof does the `µ(X) < ∞` case and then, verbatim (S2 pdfpage 171), "In
the case where µ is **σ-finite**, but not necessarily finite, let F_n ↑ X so that
µ(F_n) < ∞ for each n." — **and stops there.** Bass never treats the
non-σ-finite case, so his Theorem 15.12 is in effect proved under σ-finiteness.
σ-finiteness also appears inside his `Theorem 15.9` (the norm-duality formula
`‖f‖_p = sup{∫ fg : ‖g‖_q ≤ 1}`), Case 2 (`p = ∞`), verbatim: "**Since µ is
σ-finite**, there exist sets F_n increasing up to X such that µ(F_n) < ∞ for each
n." **Record the disagreement: Hunter's Theorem 7.14 is the sharper statement (no
σ-finiteness for 1 < p < ∞, via the exhaustion-by-σ-finite-subsets argument);
Bass's is the convenient one that stops at σ-finite.** Recommendation: state the theorem with no
σ-finiteness for `1 < p < ∞`, and separately state the `p = 1` case with
σ-finiteness, giving the non-σ-finite exhaustion argument as its own lemma.

**Proof route note:** both Hunter and Bass go through **Radon–Nikodym**
(`ν(E) := F(χ_E)` is a signed measure, `ν ≪ µ`, `g := dν/dµ`), **not** through
Hahn–Banach. So the duality theorem in this corpus does **not** consume the axiom
of choice via Hahn–Banach. See CHOICE COST.

**The standard counterexample showing (L^∞)* ≠ L¹.** Hunter, `Example 7.16`, S3
pdfpage 90, verbatim:

> Consider the sequence space ℓ^∞(ℕ). For x = {x_i : i ∈ ℕ} ∈ ℓ^∞(ℕ),
> ‖x‖_{ℓ^∞} = sup_i |x_i| < ∞, define F_n ∈ ℓ^∞(ℕ)* by F_n(x) = (1/n) ∑_{i=1}^n x_i,
> meaning that F_n maps a sequence to the mean of its first n terms. Then
> ‖F_n‖_{ℓ^{∞*}} = 1 for every n ∈ ℕ, so by the Alaoglu theorem on the weak-*
> compactness of the unit ball, there exists a subsequence {F_{n_j}} and an
> element F ∈ ℓ^∞(ℕ)* with ‖F‖ ≤ 1 such that F_{n_j} ⇀* F in the weak-*
> topology. … Now suppose that there were y = {y_i} ∈ ℓ¹(ℕ) such that
> F(x) = ∑_i x_i y_i for every x ∈ ℓ^∞. Then, denoting by e_k ∈ ℓ^∞ the sequence
> with kth component equal to 1 and all other components equal to 0, we have
> y_k = F(e_k) = lim_j F_{n_j}(e_k) = lim_j 1/n_j = 0 so y = 0, which is a
> contradiction. Thus, ℓ^∞(ℕ)* is strictly larger than ℓ¹(ℕ).

Hunter names it, verbatim: "Such bounded linear functionals on ℓ^∞(ℕ) are called
**Banach limits**." And identifies the true dual, verbatim: "It is possible to
characterize the dual of L^∞(X) as a space ba(X) of bounded, **finitely additive**,
signed measures that are absolutely continuous with respect to the measure µ on X.
This result is rarely useful, however, since finitely additive measures are not
easy to work with."

**CHOICE-COST FLAG on this counterexample:** Hunter's route uses **Alaoglu's
theorem** (Tychonoff ⟹ AC-equivalent in full generality). BBT gives a
Hahn–Banach construction of the same object as `Exercise 12:5.2 (Banach limits)`
(S8 pdfpage 844), verbatim: "Apply the Hahn–Banach theorem to obtain a linear
functional L on ℓ^∞ such that … (iii) liminf x_n ≤ L(x) ≤ limsup x_n for all
x ∈ ℓ^∞ … Thus L provides a notion of limit applied to all bounded sequences."
Either way, **the standard proof that (L^∞)* ≠ L¹ consumes a choice principle.**
See CHOICE COST item C5.

Espejo's §6.3 identifies the dual differently, verbatim (S11 p. 17): "It is
straightforward to show that ℓ^∞ is isometrically isomorphic to C(βℕ). Hence, the
dual space of ℓ^∞ is isometrically isomorphic to the dual of C(βℕ). And by the RMK
Theorem, the latter is isometrically isomorphic to M(βℕ). Therefore the dual space
of ℓ^∞ can be identified with M(βℕ)." — Stone–Čech is already published (267–275),
but βℕ's existence is itself a choice-flavoured construction.

---

## CHOICE COST

Everything in this section is cited to a source I read; nothing is asserted from
memory. Where a source only *uses* choice without discussing it, I say so rather
than upgrading it to a claim about necessity.

**C1 — The Vitali non-measurable set requires AC, and Solovay says so
essentially.** Tao, §1.2.3, S1 pdfpage 58, verbatim:

> Thus far, we have not ruled out the possibility that every single set is
> Lebesgue measurable. There is good reason for this: a famous theorem of Solovay
> [So1970] asserts that, **if one is willing to drop the axiom of choice, there
> exist models of set theory in which all subsets of Rᵈ are measurable**. So any
> demonstration of the existence of non-measurable sets must use the axiom of
> choice in some essential way.

Tao's construction, `Proposition 1.2.18` (S1 pdfpage 59–60), uses AC explicitly:
"**Applying the axiom of choice**, we may thus find an element x_C ∈ C ∩ [0,1] for
each C ∈ ℝ/ℚ."

BBT's version, `Theorem 1.33` (S8 pdfpage 78), same, verbatim: "Let A be a set
containing exactly one member of each equivalence class. (**The existence of such
a set A follows from the axiom of choice.**)" BBT credits the result, verbatim:
"The first proof that nonmeasurable sets must exist is due to G. Vitali
(1875–1932). He showed that there cannot possibly exist a set function defined for
all subsets of real numbers that is translation invariant, is countably additive,
and extends the usual notion of length."

Bass §4.4 is titled "Nonmeasurable sets" (`Proposition 4.16`), and MIT 18.125
lecture 9's topic string is "Invariance of Lebesgue Measure under Translations and
Dilations; **A Non-measurable Set**; Invariance under Rotations".

**C2 — Solovay's model: the precise citation, and Shelah's converse.** The
reference Tao gives as `[So1970]` is: Robert M. Solovay, *A model of set-theory in
which every set of reals is Lebesgue measurable*, **Annals of Mathematics, ser. 2,
vol. 92 (1970), pp. 1–56**. Verified via the *Journal of Symbolic Logic* review
record at
`https://www.cambridge.org/core/journals/journal-of-symbolic-logic/article/abs/solovayrobert-m-a-model-of-set-theory-in-which-every-set-of-reals-is-lebesgue-measurable-annals-of-mathematics-ser-2-vol-92-1970-pp-156/92F4E68A0E5CDFB9A3405A57E7329EF2`.
The model is a model of **ZF + DC** (dependent choice survives; full AC does not),
and the construction assumes an **inaccessible cardinal**. **Shelah proved the
inaccessible cannot be removed** — see the open PDF
`https://people.math.wisc.edu/~awmille1/res/shelah.pdf` (A. W. Miller, *A
mathematical proof of S. Shelah's theorem on the measure problem and related
results*, Israel J. Math.) and `https://arxiv.org/pdf/1609.03078` ("Solovay's
inaccessible over a weak set theory without choice"), both surfaced by search but
**not fully read this session** — treat the Shelah half as needing one more
verification pass before it goes into an item as a `[F#]`.
**⚠ Do not write "Solovay's model shows all sets are measurable in ZF" — it is
ZF + DC, and it needs an inaccessible.**

**C3 — Countable choice for countable-additivity arguments: the corpus is
silent.** None of S1–S12 isolates countable choice or DC as a separate hypothesis.
Hunter states a blanket assumption, S3 pdfpage 4, verbatim: "We use standard
definitions and notations from set theory and **will assume the axiom of choice
when needed**." E&W's Appendix A ("Measure Theory") does not discuss it. Tao's
`Remark 1.2.19` is the closest the corpus gets to a fine-grained statement, and it
is about *extending* Lebesgue measure, not about countable additivity.
**Disposition: `deferred`, with the reason recorded — the assertion "countable
additivity arguments need countable choice" is TRUE but I found NO source in this
corpus that states it, so it must not be written into an item on my say-so.** A
scaffolder wanting it must find a set-theory source (Herrlich, *Axiom of Choice*,
or Jech) and cite it precisely.

**C4 — What survives without AC, per Tao's Remark 1.2.19.** S1 pdfpage 61,
verbatim:

> The above discussion shows that, in the presence of the axiom of choice, one
> cannot hope to extend Lebesgue measure to arbitrary subsets of ℝ while retaining
> **both** the countable additivity **and** the translation invariance properties.
> If one drops the translation invariant requirement, then this question concerns
> the theory of **measurable cardinals**, and is not decidable from the standard
> ZFC axioms. On the other hand, one can construct **finitely additive**
> translation invariant extensions of Lebesgue measure to the power set of ℝ by
> use of the **Hahn-Banach theorem**…

BBT makes exactly this construction explicit and proves it — §12.6.1 "Extension of
Lebesgue measure to a finitely additive measure". `Theorem 12.33` and
`Theorem 12.34`, S8 pdfpage 851, verbatim:

> **Theorem 12.33:** There exists a linear functional I on the space of bounded
> real-valued functions on [0,1) such that 1. If f is a bounded measurable
> function on [0,1), then I(f) = ∫₀¹ f dλ. 2. For each α ∈ ℝ, I(f) = I(f_α).
> **Theorem 12.34:** There exists a **finitely additive** measure λ̄ defined on
> **all** subsets of [0,1) such that 1. If E ∈ 𝓛, then λ̄(E) = λ(E). 2. For each
> α ∈ ℝ, λ̄(E) = λ̄(E_α)…

BBT's `Theorem 12.28` (Hahn–Banach) is proved **by Zorn's lemma** (S8 pdfpage 843,
verbatim: "**By Zorn's lemma**, 𝓛 has a maximal element, F₀"), and BBT devotes
§1.11 to Zorn's Lemma. So this construction's choice cost is explicit in the
source.

**C5 — Hahn–Banach in the L^p duality proof: NOT used.** Both Hunter (S3 §7.5) and
Bass (S2 §15.4) prove `(L^p)* ≅ L^q` through the **Radon–Nikodym theorem** applied
to `ν(A) := F(χ_A)`, with no appeal to Hahn–Banach. Hunter says so, verbatim (S3
pdfpage 88): "The proof is based on the idea that if F : L^p(X) → ℝ is a bounded
linear functional on L^p(X), then ν(E) = F(χ_E) defines an absolutely continuous
measure on (X, 𝒜, µ), and its Radon-Nikodym derivative f = dν/dµ is the element of
L^{p′} corresponding to F."
**Where choice DOES enter the L^p story:** (i) the `(L^∞)* ≠ L¹` counterexample —
Hunter uses **Alaoglu**, BBT's Banach-limit exercise uses **Hahn–Banach** (C-item
above); (ii) the identification of `(L^∞)*` with `ba(X)`.

**C6 — Riesz–Markov–Kakutani and choice.** Espejo (S11 p. 10) names the exact
topological input, verbatim: "The key topological ingredient for our proof of the
RMK Theorem is the following variant of Urysohn's Lemma. **Theorem 4.4 (Urysohn's
Lemma for LCH Spaces)**…", plus `Lemma 4.5` (partitions of unity, "whose essential
ingredient is Urysohn's Lemma") and `Theorem 4.1 (Carathéodory's Theorem for Outer
Measures)`. Espejo's *compact-interval* case, by contrast, explicitly uses
Hahn–Banach, verbatim (S11 p. 2): "Specifically, we use the **Hahn-Banach
Theorem** to prove this case of the theorem in its original formulation in terms
of Riemann-Stieltjes integrals." And he notes for the general case, verbatim: "In
our proof of Riesz's Theorem, we used the Hahn-Banach Theorem to subvert the issue
that characteristic functions are not continuous … However, it's no longer clear
how to use Hahn-Banach to work-around it. In this case, we tackle the issue with
Urysohn's Lemma."
**So: the general LCH RMK proof in this corpus does NOT use Hahn–Banach; the
[a,b] proof does.** Whether *Urysohn for LCH* itself needs a choice principle is
**NOT settled by any source I read** — Bass, Bishop and Espejo all cite Urysohn
without discussing its set-theoretic strength. **Do not assert either way.**
`deferred`, reason recorded.

Espejo's Haar-measure application (§6.2) is worth flagging as a separate choice
consumer: it constructs a left-invariant positive functional via a limit of ratios
`(f : φ)/(f₀ : φ)` "as supp(φ) shrinks to {1}" — a net/ultrafilter limit.

**C7 — Banach–Tarski, as the sharp statement of what fails in ℝⁿ, n ≥ 3.** BBT
§12.6.2, S8 pdfpage 852, verbatim:

> The analog of Theorem 12.34 is valid in ℝ². There is an isometry-invariant
> extension of λ₂ to all subsets of the unit square (or, more generally, to all
> bounded subsets of ℝ²). But the result **fails for n ≥ 3**. This is part of the
> content of the Banach–Tarski paradox. It is possible to decompose a ball in ℝ³
> into **five** pairwise disjoint pieces and then reassemble these pieces to form
> two disjoint balls of the same size.

BBT §12.6.3 "A translation invariant improvement of Lebesgue measure" and §2.11.1
"Ulam's theorem" are the two other places in this corpus where set-theoretic
strength is discussed; neither was read in full this session.

**C8 — Where choice is silently consumed inside routine measure theory, per this
corpus.** Two visible instances worth flagging to a scaffolder:
- Bass's Egorov proof and BBT's Egoroff proof both "choose an integer n_k such
  that µ(A_{n_k k}) < ε2^{-k}" — a countable sequence of choices.
- Hunter's Radon–Nikodym proof (S3 pdfpage 79) chooses "a sequence
  {g_n ∈ ℱ : n ∈ ℕ} such that lim ∫ g_n dµ = m" — again countable choice.
Neither source remarks on it. Recorded here so the library's own proofs can either
avoid it (definable choices exist in both cases) or note it, but **not** so that an
item can claim "countable choice is required" — see C3.

---

## AMENDMENTS / DISPOSITIONS OWED TO THE TRACK OWNER

These are *not* my file to write; recording them so `plan-measure-theory-track.md`
can pick them up.

1. **Two independent treatments per pair are available for every part of the
   remit except two.** Primary-backing-eligible sources are S1 (Tao), S2 (Bass),
   S8 (BBT), S3 (Hunter, measures/integration/L^p only), S7 (E&W, ergodic only).
   The two gaps:
   - **RMK / Radon measures:** S9 and S11 both descend from Folland Ch. 7 and are
     therefore NOT independent. Pair either with **Bass Ch. 17** (compact metric
     X, different proof) to get genuine independence.
   - **Banach–Zarecki:** S8 (full, Vitali-free growth lemmas) and S10 (sufficiency
     only, Radon–Nikodym). S10 does not prove necessity. Necessity is BBT
     Theorem 5.27. So the pair is S8 + S10 with the split recorded.
2. **`DEFERRED.md` §1 discharge, by source:** Lebesgue integral + convergence
   theorems → S1 §1.3–1.4, S2 Ch. 6–7, S3 Ch. 4, S8 Ch. 5. Sharp FTC → S1
   Thm 1.6.40 + Ex. 1.6.50, S8 §5.5.4/§5.7.2/§7.2.2. Lebesgue differentiation →
   S1 Thm 1.6.19, S6 lec23, S8 §3.11 and §7.2. Banach–Zarecki → S8 §7.3, S10.
   Vitali covering → S8 §7.1 (theorem) and S1 Lem. 1.6.22 (lemma). Egorov → S8
   Thm 4.16, S2 Thm 10.8. Lusin → S8 Thm 4.25, S9, S2 §5.3. L^p + Riesz–Fischer →
   S3 Ch. 7, S2 Ch. 15, S6 lec15.
3. **Strong (p,p) maximal bound is the one differentiation result with no
   in-corpus proof** — it needs Marcinkiewicz interpolation (S2 Ch. 24, S6 lec24).
   Either mint interpolation or defer with that reason.
4. **Convention decisions recommended above** (they will need an owner-visible
   record): Hölder conjugate `q` not `p′`; Carathéodory stated for a Boolean
   algebra with the ring form as a remark; Lebesgue point defined
   representation-free (`∃A`); AC defined with finite disjoint intervals, the
   countable/nonoverlapping form as a lemma; "Vitali covering lemma" reserved for
   the fine-cover theorem, the 3r result named "finite covering lemma".

---

## BLOCKERS

- **B1 — Bogachev, *Measure Theory* (Springer, 2 vols), TOC: NOT OBTAINED.**
  `https://link.springer.com/book/10.1007/978-3-540-34514-5` returns
  `303 See Other` to `idp.springer.com/authorize?...` (a cookie-gate), and a
  direct `curl` of the book page returns a 3,038-byte JS shell with no TOC.
  `https://link.springer.com/content/pdf/bfm:978-3-540-34514-5/1.pdf` reports
  `200 application/pdf` on a HEAD but the body delivered is the same 3,038-byte
  HTML cookie-gate (`file` says "HTML document", pypdf: "invalid pdf header").
  Two catalogue TOC mirrors also failed: `gbv.de/dms/ilmenau/toc/52631527X.PDF`
  → `404`, `catdir.loc.gov/catdir/toc/fy0710/2006933997.html` → `404`.
  **Impact: none on the remit** — S1/S2/S8 cover everything Bogachev would have
  been used for. Bogachev may still be named as a standard reference (Hunter's
  bibliography lists it as `[1] V. I. Bogachev, Measure Theory, Vol I. and II.,
  Springer-Verlag, Heidelberg, 2007`), but **no Bogachev section heading may be
  quoted, because I never saw one.**
- **B2 — Springer TOC for Einsiedler–Ward blocked by the same cookie-gate.** Not
  needed: the QMUL PDF (S7) carries the full TOC for all 11 chapters.
- **B3 — Thomas Ward's book site is a JS shell.** `tbward0.wixsite.com/books` and
  `/books/home` both return `200 text/html` but WebFetch extracts no book titles
  or links; `/books/ergodic` `404`s. Use S7 (QMUL) as the reachable copy.
- **B4 — Petersen, *Ergodic Theory* (CUP), TOC: not attempted after S7 landed.**
  S7 covers Poincaré recurrence, mean and pointwise ergodic theorems with full
  proofs and two proof routes each, plus S4 and S5 give the Cambridge treatment.
  Petersen would add nothing the remit needs.
- **B5 — Oxford / Warwick / Bonn measure-theory notes: not searched.** Stopped at
  12 verified sources (target 8) with the whole remit covered. If a scaffolder
  wants a European course-notes source specifically, the unexplored Stony Brook
  chapters (`chap4notes.pdf`, `chap5notes.pdf`, `chap8notes.pdf`,
  `chap9notes.pdf`, `chap10notes.pdf`, all linked from the S9 index page which
  returned `200`) are the cheapest next fetch.
- **B6 — Shelah's converse to Solovay (C2) was surfaced by search but not read.**
  Two open PDFs identified (`people.math.wisc.edu/~awmille1/res/shelah.pdf`,
  `arxiv.org/pdf/1609.03078`); neither downloaded. Verify before using.
- **B7 — S9 (Bishop's slides) has at least four transcription errors** that I
  found and logged inline (inner-regularity `K open` for `K compact`; `∫` for
  `inf` in (7.4); `µ = µ` for `µ = ν`; a malformed L^p estimate). It is a slide
  set, not a manuscript. **Never make a `[F#]` line from S9 without a second
  source.**
