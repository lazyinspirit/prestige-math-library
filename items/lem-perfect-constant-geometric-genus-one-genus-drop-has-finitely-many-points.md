---
dependency_level: 4
id: lem-perfect-constant-geometric-genus-one-genus-drop-has-finitely-many-points
kind: lemma
title: "Geometric-genus-one genus drop over perfect constants has finitely many points"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-axiom-of-choice
  - lem-relative-Frobenius-curve-models-stabilize-at-geometric-genus
  - lem-geometric-normalization-descends-to-finite-purely-inseparable-extension
  - lem-infinite-points-force-an-elliptic-purely-inseparable-cover-to-be-smooth
  - lem-proper-cohomology-field-extension
justified_by: []
proof_strategy: contradiction
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. F. Voloch, A Diophantine problem on algebraic curves over function fields of positive characteristic, Theorems 2–3; normalization stabilization and genus-one cover inputs proved locally"
      url: https://numdam.org/item/BSMF_1991__119_1_121_0.pdf
    - title: "Bjorn Poonen, Rational Points on Varieties, Theorem 9.5.10, perfect-constant regular branch; nonsmooth imperfect constants excluded explicitly"
      url: https://math.mit.edu/~poonen/papers/Qpoints.pdf
verification: {}
---

## Statement

Assume AC. Let $k$ be any perfect field of characteristic $p>0$, let
$K/k$ be finitely generated of positive transcendence degree, and let
$C/K$ be a regular projective geometrically integral curve of arithmetic
genus $g>1$. If its geometric normalization has genus one, then $C(K)$
is finite. This includes arbitrary perfect infinite constants and every
positive finite transcendence degree; no Lang–Neron theorem is an input.

## Facts & Assumptions

**Given:** AC and the function field and curve with the arithmetic and
geometric normalization genera in the Statement.

[A1] AC is assumed. [[def-axiom-of-choice]]

[F1] For $L=K(C)$ and $L_e=K L^{p^e}$ there are regular projective
geometrically integral models $C_e/K$, with $C_0=C$, finite purely
inseparable degree-$p$ morphisms $C_e\to C_{e+1}$, and nonincreasing
arithmetic genera eventually equal to the geometric normalization genus
of $C$. Infinite rational point sets propagate along these finite maps.
[[lem-relative-Frobenius-curve-models-stabilize-at-geometric-genus]]

[F2] For a geometrically integral projective characteristic-$p$ curve,
its geometric normalization genus is at most its arithmetic genus, with
equality if and only if it is smooth. Normalization is realized after a
finite purely inseparable extension. Coherent cohomology commutes with
field extension.
[[lem-geometric-normalization-descends-to-finite-purely-inseparable-extension]]
[[lem-proper-cohomology-field-extension]]

[F3] A regular projective geometrically integral curve over a finitely
generated positive-transcendence-degree extension of perfect constants,
with a finite purely inseparable degree-$p$ map to a smooth pointed
genus-one curve, is smooth if it has infinitely many rational points.
[[lem-infinite-points-force-an-elliptic-purely-inseparable-cover-to-be-smooth]]

## Axiom use

AC is inherited from the actual Frobenius-model, normalization and jet
cover suppliers. The least-index selection uses the ordinary well-order
of the natural numbers.

## Proof

**Proof technique:** contradiction; at the first arithmetic-genus-one
Frobenius model the preceding elliptic cover cannot retain genus drop.

1.1 Suppose $C(K)$ is infinite and apply [F1]. Every $C_e$ has geometric normalization genus one. Indeed, after an algebraic closure $\Omega/K$, geometric integrality identifies its function field with the fraction field $\Omega L_e=\Omega L^{p^e}=(\Omega L)^{p^e}$ inside the geometric function field; the last equality uses perfectness of $\Omega$. The $p^e$th-power field isomorphism transports the normal proper model, changing its base field by the automorphism $a\mapsto a^{p^e}$ of $\Omega$. On affine charts it transports integral closures, and on a finite affine cover it transports the coherent cohomology complex. Thus it preserves the normalization genus, which for $C$ is one. This verifies the genus assertion at every index, rather than inferring it merely from eventual stabilization. [A1, F1, F2, given, algebra, assume-contra]

2.1 By [F1] the arithmetic genera $g_e$ are nonincreasing and eventually one. Since $g_0>1$, there is a least $n\ge1$ with $g_n=1$ and $g_{n-1}>1$. All the rational point sets remain infinite. Step 1.1 and the equality criterion [F2] make $C_n$ smooth; one of its rational points makes it a pointed genus-one curve. The map $C_{n-1}\to C_n$ is finite purely inseparable of degree $p$, so [F3] makes $C_{n-1}$ smooth as well. By step 1.1 and [F2], its arithmetic genus then equals one, contradicting $g_{n-1}>1$. [F1, F2, F3, construct, algebra, step 1.1]

3.1 Therefore the assumed infinite rational point set is impossible, and $C(K)$ is finite. All fields and all maps used above retain the literal perfect-constant and regular-input hypotheses; no assertion about a regular nonsmooth curve over imperfect constants has entered the proof. [F1, F2, F3, step 2.1, discharge-contradiction] ∎
