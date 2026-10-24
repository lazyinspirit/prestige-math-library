---
id: ex-non-noetherian-ring-with-a-strict-chain-of-principal-ideals
kind: example
title: "The subring $k[x,y,x/y,x/y^2,\\ldots]$ of $k(x,y)$ has a strictly ascending chain of principal ideals"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-noetherian-ring-ideal-characterisations, def-field-of-fractions, thm-field-of-fractions-is-a-field-and-the-domain-embeds, cor-multivariate-polynomial-ring-over-a-domain-is-a-domain, def-field, def-zero-divisor-and-integral-domain, def-generated-and-principal-ideals, thm-generated-ideal-description-in-a-commutative-ring, def-subring, def-multivariate-polynomial-ring-by-iteration, def-polynomial-ring-over-a-commutative-ring]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Example (16.6)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Example

Let $k$ be a field. Then $k[x,y]$ is an integral domain, so it has a field of
fractions ([[def-field-of-fractions]]) in which it embeds
([[thm-field-of-fractions-is-a-field-and-the-domain-embeds]]); write
$k(x,y):=\operatorname{Frac}(k[x,y])$ and identify $k[x,y]$ with its image.
Inside $k(x,y)$ let

$$R\;:=\;k[x,\;y,\;x/y,\;x/y^{2},\;x/y^{3},\ldots]$$

be the smallest subring of $k(x,y)$ containing $k$, $x$, $y$ and $x/y^{i}$ for
every $i\ge1$. Then

$$(x)\;\subsetneq\;(x/y)\;\subsetneq\;(x/y^{2})\;\subsetneq\;\cdots$$

is a strictly ascending chain of **principal** ideals of $R$. It never
stabilises, so $R$ is not Noetherian.

The element $y$ belongs to $R$ and is what makes each inclusion hold: $x=y\cdot(x/y)$,
$x/y=y\cdot(x/y^{2})$, and so on. What makes each inclusion strict is that $y$
is not invertible in $R$.

## Facts & Assumptions

**Given:** A field $k$, the iterated polynomial ring $k[x,y]=k[x][y]$, and the field $k(x,y)=\operatorname{Frac}(k[x,y])$ with $k[x,y]$ identified with its image. For $c\in\mathbb N$ and $d\in\mathbb Z$ the symbol $x^{c}y^{d}$ denotes the element $x^{c}y^{d}$ of $k(x,y)$, read as the fraction $x^{c}/y^{-d}$ when $d<0$.

[L1] A **field** is a set with two operations and distinguished elements $0\ne1$ in which $(F,+)$ is an abelian group, multiplication is associative and commutative on all of $F$ with $x\cdot1=x$, and every $x\ne0$ has a multiplicative inverse ([[def-field]]).

[L2] An **integral domain** is a commutative ring $R$ with $1\ne0$ and no zero divisors, that is, in which $ab=0$ implies $a=0$ or $b=0$ ([[def-zero-divisor-and-integral-domain]]).

[L3] If $R$ is an integral domain, then $R[x_1,\ldots,x_n]$ is an integral domain for every $n\in\mathbb N$, including $n=0$ ([[cor-multivariate-polynomial-ring-over-a-domain-is-a-domain]]).

[L4] If $D$ is an integral domain then $D\setminus\{0\}$ is multiplicative and $\operatorname{Frac}(D)=(D\setminus\{0\})^{-1}D$ is the field of fractions of $D$, with elements the fractions $a/b$ ($b\ne0$) modulo the localisation equivalence ([[def-field-of-fractions]]).

[L5] For every integral domain $D$ the ring $\operatorname{Frac}(D)$ is a field, and $d\mapsto d/1$ is an injective unital ring homomorphism $D\to\operatorname{Frac}(D)$ ([[thm-field-of-fractions-is-a-field-and-the-domain-embeds]]).

[L6] A subset $S$ of a ring is a **subring** when $1\in S$ and $S$ is closed under addition, additive inverses and multiplication ([[def-subring]]).

[L7] Polynomial rings in finitely many indeterminates are defined by $R[x_1,\ldots,x_0]:=R$ and $R[x_1,\ldots,x_{n+1}]:=R[x_1,\ldots,x_n][x_{n+1}]$ ([[def-multivariate-polynomial-ring-by-iteration]]).

[L8] $R[x]$ is the set of finitely supported functions $\mathbb N\to R$, with coefficientwise addition and convolution product ([[def-polynomial-ring-over-a-commutative-ring]]).

[L9] For $S\subseteq R$, $(S)$ is the intersection of all two-sided ideals containing $S$, so $S\subseteq(S)$; $(\{a\})$ is written $(a)$ and is called principal ([[def-generated-and-principal-ideals]]).

[L10] In a commutative ring, $(S)$ consists of finite sums $\sum r_is_i$, and $(a)=Ra$ ([[thm-generated-ideal-description-in-a-commutative-ring]]).

[L11] For a commutative ring, being Noetherian is equivalent to every ascending chain of ideals indexed by $\mathbb N$ stabilising ([[thm-noetherian-ring-ideal-characterisations]]).

