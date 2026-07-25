# PART II — SUPPLEMENT, CORRECTIONS, AND EXPANDED INVENTORY

## 0. STATUS AND CORRECTIONS TO PART I

**Corrections (all verified against fetched primary text):**

1. **Abbott §6.7 is the Weierstrass Approximation Theorem**, and §5.4 is the continuous nowhere-differentiable function. Part I had this right; flagging it because one intermediate source claimed otherwise.
2. **Lebl does not literally define log as ∫₁ˣ dt/t.** Prop. 5.4.1 asserts the *existence and uniqueness* of L : (0,∞)→ℝ with L(1)=0, L′(x)=1/x, strictly increasing and bijective, with L(xy)=L(x)+L(y); exp := L⁻¹. The integral is the construction, the characterization is the definition. §5.4 explicitly requires the optional §§3.5, 3.6 and 4.4.
3. **Gelbaum & Olmsted chapter counts confirmed exactly** as I reported (11 / 27 / 13 / 14 / 9 / 29 / 12 / 41 / 19 / 24 / 9 / 22 / 9 ≈ **239 numbered counterexamples**). Warning worth recording: **the epdf.pub and Google Books renderings of that TOC are corrupted** — they invent a chapter "Improper Integrals" and relocate Metric Spaces. Use the KSU PDF.
4. **Berkeley Math 104 is not uniformly Rudin.** Goodman (F22) uses **Ross, *Elementary Analysis: The Theory of Calculus***; Fisher (Sm24) uses Rudin; Ogus's H104 used Pugh. Stanford Math 115 likewise reports Ross.
5. **MIT 18.100C is the Communication-Intensive 15-unit variant** of Option B (three extra units for written and oral presentation), not a content variant. Rudin 3e, with Apostol and Spivak recommended.
6. **Rudin's FTC 6.21 requires F differentiable at every point of the *closed* interval**; **Lebl 5.3.1 requires only continuity on [a,b] plus differentiability on the *open* (a,b)** — strictly weaker at the endpoints. **Bartle & Sherbert 7.3.1 is stated with a finite exceptional set E** from the outset. These three are genuinely different theorems and should be separate library items.
7. **My §12 form 6 (countable exceptional set) has a name**: it is **Botsko's theorem**, and continuity of F is indispensable there.

**Still outstanding:** the exponential/π/trigonometry specialist has not returned. §§9–11 of Part I therefore rest on my own verbatim extraction of Rudin Ch.8, Lebl §5.4/§11.4, Tao II §4.5–4.7, Cambridge IA §6, and the Wikipedia characterization pages. The new source map below materially strengthens that section anyway (see §2(a)).

---

## 1. SOURCES NOW ADDED TO THE MAP

Retrieved first-hand since Part I:

**Courses.** MIT 18.100B **Spring 2025** (Colding; no textbook, self-contained notes; 23 lectures ending on **Picard–Lindelöf**) and **Fall 2010** (Rudin 3e). MIT **18.100C** Fall 2012 (Seidel; Rudin 3e + Apostol/Spivak; 24 untitled lecture summaries). MIT **18.101** Fall 2005 (Guillemin; **Munkres *Analysis on Manifolds* main text, Spivak supplementary**; 38 lectures — multivariable calculus for the first half, then tensors/forms/Stokes/degree theory/manifolds). **Harvard Math 112**: Lurie syllabus (Rudin; metric spaces → limits/continuity → sequences/series → real and complex numbers → differentiation and integration) and **Auroux S19**, whose schedule is keyed to exact Rudin page ranges and ends on **exp/log/trig (p.172–184) and Fourier series (p.185–191)**. **Princeton MAT 320** = Royden–Fitzpatrick chs. 1–6 (Lebesgue measure and integration, L^p) — it is the *measure-theory* course, and MAT 425 is its harder twin; **MAT 325** is Fourier series and PDE. **Berkeley Math 104** Goodman F22 15-week schedule keyed to Ross §§1–34. **Stanford Math 115** catalog entry (ExploreCourses XML). **UChicago MATH 20300/20400/20500 Analysis in Rn I–II–III** plus the accelerated 20310/20410/20510, IBL 20320, invitation-only **20700 Honors Analysis in Rn**, and the feeder **15910 Introduction to Proofs in Analysis**. **Cambridge IA Analysis I and IB Analysis II** official Schedules with lecture allocations. **Oxford Prelims M2 Analysis I/II/III** full synopses.

