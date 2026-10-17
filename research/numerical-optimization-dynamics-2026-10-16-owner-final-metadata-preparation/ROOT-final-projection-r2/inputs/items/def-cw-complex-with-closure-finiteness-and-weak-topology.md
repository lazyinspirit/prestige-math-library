---
id: def-cw-complex-with-closure-finiteness-and-weak-topology
kind: definition
title: CW complex with closure finiteness and weak topology
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-cell-attachment-by-a-characteristic-map]
verification:
  audited: 2026-09-07
  precheck: n/a
  judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}
sources:
  references:
    - title: Allen Hatcher, Algebraic Topology, Chapter 0
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
---

## Definition

A **CW complex** is a Hausdorff space $X$ with a filtration
$$\varnothing=X^{-1}\subseteq X^0\subseteq X^1\subseteq\cdots,\qquad X=\bigcup_{n\geq0}X^n,$$
where $X^0$ is discrete and $X^n$ is obtained from $X^{n-1}$ by attaching a (possibly infinite) family of $n$-disks along maps $S^{n-1}\to X^{n-1}$ as in [[def-cell-attachment-by-a-characteristic-map]]. The images of the disk interiors are its **open $n$-cells** $e^n_\alpha$, and the disk maps are their characteristic maps. It moreover satisfies: (C) each closed cell $\overline {e^n_\alpha}$ meets only finitely many cells; and (W) $A\subseteq X$ is closed exactly when $A\cap\overline e$ is closed in $\overline e$ for every cell $e$. These are closure finiteness and the weak topology.
