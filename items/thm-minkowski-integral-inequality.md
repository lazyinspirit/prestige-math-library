---
id: thm-minkowski-integral-inequality
kind: theorem
title: "Minkowski's integral inequality"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-elementary-duality-formula-for-nonnegative-l-p-functions, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-holder-inequality-for-integrals, thm-monotone-convergence-for-the-integral]
landmark: true
proof_strategy: "For $1 < p < \\infty$, first obtain the pairing bound against arbitrary $L^q$ unit vectors, then apply the duality lemma to bounded finite-measure truncations of the section integral and pass to the limit by monotone convergence. The endpoint $p=1$ is direct from Tonelli, so no Hahn-Banach or future dual-space theorem enters."
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral: An Introduction to Real Analysis"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
---
## Statement

Let $(X,\mu)$ and $(Y,\nu)$ be sigma-finite measure spaces, let
$1 \le p < \infty$, and let $F : X \times Y \to \mathbb{C}$ be measurable with

$$
\int_Y \|F(\cdot,y)\|_{L^p(X)}\,d\nu(y) < \infty.
$$

Then the function
$$
H(x) := \int_Y |F(x,y)|\,d\nu(y)
$$
belongs to $L^p(X)$ and

$$ \|H\|_{L^p(X)} \le \int_Y \|F(\cdot,y)\|_{L^p(X)}\,d\nu(y). $$

## Facts & Assumptions

**Given:** Sigma-finite measure spaces, an exponent $1 \le p < \infty$, and a measurable function $F$ satisfying the displayed integrability hypothesis.

[L1] For $1 < p < \infty$, the nonnegative duality formula is available ([[lem-elementary-duality-formula-for-nonnegative-l-p-functions]]).

[L2] Tonelli applies to nonnegative measurable functions on product spaces ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[L3] Holder's inequality is available ([[thm-holder-inequality-for-integrals]]).

[L4] Monotone convergence is available for nonnegative measurable functions ([[thm-monotone-convergence-for-the-integral]]).

## Proof

**Proof technique:** direct.

1.1 If $p=1$, then Tonelli directly gives [L2, given, algebra] $$ \|H\|_{L^1(X)} = \int_X \int_Y |F(x,y)|\,d\nu(y)\,d\mu(x) = \int_Y \|F(\cdot,y)\|_{L^1(X)}\,d\nu(y). $$ [L2, given, algebra]

1.2 Assume $1 < p < \infty$ and let $q$ be conjugate to $p$. Put [L2, L3, given, algebra] $$ M := \int_Y \|F(\cdot,y)\|_{L^p(X)}\,d\nu(y). $$ For every nonnegative $g \in L^q(X)$ with $\|g\|_q \le 1$, $$ \int_X H(x)g(x)\,d\mu(x) = \int_Y \left(\int_X |F(x,y)|g(x)\,d\mu(x)\right)d\nu(y) $$ by [L2], and then [L3] yields $$ \int_X |F(x,y)|g(x)\,d\mu(x) \le \|F(\cdot,y)\|_p\|g\|_q \le \|F(\cdot,y)\|_p. $$ Hence $$ \int_X H g\,d\mu \le \int_Y \|F(\cdot,y)\|_p\,d\nu(y) = M. $$ [L2, L3, given, algebra]

1.3 Choose measurable sets $X_1 \subseteq X_2 \subseteq \cdots$ with [given, construct] $\mu(X_m)<\infty$ and $\bigcup_m X_m=X$, and define $$ H_m := \min(H,m)\,\mathbf{1}_{X_m}. $$ Then $0 \le H_m \uparrow H$ pointwise, and each $H_m$ lies in $L^p(X)$ because $H_m \le m\,\mathbf{1}_{X_m}$. [given, construct]

2.1 Applying [L1] to each nonnegative $H_m$ and using $0 \le H_m \le H$ with [L1, step 1.2, step 1.3] step 1.2 gives $$ \|H_m\|_p \le M $$ for every $m$. [L1, step 1.2, step 1.3]

3.1 By [L4], $$ \int_X H_m(x)^p\,d\mu(x) \uparrow \int_X H(x)^p\,d\mu(x). $$ Since $\int H_m^p\,d\mu=\|H_m\|_p^p \le M^p$ for every $m$, the limit is finite and satisfies $\|H\|_p^p \le M^p$. Hence $H \in L^p(X)$ and $$ \|H\|_p \le M = \int_Y \|F(\cdot,y)\|_{L^p(X)}\,d\nu(y). $$ Together with step 1.1, this proves the theorem for all $1 \le p < \infty$. [L4, step 1.1, step 2.1] ∎
