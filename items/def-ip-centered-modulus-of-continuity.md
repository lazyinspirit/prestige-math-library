---
id: def-ip-centered-modulus-of-continuity
kind: definition
title: Centered conditional modulus of continuity
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-ip-compact-linear-inverse-model
  - def-hilbert-space
  - def-bounded-linear-operator
  - def-kernel-and-image-of-a-linear-map
  - def-orthogonality-and-orthogonal-complement
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Christian Clason, Regularization of Inverse Problems, lecture notes — Section 4.2, printed pp. 36–43"
      url: "https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf"
      locator: "Section 4.2, printed pp. 36–43 (PDF pp. 39–40): centered conditional modulus."
    - title: "Bernd Hofmann and Peter Mathé, A Note on the Modulus of Continuity for Ill-Posed Problems in Hilbert Space"
      url: "https://www.tu-chemnitz.de/mathematik/ip/fulltext/hofmann_b76.pdf"
      locator: "Section 1, PDF pp. 2–3, equations (6) and (7): two-truth and centered moduli."
---

## Definition

For a compact operator $K:X\to Y$ between real or complex Hilbert spaces over the same scalar field, write $N(K):=\{x\in X:Kx=0\}$. For a set $M$ with $0\in M\subseteq N(K)^\perp$ and $\delta\ge0$, define $\varepsilon_K(M,\delta):=\sup\{\|x\|_X:x\in M,\ \|Kx\|_Y\le\delta\}\in[0,+\infty]$.

## Definition references

[[def-hilbert-space|Hilbert space]]

[[def-bounded-linear-operator|Bounded linear operator]]

[[def-kernel-and-image-of-a-linear-map|Kernel of a linear map]]

[[def-ip-compact-linear-inverse-model|Compact Hilbert-space inverse model]]

[[def-orthogonality-and-orthogonal-complement|Orthogonal complement]]

[Clason, *Regularization of Inverse Problems*, Section 4.2](https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf)

[Hofmann and Mathé, *A Note on the Modulus of Continuity*, Section 1](https://www.tu-chemnitz.de/mathematik/ip/fulltext/hofmann_b76.pdf)
