---
id: lem-characteristic-period-annulus-has-a-smooth-product-coordinate
kind: lemma
title: "A C² product coordinate on a planar period annulus"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-finitely-cornered-regular-plane-curve-separates-without-choice, thm-heine-borel-rn, cor-mean-value-theorem, cor-intermediate-value-theorem-topological, lem-c1-euclidean-maximal-flow-with-c2-upgrade, lem-c2-inverses-and-scalar-return-roots]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 2
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Ordinary Differential Equations and Dynamical Systems"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf"
      locator: "Chapter 2 (local ODE existence, uniqueness and dependence) and §7.3 (planar flows); the annulus product construction is supplied locally"
---

## Statement

Let $X$ be a $C^2$ vector field on an open subset of $\mathbb R^2$, and let
$A$ be an open annulus saturated by $X$ on which $X$ is nowhere zero and every
orbit is a simple periodic curve. Assume these periodic curves are strictly
nested Jordan curves with a consistent orientation. Then there are an interval
$I=(0,1)$ and a $C^2$ diffeomorphism $\Psi:S^1\times I\to A$ taking each circle
$S^1\times\{s\}$ onto one orbit and a positive $C^2$ function
$a:I\to(0,\infty)$ such that $X=a(s)\partial_\theta$ in these coordinates. The
coordinate may be chosen to increase from the inner end to the outer end of the
annulus.

## Facts & Assumptions

**Given:** A $C^2$ vector field $X$ on an open set containing the open annulus $A$, on which $X$ is nowhere zero, every orbit is a simple periodic curve, the periodic curves are strictly nested Jordan curves, and their boundary orientations agree.

[F1] If $Y$ is $C^1$ on an open $U\subseteq\mathbb R^n$, its maximal flow is jointly $C^1$ with a $C^1$ flow box at each regular point; if $Y$ is $C^2$ the flow and those boxes are $C^2$; individual trajectories of a $C^1$ field are $C^2$ in time; and a trajectory remaining in a compact subset of $U$ has no finite maximal endpoint ([[lem-c1-euclidean-maximal-flow-with-c2-upgrade]]).

