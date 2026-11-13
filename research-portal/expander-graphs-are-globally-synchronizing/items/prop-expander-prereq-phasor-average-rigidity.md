---
id: prop-expander-prereq-phasor-average-rigidity
kind: proposition
title: Rigidity and rotation of a unit-phasor average
domain: mathematics
status: draft
origin: pipeline
deps:
  - def-expander-prereq-phasor-calculus
  - math:def-inner-product-space
  - math:def-inner-product-norm
  - math:def-linear-independence
  - math:thm-complex-numbers-form-a-field
  - math:thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
  - math:lem-real-and-complex-modulus-rules
  - math:lem-complex-conjugation-and-modulus-laws
  - math:thm-sine-cosine-zero-sets-and-fundamental-period
  - math:cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - math:thm-complex-exponential-addition-and-real-extension
  - math:thm-division-algorithm-in-z
  - math:thm-sine-and-cosine-parametrize-the-unit-circle
  - math:def-complex-conjugate-real-imaginary-part-and-modulus
  - math:prop-standard-coordinate-inner-products
dependency_roles:
  def-expander-prereq-phasor-calculus: mathematical-premise
  math:def-inner-product-space: mathematical-premise
  math:def-inner-product-norm: mathematical-premise
  math:def-linear-independence: mathematical-premise
  math:thm-complex-numbers-form-a-field: mathematical-premise
  math:thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
  math:lem-real-and-complex-modulus-rules: mathematical-premise
  math:lem-complex-conjugation-and-modulus-laws: mathematical-premise
  math:thm-sine-cosine-zero-sets-and-fundamental-period: mathematical-premise
  math:cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
  math:thm-complex-exponential-addition-and-real-extension: mathematical-premise
  math:thm-division-algorithm-in-z: mathematical-premise
  math:thm-sine-and-cosine-parametrize-the-unit-circle: mathematical-premise
  math:def-complex-conjugate-real-imaginary-part-and-modulus: mathematical-premise
  math:prop-standard-coordinate-inner-products: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 1
---

## Statement

Let $n\ge1$ and $z_1,\ldots,z_n\in S^1=\{z\in\mathbb C:|z|=1\}$. Their average $m=n^{-1}\sum_{j=1}^n z_j$ satisfies $|m|\le1$, with equality exactly when all $z_j$ coincide.

For real $t$, rotation about the origin through angle $t$ means the map $R_t(x+iy):=(x\cos t-y\sin t)+i(x\sin t+y\cos t)$ for real $x,y$. A common rotation of a set is its image under one map $R_t$.

For real angles $\theta_j$ and a positive integer $k$, put $m_k=n^{-1}\sum_{j=1}^n e^{ik\theta_j}$. Then $|m_k|=1$ exactly when all $e^{ik\theta_j}$ coincide. Equivalently, their unit phasors $e^{i\theta_j}$ lie in one common rotation $e^{i\theta_1}\mu_k$, where $\mu_k=\{e^{2\pi i r/k}:r=0,\ldots,k-1\}$ is the set of complex $k$th roots of unity, meaning the complex numbers $w$ satisfying $w^k=1$.

If $m\ne0$, multiplication by the unit phasor $\overline m/|m|$ rotates $m$ to $|m|$. This expression is asserted only when $m\ne0$.

## Facts & Assumptions

[F1] A unit phasor is $e^{iu}=\cos u+i\sin u$ for real $u$, has modulus one, and $e^{i(u-v)}=e^{iu}\overline{e^{iv}}$; it is unchanged by adding an integer multiple of $2\pi$ to its angle ([[def-expander-prereq-phasor-calculus]]).

