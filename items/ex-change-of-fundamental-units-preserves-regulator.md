---
id: ex-change-of-fundamental-units-preserves-regulator
kind: example
title: "A unimodular change of generators preserves the regulator determinants"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-invertible-matrix-has-unit-determinant
  - def-axiom-of-choice
  - def-determinant-of-a-square-matrix
  - def-logarithmic-unit-embedding
  - def-number-field-regulator
  - ex-units-in-a-real-cubic-field
  - lem-deleted-row-minors-of-a-matrix-with-zero-column-sums
  - lem-unit-logarithms-lie-in-the-product-formula-hyperplane
  - lem-units-of-z
  - thm-determinant-multiplicative
  - thm-natural-logarithm-laws
  - thm-number-field-regulator-is-well-defined
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Brian Conrad and Aaron Landesman, Math 154 Algebraic Number Theory"
      url: "https://people.math.harvard.edu/~landesman/assets/undergraduate-number-theory.pdf"
      locator: "Example 29.2 p.149 (independent units detected by the log map; finite index)."
    - title: "Andrew V. Sutherland, MIT 18.785 Lecture 15: Dirichlet's Unit Theorem (Fall 2021)"
      url: "https://math.mit.edu/classes/18.785/2021fa/LectureNotes15.pdf"
      locator: "Def. 15.16 p.9 (the minor is independent of the chosen projection)."
---

## Example

Assume the Axiom of Choice. Let $\alpha=2\cos(2\pi/9)$, the root in $(1,2)$ of
$X^3-3X+1$, with conjugates $x=\sigma_1\alpha\in(1,2)$,
$y=\sigma_2\alpha\in(0,1)$ and $z=\sigma_3\alpha\in(-2,-1)$, and let
$u_1:=\alpha$, $u_2:=\alpha-1$ be the two independent units of the cubic field
example. Then:

1. the tuples $(u_1,u_2)$ and $(u_1u_2,u_2)$ generate the same lattice
   $\mathbb Z\lambda(u_1)+\mathbb Z\lambda(u_2)$ in the hyperplane $H$; the
   second logarithmic matrix is $A\begin{pmatrix}1&0\\1&1\end{pmatrix}$ with
   the matrix acting on columns, a unimodular integer matrix of determinant
   $1$;
2. every deleted-row $2\times2$ determinant of the logarithmic matrix has the
   same value for the two tuples, namely $\pm(a^2+ab+b^2)$ with
   $a=\log x$, $b=\log y$, and its absolute value is
   $0.849287\ldots$ in both cases (the three deleted rows have the signs
   $-,\,+,\,-$);
3. interchanging $u_1$ and $u_2$, that is right multiplication by the
   unimodular integer matrix $\begin{pmatrix}0&1\\1&0\end{pmatrix}$ of
   determinant $-1$, reverses the sign of every deleted-row determinant and
   leaves its absolute value unchanged, which is why the regulator is defined
   from an absolute determinant.

## Facts & Assumptions

**Given:** The Axiom of Choice, the element $\alpha=2\cos(2\pi/9)$, the field $K=\mathbb Q(\alpha)$, its three real embeddings $\sigma_1,\sigma_2,\sigma_3$ with conjugates $x=\sigma_1\alpha$, $y=\sigma_2\alpha$, $z=\sigma_3\alpha$, and the units $u_1=\alpha$, $u_2=\alpha-1$ ([[ex-units-in-a-real-cubic-field]], [[def-logarithmic-unit-embedding]]).

[F1] The cubic example gives: $f(X)=X^3-3X+1$ is irreducible with $\alpha\in(1,2)$ one of its three real roots; $K$ is totally real of signature $(3,0)$, so $r_1+r_2=3$ and the logarithms of the three embeddings are the coordinates of $\lambda$; the conjugates satisfy $x\in(1,2)$, $y\in(0,1)$, $z\in(-2,-1)$; $f$ is strictly increasing on $(1,\infty)$, so $x$ is its only root there; $N_{K/\mathbb Q}(\alpha)=-1$ and $N_{K/\mathbb Q}(\alpha-1)=1$; $\alpha$ and $\alpha-1$ are units of $\mathcal O_K$; and $\lambda(\alpha)$, $\lambda(\alpha-1)$ are $\mathbb R$-linearly independent ([[ex-units-in-a-real-cubic-field]]).

[F2] The logarithmic embedding is $\lambda(w)=(\log|\sigma_1w|,\dots,\log|\sigma_{r_1}w|,2\log|\tau_1w|,\dots)$ on $K^\times$; for the totally real $K$ of [F1] it is $\lambda(w)=(\log|\sigma_1w|,\log|\sigma_2w|,\log|\sigma_3w|)$, and it is well defined because nonzero elements have nonzero images under every embedding ([[def-logarithmic-unit-embedding]]).

[F3] $\log$ is additive over products, so for $u,v\in K^\times$ the coordinatewise additivity $\lambda(uv)=\lambda(u)+\lambda(v)$ holds, the absolute values of the conjugates being multiplicative ([[thm-natural-logarithm-laws]]).

