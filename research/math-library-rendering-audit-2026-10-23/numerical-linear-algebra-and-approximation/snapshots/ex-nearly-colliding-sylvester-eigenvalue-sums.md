---
id: ex-nearly-colliding-sylvester-eigenvalue-sums
kind: example
title: "Nearly colliding eigenvalue sums make a Sylvester solve sensitive"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-sylvester-operator-and-separation-number
  - thm-sylvester-unique-solvability-spectral-separation
  - thm-sylvester-residual-to-forward-error-bound
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Example

Let $\varepsilon=10^{-6}$, $A=\operatorname{diag}(1,2)$, $B=\operatorname{diag}(-1+\varepsilon,0)$, and $C=E_{11}$. The Sylvester equation $AX+XB=C$ has a unique solution, its separation is $\varepsilon$, and $X=\varepsilon^{-1}E_{11}$. Thus a residual of size $\delta$ in the $E_{11}$ direction produces a solution error of size $\delta/\varepsilon$.

## Facts & Assumptions

**Given:** The matrices and $\varepsilon$ in the Example.

[F1] [[def-sylvester-operator-and-separation-number]]: $\mathcal S_{A,B}(X)=AX+XB$ and $\operatorname{sep}(A,-B)=\sigma_{\min}(\mathcal S_{A,B})$ in the Frobenius inner product.

[F2] [[thm-sylvester-unique-solvability-spectral-separation]]: Unique solvability holds exactly when $\sigma(A)\cap(-\sigma(B))=\varnothing$.

[F3] [[thm-sylvester-residual-to-forward-error-bound]]: $\|X-\widehat X\|_F\le\|C-(A\widehat X+\widehat X B)\|_F/\operatorname{sep}(A,-B)$ when the solution is unique.

## Verification


1.1 The eigenvalue sums are $\varepsilon,1,1+\varepsilon,2$, all nonzero, so [F2] gives a unique solution. In the Frobenius-orthonormal matrix-unit basis, $\mathcal S_{A,B}(E_{ij})=(a_{ii}+b_{jj})E_{ij}$; its singular values are therefore the four absolute eigenvalue sums, and [F1] gives $\operatorname{sep}(A,-B)=\varepsilon$. [given, F1, F2, algebra]

2.1 The $(i,j)$ equation is $(a_{ii}+b_{jj})x_{ij}=c_{ij}$. Since $C=E_{11}$, the only nonzero entry is $x_{11}=1/\varepsilon$, hence $X=\varepsilon^{-1}E_{11}$ and $\|X\|_F=1/\varepsilon=10^6$. [given, step 1.1, algebra]

3.1 If the right-hand side is perturbed by $\delta E_{11}$, the solution changes by $\delta/\varepsilon E_{11}$, whose Frobenius norm is $|\delta|/\varepsilon$. This attains the separation factor in [F3], verifying the stated sensitivity exactly. [F1, F3, step 2.1, algebra] ∎
