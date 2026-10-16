---
id: def-qa-22-block-encoding
kind: definition
title: Finite block encoding
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 7
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
deps:
  - def-real-and-complex-inner-product-space
  - def-inner-product-norm
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - def-linear-isometry-and-orthogonal-or-unitary-operator
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - prop-adjoint-algebra
  - def-qc-register-and-computational-basis
  - def-qc-tensor-register-and-permutation
  - def-qc-circuit-denotational-semantics
  - def-qc-dirac-notation-conversion
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapters 28–29 (17 April 2025)
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: §29.1, displayed block-compression identity and rescaling note
    - title: András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond, Definition 43
      url: https://arxiv.org/pdf/1806.01838
      locator: §4.1, Definition 43 (PDF p. 40)
---

## Definition

Write $T^{\dagger}$ for the adjoint $T^*$ characterized by [[def-adjoint-of-a-linear-map-between-inner-product-spaces]]. Fix integers $m,n\ge1$, $a\ge0$, and $d\ge\max(m,n)$. On each coordinate space $\mathbb C^r$ use $\langle x,y\rangle_{\rm root}:=\sum_{q=1}^r x_q\overline{y_q}$, linear in the first argument. Put the ancilla register before the system register in every tensor product, and let $e_0=(1,0,\ldots,0)$ be the first standard basis vector in $\mathbb C^{2^a}$. For $A:\mathbb C^n\to\mathbb C^m$, choose as part of the data padding maps $E_{\rm in}:\mathbb C^n\to\mathbb C^d$ and $E_{\rm out}:\mathbb C^m\to\mathbb C^d$ satisfying $E_{\rm in}^{\dagger}E_{\rm in}=I_n$ and $E_{\rm out}^{\dagger}E_{\rm out}=I_m$. The default padding sends a coordinate vector to the same coordinates followed by zeros. Set $\widehat A:=E_{\rm out}AE_{\rm in}^{\dagger}:\mathbb C^d\to\mathbb C^d$.

Let $J_a:\mathbb C^d\to\mathbb C^{2^a}\otimes\mathbb C^d$ be $J_ax=e_0\otimes x$, where $e_0$ is the all-zero computational basis vector, and let $\Pi_a:=J_aJ_a^{\dagger}$. For a unitary $U$ on $\mathbb C^{2^a}\otimes\mathbb C^d$, its **projected block** is the endomorphism $B_U:=J_a^{\dagger}UJ_a$ of $\mathbb C^d$. It is not asserted to be unitary.

For $\alpha>0$ and $\varepsilon\ge0$, the tuple $(U,a,\alpha,\varepsilon,d,E_{\rm in},E_{\rm out})$ is an **$(\alpha,a,\varepsilon)$ block encoding of $A$** when $\alpha\ge\|A\|_{\rm op}$ and $\|B_U-\widehat A/\alpha\|_{\rm op}\le\varepsilon$. The exact case is $\varepsilon=0$. For square $A$, take $m=n=d$ and both embeddings equal to the identity. For rectangular $A$, the dimensions and embeddings remain part of the encoding data.

The equivalent projector notation identifies $B_U$ with the restriction of $\Pi_aU\Pi_a$ to $\operatorname{ran}(\Pi_a)$, transported to $\mathbb C^d$ by $J_a$; it does not regard $\Pi_aU\Pi_a$ as a unitary.

## Remarks

This item uses normalized compression error: its $\varepsilon$ corresponds to an unnormalized tolerance $\alpha\varepsilon$. In Gilyén et al., Definition 43, the stated condition is $\|A-\alpha B_U\|_{\rm op}\le\varepsilon_{\rm src}$, which implies $\|A\|_{\rm op}\le\alpha+\varepsilon_{\rm src}$; the local promise $\alpha\ge\|A\|_{\rm op}$ is additional in the approximate case. The choice of $\alpha\ge\|A\|_{\rm op}$ follows the exact rescaling convention in Childs, §29.1.

## Facts & Assumptions

