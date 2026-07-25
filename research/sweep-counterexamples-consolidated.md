All four research agents are in, cross-validated against π-Base (which one agent cloned locally to verify every Steen–Seebach number against the `counterexamples_id` fields). Here is the inventory.

---

# COUNTEREXAMPLES IN GENERAL TOPOLOGY AND METRIC SPACE THEORY

**Organized by what each refutes.** 118 numbered counterexamples. Notation for set-theoretic cost: **ZF** = no choice; **AC_ω/CC** = countable choice; **CC(ℝ)** = countable choice for sets of reals; **DC** = dependent choice; **DMC** = dependent multiple choice; **MC** = multiple choice; **BPI/UL** = Boolean prime ideal = ultrafilter lemma; **AC** = full choice. "S&S n" = Steen–Seebach 2nd ed. example number; "πB" = π-Base space ID.

---

## §0. THE STEEN–SEEBACH SPINE (all 143, numbering verified twice)

Retrieved as raw wikitext and cross-checked two independent ways: Wikipedia's own text anchors (#3 = uncountable discrete, #45 = long line) and π-Base's `counterexamples_id` fields read directly from a local clone of `github.com/pi-base/data`. Every number below is verified, not guessed.

1 Finite discrete · 2 Countable discrete · 3 Uncountable discrete · 4 Indiscrete · 5 Partition · 6 Odd–even · 7 Deleted integer · 8–10 Particular point (finite/countable/uncountable) · 11 Sierpiński · 12 Closed extension · 13–15 Excluded point · 16 Open extension · 17 Either-or · 18–19 Finite complement (countable/uncountable) · 20 Countable complement · 21 Double pointed countable complement · 22 Compact complement · 23–24 Fort (countable/uncountable) · 25 Fortissimo · 26 Arens–Fort · 27 Modified Fort · 28 Euclidean · 29 Cantor set · 30 Rationals · 31 Irrationals · 32 Special subsets of the line · 33 Special subsets of the plane · 34 One-point compactification · 35 One-point compactification of ℚ · 36 Hilbert space · 37 Fréchet space · 38 Hilbert cube · 39 Order topology · 40–41 Ordinal space [0,Γ)/[0,Γ], Γ<Ω · 42 [0,Ω) · 43 [0,Ω] · 44 Uncountable discrete ordinal · 45 Long line · 46 Extended long line · 47 Altered long line · 48 Lexicographic order on the unit square · 49–50 Right order topology (general / on ℝ) · 51 Right half-open interval (Sorgenfrey line) · 52 Nested interval · 53 Overlapping interval · 54 Interlocking interval · 55 Hjalmar Ekdal · 56 Prime ideal · 57 Divisor · 58 Evenly spaced integer (Furstenberg) · 59 p-adic on ℤ · 60 Relatively prime integer (Golomb) · 61 Prime integer (Kirch) · 62 Double pointed reals · 63 Countable complement extension · 64 Smirnov's deleted sequence (K-topology) · 65 Rational sequence · 66–67 Indiscrete rational/irrational extension · 68–69 Pointed rational/irrational extension · 70–71 Discrete rational/irrational extension (71 = Michael line) · 72 Rational extension in the plane · 73 Telophase · 74 Double origin · 75 Irrational slope (Bing) · 76 Deleted diameter · 77 Deleted radius · 78 Half-disk · 79 Irregular lattice · 80 Arens square · 81 Simplified Arens square · 82 Niemytzki tangent disc (Moore plane) · 83 Metrizable tangent disc · 84 Sorgenfrey half-open square (Sorgenfrey plane) · 85 Michael's product · 86 Tychonoff plank · 87 Deleted Tychonoff plank · 88 Alexandroff plank · 89 Dieudonné plank · 90 Tychonoff corkscrew · 91 Deleted Tychonoff corkscrew · 92 Hewitt's condensed corkscrew · 93 Thomas's plank · 94 Thomas's corkscrew · 95 Weak parallel line · 96 Strong parallel line · 97 Concentric circles · 98 Appert · 99 Maximal compact · 100 Minimal Hausdorff · 101 Alexandroff square · 102 ℤ^ℤ · 103 Uncountable products of ℤ⁺ · 104 Baire product metric on ℝ^ω · 105 I^I · 106 [0,Ω)×I^I · 107 Helly space · 108 C[0,1] · 109 Box product on ℝ^ω · 110 Stone–Čech · 111 Stone–Čech of the integers (βℕ) · 112 Novák space · 113 Strong ultrafilter · 114 Single ultrafilter · 115 Nested rectangles · 116 Topologist's sine curve · 117 Closed topologist's sine curve · 118 Extended topologist's sine curve · 119 Infinite broom · 120 Closed infinite broom · 121 Integer broom · 122 Nested angles · 123 Infinite cage · 124 Bernstein's connected sets · 125 Gustin's sequence space · 126–127 Roy's lattice space/subspace · 128 Cantor's leaky tent · 129 Cantor's teepee · 130 Pseudo-arc · 131 Miller's biconnected set · 132 Wheel without its hub · 133 Tangora's connected space · 134 Bounded metrics · 135 Sierpiński's metric space · 136 Duncan's space · 137 Cauchy completion · 138 Hausdorff's metric topology · 139 Post Office metric · 140 Radial metric · 141 Radial interval · 142 Bing's discrete extension · 143 Michael's closed subspace.

**Book structure:** Part I Basic Definitions (1 General Introduction — limit points, closures/interiors, countability, functions, filters; 2 Separation Axioms; 3 Compactness; 4 Connectedness; 5 Metric Spaces). Part II Counterexamples (the 143). Part III Conjectures and Problems, plus a **General Reference Chart** (143 spaces × 61 properties), Special Reference Charts, and separate metrization/compactness charts; 25+ Venn diagrams.

**Terminology trap (biggest source of error reading the book):** S&S invert the modern T2.5 names. S&S "completely Hausdorff" = modern **Urysohn** (disjoint closed neighbourhoods); S&S "**Urysohn**" = modern **completely/functionally Hausdorff** (separated by a continuous function). S&S also write T3/T4/T5 for regular/normal/completely normal without assuming T1.

**Modern successor:** π-Base (`topology.pi-base.org`), founded by James Dabbs 2014, math editor Steven Clontz; Scott Varagona serialized S&S into the first version. It has an inference engine, so absence of a property in the raw data is not a negative claim.

---

## §1. SEPARATION AXIOM SEPARATORS

**Lattice:** T6 ⟹ T5 ⟹ T4 ⟹ T3½ ⟹ T3 ⟹ T2½ ⟹ T2 ⟹ T1 ⟹ T0, plus T3½ ⟹ functionally Hausdorff ⟹ T2½. Hereditary: T0–T2½, functionally Hausdorff, regular, completely regular, completely normal, perfectly normal. **Not hereditary: normal.** Productive: T0–T3, completely regular. **Not productive: normal, perfectly normal.**

**CE-1. Sierpiński space** — S&S 11, πB S000010.
(a) X = {0,1}, opens {∅,{0},X}. (b) **T0 not T1** ({0} not closed). Also normal + T0 ⇏ T1 (vacuously normal). (c) ZF. (d) S&S 11.

**CE-2. Particular point topology** — S&S 8/9/10, πB S000007-9.
(a) τ = {S ⊆ X : p ∈ S} ∪ {∅}. (b) **T0 not T1**; satisfies no higher axiom; separable ({p} dense); hyperconnected hence **pseudocompact**; path-connected but not arc-connected; p is an explosion point. (c) ZF. Dual: excluded point topology, S&S 13–15.

**CE-3. Cofinite topology on an infinite set** — S&S 18/19, πB S000015-16.
(a) Opens = ∅ and complements of finite sets. (b) **T1 not Hausdorff** — the coarsest T1 topology; any two nonempty opens meet. Also refutes "compact + T1 ⟹ T2", "compact subsets are closed" (every subset is compact, only finite sets closed). Hyperconnected, ccc, sequentially compact. (c) ZF.

**CE-4. Cocountable topology on ℝ** — S&S 20, πB S000017.
(a) Opens = ∅ and co-countable sets. (b) **T1 not Hausdorff**, and stronger than CE-3: it is **Lindelöf and T1 yet not Hausdorff**. Hereditarily Lindelöf, hyperconnected, not separable, a P-space, countable subsets discrete. (c) T1/non-T2/non-separable: ZF. Lindelöf: AC_ω.
**Correction:** the *double-pointed* countable complement topology (S&S 21, πB S000018) is **not** a T1 example — π-Base asserts `T₁ = false`, `R₀ = true`. S&S's "double-pointed" constructions exist to manufacture non-T0 spaces. Use S&S 20.

**CE-5. K-topology / Smirnov's deleted sequence topology** — S&S 64, πB S000056.
(a) ℝ with base = Euclidean intervals (a,b) together with all (a,b)∖K, K = {1/n : n ≥ 1}. (b) **Hausdorff not regular**: K is closed, 0 ∉ K, but every basic nbhd (−ε,ε)∖K of 0 meets every open V ⊇ K. Second countable, so also refutes "second countable + T2 ⟹ metrizable". (c) ZF.

**CE-6. Irrational slope topology (Bing)** — S&S 75, πB S000067.
(a) X = {(x,y) ∈ ℚ² : y ≥ 0}; fix irrational θ; with B(a,ε) = ((a−ε,a+ε)∩ℚ)×{0}, local base N_ε(x,y) = {(x,y)} ∪ B(x − y/θ, ε) ∪ B(x + y/θ, ε) — the point plus rationals near the two feet of the slope-±θ lines through it. (b) **Hausdorff not T2½, hence not regular**; closures of any two nonempty opens meet. Countable + connected + T1 ⟹ **every continuous real function is constant**. (c) ZF. (d) Bing, Proc. AMS 4 (1953) 474.

**CE-7. Deleted diameter / deleted radius topologies** — S&S 76/77, πB S000068-9.
(a) ℝ² with base = open discs minus their horizontal diameter-less-centre (resp. minus right horizontal radii). (b) **Hausdorff not regular**. (c) ZF. (π-Base note: S&S call these a subbase; they are in fact a base.)

**CE-8. Countable complement extension topology** — S&S 63, πB S000055.
(a) ℝ, opens = U ∖ A with U Euclidean-open, A countable. (b) **Functionally Hausdorff (and Urysohn) but not regular** — the named witness that functionally Hausdorff ⇏ T3. Lindelöf, connected, not first countable, not semiregular. (c) |ℝ| > ℵ₀; AC_ω for Lindelöf.

**CE-9. Modified Arens square (B. Scott)** — πB S000080.
(a) Q = ℚ∩(0,1); {Q_q}_{q∈Q} a partition of Q into countably many dense sets; S = ⋃_q ({q}×Q_q); X = {(0,0),(1,0)} ∪ S; U_n(0,0) = {(0,0)} ∪ {(x,y)∈S : 0<x<¼, 0<y<1/n}, symmetrically at (1,0); U_n(½,q) = {(x,y)∈S : ¼<x<¾, q−1/n<y<q+1/n}. (b) **T2½ but not functionally Hausdorff and not regular** — the correct witness for that arrow. (c) ZF.
**Erratum in S&S:** the original **Arens square (S&S 80)** is claimed T2½ but **is not** — π-Base asserts `T₂ = true, T₂½ = false`. Use Scott's modification. **Simplified Arens square (S&S 81)** is Hausdorff, second countable, semiregular, not T2½.

**CE-10. Tychonoff corkscrew** — S&S 90, πB S000088. *The central regular-not-completely-regular construction.*
(a) Engine — **the deleted-plank lemma.** Let P = [0,ω₁]×[0,ω], P* = P∖{(ω₁,ω)}, H = [0,ω₁)×{ω} (top edge), K = {ω₁}×[0,ω) (right edge). *Lemma A:* every continuous f : [0,ω₁) → ℝ is eventually constant (sup of countably many bounds is < ω₁). *Lemma B:* every continuous f : P* → ℝ has a single value c(f) with f ≡ c(f) on a tail of H and f(ω₁,n) → c(f) along K. Corollary: H, K are disjoint closed sets with no disjoint neighbourhoods, so **P* is not normal**.
Construction (double-sided Jones machine, πB's rigorous form): Z = (P*×ℤ) ∪ {p⁻,p⁺}; U open iff U∩(P*×ℤ) is product-open and, if p⁺ ∈ U, then P*×{n ≥ N} ⊆ U for some N (dually p⁻). X = Z/∼ where (x,2n) ∼ (x,2n+1) for x ∈ H and (x,2n−1) ∼ (x,2n) for x ∈ K — consecutive sheets glued **alternately** along H and along K. Set a^± = q(p^±). (S&S's picture version: stack ℤ-many deleted planks, slit each, and sew quadrant IV of each level to quadrant I one level down — hence "corkscrew".)
*Regular:* off a^±, locally a copy of the zero-dimensional compact [0,ω₁]×[0,ω]; at a⁺, with V_N = {a⁺} ∪ ⋃_{m≥N} sheet m, one gets cl(V_{N+1}) ⊆ V_N.
*No separating function:* let c_m = c(f ↾ sheet m). Sheets 2n, 2n+1 share their H-edge ⟹ c_{2n} = c_{2n+1}; sheets 2n−1, 2n share their K-edge ⟹ equal. So all c_m = c. Points p_m on the H-tail of sheet m have f(p_m) = c; every nbhd of a⁺ contains p_m for large m and of a⁻ for very negative m, so **f(a⁺) = f(a⁻)**.
(b) **Regular (T3) not completely regular (T3½)**: {a⁻} is closed, a⁺ ∉ it, no continuous function separates them. Equivalently **T3 ⇏ functionally Hausdorff**. (c) ω₁ and its regularity: **ZF + AC_ω**. No CH, no ultrafilters. (d) S&S 90; Willard Problem 18G; ProofWiki; MSE 386742; Porter–Woods after F. B. Jones. **No Wikipedia article exists** — it is a red link.
**Erratum in S&S:** the General Reference Chart lists #90 as countably paracompact; it is not (it contains a closed copy of the deleted plank).

