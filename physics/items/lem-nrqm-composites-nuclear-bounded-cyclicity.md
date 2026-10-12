---
id: lem-nrqm-composites-nuclear-bounded-cyclicity
aliases: [nrqm-composites-nuclear-bounded-cyclicity]
kind: lemma
domain: mathematics
title: "Nuclear bounded cyclicity for trace-class operators"
status: draft
origin: pipeline
dependency_level: 1
deps: [thm-hilbert-adjoint-properties, def-trace-class-operator, lem-nrqm-composites-rank-one-operator-calculus, lem-nuclear-series-characterizes-trace-norm, thm-trace-class-is-a-two-sided-banach-operator-ideal, thm-trace-is-absolutely-convergent-and-basis-independent, def-hilbert-space-adjoint, def-bounded-linear-operator, def-operator-norm, def-hilbert-space, def-countable-choice]
dependency_roles:
  thm-hilbert-adjoint-properties: mathematical-premise
  def-trace-class-operator: mathematical-premise
  lem-nrqm-composites-rank-one-operator-calculus: mathematical-premise
  lem-nuclear-series-characterizes-trace-norm: mathematical-premise
  thm-trace-class-is-a-two-sided-banach-operator-ideal: mathematical-premise
  thm-trace-is-absolutely-convergent-and-basis-independent: mathematical-premise
  def-hilbert-space-adjoint: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Topics in Real and Functional Analysis (2017), §3.6 pp. 93-96 (trace class, nuclear series and cyclicity)"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "A. W. Knapp, Advanced Real Analysis, Chapter II §5 (trace-class operators and their ideal properties)"
      url: "https://www.math.stonybrook.edu/~aknapp/download/a2-realanal-inside.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ be a complex Hilbert space ([[def-hilbert-space]]) and for $u,v\in H$ let $T_{u,v}x=\langle x,v\rangle u$ ([[lem-nrqm-composites-rank-one-operator-calculus]]).

(a) For every bounded $B\in\mathcal B(H)$ ([[def-bounded-linear-operator]]),

$$BT_{u,v}=T_{Bu,v},\qquad T_{u,v}B=T_{u,B^*v},$$

with the Hilbert adjoint $B^*$ ([[def-hilbert-space-adjoint]]).

(b) Let $T\in\mathcal B(H)$ be trace class and let $T=\sum_jT_{u_j,v_j}$ be a nuclear representation, i.e. the partial sums converge to $T$ in operator norm and $\sum_j\|u_j\|\,\|v_j\|<\infty$ ([[lem-nuclear-series-characterizes-trace-norm]], [[def-trace-class-operator]]). Then for every bounded $B$

$$\operatorname{tr}(BT)=\sum_j\langle Bu_j,v_j\rangle,\qquad \operatorname{tr}(TB)=\sum_j\langle u_j,B^*v_j\rangle,$$

both series converging absolutely with $\bigl|\operatorname{tr}(BT)\bigr|\le\|B\|\sum_j\|u_j\|\,\|v_j\|$, and $\operatorname{tr}(BT)=\operatorname{tr}(TB)$ ([[thm-trace-is-absolutely-convergent-and-basis-independent]]). In particular $\operatorname{tr}(BT)=\operatorname{tr}(TB)$ for every trace-class $T$ and bounded $B$, and $\operatorname{tr}(T_{u,v})=\langle u,v\rangle$. No cyclic permutation of unbounded operators is asserted.

## Facts & Assumptions

**Given:** A complex Hilbert space $H$; vectors $u,v,u_j,v_j\in H$; bounded operators $B$; a trace-class $T$ with nuclear representation $T=\sum_jT_{u_j,v_j}$.

[F1] $T_{u,v}\in\mathcal B(H)$ is trace class, $\|T_{u,v}\|_1=\|u\|\,\|v\|$, $\operatorname{tr}(T_{u,v})=\langle u,v\rangle$, and $T_{u,v}^*=T_{v,u}$ ([[lem-nrqm-composites-rank-one-operator-calculus]]).

[F2] $T$ is trace class exactly when it has a nuclear representation $T=\sum_jT_{u_j,v_j}$ with $\sum_j\|u_j\|\,\|v_j\|<\infty$ converging in operator norm; and then $\|T\|_1=\inf\sum_j\|u_j\|\,\|v_j\|$ over all such representations ([[lem-nuclear-series-characterizes-trace-norm]]).

