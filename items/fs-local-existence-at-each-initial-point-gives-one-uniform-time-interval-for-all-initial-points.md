---
id: fs-local-existence-at-each-initial-point-gives-one-uniform-time-interval-for-all-initial-points
kind: false-statement
title: "Pointwise local existence does not force one global uniform time interval"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-fundamental-theorem-for-autonomous-smooth-odes,
       cor-uniform-picard-lindelof-for-nearby-initial-values]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Nigel Hitchin, Differentiable Manifolds, Appendix §10.2"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
    - title: "Chin-Lung Wang, Banach Calculus, §4.2"
      url: "https://www.math.ntu.edu.tw/~dragon/Lecture%20Notes/Banach%20Calculus%202012.pdf"
pipeline_run: null
---

## Statement

**False claim:** if an autonomous smooth ODE has a local solution through every
initial point of $\mathbb R^n$, then there is one time $h>0$ that works for all
initial points at once.

## Facts & Assumptions

**Given:** The ODE $x'=x^2$ on $\mathbb R$.

[L1] Nearby initial values share a uniform local time interval only locally in the initial data ([[cor-uniform-picard-lindelof-for-nearby-initial-values]]).

[L2] Smooth autonomous ODEs have unique local solutions ([[thm-fundamental-theorem-for-autonomous-smooth-odes]]).

## Refutation

**Proof technique:** direct.

1.1 For each initial value $x(0)=a>0$, the unique solution is [L2] $x_a(t)=a/(1-at)$, defined only for $t<1/a$. Thus every initial point has a local solution by [L2]. [L2]

2.1 If one positive time $h$ worked for all initial values, then taking [L1, step 1.1, assume-hyp] $a>1/h$ would give a solution through $a$ defined on $[-h,h]$. But step 1.1 shows the maximal positive existence time is $1/a<h$, a contradiction. This does not conflict with [L1], because [L1] is a neighbourhood theorem, not a global one over all of $\mathbb R$. [L1, step 1.1, assume-hyp]

3.1 Therefore pointwise local existence does not imply one uniform time [step 2.1] interval for all initial data. [step 2.1] ∎
