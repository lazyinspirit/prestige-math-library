---
id: ex-indicator-of-the-cantor-set-is-integrable-with-integral-zero
kind: example
title: "The indicator of the Cantor set is discontinuous exactly on the Cantor set, which is null, so it is Riemann integrable with integral $0$ even though it is discontinuous at uncountably many points"
status: draft
origin: session
deps: [thm-lebesgue-criterion, def-cantor-set, thm-cantor-set-properties, def-measure-zero-and-content-zero, def-nowhere-dense-meager, def-interior-closure-boundary-r, def-continuity-real, def-classification-of-discontinuities, def-darboux-sums, def-darboux-integral, def-partition-and-refinement, lem-finite-sum-laws, def-finite-sum, def-countable, def-interval, def-open-and-closed-in-r, def-neighbourhood-r, def-bounded-set, def-infimum, def-max-min, def-complete-ordered-field, def-ordered-field, lem-of-add-order, lem-of-sign-rules]
justified_by: []
aliases: []
landmark: true
short: "$\\int_0^1 \\mathbf{1}_C = 0$"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Cantor set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_set"
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
pipeline_run: null
---

## Example

Let $C \subseteq [0,1]$ be the Cantor middle-thirds set ([[def-cantor-set]]) and
let $\mathbf{1}_C : [0,1] \to \mathbb{R}$ be its indicator, $\mathbf{1}_C(x) = 1$
for $x \in C$ and $\mathbf{1}_C(x) = 0$ otherwise. Then:

1. $\mathbf{1}_C$ is discontinuous at every point of $C$ and continuous at every
   point of $[0,1] \setminus C$, so its set of discontinuities is **exactly** $C$
   ([[def-continuity-real]], [[def-classification-of-discontinuities]]);
2. $\mathbf{1}_C$ is Riemann integrable on $[0,1]$, because $C$ has measure zero
   ([[thm-cantor-set-properties]], [[thm-lebesgue-criterion]]);
3. $\int_0^1 \mathbf{1}_C = 0$.

**The point of the example is claim 2 against claim 1.** The discontinuity set is
uncountable ([[thm-cantor-set-properties]], [[def-countable]]), so no
cardinality argument such as [[cor-countably-many-discontinuities-integrable]]
applies; what makes the function integrable is that $C$ can be covered by
intervals of arbitrarily small total length, and nothing else.

Only the implication "measure zero $\Rightarrow$ integrable" of
[[thm-lebesgue-criterion]] is used, so **no choice principle is involved**.

## Facts & Assumptions

**Given:** The Cantor set $C \subseteq [0,1]$ and its indicator $\mathbf{1}_C : [0,1] \to \mathbb{R}$.

[L1] $C$ is closed and bounded, has measure zero, is uncountable, and contains no interval with two distinct endpoints; in particular $C$ is nowhere dense, so the interior of $C$ is empty and every nonempty open subset of $\mathbb{R}$ contains a point outside $C$ ([[thm-cantor-set-properties]], [[def-cantor-set]], [[def-measure-zero-and-content-zero]], [[def-nowhere-dense-meager]], [[def-interior-closure-boundary-r]], [[def-countable]]).

[L2] A set is closed exactly when every point outside it has a neighbourhood missing it ([[def-open-and-closed-in-r]], [[def-neighbourhood-r]]).

[L3] A bounded $f$ on $[a,b]$ with $a < b$ is Riemann integrable if and only if its set of discontinuities has measure zero; the implication from "measure zero" to "integrable" uses no choice principle ([[thm-lebesgue-criterion]], [[def-bounded-set]]).

[L4] For a partition $P = (n,t)$ of $[0,1]$: $n \ge 1$, $t_i < t_{i+1}$, $\Delta_i > 0$, $I_i = [t_i,t_{i+1}] \subseteq [0,1]$, and $(t_i,t_{i+1})$ is a nonempty open subset of $[0,1]$ ([[def-partition-and-refinement]], [[def-interval]], [[def-open-and-closed-in-r]]).

[L5] $m_i = \inf f[I_i]$, $L(f,P) = \sum_{i<n}m_i\Delta_i$, $\underline{\int_0^1}f$ is the supremum of the lower sums, $\overline{\int_0^1}f$ the infimum of the upper sums, and the integral is their common value when they agree ([[def-darboux-sums]], [[def-darboux-integral]]).

