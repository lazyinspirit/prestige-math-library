---
id: ex-em-experiment-analysis-prerequisites-hypothesis-boundaries
kind: example
domain: mathematics
title: "Sharpness of the bounded-error uncertainty bound for a linear prediction, and failure once the response lower bound is dropped"
status: published
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
dependency_level: 2
deps: [def-continuity-real, thm-em-uncertainty-analysis, def-interval, def-open-and-closed-in-r, def-derivative, def-limit-point-r, def-directional-and-partial-derivatives, def-jacobian-matrix-and-gradient, def-euclidean-inner-product, thm-of-square-roots, def-abs-value, lem-of-abs-value, lem-derivative-of-a-power, thm-algebra-of-derivatives, lem-standard-basis-of-f-n, def-ck-euclidean-maps-and-diffeomorphisms, def-ck-and-multi-index-notation-in-several-variables]
dependency_roles:
  def-continuity-real: mathematical-premise
  thm-em-uncertainty-analysis: mathematical-premise
  def-interval: mathematical-premise
  def-open-and-closed-in-r: mathematical-premise
  def-derivative: mathematical-premise
  def-limit-point-r: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  thm-of-square-roots: mathematical-premise
  def-abs-value: mathematical-premise
  lem-of-abs-value: mathematical-premise
  lem-derivative-of-a-power: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  lem-standard-basis-of-f-n: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "J. Lebl, Basic Analysis I: Introduction to Real Analysis, Volume I (open textbook), section 4.1.1 (Example 4.1.3 and Proposition 4.1.7: affine derivatives and linearity) and section 4.2.4 (monotonicity from the sign of the derivative), printed pp. 154-168, version 6.3 (May 15, 2026); used only as the published companion of the cited derivative items, not as the source of the computed sharpness example"
      url: "https://www.jirka.org/ra/realanal.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Example

Identify $\mathbb R$ with $\mathbb R^1$ by $t\mapsto(t)$, the function on $\{0\}$ with value $t$. This bijection preserves distances because $\lVert(t)-(r)\rVert_2=|t-r|$; the symbols $u=1$ and $\nabla F=m$ below use this identification.

(i) Specialise [[thm-em-uncertainty-analysis]] to $n=1$, $U=\mathbb R$, $\theta_0=0$, $u=1$, $I=\mathbb R$ and $F(\theta)=m\theta$ with $m>0$. Then $F$ is $C^1$, $F(0)=0$, $\nabla F(\theta)=m$ and $\langle\nabla F(\theta),1\rangle=m\ge m$, so the theorem's hypothesis holds with equality. Fix the recorded value $\hat y=0$ (so $s=0$) and any $\delta\ge0$. A candidate $\theta\in\mathbb R$ is compatible with the calibration bound exactly when $|F(\theta)-\hat y|=|m\theta|\le\delta$, that is, exactly when $|\theta|\le\delta/m$; this is precisely the theorem's bound $(s+\delta)/m=\delta/m$, and the bound is attained (equality) at $\theta=\pm\delta/m$. Hence the constant $(s+\delta)/m$ cannot be improved for this instance, and the special case $\delta=0$ leaves $\theta=0$ as the only compatible candidate. (ii) The positive lower bound on the response is not removable. If it is dropped, take $m=0$ and $F\equiv0$ on $\mathbb R$: the hypothesis $\langle\nabla F(\theta),u\rangle\ge m>0$ fails, and with the same data $\hat y=0$, $s=0$, $\delta\ge0$ every $\theta\in\mathbb R$ is compatible, because $y=0$ and $|y-\hat y|=0\le\delta$; no finite parameter bound then follows from the indicator and the two bounds alone. (iii) These are mathematical observations about a hypothetical bounded-error model: no experimental data, sampling law or statistical inference is used or asserted, and the displayed numbers are stipulated parameters, not measurements.

## Facts & Assumptions

