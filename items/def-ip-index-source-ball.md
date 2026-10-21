---
id: def-ip-index-source-ball
kind: definition
title: Spectral-index source balls for compact operators
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-ip-compact-linear-inverse-model
  - def-absolute-value-and-singular-values-of-a-compact-operator
  - def-compact-spectral-filter-and-qualification
  - def-countable-choice
  - def-operator-norm
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Christian Clason, Regularization of Inverse Problems, lecture notes — Section 4.2, printed pp. 36–43"
      url: "https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf"
      locator: "Section 4.2, printed pp. 36–43 (PDF pp. 39–40): source-set and modulus conventions."
    - title: "Bernd Hofmann and Peter Mathé, A Note on the Modulus of Continuity for Ill-Posed Problems in Hilbert Space"
      url: "https://www.tu-chemnitz.de/mathematik/ip/fulltext/hofmann_b76.pdf"
      locator: "Section 1, PDF pp. 2–3, equations (4), (6), and (7): general spectral source sets and centered/two-truth moduli."
---

## Definition

Assume Countable Choice. Let $X$ and $Y$ be real or complex Hilbert spaces over the same scalar field and let $K:X\to Y$ be compact. Write $\kappa:=\|K\|$, $S:=K^*K$, and $|K|:=S^{1/2}$, and let $\Lambda_K$ be zero together with the positive eigenvalues of $|K|$. An admissible spectral index is a bounded function $\psi:\Lambda_K\to[0,\infty)$ with $\psi(0)=0$. Define $\psi(|K|)$ by the compact spectral multiplier of $S$ with scalar function $t\mapsto\psi(\sqrt t)$. For $\rho>0$ define $X_{\psi,\rho}(K):=\{\psi(|K|)w:w\in X,\ \|w\|_X\le\rho\}$. For $\nu>0$, $\psi_\nu(t)=t^\nu$ defines the power source ball $X_{\nu,\rho}(K)$. If $\kappa>0$ and $q>0$, define the logarithmic spectral-index candidate by $\psi_{\log,q}(0)=0$ and $\psi_{\log,q}(t)=(1+\log(\kappa/t))^{-q}$ for positive $t\in\Lambda_K$; when it is bounded, it defines $X_{\log,q,\rho}(K)$.

## Definition references

[[def-countable-choice|Axiom of Countable Choice]]

[[def-absolute-value-and-singular-values-of-a-compact-operator|Absolute value of a compact operator]]

[[def-compact-spectral-filter-and-qualification|Compact spectral multiplier and source-power convention]]

[[def-ip-compact-linear-inverse-model|Compact Hilbert-space inverse model]]

[[def-operator-norm|Operator norm]]

[Clason, *Regularization of Inverse Problems*, Section 4.2](https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf)

[Hofmann and Mathé, *A Note on the Modulus of Continuity*, Section 1](https://www.tu-chemnitz.de/mathematik/ip/fulltext/hofmann_b76.pdf)
