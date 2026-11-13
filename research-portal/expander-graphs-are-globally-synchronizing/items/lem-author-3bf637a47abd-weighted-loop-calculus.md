---
id: lem-author-3bf637a47abd-weighted-loop-calculus
kind: lemma
title: Loop removal in the weighted Kuramoto calculus
domain: mathematics
status: draft
origin: pipeline
deps:
  - def-expander-prereq-loop-compatible-networks
  - prop-expander-prereq-pair-potential-calculus
  - def-expander-prereq-phasor-calculus
dependency_roles:
  def-expander-prereq-loop-compatible-networks: mathematical-premise
  prop-expander-prereq-pair-potential-calculus: mathematical-premise
  def-expander-prereq-phasor-calculus: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 2
---

## Statement

Let $A$ be a network on a nonempty finite set $V$, with $W=A-\operatorname{diag}(A_{xx})$, row degrees $d_A(x)$ and $d_W(x)$, and Laplacians $L_A$ and $L_W$, as in [[def-expander-prereq-loop-compatible-networks]]. For phases $\theta\in\mathbb R^V$ define $E_A(\theta)=\frac12\sum_{x,y}A_{xy}(1-\cos(\theta_x-\theta_y))$ and $F_A(\theta)_x=-\sum_yA_{xy}\sin(\theta_x-\theta_y)$. Then $E_A=E_W$, $F_A=F_W=-\nabla E_A$, and $L_A=L_W$. Moreover $f^T\nabla^2E_A(\theta)f=\frac12\sum_{x,y}A_{xy}\cos(\theta_x-\theta_y)(f_x-f_y)^2$ for every real $f$. Thus arbitrary diagonal weights affect row degrees but none of these energy or dynamical expressions.

## Facts & Assumptions

[F1] The network degree and Laplacian are row sum and degree matrix minus adjacency; removing the diagonal leaves the Laplacian unchanged ([[def-expander-prereq-loop-compatible-networks]]).

[F2] The gradient and Hessian of a symmetric periodic pair potential are given by the finite pair-potential formulas ([[prop-expander-prereq-pair-potential-calculus]]).

[F3] For real angles, $z(t)=\cos t+i\sin t$ has modulus one and satisfies $z(u-v)=z(u)\overline{z(v)}$. Also $\sin'(t)=\cos t$ and $\cos'(t)=-\sin t$; these identities and derivatives are $2\pi$-periodic ([[def-expander-prereq-phasor-calculus]]).

## Proof

**Given:** The data in the Statement.

**Goal:** Establish the stated conclusions.

1.1 Taking $u=v$ in [F3] gives $z(0)=|z(u)|^2=1$, hence $\cos 0=1$ and $\sin 0=0$. For $x=y$, both $1-\cos(\theta_x-\theta_y)$ and $\sin(\theta_x-\theta_y)$ vanish. Deleting exactly those summands therefore leaves $E_A$ and $F_A$ unchanged. Also $d_A(x)=d_W(x)+A_{xx}$, so the identical diagonal correction in the degree matrix and in $A$ cancels in the Laplacian, giving $L_A=L_W$. [F1, F3, algebra]

2.1 Apply [F2] with $v(t)=1-\cos t$, whose derivatives are $v\prime(t)=\sin t$ and $v\prime\prime(t)=\cos t$. By [F3] and step 1.1, $z(-t)=z(0)\overline{z(t)}=\overline{z(t)}$, so equality of real parts gives $\cos(-t)=\cos t$. Thus $v$ is even. The derivative identities in [F3] make $v$ twice continuously differentiable, and its periodicity follows from [F3]. The resulting gradient is $-F_A$, and its Hessian quadratic form is the displayed formula. Every diagonal Hessian term vanishes because $f_x-f_x=0$. This proves all assertions. [F2, F3, step 1.1, algebra] ∎
