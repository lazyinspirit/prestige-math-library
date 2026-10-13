---
id: thm-klr-pbw-basis-theorem
kind: theorem
title: "The PBW (monomial) basis theorem for KLR algebras"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-polynomial-representation-of-a-klr-algebra, thm-hh-matsumoto-reduced-word-theorem, def-klr-grading-and-diagrammatic-composition, def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum]
justified_by: []
aliases: []
landmark: false
dependency_level: 3
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Raphael Rouquier, 2-Kac-Moody Algebras, arXiv:0812.5023v3 (66 pages)'
      url: 'https://arxiv.org/pdf/0812.5023'
      locator: '§3.2.1-§3.2.2, Theorem 3.7 and its proof, printed pp. 23-27: spanning family $S$, PBW equivalence, and the reduction to Proposition 3.12; Remark 3.14: finiteness of graded components below any degree.'
    - title: 'Mikhail Khovanov and Aaron D. Lauda, A diagrammatic approach to categorification of quantum groups I, Representation Theory 13 (2009) 309-347, arXiv:0803.4121v2'
      url: 'https://arxiv.org/pdf/0803.4121'
      locator: 'Theorem 2.5 and Corollary 2.6, printed pp. 15-22: the homogeneous basis of ${}_jR(\nu)_i$ and faithfulness of the polynomial representation; Proposition 2.7: freeness over the polynomial subalgebra.'
    - title: 'Mikhail Khovanov and Aaron D. Lauda, A diagrammatic approach to categorification of quantum groups II, Transactions of the AMS 363 (2011) 2685-2700, arXiv:0804.2080v1'
      url: 'https://arxiv.org/pdf/0804.2080'
      locator: '§2, printed pp. 3-5: the same rings $R(\nu)$ for an arbitrary Cartan datum and their basis, with the dot-count relations.'
---

## Statement

