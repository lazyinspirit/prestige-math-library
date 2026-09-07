---
id: thm-expander-walk-hits-dense-bad-sets
kind: theorem
title: "Expander walk hits dense bad sets"
status: draft
origin: pipeline
deps: [lem-expander-walk-restricted-operator]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; §3.2 Theorem3.6 with the sharper Lemma3.8 estimate above, pp28–29."
      url: "https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf"
---

## Statement

Fix a finite $d$-regular adjacency-slot multigraph on $n\ge1$ vertices, with normalized adjacency $M$, and put $\alpha=\|M|_{\mathbf1^\perp}\|$.

Let $\alpha<1$ and let $B$ be a fixed vertex set of density $\delta\in[0,1]$. For a walk begun from the uniform distribution and taking $t\ge0$ steps (thus sampling $t+1$ vertices),
$$\Pr[\text{no visit to }B]\le(1-\delta)[1-(1-\alpha)\delta]^t\le(1-\delta)e^{-(1-\alpha)\delta t}.$$
A zeroth power is interpreted as one even when its base is zero.

## Facts & Assumptions

**Given:** the objects and hypotheses in the statement above.

[F1] Let $S$ have density $\beta=|S|/n$ in a finite regular graph and let $P_S$ project onto functions supported in $S$. Then $$\|P_SMP_S\|\le\alpha+(1-\alpha)\beta.$$ For a stationary length-$t$ walk, $t\ge0$, its confinement probability is $n^{-1}\langle\mathbf1_S,(P_SMP_S)^t\mathbf1_S\rangle_0$, where the inner product is unnormalized. ([[lem-expander-walk-restricted-operator]]).


## Proof

1.1 Apply the confinement identity to $S=V\setminus B$. The restricted norm is at most $q=\alpha+(1-\alpha)(1-\delta)=1-(1-\alpha)\delta$. Bounding the matrix power in the unnormalized inner product and using $\|\mathbf1_S\|_0^2=n(1-\delta)$ gives the first estimate. If $S$ is empty the probability is zero directly. [F1]

2.1 For $x\ge0$, $1-x\le e^{-x}$: the difference has value zero at zero and derivative $1-e^{-x}\ge0$. Here $x=(1-\alpha)\delta\in[0,1]$, so raising this inequality to the nonnegative integer $t$ gives the second bound. At $t=0$ the probability is $1-\delta$; at $\delta=0$ it is one and at $\delta=1$ zero. [step 1.1, algebra] ∎
