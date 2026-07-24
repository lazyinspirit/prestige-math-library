---
id: cex-ordered-field-not-archimedean
kind: counterexample
title: "Not every ordered field is Archimedean"
status: published
origin: session
deps: [def-ordered-field, def-archimedean-field, thm-of-archimedean, thm-reals-ordered-field]
aliases: []
landmark: false
proof_strategy: direct
cx_machine_verified: false
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** every ordered field is Archimedean, that is, in every ordered
field $F$ each $x \in F$ satisfies $x < n \cdot 1_F$ for some natural number $n$.

The witness is $\mathbb{R}(t)$, the field of rational functions over $\mathbb{R}$,
ordered so that $f > 0$ exactly when $f(x) > 0$ for all sufficiently large real
$x$. In this ordered field the element $t$ exceeds every canonical natural
number, so the naturals are not cofinal.

## Facts & Assumptions

**Given:** $\mathbb{R}(t)$, the field of fractions of the polynomial ring $\mathbb{R}[t]$, and the set $P = \{f \in \mathbb{R}(t) : f \ne 0 \text{ and } f(x) > 0 \text{ for all sufficiently large real } x\}$.

[L1] An ordered field is a field with a positive cone $P$ satisfying trichotomy (for each nonzero $x$, exactly one of $x \in P$, $-x \in P$) and closure of $P$ under addition and multiplication; then $a < b$ means $b - a \in P$ ([[def-ordered-field]]).

[L2] An ordered field $F$ is Archimedean when for every $x \in F$ there is a natural number $n$ with $x < n \cdot 1_F$, equivalently the canonical naturals $n \cdot 1_F$ are cofinal ([[def-archimedean-field]]).

[L3] Every complete ordered field is Archimedean ([[thm-of-archimedean]]).

[L4] $\mathbb{R}$ is an ordered field, so $\mathbb{R}[t]$ is an integral domain and a nonzero real polynomial has finitely many real roots and a sign at $+\infty$ equal to that of its leading coefficient ([[thm-reals-ordered-field]]).

## Counterexample

**Proof technique:** direct.

1.1 A nonzero $f = p/q \in \mathbb{R}(t)$ with $p, q \in \mathbb{R}[t]$ has only finitely many real zeros and poles, so there is a real $X$ beyond which $f(x)$ has constant nonzero sign, equal to the sign of the ratio of the leading coefficients of $p$ and $q$; hence exactly one of $f \in P$, $-f \in P$ holds. [given, L4, algebra]

1.2 If $f, g \in P$ then $f(x) > 0$ and $g(x) > 0$ for all large $x$, so $(f + g)(x) > 0$ and $(fg)(x) > 0$ for all large $x$, giving $f + g \in P$ and $fg \in P$. [given, algebra]

1.3 For each natural number $n$ the rational function $t - n \cdot 1 = t - n$ satisfies $(t - n)(x) = x - n > 0$ for all $x > n$, so $t - n \in P$. [given, L4, algebra]

2.1 By the trichotomy of step 1.1 and the closure of step 1.2, $P$ is a positive cone, so $\mathbb{R}(t)$ is an ordered field. [step 1.1, step 1.2, L1]

2.2 By step 1.3, $t - n \cdot 1 \in P$ for every natural $n$, which by [L1] means $n \cdot 1 < t$ for every natural $n$. [step 1.3, L1]

3.1 In the ordered field $\mathbb{R}(t)$ the element $t$ satisfies $n \cdot 1 < t$ for every natural $n$ (step 2.2), so no natural $n$ has $t < n \cdot 1$; the canonical naturals are not cofinal and $\mathbb{R}(t)$ is not Archimedean, refuting the claim that every ordered field is Archimedean. [step 2.1, step 2.2, L2]

4.1 This is consistent with [L3], whose contrapositive states that a non-Archimedean ordered field cannot be complete: $\mathbb{R}(t)$ is an ordered field that is not complete. [step 3.1, L3] ∎
