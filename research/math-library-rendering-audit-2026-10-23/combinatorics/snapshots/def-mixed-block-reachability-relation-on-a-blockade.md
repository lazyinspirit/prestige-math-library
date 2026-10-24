---
id: def-mixed-block-reachability-relation-on-a-blockade
kind: definition
title: "The mixed-block reachability relation on a blockade"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-blockade-length-and-width, def-edges-between-sets-and-pure-mixed-pairs]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-28
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Section 6"
      url: "https://arxiv.org/html/2606.06258v2"
pipeline_run: null
---

## Definition

Let $\mathcal L=(L_1,\dots,L_n)$ be a blockade in a finite graph $G$. Define a
relation $\mathcal M$ on the set of blocks of $\mathcal L$ by declaring
$L_i\,\mathcal M\,L_j$ if either $i=j$ or there is a sequence of blocks

$$L_i=L_{r_1},L_{r_2},\dots,L_{r_m}=L_j$$

such that every consecutive pair $L_{r_t},L_{r_{t+1}}$ is mixed in the sense
of [[def-edges-between-sets-and-pure-mixed-pairs]].

Thus two blocks are $\mathcal M$-related exactly when one can move from one to
the other through a chain of mixed block pairs.
