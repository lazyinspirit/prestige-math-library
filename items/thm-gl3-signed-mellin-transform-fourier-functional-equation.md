---
dependency_level: 5
id: thm-gl3-signed-mellin-transform-fourier-functional-equation
kind: theorem
title: "Signed Mellin Transform of the Fourier Transform"
status: draft
origin: pipeline
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - def-gl3-distribution-vanishing-to-infinite-order-and-canonical-extension
  - lem-gl3-canonical-extension-is-unique
  - thm-gl3-fourier-transform-preserves-infinite-order
  - def-countable-choice
  - lem-gl3-mellin-endpoint-pairing-and-cutoff-independence
  - lem-gl3-mellin-inversion-and-holomorphic-flatness-criterion
  - lem-gl3-flat-distribution-power-multipliers-and-tempered-reciprocals
  - lem-gl3-homogeneous-fourier-mellin-kernel
  - thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions
  - thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions
  - thm-identity-theorem-holomorphic-functions
sources:
  references:
    - title: "Stephen D. Miller and Wilfried Schmid, Distributions and Analytic Continuation of Dirichlet Series, Theorem 4.12 and its proof"
      url: "https://arxiv.org/pdf/math/0403030v1"
pipeline_run: number-theory-all-141-2026-10-25
---

## Statement

Assume Countable Choice. For $\delta\in\{0,1\}$ and a tempered distribution $\sigma$ on $\mathbb R$, the signed Mellin transform is

$$M_\delta\sigma(s)=\int_{\mathbb R}(\operatorname{sgn}x)^\delta|x|^{s-1}\sigma(x)\,dx.$$

If $\sigma$ vanishes to order $k_0\in\mathbb Z$ at $0$ and has an extension across $\infty$ that vanishes to order $k_\infty\in\mathbb Z$, with $k_0+k_\infty\geq1$, this is the distributional pairing on $\mathbb R\cup\{\infty\}$ defined by the endpoint extensions and is holomorphic for $-k_0<\operatorname{Re}s<k_\infty$; at infinity the coordinate is $u=1/x$ and $|dx|=|u|^{-2}|du|$. For a tempered distribution vanishing to infinite order at $0$, the same Mellin pairing is defined on a sufficiently far left half-plane; for its Fourier transform, the canonical extension across $\infty$ defines the pairing on a sufficiently far right half-plane.

If $\sigma$ vanishes to infinite order at $0$, then for $\operatorname{Re}s$ sufficiently large,

$$M_\delta\widehat\sigma(s)=(-1)^\delta G_\delta(s)M_\delta\sigma(1-s).$$

Separately, if $\sigma$ has parity $\sigma(-x)=(-1)^\delta\sigma(x)$, extends canonically across $\infty$, and vanishes to order at least one at $0$, then $\widehat\sigma$ vanishes to infinite order at $0$ if and only if $G_\delta(s)M_\delta\sigma(1-s)$ is holomorphic for $\operatorname{Re}s<1$; when these conditions hold, the same Mellin identity holds throughout $\operatorname{Re}s<1$.

## Statement references

