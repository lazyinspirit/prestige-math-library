---
id: ex-duplicate-inputs-make-ntk-gram-singular
kind: example
title: Duplicate inputs make the unquotiented NTK Gram matrix singular
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 6
deps:
  - def-neural-tangent-kernel
  - thm-least-squares-ntk-mode-decay
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Arthur Jacot, Franck Gabriel, and Clément Hongler, Neural Tangent Kernel: Convergence and Generalization in Neural Networks"
      url: "https://arxiv.org/pdf/1806.07572"
      locator: "§5, printed pp. 5–6; finite-data least-squares flow and zero kernel modes"
---

## Example

Let $X$ be a set, let $k:X\times X\to\mathbb R$ be a symmetric positive-semidefinite kernel, fix $x\in X$, and use two observations at that same input. Their Gram matrix is $K=\kappa\begin{pmatrix}1&1\\1&1\end{pmatrix}$, where $\kappa=k(x,x)\ge0$. For labels $y=(1,-1)^T$ and initial prediction $f_0=(0,0)^T$, consider the two-point empirical least-squares kernel flow

$$\dot f(t)=-\frac12K(f(t)-y),\qquad f(0)=f_0.$$

The vector $v_-=(1,-1)^T/\sqrt2$ is a zero-eigenvalue mode of $K$, and the residual component in this mode remains unchanged, so the flow cannot reach $y$. The unquotiented Gram matrix has rank at most one. In particular, assume AC, fix $n_0\ge1$, $L\ge2$, $\beta>0$, and a globally Lipschitz nonpolynomial activation $\sigma:\mathbb R\to\mathbb R$, and use the width-normalized fully connected network with fan-in scaling $1/\sqrt{n_\ell}$, bias scale $\beta$, scalar output, and independent standard-normal initialization. For any $x\in S^{n_0-1}$, its sequential hidden-width limit kernel $K_\infty$ has $K_\infty(x,x)>0$ by the sphere-positivity proposition, but the Gram matrix for two observations at $x$ is still singular. This does not conflict with that proposition, which asserts strict positivity only for finite lists of pairwise distinct sphere points.

## Example references

[Jacot, Gabriel, and Hongler, §5, finite-data kernel flow and zero modes](https://arxiv.org/pdf/1806.07572)

[[def-neural-tangent-kernel|Repeated inputs give repeated rows and columns in a scalar kernel Gram matrix]]

[[thm-least-squares-ntk-mode-decay|Zero-eigenvalue residual modes stay constant]]

[[prop-ntk-positive-definite-on-the-sphere|The sequential limiting NTK is strictly positive definite on distinct sphere inputs]]

## Facts & Assumptions

**Given:** A set $X$, a symmetric positive-semidefinite scalar kernel $k:X\times X\to\mathbb R$, and two identical input observations at $x\in X$, so $\kappa=k(x,x)\ge0$; labels $(1,-1)^T$; initial prediction $(0,0)^T$; and, for the sphere comparison, AC, $n_0\ge1$, $L\ge2$, $\beta>0$, a globally Lipschitz nonpolynomial activation, the stated width-normalized scalar-output network, and $x\in S^{n_0-1}$.

[F1] A kernel Gram matrix on an input list has entries given by evaluating the kernel at each ordered input pair; in particular, repeating the input makes all four entries equal to $k(x,x)$.

[F2] For the source-normalized limiting NTK flow, least-squares residual components in zero-eigenvalue modes remain constant ([[thm-least-squares-ntk-mode-decay]]); the more general two-point claim here is checked directly below.

## Verification
**Proof technique:** compute the two-by-two Gram eigenvectors and inspect the inconsistent target component.

1.1 Repeating the input makes every matrix entry equal to $\kappa$, so $K=\kappa\begin{pmatrix}1&1\\1&1\end{pmatrix}$. Multiplication gives $Kv_-=0$ for $v_-=(1,-1)^T/\sqrt2$. Thus $K$ has rank at most one and the target $y=(1,-1)^T=\sqrt2v_-$ lies entirely in its nullspace. [F1, given, algebra]

2.1 Set $r_-(t)=v_-^T(f(t)-y)$. The flow equation, symmetry of $K$, and $Kv_-=0$ give $\dot r_-(t)=-\frac12v_-^TK(f(t)-y)=-\frac12(Kv_-)^T(f(t)-y)=0$. Since $r_-(0)=-\sqrt2$, this residual component stays nonzero for every $t\ge0$, so $f(t)\ne y$ at every finite time and the flow cannot converge to $y$. This is consistent with the sphere proposition because its strictness conclusion requires pairwise distinct inputs. [given, step 1.1, algebra]
