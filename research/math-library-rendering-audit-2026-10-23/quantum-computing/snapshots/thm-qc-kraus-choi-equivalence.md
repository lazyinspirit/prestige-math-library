---
id: thm-qc-kraus-choi-equivalence
kind: theorem
title: "Kraus and Choi characterizations of complete positivity"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-real-and-complex-inner-product-space, def-qc-completely-positive-map, def-qc-choi-matrix, def-qc-kraus-representation, lem-qc-complete-positivity-implies-choi-positivity, lem-qc-positive-choi-matrix-yields-kraus-operators, thm-qc-kraus-map-completely-positive]
justified_by: []
proof_strategy: direct
dependency_level: 6
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information (2018), §2.2.2"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "John Preskill, Quantum Computation, Chapter 3, §§3.2.6 and 3.3.1–3.3.2"
      url: "https://www.preskill.caltech.edu/ph219/chap3_15.pdf"
---

## Statement

Let $H,K$ be finite-dimensional complex inner-product spaces, fix an ordered
orthonormal basis $\mathcal B$ of $H$, and let
$\Phi:\mathcal L(H)\to\mathcal L(K)$ be complex-linear. The following are
equivalent: $\Phi$ is completely positive; $J_{\mathcal B}(\Phi)$ is
non-negative; and $\Phi$ has a finite Kraus representation.

## Facts & Assumptions

**Given:** Finite-dimensional complex inner-product spaces $H,K$, an ordered
orthonormal input basis $\mathcal B$, and a complex-linear map $\Phi$ between
their endomorphism spaces.

[F1] [[lem-qc-complete-positivity-implies-choi-positivity]] (same-page
result): complete positivity implies $J_{\mathcal B}(\Phi)\succeq0$.

[F2] [[lem-qc-positive-choi-matrix-yields-kraus-operators]] (same-page
result): $J_{\mathcal B}(\Phi)\succeq0$ implies a finite Kraus representation.

[F3] [[thm-qc-kraus-map-completely-positive]] (same-page result): a finite
Kraus representation implies complete positivity.

[A1] [[def-qc-completely-positive-map]]: complete positivity is the
positivity-preserving property of every finite ancillary block amplification.

[L1] [[def-qc-choi-matrix]] (same-page definition): the Choi convention is
$J_{\mathcal B}(\Phi)=\sum_{i,j}E_{ij}\otimes\Phi(E_{ij})$, input factor
first and output factor second.

[L2] [[def-qc-kraus-representation]] (same-page definition): a finite family
$(K_a)$ represents $\Phi$ when $\Phi(X)=\sum_aK_aXK_a^\dagger$ for every
$X$.

## Proof


1.1 Suppose $\Phi$ is completely positive. By [F1], its Choi matrix is non-negative. Suppose instead that its Choi matrix is non-negative. By [F2], $\Phi$ has a finite Kraus representation. These give the first two implications in the cycle. [given, F1, F2, A1, L1]

2.1 If $\Phi$ has a finite Kraus representation in the sense of [L2], [F3] implies that $\Phi$ is completely positive. This closes the cycle, so each of the three stated conditions implies the other two. All statements use the same fixed input basis and the input-first/output-second Choi convention of [L1]. [given, F3, L1, L2, step 1.1] ∎

