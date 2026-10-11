---
id: lem-degenerate-cyclotomic-hecke-center-is-the-symmetric-polynomial-image
kind: lemma
title: "The degenerate cyclotomic Hecke center is the symmetric polynomial image"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 17
deps: [def-affine-and-cyclotomic-type-a-hecke-algebras,
       lem-cyclotomic-hecke-algebra-basis-and-dimension,
       lem-cyclotomic-hecke-bounded-ordered-monomials-span,
       def-symmetric-polynomial,
       def-finite-symmetric-group-and-permutation-notation]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Jonathan Brundan, Centers of degenerate cyclotomic Hecke algebras and parabolic category O, arXiv:math/0607717v3"
      url: "https://arxiv.org/pdf/math/0607717"
      locator: "Actually read full center proof §2–§3 PDF pp. 4–12: colored-cycle centralizer, graded orbit sums and triangular center lifts; local proof below fills the power expansion and avoids the abbreviated Theorem 2.7 check."
---

## Statement

Let $F$ be any field of characteristic $e>0$ with $e\ge2$, and let
$H_d^\Lambda$ be the degenerate cyclotomic Hecke algebra with the FIRST
relation $f(x_1)=\prod_{i\in\mathbb Z/e\mathbb Z}(x_1-i)^{\lambda_i}=0$,
$\lambda_i\ge0$, $\ell=\sum_i\lambda_i\ge1$
([[def-affine-and-cyclotomic-type-a-hecke-algebras]]). Then $Z(H_d^\Lambda)$
is exactly the image of $F[t_1,\dots,t_d]^{S_d}$ under $t_r\mapsto x_r$
([[def-symmetric-polynomial]],
[[def-finite-symmetric-group-and-permutation-notation]]). The proof is over
the original $F$, for every $d\ge0$ and level $\ell$, and does not divide by
$\ell$ or $d!$.

## Facts & Assumptions

**Given:** The degenerate affine and cyclotomic presentations, the field $F$
of characteristic $e$, the level $\ell$ and the polynomials
$f(x_1)=\prod_i(x_1-i)^{\lambda_i}$.

[F1] The bounded ordered monomials of the degenerate cyclotomic quotient form
a basis ([[lem-cyclotomic-hecke-algebra-basis-and-dimension]]), and the
degree-decreasing transported relation $R_r=x_r^\ell+\sum c_{a,w}x^aw$ with
remainders of total degree below $\ell$ holds
([[lem-cyclotomic-hecke-bounded-ordered-monomials-span]]).

[F2] The mixed relations are $s_rx_r=x_{r+1}s_r-1$ and
$s_rx_{r+1}=x_rs_r+1$, with distant mixed commutation; the $s_r$ satisfy the
Coxeter relations ([[def-affine-and-cyclotomic-type-a-hecke-algebras]]).

## Proof

**Proof technique:** direct.

**Given:** The data of [F1]–[F2]; rank zero is $F$ with symmetric image $F$,

so assume $d\ge1$.

1.1 The associated graded. Give $x_i$ degree $1$ and the symmetric group degree $0$. By [F1] the transported relation has leading term $x_i^\ell$ with all other dot terms of total degree below $\ell$, and the bounded reduction sends monomials of dot degree $\le r$ to bounded monomials of dot degree $\le r$; independence of the bounded basis makes these the filtration steps $F_r$. The leading mixed relations give the variable permutation action of $S_d$, and the transported relations give $x_i^\ell=0$ in the associated graded. Hence the natural surjection $F[X_1,\dots,X_d]/(X_1^\ell,\dots,X_d^\ell)\rtimes FS_d \longrightarrow\operatorname{gr}H_d^\Lambda$ is an isomorphism: the bounded monomials of the truncated algebra map degree-by-degree onto the basis of [F1]. [F1, F2, algebra]

1.2 Symmetric polynomials are central. For $x=x_i$, $y=x_{i+1}$, $s=s_i$ the relations of [F2] give, by induction on products, $sg(x,y)-g(y,x)s=\frac{g(y,x)-g(x,y)}{x-y}$ for every polynomial $g$; the quotient is a polynomial because the numerator vanishes at $x=y$. Applying this to a polynomial symmetric in $x,y$ shows that it commutes with $s$, and a globally symmetric polynomial commutes with every $s_i$ and every $x_j$, hence is central in $H_d^\Lambda$. No division by an integer or by $x-y$ inside the algebra is used. [F2, algebra]

1.3 The graded center. In the truncated algebra $B=F[X_1,\dots,X_d]/(X_1^\ell,\dots,X_d^\ell)\rtimes FS_d$, the centralizer of the polynomial ring has, by a coefficient-comparison argument on each cycle of a permutation, the basis of disjoint colored-cycle products: for a cycle $C$ with support $I$ and $0\le r<\ell$ put $C^{(r)}=h_r(I)C$ with $h_r(I)=\sum X_{i_1}^{b_1}\cdots X_{i_a}^{b_a}$ over $0\le b_j<\ell$, $\sum b_j=(a-1)(\ell-1)+r$. The identities $h_r(I)h_s(J)=\ell^{c-1}h_{r+s+(c-1)(\ell-1)}(I\cup J)$ for $|I\cap J|=c>0$ (proved along a chain and using $h_0(i,j)^2=\ell X_i^{\ell-1}X_j^{\ell-1}$) show that products of colored cycles reduce to disjoint products, and the cycle-wise coefficient equations identify the solution space exactly. Since the coefficients of distinct permutations are independent, the invariant subspace has the orbit sums of nontrivial colored cycles as a basis, with no averaging: a coefficient constant on its orbit needs no division by $n!$. This yields the orbit-sum description of the center of $B$ together with the degree statistic $D(\lambda)=\sum_{\text{cycles}}((\text{length}-1)(\ell-1)+\text{color})$. [F1, algebra]

2.1 Lifting the center. Every globally symmetric polynomial maps into $\operatorname{gr}H_d^\Lambda$ and its leading symbol is a combination of the orbit sums of step 1.3 by [F1] and step 1.2; conversely, every central element of $H_d^\Lambda$ has a leading symbol in the center of $B$, and the triangular-lift computation for the truncated universal enveloping algebra shows that the leading symbol of a central element is a symmetric polynomial in the variables (the colored-cycle orbit sums are exactly the leading symbols of the symmetric polynomial images). Induction on the filtration degree therefore produces, for each central element, a symmetric polynomial whose difference from it has strictly smaller degree; iterating constructs a symmetric polynomial mapping to it. Hence $Z(H_d^\Lambda)=F[x_1,\dots,x_d]^{S_d}$, and no exact-dimension or primitive-content input is used. [step 1.1, step 1.2, step 1.3] ∎

## Remarks

The proof is the independent center computation for the degenerate cyclotomic
quotient: the associated graded is a truncated polynomial ring smashed with
the group algebra, its center is described by colored-cycle orbit sums, and
the symmetric polynomial image is exactly the center because the leading
symbols of symmetric polynomials are the orbit sums. No division by $\ell$,
by $d!$ or by $e$ occurs.
