---
id: lem-cm-determinant-derivative-along-a-matrix-curve
kind: lemma
title: "The derivative of the determinant along an invertible C¹ matrix curve: $(\\det A)'=\\det A\\;\\operatorname{tr}(A^{-1}A')$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [def-matrices-over-a-commutative-ring, def-determinant-of-a-square-matrix, thm-leibniz-determinant-is-alternating-multilinear-and-normalized, thm-determinant-multiplicative, thm-real-square-matrix-invertible-iff-determinant-nonzero, cor-inverse-matrix-by-adjugate, def-trace-of-a-square-matrix, prop-trace-is-linear, thm-trace-of-ab-equals-trace-of-ba, def-vector-valued-derivative-and-integral, def-derivative, def-ck-euclidean-maps-and-diffeomorphisms, thm-algebra-of-derivatives]
dependency_roles:
  def-matrices-over-a-commutative-ring: mathematical-premise
  def-determinant-of-a-square-matrix: mathematical-premise
  thm-leibniz-determinant-is-alternating-multilinear-and-normalized: mathematical-premise
  thm-determinant-multiplicative: mathematical-premise
  thm-real-square-matrix-invertible-iff-determinant-nonzero: mathematical-premise
  cor-inverse-matrix-by-adjugate: mathematical-premise
  def-trace-of-a-square-matrix: mathematical-premise
  prop-trace-is-linear: mathematical-premise
  thm-trace-of-ab-equals-trace-of-ba: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-derivative: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "R. Abeyaratne, Continuum Mechanics, Volume II of Lecture Notes on the Mechanics of Solids (MIT, 1988, revised 2020), Section 2.4.3 (change of volume under a deformation) and Section 3.4.3 (rate of change of volume), with the transport equations of Section 3.7"
      url: "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf"
    - title: "W. Barsukow, Introduction to Conservation Laws: Theory and Numerics (lecture notes, TUM, Winter term 2021/22), Section 1.2.2 (deformation of an infinitesimal volume element by a continuously differentiable velocity field)"
      url: "https://user.math.uzh.ch/barsukow/exercises2122/conservationlaws.pdf"

  precheck: pass
---

## Statement

Let $n\ge1$, let $I\subseteq\mathbb R$ be a nonempty open interval, and let

$$A:I\longrightarrow M_n(\mathbb R),\qquad A(t)=\bigl(a_{ij}(t)\bigr),$$

be a matrix-valued curve whose entries $a_{ij}:I\to\mathbb R$ are differentiable at $t_0\in I$ ([[def-derivative]], [[def-vector-valued-derivative-and-integral]]); write $A'(t_0):=\bigl(a_{ij}'(t_0)\bigr)$ ([[def-matrices-over-a-commutative-ring]]). Suppose $A(t)$ is invertible for every $t\in I$ ([[thm-real-square-matrix-invertible-iff-determinant-nonzero]], [[cor-inverse-matrix-by-adjugate]]). Then $t\mapsto\det A(t)$ is differentiable at $t_0$ ([[def-determinant-of-a-square-matrix]]) and

$$(\det A)'(t_0)=\det A(t_0)\;\operatorname{tr}\!\bigl(A(t_0)^{-1}A'(t_0)\bigr),$$

with the trace of [[def-trace-of-a-square-matrix]]. In particular, a $C^1$ matrix curve with invertible values has $(\det A)'=\det A\,\operatorname{tr}(A^{-1}A')$ on all of $I$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]).

## Facts & Assumptions

**Given:** Integers $n\ge1$; an open interval $I$; a matrix curve $A$ with entries differentiable at $t_0\in I$; invertibility of $A(t)$ for all $t\in I$.

[F1] The Leibniz determinant $\det:M_n(\mathbb R)\to\mathbb R$ is column-multilinear, alternating and normalized, and $\det(XY)=\det X\det Y$ for all $X,Y\in M_n(\mathbb R)$ ([[thm-leibniz-determinant-is-alternating-multilinear-and-normalized]], [[thm-determinant-multiplicative]], [[def-determinant-of-a-square-matrix]]).

[F2] If $A$ is invertible, then $\det A\ne0$, $A^{-1}$ exists, and $A^{-1}=\det(A)^{-1}\operatorname{adj}(A)$ ([[thm-real-square-matrix-invertible-iff-determinant-nonzero]], [[cor-inverse-matrix-by-adjugate]]).

[F3] For $0\le i<n$, replacing the $i$-th column of the identity by $w\in\mathbb R^n$ produces a matrix whose determinant is the $i$-th entry $w_i$: the column expansion over the standard basis has one nonzero term, by alternation and normalization [F1]. Consequently, for invertible $B$ and $b\in\mathbb R^n$, the matrix $B^{(i)}$ obtained from $B$ by replacing its $i$-th column by $b$ satisfies

$$\det B^{(i)}=\det B\,(B^{-1}b)_i .$$

