---
id: def-gts-pardon-gromov-topology-on-stable-map-moduli
kind: definition
title: Pardon Gromov topology on stable J-holomorphic map moduli
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 9
domain: mathematics
library: physics
deps:
  - def-gts-symplectic-and-almost-complex-curve-data
  - def-gts-stable-n-pointed-algebraic-curves-and-the-moduli-functor
  - lem-gts-compact-analytic-stable-domain-orbifold-and-universal-plumbing
dependency_roles:
  def-gts-symplectic-and-almost-complex-curve-data: mathematical-premise
  def-gts-stable-n-pointed-algebraic-curves-and-the-moduli-functor: mathematical-premise
  lem-gts-compact-analytic-stable-domain-orbifold-and-universal-plumbing: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: John Pardon, An Algebraic Approach to Virtual Fundamental Cycles on Moduli Spaces of Pseudo-Holomorphic Curves, arXiv:1309.2370v6
      url: https://arxiv.org/pdf/1309.2370v6
      locator: §9.1, Definitions 9.1.1–9.1.3 and the Gromov-topology neighborhood description.
    - title: Dietmar Salamon, Lectures on Floer Homology, IAS/Park City Graduate Summer School notes (1997)
      url: https://www.math.utoronto.ca/mgualt/Morse%20Theory/Salamon%20floer.pdf
      locator: §4.2, pp. 45–51, stable genus-zero maps, Gromov convergence, and its topology.
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Fix a compact smooth symplectic manifold $(X,\omega)$, a smooth $\omega$-tame almost-complex structure $J$, integers $g,n\geq 0$ with $2g-2+n>0$, and $\beta\in H_2(X;\mathbb Z)$. A stable $J$-holomorphic map of type $(g,n,\beta)$ is an isomorphism class of data $(C,p_1,\ldots,p_n,u)$ where $C$ is a compact connected nodal Riemann surface of arithmetic genus $g$, the ordered marked points are distinct smooth points of $C$, and the maps on the normalization components are smooth and satisfy $du\circ j=J\circ du$. The branch values at every node agree, so the component maps define a continuous map $u:C\to X$. Require $u_*[C]=\beta$ and require the automorphism group of $(C,p_1,\ldots,p_n,u)$ to be finite. Isomorphisms are biholomorphisms of the nodal domains preserving the ordered markings and intertwining the maps.

Write $\overline{\mathcal M}_{g,n}$ for the proper moduli space of stable pointed curves and $\mathcal C_{g,n+\ell}\to\overline{\mathcal M}_{g,n+\ell}$ for its universal curve. To define the Gromov topology near $(C,\mathbf p,u)$, choose finitely many additional distinct smooth points $\mathbf q=(q_1,\ldots,q_\ell)$ so that $(C,\mathbf p,\mathbf q)$ is a stable pointed curve, use a local uniformizing chart of $\overline{\mathcal M}_{g,n+\ell}$ around that pointed curve, and form the graph $\Gamma_{u,\mathbf q}=\{(u(p),p):p\in C\}$ in $X\times\mathcal C_{g,n+\ell}$. A neighborhood basis is obtained by requiring graphs of nearby stable maps, represented after forgetting the extra markings, to be close to $\Gamma_{u,\mathbf q}$ in the Hausdorff metric induced by any compatible metric on this compact product. Different auxiliary points and local uniformizing charts give the same topology. This is the topology used here; it is not the fixed-domain $C^\infty$ topology on maps.

## Definition references

[[def-gts-symplectic-and-almost-complex-curve-data]]

[[def-gts-stable-n-pointed-algebraic-curves-and-the-moduli-functor]]

[[lem-gts-compact-analytic-stable-domain-orbifold-and-universal-plumbing]]
