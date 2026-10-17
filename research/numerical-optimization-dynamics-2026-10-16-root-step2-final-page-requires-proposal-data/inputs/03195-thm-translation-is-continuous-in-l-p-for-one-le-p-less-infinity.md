---
id: thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity
kind: theorem
title: "$\\|\\tau_h f - f\\|_p \\to 0$ in $L^p(\\mathbb{R}^n)$ as $h \\to 0$, for $1 \\le p < \\infty$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-translation-of-a-function-on-rn, thm-c-c-rn-is-dense-in-l-p-of-rn, lem-compactly-supported-continuous-functions-are-translation-continuous-in-l-p, thm-minkowski-inequality-for-integrals, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]
landmark: true
proof_strategy: "Approximate $f$ in $L^p$ by a compactly supported continuous function and use the previous lemma on that dense subclass. The three-term estimate is the page's exact reason for building $C_c$ density before convolution and approximate identities."
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Terence Tao, An Introduction to Measure Theory"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral: An Introduction to Real Analysis"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
---
## Statement

Assume the Axiom of Countable Choice.

Let $1 \le p < \infty$ and $f \in L^p(\mathbb{R}^n)$. Then

$$\|\tau_h f-f\|_p \longrightarrow 0 \qquad(h \to 0).$$

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, $1 \le p < \infty$, $f \in L^p(\mathbb{R}^n)$, and $\varepsilon > 0$.

[L1] $C_c(\mathbb{R}^n)$ is dense in $L^p(\mathbb{R}^n)$ ([[thm-c-c-rn-is-dense-in-l-p-of-rn]]).

[L2] Compactly supported continuous functions are translation-continuous in $L^p$ ([[lem-compactly-supported-continuous-functions-are-translation-continuous-in-l-p]]).

[L3] Lebesgue measure is translation invariant, so $\|\tau_h u\|_p = \|u\|_p$ ([[def-translation-of-a-function-on-rn]], [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]).

[L4] Minkowski's inequality is available ([[thm-minkowski-inequality-for-integrals]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], choose $g \in C_c(\mathbb{R}^n)$ with [L1, L2, given, choose] $\|f-g\|_p < \varepsilon/3$. By [L2], choose $\delta > 0$ such that $|h| < \delta$ implies $\|\tau_h g-g\|_p < \varepsilon/3$. [L1, L2, given, choose]

2.1 For $|h| < \delta$, [L3] and [L4] give [L3, L4, step 1.1, algebra] $$ \|\tau_h f-f\|_p \le \|\tau_h(f-g)\|_p + \|\tau_h g-g\|_p + \|g-f\|_p = 2\|f-g\|_p + \|\tau_h g-g\|_p < \varepsilon. $$ [L3, L4, step 1.1, algebra]

3.1 Since $\varepsilon > 0$ was arbitrary, $\|\tau_h f-f\|_p \to 0$ as [step 2.1] $h \to 0$. [step 2.1] ∎