**Given:** a real $m>0$; a real $\delta\ge0$; the linear function $F(\theta)=m\theta$ on $\mathbb R$; the recorded value $\hat y=0$ with $s=0$; and the alternative function $F\equiv0$ on $\mathbb R$ read with $m=0$.

[F1] The uncertainty theorem: for open $U\subseteq\mathbb R^n$, unit $u$, an open interval $I\ni0$ with $\gamma(\theta)=\theta_0+\theta u\in U$, a $C^1$ function $F$ with $F(\theta_0)=0$ and $D_uF(\theta_0+\theta u)=\langle\nabla F(\theta_0+\theta u),u\rangle\ge m>0$ on $I$, and recorded $\hat y$, $s\ge0$, $\delta\ge0$ with $|\hat y|\le s$ and $|F(\theta_0+\theta u)-\hat y|\le\delta$ at a candidate $\theta\in I$, one has $|\theta|\le(s+\delta)/m$, and then $\lVert\theta u\rVert_2=|\theta|$ ([[thm-em-uncertainty-analysis]]).

[F2] $\mathbb R=(-\infty,\infty)$ is the open interval of [[def-interval]] containing $0$, and $\mathbb R$ is an open subset of itself ([[def-open-and-closed-in-r]]).

[F3] Every point of a nondegenerate interval is a limit point of it, and a limit point of $A$ is a point every punctured neighbourhood of which meets $A$ ([[def-derivative]], [[def-limit-point-r]]).

[F4] The identity $p_1(x)=x$ is differentiable at every real with $p_1'(c)=1$, and the constant $p_0\equiv1$ is differentiable at every real with derivative $0$ ([[lem-derivative-of-a-power]]).

[F5] At a limit point $c$ of a common domain $A\subseteq\mathbb R$, sums and scalar multiples of functions differentiable at $c$ are differentiable at $c$ with $(f+g)'(c)=f'(c)+g'(c)$ and $(\alpha f)'(c)=\alpha f'(c)$ ([[thm-algebra-of-derivatives]]).

[F6] For $f$ on a subset of $\mathbb R$, the derivative at a limit point $c$ is the limit of the difference quotient ([[def-derivative]]), and the directional derivative in the direction $e_0=1$ is the limit of $t\mapsto(f(c+t)-f(c))/t$, the two limits coinciding under the substitution $x=c+t$ ([[def-directional-and-partial-derivatives]]); in $\mathbb R^1$ the only standard basis vector is $e_0=1$ ([[lem-standard-basis-of-f-n]]).

[F7] The gradient of a scalar function is the vector of its partial derivatives, $\nabla f(a)=(\partial_0f(a),\ldots)$ ([[def-jacobian-matrix-and-gradient]]).

[F8] The Euclidean inner product on $\mathbb R^n$ is $\langle x,y\rangle=\sum_{k<n}x_ky_k$ with norm $\lVert x\rVert_2=\sqrt{\langle x,x\rangle}$, and a nonnegative real has a unique nonnegative square root, so $\lVert(1)\rVert_2=\sqrt{1}=1$ in $\mathbb R^1$ ([[def-euclidean-inner-product]], [[thm-of-square-roots]]).

[F9] Absolute value: $|x|\ge0$, $|x|=0$ if and only if $x=0$, and $|xy|=|x|\,|y|$ ([[lem-of-abs-value]]), with the case definition $|x|=x$ for $x\ge0$ and $|x|=-x$ for $x<0$ ([[def-abs-value]]).

[F10] A scalar function on an open set is of class $C^1$ when the function and all its first coordinate partial derivatives exist and are continuous there ([[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-ck-and-multi-index-notation-in-several-variables]]). Continuity at $c$ means that for every $\varepsilon>0$ there is $r>0$ such that $|x-c|<r$ implies $|f(x)-f(c)|<\varepsilon$ ([[def-continuity-real]]).

## Verification

**Proof technique:** direct.

