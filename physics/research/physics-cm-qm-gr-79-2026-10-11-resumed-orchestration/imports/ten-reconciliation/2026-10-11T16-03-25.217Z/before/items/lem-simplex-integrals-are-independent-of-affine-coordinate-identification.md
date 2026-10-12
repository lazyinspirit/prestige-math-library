---
id: "lem-simplex-integrals-are-independent-of-affine-coordinate-identification"
kind: "lemma"
title: "Simplex integrals are independent of affine coordinate identification"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-integral-of-a-form-over-a-smooth-singular-simplex","thm-injective-c-one-images-of-compact-jordan-sets-are-jordan","thm-change-of-variables-for-compact-jordan-sets","def-pullback-of-a-differential-form"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Peter S. Park, Proof of de Rham's Theorem
      url: https://people.math.harvard.edu/~pspark/derham.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

The integral of a smooth $k$-form over a smooth singular $k$-simplex is unchanged when its affine span is identified with $\mathbb R^k$ by any orientation-preserving affine coordinates. It is also independent of the neighbourhood extension used to form the pullback.

## Facts & Assumptions

[F1] [[def-integral-of-a-form-over-a-smooth-singular-simplex]] defines integration after choosing a smooth neighbourhood extension and supplies compact Jordan integrability in the standard affine coordinates.

[F2] [[thm-injective-c-one-images-of-compact-jordan-sets-are-jordan]] applies to any invertible affine map on $\mathbb R^k$, for $k\ge1$.

[F3] [[thm-change-of-variables-for-compact-jordan-sets]] gives the integral transformation with the absolute Jacobian determinant.

[F4] [[def-pullback-of-a-differential-form]] defines pullback by evaluating the form on the images of the input tangent vectors.

## Proof

**Given:** A simplex $\sigma$, a form $\omega$ and two positive affine parametrizations $a,b:\mathbb R^k\to\operatorname{aff}(\Delta^k)$. Put $K_a=a^{-1}(\Delta^k)$ and $K_b=b^{-1}(\Delta^k)$.

1.1 Suppose $k\ge1$. Each of $K_a,K_b$ is an invertible affine image of the standard compact Jordan simplex from [F1], hence compact Jordan by [F2]. Put $h=a^{-1}\circ b$. It is an affine diffeomorphism of $\mathbb R^k$, it maps $K_b$ onto $K_a$, and its constant derivative has determinant $d>0$ because both parametrizations are positive. [F1, F2, given]

2.1 For a single smooth extension write $a^*\bar\sigma^*\omega=f(x)\,dx_1\wedge\cdots\wedge dx_k$. The coefficient is smooth near $K_a$ and bounded on $K_a$. By [F4], its expression in the $b$ parametrization is $f(h(y))\det Dh\,dy_1\wedge\cdots\wedge dy_k$: evaluating the alternating form on the $k$ columns of $Dh$ gives exactly this determinant. Thus the coefficient in $b$ coordinates is $d(f\circ h)$. [F1, F4, step 1.1]

3.1 Apply [F3] to the open set $\mathbb R^k$, injective $C^1$ map $h$, compact Jordan set $K_b$ and continuous function $f$ on $h(K_b)=K_a$. Every derivative is invertible and $|\det Dh|=d$. Therefore $$\int_{K_a}f(x)\,dx=\int_{K_b}d f(h(y))\,dy,$$ which is precisely equality of the two form integrals for a fixed extension. If two neighbourhood extensions are used, they agree on the relative interior of the affine simplex. Their pullback coefficients therefore agree there; every boundary point is a limit of relative-interior points, so continuity makes the coefficients agree on the whole compact simplex. Their integrals consequently coincide in either coordinate system. [F1, F3, step 1.1, step 2.1]

4.1 For $k=0$ both parametrizations of the affine point are the unique point map and both definitions are evaluation at $\sigma(v_0)$; no positive-dimensional change-of-variables theorem is used. For $k=1$, step 3.1 includes all positive affine rescalings of the closed interval, with endpoints included in the compact set. Zero coefficients and rank-deficient simplex maps require no division by a form value, so the equality still holds. Empty targets supply no simplex. All maps $h$ and their coefficients are determined by the two given parametrizations; no choice is used. [F1, step 3.1] ∎
