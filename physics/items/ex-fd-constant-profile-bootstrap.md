---
id: ex-fd-constant-profile-bootstrap
kind: example
title: Scalar series as a constant Hilbert profile
status: published
origin: pipeline
pipeline_run: fluid-dynamics-all-47-2026-10-23
dependency_level: 3
domain: mathematics
library: mathematics
deps:
  - prop-fd-profile-functional-bootstrap
  - def-l2-m-approximable-causal-bernoulli-shift
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - cor-cauchy-schwarz-for-random-variables
  - def-bochner-integrable-function
  - thm-bochner-integrability-criterion
  - thm-cauchy-schwarz-in-an-inner-product-space
  - def-strongly-measurable-banach-valued-function
dependency_roles:
  prop-fd-profile-functional-bootstrap: mathematical-premise
  def-l2-m-approximable-causal-bernoulli-shift: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-choice-implies-dependent-implies-countable-choice: mathematical-premise
  cor-cauchy-schwarz-for-random-variables: mathematical-premise
  def-bochner-integrable-function: mathematical-premise
  thm-bochner-integrability-criterion: mathematical-premise
  thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
  def-strongly-measurable-banach-valued-function: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
---
## Example

Assume the Axiom of Choice. Let $(\Omega,\mathcal F,\mathbb P)$ be a probability space carrying the original independent identically distributed measurable real-valued random variables $\epsilon_t:\Omega\to\mathbb R$, $t\in\mathbb Z$, and the replacement family below; this is understood to be an independent product extension, with the original variables lifted from their original space when necessary. Let $g:\mathbb R^{\mathbb N_0}\to\mathbb R$ be measurable for the product Borel sigma-algebra. Define $Y_t:\Omega\to\mathbb R$ by $Y_t(\omega)=g(\epsilon_t(\omega),\epsilon_{t-1}(\omega),\ldots)$, and assume $\mathbb E Y_0=0$ and $\mathbb E|Y_0|^2<\infty$. For each $t\in\mathbb Z$, $m\ge1$, and $k\le t-m$, let $\epsilon'_{t,m,k}:\Omega\to\mathbb R$ be measurable with the same law as $\epsilon_0$, with all these copies mutually independent and independent of the original innovations, and define $Y_{t,m}(\omega)=g(\epsilon_t(\omega),\ldots,\epsilon_{t-m+1}(\omega),\epsilon'_{t,m,t-m}(\omega),\epsilon'_{t,m,t-m-1}(\omega),\ldots)$. Assume $\sum_{m=1}^{\infty}(\mathbb E|Y_0-Y_{0,m}|^2)^{1/2}<\infty$. Let $H=L^2([0,1],\mathcal B,\lambda;\mathbb R)$ be the real Hilbert space of almost-everywhere classes of square-integrable profiles, where $\mathcal B$ is the Borel sigma-algebra and $\lambda$ is Lebesgue measure. Define $\mathcal I:\mathbb R\to H$ by $\mathcal I(y)=[\xi\mapsto y]$, and set $X_t(\omega)=\mathcal I(Y_t(\omega))=[\xi\mapsto Y_t(\omega)]$. Define the bounded real-linear functional $L:H\to\mathbb R$ by $L(v)=\int_0^1v(\xi)\,d\xi$. For each $n\ge1$, let integer block lengths $b_n$ satisfy $b_n\to\infty$ and $b_n/\sqrt n\to0$. This constant-profile construction satisfies the centered causal $L^2$-$m$-approximability assumptions of the bounded profile-functional bootstrap proposition, and $L(X_t)=Y_t$.

## Example references

[[prop-fd-profile-functional-bootstrap|Bounded profile functional conditional CLT]]

## Facts & Assumptions

**Given:** The scalar process and its independent-tail coupling in the Example, the Axiom of Choice, and the displayed block-length regime.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function; it is the stated Choice assumption of the proposition.

[F1] [[def-l2-m-approximable-causal-bernoulli-shift]]: under Countable Choice the profile space is the real separable $L^2([0,1])$ Hilbert space; the shift setup requires Countable Choice and Dependent Choice for the independent product extension carrying the replacement family, as well as a measurable causal representation, finite second moment, and summable independent-tail replacement errors.

[F2] [[cor-cauchy-schwarz-for-random-variables]]: on a probability space, $\mathbb E|Y_0|\le(\mathbb E|Y_0|^2)^{1/2}$.

