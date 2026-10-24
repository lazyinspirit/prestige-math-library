---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-expected-discounted-cost-does-not-imply-pathwise-safety.json
  precheck: pass
id: ex-expected-discounted-cost-does-not-imply-pathwise-safety
kind: example
title: "A small expected cost can coexist with frequent finite-horizon violations"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-constrained-markov-decision-process
  - def-discounted-cost-constraint
  - thm-geometric-series
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Consider a one-state CMDP with actions `safe` and `risky`, deterministic self-transition, zero reward, discount $\gamma=1/10$, cost $0$ for `safe`, cost $1$ for `risky`, and cost threshold $b=1/8$. The stationary policy chooses `risky` with probability $1/10$ at every decision, with independent action draws in the first seven decisions. Its expected discounted cost is $1/9<1/8$, so it is feasible, while the probability of at least one cost during those seven decisions is $5{,}217{,}031/10{,}000{,}000>1/2$.

## Example references

[[def-constrained-markov-decision-process|The finite transition model, bounded cost signal, and stationary randomized policy.]]

[[def-discounted-cost-constraint]]: Expected discounted-cost feasibility is defined by $J_c^\pi(\mu)\le b$.

## Facts & Assumptions

**Given:** One state $s$, two actions, deterministic self-transition, $\gamma=1/10$, cost $c(s,\text{safe},0,s)=0$, cost $c(s,\text{risky},0,s)=1$, threshold $b=1/8$, and policy probability $1/10$ for `risky` at each step.

[F1] [[def-constrained-markov-decision-process]]: a finite CMDP's transition/reward masses and bounded transition-cost signals determine finite-time state and transition masses.

[F2] [[def-discounted-cost-constraint]]: $J_c^\pi(\mu)$ is the discounted sum of the finite-time expected costs, and feasibility means $J_c^\pi(\mu)\le b$.

[F3] [[thm-geometric-series]]: for $0\le r<1$, $\sum_{t=0}^{\infty}r^t=1/(1-r)$.

## Verification

1.1 At every time $t$, the state is $s$ and the expected one-step cost is $1/10$. Thus by [F2] and [F3], $J_c^\pi(\mu)=\sum_{t=0}^{\infty}(1/10)^t(1/10)=(1/10)/(1-1/10)=1/9$. [F1, F2, F3, given, algebra]

2.1 Since $1/9<1/8=b$, the policy is feasible under the expected discounted-cost constraint. [F2, step 1.1, algebra]

3.1 The probability that all seven independent action draws are `safe` is $(9/10)^7=4{,}782{,}969/10{,}000{,}000$. Hence the probability of at least one cost is $1-(9/10)^7=5{,}217{,}031/10{,}000{,}000>1/2$, as claimed. [given, algebra] ∎


## Remarks

The diagram tracks cost history, not additional CMDP states: the physical state is always $s$. Let $N_t$ mean no risky action in the first $t$ decisions, and let $H_t$ mean at least one risky action in those decisions. For $0\le t<7$, the arrows give the one-decision update rule for the history flag under the independent action draws; an arrow of probability zero is omitted.

```tikz
\begin{tikzpicture}[>=stealth]
\node (n) at (0,2) {$N_t$};
\node (h) at (0,0) {$H_t$};
\node (nn) at (5,2) {$N_{t+1}$};
\node (hh) at (5,0) {$H_{t+1}$};
\draw[->] (n) -- node[above] {$9/10\quad(\mathrm{safe})$} (nn);
\draw[->] (n) -- node[above,sloped] {$1/10\quad(\mathrm{risky})$} (hh);
\draw[->] (h) -- node[below] {$1\quad(\mathrm{either\ action})$} (hh);
\end{tikzpicture}
```

Initially $\Pr(N_0)=1$ and $\Pr(H_0)=0$. Iterating the displayed split seven times gives $\Pr(N_7)=(9/10)^7$ and $\Pr(H_7)=1-(9/10)^7>1/2$, as in step 3.1. The expected discounted-cost calculation in steps 1.1–2.1 instead weights each one-step expected cost by $\gamma^t$; it remains $1/9<1/8$. The verification above is independent of this illustration.
