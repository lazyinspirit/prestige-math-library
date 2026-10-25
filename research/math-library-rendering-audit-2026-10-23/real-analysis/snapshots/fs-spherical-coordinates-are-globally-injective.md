---
id: fs-spherical-coordinates-are-globally-injective
kind: false-statement
title: "FALSE: spherical coordinates are globally injective"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-sine-and-cosine-derivatives,
       cor-trigonometric-parity-and-pythagorean-identity,
       thm-sine-cosine-zero-sets-and-fundamental-period,
       thm-quarter-turn-values-and-shift-formulas,
       def-jacobian-determinant-of-a-c-one-map,
       thm-ck-euclidean-maps-closed-under-algebra-and-composition,
       cor-differentiable-implies-continuous,
       def-pi-via-first-positive-cosine-zero]
justified_by: []
aliases: []
landmark: true
short: "Spherical coordinates are not globally injective"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, section 11.4 Complex exponential and trigonometric functions"
      url: "https://jirilebl.github.io/ra/realanal2.pdf"
pipeline_run: null
---

## Statement

**False claim.** The spherical-coordinate map

$$S(r,\phi,\theta)=\bigl(r\sin\phi\cos\theta,\ r\sin\phi\sin\theta,\ r\cos\phi\bigr)$$

is injective on
$[0,\infty)\times[0,\pi]\times[0,2\pi]$.

The angular seam identifies $\theta=0$ with $\theta=2\pi$. At either polar
angle, every azimuth represents the same point, and at radius zero both angles
are lost. The Jacobian determinant

$$\det DS(r,\phi,\theta)=r^2\sin\phi$$

vanishes on the zero-radius and polar-axis loci.

## Facts & Assumptions

**Given:** The map $S:\mathbb R^3\to\mathbb R^3$ displayed in the Statement and its restriction to $D=[0,\infty)\times[0,\pi]\times[0,2\pi]$.

[L1] The functions $\sin$ and $\cos$ are differentiable on $\mathbb R$, with $(\sin t)'=\cos t$ and $(\cos t)'=-\sin t$; also $\sin0=0$ and $\cos0=1$ ([[thm-sine-and-cosine-derivatives]]).

[L2] For every real $t$, $\sin^2t+\cos^2t=1$ ([[cor-trigonometric-parity-and-pythagorean-identity]]).

[L3] Sine vanishes exactly at the integer multiples of $\pi$, and both sine and cosine have period $2\pi$ ([[thm-sine-cosine-zero-sets-and-fundamental-period]]).

[L4] $\sin(\pi/2)=1$, $\cos(\pi/2)=0$, $\sin\pi=0$, and $\cos\pi=-1$ ([[thm-quarter-turn-values-and-shift-formulas]]).

[L5] For a $C^1$ map $g:\mathbb R^3\to\mathbb R^3$, its Jacobian matrix consists of its coordinate partial derivatives and its Jacobian determinant is $\det Dg$ ([[def-jacobian-determinant-of-a-c-one-map]]).

[L6] Finite componentwise products and composites of $C^1$ Euclidean maps are $C^1$ ([[thm-ck-euclidean-maps-closed-under-algebra-and-composition]]).

[L7] The number $\pi$ is positive ([[def-pi-via-first-positive-cosine-zero]]).

[L8] For a real-valued function on $A\subseteq\mathbb R$, differentiability at a limit point $c\in A$ implies continuity there ([[cor-differentiable-implies-continuous]]).

## Refutation

**Proof technique:** direct.

1.1 The two distinct points $(1,\pi/2,0)$ and $(1,\pi/2,2\pi)$ lie in $D$, and periodicity gives $S(1,\pi/2,0)=S(1,\pi/2,2\pi)=(1,0,0)$. [given, L1, L3, L4, L7]

1.2 At $\phi=0$, every $\theta\in[0,2\pi]$ gives $S(r,0,\theta)=(0,0,r)$; at $\phi=\pi$, every such $\theta$ gives $S(r,\pi,\theta)=(0,0,-r)$; and $S(0,\phi,\theta)=(0,0,0)$ for every pair of angles. [given, L1, L3, L4, algebra]

1.3 The coordinate functions of $S$ are finite products and composites of coordinate maps with sine and cosine; their displayed derivatives are continuous, so $S$ is $C^1$. [L1, L6, L8]

2.1 Direct partial differentiation gives the following. [step 1.3, L1, L5, algebra]

$$DS=\begin{pmatrix}\sin\phi\cos\theta&r\cos\phi\cos\theta&-r\sin\phi\sin\theta\\ \sin\phi\sin\theta&r\cos\phi\sin\theta&r\sin\phi\cos\theta\\ \cos\phi&-r\sin\phi&0\end{pmatrix}$$

3.1 Expanding the determinant in step 2.1 and using the Pythagorean identity gives $\det DS=r^2\sin\phi$. [step 2.1, L2, algebra]

4.1 Step 1.1 already refutes global injectivity. Steps 1.2 and 3.1 show the additional pole and zero-radius identifications and show that the derivative is singular there, since $r^2\sin\phi=0$ when $r=0$, $\phi=0$, or $\phi=\pi$. [step 1.1, step 1.2, step 3.1, L3] ∎

## Remarks

Restricting the radius away from zero, the polar angle away from its endpoints, and the azimuth to a half-open interval removes these particular identifications. The false claim fails because the full closed parameter domain retains every seam and collapsed angular coordinate.