[L6] A set with a least element has it as its infimum; the supremum of $\{0\}$ is $0$ ([[def-infimum]], [[def-max-min]], [[def-complete-ordered-field]]).

[L7] Finite sums: $\sum_{i<n}0 = 0$ ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L8] Ordered-field arithmetic: for $0 \le x \le 1$ and a real $\rho > 0$ the reals $u := \max\{0,x-\rho\}$ and $v := \min\{1,x+\rho\}$ satisfy $u < v$ and $(u,v) \subseteq N_\rho(x)\cap[0,1]$ ([[def-max-min]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]], [[def-neighbourhood-r]], [[def-interval]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Verification

**Proof technique:** direct.

1.1 $\mathbf{1}_C$ takes only the values $0$ and $1$, so it is bounded on $[0,1]$ and its Darboux sums and integrals are defined by [L5]. [given, L5]

1.2 **Discontinuity on $C$.** Let $x \in C$, so $\mathbf{1}_C(x) = 1$, and let a real $\rho > 0$ be given. By [L8] the set $(u,v) \subseteq N_\rho(x)\cap[0,1]$ is a nonempty open interval, so by [L1] it contains a point $y \notin C$; then $y \in [0,1]$, $|y-x| < \rho$ and $|\mathbf{1}_C(x) - \mathbf{1}_C(y)| = 1$. So the continuity condition fails at $x$ for $\varepsilon := 1$. [given, L1, L8]

1.3 **Continuity off $C$.** Let $x \in [0,1]$ with $x \notin C$. Since $C$ is closed, [L2] gives a real $\rho > 0$ with $N_\rho(x) \cap C = \varnothing$, so $\mathbf{1}_C$ vanishes on $N_\rho(x)\cap[0,1]$ and $|\mathbf{1}_C(y) - \mathbf{1}_C(x)| = 0 < \varepsilon$ there for every $\varepsilon > 0$. [given, L1, L2]

2.1 So the set of discontinuities of $\mathbf{1}_C$ in $[0,1]$ is exactly $C$, which has measure zero by [L1]; by [L3] and $0 < 1$, $\mathbf{1}_C$ is Riemann integrable on $[0,1]$. [step 1.1, step 1.2, step 1.3, L1, L3]

2.2 **Every lower sum is $0$.** Let $P = (n,t)$ be a partition of $[0,1]$ and $i < n$. By [L4] the interval $(t_i,t_{i+1})$ is a nonempty open subset of $[0,1]$, so by [L1] it contains a point outside $C$, at which $\mathbf{1}_C$ takes the value $0$; since $\mathbf{1}_C \ge 0$, the value $0$ is the least element of $\mathbf{1}_C[I_i]$ and $m_i = 0$ by [L6]. Hence $L(\mathbf{1}_C,P) = 0$ by [L5] and [L7]. [step 1.1, L1, L4, L5, L6, L7]

3.1 The set of lower sums is $\{0\}$, so $\underline{\int_0^1}\mathbf{1}_C = 0$ by [L6]; and $\mathbf{1}_C$ is integrable by step 2.1, so $\int_0^1 \mathbf{1}_C = 0$ by [L5]. [step 2.1, step 2.2, L5, L6] ∎

## Remarks

- **Uncountably many discontinuities, and the integral does not notice.** $C$ is uncountable ([[thm-cantor-set-properties]]), so this function is outside the reach of [[cor-countably-many-discontinuities-integrable]] and is the standard demonstration that the Lebesgue criterion is strictly stronger than the countable one.

- **Every upper sum is at least the total length of the subintervals meeting $C$, and that total goes to $0$.** The proof above does not need this, since integrability comes from the criterion and the value from the lower sums alone; but it is the reason the upper sums also converge to $0$, and it is precisely where the Smith-Volterra-Cantor set behaves differently ([[cex-indicator-of-a-fat-cantor-set-is-not-integrable]]).

- **The two hypotheses of claim 1 are the two properties of $C$ that matter.** Closedness gives continuity off $C$; empty interior gives discontinuity on $C$. A set with both is exactly a closed nowhere dense set, and any such set is the discontinuity set of its own indicator. Whether that indicator is integrable then depends only on whether the set is null, which is what [[fs-integrability-is-equivalent-to-a-nowhere-dense-discontinuity-set]] settles in the negative for category.
