---
id: lem-cm-roundoff-accumulation-in-one-step-schemes
kind: lemma
title: "Additive per-step errors in a Lipschitzian one-step scheme accumulate geometrically: $\\eta((1+Lh)^n-1)/(Lh)$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [def-metric-space, def-lipschitz-holder-contraction, def-ck-euclidean-maps-and-diffeomorphisms, cor-exponential-reciprocal-and-positivity, thm-exponential-is-strictly-increasing, thm-derivative-of-exponential, thm-ftc-second-part]
dependency_roles:
  def-metric-space: mathematical-premise
  def-lipschitz-holder-contraction: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  cor-exponential-reciprocal-and-positivity: mathematical-premise
  thm-exponential-is-strictly-increasing: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  thm-ftc-second-part: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "E. Hairer, Geometric Numerical Integration (TU Munchen 2010), Lecture 3 'Backward error analysis', Section 3: accumulation of per-step perturbations with a Lipschitz constant, the summation argument for long-time energy estimates, printed pages 6-7"
      url: "https://www.unige.ch/~hairer/poly_geoint/week3.pdf"
    - title: "A. Quillen, PHY411 Lecture notes Part 7 'Integrators' (University of Rochester), Section 1.1: accumulation of per-step errors versus local truncation errors for one-step methods, printed pages 2-5"
      url: "https://astro.pas.rochester.edu/~aquillen/phy411/lecture7.pdf"
verification:
  precheck: pass
---

## Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]), let $V:X\to X$ map $X$ into itself, and let $L\ge0$ and $h>0$. Assume

$$d\bigl(V(x),V(y)\bigr)\le(1+Lh)\,d(x,y)\qquad\text{for all }x,y\in X,$$

which holds in particular when $V$ is a contraction with constant $1+Lh$ ([[def-lipschitz-holder-contraction]]). Fix $z_0\in X$, put $z_{j+1}:=V(z_j)$ for $j\in\mathbb N$, and let $x_0:=z_0$ together with points $x_{j+1}\in X$ satisfying

$$d\bigl(x_{j+1},V(x_j)\bigr)\le\eta\qquad(j\in\mathbb N)$$

for a number $\eta\ge0$ ("computational error per step"). Then for every $n\in\mathbb N$:

1. if $L>0$, $\displaystyle d(x_n,z_n)\le\eta\,\frac{(1+Lh)^n-1}{Lh}$, and if $L=0$, $d(x_n,z_n)\le n\eta$;
2. if moreover $F:X\to\mathbb R$ satisfies the Lipschitz bound $|F(x)-F(y)|\le\Lambda\,d(x,y)$ for all $x,y\in X$ and some $\Lambda<\infty$, then
 $$|F(x_n)-F(z_n)|\le\Lambda\eta\,\frac{(1+Lh)^n-1}{Lh}\quad(L>0),\qquad |F(x_n)-F(z_n)|\le\Lambda n\eta\quad(L=0);$$
3. if $nh\le T$ for some $T>0$ and $L>0$, then $(1+Lh)^n\le e^{LT}$ and therefore
 $$d(x_n,z_n)\le\eta\,\frac{e^{LT}-1}{Lh}\le \eta\,e^{LT}\frac{T}{h}.$$

## Facts & Assumptions

**Given:** The metric space $(X,d)$, the map $V$, the constants $L\ge0$, $h>0$, $\eta\ge0$, the exact iterates $z_j=V^j(z_0)$ and the computed points $x_j$ with $d(x_{j+1},V(x_j))\le\eta$.

[F1] Metric axioms and the triangle inequality in the forms $d(a,c)\le d(a,b)+d(b,c)$ ([[def-metric-space]]).

[F2] The Lipschitz hypothesis on $V$, and the Lipschitz bound on $F$ in clause 2 ([[def-lipschitz-holder-contraction]]).

[F3] Exponential estimates: $1+u\le e^u$ for $u\ge0$, and $e^u\ge1$ for $u\ge0$ with $e^u$ strictly increasing ([[thm-derivative-of-exponential]], [[thm-ftc-second-part]], [[thm-exponential-is-strictly-increasing]], [[cor-exponential-reciprocal-and-positivity]]).

## Proof

**Proof technique:** direct induction on $n$ with a finite geometric sum.

1.1 One-step recursion. By [F1] and [F2], $$d(x_{j+1},z_{j+1})\le d(x_{j+1},V(x_j))+d\bigl(V(x_j),V(z_j)\bigr)\le\eta+(1+Lh)\,d(x_j,z_j).$$ [given, F1, F2]

2.1 Induction. We show $d(x_j,z_j)\le\eta\sum_{i=0}^{j-1}(1+Lh)^i$ for all $j$. For $j=0$ this is $d(x_0,x_0)=0$. If it holds for $j$, then step 1.1 gives $d(x_{j+1},z_{j+1})\le\eta+(1+Lh)\eta\sum_{i=0}^{j-1}(1+Lh)^i=\eta\sum_{i=0}^{j}(1+Lh)^i$. [step 1.1, algebra]

3.1 Geometric evaluation. For $L>0$ the finite geometric sum is $\sum_{i=0}^{n-1}(1+Lh)^i=\frac{(1+Lh)^n-1}{Lh}$, and for $L=0$ it is $n$; this proves clause 1 in both cases. Clause 2 follows by applying the Lipschitz bound on $F$ to the pair $(x_n,z_n)$ and substituting clause 1. [step 2.1, F2, algebra]

4.1 Long-time form. If $nh\le T$ then by [F3], $(1+Lh)^n\le e^{Lhn}\le e^{LT}$, so $(1+Lh)^n-1\le e^{LT}-1$ and $d(x_n,z_n)\le\eta(e^{LT}-1)/(Lh)$. Finally $(e^{LT}-1)/(Lh)=\frac{T}{h}\cdot\frac{e^{LT}-1}{LT}\le\frac{T}{h}e^{LT}$ because $e^{LT}-1\le LT\,e^{LT}$ for $LT\ge0$; this proves clause 3. [step 3.1, F3, algebra] ∎

## Remarks

- The lemma is a general accumulation statement about a one-step scheme with an external per-step perturbation; it does not model any concrete floating-point arithmetic, and $\eta$ is a *hypothesis* on the computed points, not a derived roundoff bound. Applied to the velocity-Verlet scheme with $L$ the one-step Lipschitz constant of [[thm-cm-verlet-finite-time-error-is-quadratic]], it adds the term $\eta(e^{LT}-1)/(Lh)$ to the finite-time error bound, and no such estimate is implied by the exact-arithmetic symplecticity of [[prop-cm-drift-kick-and-verlet-preserve-the-canonical-form]].
- No choice principle is used; the induction is finite and the geometric sums are finite sums.
