---
id: ex-polynomial-projections-for-three-eigenvalues
kind: example
title: "Lagrange polynomials give the three eigenspace projections of a diagonalisable endomorphism"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-primary-projections-are-polynomials-in-the-endomorphism, thm-diagonalisability-eigenspace-direct-sum-criterion]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Keith Conrad, The Minimal Polynomial and Some Applications, Remark 4.12'
      url: 'https://kconrad.math.uconn.edu/blurbs/linmultialg/minpolyandappns.pdf'
pipeline_run: null
---

## Example

Let $T$ be diagonalisable with distinct eigenvalues $\lambda_0,\lambda_1,\lambda_2$. Put

$$e_i(x)=\prod_{j\ne i}\frac{x-\lambda_j}{\lambda_i-\lambda_j}.$$

Then $E_i=e_i(T)$ is projection onto $E_{\lambda_i}(T)$ along the other eigenspaces; the $E_i$ are pairwise orthogonal idempotents and $E_0+E_1+E_2=I$.

## Facts & Assumptions

**Given:** A diagonalisable $T$ with the three displayed distinct eigenvalues.

[L1] Distinct eigenspaces give a direct sum of the whole space ([[thm-diagonalisability-eigenspace-direct-sum-criterion]]).

[L2] Primary projections are polynomial expressions in $T$ obtained from the relevant congruences ([[cor-primary-projections-are-polynomials-in-the-endomorphism]]).

## Verification

**Proof technique:** direct.

1.1 The denominators are nonzero, and substitution gives $e_i(\lambda_j)=1$ for $i=j$ and $0$ otherwise. Hence $e_i(T)$ is identity on $E_{\lambda_i}(T)$ and zero on the other eigenspaces. [L1, L2, algebra]

2.1 The action on every summand in [L1] now gives $E_i^2=E_i$, $E_iE_j=0$ for $i\ne j$, and $\sum_iE_i=I$. [step 1.1, L1] ∎
