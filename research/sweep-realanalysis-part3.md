# PART III — EXPONENTIAL, π, TRIGONOMETRY, COMPLEX EXPONENTIAL (COMPLETION)

## 0. CRITICAL CORRECTIONS

**1. There is no "Prologue" in Rudin's *Principles of Mathematical Analysis*.** "Prologue: The Exponential Function" is the opening of ***Real and Complex Analysis***. This matters because the two books give **different proofs of the key step**:

- **R&CA Prologue** uses the alternating-series bound: from the cosine series at t=2, terms decrease in absolute value and alternate, so **cos 2 < 1 − 2²/2! + 2⁴/4! = −1/3**; with cos 0 = 1 and continuity, a smallest positive zero t₀ exists and **π := 2t₀** (eq. 8). There cos t := Re e^{it}, sin t := Im e^{it}.
- ***PMA* Ch.8 uses a completely different argument** — the monotone-S + integral bound I quoted verbatim in Part I §10.1. Part I is correct as written; the *attribution* in the original brief was not.

**2. Rudin *PMA* Theorem 8.7 has parts (a)–(d)**, and Theorem 8.6 has (a)–(f). Part I stated this correctly.

**3. Tao defines π with no factor of 2**: **π := inf{x > 0 : sin x = 0}** (Def. 4.7.4), not 2× the first zero of cos. The two agree because sin 2x = 2 sin x cos x makes the first zero of sin exactly twice the first zero of cos — which is precisely what Bartle & Sherbert record when they show 2γ is the smallest positive root of S. **This is a genuine convention split and must be an explicit item.**

**4. Correction to my Part II §2(a)**: Bartle & Sherbert Lemma 8.4.9 bounds **√2 < γ < √(6−2√3)**, giving **2.828 < π < 3.185** — not the (√2, √3) I reported.

**5. Abbott never defines π or the trigonometric functions anywhere.** §6.6 opens with an explicit disclaimer: *"we will assume the familiar properties of the trigonometric, inverse trigonometric, exponential, and logarithmic functions. Rigorously defining these functions is an important exercise in analysis… a point of view that is explored in Section 8.4."* But §8.4 constructs only E(x)=Σxⁿ/n! and log — and does so **as Exercises 8.4.2–8.4.6**, not as theorems. π and sin/cos are constructed nowhere in the book.

**6. Zorich does not analytically define π in Volume I.** He states that deriving sin π = 0 from the series "is very difficult" and defers it to after integration.

**7. Rudin *PMA* Definition 6.26, verbatim, on what a curve is:** *"It should be noted that we define a curve to be a mapping, not a point set."* Different curves can share a range and have different lengths. This is a load-bearing distinction for arc length that Part I glossed.

---

## 1. §9 COMPLETED — EXPONENTIAL AND LOGARITHM

### 1.1 Ten definitions of exp (Part I had six)

The six Wikipedia characterizations (product limit · power series · inverse of ∫₁^y dt/t · IVP y′=y, y(0)=1 · functional equation with regularity · elementary powers with e the base making lim_{h→0}(a^h−1)/h = 1), **plus four more found in the primary literature**:

7. **Rudin's sup-over-rationals**, eq. (34) from Ch.1 Ex.6: `e^x := sup{e^p : p ∈ ℚ, p < x}`.
8. **Tao's limit-over-rationals**, Def. 6.7.2: `x^α := lim x^{q_n}` for any rationals q_n → α. **These two are not the same construction** — Tao's supremum appears only at the n-th-root stage (`x^{1/n} := sup{y ≥ 0 : yⁿ ≤ x}`, Def. 5.6.4); the real exponent is a *limit*. Rudin's is a genuine sup. Worth two separate library items.
9. **Bourbaki (*Topologie Générale* V §4)**: exp is the unique continuous isomorphism of topological groups (ℝ,+) → (ℝ_{>0},×) normalized at 1. *FRV* Ch. III only *differentiates* it.
10. **Landau, Def. 12**: `log x := lim_{n→∞} 2ⁿ(x^{1/2ⁿ} − 1)`, then e by log e = 1 (Def. 13), e^x by log y = x (Def. 14), a^x (Def. 15). **No integrals, no series** — the series is proved much later, in Ch. 15. This is the most elementary construction in the literature and is not in any of the surveyed English-language texts.

Plus **Bartle & Sherbert's Picard/Volterra iteration** (Part II §1): E₁(x)=1+x, E_{n+1}(x)=1+∫₀^x E_n — and the observation that **the iterates *are* the partial sums of the exponential series**, so this is the series construction in disguise, arrived at from the ODE.

### 1.2 Sixteen characterizations of the number e

