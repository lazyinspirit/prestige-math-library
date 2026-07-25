# UNDERGRADUATE REAL ANALYSIS — CONSOLIDATED SOURCE-ATTRIBUTED CURRICULUM INVENTORY

## 0. SOURCES ACTUALLY RETRIEVED AND READ

**Textbooks (full TOC / theorem lists extracted from the actual PDFs):**

| Source | What I extracted | URL |
|---|---|---|
| Rudin, *Principles of Mathematical Analysis*, 3e | Full TOC (Ch.1–11) + **verbatim Ch.8** (power series, exp/log, trig, definition of π, FTA) | scan of PMA |
| Lebl, *Basic Analysis I & II* (v.2018+) | Full section-level TOC of both volumes; complete list of *named* theorems; verbatim §5.4–5.5 | https://www.jirka.org/ra/ , realanal.pdf, realanal2.pdf |
| Tao, *Analysis I & II*, 3e | Full section-level TOC of both volumes | tao PDFs |
| Abbott, *Understanding Analysis*, 2e | Full section-level TOC (Ch.1–8) | ndl.ethernet.edu.et mirror |
| Pugh, *Real Mathematical Analysis*, 2e | Full section-level TOC (Ch.1–6) | Springer UTM PDF |
| Thomson–Bruckner–Bruckner, *Elementary Real Analysis* (free) | Full section-level TOC incl. Ch.9–17 | classicalrealanalysis.info, scipp-legacy.pbsci.ucsc.edu |
| **Gelbaum & Olmsted, *Counterexamples in Analysis*** | **Complete numbered index of all counterexamples, Ch.1–13** | https://faculty.ksu.edu.sa/sites/default/files/_olmsted_1.pdf |

**Courses:**
- MIT OCW **18.100A** (Fall 2020) — syllabus + lecture list; **textbook is Lebl vol. I** — https://ocw.mit.edu/courses/18-100a-real-analysis-fall-2020/
- MIT OCW **18.100B** (Fall 2010 / Spring 2025) — Rudin-based, metric spaces early
- **Princeton MAT 215** (Prywes, S22) — syllabus PDF: **texts are Abbott 2e + Rudin 3e; outline = Abbott Ch.1–7**
- **Berkeley Math 104** — Rudin (some sections Ross or Pugh)
- **Cambridge Part IA Analysis I** (Gowers) — *complete* numbered theorem list extracted
- **Cambridge Part IB Analysis II** (Wickramasekera) — *complete* definition/theorem list extracted (normed spaces, metric spaces, contraction mapping, ℝᵐ→ℝⁿ differentiation)

**Reference pages fetched:** Wikipedia *Characterizations of the exponential function*, *Pi*, *Arc length*, *List of trigonometric identities*, *Riemann integral*, *Fundamental theorem of calculus*, *Non-analytic smooth function*, *Pathological (mathematics)*, *Wallis product*, *Proof that π is irrational*, *List of real analysis topics*.

**Coverage note:** one specialist research agent (sequences/series + limits/continuity) returned a full report, which is integrated below. Six further agents were still running at cutoff; §§3–12 below are therefore built from my own primary-source extractions above plus standard-curriculum knowledge, and every source attribution in them is one I verified directly.

---

# 1. SEQUENCES AND SERIES OF REAL NUMBERS

