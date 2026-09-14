---
id: def-lower-central-series-and-nilpotent-lie-algebra
kind: definition
title: Lower central series and nilpotent Lie algebras
status: draft
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-lie-algebra-over-a-field, def-lie-subalgebra-ideal-and-center]
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Milne, Lie Algebras, §2.1"
      url: https://www.jmilne.org/math/CourseNotes/LAG.pdf
      locator: "Definition 2.1, printed p. 11"
---

## Definition

Let $\mathfrak g$ be a Lie algebra over a field ([[def-lie-algebra-over-a-field]]).
Its **lower central series** is

$$\gamma _1(\mathfrak g)=\mathfrak g,\qquad \gamma _{r+1}(\mathfrak g)=[\mathfrak g,\gamma _r(\mathfrak g)]\quad(r\geq1),$$

where $[A,B]$ denotes the linear span of all brackets $[a,b]$ with $a\in A$
and $b\in B$. Each $\gamma_r(\mathfrak g)$ is an ideal
([[def-lie-subalgebra-ideal-and-center]]): if $I$ is an ideal, Jacobi shows
$[\mathfrak g,I]$ is an ideal, and induction starts with $I=\mathfrak g$.
Moreover the series descends because
$[\mathfrak g,I]\subseteq I$ for an ideal $I$.

The Lie algebra $\mathfrak g$ is **nilpotent** if
$\gamma_{c+1}(\mathfrak g)=0$ for some integer $c\geq0$. Thus the zero Lie
algebra is nilpotent with $c=0$, while every nonzero abelian Lie algebra is
nilpotent with $c=1$. No finite-dimensional or characteristic hypothesis is
part of the definition.
