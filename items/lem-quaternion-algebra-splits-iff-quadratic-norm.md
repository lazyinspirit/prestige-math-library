---
id: lem-quaternion-algebra-splits-iff-quadratic-norm
kind: lemma
title: "A quaternion algebra splits exactly when its parameter is a quadratic norm"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - def-quaternion-symbol-over-a-field
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Bjorn Poonen, Rational Points on Varieties, §1.5.7.4, Proposition 1.5.23"
      url: "https://math.mit.edu/~poonen/papers/Qpoints.pdf"
      locator: "Quaternion cyclic algebras split exactly when the parameter is a norm from the quadratic extension."
    - title: "Alexei Skorobogatov, Arithmetic Geometry: Rational Points, §1.1, Proposition 1.2"
      url: "https://www.ma.imperial.ac.uk/~anskor/arith_geom_files/TCCnotes.pdf"
      locator: "Equivalent split, matrix-algebra, and quadratic-norm criteria for quaternion algebras."
verification: {}
---

## Statement

Let $F$ be a field of characteristic different from $2$, let $a,b\in F^\times$,
and let
$$Q_F(a,b)=F\langle i,j\mid i^2=a,\ j^2=b,\ ij=-ji\rangle.$$
Put $L_a=F[t]/(t^2-a)$, with norm $N_{L_a/F}$ given by the determinant of
multiplication on this two-dimensional $F$-algebra. Then $Q_F(a,b)$ is
isomorphic to $M_2(F)$ if and only if
$$b\in N_{L_a/F}(L_a^\times).$$
The same criterion with the roles of $a$ and $b$ interchanged holds, since
$Q_F(a,b)\cong Q_F(b,a)$.

## Statement references

[[def-quaternion-symbol-over-a-field|Quaternion algebra presentation]]

[Poonen, §1.5.7.4, Proposition 1.5.23](https://math.mit.edu/~poonen/papers/Qpoints.pdf)

[Skorobogatov, §1.1, Proposition 1.2](https://www.ma.imperial.ac.uk/~anskor/arith_geom_files/TCCnotes.pdf)

## Facts & Assumptions

**Given:** A field $F$ of characteristic different from $2$, nonzero $a,b\in F$,
and the quaternion algebra $Q_F(a,b)$.

[F1] The algebra has $F$-basis $1,i,j,ij$ and the displayed generator
relations. [[def-quaternion-symbol-over-a-field]]

## Proof

**Proof technique:** construct a two-dimensional representation in the norm
case, and recover the norm from a simple module when the algebra is split.

**Given:** The data above.

1.1 If $a=r^2$ for some $r\in F^\times$, then $L_a\cong F\times F$ and its
norm $(x,y)\mapsto xy$ is surjective on units. The matrices
$$i\longmapsto\begin{pmatrix}r&0\\0&-r\end{pmatrix},\qquad
j\longmapsto\begin{pmatrix}0&b\\1&0\end{pmatrix}$$
satisfy the defining relations of [F1]. Their images of $1,i,j,ij$ are
linearly independent: the diagonal pair has determinant $-2r\ne0$, and the
off-diagonal pair has determinant $-2rb\ne0$. By [F1] this gives an
isomorphism $Q_F(a,b)\cong M_2(F)$, proving both sides in this case.
[F1, given, algebra]

1.2 Now suppose $a$ is not a square and put $L=F(\sqrt a)$, with nontrivial
automorphism $\sigma$. If $b=N_{L/F}(c)=c\sigma(c)$, define an $F$-algebra map
$Q_F(a,b)\to\operatorname{End}_F(L)$ by sending $\ell\in L$ to multiplication
by $\ell$ and sending $j$ to $T_c(x)=c\sigma(x)$. Then $T_c^2$ is
multiplication by $b$, and $T_c\ell=\sigma(\ell)T_c$, so the relations hold.
If multiplication by $\ell$ plus multiplication by $m$ followed by $T_c$ is
zero, evaluating at $1$ and $\sqrt a$ gives $\ell+mc=0$ and
$\ell\sqrt a-mc\sqrt a=0$; since $2c\sqrt a\ne0$, these force $m=\ell=0$.
Thus the map is injective, and both algebras have dimension four by [F1], so
it is an isomorphism with $M_2(F)$. [F1, given, algebra]

2.1 Conversely, keep $a$ nonsquare and suppose $Q_F(a,b)\cong M_2(F)$. Let
$V=F^2$ be its standard simple module. The embedded field $L=F(i)$ acts on
$V$, making $V$ one-dimensional over $L$. Under an $L$-linear identification
$V\cong L$, the action $T$ of $j$ satisfies
$T(\ell x)=\sigma(\ell)T(x)$. Hence $T(x)=c\sigma(x)$ for
$c=T(1)\in L^\times$. Since $T^2=b$, evaluating at $1$ gives
$b=c\sigma(c)=N_{L/F}(c)$. This proves the converse.
[F1, given, algebra]

2.2 In $Q_F(b,a)$, exchanging its two generators gives an isomorphism
$Q_F(a,b)\to Q_F(b,a)$, because the exchanged generators have squares $a$
and $b$ and still anticommute. Therefore the split criterion also holds
after interchanging $a$ and $b$. [F1, step 1.1, step 1.2, step 2.1, algebra]
∎
