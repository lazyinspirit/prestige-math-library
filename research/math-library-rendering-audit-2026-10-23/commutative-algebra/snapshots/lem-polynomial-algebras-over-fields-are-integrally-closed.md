---
id: lem-polynomial-algebras-over-fields-are-integrally-closed
kind: lemma
title: "Finite-variable polynomial algebras over fields are integrally closed"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [thm-polynomial-ring-over-a-field-is-a-ufd, lem-gauss-lemma-over-a-ufd, def-integral-closure-and-integrally-closed-domain, def-integral-element-and-algebraic-integer, def-unique-factorisation-domain, def-irreducible-and-prime-elements-in-a-domain, def-divisibility-and-associates-in-a-domain, def-invertible-element, def-field-of-fractions, def-multivariate-polynomial-ring-by-iteration, cor-polynomial-ring-over-a-domain-is-a-domain, cor-multivariate-polynomial-ring-over-a-domain-is-a-domain, thm-polynomial-degree-of-a-product-over-a-domain, thm-irreducible-polynomials-over-a-field-are-prime, thm-well-ordering-principle, def-zero-divisor-and-integral-domain, def-field, lem-field-is-a-commutative-ring, lem-domain-cancellation]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Stacks Project, §10.37 (normal rings)"
      url: "https://stacks.math.columbia.edu/tag/037B"
      locator: "Lemma 10.37.6 (a principal ideal domain is normal) and Lemma 10.37.8 ($R$ normal implies $R[x]$ normal)"
    - title: "Stacks Project, Lemma 10.161.13 (polynomial N-2)"
      url: "https://stacks.math.columbia.edu/tag/032O"
      locator: "statement and proof of Lemma 10.161.13, which invokes Lemma 10.37.8"
verification:
  audited: 2026-09-27
---

## Statement

For every field $K$ and every finite $d\ge0$, the ring $K[x_1,\ldots,x_d]$ is
an integrally closed domain.

## Facts & Assumptions

**Given:** a field $K$ and an integer $d\ge0$.

[L1] A UFD is an integral domain in which every nonzero nonunit is a finite product of irreducibles, and any two such products of one element have the same length and matching factors up to order and associates ([[def-unique-factorisation-domain]]).

[L2] In a domain, a nonzero nonunit $p$ is irreducible when $p=ab$ forces $a$ or $b$ to be a unit, and prime when $p\mid ab$ implies $p\mid a$ or $p\mid b$ ([[def-irreducible-and-prime-elements-in-a-domain]]).

[L3] $a\mid b$ means $b=ac$ for some $c$; $a,b$ are associates when $a=ub$ for a unit $u$ ([[def-divisibility-and-associates-in-a-domain]], [[def-invertible-element]]).

[L4] Let $R$ be a UFD with field of fractions $K=\operatorname{Frac}(R)$. A polynomial in $R[x]$ is primitive when its coefficients have no common nonunit divisor. Then products of primitive polynomials are primitive, and a primitive polynomial of positive degree is irreducible in $R[x]$ exactly when it is irreducible in $K[x]$ ([[lem-gauss-lemma-over-a-ufd]]).

[L5] For every field $F$ the polynomial ring $F[x]$ is a UFD ([[thm-polynomial-ring-over-a-field-is-a-ufd]]), and every irreducible $p\in F[x]$ is prime ([[thm-irreducible-polynomials-over-a-field-are-prime]]).

[L6] An element of a ring is integral over a subring when it is a root of a monic polynomial with coefficients in that subring; the integral closure of a domain $A$ in a field extension of $\operatorname{Frac}(A)$ is the set of elements integral over $A$, and $A$ is integrally closed when every element of $\operatorname{Frac}(A)$ integral over $A$ already lies in $A$ ([[def-integral-element-and-algebraic-integer]], [[def-integral-closure-and-integrally-closed-domain]]).

