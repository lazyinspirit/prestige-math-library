---
id: lem-lambda-good-sets
kind: lemma
title: "For a member A of a lambda-system D, the sets B with A intersection B in D form a lambda-system"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-lambda-system]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Dembo, Probability Theory lecture notes, proof of Theorem 1.1.38"
      url: "https://adembo.su.domains/stat-310b/lnotes.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal D$ be a lambda-system on $X$ and fix $A\in\mathcal D$. Then

$$\mathcal D_A:=\{B\in\mathcal D:A\cap B\in\mathcal D\}$$

is a lambda-system on $X$.

## Facts & Assumptions

**Given:** A lambda-system $\mathcal D$ on $X$ and a fixed set $A\in\mathcal D$.

[L1] A lambda-system contains $X$, is closed under relative differences, and is closed under increasing countable unions ([[def-lambda-system]]).

## Proof

**Proof technique:** direct.

1.1 One has $X\in\mathcal D$ and $A\cap X=A\in\mathcal D$, so $X\in\mathcal D_A$. [given, L1]

1.2 If $B,C\in\mathcal D_A$ and $B\subseteq C$, then $C\setminus B\in\mathcal D$ and $A\cap(C\setminus B)=(A\cap C)\setminus(A\cap B)\in\mathcal D$ by [L1]; hence $C\setminus B\in\mathcal D_A$. [L1, algebra]

2.1 If $(B_n)$ is increasing in $\mathcal D_A$, then $\bigcup_nB_n\in\mathcal D$ and $A\cap\bigcup_nB_n=\bigcup_n(A\cap B_n)\in\mathcal D$ by [L1]. Therefore $\bigcup_nB_n\in\mathcal D_A$, and all lambda-system axioms hold. [L1, algebra] ∎
