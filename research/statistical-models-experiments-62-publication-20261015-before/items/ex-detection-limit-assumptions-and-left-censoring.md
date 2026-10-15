---
id: ex-detection-limit-assumptions-and-left-censoring
kind: example
title: "Detection-limit assumptions and left-censored readings"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - def-critical-detection-and-quantification-levels
  - lem-standard-normal-cdf-quantiles-and-symmetry
  - lem-normal-location-scale-mean-and-variance
  - def-standard-normal-and-normal-laws
  - def-cumulative-distribution-function-of-a-random-variable
  - lem-probability-measure-basic-identities
  - def-axiom-of-choice
proof_strategy: direct
axiom_use: "AC is inherited through the standard normal law; the heteroscedastic algebra and censoring calculation use no additional choice."
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "H. Cantwell (ed.), Eurachem Guide: The Fitness for Purpose of Analytical Methods, 3rd ed. (2025), §§5.3.1–5.3.5 and Annex B"
      url: "https://www.eurachem.org/images/stories/Guides/pdf/MV_guide_3rd_ed_V1_EN.pdf"
---

## Example

Consider the heteroscedastic response law
$Y_c\sim N(c,\sigma_0^2(1+\rho c)^2)$ for $c\ge0$, with
$\sigma_0>0$ and $\rho\ge0$. The blank variance is $\sigma_0^2$, but the
standard deviation increases with concentration when $\rho>0$. For
$0<\alpha,\beta<1/2$, write $a=z_{1-\beta}$. The critical level is
$L_C=z_{1-\alpha}\sigma_0$. A finite detection limit for false-negative
target $\beta$ exists exactly when $a\rho\sigma_0<1$, and then
$$L_D=\frac{L_C+a\sigma_0}{1-a\rho\sigma_0}.$$
For $k_Q>0$, the coefficient-of-variation criterion has a finite
quantification limit exactly when $k_Q>\rho\sigma_0$, and then
$$L_Q=\frac{\sigma_0}{k_Q-\rho\sigma_0}.$$
When a reporting procedure records only the category $Y\le L_C$, its
likelihood contribution at concentration $c$ is the probability
$$P_c(Y\le L_C)=\Phi\!\left(\frac{L_C-c}{\sigma_0(1+\rho c)}\right),$$
not a density value at $L_C$.

## Facts & Assumptions

**Given:** AC; the heteroscedastic family and parameter restrictions in the Example; and the positive-decision rule is $Y>L_C$.

[A1] AC is required by the standard normal probability-law construction. [[def-axiom-of-choice]] [[def-standard-normal-and-normal-laws]]

[F1] The standard normal CDF is strictly increasing, has no atoms, and its quantiles obey $z_q=-z_{1-q}$ for every $q\in(0,1)$. [[lem-standard-normal-cdf-quantiles-and-symmetry]]

[F2] A normal response with mean $m$ and scale $\sigma$ has expectation $m$ and variance $\sigma^2$. [[lem-normal-location-scale-mean-and-variance]]

[F3] $N(c,\sigma^2)$ is the law of $c+\sigma Z$ for standard normal $Z$. [[def-standard-normal-and-normal-laws]]

[F4] A real random variable's CDF is $F(x)=P(Y\le x)$. [[def-cumulative-distribution-function-of-a-random-variable]]

[F5] The exact critical level and the false-negative target are defined relative to the specified blank and signal laws. [[def-critical-detection-and-quantification-levels]]

[F6] For a probability measure, $P(A^c)=1-P(A)$. [[lem-probability-measure-basic-identities]]

## Verification

**Given:** The response model, positive-decision rule, and targets in the Example.

1.1 At $c=0$, the model is $N(0,\sigma_0^2)$, so [F3] represents $Y_0=\sigma_0Z$ in law. Set $L_C=z_{1-\alpha}\sigma_0$; by [F1], [F3], and complement identity [F6], $P_0(Y_0>L_C)=1-\Phi(z_{1-\alpha})=\alpha$. Also [F1] gives $z_{1/2}=-z_{1/2}$, hence $z_{1/2}=0$ and $\Phi(0)=1/2$. Since $1-\alpha>1/2$, strict increase gives $z_{1-\alpha}>0$, and [F5] makes this an exact critical level. [A1, F1, F3, F5, F6, given, algebra]

1.2 By [F2], $\operatorname{CV}(c)=\sigma(c)/c =\sigma_0/c+\rho\sigma_0$ for $c>0$. If $k_Q>\rho\sigma_0$, the inequality $\operatorname{CV}(c)\le k_Q$ is equivalent to $c\ge\sigma_0/(k_Q-\rho\sigma_0)$, giving the displayed least value. If $k_Q\le\rho\sigma_0$, then $\operatorname{CV}(c)>\rho\sigma_0\ge k_Q$ for every finite $c>0$, so no finite quantification limit exists. [F2, given, algebra]

2.1 For $c>0$, the scale is $\sigma(c)=\sigma_0(1+\rho c)>0$. By [F3], $P_c(Y\le L_C)=\Phi((L_C-c)/\sigma(c))$. Since $a=z_{1-\beta}>0$, strict increase in [F1] makes this equal to $\beta$ exactly when $c-L_C=a\sigma_0(1+\rho c),\qquad a=z_{1-\beta}>0.$ Rearranging gives $c(1-a\rho\sigma_0)=L_C+a\sigma_0$, whose right-hand side is positive. If $a\rho\sigma_0<1$, the unique solution is the positive displayed $L_D$. If $a\rho\sigma_0=1$, the equation would equate zero to a positive number; if $a\rho\sigma_0>1$, its only algebraic solution is negative. Thus a nonnegative detection limit exists exactly under the stated condition. [A1, F1, F3, F5, given, step 1.1, algebra]

3.1 If the recorded observation is the category $Y\le L_C$, its probability under the stated law is the CDF at $L_C$, namely the displayed $\Phi((L_C-c)/\sigma(c))$ by [F4]. The affine normal law has no atom at $L_C$ by [F1] and [F3], while the CDF gives the probability of the reported half-line. Substituting $L_C$ as an observed point is therefore not the likelihood of this censored report. [A1, F1, F3, F4, step 2.1, algebra] ∎

## Source notes

Eurachem §5.3.2 explains that blank correction changes the standard deviation used for LOD/LOQ; §5.3.5 discusses changing blanks across days. The heteroscedastic law and censoring rule here are explicit model assumptions. Their consequences are derived above rather than imported as universal measurement claims.