Let $Q$ be a KLR datum as in [[def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum]] and fix a reduced-expression system: for each $w\in S_n$ one reduced word $w=s_{i_1}\cdots s_{i_r}$, and for $\nu\in I^n$ put $\tau_w:=\tau_{i_1}\cdots\tau_{i_r}\in R_n(Q)$. Then the monomials $\tau_wx_1^{a_1}\cdots x_n^{a_n}e(\nu)$, over all $w\in S_n$, $a_1,\dots,a_n\ge0$ and $\nu\in I^n$, form a $k$-basis of $R_n(Q)$; equivalently $R_n(Q)$ is a free $k$-module on these monomials, and $R(\beta)$ has the corresponding basis. Moreover each $R(\beta)$ has finite-dimensional homogeneous components, and the graded dimension of the summand $e(\nu)R_n(Q)e(\nu')$ is the formal Laurent Hilbert series counting the monomials (bounded below, equivalently the finite sum of the corresponding rational geometric series), so the graded ranks are independent of the parameters $Q$: for each fixed $\beta$, $\dim_kR(\beta)_m<\infty$ for all $m$ and $R(\beta)_m=0$ for $m\ll0$; if $I$ is finite the same holds for $R_n(Q)$. In particular $R(\beta)$ is a locally finite graded algebra; its degree-zero part need not be one-dimensional (already $x_1\tau_1\in R(2\alpha_i)_0$ is a nontrivial idempotent).

## Facts & Assumptions

**Given:** A KLR datum $Q$ with the algebra $R_n(Q)$ of [[def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum]], its grading of [[def-klr-grading-and-diagrammatic-composition]], a reduced-expression system for $S_n$, and the faithful graded polynomial representation of [[thm-polynomial-representation-of-a-klr-algebra]] on $\mathrm{Pol}_n$.

[F1] Faithfulness ([[thm-polynomial-representation-of-a-klr-algebra]]): the operators of the polynomial representation satisfy relations (1)-(7) and the homomorphism $\rho:R_n(Q)\to\mathrm{End}^{\mathrm{gr}}_k(\mathrm{Pol}_n\{w\})$ is injective for nonzero $P_{ij}$, and it becomes an isomorphism onto the localized skew group algebra $k(I)[x]\rtimes S_n$ after inverting the nonzero polynomials $P_{ij}(x_a,x_b)$ and differences $x_a-x_b$.

[F2] Relations (4), (5), (6), (7) of [[def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum]], used as rewriting rules for words in the generators, and the degree assignment $\deg x_a=2d_{\nu_a}>0$, $\deg\tau_a=-b_{\nu_a\nu_{a+1}}$ of [[def-klr-grading-and-diagrammatic-composition]].

[F3] Reduced-word moves and deletion: [[thm-hh-matsumoto-reduced-word-theorem]], clauses (1) and (2), applied to the type-$A$ Coxeter system of adjacent transpositions, connects reduced words by far and three-term braid moves and transforms any nonreduced word by such moves to an adjacent repeat.

## Proof

**Proof technique:** direct; first reduce arbitrary words to monomials with reduced crossing words and right-hanging dots, then obtain independence from the faithful polynomial representation.

1.1 (Dots move right.) Move the word idempotents to the right using relations (2)–(3). On each resulting component, if $x_b$ stands immediately left of $\tau_a$, relation (6) gives $x_b\tau_ae(\nu)=\tau_ax_{s_a(b)}e(\nu)$ except for adjacent equal colours. In that case the exact rules are $x_a\tau_ae(\nu)=\tau_ax_{a+1}e(\nu)+e(\nu)$ and $x_{a+1}\tau_ae(\nu)=\tau_ax_ae(\nu)-e(\nu)$. The leading term moves one dot past one crossing, and each correction removes that dot and crossing; hence every term has fewer dot/crossing inversions. Induction on their number puts all dots to the right of all crossings. [given, F2, algebra]

2.1 (Crossing words reduce.) Induct on crossing length. By [F3], a nonreduced transposition word can be changed by finitely many far and braid moves into a word with an adjacent repeat; each braid correction has three fewer crossings and is handled by induction after step 1.1, and relation (4) removes the repeated pair. For a reduced word, [F3] connects it to the chosen reduced word by finitely many braid moves; their correction terms again have fewer crossings. Thus every crossing word is a sum of chosen $\tau_w$ times dot polynomials, and step 1.1 puts the dots on the right. This proves spanning without a decreasing-length claim for braid moves themselves. [step 1.1, F2, F3, induction, algebra]

3.1 (Independence.) Under the representation of [F1], the image of $\tau_wx^ae(\nu)$ in the localization at the nonzero $P_{ij}(x_a,x_b)$ and $x_a-x_b$ is triangular: expanding the operators of the chosen reduced word, its highest term is a nonzero scalar times the permutation $w$ acting on the summand, and all other terms are permutations of strictly smaller length (an unequal crossing contributes its nonzero $P$-factor together with the transposition, an equal crossing contributes $(1-s_a)/(x_a-x_{a+1})=-(s_a-1)/(x_a-x_{a+1})$, again transposition plus lower-length terms). A linear relation $\sum c_{w,a,\nu}\tau_wx^ae(\nu)=0$ in $R_n(Q)$ would therefore give, after applying $\rho$ and looking at a source/destination block and the maximal occurring length, a nontrivial linear relation $\sum_wd_ww=0$ among distinct permutations $w$ of the field $k(x_1,\dots,x_n)$. Distinct field automorphisms are linearly independent: in a shortest nonzero relation choose two different automorphisms $w,w_0$ and $g$ with $w(g)\ne w_0(g)$. Evaluation on $fg$ minus $w_0(g)$ times evaluation on $f$ removes one term and leaves the $w$ term nonzero, contradicting minimality; a one-term relation is impossible by evaluation on $1$. Hence the spanning monomials of step 2.1 have linearly independent images, and since $\rho$ is injective by [F1] applied to the fixed factorization, the monomials themselves are linearly independent; together with step 2.1 they form a basis. [step 2.1, F1, choose, algebra]

4.1 (Grading bookkeeping.) The bidegree of the basis monomial $\tau_wx_1^{a_1}\cdots x_n^{a_n}e(\nu)$ is $(\nu,w\nu)$ together with the integer $\deg(\tau_w\text{ on }\nu)+\sum_ja_j\cdot2d_{\nu_j}$, where $\deg(\tau_w\text{ on }\nu)$ is the sum of the degrees $-b_{\nu_r\nu_{r+1}}$ of its crossings read in the successive permuted sequences; this is independent of the parameters $Q$ and of the factorization. The summand $e(\nu)R_n(Q)e(\nu')$ therefore has the Laurent Hilbert series $\sum_{w:w\nu'=\nu}q^{\deg(\tau_w\text{ on }\nu')}\prod_{j=1}^n(1-q^{2d_{\nu'_j}})^{-1}$, a finite sum of rational geometric series bounded below (each $d_{\nu_j}>0$ and the finitely many crossing degrees are bounded below), which proves the displayed graded-dimension claim and shows that $R(\beta)_m=0$ for $m$ below the finite minimum of the finitely many crossing contributions over the finitely many $\nu,w$ with $w\nu=\nu'$ and $\sum_j\alpha_{\nu_j}=\beta$. [step 3.1, F2, algebra]

5.1 (Local finiteness.) Fix $\beta\in Q_+$ and a degree $m$. The basis monomials of $R(\beta)_m$ involve only the finitely many sequences $\nu\in I^\beta$ and the finitely many $w\in S_{|\beta|}$; each crossing degree is one of the finitely many integers $-b_{pq}$ and each dot degree $2d_{\nu_j}$ is at least $2\min_id_i>0$, so $\sum_ja_j$ is bounded, leaving finitely many exponent tuples; hence $\dim_kR(\beta)_m<\infty$. If $I$ is finite, $I^\beta$ is finite for every $|\beta|$, so the same argument applies to $R_n(Q)$ degree by degree. The element $x_1\tau_1\in R(2\alpha_i)_0$ is nonzero by the basis of step 3.1 and squares to itself by the nil-Hecke dot move, so degree zero need not be one-dimensional. [step 3.1, step 4.1, algebra] ∎
