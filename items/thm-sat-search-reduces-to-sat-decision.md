---
id: thm-sat-search-reduces-to-sat-decision
kind: theorem
title: "SAT search polynomial-time Turing reduces to SAT decision"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-search-version-of-an-np-relation, def-polynomially-balanced-verifier]
proof_strategy: direct
verification:
  audited: 2026-09-02
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "P32: SAT self-reducibility"
      url: "https://arashkermaniprojects.github.io/computibility_and_complexity/tools/p32-self-reducibility.html"
---

## Statement

Let $SAT$ be the language of satisfiable Boolean formulas over finitely many
variables, and let the associated search problem ask for a satisfying
assignment of a satisfiable formula. Then there is a deterministic
polynomial-time oracle algorithm that solves the search problem using queries
to the decision language $SAT$.

## Facts & Assumptions

**Given:** A satisfiable Boolean formula $\varphi(x_1,\dots,x_n)$ and oracle access to the decision language $SAT$.

[L1] The search version of an NP verifier asks for an explicit witness, not merely a yes/no answer, by [[def-search-version-of-an-np-relation]].

[L2] Polynomially bounded witnesses are the relevant certificate regime on this page, by [[def-polynomially-balanced-verifier]].

## Proof

**Proof technique:** direct.

1.1 Query the $SAT$ oracle on $\varphi$ itself. If the answer is "no", halt and report that no satisfying assignment exists. If the answer is "yes", initialize the current residual formula to $\psi_0:=\varphi$. [given, construct]

2.1 For $i=1,\dots,n$, form the two residual formulas obtained from $\psi_{i-1}$ by substituting $x_i=1$ and $x_i=0$. Query the oracle on the first one. If it is satisfiable, record $x_i=1$ and set $\psi_i$ equal to that first residual formula. Otherwise record $x_i=0$ and set $\psi_i$ equal to the second residual formula. At least one branch is satisfiable, because any satisfying assignment of $\psi_{i-1}$ gives one of the two values to $x_i$. [step 1.1, given, construct]

3.1 By induction on $i$, the maintained residual formula $\psi_i$ is satisfiable and is obtained from $\varphi$ by fixing the first $i$ variables to the recorded values. After the final stage, every variable has been assigned, so the recorded bits form a satisfying assignment for $\varphi$. This is exactly the witness demanded in [L1]. [L1, step 2.1]

4.1 The algorithm makes at most $n+1$ oracle calls, and each intermediate substitution and formula rewrite is polynomial in $|\varphi|$. Since the satisfying assignment itself has length $n\le |\varphi|$, this stays within the polynomial witness regime of [L2]. Therefore SAT search polynomial-time Turing reduces to SAT decision. [L2, step 1.1, step 2.1, step 3.1] ∎
