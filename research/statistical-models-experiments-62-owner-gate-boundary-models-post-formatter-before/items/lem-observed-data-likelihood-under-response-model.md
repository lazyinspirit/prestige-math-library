---
id: lem-observed-data-likelihood-under-response-model
kind: lemma
title: "Observed-data likelihood under a response model"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-full-observed-and-missing-data
  - def-mcar-mar-and-mnar
  - def-parametric-statistical-model
  - def-dominated-statistical-experiment
  - def-finite-sigma-finite-and-semifinite-measures
  - def-likelihood-density
  - def-measure-kernel-and-probability-kernel
  - def-axiom-of-choice
  - thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality
  - lem-radon-nikodym-density-of-a-finite-positive-measure-has-a-nonnegative-representative
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Lu Mao, Missing Data: Foundations and Methods, Chapter 1, §1.2"
      url: "https://lmaowisc.github.io/missing_data/chapter-1.html"
    - title: "National Research Council, The Prevention and Treatment of Missing Data in Clinical Trials, Chapter 4, pp. 60–61"
      url: "https://www.nationalacademies.org/read/12955/chapter/6"
---

## Statement

Assume AC. Let $W=(W_1,\ldots,W_k)$ have a full-data model dominated by a
common sigma-finite positive measure $\mu$ on the finite product measurable
space $\mathcal W=\prod_{j=1}^k\mathcal W_j$, with selected finite-valued
density representatives $p_\theta$ as in
[[def-dominated-statistical-experiment]] and [[def-likelihood-density]]. Let
$\mathcal R$ be a nonempty finite pattern set, let $I_r$ and $J_r$ be the
observed and missing coordinate sets for pattern $r$, and write
$\pi_r(w)=W_{\mathrm{obs}}(r)$ for its measurable coordinate projection. Let
$g_\psi(r\mid w)$ be a supplied response probability kernel as in
[[def-mcar-mar-and-mnar]], and define the joint model by
$$P_{\theta,\psi}(dw,\{r\})=g_\psi(r\mid w)P_\theta(dw).$$

Fix a finite positive measure $\rho$ equivalent to $\mu$; such a measure
exists for every sigma-finite $\mu$. For each pattern put
$$\kappa_r(B)=\rho(\pi_r^{-1}(B))$$
for measurable $B\subseteq\mathcal W_{\mathrm{obs}}(r)$, and define the finite
measure on the observed disjoint union by
$$\lambda_O(A)=\sum_{r\in\mathcal R}\kappa_r(\{x:(r,x)\in A\}).$$
The full-data marginal law of $W_{\mathrm{obs}}(r)$ and the pattern-$r$
observed sublaw $B\mapsto P_{\theta,\psi}(R=r,\pi_r(W)\in B)$ are absolutely
continuous with respect to $\kappa_r$. Choose finite-valued nonnegative
Radon--Nikodym density representatives $q_{\theta,r}$ and
$\ell_{\theta,\psi,r}$ for these measures. Then the observed record
$O=(R,W_{\mathrm{obs}}(R))$ is dominated by $\lambda_O$ and has density
$\ell_{\theta,\psi}(r,x)=\ell_{\theta,\psi,r}(x)$ at $(r,x)$.

In the product-reference special case where
$\mu=\nu=\bigotimes_{j=1}^k\nu_j$, each $\nu_j$ is sigma-finite, and the
coordinate reordering $w=(x,z)=(W_{\mathrm{obs}}(r),W_{\mathrm{mis}}(r))$
identifies $\nu$ with
$\nu_r^{\mathrm{obs}}\times\nu_r^{\mathrm{mis}}$, where
$\nu_r^{\mathrm{obs}}=\bigotimes_{j\in I_r}\nu_j$ and
$\nu_r^{\mathrm{mis}}=\bigotimes_{j\in J_r}\nu_j$, one may instead use the
pattern reference $\nu_r^{\mathrm{obs}}$, with disjoint-union reference
$\lambda_O^{\mathrm{prod}}(A)=\sum_r\nu_r^{\mathrm{obs}}(\{x:(r,x)\in A\})$.
The observed record is dominated by this sigma-finite measure, and Tonelli's
theorem gives the density versions
$$\bar q_{\theta,r}(x)=\int p_\theta(x,z)\,\nu_r^{\mathrm{mis}}(dz),\qquad \ell_{\theta,\psi,r}(x)=\int p_\theta(x,z)g_\psi(r\mid x,z)\,\nu_r^{\mathrm{mis}}(dz).$$
An empty coordinate block is a one-point space with unit mass.

## Facts & Assumptions

**Given:** AC, the finite-coordinate model dominated by a common
sigma-finite measure, its supplied response kernel, and, for the coordinate
integral specialization, the product reference and pattern-specific product
decompositions in the Statement.

[F1] [[def-full-observed-and-missing-data]]: the full data are
$W=(W_1,\ldots,W_k)$, pattern $R$ selects the recorded coordinates, and the
observed record is $O=(R,W_{\mathrm{obs}}(R))$.

