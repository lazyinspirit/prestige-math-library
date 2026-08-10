---
id: prop-equality-of-words-in-a-presentation
kind: proposition
title: 'In $\langle X\mid R\rangle$, the words $u$ and $v$ represent the same element if and only if $u^{-1}v\in\langle\!\langle R\rangle\!\rangle$'
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-group-presentation, prop-normal-closure-is-products-of-conjugates, lem-coset-membership-and-equality, def-quotient-group]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Nicholas Touikan, An Introduction to Combinatorial and Geometric Group Theory, §1.4"
      url: "https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/html_output/sec_generation_and_presentation.html"
pipeline_run: null
---

## Statement

Let $u,v\in F(X)$ and put
$N=\langle\!\langle R\rangle\!\rangle_{F(X)}$. The words $u$ and $v$
represent the same element of $\langle X\mid R\rangle$ if and only if

$$u^{-1}v\in\langle\!\langle R\rangle\!\rangle_{F(X)}.$$

By [[prop-normal-closure-is-products-of-conjugates]], the membership condition
is equivalent to expressing $u^{-1}v$ as a finite product of conjugates of
relators and their inverses.

## Facts & Assumptions

**Given:** A presentation $\langle X\mid R\rangle$ and words $u,v\in F(X)$.

[F1] $\langle X\mid R\rangle=F(X)/\langle\!\langle R\rangle\!\rangle_{F(X)}$ ([[def-group-presentation]]).

[F2] If $N\mathrel{\trianglelefteq}G$, then the elements of $G/N$ are the left cosets $gN$ ([[def-quotient-group]]).

[L1] For a subgroup $H$ of a group, $aH=bH$ if and only if $a^{-1}b\in H$ ([[lem-coset-membership-and-equality]]).

## Proof

**Proof technique:** direct.

1.1 Set $N=\langle\!\langle R\rangle\!\rangle_{F(X)}$; by [F1] and [F2], the elements represented by $u$ and $v$ are the quotient cosets $uN$ and $vN$. [F1, F2, given]

2.1 By [L1], $uN=vN$ if and only if $u^{-1}v\in N$. [L1, step 1.1]

3.1 Substituting the definition of $N$ into step 2.1 proves both directions of the stated equivalence. [step 2.1] ∎
