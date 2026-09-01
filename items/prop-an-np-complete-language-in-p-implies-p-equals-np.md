---
id: prop-an-np-complete-language-in-p-implies-p-equals-np
kind: proposition
title: "An NP-complete language in P forces $P=NP$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-np-hard-and-np-complete, thm-polynomial-reductions-transfer-p-np-and-conp-membership, prop-p-is-contained-in-np-intersection-conp]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Stephen A. Cook, The Complexity of Theorem-Proving Procedures"
      url: "https://www.cs.toronto.edu/~sacook/homepage/1971.pdf"
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

If some NP-complete language belongs to $P$, then $P=NP$.

## Facts & Assumptions

**Given:** An NP-complete language $C$ with $C\in P$.

[L1] NP-complete means both $C\in NP$ and every language in $NP$ reduces to $C$ in polynomial time, by [[def-np-hard-and-np-complete]].

[L2] Polynomial-time many-one reductions transfer $P$-membership backward: if $A\le_p B$ and $B\in P$, then $A\in P$, by [[thm-polynomial-reductions-transfer-p-np-and-conp-membership]].

[L3] Every language in $P$ belongs to $NP$, by [[prop-p-is-contained-in-np-intersection-conp]].

## Proof

**Proof technique:** direct.

1.1 Let $L\in NP$ be arbitrary. By [L1], because $C$ is NP-hard, there is a polynomial-time many-one reduction $L\le_p C$. Then [L2] and the hypothesis $C\in P$ give $L\in P$. [L1, L2, given]

2.1 Step 1.1 shows $NP\subseteq P$. By [L3], every language in $P$ also lies in $NP$, so $P\subseteq NP$. Therefore $P=NP$. [L3, step 1.1] ∎
