---
id: prop-expander-walk-sampled-and-moving-sets
kind: proposition
title: "Expander walk sampled and moving sets"
status: published
origin: pipeline
deps: [lem-expander-walk-restricted-operator]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; §3.2 Theorems3.10–3.11, p29."
      url: "https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf"
---

## Statement

For a stationary walk in a finite regular graph, take times $0\le t_0<\cdots<t_r$, gaps $g_i=t_i-t_{i-1}\ge1$, and fixed sets $S_i$ of densities $\beta_i$. Then
$$\Pr[X_{t_i}\in S_i\text{ for all }0\le i\le r]\le\sqrt{\beta_0\beta_r}\prod_{i=1}^r\bigl(\sqrt{\beta_{i-1}\beta_i}+\alpha^{g_i}\bigr).$$
For $r=0$ the empty product is one, giving the exact probability $\beta_0$.

## Facts & Assumptions

**Given:** the objects and hypotheses in the statement above.

[F1] Let $S$ have density $\beta=|S|/n$ in a finite regular graph and let $P_S$ project onto functions supported in $S$. Then $$\|P_SMP_S\|\le\alpha+(1-\alpha)\beta.$$ For a stationary length-$t$ walk, $t\ge0$, its confinement probability is $n^{-1}\langle\mathbf1_S,(P_SMP_S)^t\mathbf1_S\rangle_0$, where the inner product is unnormalized. ([[lem-expander-walk-restricted-operator]]).


## Proof

1.1 Let $J$ be the constant projection. On the mean-zero subspace $M-J$ has norm $\alpha$, and $M^g=J+(M-J)^g$ for $g\ge1$. The rank-one operator $P_TJP_S$ has norm $\sqrt{\beta_T\beta_S}$, by the norms of its two indicator vectors. The remaining term has norm at most $\alpha^g$, since projections are contractions. Thus $\|P_TM^gP_S\|\le\sqrt{\beta_T\beta_S}+\alpha^g$. This is the same supported-operator framework as confinement. [F1, algebra]

2.1 Expand the finite path sum with the successive projections, using stationarity to start at $t_0$ uniformly. It is the normalized inner product of the endpoint indicators with the product of the intermediate restricted operators. Bound each operator by the first step and the endpoint norms by $\sqrt{\beta_0}$ and $\sqrt{\beta_r}$. If $r=0$ this is simply $\beta_0$; an empty target makes the actual probability zero and the inequality remains valid. No independence of successive visits is used. [step 1.1, algebra] ∎
