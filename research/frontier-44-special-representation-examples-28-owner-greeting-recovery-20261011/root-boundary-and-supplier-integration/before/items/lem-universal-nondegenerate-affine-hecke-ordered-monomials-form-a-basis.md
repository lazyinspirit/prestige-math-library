---
id: lem-universal-nondegenerate-affine-hecke-ordered-monomials-form-a-basis
kind: lemma
title: "Universal nondegenerate affine Hecke ordered monomials form a basis"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 1
deps: [def-arbitrary-level-cyclotomic-hecke-murphy-cell-and-schur-modules,
       thm-standard-basis-of-the-generic-type-a-hecke-algebra,
       thm-the-symmetric-group-has-the-coxeter-presentation]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Mathas, The representation theory of the Ariki–Koike and cyclotomic q-Schur algebras, math/0204025"
      url: "https://arxiv.org/pdf/math/0204025"
      locator: "PDF pp. 16–19, 27–37: arbitrary-level element conventions and contracts; full local arguments in these registration drafts replace the review sketches."
    - title: "Mathas, Hecke algebras and Schur algebras of the symmetric group, complete 79-page manuscript"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Ordinary finite type A only; Garnir/Murphy printed pp. 18–25 and ordinary semistandard/Specht/Schur PDF pp. 45–50 were actually read; no arbitrary-level DJM proof read claimed."
    - title: "Lyle–Mathas, Blocks of cyclotomic Hecke algebras, math/0607451v4"
      url: "https://arxiv.org/pdf/math/0607451v4"
      locator: "Section 2.1–2.3 exact multipartition-summand Schur variant and deformation; no external proof fallback."
---

## Statement

Let $R:=\mathbb Z[z^{\pm1},U_1^{\pm1},\dots,U_\ell^{\pm1}]$ be the universal
Laurent parameter ring of
[[def-arbitrary-level-cyclotomic-hecke-murphy-cell-and-schur-modules]], and let
$H_n^{\mathrm{aff}}$ be the $R$-algebra presented there by the commuting units
$X_1,\dots,X_n$, the generators $T_1,\dots,T_{n-1}$ and the quadratic, braid,
distant, Bernstein and mixed-commutation relations — **without** imposing the
first-variable cyclotomic relation. Then:

1. both families
   $$X^aT_w\quad\text{and}\quad T_wX^a\qquad(a\in\mathbb Z^n,\ w\in S_n)$$
   are $R$-bases of $H_n^{\mathrm{aff}}$, and the same two families are bases
   after arbitrary base change to a commutative ring in which $z$ is a unit;
2. left multiplication by any nonzero element of the Laurent polynomial
   subalgebra $R[X_1^{\pm1},\dots,X_n^{\pm1}]\subseteq H_n^{\mathrm{aff}}$ is
   injective;
3. after localizing at the differences $X_i-X_j$ ($i\ne j$), the algebra maps
   into the rational crossed product of the fraction field of the polynomial
   ring with $S_n$, and in that localization the elements
   $$\Phi_i:=T_i-\frac{(z-1)X_{i+1}}{X_{i+1}-X_i} =T_i-c_{i,i+1},\qquad c_{ij}:=\frac{(z-1)X_j}{X_j-X_i},$$
   satisfy $\Phi_if=s_i(f)\Phi_i$ for every (localized) Laurent polynomial $f$.

No cyclotomic basis, Brundan–Kleshchev theorem, trace form or
primitive-content assertion is used.

## Facts & Assumptions

**Given:** The universal Laurent parameter ring $R$, the affine presentation
$H_n^{\mathrm{aff}}$ of the Statement, the symmetric group $S_n$ with its
Coxeter presentation, and the parameters
$c_{ij}=(z-1)X_j/(X_j-X_i)$ and $d_{ij}=(X_j-zX_i)/(X_j-X_i)$ in the rational
crossed product.

[F1] In $H_n^{\mathrm{aff}}$ the relations $(T_i-z)(T_i+1)=0$,
$T_iT_{i+1}T_i=T_{i+1}T_iT_{i+1}$, $T_iT_j=T_jT_i$ for $|i-j|>1$,
$T_iX_iT_i=zX_{i+1}$ and $X_jT_i=T_iX_j$ for $j\notin\{i,i+1\}$ hold, and
$X_1,\dots,X_n$ are commuting units
([[def-arbitrary-level-cyclotomic-hecke-murphy-cell-and-schur-modules]]).

[F2] The quadratic relation makes $T_i$ invertible, with
$T_i^{-1}=z^{-1}(T_i-(z-1))$; the $T_i$ generate a quotient of the generic
type-A Hecke algebra, whose standard elements $T_w$ ($w\in S_n$) form a basis
of the subalgebra they generate
([[thm-standard-basis-of-the-generic-type-a-hecke-algebra]]).

