---
id: lem-chebotarev-unsmoothing-and-galois-subgroup-prime-transfer
kind: lemma
title: Unsmoothing relative Chebotarev estimates and transferring subgroup prime counts
status: draft
dependency_level: 28
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
- lem-abelian-chebotarev-smoothed-relative-error-from-density
- lem-finite-convolution-chebotarev-smoothing-and-laplace-bounds
- lem-hecke-congruence-family-cardinality-and-primitive-reduction
- thm-global-artin-reciprocity-and-norm-index
- def-global-artin-map-as-product-of-local-reciprocity-maps
- def-local-artin-reciprocity-map
- thm-local-artin-reciprocity-and-norm-index
- lem-character-orthogonality-for-finite-abelian-groups
- thm-weak-approximation-for-global-fields
- thm-field-norm-and-trace-by-embeddings
- thm-unique-extension-of-a-nonarchimedean-absolute-value
- thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree
- thm-ramified-primes-and-the-number-field-discriminant
- thm-fundamental-identity-for-primes-in-number-fields
- thm-decomposition-inertia-exact-sequence
- thm-ftc-second-part
- thm-natural-logarithm-laws
- thm-real-power-continuity-and-derivatives
- def-axiom-of-choice
- def-countable-choice
- def-dependent-choice
justified_by: []
proof_strategy: direct
axiom_use: AC, CC and DC are inherited from the exact smoothed Artin-family and reciprocity inputs. All new comparison sums and group orbit counts are finite.
sources:
  references:
  - title: Jesse Thorner and Asif Zaman, A unified and improved Chebotarev density theorem
    url: https://msp.org/ant/2019/13-5/ant-v13-n5-p02-s.pdf
    locator: Cached full proof of Sections 5.1 and 5.2, printed pages 1055–1057, read. The finite subgroup orbit count below is proved directly rather than importing the source's quoted group-theoretic lemma.
---

## Statement

Assume AC, CC and DC. Let $L/F$ be finite Galois with group $G$, $C$ a conjugacy class, $H\le G$ abelian with $C\cap H\ne\varnothing$, $g\in C\cap H$, and $K=L^H$. Put $h=|H|$, $n=[K:\mathbb Q]$, $D=|d_K|$, $Q_0$ for the largest norm of the finite conductors of the characters of $H$, and $A=DQ_0n^n>1$. Use the exact exceptional-zero designation, $\beta_1$, $\theta=\chi_1(g)$, and $\nu$ of [[lem-abelian-chebotarev-smoothed-relative-error-from-density]]. Define
$$g(t)=t-\theta t^{\beta_1}/\beta_1,\qquad G(t)=\operatorname{Li}(t)-\theta\operatorname{Li}(t^{\beta_1}),$$
with the exceptional terms omitted if there is no designated zero. There are absolute effective constants $B,c,C>0$ such that for $x\ge A^C$,
$$h\,\pi_g(x;L/K)=G(x)\left(1+O\left(e^{-c\log x/\log A}+e^{-\sqrt{c\log x/n}}\right)\right),$$
where $\pi_g$ counts unramified $K$-primes with Frobenius $g$. Moreover, with $\pi_C$ counting unramified $F$-primes with Frobenius in $C$,
$$\left|\frac{|G|}{|C|}\pi_C(x;L/F)-h\pi_g(x;L/K)\right|\le A^B\sqrt x\log(2x)+A^B.$$
The implied constants are absolute and effective. All signs and multiplicities follow the designated occurrence; no assertion about every zero in a wider strip is used.

## Facts & Assumptions

**Given:** The finite Galois extension, class and subgroup, Artin-associated conductor family, and the exact designated-zero convention in the Statement.

[F1] The recorded abelian smoothed supplier gives $h\widetilde\psi_g(t;f_t)=g(t)(1+O(E(t)))$ for $t\ge A^{C_0}$, with $E(t)=e^{-c_0\log t/\log A}+e^{-\sqrt{c_0\log t/n}}$, a nonnegative finite-convolution weight equal to one on $[1/2,1]$ and supported in $[1/2-\varepsilon/\log t,1+\varepsilon/\log t]$. It also gives $\nu\ge A^{-B_0}$, $g(t)\ge c\nu t$, and $0\le t g'(t)\le2g(t)$ for $t\ge10$. [[lem-abelian-chebotarev-smoothed-relative-error-from-density]] [[lem-finite-convolution-chebotarev-smoothing-and-laplace-bounds]]

[F2] The family size obeys $h\le C^nD^{3/2}Q_0^2$, and the lcm $\mathfrak m$ of the finite primitive conductors has $N\operatorname{rad}\mathfrak m\le Q_0^2$. Finite characters separate an abelian group. A rational prime ramified in a number field divides its discriminant; finite decomposition, inertia and prime norm multiplicativity hold. [[lem-hecke-congruence-family-cardinality-and-primitive-reduction]] [[lem-character-orthogonality-for-finite-abelian-groups]] [[thm-ramified-primes-and-the-number-field-discriminant]] [[thm-fundamental-identity-for-primes-in-number-fields]] [[thm-decomposition-inertia-exact-sequence]]