[Miller and Schmid, *Distributions and Analytic Continuation of Dirichlet Series*, Theorem 4.12](https://arxiv.org/pdf/math/0403030v1)


## Facts & Assumptions

**Given:** [[def-countable-choice|Countable Choice]] and the distributional data in the statement. All distribution pairings are bilinear and use the negative-sign Fourier transform.

[F1] [[lem-gl3-homogeneous-fourier-mellin-kernel]] defines the displayed signed gamma factors $G_0,G_1$.

[F2] [[thm-gl3-fourier-transform-preserves-infinite-order]] transfers flatness at zero to an extension of the same order at infinity; no preservation of flatness at zero is asserted.

[F3] [[lem-gl3-mellin-endpoint-pairing-and-cutoff-independence]] proves the full finite-integer-order endpoint pairing, strip holomorphy, cutoff independence and polynomial vertical growth.

[F4] [[lem-gl3-mellin-inversion-and-holomorphic-flatness-criterion]] gives the continuous injective inverse functional $\Phi_\delta$, the Schwartz/distribution inversion pairing, and flatness from holomorphic extension to larger strips.

[F5] [[lem-gl3-flat-distribution-power-multipliers-and-tempered-reciprocals]] gives finite-order compactification and canonical integer division at a flat origin. After sufficiently large division, the infinity order is at least one and the Fourier transform is a continuous polynomial-growth function.

[F6] [[lem-gl3-homogeneous-fourier-mellin-kernel]] proves the Schwartz Fourier–Mellin identity, polynomial vertical growth of $G$, $G_\delta(s)G_\delta(1-s)=(-1)^\delta$, and $sG_\delta(s)=-2\pi iG_{\delta+1}(s+1)$.

[F7] [[thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions]] gives the bilinear dual transform, parity preservation and $\widehat{\widehat T}=T(-x)$. [[thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions]] gives $\widehat{x^pT}=(-1/(2\pi i))^pD^p\widehat T$.

[F8] [[thm-identity-theorem-holomorphic-functions]] gives scalar analytic continuation; multiplying by the finite pole factors locally gives its meromorphic version.

## Proof

**Given:** The stated data.

1.1 The first finite-order assertion, including negative integer orders and the Jacobian $|u|^{-2}$, is exactly [F3]. A tempered distribution has some finite-order compactification by [F5]. If it is infinitely flat at zero, choosing arbitrarily high origin orders in [F3] defines its Mellin transform in a sufficiently far left half-plane. Its Fourier transform has a canonical infinitely flat infinity extension by [F2], and some finite order at zero by [F5], so [F3] defines its Mellin transform in a sufficiently far right half-plane. Since the cutoff is even, $M_\delta$ annihilates the opposite parity component. By [F7], Fourier transform preserves parity; thus for the functional equation it suffices to project the input to parity $\delta$. [F2, F3, F5, F7, given, algebra]

2.1 We first establish an identity of inverse Mellin functionals. Suppose $U$ has parity $\epsilon$, order $k\ge0$ at zero and order at least one at infinity. On $0<\operatorname{Re}z<1+k$ put $H_U(z)=(-1)^\epsilon G_\epsilon(z)M_\epsilon U(1-z)$. It is holomorphic and of locally uniform polynomial vertical growth by [F3] and [F6]. For a parity-$\epsilon$ Schwartz test $f$, [F4] and [F6] give [F3, F4, F6, F7, step 1.1, algebra]
$$\begin{aligned}\langle\Phi_\epsilon H_U,f\rangle&=\frac1{4\pi i}\int_{\operatorname{Re}s=1/2}M_\epsilon f(s)(-1)^\epsilon G_\epsilon(1-s)M_\epsilon U(s)\,ds\\&=\frac1{4\pi i}\int_{\operatorname{Re}s=1/2}M_\epsilon\widehat f(1-s)M_\epsilon U(s)\,ds=\langle U,\widehat f\rangle=\langle\widehat U,f\rangle.\end{aligned}$$
The middle equality uses $s\mapsto1-s$ in the inversion formula for $U$. Every integrand is absolutely integrable, by the rapid Schwartz Mellin decay and the polynomial bounds in [F3], [F6]. Projection handles tests of either parity. Hence $\Phi_\epsilon H_U=\widehat U$. [F3, F4, F6, F7, step 1.1, algebra]

3.1 Now let $\sigma$ have parity $\delta$ and be infinitely flat at zero. Choose an integer $p\ge0$ as in [F5] and set $U=x^{-p}\sigma$, of parity $\epsilon=\delta+p$ modulo two. It is tempered, infinitely flat at zero, has infinity order at least one, and $\widehat U$ is continuous near zero. Thus $\widehat U$ has order zero there, and has a canonical infinitely flat infinity extension by [F2]. Both $M_\epsilon\widehat U(z)$ and $H_U(z)$ are holomorphic with polynomial vertical growth on $\operatorname{Re}z>0$. By [F4], $\Phi_\epsilon(M_\epsilon\widehat U)=\widehat U$, while step 2.1 gives $\Phi_\epsilon H_U=\widehat U$. The injectivity in [F4] proves [F2, F3, F4, F5, step 2.1, algebra]
$$M_\epsilon\widehat U(z)=(-1)^\epsilon G_\epsilon(z)M_\epsilon U(1-z)\qquad(\operatorname{Re}z>0).$$
[F2, F3, F4, F5, step 2.1, algebra]

3.2 For the separate criterion, let $\zeta$ be a tempered distribution of parity $\delta$, canonically flat at infinity and of order $k_0\ge1$ at zero. Its Mellin transform is holomorphic on $\operatorname{Re}z>-k_0$. Let $H(s)=(-1)^\delta G_\delta(s)M_\delta\zeta(1-s)$. This is meromorphic on $\operatorname{Re}s<1+k_0$ and holomorphic on $0<\operatorname{Re}s<1+k_0$. If the product in the statement is holomorphic for $\operatorname{Re}s<1$, these two regions show $H$ is holomorphic on the entire half-plane $\operatorname{Re}s<1+k_0$, with locally uniform polynomial vertical growth: [F3], [F6] give the bound at large imaginary height, and any canceled poles at bounded height are bounded by continuity. Step 2.1 gives $\Phi_\delta H=\widehat\zeta$. Since $H$ extends arbitrarily far left, [F4] shows that $\widehat\zeta$ is infinitely flat at zero. Also [F2] gives it an infinity extension of order at least $k_0\ge1$. Thus $M_\delta\widehat\zeta$ is holomorphic on $\operatorname{Re}s<k_0$. Its inverse functional is $\widehat\zeta$ by [F4]; injectivity first identifies it with $H$ on the common central strip, and holomorphic continuation gives equality throughout $\operatorname{Re}s<1$. This proves the sufficient direction and its asserted identity. [F2, F3, F4, F6, F8, step 2.1, algebra]

4.1 Undo the integer division. For $\operatorname{Re}s$ sufficiently large, endpoint integration by parts gives [F2, F3, F5, F6, F7, step 3.1, algebra]
$$M_\delta(D^p\widehat U)(s)=(-1)^p\prod_{j=1}^p(s-j)\,M_{\delta+p}\widehat U(s-p).$$
To justify it, first insert the two endpoint cutoffs of [F3]. At zero, $\widehat U$ is bounded, so the cutoff derivative errors are $O(t^{\operatorname{Re}s-p})$ times a polynomial in $|s|$ and vanish for $\operatorname{Re}s>p$. At infinity its canonical infinite flatness permits arbitrarily high orders in the same estimate, so those errors also vanish. This proves the displayed formula with the actual distributional derivatives, including any supported terms. Differentiation preserves infinite flatness at an endpoint, up to a finite order shift, directly from the local normal forms; in the infinity coordinate $D_x=-u^2D_u$. Hence all the used endpoint pairings exist. Applying [F7] and step 3.1, and using
$$\prod_{j=1}^p(s-j)G_{\delta+p}(s-p)=(-2\pi i)^pG_\delta(s),\qquad M_{\delta+p}U(1-s+p)=M_\delta\sigma(1-s),$$
which follow respectively by iteration of [F6] and integer multiplication of the Mellin kernel, yields
$$M_\delta\widehat\sigma(s)=\frac{\prod_{j=1}^p(s-j)}{(2\pi i)^p}(-1)^{\delta+p}G_{\delta+p}(s-p)M_\delta\sigma(1-s)=(-1)^\delta G_\delta(s)M_\delta\sigma(1-s).$$
This proves the first functional equation in its full original scope. Empty products cover $p=0$. [F2, F3, F5, F6, F7, step 3.1, algebra]

5.1 Conversely, suppose $\widehat\zeta$ is infinitely flat at zero under the criterion's original hypotheses. By [F2] its infinity extension has order at least $k_0$, so its Mellin transform is holomorphic for $\operatorname{Re}s<k_0$, in particular for $\operatorname{Re}s<1$. Apply the already proved first functional equation to $\widehat\zeta$ and use its double transform from [F7]. For $\operatorname{Re}z$ sufficiently large this gives $M_\delta\zeta(z)=G_\delta(z)M_\delta\widehat\zeta(1-z)$. Put $H_0(s)=(-1)^\delta G_\delta(s)M_\delta\zeta(1-s)$. Multiply by $G_\delta(1-z)$ and use [F6] to obtain $M_\delta\widehat\zeta(s)=H_0(s)$ for $\operatorname{Re}s$ sufficiently negative. The left side is holomorphic on $\operatorname{Re}s<1$, while the right $H_0$ is meromorphic there. Scalar analytic continuation (locally multiplying by the finite pole factors) makes them identical throughout that half-plane and removes every possible pole of $H_0$. Thus the specified product is holomorphic there and the same identity holds, proving necessity and completing the equivalence. [F2, F3, F6, F7, F8, step 4.1, algebra] ∎
