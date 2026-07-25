---
id: lem-bernoulli-inequality
kind: lemma
title: "Bernoulli's inequality $(1+x)^n \\ge 1 + nx$"
status: draft
origin: session
deps: [def-integer-power, thm-induction-principle, lem-of-add-order, lem-of-sign-rules, lem-of-square-positive, lem-of-naturals-positive, lem-of-q-embeds, def-ordered-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Bernoulli's inequality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bernoulli%27s_inequality"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
pipeline_run: null
---

## Statement

Let $\mathbb{R}$ be an ordered field ([[def-ordered-field]]), let
$x \in \mathbb{R}$ with $x \ge -1$, and let $n \in \mathbb{N}$, with powers as in
[[def-integer-power]] and with $n$ also denoting the canonical natural
$\iota(n) \in \mathbb{R}$ ([[lem-of-naturals-positive]], [[lem-of-q-embeds]]).
Then

$$(1+x)^n \ge 1 + nx,$$

and equality holds if and only if $n \le 1$ or $x = 0$.

## Facts & Assumptions

**Given:** An ordered field $\mathbb{R}$, an element $x \ge -1$ of it, and a natural number $n$, with $\iota(n) \in \mathbb{R}$ written $n$.

[L1] Definition of powers ([[def-integer-power]]): $a^0 = 1$ and $a^{n+1} = a^n a$.

[L2] Induction principle ([[thm-induction-principle]]).

[L3] Order and scaling: for $c \ge 0$, $u \ge v$ implies $uc \ge vc$ (the case $c > 0$ is the scaling rule and the case $c = 0$ gives $0 \ge 0$); and adding a constant preserves the order ([[lem-of-sign-rules]], [[lem-of-add-order]]).

[L4] Squares are nonnegative: $x^2 > 0$ for $x \ne 0$ and $0^2 = 0$ ([[lem-of-square-positive]]).

[L5] Canonical naturals: $\iota(0) = 0$, $\iota(n+1) = \iota(n) + 1$, and $\iota(n) > 0$ for $n \ge 1$, so $\iota(n) \ge 0$ for every $n$ ([[lem-of-naturals-positive]], [[lem-of-q-embeds]]).

## Proof

**Proof technique:** induction.

1.1 Base case $n = 0$: $(1+x)^0 = 1$ and $1 + 0 \cdot x = 1$, so the inequality holds with equality. [base, L1, L5]

1.2 Inductive hypothesis: fix $n \in \mathbb{N}$ and assume $(1+x)^n \ge 1 + nx$. [ih]

1.3 Since $x \ge -1$ we have $1 + x \ge 0$, and this is exactly what licenses multiplying the inductive inequality by $1 + x$ without reversing it. [given, L3]

1.4 The discarded term is nonnegative: $n x^2 \ge 0$, since $\iota(n) \ge 0$ and $x^2 \ge 0$. [L4, L5]

1.5 Equality analysis, the strict direction: if $n \ge 2$ and $x \ne 0$ with $x \ge -1$, then $(1+x)^n > 1 + nx$, by a second induction, on $j$, over the statement $(1+x)^{j+2} > 1 + (j+2)x$; for $j = 0$ we have $(1+x)^2 = 1 + 2x + x^2 > 1 + 2x$ because $x^2 > 0$; and assuming $(1+x)^{m} > 1 + mx$ for some $m \ge 2$, there are two possibilities: if $x = -1$ then $(1+x)^{m+1} = 0$ while $1 + (m+1)x = 1 - (m+1) = -m < 0$, and if $x > -1$ then $1 + x > 0$ and $(1+x)^{m+1} = (1+x)^{m}(1+x) > (1 + mx)(1 + x) = 1 + (m+1)x + mx^2 \ge 1 + (m+1)x$, so the strict inequality passes to $m+1$ in either case. [L1, L2, L3, L4, L5]

2.1 Multiplying the hypothesis by $1 + x \ge 0$ and expanding: $(1+x)^{n+1} = (1+x)^n (1+x) \ge (1 + nx)(1 + x) = 1 + (n+1)x + nx^2$. [step 1.2, step 1.3, L1, L3, L5]

2.2 Equality analysis, the easy direction: at $n = 0$ both sides are $1$, and at $n = 1$ both sides are $1 + x$, so equality holds whenever $n \le 1$; and if $x = 0$ both sides are $1$ for every $n$, since $(1+0)^n = 1^n = 1$. [step 1.1, L1, L5]

3.1 Hence $(1+x)^{n+1} \ge 1 + (n+1)x$, which is the claim at $n+1$. [step 2.1, step 1.4, L3]

4.1 By the induction principle the inequality $(1+x)^n \ge 1 + nx$ holds for every $n \in \mathbb{N}$ and every $x \ge -1$, and by steps 2.2 and 1.5 equality holds exactly when $n \le 1$ or $x = 0$. [step 1.1, step 3.1, step 2.2, step 1.5, L2, discharge-induction] ∎
