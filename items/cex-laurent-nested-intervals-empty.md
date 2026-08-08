---
id: cex-laurent-nested-intervals-empty
kind: counterexample
title: "The unrestricted nested interval property fails in $\\mathbb{R}((t^{-1}))$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
deps: [def-formal-laurent-series, lem-laurent-series-ring, lem-laurent-valuation, thm-laurent-ordered-field, lem-laurent-non-archimedean, def-sequences-in-an-ordered-field, cor-laurent-nested-intervals, def-ordered-field, thm-reals-ordered-field, cor-cauchy-reals-lub-complete, thm-of-archimedean, cor-archimedean-reciprocal]
aliases: []
landmark: false
short: "nested intervals in $K$ with empty intersection"
proof_strategy: direct
cx_machine_verified: false
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Nested intervals (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nested_intervals"
    - title: "Ordered field (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordered_field"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** the *unrestricted* nested interval property holds in
$K = \mathbb{R}((t^{-1}))$, that is, every nested sequence
$I_0 \supseteq I_1 \supseteq \cdots$ of closed intervals
$I_n = [a_n,b_n]_K$ of $K$ ([[def-sequences-in-an-ordered-field]]) has
$\bigcap_n I_n \ne \varnothing$.

The witness is

$$a_n := \iota(n)\, t^{-1}, \qquad b_n := \iota\!\left(\tfrac{1}{n+1}\right) \qquad (n \in \mathbb{N}),$$

where $\iota(c)$ is the constant series with value $c$ at index $0$ and
$\iota(n)$ abbreviates $\iota(n \cdot 1_{\mathbb{R}})$
([[def-formal-laurent-series]]). The intervals $[a_n,b_n]_K$ are nested and
their intersection is empty: a common point would have to be an infinitesimal
of valuation $\ge 1$, because it lies below every positive real constant, and
simultaneously *not* such an element, because it lies above every multiple
$\iota(n)t^{-1}$ of $t^{-1}$.

This refutes only the unrestricted form. The shrinking form, with the additional
hypothesis that the lengths tend to $0$ in $K$, is true
([[cor-laurent-nested-intervals]]), and the lengths here do not tend to $0$.

## Facts & Assumptions

**Given:** $K = \mathbb{R}((t^{-1}))$ with its valuation $v$, leading coefficient $\operatorname{lc}$, monomials $t^{-a}$ and constants $\iota(c)$; and the elements $a_n = \iota(n)t^{-1}$, $b_n = \iota(1/(n+1))$ for $n \in \mathbb{N}$.

[L1] For nonzero $h \in K$: $h(k) = 0$ for $k < v(h)$ and $h(v(h)) = \operatorname{lc}(h) \ne 0$; $t^{-a}$ is nonzero with $v(t^{-a}) = a$ and $\operatorname{lc}(t^{-a}) = 1$; and $\iota(c)$ for $c \ne 0$ is nonzero with $v(\iota(c)) = 0$ and $\operatorname{lc}(\iota(c)) = c$ ([[def-formal-laurent-series]], [[thm-laurent-ordered-field]]).

[L2] $K$ is an ordered field in which $f < g$ holds exactly when $g - f \ne 0_K$ and $\operatorname{lc}(g-f) > 0$; exactly one of $f < g$, $f = g$, $g < f$ holds; $\iota$ is a ring homomorphism, so $\iota(c) + \iota(d) = \iota(c+d)$ and $\iota(c)\iota(d) = \iota(cd)$ ([[thm-laurent-ordered-field]], [[def-ordered-field]]).

[L3] For nonzero $f,g \in K$: $fg \ne 0_K$ with $v(fg) = v(f)+v(g)$ and $\operatorname{lc}(fg) = \operatorname{lc}(f)\operatorname{lc}(g)$; $-f \ne 0_K$ with $v(-f) = v(f)$ and $\operatorname{lc}(-f) = -\operatorname{lc}(f)$; if $v(f) < v(g)$ then $f+g \ne 0_K$ with $\operatorname{lc}(f+g) = \operatorname{lc}(f)$; and if $v(f) = v(g)$ with $\operatorname{lc}(f)+\operatorname{lc}(g) \ne 0$ then $f+g \ne 0_K$ with $v(f+g) = v(f)$ and $\operatorname{lc}(f+g) = \operatorname{lc}(f)+\operatorname{lc}(g)$ ([[lem-laurent-valuation]], [[lem-laurent-series-ring]]).

[L4] $0_K < t^{-(k+1)} < t^{-k}$ for every $k \in \mathbb{Z}$; and if $|h| < t^{-k}$ then $h(j) = 0$ for every $j < k$ ([[lem-laurent-non-archimedean]]).

[L5] $[a,b]_K = \{x \in K : a \le x \le b\}$ for $a \le b$; a sequence of closed intervals is nested when $I_{n+1} \subseteq I_n$ for every $n$; and its lengths tend to $0$ in $K$ when for every $\varepsilon > 0$ in $K$ they are eventually $< \varepsilon$ ([[def-sequences-in-an-ordered-field]]).

[L6] $\mathbb{R}$ is a complete ordered field, hence Archimedean: for every real $c$ there is a natural $n$ with $c < n \cdot 1_{\mathbb{R}}$, and for every real $c > 0$ there is a natural $n \ge 1$ with $1/n < c$ ([[thm-reals-ordered-field]], [[cor-cauchy-reals-lub-complete]], [[thm-of-archimedean]], [[cor-archimedean-reciprocal]]).

## Counterexample

**Proof technique:** direct.

1.1 For $n \ge 1$ the element $a_n = \iota(n)t^{-1}$ is nonzero with $v(a_n) = 0 + 1 = 1$ and $\operatorname{lc}(a_n) = n \cdot 1 = n > 0$, while $a_0 = \iota(0)t^{-1} = 0_K$; and for every $n$ the element $b_n = \iota(1/(n+1))$ is nonzero with $v(b_n) = 0$ and $\operatorname{lc}(b_n) = 1/(n+1) > 0$. Also $a_1 = \iota(1)t^{-1} = t^{-1}$. [given, L1, L2, L3]

2.1 $a_n \le b_n$ for every $n$: for $n = 0$ this is $0_K < \iota(1) = 1_K$, which holds since $\operatorname{lc}(1_K) = 1 > 0$; and for $n \ge 1$ we have $v(b_n) = 0 < 1 = v(-a_n)$ by [step 1.1] and [L3], so $b_n - a_n$ is nonzero with leading coefficient $1/(n+1) > 0$, that is $a_n < b_n$. So each $[a_n,b_n]_K$ is a closed interval. [step 1.1, L1, L2, L3, L5]

2.2 The sequence is nested: $a_{n+1} - a_n = \bigl(\iota(n+1) - \iota(n)\bigr)t^{-1} = \iota(1)t^{-1} = t^{-1} > 0_K$ by [L2] and [L4], so $a_n < a_{n+1}$; and $b_n - b_{n+1} = \iota\bigl(\tfrac{1}{n+1} - \tfrac{1}{n+2}\bigr) = \iota\bigl(\tfrac{1}{(n+1)(n+2)}\bigr)$, which is nonzero with positive leading coefficient, so $b_{n+1} < b_n$. Hence $a_n \le a_{n+1}$ and $b_{n+1} \le b_n$, and every $x$ with $a_{n+1} \le x \le b_{n+1}$ satisfies $a_n \le x \le b_n$, that is $I_{n+1} \subseteq I_n$. [step 1.1, L1, L2, L3, L4, L5]

3.1 Suppose $x \in \bigcap_{n} I_n$. Then $a_1 \le x$, and $a_1 = t^{-1} > 0_K$ by [step 1.1] and [L4], so $x > 0_K$; hence $x \ne 0_K$ and $\operatorname{lc}(x) > 0$ by [L2]. Write $q := v(x)$ and $c := \operatorname{lc}(x) > 0$. [step 1.1, step 2.1, L1, L2, L4, L5]

4.1 $q \ge 1$. If $q < 0$ then $v(x) < 0 = v(-b_0)$ by [step 1.1] and [L3], so $x - b_0$ is nonzero with leading coefficient $c > 0$ and $x > b_0$, contradicting $x \le b_0$. If $q = 0$, use [L6] to fix a natural $n \ge 1$ with $1/n < c$ and set $n' := n - 1$, so that $1/(n'+1) < c$; then $x$ and $-b_{n'}$ both have valuation $0$ with leading coefficients summing to $c - 1/(n'+1) \ne 0$, so by [L3] $x - b_{n'}$ is nonzero with leading coefficient $c - 1/(n'+1) > 0$, giving $x > b_{n'}$ and contradicting $x \le b_{n'}$. By trichotomy on $\mathbb{Z}$ the remaining case is $q \ge 1$. [step 3.1, L1, L2, L3, L5, L6]

