---
id: lem-partial-homogeneous-penalty-is-constant-under-global-hypotheses
kind: lemma
title: The full global partial-model hypotheses force a constant penalty coefficient
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps: [def-feature-measure-energy]
justified_by: []
proof_strategy: direct
axiom_use: "AC supplies the stated DC/Countable Choice and inherited measure/flow representation branches; all auxiliary constructions are proved locally."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Chizat and Bach, On the Global Convergence of Gradient Descent for Over-parameterized Models using Optimal Transport, locally reconstructed auxiliary proof"
      url: "https://arxiv.org/pdf/1805.09545"
---
## Statement

Let $W:\Theta\to[0,\infty)$ be bounded and $C^1$, and suppose $V(w,\theta)=|w|W(\theta)$ is globally $\lambda$-semiconvex on $\mathbb R\times\Theta$ for one finite coefficient $\lambda$. Suppose either $\Theta=\mathbb R^q$, or $\Theta$ is the closure of a nonempty bounded connected open convex set with $C^1$ boundary and $dW(n)=0$ on that boundary. Then $W\equiv c$ for some $c\ge0$. In the full partial-model hypotheses, the Neumann assumption for $G_f=\langle f,\varphi\rangle+W$ at $f=0$ supplies the latter condition. Consequently, writing $H_+=\langle f,\varphi\rangle+c$ and $H_-=-\langle f,\varphi\rangle+c$, one has $H_-=2c-H_+$ and $\nabla H_-=-\nabla H_+$.

## Statement references

[[def-feature-measure-energy]]

## Facts & Assumptions

**Given:** AC and the hypotheses in the Statement.

[F1] Global semiconvexity means that adding a fixed quadratic makes the potential convex on its convex domain. [[def-feature-measure-energy]]

## Proof

**Given:** The data and assumptions in the Statement.

1.1 Fix $s>0$ and two points $\theta_0,\theta_1\in\Theta$. Restrict the semiconvex inequality [F1] to the slice $w=s$ and divide it by $s$. Its quadratic error is bounded by $|\lambda|t(1-t)|\theta_1-\theta_0|^2/(2s)$. Letting $s\to\infty$ gives the convexity inequality for $W$, for every $0\le t\le1$. [F1, given, algebra]

2.1 If $\Theta=\mathbb R^q$, restrict $W$ to any line. A nonzero secant slope of a convex function forces its values to grow without bound in one of the two directions: for $a<b<c$, convexity makes the secant slope on $[b,c]$ at least that on $[a,b]$, and the reversed assertion treats a negative slope. Boundedness therefore makes every secant slope zero. Any two points lie on a line, so $W$ is constant. [step 1.1, given, algebra]

3.1 In the bounded case $W$ attains its maximum at a point $x$ of the compact closure. At an interior maximum $dW_x=0$. At a boundary maximum its tangential differential is zero, because local $C^1$ boundary charts give two-sided differentiable curves in every tangent direction, while the Neumann hypothesis gives zero normal differential. These tangent and normal directions span the ambient space, so again $dW_x=0$. For any $y\in\Theta$, the one-variable convex function $t\mapsto W(x+t(y-x))$ has right derivative $dW_x(y-x)=0$; its secant slope is at least this derivative. Hence $W(y)\ge W(x)$, and maximality gives equality. The final reflected formulas follow by direct differentiation. [step 1.1, given, algebra, step 2.1] ∎

## Source note

This is a consequence of the full inherited global-semiconvexity assumptions, not an added hypothesis restricting the approved claim. Chizat–Bach Assumptions 3.4 alone do not imply the global semiconvexity in their Assumptions 2.1: on $\Theta=[-1,1]$, take $\varphi=0$, $R=0$, and $W(\theta)=2+\cos(\pi\theta)$. These satisfy bounded $C^{1,1}$, positivity, Neumann and dense-regular-value conditions, but $\partial^2_{\theta\theta}V(s,0)=-s\pi^2$ for $s>0$, ruling out any global lower Hessian bound. This diagnoses that source implication; the locally proved result retains the actual full library hypotheses.
