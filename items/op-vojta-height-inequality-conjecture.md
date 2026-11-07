---
id: op-vojta-height-inequality-conjecture
kind: open-problem
title: Vojta height inequality over number fields with normal-crossings boundary
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - def-vajta-height-and-proximity-data
  - def-axiom-of-choice
  - def-number-field
  - thm-weil-height-machine-functoriality-and-additivity
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Paul Vojta, Diophantine Approximation and Nevanlinna Theory
      url: https://math.berkeley.edu/~vojta/cime/cime.pdf
      locator: Definitions 14.4–14.5 and Conjecture 14.6(a),(b), printed pp. 159–160.
---

## Open problem

Let $k$ be a number field, let $S$ be a finite set of places containing all archimedean places, let $X/k$ be smooth and projective, let $D$ be a normal-crossings divisor, let $K_X$ be the canonical line bundle, and let $A$ be an ample line bundle. Use the proximity and height functions defined by the fixed data. A subset $\Sigma\subseteq X(k)\setminus\operatorname{Supp}D$ is **generic** if every infinite subset of $\Sigma$ is Zariski dense in $X$.

(a) For every generic subset $\Sigma\subseteq X(k)\setminus\operatorname{Supp}D$, prove that
$$m_S(D,x)+h_{K_X}(x)\le O(1+\log^+h_A(x))$$
for all $x\in\Sigma$, where the implied bound is uniform in $x$.

(b) For every $\epsilon>0$, prove that there is a proper Zariski-closed subset $Z\subsetneq X$, depending only on $X,D,A,\epsilon$ and containing $\operatorname{Supp}D$, such that for every real $C$ the inequality
$$m_S(D,x)+h_{K_X}(x)\le\epsilon h_A(x)+C$$
holds for all but finitely many $x\in(X\setminus Z)(k)$; the exceptional set is allowed to depend on $C$, but $Z$ is not.

## Open problem references

[[def-vajta-height-and-proximity-data]]

[Paul Vojta, *Diophantine Approximation and Nevanlinna Theory*, Conjecture 14.6](https://math.berkeley.edu/~vojta/cime/cime.pdf)

## Facts & Assumptions

**Given:** $k,S,X,D,K_X,A$ and their fixed local Weil functions and height representatives as in the local definition.

[F1] The local definition specifies the absolute proximity $m_S(D,x)=[k:\mathbb Q]^{-1}\sum_{v\in S}\lambda_{D,v}(x)$ with the unrooted product-formula local absolute values, matching the absolute heights modulo bounded functions. The added $1$ in part (a) includes bounded-height points for arbitrary representatives; one could instead normalize the fixed ample height to be at least $e$. ([[def-vajta-height-and-proximity-data]])

[A1] AC is the axiom used by the chosen projective height-machine interface. ([[def-axiom-of-choice]], [[thm-weil-height-machine-functoriality-and-additivity]])

## Status

This records Vojta's Conjecture 14.6(a),(b), with the relative proximity and heights divided by $[k:\mathbb Q]$ to match the library's absolute-height convention. Part (a) writes the bounded term explicitly so its all-point assertion is meaningful even when the chosen ample-height representative vanishes or is negative. That source summarizes established curve cases and selected subspace-theorem cases, but it is not a 2026 survey of the general higher-dimensional statement; no broader present-day status is asserted here.
