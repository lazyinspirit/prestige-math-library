---
id: def-dp-brane-open-string-boundary-condition
kind: definition
title: Dp Brane Open String Boundary Condition
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 5
domain: physics
library: physics
deps:
  - def-st-flat-bosonic-string-model
  - pthm-st-open-string-boundary-variation
dependency_roles:
  def-st-flat-bosonic-string-model: formulation-prerequisite
  pthm-st-open-string-boundary-variation: physical-result
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
physical_scope: "Static flat Dp boundary data for the bosonic coordinate fields of open strings in ten-dimensional Type II theory; excludes endpoint fields, flux, curvature, orientifolds, brane dynamics, charge, and backreaction."
sources:
  references:
    - title: "J. Polchinski, S. Chaudhuri, and C. V. Johnson, Notes on D-Branes, arXiv:hep-th/9602052v2"
      url: "https://arxiv.org/pdf/hep-th/9602052v2"
      locator: "Lecture II §2.2, PDF pp. 10–12, open-string Dirichlet boundary data and the D-brane interpretation; §2.4, pp. 13–15, worldvolume interpretation."
    - title: "J. Polchinski, Dirichlet-Branes and Ramond-Ramond Charges, arXiv:hep-th/9510017v3"
      url: "https://arxiv.org/pdf/hep-th/9510017v3"
      locator: "§2, PDF pp. 2–4, equation (4): mixed Neumann/Dirichlet data, Type IIA/IIB parity, and the flat Dp hyperplane."
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

In flat Type II theory a static Dp-brane is the timelike affine plane $W=\mathbb R^{1,p}\times\{X^a=y_0^a\}$ in ten-dimensional Minkowski space with metric $\eta=\operatorname{diag}(-1,+1,\ldots,+1)$, where $\alpha=0,\ldots,p$ are tangent indices, $a=p+1,\ldots,9$ are normal indices, $0\le p\le 9$, $p$ is even in Type IIA and odd in Type IIB, and $y_0^a$ are fixed target-space coordinates of length dimension.

For the open strip $\Sigma=I\times[0,\pi]$, where $I\subseteq\mathbb R$ is an open time interval, with dimensionless worldsheet coordinates $(\tau,\sigma)$ and a map $X$ that is $C^2$ up to the timelike boundary, the conformal-gauge endpoint data are Neumann, $\partial_\sigma X^\alpha(\tau,0)=\partial_\sigma X^\alpha(\tau,\pi)=0$, tangent to $W$, and Dirichlet, $X^a(\tau,0)=X^a(\tau,\pi)=y_0^a$, normal to $W$. This is boundary data for the free open-string coordinate fields only; it does not specify brane dynamics, RR charge, or a backreacted solution.

## Definition references

[[def-st-flat-bosonic-string-model]]

[[pthm-st-open-string-boundary-variation]]

## Remarks

The strip picture records the domain and endpoint map. The two long edges map into $W$; the diagram is a topological schematic and does not represent a target-space metric or a brane trajectory.

```tikz
\begin{tikzpicture}
\draw[->] (-0.25,0) -- (4.1,0) node[right] {$\tau$};
\draw[->] (0,-0.2) -- (0,3.2) node[above] {$\sigma$};
\draw[thick] (0,0.45) rectangle (3.5,2.8);
\node at (1.75,1.65) {$\Sigma=I\times[0,\pi]$};
\node at (1.75,0.17) {$\sigma=0$};
\node at (1.75,3.02) {$\sigma=\pi$};
\draw[->] (1.75,0.45) -- (4.8,0.9);
\draw[->] (1.75,2.8) -- (4.8,2.35);
\draw[thick] (4.8,0.45) -- (4.8,2.8);
\node[right] at (4.8,1.65) {$W$};
\end{tikzpicture}
```

