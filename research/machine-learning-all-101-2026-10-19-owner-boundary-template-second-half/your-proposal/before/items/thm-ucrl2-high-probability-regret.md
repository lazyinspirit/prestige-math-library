---
id: thm-ucrl2-high-probability-regret
kind: theorem
title: "UCRL2 high-probability pathwise regret bound"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps: [alg-extended-value-iteration, alg-ucrl2, lem-ucrl2-evi-termination, lem-ucrl2-uniform-confidence-bounds, def-average-reward-and-regret, def-communicating-mdp-and-diameter, lem-ucrl2-adaptive-sample-tape-representation, thm-azuma-hoeffding-inequality, def-axiom-of-choice]
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - {title: "Thomas Jaksch, Ronald Ortner, and Peter Auer, Near-optimal Regret Bounds for Reinforcement Learning", url: "https://www.jmlr.org/papers/volume11/jaksch10a/jaksch10a.pdf", locator: "Theorem 2 (PDF lines 270–277), §4 regret analysis, and Appendix C.1, Lemma 17 on confidence intervals (PDF lines 3710–3908)."}
    - {title: "Christos Dimitrakakis and Ronald Ortner, Decision Making Under Uncertainty and Reinforcement Learning: Theory and Algorithms", url: "https://www.cse.chalmers.se/~chrdimi/downloads/book.pdf", locator: "Chapter 10.3.1, UCRL2 regret proof, printed pp. 225–228."}
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice for the path-law and martingale suppliers. Let a finite communicating MDP have $S\ge1$ states, at most $A\ge1$ actions per state, rewards in $[0,1]$, and normalized diameter $D$. For each initial state, integer horizon $T\ge2$, and $\delta\in(0,1)$, UCRL2 with confidence parameter $\delta$ satisfies
$$\Pr\!\left(\Delta_T\le34DS\sqrt{AT\log(T/\delta)}\right)\ge1-\delta.$$
For every integer $T\ge1$, the same algorithm also satisfies
$$\Pr\!\left(\Delta_T\le34DS\sqrt{AT\log(2T/\delta)}\right)\ge1-\delta.$$
Here $\Delta_T=T\rho^*-R_T$ is realized, pathwise regret and logarithms are natural. These are assertions for each fixed horizon and initial state. The original formula with $\log(T/\delta)$ and $T\ge1$ is false, as refuted below.

## Statement references

[[alg-ucrl2]].

[[lem-ucrl2-evi-termination]].

[[lem-ucrl2-uniform-confidence-bounds]].

[[def-average-reward-and-regret]].

[[def-communicating-mdp-and-diameter]].

