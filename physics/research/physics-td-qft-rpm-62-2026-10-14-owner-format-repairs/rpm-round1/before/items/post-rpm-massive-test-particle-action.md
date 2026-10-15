---
id: post-rpm-massive-test-particle-action
kind: postulate
title: "Massive spinless test-particle action"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 2
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [post-rpm-test-clock-and-background, thm-rpm-proper-time-parametrization]
dependency_roles:
  post-rpm-test-clock-and-background: physical-assumption
  thm-rpm-proper-time-parametrization: formulation-prerequisite
physical_scope: "Classical spinless structureless point test body of constant primitive mass m>0 on a prescribed smooth background; no self-field, radiation reaction, finite-size, quantum, or global-completeness claim."
sources:
  references:
    - title: "David Tong, General Relativity, author-hosted lecture-note chapter excerpt, §1.1.1 particle action"
      url: "https://www.davidtong.org/pdfs/teaching/general-relativity/gr1.pdf"
    - title: "Sean Carroll, Lecture Notes on General Relativity, complete lecture notes, Ch. 3 §3.3"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: n/a
---

## Postulate

For a spinless, structureless massive test body of constant primitive mass $m>0$ on a prescribed background satisfying [[post-rpm-test-clock-and-background]], adopt the action

$$S_m[x]=-mc\int\sqrt{-g(dx/ds,dx/ds)}\,ds=-mc^2\int d\tau,$$

for future timelike curves, with fixed-endpoint stationary paths as the model's free trajectories. When $s$ is measured in seconds, $T$ has units metres per second; in SI units the action has units joule-seconds. The equality is the proper-time change of variable of [[thm-rpm-proper-time-parametrization]]. This is an adopted model premise, not a consequence of the metric or clock postulate. It excludes self-gravity, radiation reaction, spin, finite-size structure, particle creation, and quantum effects; it does not assert empirical adequacy for any particular body.
