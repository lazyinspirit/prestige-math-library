---
id: thm-gaussian-rangefinder-expected-spectral-error
kind: theorem
title: Expected spectral error for real and normalized complex Gaussian range finders
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
deps: [thm-real-gaussian-rangefinder-expected-spectral-error, lem-wide-gaussian-pseudoinverse-spectral-moments-and-tail, lem-randomized-rangefinder-deterministic-svd-partition-error, alg-gaussian-randomized-range-finder]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Halko, Martinsson, and Tropp, Theorem 10.6 and its complex-case discussion"
      url: "https://users.oden.utexas.edu/~pgm/Pubs/2010_HMT_random_review.pdf"
    - title: "Martinsson and Tropp, Randomized Numerical Linear Algebra: Foundations & Algorithms, Theorem 11.5"
      url: "https://arxiv.org/pdf/2002.01387"
verification:
  precheck: pass
---

## Statement

Let $A\in F^{m\times n}$ be fixed, where $F=\mathbb R$ or $\mathbb C$. Let
$k\ge2$, $p\ge2$, $\ell=k+p\le\min(m,n)$, and draw $\Omega$ with iid
standard real entries if $F=\mathbb R$ or normalized complex entries if
$F=\mathbb C$. If $Q$ is an orthonormal basis of $\operatorname{Ran}(A\Omega)$,
then
$$\mathbb E\|A-QQ^*A\|_2\le
\left(1+\sqrt{\frac{k}{p-1}}\right)\sigma_{k+1}
+\frac{e\sqrt{k+p}}{p}\left(\sum_{j>k}\sigma_j^2\right)^{1/2}.$$
This preserves the normalized-complex convention $\mathbb E|\Omega_{ij}|^2=1$.

## Facts & Assumptions

**Given:** The fixed finite matrix and the real or normalized-complex Gaussian draw under the stated $k,p,\ell$ constraints.

[F1] The real-field statement with the displayed constants is proved in [[thm-real-gaussian-rangefinder-expected-spectral-error]].

## Proof

The real branch is the theorem [F1]. The proof below records that complete branch; the complex branch remains a construction escalation and is not asserted as proved here.

1.1 For $F=\mathbb R$, all hypotheses and constants coincide with [F1], which proves the claimed expected bound. [given, F1]

2.1 Steps 1.1 covers the real-field branch. [step 1.1] ∎

## Construction escalation

For $F=\mathbb C$, the deterministic partition bound and normalized-complex pseudoinverse moment/tail estimates are locally available, but the scaled-product estimate is not. The remaining needed supplier is a complete proof of
$$\mathbb E\|SGT\|_2\le\|S\|_2\|T\|_F+\|S\|_F\|T\|_2$$
for fixed compatible complex $S,T$ and iid normalized complex Gaussian $G$, or a different complete argument yielding the exact stated expectation. Proposed supplier ID: `lem-normalized-complex-scaled-gaussian-product-expectation`. The real covariance-comparison proof does not transfer to complex phases; Chevet's retrieved proof incurs a $\sqrt2$ factor. This item remains escalated until that exact complex supplier or an exact alternative proof is completed. No complex theorem acceptance is claimed.
