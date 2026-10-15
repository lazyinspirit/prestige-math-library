---
id: ex-cluster-resampling-unit
kind: example
title: "Resampling complete cluster records"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - def-resampling-sampling-unit-contract
  - alg-n-out-of-n-bootstrap-from-empirical-law
  - thm-bootstrap-draws-are-conditionally-iid-empirical-law
  - def-empirical-measure
justified_by: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Bradley Efron and Robert Tibshirani, The Bootstrap Method for Assessing Statistical Accuracy, Behaviormetrika 12 (1985), §3, printed pp. 7–12"
      url: "https://link.springer.com/content/pdf/10.2333/bhmk.12.17_1.pdf"
    - title: "B. Efron and R. Tibshirani, The Bootstrap Method for Assessing Statistical Accuracy, Stanford LCS Technical Report 19 / BIO 101 (October 1985; full-text report copy)"
      url: "https://stacks.stanford.edu/file/xv648rw7816/xv648rw7816_LCS-19.pdf"
    - title: "P.B. Stark, Statistics 240 Lecture Notes, Part 8: Resampling Methods, §1.1, PDF pp. 2–3"
      url: "https://www.stat.berkeley.edu/~stark/Teach/S240/Notes/ch8.pdf"
---

## Example

Suppose each of three clusters is recorded as a two-measurement vector, with records $C_1=(1,0)$, $C_2=(1,1)$, and $C_3=(0,0)$. The declared design treats the entire vector as the sampling unit, so a bootstrap draw selects one complete vector at a time.

## Facts & Assumptions

**Given:** Three observed cluster records and a design that declares each vector indivisible for the target analysis.

[F1] [[def-resampling-sampling-unit-contract]]: a resampling unit is a complete unit record or predeclared group selected together; unit compatibility does not assert validity.

[F2] [[alg-n-out-of-n-bootstrap-from-empirical-law]]: each bootstrap draw selects an observed unit record by an independently uniform index.

[F3] [[thm-bootstrap-draws-are-conditionally-iid-empirical-law]]: conditional on the fixed unit records, the selected records are IID from their empirical measure.

[F4] [[def-empirical-measure]]: each of the three indexed cluster records has empirical mass $1/3$.

## Verification

1.1 The declared records are $C_1,C_2,C_3$, each a complete ordered pair of measurements, so [F1] makes the vector rather than either coordinate the resampling unit. [given, F1]

1.2 For the index tuple $(2,2,1)$, [F2] returns $(C_2,C_2,C_1)=((1,1),(1,1),(1,0))$. By [F2], the three independent index draws each assign probability $1/3$ to their specified index, so this index tuple has conditional probability $3^{-3}=1/27$. The empirical record law assigns mass $1/3$ to each of these three distinct cluster records by [F4], and [F3] identifies the record draws as conditionally IID. [F2, F3, F4, algebra]

2.1 Every bootstrap tuple is formed by selecting records from $\{C_1,C_2,C_3\}$, so every selected two-measurement vector remains intact. This verifies the unit contract in this finite example; it makes no claim that resampling clusters is valid for every target or design. [F1, F2, step 1.2] ∎
