---
id: thm-frontdoor-adjustment-sufficiency
kind: theorem
title: "Front-door adjustment identifies an interventional mean"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 5
deps:
  - def-recursive-structural-causal-model-and-dag
  - def-potential-outcomes-and-consistency
  - lem-frontdoor-interventional-identities
  - def-measure-kernel-and-probability-kernel
  - def-regular-conditional-distribution
  - def-conditional-expectation-given-a-sigma-algebra
  - thm-measurability-of-integration-against-a-kernel
  - thm-existence-of-regular-conditional-distributions-for-standard-borel-targets
  - thm-disintegration-of-a-joint-law-on-standard-borel-spaces
  - cor-conditional-expectation-as-a-measurable-function-of-the-conditioning-variable
  - thm-tower-property-of-conditional-expectation
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-increasing-simple-approximation-of-a-nonnegative-measurable-function
  - thm-monotone-convergence-for-the-integral
  - def-axiom-of-choice
  - def-parametric-statistical-model
  - def-observational-equivalence
  - def-estimand-on-a-statistical-model
  - def-identifiability-of-an-estimand
  - thm-identifiability-iff-constant-on-equivalence-classes
proof_strategy: direct
axiom_use: "Assume AC for the regular conditional laws, disintegration and conditional-expectation interfaces. The finite structural recursion and countable treatment mixture use no further choice."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Judea Pearl, Causal Diagrams for Empirical Research, §3-2, pp. 675–676"
      url: "https://ftp.cs.ucla.edu/pub/stat_ser/R218-B.pdf"
    - title: "Miguel A. Hernán and James M. Robins, Causal Inference: What If, Technical Point 7.4, p. 101"
      url: "https://miguelhernan.org/s/hernanrobins_WhatIf_2jan25.pdf"
verification:
  precheck: pass
---

## Statement

