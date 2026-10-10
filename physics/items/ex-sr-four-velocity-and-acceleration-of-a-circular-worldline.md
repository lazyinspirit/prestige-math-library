---
id: ex-sr-four-velocity-and-acceleration-of-a-circular-worldline
kind: example
title: "Worked example: four-velocity and four-acceleration of uniform circular motion"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 12
deps:
  - def-sr-regular-causal-curve-and-worldline
  - def-sr-proper-time
  - def-sr-four-velocity-and-four-acceleration
  - thm-sr-proper-time-and-observer-decomposition
  - def-inertial-frame-and-inertial-chart
  - def-spatial-euclidean-structure-of-an-inertial-frame
  - def-lorentz-form-and-inertia
  - def-causal-classification-of-lorentz-vectors
  - def-sine-and-cosine-by-power-series
  - thm-sine-and-cosine-derivatives
  - cor-trigonometric-parity-and-pythagorean-identity
  - thm-chain-rule
dependency_roles:
  def-sr-regular-causal-curve-and-worldline: mathematical-premise
  def-sr-proper-time: mathematical-premise
  def-sr-four-velocity-and-four-acceleration: mathematical-premise
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-spatial-euclidean-structure-of-an-inertial-frame: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  thm-chain-rule: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
---

## Example

Worked computation. In an inertial chart with $\eta_0 =
\operatorname{diag}(-1,1,1,1)$ let $c>0$, $R > 0$ and let $\omega$ be real with
$R|\omega| < c$. Here $\sin,\cos:\mathbb R\to\mathbb R$ are the everywhere-convergent real power-series functions of
[[def-sine-and-cosine-by-power-series]]; their derivatives are $\cos$ and $-\sin$
([[thm-sine-and-cosine-derivatives]]), and $\sin^2+\cos^2=1$
([[cor-trigonometric-parity-and-pythagorean-identity]]). For $t\in\mathbb R$, consider the coordinate worldline
$x(t) = \bigl(ct, R\cos(\omega t), R\sin(\omega t), 0\bigr)$, parametrized by
coordinate time: uniform circular motion in the first two spatial coordinates.
Then $w(t) = \bigl(-R\omega\sin(\omega t), R\omega\cos(\omega t), 0\bigr)$ has
$|w| = R|\omega|$, so $-\eta(x',x') = c^{2}-R^{2}\omega^{2}$ and the
proper-time factor is
$\tau' = c^{-1}\sqrt{c^{2}-R^{2}\omega^{2}} = 1/\gamma$ with
$\gamma := (1-R^{2}\omega^{2}/c^{2})^{-1/2}$; the four-velocity is
$U = \gamma\,(c,w)$. Since $|w|$ is constant, $\gamma$ is constant; the
coordinate acceleration is
$a(t) = \bigl(-R\omega^{2}\cos(\omega t), -R\omega^{2}\sin(\omega t), 0\bigr)$,
with $|a| = R\omega^{2}$ and $w \cdot a = 0$. By clause (e) of
[[thm-sr-proper-time-and-observer-decomposition]] the four-acceleration is
$A = (0,\gamma^{2}a)$, so $A^{0} = 0$, $\eta(U,A) = 0$ and
$\eta(A,A) = \gamma^{4}R^{2}\omega^{4} \ge 0$. Its magnitude is
$\gamma^{2}R\omega^{2}$; for $R > 0$ it is spacelike exactly when
$\omega \ne 0$, while $\omega = 0$ is the static limit with $\gamma = 1$,
$U = (c,0,0,0)$ and $A = 0$. Numerical specialization: if $R\omega = 3c/5$,
then $\gamma = 5/4$ and the magnitude of the four-acceleration is
$\gamma^{2}R\omega^{2} = (25/16)R\omega^{2} = (15c\omega)/16$.

## Facts & Assumptions

**Given:** An inertial chart with $\eta_0 = \operatorname{diag}(-1,1,1,1)$, reals $c>0$, $R > 0$ and $\omega$ with $R|\omega| < c$, and the worldline $x:\mathbb R\to A$ with coordinates $x(t) = (ct,R\cos(\omega t),R\sin(\omega t),0)$.

[L1] Chart and spatial structure ([[def-inertial-frame-and-inertial-chart]], [[def-spatial-euclidean-structure-of-an-inertial-frame]]): in the chart $\eta_0 = \operatorname{diag}(-1,1,1,1)$, the spatial part carries the Euclidean norm $|\cdot|$ and inner product $w \cdot z$.

[L2] Curves ([[def-sr-regular-causal-curve-and-worldline]], [[def-causal-classification-of-lorentz-vectors]]): $x$ is $C^{1}$ with tangent $x' = (c,w)$ and is a future timelike worldline exactly when $\eta(x',x') < 0$ with $x'$ future.

[L3] Proper time and four-velocity ([[def-sr-proper-time]], [[def-sr-four-velocity-and-four-acceleration]]): $\tau' = c^{-1}\sqrt{-\eta(x',x')}$, $U = x'/\tau'$, and $A = U'/\tau'$ when $x$ is $C^{2}$.

