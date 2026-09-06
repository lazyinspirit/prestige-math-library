---
id: ex-an-a2-verma-weight-space-of-dimension-two
kind: example
title: "A two-dimensional A2 Verma weight space"
status: draft
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-verma-module, thm-pbw-model-of-a-verma-module, thm-existence-and-uniqueness-of-the-shapovalov-form]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups, Exercise 8.15(iv)"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
---

## Example

In type $A_2$, choose Chevalley generators and $f_{12}=[f_2,f_1]$, with PBW
order $f_1,f_{12},f_2$.  At weight $\lambda-\alpha_1-\alpha_2$ the basis is
$f_1f_2v_\lambda,f_{12}v_\lambda$.  Writing $\lambda_i=\lambda(h_i)$, its
Shapovalov matrix is

$$\begin{pmatrix}\lambda_2(\lambda_1+1)&-\lambda_2\\-\lambda_2&\lambda_1+\lambda_2\end{pmatrix},$$

and its determinant is $\lambda_1\lambda_2(\lambda_1+\lambda_2+1)$.

## Facts & Assumptions

**Given:** The induced module [[def-verma-module]], the prescribed PBW basis from [[thm-pbw-model-of-a-verma-module]], and its normalized contravariant form [[thm-existence-and-uniqueness-of-the-shapovalov-form]].

## Verification

**Proof technique:** direct.

1.1 PBW gives exactly the two displayed monomials.  The Chevalley relations give $e_1f_1f_2v_\lambda=(\lambda_1+1)f_2v_\lambda$, $e_1f_{12}v_\lambda=-f_2v_\lambda$, $e_{12}f_1f_2v_\lambda=-\lambda_2v_\lambda$, and $e_{12}f_{12}v_\lambda=(\lambda_1+\lambda_2)v_\lambda$.  Contravariance, together with $S_\lambda(f_2v_\lambda,f_2v_\lambda)=\lambda_2$, gives the four displayed matrix entries. [given, algebra]

2.1 Taking the $2\times2$ determinant gives $\lambda_2(\lambda_1+1)(\lambda_1+\lambda_2)-\lambda_2^2=\lambda_1\lambda_2(\lambda_1+\lambda_2+1)$. [given, algebra] ∎
