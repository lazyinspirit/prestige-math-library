---
id: def-author-ab209e1f475e-banach-valued-time-derivative
kind: definition
domain: mathematics
title: Distributional time derivatives with values in a Banach space
status: published
deps:
  - math:def-countable-choice
  - math:lem-pe12-bochner-lp-mollification
  - math:lem-complex-norm-realification-is-a-real-norm
  - math:def-bochner-integrable-function
  - math:thm-bochner-integrability-criterion
  - math:lem-bochner-integral-norm-inequality
  - math:thm-bounded-linear-maps-commute-with-bochner-integration
  - math:def-test-function-space-d-of-an-open-set
  - math:def-distributional-derivative
  - math:def-banach-space
  - math:def-strongly-measurable-banach-valued-function
  - math:def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - math:def-bounded-linear-operator
  - math:thm-lebesgue-measure-is-a-complete-measure
  - math:def-fixed-support-test-function-frechet-space
  - math:def-test-function-topology
  - math:lem-linearity-of-the-bochner-integral
dependency_roles:
  math:def-countable-choice: mathematical-premise
  math:lem-pe12-bochner-lp-mollification: mathematical-premise
  math:lem-complex-norm-realification-is-a-real-norm: mathematical-premise
  math:def-bochner-integrable-function: mathematical-premise
  math:thm-bochner-integrability-criterion: mathematical-premise
  math:lem-bochner-integral-norm-inequality: mathematical-premise
  math:thm-bounded-linear-maps-commute-with-bochner-integration: mathematical-premise
  math:def-test-function-space-d-of-an-open-set: mathematical-premise
  math:def-distributional-derivative: mathematical-premise
  math:def-banach-space: mathematical-premise
  math:def-strongly-measurable-banach-valued-function: mathematical-premise
  math:def-lebesgue-measure-and-the-lebesgue-sigma-algebra: mathematical-premise
  math:def-bounded-linear-operator: mathematical-premise
  math:thm-lebesgue-measure-is-a-complete-measure: mathematical-premise
  math:def-fixed-support-test-function-frechet-space: mathematical-premise
  math:def-test-function-topology: mathematical-premise
  math:lem-linearity-of-the-bochner-integral: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 0
proof_strategy: direct
---

## Definition

Assume Countable Choice. Fix $\mathbb K\in\{\mathbb R,\mathbb C\}$, a Banach space $Y$ over $\mathbb K$, and $I=(0,T)$ with $0<T<\infty$. Equip $I$ with the restricted Lebesgue sigma-algebra $\mathcal L(I)=\{E\cap I:E\in\mathcal L(\mathbb R)\}$ and restricted Lebesgue measure $\lambda|_I$, denoted $dt$ in integrals. All null sets and almost-everywhere classes below refer to this measure.

Let $u,g:I\to Y$ be strongly measurable with $\int_I(\|u(t)\|_Y+\|g(t)\|_Y)\,dt<\infty$. Their integrals are Bochner integrals. Write $\mathcal D_{\mathbb K}(I)=C_c^\infty(I;\mathbb K)$: for $\mathbb K=\mathbb C$ this is the complex test-function space $\mathcal D(I)$; for $\mathbb K=\mathbb R$ it is its subspace of real-valued functions, with the restricted test-function topology. We say that $g$ represents the **distributional time derivative** $\partial_tu$ if
$$\int_Iu(t)\varphi'(t)\,dt=-\int_Ig(t)\varphi(t)\,dt\qquad\text{in }Y\quad\text{for every }\varphi\in\mathcal D_{\mathbb K}(I).$$
The sign is the scalar distribution convention; the pairing is bilinear, without conjugation of the test function.

The representing $g$ is unique as an almost-everywhere class. Its derivative bound is the Bochner norm $\|g\|_{L^1(I;Y)}=\int_I\|g(t)\|_Y\,dt$, not the supremum norm of a scalar pairing. The two maps on tests defined by the displayed integrals are continuous for the test-function topology. If $Z$ is a Banach space over the same scalar field $\mathbb K$ and $A:Y\to Z$ is bounded and $\mathbb K$-linear, then these identities transport to $\partial_t(Au)=Ag$ in the same sense. This includes bounded scalar-valued linear functionals and does not assert norm differentiability of $u(t)$.

## Definition references

[[math:def-countable-choice]]

[[math:lem-pe12-bochner-lp-mollification|Time translations and mollification in Bochner $L^p$]]

[[math:lem-complex-norm-realification-is-a-real-norm]]

[[math:def-bochner-integrable-function]]

[[math:thm-bochner-integrability-criterion]]

[[math:lem-bochner-integral-norm-inequality]]

[[math:thm-bounded-linear-maps-commute-with-bochner-integration]]

[[math:def-test-function-space-d-of-an-open-set]]

[[math:def-distributional-derivative]]

[[math:def-banach-space]]

[[math:def-strongly-measurable-banach-valued-function]]

