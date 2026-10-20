---
id: thm-kantorovich-rubinstein-duality-on-compact-second-countable-metric-spaces
kind: theorem
title: "Kantorovich–Rubinstein duality on compact second-countable metric spaces"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-compact-metric-wasserstein-one
  - def-metric-space
  - def-metric-compactness
  - def-metric-topology
  - def-borel-sigma-algebra
  - def-product-topology
  - def-probability-measure
  - def-finite-probability-vector
  - def-finite-metric-coupling
  - def-finite-metric-wasserstein-one
  - lem-compact-metric-space-has-finite-borel-net-quantization
  - lem-finite-metric-plan-lifts-to-a-borel-coupling
  - lem-mcshane-extension-from-a-finite-subset
  - thm-finite-metric-transport-duality
  - lem-finite-set-has-max
  - lem-metric-nonnegativity
  - def-nonnegative-lebesgue-integral
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - cor-additivity-of-the-nonnegative-lebesgue-integral
  - def-integrable-real-and-complex-functions-and-their-integrals
  - def-nonnegative-simple-measurable-function
  - def-integral-of-a-nonnegative-simple-function
  - prop-the-nonnegative-integral-agrees-with-the-simple-integral
  - thm-linearity-of-the-lebesgue-integral-on-l-one
justified_by: []
axiom_use: "No choice principle is used under the stated second-countability hypothesis. Each positive scale uses one finite subcover; no sequence of subcovers or nets is selected."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Dmitriy Panchenko, Lecture Notes on Probability Theory, §4.4, Theorem 4.14 and proof, pp. 121–124"
      url: "https://drive.google.com/uc?export=download&id=0B6JeBUquZ5BwVlV1dEpsTHVVbTA&resourcekey=0-5xbvKhDXZjrYRLfqppsHuQ"
    - title: "Filippo Santambrogio, Introduction to Optimal Transport Theory, §§1.1–1.3, PDF pp. 1–7"
      url: "https://arxiv.org/pdf/1009.3856"
    - title: "Martin Arjovsky, Soumith Chintala and Léon Bottou, Wasserstein GAN, §§2–3, PDF pp. 3–6"
      url: "https://arxiv.org/pdf/1701.07875"
---

## Statement

Let $(X,d)$ be a nonempty compact metric space whose metric topology has an at-most-countable basis. Let $\mu,\nu$ be countably additive Borel probability measures on $X$, and fix $x_0\in X$. Let $\Pi_X(\mu,\nu)$ be the Borel probability measures $\gamma$ on the product-topology space $X\times X$ satisfying $\gamma(A\times X)=\mu(A)$ and $\gamma(X\times A)=\nu(A)$ for every Borel set $A\subseteq X$, and define $W_1^X(\mu,\nu)=\inf_{\gamma\in\Pi_X(\mu,\nu)}\int_{X\times X}d(x,y)\,d\gamma(x,y)$. Then $\Pi_X(\mu,\nu)$ is nonempty and
$$W_1^X(\mu,\nu)=\sup\left\{\int_X f\,d\mu-\int_X f\,d\nu:\ f:X\to\mathbb R,\ f(x_0)=0,\ |f(x)-f(y)|\le d(x,y)\text{ for all }x,y\in X\right\}.$$

## Facts & Assumptions

**Given:** The space, measures, base point, and coupling-cost convention in the Statement.

[F1] For every $\varepsilon>0$, a compact metric space admits a finite ordered net, a Borel partition into nearest-center cells, and a Borel quantization map whose displacement is less than $\varepsilon$. [[lem-compact-metric-space-has-finite-borel-net-quantization]]

[F2] If a finite coupling has rows and columns given by the masses of such Borel cells, it lifts to a Borel coupling of $\mu,\nu$ with cost at most the finite cost plus $2\varepsilon$. [[lem-finite-metric-plan-lifts-to-a-borel-coupling]]

[F3] A finite 1-Lipschitz potential extends to the whole metric space by $\widetilde f(x)=\min_i(f_i+d(x,x_i))$, preserving its values and 1-Lipschitz bound. [[lem-mcshane-extension-from-a-finite-subset]]

[F4] On a finite nonempty metric space, the minimum coupling cost equals the maximum over normalized 1-Lipschitz potentials, and both extrema are attained. [[thm-finite-metric-transport-duality]]

[F5] The finite transport cost is the minimum of $\sum_{i,j}d(x_i,x_j)\pi_{ij}$ over nonnegative matrices with the prescribed probability-vector marginals. [[def-finite-metric-wasserstein-one]] [[def-finite-metric-coupling]] [[def-finite-probability-vector]]

