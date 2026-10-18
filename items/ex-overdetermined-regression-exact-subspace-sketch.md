---
id: ex-overdetermined-regression-exact-subspace-sketch
kind: example
title: An exact two-row sketch for a three-row regression problem
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: sketched-least-squares-and-subspace-embeddings-examples
dependency_level: 3
deps:
  - def-oblivious-l2-subspace-embedding
  - alg-sketch-and-solve-least-squares
  - thm-sketch-and-solve-exact-minimizer
  - thm-sketch-and-solve-residual-guarantee
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "David P. Woodruff, Sketching as a Tool for Numerical Linear Algebra,
        §2.5, Theorem 21"
      url: "https://arxiv.org/pdf/1411.4357"
    - title: "Michael W. Mahoney, Randomized Algorithms for Matrices and Data, §4.2"
      url: "https://www.math.ucdavis.edu/~strohmer/courses/270/RandLA.pdf"
verification:
  precheck: pass
---

## Example

Let $A=(1,1,1)^T$, $b=e_1$, and let $S\in\mathbb R^{2\times3}$
have rows $q_1^T=(1,1,1)/\sqrt3$ and
$q_2^T=(2,-1,-1)/\sqrt6$. Compute the original and sketched least-squares
minimizers and residuals.

## Facts & Assumptions

**Given:** The matrices above and an exact-arithmetic sketch-and-solve execution that converges.

[F1] The sketch is an $\varepsilon$-embedding for a subspace when it preserves every squared norm there within factors $1\pm\varepsilon$ ([[def-oblivious-l2-subspace-embedding]]).

[F2] A converged exact sketch-and-solve execution returns a minimizer of the sketched least-squares objective ([[thm-sketch-and-solve-exact-minimizer]]).

[F3] If the embedding subspace includes $\operatorname{Ran}(A)$ and $b$, the exact residual bound follows from [[thm-sketch-and-solve-residual-guarantee]].

## Verification

1.1 Direct calculation gives $\|q_1\|_2=\|q_2\|_2=1$ and $q_1^Tq_2=0$. Also $A=\sqrt3q_1$ and $b=(1/\sqrt3)q_1+\sqrt{2/3}\,q_2$, so $\operatorname{span}(A,b)=\operatorname{span}(q_1,q_2)$. The rows of $S$ form an orthonormal basis of this subspace; hence $S$ preserves its squared norms exactly and [F1] holds for every $0<\varepsilon<1$. [F1, algebra]

1.2 For real $x$, $\|Ax-b\|_2^2=(x-1)^2+x^2+x^2=3(x-1/3)^2+2/3$. Thus the original minimizer is $x_*=1/3$ and its residual squared is $2/3$. [algebra]

1.3 The sketch gives $SA=(\sqrt3,0)^T$ and $Sb=(1/\sqrt3,\sqrt{2/3})^T$. Therefore $\|SAx-Sb\|_2^2=3(x-1/3)^2+2/3$; by [F2], $\widehat x=1/3$, with sketched residual squared $2/3$. Substitution into $A\widehat x-b=(-2/3,1/3,1/3)^T$ gives physical residual squared $2/3$ as well. [F2, algebra]

2.1 The fixed-subspace embedding hypothesis in [F3] is satisfied by step 1.1, and the computed minimizer in step 1.3 satisfies $\|A\widehat x-b\|_2^2=2/3\le((1+\varepsilon)/(1-\varepsilon))(2/3)$ for $0<\varepsilon<1$. [F1, F3, step 1.1, step 1.2, step 1.3, algebra] ∎
