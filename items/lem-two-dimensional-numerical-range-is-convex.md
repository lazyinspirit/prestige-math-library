---
id: lem-two-dimensional-numerical-range-is-convex
kind: lemma
title: Two dimensional numerical range is convex
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-numerical-range-and-numerical-radius, def-countable-choice, def-inner-product-space, def-hilbert-space, thm-gram-schmidt-orthonormalisation, thm-rank-nullity, thm-of-square-roots, cor-inner-product-induces-a-norm]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-22
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
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

[A1] On a nonzero complex Hilbert space the numerical range of $A$ is $\{\langle Ax,x\rangle:\|x\|=1\}$. On the zero space the library convention is $W(0)=\{0\}$ ([[def-numerical-range-and-numerical-radius]]).

[A2] Finite Gram–Schmidt supplies an orthonormal basis of a finite-dimensional subspace ([[thm-gram-schmidt-orthonormalisation]]). Expanding the first-linear inner product in such a basis gives $\langle x,y\rangle=\sum_{j<r}x_j\overline{y_j}$ and $\|x\|^2=\sum_{j<r}|x_j|^2$ ([[def-inner-product-space]], [[cor-inner-product-induces-a-norm]]). For that basis define $Py=\sum_{j<r}\langle y,e_j\rangle e_j$. Direct expansion gives $P^2=P$, $\operatorname{ran}P=V$, $y-Py\perp V$ and $\|y\|^2=\|Py\|^2+\|y-Py\|^2$. Thus $P$ is linear and contractive, and $V=\ker(I-P)$ is closed: if $y\notin V$, the ball of radius $\|y-Py\|/4$ about $y$ misses the kernel since $I-P$ has bound $2$. A Cauchy sequence in $V$ converges in $H$ and its limit stays in $V$, so $V$ is Hilbert ([[def-hilbert-space]]). This constructs its orthogonal projection, including $P=0$ when $r=0$.

[A3] Rank–nullity gives a nontrivial kernel for a real-linear map $\mathbb R^3\to\mathbb R^2$, because its image has dimension at most two ([[thm-rank-nullity]]). Nonnegative real numbers have nonnegative square roots ([[thm-of-square-roots]]). The Euclidean norm is the norm induced by the coordinate inner product and satisfies the triangle inequality ([[cor-inner-product-induces-a-norm]]).

[A4] Countable Choice remains the declared page hypothesis ([[def-countable-choice]]); the finite coordinate construction below requires no additional choice.

## Proof

**Proof technique:** direct.

**Given:** A complex Hilbert space $H$, a complex subspace $V\subseteq H$ with $\dim V\le2$, a bounded operator $T$ on $H$ and the compression $A:=P_VT|_V$ of $T$ to $V$.

1.1 The projection and Hilbert-space structure on $V$ are supplied by [A2], and $\|Ax\|\le\|T\|\|x\|$. If $\dim V=0$, then $W(A)=\{0\}$ by convention and is convex. If $\dim V=1$, write $Ae=ae$ for a unit basis vector; every unit vector is $ze$ with $|z|=1$, so $\langle Aze,ze\rangle=a$ and $W(A)=\{a\}$ is convex. [A1, A2, A4, algebra]

1.2 If $\dim V=2$, take an orthonormal basis and write the columns of $A$ as the coordinates of its two basis images, giving the matrix $\begin{pmatrix}a&b\\c&d\end{pmatrix}$. For a unit vector with coordinates $(x_1,x_2)$, expansion gives $\langle Ax,x\rangle=\tfrac12(a+d)+\tfrac12((a-d)t+(b+c)s+i(c-b)u)$, where $t=|x_1|^2-|x_2|^2$, $s=2\operatorname{Re}(x_1\overline{x_2})$ and $u=2\operatorname{Im}(x_1\overline{x_2})$. Indeed $s^2+u^2+t^2=(|x_1|^2+|x_2|^2)^2=1$. Conversely, for a real triple on this sphere with $t>-1$, set $x_1=\sqrt{(1+t)/2}$ and $x_2=(s-iu)/(2x_1)$. Then $|x_2|^2=(1-t)/2$ and $x_1\overline{x_2}=(s+iu)/2$, giving the required triple and a unit vector. If $t=-1$, then $s=u=0$ and $(x_1,x_2)=(0,1)$ works. Thus the attainable triples are exactly $S^2$. [A2, A3, algebra]

2.1 Define the real-linear map $L(s,u,t)=\tfrac12((a-d)t+(b+c)s+i(c-b)u)$ into $\mathbb C\cong\mathbb R^2$. Choose $0\ne k\in\ker L$. For any $r$ in the closed Euclidean unit ball, let $a_0=\|k\|^2>0$, $b_0=\langle r,k\rangle\in\mathbb R$, $c_0=\|r\|^2\le1$ and $v=(-b_0+\sqrt{b_0^2+a_0(1-c_0)})/a_0$. Expanding yields $\|r+vk\|^2=c_0+2b_0v+a_0v^2=1$ and $L(r+vk)=L(r)$. Hence $L(\bar B^3)\subseteq L(S^2)$; the reverse inclusion follows from $S^2\subseteq\bar B^3$. The ball is convex by the triangle inequality, and linearity shows its image is convex. By the coordinate formula, $W(A)=\tfrac12(a+d)+L(S^2)=\tfrac12(a+d)+L(\bar B^3)$, which is convex. [step 1.2, A3, algebra]

3.1 The cases $\dim V=0$, $\dim V=1$ and $\dim V=2$ all give a convex numerical range. [step 1.1, step 2.1] ∎
