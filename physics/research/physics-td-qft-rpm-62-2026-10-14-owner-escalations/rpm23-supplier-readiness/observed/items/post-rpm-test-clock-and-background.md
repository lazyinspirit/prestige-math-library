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
deps: [def-rpm-spacetime-observer-and-worldline, post-sr-ideal-clocks-and-light]
dependency_roles:
  def-rpm-spacetime-observer-and-worldline: formulation-prerequisite
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

**Adopted convention.** On a prescribed background $(M,g,N)$ from [[def-rpm-spacetime-observer-and-worldline]], an ideal clock carried along a future timelike test worldline $x$ records the proper-time parameter $\tau$ defined by $d\tau=c^{-1}\sqrt{-g(dx/ds,dx/ds)}\,ds$. Thus elapsed reading between two ordered points is the integral of this positive density. The flat-spacetime specialization is inherited from [[post-sr-ideal-clocks-and-light]]; extending that convention to the curved prescribed background is a separate adoption of this framework.

When the parameter $s$ is measured in seconds, $x^0=ct$ is in metres, $c$ is in metres per second, and $\tau$ is in seconds. This is a model postulate, not a theorem or a reported measurement. It does not assert that a physical clock realizes the idealization exactly, that the background solves gravitational field equations, or that the test body affects the background.
