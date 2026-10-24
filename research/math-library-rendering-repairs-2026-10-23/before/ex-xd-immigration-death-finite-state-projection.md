---
id: ex-xd-immigration-death-finite-state-projection
kind: example
title: "Immigration-death chain projected onto two states"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-xd-countable-nonexplosive-ctmc
  - def-xd-finite-state-projection-and-cemetery-lift
  - thm-xd-finite-state-projection-loss-and-observable-bound
  - thm-xd-finite-generator-master-equation-uniformization
  - def-reaction-network-propensity-system-and-generator
  - thm-countable-state-reaction-networks-lyapunov-nonexplosion
  - def-countable-choice
  - def-dependent-choice
justified_by: []
aliases: []
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
axiom_use: "Countable Choice and Dependent Choice are assumed only to apply the cited reaction-network nonexplosion theorem; the finite cemetery-matrix calculation is choice-free."
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Brian Munsky and Mustafa Khammash, The Finite State Projection Algorithm for the Solution of the Chemical Master Equation"
      url: "https://www.engr.colostate.edu/~munsky/Papers/JChemPhys_124_044104.pdf"
      locator: "§II Theorem 2.2 and §III, printed pp. 044104-4–044104-5; the finite projection lower bound and missing-mass certificate."
---

## Example

Consider immigration at rate $1$ and death at rate $n$ from state $n\in\mathbb N_0$, starting at $0$. For $F=\{0,1\}$, the cemetery lift on $\{0,1,\dagger\}$ is

$$\widetilde Q_F=\begin{pmatrix}-1&1&0\\1&-2&0\\0&1&0\end{pmatrix}.$$

Writing the lifted law as $(p_0(t),p_1(t),c_F(t))^T$, the exact cemetery mass is

$$c_F(t)=\frac1{\sqrt5}\left(\frac{e^{r_+t}-1}{r_+}-\frac{e^{r_-t}-1}{r_-}\right),\qquad r_\pm=\frac{-3\pm\sqrt5}{2}.$$

It equals the probability of having exited $F$ by time $t$ and therefore is the exact embedded killed-vector $\ell^1$ error. A path can exit and return: $0\to1\to2\to1$ has positive probability for every $t>0$, so the full marginal at state $1$ can exceed the killed projection there.

## Facts & Assumptions

**Given:** State space $E=\mathbb N_0$, immigration rate $1$, death rate $n$ at state $n$, initial state $0$, and finite projection $F=\{0,1\}$.

[F1] [[def-reaction-network-propensity-system-and-generator]]: a finite-channel reaction system has a countable state set, integer increments, finite propensities, and generator $QV(x)=\sum_j a_j(x)(V(x+\nu_j)-V(x))$ when that finite sum is defined.

[F2] [[thm-countable-state-reaction-networks-lyapunov-nonexplosion]]: under Countable Choice and Dependent Choice, a proper $V\ge1$ with $QV\le cV$ for finite $c\ge0$ implies that the constructed reaction process is nonexplosive.

[F3] [[def-xd-countable-nonexplosive-ctmc]]: the countable chain used by the projection is already given and nonexplosive; the definition does not prove this from rates alone.

[F4] [[def-xd-finite-state-projection-and-cemetery-lift]]: the killed projection stays at $\dagger$ after the first exit, and its finite lift adds the aggregate exit rate into the cemetery row.

[F5] [[thm-xd-finite-generator-master-equation-uniformization]]: a finite column generator evolves the initial column law by the unique solution of $p'=Qp$.

[F6] [[thm-xd-finite-state-projection-loss-and-observable-bound]]: the cemetery mass equals the first-exit probability and the embedded killed-vector $\ell^1$ error.

[A1] Countable Choice and Dependent Choice are assumed only for the nonexplosion conclusion [F2]. ([[def-countable-choice]], [[def-dependent-choice]])

## Verification


**Proof technique:** verify nonexplosion under the reaction-network Lyapunov hypotheses, then solve the finite cemetery lift.

1.1 The system has two channels, increments $+1$ and $-1$, and propensities $a_+(n)=1$ and $a_-(n)=n$; the death channel is inactive at $n=0$, so every positive-propensity poststate remains in $\mathbb N_0$ and the total rate $1+n$ is finite. Thus [F1] applies. [given, F1, algebra]

1.2 Let $V(n)=1+n$. Its sublevel set $\{n:V(n)\le m\}$ is finite for each integer $m\ge1$, so $V$ is proper. For $n\ge1$, $QV(n)=1(V(n+1)-V(n))+n(V(n-1)-V(n))=1-n\le1+n=V(n)$; at $n=0$ the same value $QV(0)=1$ satisfies this bound. Hence [F2] with $c=1$ and [A1] proves the immigration-death chain is nonexplosive, as required by [F3]. [given, F1, F2, F3, A1, algebra]

1.3 On $F=\{0,1\}$, state $0$ jumps to $1$ at rate $1$; state $1$ jumps to $0$ at rate $1$ and exits to $2\notin F$ at rate $1$. These off-diagonal rates are nonnegative, and the cemetery construction [F4] gives the displayed $\widetilde Q_F$ with zero column sums. Multiplying by the lifted probability vector gives $p_0'=-p_0+p_1$, $p_1'=p_0-2p_1$, and $c_F'=p_1$, with initial vector $(1,0,0)^T$. [F1, F4, given, algebra]

2.1 From $p_1'=p_0-2p_1$ we have $p_0=p_1'+2p_1$; differentiating and using $p_0'=-p_0+p_1$ yields $p_1''+3p_1'+p_1=0$, with $p_1(0)=0$ and $p_1'(0)=1$. The characteristic roots are $r_\pm=(-3\pm\sqrt5)/2$ and $r_+-r_-=\sqrt5$, so the unique solution is $p_1(t)=(e^{r_+t}-e^{r_-t})/\sqrt5$. [F5, step 1.3, algebra]

3.1 Since $c_F'=p_1$ and $c_F(0)=0$, integrating the expression in step 2.1 gives the displayed formula for $c_F(t)$. By [F6], this coordinate is $\mathbb P(\tau_F\le t)$ and equals the embedded killed-vector $\ell^1$ error. [step 2.1, F6, algebra]

4.1 Fix $t>0$ and choose ordered times $0<s_1<s_2<s_3<t$. The joint density for jumps $0\to1$ at $s_1$, $1\to2$ at $s_2$, and $2\to1$ at $s_3$, followed by no further jump through $t$, is $e^{-s_1}\cdot1\cdot e^{-2(s_2-s_1)}\cdot1\cdot e^{-3(s_3-s_2)}\cdot2\cdot e^{-2(t-s_3)}$, which is strictly positive; integrating this positive density over the nonempty ordered-time simplex gives positive probability. Such paths contribute to the full marginal at state $1$ but have already been killed at their first exit from $F$. [F1, F3, F4, given, construct] ∎
