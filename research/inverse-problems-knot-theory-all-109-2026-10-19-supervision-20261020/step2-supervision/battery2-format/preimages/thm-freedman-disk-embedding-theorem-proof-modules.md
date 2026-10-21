---
id: thm-freedman-disk-embedding-theorem-proof-modules
kind: theorem
title: "Standardized Casson towers yield locally flat disks"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-freedman-good-group-and-disk-embedding-data
  - def-locally-flat-proper-surface-and-concordance-collars
dependency_level: 2
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
      locator: "§§3.8–5.1, printed pp.59–87"
    - title: "Stefan Behrens et al., The Disc Embedding Theorem"
      url: "https://doi.org/10.1093/oso/9780198841319.001.0001"
      locator: "Chapters 17–18 and 24–28: height raising, embedding, and standardness"
---

## Statement

Let $X$ be a compact oriented topological $4$-manifold with nonempty boundary. A **kinky handle** is a standard $2$-handle whose core disk has finitely many transverse self-plumbings; a **framed Casson-handle tower** is a nested sequence of such stages in which each self-plumbing point of one stage is replaced by a framed kinky handle at the next stage, with the attaching regions matching the preceding stage. Suppose a finite family of these tower $4$-neighborhoods is embedded pairwise disjointly in $X$, with attaching circles in $\partial X$, and carries the algebraic dual data of a disk-embedding datum. If each embedded tower has a homeomorphism of pairs to the standard open $2$-handle $D^2\times\mathbb R^2$ that takes its specified framed attaching region, including its core circle and normal-framing class, to the standard attaching region $S^1\times\mathbb R^2$ with its standard framing, then the inverse images of the cores $D^2\times\{0\}$ form a pairwise disjoint family of locally flat properly embedded disks in $X$, with the prescribed framed boundary circles.

## Statement references

[[def-freedman-good-group-and-disk-embedding-data|The relative disk and dual-sphere interface]]

Stefan Behrens et al., *The Disc Embedding Theorem*, Chapters 17–18 and 24–28, https://doi.org/10.1093/oso/9780198841319.001.0001

## Facts & Assumptions

**Given:** The stated family of towers and their relative standardization homeomorphisms.

[F1] [[def-freedman-good-group-and-disk-embedding-data]]: A disk-embedding datum specifies proper disk boundary circles and their boundary normal-framing classes.

## Proof

1.1 A standard open $2$-handle is $D^2\times\mathbb R^2$, and its core $D^2\times\{0\}$ is a locally flat properly embedded disk whose boundary is the core attaching circle with the standard normal-framing class. [given, construct]

1.2 Pull back each core by the corresponding framing-preserving homeomorphism of pairs. A homeomorphism preserves local flatness, properness and pairwise disjointness, and the stated framing condition transports the standard boundary frame to the prescribed boundary normal-framing class. The pulled-back cores are therefore the required disks. [F1, step 1.1, construct]