[L7] $\operatorname{Frac}(D)=(D\setminus\{0\})^{-1}D$ is the field of fractions of a domain $D$, with elements the fractions $a/b$ for $a,b\in D$, $b\ne0$ ([[def-field-of-fractions]]).

[L8] $R[x_1,\ldots,x_0]:=R$ and $R[x_1,\ldots,x_{n+1}]:=R[x_1,\ldots,x_n][x_{n+1}]$ ([[def-multivariate-polynomial-ring-by-iteration]]).

[L9] A polynomial ring over a domain is a domain ([[cor-polynomial-ring-over-a-domain-is-a-domain]]), and so is a polynomial ring in finitely many indeterminates over a domain ([[cor-multivariate-polynomial-ring-over-a-domain-is-a-domain]]).

[L10] Over a domain and for nonzero $f,g$ one has $\deg(fg)=\deg f+\deg g$ ([[thm-polynomial-degree-of-a-product-over-a-domain]]).

[L11] Every nonempty subset of $\mathbb N$ has a least element ([[thm-well-ordering-principle]]).

[L12] A domain is a commutative ring with $1\ne0$ and no zero divisors, so $ab=ac$ with $a\ne0$ implies $b=c$ ([[def-zero-divisor-and-integral-domain]], [[lem-domain-cancellation]]).

[L13] A field is a commutative ring in which every nonzero element is a unit, and it is an integral domain ([[def-field]], [[lem-field-is-a-commutative-ring]]).

## Proof

**Proof technique:** direct.

1.1 Let $R$ be a domain with the two properties

> **(P1)** every nonzero nonunit of $R$ is a finite product of irreducibles, and > **(P2)** every irreducible element of $R$ is prime.

Then $R$ satisfies the uniqueness clause of [L1]: if $p_1\cdots p_m=q_1\cdots q_n$ are two products of irreducibles with $m,n\ge1$, then $m=n$ and after a permutation each $p_i$ is associate to $q_i$. Indeed $p_1$ is prime by (P2) and divides the product $q_1\cdots q_n$, so by [L2] there is an index $j$ with $p_1\mid q_j$; writing $q_j=p_1w$, the element $w$ must be a unit, since otherwise $q_j=p_1w$ would factor the irreducible $q_j$ into two nonunits, so $q_j$ is associate to $p_1$ by [L3]. Move $q_j$ to the first position and cancel the nonzero factor $p_1$ using [L12]. This gives $p_2\cdots p_m=wq_2\cdots q_n$. If either remaining list is empty, the other must also be empty, since a product containing a nonunit cannot be a unit. Otherwise absorb $w$ into $q_2$, which remains irreducible, and apply induction to the shorter products. This proves the uniqueness clause. [L1, L2, L3, L12, algebra]

1.2 Let $R$ be a UFD, which by [L1] is a domain, and let $0\ne f\in R[x]$ have nonzero coefficients $a_1,\ldots,a_s$. Write $\mathcal P$ for the set of associate classes of irreducibles of $R$. For $C\in\mathcal P$ and $0\ne a\in R$, let $v_C(a)$ be the exponent of any representative of $C$ in a factorization of $a$; this is independent of the chosen representative and factorization by the uniqueness clause of [L1]. Set $v_C(f):=\min_i v_C(a_i)$. Only finitely many classes have $v_C(f)>0$, because each $a_i$ has only finitely many irreducible factors. For each such class choose one representative $p_C$, and put $$ c(f):=\prod_{C\in\mathcal P,\ v_C(f)>0}p_C^{\,v_C(f)}\in R\setminus\{0\},\qquad f^\ast:=f/c(f)\in R[x]. $$ The product is finite; its associate class does not depend on the representatives chosen. Each $v_C(f)$ is the exponent of $C$ in $c(f)$, so $c(f)$ divides every coefficient of $f$ and $f=c(f)f^\ast$. For every class $C$, some coefficient $a_i$ has $v_C(a_i)=v_C(f)$, so that coefficient of $f^\ast$ is not divisible by a representative of $C$. Thus no irreducible divides every coefficient of $f^\ast$, and $f^\ast$ is primitive. If also $0\ne c\in R$ and $0\ne h\in R[x]$ satisfies $f=ch$ with $h$ primitive, then for each $C$ the coefficientwise identity $v_C(ca)=v_C(c)+v_C(a)$ gives $v_C(f)=v_C(c)+v_C(h)=v_C(c)$; hence $c$ and $c(f)$ have the same exponent in every associate class and are associates by [L1, L3]. In particular a polynomial is primitive exactly when its content is a unit. [L1, L3, construct]

