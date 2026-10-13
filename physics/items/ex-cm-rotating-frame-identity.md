---
id: ex-cm-rotating-frame-identity
kind: example
title: "The rotating-frame acceleration identity for a uniform rotation about an axis"
status: published
origin: pipeline
domain: mathematics
dependency_level: 2
deps: [def-cm-special-orthogonal-group, lem-cm-moving-frame-acceleration-identity, def-cross-product-in-r3, def-sine-and-cosine-by-power-series, thm-sine-and-cosine-derivatives, def-vector-valued-derivative-and-integral, def-euclidean-inner-product, cor-trigonometric-parity-and-pythagorean-identity]
dependency_roles:
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  def-cm-special-orthogonal-group: mathematical-premise
  lem-cm-moving-frame-acceleration-identity: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, 2015), Section 3.1.1, printed pages 47-49"
      url: "https://www.damtp.cam.ac.uk/user/tong/dynamics/clas.pdf"
    - title: "D. Tong, Dynamics and Relativity (Cambridge lecture notes, 2013), Section 6, printed pages 101-110"
      url: "https://www.damtp.cam.ac.uk/user/tong/relativity/dynrel.pdf"
verification:
  precheck: pass
---

## Example

Let $\nu>0$ and define $R:\mathbb R\to SO(3)$ by the rotation about the third standard axis through angle $\nu t$:

$$R(t)=\begin{pmatrix}\cos\nu t&-\sin\nu t&0\\ \sin\nu t&\cos\nu t&0\\ 0&0&1\end{pmatrix}\qquad(t\in\mathbb R).$$

Then $R(t)\in SO(3)$ for every $t$, and $\Omega=R^{\mathsf T}R'$ is

$$\Omega(t)=\nu\begin{pmatrix}0&-1&0\\1&0&0\\0&0&0\end{pmatrix}.$$

The angular-velocity vector of [[lem-cm-moving-frame-acceleration-identity]] is $\boldsymbol\omega(t)=(0,0,\nu)$, independent of $t$. For any twice continuously differentiable $y:\mathbb R\to\mathbb R^3$, put $x(t):=R(t)y(t)$ and let $c:\mathbb R\to\mathbb R^3$ be identically zero. That lemma gives

$$R(t)^{\mathsf T}x''(t)=y''(t)+2\,\boldsymbol\omega\times y'(t)+\boldsymbol\omega\times(\boldsymbol\omega\times y(t))\qquad(x=Ry).$$

## Facts & Assumptions

**Given:** A number $\nu>0$ and the rotation matrix $R(t)$ displayed above, defined for $t\in\mathbb R$; write $c_t:=\cos\nu t$ and $s_t:=\sin\nu t$.

[L1] The identity $c_t^2+s_t^2=1$ holds for every real $t$; sine and cosine have derivatives $(\sin)'=\cos$ and $(\cos)'=-\sin$, so repeated differentiation gives continuous derivatives of all orders. Vector-valued formulas are differentiated componentwise ([[def-sine-and-cosine-by-power-series]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-sine-and-cosine-derivatives]], [[def-vector-valued-derivative-and-integral]]).

[L2] For twice continuously differentiable $R:I\to SO(3)$ and $y$, with $\Omega=R^{\mathsf T}R'$ and $\boldsymbol\omega(t)$ the unique vector with $\Omega z=\boldsymbol\omega\times z$ for all $z$, [[lem-cm-moving-frame-acceleration-identity]] gives $R^{\mathsf T}x''=y''+2\,\boldsymbol\omega\times y'+\boldsymbol\omega'\times y+\boldsymbol\omega\times(\boldsymbol\omega\times y)+R^{\mathsf T}c''$ when $x=Ry+c$.

[L3] The cross product in $\mathbb R^3$ of the standard basis vectors is $e_1\times e_2=e_3$, $e_2\times e_3=e_1$, $e_3\times e_1=e_2$, and it is bilinear and alternating ([[def-cross-product-in-r3]]).

## Verification

**Proof technique:** direct; compute $\Omega$ and check the identity on two explicit curves defined on $\mathbb R$.

1.1 By [L1], $R'=\nu\begin{pmatrix}-s_t&-c_t&0\\ c_t&-s_t&0\\0&0&0\end{pmatrix}$, and the product $R^{\mathsf T}R'$ equals $\nu\begin{pmatrix}c_t&s_t&0\\-s_t&c_t&0\\0&0&1\end{pmatrix}\begin{pmatrix}-s_t&-c_t&0\\ c_t&-s_t&0\\0&0&0\end{pmatrix}=\nu\begin{pmatrix}-c_ts_t+s_tc_t&-c_t^2-s_t^2&0\\ s_t^2+c_t^2&s_tc_t-c_ts_t&0\\0&0&0\end{pmatrix}=\nu\begin{pmatrix}0&-1&0\\1&0&0\\0&0&0\end{pmatrix}$, using $c_t^2+s_t^2=1$; hence reading off the entries of $\Omega$ as in clause 2 of [L2] gives $\boldsymbol\omega(t)=(0,0,\nu)$ and $\Omega z=\boldsymbol\omega\times z$ for every $z$. Also $R^{\mathsf T}R=I_3$ and $\det R=c_t^2+s_t^2=1$, so $R(t)\in SO(3)$; [L1] gives its required $C^2$ regularity. [L1, given, algebra]

2.1 Take $y(t)=e_1$ for $t\in\mathbb R$, so $y'=y''=0$, $x(t)=R(t)e_1=(c_t,s_t,0)$ and $x''=-\nu^2(c_t,s_t,0)$ by [L1]. Then $R^{\mathsf T}x''=-\nu^2R^{\mathsf T}(c_t,s_t,0)=-\nu^2e_1$; the right-hand side is $\boldsymbol\omega\times(\boldsymbol\omega\times e_1)=(0,0,\nu)\times(0,\nu,0)=(-\nu^2,0,0)$ by [L3] and step 1.1. The two sides agree. [step 1.1, L1, L2, L3, algebra]

3.1 Take $y(t)=te_1$ for $t\in\mathbb R$, so $y'=e_1$, $y''=0$, $x(t)=t(c_t,s_t,0)$ and $x''=(-2\nu s_t-t\nu^2c_t,\ 2\nu c_t-t\nu^2s_t,\ 0)$ by [L1]. Multiplying by $R^{\mathsf T}$ gives $R^{\mathsf T}x''=(-t\nu^2,\,2\nu,\,0)$; the right-hand side is $2(0,\nu,0)+t(-\nu^2,0,0)=(-t\nu^2,2\nu,0)$ by [L3] and step 1.1, using $2\,\boldsymbol\omega\times e_1=2(0,\nu,0)$ and $\boldsymbol\omega\times(\boldsymbol\omega\times te_1)=t(-\nu^2,0,0)$. The two sides agree, exhibiting the two rotational terms separately. [step 1.1, step 2.1, L1, L2, L3, algebra] ∎

## Remarks

- Both checks are finite computations with the convention $\Omega=R^{\mathsf T}R'$ and angular velocity $\boldsymbol\omega=(0,0,\nu)$. The other convention $R'R^{\mathsf T}$ gives the same vector in this fixed-axis example, so the example does not test the distinction between conventions.

- The identity is kinematic. The terms are named "Coriolis" and "centrifugal" only in a mechanical interpretation, which requires the force and mass hypotheses of the consuming physical items.
