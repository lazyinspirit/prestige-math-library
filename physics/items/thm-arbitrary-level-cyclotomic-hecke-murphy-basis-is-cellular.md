---
id: thm-arbitrary-level-cyclotomic-hecke-murphy-basis-is-cellular
kind: theorem
title: "The arbitrary-level cyclotomic Hecke Murphy basis is cellular"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 17
deps: [def-arbitrary-level-cyclotomic-hecke-murphy-cell-and-schur-modules,
       lem-universal-cyclotomic-hecke-ordered-monomials-form-a-basis,
       thm-murphy-tableau-elements-form-a-cellular-basis,
       thm-standard-basis-of-the-generic-type-a-hecke-algebra,
       cor-sum-of-squares-of-standard-tableau-numbers,
       thm-the-symmetric-group-has-the-coxeter-presentation,
       lem-type-a-hecke-permutation-modules-have-semistandard-murphy-bases-and-specht-filtrations]
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

For $H_n$ in
[[def-arbitrary-level-cyclotomic-hecke-murphy-cell-and-schur-modules]] over
the universal Laurent parameter ring, the elements $m_{st}$ indexed by all
$\ell$-multipartitions of $n$ and standard tableaux $s,t$ of that shape are a
basis and a dominance-cellular datum:
$$m_{st}^*=m_{ts},\qquad m_{st}h\equiv\sum_vr_{(t,v)}(h)\,m_{sv}\pmod{H^{>\lambda}},$$
with coefficients $r_{(t,v)}(h)$ independent of $s$. The higher spans are
actual two-sided ideals. Every commutative specialization with unit parameters
inherits the cellular basis; in particular the arbitrary-field finite-$e$
nondegenerate charged specializations ($q_H\ne1$) and the LM deformation DVR retain it. The specialization $z=1$ here is the multiplicative presentation with $T_i^2=1$, not the additive degenerate cyclotomic Hecke algebra. The universal
rank is supplied independently by
[[lem-universal-cyclotomic-hecke-ordered-monomials-form-a-basis]], not by a
primitive-block classification.

## Facts & Assumptions

**Given:** The arbitrary-level cyclotomic presentation and its Murphy elements
$m_{st}$, the universal ordered PBW basis, and the ordinary finite-type-A
Murphy cellular basis
([[def-arbitrary-level-cyclotomic-hecke-murphy-cell-and-schur-modules]],
[[lem-universal-cyclotomic-hecke-ordered-monomials-form-a-basis]],
[[thm-murphy-tableau-elements-form-a-cellular-basis]]).

[F1] The ordinary Murphy elements form a cellular basis of the finite Hecke
algebra with the cell law $m_{st}h\equiv\sum_v r_{(t,v)}(h)m_{sv}$, with coefficients independent of $s$,
modulo higher ordinary shapes, the standard basis $T_w$ exists, and the
symmetric group has the Coxeter presentation
([[thm-murphy-tableau-elements-form-a-cellular-basis]],
[[thm-standard-basis-of-the-generic-type-a-hecke-algebra]],
[[thm-the-symmetric-group-has-the-coxeter-presentation]]).

[F2] The semistandard Murphy bases and Specht filtrations of the ordinary
permutation modules hold, with $\#\operatorname{SStd}$ multiplicities
([[lem-type-a-hecke-permutation-modules-have-semistandard-murphy-bases-and-specht-filtrations]]),
and $\sum_{\rho\vdash m}f_\rho^2=m!$
([[cor-sum-of-squares-of-standard-tableau-numbers]]).

## Proof

**Proof technique:** direct.

**Given:** The multipartition data and the suppliers [F1]–[F2]; write

$N^{\ge\lambda}$ for the span of all standard $m_{st}$ with shape at least

$\lambda$ in dominance, and $N^{>\lambda}$ for the span of the strictly higher

shapes.

1.1 Finite-generator straightening. Every component-preserving row-standard multitableau factors its distinguished permutation into a permutation inside the contiguous component intervals followed by the unique shuffle of the intervals preserving internal order; the two inversion sets are disjoint, so the factorization is length-additive. Multiplying by $u_\lambda$ (which commutes with the Hecke generators internal to the intervals), ordinary Murphy straightening applies in each component; higher ordinary component shapes preserve component sizes and strictly increase multipartition dominance, and the final component shuffle relabels each component by an increasing list whose selected entries at any cutoff are an initial segment, so tableau-prefix inequalities are exactly the ordinary ones at the corresponding initial-segment length. For a fixed initial left row and right multiplication by $T_i$: if $ts_i$ is standard the length formula gives the usual standard term (or $q_H$ times it plus $(q_H-1)m_{t^\lambda t}$); if $i,i+1$ share a row the result is $q_Hm$; and if they share a component but the interchange fails standardness, factoring out the increasing component shuffle and applying the ordinary cell law gives same-shape terms with the same initial left row and strictly higher multipartition terms, the required transfer identity $T_cT_i=T_jT_c$ following from $cs_i=s_jc$ and the length/quadratic formula. A cross-component column failure is impossible because column standardness is imposed componentwise. Descending induction over a linear extension of multipartition dominance therefore makes each $N^{\ge\lambda}$ and $N^{>\lambda}$ stable under all finite generators; multiplying on the left by $T_{d(s)}^*$ and applying $*$ makes the higher spans two-sided ideals. This induction concerns spanning sets only and assumes no independence. [F1, algebra]

