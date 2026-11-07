---
id: lem-primitive-congruence-family-modulus-and-smoothed-coset-bound
kind: lemma
title: Primitive congruence-family modulus bound and sharp smoothed coset estimate
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
- thm-number-field-integral-ideal-factorisation-in-zf
- thm-ideal-norm-is-multiplicative
- thm-dedekind-zeta-euler-product
- thm-fundamental-identity-for-primes-in-number-fields
- cor-norm-of-a-prime-ideal
- def-axiom-of-choice
- def-countable-choice
- lem-ray-modulus-kernel-intersection-and-primitive-conductor-uniqueness
- lem-imprimitive-ray-class-hecke-finite-euler-correction
- lem-character-orthogonality-for-finite-abelian-groups
- lem-weiss-convexity-bound-for-primitive-hecke-l-functions
- def-weiss-smoothed-mellin-kernel
- thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula
- thm-primitive-hecke-l-analytic-continuation-and-functional-equation
- thm-residue-theorem-null-homologous-cycle
- def-euler-gamma-function
- thm-gamma-weierstrass-product
- thm-stirling-formula-gamma
justified_by: []
proof_strategy: direct
axiom_use: AC and CountableChoice retain the actual Hecke/ray/Fourier interfaces;
  finite character and ideal algebra adds no choice.
sources:
  references:
  - title: Jesse Thorner and Asif Zaman, A bound for the least prime ideal in the
      Chebotarev density theorem
    url: https://msp.org/ant/2017/11-5/ant-v11-n5-p04-s.pdf
    locator: §2D Lemma2.8/Corollary2.9 and §4A Lemma4.4, cached complete text read;
      local proof substitutes the accepted real zero-sum inequality for the cited
      Ihara bound.
  - title: A. R. Weiss, The least prime ideal
    url: https://gdz.sub.uni-goettingen.de/download/pdf/PPN243919689_0338/PPN243919689_0338.pdf
    locator: Printed58,62 and70–75 visually read from cached scanned PDF; conductor/lcm
      and modulus argument reconstructed, not imported.
---

## Statement

Assume AC and Countable Choice. Let $K$ have degree $n\ge1$ and absolute discriminant $D_K$. Let $H$ be a primitive congruence class group modulo a full ray modulus $\mathfrak m=(\mathfrak m_0,S_\infty)$: its subgroup of $\operatorname{Cl}_{\mathfrak m}(K)$ is not the pullback of a subgroup at any proper divisor modulus. Write $h$ for the order of its finite quotient, $\mathcal X$ for the full character group of that quotient and $Q=\max_{\chi\in\mathcal X}N\mathfrak f_{\chi,0}\ge1$ for the maximum primitive finite conductor norm. Then
$$N\operatorname{rad}(\mathfrak m_0)\le Q^2,\qquad 2^{\omega(\mathfrak m_0)}\le\exp(c_\eta n)Q^\eta\quad(\eta>0),$$
where $c_\eta$ is effectively computable and depends only on $\eta$. In particular the finite part of the group modulus is the lcm of the finite character conductors.

Put $X=n^{n/4}D_K^{1/2}Q^{1/2}T^{n/2+1}$, $A=2\sqrt{2n}\,T$ for $T\ge1$, $\theta=\prod_{\mathfrak p\mid\mathfrak m_0}(1-(N\mathfrak p)^{-1})$ and $\kappa=\operatorname{Res}_{s=1}\zeta_K(s)$. For every $\delta>0$ there is an effectively computable constant $B_\delta\ge1$, depending only on $\delta$, such that for every coset $C$, $x>0$, and integral ideal $\mathfrak d$ coprime to $\mathfrak m_0$,
$$\left|\sum_{\substack{\mathfrak a\in C\\\mathfrak d\mid\mathfrak a}}\frac{H_{2n,A}(x/N\mathfrak a)}{N\mathfrak a}-\frac{\theta\kappa}{hN\mathfrak d}\right|\le\frac{B_\delta X^{1+\delta}}x.$$
Here $H_{2n,A}$ is the explicitly normalized Weiss convolution kernel. The constants are uniform in the field, group, height, divisor and coset, including $n=1$, $Q=1$ and $h=1$. No global class-field construction is asserted.

## Facts & Assumptions

**Given:** The primitive quotient, full ray modulus, characters and AC+CC branch in the Statement.

[F1] Natural ray maps to divisor moduli are surjective. Every character has a unique least inducing divisor; it factors through a divisor exactly when its conductor divides that divisor. [[lem-ray-modulus-kernel-intersection-and-primitive-conductor-uniqueness]] [[lem-imprimitive-ray-class-hecke-finite-euler-correction]]