[F6] The compact-space cost $W_1^X$ is the infimum of the Borel coupling costs in the Statement. [[def-compact-metric-wasserstein-one]]

[F7] Every nonempty finite set of reals has an attained maximum. [[lem-finite-set-has-max]]

[F8] A metric is symmetric, satisfies the triangle inequality, and is nonnegative. [[def-metric-space]] [[lem-metric-nonnegativity]]

[F9] The nonnegative integral is monotone and homogeneous. [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]

[F10] The nonnegative integral is defined as the supremum of simple minorants, and it agrees with the simple integral; a nonnegative simple function integrates as the sum of its values times the measures of its disjoint level sets. [[def-nonnegative-lebesgue-integral]] [[def-nonnegative-simple-measurable-function]] [[def-integral-of-a-nonnegative-simple-function]] [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]]

[F11] The nonnegative integral is additive over finite sums of nonnegative measurable functions. [[cor-additivity-of-the-nonnegative-lebesgue-integral]]

[F12] Real integrability and the signed integral are defined using positive and negative parts, and the signed integral is linear on integrable functions. [[def-integrable-real-and-complex-functions-and-their-integrals]] [[thm-linearity-of-the-lebesgue-integral-on-l-one]]

[F13] A 1-Lipschitz function between metric spaces is continuous; continuous real-valued functions are Borel measurable, and product coordinate projections are continuous. [[def-metric-topology]] [[def-borel-sigma-algebra]] [[def-product-topology]]

## Proof

**Proof technique:** direct.

1.1 Use [F1] at scale $1$ to obtain a finite net $z_1,\ldots,z_s$. Let $M:=2+\max_{k,\ell}d(z_k,z_\ell)$, whose maximum exists by [F7]. For any $x,y\in X$, choose net points within $1$ of $x$ and $y$; [F8] gives $d(x,y)<M$. Hence an anchored feasible $f$ satisfies $|f(x)|\le d(x,x_0)<M$. For every $x$ and $r>0$, $d(x,y)<r$ implies $|f(x)-f(y)|<r$, so the metric-topology definition makes $f$ continuous; [F13] then makes it Borel. Also $0\le f^+,f^-\le M$. By [F9] and [F10], each nonnegative integral is at most $M\mu(X)=M$, so [F12] makes $f$ integrable and both dual integrals are finite. The zero function is feasible, so the dual objective set is nonempty and its supremum $D_X$ is a finite real number. [given, F1, F7, F8, F9, F10, F12, F13, choose]

1.2 Fix $\varepsilon>0$ and use [F1] to obtain distinct net points $x_1,\ldots,x_m$, Borel nearest-center cells $C_1,\ldots,C_m$, and a Borel map $Q$ with $Q(x)=x_i$ on $C_i$ and $d(x,Q(x))<\varepsilon$. Set $p_i=\mu(C_i)$ and $q_i=\nu(C_i)$. Countable additivity and the finite Borel partition imply $p_i,q_i\ge0$ and $\sum_i p_i=\sum_iq_i=1$. Let $c_\varepsilon$ be the minimum finite transport cost between these vectors on $F=\{x_1,\ldots,x_m\}$; [F4] ensures that this finite minimum exists and is attained. [given, F1, F4, F5]

2.1 By [F4], choose a minimizing finite coupling $\pi^\varepsilon$ and a maximizing normalized finite 1-Lipschitz potential; their common finite primal and dual value is $c_\varepsilon$. [step 1.2, F4, choose]

2.2 For any $\gamma\in\Pi_X(\mu,\nu)$, set $\pi_{ij}:=\gamma(C_i\times C_j)$. Its row and column sums are $p_i,q_j$ by the marginal identities and finite additivity, so it is a finite coupling. On $C_i\times C_j$, [F8] gives $d(x_i,x_j)\le d(x_i,x)+d(x,y)+d(y,x_j)<d(x,y)+2\varepsilon$. The cells $C_i\times C_j$ form a finite Borel partition of $X\times X$. Integrating the pointwise bounds on these cells and using finite additivity of the nonnegative integral [F11] gives $\sum_{i,j}\pi_{ij}d(x_i,x_j)\le\int d(x,y)\,d\gamma+2\varepsilon$, since $\gamma(X\times X)=1$. Taking the infimum over $\gamma$ gives $c_\varepsilon\le W_1^X(\mu,\nu)+2\varepsilon$. [step 1.2, F5, F6, F8, F11, algebra]

