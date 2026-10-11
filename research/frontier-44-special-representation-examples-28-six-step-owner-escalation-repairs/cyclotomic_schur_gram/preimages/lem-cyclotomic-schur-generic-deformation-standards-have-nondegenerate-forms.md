---
id: lem-cyclotomic-schur-generic-deformation-standards-have-nondegenerate-forms
kind: lemma
title: "Generic cyclotomic Schur deformation standards have nondegenerate forms"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 22
deps: [def-arbitrary-level-cyclotomic-hecke-murphy-cell-and-schur-modules,
       thm-arbitrary-level-cyclotomic-hecke-murphy-basis-is-cellular,
       lem-arbitrary-level-cyclotomic-murphy-jm-action-is-content-triangular,
       lem-finite-cellular-nonzero-form-heads-purity-and-shared-factor-linkage,
       lem-cyclotomic-semistandard-sums-give-schur-endomorphism-basis,
       thm-cyclotomic-schur-standards-and-schur-functor-control-block-linkage]
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

Over the fraction field of the universal Laurent parameter ring, all
cyclotomic Specht modules are simple and $H_n$ is split semisimple; all Schur
standards $\Delta_\lambda$ equal $L_\lambda$ and have nondegenerate cellular
forms. Moreover, fix $N\ge1$, a field $F$ with nonzero $q_H,Q_1,\dots,Q_\ell$,
and $0\le d\le N$, and take
$\mathcal O=F[t,t^{-1}]_{(t-1)}$ with $z=q_Ht$, $U_a=Q_at^{Na}$. Over $F(t)$,
all rank-$d$ Specht and Schur standards are simple and their forms are
nondegenerate. This includes the charged finite-$e$ specialization used by
the Lyle–Mathas deformation. The lemma establishes generic nondegeneracy only;
it does not prove any signed-rim-hook weight-Gram determinant valuation
formula.

## Facts & Assumptions

**Given:** The cyclotomic algebra and its Specht modules [F1], the cellular Murphy basis [F2], the Jucys–Murphy content triangularity [F3], the finite cellular-head theory [F4], the semistandard Schur endomorphism basis [F5], and the Schur standard/Specht correspondence [F6].

[F1] $H_n$, its multipartition Specht (cell) modules $S_\lambda$ with cell form and quotient $D_\lambda=S_\lambda/\mathrm{rad}\,S_\lambda$, and the Schur datum $C_n$ with standards $\Delta_\lambda$ and heads $L_\lambda=\Delta_\lambda/\mathrm{rad}\,\Delta_\lambda$ ([[def-arbitrary-level-cyclotomic-hecke-murphy-cell-and-schur-modules]]).

[F2] The $m_{st}$ are an $R$-basis of $H_n$ with the dominance-cellular multiplication law, so $H_n$ has a finite filtration whose successive right-module layers are copies of the right cell modules ([[thm-arbitrary-level-cyclotomic-hecke-murphy-basis-is-cellular]]).

[F3] On $S_\lambda$ the elements $X_r$ act dominance-triangularly with diagonal $U_az^{j-i}$ at the node $(i,j,a)$ carrying $r$, and the universal triangularity specializes to the generic fibre, so $S_\lambda$ has a simultaneous triangular filtration whose successive characters are its own word characters ([[lem-arbitrary-level-cyclotomic-murphy-jm-action-is-content-triangular]]).

[F4] Over a field, every nonzero cellular head quotient $D_\lambda$ is absolutely simple, the distinct nonzero $D_\lambda$ exhaust the simple modules, and $[S_\lambda:D_\lambda]=1$ with $[S_\lambda:D_\mu]\ne0$ only for $\lambda\unrhd\mu$ ([[lem-finite-cellular-nonzero-form-heads-purity-and-shared-factor-linkage]]).

[F5] The semistandard sums give the actual cellular endomorphism basis of $C_n$, with standards $\Delta_\lambda$ and nondegenerate-or-zero cell forms defined over the universal ring ([[lem-cyclotomic-semistandard-sums-give-schur-endomorphism-basis]]).

[F6] The corner functor gives $\Delta_\lambda e_\omega\cong S_\lambda$ and $L_\lambda e_\omega\cong D_\lambda$ (possibly $0$), with $[\Delta_\lambda:L_\mu]=[S_\lambda:D_\mu]$ whenever $D_\mu\ne0$, and every $\Delta_\lambda$ is nonzero and block-pure ([[thm-cyclotomic-schur-standards-and-schur-functor-control-block-linkage]]).

## Proof

**Proof technique:** direct.

**Given:** The data and suppliers of [F1]–[F6]; let $K$ be the fraction field of the universal Laurent parameter ring.

