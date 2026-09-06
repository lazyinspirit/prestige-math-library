---
id: thm-von-mangoldt-explicit-formula-smoothed
kind: theorem
title: "A smoothed von Mangoldt explicit formula"
status: published
verification:
  audited: 2026-09-07
origin: pipeline
deps: [def-von-mangoldt-function, lem-local-logarithmic-derivative-zeta, lem-logarithmic-derivative-zeta-left-half-plane, lem-von-mangoldt-explicit-formula-residues, cor-zeta-zero-count-unit-interval, thm-trivial-zeros-and-critical-strip, thm-riemann-zeta-continuation-to-the-right-half-plane, thm-gamma-weierstrass-product, thm-euler-mascheroni-constant-and-harmonic-asymptotic, thm-riemann-zeta-functional-equation, thm-von-mangoldt-logarithmic-derivative-zeta, thm-residue-theorem-null-homologous-cycle]
proof_strategy: contour
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Nick Andersen, Analytic Number Theory, §§12.1--12.2"
      url: "https://mathdept.byu.edu/~nick/ucla/205a/205a-notes.pdf"
---

## Statement

For $1<x<y$ and $u\ge0$, let $\phi_{x,y}(u)=1$ for $u\le x$, $(y-u)/(y-x)$ for $x<u<y$,
and $0$ for $u\ge y$. For $\Re s>0$ put
$\widetilde\phi(s)=\int_0^\infty\phi(u)u^{s-1}du$, and use the same symbol
for its meromorphic continuation. Then
$$\sum_{n\ge1}\Lambda(n)\phi_{x,y}(n)=\widetilde\phi(1)-\sum_\rho\widetilde\phi(\rho)-\log(2\pi)-\sum_{k\ge1}\widetilde\phi(-2k).$$
Both infinite sums on the right converge absolutely; zeros are counted with
multiplicity. In particular, symmetric ordinate truncations give the same zero sum.

## Facts & Assumptions

[L1] For $T\ge0$, the number of nontrivial zeros with ordinates in $[T,T+1]$
is $O(\log(T+2))$ ([[cor-zeta-zero-count-unit-interval]]).

[L2] Nontrivial zeros occur in conjugate pairs
([[thm-trivial-zeros-and-critical-strip]]).

## Proof

**Given:** $1<x<y$ and the displayed piecewise-linear cutoff.

1.1 Write $\Phi=\widetilde\phi$. Integration by parts gives $$\Phi(s)=\frac{y^{s+1}-x^{s+1}}{(y-x)s(s+1)}.$$ Its only pole is $0$, with residue $1$; the apparent singularity at $-1$ is removable, with value $-\log(y/x)/(y-x)$. On each fixed vertical strip it is $O_{x,y}(|\Im s|^{-2})$ at large height, with the constant also depending on the strip. [given, algebra]