2.3 Let $D_F$ be the maximum finite dual value. By [F4], $D_F=c_\varepsilon$. For any feasible finite potential $(f_i)$, [F3] gives an extension $\widetilde f$; put $h:=\widetilde f-\widetilde f(x_0)$. This anchors $h$ without changing either probability-difference objective. The function $h\circ Q$ is finite-valued Borel simple, so its integrals are $\sum_i p_i h(x_i)$ and $\sum_i q_i h(x_i)$ by [F10]. Pointwise, $|h(x)-h(Q(x))|<\varepsilon$. For either probability measure $\rho\in\{\mu,\nu\}$, let $r=h-h\circ Q$. It is integrable because both terms are bounded Borel functions. Monotonicity [F9] gives $0\le\int(r+\varepsilon)\,d\rho$ and $0\le\int(\varepsilon-r)\,d\rho$; [F10] gives $\int\varepsilon\,d\rho=\varepsilon$, and linearity [F12] yields $|\int r\,d\rho|\le\varepsilon$. Hence each finite objective differs from the corresponding compact objective by at most $2\varepsilon$, so $D_F\le D_X+2\varepsilon$. [step 1.1, step 1.2, F3, F4, F9, F10, F12, algebra]

3.1 Conversely, let $g$ be any feasible compact potential and restrict it to $F$, subtracting $g(x_1)$ to normalize the first coordinate. The finite objective is unchanged by this shift because both probability vectors sum to one. The functions $g\circ Q$ are Borel simple and have the finite sums as their integrals, by [F10]. For each $\rho\in\{\mu,\nu\}$, the integrable difference $r=g-g\circ Q$ satisfies $-\varepsilon\le r\le\varepsilon$; applying the two monotonicity and linearity inequalities detailed in step 2.3 gives $|\int r\,d\rho|\le\varepsilon$. Thus each compact integral differs from its finite sum by at most $\varepsilon$. By the definition of $D_F$ in step 2.3, every restricted finite objective is at most $D_F$, and $D_X\le D_F+2\varepsilon$. [step 1.1, step 1.2, step 2.3, F4, F9, F10, F12, algebra]

3.2 For any $\gamma\in\Pi_X(\mu,\nu)$ and feasible compact $f$, the Lipschitz constraint gives $f(x)-f(y)\le d(x,y)$. By step 1.1 and [F13], the functions $f\circ\mathrm{pr}_1$ and $f\circ\mathrm{pr}_2$ are bounded Borel, and the metric cost is bounded and Borel; hence they are integrable. The first-coordinate pushforward of $\gamma$ agrees with $\mu$ on every Borel set by the marginal condition, and the second-coordinate pushforward agrees with $\nu$. Equal measures integrate indicators, then simple functions, then all nonnegative Borel functions equally by [F10]; positive-negative decomposition and signed-integral linearity [F12] give equality for bounded signed Borel functions. Thus $\int(f(x)-f(y))\,d\gamma=\int f\,d\mu-\int f\,d\nu$. Since $d(x,y)-(f(x)-f(y))\ge0$, [F9]–[F10] give a nonnegative integral for this difference, so [F12] implies the dual value is at most the cost of $\gamma$. Taking the infimum gives $D_X\le W_1^X(\mu,\nu)$. [given, step 1.1, step 2.3, F6, F8, F9, F10, F12, F13]

3.3 Apply [F2] to the minimizing plan $\pi^\varepsilon$ of step 2.1. It gives a Borel coupling $\gamma^\varepsilon\in\Pi_X(\mu,\nu)$ with cost at most $c_\varepsilon+2\varepsilon$. Hence the coupling set is nonempty and $W_1^X(\mu,\nu)\le c_\varepsilon+2\varepsilon$. [step 2.1, F2, F6]

4.1 Steps 2.2 and 3.3 give $|W_1^X-c_\varepsilon|\le2\varepsilon$. Steps 2.3 and 3.1 give $|D_X-D_F|\le2\varepsilon$, and step 2.3 gives $D_F=c_\varepsilon$. Combining with step 3.2 yields $D_X\le W_1^X\le c_\varepsilon+2\varepsilon=D_F+2\varepsilon\le D_X+4\varepsilon$. Since this holds for every $\varepsilon>0$, $W_1^X(\mu,\nu)=D_X$. [step 2.2, step 2.3, step 3.1, step 3.2, step 3.3, algebra] ∎

