---
id: ex-cm-constant-angular-velocity-quaternion-lift
kind: example
title: "Constant angular velocity: the lift $q(t)=\\cos(\\omega_0t/2)+\\varphi(\\hat n)\\sin(\\omega_0t/2)$ is the rotation about $\\hat n$ through $\\omega_0t$, and a full turn lifts to the antipode"
status: published
origin: pipeline
domain: mathematics
dependency_level: 6
deps: [def-cm-quaternion-rotation-map-and-cover, lem-cm-quaternion-product-rule-and-conjugation-formula, lem-cm-body-angular-velocity-of-a-rotation-path, lem-cm-quaternion-lift-of-a-prescribed-body-angular-velocity, prop-cm-quaternion-angular-velocity-reconstruction, thm-cm-quaternion-lift-exists-and-is-unique, def-quaternions, def-euclidean-inner-product, def-cross-product-in-r3, thm-sine-and-cosine-derivatives, thm-sine-and-cosine-addition-formulas, cor-trigonometric-parity-and-pythagorean-identity, thm-quarter-turn-values-and-shift-formulas, thm-chain-rule-for-total-derivatives, def-ck-euclidean-maps-and-diffeomorphisms]
dependency_roles:
  def-cm-quaternion-rotation-map-and-cover: mathematical-premise
  lem-cm-quaternion-product-rule-and-conjugation-formula: mathematical-premise
  lem-cm-body-angular-velocity-of-a-rotation-path: mathematical-premise
  lem-cm-quaternion-lift-of-a-prescribed-body-angular-velocity: mathematical-premise
  prop-cm-quaternion-angular-velocity-reconstruction: mathematical-premise
  thm-cm-quaternion-lift-exists-and-is-unique: mathematical-premise
  def-quaternions: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-sine-and-cosine-addition-formulas: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  thm-quarter-turn-values-and-shift-formulas: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. Sola, Quaternion kinematics for the error-state Kalman filter (arXiv:1711.02508), Section 2.4.2 (Exp(phi u) = cos(phi/2) + u sin(phi/2); q = e^{omega t/2} for constant omega), printed pages 21-22, and Section 2.4.6 (a full 2pi rotation corresponds to q -> -q), printed page 24"
      url: "https://arxiv.org/pdf/1711.02508"
    - title: "N. Trawny and S. I. Roumeliotis, Indirect Kalman Filter for 3D Attitude Estimation (University of Minnesota, TR-2005-002), Section 1.1 (quaternion of rotation q = [k sin(theta/2); cos(theta/2)], equation (4), and the statement that q and -q describe the same rotation), printed page 2"
      url: "http://mars.cs.umn.edu/tr/reports/Trawny05b.pdf"
verification:
  precheck: pass
---

## Example

For a curve on a closed interval $[0,T]$, this item uses "$C^1$ on $[0,T]$" to mean continuous on $[0,T]$ and $C^1$ on $(0,T)$; no endpoint derivatives are required.

Fix $\omega_0\in\mathbb R$ and a unit vector $\hat n\in\mathbb R^3$ ([[def-euclidean-inner-product]]), put $\omega:=\omega_0\hat n$, and consider

$$q:\mathbb R\longrightarrow S^3,\qquad q(t):=\cos(\omega_0t/2)+\varphi(\hat n)\sin(\omega_0t/2),$$

with $\varphi$ and $S^3$ as in [[def-cm-quaternion-rotation-map-and-cover]]. Then:

1. $q$ is of class $C^1$ with $q(0)=1$, and $q$ solves the lift equation $q'(t)=\tfrac12q(t)\,\varphi(\omega)$ on $\mathbb R$.
2. The curve $R:=\rho\circ q:\mathbb R\to SO(3)$ is of class $C^1$ with $R'(t)=R(t)\,\Omega_\omega$ for all $t$; that is, $\omega$ is the constant body angular velocity of $R$. Explicitly, $R(t)$ is the rotation about $\hat n$ through the angle $\omega_0t$:

