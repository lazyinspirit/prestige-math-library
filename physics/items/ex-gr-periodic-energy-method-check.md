---
id: ex-gr-periodic-energy-method-check
kind: example
title: "Worked E0 check: constant-coefficient transport on the three-torus, explicit solution and conserved energy"
status: published
origin: session
domain: mathematics
dependency_level: 12
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
deps: [def-gr-galerkin-fourier-projection, lem-gr-galerkin-projection-properties, lem-gr-periodic-sobolev-embedding,def-gr-periodic-torus-and-sobolev-spaces, def-gr-periodic-symmetric-hyperbolic-system, thm-gr-periodic-symmetric-hyperbolic-existence, lem-gr-periodic-fourier-differentiation-and-norm-equivalence, thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability, lem-gr-galerkin-energy-inequality]
dependency_roles:
  def-gr-galerkin-fourier-projection: mathematical-premise
  lem-gr-galerkin-projection-properties: mathematical-premise
  lem-gr-periodic-sobolev-embedding: mathematical-premise
  def-gr-periodic-torus-and-sobolev-spaces: mathematical-premise
  def-gr-periodic-symmetric-hyperbolic-system: mathematical-premise
  thm-gr-periodic-symmetric-hyperbolic-existence: mathematical-premise
  lem-gr-periodic-fourier-differentiation-and-norm-equivalence: mathematical-premise
  thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability: mathematical-premise
  lem-gr-galerkin-energy-inequality: mathematical-premise
sources:
  references:
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 3.1 (Symmetric Hyperbolic Systems): the definition of a quasilinear symmetric hyperbolic system, the finite-dimensional mollifier approximation (3.1) solved by ODE theory, the energy and Moser product/composition estimates, the higher-order energy inequality, uniqueness, the Rellich/Ascoli compactness step and the passage to a classical solution, with Remarks 1-6 on smooth persistence, the continuation criterion, Cauchy stability and the non-identity time matrix"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
    - title: "M. E. Taylor, Fourier Analysis, Distributions, and Constant-Coefficient Linear PDE (UNC lecture notes, 2018), Section 1 (Fourier series on the torus T^n): characters, Fourier coefficients, the Parseval identity and convergence of the coefficient series"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/fourier.pdf"
verification:
  precheck: pending
---

## Example

On $\mathbb T^3_{2\pi}$ take $m=1$, $A^0=1$, $A^1=2$, $A^2=A^3=0$, $B=0$,
so the system $(\star)$ of [[def-gr-periodic-symmetric-hyperbolic-system]]
reads $\partial_tu+2\partial_1u=0$, with $u_0\in H^s$ real-valued and integer $s\ge5$.
This example exhibits the explicit solution on the periodic domain,
$u(t,x)=u_0(x^1-2t,x^2,x^3)$, verifies that it is the E0 solution, and checks
the weighted energy identity $e'(t)=0$ for the energy
$e(t)=\int u(t)^2\,d\mu$ directly.

## Facts & Assumptions

**Given:** the torus data and the system $\partial_tu+2\partial_1u=0$ with real $H^s$ datum $u_0$, integer $s\ge5$.

[L1] The periodic torus, its characters and the spaces $H^s$ are those of [[def-gr-periodic-torus-and-sobolev-spaces]]; for a periodic $H^s$ function the translate $x\mapsto u_0(x^1-2t,x^2,x^3)$ is again in $H^s$ with the same norm, by the derivative rule and the periodicity of the Fourier representation ([[lem-gr-periodic-fourier-differentiation-and-norm-equivalence]], [[lem-gr-periodic-sobolev-embedding]] supplies the $C^1$ representative since $s-1>3/2$).

[L2] E0 existence and uniqueness for this system: the data $u_0$ with values in any compact interval and finite $H^s$ norm admit a classical Sobolev solution, unique by [[thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability]], with $\partial_tu\in L^\infty H^{s-1}$; the solution is found by the Galerkin/limit construction ([[thm-gr-periodic-symmetric-hyperbolic-existence]]). [L2]

[L3] The metric measure $\mu$ is translation invariant on the torus and $\int\partial_1v\,d\mu=0$ for every smooth periodic $v$ (the fundamental theorem of calculus on one period, as in [[lem-gr-periodic-fourier-differentiation-and-norm-equivalence]] step 1.1). [L3]

[L4] The finite Fourier projection $P_N$ and its range $X_N$ are [[def-gr-galerkin-fourier-projection]]; $P_N$ commutes with spatial derivatives and maps $H^s$ into $X_N$ ([[lem-gr-galerkin-projection-properties]]). For $A^0=1$, the weighted Galerkin energy of [[lem-gr-galerkin-energy-inequality]] is $e_N(t)=\sum_{|\alpha|\le s}\|D^\alpha u_N(t)\|_2^2$.

## Verification

**Proof technique:** direct.

1.1 (The explicit function solves the system.) Define $u(t,x):=u_0(x^1-2t,x^2,x^3)$. Then $\partial_tu(t,x)=-2(\partial_1u_0)(x^1-2t,x^2,x^3)$ and $\partial_1u(t,x)=(\partial_1u_0)(x^1-2t,x^2,x^3)$, so $\partial_tu+2\partial_1u=0$ pointwise; $u(0,\cdot)=u_0$, and $u$ is classical because integer $s\ge5$ and inherits the $H^s$-bound of $u_0$ at every time, with higher smoothness whenever $u_0$ is smooth. [L1, algebra]

2.1 (Energy identity.) $e(t)=\int u(t)^2d\mu=\int u_0^2d\mu=e(0)$ by translation invariance [L3]; equivalently, differentiating under the integral and using the equation and [L3], $e'(t)=2\int u\partial_tu\,d\mu=-4\int u\partial_1u\,d\mu=-2\int\partial_1(u^2)\,d\mu=0$. [step 1.1, L3, algebra]

3.1 (Identification with the E0 solution.) By [L2] there is a unique solution through $u_0$; the explicit function of step 1.1 is one, so the E0 solution is $u(t,x)=u_0(x^1-2t,x^2,x^3)$ and its energy is conserved. For the actual Galerkin energy, set $u_N(t)=P_Nu(t)$, equivalently $u_N(t,x)=(P_Nu_0)(x^1-2t,x^2,x^3)$. By [L4] this smooth finite Fourier polynomial solves $\partial_tu_N+2\partial_1u_N=0$ with datum $P_Nu_0$, hence its projected equation. Each Fourier coefficient obeys $\partial_t\widehat u_N(k)=-2ik_1\widehat u_N(k)$, so this is exactly the Galerkin trajectory. Every $D^\alpha u_N$ is the translate of $D^\alpha P_Nu_0$; translation invariance gives $e_N(t)=\sum_{|\alpha|\le s}\|D^\alpha P_Nu_0\|_2^2=e_N(0)$ and $e_N'(t)=0$. Thus the actual energy inequality is verified with $C=0$, at every cutoff $N$, as well as the zero-order identity of step 2.1. [step 1.1, step 2.1, L2, L3, L4, discharge-construct] ∎