[F3] $S_n=\langle s_1,\dots,s_{n-1}\rangle$ with the Coxeter relations, and
each $w\in S_n$ has a reduced expression
$w=s_{i_1}\cdots s_{i_k}$, $k=\ell(w)$; subwords of reduced expressions are
reduced expressions for elements Bruhat-below $w$
([[thm-the-symmetric-group-has-the-coxeter-presentation]]).

## Proof

**Proof technique:** direct.

**Given:** The universal ring $R$, the affine algebra $H_n^{\mathrm{aff}}$, the

rational crossed product of the fraction field $K$ of

$R[X_1^{\pm1},\dots,X_n^{\pm1}]$ with $S_n$, and the data of [F1]–[F3].

1.1 Spanning by ordered monomials. The Bernstein relation, read as $T_iX_i=X_{i+1}T_i-(z-1)X_{i+1}$ and $X_iT_i=T_iX_{i+1}-(z-1)X_{i+1}$ (both consequences of $T_iX_iT_i=zX_{i+1}$ and [F2]), together with the distant commutation $T_iX_j=X_jT_i$ for $j\notin\{i,i+1\}$, moves every $X$-symbol in a word past the $T$-symbols at the cost of terms with the same number of $X$-symbols and a strictly smaller number of $(T,X)$-inversions; iterating rewrites any element as an $R$-combination of the $X^aT_w$. The subalgebra generated by the $T_i$ is spanned by the $T_w$ by [F2], and the $X$'s commute, so the family $X^aT_w$, $a\in\mathbb Z^n$, $w\in S_n$, spans $H_n^{\mathrm{aff}}$; applying the presentation anti-involution (which fixes the $X_i$ and $T_i$ and reverses products) gives the same spanning statement for the family $T_wX^a$. [F1, F2, algebra]

1.2 The rational representation. Let $K$ be the fraction field of the commutative Laurent polynomial ring $R[X_1^{\pm1},\dots,X_n^{\pm1}]$, considered as the field of rational functions in the commuting variables $X_1,\dots,X_n$ over the fraction field of $R$; form the crossed product algebra $K\rtimes S_n$ with $K$-basis the group elements and multiplication $f\sigma\cdot g\tau=f\,\sigma(g)\,\sigma\tau$. Put $c_{ij}:=\frac{(z-1)X_j}{X_j-X_i},\qquad d_{ij}:=\frac{X_j-zX_i}{X_j-X_i}=-\frac{X_j}{X_j-X_i}c_{ij}+1,\qquad T_i:=c_{i,i+1}+d_{i,i+1}s_i .$ Substituting these rational functions and clearing the nonzero denominators $X_j-X_i$, the following identities are checked directly in the polynomial ring: $c_{ij}+c_{ji}=z-1$; $d_{ij}d_{ji}=z+(z-1)c_{ij}-c_{ij}^2$; and, for three distinct indices, $c_{ij}c_{jk}=c_{ik}(c_{ij}+c_{jk}-(z-1))$. They imply that the $T_i$ satisfy the quadratic relation $(T_i-z)(T_i+1)=0$ and the braid relation, while distant generators involve disjoint variable pairs and commute; the $T_i$ also satisfy the Bernstein relations with the multiplication operators $X_j$ by direct substitution. Consequently the assignment of [F1] defines an $R$-algebra homomorphism from the localization $H_n^{\mathrm{aff}}[(X_i-X_j)^{-1}]$ to $K\rtimes S_n$. [F1, algebra]

1.3 Independence of the ordered monomials. Fix a reduced word $w=s_{i_1}\cdots s_{i_k}$ and expand $T_w=T_{i_1}\cdots T_{i_k}$ in the $K$-basis of $K\rtimes S_n$; the term in which the factor $d_{i_t,i_t+1}s_{i_t}$ is chosen from every $T_{i_t}$ contributes the scalar $\prod_td_{i_t,i_t+1}\ne0$ times the permutation $s_w$, while every other term contains the product of a proper subword of $s_{i_1}\cdots s_{i_k}$, hence a permutation of strictly smaller length by [F3]. So the coefficient of $s_w$ in $T_w$ is a nonzero product of $d$-functions and all other occurring permutations are proper Bruhat subwords. To see that the resulting triangular system forces independence, apply a putative $K\rtimes S_n$ dependence $\sum_{a,w}\lambda_{a,w}X^aT_w=0$ to the element $f:=\sum_{j=1}^njX_j$: the crossed-product identity $X^aT_w(f)$ expands as a rational function $X^a\,\bigl(T_w(f)\bigr)$ plus terms of strictly lower permutation length, and the leading contributions $X^a\,w(f)$, indexed by distinct $a$ and distinct $w$, are pairwise distinct Laurent monomials times $w(f)$; a maximal leading monomial in a dependence would have to cancel against several equal monomials, and within a fixed $(a,w)$ the coefficient of the top monomial of $X^aw(f)$ is a nonzero scalar multiple of the triangular coefficient of $T_w$, which is nonzero. Hence all $\lambda_{a,w}=0$ and the family $X^aT_w$ is $K$-independent; the same argument applied after the anti-involution gives the independence of $T_wX^a$. Since $H_n^{\mathrm{aff}}$ is the base change of its localization along the injective map of domains, and the change-of-basis from $X^aT_w$ to the spanning set is triangular with unit diagonal over $R$, the family is an $R$-basis, and it stays a basis after any base change in which $z$ remains a unit. [F1, F2, F3, algebra]

