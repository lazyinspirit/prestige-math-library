---
id: lem-planar-barrier-controls-perron-solutions
kind: lemma
title: "A planar barrier forces the regularized Perron envelope to have the prescribed boundary limit"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps:
  - def-barrier-and-regular-boundary-point
  - def-complex-domain
  - def-metric-bounded-diameter
  - def-metric-compactness
  - def-metric-interior-closure-boundary
  - def-perron-envelope-for-the-plane-dirichlet-problem
  - def-perron-family-for-the-plane-dirichlet-problem
  - def-plane-harmonic-function
  - lem-perron-family-is-nonempty-and-bounded
  - lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity
  - thm-c-two-characterization-of-plane-subharmonicity
  - thm-extreme-value-metric
  - thm-heine-borel-rn
sources:
  references:
    - title: "Axler, Bourdon and Ramey, Harmonic Function Theory, 2nd ed., Theorem 11.7, printed pp. 227-228"
      url: https://www.axler.net/HFT.pdf
      locator: "Chapter 11, Theorem 11.7 and its proof: a barrier at a boundary point forces the Perron solution to have the prescribed limit there"
    - title: "Mikhail Lyubich, Dynamics of Quadratic Polynomials, Vol. I, Appendix 1, Sections 10.1-10.9"
      url: https://www.math.stonybrook.edu/~mlyubich/book.pdf
      locator: "Section 10.7, printed pp. 169-170: barriers and Theorem 10.19 (barrier implies regularity)"
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
---

## Statement

Let $\Omega\subseteq\mathbb C$ be a bounded complex domain, let
$\zeta\in\partial\Omega$, and let $b$ be a barrier at $\zeta$ in the sense of
the published definition ([[def-barrier-and-regular-boundary-point]]). Then
$\zeta$ is a regular boundary point: for every continuous boundary datum
$\varphi:\partial\Omega\to\mathbb R$ the regularized Perron envelope satisfies
$$\lim_{\substack{z\to\zeta\\ z\in\Omega}}H_\varphi(z)=\varphi(\zeta).$$
The limit is produced from the lower Perron family by squeezing the envelope
between the barrier bounds; no boundary limit of $H_\varphi$ at any other
boundary point and no converse implication is used.

## Facts & Assumptions

**Given:** A bounded complex domain $\Omega\subseteq\mathbb C$ ([[def-complex-domain]]), a point $\zeta\in\partial\Omega$, a barrier $b:\Omega\to[-\infty,0)$ at $\zeta$, a continuous datum $\varphi:\partial\Omega\to\mathbb R$, and $\varepsilon>0$. Here $\partial\Omega$ is the topological boundary ([[def-metric-interior-closure-boundary]]), boundedness is boundedness of the diameter ([[def-metric-bounded-diameter]]), and compactness is that of [[def-metric-compactness]]. A barrier at $\zeta$ is a subharmonic $b<0$ on $\Omega$ with $b(z)\to0$ as $z\to\zeta$ inside $\Omega$ and with the property that for every neighbourhood $V$ of $\zeta$ there is $c_V<0$ such that $\limsup_{z\to\eta,\,z\in\Omega}b(z)\le c_V$ for every $\eta\in\partial\Omega\setminus V$.

[F1] A complex domain is a nonempty connected open subset of $\mathbb C$, and the Perron lower family $\mathcal P(\varphi,\Omega)$ consists of the subharmonic $v:\Omega\to[-\infty,\infty)$ with $\limsup_{z\to\eta,\,z\in\Omega}v(z)\le\varphi(\eta)$ at every $\eta\in\partial\Omega$; the Perron envelope is the pointwise supremum $U_\varphi=\sup\{v:v\in\mathcal P(\varphi,\Omega)\}$ and its upper semicontinuous regularization is $H_\varphi(z)=\lim_{\rho\downarrow0}\sup\{U_\varphi(w):w\in\Omega,\ |w-z|<\rho\}$ ([[def-complex-domain]], [[def-perron-family-for-the-plane-dirichlet-problem]], [[def-perron-envelope-for-the-plane-dirichlet-problem]]).

[F2] A barrier at $\zeta$ is a subharmonic function $b$ on $\Omega$ with $b<0$, with $b(z)\to0$ as $z\to\zeta$ inside $\Omega$, and with the stated family of negative constants $c_V$ ([[def-barrier-and-regular-boundary-point]]).

[F3] Nonnegative linear combinations of subharmonic functions are subharmonic, and every harmonic function is subharmonic because a $C^2$ function is subharmonic exactly when $\Delta u\ge0$ ([[lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity]], [[thm-c-two-characterization-of-plane-subharmonicity]], [[def-plane-harmonic-function]]).

[F4] Every member $v$ of $\mathcal P(\psi,\Omega)$ for a continuous datum $\psi$ satisfies $v\le\max_{\partial\Omega}\psi$ on $\Omega$ ([[lem-perron-family-is-nonempty-and-bounded]]).

[F5] A subset of $\mathbb C$ is compact exactly when it is closed and bounded, a closed subset of a compact set is compact, and a continuous real function on a nonempty compact set attains its maximum and minimum ([[thm-heine-borel-rn]], [[def-metric-compactness]], [[thm-extreme-value-metric]]).

## Proof

**Proof technique:** direct.

