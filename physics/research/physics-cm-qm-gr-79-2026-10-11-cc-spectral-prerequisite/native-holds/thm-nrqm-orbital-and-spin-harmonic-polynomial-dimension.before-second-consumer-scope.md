---
id: thm-nrqm-orbital-and-spin-harmonic-polynomial-dimension
aliases: [nrqm-orbital-and-spin-harmonic-polynomial-dimension]
kind: theorem
domain: mathematics
title: "Harmonic polynomial dimension"
status: draft
origin: pipeline
dependency_level: 6
deps: [thm-nrqm-orbital-and-spin-associated-polynomial-normalization, thm-nrqm-orbital-and-spin-sphere-onb, def-homogeneous-polynomial-and-homogeneous-ideal, def-monomials-multidegree-and-total-degree, def-laplacian-of-a-c2-function, def-directional-and-partial-derivatives, thm-algebra-of-derivatives, thm-chain-rule, thm-stars-and-bars, def-dimension, def-linear-map, def-linear-subspace, def-linear-basis, def-inner-product-space, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-orthogonality-and-orthogonal-complement, def-self-adjoint-and-normal-endomorphism, cor-inner-product-induces-a-norm, thm-nrqm-oscillator-multidimensional-oscillator-completeness, thm-nrqm-oscillator-oscillator-scaling-and-exact-realization, thm-nrqm-oscillator-hermite-recurrence, thm-nrqm-oscillator-hermite-orthogonality, def-factorial-and-falling-factorial, def-natural-numbers, def-finite-sum-in-a-commutative-monoid, def-countable-choice, thm-nrqm-orbital-and-spin-sphere-laplacian-diagonal-domain]
dependency_roles:
  thm-nrqm-orbital-and-spin-associated-polynomial-normalization: mathematical-premise
  thm-nrqm-orbital-and-spin-sphere-onb: mathematical-premise
  def-homogeneous-polynomial-and-homogeneous-ideal: mathematical-premise
  def-monomials-multidegree-and-total-degree: mathematical-premise
  def-laplacian-of-a-c2-function: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-stars-and-bars: mathematical-premise
  def-dimension: mathematical-premise
  def-linear-map: mathematical-premise
  def-linear-subspace: mathematical-premise
  def-linear-basis: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  def-orthogonality-and-orthogonal-complement: mathematical-premise
  def-self-adjoint-and-normal-endomorphism: mathematical-premise
  cor-inner-product-induces-a-norm: mathematical-premise
  thm-nrqm-oscillator-multidimensional-oscillator-completeness: mathematical-premise
  thm-nrqm-oscillator-oscillator-scaling-and-exact-realization: mathematical-premise
  thm-nrqm-oscillator-hermite-recurrence: mathematical-premise
  thm-nrqm-oscillator-hermite-orthogonality: mathematical-premise
  def-factorial-and-falling-factorial: mathematical-premise
  def-natural-numbers: mathematical-premise
  def-finite-sum-in-a-commutative-monoid: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-nrqm-orbital-and-spin-sphere-laplacian-diagonal-domain: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "S. Axler, P. Bourdon, W. Ramey, Harmonic Function Theory, 2nd edition, author-hosted full text, Chapter 5, Proposition 5.5 and Proposition 5.8 (decomposition of homogeneous polynomials and dimension 2m+1), printed pp. 78-82"
      url: "https://www.axler.net/HFT.pdf"
    - title: "MIT 8.05 Quantum Physics II (Fall 2013), Chapter 9 'Angular Momentum', §6 pp. 28-32 (three-dimensional isotropic oscillator and its angular-momentum levels)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/e765f050b2fd50a9d87d2ae801e9c52f_MIT8_05F13_Chap_09.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). For $k\in\mathbb N$ let $\mathcal P_k$ denote the
real vector space of homogeneous polynomial functions of degree $k$ on $\mathbb R^3$, with $\mathcal P_k:=\{0\}$
for $k<0$ ([[def-homogeneous-polynomial-and-homogeneous-ideal]],
[[def-monomials-multidegree-and-total-degree]]), let $r^2(x):=x_1^2+x_2^2+x_3^2$, let
$\Delta:=\partial_1^2+\partial_2^2+\partial_3^2$ be the Laplacian
([[def-laplacian-of-a-c2-function]]), and put $\mathcal H_k:=\{p\in\mathcal P_k:\Delta p=0\}$. Let $Y_{lm}$ be
the spherical functions of [[thm-nrqm-orbital-and-spin-associated-polynomial-normalization]]. Then:

