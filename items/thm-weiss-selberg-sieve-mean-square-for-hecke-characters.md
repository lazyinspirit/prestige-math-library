---
id: thm-weiss-selberg-sieve-mean-square-for-hecke-characters
kind: theorem
title: Weiss smoothed Selberg-sieve mean-square bound for Hecke characters
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 19
deps:
  - def-number-field
  - def-absolute-norm-of-an-ideal
  - def-finite-order-ray-class-hecke-character-and-l-function
  - thm-primitive-hecke-l-analytic-continuation-and-functional-equation
  - thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula
  - thm-number-field-integral-ideal-factorisation-in-zf
  - thm-ideal-norm-is-multiplicative
  - lem-character-orthogonality-for-finite-abelian-groups
  - thm-residue-theorem-null-homologous-cycle
  - def-weiss-smoothed-mellin-kernel
  - lem-weiss-smoothing-inequality-for-dirichlet-polynomials
  - lem-weiss-convexity-bound-for-primitive-hecke-l-functions
  - lem-weiss-smoothed-ideal-coset-count-asymptotic
  - lem-weiss-sifted-coset-selberg-estimate
  - def-axiom-of-choice
  - def-countable-choice
proof_strategy: direct
axiom_use: AC and Countable Choice are inherited through the primitive Hecke continuation and L2 suppliers; no choice is used in the finite character orthogonality or Selberg weight minimization.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: A. R. Weiss, the least prime ideal
      url: https://gdz.sub.uni-goettingen.de/download/pdf/PPN243919689_0338/PPN243919689_0338.pdf
      locator: Theorem 3.7 and proof, printed pp. 74–75; Lemma 3.6 proof, printed pp. 72–74; notation, printed pp. 58–59.
    - title: Jesse Thorner and Asif Zaman, A bound for the least prime ideal in the Chebotarev density theorem
      url: https://msp.org/ant/2017/11-5/ant-v11-n5-p04-s.pdf
      locator: Lemma 4.3(vi), Lemma 4.6 and Theorem 4.2 proof, printed pp. 1156–1159.
---

## Statement

Assume AC and Countable Choice. Let $K$ be a number field of degree $n_K$, absolute discriminant $D_K$, and ideal norm $N$. Let $\mathfrak m$ be an integral ideal, let $I_K(\mathfrak m)$ be the group of fractional ideals coprime to $\mathfrak m$, and let $P_K(\mathfrak m)$ be its subgroup of principal ray ideals. A congruence class group $H$ modulo $\mathfrak m$ means a subgroup $P_K(\mathfrak m)\subseteq H\subseteq I_K(\mathfrak m)$. Put $h_H=[I_K(\mathfrak m):H]$ and $d(H)=\max_{\chi|_H=1}D_KN\mathfrak f_\chi$, where $\mathfrak f_\chi$ is the conductor of the finite-order Hecke character $\chi$ of $I_K(\mathfrak m)/H$. Let $\omega(\mathfrak m)$ be the number of distinct prime-ideal divisors of $\mathfrak m$, let $\kappa(K)=\operatorname{Res}_{s=1}\zeta_K(s)$, and set
$$V(z)=\sum_{N\mathfrak a\le z}\frac1{N\mathfrak a},\qquad S_z=\{\mathfrak a:\mathfrak a\text{ is an integral ideal with no prime-ideal divisor }\mathfrak p\text{ satisfying }N\mathfrak p\le z\}.$$
Suppose $z\ge1$, $T$ is sufficiently large, and $b$ is a complex-valued function on integral ideals with $\sum_{\mathfrak a}|b(\mathfrak a)|<\infty$ and $b(\mathfrak a)=0$ whenever $\mathfrak a\notin S_z$. Extend every character by zero to ideals not coprime to $\mathfrak m$. With $A=\sqrt{2n_K}\,T$ and $H_{2n_K,A}$ the smoothing function defined by the convolution kernel above, one has
$$\sum_{\substack{\chi\bmod H}} \int_{-T}^{T}\left|\sum_{\mathfrak a}b(\mathfrak a)\chi(\mathfrak a)(N\mathfrak a)^{-it}\right|^2dt \ll \sum_{(\mathfrak a,\mathfrak m)=1}|b(\mathfrak a)|^2\left(\frac{\kappa(K)}{V(z)}N\mathfrak a+e^{O(n_K)}n_K^{3n_K/8+1/2}h_H\,2^{\omega(\mathfrak m)}d(H)^{3/4}T^{3n_K/4+1}z^3\right).$$
The implied constants are absolute; the source assumes the displayed large-$T$ range.

