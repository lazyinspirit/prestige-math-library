---
dependency_level: 2
id: lem-gl3-flat-distribution-power-multipliers-and-tempered-reciprocals
kind: lemma
title: "Power multipliers, finite-order compactification and tempered reciprocal distributions"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-gl3-distribution-vanishing-to-infinite-order-and-canonical-extension, lem-gl3-tempered-distribution-has-polynomial-growth-continuous-primitive, lem-gl3-compact-flat-distribution-normal-forms, lem-gl3-canonical-extension-is-unique, thm-compactly-supported-distributions-are-tempered, thm-differentiation-and-polynomial-multiplication-preserve-tempered-distributions, thm-leibniz-rule-for-distributions, def-pullback-of-a-distribution-by-a-diffeomorphism, lem-test-function-cutoffs-and-euclidean-localization, thm-dominated-convergence, def-countable-choice, thm-polynomial-growth-functions-define-tempered-distributions, thm-fourier-transform-of-a-compactly-supported-distribution-is-a-smooth-polynomially-bounded-multiplier, thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions, thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms, thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Miller and Schmid, Distributions and Analytic Continuation of Dirichlet Series, Proposition 2.26, Theorem 3.19 and discussion after Lemma 6.2"
      url: "https://arxiv.org/pdf/math/0403030v1"
---

## Statement

Assume Countable Choice. Every tempered distribution $T$ on $\mathbb R$ has a distribution extension to $\mathbb R\cup\{\infty\}$ of some finite integer vanishing order at infinity, and has some finite integer vanishing order at zero; these extensions are not asserted canonical.

If $R$ vanishes to infinite order at zero, then for every $\beta\in\mathbb C$, $\eta\in\{0,1\}$ and integer $q\ge0$ the punctured product $(\operatorname{sgn}x)^\eta|x|^\beta(\log|x|)^qR(x)$ has a unique extension flat to infinite order at zero. If $R$ is tempered on the full line, this extension is tempered. Multiplication by $x^r$, for an integer $r\ge0$, increases any finite integer vanishing order $k$ at zero to at least $k+r$.

If $T$ is tempered and has a canonical extension flat at infinity, then the punctured reciprocal $T(1/x)$ has a canonical extension at zero that is tempered on the full line. Consequently
$$(\operatorname{sgn}x)^\eta|x|^\beta T(1/x)$$
is tempered and flat to infinite order at zero for every $\beta,\eta$. All reciprocal operations mean scalar distribution pullback, without an extra density Jacobian multiplier. In particular a tempered distribution flat to infinite order at zero can be divided by a sufficiently large integer power of $x$, canonically at zero, so that the result has an extension of order at least one at infinity and its Fourier transform is represented by a continuous function of polynomial growth.

## Statement references

