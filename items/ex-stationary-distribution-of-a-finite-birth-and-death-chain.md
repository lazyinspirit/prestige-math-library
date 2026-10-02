---
id: ex-stationary-distribution-of-a-finite-birth-and-death-chain
kind: example
title: "Stationary law of a finite birth-and-death chain"
status: published
origin: pipeline
landmark: false
deps:
  - def-transition-matrix-and-n-step-transition-probabilities
  - def-reversible-measure-and-detailed-balance
  - lem-detailed-balance-implies-invariance
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-10-02
  precheck: pass
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition, §5.5–5.6, birth-and-death chains"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "Levin–Peres–Wilmer, Markov Chains and Mixing Times, second edition, §21.3 and Appendix C.1"
      url: https://pages.uoregon.edu/dlevin/MARKOV/mcmt2e.pdf
---

## Example

Let $m\ge1$ and let $P$ be the transition matrix of a birth-and-death chain on
$\{0,1,\ldots,m\}$ with

$$p_i:=P(i,i+1)>0\ (0\le i\le m-1),\qquad q_i:=P(i,i-1)>0\ (1\le i\le m),$$

all other off-diagonal entries zero and nonnegative holding probabilities
$P(i,i)=1-p_i-q_i\ge0$ (with $p_m:=0$, $q_0:=0$). Put $w_0:=1$ and
$w_i:=\prod_{j=0}^{i-1}p_j/q_{j+1}$ for $1\le i\le m$. Then

$$\pi(i):=\frac{w_i}{\sum_{k=0}^m w_k}\qquad(0\le i\le m)$$

is a reversible probability distribution, hence a stationary law, for $P$
([[def-reversible-measure-and-detailed-balance]],
[[lem-detailed-balance-implies-invariance]]).

## Facts & Assumptions

**Given:** $m\ge1$, the finite state space $\{0,\ldots,m\}$, and the birth-and-death transition entries $p_i,q_i>0$ with the conventions above.

[F1] A transition matrix on a countable state space has nonnegative entries and rows summing to one. ([[def-transition-matrix-and-n-step-transition-probabilities]])

[F2] A state measure $\mu$ is a function $\mu:E\to[0,+\infty)$ with $\mu(x)<+\infty$ for all $x$; it satisfies detailed balance for $p$ when $\mu(x)p(x,y)=\mu(y)p(y,x)$ for all $x,y$, and it is a reversible probability distribution when $\sum_x\mu(x)=1$. ([[def-reversible-measure-and-detailed-balance]])

[F3] Any finite-point-mass nonnegative measure satisfying detailed balance for a countable transition matrix satisfies $\mu p=\mu$; a reversible probability distribution is therefore invariant. ([[lem-detailed-balance-implies-invariance]])

## Verification

**Given:** The birth-and-death chain on $\{0,\ldots,m\}$ with $p_i=P(i,i+1)>0$, $q_i=P(i,i-1)>0$, nonnegative diagonal entries and zero non-adjacent off-diagonal entries.

**Proof technique:** verify the edgewise detailed-balance identities, normalize the resulting positive weights, and apply the general detailed-balance lemma.

1.1 The matrix $P$ is a transition matrix: its entries are nonnegative by the hypotheses, and each row sums to one, since row $i$ with $1\le i\le m-1$ has the three entries $q_i,p_i$ and $1-p_i-q_i$, row $0$ has $p_0$ and $1-p_0$, and row $m$ has $q_m$ and $1-q_m$. [F1, given]

1.2 Every weight is a positive finite number: $w_0=1$ and each $w_i$ is a finite product of positive ratios $p_j/q_{j+1}$, since all $p_j,q_{j+1}>0$; consequently $W:=\sum_{k=0}^m w_k$ is a finite sum of positive terms, so $0<W<+\infty$. [given, algebra]

2.1 Detailed balance holds on every edge: for $0\le i\le m-1$ the recursion gives $w_{i+1}=w_i\,p_i/q_{i+1}$, hence $w_i\,p_i=w_{i+1}\,q_{i+1}$. [step 1.2, algebra]

3.1 Detailed balance holds for every pair of states: if $x,y$ are distinct and non-adjacent then $P(x,y)=P(y,x)=0$ by hypothesis, so both sides vanish; if $x=y$ then both sides equal $w_xP(x,x)$; and the remaining case is the adjacent pair of step 2.1. [F2, step 2.1, given]

4.1 Define $\pi(i):=w_i/W$. By step 1.2 each $\pi(i)$ is a finite nonnegative number, and $\sum_{i=0}^m\pi(i)=W/W=1$, so $\pi$ is a probability vector; moreover $\pi(x)P(x,y)=\pi(y)P(y,x)$ for all $x,y$, because step 3.1 multiplies by the common positive factor $1/W$. Hence $\pi$ is a reversible probability distribution for $P$ in the sense of [F2]. [F2, step 1.2, step 3.1, given]

5.1 By [F3] the reversible probability distribution $\pi$ satisfies $\pi P=\pi$, so it is a stationary law for the birth-and-death chain. [F3, step 4.1, given]

6.1 Boundary and scope cases: for $m=0$ the state space is $\{0\}$, the products over $i$ are empty, $w_0=1$, $\pi(0)=1$ and both the detailed-balance identity and stationarity are trivial, so the formula remains valid when the positivity hypotheses are vacuous; if an interior denominator $q_{i+1}$ vanishes, the displayed recursion is undefined. If some $p_i=0$ but all $q_{i+1}>0$, it still gives finite nonnegative weights, with $w_0=1$, and the same detailed-balance and normalization argument gives a stationary law, possibly with zero masses. Either missing directed edge destroys irreducibility on the full interval, but strict positivity of both directions is needed only for positive weights in step 1.2, not for the recursion identity when all denominators are positive; the holding probabilities $P(i,i)$ never enter the detailed-balance identities; the finite sum $W$ is legitimately inverted, and no normalization of an infinite measure is attempted, so the countable birth-and-death case requires a separate summability hypothesis and is not claimed here; and no choice principle is used, all quantities being determined by the finite data. [F2, F3, step 1.2, step 5.1, given] ∎
