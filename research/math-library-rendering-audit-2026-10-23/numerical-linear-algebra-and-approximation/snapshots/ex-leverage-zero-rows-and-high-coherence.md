---
id: ex-leverage-zero-rows-and-high-coherence
kind: example
title: Zero leverage rows and a maximally coherent one-dimensional design
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: sketched-least-squares-and-subspace-embeddings-examples
dependency_level: 3
deps:
  - def-oblivious-l2-subspace-embedding
  - def-subspace-leverage-scores
  - lem-subspace-leverage-score-identities
  - alg-leverage-score-row-sampling-sketch
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
        §2.4"
      url: "https://arxiv.org/pdf/1411.4357"
    - title: "Michael W. Mahoney, Randomized Algorithms for Matrices and Data, §4.1"
      url: "https://www.math.ucdavis.edu/~strohmer/courses/270/RandLA.pdf"
verification:
  precheck: pass
---

## Example

Take $Q=e_1=(1,0,0)^T\in\mathbb R^{3\times1}$. Compute its leverage
scores and compare one exact leverage-proportional sample with one uniform
row sample. Define the coherence here by
$\mu(U)=(n/d)\max_i\ell_i(U)$.

## Facts & Assumptions

**Given:** The one-column orthonormal matrix $Q=e_1$, the sampling procedure, and one sample with replacement.

[F1] Leverage scores are row squared norms of an orthonormal basis and sum to the subspace dimension ([[def-subspace-leverage-scores]], [[lem-subspace-leverage-score-identities]]).

[F2] Sampling probability $\pi_i$ is allowed when $\pi_i\ge\beta\ell_i/d$; a selected row is rescaled by $1/\sqrt{m\pi_i}$, with replacement ([[alg-leverage-score-row-sampling-sketch]]).

[F3] Embedding on a subspace means squared norms lie in $[1-\varepsilon,1+\varepsilon]$ times their original values ([[def-oblivious-l2-subspace-embedding]]).

## Verification

1.1 The row norms of $Q$ give $(\ell_0,\ell_1,\ell_2)=(1,0,0)$, agreeing with the sum $d=1$ in [F1]. Thus the last two rows have zero leverage and $\mu(U)=(3/1)\cdot1=3$, the largest possible value since each leverage score is at most one. [F1, algebra]

2.1 With exact probabilities $\pi=(1,0,0)$ and one sample, [F2] selects row zero with probability one and returns $S=e_1^T$. Then $SQ=1$, so the only unit vectors in $\operatorname{Ran}(Q)$ retain squared norm exactly one. The zero-leverage rows are never sampled. [F2, step 1.1, algebra]

3.1 Uniform probabilities $\pi=(1/3,1/3,1/3)$ satisfy the lower bound in [F2] with $\beta=1/3$. With one sample, $SQ=\sqrt3$ if row zero is drawn, and $SQ=0$ if row one or two is drawn. For $\varepsilon=1/2$, [F3] requires squared norm in $[1/2,3/2]$, which contains neither outcome; hence this one-row uniform sample fails with probability one, while the exact leverage sample in step 2.1 succeeds with probability one. [F2, F3, step 2.1, algebra] ∎
