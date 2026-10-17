---
id: lem-bfgs-trace-determinant-potential-identities
kind: lemma
title: "Bfgs trace and determinant identities give a matrix potential inequality"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-bfgs-curvature-pair-and-update-formulas
  - lem-bfgs-updates-preserve-secant-symmetry-and-spd
  - def-euclidean-inner-product
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique
  - thm-determinant-multiplicative
  - thm-determinant-of-a-triangular-matrix
  - def-determinant-of-a-square-matrix
  - def-natural-logarithm
  - thm-logarithm-derivative-and-integral
proof_strategy: direct
axiom_use: "None beyond classical real analysis and finite-dimensional linear algebra supplied by the listed dependencies; no choice principle is used."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, 2nd ed."
      url: "https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf"
      locator: "Chapter 6 §6.4, equations (6.42)–(6.51), printed pp. 154–156 / PDF pp. 172–174."
    - title: "Dong C. Liu and Jorge Nocedal, On the limited memory BFGS method for large scale optimization"
      url: "https://people.sc.fsu.edu/~inavon/5420a/liu89limited.pdf"
      locator: "§6, trace and determinant relations (6.10)–(6.13), printed pp. 523–524 / PDF pp. 23–24."
---

## Statement

Let $B$ be SPD, $s\ne0$, and $y$ satisfy $d:=s^Ty>0$. Let $B^+$ be the Hessian update of [[def-bfgs-curvature-pair-and-update-formulas]]. Define
$$ m_s:=\frac{s^Ty}{\|s\|_2^2},\quad M_s:=\frac{\|y\|_2^2}{s^Ty},\quad q:=\frac{s^TBs}{\|s\|_2^2},\quad \eta:=\frac{s^TBs}{\|s\|_2\|Bs\|_2}. $$
Then $\eta>0$, $\eta\le1$, and
$$ \operatorname{tr}(B^+)=\operatorname{tr}(B)-\frac{\|Bs\|_2^2}{s^TBs} +\frac{\|y\|_2^2}{s^Ty}, \qquad \det(B^+)=\det(B)\frac{s^Ty}{s^TBs}. $$
The potential $\psi(B):=\operatorname{tr}(B)-\log\det(B)$ is well-defined and satisfies $\psi(B)\ge n$. With $h(t):=1-t+\log t$ for $t>0$, one has $h(t)\le0$, with equality exactly at $t=1$; $h$ is strictly increasing on $(0,1)$ and strictly decreasing on $(1,\infty)$, and
$$ \psi(B^+)\le\psi(B)+(M_s-\log m_s-1) +h\!\left(\frac{q}{\eta^2}\right)+\log\eta^2. $$

## Facts & Assumptions

**Given:** $B,s,y,d$ and the update in the Statement.

[F1] [[def-bfgs-curvature-pair-and-update-formulas]]: $B^+=B-Bss^TB/(s^TBs)+yy^T/(s^Ty)$.

[F2] [[lem-bfgs-updates-preserve-secant-symmetry-and-spd]]: $B^+$ is SPD whenever $B$ is SPD and $s^Ty>0$.

[F3] [[def-euclidean-inner-product]] and [[thm-cauchy-schwarz-and-the-euclidean-norm]]: for Euclidean vectors $u,v$, $|u^Tv|\le\|u\|_2\|v\|_2$.

[F4] [[thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique]]: every real SPD matrix has a unique factorization $B=LL^T$ with $L$ lower triangular and positive diagonal.

[F5] [[thm-determinant-multiplicative]] and [[thm-determinant-of-a-triangular-matrix]]: determinants multiply, and a triangular determinant is the product of its diagonal entries.

[F7] [[def-determinant-of-a-square-matrix]]: the determinant is the Leibniz sum over permutations; applying the inverse permutation shows $\det(P^T)=\det(P)$.

[F6] [[def-natural-logarithm]] and [[thm-logarithm-derivative-and-integral]]: $\log$ is defined on $(0,\infty)$ and has derivative $1/t$ there.

## Proof

1.1 The trace update follows by taking traces in [F1]: $\operatorname{tr}(uv^T)=v^Tu$ gives $\operatorname{tr}(Bss^TB)=\|Bs\|_2^2$ and $\operatorname{tr}(yy^T)=\|y\|_2^2$. [F1, algebra]

1.2 For the determinant identity, choose an invertible matrix $P$ whose first column is $s$; such a basis extension is finite-dimensional. Put $B'=P^TBP$ and $y'=P^Ty$. Direct substitution into [F1], using $s'=P^{-1}s=e_1$ and the unchanged scalars $s^TBs$ and $s^Ty$, gives $B'^+=P^TB^+P$. By [F5] and [F7], $\det(B'^+)/\det(B')=\det(B^+)/\det(B)$, since both numerator and denominator acquire the same factor $\det(P)^2$. In these coordinates write $$ B'=\begin{pmatrix}a&b^T\\b&C\end{pmatrix},\qquad y'=\begin{pmatrix}d\\z\end{pmatrix}, \quad a=s^TBs,\quad d=s^Ty. $$ The update becomes $$ B'^+=\begin{pmatrix}d&z^T\\z&C-bb^T/a+zz^T/d\end{pmatrix}. $$ The Schur complement $S:=C-bb^T/a$ is SPD: for each nonzero $v$, substituting $(-b^Tv/a,v)$ into the quadratic form of $B'$ gives $v^TSv>0$. The factorizations $$ B'=\begin{pmatrix}1&0\\b/a&I\end{pmatrix}\begin{pmatrix}a&b^T\\0&S\end{pmatrix}, \qquad B'^+=\begin{pmatrix}1&0\\z/d&I\end{pmatrix}\begin{pmatrix}d&z^T\\0&S\end{pmatrix} $$ show $\det(B')=a\det(S)$ and $\det(B'^+)=d\det(S)$: the lower factors have determinant $1$ by [F5], and the upper block factors have those determinants by expanding the Leibniz sum along their first columns. If $n=1$, take the empty Schur complement determinant to be $1$. Therefore $\det(B^+)/\det(B)=d/a=s^Ty/(s^TBs)$. [given, F1, F5, F7, algebra, construct]

1.3 By [F4], write $B=LL^T$ with positive diagonal entries $l_{ii}$. Then $\operatorname{tr}(B)=\sum_{i\ge j}l_{ij}^2$ and $\det(B)=\prod_i l_{ii}^2>0$. Consequently $$ \psi(B)=\sum_{i>j}l_{ij}^2+\sum_i\bigl(l_{ii}^2-2\log l_{ii}\bigr)\ge n, $$ because $u-1-\log u\ge0$ for $u>0$. This scalar inequality follows from the derivative $1-1/u$, whose sign changes from negative to positive at $u=1$. [F4, F6, algebra]

1.4 For $h(t)=1-t+\log t$, the derivative is $-1+1/t$, positive for $0<t<1$ and negative for $t>1$, so $h(t)\le h(1)=0$. Also $s^TBs>0$ and $Bs\ne0$, so $\eta>0$; [F3] gives $\eta\le1$. [given, F2, F3, F6, algebra]

2.1 Set $u:=q/\eta^2$. From the definitions, $u=\|Bs\|_2^2/(s^TBs)$. Steps 1.1 and 1.2 therefore give $$ \psi(B^+)=\psi(B)+M_s-u-\log m_s+\log q =\psi(B)+(M_s-\log m_s-1)+h(u)+\log\eta^2. $$ This is the asserted identity, hence the stated inequality by step 1.4. [F1, step 1.1, step 1.2, step 1.4, algebra] ∎
