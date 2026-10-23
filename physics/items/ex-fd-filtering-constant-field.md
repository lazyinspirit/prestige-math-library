---
id: ex-fd-filtering-constant-field
kind: example
title: Constant velocity has zero subfilter stress
status: draft
origin: pipeline
domain: mathematics
dependency_level: 4
deps:
  - def-countable-choice
  - def-fd-positive-convolution-fluid-filter
  - thm-fd-holder-energy-transfer-bound
dependency_roles:
  def-countable-choice: mathematical-premise
  def-fd-positive-convolution-fluid-filter: mathematical-premise
  thm-fd-holder-energy-transfer-bound: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-23
---
## Example

Assume the Axiom of Countable Choice required by the normalized periodic torus convention. Let $d\in\{1,2,3\}$, $L>0$ m, $I\subseteq\mathbb R$ an open time interval measured in s, $w\in\mathbb R^d$ a constant velocity measured in m s$^{-1}$, and constant kinematic viscosity $\nu>0$ measured in m$^2$ s$^{-1}$. Set $u(x,t)=w$, $p(x,t)=0$, and $f(x,t)=0$ on $\mathbb T_L^d\times I$. Use the dimensional incompressible equation $\partial_tu+\nabla\cdot(u\otimes u)+\nabla p=\nu\Delta u+f$, with pressure per unit mass $p$ and force per unit mass $f$, where $\nabla\cdot(u\otimes v)_i=\sum_j\partial_j(u_i v_j)$ and $\Delta=\sum_j\partial_j^2$. This is a smooth divergence-free solution. For every $0<\ell<L/2$, the positive periodic convolution filter gives $\overline u_\ell=w$, $\tau_\ell=0$, and $\Pi_\ell=0$. Every velocity increment vanishes, so the Hölder transfer estimate applies with $A(t)=0$ and has zero right-hand side. This is an exact mathematical example, not a reported observation.

## Example references

[[def-fd-positive-convolution-fluid-filter]]

[[def-countable-choice|Countable Choice axiom]]

[[thm-fd-holder-energy-transfer-bound]]

## Facts & Assumptions

**Given:** The constant fields and parameters in the example.

[A1] The adopted mathematical system is $\partial_tu+\nabla\cdot(u\otimes u)+\nabla p=\nu\Delta u+f$ with $\nabla\cdot u=0$.

[A2] Adopt Countable Choice: every countable family of nonempty sets has a choice function ([[def-countable-choice]]); the Fourier-Sobolev torus convention is stated and proved under this axiom.

[F1] [[def-fd-positive-convolution-fluid-filter]]: the filter has a nonnegative unit-mass kernel, $\tau_\ell=\overline{u\otimes u}_\ell-\overline u_\ell\otimes\overline u_\ell$, and $\Pi_\ell=-\tau_\ell:\nabla\overline u_\ell$.

[F2] [[thm-fd-holder-energy-transfer-bound]]: under the stated periodic Hölder increment hypothesis, $|\Pi_\ell|\le C_{d,K,\alpha}A^3\ell^{3\alpha-1}$.

## Verification

**Proof technique:** direct.

**Given:** $u(x,t)=w$, $p=0$, $f=0$, and the filter width satisfies $0<\ell<L/2$.

1.1 Every spatial and time derivative of $u$ vanishes, so $\nabla\cdot u=0$, $\partial_tu=0$, $\nabla\cdot(u\otimes u)=0$, and $\Delta u=0$. Thus [A1] holds with $p=f=0$ for every $\nu>0$. [given, A1, algebra]

2.1 Since the kernel has unit mass, filtering the constant field gives $\overline u_\ell=w$ and filtering $u\otimes u=w\otimes w$ gives $\overline{u\otimes u}_\ell=w\otimes w$. Hence $\tau_\ell=0$, $\nabla\overline u_\ell=0$, and $\Pi_\ell=0$. [A2, F1, step 1.1, algebra]

3.1 For all $s,x,t$, $u(x-\ell s,t)-u(x,t)=0$, so the Hölder condition holds with $A(t)=0$ for any $0<\alpha<1$. Applying [F2] yields $|\Pi_\ell|\le0$, consistent with the exact value in step 2.1. [A2, F2, step 2.1, algebra] ∎

