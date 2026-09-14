---
id: thm-cartans-semisimplicity-criterion
kind: theorem
title: Cartan's semisimplicity criterion
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [thm-cartans-solvability-criterion, def-simple-semisimple-and-reductive-lie-algebras, lem-orthogonal-complements-under-invariant-forms-are-ideals]
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Milne, Lie Algebras, Theorem 4.13"
      url: https://www.jmilne.org/math/CourseNotes/LAG.pdf
      locator: "§4, Theorem 4.13, printed p. 43"
---

## Statement

A finite-dimensional Lie algebra over a characteristic-zero field is
semisimple if and only if its Killing form is nondegenerate.

## Facts & Assumptions

**Given:** A finite-dimensional characteristic-zero Lie algebra
$\mathfrak g$ with Killing form $K$.

[L1] The radical of an invariant form is an ideal
([[lem-orthogonal-complements-under-invariant-forms-are-ideals]]).

[L2] Cartan's solvability criterion detects solvability from the relevant
trace pairing ([[thm-cartans-solvability-criterion]]).

[L3] Semisimple means that the solvable radical is zero
([[def-simple-semisimple-and-reductive-lie-algebras]]).

## Proof

**Proof technique:** direct in both directions.

1.1 Suppose $\mathfrak g$ is semisimple and let $\mathfrak a=\mathfrak g^\perp$ be the radical of $K$. It is an ideal by [L1]. For $x,y\in\mathfrak a$, the operator $\operatorname{ad}_x\operatorname{ad}_y$ maps $\mathfrak g$ into $\mathfrak a$ and induces zero on $\mathfrak g/\mathfrak a$; its trace on $\mathfrak g$ therefore equals the trace of its restriction to $\mathfrak a$. Thus the intrinsic Killing form of $\mathfrak a$ is the restriction of $K$, hence zero. [L1, algebra]

1.2 Conversely suppose $K$ is nondegenerate and let $\mathfrak a$ be an abelian ideal. For $a\in\mathfrak a$ and $x\in\mathfrak g$, put $T=\operatorname{ad}_a\operatorname{ad}_x$. Its image lies in $\mathfrak a$, while $T$ vanishes on $\mathfrak a$ because $[x,\mathfrak a]\subseteq\mathfrak a$ and $\mathfrak a$ is abelian. Hence $T^2=0$, so $K(a,x)=\operatorname{tr}(T)=0$. Nondegeneracy forces $a=0$; thus $\mathfrak g$ has no nonzero abelian ideal. [given, algebra]

2.1 By [L2], step 1.1 makes $\mathfrak a$ solvable. It is a solvable ideal of the semisimple algebra $\mathfrak g$, so [L3] gives $\mathfrak a=0$. Therefore $K$ is nondegenerate. [L2, L3, step 1.1]

3.1 If $\mathfrak g$ had a nonzero solvable ideal $\mathfrak r$, let $\mathfrak r^{(m)}$ be the last nonzero term of its derived series: it is nonzero and abelian, and it is an ideal of $\mathfrak g$ because derived terms of an ideal are ideals of the ambient algebra by Jacobi. This contradicts step 1.2. Thus the radical is zero and [L3] makes $\mathfrak g$ semisimple. For $\mathfrak g=0$, the unique bilinear form has zero radical and is nondegenerate in the standard vacuous sense, so both directions still hold. [L3, step 1.2] ∎