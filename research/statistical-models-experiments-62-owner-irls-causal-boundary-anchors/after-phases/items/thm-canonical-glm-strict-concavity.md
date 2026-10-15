---
id: thm-canonical-glm-strict-concavity
kind: theorem
title: Strict concavity and uniqueness of a finite stationary maximizer
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 5
deps:
  - thm-canonical-glm-score-and-hessian
  - cor-mean-value-theorem
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Philippe Rigollet, MIT 18.650 Statistics for Applications, Lecture 10: Generalized Linear Models, PDF pp. 32–33, 40–42"
      url: "https://ocw.mit.edu/courses/18-650-statistics-for-applications-fall-2016/dff89368051a5feae72b39c6422d0752_MIT18_650F16_GLM.pdf"
    - title: "Ryan Tibshirani, Generalized Linear Models, CMU Advanced Methods for Data Analysis, PDF pp. 4–5"
      url: "https://www.stat.cmu.edu/~ryantibs/advmethods/notes/glm.pdf"
---

## Statement

Suppose the canonical-link GLM has an open convex parameter domain $\Theta\subseteq\mathbb R^p$, full-column-rank design $X$, common scale $a(\phi)>0$, and $b''(\eta_i)>0$ at every predictor vector in $X\Theta$. Then $\ell(\,\cdot\,;y,\phi)$ is strictly concave on $\Theta$. It has at most one stationary point; if a stationary point exists, it is the unique global maximizer. This conclusion does not assert that a finite maximizer exists.

## Facts & Assumptions

**Given:** The canonical-link GLM hypotheses in the Statement and its log likelihood.

[F1] [[thm-canonical-glm-score-and-hessian]]: the Hessian is $-X^\mathsf T\operatorname{diag}(b''(\eta_i))X/a(\phi)$.

[F2] [[cor-mean-value-theorem]]: if a function is continuous on a closed interval and differentiable in its interior, its endpoint difference is its derivative at an interior point times the interval length.

## Proof

1.1 Fix distinct $\beta_0,\beta_1\in\Theta$, put $d=\beta_1-\beta_0$, and define $q(t)=\ell(\beta_0+td;y,\phi)$ for $0\le t\le1$. Convexity keeps this segment in $\Theta$. By [F1], $q''(t)=d^\mathsf T\nabla^2\ell(\beta_0+td)d=-a(\phi)^{-1}\sum_i b''(x_i^\mathsf T(\beta_0+td))(x_i^\mathsf Td)^2<0$, because $Xd\ne0$ by full column rank and every displayed $b''$ is positive. The mean value theorem [F2] applied to $q'$ makes $q'$ strictly decreasing. For any $0<t<1$, another application of [F2] gives $(q(t)-q(0))/t=q'(u)$ for some $u\in(0,t)$ and $(q(1)-q(t))/(1-t)=q'(v)$ for some $v\in(t,1)$; strict decrease gives the first secant slope larger than the second, which rearranges to $q(t)>(1-t)q(0)+tq(1)$. Thus every nonconstant segment is strictly concave. [F1, F2, given, algebra]

2.1 Two distinct stationary points would give $q'(0)=q'(1)=0$ on their connecting segment, contradicting strict decrease. If $\beta_0$ is stationary and $\beta_1\ne\beta_0$, then $q'(0)=0$ and strict decrease gives $q'(t)<0$ for $0<t\le1$; [F2] applied to $q$ yields $\ell(\beta_1;y,\phi)-\ell(\beta_0;y,\phi)=q'(c)<0$ for some $c\in(0,1)$. Thus any stationary point is the unique global maximizer when it exists. [F2, step 1.1, algebra] ∎