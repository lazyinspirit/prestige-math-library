---
dependency_level: 8
id: lem-perfect-constant-regular-function-field-mordell-isotriviality
kind: lemma
title: "Function-field Mordell for regular curves over perfect constants"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-axiom-of-choice
  - def-function-field-with-exact-constant-field
  - lem-geometric-normalization-descends-to-finite-purely-inseparable-extension
  - lem-perfect-constant-geometric-genus-zero-genus-drop-has-finitely-many-points
  - lem-perfect-constant-geometric-genus-one-genus-drop-has-finitely-many-points
  - lem-perfect-constant-regular-curve-with-high-geometric-genus-is-conservative
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Bjorn Poonen, Rational Points on Varieties, Theorem 9.5.10, printed pp. 287–288; full regular-input branch under perfect constants reconstructed locally"
      url: https://math.mit.edu/~poonen/papers/Qpoints.pdf
    - title: "J. F. Voloch, A Diophantine problem on algebraic curves over function fields of positive characteristic, Theorems 1–3; genus-drop and all-dimensional refinements proved locally"
      url: https://numdam.org/item/BSMF_1991__119_1_121_0.pdf
verification: {}
---

## Statement

Assume AC. Let $k$ be a perfect field of characteristic $p>0$, and let
$K/k$ be finitely generated of positive transcendence degree with exact
constant field $k$. Let $C/K$ be a regular projective geometrically integral
curve of arithmetic genus $g>1$. If $C(K)$ is infinite, then $C$ is smooth,
and there are a finite field extension $L/K$ and a smooth projective
geometrically integral curve $C_0/k_L$ with
$$C_L\cong(C_0)_L,$$
where $k_L$ is the exact constant field of $L$ relative to $k$. No
smoothness premise is added to the regular input, and $k$ need not be finite.

## Facts & Assumptions

**Given:** AC and the field and regular curve hypotheses of the Statement,
with infinitely many rational points.

[A1] AC is assumed; exact constants mean relative algebraic closure in
the function field. [[def-axiom-of-choice]]
[[def-function-field-with-exact-constant-field]]

[F1] A geometrically integral projective characteristic-$p$ curve has a
geometric normalization of genus $h$ with $0\le h\le g$, obtained smoothly
after finite purely inseparable field extension.
[[lem-geometric-normalization-descends-to-finite-purely-inseparable-extension]]

[F2] Under perfect constants, a regular projective geometrically integral
curve of positive arithmetic genus and geometric normalization genus zero
has finitely many rational points; with arithmetic genus greater than one,
the same conclusion holds when its geometric normalization genus is one.
[[lem-perfect-constant-geometric-genus-zero-genus-drop-has-finitely-many-points]]
[[lem-perfect-constant-geometric-genus-one-genus-drop-has-finitely-many-points]]

[F3] Under perfect exact constants, a regular projective geometrically
integral curve with infinitely many rational points and geometric
normalization genus at least two is smooth and becomes a smooth constant
curve over the exact constant field after a finite field extension.
[[lem-perfect-constant-regular-curve-with-high-geometric-genus-is-conservative]]

## Axiom use

AC and its declared consequences are inherited from the geometric
normalization, genus-drop and descent suppliers.

## Proof

**Proof technique:** direct; use the proved genus-drop finiteness results
to retain the full regular-input perfect-constant branch.

1.1 Let $h$ be the geometric normalization genus from [F1]. It is a nonnegative integer. If $h=0$, the first part of [F2] makes $C(K)$ finite since $g>1$ implies $g>0$. If $h=1$, the second part of [F2] makes it finite. Each conclusion is incompatible with the given infinite point set. Thus $h\ge2$. [A1, F1, F2, given, algebra]

2.1 Apply [F3] to the original regular curve $C/K$ with this value of $h$. It proves smoothness and supplies the finite extension $L/K$ and smooth projective exact-constant model $C_0/k_L$ of the Statement. This proof treats the two low geometric genera explicitly and does not assume away genus drop. [F3, step 1.1] ∎
