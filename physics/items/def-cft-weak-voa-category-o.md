---
id: def-cft-weak-voa-category-o
kind: definition
title: Finite-energy-coset category O for a conformal vertex algebra
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: mathematics
deps:
  - def-conformal-vertex-algebra
  - def-vertex-algebra-module
  - def-admissible-vertex-algebra-module
dependency_roles:
  def-conformal-vertex-algebra: mathematical-premise
  def-vertex-algebra-module: mathematical-premise
  def-admissible-vertex-algebra-module: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Chongying Dong, Haisheng Li, and Geoffrey Mason, Regularity of Rational Vertex Operator Algebras
      url: https://arxiv.org/pdf/q-alg/9508018v1
      locator: "§2, category O definition and Remark 2.5, printed pp. 3–4."
---

## Definition

Let $V$ be a conformal vertex algebra of CFT type and $M$ a weak $V$-module. For $h\in\mathbb C$, its generalized $L_0$-eigenspace is $M_{[h]}:=\{v\in M:(L_M(0)-hI)^qv=0\text{ for some integer }q\ge1\}$. The module $M$ lies in **VOA category $\mathcal O$** when $L_M(0)$ is locally finite (each vector lies in a finite-dimensional $L_M(0)$-invariant subspace) and there are finitely many representatives $h_1,\ldots,h_s$ of distinct cosets in $\mathbb C/\mathbb Z$ such that

$$M=\bigoplus_{j=1}^{s}\bigoplus_{n\in\mathbb Z_{\ge0}}M_{[h_j+n]}.$$

The empty list is allowed only for $M=0$. The induced grading is $M(n):=\bigoplus_{j=1}^{s}M_{[h_j+n]}$. The module Jacobi identity gives $a^M_{(r)}M(n)\subseteq M(n+\mathrm{wt}(a)-r-1)$ for homogeneous $a$, so this is an admissible grading. This is the weak-module category used in the affine regularity argument; it is distinct from Kac–Moody category $\mathcal O$, which imposes finite-dimensional Cartan weight spaces and finite-cone support.

## Definition references

[[def-conformal-vertex-algebra]]

[[def-vertex-algebra-module]]

[[def-admissible-vertex-algebra-module]]
