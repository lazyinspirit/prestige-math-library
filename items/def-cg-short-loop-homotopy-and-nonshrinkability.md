---
id: def-cg-short-loop-homotopy-and-nonshrinkability
kind: definition
title: "Short loops, the uniform-plus-length topology, short-loop homotopies, and nonshrinkability"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 9
deps: [def-cg-cat-zero-cat-one-and-local-geodesic, lem-cg-metric-target-length-reparametrization-and-lower-semicontinuity, def-metric-space, def-metric-continuity, def-metric-compactness, def-upper-bound, def-interval, def-real-limit, cor-pi-is-the-first-positive-sine-zero]
justified_by: [lem-cg-bowditch-quantitative-short-loop-control]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "B. H. Bowditch, Notes on locally CAT(1) spaces (Aberdeen preprint, 27 scanned sheets)"
      url: "https://www.bhbowditch.com/papers/bhb-catone.pdf"
      locator: "§§3.1.4–3.1.5, printed pp. 20–21 (loop classes of closed local geodesics and the short-loop homotopy); §3.4 (polygonal transfer of short loops)"
    - title: "Martin R. Bridson and André Haefliger, Metric Spaces of Non-Positive Curvature (Springer Grundlehren 319, 1999; author-hosted PDF)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bridsonhaefligerx.pdf"
      locator: "I.1.1–I.1.5 and I.3.1 (length of paths, local geodesics, length spaces); I.3.15 (loops and closed local geodesics)"
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (first-edition author manuscript, 2007-2008)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Appendix I.2.6–I.2.19, printed pp. 502–507 (local geodesics I.2.16, the cone on a CAT(1)-space I.2.17–I.2.18)"
verification:
  audited: "2026-10-08"
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Definition

Fix the following definitions and conventions; they are used throughout this page. Let $X$ be a compact locally CAT(1) metric space ([[def-cg-cat-zero-cat-one-and-local-geodesic]], [[def-metric-compactness]]).

**(1) Rectifiable loops and normalization.** A **loop** in $X$ is a continuous map $\gamma\colon[0,1]\to X$ with $\gamma(0)=\gamma(1)$; its **length** $L(\gamma)\in[0,\infty]$ is the supremum of its polygonal sums and $\gamma$ is **rectifiable** if $L(\gamma)<\infty$ ([[lem-cg-metric-target-length-reparametrization-and-lower-semicontinuity]], [[def-upper-bound]]). A rectifiable loop is **normalized** if it is parametrized proportionally to arclength, i.e. $L(\gamma|_{[s,t]})=(t-s)\,L(\gamma)$ for all $0\le s\le t\le1$ ([[def-interval]]); by the arc-length parametrization clause of [[lem-cg-metric-target-length-reparametrization-and-lower-semicontinuity]] every rectifiable loop of positive length has a normalized reparametrization, and a loop of length $0$ is normalized exactly when it is constant. Henceforth every loop on this page is normalized.

**(2) Short loops.** A loop $\gamma$ is **short** if $L(\gamma)<2\pi$ ([[cor-pi-is-the-first-positive-sine-zero]]). The constant loop at any point is short.

**(3) The uniform-plus-length topology.** For loops $\gamma,\gamma'$ write $\gamma_k\to\gamma$ in the **uniform-plus-length topology** when $\sup_{t\in[0,1]}d(\gamma_k(t),\gamma(t))\to0$ and $L(\gamma_k)\to L(\gamma)$ ([[def-real-limit]]). Uniform convergence of the maps alone does not bound rectifiable lengths, so the length term belongs to the topology by definition; the resulting uniform length bound $b<2\pi$ and the common fine mesh of a compact short family are proved in [[lem-cg-bowditch-quantitative-short-loop-control]].

**(4) Short-loop homotopies.** A **short-loop homotopy** from $\gamma_0$ to $\gamma_1$ is a family $(\gamma_s)_{s\in[0,1]}$ of short loops with $\gamma_0,\gamma_1$ the given loops such that $s\mapsto\gamma_s$ is continuous for the uniform-plus-length topology ([[def-metric-continuity]]). A short loop is **shrinkable** if it is short-loop homotopic to some constant loop, and **nonshrinkable** otherwise. Short-loop homotopy is an equivalence relation on short loops (reflexivity, symmetry and transitivity hold by reparametrizing the parameter interval).

**(5) Comparison with ordinary null-homotopy.** A null-homotopy of a short loop allows intermediate loops of arbitrary length, whereas a short-loop homotopy demands that *every* intermediate loop be short; the comparison of the two notions, and the fact that a closed local geodesic is never shrinkable, are theorems of this page, not part of the definition.

**(6) Polygons are defined separately.** The cyclic tuples, midpoint operation and zero-limit basin used below are defined without reference to short-loop homotopy; their identification with the classes of (4) is a theorem proved after the basin's topological properties are established.
