---
id: cex-gr-subluminal-planar-profile-not-a-vacuum-wave
kind: counterexample
title: "A transverse-traceless planar profile travelling slower than light fails the linearized vacuum equations"
status: published
origin: session
domain: mathematics
dependency_level: 13
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-flat-linearized-perturbation, thm-gr-flat-linearized-curvature-and-gauge, thm-gr-tt-plane-wave-solutions, def-gr-minkowski-model-and-inertial-chart, thm-chain-rule, thm-algebra-of-derivatives, def-derivative, def-real-order, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity]
dependency_roles:
  def-gr-flat-linearized-perturbation: mathematical-premise
  thm-gr-flat-linearized-curvature-and-gauge: mathematical-premise
  thm-gr-tt-plane-wave-solutions: mathematical-premise
  def-gr-minkowski-model-and-inertial-chart: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-derivative: mathematical-premise
  def-real-order: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
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

**Given:** The flat model with inertial chart, the number $v=\tfrac12$, the bounded smooth function $f(s)=\cos s$, the function $U(x):=x^3-\tfrac12x^0$, and the perturbation $h$ with $h_{11}=\cos U$, $h_{22}=-\cos U$, all other components zero. The bound $|\cos U|\le1$ makes $g(\lambda)=\eta+\lambda h$ Lorentzian on $\mathbb R^4$ for $|\lambda|<\tfrac12$; taking $q=0$ and $\varepsilon_1=\tfrac12$ makes $h$ an admissible first-order perturbation of a flat linearized family.

[L1] In harmonic gauge the first-order Einstein tensor is $G^{(1)}_{ab}(h)=-\tfrac12\Box\bar h_{ab}$, and the trace reversal is $\bar h_{ab}=h_{ab}-\tfrac12\eta_{ab}\eta^{cd}h_{cd}$; the flat d'Alembertian is $\Box=-\partial_0^2+\partial_1^2+\partial_2^2+\partial_3^2$ ([[def-gr-flat-linearized-perturbation]] clauses (b)-(c), [[thm-gr-flat-linearized-curvature-and-gauge]] clause (d)).

[L2] For $U_v(x):=x^3-vx^0$, the chain rule gives $\partial_0(f\circ U_v)=-vf'(U_v)$, $\partial_3(f\circ U_v)=f'(U_v)$, $\partial_0^2(f\circ U_v)=v^2f''(U_v)$ and $\partial_3^2(f\circ U_v)=f''(U_v)$; $\partial_1,\partial_2$ derivatives vanish and derivatives of products obey the usual rules ([[thm-chain-rule]], [[thm-algebra-of-derivatives]], [[def-derivative]]).

[L3] For every real $s$, $|\cos s|\le1$ and $\frac{d^2}{ds^2}\cos s=-\cos s$ ([[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-sine-and-cosine-derivatives]]).

## Counterexample

Take $v=\tfrac12$ and $f(s)=\cos s$. Then

$$h_{11}(x)=\cos\bigl(x^3-\tfrac12x^0\bigr),\qquad h_{22}(x)=-\cos\bigl(x^3-\tfrac12x^0\bigr),\qquad h_{13}=h_{23}=h_{33}=0,$$

and the perturbation is traceless and in harmonic gauge, yet at each point where $U(x)=0$

$$G^{(1)}_{11}(h)=\tfrac38\ne0$$


so it does not solve the linearized vacuum equations on $\mathbb R^4$.

1.1 (Trace, harmonic gauge and admissibility.) The trace is $\eta^{ab}h_{ab}=h_{11}+h_{22}=\cos U-\cos U=0$, so $\bar h=h$. The divergence components are $\partial^ah_{a0}=0$; for $b=1$, $\partial^ah_{a1}=\eta^{00}\partial_0h_{01}+\eta^{11}\partial_1h_{11}+\eta^{33}\partial_3h_{31}=0+0+0=0$, since $h$ does not depend on $x^1$ and $h_{31}=0$; similarly for $b=2,3$. Hence $\partial^a\bar h_{ab}=0$: the perturbation is in harmonic gauge. Also, [L3] gives $g_{11}=1+\lambda\cos U>0$ and $g_{22}=1-\lambda\cos U>0$ for $|\lambda|<\tfrac12$, with $g_{00}=-1$ and $g_{33}=1$, so $g(\lambda)$ is Lorentzian and $h$ is an admissible first-order perturbation. [L2, L3, given, algebra]

1.2 (The flat d'Alembertian of the profile.) By [L2]-[L3], $\Box f(U)=(-v^2+1)f''(U)=\tfrac34(-\cos U)=-\tfrac34\cos U$. Hence $\Box h_{11}=-\tfrac34\cos U$, $\Box h_{22}=\tfrac34\cos U$ and $\Box h_{ab}=0$ for all other pairs. [L2, L3, algebra]

2.1 (The linearized Einstein tensor.) By [L1] and steps 1.1-1.2, $G^{(1)}_{11}(h)=-\tfrac12\Box\bar h_{11}=\tfrac38\cos U$, which equals $\tfrac38$ wherever $U=0$. Therefore $G^{(1)}_{ab}(h)$ is not identically zero and the perturbation does not solve the linearized vacuum equations on $\mathbb R^4$, refuting the statement. [L1, step 1.1, step 1.2, algebra] ∎

## Remarks

- **Why the phase rate matters.** For a profile $f(x^3-vx^0)$ one computes $\Box f=(1-v^2)f''$, which vanishes for every $f$ exactly when $v^2=1$. The distinguished null profile of the vacuum plane waves is $u=x^0-x^3$, for which the profiles with the same spatial structure do solve the equations ([[thm-gr-tt-plane-wave-solutions]] clause (b)); the counterexample uses the sub-null coordinate ratio $v=\tfrac12$ and exhibits the failure quantitatively.

- **The perturbation is not a solution of the exact field law either.** Since $G^{(1)}_{11}\ne0$, the perturbation is not even a first-order vacuum solution, so no exact vacuum metric is obtained by "correcting" it at higher order in the displayed family; the counterexample concerns the stated universal claim only.
