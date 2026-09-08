---
id: def-jensen-square-sequence
kind: definition
title: "Jensen’s square principle with its order-type bound"
status: published
origin: pipeline
deps: [def-club-subsets-of-ordinals, def-cardinal, def-axiom-of-choice, thm-regularity-of-the-alephs, cor-cardinal-absorption]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Cummings–Magidor, Martin’s Maximum and weak square, Definition 1.1, p1, and width-one identification, p2; no-thread consequence proved locally"
      url: https://www.math.cmu.edu/users/jcumming/papers/mm_square_final.pdf
justified_by: []
forward_refs: []
---

## Definition

Work in ZFC. For an infinite cardinal $\kappa$, let $\kappa^+$ be its successor cardinal, and use the ordinal order on cardinals as in [[def-cardinal]]. A **$\square_\kappa$-sequence** is $(C_\alpha)$ indexed by the nonzero limits $\alpha<\kappa^+$ such that $C_\alpha$ is club in $\alpha$, its ordinal order type satisfies $\operatorname{otp}(C_\alpha)\le\kappa$, and

$$\beta\in\operatorname{acc}_\alpha(C_\alpha)\quad\Longrightarrow\quad C_\beta=C_\alpha\cap\beta.$$

Club and nonzero limit points have the meanings in [[def-club-subsets-of-ordinals]]. The principle $\square_\kappa$ asserts existence of such a sequence. The bound is on ordinal order type, which is stronger than cardinality at most $\kappa$. A **thread** would be a club $D\subseteq\kappa^+$ with $D\cap\alpha=C_\alpha$ at every nonzero limit point $\alpha$ of $D$.

The stated order-type bound already excludes a thread. Assume AC as in [[def-axiom-of-choice]]. The successor-cardinal regularity theorem [[thm-regularity-of-the-alephs]] makes $\kappa^+$ regular, so the increasing enumeration $d$ of its unbounded subset $D$ has domain $\kappa^+$: its order type is at most $\kappa^+$ as a subset of that ordinal and its cofinality forces cardinality $\kappa^+$. Closedness gives continuity at nonzero limit indices. Choose the particular limit index $\xi=\kappa+\omega$. Cardinal absorption [[cor-cardinal-absorption]] gives $|\xi|=\kappa$, so $\kappa<\xi<\kappa^+$. At $\alpha=d(\xi)$, continuity makes $\alpha$ a limit point of $D$ and $D\cap\alpha=d[\xi]$ has order type $\xi>\kappa$. A thread would identify it with $C_\alpha$, contrary to the bound. This includes $\kappa=\omega$, where $\xi=\omega+\omega$.

There are no square entries at zero or successor indices in this convention. This is the width-one square principle at the successor of $\kappa$; no constructibility assumption or implication is part of its definition.
