---
id: def-finite-residual-and-residually-finite-group
kind: definition
title: "The finite residual is the intersection of the finite-index normal subgroups, and a group is residually finite when that intersection is trivial"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-profinite-topology-on-an-abstract-group, def-normal-subgroup]
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

For an abstract group $G$ with its profinite-topology data
([[def-profinite-topology-on-an-abstract-group]], [[def-normal-subgroup]]), the
**finite residual** is

$$ R_f(G):=\bigcap_{N\trianglelefteq G,\ [G:N]<\infty} N. $$

The group $G$ is **residually finite** when $R_f(G)=\{1\}$. Equivalently,
every nonidentity element is omitted by some finite-index normal subgroup.
