---
id: thm-qc-fidelity-data-processing-and-equality
kind: theorem
title: "Fidelity Data Processing"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 8
deps: ["def-qc-fidelity", "def-qc-quantum-channel", "thm-qc-fidelity-purification-characterization", "thm-qc-finite-stinespring-dilation", "def-qc-partial-trace", "thm-qc-partial-trace-characterization-and-basis-independence", "def-qc-tensor-map", "def-qc-tensor-register-and-permutation"]
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
      locator: "§3.2.1–3.2.3, fidelity data processing; no general equality characterization used."
---

## Statement

For every finite-dimensional channel $\Phi:\mathcal L(H)\to\mathcal L(K)$ and states $\rho,\sigma\in\mathcal D(H)$,
$$F(\rho,\sigma)\le F(\Phi(\rho),\Phi(\sigma)).$$
No general equality characterization is asserted.

## Facts & Assumptions

**Given:** Nonzero finite-dimensional spaces $H,K$, a channel $\Phi$, and density operators $\rho,\sigma$ on $H$.

[L1] An isometric Stinespring dilation writes $\Phi(X)=\operatorname{Tr}_E(VXV^*)$ for an isometry $V:H\to K\otimes E$ ([[def-qc-quantum-channel]], [[thm-qc-finite-stinespring-dilation]]). The QC05 definition and theorem bodies are present as drafts.

[L2] For every auxiliary space $R$ with $\dim R\ge\dim H$, the maximum overlap of purifications of the inputs on $H\otimes R$ is $F(\rho,\sigma)$ and is attained ([[thm-qc-fidelity-purification-characterization]]). The QC06 proof is a draft, not accepted.

[F1] Tensor maps act factorwise and the wire permutation reorders factors ([[def-qc-tensor-map]], [[def-qc-tensor-register-and-permutation]]).

[F2] Partial trace is characterized by its trace-pairing identity ([[def-qc-partial-trace]], [[thm-qc-partial-trace-characterization-and-basis-independence]]). The successive-trace rule follows by pairing both sides with any endomorphism $T$ on the retained factor: each pairing is $\operatorname{tr}(Z(T\otimes I\otimes I))$. For the specific local-isometry use below, write $x=\sum_{i,a}x_{ia}e_i\otimes r_a$ and $Ve_i=\sum_{b,c}V_{bc,i}k_b\otimes f_c$. The $(b,b')$ entry after tracing $E\otimes R$ from $(V\otimes I_R)|x\rangle\langle x|(V^*\otimes I_R)$ is $\sum_{c,a,i,i'}V_{bc,i}x_{ia}\overline{V_{b'c,i'}}\overline{x_{i'a}}$; tracing $R$ first and then $E$ from $V(\operatorname{Tr}_R|x\rangle\langle x|)V^*$ gives the same finite sum. Thus the partial-trace identity in step 1.1 follows directly in the ordered product coordinates.

## Proof


1.1 Choose $R$ with $\dim R\ge\max(\dim H,\dim K)$ and purifications $x,y\in H\otimes R$ attaining $F(\rho,\sigma)$ by [L2]. The Stinespring environment $E$ is nonzero because $V:H\to K\otimes E$ is an isometry and $H\ne0$, so $\dim(E\otimes R)\ge\dim K$. The tensor map $V\otimes I_R$ and the factor permutation identify their images with vectors in $K\otimes(E\otimes R)$ by [F1]. Their norms are one because $V$ is an isometry. In product coordinates, the partial-trace characterization [F2] gives $$\operatorname{Tr}_{E\otimes R}\bigl((V\otimes I_R)|x\rangle\langle x|(V^*\otimes I_R)\bigr)=\operatorname{Tr}_{E}\bigl(V(\operatorname{Tr}_R|x\rangle\langle x|)V^*\bigr)=\Phi(\rho),$$ and the same calculation gives output marginal $\Phi(\sigma)$ for $y$. Their inner product is $\langle x,y\rangle$ because $V^*V=I$. Thus they are purifications of the output states with the same overlap. [given, L1, L2, F1, F2, algebra]

2.1 The maximum-overlap formula [L2] for the output states is at least the overlap of the particular output purifications in step 1.1. That overlap has absolute value $F(\rho,\sigma)$, so $F(\Phi(\rho),\Phi(\sigma))\ge F(\rho,\sigma)$, as required. [step 1.1, L2] ∎