**CE-11. Deleted Tychonoff corkscrew** — S&S 91, πB S000089. *The sharpest form.*
(a) The corkscrew minus a⁻. (b) **Regular + functionally Hausdorff + totally separated, yet still not completely regular.** π-Base asserts all four. This exploits the tension that totally separated does not give zero-dimensional (a zero-dimensional T1 space is automatically Tychonoff). (c) as CE-10.

**CE-12. Hewitt's condensed corkscrew** — S&S 92, πB S000090.
(a) Insert one corkscrew per *ordered pair* of points. Let T = the corkscrew, X₀ = T∖{a⁺,a⁻}, X = X₀×ω₁, A = T×ω₁. Fix a bijection Γ : X×X → ω₁ and ψ : A∖X → X by ψ(a⁺_λ) = π₁(Γ⁻¹λ), ψ(a⁻_λ) = π₂(Γ⁻¹λ). Topologise A by τ_A = {U : ψ⁻¹(U) ⊆ U and U∩A_λ ∈ σ_λ ∀λ}. X carries the subspace topology.
(b) **A regular Hausdorff space on which every continuous real-valued function is constant** — so T3 ⇏ *any* nonconstant continuous real function exists. Proof: extend f to f̂ by f̂(p) = f(ψ(p)); the clause ψ⁻¹(U) ⊆ U makes f̂ continuous, each A_λ ≅ T gives f̂(a⁺_λ) = f̂(a⁻_λ), and λ = Γ(x,y) yields f(x) = f(y). (c) ω₁, its regularity, ℵ₁·ℵ₁ = ℵ₁ (AC). (d) S&S 92; **Hewitt, "On Two Problems of Urysohn", Ann. of Math. 47 (1946) 503–509** — answering Urysohn (1925). Novák, Časopis 73 (1948) 58–68 did it independently for arbitrary uncountable cardinality.

**CE-13. Mysior's example (1981)** — *use this one if you author only one; no ordinals at all.*
(a) X = (ℝ×[0,∞)) ∪ {a}. Every (x,y) with y > 0 is isolated. For axis points put I_x = {(x,y) : 0 < y ≤ 2} and I′_x = {(x+y, y) : 0 < y ≤ 2}; basic nbhds are ({(x,0)} ∪ I_x ∪ I′_x) ∖ F, F finite. Basic nbhds of a: U_n(a) = {a} ∪ {(x,y) : x ≥ n}. The length **2** is essential (> 1, so a point of the strip (n,n+1] is reachable by an I′_c from every c ∈ [n−1,n]).
*Regular:* each N = {(x,0)} ∪ (I_x∪I′_x)∖F is **clopen** (parallel slanted segments never meet; vertical meets slanted in ≤ 1 point), so X∖{a} is zero-dimensional hence Tychonoff; at a, the slant gives **cl U_{n+2}(a) ⊆ U_n(a)**.
*Not completely regular:* A = {(x,0) : x ≤ 1} is closed; if f ↾ A ≡ 0 then each K_n = f⁻¹(0) ∩ {(x,0) : n−1 ≤ x ≤ n} is infinite, by an induction where I′_c ∖ f⁻¹(0) is a countable union of finite sets hence countable; so f⁻¹(0) meets every U_n(a) and, closed, contains a. **f(a) = 0 is forced.**
(b) **T3 ⇏ T3½**, with X∖{a} zero-dimensional Tychonoff — a one-point extension of a Tychonoff space that is only regular. (c) **No ordinals, no ω₁, no CH, no ultrafilters** — only |ℝ| > ℵ₀ and AC_ω. Cardinality 𝔠. (d) Mysior, Proc. AMS 81 (1981) 652–653; Engelking Ex. 1.5.9. Not in π-Base.

**CE-14. Thomas's plank and corkscrew** — S&S 93/94, πB S000091-2.
(a) Plank: L₀ = (0,1)×{0}; L_i = [0,1)×{1/i}, i ≥ 1; X = ⋃L_i. Points of L_i∖{(0,1/i)} isolated; nbhds of (0,1/i) are cofinite in L_i; nbhds of (x,0) are {(x,0)} ∪ {(x,1/n) : n > i}. Equivalently the cheap deleted plank (uncountable Fort space) × (ω+1) minus the corner. Corkscrew: the same double-sided Jones machine with H = L₀, K = {(0,1/n)}.
(b) Plank is **Tychonoff, zero-dimensional, not pseudonormal**; corkscrew is **T3 not T3½ at cardinality 𝔠 with no ordinals**. (c) AC_ω, |ℝ| > ℵ₀. (d) S&S 93/94; J. Thomas, Amer. Math. Monthly 76 (1969) 181–182. **Common confusion: #93 IS completely regular, #94 is NOT.**

**CE-15. Sorgenfrey plane** — S&S 84, πB S000076.
(a) S×S, S = ℝ with base {[a,b)}; base = half-open boxes. **Antidiagonal** Δ = {(x,−x)} is closed (if u+v > 0 the box [u,u+δ)×[v,v+δ) stays in {u+v>0}) and **discrete** ((y,−y) ∈ [x,x+ε)×[−x,−x+ε) forces y ≥ x and −y ≥ −x, so y = x), of size 𝔠. (b) **Completely regular not normal**; also **normality, perfect normality, paracompactness and Lindelöfness are not productive** (S is T6, paracompact, Lindelöf). Not even pseudonormal: the countable closed {(q,−q) : q ∈ ℚ} and {(p,−p) : p irrational} cannot be separated. (c) ZFC via Jones's lemma (2^𝔠 ≤ 2^ℵ₀ is false); **no CH**. The classical Jones argument uses a choice function over 𝒫(D) — the choice-free route is Baire category, and BCT for **separable** complete metric spaces is a ZF theorem.

**CE-16. Niemytzki / Moore plane (tangent disc)** — S&S 82, πB S000074.
(a) Γ = {(x,y) : y ≥ 0}; for y > 0 ordinary Euclidean discs inside the open half-plane; for p = (x,0), V_r(p) = {p} ∪ D_r(x) with D_r(x) the open disc of radius r **tangent to the axis at p** (centre (x,r)). (b) **Completely regular not normal** (indeed not pseudonormal: ℚ×{0} vs irrationals×{0}). Separable, first countable, developable Moore space, locally metrizable — so **separable + first countable + Tychonoff + Moore ⇏ normal ⇏ metrizable**. The germ of the normal Moore space problem. The x-axis is closed discrete of size 𝔠. (c) ZFC (Cantor). **No CH** — CH enters only the different question of whether normal Moore spaces are metrizable.

**CE-17. Deleted Tychonoff plank** — S&S 87, πB S000079.
(a) ([0,ω₁]×[0,ω]) ∖ {(ω₁,ω)}. (b) **Tychonoff, locally compact, pseudocompact — not normal.** Also **the canonical witness that normality is not hereditary**: deleting one point from a compact Hausdorff space destroys normality. β(P*) = P. (c) ω₁ regular = AC_ω.

**CE-18. Tychonoff plank** — S&S 86, πB S000078.
(a) P = [0,ω₁]×[0,ω]. (b) Compact Hausdorff hence normal, but **not completely normal (T4 not T5)** and **not perfectly normal** ({(ω₁,ω)} is closed, not G_δ). (c) AC_ω.

**CE-19. Closed ordinal square [0,ω₁]²** — πB S000218.
(a) (ω₁+1)² with the product order topology; the open subspace [0,ω₁)×[0,ω₁]. (b) The square is compact Hausdorff hence normal; the **open** subspace is **not normal** — H = ω₁×{ω₁} and the diagonal K = {⟨α,α⟩ : α < ω₁} cannot be separated. So this is a second T4-not-T5 example and a "normality not hereditary" witness that does not go through the plank. (c) ω₁, clubs intersect: AC_ω.

**CE-20. Michael's product** — S&S 85, πB S000077.
(a) M × ℙ, where M = the **Michael line** (S&S 71: ℝ with the irrationals made isolated, rationals keeping Euclidean neighbourhoods) and ℙ = the irrationals with the Euclidean topology. (b) **A normal (indeed paracompact, hereditarily normal) space times a separable metric space that is not normal.** The closed sets {(x,x) : x ∈ ℙ} and ℚ×ℙ cannot be separated. (c) ZFC. (d) E. Michael, Bull. AMS 69 (1963) 375–376.

**CE-21. Dowker spaces** — Rudin's is πB S000138.
(a) A **Dowker space** is normal T1 but **not countably paracompact**. *Dowker's theorem (1951):* for normal T1 X, TFAE: X is not countably paracompact ⟺ **X × [0,1] is not normal** ⟺ X is not countably metacompact. Rudin's ZFC example (1971): X ⊆ ∏_{n<ω}(ℵ_{n+1}+1) with the box/δ-topology, points f with ω < cf(f(n)) < ℵ_i for some i, all n; cardinality **ℵ_ω^ℵ₀**. (b) **Normal ⇏ countably paracompact / paracompact**; **normality is not preserved by × [0,1]**. (c) **ZFC**, no extra axioms. Balogh (1996) gave a continuum-sized ZFC example; Kojman–Shelah (1998) an ℵ_{ω+1}-sized one via PCF; ℵ₁-sized ones need ◊/CH (ZFC existence open).

**Other separation items.** **Dieudonné plank** (S&S 89) is metacompact but not paracompact, and normal-not-completely-normal (its deleted version is the non-normal subspace). **Alexandroff square** (S&S 101) is normal not completely normal — the 1970 first edition marked it completely normal in error. **[0,1]^𝔠** (S&S 105) is compact hence normal but not completely normal (it contains a copy of the rational sequence topology, S&S 65). **Rational sequence topology** (S&S 65): Tychonoff, separable, developable, not normal. **Every LOTS/GO-space is T5** (π-Base T000273) — which is why [0,ω₁), the long line, the Sorgenfrey line and the double arrow are all hereditarily normal, and non-normality appears only in products.

**Urysohn's lemma and Tietze failing.** Urysohn is an *iff*, so "no separating function" *proves* non-normality. Cleanest **Tietze** failure: in the deleted Tychonoff plank, A = {ω₁}×[0,ω) is closed discrete ≅ ω, and g(ω₁,n) = n is continuous on A with **no continuous extension** — by Lemma B every continuous f on P* has f(ω₁,n) convergent hence bounded; equivalently P* is pseudocompact while its closed subspace carries unbounded functions. In the corkscrews, even the point-vs-closed-set consequence fails; in Hewitt's, C(X) = ℝ.

---

## §2. COMPACTNESS SEPARATORS

**Lattice:** compact ⟹ countably compact ⟹ limit point compact (= countably compact if T1) and ⟹ pseudocompact. Countably compact + first countable ⟹ sequentially compact. Lindelöf + countably compact ⟹ compact. Countably compact + metacompact (or paracompact) ⟹ compact. In metric spaces all four coincide (using AC_ω).

**CE-22. I^I = [0,1]^[0,1]** — S&S 105, πB S000103.
(a) All functions [0,1] → [0,1], product topology. **Explicit sequence:** f_n(x) = the n-th binary digit of x (non-terminating convention, so canonical). Given any n₁ < n₂ < …, set x* to have binary digit 1 exactly at positions n₂, n₄, n₆, …; then f_{n_k}(x*) alternates. (b) **Compact not sequentially compact**; also compact ⇏ first countable/metrizable/sequential; **products of sequentially compact spaces need not be sequentially compact**. It is separable (Hewitt–Marczewski–Pondiczery). (c) Compactness of a product of compact **Hausdorff** factors = **BPI**. The *failure* of sequential compactness is **pure ZF** — both the sequence and the diagonal point are explicitly definable. No CH.

**CE-23. βℕ (Stone–Čech of the discrete naturals)** — S&S 111, πB S000108.
(a) All ultrafilters on ω; clopen base B(A) = {p : A ∈ p}. Compact Hausdorff, zero-dimensional, extremally disconnected, ℕ dense (separable), |βω| = 2^𝔠. (b) **Compact not sequentially compact**: every convergent sequence is eventually constant. Proof: distinct points can be separated into a pairwise disjoint family A_k with p_k ∈ cl A_k; with E = ⋃_{k even} A_k and O = ⋃_{k odd} A_k, disjoint subsets of ℕ have disjoint closures, and cl E is clopen, so no point is a limit of both parities. Cleanest reason: any infinite closed subset of βω contains a copy of βω (size 2^𝔠), while the closure of a nontrivial convergent sequence would be infinite compact metrizable. Also refutes compact Hausdorff ⇒ sequential / Fréchet–Urysohn / countably tight; and "separable ⟹ small". (c) **BPI/UL** — not ZF-provable. In Blass's model there are no free ultrafilters on any set, and then **βℕ = ℕ**, so every βℕ-based counterexample evaporates. |βℕ| = 2^𝔠 is Pospíšil (Ann. of Math. 38 (1937) 845–846); the independent family of 𝔠 subsets of ω is explicit ZF (Fichtenholz–Kantorovich 1935, Hausdorff 1936), only the ultrafilter extensions need BPI.

**CE-24. [0,ω₁) with the order topology** — S&S 42, πB S000035.
(a) All countable ordinals, order topology. Key lemma: every countable subset is bounded. (b) **Sequentially compact and countably compact but not compact** ({[0,α) : α < ω₁} has no finite or countable subcover); **not Lindelöf, not paracompact, not metacompact, not separable, not metrizable**; but first countable, locally compact, T5, scattered, zero-dimensional. Every continuous f : [0,ω₁) → ℝ is eventually constant. (c) **ω₁ exists in ZF** (Hartogs 1915 — no choice). But "a countable union of countable sets is countable", i.e. **ω₁ regular**, is **not ZF-provable** (Feferman–Lévy = Jech, *The Axiom of Choice* (1973) Thm 10.6, where ω₁ = ℵ_ω^L, no large cardinal needed). Sequential/countable compactness therefore need **AC_ω**; if cf(ω₁) = ω the space is neither, and becomes σ-compact. **Non-compactness is ZF.** Note: [0,ω₁) is **never Lindelöf in ZF** — if it were, one gets Church's postulate C, which forces both CC(ℝ) and ¬CC(ℝ).

