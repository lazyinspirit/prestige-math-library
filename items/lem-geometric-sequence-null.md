---
id: lem-geometric-sequence-null
kind: lemma
title: "For $|r| < 1$ the sequence $r^k$ is null, and for $|r| > 1$ the sequence $|r|^k$ diverges to $+\\infty$"
status: draft
origin: session
deps: [def-integer-power, lem-power-laws, lem-bernoulli-inequality, lem-power-monotone, cor-archimedean-reciprocal, thm-of-archimedean, def-real-limit, def-sequence, def-divergence-to-infinity, lem-of-inverse-positive, lem-of-abs-value, def-abs-value, cor-of-one-positive, prop-of-reciprocal-order, thm-induction-principle, prop-of-multiply-inequalities, lem-of-naturals-positive, def-complete-ordered-field, def-ordered-field]
justified_by: []
forward_refs: [cex-cauchy-rationals-no-rational-limit]
aliases: []
landmark: false
proof_strategy: cases
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Geometric progression (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Geometric_progression"
    - title: "Bernoulli's inequality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bernoulli%27s_inequality"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (Thm 3.20(b))"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.5 (Lem 6.5.2)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
---

## Statement

Let $r \in \mathbb{R}$ and let $r^k$ be the integer power ([[def-integer-power]]).

1. If $|r| < 1$ then $(r^k)$ is **null**, that is $r^k \to 0$
   ([[def-real-limit]]).
2. If $|r| > 1$ then $(|r|^k)$ **diverges to $+\infty$**
   ([[def-divergence-to-infinity]]).

Claim 2 is stated for $|r|^k$ and not for $r^k$ on purpose: for $r < -1$ the
terms $r^k$ alternate in sign and are unbounded, so they neither converge nor
diverge to $+\infty$; what is true of them is the statement about their absolute
values.

Both claims come from Bernoulli's inequality ([[lem-bernoulli-inequality]]) and
the Archimedean property. Nothing here needs the least-upper-bound property
except through [[thm-of-archimedean]] and [[cor-archimedean-reciprocal]].

## Facts & Assumptions

**Given:** A real $r$, with integer powers as in [[def-integer-power]]; for $n \in \mathbb{N}$, the symbol $n$ also denotes the canonical natural $n \cdot 1_{\mathbb{R}}$ where it occurs in an arithmetic expression.

[L1] Absolute value: $|x| \ge 0$; $|x| = 0$ exactly when $x = 0$; $|xy| = |x|\,|y|$; and $|x| = x$ when $x \ge 0$, so in particular $|1| = 1$ because $1 > 0$ ([[lem-of-abs-value]], [[def-abs-value]], [[cor-of-one-positive]]).

[L2] Induction principle ([[thm-induction-principle]]), and the recursion clauses $a^0 = 1$, $a^{k+1} = a^k a$ defining integer powers ([[def-integer-power]]).

[L3] Bernoulli's inequality: $(1+x)^n \ge 1 + nx$ for $x \ge -1$ and $n \in \mathbb{N}$ ([[lem-bernoulli-inequality]]).

[L4] Power laws: $(ab)^n = a^n b^n$, and $a^n \ne 0$ when $a \ne 0$ ([[lem-power-laws]]).

[L5] Powers and order: $a \ge 0$ gives $a^n \ge 0$ and $a > 0$ gives $a^n > 0$; $1^n = 1$ for every $n$ ([[lem-power-monotone]]).

[L6] Reciprocals: $a > 0$ gives $a^{-1} > 0$; $0 < a < b$ gives $0 < b^{-1} < a^{-1}$ ([[lem-of-inverse-positive]]); and $0 < t < 1$ exactly when $1/t > 1$ ([[prop-of-reciprocal-order]]).

[L7] Archimedean property: for every $x \in \mathbb{R}$ there is a natural $n \ge 1$ with $x < n$ ([[thm-of-archimedean]]); and for every $\varepsilon > 0$ there is a natural $N \ge 1$ with $1/N < \varepsilon$ ([[cor-archimedean-reciprocal]]).

[L8] Canonical naturals: $n > 0$ for $n \ge 1$, and $m \le n$ in $\mathbb{N}$ gives $m \le n$ in $\mathbb{R}$ ([[lem-of-naturals-positive]]).

[L9] Multiplying inequalities of nonnegatives: $0 \le a \le b$ and $0 \le c \le d$ give $ac \le bd$ ([[prop-of-multiply-inequalities]]).

[L10] Trichotomy of the order on $\mathbb{R}$ ([[def-complete-ordered-field]], [[def-ordered-field]]).

[L11] Convergence to $0$ and divergence to $+\infty$ for a sequence of reals; a rational test value $\varepsilon > 0$ is in particular a real one ([[def-real-limit]], [[def-divergence-to-infinity]], [[def-sequence]]).

## Proof

**Proof technique:** cases.

1.1 First, $|r^k| = |r|^k$ for every $k \in \mathbb{N}$, by induction: at $k = 0$ both sides are $|1| = 1$, and if $|r^k| = |r|^k$ then $|r^{k+1}| = |r^k r| = |r^k|\,|r| = |r|^k |r| = |r|^{k+1}$. [given, L1, L2]

1.2 **Case zero.** Assume $r = 0$. [given, assume-case zero]

1.3 **Case small.** Assume $0 < |r| < 1$. [given, assume-case small]

1.4 **Case large.** Assume $|r| > 1$. [given, assume-case large]

2.1 In case zero, $r^k = 0$ for every $k \ge 1$: indeed $r^1 = r^0 r = 1 \cdot 0 = 0$, and if $r^k = 0$ then $r^{k+1} = r^k r = 0$, so induction gives the claim from $k = 1$ on. [step 1.2, L2]

2.2 In case small, put $s := 1/|r|$, which is defined since $|r| \ne 0$, and $h := s - 1$. Then $s > 1$ and $h > 0$. [step 1.3, L1, L6, choose]

2.3 In case large, put $h' := |r| - 1$, so $h' > 0$ and $|r| = 1 + h'$. [step 1.4, choose]

3.1 In case zero, for every rational $\varepsilon > 0$ and every $k \ge 1$ we have $|r^k - 0| = |0| = 0 < \varepsilon$, so $r^k \to 0$ and claim 1 holds. [step 2.1, L1, L11]

3.2 In case small, $|r|^k s^k = (|r| s)^k = 1^k = 1$, so $|r|^k = 1/s^k$, and $s^k > 0$. [step 2.2, L4, L5]

3.3 In case small, Bernoulli applied to $h > 0 \ge -1$ gives $s^k = (1+h)^k \ge 1 + kh > kh > 0$ for every $k \ge 1$, using $1 > 0$ and $kh > 0$. [step 2.2, L3, L8, L9]

3.4 In case large, Bernoulli applied to $h' > 0 \ge -1$ gives $|r|^k = (1 + h')^k \ge 1 + k h'$ for every $k \in \mathbb{N}$. [step 2.3, L3]

