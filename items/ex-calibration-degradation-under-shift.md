---
id: ex-calibration-degradation-under-shift
kind: example
title: "Calibration examples under validation and distribution shift"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-top-label-calibration
  - def-binned-expected-calibration-error
  - alg-validation-temperature-scaling
  - thm-positive-temperature-scaling-preserves-argmax
  - alg-split-conformal-set-for-classification
  - thm-split-conformal-marginal-coverage
  - def-regular-conditional-distribution
  - def-exchangeable-random-elements
  - def-source-target-distributions-and-shift
  - thm-log-and-brier-strict-propriety
  - def-natural-logarithm
  - def-real-exponential-function-and-e
  - thm-exponential-addition-formula
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
    - title: "Chuan Guo, Geoff Pleiss, Yu Sun, and Kilian Q. Weinberger, On Calibration of Modern Neural Networks, ICML 2017"
      url: "https://proceedings.mlr.press/v70/guo17a/guo17a.pdf"
    - title: "Yaniv Ovadia et al., Can You Trust Your Model's Uncertainty? Evaluating Predictive Uncertainty Under Dataset Shift, NeurIPS 2019"
      url: "https://proceedings.neurips.cc/paper/9547-can-you-trust-your-models-uncertainty-evaluating-predictive-uncertainty-under-dataset-shift.pdf"
    - title: "Jing Lei et al., Distribution-Free Predictive Inference for Regression, JASA 113(523) (2018)"
      url: "https://arxiv.org/pdf/1604.04173"
    - title: "Ryan Tibshirani, Conformal Prediction, Advanced Topics in Statistical Learning, Spring 2024"
      url: "https://www.stat.berkeley.edu/~ryantibs/statlearn-s24/lectures/conformal.pdf"
---

## Example

Four finite cases separate probability calibration, accuracy, empirical
calibration summaries, conformal coverage, and performance under a changed
test law.

First, on a one-point probability space let $Y=1$ and let the forecast be
$G=(9/10,1/10)$. Its top prediction is always correct, but its top confidence
is $9/10$. On any nonempty sample from this law, the one-bin ECE and MCE are
both $1/10$.

Second, take four validation labels $1,1,1,2$ and give every example logits
$(2\log 3,0)$. Fit temperature scaling on the finite candidate set
$\{1,2\}$. At temperature $1$ the forecast is $(9/10,1/10)$; at temperature
$2$ it is $(3/4,1/4)$. The validation NLL rule chooses temperature $2$. Both
temperatures predict class $1$, while their one-bin ECE values are respectively
$3/20$ and $0$.

Third, let the feature be rare with probability $1/10$ and common with
probability $9/10$, let the true label always be $1$, and use labels
$\{1,2\}$. Take one calibration pair and the test pair as independent draws
from this same law, with trivial training information and fixed score
$s(x,y)=\mathbf 1_{\{x\text{ is rare}\}}$. At miscoverage level
$\alpha=1/2$, the split conformal set has marginal coverage $91/100$ but
coverage $1/10$ conditional on the test feature being rare.

Fourth, let a source law put probability one on feature clean with label $1$,
and let a distinct target law put probability one on feature corrupted with
label $1$. Use the fixed score values
$s(\mathrm{clean},1)=0$, $s(\mathrm{clean},2)=1$,
$s(\mathrm{corrupted},1)=1$, and $s(\mathrm{corrupted},2)=2$. With one
calibration example from the source law and $\alpha=1/2$, the split conformal
threshold is $0$, so the prediction set at a target feature is empty and target
coverage is $0$.

## Example references

[[def-top-label-calibration]]: gives the event-integral condition used to check the first finite model.

[[def-binned-expected-calibration-error]]: gives the one-bin ECE and MCE calculations.

[[alg-validation-temperature-scaling]]: defines the finite-candidate validation NLL selection in the second model.

[[thm-positive-temperature-scaling-preserves-argmax]]: proves that both temperatures keep the same maximizing class.

