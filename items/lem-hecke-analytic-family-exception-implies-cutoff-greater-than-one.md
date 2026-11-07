---
dependency_level: 20
id: lem-hecke-analytic-family-exception-implies-cutoff-greater-than-one
kind: lemma
title: An exceptional real Hecke zero requires conductor cutoff greater than one
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- lem-primitive-hecke-analytic-landau-page-family-core
- lem-ray-modulus-kernel-intersection-and-primitive-conductor-uniqueness
- thm-minkowski-bound-for-ideal-classes
- lem-qa-13-pi-rational-bounds
- lem-primitive-hecke-completed-function-is-entire-of-order-one
- thm-gamma-meromorphic-continuation
- cor-gamma-function-has-no-zeros
- def-ring-of-integers-of-a-number-field
- def-fractional-ideal
- thm-weierstrass-convergence-holomorphic-functions
- thm-identity-theorem-holomorphic-functions
- def-axiom-of-choice
- def-countable-choice
- def-absolute-norm-of-an-ideal
- lem-nonzero-number-field-ideal-has-finite-quotient
- thm-number-field-discriminant-is-well-defined-and-nonzero
justified_by: []
proof_strategy: direct
axiom_use: Full AC is used by the actual Minkowski-bound supplier. Countable Choice is retained from the
  accepted completion and complex-analysis interfaces; the eta-series and finite arithmetic add no further
  choice.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: A. R. Weiss, The least prime ideal, §1
    url: https://gdz.sub.uni-goettingen.de/download/pdf/PPN243919689_0338/PPN243919689_0338.pdf
    locator: 'Printed58–61: primitive conductors, Euler products and Theorem1.9 formulation/sketch. The
      complete local argument below is independently reconstructed, not imported from that sketch.'
  - title: Jürgen Neukirch, Algebraic Number Theory, VII§§6–8
    url: https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf
    locator: Ray characters, primitive induction and finite Euler comparison; actual local suppliers are
      used at their exact number-field hypotheses.
---

## Statement

Assume AC and Countable Choice. If a primitive finite-order Hecke character of a number field $K$ satisfies $d_\chi=|d_K|N\mathfrak f_{\chi,0}\le1$, then $K=\mathbb Q$, the character is trivial and its Hecke function has no real zero in $0<s<1$. Consequently, under the analytic Landau–Page family-core hypotheses, existence of its possible exceptional real zero implies $Q>1$. This conclusion supplies no Stark lower bound and no quadratic-field identification.

## Facts & Assumptions

**Given:** The conductor cutoff and AC/CC branch in the Statement.

[F1] Under AC, every ideal class contains an integral ideal of norm at most $(4/\pi)^{r_2}n!n^{-n}\sqrt{|d_K|}$. [[thm-minkowski-bound-for-ideal-classes]]

[F2] The actual locally proved rational bound gives $3<\pi<22/7$. [[lem-qa-13-pi-rational-bounds]]

[F3] The least conductor and primitive inducing character are unique. The analytic family core, when it has a candidate, gives a real simple zero with $0<\beta<1$. [[lem-ray-modulus-kernel-intersection-and-primitive-conductor-uniqueness]] [[lem-primitive-hecke-analytic-landau-page-family-core]]

[F4] The full pole-cleared trivial primitive completion is entire, nonzero at $0,1$, and equals $s(s-1)\Gamma_{\mathbb R}(s)\zeta_{\mathbb Q}(s)$ for $K=\mathbb Q$. Its gamma factor is holomorphic and nonzero on $\operatorname{Re}s>0$. [[lem-primitive-hecke-completed-function-is-entire-of-order-one]] [[thm-gamma-meromorphic-continuation]] [[cor-gamma-function-has-no-zeros]]

[F5] The ring of integers is defined by integral elements, fractional ideals clear a nonzero denominator, locally uniform holomorphic limits are holomorphic, and holomorphic agreement with an interior accumulation point implies identity. [[def-ring-of-integers-of-a-number-field]] [[def-fractional-ideal]] [[thm-weierstrass-convergence-holomorphic-functions]] [[thm-identity-theorem-holomorphic-functions]]

