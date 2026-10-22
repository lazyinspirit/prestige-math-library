---
id: def-ip-power-source-set
kind: definition
title: Power source ball
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-ip-index-source-ball
  - lem-ip-index-source-elements-are-minimum-norm
  - def-ip-compact-linear-inverse-model
  - def-compact-spectral-filter-and-qualification
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Christian Clason, Regularization of Inverse Problems, lecture notes — Section 4.2, printed pp. 36–43"
      url: "https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf"
      locator: "Section 4.2, printed pp. 36–43 (PDF pp. 39–40): power source ball X_{nu,rho} and conditional modulus."
    - title: "Bernd Hofmann and Peter Mathé, A Note on the Modulus of Continuity for Ill-Posed Problems in Hilbert Space"
      url: "https://www.tu-chemnitz.de/mathematik/ip/fulltext/hofmann_b76.pdf"
      locator: "Section 1, PDF pp. 2–3, equation (4): source sets defined by spectral functions."
---

## Definition

Assume Countable Choice. Let $K:X\to Y$ be compact between real or complex Hilbert spaces over the same scalar field and let $\nu,\rho>0$. The power source ball is $X_{\nu,\rho}(K):=\{|K|^\nu w:w\in X,\ \|w\|_X\le\rho\}$, where $|K|^\nu=(K^*K)^{\nu/2}$ is defined by compact spectral calculus. It lies in $N(K)^\perp$ and consists of minimum-norm representatives of the exact data $Kx$. In the convention $S=K^*K$ this is the source condition $x=S^{\nu/2}w$.

## Definition references

[[def-ip-compact-linear-inverse-model|Compact Hilbert-space inverse model]]

[[def-ip-index-source-ball|General index source ball]]

[[lem-ip-index-source-elements-are-minimum-norm|Minimum-norm property of index source elements]]

[[def-compact-spectral-filter-and-qualification|Compact spectral power convention]]

[Clason, *Regularization of Inverse Problems*, Section 4.2](https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf)

[Hofmann and Mathé, *A Note on the Modulus of Continuity*, equation (4)](https://www.tu-chemnitz.de/mathematik/ip/fulltext/hofmann_b76.pdf)
