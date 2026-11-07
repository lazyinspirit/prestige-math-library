---
id: lem-hecke-four-factor-zero-power-mass-and-cancellation
kind: lemma
title: Four-factor Hecke zero-power mass and exceptional-pole cancellation
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
- lem-hecke-congruence-family-cardinality-and-primitive-reduction
- lem-ray-modulus-kernel-intersection-and-primitive-conductor-uniqueness
- lem-primitive-hecke-canonical-product-and-real-zero-sum
- lem-ray-character-euler-product-positivity-inequalities
- thm-finite-order-hecke-l-euler-product
- thm-gamma-weierstrass-product
- cor-gamma-function-has-no-zeros
- thm-weierstrass-convergence-holomorphic-functions
- cor-derivative-operators-are-continuous-for-local-uniform-convergence
- thm-number-field-integral-ideal-factorisation-in-zf
- thm-fundamental-identity-for-primes-in-number-fields
- cor-norm-of-a-prime-ideal
- thm-ftc-second-part
- lem-continuous-functions-riemann-integrable
- lem-riemann-integral-linearity
- thm-natural-logarithm-laws
- thm-logarithm-derivative-and-integral
- def-complex-exponential
- thm-geometric-series
- def-axiom-of-choice
- def-countable-choice
- thm-euler-mascheroni-constant-and-harmonic-asymptotic
- thm-gamma-meromorphic-continuation
- thm-ideal-norm-is-multiplicative
justified_by: []
proof_strategy: direct
axiom_use: AC and Countable Choice retain the existing Hecke/canonical-product branch
  and allow an indexing of the discrete zero multiset. No class field is assumed.
sources:
  references:
  - title: Jesse Thorner and Asif Zaman, A bound for the least prime ideal in the
      Chebotarev density theorem
    url: https://msp.org/ant/2017/11-5/ant-v11-n5-p04-s.pdf
    locator: Full §7, printed1170–1176, Lemmas7.2–7.4 and(7-3)–(7-11), cached text
      actually read. The local proof retains the designated exceptional occurrence
      rather than deleting equal-valued zeros of different functions.
---

## Statement

Assume AC and Countable Choice. Let $K,H,Q$ be a finite congruence-character family, represented primitively, of degree $n$ and discriminant $D$. Let $\psi$ be a real primitive ancestor in the family with a simple real zero $0<\beta_1<1$, and let $\chi$ be any primitive ancestor in the family. Fix $T\ge1$, $|t|\le T$, $\alpha\ge1$, $s=\alpha+1$, and $\delta=1-\beta_1$. If $\psi$ is nontrivial, use the four functions $\zeta_K(z)$, $L(z,\psi)$, $L(z+it,\chi)$ and $L(z+it,\psi\chi)$, the last character taken on the lcm of the primitive conductors; if $\psi$ is trivial, use just $\zeta_K(z)$ and $L(z+it,\chi)$. Form the multiset of all zeros of these functions, including their primitive trivial and finite-Euler zeros, with their shifts. Remove the designated $\beta_1$ occurrence from each copy of the primitive function $L(z,\psi)$ in this list, including shifted copies. A zero of a different primitive function with the same numerical value is not removed. For each remaining occurrence $\omega$ in a factor with shift $iv$, put $z_j=(s+iv-\omega)^{-2}$, using a specified natural indexing. Then $S=\sum_j|z_j|<\infty$. If a retained target zero $\beta_0+it$ of $L(z,\chi)$ has $1/2\le\beta_0<1$, the maximum $R=\max_j|z_j|$ exists and
$$(\alpha+1-\beta_0)^{-2}\le R\le\alpha^{-2}.$$
Put $M=S/R$, $p_\alpha=(\alpha+1/2)^2/\alpha^2$ and
$$v_\alpha=\frac{(\alpha+1/2)^2}{\alpha}\left(\frac1{\alpha+1}+\frac4{(\alpha+1)^2\log2}\right).$$
There is an effective constant $C_\alpha$ depending only on $\alpha$ such that, if $\psi$ is nontrivial,
$$\frac M\alpha\le p_\alpha\left[2\log D+\left(\frac32+\frac2{2^{\alpha+1}-1}\right)\log Q+n\log T\right]+v_\alpha\log Q+C_\alpha n;$$
if $\psi$ is trivial, the corresponding bound is
$$\frac M\alpha\le p_\alpha\left[\log D+\frac12\log Q+\frac12n\log T\right]+C_\alpha n.$$
For every integer $m\ge1$, both cases satisfy the absolutely convergent cancellation inequality
$$\operatorname{Re}\sum_jz_j^m\le6m\delta\alpha^{-2m-1}.$$
In particular the three logarithmic coefficients in the mass bounds tend to $(2,5/2,1)$ and $(1,1/2,1/2)$, respectively, as $\alpha\to\infty$.

## Facts & Assumptions

**Given:** The field, primitive family, actual characters, designated simple zero, shifts and parameters in the Statement.

