---
id: def-baire-sequence-space
kind: definition
title: "Baire sequence space $\\mathbb N^{\\mathbb N}$ and its cylinder topology"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-product-topology, def-standard-topologies, def-the-set-of-functions-from-one-set-to-another]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "David Marker, Descriptive Set Theory, §§1–2"
      url: "https://www.math.uic.edu/~marker/math512/dst.pdf"
    - title: "Michael Kunzinger, General Topology, §§11.3–11.4"
      url: "https://www.mat.univie.ac.at/~mike/teaching/ss16/general_topology.pdf"
    - title: "MFF General Topology course summary, §4.3"
      url: "https://www.karlin.mff.cuni.cz/~cuth/doc/MFF/OT/ot_ENG.pdf"
    - title: "Jesse Peterson, Real Analysis, §§3.6–3.7"
      url: "https://math.vanderbilt.edu/peters10/teaching/fall2016/RealAnalysis.pdf"
pipeline_run: null
---

## Definition

The **Baire sequence space** is $\mathcal N:=\mathbb N^{\mathbb N}$, the set of functions from $\mathbb N$ to itself ([[def-the-set-of-functions-from-one-set-to-another]]), with the product topology obtained by giving each copy of $\mathbb N$ the discrete topology ([[def-product-topology]], [[def-standard-topologies]]). For a finite sequence $s=(s_0,\ldots,s_{k-1})$, its cylinder is $N_s:=\{x\in\mathcal N:x_i=s_i\text{ for }i<k\}$. The empty sequence has cylinder $\mathcal N$, and these cylinders form a basis.