**CE-25. [0,ω₁] = ω₁+1** — S&S 43, πB S000036.
(a) The compactification. (b) **Compact Hausdorff and Lindelöf, but not first countable at ω₁, not second countable, not countably tight, not sequential.** ω₁ ∈ cl([0,ω₁)) but no sequence from [0,ω₁) converges to it. (c) AC_ω for the sequence claim.

**CE-26. Long line / long ray** — S&S 45/46, πB S000038/39/149/153.
(a) **Closed long ray** L = ω₁ × [0,1) with the **lexicographic** order topology (has a least element). **Open long ray** = L ∖ {(0,0)}. **Long line** = two rays glued back-to-back. **Extended long ray** L* = L ∪ {∞}. Key: for countable α, the initial segment up to (α,0) is homeomorphic to [0,1].
(b) L: **sequentially compact, countably compact, not compact, not Lindelöf, not paracompact, not metrizable, not second countable, not separable**, but first countable, locally compact, **locally Euclidean — a non-paracompact 1-manifold** (the reason "second countable" is in the definition of manifold), normal T5, path-connected, simply connected, not contractible. L*: **compact, connected, NOT path-connected** (a path to ∞ would force an uncountable increasing family in [0,1]), not first countable at ∞.
(c) Construction: **pure ZF**. Sequential compactness: **AC_ω** (ω₁ regular).
**Correction:** sequential compactness belongs to the **closed** long ray. The **open** long ray is **not** even countably compact — π-Base S000153 asserts `Countably compact = false`; (0, 1/(n+2)) is decreasing with its limit (0,0) deleted, giving an infinite closed discrete set. Also: the long line/ray itself **is** path-connected; only the **extended** version is connected-not-path-connected.

**CE-27. Odd–even topology (the doubled-point space)** — S&S 6.
(a) Two descriptions: X = ℤ × {0,1} with {0,1} indiscrete, base {n}×{0,1}; equivalently ℕ with base {{2k−1,2k}}. (b) **Limit point compact but neither countably compact nor sequentially compact.** Every nonempty A has a limit point (the twin of any of its points); the disjoint countable cover {{n}×Y} has no finite subcover; (n,0) has no convergent subsequence. **Not T0** — necessarily so, since in T1 spaces limit point compact ⟺ countably compact. (c) ZF.

**CE-28. Novák space** — S&S 112, πB S000109.
(a) In βω, let g be the fixed-point-free involution swapping 2n ↔ 2n+1, G its continuous extension (which has no fixed points on βω). By transfinite recursion of length 2^𝔠 build increasing Y_α with |Y_α| < 2^𝔠 and G(Y_α) ∩ Y_α = ∅, using |cl F| = 2^𝔠 for countably infinite F. Set X = (⋃Y_α) ∪ ω. (b) X is **countably compact but X × X is not** — B = {(n, g(n)) : n ∈ ω} is infinite closed discrete. So **countable compactness is not productive** (contrast: compact × countably compact is countably compact). Novák (Fund. Math. 40 (1953) 106–112) and Terasaka (1952) independently gave two countably compact subspaces of βℕ with non-countably-compact product. (c) **Full AC** plus **BPI**; **no CH** needed (older presentations use CH only to shorten the recursion). **π-Base records that S&S's own version of the construction is incorrect**, since it assumes 2^𝔠 is regular, which is not a ZFC theorem.

**CE-29. Lindelöf not compact.** ℝ (second countable ⟹ Lindelöf, needs AC_ω); any countable space; the cocountable topology (Lindelöf, neither σ-compact nor locally compact); the **Sorgenfrey line** (S&S 51, πB S000043) — Lindelöf, paracompact, T6, first countable, separable, hereditarily Lindelöf and separable, zero-dimensional, Baire, but **not second countable, not metrizable, not σ-compact, not locally compact**; every compact subset is countable. (c) ZF for the structure; Lindelöfness of ℝ ⟺ **CC(ℝ)** (Herrlich–Strecker).

**CE-30. Fortissimo space (one-point Lindelöfication)** — S&S 25, πB S000022.
(a) D uncountable discrete, X = D ∪ {∞}; all subsets of D are open, and U ∋ ∞ is open iff X∖U is countable. (b) **Lindelöf but not second countable, not first countable, not separable, and not ccc** ({{d}} is an uncountable disjoint open family) — the strongest single Lindelöf separator. Regular, zero-dimensional, hereditarily normal, paracompact, a P-space; compact subsets are **finite**, so it is not σ-compact by pure counting. (c) ZF + AC_ω.

**CE-31. σ-compact not locally compact: ℚ** — S&S 30.
(a) ℚ = ⋃_q {q}, a countable union of compact singletons. Nowhere locally compact: any neighbourhood contains [a,b]∩ℚ with a,b irrational — closed and bounded in ℚ, not compact. (b) **σ-compact ⇏ locally compact**; Lindelöf ⇏ locally compact; also ℚ is not a Baire space and not completely metrizable. (c) ZF; Baire arguments use DC.
**Correction:** the **Hawaiian earring is compact** — it is not an example here. Use ℚ, the CW wedge ⋁_n S¹ (σ-compact, not locally compact at the wedge point), or ℝ^∞ = colim ℝⁿ. Note the **irrationals are NOT σ-compact**.

**CE-32. Irrationals ℝ∖ℚ** — S&S 31, πB S000028.
(a) Euclidean subspace; homeomorphic to ℕ^ℕ. (b) **Lindelöf, second countable, Polish, but not σ-compact and not locally compact** — so Lindelöf ⇏ σ-compact and separable completely metrizable ⇏ σ-compact. Proof: a compact K_n containing (a,b)∩ℙ would contain [a,b]; so ℙ would be meagre in itself, contradicting BCT. (c) **DC** (via BCT); the Fortissimo space gives a choice-light alternative.

**CE-33. Locally compact not compact.** ℝ, ℝⁿ, any discrete space, any manifold, [0,ω₁), ℕ. Positive counterweight: a Hausdorff TVS is locally compact iff finite-dimensional. (c) ZF.

