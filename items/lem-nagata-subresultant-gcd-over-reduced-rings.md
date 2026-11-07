---
id: lem-nagata-subresultant-gcd-over-reduced-rings
kind: lemma
title: The subresultant gcd criterion over a reduced ring
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - thm-monic-polynomial-division
  - thm-bezout-identity-for-polynomials
  - def-matrix-minors-cofactors-and-adjugate
  - thm-laplace-cofactor-expansion
  - def-prime-and-maximal-ideals
proof_strategy: direct
axiom_use: No choice principle is assumed. The specialization argument uses only explicitly enumerated finitely presented integer algebras; the prime used there is constructed by a unique recursion through that enumeration, rather than an arbitrary-ring prime-existence theorem.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Alonso M. E., Coquand T., Lombardi H., Revisiting Zariski Main Theorem from a constructive point of view
      url: https://arxiv.org/abs/1602.00597
      locator: January2016 corrected version, Lemma2.20, p.9, read in full. Both the finite field calculation and the reduced-ring specialization argument are reconstructed below; no formal Nullstellensatz is imported.
---

## Statement

Let $A$ be a reduced commutative ring, let $f(T)$ be monic of degree $d\geq1$, and let $g(T)$ have a supplied degree bound $\delta\geq d$. For $0\leq j<d$ put $m=d+\delta-2j$ and form the ordered list of $m$ polynomials
$$T^{\delta-j-1}f,\ldots,f,\quad T^{d-j-1}g,\ldots,g.$$
Let $H_j$ be the $m\times(m-1)$ matrix of their coefficients in the descending degrees $m+j-1,\ldots,j+1$. For row $r$ put $v_r=(-1)^{r+m}\det(H_j\text{ with row }r\text{ deleted})$, using indices $1\leq r\leq m$, and define $S_j(T)$ to be the sum of $v_r$ times the $r$th listed polynomial. Then $\deg S_j\leq j$; let $s_j$ be its coefficient of $T^j$. Set $S_d=f$ and $s_d=1$.

Each $S_j$ belongs to $(f,g)\subseteq A[T]$. If $0\leq\ell\leq d$, if $s_j=0$ for every $j<\ell$, and if $s_\ell$ is a unit, then $S_j=0$ for $j<\ell$, and the monic polynomial $s_\ell^{-1}S_\ell$ divides both $f$ and $g$ in $A[T]$. When $\ell=d$, this means that $f$ divides $g$. Zero $g$, zero minors, the zero ring and $\ell=0$ are included.

## Statement references