[[alg-split-conformal-set-for-classification]]: defines the adjusted split score threshold and classification set.

[[thm-split-conformal-marginal-coverage]]: gives the conditional-on-training exchangeable-coverage guarantee used in the third model.

[[def-regular-conditional-distribution]]: specifies the conditional-kernel identity used for the finite constant kernel.

[[def-exchangeable-random-elements]]: exchangeability means invariance of the joint law under every coordinate permutation.

[[def-source-target-distributions-and-shift]]: defines distinct source and target joint laws.

[[thm-log-and-brier-strict-propriety]]: strict propriety selects the forecast matching the empirical validation label law.

[[def-natural-logarithm]]: gives $\exp(\log 3)=3$ for the exact softmax calculations.

[[thm-exponential-addition-formula]]: gives $\exp(2\log 3)=\exp(\log 3)^2$.

[Lei et al., full paper, Section 2.2 and Appendix A.1](https://arxiv.org/pdf/1604.04173): supplies the split conformal order-statistic construction and rank argument in an iid regression setting.

[Tibshirani, full lecture notes, Sections 1.2–2.3](https://www.stat.berkeley.edu/~ryantibs/statlearn-s24/lectures/conformal.pdf): derives the adjusted score rank, conditional-on-training coverage, and the distinction from feature-conditional coverage.

## Facts & Assumptions

**Given:** The four finite models in the Example, the stated deterministic score rules, and the finite validation and calibration samples.

[F1] Top-label calibration requires $\mathbb P(Y=\widehat Y,\ C\in B)=\mathbb E[\mathbf 1_{\{C\in B\}}C]$ for every Borel $B\subseteq[0,1]$. [[def-top-label-calibration]]

[F2] Binned ECE is the sample-size-weighted absolute accuracy-confidence gap, and MCE is the largest such gap over occupied bins. [[def-binned-expected-calibration-error]]

[F3] Validation temperature scaling minimizes the finite-sample mean negative log probability over a finite nonempty set of positive temperatures and returns the smallest minimizer. [[alg-validation-temperature-scaling]]

[F4] For every positive temperature, softmax has the same maximizing index set as its logit vector. [[thm-positive-temperature-scaling-preserves-argmax]]

[F5] The split classification set uses $k=\lceil(m+1)(1-\alpha)\rceil$, the $k$th calibration score when $k\le m$, and $q=+\infty$ when $k=m+1$. [[alg-split-conformal-set-for-classification]]

[F6] If the example tuple has a regular conditional distribution given the training sigma-field whose sections are exchangeable, the split set has conditional coverage at least $1-\alpha$; this is not a subgroup-conditional assertion. [[thm-split-conformal-marginal-coverage]]

[F7] A regular conditional distribution is an everywhere probability kernel whose evaluations satisfy the conditional-event integral identity. [[def-regular-conditional-distribution]]

[F8] Exchangeability means that the joint law is invariant under every coordinate permutation. [[def-exchangeable-random-elements]]

[F9] The logarithmic score is strictly proper on the finite probability simplex. [[thm-log-and-brier-strict-propriety]]

[F10] For positive $u$, $\log u$ is the inverse of $\exp$; the exponential obeys $\exp(a+b)=\exp(a)\exp(b)$. [[def-natural-logarithm]] [[thm-exponential-addition-formula]]

[F11] A source-target pair consists of two probability laws on the feature-label product space, and they may be distinct. [[def-source-target-distributions-and-shift]]

[A1] In the rare-feature model, calibration and test examples are independent draws from the same finite joint law $\mu$ on feature-label pairs, and the training sigma-field is trivial. The score rule is fixed and measurable on the finite feature-label space.

[A2] In the clean/corrupted model, the calibration example is drawn from the source law and the test example from the distinct target law.

## Verification

1.1 In the first model, $\widehat Y=1$ and $C=9/10$ almost surely. For $B=\{9/10\}$, the left side of [F1] is $1$ and the right side is $9/10$, so top-label calibration fails despite accuracy $1$. In the single occupied bin, [F2] gives both errors as $|1-9/10|=1/10$. [F1, F2, given, algebra]

1.2 By [F10], temperature $1$ gives first-class probability $\exp(2\log3)/(1+\exp(2\log3))=9/10$, while temperature $2$ gives $\exp(\log3)/(1+\exp(\log3))=3/4$. The empirical NLL is the log-score risk $\bar S_{\log}(p,p_T)$ under the validation label frequencies $p=(3/4,1/4)$. Strict propriety [F9] therefore makes the value at $(3/4,1/4)$ strictly smaller than at $(9/10,1/10)$, so [F3] selects $T=2$. By [F4], both temperatures predict class $1$. Their one-bin gaps from the observed accuracy $3/4$ are $|3/4-9/10|=3/20$ and $|3/4-3/4|=0$. [F3, F4, F9, F10, given, algebra]

1.3 In the rare-feature model, $m=1$ and $\alpha=1/2$ give $k=\lceil2(1/2)\rceil=1$, so the threshold is the single calibration score: it is $1$ for a rare calibration feature and $0$ for a common one. Write $Q$ for the finite joint law of the calibration and test pairs; by [A1], $Q(z_1,z_2)=\mu(z_1)\mu(z_2)$, which is unchanged by swapping coordinates. For the trivial training sigma-field, whose only events are $\emptyset$ and the whole space, the constant kernel with value $Q$ satisfies [F7]: the conditional-event integral is zero for $\emptyset$ and is the ordinary law identity for the whole space. By [F8] its section is exchangeable. The finite score rule is measurable, so [F6] applies and yields conditional-on-training marginal coverage at least $1/2$. [A1, F5, F6, F7, F8, given, algebra]

2.1 If the test feature is common, its true-label score is $0\le q$ for either possible threshold, so coverage is $1$. If it is rare, its true-label score is $1$, which is included exactly when the independent calibration feature is rare, an event of probability $1/10$. Thus subgroup coverage is $1/10$, while marginal coverage is $(9/10)\cdot1+(1/10)\cdot(1/10)=91/100$. [A1, F5, step 1.3, algebra]

3.1 In the clean/corrupted model, the calibration score is always $0$, so $k=1$ gives $q=0$. At the target feature, both candidate labels have scores $1$ or $2$, hence neither belongs to $C(\mathrm{corrupted})$ and target coverage is $0$. The calibration/test pair law assigns mass one to (clean, corrupted) and zero to (corrupted, clean), so it is not invariant under swapping; the exchangeability hypothesis in [F6] fails. [A2, F5, F6, F11, given, algebra] ∎

## Remarks

Ovadia et al. report an empirical benchmark, not a general theorem. For their MNIST rotations and translations, their 80 corruption/intensity combinations on CIFAR-10 and ImageNet, their 20 Newsgroups class shift, and their Criteo categorical-token randomization, the reported behavior depends on the method and shift. In particular, temperature-scaling ECE rises with increasing corruption on CIFAR-10 and ImageNet, and its Brier score is worse than the vanilla method for the reported Criteo shift. Their method ordering differs between MNIST and the image benchmarks, so no universal ensemble ranking or calibration guarantee under shift follows. For fully out-of-label-set inputs, Ovadia et al. note that no ground-truth class lies in the model's label set; they report prediction-confidence and predictive-entropy histograms for those inputs rather than ECE. Their text experiments also plot confidence versus accuracy for mixtures of in-distribution and OOD examples.

## Remarks references

[Ovadia et al., full paper, Sections 2–5](https://proceedings.neurips.cc/paper/9547-can-you-trust-your-models-uncertainty-evaluating-predictive-uncertainty-under-dataset-shift.pdf): specifies the evaluated models, datasets, shift families, metrics, and empirical conclusions summarized here.
