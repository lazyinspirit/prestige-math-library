---
id: ex-the-profinite-completion-of-the-integers
kind: example
title: "The profinite completion of the integers is the inverse limit of the rings Z mod n"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-profinite-completion-of-an-abstract-group, def-canonical-map-to-the-profinite-completion, thm-kernel-and-density-of-the-canonical-map-to-the-profinite-completion]
proof_strategy: "direct"
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Brian Osserman, Math 6112 notes on inverse limits and profinite groups"
      url: "https://people.math.osu.edu/cogdell.1/6112-Osserman-www.pdf"
    - title: "H. W. Lenstra, Profinite groups and Galois groups"
      url: "https://websites.math.leidenuniv.nl/algebra/Lenstra-Profinite.pdf"
---

## Example

The profinite completion of $\mathbb Z$ is

$$
\widehat{\mathbb Z}=\varprojlim_{n\ge 1} \mathbb Z/n\mathbb Z,
$$

where the transition maps are reduction modulo divisibility.

## Facts & Assumptions

**Given:** The additive group $\mathbb Z$.

[L1] The profinite completion is the inverse limit over all finite-index normal
subgroups ([[def-profinite-completion-of-an-abstract-group]]).

## Verification

**Proof technique:** direct.

1.1 Every subgroup of $\mathbb Z$ has the form $n\mathbb Z$, and it has finite index exactly when $n\ge 1$. Because $\mathbb Z$ is abelian, these are all normal. [given]

2.1 The quotient by $n\mathbb Z$ is the cyclic group $\mathbb Z/n\mathbb Z$, and if $m\mid n$ then the map $\mathbb Z/n\mathbb Z\to\mathbb Z/m\mathbb Z$ is reduction modulo $m$. So [L1] identifies the profinite completion with the displayed inverse limit. [L1, step 1.1] ∎
