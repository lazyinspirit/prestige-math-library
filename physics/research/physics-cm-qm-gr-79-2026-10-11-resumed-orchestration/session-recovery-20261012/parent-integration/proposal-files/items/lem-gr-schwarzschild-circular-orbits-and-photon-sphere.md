---
id: lem-gr-schwarzschild-circular-orbits-and-photon-sphere
kind: lemma
title: "Circular timelike geodesics, their radial-potential stability threshold, and the photon sphere at r = 3s/2"
status: draft
origin: session
domain: mathematics
dependency_level: 11
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-schwarzschild-exterior-model, lem-gr-schwarzschild-metric-properties, lem-gr-schwarzschild-christoffel-symbols, lem-gr-schwarzschild-timelike-geodesic-reduction, def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-geodesic-of-an-affine-connection, prop-coordinate-geodesic-equation, def-gr-timelike-worldline-and-proper-time, lem-gr-parallel-transport-and-geodesic-speed, def-causal-classification-of-lorentz-vectors, def-derivative, thm-chain-rule, thm-algebra-of-derivatives, def-rational-power, thm-real-power-continuity-and-derivatives, def-countable-choice]
dependency_roles:
  def-gr-schwarzschild-exterior-model: mathematical-premise
  lem-gr-schwarzschild-metric-properties: mathematical-premise
  lem-gr-schwarzschild-christoffel-symbols: mathematical-premise
  lem-gr-schwarzschild-timelike-geodesic-reduction: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-geodesic-of-an-affine-connection: mathematical-premise
  prop-coordinate-geodesic-equation: mathematical-premise
  def-gr-timelike-worldline-and-proper-time: mathematical-premise
  lem-gr-parallel-transport-and-geodesic-speed: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-derivative: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-rational-power: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 7 (7.47)-(7.48) and the following pages: the effective potential V(r) = (1/2)epsilon - epsilon GM/r + L^2/2r^2 - GML^2/r^3, the circular orbits and the innermost stable circular orbit at r = 6GM, printed pp. 174-177 (PDF pp. 181-184)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), sections 1.3.3-1.3.5: circular orbits, the stability analysis at r = 3GM and the photon sphere at r = 3GM, printed pp. 34-47 (PDF pp. 41-54)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "P. K. Townsend, Black Holes, arXiv:gr-qc/9707012v1 (1997), section 2.3: the unstable photon orbit at r = 3M, printed p. 19"
      url: "https://arxiv.org/pdf/gr-qc/9707012"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be the Schwarzschild exterior datum with $s>0$ and
$f(r)=1-s/r$ ([[def-gr-schwarzschild-exterior-model]]), with
$f'=s/r^2$. Then:

**(a) Existence of circular timelike geodesics.** Let $r_0>3s/2$ and put

$$\ell^2:=\frac{c^2sr_0^2}{2r_0-3s}>0,\qquad e:=\Bigl(f(r_0)\Bigl(c^2+\frac{\ell^2}{r_0^2}\Bigr)\Bigr)^{1/2} =\frac{c(r_0-s)\sqrt 2}{\sqrt{r_0(2r_0-3s)}}>0 .$$

Then the curve $\gamma:\mathbb R\to M$ with chart components

$$x^0(\tau)=x^0_0+\frac{e}{f(r_0)}\tau,\qquad r(\tau)\equiv r_0,\qquad \vartheta(\tau)\equiv\frac{\pi}{2},\qquad \varphi(\tau)=\varphi_0+\frac{\ell}{r_0^2}\tau$$

