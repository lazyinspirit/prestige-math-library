---
id: thm-finite-window-spatial-poisson-likelihood
kind: theorem
title: "Finite-window spatial Poisson likelihood relative to unit rate"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-finite-window-spatial-observation
  - lem-finite-configuration-product-measurable
  - lem-finite-product-measure-with-density
  - def-poisson-and-cox-point-process
  - thm-finite-intensity-poisson-process-existence-and-mixed-binomial-law
  - def-measure-with-density
  - def-dominated-statistical-experiment
  - def-likelihood-density
  - def-natural-logarithm
  - thm-natural-logarithm-laws
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: "Countable Choice is inherited through the Lebesgue measure in the window. No full Axiom of Choice is used: the density representative is given explicitly for every parameter."
sources:
  references:
    - title: "Adrian Baddeley, Spatial Point Processes and their Applications, complete lecture notes"
      url: "https://leman.stat.vt.edu/VTCourses/BaddeleyPointProcesses.pdf"
      locator: "Lecture 4, §§4.3–4.4, Examples 4.3–4.6, PDF pp. 61–64: finite Poisson laws and densities relative to a Poisson reference."
    - title: "Günter Last and Mathew Penrose, Lectures on the Poisson Process, author-hosted 2017 version"
      url: "https://stoch.math.kit.edu/img/Last/lastpenrose2017.pdf"
      locator: "Chapter 3, Theorem 3.6 and Proposition 3.8, PDF pp. 33–34: finite-intensity Poisson construction and mixed-binomial law."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Statement

Let $W\subset\mathbb R^d$ and $\mathcal C(W)$ be as in
[[def-finite-window-spatial-observation]], with volume $v=|W|<\infty$. For
each parameter $\theta$, let $\lambda_\theta:W\to[0,\infty)$ be a finite-valued
Borel function and assume
$$\Lambda_\theta:=\int_W\lambda_\theta(x)\,\ell_W(dx)<\infty.$$
Extend $\lambda_\theta$ by zero off $W$ and let $P_\theta$ be the law on
$\mathcal C(W)$ of the Poisson process on $\mathbb R^d$ with intensity measure
$\nu_\theta=1_W\lambda_\theta\,d\ell_d$. Let $P_0$ be the unit-rate Poisson
law on $\mathcal C(W)$ obtained from intensity $1_W\,d\ell_d$. Then
$$\frac{dP_\theta}{dP_0}(\eta)=g_\theta(\eta):=\exp\{v-\Lambda_\theta\}\prod_{x\in\eta}\lambda_\theta(x).$$
where the product counts atom occurrences and the empty product is $1$. In
particular $P_\theta\ll P_0$. This formula explicitly chooses a common
parameter-indexed density version, so it requires no arbitrary simultaneous
selection of Radon–Nikodym representatives.

For an observed $\eta$, if every observed occurrence has positive intensity,
the log likelihood, up to the parameter-independent term $v$, is
$$\ell_\eta(\theta)=\sum_{x\in\eta}\log\lambda_\theta(x)-\Lambda_\theta.$$
If any observed occurrence has zero intensity, the likelihood is zero and its
log is $-\infty$.

## Facts & Assumptions

**Given:** The window $W$, the parameter-indexed intensities, and their finite
integrals as in the Statement.

[F1] $\mathcal C(W)$ is the finite-window configuration space, with boundary
points included exactly when they belong to $W$; $v=\ell_W(W)<\infty$.
([[def-finite-window-spatial-observation]])

[F2] A nonnegative measurable density $f$ relative to a measure $\mu$ defines
the measure $f\,d\mu$, and its total mass is $\int f\,d\mu$.
([[def-measure-with-density]])

