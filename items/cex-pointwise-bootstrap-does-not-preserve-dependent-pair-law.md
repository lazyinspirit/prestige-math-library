---
id: cex-pointwise-bootstrap-does-not-preserve-dependent-pair-law
kind: counterexample
title: "Pointwise bootstrap need not preserve pair dependence"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - alg-n-out-of-n-bootstrap-from-empirical-law
  - thm-bootstrap-draws-are-conditionally-iid-empirical-law
  - def-empirical-measure
  - def-moments-variance-and-covariance
justified_by: []
proof_strategy: direct
generation:
  role: counterexample
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Bradley Efron and Robert Tibshirani, The Bootstrap Method for Assessing Statistical Accuracy, Behaviormetrika 12 (1985), §2, printed pp. 3–5"
      url: "https://link.springer.com/content/pdf/10.2333/bhmk.12.17_1.pdf"
    - title: "B. Efron and R. Tibshirani, The Bootstrap Method for Assessing Statistical Accuracy, Stanford LCS Technical Report 19 / BIO 101 (October 1985; full-text report copy)"
      url: "https://stacks.stanford.edu/file/xv648rw7816/xv648rw7816_LCS-19.pdf"
    - title: "P.B. Stark, Statistics 240 Lecture Notes, Part 8: Resampling Methods, §1.1, PDF pp. 2–3"
      url: "https://www.stat.berkeley.edu/~stark/Teach/S240/Notes/ch8.pdf"
---

## Statement refuted

The conditional pointwise size-$n$ bootstrap reproduces the original joint sampling law for every possibly dependent $n$-tuple of observed units.

## Facts & Assumptions

**Given:** Consecutive observations $(X_1,X_2)$ from a stationary binary Markov chain with invariant law $(1/2,1/2)$ and transition probabilities $3/4$ to stay at the current state and $1/4$ to switch, the observed pair $x=(X_1,X_2)$, and the size-two pointwise empirical bootstrap.

[F1] [[def-empirical-measure]]: the empirical law is $P_2=\frac12(\delta_{x_1}+\delta_{x_2})$, with multiplicity when values repeat.

[F2] [[alg-n-out-of-n-bootstrap-from-empirical-law]]: conditional bootstrap entries are obtained from independent uniform draws of the observed indices.

[F3] [[thm-bootstrap-draws-are-conditionally-iid-empirical-law]]: conditional on fixed observations, the bootstrap entries are independent with common law $P_2$.

[F4] [[def-moments-variance-and-covariance]]: for square-integrable real random variables, covariance is $\mathbb E[(X-\mathbb E X)(Y-\mathbb E Y)]$.

## Counterexample

The transition rule and invariant initial law give the finite joint law
$$\mathbb P(0,0)=\mathbb P(1,1)=3/8,\qquad \mathbb P(0,1)=\mathbb P(1,0)=1/8.$$

1.1 The transition matrix is $\begin{pmatrix}3/4&1/4\\1/4&3/4\end{pmatrix}$, whose columns sum to one, so $(1/2,1/2)$ is invariant; multiplying this initial law by the transition probabilities gives the displayed four joint masses. Both marginals are Bernoulli with mean $1/2$, while $\mathbb P(X_1=0,X_2=0)=3/8\ne1/4=\mathbb P(X_1=0)\mathbb P(X_2=0)$, so the observations are dependent. Also $\mathbb E[X_1X_2]=3/8$, and [F4] gives original covariance $3/8-(1/2)(1/2)=1/8$. [given, F4, algebra]

1.2 Fix any realized pair $x=(x_1,x_2)$ and put $m=(x_1+x_2)/2$. By [F1]–[F3], each bootstrap coordinate has conditional mean $m$, and the two coordinates are conditionally independent; hence $\mathbb E^*[X_1^*X_2^*]=m^2$ and [F4] gives $\operatorname{Cov}^*(X_1^*,X_2^*)=0$. [F1, F2, F3, F4, algebra]

2.1 Both the original pair and the bootstrap pair are bounded, so equality of their joint laws would force equality of their covariances. The original covariance is $1/8$ but the conditional bootstrap covariance is $0$, so the laws differ and the statement is false. This finite counterexample concerns exact joint-law reproduction only; it does not decide asymptotic validity for any particular statistic. [step 1.1, step 1.2, algebra] ∎
