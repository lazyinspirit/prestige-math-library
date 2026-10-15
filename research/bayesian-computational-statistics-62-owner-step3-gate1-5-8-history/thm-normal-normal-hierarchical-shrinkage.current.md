---
id: thm-normal-normal-hierarchical-shrinkage
kind: theorem
title: "Conditional normal shrinkage in a finite hierarchy"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - def-hierarchical-bayesian-model
  - lem-finite-products-of-dominated-kernels-have-product-density
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-hierarchical-posterior-normalization-on-positive-finite-evidence
  - thm-normal-normal-conjugate-update
  - thm-measure-uniqueness-on-a-sigma-finite-pi-system
  - thm-measurability-of-integration-against-a-kernel
  - thm-sections-of-product-measurable-functions-are-measurable
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - lem-finite-products-of-probability-kernels
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
axiom_use: "AC is used through the Gaussian-normalization hypothesis in the BCS-03 Normal–Normal update and through the hierarchy's conditional-independence terminology. The finite-product factorization and hyperparameter mixture use no additional choice principle."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Andrew Gelman, John B. Carlin, Hal S. Stern, David B. Dunson, Aki Vehtari, and Donald B. Rubin, Bayesian Data Analysis, 3rd ed., §5.4"
      url: "https://sites.stat.columbia.edu/gelman/book/BDA3.pdf"
      locator: "Chapter 5, §5.4, printed pp. 115–117: the normal exchangeable-parameter model, conditional posterior means and variances, and the hyperparameter posterior."
    - title: "Alicia A. Johnson, Miles Q. Ott, and Mine Dogucu, Bayes Rules!, Chapter 16"
      url: "https://www.bayesrulesbook.com/chapter-16.html"
      locator: "Chapter 16, §§16.3–16.6: normal group effects, hyperparameters, and shrinkage toward the population mean."
---

## Statement

Assume the normal specialization of [[def-hierarchical-bayesian-model]] with
parameter space $\Theta=\mathbb R$ and hyperparameter space
$H=\mathbb R\times(0,\infty)$. Fix $\mu\in\mathbb R$ and $\tau^2>0$.
Conditional on $(\mu,\tau^2)$, let the
group parameters be independent with $\theta_j\sim N(\mu,\tau^2)$. Let the
observed group summaries be conditionally independent with
$\bar Y_j\mid\theta_j\sim N(\theta_j,s_j^2)$, where each known $s_j^2>0$. In this normal specialization, the supplied
likelihood-density version is the canonical normal density at every parameter
and observation value:
$$f_j(\theta,y)=(2\pi s_j^2)^{-1/2}\exp\!\left(-\frac{(y-\theta)^2}{2s_j^2}\right)\qquad(\theta,y\in\mathbb R).$$
Then, conditional on $(\mu,\tau^2,\bar Y_1=\bar y_1,\ldots,\bar Y_m=\bar y_m)$,
the $\theta_j$ are independent and
$$\theta_j\sim N(\hat\theta_j,V_j),\qquad\hat\theta_j=\frac{\bar y_j/s_j^2+\mu/\tau^2}{1/s_j^2+1/\tau^2},\qquad V_j=\left(1/s_j^2+1/\tau^2\right)^{-1}.$$
If $(\mu,\tau^2)$ is unknown with a proper hyperprior supported on
$\mathbb R\times(0,\infty)$, let $P_y$ be the full posterior kernel from
[[thm-hierarchical-posterior-normalization-on-positive-finite-evidence]] and,
on each positive finite evidence fiber, define its hyperparameter marginal on
Borel $C\subseteq H$ by $\Pi_y(C):=P_y(C\times\mathbb R^m)$. The posterior law of
$\theta_j$ is the mixture of these conditional normal laws over $\Pi_y$;
replacing $\mu,\tau^2$ by point estimates need not give this posterior. No normalized
hyperparameter posterior is asserted on a zero or infinite evidence fiber.

## Facts & Assumptions

**Given:** The normal hierarchical model, known positive sampling variances $s_j^2$, positive conditional prior variance $\tau^2$, and the stated observed group summaries.

[F1] Conditional on the hyperparameters, the model uses the normal prior $N(\mu,\tau^2)$ and group observation kernels with the canonical normal density factors $f_j(\theta,y)=(2\pi s_j^2)^{-1/2}\exp(-(y-\theta)^2/(2s_j^2))$ specified pointwise in the Statement; these factors are jointly measurable, and distinct groups factor under the specified product kernels. [[def-hierarchical-bayesian-model]]

[F2] The finite product observation kernel has its specified product density. [[lem-finite-products-of-dominated-kernels-have-product-density]]

[F3] On a positive finite evidence fiber, the posterior of the full latent tuple is the normalized joint likelihood density. [[thm-hierarchical-posterior-normalization-on-positive-finite-evidence]]

[F4] Tonelli passes nonnegative integrals through the finite product likelihood and the hyperparameter integral. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[F5] For a proper normal prior $N(\mu_0,\tau_0^2)$ and $n\ge1$ IID observations from $N(\mu,\sigma^2)$ with known positive variance, the evidence is finite positive and the posterior has precision $\tau_0^{-2}+n\sigma^{-2}$ and precision-weighted mean. [[thm-normal-normal-conjugate-update]]

