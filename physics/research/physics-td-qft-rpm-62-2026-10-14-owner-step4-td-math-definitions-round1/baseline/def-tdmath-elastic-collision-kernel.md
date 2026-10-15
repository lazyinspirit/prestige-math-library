---
id: def-tdmath-elastic-collision-kernel
kind: definition
title: "Elastic collision model and weak collision identity"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps: ["def-measure","def-measure-space"]
justified_by: []
dependency_roles: {"def-measure":"mathematical-premise","def-measure-space":"mathematical-premise"}
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Kinetic Theory, Part 2"
      url: https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf
      locator: "Complete 39-page lecture-note part retrieved and read; §2.1, pp.14–16, Liouville phase-space volume; §§2.2–2.3, pp.20–35, Boltzmann equation and H-theorem."
    - title: "R. Fitzpatrick, Plasma Physics, Boltzmann H-Theorem"
      url: https://farside.ph.utexas.edu/teaching/plasma/lectures1/node40.html
      locator: "Complete author-hosted HTML section read; equations (3.123)–(3.144), collision production, detailed balance, and Maxwellian form."
---

## Definition

Fix $d\ge2$. The **elastic collision set** is
$$Q_{\rm el}:=\{(v,w,v',w')\in\mathbb R^{4d}:v+w=v'+w',\ |v|^2+|w|^2=|v'|^2+|w'|^2\},$$
with its relative Borel sigma-algebra. A collision measure is a nonnegative countably additive measure $\nu$ on this measurable space. It is symmetric if it is invariant under the exchanges $(v,w)\leftrightarrow(w,v)$, $(v',w')\leftrightarrow(w',v')$, and $(v,w)\leftrightarrow(v',w')$. These invariances are hypotheses on $\nu$, not consequences of energy and momentum conservation.

For a positive function $f:\mathbb R^d\to(0,\infty)$, write $Q(f)$ for a collision operator when the following **weak collision identity** holds for each test function $\varphi$ used:
$$\int_{\mathbb R^d}\varphi(v)Q(f)(v)\,dv=\frac14\int_{Q_{\rm el}}(f(v')f(w')-f(v)f(w))(\varphi(v)+\varphi(w)-\varphi(v')-\varphi(w'))\,d\nu,$$
with absolute convergence. This identity is the adopted mathematical collision model. Molecular chaos or a microscopic derivation of it is not part of the definition.

## Scope

The measure's normalization is chosen so $Q(f)$ has units of $f$ per unit time in an application. No specific cross-section or measured collision rate is asserted.
