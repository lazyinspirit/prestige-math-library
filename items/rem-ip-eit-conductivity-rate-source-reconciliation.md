---
id: rem-ip-eit-conductivity-rate-source-reconciliation
kind: remark
title: Source corrections for three-dimensional EIT rates
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 8
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
  - thm-ip-joint-regularization-rate-under-range-invariance
  - thm-ip-frozen-newton-rate-under-range-invariance
  - def-ip-bregman-distance
  - lem-ip-index-function-young-conjugate-bound
  - lem-ip-eit-centered-range-invariance-vsc-and-frozen-compatibility
  - lem-ip-logarithmic-endpoint-under-effective-noise-control
  - lem-ip-centered-neumann-sequence-map-and-differentiability
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Barbara Kaltenbacher, Convergence rates under a range invariance condition with application to electrical impedance tomography, Section 3, Theorem 10 and Corollary 11
      url: https://arxiv.org/pdf/2403.18704
    - title: Frederic Weidling, Variational Source Conditions and Conditional Stability Estimates for Inverse Problems in PDEs, Chapter 6, Theorems 6.10–6.15
      url: https://univerlag.uni-goettingen.de/bitstream/handle/3/isbn-978-3-86395-411-6/weidling.pdf?sequence=1
    - title: Christian Clason, Regularization of Inverse Problems, Chapter 10, Theorem 10.7
      url: https://arxiv.org/pdf/2001.00617v2
forward_refs:
  - def-ip-conductivity-dirichlet-to-neumann-map
---

## Remark

Kaltenbacher's 2024 paper treats the three-dimensional unit ball with background conductivity $\sigma_{\rm bg}\equiv1$, quadratic penalty $\check R(\sigma)=\frac12\|\sigma\|_{H^{s_1}(\Omega)}^2$, $s_1\in(5/2,7/2)$, and truth $\sigma^\dagger\in B^{s_2}_{2,\infty}(\Omega)$ for $s_2\in(s_1,2s_1-1)$. Its Theorem 10 reports a logarithmic VSC exponent

$$\nu_{\rm paper}:=\frac{(s_2-s_1)(2s_1-3)}{s_1-1},$$

with $b=3/4$, and Corollary 11 reports a conductivity-norm exponent $\nu_{\rm paper}/p=\nu_{\rm paper}/2$ for the joint, split, and frozen-Newton methods. The source fixes $p=2$ and separately uses $\alpha\asymp\delta^{\widetilde p}$ with $0<\widetilde p\le2$; $\widetilde p$ is not the denominator in its displayed norm exponent. These printed formulas are source assertions; the locally proved EIT conclusions use the corrected VSC exponent and parameter qualifications below.

The cited Weidling Theorem 6.15 at $p=2$ gives denominator $s_2-1$ in the corresponding logarithmic exponent. In addition, the quadratic Bregman distance is one half the squared $H^{s_1}$ norm error, so a Bregman rate with logarithmic exponent $\nu$ yields a norm exponent $\nu/2$; this quadratic norm conversion agrees with the divisor $p=2$ in Corollary 11, while the VSC exponent and parameter qualifications still require the separate comparisons below. The sufficient parameter coupling in the abstract rate theorem requires $\alpha H(c/\alpha)\asymp\delta^2$ for a fixed $c>0$. For a logarithmic index with $H(q)\asymp(\log q)^{-\nu}$, no pure-power choice $\alpha\asymp\delta^{\widetilde p}$ with $0<\widetilde p\le2$ satisfies this two-sided coupling. Kaltenbacher's Remark 1 separately asserts that pure powers still give the same logarithmic rate; that separate assertion needs an independent derivation and is not ruled out solely by failure of the sufficient coupling. The local joint and frozen EIT theorems assume the Axiom of Choice, Countable Choice and Dependent Choice, use the corrected exponent $\nu=(s_2-s_1)(2s_1-3)/(s_2-1)$, retain the entire stated Sobolev/Besov truth range, and prove the conductivity norm exponent $\nu/2$. They give balanced parameters, every strict pure power $0<\widetilde p<2$, and the nominal endpoint $\widetilde p=2$ with an explicit stronger actual-noise condition. The universal abstract endpoint assertion under arbitrary deterministic noise bounded only by $\delta$ is false, as shown by the exact quadratic counterexample in the endpoint lemma; that example does not claim to be an EIT-specific counterexample.

