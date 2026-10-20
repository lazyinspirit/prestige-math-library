---
id: lem-pinn-residual-loss-from-fill-distance
kind: lemma
title: "Fill-distance control of the population PINN loss"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-physics-informed-neural-network-loss
  - alg-empirical-pinn-objective
  - thm-finite-and-countable-subadditivity-of-measures
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: n/a
sources:
  references:
    - title: "Shin, Darbon, and Karniadakis, On the Convergence of Physics-Informed Neural Networks for Linear Second-Order Elliptic and Parabolic Type PDEs"
      url: "https://arxiv.org/pdf/2004.01806"
      locator: "Appendix B, Lemmas B.1–B.2, equation (18)"
---

## Statement

For $d\ge2$, let $U\subset\mathbb R^d$ and $\Gamma\subset\mathbb R^d$ be measurable, and let $\mu_r$ and $\mu_b$ be probability measures on them. For positive integers $m_r,m_b$, let the residual samples $x_1^r,\ldots,x_{m_r}^r$ and boundary samples $x_1^b,\ldots,x_{m_b}^b$ form $\varepsilon_r$- and $\varepsilon_b$-nets of $U$ and $\Gamma$ in Euclidean distance. Assume that for every center $x\in U$ and $y\in\Gamma$,
$$\mu_r(\overline B_{\varepsilon_r}(x)\cap U)\le C_r\varepsilon_r^d,\qquad \mu_b(\overline B_{\varepsilon_b}(y)\cap\Gamma)\le C_b\varepsilon_b^{d-1}.$$
Suppose $[L[h]]_{\alpha;U}$, $[B[h]]_{\alpha;\Gamma}$, $[f]_{\alpha;U}$, and $[g]_{\alpha;\Gamma}$ are finite, where $[v]_{\alpha;E}=\sup_{x\ne y\in E}|v(x)-v(y)|/|x-y|^\alpha$. Let $\lambda_r,\lambda_b>0$, and use the population and empirical weighted-square PINN losses
$$\operatorname{Loss}^{\mathrm{PINN}}(h;\lambda)=\lambda_r\int_U|L[h]-f|^2\,d\mu_r+\lambda_b\int_\Gamma|B[h]-g|^2\,d\mu_b,$$
$$\operatorname{Loss}^{\mathrm{PINN}}_m(h;\lambda)=\frac{\lambda_r}{m_r}\sum_{i=1}^{m_r}|L[h](x_i^r)-f(x_i^r)|^2+\frac{\lambda_b}{m_b}\sum_{j=1}^{m_b}|B[h](x_j^b)-g(x_j^b)|^2.$$
Define
$$C_m=3\max\{C_rm_r\varepsilon_r^d,\ C_bm_b\varepsilon_b^{d-1}\},\quad \lambda^R_{r,m}=\frac{3\lambda_r\varepsilon_r^{2\alpha}}{C_m},\quad \lambda^R_{b,m}=\frac{3\lambda_b\varepsilon_b^{2\alpha}}{C_m}.$$
Then
$$\operatorname{Loss}^{\mathrm{PINN}}(h;\lambda)\le C_m\operatorname{Loss}^{\mathrm{PINN}}_m(h;\lambda)+C_m\left(\lambda^R_{r,m}[L[h]]_{\alpha;U}^2+\lambda^R_{b,m}[B[h]]_{\alpha;\Gamma}^2\right)+3\lambda_r\varepsilon_r^{2\alpha}[f]_{\alpha;U}^2+3\lambda_b\varepsilon_b^{2\alpha}[g]_{\alpha;\Gamma}^2.$$

For $d=1$, assume $\mu_r$ is a probability measure on measurable $U\subset\mathbb R$, and $\Gamma$ is a nonempty finite measurable set with probability measure $\mu_b$. Every point of $\Gamma$ is available deterministically. For a positive integer $m_r$, let $x_1^r,\ldots,x_{m_r}^r$ form an $\varepsilon_r$-net of $U$, and assume $\mu_r(\overline B_{\varepsilon_r}(x)\cap U)\le C_r\varepsilon_r$ for every center $x\in U$. Suppose the same four Hölder seminorms are finite. Use the exact weighted boundary loss
$$\operatorname{Loss}^{\mathrm{PINN},b}(h;\lambda_b)=\lambda_b\int_\Gamma|B[h]-g|^2\,d\mu_b=\lambda_b\sum_{y\in\Gamma}\mu_b(\{y\})|B[h](y)-g(y)|^2$$
and the empirical loss $\operatorname{Loss}^{\mathrm{PINN}}_m(h;\lambda)=\frac{\lambda_r}{m_r}\sum_{i=1}^{m_r}|L[h](x_i^r)-f(x_i^r)|^2+\operatorname{Loss}^{\mathrm{PINN},b}(h;\lambda_b)$. Set
$$C_m=3C_rm_r\varepsilon_r,\qquad \lambda^R_{r,m}=\frac{3\lambda_r\varepsilon_r^{2\alpha}}{C_m},\qquad \lambda^R_{b,m}=0.$$
Then
$$\operatorname{Loss}^{\mathrm{PINN}}(h;\lambda)\le C_m\operatorname{Loss}^{\mathrm{PINN}}_m(h;\lambda)+C_m\lambda^R_{r,m}[L[h]]_{\alpha;U}^2+3\lambda_r\varepsilon_r^{2\alpha}[f]_{\alpha;U}^2.$$
There is no random boundary term or boundary-data error term in this branch because the full boundary contribution is evaluated exactly.

