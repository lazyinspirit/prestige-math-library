---
id: def-profinite-completion-of-an-abstract-group
kind: definition
title: "The profinite completion is the inverse limit of the finite quotients G over N"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-directed-set-and-inverse-system-of-groups, def-profinite-topology-on-an-abstract-group, def-quotient-group, def-inverse-limit-topology-for-finite-discrete-groups, lem-inverse-limit-of-finite-discrete-groups-is-a-closed-topological-subgroup, def-profinite-group-by-inverse-limit]
sources:
  scraped: []
  references:
    - title: "Brian Osserman, Math 6112 notes on inverse limits and profinite groups"
      url: "https://people.math.osu.edu/cogdell.1/6112-Osserman-www.pdf"
    - title: "H. W. Lenstra, Profinite groups and Galois groups"
      url: "https://websites.math.leidenuniv.nl/algebra/Lenstra-Profinite.pdf"
---

## Definition

Let $G$ be an abstract group. Its **profinite completion** is the inverse limit

$$
\widehat G:=\varprojlim_{N\trianglelefteq G,\ [G:N]<\infty} G/N,
$$

where the index set is the directed family of finite-index normal subgroups,
ordered by reverse inclusion, and the transition maps are the natural quotient
homomorphisms $G/N'\to G/N$ whenever $N'\subseteq N$
([[def-directed-set-and-inverse-system-of-groups]],
[[def-profinite-topology-on-an-abstract-group]], [[def-quotient-group]]).

The indexing family is nonempty because it contains $G$. It is directed because
$N_1\cap N_2$ is normal and has finite index: the diagonal map embeds
$G/(N_1\cap N_2)$ into the finite group $G/N_1\times G/N_2$, and in the
reverse-inclusion order $N_1\cap N_2$ is a common upper bound of $N_1$ and
$N_2$.

Give each quotient the discrete topology and $\widehat G$ the inverse-limit
topology of [[def-inverse-limit-topology-for-finite-discrete-groups]]. With
this topology it is a topological group by
[[lem-inverse-limit-of-finite-discrete-groups-is-a-closed-topological-subgroup]].
Since it is itself an inverse limit of finite discrete groups, it is profinite
by [[def-profinite-group-by-inverse-limit]].
