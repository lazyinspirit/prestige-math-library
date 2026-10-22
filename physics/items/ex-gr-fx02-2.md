---
id: ex-gr-fx02-2
kind: example
title: "A flat-torus zero mode defeats uniqueness and coercivity"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 2
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - def-gr-fx-conformal-constraint-data
  - thm-gr-fx-lichnerowicz-reduction
  - def-gr-periodic-torus-and-sobolev-spaces
  - lem-gr-periodic-fourier-differentiation-and-norm-equivalence
  - def-countable-choice
dependency_roles:
  def-gr-fx-conformal-constraint-data: mathematical-premise
  thm-gr-fx-lichnerowicz-reduction: mathematical-premise
  def-gr-periodic-torus-and-sobolev-spaces: mathematical-premise
  lem-gr-periodic-fourier-differentiation-and-norm-equivalence: mathematical-premise
  def-countable-choice: mathematical-premise
physical_scope: "Exact mathematical boundary example for the vacuum conformal constraint equation on a flat torus; no observation, global development, or general uniqueness claim is made."
sources:
  references:
    - title: "É. Gourgoulhon, 3+1 Formalism and Bases of Numerical Relativity, Lecture Notes in Physics 846 (2012; author preprint arXiv:gr-qc/0703035v1), §§8.2.2–8.2.4"
      url: "https://arxiv.org/pdf/gr-qc/0703035"
      locator: "Full 220-page lecture-note PDF retrieved; complete relevant §§8.2.2–8.2.4 inspected, including the CMC Lichnerowicz equation. The torus zero-mode calculation in this example is verified locally."
    - title: "R. Bartnik and J. Isenberg, The Constraint Equations, in The Einstein Equations and the Large Scale Behavior of Gravitational Fields (Birkhäuser, 2004), arXiv:gr-qc/0405092v1"
      url: "https://arxiv.org/pdf/gr-qc/0405092"
      locator: "Full 34-page review chapter retrieved; complete relevant §4.1 inspected, including equations (47)–(56) and the warning that not all free data are solvable."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Example

Let $\Sigma=\mathbb T^3_{2\pi}$ with flat conformal metric
$\widetilde h=L_*^2\sum_i(dx^i)^2$, set $\widetilde\sigma=0$ and $\tau=0$,
and fix $\Lambda=0$. Every positive constant $\phi=d$ solves the
Lichnerowicz equation, so the same free data admit infinitely many positive
constant conformal factors. At each such $d$, the linearized scalar operator is
$\mathcal A_0v=-8\widetilde\Delta v$. Define coercivity here to mean that
$\int v\mathcal A_0v\,d\mu\ge c_0\|v\|_{H^1}^2$ for some $c_0>0$ and every
smooth real $v$, using the normalized torus measure and the Sobolev norm of
the Fourier supplier. The operator is not coercive.

## Example references

[[def-gr-fx-conformal-constraint-data]]

[[thm-gr-fx-lichnerowicz-reduction]]

[[def-gr-periodic-torus-and-sobolev-spaces]]

[[lem-gr-periodic-fourier-differentiation-and-norm-equivalence]]

[[def-countable-choice]]

## Facts & Assumptions

**Given:** The flat three-torus with $L_*>0$, zero TT tensor and zero mean curvature parameter, together with the normalized measure and integer Sobolev spaces of the torus supplier. Assume $\mathrm{AC}_\omega$ for the Fourier Sobolev suppliers and inherited embedded Lorentzian interpretation.

[A1] [[def-countable-choice]], [[def-gr-fx-conformal-constraint-data]], [[def-gr-periodic-torus-and-sobolev-spaces]], [[lem-gr-periodic-fourier-differentiation-and-norm-equivalence]]: $\mathrm{AC}_\omega$ is the axiom that every countable family of nonempty sets has a choice function; the Fourier Sobolev suppliers state it explicitly, and the local GR definition carries it only for embedded interpretation.

[F1] [[def-gr-fx-conformal-constraint-data]]: the Lichnerowicz equation uses $\widetilde R$, $\widetilde\sigma$, $\tau$ and $\widetilde\Delta=\operatorname{div}_{\widetilde h}\operatorname{grad}_{\widetilde h}$.

[F2] [[thm-gr-fx-lichnerowicz-reduction]]: the vacuum constraint equations are equivalent to the scalar equation once the automatic momentum constraint is used.

[F3] [[def-gr-periodic-torus-and-sobolev-spaces]]: the torus has characters $\chi_k=e^{ik\cdot x}$, normalized measure $\mu$, and derivative Sobolev spaces $H^s$.

[F4] [[lem-gr-periodic-fourier-differentiation-and-norm-equivalence]]: Fourier coefficients differentiate by multiplication by $ik$, and the Fourier-weight norm is equivalent to the derivative Sobolev norm.

## Verification

1.1 Here $\widetilde R=0$, $|\widetilde\sigma|^2=0$ and $\tau=0$, so the Lichnerowicz equation of [F2] is $-8\widetilde\Delta\phi=0$. For any positive constant $d$, $\widetilde\Delta d=0$, and therefore $\phi=d$ solves it. Distinct positive constants give distinct solutions of the scalar equation for these same free data; the corresponding constraint pairs have $h=d^4\widetilde h$ and $K=0$ by [F1] and satisfy both constraints by [F2]. [A1, F1, F2, algebra]

2.1 Differentiating the scalar expression at $\phi=d$ with respect to a smooth direction $v$ gives $\mathcal A_0v=-8\widetilde\Delta v$. Take the nonzero constant function $v=1$. Its coordinate derivatives vanish, so $\widetilde\Delta v=0$ and $\int v\mathcal A_0v\,d\mu=0$. By [F3], the normalized measure has total mass one and the derivative Sobolev norm includes the $L^2$ norm, so $\|1\|_{H^1}^2=\int1\,d\mu=1>0$. No positive $c_0$ can satisfy the stated coercivity bound. Equivalently, the Fourier multiplier at $k=0$ is zero; [F4] identifies this constant as the zero mode. [A1, F3, F4, step 1.1, algebra] ∎
