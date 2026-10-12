---
id: ex-cm-quaternion-lift-of-a-varying-rate-about-a-fixed-axis
kind: example
title: "A time-varying rate about a fixed axis: $q(t)=q_0\\bigl(\\cos(\\theta(t)/2)+\\varphi(\\hat n)\\sin(\\theta(t)/2)\\bigr)$ solves the lift equation with $\\omega(t)=\\theta'(t)\\hat n$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 6
deps: [def-cm-quaternion-rotation-map-and-cover, lem-cm-quaternion-product-rule-and-conjugation-formula, lem-cm-body-angular-velocity-of-a-rotation-path, lem-cm-quaternion-lift-of-a-prescribed-body-angular-velocity, prop-cm-quaternion-angular-velocity-reconstruction, def-quaternions, def-euclidean-inner-product, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, thm-chain-rule-for-total-derivatives, def-ck-euclidean-maps-and-diffeomorphisms]
dependency_roles:
  def-cm-quaternion-rotation-map-and-cover: mathematical-premise
  lem-cm-quaternion-product-rule-and-conjugation-formula: mathematical-premise
  lem-cm-body-angular-velocity-of-a-rotation-path: mathematical-premise
  lem-cm-quaternion-lift-of-a-prescribed-body-angular-velocity: mathematical-premise
  prop-cm-quaternion-angular-velocity-reconstruction: mathematical-premise
  def-quaternions: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. Sola, Quaternion kinematics for the error-state Kalman filter (arXiv:1711.02508), Section 2.4.2 (q = e^{omega t/2}; Exp(phi u) = cos(phi/2) + u sin(phi/2)) and Section 2.4.3 (quaternion and rotation vector), printed pages 21-22"
      url: "https://arxiv.org/pdf/1711.02508"
    - title: "N. Trawny and S. I. Roumeliotis, Indirect Kalman Filter for 3D Attitude Estimation (University of Minnesota, TR-2005-002), Section 1.1 (axis-angle construction of the quaternion of rotation, equation (4)), printed page 2, and Section 1.4 (relationship between quaternion and rotation matrix; small-rotation approximation), printed pages 6-8"
      url: "http://mars.cs.umn.edu/tr/reports/Trawny05b.pdf"
verification:
  precheck: pass
---

## Example

Let $I\subseteq\mathbb R$ be a nondegenerate open interval with $0\in I$, let $\theta:I\to\mathbb R$ be of class $C^1$, let $\hat n\in\mathbb R^3$ be a unit vector, let $q_0\in S^3$, and define

$$e(t):=\cos\bigl(\theta(t)/2\bigr)+\varphi(\hat n)\sin\bigl(\theta(t)/2\bigr),\qquad q(t):=q_0\,e(t),$$

with $\varphi,S^3,\rho$ as in [[def-cm-quaternion-rotation-map-and-cover]]. Then:

1. $e$ and $q$ are of class $C^1$, they take values in $S^3$, and $q(0)=q_0$.
2. The curve $q$ solves $q'(t)=\tfrac12q(t)\,\varphi(\omega(t))$ with $\omega(t):=\theta'(t)\hat n$, on all of $I$.
3. Consequently $R:=\rho\circ q$ is a $C^1$ rotation path whose body angular velocity is $\omega(t)=\theta'(t)\hat n$, and $R(t)=\rho(q_0)\rho(e(t))$, where $\rho(e(t))$ is the rotation about $\hat n$ through the angle $\theta(t)$.

## Facts & Assumptions

**Given:** The interval $I\ni0$, the curve $\theta$, the unit $\hat n$, the unit quaternion $q_0$, and the curves $e,q$ above.

[L1] $(\sin x)'=\cos x$, $(\cos x)'=-\sin x$, $\sin^2x+\cos^2x=1$, the chain rule, and the class-$C^1$ closure of composites ([[thm-sine-and-cosine-derivatives]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-chain-rule-for-total-derivatives]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).

[L2] For $q=s+\varphi(u)$, $q'=t+\varphi(w)$ one has $qq'=(st-\langle u,w\rangle_2)+\varphi(sw+tu+u\times w)$, hence $\varphi(\hat n)^2=-1$ for $\|\hat n\|_2=1$, and $N(s+\varphi(u))=s^2+\|u\|_2^2$ ([[lem-cm-quaternion-product-rule-and-conjugation-formula]] clause 1, [[def-quaternions]], [[def-euclidean-inner-product]]).

