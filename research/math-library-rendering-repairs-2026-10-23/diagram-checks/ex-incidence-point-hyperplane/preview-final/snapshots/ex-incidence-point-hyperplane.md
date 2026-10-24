---
id: ex-incidence-point-hyperplane
kind: example
title: The incidence variety of a point and a hyperplane
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-incidence-locus-is-closed, def-plucker-coordinates]
sources:
  scraped: []
  references:
    - title: MIT 18.725 Algebraic Geometry, Lecture 7, Lemma 16
      url: https://ocw.mit.edu/courses/18-725-algebraic-geometry-fall-2015/ec341c7a2524e5dba7c3e939f322613a_MIT18_725F15_notes.pdf
verification:
  audited: 2026-09-07
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Example

In $\mathbf P^n\times(\mathbf P^n)^\vee$, write a point as $[x_0:\cdots:x_n]$ and a hyperplane as $[a_0:\cdots:a_n]$. Incidence is the closed bilinear equation
$$\sum_{i=0}^n a_ix_i=0.$$
For fixed $[a]$ its fibre is that hyperplane $\mathbf P^{n-1}$; for fixed
$[x]$ its fibre is the projective space of hyperplanes through $[x]$, also
$\mathbf P^{n-1}$ when $n\ge1$. When $n=0$, the unique point of
$\mathbf P^0$ lies on no hyperplane: the incidence locus and both fibres are
empty.

## Remarks

The two arrows below retain the chosen point or the chosen hyperplane. Write
$V=k^{n+1}$ and use the line convention for projective space: $[x]$ is a line
in $V$, while $[a]$ is a line in $V^*$ representing the nonzero linear form
$a$ up to scaling, with hyperplane $\mathbf P(\ker a)$.

```tikz
\begin{tikzpicture}[>=stealth]
\node (I) at (0,2.3) {$I=\{([x],[a]):a(x)=0\}$};
\node (P) at (-3,0) {$\mathbf P^n$};
\node (D) at (3,0) {$(\mathbf P^n)^\vee$};
\draw[->] (I) -- node[above left] {$p$} (P);
\draw[->] (I) -- node[above right] {$q$} (D);
\node at (-3,-0.7) {$p([x],[a])=[x]$};
\node at (3,-0.7) {$q([x],[a])=[a]$};
\node at (0,-1.6) {$n\geq 1:\quad p^{-1}([x])\cong\mathbf P^{n-1},\quad q^{-1}([a])\cong\mathbf P^{n-1}$};
\node at (0,-2.3) {$n=0:\quad I=\varnothing,\quad\text{both fibres empty}$};
\end{tikzpicture}
```

For $n\ge1$, the first fibre is $\mathbf P(\{a\in V^*:a(x)=0\})$
and the second is $\mathbf P(\ker a)$, each the projectivization of an
$n$-dimensional vector space. For $n=1$ both are single points; for $n=0$
both vector spaces are zero and have empty projectivization. The diagram
summarizes the equation and fibres above; their verification does not depend
on the picture.
