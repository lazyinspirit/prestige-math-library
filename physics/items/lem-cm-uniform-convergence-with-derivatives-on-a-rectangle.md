---
id: lem-cm-uniform-convergence-with-derivatives-on-a-rectangle
kind: lemma
title: "Uniform convergence of a $C^2$ sequence with its first and second derivatives on a rectangle passes $C^2$ regularity and termwise differentiation to the limit"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [thm-uniform-derivative-limit-on-a-closed-interval, thm-uniform-limit-continuous-real-functions, def-continuity-real, def-derivative, def-directional-and-partial-derivatives, thm-continuous-partial-derivatives-imply-total-differentiability, def-ck-euclidean-maps-and-diffeomorphisms, def-interval, thm-total-derivative-computes-directional-and-partial-derivatives, thm-algebra-of-derivatives]
dependency_roles:
  thm-uniform-derivative-limit-on-a-closed-interval: mathematical-premise
  thm-uniform-limit-continuous-real-functions: mathematical-premise
  def-continuity-real: mathematical-premise
  def-derivative: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  thm-continuous-partial-derivatives-imply-total-differentiability: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-interval: mathematical-premise
  thm-total-derivative-computes-directional-and-partial-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "W. Trench, Introduction to Real Analysis, Section 4.4, Theorem 4.4.11 (differentiation of a uniformly convergent sequence of functions)"
      url: "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf"
    - title: "MIT OpenCourseWare 18.100B, Real Analysis, Spring 2025 (full lecture notes), Lectures 20–21 (uniform convergence; continuity, integration and differentiation of the limit)"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"

  precheck: pass
---

## Statement

Let $T,L>0$ and $R:=[0,T]\times[0,L]$ ([[def-interval]]). For each $k\in\mathbb N$ let $u_k$ be of class $C^2$ on an open neighbourhood of $R$ ([[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-directional-and-partial-derivatives]]). Suppose that on $R$:

$$u_k\to u,\quad \partial_tu_k\to v,\quad \partial_xu_k\to w,\quad \partial_t^2u_k\to v_2,\quad \partial_t\partial_xu_k\to z,\quad \partial_x^2u_k\to w_2$$

pointwise for $u$ and uniformly for the five derivative sequences ([[def-continuity-real]]). Then $u$ is $C^2$ on the interior of $R$, all listed limits are continuous on $R$, and on the interior

$$\partial_tu=v,\quad \partial_xu=w,\quad \partial_t^2u=v_2,\quad \partial_t\partial_xu=\partial_x\partial_tu=z,\quad \partial_x^2u=w_2 ,$$

the derivatives extending continuously to $R$.

## Facts & Assumptions

**Given:** The rectangle $R$, the $C^2$ sequence $u_k$ and the stated convergences.

[F1] One-variable theorem: if $f_k:[a,b]\to\mathbb R$ are continuously differentiable, $f_k(c)\to A$ at one point and $f_k'\to g$ uniformly on $[a,b]$, then $f_k\to f$ uniformly for a differentiable $f$ with $f'=g$ ([[thm-uniform-derivative-limit-on-a-closed-interval]]).

[F2] A uniform limit of continuous functions is continuous ([[thm-uniform-limit-continuous-real-functions]], [[def-continuity-real]]).

[F3] $C^2$ on an open set means: the first and second partial derivatives exist and are continuous; if the first partial derivatives are continuous, the map is totally differentiable ([[def-ck-euclidean-maps-and-diffeomorphisms]], [[thm-continuous-partial-derivatives-imply-total-differentiability]], [[thm-total-derivative-computes-directional-and-partial-derivatives]]).

## Proof

**Proof technique:** direct; apply the one-variable uniform-differentiation theorem in each variable separately.

1.1 Fix $x\in[0,L]$ and apply [F1] to the sequence $t\mapsto u_k(t,x)$ on $[0,T]$ with $c=0$: $u_k(0,x)\to u(0,x)$ and $\partial_tu_k(\cdot,x)\to v(\cdot,x)$ uniformly on $[0,T]$ (the convergence of $\partial_tu_k$ is uniform on all of $R$, hence on the slice). We obtain: $t\mapsto u(t,x)$ is differentiable on $[0,T]$ with $\partial_tu(t,x)=v(t,x)$, and $u_k(\cdot,x)\to u(\cdot,x)$ uniformly on $[0,T]$. Applying the same statement to $\partial_tu_k(\cdot,x)$ with its $t$-derivative $\partial_t^2u_k(\cdot,x)\to v_2(\cdot,x)$, $t\mapsto v(t,x)$ is differentiable with $\partial_tv(t,x)=v_2(t,x)$. [given, F1]

1.2 Fix $t\in[0,T]$ and apply [F1] in the variable $x$ to $x\mapsto u_k(t,x)$ and to $x\mapsto \partial_xu_k(t,x)$: $x\mapsto u(t,x)$ has $\partial_xu(t,x)=w(t,x)$, and $x\mapsto w(t,x)$ has $\partial_xw(t,x)=w_2(t,x)$. Applying [F1] in $x$ to $x\mapsto v(t,x)$ (whose $x$-derivative converges uniformly to $z$) gives $\partial_xv(t,x)=z(t,x)$; applying it in $t$ to $t\mapsto w(t,x)$ gives $\partial_tw(t,x)=z(t,x)$. [given, F1]

2.1 The functions $v,w,v_2,z,w_2$ are continuous on $R$ as uniform limits of continuous functions [F2], and $u$ is continuous as the uniform limit of continuous functions (in fact the estimates of step 1.1 are uniform in $x$). Steps 1.1-1.2 identify the first and second partial derivatives of $u$ with these continuous functions; in particular $\partial_t\partial_xu=\partial_x\partial_tu=z$. By [F3], $u$ is $C^2$ on the interior of $R$ with the stated derivatives, all extending continuously to $R$. [step 1.1, step 1.2, F2, F3] ∎

## Remarks

- Only partial derivatives up to order two are needed, and all hypotheses are uniform on the compact rectangle. The lemma is used for the sine-series solution of the string, whose partial sums carry the differentiated convergences estimated uniformly.

- The conclusion does not require the mixed partial derivatives to be assumed continuous in advance beyond being limits of continuous functions; their agreement follows from the two identifications with the same limit $z$ (the one-variable theorem applied in the two variable orders).