1.1 Word separation over the universal fraction field. Assign to each standard multitableau the sequence of joint Jucys–Murphy words: the diagonal values $U_az^{j-i}$ at the nodes carrying the labels $1,\dots,n$ ([F3]). If two standard multitableaux first differ at step $r$, then their restrictions to the boxes $1,\dots,r-1$ coincide, and the two added nodes are two different addable nodes of that common prefix shape. If the two nodes lie in one physical component, their contents $j-i$ are different (two addable nodes of a partition have different contents), and $z$ is transcendental over the base field, so $z^{j-i}\ne z^{j'-i'}$. If they lie in different components $a\ne b$, the values $U_az^{j-i}$ and $U_bz^{j'-i'}$ are distinct in $K$, because $z,U_1,\dots,U_\ell$ are algebraically independent monomials and the components differ. Hence the joint word determines the tableau, different standard multitableaux -- even of different shapes -- have different joint words, and distinct shapes have disjoint sets of word characters. [F1, F3, algebra]

2.1 Generic simplicity and split semisimplicity. By [F3] each $S_\lambda$ has a simultaneous triangular filtration whose successive characters are its own words of step 1.1. Hence every composition factor $D_\mu$ of the nonzero module $S_\lambda$ has a word occurring in $S_\mu$ and a word occurring in $S_\lambda$; disjointness of shape word sets forces $\mu=\lambda$. In particular $D_\lambda\ne0$, and the cellular diagonal multiplicity $[S_\lambda:D_\lambda]=1$ of [F4] forces $S_\lambda=D_\lambda$ to be simple, with the distinct absolutely simple modules $S_\lambda$ as the only composition factors. The cellular basis gives $\dim_K H_K=\sum_\lambda(\dim_K S_\lambda)^2$. The semisimple quotient is a product of full matrix algebras on the exhaustive absolutely simple $S_\lambda$: to see this, the rank-one cell action on each simple gives every matrix unit, and the distinct simple labels give the distinct simple factors. Its dimension is the same sum, so the radical has dimension zero. Thus $H_K$ is split semisimple; no splitting of the cellular filtration was assumed. [F2, F3, F4, step 1.1, algebra]

3.1 Word separation for the Lyle–Mathas deformation. Fix $N\ge1$, nonzero $q_H,Q_a$ in $F$, and set $z=q_Ht$, $U_a=Q_at^{Na}$ in $F(t)$. For two standard multitableaux that first differ at a step $r\le N$, the common prefix of size $r-1$ has components of sizes summing to $r-1$; the two added nodes lie in components $a,b$ and each added content $c=j-i$ is bounded in absolute value by the size of its own component, so $|c-c'|<r\le N$. A collision $U_az^c=U_bz^{c'}$ with $a\ne b$ would force the equality $Na+c=Nb+c'$ of $t$-adic exponents, i.e. the nonzero multiple $N(a-b)$ of $N$ would equal $c'-c$ with $|c'-c|<N$, impossible. If $a=b$, then $z$ is transcendental over $F$, so $z^c=z^{c'}$ forces $c=c'$. Thus the joint words separate all rank-$d$ standards in $F(t)$ as in step 1.1, and the argument of step 2.1 proves that the rank-$d$ Specht modules are simple and the corresponding Hecke algebra is split semisimple over $F(t)$, with no affine-center or block-classification input. [F1, F3, step 1.1, algebra]

4.1 Nondegenerate Schur standards. By [F6], over any field with unit parameters, $[\Delta_\lambda:L_\mu]=[S_\lambda:D_\mu]$ whenever $D_\mu\ne0$, and every $\Delta_\lambda$ is nonzero. Over $K$, step 2.1 makes every $S_\lambda$ simple; hence $D_\mu=0$ never occurs, $[\Delta_\lambda:L_\lambda]=[S_\lambda:S_\lambda]=1$, and since all $L_\mu$ are distinct the multiplicity list forces $\Delta_\lambda=L_\lambda$ to be simple; the diagonal cell-form entry of the standard of shape and type $\lambda$ is $1$, so the cellular form is nonzero and, being invariant on a simple module, is nondegenerate. The same argument applies over $F(t)$ to the rank-$d$ standards using step 3.1, and the construction of [F5] and the multiplicities of [F6] are identities over the respective ground fields, so the charged finite-$e$ specializations used by the Lyle–Mathas deformation are included. No valuation of a weight-Gram determinant is computed. [F5, F6, step 2.1, step 3.1, algebra] ∎

## Remarks

The lemma is exactly the generic-nondegeneracy input of the Jantzen theory: it upgrades the cellular form theory to simplicity of all standards over the two generic regimes, so that the Jantzen filtrations begin from nondegenerate forms. The signed rim-hook weight-Gram determinant valuations are a separate theorem with its own suppliers. No choice principle is used: all tableaux, words, and composition series are finite.
