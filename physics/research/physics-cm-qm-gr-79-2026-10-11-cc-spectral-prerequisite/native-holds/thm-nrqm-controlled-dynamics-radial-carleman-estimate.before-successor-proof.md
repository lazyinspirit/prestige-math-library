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

[F2] Under $r=e^{-t}$, $u=r^{-1/2}v$, $w=e^{st}v$, the weighted integrals
$\|r^{-\tau}u\|^2=\int_0^\infty r^{2-2\tau}|u(r)|^2r^2dr$ and
$\|r^{-\tau+2}\Delta u\|^2$ transform into $e^{2st}$-weighted $L^2(dt)$
integrals of $w$ and of the transformed radial Laplacian, whose transformed
multiplier on degree-$l$ harmonics is $(\partial_t-s)^2-(l+\tfrac12)^2$; this is
the change-of-variables identity computed from $-\Delta u=r^{-2}\partial_r(-r^2\partial_ru)+l(l+1)r^{-2}u$ and $r^2dr=e^{-3t}dt$ ([[thm-plancherel]], algebra).

[F3] One-dimensional Fourier calculus: for $w\in C_c^\infty(\mathbb R)$ the Fourier transform of $(\partial_t-s)^2w$ is $(i\xi-s)^2\widehat w(\xi)$, and Plancherel gives $\|(\partial_t-s)^2w\|_{L^2(dt)}^2=\int_{\mathbb R}|i\xi-s|^4|\widehat w(\xi)|^2d\xi$; the algebraic identity $|(i\xi-s)^2-(l+\tfrac12)^2|^2=[\xi^2+(s-l-\tfrac12)^2][\xi^2+(s+l+\tfrac12)^2]$ holds for real $\xi$ ([[thm-plancherel]], algebra).

## Proof

1.1 [Multiplier lower bound] Fix integer $l\ge0$. In the factorization of [F3] the second factor is at least $(s+l+\tfrac12)^2\ge s^2$; the first factor is at least $|s-l-\tfrac12|^2\ge1/4$, since an integer $s$ differs from the half-integer $l+\tfrac12$ by at least $\tfrac12$. Hence $|(i\xi-s)^2-(l+\tfrac12)^2|^2\ge s^2\cdot\tfrac14$, so the quotient $\int|w|^2dt/\int|[(\partial_t-s)^2-(l+\tfrac12)^2]w|^2dt$ is at most $4/s^2$. [F3, algebra]

2.1 [Summing the channels] By [F2], for each $(l,m)$ channel the quotient of the weighted norms equals the one-dimensional quotient of step 1.1 applied to $w_{lm}:=e^{st}r^{-1/2}u_{lm}$, so $\|r^{-\tau}u_{lm}\|^2\le\frac4{s^2}\|r^{-\tau+2}\Delta u_{lm}\|^2$. The sums over $(l,m)$ are finite for $u$ supported away from the origin (only finitely many spherical coefficients are nonzero), and [F1] identifies the sum of the channelled norms with the full $L^2(\mathbb R^3)$ norms; summing the displayed inequalities proves the estimate. [step 1.1, F1, F2, algebra]

3.1 [Extension] On a fixed compact set away from the origin the weight $r^{-\tau+2}$ and its inverse powers are bounded, so $C_c^\infty(\mathbb R^3\setminus\{0\})$ functions approximate every compactly supported $H^2$ function vanishing near $0$ in the norm $\|r^{-\tau+2}\Delta\cdot\|+\|\cdot\|$, and inequality passes to the limit. [step 2.1, F1, algebra] ∎