[F3] The law of a Poisson process with finite intensity $\nu$ is the push-forward
of $\sum_{n\ge0}e^{-\nu(W)}\nu(W)^n/n!\,(\nu/\nu(W))^{\otimes n}$ under
$(x_1,\ldots,x_n)\mapsto\sum_i\delta_{x_i}$; the zero-intensity case is
the empty process. ([[thm-finite-intensity-poisson-process-existence-and-mixed-binomial-law]])

[F4] For a finite measure with density $f$, the $n$-fold product has density
$\prod_{i=1}^n f(x_i)$ relative to the $n$-fold product of the reference
measure. ([[lem-finite-product-measure-with-density]])

[F5] The occurrence product $\eta\mapsto\prod_{x\in\eta}f(x)$ is measurable
for every finite-valued Borel $f$. ([[lem-finite-configuration-product-measurable]])

[F6] In a dominated experiment the supplied reference measure is fixed, and a
likelihood density at the observation is a chosen density version evaluated
there. ([[def-dominated-statistical-experiment]], [[def-likelihood-density]])

[F7] For positive arguments, $\log(xy)=\log x+\log y$ and
$\log(\exp t)=t$. ([[def-natural-logarithm]], [[thm-natural-logarithm-laws]])

## Proof

**Given:** $\lambda_\theta$ is finite-valued Borel and
$\int_W\lambda_\theta\,d\ell_W=\Lambda_\theta<\infty$.

1.1 The zero extension of $\lambda_\theta$ is Borel: for Borel $E\subseteq[0,\infty)$ its inverse image is $W\cap\lambda_\theta^{-1}(E)$ if $0\notin E$, and $W^c\cup(W\cap\lambda_\theta^{-1}(E))$ if $0\in E$; both are Borel because $W$ is Borel and $\lambda_\theta$ is Borel on $W$. Thus [F2] defines its finite measure of total mass $\Lambda_\theta$ on $\mathbb R^d$, supported on $W$. The unit-rate reference intensity $1_W\,d\ell_d$ has total mass $v$ by [F1]. Thus [F3] applies to both Poisson laws, and their finite-mixture tuple integrals are supported on $W^n$. [given, F1, F2, F3]

1.2 The product factor in $g_\theta$ is measurable by [F5], and the exponential factor is a finite nonnegative constant. Hence $g_\theta$ is a measurable nonnegative function on $\mathcal C(W)$. [given, F5, construct]

2.1 Let $A\subseteq\mathcal C(W)$ be measurable. Expanding [F3] for $P_\theta$ on its support $W$ and using [F4] gives $P_\theta(A)=e^{-\Lambda_\theta}\sum_{n=0}^{\infty}\frac1{n!}\int_{W^n}1_A\!\left(\sum_{i=1}^n\delta_{x_i}\right)\prod_{i=1}^n\lambda_\theta(x_i)\,\ell_W^{\otimes n}(d(x_1,\ldots,x_n)).$ For $P_0$, the same formula holds with $\Lambda_\theta$ replaced by $v$ and every product factor replaced by $1$. [step 1.1, F3, F4]

3.1 Expand $\int_Ag_\theta\,dP_0$ by the $P_0$ formula in step 2.1. On the $n$-tuple component, $g_\theta(\sum_i\delta_{x_i})= e^{v-\Lambda_\theta}\prod_i\lambda_\theta(x_i)$, including $n=0$ by the empty-product convention. Cancellation of $e^{-v}$ with $e^v$ yields exactly the series for $P_\theta(A)$ in step 2.1. [step 2.1, F3, F4, algebra]

4.1 Since step 3.1 holds for every measurable $A$, $g_\theta$ is a Radon–Nikodym density of $P_\theta$ relative to $P_0$, and therefore $P_\theta\ll P_0$. The explicitly displayed $g_\theta$ supplies the density version for every $\theta$, so the arbitrary selector in [F6] is not used. Taking its logarithm gives the stated expression when all event factors are positive; a zero factor makes the finite product zero and the log likelihood $-\infty$. [step 1.2, step 3.1, F6, F7, algebra] ∎