[F6] The discriminant is a nonzero integer and each nonzero integral ideal has a finite nonempty quotient, so their absolute values/norms are positive integers. [[thm-number-field-discriminant-is-well-defined-and-nonzero]] [[def-absolute-norm-of-an-ideal]] [[lem-nonzero-number-field-ideal-has-finite-quotient]]

[A1] AC and CC are retained, including the explicit AC hypothesis of [F1]. [[def-axiom-of-choice]] [[def-countable-choice]]

## Proof

**Given:** The stated data.

1.1 Both $|d_K|$ and $N\mathfrak f_{\chi,0}$ are positive integers, so their product at most one forces both to equal one. If $n\ge2$, pair each integer $j$ with $n+1-j$: $j(n+1-j)\le((n+1)/2)^2$ gives $n!\le((n+1)/2)^n$, also for odd $n$ with its single middle factor. Therefore $n!/n^n\le(3/4)^n$. Since $r_2\le n/2$ and $\pi>3$ by [F2], $$\left(\frac4\pi\right)^{r_2}\frac{n!}{n^n}\le\left(\frac43\right)^{n/2}\left(\frac34\right)^n=\left(\frac{\sqrt3}{2}\right)^n<1.$$ With $|d_K|=1$, [F1] would give an integral ideal whose positive integer norm is below one. Hence $n=1$ and $K=\mathbb Q$. [A1, F1, F2, F6, given, algebra]

2.1 A rational $a/b$ in lowest terms that is integral over $\mathbb Z$ has $b=1$: clearing a monic relation makes $b$ divide $a^m$. Thus [F5] gives $\mathcal O_{\mathbb Q}=\mathbb Z$. Every nonzero integral ideal is $n\mathbb Z$, by choosing its least positive element and applying division with remainder; clearing a denominator makes every fractional ideal principal with a positive rational generator. The finite conductor norm one means finite modulus $(1)$. Even if the real place is selected, that positive generator satisfies its sign condition, so the corresponding ray group is trivial. Its character is trivial, and primitivity/leastness [F3] makes its conductor $((1),\varnothing)$. Its ideal series is therefore $\zeta_{\mathbb Q}(s)=\sum_{n\ge1}n^{-s}$. By [F4], this function continues meromorphically on $\operatorname{Re}s>0$ with only a simple pole at $1$. [F3, F4, F5, step 1.1, choose, algebra]

3.1 Define $\eta(s)=\sum_{j\ge1}(-1)^{j-1}j^{-s}$. On a compact subset of $\operatorname{Re}s>0$, let $\delta>0$ be its minimum real part and $M$ its maximum modulus. Finite partial summation, using alternating partial sums bounded by one and $(x^{-s})'=-sx^{-s-1}$, bounds every tail starting at $N$ by $N^{-\delta}(1+M/\delta)$. Thus its entire partial sums converge locally uniformly, and [F5] makes $\eta$ holomorphic there. For real $0<s<1$, the paired series $\sum_{j\ge1}((2j-1)^{-s}-(2j)^{-s})$ has positive terms and its first term is strictly positive, so $\eta(s)>0$. On $\operatorname{Re}s>1$, absolute convergence gives $\eta(s)=(1-2^{1-s})\zeta_{\mathbb Q}(s)$. The right side extends holomorphically to the right half-plane: its factor vanishes at $1$ and removes the sole simple pole from step 2.1. Identity [F5] extends the equality throughout that half-plane. For real $0<s<1$, the factor $1-2^{1-s}$ is negative, so $\zeta_{\mathbb Q}(s)<0$. In particular it has no zero in that interval. [F4, F5, step 2.1, algebra]

4.1 If the family core has an exceptional zero with $Q=1$, its primitive character has $d_\chi\le1$, so step 1.1, step 2.1 and step 3.1 contradict the real zero in $(0,1)$ given by [F3]. The original hypotheses already have $Q\ge1$, hence existence forces $Q>1$. No quadratic field or Stark theorem has been invoked. [F3, step 1.1, step 2.1, step 3.1, algebra] ∎ 