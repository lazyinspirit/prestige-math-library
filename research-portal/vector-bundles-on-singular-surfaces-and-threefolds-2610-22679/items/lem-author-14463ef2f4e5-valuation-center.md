---
id: lem-author-14463ef2f4e5-valuation-center
kind: lemma
title: A valuation overring has a center
status: published
domain: mathematics
deps:
  - def-valuative-dimension-and-boundedness
dependency_roles:
  def-valuative-dimension-and-boundedness: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 6
---

## Statement
Let $D$ be a domain and $V$ a valuation overring in $K=\operatorname{Frac}(D)$. Then $V$ is local, meaning it has a unique maximal ideal $\mathfrak m$, and if $\mathfrak q=\mathfrak m\cap D$, the inclusion $D\subseteq V$ extends to a local inclusion $D_{\mathfrak q}\subseteq V$. Here local means that the inverse image of the maximal ideal of $V$ is the maximal ideal of $D_{\mathfrak q}$.

## Facts & Assumptions
**Given:** A domain $D$ and a valuation overring $V$ in its fraction field.

**Goal:** Construct its center $\mathfrak q$ and the stated local inclusion.

[F1] For each nonzero $x\in K$, either $x$ or $x^{-1}$ lies in $V$. [[def-valuative-dimension-and-boundedness]]

## Proof
1.1 Let $\mathfrak m$ be the set of nonunits of $V$. If $a$ is a nonunit and $v\in V$, then $va$ cannot be a unit, since an inverse of $va$ would give an inverse of $a$. If nonunits $a,b$ have nonzero sum, [F1] gives either $a/b\in V$ or $b/a\in V$ when both are nonzero; in the first case $a+b=b(1+a/b)$ is a nonunit, and similarly in the second. The zero cases are immediate. Thus $\mathfrak m$ is a proper ideal, and every element outside it is a unit. It is consequently the unique maximal ideal; it is prime because a product that is a unit has unit factors. [F1, given, algebra]

2.1 Its inverse image $\mathfrak q$ in $D$ is prime. Every element of $D\setminus\mathfrak q$ maps to a unit of $V$, so the inclusion extends by fractions to $D_{\mathfrak q}\to V$. It is injective because both rings embed in $K$. A fraction $a/s$ with $s\notin\mathfrak q$ maps into $\mathfrak m$ exactly when $a\in\mathfrak q$, proving locality. [given, step 1.1, algebra] ∎
