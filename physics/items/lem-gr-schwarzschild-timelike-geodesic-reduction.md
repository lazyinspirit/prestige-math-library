---
id: lem-gr-schwarzschild-timelike-geodesic-reduction
kind: lemma
title: "Conserved quantities and equatorial radial reduction of timelike geodesics of the Schwarzschild exterior model"
status: draft
origin: session
domain: mathematics
dependency_level: 10
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-schwarzschild-exterior-model, lem-gr-schwarzschild-metric-properties, lem-gr-schwarzschild-christoffel-symbols, lem-gr-schwarzschild-static-congruence-and-clock-rates, def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-killing-field, thm-gr-killing-and-on-shell-matter-identities, def-geodesic-of-an-affine-connection, prop-coordinate-geodesic-equation, thm-gr-local-geodesics-and-exponential-map, thm-picard-lindelof-local-existence-and-uniqueness, def-gr-timelike-worldline-and-proper-time, lem-gr-proper-time-reparametrization-and-four-velocity, lem-gr-parallel-transport-and-geodesic-speed, lem-gr-observer-pairing-with-future-causal-vectors, def-gr-observer-and-rest-space, def-causal-classification-of-lorentz-vectors, def-derivative, thm-chain-rule, thm-algebra-of-derivatives, def-rational-power, def-countable-choice]
dependency_roles:
  def-gr-schwarzschild-exterior-model: mathematical-premise
  lem-gr-schwarzschild-metric-properties: mathematical-premise
  lem-gr-schwarzschild-christoffel-symbols: mathematical-premise
  lem-gr-schwarzschild-static-congruence-and-clock-rates: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-killing-field: mathematical-premise
  thm-gr-killing-and-on-shell-matter-identities: mathematical-premise
  def-geodesic-of-an-affine-connection: mathematical-premise
  prop-coordinate-geodesic-equation: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  thm-picard-lindelof-local-existence-and-uniqueness: mathematical-premise
  def-gr-timelike-worldline-and-proper-time: mathematical-premise
  lem-gr-proper-time-reparametrization-and-four-velocity: mathematical-premise
  lem-gr-parallel-transport-and-geodesic-speed: mathematical-premise
  lem-gr-observer-pairing-with-future-causal-vectors: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-derivative: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-rational-power: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 7 (7.38)-(7.48): Killing constants (1-2GM/r)dt/dlambda = E and r^2 dphi/dlambda = L, the equatorial reduction, the radial equation -E^2 + (dr/dlambda)^2 + (1-2GM/r)(L^2/r^2 + epsilon) = 0 and the effective potential V(r), printed pp. 173-175 (PDF pp. 180-182)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 1.3.1: the geodesic equations in the Schwarzschild background and the constants of motion, printed pp. 29-31 (PDF pp. 36-38); section 6.1: the Killing vector partial_t, printed p. 232 (PDF p. 239)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "P. K. Townsend, Black Holes, arXiv:gr-qc/9707012v1 (1997), section 2.2 (2.30): the conserved charge mk_mu dx^nu/dtau g_{mu nu} = -m epsilon for the Killing vector partial_t, printed p. 14"
      url: "https://arxiv.org/pdf/gr-qc/9707012"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be the Schwarzschild exterior datum with $s>0$ and
$f(r)=1-s/r$ ([[def-gr-schwarzschild-exterior-model]]), with
metric-selected connection $\nabla$. Let $\gamma:I\to M$ be a **future
timelike geodesic**, parametrized by proper time $\tau$, with tangent
$U=\gamma'$, so that $g(U,U)=-c^2$ and $U$ is future-directed
([[def-geodesic-of-an-affine-connection]],
[[lem-gr-parallel-transport-and-geodesic-speed]] clause 3,
[[def-gr-timelike-worldline-and-proper-time]]). Fix a spherical-polar product chart
$(x^0,r,\vartheta,\varphi)$ containing the image of $\gamma$ and write a dot
for $\frac{d}{d\tau}$. Define

