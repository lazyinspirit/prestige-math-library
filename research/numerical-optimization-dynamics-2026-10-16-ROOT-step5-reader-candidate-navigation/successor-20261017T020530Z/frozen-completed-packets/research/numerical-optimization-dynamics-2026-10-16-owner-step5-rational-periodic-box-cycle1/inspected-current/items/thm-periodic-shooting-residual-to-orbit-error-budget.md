---
id: thm-periodic-shooting-residual-to-orbit-error-budget
kind: theorem
title: "A certified shooting residual gives an explicit local periodic-orbit error bound"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - def-phase-bordered-periodic-orbit-bvp
  - def-validated-periodic-shooting-jet-enclosure
  - lem-phase-bordered-shooting-jacobian-invertibility
  - thm-gronwall-integral-inequality
  - thm-chain-rule-for-total-derivatives
  - thm-c2-ode-flow-on-common-tube
  - thm-ftc-second-part
  - thm-norm-inequality-for-the-vector-valued-integral
  - thm-continuous-implies-integrable
  - thm-monotonicity-of-the-integral
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "S. M. Rump, Verification methods: Rigorous results using floating-point arithmetic, Acta Numerica 19 (2010)"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
      locator: "Full 163-page article retrieved; inspected §§10 and 13, including Theorems 13.1–13.3 and the strict-inclusion/Krawczyk proof in §13.3."
    - title: "Y. A. Kuznetsov, Elements of Applied Bifurcation Theory, 2nd ed., Chapter 1, §1.5"
      url: "https://www.ma.imperial.ac.uk/~dturaev/kuznetsov.pdf"
      locator: "Complete 614-page second-edition PDF retrieved; inspected printed pp. 26–30 on transverse sections, return maps, variational equation, monodromy, and phase multiplier."
---

## Statement

Let $z_*=(x_*,T_*)$ be a phase-fixed nonconstant periodic orbit, let $G$ be its phase-bordered shooting residual, and suppose $DG(z_*)$ is invertible with $\|DG(z_*)^{-1}\|_2\le K_J$. Let a convex validated domain contain the segment from $z_*$ to a candidate $z=(x,T)$, with $\|z-z_*\|_2\le r$, and suppose $DG$ is $L_J$-Lipschitz there and $K_JL_Jr\le1$. If a validated residual box $R$ contains $G(z)$ and $\epsilon\ge\sup_{v\in R}\|v\|_2$, then
$$ \|z-z_*\|_2\le2K_J\epsilon. $$
If both scaled trajectories $\phi_{Ts}(x)$ and $\phi_{T_*s}(x_*)$ exist and lie in one convex state tube $K\subset U$ for every $s\in[0,1]$, with $\|Df\|_2\le L_f$ and $\|f\|_2\le M_f$ on $K$ and $0<T,T_*\le T_+$, then they satisfy
$$ \sup_{0\le s\le1}\|\phi_{Ts}(x)-\phi_{T_*s}(x_*)\|_2 \le 2K_J e^{T_+L_f}(1+M_f)\epsilon. $$
The residual box may be taken from [[def-validated-periodic-shooting-jet-enclosure]]. A residual without the stated neighborhood, inverse, and derivative bounds gives no orbit-error conclusion.

## Facts & Assumptions

**Given:** An exact phase-fixed root $z_*$, an invertible shooting derivative, a candidate in a convex tube, the local derivative bounds, and an outward residual enclosure.

[F1] The phase-bordered shooting map is $G(x,T)=(\phi_T(x)-x,\psi(x))$ ([[def-phase-bordered-periodic-orbit-bvp]]); its derivative is the phase-bordered matrix in [[lem-phase-bordered-shooting-jacobian-invertibility]].

[F2] The validated jet record contains an outward box enclosing the exact shooting residual on its input ([[def-validated-periodic-shooting-jet-enclosure]]).

[F3] Coordinatewise FTC recovers endpoint differences; continuous vector integrands are integrable, their integrals satisfy $\|\int q\|_2\le\int\|q\|_2$, and pointwise inequalities pass to integrals ([[thm-ftc-second-part]], [[thm-continuous-implies-integrable]], [[thm-norm-inequality-for-the-vector-valued-integral]], [[thm-monotonicity-of-the-integral]]).

[F4] Gronwall bounds a nonnegative solution of $v(s)\le A+B\int_0^s v(r)\,dr$ by $Ae^{Bs}$ ([[thm-gronwall-integral-inequality]]).

[F5] The derivative of a composition obeys the chain rule ([[thm-chain-rule-for-total-derivatives]]).

[F6] The phase-bordered shooting map inherits $C^2$ regularity on a common tube from the $C^2$ field and its flow ([[thm-c2-ode-flow-on-common-tube]]).

## Proof

1.1 By [F6], $G$ is $C^2$ on the common validation tube. Put $\delta=z-z_*$ and define $r(t)=G(z_*+t\delta)-G(z_*)-tDG(z_*)\delta$ for $0\le t\le1$. Then $r(0)=0$ and the chain rule [F5] gives $r'(t)=(DG(z_*+t\delta)-DG(z_*))\delta$. The segment lies in the stated convex domain, so $\|r'(t)\|_2\le L_Jt\|\delta\|_2^2$. By [F3], $r(1)=\int_0^1r'(t)\,dt$ and $\|r(1)\|_2\le\int_0^1\|r'(t)\|_2\,dt\le (L_J/2)\|\delta\|_2^2$. Since $G(z_*)=0$, this is the first-order remainder bound. The residual box inclusion [F2] implies $\|G(z)\|_2\le\epsilon$. Multiplying by $DG(z_*)^{-1}$ and using its norm bound yields $\|\delta\|_2\le K_J\epsilon+(K_JL_J/2)\|\delta\|_2^2$. The hypothesis $\|\delta\|_2\le r$ and $K_JL_Jr\le1$ make the quadratic term at most $\frac12\|\delta\|_2$; rearrangement proves $\|\delta\|_2\le2K_J\epsilon$. [F1, F2, F3, F5, F6, given, algebra]

2.1 Let $x(s)=\phi_{Ts}(x)$, $x_*(s)=\phi_{T_*s}(x_*)$, $w(s)=x(s)-x_*(s)$, and $u(s)=\|w(s)\|_2$. Both states and their connecting segment lie in $K$. Integrating $Df$ along that segment gives $\|f(x(s))-f(x_*(s))\|_2\le L_fu(s)$. The chain rule [F5] and $w'=T(f(x(s))-f(x_*(s)))+(T-T_*)f(x_*(s))$ therefore give $\|w'(s)\|_2\le T_+L_fu(s)+M_f|T-T_*|$. By [F3], $w(s)=w(0)+\int_0^s w'(r)\,dr$ and $u(s)\le u(0)+\int_0^s\|w'(r)\|_2\,dr$. Using the derivative bound and monotonicity in [F3], $u(s)\le u(0)+\int_0^s(T_+L_fu(r)+M_f|T-T_*|)\,dr$. Gronwall [F4], with nondecreasing $a(s)=u(0)+M_f|T-T_*|s$, gives $u(s)\le e^{T_+L_f}(u(0)+M_f|T-T_*|)$. Each initial-state or period difference is at most $\|\delta\|_2$, so step 1.1 proves the trajectory estimate. [F1, F3, F4, F5, step 1.1, algebra] ∎
