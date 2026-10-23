---
id: rem-fd-fluid-sobol-interface
title: Sobol sensitivity and observable-error interface
kind: remark
status: draft
origin: pipeline
pipeline_run: fluid-dynamics-all-47-2026-10-23
dependency_level: 0
domain: mathematics
library: mathematics
deps:
  - def-first-and-total-sobol-indices
  - def-product-hoeffding-anova-components
  - def-product-coordinate-projections
  - def-moments-variance-and-covariance
  - thm-pick-freeze-sobol-covariance-identities
  - alg-pick-freeze-monte-carlo-sobol-estimators
  - thm-pick-freeze-sobol-ratio-joint-clt-and-mcse
  - def-axiom-of-choice
dependency_roles:
  def-first-and-total-sobol-indices: mathematical-premise
  def-product-hoeffding-anova-components: mathematical-premise
  def-product-coordinate-projections: mathematical-premise
  def-moments-variance-and-covariance: mathematical-premise
  thm-pick-freeze-sobol-covariance-identities: mathematical-premise
  alg-pick-freeze-monte-carlo-sobol-estimators: mathematical-premise
  thm-pick-freeze-sobol-ratio-joint-clt-and-mcse: mathematical-premise
  def-axiom-of-choice: mathematical-premise
justified_by: []
proof_strategy: direct
axiom_use: "AC is assumed only for the cited Sobol ratio joint-CLT and MCSE result, where its supplier identifies the multivariate IID CLT as the use. The definitions, numerator identities, and finite-sample witness below use no choice principle."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Art B. Owen, Variance Components and Generalized Sobol' Indices, arXiv:1205.1774, §§2–2.1"
      url: "https://arxiv.org/pdf/1205.1774"
    - title: "Olivier Le Maître and Omar Knio, Introduction to Uncertainty Quantification, DTU PhD course lecture notes, pp. 66–83"
      url: "https://www2.compute.dtu.dk/~apek/UQ2018/lecture1.pdf"
---

## Remark

Let $1\le d<\infty$, let $(E_j,\mathcal E_j,\mu_j)$ be probability spaces, and set $(E,\mathcal E,\mu)=\prod_{j=1}^d(E_j,\mathcal E_j,\mu_j)$ with the finite product sigma-algebra and product probability. Let $X=(X_1,\ldots,X_d)$ have law $\mu$ and let $f\in L^2(\mu)$ be real-valued. Write $[d]=\{1,\ldots,d\}$; coordinate products $E_v$ and laws $\mu_v$ use the one-point probability space for the empty product. For $v\subseteq[d]$, define the coordinate projection by
$$P_vf(x_v):=\int_{E_{[d]\setminus v}}f(x_v,z_{[d]\setminus v})\,d\mu_{[d]\setminus v}(z_{[d]\setminus v}),$$
for almost every integrable section, assigning zero on its exceptional null set, and lift it to $E$ by making it constant in the other coordinates. As $L^2$ classes, $P_{[d]}f=f$ and $P_\varnothing f=\int f\,d\mu$. Define the product-law Hoeffding components by
$$f_u:=\sum_{v\subseteq u}(-1)^{|u|-|v|}P_vf,\qquad u\subseteq[d].$$
In particular $f_\varnothing=\mathbb E_\mu f$. With these definitions, write $V_u:=\mathbb E[f_u^2]$ and $V:=\operatorname{Var}(f(X))=\sum_{u\ne\varnothing}V_u$. When $V>0$, the first-order and total Sobol indices are $S_i:=V_{\{i\}}/V$ and $S_{T_i}:=\sum_{u\ni i}V_u/V$; when $V=0$, these normalized indices are undefined.