[Miller and Schmid, Proposition2.26, Theorem3.19 and the discussion following Lemma6.2](https://arxiv.org/pdf/math/0403030v1)

## Facts & Assumptions

**Given:** The stated distributions and [[def-countable-choice|Countable Choice]].

[F1] [[lem-gl3-tempered-distribution-has-polynomial-growth-continuous-primitive]] writes $T=D^\ell F$ with $F$ continuous of polynomial growth. [[thm-compactly-supported-distributions-are-tempered]] permits its application to a compact localization of an arbitrary distribution.

[F2] [[def-gl3-distribution-vanishing-to-infinite-order-and-canonical-extension]] defines all integer orders. [[lem-gl3-compact-flat-distribution-normal-forms]] gives the local form $\sum_jD^j(x^{k+j}h_j)$ with bounded coefficients at any nonnegative order $k$.

[F3] [[lem-gl3-canonical-extension-is-unique]] gives uniqueness of an extension flat at zero. [[thm-leibniz-rule-for-distributions]] gives the finite product rule.

[F4] [[def-pullback-of-a-distribution-by-a-diffeomorphism]] defines scalar reciprocal pullback. Its derivative chain rule follows by differentiating the defining test pairing with its absolute Jacobian.

[F5] [[lem-test-function-cutoffs-and-euclidean-localization]] gives smooth localizations. [[thm-dominated-convergence]] applies to the absolutely integrable finite-part kernels below. [[thm-polynomial-growth-functions-define-tempered-distributions]] treats continuous functions of polynomial growth, and [[thm-differentiation-and-polynomial-multiplication-preserve-tempered-distributions]] preserves temperedness under the indicated differential operators.

[F6] [[thm-fourier-transform-of-a-compactly-supported-distribution-is-a-smooth-polynomially-bounded-multiplier]] gives the smooth transform of a compact distribution. [[thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions]] and [[thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms]] give the bounded continuous transform of an L1 coefficient. [[thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions]] transforms its derivatives into polynomial frequency multipliers.

## Proof

**Given:** The stated data.

1.1 Let $T=D^\ell F$ as in [F1], with $|F(x)|\le C(1+|x|)^M$ and $M$ a nonnegative integer. On $u\ne0$ its reciprocal is [F1, F4, F5, algebra]
$$T(1/u)=(-u^2D_u)^\ell[F(1/u)].$$
For a direct check when the derivative order is one, substitute $x=1/u$ in the scalar pullback pairing and integrate the test derivative; its Jacobian derivative gives exactly the product-rule term in $-u^2D_u$. Iteration proves the displayed formula for distributions as well as functions. The continuous function $F(1/u)$ is $O(|u|^{-M})$ near zero. Choose a fixed $\chi\in C_c^\infty$ equal to one there and extend it as a distribution by
$$\langle Q,\phi\rangle=\int_{\mathbb R}F(1/u)\left(\phi(u)-\chi(u)\sum_{j=0}^{M}\frac{\phi^{(j)}(0)}{j!}u^j\right)du.$$
The bracket is $O(|u|^{M+1})$ near zero and compactly supported. Its integral is absolutely convergent and bounded by a fixed finite test seminorm on each compact support, by Taylor's remainder and the finite jet terms. Thus $Q$ is a distribution agreeing with $F(1/u)$ off zero. Then $(-u^2D_u)^\ell Q$ extends the reciprocal distribution, and gluing in the coordinate $u=1/x$ gives the desired compactification. [F1, F4, F5, algebra]

1.2 Let $m(x)=(\operatorname{sgn}x)^\eta|x|^\beta(\log|x|)^b$ on the punctured line, where $b\ge0$ is an integer, and suppose $R$ is infinitely flat at zero. For a desired integer order $q\ge1$, choose an integer $k\ge0$ with $k+\operatorname{Re}\beta>q$ and use [F2] on a smaller neighborhood. Each $m^{(a)}(x)$ is a finite sum of constant multiples of $(\operatorname{sgn}x)^{\eta+a}|x|^{\beta-a}(\log|x|)^c$ with $0\le c\le b$, by the finite product rule. Thus the identity [F2, F3, F5, algebra]
$$mD^j(x^{k+j}h)=\sum_{l=0}^j(-1)^{j-l}\binom jlD^l\bigl(m^{(j-l)}x^{k+j}h\bigr)$$
holds off zero. Each coefficient inside $D^l$ is $x^{q+l}$ times a bounded function, since its absolute magnitude divided by $|x|^{q+l}$ is bounded by a constant times $|x|^{k+\operatorname{Re}\beta-q}(1+|\log|x||)^b$, which is bounded because its power exponent is strictly positive. Taking the indicated derivatives of those bounded regular functions defines an extension of order $q$. Any two such extensions agree on overlap by [F3], since both have positive order and in particular their difference, supported at zero, cannot have positive order. One can see this latter finite-order uniqueness directly on scaled tests as in the definition: a positive-order normal form is $O(t^{q+1})$, whereas a nonzero finite sum of delta derivatives is not. Fixing the order-one extension therefore gives a single distribution which has every order $q$ on a possibly smaller neighborhood. It is the unique infinitely flat extension. [F2, F3, F5, algebra]

2.1 Every distribution in a coordinate neighborhood has some finite negative order: multiply by a compact cutoff, write it as $D^rB$ by [F1], and note that $B$ is bounded on a smaller neighborhood. Then $u^rD^rB$ is an order-zero form from [F2], so the distribution has order at least $-r$. Apply this both at zero to $T$ and at $u=0$ to the extension from step 1.1. This proves the finite-order assertions, without a canonical-extension claim. [F1, F2, F5, step 1.1, algebra]

2.2 If $R$ is tempered, a compact localization of the extension in step 1.2 is tempered by [F1]. On the complement of a neighborhood of zero, $m$ is smooth and each derivative grows at most polynomially at infinity. The product rule therefore bounds every Schwartz seminorm of $(1-\chi)m\phi$ by a fixed higher Schwartz seminorm of $\phi$. Transposing this continuous multiplication map proves temperedness of the remaining piece, and hence of the whole product. For integer $r\ge0$, the form $x^{k+j}D^jh$ immediately shows order $k+r$ after multiplication by $x^r$ when $k\ge0$. If $k=-q<0$ and $r\le q$, the defining equality $x^qR$ of order zero proves the assertion. If $r>q$, write $x^rR=x^{r-q}(x^qR)$ and use the already proved nonnegative-order case. [F1, F2, F3, F5, step 1.2, algebra]

3.1 Suppose now that $T$ extends flat at infinity. Its reciprocal has its required infinitely flat extension near zero by definition. To check growth at the other end, localize the original $T$ near zero and use [F1], $T_c=D^\ell F$. For large $|x|$ the continuous function $F(1/x)$ is bounded. Expanding the reciprocal chain operator from step 1.1 gives a finite sum $\sum_jb_jx^{\ell+j}D_x^j[F(1/x)]$. Multiplying by a cutoff zero near $x=0$, this is a sum of derivatives and polynomial multiples of bounded continuous regular distributions; commuting the cutoff through each derivative adds only compactly supported distributions. Every term is tempered by [F1] and [F5]. On compact sets, including the new origin, the canonical extension is a distribution and its compact localization is tempered. This proves global temperedness of the reciprocal. Applying steps 1.2–2.2 to this reciprocal proves the weighted reciprocal assertion for every complex $\beta$, both signs and every logarithmic power. [F1, F2, F4, F5, step 1.1, step 1.2, step 2.2, algebra]

3.2 Finally suppose $T$ is tempered and infinitely flat at zero. Step 2.1 supplies some order $k_\infty\in\mathbb Z$ at infinity. Choose an integer $r\ge0$ with $k_\infty+r\ge1$ and form $x^{-r}T$ by steps 1.2–2.2. In the infinity coordinate this is $u^rT(1/u)$, which has order at least $k_\infty+r$ by step 2.2. The same construction preserves infinite flatness at zero, is tempered, and yields the asserted order-one infinity extension. Zero distributions use zero coefficients throughout. No extension has been declared canonical unless infinite flatness was proved. [F1, F2, F3, step 2.1, step 1.2, step 2.2]

4.1 Increase $r$ further to obtain the stated Fourier regularity. Split $T$ with a compact cutoff equal to one near zero. After division by $x^r$, the compact part is a compact distribution, whose transform is smooth with polynomial growth by [F6]. The far part is zero near zero, so [F1] gives $T_{\mathrm{far}}=D^\ell F$ with $F$ continuous of polynomial growth and identically zero near zero. On the whole line the product rule gives [F1, F3, F5, F6, step 1.2, step 2.2, step 3.2, algebra]
$$x^{-r}D^\ell F=\sum_{j=0}^{\ell}(-1)^{\ell-j}\binom\ell jD^j\bigl((D^{\ell-j}x^{-r})F\bigr),$$
where each coefficient is defined to be zero near zero, since $F$ is. If $F=O((1+|x|)^M)$, choosing $r>M+1$ makes every coefficient L1. Their Fourier transforms are bounded continuous functions by [F6], and the derivative transforms are polynomial multiples of these functions. Thus the entire Fourier transform is continuous with polynomial growth, in particular bounded near zero. This enlargement of $r$ preserves the order-one infinity conclusion of step 3.2. [F1, F3, F5, F6, step 1.2, step 2.2, step 3.2, algebra] ∎
