---
id: def-exponent-sum-and-writhe-of-a-braid
kind: definition
title: "Exponent sum and writhe of a braid"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
deps: [def-braid-group-by-the-artin-presentation, thm-von-dyck]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "V. G. Turaev, Quantum Invariants of Knots and 3-Manifolds (de Gruyter Studies in Mathematics 18, 1994)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/turaev5.pdf"
      locator: "Chapter I §§1.2 and 1.5 (braiding, twists and categorical traces), printed pp. 19--22; background conventions. The writhe homomorphism and its shifts are proved here from the cited Artin presentation."
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

For $n\ge2$ let $B_n$ be the braid group of the Artin presentation
([[def-braid-group-by-the-artin-presentation]]), with generators
$\sigma_1,\dots,\sigma_{n-1}$. The assignment

$$\sigma_i\longmapsto 1\qquad(1\le i\le n-1)$$

has equal values on the two sides of every defining relator of that
presentation: a braid relator $\sigma_i\sigma_{i+1}\sigma_i=
\sigma_{i+1}\sigma_i\sigma_{i+1}$ has three letters on each side, and a
distant-commutativity relator $\sigma_i\sigma_j=\sigma_j\sigma_i$ has two
letters on each side. Hence [[thm-von-dyck]] gives a unique homomorphism

$$w_n\colon B_n\longrightarrow\mathbb Z,\qquad w_n(\sigma_i^{\pm1})=\pm1 .$$

It is the **exponent sum**, or **writhe**, of a braid. If
$\beta=\sigma_{i_1}^{\epsilon_1}\cdots\sigma_{i_k}^{\epsilon_k}$ is an Artin
word for $\beta$ with $\epsilon_l\in\{\pm1\}$, then
$w_n(\beta)=\sum_l\epsilon_l$: the number of positive letters minus the number
of negative letters. For $n=0,1$ set $w_n=0$ on the trivial group $B_n$.

The homomorphisms $w_n$ assemble to a function
$w\colon\bigsqcup_{n\ge0}B_n\to\mathbb Z$. Let
$\iota_n\colon B_n\to B_{n+1}$, $\iota_n(\sigma_i)=\sigma_i$, be the standard
inclusion, which is well defined because the defining relators of $B_n$ are
among those of $B_{n+1}$. Then

$$w_{n+1}(\iota_n(\beta))=w_n(\beta),\qquad w_{n+1}(\iota_n(\beta)\sigma_n^{\pm1})=w_n(\beta)\pm1 ,$$

for all $n\ge1$ and $\beta\in B_n$: the first identity holds because both sides
are additive over an Artin word for $\beta$ and agree on generators, and the
second adds the single letter $\sigma_n^{\pm1}$. Consequently $w$ is invariant
under conjugation,

$$w(\gamma\beta\gamma^{-1})=w(\beta)$$

for all braids $\gamma,\beta$ for which the product is defined, since
$w(\gamma\beta\gamma^{-1})=w(\gamma)+w(\beta)-w(\gamma)$.

The exponent sum is invariant under conjugation, while under stabilization it
shifts by $\pm1$; it is not a complete invariant of braids. For instance in
$B_3$ the braids $\sigma_1\sigma_2$ and $\sigma_2\sigma_1$ have equal exponent
sum $2$ and are distinct: their images under $\sigma_i\mapsto(i\ i+1)$
are the two different three-cycles. This generator assignment respects the
Artin relations by direct permutation multiplication, so it extends by
[[thm-von-dyck]].