[F3] [[def-bochner-integrable-function]] and [[thm-bochner-integrability-criterion]]: a strongly measurable Banach-valued map with integrable norm has a Bochner integral defined by limits of integrable simple-function integrals; the integral is independent of the chosen approximants.

[F4] [[prop-fd-profile-functional-bootstrap]]: under the stated profile, replacement-error, Choice, and block-length hypotheses, every bounded real-linear functional has the conditional law and variance conclusions in that Proposition.

[F5] [[thm-cauchy-schwarz-in-an-inner-product-space]]: for $u,v\in H$, $|\langle u,v\rangle_H|\le\|u\|_H\|v\|_H$.

[F6] [[def-strongly-measurable-banach-valued-function]]: strong measurability means being an almost-everywhere pointwise norm limit of measurable Banach-valued simple functions.

[F7] [[thm-choice-implies-dependent-implies-countable-choice]]: in ZF, the Axiom of Choice implies Dependent Choice and then Countable Choice, with Dependent Choice formulated using a prescribed initial point.

## Verification

**Given:** The assumptions and suppliers above.

1.1 By [A1] and [F7], the assumed AC yields both DC and Countable Choice, so the product-extension setup in [F1] is available. Use the constant-profile map $\mathcal I:\mathbb R\to H$ defined in the Example. Then $\|\mathcal I(y)\|_H^2=\int_0^1|y|^2\,d\xi=|y|^2$, so $\mathcal I$ is a linear isometry. Since $\mathcal I$ is continuous, $X_t(\omega)=\mathcal I(Y_t(\omega))$ is a measurable causal $H$-valued shift; applying $\mathcal I$ to the same independent replacements gives $X_{t,m}(\omega)=\mathcal I(Y_{t,m}(\omega))$. [A1, F1, F7, given, algebra]

2.1 The isometry gives $\mathbb E\|X_0\|_H^2=\mathbb E|Y_0|^2$ and $(\mathbb E\|X_0-X_{0,m}\|_H^2)^{1/2}=(\mathbb E|Y_0-Y_{0,m}|^2)^{1/2}$ for every $m$. Apply [F2] to $Y_0$ and the constant random variable $1$ to obtain $\mathbb E|Y_0|\le(\mathbb E|Y_0|^2)^{1/2}<\infty$; hence $\mathbb E\|X_0\|_H<\infty$. By [A1] and [F7], AC supplies Countable Choice, so [F1] gives a countable dense sequence $(h_k)$ in $H$. For each $N$, let $\pi_N(x)$ be a nearest point among $h_1,\ldots,h_N$, resolving ties by the least index. Its finitely many cells are Borel, since they are finite intersections of strict or weak comparisons of continuous distance functions. Thus $\pi_N\circ X_0$ is a measurable finite-valued simple map, and density gives $\pi_N(X_0)\to X_0$ pointwise. By [F6], $X_0$ is strongly measurable, so [F3] gives its Bochner integrability. Since [F3] also gives scalar simple functions $s_j=\sum_k c_{j,k}\mathbf1_{A_{j,k}}$ with $\mathbb E|s_j-Y_0|\to0$, their images satisfy $\mathbb E_B\mathcal I(s_j)=\sum_k\mathbb P(A_{j,k})\mathcal I(c_{j,k})=\mathcal I(\mathbb E s_j)$. The isometry implies $\mathbb E\|\mathcal I(s_j)-X_0\|_H\to0$, so taking the defining integral limits gives $\mathbb E_BX_0=\mathcal I(\mathbb E Y_0)=0$. The profile shift therefore has the required centering and exactly the scalar replacement-error sum. [given, A1, F1, F2, F3, F6, F7, step 1.1, algebra]

3.1 The functional $L$ is well-defined on almost-everywhere classes, and [F5] gives $|L(v)|\le\|v\|_H\|1\|_H=\|v\|_H$. Since $L(1)=1$ and $\|1\|_H=1$, $\|L\|=1$; also $L(X_t)=\int_0^1Y_t\,d\xi=Y_t$. All hypotheses of [F4] are therefore satisfied, so its conditional bootstrap conclusion applies to this scalar summary. [given, A1, F4, F5, step 1.1, step 2.1, algebra] ∎