1.4 The intertwiners after localizing at the differences. In the localized algebra set $\Phi_i:=T_i-c_{i,i+1}$. For $f$ a (localized) Laurent polynomial, the Bernstein relations of [F1] give $T_if=s_i(f)T_i+\gamma_i(f),\qquad \Phi_if=T_if-c_{i,i+1}f=s_i(f)T_i+\gamma_i(f)-c_{i,i+1}f$ with a correction $\gamma_i(f)$ supported on terms with no $s_i$; substituting $c_{i,i+1}=\frac{(z-1)X_{i+1}}{X_{i+1}-X_i}$ and clearing denominators shows $s_i(f)\Phi_i=s_i(f)T_i-s_i(f)c_{i,i+1}$ agrees with the previous display, so $\Phi_if=s_i(f)\Phi_i .$ Only the three nonzero differences occurring in $c_{i,i+1}$, $s_i(c_{i,i+1})$ and $s_i(f)$ are inverted; no $U_a-U_b$, quantum factorial or Gram determinant is inverted. [F1, algebra]

2.1 Injectivity of left multiplication and the right basis. Every element of $P:=R[X_1^{\pm1},\dots,X_n^{\pm1}]$ is a nonzero-divisor in $H_n^{\mathrm{aff}}$: writing the basis expansion $h=\sum_wX^{a(w)}T_w$ with $X^{a(w)}\in P$ and multiplying on the left by $0\ne f\in P$ gives $\sum_w(fX^{a(w)})T_w$, and the first basis assertion forces $fX^{a(w)}=0$ for every $w$, i.e. $X^{a(w)}=0$, since $P$ is a domain and the $X_i$ are units. Hence left multiplication by any nonzero Laurent polynomial is injective, and the same argument with the right basis gives the analogous statement for right multiplication. [step 1.1, step 1.3, algebra]

2.2 Subword expansion and the crossed-product embedding. Expanding each $T_{i_t}$ in a reduced word as $\Phi_{i_t}+c_{i_t,i_{t+1}}$ and repeatedly using step 1.4, the product $T_wf$ becomes a sum of terms $v(f)\cdot\kappa_v$ in which $v$ runs through the subwords of $s_{i_1}\cdots s_{i_k}$ (with the empty subword contributing the identity permutation) and each coefficient $\kappa_v$ is a sum of products of the $c$'s and $d$'s, so its denominator is a product of differences $X_i-X_j$ with $i\ne j$. By [F3] each such $v$ is Bruhat-below $w$. Hence the localization map of step 1.2 is defined on $H_n^{\mathrm{aff}}[(X_i-X_j)^{-1}]$ and its kernel is zero on the basis expansion of every element, i.e. the map embeds the localized algebra into $K\rtimes S_n$, and the intertwining relation of step 1.4 holds throughout the image. [F3, step 1.2, step 1.4, algebra]

3.1 Conclusion. Steps 1.1 and 1.3 show that $X^aT_w$ and $T_wX^a$ ($a\in\mathbb Z^n$, $w\in S_n$) are both $R$-bases of $H_n^{\mathrm{aff}}$, over the universal Laurent parameter ring and after any base change in which $z$ is a unit; step 2.1 gives injectivity of left multiplication by a nonzero Laurent polynomial; steps 1.4 and 2.2 give the embedding into the rational crossed product and the relation $\Phi_if=s_i(f)\Phi_i$. No cyclotomic basis, Brundan–Kleshchev theorem, trace form or primitive-content assertion is used anywhere in the argument. [step 1.3, step 2.1, step 2.2] ∎



## Remarks

The universal statement is stated over the characteristic-zero Laurent domain
and then specializes by base change, so all polynomial identities in the
proof are identities in $R$. The proof uses no choice principle: all
straightening, triangularity and expansion steps are finite.
