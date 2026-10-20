---
id: ex-bairds-seven-state-star-expected-update
kind: example
title: A finite Baird-star update has exact expected weights
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps:
  - thm-bairds-counterexample-off-policy-td-diverges
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Richard S. Sutton and Andrew G. Barto, Reinforcement Learning: An Introduction, 2nd ed."
      url: "https://raw.githubusercontent.com/mutual-ai/Book/main/books/RL/RLbook2020.pdf"
      locator: "§11.2, Figure 11.1 and Figure 11.2, Baird’s seven-state features and initial weight vector; PDF pp. 283–285 in this copy, printed pp. 261–263."
---

## Example

Use the seven-state MDP with zero rewards, discount $\gamma=0.99$, dashed transitions uniform over the six upper states, solid transitions to the seventh state, behavior probabilities $6/7$ dashed and $1/7$ solid, target policy always solid, feature values $2w_i+w_8$ at upper state $s_i$ and $w_7+2w_8$ at $s_7$, and initial vector $w_0=(1,1,1,1,1,1,10,1)$. Under the uniform-state expected semi-gradient TD(0) update, with step size $\alpha=1/100$, the first reduced weight vector $(a,b,c)$, where $a=w_1=\cdots=w_6$, $b=w_7$, and $c=w_8$, is $(4486/4375,174997/17500,9413/8750)$; in particular, the first six weights and $w_8$ increase on this update.

## Example references

[[thm-bairds-counterexample-off-policy-td-diverges|For every positive step size, both stated expected update sequences diverge from the specified initial vector]].

[Sutton and Barto, *Reinforcement Learning: An Introduction*, 2nd ed., §11.2](https://raw.githubusercontent.com/mutual-ai/Book/main/books/RL/RLbook2020.pdf).

## Facts & Assumptions

**Given:** The Baird seven-state model, feature values, policies, uniform state weighting, initial vector, and $\alpha=1/100$ in the Example.

[F1] [[thm-bairds-counterexample-off-policy-td-diverges]]: for the specified behavior transitions, the expected semi-gradient TD(0) update is $\bar w^+=w+\alpha\,\mathbb E_{\mu,b}[\rho\delta\phi(S)]$, where $\rho=\pi(A\mid S)/b(A\mid S)$ and $\delta=\gamma v_w(S')-v_w(S)$.

## Verification

1.1 At $w_0$, every upper-state value is $2(1)+1=3$ and the seventh-state value is $10+2(1)=12$. Thus $q_u=0.99(12)-3=222/25$ and $q_7=0.99(12)-12=-3/25$. The importance ratio is $7$ on solid and $0$ on dashed; because behavior selects solid with probability $1/7$, at each fixed state the behavior-action expectation is its solid-action TD error. Uniformly averaging the seven state contributions gives increments per unit step size $2q_u/7$, $q_7/7$, and $(6q_u+2q_7)/7$: each upper feature contributes $2q_u$ to its own coordinate and $q_u$ to the common eighth coordinate, while the seventh feature contributes $q_7$ and $2q_7$ to its last two coordinates. By [F1] these values are $444/175$, $-3/175$, and $1326/175$. [given, F1, algebra]

2.1 Multiplying these increments by $\alpha=1/100$ gives $a_1=1+444/17500=4486/4375$, $b_1=10-3/17500=174997/17500$, and $c_1=1+1326/17500=9413/8750$, exactly as claimed; the displayed fractions give $a_1>1$ and $c_1>1$. [given, step 1.1, algebra] ∎
