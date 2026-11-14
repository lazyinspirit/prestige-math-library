---
id: lem-author-e8d79981fdee-one-jump-dimension
kind: lemma
domain: mathematics
title: One-jump span in the nine-dimensional lowering model
status: draft
origin: session
deps:
  - def-qec-prereq-finite-operator-conventions
  - lem-author-e8d79981fdee-low-spin-support
  - lem-author-e8d79981fdee-distinct-exponential-profiles
  - lem-qec-prereq-trajectory-dyson-expansion
  - math:cor-inner-product-induces-a-norm
  - math:cor-finite-dimensional-normed-spaces-are-banach
  - math:cor-linear-maps-with-finite-dimensional-domain-are-bounded
  - math:lem-exponential-series-of-a-bounded-operator
  - math:def-linear-combination-and-span
  - math:def-dimension
  - math:def-complex-exponential
  - math:lem-cauchy-product-of-absolutely-convergent-complex-series
dependency_roles:
  def-qec-prereq-finite-operator-conventions: mathematical-premise
  lem-author-e8d79981fdee-low-spin-support: mathematical-premise
  lem-author-e8d79981fdee-distinct-exponential-profiles: mathematical-premise
  lem-qec-prereq-trajectory-dyson-expansion: mathematical-premise
  math:cor-inner-product-induces-a-norm: mathematical-premise
  math:cor-finite-dimensional-normed-spaces-are-banach: mathematical-premise
  math:cor-linear-maps-with-finite-dimensional-domain-are-bounded: mathematical-premise
  math:lem-exponential-series-of-a-bounded-operator: mathematical-premise
  math:def-linear-combination-and-span: mathematical-premise
  math:def-dimension: mathematical-premise
  math:def-complex-exponential: mathematical-premise
  math:lem-cauchy-product-of-absolutely-convergent-complex-series: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 3
formulation_deps:
  - def-qec-prereq-finite-operator-conventions
  - lem-author-e8d79981fdee-low-spin-support
  - lem-qec-prereq-trajectory-dyson-expansion
  - math:lem-exponential-series-of-a-bounded-operator
  - math:def-linear-combination-and-span
  - math:def-dimension
argument_deps:
  - def-qec-prereq-finite-operator-conventions
  - lem-author-e8d79981fdee-low-spin-support
  - lem-author-e8d79981fdee-distinct-exponential-profiles
  - lem-qec-prereq-trajectory-dyson-expansion
  - math:cor-inner-product-induces-a-norm
  - math:cor-finite-dimensional-normed-spaces-are-banach
  - math:cor-linear-maps-with-finite-dimensional-domain-are-bounded
  - math:lem-exponential-series-of-a-bounded-operator
  - math:def-linear-combination-and-span
  - math:def-dimension
  - math:def-complex-exponential
  - math:lem-cauchy-product-of-absolutely-convergent-complex-series
---

## Statement

Consider the purely finite-matrix model on $\mathbb C^9$ with the specified orthonormal basis $e_{J,m}$, $J=0,1,2$, $m=-J,\ldots,J$, using the finite operator and adjoint conventions. Let $\gamma>0$, $\Delta\in\mathbb R$, and $E_0,E_1,E_2\in\mathbb R$. For $J=1,2$, let $b_{J,m,q}$ be the normalized downward coefficients of the low-spin support lemma. Define $H e_{J,m}=(E_J+\Delta Jm)e_{J,m}$. For each $q\in\{-1,0,1\}$, define $L_q$ by $L_qe_{J,m}=\sqrt\gamma b_{J,m,q}e_{J-1,m+q}$ when $J\in\{1,2\}$ and $|m+q|\leq J-1$, and by $L_qe_{J,m}=0$ otherwise, including $J=0$; extend these basis assignments complex-linearly. Put $G=-iH-\sum_{q=-1}^1L_q^\dagger L_q/2$, $D(u)=e^{uG}$. At every $t>0$, the complex linear span of $D(t-s)L_qD(s)$ for $q=-1,0,1$, $0<s<t$, has dimension six if $\Delta=0$, and twelve if $\Delta\ne0$.

## Statement references

[[def-qec-prereq-finite-operator-conventions]]

[[lem-author-e8d79981fdee-low-spin-support]]

[[lem-author-e8d79981fdee-distinct-exponential-profiles]]

[[lem-qec-prereq-trajectory-dyson-expansion]]

[[math:lem-exponential-series-of-a-bounded-operator]]

[[math:def-linear-combination-and-span]]

[[math:def-dimension]]

## Facts & Assumptions

[F1] The coefficients are nonzero at every allowed downward entry and their squared sums equal one. [[lem-author-e8d79981fdee-low-spin-support]]

[F2] Distinct complex exponential profiles on any positive-length interval are independent. [[lem-author-e8d79981fdee-distinct-exponential-profiles]]

[F3] The one-jump amplitude in the finite GKSL expansion is $D(t-s)L_qD(s)$. [[lem-qec-prereq-trajectory-dyson-expansion]]

[F4] The specified orthonormal coordinates identify operators with complex matrices; the adjoint is the conjugate transpose, and products use matrix multiplication. [[def-qec-prereq-finite-operator-conventions]]

[F5] An inner product on a complex vector space induces the norm $\|x\|=\sqrt{\langle x,x\rangle}$. [[math:cor-inner-product-induces-a-norm]]