1.3 Let $R$ be an integral domain. Then $f\in R[x]$ is a unit of $R[x]$ if and only if $f$ is a constant and a unit of $R$; and if $p\in R$, then $p$ is irreducible in $R[x]$ if and only if $p$ is irreducible in $R$. Indeed, if $fg=1$ in $R[x]$ then $f,g\ne0$ and [L10] gives $\deg f+\deg g=\deg1=0$, so $\deg f=\deg g=0$ and $fg=1$ holds in $R$; conversely units of $R$ are units of $R[x]$. The cases $p=0$ or $p$ a unit are excluded from irreducibility in both rings. For a nonzero nonunit $p$, if $p=fg$ with $\deg p=0$ then $\deg f=\deg g=0$ by [L10], so the factorization takes place in $R$, while a factorization in $R$ is one in $R[x]$. [L10, algebra]

2.1 Let $R$ be a domain with (P1) and (P2) of step 1.1. Then $R$ is integrally closed. Indeed let $z\in\operatorname{Frac}(R)$ be integral over $R$; if $z=0$ then $z\in R$, so assume $z\ne0$. By [L7] there are $a,b\in R$ with $b\ne0$ and $z=a/b$. For $0\ne c\in R$ let $m(c)$ be the number of irreducible factors in a factorization of $c$ when $c$ is a nonunit, and $0$ when $c$ is a unit; by (P1) and step 1.1 this number does not depend on the chosen factorization. Representations $z=a/b$ exist, so by [L11] we may fix one for which $m(b)$ is least. Suppose $b$ were not a unit; then $b=q_1\cdots q_m$ with $m=m(b)\ge1$ and all $q_i$ irreducible by (P1). By [L6] there is a monic equation $z^n+r_{n-1}z^{n-1}+\cdots+r_0=0$ with $n\ge1$ and $r_i\in R$; multiplying by $b^n$ gives $a^n+r_{n-1}a^{n-1}b+\cdots+r_0b^n=0$, so $b\mid a^n$, hence $q_1\mid a^n$. Since $q_1$ is prime by (P2), iterating [L2] yields $q_1\mid a$. Writing $a=q_1a'$ and $b=q_1b'$ gives a new representation $z=a'/b'$ whose denominator $b'=q_2\cdots q_m$ satisfies $m(b')=m-1$ by step 1.1, contradicting the minimality of $m(b)$. So $b$ is a unit, $z=ab^{-1}\in R$, and every element of $\operatorname{Frac}(R)$ integral over $R$ lies in $R$: by [L6], $R$ is integrally closed. [L2, L6, L7, L11, step 1.1, algebra]

2.2 Let $R$ be a UFD and let $0\ne f,g\in R[x]$. Then the contents satisfy $c(fg)\sim c(f)c(g)$ (associates). Indeed by step 1.2 both $f^\ast=f/c(f)$ and $g^\ast=g/c(g)$ are primitive, so $f^\ast g^\ast$ is primitive by [L4], and applying the uniqueness of contents from step 1.2 to the identity $$ fg=c(f)c(g)\,(f^\ast g^\ast) $$ shows that $c(fg)$ is associate to $c(f)c(g)$. [L4, step 1.2, algebra]