[F2] A $C^2$ map between open subsets of $\mathbb R^n$ with invertible derivative at a point has a $C^2$ local inverse; and if $g(s,t)$ is $C^2$ near $(s_0,t_0)$ with $g(s_0,t_0)=0$ and $g_t(s_0,t_0)\neq0$, then there is a unique local $C^2$ root $t=T(s)$, with $T'=-g_s/g_t$ and $T''=-(g_{ss}+2g_{st}T'+g_{tt}(T')^2)/g_t$ ([[lem-c2-inverses-and-scalar-return-roots]]).

[F3] Closed and bounded subsets of $\mathbb R^2$ are compact; a decreasing nested family of nonempty compact subsets has nonempty intersection; a continuous real function on a nonempty compact set attains its maximum and minimum ([[thm-heine-borel-rn]]).

[F6] A topological embedding $c:S^1\to\mathbb R^2$ that is piecewise $C^2$ with finitely many corners, each with two distinct one-sided tangent rays and regular edges, has a complement with exactly two connected components, one bounded and one unbounded ([[lem-finitely-cornered-regular-plane-curve-separates-without-choice]]).

## Proof

**Proof technique:** direct.

1.1 Let $J$ be the quarter-turn $J(u_1,u_2)=(-u_2,u_1)$ and set $Z=\pm JX$ with the sign chosen so that $Z$ crosses each orbit from its bounded Jordan domain to the exterior; at a fixed orbit the crossing sense of $Z$ is a continuous nowhere-zero directional datum along the compact orbit and the consistent orientation hypothesis keeps its sign fixed, while the sense depends locally constantly on the orbit and the orbit family is connected, so one global sign makes every crossing of every orbit by $Z$ outward; hence $Z$ is a nowhere-zero $C^2$ field on $A$ transverse to $X$. [given, F1, F6]

2.1 Fix $x_0\in A$ and let $\sigma:(t_-,t_+)\to A$ be the maximal $Z$-trajectory with $\sigma(0)=x_0$; then $\sigma$ crosses each orbit at most once: if $t_1<t_2$ were consecutive crossing times of one orbit $C$ and $\sigma([t_1,t_2])$ avoided $C$, that connected arc would lie in one component of $\mathbb R^2\setminus C$ by [F6], yet outward crossings at $t_1$ and $t_2$ put the points just after $t_1$ and just before $t_2$ on opposite sides of $C$, a contradiction. [step 1.1, F6]

3.1 All orbits lying strictly between two orbits crossed by $\sigma$ are crossed: if $C_1$ is inside $C_2$ and $\sigma(t_1)\in C_1$, $\sigma(t_2)\in C_2$, then $\sigma(t_1)$ lies in the bounded component of $\mathbb R^2\setminus C$ and $\sigma(t_2)$ in the unbounded one for every orbit $C$ between them, so the connected arc $\sigma([t_1,t_2])$ cannot avoid $C$ and some intermediate time lies on $C$. [step 2.1, F6]

4.1 The crossed orbits exhaust $A$. First each orbit $C$ has a local period tube: a short local $Z$-trajectory through a point of $C$, which meets each orbit at most once by the argument of step 2.1, and the $C^2$ flow give a first-return map near its least period by [F2]; compactness of one traversal excludes returns away from the endpoints. The returned point lies on the same periodic orbit and on that local section, which meets every orbit at most once. Thus the return point is the initial point. Thus the nearby return time gives a $C^2$ circle product, with a transverse leaf coordinate $r$. On a smaller closed tube the outward transverse field satisfies $Zr\ge c>0$ by compactness. By step 3.1 the crossed family is order-convex; if it stopped at an orbit $C$ inside $A$, the section would eventually lie in such a tube on the inner side of $C$. It cannot leave through that side because $Zr>0$, and the bound $Zr\ge c$ forces it to reach $C$ in finite time. Compact flow continuation from [F1] excludes an earlier maximal endpoint. The reversed argument treats an inner stopping orbit. Hence every orbit is crossed once. [F1, F2, F3, step 1.1, step 2.1, step 3.1]

5.1 The maximal trajectory $\sigma$ is $C^2$, and after composing its parameter with one explicit increasing $C^2$ diffeomorphism of its open time interval onto $(0,1)$ (affine when both ends are finite, and an arctan-type explicit map when an end is infinite) the section may be written $\sigma:(0,1)\to A$, is still $C^2$, and meets every orbit exactly once with the parameter increasing from the inner to the outer end. [step 4.1, F1]

6.1 For each $s$ the orbit of $\sigma(s)$ is a simple periodic curve of a nowhere-zero field, so its period set is a closed additive subgroup of $\mathbb R$ whose discreteness gives a least positive period $T(s)$; fixing $s_0$ and a $C^2$ flow box at $\sigma(s_0)$ with $X=\partial_y$ and the section near $\sigma(s_0)$ a graph $y=\eta(x)$, the function $F(s,t):=y(s,t)-\eta(x(s,t))$, built from the jointly $C^2$ flow of the $C^2$ field, is $C^2$ with $F(s_0,T(s_0))=0$ and $F_t(s_0,T(s_0))=1$, so [F2] gives a unique local $C^2$ return time $T(s)$ near $s_0$; for $s$ near $s_0$ no smaller positive return occurs, because the trajectory of $\sigma(s)$ stays uniformly close to the reference orbit on the compact time interval $[\delta,T(s_0)-\delta]$ and avoids the section there by [F1] and [F3], while inside the flow box the section is met only at $t=0$; hence $T$ is $C^2$ on all of $(0,1)$. [step 5.1, F1, F2, F3]

7.1 Define $\Psi(\theta,s):=\Phi^X_{\theta T(s)/(2\pi)}(\sigma(s))$ on $S^1\times(0,1)$; it is $C^2$ and $2\pi$-periodic in $\theta$, and it is bijective because every orbit meets $\sigma$ exactly once and $\theta$ modulo $2\pi$ parametrizes that orbit once; its columns $\partial_\theta\Psi=T(s)X(\Psi)/(2\pi)$ and $\partial_s\Psi$, the latter being a scalar multiple of $X$ plus the pushforward $D\Phi^X_{\theta T(s)/(2\pi)}[Z(\sigma(s))]$ of the transverse vector $Z(\sigma(s))$, are everywhere independent because a time slice of the flow is a linear isomorphism carrying the line spanned by $X$ onto the line spanned by $X$; so $D\Psi$ is invertible everywhere, [F2] gives $C^2$ local inverses, and they agree globally by bijectivity, making $\Psi$ a $C^2$ diffeomorphism onto $A$. [step 6.1, F1, F2]

8.1 Since $\partial_\theta\Psi=T(s)X(\Psi(\theta,s))/(2\pi)$, the pushforward satisfies $\Psi^{-1}_*X=a(s)\partial_\theta$ with $a(s)=2\pi/T(s)>0$ of class $C^2$ on $(0,1)$; the section parameter increases from the inner to the outer end by construction, and the argument used one specified initial point, finitely many flow boxes and compactness arguments and the explicit reparametrization, hence no choice principle, so $A$, $X$, $\Psi$ and $a$ have all the asserted properties. [step 7.1, F2] ∎
