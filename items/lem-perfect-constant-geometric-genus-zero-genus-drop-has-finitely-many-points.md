---
dependency_level: 3
id: lem-perfect-constant-geometric-genus-zero-genus-drop-has-finitely-many-points
kind: lemma
title: Geometric-genus-zero genus drop over perfect constants has finitely many points
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-axiom-of-choice
  - lem-relative-Frobenius-curve-models-stabilize-at-geometric-genus
  - lem-relative-Frobenius-subfields-of-a-geometric-curve-have-degree-p
  - lem-geometric-normalization-descends-to-finite-purely-inseparable-extension
  - thm-genus-zero-point-implies-projective-line
  - thm-purely-inseparable-extension-characterizations
  - thm-tower-law-for-finite-field-extensions
  - lem-infinite-points-force-a-rational-purely-inseparable-cover-to-be-smooth
justified_by: []
proof_strategy: contradiction
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. F. Voloch, A Diophantine problem on algebraic curves over function fields of positive characteristic, §4 Theorem 3 geometric-genus-zero branch, printed p. 125; perfect-constant reconstruction"
      url: https://numdam.org/item/BSMF_1991__119_1_121_0.pdf
    - title: "Bjorn Poonen, Rational Points on Varieties, §9.5.2, printed pp. 287–288; conservative and genus-drop branch context"
      url: https://math.mit.edu/~poonen/papers/Qpoints.pdf
verification: {}
---

## Statement

Assume AC. Let $k$ be any perfect field of characteristic $p>0$, let
$K/k$ be finitely generated of positive transcendence degree, and let
$C/K$ be a regular projective geometrically integral curve. If its
arithmetic genus is positive and its geometric normalization genus is
zero, then $C(K)$ is finite. No finite-constant-field or one-variable
restriction is imposed. The geometric-genus-one branch is not included.

## Facts & Assumptions

**Given:** AC, the perfect constants, function field and regular
projective curve with the two genus conditions of the Statement.

[A1] AC is assumed. [[def-axiom-of-choice]]

[F1] The regular projective models $C_e$ of
$L_e=K K(C)^{p^e}$ have nonincreasing arithmetic genera $g_e$, eventually
equal to the geometric normalization genus, and finite degree-$p$ maps
$C_e\to C_{e+1}$. Infinitely many original $K$-points give infinitely
many $K$-points at every index.
[[lem-relative-Frobenius-curve-models-stabilize-at-geometric-genus]]

[F2] Each field step $L_e/L_{e+1}$ has degree $p$ and exponent one.
Purely inseparable elements have a $p$-power in the base, and degrees
multiply in finite towers.
[[lem-relative-Frobenius-subfields-of-a-geometric-curve-have-degree-p]]
[[thm-purely-inseparable-extension-characterizations]]
[[thm-tower-law-for-finite-field-extensions]]

[F3] Geometric normalization genus is nonnegative and at most the
arithmetic genus, with equality if and only if the curve is smooth.
A smooth proper geometrically integral genus-zero curve with a rational
point is projective line.
[[lem-geometric-normalization-descends-to-finite-purely-inseparable-extension]]
[[thm-genus-zero-point-implies-projective-line]]

[F4] Over perfect constants, a regular projective geometrically integral
degree-$p$ purely inseparable cover of a rational function field with
infinitely many points is smooth of arithmetic genus zero, in arbitrary
finite base dimension.
[[lem-infinite-points-force-a-rational-purely-inseparable-cover-to-be-smooth]]

## Axiom use

AC is inherited through the field and model construction and the
rational-cover supplier. The least zero-genus index is a least natural
number, not a further infinite choice.

## Proof

**Proof technique:** contradiction; use the first genus-zero Frobenius
model and contradict the positive genus of its preceding rational cover.

1.1 Suppose $C(K)$ is infinite. Apply [F1]. Its initial genus $g_0$ is positive and its eventual genus is zero by hypothesis. Let $n\ge1$ be the least index with $g_n=0$. Monotonicity and eventual zero give $g_e\ge0$ at every index, so $g_{n-1}>0$. Every $C_e(K)$ is infinite by [F1]. By [F3], the curve $C_n$ of arithmetic genus zero also has geometric genus zero and is smooth; a point of its infinite rational point set then gives $C_n\cong\mathbf P^1_K$. Thus $L_n=K(x)$ for a transcendental $x$. [F1, F3, given, construct, assume-contra]

2.1 Choose $y\in L_{n-1}\setminus L_n$. The degree-$p$ exponent-one assertion in [F2] gives $y^p=r(x)\in K(x)$. Its generated intermediate field is all of $L_{n-1}$: its degree over $L_n$ is greater than one and divides the prime $p$ by the tower formula, so equals $p$. Hence $K(C_{n-1})=K(x,y)$ with the nontrivial degree-$p$ presentation required by [F4]. The curve $C_{n-1}$ is regular, projective and geometrically integral by [F1], and has infinitely many $K$-points. [F1, F2, construct, algebra, step 1.1]

3.1 Apply [F4] to $C_{n-1}$. It has arithmetic genus zero, contradicting $g_{n-1}>0$ from step 1.1. Thus $C(K)$ cannot be infinite and is finite. The proof uses only the separately proved Frobenius-model stabilization and rational-cover parameter argument; no elliptic quotient or Mordell–Weil input is involved. [F4, given, step 1.1, step 2.1, discharge-contradiction] ∎
