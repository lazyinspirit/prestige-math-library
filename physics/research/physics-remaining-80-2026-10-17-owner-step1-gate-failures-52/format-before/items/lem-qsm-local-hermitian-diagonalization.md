---
id: lem-qsm-local-hermitian-diagonalization
kind: lemma
title: Finite Hermitian diagonalization
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 0
deps:
  - thm-heine-borel-rn
  - thm-extreme-value-metric
  - thm-of-square-roots
dependency_roles:
  thm-heine-borel-rn: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  thm-of-square-roots: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information, §2.1.2
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
    - title: John Preskill, Quantum Computation, Chapter 2, §2.3
      url: https://www.preskill.caltech.edu/ph219/chap2_15.pdf
---

## Statement

For every integer $d\ge1$ and Hermitian matrix $A\in M_d(\mathbb C)$, there is
an orthonormal basis of $\mathbb C^d$ consisting of eigenvectors of $A$, and
all eigenvalues are real. If in addition $x^*Ax\ge0$ for every $x\in\mathbb
C^d$, every eigenvalue is nonnegative and the matrix $A^{1/2}$ obtained by
replacing each eigenvalue by its nonnegative square root is well defined.

## Facts & Assumptions

**Given:** An integer $d\ge1$ and a Hermitian matrix $A\in M_d(\mathbb C)$;
for the positivity conclusion, also assume $x^*Ax\ge0$ for every $x$.

[F1] [[thm-heine-borel-rn]]: every closed bounded subset of $\mathbb R^n$,
$n\ge1$, is compact.

[F2] [[thm-extreme-value-metric]]: a continuous real function on a nonempty
compact metric space attains its maximum.

[F3] [[thm-of-square-roots]]: every nonnegative real number has a unique
nonnegative square root.

**Proof technique:** Rayleigh maximization and induction on $d$.

## Proof

1.1 Identify $\mathbb C^d$ with $\mathbb R^{2d}$ by real and imaginary
coordinates. Its unit sphere is a closed bounded subset and is nonempty
because $d\ge1$; it is compact by [F1]. [given, F1, algebra]

1.2 The Rayleigh function $f(x)=x^*Ax$ is real on the unit sphere, since
$A=A^*$, and is continuous because each coordinate of $f$ is a finite
polynomial in the real and imaginary coordinates of $x$. By [F2] it has a
maximizer $u$ with $u^*u=1$. [given, F2, step 1.1]

2.1 Fix $w$ with $u^*w=0$ and let
$g(t)=(u+tw)^*A(u+tw)/(u+tw)^*(u+tw)$ for real $t$. The denominator is
$1+t^2w^*w>0$, so $g$ is differentiable near $0$; maximality of $u$ gives
$g'(0)=0$. Expanding numerator and denominator gives
$g'(0)=2\operatorname{Re}(w^*Au)$, hence the real part of $w^*Au$ is zero.
[step 1.2, algebra]

2.2 Apply step 2.1 with $iw$ in place of $w$. Since $(iw)^*Au=-i\,w^*Au$,
its real part is the imaginary part of $w^*Au$; therefore $w^*Au=0$ for
every $w\perp u$. Decompose $Au=(u^*Au)u+w_0$ with $w_0\perp u$; taking
$w=w_0$ yields $w_0^*Au=\|w_0\|^2=0$. Thus $Au=\lambda u$, where
$\lambda=u^*Au\in\mathbb R$. [step 2.1, algebra]

3.1 If $x\perp u$, then $u^*Ax=(Au)^*x=\lambda u^*x=0$, so $u^\perp$ is
invariant under $A$ and the restriction of $A$ to it is Hermitian. For $d=1$
the standard unit vector is already an eigenbasis. For $d>1$, induction on
the dimension supplies an orthonormal eigenbasis on $u^\perp$; adjoining
$u$ gives one for $\mathbb C^d$. [step 2.2, algebra]

4.1 For any unit eigenvector $v$ with eigenvalue $\mu$, positivity gives
$\mu=v^*Av\ge0$. By [F3], each such $\mu$ has a unique nonnegative square
root. In the eigenbasis from step 3.1, define $A^{1/2}$ to be diagonal with
entries $\sqrt{\mu}$. This matrix is nonnegative and squares to $A$; it is
independent of choices inside repeated eigenspaces because the same scalar
is assigned to every vector in that eigenspace. [given, F3, step 3.1,
algebra] ∎