1.1 For $F(\theta)=m\theta$ the theorem's hypotheses are met at $n=1$, $U=\mathbb R$, $\theta_0=0$, $u=1$, $I=\mathbb R$ with lower bound $m$: $\mathbb R$ is an open interval containing $0$ and is open in itself [F2], the identity on $\mathbb R$ is differentiable everywhere with derivative $1$ [F4], so the scalar multiple $F=m\,p_1$ is differentiable everywhere with $F'(\theta)=m\cdot1=m$ at every real, a limit point of the domain [F3, F5]; for $\varepsilon>0$, taking $r=\varepsilon/m>0$ gives $|F(x)-F(c)|=m|x-c|<\varepsilon$ whenever $|x-c|<r$, so $F$ is continuous; the derivative function is the constant $m$, whose differences are zero, hence it too is continuous, so $F$ is of class $C^1$ [F10]; $F(0)=0$; the only partial derivative is $\partial_0F(\theta)=D_1F(\theta)=F'(\theta)=m$ [F6], so $\nabla F(\theta)=(m)$ [F7] and $\langle\nabla F(\theta),1\rangle=m\cdot1=m\ge m$ [F8]; and $\lVert u\rVert_2=\lVert(1)\rVert_2=1$ [F8]. [F2, F3, F4, F5, F10, F6, F7, F8]

1.2 With the recorded $\hat y=0$, $s=0$ and $y=F(\theta)=m\theta$ the two bounds read $0\le0$ and $|m\theta|\le\delta$; since $|m\theta|=m\,|\theta|$ and $m>0$, the inequality $|m\theta|\le\delta$ is equivalent to $|\theta|\le\delta/m$ [F9]. By the theorem [F1] every compatible $\theta$ satisfies $|\theta|\le(s+\delta)/m=\delta/m$, so the compatible set is exactly the set of $\theta$ with $|\theta|\le\delta/m$; at $\theta=\pm\delta/m$ one has $|m\theta|=m\,(\delta/m)=\delta$, so these candidates are compatible and the bound is attained, and no smaller constant can replace $\delta/m$ for this instance; if $\delta=0$ then $|m\theta|=0$ forces $\theta=0$, the only compatible candidate [F9]. [F1, F9, algebra]

1.3 For $F\equiv0$ and $m=0$ the function is the scalar multiple $0\cdot p_1$, differentiable everywhere with derivative $0$ [F4, F5], so $\partial_0F(\theta)=0$ and $\nabla F(\theta)=(0)$ [F6, F7], whence $\langle\nabla F(\theta),1\rangle=0$; this is not $\ge m$ for any $m>0$, so the theorem's hypothesis fails and the theorem supplies no bound. Nevertheless $y=F(\theta)=0=\hat y$ for every real $\theta$, so $|y-\hat y|=0\le\delta$ and $|\hat y|=0\le s$ hold for every $\theta\in\mathbb R$: with the same indicator and the same two bounds every real $\theta$ is compatible, and no finite bound $|\theta|\le C$ follows from those data alone [F9]. [F4, F5, F6, F7, F9, algebra]

2.1 Every quantity above is a stipulated real parameter or a value of the explicitly displayed functions $\theta\mapsto m\theta$ and $\theta\mapsto0$; no experimental data, sampling law, likelihood or statistical inference is used or asserted, and the displayed numbers are parameters of the construction, not measurements. [given] ∎

## Remarks

- **What is and is not claimed.** The example proves sharpness of the conditional inequality of [[thm-em-uncertainty-analysis]] for one explicitly displayed family, and it exhibits a family in which the conclusion fails once the positive lower bound on the response is dropped. It asserts nothing about any experiment, detector, calibration procedure or historical report, and the "data" mentioned in the statement are the stipulated bounds $|\hat y|\le s$ and $|y-\hat y|\le\delta$ alone.

- **The equal case at $\delta=0$.** At $\hat y=0$ and $\delta=0$ the calibration bound is $|m\theta|\le0$, so the singleton $\{\theta=0\}$ is the compatible set; the general bound $(s+\delta)/m$ degenerates to $0$, which is consistent rather than exceptional.