is a future timelike geodesic of the datum, with $g(\gamma',\gamma')=-c^2$
and with the conserved quantities $e=-g(\gamma',\partial_0)$ and
$\ell=g(\gamma',\partial_\varphi)$ of
[[lem-gr-schwarzschild-timelike-geodesic-reduction]]; it is a **circular
orbit** at radius $r_0$. Its angular velocity in the coordinate $x^0$ is

$$\frac{d\varphi}{dx^0}=\frac{\ell f(r_0)}{r_0^2e} =\Bigl(\frac{s}{2r_0^3}\Bigr)^{1/2},\qquad\text{so}\qquad \Bigl(\frac{d\varphi}{dt}\Bigr)^2=\frac{G_Nm_*}{r_0^3},$$

$t=x^0/c$.

**(b) The circular-orbit condition is necessary.** Conversely, if
$\gamma:I\to M$ is an equatorial future timelike geodesic with
$r(\tau)\equiv r_0>s$ constant on an interval of positive length, then
$r_0>\frac{3s}{2}$ and its conserved angular momentum satisfies
$\ell^2=\dfrac{c^2sr_0^2}{2r_0-3s}$; in particular there is no timelike
circular geodesic with $s<r_0\le\frac{3s}{2}$.

**(c) Stability threshold of the radial potential.** Let
$W_\ell(r)=f(r)(c^2+\ell^2/r^2)$ and $V_\ell=\tfrac12W_\ell$ be the potentials
of the reduction, evaluated at the circular-orbit value
$\ell^2=c^2sr^2/(2r-3s)$. Then

$$V_\ell''(r)=\frac{c^2s(r-3s)}{r^3(2r-3s)},\qquad r>\frac{3s}{2},$$

so $V_\ell$ has a strict local minimum at the circular-orbit radius exactly
for $r>3s$, a strict local maximum exactly for $\frac{3s}{2}<r<3s$, and
$V_\ell''(3s)=0$; the radius $r=3s$ is the **innermost stable circular orbit
radius** of the restricted model in this potential sense.

**(d) The photon sphere at $r=3s/2$.** Let $\ell\neq0$ and put
$r_0=\frac{3s}{2}$ and $e_0:=\dfrac{\lvert\ell\rvert\sqrt{f(r_0)}}{r_0}=\dfrac{2\lvert\ell\rvert}{3\sqrt3\,s}>0$.
Then the curve with chart components
$x^0(\tau)=x^0_0+\frac{e_0}{f(r_0)}\tau$, $r\equiv r_0$,
$\vartheta\equiv\frac\pi2$, $\varphi(\tau)=\varphi_0+\frac{\ell}{r_0^2}\tau$
is a future null geodesic (a **null circular orbit** or **photon sphere**
orbit) with conserved quantities $e_0$ and $\ell$, and its angular velocity is

$$\frac{d\varphi}{dx^0}=\frac{\ell f(r_0)}{r_0^2e_0}=\operatorname{sgn}(\ell)\,\frac{\sqrt{f(r_0)}}{r_0},\qquad \Bigl(\frac{d\varphi}{dx^0}\Bigr)^2=\frac{f(r_0)}{r_0^2}=\frac{4}{27s^2}.$$

The **null effective potential** $W^{\mathrm n}_\ell(r):=f(r)\ell^2/r^2$
satisfies $(W^{\mathrm n}_\ell)'(3s/2)=0$ and
$(W^{\mathrm n}_\ell)''(3s/2)=-\dfrac{64\ell^2}{81s^4}<0$, so the photon-sphere
radius is a strict local maximum of the null potential.

**(e) Scope.** All statements are exact data of the restricted model: the
orbits are ideal geodesics of the metric on the exterior domain, the
stability claim is the sign of the second derivative of the stated potential,
and no claim is made about nonlinear stability, about orbital decay, about
observations or about the interior region. The case $r_0=s$ is excluded, and
the reduction is stated only where $r>s$.

## Facts & Assumptions

**Given:** The Schwarzschild exterior datum with $s>0$, a product chart, the function $f=1-s/r$ with $f'=s/r^2$, and the reduction lemma of this page.

[L1] The metric components, Christoffel symbols and geodesic component equations are those computed on this page; in particular the $\vartheta$-equation is $\ddot\vartheta+2r^{-1}\dot r\dot\vartheta-\sin\vartheta\cos\vartheta\,\dot\varphi^2=0$, the $\varphi$-equation is $\ddot\varphi+2r^{-1}\dot r\dot\varphi+2\cot\vartheta\,\dot\vartheta\dot\varphi=0$, the $x^0$-equation is $\ddot x^0+2\Gamma^0{}_{01}\dot x^0\dot r=0$, and the $r$-equation is $\ddot r+\tfrac{ff'}{2}(\dot x^0)^2-\tfrac{f'}{2f}\dot r^2-rf(\dot\vartheta^2+\sin^2\vartheta\,\dot\varphi^2)=0$ ([[lem-gr-schwarzschild-christoffel-symbols]], [[lem-gr-schwarzschild-metric-properties]], [[prop-coordinate-geodesic-equation]], [[def-geodesic-of-an-affine-connection]]).

[L2] For a future timelike geodesic parametrized by proper time, $g(U,U)=-c^2$ and the constants $e=-g(U,\partial_0)=f\dot x^0>0$, $\ell=g(U,\partial_\varphi)=r^2\sin^2\vartheta\,\dot\varphi$ are conserved; along an equatorial geodesic $\dot r^2=e^2-W_\ell(r)$ and the $r$-equation is equivalent to $\ddot r=-\tfrac12W_\ell'(r)$ ([[lem-gr-schwarzschild-timelike-geodesic-reduction]]).

[L3] A curve is a geodesic with affine parameter $\tau$ precisely when its components satisfy the four geodesic equations; a nonzero tangent that is future timelike (respectively null) makes the curve a future timelike (respectively null) geodesic ([[def-geodesic-of-an-affine-connection]], [[prop-coordinate-geodesic-equation]], [[def-causal-classification-of-lorentz-vectors]]).

[L4] The derivative rules for smooth functions of $r$ and the positivity of $f$, $r$ and $\sqrt{\cdot}$ on the stated domains are as on the preceding items of this page ([[def-derivative]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]], [[def-rational-power]], [[thm-real-power-continuity-and-derivatives]]).

## Proof

**Proof technique:** solve the stationarity equation of the effective potential, verify the constructed circular curves against the four geodesic equations directly, and differentiate the potential twice.

1.1 (The stationarity equation.) By [L2] and [L4], $W_\ell'(r)=f'(r)(c^2+\ell^2/r^2)-2f(r)\ell^2/r^3=\frac{s}{r^2}\bigl(c^2+\frac{\ell^2}{r^2}\bigr)-2\bigl(1-\frac{s}{r}\bigr)\frac{\ell^2}{r^3}$. Multiplying by $r^3/s$ gives $r c^2+\frac{\ell^2}{r}-2\frac{\ell^2}{s}\bigl(1-\frac{s}{r}\bigr)=rc^2+\frac{3\ell^2}{r}-\frac{2\ell^2}{s}$, so $W_\ell'(r)=0$ if and only if $\ell^2\bigl(\frac{2}{s}-\frac{3}{r}\bigr)=rc^2$, that is, $\ell^2=\frac{c^2sr^2}{2r-3s}$; this has a positive solution for $\ell^2$ precisely when $r>3s/2$, and the value is unique. This is the condition displayed in clauses (a) and (b). [L2, L4, algebra]

2.1 (The timelike circular geodesic.) Let $r_0>3s/2$, choose $\ell$ as in (a) and $e=\sqrt{W_\ell(r_0)}>0$, and define the curve $\gamma$ of clause (a). Its tangent has components $U^a=(e/f(r_0),0,0,\ell/r_0^2)$; then $g(U,U)=-f(r_0)\bigl(e/f(r_0)\bigr)^2+r_0^2\bigl(\ell/r_0^2\bigr)^2=-\frac{e^2}{f(r_0)}+\frac{\ell^2}{r_0^2}=-\bigl(c^2+\frac{\ell^2}{r_0^2}\bigr)+\frac{\ell^2}{r_0^2}=-c^2$ by the choice of $e$, so $U$ is timelike with $g(U,U)=-c^2$; and $g(U,\partial_0)=-e<0$, so $U$ is future-directed. For the geodesic equations: the $x^0$-equation reduces to $\ddot x^0=0$ because $\dot r=0$; the $\vartheta$-equation reads $0+0-\sin(\pi/2)\cos(\pi/2)(\ell/r_0^2)^2=0$; the $\varphi$-equation reduces to $\ddot\varphi=0$ because $\dot r=\dot\vartheta=0$; and the $r$-equation reads $\frac{ff'}{2}\bigl(\frac{e}{f}\bigr)^2-rf\bigl(\frac{\ell}{r_0^2}\bigr)^2=\frac{f'e^2}{2f}-\frac{f\ell^2}{r_0^3}=\frac{f'}{2}\bigl(c^2+\frac{\ell^2}{r_0^2}\bigr)-\frac{f\ell^2}{r_0^3}=\frac12W_\ell'(r_0)=0$, using the choice of $e$ in the third equality and step 1.1 in the last. All four equations therefore hold identically on $\mathbb R$, so $\gamma$ is a geodesic by [L3], future timelike, with the stated conserved quantities. Its angular velocity is $\frac{d\varphi}{dx^0}=\frac{\dot\varphi}{\dot x^0}=\frac{\ell/r_0^2}{e/f(r_0)}=\frac{\ell f(r_0)}{r_0^2e}$; squaring and substituting $\ell^2$ and $e^2=f(r_0)(c^2+\ell^2/r_0^2)$ gives $\bigl(\frac{\ell f}{r_0^2e}\bigr)^2=\frac{\ell^2f^2}{r_0^4f(c^2+\ell^2/r_0^2)}=\frac{\ell^2 f}{r_0^4c^2+r_0^2\ell^2}=\frac{s}{2r_0^3}$, using $\ell^2=c^2sr_0^2/(2r_0-3s)$; with $t=x^0/c$ this is $\bigl(\frac{d\varphi}{dt}\bigr)^2=c^2\frac{s}{2r_0^3}=\frac{G_Nm_*}{r_0^3}$. This proves (a). [L1, L2, L3, L4, step 1.1, algebra]

2.2 (Necessity.) If an equatorial future timelike geodesic has $r\equiv r_0$ on an interval of positive length, then $\dot r=\ddot r=0$ there, so by [L2] $0=\ddot r=-\tfrac12W_\ell'(r_0)$ and step 1.1 gives $\ell^2=c^2sr_0^2/(2r_0-3s)$ and $r_0>3s/2$; the same conclusion holds on the whole parameter interval by the conservation of $\ell$ and continuity. This proves (b). [L2, step 1.1, algebra]

2.3 (The second derivative.) Differentiating $W_\ell'$ once more gives $W_\ell''(r)=f''\bigl(c^2+\ell^2/r^2\bigr)-4f'\ell^2/r^3+6f\ell^2/r^4$; substituting $f'=s/r^2$, $f''=-2s/r^3$ and $\ell^2=c^2sr^2/(2r-3s)$ and simplifying the rational expression gives $W_\ell''(r)=\frac{2c^2s(r-3s)}{r^3(2r-3s)}$, hence $V_\ell''=\tfrac12W_\ell''=\frac{c^2s(r-3s)}{r^3(2r-3s)}$, whose sign on $r>3s/2$ is the sign of $r-3s$. This proves (c). [L4, step 1.1, algebra]

3.1 (The photon sphere.) Let $\ell\ne0$, $r_0=3s/2$ and $e_0=\lvert\ell\rvert\sqrt{f(r_0)}/r_0>0$; define the curve of clause (d), with tangent $U^a=(e_0/f(r_0),0,0,\ell/r_0^2)$. Then $g(U,U)=-\frac{e_0^2}{f(r_0)}+\frac{\ell^2}{r_0^2}=-\frac{\ell^2}{r_0^2}+\frac{\ell^2}{r_0^2}=0$, so $U$ is null; and $g(U,\partial_0)=-e_0<0$, so $U$ is future-directed. The $x^0$-, $\vartheta$- and $\varphi$-equations hold as in step 2.1; the $r$-equation reads $\frac{f'e_0^2}{2f}-r_0f\frac{\ell^2}{r_0^4}=\frac{\ell^2}{r_0^2}\bigl(\frac{f'}{2}-\frac{f}{r_0}\bigr)=\frac{\ell^2}{r_0^4}\bigl(\frac{3s}{2}-r_0\bigr)=0$ at $r_0=3s/2$. Hence the curve is a future null geodesic, and its angular velocity is $\frac{\ell f(r_0)}{r_0^2e_0}=\operatorname{sgn}(\ell)\frac{\sqrt{f(r_0)}}{r_0}$, equal to $+\frac{2}{3\sqrt3\,s}$ for $\ell>0$ and to its negative for $\ell<0$, with square $4/(27s^2)$. Finally $W^{\mathrm n}_\ell(r)=f\ell^2/r^2$ has $(W^{\mathrm n}_\ell)'(r)=\ell^2\frac{-2r+3s}{r^4}$ (that is, $\ell^2(3s-2r)/r^4$), which vanishes at $r=3s/2$, and $(W^{\mathrm n}_\ell)''(r)=\ell^2\frac{12(r-2s)}{r^5}$, which at $r=3s/2$ equals $-\frac{64\ell^2}{81s^4}<0$. This proves (d). [L1, L3, L4, algebra]

4.1 (Conclusion.) Steps 1.1-3.1 prove clauses (a)-(d) from the metric data and the geodesic equations; clause (e) records the exact scope: the statements are about ideal geodesics of the model on $r>s$, with stability understood as the sign of the potential's second derivative, and no empirical or nonlinear claim is made. [step 1.1, step 2.1, step 2.2, step 2.3, step 3.1, given] ∎

## Remarks

- **The innermost stable circular orbit.** Clause (c) shows that the
  potential's second derivative changes sign at $r=3s$, so in this reduced
  one-dimensional description the circular orbits with
  $\frac{3s}{2}<r<3s$ are maxima of the potential and those with $r>3s$ are
  minima. This is a statement about the reduced potential only; the physical
  interpretation of the threshold as the innermost stable circular orbit of
  the model, and any account of how it would be observed, belong to the
  physics theorem and its scope remark, not to this lemma.

- **Null geodesics are not particle orbits.** The photon-sphere curve of
  clause (d) has null tangent and no proper-time parametrization; its
  parameter $\tau$ is an affine parameter, and only the ratio
  $d\varphi/dx^0$ of the tangent components is asserted, the tangent of a
  null geodesic being determined only up to positive scale.