1.2 The cyclotomic component shift. Let $a=(a_k)$ with $a_k=\sum_{b<k}|\lambda^{(b)}|$ and $u_a=u_\lambda$, and let $b=a+e_k$. Put $u_b=u_a(X_{a_k+1}-Q_k)$; the factors commute, and for $a=a_k$ the defining recurrence gives the exact identity $u_aT_a\cdots T_1X_1T_1\cdots T_a=q_H^a\bigl(Q_ku_a+u_b\bigr),$ by substituting $T_a\cdots T_1X_1T_1\cdots T_a=q_H^aX_{a+1}$ and adding/subtracting $Q_ku_a$; the case $a=0$ is included. For $k>1$ form the multicomposition $\nu$ obtained by appending a singleton row to component $k-1$ and deleting the first node of the first row of component $k$. Its cumulative sizes are $b$, so $u_\nu=u_b$, and its Young subgroup is contained in $S_\lambda$; the left length-additive coset expansion gives $x_\lambda u_b=\sum_vT_v^*m_\nu$. Sorting the rows of $\nu$ in each component conjugates its Young subgroup and gives $m_\nu=T_dm_{\operatorname{sort}\nu}T_d^{-1}$ with $u_\nu$ commuting with the component-preserving permutation, so the ordinary row-sorting argument expresses each term in standard pairs of shapes at least $\operatorname{sort}\nu$, which strictly dominates $\lambda$: the cumulative total through component $k-1$ strictly increases and no later cumulative sum decreases. Hence $x_\lambda u_b\in N^{>\lambda}$. For $k=1$, nonemptiness of component $1$ forces $a_s\ge1$ for all $s\ge2$, so $u_b$ contains every factor $(X_1-Q_s)$ and vanishes by the cyclotomic relation; again $x_\lambda u_b\in N^{>\lambda}$. [F1, algebra]

2.1 Right multiplication by $X_1$. Let $t$ be standard with entry $1$ in component $k$, an initial node, and initial label $a+1$ with $a=a_k$. Then $d(t)=(s_a\cdots s_1)w$ with $w$ fixing $1$ and $\ell(d(t))=a+\ell(w)$: pulling label $a+1$ to value $1$ crosses exactly the $a$ smaller initial labels, whose final values exceed $1$. A permutation fixing $1$ has a reduced word in $s_2,\dots,s_{n-1}$, so $T_w$ commutes with $X_1$. Multiplying the identity of step 1.2 on the right by $(T_1\cdots T_a)^{-1}$ and then by $T_w$ gives $m_\lambda T_{d(t)}X_1=q_H^aQ_km_\lambda(T_1\cdots T_a)^{-1}T_w +q_H^ax_\lambda u_b(T_1\cdots T_a)^{-1}T_w,$ whose second term lies in $N^{>\lambda}$ by step 1.2 and finite-generator stability, and whose first term lies modulo $N^{>\lambda}$ in the fixed-initial-row span. Hence that span is stable under $X_1$; multiplying on the left by $T_{d(s)}^*$ and using the left stability of the higher shapes gives the coefficient-independence law $m_{st}h\equiv\sum_vr_{(t,v)}(h)m_{sv}\pmod{N^{>\lambda}}$ first for each generator and then for every word, with coefficients independent of $s$, and $*$ makes the higher spans two-sided. Since $X_r=q_H^{1-r}T_{r-1}\cdots T_1X_1T_1\cdots T_{r-1}$ and the cyclotomic constant term is a unit when the $Q_a$ are invertible, these generators generate the Laurent affine quotient. [F1, step 1.1, step 1.2, algebra]

3.1 Spanning and cellularity. The smallest multipartition $\omega=(\varnothing,\dots,\varnothing,(1^n))$ satisfies $u_\omega=x_\omega=m_\omega=1$, so the generator-stable span of the standard $m_{st}$ contains $1$ and is all of $H_n$: the Murphy family spans. By [[lem-universal-cyclotomic-hecke-ordered-monomials-form-a-basis]], $H_n$ is independently free of rank $\ell^nn!$. Counting standard pairs with the ordinary identity $\sum_{\rho\vdash m}f_\rho^2=m!$ at the component sizes $n_a$ contributes $(n!)^2/\prod_an_a!$, and summing over the multipartition compositions gives $\ell^nn!$ by the multinomial theorem. The spanning family therefore has exactly the independent rank; its coefficient matrix in the ordered PBW basis is square and surjective between free modules, hence invertible, so the family is an $R$-basis and the proved involution and coefficient-independence laws are actual cellularity. Tensoring the proved basis and presentation supplies every commutative specialization with unit parameters, including repeated charges in the nondegenerate charged branch and the LM deformation DVR; the additive degenerate branch is a different presentation and is not a Laurent-parameter specialization; no generic-flatness inference is made. Rank zero is the singleton empty basis. [F2, step 2.1, algebra]

4.1 Conclusion. Steps 1.1 and 1.2 establish the generator-stable higher ideals for the finite-generator subalgebra; step 2.1 extends stability to $X_1$ and hence to all polynomial generators and gives the coefficient-independence law with two-sided higher spans; and step 3.1 proves that the standard Murphy family is an $R$-basis of exactly the independent rank, so that the involution and coefficient laws are cellularity in the sense of the Definition. Every commutative specialization with unit parameters inherits the basis and the cell law. No primitive-block classification is used. [step 2.1, step 3.1] ∎

## Remarks

The theorem is downstream of the universal PBW basis and supplies the
cellular/Murphy input of the later Specht, Schur and Jantzen constructions; it
does not feed the earlier BK construction. The dominance bookkeeping is
explicit: component straightening increases multipartition dominance, and the
cyclotomic shift places the correcting terms strictly above the shape.
