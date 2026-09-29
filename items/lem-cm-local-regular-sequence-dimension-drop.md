---
id: lem-cm-local-regular-sequence-dimension-drop
kind: lemma
title: A regular sequence lowers dimension exactly in a Cohen-Macaulay local ring
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - def-cohen-macaulay-local-module-and-ring
  - thm-minimal-support-primes-are-associated
  - lem-depth-quotient-by-regular-element
  - cor-depth-of-a-finite-local-module-at-most-its-dimension
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "The Stacks Project, Algebra, Section 10.129 (tag 00R8), dimension drop in Cohen-Macaulay fibres"
      url: https://stacks.math.columbia.edu/tag/00R8
---

## Statement

Assume the Axiom of Choice. Let $(A,\mathfrak m)$ be a nonzero
Noetherian Cohen–Macaulay local ring of dimension $h$, and let
$f_1,\ldots,f_i\in\mathfrak m$ be an $A$-regular sequence.
Then $A/(f_1,\ldots,f_i)$ is nonzero and Cohen–Macaulay of
dimension $h-i$. In particular $i\le h$.

## Facts & Assumptions

**Given:** The Cohen–Macaulay local ring and regular sequence.

[F1] Every minimal prime of a nonzero Noetherian ring is an associated prime of the ring; a nonzerodivisor avoids all its associated primes ([[thm-minimal-support-primes-are-associated]]).

[F2] Quotient by a regular nonunit lowers depth by one. Every nonzero finite module over a Noetherian local ring has depth at most dimension; Cohen–Macaulay means equality ([[lem-depth-quotient-by-regular-element]], [[cor-depth-of-a-finite-local-module-at-most-its-dimension]], [[def-cohen-macaulay-local-module-and-ring]]).

## Proof

**Proof technique:** prove one-element dimension drop from prime chains and depth, then iterate along the sequence.

1.1 [base] The empty sequence gives the original ring, so the assertion holds for $i=0$. [F2]

1.2 Suppose $x\in\mathfrak m$ is regular on a nonzero Cohen–Macaulay Noetherian local ring $C$ of dimension $c$. The quotient $C/xC$ is nonzero by regularity. Every chain of primes of $C/xC$ lifts to a chain $\mathfrak q_0\subsetneq\cdots\subsetneq\mathfrak q_e$ of primes of $C$ containing $x$. Choose a minimal prime $\mathfrak a\subseteq\mathfrak q_0$. Since $x$ is a nonzerodivisor, [F1] gives $x\notin\mathfrak a$, so $\mathfrak a\subsetneq\mathfrak q_0$. The lifted chain therefore extends to one of length $e+1$ in $C$, yielding $\dim(C/xC)\le c-1$. [F1]

2.1 By [F2], $\operatorname{depth}(C/xC)=\operatorname{depth}C-1=c-1$. Depth is at most dimension, so step 1.2 forces $\dim(C/xC)=c-1$. Hence the quotient is Cohen–Macaulay. This is the one-element dimension-drop claim. [F2, step 1.2]

3.1 [IH] Assume the conclusion for length $i-1$. Then $C=A/(f_1,\ldots,f_{i-1})$ is nonzero Cohen–Macaulay of dimension $h-i+1$. The regular-sequence convention makes $f_i$ regular on $C$, so step 2.1 applied to $C$ makes $C/f_iC$ Cohen–Macaulay of dimension $h-i$. In particular $i\le h$. [F2, step 1.1, step 2.1]

4.1 [discharge-induction: step 3.1] The base and induction steps prove all lengths. AC is inherited at the associated-prime and depth boundaries; each individual iteration is finite. [F1, F2, step 1.1, step 3.1] ∎
