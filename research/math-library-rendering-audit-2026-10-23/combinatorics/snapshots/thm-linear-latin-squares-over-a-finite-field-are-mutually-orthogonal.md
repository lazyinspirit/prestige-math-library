---
id: thm-linear-latin-squares-over-a-finite-field-are-mutually-orthogonal
kind: theorem
title: "The linear Latin squares $L_a(i,j)=ai+j$ over $\\mathbb F_q$ are pairwise orthogonal"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-latin-square, def-orthogonal-latin-squares-and-complete-families]
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Deductive Press, Section 16.2: Latin Squares and MOLS"
      url: "https://deductivepress.ca/math3860/textbook/sect_latin-squares-mols"
---

## Statement

Let $F$ be a finite field with $q$ elements. For each nonzero $a\in F$, define
$L_a:F\times F\to F$ by
$$L_a(i,j):=ai+j.$$
Then each $L_a$ is a Latin square of order $q$, and if $a\ne b$ then $L_a$ and
$L_b$ are orthogonal.

## Facts & Assumptions

**Given:** A finite field $F$, nonzero elements $a,b\in F$, and elements $i,j,s,t\in F$.

[L1] A Latin square is a function whose row maps and column maps are bijections, and orthogonality means that every ordered pair of symbols occurs exactly once ([[def-latin-square]], [[def-orthogonal-latin-squares-and-complete-families]]).

## Proof

**Proof technique:** direct.

1.1 For fixed $i$, the map $j\mapsto ai+j$ is a translation of $F$, so it is a bijection. For fixed $j$, the map $i\mapsto ai+j$ is the composition of multiplication by the nonzero scalar $a$ and a translation, so it is also a bijection. Thus $L_a$ is a Latin square of order $q$. [L1, algebra]

2.1 Assume $a\ne b$. Given symbols $s,t\in F$, a cell $(i,j)$ satisfies $L_a(i,j)=s$ and $L_b(i,j)=t$ exactly when $ai+j=s$ and $bi+j=t$. Subtracting gives $(a-b)i=s-t$, and since $a-b\ne0$ there is a unique solution $i$. Then $j=s-ai$ is also unique. Therefore every ordered pair $(s,t)$ occurs exactly once, so $L_a$ and $L_b$ are orthogonal. [L1, algebra] ∎
