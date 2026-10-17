---
id: def-bounded-lipschitz-discrepancy-for-measures
kind: definition
title: Bounded-Lipschitz discrepancy for finite measures
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: []
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Philippe Laurençot, Weak compactness techniques and coagulation equations, §§2–3
      url: https://arxiv.org/pdf/1801.08312
---

## Definition

For finite signed Borel measures $\mu,\nu$ on $E=[a,\infty)$, define their bounded-Lipschitz discrepancy by

$$d_{BL}(\mu,\nu)=\sup_{\|\varphi\|_\infty\le1,\ \operatorname{Lip}(\varphi)\le1}\left|\int_E\varphi\,d(\mu-\nu)\right|,$$

where the supremum is over all real functions on $E$ with supremum norm at most $1$ and Lipschitz constant at most $1$. For a finite measure $\eta$, the notation $\|\eta\|_{BL}$ means $d_{BL}(\eta,0)$. This discrepancy only tests bounded Lipschitz observables; it does not control an unbounded moment without a separate moment estimate.
