---
id: lem-covering-basepoint-change-conjugates-subgroup
kind: lemma
title: "Changing the point over a fixed basepoint conjugates the induced covering subgroup"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-based-loops-and-fundamental-group, thm-fundamental-group-laws,
       def-induced-homomorphism-on-fundamental-groups, def-path-connected,
       thm-path-lifting-for-covering-maps]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, proof of Theorem 1.38"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
pipeline_run: null
---

## Statement

Let $p:E\to B$ be a covering with path-connected total space, and let $e_0,e_1\in p^{-1}(b_0)$. If $\widetilde\gamma$ is a path from $e_0$ to $e_1$ and $\gamma=p\circ\widetilde\gamma$, then, with traversal-order multiplication,

$$p_*\pi_1(E,e_1)=[\gamma]^{-1}\bigl(p_*\pi_1(E,e_0)\bigr)[\gamma].$$

Every point $e_1$ in the fibre arises in this way from some path $\widetilde\gamma$.

## Facts & Assumptions

**Given:** The covering, fibre points, and connecting path in the Statement; write $H_i=p_*\pi_1(E,e_i)$ and $g=[\gamma]$.

[F1] Every path in the base has a unique lift from a prescribed point in the fibre ([[thm-path-lifting-for-covering-maps]]).

[F2] Traversal-order concatenation gives multiplication of loop classes and reversal gives inversion ([[thm-fundamental-group-laws]]).

[F3] A path-connected space contains a path between every pair of its points ([[def-path-connected]]).

## Proof

**Proof technique:** direct.

1.1 If $[\lambda]\in\pi_1(E,e_1)$, then $\widetilde\gamma*\lambda*\bar{\widetilde\gamma}$ is a loop at $e_0$. Its projection represents $g\,p_*[\lambda]g^{-1}$ by [F2], so $gH_1g^{-1}\subseteq H_0$. [F2]

2.1 Apply step 1.1 to the reversed path from $e_1$ to $e_0$. This gives $g^{-1}H_0g\subseteq H_1$, while conjugating the first inclusion by $g^{-1}$ and $g$ gives the reverse containment. Hence $H_1=g^{-1}H_0g$, with the displayed direction fixed by traversal order. [step 1.1, F2]

3.1 For an arbitrary $e_1\in p^{-1}(b_0)$, path-connectedness and [F3] supply a path from $e_0$ to $e_1$; its projection begins and ends at $b_0$, hence is a loop. Conversely, [F1] says the endpoint of the lift of that loop from $e_0$ is the prescribed $e_1$. [F1, F3, choose] ∎
