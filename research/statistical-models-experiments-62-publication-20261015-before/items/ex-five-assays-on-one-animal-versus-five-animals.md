---
id: ex-five-assays-on-one-animal-versus-five-animals
kind: example
title: Five assays on one animal versus one assay on five animals
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 5
deps:
  - def-biological-and-technical-replication-model
  - thm-mean-and-variance-under-biological-and-technical-replication
justified_by: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Gary W. Oehlert, A First Course in Design and Analysis of Experiments, Chapter 1 §1.5, printed pp. 8–10"
      url: "https://users.stat.umn.edu/~gary/book/fcdae.pdf"
    - title: "Susan Holmes and Wolfgang Huber, Modern Statistics for Modern Biology, Chapter 13 §§13.3.2 and 13.4.5"
      url: "https://www.huber.embl.de/msmb/13-chap.html"
verification:
  precheck: pass
---

## Example

Suppose animals are independently sampled from a target population and all
receive the same fixed treatment. Under
[[def-biological-and-technical-replication-model]], let the common mean be
$\mu+\tau$, the biological variance be $\sigma_b^2=4$, and the technical
measurement variance be $\sigma_e^2=1$. Compare two designs with five assays in
total: assay one animal five times, or assay five animals once each. In both
designs the reported estimator is the average of all five readings, and the
model target is the population mean $\mu+\tau$.

## Facts & Assumptions

**Given:** The balanced model with common fixed treatment contribution, five
total readings, $\sigma_b^2=4$, and $\sigma_e^2=1$.

[F1] [[def-biological-and-technical-replication-model]]: each reading contains a biological effect shared within its unit and an independent technical error; biological and technical variables have zero means and the stated variances.

[F2] [[thm-mean-and-variance-under-biological-and-technical-replication]]: with fixed treatment contributions, the all-reading mean has expectation $\mu+\bar\tau$ and variance $\sigma_b^2/n+\sigma_e^2/(nm)$.

## Verification

**Given:** The balanced model, common fixed treatment, five total readings,
$\sigma_b^2=4$, and $\sigma_e^2=1$.

1.1 With one animal and five assays, $n=1,m=5$ and $\bar\tau=\tau$. By [F2], the average has expectation $\mu+\tau$ and variance $4/1+1/(1\cdot5)=21/5$. [given, F2, algebra]

1.2 With five independently sampled animals and one assay per animal, $n=5,m=1$. By [F2], the average again has expectation $\mu+\tau$ and variance $4/5+1/(5\cdot1)=1$. [given, F2, algebra]

2.1 Both designs use five readings, but the first variance exceeds the second by $21/5-1=16/5>0$. The comparison isolates the biological component: averaging the same animal five times leaves its shared $B_1$ contribution unaveraged, while the five-animal design averages five independent biological effects. [given, F1, step 1.1, step 1.2, algebra]

3.1 If instead $\sigma_b^2=0$, both designs have variance $\sigma_e^2/5$; the strict advantage in step 2.1 comes from positive biological variation. [F2, step 2.1, algebra] ∎

## Remarks

The calculation is conditional on the stated model and equal assay count. It
does not show that technical replication is useless for measuring assay error,
or that this variance model is adequate for any particular study. The
randomization unit and population sampling unit must be identified from the
actual design.
