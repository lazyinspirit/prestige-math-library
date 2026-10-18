---
id: cex-embedding-the-column-space-alone-does-not-control-ls-residual
kind: counterexample
title: Embedding Ran(A) alone does not control the sketch-and-solve residual
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: sketched-least-squares-and-subspace-embeddings-examples
dependency_level: 1
deps:
  - def-oblivious-l2-subspace-embedding
  - alg-sketch-and-solve-least-squares
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: "David P. Woodruff, Sketching as a Tool for Numerical Linear Algebra, §2.5, Theorem 21"
      url: "https://arxiv.org/pdf/1411.4357"
    - title: "Michael W. Mahoney, Randomized Algorithms for Matrices and Data, §4.2"
      url: "https://www.math.ucdavis.edu/~strohmer/courses/270/RandLA.pdf"
---

## Statement refuted

False claim: If $S$ is an $\varepsilon$-subspace embedding for
$\operatorname{Ran}(A)$, then every exact sketch least-squares minimizer
$\widehat x$ satisfies
$$
\|A\widehat x-b\|_2^2\le\frac{1+\varepsilon}{1-\varepsilon}\min_x\|Ax-b\|_2^2.
$$

## Facts & Assumptions

**Given:** The claim above and the matrices in the Counterexample below.

[F1] An $\varepsilon$-embedding preserves every squared norm on its stated fixed subspace within factors $1\pm\varepsilon$ ([[def-oblivious-l2-subspace-embedding]]).

[F2] Sketch-and-solve minimizes $\|S(Ax-b)\|_2$ on its exact converged branch ([[alg-sketch-and-solve-least-squares]]).

## Counterexample

1.1 In $\mathbb R^2$, set $A=e_1=(1,0)^T$, $b=e_1+e_2=(1,1)^T$, and $S=(1\quad1)$. For every $x\in\mathbb R$, $S(Ax)=x=\|Ax\|_2$ in norm, so [F1] holds on $\operatorname{Ran}(A)=\operatorname{span}(e_1)$ with $\varepsilon=1/4$ (indeed with zero distortion). [F1, algebra]

1.2 The sketched residual is $S(Ax-b)=x-2$, so its unique minimizer is $\widehat x=2$ by [F2]. The original squared residual is $\|Ax-b\|_2^2=(x-1)^2+1$, whose minimum is $1$ at $x_*=1$; at $\widehat x=2$ it equals $2$. [F2, algebra]

2.1 At $\varepsilon=1/4$, the claimed factor is $(1+\varepsilon)/(1-\varepsilon)=5/3$, but $2>5/3\cdot1$. Thus preserving $\operatorname{Ran}(A)$ alone does not imply the residual guarantee; the lost direction is the component of $b$ orthogonal to $\operatorname{Ran}(A)$. [step 1.1, step 1.2, algebra] ∎
