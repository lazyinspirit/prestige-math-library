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
  - thm-multivariable-taylor-formula-with-lagrange-remainder
  - thm-gronwall-integral-inequality
  - thm-chain-rule-for-total-derivatives
  - thm-c2-ode-flow-on-common-tube
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
If the state tube is convex, $\|Df\|_2\le L_f$, $\|f\|_2\le M_f$, and $T,T_*\le T_+$ there, then the scaled trajectories satisfy
$$ \sup_{0\le s\le1}\|\phi_{Ts}(x)-\phi_{T_*s}(x_*)\|_2 \le 2K_J e^{T_+L_f}(1+M_f)\epsilon. $$
The residual box may be taken from [[def-validated-periodic-shooting-jet-enclosure]]. A residual without the stated neighborhood, inverse, and derivative bounds gives no orbit-error conclusion.

## Facts & Assumptions

**Given:** An exact phase-fixed root $z_*$, an invertible shooting derivative, a candidate in a convex tube, the local derivative bounds, and an outward residual enclosure.

[F1] The phase-bordered shooting map is $G(x,T)=(\phi_T(x)-x,\psi(x))$ ([[def-phase-bordered-periodic-orbit-bvp]]); its derivative is the phase-bordered matrix in [[lem-phase-bordered-shooting-jacobian-invertibility]].

[F2] The validated jet record contains an outward box enclosing the exact shooting residual on its input ([[def-validated-periodic-shooting-jet-enclosure]]).

[F3] Taylor's formula on a convex segment bounds the first-order remainder by one half the Jacobian Lipschitz bound times squared displacement ([[thm-multivariable-taylor-formula-with-lagrange-remainder]]).

[F4] Gronwall bounds a nonnegative solution of $v(s)\le A+B\int_0^s v(r)\,dr$ by $Ae^{Bs}$ ([[thm-gronwall-integral-inequality]]).

[F5] The derivative of a composition obeys the chain rule ([[thm-chain-rule-for-total-derivatives]]).

[F6] The phase-bordered shooting map inherits $C^2$ regularity on a common tube from the $C^2$ field and its flow ([[thm-c2-ode-flow-on-common-tube]]).

## Proof
1.1 By [F6], $G$ is $C^2$ on the common validation tube. Put $\delta=z-z_*$. Since $G(z_*)=0$, Taylor's formula [F3] gives $G(z)=DG(z_*)\delta+R_2$ with $\|R_2\|_2\le(L_J/2)\|\delta\|_2^2$. The residual box inclusion [F2] implies $\|G(z)\|_2\le\epsilon$. Multiplying by $DG(z_*)^{-1}$ and using its norm bound yields $\|\delta\|_2\le K_J\epsilon+(K_JL_J/2)\|\delta\|_2^2$. The hypothesis $\|\delta\|_2\le r$ and $K_JL_Jr\le1$ make the quadratic term at most $\frac12\|\delta\|_2$; rearrangement proves $\|\delta\|_2\le2K_J\epsilon$. [F1, F2, F3, F6, given, algebra]

2.1 Let $x(s)=\phi_{Ts}(x)$ and $x_*(s)=\phi_{T_*s}(x_*)$. The chain rule [F5] and the flow equation give their scaled equations and $ \|x'(s)-x_*'(s)\|_2\le T_+L_f\|x(s)-x_*(s)\|_2+M_f|T-T_*|. $ Integrating this inequality and applying [F4] gives $\|x(s)-x_*(s)\|_2\le e^{T_+L_f}(\|x-x_*\|_2+M_f|T-T_*|)$. Each initial-state or period difference is at most $\|\delta\|_2$, so step 1.1 proves the trajectory estimate. [F1, F4, F5, step 1.1, algebra] ∎