[F6] Measures agreeing on a generating pi-system are equal when that pi-system has an increasing finite-measure exhaustion. [[thm-measure-uniqueness-on-a-sigma-finite-pi-system]]

[F7] Integrating a nonnegative product-measurable function against a finite probability kernel gives a measurable function of its source parameter. [[thm-measurability-of-integration-against-a-kernel]]

[F8] Sections and coordinate projections in finite product measurable spaces are measurable, and measurable rectangles generate the product sigma-algebra. [[thm-sections-of-product-measurable-functions-are-measurable]], [[def-product-sigma-algebra-and-finite-product-sigma-algebras]]

[F9] Finite products of probability kernels with a common source are probability kernels and satisfy the product rectangle formula. [[lem-finite-products-of-probability-kernels]]

[A1] AC is assumed for the library normal-law and conditional-expectation-class conventions. [[def-axiom-of-choice]]

[A2] $\tau^2>0$ and all $s_j^2>0$.

## Proof

**Proof technique:** specialize the BCS-03 Normal–Normal update to each group, factor the finite conditional posterior, and integrate over the hyperparameter posterior.

**Given:** The stated fixed hyperparameters, group summaries, and variances.

1.1 Fix a group $j$ and specialize [F5] to one observation: identify its parameter with $\theta_j$, set $\mu_0=\mu$, $\tau_0^2=\tau^2$, $n=1$, $y_1=\bar y_j$, and $\sigma^2=s_j^2$. The model and pointwise density specification in [F1] supply this normal prior and the canonical normal likelihood density used by [F5], while [A1] and [A2] verify the choice and positive-variance hypotheses of [F5]. The theorem gives a finite positive group evidence and posterior variance $V_j=(1/\tau^2+1/s_j^2)^{-1}$ and mean $\hat\theta_j=V_j(\mu/\tau^2+\bar y_j/s_j^2)$, as stated. [A1, A2, F1, F5, given, algebra]

2.1 For each group put $\mu_j(A)=\int_A f_j(\theta,\bar y_j)N(\mu,\tau^2)(d\theta)$ and let $m_j=\mu_j(\mathbb R)>0$. By [F5] and step 1.1, $\mu_j/m_j=Q_j=N(\hat\theta_j,V_j)$. Apply [F3] to the hierarchy with the proper point-mass hyperprior at the fixed $(\mu,\tau^2)$. Its latent prior on $\mathbb R^m$ is the product of the group priors by [F1], and its likelihood density is $\prod_j f_j(\theta_j,\bar y_j)$ by [F2]. Repeated Tonelli [F4] shows that the normalized posterior assigns each measurable rectangle $\prod_j A_j$ mass $\prod_j\mu_j(A_j)/\prod_jm_j=\prod_jQ_j(A_j)$, the rectangle mass of $\bigotimes_jQ_j$ by [F9]. By [F8], rectangles form a generating pi-system. Both are probability measures agreeing on it; the constant exhaustion by the full space has common finite mass one, so [F6] makes them equal. This proves conditional independence and the displayed formula for every group. [A1, A2, F1, F2, F3, F4, F5, F6, F8, F9, step 1.1, algebra]

3.1 Now suppose $(\mu,\tau^2)$ is random with a proper hyperprior supported on $H$. For fixed observed summaries, put $M_j((\mu,\tau^2),A)=\int_A f_j(\theta,\bar y_j)N(\mu,\tau^2)(d\theta)$. The factor $f_j(\cdot,\bar y_j)$ is measurable by the section fact [F8]; composing it with the parameter-coordinate projection shows that $(\eta,\theta)\mapsto1_A(\theta)f_j(\theta,\bar y_j)$ is product-measurable. Since $G_\eta=N(\mu,\tau^2)$ is a probability kernel, [F7] makes $M_j(\cdot,A)$ measurable. Hence $m_j=M_j(\cdot,\mathbb R)$ and $Q_j(A)=M_j(\cdot,A)/m_j$ are measurable, with $m_j>0$ by step 1.1. Repeated Tonelli [F4] and the full-posterior formula [F3] give, for measurable $C\subseteq H$ and $A_1,\ldots,A_m\subseteq\mathbb R$, $P_y(C\times\prod_jA_j)=Z(y)^{-1}\int_C\prod_jM_j((\mu,\tau^2),A_j)\,\Pi(d\mu,d\tau^2)$. Taking every $A_j=\mathbb R$ shows $\Pi_y(C)=Z(y)^{-1}\int_C\prod_jm_j\,d\Pi$. Taking only $A_j=A$ and all other sets equal to $\mathbb R$ therefore gives $P_y(\theta_j\in A)=\int_HQ_j(A)\,\Pi_y(d\mu,d\tau^2)$. By [F5] and step 1.1, $Q_j=N(\hat\theta_j,V_j)$, so the group posterior is its conditional normal law averaged over the full hyperparameter posterior. If $\Pi_y$ is a point mass, this mixture equals its single conditional normal component; in general it need not equal a plug-in law. [F3, F4, F5, F7, F8, step 1.1, algebra] ∎
