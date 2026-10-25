---
id: ex-expander-walk-hits-dense-bad-sets
kind: example
title: "Expander walk hits dense bad sets"
status: published
origin: pipeline
deps: [thm-expander-walk-hits-dense-bad-sets, thm-margulis-family-has-uniform-spectral-gap]
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
    - title: "Hoory–Linial–Wigderson, Expander Graphs and Their Applications, May 2006 draft; §3.2 Theorem3.6 and Chapter8 weaker bound; numerical specialization."
      url: "https://www.math.ias.edu/~avi/BOOKS/expanderbookr1.pdf"
---

## Example

On a Margulis graph, a fixed bad vertex set of density at least $1/4$ is missed by a stationary $t$-step walk with probability at most $(3/4)(313/320)^t$, for $t\ge0$. The stationary-start requirement cannot simply be deleted.

## Facts & Assumptions

**Given:** the objects and hypotheses in the statement above.

[F1] Let $\alpha<1$ and let $B$ be a fixed vertex set of density $\delta\in[0,1]$. For a walk begun from the uniform distribution and taking $t\ge0$ steps (thus sampling $t+1$ vertices), $$\Pr[\text{no visit to }B]\le(1-\delta)[1-(1-\alpha)\delta]^t\le(1-\delta)e^{-(1-\alpha)\delta t}.$$ A zeroth power is interpreted as one even when its base is zero. ([[thm-expander-walk-hits-dense-bad-sets]]).

[F2] For every $m\ge2$ the normalized Margulis adjacency has absolute nontrivial norm $\alpha\le73/80$, hence algebraic gap at least $7/80$. For $m=1$ the mean-zero space is zero and $\alpha=0$. ([[thm-margulis-family-has-uniform-spectral-gap]]).


## Verification

1.1 The Margulis bound gives $1-\alpha\ge7/80$. In the avoidance estimate, $1-\delta\le3/4$ and $1-(1-\alpha)\delta\le1-(7/80)(1/4)=313/320$. All factors are nonnegative, so multiplication yields the displayed estimate, including $t=0$. [F1, F2]

2.1 For a concrete start issue take modulus $m=2$ and let $B$ be one of the four vertices. A deterministic start outside $B$ misses at time zero with probability one, whereas the stationary formula gives $3/4$. Thus it does not hold unchanged for arbitrary starts. On the singleton graph a set of density at least $1/4$ is the full set and avoidance is zero. [step 1.1, algebra] ∎