For sample size $n\ge2$, draw $n$ IID rows; within each row let $X,X',U,V_0,W,W'$ be mutually independent random vectors with law $\mu$. Define $X^{[i]}=(X_i,X'_{-i})$ and $\widetilde X^{[i]}=(X_{-i},X'_i)$. The first-order numerator is $N_i:=f(X)f(X^{[i]})-f(U)f(V_0)$, the total-effect numerator is $T_i:=\tfrac12(f(X)-f(\widetilde X^{[i]}))^2$, and the denominator is $D:=\tfrac12(f(W)-f(W'))^2$. The expectations of the two numerators are respectively $V_{\{i\}}$ and $\sum_{u\ni i}V_u$. The estimator returns ratios of the sample means of $N_i$ and $T_i$ over the sample mean of $D$ only when the latter is positive. Its formal plug-in covariance matrix is $\widehat J\widehat\Sigma\widehat J^{\mathsf T}/n$, where $\widehat\Sigma:=(n-1)^{-1}\sum_{r=1}^n(Z_r-\bar Z)^{\mathsf T}(Z_r-\bar Z)$, $Z_r=(N_{1,r},\ldots,N_{d,r},T_{1,r},\ldots,T_{d,r},D_r)$, and $\widehat J$ is the derivative of the vector ratio map at the observed row means.

A finite-sample ratio need not be unbiased: for one input $X\sim\operatorname{Bernoulli}(1/2)$ and output $f(x)=x$, take two rows $r=1,2$ of mutually independent Bernoulli$(1/2)$ draws $X_r,X'_r,U_r,V_r,W_r,W'_r$, with all draws independent across rows. Set $N_r:=X_r^2-U_rV_r$, $D_r:=\tfrac12(W_r-W'_r)^2$, $\bar N:=(N_1+N_2)/2$, and $\bar D:=(D_1+D_2)/2$. Here $V=\operatorname{Var}(X)=1/4$ and $V_{\{1\}}=\mathbb E[(X-\mathbb E X)^2]=1/4$, so the true first-order index is $1$, while conditional on $\bar D>0$ the reported ratio has expectation $\mathbb E[\bar N/\bar D\mid\bar D>0]=5/6$.

The joint ratio CLT and plug-in MCSE statement applies under its additional assumptions of AC, $f\in L^4$, and $V>0$; an $L^2$ input alone does not ensure a finite row-vector covariance or an MCSE interpretation. These independent-input formulas are not asserted for dependent coordinates. The sampling and bias budget above bounds an expected scalar observable only; it gives no error bound for Sobol ratios.

## Remark references

[[def-product-coordinate-projections|Product-coordinate averages, empty-product convention and representative interpretation]]

[[def-product-hoeffding-anova-components|Hoeffding components defined by the subset sum]]

[[def-first-and-total-sobol-indices|First-order and total Sobol index definition]]

[[thm-pick-freeze-sobol-covariance-identities|Pick-freeze covariance identities for numerator expectations]]

[[alg-pick-freeze-monte-carlo-sobol-estimators|Pick-freeze Sobol estimator and its finite-sample qualifications]]

[[thm-pick-freeze-sobol-ratio-joint-clt-and-mcse|Sobol ratio CLT and MCSE hypotheses]]

[[def-axiom-of-choice|Axiom of Choice used by the ratio-CLT supplier]]

[Art B. Owen, *Variance Components and Generalized Sobol' Indices*, arXiv:1205.1774, §§2–2.1](https://arxiv.org/pdf/1205.1774)

[Olivier Le Maître and Omar Knio, *Introduction to Uncertainty Quantification*, pp. 66–83](https://www2.compute.dtu.dk/~apek/UQ2018/lecture1.pdf)

## Facts & Assumptions

**Given:** A finite product input law with $f\in L^2$, the row sampling convention in the Statement, and, for the finite-sample witness, a Bernoulli$(1/2)$ input with $f(x)=x$ and two independent rows.

[A1] The input law is a finite product probability law, $f\in L^2$, and the independent copies in the row sampler have that law.

[A2] For the ratio CLT/MCSE interface only, additionally assume AC, $f\in L^4$, and $V>0$.

[F1] [[def-first-and-total-sobol-indices]]: $V_u=\mathbb E[f_u^2]$, $V=\operatorname{Var}(f)=\sum_{u\ne\varnothing}V_u$, and for $V>0$, $S_1=V_{\{1\}}/V$.

[F2] [[def-product-hoeffding-anova-components]]: $f_{\{1\}}=P_{\{1\}}f-P_\varnothing f$ and $P_\varnothing f=\mathbb E f$.

[F3] [[def-moments-variance-and-covariance]]: for square-integrable $X$, $\operatorname{Var}(X)=\mathbb E[(X-\mathbb E[X])^2]$.

[F4] [[alg-pick-freeze-monte-carlo-sobol-estimators]]: for one input its first-order numerator is $N=f(X)f(X)-f(U)f(V)$, its denominator row is $D=\tfrac12(f(W)-f(W'))^2$, and independent rows are sampled; the ratio of their means is returned when the denominator mean is positive.

[F5] [[def-product-coordinate-projections]]: $P_{[d]}f=f$ and $P_\varnothing f=\int f\,d\mu$.

[F6] [[thm-pick-freeze-sobol-covariance-identities]]: for a finite product law and $f\in L^2$, the first-order hybrid covariance is $V_{\{i\}}$ and the half squared total-effect hybrid difference has expectation $\sum_{u\ni i}V_u$.

[F7] [[thm-pick-freeze-sobol-ratio-joint-clt-and-mcse]]: under AC, $f\in L^4$, and $V>0$, the specified IID row ratios have a joint CLT and the scaled plug-in covariance converges to its stated limit.

## Proof

1.1 On the one-coordinate product space, [F5] gives $P_{\{1\}}f=f$ and $P_\varnothing f=\mathbb E[X]=1/2$. Thus [F2] gives $f_{\{1\}}=X-1/2$, and [F3] gives $V_{\{1\}}=\mathbb E[(X-1/2)^2]=1/4=V$. Since $V>0$, [F1] gives the true first-order index $S_1=1$. [F1, F2, F3, F5, given, algebra]

1.2 In each row, [F4] and $f(x)=x$ give $N_r=X_r-U_rV_r$ and $D_r=\tfrac12(W_r-W'_r)^2$. Since $U_r,V_r$ are independent Bernoulli$(1/2)$ variables, $\mathbb E[U_rV_r]=\mathbb P(U_r=V_r=1)=1/4$, so $\mathbb E[N_r]=1/2-1/4=1/4$. Since $W_r,W'_r$ are independent Bernoulli$(1/2)$ variables, $\mathbb P(W_r\ne W'_r)=1/2$, so $D_r=1/2$ with probability $1/2$ and is otherwise zero. The numerator draws are independent of the denominator draws, and the two rows are independent. Hence if $K$ counts the positive $D_r$, then $K\sim\operatorname{Binomial}(2,1/2)$ and is independent of $N_1+N_2$. [F4, given, algebra]

1.3 The finite-product, square-integrability, and independent-copy hypotheses in [A1] match [F6]. Therefore the expectations of the two numerator constructions are $V_{\{i\}}$ and $\sum_{u\ni i}V_u$, respectively; this identity alone does not assert that their normalized sample ratios are unbiased. [A1, F6]

2.1 On the return event $K>0$, the sample means are $\bar D=K/4$ and $\bar N=(N_1+N_2)/2$. Conditional on $K$, independence from $N_1+N_2$ and the mean in step 1.2 give $\mathbb E[\bar N/\bar D\mid K]=2\mathbb E[N_1+N_2]/K=1/K$. [F4, step 1.2, algebra]

3.1 Since $\mathbb P(K=1)=1/2$, $\mathbb P(K=2)=1/4$, and $\mathbb P(K>0)=3/4$, the conditional probabilities are $2/3$ and $1/3$. Therefore $\mathbb E[\bar N/\bar D\mid K>0]=(2/3)1+(1/3)(1/2)=5/6\ne1$. This proves finite-sample bias conditional on the algorithm returning a ratio, while step 1.1 gives the true index. [step 1.1, step 1.2, step 2.1, algebra]

4.1 Under the additional hypotheses [A2], [F7] supplies the stated joint ratio CLT and plug-in MCSE limit. Those hypotheses are not implied by $f\in L^2$, so no such MCSE interpretation is asserted from square-integrability alone. [A2, F7] ∎