## Statement references
[Shin et al., Appendix B, Lemmas B.1–B.2: deterministic fill-distance inequality](https://arxiv.org/pdf/2004.01806)

[Shin et al., Appendix B, proof of Lemma B.1](https://arxiv.org/pdf/2004.01806)

## Facts & Assumptions

**Given:** The trial function, residual and boundary operators, sample sets, fill distances, measures, and positive loss weights in the Statement.

[F1] The population and empirical PINN losses use the weighted-square conventions in the local definition ([[def-physics-informed-neural-network-loss]]).

[F2] For $d\ge2$, the residual cells have mass at most $C_r\varepsilon_r^d$ and the boundary cells have mass at most $C_b\varepsilon_b^{d-1}$ by the upper ball-mass assumptions. For $d=1$, each residual cell has mass at most $C_r\varepsilon_r$ by the residual upper ball-mass assumption in the Statement.

[F3] The Hölder seminorm convention is $|v(x)-v(y)|\le[v]_{\alpha;E}|x-y|^\alpha$ ([[def-physics-informed-neural-network-loss]]).

[F4] In the one-dimensional branch, the exact full-boundary empirical contribution equals the population boundary integral, and a finite union of sample-centered $\varepsilon_r$-balls covers $U$ ([[def-physics-informed-neural-network-loss]], [[thm-finite-and-countable-subadditivity-of-measures]]).

## Proof

**Proof strategy:** integrate local collocation bounds over nearest-sample cells.

1.1 Order the finite residual sample set and assign each point of $U$ to a nearest residual sample, breaking ties by the least index. This produces a measurable finite Voronoi partition $V_1,\ldots,V_{m_r}$; each cell lies in the radius-$\varepsilon_r$ ball about its assigned sample. For $d\ge2$, also assign each point of $\Gamma$ to a nearest boundary sample to obtain cells $W_j$; for $d=1$, use every point of the finite boundary deterministically and make no boundary partition. [given, choose]

1.2 By [F2], $\mu_r(V_i)\le C_r\varepsilon_r^d$ in the $d\ge2$ branch and $\mu_r(V_i)\le C_r\varepsilon_r$ in the $d=1$ branch. If $x\in V_i$, the three-term square inequality and [F3] give $$|L[h](x)-f(x)|^2\le3|L[h](x_i^r)-f(x_i^r)|^2+3\varepsilon_r^{2\alpha}[L[h]]_{\alpha;U}^2+3\varepsilon_r^{2\alpha}[f]_{\alpha;U}^2.$$ For $d\ge2$, each boundary cell satisfies $\mu_b(W_j)\le C_b\varepsilon_b^{d-1}$, and its analogous local square bound holds. [given, F2, F3, algebra]

2.1 Integrate the residual inequality over the cells. The collocation terms contribute at most $3C_rm_r\varepsilon_r^d\lambda_r m_r^{-1}\sum_i|L[h](x_i^r)-f(x_i^r)|^2$ for $d\ge2$, and $3C_rm_r\varepsilon_r\lambda_r m_r^{-1}\sum_i|L[h](x_i^r)-f(x_i^r)|^2$ for $d=1$. The seminorm and data terms contribute $3\lambda_r\varepsilon_r^{2\alpha}([L[h]]_{\alpha;U}^2+[f]_{\alpha;U}^2)$ because $\mu_r(U)=1$. [step 1.1, step 1.2, F1, algebra]

2.2 For $d\ge2$, integrating the boundary inequality gives the estimate with $3C_bm_b\varepsilon_b^{d-1}$ multiplying the empirical boundary term and $3\lambda_b\varepsilon_b^{2\alpha}([B[h]]_{\alpha;\Gamma}^2+[g]_{\alpha;\Gamma}^2)$ for the remaining terms. For $d=1$, the weighted boundary term in the population loss is exactly $\operatorname{Loss}^{\mathrm{PINN},b}(h;\lambda_b)$ from [F4]. [step 1.1, step 1.2, F1, F4, algebra]

3.1 For $d\ge2$, by the definition of $C_m$, the empirical residual and boundary coefficients in steps 2.1–2.2 are at most $C_m$. The seminorm coefficients equal $C_m\lambda^R_{r,m}$ and $C_m\lambda^R_{b,m}$ by definition, while the data terms already have their displayed coefficients. Adding the estimates yields the result. For $d=1$, the net and upper ball-mass bound imply $1=\mu_r(U)\le\sum_{i=1}^{m_r}\mu_r(\overline B_{\varepsilon_r}(x_i^r)\cap U)\le m_rC_r\varepsilon_r$, so $C_m\ge3$. Thus $C_m$ dominates the exact boundary term, the residual empirical coefficient from step 2.1 equals $C_m$, and $C_m\lambda^R_{r,m}=3\lambda_r\varepsilon_r^{2\alpha}$. Combining these bounds with the residual data term proves the one-dimensional inequality. [step 2.1, step 2.2, F4, algebra] ∎

