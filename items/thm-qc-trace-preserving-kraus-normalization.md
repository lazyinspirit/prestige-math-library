---
id: thm-qc-trace-preserving-kraus-normalization
kind: theorem
title: "Trace preservation is Kraus normalization"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-real-and-complex-inner-product-space, def-adjoint-of-a-linear-map-between-inner-product-spaces, def-trace-of-an-endomorphism, thm-trace-of-ab-equals-trace-of-ba, def-qc-kraus-representation, lem-qc-trace-pairing-nondegenerate, prop-trace-is-linear]
justified_by: []
proof_strategy: direct
dependency_level: 1
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information (2018), Theorem 2.26"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "John Preskill, Quantum Computation, Chapter 3, §3.2.1"
      url: "https://www.preskill.caltech.edu/ph219/chap3_15.pdf"
---

## Statement

Let $H,K$ be finite-dimensional complex inner-product spaces and let
$\Phi(X)=\sum_{a\in A}K_aXK_a^\dagger$ be a finite Kraus representation,
where each $K_a:H\to K$. The map $\Phi$ is trace-preserving on all of
$\mathcal L(H)$, meaning $\operatorname{tr}_K(\Phi(X))=\operatorname{tr}_H(X)$
for every $X\in\mathcal L(H)$, if and only if
$$\sum_{a\in A}K_a^\dagger K_a=I_H.$$

## Facts & Assumptions

**Given:** Finite-dimensional complex inner-product spaces $H,K$, a finite
family $K_a:H\to K$, and the indicated Kraus formula for every
$X\in\mathcal L(H)$.

[F1] [[def-qc-kraus-representation]]: a finite Kraus representation satisfies
$\Phi(X)=\sum_aK_aXK_a^\dagger$ on every input operator.

[F2] [[thm-trace-of-ab-equals-trace-of-ba]]: for $A:H\to K$ and $B:K\to H$,
$\operatorname{tr}_K(AB)=\operatorname{tr}_H(BA)$, including zero dimensions.

[F3] [[prop-trace-is-linear]]: trace is linear over finite sums.

[F4] [[lem-qc-trace-pairing-nondegenerate]]: if
$\operatorname{tr}_H(AX)=0$ for every $X\in\mathcal L(H)$, then $A=0$,
including $H=0$.

## Proof


1.1 Put $S=\sum_aK_a^\dagger K_a\in\mathcal L(H)$. For every $X\in\mathcal L(H)$, [F1], trace linearity [F3], and rectangular cyclicity [F2] give $\operatorname{tr}_K(\Phi(X))=\sum_a\operatorname{tr}_K(K_aXK_a^\dagger) =\sum_a\operatorname{tr}_H(K_a^\dagger K_aX)=\operatorname{tr}_H(SX)$. If $S=I_H$, this equals $\operatorname{tr}_H(X)$ for every $X$, so $\Phi$ is trace-preserving by the Statement. This includes an empty family when $H=0$, where $I_H=0$. [given, F1, F2, F3, algebra]

2.1 Conversely, suppose $\Phi$ is trace-preserving on all of $\mathcal L(H)$. The identity in step 1.1 gives $\operatorname{tr}_H((S-I_H)X)=0$ for every $X\in\mathcal L(H)$. Apply [F4] with $A=S-I_H$ to obtain $S-I_H=0$. Thus the normalization holds. In particular, if $H=0$ both sides are the unique zero endomorphism and the argument still applies. [given, step 1.1, F4, algebra] ∎

