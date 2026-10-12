---
id: lem-function-limit-preserves-order
kind: lemma
title: "If $f \\le g$ on a punctured neighbourhood of $c$ then $\\lim f \\le \\lim g$, non-strictly"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-function-limit, def-limit-point-r, def-neighbourhood-r, lem-of-abs-value, lem-of-add-order, lem-of-sign-rules, lem-of-inverse-positive, cor-of-one-positive, def-ordered-field]
justified_by: []
aliases: [lem-order-preservation-for-function-limits]
landmark: true
short: "limits preserve $\\le$"
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, §3.1: Limits of functions"
      url: "https://www.jirka.org/ra/html/sec_limoffunc.html"
    - title: "Limit of a function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_function"
    - title: "J. Lebl, Basic Analysis I, §3.1"
      url: "https://www.jirka.org/ra/"
    - title: "T. Tao, Analysis I, 3rd ed., §9.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $c$ be a limit point of $A$
([[def-limit-point-r]]), let $f, g : A \to \mathbb{R}$ and suppose both limits at
$c$ exist ([[def-function-limit]]). Suppose further that there is a real
$\eta > 0$ with

$$f(x) \le g(x) \qquad \text{for every } x \in A \text{ with } 0 < |x - c| < \eta .$$

Then

$$\lim_{x \to c} f(x) \;\le\; \lim_{x \to c} g(x) .$$

**The conclusion is non-strict even when the hypothesis is strict.** Replacing
$\le$ by $<$ on both sides gives a false statement, refuted by
[[fs-function-limit-preserves-strict-inequality]]: strictness is destroyed in the
limit, and no hypothesis short of a uniform gap restores it.

**Only the values near $c$ matter**, by [[lem-limit-is-local]]: the hypothesis is
imposed on a punctured neighbourhood of $c$ and on nothing else, and it says
nothing about $f(c)$ and $g(c)$, which the definition ignores in any case.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, a limit point $c$ of $A$, functions $f, g : A \to \mathbb{R}$, reals $L, M$ with $\lim_{x \to c} f(x) = L$ and $\lim_{x \to c} g(x) = M$, and a real $\eta > 0$ with $f(x) \le g(x)$ for every $x \in A$ satisfying $0 < |x - c| < \eta$ ([[def-function-limit]], [[def-limit-point-r]]).

[L1] The limit condition: for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x \in A$ with $0 < |x - c| < \delta$ satisfies $|f(x) - L| < \varepsilon$, and likewise for $g$ and $M$ ([[def-function-limit]]).

[L2] Limit point: for every real $\rho > 0$ there is $x \in A$ with $0 < |x - c| < \rho$ ([[def-limit-point-r]], [[def-neighbourhood-r]]).

[L3] Absolute value: for $t > 0$, $|u| < t$ is equivalent to $-t < u < t$ ([[lem-of-abs-value]]).

[L4] Order arithmetic in $\mathbb{R}$: the order is total, so the negation of $u \le v$ is $v < u$; trichotomy, so $u < v$ and $v \le u$ cannot both hold; adding a constant to an inequality and adding two inequalities ([[lem-of-add-order]]); $0 < 1$ ([[cor-of-one-positive]]), so $2 > 0$, $2^{-1} > 0$ ([[lem-of-inverse-positive]]) and $t/2 > 0$ for $t > 0$ ([[lem-of-sign-rules]]), with $(t/2) + (t/2) = t$; and of finitely many positive reals the smallest is positive ([[def-ordered-field]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $L \le M$ fails; the order being total, this means $M < L$. [assume-contra]

2.1 Then $L - M > 0$, so $\varepsilon := (L - M)/2 > 0$, and $L - \varepsilon = (L + M)/2 = M + \varepsilon$. [step 1.1, L4]

3.1 By [L1] fix reals $\delta_1, \delta_2 > 0$ such that every $x \in A$ with $0 < |x - c| < \delta_1$ has $|f(x) - L| < \varepsilon$ and every $x \in A$ with $0 < |x - c| < \delta_2$ has $|g(x) - M| < \varepsilon$; let $\delta$ be the smallest of $\delta_1$, $\delta_2$ and $\eta$, so $\delta > 0$. [step 2.1, L1, L4, choose]

4.1 Since $c$ is a limit point of $A$, fix $x \in A$ with $0 < |x - c| < \delta$. [step 3.1, L2, choose]

5.1 That $x$ satisfies $0 < |x - c| < \delta_1$ and $0 < |x - c| < \delta_2$, so $|f(x) - L| < \varepsilon$ gives $f(x) > L - \varepsilon$ and $|g(x) - M| < \varepsilon$ gives $g(x) < M + \varepsilon$; since $L - \varepsilon = M + \varepsilon$, this yields $g(x) < f(x)$. [step 3.1, step 4.1, L3, L4]

6.1 But that same $x$ satisfies $0 < |x - c| < \eta$, so the hypothesis gives $f(x) \le g(x)$, which together with $g(x) < f(x)$ contradicts trichotomy. [step 3.1, step 5.1, L4]

7.1 The assumption that $L \le M$ fails is therefore untenable, and $\lim_{x \to c} f(x) = L \le M = \lim_{x \to c} g(x)$. [step 6.1, L4, discharge-contradiction] ∎

## Remarks

- **Both limits are assumed to exist.** Nothing here proves existence: the statement compares two numbers that are given. The theorem that *produces* a limit from an order hypothesis is the squeeze theorem [[thm-squeeze-for-function-limits]], whose conclusion is exactly the existence of the middle limit.

- **The special case $f \equiv 0$** says that a function which is non-negative near $c$ has a non-negative limit there. Its contrapositive is the form used in practice: a negative limit forces negative values near $c$, which is a weak version of [[lem-sign-preservation-near-a-limit]].

- **The sequential analogue** is [[lem-limit-preserves-order]], and it too is non-strict for the same reason: the counterexample is a strict inequality between quantities whose difference tends to $0$.
