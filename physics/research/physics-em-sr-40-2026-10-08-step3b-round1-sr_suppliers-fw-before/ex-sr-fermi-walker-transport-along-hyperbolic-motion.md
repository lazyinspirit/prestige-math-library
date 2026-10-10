---
id: ex-sr-fermi-walker-transport-along-hyperbolic-motion
kind: example
domain: mathematics
title: "Worked Fermi-Walker transport along uniformly accelerated hyperbolic motion"
status: draft
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-sr-fermi-walker-transport, lem-sr-fermi-walker-transport-existence-and-uniqueness, thm-sr-fermi-walker-and-rigid-observer-examples, def-sr-four-velocity-and-four-acceleration, def-sr-proper-time, thm-sr-proper-time-and-observer-decomposition, def-inertial-frame-and-inertial-chart, def-sr-affine-minkowski-model, def-hyperbolic-functions, thm-hyperbolic-identities-and-derivatives, thm-chain-rule]
dependency_roles:
  def-sr-fermi-walker-transport: mathematical-premise
  lem-sr-fermi-walker-transport-existence-and-uniqueness: mathematical-premise
  thm-sr-fermi-walker-and-rigid-observer-examples: mathematical-premise
  def-sr-four-velocity-and-four-acceleration: mathematical-premise
  def-sr-proper-time: mathematical-premise
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  def-hyperbolic-functions: mathematical-premise
  thm-hyperbolic-identities-and-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
proof_strategy: direct
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages): Sections 1.1-1.3 pp. 12-28 (vector representation of observer motion, operational radar calibration, time dilation, length-contraction road-trip example), Sections 3.5 and 3.7 pp. 60-68 (four-velocity, acceleration, projection operator), Section 3.9.3 pp. 73-74 (local failure of accelerated simultaneity), Sections 7.1-7.3 pp. 147-151 (Rindler coordinates and nonuniform proper acceleration), Section 8.1 pp. 165-169 (rotating synchronization), Section 9.5 pp. 205-211 (congruences, expansion, Born rigidity); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997): Chapter 1 pp. 8-16 (inertial frames built from rigid rods and synchronized clocks, simultaneity, time dilation, length contraction) and pp. 26-27 (worldline, proper time (1.97)-(1.99), four-velocity); Chapter 3 pp. 68-71 (proper-time functional)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
---

## Example

In an inertial chart with metric $\operatorname{diag}(-1,1,1,1)$ let $\alpha>0$ and consider the worldline $x(\tau)=\frac{c^2}{\alpha}\bigl(\sinh(\alpha\tau/c),\cosh(\alpha\tau/c),0,0\bigr)$, parametrized by $\tau$; write $\theta:=\alpha\tau/c$. Its derivatives are $U:=x'=c(\cosh\theta,\sinh\theta,0,0)$ and $A:=U'=\alpha(\sinh\theta,\cosh\theta,0,0)$, and one computes $\eta(U,U)=c^2(-\cosh^2\theta+\sinh^2\theta)=-c^2$, $\eta(A,A)=\alpha^2(-\sinh^2\theta+\cosh^2\theta)=\alpha^2$ and $\eta(U,A)=c\alpha(-\cosh\theta\sinh\theta+\sinh\theta\cosh\theta)=0$; thus $\tau$ is a proper-time parameter (up to an additive constant) and $U$ is the four-velocity of a uniformly accelerated worldline. Put $X_0:=U/c=(\cosh\theta,\sinh\theta,0,0)$ and $X_1:=(\sinh\theta,\cosh\theta,0,0)$; then $\eta(X_0,X_0)=-1$, $\eta(X_0,X_1)=0$ and $\eta(X_1,X_1)=1$, so $(X_0,X_1)$ is an orthonormal pair. A direct substitution into the Fermi-Walker rule shows that both are Fermi-Walker transported: $X_0'=A/c$ equals $\frac1{c^2}\bigl(\eta(A,X_0)U-\eta(U,X_0)A\bigr)=\frac1{c^2}\bigl(0+cA\bigr)=A/c$, and $X_1'=\frac{\alpha}{c}X_0$ equals $\frac1{c^2}\bigl(\eta(A,X_1)U-\eta(U,X_1)A\bigr)=\frac1{c^2}\bigl(\alpha U-0\bigr)=\frac{\alpha}{c}X_0$. Moreover $X_1$ is not parallel transported, since $X_1'=\frac{\alpha}{c}X_0\ne0$ for $\alpha>0$; Fermi-Walker transport therefore differs from parallel transport for accelerated motion. The norm $\eta(X_1,X_1)=1$ is constant along the worldline, an instance of the preservation clause of [[thm-sr-fermi-walker-and-rigid-observer-examples]], and adjoining the constant fields $\partial_y,\partial_z$ gives a Fermi-Walker transported orthonormal tetrad $\bigl(U/c,X_1,\partial_y,\partial_z\bigr)$ along the hyperbolic worldline.

