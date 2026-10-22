---
id: def-ip-weakly-closed-nonlinear-forward-map
kind: definition
title: Weakly closed nonlinear forward maps on Hilbert spaces
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-ip-forward-map-and-solution-classes
  - def-hilbert-space
  - def-weak-topology-on-a-normed-space
  - def-weak-convergence-of-nets-and-sequences
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Christian Clason, Regularization of Inverse Problems, Chapter 10"
      url: "https://arxiv.org/pdf/2001.00617v2"
    - title: "Benedikt Wirth, Inverse Problems, Chapter 10"
      url: "https://www.uni-muenster.de/AMM/Veranstaltungen/WS21/InverseProblems/lecture2021.pdf"
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
---

## Definition

Let $X$ and $Y$ be real Hilbert spaces, let $D\subseteq X$ be nonempty, and let $F:D\to Y$ be a forward map. The domain $D$ is **weakly closed** when it is closed in the weak topology $\sigma(X,X^*)$, the coarsest topology making every bounded real-linear functional on $X$ continuous. The graph of $F$ is **sequentially weak-to-weak closed** when, for every sequence $(x_n)$ in $D$ and every $x\in X$ and $z\in Y$, the conditions $x_n\rightharpoonup x$ and $F(x_n)\rightharpoonup z$ imply $x\in D$ and $F(x)=z$; here weak convergence means convergence under every bounded real-linear functional on the corresponding Hilbert space. We call $F$ a **weakly closed forward map** when its domain is weakly closed and its graph is sequentially weak-to-weak closed. No linearity, norm continuity, Fréchet differentiability, or convexity is assumed; linear maps are allowed as special cases.

## Definition references

[[def-ip-forward-map-and-solution-classes|General forward maps on an arbitrary domain]]

[[def-hilbert-space|Real Hilbert spaces]]

[[def-weak-topology-on-a-normed-space|The weak topology]]

[[def-weak-convergence-of-nets-and-sequences|Weak sequence convergence]]

[Christian Clason, *Regularization of Inverse Problems*, Chapter 10](https://arxiv.org/pdf/2001.00617v2)

[Benedikt Wirth, *Inverse Problems*, Chapter 10](https://www.uni-muenster.de/AMM/Veranstaltungen/WS21/InverseProblems/lecture2021.pdf)
