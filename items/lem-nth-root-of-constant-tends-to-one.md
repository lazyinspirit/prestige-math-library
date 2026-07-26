---
id: lem-nth-root-of-constant-tends-to-one
kind: lemma
title: "For every $a > 0$, $a^{1/n} \\to 1$"
status: published
origin: session
deps: [thm-nth-roots-exist, lem-bernoulli-inequality, def-rational-power, lem-rational-power-monotone, lem-rational-power-laws, thm-squeeze, thm-algebra-of-limits, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, lem-of-naturals-positive, lem-of-sign-rules, lem-of-add-order, def-real-limit, def-sequence, def-integer-power, def-ordered-field, def-complete-ordered-field, def-nat-order, thm-nat-linear-order]
justified_by: []
aliases: []
landmark: false
short: "$a^{1/n}\\to 1$"
proof_strategy: cases
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
    - title: "Nth root (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nth_root"
    - title: "Bernoulli's inequality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bernoulli%27s_inequality"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.20)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.5"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $a \in \mathbb{R}$ with $a > 0$, write $\iota(n) := n \cdot 1_{\mathbb{R}}$
for the canonical natural ([[lem-of-naturals-positive]]) and $a^{1/n}$ for the
$n$-th root ([[thm-nth-roots-exist]], [[def-rational-power]]), defined for
naturals $n \ge 1$. Then:

1. for every real $b \ge 1$ and every natural $n \ge 1$,
   $$1 \;\le\; b^{1/n} \;\le\; 1 + \frac{b-1}{\iota(n)};$$
2. the sequence $c_k := a^{1/(k+1)}$, $k \in \mathbb{N}$, converges to $1$
   ([[def-real-limit]]).

**Index range.** As for the previous lemma on this page, $a^{1/n}$ requires
$n \ge 1$, so the sequence indexed by $\mathbb{N}$ ([[def-sequence]]) is the
shifted family $a^{1/(k+1)}$; it is the classical family $a^{1/n}$, $n \ge 1$,
reindexed by $n = k+1$.

## Facts & Assumptions

**Given:** A real $a > 0$; the canonical naturals $\iota(n) = n \cdot 1_{\mathbb{R}}$ for $n \ge 1$; and the sequence $c_k := a^{1/(k+1)}$.

[L1] Roots: for real $x \ge 0$ and natural $n \ge 1$ there is a unique real $s \ge 0$ with $s^n = x$, written $x^{1/n}$; it is $> 0$ when $x > 0$, and $1^{1/n} = 1$ by uniqueness ([[thm-nth-roots-exist]], [[def-integer-power]]).

[L2] Rational powers: $x^{1/n}$ is the rational power at exponent $1/n$; for rational $t > 0$, $x > 1$ implies $x^t > 1$; and $(xy)^{1/n} = x^{1/n} y^{1/n}$ for $x, y > 0$ ([[def-rational-power]], [[lem-rational-power-monotone]], [[lem-rational-power-laws]]).

[L3] Bernoulli's inequality: $(1+x)^n \ge 1 + \iota(n) x$ for $x \ge -1$ and $n \in \mathbb{N}$ ([[lem-bernoulli-inequality]]).

[L4] Canonical naturals: $\iota(n) > 0$ and invertible for $n \ge 1$, and $\iota$ is strictly increasing ([[lem-of-naturals-positive]], [[def-nat-order]], [[thm-nat-linear-order]]).

[L5] Reciprocal Archimedean property: for every real $\eta > 0$ there is a natural $p \ge 1$ with $1/p < \eta$; and $0 < x < y$ gives $0 < 1/y < 1/x$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[lem-of-inverse-positive]]).

