---
id: thm-vector-stochastic-order-calculus
kind: theorem
title: "Finite-dimensional stochastic-order calculus and tightness"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps: [def-convergence-in-distribution-of-random-elements, def-euclidean-spheres-and-closed-balls, def-metric-ball, def-metric-topology, def-op-and-little-op-stochastic-bounds, thm-continuity-from-above-for-measures, thm-metric-open-set-algebra, thm-portmanteau-theorem]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Peter Bartlett, Theoretical Statistics, Stat 210B Lecture 16, PDF pp. 9–11"
      url: "https://www.stat.berkeley.edu/~bartlett/courses/2013spring-stat210b/notes/16notes.pdf"
    - title: "John Duchi, Theory of Statistics, Stats 300B Lecture 2, Winter 2018, PDF pp. 1–3"
      url: "https://web.stanford.edu/class/stats300b/ScribeNotes/2021/lecture-02.pdf"
---

## Statement

Let all random vectors with index $n$ be defined on a common probability space for that $n$; the spaces may vary with $n$. In any fixed finite-dimensional Euclidean space, the following rules hold:

1. If $U_n=o_P(1)$ and $V_n=o_P(1)$, then $U_n+V_n=o_P(1)$. If $U_n=O_P(1)$ and $V_n=O_P(1)$, then $U_n+V_n=O_P(1)$.
2. For positive integers $p,q,r$, let $B:\mathbb R^p\times\mathbb R^q\to\mathbb R^r$ be a fixed map for which there is a constant $C\ge0$ with $\|B(u,v)\|_2\le C\|u\|_2\|v\|_2$ for all $u,v$. Assume in each application that $B(U_n,V_n)$ is a random vector on the same probability space as $U_n,V_n$, for every $n$. If $U_n=o_P(1)$ and $V_n=O_P(1)$, or conversely, then $B(U_n,V_n)=o_P(1)$. If both are $O_P(1)$, then $B(U_n,V_n)=O_P(1)$.
3. If $X_n\Rightarrow X$ in $\mathbb R^d$, then $X_n=O_P(1)$.

The last conclusion is finite-dimensional boundedness in probability. No independence or Axiom of Choice is assumed.

## Facts & Assumptions

**Given:** Random vectors on probability spaces as in the statement; in part 3, $X_n\Rightarrow X$.

[F1] [[def-op-and-little-op-stochastic-bounds]]: $X_n=o_P(1)$ means $P_n(\|X_n\|_2>\varepsilon)\to0$ for every $\varepsilon>0$; $X_n=O_P(1)$ means that for every $\eta>0$ there is $M>0$ with $\limsup_nP_n(\|X_n\|_2>M)\le\eta$.

[F2] [[def-convergence-in-distribution-of-random-elements]]: Random elements $X_n,X$ with values in the same metric space converge in distribution if their laws converge weakly. They may be defined on different probability spaces.

[F3] [[thm-portmanteau-theorem]]: For Borel probabilities $\mu_n,\mu$ on a metric space $S$, the closed-set bound is $\limsup_n\mu_n(F)\le\mu(F)$ for every closed $F$.

[F4] [[thm-continuity-from-above-for-measures]]: For a decreasing sequence of measurable sets, if one set has finite measure then the measure of the intersection is the infimum of the measures.

[F5] [[def-euclidean-spheres-and-closed-balls]]: On $\mathbb R^d$, $d_2(x,y)=\|x-y\|_2$ is the Euclidean metric, and every vector has finite Euclidean norm.

[F6] [[def-metric-ball]]: The open ball is $B(c,r)=\{x:d(c,x)<r\}$ for radius $r>0$.

[F7] [[thm-metric-open-set-algebra]]: Every open metric ball is open.

[F8] [[def-metric-topology]]: A set is closed when its complement is open.

## Proof

**Given:** The random vectors and hypotheses in the statement.

