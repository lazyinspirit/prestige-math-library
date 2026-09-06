---
id: def-parametrized-morse-trajectory-space
kind: definition
title: "Parametrized Morse trajectory space"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-downward-gradient-like-vector-field, def-stable-and-unstable-sets-of-a-critical-point, thm-fundamental-theorem-on-flows]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Alexander F. Ritter, Part III Morse Homology, Lecture 9"
      url: "https://people.maths.ox.ac.uk/ritter/morse-cambridge/combined.pdf"
---

## Definition

Fix a complete downward gradient-like vector field $X$ for $f$.  For distinct critical points $p,q$, let $\widetilde{\mathcal M}_X(p,q)$ be the set of full $X$-orbits $\gamma:\mathbb R\to M$ satisfying
$$\dot\gamma=X(\gamma),\qquad \lim_{t\to-\infty}\gamma(t)=p,qquad \lim_{t\to+\infty}\gamma(t)=q.$$
When $X$ is understood we write $\widetilde{\mathcal M}(p,q)$.  Existence and uniqueness for the complete flow make evaluation at zero a bijection with the point-marked intersection

$$\operatorname{ev}_0:\widetilde{\mathcal M}(p,q)\longrightarrow W^u(p)\cap W^s(q),\qquad\gamma\longmapsto\gamma(0).$$

We use this bijection whenever the intersection is given its smooth structure.  For the special choice $X=-\operatorname{grad}_g f$ it agrees with the usual negative-gradient trajectory convention.
