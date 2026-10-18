---
id: ex-power-rangefinder-loses-small-mode-without-qr
kind: example
title: A small mode is lost by an unorthogonalized power pass
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [alg-randomized-power-subspace-iteration-with-qr]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Halko, Martinsson, and Tropp, Finding Structure with Randomness, Algorithm 4.4 and Remark 4.3"
      url: "https://users.oden.utexas.edu/~pgm/Pubs/2010_HMT_random_review.pdf"
    - title: "Martinsson and Tropp, Randomized Numerical Linear Algebra: Foundations & Algorithms, §11.6"
      url: "https://arxiv.org/pdf/2002.01387"
verification:
  precheck: pass
---

## Example

Use the explicitly defined thresholded dyadic arithmetic that rounds any
computed scalar of magnitude below $2^{-70}$ to zero and computes all other
operations exactly. For $A=\operatorname{diag}(1,2^{-10})$, $\Omega=I_2$,
and power count $q=4$, the unorthogonalized product $(AA^*)^qA\Omega$ loses
its second mode, while the deterministic QR iteration instructions from
[[alg-randomized-power-subspace-iteration-with-qr]], executed with this
supplied $\Omega$ and the stated arithmetic, retain both coordinate modes.
Here the Gaussian sampling step is omitted: this is a fixed-sketch arithmetic
example, not a probabilistic claim or a general stability guarantee.

## Facts & Assumptions

**Given:** The diagonal matrix, identity start block, power count, and the stated scalar rounding rule.

[F1] After its sampling step, the power procedure inserts an orthonormal-basis computation after each application of $A^*$ and $A$ ([[alg-randomized-power-subspace-iteration-with-qr]]).

## Verification

1.1 Without intermediate QR, the second diagonal entry of $(AA^*)^qA\Omega$ is $(2^{-10})^{2q+1}=2^{-90}<2^{-70}$, whereas the leading entry is $1$. The stated threshold therefore rounds the second column to zero, leaving rank $1$. [given, algebra]

2.1 With QR after each multiplication, the first sample is $A\Omega=\operatorname{diag}(1,2^{-10})$. Both columns are nonzero and orthogonal; because $2^{-10}>2^{-70}$, exact column normalization yields $Q_0=I_2$. Each subsequent $A^*Q$ and $A\widetilde Q$ is again $\operatorname{diag}(1,2^{-10})$, so the same QR step returns $I_2$ and neither mode is rounded away. [step 1.1, F1, given, algebra] ∎
