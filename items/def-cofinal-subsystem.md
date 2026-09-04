---
id: def-cofinal-subsystem
kind: definition
title: "A cofinal subsystem meets every index eventually"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-directed-set-and-inverse-system-of-groups]
verification:
  audited: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Brian Osserman, Math 6112 notes on inverse limits and profinite groups"
      url: "https://people.math.osu.edu/cogdell.1/6112-Osserman-www.pdf"
    - title: "H. W. Lenstra, Profinite groups and Galois groups"
      url: "https://websites.math.leidenuniv.nl/algebra/Lenstra-Profinite.pdf"
---

## Definition

Let $((G_i),\varphi_{ij})$ be an inverse system indexed by a directed set $I$.
A subset $J\subseteq I$ is **cofinal** when:

$$ \forall i\in I\ \exists j\in J\text{ with } i\le j. $$

With the induced order, the restricted family $(G_j)_{j\in J}$ and the maps
$\varphi_{jk}$ for $j\le k$ in $J$ form the **cofinal subsystem**
([[def-directed-set-and-inverse-system-of-groups]]).
