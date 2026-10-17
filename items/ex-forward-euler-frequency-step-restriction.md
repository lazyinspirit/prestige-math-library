---
id: ex-forward-euler-frequency-step-restriction
kind: example
title: "Forward Euler's stability region restricts both decay rate and frequency"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - thm-explicit-euler-absolute-stability-disk
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Ernst Hairer and Gerhard Wanner, Introduction à l’Analyse Numérique, Chapter III, §III.9"
      url: "https://www.unige.ch/~hairer/poly/chap3.pdf"
    - title: "MIT OpenCourseWare, 18.330 Introduction to Numerical Analysis, Chapter 5, §5.2.2: Stability"
      url: "https://math.mit.edu/icg/resources/teaching/18.330/18.330-Apr-2014.pdf"

---
## Facts & Assumptions

**Given:** $\lambda=-\rho+i\omega$ with $\rho>0$, $\omega\in\mathbb R$, and a step size $h>0$.

[F1] [[thm-explicit-euler-absolute-stability-disk]]: forward Euler is absolutely stable exactly when $|1+h\lambda|\le1$.

## Example

For this decaying oscillatory scalar mode, forward Euler is absolutely stable exactly when $h\le 2\rho/(\rho^2+\omega^2)$. Thus a large oscillation frequency reduces the allowed step even when the real decay rate $\rho$ is fixed.

## Verification
1.1 Set $z=h\lambda=-h\rho+ih\omega$. Then $|1+z|^2=(1-h\rho)^2+(h\omega)^2=1-2h\rho+h^2(\rho^2+\omega^2)$. [given, algebra]

2.1 By [F1], stability is equivalent to the last expression being at most one. Since $h>0$ and $\rho^2+\omega^2>0$, this is equivalent to $h(\rho^2+\omega^2)\le2\rho$, or $h\le2\rho/(\rho^2+\omega^2)$. [F1, step 1.1, algebra] ∎
