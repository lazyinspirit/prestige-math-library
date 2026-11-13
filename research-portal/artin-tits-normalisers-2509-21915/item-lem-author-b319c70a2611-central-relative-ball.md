---
title: Shrink the finite relative ball to a central arrangement
status: published
research_item: lem-author-b319c70a2611-central-relative-ball
dependency_level: 10
---

## Prerequisites

- [def-relative-cone-artin-tits-normalisers](item-def-relative-cone-artin-tits-normalisers)
- [lem-author-b319c70a2611-finite-relative-ball](item-lem-author-b319c70a2611-finite-relative-ball)


## Statement

For $u\in\mathrm{Cone}(J)^\circ$ there is $r>0$ such that $B_E(u,r)\subseteq\mathrm{Cone}(J)$, only finitely many relative hyperplanes meet this ball, and every ambient root hyperplane meeting this ball contains $u$. Here $E=\Theta_J$, and the ball is a ball in $E$.

## Facts & Assumptions

**Given:** The proper restricted kernels from [def-relative-cone-artin-tits-normalisers](item-def-relative-cone-artin-tits-normalisers) and the finite relative ball from [lem-author-b319c70a2611-finite-relative-ball](item-lem-author-b319c70a2611-finite-relative-ball). **Goal:** Remove the finitely many noncentral traces.

## Proof


**Given:** The proper restricted kernels from [def-relative-cone-artin-tits-normalisers](item-def-relative-cone-artin-tits-normalisers) and the finite relative ball from [lem-author-b319c70a2611-finite-relative-ball](item-lem-author-b319c70a2611-finite-relative-ball). **Goal:** Remove the finitely many noncentral traces.



**Proof technique:** direct.

1.1 Let $B_E(u,r_0)$ be supplied by [lem-author-b319c70a2611-finite-relative-ball](item-lem-author-b319c70a2611-finite-relative-ball), with finite set $\mathcal K$ of relative hyperplanes meeting it. For each $K=\ker a\in\mathcal K$ not containing $u$, choose $\delta_K>0$ such that $B_E(u,\delta_K)\cap K=\varnothing$: in positive dimension take any $\delta_K<|a(u)|/\sum_i|a(e_i)|$ in orthonormal coordinates. The triangle inequality bounds $|a(x)-a(u)|$ by $(\sum_i|a(e_i)|)\|x-u\|$, verifying this choice. [given, algebra]

2.1 Choose $0<r<r_0$ smaller than all these finitely many $\delta_K$ (if there are none, only require $r<r_0$). A relative hyperplane meeting the smaller ball belongs to $\mathcal K$ and must contain $u$. An ambient root hyperplane either contains $E$, and hence $u$, or has a proper relative trace and so also contains $u$ if it meets this ball. Containment in the cone and finiteness persist under shrinking. [step 1.1, given] ∎
