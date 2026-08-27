---
id: def-minimal-normal-subgroup-and-socle
kind: definition
title: "Minimal normal subgroups and the socle of a finite group"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-generated-subgroup, def-normal-subgroup]
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "James E. Humphreys, A Course in Group Theory, Chapter 16"
      url: "https://djvu.online/file/3PC3bR3vM2abK"
---

## Definition

Let $G$ be a finite group.

A nontrivial normal subgroup $N \trianglelefteq G$ is a **minimal normal
subgroup** of $G$ if the only normal subgroups of $G$ contained in $N$ are
$1$ and $N$ itself.

The **socle** of $G$ is the subgroup

$$\operatorname{soc}(G):=\langle N : N \trianglelefteq G \text{ is a minimal normal subgroup}\rangle,$$

that is, the subgroup generated in the sense of [[def-generated-subgroup]] by
all minimal normal subgroups of $G$.
