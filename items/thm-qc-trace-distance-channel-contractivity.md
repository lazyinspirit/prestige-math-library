---
id: thm-qc-trace-distance-channel-contractivity
kind: theorem
title: "Trace Distance Channel Contractivity"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 7
deps: ["def-qc-trace-distance", "def-qc-quantum-channel", "thm-qc-measurement-variation-at-most-trace-distance", "thm-qc-helstrom-binary-discrimination", "thm-qc-kraus-choi-equivalence", "thm-qc-trace-preserving-kraus-normalization", "thm-trace-of-ab-equals-trace-of-ba", "thm-non-negative-operator-characterisations"]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
      locator: "§3.1.1–3.1.2, measurement characterization and trace-distance contractivity."
---

## Statement

For every finite-dimensional quantum channel $\Phi:\mathcal L(H)\to\mathcal L(K)$ and every pair of density operators $\rho,\sigma$ on $H$,
$$D(\Phi(\rho),\Phi(\sigma))\le D(\rho,\sigma).$$

## Facts & Assumptions

**Given:** Nonzero finite-dimensional complex Hilbert spaces $H,K$, a completely positive trace-preserving linear map $\Phi$, and states $\rho,\sigma\in\mathcal D(H)$.

[L1] For a Hermitian trace-zero difference of states, $D$ is the maximum $\frac12\sum_a|p_a-q_a|$ over finite POVMs; each POVM's total variation is at most $D$ ([[def-qc-trace-distance]], [[thm-qc-measurement-variation-at-most-trace-distance]], [[thm-qc-helstrom-binary-discrimination]]). The QC06 measurement and Helstrom results are draft suppliers in this same batch.

[L2] A channel has a finite Kraus representation $\Phi(X)=\sum_jK_jXK_j^*$ and trace-preserving Kraus operators satisfy $\sum_jK_j^*K_j=I$ ([[def-qc-quantum-channel]], [[thm-qc-kraus-choi-equivalence]], [[thm-qc-trace-preserving-kraus-normalization]]). The QC05 bodies are present as drafts; their exact outputs remain subject to cross-batch reconciliation.

## Proof


1.1 Let $\{E_a\}_{a\in\mathcal A}$ be any finite POVM on $K$ and choose Kraus operators from [L2]. Define $F_a=\sum_jK_j^*E_aK_j$. For every $x\in H$, $\langle F_ax,x\rangle=\sum_j\langle E_aK_jx,K_jx\rangle\ge0$, so $F_a$ is nonnegative. Completeness follows from $\sum_aF_a=\sum_jK_j^*(\sum_aE_a)K_j=\sum_jK_j^*K_j=I_H$ by [L2]. Thus $\{F_a\}$ is a finite POVM on $H$. [given, L1, L2, algebra]

2.1 For each outcome, trace cyclicity and the Kraus formula give $\operatorname{tr}(\Phi(\rho)E_a)=\sum_j\operatorname{tr}(K_j\rho K_j^*E_a)=\operatorname{tr}(\rho F_a)$, and likewise for $\sigma$. Their output total variation is therefore the total variation of the pulled-back POVM and is at most $D(\rho,\sigma)$ by [L1]. Maximizing over output POVMs gives $D(\Phi(\rho),\Phi(\sigma))$ by the Helstrom formula in [L1], proving contractivity, including $\rho=\sigma$. [given, L1, L2, step 1.1, algebra] ∎

