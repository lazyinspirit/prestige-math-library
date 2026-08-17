---
id: cor-comonads-on-a-preorder-are-interior-operators
kind: corollary
title: "On a preorder the comonads are exactly the monotone contractive maps with Gp below G(Gp); on a poset they are exactly the interior operators"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-comonad, thm-monads-on-a-preorder-are-exactly-closure-operators, def-opposite-category, def-preorder, def-partial-order]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Example 5.1.7"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

Let $P$ be a preorder. A comonad on $P$ is equivalently a monotone map $G:P\to P$ such that $Gp\leq p$ and $Gp\leq G(Gp)$ for every $p$. These inequalities force $Gp$ and $G(Gp)$ to be mutually comparable. If $P$ is a poset, this is equivalently an interior operator: a monotone, contractive, idempotent map.

## Facts & Assumptions

**Given:** A preorder $P$.

[L1] A comonad on $P$ is a monad on $P^{\mathrm{op}}$ ([[def-comonad]]).

[L2] Monads on a preorder are exactly its monotone extensive maps equipped with the reverse comparison from their square ([[thm-monads-on-a-preorder-are-exactly-closure-operators]]).

[L3] Reversing a preorder reverses each inequality ([[def-opposite-category]]).

[L4] In a poset, mutual comparability implies equality ([[def-partial-order]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], regard $G$ as a monad on $P^{\mathrm{op}}$, with its counit and comultiplication serving as the unit and multiplication there. [L1, L3]

2.1 Applying [L2] in the opposite order gives monotonicity, $Gp\leq p$, and $Gp\leq G(Gp)$. Monotonicity applied to $Gp\leq p$ gives $G(Gp)\leq Gp$, so the two values are mutually comparable. [L2, L3, step 1.1]

3.1 Conversely, the stated inequalities reverse to the data in [L2] on $P^{\mathrm{op}}$, hence give a comonad by [L1]. If $P$ is a poset, [L4] makes the two comparisons equivalent to $G(Gp)=Gp$, precisely the idempotence condition for an interior operator. [L1, L2, L3, L4, step 2.1] ∎