[F4] Every value $\lambda(u)$ of a unit $u\in\mathcal O_K^\times$ lies in the hyperplane $H=\{\xi:\sum_{i=1}^{3}\xi_i=0\}$ ([[lem-unit-logarithms-lie-in-the-product-formula-hyperplane]]).

[F5] The regulator of $K$ is $R_K=\lvert\det A_k\rvert$, where $A$ has the columns $\lambda(\varepsilon_1),\dots,\lambda(\varepsilon_r)$ for a system of fundamental units and $A_k$ is obtained by deleting row $k$; deleting rows may be done before or after finite matrix products. The definition records that a change of fundamental system multiplies $A$ on the right by a matrix in $\operatorname{GL}_r(\mathbb Z)$, "which is why the absolute determinant, and not the signed one, is the invariant" ([[def-number-field-regulator]], [[def-determinant-of-a-square-matrix]]).

[F6] Let $m\ge1$ and let $B$ be an $(m+1)\times m$ real matrix of rank $m$ whose columns have coordinate sum zero. Then for the deleted-row determinants $\Delta_k$ one has $\Delta_k\ne0$ and $\Delta_k=(-1)^{k-1}\Delta_1$; in particular all $\lvert\Delta_k\rvert$ are equal ([[lem-deleted-row-minors-of-a-matrix-with-zero-column-sums]]).

[F7] For square matrices of the same size over a commutative ring, $\det(BC)=\det(B)\det(C)$ ([[thm-determinant-multiplicative]]).

[F8] An invertible square matrix over a commutative ring has unit determinant ([[cor-invertible-matrix-has-unit-determinant]]), and the units of $\mathbb Z$ are $\pm1$ ([[lem-units-of-z]]).

[F9] Assume the Axiom of Choice. For two systems of fundamental units of a number field $K$ the regulator $R_K$ is the same number: the absolute deleted-row determinant does not depend on the deleted row nor on the chosen system, and it is positive ([[thm-number-field-regulator-is-well-defined]]).

[A1] The Axiom of Choice is assumed; it is used only through the unit-theoretic inputs quoted in [F1] and [F9] and the hyperplane input [F4] ([[def-axiom-of-choice]]).

## Verification

**Proof technique:** derive the exact algebraic relations among the three real conjugates from the polynomial $X^3-3X+1$, translate them into relations among the logarithmic coordinates, and compare the deleted-row determinants of the two tuples through the explicit unimodular matrices.

1.1 The setting is as in [F1]-[F4]: $\lambda(\alpha)=(a,b,c)$ and $\lambda(\alpha-1)$ are vectors in the hyperplane $H$ of $\mathbb R^3$, where $a=\log x$, $b=\log y$, $c=\log|z|$; these logarithms are defined because $x>1$, $0<y<1$ and $|z|>1$; and $\lambda$ is additive, $\lambda(u_1u_2)=\lambda(u_1)+\lambda(u_2)$. [F1, F2, F3, F4]

1.2 Conjugate relations I: if $r$ is any root of $f$, then $r^2-2$ is again a root: from $r^3=3r-1$ one computes $r^4=3r^2-r$, $r^5=-r^2+9r-3$, $r^6=9r^2-6r+1$, hence $(r^2-2)^3=3r^2-7$ and $(r^2-2)^3-3(r^2-2)+1=(3r^2-7)-3r^2+6+1=0$. Thus $\varphi(r):=r^2-2$ maps the set $\{x,y,z\}$ of the three distinct roots into itself. Now $x>\sqrt2$, because $f$ is strictly increasing on $(1,\infty)$ by [F1] and $f(\sqrt2)=2\sqrt2-3\sqrt2+1=1-\sqrt2<0<f(x)$; hence $x^2-2\in(0,2)$, and the only roots in $(0,2)$ are $y\in(0,1)$ and $x\in(1,2)$, with $x^2-2\ne x$ because $x^2-x-2=0$ would give $x\in\{-1,2\}$; therefore $\varphi(x)=y$. Similarly $\varphi(y)=y^2-2\in(-2,-1)$ is the root in $(-2,-1)$, namely $z$. Finally $z\in(-2,-\sqrt3)$, since for $s<t<-1$ one has $f(t)-f(s)=(t-s)(s^2+st+t^2-3)>0$, so $f$ is strictly increasing on $(-\infty,-1)$, and $f(-2)=-1<0<f(-\sqrt3)=1$, so $\varphi(z)=z^2-2\in(1,2)$, and the only root in $(1,2)$ is $x$; hence $\varphi(z)=x$. [F1, algebra]

2.1 Conjugate relations II: for every root $r$ of $f$ one has $r(r^2-3)=-1$, hence $1/r=3-r^2$. Applying this to $r=x$ and using $x^2-2=y$ gives $1/x=3-x^2=1-y$; applied to $r=y$ and using $y^2-2=z$ it gives $1/y=1-z$; applied to $r=z$ and using $z^2-2=x$ it gives $1/z=1-x$. [F1, step 1.2, algebra]