[F1] Primitive conductors are unique; products induce a family character of conductor at most $Q$, and the lcm of two conductors has norm at most $Q^2$. Primitive reduction preserves positive-critical zeros and finite Euler factors. [[lem-hecke-congruence-family-cardinality-and-primitive-reduction]] [[lem-ray-modulus-kernel-intersection-and-primitive-conductor-uniqueness]]

[F2] The full primitive completion has its exact genus-one canonical product, locally normally convergent logarithmic derivative and real zero sum, with zero real parts in $[0,1]$. Its completion has the standard real/complex Gamma factors. [[lem-primitive-hecke-canonical-product-and-real-zero-sum]]

[F3] The Euler logarithmic derivative converges absolutely above one. Real-character four-factor and two-factor positivity follow termwise from $(1+\psi(\mathfrak a))(1+\operatorname{Re}(\chi(\mathfrak a)(N\mathfrak a)^{-it}))\ge0$ and $1+\operatorname{Re}(\chi(\mathfrak a)(N\mathfrak a)^{-it})\ge0$. [[lem-ray-character-euler-product-positivity-inequalities]] [[thm-finite-order-hecke-l-euler-product]]

[F4] Gamma has no zeros and its reciprocal has the Weierstrass product; normal holomorphic convergence permits termwise differentiation. [[thm-gamma-weierstrass-product]] [[cor-gamma-function-has-no-zeros]] [[thm-gamma-meromorphic-continuation]] [[thm-euler-mascheroni-constant-and-harmonic-asymptotic]] [[thm-weierstrass-convergence-holomorphic-functions]] [[cor-derivative-operators-are-continuous-for-local-uniform-convergence]]

[F5] Ideals factor uniquely and prime norms are integer powers of rational primes, with the residue-degree weighted number above one rational prime at most $n$. [[thm-number-field-integral-ideal-factorisation-in-zf]] [[thm-fundamental-identity-for-primes-in-number-fields]] [[cor-norm-of-a-prime-ideal]] [[thm-ideal-norm-is-multiplicative]]

[F6] Compact continuous integrals have FTC and linearity, and logarithms have their derivative and integral laws. Exponential is its power series and geometric series have their explicit tails. [[thm-ftc-second-part]] [[lem-continuous-functions-riemann-integrable]] [[lem-riemann-integral-linearity]] [[thm-natural-logarithm-laws]] [[thm-logarithm-derivative-and-integral]] [[def-complex-exponential]] [[thm-geometric-series]]

[A1] AC and CC retain the actual Hecke branch and permit the specified indexing of a discrete multiset. [[def-axiom-of-choice]] [[def-countable-choice]]

## Proof

1.1 We first prove the finite-Euler estimate needed uniformly for large $s$. For any integral modulus $\mathfrak a$, finite Cauchy–Schwarz gives $(\sum_{\mathfrak p\mid\mathfrak a}\log N\mathfrak p/N\mathfrak p)^2\le(\log N\mathfrak a)\sum_{\mathfrak p}\log N\mathfrak p/(N\mathfrak p)^2$. Grouping the last positive sum by rational primes using [F5] bounds it by $n\sum_{j\ge2}\log j/j^2<n$. Indeed the decreasing integral bound gives $\sum_{j\ge2}\log j/j^2\le\log2/4+\log3/9+\log4/16+(\log4+1)/4<(7/10)/4+(11/10)/9+(7/5)/16+(12/5)/4<1$; $\log2<7/10$, $\log3<11/10$ follow by finite positive exponential terms. Thus the original sum is at most $(n+\log N\mathfrak a)/2$. For $s\ge2$, the function $(u^s-1)/u$ increases for $u\ge2$, so finite Euler logarithmic corrections have absolute value at most $(n+\log N\mathfrak a)/(2^s-1)$. Applied to the product character's lcm, this is at most $(n+2\log Q)/(2^s-1)$. [F1, F3, F5, F6, given, algebra]

2.1 We give the all-right-half-plane Gamma bound instead of using a supplier restricted to $\operatorname{Re}z\le2$. The Weierstrass product [F4] gives $\psi_\Gamma(w)=-\gamma+\sum_{j\ge0}(1/(j+1)-1/(j+w))$. For $\operatorname{Re}w\ge1$, split at the least integer $J\ge2|w|+2$. In the initial block the real reciprocals subtracted are positive, so its real part is at most the harmonic sum $\le1+\log(J+1)$. In the tail the difference is $(w-1)/[(j+1)(j+w)]$, whose absolute sum is at most $2(|w|+1)/J\le2$, by integral comparison. Therefore $\operatorname{Re}\psi_\Gamma(w)\le\log(|w|+2)+C$, with an absolute effective $C$; the fixed Euler constant is bounded by its harmonic integral definition. Applying this to $w=(s+iv+\epsilon)/2$ and $w=s+iv$ gives the primitive Gamma logarithmic derivative bound $\frac n2\log(s+|v|+2)+Cn$. [F2, F4, F6, step 1.1, algebra]

