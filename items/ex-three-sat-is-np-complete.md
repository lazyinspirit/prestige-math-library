---
id: ex-three-sat-is-np-complete
kind: example
title: "Converting a small Boolean formula to equisatisfiable 3-CNF with extension variables"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-three-sat-is-np-complete, lem-tseitin-transformation-is-linear-size-and-equisatisfiable]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Example

Consider the formula
$$ \varphi:=(x\land y)\lor z. $$
Introduce $a$ for the subformula $(x\land y)$ and $b$ for $\varphi$ itself.

## Facts & Assumptions

**Given:** The formula $\varphi=(x\land y)\lor z$.

[L1] The Tseitin transformation introduces extension variables for subformulas and preserves satisfiability with clauses of size at most three, by [[lem-tseitin-transformation-is-linear-size-and-equisatisfiable]].

[L2] The language $3$-SAT is NP-complete, so such linear-size translations are the standard bridge from SAT to $3$-SAT, by [[thm-three-sat-is-np-complete]].

## Verification

**Proof technique:** direct.

1.1 The Tseitin clauses are $(\neg a\lor x)$, $(\neg a\lor y)$, $(a\lor \neg x\lor \neg y)$ for $a\leftrightarrow(x\land y)$, together with $(b\lor \neg a)$, $(b\lor \neg z)$, $(\neg b\lor a\lor z)$ for $b\leftrightarrow(a\lor z)$, and the root clause $(b)$. [L1, given, construct]

2.1 If $\varphi$ is satisfiable, set $a$ and $b$ to the truth values of their subformulas; then all clauses in step 1.1 are satisfied. Conversely, any satisfying assignment of those clauses forces $b=1$ and hence $(x\land y)\lor z=1$. So step 1.1 is an explicit equisatisfiable $3$-CNF encoding of $\varphi$, illustrating [L1] and therefore [L2]. [L1, L2, step 1.1] ∎

