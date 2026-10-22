---
id: rem-ip-eit-conductivity-rate-source-reconciliation
kind: remark
title: Three-dimensional EIT rates require source reconciliation
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - thm-ip-joint-regularization-rate-under-range-invariance
  - thm-ip-frozen-newton-rate-under-range-invariance
  - def-ip-bregman-distance
  - lem-ip-index-function-young-conjugate-bound
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Barbara Kaltenbacher, Convergence rates under a range invariance condition with application to electrical impedance tomography, Section 3, Theorem 10 and Corollary 11"
      url: "https://arxiv.org/pdf/2403.18704"
    - title: "Frederic Weidling, Variational Source Conditions and Conditional Stability Estimates for Inverse Problems in PDEs, Chapter 6, Theorems 6.10–6.15"
      url: "https://univerlag.uni-goettingen.de/bitstream/handle/3/isbn-978-3-86395-411-6/weidling.pdf?sequence=1"
    - title: "Christian Clason, Regularization of Inverse Problems, Chapter 10, Theorem 10.7"
      url: "https://arxiv.org/pdf/2001.00617v2"
---

## Remark

Kaltenbacher's 2024 paper treats the three-dimensional unit ball with background conductivity $\sigma_{\rm bg}\equiv1$, quadratic penalty $\check R(\sigma)=\frac12\|\sigma\|_{H^{s_1}(\Omega)}^2$, $s_1\in(5/2,7/2)$, and truth $\sigma^\dagger\in B^{s_2}_{2,\infty}(\Omega)$ for $s_2\in(s_1,2s_1-1)$. Its Theorem 10 reports a logarithmic VSC exponent

$$\nu_{\rm paper}:=\frac{(s_2-s_1)(2s_1-3)}{s_1-1},$$

with $b=3/4$, and Corollary 11 reports a conductivity-norm rate using that exponent divided by the source parameter $\widetilde p$ for the joint, split, and frozen-Newton methods. These are source assertions recorded for reconciliation, not verified EIT conclusions of this page.

The cited Weidling Theorem 6.15 at $p=2$ gives denominator $s_2-1$ in the corresponding logarithmic exponent. In addition, the quadratic Bregman distance is one half the squared $H^{s_1}$ norm error, so a Bregman rate with logarithmic exponent $\nu$ yields a norm exponent $\nu/2$; this abstract implication alone does not supply every exponent reported by Corollary 11. The sufficient parameter coupling in the abstract rate theorem requires $\alpha H(c/\alpha)\asymp\delta^2$ for a fixed $c>0$. For a logarithmic index with $H(q)\asymp(\log q)^{-\nu}$, no pure-power choice $\alpha\asymp\delta^{\widetilde p}$ with $0<\widetilde p\le2$ satisfies this two-sided coupling. Kaltenbacher's Remark 1 separately asserts that pure powers still give the same logarithmic rate; that separate assertion needs an independent derivation and is not ruled out solely by failure of the sufficient coupling. These discrepancies require an owner decision before an explicit EIT rate is stated as a theorem.

The current library has Dirichlet-to-Neumann conductivity and Dirichlet-state suppliers, but the cited application uses a Neumann-to-Dirichlet sequence map whose Neumann states have zero boundary mean. A verified EIT instantiation also needs the local augmented range factorization and its frozen Taylor-remainder bound, plus a complete Besov-stability-to-VSC proof in the stated regularity classes. The finite-dimensional elliptic differentiability and adjoint items do not establish these infinite-dimensional interfaces.

## Remark references

