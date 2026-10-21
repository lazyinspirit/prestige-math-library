---
id: lem-magnus-commutator-degree-and-truncation
kind: lemma
title: "Magnus commutator degree and finite truncation"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-lower-central-series-and-magnus-expansion-for-links
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Ryan Stees, Milnor’s Invariants for Knots and Links in Closed Orientable 3-Manifolds"
      url: "https://scholarworks.iu.edu/iuswrrest/api/core/bitstreams/54c7d68f-d982-4e1f-9550-e54140ada5ea/content"
      locator: "§2.5, printed pp. 16–18 (PDF pp. 24–26)"
    - title: "John Milnor, Link Groups"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnorlink.pdf"
      locator: "§3, PDF pp. 7–12"
---

## Statement

Let $F_r$ be the free group and $E$ the Magnus expansion from the preceding
definition, with augmentation ideal $\mathfrak m$. If
$u\in\Gamma_pF_r$ and $v\in\Gamma_qF_r$ for $p,q\ge1$, then
$$
E([u,v])\in 1+\mathfrak m^{p+q}.
$$
Consequently $E(\Gamma_qF_r)\subseteq1+\mathfrak m^q$ for every $q\ge1$.
In particular, reduction of $E$ modulo $\mathfrak m^{d+1}$ factors through
$F_r/\Gamma_{d+1}F_r$ and its coefficients through degree $d$ are independent
of the representative word.

## Statement references

[[def-lower-central-series-and-magnus-expansion-for-links|Lower-central series and Magnus expansion]]

## Facts & Assumptions

**Given:** The free group, lower-central series, Magnus map, and augmentation
ideal from the preceding definition.

[F1] The series map $E$ is a group homomorphism, $E(F_r)\subseteq1+\mathfrak m$,
and $\mathfrak m^a\mathfrak m^b\subseteq\mathfrak m^{a+b}$.
[[def-lower-central-series-and-magnus-expansion-for-links]]

## Proof

1.1 In any filtered associative ring, write $U=1+a$ and $V=1+b$ with
$a\in\mathfrak m^p$ and $b\in\mathfrak m^q$. Since $U,V$ are units,
$$
[U,V]-1=(UV-VU)U^{-1}V^{-1}=(ab-ba)U^{-1}V^{-1}.
$$
By [F1], $ab-ba\in\mathfrak m^{p+q}$, and multiplication by units preserves
this two-sided ideal. Therefore $[U,V]\in1+\mathfrak m^{p+q}$. Applying this
to $U=E(u)$ and $V=E(v)$ proves the first claim. [F1, algebra]

1.2 Every free generator and its inverse map to a series with constant term
$1$, so [F1] gives $E(\Gamma_1F_r)=E(F_r)\subseteq1+\mathfrak m$. Assume
$E(\Gamma_qF_r)\subseteq1+\mathfrak m^q$. Each generator
$[u,v]$ of $\Gamma_{q+1}F_r=[F_r,\Gamma_qF_r]$ has $u\in F_r$ and
$v\in\Gamma_qF_r$, so step 1.1 puts its image in $1+\mathfrak m^{q+1}$.
Products and inverses of elements in $1+\mathfrak m^{q+1}$ remain in that
subgroup; hence the inclusion holds for all of $\Gamma_{q+1}F_r$. Induction
proves it for every $q$. [F1, step 1.1, algebra, induction]

2.1 If two words represent the same element of $F_r/\Gamma_{d+1}F_r$, their
quotient lies in $\Gamma_{d+1}F_r$. By step 1.2 its expansion is
$1$ modulo $\mathfrak m^{d+1}$. Multiplicativity of $E$ then makes the two
truncated expansions equal, proving representative-independence of every
coefficient of degree at most $d$. [F1, step 1.2, algebra] ∎