Assume AC and a finite Markovian SCM with observed countable-valued
treatment $A$, observed standard-Borel mediator $M$, and real outcome $Y$.
Fix an atom $a$ with $P(A=a)>0$. Suppose in the full DAG: (i) $M$ lies on
every directed path from $A$ to $Y$; (ii) $A$ and $M$ are d-separated by the
empty set in $G_{\underline A}$; and (iii) $A$ d-separates $M$ and $Y$ in
$G_{\underline M}$. Write $\mu_a=P(M\in\cdot\mid A=a)$ and, for every
positive-probability treatment atom $a'$, write
$\mu_{a'}=P(M\in\cdot\mid A=a')$. Assume the nested-law support condition
$$\mu_a\ll\mu_{a'}\qquad\text{for every }a'\text{ with }P(A=a')>0,$$
and absolute integrability of the nested conditional means:
$$\int\!\int E(|Y|\mid M=m,A=a')\,P_A(da')\,\mu_a(dm)<\infty.$$
Then
$$E[Y^a]=\int P(dm\mid A=a)\int E(Y\mid M=m,A=a')\,P_A(da').$$
The right side is determined by the observed law, so the interventional mean
is identifiable on any statistical model of SCMs satisfying these
assumptions. For a discrete mediator, the support condition says that every
mediator value having positive probability under $A=a$ also has positive
probability under every positive-probability treatment atom. These are
sufficient conditions only. For non-atomic treatment values, regular
conditional formulas are determined only $P_A$-almost everywhere; this
item makes no pointwise claim at a null treatment value.

## Facts & Assumptions

**Given:** The SCM, three graph conditions, target atom, nested-law support, and absolute-integrability conditions in the statement.

[F1] The front-door graph conditions give $M^a\perp A$,
$M\perp U_{I_Y}\mid A$, $M^a\perp U_{I_Y}$, and
$Y^a=Y^{M^a}$, where $I_Y$ is the finite set of exogenous coordinates
defined in the helper. [[lem-frontdoor-interventional-identities]]

[F2] Standard-Borel variables have regular conditional laws; a disintegration
is unique almost everywhere with respect to its conditioning law.
[[def-regular-conditional-distribution]],
[[thm-existence-of-regular-conditional-distributions-for-standard-borel-targets]],
[[thm-disintegration-of-a-joint-law-on-standard-borel-spaces]],
[[cor-conditional-expectation-as-a-measurable-function-of-the-conditioning-variable]]

[F3] Integration of a jointly measurable function against a probability
kernel is measurable, and Fubini applies on the resulting finite product
probability spaces. [[def-measure-kernel-and-probability-kernel]],
[[thm-measurability-of-integration-against-a-kernel]],
[[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]

[F4] Conditional expectation has the tower property; increasing
nonnegative approximations and monotone convergence justify the integrable
limit operations. [[def-conditional-expectation-given-a-sigma-algebra]],
[[thm-tower-property-of-conditional-expectation]],
[[thm-increasing-simple-approximation-of-a-nonnegative-measurable-function]],
[[thm-monotone-convergence-for-the-integral]], [[def-axiom-of-choice]]

[F5] Identifiability means constancy over parameter values inducing the same
observed law. [[def-parametric-statistical-model]],
[[def-observational-equivalence]], [[def-estimand-on-a-statistical-model]],
[[def-identifiability-of-an-estimand]],
[[thm-identifiability-iff-constant-on-equivalence-classes]]

## Proof
**Proof technique:** represent the outcome response by its exogenous coordinates, use conditional independence to recover its observed conditional kernel, and integrate that kernel against the intervention mediator law.

**Given:** The hypotheses in the statement.

1.1 Let $I_Y$ be as in [F1], let $\mathcal U_Y=\prod_{v\in I_Y}E_v$, and let $\nu$ be the law of $U_{I_Y}$. Recursion under $do(M=m)$ gives a jointly measurable function $F:S_M\times\mathcal U_Y\to\mathbb R$ with $Y^m=F(m,U_{I_Y})$. Under the factual equations, the same recursion gives $Y=F(M,U_{I_Y})$, because $U_M$ enters only the equation for $M$ and all other exogenous coordinates that can affect $Y$ after fixing $M$ lie in $I_Y$. For each supported atom $a'$, let $\nu_{a'}(D)=P(U_{I_Y}\in D\mid A=a')$. By [F1], conditional independence gives $P((M,U_{I_Y})\in\cdot\mid A=a')=\mu_{a'}\otimes\nu_{a'}.$ Thus, for every Borel set $B\subseteq\mathbb R$, the measurable function $\lambda_{a'}(m,B)=\int 1_B(F(m,u))\,\nu_{a'}(du)$ satisfies, for each Borel mediator set $D$, $P(Y\in B,M\in D\mid A=a')=\int_D\lambda_{a'}(m,B)\,\mu_{a'}(dm).$ It is therefore a regular conditional law of $Y$ given $(M,A=a')$; uniqueness in [F2] identifies it with the observed conditional kernel $\mu_{a'}$-almost everywhere. Applying this identity to bounded truncations and then using [F4] gives $\int |F(m,u)|\,\nu_{a'}(du)=E(|Y|\mid M=m,A=a')$ for $\mu_{a'}$-almost every $m$. [F1, F2, F3, F4, given, construct]

2.1 For each positive-probability atom $a'$, the support assumption $\mu_a\ll\mu_{a'}$ transfers the full-measure identity from step 1.1 to a $\mu_a$-full set. The treatment support is countable, so the intersection of these sets is still $\mu_a$-full. The integrability hypothesis and the nonnegative identity in step 1.1 imply $\int\!\int |F(m,u)|\,\nu_{a'}(du)\,P_A(da')\,\mu_a(dm)<\infty.$ Since $A$ is countable-valued, the law of $U_{I_Y}$ is the mixture $\nu=\int\nu_{a'}P_A(da')$. Hence $\int\!\int|F(m,u)|\,\nu(du)\,\mu_a(dm)<\infty,$ and the conditional mean kernel has the observed-law representation $\int F(m,u)\,\nu(du) =\int E(Y\mid M=m,A=a')\,P_A(da')$ for $\mu_a$-almost every $m$. [step 1.1, F2, F4, given, algebra]

3.1 By [F1], $Y^a=Y^{M^a}=F(M^a,U_{I_Y})$ and $M^a$ is independent of $U_{I_Y}$. The integrability from step 2.1 permits Fubini [F3], so $E[Y^a]=\int\!\int F(m,u)\,\nu(du)\,P_{M^a}(dm).$ Also [F1] gives $M^a\perp A$, and consistency on $\{A=a\}$ gives $P_{M^a}=P(M\in\cdot\mid A=a)=\mu_a$. Substituting step 2.1 proves the displayed front-door formula. [F1, step 2.1, F3, given, algebra]

4.1 The right side of the formula uses only the observed law of $(Y,M,A)$. Conditional-mean versions agree $\mu_a$-almost everywhere by step 2.1 and the domination assumption. Therefore any two SCM parameter values with the same observed law give the same target mean, which is identifiability by [F5]. [given, F2, F5, step 3.1] ∎
