---
id: ex-qftx-single-photon-antibunching
kind: example
domain: physics
library: physics
title: "One-photon wavepacket has zero ideal same-mode factorial correlation"
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 5
deps:
  - pthm-qftx-binomial-detector-thinning
  - pthm-qftx-mode-g-two
dependency_roles:
  pthm-qftx-binomial-detector-thinning: physical-result
  pthm-qftx-mode-g-two: physical-result
physical_scope: "One exactly prepared photon in one normalized transverse mode, counted by the ideal number-resolving model with optional independent fixed-efficiency loss. It asserts no zero coincidence probability for arbitrary multimode detectors or apparatus with background."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Daniel A. Steck, Quantum and Atom Optics, revision 0.16.10 (27 June 2026)"
      url: "https://atomoptics.uoregon.edu/~dsteck/teaching/quantum-optics/quantum-optics-notes.pdf"
      locator: "Author-hosted complete course text, Chapter 16 §16.3, PDF pp. 687–688, one-photon beam-splitter output and zero ideal joint-detection probability; the same section identifies accidental coincidences, finite detection times and dark counts as real limitations."
    - title: "Roy J. Glauber, The Quantum Theory of Optical Coherence, Physical Review 130, 2529–2539 (1963)"
      url: "https://journals.aps.org/pr/pdf/10.1103/PhysRev.130.2529"
      locator: "§II equations (2.16)–(2.18), printed pp. 2531–2532, for the normal-ordered two-count correlation that vanishes when fewer than two photons are available."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Example

Assume the ideal mode-counting and thinning models. Prepare the normalized one-photon state $\psi_1$ in the selected transverse mode, with all orthogonal modes in vacuum, and take $0<\eta\le1$. The ideal count law has $N=1$, so its mean is $1$ and its same-mode zero-delay factorial correlation is $g_N^{(2)}(0)=0$. After independent loss, the registered count is Bernoulli with $\mathbb P(K=1)=\eta$ and $\mathbb P(K=0)=1-\eta$, with mean $\eta$ and $g_K^{(2)}(0)=0$. This example is conditional on the one-mode and no-background assumptions and does not assert zero coincidence probability for arbitrary multimode detectors.

## Example references

[[pthm-qftx-mode-g-two]]

[[pthm-qftx-binomial-detector-thinning]]

[Steck, Quantum and Atom Optics](https://atomoptics.uoregon.edu/~dsteck/teaching/quantum-optics/quantum-optics-notes.pdf)

[Glauber (1963)](https://journals.aps.org/pr/pdf/10.1103/PhysRev.130.2529)

## Facts & Assumptions

**Given:** The selected one-photon number state, the ideal count law, and independent fixed-efficiency recording with $0<\eta\le1$.

[F1] The mode state with $m=1$ has $\mu=1$, $F_2=0$, and $g^{(2)}(0)=1-1/m=0$. [[pthm-qftx-mode-g-two]]

[F2] Conditional on $N=n$, each photon is recorded independently with probability $\eta$, with no background or dark counts; for one photon this gives a Bernoulli count and the normalized factorial correlation is unchanged. [[pthm-qftx-binomial-detector-thinning]]

## Verification

**Given:** [F1], [F2], and the one-photon preparation and efficiency in the Example.

1.1 The statement of [F1] at $m=1$ gives $\mu=1$ and $F_2=1(1-1)=0$, so the postulate's denominator is positive and $g_N^{(2)}(0)=0$. [F1, given, algebra]

2.1 By [F2], conditional on the certain incoming count $N=1$, the only possible registered counts are $K=0$ and $K=1$, with probabilities $1-\eta$ and $\eta$. Thus $\mathbb E K=\eta>0$ and $\mathbb E[K(K-1)]=0$, giving $g_K^{(2)}(0)=0$; this conclusion concerns the selected ideal mode and the stated apparatus assumptions only. [F2, step 1.1, given, algebra] ∎