[L6] Order arithmetic: inequalities may be added and translated, and multiplying an inequality by a positive element preserves it; the order is total, so exactly one of $a < 1$, $a = 1$, $a > 1$ holds ([[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]).

[L7] Squeeze theorem; a constant sequence converges to its value; to establish convergence it suffices to produce a threshold for every real $\varepsilon > 0$ ([[thm-squeeze]], [[def-sequence]], [[def-real-limit]]).

[L8] Algebra of limits, reciprocal rule: if $z_j \to z$ with $z \ne 0$ and $z_j \ne 0$ for every $j$, then $1/z_j \to 1/z$ ([[thm-algebra-of-limits]]).

## Proof

**Proof technique:** cases.

1.1 Let $b$ be any real with $b \ge 1$ and let $n \ge 1$ be a natural. If $b = 1$ then $b^{1/n} = 1$ and both inequalities hold. If $b > 1$ then $1/n$ is a positive rational, so $t := b^{1/n} - 1 > 0$; Bernoulli's inequality applied to $t \ge -1$ gives $b = \big(b^{1/n}\big)^n = (1+t)^n \ge 1 + \iota(n)t$, hence $\iota(n) t \le b - 1$ and $t \le (b-1)/\iota(n)$ since $\iota(n) > 0$. In both cases $1 \le b^{1/n} \le 1 + (b-1)/\iota(n)$, which is claim 1. [given, L1, L2, L3, L4, L6]

1.2 Case one: $a = 1$. [given, assume-case one]

1.3 Case big: $a > 1$. [given, assume-case big]

1.4 Case small: $0 < a < 1$. [given, assume-case small]

2.1 For every real $b > 1$ the sequence $b^{1/(k+1)}$ converges to $1$. Put $d_k := 1 + (b-1)/\iota(k+1)$. Given a real $\varepsilon > 0$, the quotient $\varepsilon/(b-1)$ is positive, so there is a natural $p \ge 1$ with $1/p < \varepsilon/(b-1)$; for $k \ge p$ we have $k+1 > p$, hence $\iota(k+1) > \iota(p) > 0$ and $0 < (b-1)/\iota(k+1) < (b-1)(1/p) < \varepsilon$, so $|d_k - 1| < \varepsilon$ and $d_k \to 1$. By step 1.1 applied at $n = k+1$ we have $1 \le b^{1/(k+1)} \le d_k$ for every $k$, and the constant sequence $1$ converges to $1$, so the squeeze theorem gives $b^{1/(k+1)} \to 1$. [step 1.1, L4, L5, L6, L7]

2.2 In case one, $c_k = 1^{1/(k+1)} = 1$ for every $k$, so $(c_k)$ is the constant sequence $1$ and converges to $1$. [step 1.2, L1, L7]

3.1 In case big, $a > 1$, so step 2.1 applied with $b = a$ gives $c_k = a^{1/(k+1)} \to 1$. [step 2.1, step 1.3]

3.2 In case small, put $a' := 1/a$, which satisfies $a' > 1$ because $0 < a < 1$. For each natural $n \ge 1$ the product rule for roots gives $a^{1/n} (a')^{1/n} = (a a')^{1/n} = 1^{1/n} = 1$, so $a^{1/n} = 1/(a')^{1/n}$, and $(a')^{1/n} > 0$. By step 2.1 the sequence $(a')^{1/(k+1)}$ converges to $1 \ne 0$ with all terms nonzero, so the reciprocal rule gives $c_k = 1/(a')^{1/(k+1)} \to 1/1 = 1$. [step 2.1, step 1.4, L1, L2, L5, L8]

4.1 The three cases are exhaustive by trichotomy applied to $a$ and $1$, the hypothesis $a > 0$ excluding nothing else, and in each of them $(c_k)$ converges to $1$; together with step 1.1 this proves both claims. [step 2.2, step 3.1, step 3.2, step 1.1, L6, cases: trichotomy of the order, cases-exhaustive] ∎

## Remarks

- **Bernoulli is doing the whole job in the case $a > 1$.** The inequality
  $(1+t)^n \ge 1 + nt$ converts the exact identity $\big(a^{1/n}\big)^n = a$ into
  the linear bound $t \le (a-1)/n$ on the excess $t = a^{1/n} - 1$, and that bound
  is what tends to $0$. No estimate on $a^{1/n}$ itself is needed beyond
  $a^{1/n} > 1$.

- **The case $0 < a < 1$ is not symmetric to the case $a > 1$ and is not proved
  again.** It is transported by the reciprocal, using
  $a^{1/n} (1/a)^{1/n} = 1$ ([[lem-rational-power-laws]]) and the reciprocal rule
  of [[thm-algebra-of-limits]]. The hypothesis of that rule, that the limit be
  nonzero and every term nonzero, is met because roots of positive reals are
  positive.

- **The rate is different from the one in [[lem-nth-root-of-n-tends-to-one]].**
  Here the excess is $O(1/n)$ with a constant depending on $a$; there the base
  itself grows with $n$ and the excess is only $O(1/n^{1/2})$. The two lemmas are
  therefore not instances of one another in either direction.
