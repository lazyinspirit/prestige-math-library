---
id: ex-weighted-norm-of-an-interval-indicator
kind: example
title: Weighted norm of an interval indicator
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 7
deps: [def-weight-and-weighted-lp-space, def-muckenhoupt-a-p-and-a-one-weights, ex-power-weight-a-p-range, thm-real-power-continuity-and-derivatives, thm-logarithm-derivative-and-integral, thm-comparison-test-for-improper-integrals, def-countable-choice]
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed. (Springer GTM 249, 2014)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "§7.1, power weights as the model family, printed pp. 499-507"
    - title: "Juha Kinnunen, Harmonic Analysis (Aalto University lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/harmonic_analysis.pdf"
      locator: "§4.1, power-weight computations, printed p. 75"
verification:
  precheck: pass
---

## Example

Assume the Axiom of Countable Choice ([[def-countable-choice]]).

Let $n=1$, let $1<p<\infty$, let $-1<\alpha<p-1$ and let $r>0$. For the
admissible power weight $w(x)=|x|^\alpha$ one has
$$\|\mathbf 1_{(0,r)}\|_{L^p(w)}=\Bigl(\frac{r^{\alpha+1}}{\alpha+1}\Bigr)^{1/p},$$
which tends to $0$ as $r\to0^+$ and grows like $r^{(\alpha+1)/p}$ as
$r\to\infty$. At the endpoint $\alpha=-1$ the integral
$\int_0^rx^{-1}dx$ diverges logarithmically for every $r>0$, and for each fixed $r>0$ the displayed norm diverges as $\alpha\downarrow-1$.

## Facts & Assumptions

**Given:** Countable Choice; $1<p<\infty$, $-1<\alpha<p-1$, $r>0$, and $w(x)=|x|^\alpha$ on $\mathbb R$.

[F1] $\|f\|_{L^p(w)}^p=\int_{\mathbb R}|f|^pw\,d\lambda$ and $L^p(w)$ is the corresponding space of classes ([[def-weight-and-weighted-lp-space]]); the weight $|x|^\alpha$ is admissible for $\alpha>-1$ and lies in $A_p$ for $-1<\alpha<p-1$ ([[ex-power-weight-a-p-range]], [[def-muckenhoupt-a-p-and-a-one-weights]]).

[F2] For $\alpha>-1$ the power function has antiderivative $t^{\alpha+1}/(\alpha+1)$ on $(0,\infty)$, and $\int_0^rt^{-1}dt=+\infty$ for every $r>0$, the divergence being logarithmic ([[thm-real-power-continuity-and-derivatives]], [[thm-logarithm-derivative-and-integral]], [[thm-comparison-test-for-improper-integrals]]).

## Verification

**Proof technique:** direct.

1.1 Direct computation: $\|\mathbf 1_{(0,r)}\|_{L^p(w)}^p=\int_0^r|x|^\alpha dx=\int_0^rx^\alpha dx=r^{\alpha+1}/(\alpha+1)$ for $\alpha>-1$ by [F2], since $|x|=x$ on $(0,r)$; taking $p$-th roots gives the displayed formula. [F1, F2, given, algebra]

2.1 As $r\to0^+$ the expression $(r^{\alpha+1}/(\alpha+1))^{1/p}$ tends to $0$ because $\alpha+1>0$; as $r\to\infty$ it grows like the constant multiple $r^{(\alpha+1)/p}$ of the power function. At $\alpha=-1$ one has $\int_0^rx^{-1}dx=+\infty$ by [F2], so for fixed $r>0$ the full expression $(r^{\alpha+1}/(\alpha+1))^{1/p}$ diverges as $\alpha\downarrow-1$, since $r^{\alpha+1}\to1$. The density $|x|^{-1}$ does not satisfy this page's local-integrability definition of a weight; its integral of the indicator is nevertheless well defined and infinite. [F2, step 1.1, given, algebra] ∎
