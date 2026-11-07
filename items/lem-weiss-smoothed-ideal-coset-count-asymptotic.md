---
id: lem-weiss-smoothed-ideal-coset-count-asymptotic
kind: lemma
title: Weiss smoothed ideal-coset asymptotic with all modulus factors
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
- def-finite-order-ray-class-hecke-character-and-l-function
- lem-imprimitive-ray-class-hecke-finite-euler-correction
- lem-ray-modulus-kernel-intersection-and-primitive-conductor-uniqueness
- lem-weiss-convexity-bound-for-primitive-hecke-l-functions
- thm-primitive-hecke-l-analytic-continuation-and-functional-equation
- thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula
- lem-character-orthogonality-for-finite-abelian-groups
- def-weiss-smoothed-mellin-kernel
- thm-residue-theorem-null-homologous-cycle
- def-axiom-of-choice
- def-countable-choice
justified_by: []
proof_strategy: direct
axiom_use: AC and CountableChoice are retained from the actual Hecke/kernel providers.
sources:
  references:
  - title: A. R. Weiss, The least prime ideal
    url: https://gdz.sub.uni-goettingen.de/download/pdf/PPN243919689_0338/PPN243919689_0338.pdf
    locator: Printed70–75 visually read from cached scanned PDF. Local Lemmas3.4–3.6
      are fully reconstructed; no analytic theorem is imported.
---

## Statement

Assume AC and Countable Choice. Let $K$ have degree $n\ge1$, let $\mathfrak m\ne0$ be an integral ideal, and let $H$ be a congruence subgroup of the group of fractional ideals coprime to $\mathfrak m$, with finite quotient of order $h$. Let $C$ be a coset and let every character of this quotient be extended by zero on integral ideals not coprime to $\mathfrak m$. Write $D=\max_\chi D_KN\mathfrak f_{\chi,0}$ for the maximum primitive conductor parameter, $\kappa=\operatorname{Res}_{s=1}\zeta_K(s)$, $\omega(\mathfrak m)=\#\{\mathfrak p:\mathfrak p\mid\mathfrak m\}$, and $\theta=\prod_{\mathfrak p\mid\mathfrak m}(1-(N\mathfrak p)^{-1})$. For $A\ge1$, put $k=2n$ and $H_{k,A}(u)=\eta_{k,A}(\log u)$ with the Weiss convolution normalization. There is an absolute constant $c>1$ such that, for every $x>0$ and every integral ideal $\mathfrak d$ coprime to $\mathfrak m$,
$$\left|\sum_{\substack{\mathfrak a\in C\\\mathfrak d\mid\mathfrak a}}\frac1{N\mathfrak a}H_{2n,A}\!\left(\frac{x}{N\mathfrak a}\right)-\frac{\theta\kappa}{hN\mathfrak d}\right|\le\frac{c^n2^{\omega(\mathfrak m)}D^{3/4}A^{3n/4+1}}x.$$
The bound is uniform in the coset, modulus and divisor, including $h=1$, $\mathfrak m=(1)$ and $\mathfrak d=(1)$. No primitive-modulus hypothesis or class-field correspondence is required.

## Facts & Assumptions

**Given:** The AC+CC branch and all stated data.

[F1] The Weiss kernel is nonnegative, continuous, compactly supported on $[e^{-k/A},e^{k/A}]$, has Mellin transform $h(s)=(\sinh(s/A)/(s/A))^k$, and satisfies $H(y)=(2\pi i)^{-1}\int_{c-i\infty}^{c+i\infty}h(s)y^s\,ds$. Its directly verified estimates are $|h(\sigma+it)|\le e^{k|\sigma|/A}\min(1,(A/|\sigma+it|)^k)$; the first bound follows from its compact convolution representation. [[def-weiss-smoothed-mellin-kernel]]

[F2] Every quotient character is induced by a primitive Hecke character, with exact finite Euler correction $L(s,\chi)=L(s,\chi^*)\prod_{\mathfrak p\mid\mathfrak m,\ \mathfrak p\nmid\mathfrak f_{\chi,0}}(1-\chi^*(\mathfrak p)(N\mathfrak p)^{-s})$. The primitive character is trivial exactly when the quotient character is trivial. [[lem-imprimitive-ray-class-hecke-finite-euler-correction]] [[lem-ray-modulus-kernel-intersection-and-primitive-conductor-uniqueness]] [[def-finite-order-ray-class-hecke-character-and-l-function]]

[F3] Primitive Hecke convexity at $a=2$ holds without an additional strip-growth premise, at its explicit AC+CC scope. Primitive continuation has no poles except the possible trivial simple pole at one; the completed functional equation is available with the exact standard normalization. [[thm-primitive-hecke-l-analytic-continuation-and-functional-equation]] Dedekind zeta has a positive simple residue $\kappa$ at one. [[lem-weiss-convexity-bound-for-primitive-hecke-l-functions]] [[thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula]]

[F4] Finite quotient characters satisfy character orthogonality. [[lem-character-orthogonality-for-finite-abelian-groups]]

[F5] The residue theorem applies to the finite rectangles used below. [[thm-residue-theorem-null-homologous-cycle]]

