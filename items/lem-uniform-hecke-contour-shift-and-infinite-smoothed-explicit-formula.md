---
id: lem-uniform-hecke-contour-shift-and-infinite-smoothed-explicit-formula
kind: lemma
title: Uniform Hecke contour control and the infinite smoothed explicit formula
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
- thm-primitive-hecke-l-analytic-continuation-and-functional-equation
- lem-primitive-hecke-canonical-product-and-real-zero-sum
- lem-primitive-hecke-analytic-landau-page-family-core
- lem-primitive-hecke-logarithmic-derivative-zero-sum-inequality
- thm-finite-order-hecke-l-euler-product
- thm-gamma-weierstrass-product
- thm-weierstrass-convergence-holomorphic-functions
- cor-derivative-operators-are-continuous-for-local-uniform-convergence
- thm-smoothed-explicit-formula-for-abelian-chebotarev-prime-ideal-sums
- lem-character-orthogonality-for-finite-abelian-groups
- def-abelian-chebotarev-weighted-prime-ideal-sum
- lem-ray-class-hecke-l-function-finite-euler-correction
- def-finite-order-ray-class-hecke-character-and-l-function
- thm-number-field-integral-ideal-factorisation-in-zf
- thm-ideal-norm-is-multiplicative
- thm-ftc-second-part
- lem-continuous-functions-riemann-integrable
- lem-riemann-integral-linearity
- thm-logarithm-derivative-and-integral
- thm-complex-exponential-is-entire-with-derivative-itself
- thm-natural-logarithm-laws
- thm-exponential-beats-every-polynomial
- def-axiom-of-choice
- def-countable-choice
- def-dependent-choice
- thm-euler-mascheroni-constant-and-harmonic-asymptotic
- thm-gamma-meromorphic-continuation
- ex-smooth-compactly-supported-bump
- thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign
- lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals
- cor-gamma-function-has-no-zeros
justified_by: []
proof_strategy: direct
axiom_use: AC+CC+DC retain the already-proved primitive Hecke and finite ray-class
  identity scopes. Finite interval avoidance and explicit normal/improper tails add
  no choice principle.
sources:
  references:
  - title: Jesse Thorner and Asif Zaman, A unified and improved Chebotarev density
      theorem
    url: https://arxiv.org/pdf/1803.02823v3
    locator: Cached source §2 Lemmas2.5–2.6 and §3 read. Quantitative left-line and
      height bounds below are locally reconstructed from accepted canonical-product/Gamma/Euler
      interfaces; the accepted finite-rectangle identity is used at its public scope,
      not re-reviewed.
---

## Statement

