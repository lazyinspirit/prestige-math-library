---
id: thm-completed-level-one-eisenstein-series-functional-equation
kind: theorem
title: "Functional Equation of the Completed Level-One Eisenstein Series"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-euler-gamma-function
  - lem-fourier-transform-of-a-gaussian
  - thm-gamma-functional-equation
  - lem-gamma-functional-equation-meromorphic-extension
  - thm-primitive-dirichlet-l-analytic-continuation
  - thm-primitive-dirichlet-l-functional-equation
  - def-completed-dirichlet-l-function
  - def-riemann-zeta-function
  - cor-gamma-function-has-no-zeros
  - def-cesaro-and-abel-means-of-a-fourier-series
  - thm-fejer-uniform-convergence-for-continuous-periodic-functions
  - thm-maximum-modulus-principle-with-boundary-and-infinity-control
  - thm-identity-theorem-holomorphic-functions
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Avi Zeff, The Rankin–Selberg Method, Columbia graduate notes"
      url: "https://www.math.columbia.edu/~avizeff/quals/Rankin-Selberg.pdf"
      locator: "Theorem 1 and the Fourier-coefficient calculation, PDF pp. 1–3."
    - title: "S. D. Miller and W. Schmid, The Rankin–Selberg Method for Automorphic Distributions"
      url: "https://arxiv.org/pdf/math/0605783v1"
      locator: "§4, the full-level Eisenstein distribution construction and functional equation, equations (4.1)–(4.11), printed pp. 17–19."
forward_refs: []
---

## Statement

For $z=x+iy$ in the upper half-plane and $\operatorname{Re}s>1$, define

$$
\mathcal E(z,s):=\frac{\pi^{-s}\Gamma(s)}{2}
\sum_{\substack{(m,n)\in\mathbb Z^2\\(m,n)\ne(0,0)}}
\frac{y^s}{|mz+n|^{2s}},
$$

where $\zeta(w)=\sum_{n\ge1}n^{-w}$ initially for $\operatorname{Re}w>1$ and
$\Gamma$ is Euler's Gamma function. Then $\mathcal E(z,s)$ is invariant under
$SL_2(\mathbb Z)$ and extends meromorphically in $s$ to $\mathbb C$, with at
most simple poles at $s=0$ and $s=1$, whose residues $r_0$ and $r_1$ are
independent of $z$. It satisfies $\mathcal E(z,s)=\mathcal E(z,1-s)$. Define
the regularized function
$$\mathcal E_0(z,s):=\mathcal E(z,s)-\frac{r_0}{s}-\frac{r_1}{s-1},$$
using its holomorphic values at $s=0,1$. For every compact $K\subset\mathbb C$
there are constants $C_K,A_K$ such that for $x\in[-1/2,1/2]$, $y\ge1$, and
$s\in K$, $|\mathcal E_0(x+iy,s)|\le C_K(1+y)^{A_K}$. The function
$\mathcal E_0$ is jointly continuous in $(z,s)$ and entire in $s$ for each $z$.

## Statement references

