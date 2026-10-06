---
id: lem-the-norm-of-a-positive-element-is-the-supremum-of-state-values
kind: lemma
title: The norm of a positive element is the supremum of its state values
deps:
  - def-state-on-a-c-star-algebra
  - def-c-star-algebra
  - def-self-adjoint-positive-unitary-and-normal-elements-of-a-c-star-algebra
  - lem-c-star-positive-calculus-and-order-estimates
  - thm-minimal-c-star-unitization
  - thm-complex-hahn-banach-norm-preserving-extension
  - def-axiom-of-choice
dependency_level: 1
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
axiom_audit: "Assume AC, used for the norm-preserving Hahn-Banach extension and inherited from the calculus/unitization suppliers; the supremum computations add no further choice."
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 8, §8.A: states and positive elements of a C*-algebra"
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix C, §C.5: the group-case description of pure positive type functions by irreducible GNS representations"
status: draft
origin: pipeline
---
## Statement

Assume the Axiom of Choice. Let $A$ be a C\*-algebra and let $a\in A$ with
$a\ge0$ ([[def-self-adjoint-positive-unitary-and-normal-elements-of-a-c-star-algebra]],
[[lem-c-star-positive-calculus-and-order-estimates]]). Then
$$\|a\|=\sup\{\omega(a):\omega\text{ a state of }A\}$$
([[def-state-on-a-c-star-algebra]]). For the zero algebra the supremum of the
empty subset of $[0,\infty)$ is understood as $0$. No state-value formula for
arbitrary non-self-adjoint elements is asserted.

## Facts & Assumptions

**Given:** AC; a C\*-algebra $A$ with ambient unital C\*-algebra $B$ ($B=A$ if $A$ is unital, $B=A^+$ otherwise); an element $a\in A$ with $a\ge0$.

[F1] Positivity and order toolkit: $a\ge0$ has $\sigma(a)\subseteq[0,\infty)$ and $\|a\|=\max\sigma(a)$; for self-adjoint $h$ and continuous $f$, the calculus element $f(h)\in C^*(1,h)\subseteq B$ satisfies $\|f(h)\|=\sup_{\sigma(h)}|f|$ and $\sigma(f(h))=f(\sigma(h))$; conjugation preserves positivity; the unitization is a unital C\*-algebra containing $A$ ([[lem-c-star-positive-calculus-and-order-estimates]], [[thm-minimal-c-star-unitization]]).

[F2] A functional $\omega$ on $A$ is positive when $\omega(x^*x)\ge0$ for all $x$, and a state when moreover $\|\omega\|=1$; every state satisfies $|\omega(x)|\le\|x\|$ ([[def-state-on-a-c-star-algebra]]).

[F3] Under AC every bounded linear functional on a subspace of a normed space has a norm-preserving extension ([[thm-complex-hahn-banach-norm-preserving-extension]]).

## Proof

**Proof technique:** direct.

**Given:** AC, a C\*-algebra $A$ with ambient unital C\*-algebra $B$, and $a\in A$ with $a\ge0$; for the main argument assume $a\ne0$.

1.1 Put $\lambda_0:=\|a\|=\max\sigma(a)$, so $\lambda_0\in\sigma(a)$ by [F1], and consider the closed unital $\ast$-subalgebra $C^*(1,a)\subseteq B$. Evaluation at $\lambda_0$, $\mathrm{ev}(g):=g(\lambda_0)$ for $g\in C^*(1,a)$ identified via the calculus with continuous functions on $\sigma(a)$, is a linear functional with $\mathrm{ev}(1)=1$, $\mathrm{ev}(a)=\lambda_0=\|a\|$ and $|\mathrm{ev}(g)|\le\|g\|$, because $\|g\|=\sup_{\sigma(a)}|g|$ by [F1]; hence $\|\mathrm{ev}\|=1=\mathrm{ev}(1)$. By [F3] it extends to a bounded linear functional $f$ on $B$ with $\|f\|=1$. Also, for every state $\omega$ and every $x$, $|\omega(x)|\le\|x\|$ by [F2], so $\omega(a)\le\|a\|$ for the positive element $a$; this will give the upper bound. [F1, F2, F3]

2.1 The functional $f$ is positive on $B$. Let $h\in B$ be self-adjoint. For real $t$ the element $e^{ith}$ has modulus one in the calculus, $|e^{ith}|=1$ on $\sigma(h)$, so $\sigma(e^{ith})\subseteq\mathbb T$ and $\|e^{ith}\|=1$ by [F1]; hence $|f(e^{ith})|\le1$. Writing $f(h)=x+iy$ with $x,y\in\mathbb R$, linearity and the norm convergence of the exponential series give $f(e^{ith})=1+itf(h)+O(t^2)$ as $t\to0$; the real part is $1-ty+O(t^2)$, and $1-ty+O(t^2)\le|f(e^{ith})|\le1$ yields $y=0$ after letting $t\to0$ through positive and negative values. Thus $f$ is real on self-adjoint elements. If now $0\le b\le1$ in $B$, then $\|1-b\|\le1$ by [F1], so $|1-f(b)|=|f(1-b)|\le1$, and since $f(b)$ is real this gives $f(b)\ge0$; rescaling any positive $b\ne0$ to $b/\|b\|$ shows $f(b)\ge0$, and $f(0)=0$. [F1, step 1.1]

3.1 Restrict $f$ to $A$: the restriction $\omega:=f|_A$ is positive because $x^*x\ge0$ in $A$ and $f$ is positive on $B$ by step 2.1; and $\|\omega\|\le\|f\|=1$ while $\|\omega\|\ge|f(a)|/\|a\|=1$ because $a\ne0$ and $f(a)=\mathrm{ev}(a)=\|a\|$. Hence $\omega$ is a state of $A$ with $\omega(a)=\|a\|$. [F2, step 1.1, step 2.1]

4.1 Therefore $\sup\{\omega(a):\omega$ a state$\}\ge\omega(a)=\|a\|$, while step 1.1 gives the reverse inequality for every state, so the supremum equals $\|a\|$. If $a=0$ and $A\ne\{0\}$, choose $x\ne0$ and apply step 3.1 to $x^*x\ne0$ (using $\|x^*x\|=\|x\|^2\ne0$) to obtain a state, and every state vanishes at $0$, so the supremum is $0=\|0\|$. If $A=\{0\}$ the set of state values of $0$ is empty and the stated empty-supremum convention gives $0=\|0\|$. [step 1.1, step 3.1]

5.1 The Axiom of Choice is used for the norm-preserving Hahn–Banach extension of step 1.1 and is inherited from the calculus and unitization suppliers; the positivity and supremum arguments use no further choice ([[def-axiom-of-choice]]). [given, F3] ∎ 