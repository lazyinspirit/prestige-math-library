---
id: ex-polynomial-differential-representation-of-weyl-algebra
kind: example
title: "The polynomial differential representation and its characteristic-p kernel"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps: [def-polynomial-weyl-algebra, thm-polynomial-weyl-algebra-normal-ordered-basis, def-polynomial-ring-on-a-family-of-indeterminates]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "François Dumas, Noncommutative Invariants, §2.1.1"
      url: "https://lmbp.uca.fr/~fdumas/fichiers/B-Mat60.pdf"
    - title: "Pavel Etingof, Lectures on Calogero-Moser Systems, Lecture 8"
      url: "https://math.mit.edu/~etingof/zlecnew.pdf"
---

## Statement

Let $k$ be any field and $n\geq1$. Multiplication by $t_i$ and partial differentiation $\partial_i$ define a unital left $A_n(k)$-module structure on $k[t_1,\ldots,t_n]$. If $\operatorname{char}(k)=p>0$, this representation is not faithful: $p_i^p$ is a nonzero element of $A_n(k)$ that acts by zero.

## Facts & Assumptions

**Given:** A field $k$, an integer $n\geq1$, and the polynomial ring $k[t_1,\ldots,t_n]$.

[F1] [[def-polynomial-ring-on-a-family-of-indeterminates]]: polynomial elements are finite $k$-linear combinations of distinct monomials $t^\gamma$.

[F2] [[def-polynomial-weyl-algebra]]: $A_n(k)=W_n(k;1)$ has generators with $[p_i,x_j]=\delta_{ij}1$ and commuting same-type generators.

[F3] [[thm-polynomial-weyl-algebra-normal-ordered-basis]]: the monomials $x^\alpha p^\beta$ form a basis of $A_n(k)$.

## Verification

1.1 On a monomial $t^\gamma=t_1^{\gamma_1}\cdots t_n^{\gamma_n}$ define $X_i(t^\gamma)=t^{\gamma+e_i}$, and define $D_i(t^\gamma)=\gamma_i t^{\gamma-e_i}$ when $\gamma_i>0$ and $0$ when $\gamma_i=0$; extend both maps $k$-linearly using [F1]. [given, F1, construct]

2.1 The $X_i$ commute because multiplication in the polynomial ring commutes; for distinct $i,j$, the $D_i$ commute because applying the two exponent-lowering maps multiplies by $\gamma_i\gamma_j$ in either order, and $D_i$ commutes with itself. For each $i,j$, applying $D_iX_j-X_jD_i$ to $t^\gamma$ gives $\delta_{ij}t^\gamma$: when $i=j$ the coefficient difference is $(\gamma_i+1)-\gamma_i=1$, and when $i\ne j$ the two terms agree. Hence the generator assignments satisfy [F2]. [F1, F2, step 1.1, algebra]

3.1 Send a free word in the generators to the corresponding composition of $X_i,D_i$, send the empty word to the identity, and extend linearly. Composition respects concatenation, so this defines an algebra action of the free associative algebra. By step 2.1 it kills every relator in [F2], hence every left-right multiple of those relators; the action descends to a unital left $A_n(k)$-module. If $\operatorname{char}(k)=p>0$, then for every monomial, $D_i^p(t^\gamma)=0$: it vanishes when $\gamma_i<p$, and otherwise its coefficient is a product of $p$ consecutive integers, hence divisible by $p$. Thus $D_i^p=0$. [F2, step 2.1, algebra, construct]

4.1 By [F3], $p_i^p$ is a nonzero normal-ordered basis monomial in $A_n(k)$, while step 3.1 shows that the representation sends it to zero. Therefore the representation is nonfaithful in positive characteristic. [F3, step 3.1, algebra] ∎
