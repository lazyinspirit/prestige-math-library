---
id: lem-formal-letters-act-by-permutations-on-reduced-words
kind: lemma
title: "Formal letters act by mutually inverse permutations on the set of reduced words"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-alphabet-words-and-reduction, def-symmetric-group, thm-induction-principle]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard Elman, Lectures on Abstract Algebra, §18"
      url: "https://www.math.ucla.edu/~rse/algebra_book.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal R(X)$ be the set of reduced words on $X\sqcup X^{-1}$. For each
formal letter $a$, there is a permutation $\lambda_a$ of $\mathcal R(X)$ such
that $\lambda_{a^{-1}}=\lambda_a^{-1}$. If
$w=a_1\cdots a_n$, define
$\Lambda_w:=\lambda_{a_1}\circ\cdots\circ\lambda_{a_n}$ and
$\Lambda_\varepsilon:=\operatorname{id}_{\mathcal R(X)}$. Then
$\Lambda_r(\varepsilon)=r$ for every reduced word $r$.

Freely equivalent words induce the same permutation of the set of reduced
words.

## Facts & Assumptions

**Given:** A set $X$, the set $\mathcal R(X)$ of reduced words, and a formal letter $a\in X\sqcup X^{-1}$.

[F1] A word is **reduced** if no elementary cancellation applies ([[def-alphabet-words-and-reduction]]).

[F2] A **permutation** of $X$ is a bijection $f:X\to X$ ([[def-symmetric-group]]).

[L1] If a property $P$ satisfies $P(0)$ and $P(n)\Rightarrow P(n+1)$ for every natural number $n$, then $P(n)$ holds for every $n\in\mathbb N$ ([[thm-induction-principle]]).

## Proof

**Proof technique:** constructive.

1.1 For $r\in\mathcal R(X)$, define $\lambda_a(r)$ by deleting the first letter when $r$ begins with $a^{-1}$, and by prepending $a$ otherwise; in the second case the only new seam is not an inverse pair, so the output is reduced, while deletion from a reduced word also leaves a reduced word. [F1, given, construct]

2.1 If $r=a^{-1}s$ is reduced, then $s$ does not begin with $a$, so $\lambda_a(r)=s$ and $\lambda_{a^{-1}}(s)=a^{-1}s=r$. If $r$ does not begin with $a^{-1}$, then $\lambda_a(r)=ar$ begins with $a$, so $\lambda_{a^{-1}}(ar)=r$. Thus $\lambda_{a^{-1}}\circ\lambda_a=\operatorname{id}$, and replacing $a$ by $a^{-1}$ gives $\lambda_a\circ\lambda_{a^{-1}}=\operatorname{id}$. [F1, step 1.1]

3.1 Hence each $\lambda_a$ is a bijection of $\mathcal R(X)$, so it is a permutation by [F2], and $\lambda_{a^{-1}}=\lambda_a^{-1}$. [F2, step 2.1]

4.1 For a word $w=a_1\cdots a_n$, construct $\Lambda_w=\lambda_{a_1}\circ\cdots\circ\lambda_{a_n}$, with the empty composite equal to the identity. Composition acts from right to left. If the suffix $a_{k+1}\cdots a_n$ of a reduced word has already been obtained from $\varepsilon$, then it does not begin with $a_k^{-1}$, so $\lambda_{a_k}$ prepends $a_k$. Induction on the suffix length using [L1] therefore gives $\Lambda_r(\varepsilon)=r$ for every reduced $r$, including $r=\varepsilon$. [F1, L1, step 1.1, step 3.1, construct]

5.1 Inserting or deleting an adjacent pair $aa^{-1}$ inserts or deletes the adjacent composite $\lambda_a\circ\lambda_{a^{-1}}=\operatorname{id}$ inside $\Lambda_w$; therefore one elementary move leaves $\Lambda_w$ unchanged, and so does any finite sequence of such moves. [step 3.1, step 4.1, discharge-construct] ∎
