---
id: ex-frobenius-in-a-small-cyclotomic-field
title: "Frobenius in a small cyclotomic field"
kind: example
status: published
origin: pipeline
deps: [thm-frobenius-cycle-type-and-prime-splitting, thm-frobenius-order-is-residue-degree, cor-galois-prime-decomposition-efg, thm-eisenstein-irreducibility-criterion, def-discriminant-of-a-monic-polynomial]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Chapter 8, Example 8.18, p.143"
      url: https://www.jmilne.org/math/CourseNotes/ANT.pdf
proof_strategy: direct argument
---

## Example

Let $\zeta=\zeta_5$ be a primitive fifth root of unity and $L=\mathbb Q(\zeta)$. Then $\operatorname{Gal}(L/\mathbb Q)\cong(\mathbb Z/5\mathbb Z)^\times=C_4$ by $\sigma_a(\zeta)=\zeta^a$. For every prime $p\ne5$, p is unramified and its arithmetic Frobenius is $\sigma_{p\bmod5}$. In particular 2 is inert, with $(e,f,g)=(1,4,1)$.

## Facts & Assumptions

**Given:** The data and hypotheses of the statement.

[F1] [[thm-frobenius-cycle-type-and-prime-splitting]]: Let $F\in\mathbb Z[T]$ be monic separable with splitting field L, and let p be a rational prime not dividing $\operatorname{Disc}(F)$. Then p is unramified in L and $\bar F\in\mathbb F_p[T]$ is squarefree. The degrees of its monic irreducible factors, with each distinct factor counted once, are exactly the cycle lengths of arithmetic Frobenius on the roots of F.

[F2] [[thm-frobenius-order-is-residue-degree]]: For finite Galois L/K and nonzero $P\mid p$, the arithmetic Frobenius coset has order $f(P/p)$ in D/I. If P is unramified, $\operatorname{Frob}_P$ has the same order in D.

[F3] [[cor-galois-prime-decomposition-efg]]: For a finite Galois extension L/K and nonzero prime p, every P above p has the same ramification index e and residue degree f. If there are g such primes, then $efg=[L:K]$.

[F4] [[thm-eisenstein-irreducibility-criterion]]: Let $f=a_nx^n+\cdots+a_0\in\mathbb Z[x]$ be primitive with $n\ge1$. If there is a prime $p$ such that $ p\nmid a_n,\qquad p\mid a_i\ \text{for every }i<n,\qquad p^2\nmid a_0, $ then $f$ is irreducible in $\mathbb Q[x]$.

[F5] [[def-discriminant-of-a-monic-polynomial]]: By prop-vandermonde-square-is-symmetric and thm-fundamental-theorem-of-symmetric-polynomials, there is a unique polynomial $D_n\in\mathbb Z[T_1,\ldots,T_n]$ such that $\Delta_n(x_1,\ldots,x_n)^2=D_n(e_1,\ldots,e_n).$ For a monic polynomial $f(t)=t^n+a_1t^{n-1}+\cdots+a_n$ over a commutative ring, its **discriminant** is $\operatorname{Disc}(f):=D_n(-a_1,a_2,\ldots,(-1)^na_n).$ Equivalently, in any algebra in which $f$ splits with roots $\alpha_1,\ldots,\alpha_n$, this coefficient expression evaluates to $\Delta_n(\alpha_1,\ldots,\alpha_n)^2$. The definition therefore depends only on the coefficients and not on a choice or ordering of roots. For a monic constant polynomial, $\operatorname{Disc}(1)=1$.

## Verification

1.1 The polynomial $\Phi(T)=T^4+T^3+T^2+T+1$ satisfies $\Phi(T+1)=T^4+5T^3+10T^2+10T+5$, Eisenstein at 5. Translation preserves reducibility, so Phi is irreducible. Its four roots $\zeta^a$ for a=1,2,3,4 already lie in L. They give four automorphisms, with composition multiplying exponents modulo 5. The element 2 has successive powers 2,4,3,1, hence generates this group. [F4]

2.1 At a root r of Phi, differentiating $(T-1)\Phi(T)=T^5-1$ gives $\Phi'(r)=5r^4/(r-1)$. The product over its four roots is $5^4/5=5^3$: the root product is 1, and $\prod(r-1)=\Phi(1)=5$. Pairing opposite root differences shows $\prod_r\Phi'(r)=(-1)^6\operatorname{Disc}(\Phi)=\operatorname{Disc}(\Phi)$. Hence its discriminant is $5^3$. [F5, step 1.1]

3.1 For $p\ne5$ the good-reduction theorem gives unramifiedness and distinct root reductions. Frobenius sends the residue of zeta to its p-th power; since $\zeta^p$ is another root, distinctness forces $\operatorname{Frob}(\zeta)=\zeta^p$. At p=2 that automorphism has order four, so f=4; e=1 and efg=4 then give g=1, namely inertness. [F1, F2, F3, step 1.1, step 2.1] ∎