4.2 $q < 1$. If $q > 1$ then $v(-a_1) = 1 < q$ by [step 1.1] and [L3], so $x - a_1$ is nonzero with leading coefficient $\operatorname{lc}(-a_1) = -1 < 0$, giving $x < a_1$ and contradicting $a_1 \le x$. If $q = 1$, use [L6] to fix a natural $n$ with $c < n \cdot 1_{\mathbb{R}}$, so $n \ge 1$; then $x$ and $-a_n$ both have valuation $1$ with leading coefficients summing to $c - n \ne 0$, so by [L3] $x - a_n$ is nonzero with leading coefficient $c - n < 0$, giving $x < a_n$ and contradicting $a_n \le x$. Hence $q \ne 1$ and $q \not> 1$. [step 3.1, L1, L2, L3, L5, L6]

5.1 Steps 4.1 and 4.2 are incompatible, so no $x$ lies in every $I_n$: the nested sequence $(I_n)$ of [step 2.1] and [step 2.2] has $\bigcap_n I_n = \varnothing$, which refutes the unrestricted nested interval property for $K$. [step 2.1, step 2.2, step 4.1, step 4.2, L5]

6.1 Consistency with [[cor-laurent-nested-intervals]]: the lengths here do not tend to $0$ in $K$. Indeed $(b_n - a_n)(0) = 1/(n+1) \ne 0$ by [step 1.1], so by [L4] the inequality $|b_n - a_n| < t^{-1}$ fails for every $n$; taking $\varepsilon = t^{-1}$ shows the shrinking hypothesis of [L5] is not satisfied. [step 1.1, step 2.1, L4, L5] ∎

