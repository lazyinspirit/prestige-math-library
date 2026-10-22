---
id: thm-gr-fx-kerr-hamilton-jacobi-separation
kind: theorem
title: "Local Kerr Hamilton-Jacobi separation"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 2
physical_scope: "Local solution of the geodesic Hamilton-Jacobi equation on the axis-avoiding Kerr exterior chart; no global integrability through turning points is asserted."
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
deps:
  - def-gr-fx-kerr-exterior
  - lem-gr-fx-kerr-exterior-properties
  - def-gr-inverse-metric-and-musical-isomorphisms
  - cor-primitives-of-a-continuous-function
  - thm-real-power-continuity-and-derivatives
  - thm-ck-euclidean-maps-closed-under-algebra-and-composition
  - def-countable-choice
dependency_roles:
  def-gr-fx-kerr-exterior: mathematical-premise
  lem-gr-fx-kerr-exterior-properties: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  cor-primitives-of-a-continuous-function: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  thm-ck-euclidean-maps-closed-under-algebra-and-composition: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "H. S. Reall, Black Holes (Part III lecture notes, 15 March 2024), §7.5, especially equations (7.18) and (7.33)-(7.36), PDF pp. 99-103"
      url: "https://www.damtp.cam.ac.uk/user/hsr1000/black_holes_lectures_2024.pdf"
verification:
  precheck: pending
---

## Statement

On an axis-avoiding Kerr exterior local coordinate rectangle
$I_t\times I_r\times I_\theta\times I_\phi$, where each $I_t,I_r,I_\theta,I_\phi$
is a nonempty open real interval, $I_r\subset(r_+,\infty)$,
$I_\theta\subset(0,\pi)$, and $I_\phi$ has length less than $2\pi$ and is a
local real lift of the azimuthal coordinate, define the geodesic
Hamilton-Jacobi equation for a $C^1$ scalar $S$ by

$$g^{ab}\partial_aS\,\partial_bS=-\mu^2.$$

For constants $E,L,\mu,Q\in\mathbb R$, set

$$\mathcal R(r):=[E(r^2+a^2)-aL]^2-\Delta[\mu^2r^2+(L-aE)^2+Q],\qquad \Theta(\theta):=Q-\cos^2\theta\left[a^2(\mu^2-E^2)+\frac{L^2}{\sin^2\theta}\right].$$

If $\mathcal R\ge0$ on $I_r$ and $\Theta\ge0$ on $I_\theta$, then local
separated $C^1$ solutions are given by

$$S=-Et+L\phi+S_r(r)+S_\theta(\theta),\qquad S_r'=\pm\frac{\sqrt{\mathcal R}}{\Delta},\qquad S_\theta'=\pm\sqrt{\Theta}.$$

Where both radicands are strictly positive the branches are smooth. No
smoothness at a turning point or global continuation of a branch is asserted.

## Facts & Assumptions

**Given:** The Kerr exterior metric, its inverse metric, and constants with the values specified in the Statement.

[F1] [[def-gr-fx-kerr-exterior]]: on the polar chart, $g_{tt}=-(1-2Mr/\Sigma)$, $g_{t\phi}=-2Mar\sin^2\theta/\Sigma$, $g_{\phi\phi}=\sin^2\theta[(r^2+a^2)^2-a^2\Delta\sin^2\theta]/\Sigma$, $g_{rr}=\Sigma/\Delta$, and $g_{\theta\theta}=\Sigma$.

[F2] [[lem-gr-fx-kerr-exterior-properties]]: the tensor $g$ is smooth and nondegenerate with signature $(-,+,+,+)$ throughout the exterior, and the smooth timelike field $N=-\sharp_g(dt)$ defines a time orientation.

[F3] [[def-gr-inverse-metric-and-musical-isomorphisms]]: $(g^{ab})$ is the inverse matrix of $(g_{ab})$.

[F4] [[cor-primitives-of-a-continuous-function]]: a continuous real function on an interval has a differentiable primitive with that function as derivative.

[F5] [[thm-real-power-continuity-and-derivatives]]: for every real $\alpha$, $x\mapsto x^\alpha$ is continuous and differentiable on $(0,\infty)$ with derivative $\alpha x^{\alpha-1}$.

