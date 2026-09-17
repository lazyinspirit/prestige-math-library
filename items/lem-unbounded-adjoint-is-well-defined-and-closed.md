---
id: lem-unbounded-adjoint-is-well-defined-and-closed
kind: lemma
title: "The adjoint is well defined, closed, and reverses inclusions"
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-adjoint-of-a-densely-defined-unbounded-operator, def-densely-defined-closed-and-closable-operator, def-unbounded-linear-operator-domain-and-graph, def-dense-top, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
      locator: "Remark 7.10, Lemma 7.12 and Corollary 7.21, pp.31-32"
    - title: "Theo Buehler and Dietmar A. Salamon, Functional Analysis"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
      locator: "Chapter 6, Lemma 6.27, Sec. 6.3.1"
---

## Statement

Assume Countable Choice. For a densely defined linear operator $T$ on $H$ the
adjoint $T^*$ is well defined and linear with linear domain $D(T^*)$; $T^*$ is
closed; for every $z\in\mathbb C$
$$\operatorname{ran}(T-z)^\perp=\ker(T^*-\overline z),$$
and if $S\subseteq T$ and both are densely defined, then $T^*\subseteq S^*$.

## Facts & Assumptions

[A1] $y\in D(T^*)$ holds exactly when $x\mapsto\langle Tx,y\rangle$ is bounded on $D(T)$, and then $T^*y$ is the unique $w$ with $\langle Tx,y\rangle=\langle x,w\rangle$ for all $x\in D(T)$; $T^*$ is linear and $D(T^*)$ is a linear subspace ([[def-adjoint-of-a-densely-defined-unbounded-operator]], [[def-countable-choice]]).

[A3] $T$ is closed exactly when $\Gamma(T)$ is closed, and $\Gamma(T^*)=\{(y,w):\langle Tx,y\rangle=\langle x,w\rangle\text{ for all }x\in D(T)\}$ ([[def-unbounded-linear-operator-domain-and-graph]], [[def-adjoint-of-a-densely-defined-unbounded-operator]]).

## Proof

**Proof technique:** direct.

**Given:** A densely defined linear operator $T$ on $H$.

1.1 By [A1] the adjoint is well defined, $D(T^*)$ is a linear subspace and $T^*$ is linear. [A1]

1.2 Let $y_n\in D(T^*)$ with $y_n\to y$ and $T^*y_n\to w$. For every $x\in D(T)$ we have $\langle Tx,y\rangle=\lim_n\langle Tx,y_n\rangle=\lim_n\langle x,T^*y_n\rangle=\langle x,w\rangle$, both limits being scalar limits; hence $x\mapsto\langle Tx,y\rangle$ is bounded, with $|\langle Tx,y\rangle|=|\langle x,w\rangle|\le\|x\|\,\|w\|$. So $y\in D(T^*)$ and $T^*y=w$ by [A1], and therefore $T^*$ is closed. [A1]

1.3 Let $y\in H$ and $z\in\mathbb C$. If $y\perp\operatorname{ran}(T-z)$, then $\langle (T-z)x,y\rangle=0$, that is $\langle Tx,y\rangle=z\langle x,y\rangle=\langle x,\overline zy\rangle$, for every $x\in D(T)$; this exhibits $x\mapsto\langle Tx,y\rangle$ as a bounded functional, so $y\in D(T^*)$ and $T^*y=\overline zy$ by uniqueness in [A1]. Conversely if $T^*y=\overline zy$, then $\langle(T-z)x,y\rangle=\langle x,\overline zy\rangle-z\langle x,y\rangle=0$ for every $x\in D(T)$, so $y\perp\operatorname{ran}(T-z)$. Hence $\operatorname{ran}(T-z)^\perp=\ker(T^*-\overline z)$. [A1]

1.4 If $S\subseteq T$ are densely defined, then $\langle Sx,y\rangle=\langle Tx,y\rangle=\langle x,w\rangle$ for every $x\in D(S)$, so every pair $(y,w)\in\Gamma(T^*)$ lies in $\Gamma(S^*)$ by [A3]; hence $T^*\subseteq S^*$. [A3]

2.1 Claims collected: well-definedness and linearity from step 1.1, closedness from step 1.2, the kernel-range identity from step 1.3, and the inclusion reversal from step 1.4. ∎
