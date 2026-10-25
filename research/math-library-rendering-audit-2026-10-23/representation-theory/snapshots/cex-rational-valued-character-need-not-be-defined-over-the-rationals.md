---
id: cex-rational-valued-character-need-not-be-defined-over-the-rationals
kind: counterexample
title: "A rational-valued irreducible character need not come from a $\\mathbb Q$-representation"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-rational-character-ring, def-quaternion-group-of-order-eight, prop-the-quaternion-group-has-order-eight-and-a-unique-element-of-order-two]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "The Magma Handbook, The Schur Index, Example: Schur Index"
      url: "https://docs.magma-maths.org/RepresentationTheory/CharactersOfFiniteGroups/schur-index.html"
    - title: "Kay Yang, Rational Valued Characters, Introduction"
      url: "https://www.math.toronto.edu/murnaghan/courses/mat445/kayyang.pdf"
---

## Statement refuted

Every rational-valued irreducible character of a finite group is afforded by a
representation over $\mathbb Q$.

Let $Q_8=\{\pm1,\pm i,\pm j,\pm k\}$ be the quaternion group
([[def-quaternion-group-of-order-eight]]). Consider the complex representation
$\rho:Q_8\to\operatorname{GL}_2(\mathbb C)$ given by

$$\rho(i)=\begin{pmatrix} i & 0\\ 0 & -i \end{pmatrix},\qquad \rho(j)=\begin{pmatrix} 0 & 1\\ -1 & 0 \end{pmatrix},\qquad \rho(k)=\begin{pmatrix} 0 & i\\ i & 0 \end{pmatrix}.$$

Then $\rho(-1)=-I_2$, and its character $\chi$ has values

$$\chi(1)=2,\qquad \chi(-1)=-2,\qquad \chi(\pm i)=\chi(\pm j)=\chi(\pm k)=0.$$

So $\chi$ is rational-valued. However, the cited Schur-index computation shows
that $\chi$ has Schur index $2$ over $\mathbb Q$, so no $\mathbb Q$-representation
affords it.

## Facts & Assumptions

**Given:** The quaternion group $Q_8$ and the matrices displayed above.

[F1] The group $Q_8$ is the eight-element group $\{\pm1,\pm i,\pm j,\pm k\}$ ([[def-quaternion-group-of-order-eight]]).

[F2] In $Q_8$, the element $-1$ is the unique element of order $2$, while $\pm i$, $\pm j$, and $\pm k$ all have order $4$ ([[prop-the-quaternion-group-has-order-eight-and-a-unique-element-of-order-two]]).

## Counterexample

**Proof technique:** direct.

1.1 The displayed matrices satisfy $\rho(i)^2=\rho(j)^2=\rho(k)^2=-I_2$ and $\rho(i)\rho(j)=\rho(k)$, $\rho(j)\rho(i)=-\rho(k)$. Hence they obey the same relations as the generators of $Q_8$ from [F1], so they define a two-dimensional complex representation of $Q_8$. Their traces are $2,-2,0,0,0$ on the conjugacy classes $1$, $-1$, $\{\pm i\}$, $\{\pm j\}$, and $\{\pm k\}$, so the character is rational-valued. [F1, F2, given, algebra]

2.1 The Magma Schur-index example in the cited source computes that this irreducible character has Schur index $2$ over $\mathbb Q$. A character with Schur index greater than $1$ is not afforded by any $\mathbb Q$-representation. Therefore this rational-valued irreducible character is not defined over $\mathbb Q$, refuting the statement. [step 1.1, algebra] ∎