[F4] Global reciprocity is the product of the compatible local maps, is trivial on principal ideles and is onto $H$; the local map has the norm kernel and unramified Frobenius normalization. Weak approximation supplies finite local congruence and real-sign conditions. In a finite local extension, all embeddings preserve the unique absolute value, degree equals ramification index times residue degree, and the norm is the product over embeddings. [[thm-global-artin-reciprocity-and-norm-index]] [[def-global-artin-map-as-product-of-local-reciprocity-maps]] [[def-local-artin-reciprocity-map]] [[thm-local-artin-reciprocity-and-norm-index]] [[thm-weak-approximation-for-global-fields]] [[thm-field-norm-and-trace-by-embeddings]] [[thm-unique-extension-of-a-nonarchimedean-absolute-value]] [[thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree]]

[F3] Compact FTC, logarithm and real-power differentiation hold. [[thm-ftc-second-part]] [[thm-natural-logarithm-laws]] [[thm-real-power-continuity-and-derivatives]]

[A1] Retain the stated choice assumptions of the supplied arithmetic and analytic inputs. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

## Proof

1.1 Put $a=\log A$. Since $A\ge2$ and $A\ge n^n$, $n\le2a$. The family bound in [F2] therefore gives $h,n,h n,\log(DQ_0)\le A^{B_1}$ for a fixed effective $B_1$: absorb $C^n$ and the factor $a$ into an effective power of $A$. Also $[L:F]=h[K:F]\le hn$ since $[K:F]\le[K:\mathbb Q]=n$. Every rational prime has at most $n$ primes of $K$ above it, and there are at most $u$ positive integers at most $u$. Consequently the total absolute weighted sum over all $K$-prime powers of norm at most $u$ is at most $Cnu\log(2u)$, and the portion with exponent at least two is at most $Cn\sqrt u\log^2(2u)$, by summing separately over exponents $2\le k\le\log u/\log2$. These elementary bounds apply after imposing any Frobenius condition. [A1, F2, given, algebra]

1.2 Let $\mathfrak p$ be an $F$-prime unramified in $L$, and choose its Frobenius $\sigma\in G$ and a prime of $L$ above it. Primes of $K=L^H$ above $\mathfrak p$ are the orbits of the cyclic group $\langle\sigma\rangle$ on $G/H$; their residue degrees are the orbit lengths. A length-one orbit represented by $xH$ has Frobenius in $L/K$ equal to $x^{-1}\sigma x\in H$. As $H$ is abelian, this value is independent of the representative $xH$. If $\sigma\in C$, exactly $|C_G(g)|$ elements $x\in G$ solve $x^{-1}\sigma x=g$, and their right $H$-orbits each have size $h$. Thus the number of $K$-primes above $\mathfrak p$ of residue degree one and Frobenius exactly $g$ is $|C_G(g)|/h=|G|/(h|C|)$; if $\sigma\notin C$ it is zero. This proves equality of the two displayed normalized counts for the degree-one terms, without assuming $H$ normal. [F2, given, algebra]


1.3 We bound the support of the finite primes ramified in $L/K$ without comparing a Hecke conductor exponent with an Artin conductor. At a finite place $v$ of $K$, let $e,f$ be the local ramification and residue degrees and let $M/K_v$ be the corresponding local abelian extension. By [F4], a local uniformizer $\pi_M$ has norm valuation $f$: it is the product of $ef$ conjugates of valuation $1/e$. Therefore the norm subgroup has valuation exactly $f\mathbb Z$. The local Artin map has this norm subgroup as kernel and identifies the quotient with the decomposition group. Its unit image is the kernel of the valuation map modulo $f$, so it has order $e$; compatibility with the unramified quotient puts that image inside inertia, which also has order $e$ by [F2]. Hence the unit image is exactly inertia, including wild primes. Global reciprocity and finite weak approximation identify the restriction of each associated Hecke character to local units with its character on this image. If the inertia group is nontrivial, [F2] supplies a character of $H$ nontrivial on it; the corresponding local unit character is nontrivial, so its primitive finite conductor is divisible by $v$. Thus every ramified $K$-prime divides the lcm $\mathfrak m$ from [F2], and there are at most $2\log Q_0/\log2$ of them, since every prime ideal has norm at least two. No Artin–Hecke conductor-exponent identity is assumed. [A1, F2, F4, construct, algebra]

