---
id: cor-cfl-membership-is-decidable
kind: corollary
title: "Context-free-language membership is decidable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-chomsky-normal-form, thm-cyk-membership-algorithm]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Alfred V. Aho, COMS W3261 CS Theory, Lecture 10"
      url: "https://www.cs.columbia.edu/~aho/cs3261/Lectures/L10-PL_for_CFLs.html"
    - title: "H. Conrad Cunningham, CSci 311, Models of Computation, Chapter 8"
      url: "https://john.cs.olemiss.edu/~hcc/csci311/notes/chap08/ch08.html"
---

## Statement

Given a context-free grammar $G$ and a word $w$, one can decide whether
$w\in L(G)$.

## Facts & Assumptions

**Given:** A context-free grammar $G$ and a word $w$.

[L1] By [[thm-chomsky-normal-form]], $G$ has an equivalent grammar in Chomsky normal form.

[L2] By [[thm-cyk-membership-algorithm]], the CYK procedure decides membership for CNF grammars.

## Proof

**Proof technique:** direct.

1.1 Convert $G$ to an equivalent CNF grammar $G'$ using [L1]. [L1, given, construct]

2.1 Run the CYK membership procedure from [L2] on $G'$ and $w$. Because $G'$ is equivalent to $G$, the answer is "yes" exactly when $w\in L(G)$. [L2, step 1.1]

3.1 Therefore context-free-language membership is decidable. [step 2.1] ∎
