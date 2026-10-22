---
id: thm-freedman-disk-embedding-for-good-groups
kind: theorem
title: "Freedman disk-embedding theorem for good groups"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-freedman-good-group-and-disk-embedding-data
  - def-good-fundamental-group-for-disk-embedding
  - lem-freedman-casson-handle-skyscraper-and-surgery-modules
  - thm-freedman-disk-embedding-theorem-proof-modules
  - def-countable-choice
dependency_level: 3
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Michael H. Freedman and Frank Quinn, Topology of 4-Manifolds"
      url: "https://archive.mpim-bonn.mpg.de/4789/1/FreedmanQuinn-TopologyOf4Manifolds-PMS39.pdf"
      locator: "§5.1, Theorems 5.1A–5.1B, printed pp.85–87"
    - title: "Stefan Behrens et al., The Disc Embedding Theorem"
      url: "https://doi.org/10.1093/oso/9780198841319.001.0001"
      locator: "Chapter 11, disc-embedding theorem statement and intersection hypotheses"
---

## Statement

Assume the Axiom of Countable Choice. Let $X$ be a compact connected oriented smooth $4$-manifold with nonempty boundary and good fundamental group $G=\pi_1(X)$. Let $f_1,\ldots,f_n:(D^2,S^1)\looparrowright(X,\partial X)$ be proper generic immersed disks with pairwise disjoint embedded boundary circles. Suppose they admit framed immersed algebraically dual spheres $g_1,\ldots,g_n$ with $\lambda(f_i,g_j)=\delta_{ij}$, $\lambda(g_i,g_j)=0$, and $\mu(g_i)=0$, and suppose $\lambda(f_i,f_j)=0$ for $i\ne j$ and $\mu(f_i)=0$ for all $i$, in the equivariant intersection conventions of the disk-embedding data definition. Then the disks are homotopic rel boundary, preserving the boundary framings, to pairwise disjoint locally flat properly embedded disks in $X$.

## Statement references

[[def-freedman-good-group-and-disk-embedding-data|The relative disk data and equivariant intersection hypotheses]]

[[def-good-fundamental-group-for-disk-embedding|The good-group condition]]

[[thm-freedman-disk-embedding-theorem-proof-modules|The standardized-tower core construction]]

[[def-countable-choice|Axiom of Countable Choice used by the tower construction]]

Michael H. Freedman and Frank Quinn, *Topology of 4-Manifolds*, §5.1, Theorems 5.1A–5.1B, https://archive.mpim-bonn.mpg.de/4789/1/FreedmanQuinn-TopologyOf4Manifolds-PMS39.pdf

## Facts & Assumptions

**Given:** Countable choice, good $G$, and the stated algebraically unobstructed disk-embedding datum.

[F1] [[def-freedman-good-group-and-disk-embedding-data]]: The vanishing $λ$ and $μ$ conditions are Wall obstruction hypotheses, and the framed spheres have equivariant intersection matrix the identity with the disks.

[F2] [[def-good-fundamental-group-for-disk-embedding]]: Goodness is the $\pi_1$-null disk property required by the height-raising construction.

[F3] [[thm-freedman-disk-embedding-theorem-proof-modules]]: A tower that has a relative standardization homeomorphism has locally flat disk cores with the prescribed boundaries and framings.

[F4] [[lem-freedman-casson-handle-skyscraper-and-surgery-modules]]: For a supplied smooth neighborhood and smooth generic maps, boundary collars and normal framings, the good-group construction produces capped-grope skyscrapers, relative standard handle charts and disjoint locally flat disks in the original relative homotopy classes.

[A1] [[def-countable-choice]]: Every countable family of nonempty sets admits a choice function.

## Proof

1.1 The given disks and framed dual spheres satisfy the input interface of [F1], and the ambient fundamental group satisfies the good-group hypothesis [F2]. [given, F1, F2]

1.2 If the given disk and sphere maps, boundary collars and framings are smooth, [F4] applies with the supplied smooth neighborhood $V=X$. It supplies the tower construction and relative standardness, and gives the claimed disjoint locally flat disks and relative homotopies directly. Thus the smooth-input construction is proved; it is not an unresolved arbitrary tower-existence or standardness premise. [A1, F4, step 1.1]

1.3 The literal input is broader: [F1] defines generic immersions by topological local sheet charts, not by smoothness in the given smooth structure of $X$. A smooth ambient manifold does not turn those boundary germs, collars and extending normal framings into smooth data. To invoke [F4] in this case one still needs an actual relative comparison: transport the finite TOP framed boundary/collar datum to smooth boundary/collar data by a compatible ambient homeomorphism, replace the transported disk and sphere maps by smooth generic maps preserving the relative homotopy classes and Wall data, and compare the framings. Pulling back the output and its relative homotopies would then give the original fixed-boundary conclusion. No such general TOP boundary/collar comparison is established in this carrier. The literal broader conclusion therefore remains held at precisely that interface; the proved smooth-input construction is not being asserted for the unconverted TOP datum. [A1, F1, F4, step 1.2]

## Unresolved proof obligation

Supply the finite relative TOP framed-input and boundary/collar comparison described in step 1.3, including compatible ambient transport, smooth generic approximation and preservation of the relative homotopy, Wall and framing data. The smooth-input good-group tower construction and standardness are already supplied by [F4]; this remaining TOP input comparison is not inferred from ambient smoothness.
