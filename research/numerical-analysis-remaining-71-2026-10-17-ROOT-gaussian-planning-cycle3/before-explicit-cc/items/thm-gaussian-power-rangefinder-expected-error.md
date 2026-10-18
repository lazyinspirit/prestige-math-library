---
id: thm-gaussian-power-rangefinder-expected-error
kind: theorem
title: Expected real and normalized complex Gaussian power-rangefinder error
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 7
deps: [thm-real-gaussian-power-rangefinder-expected-error, thm-gaussian-rangefinder-expected-spectral-error, thm-randomized-power-rangefinder-error-transfer, alg-randomized-power-subspace-iteration-with-qr]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Halko, Martinsson, and Tropp, Corollary 10.10"
      url: "https://users.oden.utexas.edu/~pgm/Pubs/2010_HMT_random_review.pdf"
    - title: "Martinsson and Tropp, Corollary 11.9"
      url: "https://arxiv.org/pdf/2002.01387"
verification:
  precheck: pass
---

## Statement

Let $A\in F^{m\times n}$, $F=\mathbb R$ or $\mathbb C$, with the same
$k\ge2$, $p\ge2$, $\ell=k+p\le\min(m,n)$ and field-normalized Gaussian
draws as in [[thm-gaussian-rangefinder-expected-spectral-error]]. For an
integer $q\ge0$, let $Q$ be the basis returned by
[[alg-randomized-power-subspace-iteration-with-qr]] on $A,\Omega,q$. Equivalently,
for $B=(AA^*)^qA$, $\operatorname{Ran}(Q)=\operatorname{Ran}(B\Omega)$. The corresponding
singular-value bound
$$
\mathbb E\|(I-QQ^*)A\|_2\le
\left[
\left(1+\sqrt{\frac{k}{p-1}}\right)\sigma_{k+1}^{2q+1}
+\frac{e\sqrt{k+p}}{p}
\left(\sum_{j>k}\sigma_j^{2(2q+1)}\right)^{1/2}
\right]^{1/(2q+1)}.
$$

## Facts & Assumptions

**Given:** The fixed matrix, Gaussian field convention, $k,p,\ell$ constraints, and an integer $q\ge0$.

[F1] The real-field powered bound is proved under these hypotheses ([[thm-real-gaussian-power-rangefinder-expected-error]]).

## Proof

The real branch is proved by [F1]. The complex branch is retained as part of the approved field scope and is blocked by the same unresolved complex scaled-Gaussian product estimate as the base expectation theorem.

1.1 For $F=\mathbb R$, [F1] gives the displayed bound. [given, F1]

2.1 Steps 1.1 covers the real-field branch. [step 1.1] ∎

## Construction escalation

For $F=\mathbb C$, the power-transfer theorem [[thm-randomized-power-rangefinder-error-transfer]] is complete, but the required base result [[thm-gaussian-rangefinder-expected-spectral-error]] remains escalated. After that base theorem has an accepted complex branch, applying the transfer to $B=(AA^*)^qA$ yields this displayed bound. Its unresolved proposed supplier is `lem-normalized-complex-scaled-gaussian-product-expectation`, which must prove the exact complex product bound or an alternative exact expected-error argument. This theorem remains escalated, with no complex acceptance claim.
