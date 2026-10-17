---
id: lem-proximal-bundle-subproblem-has-unique-minimizer
kind: lemma
title: "The proximal bundle model subproblem has a unique minimizer"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - alg-proximal-bundle-serious-null-method
  - def-convex-subset-of-euclidean-space
  - def-metric-interior-closure-boundary
  - def-euclidean-inner-product
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-heine-borel-rn
  - thm-extreme-value-metric
  - def-metric-bounded-diameter
  - lem-metrics-on-rn
  - def-metric-continuity
  - lem-finite-set-has-max
  - def-max-min
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mateo Díaz and Benjamin Grimmer, Optimal Convergence Rates for the Proximal Bundle Method, §§2–3"
      url: https://arxiv.org/pdf/2105.07874
    - title: "Dominikus Noll, Olivier Prot, and Aude Rondepierre, A proximity control algorithm to minimize nonsmooth and nonconvex functions, §§2–4"
      url: https://www.math.univ-toulouse.fr/~noll/PAPERS/pjo.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Let $C\subseteq\mathbb R^n$ be nonempty, closed, and convex; let $t>0$, $v\in\mathbb R^n$, and let $m_i(y)=b_i+\langle a_i,y\rangle$ be a nonempty finite list of affine functions. Then
$$\Phi(y)=\max_i m_i(y)+\frac{\|y-v\|_2^2}{2t},\qquad y\in C,$$
has a unique global minimizer on $C$.

## Facts & Assumptions

**Given:** Closed convex feasibility ([[def-convex-subset-of-euclidean-space]], [[def-metric-interior-closure-boundary]]), the Euclidean norm and Cauchy–Schwarz ([[def-euclidean-inner-product]], [[thm-cauchy-schwarz-and-the-euclidean-norm]]), closed bounded compactness ([[thm-heine-borel-rn]]), and attainment on compact sets ([[thm-extreme-value-metric]]).

[F1] A finite maximum of affine maps obeys $|\max_i m_i(y)-\max_i m_i(z)|\le\max_i|m_i(y)-m_i(z)|$; each difference is $|\langle a_i,y-z\rangle|\le\|a_i\|_2\|y-z\|_2$ by Cauchy–Schwarz ([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

[F2] The quadratic difference obeys $|\|y-v\|_2^2-\|z-v\|_2^2|\le(\|y-v\|_2+\|z-v\|_2)\|y-z\|_2$, by expansion and Cauchy–Schwarz ([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

[F3] Continuity in a metric space is the epsilon-delta property at every point ([[def-metric-continuity]]).

[F4] $\mathbb R^0$ consists of one vector, its zero vector ([[def-euclidean-inner-product]]).

## Proof

1.1 If $n=0$, [F4] says $\mathbb R^0$ is a singleton, so the nonempty feasible set $C$ is that singleton. The finite maximum and quadratic objective have one feasible value, and its sole feasible point is the unique global minimizer. For the remainder assume $n\ge1$. [F4, given, algebra]

1.2 By [F1] and [F2], $\Phi$ has a finite local Lipschitz bound on $C$ around each point: the finitely many $\|a_i\|_2$ are bounded, and the quadratic difference in [F2] has a bounded factor on a sufficiently small ball. Hence $\Phi$ is continuous on $C$ by [F3]. Choose $y_0\in C$ and let $c=\Phi(y_0)$. The sublevel set $S=\{y\in C:\Phi(y)\le c\}$ is nonempty. If $y\in C\setminus S$, continuity supplies an ambient ball around $y$ whose intersection with $C$ lies in $C\setminus S$; if $y\notin C$, closedness of $C$ supplies a ball disjoint from $C$. Thus every point outside $S$ has a ball disjoint from $S$, so $S$ is closed in $\mathbb R^n$. [F1, F2, F3, given, choose]

2.1 The first affine cut gives $\Phi(y)\ge b_1+\langle a_1,y\rangle+\|y-v\|_2^2/(2t)=\beta+\|y-(v-ta_1)\|_2^2/(2t)$, where $\beta=b_1+\langle a_1,v\rangle-t\|a_1\|_2^2/2$. Since $c=\Phi(y_0)\ge\beta$, every $y\in S$ satisfies $\|y-(v-ta_1)\|_2^2\le2t(c-\beta)$ and thus lies in the open ball of radius $1+\sqrt{2t(c-\beta)}$ about $v-ta_1$. So $S$ is bounded ([[def-metric-bounded-diameter]]) and compact by Heine–Borel. The continuous real-valued restriction $\Phi|_S$ attains its minimum by the extreme-value theorem; points outside $S$ have value greater than $c$, while the minimum on $S$ is at most $c$, so this is a global minimizer. [given, step 1.2, algebra]

3.1 For every index $i$, affinity gives $m_i((p+q)/2)=(m_i(p)+m_i(q))/2\le(\max_jm_j(p)+\max_jm_j(q))/2$; taking the finite maximum over $i$ proves the model midpoint value is at most the average endpoint values. For distinct $p,q\in C$, the quadratic term satisfies $\|(p+q)/2-v\|_2^2=(\|p-v\|_2^2+\|q-v\|_2^2)/2-\|p-q\|_2^2/4$. After multiplication by $1/(2t)$ the quadratic term is strictly below the endpoint average. If both $p,q$ minimized $\Phi$, their midpoint would therefore have smaller value, a contradiction. The minimizer is unique. [given, step 2.1, algebra] ∎