$$e:=-g(U,\partial_0)=f\dot x^0,\qquad \ell:=g(U,\partial_\varphi)=r^2\sin^2\vartheta\,\dot\varphi .$$

Then:

**(a) Conserved quantities.** $\partial_0$ and $\partial_\varphi$ are Killing
fields of $g$, and $e$ and $\ell$ are constant along $\gamma$; moreover
$e>0$.

**(b) Equatorial reduction.** Suppose $\vartheta(\tau_0)=\frac{\pi}{2}$ and
$\dot\vartheta(\tau_0)=0$ at some $\tau_0\in I$. Then
$\vartheta(\tau)=\frac{\pi}{2}$ for all $\tau\in I$; the geodesic is
**equatorial**.

**(c) Radial reduction.** If $\gamma$ is equatorial, define the **effective
potential**

$$W_\ell(r):=f(r)\Bigl(c^2+\frac{\ell^2}{r^2}\Bigr).$$

Then the normalization identity

$$\dot r^2=e^2-W_\ell(r)$$

holds at every $\tau\in I$, and, given this identity, the $r$-component of the
geodesic equation is equivalent to the one-dimensional equation

$$\ddot r=-\frac12 W_\ell'(r),\qquad W_\ell'(r)=f'(r)\Bigl(c^2+\frac{\ell^2}{r^2}\Bigr)-2f(r)\frac{\ell^2}{r^3}.$$

**(d) Scope.** The reduction is local: it is stated on the interval $I$ on
which the geodesic stays in one product chart with $r>s$ and
$0<\vartheta<\pi$; no completeness, no extension of $\gamma$ beyond $I$, and
no statement about null geodesics is made. The quantities $e$ and $\ell$ are
constants of the given geodesic, not functions of the model.

## Facts & Assumptions

**Given:** The Schwarzschild exterior datum, a spherical-polar product chart $(x^0,r,\vartheta,\varphi)$ containing the image of the future timelike geodesic $\gamma:I\to M$ with proper-time tangent $U$, and the constants $e,\ell$ of the statement.

[L1] In the spherical-polar product chart the metric components are $g_{00}=-f$, $g_{11}=f^{-1}$, $g_{22}=r^2$, $g_{33}=r^2\sin^2\vartheta$, off-diagonal components zero, with $f=1-s/r$, $f'=s/r^2$; the nonzero Christoffel symbols are $\Gamma^0{}_{01}=\Gamma^0{}_{10}=f'/(2f)$, $\Gamma^1{}_{00}=ff'/2$, $\Gamma^1{}_{11}=-f'/(2f)$, $\Gamma^1{}_{22}=-rf$, $\Gamma^1{}_{33}=-rf\sin^2\vartheta$, $\Gamma^2{}_{12}=\Gamma^2{}_{21}=1/r$, $\Gamma^2{}_{33}=-\sin\vartheta\cos\vartheta$, $\Gamma^3{}_{13}=\Gamma^3{}_{31}=1/r$ and $\Gamma^3{}_{23}=\Gamma^3{}_{32}=\cot\vartheta$ ([[lem-gr-schwarzschild-metric-properties]], [[lem-gr-schwarzschild-christoffel-symbols]], [[def-gr-metric-selected-connection]], [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]).