**Given:** Finite coordinate spaces with their standard complex inner products, a unitary $U$ on $\mathbb C^{2^a}\otimes\mathbb C^d$, and the declared dimensions and embeddings above.

[F1] [[def-real-and-complex-inner-product-space]]: the complex inner product is linear in its first argument and its induced length is $\|x\|=\sqrt{\langle x,x\rangle}$.

[F2] [[def-inner-product-norm]]: the inner-product norm is the nonnegative square root of the diagonal pairing.

[F3] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: the operator norm on a nonzero finite-dimensional domain is the maximum of $\|Tx\|$ over unit vectors, and on the zero domain it is zero.

[F4] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]]: $\langle Tx,y\rangle=\langle x,T^*y\rangle$ for every $x,y$; this item writes $T^*$ as $T^{\dagger}$.

[F5] [[prop-adjoint-algebra]]: adjoints reverse composition and $(T^{\dagger})^{\dagger}=T$.

[F6] [[def-linear-isometry-and-orthogonal-or-unitary-operator]]: a unitary on a finite-dimensional complex inner-product space is an invertible linear isometry.

## Proof

1.1 Since $e_0$ is a unit vector, $J_a^{\dagger}J_a=I$ and $J_aJ_a^{\dagger}=\Pi_a$. Therefore $J_a^{\dagger}(\Pi_aU\Pi_a)J_a=J_a^{\dagger}UJ_a=B_U$ and $\Pi_aU\Pi_a=J_aB_UJ_a^{\dagger}$. Thus $J_a$ identifies the restriction of $\Pi_aU\Pi_a$ on its range with $B_U$. [given, F1, F4, F5, algebra]

1.2 The padding conditions give $E_{\rm in}^{\dagger}E_{\rm in}=I_n$ and $E_{\rm out}^{\dagger}E_{\rm out}=I_m$. Thus $P_{\rm in}:=E_{\rm in}E_{\rm in}^{\dagger}$ is a self-adjoint idempotent. For every $z$, $P_{\rm in}z$ and $(I-P_{\rm in})z$ are orthogonal, so $\|P_{\rm in}z\|^2\le\|z\|^2$. By [F4], $\|E_{\rm in}^{\dagger}z\|^2=\langle P_{\rm in}z,z\rangle=\|P_{\rm in}z\|^2$ and $\|E_{\rm in}x\|^2=\langle x,E_{\rm in}^{\dagger}E_{\rm in}x\rangle=\|x\|^2$. The same adjoint identity gives $\|E_{\rm out}y\|^2=\langle y,E_{\rm out}^{\dagger}E_{\rm out}y\rangle=\|y\|^2$. Thus the input adjoint is contractive and both padding maps preserve length. [given, F1, F2, F4, F5, algebra]

2.1 For $a=1$ and $U=X\otimes I_d$, where $X=\begin{pmatrix}0&1\\1&0\end{pmatrix}$, the displayed matrix satisfies $X^{\dagger}X=XX^{\dagger}=I$, so $U$ is unitary, but $\Pi_aU\Pi_a=0$. Hence the full projected operator need not be unitary. [given, F6, step 1.1, algebra]

3.1 For a unit $z\in\mathbb C^d$, if $E_{\rm in}^{\dagger}z\ne0$, normalize that vector in the maximum defining [F3]; if it is zero, its image under $A$ is zero. In either case, $\|E_{\rm out}AE_{\rm in}^{\dagger}z\|\le\|A\|_{\rm op}\|E_{\rm in}^{\dagger}z\|\le\|A\|_{\rm op}$, so $\|\widehat A\|_{\rm op}\le\|A\|_{\rm op}$. Conversely, for each unit $x\in\mathbb C^n$, $E_{\rm in}x$ is unit and $\|\widehat A E_{\rm in}x\|=\|E_{\rm out}Ax\|=\|Ax\|$. Taking suprema yields $\|\widehat A\|_{\rm op}=\|A\|_{\rm op}$ by [F3]. [step 1.2, F1, F2, F3, algebra] ∎
