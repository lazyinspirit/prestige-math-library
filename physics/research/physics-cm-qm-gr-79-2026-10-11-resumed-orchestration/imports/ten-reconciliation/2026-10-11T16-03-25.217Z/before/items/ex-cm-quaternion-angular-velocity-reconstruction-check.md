---
id: ex-cm-quaternion-angular-velocity-reconstruction-check
kind: example
title: "A non-axis-constant check of the reconstruction formula: for $q=(\\cos\\tfrac t2+\\varphi(e_1)\\sin\\tfrac t2)(\\cos\\tfrac t2+\\varphi(e_2)\\sin\\tfrac t2)$ one gets $\\omega(t)=(\\cos t,1,\\sin t)$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 6
deps: [def-cm-quaternion-rotation-map-and-cover, lem-cm-quaternion-product-rule-and-conjugation-formula, lem-cm-body-angular-velocity-of-a-rotation-path, prop-cm-quaternion-angular-velocity-reconstruction, def-quaternions, def-euclidean-inner-product, def-cross-product-in-r3, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, thm-chain-rule-for-total-derivatives, def-ck-euclidean-maps-and-diffeomorphisms]
dependency_roles:
  def-cm-quaternion-rotation-map-and-cover: mathematical-premise
  lem-cm-quaternion-product-rule-and-conjugation-formula: mathematical-premise
  lem-cm-body-angular-velocity-of-a-rotation-path: mathematical-premise
  prop-cm-quaternion-angular-velocity-reconstruction: mathematical-premise
  def-quaternions: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
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
    - title: "J. Sola, Quaternion kinematics for the error-state Kalman filter (arXiv:1711.02508), Section 2.4.1-2.4.2 (q* qdot pure; omega = 2 Omega) and Section 2.6 (quaternion composition q_AC = q_AB (x) q_BC), printed pages 20-22 and 26-27"
      url: "https://arxiv.org/pdf/1711.02508"
    - title: "N. Trawny and S. I. Roumeliotis, Indirect Kalman Filter for 3D Attitude Estimation (University of Minnesota, TR-2005-002), Section 1.2 (quaternion multiplication and composition), printed pages 2-4, and Section 1.5 (quaternion time derivative), printed pages 9-10"
      url: "http://mars.cs.umn.edu/tr/reports/Trawny05b.pdf"
verification:
  precheck: pass
---

## Example

On $I=\mathbb R$ define

$$u(t):=\cos(t/2)+\varphi(e_1)\sin(t/2),\qquad v(t):=\cos(t/2)+\varphi(e_2)\sin(t/2),\qquad q(t):=u(t)\,v(t),$$

where $e_1,e_2,e_3$ is the standard basis of $\mathbb R^3$, $\varphi$ is the identification of [[def-cm-quaternion-rotation-map-and-cover]], and the product is the quaternion product. Then:

1. $q:\mathbb R\to S^3$ is of class $C^1$.
2. $\bar uu'=\tfrac12\varphi(e_1)$ and $\bar vv'=\tfrac12\varphi(e_2)$, and

$$q(t)^{-1}q'(t)=\bar v(t)\bigl(\bar u(t)u'(t)\bigr)v(t)+\bar v(t)v'(t)=\tfrac12\,\varphi\bigl(\cos t\,e_1+e_2+\sin t\,e_3\bigr).$$

3. Consequently $R=\rho\circ q$ is a $C^1$ rotation path whose body angular velocity is $\omega(t)=\cos t\,e_1+e_2+\sin t\,e_3$, that is, $\omega(t)=(\cos t,1,\sin t)$ in coordinates; this $\omega$ is neither constant nor along a fixed axis.

## Facts & Assumptions

**Given:** The basis vectors $e_1,e_2,e_3$, the curves $u,v,q$ above, and the objects $\varphi,S^3,\rho$ of [[def-cm-quaternion-rotation-map-and-cover]].

[L1] $(\sin x)'=\cos x$, $(\cos x)'=-\sin x$, $\sin^2x+\cos^2x=1$, the chain rule, and $C^1$ closure under composition ([[thm-sine-and-cosine-derivatives]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-chain-rule-for-total-derivatives]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).

[L2] For $p=s+\varphi(w)$, $q'=t+\varphi(z)$ one has $pq'=(st-\langle w,z\rangle_2)+\varphi(sz+tw+w\times z)$; for $C^1$ quaternion curves the product rule $(pq)'=p'q+pq'$ holds; $N(pq)=N(p)N(q)$ and $N(s+\varphi(w))=s^2+\|w\|_2^2$ ([[lem-cm-quaternion-product-rule-and-conjugation-formula]] clauses 1-2, [[def-quaternions]], [[def-euclidean-inner-product]], [[def-cross-product-in-r3]]).