[L3] $\rho(q)(\varphi(v))=q\,\varphi(v)\,\bar q$ for $q\in S^3$, and for $q=\cos(\theta/2)+\varphi(\hat n)\sin(\theta/2)$ this equals $\varphi(\cos\theta\,v+(1-\cos\theta)\langle\hat n,v\rangle_2\hat n+\sin\theta(\hat n\times v))$; moreover $\rho(pq)=\rho(p)\rho(q)$ for $p,q\in S^3$ ([[lem-cm-quaternion-product-rule-and-conjugation-formula]] clause 4, [[def-cm-quaternion-rotation-map-and-cover]] Definition and Remark).

[L4] The lift equation with continuous $\omega$ and initial data in $S^3$ has a unique solution on the whole interval, and its associated rotation path has body angular velocity $\omega$ ([[lem-cm-quaternion-lift-of-a-prescribed-body-angular-velocity]] clauses 1-2, [[prop-cm-quaternion-angular-velocity-reconstruction]] clause 3).

## Verification

**Proof technique:** direct; verify the explicit curve solves the lift equation and read off the rotation.

1.1 $N(e(t))=\cos^2(\theta(t)/2)+\|\hat n\|_2^2\sin^2(\theta(t)/2)=1$ by [L2], so $e$ takes values in $S^3$; multiplying by the unit quaternion $q_0$ keeps $N(q(t))=N(q_0)N(e(t))=1$. Both $e$ and $q$ are $C^1$ on $I$ by [L1], and $q(0)=q_0e(0)=q_0$. This proves clause 1. [L1, L2, algebra]

2.1 Differentiating $e$ with [L1] gives $e'(t)=\tfrac{\theta'(t)}{2}\bigl(-\sin(\theta(t)/2)+\varphi(\hat n)\cos(\theta(t)/2)\bigr)$, while by [L2] the identity $\varphi(\hat n)e(t)=e(t)\varphi(\hat n)$ holds because $e(t)=\cos(\theta/2)\cdot1+\sin(\theta/2)\,\varphi(\hat n)$ is a real combination of $1$ and $\varphi(\hat n)$, which commute, and $\varphi(\hat n)^2=-1$. Hence $\tfrac12\varphi(\theta'(t)\hat n)\,e(t)=\tfrac{\theta'(t)}{2}\bigl(\cos(\theta/2)\varphi(\hat n)+\sin(\theta/2)\varphi(\hat n)^2\bigr)=\tfrac{\theta'(t)}{2}\bigl(-\sin(\theta/2)+\varphi(\hat n)\cos(\theta/2)\bigr)=e'(t)$, and therefore $q'=q_0e'=q_0\,\tfrac12\varphi(\theta'(t)\hat n)e=\tfrac12q_0e\,\varphi(\theta'(t)\hat n)=\tfrac12q\,\varphi(\theta'(t)\hat n)$, which is the displayed equation with $\omega(t)=\theta'(t)\hat n$; $\omega$ is continuous because $\theta$ is $C^1$. This proves clause 2. [step 1.1, L1, L2, algebra]

3.1 Since $q(0)=q_0\in S^3$ and $\omega$ is continuous, [L4] identifies $R=\rho\circ q$ as a $C^1$ rotation path whose body angular velocity is $\omega(t)=\theta'(t)\hat n$; the homomorphism property and the axis-angle form of [L3] give $R(t)=\rho(q_0)\rho(e(t))$ with $\rho(e(t))$ the rotation through $\theta(t)$ about $\hat n$. This proves clause 3. [step 2.1, L3, L4] ∎

## Remarks

- The verification is a finite computation: it checks that the half-angle curve solves the lift equation and then invokes the lift-and-reconstruction items; no claim is made about the existence or uniqueness of $q$ beyond what those items supply, and none about the physical meaning of $\theta$ or $t$.

- The example includes the non-unit case vacuously: the construction uses $N(e(t))=1$, so $e$ remains in $S^3$ even though only $\theta$ and $\hat n$ are constrained. The initial value $q_0$ may be any unit quaternion, so left multiplication by $q_0$ produces every initial lift sign class.
