---
id: thm-lipschitz-images-of-null-sets-in-rn-are-null
kind: theorem
title: "A Lipschitz map $\\mathbb{R}^m\\to\\mathbb{R}^m$ sends null sets to null sets"
status: published
origin: session
deps: [def-null-and-content-zero-in-rn, def-lipschitz-holder-contraction, def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, def-multidimensional-rectangle-and-volume, def-integer-power, def-canonical-natural, lem-finite-sum-laws]
justified_by: []
aliases: []
landmark: false
proof_strategy: cases
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis, Jordan Measurable Sets"
      url: "https://www.jirka.org/ra/html/sec_jordansets.html"
    - title: "J. Lebl, Basic Analysis, Outer Measure and Null Sets"
      url: "https://www.jirka.org/ra/html/sec_outermeasure.html"
pipeline_run: null
---

## Statement

If $T:\mathbb R^m\to\mathbb R^m$ is Lipschitz and $E$ is null, then $T[E]$ is null.

## Facts & Assumptions

**Given:** A Lipschitz constant $L\ge0$ and null $E$.

[L1] Lipschitz means $\|T(x)-T(y)\|_2\le L\|x-y\|_2$ ([[def-lipschitz-holder-contraction]]).

[L2] Norm comparisons on $\mathbb R^m$ bound Euclidean diameter of a side-$\ell$ cube by a fixed dimension multiple of $\ell$ ([[def-p-norms-on-rn]], [[lem-p-norms-are-norms-and-induce-the-published-metrics]], [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]]).

## Proof

**Proof technique:** cases.

1.1 If $L=0$, $T[E]$ is empty or a singleton, covered by cubes of arbitrarily small side.   [assume-case zero, L1, given]

1.2 Suppose $L>0$. The image of a side-$\ell$ cube lies in a cube of side $C_mL\ell$, where $C_m$ is the fixed norm-comparison factor. Its volume is $(C_mL)^m\ell^m$.   [assume-case positive, L1, L2, given]

2.1 Given an output budget $\varepsilon$, cover $E$ by cubes with total volume below $\varepsilon/(C_mL)^m$. Replacing each by its image-containing cube gives a cover of $T[E]$ with total volume below $\varepsilon$.   [step 1.2, given]

3.1 Both cases prove nullity. Equal domain and codomain dimensions are used in the volume scaling.  [step 1.1, step 2.1, cases-exhaustive] ∎
