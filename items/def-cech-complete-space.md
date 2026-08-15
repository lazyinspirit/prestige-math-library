---
id: def-cech-complete-space
kind: definition
title: "Čech-complete spaces as $G_\\delta$ subspaces of Hausdorff compactifications"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-compactification-of-a-tychonoff-space, def-g-delta-and-f-sigma-in-a-topological-space]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
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

A Tychonoff space $X$ is **Čech-complete** when there is a Hausdorff compactification $(K,i)$ of $X$ ([[def-compactification-of-a-tychonoff-space]]) for which $i[X]$ is a $G_\delta$ subset of $K$ ([[def-g-delta-and-f-sigma-in-a-topological-space]]). The definition asks for one compactification; [[thm-cech-completeness-is-independent-of-compactification]] proves the equivalent every-compactification form.

