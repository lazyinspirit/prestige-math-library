---
id: def-b-p-n-plus-one-subgroup-of-homotopy-spheres
kind: definition
title: "The subgroup $bP_{n+1}$"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-theta-n-group-of-oriented-h-cobordism-classes-of-homotopy-spheres, lem-parallelizable-boundaries-form-a-subgroup, def-countable-choice]
justified_by: []
aliases: []
landmark: false
dependency_level: 21
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Michel Kervaire and John Milnor, Groups of Homotopy Spheres I, Annals of Mathematics 77 (1963), 504-537"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/kervmiln.pdf"
      locator: "printed pp. 507-510, the subgroup bP_{n+1} of Theta_n and its framed-cobordism definition"
---

## Definition

Assume $\mathrm{AC}_\omega$. The subgroup $bP_{n+1}\subseteq\Theta_n$, for
$n\ge5$, consists of the oriented homotopy-sphere classes represented by
boundaries of compact oriented parallelizable smooth
$(n+1)$-manifolds. Here **parallelizable** means that the tangent bundle $TV$
is trivial, while **stably parallelizable** means that
$TV\oplus\varepsilon^r$ is trivial for some $r\ge0$; stable
parallelizability is the weaker condition and is not substituted silently.

Representative independence and closure under addition, inverse and the zero
class are proved in
[[lem-parallelizable-boundaries-form-a-subgroup]], so $bP_{n+1}$ is a subgroup
of $\Theta_n$ as displayed. The definition is conditional on the group
structure of [[def-theta-n-group-of-oriented-h-cobordism-classes-of-homotopy-spheres]]
and uses no choice principle beyond $\mathrm{AC}_\omega$.