## Statement references

[[def-number-field|Number field and degree]]

[[def-absolute-norm-of-an-ideal|Absolute ideal norm]]

[[def-finite-order-ray-class-hecke-character-and-l-function|Finite-order Hecke characters and conductors]]

[[thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula|Dedekind zeta residue]]

[[def-weiss-smoothed-mellin-kernel|Weiss smoothing kernel]]

## Facts & Assumptions

**Given:** AC and Countable Choice, the number field, modulus, congruence class group, sifted coefficients, $z\ge1$, and sufficiently large $T$ in the Statement.

[F1] Ideals have multiplicative absolute norm, and the ideal factorization and norm conventions in the Statement are the number-field ideal conventions. [[def-absolute-norm-of-an-ideal]] [[thm-ideal-norm-is-multiplicative]] [[thm-number-field-integral-ideal-factorisation-in-zf]]

[F2] Characters of the finite quotient $I_K(\mathfrak m)/H$ satisfy the finite-group orthogonality relation: their character sum is $h_H$ on the identity class and zero on every other class. [[lem-character-orthogonality-for-finite-abelian-groups]]

[F3] The smoothed mean-square majorant holds for absolutely summable coefficient sequences when $A\ge\sqrt{k}T$. [[lem-weiss-smoothing-inequality-for-dirichlet-polynomials]]

[F4] The primitive Hecke $L$-functions have the continuation and functional equation stated by their supplier. [[thm-primitive-hecke-l-analytic-continuation-and-functional-equation]]

[F5] The local convexity lemma gives its stated field-uniform vertical-strip bound without an additional growth hypothesis; its completed order-one input supplies the bounded Gaussian interpolation. [[lem-weiss-convexity-bound-for-primitive-hecke-l-functions]]

[F6] The residue $\kappa(K)$ is the coefficient of $(s-1)^{-1}$ in the simple pole of $\zeta_K(s)$. [[thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula]]

[A1] The Axiom of Choice is inherited through the primitive Hecke analytic supplier. [[def-axiom-of-choice]]

[A2] Countable Choice is inherited through the primitive Hecke and L2 suppliers. [[def-countable-choice]]

[F7] The complete smoothed ideal-coset estimate gives, for all $x>0$ and every divisor $\mathfrak d$ coprime to $\mathfrak m$, main term $\theta\kappa(K)/(h_HN\mathfrak d)$ and error at most $B/x$, where $\theta=\prod_{\mathfrak p\mid\mathfrak m}(1-(N\mathfrak p)^{-1})$ and $B=c^{n_K}2^{\omega(\mathfrak m)}d(H)^{3/4}A^{3n_K/4+1}$. [[lem-weiss-smoothed-ideal-coset-count-asymptotic]]

[F8] The finite ideal Selberg minimizer, including $|\lambda|\le1$, bounds a nonnegative finite sifted sum with divisor main terms $\alpha/N\mathfrak d$ and error $M$ by $\alpha/(\theta V(z))+c^{n_K}Mz^3$. [[lem-weiss-sifted-coset-selberg-estimate]]

[F9] The actual nonnegative convolution kernel has $\int_0^\infty H(y)dy/y=1$ and $\int_0^\infty H(y)dy/y^2=h_{2n_K,A}(1)\le e^{2n_K/A}\le e^{2n_K}$ for $A\ge1$. These identities follow directly by $y=e^u$ in its defining Mellin transform and its compact support. [[def-weiss-smoothed-mellin-kernel]]

## Proof

1.1 First suppose $b$ has finite support. Put $n=n_K$, $h=h_H$, $H=H_{2n,A}$ and $B=c^n2^{\omega(\mathfrak m)}d(H)^{3/4}A^{3n/4+1}$. For fixed $x>0$ and any coset $C$, the nonnegative ideal weight $f_C(\mathfrak a)=\mathbf1_{\mathfrak a\in C}H(x/N\mathfrak a)/N\mathfrak a$ has finite support by the kernel support and finite bounded-norm sets. [F7] supplies every divisor count required by [F8], with $\alpha=\theta\kappa(K)/h$ and $M=B/x$. Therefore, writing $S_z$ exactly as in the Statement, $$\sum_{\mathfrak a\in C\cap S_z}\frac{H(x/N\mathfrak a)}{N\mathfrak a}\le\frac{\kappa(K)}{hV(z)}+\frac{c^nBz^3}{x}.$$ This retains all modulus factors, including when $h=1$ or the modulus is the unit ideal. [F1, F7, F8, given, construct, algebra, A1, A2]

