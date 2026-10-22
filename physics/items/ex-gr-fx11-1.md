---
id: ex-gr-fx11-1
kind: example
title: "Exponential growth of the Nyquist mode above the CFL bound"
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 3
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps:
  - alg-gr-fx-periodic-wave-leapfrog
  - prop-gr-fx-leapfrog-termination
  - thm-gr-fx-leapfrog-mode-stability
  - thm-nth-roots-exist
  - def-abs-value
  - lem-of-abs-value
dependency_roles:
  alg-gr-fx-periodic-wave-leapfrog: mathematical-premise
  prop-gr-fx-leapfrog-termination: mathematical-premise
  thm-gr-fx-leapfrog-mode-stability: mathematical-premise
  thm-nth-roots-exist: mathematical-premise
  def-abs-value: mathematical-premise
  lem-of-abs-value: mathematical-premise
physical_scope: "An exact mathematical failure mode of the scalar benchmark above its stated time-step bound; no Einstein solver or physical evolution is asserted."
sources:
  references:
    - title: "Gilbert Strang, Mathematical Methods for Engineers II, MIT OpenCourseWare 18.086, Spring 2006, §5.3, complete 11-page lecture note"
      url: "https://ocw.mit.edu/courses/18-086-mathematical-methods-for-engineers-ii-spring-2006/8eaa23367474c809cc0816f24fdacc7f_am53.pdf"
    - title: "Lloyd N. Trefethen, Finite Difference and Spectral Methods for Ordinary and Partial Differential Equations, unpublished text (1996), Chapters 3–4, complete author PDFs"
      url: "https://people.maths.ox.ac.uk/trefethen/3all.pdf"
    - title: "Lloyd N. Trefethen, Finite Difference and Spectral Methods for Ordinary and Partial Differential Equations, unpublished text (1996), Chapter 4, complete 40-page author PDF"
      url: "https://people.maths.ox.ac.uk/trefethen/4all.pdf"
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

Let $N\ge4$ be even, let $h=2\pi/N$, and choose the Courant--Friedrichs--Lewy
(CFL) step ratio $\lambda:=k/h>1$. Run the periodic wave algorithm with
$u_j^0=(-1)^j$ and $v_j^0=0$, with any integer $n_{\max}\ge1$. For every integer
$0\le n\le n_{\max}$ the output has the form $u_j^n=a_n(-1)^j$, where, with
$c:=1-2\lambda^2<-1$,
$$
a_n=\frac{z_{\rm grow}^n+z_{\rm decay}^n}{2},\qquad z_{\rm grow}:=c-\sqrt{c^2-1}<-1,\qquad z_{\rm decay}:=c+\sqrt{c^2-1}\in(-1,0).
$$
Consequently $|a_n|\ge |z_{\rm grow}|^n/2$, so allowing more time steps
causes exponential growth of this alternating mode. The strict hypothesis
$0<k/h<1$ in the preceding mode theorem excludes this example; no endpoint
claim at $k/h=1$ is made here.

## Statement references

[[alg-gr-fx-periodic-wave-leapfrog]]

[[prop-gr-fx-leapfrog-termination]]

[[thm-gr-fx-leapfrog-mode-stability]]

[[thm-nth-roots-exist]]

[[def-abs-value]]

[[lem-of-abs-value]]

## Facts & Assumptions

**Given:** An even integer $N\ge4$, the benchmark step ratio $\lambda>1$,
and the real initial arrays $u_j^0=(-1)^j$, $v_j^0=0$.

[F1] [[alg-gr-fx-periodic-wave-leapfrog]]: the initialization and periodic
update are $u^1=u^0+kv^0+(k^2/2)D_hu^0$ and
$u^{n+1}=2u^n-u^{n-1}+k^2D_hu^n$.

[F2] [[prop-gr-fx-leapfrog-termination]]: for every finite $n_{\max}$ the
algorithm outputs every level through $u^{n_{\max}}$.

[F3] [[thm-gr-fx-leapfrog-mode-stability]]: the preceding unit-circle result
assumes $0<k/h<1$ and makes no claim for $k/h>1$.

[F4] [[thm-nth-roots-exist]]: a positive real number has a unique positive
square root.

[F5] [[def-abs-value]]: for real $x$, $|x|=x$ if $x\ge0$ and $|x|=-x$ if
$x<0$.

[F6] [[lem-of-abs-value]]: $|x|\ge0$, $|x|=0$ exactly when $x=0$, and
$|xy|=|x||y|$ for real $x,y$.

## Verification

**Given:** The even periodic grid, the stated time-step ratio, and the
alternating initial array.

1.1 Because $N$ is even, both periodic neighbors of $(-1)^j$ equal $-(-1)^j$. Hence $(D_hu^0)_j=-4h^{-2}(-1)^j$, and the startup in [F1] gives $a_0=1$ and $a_1=1-2(k/h)^2=c$. This mode has index $\ell=N/2$; it is outside the strict range of [F3]. [given, F1, F3, algebra]

2.1 Substitution of $u_j^n=a_n(-1)^j$ into the update [F1] gives $a_{n+1}-2ca_n+a_{n-1}=0$. Since $c<-1$, [F4] supplies $r=\sqrt{c^2-1}>0$. The two roots $z_{\rm grow}=c-r$ and $z_{\rm decay}=c+r$ satisfy $z_{\rm grow}z_{\rm decay}=1$; also $z_{\rm grow}<-1$ and $z_{\rm decay}=1/z_{\rm grow}\in(-1,0)$. [given, F1, F4, step 1.1, algebra]

3.1 The sequence $(z_{\rm grow}^n+z_{\rm decay}^n)/2$ satisfies the recurrence because each root satisfies $z^2-2cz+1=0$, and its values at $n=0,1$ are $1,c$. Induction identifies it with $a_n$. For even $n$ the two powers are nonnegative, and for odd $n$ they are both negative; since $1/2>0$, their half-sum has the same sign. The piecewise definition [F5] therefore gives $|a_n|=(|z_{\rm grow}^n|+|z_{\rm decay}^n|)/2$, while induction using multiplicativity [F6] gives $|z_{\rm grow}^n|=|z_{\rm grow}|^n$ and $|z_{\rm decay}^n|=|z_{\rm decay}|^n$. Since $z_{\rm grow}<-1$, [F5] gives $|z_{\rm grow}|=-z_{\rm grow}>1$, while $|z_{\rm decay}|^n\ge0$ by [F6]; hence $|a_n|\ge|z_{\rm grow}|^n/2$. [step 1.1, step 2.1, F1, F2, F5, F6, algebra] ∎

## Diagram

The following $N=8$ picture illustrates the periodic alternating data; the
last edge identifies the two ends of the grid. The proof above uses the
recurrence and applies to every even $N\ge4$; the drawing is not a proof.

```tikz
\begin{tikzpicture}[scale=1.15,every node/.style={circle,draw,minimum size=8mm,inner sep=1pt}]
  \node (v0) at (0,1.6) {$+1$};
  \node (v1) at (1.1,1.1) {$-1$};
  \node (v2) at (1.6,0) {$+1$};
  \node (v3) at (1.1,-1.1) {$-1$};
  \node (v4) at (0,-1.6) {$+1$};
  \node (v5) at (-1.1,-1.1) {$-1$};
  \node (v6) at (-1.6,0) {$+1$};
  \node (v7) at (-1.1,1.1) {$-1$};
  \draw (v0)--(v1)--(v2)--(v3)--(v4)--(v5)--(v6)--(v7)--cycle;
\end{tikzpicture}
```
