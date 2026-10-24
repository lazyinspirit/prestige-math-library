---
id: ex-estimated-blank-variance-inflates-detection-limits
kind: example
title: "An estimated blank increases the effective normal scale"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - thm-known-normal-blank-detection-and-quantification-limits
  - def-axiom-of-choice
proof_strategy: direct
axiom_use: "AC is inherited from the known-normal limit theorem; the effective-scale substitution uses no additional choice."
provenance:
  statement: ai-generated
  proof: ai-generated
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
    - title: "H. Cantwell (ed.), Eurachem Guide: The Fitness for Purpose of Analytical Methods, 3rd ed. (2025), §5.3.2, Example 4, and §5.3.5"
      url: "https://www.eurachem.org/images/stories/Guides/pdf/MV_guide_3rd_ed_V1_EN.pdf"
---

## Example

Assume AC, $\sigma_0>0$, and $\tau>0$. Suppose the blank-corrected response
is explicitly modeled by
$D_c\sim N(c,\sigma_0^2+\tau^2)$ for every $c\ge0$, where $\tau^2>0$ is the
declared additional variance contribution from estimating the blank. Put
$\sigma_{\mathrm{eff}}=\sqrt{\sigma_0^2+\tau^2}$. The exact normal formulas
use $\sigma_{\mathrm{eff}}$ in place of $\sigma_0$:
$$L_C=z_{1-\alpha}\sigma_{\mathrm{eff}},\qquad L_D=(z_{1-\alpha}+z_{1-\beta})\sigma_{\mathrm{eff}},\qquad L_Q=\frac{\sigma_{\mathrm{eff}}}{k_Q}.$$
This is a stated comparison model, not a claim that every blank-estimation
procedure produces an independent normal error with this variance. The
blank-correction uncertainty must be included in the response law used to
calculate the limits.

## Facts & Assumptions

**Given:** AC; $\sigma_0>0$, $\tau>0$, $0<\alpha,\beta<1/2$, $k_Q>0$, and the
corrected-response law in the Example.

[A1] AC is assumed by the known-normal limit theorem used below.
[[def-axiom-of-choice]] [[thm-known-normal-blank-detection-and-quantification-limits]]

[F1] For a known-blank equal-variance normal family with scale $\sigma>0$,
the three limits are $z_{1-\alpha}\sigma$,
$(z_{1-\alpha}+z_{1-\beta})\sigma$, and $\sigma/k_Q$.
[[thm-known-normal-blank-detection-and-quantification-limits]]

## Verification

**Given:** AC; $\sigma_0>0$, $\tau>0$, $0<\alpha,\beta<1/2$, $k_Q>0$; and
the corrected-response model in the Example.

1.1 Set $\sigma_{\mathrm{eff}}=\sqrt{\sigma_0^2+\tau^2}$. Since $\sigma_0>0$ and $\tau>0$, $\sigma_{\mathrm{eff}}>\sigma_0>0$. Thus the corrected-response family has exactly the form required by [F1], with $\sigma=\sigma_{\mathrm{eff}}$. [given, A1, F1, algebra]

2.1 Substitution into [F1] yields the three displayed limits. Since $0<\alpha,\beta<1/2$, both $z_{1-\alpha}$ and $z_{1-\beta}$ are positive; since $k_Q>0$, each multiplier of $\sigma_{\mathrm{eff}}$ is positive. Together with $\sigma_{\mathrm{eff}}>\sigma_0$, each corresponding limit is strictly larger than its known-blank value. [A1, F1, step 1.1, algebra] ∎

## Source notes

Eurachem §5.3.2 and Example 4 show that routine averaging and blank
correction change the standard deviation used for LOD/LOQ; §5.3.5 notes that
day-to-day blank variation can require intermediate-precision data. The
example's exact normal law is an explicit assumption, and the limit formulas
are proved locally from [F1].
