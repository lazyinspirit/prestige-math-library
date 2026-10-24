---
id: def-satellite-pattern-companion-and-winding-number
kind: definition
title: "Satellite pattern, companion, and winding number"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-knot-exterior
  - def-knot-meridian-and-preferred-longitude
  - def-knot-connected-sum-and-prime-knot
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Ryan Budney, JSJ-decompositions of knot and link complements in the 3-sphere"
      url: "https://arxiv.org/pdf/math/0506523"
      locator: "§§1, 2, and 4; satellite patterns, companions, and companionship graphs"
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "§1.2, torus decomposition conventions, printed pp.11–23"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: n/a
---

## Definition

Let $V=S^1\times D^2$ be the standard oriented solid torus, with oriented core $S^1\times\{0\}$. A **pattern** is a smooth oriented knot $P$ contained in the interior of $V$, together with a chosen closed tubular neighbourhood $N(P)$ contained in the interior of $V$. Its **winding number** $w(P)$ is the integer by which the homology class $[P]$ maps to $H_1(V;\mathbb Z)\cong\mathbb Z$ under the isomorphism that sends the oriented core to $1$. The **pattern exterior** is $X_P=V\setminus\operatorname{int}N(P)$; its **outer torus** is $\partial V$ and its **inner torus** is $\partial N(P)$. A **companion** is a smooth oriented knot $K\subset S^3$ with a specified orientation-preserving tubular embedding $e:V\to S^3$ that sends the core to $K$ and identifies the solid-torus meridian and product longitude with the positive meridian and preferred longitude of $K$. The **satellite knot** $P(K)$ is $e(P)$, with chosen exterior $E_{P(K)}=S^3\setminus\operatorname{int}e(N(P))$; the image $e(\partial V)$ is its **companion torus**. The outer torus is **incompressible** when it bounds no properly embedded disk in $X_P$ with essential boundary on $\partial V$. It is **product-parallel** to the inner torus when $X_P$ is a product $T^2\times[0,1]$ with those tori as its ends. This definition alone asserts neither incompressibility nor essentiality of the companion torus.

## Definition references

[Ryan Budney, *JSJ-decompositions of knot and link complements in the 3-sphere*](https://arxiv.org/pdf/math/0506523)

[Allen Hatcher, *Notes on Basic 3-Manifold Topology*](https://pi.math.cornell.edu/~hatcher/3M/3M.pdf)
