---
id: lem-rpm-shell-force-ivp
kind: lemma
title: "Orthogonal shell force local IVP and compact continuation"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 2
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps:
  - lem-rpm-shell-tangent-force-ivp
  - def-vector-valued-derivative-and-integral
  - thm-componentwise-limits-and-continuity
  - thm-continuous-implies-integrable
  - cor-vector-valued-ftc-and-lipschitz-bound
  - thm-norm-inequality-for-the-vector-valued-integral
dependency_roles:
  lem-rpm-shell-tangent-force-ivp: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  thm-componentwise-limits-and-continuity: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  cor-vector-valued-ftc-and-lipschitz-bound: mathematical-premise
  thm-norm-inequality-for-the-vector-valued-integral: mathematical-premise
sources:
  references:
    - title: "Gautam Iyer, Brief Notes on Introduction to Differential Equations, complete ODE notes"
      url: "https://www.math.cmu.edu/~gautam/c/2026-632/notes/existence.html"
      locator: "Theorem 1 and Proposition 17: local existence/uniqueness and the maximal continuation alternative. This item proves compact-uniform continuation from the shell supplier's common local existence intervals and a finite-cover argument."
---

## Statement

Let $\mathcal D\subseteq\mathbb R^8$ be an open coordinate-state domain with state $z=(x,U)\in\mathbb R^4\times\mathbb R^4$, and let $G:\mathcal D\to\mathbb R^8$ be the smooth autonomous coordinate vector field of the shell-tangent force system in [[lem-rpm-shell-tangent-force-ivp]]. Write

$$\mathcal S:=\{(x,U)\in\mathcal D:U\text{ is future timelike at }x,\ g_x(U,U)=-c^2\}$$

for its future unit timelike shell. Fix initial data $(s_0,z_0)\in\mathbb R\times\mathcal S$, and let $z:(a,b)\to\mathcal D$ be the unique maximal solution of $\dot z=G(z)$ with $z(s_0)=z_0$; thus $a<s_0<b$. If $b<\infty$ and there are $b_0\in(a,b)$ and a compact set $K\subset\mathcal D$ such that $z([b_0,b))\subseteq K$, then the solution extends beyond $b$, contradicting maximality. If $a>-\infty$ and there are $b_0\in(a,b)$ and a compact set $K\subset\mathcal D$ such that $z((a,b_0])\subseteq K$, then the solution extends before $a$, contradicting maximality. More strongly, for every compact $K\subset\mathcal D$, a finite right endpoint $b$ has a time $b_K<b$ such that $z(t)\notin K$ for all $t\in(b_K,b)$; at a finite left endpoint there is an analogous $a_K>a$ with $z(t)\notin K$ for all $t\in(a,a_K)$. Thus a finite maximal endpoint is approached only after the state eventually leaves every compact subset of its open coordinate-state domain.

This is a mathematical continuation criterion for the coordinate ODE. It asserts neither that a solution exists for all proper times nor that the background spacetime is geodesically complete.

## Facts & Assumptions

**Given:** The smooth autonomous coordinate-state domain and vector field in the Statement, fixed initial data and their unique maximal shell-force solution, and the compact-set hypotheses under discussion.

[L1] Each normalized future-timelike initial datum for a smooth force field orthogonal to velocity on an open chart-state domain has a unique local solution and a unique maximal solution on an open interval, and its norm and future direction are preserved. Near each normalized initial datum, solutions from nearby normalized initial data exist on one common compact interval about the initial parameter and depend smoothly on those data ([[lem-rpm-shell-tangent-force-ivp]]). The current in-run carrier is a draft and is used conditionally at this inspected scope.

[L2] For a differentiable vector curve with integrable derivative, its increment is the integral of its derivative ([[cor-vector-valued-ftc-and-lipschitz-bound]]).

[L3] The norm of a vector-valued integral is at most the integral of its norm on a forward interval ([[thm-norm-inequality-for-the-vector-valued-integral]]).

[L4] The coordinate solution is $C^1$ and satisfies $z'=G\circ z$; hence $G\circ z$ is continuous and componentwise Riemann integrable on each compact parameter interval ([[thm-componentwise-limits-and-continuity]], [[thm-continuous-implies-integrable]], [[def-vector-valued-derivative-and-integral]]).

## Proof

**Proof technique:** use compactness to make the local existence interval uniform over each compact state set.

1.1 If $K_{\mathcal S}:=K\cap\mathcal S$ is empty, no shell-force trajectory takes a value in $K$; both implications in the Statement are then immediate. Otherwise $K_{\mathcal S}$ is compact, since $\mathcal S$ is closed relative to $\mathcal D$: the metric norm equation passes to limits, and a unit timelike limit has nonpositive pairing with the time-orientation field as a limit of future vectors; that pairing cannot vanish for a timelike vector, so the limit remains future-directed. For each $w\in K_{\mathcal S}$, [L1] supplies a relative neighborhood $V_w$ in $\mathcal S$ and $\delta_w>0$ such that solutions through all normalized shell states in $V_w$ exist on a common interval $[-\delta_w,\delta_w]$ about the initial parameter. These neighborhoods cover $K_{\mathcal S}$. Compactness gives a finite subcover $V_{w_1},\ldots,V_{w_N}$; put $\delta:=\min_{1\le j\le N}\delta_{w_j}>0$. Since the coordinate system is autonomous, every initial state in $K_{\mathcal S}$ has a solution on $[s_0-\delta,s_0+\delta]$ about any initial parameter $s_0$. Also, continuity of $G$ gives for each $w\in K$ a neighborhood $O_w$ on which $\|G(\zeta)\|_2<\|G(w)\|_2+1$. A finite subcover of the compact set $K$ therefore gives a finite bound $M$ for $\|G\|_2$ on $K$. [given, L1, construct]

