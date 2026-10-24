---
id: def-positive-energy-vertex-module
kind: definition
title: Positive-energy module
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps:
  - def-ordinary-vertex-module
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: Antony Wassermann, Kac–Moody and Virasoro Algebras, Chapter III §2
      url: https://arxiv.org/pdf/1004.1287
    - title: Tomoyuki Arakawa and Anne Moreau, Arc Spaces and Vertex Algebras, §3.3
      url: https://www.imo.universite-paris-saclay.fr/~anne.moreau/Arc_space-vertex_algebras-BOOK_version.pdf
---

## Definition

For this page, an **ordinary module of positive energy** for a conformal vertex algebra of CFT type is a nonzero ordinary module as in [[def-ordinary-vertex-module]] for which there is a lowest weight $h\in\mathbb C$ with $M_h\ne0$ and
$$
M=\bigoplus_{n\ge0}M_{h+n}.
$$
The eigenspaces are finite dimensional by ordinariness. This convention implies a lower bound on real parts. It does not impose unitarity, positivity of an inner product, a classification of simple modules, or semisimplicity of their category.
