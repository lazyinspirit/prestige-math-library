---
id: ex-local-trace-misses-disconnected-branch
kind: example
title: "A finite local trace misses a disconnected solution branch"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - alg-pseudo-arclength-continuation-with-certified-local-corrector
  - thm-augmented-residual-contraction-certificate
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

The smooth equation $F(x,\lambda)=x^2-1=0$ has two disconnected solution
components. A valid finite pseudo-arclength trace on one component cannot
certify that the other component has been found.

## Facts & Assumptions

**Given:** $F:\mathbb R^2\to\mathbb R$, $F(x,\lambda)=x^2-1$.

[F1] [[alg-pseudo-arclength-continuation-with-certified-local-corrector]]:
accepted section balls certify only local roots; a `finite-trace` status
makes no global branch-completeness claim.

[F2] [[thm-augmented-residual-contraction-certificate]]: an exact zero with
an invertible Jacobian and a sufficiently small ball satisfies the strict
contraction certificate with zero residual error.

## Verification

**Proof technique:** direct.

1.1 The equation factors as $(x-1)(x+1)=0$, so its complete solution set is $$S=(\{1\}\times\mathbb R)\cup(\{-1\}\times\mathbb R).$$ Each set is connected and open-and-closed relative to $S$, and the two sets are disjoint; therefore they are the two connected components of $S$. [given, algebra]

1.2 At $(1,0)$, $DF=[2\ 0]$ has rank $1$ and unit tangent $t=(0,1)$. Choose the section normal $\tau=(0,1)$ and step $h>0$. The augmented equation is $(x^2-1,\lambda-h)=0$, whose unique root in any ball of radius less than $1$ centered at $(1,h)$ is $(1,h)$. Its bordered derivative is $\begin{bmatrix}2&0\\0&1\end{bmatrix}$, so the local corrector is nonsingular. [given, algebra]

2.1 At the exact center $(1,h)$ the augmented residual is zero and the Jacobian is invertible. The augmented Jacobian is $2$-Lipschitz; with exact data, choose a radius $R<1/2$, set $\widehat\beta=1$, and use zero residual and derivative errors. Then $q=2R<1$ and $\beta\rho=0$, so [F2] certifies the unique local section root. The ball of radius $R<1$ also excludes the other root $( -1,h)$. [F2, step 1.2, given, choose, algebra]

3.1 The other component $\{-1\}\times\mathbb R$ contains no point of that local chart around $(1,0)$, and the accepted one-step trace contains no point with $x=-1$. Nevertheless both components satisfy $F=0$. By [F1], the finite trace correctly certifies its local step but cannot certify that the second component is absent or that all branches have been found. [F1, step 1.1, step 1.2, step 2.1, given] ∎