(a) for every $l\ge2$ the Laplacian maps $\mathcal P_l$ onto $\mathcal P_{l-2}$ and
$\mathcal P_l=\mathcal H_l\oplus r^2\mathcal P_{l-2}$ (direct sum of vector spaces);

(b) $\dim\mathcal P_l=\binom{l+2}{2}=\frac{(l+1)(l+2)}2$ and $\dim\mathcal H_l=2l+1$;

(c) for each $l$ and $m\ge0$ the function
$$h_{lm}(x):=b_{lm}(2\pi)^{-1/2}(x_1+ix_2)^m\,r^{l-m}\Bigl(\frac{d^mP_l}{dt^m}\Bigr)\Bigr|_{t=x_3/r}$$
(extended by $0$ at the origin, and with $b_{lm}$ the normalizations of
[[thm-nrqm-orbital-and-spin-associated-polynomial-normalization]]) is a complex homogeneous polynomial of degree
$l$ whose real and imaginary parts are harmonic, $h_{lm}$ does not vanish identically, and
$Y_{lm}=h_{lm}|_{S^2}$; setting $h_{l,-m}:=(-1)^m\overline{h_{lm}}$, the restrictions
$h_{lm}|_{S^2}=Y_{lm}$ for $-l\le m\le l$ form a basis of the space of restrictions of $\mathcal H_l$, so that
$2l+1=\dim\mathcal H_l$ and the restriction map $\mathcal H_l\to C(S^2)$ is injective;

(d) let $\omega,m_0,\hbar>0$, $\ell=\sqrt{\hbar/(m_0\omega)}$, let $\psi_N$, $N\in\mathbb N^3$, be the
orthonormal eigenbasis of
[[thm-nrqm-oscillator-multidimensional-oscillator-completeness]] with $H\psi_N=\hbar\omega(N_1+N_2+N_3+\tfrac32)\psi_N$,
and for $M\in\mathbb N$ let $E_M:=\operatorname{span}\{\psi_N:N_1+N_2+N_3=M\}$. Then:

(d1) every element of $E_M$ is of the form $P(x)e^{-r^2/(2\ell^2)}$ for a unique polynomial $P$ of degree at
most $M$, and the map $\Phi_M:E_M\to\mathcal P_M$ assigning to such an element the top-degree part of $P$ is a
linear isomorphism;

(d2) for every rotation matrix $R\in SO(3)$, defining $\pi(R)f:=f(R^{-1}\cdot)$ on $E_M$ and
$\rho(R)p:=p(R^{-1}\cdot)$ on $\mathcal P_M$, one has $\Phi_M\pi(R)=\rho(R)\Phi_M$;

(d3) consequently $E_M=\bigoplus_{j=0}^{\lfloor M/2\rfloor}\Phi_M^{-1}(r^{2j}\mathcal H_{M-2j})$ and the orbital
degrees occurring in the $M$-th oscillator level are exactly $l=M,M-2,M-4,\dots\ge0$, each occurring once; in
particular the level does not contain every $l\le M$, and
$\sum_{j\ge0}\dim\mathcal H_{M-2j}=\binom{M+2}{2}$ equals the multiplicity of the level.

All claims are mathematical statements about polynomials and the realised oscillator; no physical
interpretation of the levels or of the rotation action is asserted.

## Facts & Assumptions

**Given:** the spaces $\mathcal P_k,\mathcal H_k$; the functions $Y_{lm}$ and constants $b_{lm}$; the realised oscillator data $\psi_N$, $E_M$, $\ell$.

[F1] The Laplacian is linear and satisfies the product rule $\Delta(fg)=f\Delta g+2\nabla f\cdot\nabla g+g\Delta f$; on $r^2$ one has $\Delta r^2=6$ and $\nabla r^2=2x$, and Euler's identity $x\cdot\nabla q=kq$ holds for $q\in\mathcal P_k$; these are computed by the algebra of derivatives and the chain rule ([[def-laplacian-of-a-c2-function]], [[def-directional-and-partial-derivatives]], [[thm-algebra-of-derivatives]], [[thm-chain-rule]], [[def-homogeneous-polynomial-and-homogeneous-ideal]]).

