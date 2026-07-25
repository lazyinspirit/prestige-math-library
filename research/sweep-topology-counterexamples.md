Understood — here is the full main report body, with the addendum's corrections folded in inline. (Not re-sending the addendum.)

---

# COUNTEREXAMPLES: metric spaces, functional analysis, convergence pathologies

**Method note.** WebSearch budget was exhausted (200/200) before research began, so everything here was gathered by direct WebFetch against canonical sources, supplemented by explicit numeric verification of every inequality claim and by proof analysis for choice-status questions (math.stackexchange and MathOverflow are hard-blocked by the fetcher). Markers: **[F]** = fetched source given; **[D]** = derived, proof included so it is self-checking; **[K]** = asserted from knowledge, unverified here.

**Four of the brief's premises are wrong and are corrected inline** — items B‑3, A‑3, B‑8, and B‑12; plus the "arrow space" naming ambiguity (A‑12).

---

# PART A — CONVERGENCE / WHY SEQUENCES FAIL

## A‑1. Cocountable topology on ℝ: sequential closure ≠ closure

**(a)** `τ_cc = {∅} ∪ {U ⊆ ℝ : ℝ∖U countable}`. Closed sets = countable sets, plus ℝ itself. Steen–Seebach **#20** ("Countable complement topology"). It *is* a topology in ZF: subsets of countable sets are countable, and finite unions of countable sets are countable, both choice-free.

**Convergent ⟺ eventually constant [D, pure ZF].** Suppose `x_n → x`, and put `C = {x_n : x_n ≠ x}`. `C` is the image of a subset of ℕ, hence countable *in ZF with no choice*, so `U = ℝ∖C` is open and contains `x`. Convergence gives `x_n ∈ U` eventually, i.e. `x_n = x` eventually. ∎

**Consequences.** Every subset is sequentially closed *and* sequentially open, so `scl = id`. Take `A = [0,1]`: uncountable and `≠ ℝ`, so the only closed set containing it is ℝ. Hence

> **`scl([0,1]) = [0,1]` but `cl([0,1]) = ℝ`.**

Equally, `A = ℝ∖{0}` has `0 ∈ cl(A)∖A` with no sequence in `A` converging to `0`.

Explicit non-compactness witness (ZF): `U_k = ℝ ∖ {n : n ≥ k}` for `k ∈ ℕ`. Each is open, `⋃_k U_k = ℝ`, and any finite subfamily has union `U_{max k} ≠ ℝ`. This is a **countable** cover, so the space is not even countably compact. Compact subsets are exactly the finite sets, so it is not a k-space either.

| property | value |
|---|---|
| T1 | yes (singletons countable ⇒ closed) |
| Hausdorff | **no** — hyperconnected: any two nonempty opens meet |
| connected, locally connected | yes |
| Lindelöf | yes (needs AC_ω) |
| separable | no (countable sets are closed and ≠ ℝ) |
| compact / countably compact | no |
| first countable / sequential / Fréchet–Urysohn / countably tight | **no / no / no / no** (`t = ω₁`) |

**(b) Refutes:** "sequentially closed ⇒ closed" (i.e. every space is sequential) — this is the *simplest* refutation, so named by Wikipedia; "`scl = cl`" (Fréchet–Urysohn for all spaces); "sequences detect closure"; "T1 + Lindelöf + connected ⇒ Hausdorff"; "countable tightness is automatic".

**(c)** Convergence characterisation, `cl([0,1]) = ℝ`, non-compactness, T1, non-Hausdorffness: **pure ZF**. **Lindelöf uses AC_ω** (pick `U_n ∋ a_n` for each point of the countable complement of a chosen `U_0`). The usual non-first-countability proof also uses **AC_ω** (it needs "a countable union of countable sets is countable").

