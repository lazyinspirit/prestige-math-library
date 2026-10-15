---
id: ex-gaussian-regression-mean-and-prediction-intervals
kind: example
title: "Mean-response and prediction intervals from one Gaussian regression fit"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
dependency_level: 6
deps:
  - thm-gaussian-regression-confidence-and-prediction-intervals
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Dmitry Panchenko, MIT 18.443 Statistics for Applications, Fall 2006, Section 15: Multiple Linear Regression, PDF pp. 4–7"
      url: "https://ocw.mit.edu/courses/18-443-statistics-for-applications-fall-2006/dbc17cbfdac61daaff75056992d0af9a_section15.pdf"
    - title: "Stanford University, Stats 203, Inference for Linear Regression, Lecture 4, sections on mean-response and prediction intervals"
      url: "https://web.stanford.edu/class/stats203/lectures/lecture4/"
---

## Example

Take $n=4$, $p=2$ and
$$X=\begin{pmatrix}1&0\\1&1\\1&2\\1&3\end{pmatrix},\qquad Y=(1,2,2,4)^T.$$
Under the exact Gaussian regression model, compare the 95% confidence interval for the slope $\beta_1$ with the 95% mean-response and future-response prediction intervals at $x_0=(1,2)^T$. Also distinguish the Gaussian maximum-likelihood estimate of $\sigma^2$ from the residual mean square.

## Facts & Assumptions

[F1] The exact coefficient, mean-response, and future-response intervals use the formulas in [[thm-gaussian-regression-confidence-and-prediction-intervals]].

## Verification

**Given:** The displayed fixed design and response, confidence level $0.95$, and the interval theorem [F1].

1.1 Direct multiplication gives $X^TX=\begin{pmatrix}4&6\\6&14\end{pmatrix}$, $(X^TX)^{-1}=\frac1{20}\begin{pmatrix}14&-6\\-6&4\end{pmatrix}$, and $X^TY=(9,18)^T$. Hence $\widehat\beta=(0.9,0.9)^T$, the fitted values are $(0.9,1.8,2.7,3.6)^T$, and $RSS_F=0.1^2+0.2^2+(-0.7)^2+0.4^2=0.70$. Thus $\nu=2$, $s^2=0.35$, while $\widehat\sigma^2_{\rm ML}=RSS_F/n=0.175$. [given, algebra]

2.1 For $x_0=(1,2)^T$, multiplication by $(X^TX)^{-1}$ gives $h_0=x_0^T(X^TX)^{-1}x_0=0.30$ and the fitted mean $x_0^T\widehat\beta=2.7$. With $q=t_{2,0.975}$, [F1] gives the slope interval $0.9\pm q\sqrt{0.35\cdot0.20}$, the mean-response interval $2.7\pm q\sqrt{0.35\cdot0.30}$, and the prediction interval $2.7\pm q\sqrt{0.35\cdot1.30}$. The prediction half-width is $\sqrt{13/3}$ times the mean-response half-width, so it is wider because it includes the future response error. [F1, step 1.1, algebra] ∎