[F2] $\dim\mathcal P_l$ is the number of monomials $x^\alpha$ with $|\alpha|=l$ in three variables, namely $\binom{l+2}{2}$, and the number of multi-indices with $|\alpha|\le D$ is $\binom{D+3}{3}$; $\Delta$ maps $\mathcal P_l$ into $\mathcal P_{l-2}$ ([[def-monomials-multidegree-and-total-degree]], [[thm-stars-and-bars]]).

[F3] $w_{lm}=(-1)^m(1-t^2)^{m/2}P_l^{(m)}$ satisfies the associated Legendre equation and $Y_{lm}(\theta,\varphi)=b_{lm}w_{lm}(\cos\theta)e^{im\varphi}/\sqrt{2\pi}$ with $Y_{l,-m}=(-1)^m\overline{Y_{lm}}$; the family $(Y_{lm})$ is complete orthonormal in $L^2(S^2,\sigma)$ ([[thm-nrqm-orbital-and-spin-associated-polynomial-normalization]], [[thm-nrqm-orbital-and-spin-sphere-onb]]).

[F4] $\psi_N(x)=\prod_{j=1}^3\psi^{(j)}_{N_j}(x_j)$ with $\psi^{(j)}_n(x_j)=\ell^{-1/2}g_n(x_j/\ell)$ and $g_n=H_ng_0/\sqrt{2^nn!}$; $H_n$ has degree $n$ and leading coefficient $2^n$; $g_0(y)=\pi^{-1/4}e^{-y^2/2}$; for distinct $N,N'$ the eigenvalues $E_N\ne E_{N'}$ and $(H-E_N)\psi_N=0$ with $H$ self-adjoint; the multiplicity of the level $M$ is $\binom{M+2}{2}$ ([[thm-nrqm-oscillator-multidimensional-oscillator-completeness]], [[thm-nrqm-oscillator-oscillator-scaling-and-exact-realization]], [[thm-nrqm-oscillator-hermite-recurrence]], [[thm-nrqm-oscillator-hermite-orthogonality]], [[def-factorial-and-falling-factorial]]).

[F5] Eigenspaces of a self-adjoint operator for distinct eigenvalues intersect trivially, and a homogeneous polynomial vanishing on $S^2$ is zero: for $x\ne0$, $p(x)=|x|^lp(x/|x|)=0$ ([[def-self-adjoint-and-normal-endomorphism]], [[def-orthogonality-and-orthogonal-complement]], [[def-homogeneous-polynomial-and-homogeneous-ideal]]).



## Proof

1.1 [(a), the surjectivity recursion] Let $q\in\mathcal P_{l-2}$. By [F1] applied to $r^2q$, using Euler's identity with $k=l-2$, $\Delta(r^2q)=6q+4x\cdot\nabla q+r^2\Delta q=(6+4(l-2))q+r^2\Delta q=(4l-2)q+r^2\Delta q$. Define $h:=\sum_{j=0}^{\lfloor l/2\rfloor}a_jr^{2j}\Delta^jq$ with $a_0:=1$ and the recursion $a_{j+1}:=-a_j/\bigl(2(j+1)(2l-2j-1)\bigr)$; the coefficient $2(j+1)(2l-2j-1)$ is nonzero, and the sum terminates because $\Delta^jq$ vanishes for $2j>l-2$. Applying the displayed identity with $q$ replaced by $\Delta^jq$ (a polynomial of degree $l-2-2j$, for which the same computation gives $\Delta(r^{2(j+1)}\Delta^jq)=2(j+1)(2l-2j-1)r^{2j}\Delta^jq+r^{2(j+1)}\Delta^{j+1}q$) shows inductively that all coefficients of $r^{2j}\Delta^jq$ in $\Delta h$ except the top one cancel, and the top term contains $\Delta^{j+1}q$ with $2(j+1)>l$, hence is zero; so $\Delta h=q$. Thus $\Delta|_{\mathcal P_l}$ is onto $\mathcal P_{l-2}$, and by [F2] it maps into it, hence exactly onto it. [F1, F2, algebra]

