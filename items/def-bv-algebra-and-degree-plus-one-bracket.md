---
id: def-bv-algebra-and-degree-plus-one-bracket
kind: definition
title: BV algebra with a degree-one generator
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Ezra Getzler, Batalin–Vilkovisky algebras and two-dimensional topological field theories, arXiv:hep-th/9212043v3"
      url: "https://arxiv.org/pdf/hep-th/9212043"
      locator: "§1, Definition 1.1 and Proposition 1.2, PDF pp. 4–6: the degree-one operator, second-order identity, derived bracket, and odd Poisson identities."
    - title: "Paul Seidel, Lectures on Categorical Dynamics and Symplectic Topology, MIT Spring 2013 lecture notes"
      url: "https://math.mit.edu/~seidel/texts/937-lecture-notes.pdf"
      locator: "Lecture 12, §12.7, printed pp. 118–119 (PDF pp. 119–120): the square-zero BV operator, seven-term relation, derived bracket, and its degree−1 convention."
    - title: "Yvette Kosmann-Schwarzbach and Juan Monterde, Divergence operators and odd Poisson brackets, Annales de l’Institut Fourier 52 (2002)"
      url: "https://arxiv.org/pdf/math/0002209"
      locator: "§1.1, printed pp. 420–421 (PDF pp. 1–2): the odd Poisson bracket and the second-order generator convention; the paper uses a Z/2 grading."
---

## Definition

Let $k$ be a field of characteristic $0$. A unital $\mathbb Z$-graded associative $k$-algebra
$A=\bigoplus_{r\in\mathbb Z}A^r$ is **graded commutative** when its unit $1$ has
degree $0$ and homogeneous $a,b$ satisfy $ab=(-1)^{|a||b|}ba$. A linear map
$\Delta:A^r\to A^{r+1}$ is a **BV generator of degree $+1$** when
$\Delta(1)=0$, $\Delta^2=0$, and it has order at most two in the following
graded-commutator convention. For homogeneous operators $P,Q$, set
$$[P,Q]=PQ-(-1)^{|P||Q|}QP,$$
and for homogeneous $a\in A$ let $m_a(x)=ax$. The order condition is
$$\left[\left[\left[\Delta,m_a\right],m_b\right],m_c\right]=0$$
for all homogeneous $a,b,c\in A$. The pair $(A,\Delta)$ with these data is a
**BV algebra in the degree-$+1$ convention**. Its derived bracket is the
bilinear operation of degree $+1$
$$\{a,b\}=(-1)^{|a|}\bigl(\Delta(ab)-(\Delta a)b-(-1)^{|a|}a\Delta b\bigr)$$
on homogeneous elements, extended by linearity.

This item fixes the grading, commutator order condition, and bracket formula.
It does not include a separate differential $Q$ or assert compatibility with
one. The associated odd-skew, biderivation, and Jacobi identities are proved in
[[thm-bv-derived-bracket-is-odd-poisson]].

## Remarks

Getzler writes the second-order condition as a seven-term identity and also
includes a separate differential in his larger structure. Seidel uses a
degree-$-1$ operator, and Kosmann-Schwarzbach–Monterde formulate the general
odd bracket first in a $\mathbb Z/2$-graded setting. This item fixes its own
degree-$+1$ commutator and bracket conventions; no result in a different
grading is imported without a conversion.