[[def-euler-gamma-function|Euler's Gamma function]]

[[def-riemann-zeta-function|the Riemann zeta function]]

[[thm-primitive-dirichlet-l-functional-equation|the primitive principal-character functional equation]]

[[thm-primitive-dirichlet-l-analytic-continuation|the zeta continuation and pole set]]

## Facts & Assumptions

**Given:** $z=x+iy$ with $y>0$ and initially $\operatorname{Re}s>1$.

[F1] [[def-euler-gamma-function]] and [[lem-gamma-functional-equation-meromorphic-extension]]: $\Gamma(s)$ is the Euler integral on the right half-plane and has its meromorphic continuation with $\Gamma(s+1)=s\Gamma(s)$ away from its poles.

[F2] [[lem-fourier-transform-of-a-gaussian]]: for $t>0$ and $r\in\mathbb R$, $\int_{\mathbb R}e^{-tu^2}e^{-2\pi iru}\,du=\sqrt{\pi/t}\,e^{-\pi^2r^2/t}$.

[F3] [[def-completed-dirichlet-l-function]] and [[thm-primitive-dirichlet-l-functional-equation]]: for the primitive principal character modulo $1$, $\pi^{-w/2}\Gamma(w/2)\zeta(w)=\pi^{-(1-w)/2}\Gamma((1-w)/2)\zeta(1-w)$ as meromorphic functions.

[F4] [[thm-primitive-dirichlet-l-analytic-continuation]]: $\zeta$ has a meromorphic continuation with its only pole at $w=1$.

[F5] [[def-riemann-zeta-function]]: $\zeta(w)=\sum_{n\ge1}n^{-w}$ for $\operatorname{Re}w>1$, with the real-logarithm convention for positive integer powers.

[F6] [[cor-gamma-function-has-no-zeros]]: the meromorphic Gamma function has simple poles at the nonpositive integers and no zeros, so $1/\Gamma$ has simple zeros at precisely those integers.

[F7] [[def-cesaro-and-abel-means-of-a-fourier-series]]: for a continuous one-periodic function, the Cesàro means are finite weighted sums of its Fourier coefficients; their integrals may be taken as ordinary Riemann integrals, without a choice axiom.

[F8] [[thm-fejer-uniform-convergence-for-continuous-periodic-functions]]: the Cesàro means of a continuous one-periodic function converge uniformly to that function.

[F9] [[thm-maximum-modulus-principle-with-boundary-and-infinity-control]]: a holomorphic function on a bounded domain that extends continuously to its boundary and has modulus at most $M$ there has modulus at most $M$ inside.

[F10] [[thm-identity-theorem-holomorphic-functions]]: two holomorphic functions on a complex domain that agree on a set with an accumulation point in that domain agree everywhere.

## Proof

**Given:** The lattice sum defining $\mathcal E(z,s)$ and the facts [F1]–[F10].

1.1 The lattice sum converges absolutely for $\operatorname{Re}s>1$: the real-linear map $(m,n)\mapsto(mx+n,my)$ is invertible, so its norm is bounded below by a positive constant times $(m^2+n^2)^{1/2}$, and $\sum_{(m,n)\ne(0,0)}(m^2+n^2)^{-\sigma}$ converges for $\sigma>1$. For $\gamma=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in SL_2(\mathbb Z)$, the pair $(m,n)$ is permuted by an invertible integer change of variables; together with $\operatorname{Im}(\gamma z)=y/|cz+d|^2$, substitution in each summand proves $\mathcal E(\gamma z,s)=\mathcal E(z,s)$. [given, algebra]

2.1 Let $a_r(y,s)=\int_0^1\mathcal E(x+iy,s)e^{-2\pi irx}\,dx$, define $\sigma_t(n)=\sum_{d\mid n}d^t$, and set $K_\nu(u)=\frac12\int_0^\infty e^{-u(v+v^{-1})/2}v^\nu\,dv/v$. The terms with first lattice coordinate $m=0$ give $\pi^{-s}\Gamma(s)\zeta(2s)y^s$ in $a_0$. For $m\ge1$, pairing $(m,n)$ with $(-m,-n)$ cancels the factor $1/2$; splitting $n$ into residues modulo $m$ and setting $u=x+n/m$ gives $\pi^{-s}\Gamma(s)y^s\left(\int_{\mathbb R}(u^2+y^2)^{-s}e^{-2\pi iru}\,du\right)\sum_{m\ge1}m^{-2s}\sum_{a=0}^{m-1}e^{2\pi ira/m}$. The finite sum is $m$ when $m\mid r$ and zero otherwise, so the $m$-sum is $\zeta(2s-1)$ for $r=0$ and $\sigma_{1-2s}(|r|)$ for $r\ne0$. For $r=0$, inserting the Euler Gamma integral and applying [F2] at frequency zero gives $\sqrt\pi\,\Gamma(s-\tfrac12)y^{1-2s}/\Gamma(s)$, whence $a_0(y,s)=\pi^{-s}\Gamma(s)\zeta(2s)y^s+\pi^{1/2-s}\Gamma(s-\tfrac12)\zeta(2s-1)y^{1-s}$. For $r\ne0$, the same insertion and [F2], followed by $t=(\pi|r|/y)v$, give $a_r(y,s)=2|r|^{s-1/2}\sigma_{1-2s}(|r|)\sqrt y\,K_{s-1/2}(2\pi|r|y)$. [F1, F2, given, algebra, construct]

3.1 Substituting $w=2s-1$ in [F3] rewrites the second term of $a_0$ as $\pi^{s-1}\Gamma(1-s)\zeta(2-2s)y^{1-s}$; hence $a_0(y,s)=A(s)y^s+A(1-s)y^{1-s}$ for $A(s)=\pi^{-s}\Gamma(s)\zeta(2s)$, which is symmetric under $s\mapsto1-s$. Also $K_\nu=K_{-\nu}$ by $v\mapsto v^{-1}$, and $|r|^{s-1/2}\sigma_{1-2s}(|r|)=|r|^{1/2-s}\sigma_{2s-1}(|r|)$ by replacing each divisor $d$ by $|r|/d$. Thus every Fourier coefficient is symmetric under $s\mapsto1-s$. [F3, step 2.1, algebra]

4.1 On compact subsets of $z\in\mathbb H$ and $s\in\mathbb C$, the nonzero Fourier terms converge normally. If $|\operatorname{Re}\nu|\le M$ and $u\ge1$, write $S=v+v^{-1}\ge2$ in the $K_\nu$ integral; then $uS/2\ge u/4+S/4$, so $|K_\nu(u)|\le\frac12e^{-u/4}\int_0^\infty e^{-(v+v^{-1})/4}(v^M+v^{-M})\,dv/v$, whose integral is finite at $0$ and $\infty$. On a compact $s$-set, $|\sigma_{1-2s}(n)|\le\sum_{d=1}^n d^M\le n^{M+1}$, so the exponential bound gives normal convergence and entire dependence on $s$. The Fourier series equals the original continuous periodic function for $\operatorname{Re}s>1$: its coefficients come from step 2.1, so the difference has zero Fourier coefficients; [F7] makes every Cesàro mean zero, and [F8] makes their uniform limit the difference. Normal convergence also gives joint continuity of the continuation and entire dependence on $s$ for fixed $z$. By [F4] and [F6], the only possible poles of $A(s)$ are $0,1/2$ and the nonpositive integers from $\Gamma(s)$. At each negative integer $-j$ with $j\ge1$, [F3] and finiteness of $\zeta(1+2j)$ force $\zeta(-2j)=0$, canceling the Gamma pole. At $s=1/2$, the two terms $A(s)y^s$ and $A(1-s)y^{1-s}$ have opposite principal parts and equal limiting powers, so that pole cancels. Only simple poles at $0,1$ remain. The Fourier series supplies a meromorphic continuation; any two continuations agree for $\operatorname{Re}s>1$, and after multiplying their difference by $s(s-1)$ it is entire, so [F10] makes it zero. The coefficient symmetry in step 3.1 then proves the functional equation. [F3, F4, F6, F7, F8, F10, step 2.1, step 3.1, algebra]

4.2 At $s=0$, only the possible pole of $A(s)y^s$ contributes to the residue of $a_0$, and $y^s=1$ there; $A(1-s)$ is regular. At $s=1$, only the possible pole of $A(1-s)y^{1-s}$ contributes, and $y^{1-s}=1$ there; $A(s)$ is regular. The nonzero coefficients are entire by step 4.1, so the residues of $\mathcal E(z,s)$ at $0,1$ do not depend on $z$. [F3, F4, F6, step 2.1, step 4.1, algebra]

5.1 For compact $K\subset\mathbb C$, let $D_0,D_{1/2},D_1$ be the closed radius-$1/4$ disks centered at $0,1/2,1$ and put $\widetilde a_0(y,s)=a_0(y,s)-r_0/s-r_1/(s-1)$ with removable values filled in. By steps 4.1–4.2 this is holomorphic on each disk. Choose $B$ larger than the real parts of $s$ and $1-s$ on $K\cup D_0\cup D_{1/2}\cup D_1$. Outside the three disk interiors, the terms $A(s)y^s$ and $A(1-s)y^{1-s}$ are bounded by $C_Ky^B$ on the relevant compact set, and so are the subtracted residue terms for $y\ge1$; the same estimate holds on the three boundaries. For each fixed $y\ge1$, [F9] on each disk extends the boundary estimate to its interior. For $n\ne0$, step 4.1 gives $C_K\sqrt y\,n^{M+1}e^{-\pi n y/2}$; since $ny/2\ge y/4+n/4$ and $\sqrt y e^{-\pi y/4}$ is bounded, the nonzero-mode sum is bounded by $C_Ke^{-\pi y/4}\sum_{n\ge1}n^{M+1}e^{-\pi n/4}$. The regularized continuation and Fourier expansion are entire in $s$ and agree for $\operatorname{Re}s>1$, so [F10] makes them equal for all $s$. Therefore $\mathcal E_0$ has the stated uniform polynomial growth on $K$. [F4, F6, F9, F10, step 4.1, step 4.2, choose, algebra] ∎
