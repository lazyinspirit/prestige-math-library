---
id: thm-parabolic-kazhdan-lusztig-character-formula
kind: theorem
title: "The parabolic Kazhdan–Lusztig character formula"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 20
deps: [thm-parabolic-category-o-multiplicities-are-parabolic-kl-polynomials,
       def-parabolic-kazhdan-lusztig-basis-and-polynomials,
       def-inverse-kazhdan-lusztig-polynomials,
       thm-kazhdan-lusztig-inversion-formula,
       def-grothendieck-group-and-character-of-category-o,
       prop-the-grothendieck-group-of-o-has-simple-and-standard-bases,
       thm-parabolic-category-o-is-a-highest-weight-category,
       thm-bgg-reciprocity, def-axiom-of-choice]
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
    - title: "Lin Chen, lecture notes (Spring 2024), Lecture 9: standard filtrations, BGG reciprocity and translation functors (complete 7-page lecture)"
      url: "https://windshower.github.io/linchen/teaching/s2024/lecture9.pdf"
      locator: "Section 2 (printed pp. 4-5): BGG reciprocity and the standard filtration interface in category O, the template for inverting the multiplicity matrix; complete passage read."
    - title: "Volodymyr Mazorchuk and Catharina Stroppel, Translation and shuffling of projectively presentable modules and a categorification of a parabolic Hecke module, Trans. Amer. Math. Soc. 357 (2005) 2939-2973 (author-hosted published version)"
      url: "http://www.math.uni-bonn.de/people/stroppel/Shuffling.pdf"
      locator: "Section 2.3 defines the DISTINCT projectively p-presentable category; Theorem 3.1 and Lemma 7.6/Theorem 7.7 concern its spherical/properly stratified comparison, not locally p-finite category O. Those actual passages were independently inspected and their former native use is corrected. The current proof instead uses the owner local Levi/PBW/flag/Weyl argument."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) and the dominant regular
integral conventions of
[[thm-parabolic-category-o-multiplicities-are-parabolic-kl-polynomials]]. Put
$N=(n_{y,x}(1))_{y,x\in{}^JW}$, with rows indexed by generalized standards and
columns by simples in a Bruhat-compatible order
([[def-parabolic-kazhdan-lusztig-basis-and-polynomials]]). Then $N$ is upper
unitriangular and, for each $x$,
$$\operatorname{ch}L(x\cdot\lambda)=\sum_{y\ge x}(N^{-1})_{x,y}\,\operatorname{ch}\Delta^J(y\cdot\lambda).$$
Its inverse entries are integers computed by the finite signed chain sum of
products of $n_{a,b}(1)$; they are weighted incidence inverses, not generally
ordinary Bruhat Mobius values. In the antidominant base $\lambda_{\mathrm{anti}}=w_0\cdot\lambda$, set
$a=\mathrm{lf}(y)=w_Jyw_0$ and encode the same weight as
$(w_Ja)\cdot\lambda_{\mathrm{anti}}$. The reindexed matrix is
$\widetilde N_{a,b}=N_{\mathrm{lf}^{-1}(a),\mathrm{lf}^{-1}(b)}$
and its inverse is reindexed by the same permutation; thus the same formula
has reversed support in the transported order. This does not replace the
entries by $n_{a,b}(1)$.
This is the ungraded
character formula for the regular parabolic block, and constructs no Koszul or
Ext grading.

## Facts & Assumptions

**Given:** The regular parabolic block with generalized standards $\Delta^J(y\cdot\lambda)$, simples $L(x\cdot\lambda)$ and projective covers $P^J(x\cdot\lambda)$ indexed by ${}^JW$, the multiplicity matrix $N=(n_{y,x}(1))$ of [[thm-parabolic-category-o-multiplicities-are-parabolic-kl-polynomials]], and the Grothendieck group with its standard and simple bases ([[def-grothendieck-group-and-character-of-category-o]], [[prop-the-grothendieck-group-of-o-has-simple-and-standard-bases]]).

[F1] Multiplicity theorem: $[M_{\mathfrak p}(y\cdot\lambda):L(x\cdot\lambda)]=n_{y,x}(1)$ with support $y\le x$ and diagonal one, and $(P^J(x\cdot\lambda):M_{\mathfrak p}(y\cdot\lambda))=n_{y,x}(1)$ ([[thm-parabolic-category-o-multiplicities-are-parabolic-kl-polynomials]]).

