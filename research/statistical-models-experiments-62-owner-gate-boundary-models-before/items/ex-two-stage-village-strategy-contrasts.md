---
id: ex-two-stage-village-strategy-contrasts
kind: example
title: "A finite two-stage village strategy comparison"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 5
deps:
  - thm-two-stage-randomized-interference-estimators-unbiased
  - def-two-stage-randomized-interference-design-and-effects
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Michael G. Hudgens and M. Elizabeth Halloran, Toward Causal Inference With Interference, §§2.2–4.1"
      url: "https://www.treatment-effects.com/Hudgens-Halloran-2008.pdf"
---

## Example

There are four groups, each with three units. The first stage assigns exactly two groups to $\psi$ and two to $\phi$. In each group, strategy $\phi$ treats one unit uniformly and strategy $\psi$ treats two units uniformly. Let every unit's potential outcome be the total number treated in its own group:
$$Y_{ij}(\mathbf z_i)=\sum_{\ell=1}^3z_{i\ell}.$$
The model allows within-group interference because a unit's outcome changes with its peers' assignments.

## Verification

**Given:** The design and estimands in [[def-two-stage-randomized-interference-design-and-effects]], with $N=4$, $n_i=3$, $C=2$, $K_i^\phi=1$, and $K_i^\psi=2$.

[F1] [[def-two-stage-randomized-interference-design-and-effects]]: under strategy $s$, each group has exactly $K_i^s$ treated units; the target means average the observed potential outcomes over the within-group design and the fixed groups.

[F2] [[thm-two-stage-randomized-interference-estimators-unbiased]]: the four source strategy-contrast estimators use the within-group treatment-specific means, the across-group strategy means, and their stated differences.

1.1 In every assignment under strategy $s$, the outcome of every unit in that group equals the fixed treated count $K_i^s$, independently of which particular units are treated. Thus all conditional and unconditional group means under $s$ equal $K_i^s$. [given, F1, algebra]

2.1 Consequently $\bar Y(0;\phi)=\bar Y(1;\phi)=\bar Y(\phi)=1$ and $\bar Y(0;\psi)=\bar Y(1;\psi)=\bar Y(\psi)=2$. Substitution into the definitions gives $DE(\psi)=0$, $IE(\phi,\psi)=-1$, $TE(\phi,\psi)=-1$, and $OE(\phi,\psi)=-1$. [step 1.1, F1, algebra]

3.1 In each realized group, every observed outcome equals its strategy's fixed count. The within-group mean in either treatment arm and the full group mean therefore equal that same count. Averaging over the groups assigned each strategy yields hatted means $1$ under $\phi$ and $2$ under $\psi$, so all four observed contrasts equal the targets from step 2.1 for every assignment. [step 2.1, F1, F2, algebra] ∎