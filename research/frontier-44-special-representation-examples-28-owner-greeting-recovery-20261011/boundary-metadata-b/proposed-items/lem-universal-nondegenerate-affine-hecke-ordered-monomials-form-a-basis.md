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
type-A Hecke algebra, whose standard elements $T_w$ ($w\in S_n$) span
the subalgebra they generate; their independence in the affine algebra is
proved below
([[thm-standard-basis-of-the-generic-type-a-hecke-algebra]]).

[F3] $S_n=\langle s_1,\dots,s_{n-1}\rangle$ with the Coxeter relations, and
each $w\in S_n$ has a reduced expression
$w=s_{i_1}\cdots s_{i_k}$, $k=\ell(w)$; the permutation represented by any subword is Bruhat-below $w$, and a
proper subword has length strictly smaller than $\ell(w)$
([[thm-the-symmetric-group-has-the-coxeter-presentation]]).

## Proof

**Proof technique:** direct.

**Given:** The universal domain $R$, its Laurent polynomial ring $P=R[X_1^{\pm1},\dots,X_n^{\pm1}]$, the fraction field $K=\operatorname{Frac}(P)$, and the data of [F1]–[F3].

1.1 Ordered spanning without localization. For every $f\in P$ the presentation relations give $T_if=s_i(f)T_i+c_{i,i+1}(f-s_i(f))$, where $c_{i,i+1}=(z-1)X_{i+1}/(X_{i+1}-X_i)$. The correction is in $P$: $f-s_i(f)$ is divisible by $X_{i+1}-X_i$, first for ordinary monomials by the difference-of-powers identity, and then for Laurent monomials after multiplying by a symmetric Laurent monomial unit. For $f=X_i$ this is the Bernstein relation, for $f=X_{i+1}$ it is its conjugate using the quadratic relation, and the general formula follows by addition and the product rule $f g-s_i(f g)=(f-s_i(f))g+s_i(f)(g-s_i(g))$, including inverse generators by applying that rule to $f f^{-1}=1$. Moving a polynomial across a $T$ reduces the number of misplaced polynomial factors, and correction terms reduce the number of $T$ factors; the finite Hecke relations then span the remaining words by $T_w$. Thus $H_n^{\mathrm{aff}}$ is spanned over $P$ by the $T_w$, and the presentation anti-involution fixing $X_i,T_i$ gives right ordered spanning too. [F1, F2, algebra]

1.2 A representation of the unlocalized presentation. Form $K\rtimes S_n$ with multiplication $(f\sigma)(g\tau)=f\sigma(g)\sigma\tau$. For distinct indices set $c_{ij}=(z-1)X_j/(X_j-X_i)$ and $d_{ij}=(X_j-zX_i)/(X_j-X_i)=z-c_{ij}$, and assign $T_i\mapsto c_{i,i+1}+d_{i,i+1}s_i$, $X_j\mapsto X_j$. The rational identities $c_{ij}+c_{ji}=z-1$ and $d_{ij}d_{ji}=z+(z-1)c_{ij}-c_{ij}^2$ give the quadratic relation. For three distinct indices, expansion of the two braid products in their six permutation coefficients agrees: the longest coefficients are $d_{ij}d_{ik}d_{jk}$ in either order; the two length-two coefficients agree by commuting scalar factors; the length-one and identity coefficients agree using $c_{ij}c_{jk}=c_{ik}(c_{ij}+c_{jk}-(z-1))$ together with the preceding quadratic identities. These identities follow by multiplying by the common product of the differences and expanding the polynomial numerators. Distant relations follow from disjoint variable pairs. Finally $T_if-s_i(f)T_i=c_{i,i+1}(f-s_i(f))$, so the Bernstein and mixed relations hold. All denominators here are nonzero polynomials in independent variables in the domain $P$. This defines a homomorphism from the unlocalized presented algebra to $K\rtimes S_n$. [F1, algebra]

