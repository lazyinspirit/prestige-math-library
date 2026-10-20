---
id: ex-generative-lda-and-logistic-share-a-boundary
kind: example
title: A Gaussian LDA model and a conditional logistic model can share a decision boundary
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - thm-lda-and-qda-log-posterior-scores
  - def-binary-logistic-and-multiclass-softmax-models
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Hastie, Tibshirani, and Friedman, The Elements of Statistical Learning, 2nd ed., corrected 12th printing"
      url: "https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS"
    - title: "Stanford CS229 Spring 2022 lecture notes"
      url: "https://cs229.stanford.edu/lectures-spring2022/main_notes.pdf"
---

## Example

Assume AC. In one dimension, take LDA classes $1$ and $2$ with equal priors and conditional laws $X\mid Y=1\sim N_1(-1,1)$ and $X\mid Y=2\sim N_1(1,1)$. Recode class $1$ as binary label $0$ and class $2$ as binary label $1$ in a conditional logistic model with $\Pr(Y=1\mid x)=\sigma(2x)$. Both classifiers have tie boundary $x=0$ and agree on both sides of that boundary; ties select class $1$ (binary label $0$). This equality of boundaries for these parameters does not identify the two estimation procedures or equate their coefficients in general.

The number line marks the two Gaussian means and their posterior tie boundary; the score calculation below establishes the boundary.

```tikz
\begin{tikzpicture}[x=1.25cm,y=1cm]
  \draw[->] (-2.1,0) -- (2.1,0) node[right] {$x$};
  \fill (-1,0) circle (2pt);
  \fill (1,0) circle (2pt);
  \draw[dashed] (0,-0.32) -- (0,0.42);
  \node[below] at (-1,0) {$\mu_1=-1$};
  \node[below] at (1,0) {$\mu_2=1$};
  \node[above] at (0,0.42) {$x=0$};
\end{tikzpicture}
```

## Example references

[[thm-lda-and-qda-log-posterior-scores]]

[[def-binary-logistic-and-multiclass-softmax-models]]

[[def-axiom-of-choice]]

[Hastie, Tibshirani, and Friedman, ESL, §4.4.5, equation (4.33)](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

[Stanford CS229 Spring 2022 lecture notes, §4.1.3](https://cs229.stanford.edu/lectures-spring2022/main_notes.pdf)

## Facts & Assumptions

**Given:** AC, equal LDA priors, $\mu_1=-1$, $\mu_2=1$, $\Sigma=1$, the stated class recoding, and the conditional logistic slope $2$ with zero intercept.

[F1] Under common covariance, the LDA posterior log-score for class $k$ is $x^T\Sigma^{-1}\mu_k-\tfrac12\mu_k^T\Sigma^{-1}\mu_k+\log\pi_k$, up to a class-independent term. [[thm-lda-and-qda-log-posterior-scores]]

[F2] The binary conditional logistic probability is $\sigma(\beta_0+x\beta)$, with $\sigma(t)=(1+e^{-t})^{-1}$. [[def-binary-logistic-and-multiclass-softmax-models]]

[A1] AC is carried because the LDA Gaussian law and density theorem assume it. [[def-axiom-of-choice]]

## Verification

1.1 For the LDA model, [F1] gives $\delta_2(x)-\delta_1(x)=x(1-(-1))-\tfrac12(1^2-(-1)^2)+\log(1)=2x$. The two posterior scores tie exactly at $x=0$, with class $1$ selected there by the smallest-label rule. [given, F1, A1, algebra]

2.1 For the logistic model, [F2] gives $\Pr(Y=1\mid x)=\sigma(2x)$. Since $\sigma'(t)=\sigma(t)(1-\sigma(t))>0$ and $\sigma(0)=1/2$, this probability is below, equal to, or above $1/2$ exactly when $x$ is below, equal to, or above zero. Under the stated recoding, the class decisions agree on each region and ties select class $1$; no coefficient-estimation equivalence is claimed. [given, F2, step 1.1, algebra] ∎
