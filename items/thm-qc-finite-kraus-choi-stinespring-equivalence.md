---
id: thm-qc-finite-kraus-choi-stinespring-equivalence
kind: theorem
title: "Finite channel, Kraus, Choi, and Stinespring equivalence"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-real-and-complex-inner-product-space, def-qc-quantum-channel, def-qc-choi-matrix, def-qc-kraus-representation, def-qc-isometric-stinespring-representation, def-qc-partial-trace, thm-qc-kraus-choi-equivalence, thm-qc-trace-preserving-kraus-normalization, thm-qc-choi-trace-preservation-condition, thm-qc-finite-stinespring-dilation, thm-qc-isometry-partial-trace-is-channel]
justified_by: []
proof_strategy: direct
dependency_level: 8
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information (2018), §§2.2.2–2.2.3"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "John Preskill, Quantum Computation, Chapter 3, §§3.2.6–3.3.2"
      url: "https://www.preskill.caltech.edu/ph219/chap3_15.pdf"
---

## Statement

Let $H,K$ be finite-dimensional complex inner-product spaces, fix an ordered
orthonormal basis $\mathcal B$ of $H$, and let
$\Phi:\mathcal L(H)\to\mathcal L(K)$ be complex-linear. The following four
conditions are equivalent:

1. $\Phi$ is a quantum channel.
2. $J_{\mathcal B}(\Phi)\succeq0$ and
   $\operatorname{Tr}_KJ_{\mathcal B}(\Phi)=I_H$.
3. $\Phi(X)=\sum_aK_aXK_a^\dagger$ for a finite family of maps
$K_a:H\to K$ with
   $\sum_aK_a^\dagger K_a=I_H$.
4. There are a finite-dimensional $E$ and an isometry $V:H\to K\otimes E$
   with $\Phi(X)=\operatorname{Tr}_E(VXV^\dagger)$ for every $X$.

The Choi order is input factor first, output factor second.

## Facts & Assumptions

**Given:** Finite-dimensional complex inner-product spaces $H,K$, an ordered orthonormal basis $\mathcal B$ of $H$, and a complex-linear map $\Phi$.

[F1] [[def-qc-quantum-channel]] (same-page definition): condition 1 means complete positivity and trace preservation.

[F2] [[thm-qc-kraus-choi-equivalence]] (same-page theorem): complete positivity is equivalent to Choi non-negativity and to existence of a finite Kraus representation.

[F3] [[thm-qc-trace-preserving-kraus-normalization]] (same-page theorem): trace preservation of a Kraus map is equivalent to $\sum_aK_a^\dagger K_a=I_H$.

[F4] [[thm-qc-choi-trace-preservation-condition]] (same-page theorem): for a completely positive $\Phi$, trace preservation is equivalent to $\operatorname{Tr}_KJ_{\mathcal B}(\Phi)=I_H$.

[F5] [[thm-qc-finite-stinespring-dilation]] (same-page theorem): every finite-dimensional channel has an isometric Stinespring representation.

[F6] [[thm-qc-isometry-partial-trace-is-channel]] (same-page theorem): every isometric Stinespring form is a channel.

[L1] [[def-qc-choi-matrix]] (same-page definition): $J_{\mathcal B}(\Phi)$ uses the fixed input basis and input-first/output-second tensor convention.

[L2] [[def-qc-isometric-stinespring-representation]] (same-page definition): an isometric dilation has the displayed partial-trace form.

## Proof


1.1 Condition 1 implies condition 2: its complete-positivity part and [F2] give $J_{\mathcal B}(\Phi)\succeq0$, while its trace-preservation part and [F4] give $\operatorname{Tr}_KJ_{\mathcal B}(\Phi)=I_H$. Conversely, condition 2 gives complete positivity by [F2] and trace preservation by [F4], hence condition 1 by [F1]. [given, F1, F2, F4, L1]

1.2 Conditions 1 and 3 are equivalent: by [F2], condition 1's complete positivity is equivalent to a finite Kraus representation, and by [F3] its trace-preservation clause is equivalent to the stated normalization. The same two results show condition 3 implies both clauses of condition 1. [given, F1, F2, F3, L1]

1.3 By [F5], condition 1 implies condition 4. By [F6], condition 4 implies condition 1. Thus condition 4 is equivalent to condition 1. [given, F5, F6, L2]

2.1 Steps 1.1, 1.2, and 1.3 connect each of conditions 2, 3, and 4 to condition 1 in both directions, so all four conditions are equivalent. Throughout, the Choi factor order remains the one in [L1], and the environment occupies the second factor of $K\otimes E$ in [L2]. [step 1.1, step 1.2, step 1.3, L1, L2] ∎

