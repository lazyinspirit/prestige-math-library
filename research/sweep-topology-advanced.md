# ADVANCED POINT-SET TOPOLOGY — RESEARCHED INVENTORY

Scope as assigned: separation axioms, Urysohn/Tietze, countability, metrization, nets & filters, uniform spaces, function spaces. Core topology (spaces/continuity/products/quotients/connectedness/compactness), counterexample catalogues, and metric-space/set-theory basics are other agents' lanes and are referenced here only where a result is genuinely in my lane.

Convention note used throughout: I write the **bare adjective** (regular, normal, completely regular) for the pure separation condition with **no** T₁ assumed, and the **numbered T-axiom** for "condition + T₁". This is the Willard/Kelley/Steen–Seebach convention. Where Munkres/Engelking/Bourbaki differ, I flag it inline. This choice matters for at least four theorems below, which are simply false under the other reading.

---

## 1. SEPARATION AXIOMS

### 1.1 DEFINITIONS

**Lower axioms**
- **T₀ (Kolmogorov)** — for distinct x, y at least one has an open neighbourhood excluding the other (x, y are *topologically distinguishable*).
- **R₀ (symmetric)** — x ∈ cl{y} ⟹ y ∈ cl{x}. Equivalently, topologically indistinguishable points have identical closures.
- **T₁ (Fréchet)** — for distinct x, y *each* has a neighbourhood excluding the other. Equivalently: every singleton is closed; equivalently ⋂{U : U ∈ 𝒩(x)} = {x}; equivalently every finite set is closed. **T₁ = T₀ + R₀.**
- **R₁ (preregular)** — topologically distinguishable points have disjoint neighbourhoods. **T₂ = T₀ + R₁.**
- **T₂ (Hausdorff)** — distinct points have disjoint open neighbourhoods.
- **T₂½ (Urysohn)** — distinct points have disjoint *closed* neighbourhoods.
- **Completely Hausdorff / functionally Hausdorff** — for distinct x, y there is continuous f : X → [0,1] with f(x)=0, f(y)=1.
  - ⚠️ **DISAGREEMENT**: Steen & Seebach (*Counterexamples in Topology*) call the *function* version "Urysohn space"; Willard calls the function version "completely Hausdorff" and the closed-neighbourhood version "Urysohn". Wikipedia explicitly warns about this. Always check which is meant.

**Higher axioms**
- **Regular (T₃ axiom)** — a point and a disjoint closed set have disjoint open neighbourhoods. Equivalent local form: for every x and open U ∋ x there is open V with x ∈ V ⊆ cl V ⊆ U (i.e. **closed neighbourhoods form a local base**).
- **T₃** = regular + T₀ (⟺ regular + T₁). "Regular Hausdorff."
- **Completely regular (T_{3½} axiom, Tychonoff axiom)** — for closed A and x ∉ A there is continuous f : X → [0,1] with f(x)=1 and f|_A ≡ 0.
- **Tychonoff (T_{3½})** = completely regular + T₀ (⟺ + T₁ ⟺ + Hausdorff).
- **Normal (T₄ axiom)** — disjoint closed sets have disjoint open neighbourhoods. Equivalent "shrinking" form: for closed A ⊆ open U there is open V with A ⊆ V ⊆ cl V ⊆ U.
- **T₄** = normal + T₁.
- **Separated sets** — A, B with cl(A) ∩ B = ∅ = A ∩ cl(B). (Weaker than "disjoint closed"; this is the correct notion for T₅.)
- **Completely normal (T₅ axiom)** — any two *separated* sets have disjoint neighbourhoods. **Theorem-definition equivalence: completely normal ⟺ hereditarily normal.**
- **T₅** = completely normal + T₁.
- **Perfectly normal (T₆ axiom)** — normal **and every closed set is a G_δ**. Equivalent: any two disjoint closed sets are *precisely* separated by a continuous f (f⁻¹(0)=A, f⁻¹(1)=B).
- **T₆** = perfectly normal + T₁. T₆ ⟹ T₅.
- **Collectionwise normal** — every *discrete* family of closed sets can be separated by a pairwise-disjoint family of open sets. (Discrete family: every point has a nbhd meeting at most one member.)
- **Collectionwise Hausdorff** — every closed discrete set of points can be so separated.
- **Monotonically normal** — normality witnessed by an operator monotone in both arguments; implies hereditarily collectionwise normal. Every LOTS (linearly ordered topological space) is monotonically normal.
- **Sober** — every irreducible closed set has a unique generic point. Incomparable with T₁; Hausdorff ⟹ sober. (Relevant because the Zariski topology is T₀ + sober but not T₁.)
- **KC space** — compact sets are closed. **US space** — sequences have at most one limit. Hausdorff ⟹ KC ⟹ US ⟹ T₁, all strict.

**⚠️ THE MAJOR CONVENTION CLASH.** Whether T₁ is built into "regular"/"normal"/"completely regular":
| Source | "regular" means | "normal" means |
|---|---|---|
| Willard, Kelley, Steen–Seebach, Wikipedia (mostly) | T₃ axiom only, no T₁ | T₄ axiom only, no T₁ |
| Munkres | T₁ **+** T₃ axiom | T₁ **+** T₄ axiom |
| Engelking | T₁ + T₃ axiom | T₁ + T₄ axiom |
| Bourbaki | Hausdorff + T₃ axiom | Hausdorff + T₄ axiom |

Wikipedia's *History of the separation axioms* records the split: authors doing metrization theory assumed T₁ silently; general topologists after Kelley (1955) kept the axioms T₁-free so the hierarchy is monotone. **Consequence you cannot skip:** "normal ⟹ completely regular" is FALSE without T₁ (you need points closed to apply Urysohn's lemma to {x} and A), and "regular ⟹ Hausdorff" is FALSE without T₀.

### 1.2 THEOREMS

**The chain (all implications strict).**
- T₆ ⟹ T₅ ⟹ T₄ ⟹ T_{3½} ⟹ T₃ ⟹ T₂½ ⟹ T₂ ⟹ T₁ ⟹ T₀.
- Unnumbered chain: perfectly normal ⟹ completely normal ⟹ normal; completely regular ⟹ regular; Tychonoff ⟹ completely Hausdorff ⟹ Urysohn ⟹ Hausdorff.
- **T₄ ⟹ T_{3½}** is exactly Urysohn's lemma applied to {x} (closed by T₁) and A.
- Perfectly normal ⟹ completely normal (a G_δ-normal space is hereditarily normal).

