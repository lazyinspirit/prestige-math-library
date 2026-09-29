---
id: def-hk-and-hk-zero-notation
kind: definition
title: The notation $H^k$ and the reserved zero-boundary symbol
status: draft
origin: pipeline
deps: [def-sobolev-space-wkp-and-its-norm, lem-sobolev-norm-is-well-defined-and-definite, def-countable-choice]
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: John K. Hunter, Notes on Partial Differential Equations (2014), Chapter 3 §3.5
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: Definition 3.23, printed p. 59 (PDF p. 63)
---

## Sources

- John K. Hunter, *Notes on Partial Differential Equations*, Chapter 3 §3.5,
  Definition 3.23, printed p. 59 (PDF p. 63). Hunter writes
  $W^{k,2}(\Omega)=H^k(\Omega)$ after defining the integer-order Sobolev space.
  This item applies that notation to the real or complex almost-everywhere
  Sobolev classes fixed in this library.

## Definition

Assume Countable Choice, as in
[[def-sobolev-space-wkp-and-its-norm]] and
[[lem-sobolev-norm-is-well-defined-and-definite]]. For an open set
$\Omega\subseteq\mathbb R^n$, $n\ge1$, an integer $k\ge0$, and
$\mathbb K\in\{\mathbb R,\mathbb C\}$, set
$$H^k(\Omega;\mathbb K):=W^{k,2}(\Omega;\mathbb K).$$
The elements are the same almost-everywhere classes, and their weak
derivatives and norm are exactly those already defined for $W^{k,2}$. When the
scalar field is fixed, write $H^k(\Omega)$.

The notation $H^k_0(\Omega)$ is reserved for the later definition by closure of
compactly supported smooth functions in the Sobolev norm. This item assigns no
boundary values to an equivalence class and asserts no characterization by
pointwise vanishing or by traces.