$$R(t)\,\varphi(v)=\varphi\Bigl(\cos(\omega_0t)\,v+\bigl(1-\cos(\omega_0t)\bigr)\langle \hat n,v\rangle_2\,\hat n+\sin(\omega_0t)\,(\hat n\times v)\Bigr)\qquad(v\in\mathbb R^3).$$

3. If $\omega_0\ne0$, set $T:=2\pi/|\omega_0|>0$. Then $R(0)=R(T)=I_3$ while $q(T)=-1\ne q(0)$, and the closed loop $t\mapsto R(t)$ on $[0,T]$ has no closed lift through $1$ with the closed-interval regularity just defined.

## Facts & Assumptions

**Given:** The number $\omega_0$, the unit vector $\hat n$, the curve $q(t)=\cos(\omega_0t/2)+\varphi(\hat n)\sin(\omega_0t/2)$, and the objects $\varphi,S^3,\rho$ of [[def-cm-quaternion-rotation-map-and-cover]].

[L1] $(\sin x)'=\cos x$, $(\cos x)'=-\sin x$, and $\sin^2x+\cos^2x=1$; the addition formulas hold for all real arguments, and the chain rule for differentiating a composite with an affine inner function is available ([[thm-sine-and-cosine-derivatives]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-sine-and-cosine-addition-formulas]], [[thm-chain-rule-for-total-derivatives]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).

[L2] For $q=s+\varphi(u)$ and $q'=t+\varphi(w)$ one has $qq'=(st-\langle u,w\rangle_2)+\varphi(sw+tu+u\times w)$; in particular $\varphi(\hat n)^2=-1$ for $\|\hat n\|_2=1$, and $N(q)=s^2+\|u\|_2^2$ ([[lem-cm-quaternion-product-rule-and-conjugation-formula]] clause 1, [[def-quaternions]], [[def-cross-product-in-r3]]).

[L3] If $N(q)=1$ and $q=\cos(\theta/2)+\varphi(\hat n)\sin(\theta/2)$ with $\|\hat n\|_2=1$, then $\rho(q)(\varphi(v))=\varphi(\cos\theta\,v+(1-\cos\theta)\langle\hat n,v\rangle_2\hat n+\sin\theta\,(\hat n\times v))$ ([[lem-cm-quaternion-product-rule-and-conjugation-formula]] clause 4).

[L4] For continuous $\omega$ the lift equation $q'=\tfrac12q\,\varphi(\omega(t))$ with $q(t_0)\in S^3$ has a unique solution on the whole interval, and for any of its solutions the associated path $\rho\circ q$ is $C^1$ with $(\rho\circ q)'=(\rho\circ q)\Omega_\omega$, so that $\omega$ is its body angular velocity ([[lem-cm-quaternion-lift-of-a-prescribed-body-angular-velocity]] clauses 1-2, [[lem-cm-body-angular-velocity-of-a-rotation-path]]).

[L5] $\rho(-p)=\rho(p)$ for $p\in S^3$, and $\rho$ maps into $SO(3)$; in particular $\rho(-1)$ is the identity of $SO(3)$ ([[def-cm-quaternion-rotation-map-and-cover]]).

[L6] For a $C^1$ rotation path on a nondegenerate open interval and a prescribed initial unit quaternion over its initial value, the $C^1$ quaternion lift is unique, and every $C^1$ lift of that path equals one of the two lifts $\pm q$ ([[thm-cm-quaternion-lift-exists-and-is-unique]] clauses 1-2).

[L7] The quarter-turn identities give $\sin\pi=0$ and $\cos\pi=-1$; applying the shift formulas twice and using parity gives $\sin(\pm2\pi)=0$ and $\cos(\pm2\pi)=1$ ([[thm-quarter-turn-values-and-shift-formulas]], [[cor-trigonometric-parity-and-pythagorean-identity]]).

## Verification

**Proof technique:** direct; differentiate the explicit trigonometric curve and substitute into the axis-angle formula.

