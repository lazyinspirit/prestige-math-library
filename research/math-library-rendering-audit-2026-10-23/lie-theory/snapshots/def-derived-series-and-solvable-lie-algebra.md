---
id: def-derived-series-and-solvable-lie-algebra
kind: definition
title: Derived series and solvable Lie algebras
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-lie-algebra-over-a-field, def-lie-subalgebra-ideal-and-center]
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Milne, Lie Algebras, §§3.1–3.2"
      url: https://www.jmilne.org/math/CourseNotes/LAG.pdf
      locator: "§3, definitions preceding Proposition 3.3, printed p. 16"
---

## Definition

Let $\mathfrak g$ be a Lie algebra over a field ([[def-lie-algebra-over-a-field]]).
For linear subspaces $A,B\subseteq\mathfrak g$, write

$$
[A,B]=\operatorname{span}\{[a,b]:a\in A,\ b\in B\}.
$$

The **derived series** of $\mathfrak g$ is

$$\mathfrak g^{(0)}=\mathfrak g,\qquad \mathfrak g^{(r+1)}=[\mathfrak g^{(r)},\mathfrak g^{(r)}]\quad(r\geq0).$$

Each $\mathfrak g^{(r)}$ is an ideal ([[def-lie-subalgebra-ideal-and-center]]).
Indeed, if $I$ is an ideal, Jacobi gives

$$[x,[a,b]]=\bigl[ [x,a],b\bigr]+\bigl[a,[x,b]\bigr]\in[I,I]$$

for $x\in\mathfrak g$ and $a,b\in I$; induction starts with
$I=\mathfrak g$. In particular the series is descending, because
$[I,I]\subseteq I$ for every ideal $I$.

The Lie algebra $\mathfrak g$ is **solvable** if
$\mathfrak g^{(m)}=0$ for some integer $m\geq0$. Thus the zero Lie algebra is
solvable (take $m=0$), and a nonzero abelian Lie algebra is solvable with
$\mathfrak g^{(1)}=0$. No finite-dimensional or characteristic hypothesis is
part of the definition.