**(d)** [Cocountable topology](https://en.wikipedia.org/wiki/Cocountable_topology) · [Sequential space](https://en.wikipedia.org/wiki/Sequential_space) · [Counterexamples in Topology](https://en.wikipedia.org/wiki/Counterexamples_in_Topology)

## A‑2. ω₁ + 1 = [0, ω₁] with the order topology

**(a)** `ω₁` = least uncountable ordinal (exists in **ZF** by Hartogs — no choice). Order topology on `[0,ω₁]`: `0` and successors are isolated, basic neighbourhoods of a limit `λ` are `(α, λ] = {ξ : α < ξ ≤ λ}`. Steen–Seebach **#42** `[0,Ω)`, **#43** `[0,Ω]`.

- **`ω₁ ∈ cl([0,ω₁))`:** every basic `(α, ω₁]` with `α < ω₁` contains `α+1 < ω₁`. **ZF.**
- **No sequence from `[0,ω₁)` converges to `ω₁` [D]:** given `(α_n) ⊆ ω₁`, `α = sup_n α_n = ⋃_n α_n` is a countable union of countable sets, hence a countable ordinal, so `α < ω₁` and `(α, ω₁]` is a neighbourhood of `ω₁` missing every `α_n`. ∎

So `[0,ω₁)` is sequentially closed in `[0,ω₁]` but not closed ⇒ **`[0,ω₁]` is not sequential**, and `t([0,ω₁]) = ω₁` ⇒ **not countably tight** (for countable `A ⊆ ω₁`, `cl(A) = A ∪ {sup A} ∌ ω₁`) — while being **compact Hausdorff**.

| `[0,ω₁)` | status | choice |
|---|---|---|
| first countable | **yes** (at a countable limit, pick *one* cofinal ω-sequence) | **ZF** |
| sequentially compact | yes | AC_ω |
| countably compact | yes | AC_ω |
| compact | **no** — `{[0,α) : α < ω₁}` has no countable subcover | ZF |
| Lindelöf | **no** — same cover | ZF |
| separable / second countable / metrizable | **no** | AC_ω |
| Fréchet–Urysohn / sequential | yes (first countable) | ZF |

`[0,ω₁]` itself: compact, Hausdorff, sequentially compact (AC_ω), first countable at every point **except** `ω₁` (where `χ = ω₁`), not countably tight, not sequential, not FU, not metrizable.

**(b) Refutes:** "`x ∈ cl(A) ⇒ ∃` sequence in `A → x`" (FU) in a **compact Hausdorff** space; "compact Hausdorff ⇒ sequential / countably tight"; "countably compact ⇒ compact"; "sequentially compact ⇒ compact"; "first countable + countably compact ⇒ metrizable/Lindelöf".

**(c) This is the sharpest choice point in Part A.** The load-bearing fact is the **regularity of ω₁**, which is **not ZF-provable**:

> "It is consistent with ZF that ω₁ be the limit of a countable sequence of countable ordinals as well as the set of real numbers be a countable union of countable sets." **[F** [Regular cardinal](https://en.wikipedia.org/wiki/Regular_cardinal)**]**

This is the **Feferman–Lévy model** — the standard reference is **Jech, *The Axiom of Choice*, North-Holland 1973, Theorem 10.6**; there `ω₁ = ℵ_ω^L`, and it needs **no large cardinal**. In such a model `cf(ω₁) = ω`, so a cofinal ω-sequence in `ω₁` is a countable closed discrete unbounded subset, and **the whole counterexample collapses**: `[0,ω₁)` is then neither countably compact nor sequentially compact, "every continuous real function on `[0,ω₁)` is eventually constant" fails, and the **Tychonoff plank** and **long line** counterexamples are correspondingly compromised.

**AC_ω suffices** (Howard–Rubin form 34, "ℵ₁ is regular"; `[8][34] = 2`, `[31][34] = 1`). Wikipedia states the topological form directly: "If the axiom of countable choice holds, every increasing ω-sequence of elements of [0, ω₁] converges to a limit in [0, ω₁]." **[F]** Note the fine point: `[6][34] = 3` — "countable unions of countable **sets of reals** are countable" does **not** imply ℵ₁ regular. Gitik: consistently with ZF, *every* aleph above ℵ₀ is singular.

**(d)** [First uncountable ordinal](https://en.wikipedia.org/wiki/First_uncountable_ordinal) · [Regular cardinal](https://en.wikipedia.org/wiki/Regular_cardinal) · [Axiom of countable choice](https://en.wikipedia.org/wiki/Axiom_of_countable_choice) · [Karagila, Cofinality and AC](https://karagila.org/2015/cofinality-and-the-axiom-of-choice/)

## A‑3. ⚠ Sequential fan `S(ω)` — **the brief's claim is wrong**

**(a)** `S(ω) = {∞} ∪ (ω × ω)`; every `(n,m)` isolated; neighbourhood base at `∞`:

> **`B_f = {∞} ∪ {(n,m) : m ≥ f(n)}`, one for each `f ∈ ω^ω`.**

Equivalently: the quotient of `⊕_{n∈ω}(ω+1)` (countably many convergent sequences) identifying all limit points to `∞`. Each column `{n} × ω` is a "spine". *(Contrast the **metric fan** `M_ω`: same set, but a neighbourhood of `∞` contains all but finitely many **rows** — that one is metrizable with a countable base.)*

**⚠ CORRECTION.** The brief lists `S_ω` as an example of Fréchet–Urysohn *failure*. **It is not.** The sequential fan **IS Fréchet–Urysohn**; what it fails is **first countability**.

> "A sequential fan, though not a first countable space, is a Frechet space." — [Dan Ma](https://dantopology.wordpress.com/2024/07/09/when-a-product-of-two-sequential-fans-is-sequential/). "The character at the point ∞ in S(ω) … equals the dominating number 𝔡" (`ω₁ ≤ 𝔡 ≤ 𝔠`).

**Proof that `S(ω)` is FU [D, ZF].** For `A ⊆ ω×ω`: `∞ ∈ cl(A) ⟺ A ∩ ({n}×ω)` is infinite for some `n`. (⇐ that column's tail meets every `B_f`. ⇒ if every column-trace is finite, set `f(n) = 1 + max{m : (n,m) ∈ A}` (0 if empty); then `B_f ∩ A = ∅`.) Given `∞ ∈ cl(A)`, take the **least** such `n` and enumerate `A ∩ ({n}×ω)` increasingly — that sequence converges to `∞`, since `m_k → ∞` puts it eventually inside any `B_f`. ∎ Both the `f` and the enumeration are canonical, so **no choice**.

**Proof of non-first-countability [D, ZF].** Given `B_{f_1}, B_{f_2}, …`, the canonical diagonal `g(k) = 1 + max{f_1(k),…,f_k(k)}` gives `B_g` with `(k, f_k(k)) ∈ B_{f_k} ∖ B_g`, so no `B_{f_k} ⊆ B_g`. ∎ *(This gives `χ(∞) > ω` in ZF; the identification `χ(∞) = 𝔡` is a ZFC statement.)*

**(b) Refutes:** "**Fréchet–Urysohn ⇒ first countable**" (its actual role in the hierarchy); "FU is productive" — `S(ω) × S(ω)` is not Fréchet, and even `C × S(ω)` with `C` a convergent sequence is sequential but not Fréchet (it contains a copy of the Arens space); "sequentiality and countable tightness are productive" — whether `S(ω) × S(ω)` is sequential is independent of ZFC.

A second, very concrete FU-not-first-countable example **[D]**: `ℝ/ℤ`, the quotient of ℝ collapsing all integers to one point. Same fan argument; neighbourhoods of the collapsed point are indexed by `ω^ω`-like data.

**(c)** ZF for both properties.

**(d)** [Dan Ma: Sequential fan and the dominating number](https://dantopology.wordpress.com/2024/03/11/sequential-fan-and-the-dominating-number/) · [Two Fréchet spaces whose product is not Fréchet](https://dantopology.wordpress.com/2024/07/16/two-frechet-spaces-whose-product-is-not-frechet/) · [Metric fan and sequential fan](https://dantopology.wordpress.com/2025/07/15/metric-fan-and-sequential-fan/)

## A‑4. Arens space `S₂` — the correct "sequential but not Fréchet–Urysohn"

**(a)** `X = {∞} ∪ ℕ ∪ (ℕ × ℕ)`.
- Every `(n,j)` is **isolated**.
- Base at `n ∈ ℕ`: `B_{n,m} = {n} ∪ {(n,j) : j ≥ m}` — so column `n` converges to `n`.
- Base at `∞`: `U(F,g) = {∞} ∪ ⋃_{n ∉ F} ({n} ∪ {(n,j) : j ≥ g(n)})`, for `F ⊆ ℕ` finite and `g : ℕ → ℕ`. So `(n)_{n∈ℕ}` converges to `∞`.

*Quotient formulation (equivalent):* take a convergent sequence `{p_n} ∪ {p}` and, for each `n`, a convergent sequence `{s_{n,j}} ∪ {s_n}`; take the topological sum and **identify each `s_n` with `p_n`**.

**(b) Refutes "sequential ⇒ Fréchet–Urysohn".** With `A = ℕ × ℕ`: `∞ ∈ cl(A)` but **no sequence in `A` converges to `∞`**. It *is* sequential, being a quotient of a plane subspace, i.e. of a metric space. Wikipedia: "Arens' space is sequential, but not Fréchet–Urysohn." **[F]**

**Sequential order 2** (hence the name) **[D]**: `scl(A) = A ∪ ℕ` (each column converges to its `n`), then `scl(scl(A)) = A ∪ ℕ ∪ {∞} = X`. So `scl` must be iterated **twice** — the sequential closure operator is **not idempotent**. (The transfinite iteration always stabilises by `ω₁`.)

**Universality:** *every* sequential non-Fréchet space contains a copy of `S₂` — so `S₂` is **the** obstruction.

**Two structural facts [D]:**
1. **The witnessing subspace `T = {∞} ∪ (ℕ×ℕ) ⊆ S₂` is homeomorphic to the Arens–Fort space.** In `T`, `∞` has neighbourhood filter generated by `{(n,j) : n ∉ F, j ≥ g(n)}` — "all but finitely many points of all but finitely many columns", exactly the Arens–Fort filter. This is why `T` is neither sequential nor a k-space.
2. **`S(ω)` is a quotient of `S₂`:** collapse the spine `{∞} ∪ ℕ` to a point `p`. Then `U ∋ p` is open iff its preimage is a neighbourhood of `∞` **and** of every `n`, forcing `U` to contain cofinitely many points of **every** column — precisely the fan's `B_f`. So `S₂ / ({∞} ∪ ℕ) ≅ S(ω)`.

**⚠ Notation trap.** `S(ω)`/`S_ω` in the cardinal-invariant literature counts **spines**; `S_α` in the Arhangel'skiĭ–Franklin hierarchy counts **sequential order** **[K]**. So `S₂` = Arens (order 2) while `S_ω` = the fan (ω spines) — **the subscripts mean different things**. Write `S(ω)` for the fan if both appear in one document. Also: "Fréchetization" is *not* standard terminology; the standard operator (sequential coreflection) goes the other way, refining the topology.

**(c)** None — pure ZF combinatorics.

**(d)** [Dan Ma: A note about the Arens' space](https://dantopology.wordpress.com/2010/08/18/a-note-about-the-arens-space/) · [Defining Arens' space using diagrams](https://dantopology.wordpress.com/2023/04/16/defining-arens-space-using-diagrams/) · [Sequential space](https://en.wikipedia.org/wiki/Sequential_space)

## A‑5. Arens–Fort space

**(a)** `X = {(m,n) : m,n ∈ ℤ, m,n ≥ 0} = ω × ω`. `U` is **open** iff `(0,0) ∉ U`, **or** `(0,0) ∈ U` and `U` contains all but finitely many points of all but finitely many **columns** `{(m,n) : n ≥ 0}`. Equivalently **[D]**: `U ∋ (0,0)` is open ⟺ `{m : column m ∖ U is infinite}` is finite; base `U(F,g) = {(0,0)} ∪ {(m,n) : m ∉ F, n ≥ g(m)}`. Steen–Seebach **#26**.

**Properties [F].** IS: Hausdorff, regular, normal, countable, zero-dimensional, first countable at every point except `(0,0)` (all others isolated). IS NOT: second countable, **first countable**, metrizable, compact, **sequential**, **Fréchet–Urysohn**. Verbatim: *"There is no sequence in X ∖ {(0,0)} that converges to (0,0)"* — though `(0,0)` is a **cluster point** of one.

**Consequences [D].** Every convergent sequence is eventually constant, so every set is sequentially open and the **sequential coreflection is discrete** — exactly like the cocountable topology, but now in a **countable, normal, regular Hausdorff** space. It **is** countably tight (trivially, `|X| = ω`). Not countably compact: `D = {(m,0) : m ∈ ω}` is infinite, closed and discrete, since `(X ∖ D) ∪ {(0,0)}` omits exactly one point from each column and is open. And `scl(X∖{(0,0)}) = X∖{(0,0)} ⊊ cl(...) = X`.

**(b) Refutes:** "**countably tight ⇒ sequential**" — *the* canonical separating example for the last arrow of the hierarchy. Also "normal + regular + Hausdorff + countable ⇒ first countable/metrizable"; and it proves the "no nontrivial sequences" pathology is **not** caused by bad separation axioms (unlike the cocountable topology, which is not even Hausdorff).

**(c)** None — ZF.

**(d)** [Arens–Fort space](https://en.wikipedia.org/wiki/Arens%E2%80%93Fort_space)

## A‑6. βℕ

**(a)** `βω` = the set of **all ultrafilters on ω**, with the Stone topology: clopen basis `B(A) = {p ∈ βω : A ∈ p}` for `A ⊆ ω`. `ω` embeds as the principal ultrafilters (dense, open); `ω* = βω∖ω` = the free ultrafilters. Compact Hausdorff, zero-dimensional, extremally disconnected, `|βω| = 2^𝔠 = 2^(2^ℵ₀)`, and `|ω*| = 2^𝔠`. Steen–Seebach **#111**. Universal property: compact Hausdorff spaces form a **reflective subcategory** of Top.

**No nontrivial convergent sequences.** The clean reason: *any infinite closed subset of `βω` contains a copy of `βω`* (hence has size `2^𝔠`), while the closure of a nontrivial convergent sequence would be an infinite compact metrizable set of size `≤ 𝔠`. Hence `βω` is not sequential, not FU, and **not countably tight**.

**(b) Refutes:** "compact ⇒ sequentially compact" — the sequence `0,1,2,…` in `ω ⊆ βω` has distinct terms, so every subsequence is nontrivial, hence non-convergent; "compact Hausdorff ⇒ sequential / FU / countably tight"; "an infinite compact Hausdorff space contains a nontrivial convergent sequence" (true for compact Hausdorff **first countable**, false in general); "separable ⇒ small" (`ω` is dense yet `|βω| = 2^𝔠`). Precision: the correct statement quantifies over sequences of **pairwise distinct** points — constant sequences in `ω*` of course converge.

**(c)** Needs the **ultrafilter lemma (UL) = Boolean prime ideal theorem (BPI)** (HR 14), equivalent **in ZF**. UL is **independent of ZF** and **strictly weaker than AC**; it does **not** imply AC_ω. Free ultrafilters are "intangible" — not ZF-constructible (Blass, *A model without ultrafilters*, Bull. Acad. Polon. Sci. **25** (1977) 329–331). In such a model, "the space of ultrafilters on ω" is just discrete `ω`, which is not compact — so the construction genuinely needs UL. The Čech–Stone theorem is one of Herrlich's BPI-equivalents.

**Fine structure worth knowing** (Howard–Rubin): `[14][70] = 2` and `[70][14] = 4` — **"there is a non-principal ultrafilter on ω" (HR 70) is strictly weaker than BPI**. Even "every infinite set has a non-principal ultrafilter" fails to imply BPI (`[63][14] = 3`). Neither DC nor AC_ω yields a non-principal ultrafilter on ω (`[43][70] = [8][70] = 4`). **Open:** whether UF(ω) implies the full ultrafilter lemma on ω (`[70][225] = 0`). And `[70][93] = 1`, `[70][142] = 1` — UF(ω) yields both a non-measurable set and a set without the Baire property (Sierpiński 1938, via Oxtoby's zero-one law).

**(d)** [Stone–Čech compactification](https://en.wikipedia.org/wiki/Stone%E2%80%93%C4%8Cech_compactification) · [Dan Ma: βω as a space of ultrafilters](https://dantopology.wordpress.com/2026/04/01/beta-omega-as-a-space-of-ultrafilters/) · [No countable tightness in beta omega](https://dantopology.wordpress.com/2026/03/16/no-countable-tightness-in-beta-omega/) · [Boolean prime ideal theorem](https://en.wikipedia.org/wiki/Boolean_prime_ideal_theorem) · [nLab: ultrafilter theorem](https://ncatlab.org/nlab/show/ultrafilter+theorem)

## A‑7. `[0,1]^[0,1]` and `{0,1}^ℝ` — compact, not sequentially compact

**(a)** Product (= pointwise convergence) topology on all functions `[0,1] → [0,1]`, resp. `ℝ → {0,1}`; subbasic opens `π_t^{-1}(V) = {f : f(t) ∈ V}`. Steen–Seebach **#105** (`I^I`).

**The explicit sequence and diagonal [D, verified numerically].** For `x ∈ [0,1)` let `d_n(x)` be the `n`-th binary digit of the expansion that is **not eventually 1** (canonical, no choice); set `d_n(1) = 0`. Define

> **`f_n(x) = d_n(x)`.**

Given any `n_1 < n_2 < …`, define `x* ∈ [0,1)` by `d_{n_k}(x*) = 0` for `k` even, `= 1` for `k` odd, and `d_j(x*) = 0` for `j ∉ {n_k}` (this expansion is not eventually 1, so it is canonical). Then `f_{n_k}(x*) = 1,0,1,0,…` diverges, and since `π_{x*}` is continuous, `(f_{n_k})` does not converge in the product. So **no** subsequence of `(f_n)` converges pointwise. ∎ *(Verified: for index set `{3,7,11,20,25,31}` the constructed `x* ≈ 0.0078134541` yields digits `0,1,0,1,0,1`.)*

The `{0,1}` form (nLab): `X = ∏_{f : ℕ→2}{0,1}`, `(x_n)_f = f(n)`; given `(x_{n_k})`, the coordinate `f` with `f(n_k) = k mod 2` alternates. Since `|2^ℕ| = 𝔠`, this **is** `{0,1}^ℝ`.

Both are compact Hausdorff, **separable** (Hewitt–Marczewski–Pondiczery: a product of at most 𝔠 separable spaces is separable) **[K]**, not first countable, and `I^I` is "a k-space that is not sequential".

**(b) Refutes:** "compact ⇒ sequentially compact"; "compact + separable ⇒ sequentially compact"; "compact Hausdorff ⇒ countably tight/sequential"; "**products of sequentially compact spaces are sequentially compact**" (`[0,1]` is; `𝔠` copies are not).

**(c)** **Compactness needs only BPI/UL**, since the factors are compact Hausdorff — verbatim: "the compactness of the product of compact Hausdorff spaces can be proved using (BPI), and in fact the converse also holds". **Full Tychonoff ⟺ AC** (Kelley 1950, Fund. Math. **37**, 75–76). The **failure** of sequential compactness is **pure ZF** — both the sequence and the diagonal point are explicitly definable. Related: countable products of sequentially compact spaces need **DC**; "countable products of compact **pseudometric** spaces are compact" **⟺ AC_ω** (Herrlich–Keremedis Thm 1.2). **[K]**: `{0,1}^κ` is sequentially compact iff `κ < 𝔰` (splitting number).

**(d)** [Tychonoff's theorem](https://en.wikipedia.org/wiki/Tychonoff%27s_theorem) · [nLab: sequentially compact space](https://ncatlab.org/nlab/show/sequentially+compact+space) · [Sequentially compact space](https://en.wikipedia.org/wiki/Sequentially_compact_space)

## A‑8. Sequentially continuous but not continuous

**General principle [F].** `X` is sequential **iff** for every space `Y`, every sequentially continuous `f : X → Y` is continuous. So *every* non-sequential space produces such an `f` — namely `id : X → Seq(X)` onto its sequential coreflection.

1. **`id : (ℝ, τ_cocountable) → (ℝ, τ_usual)`.** *Sequentially continuous*: every convergent sequence upstairs is eventually constant (A‑1), and eventually constant sequences converge in *any* topology. *Not continuous*: `(0,1)` is usual-open, but `ℝ∖(0,1)` is uncountable, so `(0,1)` is not cocountable-open. **Pure ZF, no choice.** Sharper: since every subset is sequentially open, `id : (ℝ, τ_cc) → (ℝ, discrete)` is sequentially continuous and wildly discontinuous.
2. **On `[0,ω₁]`:** `f(ω₁) = 1`, `f(α) = 0` for `α < ω₁`. Sequentially continuous — needs **AC_ω** (via regularity of ω₁); not continuous, since `f^{-1}(1) = {ω₁}` is not open (every `(α,ω₁]` contains `α+1`).
3. **On Arens–Fort:** `f(0,0) = 1`, else `0`. Sequentially continuous (no nontrivial convergent sequences); `{(0,0)}` is not open. **ZF.**
4. **On `βω`:** `id : βω → (βω, discrete)`. Needs **UL**.

**⚠ The contrast is subtler than "first countable domains are safe".** For `f : ℝ → ℝ` (metrizable domain) sequential continuity does imply continuity — but the choice status splits three ways (Herrlich 1997 Thm 1.1, after Sierpiński 1916/1918):

- **Global** "`f : ℝ → ℝ` is continuous iff sequentially continuous": **provable in ZF**. Herrlich flags treating this as a choice principle as *"a serious mistake"*.
- **Pointwise at a single `x`** for `f : ℝ → ℝ`, and sequential continuity on a **subspace** `A ⊆ ℝ`: **equivalent to AC_ω(ℝ)**.
- On a general **metric** domain: **equivalent to full AC_ω** (Herrlich Thm 2.4).

**(d)** [Sequential space](https://en.wikipedia.org/wiki/Sequential_space) · [Herrlich 1997](https://emis.muni.cz/journals/CMUC/pdf/cmuc9703/herrli.pdf)

## A‑9. The strict hierarchy

> **metrizable ⇒ first countable ⇒ Fréchet–Urysohn ⇒ sequential ⇒ countably tight**, all strict.

**Definitions.** `scl(S) = {x : ∃` sequence in `S` converging to `x}` — a preclosure operator, **not idempotent**. *Sequentially closed*: `S = scl(S)`. *Sequential space*: every sequentially closed set is closed (⟺ a quotient of a metric space). *Fréchet–Urysohn*: `cl(S) = scl(S)` for **every** `S` (⟺ hereditarily sequential). *Countably tight*: `x ∈ cl(Y) ⇒ x ∈ cl(Z)` for some countable `Z ⊆ Y`.

| strict inclusion | separating example | why |
|---|---|---|
| first ctble **⇏** metrizable | Sorgenfrey line; `[0,ω₁)`; double arrow; long line | first countable + separable, not second countable |
| **FU ⇏ first countable** | **sequential fan `S(ω)`** | Fréchet, `χ(∞) = 𝔡 > ω` |
| " | `A(ω₁)` = one-point compactification of uncountable discrete | compact, FU, `χ(∞) = ω₁` |
| " | `ℝ/ℤ` (collapse ℤ to a point) | same fan argument **[D]** |
| **sequential ⇏ FU** | **Arens space `S₂`** | `∞ ∈ cl(ℕ×ℕ)`, unreachable by sequences; sequential order 2 |
| " | `ℝ^∞` (direct limit of `ℝⁿ`), Schwartz space `S(ℝⁿ)`, `C^∞(U)` | **[F]** |
| **countably tight ⇏ sequential** | **Arens–Fort space**; `T = {∞}∪(ℕ×ℕ) ⊆ S₂` | no nontrivial convergent sequences, yet countable |
| **⇏ countably tight** | `[0,ω₁]`, `βω`, `I^I`, cocountable ℝ | `t > ω` |

Side branch: sequential ⇒ **k-space**; k-space and countable tightness are **incomparable** (neither implies the other).

## A‑10. Nets and filters — the repair, and its choice bill

| repair theorem | statement | choice |
|---|---|---|
| closure | `cl(S)` = set of limits of nets in `S` | **ZF** — use the canonical net on `D = {(s,U) : U ∈ 𝒩(x), s ∈ S∩U}` ordered by reverse inclusion of `U`; no choice function needed **[D]** |
| continuity | continuous ⟺ net-continuous | **ZF** (same canonical-net trick) **[D]** |
| cluster points | = limits of convergent subnets | ZF |
| compact (nets) | ⟺ every net has a convergent subnet | ⇒ ZF; **⇐ needs AC** (choose a point outside each finite union, indexed by finite subfamilies) **[D]** |
| universal subnets | every net has an ultranet (Kelley) | **AC/Zorn** **[F]** |
| compact (filters) | ⟺ every filter has a cluster point ⟺ every filter has a convergent refinement | **ZF** — this is the FIP definition restated |
| compact (ultrafilters) | ⟺ every ultrafilter converges | ⇒ ZF; **⇐ needs UL** |
| ultrafilter existence | every proper filter extends to an ultrafilter | **UL = BPI**; independent of ZF; ⊊ AC; ⇏ AC_ω |

**Why sequences are the defective case:** they are nets on the single fixed directed set `ω`. Even in metric spaces, "closure = sequential closure" is **equivalent to AC_ω** (Herrlich Thm 2.4(1)); restricted to ℝ it is **AC_ω(ℝ)** (Thm 1.1(1)). nLab makes the same point: proving even ℝ is sequential "requires excluded middle and countable choice", which is exactly why constructive analysis works with nets and filters.

## A‑11. Compact ↮ sequentially compact (cross-reference)

**Compact, not sequentially compact:** `βω` (needs UL); `{0,1}^ℝ`, `[0,1]^[0,1]` (BPI). **Sequentially compact, not compact:** `[0,ω₁)`; the **closed long ray** `L = ω₁ × [0,1)` lexicographic with the order topology — "every increasing sequence in L converges to a limit in L"; "sequentially compact but not compact, nor even Lindelöf"; first countable, not second countable, not separable, normal Hausdorff, **not metrizable**, not paracompact; path-connected and simply connected but not contractible; the **extended** long ray `L*` (one-point compactification) **is** compact. The **long line** is two long rays glued back-to-back at their origins. Steen–Seebach **#45**.

Both sequentially-compact-not-compact examples rest on **regularity of ω₁**, i.e. **AC_ω**. In metric spaces all four compactness notions coincide "**assuming the axiom of countable choice**" — see the four-way split in Part D.

**(d)** [Long line (topology)](https://en.wikipedia.org/wiki/Long_line_(topology)) · [Countably compact space](https://en.wikipedia.org/wiki/Countably_compact_space)

## A‑12. ⚠ The "arrow space" — disambiguation

**Steen–Seebach contains no example named "arrow space" or "double arrow"** — I checked the full 143-item list. Three distinct spaces circulate under "arrow":

1. **The arrow (Alexandrov)** = `[0,1)` (or all of ℝ) with basis `{[a,b)}` = the **Sorgenfrey line**, Steen–Seebach **#51** "Right half-open interval topology". Wikipedia: "also known as the **arrow**". First countable, separable, Lindelöf, paracompact, perfectly normal, totally disconnected, **Baire**; **not** second countable, **not** metrizable (separable metric ⇒ second countable), **not** locally compact, **not** σ-compact; every compact subset is countable. Sequences converge strictly **from the right**: `x_α → L` iff eventually `L ≤ x_α < L + ε`, so `1/n → 0` but `−1/n ↛ 0`. First countable ⇒ **FU ⇒ sequential**. *(Note S&S #49/#50 "Right order topology" is a different, coarser space with basis `{(a,∞)}`.)* It is also a **Baire space that is not metrizable** — see B‑11.
2. **Double arrow space / split interval / two arrows** = the **lexicographic product `[0,1] × {0,1}`** with the order topology (split each `a` into `a⁻ < a⁺`); clopen basis `((a,b]×{0}) ∪ ([a,b)×{1})`. Zero-dimensional **compact** Hausdorff, linearly ordered, **separable**, hereditarily Lindelöf, hereditarily separable, perfectly normal (T6), **first countable**, **not** second countable, **not** metrizable ("its metrizable subspaces are all countable"); its **square is not hereditarily normal (T5)** — it contains a copy of the Sorgenfrey plane. Contains two copies of the Sorgenfrey line, "like two parallel arrows going in opposite directions". First countable ⇒ FU ⇒ sequential; compact + first countable ⇒ sequentially compact (DC).
3. **Lexicographic unit square** `I × I` (Steen–Seebach **#48**): first countable, compact, connected, **not separable** — frequently confused with (2).

**(d)** [Lower limit topology](https://en.wikipedia.org/wiki/Lower_limit_topology) · [Split interval](https://en.wikipedia.org/wiki/Split_interval) · [Dan Ma: The Lexicographic Order and The Double Arrow Space](https://dantopology.wordpress.com/2009/10/07/the-lexicographic-order-and-the-double-arrow-space/)

---

# PART B — METRIC SPACE COUNTEREXAMPLES

## B‑1. Completeness is NOT a topological property

**(a)** `ℝ` with `d(x,y) = |x−y|` is complete; `(0,1)` with the same formula is not (`1/n` is Cauchy with no limit in the space). They are homeomorphic, e.g. via `h(x) = (1/π)arctan(x) + 1/2`.

**(b) Refutes:** "completeness is a topological invariant"; "a homeomorphism preserves completeness". Verbatim **[F]**: *"Completeness is a property of the **metric** and not of the topology."*

**(c)** ZF.

**(d)** [Complete metric space](https://en.wikipedia.org/wiki/Complete_metric_space)

## B‑2. But complete METRIZABILITY *is* topological

**(a)** On `(0,1)`, the pullback metric

> **`d(x,y) = |tan(π(x−½)) − tan(π(y−½))|`**

is a metric inducing the usual topology (`x ↦ tan(π(x−½))` is a homeomorphism `(0,1) → ℝ`) and is **complete**. Wikipedia gives the variant `d'(x,y) = |arctan x − arctan y|` for the same purpose.

**(b)** Establishes: "**completely metrizable** is a topological property" **[F]** — so B‑1 refutes only the metric statement, not the topological one. Verbatim: *"Complete metrizability is a topological property while completeness is a property of the metric."*

**Alexandrov's theorem [F]:** a subspace of a completely metrizable space is completely metrizable **iff** it is a `G_δ` set. Equivalently, "completely metrizable spaces can be characterized as those that can be written as an intersection of countably many open subsets of some complete metric space". Hence `(0,1)` and `ℝ∖ℚ` are completely metrizable; **`ℚ` is not** (metrizable, `F_σ`, not `G_δ`). **Polish** = separable + completely metrizable; a space is Polish iff homeomorphic to a `G_δ` subset of the Hilbert cube. Completions are unique up to isometry **[F]**.

**(c)** ZF for the specific metric; Alexandrov's theorem is ZF **[K]**.

**(d)** [Completely metrizable space](https://en.wikipedia.org/wiki/Completely_metrizable_space) · [Polish space](https://en.wikipedia.org/wiki/Polish_space)

## B‑3. ⚠ Uniformly continuous bijection with non-uniformly-continuous inverse

**⚠ The brief's cube example is backwards.** `x ↦ x^{1/3}` **IS** uniformly continuous on ℝ. Proof **[D]**: for `u,v ≥ 0`, `u³ − v³ = (u−v)(u² + uv + v²) ≥ (u−v)³` since `u² + uv + v² ≥ (u−v)²  ⟺  3uv ≥ 0`; hence `|a^{1/3} − b^{1/3}| ≤ |a−b|^{1/3}`. *Numerically confirmed: for `δ = 10⁻³` the observed modulus of continuity is `0.0957 ≤ δ^{1/3} = 0.1`; for `δ = 10⁻⁶`, `1.58×10⁻⁴ ≤ 0.01`.* So the correct direction is:

> **`f(x) = x^{1/3}` is a uniformly continuous bijection ℝ → ℝ whose inverse `f^{-1}(x) = x³` is NOT uniformly continuous.**

`x³` fails because `|(n + 1/n)³ − n³| = 3n + 3/n + 1/n³ → ∞` while the gap `1/n → 0`. *(Verified: `30.30, 300.03, 3000.00` for `n = 10, 100, 1000`.)*

**Three more, all clean:**
- **`arctan : ℝ → (−π/2, π/2)`** — Lipschitz-1 (`|arctan′(x)| = 1/(1+x²) ≤ 1`), bijective; the inverse `tan` is not uniformly continuous (its derivative `sec²` blows up).
- **Identity between two metrics on ℕ [D]:** `d(m,n) = |m−n|`, `d'(m,n) = |1/m − 1/n|`. `id : (ℕ,d) → (ℕ,d')` is 1-Lipschitz since `|1/m − 1/n| = |m−n|/(mn) ≤ |m−n|`; the inverse is **not** uniformly continuous, since `d'(n, n+1) = 1/(n(n+1)) → 0` while `d(n,n+1) = 1`. *(Verified: `0.5, 0.00909, 9.90×10⁻⁵` for `n = 1, 10, 100`.)*
- **`id : ((0,1), d_tan) → ((0,1), |·|)`** is Lipschitz-`1/π` (since `|d/dx tan(π(x−½))| = π sec² ≥ π`); its inverse is not uniformly continuous.

**(b) Refutes:** "uniform continuity is preserved under inversion"; "a uniformly continuous bijection is a uniform isomorphism". The correct positive statement needs compactness of the domain or bi-Lipschitz-ness.

**(c)** ZF.

**(d)** [Uniform continuity](https://en.wikipedia.org/wiki/Uniform_continuity)

## B‑4. Contraction on an incomplete space with no fixed point

**(a)** `f(x) = x/2` on `X = (0,1]`. Then `|f(x) − f(y)| = ½|x−y|`, so `f` is a `½`-contraction, and `f(X) = (0,½] ⊆ X`. A fixed point requires `x = x/2`, i.e. `x = 0 ∉ X`.

Variants: `f(x) = x/2` on `ℚ ∩ (0,1]`; or on `ℚ`, any contraction whose unique real fixed point is irrational (e.g. iterating `x ↦ 1 + 1/x` toward the golden ratio, suitably restricted).

**(b) Refutes:** dropping **completeness** from the **Banach fixed-point theorem** — "every contraction mapping on a non-empty *complete* metric space has a unique fixed point", with `d(f(x),f(y)) ≤ k·d(x,y)`, `0 ≤ k < 1`. **[F]**

**(c)** ZF — Banach's theorem itself needs only the explicit recursion `x_{n+1} = f(x_n)`, which involves no choice since `f` is a function.

**(d)** [Contraction mapping](https://en.wikipedia.org/wiki/Contraction_mapping)

## B‑5. Strictly contractive on a COMPLETE space with no fixed point

**(a) Two explicit maps, both verified numerically.**

> **`f(x) = x + 1/x` on `X = [1, ∞)`** — closed in ℝ, hence **complete**.

`f(X) ⊆ [2,∞) ⊆ X`. For `x ≠ y` in `X`: `|f(x) − f(y)| = |x−y|·|1 − 1/(xy)|`, and since at most one of `x,y` equals 1, `xy > 1`, so `0 < 1 − 1/(xy) < 1`, giving **`|f(x)−f(y)| < |x−y|` strictly, for all `x ≠ y`**. A fixed point needs `x + 1/x = x`, i.e. `1/x = 0` — impossible. *(Sampled maximum ratio 0.9969, approaching but never reaching 1; `inf_x |f(x)−x| = 0`.)*

> **`g(x) = √(1 + x²)` on `X = ℝ`** — complete.

`g′(x) = x/√(1+x²)` with `|g′| < 1` **everywhere**, so by the mean value theorem `|g(x) − g(y)| = |g′(c)||x−y| < |x−y|` for all `x ≠ y`. A fixed point needs `√(1+x²) = x`, i.e. `1 + x² = x²` — impossible. *(Sampled max ratio 0.99999999; `g(x) − x = 1, 0.4142, 0.04988, 0.005, 0.0005` at `x = 0,1,10,100,1000` — tends to 0 but never attains it.)*

**(b) Refutes:** weakening Banach's *uniform* constant `k < 1` to the *pointwise* strict inequality `d(f(x),f(y)) < d(x,y)`. **Completeness alone does not rescue it.** The mechanism in both cases: `inf_x d(f(x),x) = 0` but the infimum is approached only "at infinity", where the space has no compactness.

**Edelstein's theorem (the positive counterweight) [D].** On a **compact** metric space, a map satisfying `d(f(x),f(y)) < d(x,y)` for all `x ≠ y` **does** have a unique fixed point: `φ(x) = d(f(x),x)` is continuous on a compact set, so attains its infimum at some `x₀`; if `φ(x₀) > 0` then `φ(f(x₀)) = d(f(f(x₀)), f(x₀)) < d(f(x₀), x₀) = φ(x₀)`, a contradiction. Uniqueness is immediate. ∎ *(Wikipedia's contraction-mapping article covers neither this nor the counterexamples — confirmed by fetch.)*

**(c)** ZF throughout.

## B‑6. Cantor intersection: exact hypotheses and all failure modes

**Theorem [F].** If `X` is a **complete** metric space and `(C_k)_{k≥1}` are **non-empty**, **closed**, **nested** (`C_1 ⊇ C_2 ⊇ ⋯`) with **`lim_{k→∞} diam(C_k) = 0`**, then

> **`⋂_{k=1}^∞ C_k = {x}` — exactly one point.**

Conversely, the property "the intersection of any nested family of non-empty closed subsets whose diameters tend to zero is non-empty" **characterises completeness**. **[F]**

**Failure mode 1 — drop `diam → 0`, keep completeness (unbounded):** `F_n = [n, ∞) ⊆ ℝ`. Non-empty, closed, nested, `⋂_n F_n = ∅`; `diam F_n = ∞`.

**Failure mode 1′ — drop `diam → 0`, keep completeness AND boundedness [D, verified].** Take `X = ℕ` with

> **`d(m,n) = 1 + 1/(m+n)` for `m ≠ n`, `d(n,n) = 0`.**

*Triangle inequality checked exhaustively over all triples in `{1,…,59}`: **0 violations*** (LHS `≤ 1.5` while RHS `> 2`, since each term exceeds 1). Distinct points are `> 1` apart, so every Cauchy sequence is eventually constant ⇒ **complete**; every subset is closed. Then `F_n = {n, n+1, …}` is non-empty, closed, **bounded**, nested, with `⋂_n F_n = ∅` and `diam F_n = 1 + 1/(2n+1) → 1 ≠ 0`. *(diam = 1.3333, 1.0909, 1.0099 for n = 1, 5, 50.)*

**Failure mode 2 — keep `diam → 0`, drop completeness:** in `ℚ`, take `F_n = {q ∈ ℚ : |q − √2| ≤ 1/n}`. Non-empty, closed in ℚ, **bounded**, nested, `diam F_n → 0`, and `⋂_n F_n = ∅`.

**(b)** Together these show **both** hypotheses are independently necessary, and that "bounded" cannot substitute for "`diam → 0`". Mode 2 is the "nested closed bounded sets with empty intersection in an incomplete space" the brief asked for.

**(c)** ZF.

**(d)** [Cantor's intersection theorem](https://en.wikipedia.org/wiki/Cantor%27s_intersection_theorem)

## B‑7. Totally bounded ≠ compact; bounded ≠ totally bounded

**Definition [F].** `(M,d)` is **totally bounded** if for every `ε > 0` there is a finite collection of open `ε`-balls covering `M`. **Theorem [F]:** a metric space is compact ⟺ **complete and totally bounded**; and "a metric space is totally bounded iff every sequence admits a Cauchy subsequence".

**Totally bounded, not compact:** `(0,1)`; `ℚ ∩ [0,1]`. Both sit inside the totally bounded `[0,1]`, and total boundedness is inherited by subsets; neither is complete (equivalently, neither is closed in `[0,1]`).

**Bounded, not totally bounded:**
- Any **infinite discrete** metric space **[F]**: "every discrete ball of radius `ε = 1/2` or less is a singleton, and no finite union of singletons can cover an infinite set."
- The **closed unit ball of `ℓ²`**: `{e_n}` is `√2`-separated (B‑15), so there is no finite `(√2/2)`-net. **[F]** "The unit ball in a Hilbert space is totally bounded (in the norm topology) if and only if the space has finite dimension."

**Boundedness is not a topological invariant.** `(ℝ, min(|x−y|, 1))` induces the **usual topology** (the two metrics agree below 1) yet **every** subset is bounded, with `diam ≤ 1`. So "bounded" is a property of the metric, never of the topology. Steen–Seebach **#134** "Bounded metrics". Wikipedia: "if the real line is not endowed with the usual metric, it may fail to have the Heine–Borel property."

**Heine–Borel property fails in [F]:** `ℚ` ("or indeed any incomplete metric space"); every infinite-dimensional Banach space; `(ℝ, min(d,1))`.

**(c)** Wikipedia flags: "**Without the axiom of choice, only the forward direction holds**" for "complete + totally bounded ⟺ compact". The precise picture is Herrlich's four-way split (Part D): "Heine–Borel-compact ⟺ complete + totally bounded", "sequentially compact ⟺ complete + totally bounded" and "Heine–Borel-compact ⟺ sequentially compact" are **each equivalent to AC_ω**; the easy directions (HB-compact ⟹ complete + totally bounded; complete + totally bounded ⟹ sequentially compact) are **ZF**.

**(d)** [Totally bounded space](https://en.wikipedia.org/wiki/Totally_bounded_space) · [Heine–Borel theorem](https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem)

## B‑8. ⚠ Same topology, different uniformity / different Cauchy sequences / one complete one not

**(a) The brief's example, corrected.** On `(0,∞)`, `d(x,y) = |x−y|` and `d'(x,y) = |1/x − 1/y|` induce the **same topology** (`x ↦ 1/x` is a self-homeomorphism of `(0,∞)`) and have **genuinely different Cauchy sequences**:

- `(1/n)` is `d`-Cauchy but **not** `d'`-Cauchy, since `d'(1/n, 1/m) = |n − m|`;
- `(n)` is `d'`-Cauchy but **not** `d`-Cauchy, since `d'(n,m) = |1/n − 1/m| → 0`.

**⚠ But neither metric is complete on `(0,∞)`** — `(1/n)` witnesses incompleteness for `d`, and `(n)` for `d'`. So this pair correctly illustrates "same topology, different **uniform structures** and different Cauchy sequences", but **does not** give "one complete, one not". For that, use:

**(b) One complete, one not, same topology — three clean pairs [D, verified]:**
- **`X = ℕ`:** `d(m,n) = |m−n|` is **complete** (Cauchy ⇒ eventually constant, since distinct points are ≥1 apart); `d'(m,n) = |1/m − 1/n|` is **incomplete** (`(n)` is `d'`-Cauchy with no `d'`-limit). Both induce the **discrete** topology. *This is the cleanest example in the entire list.*
- **`X = (0,1)`:** usual metric incomplete; the tan-pullback of B‑2 complete.
- **`X = (0,∞)`:** `d` incomplete; `ρ(x,y) = |x−y| + |1/x − 1/y|` **complete** — a `ρ`-Cauchy sequence is Cauchy for both `d` and `d'`, so `x_n → a ∈ [0,∞]` and `1/x_n` converges, forcing `a ∈ (0,∞)`; and `ρ` induces the usual topology since `ρ ≥ d` while `x ↦ 1/x` is `d`-continuous.

**(c) What all this establishes:** *completeness*, *Cauchy-ness*, *boundedness*, *total boundedness* and *uniform continuity* are invariants of the **metric/uniformity**, never of the topology. Their topological shadows are: **completely metrizable** (B‑2), **compact**, and "uniformisable". ZF throughout.

## B‑9. Completion strictly larger

- **`ℚ → ℝ`** — the completion of ℚ under `|·|` is ℝ. (Under `|·|_p` it is `ℚ_p` instead — see B‑13.)
- **`(C[0,1], ‖·‖₁) → L¹[0,1]` [D, verified numerically].** Take
  ```
  f_n(t) = 0            for 0 ≤ t ≤ 1/2
  f_n(t) = n(t − 1/2)   for 1/2 ≤ t ≤ 1/2 + 1/n
  f_n(t) = 1            for 1/2 + 1/n ≤ t ≤ 1
  ```
  Each `f_n ∈ C[0,1]` with `0 ≤ f_n ≤ 1`. Then `‖f_n − f_m‖₁ = |1/n − 1/m|/2` *(numerics match to 8 places: 0.02500000, 0.00250000, 0.00025000 for `(n,m) = (10,20), (100,200), (1000,2000)`)*, so `(f_n)` is `‖·‖₁`-Cauchy; and `‖f_n − χ_{(½,1]}‖₁ = ∫_{½}^{½+1/n}(1 − n(t−½))\,dt = 1/(2n) → 0`. **No continuous `h` can be the limit:** `h = χ_{(½,1]}` a.e. forces `h ≡ 0` left of ½ and `h ≡ 1` right of ½, contradicting continuity at ½. So **`(C[0,1], ‖·‖₁)` is incomplete**, with completion `L¹[0,1]` (`C[0,1]` is `‖·‖₁`-dense in `L¹` by Lusin/regularity **[K]**; `L¹` complete by Riesz–Fischer **[K]**).
- **`(c_00, ‖·‖_∞) → c_0`.**

**(b) Refutes:** "completeness is a property of the vector space" — the *same* `C[0,1]` is complete under `‖·‖_∞` and incomplete under `‖·‖₁`.

**(c)** The measure-theoretic ingredients sit at the usual ZF+DC level of analysis **[K]**.

## B‑10. Non-equivalent norms in infinite dimensions

**(a)** Norms are **equivalent** iff `∃C,D > 0` with `C‖x‖_α ≤ ‖x‖_β ≤ D‖x‖_α` (⟺ same topology). On `C[0,1]`: `‖f‖_∞ = max_t|f(t)|`, `‖f‖₁ = ∫₀¹|f|`; always `‖f‖₁ ≤ ‖f‖_∞`.

**Spike witnesses [D, verified]:**

> **`f_n(t) = max(0, 1 − nt)`: `‖f_n‖_∞ = 1` for every `n`, while `‖f_n‖₁ = 1/(2n) → 0`.** *(n = 1, 10, 1000 → L¹ = 0.5, 0.05, 0.0005.)*

So no constant `C` satisfies `‖f‖_∞ ≤ C‖f‖₁` (it would force `1 ≤ C/(2n)` for all `n`). Simpler family: `g_n(t) = (1−t)^n`, `‖g_n‖_∞ = 1`, `‖g_n‖₁ = 1/(n+1)`. On `c_00`, one family separates three norms at once: `x^{(n)} = (1,…,1,0,…)` with `n` ones has `‖·‖_∞ = 1`, `‖·‖₂ = √n`, `‖·‖₁ = n`.

**(b) Refutes:** "all norms on a vector space are equivalent"; and — pointedly — "**a continuous linear bijection has continuous inverse**": `id : (C[0,1], ‖·‖_∞) → (C[0,1], ‖·‖₁)` is a linear bijection of norm ≤ 1 whose inverse is unbounded. This does **not** contradict the bounded inverse theorem, because the target is **incomplete** (B‑9) — it isolates completeness as the real hypothesis.

**Theorem (finite dimensions) [F].** All norms on a finite-dimensional real or complex vector space are equivalent; consequently all Hausdorff TVS topologies on such a space coincide, it is Banach, and every linear map out of it is continuous.

**Is it ZF-provable? Yes [D, with F support].** Fix a basis, identify `X ≅ Kⁿ`, compare `‖·‖` with `‖x‖_∞ = max_i|x_i|`: `‖x‖ ≤ (Σ_i‖e_i‖)‖x‖_∞ = M‖x‖_∞`, so `‖·‖` is `M`-Lipschitz hence `‖·‖_∞`-continuous; the sphere `S = {‖x‖_∞ = 1}` is closed and bounded in `ℝⁿ` (or `ℝ^{2n}`), hence compact by **Heine–Borel**, which Wikipedia states outright "can be proved without the use of the axiom of choice" (it proves `[0,1]` compact directly and uses Tychonoff only for **finite** products). A continuous strictly positive function on a nonempty compact set attains a positive minimum `m`, giving `m‖x‖_∞ ≤ ‖x‖ ≤ M‖x‖_∞`. **All ZF.** *(Caveat: the **sequential** form of Heine–Borel in general metric spaces does need countable choice — "without AC there is a model of ZF in which ℝ has a sequentially compact subset that is neither closed nor bounded". The open-cover proof sidesteps this.)*

**(d)** [Norm (mathematics)](https://en.wikipedia.org/wiki/Norm_(mathematics)) · [Heine–Borel theorem](https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem) · [F. Riesz's theorem](https://en.wikipedia.org/wiki/F._Riesz%27s_theorem)

## B‑11. ⚠ Baire category: failures, and the corrected choice status

**Definition [F].** `X` is a **Baire space** if countable intersections of dense open sets are dense (⟺ countable unions of closed sets with empty interior have empty interior ⟺ every meagre set has empty interior).

**Failure:** **`ℚ` with the usual topology is NOT Baire** — it is meagre in itself, `ℚ = ⋃_{q∈ℚ}{q}`, a countable union of nowhere dense singletons, yet has nonempty interior in itself.

**An incomplete metric space that IS a Baire space:** `ℝ∖ℚ` with `d(x,y)=|x−y|`. **Incomplete** as a metric space (a sequence of irrationals converging to a rational is Cauchy with no limit in the space), but **completely metrizable** (`G_δ` in ℝ, by Alexandrov) hence **Baire**. This cleanly separates "complete metric" from "Baire space".

**A Baire *metric* space that is NOT completely metrizable:** a **Bernstein set** `B ⊆ ℝ` (meets every uncountable closed subset of ℝ but contains none) — construction needs **AC** (transfinite recursion of length 𝔠); not Borel, hence not `G_δ`, hence not completely metrizable. **[K for the Baire-ness — Wikipedia's Bernstein-set page does not state it; standard reference Oxtoby, *Measure and Category*.]** Non-metrizable Baire-but-not-completely-metrizable examples that Wikipedia *does* give **[F]**: the **Sorgenfrey line**, the Sorgenfrey plane, the Niemytzki plane.

**⚠ (c) THE CHOICE STATUS — this is four different principles, and I must correct the naive reading of "BCT1/BCT2".** Wikipedia's "BCT2: every locally compact regular space is a Baire space" is **NOT a ZF theorem**. The authoritative modern source is Herrlich & Keremedis, ["The Baire Category Theorem and choice"](https://www.sciencedirect.com/science/article/pii/S0166864199001327), *Topology Appl.* **108** (2000) 157–167.

| Variant | Status over ZF |
|---|---|
| Every **complete metric/pseudometric** space is Baire | **⟺ DC** (Blair 1977) |
| Every **Čech-complete** space is Baire; `X^ℕ` Baire for discrete `X`; **sequentially complete** / **Cantor complete** metric | **⟺ DC** |
| Products of compact Hausdorff / countably compact regular / Čech-complete spaces are Baire | **⟺ DC** |
| Hausdorff LCTVS: every **compact convex** subset is Baire | **⟺ DC** |
| Every **separable complete** (pseudo)metric space is Baire | **ZF-provable** — a countable dense set supplies a canonical enumeration for the nested-ball recursion |
| Every **totally bounded complete** ≡ **second-countable complete** pseudometric space is Baire | **⟺ AC_ω** |
| Every **countably compact pseudometric** space is Baire | **ZF-provable** |
| **Every compact Hausdorff space is Baire** | **⟺ DMC — NOT ZF-provable** |
| **Every locally compact regular (hence LCH) space is Baire** | **⟺ DMC** (HR [106 E], Bacsich 1972b) |
| Every **scattered compact** space is Baire | **⟺ DMC** (HR [106 C]) |

> **Blair 1977:** *The Baire category theorem implies the principle of dependent choices*, Bull. Acad. Polon. Sci. **25** (1977) 933–934 (MR 0469765). Also Goldblatt, *J. Symbolic Logic* **50** (1985) 412–422.
>
> **Fossy & Morillon 1998**, *J. London Math. Soc.* (2) **57** 1–19, [DOI](https://doi.org/10.1112/S0024610798005675). Abstract verbatim: *"the two following statements are equivalent: **DMC** (Dependent multiple choices) Every tree has a subtree whose levels are finite. **BC** (Baire for Compact spaces) Every compact Hausdorff space is a Baire space."*

**And the guess one would naturally make is false:** `[14][106] = 3` — **BPI does NOT imply BCT for compact Hausdorff / locally compact regular spaces**, witnessed by an explicit ZF model in Howard–Rubin. Also `[106][14] = 4` (DMC ⇏ BPI); `[43][106] = 1` (DC ⟹ DMC); `[8][106] = 3` (AC_ω ⇏ DMC); `[106][34] = 2` (DMC ⟹ ℵ₁ regular). Whether **DMC ⟹ DC** is **open in ZF**, and false in ZFA.

**Citation caution:** Herrlich's 1997 survey still lists BCT⟺DC as *open*, apparently unaware of Blair 1977. Also: the **Open Mapping Theorem does not imply BCT** (Fellhauer, *J. Log. Anal.* **9** (2017), [arXiv:1509.01078](https://arxiv.org/abs/1509.01078)).

**(d)** [Baire space](https://en.wikipedia.org/wiki/Baire_space) · [Baire category theorem](https://en.wikipedia.org/wiki/Baire_category_theorem) · [Axiom of dependent choice](https://en.wikipedia.org/wiki/Axiom_of_dependent_choice) · [Herrlich–Keremedis](https://www.sciencedirect.com/science/article/pii/S0166864199001327) · [Fossy–Morillon](https://academic.oup.com/jlms/article/57/1/1/887264)

## B‑12. ⚠ Closure of an open ball strictly smaller than the closed ball

**(a)** In a **discrete** metric space `X` with `|X| ≥ 2` (`d(x,y) = 1` for `x ≠ y`):

> **`cl(B(p,1)) = cl({p}) = {p}` but `B̄(p,1) = X`.**

Wikipedia verbatim **[F]**: "it is *not* always the case that `B_r(p)‾ = B_r[p]`… one has `B₁(p)‾ = {p}` but `B₁[p] = X` for any `p ∈ X`."

Another concrete one **[D]**: `X = {0} ∪ [1,2] ⊆ ℝ`, `p = 0`, `r = 1`. Then `B(0,1) = {0}` with closure `{0}`, while `B̄(0,1) = {0,1}`.

**⚠ Note on the brief's phrasing.** The two bullets ("closed balls are not the closure of open balls" and "closure of `B(x,r)` strictly smaller than the closed ball") are the **same** phenomenon. Moreover the containment always runs one way — `cl(B(x,r)) ⊆ B̄(x,r)` — so the closure can only ever be **smaller**, never larger. And in a **normed vector space** the two always coincide (scale toward the centre), so any counterexample must live outside the normed world; isolated points are the generic mechanism.

**(b) Refutes:** the reflex "the closed ball is the closure of the open ball", used silently in many arguments; and "spheres are the boundaries of balls" (in the discrete space, `∂B(p,1) = ∅` while the "sphere" `{x : d(x,p) = 1} = X∖{p}`).

**(c)** ZF.

**(d)** [Ball (mathematics)](https://en.wikipedia.org/wiki/Ball_(mathematics))

## B‑13. Ultrametrics and the p-adics

**(a) Ultrametric:** `d(x,z) ≤ max{d(x,y), d(y,z)}` (**strong triangle inequality**). Consequences, all verbatim **[F]**:
- **Every triangle is isosceles:** "at least one of the three equalities `d(x,y)=d(y,z)` or `d(x,z)=d(y,z)` or `d(x,y)=d(z,x)` holds. That is, every triple of points in the space forms an isosceles triangle."
- **Every point of a ball is a centre:** "Every point inside a ball is one of its centers, i.e. if `d(x,y) < r` then `B(x;r) = B(y;r)`."
- **All balls of strictly positive radius are clopen.**
- **Nesting, never partial overlap:** "if `B(x;r) ∩ B(y;s)` is non-empty then either `B(x;r) ⊆ B(y;s)` or `B(y;s) ⊆ B(x;r)`."

**p-adics [F].** `v_p(x)` = the exponent of `p` in `x` (`v_p(0) = ∞`); `|x|_p = p^{−v_p(x)}`, `|0|_p = 0`; `d_p(x,y) = |x−y|_p`. Strong triangle: `|x+y|_p ≤ max{|x|_p, |y|_p} ≤ |x|_p + |y|_p`. `ℚ_p` = the completion of ℚ under `d_p`: **complete, locally compact, totally disconnected**; `ℤ_p` is **compact**; "every open ball is also closed". Other ultrametric examples: the discrete metric; words over an alphabet with distance `2^{−n}`; the Baire space `ℕ^ℕ` (B‑17).

**(b) Refutes:** essentially every geometric reflex carried over from ℝⁿ — "balls have unique centres", "balls are connected", "clopen sets are trivial", "the triangle inequality is generically tight in one direction only", "a Cauchy sequence needs more than `d(x_n, x_{n+1}) → 0`" (in a *complete* ultrametric space that condition **suffices**). Also: **ℚ has completions other than ℝ** — by Ostrowski's theorem the only nontrivial absolute values on ℚ are `|·|_∞` and the `|·|_p` **[K; the fetched article does not state Ostrowski]**.

**(c)** ZF.

**(d)** [Ultrametric space](https://en.wikipedia.org/wiki/Ultrametric_space) · [p-adic number](https://en.wikipedia.org/wiki/P-adic_number)

## B‑14. Bounded + complete, not compact

- **Any infinite discrete metric space** (`d = 1` off the diagonal): diam 1, complete (Cauchy ⇒ eventually constant), not compact (singletons cover, no finite subcover).
- **`(ℝ, min(|x−y|,1))`:** the **usual topology**, **complete** (`min(d,1)`-Cauchy ⟺ `d`-Cauchy), **bounded** (diam ≤ 1), **not compact**.
- **Closed unit ball of `ℓ²`:** closed in a complete space hence complete, bounded, not compact.
- **The `(ℕ, 1 + 1/(m+n))` space of B‑6.**

**(b) Refutes:** "complete + bounded ⇒ compact" (the Heine–Borel property). The correct theorem requires **totally** bounded.

## B‑15. `ℓ²`: the closed unit ball is not compact — the explicit computation

**(a)** `e_n = (0,…,0,1,0,…)` (1 in slot `n`). For `n ≠ m`:

> **`‖e_n − e_m‖₂ = √(1² + 1²) = √2 ≈ 1.41421356`.**

So `(e_n) ⊆ B_{ℓ²} = {x : ‖x‖₂ ≤ 1}` is `√2`-separated: no subsequence is Cauchy, hence none converges. `B_{ℓ²}` is closed and bounded but **not compact** — being complete and bounded, what it precisely fails is **total boundedness**. Analogues: `‖e_n − e_m‖_p = 2^{1/p}` in `ℓ^p` (`p<∞`); `= 1` in `c_0`/`ℓ^∞`.

**(b) Refutes: Heine–Borel in infinite dimensions.** **[F]** "No infinite-dimensional Banach spaces have the Heine–Borel property (as metric spaces)."

**Riesz's lemma [F], verbatim.** *"Let `Y` be a closed proper vector subspace of a normed space `(X, ‖·‖)` and let `α` be any real number satisfying `0 < α < 1`. Then there exists a vector `u` in `X` of unit norm `‖u‖ = 1` such that `‖u − y‖ ≥ α` for all `y` in `Y`."* Proof: pick `v ∉ Y`, set `a = dist(v,Y) > 0` (positive since `Y` is closed); since `a/α > a`, choose `y₀ ∈ Y` with `a ≤ ‖v−y₀‖ ≤ a/α`; put `u = (v−y₀)/‖v−y₀‖`. (`α = 1` is attainable when `X` is reflexive, not in general.)

**F. Riesz's theorem [F].** A Hausdorff TVS over ℝ or ℂ is finite-dimensional ⟺ locally compact ⟺ some neighbourhood of 0 is relatively compact; for a normed space, further ⟺ **the closed unit ball is compact**.

**Standard `½`-separated construction [F]:** pick `x₁` on the unit sphere; let `Y_{n−1} = span{x₁,…,x_{n−1}}`; use Riesz's lemma to get `x_n` on the sphere with `dist(x_n, Y_{n−1}) > ½`; iterate. Then `‖x_n − x_m‖ > ½` for `n ≠ m`.

**(c) The AC status, sharply [D]:**
1. **Riesz's lemma itself is ZF** — it makes one existential instance (`∃y₀`), discharged by ∃-elimination, not a choice function. Likewise picking one `v ∈ X∖Y`.
2. **"Compact ball ⇒ finite-dimensional" is ZF** — from `B ⊆ ⋃_{x∈B}(x + ½B°)` extract a *finite* subcover `B ⊆ ⋃_{i≤n}(x_i + ½B)`, set `F = span{x_1,…,x_n}` (finite-dimensional hence closed), iterate `B ⊆ F + 2^{−k}B` for all `k` to get `B ⊆ F̄ = F`, and `X = ⋃_k kB ⊆ F`.
3. **"Infinite-dimensional ⇒ ball not compact" via the iterated Riesz construction uses DC** — one choice per stage; it also needs a countably infinite independent sequence, which in ZF does not follow from "not finite-dimensional" without DC.
4. **For separable `X`, DC is avoidable**: fix a countable dense `{d_k}` and at each stage take the **least** `k` with `dist(d_k, span{u_1..u_n}) ≥ ¾‖d_k‖`, then normalise — a definable recursion, pure ZF.
5. **In `ℓ^p`, `c_0` concretely, nothing is needed** — `(e_n)` is an explicit formula.

**(d)** [Riesz's lemma](https://en.wikipedia.org/wiki/Riesz%27s_lemma) · [F. Riesz's theorem](https://en.wikipedia.org/wiki/F._Riesz%27s_theorem) · [Compact space](https://en.wikipedia.org/wiki/Compact_space)

## B‑16. Complete, not compact, not locally compact

| space | complete | locally compact | refutes |
|---|---|---|---|
| `ℓ²`, `ℓ^p`, `c_0`, `c`, `C[0,1]`, any ∞-dim Banach | yes | **no** (Riesz) | "complete + closed + bounded ⇒ compact"; "complete ⇒ locally compact" |
| any infinite-dimensional Fréchet space | yes | **no** | Riesz for TVS |
| **Baire space `ℕ^ℕ`** | yes | **no, and nowhere so** | "Polish ⇒ σ-compact"; "complete + separable + zero-dimensional ⇒ locally compact" |
| `ℚ` (contrast) | **no** | no | closed+bounded ⇏ compact — but completeness already fails, so `ℓ²` is the sharper witness |

**Nowhere local compactness of `ℕ^ℕ` [D]:** every nonempty open set contains a cylinder `[s] ≅ ℕ^ℕ`, and `{[s⌢k] : k ∈ ℕ}` covers `[s]` by pairwise disjoint nonempty clopen sets with no finite subcover. Since closed subsets of compacta are compact, **no point has a compact neighbourhood**. **[F]** confirms "not locally compact".

**Wikipedia [F]:** "a compact ball/neighborhood exists if and only if `X` is finite-dimensional. In particular, no infinite-dimensional normed space can be locally compact."

## B‑17. The Baire space `ℕ^ℕ` ≅ the irrationals

**(a)** `ℕ^ℕ` = all infinite sequences of naturals, product topology (each factor discrete); basic clopen sets `[s] = {x : x↾|s| = s}` for finite `s`. Compatible **complete ultrametrics**:
- Wikipedia's **[F]**: `ρ(x,y) = 1/k` where `k` is "the least integer such that `x_k ≠ y_k`"; "basic open sets of the tree basis are balls of radius `1/k`".
- The standard variant **[D]**: `d(x,y) = 2^{−min{n : x_n ≠ y_n}}` for `x ≠ y`, `d(x,x) = 0`. A `d`-ball of radius `2^{−n}` is exactly the cylinder `[x↾n]`.

**Homeomorphism with the irrationals, explicitly [F]:**

> `(a_0, a_1, a_2, …) ↦ x = [1+a_0; 1+a_1, 1+a_2, …] = (1+a_0) + \dfrac{1}{(1+a_1) + \dfrac{1}{(1+a_2) + ⋯}}`

and "the map `x ↦ 1/x` provides another homeomorphism to irrationals in `(0,1)`". Equivalently with `ℕ = {1,2,…}`: `φ(a_1,a_2,…) = [0; a_1, a_2, …]`, a homeomorphism onto `(ℝ∖ℚ) ∩ (0,1)`.

**Why it works [D]:** (i) *bijection* — every irrational has a **unique** infinite simple continued fraction expansion, and every infinite such expansion converges to an irrational; (ii) *homeomorphism* — the cylinder `[a_1,…,a_n]` maps exactly onto the irrationals strictly between the consecutive convergents `p_n/q_n` and `(p_n+p_{n−1})/(q_n+q_{n−1})`, an interval of length `1/(q_n(q_n+q_{n−1})) ≤ 1/q_n² → 0`; so cylinders correspond to a neighbourhood basis of intervals, in both directions.

**Properties [F]:** **Polish** ("a completely metrizable second countable space with no isolated points"), zero-dimensional, totally disconnected, perfect, **not locally compact**; **"every Polish space is the continuous image of Baire space"**; homeomorphic to countable products of copies of itself; **Alexandrov–Urysohn characterization** — every zero-dimensional Polish space all of whose compact subsets have empty interior is homeomorphic to `ℕ^ℕ`. Confirmed independently: "The set of irrational numbers, equipped with the standard real line topology, is homeomorphic to the Baire space `ℕ^ℕ`."

**(b) Refutes:** "**completely metrizable = complete in the given metric**" — `ℝ∖ℚ` under the euclidean metric is **not** complete yet **is** completely metrizable; "complete ⇒ locally compact"; "Polish ⇒ σ-compact" (the irrationals are not `F_σ` in ℝ); "a totally disconnected metric space is small/discrete-like" (`ℕ^ℕ` is totally disconnected, perfect, and surjects continuously onto *every* Polish space).

**(c)** ZF — the continued-fraction map is explicit.

**(d)** [Baire space (set theory)](https://en.wikipedia.org/wiki/Baire_space_(set_theory)) · [Polish space](https://en.wikipedia.org/wiki/Polish_space)

## B‑18. Lipschitz ⊊ uniformly continuous ⊊ continuous

**Definitions [F].** Lipschitz: `d_Y(f(x₁),f(x₂)) ≤ K·d_X(x₁,x₂)`. Uniform continuity: `∀ε>0 ∃δ>0 ∀x,y (d₁(x,y)<δ ⇒ d₂(f(x),f(y))<ε)` — `δ` depends only on `ε`. Chain **[F]**: "Lipschitz continuous ⊂ absolutely continuous ⊂ uniformly continuous ⊂ continuous", and "Continuously differentiable ⊂ Lipschitz continuous ⊂ α-Hölder continuous".

- **Uniformly continuous, NOT Lipschitz:** `f(x) = √x` on `[0,1]`. **[F]** "is *not* Lipschitz continuous" (infinitely steep near 0) but "is uniformly continuous", and is Hölder with `α ≤ ½`. Also `x^{1/3}` on ℝ (B‑3), Hölder-⅓.
- **Continuous, NOT uniformly continuous:** `f(x) = x²` on ℝ (derivative unbounded); `e^x` on ℝ; `1/x` on `(0,1)` (unbounded on a bounded domain); `sin(1/x)` on `(0,1)`. **[F]**
- **Heine–Cantor [F]:** "Every continuous function on a compact set is uniformly continuous" — so every counterexample needs a non-compact domain.
- Bounded first derivative on an interval ⇒ Lipschitz. **[F]**

## B‑19. Uniform continuity extends to the completion; mere continuity does not

**[F]** "Uniformly continuous functions map Cauchy sequences to Cauchy sequences and extend uniquely to metric space completions."

**Failure for mere continuity:** `f(x) = 1/x` on `(0,1)` is continuous, sends the Cauchy sequence `(1/n)` to `(n)` — not Cauchy — and has **no continuous extension to `[0,1]`** (no limit at 0). `sin(1/x)` on `(0,1)` likewise (oscillates without limit).

**And the same example settles the brief's last bullet:** `f` maps the **bounded** set `(0,1)` onto the **unbounded** `(1,∞)` — so **the continuous image of a bounded set can be unbounded**. (Correct positive statement: continuous images of *compact* sets are compact, hence closed and bounded.)

## B‑20. Isometry vs homeomorphism; continuous bijections that are not homeomorphisms

- **Isometry ⇒ homeomorphism; converse false.** `[0,1]` and `[0,2]` are homeomorphic but not isometric (different diameters — an isometric invariant). `ℝ ≅ (0,1)` topologically, but no isometry exists (one is complete and unbounded, the other neither).
- **Continuous bijection, not a homeomorphism:** `γ : [0, 2π) → S¹`, **`γ(t) = (cos t, sin t)`**. Continuous and bijective; `γ^{-1}` is discontinuous at `(1,0)` — points just below `2π` map near `(1,0)` while their parameters approach `2π`, not `0`. *(Note `[0,2π)` is not compact: on a **compact** domain into a Hausdorff space, a continuous bijection **is** a homeomorphism.)*
- **`id : (ℝ, discrete) → (ℝ, usual)`:** continuous bijection whose inverse is discontinuous everywhere.
- **`id : (ℝ, τ_cocountable) → (ℝ, usual)`** (A‑8): continuous? No — that one goes the other way; the *cocountable-to-usual* identity is **not** continuous but is sequentially continuous. The continuous bijection here is `id : (ℝ, usual) → (ℝ, τ_cc)`? Also no. The clean discrete example above is the right one.

## B‑21. Continuous image of a closed set need not be closed

**(a)** `H = {(x,y) ∈ ℝ² : xy = 1}` (the hyperbola) is **closed** in ℝ² — it is the preimage of `{1}` under the continuous map `(x,y) ↦ xy`. The projection `π(x,y) = x` is continuous, and

> **`π(H) = ℝ∖{0}`, which is NOT closed.**

**(b) Refutes:** "continuous maps preserve closedness". The correct statements: continuous maps preserve **compactness** and **connectedness**; projections `ℝ^{m+n} → ℝ^m` are **open** but not closed in general; a projection *is* closed along a **compact** factor (the tube lemma).

**(c)** ZF.

---

# PART C — FUNCTIONAL ANALYSIS BASICS

## C‑1. The `ℓ^p` scale as a separating family

**(a) Definitions [F].** Over `K = ℝ` or `ℂ`:
- `ℓ^p = {x ∈ K^ℕ : Σ_{n≥1}|x_n|^p < ∞}`, `‖x‖_p = (Σ|x_n|^p)^{1/p}` for `1 ≤ p < ∞` — Banach.
- `ℓ^∞ = {x : sup_n|x_n| < ∞}`, `‖x‖_∞ = sup_n|x_n|` — Banach.
- `c = {x : lim_n x_n` exists`}`, `c_0 = {x : x_n → 0}`, both with `‖·‖_∞`; closed subspaces `c_0 ⊂ c ⊂ ℓ^∞`.
- `c_00 = {x : x_n = 0` for all but finitely many `n}` — **not closed** under `‖·‖_∞`, hence **incomplete**; dense in `ℓ^p` (`p<∞`) and in `c_0`.

**Strict inclusions [D].** For `p < q`, `ℓ^p ⊊ ℓ^q` with `‖x‖_q ≤ ‖x‖_p`. Witness: `x = (n^{−1/p})_{n≥1}` — `Σ|x_n|^p = Σ1/n = ∞` so `x ∉ ℓ^p`, while `Σ|x_n|^q = Σn^{−q/p} < ∞` since `q/p > 1`. (Wikipedia's witness: `(1/n) ∈ ℓ² ∖ ℓ¹`.)

**(b) Separability.** `ℓ^p` (`1≤p<∞`), `c_0`, `c` are **separable** — countable dense set `{x ∈ c_00 : x_n ∈ ℚ` (or `ℚ+iℚ)}`, plus a rational constant tail for `c`. **[F]** "the `ℓ^p` and `c_0` are separable, with the sole exception of `ℓ^∞`."

**`ℓ^∞` is NOT separable — the explicit uncountable 1-separated family [D]:** for `A ⊆ ℕ` let `χ_A ∈ ℓ^∞` be its indicator. For `A ≠ B`, pick `n ∈ A △ B`; then

> **`‖χ_A − χ_B‖_∞ = 1` for all `A ≠ B`**, a family of cardinality `2^{ℵ₀}`.

The balls `B(χ_A, ½)` are pairwise disjoint and uncountably many. If `D = {d_1,d_2,…}` were countable and dense, sending `A` to the least `k` with `d_k ∈ B(χ_A,½)` injects `𝒫(ℕ) ↪ ℕ`, contradicting Cantor. ∎ **Pure ZF.**

**Reflexivity [F].** *Reflexive:* `ℓ^p`, `L^p(μ)` for `1<p<∞`; all Hilbert spaces; all uniformly convex Banach spaces (Milman–Pettis); all finite-dimensional. *Not reflexive:* `ℓ¹`, `ℓ^∞`, `c_0`, `c`, `L¹(μ)`, `L^∞(μ)`, `C([0,1])`.

**Duals [F].** `(ℓ^p)* ≅ ℓ^q` isometrically for `1≤p<∞`, `1/p+1/q=1`, via `φ_y(x) = Σ x_n y_n`; `(c_0)* ≅ ℓ¹`; `(c)* ≅ ℓ¹` via `f(x) = a·lim_n x_n + Σ a_n x_n` with `‖f‖ = |a| + Σ|a_n|`; **`(ℓ^∞)* ≅ ba(2^ℕ)`** = bounded *finitely additive* signed measures on the full power set, total-variation norm — of which `ℓ¹ ≅ ca(2^ℕ)` (the countably additive ones) is a **proper** subspace.

**Explicit element of `(ℓ^∞)*` outside `ℓ¹`: a Banach limit `L` [F].** Defining properties: linear; positive (`x_n ≥ 0 ∀n ⇒ L(x) ≥ 0`); **shift-invariant** `L(Sx) = L(x)` where `(Sx)_n = x_{n+1}`; and `L(x) = lim_n x_n` for `x ∈ c`. Then `‖L‖ = 1` and `liminf x_n ≤ L(x) ≤ limsup x_n`. Existence: Hahn–Banach extension of `lim` from `c` to `ℓ^∞`, dominated by `p(x) = inf_{n≥1} sup_{k≥0} (1/n)Σ_{j=1}^n x_{k+j}`; or via a free ultrafilter.

**Why `L ∉ ℓ¹` [D]:** `e_k ∈ c_0 ⊂ c` with `lim e_k = 0`, so `L(e_k) = 0` for every `k`. If `L(x) = Σ x_n y_n` for some `y ∈ ℓ¹`, then `y_k = L(e_k) = 0` for all `k`, so `y = 0` and `L ≡ 0` — contradicting `L(1,1,1,…) = 1`. ∎ (More generally, *any* nonzero `f ∈ (ℓ^∞)*` vanishing on `c_0` works; such `f` exists by HB on the nonzero quotient `ℓ^∞/c_0`.)

**`ℓ¹` is a dual space; `c_0` is not.**
- `ℓ¹ = (c_0)*` and `ℓ^∞ = (ℓ¹)*`, so `ℓ¹` **is** a dual space.
- *Isometrically* **[D]:** `B_{c_0}` has **no extreme points** — if `‖x‖_∞ ≤ 1` and `x_n → 0`, choose `N` with `|x_N| < ½`; then `x ± ½e_N ∈ B_{c_0}` and `x` is their midpoint. But for any Banach `X`, `B_{X*}` is weak-* compact (Banach–Alaoglu) and convex in the locally convex Hausdorff `(X*, w*)`, so by Krein–Milman it **has** extreme points. Hence `c_0 ≇ X*` isometrically for any `X`.
- *Isomorphically* **[F]:** every **separable dual** has the **Radon–Nikodym property** (Dunford–Pettis), and `c_0` fails RNP — Wikipedia also notes "the unit ball of `c_0` contains no extreme points."

**Implications refuted:**

| implication | refuted by |
|---|---|
| "Banach ⇒ separable" | `ℓ^∞` |
| "`X` separable ⇒ `X*` separable" | `ℓ¹` separable but `(ℓ¹)* = ℓ^∞` not (the **true** direction is the converse) |
| "Banach ⇒ reflexive" | `ℓ¹, ℓ^∞, c_0, c, C[0,1], L¹, L^∞` |
| "duality is an involution" | `c_0** = ℓ^∞ ≠ c_0` |
| "every functional on `ℓ^∞` is an `ℓ¹` pairing" | Banach limit |
| "every separable Banach space is a dual space" | `c_0` |
| "the `p`-norms are equivalent" | `(n^{−1/p}) ∈ ℓ^q ∖ ℓ^p` |

**(c)** `ℓ^∞` non-separability and the dual identifications `(ℓ^p)* = ℓ^q`, `(c_0)* = ℓ¹`: **ZF** (explicit representations, no extension needed). Banach limits / `ℓ¹ ⊊ (ℓ^∞)*` / Mazur separation: **Hahn–Banach**, which follows from **BPI** and is strictly weaker than AC. **Banach–Alaoglu ⟺ BPI** (an equivalence — Karagila Thm 54; Schechter pp. 766–767), so Alaoglu is *strictly stronger* than HB. **Krein–Milman + Banach–Alaoglu ⟺ AC** (Bell–Fremlin 1972) — so if BPI holds and AC fails, Krein–Milman fails. Wikipedia's Banach-limit page: existence is "not provable in only Zermelo–Fraenkel set theory". *Unverified folklore, flagged:* that ZF+DC is consistent with `(ℓ^∞)* = ℓ¹`.

**(d)** [Sequence space](https://en.wikipedia.org/wiki/Sequence_space) · [ba space](https://en.wikipedia.org/wiki/Ba_space) · [Banach limit](https://en.wikipedia.org/wiki/Banach_limit) · [Radon–Nikodym property](https://en.wikipedia.org/wiki/Radon%E2%80%93Nikodym_property) · [Reflexive space](https://en.wikipedia.org/wiki/Reflexive_space)

## C‑2. `C[0,1]`

**(a)** `‖f‖_∞ = max_{t∈[0,1]}|f(t)|`; complete (uniform limits of continuous functions are continuous). Steen–Seebach **#108**.

**Separable [F]** — by **Weierstrass approximation** (if `f ∈ C[a,b]` and `ε>0` there is a polynomial `p` with `|f−p| < ε` uniformly), "the polynomial functions are dense, and each polynomial function can be uniformly approximated by one with rational coefficients; there are only countably many polynomials with rational coefficients."

**Dual [F]:** **Riesz–Markov–Kakutani** — for compact Hausdorff `X`, every `ψ ∈ C(X)*` is `ψ(f) = ∫_X f\,dμ` for a unique regular Borel measure, with `‖ψ‖ = |μ|(X)`. So `C[0,1]* ≅ rca([0,1])`.

**Not reflexive [F statement + D proof].** "When `X` is infinite, `C(X)` is not reflexive, nor is it weakly complete." Proof: `C[0,1]` contains an isometric copy of `c_0` — take bump functions `φ_n` with pairwise disjoint supports and `‖φ_n‖_∞ = 1`; then `(a_n) ↦ Σ a_nφ_n` is an isometry `c_0 ↪ C[0,1]`. Closed subspaces of reflexive spaces are reflexive, and `c_0` is not. ∎

**Not uniformly convex, not even strictly convex [D].** (Uniform convexity: `∀ε∈(0,2] ∃δ>0` with `‖x‖=‖y‖=1`, `‖x−y‖≥ε ⇒ ‖(x+y)/2‖ ≤ 1−δ`.) Take `f ≡ 1`, `g(t) = 1−t`: `‖f‖_∞ = ‖g‖_∞ = 1`, `‖f−g‖_∞ = 1`, yet `‖(f+g)/2‖_∞ = sup_t|1 − t/2| = 1`. So no `δ>0` works at `ε=1`. Analogues: in `c_0`, `x=(1,0,…)`, `y=(1,1,0,…)`; in `ℓ¹`, `x=e_1`, `y=e_2` with `‖x−y‖₁=2` but `‖(x+y)/2‖₁=1`. **Refutes** "Banach ⇒ uniformly convex" and the **converse of Milman–Pettis** (reflexive ⇏ uniformly convex; the standard witness is a renorming of Hilbert space **[K]**).

**Not a dual space [D + F]:** separable and contains `c_0`, hence fails RNP; every separable dual has RNP; so `C[0,1]` is **not isomorphic to any dual Banach space**. *(Isometrically: `C(K)` is a dual iff `K` is hyperstonean, and `[0,1]` is not even extremally disconnected **[K]**.)*

**Banach–Mazur theorem [F]:**

> **Every real separable Banach space `(X,‖·‖)` is isometrically isomorphic to a closed subspace of `C([0,1], ℝ)`.**

Refinements listed there: for non-separable `X`, `X` embeds isometrically in `C(K)` for some compact Hausdorff `K`; **Kleiber–Pervin (1969)** — a metric space of infinite density `α` is isometric to a subspace of `C([0,1]^α, ℝ)`; **Rodríguez-Piazza (1995)** — the embedding can be chosen so every nonzero function in the image is **nowhere differentiable**. Original: Banach, *Théorie des opérations linéaires*, Monografie Matematyczne 1, Warszawa 1932 **[K for the year]**. Also fetched: "The Banach–Alaoglu theorem implies that any normed space is isometrically isomorphic to a subspace of `C(X)` for some `X`."

**Consequence:** `C[0,1]` is *universal* for separable Banach spaces — so Enflo's basis-free space (C‑6) embeds isometrically in it, which **refutes** "a closed subspace of a space with a Schauder basis has a Schauder basis" (`C[0,1]` has the Faber–Schauder basis **[K]**).

**`(C[0,1], ‖·‖₁)` is incomplete with completion `L¹[0,1]`** — see B‑9 for the explicit Cauchy sequence.

**(d)** [Continuous functions on a compact Hausdorff space](https://en.wikipedia.org/wiki/Continuous_functions_on_a_compact_Hausdorff_space) · [Banach–Mazur theorem](https://en.wikipedia.org/wiki/Banach%E2%80%93Mazur_theorem) · [Stone–Weierstrass theorem](https://en.wikipedia.org/wiki/Stone%E2%80%93Weierstrass_theorem) · [Riesz–Markov–Kakutani](https://en.wikipedia.org/wiki/Riesz%E2%80%93Markov%E2%80%93Kakutani_representation_theorem) · [Uniformly convex space](https://en.wikipedia.org/wiki/Uniformly_convex_space)

## C‑3. ⚠ Discontinuous linear functionals — the completeness dividing line, with the corrected AC story

**(i) On `c_00`: fully explicit, ZF, NO choice [D].** `c_00` with `‖x‖_∞` is **normed but incomplete** (completion `c_0`). Define

> **`f : c_00 → K`, `f(x) = Σ_{n=1}^{∞} n·x_n`.**

The sum is **finite** for each `x ∈ c_00`, so `f` is well-defined, **everywhere defined** and linear. It is **unbounded**: `f(e_n) = n` while `‖e_n‖_∞ = 1`, so `‖f‖ = ∞`. Discontinuous at 0: `u_n = e_n/√n → 0` in `‖·‖_∞` but `f(u_n) = √n → ∞`. **No axiom of choice whatsoever** — `c_00` has the explicit countable Hamel basis `(e_n)`. Wikipedia records the same phenomenon: "the summation functional on `c_00` … is bounded with norm 1 under the `ℓ¹` norm but unbounded under the `ℓ^∞` norm." **[F]**

Two more explicit ZF examples: on polynomials `P ⊂ (C[0,1], ‖·‖_∞)`, `T(p) = p′(1)` with `p_n(t)=t^n` giving `‖p_n‖_∞=1`, `T(p_n)=n`; and **[F]** on `C^∞[0,1]`, `T(f) = f′(0)` with `f_n(x) = sin(n²x)/n`: `‖f_n‖_∞ ≤ 1/n → 0` but `T(f_n) = n → ∞`. Wikipedia: *"The fact that the domain is not complete here is important."*

**(ii) On an infinite-dimensional BANACH space: choice is unavoidable [F].** Take a **Hamel basis**, pick normalised independent `(e_n)`, set `T(e_n) = n‖e_n‖` and `T = 0` on the rest, extend linearly; `u_n = e_n/(n‖e_n‖)` has `‖u_n‖ = 1/n → 0` with `T(u_n) = 1`. Wikipedia verbatim: *"by using the fact that any set of linearly independent vectors can be completed to a basis, we implicitly used the axiom of choice, which was not needed for the concrete example in the previous section."* That extension step is **HR 109**, equivalent to **AC**.

**The consistency result [F].**

> Wikipedia (Discontinuous linear map): *"there are no constructive examples of discontinuous linear maps with complete domain (for example, Banach spaces)"*; *"it is consistent with set theory without AC that there are no discontinuous linear maps on complete spaces"*; Solovay's model, in which every set of reals is Lebesgue measurable, "implies no discontinuous linear real functions exist"; and H. G. Garnir *"was led to adopt ZF + DC + BP … to prove the **Garnir–Wright closed graph theorem**."*

**Solovay / Shelah, precisely.** **Solovay 1970** (*A model of set-theory in which every set of reals is Lebesgue measurable*, Ann. of Math. (2) **92**, 1–56): assuming an **inaccessible cardinal**, there is an inner model of **ZF + DC** in which every set of reals is Lebesgue measurable, has the Baire property, and has the perfect set property. **Shelah 1984** (*Can you take Solovay's inaccessible away?*, Israel J. Math. **48**, 1–47): the inaccessible **cannot be dropped** for measurability (if every `Σ¹₃` set is measurable then `ℵ₁` is inaccessible in `L`), but **is unnecessary** for the Baire-property version — `Con(ZF) ⟹ Con(ZF + DC + BP)`. Companion: Raisonnier, Israel J. Math. **48** (1984) 48–56.

**⚠ CORRECTED CITATIONS.** **J. D. Maitland Wright, "All operators on a Hilbert space are bounded", Bull. Amer. Math. Soc. 79 (1973), no. 6, 1247–1250** — the date is **1973**, not 1977, and the venue is Bull. AMS. **Garnir 1974** = *Solovay's axiom and functional analysis*, Proc. Sympos. Functional Analysis (Istanbul 1973), pp. 57–68. Wright's theorem verbatim: *"Let `H` be a Hilbert space and let `T : H → H` be a linear operator defined on the whole of `H`. Then `T` is bounded"* — proved in **ZF + DC + BP**. The general theorem (Karagila Cor. 28; Schechter Th. 27.45): **under DC + BP, every linear map from a Fréchet (in particular Banach) space into a normed space is continuous**; corollary, every solution of Cauchy's functional equation is continuous; and in Shelah's model any two complete norms on a vector space are equivalent.

**⚠ CORRECTION — "HB ⟹ a discontinuous linear functional" is an OPEN PROBLEM.** It is tempting to say Hahn–Banach supplies one; Howard & Rubin record the question as **unknown**:
- `[52][367] = 0` — whether **HB ⟹ a Hamel basis for ℝ over ℚ** is **OPEN**.
- `[52][366] = 0` — whether **HB ⟹ a discontinuous additive `f : ℝ → ℝ`** is **OPEN**.
- `[14][367] = [14][366] = 0` — **same questions for BPI are OPEN**.
- `[52][110] = 4`, `[52][109] = 4`, `[14][109] = 4` — HB does *not* give "every ℚ-vector space has a basis", and neither HB nor BPI gives "every independent set extends to a basis".

**What *is* provable, and is the correct thing to assert:**
- **HB is incompatible with BP.** In ZF, HB yields a nonzero functional on `ℓ^∞/c_0`, hence a finitely additive probability charge on `𝒫(ℕ)` vanishing on finite sets, hence (Oxtoby zero-one law) **a set of reals without the Baire property** (`[52][142] = 1`, `[52][280] = 2`). So HB fails in the Solovay and Shelah models — that is the honest link to automatic continuity, and it does **not** produce a discontinuous functional.
- **Converse:** over ZF+DC, "there is a discontinuous linear map out of a Banach space" ⟹ ¬BP ⟹ a set of reals without BP.
- **Luxemburg–Väth** (Z. Anal. Anwendungen **20** (2001) 267–279): over ZF, **HB ⟺ "every non-trivial normed space has a nonzero bounded functional"**. So if HB fails, some Banach space has trivial continuous dual.
- **Why HB structurally cannot bridge the gap [D]:** with only **DC** one builds a normalised independent `(u_n)` in Banach `X` and an unbounded `f` on the *dense, non-closed, incomplete* subspace `span{u_n}` (`f(u_n)=n`). The obstruction is **extending** `f` to all of `X`: HB extends only *dominated* functionals, so one needs an algebraic complement — a Hamel basis — i.e. AC.

**Closed graph [F]:** "an *everywhere-defined* closed operator on a complete domain is continuous", so a discontinuous **closed** operator must be densely (not everywhere) defined. Canonical example: `D = d/dx : C¹[0,1] ⊂ C[0,1] → C[0,1]`, with `f_n(x) = sin(2πnx)`, `‖f_n‖_∞ = 1`, `‖Df_n‖_∞ = 2πn → ∞`. `D` is densely defined (Weierstrass) and **closed** (uniform convergence of `f_n` and `f_n′` gives `f ∈ C¹`, `f′ = g`) but unbounded; it cannot extend to all of `C[0,1]` since continuous nowhere-differentiable functions exist. Wikipedia: "although the derivative operator is not continuous, it is closed."

**Hamel basis cardinality.** **[F]** In an infinite-dimensional Banach space "any Hamel basis is necessarily uncountable" — by **BCT**: a countable basis would give `X = ⋃_n span{b_1..b_n}`, a countable union of closed nowhere-dense proper subspaces. Explicit `≥ 𝔠` witness in `ℓ^p` **[D]**: `v_t = (t, t², t³, …)` for `t ∈ (0,1)`; any finite subfamily is independent since the matrix `(t_i^j)` is Vandermonde-type. Exactly `𝔠` for separable `X` (Lacey, Amer. Math. Monthly **80** (1973) 298) **[K]**. **Consequence:** no Hamel basis of `ℓ²` is definable in ZF+DC — precisely why (ii) is choice-dependent.

**⚠ Note on "every vector space has a basis ⟺ AC" (Blass 1984).** Blass's proof shows it implies **MC** (multiple choice), and **MC ⟹ AC uses the axiom of Foundation** (a rank argument). Over ZF⁰/ZFA there are permutation models with MC and ¬AC, which is why Howard–Rubin flag `[66][1]`, `[110][1]`, `[109][1]`, `[67][1]` with ZF⁰-sensitive codes rather than plain "1". **And a Hamel basis for the single space ℝ over ℚ (HR 367) is far weaker:** `[367][1] = 4`, `[367][14] = 4`, `[367][43] = 4` — it implies **neither AC nor BPI nor DC**; and `[43][367] = 4`, DC does not give one. It *does* give a discontinuous additive function (`[367][366] = 1`) and a non-measurable set (`[367][93] = 2`, Sierpiński: an additive function is linear iff measurable).

**The sharp dividing line:**

| domain | discontinuous everywhere-defined linear functional | choice |
|---|---|---|
| `c_00` with `‖·‖_∞` (normed, **incomplete**) | `f(x) = Σ n x_n` | **none — ZF** |
| infinite-dimensional **Banach** | exists under AC | **not provable in ZF+DC** — consistently none exist |

**(d)** [Discontinuous linear map](https://en.wikipedia.org/wiki/Discontinuous_linear_map) · [Solovay model](https://en.wikipedia.org/wiki/Solovay_model) · [Unbounded operator](https://en.wikipedia.org/wiki/Unbounded_operator) · [Bounded operator](https://en.wikipedia.org/wiki/Bounded_operator) · [Basis (linear algebra)](https://en.wikipedia.org/wiki/Basis_(linear_algebra)) · [Karagila, Zornian Functional Analysis](https://arxiv.org/abs/2010.15632)

## C‑4. The Hilbert cube

**(a)** Two standard models **[F]**: the product `Q = [0,1]^ℕ` with the product topology; and the `ℓ²`-model `H = ∏_{n≥1}[0, 1/n] = {x ∈ ℓ² : 0 ≤ x_n ≤ 1/n}` with the `ℓ²` metric ("the Hilbert cube inherits a metric from there, with the induced topology matching the product topology"). These are homeomorphic. Steen–Seebach **#38**.

Compatible metric on the product model **[D]**:

> **`d(x,y) = Σ_{n=1}^∞ 2^{−n}|x_n − y_n|`** (converges, `≤ 1`).

It induces exactly the product topology: `d(x,y) < 2^{−N}` forces `|x_n−y_n| < 2^{n−N}` for `n ≤ N`; conversely controlling coordinates `1..N` to within `ε` gives `d < ε + 2^{−N}`.

**Properties [F]:** **compact** (Tychonoff), **metrizable**, second countable, connected, no isolated points, infinite topological dimension. **Universality (Urysohn):** "Every second countable T₄ space is homeomorphic to a subset of the Hilbert cube" — equivalently **every separable metrizable space embeds in `[0,1]^ℕ`** (nLab sharpens this to an *iff*). "Every Polish space is homeomorphic to a `G_δ`-subset of the Hilbert cube." (Urysohn metrization: every second-countable regular Hausdorff space is metrizable.)

**Homogeneity [F]:** nLab — "the Hilbert cube … is **homogeneous**, meaning its automorphism group acts transitively on it, even though it seems to have a 'boundary'" (citing Chapman, *Lectures on Hilbert Cube Manifolds*, 1975; Halverson & Wright). **Keller's theorem:** Wikipedia — "any infinite-dimensional, compact, convex subset of `ℓ₂` … is homeomorphic to the Hilbert cube"; classical reference O.-H. Keller, Math. Ann. **105** (1931) 748–758 **[K]**, extended to Fréchet spaces by Klee / Bessaga–Pełczyński **[K]**.

**(b) Refutes:** "a product of intervals has a topologically distinguished boundary" — true for `[0,1]^n` by invariance of domain, **false** at `n = ∞`: corners, edges and interior points of `Q` are topologically indistinguishable.

**(c) Compactness of `Q` needs NO choice [D]:** `2^ℕ` is compact in ZF (homeomorphic to the Cantor set, closed and bounded in `[0,1]`, and Heine–Borel for `[0,1]` is choice-free **[F]**); fix a bijection `ℕ×ℕ → ℕ` to get `2^ℕ ≅ (2^ℕ)^ℕ`; binary expansion gives a continuous surjection `2^ℕ ↠ [0,1]`, hence `(2^ℕ)^ℕ ↠ [0,1]^ℕ`; continuous images of compacta are compact. *(Prefer this to the diagonal-subsequence argument, which implicitly uses DC.)* Urysohn metrization needs essentially AC_ω **[K]**.

**(d)** [Hilbert cube](https://en.wikipedia.org/wiki/Hilbert_cube) · [nLab: Hilbert cube](https://ncatlab.org/nlab/show/Hilbert+cube) · [Urysohn's metrization theorem](https://en.wikipedia.org/wiki/Urysohn%27s_metrization_theorem)

## C‑5. Weak-topology pathologies

**(a)** The **weak topology** `σ(X, X*)` on a normed space is the coarsest making every `f ∈ X*` continuous; basic neighbourhoods `V(x_0; f_1,…,f_n; ε) = {x : |f_i(x−x_0)| < ε, i ≤ n}`.

- **`e_n ⇀ 0` weakly in `ℓ²` but `‖e_n‖ = 1` [F + D]:** for every `y ∈ ℓ² = (ℓ²)*`, `⟨e_n,y⟩ = y_n → 0` since `Σ|y_n|² < ∞`; yet `‖e_n − 0‖₂ = 1`. **Refutes** "weak convergence ⇒ norm convergence". *Sharpening* **[K]**: in `ℓ¹`, weak and norm convergence of **sequences** coincide (**Schur's property**) even though the topologies still differ — so sequences alone cannot detect the difference.
- **Not metrizable in infinite dimensions [F + D]:** Wikipedia — "the weak topology is not metrizable on the entire space", and "**every weakly open set in infinite-dimensional normed spaces is unbounded**". Proof: a basic neighbourhood of `x_0` contains `x_0 + ⋂_{i≤n} ker f_i`, a subspace of codimension `≤ n`, hence infinite-dimensional and unbounded. A metrizable topology has bounded sets (balls), so `σ(X,X*)` is not metrizable — not even first countable, and **not sequential**. Positive results **[F]**: `X` separable ⟺ weak-* topology on `B_{X*}` metrizable; the weak topology restricted to bounded sets is metrizable when `X*` is separable.
- **Weak closure of the unit SPHERE = the closed unit BALL [F + D].** `⊆`: `B_X` is convex and norm-closed hence weakly closed (Mazur, via HB separation). `⊇`: let `‖x_0‖<1` and `V = {|f_i(x−x_0)|<ε, i≤n}`; `Z = ⋂_{i≤n} ker f_i ≠ {0}` (finite codimension in infinite dimensions); pick `z ∈ Z∖{0}`; `t ↦ ‖x_0+tz‖` is continuous, `<1` at `t=0`, `→∞` as `t→∞`, so by IVT some `t` gives `‖x_0+tz‖ = 1`, and `x_0+tz ∈ V` since `f_i(tz)=0`. ∎ **Refutes** "the unit sphere is weakly closed" and "closure is unchanged in a coarser topology". Combined with Schur **[K]**: in `ℓ¹`, `0 ∈ cl_w(S_{ℓ¹})` although **no sequence** in `S_{ℓ¹}` converges weakly to 0.
- **Eberlein–Šmulian [F]** rescues sequences on the compactness side: for `A ⊆ X` Banach, "every sequence in `A` has a weakly convergent subsequence" ⟺ "every sequence in `A` has a weak cluster point" ⟺ "the weak closure of `A` is weakly compact".
- **Companions [F]:** **Kakutani** — `X` reflexive ⟺ `B_X` weakly compact ⟺ every bounded sequence has a weakly convergent subsequence. **Goldstine** — `J(B_X)` is weak-*-dense in `B_{X**}` (false for the norm topology; witness `c_0` inside `ℓ^∞`). **Banach–Alaoglu** — `B_{X*}` is weak-* compact.

**(c)** Rests on **Hahn–Banach** (separation/Mazur) and, for Alaoglu, on **Tychonoff for compact Hausdorff**, i.e. **BPI** — and in fact **Banach–Alaoglu ⟺ BPI**. Sequential Alaoglu for separable `X` needs only **DC**.

**(d)** [Weak topology](https://en.wikipedia.org/wiki/Weak_topology) · [Eberlein–Šmulian theorem](https://en.wikipedia.org/wiki/Eberlein%E2%80%93%C5%A0mulian_theorem) · [Banach–Alaoglu theorem](https://en.wikipedia.org/wiki/Banach%E2%80%93Alaoglu_theorem) · [Goldstine theorem](https://en.wikipedia.org/wiki/Goldstine_theorem)

## C‑6. Non-reflexivity, James's theorem, the James space, Enflo

**James's theorem [F].**

> **A *Banach* space `X` is reflexive ⟺ every `f ∈ X*` attains its norm on the closed unit ball**: `∃a ∈ X`, `‖a‖ ≤ 1`, `f(a) = ‖f‖`.

"The hypothesis of completeness in the theorem cannot be dropped." History: James (1957) for separable spaces, *Ann. of Math.* **66**, 159–169; Klee (1962) reformulation; James (1964) general case, *Trans. AMS* **113**, 129–140 **[K for the 1964 details]**. **Kakutani [F]:** reflexive ⟺ `B_X` weakly compact.

**Explicit non-attaining functional on `c_0` [D]:** `f(x) = Σ_{n≥1} 2^{−n}x_n ∈ (c_0)* = ℓ¹` with `‖f‖ = Σ2^{−n} = 1`. For any `x ∈ B_{c_0}`, since `x_n → 0` there is `N` with `|x_N| < 1`, so `|f(x)| ≤ Σ2^{−n}|x_n| < 1` — **the supremum 1 is never attained**, matching non-reflexivity of `c_0`.

**Bishop–Phelps (the positive counterweight) [F]:** for a bounded closed convex `B` in a real Banach space, the set of `f ∈ X*` attaining their supremum on `B` is **norm-dense** in `X*`. So the correct picture is "dense but not everything, unless reflexive" — refuting both "all functionals attain" and "the attaining ones are a small/nowhere-dense set".

**The James space `J` [F].**

> `J = {x ∈ c_0 : ‖x‖_J < ∞}`, where for `p = (p_1 < ⋯ < p_{2n+1})` of **odd** length,
> **`‖x‖_p = ( x_{p_{2n+1}}² + Σ_{m=1}^{n} (x_{p_{2m−1}} − x_{p_{2m}})² )^{1/2}`**, and **`‖x‖_J = sup_{p} ‖x‖_p`.**

*(The commonly quoted equivalent "quadratic variation" form is `sup{(Σ_{k=1}^{n−1}(x_{p_k} − x_{p_{k+1}})²)^{1/2}}` **[K]**; the odd-length version above is the one giving the isometry with the bidual.)*

Properties **[F]:** Banach, **separable**, with a **monotone, shrinking, conditional (not unconditional) Schauder basis** (the unit vectors); **not reflexive**, with `J(J)` of **codimension one** in `J**` (quasi-reflexive of order 1); **isometrically isomorphic to its bidual `J**`** — but *not* via the canonical map; "somewhat reflexive" (every infinite-dimensional closed subspace contains an infinite-dimensional reflexive subspace); contains no isomorphic copy of `c_0` or `ℓ¹` **[K]**. Citation **[F]:** R. C. James, *A Non-Reflexive Banach Space Isometric With Its Second Conjugate Space*, PNAS **37** (3) (1951) 174–177.

**(b) Refutes:** "a Banach space isometrically isomorphic to its bidual is reflexive." Wikipedia verbatim: *"for a Banach space to be reflexive, it is not enough for it to be isometrically isomorphic to its bidual; **it is the canonical evaluation map in particular that has to be** a homeomorphism."* This is exactly why reflexivity must name the canonical map `J`.

**Enflo 1973 [F].**

> **There is a separable, reflexive Banach space failing the approximation property, hence with no Schauder basis.** P. Enflo, *A counterexample to the approximation property in Banach spaces*, **Acta Mathematica 130** (1973) 309–317.

**AP [F]:** every compact operator is a limit of finite-rank operators; equivalently for every compact `K` and `ε>0` there is finite-rank `T` with `‖Tx − x‖ ≤ ε` on `K`. A **Schauder basis** (`v = Σα_n b_n`, uniquely) gives the bounded AP via `v = lim P_n v`, so "no AP ⟹ no basis". A Banach space with a Schauder basis is separable, but **not conversely** — Enflo's space is the witness. History: Mazur's live goose (Scottish Book 1936), delivered 1972; framework from Grothendieck, Mem. AMS **16** (1955). **Szankowski (1981):** `B(H)` fails AP. Classical spaces *with* AP: Hilbert spaces, all `ℓ^p`, `c_0` — but `ℓ^p (p≠2)` and `c_0` have **closed subspaces without AP**, so AP is not hereditary.

**(b) Refutes:** "every separable Banach space has a Schauder basis" (Banach's basis problem); "every Banach space has AP"; "a closed subspace of a space with a basis has a basis" (also via Banach–Mazur embedding Enflo's space into `C[0,1]`).

**(d)** [James's theorem](https://en.wikipedia.org/wiki/James%27s_theorem) · [James space](https://en.wikipedia.org/wiki/James_space) · [Bishop–Phelps theorem](https://en.wikipedia.org/wiki/Bishop%E2%80%93Phelps_theorem) · [Schauder basis](https://en.wikipedia.org/wiki/Schauder_basis) · [Approximation property](https://en.wikipedia.org/wiki/Approximation_property)

---

# PART D — CONSOLIDATED SET-THEORETIC LEDGER (corrected)

**Metric compactness splits FOUR ways, not three** (Herrlich 1997 §2, after Bentley–Herrlich): **Heine–Borel-compact** (open covers), **Weierstraß-compact** (infinite subsets have accumulation points), **Alexandroff–Urysohn-compact** (infinite subsets have *complete* accumulation points), **sequentially compact**.

- **ZF-provable:** HB-cpt ⟹ Weierstraß-cpt; HB-cpt ⟹ complete + totally bounded; AU-cpt ⟹ Weierstraß-cpt; Weierstraß-cpt ⟹ seq. cpt; complete + totally bounded ⟹ seq. cpt. **Sequential compactness is the weakest in ZF.**
- **Thm 2.3:** "Weierstraß-cpt ⟺ seq. cpt" **⟺ HR 9** ("finite ⟺ Dedekind-finite").
- **Thm 2.4 — all ⟺ AC_ω:** "HB-cpt ⟺ seq. cpt"; "HB-cpt ⟺ complete + totally bounded"; "seq. cpt ⟺ complete + totally bounded"; "Weierstraß-cpt ⟺ complete + totally bounded"; sequential continuity ⟹ continuity (metric domain); "closure = sequential closure" (metric); accumulation point ⟺ sequential limit (metric); totally bounded ⟹ separable; separable ⟺ Lindelöf ⟺ countable base; complete ⟺ every Cauchy filter converges; BCT for complete totally bounded pseudometric spaces.
- **Thm 2.5:** "**Alexandroff–Urysohn-cpt ⟺ Heine–Borel-cpt**" **⟺ full AC**.

| Statement | Status |
|---|---|
| Cocountable: "convergent ⇒ eventually constant" | **ZF** |
| `[0,1]^[0,1]` not sequentially compact (explicit diagonal) | **ZF** |
| Arens space, Arens–Fort, sequential fan (all properties) | **ZF** |
| `ℕ^ℕ ≅ irrationals` (continued fractions) | **ZF** |
| `‖e_n−e_m‖₂ = √2`; `B_{ℓ²}` not compact | **ZF** |
| `ℓ^∞` not separable; `(ℓ^p)* = ℓ^q`; `(c_0)* = ℓ¹` | **ZF** |
| Discontinuous functional on `c_00` (`Σ n x_n`) | **ZF** |
| Riesz's **lemma**; "compact ball ⇒ finite-dim" | **ZF** |
| All norms on a finite-dim ℝ/ℂ space equivalent (Heine–Borel for ℝⁿ is choice-free) | **ZF** |
| Hilbert cube `[0,1]^ℕ` compact | **ZF** |
| Banach fixed-point theorem; Cantor intersection; Edelstein | **ZF** |
| **Global** seq. continuity ⟹ continuity for `f : ℝ → ℝ` (Sierpiński 1916) | **ZF** |
| **BCT for SEPARABLE complete metric spaces**; for countably compact pseudometric | **ZF** |
| Closure = net limits; continuity = net continuity | **ZF** |
| "infinite-dim ⇒ ball not compact" via iterated Riesz | **DC** (ZF if separable) |
| **BCT for complete metric spaces** | **⟺ DC** (Blair 1977) |
| BCT for Čech-complete; products of compact Hausdorff are Baire; compact convex in LCTVS | **⟺ DC** |
| **BCT for COMPACT HAUSDORFF / LOCALLY COMPACT REGULAR spaces** | **⟺ DMC — not ZF; BPI does NOT imply it** (`[14][106]=3`) |
| BCT for totally bounded complete / second-countable complete pseudometric | **⟺ AC_ω** |
| Metric: HB-cpt ⟺ seq. cpt ⟺ complete+totally bounded; closure = seq. closure (metric) | **⟺ AC_ω** |
| Regularity of `ω₁` (⇒ `[0,ω₁]`, long ray, Tychonoff plank examples) | **AC_ω**; ZF+`cf(ω₁)=ω` consistent (Feferman–Lévy = Jech Thm 10.6) |
| "Countable union of countable sets is countable" (HR 31) | **AC_ω**; consistently ℝ is such a union (then Lebesgue measure cannot be countably additive) |
| **Pointwise** seq. continuity ⟹ continuity for `f:ℝ→ℝ`; ℝ, ℚ, **ℕ** Lindelöf; every subspace of ℝ separable | **⟺ AC_ω(ℝ)** |
| "Every infinite set has a countably infinite subset" (HR 9) | Not ZF; **AC_ω ⟹ HR 9**, strictly |
| Existence of `βℕ` / free ultrafilters; Čech–Stone | **⟺ UL = BPI**; ⊊ AC; ⇏ AC_ω. UF(ω) **strictly weaker** than BPI |
| Tychonoff for compact **Hausdorff**; **Banach–Alaoglu** | **⟺ BPI** |
| **Full Tychonoff** | **⟺ AC** (Kelley 1950) |
| Hahn–Banach; Banach limits; `ℓ¹ ⊊ (ℓ^∞)*`; Mazur separation | **⟸ BPI**, **strictly weaker** than BPI (Pincus 1972); incomparable with DC |
| Krein–Milman + Banach–Alaoglu | **⟺ AC** (Bell–Fremlin 1972) |
| "Every vector space has a Hamel basis" (HR 66/109) | **⟺ AC** (Blass 1984) — **the MC ⟹ AC step uses Foundation**; fails over ZFA |
| Hamel basis for **ℝ over ℚ** (HR 367) | **Does NOT imply AC, BPI, or DC**; DC does not give one |
| **Discontinuous linear functional on an infinite-dim Banach space** | **Not provable in ZF+DC** — consistently none exist (Solovay 1970 w/ inaccessible; Wright 1973 & Garnir 1974 in ZF+DC+BP; Shelah 1984: inaccessible needed for measurability, **not** for BP) |
| **HB (or BPI) ⟹ discontinuous functional / Hamel basis for ℝ** | **OPEN** (`[52][366] = [52][367] = [14][366] = [14][367] = 0`) |
| HB ⟹ non-measurable set (Foreman–Wehrung 1991) and ⟹ Banach–Tarski (Pawlikowski 1991) | **two separate** Fund. Math. **138** papers, pp. 13–19 and 21–22 |
| Non-measurable set (HR 93) vs set without Baire property (HR 142) | **Mutually non-implying** (`[93][142] = [142][93] = 3`) — do not conflate |
| "Compact ⟺ every net has a convergent subnet" (⇐) | **AC** |
| "Compact ⟺ every ultrafilter converges" (⇐) | **UL** |
| Urysohn's lemma / Tietze extension | Independent of ZF+AC_ω; follow from **DC** (Tachtsis 2019) |

**Corrected hierarchy:**

```
AC ≡ Tychonoff ≡ every VS has a basis (needs Foundation)
   ≡ Alexandroff-Urysohn-cpt <=> Heine-Borel-cpt
   ≡ Banach-Alaoglu + Krein-Milman
   |
   +-- BPI ≡ ultrafilter lemma ≡ Tychonoff-Hausdorff ≡ Banach-Alaoglu ≡ Cech-Stone
   |     |  [BPI does NOT imply DMC : HR code 3, explicit ZF model]
   |     +-- Hahn-Banach            [strict: Pincus 1972; incomparable with DC]
   |     +-- UF(omega)              [strict below BPI]
   |          +-- nonmeasurable set / set without BP   [mutually non-implying]
   |
   +-- DC ≡ BCT for COMPLETE METRIC spaces (Blair 1977)
         ≡ BCT for Cech-complete; products of cpt Hausdorff are Baire
         |
         DMC ≡ BCT for COMPACT HAUSDORFF spaces        <-- NOT ZF, NOT from BPI
             ≡ BCT for LOCALLY COMPACT REGULAR spaces  <-- NOT ZF, NOT from BPI
             |   [DMC => DC : OPEN in ZF, false in ZFA]
         AC_omega ≡ BCT for totally bounded complete / 2nd-ctble complete
             ≡ HB-cpt <=> seq cpt <=> complete + totally bounded
             ≡ closure = sequential closure (metric)
             |
         AC_omega(R) ≡ R, Q, N Lindelof
             ≡ POINTWISE seq. continuity => continuity for f:R->R
             |
         HR 31 (ctble union thm) -> HR 34 (aleph_1 regular)
             |
         HR 9 (finite <=> Dedekind-finite) -> HR 13
             |
   ZF: BCT for SEPARABLE complete metric spaces
       BCT for countably compact pseudometric spaces
       GLOBAL seq. continuity => continuity for f:R->R   (Sierpinski 1916)
       bounded infinite subset of R has an accumulation point
```

---

# PART E — CORRECTIONS TO THE ORIGINAL BRIEF

1. **Cube root direction is backwards (B‑3).** `x^{1/3}` **is** uniformly continuous on ℝ; `x³` is not. The example is `x^{1/3}` as the uniformly continuous bijection whose **inverse** fails.
2. **The sequential fan is NOT the Fréchet–Urysohn counterexample (A‑3).** `S(ω)` **is** FU; it separates **FU ⇏ first countable** (`χ(∞) = 𝔡`). The "sequential but not FU" example is the **Arens space `S₂`** (sequential order 2). Both facts are ZF. `S(ω)` is a quotient of `S₂`; `S₂` contains a copy of the **Arens–Fort space**; every sequential non-Fréchet space contains a copy of `S₂`.
3. **`|x−y|` vs `|1/x−1/y|` on `(0,∞)` does not give "one complete one not" (B‑8).** Neither is complete — it gives different **Cauchy sequences/uniformities** only. Use **`ℕ` with `|m−n|` vs `|1/m−1/n|`** (cleanest), `(0,1)` with the tan metric, or `(0,∞)` with `|x−y|+|1/x−1/y|`.
4. **"Arrow space" is ambiguous and absent from Steen–Seebach (A‑12).** "The arrow" = Sorgenfrey line (S&S **#51**); "double arrow" = split interval; S&S **#48** is the lexicographic square.
5. **Closed ball vs closure of open ball are one item (B‑12)**, the containment runs only one way, and in normed spaces they coincide — so the counterexample must be non-normed.
6. **The AC flag on discontinuous functionals is right but sharper than stated (C‑3):** the incomplete case (`c_00`) is pure ZF; only the **Banach** case needs choice, and it is *unprovable* in ZF+DC. **Whether HB or BPI yields one is OPEN**, not settled.
7. **Baire category is four principles, not one (B‑11):** separable complete ⇒ Baire is **ZF**; complete metric ⇒ Baire **⟺ DC**; compact Hausdorff / locally compact regular ⇒ Baire **⟺ DMC and is NOT implied by BPI**; totally bounded complete ⇒ Baire **⟺ AC_ω**.
8. **Steen–Seebach numbers, verified:** cocountable **#20**, Arens–Fort **#26**, irrationals **#31**, Hilbert space **#36**, Fréchet space **#37**, Hilbert cube **#38**, `[0,Ω)` **#42**, `[0,Ω]` **#43**, long line **#45**, lexicographic square **#48**, Sorgenfrey **#51**, Arens square **#80/81**, Niemytzki plane **#82**, Sorgenfrey plane **#84**, Tychonoff plank **#86**, Appert space **#98**, Baire product metric **#104**, `I^I` **#105**, Helly space **#107**, `C[0,1]` **#108**, box product **#109**, `βℕ` **#111**, bounded metrics **#134**, Cauchy completion **#137**, Post Office metric **#139**. The sequential fan is **not** in the book.

---

# PART F — KNOWN GAPS

- **Gelbaum & Olmsted** (Holden-Day 1964, xxiv+194 pp., "The Mathesis series", LCCN 64021715; Dover 2003, ISBN 0-486-42875-3) and **Wise & Hall** (OUP 1993, xii+211 pp., ISBN 0-19-507068-2, LCCN 93022411): bibliographic data **verified**; **tables of contents could NOT be verified** — Dover, OUP, archive.org (lending-restricted), MAA reviews (403/521), Google Books (429) and HathiTrust all blocked. Do not cite chapter lists for these two without independent confirmation. Gelbaum–Olmsted numbers counterexamples *within* chapters, not globally as Steen–Seebach does.
- **Khaleelulla, *Counterexamples in Topological Vector Spaces*** (Springer LNM **936**, 1982) — chapter list **verified**, including "Topological Bases" (pp. 110–136), relevant to C‑6.
- **math.stackexchange and MathOverflow are hard-blocked** by the fetcher, so choice-status answers for Riesz's lemma and finite-dimensional norm equivalence are given as explicit proof analysis (written out above, self-checking) rather than by citation.
- **Unsubstantiated folklore, flagged:** that ZF+DC is consistent with `(ℓ^∞)* = ℓ¹`. Use instead the well-sourced weaker statement (Banach limits are not ZF-provable; they follow from HB ⟸ BPI).
- Also **[K]**, not fetched here: the Arhangel'skiĭ–Franklin `S_α` sequential-order hierarchy; "`2^X` compact ⟺ BPI"; "`{0,1}^κ` sequentially compact ⟺ `κ < 𝔰`"; Lacey 1973 on Hamel dimension `= 𝔠`; Bernstein sets being Baire; Ostrowski's theorem; Schur's property for `ℓ¹`.
