---
id: post-rpm-null-test-particle-action
kind: postulate
title: "Massless test-particle action and momentum scale"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 4
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [post-rpm-test-clock-and-background, lem-rpm-einbein-variation-and-equivalence]
dependency_roles:
  post-rpm-test-clock-and-background: physical-assumption
  lem-rpm-einbein-variation-and-equivalence: formulation-prerequisite
physical_scope: "Separate classical massless test-particle sector with nonzero future-null momentum; no proper-time parameter, no P=mU identification, and no claim of empirical realization."
sources:
  references:
    - title: "David Tong, String Theory, complete lecture notes, §1.1.2 relativistic particle and einbein"
      url: "https://www.damtp.cam.ac.uk/user/tong/string/string1.pdf"
    - title: "Sean Carroll, Lecture Notes on General Relativity, complete lecture notes, Ch. 3 §3.3"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: n/a
---

## Postulate

Adopt a distinct massless test-particle sector on the prescribed background of [[post-rpm-test-clock-and-background]]. Its primitive action uses a positive einbein $e(s)$,

$$S_0[x,e]=\frac12\int e^{-1}g(T,T)\,ds,\qquad T=dx/ds,$$

and independent stationary variations in $x$ and $e$. The variational equations and their null branch follow from [[lem-rpm-einbein-variation-and-equivalence]]: the constraint is $g(T,T)=0$, and the physical branch requires $T$ to be nonzero and future-directed. The associated momentum $P=T/e$ is nonzero future null; its positive scale is primitive initial data, not $mU$ for any $m=0$ substitution. Null curves have no proper-time parameter. With $s$ in seconds, $T$ in metres per second, and $e$ in kg$^{-1}$, the integral has units joule-seconds. Under an increasing $C^1$ reparametrization $s=s(r)$, the paired transformation is $T_r=s' T$ and $e_r=s' e$, which leaves the functional invariant by [[lem-rpm-einbein-variation-and-equivalence]]; this is the formulation's gauge freedom. Neither the scale nor a clock reading is inferred from the ray image alone.

This is an adopted classical model formulation, not an empirical observation or a theorem. Its scope excludes mass generation, interactions, and quantum field effects.
