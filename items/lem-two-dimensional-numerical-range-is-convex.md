---
id: lem-two-dimensional-numerical-range-is-convex
kind: lemma
title: Two dimensional numerical range is convex
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-numerical-range-and-numerical-radius, def-countable-choice, def-inner-product-space, def-hilbert-space, thm-jordan-von-neumann-polarization]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Joel H. Shapiro, Notes on the Numerical Range, §5, PDF pp.11–15"
      url: "https://www.joelshapiro.org/Pubvit/Downloads/NumRangeNotes/numrange_notes.pdf"
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, §5.3, printed pp.235–245"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
---

## Statement

Assume Countable Choice. The numerical range of the compression of an operator to any complex subspace of dimension at most two is convex.

## Facts & Assumptions

[A1] For a nonzero complex Hilbert space $H$ and $T\in\mathcal B(H)$ the numerical range is $W(T)=\{\langle Tx,x\rangle:\|x\|=1\}$ ([[def-numerical-range-and-numerical-radius]]).

[A2] On $\mathbb C^2$ the pairing is $\langle x,y\rangle=x_1\overline{y_1}+x_2\overline{y_2}$ with the induced norm, and a linear operator is given by a $2\times2$ matrix acting on column vectors ([[def-hilbert-space]], [[def-inner-product-space]]).

[A3] A real-linear map $L:\mathbb R^3\to\mathbb R^2$ with nontrivial kernel satisfies $L(S^2)=L(\bar B^3)$, where $S^2$ is the unit sphere and $\bar B^3$ the closed unit ball of the Euclidean norm: for $r\in\bar B^3$ and $0\ne k\in\ker L$ the quadratic $t\mapsto\|r+tk\|^2$ attains the value $1$, so $r+tk\in S^2$ with $L(r+tk)=L(r)$ ([[thm-jordan-von-neumann-polarization]] for the Euclidean inner product of the coordinate space).

[A4] Countable Choice is the hypothesis of the Hilbert-space suppliers used here ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

**Given:** A complex Hilbert space $H$, a complex subspace $V\subseteq H$ with $\dim V\le2$, a bounded operator $T$ on $H$ and the compression $A:=P_VT|_V$ of $T$ to $V$.

1.1 The numerical range of the compression depends only on $A$ and equals $\{\langle Ax,x\rangle:x\in V,\ \|x\|=1\}$, since $P_V$ is the identity on $V$; if $\dim V\le1$ this set is a single scalar and is convex. [A1, A2, A4, algebra]

1.2 If $\dim V=2$, choose an orthonormal basis of $V$ and write $A=\begin{pmatrix}a&b\\c&d\end{pmatrix}$; for a unit vector $x=(x_1,x_2)$ direct expansion gives $\langle Ax,x\rangle=\tfrac12(a+d)+\tfrac12\bigl((a-d)t+(b+c)s+i(c-b)u\bigr)$ with $t=|x_1|^2-|x_2|^2$, $s=2\operatorname{Re}(x_1\overline{x_2})$, $u=2\operatorname{Im}(x_1\overline{x_2})$, and the achievable triples $(s,u,t)$ are exactly the unit sphere $S^2\subseteq\mathbb R^3$. [A2, algebra]

2.1 In the notation of the expansion, the assignment $L(s,u,t):=\tfrac12((a-d)t+(b+c)s+i(c-b)u)$ is real-linear from $\mathbb R^3$ to $\mathbb C\cong\mathbb R^2$, so its kernel is nontrivial and $L(S^2)=L(\bar B^3)$ is a convex subset of $\mathbb C$; hence $W(A)$ is the affine image $\tfrac12(a+d)+L(S^2)$ and is convex. [step 1.2, A3, algebra]

3.1 Both cases $\dim V\le1$ and $\dim V=2$ give a convex numerical range, which is the assertion. [step 1.1, step 2.1] ∎
