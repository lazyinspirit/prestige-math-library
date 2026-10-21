---
id: ex-exp4-finite-two-expert-set
kind: example
title: A finite two-expert Exp4 instance
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 7
deps:
  - def-contextual-bandit-protocol
  - alg-exp4
  - thm-exp4-expected-regret
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; the example has two actions and two experts.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Tor Lattimore and Csaba Szepesvári, Bandit Algorithms"
      url: "https://tor-lattimore.com/downloads/book/book.pdf"
      locator: "Chapter 18 §§18.2–18.4, PDF pp. 226–240 / printed pp. 217–231; the one-round values below are calculated locally."
---

## Example

Consider one round with two actions, two experts, reward vector $x_1=(1,0)$, and deterministic advice rows $E(1)_1=(1,0)$ and $E(1)_2=(0,1)$. For any learning rate $\eta>0$, Exp4 starts with equal expert weights and samples each action with probability $1/2$. The expected learner reward is $1/2$, the best fixed expert reward is $1$, and the expected regret is $1/2$, independently of $\eta$. For the theorem-bound clause, use the tuned learning rate $\eta=\sqrt{\log 2}$; the general Exp4 theorem then gives $R_1\le\sqrt{4\log 2}$.

## Example references

[[def-contextual-bandit-protocol|Contextual bandit protocol]]: the finite expert advice and expected-regret conventions used in the calculation.

[[alg-exp4|Exp4 initialization and action mixture]]: the uniform initial expert weights and mixture action distribution used here.

[[thm-exp4-expected-regret|Expected-regret theorem]]: the stated general bound specialized to this one-round instance.

## Facts & Assumptions

**Given:** One round, actions $[2]$, experts $[2]$, reward vector $(1,0)$, advice rows $(1,0)$ and $(0,1)$, and Exp4 with $\eta=\sqrt{\log 2}$ for the theorem-bound clause.

[F1] [[def-contextual-bandit-protocol]]: an expert's round reward is the dot product of its advice row with the reward vector.

[F2] [[alg-exp4]]: $Q_{1,m}=1/M$ and $P_{1,i}=\sum_m Q_{1,m}E(1)_{m,i}$.

[F3] [[thm-exp4-expected-regret]]: for $n=1$, $k=2$, and $M=2$, the expected regret is at most $\sqrt{4\log 2}$.

## Verification

1.1 The uniform initial weights give $Q_{1,1}=Q_{1,2}=1/2$. Hence $P_{1,1}=1/2$ and $P_{1,2}=1/2$. The realized reward equals one with probability $1/2$ and zero with probability $1/2$, so its expectation is $1/2$. [F2, algebra]

2.1 The two experts' expected rewards are $\langle(1,0),(1,0)\rangle=1$ and $\langle(0,1),(1,0)\rangle=0$. Thus the best fixed expert reward is one and the expected regret is $1-1/2=1/2$. [F1, step 1.1, algebra]

3.1 Substituting $n=1$, $k=2$, and $M=2$ into [F3] gives the stated bound $\sqrt{4\log2}$. [F3, algebra] ∎
