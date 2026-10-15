---
id: def-b-adic-anova-components
kind: definition
title: "Base-$b$ Haar contrasts and multiresolution ANOVA components"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps: [def-integrable-real-and-complex-functions-and-their-integrals]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Variance of Scrambled Net Quadrature, §§6–7"
      url: "https://citeseerx.ist.psu.edu/document?doi=f6282581a7ecdce7e38020a74b3022ccf1cfe14e&repid=rep1&type=pdf"
    - title: "Art B. Owen, Local Antithetic Sampling with Scrambled Nets, §5.1"
      url: "https://artowen.su.domains/reports/localanti.pdf"
---

## Definition

Let $b\ge2$ and $d\ge1$ be integers. For integers $k\ge0$ and $0\le t<b^k$, put
$I_{k,t}=[tb^{-k},(t+1)b^{-k})$. For an integer $1\le r<b$, define the normalized
base-$b$ Haar contrast
$$h_{k,t,r}(x)=\sqrt{\frac{b^{k+1}}{r(r+1)}}\left( \sum_{c=0}^{r-1}\mathbf1_{I_{k+1,bt+c}}(x) -r\mathbf1_{I_{k+1,bt+r}}(x)\right).$$

For a nonempty subset $u\subseteq\{1,\ldots,d\}$, let
$\kappa=(k_j)_{j\in u}$, $\tau=(t_j)_{j\in u}$, and
$\rho=(r_j)_{j\in u}$ have integer entries satisfying
$k_j\ge0$, $0\le t_j<b^{k_j}$, and $1\le r_j<b$. Set
$$\psi_{u,\kappa,\tau,\rho}(x)=\prod_{j\in u}h_{k_j,t_j,r_j}(x_j).$$
For a real Borel function $f\in L^2([0,1)^d)$, define
$$I(f)=\int_{[0,1)^d}f(x)\,dx,\qquad \nu_{u,\kappa}(f)=\sum_{\tau,\rho} \left(\int_{[0,1)^d}f(x)\psi_{u,\kappa,\tau,\rho}(x)\,dx\right) \psi_{u,\kappa,\tau,\rho},\qquad \sigma^2_{u,\kappa}(f)=\int_{[0,1)^d}\nu_{u,\kappa}(f)^2\,dx.$$
The sums defining each $\nu_{u,\kappa}$ are finite. The complete orthogonal
decomposition across all $u,\kappa$ is established separately.