[Barbara Kaltenbacher, *Convergence rates under a range invariance condition with application to electrical impedance tomography*, Example 2, equations (1.18)–(1.24), and Section 3, Theorem 10 and Corollary 11](https://arxiv.org/pdf/2403.18704)

[Frederic Weidling, *Variational Source Conditions and Conditional Stability Estimates for Inverse Problems in PDEs*, Chapter 6, Theorems 6.10–6.15, printed pp. 177–185](https://univerlag.uni-goettingen.de/bitstream/handle/3/isbn-978-3-86395-411-6/weidling.pdf?sequence=1)

[[def-ip-conductivity-dirichlet-to-neumann-map|Published conductivity Dirichlet-to-Neumann interface]]

[[lem-elliptic-state-map-c1-under-uniform-coercivity|Finite-dimensional elliptic state-map differentiability]]

## Facts & Assumptions

**Given:** The source assertions, comparison formulas, and quadratic regularizer are those stated in the Remark.

[F1] [Kaltenbacher, Theorem 10]: the paper gives exponent $\nu_{\rm paper}=(s_2-s_1)(2s_1-3)/(s_1-1)$ and cites Weidling Theorem 6.15 with $p=2$.

[F2] Weidling, Theorem 6.15: its proof sets $s_1=3/p+1+\tau$, $s_2=s$, and $\mu=2(s_2-s_1)/(s_2-1)$.

[F3] [[def-ip-bregman-distance]]: $D_R^{\xi^\dagger}(x,x^\dagger)=R(x)-R(x^\dagger)-\langle\xi^\dagger,x-x^\dagger\rangle$.

[F4] [[thm-ip-joint-regularization-rate-under-range-invariance]]: the generic joint rate theorem assumes $c_-\delta^p\le\alpha\rho_\delta\le c_+\delta^p$ and $H(1/(2C_*\alpha))\le C_H\rho_\delta$, where $\rho_\delta=H(1/(C_*\alpha))$.

[F5] Kaltenbacher, Theorem 10 and Corollary 11: the stated VSC uses $\check R(\sigma)=\frac12\|\sigma\|_{H^{s_1}}^2$ and the reported norm exponent is $\nu_{\rm paper}/\widetilde p$ for $\alpha\asymp\delta^{\widetilde p}$, $0<\widetilde p\le2$.

[F6] Kaltenbacher, equation (1.32b): the logarithmic index is $\psi(t)=C(-\log(\min\{t,t_0\}))^{-\nu_{\rm paper}}$ for constants $C,t_0>0$.

## Verification

1.1 Substituting $p=2$ into [F2] gives $s_1=5/2+\tau$ and $\mu=2(s_2-s_1)/(s_2-1)$. The logarithmic VSC exponent contributed by the source Sobolev gap is therefore $(s_2-s_1)(2s_1-3)/(s_2-1)$. This differs from [F1]'s denominator $s_1-1$ because the allowed range has $s_2>s_1$; the cited theorem does not directly yield the exponent printed in Kaltenbacher's Theorem 10. [F1, F2, algebra]

1.2 For $R(\sigma)=\frac12\|\sigma\|_{H^{s_1}}^2$, the Hilbert-space subgradient is $\xi^\dagger=\sigma^\dagger$ under the $H^{s_1}$ inner product. Expanding the square gives $D_R^{\xi^\dagger}(\sigma,\sigma^\dagger)=\frac12\|\sigma-\sigma^\dagger\|_{H^{s_1}}^2$. Therefore $D_R^{\xi^\dagger}=O((\log(1/\delta))^{-\nu})$ implies only $\|\sigma-\sigma^\dagger\|_{H^{s_1}}=O((\log(1/\delta))^{-\nu/2})$ by taking square roots; it does not imply exponent $\nu$. [F3, F5, algebra]

1.3 By [F6], $\psi(t)\asymp(\log(1/t))^{-\nu_{\rm paper}}$ for sufficiently small positive $t$, and $\psi$ is bounded because of the truncation at $t_0$. For $q$ large, if $0<t<q^{-1/2}$ then $\psi(t)\le C2^{\nu_{\rm paper}}(\log q)^{-\nu_{\rm paper}}$; if $t\ge q^{-1/2}$ then $\psi(t)-qt\le\psi(t)-\sqrt q<0$. Thus $H(q)\le C'(\log q)^{-\nu_{\rm paper}}$. Conversely, choosing $t_q=q^{-1}(\log q)^{-\nu_{\rm paper}-1}$ gives $\log(1/t_q)\sim\log q$, $\psi(t_q)\ge c'(\log q)^{-\nu_{\rm paper}}$, and $qt_q=(\log q)^{-\nu_{\rm paper}-1}$, hence $H(q)\ge c''(\log q)^{-\nu_{\rm paper}}$ for large $q$. Therefore $H(q)\asymp(\log q)^{-\nu_{\rm paper}}$. For $\alpha\asymp\delta^{\widetilde p}$, $0<\widetilde p\le2$, this gives $\alpha H(c/\alpha)\asymp\delta^{\widetilde p}(\log(1/\delta))^{-\nu_{\rm paper}}$. If $\widetilde p=2$, the ratio to $\delta^2$ tends to zero; if $\widetilde p<2$, that ratio tends to infinity. Hence no such pure-power choice satisfies the two-sided sufficient coupling in Theorem 3; this does not decide the separate assertion in Remark 1. [F4, F5, F6, algebra]

2.1 The N-to-D sequence-map well-posedness, augmented range-invariance and Taylor-remainder proof, and Besov-to-VSC argument are not supplied by the inspected current library carriers. Consequently the explicit 3D EIT rate remains escalated, and this remark does not infer it from the cited paper alone. [given, F1, F2, F3, F4, F5, F6] ∎