2.1 Let $\psi_g(x)$ be the unramified prime-power sum with logarithmic weight and Frobenius power $g$, without smoothing. Positivity and the plateau/support of [F1] give [given, algebra] $$h\widetilde\psi_g(xe^{-\varepsilon};f_{xe^{-\varepsilon}})\le h\psi_g(x)\le h\widetilde\psi_g(x;f_x)+Chn\sqrt x\log(2x),$$ where for the lower bound $\varepsilon$ is the smoothing width corresponding to $xe^{-\varepsilon}$, chosen by replacing it by the larger width for $x$; equivalently use a parameter $y<x$ with $ye^{\varepsilon(y)}=x$. Such $y$ exists in $[xe^{-2\varepsilon(x)},x]$ for $x\ge A^C$ since $\varepsilon(t)=8\ell t^{-1/(8\ell)}$ and the endpoint comparison is elementary. The upper error is the contribution below the plateau, whose norm is at most $\sqrt x$. Taking $C$ larger ensures both $x$ and $y$ satisfy [F1]. Since $0\le t g'(t)\le2g(t)$, compact integration gives $g(y)=g(x)(1+O(\varepsilon(x)))$. Also $E(y)\ll E(x)$ after a fixed reduction of the effective exponent, and $\varepsilon(x)\ll e^{-c\sqrt{\log x/n}}$ by [F1]'s parameter choice. The lower bound $g(x)\gg\nu x\ge A^{-B_0}x$ and $hn\le A^{B_1}$ absorb the lower-end error relative to $g(x)$, after increasing $C$. Therefore $$h\psi_g(x)=g(x)\left(1+O\left(e^{-c_1\log x/a}+e^{-\sqrt{c_1\log x/n}}\right)\right).$$ All inequalities concern finite sums, including endpoints and repeated prime powers. [F1, F3, step 1.1, algebra]

2.2 A $K$-prime of residue degree at least two over $F$ and norm at most $x$ lies above an $F$-prime of norm at most $\sqrt x$. There are at most $[K:F]$ such primes over each $F$-prime, and at most $[F:\mathbb Q]\sqrt x$ such $F$-primes by counting rational prime powers. Multiplication by $h$ bounds their total by $hn\sqrt x$. The only degree-one terms not compared in step 1.2 lie over primes ramified in $L/F$. Such a prime either ramifies in $K/F$ or has a prime above it ramifying in $L/K$, by multiplicativity of ramification indices. In the first case its underlying rational prime divides $D_K$; there are at most $[F:\mathbb Q]\log D/\log2$ such $F$-primes. In the second case step 1.3 bounds their number by $2\log Q_0/\log2$, since each has at least one ramified $K$-prime above it. The two normalizing factors are bounded by $[L:F]$ and $h[K:F]$, both at most $hn$. The total error is therefore $O(hn^2\log(DQ_0))$, with the $D=1$ and $Q_0=1$ cases covered by the empty supports. Step 1.1 absorbs this and the degree-at-least-two error into the stated effective power of $A$. This proves the subgroup transfer inequality. [F2, step 1.1, step 1.2, step 1.3, algebra]

3.1 Let $\vartheta_g(x)$ be the same sum restricted to exponent one. Step 1.1 shows $h|\psi_g(x)-\vartheta_g(x)|\le A^{B_2}\sqrt x\log^2(2x)$, which is absorbed as in step 2.1. For $X=A^{C_2}$ with $C_2$ larger than the threshold used there, finite summation by parts on $[\sqrt x,x]$ gives [given, algebra] $$\pi_g(x)=\frac{\vartheta_g(x)}{\log x}+\int_{\sqrt x}^x\frac{\vartheta_g(t)}{t(\log t)^2}dt+O(n\sqrt x).$$ For $x\ge X^2$ insert step 2.1 on that interval. Its relative error is bounded by the displayed $E(x)$ after reducing $c_1$, since $\log t\ge\tfrac12\log x$. The exact integral identity, for $\sigma=1$ and $\sigma=\beta_1$, is $$\frac{x^\sigma}{\sigma\log x}+\int_{\sqrt x}^x\frac{t^{\sigma-1}}{\sigma(\log t)^2}dt=\operatorname{Li}(x^\sigma)+O\!\left(\frac{x^{\sigma/2}}{\log x}+1\right).$$ It follows by differentiating $t^\sigma/(\sigma\log t)$ and substituting $u=t^\sigma$. The omitted lower term and the finite interval below the definition of $\operatorname{Li}$ have absolute size $O(\sqrt x+1)$. Finally $G(x)\ge c\nu x/\log x$ for $x\ge A^C$: if $\theta\le0$ this follows from integration on $[x/2,x]$; if $\theta=1$ use the integral of $1-t^{-\delta}$ on $[x/2,x]$, which is at least $c\min(1,\delta\log x)x/\log x$, with the fixed lower-end convention contributing at most an absolute constant. Thus every coarse error is absorbed and the abelian estimate follows. [F1, F3, step 1.1, step 2.1, algebra]

4.1 Since $G(x)\ge c\nu x/\log x\ge cA^{-B_0}x/\log x$, the transfer error in step 2.2 divided by $G(x)$ is at most $A^B x^{-1/2}\log^2(2x)$. Increase the lower-range constant $C$ so $A^B\le x^{1/8}$. Then the ratio is at most $x^{-1/4}$ for all sufficiently large $x$, and this is bounded by the displayed exponential error after decreasing its absolute effective constant. Thus the abelian estimate and the transfer together yield the full relative Galois estimate, including the sign of $\theta$, all endpoint conventions and the case of no designated zero. [F1, F3, step 1.1, step 3.1, step 2.2, algebra] ∎
