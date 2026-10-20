---
id: ex-private-threshold-class-erm
kind: example
title: "Private ERM on a four-threshold class"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 7
deps:
  - alg-private-finite-class-erm
  - thm-private-erm-excess-risk
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; this is a finite calculation.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Cynthia Dwork and Aaron Roth, The Algorithmic Foundations of Differential Privacy, Chapter 11 §11.1"
      url: "https://privacytools.seas.harvard.edu/resource/thealgorithmicfoundationsofdifferentialprivacypdf"
    - title: "Shai Shalev-Shwartz and Shai Ben-David, Understanding Machine Learning: From Theory to Algorithms, Chapter 4 §4.2"
      url: "https://www.inf.u-szeged.hu/~turan/ML-Konyv.pdf"
---

## Example

Let $\mathcal X=\{0,1,2\}$ with its power-set sigma-algebra and let $h_r(x)=\mathbf1\{x\ge r\}$ for $r\in\{0,1,2,3\}$. On the labeled database $D=\{(0,0),(1,1),(2,0)\}$, use the private finite-class selector with $n=3$ and $\varepsilon>0$. In the order $r=0,1,2,3$, the empirical risks are $2/3,1/3,2/3,1/3$ and the selector weights are $e^{-\varepsilon},e^{-\varepsilon/2},e^{-\varepsilon},e^{-\varepsilon/2}$. Its normalizer is $2e^{-\varepsilon}+2e^{-\varepsilon/2}$, so each of the two risk-$2/3$ thresholds is selected with probability $1/[2(1+e^{\varepsilon/2})]$ and each of the two risk-$1/3$ thresholds with probability $e^{\varepsilon/2}/[2(1+e^{\varepsilon/2})]$.

## Example references

[[alg-private-finite-class-erm|Finite-class empirical-risk selector]]

[[thm-private-erm-excess-risk|Privacy and excess-risk guarantee]]

Dwork and Roth, *The Algorithmic Foundations of Differential Privacy*, Chapter 11 §11.1: [full text](https://privacytools.seas.harvard.edu/resource/thealgorithmicfoundationsofdifferentialprivacypdf).

Shalev-Shwartz and Ben-David, *Understanding Machine Learning: From Theory to Algorithms*, Chapter 4 §4.2: [full text](https://www.inf.u-szeged.hu/~turan/ML-Konyv.pdf).

## Facts & Assumptions

**Given:** The discrete instance space $\{0,1,2\}$, thresholds $h_r$ for $r\in\{0,1,2,3\}$, the stated database $D$, $n=3$, and $\varepsilon>0$.

[F1] The selector uses empirical zero-one risk on the multiset and assigns each hypothesis weight $\exp(-\varepsilon n\widehat L_D(h)/2)$ before normalizing over the finite class. [[alg-private-finite-class-erm]]

[F2] The class consists of the four maps $h_r(x)=\mathbf1\{x\ge r\}$ on the stated domain, and the output probabilities are the normalized finite weights of [F1]. [[alg-private-finite-class-erm]]

## Verification

**Given:** The data, thresholds and selector in the Example and [F1]–[F2].

1.1 For $r=0$, the predictions on $0,1,2$ are $(1,1,1)$, which disagree with labels $(0,1,0)$ twice. For $r=1$, predictions are $(0,1,1)$ and disagree once; for $r=2$, predictions are $(0,0,1)$ and disagree twice; for $r=3$, predictions are $(0,0,0)$ and disagree once. Dividing by the three records gives risks $(2/3,1/3,2/3,1/3)$. [given, F2, algebra]

2.1 By [F1] with $n=3$, a risk $2/3$ gives weight $\exp(-3\varepsilon(2/3)/2)=e^{-\varepsilon}$ and a risk $1/3$ gives weight $\exp(-3\varepsilon(1/3)/2)=e^{-\varepsilon/2}$. Therefore the normalizer is $Z=2e^{-\varepsilon}+2e^{-\varepsilon/2}$. [F1, step 1.1, algebra]

3.1 Dividing the weights by $Z=2e^{-\varepsilon/2}(1+e^{-\varepsilon/2})$ gives probability $1/[2(1+e^{\varepsilon/2})]$ for each risk-$2/3$ threshold and probability $e^{\varepsilon/2}/[2(1+e^{\varepsilon/2})]$ for each risk-$1/3$ threshold. The four probabilities sum to one, since the two groups have total masses $1/(1+e^{\varepsilon/2})$ and $e^{\varepsilon/2}/(1+e^{\varepsilon/2})$. [F1, step 2.1, algebra] ∎
