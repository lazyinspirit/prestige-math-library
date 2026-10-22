---
id: lem-equivariant-univalent-strips-bound-loxodromic-log-multipliers
kind: lemma
title: Equivariant univalent strips bound loxodromic logarithmic multipliers
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - thm-holomorphic-primitive-on-star-shaped-domain
  - cor-cauchy-schwarz-inequality-for-l-two
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-tonelli-and-fubini-for-completed-product-measures
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Curtis T. McMullen, Iteration on Teichmuller space
      url: https://people.math.harvard.edu/~ctm/papers/home/text/papers/iter/iter.pdf
      locator: Section6.3, Proposition6.4 and Corollary6.5, printed446–447, full proofs read; the one-sided log-torus area calculation below supplies the multiplier conclusion without an imported extremal-length maximizer
---

## Statement

Assume Countable Choice. Let $S_H=\{w\in\mathbb C:0<\operatorname{Im}w<H\}$ for $H>0$, and supply a univalent holomorphic map $F:S_H\to\mathbb C^*$, numbers $L>0$ and $A\in\mathbb C$ with $|A|>1$, satisfying
$$F(w+L)=A F(w).$$
There is a holomorphic logarithm $g$ of $F$ and a uniquely determined period increment $\lambda=g(w+L)-g(w)$, independent of $w$ and of the choice of logarithm. It satisfies
$$e^\lambda=A,\qquad \operatorname{Re}\lambda=\log|A|>0,\qquad \frac H L|\lambda|^2\le2\pi\operatorname{Re}\lambda,$$
and therefore
$$|\lambda|\le\frac{2\pi L}{H}.$$

In particular let $\gamma$ be a loxodromic Mobius transformation, with expanding multiplier $A$ after sending its repelling and attracting fixed points to $0$ and $\infty$. Supply an invariant domain $\Omega$ and an equivariant biholomorphism $u:H^+\to\Omega$ with $u(e^Lz)=\gamma u(z)$ for $L>0$. The multiplier has a branch increment $\lambda$ selected by this equivariant domain such that $|\lambda|\le2L$. Consequently in any such family with $L_n\to0$, $A_n\to1$, quantitatively $|A_n-1|\le2L_n e^{2L_n}$. No compactness of the corresponding Mobius matrices, existence of the supplied uniformization, opposite-domain assertion, or nonidentity parabolic matrix limit follows without its own hypotheses.

## Facts & Assumptions

**Given:** Countable Choice, the supplied strip map and positive orientation $|A|>1$; the loxodromic invariant-domain data only for the consequence.

[A1] Countable Choice is [[def-countable-choice]].

[F1] A holomorphic function on an open star-shaped domain has an actual holomorphic primitive. [[thm-holomorphic-primitive-on-star-shaped-domain]]

[F2] Integral Cauchy–Schwarz holds for square-integrable functions. [[cor-cauchy-schwarz-inequality-for-l-two]]

[F3] Under Countable Choice, injective smooth changes of variables carry Lebesgue area by their real Jacobian, and nonnegative integrals on products obey Tonelli/Fubini. [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]], [[thm-tonelli-and-fubini-for-completed-product-measures]]

## Proof

1.1 The strip is convex and $F'/F$ is holomorphic there. Use [F1] to choose a primitive $g_0$, and add a constant so that $e^{g(w_0)}=F(w_0)$ at one point. Differentiating $Fe^{-g}$ shows its derivative is zero, so $e^g=F$ throughout the connected strip. Then $e^{g(w+L)-g(w)}=A$. The difference is continuous with values in the discrete set of logarithms of $A$, hence equals one constant $\lambda$. Its real part is $\log|A|>0$. If $g'$ is another logarithm of $F$ (here the prime denotes a second function, not differentiation), $g'-g$ is a constant in $2\pi i\mathbb Z$, so its increment is the same $\lambda$. Thus the increment is uniquely determined. In the remaining steps derivatives are written explicitly as $dg/dw$ to avoid that temporary notation. [F1, given, construct, algebra]

