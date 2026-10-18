---
id: def-ewald-pme-cardinal-assignment-model
kind: definition
title: "Periodic cardinal-spline assignment and unitary mesh transform"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-ewald-causal-cardinal-spline-window, def-ewald-three-dimensional-periodic-source-data, def-unitary-discrete-fourier-transform-on-z-mod-n]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Markus Deserno and Christian Holm, How to mesh up Ewald sums (I): A theoretical and numerical comparison of various particle mesh routines (1998)"
      url: "https://arxiv.org/pdf/cond-mat/9807099"
      locator: "§3 and Appendix E: cardinal-spline charge assignment, finite mesh modes, Fourier assignment convention, and interpolation support."
    - title: "Multi-Level Ewald: A hybrid multigrid / Fast Fourier Transform approach to the electrostatic particle-mesh problem (full-text article, 2011)"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3202610/"
      locator: "§2.1, equations (1)–(7): spline assignment, mesh Fourier transform, reciprocal convolution, and force interpolation."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Fix neutral point-source data $(A,V,\Lambda,\kappa_k,(x_i,q_i)_{i=1}^n)$ from
[[def-ewald-three-dimensional-periodic-source-data]], an Ewald parameter
$\alpha>0$, integers $M_1,M_2,M_3\ge1$, an assignment order $P\ge2$, and write
$N_g=M_1M_2M_3$. Let $\mathcal G=\prod_{r=1}^3\{0,\ldots,M_r-1\}$ and take
$W_P$ from [[def-ewald-causal-cardinal-spline-window]]. Define the periodic
causal assignment weights, for $t\in[0,1)^3$ and $\ell\in\mathcal G$, by
$$w_\ell(t)=\prod_{r=1}^3\sum_{j\in\mathbb Z} W_P(M_rt_r-\ell_r-jM_r).$$
The sums are finite because $W_P$ is supported on $[0,P]$. They collect every
support index into its grid residue; if $P>M_r$, distinct support indices that
wrap to the same residue are added. The spread grid is
$$g_\ell=\sum_{i=1}^n q_iw_\ell(t_i),\qquad t_i=A^{-1}x_i\pmod{\mathbb Z^3}.$$

Use the negative-sign unitary tensor DFT convention
$$\widehat g_M(k)=N_g^{-1/2}\sum_{\ell\in\mathcal G}g_\ell e^{-2\pi i\sum_{r=1}^3k_r\ell_r/M_r},$$
which is the product transform of
[[def-unitary-discrete-fourier-transform-on-z-mod-n]]. Signed frequency
representatives are chosen before evaluating windows. A retained set
$\mathcal K\subset\mathbb Z^3\setminus\{0\}$ is finite, symmetric under
$k\mapsto-k$, injective modulo $(M_1,M_2,M_3)$, and satisfies
$|k_r|<M_r/2$ for each coordinate. In particular, even-grid Nyquist modes are
not silently retained.

For $u\in\mathbb R$, put $\operatorname{sinc}(u)=\sin(u)/u$ when $u\ne0$ and
$\operatorname{sinc}(0)=1$. Define
$$D(k)=\prod_{r=1}^3e^{-\pi iPk_r/M_r} \operatorname{sinc}(\pi k_r/M_r)^P.$$
Only modes with $D(k)\ne0$ are admissible for division. A computed
implementation must first certify a strictly positive lower bound for
$|D(k)|$; otherwise it returns `denominator-inconclusive` without dividing.
For $k\in\mathcal K$, define
$$a_k(t)=e^{-2\pi i k\cdot t},\quad b_k(t)=\frac{\sum_{\ell\in\mathcal G}w_\ell(t) e^{-2\pi i\sum_rk_r\ell_r/M_r}}{\overline{D(k)}},\quad \rho_k=\sum_iq_i a_k(t_i),\quad z_k=\frac{\sqrt{N_g}\,\widehat g_M(k)}{\overline{D(k)}}.$$
The denominator is the complex conjugate of the printed window multiplier; this
sign is part of the definition. Set
$$c_k=\frac{4\pi}{V|\kappa_k|^2} e^{-|\kappa_k|^2/(4\alpha^2)}.$$
The exact retained reciprocal energy is
$$E_{\mathcal K}=\frac12\sum_{k\in\mathcal K}c_k|\rho_k|^2,$$
and the mesh reciprocal energy is
$$E_M=\frac12\sum_{k\in\mathcal K}c_k|z_k|^2.$$

Let $\mathfrak d_k(t)$ be the declared physical mesh derivative: it is
$\nabla_xb_k(t)=A^{-T}\nabla_tb_k(t)$ wherever the classical derivative
exists. A grid knot is a point with $M_rt_r\in\mathbb Z$ for some coordinate
$r$. At a $P=2$ knot, take the one-sided vector limits from all adjacent open
mesh boxes. Define $\mathfrak d_k(t)$ to be any selected one-sided limit or the
arithmetic average of all those limits. This is a procedure value and does not
assert that the classical derivative exists there. The
energy-gradient mesh force is
$$F_{M,i}=-q_i\sum_{k\in\mathcal K}c_k \operatorname{Re}\!\left(\overline{z_k}\mathfrak d_k(t_i)\right).$$
Define the diagonal mesh-self correction and corrected reciprocal energy by
$$C_M=\frac12\sum_iq_i^2\sum_{k\in\mathcal K}c_k (|b_k(t_i)|^2-1),\qquad E_M^{\mathrm{corr}}=E_M-C_M.$$
Whether the declared force is the derivative of this corrected energy, and the
error bound it satisfies, are proved separately.

## Remarks

- $\nabla_x=A^{-T}\nabla_t$ is the physical derivative in the cell coordinates
  $x=At$.
- Every reciprocal mode omitted from $\mathcal K$, including Nyquist modes,
  belongs to the separately bounded reciprocal truncation error.
- This definition makes no accuracy claim about an FFT or a floating-point
  implementation. The error theorem supplies those conditions separately.