**CE-34. Paracompact not compact.** Every metric space (**Stone's theorem**), hence ℝ, ℓ², any discrete space, every CW complex; every Lindelöf regular space. (c) **This is the interesting one — see §8, CE-113.** Non-paracompact: the long line, [0,ω₁), the Sorgenfrey plane, the planks, the Moore plane.

**CE-35. Isbell–Mrówka Ψ-space** — pseudocompact not countably compact.
(a) 𝒜 a **MAD** (maximal almost disjoint) family on ω; Ψ(𝒜) = ω ⊔ 𝒜, points of ω isolated, basic nbhds of A ∈ 𝒜 being {A} ∪ (A∖F), F finite. (b) **Tychonoff, separable, first countable, locally compact, zero-dimensional, pseudocompact, but NOT countably compact** (𝒜 is infinite closed discrete) **and not normal** (Jones's lemma when |𝒜| = 𝔠). Pseudocompactness uses **maximality**: an unbounded f gives a closed discrete B ⊆ ω, and MADness forces some A with A∩B infinite, at which f is unbounded on every neighbourhood. Also a separable space with an uncountable closed discrete subspace. (c) An infinite **MAD** family needs **Zorn/AC** — a countable AD family is explicit, but maximality is not; it is consistent with ZF that no MAD family exists. 𝔞 is independent of ZFC.

**CE-36. Riesz: the closed unit ball of an infinite-dimensional normed space.**
(a) **Riesz's lemma:** Y a closed proper subspace of normed X, 0 < α < 1 ⟹ ∃u, ‖u‖ = 1, dist(u,Y) ≥ α. (Proof: pick v ∉ Y, a = dist(v,Y) > 0, y₀ with ‖v−y₀‖ ≤ a/α, u = (v−y₀)/‖v−y₀‖.) α = 1 is attainable for reflexive X or finite-dimensional Y, not in general. **Riesz's theorem:** for a normed space, dim X < ∞ ⟺ B_X compact ⟺ X locally compact ⟺ some neighbourhood of 0 is relatively compact. More generally a Hausdorff TVS is locally compact iff finite-dimensional.
Concrete witness in ℓ²: **‖e_n − e_m‖₂ = √2** for n ≠ m, so {e_n} is an infinite closed discrete bounded subset of the unit sphere.
(b) **Closed + bounded + complete ⇏ compact**; Heine–Borel is a theorem specifically about finite-dimensional normed spaces. (c) Riesz's **lemma** itself is ZF (one existential instance, not a choice function); "compact ball ⟹ finite-dimensional" is **ZF**; the iterated ½-separated construction uses **DC** (avoidable in ZF for separable X by taking least indices in a countable dense set); in ℓ^p, c₀ concretely, **nothing** is needed.

**CE-37. Other closed-bounded-noncompact.** ℚ∩[0,1] **inside ℚ** (closed in ℚ, not in ℝ — the ambient matters); (0,1] as a space in itself; any infinite set with the discrete metric (S&S 134 "bounded metrics"); (ℝ, min(d,1)) where the whole line is bounded. The last shows **boundedness is a property of the metric, never of the topology**.

**CE-38. One-point (Alexandroff) compactification** — S&S 34/35.
(a) X* = X ∪ {∞}; opens = opens of X plus (X∖C)∪{∞} for C closed compact. Hausdorff **iff** X is locally compact Hausdorff. (b) ℝⁿ* = Sⁿ; ℕ* = the convergent-sequence space; **ℚ* (S&S 35) is compact T1 but NOT Hausdorff**, since ℚ is not locally compact; the open long ray gives L*, compact connected not path-connected. Contrast βX, which adds 2^𝔠 points to ℕ where ℕ* adds one — and β of the deleted plank is the full plank, adding exactly one. (c) The construction is ZF; βX for general Tychonoff X needs BPI.

---

## §3. CONNECTEDNESS SEPARATORS

**CE-39. Topologist's sine curve** — S&S 116/117/118.
(a) T = {(x, sin 1/x) : x ∈ (0,1]} ∪ {(0,0)}; closed version T̄ adds {0}×[−1,1]; extended version adds an arc across the top. **Warsaw circle** W closes T̄ up with an external arc. (b) T, T̄, W: **connected, not path-connected, not locally connected**; T̄ and W compact — so a **continuum need not be path-connected**. Extended version: **path-connected but not locally connected**. *Connected:* T lies between a connected set and its closure. *Not path-connected:* at t* = sup{t : γ(t) on the axis}, the second coordinate oscillates between ±1 in every right-neighbourhood. W has all homotopy groups zero yet is **not contractible** — weakly contractible ⇏ contractible; it has the *shape* of S¹, the motivating example of shape theory. (c) ZF.

**CE-40. Extended long ray L*** — S&S 46. Compact connected **not path-connected**. (c) AC_ω for the surrounding properties; ZF for the construction. (See CE-26.)

**CE-41. Comb space and deleted comb.**
(a) C = ({0}∪{1/n})×[0,1] ∪ [0,1]×{0}; deleted comb D = C ∖ ({0}×(0,1)). (b) C is **path-connected and contractible but not locally connected**, and admits no strong deformation retraction to (0,1). D is **connected but not path-connected**. (c) ZF.

**CE-42. Infinite broom / closed infinite broom / integer broom** — S&S 119/120/121.
(a) Broom: segments from the origin to (1,1/n) plus (½,1]×{0}. (b) Broom: connected, not path-connected, not locally connected. **Closed** broom (adds the segment to (1,0)): **arc-connected but still not locally connected**. (c) ZF.

**CE-43. Locally connected not connected.** [0,1] ∪ [2,3]; any discrete space with ≥ 2 points (locally connected and totally disconnected); ℝ∖{0}. With CE-39 this shows the two notions are logically independent. In a locally connected space, components are open and equal quasicomponents.

**CE-44. Components ≠ quasicomponents.**
(a) X = {(0,0),(0,1)} ∪ ⋃_{n≥1} ({1/n}×[0,1]) ⊆ [0,1]². (b) The **component** of (0,1) is the singleton {(0,1)}; the **quasicomponent** is {(0,0),(0,1)} — any clopen set containing (0,1) must contain all but finitely many full segments, hence (0,0) as a limit point. Locally compact Hausdorff variant: (({0}∪{1/n})×[−1,1]) ∖ {(0,0)}, where {0}×[−1,0) and {0}×(0,1] are distinct components in one quasicomponent. **X is necessarily non-compact**: components = quasicomponents in compact Hausdorff spaces, in locally connected spaces, and PC = C = Q in locally path-connected spaces. (c) ZF.

**CE-45. Totally disconnected not discrete.** **ℚ** (no isolated points, zero-dimensional, not Baire); **the irrationals** (completely metrizable, ≅ ℕ^ℕ); the **Cantor set** (compact, perfect); ℤ_p, ℚ_p (S&S 59), profinite groups, Stone spaces, βℕ, the Sorgenfrey line, the double arrow.

**CE-46. Cantor set** — S&S 29, πB S000026.
(a) C = {Σ a_n 3^{−n} : a_n ∈ {0,2}} ≅ {0,1}^ℕ ≅ C×C ≅ ℤ₂. (b) **Compact, perfect, totally disconnected, zero-dimensional, metrizable, uncountable (𝔠), measure zero, nowhere dense, homogeneous.** **Brouwer:** every nonempty perfect compact metrizable totally disconnected space is homeomorphic to C — so it is unique. **Alexandroff–Hausdorff:** every nonempty compact metric space is a continuous image of C. (c) Brouwer's characterization uses **AC_ω/DC**; the set itself is ZF.

**CE-47. Knaster–Kuratowski fan (Cantor's leaky tent)** — S&S 128/129.
(a) C the Cantor set, partitioned into **E** = endpoints of removed middle thirds (countable dense) and **F** = non-endpoints (e.g. ¼). Apex p = (½,½). For c ∈ C let L_c be the segment from (c,0) to p. Set X_c = {(x,y) ∈ L_c : y ∈ ℚ} for c ∈ E, and {(x,y) ∈ L_c : y ∉ ℚ} ∪ {p} for c ∈ F. **X = ⋃_{c∈C} X_c ⊆ ℝ²**, Euclidean subspace topology.
(b) **X is connected; X ∖ {p} is totally disconnected** — p is a **dispersion point**. Moreover X∖{p} is **totally disconnected but not totally separated** (its quasicomponents are the punctured legs), hence **not zero-dimensional** — a separable metric witness. And **X is a connected metric space with no nonconstant paths**: a nonconstant path gives a nondegenerate subcontinuum K; if p ∉ K then K is a nondegenerate connected subset of a totally disconnected space; if p ∈ K, the boundary-bumping lemma makes cl D = D ∪ {p} a subcontinuum with D nondegenerate and inside X∖{p}. Stronger than the sine curve, which does contain nonconstant paths.
(c) **Pure ZF** — E, F, ℚ, C are all explicitly defined. Worth emphasizing: a choice-free connected totally-path-disconnected metric space.
**Naming caution:** S&S 128 "Cantor's leaky tent" and 129 "Cantor's teepee" are the apex-present and apex-absent pair, but Wikipedia's two articles contradict each other on which nickname is which. **Always say "with/without the apex" explicitly.**

**CE-48. Indecomposable continua.**
(a) A **continuum** = nonempty compact connected metric space; **indecomposable** = not the union of two proper subcontinua; **hereditarily indecomposable** = every subcontinuum is. A nondegenerate indecomposable metric continuum has exactly 𝔠 **composants**, pairwise disjoint, each dense, connected and of first category (a decomposable one has 1 or 3).
(b) **Knaster buckethandle**: semicircles above the axis centred at (½,0) with endpoints in C, plus semicircles below centred at midpoints of [2/3^i, 3/3^i]. Compact, connected, indecomposable, one-dimensional, not path-connected, not locally connected; the inverse limit of the tent map and the invariant set of the **Smale horseshoe**. **Refutes: continuum ⇏ decomposable, ⇏ locally connected, ⇏ path-connected.** (c) ZF.

**CE-49. Pseudo-arc** — S&S 130.
(a) The unique nondegenerate **hereditarily indecomposable chainable** continuum (Knaster 1922; Moise 1948; Bing 1948). (b) **Bing 1951:** all hereditarily indecomposable arc-like continua are homeomorphic. **Bing 1948:** it is **homogeneous**. It is **hereditarily equivalent**, and **typical** — the pseudo-arcs form a dense G_δ in the hyperspace of subcontinua of ℝⁿ (n ≥ 2). It contains **no arcs at all**, hence is **connected, compact, and totally path-disconnected**. (c) ZF (inverse limits); Bing's uniqueness ZF+DC.

**CE-50. Solenoids.** Σ = inverse limit of S¹ under z ↦ z^{n_i}; geometrically ⋂ of nested solid tori each wrapping n times. **Compact, connected, metrizable, one-dimensional, homogeneous, a compact abelian topological group, indecomposable, NOT locally connected, NOT path-connected** (path components are dense lines). Refutes "compact connected topological group ⟹ path-connected or locally connected" and "homogeneous continuum ⟹ locally connected". (c) ZF.

**CE-51. Lakes of Wada.** Three or more disjoint connected open plane regions with a **single common boundary**, which is an indecomposable continuum. Realized as the shared boundary of the three basins of Newton's method for z³−1.

**CE-52. Erdős space.** 𝔈 = {x ∈ ℓ² : all x_n ∈ ℚ}. **Totally disconnected with topological dimension exactly 1** — hence **not zero-dimensional**, in a separable metric setting; 𝔈 ≅ 𝔈×𝔈. Complete Erdős space 𝔈_c (coordinates in {0} ∪ irrationals) is Polish, and is homeomorphic to the endpoint set of the Lelek fan and to the escaping endpoints of the Julia set of e^z−1. (c) ZF. (d) Erdős, Ann. of Math. 41 (1940).

**CE-53. Bing's countable connected Hausdorff space** = the irrational slope topology, CE-6. **Countable + connected + Hausdorff.** Surprising because (i) a countable regular T1 space is metrizable hence totally disconnected, so any example must be **Hausdorff but not regular**; (ii) every nondegenerate continuum has cardinality ≥ 𝔠, so **every path in any countable Hausdorff space is constant**. So every countable connected Hausdorff space is automatically **totally path-disconnected** — a second, entirely different family of connected spaces with no nonconstant paths. (c) ZF.

**CE-54. Golomb space** — S&S 60, πB S000052.
(a) ℤ⁺ with base the arithmetic progressions a + bℕ with gcd(a,b) = 1. (b) **Countable, Hausdorff, connected, not regular, not locally connected, totally path-disconnected**; topologically rigid (Banakh–Mioduszewski–Turek). Gives a topological proof of the infinitude of primes. **Contrast S&S 58** (Furstenberg's evenly spaced integer topology, base a+bℤ *without* coprimality) which is **metrizable and homeomorphic to ℚ**, hence totally disconnected — coprimality is exactly what turns total disconnectedness into connectedness. **Kirch space** (S&S 61, base a + pℤ⁺, p prime, p ∤ a) is Hausdorff, connected **and locally connected**. (c) ZF.

**CE-55. Line with two origins — connected/path-connected but not arc-connected.**
(a) ℝ with the origin doubled: (ℝ×{a}) ⊔ (ℝ×{b}) / ((x,a) ∼ (x,b) for x ≠ 0). (b) **T1, second countable, locally Euclidean, connected, path-connected, but NOT Hausdorff and NOT arc-connected.** Path-connected: go left from 0_a to −1 and back right to 0_b through the shared points. Not arc-connected: no injective path can reach 0_b without revisiting. **Theorem: path-connected + Hausdorff ⟹ arc-connected** (Engelking 6.3.12(a)), so any counterexample must be non-Hausdorff. Also refutes "locally Euclidean + second countable ⟹ manifold" and "limits of sequences are unique"; 1/n converges to **both** origins; two compact sets with non-compact intersection; a compact set that is not closed. (c) ZF. Related: S&S 73 telophase, S&S 74 double origin.

**CE-56. Hyperconnected and ultraconnected spaces.**
(a) **Hyperconnected**: no two nonempty opens are disjoint (every nonempty open is dense). **Ultraconnected**: no two nonempty closed sets are disjoint. (b) Hyperconnected ⟹ connected, locally connected, **pseudocompact**, and (for ≥ 2 points) **not Hausdorff**. Ultraconnected ⟹ **path-connected** (route both points through a common point of the two closures), normal, limit point compact, pseudocompact. These give path-connected-not-arc-connected examples and show how much of connectivity theory silently assumes Hausdorff. Examples: cofinite (S&S 18/19), right order topology (49/50), particular point (8–10), indiscrete (4), Spec(R) for irreducible R, any irreducible variety with the Zariski topology; ultraconnected: indiscrete, Sierpiński (11), excluded point (13–15).

**Also:** **Bernstein's connected sets** (S&S 124) — a Bernstein set meets every uncountable closed set but contains none, requires **full AC** (transfinite recursion over a well-ordering of the closed sets; no such set is Borel/definable); can be made connected yet totally path-disconnected. **Miller's biconnected set** (S&S 131): biconnected **without** a dispersion point (the KK fan is biconnected *with* one); uses AC.

**Correction:** the **Hawaiian earring** is compact, connected, path-connected, **locally path-connected** (hence locally connected) and metrizable. What fails is **semi-local simple connectivity** at the origin, so it has no universal cover, and π₁ is uncountable and **not free**. It is not a "path-connected not locally connected" example. Contrast the CW wedge ⋁_n S¹, which is not compact and has free π₁; the natural continuous bijection ⋁_n S¹ → H is not a homeomorphism.

**Correction:** the **double arrow space** is not a connectedness example at all — it is compact Hausdorff, **zero-dimensional/totally disconnected**, separable, first countable, hereditarily Lindelöf and hereditarily separable, T6, not second countable, not metrizable (all metrizable subspaces countable); its **square is not hereditarily normal** (it contains a copy of the Sorgenfrey plane).

---

## §4. COUNTABILITY SEPARATORS

Cardinal functions: weight w, density d, cellularity c (ccc ⟺ c = ℵ₀), **extent** e (closed discrete subspaces), **spread** s. c ≤ d ≤ hd ≤ w; e ≤ s. **Almost every paradox below is just c(X) = ℵ₀ < e(X) = 𝔠.**

**CE-57. Sorgenfrey line** — S&S 51, πB S000043.
(a) ℝ with base {[a,b)}. (b) **Separable, Lindelöf and first countable, yet NOT second countable** — the canonical single witness for all three arrows at once. Also not metrizable, not σ-compact, not locally compact, no countable network. *Choice-free non-second-countability:* for any base B, pick B_x ∈ B with x ∈ B_x ⊆ [x,x+1); then min B_x = x, so B surjects onto ℝ and |B| ≥ 𝔠. So w = 𝔠 while d = ℵ₀. (c) Structure ZF; Lindelöfness of ℝ ⟺ CC(ℝ).

**CE-58. Separable with a non-separable subspace.** **Sorgenfrey plane** (CE-15): separable, antidiagonal closed discrete of size 𝔠. **Niemytzki plane** (CE-16): separable, x-axis closed discrete of size 𝔠. **Ψ-space** (CE-35): ω dense, 𝒜 uncountable closed discrete. **Refutes: separability is not hereditary** (not even to closed subspaces). (c) ZFC.

**CE-59. First countable not second countable.** **Uncountable discrete space** (S&S 3) — and note this is the **only metrizable counterexample in this entire report**, refuting the one implication the metric collapse does not repair. Also the long ray, [0,ω₁), the Sorgenfrey line, the double arrow.

**CE-60. Lindelöf not second countable / not first countable / not separable / not ccc.** The **Fortissimo space** (CE-30) does all four. Alternative for the first countability failure: [0,ω₁] (compact Lindelöf, χ(ω₁) = ω₁).

**CE-61. Separable not second countable, with first countability also failing.** {0,1}^𝔠 — compact Hausdorff, separable (HMP), character 𝔠, w = 𝔠.

**CE-62. ccc not separable — the Suslin line (consistency level).**
(a) A **Suslin line** is a densely ordered, Dedekind complete linear order without endpoints whose order topology is **ccc but not separable**. By Cantor's characterization of the order type of ℝ, this is exactly a counterexample to that theorem with "separable" weakened to "ccc". It would be first countable, perfectly normal, hereditarily ccc, hereditarily Lindelöf, non-separable.
(b) **ccc ⇏ separable — consistently, not in ZFC.**
(c) **Suslin's Hypothesis (no Suslin line) is independent of ZFC.** Con(ZFC+SH): **Solovay & Tennenbaum (1971)**, Ann. of Math. 94, 201–245 — the invention of iterated ccc forcing; **MA + ¬CH ⟹ SH**. Con(ZFC+¬SH): **Jech (1967)**, CMUC 8, 291–305; independently **Tennenbaum (1968)**. **◊ ⟹ ¬SH** (**Jensen 1972**), so **a Suslin line exists in L**. Jensen also proved Con(ZFC + CH + SH). Equivalences (Kurepa 1935): Suslin line ⟺ Suslin tree ⟺ Suslin algebra. **[Flag]** "A Suslin line has a non-ccc square" (Kurepa; Kunen Ch. II §4) is classical but was not confirmed on any page fetched this session — verify against Kunen before publishing.

**CE-63. ccc not separable — the ZFC example: Cantor cubes.**
(a) {0,1}^κ, product topology. **ccc for every κ**, by the **Δ-system (sunflower) lemma** plus Marczewski's theorem that a product is ccc if every finite subproduct is — hence *any* product of separable spaces is ccc. And **d({0,1}^κ) = log κ**, so:
> **{0,1}^κ is separable ⟺ κ ≤ 𝔠.**
(⟸ is HMP; ⟹ because α ↦ {d ∈ D : d(α) = 1} is injective, forcing κ ≤ 2^ℵ₀.)
(b) Take κ = 𝔠⁺ or 2^𝔠: **compact Hausdorff, ccc, homogeneous, zero-dimensional, NOT separable — in plain ZFC.** (c) ccc: ZFC (Δ-lemma uses ω₁ regular). Compactness of 2^κ: **BPI**. **No CH needed** — κ = 𝔠⁺ always works.

**CE-64. Hewitt–Marczewski–Pondiczery.** A product of at most 2^κ spaces each of density ≤ κ has density ≤ κ. At κ = ℵ₀: **a product of at most 𝔠 separable spaces is separable** — so {0,1}^ℝ, [0,1]^ℝ, ℝ^ℝ **are separable**, the genuinely surprising direction. Explicit countable dense set in {0,1}^ℝ: index by (finitely many disjoint rational intervals I₁<…<I_n, bits b₁…b_n), the point being b_k on I_k and 0 elsewhere. (d) Pondiczery, Duke Math. J. 11 (1944); Hewitt, Bull. AMS 52 (1946) 641–643; Marczewski 1947.

**CE-65. "A separable space with uncountably many disjoint open sets" — IMPOSSIBLE.**
**Separable ⟹ ccc.** Proof (choice-free): D countable dense, {U_α} pairwise disjoint nonempty open; d ↦ the unique α with d ∈ U_α is a **surjection** D → A, so A is countable. (π-Base T000021; S&S p. 22.)
**The intended example is a separable space with an uncountable closed DISCRETE subspace**, i.e. c(X) = ℵ₀ < e(X) = 𝔠 — CE-58. The definitions quantify differently: ccc bounds families of pairwise disjoint opens; A discrete only needs V_a ∩ A = {a}, and the V_a may freely overlap **off A**. In the Niemytzki plane this is vivid: V_r(x)∖{(x,0)} lies strictly above the axis.
Quantitatively: tangent discs D_r(a), D_s(b) are **disjoint ⟺ |a−b| ≥ 2√(rs)**. So tangent discs at distinct points *can* be disjoint, but if radii r_a make the V_{r_a}(a) pairwise disjoint then A is **countable** — some A_n = {a : r_a > 1/n} would be uncountable with all pairwise distances > 2/n, impossible in ℝ. **[Flag: this disc criterion and the dichotomy are a subagent's own derivation, numerically validated on 2·10⁵ configurations, not a citation — treat as original content in any judge/audit path.]**

**CE-66. The metrizable collapse.** For **metrizable** X, TFAE: second countable, separable, Lindelöf, hereditarily Lindelöf, hereditarily separable, **ccc**, countable network, every closed discrete subspace countable. (ccc ⟹ separable: take a maximal 1/n-separated set A_n by Zorn; the balls B(a,1/2n) are disjoint so |A_n| ≤ ℵ₀; maximality makes ⋃A_n dense.) **Consequence: every example in §1–§4 above is non-metrizable**, except CE-59. (c) (2)⟹(1) is ZF; (1)⟹(2), (1)⟹(3), (3)⟹(2) need **AC_ω**; (6)⟹(2) needs **Zorn**. So the whole chain is ZF+AC_ω/AC, not ZF.

---

## §5. CONVERGENCE — WHY SEQUENCES FAIL

**Hierarchy (all strict):** metrizable ⟹ first countable ⟹ Fréchet–Urysohn ⟹ sequential ⟹ countably tight.

**CE-67. Cocountable ℝ: sequential closure ≠ closure** — S&S 20.
(a) As CE-4. **Convergent ⟺ eventually constant** (pure ZF: C = {x_n : x_n ≠ x} is countable as the image of a subset of ℕ, so ℝ∖C is an open neighbourhood). (b) Every subset is sequentially closed **and** sequentially open, so scl = id. **scl([0,1]) = [0,1] but cl([0,1]) = ℝ.** The simplest refutation of "every space is sequential". Not first countable, not sequential, not Fréchet–Urysohn, not countably tight (t = ω₁). (c) **ZF** for all of the above; Lindelöfness AC_ω.

**CE-68. [0,ω₁]: a point in the closure that is no sequential limit.** ω₁ ∈ cl([0,ω₁)) (every (α,ω₁] contains α+1) but no sequence from [0,ω₁) converges to it (sup of countably many countable ordinals is < ω₁). **A compact Hausdorff space that is not sequential and not countably tight.** (c) **AC_ω** — the load-bearing fact is ω₁ regular; in the Feferman–Lévy model the whole example collapses.

**CE-69. Arens–Fort space** — S&S 26.
(a) X = ω×ω; U open iff (0,0) ∉ U, or U contains all but finitely many points of all but finitely many columns. Base: U(F,g) = {(0,0)} ∪ {(m,n) : m ∉ F, n ≥ g(m)}. (b) **Countably tight but not sequential** — *the* canonical separator for that arrow. Hausdorff, **regular, normal, countable, zero-dimensional**; no sequence in X∖{(0,0)} converges to (0,0), so the sequential coreflection is discrete. Crucially this shows the "no nontrivial sequences" pathology is **not caused by bad separation axioms**, unlike CE-67. (c) ZF.

**CE-70. Arens space S₂ — sequential but not Fréchet–Urysohn.**
(a) X = {∞} ∪ ℕ ∪ (ℕ×ℕ); each (n,j) isolated; base at n is {n} ∪ {(n,j) : j ≥ m}; base at ∞ is U(F,g) = {∞} ∪ ⋃_{n∉F} ({n} ∪ {(n,j) : j ≥ g(n)}). Equivalently: take a convergent sequence {p_n}∪{p} and for each n a convergent sequence {s_{n,j}}∪{s_n}, and identify s_n with p_n. (b) With A = ℕ×ℕ: **∞ ∈ cl(A) but no sequence in A converges to ∞**, while X is sequential (a quotient of a metric space). **Sequential order 2**: scl(A) = A ∪ ℕ, scl(scl(A)) = X — the sequential closure operator is **not idempotent**. **Universal: every sequential non-Fréchet space contains a copy of S₂.** Its subspace {∞}∪(ℕ×ℕ) is homeomorphic to the Arens–Fort space, and S(ω) is the quotient of S₂ collapsing the spine. (c) ZF.

**CE-71. Sequential fan S(ω) — Fréchet–Urysohn but not first countable.**
(a) S(ω) = {∞} ∪ (ω×ω), each (n,m) isolated, base at ∞ given by B_f = {∞} ∪ {(n,m) : m ≥ f(n)} for f ∈ ω^ω. (b) **It IS Fréchet–Urysohn** (∞ ∈ cl(A) iff some column-trace is infinite; enumerate that column). What fails is **first countability** — χ(∞) = the dominating number **𝔡**, by the canonical diagonal g(k) = 1 + max{f₁(k),…,f_k(k)}. Also: FU is not productive (S(ω)² is not Fréchet), and whether S(ω)² is sequential is independent of ZFC. A second concrete FU-not-first-countable space: ℝ/ℤ (collapse ℤ to a point). (c) ZF.
**Correction:** the fan is **not** the Fréchet–Urysohn counterexample — it is FU. The "sequential not FU" example is the Arens space. Note also the subscript trap: S(ω) counts **spines**, S₂ in the Arhangel'skiĭ–Franklin hierarchy counts **sequential order**.

**CE-72. Sequentially continuous but not continuous.**
General principle: X is sequential **iff** every sequentially continuous map out of X (to any target) is continuous. So every non-sequential space supplies one.
(i) **id : (ℝ, cocountable) → (ℝ, usual)** — sequentially continuous (all convergent sequences are eventually constant) but not continuous ((0,1) is not co-countable). **Pure ZF.** Sharper: id into the **discrete** topology is sequentially continuous.
(ii) On [0,ω₁]: f(ω₁) = 1, f(α) = 0 otherwise — sequentially continuous (**AC_ω**), not continuous.
(iii) On the Arens–Fort space: the indicator of (0,0). **ZF.**
(iv) id : βω → discrete. **UL.**
**The contrast is subtler than "metrizable domains are safe":** for f : ℝ → ℝ, **global** sequential continuity ⟹ continuity is a **ZF theorem** (Sierpiński 1916 — Herrlich calls treating this as a choice principle "a serious mistake"); **pointwise at a single x**, and sequential continuity on a subspace A ⊆ ℝ, are **⟺ CC(ℝ)**; on a general metric domain it is **⟺ AC_ω**.

**CE-73. Sequentially compact not compact / compact not sequentially compact.** See CE-22, CE-23 (compact not sequentially compact: I^I, βℕ) and CE-24, CE-26 (sequentially compact not compact: [0,ω₁), the closed long ray). Both directions of the second rest on **ω₁ regular = AC_ω**.

**CE-74. Nets and filters — the repair and its bill.** Closure = net limits and continuity = net continuity are **ZF** (use the canonical net on {(s,U) : U ∈ 𝒩(x), s ∈ S∩U} ordered by reverse inclusion — no choice function needed). "Compact ⟺ every net has a convergent subnet" (⇐) needs **AC**; "every net has a universal subnet" (Kelley) needs **AC/Zorn**; "compact ⟺ every ultrafilter converges" (⇐) needs **UL**; the *filter* form "every filter has a cluster point" is **ZF** (it is the FIP definition restated). Sequences are defective precisely because they are nets on the single fixed directed set ω.

**CE-75. Metric compactness splits FOUR ways in ZF** (Herrlich 1997 §2, after Bentley–Herrlich): **Heine–Borel-compact** (open covers), **Weierstraß-compact** (accumulation points), **Alexandroff–Urysohn-compact** (complete accumulation points), **sequentially compact**.
- ZF: HB ⟹ Weierstraß; HB ⟹ complete + totally bounded; AU ⟹ Weierstraß; Weierstraß ⟹ seq.; complete + totally bounded ⟹ seq. **Sequential compactness is the weakest in ZF.**
- "Weierstraß ⟺ seq." ⟺ **HR 9** (finite ⟺ Dedekind-finite).
- "HB ⟺ seq.", "HB ⟺ complete + totally bounded", "seq. ⟺ complete + totally bounded" — **each ⟺ AC_ω**.
- "**AU ⟺ HB**" ⟺ **full AC**.

**CE-76. Weak-topology pathologies.** e_n ⇀ 0 weakly in ℓ² while ‖e_n‖ = 1 (**weak ⇏ norm convergence**); in ℓ¹, weak and norm convergence of *sequences* coincide (Schur) though the topologies differ, so sequences cannot detect the difference. Every weakly open set in an infinite-dimensional normed space is **unbounded** (it contains a coset of a finite-codimension subspace), so the weak topology is **not metrizable, not first countable, not sequential**. **The weak closure of the unit sphere is the closed unit ball.** Eberlein–Šmulian rescues sequences on the compactness side.

---

## §6. METRIC SPACE COUNTEREXAMPLES

**CE-77. Completeness is not topological.** ℝ (complete) ≅ (0,1) (not complete, 1/n is Cauchy without limit), via h(x) = arctan(x)/π + ½. **Completeness is a property of the metric, not the topology.** (c) ZF.

**CE-78. But complete metrizability IS topological.** On (0,1), **d(x,y) = |tan(π(x−½)) − tan(π(y−½))|** is a complete metric inducing the usual topology. **Alexandrov:** a subspace of a completely metrizable space is completely metrizable iff it is **G_δ**. So (0,1) and ℝ∖ℚ are completely metrizable; **ℚ is not** (F_σ, not G_δ). Polish = separable + completely metrizable. (c) ZF.

**CE-79. Uniformly continuous bijection with non-uniformly-continuous inverse.**
**Correction to the standard briefing: the cube example runs the other way.** x^{1/3} **IS** uniformly continuous on ℝ — for u,v ≥ 0, u³−v³ = (u−v)(u²+uv+v²) ≥ (u−v)³ since u²+uv+v² ≥ (u−v)², giving |a^{1/3} − b^{1/3}| ≤ |a−b|^{1/3}. So:
> **f(x) = x^{1/3} is a uniformly continuous bijection ℝ → ℝ whose inverse x³ is not** — |(n+1/n)³ − n³| = 3n + 3/n + 1/n³ → ∞ while the gap → 0.
Others: **arctan : ℝ → (−π/2, π/2)** (Lipschitz-1, inverse tan not uniformly continuous); **id : (ℕ, |m−n|) → (ℕ, |1/m−1/n|)** (1-Lipschitz since |1/m−1/n| = |m−n|/mn ≤ |m−n|; inverse fails since d′(n,n+1) → 0 while d(n,n+1) = 1). (c) ZF.

**CE-80. Contraction on an incomplete space with no fixed point.** f(x) = x/2 on (0,1]: a ½-contraction mapping into itself; a fixed point needs x = 0 ∉ X. Also x/2 on ℚ∩(0,1]. **Refutes: dropping completeness from Banach's theorem.** (c) ZF — Banach's theorem itself is choice-free (the recursion x_{n+1} = f(x_n) makes no selections).

**CE-81. Strictly contractive on a COMPLETE space with no fixed point.**
> **f(x) = x + 1/x on [1,∞)** (closed in ℝ, hence complete). f maps into [2,∞) ⊆ X, and |f(x)−f(y)| = |x−y|·|1 − 1/(xy)| with xy > 1 for x ≠ y, so **|f(x)−f(y)| < |x−y| strictly**. A fixed point needs 1/x = 0.
> **g(x) = √(1+x²) on ℝ.** |g′(x)| = |x|/√(1+x²) < 1 everywhere, so MVT gives strict contraction; a fixed point needs 1 + x² = x².
(b) **Refutes weakening Banach's uniform k < 1 to pointwise strict inequality — completeness alone does not rescue it.** The mechanism: inf_x d(f(x),x) = 0, approached only "at infinity". **Edelstein's positive counterweight:** on a **compact** metric space, d(fx,fy) < d(x,y) for x ≠ y **does** give a unique fixed point (φ(x) = d(f(x),x) attains its inf; if positive, φ(f(x₀)) < φ(x₀)). (c) ZF.

**CE-82. Cantor intersection — all failure modes.**
**Theorem:** X complete, C_k nonempty closed nested with **diam C_k → 0** ⟹ ⋂C_k is a single point. The property characterizes completeness.
- **Drop diam → 0, keep completeness (unbounded):** F_n = [n,∞) ⊆ ℝ, ⋂ = ∅.
- **Drop diam → 0, keep completeness AND boundedness:** X = ℕ with **d(m,n) = 1 + 1/(m+n)** for m ≠ n (triangle inequality holds since each term > 1 while any sum of two exceeds 1.5 ≥ any single value). Distinct points are > 1 apart so the space is complete and every subset closed. F_n = {n, n+1, …} is nonempty, closed, **bounded**, nested, ⋂ = ∅, diam → 1 ≠ 0.
- **Keep diam → 0, drop completeness:** in ℚ, F_n = {q : |q − √2| ≤ 1/n} — nonempty, closed, bounded, diam → 0, ⋂ = ∅.
Both hypotheses are independently necessary, and "bounded" cannot substitute for diam → 0. (c) ZF.

**CE-83. Totally bounded not compact.** (0,1); ℚ∩[0,1]. Both sit inside the totally bounded [0,1] and total boundedness is hereditary; neither is complete. **Compact ⟺ complete + totally bounded** (metric).

**CE-84. Bounded not totally bounded.** Any infinite discrete metric space (no finite union of singletons covers it at ε = ½); the closed unit ball of ℓ² (the e_n are √2-separated); {0,1}-sequences in ℓ^∞ at pairwise distance 1. And **(ℝ, min(d,1))** induces the usual topology yet every subset is bounded — so **"bounded" is never a topological property** (S&S 134). (c) "Complete + totally bounded ⟺ compact" needs **AC_ω** for the hard directions.

**CE-85. Same topology, different uniformity and different Cauchy sequences.**
On (0,∞): d(x,y) = |x−y| and d′(x,y) = |1/x − 1/y| induce the **same topology** (x ↦ 1/x is a self-homeomorphism) with genuinely different Cauchy sequences — (1/n) is d-Cauchy not d′-Cauchy; (n) is d′-Cauchy not d-Cauchy.
**Correction: neither of these is complete**, so this pair does *not* give "one complete, one not". For that use:
> **X = ℕ:** d(m,n) = |m−n| is **complete** (Cauchy ⟹ eventually constant); d′(m,n) = |1/m − 1/n| is **incomplete** ((n) is d′-Cauchy with no d′-limit). Both induce the **discrete** topology. *Cleanest example in the list.*
Also (0,1) with the usual vs the tan metric; and (0,∞) with |x−y| vs |x−y| + |1/x−1/y| (complete).
**Upshot: completeness, Cauchy-ness, boundedness, total boundedness and uniform continuity are invariants of the metric/uniformity, never of the topology.** Their topological shadows are complete metrizability and compactness. (c) ZF.

**CE-86. Completion strictly larger.** ℚ → ℝ. **(C[0,1], ‖·‖₁) → L¹[0,1]:** f_n = 0 on [0,½], n(t−½) on [½, ½+1/n], 1 thereafter. ‖f_n − f_m‖₁ = |1/n − 1/m|/2 so it is Cauchy, and ‖f_n − χ_{(½,1]}‖₁ = 1/(2n) → 0; no continuous h can equal χ_{(½,1]} a.e. **So the same C[0,1] is complete under ‖·‖_∞ and incomplete under ‖·‖₁** — completeness is not a property of the vector space. Also (c₀₀, ‖·‖_∞) → c₀.

**CE-87. Non-equivalent norms in infinite dimensions.** On C[0,1], **f_n(t) = max(0, 1−nt)** has ‖f_n‖_∞ = 1 while ‖f_n‖₁ = 1/(2n) → 0, so no C gives ‖f‖_∞ ≤ C‖f‖₁. On c₀₀, x^{(n)} = (1,…,1,0,…) with n ones separates three norms at once: ‖·‖_∞ = 1, ‖·‖₂ = √n, ‖·‖₁ = n.
Pointed corollary: **id : (C[0,1],‖·‖_∞) → (C[0,1],‖·‖₁)** is a **continuous linear bijection with unbounded inverse** — no contradiction with the bounded inverse theorem because the target is incomplete, which isolates completeness as the real hypothesis.
**All norms on a finite-dimensional space are equivalent, and this is a ZF theorem:** compare with ‖·‖_∞ via a fixed basis; ‖·‖ is M-Lipschitz hence continuous; the sphere is compact by **Heine–Borel for ℝⁿ, which is choice-free** (Tychonoff is used only for finite products); a positive continuous function on a compact set attains a positive minimum. (The *sequential* form of Heine–Borel in general metric spaces does need countable choice.)

**CE-88. Discontinuous linear functional — the completeness dividing line.**
(i) **On c₀₀ with ‖·‖_∞ (normed, incomplete): explicit, ZF, no choice.** **f(x) = Σ_{n≥1} n·x_n** is finite on each x ∈ c₀₀, linear, everywhere defined, and unbounded (f(e_n) = n, ‖e_n‖ = 1). Also T(p) = p′(1) on polynomials in C[0,1]; T(f) = f′(0) on C^∞[0,1] with f_n(x) = sin(n²x)/n.
(ii) **On an infinite-dimensional Banach space: choice is unavoidable.** Take a Hamel basis, normalised independent (e_n), set T(e_n) = n‖e_n‖ and 0 elsewhere. The extension step is **HR 109 ⟺ AC**.
(c) **Not provable in ZF+DC.** Under **ZF + DC + BP** (every set of reals has the Baire property), **every linear map from a Fréchet space into a normed space is continuous** (Karagila Cor. 28, after Banach; Wright, Bull. AMS **79** (1973) 1247–1250 — *not* 1977 — "All operators on a Hilbert space are bounded"; Garnir 1974). By **Shelah, Israel J. Math. 48 (1984) 1–47**, ZF+DC+BP is consistent **without an inaccessible**; in **Solovay's model** (Ann. of Math. 92 (1970) 1–56, needs an inaccessible) the same holds and **DC holds** — so DC alone gives neither a Hamel basis, a free ultrafilter, a non-measurable set, nor Banach–Tarski.
**Important correction: "HB ⟹ a discontinuous linear functional" is an OPEN PROBLEM**, not a theorem. Howard–Rubin: [52][367] = 0 (does HB give a Hamel basis for ℝ over ℚ?) and [52][366] = 0 (a discontinuous additive f : ℝ → ℝ?) — both **open**, as are the same questions for BPI. What *is* provable: **HB is incompatible with BP** (it yields a nonzero functional on ℓ^∞/c₀, hence a finitely additive charge on 𝒫(ℕ) vanishing on finite sets, hence by Oxtoby's zero-one law a set without BP), so HB fails in the Solovay and Shelah models. **Luxemburg–Väth (2001):** over ZF, HB ⟺ "every nontrivial normed space has a nonzero bounded functional". Structurally HB cannot bridge the gap because it extends only **dominated** functionals; one needs an algebraic complement, i.e. a Hamel basis, i.e. AC.
**Hamel bases in Banach spaces are uncountable** (BCT: a countable one makes X a countable union of closed nowhere-dense proper subspaces); explicit ≥ 𝔠 witness in ℓ^p: v_t = (t, t², t³, …) for t ∈ (0,1), independent by Vandermonde.

**CE-89. The ℓ^p scale.**
ℓ^p ⊊ ℓ^q for p < q, witness (n^{−1/p}). **ℓ^p (p < ∞), c₀, c are separable; ℓ^∞ is not** — {χ_A : A ⊆ ℕ} is a 1-separated family of size 2^ℵ₀, so the balls B(χ_A, ½) are uncountably many and disjoint (**pure ZF**). Duals: (ℓ^p)* ≅ ℓ^q, (c₀)* ≅ ℓ¹, (c)* ≅ ℓ¹, and **(ℓ^∞)* ≅ ba(2^ℕ)** — bounded *finitely additive* charges, of which ℓ¹ (the countably additive ones) is a proper subspace. Explicit element outside ℓ¹: a **Banach limit** L (shift-invariant, extends lim, ‖L‖ = 1); L(e_k) = 0 for all k, so no y ∈ ℓ¹ represents it.
Refutes: "Banach ⟹ separable" (ℓ^∞); "X separable ⟹ X* separable" (ℓ¹ separable, (ℓ¹)* = ℓ^∞ not — the true direction is the converse); "Banach ⟹ reflexive" (ℓ¹, ℓ^∞, c₀, c, C[0,1], L¹, L^∞); "duality is an involution" (c₀** = ℓ^∞).
**c₀ is not a dual space:** B_{c₀} has **no extreme points** (if ‖x‖_∞ ≤ 1 with x_n → 0, pick N with |x_N| < ½; then x ± ½e_N ∈ B and x is their midpoint), whereas B_{X*} always has extreme points by Alaoglu + Krein–Milman; isomorphically, every separable dual has the Radon–Nikodym property and c₀ fails it.
(c) Non-separability and the dual identifications: **ZF**. Banach limits / ℓ¹ ⊊ (ℓ^∞)*: **HB ⟸ BPI**. **Banach–Alaoglu ⟺ BPI**; **Krein–Milman + Alaoglu ⟺ AC** (Bell–Fremlin 1972).

**CE-90. C[0,1]** — S&S 108. Complete under ‖·‖_∞; **separable** (Weierstrass + rational coefficients); dual = regular Borel measures (Riesz–Markov–Kakutani); **not reflexive** (it contains an isometric copy of c₀ via disjointly supported bumps); **not even strictly convex** (f ≡ 1, g(t) = 1−t have ‖f‖ = ‖g‖ = ‖f−g‖ = ‖(f+g)/2‖ = 1); **not a dual space**. **Banach–Mazur: every separable Banach space embeds isometrically in C[0,1]** — so it is universal, and Enflo's space embeds in it, refuting "a closed subspace of a space with a Schauder basis has one".

**CE-91. Closed unit ball of ℓ² is not compact.** ‖e_n − e_m‖₂ = √2. Closed, bounded, **complete** — what fails is **total boundedness**. (See CE-36.) Note B_{ℓ²} *is* weakly compact.

**CE-92. Complete, not compact, not locally compact.** Every infinite-dimensional Banach space (ℓ^p, c₀, C[0,1]) and every infinite-dimensional Fréchet space, by Riesz. **The Baire space ℕ^ℕ** is complete, separable, zero-dimensional and **nowhere locally compact** — every open set contains a cylinder [s] ≅ ℕ^ℕ, covered by the disjoint clopen [s⌢k] with no finite subcover.

**CE-93. ℕ^ℕ ≅ the irrationals.** Complete ultrametric d(x,y) = 2^{−min{n : x_n ≠ y_n}}, whose balls are exactly the cylinders. Homeomorphism by continued fractions: (a₀,a₁,…) ↦ [1+a₀; 1+a₁, 1+a₂, …]; the cylinder [a₁,…,a_n] maps onto the irrationals between consecutive convergents, an interval of length ≤ 1/q_n² → 0. **Refutes "completely metrizable = complete in the given metric"** — ℝ∖ℚ under the euclidean metric is **not** complete yet **is** completely metrizable. Every Polish space is a continuous image of ℕ^ℕ. (c) ZF.

**CE-94. Closure of an open ball ⊊ closed ball.** In a discrete metric space with ≥ 2 points, cl(B(p,1)) = {p} while B̄(p,1) = X. Also X = {0} ∪ [1,2] ⊆ ℝ with p = 0, r = 1: cl(B(0,1)) = {0}, B̄(0,1) = {0,1}. **The containment runs only one way** (cl(B) ⊆ B̄ always), and in a **normed space** the two always coincide — so any counterexample must live outside the normed world; isolated points are the generic mechanism. Also refutes "spheres are the boundaries of balls". (c) ZF.

**CE-95. Baire category failures.** **ℚ is not a Baire space** (meagre in itself). **ℝ∖ℚ is an incomplete metric space that IS Baire** (G_δ in ℝ, hence completely metrizable) — cleanly separating "complete metric" from "Baire space". A **Bernstein set** is a Baire metric space that is not completely metrizable (not Borel), and needs **AC**. Non-metrizable Baire-not-completely-metrizable: the Sorgenfrey line and plane, the Niemytzki plane. (c) **See §8, CE-112 — BCT is four different principles.**

**CE-96. Ultrametrics and the p-adics** — S&S 59.
(a) d(x,z) ≤ max{d(x,y), d(y,z)}. Consequences: **every triangle is isosceles**; **every point of a ball is a centre** (d(x,y) < r ⟹ B(x;r) = B(y;r)); **all balls of positive radius are clopen**; two balls are nested or disjoint, never partially overlapping. p-adics: |x|_p = p^{−v_p(x)}; ℚ_p is complete, locally compact, totally disconnected; ℤ_p is compact.
(b) Refutes essentially every ℝⁿ geometric reflex: unique centres, connected balls, nontrivial clopen sets, and (in a complete ultrametric space) d(x_n, x_{n+1}) → 0 **suffices** for Cauchy. Also **ℚ has completions other than ℝ** (Ostrowski). (c) ZF.

**CE-97. Lipschitz ⊊ uniformly continuous ⊊ continuous.** √x on [0,1] is uniformly continuous, **not Lipschitz** (Hölder-½); x^{1/3} on ℝ likewise (Hölder-⅓). x² on ℝ, e^x, 1/x on (0,1), sin(1/x) on (0,1) are continuous, **not uniformly continuous**. **Heine–Cantor:** continuous on compact ⟹ uniformly continuous, so every counterexample needs a non-compact domain.

**CE-98. Uniform continuity extends to the completion; continuity does not.** f(x) = 1/x on (0,1) is continuous, maps the Cauchy (1/n) to the non-Cauchy (n), and has **no continuous extension to [0,1]**. The same map sends the **bounded** (0,1) onto the **unbounded** (1,∞) — so the continuous image of a bounded set can be unbounded. (Correct positive statement: continuous images of *compact* sets are compact.)

**CE-99. Continuous bijection that is not a homeomorphism.** γ : [0,2π) → S¹, t ↦ (cos t, sin t) — the inverse is discontinuous at (1,0). Also id : (ℝ, discrete) → (ℝ, usual). Positive: a continuous bijection from a **compact** space to a **Hausdorff** space is a homeomorphism; so is a continuous open (or closed) bijection.

**CE-100. Continuous image of a closed set need not be closed.** The hyperbola H = {xy = 1} is closed in ℝ² (preimage of {1} under (x,y) ↦ xy), and π₁(H) = ℝ∖{0}. Also f(x) = 1/(1+x²) maps the closed ℝ onto (0,1]. Continuous maps preserve compactness, connectedness, path-connectedness, separability and Lindelöfness — **never** closedness or openness. Compact-to-Hausdorff maps and **proper** maps are closed.

**Also worth naming:** **James's theorem** — a *Banach* space is reflexive ⟺ every functional attains its norm on B_X; explicit non-attaining functional on c₀: f(x) = Σ 2^{−n}x_n has ‖f‖ = 1 never attained. Completeness cannot be dropped. **Bishop–Phelps** gives the counterweight: the norm-attaining functionals are always **dense**. **The James space J** is separable, non-reflexive, **isometrically isomorphic to its bidual** but not via the canonical map — refuting "isometric to its bidual ⟹ reflexive" and showing why reflexivity must name the canonical embedding. **Enflo (Acta Math. 130 (1973) 309–317):** a separable reflexive Banach space failing the approximation property, hence **with no Schauder basis** — refuting Banach's basis problem. **The Hilbert cube** [0,1]^ℕ (S&S 38): compact metrizable via d(x,y) = Σ2^{−n}|x_n−y_n|, universal for separable metrizable spaces (Urysohn), and **homogeneous** — its "corners" are topologically indistinguishable from interior points, false for [0,1]^n by invariance of domain. Its compactness is **ZF** (via 2^ℕ ≅ (2^ℕ)^ℕ ↠ [0,1]^ℕ; prefer this to the diagonal-subsequence argument, which uses DC).

---

## §7. PRODUCT AND QUOTIENT PATHOLOGIES

**CE-101. Box vs product topology.** Box base = ∏U_α with all U_α open; product base additionally requires U_α = X_α for all but finitely many α. **f : ℝ → ℝ^ω, f(t) = (t,t,t,…) is continuous into the product but NOT into the box** — U = ∏(−1/n, 1/n) is box-open and contains f(0), but f((−δ,δ)) ⊆ U would force δ = 0. **Refutes the coordinatewise criterion for continuity.** (Munkres §19 Ex. 2, Thm 19.6.)

**CE-102. □ℝ^ω is not connected.** B = bounded sequences is **clopen** (if x ∈ B, ∏(x_n−1, x_n+1) ⊆ B; if x ∉ B the same box lies in B^c). **Refutes "an arbitrary product of connected spaces is connected"** — true for the product topology, false for the box.

**CE-103. Components of □ℝ^ω (Knight's theorem).** Components = quasicomponents = path components = classes of x ∼ y ⟺ **y − x has finite support** ("eventually equal", *not* "bounded difference"). Proof: S_x = ⋃_N {y : y_k = x_k ∀k > N} is a union of copies of ℝ^{N+1} through x, hence path-connected; and for each positive sequence a, T_a = {y : ((y_n−x_n)/a_n) bounded} is clopen with ⋂_a T_a = S_x. (d) Knight, Quart. J. Math. Oxford 15 (1964) 41–54.

**CE-104. Other □ℝ^ω failures.** Not first countable (diagonalise the boxes), hence not metrizable; not separable; not Lindelöf; not compact. **Contrast: ℝ^ω with the product topology IS metrizable**, e.g. d(x,y) = sup_n min(|x_n−y_n|,1)/n. Calibration: under CH the box product of countably many compact metric spaces is paracompact (M. E. Rudin 1972), but the box product of countably many metrizable spaces need not be normal (van Douwen 1975).

**CE-105. Product of quotient maps need not be a quotient map.**
(a) **Munkres §22 Ex. 6:** ℝ_K (the K-topology), Y = ℝ_K/K collapsing K = {1/n} to a point, p the quotient map. Then **p × p is not a quotient map**: Δ_Y is not closed in Y×Y (Y is T1 but not Hausdorff) while (p×p)⁻¹(Δ_Y) = Δ_{ℝ_K} ∪ (K×K) **is** closed.
**Correction: Munkres 22.6 is p × p, not p × id_ℝ.**
(b) **The ℚ/ℤ version:** q : ℚ → ℚ/ℤ is a quotient map but **q × id_ℚ is not**. The countability (equivalently, non-local-compactness) of ℚ is exactly what makes it work.
**Positive counterpart (Whitehead):** if q : X → Y is a quotient map and Z is **locally compact Hausdorff**, then q × id_Z is a quotient map (Bull. AMS 54 (1948) 1125–1132). This is why the ℝ-version fails to be a counterexample.

**CE-106. ℝ/ℚ is INDISCRETE.** A saturated open V satisfies V = V + ℚ; if nonempty it contains an interval, and density of ℚ makes it all of ℝ. **So the quotient topology on ℝ/ℚ is trivial, on a set of size 𝔠.** In one blow this refutes: quotients preserve T2, T1, **or even T0**; quotients of metrizable / second countable / perfectly normal spaces retain any of it.

**CE-107. Line with two origins as a quotient.** See CE-55: a quotient of the metrizable ℝ×{0,1} that is T1, second countable, locally Euclidean, connected, path-connected, but not Hausdorff.

**CE-108. ℝ/ℤ vs ℝ/∼ — the distinction that matters.** Collapsing ℤ **to a single point** gives a non-first-countable, non-metrizable space. Quotienting by the **group action** x ∼ x+1 gives S¹, compact metrizable. Same identifications, radically different topologies: the group quotient map is **open**, the collapse map is not.

**CE-109. Quotients failing T1; the Sierpiński quotient.** q : ℝ → ℝ/[0,1) — the point [[0,1)] is not closed, since ℝ∖[0,1) is not open. π : ℝ → {0,1} with π⁻¹(1) = (0,∞) gives exactly the Sierpiński space. **General principle: among the separation axioms, essentially nothing is quotient-stable.** What *is* preserved: connectedness, path-connectedness, compactness, separability, Lindelöfness, second countability — all "covering/size" properties, none of the "separation" ones.

**CE-110. A quotient map that is neither open nor closed.** (Munkres §22 Ex. 3.) A = {(x,y) ∈ ℝ² : x ≥ 0 or y = 0}, q = π₁|_A : A → ℝ. Quotient (it has the continuous section x ↦ (x,0)); **not open** (U = [0,1)×(1,2) is open in A, q(U) = [0,1)); **not closed** ({(x,1/x) : x > 0} is closed in A, image (0,∞)).

**CE-111. Open vs closed maps.** π₁ : ℝ² → ℝ is **open but not closed** (the hyperbola). A constant map is **closed but not open**. **The restriction of a quotient map need not be a quotient map** (Munkres §22 Example 3: p : [0,1]∪[2,3] → [0,2] is a closed quotient map, but restricted to [0,1]∪(2,3] it is not) — it *is* quotient when restricted to a saturated open or saturated closed set. Projections are always open and never closed in general, which is why compactness of the fibres (the tube lemma) is the right hypothesis.

**CE-112. Interior does not commute with products.** In ℝ^ω, ∏_n[0,1] has **empty interior** (any basic open set is unrestricted in all but finitely many coordinates), while ∏_n(0,1) ≠ ∅. In general int(∏A_α) = ∅ unless A_α = X_α for all but finitely many α. **True by contrast:** ∏A_α as a subspace is the product of the subspaces (box too), and cl(∏A_α) = ∏cl(A_α).

**CE-113. Compact-open topology and the failure of cartesian closure.** Evaluation C(Y,Z) × Y → Z, composition, and currying C(X×Y,Z) → C(X,C(Y,Z)) all work when **Y is locally compact Hausdorff**. For Y = ℚ, evaluation is not continuous and currying is not surjective — **Top is not cartesian closed**. Fix: compactly generated weak Hausdorff spaces. *Structural remark:* CE-105 and this are the **same theorem** — −×Z preserves colimits (hence quotients) exactly when Z is exponentiable, and for Hausdorff spaces that is local compactness.

**Product failures already covered:** normality and perfect normality (CE-15), paracompactness (CE-15), Lindelöfness (CE-15), countable compactness (CE-28), normal × metric (CE-20), sequential compactness (CE-22), first countability and metrizability in uncountable products (CE-61), Fréchet–Urysohn (CE-71), ccc (CE-62 flag). **Productive:** compactness, connectedness, path-connectedness, Hausdorff/regular/Tychonoff, second countability (countably many factors), ccc (products of separable factors), separability (up to 𝔠 factors).

---

## §8. AXIOM-OF-CHOICE DEPENDENCE — THE LEDGER

```
AC ≡ Tychonoff ≡ products of compact T1 are compact
   ≡ every VS has a basis (the MC⟹AC step needs Foundation)
   ≡ Alexandroff-Urysohn-cpt <=> Heine-Borel-cpt (metric)
   ≡ Banach-Alaoglu + Krein-Milman
   |
   +-- BPI ≡ ultrafilter lemma ≡ Tychonoff for compact HAUSDORFF
   |     ≡ {0,1}^I compact ≡ Hilbert cubes compact ≡ Stone rep.
   |     ≡ Banach-Alaoglu ≡ Cech-Stone compactness ≡ Alexander subbase lemma
   |     |   [BPI does NOT imply DMC: HR [14][106]=3, explicit ZF model]
   |     +-- Hahn-Banach          [strict: Pincus 1972; incomparable with DC]
   |     |     +-- Banach-Tarski --> non-measurable set
   |     +-- SPI --> UF(omega)    [both strict below BPI]
   |
   +-- MC --> DMC ≡ BCT for COMPACT HAUSDORFF / LOC CPT REGULAR   <-- NOT ZF, NOT from BPI
   |     |            DMC ==> Urysohn's Lemma (Blass 1979)
   |     |            [DMC => DC : OPEN in ZF, false in ZFA]
   |     +-- MC ==> "metric spaces have sigma-locally-finite bases" ==> STONE
   |
   +-- DC ≡ BCT for COMPLETE METRIC spaces (Blair 1977)
         ≡ BCT for Cech-complete; products of cpt Hausdorff are Baire
         |
      AC_omega ≡ BCT for totally bounded complete / 2nd-ctble complete
         ≡ HB-cpt <=> seq cpt <=> complete + totally bounded (metric)
         ≡ closure = sequential closure (metric)
         |
      CC(R) ≡ R, Q, N Lindelof ≡ every 2nd-ctble space is Lindelof
         ≡ POINTWISE seq. continuity => continuity for f:R->R
         ≡ every subspace of R separable
         |
      HR 31 (countable union thm) --> HR 34 (aleph_1 regular)
         |
      HR 9 (finite <=> Dedekind-finite)
         |
   ZF: BCT for SEPARABLE complete metric spaces
       GLOBAL seq. continuity => continuity for f:R->R  (Sierpinski 1916)
       omega_1 exists (Hartogs 1915)
       Heine-Borel for R^n; [0,1]^N compact; all norms on R^n equivalent
       every metric space is normal and collectionwise normal
       closure = net limits; continuity = net continuity
```

**CE-114. Tychonoff ⟺ AC — and the defect in Kelley's proof.** Kelley (Fund. Math. 37 (1950) 75–76) puts the **cofinite** topology on Y_a = X_a ∪ {Λ} and asserts "X_a is closed in Y_a". **This is false whenever X_a is infinite** — in the cofinite topology X_a is closed iff {Λ} is open iff X_a is finite. **The common folklore is backwards:** Kelley's spaces **are** T1; the defect is not the separation axiom but that X_a fails to be closed. **Schechter, Fund. Math. 189 (2006) 285–288** proves Kelley's specialization gives only **BPI**: "any product of cofinite topologies is compact" ⟺ BPI. **Repair (keeps T1):** take Y_a = (X_a, cofinite) ⊕ {Λ} with Λ **isolated** — then Y_a is compact T1, X_a is clopen, and Kelley's FIP argument runs. Hence **"products of compact T1 spaces are compact" ⟺ AC**. Trap: "products of spaces with **finite topologies** are compact" ⟺ AC, while "products of **finite spaces**" ⟺ BPI.

**CE-115. Tychonoff for Hausdorff ⟺ BPI.** Equivalent over ZF (Herrlich Thm 4.70): products of compact Hausdorff spaces are compact; products of finite discrete spaces; **[0,1]^I compact**; **{0,1}^I compact**; PIT; UFT; Stone representation; Banach–Alaoglu; Alexander subbase lemma; the compactness theorem of first-order logic; de Bruijn–Erdős. (d) Łoś & Ryll-Nardzewski, Fund. Math. 41 (1954/55) 49–56 (both directions, explicitly choice-free); Rubin–Scott 1954.
**Do not upgrade "Hausdorff" to "Tychonoff":** in ZF a compact Hausdorff space is still normal but **may fail to be completely regular** (Läuchli 1962/63). **The locale version is fully choice-free** (Johnstone, Fund. Math. 113 (1981) 21–35); what is AC-equivalent pointfree is *spatiality* of the product.
**Alexander's lemma alone does NOT give Tychonoff:** for a subbasic cover you must pick, for each i, a point of X_i missed by the i-th slice — and *that* step is AC.

**CE-116. Non-empty products.** ∏X_i ≠ ∅ for nonempty X_i ⟺ **AC** by definition; for nonempty **finite** X_i it is **not ZF-provable** (HR 62, fails already at AC(2)); for nonempty **compact Hausdorff** X_i it is **strictly weaker than BPI** (HR 343, Morillon 1988); for nonempty **compact** or compact T1 X_i it is ⟺ **AC** (put the indiscrete resp. cofinite topology on any nonempty set). Łoś–Ryll-Nardzewski's BPI-equivalent is the **conjunction** of nonemptiness and compactness — compactness alone ⟺ BPI, nonemptiness alone strictly weaker.

**CE-117. Baire category is FOUR principles, not one.**
| Variant | Status over ZF |
|---|---|
| Complete metric/pseudometric ⟹ Baire | **⟺ DC** (Blair 1977) |
| Čech-complete ⟹ Baire; products of compact Hausdorff Baire | **⟺ DC** |
| **Separable** complete metric ⟹ Baire | **ZF-provable** (least indices in a countable dense set) |
| Countably compact pseudometric ⟹ Baire | **ZF-provable** |
| Totally bounded complete ≡ 2nd-countable complete ⟹ Baire | **⟺ AC_ω** |
| **Compact Hausdorff ⟹ Baire** | **⟺ DMC** (Fossy–Morillon, JLMS 57 (1998) 1–19) |
| **Locally compact regular ⟹ Baire** | **⟺ DMC** (HR [106 E], Bacsich 1972) |
**And BPI does NOT imply either DMC variant** — HR [14][106] = 3, explicit ZF model. So Wikipedia's "BCT2: every locally compact regular space is Baire" is **not a ZF theorem**. Also: the **Open Mapping Theorem does not imply BCT** (Fellhauer, J. Log. Anal. 9 (2017)). **Citation caution:** Herrlich's 1997 survey still lists BCT ⟺ DC as *open*, apparently unaware of Blair 1977.

**CE-118. Urysohn's Lemma is NOT choice-free.** *The item most likely to be gotten wrong.* UL = **HR Form 78**; Tietze = **Form 375**.
- **Not provable in ZF:** Läuchli (Comment. Math. Helv. 37 (1962/63) 1–18) built a permutation model with a **T4 space on which every continuous real function is constant**; transferred to ZF by Jech–Sochor.
- **Not provable in ZF + CC:** **Tachtsis, Proc. AMS 147 (2019) 4029–4038** — settling the corresponding open problem in Howard–Rubin. (There is an **erratum**, DOI 10.1090/proc/14848, which could not be retrieved — check it.)
- **DC ⟹ UL**; sharper, **DMC ⟹ UL** and DMC is optimal (Blass, Trans. AMS 255 (1979) 31–59). **BPI ⇏ UL** (Brunner 1983).
- **MC ⟺ "every T4 space is effectively T4"**, and effective normality is what the classical proof needs.
- **ZF-provable:** UL for **metric** spaces (f(x) = d(x,A)/(d(x,A)+d(x,B)) is explicit); "every compact Hausdorff space is normal"; UL for compact completely regular spaces; and — importantly — **Urysohn's METRIZATION theorem** (regular + second countable ⟹ metrizable) is **entirely effective**. But **Tietze can fail even for compact Hausdorff spaces in ZF**.

**Stone's theorem ("every metric space is paracompact").** HR Form 383. Both classical proofs well-order the cover openly (M. E. Rudin's one-page proof opens "indexed by ordinals"). **Good–Tree–Watson, Proc. AMS 126 (1998) 1211–1218:** consistent with ZF that a locally compact locally connected metric space is not paracompact; **not provable from ZF + DC**, nor from ZF + DC_κ for any κ; consistently a zero-dimensional metric space is not paracompact; and if every discrete metric space is *effectively* metacompact then **AC** holds. Their open question "does BPI imply Stone?" was **answered no** by **Corson, Proc. AMS 148 (2020) 5381–5386**. Upper bound: **MC ⟹** metric spaces have σ-locally finite bases **⟹** Stone (Howard–Keremedis–Rubin–Stanley 2000); and in ZF, metric paracompact ⟺ metric metacompact. **Answer to the standing question: Stone's theorem is not known to be equivalent to AC, and no source proves it strictly weaker either.** ZF-provable sub-cases: every **separable** metrizable space, and every second countable metric space (Dieudonné), is paracompact.

**"Is ℝ Lindelöf?" (Herrlich–Strecker, CMUC 38 (1997) 553–556).** Equivalent over ZF: ℕ is Lindelöf; ℚ is Lindelöf; ℝ is Lindelöf; **every second countable space is Lindelöf**; every subspace of ℝ is separable; in ℝ, closure is sequential closure; pointwise sequential continuity ⟹ continuity for f : ℝ → ℝ; **CC(ℝ)**. So **the countable discrete space ℕ can fail to be Lindelöf.** "Every second countable space is separable" is strictly stronger, ⟺ **CC**. Bonus: Lindelöf = compact for T1 spaces ⟺ CC(ℝ) **fails**; Lindelöf T2 spaces are productive ⟺ CC(ℝ) fails **and** BPI holds — the Sorgenfrey-plane pathology can be legislated away by having *less* choice.

**ω₁ and ordinals.** **ω₁ exists in ZF** (Hartogs, Math. Ann. 76 (1915) 438–443); so does ℵ₁ ≰ 2^ℵ₀. **"ω₁ is regular" needs choice** (HR 34; Church 1927 postulate C; Specker 1957; CC(ℝ) ⟹ ℵ₁ regular). In the **Feferman–Lévy model** ℝ is a countable union of countable sets, cf(ω₁) = ω, ℝ is still uncountable, CC(ℝ) fails, and **Lebesgue measure is not σ-additive**. Gitik (1980): from large cardinals, a ZF model where **every** uncountable cardinal is singular. **[0,ω₁) is never Lindelöf in ZF.**

**ZF-constructible spaces** (explicit definitions, no choice): Sorgenfrey line and plane, Michael line, line with two origins, topologist's sine curve, Knaster–Kuratowski fan, cofinite/cocountable topologies, Cantor set, ℚ, ℝ, ℝⁿ, Niemytzki plane, all ordinal spaces, the Tychonoff plank and its deletion, the long line/ray, the Tychonoff corkscrew, Hewitt's condensed corkscrew, Thomas's plank and corkscrew, Mysior's example, the Arens/Arens–Fort/fan spaces, Golomb and Kirch spaces, Bing's countable connected space, ℕ^ℕ.
**But constructing the space ≠ proving its properties** — "ℝ_ℓ is Lindelöf" cannot be ZF-provable since even "ℝ is Lindelöf" ⟺ CC(ℝ); "every LOTS is normal" is choice-equivalent (van Douwen, Proc. AMS 95 (1985) 101–105, "Horrors of topology without AC"); the Jones-lemma proof that the Moore plane is not normal must be replaced by a Baire-category argument.
**Essentially requires choice** (ZF models exist containing none): free ultrafilters on ω and everything built from them (**βω∖ω, Novák's space, |βℕ| = 2^𝔠**); Stone–Čech of a general Tychonoff space (BPI — though the *reflection* exists in ZF; what is BPI-equivalent is that it is **compact**); MAD families / Ψ-spaces; Hamel bases; well-orderings of ℝ; Vitali, Bernstein and non-measurable sets; Banach–Tarski; discontinuous functionals on Banach spaces.
**Not required anywhere in this report: CH.** It appears only in optional shortcuts (Novák's recursion) and in genuinely independent questions (Suslin lines, ℵ₁-sized Dowker spaces, box-product paracompactness).

---

## §9. FALSE STATEMENTS STUDENTS BELIEVE

| # | False claim | Refuted by | Correct theorem |
|---|---|---|---|
| F1 | Closed and bounded ⟹ compact in every metric space | ℚ∩[0,√2] closed and bounded **in ℚ**; B_{ℓ²} (‖e_n−e_m‖ = √2); infinite discrete metric; (ℝ, min(d,1)) where everything is bounded | Heine–Borel characterizes ℝⁿ. General metric: compact ⟺ **complete + totally bounded**. **Riesz:** B_X compact ⟺ dim X < ∞ |
| F2 | Continuous bijections are homeomorphisms | [0,2π) → S¹; id : (ℝ,discrete) → (ℝ,usual); id : (ℝ,usual) → (ℝ,cofinite) | True from a **compact** domain to a **Hausdorff** codomain; also for continuous open/closed bijections |
| F3 | Connected ⟹ path-connected | Topologist's sine curve; extended long ray; **Knaster–Kuratowski fan** (all paths constant); pseudo-arc; solenoid; every countable connected Hausdorff space | True for **open subsets of ℝⁿ** and for **locally path-connected** spaces. Components are closed; path components need not be |
| F4 | The continuous image of a closed set is closed | π₁ of {xy = 1}; f(x) = 1/(1+x²) on ℝ | Continuous maps preserve **compactness, connectedness, separability, Lindelöfness** — never closedness or openness. Compact-to-Hausdorff and **proper** maps are closed |
| F5 | Arbitrary intersections of open sets are open | ⋂(−1/n,1/n) = {0}; ⋂(0,1+1/n) = (0,1] | Only **finite** intersections. The countable classes are G_δ/F_σ |
| F6 | A compact subset is always closed | Sierpiński space; **cofinite ℝ** (every subset compact, only finite sets closed); line with two origins (two compacta with non-compact intersection) | Needs **Hausdorff** (or KC). Conversely a closed subset of a compact space is always compact, no Hausdorff needed |
| F7 | The product topology equals the box topology | The diagonal map into ℝ^ω; □ℝ^ω is disconnected while ∏[0,1] is compact | They agree iff all but finitely many factors are indiscrete. The **product** topology is the categorical product, and it is what makes Tychonoff true |
| F8 | Cauchy ⟹ convergent | (1/n) in (0,1); rational approximants to √2 in ℚ; the L¹-Cauchy spikes in (C[0,1],‖·‖₁) | Completeness is a property of the **metric**: ℝ ≅ (0,1) topologically, one complete, one not. Every metric space embeds densely in a completion |
| F9 | Sequential characterizations always work | Closure: ω₁ ∈ cl[0,ω₁) with no sequence; cocountable ℝ (scl = id); Arens–Fort. Compactness: I^I, βℕ. Continuity: id out of cocountable ℝ | Sequences suffice exactly in **sequential** spaces (⊇ first countable ⊇ metric). Otherwise use **nets or filters**. Even for ℝ, "sequences detect closure" ⟺ **CC(ℝ)** |
| F10 | Compactness is preserved by continuous **preimages** | The constant map ℝ → {pt} | It is preserved by continuous **images**; preimages of compacta are compact exactly for **proper** maps |
| F11 | A subspace of a separable space is separable | Sorgenfrey plane antidiagonal; Niemytzki plane x-axis; Ψ-space | Inherited by **open** subspaces always, and by all subspaces in **metric** spaces. **Second countability is hereditary; separability is not** |
| F12 | cl(B(x,r)) = {y : d ≤ r} | Discrete metric; {0} ∪ [1,2] ⊆ ℝ | cl(B) ⊆ B̄ always; equality holds in **normed** spaces — a fact about the linear structure |
| F13 | ℝ²∖{pt} is simply connected | ℝ²∖{0} ≃ S¹, π₁ = ℤ | ℝⁿ∖{pt} ≃ S^{n−1}: simply connected for n ≥ 3 only. Related: ℝⁿ ≅ ℝ^m ⟹ n = m needs **invariance of domain**, not cardinality — ℝ and ℝ² *are* in bijection |
| F14 | Every metric space is separable | Uncountable discrete; ℓ^∞ ({χ_A} is 1-separated of size 𝔠); L^∞ | For **metric** spaces separable ⟺ second countable ⟺ ccc ⟺ Lindelöf. ℓ^p (p < ∞) and C[0,1] are separable |
| F15 | A continuous bijection between compact spaces is a homeomorphism | id : ({a,b},discrete) → ({a,b},indiscrete) | Needs the **codomain Hausdorff** |
| F16 | Every quotient of a nice space is nice | **ℝ/ℚ is indiscrete** | Quotients preserve connectedness, compactness, separability, Lindelöfness, second countability — and destroy **every** separation axiom |
| F17 | Normality/paracompactness/Lindelöfness are productive | Sorgenfrey plane; Michael line × irrationals; Dowker space × [0,1] | Compactness (Tychonoff), connectedness, Hausdorff/regular/Tychonoff and countable second countability are productive; the rest are not |
| F18 | A subspace of a normal space is normal | Deleted Tychonoff plank; [0,ω₁)×[0,ω₁] inside [0,ω₁]² | Inherited by **closed** subspaces. Hereditary normality is strictly stronger (T5) |
| F19 | Compact ⟹ sequentially compact (or conversely) | I^I, βℕ; [0,ω₁), the closed long ray | Equivalent in **metric** spaces (using AC_ω). Countably compact + first countable ⟹ sequentially compact |
| F20 | Limit point compact ⟹ countably compact | The odd–even space (S&S 6) | Equivalent in **T1** spaces |
| F21 | Urysohn's lemma is choice-free | Läuchli's model; Tachtsis 2019 | **UL needs DMC**; only the *metrization* theorem is ZF-provable |
| F22 | Second countable ⟹ Lindelöf is a ZF theorem | Herrlich–Strecker: **ℕ can fail to be Lindelöf** | ⟺ CC(ℝ) |

---

## §10. CORRECTIONS TO THE BRIEFING PREMISES

Nine premises in the task brief were wrong or imprecise, and are corrected above:
1. **Long line**: the long line/ray **is** path-connected; only the **extended** version is connected-not-path-connected. And sequential compactness belongs to the **closed** long ray — the *open* long ray is not even countably compact.
2. **Sequential fan S_ω**: it **is** Fréchet–Urysohn. The "sequential not FU" example is the **Arens space S₂**; the fan separates **FU ⇏ first countable** (χ = 𝔡).
3. **Cube root**: x^{1/3} **is** uniformly continuous on ℝ; the example runs the other way.
4. **|x−y| vs |1/x−1/y| on (0,∞)**: neither metric is complete, so this gives different uniformities but **not** "one complete, one not". Use ℕ with |m−n| vs |1/m−1/n|.
5. **"A separable space with uncountably many disjoint open sets"**: impossible — separable ⟹ ccc. The intended object is an uncountable closed **discrete** subspace.
6. **Hawaiian earring**: compact and locally path-connected; it fails **semi-local simple connectivity**, not local connectedness. It is also not a σ-compact-not-locally-compact example.
7. **Double arrow**: totally disconnected, not a connectedness example.
8. **Double-pointed countable complement (S&S 21)**: not T1 at all — use S&S 20.
9. **Munkres 22.6** is p × p, not p × id; and Kelley's flaw is **not** "his spaces weren't T1" (they were) but that X_a fails to be closed in the cofinite topology.

**Known errata in Steen–Seebach itself** (all verified via π-Base): **#80 Arens square** is claimed T2½ but is not; **#90 Tychonoff corkscrew** is charted countably paracompact but is not; **#101 Alexandroff square** was marked completely normal in the 1970 first edition; **#112 Novák space** — the construction is incorrect, assuming 2^𝔠 is regular, which is not a ZFC theorem; **#76 deleted diameter** — the deleted discs form a base, not a subbase.

**Two claims flagged as unverified this session:** (i) "a Suslin line has a non-ccc square" (Kurepa; Kunen Ch. II §4) — classical but not confirmed on any fetched page; (ii) the tangent-disc disjointness criterion and Niemytzki dichotomy in CE-65 are a subagent's own derivation (numerically validated), not a citation — treat as original content in any judge/audit path.

---

## §11. NOTES

**Coverage:** 118 numbered counterexamples across all eight requested groupings plus 22 false statements. Every Steen–Seebach number was verified against π-Base's `counterexamples_id` fields rather than recalled.

**Repo state:** this was research only — I created no files in the project repo. However, an untracked file **`/root/Projects/prestige-math-library/tools/depcheck.mjs`** (13 KB, a repo-wide dependency and circularity gate for items/pages) appeared during this session; the repo was clean at session start. It is unrelated to this research task and looks like work from a concurrent session, so **I left it untouched** rather than risk discarding someone's work. Worth confirming its provenance before the next commit.

**Note for authoring:** the repo currently has 138 items across `real-analysis`, `foundations`, `abstract-algebra`, `combinatorics`, `linear-algebra`, `number-theory` — there is **no topology content and no `topology` category yet**, so all of the above is greenfield. Per CLAUDE.md, anything authored from this must go draft → precheck → cross-family judge (GPT-5.4 primary, never a Claude model for session items) → Fable audit → published.
