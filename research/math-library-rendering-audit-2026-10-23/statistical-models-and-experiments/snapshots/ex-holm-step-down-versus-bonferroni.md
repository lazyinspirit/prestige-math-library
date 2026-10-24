---
id: ex-holm-step-down-versus-bonferroni
kind: example
title: Holm step-down versus one-step Bonferroni
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - alg-holm-step-down-procedure
  - thm-holm-stepdown-strong-fwer
proof_strategy: direct
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
---

## Example

For a fixed four-hypothesis family, take the observed, already ordered p-value vector $(1/250,3/200,3/100,1/5)$ and $\alpha=1/20$. Holm's rank cutoffs are $1/80$, $1/60$, $1/40$, and $1/20$. The first two comparisons pass and the third fails, so Holm rejects $H_{01}$ and $H_{02}$ and retains $H_{03}$ and $H_{04}$. The one-step Bonferroni comparison uses $\alpha/4=1/80$ for every hypothesis; it rejects only $H_{01}$.

## Facts & Assumptions

**Given:** A family $(H_{01},H_{02},H_{03},H_{04})$ fixed before observing the p-values, the ordered vector $p=(1/250,3/200,3/100,1/5)$, and $\alpha=1/20$. In this example, one-step Bonferroni means rejecting index $i$ exactly when $p_i\le\alpha/4$. Determine both rejection sets and state the limit of this numerical illustration.

[F1] [[alg-holm-step-down-procedure]]: Holm rejects an initial ordered prefix, comparing rank $j$ with $\alpha/(m-j+1)$ and stopping at the first failed comparison.

[F2] [[thm-holm-stepdown-strong-fwer]]: if every p-value is valid for its fixed null, then the Holm procedure has FWER at most $\alpha$ for every parameter, without an independence assumption.

## Verification

**Proof technique:** direct arithmetic.

1.1 At rank $1$, $1/250<1/80$. At rank $2$, $3/200\le1/60$ because $180\le200$. At rank $3$, $3/100>1/40$ because $120>100$. By [F1] the procedure stops at rank $3$ and rejects exactly indices $\{1,2\}$. [given, F1, algebra]

2.1 The one-step Bonferroni cutoff is $1/80$. The first p-value is below it; the second is above it because $3/200>1/80$ is equivalent to $240>200$, and the third and fourth are larger still. Thus Bonferroni rejects exactly $\{1\}$, so the two observed rejection sets differ. [given, step 1.1, algebra]

3.1 This computation determines decisions for one observed vector only. It does not establish that the p-value statistics are valid under their nulls or calculate an error probability; those distributional hypotheses are needed for the guarantee in [F2]. [F2, step 1.1, step 2.1] ∎