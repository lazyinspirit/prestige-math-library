---
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
id: ex-one-dimensional-clifford-algebra
kind: example
title: A one-dimensional Clifford algebra for any quadratic coefficient
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: clifford-universal-algebras-and-pbw-examples
dependency_level: 4
deps: [def-clifford-algebra-of-a-quadratic-space, thm-clifford-pbw-basis-and-associated-graded]
justified_by: []
landmark: false
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
---

## Example

Let $k$ be a field of characteristic not $2$, let $V=ke$ and let $B(e,e)=a\in k$. Then $\mathrm{Cl}(V,Q)$ has basis $1,\bar e$ and multiplication table determined by $\bar e^{\,2}=a1$. This remains true at $a=0$; no matrix classification for $a\ne0$ is asserted.

## Facts & Assumptions

**Given:** The one-dimensional quadratic space $V=ke$ and the scalar $a=B(e,e)$.

[F1] For a one-dimensional quadratic space, the ordered Clifford monomials $1,\bar e$ form a basis ([[thm-clifford-pbw-basis-and-associated-graded]]).

[F2] The canonical generator satisfies $\bar e^{\,2}=Q(e)1$ ([[def-clifford-algebra-of-a-quadratic-space]]).

## Verification

**Proof technique:** direct.

1.1 Since $(e)$ is an ordered basis and $Q(e)=B(e,e)=a$, [F1] gives the basis $1,\bar e$ and [F2] gives $\bar e^{\,2}=a1$. [given, F1, F2]

2.1 Bilinearity and the unit law determine every product of basis elements from this relation; when $a=0$, [F1] still ensures $\bar e\ne0$, while [F2] gives $\bar e^2=0$. [step 1.1, algebra] ∎
