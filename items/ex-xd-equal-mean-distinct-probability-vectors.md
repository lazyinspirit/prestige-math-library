---
id: ex-xd-equal-mean-distinct-probability-vectors
kind: example
title: "Equal mean trajectories do not determine a master-equation state"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-xd-finite-column-generator
  - thm-xd-finite-generator-master-equation-uniformization
justified_by: []
aliases: []
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Brian Munsky and Mustafa Khammash, The Finite State Projection Algorithm for the Solution of the Chemical Master Equation"
      url: "https://www.engr.colostate.edu/~munsky/Papers/JChemPhys_124_044104.pdf"
      locator: "§II, equation (2.4), printed pp. 044104-2–044104-3; the chemical master equation evolves the full probability vector."
---

## Example

On states $\{0,1,2\}$, compare $Q_A=0$ with

$$Q_B=\begin{pmatrix}0&1&0\\0&-2&0\\0&1&0\end{pmatrix},$$

both with initial vector $e_1=(0,1,0)^T$. For $Q_A$ the law stays $e_1$. For $Q_B$ it is

$$p_B(t)=\left(\frac{1-e^{-2t}}2,e^{-2t},\frac{1-e^{-2t}}2\right)^T.$$

Both mean trajectories equal $1$, so both obey the same deterministic mean equation $m'(t)=0$, $m(0)=1$. For every $t>0$ the probability vectors differ. Thus an equation for the mean alone does not solve or determine the full master-equation state.

## Facts & Assumptions

**Given:** The finite state set $\{0,1,2\}$, initial vector $e_1$, and generators $Q_A,Q_B$ displayed in the Example.

[F1] [[def-xd-finite-column-generator]]: a finite column generator has nonnegative off-diagonal entries and every source column sums to zero.

[F2] [[thm-xd-finite-generator-master-equation-uniformization]]: the full probability vector is the unique solution of $p'=Qp$ from its initial vector.

## Verification

**Proof technique:** solve both finite master equations and compare their first moments.

1.1 $Q_A=0$ is a finite column generator, and the constant vector $p_A(t)=e_1$ solves $p_A'=Q_Ap_A$ with the stated initial value. By [F2] it is the unique law, and its mean is $0\cdot0+1\cdot1+2\cdot0=1$. [given, F1, F2, algebra]

1.2 The off-diagonal entries of $Q_B$ are nonnegative and its columns sum to zero, so [F1] applies. Writing $p_B=(p_0,p_1,p_2)^T$, its master equation is $p_0'=p_1$, $p_1'=-2p_1$, $p_2'=p_1$ with initial values $(0,1,0)$. Solving gives $p_1=e^{-2t}$ and $p_0=p_2=(1-e^{-2t})/2$; direct differentiation verifies these formulas and their initial data, and [F2] makes this the unique law. [given, F1, F2, algebra]

2.1 The mean under $p_B(t)$ is $0\cdot p_0+1\cdot p_1+2\cdot p_2=e^{-2t}+1-e^{-2t}=1$, the same as the mean under $p_A(t)$, while $p_B$ has positive mass at $0$ for $t>0$ and $p_A$ has none. Thus the same mean trajectory corresponds to two different full distributions. [step 1.1, step 1.2, algebra] ∎
