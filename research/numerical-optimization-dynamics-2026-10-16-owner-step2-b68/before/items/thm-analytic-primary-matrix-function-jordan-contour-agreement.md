---
id: thm-analytic-primary-matrix-function-jordan-contour-agreement
kind: theorem
title: "Jordan, contour, similarity, and normal-functional-calculus formulas agree"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-analytic-primary-matrix-function
  - lem-finite-hermite-interpolation-for-jordan-data
  - thm-jordan-form-exists-iff-the-characteristic-polynomial-splits
  - thm-fundamental-theorem-of-algebra-minimum-modulus-proof
  - thm-similarity-classification-by-jordan-canonical-form
  - def-complex-contours-reversal-concatenation-and-closedness
  - def-functional-calculus-for-a-normal-endomorphism
  - thm-spectral-resolution-and-polynomial-spectral-projections
  - thm-global-cauchy-integral-formula-homology
  - cor-global-cauchy-formula-higher-derivatives
  - def-complex-chain-and-cycle
  - def-integration-and-index-of-complex-chain
  - def-null-homologous-and-homologous-complex-cycles
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Jan Zur, Matrix Functions, TU Berlin full lecture notes"
      url: "https://www.tu.berlin/fileadmin/www/40000110/Dauer-Wimis/Jan_Zur/matrix_functions_zur.pdf"
    - title: "Nicholas J. Higham, Functions of Matrices, Handbook of Linear Algebra, Chapter 17"
      url: "https://eprints.maths.manchester.ac.uk/2109/1/fm2_final_njh.pdf"
---

## Statement

Let $A\in\mathbb C^{n\times n}$, $n\ge1$, and let $f$ be holomorphic on an
open set $\Omega$ containing $\sigma(A)$. The Jordan expression in
[[def-analytic-primary-matrix-function]] is independent of the chosen Jordan
representation and satisfies $f(XAX^{-1})=Xf(A)X^{-1}$ for every invertible
$X$. It equals $p(A)$ for the unique Hermite polynomial $p$ matching the
derivatives of $f$ at the Jordan eigenvalue data; in particular, it commutes
with $A$. For holomorphic $f,g$ on $\Omega$, it also satisfies
$(fg)(A)=f(A)g(A)$. If $A$ is normal, it equals the spectral functional calculus
[[def-functional-calculus-for-a-normal-endomorphism]].

If $T$ is block upper triangular with diagonal blocks $T_{ii}$ and $f$ is
holomorphic on a neighborhood of $\sigma(T)$, then $f(T)$ is block upper
triangular and its diagonal blocks are $f(T_{ii})$.

For the contour formula, let $\Gamma$ be a finite complex cycle with trace in
$\Omega$, null-homologous in $\Omega$, disjoint from $\sigma(A)$, and with
index $n(\Gamma,\lambda)=1$ for every $\lambda\in\sigma(A)$. Then, with the
matrix line integral taken entry by entry,
$$f(A)=\frac{1}{2\pi i}\int_\Gamma f(z)(zI-A)^{-1}\,dz.$$

## Facts & Assumptions

**Given:** The matrix $A$, the open set $\Omega$, the holomorphic function $f$,
and, when the contour clause is used, a cycle $\Gamma$ satisfying the stated
trace, null-homology, disjointness, and index hypotheses.

[F1] The Jordan expression uses the block
$\sum_{k<d}f^{(k)}(\lambda)N_d^k/k!$ and is the proposed definition of $f(A)$
([[def-analytic-primary-matrix-function]]).

[F2] Arbitrary finite derivative data at distinct nodes have a unique
polynomial representative of degree less than the sum of the multiplicities
([[lem-finite-hermite-interpolation-for-jordan-data]]).

[F3] Every complex finite-dimensional matrix has a Jordan form, and its Jordan
block multiset is invariant under similarity
([[thm-jordan-form-exists-iff-the-characteristic-polynomial-splits]],
[[thm-fundamental-theorem-of-algebra-minimum-modulus-proof]],
[[thm-similarity-classification-by-jordan-canonical-form]]).

[F4] For a null-homologous cycle, the higher Cauchy formula is
$n(\Gamma,z)f^{(k)}(z)=\frac{k!}{2\pi i}\int_\Gamma
f(\zeta)(\zeta-z)^{-k-1}\,d\zeta$
([[cor-global-cauchy-formula-higher-derivatives]]); the chain integral is the
finite sum of its contour integrals
([[def-integration-and-index-of-complex-chain]]).

