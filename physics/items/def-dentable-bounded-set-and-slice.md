---
id: def-dentable-bounded-set-and-slice
kind: definition
title: "Dentable bounded set and slice"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-dual-space-of-a-normed-space]
justified_by: []
forward_refs: []
aliases: []
landmark: false
verification:
  audited: 2026-09-14
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "Gilles Pisier, Martingales in Banach Spaces"
      url: "https://webusers.imj-prg.fr/~gilles.pisier/ihp-pisier.pdf"
      locator: "Chapter 2, Remark 2.2, printed p. 34"
pipeline_run: phase-2-next-18
---

## Definition

Let $C$ be a nonempty bounded subset of a real or complex Banach space $X$.
For $x^*\in X^*$ and $\alpha>0$, the **slice** of $C$ determined by
$(x^*,\alpha)$ is

$$S(C,x^*,\alpha):=\left\{x\in C:\operatorname{Re}x^*(x)>\sup_{y\in C}\operatorname{Re}x^*(y)-\alpha\right\}.$$

The real part is omitted over the real field. Boundedness of $C$ and continuity
of $x^*$ make the displayed supremum finite, and its defining property makes
the slice nonempty.

The norm diameter of $D\subseteq X$ is
$\operatorname{diam}D:=\sup\{\|x-y\|:x,y\in D\}$, with diameter $0$ for a
singleton. The set $C$ is **dentable** if for every $\varepsilon>0$ it has a
slice $S(C,x^*,\alpha)$ with diameter less than $\varepsilon$.

## Remarks

- If $C$ has diameter zero, the zero functional gives the whole set as a slice,
  so $C$ is dentable. This includes the singleton unit ball of the zero Banach
  space.
- If $C$ has positive diameter and a slice is smaller than $C$, its defining
  functional is necessarily nonzero. Thus the zero functional introduces no
  spurious nondegenerate denting.
- Strict inequality and $\alpha>0$ ensure that endpoint nonattainment of the
  supremum does not make a slice empty.