[F6] A real or complex normed space admitting an ordered basis of finite length is Banach. [[math:cor-finite-dimensional-normed-spaces-are-banach]]

[F7] A linear map between normed spaces over the same scalar field is bounded when its domain admits an ordered basis of finite length. [[math:cor-linear-maps-with-finite-dimensional-domain-are-bounded]]

[F8] For a bounded linear operator $A$ on a real or complex Banach space, $e^{uA}=\sum_{n=0}^\infty u^nA^n/n!$ converges absolutely in operator norm for real $u$, and these exponentials satisfy $e^{uA}e^{vA}=e^{(u+v)A}$ and $e^{0A}=I$. [[math:lem-exponential-series-of-a-bounded-operator]]

[F9] In a complex vector space, the span of a family is the smallest complex linear subspace containing it. The dimension over $\mathbb C$ of a space with a finite basis is the number of vectors in such a basis. [[math:def-linear-combination-and-span]] [[math:def-dimension]]

[F10] For $z\in\mathbb C$, write $e^z=\exp z=\sum_{n=0}^\infty z^n/n!$, using the complex exponential defined by its everywhere-convergent power series. [[math:def-complex-exponential]]

[F11] If $\sum a_n=A$ and $\sum b_n=B$ converge absolutely in $\mathbb C$, their Cauchy product with coefficients $c_n=\sum_{k=0}^n a_kb_{n-k}$ converges absolutely to $AB$. [[math:lem-cauchy-product-of-absolutely-convergent-complex-series]]

## Proof

**Given:** The finite data and hypotheses in the Statement.

**Goal:** Establish the asserted complex span dimensions.

1.1 In the matrix conventions [F4], the zero assignments exclude every forbidden transition. Orthogonality of the nonzero outputs at fixed $q$ and [F1] give $\sum_qL_q^\dagger L_q=\gamma P_{\rm exc}$, where $P_{\rm exc}$ projects onto $J=1,2$. Thus $Ge_{J,m}=g_{J,m}e_{J,m}$, where $g_{0,0}=-iE_0$ and $g_{J,m}=-\gamma/2-i(E_J+\Delta Jm)$ for $J=1,2$. The real diagonal entries of $H$ make it Hermitian, and the three $L_q$ are finite matrices, as required by [F3]. [given, F1, F3, F4, algebra]

2.1 Give $X=\mathbb C^9$ the induced norm $\|x\|_2=\sqrt{\sum_{J,m}|x_{J,m}|^2}$. This is a complex norm by [F4] and [F5], and the specified nine-vector ordered basis makes $X$ Banach by [F6]. Matrix multiplication makes $G:X\to X$ complex-linear, so [F7] makes it bounded. Apply [F8] with $A=G$. Since $G^ne_{J,m}=g_{J,m}^ne_{J,m}$ for every $n\geq0$, evaluating its partial sums on $e_{J,m}$ and passing to the limit gives $D(u)e_{J,m}=e^{ug_{J,m}}e_{J,m}$ for real $u$; evaluation is continuous because $\|Be_{J,m}\|_2\leq\|B\|$ in the induced operator norm. For the scalar series, apply [F5]--[F8] to $\mathbb C$ with basis $(1)$ and the complex-linear map $M_z(w)=zw$. Since $\|M_z^n\|=|z|^n$, [F8] at real parameter $1$ gives absolute convergence of $\sum z^n/n!$, and evaluation of the operator partial sums at $1$ identifies their limit with $e^z$ in [F10]. The group identity for $M_z$ at real parameters $1,-1$ gives $e^ze^{-z}=1$. For arbitrary complex $z,w$, both scalar series converge absolutely by this specialization, so [F11] applies with $a_n=z^n/n!$ and $b_n=w^n/n!$. Its coefficient is $c_n=\sum_{k=0}^n z^kw^{n-k}/(k!(n-k)!)=(z+w)^n/n!$ by finite binomial expansion. Therefore $e^ze^w=\sum_{n=0}^\infty(z+w)^n/n!=e^{z+w}$ by [F10]. [F4, F5, F6, F7, F8, F10, F11, step 1.1, algebra]

3.1 Each allowed $(J,m)\to(J-1,m+q)$ coordinate of [F3] is $\sqrt\gamma b_{J,m,q}e^{g_{J-1,m+q}t}e^{(g_{J,m}-g_{J-1,m+q})s}$, with nonzero prefactor. Indeed step 2.1 evaluates the two diagonal propagators, its scalar product identity combines their factors, and [F1] together with $\gamma>0$ makes the remaining coefficient nonzero. [given, F1, F3, F4, step 1.1, step 2.1, algebra]

4.1 For a fixed $q$ there is one $J=1$ entry, namely $m=-q$, with exponent of real part $-\gamma/2$. There are three $J=2$ entries, with $m=-1-q,-q,1-q$, each with exponent $-i(E_2-E_1+\Delta(m-q))$ of real part zero. At $\Delta=0$ the latter three share one exponent, distinct from the $J=1$ exponent by its real part, giving dimension two by [F2]. At $\Delta\ne0$ their imaginary parts are distinct, and all four exponents are distinct, giving dimension four. Different $q$ have disjoint matrix-unit supports: the union of bases for their spans is independent and spans the full family. Its size gives dimension six or twelve in the sense of [F9]. [F1, F2, F4, F9, step 1.1, step 3.1, algebra] ∎
