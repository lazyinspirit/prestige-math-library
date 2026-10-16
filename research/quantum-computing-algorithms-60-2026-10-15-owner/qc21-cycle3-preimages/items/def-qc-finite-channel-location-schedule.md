---
id: def-qc-finite-channel-location-schedule
kind: definition
title: "Finite ordered channel-location schedules"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - def-qc-quantum-channel
  - def-qc-local-operator-support-and-weight
  - thm-qc-channels-compose-and-tensor
dependency_level: 8
proof_strategy: direct
sources:
  references:
    - title: "D. Aharonov and M. Ben-Or, Fault-Tolerant Quantum Computation With Constant Error"
      url: "https://arxiv.org/pdf/quant-ph/9611025"
    - title: "John Preskill, Quantum Computation, Chapter 7: Quantum Error Correction"
      url: "https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf"
---

## Definition

Fix a nonzero finite-dimensional ordered tensor register $H=H_0\otimes\cdots\otimes H_{n-1}$ and an integer $M\ge0$. A finite channel-location schedule is an ordered list of slots $\ell_1,\ldots,\ell_M$. Slot $\ell_t$ has an ideal quantum channel $\Phi_{\ell_t}:\mathcal L(H)\to\mathcal L(H)$ and a declared support $S_{\ell_t}\subseteq\{0,\ldots,n-1\}$. A channel is supported on $S_{\ell_t}$ when it has a finite Kraus representation all of whose Kraus operators are supported there in the sense of [[def-qc-local-operator-support-and-weight]]. The order is chronological: slot $\ell_1$ acts first. Its circuit denotation is the linear map

$$\Phi_{\ell_M}\circ\cdots\circ\Phi_{\ell_1},$$

with the empty schedule denoting the identity map on $\mathcal L(H)$. The definition records the full-register channels at the slots; gate, preparation, measurement, reset, classical-control, and scheduled-idle operations are included only when their corresponding local channels and supports are supplied. Any ancillary or classical record registers they use are factors of $H$. No unlisted idle slot is implicit. A pattern-dependent replacement at slot $\ell$ must be a quantum channel supported on the same $S_\ell$; the chosen replacement may depend on the full fault pattern, but no extra joint operation across distinct slots is part of this schedule.

## Facts & Assumptions


**Given:** A finite-dimensional ordered tensor register, a finite ordered list of full-register quantum channels, and declared supports for their Kraus operators. Verify that the schedule denotation is well-defined and is a quantum channel.

[F1] [[def-qc-quantum-channel]]: A quantum channel is a complex-linear completely positive trace-preserving map on the full operator space.

[F2] [[thm-qc-channels-compose-and-tensor]]: A finite composition of finite-dimensional quantum channels is a quantum channel.

[F3] [[def-qc-local-operator-support-and-weight]]: $E$ is supported in $S$ when its wire permutation has the form $\Pi_SE\Pi_S^{-1}=E_S\otimes I_{S^c}$ for some $E_S$.

## Verification

1.1 Each $\Phi_{\ell_t}$ is a complex-linear endomorphism of $\mathcal L(H)$ by [F1] and is assigned its declared local support by [F3], so the displayed finite chronological composition is well-typed; for $M=0$ it is the identity. [given, F1, F3, construct]

2.1 For $M>0$, repeated application of [F2] shows the composition is completely positive and trace-preserving. For $M=0$, tensoring the identity with any finite reference identity leaves every positive operator positive, and $\operatorname{tr}(\operatorname{id}(X))=\operatorname{tr}(X)$, so the identity is a channel. Thus every schedule has a well-defined channel denotation. [given, F1, F2, algebra, induction] ∎