[L2] A smooth vector field $\xi$ is Killing precisely when $\nabla_a\xi_b+\nabla_b\xi_a=0$, and then $g(\xi,\gamma')$ is constant along every geodesic $\gamma$ ([[def-gr-killing-field]], [[thm-gr-killing-and-on-shell-matter-identities]] clauses (a)-(b)).

[L3] For a geodesic $\gamma$, the components satisfy $\ddot\gamma^a+\sum_{b,c}\Gamma^a{}_{bc}\dot\gamma^b\dot\gamma^c=0$ in every chart ([[prop-coordinate-geodesic-equation]], [[def-geodesic-of-an-affine-connection]]); a geodesic with given initial event and tangent is unique on its maximal interval, so two geodesics agreeing on an open set of parameters agree wherever both are defined ([[thm-gr-local-geodesics-and-exponential-map]]).

[L4] Proper time is an affine parameter of a future timelike geodesic, and $U=\gamma'$ satisfies $g(U,U)=-c^2$ ([[lem-gr-parallel-transport-and-geodesic-speed]] clause 3, [[def-gr-timelike-worldline-and-proper-time]], [[lem-gr-proper-time-reparametrization-and-four-velocity]]).

[L5] The static congruence of the datum is the future-directed unit timelike field $n=f^{-1/2}\partial_0$; for a future timelike vector $U$, $-g(n,U)>0$ ([[lem-gr-schwarzschild-static-congruence-and-clock-rates]], [[lem-gr-observer-pairing-with-future-causal-vectors]], [[def-gr-observer-and-rest-space]], [[def-causal-classification-of-lorentz-vectors]]).

[L6] The derivative identities used below are the chain rule and product rule for $\mathbb R$-valued functions of $\tau$, and $f'=s/r^2>0$ on $r>s$ ([[def-derivative]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]], [[def-rational-power]]).

[L7] A first-order system with continuous right-hand side locally Lipschitz in the state variable has a local solution for each initial datum; smooth right-hand sides have this property ([[thm-picard-lindelof-local-existence-and-uniqueness]]).

## Proof

**Proof technique:** verify the two Killing fields, reduce the $\vartheta$-equation by uniqueness, and combine the normalization with the $r$-equation.

1.1 (The fields $\partial_0$ and $\partial_\varphi$ are Killing.) For $\xi=\partial_0$ the lowered field is $\xi_b=g_{0b}=-f\delta^0_b$, and the Killing equation reads $\partial_ag_{0b}+\partial_bg_{0a}-2\Gamma^c{}_{ab}g_{0c}=0$; substituting [L1], the only potentially nonzero components are $(a,b)=(0,1)$: $\partial_1g_{00}+2f\Gamma^0{}_{01}=-f'+f'=0$, and $(a,b)=(0,0)$: $2\partial_0g_{00}=0$; all other components involve derivatives of vanishing components or vanishing symbols, so they vanish. For $\xi=\partial_\varphi$ the lowered field is $\xi_b=r^2\sin^2\vartheta\,\delta^3_b$, and the equation is $\partial_ag_{3b}+\partial_bg_{3a}-2r^2\sin^2\vartheta\,\Gamma^3{}_{ab}=0$; its potentially nonzero components are $(a,b)=(1,3)$: $2r\sin^2\vartheta-2r^2\sin^2\vartheta\cdot(1/r)=0$, $(a,b)=(2,3)$: $2r^2\sin\vartheta\cos\vartheta-2r^2\sin^2\vartheta\cdot\cot\vartheta=0$, and $(a,b)=(3,3)$: $2\partial_3g_{33}=0$; all other components vanish. Hence both fields are Killing by [L2], and $e=-g(U,\partial_0)$ and $\ell=g(U,\partial_\varphi)$ are constant along $\gamma$. For positivity: $n=f^{-1/2}\partial_0$ is a future unit timelike field by [L5], and $-g(n,U)>0$; since $-g(n,U)=f^{-1/2}e$, we get $e>0$. This proves (a). [L1, L2, L5, algebra]

1.2 (Equatorial reduction.) The coordinate geodesic system [L3] and [L1] has the equations
$$\ddot x^0+\frac{f'}{f}\dot x^0\dot r=0,\quad \ddot r+\frac{ff'}2(\dot x^0)^2-\frac{f'}{2f}\dot r^2-rf\dot\vartheta^2-rf\sin^2\vartheta\dot\varphi^2=0,$$
$$\ddot\vartheta+\frac2r\dot r\dot\vartheta-\sin\vartheta\cos\vartheta\dot\varphi^2=0,\quad \ddot\varphi+\frac2r\dot r\dot\varphi+2\cot\vartheta\dot\vartheta\dot\varphi=0.$$
Set $\vartheta=\pi/2$ and $\dot\vartheta=0$ in the $x^0,r,\varphi$ equations.
The resulting smooth three-equation subsystem, written as a first-order
system for positions and velocities, has an open state domain containing the
initial data because $r(\tau_0)>s$ and the chosen product chart is open. Its
right-hand side is smooth and hence locally Lipschitz, so [L7] gives a local
solution with the same positions and velocities as $\gamma$ at $\tau_0$.
Adjoining the constant
coordinate $\vartheta=\pi/2$ gives a solution of the full four equations,
because the $\vartheta$ equation vanishes and the other equations reduce to
that subsystem. This constructed geodesic has the same event and tangent as
$\gamma$ at $\tau_0$, so uniqueness in [L3] makes them agree on a
neighborhood of $\tau_0$. Let
$$E:=\{\tau\in I:\vartheta(\tau)=\pi/2\text{ and }\dot\vartheta(\tau)=0\}.$$
It is nonempty, closed by continuity, and open by the same local construction
at each of its points. Since $I$ is an interval, $E=I$. Thus
$\vartheta\equiv\pi/2$ on $I$, proving (b); in particular
$\sin^2\vartheta=1$ there. [L1, L3, L7, algebra]

1.3 (Normalization identity.) By [L4], $-c^2=g(U,U)=-f(\dot x^0)^2+f^{-1}\dot r^2+r^2\dot\varphi^2$ on the equatorial geodesic. Substituting $\dot x^0=e/f$ and $\dot\varphi=\ell/r^2$ from the definitions of $e,\ell$ and multiplying by $f$ gives $-c^2f=-e^2+\dot r^2+f\ell^2/r^2$, that is, $\dot r^2=e^2-f(c^2+\ell^2/r^2)=e^2-W_\ell(r)$. This is the normalization identity of (c). [L4, given, algebra]

2.1 (Radial equation.) The $r$-component of the geodesic equation [L3] is, by [L1], $\ddot r+\tfrac{ff'}{2}(\dot x^0)^2-\tfrac{f'}{2f}\dot r^2-rf\dot\varphi^2=0$. Substituting $\dot x^0=e/f$ and $\dot\varphi=\ell/r^2$ turns this into $\ddot r+\tfrac{f'e^2}{2f}-\tfrac{f'}{2f}\dot r^2-\tfrac{f\ell^2}{r^3}=0$. The claimed equation reads, after substituting $W_\ell'$, $\ddot r+\tfrac{f'}{2}\bigl(c^2+\tfrac{\ell^2}{r^2}\bigr)-\tfrac{f\ell^2}{r^3}=0$. The difference between the two left-hand sides is $\tfrac{f'}{2f}\bigl(e^2-\dot r^2-f(c^2+\ell^2/r^2)\bigr)=\tfrac{f'}{2f}(e^2-\dot r^2-W_\ell(r))$, which vanishes precisely by the normalization identity of step 1.3; the substitution of $W_\ell'$ and the rearrangement use the derivative rules of [L6]. Hence, given that identity, the $r$-equation and $\ddot r=-\tfrac12W_\ell'$ are equivalent. This proves (c). [L1, L3, L6, step 1.3, algebra]

3.1 (Conclusion.) Steps 1.1, 1.2, 1.3 and 2.1 prove clauses (a)-(c) for the given geodesic on its chart interval; clause (d) records that the reduction is local and asserts nothing about completeness, extension or null geodesics. [step 1.1, step 1.2, step 1.3, step 2.1, given] ∎

## Remarks

- **Sign conventions of the constants.** In the coordinate $t=x^0/c$ the
  constant $e$ is the energy per unit mass up to the factor $c$, and $\ell$
  is the angular momentum per unit mass up to the factor $c$; the displayed
  identities are those used below and are not compared numerically with any
  source convention.

- **No field equation was used.** The reduction uses only the metric form,
  the time and axial Killing fields and the geodesic equation; it holds for
  every value of $s>0$ and does not use the vacuum property
  $\operatorname{Ric}=0$ of the model.