The local application uses mean-zero Neumann currents and boundary-mean-zero Neumann states. Its data space is the centered sequence $(\mathscr N_\sigma-\mathscr N_1)Y_{\ell k}$ in $\ell^2(L^2(S^2))$, or equivalently the corresponding affine translate for absolute voltages. This centering is necessary: at the background conductivity $1$, the uncentered voltage columns have norms $1/\ell$ with multiplicity $2\ell+1$, so their squared sum diverges. The centered Neumann-map differentiability, $H^1$ logarithmic stability, exact intrinsic Sobolev/Besov source inequality, augmented factorization and inverse, frozen Taylor estimate, and regularizer/penalty compatibility now have local proofs. The stability proof retains the Fourier modulation in the CGO remainder and integrates its negative-Sobolev norm before absorption; it does not use the invalid unmodulated pointwise inference in the printed Weidling proof.

## Remark references

[Barbara Kaltenbacher, *Convergence rates under a range invariance condition with application to electrical impedance tomography*, Example 2, equations (1.18)–(1.24), and Section 3, Theorem 10 and Corollary 11](https://arxiv.org/pdf/2403.18704)

[Frederic Weidling, *Variational Source Conditions and Conditional Stability Estimates for Inverse Problems in PDEs*, Chapter 6, Theorems 6.10–6.15, printed pp. 177–185](https://univerlag.uni-goettingen.de/bitstream/handle/3/isbn-978-3-86395-411-6/weidling.pdf?sequence=1)

[[def-ip-conductivity-dirichlet-to-neumann-map|Published conductivity Dirichlet-to-Neumann interface]]

[[lem-elliptic-state-map-c1-under-uniform-coercivity|Finite-dimensional elliptic state-map differentiability]]

[[lem-ip-eit-centered-range-invariance-vsc-and-frozen-compatibility]]

[[lem-ip-logarithmic-endpoint-under-effective-noise-control]]

[[lem-ip-centered-neumann-sequence-map-and-differentiability]]

[[def-axiom-of-choice]]

[[def-countable-choice]]

[[def-dependent-choice]]

## Facts & Assumptions

**Given:** The source assertions, comparison formulas, and quadratic regularizer are those stated in the Remark.

[F1] [Kaltenbacher, Theorem 10]: the paper gives exponent $\nu_{\rm paper}=(s_2-s_1)(2s_1-3)/(s_1-1)$ and cites Weidling Theorem 6.15 with $p=2$.

[F2] Weidling, Theorem 6.15: its proof sets $s_1=3/p+1+\tau$, $s_2=s$, and $\mu=2(s_2-s_1)/(s_2-1)$.

[F3] [[def-ip-bregman-distance]]: $D_R^{\xi^\dagger}(x,x^\dagger)=R(x)-R(x^\dagger)-\langle\xi^\dagger,x-x^\dagger\rangle$.

[F4] [[thm-ip-joint-regularization-rate-under-range-invariance]]: the generic joint rate theorem assumes $c_-\delta^p\le\alpha\rho_\delta\le c_+\delta^p$ and $H(1/(2C_*\alpha))\le C_H\rho_\delta$, where $\rho_\delta=H(1/(C_*\alpha))$.

[F5] Kaltenbacher, Theorem 10 and Corollary 11 (printed p. 24): the stated VSC uses $\check R(\sigma)=\frac12\|\sigma\|_{H^{s_1}}^2$. Corollary 11 fixes $p=2$ and reports the norm exponent $\nu_{\rm paper}/p=\nu_{\rm paper}/2$, separately from the parameter choice $\alpha\asymp\delta^{\widetilde p}$, $0<\widetilde p\le2$.

[F6] Kaltenbacher, equation (1.32b): the logarithmic index is $\psi(t)=C(-\log(\min\{t,t_0\}))^{-\nu_{\rm paper}}$ for constants $C,t_0>0$.

[A1] The local EIT applications retain the Axiom of Choice, Countable Choice and Dependent Choice at their actual suppliers; the source algebra in steps 1.1–1.3 needs none of these additional assumptions.

[F7] [[lem-ip-eit-centered-range-invariance-vsc-and-frozen-compatibility]] supplies the full EIT source/range/penalty interface with the corrected exponent $\nu$ and exact quadratic Bregman distance. Its local stability and function-space source suppliers are fully proved.

[F8] [[lem-ip-logarithmic-endpoint-under-effective-noise-control]] proves the explicit effective-noise endpoint and refutes the universal abstract deterministic-noise endpoint by an exact $\ell^2$ minimizer.

[F9] [[lem-ip-centered-neumann-sequence-map-and-differentiability]] proves the centered sequence map and computes the divergent uncentered background norm.

## Verification


1.1 Substituting $p=2$ into [F2] gives $s_1=5/2+\tau$ and $\mu=2(s_2-s_1)/(s_2-1)$. The logarithmic VSC exponent contributed by the source Sobolev gap is therefore $(s_2-s_1)(2s_1-3)/(s_2-1)$. This differs from [F1]'s denominator $s_1-1$ because the allowed range has $s_2>s_1$; the cited theorem does not directly yield the exponent printed in Kaltenbacher's Theorem 10. [F1, F2, algebra]

1.2 For $R(\sigma)=\frac12\|\sigma\|_{H^{s_1}}^2$, the Hilbert-space subgradient is $\xi^\dagger=\sigma^\dagger$ under the $H^{s_1}$ inner product. Expanding the square gives $D_R^{\xi^\dagger}(\sigma,\sigma^\dagger)=\frac12\|\sigma-\sigma^\dagger\|_{H^{s_1}}^2$. Therefore $D_R^{\xi^\dagger}=O((\log(1/\delta))^{-\nu})$ implies only $\|\sigma-\sigma^\dagger\|_{H^{s_1}}=O((\log(1/\delta))^{-\nu/2})$ by taking square roots; it does not imply exponent $\nu$. [F3, F5, algebra]

1.3 By [F6], $\psi(t)\asymp(\log(1/t))^{-\nu_{\rm paper}}$ for sufficiently small positive $t$, and $\psi$ is bounded because of the truncation at $t_0$. For $q$ large, if $0<t<q^{-1/2}$ then $\psi(t)\le C2^{\nu_{\rm paper}}(\log q)^{-\nu_{\rm paper}}$; if $t\ge q^{-1/2}$ then $\psi(t)-qt\le\psi(t)-\sqrt q<0$. Thus $H(q)\le C'(\log q)^{-\nu_{\rm paper}}$. Conversely, choosing $t_q=q^{-1}(\log q)^{-\nu_{\rm paper}-1}$ gives $\log(1/t_q)\sim\log q$, $\psi(t_q)\ge c'(\log q)^{-\nu_{\rm paper}}$, and $qt_q=(\log q)^{-\nu_{\rm paper}-1}$, hence $H(q)\ge c''(\log q)^{-\nu_{\rm paper}}$ for large $q$. Therefore $H(q)\asymp(\log q)^{-\nu_{\rm paper}}$. For $\alpha\asymp\delta^{\widetilde p}$, $0<\widetilde p\le2$, this gives $\alpha H(c/\alpha)\asymp\delta^{\widetilde p}(\log(1/\delta))^{-\nu_{\rm paper}}$. If $\widetilde p=2$, the ratio to $\delta^2$ tends to zero; if $\widetilde p<2$, that ratio tends to infinity. Hence no such pure-power choice satisfies the two-sided sufficient coupling in Theorem 3; this does not decide the separate assertion in Remark 1. [F4, F5, F6, algebra]

2.1 The local interface [F7] verifies the full admitted EIT hypotheses, with the corrected VSC exponent from step 1.1 and the exact quadratic norm conversion from step 1.2. The two local rate theorems therefore give their explicit EIT conclusions from proved suppliers. Step 1.3 explains why strict pure powers require their own scalar argument instead of the sufficient two-sided balanced bracket. At the nominal endpoint, [F8] retains a valid rate under the stated actual-noise/tolerance condition and gives a concrete counterexample to the unrestricted abstract endpoint. Finally [F9] establishes the centered observation space and its necessary affine-data interpretation. These are proved source corrections preserving the full truth regularity classes, rather than unsupported imports of the printed formulas. [given, A1, F4, F7, F8, F9, step 1.1, step 1.2, step 1.3] ∎