[F2] [[def-mcar-mar-and-mnar]]: a response mechanism is a supplied
conditional law $g(r\mid w)$ represented by a probability kernel.

[F3] [[def-dominated-statistical-experiment]]: the common supplied dominator
is sigma-finite and dominates every full-data law.

[F4] [[def-finite-sigma-finite-and-semifinite-measures]]: sigma-finiteness
supplies a countable cover by sets of finite $\mu$-measure.

[F5] [[def-parametric-statistical-model]]: a parametric model is the parameter
map from labels $\theta$ to their sampling laws $P_\theta$.

[F6] [[def-likelihood-density]]: under AC, select finite-valued measurable
nonnegative representatives of density classes.

[F7] [[def-measure-kernel-and-probability-kernel]]: every response-kernel
section has total mass one.

[F8] [[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]]
and
[[lem-radon-nikodym-density-of-a-finite-positive-measure-has-a-nonnegative-representative]]:
finite positive measures absolutely continuous with respect to a finite
positive reference have finite-valued nonnegative density representatives
under AC.

[F9] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: nonnegative
product-measurable functions have measurable section integrals, and
integrating a section integral equals integrating over the product.

[A1] [[def-axiom-of-choice]]: AC permits selection from a family of nonempty
sets.

## Proof

**Proof technique:** Construct an equivalent finite reference, take patternwise
pushforwards, and use Tonelli in the product-reference specialization.

1.1 By [F3] and [F4], choose a countable cover $E_n$ of $\mathcal W$ with $\mu(E_n)<\infty$, replace it by the increasing cover $F_n=\bigcup_{j\le n}E_j$, and put $A_1=F_1$ and $A_n=F_n\setminus F_{n-1}$ for $n\ge2$. The $A_n$ partition $\mathcal W$ and each has finite $\mu$-measure. Set $c_n=2^{-n}/(1+\mu(A_n))$ and define $\rho(E)=\sum_{n\ge1}c_n\mu(E\cap A_n)$. Rearrangement of nonnegative double series shows that $\rho$ is countably additive; moreover $\rho(\mathcal W)\le\sum_n2^{-n}<\infty$, and $\rho(E)=0$ exactly when $\mu(E)=0$, since every $c_n>0$ and the $A_n$ partition $\mathcal W$. Thus $\rho$ is finite and equivalent to $\mu$. [F3, F4, F9, construct]

1.2 For every pattern $r$, the coordinate projection $\pi_r$ is measurable by [F1], so $\kappa_r=\rho\circ\pi_r^{-1}$ is a finite measure. If $\kappa_r(B)=0$, equivalence gives $\mu(\pi_r^{-1}B)=0$, and [F3] gives $P_\theta(\pi_r^{-1}B)=0$. Thus the full-data marginal $B\mapsto P_\theta(\pi_r^{-1}B)$ is absolutely continuous with respect to $\kappa_r$. The pattern sublaw $B\mapsto\int_{\pi_r^{-1}B}g_\psi(r\mid w)\,P_\theta(dw)$ is bounded above by that marginal because the kernel section lies in $[0,1]$, so it too is absolutely continuous. By [A1, F6, F8], choose finite-valued nonnegative densities $q_{\theta,r}$ and $\ell_{\theta,\psi,r}$ for these finite measures. [A1, F1, F3, F6, F8, given]

2.1 For a measurable set $A$ in the observed disjoint union, its pattern sections $A_r=\{x:(r,x)\in A\}$ satisfy $P_{\theta,\psi}(O\in A)=\sum_r\int_{A_r}\ell_{\theta,\psi,r}\,d\kappa_r =\int_A\ell_{\theta,\psi}(r,x)\,d\lambda_O$. These densities therefore represent the observed-record law relative to the stated $\lambda_O$; their total mass is one because $\sum_rP_{\theta,\psi}(R=r)=\int\sum_rg_\psi(r\mid w)\,P_\theta(dw)=1$. The full-data marginal densities $q_{\theta,r}$ likewise integrate to one. [F1, F7, step 1.2, given]

3.1 In the product-reference case, for each pattern $r$ and observed-coordinate measurable set $B$, the product decomposition in the Statement gives the pattern sublaw as $\int_{B\times\mathcal W_{\mathrm{mis}}(r)} p_\theta(x,z)g_\psi(r\mid x,z)\, d(\nu_r^{\mathrm{obs}}\times\nu_r^{\mathrm{mis}})$. Its integrand is nonnegative and product-measurable, so [F9] gives the displayed missing-coordinate integral as a density relative to $\nu_r^{\mathrm{obs}}$. Applying the same argument with $g$ omitted gives the displayed marginal density $\bar q_{\theta,r}$. Empty blocks use the one-point unit measure as stated. [A1, F1, F2, F5, F7, F9, given] ∎