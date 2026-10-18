---
id: lem-it-relative-modular-operator-identity
kind: lemma
title: The finite relative-modular operator identity
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-it-finite-dimensional-quantum-relative-entropy
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - def-trace-of-an-endomorphism
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - def-real-and-complex-inner-product-space
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information (2018), Chapter 5"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.double.5.pdf"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, second-edition prepublication v8 (2019)"
      url: "https://arxiv.org/pdf/1106.1445v8"
---

## Statement

Let $H$ be a nonzero finite-dimensional complex inner-product space with inner product linear in its first argument, and let $A,B\in\operatorname{End}(H)$ be positive definite. Equip $\operatorname{End}(H)$ with $\langle X,Y\rangle_{HS}:=\operatorname{tr}(XY^\dagger)$, define $L_B(X)=BX$ and $R_{A^{-1}}(X)=XA^{-1}$, and put $\Delta_{B,A}=L_BR_{A^{-1}}$. Then $\Delta_{B,A}$ is positive definite and
$$\langle(-\log\Delta_{B,A})A^{1/2},A^{1/2}\rangle_{HS}=D(A\Vert B).$$
All logarithms are the natural spectral logarithms on positive eigenvalues.

## Facts & Assumptions

**Given:** A nonzero finite-dimensional complex inner-product space $H$ and positive-definite endomorphisms $A,B$.

[F1] [[def-it-finite-dimensional-quantum-relative-entropy]]: when support inclusion holds, $D(A\|B)=\operatorname{tr}(A\ln A)-\operatorname{tr}(A\ln B)$, using natural spectral logarithms on the positive supports.

[F2] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: every normal finite-dimensional complex endomorphism has an orthonormal eigenbasis.

[F3] [[def-trace-of-an-endomorphism]]: the trace of a finite-dimensional endomorphism is basis-independent and is computed by the sum of its diagonal entries in any basis.

[F4] [[def-real-and-complex-inner-product-space]] and [[def-adjoint-of-a-linear-map-between-inner-product-spaces]]: the inner product is linear in the first argument and the adjoint satisfies $\langle Tx,y\rangle=\langle x,T^\dagger y\rangle$.

## Proof

1.1 Choose orthonormal eigenbases $(a_i)_i$ and $(b_j)_j$ with $Aa_i=\alpha_i a_i$ and $Bb_j=\beta_j b_j$, where all $\alpha_i,\beta_j>0$, using [F2]. Define the positive spectral square root by $A^{1/2}a_i=\sqrt{\alpha_i}a_i$: it is self-adjoint with positive eigenvalues and $(A^{1/2})^2=A$. This construction is basis-independent because on each $A$-eigenspace it is the scalar $\sqrt{\alpha_i}$ times the identity. Define $E_{ji}x=\langle x,a_i\rangle b_j$. The finite trace formula [F3] gives $\langle E_{ji},E_{\ell k}\rangle_{HS}=\delta_{j\ell}\delta_{ik}$, and the $E_{ji}$ span the endomorphisms, so they form an orthonormal basis for the Hilbert–Schmidt inner product. Moreover $\Delta_{B,A}(E_{ji})=B E_{ji} A^{-1}=(\beta_j/\alpha_i)E_{ji}$. Thus $\Delta_{B,A}$ is self-adjoint positive definite and its spectral logarithm acts on $E_{ji}$ by $\ln(\beta_j/\alpha_i)$. [given, F2, F3, F4, algebra, construct]

2.1 With the stated first-linear convention, the coefficient is $c_{ji}=\langle A^{1/2},E_{ji}\rangle_{HS}=\sqrt{\alpha_i}\langle a_i,b_j\rangle$, so $|c_{ji}|^2=\alpha_i|\langle a_i,b_j\rangle|^2$. Therefore the left side in the Statement is $\sum_{i,j}\alpha_i|\langle a_i,b_j\rangle|^2\ln(\alpha_i/\beta_j)$. Summing first over $j$ in the $\ln\alpha_i$ term gives $\operatorname{tr}(A\log A)$ by completeness of $(b_j)$; summing first over $i$ in the $\ln\beta_j$ term gives $\operatorname{tr}(A\log B)$ by expanding each $b_j$ in the $A$ eigenbasis. Their difference is $D(A\Vert B)$ by [F1], proving the identity. [given, F1, F2, F3, step 1.1, algebra] ∎
