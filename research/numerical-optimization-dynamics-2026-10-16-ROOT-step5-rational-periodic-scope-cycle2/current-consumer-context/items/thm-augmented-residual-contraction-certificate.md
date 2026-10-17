---
id: thm-augmented-residual-contraction-certificate
kind: theorem
title: "A bounded residual and derivative error give a local root certificate"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-c-one-map-and-local-inverse
  - def-total-derivative-in-euclidean-space
  - thm-banach-fixed-point
  - thm-euclidean-space-complete
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-chain-rule-for-total-derivatives
  - thm-mean-value-inequality-for-total-derivatives
  - lem-geometric-sequence-null
  - lem-power-difference-factorisation
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Eugene L. Allgower and Kurt Georg, Numerical Continuation Methods: An Introduction, Springer Series in Computational Mathematics 13 (1990)"
      url: "http://lib.ysu.am/disciplines_bk/080dea8526183abcce1135f2a4460625.pdf"
      locator: "Chapter 11, §§11.1–11.2, printed pp. 112–121: contraction-based existence certificates"
    - title: "K. A. Cliffe, A. Spence, and S. J. Tavener, The numerical analysis of bifurcation problems with application to fluid mechanics, Acta Numerica 9 (2000), 39–131"
      url: "https://www.math.colostate.edu/~tavener/manuscripts/cliffe/acta-numerica-2000.pdf"
      locator: "§7.1, printed pp. 92–94: local augmented-system correction and the limits of a finite trace"
---

## Statement

For a linear map $A$ between Euclidean spaces, write
$\|A\|_{\rm op}:=\sup_{\|u\|_2=1}\|Au\|_2$. Let $m\ge1$, let
$V\subseteq\mathbb R^m$ be open, and let
$G:V\to\mathbb R^m$ be $C^1$. Let $y\in V$, $R>0$, and suppose the closed
ball $\overline B_2(y,R)$ lies in $V$. Assume that for some $L\ge0$,
$$\|DG(u)-DG(v)\|_{\rm op}\le L\|u-v\|_2\qquad(u,v\in\overline B_2(y,R)).$$
Let $\widehat g\in\mathbb R^m$ and $\widehat A\in\mathbb R^{m\times m}$
come with certified bounds
$$\|\widehat g-G(y)\|_2\le\epsilon_g,\qquad \|\widehat A-DG(y)\|_{\rm op}\le\epsilon_J,$$
where $\epsilon_g,\epsilon_J\ge0$. Suppose $\widehat A$ is invertible and
$\|\widehat A^{-1}\|_{\rm op}\le\widehat\beta$, with
$\widehat\beta\epsilon_J<1$. Define
$$\beta:=\frac{\widehat\beta}{1-\widehat\beta\epsilon_J},\qquad \rho:=\|\widehat g\|_2+\epsilon_g,\qquad q:=\beta L R.$$
If $q<1$ and $\beta\rho\le(1-q)R$, then $G$ has exactly one zero $y^*$
in $\overline B_2(y,R)$ and
$$\|y^*-y\|_2\le\frac{\beta\rho}{1-q}.$$

## Facts & Assumptions

**Given:** $G,V,y,R,L,\widehat g,\widehat A,\epsilon_g,\epsilon_J$ and
$\widehat\beta$ as in the Statement.

[F1] [[thm-banach-fixed-point]]: a contraction of a nonempty complete metric
space into itself has exactly one fixed point.

[F2] [[thm-euclidean-space-complete]]: Euclidean $\mathbb R^m$ is complete.
A closed Euclidean ball is complete because every Cauchy sequence in it
converges in $\mathbb R^m$ and continuity of the norm keeps the limit in the
ball.

[F3] [[thm-chain-rule-for-total-derivatives]]: the derivative of a composite
is the composite of its derivatives.

[F4] [[thm-mean-value-inequality-for-total-derivatives]]: on a convex open
set, a uniform derivative-norm bound implies the same Lipschitz bound on the
map.