[L4] Coordinate form of the decomposition ([[thm-sr-proper-time-and-observer-decomposition]], clause (e)): for a $C^{2}$ future timelike worldline with coordinates $t \mapsto (ct,r(t))$, $w = r'$, $a = w'$, one has $|w| < c$, $U = \gamma_w(c,w)$ with $\gamma_w = (1-|w|^{2}/c^{2})^{-1/2}$, $A^{0} = \gamma_w^{4}(w \cdot a)/c$, $A_{\mathrm{vec}} = \gamma_w^{2}a+\gamma_w^{4}(w \cdot a)w/c^{2}$, and $\eta(A,A) = \gamma_w^{4}|a|^{2}+\gamma_w^{6}(w \cdot a)^{2}/c^{2}$, vanishing exactly when $a = 0$.

[L5] Bilinearity and the diagonal form ([[def-lorentz-form-and-inertia]]): $\eta$ is bilinear, so $\eta(U,U)$ is computed from the chart matrix in [L1].

[L6] Trigonometric calculus: $\sin,\cos$ are defined on all of $\mathbb R$ by their convergent power series ([[def-sine-and-cosine-by-power-series]]), with $\sin\prime=\cos$, $\cos\prime=-\sin$ and values $\sin0=0$, $\cos0=1$ ([[thm-sine-and-cosine-derivatives]]). The identity $\sin^2\theta+\cos^2\theta=1$ holds for every real $\theta$ ([[cor-trigonometric-parity-and-pythagorean-identity]]). The chain rule ([[thm-chain-rule]]) gives $(\sin(\omega t))\prime=\omega\cos(\omega t)$ and $(\cos(\omega t))\prime=-\omega\sin(\omega t)$; iterating these identities makes the coordinate path $C^{\infty}$.

## Verification

**Proof technique:** direct.

1.1 The difference quotients of the first coordinate give $c$; those of the spatial coordinates give $w(t) = (-R\omega\sin(\omega t),R\omega\cos(\omega t),0)$, so $x'(t) = (c,w(t))$; then $|w(t)| = R|\omega|$ and, by [L1], $\eta(x',x') = -c^{2}+R^{2}\omega^{2} = -(c^{2}-R^{2}\omega^{2}) < 0$ by the hypothesis $R|\omega| < c$, with $x'$ future; hence $x$ is a $C^{1}$ future timelike worldline by [L2]. [given, L1, L2, L6]

2.1 By [L3], $\tau' = c^{-1}\sqrt{c^{2}-R^{2}\omega^{2}} = (1-R^{2}\omega^{2}/c^{2})^{1/2} = 1/\gamma$ with $\gamma := (1-R^{2}\omega^{2}/c^{2})^{-1/2}$, and $U = x'/\tau' = \gamma(c,w)$. [step 1.1, L3]

2.2 The spatial path is $r(t) = (R\cos(\omega t),R\sin(\omega t),0)$, with $r' = w$ and $r'' = a(t) = (-R\omega^{2}\cos(\omega t),-R\omega^{2}\sin(\omega t),0)$; hence $|a| = R\omega^{2}$ and $w \cdot a = R^{2}\omega^{3}(\sin\cdot\cos - \cos\cdot\sin) = 0$. [step 1.1, L6]

3.1 Since $|w| = R|\omega|$ is constant, $\gamma$ is constant and $A = \gamma_w\frac{d}{dt}(\gamma_w(c,w))$ with $\gamma_w = \gamma$; clause (e) of [L4] with $w \cdot a = 0$ gives $A = (0,\gamma^{2}a)$, so $A^{0} = 0$, and $\eta(U,A) = 0$; also $|a| = R\omega^{2}$ gives $\eta(A,A) = \gamma^{4}|a|^{2} = \gamma^{4}R^{2}\omega^{4} \ge 0$, with equality if and only if $a = 0$, i.e. if and only if $\omega = 0$ (since $R > 0$); the magnitude of the four-acceleration is then $\gamma^{2}R\omega^{2}$. [step 2.1, step 2.2, L4, L5]

4.1 At $\omega = 0$ the worldline is $x(t) = (ct,R,0,0)$, the static limit: $w = 0$, $\gamma = 1$, $U = (c,0,0,0)$ and $A = 0$, so the clock is at rest in the chart and its acceleration vanishes; for $\omega \ne 0$ the four-acceleration is spacelike with $\eta(A,A) = \gamma^{4}R^{2}\omega^{4} > 0$. [step 2.1, step 3.1]

5.1 Numerical specialization: if $R\omega = 3c/5$, then $\gamma = (1-9/25)^{-1/2} = 5/4$ and the magnitude of the four-acceleration is $\gamma^{2}R\omega^{2} = (25/16)R\omega^{2} = (25/16)(3c/5)\omega = (15c\omega)/16$, with the dimensions of acceleration because $c\omega$ has units m/s$^{2}$ when $\omega$ is an angular rate. [step 3.1] ∎

## Remarks

- **The zero-frequency case is retained deliberately.** At $\omega = 0$ the clock is static and its four-acceleration vanishes; the acceleration square $\eta(A,A) = \gamma^{4}R^{2}\omega^{4}$ is nonnegative always and positive exactly for nonzero $\omega$ when $R > 0$.

- **Centripetal acceleration is orthogonal to the velocity.** The identity $w \cdot a = 0$ is what forces $A^{0} = 0$ and keeps the four-acceleration purely spatial; it reflects the constant speed of the motion and is not an additional dynamical assumption.
