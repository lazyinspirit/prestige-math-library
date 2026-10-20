---
id: ex-binary-zero-one-loss
kind: example
title: "Binary zero-one loss and risk"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-supervised-learning-problem
  - def-population-and-empirical-risk
justified_by: []
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
    date: 2026-10-20
sources:
  references:
    - title: "Shai Shalev-Shwartz and Shai Ben-David, Understanding Machine Learning: From Theory to Algorithms, Chapter 3 §3.2.2"
      url: "https://www.inf.u-szeged.hu/~turan/ML-Konyv.pdf"
    - title: "Mehryar Mohri, Afshin Rostamizadeh, and Ameet Talwalkar, Foundations of Machine Learning, 2nd ed., Chapter 2 §2.1"
      url: "https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1"
---

## Example

Let $\mathsf X=\{u,v\}$, $\mathsf Y=\mathsf A=\{0,1\}$ with their discrete sigma-algebras, and let the joint law be
$$P(u,0)=\tfrac18,\quad P(u,1)=\tfrac38,\quad P(v,0)=\tfrac38,\quad P(v,1)=\tfrac18.$$
Use zero-one loss $\ell(a,y)=\mathbf1_{\{a\ne y\}}$. The predictor $f_{10}$ with $f_{10}(u)=1$, $f_{10}(v)=0$ has population risk $1/4$; the predictor $f_{01}$ with the opposite labels has risk $3/4$. The two constant predictors each have risk $1/2$. Thus $f_{10}$ is the unique population-risk minimizer among the four predictors.

## Facts & Assumptions

**Given:** The finite measurable spaces, probability law, loss and predictors stated in the example.

[F1] A supervised problem specifies the measurable instance/label/action spaces, joint law, predictors and loss. [[def-supervised-learning-problem]]

[F2] Population risk is the integral of the nonnegative loss under the joint law. [[def-population-and-empirical-risk]]

## Verification

1.1 The table entries sum to one, and each of $u$ and $v$ has marginal probability $1/2$. The loss of $f_{10}$ is one exactly at $(u,0)$ and $(v,1)$, so its risk is $1/8+1/8=1/4$. [given, F1, F2, algebra]

2.1 The loss of $f_{01}$ is one at $(u,1)$ and $(v,0)$, so its risk is $3/8+3/8=3/4$. The constant-one predictor errs on label-zero mass $1/2$, and the constant-zero predictor errs on label-one mass $1/2$. These are all four functions from $\mathsf X$ to $\mathsf Y$, so $f_{10}$ uniquely minimizes risk. [given, F1, F2, step 1.1, algebra] ∎
