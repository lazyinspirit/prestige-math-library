---
id: def-hh-type-a-rational-skew-group-algebra
kind: definition
title: "The rational skew group algebra for type A"
status: published
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 1
deps: [def-hh-type-a-weight-lattice-laurent-ring-and-divided-differences, lem-hh-finite-polynomial-and-localization-constructions]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Alexander A. Kirillov, Jr., Lectures on the affine Hecke algebras and Macdonald conjectures (Harvard lectures, 1994; arXiv:math/9501219v1)"
      url: "https://arxiv.org/pdf/math/9501219"
      locator: "Lecture 3, Theorem 3.13, PDF p. 20: polynomial representations by rational-coefficient permutation operators."
    - title: "I. G. Macdonald, Affine Hecke algebras and orthogonal polynomials, Séminaire Bourbaki 797, Astérisque 237 (1996), pp. 189–207"
      url: "https://smf.emath.fr/system/files/2017-08/smf_ast_237_189-207.pdf"
      locator: "§4.6, PDF pp. 9–10: the basic representation in a rational function field with Weyl-group operators."
---

## Definition

Keep $R_0$, $A$, and the action of $S_n$ from [[def-hh-type-a-weight-lattice-laurent-ring-and-divided-differences]]. Let $K:=\operatorname{Frac}(A)$, the fraction field supplied by [[lem-hh-finite-polynomial-and-localization-constructions]]. Each $w\in S_n$ acts on $K$ by the unique extension
$$
w(f/g):=w(f)/w(g)\qquad(f,g\in A,\ g\ne0).
$$
The **rational skew group algebra** $K\rtimes S_n$ is the $K$-vector space of finite sums $\sum_{w\in S_n}a_w[w]$, with multiplication determined by
$$
(a[w])(b[v])=a\,w(b)[wv]\qquad(a,b\in K,\ w,v\in S_n).
$$
Its unit is $1[1]$ and its $K$-basis is $([w])_{w\in S_n}$. It acts on $K$ by
$$
(a[w])\cdot f:=a\,w(f)\qquad(a,f\in K,\ w\in S_n).
$$

## Facts & Assumptions

**Given:** The domain $A$, its fraction field $K$, and the permutation action of $S_n$ on $A$ from the preceding definition.

[F1] [[def-hh-type-a-weight-lattice-laurent-ring-and-divided-differences]]: $A$ is a commutative integral domain and each $w\in S_n$ permutes its Laurent variables.

[F2] [[lem-hh-finite-polynomial-and-localization-constructions]]: the fraction field of an integral domain is a field containing that domain injectively.

## Proof

**Given:** The data of the Definition.

1.1 For $f/g\in K$ with $g\ne0$, the denominator $w(g)$ is nonzero because the automorphism $w$ of $A$ is injective. If $f/g=f'/g'$, then $fg'=f'g$, so applying $w$ gives $w(f)w(g')=w(f')w(g)$; hence $w(f)/w(g)=w(f')/w(g')$. Thus the displayed formula is well-defined on $K$ and defines a field automorphism, with inverse the action of $w^{-1}$. [F1, F2, algebra]

2.1 The finite-support sums form a $K$-module with basis symbols $[w]$. Multiplication is closed because $wv\in S_n$ and $a\,w(b)\in K$. For $a,b,c\in K$ and $w,v,u\in S_n$, $((a[w])(b[v]))(c[u])=a\,w(b)\,(wv)(c)[wvu]$, while $(a[w])((b[v])(c[u]))=a\,w(b\,v(c))[wvu]=a\,w(b)\,(wv)(c)[wvu]$. These agree because $w$ acts as a field automorphism and the action is a group action; distributivity gives associativity for finite sums. [step 1.1, algebra]

3.1 The symbol $1[1]$ is a two-sided identity since the identity permutation fixes every coefficient and $1w(b)=b$. By construction the symbols $[w]$ are a $K$-basis, and multiplication also gives $[w]b=w(b)[w]$. Since every permutation fixes $R_0$, the displayed operations define a unital associative $R_0$-algebra. [step 2.1, algebra]

4.1 The stated action is an algebra representation: $(a[w])\cdot((b[v])\cdot f)=a\,w(b\,v(f))=a\,w(b)(wv)(f)=((a[w])(b[v]))\cdot f$, using the multiplication from step 2.1. Additivity extends this identity to finite sums, so multiplication in $K\rtimes S_n$ agrees with composition of its operators on $K$. [F1, step 2.1, algebra] ∎

