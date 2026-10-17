---
id: cex-tgr-volume-surface-entropy-response
kind: counterexample
title: "Finite volume and surface entropy capacities differ"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
deps:
  - def-tgr-gravitating-phase-reference
  - lem-tgr-annular-radial-integration
  - thm-monotone-convergence-for-the-integral
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
dependency_roles:
  def-tgr-gravitating-phase-reference: mathematical-premise
  lem-tgr-annular-radial-integration: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
justified_by: []
aliases: []
generation:
  role: counterexample
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Joseph Katz, Thermodynamics and Self-Gravitating Systems, Foundations of Physics 33 (2003), author manuscript"
      url: "https://arxiv.org/pdf/astro-ph/0212295"
    - title: "David Tong, Statistical Physics, complete author-hosted lecture notes"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
    - title: "Terence Tao, An Introduction to Measure Theory, complete author-hosted text"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
proof_strategy: direct
verification:
  precheck: pass
---

## Statement refuted

For a finite-dimensional bound relative gravitational phase model, the Gibbs-volume and surface-density entropy conventions always produce the same heat capacity.

## Facts & Assumptions

**Given:** The relative point-Kepler model on $q\in\mathbb R^3\setminus\{0\}$, $p\in\mathbb R^3$, with
$$h(q,p)=\frac{|p|^2}{2\mu}-\frac{A}{|q|},\qquad \mu,A,h_*>0,$$
and six-dimensional relative phase measure $d\nu_{\mathrm{rel}}=h_*^{-3}d^3q\,d^3p$, with no center-of-mass factor or $1/2!$. Use the two entropy conventions in [[def-tgr-gravitating-phase-reference]].

[F1] The phase reference defines $S_G=k_B\log\Omega(E)$ and, when $\omega(E)=\Omega'(E)>0$, the distinct convention $S_B=k_B\log(\omega(E)\Delta E)$ for fixed $\Delta E>0$. ([[def-tgr-gravitating-phase-reference]])

[F2] Radial integrals on bounded shells satisfy $\int_{a\le|q|\le b}F(|q|)\,dq=4\pi\int_a^bF(r)r^2dr$ for continuous $F$. ([[lem-tgr-annular-radial-integration]])

[F3] Increasing nonnegative measurable functions pass to their pointwise limit under the integral. ([[thm-monotone-convergence-for-the-integral]])

[F4] Tonelli identifies the nonnegative phase integral with its iterated momentum and position integrals. ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]])

## Counterexample

1.1 Fix $E=-e<0$. For the cutoff domain $r\ge\varepsilon>0$, the momentum sublevel at radius $r$ is the ball $|p|\le\sqrt{2\mu(A/r-e)}$ for $\varepsilon\le r\le A/e$. Applying [F2] to the momentum ball and the position shell and using [F4] gives
$$\Omega_\varepsilon(-e)=\frac{(4\pi)(4\pi/3)(2\mu)^{3/2}}{h_*^3} \int_\varepsilon^{A/e}r^2(A/r-e)^{3/2}\,dr.$$
As $\varepsilon\downarrow0$, the sublevel sets increase to the full relative phase sublevel, so [F3] gives $\Omega(-e)=\lim_{\varepsilon\downarrow0}\Omega_\varepsilon(-e)$. With $s=er/A$ this is
$$\Omega(-e)=C e^{-3/2}J_0,\qquad C=\frac{(4\pi)(4\pi/3)(2\mu)^{3/2}A^3}{h_*^3},\quad J_0=\int_0^1s^{1/2}(1-s)^{3/2}ds.$$
The integral $J_0$ is finite and positive because its integrand is bounded by $s^{1/2}$ near zero and by $(1-s)^{3/2}$ near one. [F1, F2, F3, F4, given, construct]

2.1 Since $E=-e$, differentiation gives $\omega(E)=\Omega'(E)=\frac32 C J_0 e^{-5/2}>0$. The Gibbs-volume entropy therefore has $T_G=2e/(3k_B)$ and $C_G=dE/dT_G=-3k_B/2$. [F1, step 1.1, algebra]

3.1 For any fixed $\Delta E>0$, the surface-density entropy has $\omega(E)\Delta E=(\frac32 C J_0\Delta E)e^{-5/2}$, so $T_B=2e/(5k_B)$ and $C_B=dE/dT_B=-5k_B/2$. Both temperatures are positive under their declared conventions, but $C_G\ne C_B$. [F1, step 2.1, algebra]

4.1 This explicit six-dimensional relative model contradicts convention-independent finite-system heat capacity. Its bound-energy phase volume is finite at each $E<0$; no canonical normalizability, finite outer box, or empirical preparation is claimed. [step 1.1, step 2.1, step 3.1] ∎
