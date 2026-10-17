---
id: lem-maximal-ode-solution-extends-from-compact-tube
kind: lemma
title: "A maximal ODE solution cannot remain in a compact tube to a finite endpoint"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - cor-mean-value-theorem
  - def-first-order-ode-initial-value-problem-and-solution
  - def-maximal-ode-solution
  - lem-locally-unique-ode-solutions-agree-and-glue-on-overlaps
  - thm-compact-subset-of-a-hausdorff-space-is-closed
  - thm-extreme-value-metric
  - thm-picard-lindelof-local-existence-and-uniqueness
  - thm-reals-cauchy-complete
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Gerald Teschl, Ordinary Differential Equations and Dynamical Systems, Chapter 2"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf"
    - title: "Jiri Lebl, Basic Analysis I, Section 6.3"
      url: "https://jirilebl.github.io/ra/realanal.pdf"
---

## Statement

Let $d\ge1$ and $D\subseteq\mathbb R\times\mathbb R^d$ be open, and let $f:D\to\mathbb R^d$ be continuous and locally Lipschitz in the state variable. There is no maximal solution $x:I\to\mathbb R^d$ of $x'=f(t,x)$ whose interval has a finite right endpoint $b$ and for which some $t_0\in I$, $t_0<b$, and compact set $C\subseteq D$ satisfy $(t,x(t))\in C$ for every $t\in[t_0,b)$. The compact tube condition supplies boundedness of $f$ along the graph and a limit point inside the open domain.

## Facts & Assumptions

**Given:** The ODE, maximal solution, finite endpoint $b$, and compact tube $C$ in the Statement.

[F1] [[def-first-order-ode-initial-value-problem-and-solution]]: a solution is differentiable on its interval, remains in $D$, and satisfies $x'(t)=f(t,x(t))$.

[F2] [[def-maximal-ode-solution]]: maximality means that no solution on a strictly larger interval restricts to $x$.

[F3] [[thm-extreme-value-metric]]: a continuous real-valued function on a nonempty compact metric space is bounded.

[F4] [[cor-mean-value-theorem]]: a scalar function continuous on a closed interval and differentiable on its interior has a point where its derivative equals the interval's average rate of change; in particular, if the derivative is bounded in absolute value by $M$, the function is $M$-Lipschitz.

[F5] [[thm-reals-cauchy-complete]]: every Cauchy sequence of real numbers converges to a real number.

[F6] [[thm-compact-subset-of-a-hausdorff-space-is-closed]]: compact subsets of Euclidean space are closed.

[F7] [[thm-picard-lindelof-local-existence-and-uniqueness]]: for continuous locally state-Lipschitz $f$ on an open domain, an initial point in the domain has a local solution through it.

[F8] [[lem-locally-unique-ode-solutions-agree-and-glue-on-overlaps]]: solutions through a common endpoint agree where they overlap and their adjacent pieces glue to a solution.

## Proof

1.1 For each coordinate $f_i$, compactness of $C$ and [F3] give a finite bound $M_i$ for $|f_i|$ on $C$. Put $M:=\sum_{i=1}^d M_i$. For $s<t$ in $[t_0,b)$, [F1] gives $|x_i'(u)|=|f_i(u,x(u))|\le M_i$ for every $u\in(s,t)$; [F4] yields $|x_i(t)-x_i(s)|\le M_i(t-s)$. Summing coordinate differences shows $\|x(t)-x(s)\|_2\le M(t-s)$. [given, F1, F3, F4, construct]

2.1 Choose the explicit sequence $t_n:=b-(b-t_0)/(n+1)$. It increases to $b$, and [F1] and step 1.1 make each coordinate of $x(t_n)$ Cauchy. By [F5] each coordinate has a limit; call the resulting vector $x_b$. The same Lipschitz estimate in step 1.1 implies $x(t)\to x_b$ as $t\uparrow b$. Thus $(t_n,x(t_n))\to(b,x_b)$ in Euclidean space. Since every term lies in $C$, [F6] gives $(b,x_b)\in C\subseteq D$. [F1, F5, F6, step 1.1, construct]

3.1 By [F7] there is a local solution $z$ through $(b,x_b)$. If $b\in I$, continuity of the solution at its endpoint gives $x(b)=x_b$; if $b\notin I$, define the endpoint value $x(b):=x_b$. For each coordinate and each $t<b$ sufficiently close to $b$, the real mean value theorem [F4] applied to this continuous extension on $[t,b]$ gives a point $c\in(t,b)$ with $(x_i(b)-x_i(t))/(b-t)=f_i(c,x(c))$. Continuity of $f$ and $x(c)\to x_b$ makes this quotient tend to $f_i(b,x_b)$ as $t\uparrow b$. Hence the left derivative at $b$ equals $f(b,x_b)$, which is also the right derivative of $z$. [F1, F4, F7, step 2.1, algebra]

4.1 The endpoint extension and $z$ agree at $b$, and [F8] glues the original solution, its endpoint value, and $z$ into a solution on a strictly larger interval. This contradicts [F2], proving that no maximal solution can satisfy the stated finite-endpoint compact-tube conditions. [F2, F8, step 3.1] ∎
