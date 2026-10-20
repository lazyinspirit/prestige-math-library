---
id: ex-multiclass-calibration-notions-differ
kind: example
title: "Three distinct calibration notions in three classes"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-probability-calibration
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification: {}
sources:
  references:
    - title: "Vaicenavicius et al., Evaluating Model Calibration in Classification, PMLR 89 (2019), Sections 2–3"
      url: "https://proceedings.mlr.press/v89/vaicenavicius19a/vaicenavicius19a.pdf"
---

## Example

For each of three models let $X$ and $Y$ have their full power-set sigma-algebras, let $X$ be uniform on $\{1,2,3\}$, set $G(X=i)=g_i$, and specify the conditional law of $Y$ at $X=i$ by the row $p_i=P(Y=\cdot\mid X=i)$. In Model A take
$$\begin{array}{c|c|c} i & g_i & p_i\\\hline 1 &(0.4,0.3,0.3)&(0.4,0.4,0.2)\\ 2 &(0.3,0.4,0.3)&(0.2,0.4,0.4)\\ 3 &(0.3,0.3,0.4)&(0.4,0.2,0.4) \end{array}$$
In Model B take
$$\begin{array}{c|c|c} i & g_i & p_i\\\hline 1 &(0.5,0.3,0.2)&(0.7,0.2,0.1)\\ 2 &(0.2,0.5,0.3)&(0.1,0.5,0.4)\\ 3 &(0.3,0.2,0.5)&(0.4,0.3,0.3) \end{array}$$
In Model C take
$$\begin{array}{c|c|c} i & g_i & p_i\\\hline 1 &(0.5,0.5,0)&(0.8,0.2,0)\\ 2 &(0.5,0,0.5)&(0.2,0,0.8)\\ 3 &(0,0.5,0.5)&(0,0.8,0.2) \end{array}$$
Use the smallest-index rule to break top-class ties. Model A is classwise and top-confidence calibrated but not fully reliable; Model B is top-confidence calibrated but neither classwise calibrated nor fully reliable; Model C is classwise calibrated but neither top-confidence calibrated nor fully reliable. Hence the three calibration notions are pairwise distinct.

## Example references

[[def-probability-calibration]]: defines full reliability, classwise calibration, top-confidence calibration, and smallest-index tie breaking.

[Vaicenavicius et al., full paper PDF](https://proceedings.mlr.press/v89/vaicenavicius19a/vaicenavicius19a.pdf): Sections 2–3 discuss these distinct finite-label calibration conditions.

## Facts & Assumptions

**Given:** The three finite models and forecasts displayed in the example.

[F1] Full reliability requires the conditional label vector to equal the forecast at each atom when forecast values distinguish the atoms; classwise calibration groups atoms by each coordinate of the forecast; top-confidence calibration groups by maximum forecast coordinate and evaluates the tie-broken predicted label. [[def-probability-calibration]]

## Verification

1.1 Each forecast row and each conditional-label row in Models A, B, and C has nonnegative coordinates summing to one, so all entries define simplex forecasts and conditional label distributions. In each model the three forecast vectors are distinct. Therefore full reliability would require $p_i=g_i$ at every row by [F1], but Model A row 1, Model B row 1, and Model C row 1 each have $p_i\ne g_i$. Full reliability fails in all three models. [given, F1, algebra]

1.2 In Model A, for each label the groups with forecast coordinate $0.4$ have conditional frequency $0.4$, and the groups with coordinate $0.3$ have average conditional frequency $0.3$: for labels 1, 2, and 3 the latter averages are respectively $(0.2+0.4)/2$, $(0.4+0.2)/2$, and $(0.2+0.4)/2$. Thus Model A is classwise calibrated. Its top confidence is always $0.4$, its predicted labels are $1,2,3$ in the three rows, and each corresponding conditional correctness probability is $0.4$, so it is top-confidence calibrated. [given, F1, algebra]

1.3 In Model B the top confidence is always $0.5$, the predicted labels are $1,2,3$, and the average conditional correctness is $(0.7+0.5+0.3)/3=0.5$, so top-confidence calibration holds. Classwise calibration fails because forecast coordinate $G_1=0.5$ occurs only in row 1, where $P(Y=1\mid X=1)=0.7\ne0.5$. [given, F1, algebra]

2.1 In Model C, for each label the forecast coordinate $0.5$ group has average conditional frequency $0.5$, and the coordinate $0$ group has frequency $0$: the three nonzero-group averages are $(0.8+0.2)/2$, $(0.2+0.8)/2$, and $(0.8+0.2)/2$. Thus classwise calibration holds. All top confidences equal $0.5$; the tie-broken predicted labels are $1,1,2$, with conditional correctness probabilities $0.8,0.2,0.8$. Their average is $0.6\ne0.5$, so top-confidence calibration fails. Steps 1.1, 1.2, and 1.3 establish the other model claims; the Model C calculation completes the pairwise distinctions. [given, F1, step 1.1, step 1.2, step 1.3, algebra] ∎