Σ1/n! · lim(1+1/n)ⁿ · the unique e with ∫₁^e dt/t = 1 · the unique base with d/dx a^x|₀ = 1 · the unique real with (1+1/x)^x < e < (1+1/x)^{x+1} for all x>0 · the **maximizer of x^{1/x}** · lim n!/!n (factorial over subfactorial) · 1/e = lim(1−1/n)ⁿ (the derangement probability) · lim n(√(2πn)/n!)^{1/n} · lim (p_n#)^{1/p_n} (primorial, via the PNT) · the simple continued fraction **[2;1,2,1,1,4,1,1,6,1,1,8,…]** · Pippenger's product 2(2/1)^{1/2}((2/3)(4/3))^{1/4}⋯ · Guillera's product · the Möbius form **e^{−1} = ∏ n^{μ(n)/n}** · e := E(1) in the ODE construction · e := exp(1) in the series construction.

### 1.3 The equivalence web, made precise

Wikipedia organizes it as a **web, not a cycle**: 1⇔2 (binomial expansion of (1+x/n)ⁿ against sₙ = Σ_{k≤n}x^k/k!, giving tₙ ≤ sₙ and s_m ≤ liminf tₙ, hence limsup tₙ ≤ e^x ≤ liminf tₙ; negative x via (1−r/n)ⁿ(1+r/n)ⁿ = (1−r²/n²)ⁿ) · 1⇔3 (continuity of ln + FTC: ln y = lim n·ln(1+x/n) = x·(d/dt ln t)|₁) · 1⇔4 (Euler's method: y(t+Δt) ≈ y(t)(1+Δt) with Δt = x/n) · 2⇔4 (induction gives dⁿy/dxⁿ = y, all derivatives 1 at 0) · 2⇒5 (Cauchy product + binomial; exp′(0) = lim(1 + h/2! + h²/3! + …) = 1) · 3⇔4 (chain rule on log(exp x)=x) · 5⇒4 (f′(x) = f(x)·f′(0) = f(x); f(0)=f(0)² ⇒ f(0)=1) · 5⇔6 (induction gives f(n/m)=f(1)^{n/m}) · **5⇒6 in the Lebesgue-measurable case** (set g(x)=∫₀^x f, show g(x+y)−g(x) = f(x)g(y), deduce continuity of f from continuity of g and g(0)=0).

**Regularity conditions listed for uniqueness in (5):** f Lebesgue-measurable · f continuous at any one point · f increasing on any interval. Without one, "other functions satisfying f(x+y)=f(x)f(y) can be constructed using a basis for the real numbers over the rationals" (Hewitt–Stromberg).

**Complex-domain caveats:** (1), (2), (4) transfer directly; **(3) fails to be well-posed** because integration paths are not unique — it holds only mod 2πi; **(5) with f(1)=e plus regularity is NOT enough over ℂ**, and the article's counterexample is **f(x+iy) = e^x(cos 2y + i sin 2y)**. Sufficient repairs: f(1)=e plus conformality at some point; or f(1)=e and f(i)=cos 1 + i sin 1 plus regularity. Definitions 1–4 all generalize to Banach algebras, where **e^{A+B} ≠ e^A e^B when AB ≠ BA**.

### 1.4 Additions to the theorem list

**Bernoulli's inequality** in full: (1+x)^r ≥ 1+rx for r ≥ 1 or r ≤ 0 with x ≥ −1; reversed for 0 ≤ r ≤ 1; the integer version holds for x ≥ −2. Strengthened form **(1+x)^r ≥ 1+rx+⌊r/2⌋x²**. Five proofs: induction, binomial theorem, convexity, AM–GM, geometric series. **AM–GM** with five proofs: Jensen/concavity of log, Cauchy's forward–backward induction, successive replacement, Pólya's x ≤ e^{x−1}, Lagrange multipliers.

**Irrationality of e**: Rudin 3.32 is Fourier's proof via 0 < q!(e−s_q) < 1/q ≤ 1. Alternatives: via the non-terminating continued fraction; via 1/e and 0 < (2n−1)!(e^{−1}−s_{2n−1}) < 1/(2n). **Liouville (1840)**: e² is irrational and is not a root of any degree-2 rational polynomial, hence e⁴ is irrational. **Hurwitz (1891)**: e³ irrational. General: e^q irrational for every nonzero rational q. **Hermite (1873)**: e transcendental. **Lindemann–Weierstrass**: distinct algebraic α_i ⇒ e^{α₁},…,e^{α_n} linearly independent over the algebraic numbers; Baker's form Σa_i e^{α_i} ≠ 0. Corollaries: e^α transcendental for algebraic α ≠ 0; **ln a transcendental for algebraic a ∉ {0,1}**; π transcendental.

**Cauchy's functional equation** — the full regularity list is now: continuity at a point (**Darboux 1875**) · monotonicity on an interval · boundedness above **or** below on an interval · Lebesgue measurability · graph not dense in ℝ². And **Solovay**: there are models of ZF+DC in which every set of reals is measurable and *all* solutions are linear — so the Hamel pathology genuinely requires AC. The three companion equations, all introduced by Cauchy in 1821: f(x+y)=f(x)f(y), f(xy)=f(x)+f(y), f(xy)=f(x)f(y).

**Picard–Lindelöf** with its two failure modes: **y′=y^{2/3}, y(0)=0** has multiple solutions (Peano gives existence without uniqueness when only continuity is assumed); **y′=y², y(0)=1** gives y=1/(1−t), finite-time blow-up (locally Lipschitz ⇒ only local existence). Both y′=y and y″=−y satisfy the hypotheses globally.

**Hyperbolic functions**, complete: the six functions, three Pythagorean-type identities, addition/double/half-angle, derivatives, `tanh x = Σ B_{2n}4ⁿ(4ⁿ−1)x^{2n−1}/(2n)!` for |x|<π/2, the six inverse forms in closed logarithmic shape (arsinh x = ln(x+√(x²+1)), arcosh x = ln(x+√(x²−1)), artanh x = ½ln((1+x)/(1−x)), arcoth, arsech, arcsch), and the products **sinh x = x∏(1+x²/(n²π²))**, **cosh x = ∏(1+x²/((n−½)²π²))**.

### 1.5 The complete exp/log source table (19 sources)

| Source | exp | log | Location |
|---|---|---|---|
| Rudin *PMA* | E(z)=Σzⁿ/n! (25); addition via Cauchy product (Thm 3.50) | L := E⁻¹ (36)/(37); **L(y)=∫₁^y dx/x (39) derived** | Ch.8, p.178–182 |
| Rudin *R&CA* | exp z = Σzⁿ/n! (1); e := exp(1) | not in the Prologue | Prologue p.1 |
| Tao *Analysis I* | **not defined**; only x^α := lim x^{q_n} | — | Defs 5.6.4, 5.6.7, 6.7.2 |
| Tao *Analysis II* | exp(x) := Σxⁿ/n!, e := exp(1) | inverse | Def. 4.5.1/4.5.3/4.5.5 |
| Lebl I | E := L⁻¹; x^y := exp(y ln x) | L(x) := ∫₁^x dt/t | Prop. 5.4.1/5.4.2 |
| Lebl II | E(z) := Σz^k/k!; matches Vol I by ODE uniqueness | inherits Vol I | §11.4.1 |
| **Abbott** | E(x)=Σxⁿ/n!, properties as **Exercises 8.4.2–8.4.5** | inverse, **Ex. 8.4.6** | §8.4, p.271–272 |
| Spivak *Calculus* | exp := log⁻¹; a^x := e^{x log a} | **log x := ∫₁^x dt/t** | Ch.18, p.341–345 |
| Zorich I | a^x by cut/monotonicity (Def.7); exp z := Σzⁿ/n! (5.117); re-derived from f′=f | log_a := exp_a⁻¹ (Def.8), ln (Def.9) | §3.2.2 Ex.10; §5.5.3; §5.6.5 |
| Bartle & Sherbert | unique solution of E′=E, E(0)=1 by **integral iteration**; e := E(1) | L := E⁻¹ (Def. 8.3.8); x^α := E(αL(x)) (8.3.10) | §8.3, Thms 8.3.1–8.3.14 |
| Apostol *Calculus* I | E := L⁻¹ §6.12; e^x := E(x) §6.14; a^x §6.15 | **L(x) := ∫₁^x dt/t** §6.3 | Ch.6 |
| Apostol *Math. Analysis* | **not constructed**; e^{x+iy} := e^x(cos y + i sin y) | Log z := log\|z\| + i arg z | Def. 1.40 §1.26; Def. 1.53 §1.30 |
| Bourbaki *FRV* | only **differentiates** exp; e in Ch. III §1.1 | Ch. III §1.2; complex log §1.7 | definitions in *TG* V §4 |
| Hairer & Wanner | I.2 "Exponential Function", p.24 | I.3 "Area of the Hyperbola and Natural Logarithms", p.33 | rigor retro-fitted in III.7 |
| **Landau** | e by log y = 1 (Def.13); e^x by log y = x (Def.14); a^x (Def.15) | **log x := lim 2ⁿ(x^{1/2ⁿ}−1)** (Def.12) — no integral, no series | Ch.2; series only in Ch.15 |
| Courant & John I | §2.6b inverse of log; §2.6c limit of powers; §2.6d arbitrary powers | **§2.5 "Logarithm Defined by an Integral"**, p.145 | Ch.2 |
| Hardy *Pure Mathematics* | e^y := log⁻¹ §204; a^x §207; series §212 | **log x := ∫₁^x dt/t** §197; e by 1=∫₁^e dt/t §203 | Ch. IX |

**Four-way taxonomy:** *power-series-first* (Rudin both, Tao II, Lebl II, Landau for trig, Abbott, Zorich §5.5.3) · *integral-first* (Spivak, Apostol *Calculus*, Hardy, Courant–John, Lebl I) — and **Rudin explicitly notes it is "quite frequently taken as the starting point"** · *ODE/characterization-first* (Bartle–Sherbert, Lebl I's uniqueness-clause propositions, Zorich §5.6.5, Bourbaki *TG* V§4) · *assumed* (Apostol *Mathematical Analysis*).

---

## 2. §10 COMPLETED — π, ARC LENGTH, TRIGONOMETRY

### 2.1 Sixteen definitions of π (Part I had fourteen)

All fourteen from Part I stand, with these refinements and two additions:

- **Definition 1 has an attribution**: the "π := 2× smallest positive zero of cos" definition is due to **Richard Baltzer**, popularized by **Landau**. The Landau reference is Def. 61 + Thm 262.
- **Definition 1′ is a distinct item**: Tao's π := inf{x>0 : sin x = 0}.
- **Weierstrass (1841) proposed π/2 = ∫_{−1}^{1}dx/√(1−x²) as *the* definition** — worth recording as a named historical position.
- **New #15**: the **Gauss–Legendre / Brent–Salamin AGM algorithm**, quadratically convergent (25 iterations ⇒ 45 million digits), resting on Legendre's identity for complete elliptic integrals; alongside Ramanujan (≈8 digits/term) and Chudnovsky (≈14 digits/term), justified by Ramanujan–Sato modular-form identities.
- **New #16**: the **functional-analytic characterization** — π is the unique positive normalizing factor making the Hilbert transform a linear complex structure on L²(ℝ,ℝ). Plus **Archimedes' bounds** 3+10/71 < π < 3+1/7 from 96-gons, and the **isoperimetric characterization** 4πA ≤ L² with equality only for circles (Hurwitz's Fourier proof works for merely rectifiable curves; Schmidt 1938 via Green + Cauchy–Schwarz).

**Six distinct proofs that cos has a positive zero** — this is the one genuinely non-obvious step and every book does it differently:

| Source | Argument |
|---|---|
| **Rudin *PMA*** | Monotone-S contradiction: if C > 0 on (0,∞) then S′ > 0 so S increases and is positive; then S(x)(y−x) ≤ ∫ₓ^y S = C(x)−C(y) ≤ 2 fails for large y |
| **Rudin *R&CA*** | Alternating-series bound **cos 2 < −1/3** + IVT |
| **Tao** | Cotangent: cot′ ≤ −1 forces cot(x+s) ≤ cot x − s |
| **Lebl** | MVT bound y ≤ 2/sin a + a |
| **Bartle & Sherbert** | Lemma 8.4.9: √2 < γ < √(6−2√3), hence 2.828 < π < 3.185 |
| **Landau Thm 262** | MVT + cos 2ξ = 2cos²ξ − 1 ≤ −½ + IVT |
| **mathesis-online** | Auxiliary function x ↦ cos x + x sin a |

**Irrationality and transcendence of π:** Lambert (1761/1768) via the continued fraction for tan x; Legendre (1794) for π²; **Niven (1947)** with f(x)=xⁿ(a−bx)ⁿ/n!, F = f − f″ + f⁗ − ⋯, and ∫₀^π f(x)sin x dx a positive integer < 1; also Hermite, Cartwright, Bourbaki, Laczkovich. **Lindemann (1882)**: π transcendental ⇒ squaring the circle is impossible. **Normality of π is open.**

**Pedagogical note from the *Pi* article, worth quoting in the library:** *"Integration is no longer commonly used in a first analytical definition because differential calculus typically precedes integral calculus in the university curriculum, so it is desirable to have a definition of π that does not rely on the latter."* That is exactly why definition 1 has displaced definition 6.

### 2.2 Arc length — Rudin verbatim

**Definition 6.26.** A **curve** in ℝᵏ is a continuous map γ: [a,b] → ℝᵏ; one-to-one ⇒ an **arc**; γ(a)=γ(b) ⇒ a **closed curve**. *"It should be noted that we define a curve to be a mapping, not a point set."* For a partition P, Λ(P,γ) = Σ|γ(x_i) − γ(x_{i−1})|, and **Λ(γ) := sup_P Λ(P,γ)**; γ is **rectifiable** iff Λ(γ) < ∞.

**Theorem 6.27.** *If γ′ is continuous on [a,b], then γ is rectifiable and Λ(γ) = ∫_a^b |γ′(t)|dt.* Proof: ≤ from |γ(x_i)−γ(x_{i−1})| = |∫γ′| ≤ ∫|γ′|; ≥ by uniform continuity of γ′, choosing Δx_i < δ so |γ′(s)−γ′(t)| < ε, and estimating ∫|γ′| ≤ |γ(x_i)−γ(x_{i−1})| + 2εΔx_i.

**Supporting inventory now complete:** total variation = arc length for vector-valued paths, so BV ⟺ rectifiable · Jordan decomposition · V_a^b(f) = ∫|f′| for C¹/absolutely continuous f, but **strictly larger** for merely differentiable or merely continuous f · additivity · reparametrization invariance · arc-length (unit-speed/natural) parametrization with s(t)=∫_a^t|γ′| a C¹ diffeomorphism and ‖γ̄′‖ ≡ 1; the metric-space version (γ natural ⟺ Λ(γ|[t₁,t₂]) = t₂−t₁; Lipschitz curves are automatically rectifiable and admit a metric derivative) · general metric-space definition Length(γ) = sup_P Σ d(γ(t_i),γ(t_{i−1})) · polar ∫√((dr/dθ)²+r²)dθ, spherical, cylindrical, and Riemannian ℓ(γ)=∫√(Σg_{ij}ẋⁱẋʲ)dt · **s = rθ is the definition of the radian**, and the *Arc length* article says flatly of C = 2πr: **"This equation is a definition of π."**

**History worth recording:** Torricelli rectified the logarithmic spiral (1645), Wren the cycloid (1658), Neile the semicubical parabola (1657/59, credited by Wallis), Leibniz the catenary (1691); **van Heuraet (1659) and Fermat (1660) independently reduced rectification to quadrature**.

**New non-rectifiability data:** Koch curve — perimeter 3s(4/3)ⁿ → ∞, finite enclosed area 8/5 of the seed triangle, **Hausdorff dimension ln4/ln3 ≈ 1.26186**. Weierstrass function — the minimum odd b is **7**; **Hausdorff dimension 2 + log_b a, settled only in 2018**; predecessors Bolzano 1831 and Cellérier ~1860. Space-filling curves — **"No differentiable space-filling curve can exist"**; **Hahn–Mazurkiewicz**: a nonempty Hausdorff space is a continuous image of [0,1] iff it is compact, connected, locally connected and second-countable. And the general fact: **there are continuous curves on which every non-degenerate arc has infinite length**.

### 2.3 The scaling proof that C/d is circle-independent

Let T(x) = c + r·x be a similarity mapping S¹ onto K(c,r). Then |T(p)−T(q)| = r|p−q| for every pair, so **Λ(P, T∘γ) = r·Λ(P,γ)** for every partition, and taking suprema, **Λ(T∘γ) = r·Λ(γ)**. Arc length is reparametrization-invariant, so the circumference of K(c,r) is r times that of S¹. By Rudin 6.27 applied to γ(t)=E(it), which by Thm 8.7(d) is a simple closed curve with range exactly S¹, Λ(S¹) = ∫₀^{2π}|iE(it)|dt = 2π. Hence **C(r) = 2πr and C/d = π for every circle** — same constant, no geometry assumed.

**Area.** Lebesgue measure scales as λ(T(A)) = r²λ(A), so A(r) = r²A(1); and A(1) = 2∫_{−1}^{1}√(1−x²)dx = π under x = sin θ. Hence **A(r) = πr² with the same π**. The relation **A = ½Cr is exactly what forces the same π into both formulas**. Classical routes: Archimedes' double reductio with inscribed/circumscribed polygons · the Cusa/Leonardo rearrangement into a parallelogram of base → πr and height → r · the "unwrap into a triangle" proof (½·2πr·r) · trigonometric substitution · onion/shell integration ∫₀^r 2πt dt (rigorously, polar change of variables) · the coarea formula · Green's theorem · the isoperimetric inequality · the inscribed n-gon A_n = ½nr²sin(2π/n) → πr² using sin x / x → 1. Wikipedia explicitly notes the modern practice of defining π independently of circles **"to avoid circular reasoning."**

### 2.4 Trigonometric identities — the complete taxonomy is 27 categories, 187 items

Part I delivered ~100 identities in 24 categories. The authoritative structure is **27 categories / 187 numbered identities**. Categories Part I covered adequately: Pythagorean · even/odd · cofunction · supplementary · shifts and periodicity · angle sum and difference · double/triple/general multiple · half-angle · power reduction · product-to-sum · sum-to-product · tangent half-angle · linear combinations · Lagrange and Dirichlet kernel · series and infinite products · triangle laws · inverse-trig · complex-exponential · identities without variables · π via arctangent.

**Categories Part I omitted entirely — add these eight:**

- **(v) Reflection in 3π/4** (6 identities): sin(3π/2−θ)=−cos θ, cos(3π/2−θ)=−sin θ, tan(3π/2−θ)=+cot θ, and the three reciprocals.
- **(vi) Conjugate / reflection in π** (6): sin(2π−θ)=−sin θ, cos(2π−θ)=+cos θ, tan(2π−θ)=−tan θ, and reciprocals.
- **(ix) Sums of infinitely many angles** (2): sin(Σθ_i) = Σ_{k odd}(−1)^{(k−1)/2}Σ_{|A|=k}(∏_{i∈A}sin θ_i ∏_{i∉A}cos θ_i), and the even-k analogue for cos, valid for absolutely convergent Σθ_i.
- **(xvi) Hermite's cotangent identity, finite products, roots of unity** (8): Hermite's cot(z−a₁)⋯cot(z−a_n) = cos(nπ/2) + Σ_k A_{n,k}cot(z−a_k) with A_{n,k}=∏_{j≠k}cot(a_k−a_j) · ∏_{k=1}^{n−1}sin(kπ/n) = n/2^{n−1} · sin nx = 2^{n−1}∏_{k=0}^{n−1}sin(kπ/n + x) · crd(nx) = ∏crd(2kπ/n − x) · zⁿ−1 = ∏(z−e^{2kiπ/n}) · ∏cos(kπ/n) = sin(πn/2)/2^{n−1} · ∏tan(kπ/n) = n/sin(πn/2), with ∏_{k=1}^{m}tan(kπ/(2m+1)) = √(2m+1) · the **Butterworth** products ∏sin((2k−1)π/4n) = ∏cos((2k−1)π/4n) = √2/2ⁿ.
- **(xix) Linear fractional transformations** (2): f_α(x) = ((cos α)x − sin α)/((sin α)x + cos α) satisfies f_α ∘ f_β = f_{α+β} and the two commute; and if (ai+b)/(ci+d) = pi+q with tan φ = c/d then (a tan θ + b)/(c tan θ + d) = p tan(θ−φ) + q.
- **(xxi, expanded) Bernoulli/Euler-number series and Bessel expansions** (4): tan x = Σ B_{2n}(−4)ⁿ(1−4ⁿ)x^{2n−1}/(2n)! = x + x³/3 + 2x⁵/15 + ⋯ for |x|<π/2 · sec x = Σ(−1)ⁿE_{2n}x^{2n}/(2n)! = 1 + x²/2 + 5x⁴/24 + ⋯ · cos(t sin x) = J₀(t)+2ΣJ_{2k}(t)cos 2kx and sin(t sin x)=2ΣJ_{2k+1}(t)sin((2k+1)x), plus the two cos-argument analogues.
- **(xxiii, expanded) Conditional triangle identities** (10+): for α+β+γ=180°, tan α + tan β + tan γ = tan α tan β tan γ · cot β cot γ + cot γ cot α + cot α cot β = 1 · cot½α + cot½β + cot½γ = cot½α cot½β cot½γ · tan½β tan½γ + tan½γ tan½α + tan½α tan½β = 1 · sin α+sin β+sin γ = 4cos½α cos½β cos½γ · cos α+cos β+cos γ = 4 sin½α sin½β sin½γ + 1 · sin2α+sin2β+sin2γ = 4 sin α sin β sin γ · cos2α+cos2β+cos2γ = −4cos α cos β cos γ − 1 · sin²α+sin²β+sin²γ = 2cos α cos β cos γ + 2 · cos²α+cos²β+cos²γ = −2cos α cos β cos γ + 1 · plus the **projection formula** c = a cos β + b cos α and the **law of cotangents** cot½α/(s−a) = 1/r.
- **(xxvii) Calculus** (1, but load-bearing): the six derivatives, ∫sin and ∫cos, and **lim_{x→0} sin x / x = 1** from sin θ < θ < tan θ by squeezing — **with the explicit note that this classical proof compares areas of sectors and is exactly the circularity the analytic definitions exist to avoid.**

**Also add within categories Part I did cover:** sec and csc of sums (61, 60) and the full elementary-symmetric-polynomial forms sec(Σθ_i)=∏sec θ_i/(e₀−e₂+e₄−⋯), csc(Σθ_i)=∏sec θ_i/(e₁−e₃+e₅−⋯) · the general power-reduction formulas for odd and even n · ∏_{k=1}^n cos θ_k = 2^{−n}Σ_{e∈{±1}ⁿ}cos(e₁θ₁+⋯+e_nθ_n) · tan θ tan φ and tan θ/tan φ in product-to-sum form · Σ_{k=1}^n cos((2k−1)α) = sin(2nα)/(2 sin α) · **Euclid XIII.10**: sin²18° + sin²30° = sin²36° · the sin/cos/tan product triples at 10°,15°,20°,50°,70°,75° · tan50°tan60°tan70° = tan80° and tan40°tan30°tan20° = tan10° · cos24°+cos48°+cos96°+cos168° = ½ · **Euler's arctangent identity** arctan(1/p) = arctan(1/(p+q)) + arctan(q/(p²+pq+1)) · **atan2**(y,x) = 2arctan(y/(√(x²+y²)+x)) = arg(x+iy) · the six **integral forms** of the inverse trig functions · the six **indefinite integrals** of them · **arctan(nx) = Σ_{m=1}^{n}arctan(x/(1+(m−1)mx²))** · half-angle forms of the inverses · **Euler's accelerated arctan series** arctan z = Σ 2^{2n}(n!)²z^{2n+1}/((2n+1)!(1+z²)^{n+1}).

**Chebyshev material to make explicit:** the recurrences cos nx = 2cos x·cos((n−1)x) − cos((n−2)x) and sin nx = 2cos x·sin((n−1)x) − sin((n−2)x) · **cos nθ = T_n(cos θ)**, **sin((n+1)θ) = U_n(cos θ)sin θ** · T₀=1, T₁=x, T_{n+1}=2xT_n−T_{n−1}, giving T₂=2x²−1, T₃=4x³−3x, T₄=8x⁴−8x²+1 · orthogonality w.r.t. 1/√(1−x²) · **T_n/2^{n−1} is the minimax monic polynomial on [−1,1]**.

**The cotangent partial-fraction expansion deserves its own item with the Herglotz proof:** f(x)=π cot πx is continuous on ℝ∖ℤ, has period 1, satisfies f(x/2)+f((x+1)/2)=2f(x), and lim_{x→0}(f(x)−1/x)=0; the difference h=f−g of two such functions is identically 0 (Aigner–Ziegler, *Proofs from THE BOOK*, "Cotangent and the Herglotz trick"; formalized in the Archive of Formal Proofs as `Cotangent_PFD_Formula`). Euler's alternative is the logarithmic derivative of the sine product. Also π/sin πz = 1/z − 2zΣ(−1)ⁿ/(n²−z²).

### 2.5 Eleven definitions of sin and cos, and the complete π/trig source table

**Definitions:** power series · via e^{iz} · Re/Im of e^{it} · the ODE system x′=−y, y′=x (or y″+y=0) · **inverse-first from arcsin x := ∫₀^x dt/√(1−t²) or arctan x := ∫₀^x dt/(1+t²)** (Hardy, Appendix III) · **sector-area-first**, A(x) := x√(1−x²)/2 + ∫_x^1√(1−t²)dt with cos x the unique y ∈ [−1,1] such that A(cos x)=x/2 (Spivak Ch.15; Apostol §2.7) · **axiomatic** — Apostol *Calculus* §2.5 Thm 2.3 characterizes sin and cos by four properties: domain ℝ; cos 0 = sin(π/2) = 1 and cos π = −1; cos(y−x)=cos y cos x + sin y sin x; and 0 < cos x < sin x / x < 1/cos x on (0,π/2) · geometric (right triangle / unit circle) · infinite product · **Bourbaki's topological-group definition** (*TG* VIII §2 "Measurement of angles; trigonometric functions"), the strict morphism ℝ → 𝕌 with kernel normalized so the period is named 2π · and tan, cot, sec, csc as quotients, all meromorphic on ℂ with simple poles.

**Hardy's methodological remark (§158) is the single best justification for the whole analytic program**, and should be quoted: the geometric definition *"rests on an unproved assumption"* — namely that angles admit numerical measure — and arc length is unavailable because *"we have not proved that the arc of a curve, even of a circle, possesses a length."* Hence *"we must therefore found our definition on the notion not of length but of **area**."*

| Source | π | sin, cos | Location |
|---|---|---|---|
| Rudin *PMA* | **π := 2x₀**, x₀ = smallest positive zero of C | C=½[E(ix)+E(−ix)], S=(1/2i)[E(ix)−E(−ix)] | (46), (51), p.182–183 |
| Rudin *R&CA* | π := 2t₀ via **cos 2 < −1/3** | cos t := Re e^{it}, sin t := Im e^{it} | Prologue (4), (8) |
| **Tao II** | **π := inf{x>0 : sin x = 0}** (no factor 2) | cos z := (e^{iz}+e^{−iz})/2, sin z := (e^{iz}−e^{−iz})/2i | Def. 4.7.1, Lemma 4.7.3, **Def. 4.7.4** |
| Lebl II | π := 2 inf{x>0 : cos x = 0} | via e^{iz} | **Prop. 11.4.2(x)** |
| Bartle & Sherbert | **π := 2γ**; **2.828 < π < 3.185** | C, S = unique solutions of y″=−y, by integral iteration | Def. 8.4.10; Thm 8.4.1 |
| Landau | Def. 61 + Thm 262: unique π>0 with cos(π/2)=0, cos>0 on [0,π/2) | power series, Defs 59, 60 | Ch.16 |
| Spivak | **π := 2∫_{−1}^{1}√(1−x²)dx** | cos x = unique y ∈ [−1,1] with A(cos x)=x/2; sin x := √(1−cos²x) | Ch.15, p.305–306 |
| Apostol *Calculus* | π = area of the unit disk | **three ways**: axiomatic (§2.5 Thm 2.3), sector area (§2.7), power series (§11.11) | Ch.2, Ch.11 |
| Hardy | **½π := ∫₀^∞ dt/(1+t²)** | arctan m := ∫₀^m dt/(1+t²); tan = inverse; cos y := 1/√(1+x²), sin y := x/√(1+x²) | Appendix III (1)–(6); motivation §158 |
| Courant & John | §1.8f **"The Number π as a Limit"** (polygon perimeters), p.80 | §1.3c, geometric and informal | Vol. I |
| **Zorich** | **not analytically defined in Vol. I** | (5.118)/(5.119) power series; (5.121) via e^{iz} | §5.5.3; arc length §6.4.2 p.377 |
| Bourbaki | *FRV* III §1.3 "…the number π"; definition in *TG* VIII §2 | *TG* VIII §2, strict morphism ℝ → 𝕌 | see above |
| **Abbott** | **never defined** | **never defined** (§6.6 explicitly assumes) | — |
| Apostol *Math. Analysis* | assumed | assumed; complex ones from e^{iz} (§1.32) | Def. 1.40 §1.26 |
| Hairer & Wanner | I.4 **"Computation of Pi", p.51** | I.4 (historical), I.5 "A New View on Trigonometric Functions" | Ch. I |

**Rudin's own pointers for alternative non-geometric approaches**, worth chasing: **W. F. Eberlein**, *Amer. Math. Monthly* **74** (1967) 1223–1225, and **G. B. Robison**, *Math. Mag.* **41** (1968) 66–70. **Hardy's pointer** for the series-first route: Whittaker & Watson, *Modern Analysis*, Appendix A.

---

## 3. §11 COMPLETED — COMPLEX EXPONENTIAL

**Four proofs of Euler's formula:** power series, splitting real and imaginary parts via the 4-cycle of iⁿ · the differential-equation proof, f(θ) = e^{iθ}/(cos θ + i sin θ) has f′ ≡ 0 and f(0)=1 · the polar-coordinate proof, write e^{ix}=r(cos θ+i sin θ), differentiate, get dr/dx=0 and dθ/dx=1 · from the limit definition.

**Group-theoretic layer (worth its own items):** t ↦ e^{it} is a surjective morphism of topological groups ℝ → 𝕋 = S¹ with kernel 2πℤ; **0 → ℤ → ℝ → 𝕋 → 0 is exact**; ℝ is the **universal cover** of S¹ and π₁(S¹) ≅ ℤ; **𝕋 ≅ U(1) ≅ SO(2) ≅ ℝ/ℤ ≅ ℝ/2πℤ**, compact, connected, 1-dimensional, not simply connected.

**Complex logarithm, complete:** log z = ln|z| + i arg z multivalued; principal Log z with Im ∈ (−π,π], holomorphic on ℂ∖ℝ_{≤0}; a **branch** is a continuous L on connected open U with e^{L(z)}=z, and on simply connected U ∌ 0, L(z) = b + ∫_a^z dw/w along any path. **No continuous logarithm exists on all of ℂ\*** — a topological (winding) obstruction, witnessed by ∫_γ dz/z = 2πi. Each branch is holomorphic with L′(z)=1/z, hence conformal. The **Riemann surface** R = {(z,θ)} is the universal cover of ℂ\*, biholomorphic to ℂ, on which log_R is single-valued and holomorphic.

**Roots of unity:** ζ_k = exp(2πik/n); zⁿ−1 = ∏(z−ζ^k); they form a cyclic group of order n; **they sum to 0 for n>1**; zⁿ−1 = ∏_{d|n}Φ_d(z) with Φ_n the cyclotomic polynomial; they underlie the DFT.

**Fundamental theorem of algebra** — Rudin *PMA* Thm 8.8 follows immediately from 8.7(d) by picking θ with e^{ikθ}b_k = −|b_k| and a minimum-modulus argument. Five proof families: complex-analytic (Liouville, maximum modulus, argument principle, Rouché) · topological (winding number) · algebraic (induction on powers of 2 + Galois + IVT) · real-analytic (Sturm chains) · geometric (Gauss–Bonnet). Wikipedia's framing is worth recording: **"All proofs below involve some mathematical analysis, or at least the topological concept of continuity"** — completeness of ℝ is unavoidable.

**The scope question, answered.** *Typically included* in a first rigorous course (Rudin Ch.8 is the canonical boundary): complex power series with Cauchy–Hadamard and term-by-term differentiation; E(z) entire; the addition theorem by Cauchy product; C, S from E(ix); the smallest positive zero and π; 2πi-periodicity; the bijection [0,2π) → S¹; Λ(S¹)=2π; and — because it needs nothing further — **the fundamental theorem of algebra**. Tao II §4.6 and Lebl II §11.4 match this depth exactly; Bartle & Sherbert stay real-valued throughout §§8.3–8.4. *Typically deferred*: the multivalued logarithm, branches and cuts, the Riemann surface of log; complex powers z^w; Cauchy's theorem, the integral formula and residues (hence the residue proofs of Basel, ∫dx/(1+x²), and Euler's reflection formula); Liouville, maximum modulus, argument principle, Rouché (hence *those* FTA proofs); Mittag-Leffler and Weierstrass factorization (hence the systematic sine product and cotangent expansion — **though the Herglotz trick is an elementary substitute**); analytic continuation; conformality. *Borderline*: Euler's sine product and cotangent partial fractions (elementary via Herglotz); Basel (Fourier/Parseval or Cauchy's cotangent squeeze, both real); Wallis (real, via ∫₀^{π/2}sinⁿ); Stirling; Gamma (Rudin §8.9ff, Bohr–Mollerup log-convexity); the Gaussian integral (needs Fubini and polar coordinates, i.e. **multivariable, not complex**).

---

## 4. FINAL TALLIES AND REMAINING GAP

**Deliverable totals across Parts I–III:**

| Requirement | Target | Delivered |
|---|---|---|
| Topics covered | 12 | 12, each with definitions / theorems / examples / source notes |
| Distinct counterexamples | 60+ | **≈300** de-duplicated, indexed against Gelbaum & Olmsted's 239 |
| Trigonometric identities | "complete standard set" | **187 items in 27 categories** |
| Definitions of π | "all" | **16**, each with an equivalence sketch |
| Characterizations of exp | "all" | **10 of exp, 16 of e**, with the full equivalence web and regularity conditions |
| Sources actually fetched | the listed set | **19 textbooks + 14 course syllabi/schedules**, all primary-text extractions |
| "Commonly missed" items | a list | **80** |

**The one remaining gap:** the **Bishop & Bridges constructive treatment** of the elementary functions (*Foundations of Constructive Analysis*; *Constructive Analysis*, chapter on the elementary functions) was assigned to a sub-agent that did not return. Everything else the brief asked for under that heading is covered independently — the scaling proof that C/d is circle-independent comes from Rudin 6.26/6.27, and the arcsine-first construction from Hardy's Appendix III. Also unfetched: Keith Conrad's blurbs, Körner's *A Companion to Analysis*, and the Gowers/Cambridge Part IA notes (though I extracted the Cambridge IA theorem list directly from the Dexter Chua notes in Part I).

**One further methodological item that recurred across three agents and deserves to head any library page on trigonometry:** the standard calculus proof of lim_{x→0} sin x/x = 1, via sin θ < θ < tan θ and the squeeze theorem, **compares areas of circular sectors and is therefore circular** if π and arc length have not yet been defined. arXiv:1302.1167 identifies this precisely and surveys the four rigorous repairs — power series, ODE, arcsin as an integral, and a rigorous arc-length treatment. This defect is the motivating reason the entire analytic program in §10 exists.
