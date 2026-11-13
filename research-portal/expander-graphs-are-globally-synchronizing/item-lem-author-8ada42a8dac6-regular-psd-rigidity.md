---
title: All critical PSD equilibria synchronize on positive regular expanders
status: published
research_item: lem-author-8ada42a8dac6-regular-psd-rigidity
dependency_level: 8
---

## Prerequisites

- [lem-author-8ada42a8dac6-regular-psd-mass](item-lem-author-8ada42a8dac6-regular-psd-mass)
- [lem-author-8ada42a8dac6-regular-psd-half-circle](item-lem-author-8ada42a8dac6-regular-psd-half-circle)
- [lem-author-8ada42a8dac6-regular-psd-recurrence](item-lem-author-8ada42a8dac6-regular-psd-recurrence)
- [def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)
- [def-expander-sync-adjacency-expander](item-def-expander-sync-adjacency-expander)
- [def-expander-prereq-phase-torus](item-def-expander-prereq-phase-torus)


## Statement

Let $G$ be a finite nonempty undirected $d$-regular graph with symmetric binary adjacency (loops counted once), $d>0$ and $\|A-(d/n)J\|\le\alpha d$ for $\alpha\le0.0816$. Every critical point $\theta$ of its Kuramoto energy with positive-semidefinite angular Hessian is fully synchronized, meaning that $\theta_x=\theta_y$ modulo $2\pi$ for every $x,y\in V$.

## Facts & Assumptions

[F1] Use the graph, phase, algebraic and analytic interfaces of [lem-author-8ada42a8dac6-regular-psd-mass](item-lem-author-8ada42a8dac6-regular-psd-mass), [lem-author-8ada42a8dac6-regular-psd-half-circle](item-lem-author-8ada42a8dac6-regular-psd-half-circle), [lem-author-8ada42a8dac6-regular-psd-recurrence](item-lem-author-8ada42a8dac6-regular-psd-recurrence), [def-expander-sync-graph-notation](item-def-expander-sync-graph-notation), [def-expander-sync-adjacency-expander](item-def-expander-sync-adjacency-expander). Every configuration assumed here is a critical point with positive-semidefinite Hessian; local minimality is never inferred from that condition.

[F2] Phases lie in the finite phase torus of [def-expander-prereq-phase-torus](item-def-expander-prereq-phase-torus): angular representatives are identified coordinatewise modulo $2\pi$. Full synchronization means equality of every pair of phase coordinates in that quotient. Adding the same angle to all representatives preserves their pairwise differences and hence this equality.

## Proof

**Given:** The hypotheses of the Statement.

**Goal:** Establish its conclusions directly for critical PSD phases.

1.1 The norm inequality and $d>0$ force $\alpha\ge0$, and imply the same inequality with $a_0=0.0816$ in place of $\alpha$. The graph is connected: otherwise subtracting its mean from the indicator of a nontrivial component gives a nonzero vector $v$ with $Jv=0$ and $Av=dv$, whence $\|(A-(d/n)J)v\|=d\|v\|>a_0d\|v\|$, contrary to the norm bound. This component calculation uses regularity, including the loop convention. [F1, algebra]

2.1 Let $\theta$ be any critical PSD state. Rotate its phase average to be real and nonnegative and choose principal representatives. The regular PSD mass lemma gives a strictly positive first order parameter, so this normalization is legitimate. The certified PSD amplification lemma gives $C_{\pi/2}=\varnothing$. Every absolute phase is therefore below $\pi/2$, and the PSD half-circle lemma on the connected graph gives all normalized phases equal zero. Undoing the common rotation leaves every pair of phases equal modulo $2\pi$, which is full synchronization as defined in [F2]. No local-minimum conclusion has been used. [F1, F2, step 1.1, algebra] ∎
