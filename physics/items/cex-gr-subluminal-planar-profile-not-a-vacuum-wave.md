---
id: cex-gr-subluminal-planar-profile-not-a-vacuum-wave
kind: counterexample
title: "A transverse-traceless planar profile travelling slower than light fails the linearized vacuum equations"
status: draft
origin: session
domain: mathematics
dependency_level: 13
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-flat-linearized-perturbation, thm-gr-flat-linearized-curvature-and-gauge, thm-gr-tt-plane-wave-solutions, def-gr-minkowski-model-and-inertial-chart, thm-chain-rule, thm-algebra-of-derivatives, def-derivative, def-real-order]
dependency_roles:
  def-gr-flat-linearized-perturbation: mathematical-premise
  thm-gr-flat-linearized-curvature-and-gauge: mathematical-premise
  thm-gr-tt-plane-wave-solutions: mathematical-premise
  def-gr-minkowski-model-and-inertial-chart: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-derivative: mathematical-premise
  def-real-order: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 6 (6.30)-(6.33): the plane-wave solution requires a null wave vector, so that the waves travel at the speed of light, printed pp. 148-149 (PDF pp. 155-156)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 7.3 (7.38)-(7.39): the plane-wave ansatz solves the wave equation only for null wavevector, printed p. 77 (PDF p. 78)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
---

## Statement refuted

**Statement refuted:** "For every real $v$ with $-1<v<1$ and every smooth
$f:\mathbb R\to\mathbb R$, the symmetric perturbation $h$ with components

$$h_{11}(x)=f\bigl(x^3-vx^0\bigr),\quad h_{22}(x)=-f\bigl(x^3-vx^0\bigr),\quad h_{12}=h_{21}=0,\quad\text{all other components }0,$$

solves the linearized vacuum equations of the flat linearization, $G^{(1)}_{ab}(h)=0$."

Here the phase parameter is defined by the level sets $x^3-vx^0=\mathrm{constant}$;
their coordinate ratio is $|dx^3/dx^0|=|v|<1$, while the null phase has
coordinate ratio $1$ in the same flat chart.

## Facts & Assumptions

**Given:** The flat model with inertial chart, the numbers $v=\tfrac12$, $f(s)=s^2$, the function $U(x):=x^3-\tfrac12x^0$, and the perturbation $h$ with $h_{11}=U^2$, $h_{22}=-U^2$, all other components zero.

[L1] In harmonic gauge the first-order Einstein tensor is $G^{(1)}_{ab}(h)=-\tfrac12\Box\bar h_{ab}$, and the trace reversal is $\bar h_{ab}=h_{ab}-\tfrac12\eta_{ab}\eta^{cd}h_{cd}$; the flat d'Alembertian is $\Box=-\partial_0^2+\partial_1^2+\partial_2^2+\partial_3^2$ ([[def-gr-flat-linearized-perturbation]] clauses (b)-(c), [[thm-gr-flat-linearized-curvature-and-gauge]] clause (d)).

[L2] For $U_v(x):=x^3-vx^0$, the chain rule gives $\partial_0(f\circ U_v)=-vf'(U_v)$, $\partial_3(f\circ U_v)=f'(U_v)$, $\partial_0^2(f\circ U_v)=v^2f''(U_v)$ and $\partial_3^2(f\circ U_v)=f''(U_v)$; $\partial_1,\partial_2$ derivatives vanish and derivatives of products obey the usual rules ([[thm-chain-rule]], [[thm-algebra-of-derivatives]], [[def-derivative]]).

## Counterexample

Take $v=\tfrac12$ and $f(s)=s^2$. Then

$$h_{11}(x)=\bigl(x^3-\tfrac12x^0\bigr)^2,\qquad h_{22}(x)=-\bigl(x^3-\tfrac12x^0\bigr)^2,\qquad h_{13}=h_{23}=h_{33}=0,$$

and the perturbation is traceless and in harmonic gauge, yet

$$G^{(1)}_{11}(h)=-\tfrac34\ne0$$


at every point of $\mathbb R^4$; so it does not solve the linearized vacuum
equations.

1.1 (Trace and harmonic gauge.) The trace is $\eta^{ab}h_{ab}=h_{11}+h_{22}=U^2-U^2=0$, so $\bar h=h$. The divergence components are $\partial^ah_{a0}=0$; for $b=1$, $\partial^ah_{a1}=\eta^{00}\partial_0h_{01}+\eta^{11}\partial_1h_{11}+\eta^{33}\partial_3h_{31}=0+0+0=0$, since $h$ does not depend on $x^1$ and $h_{31}=0$; similarly for $b=2,3$. Hence $\partial^a\bar h_{ab}=0$: the perturbation is in harmonic gauge. [L2, given, algebra]

1.2 (The flat d'Alembertian of the profile.) For $g(s)=s^2$ we have $g''=2$, and by [L2] applied to $f=g$, $\Box U^2=-\partial_0^2U^2+\partial_3^2U^2=-\tfrac14\cdot2+2=\tfrac32$. Hence $\Box h_{11}=\tfrac32$, $\Box h_{22}=-\tfrac32$ and $\Box h_{ab}=0$ for all other pairs. [L2, algebra]

2.1 (The linearized Einstein tensor.) By [L1] and step 1.1, $G^{(1)}_{11}(h)=-\tfrac12\Box\bar h_{11}=-\tfrac12\Box h_{11}=-\tfrac34$, which is nonzero at every point. Therefore $G^{(1)}_{ab}(h)\ne0$ and the perturbation does not solve the linearized vacuum equations, refuting the statement. [L1, step 1.1, step 1.2, algebra] ∎

## Remarks

- **Why the phase rate matters.** For a profile $f(x^3-vx^0)$ one computes $\Box f=(1-v^2)f''$, which vanishes for every $f$ exactly when $v^2=1$. The distinguished null profile of the vacuum plane waves is $u=x^0-x^3$, for which the profiles with the same spatial structure do solve the equations ([[thm-gr-tt-plane-wave-solutions]] clause (b)); the counterexample uses the sub-null coordinate ratio $v=\tfrac12$ and exhibits the failure quantitatively.

- **The perturbation is not a solution of the exact field law either.** Since $G^{(1)}_{11}\ne0$, the perturbation is not even a first-order vacuum solution, so no exact vacuum metric is obtained by "correcting" it at higher order in the displayed family; the counterexample concerns the stated universal claim only.
