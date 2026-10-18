---
id: lem-it-relative-modular-representation
kind: lemma
title: Relative modular representation of finite quantum relative entropy
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps: [def-it-finite-dimensional-quantum-relative-entropy, def-real-and-complex-inner-product-space, thm-non-negative-operator-characterisations, thm-non-negative-square-root-exists-and-is-unique, thm-trace-of-ab-equals-trace-of-ba, def-trace-of-an-endomorphism]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information, §5.2.3"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, arXiv:1106.1445v8, §11.8"
      url: "https://arxiv.org/pdf/1106.1445v8"
---

## Statement

Let $A,B$ be positive-definite operators on a nonzero finite-dimensional complex inner-product space $H$. On $\mathcal L(H)$, with Hilbert-Schmidt inner product $\langle X,Y\rangle_{\rm HS}:=\operatorname{tr}(XY^*)$, define $\Delta_{B,A}(X):=BXA^{-1}$. Then $\Delta_{B,A}$ is positive definite and

$$D(A\|B)=\langle(-\ln\Delta_{B,A})(A^{1/2}),A^{1/2}\rangle_{\rm HS}.$$

The logarithm of $\Delta_{B,A}$ is defined by its positive eigenvalues.

## Facts & Assumptions

**Given:** $H,A,B$ as in the Statement.

[F1] [[def-it-finite-dimensional-quantum-relative-entropy]]: for positive-definite $A,B$, $D(A\|B)=\operatorname{tr}(A\ln A)-\operatorname{tr}(A\ln B)$.

[F2] [[thm-non-negative-operator-characterisations]]: positive-definite operators have orthonormal eigenbases with positive eigenvalues.

[F3] [[thm-non-negative-square-root-exists-and-is-unique]]: $A$ has a positive-definite square root $A^{1/2}$.

[F4] [[thm-trace-of-ab-equals-trace-of-ba]]: trace is cyclic for compatible finite-dimensional maps.

[F5] [[def-real-and-complex-inner-product-space]]: the inner product is linear in its first argument and conjugate-linear in its second, so $E_{ji}x=\langle x,a_i\rangle b_j$ is linear.

## Proof

1.1 Choose orthonormal eigenbases $(a_i)$ and $(b_j)$ for $A$ and $B$, with eigenvalues $a_i>0$ and $b_j>0$, using [F2]. For each $i,j$ define $E_{ji}x:=\langle x,a_i\rangle b_j$. These linear matrix units form an orthonormal basis of $\mathcal L(H)$ for $\langle\cdot,\cdot\rangle_{\rm HS}$ by direct trace evaluation. They satisfy $BE_{ji}=b_jE_{ji}$ and $E_{ji}A^{-1}=a_i^{-1}E_{ji}$, so $\Delta_{B,A}E_{ji}=(b_j/a_i)E_{ji}$. Thus $\Delta_{B,A}$ is positive definite and $(-\ln\Delta_{B,A})(X)=-(\ln B)X+X(\ln A)$ by spectral calculus on this basis. [given, F2, F5, algebra, choose]

2.1 Applying the formula in step 1.1 to $A^{1/2}$ gives $\langle(-\ln\Delta_{B,A})(A^{1/2}),A^{1/2}\rangle_{\rm HS}=\operatorname{tr}(-A\ln B+A^{1/2}(\ln A)A^{1/2})$. By trace cyclicity [F4], the second trace is $\operatorname{tr}(A\ln A)$. The result equals $D(A\|B)$ by [F1], proving the identity. [F1, F3, F4, step 1.1, algebra] ∎

