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

Let $d\ge2$, let $U\subset\mathbb R^d$ and $\Gamma\subset\mathbb R^d$ be measurable, and let $\mu_r$ and $\mu_b$ be probability measures on them. For positive integers $m_r,m_b$, let the residual samples $x_1^r,\ldots,x_{m_r}^r$ and boundary samples $x_1^b,\ldots,x_{m_b}^b$ form $\varepsilon_r$- and $\varepsilon_b$-nets of $U$ and $\Gamma$ in Euclidean distance. Assume that for every center $x\in U$ and $y\in\Gamma$,
$$\mu_r(\overline B_{\varepsilon_r}(x)\cap U)\le C_r\varepsilon_r^d,\qquad \mu_b(\overline B_{\varepsilon_b}(y)\cap\Gamma)\le C_b\varepsilon_b^{d-1}.$$
Suppose $[L[h]]_{\alpha;U}$, $[B[h]]_{\alpha;\Gamma}$, $[f]_{\alpha;U}$, and $[g]_{\alpha;\Gamma}$ are finite, where $[v]_{\alpha;E}=\sup_{x\ne y\in E}|v(x)-v(y)|/|x-y|^\alpha$. Let $\lambda_r,\lambda_b>0$, and use the population and empirical weighted-square PINN losses
$$\operatorname{Loss}^{\mathrm{PINN}}(h;\lambda)=\lambda_r\int_U|L[h]-f|^2\,d\mu_r+\lambda_b\int_\Gamma|B[h]-g|^2\,d\mu_b,$$
$$\operatorname{Loss}^{\mathrm{PINN}}_m(h;\lambda)=\frac{\lambda_r}{m_r}\sum_{i=1}^{m_r}|L[h](x_i^r)-f(x_i^r)|^2+\frac{\lambda_b}{m_b}\sum_{j=1}^{m_b}|B[h](x_j^b)-g(x_j^b)|^2.$$
Define
$$C_m=3\max\{C_rm_r\varepsilon_r^d,\ C_bm_b\varepsilon_b^{d-1}\},\quad \lambda^R_{r,m}=\frac{3\lambda_r\varepsilon_r^{2\alpha}}{C_m},\quad \lambda^R_{b,m}=\frac{3\lambda_b\varepsilon_b^{2\alpha}}{C_m}.$$
Then
$$\operatorname{Loss}^{\mathrm{PINN}}(h;\lambda)\le C_m\operatorname{Loss}^{\mathrm{PINN}}_m(h;\lambda)+C_m\left(\lambda^R_{r,m}[L[h]]_{\alpha;U}^2+\lambda^R_{b,m}[B[h]]_{\alpha;\Gamma}^2\right)+3\lambda_r\varepsilon_r^{2\alpha}[f]_{\alpha;U}^2+3\lambda_b\varepsilon_b^{2\alpha}[g]_{\alpha;\Gamma}^2.$$

## Statement references
[Shin et al., Appendix B, Lemmas B.1–B.2: deterministic fill-distance inequality](https://arxiv.org/pdf/2004.01806)

[Shin et al., Appendix B, proof of Lemma B.1](https://arxiv.org/pdf/2004.01806)

## Facts & Assumptions

**Given:** The trial function, residual and boundary operators, sample sets, fill distances, measures, and positive loss weights in the Statement.

[F1] The population and empirical PINN losses use the weighted-square conventions in the local definition ([[def-physics-informed-neural-network-loss]]).

[F2] Each cell in the partition has residual mass at most $C_r\varepsilon_r^d$ and boundary mass at most $C_b\varepsilon_b^{d-1}$ by the upper ball-mass assumptions in the Statement.

[F3] The Hölder seminorm convention is $|v(x)-v(y)|\le[v]_{\alpha;E}|x-y|^\alpha$ ([[def-physics-informed-neural-network-loss]]).

## Proof

**Proof strategy:** integrate local collocation bounds over nearest-sample cells.

1.1 Order each finite sample set and assign each point of $U$ to a nearest residual sample, breaking ties by the least index. This produces a measurable finite Voronoi partition $V_1,\ldots,V_{m_r}$; each cell lies in the radius-$\varepsilon_r$ ball about its assigned sample, so [F2] gives $\mu_r(V_i)\le C_r\varepsilon_r^d$. Use the same construction on $\Gamma$ to get cells $W_j$ with $\mu_b(W_j)\le C_b\varepsilon_b^{d-1}$. [given, F2, choose]

1.2 If $x\in V_i$, the three-term square inequality and [F3] give $$|L[h](x)-f(x)|^2\le3|L[h](x_i^r)-f(x_i^r)|^2+3\varepsilon_r^{2\alpha}[L[h]]_{\alpha;U}^2+3\varepsilon_r^{2\alpha}[f]_{\alpha;U}^2.$$ If $y\in W_j$, the same argument gives the corresponding boundary bound with $B[h]$, $g$, and $\varepsilon_b$. [given, F3, algebra]

2.1 Integrate the residual inequality over the cells. The collocation terms contribute at most $3C_rm_r\varepsilon_r^d\lambda_r m_r^{-1}\sum_i|L[h](x_i^r)-f(x_i^r)|^2$, and the seminorm and data terms contribute $3\lambda_r\varepsilon_r^{2\alpha}([L[h]]_{\alpha;U}^2+[f]_{\alpha;U}^2)$ because $\mu_r(U)=1$. [step 1.1, step 1.2, F1, algebra]

2.2 Integrating the boundary inequality gives the same estimate with $3C_bm_b\varepsilon_b^{d-1}$ multiplying the empirical boundary term and $3\lambda_b\varepsilon_b^{2\alpha}([B[h]]_{\alpha;\Gamma}^2+[g]_{\alpha;\Gamma}^2)$ for the remaining terms. [step 1.1, step 1.2, F1, algebra]

3.1 By the definition of $C_m$, the empirical residual and boundary coefficients in steps 2.1–2.2 are at most $C_m$. The two residual seminorm coefficients equal $C_m\lambda^R_{r,m}$ and $C_m\lambda^R_{b,m}$ by definition, while the data terms already have their displayed coefficients. Adding the two estimates yields the result. [step 2.1, step 2.2, algebra] ∎

