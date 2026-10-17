---
id: ex-coarse-euler-variational-step-gives-spurious-instability
kind: example
title: "A coarse Euler variational step gives a spurious unstable multiplier"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-local-periodic-orbit-poincare-and-floquet-data
  - lem-autonomous-periodic-orbit-has-neutral-floquet-multiplier
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Y. A. Kuznetsov, Elements of Applied Bifurcation Theory, 2nd ed., Chapter 1, §1.5"
      url: "https://www.ma.imperial.ac.uk/~dturaev/kuznetsov.pdf"
      locator: "Complete 614-page second-edition PDF retrieved; inspected printed pp. 26–30 on transverse sections, return maps, variational equation, monodromy, and phase multiplier."
    - title: "E. J. Doedel and B. E. Oldeman, AUTO-07P full manual (2021)"
      url: "https://raw.githubusercontent.com/auto-07p/auto-07p/master/doc/auto.tex"
      locator: "Full 12,856-line manual retrieved; inspected periodic families/Floquet source lines 587–645, ISP warning lines 4926–4950, and phase-shifting demo ph1 lines 6822–6863."
---

## Statement

For $\omega=2\pi/3$, consider the annular oscillator
$$ \dot x=(1-r)x-\omega y,\qquad \dot y=(1-r)y+\omega x, \quad r=\sqrt{x^2+y^2}. $$
The unit circle has period $T=3$ and exact transverse variational equation $\dot\eta=-\eta$, whose multiplier is $e^{-3}<1$. Define one forward-Euler step of length $h$ on that transverse equation by $\eta_1=\eta_0+h(-\eta_0)$. With $h=3$ it multiplies the perturbation by $1-h=-2$, whose modulus exceeds one. This approximate number is not a validated Floquet enclosure.

## Facts & Assumptions

**Given:** The autonomous oscillator, its unit-circle orbit, and the forward-Euler variational update $\eta_{n+1}=\eta_n+h\dot\eta_n$.

[F1] A Floquet multiplier is an eigenvalue of the exact monodromy matrix, and the tangent direction of an autonomous periodic orbit has multiplier one ([[def-local-periodic-orbit-poincare-and-floquet-data]], [[lem-autonomous-periodic-orbit-has-neutral-floquet-multiplier]]).

## Proof
1.1 The identities $\dot r=(xx'+yy')/r$ and $\dot\vartheta=(xy'-yx')/r^2$ give $\dot r=r(1-r)$ and $\dot\vartheta=\omega$. Hence $r=1$ is a periodic orbit with least period $2\pi/\omega=3$. Differentiating $r(1-r)$ at $r=1$ gives $\dot\eta=-\eta$, whose exact solution is $\eta(3)=e^{-3}\eta(0)$; this transverse multiplier lies strictly between zero and one. [given, algebra]

2.1 By the forward-Euler update specified in the Statement, with $a=-1$ and $h=3$ we have $\eta_1=(1-3)\eta_0=-2\eta_0$. Thus its one-step amplification has modulus $2>1$, despite the exact transverse multiplier being stable. Since this calculation provides no enclosure of the truncation defect or exact variational flow, it cannot serve as a certified multiplier claim under [F1]. [F1, step 1.1, given, algebra] ∎
