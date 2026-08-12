---
id: lem-mutual-independence-under-subfamilies-and-complements
kind: lemma
title: "Mutual independence is inherited by subfamilies and by replacing events with complements"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-finite-probability-basic-laws, def-pairwise-and-mutual-independence-of-events]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "C. M. Grinstead and J. L. Snell, Introduction to Probability, 2nd ed., Section 4.1"
      url: "https://math.dartmouth.edu/~prob/prob/prob.pdf"
    - title: "H. Pishro-Nik, Introduction to Probability, Statistics, and Random Processes, Section 1.4.1"
      url: "https://www.probabilitycourse.com/"
pipeline_run: null
---

## Statement

Every subfamily of a mutually independent finite family of events is mutually independent. Replacing any selection of its events by their complements also leaves a mutually independent family.

## Facts & Assumptions

**Given:** A mutually independent finite family $(A_i)_{i\in I}$.

[L1] If $C\subseteq D$, then $\mathbb P(D\setminus C)=\mathbb P(D)-\mathbb P(C)$ and $\mathbb P(A^c)=1-\mathbb P(A)$ ([[lem-finite-probability-basic-laws]]).

[L2] Mutual independence is the product identity for every nonempty subfamily ([[def-pairwise-and-mutual-independence-of-events]]).

## Proof

**Proof technique:** induction.

1.1 With no event complemented, every intersection identity required for a subfamily is already one of the identities required for the original family. [L2, base]

1.2 Assume that after complementing any chosen $r$ events, every resulting subfamily is mutually independent. [ih]

2.1 Complement one further event $A_i$. For any intersection $D$ of selected events other than $A_i$, the induction hypothesis gives $\mathbb P(D\cap A_i)=\mathbb P(D)\mathbb P(A_i)$. Since $D\cap A_i^c=D\setminus(D\cap A_i)$, [L1] gives $\mathbb P(D\cap A_i^c)=\mathbb P(D)(1-\mathbb P(A_i))=\mathbb P(D)\mathbb P(A_i^c)$. Thus every subfamily remains mutually independent after $r+1$ replacements. [step 1.2, L1, L2, algebra]

3.1 Induction on the number of complemented events proves the assertion for every selection. The empty intersection has probability $1$ and the empty product is $1$. [step 1.1, step 2.1, discharge-induction] ∎
