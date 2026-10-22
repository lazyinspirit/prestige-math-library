---
id: ex-csm-frontier-biased-ring-entropy
kind: example
title: Entropy production on a finite biased ring
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 5
deps:
  - def-csm-frontier-finite-rate-process
  - thm-csm-frontier-finite-rate-forward-equation
  - lem-csm-frontier-finite-rate-jump-count-expectation
  - def-csm-frontier-stationary-path-entropy
  - thm-csm-frontier-finite-path-fluctuation
  - def-countable-choice
  - def-natural-logarithm
  - thm-natural-logarithm-laws
dependency_roles:
  def-csm-frontier-finite-rate-process: mathematical-premise
  thm-csm-frontier-finite-rate-forward-equation: mathematical-premise
  lem-csm-frontier-finite-rate-jump-count-expectation: mathematical-premise
  def-csm-frontier-stationary-path-entropy: mathematical-premise
  thm-csm-frontier-finite-path-fluctuation: mathematical-premise
  def-countable-choice: mathematical-premise
  def-natural-logarithm: mathematical-premise
  thm-natural-logarithm-laws: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: Countable Choice is carried by the finite-state fluctuation theorem used in the Verification.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Udo Seifert, Stochastic thermodynamics: From principles to the cost of precision (lecture notes, 2017)"
      url: https://arxiv.org/pdf/1707.03759
      locator: Section 5.1–5.2, PDF pp. 8–9, asymmetric random walk, forward/backward jump counts and mean entropy production; the source treats a line walk, and the finite ring is calculated locally here.
    - title: Joel L. Lebowitz and Herbert Spohn, A Gallavotti-Cohen Type Symmetry in the Large Deviation Functional for Stochastic Dynamics
      url: https://arxiv.org/pdf/cond-mat/9811220
      locator: Sections 2.1–2.2, PDF pp. 3–7, finite-state path weights and time-reversal action.
---

## Example

Let $N\ge3$ be an integer and let the state space be the ring $E=\mathbb Z/N\mathbb Z$. From state $i$, let the constant clockwise rate to $i+1$ be $a>0$ and the counterclockwise rate to $i-1$ be $b>0$, with all other off-diagonal rates zero. Start the finite-state process in the uniform law $\pi_i=1/N$. If $N_+$ and $N_-$ denote the numbers of clockwise and counterclockwise jumps on $[0,T]$, then $\pi$ is stationary and, almost surely, the stationary path entropy is

$$S_T=(N_+-N_-)\log(a/b).$$

Its mean is $\mathbb E[S_T]=T(a-b)\log(a/b)\ge0$. Reversibility here means detailed balance with respect to the stationary law; it holds exactly when $a=b$. For every finite $T\ge0$, this ring also satisfies the exact measure fluctuation relation $\mu_T(ds)=e^s\mu_T(-ds)$, where $\mu_T$ is the law of $S_T$. If $a,b$ are physical rates, they have units of inverse time; $aT,bT$ and $S_T$ are dimensionless.

## Statement references

[[def-csm-frontier-finite-rate-process]]

[[lem-csm-frontier-finite-rate-jump-count-expectation]]

[[def-csm-frontier-stationary-path-entropy]]

[[thm-csm-frontier-finite-path-fluctuation]]

[[thm-natural-logarithm-laws]]

## Facts & Assumptions

**Given:** The ring size $N\ge3$, positive rates $a,b$, finite duration $T\ge0$, and uniform initial law in the Example.

[F1] [[def-csm-frontier-finite-rate-process]]: from each state $i$, the only transitions are $i\to i+1$ at rate $a$ and $i\to i-1$ at rate $b$.

[F2] [[thm-csm-frontier-finite-rate-forward-equation]]: if a probability row vector $\pi$ satisfies $\pi Q=0$ for a constant rate matrix, then the process started in $\pi$ has law $\pi$ at every time.

[F3] [[lem-csm-frontier-finite-rate-jump-count-expectation]]: for distinct states $i,j$, $\mathbb E[N_{ij}(T)]=\int_0^T\mathbb P(X_t=i)q_{ij}\,dt$.

[F4] [[def-csm-frontier-stationary-path-entropy]]: each jump $i\to j$ contributes $\log(\pi_iq_{ij}/(\pi_jq_{ji}))$ to $S_T$.

[F5] [[thm-csm-frontier-finite-path-fluctuation]]: for a finite irreducible chain with positive stationary law and symmetric support, $\mathbb E[e^{-S_T}]=1$ and $\mu_T(ds)=e^s\mu_T(-ds)$ as measures.

[F6] [[thm-natural-logarithm-laws]]: $\log$ is strictly increasing on $(0,\infty)$.

[A1] [[def-countable-choice]]: Countable Choice, used by the Lebesgue jump-path construction underlying [F3] and [F5].

## Verification





**Given:** The finite ring and the suppliers [F1]–[F6].

1.1 The total rate leaving every state is $a+b$. Each state also receives total stationary flow $(a+b)/N$ from its two neighbors, so the uniform row vector satisfies $\pi Q=0$. By [F2], starting the process in $\pi$ makes it stationary. The condition $N\ge3$ ensures $i+1$ and $i-1$ are distinct states. [F1, F2, given, algebra]

1.2 By [F1] and [F4], almost surely every jump is clockwise or counterclockwise. A clockwise jump $i\to i+1$ contributes $\log((\pi_i a)/(\pi_{i+1}b))=\log(a/b)$, while a counterclockwise jump contributes $\log((\pi_i b)/(\pi_{i-1}a))=-\log(a/b)$. Summing these almost-sure increments gives $S_T=(N_+-N_-)\log(a/b)$ almost surely, including the no-jump case when both counts are zero. [F4, given, algebra]

1.3 Detailed balance on an edge requires $\pi_i a=\pi_{i+1}b$, which under the uniform law is equivalent to $a=b$. If $a=b$, this equality holds on every edge; nonedges have zero rate in both directions. Hence detailed balance holds exactly in the symmetric-rate case. [F1, given, algebra]

2.1 By [F3] and stationarity from step 1.1, $$\mathbb E[N_+]=\sum_i\mathbb E[N_{i,i+1}] =\sum_i\int_0^T\frac1N a\,dt=aT,\qquad \mathbb E[N_-]=\sum_i\mathbb E[N_{i,i-1}] =\sum_i\int_0^T\frac1N b\,dt=bT.$$ Thus step 1.2 gives $\mathbb E[S_T]=(aT-bT)\log(a/b)=T(a-b)\log(a/b)$. Since $\log$ is strictly increasing by [F6], $a-b$ and $\log(a/b)$ have the same sign, so their product is nonnegative. [F3, F4, F6, step 1.1, step 1.2, algebra]

3.1 The ring is irreducible because both rates are positive and repeated clockwise jumps connect every pair of states. It has positive stationary law $\pi$ and symmetric support because every edge has both rates positive. Therefore [F5] applies and gives the stated exact finite-time fluctuation relation, with no assumption of a probability density for $S_T$. [A1, F1, F2, F5, step 1.1] ∎

