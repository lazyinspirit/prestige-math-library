---
title: Translate a local diffeomorphism and its spectral data to the origin
status: published
research_item: lem-author-4c1c39929ecb-fixed-point-translation
dependency_level: 0
---

## Prerequisites

- [math:thm-chain-rule-for-total-derivatives](https://alphabetamath.cc/item/thm-chain-rule-for-total-derivatives)
- [math:def-c-k-map-between-banach-spaces](https://alphabetamath.cc/item/def-c-k-map-between-banach-spaces)
- [math:def-frechet-derivative-between-banach-spaces](https://alphabetamath.cc/item/def-frechet-derivative-between-banach-spaces)
- [math:def-primary-component-and-generalised-eigenspace](https://alphabetamath.cc/item/def-primary-component-and-generalised-eigenspace)
- [math:def-complexification-of-a-real-vector-space](https://alphabetamath.cc/item/def-complexification-of-a-real-vector-space)
- [math:def-complexification-of-a-real-linear-map](https://alphabetamath.cc/item/def-complexification-of-a-real-linear-map)
- [math:def-conjugation-and-real-structure-on-a-complex-vector-space](https://alphabetamath.cc/item/def-conjugation-and-real-structure-on-a-complex-vector-space)
- [math:def-fixed-real-form-of-a-conjugation](https://alphabetamath.cc/item/def-fixed-real-form-of-a-conjugation)


## Statement

Let $h:U\to\mathbb R^m$ be a $C^r$ local diffeomorphism, $r\ge1$ a finite integer, with $U$ open and $h(p)=p$. Here local diffeomorphism means that around each point the map has a $C^r$ inverse onto an open image. Set $\tau(y)=p+y$, $V=U-p$, and $f=\tau^{-1}\circ h\circ\tau$. Then $f:V\to\mathbb R^m$ is a $C^r$ local diffeomorphism fixing zero, $Df(0)=Dh(p)$, and the generalized eigenspaces of these two matrices coincide. For a real matrix, spectral subspaces for nonreal eigenvalues mean the real forms of the conjugation-invariant sums in its complexification. Here $C^r$ uses continuous iterated Fréchet derivatives through order $r$. The complexification has canonical conjugation $\sigma(z\otimes v)=\overline z\otimes v$, and the real form of an invariant complex subspace $W$ means $W^\sigma=\{w\in W:\sigma(w)=w\}$, identified with a subspace of $\mathbb R^m$ via $v\mapsto1\otimes v$.

## Facts & Assumptions

[F1] The total derivative obeys the Euclidean chain rule [math:thm-chain-rule-for-total-derivatives](https://alphabetamath.cc/item/thm-chain-rule-for-total-derivatives).

[F2] Finite $C^r$ regularity means that the iterated Fréchet derivatives exist and are continuous in their iterated operator norms [math:def-c-k-map-between-banach-spaces](https://alphabetamath.cc/item/def-c-k-map-between-banach-spaces). Fréchet differentiability means a bounded linear approximation with a remainder whose norm divided by the increment norm tends to zero [math:def-frechet-derivative-between-banach-spaces](https://alphabetamath.cc/item/def-frechet-derivative-between-banach-spaces). These definitions apply to $\mathbb R^m$ and its Banach spaces of iterated derivative values.

[F3] Generalized eigenspaces are the kernels $\ker(T-\lambda I)^k$ [math:def-primary-component-and-generalised-eigenspace](https://alphabetamath.cc/item/def-primary-component-and-generalised-eigenspace).

[F4] The complexification is $\mathbb C\otimes_{\mathbb R}\mathbb R^m$ with real embedding $v\mapsto1\otimes v$ [math:def-complexification-of-a-real-vector-space](https://alphabetamath.cc/item/def-complexification-of-a-real-vector-space), and a real operator $T$ extends as $T_{\mathbb C}(z\otimes v)=z\otimes T(v)$ [math:def-complexification-of-a-real-linear-map](https://alphabetamath.cc/item/def-complexification-of-a-real-linear-map).

[F5] The canonical conjugation is $\sigma(z\otimes v)=\overline z\otimes v$ [math:def-conjugation-and-real-structure-on-a-complex-vector-space](https://alphabetamath.cc/item/def-conjugation-and-real-structure-on-a-complex-vector-space). The fixed real form of a conjugation-invariant subspace $W$ is $W^\sigma$ [math:def-fixed-real-form-of-a-conjugation](https://alphabetamath.cc/item/def-fixed-real-form-of-a-conjugation).

## Proof

**Given:** The map, fixed point, finite integer regularity and conventions in the Statement.

**Goal:** Establish the translated local diffeomorphism and unchanged spectral data.

1.1 Translation $\tau$ has inverse $x\mapsto x-p$; both preserve distances, so they carry each open ball to an open ball of the same radius and preserve openness. In particular $V$ is open. Their first derivatives are identity maps and their higher derivatives vanish, as follows from the zero remainders for affine maps and then differentiating a constant derivative. [given, F2]

2.1 To check every required derivative, let $H:O\to\mathbb R^m$ be any $C^r$ map on an open set, and set $g(y)=H(a+y)+b$ on $O-a$. Its differentiability remainder equals $H(a+y+u)-H(a+y)-DH(a+y)u$, so $Dg(y)=DH(a+y)$. Inductively, if $D^jg(y)=D^jH(a+y)$ for $1\le j<r$, apply the same remainder identity to the Banach-valued map $D^jH$ to obtain $D^{j+1}g(y)=D^{j+1}H(a+y)$. Continuity of $g$ and each derivative follows from that of $H$ and $D^jH$: increments from $y$ to $y'$ become the equal increments from $a+y$ to $a+y'$, and the derivative-value norms are unchanged. Thus $g$ is $C^r$, including in the iterated operator norms. [F2, step 1.1]

3.1 Apply step 2.1 with $H=h$, $a=p$, and $b=-p$ to obtain that $f$ is $C^r$. For any $q\in U$, choose an open neighbourhood $N\subseteq U$ on which $h$ has a $C^r$ inverse $k:h(N)\to N$, with $h(N)$ open. Then $f$ maps $N-p$ bijectively onto $h(N)-p$, with inverse $z\mapsto k(p+z)-p$. Step 2.1 applied to $k$ proves that inverse is $C^r$, and step 1.1 makes both domains open. This proves local diffeomorphism at every $q-p\in V$. Also $f(0)=h(p)-p=0$. [given, step 1.1, step 2.1]

4.1 The chain rule and the identity derivatives of translation give $Df(0)=I\,Dh(p)\,I=Dh(p)$. [F1, step 1.1, step 3.1]

5.1 Since the real operators are equal, their complexifications are equal by the formula in [F4]. Hence for every $\lambda\in\mathbb C$ and integer $k\ge1$ the powers $(Df(0)_{\mathbb C}-\lambda I)^k$ and $(Dh(p)_{\mathbb C}-\lambda I)^k$ and their kernels agree. Thus the generalized eigenspaces, their conjugation-invariant sums, and the fixed real forms of those sums coincide. The fixed forms are regarded in the original real space: writing a tensor as $1\otimes x+i\otimes y$ shows that being fixed by $\sigma$ forces $y=0$, since $v\mapsto1\otimes v$ is an embedding. This also verifies the stated real-subspace convention. [step 4.1, F3, F4, F5] ∎