2.1 If $z([b_0,b))\subseteq K$, then for $b_0\le s<t<b$, [L4], [L2] and [L3] give $\|z(t)-z(s)\|_2=\left\|\int_s^tG(z(r))\,dr\right\|_2\le\int_s^t\|G(z(r))\|_2\,dr\le M(t-s)$. For the explicit sequence $t_n:=b-(b-b_0)/(n+1)\uparrow b$, the sequence $z(t_n)$ is Cauchy. The closures in $K$ of its nonempty tails are nested nonempty closed sets, so compactness gives a point $z_b$ in their intersection. The Cauchy property then gives $z(t_n)\to z_b\in K$: for each $\epsilon>0$, choose $N_0$ so the tail has diameter less than $\epsilon/2$, then choose $n\ge N_0$ with $\|z(t_n)-z_b\|_2<\epsilon/2$ from the closure property, after which all $k\ge N_0$ satisfy $\|z(t_k)-z_b\|_2<\epsilon$. The estimate above, with $t_n>t$ and $n\to\infty$, shows $\|z(t)-z_b\|_2\le M(b-t)$, so the full trajectory tends to $z_b$ as $t\uparrow b$. Continuity of the metric and the time-orientation field gives $z_b\in\mathcal S$. [given, step 1.1, L2, L3, L4]

2.2 Fix a compact $K\subseteq\mathcal D$. If $K_{\mathcal S}:=K\cap\mathcal S$ is empty the solution never enters $K$. Otherwise let $\delta>0$ be the common local existence radius from step 1.1 for $K_{\mathcal S}$. If a finite right-endpoint solution did not eventually leave $K$, there would be a time $t_0\in(\max\{a,b-\delta/2\},b)$ with $z(t_0)\in K$. The local solution through $z(t_0)$ reaches beyond $b$ and agrees with $z$ by uniqueness, contradicting maximality. At a finite left endpoint, non-exit would similarly give $t_0\in(a,\min\{b,a+\delta/2\})$ with $z(t_0)\in K$, and the local solution would extend before $a$. Thus the solution eventually leaves every compact subset at either finite endpoint. [step 1.1, L1]

2.3 If $a>-\infty$ and $z((a,b_0])\subseteq K$, use the explicit sequence $s_n:=a+(b_0-a)/(n+1)\downarrow a$. For $a<s<t\le b_0$, [L4], [L2] and [L3] give $\|z(t)-z(s)\|_2=\left\|\int_s^tG(z(r))\,dr\right\|_2\le\int_s^t\|G(z(r))\|_2\,dr\le M(t-s)$, so $z(s_n)$ is Cauchy. The closures in $K$ of its nonempty tails are nested nonempty closed sets, so compactness gives a point $z_a$ in their intersection; the Cauchy property then gives $z(s_n)\to z_a\in K$. Continuity of the metric and time orientation gives $z_a\in\mathcal S$. For each fixed $t\in(a,b_0]$, eventually $s_n<t$, and the same estimate gives $\|z(t)-z_a\|_2\le M(t-a)$; hence $z(t)\to z_a$ as $t\downarrow a$. A local solution through $z_a$ at parameter $a$ has derivative $G(z_a)$, matching the right derivative of the continuous extension of $z$; gluing it just before $a$ gives a solution extending the maximal one, by uniqueness in [L1]. [given, step 1.1, L1, L2, L3, L4]

3.1 By [L1], the same smooth shell-force system has a local solution $\widetilde z$ through $z_b$ at parameter $b$. The extension of $z$ by $z(b):=z_b$ is continuous. Since $G(z(t))\to G(z_b)$ as $t\uparrow b$, the integral identity in step 2.1 shows that the left derivative at $b$ is $G(z_b)$, equal to $\widetilde z'(b)$. The extended curve therefore glues to $\widetilde z$ just after $b$ as a solution; uniqueness in [L1] makes it agree with the original on the overlap, contradicting maximality. Hence the right-endpoint solution extends past $b$. [step 2.1, L1, L2]

4.1 Steps 2.1 and 3.1 prove right-endpoint continuation, step 2.3 proves the left-endpoint analogue, and step 2.2 establishes eventual exit from every compact set. [step 2.1, step 2.2, step 2.3, step 3.1] ∎

## Remarks

The conclusion is local to the chosen chart-state domain. A finite endpoint can still arise by leaving that open domain or every compact subset of it; no global-lifetime claim follows.
