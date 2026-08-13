---
id: thm-final-functors-do-not-change-colimits-and-initial-functors-do-not-change-limits
kind: theorem
title: "Assuming Choice, precomposition with a final functor does not change colimits, and precomposition with an initial functor does not change limits"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-final-and-initial-functors, def-limit-and-colimit-of-a-diagram, thm-limits-and-colimits-are-unique-up-to-unique-compatible-isomorphism, def-axiom-of-choice, prop-limit-colimit-duality]
justified_by: []
aliases: [thm-cofinality-for-colimits]
landmark: true
proof_strategy: cocone-equivalence
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "T. Leinster, Basic Category Theory, Theorem 6.3.4"
      url: "https://arxiv.org/pdf/1612.09375"
pipeline_run: frontier-12
---

## Statement

Assume Choice. Let $u:\mathcal A\to\mathcal B$ be final between small categories and let
$F:\mathcal B\to\mathcal C$. Then $F$ has a colimit if and only if $Fu$ has a
colimit, and in that event the canonical map

$$\operatorname*{colim}_{a\in\mathcal A}F(u(a)) \longrightarrow\operatorname*{colim}_{b\in\mathcal B}F(b)$$

is an isomorphism. Dually, restriction along an initial functor does not change
limits.

## Facts & Assumptions

**Given:** The final functor $u$ and diagram $F$ in the statement.

[F1] Finality means every $(b\downarrow u)$ is nonempty and connected
([[def-final-and-initial-functors]]).

[F2] A colimit is an initial cocone, characterized by a unique map to every
cocone ([[def-limit-and-colimit-of-a-diagram]]).

[L1] Two colimits are uniquely compatibly isomorphic
([[thm-limits-and-colimits-are-unique-up-to-unique-compatible-isomorphism]]).

[F3] Choice selects one object from every member of a set-indexed family of
nonempty sets ([[def-axiom-of-choice]]).

[L2] Initiality and limits are dual to finality and colimits
([[prop-limit-colimit-duality]]).

## Proof

**Proof technique:** identify cocones.

1.1 Restriction sends a cocone $\rho_b:F(b)\to X$ to $\rho_{u(a)}:F(u(a))\to X$. Conversely, from a cocone $\lambda$ over $Fu$, use [F1] and [F3] to choose for each $b$ an object $(a_b,\beta_b:b\to u(a_b))$ and put $\bar\lambda_b=\lambda_{a_b}F(\beta_b)$. [F1, F3]

1.2 If $h:(a,\beta)\to(a',\beta')$ is a comma morphism, then $u(h)\beta=\beta'$ and the cocone equation gives $\lambda_{a'}F(\beta')=\lambda_aF(\beta)$. A finite zigzag therefore proves that $\bar\lambda_b$ is independent of the chosen comma object. [F1, given]

2.1 For $r:b\to b'$, choose a comma object $(a,\beta:b'\to u(a))$ for $b'$. Then $(a,\beta r)$ is one for $b$, so step 1.2 gives $\bar\lambda_b=\bar\lambda_{b'}F(r)$. Thus $\bar\lambda$ is a cocone over $F$. [step 1.2]

3.1 Restricting $\bar\lambda$ at $u(a)$ and using $(a,1_{u(a)})$ returns $\lambda_a$. Extending the restriction of $\rho$ returns $\rho_b$ by its cocone equation. Hence restriction is a bijection between cocones over $F$ and over $Fu$, natural in their apex. [step 1.1, step 1.2, step 2.1]

4.1 By [F2], an initial object represents either naturally identical cocone assignment exactly when it represents the other. Thus either colimit exists if and only if the other does. When both are chosen, [L1] identifies the induced canonical map as their unique compatible isomorphism. [F2, L1, step 3.1]

5.1 Applying [L2] to steps 1.1 to 2.1 replaces $(b\downarrow u)$ by the comma categories for an initial functor and proves the limit assertion, including both directions of existence. [L2, step 1.1, step 1.2, step 2.1, step 3.1, step 4.1] ∎
