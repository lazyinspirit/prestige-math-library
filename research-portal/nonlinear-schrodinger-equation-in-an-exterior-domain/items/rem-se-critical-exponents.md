---
id: rem-se-critical-exponents
kind: remark
domain: mathematics
title: Critical nonlinearities named in the article
status: draft
deps:
  - def-se-internal-systems
  - math:def-axiom-of-choice
  - math:def-countable-choice
  - math:thm-chain-rule-for-total-derivatives
  - math:thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - math:def-complex-lp-and-euclidean-test-function-conventions
  - math:def-jacobian-matrix-and-gradient
dependency_roles:
  def-se-internal-systems: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-countable-choice: mathematical-premise
  math:thm-chain-rule-for-total-derivatives: mathematical-premise
  math:thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions: mathematical-premise
  math:def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
  math:def-jacobian-matrix-and-gradient: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
dependency_level: 8
---

## Statement

Assume the Axiom of Choice. The article calls the quintic nonlinearity energy-critical in dimension three at regularity $s=1$, and the cubic nonlinearity mass-critical in dimension two at the $L^2$ level. These names refer to the scaling of the unforced power Schrödinger equation: mass-critical means its scaling preserves the spatial $L^2$ norm, and energy-critical here means that it preserves the spatial $L^2$ norm of the gradient, the homogeneous first-order energy-space seminorm. The scaling also dilates the exterior domain; it is not generally a symmetry of one fixed obstacle or of its controlled equation.

For an open spatial set $D\subseteq\mathbb R^n$ and a smooth complex-valued function $f=p+iq$ on $D$, use Lebesgue measure $dx$ and $|f|=(p^2+q^2)^{1/2}$. The spatial norm is $\|f\|_{L^2(D)}=(\int_D|f(x)|^2\,dx)^{1/2}$, on almost-everywhere classes when finite. Define the complex gradient componentwise by $\nabla f=\nabla p+i\nabla q=(\partial_jp+i\partial_jq)_{j=1}^n$. Its Euclidean length is $|\nabla f|=(\sum_{j=1}^n((\partial_jp)^2+(\partial_jq)^2))^{1/2}$, and $\|\nabla f\|_{L^2(D)}=(\int_D|\nabla f(x)|^2\,dx)^{1/2}$ when finite. The criticality calculation uses these norms for sufficiently smooth solutions with finite displayed norms, at corresponding times on the dilated domains.

## Statement references

[[def-se-internal-systems]]

[[math:def-axiom-of-choice]]

[[math:def-complex-lp-and-euclidean-test-function-conventions|Complex $L^p$ classes and Euclidean test-function conventions]]

[[math:def-jacobian-matrix-and-gradient]]

## Facts & Assumptions

[F1] The internal system uses $i\partial_t u+\Delta u+\lambda|u|^{m-1}u=Kh$, with $m=3$ for cubic and $m=5$ for quintic; its exterior domain is $\Omega=\mathbb R^n\setminus\Theta$. [[def-se-internal-systems]]

[F2] The Axiom of Choice gives countable choice: a choice function on the family of sets in a sequence selects an element for each index. [[math:def-axiom-of-choice]] [[math:def-countable-choice]]

[F3] The Euclidean chain rule applies to the real and imaginary components of a smooth complex-valued function and to their derivatives. [[math:thm-chain-rule-for-total-derivatives]]

[F4] Under countable choice, change of variables for a $C^1$ diffeomorphism applies to nonnegative measurable integrands on open sets, with the absolute Jacobian determinant. [[math:thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]

[F5] The complex $L^2$ convention is $\|f\|_{L^2(D)}=(\int_D|f|^2\,dx)^{1/2}$ for finite integral, using complex modulus and almost-everywhere classes. [[math:def-complex-lp-and-euclidean-test-function-conventions|Complex $L^p$ classes and Euclidean test-function conventions]]

[F6] The real scalar gradient is the vector of spatial partial derivatives; applying it to the real and imaginary components defines $\nabla f=\nabla p+i\nabla q$. The squared length used here is $|\nabla f|^2=\sum_{j=1}^n((\partial_jp)^2+(\partial_jq)^2)$. [[math:def-jacobian-matrix-and-gradient]] [[math:def-complex-lp-and-euclidean-test-function-conventions|Complex $L^p$ classes and Euclidean test-function conventions]]

## Proof

[F1] The internal system uses $i\partial_t u+\Delta u+\lambda|u|^{m-1}u=Kh$, with $m=3$ for cubic and $m=5$ for quintic; its exterior domain is $\Omega=\mathbb R^n\setminus\Theta$. [[def-se-internal-systems]]

[F2] The Axiom of Choice gives countable choice: a choice function on the family of sets in a sequence selects an element for each index. [[math:def-axiom-of-choice]] [[math:def-countable-choice]]

[F3] The Euclidean chain rule applies to the real and imaginary components of a smooth complex-valued function and to their derivatives. [[math:thm-chain-rule-for-total-derivatives]]

[F4] Under countable choice, change of variables for a $C^1$ diffeomorphism applies to nonnegative measurable integrands on open sets, with the absolute Jacobian determinant. [[math:thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]



**Given:** The equations and dimensions in the statement, with $h=0$, and a sufficiently smooth solution $u$ whose displayed spatial norms are finite. Let $\rho>0$ and set $a=2/(m-1)$, $u_\rho(t,x)=\rho^a u(\rho^2t,\rho x)$, and $\Omega_\rho=\rho^{-1}\Omega$.

**Goal:** Identify the two scaling-invariant norms and explain the domain qualification.

1.1 By the chain rule, both $\partial_t u_\rho$ and $\Delta u_\rho$ are $\rho^{a+2}$ times the corresponding derivative of $u$ evaluated at $(\rho^2t,\rho x)$, while $|u_\rho|^{m-1}u_\rho$ is $\rho^{am}$ times the original nonlinearity there. Since $am=a+2$, the unforced equation is preserved on the scaled space-time domain. A zero Dirichlet boundary value is carried from $\partial\Omega$ to $\partial\Omega_\rho$ when the boundary values are meaningful. [F1, F3, given, algebra]

2.1 At corresponding times, apply change of variables $y=\rho x$ on $\Omega_\rho$ and use the chain rule for the gradient. This gives $\|u_\rho(t)\|_{L^2(\Omega_\rho)}=\rho^{a-n/2}\|u(\rho^2t)\|_{L^2(\Omega)}$ and $\|\nabla u_\rho(t)\|_{L^2(\Omega_\rho)}=\rho^{a+1-n/2}\|\nabla u(\rho^2t)\|_{L^2(\Omega)}$. For $m=3$, $a=1$, so the first exponent is zero when $n=2$. For $m=5$, $a=1/2$, so the second exponent is zero when $n=3$. These are respectively the mass-critical and energy-critical classifications defined above. Since $\Omega_\rho=\mathbb R^n\setminus\rho^{-1}\Theta$, a fixed obstacle and its control cutoff are generally changed by the dilation; no fixed-domain control or well-posedness conclusion follows from this calculation. [F2, F3, F4, F5, F6, step 1.1, given, algebra] ∎

## Source notes

The article is cited for its two classifications and their context, at the paragraph after Corollary 1.6 and §5.2(B)–(C). The calculation above is a local explanation of the scaling terminology; the article citation is attribution rather than a premise of the calculation. The terms mass and energy name mathematical norms here and do not assert an experimental measurement.