[F2] The simple and generalized-standard classes are bases of the finite block Grothendieck group, characters are injective on it, and the standard and simple matrices are unitriangular; the blocks are finite ([[thm-parabolic-category-o-is-a-highest-weight-category]] (4), [[prop-the-grothendieck-group-of-o-has-simple-and-standard-bases]], [[thm-bgg-reciprocity]]).

[F3] The Bruhat order on the finite set ${}^JW$ is a partial order, and the index range is finite, so the strictly upper triangular matrix $U=N-I$ relative to such an order is nilpotent ([[thm-parabolic-category-o-multiplicities-are-parabolic-kl-polynomials]], [[def-parabolic-kazhdan-lusztig-basis-and-polynomials]]); the inverse entries are the finite alternating sums of products of the $n_{a,b}(1)$ along strictly increasing chains ([[def-inverse-kazhdan-lusztig-polynomials]], [[thm-kazhdan-lusztig-inversion-formula]] provide the ordinary inversion-formula comparison).

## Proof

**Proof technique:** direct finite linear algebra on the unitriangular multiplicity matrix.

1.1 **The matrix equation.** In the Grothendieck group write $M_y:=[\Delta^J(y\cdot\lambda)]$ and $L_x:=[L(x\cdot\lambda)]$; by [F1] and the Jordan-Holder theorem in the finite-length parabolic block, $M_y=\sum_x[\,\Delta^J(y\cdot\lambda):L(x\cdot\lambda)\,]L_x=\sum_{x\ge y}n_{y,x}(1)L_x$. Since the simple classes form a basis by [F2], this is the matrix equation $M=NL$ with $N=(n_{y,x}(1))$. [F1, F2, algebra]

1.2 **Unitriangularity and inversion.** By [F1], $n_{x,x}(1)=1$ and $n_{y,x}(1)=0$ unless $y\le x$; the diagonal of $N$ is one and $U:=N-I$ is strictly upper triangular for the finite Bruhat-compatible order on ${}^JW$. Hence $U$ is nilpotent ($U^{m}=0$ for $m>\#{}^JW$) and $N^{-1}=I-U+U^2-\cdots$ is a finite sum of integer matrices; the $(x,y)$-entry of $N^{-1}$ is supported on $y\ge x$ and equals the finite signed chain sum $\sum_{m\ge0}(-1)^m\sum_{x=z_0<z_1<\cdots<z_m=y}\prod_{i}n_{z_i,z_{i+1}}(1)$ over strictly increasing chains. These are weighted incidence inverses of the finite poset, not generally ordinary Mobius values. [F1, F3, algebra]

2.1 **The character formula.** Solving step 1.1 by step 1.2 gives $L=N^{-1}M$ with $N^{-1}$ read as a matrix whose rows are indexed by the simples and whose columns are indexed by the generalized standards, that is, $\operatorname{ch}L(x\cdot\lambda)=\sum_y(N^{-1})_{x,y}\operatorname{ch}\Delta^J(y\cdot\lambda)$; since $(N^{-1})_{x,y}$ is supported on $y\ge x$, this is exactly the displayed formula. [F1, F2, step 1.1, step 1.2, algebra]

3.1 **Reindexing and conclusion.** Use $a=\mathrm{lf}(y)=w_Jyw_0$ as the shortest-left encoding of the actual longest-left label $yw_0$ in the antidominant base, so the same weight is $(w_Ja)\cdot\lambda_{\mathrm{anti}}$. The corrected dictionary in [[thm-parabolic-category-o-multiplicities-are-parabolic-kl-polynomials]] gives $\widetilde N_{a,b}=N_{\mathrm{lf}^{-1}(a),\mathrm{lf}^{-1}(b)}$. Reindexing both coordinates is conjugation by a permutation matrix, hence $\widetilde N^{-1}_{a,b}=N^{-1}_{\mathrm{lf}^{-1}(a),\mathrm{lf}^{-1}(b)}$; therefore $\operatorname{ch}L((w_Ja)\cdot\lambda_{\mathrm{anti}})=\sum_b\widetilde N^{-1}_{a,b}\operatorname{ch}\Delta^J((w_Jb)\cdot\lambda_{\mathrm{anti}})$, with the original support transported by $\mathrm{lf}$. Choosing the transported reversed order makes this matrix lower triangular. This preserves every character formula and constructs no Koszul or Ext grading. [F1, step 1.2, step 2.1, algebra] ∎
