---
id: lem-riemann-stieltjes-integral-unique
kind: lemma
title: "The Riemann-Stieltjes integral is unique"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-riemann-stieltjes-sum-and-integral,
       def-partition-and-refinement, cor-archimedean-reciprocal,
       def-canonical-natural, lem-of-triangle-inequality, lem-of-abs-value]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "William F. Trench, Introduction to Real Analysis, Definition 3.1.5"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
pipeline_run: null
---

## Statement

For fixed $f,\alpha:[a,b]\to\mathbb R$, at most one real number satisfies the
mesh-limit condition defining $\int_a^b f\,d\alpha$.

## Facts & Assumptions

**Given:** Two reals $I,J$ satisfying the defining mesh condition for the same functions $f,\alpha$.

[L1] The mesh-limit condition quantifies over every sufficiently fine tagged partition ([[def-riemann-stieltjes-sum-and-integral]]).

[L2] Uniform partitions have mesh $(b-a)/N$ for every natural $N\ge1$ ([[def-partition-and-refinement]], [[def-canonical-natural]]).

[L3] Reciprocal naturals become arbitrarily small ([[cor-archimedean-reciprocal]]).

[L4] $|u+v|\le|u|+|v|$ and $|u|=0$ exactly when $u=0$ ([[lem-of-triangle-inequality]], [[lem-of-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 Given $\varepsilon>0$, choose positive thresholds $\delta_I,\delta_J$ for error $\varepsilon/2$ in the two mesh conditions. By [L3] choose a natural $N\ge1$ whose uniform partition has mesh smaller than both thresholds, and give it arbitrary tags. [L1, L2, L3, choose]

2.1 For its sum $S$, $|I-J|\le|I-S|+|S-J|<\varepsilon$. Since this holds for every $\varepsilon>0$, $|I-J|=0$ and $I=J$. The singleton interval has only the prescribed value $0$. [step 1.1, L1, L4] ∎