1.1 The curve $q$ has $N(q(t))=\cos^2(\omega_0t/2)+\|\hat n\|_2^2\sin^2(\omega_0t/2)=1$ by [L2] and the unit condition; hence $q$ takes values in $S^3$, and $q$ is $C^1$ on $\mathbb R$ by [L1]. At $t=0$ one has $q(0)=\cos0+\varphi(\hat n)\sin0=1$. [L1, L2, algebra]

2.1 Differentiating $q$ with [L1] gives $q'(t)=-\tfrac{\omega_0}{2}\sin(\omega_0t/2)+\varphi(\hat n)\,\tfrac{\omega_0}{2}\cos(\omega_0t/2)$. On the other hand, by [L2] $\tfrac12q(t)\,\varphi(\omega)=\tfrac12\bigl(\cos(\omega_0t/2)+\varphi(\hat n)\sin(\omega_0t/2)\bigr)\varphi(\omega_0\hat n)=\tfrac{\omega_0}{2}\bigl(\cos(\omega_0t/2)\varphi(\hat n)+\sin(\omega_0t/2)\varphi(\hat n)^2\bigr)$, and $\varphi(\hat n)^2=-\langle\hat n,\hat n\rangle_2+\varphi(\hat n\times\hat n)=-1$, so this equals $-\tfrac{\omega_0}{2}\sin(\omega_0t/2)+\tfrac{\omega_0}{2}\cos(\omega_0t/2)\varphi(\hat n)=q'(t)$. Hence $q$ solves $q'=\tfrac12q\,\varphi(\omega)$ with $q(0)=1$, which proves clause 1. [step 1.1, L1, L2, algebra]

3.1 By [L4] the path $R=\rho\circ q$ is $C^1$ with $R'=R\Omega_\omega$, so $\omega$ is its body angular velocity; and by [L3] applied with $\theta=\omega_0t$ one has $R(t)\,\varphi(v)=\rho(q(t))(\varphi(v))=\varphi\bigl(\cos(\omega_0t)v+(1-\cos(\omega_0t))\langle\hat n,v\rangle_2\hat n+\sin(\omega_0t)(\hat n\times v)\bigr)$. This proves clause 2. [step 2.1, L3, L4]

4.1 If $\omega_0\ne0$, put $\sigma:=\omega_0/|\omega_0|\in\{-1,1\}$ and $T:=2\pi/|\omega_0|>0$, so $\omega_0T=2\pi\sigma$. By [L7], clause 2 gives $R(T)\varphi(v)=\varphi(v)$ for every $v$, hence $R(T)=I_3=R(0)$; the same quarter-turn values give $q(T)=\cos(\pi\sigma)+\varphi(\hat n)\sin(\pi\sigma)=-1\ne q(0)=1$. Suppose $\tilde q:[0,T]\to S^3$ is a lift, continuous on $[0,T]$ and $C^1$ on $(0,T)$, with $\tilde q(0)=\tilde q(T)=1$. On the nondegenerate open interval $(0,T)$, [L6] applies to $R|_{(0,T)}$; every $C^1$ lift there is one of the two lifts $\pm q|_{(0,T)}$, so either $\tilde q=q$ throughout $(0,T)$ or $\tilde q=-q$ throughout $(0,T)$. In the first case continuity at $T$ gives $\tilde q(T)=q(T)=-1$, a contradiction; in the second case continuity at $0$ gives $\tilde q(0)=-q(0)=-1$, also a contradiction. Hence no closed lift with the stated regularity through $1$ exists. This proves clause 3. [step 1.1, step 3.1, L1, L5, L6, L7, algebra] ∎

## Remarks

- The example realizes the half-angle relation explicitly: at time $t$ the quaternion angle from $1$ is $\omega_0t/2$, while the rotation angle is $\omega_0t$; the factor of two is the same factor that appears in the lift equation and in the definition of the body angular velocity.

- Clause 3 is the explicit closed-loop instance referred to by [[rem-cm-quaternion-lift-scope-and-sign]]: the loop returns to the identity rotation, but its lift through the identity quaternion ends at the antipode. The example does not claim that no other lift is closed for some other initial value, and it makes no statement about any physical rotation.