[F2] Characters of a finite abelian group have the full orthogonality relations and their number equals the group order. [[lem-character-orthogonality-for-finite-abelian-groups]]

[F3] Primitive Hecke convexity is available for every $a\ge2$, at the exact full AC+CC scope without an extra growth premise. The finite Euler correction and primitive continuation give the continued imprimitive function and its possible principal pole. [[lem-weiss-convexity-bound-for-primitive-hecke-l-functions]] [[thm-primitive-hecke-l-analytic-continuation-and-functional-equation]] [[lem-imprimitive-ray-class-hecke-finite-euler-correction]]

[F4] The explicitly verified Weiss kernel has Mellin transform $h(s)=(\sinh(s/A)/(s/A))^{2n}$ and inversion $H(u)=(2\pi i)^{-1}\int h(s)u^sds$, with $|h(\sigma+it)|\le e^{2n|\sigma|/A}\min(1,(A/|\sigma+it|)^{2n})$. The trivial residue is $\kappa$, and the finite-rectangle residue theorem applies. [[def-weiss-smoothed-mellin-kernel]] [[thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula]] [[thm-residue-theorem-null-homologous-cycle]]

[F5] Ideals have finite factorization and multiplicative integer norm. There are at most $n$ prime ideals above each rational prime, each with norm at least that prime. The ideal zeta series converges absolutely to its Euler product above one. [[thm-number-field-integral-ideal-factorisation-in-zf]] [[thm-ideal-norm-is-multiplicative]] [[thm-fundamental-identity-for-primes-in-number-fields]] [[cor-norm-of-a-prime-ideal]] [[thm-dedekind-zeta-euler-product]]

[F6] Sectorial Stirling has the explicit Binet remainder obtained by integrating a bounded periodic primitive against $(u+s)^{-2}$; on a fixed sector its modulus is bounded by an explicit constant times $|s|^{-1}$. This certifies effective gamma-bound constants in [F3], without using any field-dependent entire-growth constant quantitatively. The Euler gamma integral bounds numerator gamma factors on compact right-half-plane rectangles, and the locally uniform Weierstrass product bounds reciprocal gamma factors on arbitrary compact discs by explicit finite products and scalar square-summable tails. [[thm-stirling-formula-gamma]] [[def-euler-gamma-function]] [[thm-gamma-weierstrass-product]]

[A1] AC and CC retain the actual ray/Hecke/kernel interfaces. [[def-axiom-of-choice]] [[def-countable-choice]]

## Proof

1.1 Put $G=\operatorname{Cl}_{\mathfrak m}(K)/H$. For any prime $\mathfrak p\mid\mathfrak m_0$, remove its entire prime-power component to obtain a proper divisor modulus $\mathfrak m'$. The image $V$ in $G$ of the kernel of the surjection to $\operatorname{Cl}_{\mathfrak m'}$ is nontrivial. Otherwise that kernel would lie in $H$, so $H$ would be the pullback of its image downstairs, contradicting primitivity. By [F1], a character of $G$ has $\mathfrak p\nmid\mathfrak f_{\chi,0}$ exactly when it is trivial on $V$. Finite orthogonality gives the number of these characters as $h/|V|$: average $\sum_\chi\chi(v)$ over $v\in V$ and use that a nontrivial character sums to zero on $V$ (translation by an element with value different from one proves this finite identity). Since $|V|\ge2$, at least half the $h$ characters have $\mathfrak p\mid\mathfrak f_{\chi,0}$. Thus the average of $\log N\mathfrak f_{\chi,0}$ is at least $\tfrac12\sum_{\mathfrak p\mid\mathfrak m_0}\log N\mathfrak p$, whereas it is at most $\log Q$. Exponentiating proves $N\operatorname{rad}\mathfrak m_0\le Q^2$. The same kernel argument with one prime exponent lowered by one shows some character has the full exponent; if all conductors divided a fixed proper divisor, all characters would kill that ray kernel, whose image in $G$ would be trivial by [F2]. This proves the lcm assertion as well. [A1, F1, F2, F5, given, algebra]

1.2 Fix $\delta>0$, choose $a=\max(2,8/\delta)$ and set $b=n(1/2+1/(2a))\le3n/4$. For a quotient character $\chi$, [F3] and its at most $\omega(\mathfrak m_0)$ deleted Euler factors give on $s=-1+it$ $$|L(1+s,\chi)|\le (ca)^n2^{\omega(\mathfrak m_0)}(D_KQ)^{1/2+1/(2a)}(1+|t|)^b.$$ The pole-clearing quotient for a trivial character has modulus one on $\operatorname{Re}(1+s)=0$. For $-1\le\operatorname{Re}s\le1/2$, $|t|\ge2$, the same bound holds up to an absolute factor: each finite Euler correction is at most two, the pole-clearing quotient is bounded, and the convexity exponent is no larger than on the left boundary. [A1, F1, F3, algebra]

