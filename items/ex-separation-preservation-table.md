---
id: ex-separation-preservation-table
kind: example
title: "A worked preservation table for subspaces and products of the standard, cofinite, and ordinal topologies"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-supplied
deps: [thm-positive-heredity-of-separation-axioms, thm-positive-productivity-of-separation-axioms, def-standard-topologies, def-order-topology-on-an-ordinal]
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "J. P. May, An Outline Summary of Basic Point Set Topology, §6"
      url: "https://math.uchicago.edu/~may/FINITE/REUNotes2010/Topology10.pdf"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
pipeline_run: null
---

## Example

The discrete topology is $T_1$, Hausdorff, regular, normal, completely regular, and completely normal: singleton complements and singleton sets give all required separating opens, and every function to $[0,1]$ is continuous. Its subspaces and products keep the positive properties listed in [[thm-positive-heredity-of-separation-axioms]] and [[thm-positive-productivity-of-separation-axioms]].

For an infinite set with the cofinite topology of [[def-standard-topologies]], every singleton is closed, so the space is $T_1$; two nonempty open sets intersect, so it is not Hausdorff. This displays why the positive table does not infer a higher axiom from $T_1$ alone. An ordinal with the order topology of [[def-order-topology-on-an-ordinal]] supplies the contrasting clopen order intervals used by the deleted-plank construction.
