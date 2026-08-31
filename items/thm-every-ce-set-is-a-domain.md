---
id: thm-every-ce-set-is-a-domain
kind: theorem
title: "Every computably enumerable set is the domain of a partial computable function"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-computably-enumerable-set, def-computable-and-partial-computable-function]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
    - title: "John Watrous, Introduction to the Theory of Computing, Lecture 18: Further discussion of computability"
      url: "https://cs.uwaterloo.ca/~watrous/ToC-notes/ToC-notes.18.pdf"
---

## Statement

Let $A$ be a computably enumerable subset of an effectively encoded set $X$.
Then there exists a partial computable function whose domain is exactly $A$.

## Facts & Assumptions

**Given:** A c.e. set $A\subseteq X$.

[L1] By [[def-computably-enumerable-set]], either $A=\varnothing$ or there exists a total computable enumerator $e:\mathbb N\to X$ with range $A$.

[L2] By [[def-computable-and-partial-computable-function]], a partial computable function is one produced by a machine that halts exactly on its domain.

## Proof

**Proof technique:** direct.

1.1 If $A=\varnothing$, take the nowhere-defined partial function from $X$ to the one-point set $\{0\}$. Its machine diverges on every input, so [L2] shows that its domain is exactly $\varnothing=A$. [L1, L2, given]

1.2 Suppose now that $A\neq\varnothing$, and let $e:\mathbb N\to X$ be the total computable enumerator from [L1]. Define a machine on an input code $z\in\{0,1\}^*$ that computes the outputs $e(0),e(1),e(2),\dots$ one after another until it first sees the codeword $z$, at which point it halts and outputs $0$. If $z=e_X(x)$ with $x\in A$, some index $n$ satisfies $e(n)=x$, so the machine eventually halts on $z$. If $x\notin A$, no enumerated value has code $z$, so the machine never halts on $z$. Thus [L2] gives a partial computable function whose domain is exactly $A$. [L1, L2, construct]

2.1 In either case, $A$ is the domain of a partial computable function. [step 1.1, step 1.2] ∎