## Facts & Assumptions

**Given:** An inertial chart of the affine Minkowski model with $\eta=\operatorname{diag}(-1,1,1,1)$ ([[def-inertial-frame-and-inertial-chart]], [[def-sr-affine-minkowski-model]]), the number $\alpha>0$, the curve $x(\tau)=\frac{c^2}{\alpha}(\sinh\theta,\cosh\theta,0,0)$ with $\theta=\alpha\tau/c$, and the fields $U=x'$, $A=U'$, $X_0=U/c$, $X_1=(\sinh\theta,\cosh\theta,0,0)$ of the Example ([[def-sr-four-velocity-and-four-acceleration]]).

[L1] Fermi-Walker transport ([[def-sr-fermi-walker-transport]] clauses (a),(b),(c)): a $C^1$ field $X$ along a $C^2$ future timelike worldline is Fermi-Walker transported exactly when $X'=\frac1{c^2}\bigl(\eta(A,X)U-\eta(U,X)A\bigr)$; the four-velocity $U$ is always Fermi-Walker transported; and on an interval where $A=0$ the rule coincides with parallel transport, which in the flat model means $X'=0$.

[L2] Preservation and tetrads ([[thm-sr-fermi-walker-and-rigid-observer-examples]] clause (a), [[lem-sr-fermi-walker-transport-existence-and-uniqueness]]): Fermi-Walker transport preserves $\eta(X,Y)$ for transported pairs; and the unique transported family with initial values a tetrad whose first vector is $U/c$ is an orthonormal observer-adapted tetrad at every parameter.

[L3] Four-velocity and proper time ([[def-sr-four-velocity-and-four-acceleration]], [[def-sr-proper-time]], [[thm-sr-proper-time-and-observer-decomposition]] clauses (a),(b)): for a $C^1$ future timelike worldline parametrized by proper time, $U=x'$ satisfies $\eta(U,U)=-c^2$ and, when $x$ is $C^2$, $\eta(U,A)=0$; conversely a parameter is a proper-time parameter exactly when $\sqrt{-\eta(x',x')}=c$ along the curve.

[L4] Hyperbolic functions and the chain rule: $\cosh^2s-\sinh^2s=1$, $\cosh s>0$, $\sinh'=\cosh$, $\cosh'=\sinh$ ([[def-hyperbolic-functions]], [[thm-hyperbolic-identities-and-derivatives]]), and differentiation of the composite $\tau\mapsto(\sinh\theta(\tau),\cosh\theta(\tau))$ with $\theta=\alpha\tau/c$ uses the chain rule ([[thm-chain-rule]]).

## Verification

**Proof technique:** direct.

1.1 Derivatives and causal character: by [L4], $x'(\tau)=\frac{c^2}{\alpha}\cdot\frac{\alpha}{c}\bigl(\cosh\theta,\sinh\theta,0,0\bigr)=c\bigl(\cosh\theta,\sinh\theta,0,0\bigr)=U$, so $U$ is $C^1$ and $x$ is $C^2$; further $U'=c\cdot\frac{\alpha}{c}(\sinh\theta,\cosh\theta,0,0)=\alpha(\sinh\theta,\cosh\theta,0,0)=A$. Evaluating the diagonal form, $\eta(U,U)=c^2(-\cosh^2\theta+\sinh^2\theta)=-c^2$, so $x$ is future timelike with $U$ future (time component $c\cosh\theta>0$) and $\tau$ is a proper-time parameter by [L3]; $\eta(A,A)=\alpha^2(\cosh^2\theta-\sinh^2\theta)=\alpha^2$ and $\eta(U,A)=c\alpha(-\cosh\theta\sinh\theta+\sinh\theta\cosh\theta)=0$; in particular $A\ne0$ because $\alpha>0$. [L3, L4, algebra]

