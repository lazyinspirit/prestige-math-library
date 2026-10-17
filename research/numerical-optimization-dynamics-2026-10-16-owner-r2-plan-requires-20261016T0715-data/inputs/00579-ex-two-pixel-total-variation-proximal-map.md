---
id: ex-two-pixel-total-variation-proximal-map
kind: example
title: "The two-pixel total-variation proximal map"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-proximal-mapping
  - thm-proximal-operator-existence-resolvent-firm-nonexpansive
  - lem-prox-l1-is-soft-thresholding
  - def-proper-closed-convex-function-on-rn
  - def-convex-and-strictly-convex-functionals-on-a-banach-space
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Neal Parikh and Stephen Boyd, Proximal Algorithms, §§2.3 and 6.5.2"
      url: "https://web.stanford.edu/~boyd/papers/pdf/prox_algs.pdf"
---

## Example

For $\lambda,t>0$, let $g(u_1,u_2)=\lambda|u_2-u_1|$. For input $v=(v_1,v_2)$, define its mean $m=(v_1+v_2)/2$ and half-difference $d=(v_2-v_1)/2$. Then
$$\operatorname{prox}_{tg}(v)=\bigl(m-S_{t\lambda}(d),\ m+S_{t\lambda}(d)\bigr).$$
Thus the proximal map preserves the mean and soft-thresholds the half-difference by $t\lambda$.

## Facts & Assumptions

**Given:** $\lambda,t>0$ and $v\in\mathbb R^2$.

[F1] [[def-proximal-mapping]]: the proximal point minimizes $g(u)+\|u-v\|_2^2/(2t)$.

[F2] [[lem-prox-l1-is-soft-thresholding]]: the proximal map of $\alpha|\cdot|$ at scalar input $d$, with parameter $s>0$, is $S_{s\alpha}(d)$.

[F3] [[thm-proximal-operator-existence-resolvent-firm-nonexpansive]]: the proximal objective has a unique minimizer for proper closed convex input and positive parameter.

[F4] [[def-proper-closed-convex-function-on-rn]]: properness is nonempty effective domain and closedness means a closed epigraph.

[F5] [[def-convex-and-strictly-convex-functionals-on-a-banach-space]]: convexity is the extended-real Jensen inequality.

## Verification

1.1 The function $g$ is finite everywhere, hence proper. Its epigraph is the intersection of the two closed halfspaces $\lambda(u_2-u_1)\le s$ and $-\lambda(u_2-u_1)\le s$, so it is closed. The triangle inequality for absolute value gives convexity under [F5]. Write a candidate $u$ uniquely as $u=(a-b,a+b)$, so $a$ is its mean and $b$ its half-difference. Direct expansion gives $\|u-v\|_2^2=2(a-m)^2+2(b-d)^2$ and $g(u)=2\lambda|b|$. Hence the objective is $$\frac{(a-m)^2}{t}+\frac{(b-d)^2}{t}+2\lambda|b|.$$ The first term is uniquely minimized at $a=m$; the remaining terms depend only on $b$. [F1, F4, F5, given, algebra]

2.1 The $b$-dependent objective is $2\lambda|b|+(b-d)^2/t$, which is the scalar proximal objective for function $2\lambda|\cdot|$ with parameter $t/2$. By [F2], its unique minimizer is $S_{(t/2)(2\lambda)}(d)=S_{t\lambda}(d)$. This and $a=m$ give the displayed vector. The objective is strictly convex because of its positive quadratic term, consistent with uniqueness in [F3]. [F2, F3, step 1.1, algebra] ∎
