---
id: ex-random-forest-out-of-bag-diagnostic
kind: example
title: "An out-of-bag prediction can differ from the full finite forest"
status: draft
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 4
deps:
  - alg-bagged-random-forest
  - def-empirical-decision-tree
  - thm-independent-random-elements-have-product-joint-law
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Leo Breiman, "Random Forests," Machine Learning 45 (2001), 5–32; full text hosted by the University of Chicago Macro Finance Research Program'
      url: 'https://mfm.uchicago.edu/wp-content/uploads/2020/06/Breiman-Random-Forests.pdf'
    - title: 'Trevor Hastie, Robert Tibshirani, and Jerome Friedman, The Elements of Statistical Learning, 2nd ed., corrected 12th printing, §15.3.1'
      url: 'https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS'
pipeline_run: machine-learning-all-101-2026-10-19
---

## Example

Take the classification sample $D=((0,0),(1,1))$ with ordered labels $0<1$, grow depth-zero trees, and use $B=2$ bootstrap trees. A tree is out of bag for observation $1$ exactly when its bootstrap count for training index $1$ is zero. On the event that the first bootstrap count vector is $(2,0)$ and the second is $(0,2)$, the full forest receives one vote for each class and predicts $0$ by the least-index tie rule. The out-of-bag set for observation $1$ is then $\{2\}$, so its out-of-bag prediction is $1$. This event has probability $1/16$, and it exhibits a finite-forest out-of-bag prediction that differs from the full finite-forest prediction.

## Example references

[[alg-bagged-random-forest|Bootstrap counts, class ties, and out-of-bag predictions]]

[[def-empirical-decision-tree|Classification leaf predictions]]

[Breiman, “Random Forests,” §3.1 and Appendix II, printed pp. 11 and 31–32](https://mfm.uchicago.edu/wp-content/uploads/2020/06/Breiman-Random-Forests.pdf)

[Hastie, Tibshirani, and Friedman, *The Elements of Statistical Learning*, §15.3.1, printed pp. 592–593](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

## Facts & Assumptions

**Given:** Two independent size-$2$ bootstrap samples drawn uniformly with replacement from the two-observation training sample, with depth cap zero and the class tie rule in the Example.

[F1] [[alg-bagged-random-forest]]: The out-of-bag set for observation $i$ consists exactly of tree indices $b$ with $N_{bi}=0$, and no prediction is returned when this set is empty.

[F2] [[def-empirical-decision-tree]]: A classification leaf predicts the most frequent class, choosing the least class index in a tie.

[F3] [[thm-independent-random-elements-have-product-joint-law]]: The joint law of a finite independent family of random elements is the product of their marginal laws.

## Verification

1.1 Each tree draws two independent uniform indices from $\{1,2\}$. The probability of counts $(2,0)$ for tree $1$ is $1/4$, and the probability of counts $(0,2)$ for tree $2$ is $1/4$. Independence of the two trees gives probability $(1/4)(1/4)=1/16$ for the stated event. [given, F1, F3, algebra]

2.1 With depth cap zero, each tree is a single leaf. Its bootstrap sample contains only label $0$ for counts $(2,0)$ and only label $1$ for counts $(0,2)$, so [F2] gives predictions $0$ and $1$, respectively. [given, F2, step 1.1]

3.1 The full forest has one vote for each class, so its least-index tie rule returns $0$. For observation $1$, the first tree has $N_{11}=2$ and is excluded from the out-of-bag set, while the second has $N_{21}=0$ and is the only included tree; its prediction is $1$. The two predictions differ on the positive-probability event from step 1.1. [F1, step 1.1, step 2.1, algebra] ∎
