---
id: ex-stabilizing-a-map-between-spheres
kind: example
title: Stabilizing a map between spheres
status: draft
origin: pipeline
deps: ["def-stable-stem-of-the-sphere", "prop-maps-of-prespectra-induce-functorial-maps-on-stable-homotopy-groups", "prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant"]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: J. P. May, A Concise Course in Algebraic Topology
      url: https://web.archive.org/web/20220823180711if_/http://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: Chapter 22, Section 2, printed pages 176--177
---

## Example

Let $f:S^{n+k}\to S^n$ be based, where $n\geq0$ and $n+k\geq1$. Then $f$
determines a stable class

$$[f]_{\mathrm{st}}\in\pi_k^s$$

represented at every later stage $n+r$ by the iterated suspension
$\Sigma^r f:S^{n+k+r}\to S^{n+r}$.

## Facts & Assumptions

[F1] The sphere-stem bonding relation identifies a stage representative with its suspension ([[def-stable-stem-of-the-sphere]]).

[F2] Higher homotopy groups are invariant under based homotopy ([[prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant]]).

## Verification

**Given:** A based map $f:S^{n+k}\to S^n$ with $n+k\geq1$.

1.1 The homotopy class $[f]\in\pi_{n+k}(S^n)$ is a legal representative in the colimit defining $\pi_k^s$. [F1]

1.2 By definition of that colimit's bonding map, $(n,[f])\sim(n+1,[\Sigma f])$. Iterating gives $(n,[f])\sim(n+r,[\Sigma^r f])$ for every $r\geq0$. [F1]

2.1 A based homotopy $f\simeq f'$ gives the same stage class by [F2], and its suspensions do likewise, so it gives the same stable class. This is consistent with strict-map functoriality for suspension prespectra. Nothing here says that the original unstable class can be recovered from its stable image. $\square$ [F1, F2]