2.3 Let $R$ be a UFD, $K=\operatorname{Frac}(R)$, and let $p\in R[x]$ be irreducible of positive degree. Then $p$ is primitive and irreducible in $K[x]$. If some nonunit $d\in R$ divided every coefficient of $p$, then $p=d\,(p/d)$ with $d$ a nonunit and $p/d$ of positive degree, hence a nonunit of $R[x]$ by step 1.3: this contradicts irreducibility of $p$. So $p$ is primitive, and then [L4] applied to $p$ over the UFD $R$ makes $p$ irreducible in $K[x]$. [L4, step 1.3, algebra]

3.1 Let $R$ be a UFD with $K=\operatorname{Frac}(R)$, let $p\in R[x]$ be primitive, let $a\in R[x]$, and let $q\in K[x]$ satisfy $a=pq$. Then $q\in R[x]$. If $q=0$ this is immediate; otherwise $p$ and $a=pq$ are nonzero, so their contents are defined. Choose $0\ne u\in R$ with $uq\in R[x]$, which is possible by [L7] applied to the finitely many nonzero coefficients of $q$. Applying step 2.2 in the ring $R[x]$ to $ua=p\,(uq)$ gives $c(ua)\sim c(p)c(uq)\sim c(uq)$, where we used that $p$ is primitive, so $c(p)\sim1$ by step 1.2. On the other hand $c(ua)\sim u\,c(a)$ by the coefficientwise exponent identity of step 1.2. Hence $c(uq)\sim u\,c(a)$ is divisible by $u$, so $u$ divides every coefficient of $uq$; writing each coefficient of $uq$ as $ur$ with $r\in R$ and cancelling $u$ in $K$ shows that the corresponding coefficient of $q$ equals $r$. Therefore all coefficients of $q$ lie in $R$. [L7, step 1.2, step 2.2, construct]

3.2 Let $R$ be a UFD and $0\ne f\in R[x]$ a nonunit. Then $f$ is a product of irreducibles of $R[x]$. If $\deg f=0$ then $f\in R$ is a nonzero nonunit and [L1] factors it into irreducibles of $R$, each irreducible in $R[x]$ by step 1.3. Assume $\deg f\ge1$ and write $f=c(f)f^\ast$ with $c(f)\in R$ and $f^\ast$ primitive by step 1.2; then $\deg f^\ast=\deg f\ge1$, so $f^\ast$ is a nonunit of $R[x]$ by step 1.3. Retain $c(f)$ as a scalar (it may be a unit), and factor the nonzero nonunit $f^\ast$ in the UFD $K[x]$ of [L5] as $f^\ast=q_1\cdots q_n$ with each $q_j$ irreducible in $K[x]$ and $n\ge1$. Each $q_j$ has positive degree, since a nonzero constant element of $K[x]$ is a unit there, and each $q_j$ is not a unit because $f^\ast$ is not. Choose $0\ne a_j\in R$ with $a_jq_j\in R[x]$ and write $a_jq_j=d_jh_j$ with $d_j\in R$ and $h_j\in R[x]$ primitive, using step 1.2. Then $h_j=(a_j/d_j)q_j$ is a nonzero $K$-multiple of the irreducible $q_j$, hence irreducible in $K[x]$, and it is primitive, so $h_j$ is irreducible in $R[x]$ by [L4]. By [L4] the product $P:=h_1\cdots h_n$ is primitive, and $f^\ast=\lambda P$ with $\lambda:=\prod_j d_j/a_j\in K^\times$. Choose $b\in R$ and $0\ne c\in R$ with $\lambda=b/c$, by [L7]. Then $cf^\ast=bP$ in $R[x]$, so step 2.2 and the content identity of step 1.2 give $c\,c(f^\ast)\sim c(cf^\ast)\sim c(bP)\sim b\,c(P)\sim b$, because $c(P)\sim1$ by step 1.2; hence $c$ divides $b$ and $\lambda=b/c$ lies in $R$. Therefore $f=c(f)\lambda\,h_1\cdots h_n$ exhibits $f$ as a product of irreducibles of $R[x]$, the nonzero scalar $c(f)\lambda\in R$ itself being a product of irreducibles if it is a nonunit, or being absorbed into $h_1$ if it is a unit; a unit multiple of an irreducible is irreducible. [L1, L4, L5, L7, step 1.2, step 2.2, step 1.3, construct]