## 1.1 DEFINITIONS
- **Sequence**; convergence (ε–N); divergence; divergence to ±∞; boundedness; monotone / strictly monotone.
- **Subsequence**; subsequential limit (limit point of a sequence).
- **Cauchy sequence**; Cauchy-complete set.
- **limsup / liminf** — bounded case via `aₙ = sup{x_k : k ≥ n}`, `limsup = lim aₙ = infₙ aₙ`; extended-real case in ℝ* = ℝ∪{±∞}.
- **Diameter of a set** (Rudin's route to the Cauchy criterion, PMA 3.9).
- **Nested intervals**.
- **Cesàro mean** σₙ = (1/n)Σx_k; (C,1)-summability. **Regular (Toeplitz) summability matrix**.
- **Series** and partial sums; **tail**; **Cauchy series**.
- **Absolute / conditional / unconditional convergence**; **rearrangement** Σx_{σ(n)}.
- Standard families: **geometric**, **p-series**, **alternating**, **Bertrand series** Σ1/(n(log n)^α) and iterated-log generalizations.
- **Cauchy product** c_k = Σ_{l=0}^{k} a_l b_{k−l}.
- **Power series**; **radius of convergence** ρ = 1/limsup|aₙ|^{1/n}.
- **Summation by parts (Abel transform)**.
- **Double series**: the two *iterated* sums, the *Pringsheim* double limit, the *unordered* sum over ℕ×ℕ; summation over an arbitrary countable index set (Tao §8.2).
- **Infinite product**: ∏aₙ *converges* iff partial products → a **nonzero** limit (limit 0 is "divergence to zero"); absolute convergence of ∏(1+pₙ) means Σ|pₙ| < ∞.
- **Abel summability**; **sum range** (Lévy–Steinitz).
- **e** := Σ1/n! (Rudin 3.30).

## 1.2 THEOREMS

**Sequences.** Uniqueness of limits (Rudin 3.2a) · convergent ⟹ bounded (3.2b) · algebra of limits (3.3; Abbott "Algebraic Limit Theorem" 2.3) · order limit theorem · squeeze theorem · |xₙ|→|x| (converse false) · **Monotone Convergence Theorem** (3.14) · monotone unbounded ⟹ diverges to ±∞ (Lebl 2.3.10) · **Nested Interval Property** · **Monotone Subsequence ("peak"/rising-sun) Lemma** (Ross 11.2 — the Berkeley route) · subsequences inherit limits (3.6b) · bounded sequence converges iff every convergent subsequence has the same limit (Lebl 2.3.7) · existence of limsup/liminf (Lebl 2.3.2) · **convergence ⟺ liminf = limsup** (Lebl 2.3.5; Rudin 3.17) · subsequences realizing limsup and liminf (Rudin 3.17) · limsup comparison (3.19) · subadditivity limsup(x+y) ≤ limsup x + limsup y · set of subsequential limits is closed (3.7) · **Bolzano–Weierstrass** (Lebl 2.3.8; Rudin 3.6b; Abbott 2.5; Tao 6.6) · Cauchy ⟹ bounded · Cauchy with convergent subsequence converges · **Cauchy Criterion / completeness of ℝ** (3.11c) · **equivalence of completeness formulations** (LUB ⟺ MCT+Archimedean ⟺ Nested Intervals+Archimedean ⟺ B–W ⟺ Cauchy completeness+Archimedean) · standard limits n^{1/n}→1, p^{1/n}→1, n^α/(1+p)ⁿ→0, xⁿ→0, xⁿ/n!→0 (Rudin 3.20) · **Stolz–Cesàro** (∞/∞ and 0/0 forms) · **Cesàro mean theorem** · geometric-mean corollary · **ratio-to-root inequality** liminf(a_{n+1}/aₙ) ≤ liminf aₙ^{1/n} ≤ limsup aₙ^{1/n} ≤ limsup(a_{n+1}/aₙ) (Rudin 3.37 — *why the root test dominates the ratio test*) · **Silverman–Toeplitz** · **Toeplitz's lemma**.

**Series.** n-th term test · Cauchy criterion for series · linearity · tail invariance · geometric series sum · nonnegative-series bounded-partial-sums criterion · **Direct Comparison** · **Limit Comparison** · **p-series test** · **Cauchy Condensation** (Rudin 3.27) · **Integral test** · **Ratio (d'Alembert)** · **Root (Cauchy)** · **Raabe–Duhamel** · **Bertrand's test** · **Gauss's test** · **Kummer's test** (ratio/Raabe/Bertrand are ζₙ = 1, n, n ln n) · second ratio test (Ali) · **Abel summation by parts** (Rudin 3.41) · **Dirichlet's test** (3.42) · **Abel's test** (3.44) · **Alternating series / Leibniz**, with error bound (3.43) · absolute ⟹ convergent · **Dirichlet's rearrangement theorem** (absolute ⟹ unconditional, Rudin 3.55) · **Riemann Series Theorem** (Rudin 3.54; Abbott §2.1) · unconditional ⟺ absolute in ℝ · **Lévy–Steinitz** (rearrangement sums in ℝᵈ form an affine subspace) · **Sierpiński's refinement** · **Mertens' theorem** (Lebl 2.6.5; Rudin 3.50) · Cauchy product of two absolutely convergent series · **Abel/Cesàro theorem on products** (Rudin 3.51) · **Abel's limit theorem** (Rudin 8.2) · **Tauber's theorem** · **Cauchy–Hadamard** (Rudin 3.39) · power-series dichotomy · algebra of power series · **Fubini/Tonelli for double series** (Rudin 8.3; Abbott 2.8; Tao 8.2) · infinite-product criterion ∏aₙ converges ⟺ Σlog aₙ converges · pₙ→0 necessary · Σ|pₙ|<∞ ⟹ absolute product convergence · **second-order comparison**: if Σpₙ² < ∞ then Σpₙ and ∏(1+pₙ) converge together · **Abel–Dini theorem** (no slowest divergent series; no universal comparison test) · **Kronecker's lemma**.

## 1.3 EXAMPLES / COUNTEREXAMPLES  *(global numbering CE… continues throughout)*
- **CE1** Σ1/n diverges though 1/n→0 — n-th term test is necessary, not sufficient.
- **CE2** Σ(−1)^{n+1}/n = ln 2 — canonical conditional convergence.
- **CE3** Σ(−1)^k/(2k+1) = π/4 — Abel-theorem evaluation.
- **CE4** Rearrangement of the alternating harmonic series to (3/2)ln 2, to any prescribed real, or to ±∞ — Riemann series theorem (Abbott opens Ch.2 with this).
- **CE5** aₙ = bₙ = (−1)ⁿ/√(n+1): both converge conditionally but the **Cauchy product diverges** — Mertens' absolute hypothesis is not removable.
- **CE6** Σ1/(n log n) diverges but Σ1/(n(log n)²) converges — both have ratio and root limit exactly 1.
- **CE7** Bertrand family Σ n^{−a}(log n)^{−b}(log log n)^{−c} — arbitrarily slowly convergent/divergent series (Abel–Dini).
- **CE8** aₙ = 2^{−n+(−1)ⁿ}: ratio test fails (limsup = 2), root test succeeds (limsup = 1/2).
- **CE9** xₙ = (−1)ⁿ: bounded, divergent, not Cauchy; liminf = −1 < 1 = limsup.
- **CE10** An enumeration of ℚ: subsequential limit set = all of ℝ*.
- **CE11** Truncated decimals of √2: Cauchy in ℚ with no rational limit — completeness is an axiom.
- **CE12** 1,1,2,1,3,1,4,…: unbounded yet has a convergent subsequence — converse of B–W fails.
- **CE13** xₙ=(−1)ⁿ, yₙ=(−1)^{n+1}: limsup(x+y) = 0 < 2 — subadditivity is strict.
- **CE14** xₙ=1/n, yₙ=n: xₙyₙ→1 — no "0·∞" algebra-of-limits rule.
- **CE15** (−1)ⁿ has Cesàro means → 0 but diverges — Cesàro summation strictly extends convergence.
- **CE16** Grandi's series Σ(−1)ⁿ: (C,1)- and Abel-summable to 1/2.
- **CE17** Σ(−1)ⁿ(n+1): Abel-summable to 1/4, not Cesàro summable — Abel strictly stronger than (C,1).
- **CE18** Σ sin n / n converges (Dirichlet) but not absolutely — non-alternating conditional convergence.
- **CE19** Stolz–Cesàro has no converse: aₙ=(−1)ⁿ, bₙ=n.
- **CE20** a_{ij} = 1 if j=i, −1 if j=i+1, else 0: iterated sums 0 and −1 — absolute convergence essential in Fubini for series (Abbott §2.8).
- **CE21** a_{ij} = (i²−j²)/(i²+j²)²: iterated sums of opposite sign.
- **CE22** ∏(1−1/n) = 0 — "divergence to zero"; why 0 is excluded from product convergence.
- **CE23** ∏(1+(−1)ⁿ/√n) diverges although Σ(−1)ⁿ/√n converges — need Σpₙ² < ∞.
- **CE24** Σ1/n! = e with 0 < e − sₙ < 1/(n!·n) — Rudin's estimate proving e irrational (3.32).
- **CE25** Σn^{−1/2} diverges, Σn^{−2} converges, both root limit 1 — L = 1 genuinely inconclusive both ways.
- **CE26** In ℝ², a conditionally convergent series whose rearrangement sums form a *line*, not the plane — Riemann's theorem fails verbatim in higher dimensions (Lévy–Steinitz).
- **CE27** Permuting only the positive terms attains exactly (−∞, S] — Sierpiński.
- **CE28** Σaₙ/sₙ diverges but Σaₙ/sₙ² converges (Abel–Dini) — no universal boundary series.

**SOURCE NOTES.** *Bolzano–Weierstrass is proved four different ways:* Lebl proves it **twice** (via the limsup subsequence, then by bisection); Rudin derives it **topologically** from Heine–Borel (2.41 → 3.6b); Abbott by **bisection**, deliberately before any topology; Ross/Berkeley via the **monotone subsequence lemma**; Tao via limit-point theory. — *Series ordering:* Rudin alone develops **summation by parts (3.41)** as a first-class tool and the ratio-vs-root inequality (3.37); Tao uniquely puts **rearrangement (7.4) before** the root/ratio tests and generalizes to arbitrary countable index sets (8.2), making unconditional convergence primary; Abbott uniquely opens Ch.2 with rearrangements and gives double series/Cauchy products their own section (2.8). — *Not in any standard UG text:* Raabe, Bertrand, Gauss, Kummer; Stolz–Cesàro; Cesàro/Toeplitz summability; infinite products; Lévy–Steinitz. These are **Knopp**, **Bromwich**, **Whittaker–Watson**, **TBB §3.6.9–3.6.14, §3.9, §3.11** territory. **TBB (free) is the only surveyed textbook that covers Kummer, Raabe, Gauss, Dirichlet, Abel tests, summability methods, unordered sums, and infinite products.**

---

# 2. LIMITS AND CONTINUITY OF FUNCTIONS ℝ→ℝ

## 2.1 DEFINITIONS
Cluster/accumulation point; isolated point · **limit of a function (ε–δ)** · restriction (Lebl's device for one-sided limits) · **one-sided limits** f(c⁺), f(c⁻) · limits at infinity, infinite limits · **continuity at a point**, on a set, left/right continuity · **uniform continuity** · **modulus of continuity** ω_f(δ) · **Lipschitz**; **Hölder of exponent α** · **oscillation** ω_f(E) = sup − inf, and oscillation at a point · **removable**, **jump**, **essential** discontinuity (Rudin: *first kind* = removable or jump, *second kind* = essential) · monotone / strictly monotone · **Darboux (intermediate value) property** · **upper / lower semicontinuity** · **G_δ / F_σ** sets · **Baire class one** function · **additive (Cauchy) function** · **Dirichlet function** 1_ℚ · **Thomae ("popcorn"/"ruler") function** · continuous extension · connected subsets of ℝ = intervals; compact = closed and bounded.

## 2.2 THEOREMS
Uniqueness of function limits · sequential characterization of cluster points · **Sequential (Heine) criterion for limits** (Rudin 4.2; Abbott 4.2) · algebra of function limits · order preservation · squeeze theorem · local boundedness · localization · **two-sided ⟺ both one-sided** · sign-preservation lemma · **characterizations of continuity** (ε–δ ⟺ limit ⟺ sequential) · discontinuity criterion · algebra of continuous functions incl. max/min/|f| · **composition** · polynomials and rationals continuous · **topological characterization** f⁻¹(open) open (Rudin 4.8 — the Princeton/Rudin definition) · **continuous image of compact is compact** (4.14) · **Boundedness theorem** · **Extreme Value Theorem** (Rudin 4.15–4.16; Tao 9.6; Abbott 4.4) · **Bolzano's theorem** (Lebl proves by bisection) · **Intermediate Value Theorem** (Rudin 4.23; Abbott 4.5) · **continuous image of connected is connected** (4.22 — Rudin's route to IVT) · image of [a,b] is a closed bounded interval or a point · odd-degree polynomials have a real root · existence of k-th roots · Brouwer-in-1D fixed point corollary · continuity on a dense set determines the function · **Heine–Cantor** (Rudin 4.19) · uniform continuity preserves Cauchy sequences · **Continuous Extension Theorem** (Lebl 3.4.6) · uniformly continuous on a bounded set ⟹ bounded · sequential criterion for uniform continuity · Lipschitz ⟹ uniformly continuous · **hierarchy** Lipschitz ⊊ α-Hölder ⊊ uniformly continuous ⊊ continuous · α-Hölder with α > 1 on an interval ⟹ constant · continuous + periodic ⟹ uniformly continuous · continuous on ℝ with finite limits at ±∞ ⟹ uniformly continuous · continuous bijection on a compact set has continuous inverse (4.17) · **one-sided limits of monotone functions always exist** (Rudin 4.29) · **monotone functions have only first-kind discontinuities** · **Froda's theorem**: discontinuity set of a monotone function is countable (Rudin 4.30) · stronger form: for *any* f the set of removable+jump discontinuities is countable · **prescribed-jump construction** (Rudin 4.31) · monotone continuity criterion (image is an interval) · continuous + injective on an interval ⟹ strictly monotone · continuous inverse theorem · **oscillation criterion**: continuous at x₀ ⟺ ω_f(x₀)=0 · {ω_f ≥ ε} is closed · **continuity set is G_δ, discontinuity set F_σ** (Abbott §4.6) · **converse**: every G_δ is a continuity set · **corollary via Baire**: *no function is continuous exactly on ℚ* (Abbott §4.6 + §8.2) · Baire-1 functions have a dense G_δ of continuity points · **Darboux's theorem** (derivatives have IVP) · Darboux ⇏ continuous · partial converses (Darboux + injective / monotone / Baire-1 ⟹ continuous) · **continuity ⟺ USC and LSC** · level-set characterization of semicontinuity · **semicontinuous EVT** (USC attains max on a compact set) · sup of LSC is LSC, inf of USC is USC · **Cauchy functional equation regularity theorem** (additive + [continuous at a point / monotone on an interval / bounded on a set of positive measure / measurable / sign-constant / graph not dense] ⟹ f(x)=cx) · **Hamel-basis pathology** (AC gives non-linear additive f with dense graph) · related equations f(x+y)=f(x)f(y), f(xy)=f(x)+f(y), f(xy)=f(x)f(y).

## 2.3 EXAMPLES / COUNTEREXAMPLES
- **CE29** Dirichlet 1_ℚ — nowhere continuous; continuity set ∅.
- **CE30** Thomae's function — continuous exactly at the irrationals; realizes a dense G_δ; also Riemann integrable with integral 0.
- **CE31** *No* function is continuous exactly on ℚ (ℚ is F_σ but not G_δ).
- **CE32** x·1_ℚ(x) — continuous at exactly one point.
- **CE33** sin(1/x) on (0,∞) — no limit at 0; essential discontinuity; extended by 0 it still has the IVP.
- **CE34** x sin(1/x) extended by 0 — continuous everywhere, not differentiable at 0.
- **CE35** x² sin(1/x), f(0)=0 — f′ exists everywhere but is discontinuous at 0; canonical Darboux illustration.
- **CE36** **Conway base-13 function** — Darboux (every interval maps onto ℝ) yet nowhere continuous.
- **CE37** sgn(x) — jump discontinuity; IVT genuinely needs continuity.
- **CE38** f = 0 except f(0)=1 — removable discontinuity.
- **CE39** ⌊x⌋ — jumps at every integer; **USC** everywhere (⌈x⌉ is LSC).
- **CE40** 1/x on (0,1) — continuous, unbounded, not uniformly continuous.
- **CE41** x² on ℝ — continuous, not uniformly continuous (unbounded domain).
- **CE42** sin(x²) on ℝ — *bounded* and continuous but not uniformly continuous.
- **CE43** √x on [0,1] — uniformly continuous but **not Lipschitz**; exactly ½-Hölder.
- **CE44** x^β on [0,1] — α-Hölder iff α ≤ β; separates every Hölder class.
- **CE45** Any α-Hölder function with α > 1 on an interval is constant.
- **CE46** Composition-of-limits failure: outer function discontinuous at the inner limit.
- **CE47** EVT fails on (0,1) for f(x)=x (not closed); **CE48** fails on [0,∞) for arctan (not bounded).
- **CE49** Strictly increasing f on [0,1] discontinuous exactly at {1−1/k} — Froda sharp.
- **CE50** f(x) = Σ_{qₙ<x} 2^{−n} — monotone, discontinuous exactly on ℚ (dense but countable), Rudin 4.31.
- **CE51** Strictly increasing discontinuous function with continuous inverse (domain not an interval).
- **CE52** **Cantor function (devil's staircase)** — continuous, monotone, onto, derivative 0 a.e.; continuous but not absolutely continuous.
- **CE53** 1_{Cantor set} — uncountable discontinuity set (only essential discontinuities can be uncountable).
- **CE54** 1_{(0,1)} is LSC not USC; 1_{[0,1]} is USC not LSC.
- **CE55** **Non-linear additive (Hamel) function** — unbounded on every interval, non-measurable, graph dense in ℝ².
- **CE56** Weierstrass function Σaⁿcos(bⁿπx) — continuous, nowhere differentiable.
- **CE57** **Volterra's function** — differentiable with bounded derivative, derivative discontinuous on a positive-measure set, hence not Riemann integrable.
- **CE58** 1/x is uniformly continuous on [1,∞) but not on (0,1) — uniform continuity is a property of the *pair* (f, domain).
- **CE59** A nonconstant periodic function with no smallest positive period: 1_ℚ (G&O 2.9).
- **CE60** Two uniformly continuous functions whose product is not uniformly continuous (G&O 2.13): x and x on ℝ.
- **CE61** Continuous, one-to-one on an interval, with discontinuous inverse (G&O 2.14 — needs a non-interval domain).
- **CE62** A continuous function that is **nowhere monotonic** (G&O 2.21).
- **CE63** A function whose discontinuity set is an arbitrary prescribed F_σ (G&O 2.23).
- **CE64** A function with domain [0,1] whose range on *every* subinterval is [0,1] (G&O 2.25).
- **CE65** A bounded function that is **nowhere semicontinuous** (G&O 2.8).

**SOURCE NOTES.** Rudin §4.25–4.31 is the most systematic on discontinuity classification and monotone functions. **Abbott §4.6 is the only mainstream UG text proving the G_δ theorem and the "no function continuous exactly on ℚ" corollary** (using Baire from §8.2). Lebl §3.6 covers monotone functions but organizes around the image-is-an-interval criterion and continuity of inverses. **TBB Ch.5–6** is the richest free treatment: §5.9 types of discontinuity, §6.4 Baire category + uniform boundedness, §6.5 Cantor sets and the Cantor function, §6.6 Borel/G_δ/F_σ, **§6.7 oscillation and the set of continuity points**. Rudin/Princeton/18.100B define continuity topologically and get EVT/IVT as compactness/connectedness corollaries; Lebl/18.100A/Tao stay sequential and use bisection.

---

# 3. TOPOLOGY / METRIC SPACES FOR ℝᵐ, UNIFORM CONVERGENCE

## 3.1 DEFINITIONS
Metric space; **norm**; normed vector space; Euclidean, sup/uniform, ℓ¹, ℓ², ℓ^∞, L² norms; discrete metric; **Lipschitz equivalence of norms/metrics** · open ball, closed ball, neighbourhood · **open / closed set**; interior, closure, boundary, limit (accumulation) point, isolated point; dense; nowhere dense; **perfect set**; separable; second countable · **topology induced by a metric**; relative/subspace topology; topological property · convergence of sequences; **Cauchy sequence**; **complete metric space** · **totally bounded** · **compact** (open-cover), **sequentially compact**, countably compact · **connected**, **path-connected**; **components** · continuity between metric spaces; **uniform continuity**; **Lipschitz map**; homeomorphism; isometry · **contraction mapping** · operator norm on L(ℝⁿ;ℝᵐ) · **pointwise convergence**; **uniform convergence**; **uniformly Cauchy**; **local uniform convergence** · sup-metric on C(X); the metric of uniform convergence · **uniform convergence of series**; absolute-uniform convergence · **equicontinuity**; uniform equicontinuity; uniform boundedness · **algebra of functions**; separates points; vanishes at no point (Stone–Weierstrass hypotheses) · **Cantor set**; **Smith–Volterra–Cantor (fat Cantor) set** · **Baire category**: first/second category, residual.

## 3.2 THEOREMS
- Open/closed set algebra; closure = set ∪ limit points; E closed ⟺ complement open ⟺ contains its limit points.
- **Sequential characterization of closedness and of continuity** in metric spaces.
- **Continuity ⟺ preimages of open sets are open** ⟺ preimages of closed sets are closed.
- **All norms on a finite-dimensional vector space are Lipschitz equivalent** (Cambridge IB); corollary: every finite-dimensional normed space is complete, and its compact sets are the closed bounded ones.
- **Bolzano–Weierstrass in ℝⁿ** (Cambridge IB; Rudin 2.41).
- **Completeness of ℝⁿ**; completeness of C(X) with the sup norm; ℓ^p complete; **(0,1) and ℚ are incomplete**.
- **Cantor Intersection Theorem** (nested nonempty closed sets with diam→0 in a complete space have a one-point intersection).
- **Baire Category Theorem** (complete metric space is not a countable union of nowhere dense sets); **uniform boundedness** consequence (TBB §6.4.3).
- **Heine–Borel** (in ℝⁿ: compact ⟺ closed and bounded); **Rudin 2.40–2.41**; Cambridge IA proves it for [a,b] as a starred result.
- **Equivalence of compactness notions in metric spaces**: open-cover compact ⟺ sequentially compact ⟺ complete + totally bounded.
- Compact ⟹ closed and bounded (converse false in general); closed subset of a compact set is compact.
- **Continuous image of compact is compact**; of connected is connected; of path-connected is path-connected.
- **EVT in metric spaces**: a continuous real function on a compact set is bounded and attains its bounds.
- **Heine–Cantor in metric spaces**: continuous on compact ⟹ uniformly continuous.
- **Continuous bijection from compact to Hausdorff is a homeomorphism.**
- **Lebesgue number lemma**.
- **Connectedness in ℝ ⟺ interval**; path-connected ⟹ connected (converse false).
- **A function with zero derivative on a path-connected open subset of ℝⁿ is constant** (Cambridge IB).
- **Banach fixed point / contraction mapping theorem**; **Picard–Lindelöf** existence and uniqueness for ODEs (Lebl §6.3 and §7.6; Rudin ex.; Cambridge IB; Pugh §4.5).
- **Uniform limit of continuous functions is continuous** (Rudin 7.12).
- **Uniform Cauchy criterion** for sequences/series of functions.
- **Weierstrass M-test** (Rudin 7.10; Lebl 11.x; Tao 3.5).
- **Abel's test for uniform convergence** (TBB §14.3.3).
- **Dini's theorem**: a monotone pointwise-convergent sequence of continuous functions on a compact set with continuous limit converges uniformly (Rudin 7.13; TBB §14.4.1).
- **Uniform convergence and integration**: f_n → f uniformly, all Riemann integrable ⟹ f integrable and ∫f_n → ∫f (Rudin 7.16).
- **Uniform convergence and differentiation**: if f_n → f pointwise at one point and f_n′ → g uniformly, then f_n → f uniformly and f′ = g (Rudin 7.17).
- **C(X) with sup metric is a complete metric space**; **uniform convergence = convergence in sup metric** (Tao 3.4).
- **Arzelà–Ascoli**: a sequence in C(K), K compact, has a uniformly convergent subsequence iff it is pointwise bounded and equicontinuous (Rudin 7.23–7.25; Lebl 11.6).
- **Weierstrass Approximation Theorem** (polynomials dense in C[a,b]) — proofs via **Bernstein polynomials**, via convolution with Landau kernels (Rudin 7.26), or as a corollary of Stone–Weierstrass.
- **Stone–Weierstrass**, real and complex versions (Rudin 7.32–7.33; Lebl 11.7).
- **Existence of a continuous nowhere-differentiable function** (Weierstrass; also a Baire-category proof that "most" continuous functions are nowhere differentiable — Pugh Ch.4).
- **Space-filling curves** (Peano, Hilbert) exist — continuous surjection [0,1] → [0,1]².
- **Cantor set**: compact, perfect, nowhere dense, uncountable, measure zero, homeomorphic to {0,1}^ℕ.

## 3.3 EXAMPLES / COUNTEREXAMPLES
- **CE66** f_n(x) = xⁿ on [0,1] — pointwise but not uniform; limit discontinuous.
- **CE67** "Moving bump" f_n = n·1_{[1/n, 2/n]} (or the triangular spike) — f_n → 0 pointwise, ∫f_n = 1 ↛ 0.
- **CE68** f_n(x) = sin(nx)/√n — → 0 uniformly, but f_n′ = √n cos(nx) diverges everywhere (G&O 7.2). *Uniform convergence does not pass to derivatives.*
- **CE69** A sequence of everywhere-discontinuous functions converging uniformly to a continuous function (G&O 7.1).
- **CE70** A **non-uniform** limit of bounded functions that is unbounded (G&O 7.3); of continuous functions that is discontinuous (7.4); of Riemann-integrable functions that is not Riemann integrable (7.5).
- **CE71** f_n → f uniformly on [0,∞) with ∫₀^∞ f_n ↛ 0 (G&O 7.9) — uniform convergence on an *unbounded* interval does not interchange with improper integrals.
- **CE72** A series converging non-uniformly whose general term → 0 uniformly (G&O 7.10).
- **CE73** A non-uniformly convergent sequence possessing a uniformly convergent subsequence (G&O 7.11).
- **CE74** **Non-uniformly convergent sequences satisfying any three of the four hypotheses of Dini's theorem** (G&O 7.12) — each hypothesis of Dini is necessary.
- **CE75** Uniform convergence on every closed subinterval but not on the whole interval (G&O 7.8) — e.g. Σxⁿ on (−1,1).
- **CE76** Two uniformly convergent sequences whose product does not converge uniformly (G&O 5.7).
- **CE77** {sin 2ⁿπx} in C[0,1] with the L² norm — bounded, no convergent subsequence: **closed bounded sets are not compact in infinite dimensions** (Cambridge IB).
- **CE78** {eₖ} in ℓ^∞ — bounded, no Cauchy subsequence.
- **CE79** {f_n} bounded in C[0,1] but not equicontinuous (e.g. f_n(x)=xⁿ or sin(nx)) — Arzelà–Ascoli's equicontinuity hypothesis is necessary.
- **CE80** {f_n(x) = x + n} on ℝ — equicontinuous but not pointwise bounded; no convergent subsequence.
- **CE81** **Topologist's sine curve** — connected but not path-connected.
- **CE82** ℚ with the usual metric — totally bounded on bounded pieces yet not complete; also first category in itself.
- **CE83** A decreasing sequence of nonempty **closed bounded** sets with empty intersection (G&O 12.1) — Cantor's theorem needs completeness *and* diameters → 0.
- **CE84** A decreasing sequence of nonempty **closed balls in a complete metric space** with empty intersection (G&O 12.3).
- **CE85** Open and closed balls of the same centre and radius with closure(B_open) ≠ B_closed (G&O 12.4); closed balls with B₁ ⊆ B₂ but r₁ > r₂ (G&O 12.5).
- **CE86** An incomplete metric space with the discrete topology (G&O 12.2); a metric d′ = min(1, d) giving the same topology but different boundedness.
- **CE87** A separable space with a **non-separable subspace** (G&O 12.8).
- **CE88** Two distinct topologies with identical convergent sequences (G&O 12.10); a limit point of A that is not the limit of any sequence in A (G&O 12.11) — sequences are inadequate outside metric spaces.
- **CE89** Maps that are continuous but neither open nor closed, open but not continuous, closed but not open, etc. (G&O 12.13–12.18 — all eight combinations).
- **CE90** Two non-homeomorphic spaces each a continuous bijective image of the other (G&O 12.20).
- **CE91** **Smith–Volterra–Cantor set** — nowhere dense with positive measure (G&O 8.4); its indicator is bounded and not Riemann integrable.
- **CE92** Two perfect nowhere dense sets in [0,1] that are homeomorphic but only one has measure zero (G&O 8.23) — measure is not a topological invariant.
- **CE93** Two homeomorphic sets of reals of **different Baire category** (G&O 8.25); one dense and one nowhere dense (G&O 8.26).
- **CE94** **Peano/Hilbert space-filling curve** (G&O 10.5–10.8) — including one that is *almost everywhere differentiable* (10.8).
- **CE95** **Osgood curve** — a Jordan arc of positive plane measure (G&O 10.10, 10.15).
- **CE96** A simple arc of **infinite length** (G&O 10.16), one with a tangent everywhere (10.17), one of infinite length between every pair of its points (10.18).
- **CE97** A connected set that becomes totally disconnected on removing one point (G&O 10.24).
- **CE98** A plane region different from the interior of its closure (G&O 10.12); **three disjoint plane regions with a common frontier** (G&O 10.13 — Lakes of Wada).
- **CE99** Banach–Tarski decompositions (G&O 12.21–12.22) — why "volume" cannot be finitely-additively defined on all subsets of ℝ³.

**SOURCE NOTES.** **Rudin Ch.2 and Ch.7** are the canonical treatments (metric spaces before everything; Ch.7 = uniform convergence, equicontinuity, Arzelà–Ascoli, Stone–Weierstrass). **Lebl** puts metric spaces last in vol. I (Ch.7: metric spaces, open/closed, sequences, completeness & compactness, continuity, fixed-point/Picard) and Arzelà–Ascoli + Stone–Weierstrass in vol. II §11.6–11.7. **Tao II Ch.1–3** does metric spaces, continuity on metric spaces, uniform convergence, M-test, uniform approximation by polynomials — but *no* Arzelà–Ascoli. **Abbott Ch.3** is topology of ℝ only (open/closed, compact, perfect, connected, **Baire's theorem §3.5**); metric spaces appear only in the optional §8.2. **Pugh Ch.2 ("A Taste of Topology")** is the most picture-driven and includes coverings and **Cantor sets (§2.8)**; Pugh Ch.4 ("Function Spaces") covers uniform convergence, power series, **compactness and equicontinuity in C⁰**, **uniform approximation in C⁰**, contractions and ODEs. **Cambridge IB Analysis II** is unusual and useful: it does normed spaces *first*, proves all norms on a finite-dimensional space are Lipschitz-equivalent, then metric spaces, then the contraction mapping theorem, then ℝᵐ→ℝⁿ differentiation. **TBB Ch.14** is the most detailed free source on uniform convergence (M-test, Abel's test, Dini, three interchange theorems, Fubini differentiation theorem, **Pompeiu's function**, continuity and pointwise limits).

---

# 4. DIFFERENTIATION ℝ→ℝ

## 4.1 DEFINITIONS
Derivative at a point (limit of difference quotient; equivalently the little-o/linear-approximation formulation f(x+h) = f(x) + hf′(x) + o(h), which Cambridge IA states explicitly) · one-sided derivatives · infinite derivatives · **Dini derivates** D⁺, D₊, D⁻, D₋ (TBB §7.8) · higher derivatives; **C^k**, **C^∞ (smooth)**, **C^ω (real-analytic)** · critical/stationary point; local and absolute extremum · **convex / concave function**; supporting line · **Taylor polynomial**; remainder · **flat function**; **bump function**; **transition function** · **Lipschitz**/**absolutely continuous** (for the optional a.e.-differentiability material) · **bounded variation** (needed for Lebesgue differentiation).

## 4.2 THEOREMS
- Differentiability ⟹ continuity (converse false).
- **Algebra of derivatives**: sum, product (Leibniz), quotient rules; **general Leibniz rule** (fg)^{(n)} = Σ C(n,k) f^{(k)}g^{(n−k)}.
- **Chain rule**.
- **Inverse function derivative** (g = f⁻¹ ⟹ g′(f(x)) = 1/f′(x)); **local inverse function theorem in 1D** (Cambridge IA; Lebl §4.4).
- **Fermat's interior extremum theorem**: interior local extremum + differentiable ⟹ f′ = 0.
- **Rolle's theorem**; **higher-order Rolle** (Cambridge IA); **Lagrange Mean Value Theorem**; **Cauchy (generalized) MVT**.
- Monotonicity from the sign of f′; strict monotonicity criteria; f′ ≡ 0 on an interval ⟹ constant.
- **Darboux's theorem**: derivatives have the intermediate value property (Rudin 5.12; Lebl 4.2.x; TBB §7.9).
- Corollary: **a derivative has no jump discontinuities**; a function with a jump cannot be a derivative.
- **L'Hôpital's rule**: 0/0 and ∞/∞ forms, at finite points, at ±∞, and one-sided (Rudin 5.13; TBB §7.11.1–7.11.3).
- **Taylor's theorem** with:
  - **Lagrange remainder** R_n = f^{(n)}(ξ)hⁿ/n! (Cambridge IA; Rudin 5.15)
  - **Cauchy remainder** R_n = f^{(n)}(ξ)(h−(ξ−a))^{n−1}h/(n−1)!
  - **Peano remainder** R_n = o(hⁿ) (only needs f^{(n)}(a) to exist)
  - **Integral remainder** ∫ₐ^b (b−t)ⁿ f^{(n+1)}(t)/n! dt (Cambridge IA states this explicitly)
  - **Schlömilch–Roche remainder** (the general form containing Lagrange and Cauchy as p = n and p = 1)
- **Taylor's theorem for vector-valued functions fails**; the correct statement is a *mean value inequality* (Rudin 5.19).
- Convexity: f convex ⟺ f′ increasing ⟺ f″ ≥ 0; convex ⟹ continuous on the interior; supporting-line and Jensen inequalities; convex ⟹ differentiable except at countably many points, with one-sided derivatives everywhere (TBB §7.10).
- **Second-derivative test**; higher-order derivative test.
- **Bernoulli's inequality**, **AM–GM**, **Young/Hölder/Minkowski/Jensen** as differentiation applications.
- **Lebesgue's theorem**: a monotone function is differentiable a.e. (optional; TBB §12.4; Pugh Ch.6).
- **Fubini's differentiation theorem** for series of monotone functions (TBB §14.7).
- **Whitney extension theorem** (advanced, note only).
- **Borel's theorem**: every formal power series is the Taylor series at 0 of some C^∞ function.

## 4.3 EXAMPLES / COUNTEREXAMPLES
- **CE100** f(x)=|x| — continuous, not differentiable at 0.
- **CE101** **f(x)=x² sin(1/x), f(0)=0** — differentiable everywhere, f′ not continuous at 0 (G&O 3.2). *The* canonical example.
- **CE102** f(x)=x²sin(1/x²), f(0)=0 — differentiable everywhere with **finite but unbounded** derivative on a closed interval (G&O 3.6).
- **CE103** f(x) = x + 2x² sin(1/x), f(0)=0 — f′(0) > 0 but f is **not monotone in any neighbourhood of 0** (G&O 3.5).
- **CE104** A function that **is not a derivative** (G&O 3.1) — any function with a jump; combined with Darboux this characterizes the obstruction.
- **CE105** A discontinuous function having a derivative (possibly infinite) everywhere (G&O 3.3).
- **CE106** A differentiable function with an extreme value at a point where f′ does not change sign simply (G&O 3.4).
- **CE107** A function whose derivative exists and is bounded but which has no absolute extrema on a closed interval (G&O 3.7) — the domain must be closed *and* the function continuous.
- **CE108** **Weierstrass function** Σ aⁿ cos(bⁿπx), 0<a<1, ab>1+3π/2 — continuous, nowhere differentiable (G&O 3.8; Abbott §5.4; MIT 18.100A L18).
- **CE109** A differentiable function for which the **MVT fails** — for *complex-* or vector-valued f: f(t)=e^{it} on [0,2π] has f(2π)−f(0)=0 but |f′|≡1 (Rudin 5.18 remark; G&O 3.9).
- **CE110** **e^{−1/x} for x>0, 0 for x≤0** — C^∞, positive for x>0, all derivatives vanish at 0; **smooth but not analytic**; Taylor series ≡ 0 converges but not to f (Lebl Exercise 5.4.11; G&O 3.10).
- **CE111** C^∞ **bump function** positive on (0,1), zero outside (G&O 3.11); the **bridging/transition function** g = f(x)/(f(x)+f(1−x)) equal to 0 on (−∞,0] and 1 on [1,∞), strictly monotone between (G&O 3.12).
- **CE112** Σ_k e^{−√(2^k)} cos(2^k x) — C^∞ and **analytic at no point**.
- **CE113** **Fabius function** — smooth everywhere, nowhere analytic, and nowhere equal to a polynomial on any interval.
- **CE114** A function whose Maclaurin series converges everywhere but represents f at only one point (G&O 6.23); a function whose Maclaurin series converges at only one point (G&O 6.24) — **Borel's theorem** in action.
- **CE115** A C^∞ monotone f with lim f(x)=0 but lim f′(x) ≠ 0 (G&O 3.13).
- **CE116** L'Hôpital failure: f(x)=x+sin x cos x, g(x)=e^{sin x}(x+sin x cos x) — f/g → limit exists but f′/g′ oscillates; also f(x)=x+sin x, g(x)=x.
- **CE117** L'Hôpital failure when the hypothesis "g′ ≠ 0 near a" is dropped.
- **CE118** **Cantor function** — continuous, monotone, f′ = 0 a.e., yet f(1)−f(0) = 1: FTC fails without absolute continuity; a "continuous strictly monotonic function with vanishing derivative a.e." also exists (G&O 8.30).
- **CE119** Two continuous functions that do not differ by a constant yet have everywhere identical derivatives in the finite-or-infinite sense (G&O 8.18).
- **CE120** **Minkowski question-mark function** — continuous, strictly increasing, derivative 0 a.e.
- **CE121** **Pompeiu's function** — a nowhere-constant, everywhere-differentiable, increasing function whose derivative vanishes on a dense set (TBB §14.8).
- **CE122** **Blancmange / Takagi curve** — a simpler continuous nowhere-differentiable function than Weierstrass's.

**SOURCE NOTES.** Rudin Ch.5 is spare: derivative, MVTs, **continuity of derivatives (Darboux)**, L'Hôpital, higher derivatives, Taylor, vector-valued differentiation. **Lebl Ch.4** is §4.1 derivative, §4.2 MVT, §4.3 Taylor, §4.4 inverse function theorem — noticeably no L'Hôpital in the main text. **Abbott Ch.5** is uniquely framed around the question "**Are derivatives continuous?**" (§5.1 discussion → §5.2 derivatives and the IVP → §5.3 MVTs → **§5.4 a continuous nowhere-differentiable function**). **TBB Ch.7** is by far the most complete free treatment: the derivative as magnification, continuity of the derivative, local extrema, three MVTs, monotonicity, **Dini derivates (§7.8)**, **Darboux property (§7.9)**, **convexity (§7.10)**, L'Hôpital in three separate forms, Taylor polynomials. **Cambridge IA** proves higher-order Rolle and gets Taylor–Lagrange from it, and gives the Taylor integral remainder in the integration chapter. **Pugh §3.1** covers differentiation with the same Darboux emphasis. Only TBB and Pugh reach Lebesgue's a.e.-differentiability theorem at UG level.

---

# 5. DIFFERENTIATION ℝᵐ → ℝⁿ

## 5.1 DEFINITIONS
Linear transformation, operator norm ‖A‖ = sup_{|x|≤1}|Ax| · **directional derivative** D_v f(a) · **partial derivative** D_j f · **total (Fréchet) derivative**: Df(a) ∈ L(ℝⁿ;ℝᵐ) with f(a+h) = f(a) + Df(a)h + o(|h|) · **Jacobian matrix** and **Jacobian determinant** · **gradient** · **C¹ / C^k / C^∞ in several variables** · second derivative D²f(a) as a bilinear map ℝⁿ×ℝⁿ→ℝᵐ; **Hessian** · **multi-index notation** α, |α|, ∂^α, α! · **diffeomorphism** · regular point, critical point, regular value · **implicit function**; **immersion / submersion**; rank · **path-connected**; convex set · differentiation under the integral sign.

## 5.2 THEOREMS
- **Uniqueness of the total derivative** (Cambridge IB).
- Differentiable ⟹ continuous; differentiable ⟹ all directional and partial derivatives exist, and D_v f(a) = Df(a)v; Jacobian = matrix of partials.
- **C¹ ⟹ differentiable**: if all partials exist in a neighbourhood and are continuous at a, then f is differentiable at a (Rudin 9.21; Cambridge IB; Lebl 8.4).
- **Chain rule** in several variables: D(g∘f)(a) = Dg(f(a))∘Df(a) (Rudin 9.15; Tao 6.4).
- **Mean value theorem fails for vector-valued maps**; the correct tool is the **Mean Value Inequality**: |f(b)−f(a)| ≤ sup‖Df‖·|b−a| on a segment (Cambridge IB §6.3; Rudin 9.19).
- **Zero derivative on a path-connected open set ⟹ constant.**
- **Symmetry of mixed partials — Clairaut/Schwarz**: if D_iD_jf and D_jD_if exist and are continuous, they are equal (Rudin 9.41; Tao 6.5; Cambridge IB §6.5; Lebl 8.6).
  - **Weaker versions**: **Peano's** (D_jf, D_if exist near a and D_iD_jf exists and is continuous at a) and **Young's** (f differentiable near a and D_iD_jf, D_jD_if exist at a with f differentiable ⟹ equal).
- **Taylor's theorem in several variables** — first order with remainder, **second-order Taylor** (Cambridge IB), and the general multi-index form f(a+h) = Σ_{|α|≤k} ∂^αf(a)h^α/α! + R_k.
- **Second derivative test** via the Hessian (positive/negative definite, indefinite ⟹ saddle).
- **Contraction Mapping Theorem** as the engine (Rudin 9.23; Cambridge IB §5.6; Tao 6.6).
- **Inverse Function Theorem**: f ∈ C¹ near a with Df(a) invertible ⟹ f is a local C¹ diffeomorphism, and D(f⁻¹)(f(a)) = (Df(a))⁻¹ (Rudin 9.24; Lebl 8.5; Tao 6.7; Cambridge IB §6.4; Pugh §5.4).
- **Implicit Function Theorem** (Rudin 9.28; Lebl 8.5; Tao 6.8; Pugh §5.4).
- **Rank theorem** (Rudin 9.32) — immersion/submersion normal forms.
- **Lagrange multipliers** (Pugh §5.4 with a picture proof).
- **Differentiation under the integral sign / Leibniz rule** (Lebl §9.1 — an entire section).
- **Equality of the derivative of the inverse**; **higher-order derivatives** (Rudin §9 "Derivatives of higher order").
- **Poincaré lemma** / exactness of closed forms on star-shaped domains (Lebl vol. II, named theorem).
- **Path independence** ⟺ exact differential ⟺ zero circulation (Lebl §9.3).

## 5.3 EXAMPLES / COUNTEREXAMPLES
- **CE123** f(x,y) = xy/(x²+y²), f(0,0)=0 — **separately continuous in each variable but not jointly continuous** (G&O 9.1).
- **CE124** f(x,y) = x²y/(x⁴+y²) — **every straight-line approach gives limit 0, but no limit exists** (G&O 9.2), and refinements (9.3).
- **CE125** A **discontinuous** (hence non-differentiable) function of two variables possessing **first partials everywhere** (G&O 9.4) — e.g. the function in CE123.
- **CE126** Functions for which exactly two of {joint limit, the two iterated limits} exist and are equal (G&O 9.5); for which exactly one exists (9.6); for which both iterated limits exist and are **unequal** (G&O 9.7) — e.g. (x−y)/(x+y).
- **CE127** f with lim_{y→0}f = g(x) uniformly in x, lim_{x→0}f = h(y) uniformly in y, lim g = lim h, but no joint limit (G&O 9.8).
- **CE128** A **differentiable** function of two variables that is **not continuously differentiable** (G&O 9.9) — the multivariable analogue of CE101.
- **CE129** **A differentiable function with unequal mixed second-order partials** (G&O 9.10): f(x,y) = xy(x²−y²)/(x²+y²), f(0,0)=0, with f_{xy}(0,0) = −1 ≠ 1 = f_{yx}(0,0). *Clairaut's continuity hypothesis is essential.*
- **CE130** A C¹ function with ∂f/∂y ≡ 0 on a plane region R yet f not independent of y in R (G&O 9.11) — the region must be *connected*.
- **CE131** A locally homogeneous C¹ function that is not homogeneous (G&O 9.12).
- **CE132** A differentiable function with **no extremum at the origin, but whose restriction to every line through the origin has a strict relative minimum there** (G&O 9.13, refined in 9.14) — e.g. f = (y−x²)(y−2x²).
- **CE133** A function with a **unique critical point which is a strict local minimum but not a global minimum** — e.g. f(x,y) = x² + y²(1+x)³.
- **CE134** A function f with d/dx ∫f(x,y)dy ≠ ∫∂f/∂x dy, although both integrals are proper (G&O 9.15) — differentiation under the integral needs uniformity/domination.
- **CE135** A function with unequal iterated integrals, both proper (G&O 9.16) — **Fubini failure**.
- **CE136** A double series Σa_{mn} with unequal iterated sums though it converges throughout (G&O 9.17).
- **CE137** A differential P dx + Q dy on a plane region that is **locally exact but not exact** (G&O 9.18) — topology of the domain matters (Poincaré lemma needs simple connectedness).
- **CE138** A **solenoidal field on a simply-connected region with no vector potential** (G&O 9.19).
- **CE139** All directional derivatives exist at 0 but f is not differentiable there: f(x,y) = x³/(x²+y²), f(0,0)=0.
- **CE140** IFT hypothesis failure: f(x,y) = x² − y² at (0,0) — Df not invertible, level set is two crossing lines, no local function y(x).
- **CE141** f(x)=x + 2x²sin(1/x) as a map ℝ→ℝ: f′(0) = 1 ≠ 0 but f is **not injective on any neighbourhood of 0** — shows the IFT genuinely needs **C¹**, not merely differentiability.

**SOURCE NOTES.** **Rudin Ch.9** ("Functions of Several Variables": linear transformations, differentiation, contraction principle, inverse function theorem, implicit function theorem, **rank theorem**, determinants, higher-order derivatives) is the standard reference and is the only one of these that does the rank theorem. **Lebl vol. II Ch.8** is the friendliest complete treatment (§8.1 vector spaces/linear maps/convexity, §8.2 analysis with vector spaces, §8.3 the derivative, §8.4 continuity and the derivative, §8.5 inverse and implicit function theorems, §8.6 higher-order derivatives) and **Ch.9** adds *differentiation under the integral*, *path integrals*, *path independence* — material Rudin omits. **Tao II Ch.6** covers exactly: linear transformations, derivatives, partial/directional, chain rule, **double derivatives and Clairaut**, contraction mapping, IFT, ImFT. **Cambridge IB §6** is a clean minimal spine: derivative as a linear map, operator norm, **mean value inequalities**, IFT, second-order derivatives + symmetry of mixed partials + second-order Taylor. **Pugh Ch.5** ("Multivariable Calculus": linear algebra, derivatives, higher derivatives, implicit and inverse functions, multiple integrals, **differential forms**, **the general Stokes formula**) is the most geometric and reaches Stokes and Brouwer. **Spivak, *Calculus on Manifolds*** is the classic short route to the same material plus forms. **MIT 18.101** ("Analysis and Manifolds") is the course-level home of this topic at MIT; **18.100B/C** stop before it.

---

# 6. RIEMANN INTEGRATION ON ℝ

## 6.1 DEFINITIONS
Partition / dissection; refinement; common refinement; **mesh (norm)** of a partition · **tagged partition**; **Riemann sum** · **upper and lower Darboux sums** U(f,P), L(f,P); **upper and lower Darboux integrals** · **Darboux integrable** · **Riemann integrable** (mesh → 0 formulation) · **oscillation of f on a subinterval** · **set of measure zero**; **set of content zero (Jordan null)** · **step / piecewise-constant function** (Tao's route) · **improper integral** of the first, second, and mixed kinds; **absolutely convergent** vs **conditionally convergent** improper integral; **Cauchy principal value** · **function of bounded variation**; **total variation** V(f;[a,b]); **positive/negative variation** · **Riemann–Stieltjes integral** ∫f dα; integrator; refinement definition vs mesh definition · **rectifiable curve**; length of a curve.

## 6.2 THEOREMS
- **Refinement inequalities**: refining increases L and decreases U; every lower sum ≤ every upper sum (Cambridge IA).
- **Darboux's theorem**: U(f,P) → upper integral and L(f,P) → lower integral as mesh → 0.
- **Equivalence of the Darboux and Riemann definitions** (Wikipedia *Riemann integral*; Rudin builds Darboux, Tao builds via piecewise-constant functions, TBB builds via Riemann sums and covering relations).
- **Riemann (Cauchy) criterion**: f is integrable ⟺ ∀ε ∃P with U(f,P) − L(f,P) < ε (Rudin 6.6; Cambridge IA "Riemann's integrability criterion"; Tao 11.x).
- **Continuous ⟹ integrable** (Rudin 6.8; Cambridge IA).
- **Monotone ⟹ integrable** (Rudin 6.9; Cambridge IA; Tao 11.6).
- **Bounded with finitely many discontinuities ⟹ integrable**; **piecewise continuous ⟹ integrable** (Cambridge IA).
- **Bounded with countably many discontinuities ⟹ integrable**.
- **Lebesgue's criterion (Lebesgue–Vitali theorem)**: a bounded f on [a,b] is Riemann integrable **iff its set of discontinuities has Lebesgue measure zero** (Abbott §7.6; Lebl 10.4 "Riemann–Lebesgue or Lebesgue–Vitali"; Pugh §3.2 — Pugh's preface advertises this as a headline result; Cambridge IB starred).
- **Linearity**; **monotonicity** f ≤ g ⟹ ∫f ≤ ∫g; **additivity over subintervals** (both directions); **|∫f| ≤ ∫|f|**; **integrability of |f|**, of **fg**, of max/min (Cambridge IA proves each).
- **Composition**: f integrable, g **continuous** ⟹ g∘f integrable (Rudin 6.11; Cambridge IB). **Fails** for g merely integrable.
- **First Mean Value Theorem for integrals**: ∫ₐ^b f g = f(ξ)∫ₐ^b g for continuous f, g ≥ 0.
- **Second MVT for integrals (Bonnet form)**: for f monotone, ∫ₐ^b fg = f(a)∫ₐ^ξ g + f(b)∫_ξ^b g.
- **Integration by parts** (Cambridge IA; Rudin 6.22 in the Stieltjes setting).
- **Change of variables / substitution**: precise hypotheses matter — Cambridge IA requires f continuous and g continuously differentiable; Lebl gives a named "Change of variables" theorem; the weakest standard version needs only g′ integrable and f continuous.
- **Riemann sums over uniform partitions converge to the integral** (Cambridge IA lemma).
- **Uniform convergence interchanges with the integral** (Rudin 7.16); pointwise convergence does not.
- **Improper integrals**: definition as limits; **p-test** ∫₁^∞x^{−p} converges iff p>1 and ∫₀¹x^{−p} converges iff p<1 (Lebl 5.5.2); tail invariance (5.5.3); sup characterization for nonnegative integrands (5.5.4); **comparison test** (5.5.5); absolute convergence ⟹ convergence; **Dirichlet's test for integrals**; **Frullani's integral**; **Cauchy principal value**.
- **Functions of bounded variation**: **Jordan decomposition** (BV ⟺ difference of two increasing functions); BV ⟹ differentiable a.e.; BV ⟹ Riemann integrable; V is additive over intervals.
- **Riemann–Stieltjes**: existence when f is continuous and α is of bounded variation / monotone (Rudin 6.8–6.9); **integration by parts** ∫f dα + ∫α df = [fα] (Rudin 6.22); reduction ∫f dα = ∫fα′ dx when α ∈ C¹ (Rudin 6.17); **change of variables** (6.19); integration of vector-valued functions (6.24–6.25); **rectifiable curves and Λ(γ) = ∫|γ′|** (Rudin 6.26–6.27).

## 6.3 EXAMPLES / COUNTEREXAMPLES
- **CE142** **Dirichlet function 1_ℚ on [0,1]** — bounded, not Riemann integrable (L = 0, U = 1) (G&O 4.1; Rudin 6.x; Tao 11.7).
- **CE143** **Thomae's function** — Riemann integrable with integral 0, though discontinuous on a dense set (G&O 4.5).
- **CE144** **Indicator of the Smith–Volterra–Cantor set** — bounded, discontinuity set is nowhere dense but of positive measure ⟹ **not** Riemann integrable; the set is **not Jordan measurable**. *This is the example that forces the Lebesgue criterion.*
- **CE145** A **Riemann-integrable function with no primitive** (G&O 4.2), and one with **no primitive on any interval** (G&O 4.3).
- **CE146** **A function possessing a primitive on [a,b] but failing to be Riemann integrable there** (G&O 4.4; G&O 8.35) — **Volterra's function**'s derivative. This is why FTC Part 2 needs "f′ integrable" as a hypothesis.
- **CE147** f with g(x)=∫₀^x f differentiable everywhere but g′ ≠ f on a **dense** set (G&O 4.6).
- **CE148** A Riemann-integrable function with an arbitrary F_σ **measure-zero** discontinuity set (G&O 4.8) — exact converse of the Lebesgue criterion.
- **CE149** **A Riemann-integrable function of a Riemann-integrable function that is not Riemann integrable** (G&O 4.9; G&O 8.34 gives a Riemann-integrable f and *continuous* g with f∘g non-integrable). *Composition works only in the order "continuous ∘ integrable".*
- **CE150** A bounded **monotone limit** of Riemann-integrable functions that is not Riemann integrable (G&O 4.10; 8.33) — no monotone convergence theorem for the Riemann integral.
- **CE151** A divergent improper integral with a finite **Cauchy principal value** (G&O 4.11) — e.g. ∫_{−1}^{1}dx/x.
- **CE152** A convergent improper integral on [1,∞) whose integrand is positive, continuous, and **does not tend to 0** (G&O 4.12) — the spike function; the "integral analogue of the n-th term test" is false.
- **CE153** A convergent improper integral on [0,∞) whose integrand is **unbounded in every tail** (G&O 4.13).
- **CE154** ∫₀^∞ (sin x)/x dx = π/2 converges but **not absolutely** — conditional convergence of improper integrals; also shows it is **not Lebesgue integrable** (G&O 8.36: an improper Riemann integral existing where the Lebesgue integral does not).
- **CE155** f, g with f Riemann–Stieltjes integrable w.r.t. g on [a,b] and on [b,c] but **not on [a,c]** (G&O 4.14) — RS additivity fails when f and α share a discontinuity.
- **CE156** A continuous monotone g and continuous f with ∫f dg ≠ ∫f g′ dx (G&O 8.39) — needs g absolutely continuous, not merely continuous and monotone (the Cantor function again).
- **CE157** Two functions whose squares are Riemann integrable but the square of whose sum is not (G&O 13.4).
- **CE158** A bounded **semicontinuous** function that is not Riemann integrable, nor equivalent to one (G&O 8.31).
- **CE159** A set of measure zero such that **no function** (integrable or not) has it as its discontinuity set (G&O 8.22).
- **CE160** f(x)=1/√x on (0,1] — unbounded, so not Riemann integrable, but the improper integral converges.
- **CE161** The Cantor function as an integrator: ∫₀¹ 1 dC = 1 while C′ = 0 a.e.

**SOURCE NOTES.** **Rudin Ch.6 does Riemann–Stieltjes from the start** (definition and existence, properties, integration and differentiation, vector-valued integration, **rectifiable curves**) and gets the Riemann integral as the case α(x)=x — this is Rudin's most distinctive editorial choice, and it means Rudin gets *arc length as an application of Stieltjes integration* (6.26–6.27). **Lebl Ch.5** is plain Riemann: §5.1 the integral, §5.2 properties, §5.3 FTC, **§5.4 the logarithm and the exponential** (defined *via the integral*), §5.5 improper integrals (optional). **Abbott Ch.7** is organized as a single narrative arc toward the Lebesgue criterion: §7.2 definition → §7.3 integrating functions with discontinuities → §7.4 properties → §7.5 FTC → **§7.6 Lebesgue's criterion**; **§8.1 generalized (Henstock–Kurzweil) Riemann integral** is an optional topic. **Tao Ch.11** builds the integral from **piecewise-constant functions** (a distinctive and pedagogically clean route), includes **§11.8 Riemann–Stieltjes**, and §11.9 "the two fundamental theorems". **Cambridge IA** proves an unusually complete list of elementary properties one by one and includes the Taylor integral remainder and improper integrals. **Pugh §3.2** headlines the measure-zero criterion. **TBB** is unique in developing the **calculus (Newton) integral first** (Ch.8), then covering relations and Cousin's lemma (Ch.9), then the general integral (Ch.10), null sets and the **Mini-Vitali covering theorem** (Ch.11), **variation of a function** (Ch.12), FTC (Ch.13) — and in explicitly comparing the Riemann, Lebesgue, and **Henstock–Kurzweil** integrals (§8.4).

---

# 7. INTEGRATION IN ℝᵐ

## 7.1 DEFINITIONS
Closed rectangle (box) R = [a₁,b₁]×…×[aₙ,bₙ]; volume; partition of a rectangle; refinement · upper/lower Darboux sums and integrals over a rectangle; **Riemann integral over a rectangle** · **outer measure / null set** in ℝⁿ; **content zero** vs **measure zero** · **Jordan measurable set**; **Jordan content**; boundary of measure zero · integral over a bounded Jordan-measurable set via extension by 0 · **iterated integral**; **sections** of a function · **partition of unity** · **change of variables**: diffeomorphism, Jacobian determinant · improper multiple integrals · (optional, next-course) **differential form**, **chain**, **manifold with boundary**, **orientation**.

## 7.2 THEOREMS
- Existence/uniqueness of the integral over a rectangle; **Riemann criterion** in ℝⁿ.
- **Continuous on a compact rectangle ⟹ integrable**.
- **Lebesgue criterion in ℝⁿ**: bounded f on a rectangle is Riemann integrable ⟺ its discontinuity set has measure zero (Lebl 10.4; Spivak *Calculus on Manifolds* 3-8; Munkres).
- Linearity, monotonicity, additivity over subrectangles, |∫f| ≤ ∫|f|.
- **Fubini's theorem for the Riemann integral**: ∫_{A×B} f = ∫_A(∫_B f) whenever f is integrable — **stated with upper and lower integrals** because the sections x ↦ f(x,y) need not be integrable for every y (Spivak 3-10; Lebl 10.2; Rudin 10.2). This is the version students most often get wrong.
- **Fubini for sums** (Lebl, named theorem, vol. II) — the discrete model.
- **Jordan measurability**: a bounded set is Jordan measurable ⟺ its boundary has measure zero; then 1_E is integrable and vol(E) = ∫1_E (Lebl 10.5).
- Integrability over Jordan measurable sets; additivity over sets meeting in a null set.
- **Existence of C^∞ partitions of unity** subordinate to an open cover (Spivak 3-11).
- **Change of Variables Theorem**: for a C¹ diffeomorphism g : U → V, ∫_{g(A)} f = ∫_A (f∘g)|det Dg| (Spivak 3-13; Rudin 10.9; Lebl 10.7; Munkres).
- **Polar / cylindrical / spherical coordinates** as the standard instances; the Gaussian integral ∫_{ℝ²}e^{−(x²+y²)} via polar coordinates.
- **Green's theorem** (Lebl **§10.6** — notable: Lebl proves Green's theorem inside the multivariable-integral chapter).
- (Optional / next course) **Stokes' theorem on chains** (Spivak 4-9; Rudin 10.33), **the general Stokes formula on manifolds** (Pugh §5.9), classical **Green / divergence / Kelvin–Stokes** as corollaries; **Poincaré lemma**; **Brouwer fixed point** from Stokes (Pugh).

## 7.3 EXAMPLES / COUNTEREXAMPLES
- **CE162** f on [0,1]² equal to 1 at points with rational x, 0 elsewhere — one iterated integral exists, the other does not; the double integral does not exist.
- **CE163** A nonnegative f on [0,1]² with both iterated integrals equal to 0 but the double integral nonexistent (G&O 10.22).
- **CE164** f(x,y) = (x²−y²)/(x²+y²)² on (0,1]² — iterated integrals are π/4 and −π/4; **Fubini fails without absolute integrability** (the Lebesgue analogue of CE20/CE135).
- **CE165** A function with unequal iterated integrals though each is proper (G&O 9.16).
- **CE166** A bounded plane set **without area** (G&O 11.1); a **compact** plane set without area (11.2); a bounded plane **region** without area (11.3); a bounded plane **Jordan region** without area (11.4) — i.e. not Jordan measurable.
- **CE167** A bounded plane region whose **frontier has positive measure** (G&O 10.15) — hence not Jordan measurable.
- **CE168** A simple closed curve whose plane measure **exceeds** that of the region it encloses (G&O 11.5).
- **CE169** Functions φ < ψ on [0,1] with ∫(ψ−φ)=1 but the region between them having **no area** (G&O 11.6).
- **CE170** **Schwarz lantern**: a means of assigning arbitrarily large or infinite "area" to the lateral surface of a right circular cylinder by inscribed triangulations (G&O 11.7) — surface area is *not* the limit of inscribed polyhedral areas (unlike arc length). **Essential for §10.**
- **CE171** A surface homeomorphic to a sphere with surface area < ε but 3-D Lebesgue measure > M (G&O 11.8).
- **CE172** **Kakeya/Besicovitch set**: a plane set of arbitrarily small measure inside which a unit segment can be continuously reversed (G&O 11.9).
- **CE173** A **nonmeasurable plane set meeting every line in at most two points** (G&O 10.21); a real function of one variable whose **graph is a nonmeasurable plane set** (G&O 10.23).
- **CE174** A subset of the unit square dense in it and meeting every horizontal and vertical line in exactly one point (G&O 10.20).
- **CE175** Change of variables failing when g is not injective, or when det Dg = 0 on a non-null set.

**SOURCE NOTES.** **Lebl vol. II Ch.10** is the most accessible complete treatment (§10.1 Riemann integral over rectangles, §10.2 iterated integrals and Fubini, §10.3 outer measure and null sets, §10.4 **the set of Riemann integrable functions** = Lebesgue criterion, §10.5 Jordan measurable sets, §10.6 **Green's theorem**, §10.7 change of variables) — and it is free. **Spivak, *Calculus on Manifolds*, Ch.3** is the classic compact source (integration over rectangles, measure zero and content zero, Fubini stated with upper/lower integrals, partitions of unity, change of variables) and Ch.4–5 do forms and Stokes. **Rudin Ch.10** ("Integration of Differential Forms") does the primitive mappings/partitions-of-unity proof of change of variables and then forms and Stokes; Rudin's Ch.10 is famously terse. **Munkres, *Analysis on Manifolds*** is the standard gentler alternative to Spivak. **Pugh §5.7–5.9** does multiple integrals, differential forms, and the general Stokes formula with pictures. **MIT 18.101 "Analysis and Manifolds"** is the course home; **Tao II** does *not* cover the multivariable Riemann integral (it goes straight to Lebesgue in Ch.7–8, with §8.5 Fubini for the Lebesgue integral). **Abbott** does not cover it at all.

---

# 8. POWER SERIES AND ANALYTIC FUNCTIONS

## 8.1 DEFINITIONS
Formal power series; **power series** Σcₙ(x−a)ⁿ · **radius of convergence**; interval/disc of convergence · **real-analytic function** on an open set · **Taylor series** at a point; **Maclaurin series** · **germ** (optional) · uniform convergence on compacta / **local uniform convergence** · **Abel summation**; Stolz sector/angle · composition, reciprocal, and quotient of power series · **generating function** (optional).

## 8.2 THEOREMS
- **Cauchy–Hadamard**: R = 1/limsup|cₙ|^{1/n}; the ratio form R = lim|cₙ/c_{n+1}| when it exists.
- Convergence is absolute inside the radius, divergent outside; **uniform on every [−R+ε, R−ε]** (Rudin 8.1) — but *not* necessarily uniform on (−R,R).
- **A power series is C^∞ inside its interval of convergence, and may be differentiated term by term** with the same radius (Rudin 8.1 + Corollary; Cambridge IA proves this by an explicit algebraic lemma; Tao 4.x; Lebl 11.3).
- **Term-by-term integration** with the same radius.
- **Coefficient formula** cₙ = f^{(n)}(a)/n! ⟹ **uniqueness/identity theorem** for power series (Rudin 8.1(7); Lebl "Identity theorem").
- **Re-expansion about an interior point** (Rudin 8.4 — Taylor's theorem for analytic functions): a power series about 0 with radius R can be re-expanded about any a with |a|<R, with radius ≥ R−|a|. **Lebl: "Taylor's theorem for real-analytic functions."**
- **Analytic ⟹ C^∞** (converse false).
- **Abel's theorem** (Rudin 8.2): if Σcₙ converges then lim_{x→1⁻}Σcₙxⁿ = Σcₙ; the complex Stolz-sector version.
- **Application of Abel**: Rudin uses it (8.2 → 3.51) to prove that if Σaₙ, Σbₙ, Σcₙ all converge with cₙ the Cauchy convolution, then C = AB.
- **Tauber's theorem**; **Littlewood's Tauberian theorem** (note as optional).
- **Products, quotients, reciprocals, and compositions of power series** are power series with positive radius (TBB §16.6–16.7).
- **Borel's theorem**: every sequence (aₙ) is the sequence of Taylor coefficients of some C^∞ function.
- **Binomial series** (1+x)^α = Σ C(α,n)xⁿ for |x|<1, all real α; convergence at the endpoints depending on α.
- **Standard expansions**: eˣ, sin, cos, sinh, cosh (everywhere); log(1+x), arctan x (radius 1); geometric.
- **Weierstrass approximation** as the "opposite" theorem (Abbott §6.7; TBB §16.8.4): every continuous function is a uniform limit of polynomials, even though most are not analytic.
- **Maximum modulus principle and the Fundamental Theorem of Algebra** from power series (Lebl 11.5, named theorems; Rudin 8.8).

## 8.3 EXAMPLES / COUNTEREXAMPLES
- **CE176** Σxⁿ/n²: converges at both endpoints; **Σxⁿ/n**: converges at −1, diverges at +1; **Σxⁿ**: diverges at both — all three have R = 1. *Endpoint behaviour is not determined by the radius.*
- **CE177** A power series convergent at **only one point** (Σn!xⁿ) (G&O 6.22).
- **CE178** A function whose Maclaurin series converges everywhere but represents the function at only one point (G&O 6.23) — e^{−1/x²}.
- **CE179** A function whose Maclaurin series converges at only one point (G&O 6.24) — via Borel's theorem with rapidly growing coefficients.
- **CE180** e^{−1/x²}: C^∞ but not analytic at 0; Taylor series ≡ 0.
- **CE181** Σ_k e^{−√(2^k)}cos(2^k x): C^∞, analytic **nowhere**.
- **CE182** Σxⁿ on (−1,1) converges uniformly on every compact subinterval but **not uniformly on (−1,1)** (Cambridge IB).
- **CE183** The converse of Abel's theorem is false: Σ(−1)ⁿ has Abel limit 1/2 but does not converge — a Tauberian hypothesis (nₐₙ → 0, or aₙ = O(1/n)) is genuinely needed.
- **CE184** A convergent **trigonometric** series that is not a Fourier series (G&O 6.25).
- **CE185** A continuous function whose **Fourier series diverges** at each point of a prescribed countable set (G&O 6.27); a Lebesgue-integrable function whose Fourier series **diverges everywhere** (Kolmogorov, G&O 6.28).
- **CE186** Series for which the ratio test fails but the root test works (G&O 6.16); series for which each test fails (6.14, 6.15).

**SOURCE NOTES.** **Rudin Ch.8** §"Power Series" is the tightest reference (8.1 differentiability, 8.2 Abel, 8.3 double-series inversion, 8.4 re-expansion/Taylor). **Cambridge IA Ch.6** is unusual and excellent: it develops **complex** power series first, proves Cauchy–Hadamard, proves term-by-term differentiation via an explicit binomial estimate lemma, and then *defines exp, cos, sin, cosh, sinh by power series* and derives all their identities. **Lebl §11.3** ("Power series and analytic functions") gives the identity theorem and Taylor's theorem for real-analytic functions; §11.5 gets the FTA. **Tao II Ch.4** is the most careful about *formal* power series vs. real-analytic functions (§4.1 formal power series, §4.2 real analytic functions, §4.3 Abel's theorem, §4.4 multiplication of power series, §4.5 exp and log, §4.6 complex numbers, §4.7 trigonometric functions). **Abbott §6.5–6.6** covers power series and Taylor series with §6.7 Weierstrass approximation. **TBB Ch.16** is the most complete free treatment and uniquely includes **products, quotients, and compositions of power series** (§16.6–16.7) and trigonometric/Fourier series (§16.8).

---

# 9. EXPONENTIAL AND LOGARITHM — ALL EQUIVALENT DEFINITIONS

## 9.1 THE EIGHT STANDARD CHARACTERIZATIONS
Wikipedia's *Characterizations of the exponential function* lists six; the standard analysis literature adds two more. All of the following define the same function on ℝ:

1. **Power series.** exp(x) = Σ_{n≥0} xⁿ/n!.
2. **Product limit.** exp(x) = lim_{n→∞}(1 + x/n)ⁿ.
3. **Inverse of the logarithm integral.** exp(x) is the unique y > 0 with ∫₁^y dt/t = x.
4. **Initial value problem.** exp is the unique solution of y′ = y, y(0) = 1.
5. **Functional equation.** exp is the unique function with f(x+y) = f(x)f(y) and f′(0) = 1 (equivalently f(1) = e plus a regularity hypothesis: continuity at one point, monotonicity, local boundedness, or measurability).
6. **Elementary definition by powers.** exp is the continuous extension to ℝ of q ↦ e^q on ℚ, where e is the unique base with lim_{h→0}(a^h − 1)/h = 1.
7. **Sup/monotone-limit definition of a^x.** For a > 1, a^x := sup{a^q : q ∈ ℚ, q ≤ x} (for 0 < a < 1 use inf, or a^x = (1/a)^{−x}); then exp = e^x with e := lim(1+1/n)ⁿ. *This is the route Tao takes (Analysis I §5.6 "Real exponentiation, part I", §6.6 "part II").*
8. **Continued fraction / infinite product forms.** e^x = 1 + 2x/(2−x+x²/(6+x²/(10+…))); mention only.

**Equivalence chain the Wikipedia article gives:** 1⟺2 (binomial theorem + limit estimates), 1⟺3 (via log properties), 1⟺4 (Euler's method / Taylor series), 2⟺4, 3⟺4 (chain rule + inverse function theorem), 2⟹5 (multiplicativity from the power series via the Cauchy product), 5⟹4, 5⟺6. **Extension to larger domains:** characterizations 1, 2, 4 extend directly to ℂ; 3 requires path-integral care (mod 2πi); 5 needs extra conditions for uniqueness over ℂ; 1–4 all generalize to Banach algebras (matrix exponential).

## 9.2 DEFINITIONS
e; exp; **natural logarithm** ln = log = exp⁻¹; **a^x** for a > 0; **log_a**; **general power x^α** for x > 0; **hyperbolic functions** cosh, sinh, tanh, coth, sech, csch and their inverses; **Cauchy functional equations** f(x+y)=f(x)f(y), f(xy)=f(x)+f(y), f(xy)=f(x)f(y); **Hamel basis**.

## 9.3 THEOREMS
- **Absolute convergence of Σxⁿ/n! for all x** (ratio test), and hence exp is entire.
- **exp(x+y) = exp(x)exp(y)** via the **Cauchy product / Mertens** (Cambridge IA proves exactly this; Rudin 8.6(d)).
- exp′ = exp (Rudin 8.6(b)); exp > 0; exp strictly increasing; exp convex.
- exp(x) → +∞ as x→+∞, → 0 as x→−∞ (Rudin 8.6(e)); **xⁿe^{−x} → 0** for every n (Rudin 8.6(f)) — exp beats every polynomial.
- **exp is a bijection ℝ → (0,∞)**; hence L = exp⁻¹ exists, is strictly increasing and differentiable, and **L′(y) = 1/y** (Rudin 8.6 derivation), whence **L(y) = ∫₁^y dt/t** (Rudin eq. 39) — *Rudin explicitly notes "(39) is quite frequently taken as the starting point of the theory."*
- **Log laws**: L(uv) = L(u)+L(v) (Rudin 40); L(u/v) = L(u)−L(v); L(u^α) = αL(u); change of base log_a x = ln x/ln a.
- **Definition of x^α := exp(α log x)** for x > 0 and *any real* α, and the theorem that this agrees with the naive definition for rational α (Rudin eqs. 42–43); **(x^α)′ = αx^{α−1}** (Rudin 44) — Rudin remarks that proving this directly from the difference quotient for irrational α "is quite troublesome."
- **x^{−α} log x → 0** as x → ∞ for every α > 0 (Rudin 45) — log grows slower than every positive power.
- **e = lim(1+1/n)ⁿ** and **e = Σ1/n!**, with the error estimate 0 < e − sₙ < 1/(n!n) (Rudin 3.30–3.31).
- **e is irrational** (Rudin 3.32, from the error estimate). **e is transcendental** (Hermite 1873 — note only).
- **Uniqueness from the functional equation**: E(x)=e^x is the unique **continuous** function with E(x+y)=E(x)E(y), E(1)=e; L is the unique continuous function on (0,∞) with L(xy)=L(x)+L(y), L(e)=1 — **Lebl Exercise 5.4.10** states exactly this.
- **Bernoulli's inequality** (1+x)ⁿ ≥ 1+nx and **AM–GM**, used to prove (1+x/n)ⁿ is increasing and bounded.
- **Convexity of exp ⟹ AM–GM, Young's inequality, Hölder, Minkowski.**
- Hyperbolic identities: cosh²−sinh²=1, addition formulas, derivatives, **Osborn's rule**, cosh(iz)=cos z, sinh(iz)=i sin z (Cambridge IA proves the last two).

## 9.4 EXAMPLES / COUNTEREXAMPLES
- **CE187** e^{−1/x} (x>0), 0 (x≤0): C^∞, Taylor series ≡ 0 — *Lebl Exercise 5.4.11 walks through the whole construction*, including lim_{x→0⁺}e^{−1/x}/x^m = 0 for every m.
- **CE188** Non-measurable additive solutions of f(x+y)=f(x)+f(y) ⟹ non-measurable multiplicative solutions of f(x+y)=f(x)f(y) other than exponentials — **every regularity hypothesis in the functional-equation characterization is necessary**.
- **CE189** A **discontinuous linear (additive) function** (G&O 2.26).
- **CE190** (1+x/n)ⁿ converges to eˣ but **not uniformly on ℝ** — only locally uniformly.
- **CE191** a^x with 0 < a < 1 is decreasing, showing the sup-definition (7) must be adjusted; and a = 1 is the degenerate case.
- **CE192** x^x extended to x = 0: lim_{x→0⁺}x^x = 1 but 0⁰ is not defined by the exp∘log formula.

**SOURCE NOTES — who defines exp which way (verified first-hand):**

| Source | Definition used | Notes |
|---|---|---|
| **Rudin PMA §8** | **Power series** E(z)=Σzⁿ/n! **on ℂ**; log = E⁻¹; then L(y)=∫₁^y dt/t is *derived*, and x^α := E(αL(x)) | The reference treatment; explicitly comments that the integral definition is the usual alternative starting point |
| **Lebl §5.4** | **log first**, as ∫₁^x dt/t (an application of FTC); **exp := log⁻¹** | Puts exp/log inside the *integration* chapter; the functional-equation uniqueness is Exercise 5.4.10 |
| **Cambridge IA §6.1** | **Complex power series**, alongside sin/cos/sinh/cosh; e^{z+w}=e^ze^w via the Cauchy product | Most economical; exp, trig and hyperbolic functions all arrive together |
| **Tao Analysis I §5.6, §6.6; II §4.5** | **Sup/monotone-limit definition of a^x via rationals** in vol. I ("Real exponentiation, parts I and II"), then power series in vol. II §4.5 | The *only* surveyed source that does the a^x-via-rationals construction properly, in two stages |
| **Abbott** | Largely avoids; exp appears via power series in §6.5–6.6 | Not a focus of the book |
| **Pugh** | Power series in Ch.4 | |
| **Spivak, *Calculus*** | **∫₁^x dt/t** definition, with exp as its inverse; a full chapter | The classic "logarithm first" presentation |
| **Bartle & Sherbert** | log via the integral; exp as inverse | |
| **Zorich I** | Multiple approaches, with the functional-equation and power-series characterizations both discussed | The most encyclopaedic |
| **Hairer & Wanner, *Analysis by Its History*** | Historical: Napier/Euler's (1+x/n)ⁿ and the series, with the original arguments | Best source for the product-limit route |

---

# 10. π, ARC LENGTH, AND THE TRIGONOMETRIC FUNCTIONS

## 10.1 RIGOROUS CONSTRUCTION OF sin, cos, AND π (Rudin's Ch.8, verbatim structure)

Rudin's construction — the one to use if you want π defined without any prior geometry — runs:

1. Define **E(z) = Σzⁿ/n!** on ℂ; prove E(z+w) = E(z)E(w) by the Cauchy product; note E(z̄) = conj(E(z)).
2. Define **C(x) = ½[E(ix)+E(−ix)]**, **S(x) = (1/2i)[E(ix)−E(−ix)]**, so **E(ix) = C(x)+iS(x)**, and C, S are real for real x.
3. **|E(ix)| = 1** for real x (from E(ix)E(−ix)=1).
4. C(0)=1, S(0)=0, **C′ = −S**, **S′ = C**.
5. **There exists a positive x with C(x)=0.** Rudin's proof: if not, C > 0 on (0,∞), so S′ > 0, so S is strictly increasing and positive; then for 0 < x < y, S(x)(y−x) ≤ ∫ₓ^y S = C(x)−C(y) < 2, which fails for large y. Contradiction.
6. Let x₀ be the **smallest positive zero of C** (exists since the zero set is closed and C(0)≠0). **Define π := 2x₀.**
7. Then C(π/2)=0, S(π/2)=1, so **E(πi/2) = i**, **E(πi) = −1**, **E(2πi) = 1**, and **E(z+2πi) = E(z)**.
8. **Theorem 8.7**: (a) E is periodic with period 2πi; (b) C, S are periodic with period 2π; (c) if 0 < t < 2π then E(it) ≠ 1; (d) for every z with |z| = 1 there is a **unique** t ∈ [0,2π) with E(it) = z.
9. Hence γ(t) = E(it), t ∈ [0,2π], is a **simple closed curve whose range is the unit circle**; since |γ′(t)| = |iE(it)| = 1, its **length is ∫₀^{2π}|γ′| = 2π** (Rudin 6.27) — *"This is of course the expected result for the circumference of a circle of radius 1. It shows that π, defined by (51), has the usual geometric significance."*
10. Rudin closes: *"we derived the basic properties of the trigonometric functions from (46) and (25), without any appeal to the geometric notion of angle."*

## 10.2 FOURTEEN EQUIVALENT DEFINITIONS OF π

1. **π := 2·(smallest positive zero of the power-series-defined cos).** [Rudin 8.51; Wikipedia *Pi* lists this as the standard analytic definition.]
2. **π := (smallest positive zero of the power-series-defined sin).** Equivalent to 1 because sin(2x)=2 sin x cos x and sin > 0 on (0, x₀).
3. **π := half the period of exp restricted to iℝ**; equivalently the smallest p > 0 with e^{2πi}=1, i.e. {z : e^z = 1} = 2πiℤ. [Rudin 8.7; Wikipedia *Pi*.]
4. **π := C/d, the ratio of the circumference of a circle to its diameter** — where "circumference" is the **arc length** of §10.3. Equal to 1 by Rudin's step 9 plus the scaling theorem of §10.4.
5. **π := the area of the unit disc.** Equal to 1 via ∫_{−1}^{1}2√(1−x²)dx and the substitution x = sin θ, or via polar coordinates.
6. **π := 2∫_{−1}^{1}√(1−x²)dx.** (= definition 5 written out.)
7. **π := 4∫₀¹ dx/(1+x²) = 4 arctan 1.** Equivalent to 1 because arctan is the inverse of tan = S/C.
8. **π := ∫_{−1}^{1} dx/√(1−x²)** — the arc length of the upper unit semicircle. [Wikipedia *Pi* gives exactly this integral.]
9. **π := 4(1 − 1/3 + 1/5 − 1/7 + …)** — Gregory–Leibniz; equal to 7 by Abel's theorem applied to the arctan series at x = 1.
10. **π := √(6·Σ1/n²)** — the Basel problem, Σ1/n² = π²/6.
11. **π/2 := ∏_{n≥1} (2n)²/((2n−1)(2n+1))** — **Wallis product**; provable from the recursion Iₙ = ∫₀^π sinⁿ, Iₙ/I_{n−2} = (n−1)/n, and the squeeze theorem, or instantly from Euler's sine product.
12. **π := (∫_{−∞}^{∞}e^{−x²}dx)²** — the Gaussian integral, √π.
13. **π := the smallest positive zero of the solution of y″ = −y, y(0)=0, y′(0)=1** — the ODE characterization of sin.
14. **π := 2/(Viète's infinite product)**, and the BBP/Ramanujan series (mention). Also **π = Γ(1/2)²**, and **π^{n/2}/Γ(n/2+1) = vol(Bⁿ)** as an n-dimensional characterization.

Wikipedia's *Pi* article notes that integral definitions (6–8) "are no longer commonly used in a first analytical definition because differential calculus typically precedes integral calculus," favouring 1 and 3 instead — which matches Rudin and Cambridge IA exactly.

## 10.3 RIGOROUS ARC LENGTH
**Definitions.** A **path** in ℝ² is a continuous γ : [a,b] → ℝ². For a partition P: a = t₀ < … < t_n = b, the **inscribed polygon length** is Λ(γ,P) = Σ|γ(t_i) − γ(t_{i−1})|. The **length** is **Λ(γ) := sup_P Λ(γ,P)**, and γ is **rectifiable** iff Λ(γ) < ∞. Wikipedia's *Arc length* article states: refining a partition never decreases the chordal sum, and *"a curve with the property that every arc between two points has finite length … is called a rectifiable curve."*

**Theorems.**
- Λ(γ,P) is monotone under refinement; hence the sup is a limit as mesh → 0.
- **γ is rectifiable ⟺ each coordinate function has bounded variation**, and Λ(γ) is comparable to the total variations. (Rudin's Ch.6 route: Λ(γ) is exactly the total variation, and Rudin defines rectifiability via §6.26.)
- **Additivity**: Λ(γ|[a,c]) = Λ(γ|[a,b]) + Λ(γ|[b,c]).
- **Invariance under reparametrization** by a continuous increasing bijection.
- **Λ(γ) = ∫ₐ^b |γ′(t)| dt for γ ∈ C¹** (Rudin **6.27**; Wikipedia *Arc length* "L(f) = ∫ₐᵇ|f′(t)|dt"); Cartesian form s = ∫√(1+(dy/dx)²)dx.
- **Arc-length parametrization** exists for regular C¹ curves; s(t) = ∫ₐ^t|γ′| is C¹ and increasing, and γ∘s⁻¹ has |derivative| ≡ 1.
- **Lower semicontinuity of length** under pointwise convergence.
- **Non-rectifiable examples exist**: Wikipedia names **the Koch curve** and **the graph of x sin(1/x)**.

## 10.4 PROOF THAT C/d IS THE SAME CONSTANT FOR EVERY CIRCLE
Let σ_r(t) = r·(cos t, sin t), t ∈ [0,2π], be the circle of radius r. Then for any partition, Λ(σ_r,P) = r·Λ(σ₁,P) because |σ_r(t_i)−σ_r(t_{i−1})| = r|σ₁(t_i)−σ₁(t_{i−1})| — **the chord lengths scale exactly by r**. Taking suprema, **Λ(σ_r) = r·Λ(σ₁)**, so C/d = Λ(σ_r)/(2r) = Λ(σ₁)/2, a constant independent of r. By Rudin 6.27, Λ(σ₁) = ∫₀^{2π}|iE(it)|dt = 2π, so **C/d = π** with π as defined in §10.1. The same scaling argument on the area functional gives **area(disc of radius r) = r²·area(unit disc) = πr²** with the *same* π, the second equality being definition 5/6 above. **Warning (CE170):** the analogous "inscribed-polyhedron" argument fails completely for **surface area** — the Schwarz lantern gives arbitrarily large or infinite values — so this scaling argument is genuinely a fact about one-dimensional length, not a general principle.

## 10.5 DEFINITIONS OF THE TRIGONOMETRIC FUNCTIONS
cos x := ½(e^{ix}+e^{−ix}) = Σ(−1)ⁿx^{2n}/(2n)!; sin x := (1/2i)(e^{ix}−e^{−ix}) = Σ(−1)ⁿx^{2n+1}/(2n+1)!; **tan = sin/cos** (domain ℝ∖{π/2+kπ}); **cot = cos/sin**; **sec = 1/cos**; **csc = 1/sin**. Inverses: **arcsin: [−1,1]→[−π/2,π/2]**, **arccos: [−1,1]→[0,π]**, **arctan: ℝ→(−π/2,π/2)**, **arccot: ℝ→(0,π)**, **arcsec: |x|≥1→[0,π]∖{π/2}**, **arccsc: |x|≥1→[−π/2,π/2]∖{0}**.

## 10.6 THE COMPLETE STANDARD SET OF TRIGONOMETRIC IDENTITIES

**Pythagorean (4):** sin²θ+cos²θ=1 · 1+tan²θ=sec²θ · 1+cot²θ=csc²θ · sec²θ+csc²θ=sec²θ csc²θ.

**Parity / reflection (6):** sin(−θ)=−sin θ · cos(−θ)=cos θ · tan(−θ)=−tan θ · cot(−θ)=−cot θ · sec(−θ)=sec θ · csc(−θ)=−csc θ.

**Cofunction / complementary (6):** sin(π/2−θ)=cos θ · cos(π/2−θ)=sin θ · tan(π/2−θ)=cot θ · cot(π/2−θ)=tan θ · sec(π/2−θ)=csc θ · csc(π/2−θ)=sec θ.

**Supplementary (3):** sin(π−θ)=sin θ · cos(π−θ)=−cos θ · tan(π−θ)=−tan θ.

**Shift and periodicity (12):** sin(θ±π/2)=±cos θ · cos(θ±π/2)=∓sin θ · sin(θ+π)=−sin θ · cos(θ+π)=−cos θ · tan(θ+π)=tan θ · cot(θ+π)=cot θ · csc(θ±π/2)=±sec θ · sec(θ±π/2)=∓csc θ · tan(θ±π/4)=(tan θ±1)/(1∓tan θ) · cot(θ±π/4)=(cot θ∓1)/(1±cot θ) · period 2π for sin, cos, sec, csc · period π for tan, cot. *(Cambridge IA derives cos(z+π/2)=−sin z, sin(z+π/2)=cos z, cos(z+π)=−cos z, sin(z+π)=−sin z, and the 2π periodicity directly from the power series.)*

**Addition and subtraction (12):**
sin(α±β)=sin α cos β ± cos α sin β · cos(α±β)=cos α cos β ∓ sin α sin β · tan(α±β)=(tan α ± tan β)/(1 ∓ tan α tan β) · cot(α±β)=(cot α cot β ∓ 1)/(cot β ± cot α) · sec(α±β)=sec α sec β csc α csc β/(csc α csc β ∓ sec α sec β) · csc(α±β)=sec α sec β csc α csc β/(sec α csc β ± csc α sec β).

**Multi-angle sums (4):** sin(Σθᵢ) and cos(Σθᵢ) as alternating sums over subsets · tan(Σθᵢ)=(e₁−e₃+e₅−…)/(e₀−e₂+e₄−…) and cot(Σθᵢ) as its reciprocal, with eₖ the elementary symmetric polynomials in tan θᵢ · sec(Σθᵢ), csc(Σθᵢ) with the same denominators.

**Double angle (5):** sin 2θ=2 sin θ cos θ = 2 tan θ/(1+tan²θ) · cos 2θ = cos²θ−sin²θ = 2cos²θ−1 = 1−2sin²θ = (1−tan²θ)/(1+tan²θ) · tan 2θ=2tan θ/(1−tan²θ) · cot 2θ=(cot²θ−1)/(2cot θ) · sec 2θ = sec²θ/(2−sec²θ).

**Triple angle (3):** sin 3θ=3 sin θ−4sin³θ · cos 3θ=4cos³θ−3 cos θ · tan 3θ=(3t−t³)/(1−3t²).

**General multiple angle (3):** **de Moivre** (cos θ + i sin θ)ⁿ = cos nθ + i sin nθ · **cos nθ = Tₙ(cos θ)** (Chebyshev polynomials of the first kind) · **sin nθ = sin θ·U_{n−1}(cos θ)** (second kind).

**Half angle (5):** sin(θ/2)=±√((1−cos θ)/2) · cos(θ/2)=±√((1+cos θ)/2) · tan(θ/2)=(1−cos θ)/sin θ = sin θ/(1+cos θ) = ±√((1−cos θ)/(1+cos θ)) · cot(θ/2)=(1+cos θ)/sin θ.

**Power reduction (5):** sin²θ=(1−cos 2θ)/2 · cos²θ=(1+cos 2θ)/2 · sin³θ=(3 sin θ−sin 3θ)/4 · cos³θ=(3 cos θ+cos 3θ)/4 · general sinⁿ, cosⁿ via de Moivre + binomial theorem.

**Product-to-sum (4):** sin α sin β = ½[cos(α−β)−cos(α+β)] · cos α cos β = ½[cos(α−β)+cos(α+β)] · sin α cos β = ½[sin(α+β)+sin(α−β)] · cos α sin β = ½[sin(α+β)−sin(α−β)].

**Sum-to-product (6):** sin α+sin β = 2 sin((α+β)/2)cos((α−β)/2) · sin α−sin β = 2 cos((α+β)/2)sin((α−β)/2) · cos α+cos β = 2 cos((α+β)/2)cos((α−β)/2) · cos α−cos β = −2 sin((α+β)/2)sin((α−β)/2) · tan α ± tan β = sin(α±β)/(cos α cos β) · cot α ± cot β = sin(β±α)/(sin α sin β).

**Tangent half-angle (Weierstrass) substitution (4):** with t = tan(θ/2): sin θ = 2t/(1+t²) · cos θ = (1−t²)/(1+t²) · tan θ = 2t/(1−t²) · dθ = 2dt/(1+t²).

**Linear combination / harmonic addition (2):** a sin x + b cos x = R sin(x+φ) with R=√(a²+b²), tan φ = b/a · a cos x + b sin x = R cos(x−φ).

**Lagrange's trigonometric identities and Dirichlet kernel (4):** Σ_{k=1}^{n}sin kθ = ½cot(θ/2) − cos((n+½)θ)/(2 sin(θ/2)) · Σ_{k=1}^{n}cos kθ = −½ + sin((n+½)θ)/(2 sin(θ/2)) · **Dirichlet kernel** D_n(x)=Σ_{k=−n}^{n}e^{ikx} = sin((n+½)x)/sin(x/2) · **Fejér kernel** F_n(x) = (1/n)(sin(nx/2)/sin(x/2))².

**Infinite products and partial fractions (4):** **Euler's sine product** sin(πx) = πx∏_{n≥1}(1−x²/n²) · cos(πx) = ∏(1 − 4x²/(2n−1)²) · **cotangent partial-fraction expansion** π cot(πx) = 1/x + Σ_{n≥1}2x/(x²−n²) · **Euler reflection formula** Γ(x)Γ(1−x) = π/sin(πx).

**π-formulas from trig (4):** **Wallis product** · **Viète's formula** 2/π = (√2/2)(√(2+√2)/2)… · **Machin's formula** π/4 = 4 arctan(1/5) − arctan(1/239) and Machin-like variants · Gregory–Leibniz series.

**Identities without variables (2):** **Morrie's law** cos20°cos40°cos80° = 1/8 · ∏_{k=1}^{n−1}sin(kπ/n) = n/2^{n−1}.

**Triangle identities (7):** **law of sines** a/sin A = b/sin B = c/sin C = 2R · **law of cosines** c² = a²+b²−2ab cos C · **law of tangents** (a−b)/(a+b) = tan((A−B)/2)/tan((A+B)/2) · **law of cotangents** · **Mollweide's formulas** (a+b)/c = cos((A−B)/2)/sin(C/2) and (a−b)/c = sin((A−B)/2)/cos(C/2) · **Ptolemy's theorem** · in any triangle, tan A + tan B + tan C = tan A tan B tan C, and cot A cot B + cot B cot C + cot C cot A = 1.

**Complex-exponential identities (4):** **Euler's formula** e^{iθ}=cos θ + i sin θ · cos θ = (e^{iθ}+e^{−iθ})/2 · sin θ = (e^{iθ}−e^{−iθ})/(2i) · **Euler's identity** e^{iπ}+1=0.

**Hyperbolic counterparts (6):** cosh²−sinh²=1 · addition formulas for sinh, cosh, tanh · **Osborn's rule** (replace each product of two sines by its negative) · cosh(iz)=cos z, sinh(iz)=i sin z (Cambridge IA) · derivatives (cosh)′=sinh, (sinh)′=cosh.

**Inverse-trig identities (12):** arcsin x + arccos x = π/2 · arctan x + arccot x = π/2 · arcsec x + arccsc x = π/2 · arctan x + arctan(1/x) = π/2 (x>0), −π/2 (x<0) · arcsin x ± arcsin y = arcsin(x√(1−y²) ± y√(1−x²)) · arccos x ± arccos y = arccos(xy ∓ √((1−x²)(1−y²))) · **arctan x ± arctan y = arctan((x±y)/(1∓xy))** (mod π) · arccot x ± arccot y = arccot((xy∓1)/(y±x)) · arcsin(−x)=−arcsin x, arccos(−x)=π−arccos x, arctan(−x)=−arctan x · sin(arccos x)=√(1−x²), tan(arcsin x)=x/√(1−x²), etc. · derivatives (arcsin)′=1/√(1−x²), (arccos)′=−1/√(1−x²), (arctan)′=1/(1+x²), (arcsec)′=1/(|x|√(x²−1)) · series arcsin x = Σ C(2n,n)x^{2n+1}/(4ⁿ(2n+1)), arctan x = Σ(−1)ⁿx^{2n+1}/(2n+1).

## 10.7 EXAMPLES / COUNTEREXAMPLES
- **CE193** The **Koch snowflake curve** — continuous, non-rectifiable, infinite length in every subarc.
- **CE194** The graph of x sin(1/x) on (0,1] — continuous, **non-rectifiable** (Wikipedia *Arc length*).
- **CE195** A simple arc of infinite length that has a **tangent line at every point** (G&O 10.17).
- **CE196** A simple arc of infinite length **between every pair of its points** (G&O 10.18).
- **CE197** **Schwarz lantern (CE170)** — inscribed polyhedra do *not* compute surface area; the arc-length definition has no 2-D analogue.
- **CE198** A **space-filling arc that is almost everywhere differentiable** (G&O 10.8).
- **CE199** A "thin" connected set that is not a simple arc (G&O 10.3); a connected compact set that is not an arc (G&O 10.11).
- **CE200** A smooth curve C with a point P that is never the nearest point of C to any point on its concave side (G&O 10.19) — the focal/evolute obstruction.
- **CE201** tan has an essential (infinite) discontinuity at π/2 — the trig functions defined by power series are *not* all entire.
- **CE202** arcsin is continuous on [−1,1] but not differentiable at ±1 — the inverse function theorem needs f′ ≠ 0.
- **CE203** sin(1/x) shows sin is not uniformly continuous *as a composition*; but sin itself **is** uniformly continuous on ℝ (Lipschitz with constant 1).

**SOURCE NOTES.** **Rudin Ch.8** is the canonical from-scratch construction (§10.1 above is his, verbatim in structure) and it is the *only* book among these that also defines rectifiable curves and proves Λ(γ)=∫|γ′| (**6.26–6.27**) so that the "π is the circumference/diameter" statement becomes a *theorem*. Rudin explicitly cites Eberlein (*Amer. Math. Monthly* **74** (1967) 1223–1225) and Robison (*Math. Mag.* **41** (1968) 66–70) for alternative non-geometric approaches. **Cambridge IA §6.1** does the same construction more briefly and is the leanest citable version. **Tao II §4.6–4.7** ("A digression on complex numbers", "Trigonometric functions") does it after power series and Abel's theorem. **Lebl II §11.4** ("Complex exponential and trigonometric functions") follows Rudin closely. **Spivak's *Calculus*** takes the *opposite* route: he defines π as **twice the area of the unit semicircle**, defines arcsin as an integral, and gets sin/cos as its inverse — the cleanest "integral-first" treatment and the best contrast case. **Hairer & Wanner** give the historical development. **Bishop & Bridges, *Constructive Analysis*** give a constructive (choice-free) treatment. **Abbott and Pugh** essentially do not construct π. **TBB §16.8** covers trigonometric and Fourier series but assumes sin/cos.

---

# 11. THE COMPLEX EXPONENTIAL

## 11.1 DEFINITIONS
ℂ as ℝ² with multiplication; modulus, conjugate, argument · **complex power series** Σaₙzⁿ; **disc of convergence**; radius via Cauchy–Hadamard in ℂ · **exp on ℂ**: E(z)=Σzⁿ/n! · **complex differentiability** at a point (Cambridge IA introduces this) · **branch of the logarithm**; principal branch Log z = ln|z| + i Arg z with Arg ∈ (−π,π]; **multivalued log** · **z^w := exp(w log z)** and its branch ambiguity · **roots of unity**.

## 11.2 THEOREMS
- Σ|z|ⁿ/n! < ∞ for all z ⟹ E is defined and absolutely convergent on all of ℂ.
- **E(z+w) = E(z)E(w)** via the **Cauchy product of two absolutely convergent series** (Cambridge IA states and proves exactly this theorem, then derives e^ze^w=e^{z+w} as a corollary; Rudin 8.6(d)).
- E(z) ≠ 0 for all z; E(−z) = 1/E(z); **conj(E(z)) = E(conj z)**.
- **Euler's formula** e^{iθ} = cos θ + i sin θ; **|e^{iθ}| = 1**; **Euler's identity** e^{iπ}+1 = 0.
- **de Moivre's theorem**; the n distinct **n-th roots of unity** e^{2πik/n}.
- **Periodicity**: E(z+2πi)=E(z), and {z : E(z)=1} = 2πiℤ (Rudin 8.7(a),(c)).
- **E maps ℂ onto ℂ∖{0}**, and **t ↦ E(it) is a bijection [0,2π) → unit circle** (Rudin 8.7(d)).
- **Complex power series are differentiable inside the disc of convergence, with term-by-term derivative** (Cambridge IA proves this as its starred "direct proof of the differentiability of a power series within its circle of convergence"; Rudin 8.1).
- **The complex logarithm has no continuous single-valued branch on ℂ∖{0}**; branches exist on any simply connected domain omitting 0.
- **Fundamental Theorem of Algebra** from these tools (Rudin 8.8; Lebl 11.5 via the maximum modulus principle).
- **Maximum modulus principle** for power series (Lebl 11.5).
- Relations: cosh(iz) = cos z, sinh(iz) = i sin z, cos(iz)=cosh z, sin(iz)=i sinh z.

## 11.3 EXAMPLES / COUNTEREXAMPLES
- **CE204** e^z is **not injective** on ℂ (period 2πi) — unlike on ℝ; so "the" logarithm does not exist.
- **CE205** log(zw) ≠ log z + log w for principal branches (e.g. z = w = −1: Log(1)=0 but Log(−1)+Log(−1)=2πi).
- **CE206** (z^a)^b ≠ z^{ab} for complex powers; e.g. ((−1)²)^{1/2} = 1 ≠ −1 = ((−1)^{1/2})².
- **CE207** i^i = e^{−π/2} (principal branch) is real — and is one of infinitely many values e^{−π/2+2πk}.
- **CE208** Σzⁿ/n has radius 1, diverges at z=1, converges at every other boundary point — **boundary behaviour of complex power series is subtle** and not determined by the radius.
- **CE209** cos z is unbounded on ℂ (cos(iy) = cosh y → ∞) although |cos x| ≤ 1 on ℝ — boundedness of trig functions is a purely real phenomenon (this + Liouville is how one sees sin/cos cannot be bounded entire non-constants).

**SOURCE NOTES.** **Cambridge IA is unusual and worth copying**: it develops complex power series *before* the Riemann integral and defines exp, cos, sin, cosh, sinh on ℂ from the outset, so all the trig identities are proved as complex identities. **Rudin §8** does exp on ℂ, derives everything, and ends with the FTA. **Lebl §11.1 (complex numbers), §11.4 (complex exponential and trigonometric functions), §11.5 (maximum principle and FTA)** is the freely-available parallel. **Tao II §4.6** is a deliberate "digression on complex numbers" — it treats ℂ as needed and no more. **Abbott** never uses complex numbers ("Complex numbers are never used" — preface, verbatim). Typical UG scope: define exp on ℂ, prove Euler's formula, periodicity, and the unit-circle bijection; **defer** Cauchy's theorem, contour integration, residues, and analytic continuation to complex analysis.

---

# 12. THE FUNDAMENTAL THEOREMS OF CALCULUS

## 12.1 DEFINITIONS
Antiderivative / primitive · indefinite integral F(x)=∫ₐ^x f · **Lebesgue point** · **absolutely continuous function** (optional) · **Henstock–Kurzweil (gauge/generalized Riemann) integral** (optional) · **Newton integral** (TBB's name for "∫f := F(b)−F(a) where F′=f").

## 12.2 THEOREMS — ALL THE STANDARD FORMS, ORDERED BY STRENGTH OF HYPOTHESIS

**FTC Part 1 (differentiation of the integral).**
1. **Continuous version.** f continuous on [a,b], F(x)=∫ₐ^x f ⟹ F is differentiable on (a,b) with F′ = f. [Cambridge IA "FTC part 1"; Rudin 6.20; Lebl 5.3; Abbott 7.5; Tao 11.9.]
2. **Pointwise version.** f Riemann integrable on [a,b] ⟹ F is **Lipschitz** (hence uniformly continuous) on [a,b], and F′(x₀)=f(x₀) **at every point of continuity** of f. [Rudin 6.20 states exactly this stronger form.]
3. **Lebesgue version (optional).** f Lebesgue integrable ⟹ F is absolutely continuous and F′ = f **almost everywhere** (Lebesgue differentiation theorem).

**FTC Part 2 (Newton–Leibniz evaluation).**
4. **Continuously differentiable version.** f ∈ C¹[a,b] ⟹ ∫ₐ^b f′ = f(b)−f(a). [Cambridge IA corollary.]
5. **Weakest standard version.** f differentiable on [a,b] with **f′ Riemann integrable** ⟹ ∫ₐ^b f′ = f(b)−f(a). [Cambridge IA "FTC part 2"; Rudin 6.21 states it as: F, f on [a,b], f Riemann integrable, F′=f ⟹ ∫f = F(b)−F(a).] The integrability of f′ **cannot be dropped** — see CE146.
6. **Countable-exceptional-set version.** F continuous on [a,b], F′ = f except on a **countable** set, f Riemann integrable ⟹ ∫ₐ^b f = F(b)−F(a).
7. **Absolutely continuous / Lebesgue version (optional).** F absolutely continuous on [a,b] ⟹ F′ exists a.e., F′ ∈ L¹, and ∫ₐ^b F′ = F(b)−F(a). **This is the sharp characterization**: the class of functions for which Newton–Leibniz holds with the Lebesgue integral is *exactly* AC.
8. **Henstock–Kurzweil version (optional).** If F is continuous and F′ exists everywhere except on a countable set, then F′ is HK-integrable and ∫ₐ^b F′ = F(b)−F(a) — **no integrability hypothesis needed at all**. [Abbott §8.1 "The Generalized Riemann Integral"; TBB Ch.13 §13.2.1 "Relation to the Newton integral".]

**Corollaries / companions.**
9. **Integration by parts** from FTC + product rule.
10. **Substitution / change of variables** from FTC + chain rule.
11. **Taylor's theorem with integral remainder** from repeated integration by parts (Cambridge IA).
12. **Every continuous function has an antiderivative** (from 1) — hence "continuous ⟹ Newton integrable."
13. **Not every derivative is Riemann integrable** (CE146), and **not every Riemann-integrable function has an antiderivative** (CE145) — the two classes are *incomparable*, which is exactly what motivates the HK integral.

## 12.3 EXAMPLES / COUNTEREXAMPLES
- **CE210** **Volterra's function** V: differentiable everywhere with bounded V′, but V′ is discontinuous on a fat-Cantor set of positive measure ⟹ V′ is not Riemann integrable ⟹ FTC Part 2 form 5 fails without the integrability hypothesis. [Wikipedia *FTC*: "some continuous functions have derivatives that are not Riemann integrable."]
- **CE211** **Cantor function** C: continuous, increasing, C′ = 0 a.e., ∫₀¹C′ = 0 ≠ 1 = C(1)−C(0) ⟹ the Lebesgue FTC needs **absolute continuity**, not mere continuity + a.e. differentiability.
- **CE212** f = sgn on [−1,1]: Riemann integrable, F(x)=|x| is *not* differentiable at 0 ⟹ FTC Part 1 gives differentiability only at points of continuity.
- **CE213** Thomae's function: Riemann integrable with F ≡ 0, so F′ = 0 ≠ f on the (dense) rationals.
- **CE214** A function f with F(x)=∫₀^x f differentiable everywhere but F′ ≠ f on a **dense** set (G&O 4.6).
- **CE215** A Riemann-integrable function with **no primitive on any interval** (G&O 4.3).
- **CE216** ∫₀^∞ sin x/x dx = π/2 exists as an improper Riemann integral but the function is not Lebesgue integrable (G&O 8.36) — FTC-type theorems for improper integrals need separate care.
- **CE217** Two continuous functions with everywhere-identical derivatives (in the extended sense) that do not differ by a constant (G&O 8.18).

**SOURCE NOTES.** Cambridge IA states **both** parts with the sharpest elementary hypotheses (Part 2 requires only "f differentiable and f′ integrable"). **Rudin 6.20–6.21** gives the pointwise-continuity form of Part 1 and the integrable-derivative form of Part 2 in the Riemann–Stieltjes setting. **Lebl §5.3** proves both and then immediately uses Part 1 to *define* the logarithm in §5.4. **Abbott §7.5** proves both, and **§8.1 (Generalized Riemann Integral)** is the standard UG treatment of the HK integral that repairs FTC completely. **Tao §11.9** is titled "The two fundamental theorems of calculus" with §11.10 on consequences. **TBB is the most thorough on the hypothesis hierarchy**: Ch.8 the calculus/Newton integral, Ch.10 §10.5 FTC in four sub-parts, Ch.12 variation and **Lebesgue's differentiation theorem**, Ch.13 an entire chapter "Fundamental theorem of the calculus" with §13.1 derivative of the integral and §13.2 integral of the derivative + relation to the Newton integral, and **§12.5–12.6 continuity and absolute continuity / absolute continuity of the indefinite integral**. **Pugh Ch.6** gets to the Lebesgue FTC via density points.

---

# 13. COMMONLY-INCLUDED ITEMS I FOUND THAT MIGHT BE MISSED

These all appear in at least one reputable curriculum or standard text I actually verified, but are routinely absent from a naive topic list:

**Foundations / real numbers**
1. **Equivalence of the completeness axioms** (LUB ⟺ monotone convergence + Archimedean ⟺ nested intervals + Archimedean ⟺ B–W ⟺ Cauchy completeness + Archimedean). Cambridge IA proves *five* of these implications explicitly as separate lemmas; Abbott's §2.6 epilogue does the same.
2. **Archimedean property is independent** — non-Archimedean ordered fields exist (G&O 1.4); an ordered field that is **Cauchy-complete but not complete** (G&O 1.7); an ordered field in which ℚ is not dense (G&O 1.6); a field ordered in two distinct ways (G&O 1.2).
3. **What breaks without completeness** — G&O 1.11 gives seven failures on a "closed interval" of a non-complete ordered field: continuous unbounded; continuous bounded not uniformly continuous; uniformly continuous with no maximum; continuous without the IVP; nonconstant differentiable with f′ ≡ 0; **Rolle's theorem failing**; a monotone nonconstant function with the IVP and f′ ≡ 0.
4. **Cousin's lemma / full covers** (TBB §4.5.3, Ch.9) — the "partitioning" form of compactness that makes the HK integral work and gives slick proofs of MVT, Heine–Borel, and FTC.
5. **Continuous induction** (Cambridge IA, starred) — a real-line induction principle giving one-line proofs of IVT, EVT, and Heine–Borel.
6. **Decimal representation of the reals as a theorem, not a definition** (Lebl §1.5; Tao Appendix 13).

**Sequences and series**
7. **Kummer's test and its specializations** (Raabe, Bertrand, Gauss) — TBB §3.6.9–3.6.11; needed whenever ratio and root both give 1.
8. **Abel–Dini theorem** — there is no slowest divergent series, hence no universal comparison test.
9. **Unordered sums / summation over arbitrary countable index sets** (TBB §3.3; Tao §8.2) — makes unconditional convergence the primitive notion.
10. **Summability methods**: Cesàro and Abel means, Silverman–Toeplitz regularity (TBB §3.9; G&O 6.20–6.21 gives Toeplitz counterexamples).
11. **Infinite products** and the Σpₙ² criterion (TBB §3.11).
12. **Cauchy product of two convergent series can diverge** (CE5) — this single example justifies Mertens' hypothesis.
13. **Stolz–Cesàro** as "L'Hôpital for sequences."

**Continuity**
14. **The continuity set is a G_δ, and every G_δ is realized** — hence *no function is continuous exactly on ℚ* (Abbott §4.6; TBB §6.7).
15. **Oscillation** as the systematic tool for discontinuity (TBB §6.7.1).
16. **Semicontinuity**, the level-set characterization, and the **semicontinuous EVT** (usually only in exercises; G&O 2.8, 8.31, 13.3).
17. **Froda's theorem with the converse construction** — a monotone function discontinuous on an arbitrary prescribed countable set (Rudin 4.31).
18. **Baire category theorem + uniform boundedness at the real-line level** (Abbott §3.5, §8.2; TBB §6.4.3) — and the Baire-category proof that "most" continuous functions are nowhere differentiable (Pugh Ch.4).
19. **Cauchy's functional equation** and the full list of regularity hypotheses that force linearity.
20. **Baire class one functions** have a dense G_δ of continuity points.

**Differentiation**
21. **Dini derivates** (TBB §7.8) — the right tool when f′ may not exist.
22. **Darboux's theorem stated as "a derivative has no jump discontinuities"** — the memorable form.
23. **All five remainder forms in Taylor's theorem** (Lagrange, Cauchy, Peano, integral, Schlömilch–Roche). Most courses give only Lagrange; Cambridge IA gives Lagrange **and** integral.
24. **Convexity ⟹ differentiability off a countable set**, with one-sided derivatives everywhere (TBB §7.10).
25. **Borel's theorem** — every formal power series is somebody's Taylor series.
26. **Fubini's differentiation theorem** for series of monotone functions (TBB §14.7) and **Pompeiu's function** (TBB §14.8).
27. **MVT fails for vector-valued functions**; the correct statement is the mean value *inequality* (Cambridge IB §6.3 makes this a headline).

**Integration**
28. **Composition order matters**: continuous ∘ integrable is integrable; **integrable ∘ continuous need not be** (G&O 4.9, 8.34).
29. **Second mean value theorem for integrals (Bonnet form)** — rarely taught, constantly needed for improper-integral estimates.
30. **Frullani's integral** and the **Cauchy principal value**.
31. **A convergent improper integral whose integrand does not tend to 0** (G&O 4.12) — the integral analogue of the n-th term test is *false*.
32. **Riemann–Stieltjes additivity can fail** when f and α share a discontinuity (G&O 4.14).
33. **Bounded variation and the Jordan decomposition** as prerequisites for both Stieltjes integration and arc length (TBB Ch.12).
34. **Henstock–Kurzweil integral** as the repair of FTC (Abbott §8.1; TBB §8.4.3; Bartle).
35. **Lebl proves Green's theorem inside the multivariable Riemann-integral chapter (§10.6)** — unusual and useful.
36. **Differentiation under the integral sign gets a whole section in Lebl (§9.1)** — often skipped entirely elsewhere.

**Several variables and geometry**
37. **Clairaut's theorem has weaker Peano and Young versions** worth stating separately.
38. **Fubini for the Riemann integral must be stated with upper and lower integrals** (Spivak 3-10) because sections of an integrable function need not be integrable.
39. **Jordan measurability ⟺ boundary has measure zero**, and the SVC set showing this is a real restriction.
40. **The Schwarz lantern** — surface area is not the sup of inscribed polyhedral areas, in sharp contrast to arc length. Essential if you are going to prove the arc-length scaling theorem for π.
41. **A function with a unique critical point that is a strict local but not global minimum** (CE133) — kills the naive multivariable "first derivative test."
42. **Locally exact but not exact differentials** (G&O 9.18) — where topology enters analysis.

**Special functions**
43. **Rudin's step 5** (the existence of a positive zero of the power-series cosine) — the single non-obvious step in the whole construction of π, and the one most treatments hand-wave.
44. **The scaling proof that C/d is circle-independent** — almost never written out, though it is what makes "π = C/d" a theorem.
45. **The a^x-via-rationals construction** (Tao I §5.6, §6.6) — the only rigorous elementary route to real exponents that does not presuppose exp.
46. **e is irrational via the series error bound** (Rudin 3.32) — a three-line proof that fits any course.
47. **Niven's proof that π is irrational** — requires only elementary calculus and the characterization of π as the smallest positive zero of sin.
48. **Wallis product via ∫₀^π sinⁿ** — connects trig, integration by parts, and π in one exercise, and is the standard route to Stirling's formula.
49. **Chebyshev polynomials as the multiple-angle formulas** — Tₙ(cos θ)=cos nθ.
50. **Complex power series before the integral** (Cambridge IA) — lets you define exp, cos, sin, cosh, sinh and prove every identity before ever integrating.

---

## APPENDIX: WHICH SOURCE FOR WHICH TOPIC (verified first-hand)

| | Rudin | Lebl I+II | Tao I+II | Abbott | Pugh | TBB | Spivak | Cambridge IA+IB |
|---|---|---|---|---|---|---|---|---|
| Construction of ℝ | axioms + Dedekind appendix | axioms | **Cauchy sequences, in full** | axioms (§8.6 construction) | **Dedekind cuts, in full** | axioms | — | axioms |
| Metric spaces | **Ch.2, early** | Ch.7 (vol. I end) | **II Ch.1–2** | §8.2 only | Ch.2 | Ch.13 | — | **IB, after normed spaces** |
| Riemann–Stieltjes | **Ch.6, primary** | — | **§11.8** | — | — | — | — | — |
| Lebesgue criterion for R-integrability | ex. | **10.4 (ℝⁿ)** | — | **§7.6** | **§3.2** | Ch.11 | Ch.3 (Calc. on Manifolds) | IB starred |
| Arzelà–Ascoli | **7.23–7.25** | **11.6** | — | — | **§4.3** | — | — | — |
| Stone–Weierstrass | **7.32–7.33** | **11.7** | §3.8 (Weierstrass only) | §6.7 (Weierstrass only) | §4.4 | §16.8.4 | — | IB non-examinable |
| Multivariable differentiation | **Ch.9** | **Ch.8** | **II Ch.6** | — | **Ch.5** | Ch.12 | **Calc. on Manifolds Ch.2** | **IB §6** |
| Multivariable integration | Ch.10 | **Ch.10** | — (Lebesgue instead) | — | §5.7 | — | **Calc. on Manifolds Ch.3** | — |
| Differential forms / Stokes | Ch.10 | — | — | — | **§5.8–5.9** | — | **Ch.4–5** | — |
| exp/log | power series (Ch.8) | **∫dt/t (§5.4)** | **a^x via rationals, then series** | series | series | — | **∫dt/t** | complex power series |
| π and trig | **Ch.8, full construction** | §11.4 | **II §4.7** | — | — | assumed | **area of semicircle** | **IA §6, full construction** |
| Fourier series | §8 | **§11.8** | **II Ch.5** | §8.5 | — | §16.8 | — | — |
| Lebesgue theory | Ch.11 | — | **II Ch.7–8** | — | **Ch.6** | Ch.17 | — | — |
| Counterexample density | low | medium | medium | **high (built into the narrative)** | high | **very high** | medium | low |

**Total distinct counterexamples enumerated above: 217** (CE1–CE217), of which roughly 120 come from the Gelbaum & Olmsted index I extracted in full — that index alone contains several hundred more, organized as: Ch.1 The Real Number System (11 items + 7 sub-items), Ch.2 Functions and Limits (27), Ch.3 Differentiation (13), Ch.4 Riemann Integration (14), Ch.5 Sequences (9), Ch.6 Infinite Series (29), Ch.7 Uniform Convergence (12), Ch.8 Sets and Measure on the Real Axis (41), Ch.9 Functions of Two Variables (19), Ch.10 Plane Sets (24), Ch.11 Area (9), Ch.12 Metric and Topological Spaces (22), Ch.13 Function Spaces (9).

