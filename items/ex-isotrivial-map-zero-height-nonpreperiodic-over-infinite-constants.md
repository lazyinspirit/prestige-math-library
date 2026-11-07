---
id: ex-isotrivial-map-zero-height-nonpreperiodic-over-infinite-constants
kind: example
title: An isotrivial power map over infinite constants has a zero-height non-preperiodic point
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
  - def-axiom-of-choice
  - def-one-variable-function-field-with-constant-field
  - def-finitely-generated-field-extension
  - lem-rational-function-field-has-exact-constant-field
  - def-rational-map-on-projective-line-degree
  - def-isotrivial-rational-map-over-function-field
  - def-function-field-height-on-projective-line
  - thm-function-field-projective-height-well-defined
  - thm-function-field-dynamical-height-growth-and-functional-equation
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Matthew Baker, A Finiteness Theorem for Canonical Heights Attached to Rational Maps over Function Fields, §1.2"
      url: "https://arxiv.org/pdf/math/0601046v2"
    - title: "Laura DeMarco, Bifurcations, intersections, and heights, §1.2"
      url: "https://msp.org/ant/2016/10-5/ant-v10-n5-p.pdf"
verification: {}
---

## Example

Assume the Axiom of Choice. Let $k=\overline{\mathbb Q}$, $K=k(t)$,
$\phi(z)=z^2$, and
$P=[2:1]\in\mathbb P^1(K)$. The constant field of $K$ is $k$,
$\phi$ is isotrivial, and $P$ has canonical height zero. Its iterates are
$[2^{2^n}:1]$ for $n\ge0$ and are pairwise distinct, so no two iterates
coincide and $P$ is not preperiodic, where a point is preperiodic when two
forward iterates coincide.

## Example references

[[def-axiom-of-choice]]

[[def-one-variable-function-field-with-constant-field]]

[[lem-rational-function-field-has-exact-constant-field]]

[[def-rational-map-on-projective-line-degree]]

[[def-isotrivial-rational-map-over-function-field]]

[[def-function-field-height-on-projective-line]]

[[thm-function-field-projective-height-well-defined]]

[[thm-function-field-dynamical-height-growth-and-functional-equation]]

## Facts & Assumptions

**Given:** The Axiom of Choice, the algebraically closed field $k=\overline{\mathbb Q}$, the
rational function field $K=k(t)$, $\phi(z)=z^2$, and $P=[2:1]$.

[F1] The field $K/k$ is finitely generated of transcendence degree one and
has exact constant field $k$. ([[def-finitely-generated-field-extension]],
[[lem-rational-function-field-has-exact-constant-field]])

[F2] The map $z\mapsto z^2$ has degree two and is defined over $k$; the
identity Möbius transformation therefore witnesses its isotriviality.
([[def-rational-map-on-projective-line-degree]],
[[def-isotrivial-rational-map-over-function-field]])

[F3] A point with both coordinates in the constant field has projective
height zero; the canonical height limit exists and is nonnegative.
([[thm-function-field-projective-height-well-defined]],
[[thm-function-field-dynamical-height-growth-and-functional-equation]])

## Proof

1.1 The hypotheses in [F1] make $K/k$ a one-variable function field with
exact constants. By [F2], $\phi$ is an isotrivial degree-two rational map.
The point $P$ and every iterate have coordinates in $k$, so each ordinary
height is zero by [F3]; the defining limit is therefore zero.
[F1, F2, F3, given]

2.1 Induction gives $\phi^{\circ n}(2)=2^{2^n}$: it holds at $n=0$, and
squaring $2^{2^n}$ gives $2^{2^{n+1}}$. [given, induction]

2.2 If $m<n$, then $2^m<2^n$, so
$2^{2^m}<2^{2^n}$ as positive integers in $\mathbb Q$. Hence the iterates
are pairwise distinct. A point is preperiodic exactly when two forward
iterates coincide, so $P$ is not preperiodic. [step 2.1, algebra] ∎
