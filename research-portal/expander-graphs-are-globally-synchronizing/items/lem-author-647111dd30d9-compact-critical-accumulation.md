---
id: lem-author-647111dd30d9-compact-critical-accumulation
kind: lemma
title: A compactly trapped gradient trajectory has a critical accumulation point
domain: mathematics
status: draft
origin: pipeline
deps:
  - lem-author-647111dd30d9-gradient-energy
  - math:thm-extreme-value-metric
  - math:cor-bolzano-weierstrass-in-rn
  - math:thm-heine-borel-rn
  - math:def-c-one-map-and-local-inverse
  - math:lem-q-and-irrationals-dense-r
  - math:thm-rationals-countable
  - math:lem-sequential-closure-inside-closure
  - math:thm-continuous-implies-integrable
  - math:thm-monotonicity-of-the-integral
dependency_roles:
  lem-author-647111dd30d9-gradient-energy: mathematical-premise
  math:thm-extreme-value-metric: mathematical-premise
  math:cor-bolzano-weierstrass-in-rn: mathematical-premise
  math:thm-heine-borel-rn: mathematical-premise
  math:def-c-one-map-and-local-inverse: mathematical-premise
  math:lem-q-and-irrationals-dense-r: mathematical-premise
  math:thm-rationals-countable: mathematical-premise
  math:lem-sequential-closure-inside-closure: mathematical-premise
  math:thm-continuous-implies-integrable: mathematical-premise
  math:thm-monotonicity-of-the-integral: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 1
---

## Statement

Let $U\subseteq\mathbb R^m$ be open, $m\ge1$, $f\in C^1(U)$ and $x:[0,\infty)\to U$ solve $x'=-\nabla f(x)$. If $x(t)$ belongs to a compact set $K\subset U$ for all $t\ge0$, there exist times $t_j\to\infty$ and a subsequence of $x(t_j)$ converging to $y\in K$ with $\nabla f(y)=0$. Moreover $f(y)\le f(x(0))$.

## Facts & Assumptions

[F1] The following exact suppliers are used under the hypotheses stated above: [[lem-author-647111dd30d9-gradient-energy]], [[math:thm-extreme-value-metric]], [[math:cor-bolzano-weierstrass-in-rn]], [[math:thm-heine-borel-rn]].

[F2] The class $C^1(U)$ uses [[math:def-c-one-map-and-local-inverse]]: $f$ is totally differentiable and the entries of its derivative are continuous. In particular $f$ and its Euclidean gradient are continuous.

[F3] Rational times are dense in the real line by [[math:lem-q-and-irrationals-dense-r]], and [[math:thm-rationals-countable]] supplies a fixed enumeration of them. Taking the least eligible enumeration index defines each time without countable choice.

[F4] Clause 2 of [[math:lem-sequential-closure-inside-closure]] says that a continuous map sends a convergent sequence to a sequence converging to the image of its limit; it applies to $f$ and $\nabla f$ on $U$ with their usual Euclidean topologies.

[F5] Continuous real functions on nondegenerate compact intervals are Riemann integrable ([[math:thm-continuous-implies-integrable]]). For such integrals, a pointwise lower bound $g\ge a$ gives $\int_u^v g\ge a(v-u)$, and a nonnegative integrand has a nonnegative integral ([[math:thm-monotonicity-of-the-integral]]).

## Proof

**Given:** The data and hypotheses in the Statement.

**Goal:** Prove the asserted conclusion.

1.1 The set $K$ is nonempty because it contains $x(0)$. On every finite interval, the equation and continuity of $\nabla f$ give the closed-interval $C^1$ trajectory convention of the energy supplier. Write $E=f(x(0))-\min_K f\ge0$. The energy identity and the minimum of $f$ on compact $K$ give $\int_0^T\|\nabla f(x(t))\|^2\,dt\le E$ for every $T>0$. Nonnegativity of the integrand also gives energy monotonicity on every subinterval. [F1, F2, F5, given]

2.1 For every integer $j\ge1$ there is a time $t>j$ with $\|\nabla f(x(t))\|<1/j$. Otherwise continuity gives $\|\nabla f(x(t))\|^2\ge1/j^2$ on every $[j,T]$. This integrand is continuous and therefore integrable, so [F5] gives $\int_j^T\|\nabla f(x(t))\|^2\,dt\ge(T-j)/j^2$. The energy identity on $[j,T]$ and step 1.1 bound this integral by $f(x(j))-\min_K f\le E$, contradicted by $T>j+j^2E$. Continuity makes the set of eligible times greater than $j$ open and nonempty. Density of the rationals supplies an eligible rational time; select $t_j$ as the first one in a fixed rational enumeration. This defines all $t_j$ without countable choice, with $t_j>j$ and thus $t_j\to\infty$. [F1, F2, F3, F5, step 1.1, algebra]

3.1 The sequence in bounded $K$ has a convergent subsequence by Bolzano–Weierstrass, and its limit $y$ belongs to closed $K$. Sequential continuity of the continuous gradient gives $\nabla f(y)=0$, since the subsequence indices tend to infinity and the gradient norms are less than their reciprocal indices. Energy monotonicity and sequential continuity of $f$ give $f(y)\le f(x(0))$, proving the assertion. [F1, F2, F4, step 1.1, step 2.1] ∎
