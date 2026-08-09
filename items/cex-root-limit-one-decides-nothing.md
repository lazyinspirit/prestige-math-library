---
id: cex-root-limit-one-decides-nothing
kind: counterexample
title: "$\\sum k^{-1/2}$ diverges and $\\sum k^{-2}$ converges, and both have root limit exactly $1$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-root-test, thm-p-series-rational, lem-nth-root-of-n-tends-to-one, def-rational-power, lem-rational-power-laws, lem-rational-power-monotone, thm-squeeze, thm-algebra-of-limits, thm-convergence-iff-limsup-equals-liminf, def-limsup-liminf, def-series, lem-of-naturals-positive, def-real-limit, lem-of-inverse-positive, lem-of-abs-value]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
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
    - title: "Root test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Root_test"
    - title: "Harmonic series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Harmonic_series_(mathematics)"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "Convergence tests (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Convergence_tests"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** the value $\limsup_k |a_{k+1}|^{1/(k+1)} = 1$ determines the
behaviour of $\sum_{k \ge 1} a_k$; that is, any two series with root quantity
equal to $1$ either both converge or both diverge.

The claim is refuted by the two families

$$a_k := k^{-1/2}, \qquad b_k := k^{-2} \qquad (k \ge 1),$$

rational powers of the canonical naturals ([[def-rational-power]]). Both have
root quantity exactly $1$, while $\sum_{k \ge 1} a_k$ diverges and
$\sum_{k \ge 1} b_k$ converges ([[thm-p-series-rational]], at $p = 1/2$ and
$p = 2$).

So the third clause of [[thm-root-test]] is not a gap in the proof: at
$\limsup = 1$ nothing whatever follows, and the two witnesses here are on
opposite sides.

## Facts & Assumptions

**Given:** The families $a_k := \iota(k)^{-1/2}$ and $b_k := \iota(k)^{-2}$ for naturals $k \ge 1$; the sequence $u_j := \iota(j+1)^{1/(j+1)}$, $j \in \mathbb{N}$; and the root families $\alpha_j := a_{j+1}^{1/(j+1)}$, $\beta_j := b_{j+1}^{1/(j+1)}$ ([[def-rational-power]], [[lem-of-naturals-positive]]).

[L1] $1 \le n^{1/n}$ for every natural $n \ge 1$, and $u_j = (j+1)^{1/(j+1)} \to 1$ ([[lem-nth-root-of-n-tends-to-one]]).

[L2] Laws of rational exponents on a positive base: $(x^{r})^{s} = x^{rs}$, $x^{-r} = 1/x^{r}$, $x^{r} > 0$, and $1^{r} = 1$ ([[lem-rational-power-laws]], [[def-rational-power]]).

[L3] Monotonicity of rational powers: for rational $t > 0$, $0 < x \le y$ implies $x^{t} \le y^{t}$; and for $x \ge 1$ and rationals $r < s$, $x^{r} \le x^{s}$ ([[lem-rational-power-monotone]]).

[L4] The squeeze theorem, and the product and quotient rules for limits, the quotient requiring a nonzero limit and nonzero denominators ([[thm-squeeze]], [[thm-algebra-of-limits]], [[def-real-limit]]).

[L5] A sequence converging to a real $c$ has $\limsup = \liminf = c$ ([[thm-convergence-iff-limsup-equals-liminf]], [[def-limsup-liminf]]).

[L6] $\sum_{k \ge 1} 1/k^{p}$ converges if and only if $p > 1$ ([[thm-p-series-rational]], [[def-series]]).

[L7] The canonical naturals are positive with $\iota(k) \ge 1$ for $k \ge 1$; reciprocation reverses the order on the positives; and $|x| = x$ for $x \ge 0$ ([[lem-of-naturals-positive]], [[lem-of-inverse-positive]], [[lem-of-abs-value]]).

## Counterexample

**Proof technique:** direct.

1.1 For $k \ge 1$ we have $\iota(k) \ge 1 > 0$, so $a_k$ and $b_k$ are positive and equal to their own absolute values; and $u_j \ge 1 > 0$ for every $j$. [given, L1, L2, L7]

1.2 The root family of $(b_k)$ is $\beta_j = \big(\iota(j+1)^{-2}\big)^{1/(j+1)} = \big(\iota(j+1)^{1/(j+1)}\big)^{-2} = 1/u_j^{2}$. [given, L2]

1.3 The series $\sum_{k \ge 1} k^{-1/2}$ is the $p$-series at $p = 1/2$, and $1/2 > 1$ is false, so it diverges. [given, L6]

1.4 The series $\sum_{k \ge 1} k^{-2}$ is the $p$-series at $p = 2$, and $2 > 1$, so it converges. [given, L6]

2.1 Since $\iota(j+1) \ge 1$ and $-1 < -1/2 < 0$, we have $\iota(j+1)^{-1} \le \iota(j+1)^{-1/2} \le \iota(j+1)^{0} = 1$. [step 1.1, L3, L2]

2.2 Since $u_j \to 1$, the product rule gives $u_j^{2} \to 1$, and the quotient rule then gives $\beta_j \to 1$; so $\limsup_j \beta_j = 1$. [step 1.2, L1, L4, L5]

3.1 The root family of $(a_k)$ is $\alpha_j = \big(\iota(j+1)^{-1/2}\big)^{1/(j+1)} = \iota(j+1)^{-1/(2(j+1))}$, and applying the same exponent to the two bounds of step 2.1 gives $1/u_j = \big(\iota(j+1)^{-1}\big)^{1/(j+1)} \le \alpha_j \le 1^{1/(j+1)} = 1$. [step 2.1, L2, L3]

4.1 Since $u_j \to 1$ with $u_j \ge 1 > 0$, the quotient rule gives $1/u_j \to 1$; so $\alpha_j \to 1$ by the squeeze theorem, and therefore $\limsup_j \alpha_j = 1$. [step 3.1, L1, L4, L5]

5.1 Both families have root quantity exactly $1$, yet one series diverges and the other converges; the claim is refuted, and the third clause of the root test is confirmed as unavoidable. [step 4.1, step 2.2, step 1.3, step 1.4] ∎

## Remarks

- **Every $p$-series has root quantity $1$.** The computation in step 1.2 generalises verbatim: for rational $p > 0$ the root family of $k^{-p}$ is $u_j^{-p}$, which tends to $1$ because $u_j$ does. So the root test is silent on the entire $p$-series family, which is precisely the family the condensation test settles.

- **The root test and the ratio test are silent on the same family.** The ratios of $k^{-p}$ also tend to $1$, so neither test separates $p = 1/2$ from $p = 2$. What does separate them is Raabe's test, whose expression reads the rate at which the ratios approach $1$; the companion example on this page carries the case $p = 2$.

- **Why the two exponents are $-1/2$ and $-2$ rather than $-1$ and $-2$.** Taking the divergent witness with a fractional exponent makes the point that the failure is not about the harmonic series in particular: the root quantity is blind to the exponent altogether, and any pair straddling $p = 1$ would do.
