---
id: def-aqft-cls-exclusion-ratio
kind: definition
title: CLs ratio for source-specified signal exclusions
status: "published"
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-aqft-calibrated-pvalue
dependency_roles:
  def-aqft-calibrated-pvalue: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
proof_strategy: not-applicable
physical_scope: Pure statistical-mathematical definition of a source-specified exclusion statistic; it makes no physical or empirical claim.
axiom_base: ZF
sources:
  references:
    - title: "A. L. Read, “Presentation of search results: the CLs technique,” Journal of Physics G 28 (2002), 2693–2704"
      url: https://indico.cern.ch/event/398949/attachments/799330/1095613/The_CLs_Technique.pdf
      locator: Section 2, especially §§2.1–2.2, the definitions and interpretation limits of CLb, CLs+b, and CLs.
verification:
  precheck: pending
---

## Definition

Let $(S,\mathcal S)$ be a data space with two supplied probability laws $\mathbb P_b$ and $\mathbb P_{s+b}$ for the background-only and signal-plus-background hypotheses. Fix a statistic $T:S\to\mathbb R$ for which larger values are more incompatible with the signal-plus-background hypothesis and for which every upper-tail set is measurable. For observed datum $x\in S$, set $R_x:=\{y\in S:T(y)\ge T(x)\}$ and define
$$\mathrm{CL}_b(x):=\mathbb P_b(R_x),\qquad \mathrm{CL}_{s+b}(x):=\mathbb P_{s+b}(R_x).$$
When $\mathrm{CL}_b(x)>0$, the modified-frequentist exclusion ratio is
$$\mathrm{CL}_s(x):=\frac{\mathrm{CL}_{s+b}(x)}{\mathrm{CL}_b(x)}.$$
A reported exclusion rule at threshold $\alpha\in(0,1)$ excludes a specified signal-plus-background hypothesis when its supplied analysis has $\mathrm{CL}_s(x)<\alpha$. The likelihood ratio, test statistic, nuisance treatment, and sampling laws are part of the specified analysis. The ratio is not itself a probability or a frequentist coverage level; in the cited method it is a conservative, frequentist-motivated approximation used to present exclusion results. It does not give the probability that a signal model is true or false.

## Definition references

[[def-aqft-calibrated-pvalue|Calibrated null-tail probabilities]]

[Read, full paper, §2 and §§2.1–2.2](https://indico.cern.ch/event/398949/attachments/799330/1095613/The_CLs_Technique.pdf)
