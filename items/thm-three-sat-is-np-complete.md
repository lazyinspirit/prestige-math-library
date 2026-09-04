---
id: thm-three-sat-is-np-complete
kind: theorem
title: "3-SAT is NP-complete"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-np-hard-and-np-complete, def-polynomial-time-many-one-reduction, prop-sat-is-in-np, thm-cook-levin-sat-is-np-complete, lem-tseitin-transformation-is-linear-size-and-equisatisfiable]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Stephen A. Cook, The Complexity of Theorem-Proving Procedures"
      url: "https://www.cs.utoronto.ca/~sacook/homepage/1971.pdf"
---

## Statement

The language $3$-SAT of satisfiable CNF formulas with exactly three literals
per clause is NP-complete.

## Facts & Assumptions

**Given:** An arbitrary Boolean formula $\varphi$.

[L1] The language $SAT$ is NP-complete, by [[thm-cook-levin-sat-is-np-complete]].

[L2] The Tseitin transformation produces in linear size an equisatisfiable CNF formula whose clauses have at most three literals, by [[lem-tseitin-transformation-is-linear-size-and-equisatisfiable]].

[L3] A language is NP-complete exactly when it lies in $NP$ and every language in $NP$ polynomial-time many-one reduces to it, by [[def-np-hard-and-np-complete]] and [[def-polynomial-time-many-one-reduction]].

## Proof

**Proof technique:** direct.

1.1 A truth assignment for a $3$-CNF formula can be checked clause by clause in polynomial time, exactly as for SAT. So $3$-SAT lies in $NP$. [given, construct]

1.2 By [L1], it is enough to reduce $SAT$ to $3$-SAT. Start from $\varphi$ and apply [L2] to obtain an equisatisfiable CNF formula $T(\varphi)$ whose clauses have size at most three. [L1, L2, given, construct]

2.1 Replace every $2$-clause $(\ell_1\lor \ell_2)$ by $(\ell_1\lor \ell_2\lor z)\land(\ell_1\lor \ell_2\lor \neg z)$ with a fresh variable $z$, and replace every $1$-clause $(\ell)$ by $(\ell\lor u\lor v)\land(\ell\lor u\lor \neg v)\land(\ell\lor \neg u\lor v)\land(\ell\lor \neg u\lor \neg v)$ with fresh variables $u,v$. These replacements preserve satisfiability and produce only $3$-clauses. [step 1.2, construct]

3.1 Steps 1.2 and 2.1 give a polynomial-time many-one reduction from $SAT$ to $3$-SAT, because [L2] is linear-size and the padding in step 2.1 adds only constantly many clauses per short clause. Therefore $3$-SAT is NP-hard. Combined with step 1.1, [L3] yields that $3$-SAT is NP-complete. [L2, L3, step 1.1, step 1.2, step 2.1] ∎

