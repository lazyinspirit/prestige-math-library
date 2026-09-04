---
id: def-graded-ring-and-graded-module
kind: definition
title: "Nonnegatively graded rings and modules, homogeneous elements, and twists"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
aliases: []
verification:
  audited: 2026-09-01
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Stacks Project, Section 10.56: Graded rings"
      url: "https://stacks.math.columbia.edu/tag/00JL"
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, §20"
      url: "https://web.mit.edu/18.705/www/12Nts.pdf"
---

## Definition

A **nonnegatively graded ring** is a commutative ring
$$ S=\bigoplus_{n\ge 0} S_n $$
such that $S_nS_m\subseteq S_{n+m}$ for all $m,n\ge 0$. An element of $S_n$ is
called **homogeneous of degree $n$**.

If $S$ is graded, a **graded $S$-module** is an $S$-module
$$ M=\bigoplus_{n\in\mathbb Z} M_n $$
with $S_iM_j\subseteq M_{i+j}$ for all $i\ge 0$ and $j\in\mathbb Z$. An element
of $M_j$ is homogeneous of degree $j$.

For an integer $a$, the **twist** $M(a)$ is the graded module with
$$ M(a)_n=M_{n+a}. $$
Thus a homogeneous element of degree $n+a$ in $M$ is viewed as degree $n$ in
$M(a)$.

The graded ring is **standard graded over $S_0$** when $S$ is generated as an
$S_0$-algebra by finitely many degree-one elements.