[L3] For $N(q)=1$ and $q=\cos(\theta/2)+\varphi(\hat n)\sin(\theta/2)$, $\|\hat n\|_2=1$, one has $\rho(q)(\varphi(z))=\varphi(\cos\theta\,z+(1-\cos\theta)\langle\hat n,z\rangle_2\hat n+\sin\theta\,(\hat n\times z))$; and $\rho(p)(\varphi(z))=p\,\varphi(z)\,\bar p$ for $p\in S^3$ ([[lem-cm-quaternion-product-rule-and-conjugation-formula]] clause 4, [[def-cm-quaternion-rotation-map-and-cover]]).

[L4] For a $C^1$ path $q:\mathbb R\to S^3$ the body angular velocity of $\rho\circ q$ is $\omega=2\operatorname{Im}(q^{-1}q')$, i.e. the vector with $q^{-1}q'=\tfrac12\varphi(\omega)$ ([[prop-cm-quaternion-angular-velocity-reconstruction]] clauses 1-3).

## Verification

**Proof technique:** direct; compute the two factors of $q^{-1}q'$ and apply one axis-angle rotation.

1.1 Both $u$ and $v$ are $C^1$ and take values in $S^3$, since each has the form $\cos(t/2)+\varphi(\hat n)\sin(t/2)$ with $\hat n$ unit and $N=s^2+\|w\|_2^2=1$ by [L2]; by the multiplicativity of [L2], $N(q)=N(u)N(v)=1$, so $q$ takes values in $S^3$, and $q$ is $C^1$ as a product of $C^1$ curves. This proves clause 1. [L1, L2, algebra]

2.1 Directly from the definitions and [L1], $u'=-\tfrac12\sin(t/2)+\tfrac12\varphi(e_1)\cos(t/2)$ and $v'=-\tfrac12\sin(t/2)+\tfrac12\varphi(e_2)\cos(t/2)$. Multiplying with the formula of [L2] and using $\bar u=\cos(t/2)-\varphi(e_1)\sin(t/2)$, $\bar v=\cos(t/2)-\varphi(e_2)\sin(t/2)$ gives $\bar uu'=\tfrac12\bigl(-\cos(t/2)\sin(t/2)+\sin(t/2)\cos(t/2)\bigr)+\tfrac12\varphi(e_1)\bigl(\cos^2(t/2)+\sin^2(t/2)\bigr)=\tfrac12\varphi(e_1)$, and the identical computation with $e_2$ gives $\bar vv'=\tfrac12\varphi(e_2)$; the two scalar parts vanish by the cancellation of the cross terms, and $\varphi(e_j)^2=-1$ was used. [step 1.1, L1, L2, algebra]

2.2 The unit quaternion $v(t)$ has the axis-angle form $v(t)=\cos(t/2)+\varphi(e_2)\sin(t/2)$, while $\bar v(t)=\cos(-t/2)+\varphi(e_2)\sin(-t/2)$; applying [L3] with $\theta=-t$ and $\hat n=e_2$ gives $\rho(\bar v)(\varphi(e_1))=\varphi\bigl(\cos t\,e_1+(1-\cos t)\langle e_2,e_1\rangle_2\,e_2+\sin(-t)\,(e_2\times e_1)\bigr)=\varphi(\cos t\,e_1+\sin t\,e_3)$, because $\langle e_2,e_1\rangle_2=0$ and $e_2\times e_1=-e_3$ by [L2]. [step 1.1, L2, L3, algebra]

3.1 Since $q=uv$, the product rule and $\overline{uv}=\bar v\bar u$ of [L2] give $q^{-1}q'=\bar qq'=\bar v\bar u\,(u'v+uv')=\bar v(\bar uu')v+\bar vv'$. By [step 2.1], $\bar v(\bar uu')v=\tfrac12\bar v\,\varphi(e_1)\,v$, and since $v\in S^3$ the identity $\rho(\bar v)(\varphi(e_1))=\bar v\,\varphi(e_1)\,v$ of [L3] gives $\bar v\,\varphi(e_1)\,v=\varphi(\rho(\bar v)(e_1))$; substituting [step 2.2] and $\bar vv'=\tfrac12\varphi(e_2)$ yields $q^{-1}q'=\tfrac12\varphi(\cos t\,e_1+e_2+\sin t\,e_3)$, which proves clause 2. [step 2.1, step 2.2, L2, L3, algebra]

4.1 By [L4] the body angular velocity of $R=\rho\circ q$ is the vector $\omega$ with $q^{-1}q'=\tfrac12\varphi(\omega)$, which by [step 3.1] is $\omega(t)=\cos t\,e_1+e_2+\sin t\,e_3$; its component along $e_2$ is constant while the other two oscillate, so its direction is not constant and no fixed axis contains all values. This proves clause 3. [step 3.1, L4] ∎

## Remarks

- The example checks the reconstruction formula on a product of two one-parameter rotations about different axes; the resulting $\omega$ is nonconstant, so the example is not a disguised fixed-axis case. The computation is finite and uses only the product form, the multiplicativity, and one evaluation of the axis-angle formula.

- No dynamical input is used: $q$ is an explicitly given curve and no equation of motion is solved. The example asserts nothing about which curves arise from any mechanical system.
