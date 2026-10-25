---
id: lem-parabolic-hilbert-bnb-criterion
kind: lemma
title: The Hilbert-space Babuška–Nečas–Babuška criterion
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-countable-choice
  - def-hilbert-space
  - thm-orthogonal-decomposition-by-a-closed-subspace
  - thm-riesz-representation-for-hilbert-space
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Christian Clason, Introduction to Finite Element Methods, lecture notes
      url: https://arxiv.org/pdf/1709.08618v2.pdf
      locator: "Chapter 8, Theorem 8.1 and proof, PDF pp. 60–62: the BNB inf-sup, continuity, and injectivity criterion."
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-17}}
---

## Statement

Assume Countable Choice. Let $X$ and $Y$ be real Hilbert spaces and let
$b:X\times Y\to\mathbb R$ be a bounded bilinear form. Suppose there is
$\beta>0$ such that
$$\sup_{\|y\|_Y\le1}|b(x,y)|\ge\beta\|x\|_X\qquad(x\in X),$$
and the only $y\in Y$ satisfying $b(x,y)=0$ for every $x\in X$ is $y=0$.
Then, for every bounded linear functional $F:Y\to\mathbb R$, there is a
unique $x\in X$ such that $b(x,y)=F(y)$ for every $y\in Y$, and
$$\|x\|_X\le\beta^{-1}\|F\|_{Y^*},\qquad \|F\|_{Y^*}:=\sup_{\|y\|_Y\le1}|F(y)|.$$

## Facts & Assumptions

**Given:** Countable Choice, real Hilbert spaces $X,Y$, the bounded bilinear
form $b$, its stated inf-sup bound, and the trivial right kernel.

[F1] Every bounded real linear functional on a Hilbert space has a unique
Riesz representative with the same norm
([[thm-riesz-representation-for-hilbert-space]]).

[F2] A closed linear subspace of a Hilbert space and its orthogonal
complement give a direct decomposition of the whole space
([[thm-orthogonal-decomposition-by-a-closed-subspace]]).

[F3] A Hilbert space is complete in its norm ([[def-hilbert-space]]).

[A1] Countable Choice is the hypothesis of the Riesz representation and
orthogonal-decomposition suppliers ([[def-countable-choice]]).

## Proof

1.1 If $X=\{0\}$, the right-kernel hypothesis forces $Y=\{0\}$; the only $F\in Y^*$ is zero and $x=0$ is the unique solution. If $Y=\{0\}$ and $X\ne\{0\}$, the inf-sup hypothesis fails for any nonzero $x$, so no such instance satisfies the assumptions. Assume henceforth both spaces are nonzero. For each $x\in X$, the functional $y\mapsto b(x,y)$ is bounded and linear. By [F1], let $Sx\in Y$ be the unique vector satisfying $(Sx,y)_Y=b(x,y)$ for every $y\in Y$. Bilinearity and uniqueness make $S:X\to Y$ linear, and the Riesz norm identity gives $\|Sx\|_Y=\sup_{\|y\|_Y\le1}|b(x,y)|\le C_b\|x\|_X$, where $C_b$ is a continuity bound for $b$. [A1, F1, given, construct]

2.1 The inf-sup assumption gives $\|Sx\|_Y\ge\beta\|x\|_X$. Thus $S$ is injective. If $Sx_n\to y$ in $Y$, then $\|x_n-x_m\|_X\le\beta^{-1}\|Sx_n-Sx_m\|_Y$, so completeness of $X$ gives $x_n\to x$ for some $x\in X$. The bound in step 1.1 gives $Sx_n\to Sx$, hence $y=Sx$. Therefore $S(X)$ is closed. [F3, given, step 1.1, algebra]

3.1 If $y\in S(X)^\perp$, then $(Sx,y)_Y=b(x,y)=0$ for every $x\in X$; the right-kernel hypothesis gives $y=0$. Apply [F2] to the closed subspace $S(X)$. Its orthogonal complement is zero, so $Y=S(X)\oplus\{0\}=S(X)$; therefore $S$ is onto. [A1, F2, step 2.1, given]

4.1 For the given $F\in Y^*$, let $g\in Y$ be its Riesz representative, so $F(y)=(y,g)_Y$ and $\|g\|_Y=\|F\|_{Y^*}$. Surjectivity supplies $x\in X$ with $Sx=g$, whence $b(x,y)=(Sx,y)_Y=(g,y)_Y=(y,g)_Y=F(y)$ for all $y$, using symmetry of the real inner product. The lower bound $\beta\|x\|_X\le\|Sx\|_Y=\|F\|_{Y^*}$ proves the estimate and also uniqueness. [A1, F1, step 1.1, step 2.1, step 3.1, algebra] ∎