---
id: thm-natural-effect-identification-under-cross-world-independence
kind: theorem
title: "The natural-effect mediation formula under independent errors"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 6
deps:
  - def-controlled-and-natural-mediation-effects
  - def-simple-markovian-mediation-scm
  - def-natural-effect-identification-assumptions
  - lem-npsem-ie-implies-cross-world-independence-for-mediation
  - def-axiom-of-choice
  - def-standard-borel-space
  - lem-finite-products-of-standard-borel-spaces-are-standard-borel
  - thm-existence-of-regular-conditional-distributions-for-standard-borel-targets
  - def-conditional-law-given-a-random-element
  - lem-regular-conditional-kernels-factor-through-a-standard-borel-conditioning-variable
  - lem-simultaneous-ae-uniqueness-of-regular-conditional-distributions
  - thm-conditional-integration-through-a-regular-conditional-law
  - thm-measurability-of-integration-against-a-kernel
  - def-measure-kernel-and-probability-kernel
  - thm-independent-random-elements-have-product-joint-law
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - def-law-or-distribution-of-a-random-element
  - def-integrable-real-and-complex-functions-and-their-integrals
  - def-random-element-and-real-random-variable
  - thm-change-of-variables-for-expectation
  - def-identifiability-of-an-estimand
proof_strategy: direct
axiom_use: "Assume AC for the standard-Borel regular conditional laws and conditional-expectation classes used to define the observed kernels. The finite product law and Fubini calculation over the independent structural errors are choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Miguel A. Hernán and James M. Robins, Causal Inference: What If, Chapter 23 and Technical Point 23.1 (2020; author revision 19 August 2026)"
      url: "https://miguelhernan.org/s/hernanrobins_WhatIf_19aug26.pdf"
    - title: "Judea Pearl, Causal inference in statistics: An overview, §5.1 (Statistics Surveys 3, 2009)"
      url: "https://ftp.cs.ucla.edu/pub/stat_ser/r350.pdf"
---

## Statement

