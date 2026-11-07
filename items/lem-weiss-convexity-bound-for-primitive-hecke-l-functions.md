---
id: lem-weiss-convexity-bound-for-primitive-hecke-l-functions
kind: lemma
title: Primitive Hecke L-function convexity from completed order-one growth
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 17
deps:
  - def-number-field
  - def-absolute-norm-of-an-ideal
  - def-discriminant-of-a-number-field-basis-and-order
  - thm-number-field-discriminant-is-well-defined-and-nonzero
  - def-archimedean-embeddings-and-number-field-signature
  - def-finite-order-ray-class-hecke-character-and-l-function
  - thm-finite-order-hecke-l-euler-product
  - thm-primitive-hecke-l-analytic-continuation-and-functional-equation
  - thm-dedekind-zeta-euler-product
  - thm-hadamard-three-lines
  - thm-stirling-formula-gamma
  - thm-gamma-meromorphic-continuation
  - cor-gamma-function-has-no-zeros
  - thm-number-field-integral-ideal-factorisation-in-zf
  - thm-fundamental-identity-for-primes-in-number-fields
  - lem-primitive-hecke-completed-function-is-entire-of-order-one
  - def-axiom-of-choice
  - def-countable-choice
proof_strategy: direct
axiom_use: AC and Countable Choice are inherited only through the primitive Hecke analytic supplier; the interpolation argument adds no choice principle.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: A. R. Weiss, the least prime ideal
      url: https://gdz.sub.uni-goettingen.de/download/pdf/PPN243919689_0338/PPN243919689_0338.pdf
      locator: Theorem 1.14, printed p. 63; its proof is attributed there to the Phragmén–Lindelöf bound of Fogel.
    - title: Jesse Thorner and Asif Zaman, A bound for the least prime ideal in the Chebotarev density theorem
      url: https://msp.org/ant/2017/11-5/ant-v11-n5-p04-s.pdf
      locator: §2B, Lemma 2.3 and the vertical-strip bounds used in §4A, printed pp. 1142–1157.
---

## Statement

Assume AC and Countable Choice. Let $K$ be a number field of degree $n_K$, let $\chi$ be a primitive finite-order Hecke character of conductor $\mathfrak f_\chi$, and put $d_\chi=D_KN\mathfrak f_\chi$, where $D_K$ is the absolute discriminant. Let $\delta_\chi=1$ if $\chi$ is trivial and $0$ otherwise, and set
$$
G_\chi(s)=\left(\frac{s-1}{s+1}\right)^{\delta_\chi}L(s,\chi).
$$
Use the primitive Euler product and completed functional equation with the standard Hecke gamma factors and conductor $d_\chi$. Then there are absolute constants $C,c>0$ such that for every $a\ge2$ and $s=\sigma+it$ with $-1/a\le\sigma\le1+1/a$,
$$
|G_\chi(s)|\le C^{n_K}a^{n_K}d_\chi^{\frac12(1+1/a-\sigma)}(1+|t|)^{\frac{n_K}{2}(1+1/a-\sigma)}.
$$
In particular $G_\chi$ has polynomial growth on every such closed strip; no extra strip-growth hypothesis is imposed.

## Statement references

[[def-number-field|Number field and its degree]]

[[def-absolute-norm-of-an-ideal|Absolute ideal norm]]

[[def-discriminant-of-a-number-field-basis-and-order|Field discriminant]]

[[def-archimedean-embeddings-and-number-field-signature|Number-field signature]]

[[def-finite-order-ray-class-hecke-character-and-l-function|Finite-order Hecke characters]]

[[thm-finite-order-hecke-l-euler-product|Hecke Euler product]]

[[thm-primitive-hecke-l-analytic-continuation-and-functional-equation|Primitive Hecke continuation and functional equation]]

[[thm-dedekind-zeta-euler-product|Dedekind zeta Euler product]]

[[thm-hadamard-three-lines|Hadamard three-lines theorem]]

[[thm-stirling-formula-gamma|Stirling formula for the gamma function]]

## Facts & Assumptions

**Given:** AC and Countable Choice, the field, primitive character and $a\ge2$ in the Statement.