[F3] The trace-class operators form a two-sided Banach operator ideal: $BT\in\mathcal S_1(H)$ for bounded $B$ and trace-class $T$, with $\|BT\|_1\le\|B\|\,\|T\|_1$ for the operator norm ([[thm-trace-class-is-a-two-sided-banach-operator-ideal]], [[def-operator-norm]]).

[F4] The trace is linear on trace-class operators and $|\operatorname{tr}S|\le\|S\|_1$ ([[thm-trace-is-absolutely-convergent-and-basis-independent]]).

[F5] Bounded adjoints obey $\|B^*\|=\|B\|$ ([[thm-hilbert-adjoint-properties]]). The Hilbert adjoint satisfies $\langle Bx,y\rangle=\langle x,B^*y\rangle$ and $T_{u,v}^*=T_{v,u}$ ([[def-hilbert-space-adjoint]], [[lem-nrqm-composites-rank-one-operator-calculus]]).

## Proof

1.1 [Rank-one multiplication] For $x\in H$, $(BT_{u,v})x=B(\langle x,v\rangle u)=\langle x,v\rangle Bu=T_{Bu,v}x$, so $BT_{u,v}=T_{Bu,v}$; and $(T_{u,v}B)x=\langle Bx,v\rangle u=\langle x,B^*v\rangle u=T_{u,B^*v}x$ by [F5], so $T_{u,v}B=T_{u,B^*v}$. Both are bounded because $B$ is and the displayed maps have the stated form. [given, F5, algebra]

2.1 [Bornological convergence of the multiplier series] Write $T_n:=\sum_{j\le n}T_{u_j,v_j}$, so $\|T-T_n\|\to0$. Then $BT_n=\sum_{j\le n}T_{Bu_j,v_j}$ by step 1.1, and $\sum_j\|T_{Bu_j,v_j}\|_1=\sum_j\|Bu_j\|\,\|v_j\|\le\|B\|\sum_j\|u_j\|\,\|v_j\|<\infty$ by [F1]; since the trace-class operators are complete in trace norm [F3], the series $\sum_jT_{Bu_j,v_j}$ converges in trace norm, and its limit agrees with $BT$ because trace-norm convergence implies operator-norm convergence and $BT_n\to BT$ in operator norm. Hence $BT=\sum_jT_{Bu_j,v_j}$ in trace norm, with $\|BT\|_1\le\|B\|\sum_j\|u_j\|\,\|v_j\|$. [step 1.1, F1, F2, F3, algebra]

3.1 [Trace of the left product] By [F4], $\operatorname{tr}(BT)=\lim_n\operatorname{tr}(BT_n)=\lim_n\sum_{j\le n}\operatorname{tr}(T_{Bu_j,v_j})=\lim_n\sum_{j\le n}\langle Bu_j,v_j\rangle$, because the trace is linear on the finite sums $BT_n$ and continuous for the trace norm, and $BT_n\to BT$ in trace norm by step 2.1. Thus $\operatorname{tr}(BT)=\sum_j\langle Bu_j,v_j\rangle$, and the series converges absolutely since $|\langle Bu_j,v_j\rangle|=\bigl|\operatorname{tr}(T_{Bu_j,v_j})\bigr|\le\|Bu_j\|\,\|v_j\|$ by [F1]; the bound $\bigl|\operatorname{tr}(BT)\bigr|\le\|B\|\sum_j\|u_j\|\,\|v_j\|$ follows from [F4] and step 2.1. [step 2.1, F1, F4, algebra]

4.1 [Right multiplication and cyclicity] By step 1.1, $T_nB=\sum_{j\le n}T_{u_j,B^*v_j}$, and $\sum_j\|u_j\|\|B^*v_j\|\le\|B\|\sum_j\|u_j\|\|v_j\|<\infty$ by [F5]. Exactly as in step 2.1, trace-norm completeness gives convergence of this series to $TB$, since its operator-norm limit is $TB$. Trace continuity and the rank-one trace formula therefore give $\operatorname{tr}(TB)=\sum_j\langle u_j,B^*v_j\rangle$ with absolute convergence. Each summand equals $\langle Bu_j,v_j\rangle$ by the adjoint identity, so step 3.1 gives $\operatorname{tr}(TB)=\operatorname{tr}(BT)$ for the original arbitrary nuclear representation. Every trace-class operator has such a representation by [F2]; the stated rank-one trace identity is [F1]. Only bounded multipliers were used. [step 1.1, step 2.1, step 3.1, F1, F2, F3, F4, F5, algebra] ∎
