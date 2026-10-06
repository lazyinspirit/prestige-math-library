---
id: thm-linfinity-stability-for-the-inhomogeneous-heat-equation
kind: theorem
title: Supremum norm stability for forced heat problems
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
deps:
  - def-countable-choice
  - def-parabolic-cylinder-and-parabolic-boundary
  - cor-comparison-and-uniqueness-for-the-bounded-cylinder-heat-problem
  - thm-ftc-first-part
  - thm-continuous-implies-integrable
  - thm-extreme-value-metric
  - thm-heine-borel-rn
  - def-metric-compactness
  - thm-heine-cantor-metric
  - def-metric-uniform-continuity
  - def-laplacian-of-a-c2-function
  - def-directional-and-partial-derivatives
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§6.3, printed p. 159, Theorem 6.17 and estimate (6.61) (the forcing barrier with the integrated timewise supremum)"
---

## Statement

Assume Countable Choice. Let $\Omega\subseteq\mathbb R^n$ be nonempty, bounded and open, $T>0$, and let real
$u,v\in C^{2,1}(\overline\Omega\times[0,T])$ solve $u_t-\Delta u=f$,
$v_t-\Delta v=g$ with $f,g\in C(\overline\Omega\times[0,T])$. Put
$a=\|u(\cdot,0)-v(\cdot,0)\|_\infty$,
$b_t=\sup_{\partial\Omega\times[0,t]}|u-v|$, and
$m(s)=\max_{\overline\Omega}|f(\cdot,s)-g(\cdot,s)|$. Then for $0<t\le T$,
$$\sup_{\overline\Omega\times[0,t]}|u-v|\le\max(a,b_t)+\int_0^t m(s)ds,$$
and hence also the bound with $a+b_t$ in place of the maximum.

## Facts & Assumptions

**Given:** Countable Choice, a bounded open $\Omega\subseteq\mathbb R^n$, $T>0$, real $u,v\in C^{2,1}(\overline Q)$ on $Q=\Omega\times(0,T]$ with $u_t-\Delta u=f$ and $v_t-\Delta v=g$ in $Q$ for continuous $f,g$, and $0<t\le T$.

[A1] Countable Choice is the ambient hypothesis ([[def-countable-choice]]).

[F1] Cylinder convention and parabolic boundary: the class $C^{2,1}(\overline Q)$, the closed cylinder $\overline\Omega\times[0,T]$ and $\partial_p(\Omega\times(0,t])=(\overline\Omega\times\{0\})\cup(\partial\Omega\times[0,t])$ are those of [[def-parabolic-cylinder-and-parabolic-boundary]].

[F2] Comparison: if $U,V\in C^{2,1}(\overline Q)$ with $Q=\Omega\times(0,t]$, $U_t-\Delta U\le V_t-\Delta V$ in $Q$ and $U\le V$ on $\partial_pQ$, then $U\le V$ on $\overline Q$ ([[cor-comparison-and-uniqueness-for-the-bounded-cylinder-heat-problem]]).

[F3] $\overline Q$ is compact and continuous real functions on nonempty compact sets attain their extrema ([[thm-heine-borel-rn]], [[def-metric-compactness]], [[thm-extreme-value-metric]]); continuous maps on compact metric spaces are uniformly continuous ([[thm-heine-cantor-metric]], [[def-metric-uniform-continuity]]).

[F4] Fundamental theorem of calculus, first part: if $\varphi$ is continuous on $[0,t]$, then $s\mapsto\int_0^s\varphi$ is differentiable with derivative $\varphi$ ([[thm-ftc-first-part]]), continuity on a compact interval supplying the integrability used to form the integral ([[thm-continuous-implies-integrable]]).

[F5] The Laplacian is $\Delta w=\sum_i\partial_i\partial_iw$ ([[def-laplacian-of-a-c2-function]]), the partial derivatives being those of [[def-directional-and-partial-derivatives]]; a function of the time variable alone has all its $x$-partial derivatives $0$, and $\pm m$ is an admissible forcing for the comparison principle.