1.2 We compute the constant at zero. Put $\gamma=\lim_N(H_N-\log N)$ as in [[thm-euler-mascheroni-constant-and-harmonic-asymptotic]]. The fractional-part formula in [[thm-riemann-zeta-continuation-to-the-right-half-plane]] and $$\int_1^N\frac{\{u\}}{u^2}\,du=\log N-H_N+1$$ give $\zeta(1-s)=-1/s+\gamma+O(s)$. Logarithmic differentiation of the locally uniform product in [[thm-gamma-weierstrass-product]] at $1$ gives $$-\frac{\Gamma'(1)}{\Gamma(1)}=1+\gamma+\sum_{n\ge1}\left(\frac1{n+1}-\frac1n\right)=\gamma.$$ The same product at $1$ gives $\Gamma(1)=1$, so $\Gamma(1-s)=1+\gamma s+O(s^2)$. Finally [[thm-riemann-zeta-functional-equation]] and $$2^s\pi^{s-1}\sin(\pi s/2)=\frac{s}{2}\bigl(1+s\log(2\pi)+O(s^2)\bigr)$$ yield $\zeta(s)=-1/2-s\log(2\pi)/2+O(s^2)$: the two Euler constants cancel. Thus $\zeta'(0)/\zeta(0)=\log(2\pi)$. [given, algebra]

2.1 To justify inversion explicitly, let $$J(z)=\frac1{2\pi i}\int_{\Re s=2}\frac{z^s}{s(s+1)}\,ds\qquad(z>0).$$ Closing a rectangle to the left for $z>1$, and to the right for $z<1$, gives $J(z)=1-z^{-1}$ and $J(z)=0$, respectively, by [[thm-residue-theorem-null-homologous-cycle]]. Indeed, first let the height tend to infinity with the other vertical side fixed: the horizontal integrals are $O(T^{-2})$ times a fixed width. Then let that side tend to the appropriate infinity through half-integers; its integral is $O(z^{\sigma}/|\sigma|)$ and vanishes. At $z=1$, continuity of the absolutely convergent initial integral gives $J(1)=0$. Consequently $[yJ(y/u)-xJ(x/u)]/(y-x)=\phi(u)$ for every $u>0$, including $u=x,y$. Combining this with step 1.1 and [[thm-von-mangoldt-logarithmic-derivative-zeta]] gives $$\sum_n\Lambda(n)\phi(n)=\frac1{2\pi i}\int_{\Re s=2}-\frac{\zeta'}\zeta(s)\Phi(s)\,ds.$$ The exchange of sum and integral is absolute, since $\sum_n\Lambda(n)n^{-2}\le\sum_{n\ge2}(\log n)n^{-2}<\infty$ and $\Phi(2+it)=O_{x,y}((1+|t|)^{-2})$. [step 1.1, algebra]

2.2 By [L1], [L2], and $0<\Re\rho<1$, step 1.1 gives absolute convergence of the zero sum: its bands at large $|\Im\rho|\asymp j$ contribute $O_{x,y}(\log(j+2)/j^2)$. The trivial-zero sum converges absolutely since $|\Phi(-2k)|\le C_{x,y}x^{1-2k}/k^2$. We also choose admissible heights explicitly. Let $M_j$ count zeros with ordinates in $[j-1,j+2]$, with multiplicity. It is $O(\log(j+2))$. Among the $2M_j+2$ equally spaced points of $[j,j+1]$, each such ordinate excludes at most one point at distance less than $1/(4M_j+4)$. Choose the least remaining point $T_j$. Ordinates outside that larger interval are at distance at least $1$, so every zero ordinate is at distance at least $1/(4M_j+4)$ from $T_j$. Conjugation gives the same separation at $-T_j$. [L1, L2, step 1.1, algebra]

3.1 Fix an odd integer $R\ge3$ and shift the integral of step 2.1 to $\Re s=-R$, using heights $\pm T_j$ from step 2.2. On $-1\le\Re s\le2$, [[lem-local-logarithmic-derivative-zeta]] bounds $\zeta'/\zeta$ by $O(\log^2 T_j)$: there are $O(\log T_j)$ nearby zeros, each reciprocal is $O(\log T_j)$, and the pole term is bounded. On $-R\le\Re s\le-1$, [[lem-logarithmic-derivative-zeta-left-half-plane]] gives $O_R(\log T_j)$. Thus each horizontal integral is $O_{R,x,y}(\log^2 T_j/T_j^2)$ and tends to zero. By [[lem-von-mangoldt-explicit-formula-residues]], $-\zeta'/\zeta$ has residues $1$ at $1$, $-m$ at a zero of multiplicity $m$, and $-1$ at each trivial zero. Multiplication by $\Phi$ therefore gives residues $\Phi(1)$, $-m\Phi(\rho)$, $-\Phi(-2k)$, and, by step 1.2, $-\log(2\pi)$ at $0$. There is no pole at $-1$. The residue theorem and absolute convergence in step 2.2 now express the initial integral as these residues for $-2k>-R$, the full nontrivial-zero sum, and the upward integral on $\Re s=-R$. [step 1.2, step 2.1, step 2.2, algebra]

4.1 On that last line, the distance to every trivial zero is at least $1$. Step 1.1 gives $$|\Phi(-R+it)|\le C_{x,y}\frac{x^{1-R}}{R^2+t^2}.$$ The left-half-plane bound therefore makes its integral at most $$C_{x,y}x^{1-R}\int_{\mathbb R}\frac{\log(R+|t|+2)}{R^2+t^2}\,dt\le C'_{x,y}x^{1-R}\frac{\log(R+2)}R\longrightarrow0.$$ Letting odd $R$ tend to infinity in step 3.1, using $x>1$ and the absolute convergence from step 2.2, proves the formula for every stated pair $1<x<y$. [step 1.1, step 2.2, step 3.1, algebra] ∎
