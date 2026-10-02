---
id: def-quasi-invariant-measure-on-a-homogeneous-space
kind: definition
title: "Quasi-invariant Radon measure on G/H"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: []
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Bekka–de la Harpe–Valette, Kazhdan’s Property (T), Appendices B and E"
      url: "https://ncatlab.org/nlab/files/BekkaHarpeValetteOnKashdanPropertyT.pdf"
    - title: "Bruhat, Lectures on Lie Groups and Representations of Locally Compact Groups, Chapters 1 and 7"
      url: "https://ncatlab.org/nlab/files/Bruhat-LecturesOnLie.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Definition

Let $G$ be a locally compact Hausdorff group and $H\leq G$ a closed subgroup. Write $X=G/H$ and let $g_*\mu(E)=\mu(g^{-1}E)$ for the pushforward under the left action. A nonzero Radon measure $\mu$ on $X$ is **quasi-invariant** if $g_*\mu$ and $\mu$ are equivalent for every $g\in G$, meaning they have the same null Borel sets. A representative is **strongly quasi-invariant** when the Radon–Nikodym densities $d(g_*\mu)/d\mu$ can be chosen jointly continuous and positive as a function of $(g,xH)$.

The first condition depends only on the measure class. The stronger condition names a regular representative and a continuous density cocycle; it is the version constructed from a rho-function below.
