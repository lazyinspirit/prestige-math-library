---
id: "cex-obstacle-admissible-set-can-be-empty-when-trace-and-obstacle-are-incompatible"
kind: "counterexample"
title: "The obstacle admissible set can be empty when trace and obstacle are incompatible"
status: draft
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 8
deps:
  - "cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives"
  - "def-axiom-of-choice"
  - "def-closed-convex-obstacle-set-and-variational-inequality"
  - "lem-one-dimensional-trace-truncation-compatibility"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
sources:
  references:
    - title: "John Andersson, The Obstacle Problem, KTH lecture notes, 16 December 2015 (complete 52-page notes)"
      url: "https://www.kth.se/social/files/5671638ef276544fe6bf8bb4/Lectures_Obstacle_Problem.pdf"
      locator: "Chapter 3 Section 3.1, printed pp. 26-28 (nonemptiness of the admissible set is an explicit hypothesis, not a consequence of the definitions)"
---

## Statement refuted

**Refuted:** that after omitting the trace-compatibility hypothesis $T\psi\le0$ from [[def-closed-convex-obstacle-set-and-variational-inequality]], the set $K_\psi=\{v\in H^1_0(\Omega;\mathbb R):v\ge\psi\text{ a.e.}\}$ is automatically nonempty for every real $\psi\in H^1(\Omega)$. The definition itself retains that hypothesis and has the admissible element $\psi^+$; the assertion refuted here concerns arbitrary obstacle data without boundary compatibility.

Assume the Axiom of Choice ([[def-axiom-of-choice]]), inherited from the trace suppliers. The witness is the interval $I=(-1,1)$ with the incompatible obstacle datum $\psi\equiv1$ ([[lem-one-dimensional-trace-truncation-compatibility]]). If $v\in K$, the unique absolutely continuous representative $v^*$ satisfies $v^*\ge1$ at every point of $[-1,1]$: a strict violation at one point would, by continuity, persist on an interval of positive measure, contradicting $v\ge1$ almost everywhere. But $v\in H^1_0(I)$ has zero endpoint trace, $Tv=(0,0)$, so $v^*(-1)=v^*(1)=0$, a contradiction. Hence $K=\varnothing$, and boundary compatibility ($T\psi\le0$ in the sense of the definition) is necessary for nonemptiness. [The obstacle $\psi\equiv1$ satisfies $T\psi=(1,1)\not\le(0,0)$.]

## Facts & Assumptions

**Given:** The interval $I=(-1,1)$, the incompatible obstacle datum $\psi\equiv1$, and the admissible set $K=\{v\in H^1_0(I):v\ge1\text{ a.e.}\}$.

[F1] [[lem-one-dimensional-trace-truncation-compatibility]]: for $I=(-1,1)$ and $p=2$, $T$ is well defined and linear with $\ker T=H^1_0(I)$; a class $v\in H^1_0(I)$ therefore has endpoint trace $Tv=(0,0)$.

[F2] [[cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives]]: every $v\in H^1(I)$ has a unique continuous absolutely continuous representative $v^*$ on $[-1,1]$, and the endpoint trace is $Tv=(v^*(-1),v^*(1))$.

[F3] [[def-closed-convex-obstacle-set-and-variational-inequality]]: the definition requires $T\psi\le0$ before defining its admissible set. Here the same set formula is used for arbitrary real $H^1$ data, without imposing that compatibility condition; $\psi\equiv1$ is outside the definition's permitted obstacles.

## Counterexample

**Proof technique:** direct.

**Given:** The interval $I=(-1,1)$, the incompatible obstacle datum $\psi\equiv1$ and the set $K$ above; suppose, towards the case analysis, that $v\in K$.

1.1 Since $v\ge1$ almost everywhere and $v^*$ is continuous with $v^*=v$ almost everywhere [F2], the representative $v^*$ satisfies $v^*(x)\ge1$ for every $x\in[-1,1]$: if $v^*(x_0)<1$ at some point, then by continuity $v^*<1$ on the intersection of $I$ with a sufficiently small interval about $x_0$, which has positive measure even when $x_0$ is an endpoint, contradicting $v\ge1$ a.e. [given, F2]

2.1 On the other hand $v\in H^1_0(I)=\ker T$ by the definition of $K$ and [F1, F3], and the endpoint trace of the class is read from its absolutely continuous representative, so $Tv=(v^*(-1),v^*(1))=(0,0)$ [F2]. This contradicts step 1.1, which gives $v^*(-1)\ge1$ and $v^*(1)\ge1$. [step 1.1, F1, F2]

3.1 More generally, if $\psi\in H^1(I)$ and $v\in H^1_0(I)$ obeys $v\ge\psi$ a.e., then $(\psi-v)^+=0$ as a class, so [F1] gives $(T\psi-Tv)^+=T((\psi-v)^+)=0$. Since $Tv=0$, necessarily $T\psi\le(0,0)$. No $v$ satisfies both requirements of membership in $K$, so $K=\varnothing$. Since $T\psi=(1,1)\not\le(0,0)$, this is exactly the failure of the boundary compatibility hypothesis of [F3]; hence that hypothesis (equivalently $\psi^+\in H^1_0(I)$) is necessary for the admissible set to be nonempty. [step 2.1, given, F1, F3] ∎

