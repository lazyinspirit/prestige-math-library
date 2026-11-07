---
id: lem-rational-zeros-of-a-nonabsolute-irreducible-form-lie-on-a-rational-form
kind: lemma
title: "Rational zeros of a non-absolutely irreducible rational form lie on a lower-degree rational form"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-projective-space-points
  - def-algebraic-closure
  - cor-the-algebraic-numbers-in-c-form-an-algebraic-closure-of-q
  - def-homogeneous-polynomial-and-homogeneous-ideal
  - def-finite-galois-extension-and-galois-group
  - thm-finite-galois-extension-characterizations
  - cor-splitting-fields-exist-for-finite-families
  - cor-fields-of-characteristic-zero-and-finite-fields-are-perfect
  - lem-finite-variable-polynomial-rings-over-fields-are-ufds
sources:
  scraped: []
  references:
    - title: "D. R. Heath-Brown, The density of rational points on curves and surfaces, Corollary 1"
      url: "https://arxiv.org/pdf/math/0405392v1"
---

## Statement

Let $n\ge2$ and let $F\in\mathbb Q[x_1,\ldots,x_n]$ be a nonzero homogeneous
form of degree $d\ge2$ that is irreducible over $\mathbb Q$ but reducible over
an algebraic closure $\overline{\mathbb Q}$. Its factorization over
$\overline{\mathbb Q}$ is square-free and its irreducible factors form one
Galois orbit. In particular, there are an absolutely irreducible homogeneous
factor $G\in\overline{\mathbb Q}[x_1,\ldots,x_n]$ and a nonzero homogeneous
form $H\in\mathbb Q[x_1,\ldots,x_n]$, both of some degree $1\le e<d$, with no
common nonconstant factor over $\overline{\mathbb Q}$, such that every rational
projective zero of $F$ is a common projective zero of $G$ and $H$.

## Statement references

[Heath-Brown, the non-absolutely irreducible rational-point case](https://arxiv.org/pdf/math/0405392v1)

## Facts & Assumptions

**Given:** $F$ and $d$ as in the Statement, and an algebraic closure
$\overline{\mathbb Q}$ of $\mathbb Q$.

[F1] [[def-algebraic-closure]]: $\overline{\mathbb Q}/\mathbb Q$ is algebraic
and $\overline{\mathbb Q}$ is algebraically closed. For existence we may take the concrete field of algebraic numbers in $\mathbb C$, supplied by [[cor-the-algebraic-numbers-in-c-form-an-algebraic-closure-of-q]], so no general choice-dependent algebraic-closure existence theorem is needed.

[F2] [[lem-finite-variable-polynomial-rings-over-fields-are-ufds]]:
$\overline{\mathbb Q}[x_1,\ldots,x_n]$ is a unique factorization domain.

[F3] [[def-finite-galois-extension-and-galois-group]]: A finite Galois
extension is a finite normal separable extension, and its Galois group is the
group of automorphisms fixing the base field.

[F4] [[cor-splitting-fields-exist-for-finite-families]],
[[cor-fields-of-characteristic-zero-and-finite-fields-are-perfect]],
[[thm-finite-galois-extension-characterizations]]: A finite family of
polynomials over $\mathbb Q$ has a finite splitting field; in characteristic
zero it is Galois, and the elements fixed by its Galois group are exactly
$\mathbb Q$.

[F5] [[def-homogeneous-polynomial-and-homogeneous-ideal]]: A homogeneous form
has only monomials of its stated total degree.

[F6] [[def-projective-space-points]]: A rational projective point is a class
of a nonzero rational coordinate vector modulo nonzero scalar multiplication.

## Proof

1.1 Factor $F$ in the UFD [F2] over $\overline{\mathbb Q}$. Every factor is
homogeneous: if a product is homogeneous, its lowest and highest nonzero
homogeneous parts are products of the corresponding parts of the factors; the
polynomial ring is a domain, so equality of the lowest and highest total degree
forces each factor to have only one total degree. Normalize each irreducible
factor so that its lexicographically leading coefficient is $1$. [F2, F5, algebra]

1.2 The finitely many coefficients of the factors are algebraic by [F1]. Their
minimal polynomials form a finite family; take a splitting field $L$ of that
family. By [F4], $L/\mathbb Q$ is finite Galois and its fixed field is
$\mathbb Q$. Applying an element of $\operatorname{Gal}(L/\mathbb Q)$ to the
factorization preserves $F$ and the leading-coefficient normalization, so
uniqueness of factorization makes the Galois group permute the distinct
normalized factors and preserve their multiplicities. For any orbit, the
product of its normalized factors is fixed by the Galois group and hence belongs
to $\mathbb Q[x_1,\ldots,x_n]$ by [F4]. Because this orbit product is monic in
the fixed lexicographic monomial order, division of $F$ by it over $\mathbb Q$
has the same zero remainder as division over $L$. If there were more than one
orbit, this would be a nonconstant proper rational factor of $F$, contradicting
irreducibility over $\mathbb Q$. Thus there is one orbit. If its common
multiplicity exceeded $1$, the product of the distinct factors would be a
nonconstant rational form $P$ and $F=cP^m$ for a nonzero $c\in\mathbb Q$,
again contradicting irreducibility over $\mathbb Q$. Hence the factors are
distinct and form one Galois orbit. [F1, F2, F3, F4, step 1.1, algebra]

2.1 Since $F$ is reducible over $\overline{\mathbb Q}$, choose one irreducible
factor $G$; there are at least two factors, so its degree $e$ satisfies
$1\le e<d$. If a rational point $x$ satisfies $F(x)=0$, then one factor
$\sigma(G)$ vanishes at $x$ for some Galois automorphism $\sigma$ by step
1.2. As $x$ has rational coordinates,
$\sigma(G(x))=\sigma(G)(x)=0$, whence $G(x)=0$. [F6, step 1.2, given, choose]

2.2 Let $K$ be the finite extension generated by the coefficients of $G$, and
choose a $\mathbb Q$-basis $1,\lambda_2,\ldots,\lambda_s$ of $K$. Grouping
the coefficients in this basis writes
$G=H_1+\sum_{j=2}^s\lambda_jH_j$ with each $H_j$ a rational homogeneous form
of degree $e$. The factor $G$ is not rational: otherwise its proper degree
would give a nonconstant rational factor of $F$. Thus some $H_j$ with $j\ge2$
is nonzero; fix one and call it $H$. For every rational zero $x$ of $F$, the
preceding step gives $G(x)=0$, and linear independence of the basis over $\mathbb Q$
then gives $H_j(x)=0$ for all $j$. In particular $H(x)=0$. If $G$ and $H$
had a common nonconstant factor, irreducibility of $G$ would give $G\mid H$;
their equal degrees would make $H$ a scalar multiple of $G$, contradicting
that $G$ is not rational. Hence they are coprime and have the required degree.
[F1, F2, F5, step 2.1, choose, algebra] ∎

