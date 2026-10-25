---
id: thm-directional-derivative-of-a-simple-positive-singular-value
kind: theorem
title: "If $\\sigma>0$ is a simple singular value with left and right singular vectors $u,v$, then its real directional derivative is $\\operatorname{Re}(u^*Hv)$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-real-frechet-derivative-on-real-and-complex-matrix-spaces,
       thm-singular-value-decomposition,
       cor-hermitian-simple-eigenpair-derivative-simplifications,
       thm-simple-eigenpair-branches-exist-locally-after-gauge-fixing]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Alan Edelman and Steven G. Johnson, Matrix Calculus for Machine Learning and Beyond"
      url: "https://ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/mit18_s096iap23_lec_full.pdf"
---

## Statement

Let $A$ be a matrix, let $\sigma>0$ be a simple singular value of $A$, and let
$u,v$ be corresponding unit left and right singular vectors, so
$Av=\sigma u$ and $A^\ast u=\sigma v$. Then the real directional derivative of
$\sigma$ in the direction $H$ is

$$D\sigma(A)[H]=\operatorname{Re}(u^\ast Hv).$$

## Facts & Assumptions

**Given:** A matrix $A$, a simple positive singular value $\sigma$, unit singular vectors $u,v$, and a perturbation direction $H$.

[L1] For a Hermitian simple eigenvalue, the directional derivative is $x^\ast B' x$ for the corresponding unit eigenvector ([[cor-hermitian-simple-eigenpair-derivative-simplifications]]).

[L2] A simple eigenvalue of a differentiable matrix path admits a local $C^1$ eigenvalue branch after gauge fixing ([[thm-simple-eigenpair-branches-exist-locally-after-gauge-fixing]]).

## Proof
**Proof technique:** direct.

1.1 Form the Hermitian block path $$B(t):=\begin{pmatrix}0&A+tH\\(A+tH)^\ast&0\end{pmatrix}.$$ Then $w=\frac1{\sqrt2}(u,v)^\mathsf T$ is a unit eigenvector of $B(0)$ with eigenvalue $\sigma$, because $$B(0)w=\frac1{\sqrt2}(Av,A^\ast u)^\mathsf T=\frac1{\sqrt2}(\sigma u,\sigma v)^\mathsf T=\sigma w.$$ If $B(0)(x,y)^\mathsf T=\sigma(x,y)^\mathsf T$, then $Ay=\sigma x$ and $A^\ast x=\sigma y$, so $A^\ast Ay=\sigma^2 y$. Since $\sigma$ is a simple positive singular value, the eigenspace of $A^\ast A$ for $\sigma^2$ is one-dimensional, and then $x=\sigma^{-1}Ay$ is determined by $y$. Hence $\sigma$ is a simple eigenvalue of the Hermitian matrix $B(0)$. [construct, algebra]

2.1 Because $t\mapsto B(t)$ is differentiable and step 1.1 shows that $\sigma$ is a simple eigenvalue of $B(0)$, [L2] gives a local $C^1$ eigenvalue branch through $\sigma$. The derivative of the block path is $$B'(0)=\begin{pmatrix}0&H\\H^\ast&0\end{pmatrix}.$$ Applying [L1] to this Hermitian simple eigenvalue branch gives $$D\sigma(A)[H]=w^\ast B'(0)w.$$ [L1, L2, step 1.1, algebra]

3.1 Expanding the quadratic form from step 2.1 gives $$D\sigma(A)[H]=\frac12(u^\ast Hv+v^\ast H^\ast u)=\operatorname{Re}(u^\ast Hv).$$ [step 2.1, algebra] ∎