## Verification

**Proof technique:** direct.

1.1 A field is an integral domain: it is a commutative ring with $1\ne0$, and if $ab=0$ with $a\ne0$ then $b=a^{-1}ab=0$. Hence $k[x,y]$ is an integral domain, its field of fractions $k(x,y)$ is a field, and $k[x,y]$ embeds in it. [L1, L2, L3, L4, L5, given]

2.1 Let $R$ be the intersection of all subrings of $k(x,y)$ containing $k$, $x$, $y$ and every $x/y^{i}$ with $i\ge1$; this family is nonempty because $k(x,y)$ itself belongs to it, and an intersection of subrings is a subring, so $R$ is the smallest such subring. [L6, step 1.1]

3.1 $R$ is the set of $k$-linear combinations of the elements $x^{c}y^{d}$ with $c\ge1$ and $d\in\mathbb Z$, together with the elements $y^{d}$ with $d\ge0$. Call that set $S$. It is a subring: it contains $1=y^{0}$, is visibly closed under addition and additive inverses, and is closed under multiplication because $(x^{c}y^{d})(x^{c'}y^{d'})=x^{c+c'}y^{d+d'}$, where $c+c'\ge1$ as soon as one of $c,c'$ is, and where $d+d'\ge0$ when $c=c'=0$. It contains the listed generators, since $x=x^{1}y^{0}$, $y=y^{1}$ and $x/y^{i}=x^{1}y^{-i}$. Conversely every element of $S$ lies in any subring containing the generators, because $x^{c}y^{d}$ with $c\ge1$ is $x^{c-1}$ times $xy^{d}$, and $xy^{d}$ is $x\cdot y^{d}$ when $d\ge0$ and is the generator $x/y^{-d}$ when $d<0$. So $S=R$. [L6, L9, step 2.1]

4.1 The elements $x^{c}y^{d}$ of $k(x,y)$, for $c\ge0$ and $d\in\mathbb Z$, are $k$-linearly independent, and consequently $1/y\notin R$. For the independence, a finite relation $\sum\lambda_{c,d}\,x^{c}y^{d}=0$ becomes, after multiplication by $y^{M}$ for $M$ large enough that every $d+M$ occurring is at least $0$, a relation $\sum\lambda_{c,d}\,x^{c}y^{d+M}=0$ among distinct monomials of $k[x,y]$; a polynomial is a finitely supported family of coefficients, so it vanishes exactly when every coefficient does, and the embedding of $k[x,y]$ is injective, so all $\lambda_{c,d}=0$. Now $1/y=x^{0}y^{-1}$, whose index pair has $c=0$ and $d=-1<0$; by step 3.1 and the independence just proved, $1/y$ is not among the $k$-linear combinations making up $R$. [L5, L7, L8, step 3.1]

5.1 For every $n\in\mathbb N$, $(x/y^{n})\subseteq(x/y^{n+1})$ and the inclusion is strict. The inclusion holds because $y\in R$ and $x/y^{n}=y\cdot(x/y^{n+1})$, so the generator of the left ideal lies in the right one. If the two were equal then $x/y^{n+1}=r\cdot x/y^{n}$ for some $r\in R$; multiplying by $y^{n}/x$ in the field $k(x,y)$, which is legitimate because $x\ne0$ and $y\ne0$ there, gives $r=1/y$, contradicting step 4.1. At $n=0$ this reads $(x)\subsetneq(x/y)$. [L9, L10, step 3.1, step 4.1]

6.1 The chain $(x)\subseteq(x/y)\subseteq(x/y^{2})\subseteq\cdots$ is an ascending chain of ideals of $R$ indexed by $\mathbb N$ with every inclusion strict, so for no index $N$ is it constant from $N$ onwards. The ascending chain condition fails and $R$ is not Noetherian. [L11, step 5.1] ∎

## Remarks

- **The failure here is a non-terminating factorisation.** Splitting off a factor of $y$ gives $x=y\cdot(x/y)$, then $x/y=y\cdot(x/y^{2})$, and so on without end, and the ascending chain of principal ideals is the same phenomenon read as ideals. That is a different failure from the one on this page's subalgebra of $k[x,y]$, where a single ideal needs infinitely many generators while every principal ideal behaves.

- **Dropping $y$ from the generating list breaks the example.** The quotient of two consecutive generators $x/y^{n}$ and $x/y^{n+1}$ is $y$, so without $y$ in the ring there is nothing to make the inclusion $(x/y^{n})\subseteq(x/y^{n+1})$ hold, and the displayed chain is no longer ascending. The published source lists $y$ among the generators for exactly this reason.

- **No ideal in the chain is the unit ideal, so $R$ is not a field.** Each $x/y^{n}$ has $c=1$ in the description of step 3.1, and multiplying it by any $r\in R$ produces a $k$-combination of elements $x^{c}y^{d}$ with $c\ge1$; the element $1=x^{0}y^{0}$ is not one of those, by the independence in step 4.1.
