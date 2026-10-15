---
id: post-rpm-prescribed-force-law
kind: postulate
title: "Prescribed constant-mass force law"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 6
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-rpm-mechanical-momentum-and-observer-energy, lem-rpm-shell-tangent-force-ivp]
dependency_roles:
  def-rpm-mechanical-momentum-and-observer-energy: formulation-prerequisite
  lem-rpm-shell-tangent-force-ivp: formulation-prerequisite
physical_scope: "A selected smooth external force law for a named massive test body of constant mass on a prescribed background; orthogonality is a compatibility condition preserving the mass shell, not a universal force principle."
sources:
  references:
    - title: "Sean Carroll, Lecture Notes on General Relativity, complete lecture notes, Ch. 1 four-force"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "David Tong, General Relativity, author-hosted lecture-note chapter excerpt, §1.1.1 particle motion"
      url: "https://www.davidtong.org/pdfs/teaching/general-relativity/gr1.pdf"
verification:
  precheck: n/a
---

## Postulate

For a named massive test body with constant primitive mass $m>0$ and momentum $P=mU$ as defined in [[def-rpm-mechanical-momentum-and-observer-energy]], one may adopt a specified smooth force field $f(x,V)$ on an open neighborhood of the future unit timelike shell within the future timelike velocity cone and the equation

$$D_\tau P=f(x,U),\qquad g(U,f)=0.$$

The orthogonality condition is part of this model's compatibility assumptions: it preserves $g(U,U)=-c^2$ for constant $m$. It is not a law selecting a force for every particle or interaction. A local IVP follows only where the named force field is smooth, as in [[lem-rpm-shell-tangent-force-ivp]]. The force has SI units newtons when $\tau$ is in seconds and $P$ has units kg m s$^{-1}$. No empirical force measurements, universal coupling, or global existence are asserted.