## Remarks

- **What the counterexample really exhibits.** It is a *gap* in $K$. Each of the
  two requirements is satisfiable on its own — $\iota(1)$ lies above every
  $\iota(n)t^{-1}$, and $0_K$ lies below every $\iota(1/(n+1))$ — yet steps 4.1
  and 4.2 show that nothing in $K$ satisfies both at once. Both sides of the gap
  are approached along countable sequences, which is why intervals indexed by
  $\mathbb{N}$ can straddle it, and the lengths cannot shrink across it: they
  stay of valuation $0$ while the left endpoints stay of valuation $1$.

- **Why this does not contradict Cauchy completeness.** $(a_n)$ is not Cauchy in
  $K$: consecutive terms differ by exactly $t^{-1}$, so the Cauchy condition
  fails at $\varepsilon = t^{-1}$. Cauchy completeness
  ([[thm-laurent-cauchy-complete]]) constrains sequences whose terms crowd
  together in the order of $K$, and neither endpoint sequence here does.

- **Consequence for the equivalence of completeness properties.** Since $K$ is
  Cauchy complete but has neither the least-upper-bound property
  ([[cor-laurent-not-lub-complete]]) nor the unrestricted nested interval
  property, any statement of the form "nested intervals imply least upper
  bounds" has to say *which* nested interval property it means. The form that
  $K$ does satisfy is the shrinking one, and that is the form for which $K$ is
  a counterexample to the implication.