2.1 Orthonormal pair: $X_0=U/c=(\cosh\theta,\sinh\theta,0,0)$ and $X_1=(\sinh\theta,\cosh\theta,0,0)$ satisfy $\eta(X_0,X_0)=-\cosh^2\theta+\sinh^2\theta=-1$, $\eta(X_0,X_1)=-\cosh\theta\sinh\theta+\sinh\theta\cosh\theta=0$ and $\eta(X_1,X_1)=-\sinh^2\theta+\cosh^2\theta=1$ by [L4]; and $X_0' = U'/c=A/c$. [step 1.1, L4]

2.2 $X_1$ is Fermi-Walker transported: $X_1'=\frac{\alpha}{c}(\cosh\theta,\sinh\theta,0,0)=\frac{\alpha}{c}X_0$, and $\frac1{c^2}\bigl(\eta(A,X_1)U-\eta(U,X_1)A\bigr)=\frac1{c^2}\bigl(\alpha U-0\bigr)=\frac{\alpha}{c}X_0$, because $\eta(A,X_1)=\alpha(-\sinh^2\theta+\cosh^2\theta)=\alpha$ and $\eta(U,X_1)=c(-\cosh\theta\sinh\theta+\sinh\theta\cosh\theta)=0$ by [L4]; the right-hand side equals $X_1'$, so $X_1$ is transported. [L1, step 1.1, L4]

3.1 $X_0$ is Fermi-Walker transported: by [L1] and steps 1.1-2.1, $\frac1{c^2}\bigl(\eta(A,X_0)U-\eta(U,X_0)A\bigr)=\frac1{c^2}\bigl(0-(-c)A\bigr)=A/c=X_0'$, because $\eta(A,X_0)=\eta(A,U)/c=0$ and $\eta(U,X_0)=\eta(U,U)/c=-c$. [L1, step 1.1, step 2.1]

3.2 Difference from parallel transport and norm preservation: $X_1'=\frac{\alpha}{c}X_0\ne0$ since $\alpha>0$ and $X_0\ne0$, so $X_1$ is not parallel transported by [L1]; Fermi-Walker transport therefore differs from parallel transport along this accelerated worldline. The norm is preserved: $\eta(X_1,X_1)=1$ is constant, in agreement with the preservation clause [L2]. [L1, L2, step 2.2]

4.1 Tetrad: the constant fields $\partial_y=(0,0,1,0)$ and $\partial_z=(0,0,0,1)$ have $\partial_y'=\partial_z'=0$ and $\eta(A,\partial_y)=\eta(U,\partial_y)=0$, likewise for $\partial_z$, so the right-hand side of the Fermi-Walker rule vanishes and both are transported by [L1]. Hence $\bigl(U/c,X_1,\partial_y,\partial_z\bigr)=\bigl(X_0,X_1,\partial_y,\partial_z\bigr)$ is an orthonormal tetrad every member of which is Fermi-Walker transported, as asserted in the Example; this also realizes the observer-adapted tetrad of [L2]. [L1, L2, step 2.1, step 3.1, step 2.2]

5.1 Conclusion: steps 1.1-2.1 verify the kinematic data, steps 3.1 and 2.2 verify that both legs $X_0=U/c$ and $X_1$ satisfy the Fermi-Walker rule, step 3.2 exhibits the nonzero derivative $X_1'=\frac{\alpha}{c}X_0$ showing that Fermi-Walker transport is not parallel transport for $\alpha>0$, and step 4.1 completes the transported orthonormal tetrad. All identities are exact evaluations in the hyperbolic functions and the diagonal form. [step 3.1, step 2.2, step 3.2, step 4.1] ∎

## Remarks

- **Why the correction term matters.** The Fermi-Walker rule subtracts exactly the acceleration-dependent term $c^{-2}(\eta(A,X)U-\eta(U,X)A)$; along this worldline the term rotates $X_1$ at the rate $\alpha/c$ while keeping $X_0$ transported, which is what makes the pair $(X_0,X_1)$ a nonrotating orthonormal frame in the Fermi-Walker sense.

- **Uniform acceleration.** The worldline has constant acceleration magnitude $\sqrt{\eta(A,A)}=\alpha$ and lies in the region $x^0{}^2<x^1{}^2$; the example uses only the local differential identities and no horizon or coordinate-singularity statement, which belongs to the accelerated-observers page.