[Alonso–Coquand–Lombardi, Lemma2.20, p.9](https://arxiv.org/abs/1602.00597)

## Facts & Assumptions

**Given:** The reduced coefficient ring, monic polynomial, degree bound, determinant constructions and vanishing and unit conditions in the Statement.

[F1] Monic polynomial division has unique remainder of smaller degree over any commutative ring. Over a field, the polynomial Bezout identity and Euclidean division give a monic gcd. [[thm-monic-polynomial-division]] [[thm-bezout-identity-for-polynomials]]

[F2] Laplace expansion gives the cofactor relations for a matrix and, in particular, a determinant with repeated columns is zero. [[def-matrix-minors-cofactors-and-adjugate]] [[thm-laplace-cofactor-expansion]]

[F3] A proper ideal $P$ is prime when $ab\in P$ forces $a\in P$ or $b\in P$. [[def-prime-and-maximal-ideals]]

## Proof

1.1 The cofactor vector $v$ annihilates each column of $H_j$: its scalar product with such a column is the Laplace expansion of the square matrix obtained by adjoining that column to $H_j$, which has a repeated column and determinant zero by [F2]. Thus all coefficients of $S_j$ in degrees greater than $j$ vanish. Its displayed construction is a polynomial combination of $f,g$, so $S_j\in(f,g)$. The coefficient of degree $j$ is the determinant of $H_j$ with its degree-$j$ column appended. All these coefficients are specified integer polynomials in the coefficients of $f,g$ and hence commute with ring specialization. The same ideal assertion is immediate for $S_d=f$. [F2, given, construct, algebra]

1.2 We prove the limited specialization principle needed to pass to reduced rings without an arbitrary prime-existence assumption. Let $R$ be a ring with a specified enumeration $e_0,e_1,\ldots$ of all its elements, allowing repetitions, and suppose $z\in R$ is not nilpotent. Put $W=\{1,z,z^2,\ldots\}$. Starting with $J_0=(0)$, define recursively $J_{n+1}=J_n+(e_n)$ if this ideal misses $W$, and $J_{n+1}=J_n$ otherwise. Each decision is a definite predicate, so classical recursion defines this unique sequence and uses no choice function. Its union $P$ is an ideal disjoint from $W$. If $a,b\notin P$, the steps at which they occur in the enumeration must have rejected their addition. Hence some powers $z^u\in P+(a)$ and $z^v\in P+(b)$ exist. If $ab\in P$, multiplying these two memberships would put $z^{u+v}$ in $P$, a contradiction. Thus $P$ is prime by [F3], and the field of fractions of the domain $R/P$ is a field receiving $R$ in which $z$ remains nonzero. We have proved: if an element of an explicitly enumerated ring maps to zero under every homomorphism into a field, that element is nilpotent. This argument applies in particular to any finitely presented integer algebra, whose elements are enumerated by listing the integer polynomials in its finite list of generators and taking their images. [F3, construct, algebra]

2.1 First let the coefficient ring be a supplied field $K$. Write the monic gcd as $h$, of degree $r$, using [F1]. For $j<r$, every $S_j$ is a multiple of $h$ by step 1.1 but has degree less than $r$, so $S_j=0$. If $r=d$, this already proves that every $s_j$ for $j<d$ vanishes, and $S_d=f=h$. Suppose $r<d$. For $j=r$, put $m=d+\delta-2r$. Consider the linear map $(a,b)\mapsto af+bg$, with $\deg a<\delta-r$ and $\deg b<d-r$. Its domain has dimension $m$, and its codomain can be taken to be the multiples of $h$ of degree at most $d+\delta-r-1$, which also has dimension $m$. It is injective: writing $f=hf_0$, $g=hg_0$ with $f_0,g_0$ coprime, $af+bg=0$ implies $f_0\mid b$ by the Bezout identity, and $\deg b<\deg f_0$ forces $b=0$, then $a=0$. Therefore the map is an isomorphism. [F1, step 1.1, construct, algebra]

3.1 In the basis $h,Th,\ldots,T^{m-1}h$, projection of that codomain to the coefficients in degrees greater than $r$ has rank $m-1$, since $h$ is monic. Hence the matrix $H_r$ has rank $m-1$ and at least one of its maximal minors is nonzero. Its cofactor vector is consequently nonzero. It lies in the one-dimensional kernel of this high-degree projection by step 1.1. The injectivity in step 2.1 shows that the corresponding polynomial $S_r$ is nonzero; it has degree at most $r$ and is a multiple of the monic degree-$r$ polynomial $h$. Thus $S_r=\lambda h$ for some nonzero $\lambda\in K$, and $s_r\ne0$. Now if $s_j=0$ for $j<\ell$ and $s_\ell\ne0$, the first nonzero principal coefficient occurs at $r$, so $r=\ell$: if $r<\ell$, $s_r$ contradicts the assumed vanishing; if $r>\ell$, step 2.1 gives $s_\ell=0$. It follows that $s_\ell^{-1}S_\ell=h$, and all lower $S_j$ vanish. This proves the whole criterion over every supplied field, including $g=0$, when $r=d$, and $\ell=0$. [F1, F2, step 1.1, step 2.1, algebra]

4.1 Fix the finite integers $d,\delta,\ell$. Take independent variables for the $d$ nonleading coefficients of the monic $f$, for the $\delta+1$ coefficients of $g$, and one additional variable $u$. Form their polynomial ring over $\mathbb Z$, and quotient by the finite relations $s_0=\cdots=s_{\ell-1}=0$ and $us_\ell=1$, with $s_j$ the integer determinant expressions of step 1.1. Call the resulting explicitly enumerated ring $R$. In $R[T]$, the polynomial $H=uS_\ell$ is monic of degree $\ell$; if $\ell=d$ it is just $f$, since $s_d=1$. Divide $f$ and $g$ by $H$ using [F1]. For $\ell=0$, $H=1$ and both remainders are zero directly. Otherwise let $c$ range over the finite lists of coefficients of these remainders and of the polynomials $S_j$ with $j<\ell$. Under every ring map $R\to K$ into a field, steps 2.1–3.1 apply. Monic division commutes with specialization by its unique remainder formulas, so every such $c$ maps to zero in $K$. Step 1.2 therefore makes every $c$ nilpotent in $R$. [F1, step 1.1, step 3.1, step 1.2, construct, algebra]

5.1 The actual coefficient data in the reduced ring $A$ and the inverse of $s_\ell$ give a ring map $R\to A$ respecting precisely the relations imposed in step 4.1. Each of its nilpotent coefficients maps to zero because $A$ is reduced. Thus every lower $S_j$ is zero and both monic division remainders are zero in $A[T]$. This is the asserted divisibility by $s_\ell^{-1}S_\ell$. If $A$ is zero all coefficients and remainders vanish directly. No prime of $A$ was selected: the only prime construction was the explicit recursion in the finitely presented universal integer ring. All degree bounds, matrices, polynomials and lists in the argument are finite. [F1, step 1.2, step 4.1, algebra] ∎
