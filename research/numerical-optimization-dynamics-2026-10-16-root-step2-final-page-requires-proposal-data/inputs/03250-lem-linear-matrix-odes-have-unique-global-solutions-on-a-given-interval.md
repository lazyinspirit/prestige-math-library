---
id: lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval
kind: lemma
title: "Linear matrix ODEs have unique global solutions on a fixed interval"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-first-order-ode-initial-value-problem-and-solution,
       thm-picard-lindelof-local-existence-and-uniqueness,
       lem-ode-extension-from-a-compact-interior-region,
       thm-extreme-value-metric,
       prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation,
       thm-norm-inequality-for-the-vector-valued-integral,
       thm-gronwall-integral-inequality]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Nigel Hitchin, Differentiable Manifolds, Appendix §10.3, Lemma 10.6"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
    - title: "Chin-Lung Wang, Banach Calculus, §4.4"
      url: "https://www.math.ntu.edu.tw/~dragon/Lecture%20Notes/Banach%20Calculus%202012.pdf"
pipeline_run: null
---

## Statement

Let $I=[a,b]\subseteq\mathbb R$ be a compact interval, let
$C:I\to M_n(\mathbb R)$ be continuous, let $t_0\in I$, and let
$Y_0\in M_n(\mathbb R)$. Then the linear matrix initial value problem

$$Y'(t)=C(t)Y(t),\qquad Y(t_0)=Y_0,$$

has a unique solution on all of $I$.

## Facts & Assumptions

**Given:** The compact interval $I=[a,b]$, the continuous matrix field $C:I\to M_n(\mathbb R)$, the time $t_0\in I$, and the initial matrix $Y_0$.

[F1] Picard-Lindelof gives a unique local solution for a continuous state-Lipschitz first-order system on an open domain ([[thm-picard-lindelof-local-existence-and-uniqueness]]).

[F2] A solution of a first-order system is equivalent to a solution of the associated Volterra integral equation ([[prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation]]).

[L1] A solution whose graph approaches a compact interior region at a finite endpoint extends past that endpoint ([[lem-ode-extension-from-a-compact-interior-region]]).

[L2] A continuous real-valued function on a nonempty compact metric space attains its maximum ([[thm-extreme-value-metric]]).

[L3] The norm of a vector-valued integral is at most the integral of the norm ([[thm-norm-inequality-for-the-vector-valued-integral]]).

[L4] Gronwall's integral inequality converts $u(t)\le A+\int_{t_0}^t m(s)u(s)\,ds$ into an exponential bound ([[thm-gronwall-integral-inequality]]).

## Proof

**Proof technique:** direct.

1.1 Extend $C$ continuously to the open interval $(a-1,b+1)$ by setting $\widetilde C(t):=C(a)$ for $t<a$, $\widetilde C(t):=C(t)$ for $t\in I$, and $\widetilde C(t):=C(b)$ for $t>b$. Regard $M_n(\mathbb R)$ as $\mathbb R^{n^2}$. Then the right-hand side $\widetilde F(t,Y):=\widetilde C(t)Y$ is continuous on the open domain $(a-1,b+1)\times\mathbb R^{n^2}$ and is globally Lipschitz in $Y$ on every compact time interval, because $\|\widetilde C(t)(Y-Z)\|_2\le\|\widetilde C(t)\|\,\|Y-Z\|_2$. Hence [F1] gives a unique local solution through $(t_0,Y_0)$. [F1, given, construct]

2.1 Let $J=(\alpha,\beta)$ be the maximal interval of existence of that solution in $(a-1,b+1)$. Since $C$ is continuous on compact $I$, [L2] supplies a bound $\|C(t)\|\le M$ on all of $I$. For $t\in J\cap[t_0,b]$, the Volterra equation from [F2] and the norm estimate [L3] give the forward inequality below. [F2, L2, L3, L4, step 1.1]

$$\|Y(t)\|_2\le \|Y_0\|_2 + M\int_{t_0}^{t}\|Y(s)\|_2\,ds.$$

Therefore [L4] yields $\|Y(t)\|_2\le \|Y_0\|_2 e^{M(t-t_0)}$ on $J\cap[t_0,b]$.

2.2 For $t\in J\cap[a,t_0]$, the oriented Volterra equation gives $Y(t)=Y_0-\int_t^{t_0}C(s)Y(s)\,ds$, so [L3] gives the reflected inequality below. [F2, L2, L3, L4, step 1.1]

$$\|Y(t)\|_2\le \|Y_0\|_2 + M\int_t^{t_0}\|Y(s)\|_2\,ds.$$

The time-reflected part of [L4] therefore yields $\|Y(t)\|_2\le \|Y_0\|_2 e^{M(t_0-t)}$ on $J\cap[a,t_0]$.

3.1 Put $R:=\|Y_0\|_2 e^{M(b-a)}$. If $\beta\le b$, then every sequence $t_j\uparrow\beta$ in $J$ has graph points in the compact set $[a,b]\times\overline B(0,R)\subseteq(a-1,b+1)\times M_n(\mathbb R)$ by steps 2.1 and 2.2. So [L1] extends the solution past $\beta$, contradicting maximality. The same argument at the left endpoint rules out $\alpha\ge a$. Therefore $I\subseteq J$, and the restriction of the maximal solution to $I$ is defined on all of $I$. [L1, step 2.1, step 2.2]

4.1 Step 3.1 gives existence on all of $I$, and uniqueness is the local uniqueness already supplied by [F1]. [F1, step 1.1, step 3.1] ∎