3.1 Logarithmic coordinates: since $1-y>0$ is the inverse of $x$, $\log(1-y)=-a$, that is $\log|y-1|=-a$; since $1-z>0$ is the inverse of $y$, $\log|z-1|=-b$; and since $1/z=1-x$ is negative with $x-1>0$, $\log|z|=-\log(x-1)$, that is $\log(x-1)=-c$. Moreover $a+b+c=\log|xyz|=\log|N_{K/\mathbb Q}(\alpha)|=\log1=0$ because $N_{K/\mathbb Q}(\alpha)=-1$. Therefore $\lambda(\alpha)=(a,b,c)$ and $\lambda(\alpha-1)=(\log(x-1),\log|y-1|,\log|z-1|)=(-c,-a,-b)$ with $a+b+c=0$. [F1, F2, F3, step 2.1, algebra]

4.1 The logarithmic matrix of the tuple $(u_1,u_2)$ is $$A=\begin{pmatrix}a&-c\\ b&-a\\ c&-b\end{pmatrix},\qquad a+b+c=0 .$$ Deleting row $1$ gives $\Delta_1=b(-b)-(-a)c=-b^2+ac=-(a^2+ab+b^2)$; deleting row $2$ gives $\Delta_2=a(-b)-(-c)c=-ab+c^2=a^2+ab+b^2$; and deleting row $3$ gives $\Delta_3=a(-a)-(-c)b=-a^2+bc=-(a^2+ab+b^2)$, where $c=-a-b$ is used in each reduction. In particular all three deleted-row determinants are nonzero and have absolute value $Q:=a^2+ab+b^2$. [F5, F6, step 3.1, algebra]

5.1 The second tuple has the same lattice and the same determinants: by additivity $\lambda(u_1u_2)=\lambda(u_1)+\lambda(u_2)$, so $\mathbb Z\lambda(u_1)+\mathbb Z\lambda(u_2)=\mathbb Z(\lambda(u_1)+\lambda(u_2))+\mathbb Z\lambda(u_2)$, an equality of subgroups of $H$. In coordinates, the logarithmic matrix of $(u_1u_2,u_2)$ is $A'=AC$ with $C=\begin{pmatrix}1&0\\1&1\end{pmatrix}$ acting on columns, whose inverse $C^{-1}=\begin{pmatrix}1&0\\-1&1\end{pmatrix}$ is integral and whose determinant is $1$; deleting row $k$ commutes with right multiplication, so $A'_k=A_kC$ and $\det A'_k=\det(A_k)\det(C)=\det A_k$ by [F7]. Thus the determinants of the two tuples are equal, not merely equal in absolute value, and $\lvert\det A'_k\rvert=Q$ as well. [F3, F5, F7, step 4.1, algebra]

6.1 Swapping the two units, that is passing to $(u_2,u_1)$, replaces $A$ by $A''=AP$ with $P=\begin{pmatrix}0&1\\1&0\end{pmatrix}$, whose inverse is itself and whose determinant is $-1$; then $\det A''_k=\det(A_k)\det(P)=-\det A_k$, so the sign of every deleted-row determinant is reversed and the absolute value $Q$ is unchanged. Both $C$ and $P$ are invertible over $\mathbb Z$, so by [F8] their determinants are units of $\mathbb Z$, that is $\pm1$, in agreement with the direct computations $\det C=1$ and $\det P=-1$. [F7, F8, step 4.1, step 5.1, algebra]

6.2 Numerical value: evaluating cosine gives $\cos(2\pi/9)\approx0.7660444431$, so $x=\alpha=2\cos(2\pi/9)\approx1.5320888862$, $y=x^2-2\approx0.3472963553$, and $z=y^2-2$ satisfies $|z|\approx1.8793852416$ because $z\in(-2,-1)$ by step 1.2; hence $a=\log x\approx0.4266320894$, $b=\log y$ satisfies $|b|\approx1.0575768136$, and $$Q=a^2+ab+b^2\approx0.8492874506.$$ So every deleted-row determinant of the two tuples has absolute value the number $Q$ of the display, the signs for the tuple $(u_1,u_2)$ being $-,\,+,\,-$ as computed in step 4.1. [step 3.1, step 4.1, step 5.1, algebra]

7.1 Relation to the regulator definition and choice accounting: the computation is the explicit $\operatorname{GL}_2(\mathbb Z)$ step that [F5] and [F9] single out — right multiplication by an integral matrix of determinant $\pm1$ changes the deleted-row determinants by that same factor, so the absolute value is the invariant and the regulator is defined from it. Nothing here asserts that $(u_1,u_2)$ or $(u_1u_2,u_2)$ is a system of fundamental units: the common number $Q$ is the absolute deleted-row determinant of the rank-two subgroup lattice generated by the tuple, and it coincides with the field regulator only when the tuple generates all of $\lambda(\mathcal O_K^\times)$. AC enters only through the unit-theoretic inputs quoted in [F1] and [F9] and the hyperplane input [F4]; the algebraic relations among conjugates, the logarithmic matrix computations and the determinant identities use no choice. [A1, F1, F4, F5, F9, step 5.1, step 6.2] ∎
