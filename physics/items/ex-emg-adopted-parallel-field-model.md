---
id: ex-emg-adopted-parallel-field-model
kind: example
title: "Adopted parallel-field initial state"
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 9
proof_strategy: direct
deps:
  - pthm-emg-local-electrovacuum-model
  - def-emg-constrained-electrovacuum-data
  - def-emg-geometry-units
  - def-emg-local-potentials-and-circle-data
  - lem-emg-circle-connection-gluing
  - def-countable-choice
  - def-dependent-choice
dependency_roles:
  pthm-emg-local-electrovacuum-model: physical-result
  def-emg-constrained-electrovacuum-data: mathematical-premise
  def-emg-geometry-units: formulation-prerequisite
  def-emg-local-potentials-and-circle-data: mathematical-premise
  lem-emg-circle-connection-gluing: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
physical_scope: >
  An exact smooth-data example in the zero-matter-action Einstein-Maxwell
  model on a flat three-torus. It supplies compatible expanding initial data
  with nonzero parallel electric and magnetic fields and invokes only the
  conditional local-development theorem; it asserts no isotropy at later
  times or empirical observation.
empirical_premises: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "M. Alcubierre, J. C. Degollado and M. Salgado, The Einstein-Maxwell system in 3+1 form and initial data for multiple charged black holes, arXiv:0907.1151v2 (2009), complete 20-page paper"
      url: "https://arxiv.org/pdf/0907.1151"
      locator: "§II.3, equations (2.79)–(2.80), electromagnetic Hamiltonian and momentum constraints; §II.2, equations (2.70)–(2.78), electromagnetic energy and momentum projections. The local calculation uses the exact declared SI and K conventions."
    - title: "P. T. Chruściel, An introduction to the Cauchy problem for the Einstein equations, Roscoff lecture notes (2011), complete 132-page notes"
      url: "https://gravity.univie.ac.at/fileadmin/user_upload/i_gravity_physics/material/teaching/WS_2012/Roscoff.pdf"
      locator: "§1.6, printed pp. 23–25 (PDF pp. 27–29), source-free Einstein-Maxwell Cauchy formulation and electric/magnetic initial fields. No existence conclusion is imported from this section."
verification:
  precheck: pending
---

## Example

Let $L>0$ be the physical side length of
$\mathbb T^3_L=(\mathbb R/L\mathbb Z)^3$, with length coordinates
$(X,Y,Z)$ and flat metric $h=dX^2+dY^2+dZ^2$. Give $\mathbb T^3_L$ the
orientation $dX\wedge dY\wedge dZ$. Fix the normalized circle-flux scale
$\kappa_0>0$ from [[def-emg-geometry-units]], and set
$$B_0:=\frac{2\pi\kappa_0}{L^2},\qquad H:=\sqrt{\frac{\kappa}{3\mu_0}}\,B_0.$$
Take $\Lambda=0$ and define $K=Hh$, $e=B_0\partial_Z$, and
$b=B_0\partial_Z$. The electric and magnetic observer fields are nonzero
and parallel in this initial state.

The magnetic two-form is
$\beta_b=B_0\,dX\wedge dY$. It is compatible with a nontrivial normalized
circle bundle, not just a globally defined potential: on the universal cover
$\mathbb R^3\times U(1)$, with $z\in U(1)$, use the connection one-form
$$\omega=-i z^{-1}dz+\frac{2\pi}{L^2}X\,dY.$$
Let the deck transformations be
$$T_X(X,Y,Z,z)=(X+L,Y,Z,e^{-2\pi iY/L}z),\quad T_Y(X,Y,Z,z)=(X,Y+L,Z,z),\quad T_Z(X,Y,Z,z)=(X,Y,Z+L,z).$$
They commute because $e^{-2\pi i(Y+L)/L}=e^{-2\pi iY/L}$. The one-form
$\omega$ is invariant under these identifications, so it descends to a
connection on the quotient bundle over $\mathbb T^3_L$. Its curvature is
$$d\omega=\frac{2\pi}{L^2}dX\wedge dY,$$
hence the physical curvature $\kappa_0d\omega$ is exactly $\beta_b$.

The diagram shows one fundamental square in the $X,Y$ directions. The
opposite vertical edges are glued with the displayed $U(1)$ transition; the
horizontal edges are glued without a fiber twist. It records the quotient
convention but is not used in the verification.