Assume AC, Countable Choice and Dependent Choice. Let $K$ have degree $n$ and absolute discriminant $D$, and let $\chi$ be a primitive finite-order Hecke character of conductor discriminant $d_\chi=DN\mathfrak f_{\chi,0}$. Put $\delta_\chi=1$ for the trivial character and zero otherwise. There is an absolute effective $C$ such that
$$\left|\frac{L'}L(-1/2+it,\chi)\right|\le C\bigl(\log d_\chi+n\log(|t|+3)\bigr)\qquad(t\in\mathbb R).$$
For any finite nonempty indexed family $(\chi_j)_{j=1}^h$ of such primitive characters with $N\mathfrak f_{\chi_j,0}\le Q_0$, and every $U\ge2$, there is $\tau\in[U,U+1]$ such that, simultaneously for $1\le j\le h$ and $-1/2\le\sigma\le2$,
$$\left|\frac{L'}L(\sigma\pm i\tau,\chi_j)\right|\le Ch\bigl(\log(DQ_0)+n\log(U+3)\bigr)^2.$$
The heights can additionally avoid zeros of any specified finite set of nonzero meromorphic Hecke functions on the horizontal boundary segments.

Let $X>0$, $W\in C_c^2((0,\infty),\mathbb C)$ and $\widetilde W(s)=\int_0^\infty W(u)u^{s-1}du$. Write $\mathcal Z_\chi$ for the zero multiset of the pole-cleared primitive completion, so $0<\operatorname{Re}\rho<1$, and put $a_\chi=\#\{\text{real places of even parity}\}+r_2$ and $m_\chi(0)=a_\chi-\delta_\chi\in[0,n]$. Then
$$\Psi_\chi^*(X;W):=\sum_{\mathfrak p}\sum_{k\ge1}\chi(\mathfrak p)^k\log N\mathfrak p\,W((N\mathfrak p)^k/X)=\delta_\chi X\widetilde W(1)-\sum_{\rho\in\mathcal Z_\chi}X^\rho\widetilde W(\rho)-m_\chi(0)\widetilde W(0)+I_\chi,$$
where the zero sum is absolutely convergent, includes multiplicities, and
$$I_\chi=\frac1{2\pi i}\int_{-1/2-i\infty}^{-1/2+i\infty}-\frac{L'}L(s,\chi)X^s\widetilde W(s)ds,\qquad |I_\chi|\le CX^{-1/2}\int_{\mathbb R}|\widetilde W(-1/2+it)|\bigl(\log d_\chi+n\log(|t|+3)\bigr)dt.$$
All displayed integrals are absolutely convergent improper integrals.

In particular let $G=\operatorname{Cl}_{\mathfrak m}(K)/H$ be any quotient of a finite ray class group, $C_0\in G$, $h=|G|$, $Q_0=\max_{\chi\in\widehat G}N\mathfrak f_{\chi,0}$ and $R=\log N\operatorname{rad}(\mathfrak m_0)$. Define $\Psi_{C_0}$ by the same finite prime-power sum with condition $[\mathfrak p]^kH=C_0$, and view characters of $G$ as their pullbacks. With primitive ancestors in the sums and $\operatorname{supp}W\subset[a,b]\subset(0,\infty)$,
$$\Psi_{C_0}(X;W)=\frac{X\widetilde W(1)}h-\frac1h\sum_{\chi\in\widehat G}\overline{\chi(C_0)}\sum_{\rho\in\mathcal Z_{\chi^*}}X^\rho\widetilde W(\rho)+\mathcal E_{C_0},$$
where $\mathcal E_{C_0}=h^{-1}\sum_\chi\overline{\chi(C_0)}(I_{\chi^*}-m_{\chi^*}(0)\widetilde W(0))-\mathcal D_{C_0}$ and the exact finite-prime deletion is
$$\mathcal D_{C_0}=\frac1h\sum_\chi\overline{\chi(C_0)}\sum_{\substack{\mathfrak p\mid\mathfrak m_0\\\mathfrak p\nmid\mathfrak f_{\chi,0}}}\sum_{k\ge1}\chi^*(\mathfrak p)^k\log N\mathfrak p\,W((N\mathfrak p)^k/X).$$
Uniformly,
$$|\mathcal E_{C_0}|\le n|\widetilde W(0)|+\frac R{\log2}\|W\|_\infty\log^+(bX)+CX^{-1/2}\int_{\mathbb R}|\widetilde W(-1/2+it)|\bigl(\log(DQ_0)+n\log(|t|+3)\bigr)dt,$$
where $\log^+z=\max\{0,\log z\}$. Empty conductor support, $W=0$, degree one and principal characters are included; no class-field realization or vanishing of the left-line integral is asserted.

## Facts & Assumptions

**Given:** The field, primitive characters or ray quotient, compact $C^2$ test and exact parameters in the Statement.

[F1] Primitive Hecke functions have their standard conductor/Gamma functional equation, meromorphic continuation and sole possible simple pole at one. Their pole-cleared completion has its exact genus-one product and real logarithmic zero sum, with reciprocal-square convergence. Its zeros lie in the open critical strip, by the separately proved boundary exclusion. [[thm-primitive-hecke-l-analytic-continuation-and-functional-equation]] [[lem-primitive-hecke-canonical-product-and-real-zero-sum]] [[lem-primitive-hecke-analytic-landau-page-family-core]]

[F2] Euler logarithmic derivatives converge absolutely above one. For $1<\sigma\le2$, the primitive real zero-sum upper inequality has error $\frac12\log(d_\chi(|t|+3)^n)+3n$, a principal pole term and nonpositive zero terms. [[thm-finite-order-hecke-l-euler-product]] [[lem-primitive-hecke-logarithmic-derivative-zero-sum-inequality]]

[F3] Reciprocal Gamma has its Weierstrass product, Gamma has no zeros and has simple poles exactly at the nonpositive integers, and normal holomorphic convergence allows termwise differentiation. The Euler constant lies in $(0,1)$. [[thm-gamma-weierstrass-product]] [[cor-gamma-function-has-no-zeros]] [[thm-gamma-meromorphic-continuation]] [[thm-euler-mascheroni-constant-and-harmonic-asymptotic]] [[thm-weierstrass-convergence-holomorphic-functions]] [[cor-derivative-operators-are-continuous-for-local-uniform-convergence]]

[F4] The already-proved finite-rectangle ray-class explicit formula has remainder $U+V-H$ at every admissible rectangle. Finite character orthogonality recovers any one twisted character identity by summing the class identities. [[thm-smoothed-explicit-formula-for-abelian-chebotarev-prime-ideal-sums]] [[lem-character-orthogonality-for-finite-abelian-groups]]

[F5] Weighted ray-class prime-power sums are finite for compact $W$ and satisfy their exact character expansion. A ray-class character is its primitive ancestor times the exact deleted Euler factors. Prime ideals factor uniquely and their norms multiply. [[def-abelian-chebotarev-weighted-prime-ideal-sum]] [[lem-ray-class-hecke-l-function-finite-euler-correction]] [[def-finite-order-ray-class-hecke-character-and-l-function]] [[thm-number-field-integral-ideal-factorisation-in-zf]] [[thm-ideal-norm-is-multiplicative]]

[F6] Compact continuous Riemann integrals have FTC and linearity. Logarithms and complex exponentials have their derivative and product laws, and an exponential dominates every fixed polynomial. [[thm-ftc-second-part]] [[lem-continuous-functions-riemann-integrable]] [[lem-riemann-integral-linearity]] [[thm-logarithm-derivative-and-integral]] [[thm-complex-exponential-is-entire-with-derivative-itself]] [[thm-natural-logarithm-laws]] [[thm-exponential-beats-every-polynomial]]

[F7] A nonnegative compact smooth bump positive on $(-1,1)$ exists. Convolution with its unit-mass normalization is smooth under CC. On finite boxes a bounded Borel Riemann-integrable function has equal Riemann and Lebesgue integrals. [[ex-smooth-compactly-supported-bump]] [[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]] [[lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals]]

[A1] Retain AC, CC and DC at the literal primitive-Hecke and finite-rectangle scopes. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

## Proof

First prove the formulas for $W\in C_c^\infty$; the final block extends all assertions to the full stated $C_c^2$ scope.

1.1 Write $F_\chi=L'/L$ and $H_\chi$ for the logarithmic derivative of its Gamma product. The Weierstrass series [F3] gives $\psi_\Gamma(w)=-\gamma+\sum_{j\ge0}(1/(j+1)-1/(j+w))$. For $\operatorname{Re}w\ge1/2$, split at the least $J\ge2|w|+2$. The initial absolute sum is at most $C+2\log(J+1)$, using $|j+w|\ge j+1/2$ and harmonic integral comparison. The tail is at most $C(|w|+1)/J\le C$, since its summand is $(w-1)/[(j+1)(j+w)]$. Thus $|\psi_\Gamma(w)|\le C\log(|w|+3)$. Subtracting shifted Weierstrass series gives the recurrence $\psi_\Gamma(w+1)=\psi_\Gamma(w)+1/w$. On $s=-1/2+it$, every Gamma argument becomes right-half-plane after at most one such shift, and its original modulus is at least $1/4$. Therefore $|H_\chi(s)|+|H_{\bar\chi}(1-s)|\le Cn\log(|t|+3)$. Euler positivity and [F2] at $3/2$ give $|F_{\bar\chi}(3/2-it)|\le-\zeta_K'/\zeta_K(3/2)\le C(\log D+n)$. Logarithmically differentiate [F1]'s functional equation to obtain $F_\chi(s)=-F_{\bar\chi}(1-s)-\log d_\chi-H_\chi(s)-H_{\bar\chi}(1-s)$. This proves the asserted left-line bound. The same Gamma argument gives $|H_\chi(\sigma+it)|\le Cn\log(|t|+3)$ for $-1/2\le\sigma\le2$ and $|t|\ge2$, since the shift denominators are then uniformly bounded. [F1, F2, F3, F6, given, algebra]

1.2 The completion $\Xi_\chi(s)=[s(s-1)]^{\delta_\chi}\Lambda(s,\chi)$ is nonzero at zero by [F1]. Its Gamma product has a pole of order $a_\chi$ there. Orders in this exact identity give $\operatorname{ord}_{s=0}L(s,\chi)=a_\chi-\delta_\chi=:m_\chi(0)$, between zero and $n$, since $L$ has no pole at zero. The other Gamma-trivial zeros are at negative integers, so in $-1/2<\operatorname{Re}s<2$ the zeros of the primitive function are exactly $\mathcal Z_\chi$ and these $m_\chi(0)$ occurrences at zero. For $\operatorname{supp}W\subset[a,b]$, repeated compact FTC integration by parts with $\mathcal D=u\,d/du$ gives $\widetilde W(s)=(-1)^N s^{-N}\int_a^b(\mathcal D^NW)(u)u^{s-1}du$ when $|\operatorname{Im}s|\ge1$. Boundary terms vanish because the smooth compact extension is zero outside $[a,b]$. It follows that $|\widetilde W(\sigma+it)|\le C_{W,N}(1+|t|)^{-N}$ uniformly for $-1/2\le\sigma\le2$, with explicit finite compact seminorms. This also follows at bounded heights directly from the defining integral; its power-series expansion in $s$ on bounded discs proves entireness by uniform finite-interval tails. [F1, F3, F6, given, algebra]

2.1 Put $\mathcal L_U=\log(DQ_0)+n\log(U+3)$. At $w=2+it$, Euler positivity and [F2] bound $|F_\chi(w)|\le C(\log D+n)$. The exact real completion identity [F1], step 1.1 and its explicit principal pole terms imply $\sum_\rho\operatorname{Re}(w-\rho)^{-1}\le C(\log d_\chi+n\log(|t|+3))$. Since $1\le2-\operatorname{Re}\rho\le2$, this also bounds $\sum_\rho|w-\rho|^{-2}$. For zero ordinates in either interval $[U-1,U+2]$ or $[-U-2,-U+1]$, evaluate that real kernel at the respective midpoint: every such occurrence contributes at least a fixed positive constant. Their total occurrence count, summed over the $h$ indexed functions, is consequently $M\le Ch\mathcal L_U$. This also proves finiteness directly, with repeated nodes retained. [F1, F2, step 1.1, algebra]

3.1 Remove from $[U,U+1]$ the closed intervals of radius $\eta=1/[8(M+1)]$ about the absolute values of those $M$ ordinates. Their total length is at most $1/4$, so a nonempty open interval remains; this follows by sorting the finitely many endpoints and adding lengths. On this remaining interval every ordinate relevant to $\pm\tau$ is at distance at least $\eta$. Removing additionally any specified finite set of bad heights still leaves a nonempty open interval. In particular it can avoid zeros or poles on the horizontal segments of any specified finite collection of nonzero meromorphic Hecke functions: each has only finitely many such bad points in the compact band. Choose $\tau$ there. The vertical sides $\operatorname{Re}s=2,-1/2$ are automatically free of zeros/poles, because Euler products are nonzero above one, primitive completion zeros are critical, Gamma-trivial zeros are integers, and finite Euler-factor zeros have real part zero. [A1, F1, F2, F5, step 2.1, construct, algebra]

4.1 At $s=\sigma\pm i\tau$, $-1/2\le\sigma\le2$, subtract the canonical logarithmic product at $w=2\pm i\tau$ to cancel its undetermined affine constant. The difference of the zero series is $\sum_\rho((s-\rho)^{-1}-(w-\rho)^{-1})$, absolutely normally convergent. For $|\operatorname{Im}\rho\mp\tau|\le1$, step 2.1 gives at most $C\mathcal L_U$ terms, each at most $\eta^{-1}+1$. For the remaining terms, $|w-\rho|\le(7/2)|s-\rho|$, so the absolute difference is at most $(35/4)|w-\rho|^{-2}$; step 2.1 sums these by $C\mathcal L_U$. The Gamma difference is $O(n\log(U+3))$ by step 1.1 and the explicit pole-clearing fractions are bounded at $|\tau|\ge2$. Together with $|F_\chi(w)|\le C\mathcal L_U$, this yields $|F_\chi(s)|\le C\mathcal L_U(M+1)\le Ch\mathcal L_U^2$. This proves the simultaneous height estimate, without bounding the unknown canonical exponential constant or losing conductor uniformity. [F1, F2, F3, step 1.1, step 2.1, step 3.1, algebra]

5.1 Apply [F4] at the FULL conductor modulus of one primitive $\chi$, with $c=2$ and $\alpha=-1/2$. Sum its class identities against $\chi(C)$ over the finite ray class group. Orthogonality cancels every other character and gives the individual primitive identity with right-line tails, left segment and signed horizontal segments. Its primitive Euler product is exactly the twisted sum $\Psi_\chi^*$ in the Statement, because primes dividing its conductor have character value zero. The stated primitive analytic hypothesis of [F4] is actually supplied by [F1]; no class-field existence is needed. For each $U$, the height in step 3.1 may also avoid the finitely many bad heights of all ray characters used in this application, even their finite-factor zeros. This ensures [F4]'s literal boundary hypothesis, without requiring a quantitative bound for those auxiliary functions. After orthogonality only the primitive $\chi$ segments remain, so step 4.1 is the required quantitative bound. Apply the same finite argument to every indexed member if a family is specified. [F1, F4, F5, step 3.1, step 4.1, step 1.2, construct, algebra]

6.1 Let $U\to\infty$ through integers and choose the common heights from step 3.1. The right-line tails vanish by the absolute Euler bound on $\operatorname{Re}s=2$ and step 1.2's rapid decay. The horizontal segments have absolute value at most $C_{W,N}h\max\{X^2,X^{-1/2}\}\mathcal L_U^2U^{-N}$ by step 4.1, so tend to zero for $N\ge2$. The left segments converge absolutely by step 1.1 and the same rapid decay, with exactly the asserted bound for $I_\chi$. The critical-zero sum converges absolutely: step 2.1 applied in unit ordinate bands gives at most $C(\log d_\chi+n\log(j+3))$ occurrences in each band, while step 1.2 gives $C_{W,3}(j+1)^{-3}$ there and $|X^\rho|\le\max\{1,X\}$. The resulting explicit logarithmic-over-cubic tail converges. Thus one may pass to the full multiset limit in step 5.1, retaining the finite order-at-zero term of step 1.2. This proves the primitive infinite formula, all signs and its absolute convergence. Each auxiliary finite ray group is fixed before the limit; its size does not enter the final remainder bound. [F1, F2, F4, F6, step 1.1, step 2.1, step 3.1, step 4.1, step 1.2, step 5.1, algebra]

7.1 For the quotient application, sum the original weighted class definition over the ray classes in the fiber of $C_0$. Finite orthogonality on $G$ gives exactly its character average with normalization $1/h$, where only pullback characters trivial on $H$ occur. Subtract from each primitive sum precisely the primes dividing $\mathfrak m_0$ but not its conductor, using [F5], and average against $\overline{\chi(C_0)}/h$. Exactly one ray character has trivial primitive ancestor, namely the trivial character itself, so the pole term is $X\widetilde W(1)/h$ for EVERY class. The finite subtraction is exactly $\mathcal D_{C_0}$ displayed. At one such prime, the number of potentially contributing positive powers times $\log N\mathfrak p$ is at most $\log^+(bX)$, since $N\mathfrak p\ge2$. There are at most $R/\log2$ primes dividing $\mathfrak m_0$. Consequently $|\mathcal D_{C_0}|\le(R/\log2)\|W\|_\infty\log^+(bX)$, with value zero when the support is empty or $bX<2$. Step 1.2 gives $m_\chi(0)\le n$, and $\log d_{\chi^*}\le\log(DQ_0)$ in the left-line bound of step 6.1. Finite averaging and the triangle inequality therefore give exactly the final asserted error bound; no factor $h$ survives it. The case $R=0$ is the empty prime-deletion sum, and $W=0$ makes every term zero. [F1, F4, F5, F6, step 1.2, step 6.1, algebra]

8.1 Let now $W\in C_c^2((0,\infty))$, extended by zero to $\mathbb R$. Normalize the bump of [F7] to a nonnegative mass-one $\varphi\in C_c^\infty([-1,1])$ and put $W_\varepsilon(u)=\int_{-1}^1\varphi(v)W(u-\varepsilon v)dv$, $0<\varepsilon<a/2$. It is smooth and supported in $[a-\varepsilon,b+\varepsilon]\subset[a/2,2b]$ by [F7], with the finite Riemann and Lebesgue interpretations identified by its stated bridge. Compact FTC applied to $W,W',W''$ gives $W_\varepsilon^{(j)}(u)=\int\varphi(v)W^{(j)}(u-\varepsilon v)dv$ for $j=0,1,2$. Uniform continuity on their common compact support gives $\|W_\varepsilon-W\|_{C^2}\to0$, directly by their moduli of continuity. The integration-by-parts formula of step 1.2 at $N=2$ therefore yields $|\widetilde{W_\varepsilon-W}(\sigma+it)|\le C_{a,b}\|W_\varepsilon-W\|_{C^2}(1+|t|)^{-2}$ on $-1/2\le\sigma\le2$. The critical-zero difference sum tends to zero, because step 2.1 bounds it by $C_{a,b}\max\{1,X\}\|W_\varepsilon-W\|_{C^2}$ times the explicit convergent series $\sum_{j\ge0}(\log d_\chi+n\log(j+3))/(1+j)^2$. The left-integral difference tends to zero by step 1.1 and the corresponding explicit convergent log-over-square integral; the value at zero and pole term also converge. Prime sums have common finite support, so converge termwise. Thus the primitive formula and every absolute convergence assertion pass from smooth $W_\varepsilon$ to $W$. For the quotient bound use $\|W_\varepsilon\|_\infty\le\|W\|_\infty$, $\log^+((b+\varepsilon)X)\to\log^+(bX)$ and the same weighted Mellin norm convergence. This gives exactly the bound with the original $b$, and finite averaging passes all quotient identities as well. No generic dominated-convergence or infinite Fubini step is used in this extension; the only improper passages have the explicit summable tails above. [A1, F1, F5, F6, F7, step 1.1, step 1.2, step 2.1, step 6.1, step 7.1, construct, algebra] ∎
