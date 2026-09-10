---
id: thm-choice-produces-an-undetermined-natural-number-game
kind: theorem
title: "Choice produces an undetermined natural-number game"
status: draft
origin: pipeline
deps: ["lem-natural-number-game-strategies-have-continuum-many-plays", "thm-well-ordering-theorem", "lem-cardinality-of-a-well-orderable-set", "cor-cardinal-absorption", "thm-transfinite-recursion", "def-axiom-of-choice"]
justified_by: []
forward_refs: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Exercise 6.8, printed p55"
      url: "https://homepages.math.uic.edu/~marker/math512/dst.pdf"
---
## Statement

Assuming AC, some $A\subseteq\mathbb N^{\mathbb N}$ has no winning strategy for either player. Consequently AD is incompatible with AC.

## Facts & Assumptions

[F1] [[lem-natural-number-game-strategies-have-continuum-many-plays]] identifies each strategy family and each compatible-play set with the play space.

[F2] [[thm-well-ordering-theorem]] well-orders every set under AC.

[F3] [[lem-cardinality-of-a-well-orderable-set]] assigns the least equinumerous ordinal to a well-orderable set.

[F4] [[cor-cardinal-absorption]] gives $\lambda\cdot2=\lambda$ for infinite cardinals $\lambda$.

[F5] [[thm-transfinite-recursion]] gives total-rule recursion along a well-order.

[A1] Assume [[def-axiom-of-choice]].

## Proof

**Given:** ZF and A1. Write $R=\mathbb N^{\mathbb N}$.

1.1 Apply F2 using A1 and then F3 to obtain the infinite initial cardinal $\kappa=|R|$, a bijection $\kappa\to R$ and its induced well-order of $R$. Infinitude follows already from the distinct constant sequences. By F1 index I's strategies as $\sigma_\alpha$ and II's as $\tau_\alpha$, $\alpha<\kappa$. Each compatible-play set has cardinal $\kappa$ by that same fact. [F1, F2, F3, A1]

2.1 Suppose pairs $(x_\beta,y_\beta)$ have been chosen for $\beta<\alpha<\kappa$. Their used set is the image of $\alpha\times2$, so has cardinal at most $2|\alpha|$. For infinite $\alpha$, F3 gives $|\alpha|<\kappa$ by initiality, and F4 gives $2|\alpha|=|\alpha|<\kappa$; adding one further point still has that cardinal by F4. For finite $\alpha$, both the used set and its extension by one point are finite, hence smaller than infinite $\kappa$. Therefore some play compatible with $\sigma_\alpha$ is unused, and after selecting it some play compatible with $\tau_\alpha$ is still unused. [F3, F4, step 1.1]

3.1 Set $x_\alpha$ to the least eligible $\sigma_\alpha$-play in the fixed well-order, then $y_\alpha$ to the least eligible $\tau_\alpha$-play outside the used set and $\{x_\alpha\}$. Define the rule on any malformed history or empty eligible set to be the constant-zero pair. It is a single-valued total set rule; F5 gives its recursion through $\kappa$. Step 2.1 inductively ensures the default is never used on the actual history, and all selected points are pairwise distinct. [F5, step 1.1, step 2.1]

4.1 Put $A=\{y_\alpha:\alpha<\kappa\}$. For each I strategy $\sigma_\alpha$, its compatible play $x_\alpha$ is outside $A$, including outside all later selected points by step 3.1. Thus it loses on that play. For each II strategy $\tau_\alpha$, its compatible $y_\alpha$ is in $A$, so it loses on that play. Neither player has a winning strategy. AD asserts determinacy for this very natural-number payoff, so it cannot hold together with AC. No cofinality or regularity assumption on $\kappa$ occurred. QED. [F1, step 3.1]
