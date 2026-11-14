---
title: An absolute thermal envelope controls radial correlations
status: published
research_item: lem-author-ef1b96c593db-thermal-integrable-envelope
dependency_level: 0
---

## Prerequisites

- [math:def-integrable-real-and-complex-functions-and-their-integrals](https://alphabetamath.cc/item/def-integrable-real-and-complex-functions-and-their-integrals)
- [math:thm-integral-triangle-inequality](https://alphabetamath.cc/item/thm-integral-triangle-inequality)
- [math:thm-linearity-of-the-lebesgue-integral-on-l-one](https://alphabetamath.cc/item/thm-linearity-of-the-lebesgue-integral-on-l-one)
- [math:prop-order-and-scalar-rules-for-the-nonnegative-integral](https://alphabetamath.cc/item/prop-order-and-scalar-rules-for-the-nonnegative-integral)
- [math:thm-dominated-convergence](https://alphabetamath.cc/item/thm-dominated-convergence)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [math:def-borel-sigma-algebra](https://alphabetamath.cc/item/def-borel-sigma-algebra)
- [math:def-measurable-function-between-measurable-spaces](https://alphabetamath.cc/item/def-measurable-function-between-measurable-spaces)
- [math:def-lebesgue-measure-and-the-lebesgue-sigma-algebra](https://alphabetamath.cc/item/def-lebesgue-measure-and-the-lebesgue-sigma-algebra)
- [math:thm-lebesgue-measure-is-a-complete-measure](https://alphabetamath.cc/item/thm-lebesgue-measure-is-a-complete-measure)
- [math:thm-borel-sets-are-lebesgue-measurable](https://alphabetamath.cc/item/thm-borel-sets-are-lebesgue-measurable)
- [math:thm-borel-sigma-algebra-of-a-subspace-is-the-trace](https://alphabetamath.cc/item/thm-borel-sigma-algebra-of-a-subspace-is-the-trace)
- [math:thm-continuous-preimages-of-borel-sets-are-borel](https://alphabetamath.cc/item/thm-continuous-preimages-of-borel-sets-are-borel)
- [math:thm-composition-with-borel-functions-preserves-measurability](https://alphabetamath.cc/item/thm-composition-with-borel-functions-preserves-measurability)
- [math:thm-coordinatewise-measurability-into-r-n](https://alphabetamath.cc/item/thm-coordinatewise-measurability-into-r-n)
- [math:thm-exponential-is-strictly-increasing](https://alphabetamath.cc/item/thm-exponential-is-strictly-increasing)
- [math:thm-complex-exponential-is-entire-with-derivative-itself](https://alphabetamath.cc/item/thm-complex-exponential-is-entire-with-derivative-itself)
- [math:cor-complex-exponential-cartesian-form-modulus-and-eulers-identity](https://alphabetamath.cc/item/cor-complex-exponential-cartesian-form-modulus-and-eulers-identity)
- [math:lem-algebra-of-continuous-real-maps-on-a-space](https://alphabetamath.cc/item/lem-algebra-of-continuous-real-maps-on-a-space)
- [math:thm-metric-continuity-characterisations](https://alphabetamath.cc/item/thm-metric-continuity-characterisations)
- [math:def-subspace-topology-top](https://alphabetamath.cc/item/def-subspace-topology-top)
- [math:def-measure](https://alphabetamath.cc/item/def-measure)
- [math:def-nonnegative-lebesgue-integral](https://alphabetamath.cc/item/def-nonnegative-lebesgue-integral)
- [math:def-complex-conjugate-real-imaginary-part-and-modulus](https://alphabetamath.cc/item/def-complex-conjugate-real-imaginary-part-and-modulus)
- [math:lem-complex-conjugation-and-modulus-laws](https://alphabetamath.cc/item/lem-complex-conjugation-and-modulus-laws)
- [math:thm-continuity-characterisations-top](https://alphabetamath.cc/item/thm-continuity-characterisations-top)
- [math:thm-product-universal-property](https://alphabetamath.cc/item/thm-product-universal-property)


## Statement

Assume the Axiom of Countable Choice. Let $I=(0,\infty)$ have its usual subspace topology and Borel sigma-algebra $\mathcal B(I)$, and let $\lambda$ denote one-dimensional Lebesgue measure. All frequency integrals use the measure $\mu$ on $\mathcal B(I)$ defined by $\mu(A)=\lambda(A)$ for $A\in\mathcal B(I)$; write $d\omega=d\mu(\omega)$. Give $\mathbb C\simeq\mathbb R^2$ its usual topology and Borel sigma-algebra. Here Borel $\kappa:I\to\mathbb C$ means $\kappa^{-1}(E)\in\mathcal B(I)$ for every Borel $E\subseteq\mathbb C$.

Fix $\beta>0$ and such a Borel function $\kappa$. Put $N_\beta(\omega)=(e^{\beta\omega}-1)^{-1}$ and $W(\omega)=|\kappa(\omega)|^2\omega^2(2N_\beta(\omega)+1)$. Suppose $M=\int_0^\infty W(\omega)\,d\omega<\infty$. For real $t$ define $f_t(\omega)=|\kappa(\omega)|^2\omega^2[N_\beta(\omega)e^{i\omega t}+(N_\beta(\omega)+1)e^{-i\omega t}]$. Then $f_t$ is absolutely integrable, $|\int f_t|\leq M$, $\int f_0=M$, and $t\mapsto\int f_t$ is continuous. This assumption is exactly finiteness at $t=0$ of the nonnegative integral.

## Facts & Assumptions

**Given:** Countable Choice, the measure and Borel conventions just specified, $\beta>0$, Borel $\kappa:I\to\mathbb C$, and the finite nonnegative integral $M$.

[F1] Absolute integrability defines the complex Lebesgue integral. [math:def-integrable-real-and-complex-functions-and-their-integrals](https://alphabetamath.cc/item/def-integrable-real-and-complex-functions-and-their-integrals)

[F2] An integral has modulus at most the integral of its modulus. [math:thm-integral-triangle-inequality](https://alphabetamath.cc/item/thm-integral-triangle-inequality)

[F3] The Lebesgue integral is linear on integrable functions. [math:thm-linearity-of-the-lebesgue-integral-on-l-one](https://alphabetamath.cc/item/thm-linearity-of-the-lebesgue-integral-on-l-one)

[F4] The nonnegative integral is monotone and homogeneous. [math:prop-order-and-scalar-rules-for-the-nonnegative-integral](https://alphabetamath.cc/item/prop-order-and-scalar-rules-for-the-nonnegative-integral)

[F5] Dominated convergence applies to complex measurable functions under a single integrable majorant. [math:thm-dominated-convergence](https://alphabetamath.cc/item/thm-dominated-convergence)

[F6] Countable Choice is assumed for the Lebesgue-measure suppliers and the sequential converse for metric continuity. [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

[F7] The Borel sigma-algebra is generated by open sets, and measurability of a map means measurability of inverse images of measurable codomain sets. [math:def-borel-sigma-algebra](https://alphabetamath.cc/item/def-borel-sigma-algebra) [math:def-measurable-function-between-measurable-spaces](https://alphabetamath.cc/item/def-measurable-function-between-measurable-spaces)

[F8] Under Countable Choice, $\lambda$ is a measure on $\mathcal L(\mathbb R)$ and $\mathcal B(\mathbb R)\subseteq\mathcal L(\mathbb R)$. [math:def-lebesgue-measure-and-the-lebesgue-sigma-algebra](https://alphabetamath.cc/item/def-lebesgue-measure-and-the-lebesgue-sigma-algebra) [math:thm-lebesgue-measure-is-a-complete-measure](https://alphabetamath.cc/item/thm-lebesgue-measure-is-a-complete-measure) [math:thm-borel-sets-are-lebesgue-measurable](https://alphabetamath.cc/item/thm-borel-sets-are-lebesgue-measurable)

[F9] The Borel sigma-algebra of a subspace is the trace of the ambient Borel sigma-algebra. [math:thm-borel-sigma-algebra-of-a-subspace-is-the-trace](https://alphabetamath.cc/item/thm-borel-sigma-algebra-of-a-subspace-is-the-trace)

[F10] Continuous maps between topological spaces are Borel measurable; measurable maps compose; a map into $\mathbb R^n$ is measurable exactly when its real coordinates are measurable. [math:thm-continuous-preimages-of-borel-sets-are-borel](https://alphabetamath.cc/item/thm-continuous-preimages-of-borel-sets-are-borel) [math:thm-composition-with-borel-functions-preserves-measurability](https://alphabetamath.cc/item/thm-composition-with-borel-functions-preserves-measurability) [math:thm-coordinatewise-measurability-into-r-n](https://alphabetamath.cc/item/thm-coordinatewise-measurability-into-r-n)

[F11] The real exponential is continuous and strictly increasing. The complex exponential is entire and hence continuous, and $|e^{ix}|=1$ for real $x$. [math:thm-exponential-is-strictly-increasing](https://alphabetamath.cc/item/thm-exponential-is-strictly-increasing) [math:thm-complex-exponential-is-entire-with-derivative-itself](https://alphabetamath.cc/item/thm-complex-exponential-is-entire-with-derivative-itself) [math:cor-complex-exponential-cartesian-form-modulus-and-eulers-identity](https://alphabetamath.cc/item/cor-complex-exponential-cartesian-form-modulus-and-eulers-identity)

[F12] Finite sums, products, and quotients with nonzero denominators of continuous real-valued maps are continuous. [math:lem-algebra-of-continuous-real-maps-on-a-space](https://alphabetamath.cc/item/lem-algebra-of-continuous-real-maps-on-a-space)

[F13] For maps between metric spaces, convergence of images along every convergent sequence implies continuity under Countable Choice. [math:thm-metric-continuity-characterisations](https://alphabetamath.cc/item/thm-metric-continuity-characterisations)

[F14] The subspace topology on a subset consists of traces of ambient open sets. [math:def-subspace-topology-top](https://alphabetamath.cc/item/def-subspace-topology-top)

[F15] A measure is a nonnegative extended-valued function on a sigma-algebra, zero on the empty set and countably additive on pairwise disjoint sequences. [math:def-measure](https://alphabetamath.cc/item/def-measure)

[F16] The nonnegative Lebesgue integral is the supremum of the integrals of nonnegative simple measurable minorants. [math:def-nonnegative-lebesgue-integral](https://alphabetamath.cc/item/def-nonnegative-lebesgue-integral)

[F17] For $z=a+bi$, $\operatorname{Re}z=a$, $\operatorname{Im}z=b$ and $|z|=\sqrt{a^2+b^2}$. [math:def-complex-conjugate-real-imaginary-part-and-modulus](https://alphabetamath.cc/item/def-complex-conjugate-real-imaginary-part-and-modulus)

[F18] Complex modulus is nonnegative, multiplicative and subadditive: $|zw|=|z||w|$ and $|z+w|\leq|z|+|w|$. [math:lem-complex-conjugation-and-modulus-laws](https://alphabetamath.cc/item/lem-complex-conjugation-and-modulus-laws)

[F19] A map between topological spaces is continuous exactly when inverse images of open sets are open. [math:thm-continuity-characterisations-top](https://alphabetamath.cc/item/thm-continuity-characterisations-top)

[F20] Product projections are continuous, and a map into a product is continuous exactly when its components are continuous. Only these choice-free clauses are used here. [math:thm-product-universal-property](https://alphabetamath.cc/item/thm-product-universal-property)

## Proof

**Given:** Countable Choice, the measure and Borel conventions just specified, $\beta>0$, Borel $\kappa:I\to\mathbb C$, and the finite nonnegative integral $M$.

**Goal:** Establish the absolute-integral bounds, equal-time identity and continuity. 

1.1 The interval $I$ is open in $\mathbb R$, so [F9] makes each $A\in\mathcal B(I)$ an ambient Borel set: $A=I\cap B$ for some $B\in\mathcal B(\mathbb R)$. Thus [F8] defines $\mu(A)=\lambda(A)$. The empty set has measure zero, and for any pairwise disjoint sequence in $\mathcal B(I)$ its union is still in $\mathcal B(I)$ and countable additivity of $\lambda$ gives countable additivity of $\mu$. Hence the stated restriction is a measure on the interval, as needed by the integral suppliers. [F6, F7, F8, F9, F14, F15]

1.2 First, [F19] gives continuity of composition: if $h$ and $g$ are continuous and $V$ is open in the target, then $(g\circ h)^{-1}(V)=h^{-1}(g^{-1}(V))$ is open. The coordinate projections on $\mathbb R^n$ are continuous by [F20], and their restrictions to subspaces are continuous by [F14]. Identity and constant maps are continuous by [F19]. Therefore [F12] makes $\omega\mapsto\beta\omega$ continuous, and [F20] makes $\omega\mapsto(0,\pm\omega t)\simeq\pm i\omega t$ continuous into $\mathbb C\simeq\mathbb R^2$. Composition with [F11], followed by [F12], shows that $N_\beta$ and $\omega\mapsto e^{\pm i\omega t}$ are continuous on $I$; the denominator is nonzero because $e^{\beta\omega}>e^0=1$. Set $u=\operatorname{Re}\kappa$ and $v=\operatorname{Im}\kappa$, so $|\kappa|^2=u^2+v^2$ by [F17]. By [F10], $u,v$ are Borel and $\omega\mapsto(\omega,u(\omega),v(\omega))$ is Borel into $\mathbb R^3$. On $I\times\mathbb R^2$ with its usual subspace topology, the expression for $W$ with $|\kappa|^2$ replaced by the sum of squares of the last two coordinates is continuous by the restricted coordinate projections, composition and [F12]. The real and imaginary parts of each phase are continuous coordinate projections of its continuous complex-valued map; the real and imaginary parts of the corresponding expression for $f_t$ are finite sums and products of these real-valued maps and the preceding continuous factors, hence are continuous by [F12]. Since the Borel map takes values in $I\times\mathbb R^2$, the trace identity [F9] also makes it Borel with that subspace codomain. Composing with the three continuous real-valued expressions gives Borel maps by [F10]. Its coordinate criterion then gives measurability of $f_t$ into $\mathbb C\simeq\mathbb R^2$; $W$ is measurable and nonnegative. [F7, F9, F10, F11, F12, F14, F17, F19, F20, algebra]

2.1 Since $N_\beta\geq0$ and both phases have modulus one, multiplicativity and the triangle inequality in [F18] give $|f_t|\leq |\kappa|^2\omega^2[N_\beta+(N_\beta+1)]=W$. By [F4], $\int|f_t|\leq M<\infty$, so [F1] gives absolute integrability, and [F2] gives $|\int f_t|\leq M$. At $t=0$ both phases equal one, so $f_0=W$ pointwise and $\int f_0=M$. This pointwise identity also shows, independently of the finiteness assumption, that the nonnegative equal-time integral is finite exactly when $\int W$ is finite. [F1, F2, F4, F11, F16, F17, F18, step 1.2, algebra]

3.1 Let $t_n\to t$ be any real sequence. For each fixed $\omega$, the continuous coordinate operations and composition used in step 1.2, now with variable $t$, and the exponential in [F11] give $f_{t_n}(\omega)\to f_t(\omega)$ for every $\omega\in I$. Steps 1.2 and 2.1 supply measurable functions and the single integrable majorant $W$, so [F5] gives $\int f_{t_n}\to\int f_t$ (equivalently, the integrals of $f_{t_n}-f_t$ tend to zero by [F3]). The domain $\mathbb R$ and codomain $\mathbb C$ carry their usual metrics, and Countable Choice is assumed. Therefore [F13] converts this sequential convergence for every such sequence into continuity of $t\mapsto\int f_t$, completing the claims. [F3, F5, F6, F11, F12, F13, F17, F19, F20, step 1.1, step 1.2, step 2.1] ∎
