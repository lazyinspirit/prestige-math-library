---
id: def-scalar-neutral-delay-equation-and-segment-shift
kind: definition
title: "Scalar neutral delay equations and the derivative-segment shift"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-retarded-delay-equation-and-history-space
  - def-vector-valued-functions-limits-and-continuity
  - def-continuity-real
  - def-derivative
  - def-function-space
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "M. Zennaro, The Numerical Solution of Delay Differential Equations, Dobbiaco 2006 summer-school lecture notes"
      url: "https://dmi.units.it/dobbiaco/pre2006/dobbiaco06_Zennaro.pdf"
    - title: "Nicola Guglielmi and Ernst Hairer, Solving Delay Differential Equations, Chapter 1"
      url: "https://www.unige.ch/~hairer/preprints/ChapterDDE.pdf"
---

## Definition

Use the fixed positive-delay/history convention of
[[def-retarded-delay-equation-and-history-space]] in dimension $d=1$. The
canonical isometric coordinate map between $\mathbb R$ and $\mathbb R^1$ is as
specified in [[def-vector-valued-functions-limits-and-continuity]]; the formulas
below write the single coordinate as a real scalar.

Let $\tau>0$, $T=K\tau$ with integer $K\ge1$, $a\in\mathbb R$, and let $U$
be an open interval containing $[0,T]$. Let
$f:U\times\mathbb R\times\mathbb R\to\mathbb R$ be continuous and globally
Lipschitz in its last two variables: for some $L\ge0$,
$$|f(t,x,z)-f(t,\widetilde x,\widetilde z)|\le L(|x-\widetilde x|+|z-\widetilde z|)\qquad(t\in U).$$
Let $\phi:[-\tau,0]\to\mathbb R$ be continuously differentiable, with
continuity and derivative as in [[def-continuity-real]] and [[def-derivative]].
A **scalar neutral delay initial-value problem** is
$$y'(t)-a y'(t-\tau)=f(t,y(t),y(t-\tau)),\qquad 0\le t\le T,$$
with history $y(t)=\phi(t)$ for $-\tau\le t\le0$. A solution is continuous on
$[-\tau,T]$, continuously differentiable on $[0,T]$ with domain-relative
endpoint derivatives, and satisfies the equation. The history is
**compatible at zero** when
$$\phi'(0)=a\phi'(-\tau)+f(0,\phi(0),\phi(-\tau)).$$
The parameter restriction $|a|<1$ is the stable derivative-shift branch used
below; the equation itself is defined for every real $a$. No state-dependent
delay is included.

For the finite horizon $T=K\tau$, write a derivative path as segments
$u_k(s)=y'(k\tau+s)$ for $0\le k<K$ and $0\le s\le\tau$. Let $\mathcal X_K$
be the set of $K$-tuples of continuous real functions on $[0,\tau]$, with
continuity as in [[def-continuity-real]], and define
$$\|u\|_{\mathcal X_K}=\max_{0\le k<K}\sup_{0\le s\le\tau}|u_k(s)|,$$
and the **delay shift** $S_K$ by $(S_Ku)_0(s)=0$ and
$(S_Ku)_k(s)=u_{k-1}(s)$ for $1\le k<K$. The known derivative history on the
first segment is a forcing term; on each later segment the delayed derivative
is exactly the preceding segment $S_Ku$. Thus the neutral derivative relation
has the operator form $(I-aS_K)u=r$, with $r$ containing the right-hand side
and the known initial derivative history.

For a compatible-grid method with $h=\tau/m$, $m\ge1$, and $N=Km$, the
corresponding **mesh shift** on arrays $v=(v_0,\ldots,v_{N-1})\in\mathbb R^N$
is $(S_{K,m}v)_n=0$ for $0\le n<m$ and $(S_{K,m}v)_n=v_{n-m}$ for
$m\le n<N$. For any finite array length $M\in\mathbb N_0$ and integer $m\ge1$, denote the same rule by $S_m^{(M)}$. If $M\ge1$, use the max norm $\|v\|_\infty=\max_{0\le n<M}|v_n|$. If $M=0$, the coordinate space $\mathbb R^0$ consists of its unique empty array, the zero vector ([[def-function-space]]); define its norm to be $0$ and define $S_m^{(0)}$ to be the unique map from this zero space to itself. Thus no maximum of an empty real set is used. In particular $S_{K,m}=S_m^{(Km)}$. This records the delayed discrete derivative
when estimating any partial sequence of Euler steps. The known derivative
values from $\phi'$ occupy the first $m$ steps.
