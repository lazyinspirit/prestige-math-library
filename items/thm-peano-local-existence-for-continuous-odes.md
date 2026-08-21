---
id: thm-peano-local-existence-for-continuous-odes
kind: theorem
title: "Peano local existence for a continuous first-order system"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-euler-polygonal-approximations-are-uniformly-bounded-and-equicontinuous, lem-equicontinuous-bounded-rn-valued-curves-have-a-uniformly-convergent-subsequence, prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation, thm-uniform-limit-interchanges-riemann-integration, thm-heine-cantor-metric, thm-heine-borel-rn, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, lem-continuity-is-local-and-pastes, thm-extreme-value-metric]
justified_by: []
forward_refs: []
aliases: []
landmark: true
short: "Peano existence"
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Ordinary Differential Equations and Dynamical Systems, Ch. 2"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
    - title: "Jiri Lebl, Basic Analysis I, Section 6.3"
      url: "https://jirilebl.github.io/ra/realanal.pdf"
pipeline_run: null
---

## Statement

Let $n\in\mathbb N$ with $n\ge1$, let $D\subseteq\mathbb R\times\mathbb R^n$ be open, let $F:D\to\mathbb R^n$ be continuous, and let $(t_0,x_0)\in D$. Then the IVP $x'=F(t,x)$, $x(t_0)=x_0$, has a local solution. No uniqueness is asserted.

## Facts & Assumptions

**Given:** The open domain, continuous field, and initial data in the Statement.

[L1] Let $h>0$, let $F$ be continuous on $[t_0,t_0+h]\times\overline B(x_0,r)$ and bounded there by $M$, and suppose $hM\le r$. Euler polygonal approximations with positive mesh sizes tending to zero remain in that cylinder, are uniformly bounded, and are $M$-Lipschitz ([[lem-euler-polygonal-approximations-are-uniformly-bounded-and-equicontinuous]]).

[L2] If $n\ge1$, then on a nonempty compact interval a uniformly bounded equicontinuous sequence of continuous $\mathbb R^n$-valued curves has a uniformly convergent subsequence with continuous limit ([[lem-equicontinuous-bounded-rn-valued-curves-have-a-uniformly-convergent-subsequence]]).

[L3] Uniform convergence of Riemann-integrable functions permits passage of the limit under the integral ([[thm-uniform-limit-interchanges-riemann-integration]]).

[L4] A continuous map on a compact metric space is uniformly continuous ([[thm-heine-cantor-metric]]).

[L5] Let $n\ge1$, let $D\subseteq\mathbb R\times\mathbb R^n$ be open, let $F:D\to\mathbb R^n$ be continuous, and let $I$ be an order-convex interval with at least two elements. A continuous curve $x:I\to\mathbb R^n$ whose graph lies in $D$ and contains $(t_0,x_0)$ solves the IVP if and only if $x(t)=x_0+\int_{t_0}^tF(s,x(s))\,ds$ for every $t\in I$ ([[prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation]]).

[L6] A closed bounded subset of $\mathbb R^m$, for $m\ge1$, is compact ([[thm-heine-borel-rn]]).

[L7] The Euclidean norm is continuous, composites of continuous maps are continuous, and a continuous real function on a nonempty compact metric space is bounded and attains its maximum ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]], [[lem-continuity-is-local-and-pastes]], claim 1, [[thm-extreme-value-metric]]).

## Proof

**Proof technique:** constructive.

1.1 Since $D$ is open and contains $(t_0,x_0)$, choose $a,r>0$ so that $C=[t_0-a,t_0+a]\times\overline B(x_0,r)$ lies in $D$. This cylinder is closed and bounded in $\mathbb R^{n+1}$, hence compact by [L6]. By [L7], the continuous function $(t,x)\mapsto\|F(t,x)\|_2$ attains a maximum $M\ge0$ on $C$. Set $h=a$ if $M=0$, and $h=\min\{a,r/M\}$ otherwise. Then $h>0$ and $hM\le r$. [given, L6, L7, choose, construct]

2.1 Construct forward Euler polygons on $[t_0,t_0+h]$ with mesh tending to zero. Fact [L1] applies with the cylinder from step 1.1, and [L2] gives a subsequence converging uniformly to a continuous curve $x_+$. [step 1.1, L1, L2, construct]

2.2 Apply the same construction to the reflected field $\widetilde F(s,z)=-F(2t_0-s,z)$ on $[t_0,t_0+h]\times\overline B(x_0,r)$. It has the same bound $M$, so [L1] and [L2] give a uniform limit $z$; define $x_-(t)=z(2t_0-t)$ on $[t_0-h,t_0]$. [step 1.1, L1, L2, construct]

3.1 Let $\eta_m$ be the forward mesh and let $\tau_m(s)$ be the left endpoint of the mesh cell containing $s$. The Euler construction gives $$x_m(t)=x_0+\int_{t_0}^tF(\tau_m(s),x_m(\tau_m(s)))\,ds.$$ By [L1], $|s-\tau_m(s)|\le\eta_m$ and $\|x_m(s)-x_m(\tau_m(s))\|_2\le M\eta_m$. Uniform convergence to $x_+$ and uniform continuity of $F|_C$ from [L4] therefore make the displayed integrands converge uniformly to $F(s,x_+(s))$. Applying [L3] componentwise gives the Volterra equation for $x_+$. The identical reflected argument gives the oriented Volterra equation for $x_-$. [step 2.1, step 2.2, L1, L3, L4, algebra]

4.1 Both half-intervals are nondegenerate and order-convex, both limit graphs lie in $C\subseteq D$, and both limits contain $(t_0,x_0)$, so [L5] makes $x_+$ and $x_-$ solutions. Their piecewise union is continuous at $t_0$, and the two differential equations give the same one-sided derivative $F(t_0,x_0)$ there. Hence the union is differentiable at $t_0$ and is a solution on $[t_0-h,t_0+h]$. [step 3.1, L5, discharge-construct] ∎