**Named strictness witnesses** (details are the counterexamples agent's lane; names for cross-reference):
- T₀ ∤ T₁: Sierpiński space. T₁ ∤ T₂: cofinite topology, Zariski topology, line with two origins.
- T₂ ∤ T₂½: Arens square. T₂ ∤ T₃: ℝ with the K-topology (K = {1/n}); Smirnov's deleted sequence topology.
- T₃ ∤ T_{3½}: **Tychonoff corkscrew**; Hewitt's condensed corkscrew (every continuous real function constant); **Mysior's example (1981)** is the simplest modern one; Novák's.
- T_{3½} ∤ T₄: Sorgenfrey plane S×S, Moore/Niemytzki plane, deleted Tychonoff plank, ℝ^J for uncountable J, Mrówka Ψ-space.
- T₄ ∤ T₅: the Tychonoff plank [0,ω₁]×[0,ω] (compact Hausdorff hence normal, but its deleted subspace is not normal).
- T₅ ∤ T₆: [0,ω₁] — order topology so hereditarily normal, but {ω₁} is not G_δ.

**Sufficient conditions.**
- Compact Hausdorff ⟹ normal (hence T₄, hence Tychonoff).
- **Locally compact Hausdorff ⟹ completely regular (Tychonoff), but NOT necessarily normal** — deleted Tychonoff plank. Easy to miss.
- Regular + Lindelöf ⟹ paracompact ⟹ normal (Dieudonné) and even collectionwise normal (Bing).
- Regular + second countable ⟹ normal (this is the step that makes Urysohn metrization work).
- Metrizable ⟹ perfectly normal (T₆) + paracompact (A.H. Stone) + collectionwise normal.
- Every LOTS / order topology ⟹ hereditarily normal (T₅) and monotonically normal. Every well-ordered space is normal.
- Zero-dimensional + T₀ ⟹ Tychonoff.
- Every uniform space's topology is completely regular (§6).

**Hausdorff via the diagonal, and consequences.**
- **X is Hausdorff ⟺ Δ = {(x,x)} is closed in X × X.** (The single most-used reformulation.)
- Corollaries, all requiring Y Hausdorff, f, g : X → Y continuous:
  - the equalizer/coincidence set {x : f(x) = g(x)} is closed;
  - if f = g on a dense subset then f = g;
  - the graph Γ_f ⊆ X × Y is closed;
  - a closed-graph converse: if Y is **compact** Hausdorff and Γ_f is closed then f is continuous;
  - compact subsets of a Hausdorff space are closed;
  - a continuous bijection from compact to Hausdorff is a homeomorphism.
- **Uniqueness of limits.** X Hausdorff ⟺ every **net** has at most one limit ⟺ every **filter** has at most one limit. *But* "every sequence has at most one limit" (US) is strictly weaker: the cocountable topology on an uncountable set has unique sequential limits and is not Hausdorff. In first-countable (indeed sequential) spaces the sequence version does characterize Hausdorff.
- Related: X compact ⟺ the projection X × Y → Y is closed for every Y (Kuratowski–Mrówka); combined with Δ closed this gives "compact Hausdorff" purely diagrammatically.

**Hereditary / productive behaviour.**

| Property | Hereditary | Closed-hereditary | Arbitrary products | Notes |
|---|---|---|---|---|
| T₀, T₁, T₂, T₂½, compl. Hausdorff | ✅ | ✅ | ✅ | all "initial" properties |
| Regular, completely regular, Tychonoff | ✅ | ✅ | ✅ | preserved by all initial topologies |
| **Normal / T₄** | ❌ | ✅ | ❌ (not even finite) | S × S; Δ-plank |
| Completely normal / T₅ | ✅ (by def.) | ✅ | ❌ | |
| Perfectly normal / T₆ | ✅ | ✅ | ❌ | S is T₆, S × S not even normal |
| Collectionwise normal | ❌ | ✅ | ❌ | |
| Metrizable | ✅ | ✅ | ❌ (countably ✅) | |
| Paracompact | ❌ | ✅ | ❌ | paracompact × compact ✅ |

- **Key slogan:** everything up to and including Tychonoff is *hereditary and arbitrarily productive*; everything from normal up is *neither*. This is precisely why T_{3½} is the "good" category (it is the reflective/initial-closed one) and why βX exists exactly on Tychonoff spaces.
- **Dowker's theorem** — for a T₄ space X, TFAE: X × [0,1] is normal; X is countably paracompact; X is countably metacompact. So even ×[0,1] can destroy normality. **Dowker spaces** (normal, not countably paracompact) exist in ZFC: M.E. Rudin (1971, cardinality ℵ_ω^{ℵ₀}), Balogh (1996, cardinality 𝔠), Kojman–Shelah (1998, ℵ_{ω+1}).

**Quotients and images.**
- A quotient X/∼ is T₁ ⟺ every equivalence class is closed.
- Hausdorffness fails for quotients in general. Criteria: if q is **open**, X/∼ is Hausdorff ⟺ R = {(x,y) : x ∼ y} is closed in X × X. If X is compact Hausdorff, X/∼ is Hausdorff ⟺ q is closed ⟺ R is closed.
- **Closed continuous surjections preserve** normality, T₄, perfect normality/T₆, Lindelöf, paracompactness (Michael).
- **Perfect maps** (closed + compact fibres) preserve compactness, paracompactness, metrizability, local compactness, Čech-completeness — and *reflect* them (perfect preimages).
- **Hanai–Morita–Stone theorem** — if f : X → Y is a closed continuous surjection with X metrizable, then Y is metrizable ⟺ Y is first countable ⟺ ∂f⁻¹(y) is compact for every y. (Otherwise Y is only a *Lašnev space*.) Metrizability is **not** preserved by closed maps.
- Open continuous surjections preserve first/second countability, separability, but no separation axiom above T₀ in general.
- **Kolmogorov quotient / T₀-reflection** X/∼ where x ∼ y iff indistinguishable; and the Hausdorff reflection (a left adjoint) — these make "T_i = T₀ + R_{i−1}" precise.

### 1.3 SOURCE NOTES
Willard *General Topology* Ch. 4 (separation) and §13–15 is the definitive T₁-free treatment; Ch. 5 "Separation and Countability". Munkres Ch. 4 (§31–35) builds T₁ into regular/normal — good pedagogy, but his statements are not directly quotable into a Willard-convention document. Engelking §1.5 has the fullest hereditary/productive tables and all the counterexample cross-references. Steen & Seebach for the corkscrews and the plank family (and note their Urysohn/completely-Hausdorff swap). Wikipedia's *Separation axiom*, *Regular space*, *Normal space*, *Tychonoff space*, *Urysohn and completely Hausdorff spaces*, *History of the separation axioms*, *Hausdorff space*, *Collectionwise normal space*, *Dowker space*, *Quotient space (topology)* were all fetched and agree with the above; nLab *separation axioms* adds the lifting-property/finite-space reformulation and the sober/T₁ incomparability.

---

## 2. URYSOHN AND TIETZE

### 2.1 DEFINITIONS
- **Urysohn function for (A,B)** — continuous f : X → [0,1] with f|_A ≡ 0, f|_B ≡ 1. "A and B are *separated by a function*."
- **Precisely separated** — additionally f⁻¹(0) = A and f⁻¹(1) = B.
- **Zero set** Z(f) = f⁻¹(0) for f ∈ C(X,ℝ); **cozero set** = complement. X is completely regular ⟺ cozero sets form a base.
- **Support** of f = cl{x : f(x) ≠ 0}.
- **Partition of unity** — a family {φ_i} of continuous X → [0,1] with Σφ_i ≡ 1 and each point having a neighbourhood on which all but finitely many vanish (*locally finite* partition of unity). **Subordinate to** an open cover {U_i}: supp φ_i ⊆ U_i.
- **Locally finite / point-finite** family; **refinement**; **star refinement** (see §6).
- **Stone–Čech compactification βX** — the (unique) compactification with the extension property below; equivalently cl(e(X)) in the cube.
- **Evaluation / embedding map** — for ℱ ⊆ C(X,[0,1]), e : X → [0,1]^ℱ, e(x) = (f(x))_{f∈ℱ}.

### 2.2 THEOREMS
- **Urysohn's Lemma.** X is normal ⟺ for every pair of disjoint closed A, B there is a Urysohn function. Proof: recursively build open U_r indexed by dyadic rationals with cl U_r ⊆ U_s for r < s, then f(x) = inf{r : x ∈ U_r}. *Choice:* the recursion makes countably many arbitrary choices of open sets, so it is provable in **ZF + DC**; it is standardly presented as choice-free and most texts do not flag it.
- **Precise separation.** Every pair of disjoint closed sets is *precisely* separated ⟺ X is **perfectly normal**. So Urysohn's lemma cannot generally be upgraded; the obstruction is exactly "closed sets are G_δ."
- **T₄ ⟹ Tychonoff.** Immediate from Urysohn's lemma with A = {x}.
- **Shrinking Lemma.** X normal, {U_i}_{i∈I} a **point-finite** open cover ⟹ there is an open cover {V_i} with cl V_i ⊆ U_i. (*Needs well-ordering / AC for uncountable I.*)
- **Tietze Extension Theorem.** X normal, A ⊆ X closed, f : A → ℝ continuous ⟹ f extends to F : X → ℝ continuous. Bounded version preserves sup: sup|F| = sup|f|; interval versions: f : A → [a,b] extends into [a,b], and f : A → (a,b) extends into (a,b). Target may be ℝⁿ, any cube [0,1]^J, or any absolute retract (coordinatewise). *Converse:* if every continuous real function on every closed subset extends, X is normal. Hence **Tietze ⟺ Urysohn ⟺ normality**. *Choice:* ZF + DC (uniform-convergence series of Urysohn functions).
- **What Tietze does not give.** Extension into S^n is not automatic (that is obstruction/dimension theory — Hopf extension theorem); Lipschitz/Hölder constants *can* be preserved (McShane–Whitney, Kirszbraun for Hilbert targets).
- **Dugundji Extension Theorem.** X metric (or stratifiable), A ⊆ X closed, L a locally convex TVS, f : A → L continuous ⟹ there is a continuous extension with values in conv(f(A)), and the extension operator can be chosen **linear** (a simultaneous extender). This is strictly stronger than Tietze in the metric case.
- **Katětov–Tong insertion theorem.** X is normal ⟺ whenever g ≤ h with g upper semicontinuous and h lower semicontinuous, there is continuous f with g ≤ f ≤ h. **Michael's insertion theorem**: strict insertion (g < f < h) characterizes perfect normality. **Dowker's insertion**: the normal + countably paracompact case.
- **Partitions of unity.**
  - **Characterization:** a Hausdorff space is **paracompact ⟺ every open cover admits a subordinate (locally finite) partition of unity**.
  - Normal + point-finite open cover ⟹ subordinate partition of unity exists (via the shrinking lemma). This is the version you need when you don't have paracompactness.
  - Paracompact Hausdorff ⟹ normal (Dieudonné) and collectionwise normal (Bing); every metric space is paracompact (**A.H. Stone's theorem — needs AC; not a ZF theorem**).
  - Smooth manifolds: smooth partitions of unity subordinate to any open cover exist (second countable + locally compact + Hausdorff ⟹ paracompact). Analytic partitions of unity do **not** exist.
  - Uses: Riemannian metrics, integration on manifolds, gluing local constructions, proving embedding theorems.
- **Tychonoff Embedding Theorem (embedding lemma).** If ℱ ⊆ C(X,[0,1]) *separates points from closed sets*, then e : X → [0,1]^ℱ is an embedding. Hence: **X is Tychonoff ⟺ X embeds in a cube [0,1]^κ ⟺ X embeds in some compact Hausdorff space.** (κ = |C(X,[0,1])| suffices.)
- **Stone–Čech compactification.**
  - Construction: βX = cl_{[0,1]^{C(X,[0,1])}} e(X).
  - **Universal property:** for every compact Hausdorff K and continuous f : X → K there is a unique continuous βf : βX → K with βf ∘ i = f. Equivalently β is left adjoint to CompHaus ↪ Tych. This determines βX up to homeomorphism over X.
  - Equivalent constructions: ultrafilter construction (for discrete X, βX = space of ultrafilters with the Stone topology); **Gelfand spectrum of C_b(X)**; Wallman compactification via closed ultrafilters (= βX when X is normal T₁).
  - **C_b(X) ≅ C(βX)** isometrically (and as C*-algebras). **Gelfand–Kolmogorov:** the maximal ideals of C(X) are in bijection with βX.
  - βℕ: |βℕ| = 2^𝔠; ℕ* = βℕ∖ℕ has no nontrivial convergent sequences (so βℕ is compact but **not sequentially compact**); central in Ramsey theory (Hindman's theorem via idempotent ultrafilters) and topological dynamics.
  - *Choice:* existence needs compactness of [0,1]^κ, i.e. Tychonoff **for compact Hausdorff factors**, which is exactly the **ultrafilter lemma / BPI** — strictly weaker than full AC. Free ultrafilters on ℕ are not ZF-provable (Solovay model).
  - Companion: the **Hewitt realcompactification υX** (embed in ℝ^{C(X)} instead of a cube); **Samuel compactification** (§6) = completion of the precompact reflection of a uniformity, and equals βX for the fine uniformity.

### 2.3 SOURCE NOTES
Munkres §33 (Urysohn's lemma), §34 (Urysohn metrization), §35 (Tietze), §38 (Stone–Čech) is the cleanest exposition and is the standard curricular source. Willard §15 (Urysohn/Tietze), §19 (βX). Engelking §1.5.10–1.5.11 and §3.6 for βX and the full universal-property treatment. Gillman & Jerison *Rings of Continuous Functions* is the definitive source for βX, υX, and the C(X)-theoretic reformulations. Dugundji *Topology* Ch. VII §5 for the Dugundji extension theorem. Wikipedia *Urysohn's lemma*, *Tietze extension theorem*, *Stone–Čech compactification*, *Partition of unity*, *Paracompact space* were fetched; note that the Wikipedia Urysohn page asserts flatly "does not require the axiom of choice" — that is defensible but the dyadic recursion is a DC-style recursion, so I state it as ZF+DC.

---

## 3. COUNTABILITY AXIOMS

### 3.1 DEFINITIONS
- **First countable** — every point has a countable neighbourhood base. (Character χ(X) ≤ ℵ₀.)
- **Second countable** — the topology has a countable base. (Weight w(X) ≤ ℵ₀.) Old name: *completely separable*.
- **Separable** — there is a countable dense subset. (Density d(X) ≤ ℵ₀.)
- **Lindelöf** — every open cover has a countable subcover. (Lindelöf number L(X) ≤ ℵ₀.) **Hereditarily Lindelöf** = every subspace is Lindelöf; some authors say "strongly Lindelöf", inconsistently.
- **ccc (countable chain condition, Suslin condition)** — every family of pairwise disjoint nonempty open sets is countable. (Cellularity c(X) ≤ ℵ₀.) ⚠️ The name is historical and misleading: it is an *antichain* condition, not a chain condition.
- **σ-locally finite base** — a base that is a countable union of locally finite families.
- **σ-discrete base** — countable union of discrete families.
- **Point-countable base** — each point lies in only countably many base elements.
- **Network** — a family 𝒩 (not necessarily open) such that every open U and x ∈ U admit N ∈ 𝒩 with x ∈ N ⊆ U. Network weight nw(X).
- **π-base** — a family of nonempty open sets such that every nonempty open set contains one.

### 3.2 THEOREMS
**Implications that hold.**
- Second countable ⟹ first countable, separable, Lindelöf, hereditarily Lindelöf, hereditarily separable, ccc.
- Separable ⟹ ccc.
- Compact ⟹ Lindelöf; σ-compact ⟹ Lindelöf.
- Second countable + regular ⟹ normal ⟹ metrizable (Urysohn, §4).
- Lindelöf + countably compact ⟹ compact.
- Regular + Lindelöf ⟹ paracompact ⟹ normal.
- **In metrizable spaces: second countable ⟺ separable ⟺ Lindelöf ⟺ hereditarily Lindelöf ⟺ hereditarily separable ⟺ ccc.** All six collapse. (The ccc ⟹ separable step is metric-specific.)
- Lindelöf + metrizable ⟹ second countable.
- Compact Hausdorff: metrizable ⟺ second countable.
- **Arhangelskii's theorem** — for Hausdorff X, |X| ≤ 2^{χ(X)·L(X)}. Corollary: a compact first-countable Hausdorff space has cardinality ≤ 𝔠. Also |X| ≤ 2^{d(X)·χ(X)}.
- Cardinal-function ordering: c(X) ≤ d(X) ≤ nw(X) ≤ w(X); L(X) ≤ nw(X).

**Implications that FAIL (and by what).**
- Separable ⇏ second countable — **Sorgenfrey line S** (also ℝ with the cocountable topology, βℕ, the Stone–Čech remainder).
- Lindelöf ⇏ second countable — **S** again.
- First countable ⇏ second countable — any uncountable discrete space; ω₁.
- Separable ⇏ Lindelöf — Mrówka Ψ-space; the Moore/Niemytzki plane.
- Lindelöf ⇏ separable — the one-point Lindelöfication of an uncountable discrete space; ℝ with the cocountable topology.
- Lindelöf ⇏ first countable — same examples.
- Lindelöf ⇏ σ-compact — the irrationals ℙ ≅ ℕ^ℕ.
- ccc ⇏ separable — the Cantor cube 2^κ for κ > 𝔠 is ccc, not separable. Also a **Suslin line**, if one exists.
- ccc ⇏ Lindelöf and Lindelöf ⇏ ccc.
- Separable + first countable + Lindelöf + perfectly normal + paracompact ⇏ second countable — **the Sorgenfrey line is all of these and is not metrizable.** This is *the* example to have in hand.

**Hereditary / productive.**
- **First countable, second countable:** hereditary; **countably** productive. Not arbitrarily productive: 2^𝔠 is separable ccc but not second countable; ℝ^{ω₁} is not first countable.
- **Separable:** *not* hereditary (S × S is separable and contains an uncountable discrete subspace, the anti-diagonal). **Productive up to 𝔠 factors** — **Hewitt–Marczewski–Pondiczery theorem**: a product of at most 2^κ spaces each of density ≤ κ has density ≤ κ. So a product of ≤ 𝔠 separable spaces is separable; {0,1}^𝔠 is separable.
- **Lindelöf:** *closed-hereditary only*; **not even finitely productive** — S is Lindelöf, S × S is not. Lindelöf × compact is Lindelöf. Continuous images of Lindelöf are Lindelöf.
- **ccc:** not hereditary. **Arbitrarily productive under MA + ¬CH**; consistently non-productive — the existence of a **Suslin line** (i.e. ¬SH) yields two ccc spaces whose product is not ccc. **The Suslin problem** ("is every ccc dense linear order without endpoints, order-complete, isomorphic to ℝ?") is independent of ZFC (Suslin Hypothesis holds under MA+¬CH, fails under V=L).
- **Hereditarily Lindelöf ⟺ every open subspace is Lindelöf ⟺ every uncountable subset has a condensation point** (for regular spaces); hereditarily Lindelöf ⟹ every discrete subspace is countable.
- L-spaces (hereditarily Lindelöf, not separable) and S-spaces (hereditarily separable, not Lindelöf): S-spaces are consistently non-existent (Todorcevic, under PFA); **L-spaces exist in ZFC** (Moore 2005). This is a modern landmark worth a mention.

### 3.3 SOURCE NOTES
Willard Ch. 5 §16 is the standard for the countability axioms with the exact hereditary/productive facts. Engelking §1.1, §3.8, §2.3 and the cardinal-functions appendix has all the cardinal-invariant inequalities. Munkres §30 covers first/second countable, separable, Lindelöf and the Sorgenfrey counterexamples; the Sorgenfrey plane appears in §31 (Example 3). Juhász *Cardinal Functions in Topology* for Arhangelskii's theorem and the S/L-space problems. Wikipedia *Second-countable space*, *Lindelöf space*, *Countable chain condition* were fetched and are reliable here; the ccc page correctly connects to Suslin's problem and MA.

---

## 4. METRIZATION AND COMPLETENESS

### 4.1 DEFINITIONS
- **Metrizable** — the topology is induced by some metric. **Locally metrizable** — every point has a metrizable open neighbourhood.
- **Completely metrizable / topologically complete** — induced by some *complete* metric. **Polish** — separable + completely metrizable.
- **Čech-complete** — Tychonoff and G_δ in some (equivalently every) Hausdorff compactification.
- **Development** — a sequence {𝒰_n} of open covers such that for every x, {st(x, 𝒰_n)}_n is a neighbourhood base at x. **Developable space** — has a development. **Moore space** — regular Hausdorff + developable.
- **Locally finite / discrete family**; **σ-locally finite** / **σ-discrete** = countable union of such.
- **Nowhere dense** — closure has empty interior. **Meagre / first category** — countable union of nowhere dense sets. **Comeagre / residual** — complement of meagre.
- **Baire space** — countable intersections of dense open sets are dense ⟺ every nonempty open set is nonmeagre ⟺ every meagre set has empty interior. ⚠️ Name clash: "Baire space" also denotes ℕ^ℕ.

### 4.2 THEOREMS

**Metrization.**
- **Urysohn Metrization Theorem.** Every second-countable **regular Hausdorff (T₃)** space is metrizable. Equivalently: *X is separable metrizable ⟺ X is T₃ and second countable.* Proof: countably many Urysohn functions embed X into the **Hilbert cube [0,1]^ℕ**. *History:* Urysohn (1925) assumed **normal**; Tychonoff (1926) weakened to regular — worth stating both since sources differ on which is "Urysohn's theorem".
- **Urysohn embedding corollary.** X is separable metrizable ⟺ X embeds in [0,1]^ℕ.
- **Bing–Nagata–Smirnov Metrization Theorem** (necessary **and** sufficient):
  - **Nagata–Smirnov (1950/1951):** X is metrizable ⟺ X is regular T₀/T₁ and has a **σ-locally finite base**.
  - **Bing (1951):** X is metrizable ⟺ X is regular T₀ and has a **σ-discrete base**.
  - The necessity direction is essentially **A.H. Stone's theorem** (metric ⟹ paracompact), hence uses AC.
- **Smirnov Metrization Theorem.** X is metrizable ⟺ X is **paracompact Hausdorff and locally metrizable**.
- **Alexandroff–Urysohn Metrization Lemma.** A T₀ space with a sequence of open covers 𝒰₀ ⊇* 𝒰₁ ⊇* … each **star-refining** the previous and forming a base at each point is metrizable. (This is literally the same theorem as the metrization theorem for uniformities, §6 — the "one theorem, two costumes" point.)
- **Moore metrization / Bing's theorem.** A **collectionwise normal Moore space is metrizable**. Metrizable ⟹ Moore.
- **Normal Moore Space Conjecture** ("every normal Moore space is metrizable"): **independent of ZFC**. Fails under V=L (Fleissner) and under MA+¬CH (Silver/Tall); consistent from large cardinals — PMEA (Product Measure Extension Axiom, from a strongly compact cardinal) implies it (Nyikos). Bing's Example G is the canonical normal non-metrizable space.
- **Frink's metrization theorem** (a neighbourhood-base criterion) — an alternative sufficient condition worth knowing exists.
- **Compact Hausdorff:** metrizable ⟺ second countable ⟺ C(X) is separable.
- **Manifolds.** For a locally Euclidean Hausdorff space M, TFAE: M is metrizable ⟺ M is paracompact ⟺ every component is second countable ⟺ M admits a Riemannian metric (smooth case) ⟺ M embeds in some ℝ^N (for compact/second-countable M). Failures: the **long line** and the **Prüfer manifold** (Hausdorff, locally Euclidean, not paracompact hence not metrizable); the **line with two origins** (not Hausdorff).
- **Birkhoff–Kakutani.** A Hausdorff topological group is metrizable ⟺ it is first countable, and then admits a **left-invariant** compatible metric.
- **Metrization of uniformities:** a Hausdorff uniform space is metrizable ⟺ its uniformity has a **countable base** (equivalently is generated by a single metric). See §6.

**Complete metrizability and topological completeness.**
- **Alexandroff's theorem (also credited Mazurkiewicz/Hausdorff, 1924).** If X is completely metrizable and A ⊆ X, then **A is completely metrizable ⟺ A is G_δ in X**. Corollary: a subspace of a Polish space is Polish ⟺ it is G_δ.
- **Čech's characterization.** A metrizable X is completely metrizable ⟺ X is **G_δ in βX** ⟺ X is Čech-complete. More generally, a Tychonoff X is Čech-complete ⟺ G_δ in some (⟺ every) Hausdorff compactification.
- Locally compact Hausdorff ⟹ Čech-complete. Čech-complete ⟹ Baire.
- **Completely metrizable = metrizable + Čech-complete.**
- **Lavrentiev's theorem.** A homeomorphism between subsets A ⊆ X, B ⊆ Y of completely metrizable spaces extends to a homeomorphism between G_δ sets A′ ⊇ A and B′ ⊇ B. Corollary: complete metrizability is a topological invariant of the *subspace*, independent of the ambient space.
- **Completeness itself is not topological:** ℝ ≅ (0,1) as topological spaces, one complete, one not. What *is* topological is *complete metrizability*.
- ℚ is not completely metrizable (not G_δ in ℝ, by Baire). The irrationals ℙ are Polish, ℙ ≅ ℕ^ℕ.
- A metric space is **compact ⟺ complete + totally bounded**. Cantor intersection theorem; Banach fixed point theorem.

**Baire category.**
- **BCT1 (complete metric).** Every completely (pseudo)metrizable space is a Baire space. *Choice:* over ZF, "BCT for complete metric spaces" is **equivalent to DC** (dependent choice); for **separable** complete metric spaces it is provable in ZF.
- **BCT2 (locally compact).** Every locally compact Hausdorff (indeed locally compact regular) space is Baire. **Choice-free.**
- **BCT3 (Čech-complete).** Every Čech-complete space is Baire. Subsumes both above for Tychonoff spaces.
- The two classical forms are logically independent: complete metric ⇏ locally compact (ℓ²), locally compact Hausdorff ⇏ metrizable (βℕ, [0,ω₁]).
- Baire is **not** hereditary; open subspaces of Baire spaces are Baire; dense G_δ subspaces of Baire spaces are Baire. **Products of Baire spaces need not be Baire** (Oxtoby, consistently), though products of completely metrizable spaces are.
- Applications: uniform boundedness principle, open mapping / closed graph theorems, existence of continuous nowhere-differentiable functions, ℝ is uncountable, ℚ is not G_δ, Osgood's theorem (the set of continuity points of a pointwise limit of continuous functions is comeagre — so a pointwise limit is a **Baire class 1** function with comeagre continuity set), generic properties in dynamics.

### 4.3 SOURCE NOTES
Munkres Ch. 6 §40–42 (Urysohn, Nagata–Smirnov, Smirnov) and §48 (Baire) is the standard curricular route. Willard Ch. 8 §22–23 for metrization and §25 for complete metrizability/Čech-completeness. Engelking §4.4 and §5.4 are the authoritative full statements including the Bing/Nagata/Smirnov attributions and the developability material. Kechris *Classical Descriptive Set Theory* §3 for Alexandroff/Lavrentiev in the Polish-space form. Wikipedia *Metrization theorem*, *Bing metrization theorem*, *Nagata–Smirnov metrization theorem*, *Moore space (topology)*, *Metrizable space*, *Completely metrizable space*, *Polish space*, *Baire category theorem*, *Paracompact space*, *Collectionwise normal space* were fetched; the Wikipedia Bing page states the theorem as "regular + T₀ + σ-discrete base", which is the T₁-free formulation.

---

## 5. NETS AND FILTERS

### 5.1 DEFINITIONS
- **Directed set** (D, ≤) — nonempty, **preordered** (reflexive + transitive), and upward directed: ∀a,b ∃c with a ≤ c, b ≤ c. ⚠️ **DISAGREEMENT:** some authors require antisymmetry (partial order); Kelley requires only a preorder. Either works for the theory, but some constructions (e.g. the net associated to a filter) naturally produce only a preorder.
- **Net** — a function x : D → X from a directed set. Written (x_d)_{d∈D}.
- **Eventually (residually) in S** — ∃d₀ ∀d ≥ d₀ : x_d ∈ S. **Frequently (cofinally) in S** — ∀d ∃e ≥ d : x_e ∈ S.
- **Convergence** x_d → x — eventually in every neighbourhood of x.
- **Cluster point (accumulation point)** — frequently in every neighbourhood of x.
- **SUBNET — three inequivalent definitions.** Let x : D → X, and h : E → D with y = x ∘ h.
  1. **Willard subnet (1970)** — h is *monotone* (order-preserving) and h(E) is *cofinal* in D.
  2. **Kelley subnet (1955)** — h is *final/eventually-beyond*: ∀d ∈ D ∃e₀ ∈ E ∀e ≥ e₀ : h(e) ≥ d. **No monotonicity required.**
  3. **AA-subnet** (Smiley 1957; **Aarnes & Andenæs 1972**; Murdeshwar 1983) — the eventuality filter of y **refines** the eventuality filter of x. Equivalently: y is eventually in every set x is eventually in. Equivalent to "subordinate filter".
  - **Strictness:** Willard ⟹ Kelley ⟹ AA, and neither reverse holds.
  - **Why it doesn't matter in practice:** all three yield the *same* theory — p is a cluster point of x ⟺ some Willard-subnet of x converges to p ⟺ some Kelley-subnet ⟺ some AA-subnet. Schechter (*Handbook of Analysis and its Foundations*, 1996, §7) proves they are "equivalent for the purposes of convergence". So compactness/closure/continuity characterizations are convention-independent.
  - ⚠️ The user's brief said "Aarts–Arnaud"; the correct attribution is **Aarnes–Andenæs** (often "AA-subnets"). Flagging so the library doesn't inherit a wrong name.
- **Universal net (ultranet)** — for every S ⊆ X, the net is eventually in S or eventually in X∖S. Equivalently, its eventuality filter is an ultrafilter.
- **Filter** ℱ on X — nonempty, upward-closed, closed under finite intersections. **Proper** — ∅ ∉ ℱ.
- **Filter base / prefilter** ℬ — nonempty, ∅ ∉ ℬ, downward directed (∀A,B ∈ ℬ ∃C ∈ ℬ, C ⊆ A ∩ B). Generates the filter of its supersets.
- **Filter subbase** — any family with the finite intersection property.
- **Ultrafilter** — maximal proper filter ⟺ ∀A ⊆ X, A ∈ ℱ or X∖A ∈ ℱ.
- **Principal/fixed** (kernel ⋂ℱ ∈ ℱ, or nonempty) vs **free** (⋂ℱ = ∅).
- **Neighbourhood filter** 𝒩(x). **Eventuality/tail filter** of a net: generated by {x_e : e ≥ d}.
- **Filter convergence.** ℱ → x **iff 𝒩(x) ⊆ ℱ** (ℱ is finer than the neighbourhood filter). ⚠️ Wikipedia's *Filter (set theory)* page, as rendered, garbles this ("x belongs to every set in ℱ") — that is wrong; use the neighbourhood-refinement form.
- **Cluster point of a filter** — x ∈ ⋂_{F∈ℱ} cl(F); equivalently every neighbourhood of x meets every member of ℱ.
- **Image filter** f(ℱ) = filter generated by {f(A) : A ∈ ℱ}.

### 5.2 THEOREMS
**Characterizations by nets/filters (all exact, no first-countability needed).**
- x ∈ cl(A) ⟺ some net **in A** converges to x ⟺ some filter containing A converges to x. (*The net direction uses AC to pick a point from each A ∩ U.*)
- A is closed ⟺ A contains the limits of all its convergent nets. U is open ⟺ every net converging into U is eventually in U.
- f is continuous at x ⟺ (x_d → x ⟹ f(x_d) → f(x)) ⟺ (ℱ → x ⟹ f(ℱ) → f(x)).
- **X Hausdorff ⟺ every net has ≤ 1 limit ⟺ every filter has ≤ 1 limit.**
- **X compact ⟺** every net has a cluster point ⟺ every net has a convergent subnet ⟺ **every universal net converges** ⟺ every filter has a cluster point ⟺ every filter is contained in a convergent filter ⟺ **every ultrafilter converges** ⟺ every family of closed sets with the FIP has nonempty intersection.
- The cluster set of a net = the set of limits of its subnets.
- An **ultranet clusters at x ⟺ it converges to x**. (This is why ultrafilters/ultranets turn compactness into a one-line argument.)
- A subspace A ⊆ X is compact ⟺ every net in A has a subnet converging in A.

**The filter–net dictionary.**
- Net → filter: eventuality filter ℱ(x) = ⟨{x_e : e ≥ d} : d ∈ D⟩.
- Filter → net: index set D_ℱ = {(p, A) : p ∈ A ∈ ℱ}, ordered by (p,A) ≤ (q,B) ⟺ B ⊆ A; the net (p,A) ↦ p.
- The two constructions are mutually inverse up to convergence-equivalence: convergence, cluster points, and universality/ultra-ness correspond exactly. ℱ(x) is an ultrafilter ⟺ x is a universal net.
- Consequence: **every theorem about nets has a filter dual and vice versa**; the choice is stylistic (analysts prefer nets, Bourbaki-tradition and categorical/logical work prefer filters).

**Choice-sensitive results.**
- **Ultrafilter Lemma / BPI** — every proper filter extends to an ultrafilter. Proved by Zorn; **equivalent to the Boolean Prime Ideal theorem**; strictly weaker than AC (Halpern–Lévy 1971). Not provable in ZF: consistently every ultrafilter on ℕ is principal (Solovay model).
- **Kelley's theorem** — every net has a universal subnet. **Equivalent to the ultrafilter lemma.**
- **Tychonoff's theorem** — arbitrary products of compact spaces are compact. **Equivalent to AC** in ZF (Kelley 1950). **Restricted to compact Hausdorff factors it is equivalent to BPI** (Łoś–Ryll-Nardzewski; Rubin–Scott) — this is why βX only needs BPI.
- **Alexander subbase lemma** — if every cover by members of a fixed subbase has a finite subcover, X is compact. Proved by Zorn; commonly cited (Herrlich, *Axiom of Choice*) as **equivalent to AC**; at minimum it is not a ZF theorem.
- Ultrafilter proof of Tychonoff: project an ultrafilter on ∏X_i to each factor (still an ultrafilter), it converges by compactness, then the product point is a limit. One line, once you have BPI.

**WHERE SEQUENCES FAIL — the precise inventory.**
- **Closure fails.** Cocountable topology on an uncountable X: every convergent sequence is eventually constant, so every subset is sequentially closed, yet the space is not discrete. Sequential closure ≠ closure.
- **Closure fails in a product.** In ℝ^ℝ (product topology), let E = {f : f ≡ 1 off a finite set}. Then 0 ∈ cl(E) but **no sequence in E converges to 0**. A net does.
- **Continuity fails.** There are sequentially continuous, non-continuous maps (cocountable topology; [0,1]^𝔠).
- **Uniqueness of limits fails to detect Hausdorff.** Cocountable topology is US (unique sequential limits) but not Hausdorff.
- **Compactness fails both ways.** βℕ and [0,1]^𝔠 are **compact but not sequentially compact** (βℕ has no nontrivial convergent sequences). ω₁ = [0,ω₁) is **countably compact and sequentially compact but not compact**. Compactness and sequential compactness are incomparable in general; they coincide in metric spaces.
- **Sequential closure is not idempotent** — you must iterate transfinitely (up to ω₁); the *sequential order* of a space measures this. **Arens' space S₂** is sequential but not Fréchet–Urysohn.
- **Sequences suffice exactly when** X is first countable (for closure and continuity at a point), Fréchet–Urysohn (closure globally), or sequential (closed sets). Hierarchy: metrizable ⟹ first countable ⟹ Fréchet–Urysohn ⟹ sequential ⟹ compactly generated (k-space). All arrows strict.
- **A subnet of a sequence need not be a subsequence** — a sequence can have a cluster point yet no convergent *subsequence* (e.g. in βℕ). This is the single most common student error.
- Analysis-side instances: the weak topology on an infinite-dimensional Banach space is not first countable, so weak closures are not sequential closures (Mazur's lemma is the repair); the weak-* topology on bounded sets is metrizable only when the predual is separable.

### 5.3 SOURCE NOTES
Kelley *General Topology* Ch. 2 is the origin of Moore–Smith convergence in English and the source of the "Kelley subnet"; his subnet requires only finality (no monotonicity). Willard §11–12 defines the monotone-cofinal ("Willard") subnet. Aarnes & Andenæs (1972), "On nets and filters", *Math. Scand.* 31 — the AA-subnet. Schechter, *Handbook of Analysis and its Foundations* §7 — the definitive comparison proving the three notions are convergence-equivalent. Bourbaki *Topologie Générale* Ch. I §6–7 is filters-only, no nets. Pete L. Clark's notes "Convergence" (fetched) are an excellent free treatment: he uses Kelley-style subnets, proves "every net has a universal subnet" from Zorn, flags that the universal-subnet theorem is BPI-level while Tychonoff is AC-level, and gives the full net↔prefilter dictionary in his §6 (Theorem 6.4). nLab *net* lists all three subnet definitions with the Willard/Kelley/Aarnes–Andenæs attributions. Wikipedia *Net (mathematics)*, *Subnet (mathematics)*, *Filter (set theory)*, *Ultrafilter*, *Sequential space*, *Tychonoff's theorem* were fetched; the *Filter (set theory)* rendering of "convergence" is wrong (see above).

---

## 6. UNIFORM SPACES

### 6.1 DEFINITIONS — THREE PRESENTATIONS AND THEIR EQUIVALENCE

**(a) Entourages (Weil 1937, Bourbaki).** A uniformity Φ on X is a **filter on X × X** such that
1. Δ ⊆ U for every U ∈ Φ;
2. U ∈ Φ ⟹ U^{-1} = {(y,x) : (x,y) ∈ U} ∈ Φ;
3. ∀U ∈ Φ ∃V ∈ Φ with V ∘ V ⊆ U (where V∘V = {(x,z) : ∃y, (x,y),(y,z) ∈ V}).
Members are **entourages**. A **base (fundamental system) of entourages** generates Φ by upward closure. Symmetric entourages always form a base. **Separated / Hausdorff uniformity**: ⋂Φ = Δ. Write U[x] = {y : (x,y) ∈ U}.
- ⚠️ **DISAGREEMENTS:** some authors take Φ to be a *base* rather than a filter; Bourbaki does **not** build separation into "uniform space" while some older texts do; some require entourages symmetric.

**(b) Uniform covers (Tukey 1940).** A nonempty family μ of covers of X, closed under refinement (any cover refined by a member is a member), and such that any two members have a common **star refinement** in μ.
- **Star**: st(A, 𝒞) = ⋃{C ∈ 𝒞 : C ∩ A ≠ ∅}. 𝒞* = {st(C, 𝒞) : C ∈ 𝒞}. 𝒞 **star-refines** 𝒟 if 𝒞* refines 𝒟.
- **Barycentric (Δ-) refinement**: {st(x, 𝒞) : x ∈ X} refines 𝒟. **Fact:** a barycentric refinement of a barycentric refinement is a star refinement — this is the combinatorial engine of the metrization lemma.

**(c) Gauge (family of pseudometrics).** A family 𝒫 of pseudometrics; entourages generated by U_{d,ε} = {(x,y) : d(x,y) < ε} for d ∈ 𝒫, ε > 0 (closed under finite max). Every uniformity arises this way — take 𝒫 = all uniformly continuous pseudometrics.

**EQUIVALENCE THEOREM (Weil / Tukey / Bourbaki).** The three descriptions define isomorphic categories.
- Entourages → covers: 𝒞_U = {U[x] : x ∈ X}.
- Covers → entourages: U_𝒞 = ⋃{C × C : C ∈ 𝒞}.
- Entourages → gauge: the metrization lemma applied to countable chains of entourages produces a pseudometric for each such chain.

**Other definitions**
- **Uniform topology** — U open ⟺ ∀x ∈ U ∃V ∈ Φ with V[x] ⊆ U. Neighbourhood filter of x = {V[x] : V ∈ Φ}.
- **Uniformly continuous** f : X → Y — (f × f)^{-1}(V) ∈ Φ_X for all V ∈ Φ_Y. (Cover form: preimages of uniform covers are uniform covers.) Uniform embedding, uniform isomorphism.
- **Cauchy filter** ℱ — for every entourage U there is A ∈ ℱ with A × A ⊆ U (A is "U-small"). **Cauchy net** — ∀U ∃d₀ ∀m,n ≥ d₀ : (x_m, x_n) ∈ U. **Minimal Cauchy filter** — contains no strictly coarser Cauchy filter; every Cauchy filter contains a unique minimal one, and 𝒩(x) is minimal Cauchy.
- **Complete** — every Cauchy filter (equivalently every Cauchy net) converges. **Sequentially complete** — weaker in general.
- **Totally bounded / precompact** — for every entourage U there is a finite cover of X by U-small sets. ⚠️ **DISAGREEMENT:** Bourbaki's *précompact* = totally bounded; many analysts use "precompact" for *relatively compact*.
- **Fine (universal) uniformity** — the finest uniformity inducing a given completely regular topology. **Coarse / precompact reflection** — the finest totally bounded uniformity coarser than Φ.
- **Proximity space** — a "nearness" relation δ on subsets (Efremovič 1934/51, Riesz 1909, Wallace 1941).

### 6.2 THEOREMS
- **Uniformizability.** A topological space admits a compatible uniformity ⟺ it is **completely regular**. Hausdorff uniformity ⟺ Tychonoff topology. Every uniform space's topology is completely regular. (Wikipedia *Uniformizable space*, nLab *uniform space*.)
- Strict hierarchy of structure: **metric ⟹ uniformity ⟹ topology**, each forgetting information. Every uniform space embeds uniformly into a product of pseudometric spaces (the gauge).
- **Metrization of uniformities (Alexandroff–Urysohn / Weil / Bourbaki "metrization lemma").** A uniformity with a **countable base** is pseudometrizable; if additionally Hausdorff, metrizable. Proof: chain a sequence with V_{n+1}∘V_{n+1}∘V_{n+1} ⊆ V_n and define d by a chain infimum. **This is the same theorem as the Alexandroff–Urysohn topological metrization lemma (§4).**
- **Compact Hausdorff ⟹ unique uniformity.** A compact Hausdorff space carries **exactly one** compatible uniformity, namely the filter of *all* neighbourhoods of Δ in X × X. It is simultaneously the fine and the coarse uniformity, and the space is complete and totally bounded in it. (Hence for compact Hausdorff spaces, uniform notions are topological notions.)
- **Heine–Cantor, general form.** Every continuous map from a **compact** Hausdorff uniform space to any uniform space is **uniformly continuous**. (Immediate from the uniqueness above plus the fine-uniformity universal property.)
- **Fine uniformity universal property.** Every continuous map from a space carrying its fine uniformity into any uniform space is uniformly continuous.
- **Compactness = completeness + total boundedness** for uniform spaces (specializing to the metric theorem).
- **Extension theorem.** A uniformly continuous map from a **dense** subspace A of a uniform space X into a **complete Hausdorff** uniform space Y extends uniquely to a uniformly continuous map on X. (Continuity alone is not enough — this is why uniform continuity is the right hypothesis for extension arguments in analysis.)
- **Completion.** Every uniform space X has a **Hausdorff completion** (X̂, i) with i(X) dense, X̂ complete Hausdorff, and the universal property: every uniformly continuous X → Y (Y complete Hausdorff) factors uniquely through X̂. Constructions: Bourbaki's **minimal Cauchy filters** (entourage C(V) = pairs of minimal Cauchy filters sharing a V-small set); equivalence classes of Cauchy filters/nets. Complete Hausdorff uniform spaces form a **reflective subcategory** of Unif.
- **Samuel compactification.** The completion of the *precompact reflection* of a uniformity is a compactification. For the fine uniformity on a Tychonoff X the Samuel compactification is **βX**; for the C_b(X)-uniformity likewise. This is the uniform-space route to Stone–Čech.
- **Proximity ↔ totally bounded uniformities.** The functor Unif → Prox has a fully faithful right adjoint whose image is the totally bounded uniformities: **proximities = totally bounded uniformities**. Every compact Hausdorff space has a unique proximity (A δ B ⟺ cl A ∩ cl B ≠ ∅). Proximities on a Tychonoff X classify its Hausdorff compactifications (Smirnov).
- **A.H. Stone's theorem.** Every metric space is paracompact — proved with star-refinement/uniform-cover machinery. **Needs AC** (not a ZF theorem). Equivalently: every uniform cover of a metric space has a σ-discrete open refinement. This is where "fully normal ⟺ paracompact" (Stone) lives.
- **Fully normal** (every open cover has an open star refinement) **⟺ paracompact**, for T₁ spaces (Stone). The fine uniformity of a paracompact Hausdorff space is complete.
- **Topological groups.** Every topological group carries four canonical uniformities: **left**, **right**, **two-sided (Roelcke/lower)**, and **upper**. Uniform continuity of the group operations, **Raikov completion** (two-sided, always exists) vs **Weil completion** (left, exists iff the group is "Weil-complete"). Birkhoff–Kakutani (§4) is the metrization theorem for this uniformity.
- **Lebesgue-number lemma** generalizes: a uniform space has the Lebesgue property iff every open cover is a uniform cover.

**WHY COMPLETENESS AND UNIFORM CONTINUITY ARE NOT TOPOLOGICAL.**
- ℝ ≅ (0,1) as topological spaces. With their usual metrics, ℝ is complete and not totally bounded; (0,1) is totally bounded and not complete. **Same topology, two non-isomorphic uniformities.** Hence neither completeness nor total boundedness is a topological invariant.
- x ↦ x² is continuous but not uniformly continuous on ℝ; conjugating by a homeomorphism changes which maps are uniformly continuous. Uniform continuity requires comparing "nearness at different points", which the lattice of open sets does not encode.
- **Uniform invariants** (preserved by uniform isomorphism, not by homeomorphism): completeness, total boundedness, uniform connectedness (every uniformly continuous map to a discrete space is constant), the Lebesgue property, uniform local compactness. **Compactness is both** topological and uniform. **Separatedness is really topological.**
- Every topological property of a uniform space is trivially a uniform property (uniform isos are homeomorphisms); the content is the converse failing.

### 6.3 SOURCE NOTES
**Bourbaki, *Topologie Générale* Ch. II** is the normative entourage treatment (uniform structures, uniform continuity, complete spaces, completions) with Ch. III for topological groups — this is the source everyone else cites. **Kelley Ch. 6** ("Uniform Spaces") is the best English textbook treatment and Ch. 7 ("Function Spaces") depends on it. **Willard Ch. 9 (§35–39)** covers all three definitions, the metrization lemma, completion, the Samuel compactification, and proximities — the single best one-chapter source for this section. **Isbell, *Uniform Spaces* (AMS Math. Surveys 12, 1964)** is the definitive monograph, especially for uniform covers. **I.M. James, *Topological and Uniform Spaces*** and **Engelking Ch. 8** are the other standard references. Tukey's *Convergence and Uniformity in Topology* (1940) is the origin of the uniform-cover definition; Weil's 1937 *Sur les espaces à structure uniforme* the origin of entourages. nLab *uniform space* (fetched) gives the entourage↔cover bijection explicitly and flags the constructive subtleties (uniform regularity, apartness relations). Wikipedia *Uniform space*, *Uniformizable space*, *Uniform property*, *Cauchy filter*, *Totally bounded space*, *Uniform continuity*, *Proximity space* all fetched and consistent.

---

## 7. FUNCTION SPACES

### 7.1 DEFINITIONS
- **Y^X** all functions; **C(X,Y)** continuous ones.
- **Topology of pointwise convergence τ_p** — the product/initial topology; subbase [x, U] = {f : f(x) ∈ U}. Written **C_p(X)** for C_p(X, ℝ).
- **Topology of uniform convergence τ_u** (Y uniform) — from the uniformity with base W(V) = {(f,g) : (f(x),g(x)) ∈ V ∀x ∈ X}. For Y metric: the **uniform metric** d̄(f,g) = sup_x min(d(f(x),g(x)), 1); for bounded functions the **sup norm**.
- **Topology of compact convergence τ_k** — uniform convergence on each compact subset; the 𝒢-topology with 𝒢 = compact sets.
- **Compact-open topology τ_co** — subbase ⟨K, U⟩ = {f : f(K) ⊆ U}, K ⊆ X compact, U ⊆ Y open.
- **𝒢-topology (topology of uniform convergence on 𝒢)** — for a family 𝒢 of subsets of X; 𝒢 = finite sets gives τ_p, 𝒢 = compacts gives τ_k, 𝒢 = {X} gives τ_u, 𝒢 = bounded sets gives the strong/bounded topology.
- **Equicontinuous at x** (Y uniform) — ∀ entourage V ∃ nbhd U ∋ x with (f(x), f(x′)) ∈ V ∀x′ ∈ U, ∀f ∈ H. **Equicontinuous** — at every point. **Uniformly equicontinuous** (X uniform) — the nbhd is an entourage of X, uniform in x.
- **Evenly continuous** (Kelley) — for x ∈ X, y ∈ Y, nbhd W of y there are nbhds U ∋ x, V ∋ y with f(x) ∈ V ⟹ f(U) ⊆ W. The right substitute for equicontinuity when Y has only a topology.
- **Pointwise bounded / pointwise relatively compact** — {f(x) : f ∈ H} bounded / relatively compact for each x.
- **Separates points** (of a family ℱ) — x ≠ y ⟹ ∃f ∈ ℱ, f(x) ≠ f(y). **Vanishes nowhere** — ∀x ∃f ∈ ℱ, f(x) ≠ 0. **Self-adjoint** — closed under complex conjugation. **Sublattice** — closed under pointwise max and min.
- **Hemicompact** — there is a countable family of compact sets cofinal in the compacts. **k_ω-space**.

### 7.2 THEOREMS

**Comparison and coincidence of topologies.**
- Always τ_p ⊆ τ_co ⊆ τ_k ⊆ τ_u on C(X,Y) (with the middle two as below).
- **On C(X,Y) with Y a uniform (in particular metric) space, τ_co = τ_k** — the compact-open topology *is* the topology of compact convergence. (This is Munkres Thm 46.8; it fails on Y^X.)
- **If X is compact**, τ_co = τ_k = τ_u.
- **If X is discrete**, τ_co = τ_p = the product topology.
- **On an equicontinuous family, τ_p = τ_co = τ_k.** This is the workhorse behind Ascoli.
- τ_co is Hausdorff / regular / completely regular whenever Y is; C(X,Y) is a topological group / TVS / topological algebra whenever Y is (with continuity of multiplication requiring care).
- **Metrizability:** C_co(X,Y) is metrizable ⟺ X is hemicompact and Y is metrizable. For X locally compact σ-compact and Y a complete metric space, C_co(X,Y) is completely metrizable (a Fréchet space when Y = ℝ). C_p(X) is metrizable ⟺ X is countable.

**Convergence and completeness.**
- **Uniform limit theorem.** A uniform limit of continuous functions is continuous; C(X,Y) is **closed** in Y^X for τ_u. If Y is a complete uniform space, Y^X and C(X,Y) are complete in τ_u; C_b(X,ℝ) with the sup norm is a **Banach space**.
- Pointwise limits of continuous functions need not be continuous (Baire class 1; continuity points form a comeagre set by BCT — Osgood).
- **Dini's theorem** — a monotone pointwise-convergent sequence of continuous real functions on a compact space converges uniformly.
- An equicontinuous sequence converging pointwise converges **uniformly on compacta**.

**Evaluation and the exponential law.**
- **Evaluation.** e : C_co(X,Y) × X → Y, e(f,x) = f(x), is continuous when **X is locally compact Hausdorff** (more generally locally compact preregular). Conversely, if e is continuous for all Y with the compact-open topology, X is essentially locally compact. τ_co is the **coarsest** topology making e continuous when X is locally compact Hausdorff.
- **Composition** C_co(Y,Z) × C_co(X,Y) → C_co(X,Z) is continuous when Y is locally compact Hausdorff.
- **Exponential law / currying.** For **X locally compact Hausdorff**, the map C(Z × X, Y) → C(Z, C_co(X,Y)), F ↦ (z ↦ F(z, −)), is a **bijection**, and a **homeomorphism** for the compact-open topologies. In general only one direction of continuity holds, and the map need not be surjective.
- **Cartesian closedness.** **Top is not cartesian closed.** The category of **compactly generated weak Hausdorff (CGWH)** spaces is, with product = k-ification of the usual product and exponential = k-ification of C_co. This is why algebraic topologists work in CGWH ("the convenient category").
- **k-space / compactly generated**: A ⊆ X is open ⟺ A ∩ K is open in K for every compact K. Locally compact Hausdorff ⟹ k-space; first countable / metrizable ⟹ k-space; sequential ⟹ k-space.

**Ascoli–Arzelà — the family of statements.**
- **Classical.** A uniformly bounded, (uniformly) equicontinuous sequence in C([a,b], ℝ) has a uniformly convergent subsequence. Equivalently: F ⊆ C([a,b],ℝ) is relatively compact in the sup norm ⟺ uniformly bounded and equicontinuous.
- **Compact metric domain.** X compact, Y metric: F ⊆ C(X,Y) is compact ⟺ closed, equicontinuous, and pointwise relatively compact. (For Y = ℝⁿ: closed + bounded + equicontinuous.)
- **Munkres' form.** X a topological space, Y a metric space, F ⊆ C(X,Y) equicontinuous and pointwise relatively compact ⟹ F is contained in a compact subset of C_k(X,Y). **Converse holds when X is locally compact Hausdorff.**
- **Kelley/Bourbaki general uniform form.** X topological, Y a **Hausdorff uniform space**, H ⊆ C(X,Y) equicontinuous with H[x] = {h(x) : h ∈ H} relatively compact in Y for each x ⟹ cl_{τ_p}(H) ⊆ C(X,Y) and is **compact in τ_co** (and τ_p = τ_co = τ_k on it).
- **Kelley's even-continuity form** (Y merely topological, regular): F ⊆ C(X,Y) has compact closure in C_co(X,Y) ⟺ F[x] has compact closure for each x and F is **evenly continuous**.
- **Closure property.** The closure (pointwise or compact-open) of an equicontinuous set is equicontinuous.
- *Choice:* the diagonal-subsequence proof uses countable choice/DC; the general uniform version uses Tychonoff (AC).
- **Consequences:** Montel's theorem (normal families of holomorphic functions), Peano's existence theorem for ODEs, Rellich–Kondrachov compactness, Prokhorov's theorem, compactness of integral operators.
- **Uniform boundedness principle** (Banach–Steinhaus) restated: a pointwise-bounded family of continuous linear operators between Banach spaces is **equicontinuous** — the equicontinuity formulation is the topological content, and it follows from BCT.

**Stone–Weierstrass.**
- **Real algebra form.** X compact Hausdorff, A ⊆ C(X,ℝ) a subalgebra containing the constants (or just a nonzero constant) that **separates points** ⟹ A is dense in the sup norm.
- **Without constants.** A ⊆ C(X,ℝ) a subalgebra that separates points and **vanishes nowhere** ⟹ dense.
- **Complex form.** X compact Hausdorff, A ⊆ C(X,ℂ) a subalgebra that separates points, vanishes nowhere, and is **self-adjoint** (closed under conjugation) ⟹ dense. **Self-adjointness is essential:** the disc algebra A(𝔻) separates points and contains constants but is not dense in C(∂𝔻,ℂ).
- **Lattice form (Stone; Kakutani–Krein).** X compact Hausdorff with ≥ 2 points, L ⊆ C(X,ℝ) a **sublattice** such that for any x ≠ y and a, b ∈ ℝ there is f ∈ L with f(x) = a, f(y) = b ⟹ L is dense. (This is the version that generalizes to vector lattices / Riesz spaces and is used as the engine of the algebra proof, since |f| is a uniform limit of polynomials in f.)
- **Locally compact form.** X locally compact Hausdorff, A ⊆ C₀(X,ℝ) a subalgebra separating points and vanishing nowhere ⟹ dense in C₀(X).
- **Bishop's theorem**, **Machado's theorem**, **Nachbin's theorem** (C^∞(M): a subalgebra separating points *and tangent vectors* is dense in the C^∞ topology).
- **Weierstrass approximation theorem** as the corollary X = [a,b], A = polynomials; the constructive proof via **Bernstein polynomials**.

**C(X) as a topological/Banach algebra (statement level).**
- X compact Hausdorff: **C(X,ℂ) is a commutative unital C\*-algebra** under the sup norm; C(X,ℝ) is a Banach lattice and a real Banach algebra.
- **Commutative Gelfand–Naimark.** Every commutative unital C\*-algebra is isometrically \*-isomorphic to C(X) where X is its Gelfand spectrum (maximal ideal space), a compact Hausdorff space. Non-unital ↔ C₀(X), X locally compact Hausdorff. This is the "noncommutative topology" dictionary.
- **Banach–Stone.** For compact Hausdorff X, Y: C(X) ≅ C(Y) as *isometric* Banach spaces ⟹ X ≅ Y. (Also as algebras, and as lattices — Kaplansky.)
- **Riesz–Markov–Kakutani.** C(X)\* ≅ the space of regular Borel (Radon) measures rca(X) with total variation norm.
- **Gelfand–Kolmogorov.** The maximal ideals of C(X) are in bijection with βX (equivalently with the points of υX for the real maximal ideals). C_b(X) ≅ C(βX).
- **Stone's theorem** for Boolean algebras / **Stone duality** as the zero-dimensional shadow: Boolean algebras ↔ Stone spaces (compact Hausdorff totally disconnected).
- **C_p-theory (Arhangelskii).** C_p(X) is a topological vector space; **Nagata's theorem**: C_p(X) ≅ C_p(Y) as topological rings ⟹ X ≅ Y for Tychonoff X, Y. C_p(X) is metrizable ⟺ X countable; C_p(X) is Fréchet–Urysohn ⟺ X has the γ-property (Gerlits–Nagy).

### 7.3 SOURCE NOTES
**Munkres Ch. 7 (§43, 45–47)** is the standard curricular source for the compact-open topology, the uniform metric, Ascoli, and Stone–Weierstrass (§46 has the τ_co = τ_k theorem; §47 has Ascoli). **Kelley Ch. 7 ("Function Spaces")** is the definitive treatment of even continuity, the general Ascoli theorem over uniform spaces, and the exponential law; it depends on his Ch. 6 uniform-spaces machinery. **Willard §42–43** for function spaces and Ascoli; §44 for Stone–Weierstrass. **Bourbaki, *Topologie Générale* Ch. X** ("Espaces fonctionnels") is the normative uniform-convergence-structure treatment. **Engelking §3.4** for C(X,Y) and §2.6 for Stone–Weierstrass. **Dugundji Ch. XII** for the compact-open topology and function-space topologies. For C(X) as an algebra: Gillman & Jerison, Rudin *Functional Analysis*, Conway *A Course in Functional Analysis* Ch. VIII. Wikipedia *Compact-open topology*, *Topology of uniform convergence*, *Arzelà–Ascoli theorem*, *Equicontinuity*, *Stone–Weierstrass theorem*, *Continuous functions on a compact Hausdorff space*, *Compactly generated space* all fetched.

---

## RESULTS GOOD CURRICULA INCLUDE THAT ARE EASY TO MISS

These are the items that repeatedly separate a serious point-set course from a superficial one. Each is a candidate library item in its own right.

**Separation**
1. **"Normal ⟹ completely regular" is false without T₁.** The proof needs {x} closed. This is *the* reason the T-numbering exists, and it is the most commonly botched implication.
2. **Locally compact Hausdorff spaces are Tychonoff but need not be normal** (deleted Tychonoff plank). Many courses assert "locally compact Hausdorff ⟹ normal" and it is wrong.
3. **The clean break at T_{3½}.** Everything ≤ Tychonoff is hereditary and arbitrarily productive; everything ≥ normal is neither. This single sentence organizes half the subject and explains why βX exists exactly on Tychonoff spaces.
4. **Dowker's theorem:** X normal, X × [0,1] normal ⟺ X countably paracompact. Normality can die against the *unit interval*. Dowker spaces exist in ZFC (M.E. Rudin 1971; Balogh 1996 at cardinality 𝔠).
5. **Unique sequential limits ⇏ Hausdorff** (cocountable topology). Also the KC ⟹ US chain, and the fact that "compact sets are closed" is strictly between Hausdorff and T₁.
6. **Hausdorff ⟺ Δ closed**, and the four corollaries (equalizer closed, agreement on dense sets, closed graph, closed-graph converse for compact Hausdorff codomain). The *converse* closed-graph statement is almost always omitted.
7. **Hanai–Morita–Stone:** a closed continuous image of a metric space is metrizable ⟺ first countable ⟺ fibre boundaries are compact. Metrizability is *not* preserved by closed maps.
8. **Regular ⇏ completely regular** has a *simple* modern witness: **Mysior's example (1981)**, a half-plane construction, far easier than the Tychonoff corkscrew.
9. **Sober vs T₁.** They are incomparable; the Zariski topology is sober and not T₁; this is the separation axiom algebraic geometry actually uses.

**Urysohn / Tietze**
10. **Perfect normality = precise separation = "closed sets are G_δ".** Urysohn's lemma cannot be strengthened to f⁻¹(0) = A in general, and the exact obstruction is G_δ-ness.
11. **The Shrinking Lemma** (normal + point-finite open cover ⟹ shrinkable). It is the actual workhorse behind partitions of unity, and it gives partitions of unity on *normal* spaces without paracompactness.
12. **Katětov–Tong insertion theorem** (usc ≤ lsc sandwich characterizes normality) and **Michael's strict insertion** (perfect normality). These are the "functional" reformulations that make normality look like an approximation theorem.
13. **Dugundji extension theorem**: over a metric domain the extension operator can be chosen *linear* and range-preserving into the convex hull. Strictly stronger than Tietze and the version analysts actually need.
14. **βX needs only BPI, not full AC** — because [0,1]^κ is a product of compact *Hausdorff* spaces. Almost never stated.
15. **Gelfand–Kolmogorov:** maximal ideals of C(X) ↔ βX; and C_b(X) ≅ C(βX). The algebraic face of Stone–Čech.

**Countability**
16. **The Sorgenfrey line is separable + first countable + Lindelöf + hereditarily Lindelöf + hereditarily separable + ccc + perfectly normal + paracompact, and still not second countable or metrizable.** One example kills six naive implications.
17. **Hewitt–Marczewski–Pondiczery:** a product of ≤ 2^κ spaces of density ≤ κ has density ≤ κ. So {0,1}^𝔠 is separable — usually a shock.
18. **Arhangelskii's theorem** |X| ≤ 2^{χ(X)·L(X)}: a compact first-countable Hausdorff space has size ≤ 𝔠. Solved a 50-year-old problem and is a one-line-statement gem.
19. **ccc productivity is independent of ZFC** (MA+¬CH makes it productive; a Suslin line refutes it). "ccc" is an *antichain* condition despite the name.
20. **L-spaces exist in ZFC (Justin Moore, 2005) while S-spaces consistently do not (Todorcevic, under PFA).** The asymmetry is a genuinely modern landmark.

**Metrization / completeness**
21. **Urysohn's original theorem assumed normal; Tychonoff weakened it to regular.** Sources genuinely differ on what "Urysohn's metrization theorem" says.
22. **Bing = Nagata–Smirnov up to σ-discrete vs σ-locally finite.** They are both *characterizations*, unlike Urysohn's which is only sufficient. And the necessity direction is A.H. Stone's theorem in disguise.
23. **A.H. Stone's theorem ("every metric space is paracompact") is not a ZF theorem.** Metric paracompactness genuinely needs choice.
24. **Alexandroff's theorem:** completely metrizable ⟺ G_δ in the completion. Corollary: ℚ is not completely metrizable, ℙ is Polish and ≅ ℕ^ℕ. **Lavrentiev's theorem** (extending homeomorphisms to G_δ's) is the companion nobody states.
25. **The Normal Moore Space Conjecture is independent of ZFC** — false under V=L (Fleissner) and under MA+¬CH, consistent from a strongly compact cardinal (Nyikos, via PMEA). A point-set problem whose answer is a large cardinal.
26. **A manifold is metrizable ⟺ paracompact ⟺ components second countable.** The long line and the Prüfer manifold are the witnesses; "manifolds are second countable by definition" hides a real theorem.
27. **BCT for complete metric spaces is equivalent to DC over ZF**, while BCT for locally compact Hausdorff is choice-free, and BCT for *separable* complete metric spaces is ZF-provable. The three forms have three different logical strengths.
28. **Products of Baire spaces need not be Baire.** Almost universally assumed otherwise.

**Nets and filters**
29. **There are three inequivalent subnet definitions (Willard ⟹ Kelley ⟹ AA, strictly), and they all give the same convergence theory** (Schechter). Courses that pick one silently leave students unable to read other books. Correct attribution: **Aarnes–Andenæs**, not "Aarts–Arnaud".
30. **A subnet of a sequence is not a subsequence**, and a sequence can have a cluster point but no convergent subsequence (βℕ).
31. **Every net has a universal subnet ⟺ the ultrafilter lemma ⟺ BPI**, which is *strictly weaker than AC*; whereas **Tychonoff ⟺ AC** and **Tychonoff for Hausdorff factors ⟺ BPI**. Three distinct choice strengths in one topic.
32. **βℕ is compact but has no nontrivial convergent sequences**; [0,1]^𝔠 is compact but not sequentially compact; ω₁ is sequentially compact but not compact. Compactness and sequential compactness are genuinely incomparable.
33. **Sequential closure is not idempotent**; the sequential order can reach ω₁ (Arens' space S₂ is sequential but not Fréchet–Urysohn). "Sequentially closed" is a strictly weaker notion than "closed" even in sequential spaces' subspaces.
34. **The explicit ℝ^ℝ example:** 0 ∈ cl(E) for E = {f ≡ 1 off a finite set}, but no sequence in E reaches 0. The one concrete example that proves nets are necessary.

**Uniform spaces**
35. **Uniformizable = completely regular.** The exact topological shadow of a uniformity. Most courses never say what uniformities *are* topologically.
36. **A compact Hausdorff space has exactly one compatible uniformity** — hence the general Heine–Cantor theorem is a corollary, and for compact Hausdorff spaces "uniform" adds nothing.
37. **The metrization lemma for uniformities (countable base ⟹ pseudometrizable) is literally the same theorem as the Alexandroff–Urysohn topological metrization lemma.** Seeing this unifies §4 and §6.
38. **ℝ ≅ (0,1) is the whole proof that completeness and total boundedness are not topological.** Two uniformities, one topology.
39. **Uniformly continuous maps extend from dense subspaces into complete Hausdorff spaces; merely continuous ones do not.** The reason uniform structure exists at all.
40. **Samuel compactification of the fine uniformity = βX.** The uniform-space construction of Stone–Čech, and **proximities = totally bounded uniformities** (Smirnov), so proximities classify compactifications.
41. **A topological group carries four canonical uniformities** (left, right, two-sided/Roelcke, upper), and Raikov-completeness ≠ Weil-completeness. Analysts routinely conflate these.
42. **Fully normal ⟺ paracompact** (A.H. Stone) — the star-refinement characterization that ties uniform covers to paracompactness.

**Function spaces**
43. **Compact-open = compact convergence on C(X,Y) for Y uniform, but not on Y^X.** The hypothesis "on the continuous functions" is load-bearing.
44. **Evaluation is continuous ⟺ (essentially) X is locally compact Hausdorff**, and this is exactly why **Top is not cartesian closed** and why CGWH exists.
45. **On an equicontinuous family, τ_p = τ_co = τ_k.** The one-line reason Ascoli works and the reason "pointwise + equicontinuous ⟹ uniform on compacta".
46. **Kelley's "even continuity"** — the correct generalization of equicontinuity when the target has only a topology, giving Ascoli in full generality. Almost never taught.
47. **Self-adjointness in complex Stone–Weierstrass is not a technicality:** the disc algebra is the counterexample.
48. **The lattice form of Stone–Weierstrass is logically prior** to the algebra form (via |f| ≈ polynomial in f) and generalizes to Riesz spaces (Kakutani–Krein).
49. **Banach–Stone**: an isometry of C(X) onto C(Y) forces X ≅ Y — the topology is recoverable from the Banach-space structure alone.
50. **Commutative Gelfand–Naimark**: compact Hausdorff spaces ≡ commutative unital C\*-algebras, contravariantly. Combined with #15 this is the complete "algebra = topology" dictionary that point-set topology exists to support.

---

## AGGREGATE SOURCE LIST

**Fetched and used** (all Wikipedia/nLab pages retrieved live this session):
Wikipedia — Separation axiom, History of the separation axioms, Regular space, Normal space, Tychonoff space, Hausdorff space, Urysohn and completely Hausdorff spaces, Collectionwise normal space, Dowker space, Quotient space (topology), Urysohn's lemma, Tietze extension theorem, Partition of unity, Paracompact space, Stone–Čech compactification, Second-countable space, Lindelöf space, Countable chain condition, Metrization theorem, Metrizable space, Bing metrization theorem, Nagata–Smirnov metrization theorem, Moore space (topology), Completely metrizable space, Polish space, Baire category theorem, Complete metric space, Net (mathematics), Subnet (mathematics), Filter (set theory), Sequential space, Tychonoff's theorem, Uniform space, Uniformizable space, Uniform property, Cauchy filter, Totally bounded space, Uniform continuity, Proximity space, Compact-open topology, Topology of uniform convergence, Arzelà–Ascoli theorem, Equicontinuity, Stone–Weierstrass theorem, Continuous functions on a compact Hausdorff space, Compactly generated space.
nLab — separation axioms, uniform space, net, filter.
Pete L. Clark, *Convergence* (lecture notes, fetched) — nets, subnets, universal nets, filters, the dictionary, and explicit AC/BPI bookkeeping.

**Named but not machine-fetchable** (paywalled/print; cited from established content):
Willard, *General Topology* (Ch. 4–5 separation & countability, Ch. 6 metrization, Ch. 8 complete metrizability, **Ch. 9 uniform spaces**, Ch. 11 function spaces) — the single best match for this inventory's scope.
Kelley, *General Topology* (Ch. 2 Moore–Smith convergence, Ch. 6 uniform spaces, Ch. 7 function spaces).
Engelking, *General Topology* (the reference for hereditary/productive tables, metrization attributions, Ch. 8 uniform spaces).
Bourbaki, *Topologie Générale* Ch. I–II (filters, uniform structures), Ch. X (function spaces).
Munkres, *Topology* (§33 Urysohn, §34 Urysohn metrization, §35 Tietze, §38 βX, §40–42 metrization, §46–47 function spaces/Ascoli, §48 Baire).
Isbell, *Uniform Spaces* (AMS Survey 12); I.M. James, *Topological and Uniform Spaces*; Dugundji, *Topology*; Gillman & Jerison, *Rings of Continuous Functions*; Steen & Seebach, *Counterexamples in Topology*; Schechter, *Handbook of Analysis and its Foundations* §7 (subnet equivalence); Herrlich, *Axiom of Choice* (choice strengths); Kechris, *Classical Descriptive Set Theory* (Alexandroff/Lavrentiev); Juhász, *Cardinal Functions in Topology*.

**Caveat on two fetched pages:** Wikipedia's *Filter (set theory)* rendering states filter convergence incorrectly (I give the correct 𝒩(x) ⊆ ℱ form); and its *Urysohn's lemma* page asserts the proof is choice-free, which I have restated as ZF+DC since the dyadic recursion makes countably many arbitrary choices. Pete Clark's notes and Willard's Chapter 9 are the two highest-value non-Wikipedia sources for this inventory; Clark's is free and directly fetchable, Willard's is not but is the normative text for §1 and §6.

**Sources:**
- [Separation axiom — Wikipedia](https://en.wikipedia.org/wiki/Separation_axiom)
- [History of the separation axioms — Wikipedia](https://en.wikipedia.org/wiki/History_of_the_separation_axioms)
- [Regular space — Wikipedia](https://en.wikipedia.org/wiki/Regular_space)
- [Normal space — Wikipedia](https://en.wikipedia.org/wiki/Normal_space)
- [Tychonoff space — Wikipedia](https://en.wikipedia.org/wiki/Tychonoff_space)
- [Hausdorff space — Wikipedia](https://en.wikipedia.org/wiki/Hausdorff_space)
- [Urysohn and completely Hausdorff spaces — Wikipedia](https://en.wikipedia.org/wiki/Urysohn_and_completely_Hausdorff_spaces)
- [Collectionwise normal space — Wikipedia](https://en.wikipedia.org/wiki/Collectionwise_normal_space)
- [Dowker space — Wikipedia](https://en.wikipedia.org/wiki/Dowker_space)
- [Quotient space (topology) — Wikipedia](https://en.wikipedia.org/wiki/Quotient_space_(topology))
- [Urysohn's lemma — Wikipedia](https://en.wikipedia.org/wiki/Urysohn%27s_lemma)
- [Tietze extension theorem — Wikipedia](https://en.wikipedia.org/wiki/Tietze_extension_theorem)
- [Partition of unity — Wikipedia](https://en.wikipedia.org/wiki/Partition_of_unity)
- [Paracompact space — Wikipedia](https://en.wikipedia.org/wiki/Paracompact_space)
- [Stone–Čech compactification — Wikipedia](https://en.wikipedia.org/wiki/Stone%E2%80%93%C4%8Cech_compactification)
- [Second-countable space — Wikipedia](https://en.wikipedia.org/wiki/Second-countable_space)
- [Lindelöf space — Wikipedia](https://en.wikipedia.org/wiki/Lindel%C3%B6f_space)
- [Countable chain condition — Wikipedia](https://en.wikipedia.org/wiki/Countable_chain_condition)
- [Metrization theorem — Wikipedia](https://en.wikipedia.org/wiki/Metrization_theorem)
- [Metrizable space — Wikipedia](https://en.wikipedia.org/wiki/Metrizable_space)
- [Bing metrization theorem — Wikipedia](https://en.wikipedia.org/wiki/Bing_metrization_theorem)
- [Nagata–Smirnov metrization theorem — Wikipedia](https://en.wikipedia.org/wiki/Nagata%E2%80%93Smirnov_metrization_theorem)
- [Moore space (topology) — Wikipedia](https://en.wikipedia.org/wiki/Moore_space_(topology))
- [Completely metrizable space — Wikipedia](https://en.wikipedia.org/wiki/Completely_metrizable_space)
- [Polish space — Wikipedia](https://en.wikipedia.org/wiki/Polish_space)
- [Baire category theorem — Wikipedia](https://en.wikipedia.org/wiki/Baire_category_theorem)
- [Complete metric space — Wikipedia](https://en.wikipedia.org/wiki/Complete_metric_space)
- [Net (mathematics) — Wikipedia](https://en.wikipedia.org/wiki/Net_(mathematics))
- [Subnet (mathematics) — Wikipedia](https://en.wikipedia.org/wiki/Subnet_(mathematics))
- [Filter (set theory) — Wikipedia](https://en.wikipedia.org/wiki/Filter_(set_theory))
- [Sequential space — Wikipedia](https://en.wikipedia.org/wiki/Sequential_space)
- [Tychonoff's theorem — Wikipedia](https://en.wikipedia.org/wiki/Tychonoff%27s_theorem)
- [Uniform space — Wikipedia](https://en.wikipedia.org/wiki/Uniform_space)
- [Uniformizable space — Wikipedia](https://en.wikipedia.org/wiki/Uniformizable_space)
- [Uniform property — Wikipedia](https://en.wikipedia.org/wiki/Uniform_property)
- [Cauchy filter — Wikipedia](https://en.wikipedia.org/wiki/Cauchy_filter)
- [Totally bounded space — Wikipedia](https://en.wikipedia.org/wiki/Totally_bounded_space)
- [Uniform continuity — Wikipedia](https://en.wikipedia.org/wiki/Uniform_continuity)
- [Proximity space — Wikipedia](https://en.wikipedia.org/wiki/Proximity_space)
- [Compact-open topology — Wikipedia](https://en.wikipedia.org/wiki/Compact-open_topology)
- [Topology of uniform convergence — Wikipedia](https://en.wikipedia.org/wiki/Topology_of_uniform_convergence)
- [Arzelà–Ascoli theorem — Wikipedia](https://en.wikipedia.org/wiki/Arzel%C3%A0%E2%80%93Ascoli_theorem)
- [Equicontinuity — Wikipedia](https://en.wikipedia.org/wiki/Equicontinuity)
- [Stone–Weierstrass theorem — Wikipedia](https://en.wikipedia.org/wiki/Stone%E2%80%93Weierstrass_theorem)
- [Continuous functions on a compact Hausdorff space — Wikipedia](https://en.wikipedia.org/wiki/Continuous_functions_on_a_compact_Hausdorff_space)
- [Compactly generated space — Wikipedia](https://en.wikipedia.org/wiki/Compactly_generated_space)
- [separation axioms — nLab](https://ncatlab.org/nlab/show/separation+axioms)
- [uniform space — nLab](https://ncatlab.org/nlab/show/uniform+space)
- [net — nLab](https://ncatlab.org/nlab/show/net)
- [filter — nLab](https://ncatlab.org/nlab/show/filter)
- [Pete L. Clark, *Convergence*](https://silo.tips/download/convergence-pete-l-clark)
- [Pete L. Clark, *General Topology* lecture notes (index)](https://www.freebookcentre.net/maths-books-download/General-Topology-by-Pete-L.-Clark.html)
- [Stephen Willard, *General Topology* (Google Books)](https://books.google.com/books/about/General_Topology.html?id=-o8xJQ7Ag2cC)
