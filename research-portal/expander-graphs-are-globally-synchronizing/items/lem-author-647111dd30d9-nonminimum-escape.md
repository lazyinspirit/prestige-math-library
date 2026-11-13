---
id: lem-author-647111dd30d9-nonminimum-escape
kind: lemma
title: Nearby critical values force nonminimum escape
domain: mathematics
status: published
origin: pipeline
deps:
  - lem-author-647111dd30d9-compact-critical-accumulation
  - def-expander-prereq-stability-and-attraction
  - math:def-jacobian-matrix-and-gradient
  - math:def-ck-and-multi-index-notation-in-several-variables
  - math:def-c-one-map-and-local-inverse
  - math:def-first-order-ode-initial-value-problem-and-solution
  - math:def-maximal-ode-solution
  - math:def-locally-lipschitz-in-the-state-variable
  - math:thm-continuous-partial-derivatives-imply-total-differentiability
  - math:thm-mean-value-inequality-for-total-derivatives
  - math:thm-picard-lindelof-local-existence-and-uniqueness
  - math:thm-existence-and-uniqueness-of-a-maximal-ode-solution
  - physics:thm-cm-compact-continuation-for-locally-lipschitz-odes
  - math:thm-heine-borel-rn
  - math:thm-extreme-value-metric
dependency_roles:
  lem-author-647111dd30d9-compact-critical-accumulation: mathematical-premise
  def-expander-prereq-stability-and-attraction: mathematical-premise
  math:def-jacobian-matrix-and-gradient: mathematical-premise
  math:def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
  math:def-c-one-map-and-local-inverse: mathematical-premise
  math:def-first-order-ode-initial-value-problem-and-solution: mathematical-premise
  math:def-maximal-ode-solution: mathematical-premise
  math:def-locally-lipschitz-in-the-state-variable: mathematical-premise
  math:thm-continuous-partial-derivatives-imply-total-differentiability: mathematical-premise
  math:thm-mean-value-inequality-for-total-derivatives: mathematical-premise
  math:thm-picard-lindelof-local-existence-and-uniqueness: mathematical-premise
  math:thm-existence-and-uniqueness-of-a-maximal-ode-solution: mathematical-premise
  physics:thm-cm-compact-continuation-for-locally-lipschitz-odes: mathematical-premise
  math:thm-heine-borel-rn: mathematical-premise
  math:thm-extreme-value-metric: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 2
---

## Statement

Let $m\ge1$, let $f\in C^2(U)$ on open $U\subseteq\mathbb R^m$, and let $z$ be an equilibrium for $x'=-\nabla f(x)$. Suppose there is a neighborhood $W$ of $z$ on which every critical point $y$ satisfies $f(y)=f(z)$. If $z$ is not a local minimum, it is not Lyapunov stable.

Here stability is defined for maximal forward solutions in $U$. Write $x(t;x_0)$ for the solution with $x(0;x_0)=x_0\in U$, and $[0,T_+(x_0))$ for the forward part of its maximal interval, where $0<T_+(x_0)\le\infty$. Lyapunov stability means that for every $\varepsilon>0$ there is $\delta>0$ such that $x_0\in U$ and $\|x_0-z\|_2<\delta$ imply $\|x(t;x_0)-z\|_2<\varepsilon$ for every $0\le t<T_+(x_0)$. For a complete flow this is the usual point-stability definition. In fact, the conclusion supplies a fixed $r>0$ such that every $\delta>0$ admits such an $x_0$ and a time $t<T_+(x_0)$ with $\|x(t;x_0)-z\|_2>r$.

## Facts & Assumptions

[F1] The Euclidean gradient has coordinates $g_i=\partial_i f$ for $0\le i<m$ by [[math:def-jacobian-matrix-and-gradient]]. The $C^2$ convention is [[math:def-ck-and-multi-index-notation-in-several-variables]]: $f$, its first partials and every ordered second partial are continuous on $U$. Continuously totally differentiable maps use [[math:def-c-one-map-and-local-inverse]]. Solutions and maximal intervals use [[math:def-first-order-ode-initial-value-problem-and-solution]] and [[math:def-maximal-ode-solution]].

[F2] Local minimality and the complete-flow point-stability definition are supplied by [[def-expander-prereq-stability-and-attraction]]. The maximal-forward-solution definition in the Statement uses the same distance quantifiers over each solution's available forward times; it specializes to that definition when a complete flow is given.

