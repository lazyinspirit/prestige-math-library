---
id: ex-known-blank-normal-detection-and-quantification-limits
kind: example
title: "Known-blank normal limits at five-percent error and ten-percent CV"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-critical-detection-and-quantification-levels
  - lem-standard-normal-cdf-quantiles-and-symmetry
  - thm-known-normal-blank-detection-and-quantification-limits
  - def-axiom-of-choice
proof_strategy: direct
axiom_use: "AC is inherited through the normal-limit theorem and quantile lemma; the numerical substitutions use no additional choice."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "A Century of Excellence in Measurements, Standards, and Technology: A Chronicle of Selected NBS/NIST Publications 1901–2000, NIST SP 958, pp. 177–179 (printed pp. 164–166)"
      url: "https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication958.pdf"
    - title: "H. Cantwell (ed.), Eurachem Guide: The Fitness for Purpose of Analytical Methods, 3rd ed. (2025), Annex B"
      url: "https://www.eurachem.org/images/stories/Guides/pdf/MV_guide_3rd_ed_V1_EN.pdf"
---

## Example

Assume AC and $\sigma_0>0$. In the known-blank model
$X\sim N(c,\sigma_0^2)$, take
$\alpha=\beta=0.05$ and $k_Q=0.10$. Then
$$L_C=z_{0.95}\sigma_0,\qquad L_D=2z_{0.95}\sigma_0,\qquad L_Q=10\sigma_0.$$
The NIST SP 958 table reports the corresponding known-blank values rounded to
$1.64\sigma_0$, $3.29\sigma_0$, and $10\sigma_0$. These are conditional on
the equal-known-variance normal law and the stated error and CV targets.

## Facts & Assumptions

**Given:** AC; $\sigma_0>0$; the known-blank experiment and definitions in [[thm-known-normal-blank-detection-and-quantification-limits]] and [[def-critical-detection-and-quantification-levels]], with $\alpha=\beta=0.05$ and $k_Q=0.10$.

[A1] AC is assumed by the normal-limit theorem and the standard normal quantile lemma. [[def-axiom-of-choice]] [[thm-known-normal-blank-detection-and-quantification-limits]] [[lem-standard-normal-cdf-quantiles-and-symmetry]]

[F1] Under the known-blank equal-variance normal model, $L_C=z_{1-\alpha}\sigma_0$, $L_D=(z_{1-\alpha}+z_{1-\beta})\sigma_0$, and $L_Q=\sigma_0/k_Q$. [[thm-known-normal-blank-detection-and-quantification-limits]]

[F2] The standard normal $q$-quantile is the unique $z_q$ with $\Phi(z_q)=q$, and $z_{1-q}=-z_q$. [[lem-standard-normal-cdf-quantiles-and-symmetry]]

## Verification

**Given:** AC; $\sigma_0>0$; $\alpha=\beta=0.05=1/20$; $k_Q=0.10=1/10$; the known-blank model; and the suppliers [F1]–[F2].

1.1 Since $1-\alpha=1-\beta=0.95$, [A1] and [F1] give $L_C=z_{0.95}\sigma_0$ and $L_D=(z_{0.95}+z_{0.95})\sigma_0=2z_{0.95}\sigma_0$, with $z_{0.95}$ the unique quantile from [F2]. [A1, F1, F2, algebra]

2.1 By [F1], the stated CV criterion gives $L_Q=\sigma_0/k_Q=\sigma_0/(1/10)=10\sigma_0$. Together with step 1.1, this gives all three exact limits. [F1, step 1.1, algebra] ∎

## Source notes

The exact expressions follow from [F1]. The NIST table reports the known-blank row as $1.64$, $3.29$, and $10$ times the blank standard deviation for the same targets; those table entries are rounded values, not exact replacements for $z_{0.95}$.