1.2 [(c), polynomiality] Let $m\ge0$, put $Q:=P_l^{(m)}$ (a polynomial of degree $l-m$) and let $h$ be the displayed function; on $x\ne0$, $x_1+ix_2=r\sin\theta e^{i\varphi}$ and $x_3/r=\cos\theta$, so $h(x)=b_{lm}(2\pi)^{-1/2}(\sin\theta)^me^{im\varphi}r^lQ(\cos\theta)=r^lY_{lm}(\theta,\varphi)$ by [F3]; in particular $h\ne0$. To see that $h$ is a polynomial, write $Q(t)=\sum_{k}c_kt^k$; then $r^{l-m}Q(x_3/r)=\sum_kc_kx_3^kr^{l-m-k}$, a polynomial, and $(x_1+ix_2)^m$ times it is a polynomial; hence $h$ is a complex homogeneous polynomial of degree $l$ whose restriction to $S^2$ is $Y_{lm}$ and whose real and imaginary parts are real homogeneous polynomials of degree $l$. [F3, algebra]

1.3 [(d1) polynomial representation] By [F4], $\psi_N=\prod_j\ell^{-1/2}H_{N_j}(x_j/\ell)g_0(x_j/\ell)/\sqrt{2^{N_j}N_j!}=Q_N(x)e^{-r^2/(2\ell^2)}$ with $Q_N(x):=\prod_jc_{N_j}H_{N_j}(x_j/\ell)$ a real polynomial of degree $N_1+N_2+N_3=M$ whose top-degree part is $\prod_jc_{N_j}2^{N_j}\ell^{-N_j}x_j^{N_j}$, a nonzero multiple of the monomial $x_1^{N_1}x_2^{N_2}x_3^{N_3}$; the monomials obtained from distinct $N$ with $|N|=M$ are distinct. Hence every $f\in E_M$ is $P e^{-r^2/(2\ell^2)}$ with $P$ a polynomial of degree at most $M$ (the polynomial $P$ is unique because $e^{-r^2/(2\ell^2)}>0$), and $\Phi_M$ assigns to $f$ the top-degree part of $P$; $\Phi_M$ is linear and its value on $\psi_N$ is the nonzero monomial multiple displayed. [F4, algebra]

2.1 [(a), the direct sum] Let $p\in\mathcal P_l$; by step 1.1 choose $q\in\mathcal P_{l-2}$ with $\Delta(r^2q)=\Delta p$, possible because $\Delta p\in\mathcal P_{l-2}$ lies in the image of the operator $q\mapsto\Delta(r^2q)$, which by the displayed formula differs from $\Delta$ on $\mathcal P_{l-2}$ by multiplication by the nonzero scalar $4l-2$ modulo the higher-degree term: precisely, if $\Delta(r^2q)=0$ then $q=0$ by the triangular recursion of step 1.1 reversed, so $q\mapsto\Delta(r^2q)$ is injective and, dimension counts never entering, the same recursion solves $\Delta(r^2q)=w$ for any $w\in\mathcal P_{l-2}$ by the same argument with $w$ in place of $q$; applying it to $w=\Delta p$ produces $q$ with $\Delta(p-r^2q)=0$. Hence every $p$ is $h+r^2q$ with $h\in\mathcal H_l$; if $h=r^2q$ with $\Delta h=0$ as well, then $r^2q\in\mathcal P_l$ is harmonic, so the intersection is $\{0\}$ by the same injectivity, or directly: $\Delta(r^2q)=0$ forces $q=0$ by the recursion. Hence $\mathcal P_l=\mathcal H_l+r^2\mathcal P_{l-2}=\mathcal H_l\oplus r^2\mathcal P_{l-2}$. [step 1.1, F1, algebra]

2.2 [(c), harmonicity] For $x\ne0$ write $h(x)=r^l\psi(\theta,\varphi)$ with $\psi=Y_{lm}$; the polar decomposition $\Delta h=\partial_r^2h+\frac2r\partial_rh+\frac1{r^2}\Delta_{S^2}h$ with $\Delta_{S^2}=\frac1{\sin\theta}\partial_\theta(\sin\theta\,\partial_\theta)+\frac1{\sin^2\theta}\partial_\varphi^2$ gives $\Delta h=r^{l-2}\bigl[l(l+1)\psi+\Delta_{S^2}\psi\bigr]$, and the same computation as in the proof of [[thm-nrqm-orbital-and-spin-sphere-laplacian-diagonal-domain]] shows $\Delta_{S^2}Y_{lm}=-l(l+1)Y_{lm}$, so $\Delta h=0$ on $\mathbb R^3\setminus\{0\}$; $h$ is a polynomial, so $\Delta h$ is a polynomial vanishing on a nonempty open set, hence identically zero. For negative $m$ the same holds by conjugation. [step 1.2, F3, F1, algebra]

