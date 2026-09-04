---
id: lem-tseitin-transformation-is-linear-size-and-equisatisfiable
kind: lemma
title: "The Tseitin transformation has linear size and preserves satisfiability"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-boolean-formula-cnf-and-sat, def-tseitin-extension-variable]
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

## Statement

For every Boolean formula $\varphi$, there is a CNF formula $T(\varphi)$ such
that:

- every clause of $T(\varphi)$ has at most three literals,
- $T(\varphi)$ has size $O(|\varphi|)$,
- and $\varphi$ is satisfiable if and only if $T(\varphi)$ is satisfiable.

## Facts & Assumptions

**Given:** A Boolean formula $\varphi$.

[L1] A Tseitin extension variable $y_\theta$ is intended to encode the truth value of the subformula $\theta$, by [[def-tseitin-extension-variable]].

[L2] The satisfiability language concerns exactly whether a Boolean formula has some satisfying truth assignment, by [[def-boolean-formula-cnf-and-sat]].

## Proof

**Proof technique:** direct.

1.1 For each subformula $\theta$ of $\varphi$, introduce the extension variable from [L1]. If $\theta$ is a literal $\ell$, add $(\neg y_\theta\lor \ell)$ and $(y_\theta\lor \neg \ell)$. If $\theta=\alpha\land\beta$, add $(\neg y_\theta\lor y_\alpha)$, $(\neg y_\theta\lor y_\beta)$, and $(y_\theta\lor \neg y_\alpha\lor \neg y_\beta)$. If $\theta=\alpha\lor\beta$, add $(y_\theta\lor \neg y_\alpha)$, $(y_\theta\lor \neg y_\beta)$, and $(\neg y_\theta\lor y_\alpha\lor y_\beta)$. If $\theta=\neg\alpha$, add $(\neg y_\theta\lor \neg y_\alpha)$ and $(y_\theta\lor y_\alpha)$. If $\theta=\top$ or $\theta=\bot$, add the unit clause $(y_\theta)$ or $(\neg y_\theta)$ respectively. Finally add the unit clause $(y_\varphi)$. Every clause has at most three literals. [L1, L2, given, construct]

2.1 Any satisfying assignment of $\varphi$ extends to the new variables by setting each $y_\theta$ equal to the truth value of $\theta$ under that assignment. Then every local clause from step 1.1 is satisfied, including the negation and constant clauses, and $y_\varphi=1$ because $\varphi$ itself is true. So satisfiability of $\varphi$ implies satisfiability of $T(\varphi)$. [step 1.1, given, construct]

3.1 Conversely, suppose $T(\varphi)$ is satisfiable. The clauses of step 1.1 force each $y_\theta$ to agree with the Boolean value prescribed by its immediate subformulas, and an induction on subformula complexity shows that every extension variable equals the value of its subformula under the restricted assignment to the original variables. Since the clause $(y_\varphi)$ is satisfied, the original formula $\varphi$ is true. [step 1.1, step 2.1]

4.1 Each subformula of $\varphi$ contributes one fresh variable and only constantly many clauses, so the total size of $T(\varphi)$ is linear in $|\varphi|$. Together with steps 2.1 and 3.1, this proves the statement. [step 1.1, step 2.1, step 3.1] ∎