[[math:def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]

[[math:def-bounded-linear-operator]]

[[math:thm-lebesgue-measure-is-a-complete-measure]]

[[math:def-fixed-support-test-function-frechet-space]]

[[math:def-test-function-topology]]

[[math:lem-linearity-of-the-bochner-integral]]

## Facts & Assumptions

[F1] Banach spaces have their specified real or complex scalar field and complete norm metric ([[math:def-banach-space]]). Countable Choice is assumed ([[math:def-countable-choice]]). The Lebesgue sigma-algebra and set function are defined by [[math:def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]; under Countable Choice, [[math:thm-lebesgue-measure-is-a-complete-measure]] makes this a complete measure. Its restriction to $I$ is again a measure, since intersections with $I$ preserve disjoint unions and the empty set.

[F2] Strong measurability means almost-everywhere norm approximation by measurable Banach-valued simple functions ([[math:def-strongly-measurable-banach-valued-function]]). The integral convention is [[math:def-bochner-integrable-function]]; finite integrability of the norm gives Bochner integrability and approximation independence by [[math:thm-bochner-integrability-criterion]]. The norm bound is [[math:lem-bochner-integral-norm-inequality]].

[F3] The complex test space and its real restriction are supplied by [[math:def-test-function-space-d-of-an-open-set]]. On each fixed compact support its topology uses the suprema of the derivatives ([[math:def-fixed-support-test-function-frechet-space]]); seminorms continuous on each such support generate the test-function topology ([[math:def-test-function-topology]]). The scalar derivative sign and bilinear pairing are [[math:def-distributional-derivative]].

[F4] A bounded linear operator between spaces over the same field satisfies $\|Ay\|_Z\le C\|y\|_Y$ for some finite $C$ ([[math:def-bounded-linear-operator]]). Between Banach spaces it commutes with Bochner integration and preserves Bochner integrability ([[math:thm-bounded-linear-maps-commute-with-bochner-integration]]).

[F5] The Bochner integral is linear, in particular on differences of integrable functions ([[math:lem-linearity-of-the-bochner-integral]]).

[F6] For a real Banach space, finite $T$, and $p=1$, time mollification converges in $L^1$ on compact subintervals under Countable Choice ([[math:lem-pe12-bochner-lp-mollification|Time translations and mollification in Bochner $L^p$]]). Its proof supplies real, nonnegative smooth kernels of integral one supported in $[-\varepsilon,\varepsilon]$. For complex $Y$, realification leaves the underlying set, addition, norm and metric unchanged ([[math:lem-complex-norm-realification-is-a-real-norm]]), hence preserves completeness and strong simple approximation.

## Justification

**Given:** The scalar field, Banach spaces, restricted Lebesgue measure, Countable Choice, and integrability hypotheses in the Definition, with tests valued in that scalar field.

1.1 For $v=u$ or $v=g$ and $a=\varphi$ or $a=\varphi'$, the scalar factor $a$ is bounded and measurable. Take measurable scalar simple approximants $a_n\to a$ bounded by $\|a\|_\infty+1$ and the strongly measurable simple approximants $v_n\to v$ off a null set. Then $a_nv_n$ are measurable $Y$-valued simple functions converging there to $av$, since all scalars lie in $\mathbb K$. Thus $av$ is strongly measurable, and $\|av\|_Y\le\|a\|_\infty\|v\|_Y$ is integrable. The Bochner criterion gives all the integrals in the definition. Changing $u$ or $g$ on a null set changes no integral, by the same criterion and the norm inequality. [given, F2, F3]

2.1 The norm inequality gives $\|\int_Iu\varphi\,dt\|_Y\le\|\varphi\|_\infty\int_I\|u\|_Y\,dt$ and $\|\int_Iu\varphi'\,dt\|_Y\le\|\varphi'\|_\infty\int_I\|u\|_Y\,dt$, with the analogous estimate for $g$. The seminorm $p_1(\varphi)=\max(\|\varphi\|_\infty,\|\varphi'\|_\infty)$ is continuous on every fixed-support space, hence continuous in the test-function topology by its defining family of seminorms. Its restriction to real tests is continuous as well. These bounds prove continuity of the integral maps and give a well-defined vector-valued version of the scalar derivative sign rule. [F2, F3, step 1.1]

2.2 For $Z$ Banach over $\mathbb K$ and $A:Y\to Z$ bounded and $\mathbb K$-linear, applying $A$ preserves Bochner integrability and commutes with each integral. In particular, $Au,Ag$ satisfy the required norm-integrability hypotheses; their strong measurability also follows by applying $A$ to simple approximants. Since $A(u\varphi')=(Au)\varphi'$ and $A(g\varphi)=(Ag)\varphi$, applying $A$ to the defining identity proves $\partial_t(Au)=Ag$ with the same $\mathbb K$-valued tests. [given, F4, step 1.1]

3.1 If $g_1,g_2$ represent the same derivative, then $h=g_1-g_2$ is strongly measurable and integrable, and linearity gives $\int_Ih\varphi\,dt=0$ for every admissible test. Extend $h$ by zero outside $I$ and use the real smooth approximate identity $\rho_\varepsilon$ from [F6]. For $t$ in a fixed compact subinterval $J\subset I$ and sufficiently small $\varepsilon$, the real function $s\mapsto\rho_\varepsilon(t-s)$ is an admissible test in both scalar-field cases, so $(\rho_\varepsilon*h)(t)=0$ on $J$. For real $Y$, [F6] gives convergence to $h$ in $L^1(J;Y)$. For complex $Y$, apply that result to its realification, which is Banach with the same norm and metric by [F1] and [F6]; the convolution integrals agree because their defining simple integrals use only real scalar coefficients and the same norm limit. Hence $\|h\|_{L^1(J;Y)}=0$ in either case. A countable compact-interval exhaustion of $I$ proves almost-everywhere uniqueness. Therefore the derivative norm is independent of the representative. Countable Choice is used by the cited mollification and Lebesgue-measure suppliers. [F1, F2, F5, F6, step 1.1] ∎