[F2] In a complex inner product space, Cauchy–Schwarz gives $|\langle u,v\rangle|\le\|u\|\|v\|$, with equality exactly when $u,v$ are linearly dependent. An inner product is linear in its first argument, conjugate symmetric and positive definite ([[math:def-inner-product-space]], [[math:thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]). Its induced norm is $\|w\|=\sqrt{\langle w,w\rangle}$ ([[math:def-inner-product-norm]]). The two-vector list $(u,v)$ is linearly dependent when $au+bv=0$ for complex scalars $a,b$ not both zero ([[math:def-linear-independence]]).

[F3] For $w=a+ib$ with real $a,b$, its modulus is $|w|=\sqrt{a^2+b^2}$ ([[math:def-complex-conjugate-real-imaginary-part-and-modulus]]). Complex modulus is multiplicative, and $w\overline w=|w|^2$; it vanishes only at zero ([[math:lem-real-and-complex-modulus-rules]], [[math:lem-complex-conjugation-and-modulus-laws]]).

[F4] The real zeros of sine are precisely the integer multiples of $\pi$; $e^{i\pi}=-1$ and the complex exponential satisfies $e^{a+b}=e^ae^b$ ([[math:thm-sine-cosine-zero-sets-and-fundamental-period]], [[math:cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[math:thm-complex-exponential-addition-and-real-extension]]).

[F5] For an integer and a positive integer divisor, division with remainder gives an integer quotient and a remainder between zero inclusive and the divisor exclusive ([[math:thm-division-algorithm-in-z]]).

[F6] Every point of the unit circle is $(\cos t,\sin t)$ for some real $t$ ([[math:thm-sine-and-cosine-parametrize-the-unit-circle]]).

[F7] Complex numbers have unique real coordinates, and their multiplication obeys $(a+ib)(c+id)=(ac-bd)+i(ad+bc)$ for real $a,b,c,d$ ([[math:thm-complex-numbers-form-a-field]]).

[F8] The standard coordinate pairing on $\mathbb C^n$, with coordinate addition and scalar multiplication, is an inner product linear in the first argument ([[math:prop-standard-coordinate-inner-products]]).

## Proof

**Given:** The unit complex numbers $z_1,\ldots,z_n$, with $n\ge1$; and, for the root-fibre assertion, real $\theta_1,\ldots,\theta_n$ and a positive integer $k$.

**Goal:** Prove the bound and equality criterion, identify the root fibre, and establish the rotation formula.

1.1 On $\mathbb C^n$ with its coordinate vector-space operations, use the inner product $\langle u,v\rangle=\sum_j u_j\overline{v_j}$ from [F8]. Coordinate calculation verifies the inner-product axioms in [F2]: linearity and conjugate symmetry hold termwise, and $\langle u,u\rangle=\sum_j|u_j|^2$ is nonnegative and vanishes only for $u=0$. For $u=(z_1,\ldots,z_n)$ and $v=(1,\ldots,1)$, both norms are $\sqrt n$ and $\langle u,v\rangle=nm$. Hence Cauchy–Schwarz gives $|m|\le1$. Equality holds exactly when $u$ and $v$ are dependent. A dependence witness in [F2] has $au+bv=0$ with $a,b$ not both zero. Since $v\ne0$, $a=0$ would force $b=0$, so $a\ne0$ and $u=-(b/a)v$. Conversely, $u=cv$ gives the dependence witness $(1,-c)$. Thus equality is equivalent to $u=cv$ for some complex $c$, or $z_1=\cdots=z_n=c$. [F2, F3, F8, algebra]

2.1 Each $e^{ik\theta_j}$ has modulus one, so step 1.1 applied to these numbers gives the stated criterion for $|m_k|=1$. By the exponential addition law, $e^{ik\theta_j}=e^{ik\theta_1}$ exactly when $(e^{i(\theta_j-\theta_1)})^k=1$. [F1, F4, step 1.1, algebra]

3.1 If $e^{it}$ is a $k$th root of unity, then $e^{ikt}=1$. Its imaginary part is zero by [F1], so [F4] gives $kt=a\pi$ for an integer $a$. Divide $a$ by $2$: $a=2q+s$ with $s\in\{0,1\}$. The exponential addition law and $e^{i\pi}=-1$ yield $e^{ia\pi}=(-1)^s$, so $s=0$. Divide $q$ by $k$, writing $q=bk+r$ with $0\le r<k$. Then $t=2\pi b+2\pi r/k$ and $e^{it}=e^{2\pi ir/k}$. Conversely, the addition law and $2\pi$-periodicity show that every displayed $e^{2\pi ir/k}$ has $k$th power one. Any complex $k$th root $w$ has $|w|^k=1$ by [F3], hence $|w|=1$; [F6] and [F1] write it as $e^{it}$. Thus these displayed numbers are exactly all complex $k$th roots of unity. Combining this with step 2.1 proves the stated membership in $e^{i\theta_1}\mu_k$. [F1, F3, F4, F5, F6, step 2.1, algebra]

4.1 For any real $t,x,y$, [F1] and [F7] give $e^{it}(x+iy)=(x\cos t-y\sin t)+i(x\sin t+y\cos t)=R_t(x+iy)$. Hence multiplication by $e^{it}$ is exactly the rotation defined in the Statement; in particular $e^{i\theta_1}\mu_k=R_{\theta_1}(\mu_k)$, completing the common-rotation interpretation in step 3.1. If $m\ne0$, then $|m|>0$. By [F3], $|\overline m/|m||=1$ and $(\overline m/|m|)m=|m|^2/|m|=|m|$. By [F6] and [F1], $\overline m/|m|=e^{it}$ for some real $t$, so the same coordinate identity shows that this multiplier rotates $m$ to $|m|$. Together with steps 1.1, 2.1 and 3.1 this proves all assertions. [F1, F3, F6, F7, step 1.1, step 2.1, step 3.1, algebra] ∎
