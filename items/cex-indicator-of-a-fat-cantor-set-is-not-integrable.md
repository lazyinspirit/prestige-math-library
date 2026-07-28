---
id: cex-indicator-of-a-fat-cantor-set-is-not-integrable
kind: counterexample
title: "The indicator of the Smith-Volterra-Cantor set is discontinuous exactly on a nowhere dense set, and is not Riemann integrable, because that set does not have measure zero"
status: draft
origin: session
deps: [fs-integrability-is-equivalent-to-a-nowhere-dense-discontinuity-set, thm-lebesgue-criterion, def-fat-cantor-set, thm-fat-cantor-set-has-positive-measure, def-nowhere-dense-meager, def-interior-closure-boundary-r, def-measure-zero-and-content-zero, def-continuity-real, def-classification-of-discontinuities, def-open-and-closed-in-r, def-neighbourhood-r, def-darboux-sums, def-darboux-integral, def-partition-and-refinement, lem-finite-sum-laws, def-finite-sum, def-interval, def-bounded-set, def-infimum, def-max-min, def-complete-ordered-field, def-ordered-field, lem-of-add-order, lem-of-sign-rules]
justified_by: []
aliases: []
landmark: true
short: "fat Cantor indicator not integrable"
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
    - title: "Smith-Volterra-Cantor set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Smith%E2%80%93Volterra%E2%80%93Cantor_set"
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
pipeline_run: null
---

## Statement refuted

**Refuted:** that a bounded function on $[a,b]$ is Riemann integrable whenever
its set of discontinuities is nowhere dense
([[fs-integrability-is-equivalent-to-a-nowhere-dense-discontinuity-set]],
[[def-nowhere-dense-meager]]).

The witness is the indicator $g$ of the Smith-Volterra-Cantor set
$S \subseteq [0,1]$ ([[def-fat-cantor-set]]). Its set of discontinuities is
exactly $S$, which is closed, nowhere dense and **not** of measure zero
([[thm-fat-cantor-set-has-positive-measure]]); and $g$ is not Riemann integrable,
with

$$\underline{\int_0^1} g \;=\; 0, \qquad \overline{\int_0^1} g \;\ge\; \tfrac12 .$$

**The contrast with the Cantor set is the whole point.** The Cantor set is also
closed and nowhere dense, and its indicator **is** integrable, with integral $0$
([[ex-indicator-of-the-cantor-set-is-integrable-with-integral-zero]]). The two
sets differ only in measure, and that is what decides
([[thm-lebesgue-criterion]]).

The proof below is direct, from claim 4 of
[[thm-fat-cantor-set-has-positive-measure]]; it does not go through the forward
half of [[thm-lebesgue-criterion]] and so **uses no choice principle**.

## Facts & Assumptions

**Given:** The Smith-Volterra-Cantor set $S \subseteq [0,1]$ and its indicator $g : [0,1] \to \mathbb{R}$, with $g(x) = 1$ for $x \in S$ and $g(x) = 0$ otherwise.

[A1] The refuted claim: a bounded function on a closed bounded interval with distinct endpoints whose set of discontinuities is nowhere dense is Riemann integrable.

[L1] $S$ is closed, bounded and nowhere dense, so $S$ contains no nonempty open set; and if $(a_k)$, $(b_k)$ are sequences of reals with $a_k \le b_k$, $S \subseteq \bigcup_k[a_k,b_k]$ and $\sum_{k<i}(b_k-a_k) \le M$ for every $i \in \mathbb{N}$, then $M \ge 2^{-1}$ ([[thm-fat-cantor-set-has-positive-measure]], [[def-fat-cantor-set]], [[def-nowhere-dense-meager]], [[def-interior-closure-boundary-r]], [[def-measure-zero-and-content-zero]]).

[L2] A set is closed exactly when every point outside it has a neighbourhood missing it ([[def-open-and-closed-in-r]], [[def-neighbourhood-r]]).

[L3] For a partition $P = (n,t)$ of $[0,1]$: $n \ge 1$, $t_i < t_{i+1}$, $\Delta_i > 0$, $I_i = [t_i,t_{i+1}]$, $[0,1] = \bigcup_{i<n}I_i$, and $(t_i,t_{i+1})$ is a nonempty open subset of $[0,1]$ ([[def-partition-and-refinement]], [[def-interval]], [[def-open-and-closed-in-r]]).

[L4] $m_i = \inf g[I_i]$, $M_i = \sup g[I_i]$, $L(g,P) = \sum_{i<n}m_i\Delta_i$, $U(g,P) = \sum_{i<n}M_i\Delta_i$; $\underline{\int_0^1}g$ is the supremum of the lower sums and $\overline{\int_0^1}g$ the infimum of the upper sums; $g$ is integrable exactly when they agree ([[def-darboux-sums]], [[def-darboux-integral]], [[def-bounded-set]]).

[L5] A set with a least element has it as its infimum and one with a greatest element has it as its supremum; an infimum of a set all of whose members are $\ge c$ is $\ge c$ ([[def-infimum]], [[def-max-min]], [[def-complete-ordered-field]]).

