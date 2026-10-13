---
id: lem-cm-inertia-tensor-about-a-point-is-finite
kind: lemma
title: "Finiteness and a uniform bound for the entries of the inertia tensor about an arbitrary point"
status: published
origin: pipeline
domain: mathematics
dependency_level: 2
deps: [def-cm-inertia-tensor-about-a-point, def-cm-mass-distribution-and-inertia-matrix, def-countable-choice, cor-continuous-functions-are-borel-measurable, def-borel-and-lebesgue-measurable-function-on-rn, thm-arithmetic-and-lattice-operations-preserve-measurability, def-integral-over-a-measurable-set, def-nonnegative-lebesgue-integral, def-integral-of-a-nonnegative-simple-function, def-integrable-real-and-complex-functions-and-their-integrals, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-integral-triangle-inequality, def-metric-ball, def-euclidean-inner-product, cor-triangle-inequality-for-inner-product-norm, lem-finite-sum-laws, lem-of-square-positive, def-abs-value, thm-indefinite-integral-of-a-nonnegative-function-is-a-measure, cor-integral-over-a-null-set-vanishes]
dependency_roles:
  def-cm-inertia-tensor-about-a-point: mathematical-premise
  def-cm-mass-distribution-and-inertia-matrix: mathematical-premise
  def-countable-choice: mathematical-premise
  cor-continuous-functions-are-borel-measurable: mathematical-premise
  def-borel-and-lebesgue-measurable-function-on-rn: mathematical-premise
  thm-arithmetic-and-lattice-operations-preserve-measurability: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  def-nonnegative-lebesgue-integral: mathematical-premise
  def-integral-of-a-nonnegative-simple-function: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  thm-integral-triangle-inequality: mathematical-premise
  def-metric-ball: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  cor-triangle-inequality-for-inner-product-norm: mathematical-premise
  lem-finite-sum-laws: mathematical-premise
  lem-of-square-positive: mathematical-premise
  def-abs-value: mathematical-premise
  thm-indefinite-integral-of-a-nonnegative-function-is-a-measure: mathematical-premise
  cor-integral-over-a-null-set-vanishes: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, 2015), §3.2.1, Eqs. (3.25)-(3.26), printed pp. 52-53: the shifted-integrand expansion whose boundedness makes the displaced inertia tensor finite for a bounded body"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. Likharev, Essential Graduate Physics: Classical Mechanics, Chapter 4 Section 4.2, Eqs. (4.27)-(4.28), printed page 6 of Chapter 4 (PDF page 60): the shifted inertia integral is a finite combination of second moments of a bounded body"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $\nu$ be
a measure on $(\mathbb R^3,\mathcal B(\mathbb R^3))$ that is finite and bounded:
$\nu(\mathbb R^3)<+\infty$ and $\nu\bigl(\mathbb R^3\setminus\overline B_R(0)\bigr)=0$ for some
real $R>0$ ([[def-metric-ball]]), and let $a\in\mathbb R^3$. With the shifted integrands
$G_a(\rho)_{jk}=\lVert\rho-a\rVert_2^2\delta_{jk}-(\rho_j-a_j)(\rho_k-a_k)$ of
[[def-cm-inertia-tensor-about-a-point]] ([[def-euclidean-inner-product]] for the norm), then:

1. for all $j,k$ the function $G_a(\cdot)_{jk}:\mathbb R^3\to\mathbb R$ is Borel measurable and
   $\nu$-integrable
   ([[def-borel-and-lebesgue-measurable-function-on-rn]]);
2. each entry $I_\nu(a)_{jk}$ is a finite real number and

$$\bigl|I_\nu(a)_{jk}\bigr|\le 2\bigl(R+\lVert a\rVert_2\bigr)^2\,\nu(\mathbb R^3).$$

## Facts & Assumptions

**Given:** A finite bounded Borel measure $\nu$ on $\mathbb R^3$ with
$\nu(\mathbb R^3\setminus\overline B_R(0))=0$, and a point $a\in\mathbb R^3$.

[L1] Under $\mathrm{AC}_\omega$ every continuous map $\mathbb R^3\to\mathbb R$ is Borel
measurable ([[cor-continuous-functions-are-borel-measurable]],
[[def-borel-and-lebesgue-measurable-function-on-rn]]), and sums, scalar multiples and pointwise
products of measurable real-valued functions are measurable
([[thm-arithmetic-and-lattice-operations-preserve-measurability]]).

[L2] Estimates on the ball: for $\rho\in\overline B_R(0)$ one has $\lVert\rho\rVert_2\le R$ and
therefore $\lVert\rho-a\rVert_2\le\lVert\rho\rVert_2+\lVert a\rVert_2\le R+\lVert a\rVert_2$ by
the triangle inequality for the Euclidean norm
([[cor-triangle-inequality-for-inner-product-norm]], [[def-euclidean-inner-product]]); and for
each index $j$ one has $(\rho_j-a_j)^2\le\sum_l(\rho_l-a_l)^2=\lVert\rho-a\rVert_2^2$, because
each term of a finite sum of nonnegative reals is at most the sum
([[lem-finite-sum-laws]], clause 4, [[def-euclidean-inner-product]]).

