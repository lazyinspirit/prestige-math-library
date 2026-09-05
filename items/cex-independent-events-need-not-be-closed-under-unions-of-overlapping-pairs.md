---
id: cex-independent-events-need-not-be-closed-under-unions-of-overlapping-pairs
kind: counterexample
title: "Unions of overlapping independent events need not remain independent"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-uniform-finite-probability-space, def-pairwise-and-mutual-independence-of-events]
proof_strategy: constructive
sources:
  references: []
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement refuted

Whenever $A$ and $B$ are independent events, and $C$ overlaps both of them, the
unions $A\cup C$ and $B\cup C$ are also independent.

## Facts & Assumptions

**Given:** The uniform four-point space $\Omega=\{00,01,10,11\}$ and the events
$$A:=\{00,01\},\qquad B:=\{00,10\},\qquad C:=\{00,11\}.$$

[L1] In a uniform finite space, event probability is cardinality divided by the
total number of outcomes. ([[def-uniform-finite-probability-space]])

[L2] Two events are independent exactly when
$\mathbb P(E\cap F)=\mathbb P(E)\mathbb P(F)$.
([[def-pairwise-and-mutual-independence-of-events]])

## Counterexample

**Proof technique:** constructive.

1.1 By [L1], the events $A$ and $B$ have probability $1/2$, and $A\cap B=\{00\}$ has probability $1/4$. Hence $A$ and $B$ are independent by [L2]. Also $C$ overlaps both of them because $00\in A\cap C$ and $00\in B\cap C$. [L1, L2, construct]

2.1 The unions are $$A\cup C=\{00,01,11\},\qquad B\cup C=\{00,10,11\},$$ so each has probability $3/4$, while $$(A\cup C)\cap(B\cup C)=\{00,11\}$$ has probability $1/2$. [step 1.1, L1]

3.1 Since $$\mathbb P((A\cup C)\cap(B\cup C))=\frac12\ne\frac{9}{16}=\frac34\cdot\frac34,$$ [L2] shows that $A\cup C$ and $B\cup C$ are not independent. This refutes the statement. [step 2.1, L2, discharge-construct] ∎