[F5] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: the Euclidean inner
product satisfies Cauchy--Schwarz.

[F6] [[lem-geometric-sequence-null]] and
[[lem-power-difference-factorisation]]: if $0\le a<1$, then $a^k\to0$ and
$(1-a)\sum_{j=0}^{N}a^j=1-a^{N+1}$.

[F7] [[def-c-one-map-and-local-inverse]]: $C^1$ means total differentiability
at every point and continuity of the first derivative matrix entries.

[F8] [[def-total-derivative-in-euclidean-space]]: the total derivative is the
linear first-order approximation to a map at each point.

## Proof

**Given:** The data and hypotheses in the Statement.

1.1 For matrices $X,Y$, the definition of the operator norm gives $\|XYu\|_2\le\|X\|_{\rm op}\|Y\|_{\rm op}\|u\|_2$ for every $u$; taking the supremum over unit $u$ proves submultiplicativity. Put $A:=DG(y)$, $E:=A-\widehat A$, $P:=\widehat A^{-1}E$, and $a:=\widehat\beta\epsilon_J<1$. Then $A=\widehat A(I+P)$ and $\|P^k\|_{\rm op}\le a^k$ by induction. [given, algebra]

2.1 The finite sums $S_N:=\sum_{j=0}^{N}(-P)^j$ satisfy $(I+P)S_N=S_N(I+P)=I+(-1)^NP^{N+1}$. By [F6], the tails are bounded by $a^{N+1}/(1-a)\to0$. Each matrix entry of $S_N-S_M$ is bounded in absolute value by $\|S_N-S_M\|_{\rm op}$, by [F5] applied to standard unit vectors. Thus the entries are Cauchy; completeness [F2] gives a matrix limit $S$. Taking entrywise limits in the finite matrix products gives $(I+P)S=S(I+P)=I$. Also the finite-sum bound in [F6] gives $\|S\|_{\rm op}\le(1-a)^{-1}$ by taking limits on each vector. Hence $A^{-1}=S\widehat A^{-1}$ and $\|A^{-1}\|_{\rm op}\le\beta$. [F2, F5, F6, step 1.1, given, algebra]

3.1 Define $T(x):=x-A^{-1}G(x)$ on the ball. Its derivative is $DT(x)=A^{-1}(A-DG(x))$. For $x$ in the open ball, the Lipschitz hypothesis gives $\|DT(x)\|_{\rm op}\le\beta L\|x-y\|_2\le q$. The open ball is convex, so [F4] gives $\|T(u)-T(v)\|_2\le q\|u-v\|_2$ there; continuity extends this inequality to the closed ball. [F3, F4, F7, F8, given, step 2.1, algebra]

4.1 Since $\|T(y)-y\|_2=\|A^{-1}G(y)\|_2\le\beta\rho$, every $x\in\overline B_2(y,R)$ satisfies $$\|T(x)-y\|_2\le\|T(x)-T(y)\|_2+\|T(y)-y\|_2\le qR+\beta\rho\le R.$$ Thus $T$ maps the nonempty complete ball into itself. By [F1] it has a unique fixed point $y^*$ there, and invertibility of $A$ makes $T(y^*)=y^*$ equivalent to $G(y^*)=0$. Any zero of $G$ is a fixed point, so this zero is unique. [F1, F2, step 2.1, step 3.1, given, algebra]

5.1 The contraction inequality and fixed-point identity give $$\|y^*-y\|_2\le\|T(y^*)-T(y)\|_2+\|T(y)-y\|_2 \le q\|y^*-y\|_2+\beta\rho,$$ which rearranges to the stated error bound because $1-q>0$. [F1, step 3.1, step 4.1, given, algebra] ∎

## Remarks

For an augmented pseudo-arclength residual, use this certificate only when
the ball lies in the local curve-chart neighborhood and the corrector
hyperplane is transverse to the curve. Failure of either strict contraction
condition gives no certificate; a finite Newton budget alone certifies
neither existence nor nonexistence of a root.
