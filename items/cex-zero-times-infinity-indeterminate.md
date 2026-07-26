---
id: cex-zero-times-infinity-indeterminate
kind: counterexample
title: "Null times divergent has no rule: $x_k = 1/k$ with $y_k = ck$ gives product limit $c$, and with $y_k = k^2$ gives divergence"
status: draft
origin: session
deps: [def-extended-reals, def-divergence-to-infinity, thm-algebra-of-limits, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, lem-of-naturals-positive, lem-limit-unique, lem-convergent-implies-bounded, def-real-limit, def-sequence, def-integer-power, lem-of-sign-rules, lem-of-add-order, cor-of-one-positive, def-nat-order, thm-nat-linear-order, def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Indeterminate form (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Indeterminate_form"
    - title: "Extended real number line (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Extended_real_number_line"
    - title: "T. Tao, Analysis I, 3rd ed., §6.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement refuted

That the product $0 \cdot (+\infty)$, left undefined by [[def-extended-reals]],
could be given a value compatible with limits: that there is
$v \in \overline{\mathbb{R}}$ such that for all sequences of reals with
$x_k \to 0$ ([[def-real-limit]]) and $y_k \to +\infty$
([[def-divergence-to-infinity]]) the products $x_k y_k$ have the single limiting
behaviour named by $v$.

Equivalently: that knowing a factor is null and the other diverges to $+\infty$
determines anything at all about the product. It does not, and the two undefined
entries in the arithmetic of $\overline{\mathbb{R}}$ are undefined for exactly
this reason.

## Facts & Assumptions

**Given:** The canonical naturals $\iota(n) = n \cdot 1_{\mathbb{R}}$; the sequence $x_k := 1/\iota(k+1)$; for a real $c > 0$ the sequence $y^{(c)}_k := c\,\iota(k+1)$; and the sequence $z_k := \iota(k+1)\,\iota(k+1)$.

[L1] Canonical naturals: $\iota(n) > 0$ and invertible for $n \ge 1$, $\iota$ is strictly increasing, and $\iota(n) \ge 1$ for $n \ge 1$ ([[lem-of-naturals-positive]], [[def-nat-order]], [[thm-nat-linear-order]]).

[L2] Archimedean facts: for every real $\eta > 0$ there is a natural $p \ge 1$ with $1/p < \eta$, and for every real $M$ there is a natural $p \ge 1$ with $M < \iota(p)$; and $0 < u < v$ gives $0 < 1/v < 1/u$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[lem-of-inverse-positive]]).

[L3] Convergence to a real and divergence to $+\infty$; to establish convergence it suffices to produce a threshold for every real $\varepsilon > 0$; a constant sequence converges to its value ([[def-real-limit]], [[def-sequence]], [[def-divergence-to-infinity]]).

[L4] A sequence diverging to $+\infty$ is unbounded and therefore does not converge to any real ([[def-divergence-to-infinity]], [[lem-convergent-implies-bounded]]); a limit, when it exists, is unique ([[lem-limit-unique]]).

[L5] Order and field arithmetic: multiplying an inequality by a positive element preserves it; $0 < 1 < 2$ and $1 \ne 2$; $u \cdot (1/u) = 1$ for $u \ne 0$; and the algebra of limits ([[lem-of-sign-rules]], [[lem-of-add-order]], [[cor-of-one-positive]], [[thm-algebra-of-limits]], [[def-integer-power]], [[def-ordered-field]], [[def-complete-ordered-field]]).

[L6] The product $0 \cdot (\pm\infty)$ is left undefined in $\overline{\mathbb{R}}$ ([[def-extended-reals]]).

## Counterexample

**Proof technique:** direct.

1.1 The sequence $x_k = 1/\iota(k+1)$ is well defined, positive, and converges to $0$: given a real $\varepsilon > 0$, take a natural $p \ge 1$ with $1/p < \varepsilon$; for $k \ge p$ we have $\iota(k+1) > \iota(p) > 0$, hence $0 < x_k < 1/p < \varepsilon$. [given, L1, L2, L3]

1.2 For every real $c > 0$ the sequence $y^{(c)}_k = c\,\iota(k+1)$ diverges to $+\infty$: given a real $M$, the quotient $M/c$ is real, so there is a natural $p \ge 1$ with $M/c < \iota(p)$, and for $k \ge p$ we get $\iota(k+1) > \iota(p) > M/c$, hence $y^{(c)}_k = c\,\iota(k+1) > M$ after multiplying by $c > 0$. [given, L1, L2, L3, L5]

1.3 The sequence $z_k = \iota(k+1)\iota(k+1)$ diverges to $+\infty$: given a real $M$, take a natural $p \ge 1$ with $M < \iota(p)$; for $k \ge p$ we have $\iota(k+1) \ge 1$ and $\iota(k+1) > \iota(p) > M$, so $z_k \ge \iota(k+1) > M$. [given, L1, L2, L3, L5]

2.1 For every real $c > 0$ the product sequence is constant: $x_k y^{(c)}_k = \big(1/\iota(k+1)\big)\,c\,\iota(k+1) = c$ for every $k$, so it converges to $c$. [step 1.1, step 1.2, L3, L5]

2.2 The product with $(z_k)$ is $x_k z_k = \big(1/\iota(k+1)\big)\iota(k+1)\iota(k+1) = \iota(k+1)$, which diverges to $+\infty$ by the argument of step 1.3 with the single factor, and therefore converges to no real number. [step 1.1, step 1.3, L1, L2, L3, L4, L5]

3.1 Now take the three pairs $(x, y^{(1)})$, $(x, y^{(2)})$ and $(x, z)$. In each, the first sequence is null and the second diverges to $+\infty$, so each pair satisfies the hypotheses of the refuted claim; but the three products converge to $1$, converge to $2$, and converge to nothing at all. Since $1 \ne 2$ and limits are unique, no single $v \in \overline{\mathbb{R}}$ describes all three, and the claim is false. [step 2.1, step 2.2, L4, L5, L6] ∎

## Remarks

- **This is why the entry is blank in the table.** [[def-extended-reals]] leaves
  $0 \cdot (\pm\infty)$ undefined not out of caution but because any value
  assigned to it would make some instance of a product rule false, and the three
  pairs above already realise three different behaviours.

- **The same phenomenon rules out $(+\infty) + (-\infty)$.** Taking
  $a_k = \iota(k)$ and $b_k = -\iota(k)$ gives a sum that is constantly $0$, while
  $a_k = \iota(k)$ and $b_k = -\iota(k) - \iota(k)$ gives a sum diverging to
  $-\infty$; both pairs have $a_k \to +\infty$ and $b_k \to -\infty$.

- **Measure theory's convention is not a counterexample to this.** Texts that set
  $0 \cdot \infty := 0$ are fixing the value of a *formula* in a context where the
  factor $0$ is the measure of a null set, not asserting a limit rule; the
  distinction is spelled out in [[rem-extended-real-conventions]].

- **Index range.** The classical statement writes $x_k = 1/k$ and $y_k = ck$,
  which requires $k \ge 1$. Written on $\mathbb{N}$, which contains $0$
  ([[def-sequence]]), the same sequences are $1/(k+1)$ and $c(k+1)$, as above.