## Proof

**Given:** Countable Choice, bounded $\Omega$, $T>0$, solutions $u,v\in C^{2,1}(\overline Q)$ of $u_t-\Delta u=f$, $v_t-\Delta v=g$, continuous $f,g$, and $0<t\le T$.

1.1 Put $w:=u-v$ and $Q_t:=\Omega\times(0,t]$. Then $w\in C^{2,1}(\overline{Q_t})$ with $w_t-\Delta w=f-g$ in $Q_t$, and on the parabolic boundary of $Q_t$ one has $|w|\le a$ on $\overline\Omega\times\{0\}$ and $|w|\le b_t$ on $\partial\Omega\times[0,t]$ by the definitions of $a$ and $b_t$; moreover the function $s\mapsto m(s)=\max_{\overline\Omega}|f(\cdot,s)-g(\cdot,s)|$ is well defined on $[0,t]$ and continuous there: it is a maximum of a continuous function on the compact $\overline\Omega$ for each $s$ by [F3], and given $\varepsilon>0$, uniform continuity of $f$ and $g$ on the compact $\overline Q$ [F3] gives $\delta>0$ such that $|f(x,s)-f(x,s_0)|<\varepsilon/2$ and $|g(x,s)-g(x,s_0)|<\varepsilon/2$ for all $x\in\overline\Omega$ whenever $|s-s_0|<\delta$, whence $|m(s)-m(s_0)|\le\varepsilon$. [A1, F1, F3, given]

2.1 Let $M:=\max(a,b_t)\ge0$ and for $s\in[0,t]$ put $W_+(s):=M+\int_0^s m(\sigma)\,d\sigma$ and $W_-(s):=-M-\int_0^s m(\sigma)\,d\sigma$, viewed as functions of $(s,x)$. By [F4] and the continuity of $m$ from step 1.1, both are of class $C^{2,1}(\overline{Q_t})$ with $(W_\pm)_t-\Delta W_\pm=\pm m$: the time derivative is $\pm m(s)$ by [F4] and every $x$-partial derivative vanishes because $W_\pm$ depends on $s$ alone, so $\Delta W_\pm=0$ by [F5]. On the parabolic boundary of $Q_t$ one has $W_-\le-M\le w\le M\le W_+$, since $|w|\le M$ there by step 1.1. [step 1.1, F4, F5, given]

3.1 Comparison applied twice. For the pair $(U,V)=(w,W_+)$: $w_t-\Delta w-(W_{+,t}-\Delta W_+)=(f-g)-m\le0$ in $Q_t$ and $w\le W_+$ on $\partial_pQ_t$ by step 2.1, so [F2] gives $w\le W_+$ on $\overline{Q_t}$. For the pair $(U,V)=(W_-,w)$: $W_{-,t}-\Delta W_--(w_t-\Delta w)=-m-(f-g)\le0$ in $Q_t$ and $W_-\le w$ on $\partial_pQ_t$ by step 2.1, so [F2] gives $W_-\le w$ on $\overline{Q_t}$. Therefore $|w(s,x)|\le M+\int_0^s m(\sigma)\,d\sigma$ for every $(s,x)\in[0,t]\times\overline\Omega$. [step 1.1, step 2.1, F2, given]

4.1 Since $s\mapsto\int_0^s m$ is nondecreasing on $[0,t]$ (the integrand is nonnegative), step 3.1 gives $|u-v|\le M+\int_0^t m$ on $\overline\Omega\times[0,t]$, hence $\sup_{\overline\Omega\times[0,t]}|u-v|\le\max(a,b_t)+\int_0^t m(s)\,ds$. Finally $\max(a,b_t)\le a+b_t$, so the same estimate holds with $a+b_t$ in place of the maximum. [step 3.1, given] ∎
