---
id: ex-polar-coordinates-as-a-local-diffeomorphism
kind: example
title: "Polar coordinates are a local diffeomorphism away from zero radius"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-injective-regular-c-one-map-is-a-diffeomorphism-onto-its-image, thm-euclidean-inverse-function-theorem, def-local-orientation-of-a-regular-c-one-map, thm-sine-and-cosine-derivatives, thm-algebra-of-derivatives, cor-trigonometric-parity-and-pythagorean-identity, thm-sine-cosine-zero-sets-and-fundamental-period, thm-sine-and-cosine-parametrize-the-unit-circle]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, Exercise 8.5.8"
      url: "https://jirilebl.github.io/ra/realanal2.pdf"
    - title: "University of Toronto MAT237, §3.3"
      url: "https://www.math.utoronto.ca/courses/mat237y1/20199/notes/Chapter3/S3.3.html"
pipeline_run: null
---

## Example

For

$$P(r,\theta)=(r\cos\theta,r\sin\theta),$$

the restriction to either half-plane $r>0$ or $r<0$ is a local diffeomorphism. It is locally orientation-preserving when $r>0$ and locally orientation-reversing when $r<0$. On $(0,\infty)\times(-\pi,\pi)$ it is a diffeomorphism onto its open image, but on $(0,\infty)\times\mathbb R$ it is not injective.

## Facts & Assumptions

**Given:** The polar map above, the inverse-function consequence [[thm-injective-regular-c-one-map-is-a-diffeomorphism-onto-its-image]], the Pythagorean identity [[cor-trigonometric-parity-and-pythagorean-identity]], the fundamental period of sine and cosine [[thm-sine-cosine-zero-sets-and-fundamental-period]], and their bijective parametrization of the unit circle on a half-open interval [[thm-sine-and-cosine-parametrize-the-unit-circle]].

[L1] The functions $\sin$ and $\cos$ are differentiable on $\mathbb R$, with $(\sin x)'=\cos x$ and $(\cos x)'=-\sin x$ ([[thm-sine-and-cosine-derivatives]]).

[L2] A regular $C^1$ map is locally orientation-preserving where $\det Df>0$ and locally orientation-reversing where $\det Df<0$ ([[def-local-orientation-of-a-regular-c-one-map]]).

[L3] Products of differentiable real functions are differentiable and satisfy the product rule ([[thm-algebra-of-derivatives]]).

[L4] A $C^1$ Euclidean map with invertible derivative at a point restricts to a $C^1$ diffeomorphism between neighbourhoods of that point and its image ([[thm-euclidean-inverse-function-theorem]]).

## Verification

**Proof technique:** direct.

1.1 By [L1] and [L3], $$DP(r,\theta)=\begin{pmatrix}\cos\theta&-r\sin\theta\\ \sin\theta&r\cos\theta\end{pmatrix},\qquad\det DP(r,\theta)=r.$$ Thus [L4] and [L2] give the asserted local diffeomorphism and orientation wherever $r\ne0$. [L1, L2, L3, L4, algebra]

2.1 On the principal strip, equality of two images first gives equality of the positive radii by the Pythagorean identity. Translating each negative angle by $2\pi$ puts both angles into the half-open interval of the unit-circle parametrization without changing sine or cosine; its injectivity then gives equality of the original angles. The injective regular-map theorem makes this restriction a diffeomorphism onto its open image. On the full positive-radius domain, $(r,\theta)$ and $(r,\theta+2\pi)$ are distinct with the same image, so global injectivity fails there. [step 1.1, given, algebra] ∎
