---
id: thm-local-parameter-perturbation-bound
kind: theorem
title: "A lower singular-value bound and Lipschitz Jacobian control local parameter error"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-nonlinear-experimental-design-and-local-identifiability
  - cor-vector-valued-ftc-and-lipschitz-bound
  - def-inner-product-norm
  - def-lipschitz-holder-contraction
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - thm-chain-rule-for-total-derivatives
  - thm-cauchy-schwarz-and-the-euclidean-norm
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Leah R. McLean et al., Estimability Analysis and Optimal Design in Dynamic Multi-scale Models of Cardiac Electrophysiology, §§2.1–2.2"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4906545/"
      locator: "The complete article was retrieved and read; §§2.1–2.2 derive the linearized sensitivity model and explain its conditioning role."
    - title: "Henrik Madsen, Optimal Experimental Design for Grey-box Models, §1.2.3"
      url: "https://henrikmadsen.org/wp-content/uploads/2014/10/Ph.D._thesis_-_2008_-_Optimal_experimental_design_for_grey-box_models.pdf"
      locator: "Complete thesis retrieved and the nonlinear identifiability and sensitivity-analysis discussion in §1.2.3 inspected."
---

## Statement

Let $F:\Theta\to\mathbb R^m$ be $C^1$ on an open $\Theta\subseteq\mathbb R^p$, let $\theta_0\in\Theta$, and let $r_0>0$ be such that the closed Euclidean ball $\overline B(\theta_0,r_0)$ lies in $\Theta$. Suppose $\|DF(\theta_0)v\|_2\ge\mu\|v\|_2$ for every $v\in\mathbb R^p$, where $\mu>0$, and suppose $DF$ is $L$-Lipschitz in operator norm on this ball, where $L\ge0$. Define $r=r_0$ if $L=0$ and $r=\min\{r_0,\mu/(2L)\}$ if $L>0$. If $y=F(\theta_0)+e$ with $\|e\|_2\le\delta$, and $\widehat\theta\in\overline B(\theta_0,r)$ satisfies $\|F(\widehat\theta)-y\|_2\le\varepsilon$, then
$$\|\widehat\theta-\theta_0\|_2\le\frac{2(\varepsilon+\delta)}{\mu}.$$
The bound is conditional on the stated local ball and on the existence of such a fit; it does not assert that a fit exists.

## Facts & Assumptions

**Given:** $F,\Theta,\theta_0,r_0,\mu,L,y,e,\widehat\theta,\varepsilon,\delta$ with the hypotheses in the Statement.

[F1] [[def-nonlinear-experimental-design-and-local-identifiability]]: the Jacobian is the total derivative of the observation map; a lower singular-value bound $\mu$ means $\|DF(\theta_0)v\|_2\ge\mu\|v\|_2$ for every $v$.

[F2] [[thm-chain-rule-for-total-derivatives]]: for a differentiable path $\gamma$, $D(F\circ\gamma)(t)=DF(\gamma(t))D\gamma(t)$.

[F3] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: $\|Av\|_2\le\|A\|_2\|v\|_2$ for a linear map $A$ and vector $v$.

[F4] [[def-lipschitz-holder-contraction]]: $L$-Lipschitz means $\|DF(u)-DF(v)\|_2\le L\|u-v\|_2$ on the stated ball.

[F5] [[cor-vector-valued-ftc-and-lipschitz-bound]]: a differentiable vector-valued path whose derivative norm is at most $C$ on $[0,1]$ is $C$-Lipschitz there.

[F6] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: the Euclidean norm satisfies the triangle and reverse-triangle inequalities.

## Proof

**Proof technique:** direct.

1.1 Put $h=\widehat\theta-\theta_0$ and define $R(t)=F(\theta_0+th)-F(\theta_0)-tDF(\theta_0)h$ for $0\le t\le1$. The segment stays in the convex ball. By [F2], $R'(t)=(DF(\theta_0+th)-DF(\theta_0))h$. [given, F1, F2, construct]

2.1 By [F4] and [F3], $\|R'(t)\|_2\le Lt\|h\|_2^2\le L\|h\|_2^2$ for $0<t<1$. Since $R$ is continuous on $[0,1]$ and differentiable on $(0,1)$, [F5] gives $\|R(1)-R(0)\|_2\le L\|h\|_2^2$. As $R(0)=0$, this is the first-order remainder bound $\|F(\theta_0+h)-F(\theta_0)-DF(\theta_0)h\|_2\le L\|h\|_2^2$. [step 1.1, F3, F4, F5, algebra]

3.1 If $L>0$, then $\|h\|_2\le r\le\mu/(2L)$, so [F1], step 2.1, and the reverse-triangle inequality [F6] yield $\|F(\widehat\theta)-F(\theta_0)\|_2\ge\mu\|h\|_2-L\|h\|_2^2\ge(\mu/2)\|h\|_2$. If $L=0$, step 2.1 gives zero remainder, and the same lower bound follows from [F1]. [given, F1, step 2.1, F6, algebra]

4.1 The fit condition and $y=F(\theta_0)+e$ give $\|F(\widehat\theta)-F(\theta_0)\|_2\le\|F(\widehat\theta)-y\|_2+\|e\|_2\le\varepsilon+\delta$. Combining with step 3.1 gives $(\mu/2)\|h\|_2\le\varepsilon+\delta$, and division by $\mu/2>0$ proves the asserted bound. [given, step 3.1, F6, algebra] ∎