Assume AC. Let $A$ be the countable-discrete treatment random element in
[[def-simple-markovian-mediation-scm]], let $L$ and $M$ be standard-Borel
random elements [[def-standard-borel-space]] [[def-random-element-and-real-random-variable]], and let $Y$ be real-valued and integrable
[[def-integrable-real-and-complex-functions-and-their-integrals]]. Suppose the
full-data law is a simple Markovian mediation SCM from
[[def-simple-markovian-mediation-scm]], with consistency, treatment positivity,
mediator positivity, and the integrability conditions of
[[def-natural-effect-identification-assumptions]]. Fix treatment levels
$a,a'$. Let $Q_b(l,dm)$ be a conditional law [[def-conditional-law-given-a-random-element]] of $M$ given $(A,L)=(b,l)$, and
let $R((b,l,m),dy)$ be a conditional law [[def-conditional-law-given-a-random-element]] of $Y$ given $(A,L,M)=(b,l,m)$.
Define the zero-filled conditional mean
$$\mu_b(l,m)=\begin{cases}\int y\,R((b,l,m),dy),&\int |y|R((b,l,m),dy)<\infty,\\0,&\text{otherwise.}\end{cases}$$
Then the nested mean
$$\theta(a,a')=E[Y(a,M(a'))]$$
is the following functional of the observed-data law:
$$\theta(a,a')=\int_{\mathcal L}\int_{\mathcal M}\mu_a(l,m)\,Q_{a'}(l,dm)\,P_L(dl),$$
where $P_L$ is the target-population law [[def-law-or-distribution-of-a-random-element]] of $L$. The support-domination
hypothesis $Q_{a'}(l,\cdot)\ll Q_a(l,\cdot)$ makes the integral independent
of the chosen conditional-mean version. Consequently,
$$\operatorname{NDE}(a,a')=\theta(a,a')-\theta(a',a'),\qquad \operatorname{NIE}(a,a')=\theta(a,a)-\theta(a,a')$$
are identified [[def-identifiability-of-an-estimand]] in this model. The total mean contrast satisfies
$$\tau(a,a')=\operatorname{NDE}(a,a')+\operatorname{NIE}(a,a').$$
The formula is a population identification result; a regression coefficient
alone does not identify these effects.

## Facts & Assumptions

**Given:** AC; a simple Markovian mediation SCM; standard-Borel $L$ and $M$;
real integrable $Y$; consistency; treatment and mediator positivity; and
integrability of the nested outcomes used in the statement.

[A1] AC supplies the regular conditional distributions for standard-Borel
targets and the conditional-expectation classes used for their integrals.
[[def-axiom-of-choice]]

[F1] $M(a)$ and $Y(a,m)$ are the mediator and outcome responses under the
specified treatment and joint treatment/mediator interventions; the CDE,
NDE, NIE, and total contrast have the definitions in this item.
[[def-controlled-and-natural-mediation-effects]]

[F2] The model has equations $L=f_L(U_L)$, $A=f_A(L,U_A)$,
$M=f_M(A,L,U_M)$, and $Y=f_Y(A,M,L,U_Y)$ with mutually independent
exogenous random elements; its responses are $M(a)=f_M(a,L,U_M)$ and
$Y(a,m)=f_Y(a,m,L,U_Y)$.
[[def-simple-markovian-mediation-scm]]

[F3] In this model, $M(a')$ and $Y(a,m)$ are conditionally independent given
$\sigma(L)$; each response is also conditionally independent of treatment
given $\sigma(L)$.
[[lem-npsem-ie-implies-cross-world-independence-for-mediation]]

[F4] Finite products of standard-Borel spaces are standard Borel, and every
random element with standard-Borel target has a regular conditional
distribution under AC.
[[lem-finite-products-of-standard-borel-spaces-are-standard-borel]],
[[thm-existence-of-regular-conditional-distributions-for-standard-borel-targets]]

[F5] A conditional law is a probability kernel through the conditioning
random element; under AC the RCD can be factored through that element, and
standard-Borel RCD versions agree as measures outside one conditioning-law
null set.
[[def-conditional-law-given-a-random-element]],
[[lem-regular-conditional-kernels-factor-through-a-standard-borel-conditioning-variable]],
[[lem-simultaneous-ae-uniqueness-of-regular-conditional-distributions]]

[F6] The law of finitely many independent random elements is the product of
their marginal laws, and integrable functions may be integrated in either
order under a finite product law.
[[thm-independent-random-elements-have-product-joint-law]],
[[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]

[F7] Integrals against probability kernels are measurable; integration
through an RCD gives conditional-expectation versions for integrable
responses.
[[thm-measurability-of-integration-against-a-kernel]],
[[thm-conditional-integration-through-a-regular-conditional-law]]

[F8] $P_L$ is the pushforward law of $L$, and expectations of measurable
functions of $L$ are integrals against this law.
[[def-law-or-distribution-of-a-random-element]],
[[thm-change-of-variables-for-expectation]]

[F9] Identifiability means that the target is constant over full-data model
parameters that induce the same observed-data law.
[[def-identifiability-of-an-estimand]]

[F10] Treatment positivity and mediator support domination are imposed relative
to the target law of $L$ for the ordered treatment pair in the statement.
[[def-natural-effect-identification-assumptions]]

## Proof

**Proof technique:** construct the mediator and outcome kernels from their
independent structural errors, integrate the nested response, and use
positivity to replace those kernels by observed conditional laws.

**Given:** The hypotheses and conventions in the statement.

1.1 Write $\mathcal A$ for the nonempty countable treatment-value set in [F2]. Its discrete metric $d(a_1,a_2)=\mathbf1_{\{a_1\ne a_2\}}$ is complete, since every Cauchy sequence is eventually constant, and separable, since $\mathcal A$ itself is countable and dense. Every singleton is open, so its Borel sigma-algebra is the stipulated full power set. Thus the treatment-value space is Polish and hence standard Borel. By [F4], $\mathcal A\times\mathcal L$ and $\mathcal A\times\mathcal L\times\mathcal M$ are standard Borel, so the conditioning spaces of $(A,L)$ and $(A,L,M)$ satisfy the hypothesis of [F5]. By [A1] and [F4], these observed random elements admit regular conditional laws for $M$ and $Y$. By [F5], choose corresponding conditional-law kernels $Q$ and $R$ that factor through these conditioning elements. Define $Q_b^*(l,B)=P(f_M(b,l,U_M)\in B)$ and $R^*((b,l,m),C)=P(f_Y(b,m,l,U_Y)\in C)$ for Borel $B\subseteq\mathcal M$ and $C\subseteq\mathbb R$. Their evaluations are measurable by [F7], and each section is a probability measure by pushforward. [A1, F2, F4, F5, F7, construct]

1.2 For every bounded measurable $h(A,L)$ and Borel $B\subseteq\mathcal M$, the product law [F6] and the equations in [F2] give $E[h(A,L)\mathbf1_{\{M\in B\}}]=E[h(A,L)Q_A^*(L,B)]$, because $U_M$ is independent of $(U_L,U_A)$. For every bounded measurable $g(A,L,M)$ and Borel $C\subseteq\mathbb R$, the same calculation gives $E[g(A,L,M)\mathbf1_{\{Y\in C\}}]=E[g(A,L,M)R^*((A,L,M),C)]$, because $U_Y$ is independent of $(U_L,U_A,U_M)$. Thus $Q^*$ and $R^*$ are versions of the observed conditional laws; [F5] makes them equal as measures outside the corresponding conditioning-law null sets. Treatment positivity makes the law of $L$ given $A=b$ equivalent to $P_L$ for each level used. [F2, F5, F6, F10]

2.1 Put $\mu_a^*(l,m)=\int f_Y(a,m,l,u_Y)\,P_{U_Y}(du_Y)$ where the absolute integral is finite, and put it equal to zero on the exceptional set. By [F7] this is measurable and is the conditional-mean kernel associated with $R^*$. The nested response is $Y(a,M(a'))=f_Y(a,f_M(a',L,U_M),L,U_Y)$; integrating first in $U_Y$ and then in $U_M$ using [F6] yields $E[Y(a,M(a'))]=\int_{\mathcal L}\int_{\mathcal M}\mu_a^*(l,m)Q_{a'}^*(l,dm)P_L(dl)$. The integrability hypothesis justifies Fubini, and the change-of-variables identity [F8] gives the outer integral over $P_L$. The conditional independence of the nested mediator and outcome responses is also recorded in [F3]. [F2, F3, F6, F7, F8, step 1.1, step 1.2, algebra]

3.1 By step 1.2 and [F5], $Q_{a'}^*=Q_{a'}$ for $P_L$-almost every $l$, and the conditional means from $R^*$ and $R$ agree for $P_L(dl)Q_a(l,dm)$-almost every $(l,m)$. Since $Q_{a'}(l,\cdot)\ll Q_a(l,\cdot)$ for $P_L$-almost every $l$, they also agree under $P_L(dl)Q_{a'}(l,dm)$. Thus step 2.1 becomes the observed-kernel formula, independently of the chosen RCD versions. The positive propensity and mediator support domination in [F10] ensure both version transfers on the target integration law. [F5, F10, step 1.2, step 2.1, algebra]

4.1 The right-hand side of step 3.1 depends only on the observed law of $(A,L,M,Y)$, so by [F9] it identifies $\theta(a,a')$. Applying the formula to $(a,a')$, $(a',a')$, and $(a,a)$ identifies the two natural-effect contrasts in [F1]. Structural recursion gives $Y(a,M(a))=Y^a$ and $Y(a',M(a'))=Y^{a'}$; adding the contrasts cancels $\theta(a,a')$ and yields $\tau(a,a')$. No regression coefficient was used as a substitute for the target functional. [F1, F2, F9, step 3.1, algebra] ∎

## Remarks

If $M$ is countable discrete, the conditional-law formula reduces to
$\sum_m\int \mu_a(l,m)Q_{a'}(l,\{m\})P_L(dl)$. In either formulation the
support condition is essential for the observed conditional mean to be
defined where it is integrated. The independent-error and no-post-treatment-
confounder restrictions are substantive; the observed-data law does not
certify them.