```tikz
\begin{tikzpicture}[>=stealth]
  \draw[thick] (0,0) rectangle (4,3);
  \draw[->,thick] (-0.35,0.2) -- (-0.35,2.8)
    node[midway,left] {$Y$};
  \draw[->,thick] (0.2,-0.35) -- (3.8,-0.35)
    node[midway,below] {$X$};
  \draw[->,blue,thick] (0,0.35) -- (0,2.65);
  \draw[<-,blue,thick] (4,0.35) -- (4,2.65);
  \node[blue,left] at (-0.1,1.5) {$X=0$};
  \node[blue,right] at (4.1,1.5) {$X=L$};
  \node at (2,3.25) {$Y=0\sim Y=L$};
  \node[align=left,right] at (4.8,2.4)
    {$z\mapsto e^{-2\pi iY/L}z$};
\end{tikzpicture}
```

## Verification

**Given:** $L,\kappa_0,\kappa,\mu_0>0$, $\Lambda=0$, the flat torus and fields
in the Example, and the choice conventions required by
[[pthm-emg-local-electrovacuum-model]].

[F1] [[def-emg-constrained-electrovacuum-data]]: the four data constraints are
$D_ie^i=D_ib^i=0$,
$R(h)+(\operatorname{tr}_hK)^2-|K|_h^2
=2\Lambda+\frac{\kappa}{\mu_0}(|e|_h^2+|b|_h^2)$, and
$D^jK_{ji}-D_i\operatorname{tr}_hK
=-\frac{\kappa}{\mu_0}(e\times_hb)_i$.

[F2] [[lem-emg-circle-connection-gluing]]: compatible normalized circle
connection data glue to a fixed bundle sector whose physical curvature is
$\kappa_0$ times the normalized curvature.

[F3] [[pthm-emg-local-electrovacuum-model]]: smooth constrained data whose
magnetic two-form is the curvature in a supplied fixed normalized circle
sector have a conditional local electrovacuum development; the theorem assumes
$\mathrm{AC}_\omega+\mathrm{DC}$ and makes no empirical claim. Its current
draft has Step-1 authoring readiness and `verification.precheck: pending`; this
example uses the theorem conditionally.

[A1] By [[def-emg-geometry-units]], $\kappa_0$ has units Wb, the magnetic
field has units T, and $K$ has units m$^{-1}$ in length coordinates. The
chosen value $B_0=2\pi\kappa_0/L^2$ has units T.

1.1 The three deck transformations in the Example act by lattice translations
on the base and their $U(1)$ multipliers commute: $T_XT_Y=T_YT_X$ because
the phase changes by $2\pi$ over one $Y$ period; $T_Z$ commutes with both
because it does not enter the phase. Thus they define a free proper deck
action. Under $T_X$, the fiber term $-iz^{-1}dz$ changes by
$-\frac{2\pi}{L}dY$, while the base term changes by
$+\frac{2\pi}{L}dY$; under $T_Y,T_Z$ both terms are unchanged. Hence
$\omega$ descends. The right $U(1)$ action preserves it and its value on the
vertical generator is $1$, so it is a principal connection. Its curvature
and physical flux are
$\kappa_0d\omega=B_0dX\wedge dY$ and
$\int_{\{Z=0\}}\beta_b=B_0L^2=2\pi\kappa_0$. This verifies the required
normalized bundle sector without a global one-form potential on the torus.
[given, F2, A1, algebra, construct]

1.2 The fields are smooth and constant in the flat coordinates, so
$D_ie^i=D_ib^i=0$. Also $R(h)=0$, $\operatorname{tr}_hK=3H$,
$|K|_h^2=3H^2$, and $e\times_hb=0$. By the definition of $H$,
$6H^2=2\kappa B_0^2/\mu_0
=\frac{\kappa}{\mu_0}(|e|_h^2+|b|_h^2)$.
The scalar constraint in [F1] follows with $\Lambda=0$; the momentum
constraint has both sides zero because $K$ is parallel and $e\times_hb=0$.
Thus all four constraints hold. [given, F1, A1, algebra]

2.1 The bundle calculation in step 1.1 and constraint verification in step 1.2
satisfy every initial-data hypothesis of [F3]. Applying [F3] gives a
smooth local development in the zero-matter-action electrovacuum model with
the displayed nonzero parallel initial fields. This conclusion is conditional
on the stated mathematical and model assumptions and reports no experiment.
[step 1.1, step 1.2, F3, algebra] ∎