[F1] The primitive Hecke series has an absolutely convergent Euler product for $\operatorname{Re}s>1$, and finite-order character values have modulus at most $1$. [[thm-finite-order-hecke-l-euler-product]] [[def-finite-order-ray-class-hecke-character-and-l-function]]

[F2] The completed primitive Hecke function has conductor factor $d_\chi^{s/2}$, the stated archimedean gamma factors, and satisfies $\Lambda(s,\chi)=W_\chi\Lambda(1-s,\overline\chi)$ with $|W_\chi|=1$. [[thm-primitive-hecke-l-analytic-continuation-and-functional-equation]]

[F3] For $\operatorname{Re}s>1$, the Euler product for $\zeta_K(s)$ converges absolutely; at most $n_K$ prime ideals lie above each rational prime, so $\zeta_K(s)\le\zeta(\operatorname{Re}s)^{n_K}$. [[thm-dedekind-zeta-euler-product]] [[thm-number-field-integral-ideal-factorisation-in-zf]] [[thm-fundamental-identity-for-primes-in-number-fields]]

[F4] A bounded holomorphic function on a closed strip has logarithmically convex vertical-line suprema. [[thm-hadamard-three-lines]]

[F5] On any closed sector avoiding the negative real axis, $\Gamma(z)=\sqrt{2\pi}z^{z-1/2}e^{-z}(1+O(|z|^{-1}))$ as $|z|\to\infty$. Gamma has only its simple poles at nonpositive integers and has no zeros, so its reciprocal extends holomorphically with zeros at those poles. [[thm-stirling-formula-gamma]] [[thm-gamma-meromorphic-continuation]] [[cor-gamma-function-has-no-zeros]]

[F6] With the full standard gamma product $\gamma_\chi(s)$, the completed entire function $\Xi_\chi(s)=[s(s-1)]^{\delta_\chi}d_\chi^{s/2}\gamma_\chi(s)L(s,\chi)$ satisfies $|\Xi_\chi(s)|\le\exp(C_{K,\chi}(|s|+1)\log(|s|+3))$. The constant here may depend on the field and character. [[lem-primitive-hecke-completed-function-is-entire-of-order-one]]

[A2] The Axiom of Choice is assumed through the primitive Hecke analytic supplier. [[def-axiom-of-choice]]

[A3] Countable Choice is assumed through the primitive Hecke analytic supplier. [[def-countable-choice]]

## Proof

**Proof technique:** three-lines interpolation with a local Gaussian damping.

**Given:** The stated data.