1.1 The boundary $\partial\Omega$ is closed, and it is bounded because $\Omega$ is bounded, so $\partial\Omega$ is compact by [F5]. Hence there is a neighbourhood $V$ of $\zeta$ with $|\varphi(\eta)-\varphi(\zeta)|<\varepsilon$ for every $\eta\in\partial\Omega\cap V$, namely a disc around $\zeta$ whose intersection with the boundary lies inside the open set $\varphi^{-1}(\varphi(\zeta)-\varepsilon,\varphi(\zeta)+\varepsilon)$. By the barrier property [F2] there is $c_V<0$ with $\limsup_{z\to\eta,\,z\in\Omega}b(z)\le c_V$ for every $\eta\in\partial\Omega\setminus V$. The set $S:=\partial\Omega\setminus V$ is a closed subset of the compact set $\partial\Omega$, hence compact by [F5]. Put $D=0$ if $S=\varnothing$; otherwise, since the two displayed functions are continuous on the nonempty compact set $S$, put $$D:=\max\Bigl(0,\ \max_{\eta\in S}\max\{\varphi(\zeta)-\varepsilon-\varphi(\eta),\ \varphi(\eta)-\varphi(\zeta)-\varepsilon\}\Bigr).$$ This finite nonnegative number bounds both deviations that will be needed. Let $A$ be the least positive integer with $A\cdot(-c_V)>D$, which exists because $(-c_V)>0$. Then for every $\eta\in S$ both $\varphi(\zeta)-\varepsilon+A c_V\le\varphi(\eta)$ and $\varphi(\eta)+A c_V\le\varphi(\zeta)+\varepsilon$, since $A(-c_V)>D$ bounds respectively $\varphi(\zeta)-\varepsilon-\varphi(\eta)$ and $\varphi(\eta)-\varphi(\zeta)-\varepsilon$. [F2, F5, choose, algebra]

2.1 The function $\ell(z):=\varphi(\zeta)-\varepsilon+A\,b(z)$ is subharmonic on $\Omega$ by [F3], since $b$ is subharmonic, $A\ge0$ and constants are harmonic. It belongs to $\mathcal P(\varphi,\Omega)$: at a boundary point $\eta\in\partial\Omega\cap V$ its limsup is at most $\varphi(\zeta)-\varepsilon+0<\varphi(\eta)$ by the choice of $V$ and $b<0$, and at $\eta\in\partial\Omega\setminus V$ it is at most $\varphi(\zeta)-\varepsilon+A c_V\le\varphi(\eta)$ by step 1.1. Therefore $U_\varphi\ge\ell$ on $\Omega$ by [F1], that is $$U_\varphi(z)\ge\varphi(\zeta)-\varepsilon+A\,b(z)\qquad(z\in\Omega).$$ [F1, F2, F3, step 1.1, cases]

2.2 Let $v\in\mathcal P(\varphi,\Omega)$ and put $w:=v+A\,b$. Then $w$ is subharmonic on $\Omega$ by [F3], and at every boundary point its limsup is at most $\varphi(\zeta)+\varepsilon$: at $\eta\in\partial\Omega\cap V$ we have $\limsup w\le\varphi(\eta)+0<\varphi(\zeta)+\varepsilon$ by step 1.1 and $b<0$, while at $\eta\in\partial\Omega\setminus V$ we have $\limsup w\le\varphi(\eta)+A c_V\le\varphi(\zeta)+\varepsilon$ by the upper-deviation bound in step 1.1. So $w\in\mathcal P(\varphi(\zeta)+\varepsilon,\Omega)$ for the constant datum $\varphi(\zeta)+\varepsilon$, and [F4] gives the pointwise bound $$v(z)\le\varphi(\zeta)+\varepsilon-A\,b(z)\qquad(z\in\Omega).$$ [F1, F3, F4, step 1.1, cases]

3.1 Fix $\delta>0$. Since $b(z)\to0$ as $z\to\zeta$ inside $\Omega$ [F2], there is a neighbourhood $N$ of $\zeta$ with $-\delta\le b\le0$ on $N\cap\Omega$. Steps 2.1 and 2.2 apply to every $z\in N\cap\Omega$ and give, after taking suprema in $v$ and using that $b\le0$ only strengthens the upper bound, $$\varphi(\zeta)-\varepsilon-A\delta\le\ell(z)\le U_\varphi(z)\le\varphi(\zeta)+\varepsilon+A\delta \qquad(z\in N\cap\Omega).$$ [F1, F2, step 2.1, step 2.2]

4.1 The regularization inherits the two bounds on a smaller neighbourhood. Indeed $H_\varphi\ge U_\varphi$ by the defining limit in [F1], so $H_\varphi\ge\varphi(\zeta)-\varepsilon-A\delta$ on $N\cap\Omega$; and if $w\in N'\cap\Omega$ for a neighbourhood $N'$ of $\zeta$ with $\{|w-y|<\rho_0\}\subseteq N$ for some $\rho_0>0$, then every $y\in\Omega$ with $|y-w|<\rho_0$ lies in $N\cap\Omega$, so the supremum defining $H_\varphi(w)$ is at most $\varphi(\zeta)+\varepsilon+A\delta$ and hence so is its limit $H_\varphi(w)$ $$|H_\varphi(w)-\varphi(\zeta)|\le\varepsilon+A\,\delta\qquad(w\in N'\cap\Omega).$$ [F1, step 3.1]

5.1 Given $\eta>0$, apply step 1.1 with $\varepsilon:=\eta/2$ and step 3.1 with $\delta:=\eta/(2A)$, where $A\ge1$ is the positive integer of step 1.1; then step 4.1 yields a neighbourhood of $\zeta$ on which $|H_\varphi-\varphi(\zeta)|\le\eta$. Hence the limit exists and equals $\varphi(\zeta)$, that is, $\zeta$ is regular in the sense of [F2]; the argument used only the barrier $b$ at $\zeta$, the continuity of $\varphi$ at $\zeta$ and the compactness of $\partial\Omega$, and it made no use of boundary behaviour of $H_\varphi$ at any other point. [F1, F2, F5, step 1.1, step 3.1, step 4.1] ∎
