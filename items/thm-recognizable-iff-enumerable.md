---
id: thm-recognizable-iff-enumerable
kind: theorem
title: "A binary language is recognizable if and only if it is computably enumerable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-decidable-and-recognizable-language, def-computably-enumerable-set]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
    - title: "John Watrous, Introduction to the Theory of Computing, Lecture 18: Further discussion of computability"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.18.pdf"
---

## Statement

For every language $L\subseteq\{0,1\}^*$, the following are equivalent, where
computable enumerability is taken with respect to the identity encoding of
binary words:

1. $L$ is recognizable.
2. $L$ is computably enumerable.

## Facts & Assumptions

**Given:** A language $L\subseteq\{0,1\}^*$.

[L1] By [[def-decidable-and-recognizable-language]], recognizability means that some Turing machine accepts exactly the words of $L$ and may diverge on nonmembers.

[L2] By [[def-computably-enumerable-set]], computable enumerability means either $L=\varnothing$ or $L$ is the range of a total computable function.

## Proof

**Proof technique:** direct.

1.1 Assume first that $L$ is c.e. If $L=\varnothing$, then the machine that immediately rejects every input recognizes $L$. Otherwise choose a total computable enumerator $e:\mathbb N\to\{0,1\}^*$ with range $L$ as in [L2]. On input $x$, search through $n=0,1,2,\dots$ and compute $e(n)$ until $e(n)=x$; if this occurs, accept. For $x\in L$ the search eventually finds a witness $n$, and for $x\notin L$ it never accepts. Thus $L$ is recognizable by [L1]. [L1, L2, given]

1.2 Assume conversely that $L$ is recognizable. If $L=\varnothing$, then [L2] already says that $L$ is c.e. So assume $L\neq\varnothing$, and let $M$ be a recognizer for $L$. By dovetailing the simulations of $M$ over binary words in shortlex order, fix one accepted word $a_0\in L$. [L1, L2, choose]

2.1 Fix a standard total computable bijection $n\mapsto(i,t)$ from $\mathbb N$ onto $\mathbb N\times\mathbb N$, and let $w_i$ be the $i$th binary word in shortlex order. Define $$ e(n):=\begin{cases} w_i,&\text{if }M\text{ accepts }w_i\text{ within }t\text{ steps},\\ a_0,&\text{otherwise.} \end{cases} $$ This is a total computable function $\mathbb N\to\{0,1\}^*$. Every output of $e$ lies in $L$, and if $w\in L$ then $w=w_i$ for some $i$ and $M$ accepts $w_i$ in some finite number of steps $t$, so $e(n)=w$ for the paired input with coordinates $(i,t)$. Hence the range of $e$ is exactly $L$, so [L2] shows that $L$ is c.e. [L2, step 1.2, construct]

3.1 Steps 1.1 and 2.1 prove the equivalence. [step 1.1, step 2.1] ∎