[Jaksch, Ortner, and Auer](https://www.jmlr.org/papers/volume11/jaksch10a/jaksch10a.pdf), Theorem 2, Section 4, and Appendix C. The proof below supplies the martingale and boundary arguments locally.

## Facts & Assumptions

**Given:** The MDP, initial state, and parameters in the Statement, with the UCRL2 procedure in [[alg-ucrl2]].

[F1] [[alg-ucrl2]] and [[alg-extended-value-iteration]]: define the confidence radii, optimistic rewards, count-doubling episodes, deterministic ties, and returned Bellman vector $h_k$ and transition rows $q_k$.

[F2] [[lem-ucrl2-evi-termination]]: every inner planning call terminates with residual span less than $1/\sqrt{t_k}$.

[F3] [[def-communicating-mdp-and-diameter]] and [[def-average-reward-and-regret]]: the raw hitting diameter is at most $D$, the common optimal finite-horizon value satisfies $V_n(s)/n\to\rho^*$, and $\Delta_T=T\rho^*-R_T$.

[F4] [[lem-ucrl2-adaptive-sample-tape-representation]]: adaptive visits reveal independent fixed tape prefixes with the true pair law, including correlated reward and next state.

[F5] [[thm-azuma-hoeffding-inequality]]: a centered martingale with deterministic increment widths $c_j$ has one-sided upper tail $\exp(-2x^2/\sum_jc_j^2)$.

[A1] [[def-axiom-of-choice]]: AC is inherited for the path-law and martingale suppliers. It is not used for the finite maximizations or deterministic tie rules.

## Proof

1.1 Fix $T\ge2$. At any integer time $t\ge1$, use [F4] to apply [F5] to every fixed pair and prefix length $1\le n<t$. Rewards give two-sided probability $2e^{-2nu^2}$; subset indicators give the same bound. For probability vectors $p,q$, $\|p-q\|_1=2\max_{B\subseteq S}|p(B)-q(B)|$, by summing positive coordinates of $p-q$. Union over $2^S$ subsets therefore bounds an $\ell^1$ error exceeding $u$ by $2^{S+1}e^{-nu^2/2}$. Substituting the algorithm's radii, and unioning over at most $SAt$ pairs and prefixes, bounds reward failure at time $t$ by $2SAt(\delta/(2SAt))^7\le\delta/(64t^6)$, and transition failure by $SAt2^{S+1}(\delta/(2At))^{7S}\le\delta/(32t^6)$. The latter follows from $S2^{1-6S}\le1/32$, whose value at $S=1$ is $1/32$ and whose successive ratio is $(S+1)/(64S)<1$. Unobserved-pair reward radii exceed $1$ and transition radii exceed $2$, so their defaults cannot fail. Since $\sum_{t\ge1}t^{-6}\le1+\int_1^\infty x^{-6}dx=6/5$, with probability at least $1-\delta/8$ every confidence set at every time contains the true transition/reward means. Denote this event by $E$. There is no conditioning on an adaptively selected count in this argument. [given, F1, F4, F5, A1, algebra]

2.1 In an episode whose confidence set contains the true model, let $F$ be its optimistic Bellman operator. Its iterates $U_n=F^n0$ are optimal $n$-step values for the extended transition choices and fixed upper rewards, by finite-horizon backward induction and attained maxima. Upper rewards are in $[0,1]$, and true transitions and rewards are dominated admissible choices. Thus $U_n\ge V_n$. Also $\operatorname{span}(U_n)\le D$: from $x$, follow a true-model policy hitting $y$ in expected time at most $D+\xi$, and then an optimal remaining-horizon extended policy. The inequality $U_n(y)\le U_{n-j}(y)+j$ follows by dropping the last $j$ rewards, each at most one. For hitting time $\tau$, this yields total expected reward at least $U_n(y)-\mathbb E\tau$, including $\tau>n$ because $U_n(y)\le n$ and rewards are nonnegative. Take $\xi\downarrow0$ and interchange $x,y$. A true history policy's state/action path law can be realized in the extended system by its conditional action probabilities given state/action history; finite histories have finite state/action alphabets, so this averaging preserves its state transitions and hitting-time law. [given, F1, F3, algebra, construct, step 1.1]

3.1 Let $h_k$ be the vector used in the terminating backup, and let $d_k=F(h_k)-h_k$, with extrema $m_k,M_k$. By [F2], $M_k-m_k<\varepsilon_k=1/\sqrt{t_k}$. Monotonicity and additive homogeneity give $F^nh_k\le h_k+nM_k\mathbf1$. Also $F$ is sup-norm nonexpansive, since $v\le w+c\mathbf1$ implies $Fv\le Fw+c\mathbf1$ and conversely. Therefore $U_n\le h_k+nM_k\mathbf1+\|h_k\|_\infty\mathbf1$. Combine with $U_n\ge V_n$ and [F3], divide by $n$, and pass to the limit to get $\rho^*\le M_k$. Consequently $d_k(s)\ge\rho^*-\varepsilon_k$. For the chosen action and row, $d_k(s)=\widetilde r_k(s,a)+q_k(\cdot\mid s,a)h_k-h_k(s)$. On a good episode, $\widetilde r_k-r\le2b^r_k$ and $\|q_k-P\|_1\le2b^p_k$; step 2.1 gives $\operatorname{span}(h_k)\le D$. Centering $h_k$ halfway between its extrema bounds its sup norm by $D/2$, so $(q_k-P)h_k\le Db^p_k$. Hence each step of that episode obeys $\rho^*-r(s,a)\le (Ph_k)(s,a)-h_k(s)+Db^p_k(s,a)+2b^r_k(s,a)+\varepsilon_k$. [given, F1, F2, F3, step 2.1, algebra]

4.1 Subtract $\min h_k$ from each episode vector. On good episodes it lies in $[0,D]$. For the probabilistic argument define $w_k$ to be that vector when the episode's confidence set contains the true means and zero otherwise. This is measurable at the episode start, since true means are fixed parameters; its coordinates always lie in $[0,D]$. The increments $X_t=(Pw_{k(t)})(S_t,A_t)-w_{k(t)}(S_{t+1})$ are conditionally centered with conditional range width at most $D$. The reward differences $Y_t=r(S_t,A_t)-\rho_t$ are conditionally centered with width at most $1$, even if reward and next state are correlated. Apply [F5] separately with failure probability $\delta/4$ to obtain $\sum_{t\le T}X_t\le D\sqrt{(T/2)\log(4/\delta)}$ and $\sum_{t\le T}Y_t\le\sqrt{(T/2)\log(4/\delta)}$. These events and $E$ jointly have probability at least $1-\delta$, by step 1.1 and a union bound. On their intersection every episode is good; the sum of $(Ph_k)(S_t,A_t)-h_k(S_t)$ equals $\sum X_t$ plus episode endpoint differences, each at most $D$. [given, F1, F5, A1, step 1.1, step 3.1, algebra]

5.1 Write $K=\sum_s|A(s)|\le SA$ and $Q_T=\sum_{k,s,a}v_k(s,a)/\sqrt{\max\{1,N_k(s,a)\}}$. By the stop rule in [F1], every within-episode count satisfies $0\le v_k(s,a)\le\max\{1,N_k(s,a)\}$; when $N_k(s,a)>0$ and that pair triggers the episode, its total count changes from $N_k(s,a)$ to $2N_k(s,a)$. For a fixed visited pair, the first observation contributes one. Thereafter, for $N\ge1$ and $0\le v\le N$, rationalization gives $v/\sqrt N=(\sqrt{N+v}-\sqrt N)(\sqrt{1+v/N}+1)\le(1+\sqrt2)(\sqrt{N+v}-\sqrt N)$. Telescoping, including the first observation, and then Cauchy--Schwarz yield $Q_T\le(1+\sqrt2)\sum_{s,a}\sqrt{N_T(s,a)}\le(1+\sqrt2)\sqrt{SAT}$. A completed episode can be charged to a triggering pair. A pair with final count $N$ receives at most $1+\log_2\max\{1,N\}$ charges, because after its initial observation every charge doubles its total. The last incomplete episode adds at most one. Thus concavity of $\log$ gives $m\le1+K+K\log_2(1+T/K)$. When $T\ge K$, this is at most $K(3+\log_2(T/K))\le4\sqrt{KT}\le4\sqrt{SAT}$. For the last inequality set $x=T/K\ge1$: $4\sqrt x-3-\log_2x$ is positive at $1$ and has derivative $(2\sqrt x-1/\log2)/x>0$, since $\log2>1/2$. [given, F1, algebra, step 4.1]

6.1 On the joint event of step 4.1, sum step 3.1 and use $\max\{1,N_k(s,a)\}\le t_k\le T$. With $L_r=\log(2SAT/\delta)$ and $L_p=\log(2AT/\delta)$ this gives the fully explicit bound $$\Delta_T\le\left[D\sqrt{14S L_p}+\sqrt{14L_r}+1\right]Q_T+Dm+(D+1)\sqrt{\frac T2\log(4/\delta)}.$$ The $1$ in the bracket bounds the planning error $\sum_k\ell_k/\sqrt{t_k}$ by $Q_T$. This argument bounds realized regret; it does not replace rewards by their expectation without the martingale term. [given, F1, F3, step 3.1, step 4.1, step 5.1, algebra]

7.1 Put $L=\log(T/\delta)$ and $B=DS\sqrt{ATL}$. If $T<SA$, then $\Delta_T\le T\le\sqrt{SAT}<34B$, since $D\ge1$ and $L\ge\log2>1/2$. Suppose $T\ge SA$ and $S\ge2$. Then $L_r\le3L$, $L_p\le2L$ (because $2A\le SA\le T$), and $\log(4/\delta)\le2L$. Divide step 6.1 by $B$ and apply step 5.1, $D\ge1$, and $A\ge1$ to bound the resulting coefficient by $$(1+\sqrt2)\left[\sqrt{28}+\sqrt{42/S}+\frac1{\sqrt{SL}}\right]+\frac4{\sqrt{SL}}+\frac2{S\sqrt A}<\frac52\left(\frac{16}3+\frac{14}3+1\right)+4+1=\frac{65}2<34.$$ Here $S\ge2$, $L>1/2$, $\sqrt{28}<16/3$, $\sqrt{21}<14/3$, and $1+\sqrt2<5/2$ justify each numerical bound. [given, F3, step 5.1, step 6.1, algebra]

8.1 Suppose $S=1$. Then $D=1$ by [F3], every Bellman vector $h_k$ has a single coordinate, and both transition rows are the point mass at the only state. Hence $(Ph_k)(S_t,A_t)-h_k(S_t)=0$ and $(q_k-P)h_k=0$ identically. The episode endpoint differences and the transition martingale increments $X_t$ in step 4.1 are also zero. Therefore re-summing the pointwise inequality in step 3.1, and retaining the reward martingale bound from step 4.1, gives on that same joint event $$\Delta_T\le[\sqrt{14L_r}+1]Q_T+\sqrt{\frac T2\log(4/\delta)}.$$ Here $2b^r_k(s,a)\le\sqrt{14L_r}/\sqrt{\max\{1,N_k(s,a)\}}$, while $\varepsilon_k=1/\sqrt{t_k}\le1/\sqrt{\max\{1,N_k(s,a)\}}$. Thus both the nonzero reward-confidence sum and the reward martingale remain present. If $A\le T$, then $L_r\le3L$ and $\log(4/\delta)\le2L$. Dividing the displayed inequality by $B=\sqrt{ATL}$ and using step 5.1 yields $$\frac{\Delta_T}{B}\le(1+\sqrt2)\left(\sqrt{\frac{14L_r}{L}}+\frac1{\sqrt L}\right)+\sqrt{\frac{\log(4/\delta)}{2AL}}\le(1+\sqrt2)\left(\sqrt{42}+\frac1{\sqrt L}\right)+1<\frac52\left(\frac{13}2+\frac32\right)+1=21<34.$$ The last strict inequality uses $L\ge\log2>1/2$, $\sqrt2<3/2$, and $\sqrt{42}<13/2$. The case $A>T$ was already covered in step 7.1. This completes the first assertion for every fixed $T\ge2$. Enlarging its logarithm gives the second assertion for those horizons. At $T=1$, $\Delta_1\le1$, whereas $34DS\sqrt{A\log(2/\delta)}>1$, proving the second assertion at the remaining boundary with probability one. [given, F1, F3, step 3.1, step 4.1, step 5.1, step 6.1, step 7.1, algebra] ∎

## Original planned statement

Assume a finite communicating MDP with $S\ge1$ states, at most $A\ge1$ actions per state, rewards in $[0,1]$, and normalized diameter $D$. For every integer horizon $T\ge1$ and confidence parameter $\delta\in(0,1)$, UCRL2 satisfies, with probability at least $1-\delta$,
$$\Delta_T\le 34DS\sqrt{AT\log(T/\delta)},$$
where $\Delta_T=T\rho^*-R_T$ is the pathwise regret and $\log$ is the natural logarithm.

## Refutation

9.1 Consider one state $s$, two actions ordered $a_1<a_2$, deterministic self-transitions, and deterministic rewards $0$ for $a_1$ and $1$ for $a_2$. This is communicating with $S=1$, $A=2$, and $D=1$ by [F3]. At $T=1$ no pair has been observed before planning; both reward estimates are $0$, both transition laws are the same point mass, and the confidence bonuses coincide. Every EVI backup therefore ties the actions, so [F1] selects $a_1$. The optimal average reward is $\rho^*=1$, while $R_1=0$, hence $\Delta_1=1$ by [F3]. [given, F1, F3, construct, step 8.1]

10.1 Set $\delta=e^{-1/100000}$. The proposed right side is $34\sqrt{2/100000}=34/\sqrt{50000}<1$, since $34^2=1156<50000$. Thus the event asserted in the Statement has probability $0$, whereas its required probability is $1-\delta>0$. This contradicts the claim for the permitted horizon $T=1$. [given, step 9.1, algebra] ∎


## Remarks

The primary paper states the coefficient $34$ for $T>1$. The original planned all-horizon formula is retained verbatim above as a refuted claim. The positive logarithm offset supplies a proved all-horizon bound with the same coefficient. The local argument uses the actual Borel reward kernel and permits dependence of one reward and its accompanying next state.
