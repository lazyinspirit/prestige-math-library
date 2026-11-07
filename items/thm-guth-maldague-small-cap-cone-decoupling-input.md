---
id: thm-guth-maldague-small-cap-cone-decoupling-input
kind: theorem
title: "Guth–Maldague Small-Cap Cone Decoupling Estimate"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps: [thm-guth-maldague-amplitude-dependent-cone-envelope-input]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Larry Guth and Dominique Maldague, “Amplitude Dependent Wave Envelope Estimates for the Cone in ℝ³”"
      url: "https://arxiv.org/pdf/2206.01093v2"
      locator: "Theorem 3 and §10"
    - title: "Xiao-Chun Li and Xuerui Yang, “An Improvement on Gauss’s Circle Problem and Dirichlet’s Divisor Problem”"
      url: "https://arxiv.org/pdf/2308.14859v2"
      locator: "§3.3, application of the small-cap theorem"
verification:
  precheck: n/a
---

## Statement

Let $R\in4^{\mathbb N}$ be sufficiently large, as in the source cap-partition convention, and define
$$\Gamma=\{(\xi_1,\xi_2,\xi_3)\in\mathbb R^3: \xi_1^2+\xi_2^2=\xi_3^2,\ 1/2\le|\xi_3|\le1\}.$$
For $\rho>0$, let $N_\rho(\Gamma)$ be the closed Euclidean $\rho$-neighborhood
of $\Gamma$. Use the Fourier transform
$\widehat f(\xi)=\int_{\mathbb R^3}f(x)e^{-2\pi i x\cdot\xi}\,dx$ and inverse
transform $g^\vee(x)=\int_{\mathbb R^3}g(\xi)e^{2\pi i x\cdot\xi}\,d\xi$.
A Schwartz function is smooth with all derivatives decaying faster than every
inverse power of $1+|x|$.

Let $\beta_1\in[1/2,1]$, $\beta_2\in[0,1]$, and $p\ge2$. For measurable $F$, define $\|F\|_{L^p(\mathbb R^3)}=(\int_{\mathbb R^3}|F(x)|^p\,dx)^{1/p}$. Partition
$N_{R^{-1}}(\Gamma)$ into canonical cone planks $\theta$ of dimensions
$1\times R^{-1/2}\times R^{-1}$; canonical means maximal subsets comparable,
up to fixed absolute constants, to convex sets. In the same frame as each
parent $\theta$, subdivide it into small caps $\gamma$ of dimensions
$R^{-\beta_2}\times R^{-\beta_1}\times R^{-1}$, and put
$f_\gamma=(\mathbf1_\gamma\widehat f)^\vee$. For every Schwartz function $f$
with $\operatorname{supp}\widehat f\subset N_{R^{-1}}(\Gamma)$ and every
$\varepsilon>0$, there is $C_\varepsilon>0$, independent of $R$ and $f$,
such that
$$\int_{\mathbb R^3}|f(x)|^p\,dx \le C_\varepsilon R^\varepsilon \left( R^{(\beta_1+\beta_2)(p/2-1)} +R^{(\beta_1+\beta_2)(p-2)-1} +R^{(\beta_1+\beta_2-1/2)(p-2)} \right) \sum_{\theta}\sum_{\gamma\subset\theta} \|f_\gamma\|_{L^p(\mathbb R^3)}^p.$$


## Statement references

[Larry Guth and Dominique Maldague, “Amplitude Dependent Wave Envelope Estimates for the Cone in ℝ³”](https://arxiv.org/pdf/2206.01093v2)

[Xiao-Chun Li and Xuerui Yang, “An Improvement on Gauss’s Circle Problem and Dirichlet’s Divisor Problem”](https://arxiv.org/pdf/2308.14859v2)

## Facts & Assumptions

**Given:** The parameters, cone, frequency support and small-cap partition in the statement.

[L1] The required Guth–Maldague envelope input uses the squared local energy $|U|^{-1}\|S_Uf\|_{L^2}^4=|U|^{-1}(\int|S_Uf|^2)^2$, with selected envelopes defined by $C_\varepsilon R^\varepsilon|U|^{-1}\int|S_Uf|^2\ge\alpha^2/m_s(f)^2$. This is the genuine Theorem2 interface; the supplier deep proof remains unsupplied. [[thm-guth-maldague-amplitude-dependent-cone-envelope-input]]

## Proof status

The Theorem 3 small-cap conventions and Fourier projections are transcribed in the Statement. The complete §10 derivation is not reconstructed locally, and the required amplitude-dependent Theorem 2 supplier remains escalated.
