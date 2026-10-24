---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/thm-shared-parameter-backpropagation-gradient-formula.json
  precheck: pass
id: thm-shared-parameter-backpropagation-gradient-formula
kind: theorem
title: "Reverse accumulation sums gradients over shared parameter uses"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps: [alg-backpropagation-through-shared-parameter-recurrence, def-finite-straight-line-computational-program, thm-chain-rule-for-total-derivatives, thm-reverse-mode-computes-gradient]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Atılım Güneş Baydin, Barak A. Pearlmutter, Alexey Andreyevich Radul, and Jeffrey Mark Siskind, Automatic Differentiation in Machine Learning: a Survey, §3.2"
      url: "https://jmlr.org/papers/volume18/17-468/17-468.pdf"
    - title: "MIT OpenCourseWare 18.S096, Matrix Calculus for Machine Learning and Beyond, Lecture 5 Part 3, §§8.3–8.4"
      url: "https://ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/mit18_s096iap23_lec08.pdf"
---

## Statement

Let $p,q\ge1$, let $\Theta\subseteq\mathbb R^p$ and $H\subseteq\mathbb R^q$ be open, and let $T$ be a nonnegative integer. Suppose $h_0:\Theta\to H$, $\Phi_t:\Theta\times H\to H$ for $1\le t\le T$, and $\ell:\Theta\times H\to\mathbb R$ are continuously differentiable on open domains containing the trajectory at $\theta\in\Theta$. A continuously differentiable map is totally differentiable at each point and has a derivative matrix continuous on its domain. Define $h_0=h_0(\theta)$, $h_t=\Phi_t(\theta,h_{t-1})$, and $J(\theta)=\ell(\theta,h_T)$. Write $A_t=D_\theta\Phi_t(\theta,h_{t-1})$ and $B_t=D_h\Phi_t(\theta,h_{t-1})$, with each partial derivative holding the other argument fixed. Set $\lambda_T=(D_h\ell(\theta,h_T))^T$ and, in descending order, $\lambda_{t-1}=B_t^T\lambda_t$. Then the backpropagation algorithm returns $J(\theta)$ and

$$\nabla_\theta J(\theta)=(D_\theta\ell(\theta,h_T))^T+\sum_{t=1}^{T}A_t^T\lambda_t+(Dh_0(\theta))^T\lambda_0,$$

where the sum is empty when $T=0$. The statement also applies when every primitive is evaluated on one fixed strict $C^1$ branch; it makes no assertion at a branch boundary.

## Facts & Assumptions

**Given:** The finite recurrence, its open domains, the parameter $\theta$, the fixed strict branch when maps are piecewise-$C^1$, and the scalar objective $J$.

[F1] [[def-finite-straight-line-computational-program]]: a finite topologically ordered program has a scalar output, and repeated parent slots are separate uses in its dependency graph.

[F2] [[alg-backpropagation-through-shared-parameter-recurrence]]: the forward pass computes $h_0,\ldots,h_T$; the reverse pass initializes the loss cotangent, adds each transition's parameter pullback to the same parameter accumulator, propagates the state cotangent backward, and finally pulls back through $h_0$.

[F3] [[thm-reverse-mode-computes-gradient]]: on a finite $C^1$ program and fixed strict branch, reverse mode returns the exact derivative transpose of its scalar output.

[F4] [[thm-chain-rule-for-total-derivatives]]: for totally differentiable finite-dimensional maps, the total derivative of a composition is the ordered composition of their total derivatives.

## Proof

**Proof technique:** identify the recurrence with its finite unrolling, then apply the chain rule backward.

1.1 Since $T$ is finite, the initial map, $T$ transition evaluations, and scalar loss form a finite program whose one parameter input $\theta$ is used at each transition and at the loss. Each map is $C^1$ on an open domain containing the trajectory, so repeated application of [F4] makes $J$ differentiable there; on a fixed strict branch the same conclusion holds branchwise. [F1, F4, given, construct]

