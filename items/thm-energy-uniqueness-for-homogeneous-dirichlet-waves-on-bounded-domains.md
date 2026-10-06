---
id: thm-energy-uniqueness-for-homogeneous-dirichlet-waves-on-bounded-domains
kind: theorem
title: "Energy uniqueness for homogeneous Dirichlet waves on bounded domains"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
deps: [def-countable-choice, thm-conservation-of-total-wave-energy, def-bounded-c-one-domain-boundary-charts-and-outward-normal, def-wave-equation-cauchy-data-and-wave-speed, def-wave-energy-and-energy-flux, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, cor-components-of-open-subsets-of-rn-are-polygonally-connected, def-polygonal-path-and-polygonal-connectedness, cor-zero-derivative-implies-constant, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, thm-heine-borel-rn, thm-extreme-value-metric, thm-heine-cantor-metric, lem-sphere-and-ball-measures-scale]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§7.3, printed p. 176, Lemma 7.10 and Theorem 7.11: conserved energy and uniqueness under Dirichlet boundary data"
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§9.2.4, printed p. 292, Theorem 9.2.4: the Dirichlet alternative for the IBVP, by the energy method"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $c>0$,
$T>0$, let $n\ge1$ and let $U\subseteq\mathbb R^n$ be a bounded open interval if $n=1$, or a bounded connected $C^1$ domain if $n\ge2$
([[def-bounded-c-one-domain-boundary-charts-and-outward-normal]]) and let
$u\in C^2(\overline U\times[0,T])$ solve $\Box_cu=0$ on $U\times(0,T)$ with
homogeneous Dirichlet boundary data $u(\cdot,t)|_{\partial U}=0$ for every
$t\in(0,T)$ and homogeneous initial data $u(\cdot,0)=u_t(\cdot,0)=0$. Then
$u\equiv0$ on $\overline U\times[0,T]$. More generally, two such Dirichlet
solutions with equal initial data agree on $\overline U\times[0,T]$.

The trace condition $u|_{\partial U}=0$ is stated explicitly because it is
exactly the boundary flux that is being killed. Connectedness is retained so
the proof can treat $U$ as one spatial component; the same argument applies
componentwise on a disconnected domain with the corresponding boundary
regularity.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$; a bounded interval ($n=1$) or bounded connected $C^1$ domain ($n\ge2$) $U$, a $C^2$ function $u$ on $\overline U\times[0,T]$ solving $\Box_cu=0$ on $U\times(0,T)$ with $u=0$ on $\partial U\times(0,T)$ and $u(\cdot,0)=u_t(\cdot,0)=0$; the energy density $e=\tfrac12(u_t^2+c^2|Du|^2)\ge0$ of [[def-wave-energy-and-energy-flux]] and $E_U(t)=\int_Ue(x,t)\,dx$.

[F1] Conservation in case (c): for a bounded $C^1$ domain with homogeneous Dirichlet data, $E_U$ is constant on $(0,T)$. ([[thm-conservation-of-total-wave-energy]])

[F2] A nonnegative measurable function has integral $0$ exactly when it vanishes almost everywhere; a continuous function on $U$ that vanishes almost everywhere vanishes identically, because a positive value at one point persists on a ball of positive measure. ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]])

[F3] Every connected component of an open subset of $\mathbb R^n$ is open and polygonally connected, and any two points of a polygonally connected set are joined by a polygonal path inside it. ([[cor-components-of-open-subsets-of-rn-are-polygonally-connected]], [[def-polygonal-path-and-polygonal-connectedness]])

[F4] A continuous function on an interval whose derivative vanishes at every interior point is constant. ([[cor-zero-derivative-implies-constant]])

[F5] Chain rule, and linearity of differentiation: a difference of two solutions of $\Box_cu=0$ is again a solution. ([[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[def-wave-equation-cauchy-data-and-wave-speed]])

[F6] Closed bounded Euclidean sets are compact; continuous functions on nonempty compact sets are bounded and uniformly continuous. ([[thm-heine-borel-rn]], [[thm-extreme-value-metric]], [[thm-heine-cantor-metric]])

## Proof

1.1 Vanishing of the density and of the first derivatives: $E_U(0)=0$ because $u_t(\cdot,0)=Du(\cdot,0)=0$; since $e$ is continuous on the compact set $\overline U\times[0,T]$, it is uniformly continuous there, and boundedness of $U$ gives $|E_U(t)-E_U(0)|\le\lambda_n(U)\sup_{x\in\overline U}|e(x,t)-e(x,0)|\to0$ as $t\downarrow0$. By [F1], $E_U$ is constant on $(0,T)$, so this continuity identifies that constant with $E_U(0)=0$; for each $t\in(0,T)$, nonnegativity and continuity of $e$ together with [F2] give $e(\cdot,t)=0$ on $U$, hence $u_t(\cdot,t)=0$ and $Du(\cdot,t)=0$ there, and continuity of these derivatives extends their vanishing to $t=0$ and $t=T$. [given, F1, F2, algebra, F6]

2.1 Spatial constancy on the connected domain: fix $t$ and $p,q\in U$; since $U$ is open and connected, [F3] supplies a polygonal path in $U$ from $p$ to $q$, say with successive vertices $p=a_0,\ldots,a_m=q$; for each segment put $g(s):=u(a_{j-1}+s(a_j-a_{j-1}),t)$ for $s\in[0,1]$; by the chain rule [F5], $g$ is continuous on $[0,1]$ and differentiable there with $g'(s)=Du(a_{j-1}+s(a_j-a_{j-1}),t)\cdot(a_j-a_{j-1})=0$, so [F4] makes $g$ constant; chaining over $j=1,\ldots,m$ gives $u(p,t)=u(q,t)$, so $u(\cdot,t)$ is constant on $U$. [given, step 1.1, F3, F4, F5, algebra]

3.1 The constant is zero: $U$ is nonempty, bounded and open, so $\partial U\ne\varnothing$; fix $t\in[0,T]$ and $q\in\partial U$ and a sequence $p_k\in U$ with $p_k\to q$; by step 2.1, $u(p_k,t)=u(p_1,t)$ for all $k$, while continuity of $u$ on $\overline U\times[0,T]$ and the boundary condition give $u(p_k,t)\to u(q,t)=0$; hence $u(\cdot,t)\equiv0$ on $U$, and by continuity on $\overline U$. [given, step 2.1, algebra]

4.1 Uniqueness for two solutions: if $u$ and $v$ are two such Dirichlet solutions with equal initial data, their difference $w:=u-v$ is $C^2$ on $\overline U\times[0,T]$, solves $\Box_cw=0$ there by linearity [F5], vanishes on $\partial U\times(0,T)$ and has $w(\cdot,0)=w_t(\cdot,0)=0$; steps 1.1–3.1 applied to $w$ give $w\equiv0$ on $\overline U\times[0,T]$, that is, $u=v$. [given, step 3.1, F5] ∎ 
