---
id: lem-lusztig-divided-power-form-is-a-hopf-integral-form
kind: lemma
title: "The full divided-power integral form is a Hopf form"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-axiom-of-choice
  - def-lusztig-divided-power-integral-form
  - lem-quantum-pascal-recurrence-and-gaussian-integrality
  - thm-integral-triangular-decomposition-for-the-lusztig-form
  - thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra
proof_strategy: direct
sources:
  references:
    - title: "George Lusztig, Introduction to Quantum Groups"
      url: "https://math.mit.edu/~gyuri/papers/quant.gr.pdf"
      locator: "Sections 3.1.9–3.1.13, printed pp.24–25; all toral coproduct and antipode identities below are proved locally."
---

## Statement

Assume the Axiom of Choice inherited from the integral triangular-decomposition supplier. The full form $U_A$ of [[def-lusztig-divided-power-integral-form]], including every $T_{i,c,t}$, is stable under the library coproduct, counit, antipode and inverse antipode. Consequently every scalar specialization, including $U^L_\zeta$, is a Hopf algebra with bijective antipode. In the following formulas $a,b,r,t\ge0$, $c\in\mathbb Z$, and $q=q_i$, $K=K_i$ when the color is suppressed:

$$\Delta E_i^{(r)}=\sum_{a+b=r}q_i^{ab}E_i^{(a)}\otimes K_i^{-a}E_i^{(b)},\qquad \Delta F_i^{(r)}=\sum_{a+b=r}q_i^{-ab}F_i^{(a)}K_i^b\otimes F_i^{(b)}.$$

$$\Delta T_{i,c,t}=\sum_{a+b=t}q_i^{-bc}T_{i,c,a}K_i^{-b}\otimes K_i^aT_{i,0,b}.$$

$$S(E_i^{(r)})=(-1)^rq_i^{r(r-1)}E_i^{(r)}K_i^r,\qquad S(F_i^{(r)})=(-1)^rq_i^{-r(r-1)}K_i^{-r}F_i^{(r)}.$$

$$S(T_{i,c,t})=(-1)^tT_{i,t-c-1,t},\qquad \varepsilon(T_{i,c,t})=\begin{bmatrix}c\\t\end{bmatrix}_{q_i}.$$

The generalized Gaussian for integral $c$ denotes its Laurent-polynomial value; for $c=-b<0$ it equals $(-1)^t\begin{bmatrix}b+t-1\\t\end{bmatrix}_{q_i}$.

## Facts & Assumptions

**Given:** The full integral form, its generic embedding and the library generic Hopf structure.

[F1] The generic Hopf formulas are $\Delta E_i=E_i\otimes K_i^{-1}+1\otimes E_i$, $\Delta F_i=F_i\otimes1+K_i\otimes F_i$, $S(E_i)=-E_iK_i$, $S(F_i)=-K_i^{-1}F_i$, $\Delta K_h=K_h\otimes K_h$ and $S(K_h)=K_{-h}$ ([[thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra]]).

[F2] The integral form is free and its tensor powers inject into their fraction-field extensions ([[thm-integral-triangular-decomposition-for-the-lusztig-form]]). This supplier uses [[def-axiom-of-choice]]; that is the sole inherited Choice use here.

[F3] Quantum Pascal recurrence gives Laurent-polynomial integral Gaussian coefficients ([[lem-quantum-pascal-recurrence-and-gaussian-integrality]]).

## Proof

1.1 Expanding a $q$-commuting binomial by induction gives the two displayed divided coproducts: the induction recurrence is the quantum Pascal recurrence in [F3], and the toral orders shown in the statement are retained. Directly applying the anti-map in [F1], $(E_iK_i)^r=q_i^{r(r-1)}E_i^rK_i^r$ and $(K_i^{-1}F_i)^r=q_i^{-r(r-1)}K_i^{-r}F_i^r$ give the displayed antipodes, before specialization. Thus these maps preserve every divided generator and every toral group element. [F1, F3, algebra]

1.2 Here is the toral calculation, including arbitrary shifts. For nonnegative integers $m,n$ the coefficient identity obtained by splitting the product $\prod_{j=0}^{m+n-1}(1+q^{m+n-1-2j}z)$ into blocks of lengths $m,n$ is $\begin{bmatrix}m+n\\t\end{bmatrix}_q=\sum_{a+b=t}q^{-bm+an}\begin{bmatrix}m\\a\end{bmatrix}_q\begin{bmatrix}n\\b\end{bmatrix}_q$. Regard this as an identity of Laurent polynomials in independent $X,Y$ over $\mathbb Q(q)$, replacing $q^m,q^n$ by $X,Y$. It holds for every sufficiently large pair $m,n$, and a Laurent polynomial vanishing on all pairs $(q^m,q^n)$ is zero: fixing one variable gives infinitely many distinct roots, then applying this again to the coefficients proves the assertion. Substituting $X=q^cK\otimes1$ and $Y=1\otimes K$ yields exactly the displayed $\Delta T_{i,c,t}$. Its right side belongs to $U_A\otimes_AU_A$ with no denominator. [F3, algebra]

1.3 Substituting $K\mapsto K^{-1}$ into the product defining $T_{i,c,t}$, negating each numerator and reversing the $t$ factors gives $S(T_{i,c,t})=(-1)^tT_{i,t-c-1,t}$. Substituting $K=1$ gives its stated counit; negative upper indices have the polynomial expression stated above, by reversing and negating the numerator factors. Hence the counit has values in $A$ and the antipode preserves all toral binomials. [F1, F3, algebra]

2.1 By steps 1.1–1.3 all generic structure maps restrict to the integral form. Since its tensor powers inject into the generic tensor powers by [F2], the generic coassociativity, counit and antipode identities hold as integral identities. Moreover $S^2(E_i^{(r)})=q_i^{-2r}E_i^{(r)}$, $S^2(F_i^{(r)})=q_i^{2r}F_i^{(r)}$ and $S^2$ fixes the torus and all its binomials. These formulas and their inverses preserve the integral generators, so $S^2$ and hence $S$ are bijective on $U_A$. Base change preserves every identity and the inverse antipode. This proves all assertions without division by any vanishing root factorial. [step 1.1, step 1.2, step 1.3, F2, algebra] ∎