2.3 [(d1) isomorphism] Injectivity: if $\Phi_M(f)=0$, then $\deg P\le M-1$, so $f=Qe^{-r^2/(2\ell^2)}$ with $\deg Q\le M-1$; the space of such functions has dimension equal to the number of multi-indices with $|N|\le M-1$, which is $\sum_{K\le M-1}\binom{K+2}{2}=\binom{M+2}{3}$ by [F2] and [F4], the same as the dimension of $\{Q:\deg Q\le M-1\}$ (the map $Q\mapsto Qe^{-r^2/(2\ell^2)}$ is injective), and it contains the span of $\{\psi_K:|K|\le M-1\}$; both spaces have dimension $\binom{M+2}3$ by [F4], so $f$ lies in $\bigoplus_{K\le M-1}E_K$, while $f\in E_M$ and eigenspaces for distinct eigenvalues of the self-adjoint $H$ intersect trivially by [F5], so $f=0$. Surjectivity: $\dim E_M=\binom{M+2}2$ by [F4] equals $\dim\mathcal P_M$ by [F2], so the injective linear $\Phi_M$ is an isomorphism. [step 1.3, F2, F4, F5, algebra]

2.4 [(d2)] For $f=Pe^{-r^2/(2\ell^2)}\in E_M$ and a rotation $R$, $\pi(R)f(x)=f(R^{-1}x)=P(R^{-1}x)e^{-|R^{-1}x|^2/(2\ell^2)}=P(R^{-1}x)e^{-r^2/(2\ell^2)}$ because $R$ preserves the Euclidean norm; the top-degree part of the polynomial $x\mapsto P(R^{-1}x)$ is $(\text{top part of }P)(R^{-1}x)$ (a linear substitution preserves degrees and cannot cancel the top part, being invertible), so $\Phi_M\pi(R)f=\rho(R)\Phi_Mf$. [step 1.3, algebra]

3.1 [(b)] By [F2], $\dim\mathcal P_l=\binom{l+2}{2}$; the decomposition of step 2.1 gives $\dim\mathcal H_l=\dim\mathcal P_l-\dim\mathcal P_{l-2}=\binom{l+2}2-\binom l2=\frac{(l+2)(l+1)-l(l-1)}2=2l+1$. [step 2.1, F2, algebra]

4.1 [(c), basis and injectivity] The functions $h_{lm}|_{S^2}=Y_{lm}$ for $-l\le m\le l$ are orthonormal in $L^2(S^2,\sigma)$ by [F3], hence linearly independent, and they lie in the space of restrictions of $\mathcal H_l$ by step 2.2; the restriction map $\mathcal H_l\to C(S^2)$ is injective by [F5], so $2l+1\le\dim\mathcal H_l$, and by step 3.1 equality holds; hence $\{h_{lm}\}$ is a basis both of the restriction space and, through the injective restriction map, of $\mathcal H_l$. [step 3.1, step 1.2, step 2.2, F3, F5, algebra]

5.1 [(d3)] Iterating step 2.1, $\mathcal P_M=\mathcal H_M\oplus r^2\mathcal H_{M-2}\oplus\cdots\oplus r^{2j}\mathcal H_{M-2j}\oplus\cdots$ with $r^{2j}\mathcal H_{M-2j}=\{0\}$ when $M-2j<0$: indeed, applying the decomposition to $\mathcal P_{M-2},\mathcal P_{M-4},\dots$ and substituting yields a direct sum of the harmonic pieces, and the maps $p\mapsto r^{2j}p$ are injective with images meeting only at $0$ because the degrees of the harmonic summands differ after factoring $r^{2j}$. Applying the isomorphism $\Phi_M$ of step 2.3, $E_M=\bigoplus_{j=0}^{\lfloor M/2\rfloor}\Phi_M^{-1}(r^{2j}\mathcal H_{M-2j})$, and each summand has dimension $\dim\mathcal H_{M-2j}=2(M-2j)+1$ by step 3.1. Hence the orbital degrees in the $M$-th level are the numbers $M,M-2,\dots\ge0$, each once — in particular not every $l\le M$ occurs, and $l$ with $l>M$ or $l\not\equiv M\pmod 2$ does not occur — and the dimension identity $\sum_{j=0}^{\lfloor M/2\rfloor}(2(M-2j)+1)=\binom{M+2}2$ follows by direct evaluation of the arithmetic series for $M=2K$ and $M=2K+1$. [step 2.3, step 2.4, step 3.1, algebra] ∎