1.1 The accepted continuation [F2] makes $G_\chi$ holomorphic on the closed strip $-1/a\le\operatorname{Re}s\le1+1/a$: its only possible $L$-pole is the simple pole at one for the trivial character, removed by $s-1$, and $s=-1$ lies outside the strip. For $|t|\ge2$, [F6] gives the exact formula
$$G_\chi(s)=\frac{\Xi_\chi(s)d_\chi^{-s/2}\gamma_\chi(s)^{-1}}{[s(s+1)]^{\delta_\chi}}.$$
On the fixed strip, sectorial Stirling [F5] bounds the logarithm of the absolute value of the inverse gamma product by $C_{K,\chi,a}(|t|+1)\log(|t|+3)$; all its arguments have bounded real part and imaginary part proportional to $t$, and lie in fixed sectors away from the negative real axis for large $|t|$. The conductor factor is bounded on this strip and the displayed rational denominator has no zero for $|t|\ge2$. Together with [F6], this gives $|G_\chi(\sigma+it)|\le\exp(C'_{K,\chi,a}(|t|+1)\log(|t|+3))$, uniformly in the strip. The remaining compact rectangle is bounded by holomorphy. Consequently, for every fixed $\varepsilon>0$, real $t_0$ and interior $\sigma_0$, the function $G_\chi(s)\exp(\varepsilon(s-\sigma_0-it_0)^2)$ is bounded on that entire strip: its logarithmic modulus is at most $C'(|t|+1)\log(|t|+3)-\varepsilon(t-t_0)^2+O(1)$, which tends to minus infinity. For example $\log u\le\sqrt u$ for sufficiently large $u$ makes this last domination explicit. No uniformity in the accepted order-one constant is needed; it only certifies boundedness, while the uniform boundary estimates below determine the final constants. [F2, F5, F6, given, algebra]

1.2 Put $\sigma_+=1+1/a$. On this line the Euler product in [F1] and the fact that every rational prime has at most $n_K$ prime-ideal factors give $$ |L(\sigma_++it,\chi)|\le\zeta_K(\sigma_+)\le\zeta(\sigma_+)^{n_K}\le(1+a)^{n_K}\le(2a)^{n_K}. $$ Since $|(\sigma_++it-1)/(\sigma_++it+1)|\le1$, this is the right-boundary estimate for $G_\chi$. [F1, F3, given, algebra]

2.1 Put $\sigma_-=-1/a$. By [F2], $L(\sigma_-+it,\chi)$ is a conductor factor $d_\chi^{1/2-\sigma_-}$ times the ratio of the conjugate gamma factors at $1-s$ and $s$, multiplied by $L(1-s,\overline\chi)$. Applying [F5] to each real gamma factor and each complex gamma pair, and using $r_1+2r_2=n_K$, bounds that ratio by $C^{n_K}(1+|t|)^{n_K(1/2-\sigma_-)}$. For bounded $t$, this ratio bound is uniform as well: the numerator gamma arguments range over a fixed compact subset of the right half-plane, and the reciprocal denominator factors are bounded on the corresponding compact set, including their zeros at poles. Thus the constant is independent of $a\ge2$. The right-boundary estimate of step 1.2 applies to $L(1-s,\overline\chi)$. Also $|(\sigma_-+it-1)/(\sigma_-+it+1)|\le3$ for $a\ge2$. Therefore $$ |G_\chi(\sigma_-+it)|\le C^{n_K}a^{n_K}d_\chi^{\frac12(1+2/a)}(1+|t|)^{\frac{n_K}{2}(1+2/a)}. $$ [F2, F5, step 1.2, given, algebra, A2, A3]

3.1 Fix an interior $\sigma$ and ordinate $t_0$, and set $\varepsilon=n_K(1+|t_0|)^{-2}$. The function $F(s)=G_\chi(s)\exp(\varepsilon(s-\sigma-it_0)^2)$ is bounded and holomorphic on the closed strip by step 1.1. On either boundary line $\operatorname{Re}s=\sigma_\pm$, its Gaussian factor has modulus $\exp(\varepsilon(\sigma_\pm-\sigma)^2)\exp(-\varepsilon(t-t_0)^2)$. For $0\le b\le n_K$, $$ \sup_{t\in\mathbb R}(1+|t|)^b e^{-\varepsilon(t-t_0)^2}\le C^{n_K}(1+|t_0|)^b; $$ this follows by writing $u=\sqrt{n_K}(t-t_0)/(1+|t_0|)$ and using $\log(1+v)-v^2\le C$ for $v\ge0$. Thus the boundary suprema of $F$ are bounded by the two estimates from steps 1.2 and 2.1 with $1+|t|$ replaced by $1+|t_0|$. [step 1.1, step 1.2, step 2.1, algebra]

4.1 Apply [F4] after an affine rescaling of the strip $[\sigma_-,\sigma_+]$ to $[0,1]$. The weight of the left boundary is $$ \lambda=\frac{\sigma_+-\sigma}{\sigma_+-\sigma_-}. $$ Because $\sigma_+-\sigma_-=1+2/a$, the interpolated conductor exponent is $\lambda(1/2+1/a)=\frac12(1+1/a-\sigma)$, and the ordinate exponent is $n_K\lambda(1/2+1/a)=\frac{n_K}{2}(1+1/a-\sigma)$. The factor $a^{n_K}$ is the same on both boundaries. At $s=\sigma+it_0$ the Gaussian has modulus $1$, so the claimed pointwise bound follows. [F4, step 3.1, algebra] ∎

## Proof status

Complete at the full stated AC+CountableChoice scope. The independently completed order-one Hecke input supplies subquadratic strip growth after division by the standard gamma factors. This is enough for the explicitly Gaussian-damped three-lines argument, whose uniform boundary estimates prove the displayed polynomial bound without an additional growth assumption. The field/character-dependent entire-growth constant is not promoted to a uniform constant. No class-field correspondence or zero-density theorem is used. The separate smoothed ideal-coset asymptotic and Selberg minimization obligations in the sieve consumers remain.
