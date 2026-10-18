---
id: thm-it-quantum-relative-entropy-nonnegative-equality
kind: theorem
title: Nonnegativity and equality for finite quantum relative entropy
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps: [def-it-finite-dimensional-quantum-relative-entropy, thm-it-quantum-relative-entropy-channel-data-processing, lem-it-finite-classical-kl-nonnegative-equality, lem-it-finite-povm-measurement-channel, def-qc-povm-and-outcome-law, thm-qc-povm-probabilities-normalize, cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases, def-qc-density-operator, def-non-negative-and-positive-operator, def-real-and-complex-inner-product-space, thm-non-negative-operator-characterisations, thm-natural-logarithm-laws]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information, Proposition 5.22"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, arXiv:1106.1445v8, Theorem 11.8.2"
      url: "https://arxiv.org/pdf/1106.1445v8"
---

## Statement

For density operators $\rho,\sigma$ on a finite-dimensional complex inner-product space,

$$D(\rho\|\sigma)\ge0,$$

with equality if and only if $\rho=\sigma$.

## Facts & Assumptions

**Given:** The states $\rho,\sigma$ in the Statement.

[F1] [[thm-it-quantum-relative-entropy-channel-data-processing]]: applying one quantum channel to both arguments cannot increase QRE.

[F2] [[lem-it-finite-povm-measurement-channel]]: every finite POVM gives a channel to a diagonal classical register with its stated outcome weights.

[F3] [[lem-it-finite-classical-kl-nonnegative-equality]]: finite classical relative entropy is non-negative and vanishes exactly for equal probability vectors.

[F4] [[def-qc-povm-and-outcome-law]]: a finite POVM is a non-negative operator family summing to the identity, and its state outcome weights are $\operatorname{tr}(\rho E_y)$.

[F5] [[thm-qc-povm-probabilities-normalize]]: finite POVM weights of a density operator form a probability vector.

[F6] [[def-non-negative-and-positive-operator]]: non-negative means self-adjoint with nonnegative quadratic form.


[F7] [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]: every finite-dimensional inner-product space has an orthonormal basis.

[F8] [[def-qc-density-operator]]: states are non-negative operators of trace one.

[F9] [[def-real-and-complex-inner-product-space]]: the inner product is linear in its first argument and conjugate-symmetric.

[F10] [[def-it-finite-dimensional-quantum-relative-entropy]]: if support inclusion holds, $D(A\|B)=\operatorname{tr}(A\ln A)-\operatorname{tr}(A\ln B)$.

[F11] [[thm-natural-logarithm-laws]]: $\ln1=0$.

## Proof

1.1 The singleton POVM $E_0=I_H$ is a finite POVM by [F4]. By [F8] the inputs have trace one, and [F2] sends each density operator to the scalar state $1$ on a one-dimensional register. The definition [F10] and $\ln1=0$ from [F11] give $D(1\|1)=0$, so applying [F1] yields $D(\rho\|\sigma)\ge0$. [given, F1, F2, F4, F5, F8, F10, F11, algebra]

1.2 Suppose $D(\rho\|\sigma)=0$ and choose any orthonormal basis $(e_j)_{j<d}$ of $H$ using [F7]. The rank-one maps $P_jx:=\langle x,e_j\rangle e_j$ are self-adjoint and satisfy $\langle P_jx,x\rangle=|\langle x,e_j\rangle|^2\ge0$ by [F9], so they are non-negative by [F6]. Their sum is $I_H$, so [F4] makes them a finite POVM; it has nonempty outcome set because $H\ne\{0\}$. By [F5], the outcome vectors $p_j=\operatorname{tr}(\rho P_j)$ and $q_j=\operatorname{tr}(\sigma P_j)$ are probability vectors. Data processing [F1] and classical KL nonnegativity [F3] give $0=D(\rho\|\sigma)\ge D(p\|q)\ge0$, so $p_j=q_j$ for every $j$. [given, F1, F3, F4, F5, F6, F7, F9, construct]

2.1 For any unit vector $v\in H$, extend $v$ to an orthonormal basis using [F7]. Step 1.2 applied to that basis gives $\langle\rho v,v\rangle=\langle\sigma v,v\rangle$; by homogeneity this equality holds for every $v$. Put $\Delta=\rho-\sigma$, which is self-adjoint by [F6], and $q(v)=\langle\Delta v,v\rangle$. Under the root convention [F9], expansion gives $4\langle\Delta x,y\rangle=q(x+y)-q(x-y)+i q(x+iy)-i q(x-iy)$. Since every $q(v)=0$, all matrix coefficients of $\Delta$ vanish, hence $\rho=\sigma$. [given, F6, F7, F9, step 1.2, algebra, choose]

3.1 Conversely, if $\rho=\sigma$, [F10] gives the support inclusion, and the two spectral logarithmic traces in the QRE definition agree, so $D(\rho\|\sigma)=0$. [given, F10, algebra] ∎
