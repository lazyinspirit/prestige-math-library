---
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
id: ex-l1-distance-convention-factor-of-two
kind: example
title: "The factor of two between density L1 and library total variation"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-hellinger-distance-for-dominated-laws
  - thm-hellinger-tv-comparison-under-library-convention
  - def-total-variation-distance-for-probability-laws
  - def-axiom-of-choice
proof_strategy: direct
axiom_use: "The general Hellinger definition imports AC for density selection, but the two point-mass densities in this example are supplied explicitly and require no choice."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Under the library AC convention for density representatives, on $\{0,1\}$ with counting measure let $P=\delta_0$ and $Q=\delta_1$. Their density $L^1$ distance is $2$, while their library event-supremum total variation is $1$ and their root-L2 Hellinger distance is $\sqrt2$. Thus the factor in $h^2\le2\,\mathrm{TV}$ is sharp.

## Facts & Assumptions

**Given:** The two point-mass laws on the two-point measurable space and counting measure.

[A1] AC is inherited from the likelihood-density convention used by the Hellinger definition; the two densities here are explicitly supplied. [[def-axiom-of-choice]]

[F1] For densities $p,q$ against a common measure, $h(P,Q)^2=\int(\sqrt p-\sqrt q)^2\,d\mu$. [[def-hellinger-distance-for-dominated-laws]]

[F2] Library total variation is $\sup_A|P(A)-Q(A)|$. [[def-total-variation-distance-for-probability-laws]]

[F3] For this convention, $\mathrm{TV}(P,Q)\le h(P,Q)$ and $h(P,Q)^2\le2\,\mathrm{TV}(P,Q)$. [[thm-hellinger-tv-comparison-under-library-convention]]

## Verification

**Given:** The two probability laws and their counting-measure densities.

1.1 The densities are $p(0)=1,p(1)=0$ and $q(0)=0,q(1)=1$, so $\sum_{x\in\{0,1\}}|p(x)-q(x)|=2$. The four measurable events have probability differences $0,1,-1,0$, hence the supremum in [F2] is $1$. [F2, given, algebra]

2.1 By [F1], $h(P,Q)^2=(\sqrt1-\sqrt0)^2+(\sqrt0-\sqrt1)^2=2$, so $h(P,Q)=\sqrt2$. Therefore $h(P,Q)^2=2\,\mathrm{TV}(P,Q)$, attaining equality in the upper comparison in [F3]; the lower comparison reads $1\le\sqrt2$. [A1, F1, F3, step 1.1, algebra] ∎
