---
id: ex-nonabelian-frobenius-conjugacy-class
title: "Nonabelian frobenius conjugacy class"
kind: example
status: draft
origin: pipeline
deps: [thm-frobenius-cycle-type-and-prime-splitting, thm-frobenius-elements-above-a-prime-are-conjugate, thm-eisenstein-irreducibility-criterion]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "\u00a79.2.2, cube root of two; Milne Theorem 8.23"
      url: https://wstein.org/books/ant/ant.pdf
proof_strategy: direct argument
---

## Example

The splitting field of $T^3-2$ over $\mathbb Q$ has Galois group $S_3$. At p=5 its Frobenius conjugacy class consists of all three transpositions: distinct choices of prime can give distinct elements.

## Facts & Assumptions

**Given:** The data and hypotheses of the statement.

[F1] [[thm-frobenius-cycle-type-and-prime-splitting]]: Let $F\in\mathbb Z[T]$ be monic separable with splitting field L, and let p be a rational prime not dividing $\operatorname{Disc}(F)$. Then p is unramified in L and $\bar F\in\mathbb F_p[T]$ is squarefree. The degrees of its monic irreducible factors, with each distinct factor counted once, are exactly the cycle lengths of arithmetic Frobenius on the roots of F.

[F2] [[thm-frobenius-elements-above-a-prime-are-conjugate]]: In a finite Galois extension L/K let the nonzero prime p be unramified. If $\sigma P=P'$ above p, then $\operatorname{Frob}_{P'}=\sigma\operatorname{Frob}_{P}\sigma^{-1}.$ Thus p determines one conjugacy class. If the Galois group is abelian, the element is independent of P.

[F3] [[thm-eisenstein-irreducibility-criterion]]: Let $f=a_nx^n+\cdots+a_0\in\mathbb Z[x]$ be primitive with $n\ge1$. If there is a prime $p$ such that $ p\nmid a_n,\qquad p\mid a_i\ \text{for every }i<n,\qquad p^2\nmid a_0, $ then $f$ is irreducible in $\mathbb Q[x]$.

## Verification

1.1 Eisenstein at 2 proves $T^3-2$ irreducible. Let a be its positive real root. The real cubic field $\mathbb Q(a)$ does not contain the nonreal cube root of unity $\zeta_3$. Its quadratic polynomial remains irreducible over that real field, so $L=\mathbb Q(a,\zeta_3)$ has degree six and contains all roots. The faithful permutation action on its three roots embeds its order-six Galois group into $S_3$, hence is an isomorphism. [F3]

1.2 For roots r of $T^3-2$, the derivative is $3r^2$. Their product is 2, so $\prod_r3r^2=27\cdot4=108$. Pairing differences contributes $(-1)^3$, giving discriminant -108. Thus 5 is a good prime. Modulo 5, direct multiplication gives $(T+2)(T^2+3T+4)=T^3-2$; the quadratic discriminant is $9-16=3$ modulo 5, which is not among the squares 0,1,4. Its degrees are therefore 1 and 2. [algebra]

2.1 The Frobenius cycle theorem gives cycle type (1,2), a transposition. The Frobenius elements above 5 constitute its entire conjugacy class. Conjugating a transposition in $S_3$ yields each of the three transpositions and no other permutation. Thus the class contains three distinct elements. [F1, F2, step 1.1, step 1.2] ∎