2.1 Group the finitely many coefficients by their integer norms and apply [F3] to each character. After summing over the finite character family, [F2] expresses the smoothed squared sum at each $x$ as $$h\sum_C\left|\sum_{\mathfrak a\in C}b(\mathfrak a)H(x/N\mathfrak a)\right|^2.$$ Cauchy–Schwarz, with factors $b(\mathfrak a)\sqrt{N\mathfrak a\,H(x/N\mathfrak a)}$ and $\sqrt{H(x/N\mathfrak a)/N\mathfrak a}$, bounds each coset square by the product of $\sum_{\mathfrak a\in C}|b(\mathfrak a)|^2N\mathfrak a\,H(x/N\mathfrak a)$ and the sifted reciprocal sum in step 1.1, because $b$ is supported on $S_z$. Finite Cauchy–Schwarz here follows, for example, by expanding $\sum|u-tv|^2\ge0$ and minimizing the scalar $t$; a zero second norm gives a zero square directly. Thus the integrand summed over characters is at most $$\sum_{(\mathfrak a,\mathfrak m)=1}|b(\mathfrak a)|^2N\mathfrak a\,H(x/N\mathfrak a)\left(\frac{\kappa(K)}{V(z)}+\frac{c^n h Bz^3}{x}\right).$$ No infinite-square expansion is used. [F2, F3, step 1.1, algebra]

3.1 Integrate step 2.1 against $dx/x$ and include the absolute smoothing constant of [F3]. Only finitely many coefficient terms occur. With $x=(N\mathfrak a)y$, [F9] gives respectively integrals $1$ and $(N\mathfrak a)^{-1}h_{2n,A}(1)\le (N\mathfrak a)^{-1}e^{2n}$. The result is $$\ll\sum_{(\mathfrak a,\mathfrak m)=1}|b(\mathfrak a)|^2\left(\frac{\kappa(K)}{V(z)}N\mathfrak a+c^n h\,2^{\omega(\mathfrak m)}d(H)^{3/4}A^{3n/4+1}z^3\right).$$ Now $A=\sqrt{2n}T$ gives $A^{3n/4+1}=2^{3n/8+1/2}n^{3n/8+1/2}T^{3n/4+1}$. Absorb the power of two into $c^n=e^{O(n)}$. This is exactly the displayed bound with $h_H\,2^{\omega(\mathfrak m)}$, not $h_H^{2\omega(\mathfrak m)}$. All implied constants are absolute; no field-dependent entire-order constant enters this calculation. [F3, F9, step 2.1, algebra]

4.1 For the stated absolutely summable $b$, truncate to ideals of norm at most $X$. The coefficient sums converge uniformly in real $t$ and in the finite character family, since each omitted term is bounded in modulus by $|b(\mathfrak a)|$ and the absolute tail tends to zero. Thus their squared moduli converge uniformly on $[-T,T]$, giving convergence of the left integrals. The truncated right sides increase to the displayed nonnegative series, by its definition as the supremum of finite partial sums. If it is infinite the inequality is automatic; if finite, passage to the limit in step 3.1 proves it. No exchange of an infinite squared series with the improper smoothing integral is required. The unit ideal, $z=1$ and the zero coefficient function are covered by the same formulas. [F1, F2, F3, step 3.1, given, algebra] ∎

## Proof status

Complete at the stated AC+CountableChoice scope with the exact source modulus factor restored. The original public error factor h_H^{2ω(m)} was a transcription error: Weiss printed74–75 gives h_H·2^{ω(m)}. The two explicit local suppliers now prove the contour/coset estimate and every finite Selberg minimization step, and completed primitive Hecke growth supplies the actual convexity bound. Historical preimages are retained. This theorem does not itself prove zero detection, primitive-modulus conductor bounds, the sharper Thorner–Zaman density/large-sieve conclusion, or any class-field correspondence.
