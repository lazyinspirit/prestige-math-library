---
id: alg-finite-budget-low-rank-adaptation
kind: algorithm
title: "Finite-budget low-rank adaptation by gradient descent"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-low-rank-adaptation-of-a-linear-layer
  - def-finite-straight-line-computational-program
  - alg-reverse-mode-automatic-differentiation
justified_by: [thm-low-rank-adapter-merging-and-gradients]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Edward Hu et al., LoRA: Low-Rank Adaptation of Large Language Models, arXiv:2106.09685v2, §4.1"
      url: "https://arxiv.org/pdf/2106.09685"
    - title: "MIT OpenCourseWare 18.S096, Matrix Calculus for Machine Learning and Beyond, Lecture 5 Part 3, §§8.3–8.4"
      url: "https://ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/mit18_s096iap23_lec08.pdf"
---

## Definition

Fix positive integers $d,k,n$, an integer $1\le r\le\min(d,k)$, a frozen matrix $W_0\in\mathbb R^{d\times k}$, a nonzero scale $c\in\mathbb R$, a finite ordered data list $(x_i,y_i)_{i=1}^n$ with $x_i\in\mathbb R^k$, and, for each data entry, a loss program $\ell_i$ that returns a real scalar wherever its primitive calls are defined. Let $T\ge0$ be a finite integer, let $I_0,\ldots,I_{T-1}$ be fixed finite nonempty ordered lists of indices in $\{1,\ldots,n\}$ (repeated indices are allowed), let $\eta_0,\ldots,\eta_{T-1}\ge0$ be finite step sizes, and supply an initial matrix $A_0\in\mathbb R^{r\times k}$. The procedure has no dropout or random initialization; any random initialization must be sampled externally and supplied as $A_0$. Set $B_0=0\in\mathbb R^{d\times r}$.

Represent each loss evaluation by a specified finite real-arithmetic program with a scalar output. Each primitive is continuously differentiable on a declared open domain or is piecewise continuously differentiable, with finitely many open branch regions, a continuously differentiable formula on each region, and a separately specified primal boundary value when one is defined. Here $C^1$ means totally differentiable with continuous derivative. Check admissibility at the current factors on each step; a strict branch used at one step need not be the branch used at another.

$$L_t(A,B)=\frac{1}{|I_t|}\sum_{i\in I_t}\ell_i\!\left((W_0+cBA)x_i\right)$$

Starting with $t=0$, perform the following finite loop while $t<T$:

1. Evaluate the displayed program at $(A_t,B_t)$, visiting its primitive calls in evaluation order. At the first call with no primal value, return `DOMAIN_ERROR` with the current factors and step index $t$. At the first defined piecewise primitive whose input lies on a branch boundary or has ambiguous branch selection, return `NONDIFFERENTIABLE` with the current factors and step index $t$. If every primitive call has a value and every piecewise primitive is on a unique strict branch, run reverse-mode automatic differentiation on this same scalar-output program at $(A_t,B_t)$, with the selected branch choices, with respect to the ordered list of all entries of $A_t$ followed by all entries of $B_t$, each matrix flattened row by row. If reverse mode returns either failure status, return it with the current factors and step index $t$. No factor update is made on a failure status.
2. If reverse mode returns gradients, reshape the first and second blocks into $G^A_t\in\mathbb R^{r\times k}$ and $G^B_t\in\mathbb R^{d\times r}$, respectively, and set

$$A_{t+1}=A_t-\eta_tG^A_t,\qquad B_{t+1}=B_t-\eta_tG^B_t.$$

   Increment $t$ by one.

After $T$ successful updates, return `SUCCESS`, the matrices $A_T,B_T$, and the merged weight $W_0+cB_TA_T$. At $T=0$ return the supplied $A_0$, zero $B_0$, and $W_0$ without evaluating a loss. This is a finite real-arithmetic procedure; it asserts no convergence, minimization, generalization, floating-point accuracy, speed, or memory guarantee.

## Definition references

[[def-low-rank-adaptation-of-a-linear-layer]]: the factor shapes, frozen base matrix, and updated matrix used here.

[[def-finite-straight-line-computational-program]]: finite ordered real-arithmetic graph, C1 primitive, admissible domain, and strict-branch conventions.

[[alg-reverse-mode-automatic-differentiation]]: scalar-output reverse sweep and its domain-error and branch-boundary statuses.

[Hu et al., §4.1: frozen base weights, trainable factors, and merged weights](https://arxiv.org/pdf/2106.09685)

[MIT OCW, §§8.3–8.4: reverse-mode accumulation for finite scalar objectives](https://ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/mit18_s096iap23_lec08.pdf)
