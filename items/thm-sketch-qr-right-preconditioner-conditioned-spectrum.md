---
id: thm-sketch-qr-right-preconditioner-conditioned-spectrum
kind: theorem
title: An embedded QR right preconditioner has controlled singular values
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: sketched-least-squares-and-subspace-embeddings
dependency_level: 1
deps:
  - def-sketch-qr-right-preconditioner
  - def-oblivious-l2-subspace-embedding
  - def-full-reduced-and-column-pivoted-computational-qr-factorisations
  - thm-successive-householder-or-givens-transformations-produce-full-and-reduced-qr-with-operation-counts
  - thm-singular-value-decomposition
  - thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David P. Woodruff, Sketching as a Tool for Numerical Linear Algebra,
        §2.6"
      url: "https://arxiv.org/pdf/1411.4357"
    - title: "Michael W. Mahoney, Randomized Algorithms for Matrices and Data, §4.3"
      url: "https://www.math.ucdavis.edu/~strohmer/courses/270/RandLA.pdf"
verification:
  precheck: pass
---

## Statement

Let $n,m,d\ge1$ with $n,m\ge d$, let $A\in\mathbb K^{n\times d}$ have full column rank, and let
$0<\varepsilon<1$, and suppose the particular matrix $S$ is an
$\varepsilon$-subspace embedding for $\operatorname{Ran}(A)$. A reduced
QR factorization $SA=QR$ exists and has nonsingular $R$, so the
preconditioner $P_S=R^{-1}$ of
[[def-sketch-qr-right-preconditioner]] is defined. Its right-preconditioned
matrix satisfies
$$
\frac1{\sqrt{1+\varepsilon}}\le\sigma_{\min}(AP_S)\le\sigma_{\max}(AP_S)\le\frac1{\sqrt{1-\varepsilon}},\qquad \kappa_2(AP_S):=\frac{\sigma_{\max}(AP_S)}{\sigma_{\min}(AP_S)}\le\sqrt{\frac{1+\varepsilon}{1-\varepsilon}}.
$$

## Facts & Assumptions

**Given:** Full-column-rank $A$, an $\varepsilon$-embedding $S$ on $\operatorname{Ran}(A)$, and $0<\varepsilon<1$.

[F1] On the embedded subspace, $(1-\varepsilon)\|x\|_2^2\le\|Sx\|_2^2\le(1+\varepsilon)\|x\|_2^2$ for every $x\in\operatorname{Ran}(A)$ ([[def-oblivious-l2-subspace-embedding]]).

[F2] A reduced QR factorization has $SA=QR$, $Q^*Q=I_d$, and upper-triangular $R$; Householder or Givens steps construct one for every finite $SA$ ([[def-full-reduced-and-column-pivoted-computational-qr-factorisations]], [[thm-successive-householder-or-givens-transformations-produce-full-and-reduced-qr-with-operation-counts]]).

[F3] Singular values give the minimum and maximum expansion of a finite matrix on unit vectors, and condition number here is defined as their positive ratio ([[thm-singular-value-decomposition]], [[thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]]).

## Proof

**Given:** The hypotheses in the Statement.

1.1 If $y\in\mathbb K^d$ is nonzero, full column rank gives $Ay\ne0$; then [F1] gives $\|SAy\|_2^2\ge(1-\varepsilon)\|Ay\|_2^2>0$. Thus $SA$ has full column rank. The reduced QR factorization in [F2] exists. If $Rv=0$, then $SAv=QRv=0$; injectivity of $SA$ forces $v=0$, so $R$ is nonsingular and $P_S=R^{-1}$ is defined. [F1, F2, given, algebra]

2.1 For any $y\in\mathbb K^d$, $SAP_Sy=QRR^{-1}y=Qy$, so $\|SAP_Sy\|_2^2=\|Qy\|_2^2=\|y\|_2^2$ by [F2]. Since $AP_Sy\in\operatorname{Ran}(A)$, [F1] yields $(1-\varepsilon)\|AP_Sy\|_2^2\le\|y\|_2^2\le(1+\varepsilon)\|AP_Sy\|_2^2$. [F1, F2, step 1.1, algebra]

3.1 For every unit $y$, step 2.1 implies $1/\sqrt{1+\varepsilon}\le\|AP_Sy\|_2\le1/\sqrt{1-\varepsilon}$. By [F3], the minimum and maximum of these values over the unit sphere are $\sigma_{\min}(AP_S)$ and $\sigma_{\max}(AP_S)$, respectively. This proves both singular-value bounds. [F3, step 2.1, algebra]

4.1 The lower bound in step 3.1 is positive, so the ratio defining $\kappa_2$ is valid. Dividing the upper singular-value bound by the lower one gives $\kappa_2(AP_S)\le\sqrt{(1+\varepsilon)/(1-\varepsilon)}$. [step 3.1, algebra] ∎