4.1 Let $R$ be a UFD. Then every irreducible element $p$ of $R[x]$ is prime. If $\deg p=0$, then $p\in R$ is irreducible in $R$ by step 1.3. When $p\mid ab$ in $R[x]$, if $a=0$ or $b=0$ then $p$ divides that factor; otherwise both are nonzero, and every coefficient of $ab$ is divisible by $p$. For the associate class $C=[p]$, this gives $v_C(ab)\ge1$, while step 2.2 gives $v_C(ab)=v_C(a)+v_C(b)$. Hence $v_C(a)\ge1$ or $v_C(b)\ge1$, which says exactly that $p$ divides every coefficient of $a$ or of $b$, so $p\mid a$ or $p\mid b$ in $R[x]$. If $\deg p\ge1$, then $p$ is primitive and irreducible in $K[x]$ by step 2.3, hence prime in $K[x]$ by [L5]. If $p\mid ab$ in $R[x]$, then also $p\mid ab$ in $K[x]$, so $p\mid a$ or $p\mid b$ in $K[x]$; say $a=pq$ with $q\in K[x]$. Since $p$ is primitive, step 3.1 gives $q\in R[x]$, so $p\mid a$ in $R[x]$. Thus [L2] holds for $p$ in $R[x]$. [L2, L5, step 1.2, step 2.2, step 3.1, step 1.3, step 2.3]

5.1 Let $R$ be a UFD. Then $R[x]$ is a UFD in which every irreducible is prime: existence of factorizations into irreducibles is step 3.2, and primeness of irreducibles is step 4.1, so the uniqueness clause follows from step 1.1 with (P1) $=$ step 3.2 and (P2) $=$ step 4.1. [L1, step 1.1, step 3.2, step 4.1]

6.1 We prove by induction on $d$ that $K[x_1,\ldots,x_d]$ is a UFD in which every irreducible element is prime. For $d=0$ the ring is the field $K$ by [L8], a UFD in which there are no irreducible elements by [L13] and [L1]. For $d=1$ the ring is $K[x]$, a UFD by [L5] in which every irreducible is prime by [L5], each of these two cases being a base case. For the induction step, if $K[x_1,\ldots,x_d]$ is a UFD, then $K[x_1,\ldots,x_{d+1}]=K[x_1,\ldots,x_d][x_{d+1}]$ by [L8] is a UFD with prime irreducibles by step 5.1, so the property holds for every $d$. [L1, L5, L8, L13, step 5.1, base, discharge-induction: cases d=0 and d=1]

7.1 Every ring $K[x_1,\ldots,x_d]$ is a domain by [L9], in the case $d=0$ by [L13]. It is integrally closed: for $d\ge1$ it is a UFD with prime irreducibles by step 6.1, so it satisfies (P1) and (P2) of step 1.1 and step 2.1 makes it integrally closed; for $d=0$ the ring is the field $K$ by [L8], and every element of $\operatorname{Frac}(K)$ is a fraction $a/b$ with $a,b\in K$, $b\ne0$ by [L7], that is, the unit multiple $ab^{-1}$ of an element of $K$ by [L13], and each element of $K$ is a root of the monic polynomial $T-a\in K[T]$, so every element of $\operatorname{Frac}(K)$ integral over $K$ lies in $K$. [L6, L7, L8, L9, L13, step 2.1, step 6.1] ∎