1.3 Independence over the base ring. For a reduced word $w=s_{i_1}\cdots s_{i_k}$, the coefficient of the group element $w$ in the image of $T_w$ is
$$D_w=d_{i_1,i_1+1}\,s_{i_1}(d_{i_2,i_2+1})\cdots(s_{i_1}\cdots s_{i_{k-1}})(d_{i_k,i_k+1})\ne0.$$
Every factor is a nonzero rational function; every other term uses a proper subword and therefore represents a permutation of length less than $k$ by [F3]. In a finite relation $\sum_w f_wT_w=0$ with $f_w\in P$, select a label $w$ of maximal length with $f_w\ne0$. Its group-element coefficient is $f_wD_w$ and receives no contribution from any other label of that maximal length or from shorter labels, so it is nonzero in $K$, a contradiction. Hence the $T_w$ are $P$-linearly independent and the representation is injective. Since the Laurent monomials $X^a$ are an $R$-basis of $P$, this proves that $X^aT_w$ are an $R$-basis; the anti-involution proves the right basis. Tensoring this free basis with any commutative $R$-algebra preserves it, and tensoring the generators-and-relations presentation gives exactly the same affine presentation over that algebra. As the unused $U$ parameters do not enter the relations, any commutative coefficient ring with unit $z$ is obtained by sending every $U_a$ to $1$. Thus the asserted arbitrary base change is valid, without inverting differences in the base-changed algebra. [F3, step 1.1, step 1.2, algebra]

2.1 Localization and intertwiners. Let $S$ be the multiplicative set generated by all $X_i-X_j$ with $i\ne j$. It is invariant under $S_n$. The mixed formula of step 1.1 extends to $S^{-1}P$ by the same product rule and by solving the formula for inverses of elements of $S$; the correction remains in $S^{-1}P$. Consequently adjoining these inverses gives the algebra with free left coefficient module $\bigoplus_w(S^{-1}P)T_w$ and the same multiplication rules. This realizes the localization: the inverse formulas make it universal among homomorphisms inverting $S$, and its injective representation in $K\rtimes S_n$ follows from the identical maximal-length argument of step 1.3. In it put $\Phi_i=T_i-c_{i,i+1}$; the mixed formula gives $\Phi_if=s_i(f)\Phi_i$ for all $f\in S^{-1}P$. Products $\Phi_w$ along reduced words have unitriangular expansions in the $T_v$, because selecting every $T$ gives $T_w$ and selecting any scalar correction leaves strictly shorter words; thus they too form a basis over $S^{-1}P$. No parameter difference $U_a-U_b$, quantum factorial or Gram determinant is inverted. [step 1.1, step 1.2, step 1.3, algebra]

2.2 Polynomial multiplication is injective over the universal domain. If $0\ne f\in P$ and $h=\sum_w f_wT_w$, then $fh=0$ gives $ff_w=0$ for each $w$ by step 1.3. Since $P$ is a domain, every $f_w=0$, so $h=0$. The right-basis argument gives the analogous right multiplication result. This injectivity assertion is over the universal domain, as in Statement (2), and does not assert injectivity of nonzero zero divisors after arbitrary base change. [step 1.3, algebra]

3.1 Subword support in the localization. Expanding a reduced product $T_w=\prod_t(\Phi_{i_t}+c_{i_t,i_t+1})$ and moving coefficients left using step 2.1 gives terms supported on products of subwords of the reduced word. Every coefficient is a sum of products of permuted $c$ functions and hence has only variable-difference denominators. Equivalently, in the crossed product $\Phi_i=d_{i,i+1}s_i$, so moving a localized polynomial $f$ through such a term replaces it by the corresponding subword permutation applied to $f$. This proves the subword expansion used by consumers and the asserted intertwining throughout the embedded localization. [F3, step 2.1, algebra]

4.1 Conclusion. Step 1.3 proves both ordered bases over $R$ and after arbitrary base change with unit $z$; step 2.2 proves the universal-domain injectivity; and steps 2.1 and 3.1 prove the localized embedding and intertwining identity. For $n=0$ there are no polynomial or Hecke generators, $S_0$ consists of the identity, the lone ordered monomial is $1$, and $H_0^{\mathrm{aff}}=R$; all localization and intertwining clauses are then vacuous. No cyclotomic basis, trace form, primitive-content assertion or Brundan–Kleshchev result is used. [step 1.3, step 2.2, step 2.1, step 3.1, algebra] ∎

## Remarks

The universal statement is stated over the characteristic-zero Laurent domain
and then specializes by base change, so all polynomial identities in the
proof are identities in $R$. The proof uses no choice principle: all
straightening, triangularity and expansion steps are finite.
