---
id: def-qa-circular-phase-distance
kind: definition
title: Circular phase distance modulo one
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps:
  - def-max-min
  - def-real-order
  - lem-finite-set-has-max
justified_by: []
axiom_use: "None; this is a finite minimum of two real numbers."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Lin Lin, Lecture Notes on Quantum Algorithms for Scientific Computation, §§16.1–16.3"
      url: "https://math.berkeley.edu/~linlin/qasc/live_notes_0315.pdf"
---

## Definition

For a real $x\in[-1,1]$, define its circular distance to the nearest integer by
$$d_{\mathbb T}(x):=\min\{|x|,\,1-|x|\}.$$
Here $|x|$ is the real absolute value and $\min$ is the minimum of the displayed finite set ([[def-real-order]], [[def-max-min]]); existence of this finite minimum follows from [[lem-finite-set-has-max]]. Both entries lie in $[0,1]$, so the value lies in $[0,1/2]$. If $|x|\le1/2$, the nearest integer is $0$; if $x>1/2$, it is $1$; if $x<-1/2$, it is $-1$, so the formula is the distance to the nearest integer. For phases $\theta,\phi\in[0,1)$, their circular distance is $d_{\mathbb T}(\theta-\phi)$; the difference belongs to $(-1,1)$, the stated domain.
