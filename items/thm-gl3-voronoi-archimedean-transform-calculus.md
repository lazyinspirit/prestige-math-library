---
dependency_level: 6
id: thm-gl3-voronoi-archimedean-transform-calculus
kind: theorem
title: "Mapping and Adjoint Properties of the GL3 Archimedean Transform"
status: draft
origin: pipeline
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - def-gl3-voronoi-archimedean-transform
  - def-gl3-distribution-vanishing-to-infinite-order-and-canonical-extension
  - lem-gl3-canonical-extension-is-unique
  - thm-gl3-fourier-transform-preserves-infinite-order
  - def-countable-choice
  - lem-gl3-flat-distribution-power-multipliers-and-tempered-reciprocals
  - lem-gl3-fourier-calculus-for-simple-singularities
  - lem-gl3-simple-singularity-mellin-pairing
  - lem-gl3-mellin-endpoint-pairing-and-cutoff-independence
  - thm-gl3-signed-mellin-transform-fourier-functional-equation
  - thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions
sources:
  references:
    - title: "Stephen D. Miller and Wilfried Schmid, Distributions and Analytic Continuation of Dirichlet Series, Theorems 6.6 and 6.9"
      url: "https://arxiv.org/pdf/math/0403030v1"
pipeline_run: number-theory-all-141-2026-10-25
---

## Statement

Assume Countable Choice. With $\mathcal S_{\mathrm{sis}}(\mathbb R)$ as defined in the preceding definition, for every $\alpha\in\mathbb C$ and $\eta\in\{0,1\}$ the continued operator $T_{\alpha,\eta}$ maps $\mathcal S_{\mathrm{sis}}(\mathbb R)$ to itself. If $\sigma\in\mathcal S'(\mathbb R)$ vanishes to infinite order at $0$, then
$$T^*_{\alpha,\eta}\sigma(x)=(\operatorname{sgn}x)^\eta|x|^{\alpha-1}\widehat\sigma(1/x)$$
is interpreted on the punctured line as pullback under the reciprocal diffeomorphism and extends to a tempered distribution vanishing to infinite order at $0$, and for every $f\in\mathcal S_{\mathrm{sis}}(\mathbb R)$ the pairing identity
$$\int_{\mathbb R}T_{\alpha,\eta}f(x)\sigma(x)\,dx=\int_{\mathbb R}f(x)T^*_{\alpha,\eta}\sigma(x)\,dx$$
holds, with both integrals interpreted by the canonical extensions at singular points.

## Statement references

