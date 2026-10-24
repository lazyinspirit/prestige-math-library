---
id: ex-real-gaussian-strong-interference-region
kind: example
title: A numerical asymmetric Gaussian channel in the strong regime
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 8
deps: [def-axiom-of-choice, def-real-two-user-gaussian-interference-channel, thm-real-gaussian-strong-interference-capacity-region]
aliases: []
proof_strategy: direct-substitution
axiom_use: AC is inherited through the Gaussian entropy result used by the capacity theorem.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: Abbas El Gamal and Young-Han Kim, Lecture Notes on Network Information Theory, arXiv:1001.3404v4
      url: https://arxiv.org/pdf/1001.3404v4
      locator: Chapter 6, Gaussian strong-interference region and numerical examples, printed pp. 122–126.
---

## Example

Use the complex Gaussian channel with $P_1=P_2=1$, unit noise variance, $h_{11}=1$, $h_{22}=3/2$, $h_{21}=2$, and $h_{12}=5/2$ in the convention of [[def-real-two-user-gaussian-interference-channel]]. Then
$$\mathrm{SNR}_1=1,\quad \mathrm{SNR}_2=\frac94,\quad \mathrm{INR}_1=4,\quad \mathrm{INR}_2=\frac{25}{4},$$
and the exact capacity region is
$$R_1\ge0,\quad R_2\ge0,\quad R_1\le1,\quad R_2\le\log_2\frac{13}{4},\quad R_1+R_2\le\log_2 6$$
bits per use.

## Facts & Assumptions

**Given:** The complex Gaussian interference channel and parameters in the example.

[A1] Assume AC ([[def-axiom-of-choice]]), as required by the Gaussian information and coding suppliers used in [F2].

[F1] [[def-real-two-user-gaussian-interference-channel]]: $\mathrm{INR}_1=|h_{21}|^2P_2$ and $\mathrm{INR}_2=|h_{12}|^2P_1$; complex scalar rates use $\kappa=1$.

[F2] [[thm-real-gaussian-strong-interference-capacity-region]]: if $|h_{12}|\ge|h_{11}|$ and $|h_{21}|\ge|h_{22}|$, capacity is the stated intersection of the two Gaussian MAC regions.

## Proof



1.1 Assume [A1] and use the complex channel model [F1] with the stated unit power budgets and unit-variance noises. The gains satisfy $|h_{12}|=2.5\ge1=|h_{11}|$ and $|h_{21}|=2\ge1.5=|h_{22}|$, so the strong-regime hypothesis of [F2] holds. The displayed SNR and INR values follow by squaring the gains and multiplying by unit powers. [A1, F1, F2, given, algebra]

2.1 The individual constraints in [F2] become $R_1\le\log_2(2)=1$ and $R_2\le\log_2(1+9/4)=\log_2(13/4)$. The two sum constraints are $\log_2(1+1+4)=\log_2 6$ and $\log_2(1+9/4+25/4)=\log_2(19/2)$; since $6<19/2$, the first is active. This gives exactly the stated region. [F1, F2, step 1.1, algebra] ∎
