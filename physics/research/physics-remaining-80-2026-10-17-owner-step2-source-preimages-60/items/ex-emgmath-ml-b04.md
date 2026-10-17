---
id: ex-emgmath-ml-b04
kind: example
title: Static electrostatic test-energy first integral
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 7
proof_strategy: direct
deps:
  - thm-emg-charged-symmetry-current
  - def-emg-matter-formal-systems
  - def-gr-timelike-worldline-and-proper-time
  - def-interval
dependency_roles:
  thm-emg-charged-symmetry-current: mathematical-premise
  def-emg-matter-formal-systems: mathematical-premise
  def-gr-timelike-worldline-and-proper-time: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 5, equations (5.41)–(5.43), PDF pp. 146–147 (printed pp. 140–141)"
      url: "https://arxiv.org/pdf/gr-qc/9712019v1"
      locator: "Killing symmetry and a geodesic first integral; the static charged potential and its energy normalization are checked directly here."
    - title: "David Tong, General Relativity, full author-hosted lecture notes, 2019, §§4.3 and 4.5.5, PDF pp. 166–169 and 194–196 (printed pp. 159–162 and 187–189)"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
      locator: "Killing charges and field-current flux balance; the test-particle identity is conditional on the exact A-page result and is evaluated explicitly here."
verification:
  precheck: pending
---

## Example

Let $\Omega\subseteq\mathbb R^3$ be open and let $\phi\in C^\infty(\Omega,\mathbb R)$, assigned volts in SI bookkeeping. On $M=\mathbb R_{x^0}\times\Omega$ with Minkowski metric, orientation $dx^0\wedge dx^1\wedge dx^2\wedge dx^3$, future time-orientation $N=\partial_0$, and length coordinate $x^0=ct$, take the static one-form $A=-(\phi/c)dx^0$ and $F=dA$. Let $I\subseteq\mathbb R$ be an open interval with nonempty interior ([[def-interval]]) and let $z:I\to M$ be an existing $C^2$ future-timelike curve parametrized by proper time $\tau$ in the sense of [[def-gr-timelike-worldline-and-proper-time]], with $U=dz/d\tau$, $g(U,U)=-c^2$, and $m\nabla_UU=qF^\sharp(U)$ for constants $m>0$ and $q\in\mathbb R$, assigned kilograms and coulombs respectively. Write $\mathbf w=d\mathbf x/dt$, $|\mathbf w|<c$, and $\gamma_L=(1-|\mathbf w|^2/c^2)^{-1/2}$.

## Facts & Assumptions

**Given:** The stated Minkowski metric and static potential, a supplied timelike curve satisfying the Lorentz-force equation, and the constants $c,m,q$.

[F1] [[def-emg-matter-formal-systems]]: a local potential is a supplied one-form $A$ with $F=dA$; $F^\sharp(U)^a=F^a{}_bU^b$.

[F2] [[thm-emg-charged-symmetry-current]]: if $\xi$ is Killing, $\mathcal L_\xi A=d\chi$, and the supplied curve satisfies $m\nabla_UU=qF^\sharp(U)$, then $m g(U,\xi)+q(A(\xi)-\chi)$ is constant. Its current stress clause remains conditionally open at its draft Maxwell-stress supplier; this example uses only the separate test-particle clause at its exact interface.

[F3] [[def-gr-timelike-worldline-and-proper-time]]: proper-time parametrization of a $C^2$ future-timelike curve gives $g(U,U)=-c^2$; this normalization is also stated explicitly in the Example.

[A1] The metric and potential are prescribed; the curve is assumed to exist in $\Omega$. No self-field or coupled-field existence claim is included.

## Verification

1.1 The vector field $\xi=\partial_{x^0}$ is Killing because the Minkowski components are constant. The potential is independent of $x^0$, so $\mathcal L_\xi A=0=d\chi$ with $\chi=0$. The hypotheses of the test-particle clause in [F2] are exactly those in the Example. [F1, F2, A1, algebra]

2.1 Put $t=x^0/c$, so $U^0=c\,dt/d\tau$ and $U^i=w^i\,dt/d\tau$. The normalization $g(U,U)=-c^2$ gives $-(c^2-|\mathbf w|^2)(dt/d\tau)^2=-c^2$; because the curve is future-directed, $dt/d\tau>0$, hence $dt/d\tau=\gamma_L$ and $U^0=\gamma_Lc$. Thus $g(U,\xi)=g_{00}U^0=-\gamma_Lc$, while $A(\xi)=A_0=-\phi/c$. The conserved scalar is $C=-\gamma_Lmc-q\phi/c$, and multiplying by $-c$ gives the conserved energy expression $\gamma_Lmc^2+q\phi$. [F1, F2, F3, step 1.1, algebra] ∎
## Remarks

This is a test-particle first integral in a prescribed static background. It does not assert that Minkowski space with nonzero $F$ solves the coupled Einstein equation. The expression uses kinetic momentum and the stated potential gauge; general gauge changes are covered by the compensator in the supplier theorem.