[F6] [[thm-ck-euclidean-maps-closed-under-algebra-and-composition]]: finite sums, products, and compositions of smooth coefficient functions are smooth.

[A1] The smooth Lorentzian and tangent-bundle conventions use only countable choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

## Proof

1.1 Put $A=r^2+a^2$ and $q=\sin^2\theta$. The determinant of the $t,\phi$ block from [F1] is $-\Delta q$. Here $r>r_+>0$ and $r_-<r_+$, so [F1] gives $\Delta=(r-r_+)(r-r_-)>0$ and $\Sigma\ge r^2>0$. On the stated smooth chart $q>0$, so this block is invertible. By [F2] the full metric and time orientation meet the hypotheses of [F3]; the smooth Lorentzian chart convention uses [A1]. [given, A1, F1, F2, algebra]

2.1 Inverting the block from step 1.1 and using the diagonal $r,\theta$ entries gives $\Sigma g^{tt}=-A^2/\Delta+a^2q$, $\Sigma g^{t\phi}=-a(A/\Delta-1)$, $\Sigma g^{\phi\phi}=1/q-a^2/\Delta$, $g^{rr}=\Delta/\Sigma$, and $g^{\theta\theta}=1/\Sigma$. Direct multiplication with the covariant block verifies these entries as required by [F3]. [F1, F2, F3, step 1.1, algebra]

3.1 For the separated ansatz, $\partial_tS=-E$, $\partial_\phi S=L$, $\partial_rS=S_r'$, and $\partial_\theta S=S_\theta'$. Substituting these derivatives and the inverse entries of step 2.1 into the equation in the Statement, then multiplying by $\Sigma$, yields $\Delta(S_r')^2-\frac{[E(r^2+a^2)-aL]^2}{\Delta}+\mu^2r^2+(S_\theta')^2+(L/\sin\theta-aE\sin\theta)^2+\mu^2a^2\cos^2\theta=0$. [given, step 2.1, algebra]

4.1 Put $C(\theta):=\cos^2\theta\left[a^2(\mu^2-E^2)+L^2/\sin^2\theta\right]$. Expanding the square and using $\sin^2\theta+\cos^2\theta=1$ gives $(S_\theta')^2+(L/\sin\theta-aE\sin\theta)^2+\mu^2a^2\cos^2\theta=(S_\theta')^2+C(\theta)+(L-aE)^2$. Thus the equation of step 3.1 is the sum of a radial expression and $(S_\theta')^2+C(\theta)$. Set the angular expression equal to the separation constant $Q$; this gives $(S_\theta')^2=Q-C(\theta)=\Theta(\theta)$. The remaining radial equation is $\Delta(S_r')^2-[E(r^2+a^2)-aL]^2/\Delta+\mu^2r^2+(L-aE)^2+Q=0$, equivalently $\Delta^2(S_r')^2=\mathcal R(r)$ with $\mathcal R$ as in the Statement. [step 3.1, given, algebra]

5.1 On the stated intervals the nonnegative square roots are continuous. Choose either sign on each interval and take primitives of $\sqrt{\mathcal R}/\Delta$ and $\sqrt{\Theta}$ using [F4]; since step 1.1 gives $\Delta>0$, the radial integrand is continuous. The resulting $S$ is $C^1$ and satisfies the two separated equations of step 4.1, hence satisfies the Hamilton-Jacobi equation by reversing that algebra. [F4, step 1.1, step 4.1, algebra]

6.1 Where the radicands are strictly positive, repeated use of the derivative formula in [F5] shows the square-root compositions have derivatives of every order; [F6] then gives smooth integrands, and their primitives are smooth because their first derivatives are smooth. [F5, F6, step 5.1, algebra]

7.1 Thus the separated form is a local solution under the stated radicand conditions. The argument makes no claim across a zero of either radicand or about global geodesic completeness. [step 5.1] ∎


## Remarks

The separation calculation is derived from the displayed inverse metric. It does not assume an unproved Killing tensor formula, infer irreducibility, or identify a mode equation with this geodesic equation. The separation constant in Reall equations (7.35)-(7.36) equals the present $Q+(L-aE)^2$; the present $Q$ subtracts that constant square.