**Books.** Full section-level TOCs now in hand for **Munkres *Analysis on Manifolds*** (§§1–41), **Apostol *Mathematical Analysis* 2e** (with §§ expanded for **Ch.6 Functions of Bounded Variation and Rectifiable Curves** and **Ch.9 Sequences of Functions**), **Zorich I** (incl. **Appendix E Riemann–Stieltjes Integral, Delta Function, and Generalized Functions**) and **Zorich II** (chs. 9–19 incl. asymptotic expansions and Laplace's method), **Hairer & Wanner *Analysis by Its History*** (chs. I–IV), **Bartle & Sherbert** (11 chapters + 5 appendices), **Spivak *Calculus* 4e** and ***Calculus on Manifolds***, and a machine-extracted **per-chapter named-theorem list for Rudin** with theorem numbers.

**Two structural findings worth acting on:**

- **Hairer & Wanner is the odd one out and the most useful for §§9–10.** exp, log, trig and **π are all constructed in Chapter I**, historically, *before* any rigorous foundation (which arrives in Chapter III). I.3 "Logarithms and Areas" derives natural logarithms from the **area of the hyperbola**; I.4 has an explicit subsection **"Computation of Pi"**; I.5 gives **Euler's product for the sine function**. It also inverts the usual presentation by putting the FTC in **III.6 "The Fundamental Theorem of Differential Calculus"**, inside the *differentiability* section rather than the integration section III.5.
- **Bartle & Sherbert's construction of exp is Picard iteration, not power series.** Thm 8.3.1 builds E from E₁(x)=1+x, Eₙ₊₁(x)=1+∫₀ˣEₙ, giving E′=E, E(0)=1; log is its inverse; then 8.3.10 *defines* xᵃ := e^{a ln x} and proves consistency with the rational-power definition of §5.6. **π := 2γ** where Lemma 8.4.9 locates γ, the smallest positive root of C, in **(√2, √3)**, and shows 2γ is the smallest positive root of S. This is a **fifth distinct route** to exp/π beyond the four in Part I §9.4.

---

## 2. TOPIC-BY-TOPIC ADDITIONS

### (a) §§9–11 (exp/log/π/trig): the definitive source table, corrected

| Source | exp and log | sin, cos, π |
|---|---|---|
| **Rudin Ch.8** | Power series E(z)=Σzⁿ/n! on ℂ (8.6); log := E⁻¹; L(y)=∫₁ʸdt/t is *derived* (eq. 39); x^α := E(αL(x)) | C, S := real/imaginary parts of E(ix); **π := 2x₀, x₀ the smallest positive zero of C** (8.7). Explicitly "without any appeal to the geometric notion of angle" |
| **Lebl** | **Vol I §5.4, characterization-first**: Prop 5.4.1 gives the unique L with L(1)=0, L′=1/x, bijective, L(xy)=L(x)+L(y); exp := L⁻¹ | Deferred to **Vol II §11.4**: E on ℂ, shown to agree with the real exp; §11.4.2 "Trigonometric functions and π"; §11.4.3 unit circle and polar coordinates |
| **Tao** | **Analysis I** does *only* real exponentiation a^x via rationals (§5.6 Part I, §6.7 Part II); exp/log proper are **Analysis II §4.5**, after formal power series and real-analytic functions | **Analysis II §4.7**, after §4.6 "A Digression on Complex Numbers" |
| **Bartle & Sherbert** | **§8.3, Picard iteration** (Thm 8.3.1); xᵃ := e^{a ln x} at 8.3.10 with consistency proof | **§8.4; π := 2γ**, γ the smallest positive root of C, located in (√2,√3) |
| **Spivak *Calculus*** | **Ch.18**, log as an integral, exp as its inverse — *after* the FTC (Ch.14) | **Ch.15** trig via area; **Ch.16 "π is irrational"**; **Ch.21 "e is Transcendental"** |
| **Hairer & Wanner** | **Ch. I.2–I.3**, historical, from the binomial theorem and the area of the hyperbola — long before rigor | **I.4** with "Computation of Pi"; **I.5** Euler's formula, "A New View on Trigonometric Functions", **Euler's product for sine** |
| **Zorich** | Used early, justified at **§5.5.3** "Euler's Formula and the Connections Among the Elementary Functions" and **§5.6.5** "The number e and exp x revisited"; redone by power series in **Vol II Appendix A.2** | Same §5.5.3 / Vol II Appendix A.2.1 |
| **Cambridge IA §6** | Complex power series; exp, trig, hyperbolic all at once; e^{z+w}=e^ze^w by Cauchy product | Same section; the starred result is the direct differentiability proof inside the circle of convergence |
| **Abbott / Pugh** | No dedicated construction; power/Taylor series (Abbott §§6.5–6.6) as running examples | Not titled topics |

So the field splits **five ways**: power-series-first (Rudin, Cambridge, Tao II, Lebl vol II), integral-first (Spivak, Lebl vol I), characterization/ODE-first (Lebl Prop 5.4.1), **Picard-iteration** (Bartle & Sherbert), and **historical/area-of-hyperbola** (Hairer & Wanner). Tao's a^x-via-rationals is orthogonal to all five and is the only rigorous elementary route to real exponents that does not presuppose exp.

**Additional π-relevant items now confirmed:** Spivak devotes a whole chapter to **π irrational** and another to **e transcendental**; Hairer & Wanner I.5 has **Euler's product for sin**; Zorich II §17.3 has the **Beta–Gamma connection**, giving the Γ(1/2)=√π route; Rudin 8.18–8.20 gives Γ(x+1)=xΓ(x), the **Bohr–Mollerup theorem**, and the Beta–Gamma relation.

### (b) §1 Sequences and series — additions

**New theorems:** Abel's summation formula in **integral form** (with A(t)=Σ_{0≤n≤t}aₙ and φ∈C¹: `Σ_{x<n≤y}aₙφ(n) = A(y)φ(y) − A(x)φ(x) − ∫ₓʸ A(u)φ′(u)du`; the Riemann–Stieltjes generalization needs only φ continuous) · **Kronecker's lemma** · **Frobenius' theorem** ((C,1) ⟹ Abel, converse false, so **Abel is strictly stronger than Cesàro**; (C,α) ⟹ (C,β) for β>α) · **Tauber (1897)**: Abel-summable + aₙ = o(1/n) ⟹ convergent · **Littlewood (1911)**: the same with aₙ = O(1/n) · **Hardy–Littlewood**: aₙ ≥ 0 and Σaₙxⁿ ∼ 1/(1−x) ⟹ Σ_{k≤n}aₖ ∼ n, with the C(1−x)^{−α} form giving Cn^α/Γ(α+1); **Karamata's 1930 proof** via monomials → polynomials → Weierstrass approximation → step functions · **Hardy's Cesàro Tauberian theorem** · **Wiener's Tauberian theorem** (Banach-algebra form) · **Abel–Dini** (no slowest divergent series) · **Silverman–Toeplitz** and Toeplitz's lemma.

**New counterexamples:** `uₙ = 2 + sin(ln n)` — ratio → 1 while the limit-point set is all of [1,3] · `aₙ = Σ_{k≤n}1/k` — divergent although a_{n+p}−aₙ → 0 for every *fixed* p (Cauchyness needs uniformity in p) · four sequences of period 4 realizing the **full strict five-term chain** liminf aₙ+liminf bₙ < liminf(aₙ+bₙ) < liminf aₙ+limsup bₙ < limsup(aₙ+bₙ) < limsup aₙ+limsup bₙ · `uₙ = 1/(n ln n)`, `vₙ = (−1)ⁿ/n` — uₙ = o(vₙ) with Σvₙ convergent and Σuₙ divergent, so **little-o comparison is invalid for signed series** · `uₙ = 1/n²` (n even), `1/2ⁿ` (n odd) — convergent positive series with **unbounded** ratio · `uₙ = (−1)ⁿ/n` — Σuₙ converges while Σu_{2n} diverges · **Gelbaum 6.19** — a convergent positive series comparing favourably with *no* member of a prescribed sequence of convergent series (no universal yardstick) · `∏(1+(−1)ⁿ/(n+1))` converges to 1/2 while Σ|aₙ| diverges — **absolute convergence of Σaₙ is sufficient but not necessary** for product convergence · `∏(1+1/n)` — every factor >1, aₙ→0, product diverges · **Aₙ = {m : n ≤ m < 2n}** — sets converging to ∅ with cardinalities → ∞ (Ross–Littlewood) · **Gelbaum 6.8** — a divergent series that, after inserting parentheses, converges to *any prescribed* sum · Σ_{n≥2} sin(nx)/ln n — everywhere convergent trigonometric series that is **not** a Fourier series of any L¹ function · Σ sin(nx)/n^α, α ≤ 1/2 — not the Fourier series of any Riemann-integrable function (Bessel) · **du Bois-Reymond** (continuous, Fourier series divergent at a point) and **Kolmogorov 1926** (L¹ function, Fourier series divergent *everywhere*).

### (c) §2 Limits and continuity — additions

**New counterexamples:** `f(m/n) = n` in lowest terms, 0 off ℚ — everywhere finite yet **locally unbounded at every point** (G&O 2.5) · `f(m/n) = (−1)ⁿ n/(n+1)` — bounded on a compact domain with **no relative extremum anywhere**, and nowhere semicontinuous (G&O 2.7–2.8) · **Van der Waerden** `f(x)=Σ4^{−n}dist(4ⁿx,ℤ)` — continuous and **nowhere monotonic** · `f(x)=x` on ℚ∩[0,1], `1−x` off ℚ — a **bijection [0,1]→[0,1] monotone on no subinterval** · **1_ℚ is not Baire class 1**, but `1_ℚ(x) = lim_m lim_n cos^{2n}(m!πx)` is Baire class 2 — **the Baire hierarchy is strict** · **Lebesgue's decimal-digit function** — equals 0 a.e. yet has range ℝ on every open interval (G&O 8.27) · a **discontinuous midpoint-convex function** — midpoint convexity without measurability does not give convexity · `f(u)=0` for u≠0, `f(0)=1`, `g≡0` — lim f = 0 and lim g = 0 but lim f(g(x)) = 1, the precise failure of limit composition.

**Sharpened statement:** the Cauchy functional equation forces f(x)=cx under *any one* of: continuity at a single point · monotonicity on an interval · boundedness above **or** below on a set of positive measure · Lebesgue measurability · sign-constancy · graph not dense. Every non-linear additive solution is simultaneously non-measurable, unbounded on every interval, and has graph dense in ℝ².

### (d) §3 Metric spaces and uniform convergence — additions

**New theorems:** **compact ⟺ complete + totally bounded** with explicit characterizations of total boundedness (Pugh Thm 63, Cor 66) · **completion of a metric space** (Pugh §2.10; Rudin Ex. 2.24) · **every nonempty compact metric space is a continuous image of the Cantor set**, and all Cantor spaces in ℝ are ambiently homeomorphic (Pugh Lemma 71, Cors 75–78) · **the generic f ∈ C⁰[a,b] is nowhere differentiable** (Pugh Thm 33, Baire + Weierstrass approximation) — the *category* proof, distinct from the explicit construction · **Rudin 4.20**, the sharp converse to Heine–Cantor: on a **noncompact** E ⊂ ℝ there exist (a) an unbounded continuous function, (b) a bounded continuous function with no maximum, and (c) if E is bounded, a continuous function that is not uniformly continuous — compactness is *exactly* what is needed · trigonometric polynomials are uniformly dense in the 2π-periodic continuous functions (Pugh Cor 23) · **Cambridge IB**: all norms on a finite-dimensional space are Lipschitz-equivalent ⟹ such a space is complete and its compact sets are the closed bounded ones.

**New counterexamples (the ones that make each hypothesis bite):**
- **Rudin 7.21** `f_n(x) = x²/(x² + (1−nx)²)` on [0,1] — uniformly bounded, → 0 pointwise, **not equicontinuous, and no uniformly convergent subsequence**.
- **Rudin 7.20** `f_n(x) = sin nx` on [0,2π] — pointwise bounded with **no pointwise convergent subsequence**.
- `f_n(t) = sin√(t+4n²π²)` on [0,∞) — equicontinuous (Lipschitz constant 1/4π) *and* uniformly bounded, → 0 pointwise, yet ‖f_n‖_∞ ≥ 1: **compactness of the domain is essential in Arzelà–Ascoli**. (With `f_n ≡ n` for the boundedness hypothesis and `xⁿ` for equicontinuity, this completes the three-way separation.)
- **Rudin 7.2** `s_{m,n} = m/(m+n)` — the prototype interchange-of-limits failure.
- **Rudin 7.4** `f_m(x) = lim_n (cos m!πx)^{2n}` → Dirichlet — a **double limit of continuous functions that is not Riemann integrable**.
- `g_n(x) = Σ_p 2^{−p} f_n(x−a_p)` with `f_n(t)=n²t²/(1+n⁴t⁴)` and {a_p}=ℚ — → 0 pointwise on ℝ but **uniformly on no interval**.
- `f_n(x) = x/(1+n²x²)` on [−1,1] — converges to 0 **uniformly** (max = 1/2n) yet f′ₙ(0)=1 ≠ 0: uniform convergence plus differentiability of each fₙ still does not give the derivative.
- **ℓ^∞** — complete but **not separable** (contrast C[a,b], which is separable by Weierstrass).
- **‖·‖₁ vs ‖·‖_∞ on C[0,1]** — non-equivalent norms; the equivalence theorem is strictly finite-dimensional.
- `d′ = d/(1+d)` — a bounded metric inducing the same topology: **boundedness and total boundedness are metric, not topological**.
- **ℝ ≅ (0,1)** homeomorphic but not *uniformly* homeomorphic; one complete, one not.
- **M = {0}∪S¹ ⊂ ℝ²** — closure of B(0,1) is {0} while the closed ball is {0}∪S¹; **M = {0}∪[2,∞)** — B(2,3) ⊋ B(0,4), larger radius on the smaller ball.
- **{(x,0):x>0} and {(x,1/x):x>0}** — two disjoint closed sets at distance 0.
- **The line with two origins** — non-Hausdorff, locally Euclidean; sequence limits not unique.
- **Complex Stone–Weierstrass fails without self-adjointness** (Rudin's remark before 7.33 and Ex. 21).

### (e) §4 Differentiation ℝ→ℝ — additions

**New theorems and framings:** **Rudin states Cauchy's MVT (5.9) *before* the ordinary MVT (5.10)**, obtaining the latter as the case g(x)=x — an unusual and efficient dependency order, and one that changes the stratification. **Rudin has no Rolle as a named theorem**; **Lebl has no L'Hôpital theorem in Ch.4** (it lives in exercises). **Carathéodory's characterization** — f differentiable at c ⟺ f(x)−f(c) = φ(x)(x−c) with φ continuous at c — is the clean route to the chain rule. **Bounded derivative ⟹ globally Lipschitz** (Pugh Cor 5). **Pugh's sufficient conditions for analyticity** (Thm 26, Cor 29): uniformly bounded derivatives, or the quantitative σα<1 condition, give uniform convergence of the Taylor series to f. Convexity ⟹ differentiability off a countable set with one-sided derivatives everywhere.

**New counterexamples:** **Boas's pair** `f(x)=x+sin x cos x`, `g(x)=e^{sin x}(x+sin x cos x)` — both → ∞, f′/g′ → 0, yet f/g = e^{−sin x} has **no** limit: L'Hôpital's conclusion is strictly one-directional · `(x+sin x)/x` as x→∞ — L'Hôpital fails to detect an existing limit · **Rudin 5.18** `f(x)=x`, `g(x)=x+x²e^{i/x²}` — L'Hôpital **fails for complex-valued functions** · `f(x)=x²(2+sin(1/x))` — absolute minimum at 0 although f′ changes sign infinitely often in every neighbourhood (**the "simple sign change" in the first-derivative test can fail**) · `f(x)=x⁴e^{−1/x²}sin(8/x³)` — f′ bounded on [−1,1] with sup 24 and inf −24, **attaining neither** · **Riemann's function** Σ sin(n²x)/n² — non-differentiable at most points (Hardy) but **differentiable with derivative −1/2 at x = π(2p+1)/(2q+1)** (Gerver): the folklore "nowhere differentiable" claim is *false* · **Katznelson–Stromberg / Denjoy** — everywhere differentiable yet monotone on **no** interval, with dense sets of relative maxima *and* of relative minima · **Zaanen–Luxemburg** `f(x)=Σ2^{−n}ψ((x−aₙ)/(bₙ−aₙ))` — continuous, **strictly** increasing, derivative 0 a.e. · a strictly increasing continuous function differentiable at **no** point of a prescribed null set — Lebesgue's a.e. theorem cannot be improved · `f(x)=cos x + i sin x` on [0,2π] — the crispest MVT failure: |f(2π)−f(0)| = 0 while |f′| ≡ 1 · `x sin(1/x)` on [0,1] — continuous but **of unbounded variation**, hence with non-rectifiable graph.

### (f) §5 Several variables — additions

**New theorems:** **Rudin's rectangle lemma 9.40** (Δ(f,Q) = hk·D₂₁f(x,y) for an interior point) is the engine behind **Rudin 9.41**, the **Peano weak form** of equality of mixed partials (only D₂₁f need be continuous, and only at the point). **Young's form** (f_x, f_y exist near p and are both totally differentiable at p) is a third, independent hypothesis set. **Pugh Thm 16 / Cors 17–18**: symmetry of D²f as a *bilinear map*, then of D^r f under any permutation — a cleaner statement than the partial-derivative version. **Pugh Thm 19, Cor 20**: C^r(U,ℝ^m) with ‖·‖_r is a **Banach space**. **Zorich 8.6.5 Morse's lemma**. **Rudin 10.7**, the factorization of a C′ map with invertible derivative into primitive maps and flips — his route to change of variables, and the bridge between §5 and §7. **Zorich 17.1.2/17.1.4** continuity and integration of parameter integrals; **17.2.3** improper parameter integrals need uniform convergence of the *differentiated* integral.

**New counterexamples:** **Peano's surface** `f(x,y)=(y−x²)(y−2x²)` (Lebl Ex. 8.3.11; Gelbaum's `(y²−ax)(y²−bx)` is the classical form) — every line through the origin restricts to a strict local minimum, yet no extremum · the **smooth-curve refinement** `f=(y−e^{−1/x²})(y−3e^{−1/x²})` — the same failure with every *smooth* curve · `f(x,y)=x³+e^{3y}−3xe^y` — a **single critical point that is a strict local minimum but not a global minimum** (true only for n ≥ 2; false in ℝ¹) · `f(x,y)=y(x²+y²)/x`, f=0 on x=0 — all directional derivatives vanish at 0, yet f is discontinuous on the whole line x=0 (Lebl Ex. 8.3.16) · Lebl's **angle function** on the annulus minus a slit — ‖f′‖ bounded yet f not globally Lipschitz: **convexity is essential in the mean value inequality** · `f(x,y)=(x,xy)` — f′ singular on x=0; image neither open nor closed; f⁻¹(0,0) is a line · the **complex squaring map** `(x²−y², 2xy)` on ℝ²∖{0} — f′ invertible everywhere, locally injective everywhere, **globally 2-to-1**: the IFT is irreducibly local · the **slit-plane** examples: a C^∞ f with ∂f/∂y ≡ 0 on a region yet depending on y, and a locally homogeneous C¹ function that is not homogeneous · `f(x,y)=xe^{−x²/y}` — d/dx∫f dy ≠ ∫∂f/∂x dy with both integrals proper · `f(x,y)=x sin(1/y)+y sin(1/x)` — joint limit exists but **neither iterated limit does**; `(x−y)sin(1/x)` gives exactly one · `f = 1` if xy≠0, `0` if xy=0 — both iterated limits exist **uniformly** and agree, yet the joint limit fails (**Moore–Osgood requires deleting the axes**) · the **Jacobian conjecture** as a live open problem separating local from global inversion.

### (g) §§6–7 Riemann and multivariable integration — additions

**New theorems:** **Arzelà's bounded convergence theorem (1885)** — fₙ ∈ ℛ[a,b], uniformly bounded, fₙ → f *pointwise* with f ∈ ℛ[a,b] ⟹ ∫|fₙ−f| → 0. (The hypothesis f ∈ ℛ cannot be dropped.) This is the Riemann-integral analogue of dominated convergence and is almost never taught · **Riemann–Lebesgue lemma** (Fourier transform maps L¹ → C₀) · **second MVT for integrals, Bonnet form** (G positive decreasing ⟹ ∃x ∈ (a,b] with ∫ₐᵇGφ = G(a⁺)∫ₐˣφ — note the interval must *include* b) and the general monotone form · **Dirichlet's and Abel's tests for improper integrals**, both proved from the second MVT / RS integration by parts · **Frullani's integral** with both the f(∞)-finite and the ∫_c^∞f(x)/x-convergent variants · **RS existence via Young's Hölder condition** (f ∈ C^{0,α}, g ∈ C^{0,β}, α+β>1) · **Rudin's RS existence ladder** 6.8/6.9/6.10 · **Rudin 6.15–6.16**: step-function integrators turn series into integrals · **BV structure**: BV[a,b] is a Banach algebra under ‖f‖_{L¹}+V(f); V = ∫|f′| when f′ ∈ ℛ; total variation = arc length · the inclusion chain **C¹ ⊊ Lipschitz ⊊ AC ⊊ continuous ∩ BV ⊊ differentiable a.e.** · **Apostol Ch.6** is the dedicated undergraduate treatment of BV and rectifiable curves (6.1–6.12, incl. equivalence of paths and change of parameter) · in ℝ^m: **C¹ images of null sets are null** (Lebl 10.3.10) · **Lebl 10.5.9** diffeomorphic images of compact Jordan sets stay Jordan measurable · **Munkres §15** and **Zorich 11.6** on improper multiple integrals via exhaustions.

**New counterexamples:** **Lebl Ex. 10.2.1** `f = 1` iff x=1/2 and y ∈ ℚ — f *is* integrable on [0,1]² with ∫ = 0, yet the section y ↦ f(1/2,y) is **not** integrable: this is precisely why Fubini must be stated with upper and lower integrals · **Lebl Ex. 10.2.9** `f(x,y)=1/q` if x∈ℚ and y=p/q — Riemann integrable on [0,1]² with upper and lower x-sections differing at every rational y; one iterated integral exists, the other does not · `1_{diagonal}` on [0,1]² under Lebesgue × counting measure — iterated integrals 0 and 1: **Tonelli needs σ-finiteness** · **Sierpiński under CH** — a subset of the unit square countable on every vertical line and co-countable on every horizontal line, giving iterated integrals 0 and 1 for a non-measurable set · **Lebl Ex. 10.5.4** — a bounded **open** set built from a fat Cantor set whose boundary has positive measure, hence not Jordan measurable · **Gabriel's horn** (y=1/x revolved) — finite volume π, infinite lateral surface · **G&O 8.29** — f ≥ 0 finite everywhere with ∫ₐᵇf = +∞ on *every* open interval · **G&O 8.31–8.32** — a bounded semicontinuous (resp. measurable) function **not a.e. equal to any Riemann-integrable function**, so Riemann integrability is not a property of the a.e.-class · `∫₁^∞ cos(x²)dx` and `∫₀^∞ x cos(x⁴)dx` — convergent improper integrals whose integrand does not tend to 0, resp. is unbounded on every tail · the **vortex field** P=−y/(x²+y²), Q=x/(x²+y²) — closed, not exact on ℝ²∖{0}, circulation 2π: Green's theorem and the Poincaré lemma need the right domain topology (Lebl Ex. 10.6.5; Rudin 10.36) · the ζ 2-form on ℝ³∖{0} (Rudin 10.37) · **G&O 11.9 Besicovitch–Kakeya**.

### (h) §8 Power series — additions

**New theorems:** **Pringsheim's theorem** (cₙ ≥ 0 and 0<R<∞ ⟹ z = a+R is singular) · **Ostrowski–Hadamard gap theorem** (Hadamard gaps λ_{k+1}/λ_k ≥ 1+δ ⟹ |z|=R is a **natural boundary**) and **Fabry's gap theorem** (the weaker λ_k/k → ∞ suffices, and is essentially sharp) · **Bernstein's theorem on absolutely monotonic functions** (f^{(n)} ≥ 0 for all n on (a,b) ⟹ f real-analytic there, holomorphic on |z−a|<b−a) and **Bernstein–Widder** (completely monotone ⟺ Laplace transform of a finite positive measure) · **Lagrange inversion / Lagrange–Bürmann**, with [zⁿ]g(z) = (1/n)[w^{n−1}]φ(w)ⁿ when f(w)=w/φ(w) · **structure of ℝ[[X]]**: ΣaₙXⁿ is a unit **iff** a₀ is a unit; X-adically complete; K[[X]] is a DVR with valuation ord; the metric d(f,g)=2^{−ord(f−g)} · **Cauchy estimates as a characterization**: f ∈ C^ω ⟺ sup_K|f^{(k)}| ≤ C^{k+1}k! on compacta, so the derivative-bound sufficient criterion is also necessary · **Apostol Ch.9** is the richest UG source: §9.16 substitution theorem, §9.17 **reciprocal of a power series**, §9.20 **Bernstein's theorem**, §9.21 binomial series, §9.22 Abel's limit theorem, §9.23 **Tauber's theorem**, plus §9.7 a space-filling curve and §9.13 mean convergence.

**Sharpened binomial-series statement (Abel 1826), correcting a widely-copied error:** on |x|=1, for α not a nonnegative integer — **Re α > 0** ⟹ absolute convergence everywhere; **−1 < Re α ≤ 0** ⟹ conditional convergence for x ≠ −1, divergence at x = −1; **Re α ≤ −1** ⟹ divergence everywhere. (Wikipedia's *Binomial series* lead contradicts its own convergence section; use this.)

**New counterexamples:** `Σ_k e^{−n}cos(n²x)` — C^∞ whose Maclaurin series **diverges for every x ≠ 0** · `Σ z^{2ⁿ}`, `Σ z^{n!}`, `Σ z^{n²}` — natural boundaries · a power series converging at *every* boundary point yet with unbounded sum on the closed disc · **Stieltjes' moment example** `e^{−x^{1/4}}sin(x^{1/4})` on [0,∞) — continuous, nonzero, with ∫₀^∞xⁿf = 0 for all n: polynomials are not dense on unbounded intervals and the Hamburger moment problem can fail uniqueness · **Kolmogorov's superposition theorem** (G&O 2.27) as the surprising *positive* counterpart, resolving Hilbert's 13th problem in the unexpected direction.

### (i) §12 FTC — additions

**Botsko's theorem** named and stated: f ∈ ℛ[a,b], F **continuous** on [a,b] with F′ = f except on a **countable** set ⟹ ∫ₐᵇf = F(b)−F(a). The Cantor function shows the countability is exactly at the boundary (its exceptional set is uncountable and null). **Banach–Zarecki**: F is AC ⟺ F is continuous, BV, and satisfies **Luzin's property (N)**. **Cousin's lemma** guarantees the HK integral is non-vacuous (a δ-fine tagged partition exists for every gauge). **f is Lebesgue integrable ⟺ f and |f| are both HK integrable** — HK is a *non-absolute* integral, which is exactly why it captures ∫₀^∞ sin x/x.

**Bartle & Sherbert's published motivation for Ch.10**, worth copying verbatim into any library page: `H(x)=2√x` has H′ unbounded so H′ ∉ ℛ[0,b] (yet H′ *is* generalized-Riemann integrable, Ex. 10.1.10(a)); and `K(x)=x²cos(1/x²)` is differentiable everywhere on [0,1] with K′ ∉ ℛ[0,1]. This pair is the cleanest elementary statement of why the Riemann FTC needs the integrability hypothesis — no Volterra machinery required.

**New counterexample:** `F(x)=x sin(1/x)`, F(0)=0, with f = F′ discontinuous *and unbounded* at 0 — the continuous-f corollary fails, but F is continuous on [0,1] and F′=f on (0,1), so the **strong** FTC-2 still delivers ∫₀¹f = sin 1. This shows precisely how much slack the strong form has over the corollary.

---

## 3. COUNTEREXAMPLE TALLY AND MASTER STRUCTURE

The consolidated, de-duplicated master list now stands at **≈300 distinct counterexamples** across the two passes (Part I's CE1–CE217 plus the additions above), against the brief's target of 60+. Organized for checklist extraction:

| Bucket | Count (consolidated) | Deepest single source |
|---|---|---|
| Real number system & sets | 24 | G&O Ch.1 + Ch.8 (52 items) |
| Sequences and series | 32 | G&O Ch.5 + Ch.6 (38 items); TBB Ch.3 |
| Limits and continuity | 24 | G&O Ch.2 (27 items); TBB Ch.5–6 |
| Differentiation ℝ→ℝ | 26 | G&O Ch.3 (13 items); TBB Ch.7, Ch.14 |
| Riemann integration | 17 | G&O Ch.4 (14) + Ch.8 (31–39) |
| Uniform convergence | 17 | **G&O Ch.7 (12 items) — item 12 alone separates all four Dini hypotheses**; Rudin 7.1–7.6, 7.20–7.21 |
| Several variables | 18 | G&O Ch.9 (19 items) |
| Metric & topological | 16 | G&O Ch.12 (22) + Ch.10 (24) + Ch.11 (9) |
| exp/log/trig, power series, functional equations | 12 | G&O Ch.6 (22–29); mathcounterexamples.net |

**Structural cautions recorded during research:** Stack Exchange and MathOverflow are hard-blocked for this fetcher (`math.stackexchange.com` unreachable; `mathoverflow.net` returns HTTP 400 with "domains are not accessible to our user agent"), so the requested "big list" threads could not be consulted directly; the canonical source those threads cite (Gelbaum & Olmsted, full text) was substituted, plus **mathcounterexamples.net**, whose full analysis (7 pages) and topology (3 pages) category indexes were enumerated. *Counterexamples in Topology* (Steen & Seebach) was checked and largely discarded — almost all 143 examples are non-metric point-set pathologies (Sorgenfrey line, long line, Tychonoff plank) outside undergraduate real analysis; only the topologist's sine curve, the metric-ball anomalies, and the space-filling/Osgood curves carry over.

---

## 4. ADDITIONS TO "COMMONLY-INCLUDED ITEMS THAT MIGHT BE MISSED"

Beyond the 50 in Part I:

51. **Arzelà's bounded convergence theorem** — the Riemann-integral DCT, essentially never taught, and the honest answer to "why do we need Lebesgue?"
52. **Rudin 4.20** — the *sharp converse* to Heine–Cantor, packaging three failures on noncompact sets into one theorem.
53. **Frobenius' theorem and the Abel > Cesàro strictness** — usually asserted, rarely proved.
54. **Karamata's proof of Hardy–Littlewood** — a beautiful use of Weierstrass approximation that fits an undergraduate course.
55. **Gap theorems (Ostrowski–Hadamard, Fabry)** — the cheapest rigorous encounter with natural boundaries and the limits of analytic continuation.
56. **Bernstein's theorem on absolutely monotonic functions** — a genuinely surprising sufficient condition for analyticity (Apostol §9.20).
57. **Reciprocal, quotient, substitution, and composition of power series** as *theorems* with radius estimates (Apostol §§9.16–9.17; TBB §§16.6–16.7).
58. **The unit-criterion in ℝ[[X]]** — ΣaₙXⁿ invertible ⟺ a₀ invertible; the algebraic skeleton behind "you can divide power series."
59. **Riemann's function Σ sin(n²x)/n² and Gerver's theorem** — the standard folklore claim about it is false, which makes it a superb teaching example.
60. **Katznelson–Stromberg**: everywhere differentiable, monotone on no interval.
61. **Pugh's Cantor-set lore** — every compact metric space is a continuous image of the Cantor set; all Cantor spaces in ℝ are ambiently homeomorphic.
62. **The category proof that the generic continuous function is nowhere differentiable** — strictly more informative than the explicit Weierstrass construction, and it needs only Baire + Weierstrass approximation.
63. **Carathéodory's characterization of the derivative** — one line, and it makes the chain rule trivial.
64. **Rudin's Cauchy-MVT-before-MVT ordering** — a real alternative dependency graph, not a stylistic quirk.
65. **Rudin 9.40's rectangle lemma** — the actual content of the mixed-partials theorem, usually hidden.
66. **Morse's lemma** (Zorich 8.6.5) — reachable at the end of a strong multivariable course.
67. **Zorich's Appendix E** — Riemann–Stieltjes, the Heaviside function, the Dirac delta, and generalized functions, all as an *appendix to a first-year text*.
68. **Zorich II Ch.19 and Laplace's method** — asymptotic expansions as a first-course topic.
69. **Apostol Ch.6** — the only mainstream UG text giving BV and rectifiable curves a full chapter, including equivalence of paths under change of parameter.
70. **Munkres §14 "Rectifiable Sets"** — Jordan measurability under its other standard name, which is a real citation hazard.
71. **Cousin's lemma** — again, but now as the guarantee that the HK integral is non-vacuous.
72. **Bartle & Sherbert's H(x)=2√x and K(x)=x²cos(1/x²)** — the elementary pair replacing Volterra as FTC motivation.
73. **Banach–Zarecki** and **Luzin's property (N)** — the topological characterization of absolute continuity.
74. **Bartle & Sherbert's Picard-iteration construction of exp** — a fifth independent route worth an item of its own.
75. **π located in (2√2, 2√3)** via Bartle & Sherbert Lemma 8.4.9 — a constructive bound falling out of the definition.
76. **Hairer & Wanner I.5 Euler's product for sine** — the historical route to Wallis, Basel, and the cotangent expansion in one place.
77. **Kolmogorov's superposition theorem** (G&O 2.27) — Hilbert's 13th, and the rare *positive* surprise in a counterexample book.
78. **Stieltjes' moment counterexample** — polynomials are not dense on unbounded intervals; the natural boundary of Weierstrass approximation.
79. **G&O Ch.1 item 11 (seven sub-parts)** — a single, self-contained demonstration that EVT, IVT, Rolle, MVT, uniform continuity and "f′≡0 ⟹ constant" *all* fail simultaneously without completeness. The best possible motivation for the completeness axiom.
80. **G&O Ch.7 item 12** — nonuniformly convergent sequences satisfying any *three* of Dini's four hypotheses: the cleanest possible proof that a theorem's hypotheses are independent.

---

## 5. WHAT REMAINS OPEN

- The **exponential/π/trigonometry specialist has not returned**; §§9–11 in Part I plus §2(a) above are built from my own primary extractions (Rudin Ch.8 verbatim, Lebl §5.4 and §11.4, Tao II §4.5–4.7, Cambridge IA §6, Bartle & Sherbert §§8.3–8.4, Hairer & Wanner Ch. I, Zorich §5.5.3) and the Wikipedia characterization pages. The trig-identity list in Part I §10.6 (roughly 100 identities across 19 categories) and the fourteen definitions of π in §10.2 are complete as delivered; if that agent reports later, expect additions in the "identities without variables" and "Machin-like formula" categories only.
- **Rudin theorem numbers 3.11, 3.14, 5.10–5.12, 7.16 and all of Ch.11** were lost to OCR damage in the scanned copy and are flagged rather than filled from memory. Verify against a clean copy before citing numbers.
- **Bartle & Sherbert theorem numbers** are from the **3rd edition**; the 4th retains the 11-chapter architecture but the numbering was not verified.
- **Spivak's *Calculus on Manifolds*** contents come from ProofWiki, not the PDF (the available scan has no text layer); the theorem numbers 2-1 through 2-13 and 3-1 through 3-13 quoted in Part I §§5 and 7 came from the Internet Archive full-text copy and are reliable.
