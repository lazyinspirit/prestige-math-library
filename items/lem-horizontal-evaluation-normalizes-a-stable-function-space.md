---
id: lem-horizontal-evaluation-normalizes-a-stable-function-space
kind: lemma
title: Horizontal evaluation normalizes a stable space of curve functions
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-derivation-algebra
  - lem-curve-closed-subsets-finite
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Hans Grauert, Mordells Vermutung, §4(2), printed pp. 143–144; evaluation-basis refinement of the horizontal normalization argument"
      url: https://numdam.org/item/PMIHES_1965__25__131_0.pdf
    - title: "P. Samuel, Lectures On Old And New Results On Algebraic Curves, Chapter III, printed pp. 73–78"
      url: https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr36.pdf
verification: {}
---

## Statement

Assume AC. Let $C$ be an integral finite-type curve over a field $K$, and
let $V\subseteq K(C)$ be a finite-dimensional $K$-vector space. For an
arbitrary index set $J$, let $\delta_j$ be derivations of $K$ and $D_j$
derivations of $K(C)$ extending them. Suppose $D_j(V)\subseteq V$ for every
$j$. Let $S\subseteq C(K)$ be infinite. Assume every $f\in V$ is regular
at every $P\in S$, and evaluation is horizontal:
$$ (D_j f)(P)=\delta_j(f(P))\qquad(f\in V, P\in S, j\in J). $$
Writing $d=\dim_K V$, there are distinct $P_1,\ldots,P_d\in S$ and a
unique basis $f_1,\ldots,f_d$ of $V$ such that $f_i(P_\ell)$ is $1$ if
$i=\ell$ and $0$ otherwise. Every $D_j f_i=0$. The conclusion includes
$d=0$ and an empty family of derivations.

## Facts & Assumptions

**Given:** The curve, finite-dimensional function space, derivations and
compatible infinite evaluation set of the Statement.

[A1] AC is assumed. [[def-axiom-of-choice]]

[F1] Every proper closed subset of an integral finite-type curve is finite.
[[lem-curve-closed-subsets-finite]]

[F2] Derivations are additive and satisfy Leibniz; the extension condition
implies $D_j(af)=\delta_j(a)f+aD_j(f)$ for $a\in K$.
[[def-derivation-algebra]]

## Axiom use

AC is inherited through [F1]. The construction chooses only finitely many
points and vectors, independently of the cardinality of $J$.

## Proof

**Proof technique:** direct; choose an invertible evaluation matrix and
differentiate its normalization to the identity matrix.

1.1 A nonzero rational function $f\in K(C)$ vanishes at only finitely many points where it is regular. On a nonempty affine open where $f$ is a quotient of regular functions, its zeros are a proper closed subset of that open, hence finite by [F1] applied to the integral affine curve. The complement of this open in $C$ is also proper closed and finite by [F1]. Thus only finitely many additional zeros occur outside it. Consequently any nonzero $f\in V$ has a nonzero evaluation at some point of $S$ outside any prescribed finite subset. [A1, F1, given]

2.1 Begin with the zero evaluation map on $V$. If evaluation at already selected distinct points has rank less than $d$, choose a nonzero function in its kernel. Step 1.1 gives a new point of $S$ where this function evaluates nonzero, so adjoining that evaluation strictly increases the rank. After $d$ steps the map $V\to K^d$, $f\mapsto(f(P_1),\ldots,f(P_d))$, has rank $d$ and is an isomorphism. The inverse images of the standard basis give the unique normalized basis $f_1,\ldots,f_d$. If $d=0$, the empty map between zero spaces is already an isomorphism. [given, construct, algebra, step 1.1]

3.1 For any $j\in J$, stability puts $D_j f_i$ in $V$. Its evaluation at $P_\ell$ is $\delta_j(f_i(P_\ell))=0$, because each value is zero or one. Injectivity of the evaluation map in step 2.1 gives $D_j f_i=0$. The same normalized basis works for all $j$ without choosing anything for each index. When $J$ is empty, this final assertion is vacuous and the evaluation-basis construction still applies. [F2, given, step 2.1] ∎
