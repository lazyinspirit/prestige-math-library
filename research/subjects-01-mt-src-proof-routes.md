# `measure-theory` — source-verified proof routes and choice costs

Research subagent output for the `measure-theory` scaffolding lane, wave 1.
Written 2026-08-13. I am this file's only writer.

## How to read this file

**"Functional analysis" here means the forbidden list given in my task:** Hahn–Banach
(and Zorn-based extension of functionals), the open mapping / closed graph /
uniform boundedness theorems, Banach–Alaoglu, and the **Riesz representation
theorem for Hilbert spaces** (`H* ≅ H`). Anything *not* on that list — completeness
of a normed space, the parallelogram law, an explicit orthogonal projection built
by a minimising sequence, Cauchy–Schwarz, Hölder — I count as **available**,
because each is provable from real analysis plus the measure theory this track
itself builds. Where the distinction matters I say exactly which fact is needed.

Every locator gives both the **printed page** and the **PDF page** where they
differ, since several sources have front matter. HTTP statuses were observed by
`curl -sIL` on 2026-08-13.

**Primary open sources used throughout** (all verified reachable):

| short name | full reference | URL | status |
|---|---|---|---|
| **Bass** | R. F. Bass, *Real Analysis for Graduate Students*, version 2.1 | `https://www.math.wustl.edu/~victor/classes/ma5051/rags100514.pdf` | **200** |
| **Tao** | T. Tao, *An Introduction to Measure Theory*, GSM 126, author's preliminary version | `https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf` | **200** |
| **Axler MIRA** | S. Axler, *Measure, Integration & Real Analysis* (open access) | `https://measure.axler.net/MIRA.pdf` | **200** |
| **Hunter ch.5** | J. K. Hunter, *Measure Theory*, Chapter 5: Product Measures | `https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes_ch5.pdf` | **200** |
| **Nagy §6** | G. Nagy, *Real Analysis* notes, Ch. IV §6 "Duals of L^p spaces" | `https://www.math.ksu.edu/~nagy/real-an/4-06-dual-lp.pdf` | **200** |
| **Heil** | C. Heil, "Absolute Continuity and the Banach–Zaretsky Theorem" | `https://heil.math.gatech.edu/papers/abscont_typosmarked.pdf` | **200** |
| **Khoshnevisan** | D. Khoshnevisan, *Lecture Notes on Ergodic Theory* | `https://www.math.utah.edu/~davar/ps-pdf-files/ergodic.pdf` | **200** |
| **Petersen** | K. Petersen, "Easy and nearly simultaneous proofs of the Ergodic Theorem and Maximal Ergodic Theorem", arXiv:math/0004070 | `https://arxiv.org/abs/math/0004070` | **200** |
| **Tao 245B-12** | T. Tao, 245B Notes 12: Continuous functions on LCH spaces | `https://terrytao.wordpress.com/2009/03/02/245b-notes-12-continuous-functions-on-locally-compact-hausdorff-spaces/` | **200** |
| **Espejo** | D. Espejo, "The Riesz–Markov–Kakutani Representation Theorem" (UChicago REU 2023) | `https://www.math.uchicago.edu/~may/REU2023/REUPapers/Espejo.pdf` | **200** |

A note on method, for whoever audits this: WebFetch cannot read PDFs. Every PDF
locator below was checked by downloading the file and extracting the page text
locally (`pypdf`), not from memory and not from a search-result snippet. Quoted
theorem statements are transcriptions of the extracted text.

---

## 1. Radon–Nikodym without functional analysis

### 1.1 Exact statement (the elementary route)

> **Bass, Theorem 13.4.** Suppose μ is a σ-finite positive measure on a measurable
> space (X, 𝒜) and ν is a **finite** positive measure on (X, 𝒜) such that ν is
> absolutely continuous with respect to μ. Then there exists a μ-integrable
> non-negative function f measurable with respect to 𝒜 such that ν(A) = ∫_A f dμ
> for all A ∈ 𝒜. Moreover, if g is another such function, then f = g μ-a.e.

**Source:** Bass, `https://www.math.wustl.edu/~victor/classes/ma5051/rags100514.pdf`
(**200**). Locator: **Chapter 13, §13.2, Theorem 13.4, printed pp. 100–103 = PDF
pp. 117–119**; supporting Lemma 13.3 on printed p. 100 (PDF p. 116); Lebesgue
decomposition Theorem 13.5 on printed p. 103 (PDF p. 119).

This is exactly the "sup over admissible functions" proof you named, and Bass
states the idea in one line before the proof: *"The idea of the proof is to look
at the set of f such that ∫_A f dμ ≤ ν(A) for each A ∈ 𝒜, and then to choose the
one such that ∫_X f dμ is largest."*

### 1.2 Proof skeleton (Bass 13.4), with every nontrivial input named

1. **Uniqueness.** If ∫_A f dμ = ∫_A g dμ for all A then f = g a.e.
   *Input:* Bass Proposition 8.1 (a function whose integral vanishes on every
   measurable set is 0 a.e.).
2. **Reduce to μ finite** (Step 4 is where σ-finiteness is spent): pick F_i ↑ X
   with μ(F_i) < ∞, restrict, and paste using Step 1's uniqueness to get
   consistency f_i = f_j on F_i.
   *Input:* σ-finiteness of μ; monotone convergence.
3. **Build the candidate.** Let 𝓕 = {g ≥ 0 measurable : ∫_A g dμ ≤ ν(A) ∀A},
   L = sup{∫ g dμ : g ∈ 𝓕}, choose g_n ∈ 𝓕 with ∫ g_n dμ → L, set
   h_n = max(g_1,…,g_n), f = lim h_n.
   *Inputs:* 𝓕 is closed under pairwise max (split on B = {g_1 ≥ g_2} and use
   additivity of ν — this is the one genuinely clever step); **monotone
   convergence theorem** to get ∫_A f dμ ≤ ν(A) and ∫ f dμ = L.
   *Choice:* the sequence (g_n) is extracted from a sup — countable choice / DC.
4. **The residual measure λ(A) := ν(A) − ∫_A f dμ is ⊥ μ.** If not, Lemma 13.3
   supplies ε > 0 and G with μ(G) > 0 and G positive for λ − εμ; then
   f + εχ_G ∈ 𝓕 with ∫(f + εχ_G) dμ = L + εμ(G) > L, contradiction.
   *Input:* **Lemma 13.3**, whose proof is the **Hahn decomposition** applied to
   ν − (1/n)μ for every n. This is the only place signed-measure theory enters.
5. **λ = 0.** λ ⊥ μ gives H with μ(H) = 0, λ(H^c) = 0; ν ≪ μ forces ν(H) = 0 and
   hence λ(H) = 0, so λ ≡ 0, i.e. ν(A) = ∫_A f dμ.

**Total dependency list:** Hahn decomposition for signed measures; MCT;
"integral zero on every set ⟹ zero a.e."; σ-finiteness for the pasting step.
Nothing else. Bass's Lebesgue decomposition (Thm 13.5) reuses the *same* f and
costs three extra lines.

**Needs functional analysis: NO.** No normed space, no dual, no Hilbert space
appears anywhere in the argument.

Cross-check source (second independent treatment of the same elementary route,
with the exhaustion presentation): Folland, *Real Analysis* 2e §3.2 (Lebesgue–
Radon–Nikodym Theorem 3.8) — not open access; the open Purdue lecture
`https://www.math.purdue.edu/~torresm/lecture-notes/lebesgue-theory/lebesgue-lecture28.pdf`
carries the same route.

### 1.3 von Neumann's Hilbert-space proof — record it, cite it as a remark only

The trick: put σ = μ + ν; the map Λ(f) = ∫ f dν is a bounded linear functional on
the **Hilbert space** L²(σ) (bounded by Cauchy–Schwarz and σ(X) < ∞); the
**Riesz representation theorem for Hilbert spaces** produces g ∈ L²(σ) with
∫ f dν = ∫ f g dσ for all f ∈ L²(σ); one then shows 0 ≤ g ≤ 1 σ-a.e., splits X
into {g < 1} and {g = 1}, and reads off dν/dμ = g/(1−g) on {g < 1}.

**Exactly what it needs, and nothing less:**
- L²(σ) is a **complete inner-product space** (Riesz–Fischer — cheap, this track proves it);
- **Riesz representation for Hilbert spaces**, `H* ≅ H` — **this is on your forbidden list**;
  and its own proof needs the orthogonal decomposition H = M ⊕ M^⊥ for a closed
  subspace M (which, see §4.2 below, is itself cheap — the expensive part is only
  the passage from "closed subspace decomposition" to "every bounded functional
  is an inner product").

**Sources for the von Neumann route:**
- Axler, *MIRA*, `https://measure.axler.net/MIRA.pdf` (**200**), Chapter 9 (Real and
  Complex Measures) — Axler explicitly proves Radon–Nikodym "using von Neumann's
  Hilbert space trick", after Chapter 8 has built Hilbert spaces. This is the
  cleanest open-access statement of the dependency, and it is a good citation for
  the remark precisely *because* the book orders Hilbert space **before** Radon–
  Nikodym, i.e. it exhibits the dependency you are avoiding.
- Rudin, *Real and Complex Analysis* 3e, Theorem 6.10 (not open access).
- Expository: `https://joelshapiro.org/Pubvit/Downloads/joel_rnhs.pdf` (J. H. Shapiro,
  "The Radon–Nikodym Theorem Made Easy") and
  `http://galton.uchicago.edu/~lalley/Courses/383/HilbertSpace.pdf` (Lalley,
  "Hilbert spaces and the Radon–Nikodym theorem").

**Verdict for the library:** prove Radon–Nikodym by Bass 13.4 (Hahn + sup);
mention von Neumann's proof in a `rem-` item, naming Riesz-for-Hilbert as the
input the library has not yet built. **Needs functional analysis: YES** for the
von Neumann route, **NO** for the route you will actually use.

---

## 2. (L^p)* ≅ L^q without Hahn–Banach

### 2.1 Exact statement, with the exact σ-finiteness hypothesis

> **Bass, Theorem 15.11.** Suppose 1 < p < ∞, p⁻¹ + q⁻¹ = 1, and H is a
> real-valued bounded linear functional on L^p. Then there exists g ∈ L^q such
> that H(f) = ∫ fg and ‖g‖_q = ‖H‖.

Bass's **standing hypothesis for the whole of Chapter 15** is on printed p. 131
(PDF p. 147): *"We assume throughout this chapter that the measure μ is
σ-finite."* Together with Bass Proposition 15.10 (every g ∈ L^q induces a bounded
functional of norm ‖g‖_q) this is the isometric isomorphism (L^p)* ≅ L^q.

**Source:** Bass, Chapter 15 §15.4, **Theorem 15.11, printed pp. 139–140 = PDF
pp. 155–157**; the norm-duality Theorem 15.8 and Corollary 15.9 (needed for the
‖g‖_q ≤ ‖H‖ half) are on printed pp. 138–139 = PDF pp. 154–155.

### 2.2 Proof skeleton (Bass 15.11)

1. **Assume μ(X) < ∞ first.** Define ν(A) := H(χ_A).
2. **ν is a finitely additive signed set function** — immediate from linearity of H
   on χ_{A∪B} = χ_A + χ_B for disjoint A, B.
3. **ν is countably additive.** If A_n ↑ A then χ_{A_n} → χ_A **in L^p**, so
   ν(A_n) = H(χ_{A_n}) → H(χ_A) = ν(A) by continuity of H.
   *Input:* continuity of H, dominated convergence in L^p, and **μ(X) < ∞** —
   this is precisely where finiteness is spent (χ_{A_n} → χ_A in L^p needs
   μ(A \ A_n) → 0 with the sets of finite measure).
4. **ν ≪ μ:** μ(A) = 0 ⟹ χ_A = 0 in L^p ⟹ ν(A) = H(χ_A) = 0.
5. **Apply Radon–Nikodym for signed measures** (Bass Exercise 13.1) to get an
   integrable real g with ν(A) = ∫_A g.
6. **H(s) = ∫ gs for simple s** by linearity; then ‖g‖_q ≤ ‖H‖ using
   **Corollary 15.9** (‖g‖_q = sup{∫ gs : ‖s‖_p ≤ 1, s simple}); then extend from
   simple functions to all of L^p by density plus Hölder.
7. **σ-finite case:** F_n ↑ X with μ(F_n) < ∞; set H_n(f) = H(fχ_{F_n}); the
   finite case gives g_n; uniqueness in Radon–Nikodym forces g_n = g_m on F_m for
   n > m; define g by gluing; **Fatou** gives ‖g‖_q ≤ ‖H‖; **dominated
   convergence** gives H_n(f) → H(f) and ∫_{F_n} f g → ∫ f g.

**Nontrivial inputs:** Radon–Nikodym (signed version), Hölder's inequality, the
"norm as a sup over the conjugate ball restricted to *simple* functions"
(Corollary 15.9 — note the restriction to simple functions is what makes step 6
work), density of simple functions in L^p, Fatou, DCT, σ-finiteness.

**Needs functional analysis: NO.** No Hahn–Banach, no Baire, no weak-* anything.
The only "functional analysis" is the definition of a bounded functional and its
norm.

### 2.3 The sharper hypothesis, if you want it

**Nagy §6**, `https://www.math.ksu.edu/~nagy/real-an/4-06-dual-lp.pdf` (**200**),
proves a strictly stronger pair of statements and is worth reading before you fix
the scaffold's hypothesis:

