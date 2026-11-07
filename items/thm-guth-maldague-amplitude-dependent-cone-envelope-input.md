---
id: thm-guth-maldague-amplitude-dependent-cone-envelope-input
kind: theorem
title: "Guth–Maldague Amplitude-Dependent Cone Envelope Estimate"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: []
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Larry Guth and Dominique Maldague, “Amplitude Dependent Wave Envelope Estimates for the Cone in ℝ³”"
      url: "https://arxiv.org/pdf/2206.01093v2"
      locator: "Theorem 2 statement in §1; cap, envelope, weight and square-function definitions in §5; complete proof §§5–9 and Appendix §11.1"
    - title: "Xi Cen, Xitao Gao, Cheng Zhang, and Junyong Zhang, “A New Bound for the Gauss Circle Problem”"
      url: "https://arxiv.org/pdf/2610.21730v1"
      locator: "§6, use of Guth–Maldague Theorem 2"
verification:
  precheck: n/a
---

## Statement

Let $R\in4^{\mathbb N}$ be sufficiently large, as in the source cap-partition convention, and define
$$\Gamma=\{(\xi_1,\xi_2,\xi_3)\in\mathbb R^3: \xi_1^2+\xi_2^2=\xi_3^2,\ 1/2\le|\xi_3|\le1\}.$$
For $\rho>0$, let $N_\rho(\Gamma)=\{\xi\in\mathbb R^3:
\operatorname{dist}(\xi,\Gamma)\le\rho\}$, where distance is Euclidean.
Use the Fourier transform
$\widehat f(\xi)=\int_{\mathbb R^3}f(x)e^{-2\pi i x\cdot\xi}\,dx$
and inverse transform
$g^\vee(x)=\int_{\mathbb R^3}g(\xi)e^{2\pi i x\cdot\xi}\,d\xi$.
A Schwartz function is a smooth function all of whose derivatives decay faster than every inverse power of $1+|x|$. Let $f:\mathbb R^3\to\mathbb C$ be a Schwartz function with
$\operatorname{supp}\widehat f\subset N_{R^{-1}}(\Gamma)$.

Partition $N_{R^{-1}}(\Gamma)$ into canonical cone planks $\theta$ of
approximate dimensions $1\times R^{-1/2}\times R^{-1}$, and denote this
partition by $\mathcal S_{R^{-1/2}}$. Here canonical means maximal subsets
comparable, up to fixed absolute constants, to convex sets. For each dyadic
$s\in[R^{-1/2},1]$, let $\mathcal S_s$ be a compatible partition of
$N_{s^2}(\Gamma)$ into canonical cone planks $\tau$ of approximate dimensions
$1\times s\times s^2$, so every fine plank $\theta$ is either contained in
$\tau$ or disjoint from it. Define
$f_\theta=(\mathbf1_\theta\widehat f)^\vee$ and
$f_\tau=(\mathbf1_\tau\widehat f)^\vee$.

For each $\tau\in\mathcal S_s$, let $I_\tau$ be its angular interval in the cone partition and let $\omega_\tau$ be its left endpoint; put
$c_\tau=(\cos\omega_\tau,\sin\omega_\tau,1)$,
$n_\tau=(\cos\omega_\tau,\sin\omega_\tau,-1)$, and
$t_\tau=(-\sin\omega_\tau,\cos\omega_\tau,0)$, and define
$$U_{\tau,R}=\{x\in\mathbb R^3: |c_\tau\cdot x|\le Rs^2,\ |n_\tau\cdot x|\le R,\ |t_\tau\cdot x|\le sR\}.$$
Fix a tiling $\mathcal U_{\tau,R}$ of $\mathbb R^3$ by translates of
$U_{\tau,R}$. Let $W_0:\mathbb R^3\to[0,\infty)$ be
$$W_0(y)=c_0\prod_{j=1}^3(1+|y_j|^2)^{-100}, \qquad \int_{\mathbb R^3}W_0(y)\,dy=1,$$
where $c_0>0$ is the normalizing constant. Fix an invertible linear map
$A_\tau$ taking the doubled centered envelope $2U_{\tau,R}$ onto $[-1,1]^3$.
For a tile $U\in\mathcal U_{\tau,R}$ with center $c_U$, put
$W_U(x)=W_0(A_\tau(x-c_U))$ and
$$S_Uf(x)=\left( \sum_{\substack{\theta\in\mathcal S_{R^{-1/2}}\\\theta\subset\tau}} |f_\theta(x)|^2W_U(x)\right)^{1/2}.$$
Write $m_s(f)=\#\{\tau'\in\mathcal S_s:f_{\tau'}\not\equiv0\}$ and
$|U|$ for the Lebesgue measure of $U$. For every $\varepsilon>0$, there are positive constants $C_\varepsilon^{\mathrm{good}}$ and
$C_\varepsilon^{\mathrm{bound}}$, independent of $R$, $f$, and $\alpha$. For $\alpha>0$,
set $\mathcal G_\tau(\alpha)=\varnothing$ if $m_s(f)=0$; otherwise set
$$\mathcal G_\tau(\alpha)= \left\{U\in\mathcal U_{\tau,R}: C_\varepsilon^{\mathrm{good}} R^\varepsilon |U|^{-1} \int_{\mathbb R^3}|S_Uf(x)|^2\,dx \ge\frac{\alpha^2}{m_s(f)^2}\right\}.$$
For every $\alpha>0$,
$$\alpha^4\operatorname{meas}\{x\in\mathbb R^3:|f(x)|>\alpha\} \le C_\varepsilon^{\mathrm{bound}} R^\varepsilon \sum_{\substack{R^{-1/2}<s<1\\s\text{ dyadic}}} \sum_{\tau\in\mathcal S_s} \sum_{U\in\mathcal G_\tau(\alpha)} |U|^{-1}\left(\int_{\mathbb R^3}|S_Uf(x)|^2\,dx\right)^2,$$
where $\operatorname{meas}$ is three-dimensional Lebesgue measure.


## Statement references

[Larry Guth and Dominique Maldague, “Amplitude Dependent Wave Envelope Estimates for the Cone in ℝ³”](https://arxiv.org/pdf/2206.01093v2)

[Xi Cen, Xitao Gao, Cheng Zhang, and Junyong Zhang, “A New Bound for the Gauss Circle Problem”](https://arxiv.org/pdf/2610.21730v1)

## Facts & Assumptions

**Given:** The parameters, Fourier projections, envelope tiling, weight, square function, and normalization defined in the Statement.

## Norm identity

The source term is $|U|^{-1}\|S_Uf\|_{L^2}^4=|U|^{-1}(\int|S_Uf(x)|^2\,dx)^2$, not $|U|^{-1}\int|S_Uf(x)|^4\,dx$. Indeed the defined square function satisfies $|S_Uf(x)|^2=\sum_{\theta\subset\tau}|f_\theta(x)|^2W_U(x)$; integrating this finite sum and then squaring proves the identity. This notation correction supplies no proof of the deep envelope inequality.

## Proof status

The Theorem 2 interface and its §5 cone, cap, envelope, weight, and pruning definitions are transcribed in the Statement from the complete primary source. The complete §5–9 proof has not been reconstructed locally, so the theorem remains escalated.
