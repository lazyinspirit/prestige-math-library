---
id: ex-random-row-split-leaks-group-information
kind: example
title: "Random row splits leak repeated-group information"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - alg-holdout-loo-lpo-v-fold-and-repeated-cv
  - def-identically-distributed-and-iid-random-variables
  - def-bernoulli-and-binomial-random-variables
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Sylvain Arlot and Alain Celisse, A survey of cross-validation procedures for model selection, §8.3"
      url: "https://arxiv.org/pdf/0907.4728"
    - title: "Gareth James, Daniela Witten, Trevor Hastie, and Robert Tibshirani, An Introduction to Statistical Learning, 7th printing, Chapter 5 §5.1"
      url: "https://www.statlearning.com/s/ISLR-Seventh-Printing.pdf"
---

## Example

There are $G\ge2$ groups, each with two repeated rows $(g,Y_g)$, where $Y_1,\ldots,Y_G$ are IID Bernoulli$(1/2)$. Choose uniformly a balanced two-fold partition of the $2G$ rows, independently of the labels. The learner memorizes the majority label for any group ID present in training (ties are resolved as zero) and predicts zero for a previously unseen ID. Use zero-one loss. This grouped design is not an IID row sample: the two rows in a group share a label and fixed group IDs.

## Facts & Assumptions

**Given:** The repeated-group data, balanced random row partition, memorizing rule, and zero-one loss above. Compare the expected row-split score with prediction risk for a new group.

[F1] [[alg-holdout-loo-lpo-v-fold-and-repeated-cv]]: a K-fold schedule trains on each fold's complement and weights held-out rows equally when folds have equal size.

[F2] [[def-identically-distributed-and-iid-random-variables]]: IID requires mutual independence; repeated rows sharing $Y_g$ violate this row-level condition.

[F3] [[def-bernoulli-and-binomial-random-variables]]: For $p\in[0,1]$, a **Bernoulli$(p)$ random variable** takes the value $1$ with probability $p$ and $0$ with probability $1-p$.

## Verification

1.1 For a fixed group $g$, if its two rows fall in different folds, then each validation row's group ID appears in training and its memorized prediction is $Y_g$, so both losses are zero. If both rows fall in one fold, neither is in the training set for that fold; both losses are $Y_g$. Therefore the full row-split score is $\widehat R_{row}=G^{-1}\sum_{g=1}^G Y_g\mathbf 1\{\text{the two rows of }g\text{ share a fold}\}$. [given, F1]

1.2 In a uniformly chosen balanced partition, the probability both rows of a fixed group lie in fold 1 is $\binom{2G-2}{G-2}/\binom{2G}{G}=(G-1)/(2(2G-1))$; the same probability holds for fold 2. Thus the probability they share a fold is $(G-1)/(2G-1)$. [given, algebra]

2.1 The split is independent of $Y_g$, and [F3] gives $\mathbb E Y_g=1/2$, so step 1.1 and the probability in step 1.2 give $\mathbb E\widehat R_{row}=(G-1)/(2(2G-1))<1/2$. For a new group ID no training row has that ID, so the learner predicts zero and its error probability is $\mathbb P(Y_{new}=1)=1/2$. Row-split CV is therefore estimating an easier within-group prediction target than new-group prediction. [F2, F3, step 1.1, step 1.2, algebra]

3.1 The example violates the independent-row premise in [F2], so it is a warning about choosing the resampling unit to match deployment; it is not a counterexample to the IID risk identity. [F2, F3, step 2.1] ∎
