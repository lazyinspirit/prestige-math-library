---
id: def-directed-set-and-inverse-system-of-groups
kind: definition
title: "A directed set and an inverse system of groups indexed by it"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-directed-set-and-net, def-group-homomorphism]
verification:
  audited: 2026-09-01
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Brian Osserman, Math 6112 notes on inverse limits and profinite groups"
      url: "https://people.math.osu.edu/cogdell.1/6112-Osserman-www.pdf"
    - title: "H. W. Lenstra, Profinite groups and Galois groups"
      url: "https://websites.math.leidenuniv.nl/algebra/Lenstra-Profinite.pdf"
---

## Definition

A **directed set** is a nonempty preorder $(I,\le)$ such that for every $i,j\in I$
there is a $k\in I$ with $i\le k$ and $j\le k$
([[def-directed-set-and-net]]).

An **inverse system of groups** indexed by $I$ is a family of groups
$(G_i)_{i\in I}$ together with homomorphisms

$$
\varphi_{ij}:G_j\to G_i \qquad (i\le j)
$$

satisfying $\varphi_{ii}=\operatorname{id}_{G_i}$ and
$\varphi_{ik}=\varphi_{ij}\circ\varphi_{jk}$ whenever $i\le j\le k$
([[def-group-homomorphism]]).