[F6] Ideals have unique finite prime factorization and multiplicative integer norm, the ideal zeta series is absolutely convergent for exponent greater than one, and there are at most $n$ primes above a rational prime, each with norm at least that prime. [[thm-number-field-integral-ideal-factorisation-in-zf]] [[thm-ideal-norm-is-multiplicative]] [[thm-dedekind-zeta-euler-product]] [[thm-fundamental-identity-for-primes-in-number-fields]] [[cor-norm-of-a-prime-ideal]]

[A1] AC and CC retain the actual Hecke/kernel branch. [[def-axiom-of-choice]] [[def-countable-choice]]

## Proof

1.1 Write $H=H_{2n,A}$ and $h(s)=(\sinh(s/A)/(s/A))^{2n}$. For a character $\chi$ set $S_\chi(x)=\sum_{\mathfrak a}\chi(\mathfrak a)(N\mathfrak a)^{-1}H(x/N\mathfrak a)$. This is a finite sum: support of $H$ restricts norms to a bounded interval, and [F6]'s convergent ideal series makes every bounded-norm set finite. On the line $\operatorname{Re}s=1/2$, kernel inversion and absolute convergence give $$S_\chi(x)=\frac1{2\pi i}\int_{1/2-i\infty}^{1/2+i\infty}L(1+s,\chi)h(s)x^s\,ds.$$ Indeed the sum of the integrals of absolute values is bounded by $x^{1/2}\zeta_K(3/2)\int_{\mathbb R}|h(1/2+it)|dt<\infty$ by [F1]. Finite partial sums followed by this explicit summable majorant justify the exchange. [A1, F1, F2, F6, given, algebra]

1.2 Put $B_0=2^{\omega(\mathfrak m)}D^{3/4}$. The finite Euler-correction product times primitive continuation gives a meromorphic continuation agreeing with the original Euler product; it is this continuation that is used on the new contour. On $s=-1+it$, the finite Euler corrections at $1+s=it$ each have modulus at most two. Primitive convexity [F3] at real part zero bounds $|L(it,\chi^*)|\le c^nD^{3/4}(1+|t|)^{3n/4}$; the pole-clearing factor has modulus one on this line. Thus $$|L(1+s,\chi)|\le c^n B_0(1+|t|)^{3n/4}\quad(\operatorname{Re}s=-1).$$ The same bound holds for $-1\le\operatorname{Re}s\le1/2$ when $|t|\ge2$: all finite factors still have modulus at most two, the pole-clearing quotient is bounded by an absolute constant, and the convexity exponent is at most $3/4$. This includes principal characters. [A1, F2, F3, algebra]

2.1 Move the line in step 1.1 to $\operatorname{Re}s=-1$ using rectangles of height $U\to\infty$. For fixed $x$, $|x^s|$ is bounded on this horizontal range. By [F1] and step 1.2 the horizontal integrals are $O_{x,K,\mathfrak m,A}(U^{-5n/4})$, hence vanish. The only crossed pole is $s=0$ for the trivial character, of residue $\theta\kappa$, since its primitive function is $\zeta_K$ and the finite factors at one multiply to $\theta$; $h(0)=1$. On the new vertical line, split $|t|\le A$ and $|t|>A$. As $A\ge1$, the kernel bound on the first part is $e^{2n}$ and its integral against $(1+|t|)^{3n/4}$ is at most $c^n A^{3n/4+1}$. On the second part, use $e^{2n}(A/|t|)^{2n}$ and $(1+|t|)^{3n/4}\le2^{3n/4}|t|^{3n/4}$. The tail integral is at most $$c^n A^{2n}\frac{A^{1-5n/4}}{5n/4-1}\le c_1^n A^{3n/4+1},$$ since $n\ge1$ makes $5n/4-1\ge1/4$. The new vertical integral is absolutely convergent, and therefore $$|S_\chi(x)-\mathbf1_{\chi=1}\theta\kappa|\le c^n B_0 A^{3n/4+1}/x.$$ This proves the character estimate with an absolute constant, including degree one and $x<1$. [A1, F1, F2, F3, F5, step 1.1, step 1.2, algebra]

3.1 For any coset $C$, finite character orthogonality expresses its indicator as $h^{-1}\sum_\chi\overline{\chi(C)}\chi(\mathfrak a)$. All character values have modulus one on the group. Apply step 2.1 and average its absolute errors: the $h$ characters cancel the $h^{-1}$, giving the same bound for the coset sum with main term $\theta\kappa/h$. This uses the finite quotient as given, with no class-field construction. [F4, step 2.1, algebra]

4.1 If $(\mathfrak d,\mathfrak m)=1$, write $\mathfrak a=\mathfrak d\mathfrak b$. Integral ideals divisible by $\mathfrak d$ are in bijection with integral $\mathfrak b$, and their coset condition becomes $\mathfrak b\in[\mathfrak d]^{-1}C$. Norm multiplicativity gives exactly $1/N\mathfrak d$ times step 3.1 with $x$ replaced by $x/N\mathfrak d$. The main term is divided by $N\mathfrak d$ while the error is unchanged: $(N\mathfrak d)^{-1}(x/N\mathfrak d)^{-1}=x^{-1}$. This proves the asserted divisor-uniform inequality. [F6, step 3.1, algebra] ∎
