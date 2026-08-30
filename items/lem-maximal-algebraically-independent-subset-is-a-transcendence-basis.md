---
id: lem-maximal-algebraically-independent-subset-is-a-transcendence-basis
kind: lemma
title: "A maximal algebraically independent set is a transcendence basis"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-field-extension-generated-subfields-and-simple-extension, def-polynomial-evaluation-and-root]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Proposition 9.12"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: null
---

## Statement

Let $k\subseteq K$ be a field extension, and let $S\subseteq K$ be
algebraically independent over $k$. Assume that $S$ is maximal for inclusion
among algebraically independent subsets of $K$. Then every element of $K$ is
algebraic over the generated subfield $k(S)$, so $S$ is a transcendence basis
of $K$ over $k$.

## Facts & Assumptions

**Given:** A field extension $k\subseteq K$, a maximal algebraically independent subset $S\subseteq K$, and the generated subfields $k(S)$ from [[def-field-extension-generated-subfields-and-simple-extension]].

[L1] Evaluation of a polynomial at elements of a commutative target ring is defined coefficientwise; a root is an element where that value is zero ([[def-polynomial-evaluation-and-root]]).

## Proof

**Proof technique:** direct.

1.1 Fix $\beta\in K$. If $\beta\in S$, then $\beta\in k(S)$ and hence $\beta$ is algebraic over $k(S)$ because it is a root of $T-\beta\in k(S)[T]$. [given, algebra]

1.2 Assume $\beta\notin S$. By maximality, $S\cup\{\beta\}$ is algebraically dependent over $k$, so there is a nonzero polynomial $$ P(T_1,\ldots,T_m,Y)\in k[T_1,\ldots,T_m,Y] $$ and elements $s_1,\ldots,s_m\in S$ such that $P(s_1,\ldots,s_m,\beta)=0$. The polynomial $P$ must involve $Y$, for otherwise $s_1,\ldots,s_m$ would already satisfy a nontrivial polynomial relation over $k$, contradicting algebraic independence of $S$. [L1, given]

2.1 View $P(s_1,\ldots,s_m,Y)$ as a nonzero polynomial in $k[S][Y]$ and then in $k(S)[Y]$. After dividing by its leading coefficient in the field $k(S)$, we obtain a monic polynomial $Q(Y)\in k(S)[Y]$ with $Q(\beta)=0$. Therefore $\beta$ is algebraic over $k(S)$. [step 1.2, L1, algebra]

3.1 Steps 1.1 and 2.1 cover every $\beta\in K$, so $K/k(S)$ is algebraic. Hence $S$ is a transcendence basis of $K$ over $k$. [step 1.1, step 2.1] ∎
