---
id: cex-unbounded-punctured-harmonic-singularity-is-not-removable
kind: counterexample
title: "Unbounded punctured harmonic singularity is not removable"
status: published
origin: pipeline
deps: [cor-removable-singularity-for-bounded-harmonic-functions]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Gantumur, Harmonic functions"
      url: https://www.math.mcgill.ca/gantumur/math580f12/harmonic.pdf
      locator: "§8 Theorem 17 proof, p.14, radial profiles"
---

## Statement refuted

A harmonic function on a punctured ball need not have a harmonic extension at the puncture without growth control. On $0<|x|<1$, use $u(x)=\log|x|$ for $n=2$ and $u(x)=|x|^{2-n}$ for $n\ge3$. Neither has even a continuous extension at zero.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement refuted.

[F1] For $n\ge2$, a harmonic function bounded near an isolated missing interior point extends uniquely; the specified subcritical little-o bounds also suffice. ([[cor-removable-singularity-for-bounded-harmonic-functions]]).

## Counterexample

**Proof technique:** direct.

1.1 For $r=|x|>0$, differentiating $f(r)$ gives $\Delta f(r)=f\prime\prime(r)+(n-1)f\prime(r)/r$. For $n=2$, $f\prime=1/r$ and $f\prime\prime=-1/r^2$ cancel. For $n\ge3$, $f\prime=(2-n)r^{1-n}$ and $f\prime\prime=(2-n)(1-n)r^{-n}$ also cancel. Thus both profiles are harmonic away from zero. [given, algebra]

2.1 The logarithm tends to $-\infty$ as $r\downarrow0$, and the negative power tends to $+\infty$. Continuity at zero would require a finite limit, so no harmonic extension exists. These profiles violate boundedness near the point. Their signed ratios to the critical profiles in the stronger little-o removability condition are $-1$ for $n=2$ and $1$ for $n\ge3$, so in both cases the absolute ratio is one rather than tending to zero. [F1, step 1.1, algebra] ∎
