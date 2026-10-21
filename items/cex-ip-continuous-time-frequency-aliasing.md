---
id: cex-ip-continuous-time-frequency-aliasing
kind: counterexample
title: Continuous-time frequencies alias under fixed discrete sampling
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-ip-discrete-linear-input-state-output-experiment
  - thm-sine-cosine-zero-sets-and-fundamental-period
justified_by: []
aliases: []
generation:
  role: counterexample
axiom_use: No choice principle is used; the sample identities are finite trigonometric equalities.
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references: []
---

## Statement refuted

For a fixed sampling interval $h>0$, if a real continuous-time signal has the
form $y_\omega(t)=\cos(\omega t)$ for an unknown frequency $\omega\ge0$, then
its entire noiseless sample sequence $(y_\omega(kh))_{k\in\mathbb N_0}$
uniquely determines $\omega$.

## Statement references

[[def-ip-discrete-linear-input-state-output-experiment|Fixed sample interval and discrete observations]]

[[thm-sine-cosine-zero-sets-and-fundamental-period|The common period $2\pi$ of sine and cosine]]

## Facts & Assumptions

**Given:** A fixed sampling interval $h>0$, the two frequencies $\omega_0=0$ and $\omega_1=2\pi/h$, and the sampled output convention at times $kh$.

[F1] [[def-ip-discrete-linear-input-state-output-experiment]]: sample $k$ is observed at time $kh$ for a fixed interval $h>0$.

[F2] [[thm-sine-cosine-zero-sets-and-fundamental-period]]: cosine has period $2\pi$, so $\cos(2\pi k)=\cos 0=1$ for every integer $k$.

## Counterexample

1.1 Since $h>0$, $\omega_1=2\pi/h>0=\omega_0$, so the frequencies are distinct. By [F1], the $k$th samples occur at $t_k=kh$. The two continuous outputs are $\cos(\omega_0t_k)=\cos 0=1$ and $\cos(\omega_1t_k)=\cos(2\pi k)=1$ by [F2]. Thus their entire noiseless sample sequences agree. [given, F1, F2, algebra]

2.1 The distinct admissible frequencies in step 1.1 have identical complete noiseless data. Therefore the data do not uniquely determine the frequency, which refutes the stated claim. [given, step 1.1, algebra] ∎

