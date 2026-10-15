---
id: post-rpm-test-clock-and-background
kind: postulate
title: "Ideal clocks on a prescribed Lorentzian background"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 1
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-rpm-spacetime-observer-and-worldline, def-gr-timelike-worldline-and-proper-time, post-sr-ideal-clocks-and-light]
dependency_roles:
  def-rpm-spacetime-observer-and-worldline: formulation-prerequisite
  def-gr-timelike-worldline-and-proper-time: formulation-prerequisite
  post-sr-ideal-clocks-and-light: formulation-prerequisite
physical_scope: "Adopted classical test-particle framework on a prescribed smooth time-oriented Lorentzian four-manifold; the curved-background clock reading convention extends the flat ideal-clock postulate and is not an empirical accuracy claim."
sources:
  references:
    - title: "David Tong, General Relativity, author-hosted lecture-note chapter excerpt, §1.1.1 particle worldline action and §1.2 proper time"
      url: "https://www.davidtong.org/pdfs/teaching/general-relativity/gr1.pdf"
    - title: "Sean Carroll, Lecture Notes on General Relativity, complete lecture notes, Ch. 1"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: n/a
---

## Postulate

**Adopted convention.** On a prescribed background $(M,g,N)$ from [[def-rpm-spacetime-observer-and-worldline]], let $x:[a,b]\to M$, $a<b$, be a continuous piecewise-$C^1$ future timelike curve in the sense of [[def-gr-timelike-worldline-and-proper-time]]: it has a finite partition $a=s_0<\cdots<s_k=b$, each segment is $C^1$ up to its endpoints with future timelike one-sided tangents there, and the two tangents at a corner need not agree. If $s$ denotes its parameter and $T_i=dx/ds$ on the $i$th segment, an ideal clock carried along it records the increment

$$\Delta\tau=\frac1c\sum_{i=1}^k\int_{s_{i-1}}^{s_i}\sqrt{-g(T_i,T_i)}\,ds.$$

The increment is independent of the admissible finite partition, by additivity of the integral, and is additive across corners. On each smooth segment this is the proper-time parameter with $d\tau=c^{-1}\sqrt{-g(dx/ds,dx/ds)}\,ds$. The flat-spacetime specialization is inherited from [[post-sr-ideal-clocks-and-light]]; extending that convention to the curved prescribed background is a separate adoption of this framework.

When the parameter $s$ is measured in seconds, $x^0=ct$ is in metres, $c$ is in metres per second, and $\tau$ is in seconds. This is a model postulate, not a theorem or a reported measurement. It does not assert that a physical clock realizes the idealization exactly, that the background solves gravitational field equations, or that the test body affects the background.