2.1 The vectors $2\pi i$ and $\lambda$ are linearly independent over $\mathbb R$ since $\operatorname{Re}\lambda>0$. Their integer span is a discrete lattice: write each complex number uniquely in this real basis, and bounded subsets have bounded integer coordinates. Translation by the lattice gives a flat torus $T=\mathbb C/(2\pi i\mathbb Z+\lambda\mathbb Z)$ with the local metric $|dz|^2$. Its area is $2\pi\operatorname{Re}\lambda$: the half-open fundamental parallelogram has that Euclidean determinant area, its translates partition the plane, and its boundary has measure zero; [F3] identifies the chart area with this fundamental area. The map $g$ descends to a holomorphic map $\overline g:S_H/L\mathbb Z\to T$. It is injective. Indeed, if $g(w_1)-g(w_2)=2\pi im+k\lambda$, exponentiation gives $F(w_1)=A^kF(w_2)=F(w_2+kL)$, whence univalence gives $w_1=w_2+kL$. Conversely a strip period is identified. Since $F$ is univalent, its derivative and hence $dg/dw$ never vanish; the descended map is a local conformal diffeomorphism and therefore an embedding onto an open subset of the torus. [F3, step 1.1, construct, algebra]

3.1 For each fixed $0<y<H$, the period identity gives $$\int_0^L\frac{dg}{dw}(x+iy)\,dx=\lambda.$$ The integrand is continuous on this closed horizontal segment. By triangle inequality and [F2], $$\int_0^L\left|\frac{dg}{dw}(x+iy)\right|^2dx\ge\frac{|\lambda|^2}{L}.$$ Integrate over $0<y<H$. The real Jacobian of the holomorphic map is $|dg/dw|^2$. Apply [F3] on countably many injective quotient-chart pieces in the embedded strip cylinder; the seams have zero area. Its image has area at most the full torus area from step 2.1. Thus $$\frac H L|\lambda|^2\le\int_0^H\int_0^L\left|\frac{dg}{dw}(x+iy)\right|^2dx\,dy=\operatorname{area}(\overline g(S_H/L\mathbb Z))\le2\pi\operatorname{Re}\lambda.$$ This also proves finiteness of the full derivative integral instead of presuming boundary regularity of the strip image. Since $0<\operatorname{Re}\lambda\le|\lambda|$, dividing gives $|\lambda|\le2\pi L/H$. [A1, F2, F3, step 1.1, step 2.1, given, construct, algebra]

4.1 For the supplied invariant-domain consequence, conjugate $\gamma$ by the indicated Mobius map $m$ so it is $z\mapsto Az$ with $|A|>1$. Neither fixed point is inside $\Omega$: its preimage under the equivariant injective $u$ would be a fixed point of $z\mapsto e^Lz$ in $H^+$, which has none. Thus $F(w)=m(u(e^w))$ is finite and nonzero. The exponential maps $0<\operatorname{Im}w<\pi$ biholomorphically to $H^+$, so $F$ is univalent on this strip, and its period relation is exactly $F(w+L)=AF(w)$. Apply step 3.1 with $H=\pi$ to get $|\lambda|\le2L$. Finally $$|A-1|=|e^\lambda-1|=\left|\lambda\int_0^1e^{t\lambda}\,dt\right|\le|\lambda|e^{|\lambda|}\le2Le^{2L}.$$ This proves all the claimed multiplier conclusions at the supplied interface. It does not infer a nonidentity parabolic matrix limit merely from multipliers tending to one; that requires an additional normalization excluding identity. [step 1.1, step 3.1, given, construct, algebra] ∎

## Actual reading and remaining interface

The actual complete Iteration Section6.3 and Proposition6.4/Corollary6.5 proofs were read. The entire Sections5–6 and, subsequently, Section7 and its full general cylindrical gluing argument were read; no full-paper reading is claimed. The local primitive, integral Cauchy–Schwarz, real measurable change-of-variables and completed Tonelli/Fubini proofs were read in full. No external extremal-length or maximum-modulus-cylinder theorem is used.

This supplies a precise analytic multiplier estimate needed in the thin-geodesic normalization. Existence of an appropriate equivariant boundary model, the geometric separation/injectivity of a comparison ball, and the limiting-pairing inefficiency are separate subsequent operations. All earlier frozen degeneration sources remain unchanged.
