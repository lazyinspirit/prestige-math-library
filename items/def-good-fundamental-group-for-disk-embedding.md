---
id: def-good-fundamental-group-for-disk-embedding
kind: definition
title: "Good fundamental groups for the disk-embedding theorem"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-disk-like-capped-grope-height-one-and-one-half
dependency_level: 1
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Stefan Behrens et al., The Disc Embedding Theorem"
      url: "https://dokumen.pub/the-disc-embedding-theorem-0198841310-9780198841319.html"
      locator: "Definition 12.12 and Chapter 19, printed pp.180–181 and 273–282"
---

## Definition

Let $\Gamma$ be a group. Say that $\Gamma$ is **good for the Freedman disk-embedding theorem** when it has the $\pi_1$-null disk property: for every disk-like capped grope $G^c$ of height $1.5$ with a chosen basepoint and every homomorphism $\phi:\pi_1(G^c)\to\Gamma$, there is a proper framed generic immersion $d:D^2\looparrowright G^c$ of a disk into the grope's actual four-dimensional framed block. Its boundary is the core attaching circle, with the normal framing specified by the attaching solid-torus neighborhood, and each double-point loop of $d$, regarded after basing as an element of $\pi_1(G^c)$, is sent to the identity by $\phi$. This definition of a good group is a hypothesis on $\Gamma$; it does not assert that any particular group is good.

## Definition references

[[def-disk-like-capped-grope-height-one-and-one-half|The precise 4-dimensional grope, height, attaching-region, and double-point-loop conventions]]

Stefan Behrens et al., *The Disc Embedding Theorem*, Definition 12.12 and Chapter 19, https://dokumen.pub/the-disc-embedding-theorem-0198841310-9780198841319.html
