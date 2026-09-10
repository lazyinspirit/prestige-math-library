---
id: thm-skorokhod-representation-on-polish-spaces
kind: theorem
title: Skorokhod representation on polish spaces
deps: ["lem-countable-boundary-null-partitions-of-a-separable-metric-space", "lem-interval-realization-from-refining-small-diameter-partitions", "thm-portmanteau-theorem", "def-axiom-of-choice"]
sources:
  references:
    - title: Advanced Probability, Theorem 5.29, pp. 65–67, repaired as in the preceding lemma
      url: https://www.mat.univie.ac.at/~mathias/Advanced_Probability.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: published
verification:
  audited: 2026-09-10
origin: pipeline
proof_strategy: direct
---

## Statement

Assume AC. If $\mu_n\Rightarrow\mu$ on a Polish S, there are random elements $Y_n,Y$ on $((0,1),\mathcal B((0,1)),\lambda)$ with laws $\mu_n,\mu$ and $Y_n\to Y$ almost surely.

## Facts & Assumptions

[F1] [[lem-countable-boundary-null-partitions-of-a-separable-metric-space]]: Assume AC. For a separable metric S with Borel probability $\mu$, there are countable refining Borel partitions $\mathcal P_k$ for $k\ge1$, all of whose nonempty atoms have diameter at most $2^{-k}$ and $\mu$-null boundary. Together these partitions generate $\mathcal B(S)$.

[F2] [[lem-interval-realization-from-refining-small-diameter-partitions]]: Assume AC. Let S be nonempty, complete and separable, and let $(\mathcal P_k)$ be countable refining Borel partitions with nonempty atoms of diameter at most $2^{-k}$. Fix orders on each family of children. Every Borel probability $\sigma$ on S is the law of a measurable $T_\sigma:(0,1)\to S$ under Borel Lebesgue probability, obtained by nested interval allocation.

[F3] [[thm-portmanteau-theorem]]: For Borel probabilities $\mu_n,\mu$ on a metric space S, the following are equivalent: (i) $\mu_n\Rightarrow\mu$; (ii) integrals converge for all bounded uniformly continuous real tests; (iii) $\limsup_n\mu_n(F)\le\mu(F)$ for every closed F; (iv) $\liminf_n\mu_n(G)\ge\mu(G)$ for every open G; (v) $\mu_n(A)\to\mu(A)$ for every Borel A with $\mu(\partial A)=0$.

## Proof

**Given:** The objects, hypotheses and definitions in the statement. Its conclusions are to be established below.

1.1 Fix a compatible complete metric. F1 supplies countable refining partitions with diameters at most 2^{-k} and $\mu$-null boundaries. Fix the same child orders and representatives for all laws. F2 constructs $Y_n$ and Y for these laws on the indicated Borel interval, with exactly their prescribed marginals. [F1, F2]

1.2 By F3, every fixed atom A satisfies $\mu_n$(A)->$\mu$(A). The endpoints of its interval are the left endpoint of its parent plus a finite sum of the masses of preceding children, and possibly its own mass. Starting with root endpoints 0,1 and inducting over each finite address proves convergence of both endpoints for every fixed atom interval. [F3]

2.1 Remove the countable union of all endpoint sets for $\mu$ and for every $\mu_n$; each is null by the realization lemma. For a remaining u and any fixed level k, u lies strictly between the endpoints of its $\mu$ interval. Step 1.2 and induction along its finite ancestral address imply that for all sufficiently large n, u lies in the same atom interval for $\mu_n$. The limits $Y_n$(u),Y(u) lie in the closure of that atom by the realization construction. Its closure still has diameter at most 2^{-k}, so $d(Y_n(u),Y(u))\le2^{-k}$ for all such n. Letting k increase proves the asserted almost-sure convergence. [given, algebra] ∎