[F3] Continuous partial derivatives imply total differentiability with Jacobian derivative by [[math:thm-continuous-partial-derivatives-imply-total-differentiability]]. A uniform bound on the total derivative on a convex open set gives the corresponding Lipschitz bound by [[math:thm-mean-value-inequality-for-total-derivatives]]. Closed bounded Euclidean balls are compact by [[math:thm-heine-borel-rn]], and each continuous real function on a nonempty compact set is bounded by [[math:thm-extreme-value-metric]].

[F4] Local Lipschitz continuity in the state variable means a uniform state Lipschitz bound on each compact time-state cylinder, as in [[math:def-locally-lipschitz-in-the-state-variable]]. Under continuity and this condition on an open time-state domain, [[math:thm-picard-lindelof-local-existence-and-uniqueness]] gives local existence and uniqueness, and [[math:thm-existence-and-uniqueness-of-a-maximal-ode-solution]] gives a unique maximal solution on an open interval containing the initial time.

[F5] The autonomous clause 2 of [[physics:thm-cm-compact-continuation-for-locally-lipschitz-odes]] extends a solution past a finite forward endpoint when its states stay in a compact subset of $U$ near that endpoint. This supplier has domain mathematics. For a trajectory defined at all forward times and trapped in compact $K\subset U$, [[lem-author-647111dd30d9-compact-critical-accumulation]] gives $y\in K$ with $\nabla f(y)=0$ and $f(y)\le f(x(0))$.

## Proof

**Given:** The data and hypotheses in the Statement.

**Goal:** Prove instability in the stated maximal-forward-solution sense and the escape property.

1.1 Put $g=\nabla f$. By the continuous-partials criterion, both $f$ and $g$ are totally differentiable, with continuous derivative entries, so in particular they are continuous and $f\in C^1(U)$ in the sense required by compact critical accumulation. On any closed ball $Q=\overline B(a,R)\subset U$ with $R>0$, compactness and the extreme-value theorem give a common finite $M\ge0$ bounding every $|\partial_jg_i|$. For $u\in Q$ and $v\in\mathbb R^m$, the Jacobian formula gives $|(Dg(u)v)_i|\le M\sum_{j<m}|v_j|\le mM\|v\|_2$, and hence $\|Dg(u)v\|_2\le m\sqrt m M\|v\|_2$. The total-derivative mean-value inequality on $B(a,R)$ gives this Lipschitz constant there, and continuity extends the inequality to $Q$. Thus the autonomous field $F(t,u)=-g(u)$ on open $D=\mathbb R\times U$ is continuous and satisfies the uniform state Lipschitz condition on every compact time-state cylinder. [F1, F3, F4, given, algebra]

2.1 Choose $r>0$ with $K=\overline B(z,r)\subset W\cap U$; $K$ is compact. Failure of local minimality gives, for every $\delta>0$, a point $x_0\in B(z,\min\{\delta,r\})$ with $f(x_0)<f(z)$. Apply local existence and uniqueness and the maximal-solution theorem to $F$ on $D$ at $(0,x_0)$, using step 1.1. Its unique maximal solution has forward interval $[0,T_+(x_0))$. [F2, F3, F4, step 1.1, given, choose]

3.1 Suppose $x(t;x_0)\in K$ for every $0\le t<T_+(x_0)$. If $T_+(x_0)<\infty$, autonomous compact continuation applies with $K\subset U$ and extends the trajectory past this endpoint, contradicting maximality. Hence $T_+(x_0)=\infty$. Compact critical accumulation now applies to $f\in C^1(U)$ and this trajectory in $K$, giving $y\in K$ with $\nabla f(y)=0$ and $f(y)\le f(x_0)<f(z)$. Since $K\subset W$, the common-critical-value hypothesis gives $f(y)=f(z)$, a contradiction. [F5, step 1.1, step 2.1, given]

4.1 Therefore some $t\in[0,T_+(x_0))$ has $x(t;x_0)\notin K$, so $\|x(t;x_0)-z\|_2>r$. The radius $r$ is independent of $\delta$, and step 2.1 gives $\|x_0-z\|_2<\delta$ for every $\delta>0$. This is the negation of stability in the Statement, with tolerance $\varepsilon=r$, and proves both the asserted instability and the stated escape property. [F2, step 2.1, step 3.1] ∎