- **Theorem 6.3 (Duality for L^p, p ∈ (1,∞)), PDF p. 8 (printed p. 307).** For an
  **arbitrary** measure space (X, 𝒜, μ), Λ : L^q → (L^p)* is an isometric linear
  isomorphism. **No σ-finiteness at all.** The proof localises: every continuous
  φ on L^p (p > 1) is supported on a μ-σ-finite set (Nagy's Exercise 1, PDF p. 8),
  the finite case comes from Radon–Nikodym (Theorem 6.1), and a Cauchy argument
  in L^q assembles the pieces.
- **Theorem 6.4 (Duality for L¹), PDF pp. 9–10 (printed pp. 308–309).** Needs the
  measure space to be **decomposable** (plus a degenerate remainder). σ-finite ⟹
  decomposable, so "σ-finite" is a safe sufficient hypothesis; "arbitrary" is
  false for p = 1 and Nagy's **Example 6.1** (PDF p. 11, printed p. 310) is the
  counterexample: X uncountable with counting measure and the countable/
  co-countable σ-algebra.

**Recommendation for the scaffold:** state (L^p)* ≅ L^q for **1 ≤ p < ∞ with μ
σ-finite** (Bass's hypothesis, one theorem, one proof); record in a remark that
for 1 < p < ∞ σ-finiteness is removable (Nagy Thm 6.3) and that for p = 1 it is
not (Nagy Ex. 6.1).

### 2.4 What breaks at p = ∞, and the exact counterexample

**What breaks.** The proof above starts from ν(A) = Λ(χ_A) and needs
χ_{A_n} → χ_A **in the norm of the space** to get countable additivity of ν. In
L^∞ that convergence is false: ‖χ_A − χ_{A_n}‖_∞ = 1 whenever μ(A \ A_n) > 0, no
matter how small the measure. So ν is only **finitely** additive, Radon–Nikodym
does not apply, and the argument dies at step 3. This is not a repairable gap:
the conclusion itself is false.

**The exact theorem replacing it (Yosida–Hewitt).** (L^∞(X, 𝒜, μ))* is
isometrically the space **ba(X, 𝒜, μ)** of bounded **finitely** additive signed
measures on 𝒜 that vanish on μ-null sets, with the total-variation norm. L¹
embeds isometrically as the countably additive part, and the embedding is
**proper** whenever μ has no atoms of full measure.

**Two concrete witnesses that (L^∞)* ⊋ L¹:**

1. **Banach limits / free ultrafilter on ℕ** (the ℓ^∞ = L^∞(ℕ, counting) case).
   Any Banach limit LIM ∈ (ℓ^∞)* satisfies LIM(x) = lim x_n on convergent
   sequences and LIM(e_k) = 0 for every unit vector e_k. Any g ∈ ℓ¹ representing
   LIM would need g_k = LIM(e_k) = 0 for all k, hence g = 0, hence LIM = 0 —
   false, since LIM(𝟙) = 1. So LIM ∈ (ℓ^∞)* \ ℓ¹.
   Source: `https://en.wikipedia.org/wiki/Banach_limit` (**200**, orientation only);
   the ba-space theorem itself, with proof, is in
   `https://faculty.etsu.edu/gardnerr/Func/notes/6-1.pdf` (**200**, ETSU Gardner,
   "Examples of Dual Spaces", §6.1) and in the monograph
   J. Toland, *The Dual of L^∞(X,ℒ,λ), Finitely Additive Measures and Weak
   Convergence: A Primer*, Springer 2020,
   `https://link.springer.com/book/10.1007/978-3-030-34732-1` (paywalled).
   **Caveat you must not miss:** producing a Banach limit or a free ultrafilter
   **uses Hahn–Banach (or BPI)**. So this witness is *unavailable to your library
   at that point in the order*, and — sharper — this is not an accident: by
   Solovay's theorem (§8), ZF + DC cannot produce **any** element of
   (L^∞[0,1])* \ L¹[0,1], because such an element yields a non-measurable set.
2. **Choice-free witness for [0,1]:** none exists. Because of the previous
   caveat, the honest statement for a self-contained library is:
   *(L^∞)* is isometrically the finitely additive space ba, and the inclusion
   L¹ ⊆ (L^∞)* is proper — but every known proof of properness for L^∞[0,1] goes
   through Hahn–Banach.* Present this as a **`rem-` item with `proved_here: false`**,
   or, better, present the *ℓ^∞/ℕ* version, where properness follows from
   Hahn–Banach only, and say so explicitly.

**Needs functional analysis: for the positive theorem (1 ≤ p < ∞), NO. For the
p = ∞ failure, YES** — Hahn–Banach (or BPI) is needed even to exhibit the extra
functional, and §8 shows this is unavoidable.

---

## 3. Riesz–Markov–Kakutani

### 3.1 Exact statement (LCH version)

> **Espejo, Theorem 1.1 (RMK for C_c).** Let X be an LCH space. If T is a positive
> linear functional on C_c(X), then there exists a **unique Radon measure** μ on X
> such that Tf = ∫ f dμ for all f ∈ C_c(X).

> **Tao 245B Notes 12, Theorem 24 (unsigned Riesz representation).** Let X be
> locally compact Hausdorff **and σ-compact**. If I : C_c(X → ℝ) → ℝ is a positive
> linear functional, then there exists a unique Radon measure μ on X with I = I_μ.

**Sources:**
- Espejo, `https://www.math.uchicago.edu/~may/REU2023/REUPapers/Espejo.pdf` (**200**).
  Locator: **Theorem 1.1 on p. 2**; the LCH proof runs **§4, pp. 12–14** in the
  five-step structure quoted below; Urysohn for LCH is his **Theorem 4.4, p. 10**,
  the partition-of-unity lemma is **Lemma 4.5, p. 10**, Carathéodory is
  **Theorem 4.1, p. 9**.
- Tao 245B Notes 12,
  `https://terrytao.wordpress.com/2009/03/02/245b-notes-12-continuous-functions-on-locally-compact-hausdorff-spaces/`
  (**200**). Theorem 24 (Riesz representation), Lemma 1 (Urysohn), Lemma 19
  (partitions of unity), Theorem 18 (Lusin).
- Norqvist, *The Riesz Representation Theorem for Positive Linear Functionals*
  (Umeå thesis), `https://www.diva-portal.org/smash/get/diva2:953904/FULLTEXT01.pdf`
  (**200**) — a full, slow, Rudin-Ch.2-following write-up if you want every ε.
- **Bass Chapter 17** (compact **metric** X only), Theorem 17.3, printed p. 159 =
  PDF p. 175, with §17.1 partitions of unity (printed p. 158) and §17.3 regularity
  (printed p. 163). This is the version I recommend you *build*, see §3.5.
- Rudin, *Real and Complex Analysis* 3e, Theorem 2.14 and pp. 40–47 (not open).

### 3.2 Proof skeleton (Rudin/Espejo route), naming exactly where Urysohn and partitions of unity are used

Define, for U ⊆ X open, μ*(U) := sup{Tf : f ∈ C_c(X), 0 ≤ f ≤ 1, supp f ⊆ U}
(written f ≺ U), and for arbitrary E, μ*(E) := inf{μ*(U) : E ⊆ U open}.

1. **μ* is an outer measure.** Monotonicity and μ*(∅) = 0 are immediate. Countable
   subadditivity on **opens**: take f ≺ ⋃U_i, let K = supp f (compact), extract a
   finite subcover K ⊆ U_1 ∪ … ∪ U_n, and write f = Σ f g_i.
   ⇒ **PARTITION OF UNITY IS USED HERE**, and only here in step 1. Then for general
   sets, an ε2^{-i} choice of open hulls. *(Espejo Step (i), p. 12; Bass Step 1,
   printed p. 160.)*
2. **Every open set is μ*-measurable (Carathéodory criterion).** For E open, choose
   f ≺ E ∩ G with Tf > μ*(E∩G) − ε/2, let K = supp f, choose g ≺ E ∩ K^c with
   Tg > μ*(E∩K^c) − ε/2; then f + g ≺ E and positivity/linearity of T give
   μ*(E) ≥ μ*(E∩G) + μ*(E∩G^c) − ε. Then upgrade to arbitrary E by outer
   regularity. *(Espejo Step (ii), p. 13; Bass Step 2, printed p. 161.)*
3. **Carathéodory's theorem** turns μ* into a measure μ on a σ-algebra containing
   the Borel sets. *(Espejo Theorem 4.1, p. 9; Bass Theorem 4.6.)*
4. **μ(K) = inf{Tf : f ∈ C_c(X), f ≥ χ_K}** for compact K, and μ(K) < ∞.
   ⇒ **URYSOHN'S LEMMA IS USED HERE**: for K ⊆ U with U open and K compact, produce
   f ∈ C_c(X) with χ_K ≤ f ≤ 1 and supp f ⊆ U. This is where local finiteness
   comes from. *(Espejo Step (iii), p. 13; Bass Step 4, printed p. 161.)*
5. **Inner regularity on opens** (μ(U) = sup{μ(K) : K ⊆ U compact}), again via
   Urysohn. *(Espejo Step (iv), pp. 13–14.)*
6. **Tf = ∫ f dμ.** Reduce to 0 ≤ f ≤ 1, slice the range: K_i = {f ≥ i/n}, write
   f = Σ f_i with χ_{K_i} ≤ n f_i ≤ χ_{K_{i-1}}, and sandwich both Tf and ∫ f dμ
   between (1/n)Σ_{i=1}^n μ(K_i) and (1/n)Σ_{i=0}^{n-1} μ(K_i); the two sandwiches
   force |Tf − ∫f dμ| ≤ μ(X)/n → 0.
   ⇒ **URYSOHN AGAIN** (to see nf_i ≺ G for G ⊇ K_{i-1} open). *(Espejo Step (v),
   p. 14; Bass Step 5, printed pp. 162.)*
7. **Uniqueness**: two Radon measures agreeing on C_c(X) agree on compacts (by
   step 4's variational characterisation) and hence, by inner regularity on opens
   plus outer regularity, on all Borel sets. *(Tao 245B-12, Theorem 24 uniqueness
   half.)*

### 3.3 The exact regularity statement, and what "unique" means

Rudin's Theorem 2.14 conclusion, stated precisely (this is the statement people
misquote):

There is a σ-algebra 𝔐 ⊇ Borel(X) and a **unique** positive measure μ on 𝔐 with
Λf = ∫ f dμ for all f ∈ C_c(X), such that

- (a) μ(K) < ∞ for every compact K;
- (b) **outer regularity for every E ∈ 𝔐**: μ(E) = inf{μ(U) : E ⊆ U, U open};
- (c) **inner regularity for every open E, and for every E ∈ 𝔐 with μ(E) < ∞**:
      μ(E) = sup{μ(K) : K ⊆ E, K compact};
- (d) μ is **complete**: E ∈ 𝔐, A ⊆ E, μ(E) = 0 ⟹ A ∈ 𝔐.

**Uniqueness is uniqueness *within the class satisfying (a)–(c)* — the "Radon"
class.** It is NOT uniqueness among all Borel measures representing Λ; a
representing Borel measure that fails inner regularity on some infinite-measure
set need not equal μ. Two standard hypotheses restore unconditional uniqueness
among Borel measures finite on compacts:
- **X is LCH in which every open set is σ-compact** (Rudin Thm 2.18), or
- **X is second-countable LCH** (hence σ-compact and metrisable-friendly).
Tao's Theorem 24 simply builds σ-compactness into the hypothesis and then says
"unique Radon measure" without qualification.

**Convention warning to record in the batch notes:** "Radon measure" is *not*
uniformly defined. Folland/Rudin: locally finite, outer regular on Borel sets,
inner regular on open sets. Bourbaki/Schwartz: a positive linear functional on
C_c. Some authors demand inner regularity on **all** Borel sets (which fails on
non-σ-compact spaces). Pick Folland's and say so.

### 3.4 Does the proof need AC beyond countable choice?

**Short answer: yes, the standard LCH proof does — and the culprit is Urysohn's
lemma, not the measure theory.**

1. **Urysohn's lemma is not provable in ZF + countable choice.**
   E. Tachtsis, *The Urysohn Lemma is independent of ZF + Countable Choice*,
   Proc. Amer. Math. Soc. **147** (2019), 4029–4038.
   PDF `https://www.ams.org/journals/proc/2019-147-09/S0002-9939-2019-14590-1/S0002-9939-2019-14590-1.pdf`
   returns **403** to an automated fetch (AMS blocks bots); DOI landing
   `https://doi.org/10.1090/proc/14590` also **403**; the JSTOR record
   `https://www.jstor.org/stable/26771649` is the same article. **I could not
   retrieve the full text and am citing bibliographic data only — flagged as a
   partial verification.**
   Related and fully reachable: K. Keremedis, E. Tachtsis, E. Wajch,
   *On Urysohn's Lemma for generalized topological spaces in ZF*, arXiv:2103.05139,
   `https://arxiv.org/abs/2103.05139` (**200**), which states that **DC implies
   Urysohn's lemma** for U-normal generalized topological spaces and exhibits a
   ZF model of a normal space failing Urysohn.
2. **The measure-theoretic half needs only AC_ω/DC**: the ε2^{-i} covers in step 1,
   the sequences in Carathéodory's theorem, and the sequences in step 6.
3. **Everything in sight already presupposes AC_ω anyway**: without countable
   choice, Lebesgue measure need not be countably additive at all (Feferman–Lévy;
   see §8.6).

**Practical verdict: DC suffices for the whole RMK proof, and countable choice
alone provably does not deliver the Urysohn input.** Say exactly that.

### 3.5 What I recommend you actually mint

**Bass's Chapter 17 version — X a compact metric space — costs no choice for the
topological input at all**, because the Urysohn function is *explicit*:
f(x) = (1 − d(x,K)/(δ/2))^+ with δ = dist(K, G^c) (Bass §17.1, printed p. 158 =
PDF p. 174). Bass then notes in **Remark 17.1** that for a compact Hausdorff X the
same f exists but only by Urysohn's lemma.

So: mint RMK for **σ-compact metric LCH X** with the explicit Urysohn functions
(zero extra choice, fully self-contained), and add a `rem-` item recording the
general LCH statement with the Urysohn/DC dependency named. You already have
Urysohn published (orders 267–275), so the general version is *also* legally
available to you — the point is only that the metric version is choice-cheaper
and reads better.

**Needs functional analysis: NO.** The whole proof is outer measures, Carathéodory,
and Urysohn. Espejo's paper *also* contains a Hahn–Banach proof — but that is his
**§2–§3, the classical X = [a,b] Riesz–Stieltjes version**, not the LCH one. Do
not accidentally scaffold from his §3.

---

## 4. Birkhoff, the maximal ergodic theorem, and von Neumann

### 4.1 (c) first, because it is the load-bearing answer: Birkhoff needs NO Hilbert-space input. **Confirmed.**

Two independent sources give a complete, purely measure-theoretic proof.

**Source A — Khoshnevisan**, `https://www.math.utah.edu/~davar/ps-pdf-files/ergodic.pdf` (**200**).

> **Theorem 3.3 (individual ergodic theorem; Birkhoff), p. 4.** If X₁ ∈ L¹(P) then
> lim_{n→∞} (1/n) Σ_{j=0}^{n−1} X_j = E(X₀ | ℐ) a.s. **and in L¹(P)**.

> **Theorem 3.4 (Hopf maximal ergodic lemma), p. 5.** With S_n = Σ_{j=0}^{n−1} X_j
> and M_n = max{0, S₁, …, S_n}: if X₀ ∈ L¹(P) then **E[X₀ ; M_n > 0] ≥ 0**.

Locators: statements pp. 4–5, **proof of Thm 3.4 on p. 6, proof of Birkhoff on
pp. 6–7**, L¹-convergence half on p. 7.

**Skeleton:**
1. **Maximal lemma (Garsia's argument), p. 6.** M_n(Tω) ≥ S_j(Tω) for 1 ≤ j ≤ n, so
   X₀ ≥ max_{1≤j≤n} S_j − M_n∘T. Multiply by 1{M_n > 0}, integrate:
   E[X₀; M_n>0] ≥ E[M_n] − E[M_n∘T] = 0 since T is measure-preserving and M_n∘T ≥ 0.
   *Inputs: measure-preservation, monotonicity of the integral. That is all.*
   **Three lines. No covering lemma, no Hilbert space, no functional analysis.**
2. **Rescale**: apply step 1 to X'_n = X_n − λ to get the maximal inequality
   P{max_{j≤n} S_j/j > λ} ≤ (1/λ) E[X₀ ; max_{j≤n} S_j/j > λ] (Khoshnevisan p. 5).
3. **Birkhoff, upper bound.** Apply the maximal lemma to X'_n := X_n − E(X₀|ℐ) − ε
   over the invariant set A = {limsup S'_n/n > 0}; **dominated convergence** on
   M'_n ↑; the tower property gives E[X'₀ ; A] = E[E(X'₀|ℐ) ; A] = −ε P(A) ≥ 0,
   forcing P(A) = 0, i.e. limsup S_n/n ≤ E(X₀|ℐ) + ε a.s.
4. **Lower bound** by applying step 3 to −X_j. Done, a.s. convergence.
5. **L¹ convergence**: truncate X^ν = X 1{|X| ≤ ν}, apply steps 3–4 to the truncation,
   use **bounded convergence** on the truncated averages and the trivial L¹ bounds
   ‖T₂‖₁, ‖T₃‖₁ ≤ E{|X₀| ; |X₀| > ν} → 0.

**Only nontrivial input beyond MCT/DCT: conditional expectation E(·|ℐ), which is
Radon–Nikodym.** Your track builds Radon–Nikodym earlier (§1), so this is legal.
If you want to avoid even that, state the limit as "an invariant f* ∈ L¹ with
∫_A f* = ∫_A f for every invariant A" and get the ergodic case (limit = ∫ f dμ)
as the corollary.

**Source B — Petersen (after Keane)**, arXiv:math/0004070,
`https://arxiv.org/abs/math/0004070` (**200**), PDF `https://arxiv.org/pdf/math/0004070`.
One theorem, two pages, proves the maximal ergodic theorem and most of Birkhoff
simultaneously:

> **Theorem (p. 1).** Let λ be an invariant function on X with λ⁺ ∈ L¹. Then
> ∫_{{f* > λ}} (f − λ) ≥ 0, where f* = sup_N f*_N, f*_N = max_{1≤k≤N} A_k f.

Its proof (pp. 1–2) uses only: the string-decomposition combinatorial argument,
measure preservation, and **DCT** for the L^∞ → L¹ passage. Choosing λ = A − ε
(with A = limsup A_k f, an invariant function) yields Birkhoff. Also mirrored at
arXiv:math/0608251.

Third confirming source: **Walkden**, MATH41112/61112 Ergodic Theory, **Lecture 21
"Birkhoff's Ergodic Theorem"**,
`https://personalpages.manchester.ac.uk/staff/charles.walkden/ergodic-theory/lecture21.pdf`
(**200**) — §21.2 of that lecture builds conditional expectation from
**Radon–Nikodym (his Theorem 21.1)** and then proves Birkhoff. Exactly the
dependency order your track will have.

**Needs functional analysis: NO. Not even a normed space, beyond L¹ itself.**

### 4.2 (a) and (b): the mean ergodic theorem

**(a) What the standard proof needs.**

> **von Neumann mean ergodic theorem.** Let U be a unitary (or merely isometric)
> operator on a Hilbert space H. Then for every v ∈ H,
> (1/N) Σ_{n=0}^{N−1} U^n v → π(v) in norm, where π is the orthogonal projection
> onto H^U := {v : Uv = v}.

Source for the statement and Riesz's proof: **Tao, 254A Lecture 8**,
`https://terrytao.wordpress.com/2008/01/30/254a-lecture-8-the-mean-ergodic-theorem/`
(**200**), Theorem 2. Also PlanetMath `https://planetmath.org/vonneumannsergodictheorem`,
and Encyclopedia of Mathematics `https://encyclopediaofmath.org/wiki/Von_Neumann_ergodic_theorem`.

The standard proof uses, in order:
1. H is a **complete** inner-product space;
2. U is an **isometry**, hence ⟨Uf, Ug⟩ = ⟨f, g⟩ (polarisation);
3. the **orthogonal decomposition H = M ⊕ M^⊥** for the closed subspace
   M := closure span{Ug − g};
4. the identification M^⊥ = H^U;
5. π is the orthogonal projection onto H^U, and the averages converge to 0 on M
   (telescoping: (1/N)Σ U^n(Ug − g) = (U^N g − g)/N → 0) and are constant on H^U.

Tao's write-up phrases step 4 using **adjoints** (U*), which in the usual
development is built from Riesz-for-Hilbert. **That is the only appearance of
your forbidden list, and it is avoidable — see (b).**

**(b) YES — a hand-built version exists, and it is cheap. Here is the exact route.**

Replace step 4 by the following adjoint-free argument, which uses only the inner
product and the isometry property:

- If Uf = f then ⟨f, g − Ug⟩ = ⟨f,g⟩ − ⟨f,Ug⟩ = ⟨Uf,Ug⟩ − ⟨f,Ug⟩ = 0, so
  H^U ⊆ M^⊥.
- Conversely if f ⊥ M then in particular ⟨f, f − Uf⟩ = 0, so ‖f‖² = Re⟨f,Uf⟩,
  hence ‖f − Uf‖² = ‖f‖² − 2Re⟨f,Uf⟩ + ‖Uf‖² = ‖f‖² − 2‖f‖² + ‖f‖² = 0 (the last
  equality is exactly isometry), i.e. Uf = f. So M^⊥ ⊆ H^U.

**No adjoint, no Riesz representation, no Hahn–Banach.** What remains from
functional analysis is only step 3, the closed-subspace decomposition, and that
has an entirely elementary minimising-sequence proof:

> **Bass Proposition 19.8** (printed p. 186 = PDF p. 202): *Each non-empty closed
> convex subset E of H has a unique element of smallest norm.*
> Proof: parallelogram law gives ‖x−y‖² ≤ 2‖x‖² + 2‖y‖² − 4δ² on E; a
> norm-minimising sequence is therefore Cauchy; **completeness** gives the limit;
> the same inequality gives uniqueness.

> **Bass Lemma 19.9** (printed p. 187 = PDF p. 203) and the paragraph following it
> (printed p. 188 = PDF p. 204): for a closed subspace M ≠ H, M^⊥ contains a
> non-zero element, and **every x ∈ H is uniquely Px + Qx with Px ∈ M,
> Qx ∈ M^⊥** — i.e. H = M ⊕ M^⊥.

Source: Bass, `https://www.math.wustl.edu/~victor/classes/ma5051/rags100514.pdf`
(**200**), **§19.2, printed pp. 186–188 = PDF pp. 202–204**. Crucially, Bass's
Riesz representation theorem for Hilbert spaces is his **Theorem 19.10, which comes
after and depends on** this decomposition — so taking 19.8/19.9 and stopping is
exactly the "build only the projection you need" move you asked about.

**Total cost of the hand-built mean ergodic theorem in your library:**
Riesz–Fischer for L² (which you prove anyway, §11), Cauchy–Schwarz, the
parallelogram law (algebra), Bass 19.8 + 19.9 (about one page), and the
adjoint-free M^⊥ = H^U argument above (six lines). **You never touch
Riesz-for-Hilbert, Hahn–Banach, or Alaoglu.**

**Alternative that costs even less: derive L^p mean convergence from Birkhoff.**
Khoshnevisan's **Exercise 3.5 (N. Wiener), p. 6**: if X₀ ∈ L^p for p > 1 then
sup_n |S_n/n| ∈ L^p, and combined with Birkhoff (Thm 3.3) this gives
S_n/n → E(X₀|ℐ) **in L^p**. And Khoshnevisan's own proof of Thm 3.3 already
delivers **L¹** convergence directly (p. 7) with no Hilbert input at all. So:
*pointwise Birkhoff first, then mean convergence as a corollary by
truncation + dominated convergence* — this is a complete, Hilbert-free route to
the mean ergodic theorem in L^p for 1 ≤ p < ∞, and I recommend it as the primary
scaffold, with the von Neumann/L² statement as a second item proved by the
hand-built projection.

**Needs functional analysis:**
- Birkhoff: **NO**.
- Mean ergodic theorem via Birkhoff + truncation: **NO**.
- von Neumann's L² statement via hand-built projection: **NO** (needs
  completeness of L² + parallelogram law + Bass 19.8/19.9 only).
- von Neumann's L² statement as usually written (with adjoints): **YES**, and
  unnecessarily so.

---

## 5. Vitali covering lemma vs. Vitali covering theorem; Hardy–Littlewood; Lebesgue differentiation

### 5.1 The two statements, which are genuinely different theorems

**(A) Vitali covering LEMMA (finite, "3r" form).**

> **Tao, Lemma 1.6.22 (Vitali-type covering lemma).** Let B₁,…,B_n be a **finite**
> collection of open balls in ℝ^d (not necessarily disjoint). Then there is a
> disjoint subcollection B'₁,…,B'_m with ⋃_{i=1}^n B_i ⊆ ⋃_{j=1}^m 3B'_j; in
> particular m(⋃B_i) ≤ 3^d Σ_j m(B'_j).

Locator: **Tao, printed p. 148 = PDF p. 164**, proof pp. 148–149 = PDF pp. 164–165.
Tao's **Remark 1.6.23 (printed p. 150 = PDF p. 166)** explicitly notes that "the
actual Vitali covering lemma [Vi1908] is slightly different" — a useful citation
for your own remark distinguishing the two. Original: G. Vitali, *Sui gruppi di
punti e sulle funzioni di variabili reali*, Atti Accad. Sci. Torino **43** (1908).

**Proof:** a greedy algorithm — repeatedly take the largest ball disjoint from
those already chosen. Any B_i meets some chosen B'_j; take the first such j; then
radius(B_i) ≤ radius(B'_j) by the greedy choice, and the triangle inequality gives
B_i ⊆ 3B'_j. **Terminates in finitely many steps.**

**(B) Vitali covering THEOREM (fine covers, exhausts up to null sets).**

> **Bass, Lemma 14.16.** Let m be Lebesgue measure, E ⊆ ℝ measurable with
> m(E) < ∞, and 𝒢 a **Vitali cover** of E (for every x ∈ E and every ε > 0 there is
> G ∈ 𝒢 with x ∈ G and |G| < ε). Then for every ε > 0 there is a **finite**
> subcollection of **disjoint** intervals I₁,…,I_n ∈ 𝒢 with m(E \ ⋃_{i=1}^n I_i) < ε.

Locator: **Bass, §14.5, printed pp. 121–122 = PDF pp. 137–138**, with full proof.

**Proof:** greedy again but now **infinitely** — a_0 = sup{|I| : I ∈ 𝒢}, pick I₁
with |I₁| ≥ a_0/2, then a_1 = sup over 𝒢-intervals disjoint from I₁, pick I₂ with
|I₂| ≥ a_1/2, and so on; Σ|I_i| ≤ m(G) < ∞ forces a tail Σ_{i>N}|I_i| < ε/5; the
"5×" dilation argument shows the residual R = E \ ⋃_{i≤N} I_i sits inside
⋃_{i>N} I*_i, so m(R) ≤ 5 Σ_{i>N} |I_i| < ε.

**The essential difference to record in the scaffold:** (A) is a *finite,
choice-free, purely geometric* selection with a **dilation constant** in the
conclusion; (B) is an *infinite, recursive* selection whose conclusion is about
**almost-covering a set**, with no dilation constant, and it is the statement that
powers a.e.-differentiability of monotone functions.

### 5.2 Choice cost

Honest accounting, principle by principle:

| statement | choice used | citation |
|---|---|---|
| Vitali covering **lemma** (finite, 3r) | **none** — ZF; the algorithm terminates after ≤ n steps and each step is a max over a finite set | Tao, printed pp. 148–149 |
| "5r" covering lemma for an **arbitrary** family of balls of bounded radius | a **maximal disjoint subfamily** ⇒ **Zorn's lemma** in the usual write-up (avoidable in ℝ^d by a countable-scales-plus-DC argument) | standard; see e.g. Heil Theorem 7 "Simple Vitali Lemma", PDF p. 8 |
| Vitali covering **theorem** (fine cover) | the recursive greedy selection is a **dependent choice (DC)**; no more | Bass Lemma 14.16, printed p. 121 |
| any Lebesgue theory at all | **AC_ω is already unavoidable**: in the Feferman–Lévy model ℝ is a countable union of countable sets, so Lebesgue measure is not countably additive (§8.6) | §8.6 |

**Reverse-mathematics measurement (the precise, citable strength):**
D. K. Brown, M. Giusto, S. G. Simpson, *Vitali's Theorem and WWKL*, Arch. Math.
Logic **41** (2002), 191–206.
PDF `https://sgslogic.net/t20/papers/vitali.pdf` (**200**); journal
`https://link.springer.com/article/10.1007/s001530100100` (**200**).
Result: over RCA₀, a formal version of the **Vitali Covering Theorem is equivalent
to WWKL₀** (weak weak König's lemma), which is strictly between RCA₀ and WKL₀.

Constructive analysis: the Vitali covering theorem is studied in
H. Diener & I. Loeb / and in *The Vitali covering theorem in constructive
mathematics*, J. Logic & Analysis — note the journal host
`https://logicandanalysis.org/...` **did not respond (curl status 000)** on
2026-08-13; the ResearchGate record is
`https://www.researchgate.net/publication/307750182_The_Vitali_covering_theorem_in_constructive_mathematics`.
**Flagged as unverified.**

**What I could NOT find and am not asserting:** a theorem of the form "ZF alone
does not prove the Vitali covering theorem", i.e. an explicit ZF model where it
fails. The Feferman–Lévy observation makes the question ill-posed as usually
stated (measure theory itself collapses there), and over ZF + DC the standard
proofs go through unchanged. **Do not write "the Vitali covering theorem needs
DC" as a theorem; write "the standard proof uses DC, and its reverse-mathematical
strength is exactly WWKL₀ over RCA₀ (Brown–Giusto–Simpson)".**

### 5.3 Hardy–Littlewood maximal inequality with the exact constant

> **Tao, Theorem 1.6.20 (Hardy–Littlewood maximal inequality).** Let f : ℝ^d → ℂ be
> absolutely integrable and λ > 0. Then
> m({x : Mf(x) ≥ λ}) ≤ (C_d/λ) ∫_{ℝ^d} |f|, where
> Mf(x) := sup_{r>0} (1/m(B(x,r))) ∫_{B(x,r)} |f|.

Locator: **Tao, printed p. 148 = PDF p. 164**; proof printed p. 150 = PDF p. 166.

**The constant:**
- The proof via Lemma 1.6.22 gives **C_d = 3^d** (uncentred/centred balls, the
  dilation factor 3 raised to the dimension).
- **Tao, Exercise 1.6.19 (printed p. 151 = PDF p. 167): improve 3^d to 2^d** by
  noting the selected balls can be taken so that the dilation factor is 2+ε.
- The **Besicovitch** covering lemma gives a dimension-dependent constant
  independent of the dilation trick (Tao, Exercise 1.6.31 hint, printed p. 158).
- The **sharp** centred constant is known only for d = 1: A. Melas, *The best
  constant for the centered Hardy–Littlewood maximal inequality*, Ann. of Math.
  **157** (2003), 647–688 — cited in Tao's bibliography as [Me2003], PDF p. 259.
  The sharp constant is (11 + √61)/12 for d = 1. **Do not state 3^d as sharp.**

**Proof skeleton (Tao, printed p. 150):**
1. Let E_λ = {Mf ≥ λ}; by inner regularity it suffices to bound m(K) for K ⊆ E_λ
   compact.
2. Each x ∈ K has a ball B(x,r_x) with ∫_{B(x,r_x)}|f| ≥ λ m(B(x,r_x)).
3. Compactness ⇒ a **finite** subcover; apply the **finite Vitali lemma 1.6.22** to
   get a disjoint subfamily B'_1,…,B'_m with K ⊆ ⋃ 3B'_j.
4. m(K) ≤ Σ m(3B'_j) = 3^d Σ m(B'_j) ≤ (3^d/λ) Σ ∫_{B'_j}|f| ≤ (3^d/λ)‖f‖₁,
   the last step because the B'_j are **disjoint**.

**One-dimensional alternative with constant 1:** Tao's **Lemma 1.6.16 (one-sided
HL inequality), printed p. 141 = PDF p. 157**, proved by the **rising sun lemma**
(see §6), gives the sharp one-sided constant 1.

### 5.4 Lebesgue differentiation theorem from the maximal inequality

> **Tao, Theorem 1.6.11 / the d-dimensional Lebesgue differentiation theorem.** If
> f : ℝ^d → ℂ is locally absolutely integrable then for a.e. x,
> lim_{r→0} (1/m(B(x,r))) ∫_{B(x,r)} f(y) dy = f(x).

**Proof skeleton (the "density argument", Tao printed pp. 142–143 = PDF pp. 158–159):**
1. Fix λ > 0 and ε > 0. Choose g **continuous with compact support** with
   ‖f − g‖₁ ≤ ε. *Input:* density of C_c in L¹.
2. For g, the conclusion holds **everywhere** by plain continuity.
3. Write f = g + (f − g). The oscillation of the averages of f − g is controlled
   pointwise by M(f−g) + |f−g|.
4. Apply **Markov/Chebyshev** to |f−g| and the **Hardy–Littlewood inequality** to
   M(f−g): the bad set {limsup_{r→0} |avg_r f − f| > 3λ} has measure
   ≤ (1 + C_d)ε/λ.
5. Let ε → 0 with λ fixed, then λ → 0 along λ = 1/n and take a countable union.

**Needs functional analysis: NO** throughout §5. The only "functional analysis"
is the density of C_c in L¹, which is measure theory.

---

## 6. Monotone functions are differentiable a.e. — two routes

### 6.1 Route (a): Vitali covering + Dini derivates

**Statement and source:** Bass, §14.5, **Theorem 14.17 area, printed pp. 122–124 =
PDF pp. 138–140** (following Lemma 14.16 quoted in §5.1). Bass defines the four
derivates D⁺, D⁻, D_+, D_- on printed p. 122 and proves: *the set where any two
derivates differ is null*, by applying the Vitali covering theorem twice — once
with intervals on which the difference quotient exceeds R, once with intervals on
which it falls below r — and comparing total lengths to force m(E_{r,R}) ≤ (r/R)·
(something), then letting r/R → 1 through rationals.

### 6.2 Route (b): F. Riesz's rising sun lemma — full statement and complete proof

> **Tao, Lemma 1.6.17 (Rising sun lemma).** Let [a,b] be a compact interval and
> F : [a,b] → ℝ **continuous**. Then one can find an at most countable family of
> disjoint non-empty open intervals I_n = (a_n, b_n) in [a,b] with:
> (i) for each n, either F(a_n) = F(b_n), or else a_n = a and F(b_n) ≥ F(a_n);
> (ii) if x ∈ [a,b] lies in no I_n, then F(y) ≤ F(x) for all x ≤ y ≤ b.

**Source and locator:** **Tao, printed p. 143 = PDF p. 159**; **complete proof on
printed p. 144 = PDF p. 160**. Tao's Remark 1.6.18 gives the sunrise picture.

**Proof of the lemma (Tao, printed p. 144), in full:**
1. Let U = {x ∈ (a,b) : F(y) > F(x) for some x < y < b}. **Continuity of F ⟹ U is
   open**, so U = ⨆ I_n with endpoints outside U (Tao's Exercise 1.6.10: every open
   subset of ℝ is a countable disjoint union of open intervals with endpoints
   outside).
2. Conclusion (ii) is immediate from the definition of U.
3. For (i) with a_n ≠ a: a_n ∉ U gives F(y) ≤ F(a_n) for all y ≥ a_n; likewise
   F(y) ≤ F(b_n) for y ≥ b_n; hence F(b_n) ≤ F(a_n). For the reverse, suppose
   a_n < t < b_n with F(b_n) < F(t); put A = {s ∈ [t,b] : F(s) ≥ F(t)} (closed,
   contains t, misses b), t* = sup A ∈ [t,b) ⊆ I_n ⊆ U, so some y > t* has
   F(y) > F(t*) ≥ F(t) > F(b_n); but F(b_n) ≥ F(z) for all z ≥ b_n forces y ≤ b_n,
   so y ∈ A, contradicting t* = sup A. Continuity closes the case.
4. The case a_n = a is the same minus the upper bound.

**Derivation of monotone differentiability (Tao, printed pp. 156–160 = PDF pp. 172–176):**

> **Tao, Theorem 1.6.25 (monotone differentiation theorem), printed p. 156.** Any
> monotone F : ℝ → ℝ is differentiable almost everywhere.

1. **Lemma 1.6.26 (one-sided HL inequality for monotone F), printed p. 157 = PDF
   p. 173:** for F continuous monotone non-decreasing on [a,b],
   m({x : D⁺F(x) ≥ λ}) ≤ (F(b) − F(a))/λ.
   *Proof (printed p. 158):* apply the **rising sun lemma to G(x) = F(x) − λx**;
   {D⁺F > λ} ⊆ ⋃ I_n; rearrange G(b_n) ≥ G(a_n) into b_n − a_n ≤ (F(b_n) − F(a_n))/λ;
   telescope Σ(F(b_n) − F(a_n)) ≤ F(b) − F(a) using monotonicity.
   *(Without continuity the rising sun lemma is unavailable and one falls back to
   the Vitali lemma, giving constant C = 3, or Besicovitch, C = 2 — Tao's Exercise
   1.6.31.)*
2. λ → ∞ ⟹ all four Dini derivates are **finite a.e.**
3. **Lemma 1.6.28 ("E has density less than one"), printed p. 159 = PDF p. 175:**
   for E = E_{r,R} = {D⁺F > R > r > D_-F}, one has m(E ∩ [a,b]) ≤ (r/R)|b − a|, by
   applying the rising sun lemma **twice** (once to rx + F(−x) on [−b,−a] for the
   lower-left derivate, once to F(x) − Rx).
4. E has no point of density, so E is null (Lebesgue density theorem); take a
   countable union over rationals R > r > 0 to conclude D⁺F ≤ D_-F a.e., and by
   reflection the reverse. Hence all four derivates agree a.e. and are finite.
5. **Discontinuous F:** Lemma 1.6.31 (printed p. 161 = PDF p. 177) splits a
   monotone F into a **continuous** part plus a **pure jump** part; the jump part
   is differentiable a.e. with derivative 0 (countably many jumps); apply steps
   1–4 to the continuous part.

**Second source for the rising-sun route** (short paper, independent write-up):
M. W. Botsko, "The Lebesgue differentiation theorem via the rising sun lemma",
*Real Analysis Exchange* **29** (2003/04), 947–951,
`https://projecteuclid.org/journals/real-analysis-exchange/volume-29/issue-2/The-Lebesgue-differentiation-theorem-via-the-rising-sun/rae/1149698560.pdf` (**200**).
Also Tao's blog version, 245A Notes 5,
`https://terrytao.wordpress.com/2010/10/16/245a-notes-5-differentiation-theorems/` (**200**).

### 6.3 Which route is shorter and more self-contained?

**The rising sun route (b) is shorter and strictly more self-contained in ℝ¹, and
I recommend it as your primary.** Reasons, all checkable against the locators above:

- The rising sun lemma's **entire input is: continuity of F, and the structure
  theorem for open subsets of ℝ.** It uses **no covering lemma, no choice beyond
  ZF, and no measure theory at all** — the lemma is a statement about a continuous
  function, not about measure.
- It gives the **sharp constant 1** in the one-sided maximal inequality (Lemma
  1.6.26), where Vitali gives 3 and Besicovitch gives 2. Sharp constants make the
  telescoping in step 1 exact, which is what makes step 3's density bound come out
  as (r/R) rather than (Cr/R).
- The Vitali route (a) requires the **infinite** greedy selection (DC) and the 5×
  dilation bookkeeping before it can even start.
- **Cost of route (b):** you must handle the discontinuous case separately (Tao's
  Lemma 1.6.31 jump decomposition, ~1 page). Route (a) handles it uniformly.
  That is the only respect in which route (a) is cheaper.
- **Neither route generalises to ℝ^d as stated** — the rising sun lemma is
  intrinsically one-dimensional (Tao says so at printed p. 148: "that lemma relied
  heavily on the ordered nature of ℝ"). For ℝ^d you need Vitali/Besicovitch. So
  if your scaffold wants the d-dimensional Lebesgue differentiation theorem
  anyway, you will build Vitali regardless, and the marginal cost of route (a)
  drops. **Suggested scaffold: build both — rising sun for the ℝ¹ monotone
  theorem (with the sharp constant), Vitali for the ℝ^d maximal function.** Tao
  does exactly this, which is evidence it is the right decomposition.
  Multidimensional rising sun lemmas do exist (Korenovskii, Proc. AMS **133**
  (2005), `https://www.ams.org/journals/proc/2005-133-05/S0002-9939-04-07653-1/S0002-9939-04-07653-1.pdf`,
  and arXiv:math/0308211) but are not a shortcut.

### 6.4 The inequality ∫_a^b F′ ≤ F(b) − F(a), exactly

> **Tao, Proposition 1.6.37 (Upper bound for second fundamental theorem).** Let
> F : [a,b] → ℝ be **monotone non-decreasing** (so F′ is defined a.e., unsigned and
> measurable). Then **∫_{[a,b]} F′(x) dx ≤ F(b) − F(a)**. In particular F′ is
> absolutely integrable.

**Locator: Tao, printed p. 167 = PDF p. 183**; proof printed pp. 167–168 = PDF
pp. 183–184.

**Proof (3 steps):** extend F constantly outside [a,b]; the Newton quotients
f_n(x) = n(F(x + 1/n) − F(x)) converge a.e. to F′ (by Theorem 1.6.25); **Fatou's
lemma** gives ∫F′ ≤ liminf ∫ f_n; and ∫_{[a,b]} f_n = n(∫_{[a+1/n, b+1/n]} F −
∫_{[a,b]} F) ≤ F(b) − F(a) by monotonicity.

**The Cantor-function witness of strictness.** Let φ : [0,1] → [0,1] be the
Cantor–Lebesgue function (devil's staircase): continuous, monotone
non-decreasing, φ(0) = 0, φ(1) = 1, and **φ′ = 0 a.e.** (it is constant on each
of the countably many removed middle-thirds intervals, whose union has full
measure 1). Hence

**∫_0^1 φ′ = 0 < 1 = φ(1) − φ(0).**

Strict inequality, by exactly 1. Source for the Cantor function's role: **Heil,
printed p. 49 = PDF p. 23**: *"Considering the Cantor–Lebesgue function, we see
that we cannot extend Corollary 20 to functions that are differentiable at almost
every point. Indeed, the Cantor–Lebesgue function φ is continuous and
differentiable a.e., but it is not absolutely continuous."* Tao's §1.6.4 makes
the same point around Proposition 1.6.37. Equality in the display holds **iff F
is absolutely continuous** — that is the sharp FTC, §7.

**Needs functional analysis: NO** anywhere in §6.

---

## 7. Banach–Zarecki (Banach–Zaretsky)

### 7.1 Exact statement

> **Heil, Theorem 17 (Banach–Zaretsky Theorem).** If f : [a,b] → ℝ, then the
> following three statements are equivalent.
> **(a)** f ∈ AC[a,b].
> **(b)** f is **continuous**, f ∈ **BV**[a,b], and (A ⊆ [a,b], |A| = 0 ⟹ |f(A)| = 0).
> **(c)** f is **continuous**, f is **differentiable a.e.**, f′ ∈ **L¹**[a,b], and
> (A ⊆ [a,b], |A| = 0 ⟹ |f(A)| = 0).

The condition "|A| = 0 ⟹ |f(A)| = 0" is **Luzin's property (N)**.

**Source:** C. Heil, "Absolute Continuity and the Banach–Zaretsky Theorem",
`https://heil.math.gatech.edu/papers/abscont_typosmarked.pdf` (**200**).
Locator: **§3.4, Theorem 17, printed p. 45 = PDF p. 19**; **complete proof printed
pp. 45–47 = PDF pp. 19–21**; corollaries §3.5, printed pp. 47–49 = PDF pp. 21–23;
the FTC (Theorem 23) printed p. 50 = PDF p. 24.

Second source with a different (Radon–Nikodym-based) proof:
A. Mahdipour-Shirayeh, H. Eshraghi, "A new proof for the Banach–Zarecki theorem:
a light on integrability and continuity", arXiv:1206.2602,
`https://arxiv.org/abs/1206.2602` (**200**).
A vector-valued generalisation with a full proof:
`https://www.ams.org/journals/proc/2005-133-12/S0002-9939-05-07959-1/S0002-9939-05-07959-1.pdf`
(**403** to automated fetch; bibliographic data only: Proc. AMS **133** (2005),
"The Banach–Zarecki theorem for functions with values in ..."). Encyclopedia of
Mathematics has a Luzin-N-property entry at
`https://encyclopediaofmath.org/wiki/Luzin-N-property` (**502** on 2026-08-13,
site was down — **unverified**).

### 7.2 Skeleton and every input

Heil proves the cycle **(a) ⇒ (b) ⇒ (c) ⇒ (a)**.

**(a) ⇒ (b)** *(printed p. 45 = PDF p. 19; completed p. 46 = PDF p. 20).*
1. AC ⟹ continuous and BV: standard.
2. Property (N): given |A| = 0 with A ⊆ (a,b) and ε > 0, take δ from the AC
   definition; take an open U ⊇ A with |U| < |A| + δ = δ; write U = ⨆_j (a_j, b_j).
3. On each [a_j, b_j], f attains a max and a min (**continuity + compactness**),
   at points c_j ≤ d_j; by the **intermediate value theorem**,
   |f([a_j,b_j])|_e = |f(d_j) − f(c_j)|.
4. Σ|d_j − c_j| ≤ Σ(b_j − a_j) = |U| < δ, so **absolute continuity** gives
   Σ|f(d_j) − f(c_j)| < ε; subadditivity of exterior measure yields |f(A)|_e < ε.
   *Inputs: AC definition, IVT, extreme value theorem, subadditivity of exterior
   Lebesgue measure, structure of open subsets of ℝ.*

**(b) ⇒ (c)** *(printed p. 46 = PDF p. 20; one line).* Heil's Corollary 6: BV ⟹
differentiable a.e. with f′ ∈ L¹. *Input: **the monotone differentiation theorem***
(Heil's Theorem 5, which he explicitly does **not** prove, citing the Vitali
Covering Lemma route — see §6 above; you will have proved it) **plus the Jordan
decomposition** BV = difference of two monotone increasing functions (Heil
Theorem 3, printed p. 31 = PDF p. 5).

**(c) ⇒ (a) — this is the direction you asked about, "what does (N) ⇒ AC need"**
*(printed pp. 46–47 = PDF pp. 20–21).*
1. Let D = points of differentiability, Z = [a,b] \ D with |Z| = 0, so D is
   measurable.
2. For an arbitrary subinterval [c,d] ⊆ [a,b], **continuity + IVT** give that
   f([c,d]) contains an interval of length |f(d) − f(c)|, so
   |f(d) − f(c)| ≤ |f([c,d])|_e.
3. Split [c,d] = B ⊔ A with B = [c,d] ∩ D, A = [c,d] \ D (so |A| = 0). By
   **subadditivity**, |f([c,d])|_e ≤ |f(B)|_e + |f(A)|_e.
4. **|f(A)|_e = 0 by property (N)** — this is the *only* place (N) is used, and it
   is exactly what makes the direction work.
5. **|f(B)|_e ≤ ∫_B |f′|** by Heil's **Growth Lemma II (Lemma 16, printed p. 44 =
   PDF p. 18)**: if f is measurable and differentiable at every point of a
   measurable set B, then |f(B)|_e ≤ ∫_B |f′|. **This is the engine of the
   direction.**
6. Hence |f(d) − f(c)| ≤ ∫_c^d |f′| for **every** subinterval.
7. **Absolute continuity of the integral**: f′ ∈ L¹ ⟹ ∀ε ∃δ: |E| < δ ⟹ ∫_E|f′| < ε.
   Given nonoverlapping [a_j,b_j] with Σ(b_j − a_j) < δ, sum step 6:
   Σ|f(b_j) − f(a_j)| ≤ ∫_{⋃[a_j,b_j]} |f′| < ε. So f ∈ AC.

**Complete input list for (N) ⇒ AC:** continuity, IVT, subadditivity of exterior
Lebesgue measure, **Growth Lemma II** (which itself needs only a covering
argument on the sets where the difference quotient is bounded), f′ ∈ L¹, and
**absolute continuity of the Lebesgue integral**. Note that BV is *not* needed in
this direction — it is replaced by "differentiable a.e. with f′ ∈ L¹".

**Payoff corollaries you get almost free** (Heil §3.5): Corollary 18 (AC functions
map null sets to null sets and measurable sets to measurable sets); **Corollary 19**
(differentiable everywhere + f′ ∈ L¹ ⟹ AC — the result Folland calls "highly
nontrivial", Heil printed p. 49); **Corollary 20** (continuous + differentiable off
a countable set + f′ ∈ L¹ ⟹ AC); **Corollary 21** (AC + singular ⟹ constant, with
a much simpler proof than the usual Vitali one); and then the **sharp FTC**
(Theorem 23, printed p. 50), which is exactly your `rem-ftc-absolutely-continuous`
placeholder.

**Needs functional analysis: NO.**

---

## 8. Non-measurable sets and the choice cost

### 8.1 The Vitali set: which choice principle, exactly

**Construction.** On [0,1] define x ~ y iff x − y ∈ ℚ. The equivalence classes are
the cosets (x + ℚ) ∩ [0,1]; there are continuum-many of them and **each is
countable**. A **Vitali set** V picks exactly one representative from each class.
Then [0,1] ⊆ ⋃_{q ∈ ℚ ∩ [−1,1]} (V + q) ⊆ [−1,2], the translates are pairwise
disjoint, and translation invariance + countable additivity give a contradiction
whether m(V) = 0 or m(V) > 0.

**So the choice used is: a choice function on a family of continuum-many
countable sets of reals.** It is **not** full AC on an arbitrary family, and it is
**not** countable choice — the index family is uncountable. This is the precise
answer to your question.

**Countable choice is provably not enough** (two independent statements, one of
which needs no large cardinal):

1. **From Solovay** (needs an inaccessible): in Solovay's model ZF + DC holds —
   and DC implies AC_ω — and **every** set of reals is Lebesgue measurable, so
   there is no Vitali set. Hence ZF + DC (a fortiori ZF + AC_ω) does not prove a
   Vitali set exists, relative to Con(ZFC + inaccessible). §8.2.
2. **From Shelah, with no large cardinal at all**: Con(ZF) ⟹ Con(ZF + DC +
   "every set of reals has the Baire property"). A Vitali set **cannot have the
   Baire property**: if V had it and were non-meagre, the Pettis/Piccard theorem
   makes V − V a neighbourhood of 0, hence containing a nonzero rational —
   impossible since distinct elements of V differ by an irrational; and if V were
   meagre then ℝ = ⋃_{q∈ℚ}(V+q) would be meagre, contradicting **Baire category**.
   So in Shelah's Baire model there is no Vitali set. §8.3.
   *(The Pettis-theorem step is standard; see `https://en.wikipedia.org/wiki/Property_of_Baire`
   for the statement of Pettis/Piccard, and Oxtoby, Measure and Category, ch. 9,
   for the classical write-up. I did not verify a specific published lemma
   asserting "no Vitali set has the Baire property" — **flagged**, though the
   argument is three lines and standard.)*

**What the Vitali set does follow from, strictly below AC:** BPI ⟹ Hahn–Banach ⟹
a non-Lebesgue-measurable set exists (§8.5). Also, a free ultrafilter on ω,
regarded as a subset of 2^ω, is non-measurable (Sierpiński).

**Original:** G. Vitali, *Sul problema della misura dei gruppi di punti di una
retta*, Bologna, 1905.

### 8.2 Solovay's model — exact statement including the inaccessible hypothesis

R. M. Solovay, *A model of set-theory in which every set of reals is Lebesgue
measurable*, **Ann. of Math. (2) 92 (1970), 1–56**.
Full text (JSTOR scan, publicly hosted): `https://people.math.ethz.ch/~fdalio/ZKmodel.pdf`
(**200**). JSTOR stable URL `https://www.jstor.org/stable/1970696` (**403** to
automated fetch, works in a browser).

Verbatim from the paper's opening (p. 1):

> "We show that the existence of a non-Lebesgue measurable set cannot be proved in
> Zermelo-Frankel set theory (ZF) if use of the axiom of choice is disallowed. In
> fact, even adjoining an axiom DC to ZF, which allows countably many consecutive
> choices, does not create a theory strong enough to construct a non-measurable
> set."

> **THEOREM 1 (p. 1).** Suppose that there is a transitive ∈-model of **ZFC + I**
> [where **I** = "There is an inaccessible cardinal"]. Then there is a transitive
> ∈-model of **ZF** in which the following propositions are valid.
> (1) The principle of dependent choice (= DC).
> (2) Every set of reals is **Lebesgue measurable** (LM).
> (3) Every set of reals has the **property of Baire**.
> (4) Every uncountable set of reals contains a **perfect subset** (P).
> (5) [a uniformisation statement: for {A_x : x ∈ ℝ} an indexed family of nonempty
> sets of reals, there are Borel h₁, h₂ : ℝ → ℝ with {x : h₁(x) ∉ A_x} null and
> {x : h₂(x) ∉ A_x} of first category].

Footnote 1 on the same page gives Solovay's own definition: *"A cardinal κ is
inaccessible if it is regular, uncountable, and for α < κ, 2^α < κ."*

Solovay's **Remark 1 (p. 1)** already flags the sharpness question:
*"It is known that the theory ZFC + I has a transitive ∈-model if ZF + DC + P
does… Thus the hypothesis of Theorem 1 … cannot be weakened."* — i.e. the
inaccessible is necessary for the **perfect set property** already; Shelah settled
it for **measurability**.

### 8.3 Shelah's sharpening — exact statements from the primary source

S. Shelah, *Can you take Solovay's inaccessible away?*, **Israel J. Math. 48
(1984), 1–47**.
Full text (author's archive): `https://shelah.logic.at/files/95333/176.pdf` (**200**);
publisher `https://doi.org/10.1007/BF02760522` (**200**).

Verbatim from the Introduction (pp. 1–2):

> "Solovay, in his celebrated work [7], proves the consistency of 'ZF + DC + every
> set of reals is measurable and has the Baire property'. He started from a model
> with an inaccessible cardinal, so CON(ZF) was not sufficient for his proof. We
> prove that **the inaccessible is necessary for the measurability**; in fact, in
> ZF + DC we can prove:
> (a) if there is a set of ℵ₁ reals, then there is a non-(Lebesgue)-measurable set
> of reals.
> (b) If for some real a, ℵ₁^{L[a]} = ℵ₁, then some Σ¹₃ set of reals is not
> (Lebesgue) measurable.
> On the other hand, we show that **for the Baire property the inaccessible is not
> necessary** (i.e., every model of ZFC has a generic extension in which every set
> of reals definable with a real and an ordinal as parameters has the Baire
> property)."

And in §5 (p. 18):

> **5.1. MAIN THEOREM.** If every **Σ¹₃** set of reals is measurable, then **ℵ₁ is
> an inaccessible cardinal in L**.
> *(Remark (1): "The theorem is proved in ZFC, of course.")*

> **5.1B. THEOREM. (ZF + DC)** If there is a set of ℵ₁ reals, then there is a
> non-measurable set of reals.

Also on p. 18, Shelah lists the **equiconsistent** theories:
> (1) ZFC + there is an inaccessible cardinal.
> (2) ZFC + every Σ¹₃ set of reals is measurable.
> (3) [ZF + every set of reals definable with real and ordinal parameters is measurable]
> (4) **ZF + the axiom of countable choice + every set of reals is measurable.**
> (5) **ZF + DC + every set of reals is measurable.**
> *(Shelah: "Solovay proved (1) ⟹ (2),(3),(4),(5); our main theorem is (2) ⟹ (1)…")*

Note item **(4)** — it answers your countable-choice question head on: **ZF + AC_ω +
"every set of reals is measurable" is equiconsistent with an inaccessible**, so
AC_ω is compatible with "no non-measurable set" exactly to the extent that an
inaccessible is consistent.

**The form you asked for — "every set of reals is Lebesgue measurable ⟹ ω₁ is
inaccessible in L" — is a corollary of 5.1B, not a verbatim theorem in the paper.**
The derivation: if ω₁ is *not* inaccessible in L, then ω₁ = ω₁^{L[a]} for some
real a; inside L[a] the reals have order type ω₁ under the canonical wellorder, so
there is a set of ℵ₁ reals; then 5.1B (in ZF + DC) produces a non-measurable set.
**I am flagging that I derived this connection rather than quoting it, and you
should either cite it as I have (5.1B + the L[a] argument) or cite a secondary
source that states the packaged form.**

Companion paper — the accessible proof:
J. Raisonnier, *A mathematical proof of S. Shelah's theorem on the measure problem
and related results*, Israel J. Math. **48** (1984), 48–56,
`https://link.springer.com/article/10.1007/BF02760523` (**200**). This is the paper
to cite if you want a readable route to Shelah's measure theorem: it gives a
direct construction ("the Raisonnier filter") rather than the forcing iteration.

Overview note, freely readable: S. Unger, *A brief account of Solovay's model*,
`https://www.math.toronto.edu/sunger/solovay-model.pdf`.

### 8.4 "ZF + DC alone cannot produce a non-measurable set" — the precise statement

**Correct form:** *If ZFC + "there is an inaccessible cardinal" is consistent, then
ZF + DC + "every set of reals is Lebesgue measurable" is consistent; in particular
ZF + DC does not prove the existence of a non-measurable set.* (Solovay Thm 1.)

**Incorrect form to avoid:** "ZF + DC cannot prove a non-measurable set exists,
full stop." By Shelah 5.1B/5.1, that consistency statement **cannot be proved from
Con(ZF) alone** — it *implies* Con(ZFC + inaccessible). So the large-cardinal
hypothesis is not a defect of Solovay's proof; it is provably necessary. Write the
hypothesis into the statement.

**Contrast with Baire category:** for the Baire property no large cardinal is
needed — Con(ZF) ⟹ Con(ZF + DC + "every set of reals has the Baire property")
(Shelah §7–§8, pp. 33–44). **This asymmetry between measure and category is
itself worth a `rem-` item**; Shelah remarks on it explicitly (p. 2: "Note also
that here measure and category are not dual, as usual").

### 8.5 Choice cost of Banach–Tarski and Hausdorff

**Hausdorff paradox.** F. Hausdorff, *Bemerkung über den Inhalt von Punktmengen*,
Math. Ann. **75** (1914), 428–433. Statement: S² minus a countable set D can be
partitioned into three sets A, B, C such that A, B, C, and B ∪ C are all pairwise
congruent by rotations. Consequence: **no finitely additive, rotation-invariant
measure on all subsets of S² with total measure 1 exists.** Choice cost: a choice
of orbit representatives for the action of a free group of rank 2 in SO(3) — full
AC on an uncountable family, same shape as the Vitali choice.

**Banach–Tarski.** S. Banach, A. Tarski, *Sur la décomposition des ensembles de
points en parties respectivement congruentes*, **Fund. Math. 6 (1924), 244–277**.
Open full text: `https://eudml.org/doc/214280` (**200**). English translation:
`https://link.springer.com/chapter/10.1007/978-1-4939-1474-6_6`.
Statement: any two bounded subsets of ℝ³ with nonempty interior are
**equidecomposable** by finitely many pieces and rigid motions; in particular a
solid ball splits into finitely many pieces reassembling into two balls of the
same radius. (Five pieces suffice — Robinson 1947.)

**Its exact choice cost — this is sharper than "it needs AC":**
- **BPI (Boolean prime ideal / ultrafilter lemma) ⟹ Hahn–Banach ⟹ Banach–Tarski.**
  J. Pawlikowski, *The Hahn–Banach theorem implies the Banach–Tarski paradox*,
  Fund. Math. **138** (1991), 21–22. Open: `https://eudml.org/doc/211871` (**200**,
  title verified as exactly that).
- **Hahn–Banach ⟹ a non-Lebesgue-measurable set exists.** M. Foreman, F. Wehrung,
  *The Hahn–Banach theorem implies the existence of a non-Lebesgue measurable set*,
  Fund. Math. **138** (1991), 13–19. Open: `https://eudml.org/doc/211870` (**200**).
- Consequently **Banach–Tarski is strictly weaker than AC** (it follows from BPI,
  which does not imply AC), and **Hahn–Banach is not available in Solovay's or
  Shelah's models** — a fact worth recording since your `functional-analysis`
  track will build Hahn–Banach later.
- Sharper still: R. Dougherty, M. Foreman, *Banach–Tarski decompositions using sets
  with the Baire property*, J. Amer. Math. Soc. **7** (1994), 75–124 — the pieces
  can be taken to have the Baire property, so Banach–Tarski does **not** contradict
  "every set has the Baire property". **I did not fetch this paper; bibliographic
  data only — flagged.**

### 8.6 The choice cost of measure theory itself — worth an early remark item

**Feferman–Lévy model:** starting from a model of ZFC + GCH and collapsing every
ℵ_n to ℵ₀, one gets a model of ZF in which **ℝ is a countable union of countable
sets** (and AC_ω fails badly). In that model, if Lebesgue measure were countably
additive it would make ℝ null — so **σ-additivity of Lebesgue measure is not
provable in ZF**.
Reference: S. Feferman, A. Lévy, *Independence results in set theory by Cohen's
method II* (abstract), Notices Amer. Math. Soc. **10** (1963), 593. Standard
textbook accounts: T. Jech, *The Axiom of Choice*, ch. 10; A. Kanamori, "Cohen
and set theory", `https://math.bu.edu/people/aki/14.pdf` (**200**).
*(I verified the model's properties and the Notices citation via secondary
sources; the 1963 Notices abstract itself I did not retrieve — **flagged**.)*

**Consequence for your track:** every theorem in this whole subject silently
assumes at least AC_ω. Say so once, early, in a `rem-` item, and then stop
apologising for it.

**Needs functional analysis:** for §8 the question is inverted — Hahn–Banach is
what *causes* non-measurability, so none of §8's statements may be proved from
functional analysis in your order. **NO functional analysis is needed for the
Vitali construction, the Hausdorff paradox, or Banach–Tarski from AC.**

---

## 9. Fubini–Tonelli failures

### 9.1 (a) σ-finiteness is needed for Tonelli: the diagonal under Lebesgue × counting

**Exact statement.** Let X = [0,1] with the Borel σ-algebra and Lebesgue measure
λ; let Y = [0,1] with the **power set** and **counting measure** μ. Let
Δ = {(x,x) : x ∈ [0,1]}, which **is** in the product σ-algebra. Then 1_Δ ≥ 0 is
product-measurable, but

- ∫_X (∫_Y 1_Δ dμ) dλ = ∫_X 1 dλ = **1**
- ∫_Y (∫_X 1_Δ dλ) dμ = ∫_Y 0 dμ = **0**

**Hypothesis that fails: counting measure on [0,1] is not σ-finite** (the
continuum is not a countable union of finite sets). Tonelli, not Fubini, is what
breaks — the integrand is unsigned, so no integrability hypothesis is at issue.

**Sources:**
- **Bass, Exercise 11.8, printed p. 89 = PDF p. 105** — states it exactly, in two
  parts: (1) show Δ ∈ ℬ × ℬ, (2) show the iterated integrals differ, and asks why
  this is consistent with Fubini.
- `https://www.mathcounterexamples.net/counterexamples-around-fubini-s-theorem/`
  (**200**) — Counterexample 1, with both iterated integrals computed and the
  failed hypothesis named: *"the counting measure on I = [0,1] is not σ-finite"*.
- Hunter ch.5, `https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes_ch5.pdf`
  (**200**), Theorem 5.18 states Fubini for **σ-finite** spaces, so the hypothesis
  is visible in the theorem you would cite.

### 9.2 (b) integrability is needed for Fubini: (x² − y²)/(x² + y²)²

**Exact statement.** On [0,1]² with two-dimensional Lebesgue measure let
f(x,y) = (x² − y²)/(x² + y²)² (with f(0,0) undefined, a null set). Then both
iterated integrals exist as ordinary Lebesgue integrals and

**∫₀¹ (∫₀¹ f(x,y) dy) dx = π/4**  and  **∫₀¹ (∫₀¹ f(x,y) dx) dy = −π/4.**

*(Check: ∂/∂y [ y/(x²+y²) ] = (x²−y²)/(x²+y²)², so the inner y-integral is
1/(1+x²), whose integral over [0,1] is π/4; f is antisymmetric under
(x,y) ↦ (y,x), which flips the sign.)*

**Hypothesis that fails: f is not integrable** — ∫_{[0,1]²} |f| = +∞. Both
measure spaces here **are** σ-finite, so this is genuinely the *other* hypothesis.

**Sources:**
- `https://www.mathcounterexamples.net/counterexamples-around-fubini-s-theorem/`
  (**200**) — Counterexample 2, with π/4 and −π/4 and the failed hypothesis stated.
- `https://www.planetmath.org/CounterExampleOfFubinisTheoremForTheLebesgueIntegral`.
- **Bass, Example 11.4, printed p. 87 = PDF p. 103** gives an equivalent but
  cleaner-to-verify witness: g_i continuous with support in (1/(i+1), 1/i) and
  ∫g_i = 1, and f(x,y) = Σ_i [g_i(x) − g_{i+1}(x)] g_i(y); then the two iterated
  integrals are **1 and 0**, and ∫∫|f| = ∞. **This is arguably the better item to
  mint** — the sum is locally finite (at most two nonzero terms at each point), so
  every step is elementary, whereas (x²−y²)/(x²+y²)² requires an antiderivative
  computation. Mint Bass 11.4 as the theorem and (x²−y²)/(x²+y²)² as the
  companion example, or vice versa; both are legitimate.
- Bass **Exercise 11.9, printed p. 89 = PDF p. 105** gives a third, purely
  combinatorial one on ℝ² with values in {−1, 0, 1}.

### 9.3 (c) Sierpiński's CH example — a non-measurable subset of the square with iterated integrals 0 and 1

**Exact statement.** Assume the **continuum hypothesis**. Then there is a set
E ⊆ [0,1]² such that:
- for every y ∈ [0,1], the section E^y = {x : (x,y) ∈ E} is **countable**, hence
  Lebesgue measurable with measure 0;
- for every x ∈ [0,1], the section E_x = {y : (x,y) ∈ E} is the complement of a
  countable set, hence measurable with measure 1;
- consequently ∫₀¹(∫₀¹ 1_E(x,y) dx) dy = **0** and ∫₀¹(∫₀¹ 1_E(x,y) dy) dx = **1**;
- and therefore **E is not Lebesgue measurable in [0,1]²** (Fubini for the
  completed product would force the iterated integrals to agree).

**The CH hypothesis, precisely.** CH is used exactly once: to well-order [0,1] in
order type ω₁, so that the strict initial segment {x : x ≺ y} is **countable** for
every y. Set E = {(x,y) : x ≺ y}. Under ¬CH the same construction with a
well-ordering of order type ω₁ produces a set of reals of size ℵ₁ < 𝔠 and the
argument yields something different. **CH is a genuine hypothesis, not a
convenience.**

**Citation.** W. Sierpiński, *Sur un problème concernant les ensembles mesurables
superficiellement*, **Fund. Math. 1 (1920), 112–115**.
Open full text: `https://eudml.org/doc/212592` (**200**). The paper's result, as
EUDML summarises it: there is a plane set having measure zero on every line but
which is not measurable superficially (i.e. as a subset of the plane).

**Related, and a good remark:** the converse direction is also consistent —
C. Freiling, *A consistent Fubini–Tonelli theorem for nonmeasurable functions*,
Illinois J. Math. **24** (1980),
`https://projecteuclid.org/journals/illinois-journal-of-mathematics/volume-24/issue-3/A-consistent-Fubini-Tonelli-theorem-for-nonmeasurable-functions/10.1215/ijm/1256047607.pdf`
— under Freiling's axiom of symmetry (which contradicts CH) no such example
exists. So "iterated integrals can disagree for a nonmeasurable set" is
**independent of ZFC**. **I did not fetch Freiling's paper — bibliographic data
only, flagged.**

**A ZFC-provable cousin you can mint without CH:** **Bass, Example 11.5, printed
pp. 87–88 = PDF pp. 103–104.** Take X = the set of countable ordinals with the
countable/co-countable σ-algebra and μ(A) = 0 if A countable, 1 if A uncountable;
f(x,y) = 1 iff x ≤ y. Then ∫∫f dy dx = 1 and ∫∫f dx dy = 0. **No CH is needed**
(ω₁ exists in ZFC), and the resolution is that f is **not product-measurable**.
This is the cheaper item; mint it as the theorem and put Sierpiński's Lebesgue-on-
the-square version in a CH-flagged remark.

**Needs functional analysis: NO** anywhere in §9.

---

## 10. Completion subtleties in product measures

### 10.1 The product of two complete measures need not be complete — stated correctly

**Exact statement.** Even when (X, 𝒜, μ) and (Y, ℬ, ν) are **complete**,
(X × Y, 𝒜 ⊗ ℬ, μ × ν) is in general **not** complete.

**Witness (Bass, printed p. 86 = PDF p. 102):** take (X, 𝒜, μ) = (Y, ℬ, ν) =
Lebesgue measure on [0,1] with the **Lebesgue** σ-algebra ℒ. Let A ⊆ [0,1] be
non-Lebesgue-measurable and E = A × {1/2}. Then:
- E ⊆ [0,1] × {1/2}, which has (μ × ν)-measure 0, so E is a **null set**;
- but E ∉ ℒ ⊗ ℒ, because every section of a set in the product σ-algebra is
  measurable (Bass Lemma 11.1) and the 1/2-section of E is A.

**Witness (Hunter ch.5, Example 5.20, PDF p. 9):** *"If N ⊂ ℝ is a
non-Lebesgue-measurable subset of ℝ, then {0} × N does not belong to the product
σ-algebra ℒ(ℝ) ⊗ ℒ(ℝ) on ℝ² = ℝ × ℝ, since every section of a set in the product
σ-algebra is measurable. It does, however, belong to ℒ(ℝ²), since it is a subset
of the set {0} × ℝ of two-dimensional Lebesgue measure zero, and Lebesgue measure
is complete."*

**Sources:** Bass **§11.2 end, printed p. 86 = PDF p. 102** (**200**);
Hunter ch.5 **Example 5.20, PDF p. 9** (**200**).

**The phrasing trap you flagged.** "Lebesgue × Lebesgue on ℝ² is not complete" is
the *correct* statement about **ℒ(ℝ) ⊗ ℒ(ℝ)**; what is *false* is any suggestion
that ℒ(ℝ²) — two-dimensional Lebesgue measure, which is by construction the
Carathéodory σ-algebra of the planar outer measure — fails to be complete. **ℒ(ℝ²)
is complete.** The two are different σ-algebras, and that is the whole content of
§10.2. Write the item as: *the product σ-algebra of two complete σ-algebras need
not be complete; ℒ(ℝ) ⊗ ℒ(ℝ) is the example, and its completion is ℒ(ℝ²).*

### 10.2 ℒ(ℝ^m) ⊗ ℒ(ℝ^n) ⊊ ℒ(ℝ^{m+n}), and the completion identity

**Exact statement.** The inclusion ℒ(ℝ^m) ⊗ ℒ(ℝ^n) ⊆ ℒ(ℝ^{m+n}) is **strict**, and

**ℒ(ℝ^{m+n}) = the completion of ℒ(ℝ^m) ⊗ ℒ(ℝ^n) with respect to (m_m × m_n)*.**

**Source:** Hunter ch.5, PDF p. 9 (Example 5.20 and the sentence following it,
which states the completion identity; note Hunter's typographic rendering of the
completion is easy to misread — the displayed formula is the completed product,
not a bare equality of product σ-algebras). Also **Theorem 5.14 and the paragraph
before it, PDF p. 7**: *"the σ-algebra of Carathéodory measurable sets associated
with (μ ⊗ ν)* is strictly larger than the product σ-algebra. For example, if ℝ^m
and ℝ^n are equipped with Lebesgue measure defined on their Borel σ-algebras, then
the [Carathéodory σ-algebra on the product is] ℒ(ℝ^{m+n}), whereas the product
σ-algebra is the Borel σ-algebra ℬ(ℝ^{m+n})."*

Bass makes the same point at **printed p. 87 = PDF p. 103**: *"If we have
μ₁,…,μ_n all equal to m, Lebesgue measure on ℝ with the Lebesgue σ-algebra ℒ, then
the completion of (ℝⁿ, ℒ × ⋯ × ℒ, m × ⋯ × m) is called n-dimensional Lebesgue
measure."* — i.e. n-dimensional Lebesgue measure **is defined as** the completion.
And Bass's **Exercise 11.5, printed p. 88 = PDF p. 104** is a nice exercise
depending on the distinction.

**Strictness proof:** the {0} × N example of §10.1 — strictly more sets on the
right. **Cardinality argument as an alternative:** |ℬ(ℝ)| = 𝔠 while |ℒ(ℝ)| = 2^𝔠,
and a product σ-algebra is generated by rectangles, so counting also separates the
two.

### 10.3 Borel(ℝ^m) ⊗ Borel(ℝ^n) = Borel(ℝ^{m+n}) for second-countable spaces, but NOT in general

**The positive statement.**

> **Hunter ch.5, Proposition 5.3, PDF p. 3.** Suppose ℝ^m, ℝ^n are equipped with
> their Borel σ-algebras. Then ℬ(ℝ^m) ⊗ ℬ(ℝ^n) = ℬ(ℝ^{m+n}); by repeated
> application, the Borel σ-algebra on ℝ^n is the n-fold product of the Borel
> σ-algebra on ℝ.

**Why it works, and the exact hypothesis.** The general theorem is: *if X and Y are
**second-countable** topological spaces then ℬ(X) ⊗ ℬ(Y) = ℬ(X × Y).* The ⊆
inclusion is always true (projections are continuous, hence Borel). The ⊇
inclusion needs every open set of X × Y to be a **countable** union of open
rectangles — which is exactly second countability (Hunter's proof cites his
Proposition 2.21: the rectangles generate the Borel σ-algebra). Separable metric
⟹ second countable, so this covers Polish spaces.

**The failure in general — the Nedoma pathology.** Let X be a discrete space with
|X| > 𝔠 (e.g. X = 2^ℝ with the discrete topology). Then:
- X × X is discrete, so the **diagonal** Δ = {(x,x)} is closed, hence
  Δ ∈ ℬ(X × X) = 𝒫(X × X);
- but **Δ ∉ ℬ(X) ⊗ ℬ(X)**. Reason: every member of a product σ-algebra
  𝒜 ⊗ ℬ lies in σ(ℰ) for some **countable** family ℰ of measurable rectangles;
  such a σ-algebra has at most 𝔠 many sets and its atoms partition X into at most
  𝔠 classes; if Δ were in it, every pair of distinct points of X would be
  separated by one of countably many rectangle-sides, forcing |X| ≤ 𝔠 —
  contradiction (Cantor).
So **ℬ(X) ⊗ ℬ(X) ⊊ ℬ(X × X)** whenever |X| > 𝔠 and X is discrete.

This is often called **Nedoma's pathology** (J. Nedoma, "Note on generalized random
variables", 1957). It is the standard obstruction to product-measurability of the
group operation on a non-metrisable compact group. Reachable secondary sources
stating and using it:
- A. Jamneshan, T. Tao, *An uncountable Moore–Schmidt theorem*, arXiv:1911.12033,
  `https://arxiv.org/pdf/1911.12033` (**200**) — §1 discusses the failure and the
  cardinality argument;
- A. Jamneshan, T. Tao, *Foundational aspects of uncountable measure theory*,
  arXiv:2010.00681, `https://arxiv.org/pdf/2010.00681` (**200**);
- Tao's blog tag `https://terrytao.wordpress.com/tag/sigma-algebras/` (**200**).
**I verified these papers exist and are reachable; I did not extract a numbered
lemma from either — flagged as partially verified.** Nedoma's original 1957 note I
did not locate online — **flagged**.

**Needs functional analysis: NO** anywhere in §10.

---

## 11. Riesz–Fischer, a.e.-convergent subsequences, separability

### 11.1 Completeness of L^p (Riesz–Fischer) and the a.e.-convergent subsequence

**Exact statement.** For 1 ≤ p ≤ ∞ and any measure space, L^p is a **Banach space**
(complete under ‖·‖_p). Moreover, for 1 ≤ p < ∞, **if f_n → f in L^p then some
subsequence f_{n_k} → f pointwise a.e.** — indeed the standard proof of
completeness *produces* the a.e.-convergent subsequence, which is why the two
statements belong on the same page.

**Sources:**
- **Bass, §15.2 "Completeness", printed pp. 134–136 = PDF pp. 150–152** (**200**);
  Exercise 15.1, printed p. 141 = PDF p. 157, is the L^∞ case.
- Tao, §1.7 / the L^p discussion; Axler MIRA Chapter 7 (Theorem 7.24, "L^p(μ) is a
  Banach space").
- ETSU Gardner (Royden–Fitzpatrick based), §7.3–7.4,
  `https://faculty.etsu.edu/gardnerr/5210/notes/7-4.pdf` (**200**).

**Skeleton (the standard "rapidly Cauchy subsequence" argument):**
1. Given (f_n) Cauchy in L^p, extract n_1 < n_2 < ⋯ with
   ‖f_{n_{k+1}} − f_{n_k}‖_p ≤ 2^{−k}. *(Countable choice.)*
2. Let g = Σ_k |f_{n_{k+1}} − f_{n_k}|. By **Minkowski + monotone convergence**,
   ‖g‖_p ≤ Σ 2^{−k} < ∞, so g < ∞ a.e.
3. Hence the telescoping series converges absolutely a.e.; define f as its sum.
   **This is the a.e.-convergent subsequence.**
4. **Fatou** gives ‖f − f_{n_k}‖_p → 0, and the Cauchy property upgrades this to
   ‖f − f_n‖_p → 0.
5. p = ∞ separately: the exceptional sets {|f_n − f_m| > ‖f_n − f_m‖_∞} are
   countably many null sets; off their union the convergence is uniform.

**Needs functional analysis: NO.** ("Banach space" is the *conclusion*, not an
input.)

### 11.2 Separability of L^p(ℝ^n) for 1 ≤ p < ∞

**Exact statement.** For 1 ≤ p < ∞ and E ⊆ ℝ^n measurable, **L^p(E) is separable**.
More generally, if Ω is a **second-countable** topological space with a
σ-finite outer-regular Borel measure, then L^p(μ) is separable for 1 ≤ p < ∞.

**Source:** ETSU Gardner, "Section 7.4. Approximation and Separability",
`https://faculty.etsu.edu/gardnerr/5210/notes/7-4.pdf` (**200**) — the separability
theorem with proof (Royden–Fitzpatrick Theorem 7.11 / Proposition 7.12 numbering).

**Skeleton:**
1. Simple functions with finite-measure support are **dense** in L^p (p < ∞).
2. Each such simple function is approximated in L^p by a **step function** on
   finitely many intervals — this uses **outer regularity** of Lebesgue measure to
   replace a finite-measure set by a finite union of intervals up to ε.
3. Step functions with **rational** coefficients and **rational** endpoints form a
   **countable** dense set.
4. p < ∞ is essential at step 2: replacing χ_A by a step function changes the
   function on a set of small measure, which is L^p-small only for p < ∞.

### 11.3 Non-separability of L^∞

**Exact statement.** L^∞[0,1] (and ℓ^∞, and L^∞(ℝ^n)) is **not separable**.

**Proof (one paragraph, entirely self-contained).** For t ∈ [0,1] set
f_t = χ_{[0,t)}. For s ≠ t, ‖f_s − f_t‖_∞ = **1**, since f_s − f_t is ±1 on an
interval of positive measure. So {B(f_t, 1/2)}_{t ∈ [0,1]} is an **uncountable**
family of pairwise disjoint open balls; any dense set must meet each, hence is
uncountable.

**Sources:** ETSU Gardner §7.4 as above (**200**); expository write-ups
`https://mathproblems123.wordpress.com/2011/01/08/l-infinity-is-not-separable/` and
`https://mathprelims.wordpress.com/2008/07/16/linfty-is-not-separable/`.
Bass Chapter 15 exercises cover the same ground.

**Consequence to record:** L^∞ non-separable + L¹ separable is a second, elementary
route to "(L^∞)* ≇ L¹" **for the ℓ^∞ case** — but note carefully that
non-separability of L^∞ alone does **not** prove (L^∞)* ⊋ L¹ without further
argument (a dual of a separable space can be non-separable — that is exactly
(L¹)* = L^∞). What it *does* immediately give is that **L¹ is not reflexive**
whenever L^∞ is non-separable and L¹ is separable, because the bidual would have
to be separable. That is a clean, Hahn–Banach-free statement — but stating
"reflexive" at all presumes the canonical embedding into the bidual, so if the
functional-analysis track is not yet built, phrase it as a remark rather than a
theorem.

**Needs functional analysis: NO** for §11.1–§11.3 as stated.

---

## 12. Egorov and Lusin — exact hypotheses

### 12.1 Egorov

**Exact statement (finite-measure form).**

> **Tao, Exercise 1.4.31 / Theorem 1.5.9 (Egorov's theorem), printed p. 96 / p. 123
> = PDF p. 112 / p. 139.** Let (X, ℬ, μ) be a **finite** measure space and let
> f_n → f pointwise a.e. Then for every ε > 0 there is a measurable set A with
> μ(A) ≤ ε such that f_n → f **uniformly** on X \ A.

**Exact statement (ℝ^d form, infinite measure allowed — note the weakening).**

> **Tao, Theorem 1.3.26 (Egorov's theorem), printed p. 75 = PDF p. 91.** Let
> f_n : ℝ^d → ℂ be measurable and converge pointwise a.e. to f, and let ε > 0. Then
> there is a Lebesgue measurable set A of measure at most ε such that f_n converges
> **locally uniformly** to f outside A.

**The hypothesis and the counterexample.** Uniform (as opposed to *locally*
uniform) convergence genuinely needs finite measure:

> **Tao, Remark 1.3.27, printed p. 76 = PDF p. 92.** *"A basic example here is the
> moving bump example f_n := 1_{[n, n+1]} on ℝ, which 'escapes to horizontal
> infinity'. This sequence converges pointwise (and locally uniformly) to the zero
> function f ≡ 0. However, for any 0 < ε < 1 and any n, we have |f_n(x) − f(x)| > ε
> on a set of measure 1, namely on the interval [n, n+1]. Thus, if one wanted f_n
> to converge uniformly to f outside of a set A, then that set A has to contain a
> set of measure 1. In fact, it must contain the intervals [n, n+1] for all
> sufficiently large n and must therefore have **infinite measure**."*

Tao then states the exact repair: *"if all the f_n and f were supported on a fixed
set E of finite measure … one can recover uniform convergence (and not just
locally uniform convergence) outside of a set of arbitrarily small measure."*

**Proof skeleton (Tao, printed pp. 75–76):**
1. Reduce to everywhere convergence by absorbing a null set into A.
2. E_{N,m} := {x : |f_n(x) − f(x)| > 1/m for some n ≥ N} decreases in N with
   ⋂_N E_{N,m} = ∅.
3. **Downward monotone convergence** applies only to sets of finite measure, so
   intersect with B(0,R): μ(E_{N,m} ∩ B(0,m)) → 0. **This is the exact point at
   which finiteness of the measure is spent.**
4. Choose N_m with μ(E_{N_m,m} ∩ B(0,m)) ≤ ε 2^{−m}; put
   A = ⋃_m E_{N_m,m} ∩ B(0,m); countable subadditivity gives μ(A) ≤ ε.
5. Off A, on each ball of integer radius, convergence is uniform.

**Additional literature on the infinite-measure situation** (for a remark item):
"On Egorov's Theorem for Infinite Measure", arXiv:2309.08608,
`https://arxiv.org/abs/2309.08608` (**200**) — characterises when the uniform
conclusion survives. **I verified reachability only; I did not read it — flagged.**

**Needs functional analysis: NO.**

### 12.2 Lusin — and exactly which regularity

**Exact statement on ℝ^d (no extra hypothesis needed, because Lebesgue measure is
already Radon).**

> **Tao, Theorem 1.3.28 (Lusin's theorem), printed p. 77 = PDF p. 93.** Let
> f : ℝ^d → ℂ be absolutely integrable and ε > 0. Then there is a Lebesgue
> measurable set E ⊆ ℝ^d of measure at most ε such that the **restriction of f to
> ℝ^d \ E is continuous on that set**.

**The caution Tao states immediately after (printed p. 77), which you must
reproduce verbatim in the item or readers will misread it:** *"this theorem does
not imply that the unrestricted function f is continuous on ℝ^d \ E"* — 1_ℚ is the
witness: it is nowhere continuous as a function on ℝ \ E for any finite-measure E,
yet its restriction to ℝ \ ℚ is identically 0.

**Hypothesis relaxations (Tao, Exercise 1.3.23, printed p. 77):** "absolutely
integrable" may be weakened to locally absolutely integrable, and then to merely
**measurable and a.e. finite** (truncate f, or replace it by f/(1+|f|²)^{1/2}).

**Exact statement in the general (LCH) setting — this is where regularity is a
real hypothesis.**

> **Tao 245B Notes 12, Theorem 18.** Let X be **locally compact Hausdorff and
> σ-compact**, μ a **Radon measure** on X, and f : X → ℝ measurable with support of
> finite measure. Then for every ε > 0 there is g ∈ C_c(X → ℝ) agreeing with f
> outside a set of measure at most ε.

The commonly cited stronger form (Rudin RCA Thm 2.24): if μ is a **complete**
measure arising from RMK (hence outer regular on all measurable sets, inner
regular on opens and on finite-measure sets), f is measurable, A has μ(A) < ∞ and
f = 0 off A, then there is g ∈ C_c(X) with μ({f ≠ g}) < ε, and one may take
‖g‖_∞ ≤ ‖f‖_∞.

**Which regularity, precisely.** Lusin's proof needs, in order:
1. **inner regularity by compact sets** (to replace a finite-measure set by a
   compact subset up to ε) — this is the load-bearing one;
2. **outer regularity by open sets** (to get the open hull for Urysohn);
3. **Urysohn's lemma** (to build the C_c function that interpolates);
4. **Egorov** or the density of C_c in L¹, depending on the route (Tao's ℝ^d proof
   at printed p. 77 goes via density of C_c in L¹ + Markov's inequality + the fact
   that a uniform limit of continuous functions is continuous — the shortest
   route, and the one your library can take once §3 is in place).

**So: "Lusin needs a Radon measure" means precisely — locally finite, outer
regular on the σ-algebra, inner regular by compacts on sets of finite measure.**
Dropping inner regularity kills it: on a non-inner-regular Borel measure there
need be no compact set on which to build the Urysohn function. On ℝ^d and on any
σ-compact metric LCH space the hypothesis is automatic, so state the theorem for
Lebesgue measure and put the LCH/Radon version in the RMK page's neighbourhood.

**Needs functional analysis: NO.**

---

## Summary verdicts table

| # | topic | needs functional analysis? | what exactly would be needed if you took the other route |
|---|---|---|---|
| 1 | Radon–Nikodym (Bass 13.4, Hahn + sup) | **NO** | von Neumann's route needs **Riesz representation for Hilbert spaces** |
| 2 | (L^p)* ≅ L^q, 1 ≤ p < ∞, μ σ-finite (Bass 15.11) | **NO** | none — Hahn–Banach is not used at all |
| 2′ | (L^∞)* ⊋ L¹ | **YES** | **Hahn–Banach / BPI**; and by Solovay this is unavoidable |
| 3 | RMK on LCH (Rudin/Espejo route) | **NO** | Urysohn (topology, already published) — not functional analysis |
| 4 | Birkhoff via Hopf/Garsia maximal lemma | **NO** | nothing |
| 4′ | mean ergodic theorem, L^p, via Birkhoff + truncation | **NO** | nothing |
| 4″ | von Neumann MET in L², hand-built projection | **NO** | only completeness of L² + parallelogram law + Bass 19.8/19.9 |
| 4‴ | von Neumann MET as usually written (adjoints) | **YES** (avoidably) | Riesz-for-Hilbert to define U* |
| 5 | Vitali lemma / theorem, HL maximal, Lebesgue differentiation | **NO** | nothing |
| 6 | monotone differentiability (rising sun **or** Vitali) | **NO** | nothing |
| 7 | Banach–Zarecki | **NO** | nothing |
| 8 | non-measurable sets, Solovay, Shelah, Banach–Tarski | **NO** | Hahn–Banach appears only as a *cause* of non-measurability |
| 9 | Fubini–Tonelli failures | **NO** | nothing |
| 10 | product completion, Borel product, Nedoma | **NO** | nothing |
| 11 | Riesz–Fischer, separability | **NO** | nothing |
| 12 | Egorov, Lusin | **NO** | nothing |

**Headline:** nothing in your remit forces functional analysis. The only two places
it appears are (i) the von Neumann *proof* of Radon–Nikodym, which you should
demote to a remark, and (ii) the genuine failure (L^∞)* ⊋ L¹, which you should
state as a `proved_here: false` remark with Hahn–Banach named as the missing input
and a forward pointer to the `functional-analysis` track.

---

## Report: verified / not verified / blockers

### Verified by opening the source and reading the page

- **Bass** — Radon–Nikodym Ch. 13 (Lemma 13.3, Thm 13.4, Thm 13.5); L^p Ch. 15
  standing σ-finiteness hypothesis, Thm 15.8, Cor 15.9, Prop 15.10, Thm 15.11;
  Riesz representation Ch. 17 (§17.1 partitions of unity, Thm 17.3 with all five
  proof steps, Remark 17.1 on Urysohn); Ch. 14 §14.5 (Vitali covering theorem
  Lemma 14.16 with full proof, the four derivates); Ch. 11 (product σ-algebras,
  the completeness failure on printed p. 86, Examples 11.4 and 11.5, Exercises
  11.8/11.9); Ch. 19 §19.2 (Prop 19.8, Lemma 19.9, the M ⊕ M^⊥ paragraph, and
  that Thm 19.10 comes *after* them). Page numbers above are transcribed from the
  extracted text, not inferred.
- **Tao** — rising sun Lemma 1.6.17 with full proof; Lemma 1.6.16 one-sided HL;
  Thm 1.6.20 HL with C_d and Exercise 1.6.19 improving 3^d → 2^d; Lemma 1.6.22
  finite Vitali with full proof and Remark 1.6.23 distinguishing it from Vitali
  1908; Thm 1.6.25 monotone differentiation, Lemma 1.6.26, Lemma 1.6.28, Lemma
  1.6.31; Prop 1.6.37 (∫F′ ≤ F(b) − F(a)) with its Fatou proof; Thm 1.3.26 Egorov
  with proof, Remark 1.3.27 moving-bump counterexample verbatim, Thm 1.3.28 Lusin
  with proof and the "restriction ≠ unrestricted" caution; the table of contents
  for §1.6 and §1.7.
- **Shelah 1984** — Introduction (a)/(b), §5 Main Theorem 5.1, Theorem 5.1B, and
  the five equiconsistent theories on p. 18, read off the author-archived PDF.
- **Solovay 1970** — abstract paragraph and Theorem 1 (1)–(5) with the inaccessible
  hypothesis and Solovay's own definition of inaccessible, read off the
  ETH-hosted scan.
- **Petersen (arXiv:math/0004070)** — the maximal ergodic theorem statement and
  its two-page proof, read in full; DCT is the only analytic input.
- **Khoshnevisan** — Thm 3.3 Birkhoff, Thm 3.4 Hopf maximal lemma, Garsia's
  three-line proof, the full Birkhoff derivation and the L¹ half, Exercise 3.5
  (Wiener) for L^p.
- **Heil** — Thm 17 Banach–Zaretsky verbatim, the complete (a)⇒(b)⇒(c)⇒(a) proof,
  Growth Lemma II's role, Corollaries 18–21, the Cantor–Lebesgue remark, Thm 23 FTC.
- **Espejo** — Thm 1.1 verbatim, the five-step LCH proof structure with the exact
  places Urysohn (Thm 4.4) and the partition-of-unity lemma (4.5) are invoked, and
  the fact that his Hahn–Banach proof is the *separate* X = [a,b] section.
- **Hunter ch.5** — Prop 5.3 (Borel product on ℝ^m × ℝ^n), Thm 5.14, Thm 5.18
  Fubini with σ-finiteness, Example 5.20 verbatim and the completion identity.
- **Nagy §6** — Thm 6.3 (no σ-finiteness for 1 < p < ∞), Thm 6.4 (decomposability
  for L¹), Example 6.1 (uncountable set with counting measure).
- **Tao 245B-12** — Thm 24 (RMK, LCH + σ-compact, unique Radon) and Thm 18 (Lusin).
- **HTTP statuses** — all 36 URLs in the tables and body were probed with
  `curl -sIL` on 2026-08-13; every status quoted is observed, not assumed.

### Cited but NOT fully verified (bibliographic data only) — treat as `sources_checked` gaps

1. **Tachtsis, Proc. AMS 147 (2019) 4029–4038** ("The Urysohn Lemma is independent
   of ZF + Countable Choice"). AMS PDF and DOI both return **403** to automated
   fetch. I have title/journal/volume/pages from two independent indexes (AMS
   listing, JSTOR 26771649) but **have not read the abstract or theorem**. The
   companion arXiv:2103.05139 **is** reachable and does state that DC implies
   Urysohn for U-normal generalized topological spaces.
2. **"ω₁ is inaccessible in L" packaged form of Shelah's theorem** — I quote
   Shelah 5.1 (Σ¹₃ version) and 5.1B verbatim and then *derive* the packaged form
   via the L[a] argument. The derivation is standard but is **mine, not a quote**.
3. **"A Vitali set has no Baire property"** — the three-line Pettis/Baire argument
   is standard and I reproduce it, but I did not verify a specific published
   numbered lemma. (Oxtoby, *Measure and Category*, ch. 9 is the usual home.)
4. **Freiling, Illinois J. Math. 24 (1980)** — consistency of a Fubini–Tonelli
   theorem for nonmeasurable functions. URL located, paper not fetched.
5. **Dougherty–Foreman, JAMS 7 (1994) 75–124** — Banach–Tarski with Baire-property
   pieces. Not fetched.
6. **Feferman–Lévy, Notices AMS 10 (1963) 593** — the 1963 abstract itself not
   retrieved; the model's properties verified only through secondary sources
   (Kanamori's "Cohen and set theory", reachable at
   `https://math.bu.edu/people/aki/14.pdf`).
7. **Nedoma 1957** original note — not located online. The pathology itself is
   stated and used in the two reachable Jamneshan–Tao papers, but I did not
   extract a numbered lemma from either.
8. **The Vitali covering theorem in constructive mathematics** (J. Logic &
   Analysis) — the journal host `logicandanalysis.org` **did not respond
   (curl 000)** on 2026-08-13.
9. **Encyclopedia of Mathematics Luzin-N-property page** — **HTTP 502**, site down
   at the time of checking.
10. **AMS Proc. 133 (2005)** vector-valued Banach–Zarecki — **403**.
11. **Melas, Ann. of Math. 157 (2003)** sharp HL constant — cited from Tao's
    bibliography entry [Me2003] (which I *did* read on Tao PDF p. 259), not from
    the paper.
12. **arXiv:2309.08608** (Egorov for infinite measure) — reachability verified,
    content not read.

### What I could not find at all

- **No theorem asserting the Vitali covering theorem is unprovable in ZF.** The
  question is arguably ill-posed (Feferman–Lévy destroys countable additivity
  first). The best available precise measurement is the reverse-mathematical one:
  Vitali Covering Theorem ≡ WWKL₀ over RCA₀ (Brown–Giusto–Simpson, **verified
  reachable at `https://sgslogic.net/t20/papers/vitali.pdf`, status 200**).
- **No choice-free witness for (L^∞[0,1])* ⊋ L¹[0,1]**, and by §8 there provably
  cannot be one in ZF + DC.
- **No published statement of the exact choice strength of the RMK theorem
  itself** (as opposed to of Urysohn's lemma). I give the honest decomposition
  instead: DC suffices; AC_ω provably does not supply the Urysohn input; and the
  metric case needs neither.

### Blockers

**None.** No permission was required or requested at any point. Three sources
(AMS PDFs, JSTOR, logicandanalysis.org) refuse automated fetches or were down;
in every such case I found an alternative host, an alternative source, or flagged
the gap above rather than asserting from memory.