[F5] A normal endomorphism has a spectral resolution by orthogonal
eigenspace projections ([[thm-spectral-resolution-and-polynomial-spectral-projections]]);
its spectral functional calculus is $\sum_\lambda f(\lambda)P_\lambda$
([[def-functional-calculus-for-a-normal-endomorphism]]).

## Proof


1.1 Let $C$ be any finite complex square matrix whose eigenvalues lie in $\Omega$, let $\lambda_1,\ldots,\lambda_s$ be its distinct eigenvalues, and let $m_i$ be the largest Jordan-block size at $\lambda_i$. By [F2], there is a unique polynomial $p$ of degree less than $\sum_i m_i$ with $p^{(k)}(\lambda_i)=f^{(k)}(\lambda_i)$ for $k<m_i$. [F2, F3, choose]

1.2 On a block $J_d(\lambda)=\lambda I+N$, the finite geometric identity $(zI-J_d(\lambda))^{-1} =\sum_{k=0}^{d-1}\frac{N^k}{(z-\lambda)^{k+1}}$ holds whenever $z\ne\lambda$, since multiplication by $(z-\lambda)I-N$ cancels adjacent terms and $N^d=0$. [F3, algebra]

1.3 On each Jordan block, the finite products of the Taylor jets of $f$ and $g$ have coefficients given by the Leibniz rule. Since $N_d^d=0$, terms of degree at least $d$ vanish, and the resulting block is exactly the jet of $fg$. Conjugating block by block proves $(fg)(A)=f(A)g(A)$. [F1, algebra]

2.1 For each Jordan block $J_d(\lambda_i)=\lambda_iI+N_d$, the exact finite Taylor expansion of $p$ at $\lambda_i$ gives $p(J_d(\lambda_i))=\sum_{k<d}p^{(k)}(\lambda_i)N_d^k/k!$ because $N_d^d=0$. Since $d\le m_i$, these derivatives equal those of $f$; hence $p(C)$ equals the Jordan expression in [F1]. [F1, step 1.1, algebra]

2.2 Apply [F4] to each eigenvalue $\lambda$ with index one. Integrating the finite sum in step 1.2 term by term therefore gives $\frac{1}{2\pi i}\int_\Gamma f(z)(zI-J_d(\lambda))^{-1}\,dz =\sum_{k=0}^{d-1}\frac{f^{(k)}(\lambda)}{k!}N^k.$ The integral is a finite sum of scalar integrals, so entrywise linearity justifies the operation. [F4, step 1.2, algebra]

3.1 By [F3], any other Jordan representation has the same block multiset, so the same nodes and maximal sizes determine the same unique polynomial $p$. Thus its Jordan expression is again $p(C)$. For invertible $X$, $(XCX^{-1})^k=XC^kX^{-1}$ for every $k$, so $p(XCX^{-1})=Xp(C)X^{-1}$. This proves independence and similarity invariance for every $C$. [F2, F3, step 2.1, algebra]

3.2 Let $T$ be block upper triangular and let $p$ be the Hermite polynomial obtained by applying steps 1.1–1.2 with $C=T$. Every power of $T$ is block upper triangular, with $i$th diagonal block $T_{ii}^k$; hence $p(T)$ has diagonal blocks $p(T_{ii})$. If a polynomial annihilates $T$, its diagonal blocks show that it also annihilates every $T_{ii}$, so the minimal polynomial of each $T_{ii}$ divides that of $T$. Therefore the Jordan block sizes required for $T_{ii}$ are no larger than those used for $T$, and the Hermite conditions give $p(T_{ii})=f(T_{ii})$. Since $f(T)=p(T)$ by steps 1.1–1.2 applied to $T$, the claimed block structure and diagonal blocks follow. [F1, F2, step 1.1, step 1.2, step 2.1, algebra]

4.1 Conjugating the blockwise identity in step 2.2 by the Jordan basis matrix $Z$ and using the definition in [F1] proves the contour formula. If $A$ is normal, [F5] supplies an orthonormal eigenbasis and all Jordan blocks have size one; the same formula is $\sum_\lambda f(\lambda)P_\lambda$, which is the stated spectral functional calculus. [F1, F5, step 2.1, step 2.2, algebra] ∎