[L3] The elementary inequality $2uv\le u^2+v^2$ for reals $u,v$ follows from $(u-v)^2\ge0$ by
squaring rules ([[lem-of-square-positive]], [[def-abs-value]]).

[L4] Nonnegative integrals: the constant function with value $c\ge0$ has
$\int c\,d\nu=c\,\nu(\mathbb R^3)$ via the simple-function integral; the nonnegative integral is
monotone and homogeneous for nonnegative scalars
([[def-nonnegative-lebesgue-integral]], [[def-integral-of-a-nonnegative-simple-function]],
[[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[L5] A real measurable function $f$ with $\int\lvert f\rvert\,d\nu<+\infty$ is $\nu$-integrable,
and then $\bigl|\int f\,d\nu\bigr|\le\int\lvert f\rvert\,d\nu$
([[def-integrable-real-and-complex-functions-and-their-integrals]],
[[thm-integral-triangle-inequality]], [[def-integral-over-a-measurable-set]]).

[L6] Indefinite integrals and null sets
([[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]],
[[cor-integral-over-a-null-set-vanishes]], [[def-integral-over-a-measurable-set]]): for every
nonnegative measurable $f$ the set function $A\mapsto\int_Af\,d\nu$ is a measure, so
$\int_{A\cup B}f\,d\nu=\int_Af\,d\nu+\int_Bf\,d\nu$ for disjoint measurable $A,B$; and if $A$ is
$\nu$-null then $\int_Af\,d\nu=0$.

## Proof

**Proof technique:** direct; prove measurability, bound the shifted integrand pointwise on the
support ball by a constant, and integrate the constant.

1.1 Measurability: the coordinate maps $\rho\mapsto\rho_j$, the identity maps $\rho\mapsto a_j$, and $\rho\mapsto\lVert\rho-a\rVert_2^2=\sum_l(\rho_l-a_l)^2$ are continuous, hence Borel measurable by [L1]; sums and products of these measurable functions are measurable by [L1], so each $G_a(\cdot)_{jk}=\lVert\rho-a\rVert_2^2\delta_{jk}-(\rho_j-a_j)(\rho_k-a_k)$ is Borel measurable. [given, L1, L2]

1.2 Pointwise bound on the support ball: for $\rho\in\overline B_R(0)$, by [L2] and [L3], $$\lvert G_a(\rho)_{jk}\rvert\le\lVert\rho-a\rVert_2^2+\lvert\rho_j-a_j\rvert\,\lvert\rho_k-a_k\rvert\le\lVert\rho-a\rVert_2^2+\tfrac12\bigl((\rho_j-a_j)^2+(\rho_k-a_k)^2\bigr)\le 2\lVert\rho-a\rVert_2^2\le 2\bigl(R+\lVert a\rVert_2\bigr)^2.$$ [given, L2, L3, algebra]

2.1 Integrability and the bound: the function $\lvert G_a(\cdot)_{jk}\rvert$ is nonnegative and measurable by step 1.1, so [L6] applied to the disjoint measurable sets $\overline B_R(0)$ and $N:=\mathbb R^3\setminus\overline B_R(0)$, the latter $\nu$-null, gives $\int\lvert G_a(\cdot)_{jk}\rvert\,d\nu=\int_{\overline B_R(0)}\lvert G_a(\cdot)_{jk}\rvert\,d\nu+\int_N\lvert G_a(\cdot)_{jk}\rvert\,d\nu=\int_{\overline B_R(0)}\lvert G_a(\cdot)_{jk}\rvert\,d\nu$. On $\overline B_R(0)$ the integrand is bounded by the constant $M:=2(R+\lVert a\rVert_2)^2$ by step 1.2, so monotonicity in [L4] applied to the pointwise inequality $\lvert G_a(\cdot)_{jk}\rvert\chi_{\overline B_R(0)}\le M\chi_{\overline B_R(0)}\le M$, and the constant-value formula, give $\int\lvert G_a(\cdot)_{jk}\rvert\,d\nu\le\int M\,d\nu=M\,\nu(\mathbb R^3)<+\infty$. By step 1.1 and [L5] the function $G_a(\cdot)_{jk}$ is $\nu$-integrable, its integral $I_\nu(a)_{jk}$ is a finite real number, and $\lvert I_\nu(a)_{jk}\rvert=\bigl|\int G_a(\cdot)_{jk}\,d\nu\bigr|\le\int\lvert G_a(\cdot)_{jk}\rvert\,d\nu\le 2(R+\lVert a\rVert_2)^2\nu(\mathbb R^3)$. [step 1.1, step 1.2, given, L4, L5, L6, algebra] ∎

## Remarks

- The bound is uniform in the shape of the measure: it uses only the support radius $R$, the
  shift $\lVert a\rVert_2$ and the total mass $\nu(\mathbb R^3)$, not the detailed distribution.
  For $a=0$ it reproduces the bound $2R^2\nu(\mathbb R^3)$ of the shifted integrand computed at
  the origin.

- The Axiom of Countable Choice is used exactly once, in [L1], to obtain the Borel measurability
  of the continuous integrands; every later consumer of this finiteness statement carries the
  assumption explicitly.