3.5 In case large, let $M \in \mathbb{R}$ be arbitrary and use [L7] to fix a natural $n \ge 1$ with $M/h' < n$; then $M \le n h'$, since multiplying $M/h' \le n$ by $h' > 0$ preserves the inequality. [step 2.3, L7, L9, choose]

3.6 In case small, let $\varepsilon > 0$ be rational; then $\varepsilon h > 0$, so [L7] supplies a natural $N \ge 1$ with $1/N < \varepsilon h$, whence $1/(Nh) \le \varepsilon$ on multiplying by $1/h > 0$. [step 2.2, L6, L7, L9, choose]

4.1 In case small, combining steps 3.2 and 3.3: $0 < kh < s^k$ gives $|r|^k = 1/s^k < 1/(kh)$ for every $k \ge 1$. [step 3.2, step 3.3, L6]

4.2 In case large, for every $k \ge n$ we have $k h' \ge n h' \ge M$, so $|r|^k \ge 1 + k h' \ge 1 + M > M$, the last step because $1 > 0$. [step 3.4, step 3.5, L1, L8, L9]

5.1 In case small, for every $k \ge N$ we have $kh \ge Nh > 0$, hence $1/(kh) \le 1/(Nh) \le \varepsilon$, and therefore $|r^k - 0| = |r^k| = |r|^k < 1/(kh) \le \varepsilon$. [step 1.1, step 4.1, step 3.6, L6, L8, L9]

5.2 In case large, an index $n$ has been produced for an arbitrary real $M$ with $|r|^k > M$ for all $k \ge n$, which is exactly divergence to $+\infty$: claim 2 holds. [step 4.2, L11]

6.1 In case small, the rational $\varepsilon > 0$ was arbitrary and the index $N$ was produced from it, so $r^k \to 0$ and claim 1 holds. [step 5.1, L11]

7.1 The hypothesis $|r| < 1$ of claim 1 is exhausted by cases zero and small, since $|r| \ge 0$ with $|r| = 0$ exactly when $r = 0$, so trichotomy leaves only $0 < |r| < 1$; the hypothesis $|r| > 1$ of claim 2 is case large. Both claims are therefore established. [step 3.1, step 5.2, step 6.1, L1, L10, cases: zero small or large, cases-exhaustive] ∎

## Remarks

- **The two claims are not one claim in disguise.** For $|r| > 1$ the sequence
  $(r^k)$ itself has no limiting behaviour to record when $r$ is negative: its
  terms alternate in sign and grow, so it neither converges nor diverges to
  $+\infty$ nor to $-\infty$. Stating claim 2 for $|r|^k$ is what makes it true
  as written.

- **The boundary $|r| = 1$ is excluded and is genuinely different.** For $r = 1$
  the sequence is constant $1$; for $r = -1$ it is the alternating sequence
  ([[lem-alternating-sequence]]), which is bounded and divergent
  ([[fs-bounded-implies-convergent]]). So neither claim extends to $|r| = 1$, and
  the two cases at the boundary do not even agree with each other.

- **Where this is used.** Claim 1 supplies the null sequence $c^{k}$ that makes a
  contractive sequence Cauchy ([[thm-contractive-implies-cauchy]]) and the null
  sequence $(1/10)^n$ that identifies the limit of the decimal truncations of
  $\sqrt 2$ ([[cex-cauchy-rationals-no-rational-limit]]).