Indeed $B^{(i)}=BE$ where $E$ is the identity with $i$-th column $B^{-1}b$, so [F1] gives $\det B^{(i)}=\det B\det E=\det B\,(B^{-1}b)_i$.

[F4] The trace is linear, and $\operatorname{tr}(XY)=\operatorname{tr}(YX)$ for square matrices of matching size ([[prop-trace-is-linear]], [[thm-trace-of-ab-equals-trace-of-ba]]).

[F5] Differentiability of the entries means that for $h\to0$, $a_{ij}(t_0+h)=a_{ij}(t_0)+h\,a_{ij}'(t_0)+o(h)$; equivalently $A(t_0+h)=B+hH+r(h)$ with $B=A(t_0)$, $H=A'(t_0)$ and $\max_{i,j}|r_{ij}(h)|/|h|\to0$ ([[def-derivative]], [[thm-algebra-of-derivatives]]).

## Proof

**Proof technique:** direct; expand the determinant by column-multilinearity and keep the terms up to first order.

1.1 Put $B:=A(t_0)$, $H:=A'(t_0)$ and, for small $h\ne0$ with $t_0+h\in I$, write $A(t_0+h)=B+hH+r(h)$ with the remainder $r(h)$ of [F5]. By [F2], $B$ is invertible. Since $r_{ij}(h)=o(h)$ entrywise, choose $0<\varepsilon_0\le1$ such that $\max_{i,j}|r_{ij}(h)|\le|h|$ for $0<|h|<\varepsilon_0$, and fix such an $h$. [given, F2, F5, choose]

1.2 For fixed $h$, expand $\det A(t_0+h)$ by column-multilinearity [F1]: the $i$-th column is $b_i+h\,h_i+r_i(h)$, so $$\det A(t_0+h)=\sum_{S\subseteq\{0,\dots,n-1\}}\det\bigl(c_0^S,\dots,c_{n-1}^S\bigr),\qquad c_i^S=\begin{cases} h\,h_i+r_i(h),&i\in S,\\ b_i,&i\notin S,\end{cases}$$ the sum being over the $2^n$ subsets $S$. The term $S=\varnothing$ is $\det B$. [F1, given, algebra]

1.3 For $S=\{i\}$ a single index, [F3] applied to $b:=h\,h_i+r_i(h)$ gives $\det B\,(B^{-1}(h\,h_i+r_i(h)))_i$. Summing over $0\le i<n$ and using linearity of $B^{-1}$ and of the trace [F4], $$\sum_{i}\det B\,\bigl(B^{-1}(h\,h_i+r_i(h))\bigr)_i=\det B\Bigl(h\,\operatorname{tr}(B^{-1}H)+\operatorname{tr}\bigl(B^{-1}r(h)\bigr)\Bigr).$$ [F3, F4, algebra]

2.1 For $|S|\ge2$, the Leibniz formula [F1] expresses $\det(c^S)$ as $n!$ signed products. Each product has $|S|$ entries from increment columns and $n-|S|$ entries from $B$. Put $M:=\max\{1,\max_{i,j}|H_{ij}|+1\}$ and $P:=\max\{1,\max_{i,j}|B_{ij}|\}$. Step 1.1 bounds each increment entry by $|h|M$, so for $|h|\le1$ each product has magnitude at most $|h|^{|S|}M^{|S|}P^{n-|S|}\le h^2(MP)^n$. Summing over all $S$ and permutations gives $\bigl|\sum_{|S|\ge2}\det(c^S)\bigr|\le 2^n n!(MP)^n h^2$. When $n=1$ the sum is empty and equals zero. [F1, step 1.1, algebra]

3.1 Combining the preceding steps, $$\det A(t_0+h)-\det B-h\det B\,\operatorname{tr}(B^{-1}H)=\det B\,\operatorname{tr}\bigl(B^{-1}r(h)\bigr)+O(h^2).$$ The right-hand side is $o(h)$: $\|\operatorname{tr}(B^{-1}r(h))\|\le n\max_{i,j}|(B^{-1}r(h))_{ij}|\le C'|r(h)|_{\max}=o(|h|)$ by [F5], and $O(h^2)=o(h)$. Hence $(\det A)'(t_0)=\det B\,\operatorname{tr}(B^{-1}H)$, which is the stated formula. [step 1.3, step 2.1, F4, F5, algebra] ∎

## Remarks

- The formula is exactly the Jacobi formula for the derivative of the determinant. Its use in this collection is for $n=3$ and $A(t)=D_X\chi_t(X)$, where the chain rule identifies $A'(t)=\bigl(Du(t,\chi_t(X))\bigr)A(t)$, so that $(\det A)'=\det A\;\operatorname{div}u$; that composition is carried out in the transport theorem, not here.

- Only differentiability of the entries at the point $t_0$ is used; continuity of $t\mapsto\operatorname{tr}(A(t)^{-1}A'(t))$ is not asserted by this lemma and is not needed for the pointwise derivative.