[L6] Finite sums: scaling, splitting, monotonicity in the terms, $\sum_{i<n}0 = 0$; and a finite list of closed intervals extends to a sequence by degenerate intervals of length $0$ without changing any partial total ([[def-finite-sum]], [[lem-finite-sum-laws]], [[def-measure-zero-and-content-zero]]).

[L7] Ordered-field arithmetic: for $0 \le x \le 1$ and a real $\rho > 0$ the reals $u := \max\{0,x-\rho\}$ and $v := \min\{1,x+\rho\}$ satisfy $u < v$ and $(u,v) \subseteq N_\rho(x)\cap[0,1]$; and $0 < 2^{-1} < 1$ ([[def-max-min]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]], [[def-neighbourhood-r]], [[def-interval]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Counterexample

**Proof technique:** direct.

1.1 $g$ takes only the values $0$ and $1$, so it is bounded on $[0,1]$ and its Darboux sums and integrals are defined by [L4]. [given, L4]

1.2 **Discontinuity on $S$.** Let $x \in S$, so $g(x) = 1$, and let a real $\rho > 0$ be given. By [L7] the interval $(u,v) \subseteq N_\rho(x)\cap[0,1]$ is nonempty and open, so by [L1] it contains a point $y \notin S$; then $|y-x| < \rho$, $y \in [0,1]$ and $|g(x)-g(y)| = 1$, so continuity fails at $x$ for $\varepsilon := 1$ ([[def-continuity-real]], [[def-classification-of-discontinuities]]). [given, L1, L7]

1.3 **Continuity off $S$.** Let $x \in [0,1]$ with $x \notin S$. Since $S$ is closed, [L2] gives a real $\rho > 0$ with $N_\rho(x)\cap S = \varnothing$, so $g$ vanishes on $N_\rho(x)\cap[0,1]$ and continuity holds at $x$. [given, L1, L2]

2.1 So the set of discontinuities of $g$ in $[0,1]$ is exactly $S$, which is nowhere dense by [L1]. [step 1.2, step 1.3, L1]

2.2 **Every lower sum is $0$.** Let $P = (n,t)$ be a partition of $[0,1]$ and $i < n$. By [L3] the interval $(t_i,t_{i+1})$ is a nonempty open subset of $[0,1]$, so by [L1] it contains a point outside $S$, at which $g$ takes the value $0$; as $g \ge 0$, that value is the least element of $g[I_i]$ and $m_i = 0$ by [L5]. Hence $L(g,P) = 0$ by [L4] and [L6]. [step 1.1, L1, L3, L4, L5, L6]

2.3 **Every upper sum is at least $2^{-1}$.** With $P$ as above put $B := \{\, i < n : I_i \cap S \ne \varnothing \,\}$. For $i \in B$ the set $g[I_i]$ contains $1$, so $M_i = 1$ by [L5]; for $i \notin B$ one has $g[I_i] = \{0\}$ and $M_i = 0$. Hence $U(g,P)$ is the sum of the $\Delta_i$ with $i \in B$, by [L4] and [L6]. [step 1.1, L4, L5, L6]

3.1 The intervals $I_i$ with $i \in B$ cover $S$, since $S \subseteq [0,1] = \bigcup_{i<n}I_i$ by [L3]. Extending that finite list to a sequence by degenerate intervals $[0,0]$ ([L6]) gives a cover of $S$ all of whose partial total lengths are at most $U(g,P)$, so [L1] gives $U(g,P) \ge 2^{-1}$. [step 2.3, L1, L3, L6]

4.1 By [L5] and step 2.2, $\underline{\int_0^1}g = 0$; by [L5] and step 3.1, $\overline{\int_0^1}g \ge 2^{-1} > 0$. The two differ, so $g$ is not Riemann integrable by [L4]. [step 2.2, step 3.1, L4, L5, L7]

5.1 So $g$ is bounded on $[0,1]$, an interval with $0 < 1$, its set of discontinuities is nowhere dense by step 2.1, and it is not Riemann integrable: [A1] is refuted. [step 2.1, step 4.1, A1] ∎

## Remarks

- **Nowhere dense and null are independent, and only the second matters here.** $S$ is nowhere dense and not null; $\mathbb{Q}\cap[0,1]$ is null and dense. Thomae's function has the second as its discontinuity set and is integrable ([[ex-thomae-is-riemann-integrable-with-integral-zero]]); $g$ has the first and is not. Neither notion of smallness implies the other, and [[thm-lebesgue-criterion]] names the one that decides.

- **The constant $2^{-1}$ is what this library can state, and it is enough.** No outer measure is defined here, so "the measure of $S$ is $1/2$" is not a statement available; claim 4 of [[thm-fat-cantor-set-has-positive-measure]] gives the quantitative form actually used, that no interval cover of $S$ has total length below $2^{-1}$. The upper integral is therefore at least $2^{-1}$; whether it equals $2^{-1}$ is not asserted.

- **What the argument uses about $S$, and nothing more.** Only three properties enter: $S$ is closed, $S$ has empty interior, and no interval cover of $S$ has total length below $2^{-1}$. Any set with those three properties would serve as a witness in exactly the same way, and the argument is written so that the particular construction of [[def-fat-cantor-set]] is used only through [[thm-fat-cantor-set-has-positive-measure]].
