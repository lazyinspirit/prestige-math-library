---
id: ex-the-deleted-tychonoff-plank-separation-profile
kind: example
title: "Assuming countable choice, the deleted Tychonoff plank worked as $T_3$ but not normal inside its compact Hausdorff normal parent"
status: published
origin: session
deps: [lem-deleted-tychonoff-plank-is-regular-and-nonnormal]
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
    - title: "L. A. Steen and J. A. Seebach, Counterexamples in Topology, deleted Tychonoff plank"
      url: "https://web.math.ucsb.edu/~bigelow/books/counterexamples.pdf"
pipeline_run: null
---

## Example

Assume countable choice. In $P=(\omega_1+1)\times(\omega+1)$ remove the corner $(\omega_1,\omega)$. The resulting plank is regular and $T_1$, hence $T_3$, but it contains the closed edge sets $\{\omega_1\}\times\omega$ and $\omega_1\times\{\omega\}$ that have no disjoint open neighbourhoods.

The parent is compact Hausdorff and normal. The obstruction is concrete: a supposed separation gives an ordinal bound for the countably indexed vertical-tail neighbourhoods, and a horizontal-tail neighbourhood beyond that bound meets a vertical-tail neighbourhood. All stated properties, including the location of countable choice, are proved in [[lem-deleted-tychonoff-plank-is-regular-and-nonnormal]].