[Miller and Schmid, *Distributions and Analytic Continuation of Dirichlet Series*, Theorems 6.6 and 6.9](https://arxiv.org/pdf/math/0403030v1)


## Facts & Assumptions

**Given:** [[def-countable-choice|Countable Choice]], $\alpha\in\mathbb C$, $\eta\in\{0,1\}$, $f\in\mathcal S_{\mathrm{sis}}$ and tempered $\sigma$ infinitely flat at zero. All pairings and Fourier transforms use the bilinear negative-sign convention.

[F1] [[def-gl3-voronoi-archimedean-transform]] defines the full simple-singularity space and the initial transform. [[def-gl3-distribution-vanishing-to-infinite-order-and-canonical-extension]] defines canonical extension and its endpoint coordinate.

[F2] [[lem-gl3-fourier-calculus-for-simple-singularities]] proves that the reciprocal weighted function $g_{\alpha,\eta}(u)=f(1/u)(\operatorname{sgn}u)^\eta|u|^{-\alpha-1}$ is smooth, infinitely flat at zero and tempered, and that its Fourier transform on the punctured line is the continued $T_{\alpha,\eta}f\in\mathcal S_{\mathrm{sis}}$, for every complex parameter including resonances.

[F3] [[thm-gl3-fourier-transform-preserves-infinite-order]] gives the canonical infinitely flat infinity extension of $\widehat\sigma$. [[lem-gl3-canonical-extension-is-unique]] identifies canonical extensions.

[F4] [[lem-gl3-flat-distribution-power-multipliers-and-tempered-reciprocals]] makes $(\operatorname{sgn}x)^\eta|x|^{\alpha-1}\widehat\sigma(1/x)$ a tempered distribution canonically flat at zero.

[F5] [[lem-gl3-simple-singularity-mellin-pairing]] gives the canonical pairing of a simple-singularity function with an infinitely flat tempered distribution and its absolutely convergent inverse Mellin formula on sufficiently far right lines.

[F6] [[thm-gl3-signed-mellin-transform-fourier-functional-equation]] gives $M_\delta\widehat R(s)=(-1)^\delta G_\delta(s)M_\delta R(1-s)$ sufficiently far right for every tempered $R$ infinitely flat at zero.

[F7] [[lem-gl3-mellin-endpoint-pairing-and-cutoff-independence]] permits the reciprocal change of endpoint coordinates with density Jacobian $|u|^{-2}$. [[thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions]] preserves parity.

## Proof

**Given:** The stated data.

1.1 The full mapping assertion, including the continued meaning of $T_{\alpha,\eta}$ for every complex $\alpha$, follows from [F2]. By [F3] the reciprocal in the stated adjoint formula has its canonical infinitely flat extension near zero. Applying [F4] to the power multiplier proves that the displayed $T^*_{\alpha,\eta}\sigma$ is globally tempered and infinitely flat there. Consequently both canonical pairings in the assertion are defined by [F5]. Split into even and odd parts. Since Fourier transform preserves parity and each displayed sign factor changes it by $\eta$, both sides vanish unless $f$ has parity $\delta+\eta$ and $\sigma$ has parity $\delta$ for some $\delta$. It suffices to prove the identity in that matching case and add the finite parity decompositions. [F1, F2, F3, F4, F5, F7, given, algebra]

2.1 In this parity case put $g=g_{\alpha,\eta}$, of parity $\delta$. It is tempered and infinitely flat at zero by [F2], so [F6] gives, for $\operatorname{Re}s$ sufficiently large, [F2, F5, F6, F7, step 1.1, algebra]
$$M_\delta(T_{\alpha,\eta}f)(s)=(-1)^\delta G_\delta(s)M_\delta g(1-s)=(-1)^\delta G_\delta(s)M_{\delta+\eta}f(s+\alpha).$$
The last equality is the ordinary change $u=1/x$ in the absolutely convergent Mellin integral of $g$ on its far left half-plane; its density exponent becomes $s+\alpha-1$. The first equality remains exact for the simple-singularity function on the punctured line: any distribution component of $\widehat g$ supported at zero is invisible to the endpoint cutoff pairing, while the resulting weighted function integral is absolutely convergent for these sufficiently large real parts. [F2, F5, F6, F7, step 1.1, algebra]

2.2 Write $P=T^*_{\alpha,\eta}\sigma$, which has parity $\delta+\eta$. The same reciprocal coordinate change in the endpoint Mellin pairing gives [F3, F4, F6, F7, step 1.1, algebra]
$$M_{\delta+\eta}P(1-s)=M_\delta\widehat\sigma(s-\alpha)=(-1)^\delta G_\delta(s-\alpha)M_\delta\sigma(1-s+\alpha)$$
for $\operatorname{Re}s$ sufficiently large, using [F6] on $\sigma$. To check the exponent, the density on the left is $(\operatorname{sgn}x)^\delta|x|^{\alpha-s-1}\widehat\sigma(1/x)\,dx$, which becomes $(\operatorname{sgn}u)^\delta|u|^{s-\alpha-1}\widehat\sigma(u)\,du$. Both canonical endpoint transforms exist in their respective left and right half-planes, by [F4], [F6], [F7]. The reciprocal cutoffs may have different shapes, which do not change their limits by [F7]. No origin flatness of $\widehat\sigma$ is assumed in this step. [F3, F4, F6, F7, step 1.1, algebra]

3.1 Apply [F5] to the two pairings, and choose the abscissae sufficiently far right that the identities of steps 2.1–2.2 hold throughout. Their values are respectively [F2, F5, F6, step 1.1, step 2.1, step 2.2, algebra]
$$\frac{(-1)^\delta}{4\pi i}\int_{\operatorname{Re}s=c}G_\delta(s)M_{\delta+\eta}f(s+\alpha)M_\delta\sigma(1-s)\,ds$$
and
$$\frac{(-1)^\delta}{4\pi i}\int_{\operatorname{Re}z=c+\operatorname{Re}\alpha}M_{\delta+\eta}f(z)G_\delta(z-\alpha)M_\delta\sigma(1-z+\alpha)\,dz.$$
Each is absolutely convergent: the test Mellin factor decays rapidly while the other factors have polynomial vertical growth, and all arguments are in pole-free half-planes. The substitution $z=s+\alpha$ identifies the entire vertical lines and the integrands, so the integrals agree. This proves the adjoint identity for the matching parity case and hence for arbitrary $f,\sigma$ by step 1.1. Zero inputs, $\eta=0$, and resonant values of $\alpha$ require no separate exclusion; all are already included in the mapping and pairing suppliers. [F2, F5, F6, step 1.1, step 2.1, step 2.2, algebra] ∎
