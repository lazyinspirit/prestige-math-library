---
id: alg-independent-fixed-level-splitting
kind: algorithm
title: Independent fixed-level splitting
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-nested-rare-event-levels
axiom_use: "The procedure takes a finite list of exact conditional samplers and uses only finitely many supplied draws; it adds no arbitrary-index choice."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Adam M. Johansen, Pierre Del Moral, and Arnaud Doucet, Sequential Monte Carlo Samplers for Rare Events, §§2–3"
      url: "https://people.bordeaux.inria.fr/pierre.delmoral/resim_paper.pdf"
    - title: "Gino Biondini, An Introduction to Rare Event Simulation and Importance Sampling, Handbook of Statistics 33, Chapter 2, §8"
      url: "https://www.math.buffalo.edu/~biondini/papers/handbookstatistics2015v33chapter2.pdf"
---

## Definition

Input the nested levels and exact conditional samplers for $\pi_{\ell-1}$ from [[def-nested-rare-event-levels]], a particle count $N\ge1$, and a declared per-draw work cost $c_\ell>0$ for each level. If any conditional sampler is unavailable, return conditional-sampler-unavailable.

For each level $\ell=1,\ldots,L$, independently of every other level, draw $X_{\ell,1},\ldots,X_{\ell,N}$ IID from $\pi_{\ell-1}$. Set
$
\widehat p_\ell=N^{-1}\sum_{i=1}^N\mathbf1_{A_\ell}(X_{\ell,i}),
\qquad
\widehat p=\prod_{\ell=1}^L\widehat p_\ell.
$
Return $\widehat p$, the level counts, total draw work $W=N\sum_{\ell=1}^Lc_\ell$, and status success if all level counts are positive or zero-level-estimate otherwise. The zero estimate is not a proof that $P(A_L)=0$.

The procedure is an ideal independent-level baseline. It does not assert that a branching or Markov mutation method produces independent exact conditional draws.