2.1 For $\eta>0$ choose $R=\max(2,\exp(2\log2/\eta))$. There are at most $nR$ prime ideals of norm at most $R$, by contraction to rational primes and [F5]. Step 1.1 bounds the number of larger prime divisors of $\mathfrak m_0$ by $2\log Q/\log R$. Consequently $\omega(\mathfrak m_0)\log2\le nR\log2+\eta\log Q$, proving the first displayed modulus bound with the explicit choice $c_\eta=R\log2$. In particular $Q=1$ forces a unit finite modulus. No existence theorem for ray class fields has been used. [F5, step 1.1, algebra]

2.2 Kernel inversion [F4] and absolute ideal convergence express $\sum_\mathfrak a\chi(\mathfrak a)H(x/N\mathfrak a)/N\mathfrak a$ as $(2\pi i)^{-1}\int_{1/2-i\infty}^{1/2+i\infty}L(1+s,\chi)h(s)x^sds$. Its initial exchange is bounded by $x^{1/2}\zeta_K(3/2)\int|h(1/2+it)|dt<\infty$. Shift to $\operatorname{Re}s=-1$. Horizontal integrals tend to zero as $O(U^{b-2n})$ for fixed other parameters. The only crossed pole, for the trivial quotient character, has residue $\theta\kappa$. On the new line the kernel is at most $e^{2n}\min(1,(A/|t|)^{2n})$. Splitting at $|t|=A\ge1$ bounds the vertical integral by $$\frac{(ca)^n2^{\omega(\mathfrak m_0)}(D_KQ)^{1/2+1/(2a)}A^{b+1}}x,$$ since the tail exponent has $2n-b-1\ge n/4>0$. All contour and infinite-integral limits have these absolute majorants. [A1, F3, F4, F5, step 1.2, algebra]

3.1 Use step 2.1 with $\eta=\delta/8$ and $A=2\sqrt{2n}\,T$. Since $1/(2a)\le\delta/16$, the numerator in step 2.2 is at most $$C_\delta^n n^{n/4+\delta n/32+1/2}D_K^{1/2+\delta/16}Q^{1/2+3\delta/16}T^{n/2+\delta n/16+1}.$$ Its $D_K,Q,T$ exponents are no larger than those in $X^{1+\delta}$. The remaining ratio is bounded by $C_\delta^n n^{1/2-7\delta n/32}$, whose supremum over positive integers $n$ is finite and effectively computable: beyond an explicit exponential threshold its logarithm is negative and decreasing, and the finitely many earlier integers can be bounded separately. Absorb that supremum into $B_\delta$. The absolute constants in the boundary estimates can be made effective using [F6]: the periodic primitive is bounded by $1/8$, and $|u+s|\ge c(u+|s|)$ on the fixed sectors gives an explicit remainder bound. On the remaining compact gamma region, numerator gamma factors have positive real part in a fixed interval and are bounded by their Euler integrals. Reciprocal factors on $|z|\le M$ have an explicit product bound: choose integer $N>2M$, bound the first $N$ factors in [F6]'s Weierstrass product by their absolute values, and bound the remaining product by $\exp(M^2/N)$ using $|\log(1+w)-w|\le|w|^2/[2(1-|w|)]$. Euler's harmonic-limit constant lies between zero and one by finite integral comparison. Thus every compact bound is computable from $M$ alone. These depend only on the fixed parameter $a$, not on $K$ or $\chi$. Thus $B_\delta$ is effective and depends only on $\delta$. [F3, F6, step 2.1, step 2.2, algebra]

4.1 Average the character estimate of step 2.2 over the finite quotient using [F2]. The $h$ errors cancel the averaging factor $1/h$; only the principal residue remains, divided by $h$. For the divisor condition write $\mathfrak a=\mathfrak d\mathfrak b$ and replace the coset by $[\mathfrak d]^{-1}C$. Norm multiplicativity gives the factor $(N\mathfrak d)^{-1}$ and replaces $x$ by $x/N\mathfrak d$, so the error is still $B_\delta X^{1+\delta}/x$ and the residue is $\theta\kappa/(hN\mathfrak d)$. This proves the complete stated estimate, including all unit and degree-one cases. [F2, F5, step 2.2, step 3.1, algebra] ∎
