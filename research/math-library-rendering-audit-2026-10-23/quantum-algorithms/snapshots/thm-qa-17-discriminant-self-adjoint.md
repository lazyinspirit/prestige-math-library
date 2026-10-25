---
id: thm-qa-17-discriminant-self-adjoint
kind: theorem
title: "The Szegedy discriminant is self-adjoint and contractive"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 3
deps:
  - def-qa-17-szegedy-transition-isometry
  - thm-adjoint-exists-and-is-unique-in-finite-dimension
  - thm-bessel-inequality-and-finite-parseval-identity
  - thm-of-square-roots
  - def-self-adjoint-and-normal-endomorphism
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - thm-operator-norm-is-the-largest-singular-value
  - def-qa-17-finite-stochastic-kernel
  - def-qa-17-finite-reversible-chain
  - def-inner-product-space
  - lem-inner-product-pairing-is-nondegenerate-and-norm-is-homogeneous
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, §§18.2–18.3"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §8.2"
      url: "https://arxiv.org/pdf/1907.09415"
---
## Statement

For every finite row-stochastic kernel, the map $T$ of [[def-qa-17-szegedy-transition-isometry]] satisfies $T^*T=I$ and is an isometry, and the matrix entries of $D=T^*ST$ are

$$D_{xy}=\sqrt{P_{xy}P_{yx}}.$$

Hence $D$ is real symmetric, self-adjoint, and $\|D\|\le1$. If $(X,P,\pi)$ is also finite reversible, then

$$D=\operatorname{diag}(\sqrt\pi)\,P\,\operatorname{diag}(1/\sqrt\pi).$$

Every eigenvalue of $D$ is real and belongs to $[-1,1]$. The empty state set has the zero endomorphism and empty spectrum; the similarity assertion is only made when a positive stationary probability vector is supplied.

## Facts & Assumptions

**Given:** A finite set $X$, a row-stochastic $P$, the product-basis inner product, and the maps $T,S,D$ defined in [[def-qa-17-szegedy-transition-isometry]]. A reversible specialization additionally supplies $\pi_x>0$, $\pi P=\pi$, and detailed balance.

[F1] [[def-qa-17-szegedy-transition-isometry]]: $T|x\rangle=|x\rangle\otimes\sum_y\sqrt{P_{xy}}|y\rangle$, $S|x,y\rangle=|y,x\rangle$, and $D=T^*ST$.

[F2] [[def-qa-17-finite-stochastic-kernel]]: $P_{xy}\ge0$ and $\sum_yP_{xy}=1$ for every row.

[F3] [[thm-adjoint-exists-and-is-unique-in-finite-dimension]]: $T^*$ is the unique linear map satisfying $\langle Tv,w\rangle=\langle v,T^*w\rangle$.

[F4] [[def-self-adjoint-and-normal-endomorphism]]: an endomorphism is self-adjoint when it equals its adjoint.

[F5] [[thm-bessel-inequality-and-finite-parseval-identity]]: an orthonormal basis satisfies $\|u\|^2=\sum_i|\langle u,e_i\rangle|^2$, and every finite orthonormal list satisfies Bessel's inequality.

[F6] [[thm-of-square-roots]]: every nonnegative real has a unique nonnegative square root.

[F7] [[def-qa-17-finite-reversible-chain]]: detailed balance is $\pi_xP_{xy}=\pi_yP_{yx}$ and every $\pi_x>0$.

[F8] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]] and [[thm-operator-norm-is-the-largest-singular-value]]: the operator norm is the maximum over unit vectors, and that maximum exists in finite dimension.

[F9] [[def-inner-product-space]] and [[lem-inner-product-pairing-is-nondegenerate-and-norm-is-homogeneous]]: sesquilinearity extends equality of basis pairings to all vectors, and a vector pairing to zero with every vector is zero.

[F10] [[def-inner-product-space]]: for the root inner product, scalar multiplication is linear in the first argument and conjugate-linear in the second.

## Proof

1.1 If $X=\varnothing$, the domain and codomain are zero spaces, so $T^*T=I_0$ and $D$ is the zero endomorphism. Assume now $X\ne\varnothing$. For basis labels $x,x'$, the first register gives $\langle T|x\rangle,T|x'\rangle\rangle=0$ when $x\ne x'$, while for $x=x'$ the value is $\sum_yP_{xy}=1$ by [F2]. Hence the images of the orthonormal basis are orthonormal, which by expansion of arbitrary vectors proves $T$ is an isometry. Moreover, for all $x,x'$, [F3] gives $\langle |x\rangle,T^*T|x'\rangle=\langle T|x\rangle,T|x'\rangle=\langle |x\rangle,|x'\rangle$. Sesquilinearity extends this equality to pairings against every vector; conjugate symmetry and nondegeneracy [F9] then give $T^*T|x'\rangle=|x'\rangle$. Therefore $T^*T=I$. [F1, F2, F3, F9, algebra]

2.1 With the linear-first root inner product, the matrix entry is $D_{xy}=\langle D e_y,e_x\rangle_{\mathrm{root}}=\overline{\langle e_x,D e_y\rangle_{\mathrm{root}}}=\overline{\langle T e_x,S T e_y\rangle_{\mathrm{root}}}$ by [F3]. Expanding the two row states, only $|x,y\rangle$ overlaps, with real coefficient $\sqrt{P_{xy}P_{yx}}$; hence $D_{xy}=\sqrt{P_{xy}P_{yx}}$. [F1, F2, F3, F6, step 1.1, algebra]

2.2 For any $w$ in the product space, Parseval in the domain basis and [F3] give $\|T^*w\|^2=\sum_x|\langle T^*w,|x\rangle\rangle|^2=\sum_x|\langle w,T|x\rangle\rangle|^2$. The vectors $T|x\rangle$ are orthonormal by step 1.1, so Bessel's inequality [F5] makes this sum at most $\|w\|^2$. [F1, F3, F5, step 1.1]

3.1 The formula in step 2.1 is unchanged by exchanging $x,y$ and is real, so $D$ is represented by a real symmetric matrix in the orthonormal label basis. Therefore $D^*=D$ and $D$ is self-adjoint by [F4]. [F4, step 2.1, algebra]

3.2 If $X=\varnothing$, then the domain is zero and [F8] gives $\|D\|=0$. Otherwise, for every unit vector $v$, $\|Dv\|=\|T^*STv\|\le\|STv\|=\|Tv\|=1$, using step 2.2, the swap's basis-permutation norm preservation, and step 1.1. Taking the maximum over the nonempty unit sphere proves $\|D\|\le1$; [F8] ensures the finite-dimensional maximum exists. [F1, F8, step 1.1, step 2.2, algebra]

4.1 If $v\ne0$ and $Dv=\lambda v$, self-adjointness gives $\lambda\|v\|^2=\langle Dv,v\rangle=\langle v,Dv\rangle=\overline\lambda\|v\|^2$, so $\lambda$ is real by [F10]. Step 3.2, applied after scaling $v$ to a unit vector, gives $|\lambda|\|v\|=\|Dv\|\le\|v\|$; hence $|\lambda|\le1$. [F4, F10, step 3.1, step 3.2, algebra]

5.1 In the reversible case, detailed balance and $\pi_y>0$ give $P_{yx}=\pi_xP_{xy}/\pi_y$. Since $P_{xy}\ge0$, step 2.1 becomes $D_{xy}=P_{xy}\sqrt{\pi_x/\pi_y}$, exactly the $(x,y)$ entry of $\operatorname{diag}(\sqrt\pi)P\operatorname{diag}(1/\sqrt\pi)$. [F2, F6, F7, step 2.1, algebra] ∎
