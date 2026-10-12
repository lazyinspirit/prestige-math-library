---
id: thm-nrqm-controlled-dynamics-radial-carleman-estimate
aliases: [nrqm-controlled-dynamics-radial-carleman-estimate]
kind: theorem
domain: mathematics
title: "Radial Carleman estimate"
status: draft
origin: pipeline
dependency_level: 5
deps: [thm-nrqm-orbital-and-spin-sphere-onb, thm-nrqm-orbital-and-spin-sphere-laplacian-diagonal-domain, thm-plancherel, def-sobolev-space-wkp-and-its-norm, lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set, def-hilbert-space, def-countable-choice]
dependency_roles:
  thm-nrqm-orbital-and-spin-sphere-onb: mathematical-premise
  thm-nrqm-orbital-and-spin-sphere-laplacian-diagonal-domain: mathematical-premise
  thm-plancherel: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "D. Jerison and C. E. Kenig, Unique continuation and absence of positive eigenvalues for Schrodinger operators, Annals of Mathematics 121 (1985) 463-494 (Carleman estimates for the Laplacian; primary research source)"
      url: "https://doi.org/10.2307/1971319"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Chapter 7 pp. 161-172 (polar coordinates and the Laplacian in three dimensions)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $s\ge1$ be
an integer, $\tau:=s+1$, and let $u\in C_c^\infty(\mathbb R^3\setminus\{0\})$
([[lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set]]).
Write $r=|x|$ and $\Delta$ for the Laplacian. Then
$$\bigl\|r^{-\tau}u\bigr\|_{L^2(\mathbb R^3)}\le\frac2s\bigl\|r^{-\tau+2}\Delta u\bigr\|_{L^2(\mathbb R^3)}.$$
The inequality extends to every compactly supported $H^2$ function that vanishes
in a neighborhood of the origin.

## Facts & Assumptions

**Given:** the integer $s\ge1$, $\tau=s+1$, and $u\in C_c^\infty(\mathbb R^3\setminus\{0\})$.

[F1] Spherical decomposition: $(Y_{lm})$ is a complete orthonormal family of $L^2(S^2,\sigma)$ and the polar unitary $\psi\mapsto(u_{lm})$, $u_{lm}(r)=r\int_{S^2}\psi(r\Omega)\overline{Y_{lm}(\Omega)}d\sigma(\Omega)$, identifies $L^2(\mathbb R^3)$ with $\bigoplus_{l,m}L^2((0,\infty),dr)$; in the $(l,m)$ channel the Laplacian acts as $-\Delta u_{lm}=-u_{lm}''+l(l+1)r^{-2}u_{lm}$, and the Laplace-Beltrami operator has eigenvalue $-l(l+1)$ on $Y_{lm}$ ([[thm-nrqm-orbital-and-spin-sphere-onb]], [[thm-nrqm-orbital-and-spin-sphere-laplacian-diagonal-domain]]).

[F2] Write the physical spherical coefficient as $\phi_{lm}(r)=u_{lm}(r)/r$. Under $t=-\log r$, put $v_{lm}(t)=r^{1/2}\phi_{lm}(r)=r^{-1/2}u_{lm}(r)$ and $w_{lm}(t)=e^{st}v_{lm}(t)$. Direct differentiation of the radial expression gives $\Delta\phi_{lm}=r^{-5/2}[\partial_t^2-(l+1/2)^2]v_{lm}$. Since the physical radial measure is $r^2dr=r^3dt$ after reversing the bounds and $\tau=s+1$, the exact weighted norms are $\|r^{-\tau}u\|_2^2=\sum_{l,m}\|w_{lm}\|_{L^2(dt)}^2$ and $\|r^{-\tau+2}\Delta u\|_2^2=\sum_{l,m}\|[(\partial_t-s)^2-(l+1/2)^2]w_{lm}\|_{L^2(dt)}^2$. Equivalently the first radial integral in the reduced coefficient is $\int r^{-2\tau}|u_{lm}(r)|^2dr$, with no second radial Jacobian. The sums follow from angular Parseval in [F1] and nonnegative integration; they need not be finite ([[thm-plancherel]], algebra).

[F3] One-dimensional Fourier calculus: for $w\in C_c^\infty(\mathbb R)$ the Fourier transform of $(\partial_t-s)^2w$ is $(i\xi-s)^2\widehat w(\xi)$, and Plancherel gives $\|(\partial_t-s)^2w\|_{L^2(dt)}^2=\int_{\mathbb R}|i\xi-s|^4|\widehat w(\xi)|^2d\xi$; the algebraic identity $|(i\xi-s)^2-(l+\tfrac12)^2|^2=[\xi^2+(s-l-\tfrac12)^2][\xi^2+(s+l+\tfrac12)^2]$ holds for real $\xi$ ([[thm-plancherel]], algebra).

## Proof

1.1 [Multiplier lower bound] Fix integer $l\ge0$. In the factorization of [F3] the second factor is at least $(s+l+\tfrac12)^2\ge s^2$; the first factor is at least $|s-l-\tfrac12|^2\ge1/4$, since an integer $s$ differs from the half-integer $l+\tfrac12$ by at least $\tfrac12$. Hence $|(i\xi-s)^2-(l+\tfrac12)^2|^2\ge s^2\cdot\tfrac14$, so the quotient $\int|w|^2dt/\int|[(\partial_t-s)^2-(l+\tfrac12)^2]w|^2dt$ is at most $4/s^2$. [F3, algebra]

2.1 [Summing the channels] Each coefficient of a smooth function supported in an annulus is smooth with the same compact radial support, so step 1.1 applies to $w_{lm}$ defined in [F2]. It gives $\|w_{lm}\|_2^2\le(4/s^2)\|[(\partial_t-s)^2-(l+1/2)^2]w_{lm}\|_2^2$. Sum over the countable family of channels using monotone convergence for nonnegative partial sums. The exact norm identities of [F2] identify both sums with the full weighted physical norms, proving $\|r^{-\tau}u\|_2^2\le(4/s^2)\|r^{-\tau+2}\Delta u\|_2^2$; taking square roots proves the estimate. Compact radial support does not imply finite angular support, and no such assertion is used. [step 1.1, F1, F2, algebra]

3.1 [Extension] On a fixed compact set away from the origin the weight $r^{-\tau+2}$ and its inverse powers are bounded, so $C_c^\infty(\mathbb R^3\setminus\{0\})$ functions approximate every compactly supported $H^2$ function vanishing near $0$ in the norm $\|r^{-\tau+2}\Delta\cdot\|+\|\cdot\|$, and inequality passes to the limit. [step 2.1, F1, algebra] ∎