2.2 For a primitive function, its trivial zero multiset is contained, with multiplicities, in the parity Gamma lattices; its reciprocal square sum at $s+iv$ is at most $n\sum_{j\ge0}(s+2j)^{-2}\le n(s^{-2}+(2s)^{-1})$. Cancellations at zero only decrease this bound. For a finite Euler factor, its zeros form one translated imaginary lattice with spacing $a=2\pi/\log N\mathfrak p$. Split the positive and negative distances from $v$ into two monotone lists of spacing $a$. Each contributes its initial term at most $s^{-2}$ and its tail at most the corresponding positive integral divided by $a$; the two integrals total at most $\pi/s$. Thus its square sum is at most $2/s^2+\log N\mathfrak p/(2s)$. Summing over primes in the lcm, and using their number at most $\log N\mathfrak a/\log2$, bounds all finite-Euler trivial nodes by $[1/(2s)+2/(s^2\log2)]\log N\mathfrak a\le[1/s+4/(s^2\log2)]\log Q$. These are full all-zero bounds, including exact zero-lattice multiplicities and any coincident roots from different factors. [F1, F2, F4, F5, F6, step 1.1, algebra]

3.1 Take the real part of [F2]'s exact completion logarithmic derivative for each primitive factor. Summing the four factors and using [F3] bounds the sum of nontrivial zero kernels by $2\log D+(3/2+2/(2^s-1))\log Q+n\log T+C_\alpha n+4/\alpha+4/s$. Here the product's finite-Euler correction is bounded by step 1.1, each of the three finite conductors is at most $Q$, and the Gamma terms of the two unshifted and two shifted functions are bounded by step 2.1 and $s+T+2\le(s+3)T$. Principal poles contribute at most $4/\alpha+4/s$. Every zero kernel is positive and is at least $\alpha/|s+iv-\rho|^2$. In the trivial-$\psi$ case use the two-factor positivity instead: there is no imprimitive product correction, and the corresponding bound is $\log D+\frac12\log Q+\frac12n\log T+C_\alpha n+2/\alpha+2/s$. These bounds hold before removing any designated occurrences. [F1, F2, F3, step 1.1, step 2.1, algebra]

4.1 All zero reciprocal square sums converge, by [F2] and step 2.2. Under [A1] specify a natural indexing, preserving multiplicities and the finitely many deletions in the Statement. The retained target gives $R\ge(\alpha+1-\beta_0)^{-2}$; all zeros have real part at most one, so $|z_j|\le\alpha^{-2}$. A positive summable specified sequence has an attained positive maximum: the indices with modulus exceeding half its positive supremum form a nonempty finite set. Thus $1/R\le(\alpha+1/2)^2$. Multiply the square bounds in steps 3.1 and 2.2 by $(\alpha+1/2)^2/\alpha$. This gives exactly the two asserted bounds for $M/\alpha$, absorbing the explicit pole and primitive-trivial terms into $C_\alpha n$. The displayed rational functions tend to the asserted limits. [A1, F2, step 3.1, step 2.2, construct, algebra]

4.2 Higher differentiation of the exact completed product and the reciprocal-Gamma product, $2m-1\ge1$ times, kills all undetermined affine logarithmic terms. Their absolutely locally normal derivative series give the bare-function identity with the sum over all its zeros (nontrivial, Gamma-trivial and finite-Euler) and its principal pole, with their multiplicities. Cancellations at zero are made before summing, so no artificial Gamma zero is retained. The common-modulus Euler terms in [F3], multiplied by the nonnegative factor $(\log N\mathfrak a)^{2m-1}/(2m-1)!$, retain the same four- or two-factor positivity. Consequently the real sum of all zero powers before deletion is at most the real sum of the corresponding principal pole powers. These derivative series converge absolutely above one; their fixed logarithmic powers are bounded by a slightly smaller convergence exponent, or by the actual normal product tails. [F2, F3, F4, F6, step 3.1, step 2.2, algebra]

5.1 Every principal pole in that list is paired with exactly one copy of the designated zero of the primitive $\psi$ function at the same shift. For nontrivial $\psi$, there is always the pair $\zeta_K$ at shift zero with $L(\cdot,\psi)$; a second pair at shift $t$ occurs precisely when $\chi$ or $\psi\chi$ is principal. Since a real nontrivial character has order two, these cases are exactly $\chi=1$ or $\chi=\psi$, respectively, and the other shifted factor is a copy of $\psi$. When $\psi$ is trivial, the analogous one or two pairs come from the two-function list. Simplicity ensures each removed occurrence is counted just once per copy. A numerical coincidence with a zero of a different primitive character is retained, as required. For any real $v$, compact FTC along $[0,\delta]$ bounds $|(\alpha+iv)^{-2m}-(\alpha+\delta+iv)^{-2m}|\le2m\delta\alpha^{-2m-1}$. Subtracting the paired zero powers from step 4.2 and using at most two pairs therefore gives the asserted bound, even with constant $4$ in place of $6$. The summable and finite deletions justify every regrouping. [F1, F3, F6, step 4.1, step 4.2, algebra] ∎