1.1 Suppose $X_n\Rightarrow X$ in $\mathbb R^d$. For positive integers $m$, set $F_m=\mathbb R^d\setminus B(0,m)=\{x:\|x\|_2\ge m\}$, where [F5] identifies the Euclidean distance with the norm and [F6] gives the metric-ball definition. By [F7] each ball is open, so [F8] makes $F_m$ closed. The sets decrease to the empty set because every vector has finite norm, and their probabilities are at most one. By [F4], $P_X(F_m)\to0$. For each $m$, [F2] and [F3] give $\limsup_nP_n(\|X_n\|_2\ge m)\le P_X(F_m)$. Choosing $m$ with right side below any prescribed $\eta>0$ proves $X_n=O_P(1)$ by [F1]. [F1, F2, F3, F4, F5, F6, F7, F8, given, choose]

1.2 If $U_n=o_P(1)$ and $V_n=o_P(1)$ in one Euclidean space, the triangle inequality gives $\{\|U_n+V_n\|_2>\varepsilon\}\subseteq\{\|U_n\|_2>\varepsilon/2\}\cup\{\|V_n\|_2>\varepsilon/2\}$. The union bound and [F1] show that the left event has probability tending to zero. [F1, given, algebra]

1.3 If $U_n=O_P(1)$ and $V_n=O_P(1)$, choose $M_U,M_V>0$ using [F1]. The event $\{\|U_n+V_n\|_2>M_U+M_V\}$ is contained in $\{\|U_n\|_2>M_U\}\cup\{\|V_n\|_2>M_V\}$, so its limiting upper probability is at most the sum of the two chosen tail bounds. Since the bounds can be arbitrarily small, $U_n+V_n=O_P(1)$. [F1, given, choose, algebra]

1.4 If $C=0$, then $B(U_n,V_n)=0$ for all $n$. Suppose $C>0$, $U_n=o_P(1)$, and $V_n=O_P(1)$. For any $\eta>0$, choose $M>0$ with $\limsup_nP_n(\|V_n\|_2>M)\le\eta$. The norm bound for $B$ gives $\{\|B(U_n,V_n)\|_2>\varepsilon\}\subseteq\{\|V_n\|_2>M\}\cup\{\|U_n\|_2>\varepsilon/(CM)\}$. By [F1], the second event has probability tending to zero, so the limiting upper probability of the left event is at most $\eta$; arbitrariness of $\eta$ proves $B(U_n,V_n)=o_P(1)$. The same argument applies when the small factor is in the second coordinate. [F1, given, algebra]

2.1 If both inputs to $B$ are $O_P(1)$, choose $M_U,M_V>0$ so that the limiting upper probability of either input exceeding its bound is at most an arbitrary $\eta>0$. Outside the union of these two tail events, $\|B(U_n,V_n)\|_2\le C M_U M_V$. The union bound makes the limiting upper probability above this fixed bound at most $2\eta$. Letting $\eta$ decrease to zero proves $B(U_n,V_n)=O_P(1)$. [F1, given, choose, algebra] ∎
## Remarks

The composite random-vector hypothesis in part 2 is necessary. A norm bound
on an arbitrary map does not establish measurability of its composites.
For an explicit counterexample to the original claim without that premise,
suppose a non-Borel set $A\subset(0,1)$ is supplied, and let $Z(\omega)=\omega$
on the supplied uniform probability space $(0,1)$ with its Borel
sigma-algebra. Set $B(u,v)=|u||v|\mathbf1_A(v)$ on $\mathbb R^2$,
where $\mathbf1_A$ is zero outside $A$. This map satisfies
$|B(u,v)|\le|u||v|$ for every pair. Taking $U_n\equiv1$ and $V_n=Z$
gives bounded-in-probability inputs, but
$\{B(U_n,V_n)>0\}=A$ is not a measurable event, so the output is not a
random variable and has no $O_P(1)$ classification under the definition.
Taking instead $U_n\equiv1/n$ gives an $o_P(1)$ input and the same
nonmeasurable positive-set inverse image, despite the pointwise bound by
$1/n$. This argument assumes the stated non-Borel set and uniform Borel
probability space; it does not supply an existence proof for that set.
Requiring only the actually used composites to be random vectors retains
arbitrary norm-bounded maps, without imposing Borel measurability,
bilinearity, or continuity on $B$ itself.
