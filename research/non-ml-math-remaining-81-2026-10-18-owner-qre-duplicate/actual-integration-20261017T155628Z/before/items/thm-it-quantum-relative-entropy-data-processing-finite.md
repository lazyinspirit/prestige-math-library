---
id: thm-it-quantum-relative-entropy-data-processing-finite
kind: theorem
title: Data processing for finite-dimensional quantum relative entropy
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps:
  - def-it-finite-dimensional-quantum-relative-entropy
  - thm-it-quantum-relative-entropy-partial-trace-dpi
  - lem-it-quantum-relative-entropy-isometric-invariance
  - thm-qc-finite-stinespring-dilation
  - def-qc-quantum-channel
  - def-qc-partial-trace
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information (2018), Chapter 5"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.double.5.pdf"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, second-edition prepublication v8 (2019)"
      url: "https://arxiv.org/pdf/1106.1445v8"
---

## Statement

Let $H,K$ be nonzero finite-dimensional complex inner-product spaces, let $\Phi:\mathcal L(H)\to\mathcal L(K)$ be a quantum channel, and let $A,B\in\mathcal L(H)$ be positive semidefinite. Then
$$D(\Phi(A)\Vert\Phi(B))\le D(A\Vert B),$$
with the support-sensitive extended value convention.

## Facts & Assumptions

**Given:** Nonzero finite-dimensional complex inner-product spaces $H,K$, a finite-dimensional quantum channel $\Phi$, and positive semidefinite $A,B$ on $H$.

[F1] [[def-it-finite-dimensional-quantum-relative-entropy]]: $D$ is the natural-log spectral trace expression when support is included and $+\infty$ otherwise.

[F2] [[thm-qc-finite-stinespring-dilation]]: a finite-dimensional channel has a finite environment $E$ and an isometry $V:H\to K\otimes E$ such that $\Phi(X)=\operatorname{Tr}_E(VXV^\dagger)$ for every operator $X$.

[F3] [[thm-it-quantum-relative-entropy-partial-trace-dpi]]: finite relative entropy cannot increase under partial trace, with extended values.

[F4] [[lem-it-quantum-relative-entropy-isometric-invariance]]: simultaneous conjugation by a finite-dimensional isometry preserves relative entropy and support inclusion.

[F5] [[def-qc-quantum-channel]]: a channel is completely positive and trace-preserving on the full operator space.

## Proof

1.1 The channel hypothesis has the complete-positivity and trace-preservation content in [F5], so the finite Stinespring theorem [F2] gives an environment $E$ and isometry $V:H\to K\otimes E$ with $\Phi(X)=\operatorname{Tr}_E(VXV^\dagger)$ for every $X$. Since $H\ne\{0\}$, $E$ is nonzero: otherwise $K\otimes E=\{0\}$ and no isometry from $H$ could exist. [given, F2, F5, algebra]

2.1 Apply partial-trace data processing [F3] to the pair $VAV^\dagger,VBV^\dagger$ on $K\otimes E$, then use [F2] to identify their partial traces with $\Phi(A),\Phi(B)$ and [F4] to identify the input divergence. The support convention [F1] supplies the extended order if the input divergence is $+\infty$. Thus
$$D(\Phi(A)\Vert\Phi(B))=D(\operatorname{Tr}_E(VAV^\dagger)\Vert\operatorname{Tr}_E(VBV^\dagger))\le D(VAV^\dagger\Vert VBV^\dagger)=D(A\Vert B).$$
All inequalities use the extended order, so the case $D(A\Vert B)=+\infty$ is included without subtracting infinite quantities. [given, F1, F2, F3, F4, step 1.1, algebra] ∎
