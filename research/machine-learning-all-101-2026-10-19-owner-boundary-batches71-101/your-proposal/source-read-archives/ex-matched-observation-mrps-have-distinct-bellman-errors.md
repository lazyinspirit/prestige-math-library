---
id: ex-matched-observation-mrps-have-distinct-bellman-errors
kind: example
title: At discount one-half, identical observable laws hide different Bellman-error minima
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-projected-bellman-error
  - thm-bellman-error-unlearnability-example
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
      locator: "§11.6, Example 11.4, PDF p. 298 in this copy, printed p. 276; local calculation specializes to gamma=1/2."
    - title: "Marcus Hutter, Samuel Yang-Zhao, and Sultan J. Majeed, Conditions on Features for Temporal Difference-Like Methods to Converge"
      url: "https://www.hutter1.net/publ/rlwlinfa.pdf"
      locator: "§4, Figure 2 and transition matrices, printed pp. 2572–2573; the finite specialization is checked locally."
---

## Example

Assume Choice for the infinite trajectory laws and set $\gamma=1/2$. In MRP 1, the states are $A,B$; $A\to B$ has reward $0$ deterministically, while $B\to A$ has reward $1$ and $B\to B$ has reward $-1$, each with probability $1/2$. Its stationary weighting is $(1/3,2/3)$. In MRP 2, the states are $A,B,B'$; $A\to B$ and $A\to B'$ each have reward $0$ and probability $1/2$, $B\to A$ has reward $1$ deterministically, and $B'\to B$ and $B'\to B'$ each have reward $-1$ and probability $1/2$. Its stationary weighting is $(1/3,1/3,1/3)$. Both processes use feature $\psi(A)=(1,0)$ and $\psi(B)=\psi(B')=(0,1)$, and they induce the same stationary feature/reward sequence law. Their state-weighted mean square Bellman errors are
$$
\begin{aligned}\operatorname{BE}_1(a,b)&=\frac13\left(\frac b2-a\right)^2+\frac23\left(\frac{a+b}{4}-b\right)^2,\\ \operatorname{BE}_2(a,b)&=\frac13\left[\left(\frac b2-a\right)^2+\left(1+\frac a2-b\right)^2+\left(-1-\frac b2\right)^2\right].\end{aligned}
$$
The unique minimizers are $(0,0)$ for MRP 1 and $(-2/7,1/7)$ for MRP 2. Their minimum Bellman errors are $0$ and $25/42$, respectively, while $\operatorname{BE}_2(0,0)=2/3$.

## Example references

[[def-axiom-of-choice|The axiom used to form the infinite trajectory laws]].

[[def-projected-bellman-error|The state-weighted mean square Bellman-error objective]].

[[thm-bellman-error-unlearnability-example|The general matched-observation MRP theorem and exact minimizing parameters]].

[Sutton and Barto, *Reinforcement Learning: An Introduction*, 2nd ed., §11.6](https://raw.githubusercontent.com/mutual-ai/Book/main/books/RL/RLbook2020.pdf).

[Hutter, Yang-Zhao, and Majeed, “Conditions on Features for Temporal Difference-Like Methods to Converge,” §4](https://www.hutter1.net/publ/rlwlinfa.pdf).

## Facts & Assumptions

**Given:** The two finite transition/reward models, stationary weightings, common feature map, and $\gamma=1/2$ in the Example.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function; the theorem used in [F2] assumes this axiom to construct the infinite path laws.

[F1] [[def-projected-bellman-error]]: the mean square Bellman error is the weighted sum of the squares of the conditional expected one-step TD errors.

[F2] [[thm-bellman-error-unlearnability-example]]: for general $0\leq\gamma<1$, these models have identical observable laws, MRP 1 has unique minimizer $(0,0)$, and MRP 2 has unique minimizer $(-\gamma/(1+\gamma+\gamma^2),\gamma/(2(1+\gamma+\gamma^2)))$ with minimum $(\gamma+2)^2/(6(1+\gamma+\gamma^2))$.

## Verification

1.1 At $\gamma=1/2$, $D=1+\gamma+\gamma^2=7/4$. Substitution in [F2] gives MRP 2’s minimizing parameter $(-2/7,1/7)$ and minimum $(5/2)^2/(6\cdot7/4)=25/42$. The same substitution gives MRP 1’s minimizing parameter $(0,0)$ and minimum $0$. [given, F2, algebra]

2.1 At $w=(0,0)$ the MRP 2 residuals are $0,1,-1$, so [F1] gives $\operatorname{BE}_2(0,0)=(0^2+1^2+(-1)^2)/3=2/3$. The MRP pair and common observation law are the $\gamma=1/2$ instance of [F2], whose path-law claim uses [A1], completing the example. [given, A1, F1, F2, algebra] ∎