2.1 The algorithm's primal pass evaluates this unrolled program. Its reverse pass seeds the loss, visits transitions in descending order, and sends each transition's parameter pullback to the same $\theta$ input while sending its state pullback to $h_{t-1}$; the initial-state pullback is then added at $\theta$. This is the reverse sweep on the finite graph in [F1], so [F3] gives the exact gradient of $J$. [F1, F2, F3, step 1.1, algebra]

2.2 The terminal state's cotangent is $\lambda_T=(D_h\ell)^T$. At transition $t$, the chain rule gives the cotangent at $h_{t-1}$ as $B_t^T\lambda_t$ and adds $A_t^T\lambda_t$ to the derivative with respect to the shared parameter while $h_{t-1}$ is held fixed. Descending induction therefore gives the stated $\lambda_{t-1}$ recurrence and sums one parameter contribution for each of the $T$ transition uses. [F2, F4, step 1.1, algebra]

3.1 The loss's direct dependence on $\theta$ contributes $(D_\theta\ell)^T$, and the dependence of $h_0(\theta)$ contributes $(Dh_0)^T\lambda_0$. Adding these to the $T$ transition contributions from step 2.2 gives the displayed formula. If $T=0$, there are no transition terms and the same chain rule reduces $J(\theta)=\ell(\theta,h_0(\theta))$ to the two remaining terms. This is exactly the algorithm's return value and gradient. [F2, F4, step 2.2, algebra] ∎

## Remarks

For the illustrative case $T=2$, the upper graph shows the forward dependencies. Each arrow from the single $\theta$ input represents a separate use of the same parameter. The lower graph shows reverse accumulation: the initial-state pullback, the two transition parameter pullbacks, and the loss's direct parameter derivative all contribute to the one accumulator $g=\nabla_\theta J$. All derivatives are evaluated along the trajectory as in the statement.

```tikz
\begin{tikzpicture}[>=stealth]
  \node (theta) at (4,2) {$\theta$};
  \node[draw] (h0) at (0,0) {$h_0$};
  \node[draw] (h1) at (3,0) {$h_1$};
  \node[draw] (h2) at (6,0) {$h_2$};
  \node[draw] (loss) at (9,0) {$J$};
  \draw[->] (theta) -- (h0) node[midway,above left] {$h_0$};
  \draw[->] (theta) -- (h1);
  \draw[->] (theta) -- (h2);
  \draw[->] (theta) -- (loss);
  \draw[->] (h0) -- (h1) node[midway,below] {$\Phi_1$};
  \draw[->] (h1) -- (h2) node[midway,below] {$\Phi_2$};
  \draw[->] (h2) -- (loss) node[midway,below] {$\ell$};
  \node (l0) at (0,-2) {$\lambda_0$};
  \node (l1) at (4.5,-2) {$\lambda_1$};
  \node (l2) at (9,-2) {$\lambda_2=(D_h\ell)^T$};
  \draw[->] (l2) -- (l1) node[midway,above] {$B_2^T$};
  \draw[->] (l1) -- (l0) node[midway,above] {$B_1^T$};
  \node[draw] (g) at (4.5,-4.2) {$g=\nabla_\theta J$};
  \draw[->] (l0) -- (g) node[midway,below left] {$(Dh_0)^T\lambda_0$};
  \draw[->] (l1) -- (g) node[midway,right] {$A_1^T\lambda_1$};
  \draw[->] (l2) -- (g) node[midway,below right] {$A_2^T\lambda_2$};
  \node (direct) at (4.5,-5.7) {$(D_\theta\ell)^T$};
  \draw[->] (direct) -- (g);
\end{tikzpicture}
```

In the lower graph, arrows into $g$ mean addition of the displayed vectors, rather than composition of maps. Here $\lambda_t\in\mathbb R^q$, $B_t^T:\mathbb R^q\to\mathbb R^q$, and $A_t^T,(Dh_0)^T:\mathbb R^q\to\mathbb R^p$. For general $T$, there is one transition contribution $A_t^T\lambda_t$ for each $1\le t\le T$. When $T=0$, no transition or $B_t^T$ arrow remains: $\lambda_0=(D_h\ell)^T$ and only the direct loss term and $(Dh_0)^T\lambda_0$ enter $g$. This illustration does not replace or enter the chain-rule proof above.

