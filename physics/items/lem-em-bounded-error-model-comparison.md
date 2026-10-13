---
id: lem-em-bounded-error-model-comparison
kind: lemma
domain: mathematics
title: "Bounded-error model comparison: a derivative lower bound confines compatible parameters"
status: published
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
dependency_level: 0
deps: [def-interval, def-derivative, def-continuity-real, def-abs-value, lem-of-triangle-inequality, cor-differentiable-implies-continuous, cor-mean-value-theorem]
dependency_roles:
  def-interval: mathematical-premise
  def-derivative: mathematical-premise
  def-continuity-real: mathematical-premise
  def-abs-value: mathematical-premise
  lem-of-triangle-inequality: mathematical-premise
  cor-differentiable-implies-continuous: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 5, Theorem 5.10 (the mean value theorem)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
      locator: "The mean value theorem as published by the read supplier [[cor-mean-value-theorem]]. The elementary composition with the triangle inequality and the intermediate point is proved locally; no statistical or sampling content is attributed to any source."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Statement

Let $I\subseteq\mathbb R$ be an interval with at least two elements ([[def-interval]]), let $\theta_0\in I$, and let $f:I\to\mathbb R$ be of class $C^1$ on $I$ in the sense that $f$ is differentiable at every point of $I$ and $f'$ is continuous on $I$ ([[def-derivative]], [[def-continuity-real]]). Assume $f(\theta_0)=0$ and that $f'(\theta)\ge m>0$ for every $\theta\in I$. Let a recorded scalar $\hat y\in\mathbb R$ satisfy $|\hat y|\le s$ with $s\ge0$ ([[def-abs-value]]), and let a separately specified calibration-error model bound be $|y-\hat y|\le\delta$ with $\delta\ge0$ for a value $y$ assigned to the same quantity. If a model requires $y=f(\theta)$ for some $\theta\in I$, then every $\theta\in I$ compatible with those two simultaneous bounds satisfies

$$|\theta-\theta_0|\le\frac{s+\delta}{m};$$

equivalently, if a proposed $\theta$ violates this bound, then the specified model-plus-error-bound pair is incompatible with the premises. The conclusion is a deterministic conditional statement about the stated bounds; it is not a sampling law, a statistical inference, or a claim about the historical reports of the causal-response page.

## Facts & Assumptions

**Given:** An interval $I\subseteq\mathbb R$ with at least two elements, a point $\theta_0\in I$, a function $f:I\to\mathbb R$ differentiable at every point of $I$ with $f'$ continuous on $I$, the normalisation $f(\theta_0)=0$, the lower bound $f'\ge m>0$ on $I$, a recorded scalar $\hat y\in\mathbb R$ with $|\hat y|\le s$, $s\ge0$, a calibration bound $|y-\hat y|\le\delta$, $\delta\ge0$, and the model requirement $y=f(\theta)$ for a point $\theta\in I$.

[L1] Every interval is order-convex: if $x,y\in I$ and $x\le z\le y$ then $z\in I$ ([[def-interval]]). Hence for any two points $a<b$ of $I$ the whole closed interval $[a,b]$ is contained in $I$.

[L2] For an ordered field $F$ and $x,y\in F$ one has $|x+y|\le|x|+|y|$ ([[lem-of-triangle-inequality]]), with the absolute value of [[def-abs-value]]: $|u|=u$ for $u\ge0$, $|u|=-u$ for $u<0$, so $|u|\ge0$ with equality only for $u=0$.

[L3] A function differentiable at a limit point $c$ of its domain is continuous at $c$, and consequently a function differentiable at every point of a set is continuous at every point of that set ([[cor-differentiable-implies-continuous]]). Since $I$ has at least two elements, every point of $I$ is a limit point of $I$ ([[def-interval]]): given distinct $x,y\in I$, an arbitrary small one-sided step from $x$ towards $y$ stays in $I$.

[L4] Differentiation is a local operation and continuity is preserved by restriction ([[def-derivative]], [[def-continuity-real]]): for $a<b$ in $I$, a punctured neighbourhood of an interior point $c\in(a,b)$ lies in $[a,b]$, so the difference quotient of the restriction $f|_{[a,b]}$ at $c$ agrees with that of $f$ and the restriction is differentiable at $c$ with the same derivative $f'(c)$; and by [L3] the restriction is continuous at every point of $[a,b]$.

[L5] Mean value theorem ([[cor-mean-value-theorem]]): if $a<b$ and $g:[a,b]\to\mathbb R$ is continuous on $[a,b]$ and differentiable at every point of $(a,b)$, then there is $\xi\in(a,b)$ with $g(b)-g(a)=g'(\xi)(b-a)$.

## Proof

1.1 Write $y=\hat y+(y-\hat y)$ and apply the triangle inequality of [L2] together with the two assumed bounds: $|y|\le|\hat y|+|y-\hat y|\le s+\delta$. [L2, algebra]

1.2 If $\theta=\theta_0$ then $|\theta-\theta_0|=0\le (s+\delta)/m$, because $s\ge0$, $\delta\ge0$ give $s+\delta\ge0$ and $m>0$ makes $(s+\delta)/m\ge0$. [L2, algebra]

1.3 Suppose $\theta\ne\theta_0$ and put $a=\min(\theta,\theta_0)$, $b=\max(\theta,\theta_0)$, so $a<b$ and $\{a,b\}=\{\theta,\theta_0\}$. By [L1] the closed interval $[a,b]$ is contained in $I$; by [L3] the function $f$ is continuous on $I$, and by the restriction clause of [L4] the restriction $g=f|_{[a,b]}$ is continuous on $[a,b]$; by the locality clause of [L4] $g$ is differentiable at every point of $(a,b)$ with $g'=f'$ there. The mean value theorem [L5] therefore yields $\xi\in(a,b)$ with $g(b)-g(a)=g'(\xi)(b-a)$. Since $g(b)-g(a)$ equals $f(\theta)-f(\theta_0)$ up to the sign that reverses $b-a$ as well, and $g'(\xi)=f'(\xi)$, this is exactly $f(\theta)-f(\theta_0)=f'(\xi)(\theta-\theta_0)$. [L1, L3, L4, L5]

2.1 At the intermediate point of step 1.3 one has $f'(\xi)\ge m>0$, so $f(\theta)-f(\theta_0)$ has the sign of $\theta-\theta_0$, and therefore $|f(\theta)-f(\theta_0)|=f'(\xi)\,|\theta-\theta_0|\ge m\,|\theta-\theta_0|$. [step 1.3, L2, algebra]

3.1 Since $y=f(\theta)$ and $f(\theta_0)=0$, step 2.1 gives $m|\theta-\theta_0|\le|y|$, and step 1.1 gives $|y|\le s+\delta$. Hence $m|\theta-\theta_0|\le s+\delta$, and dividing by $m>0$ yields $|\theta-\theta_0|\le(s+\delta)/m$. [step 2.1, step 1.1, algebra]

4.1 Every $\theta\in I$ compatible with the model requirement and the two bounds falls under one of the two cases: $\theta=\theta_0$ satisfies the bound by step 1.2, and $\theta\ne\theta_0$ satisfies it by step 3.1. Equivalently, if a proposed $\theta$ has $|\theta-\theta_0|>(s+\delta)/m$, then no assignment satisfying both stated bounds can also satisfy $y=f(\theta)$, so the specified model-plus-error-bound pair is incompatible with the premises; no probability, sampling, or statistical inference has been used. [step 1.2, step 3.1] ∎
