---
id: ex-cm-rotating-frame-identity
kind: example
title: "The rotating-frame acceleration identity for a uniform rotation about an axis"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 2
deps: [def-cm-special-orthogonal-group, lem-cm-moving-frame-acceleration-identity, def-cross-product-in-r3, def-sine-and-cosine-by-power-series, thm-sine-and-cosine-derivatives, def-vector-valued-derivative-and-integral, def-euclidean-inner-product]
dependency_roles:
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

Let $\omega>0$ and let $R(t)$ be the rotation about the third standard axis by angle $\omega t$:

$$R(t)=\begin{pmatrix}\cos\omega t&-\sin\omega t&0\\ \sin\omega t&\cos\omega t&0\\ 0&0&1\end{pmatrix}.$$

Then $R(t)\in SO(3)$ for every $t$, the matrix $\Omega=R^{\mathsf T}R'$ is

$$\Omega(t)=\omega\begin{pmatrix}0&-1&0\\1&0&0\\0&0&0\end{pmatrix},$$

and the angular velocity vector of [[lem-cm-moving-frame-acceleration-identity]] is $\omega(t)=(0,0,\omega)$, independent of $t$. With $c:=0$, the acceleration identity of the lemma reads

$$R(t)^{\mathsf T}x''(t)=y''(t)+2\,\omega\times y'(t)+\omega\times(\omega\times y(t))\qquad(x=Ry).$$

## Facts & Assumptions

**Given:** A number $\omega>0$ and the rotation matrix $R(t)$ displayed above; write $c_t:=\cos\omega t$ and $s_t:=\sin\omega t$.

[L1] The identity $c_t^2+s_t^2=1$ holds for every real $t$, the derivatives of sine and cosine are $(\sin)'=\cos$ and $(\cos)'=-\sin$, and vector-valued formulas are differentiated componentwise ([[def-sine-and-cosine-by-power-series]], [[thm-sine-and-cosine-derivatives]], [[def-vector-valued-derivative-and-integral]]).

[L2] The lemma [[lem-cm-moving-frame-acceleration-identity]] states: for twice continuously differentiable $R:I\to SO(3)$ and $y$, with $\Omega=R^{\mathsf T}R'$ and $\omega(t)$ the unique vector with $\Omega z=\omega\times z$ for all $z$, one has $R^{\mathsf T}x''=y''+2\,\omega\times y'+\omega'\times y+\omega\times(\omega\times y)+R^{\mathsf T}c''$ when $x=Ry+c$.

[L3] The cross product in $\mathbb R^3$ of the standard basis vectors is $e_1\times e_2=e_3$, $e_2\times e_3=e_1$, $e_3\times e_1=e_2$, and it is bilinear and alternating ([[def-cross-product-in-r3]]).

## Verification

**Proof technique:** direct; compute $\Omega$ and check the identity on two explicit curves.

1.1 By [L1], $R'=\omega\begin{pmatrix}-s_t&-c_t&0\\ c_t&-s_t&0\\0&0&0\end{pmatrix}$, and the product $R^{\mathsf T}R'$ equals $\omega\begin{pmatrix}c_t&s_t&0\\-s_t&c_t&0\\0&0&1\end{pmatrix}\begin{pmatrix}-s_t&-c_t&0\\ c_t&-s_t&0\\0&0&0\end{pmatrix}=\omega\begin{pmatrix}-c_ts_t+s_tc_t&-c_t^2-s_t^2&0\\ s_t^2+c_t^2&s_tc_t-c_ts_t&0\\0&0&0\end{pmatrix}=\omega\begin{pmatrix}0&-1&0\\1&0&0\\0&0&0\end{pmatrix}$, using $c_t^2+s_t^2=1$; hence $\Omega$ is the displayed skew matrix, and reading off its entries as in clause 2 of [L2] gives $\omega(t)=(0,0,\omega)$, so that $\Omega z=\omega\times z$ for every $z$. Also $R^{\mathsf T}R=I_3$ with $\det R=1$ by the same identity, so $R(t)\in SO(3)$ for every $t$, and all entries are twice differentiable. [L1, given, algebra]

2.1 Take $y(t)=e_1$, so $y'=y''=0$, $x(t)=R(t)e_1=(c_t,s_t,0)$ and $x''=-\omega^2(c_t,s_t,0)$ by [L1]. Then $R^{\mathsf T}x''=-\omega^2R^{\mathsf T}(c_t,s_t,0)=-\omega^2e_1$; and the right-hand side is $0+0+\omega\times(\omega\times e_1)=(0,0,\omega)\times(0,\omega,0)=(-\omega^2,0,0)$ by [L3] and step 1.1. The two sides agree. [step 1.1, L1, L2, L3, algebra]

3.1 Take $y(t)=te_1$, so $y'=e_1$, $y''=0$, $x(t)=t(c_t,s_t,0)$ and $x''=(-2\omega s_t-t\omega^2c_t,\ 2\omega c_t-t\omega^2s_t,\ 0)$ by [L1]. Multiplying by $R^{\mathsf T}$ gives $R^{\mathsf T}x''=(-t\omega^2,\,2\omega,\,0)$; and the right-hand side is $2(0,\omega,0)+t(-\omega^2,0,0)=(-t\omega^2,2\omega,0)$ by [L3] and step 1.1, using $2\,\omega\times e_1=2(0,\omega,0)$ and $\omega\times(\omega\times te_1)=t(\omega\times(\omega\times e_1))=t(-\omega^2,0,0)$. The two sides agree, exhibiting the Coriolis-type term $2\omega\times y'$ and the centrifugal-type term $\omega\times(\omega\times y)$ separately. [step 1.1, step 2.1, L1, L2, L3, algebra] ∎

## Remarks

- Both checks are finite computations with the stated convention $\Omega=R^{\mathsf T}R'$ and angular velocity $(0,0,\omega)$. For the opposite convention $R'R^{\mathsf T}$ the angular velocity vector would be $(0,0,\omega)$ as well in this example, because the rotation axis is fixed; the example does not test the distinction between the two conventions, and consumers must not read one from it.

- The identity is kinematic. The words "Coriolis" and "centrifugal" name the two displayed terms in a mechanical interpretation, which requires the force and mass hypotheses of the consuming physical items.
