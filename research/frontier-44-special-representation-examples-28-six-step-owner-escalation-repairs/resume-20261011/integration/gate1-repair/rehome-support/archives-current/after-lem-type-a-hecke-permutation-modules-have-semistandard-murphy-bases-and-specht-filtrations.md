---
id: lem-type-a-hecke-permutation-modules-have-semistandard-murphy-bases-and-specht-filtrations
kind: lemma
title: "Type-A Hecke permutation modules: semistandard Murphy bases and Specht filtrations"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 11
deps: [thm-murphy-tableau-elements-form-a-cellular-basis,
       thm-standard-basis-of-the-generic-type-a-hecke-algebra,
       def-murphy-elements-and-murphy-tableau-elements,
       def-semistandard-tableau-and-kostka-number,
       def-young-tableau-standard-tableau-and-shape,
       def-dominance-order-on-partitions,
       lem-finite-cellular-nonzero-form-heads-purity-and-shared-factor-linkage,
       thm-hecke-jucys-murphy-action-is-dominance-triangular, thm-dj-bridge-murphy-cell-is-the-same-shape-specht-dual, lem-dj-bridge-sign-automorphism-and-star-dual]
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
    - title: "Mathas, Hecke algebras and Schur algebras of the symmetric group, complete 79-page manuscript"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Ordinary finite type A only; Garnir/Murphy printed pp. 18–25 and ordinary semistandard/Specht/Schur PDF pp. 45–50 were actually read; no arbitrary-level DJM proof read claimed."
---

## Statement

For every commutative ring $R$ with invertible parameter $z$, the ordinary
finite type-A Hecke algebra $H_n$ and a composition $\rho$ of $n$, the
permutation module $x_\rho H_n$ has $R$-basis
$$m_{(S,t)}=\sum_{s:\,\rho(s)=S}m_{st},$$
where $S$ ranges over the semistandard tableaux of partition shape and type
$\rho$ and $t$ over the standard tableaux of the same shape. It has a Specht
filtration with multiplicity $\#\operatorname{SStd}_\rho(\lambda)$ of the
ordinary Specht module $S^\lambda$
([[def-semistandard-tableau-and-kostka-number]],
[[def-young-tableau-standard-tableau-and-shape]]). The row-double-coset
membership uses each coset word once and no quantum-factorial division. Over
the generic field this number equals the trivial-character multiplicity of the
$\rho$-row parabolic in $S^\lambda$. Moreover the explicit ordinary Garnir
row-coset identity, the additive nonstandard-tableau factorization and the
same-column generator refinement
$$T_am_{st}\equiv-m_{st}+\sum_{u\lhd s}c_um_{ut}\pmod{\text{higher shapes}}$$
hold; row-standard straightening has no smaller-shape terms and its same-shape
terms increase tableau-prefix dominance. Shape support uses the already proved
ordinary Murphy dominance ideals
([[thm-murphy-tableau-elements-form-a-cellular-basis]],
[[def-murphy-elements-and-murphy-tableau-elements]]); the finite Garnir
algorithm terminates in lexicographic shape/tableau order before that
dominance refinement.

## Facts & Assumptions

**Given:** A commutative ring $R$ with invertible $z$, the ordinary finite type-A Hecke algebra $H_n$ with standard basis $T_w$ and Murphy elements $m_{st}$, a composition $\rho$ of $n$ with row symmetrizer $x_\rho$, and the semistandard/standard tableaux of shape $\lambda\vdash n$.

[F1] The Murphy elements $m_{st}$ form a cellular basis of $H_n$ with the cell law $T_am_{st}\equiv-m_{st}+\sum_{u\lhd s}c_um_{ut}$ modulo higher shapes when the entries $a,a+1$ occupy one column of $s$, and the dominance ideals are the higher-cell ideals of the cellular structure; the standard basis $T_w$ exists over $R$ and right multiplication by $T_a$ has the two-term rule $T_wT_a=zT_{ws_a}+(z-1)T_w$ for $\ell(ws_a)<\ell(w)$ ([[thm-murphy-tableau-elements-form-a-cellular-basis]], [[thm-standard-basis-of-the-generic-type-a-hecke-algebra]], [[def-murphy-elements-and-murphy-tableau-elements]]).

[F2] Over the generic field, the Jucys–Murphy action is dominance triangular and its word-character separates tableaux of different shapes; every simple module of the cellular algebra is a nonzero cellular head and the cell modules of the ordinary Hecke algebra form a complete set of standard modules ([[thm-hecke-jucys-murphy-action-is-dominance-triangular]], [[lem-finite-cellular-nonzero-form-heads-purity-and-shared-factor-linkage]]).

[F3] The dominance order on partitions is the ordinary dominance order, and the finite Garnir algorithm terminates in lexicographic shape/tableau order ([[def-dominance-order-on-partitions]]).

[F4] The independent same-shape perfect pairing identifies $C_{\mathrm M}(\lambda)\cong P(\lambda)^\circ$ over every commutative ring with unit parameter; finite-free biduality gives $C_{\mathrm M}(\lambda)^\circ\cong P(\lambda)$. Star dual has action $(fh)(m)=f(mh^*)$ ([[thm-dj-bridge-murphy-cell-is-the-same-shape-specht-dual]], [[lem-dj-bridge-sign-automorphism-and-star-dual]]).

## Proof

**Proof technique:** direct.

**Given:** The data and suppliers of [F1]–[F3]; work first over the universal

domain $\mathbb Z[z,z^{-1}]$, where all coefficient statements are polynomial

identities, and specialize at the end.

1.1 The row-double-coset identity and membership. For a semistandard tableau $S$ of shape $\lambda$ and type $\rho$ and a standard $t$ of shape $\lambda$, every row-standard refinement $s$ of the column-strict tableau $S$ is standard, and $\sum_sT_{d(s)}^*x_\lambda$ is the sum of $T_w$ over the double coset $S_\rho d(s_0)^{-1}S_\lambda$, each $w$ occurring exactly once; its left $S_\rho$-coset expansion writes it as $x_\rho h_0$, and appending $T_{d(t)}$ gives $m_{(S,t)}=x_\rho h$ for some $h\in H_n$. Hence each $m_{(S,t)}$ lies in $x_\rho H_n$, and no row-intersection quantum factorial is introduced. [F1, algebra]

1.2 Independence and the Garnir coefficient rules. The sums $m_{(S,t)}$ are $R$-independent because their Murphy fibres (the index sets $\{s:\rho(s)=S\}$) are disjoint and every coefficient in the expansion of $m_{(S,t)}$ in the $m_{st}$ basis is $1$; they therefore have disjoint unit pivots. For the coefficient rules, consider a violation at adjacent rows $i,i+1$ and column $j$ and the composition $\nu=(\lambda_1,\dots,\lambda_{i-1},j-1,\lambda_i+1,\lambda_{i+1}-j,\lambda_{i+2},\dots)$; the two length-additive coset sums of $S_\nu S_\lambda$ give $\sum_{w\in S_\nu\cap D_\lambda}x_\lambda T_w =\sum_{v\in S_\lambda\cap D_\nu}T_v^*x_\nu,$ whose distinguished Garnir term occurs with coefficient $1$. Every other term in the original shape has strictly more dominant row tableaux, the reordered $\nu$ has strictly higher lexicographic shape, and the ordinary Murphy dominance refinement places these shape errors in higher-cell ideals; a nonstandard tableau factors as that Garnir tableau followed by an additive-length word (removing inversions while keeping the column violation), and Bruhat subword support preserves the strict tableau-prefix inequality. In the isolated relation for consecutive $a,a+1$ in one column, sorting the Garnir belt has a unique standard term whose single adjacent swap produces the distinguished Garnir term, with coefficient $-1$, and every other same-shape term is strictly more dominant. This yields the displayed congruence of the Statement, and the right analogue follows by the cellular involutions $*$. [F1, F3, algebra]

2.1 The row eigenspace test. For a fixed $a$ the left $z$-eigenspace of $T_a$ in $H_n$ is $(1+T_a)H_n$: in the $T_w$ basis pair $w$ with $s_aw$ of larger length, and coefficient comparison in $T_ah=zh$ gives equality of the two coefficients, whose sum is $(1+T_a)T_w$. This argument uses only that $z$ is a unit. Over the universal domain, no element of this space has a nonzero Murphy coefficient at a tableau with $a,a+1$ in one column: choose a least shape and then a least left tableau in a dominance-compatible support order; higher-cell terms cannot contribute to its shape, and a column correction from another tableau can contribute only from a strictly less dominant left tableau, absent by minimality. If $a,a+1$ are in a column, its coefficient in $T_ah$ is the negative of its coefficient in $h$ by step 1.2, contradicting the eigenvalue equation since $z+1\ne0$ in the domain; if they share a row, the basis element is already a $z$-eigenvector and is subtracted; if their swap is standard, the exact two-tableau rules make the two coefficients equal and their sum is a $z$-eigenvector, which is subtracted. Each subtraction stays in the row ideal and removes the chosen support term without creating new ones, so induction on the finite support proves the column exclusion; specializing the resulting coordinate-zero identities gives it over every base ring, with no division by $z+1$ at a singular parameter. [F1, algebra]

3.1 The basis theorem. Let $h\in x_\rho H_n$. It is a $z$-eigenvector for every generator inside every $\rho$-row interval, so step 2.1 excludes any supported tableau with a consecutive pair inside one column; for an adjacent standard swap, comparison of the exact two-tableau equations makes the two coefficients equal (no column-state correction can interfere, since every such state has coefficient $0$). The standard refinements of a fixed row-label tableau are the linear extensions of the finite node posets of its repeated-label classes, and any two are connected by swaps of adjacent incomparable elements; finite induction on the inversion distance shows that if a repeated label occupies one column, a consecutive vertical cover realises an excluded state and forces the whole fibre coefficient to be $0$, while otherwise the row-label tableau is column-strict and every fibre coefficient equals one common value. Hence $h$ has zero coefficients off semistandard fibres and constant coefficients on each semistandard fibre, i.e. $h$ lies in the span of the $m_{(S,t)}$; with step 1.2 this proves that the $m_{(S,t)}$ form an $R$-basis of $x_\rho H_n$. [F1, step 1.2, step 2.1, algebra]

4.1 The two filtrations, keeping the ordinary dictionary explicit. The higher-shape Murphy-cell filtration obtained from [F1] has one quotient $C_{\mathrm M}(\lambda)$ for every semistandard tableau $S$ of shape $\lambda$ and type $\rho$: its second-index action is the fixed-first-index Murphy cell action. These quotients are free over $R$, so every short exact sequence of this filtration splits as a sequence of $R$-modules. Star duality is therefore exact on this filtration. On the distinguished coset basis $b_d=x_\rho T_d$ of $x_\rho H_n$, define $\beta(b_d,b_c)=\delta_{dc}z^{\ell(d)}$. The row-permutation generator cases prove contravariance: a same-row generator acts by $z$; a length-increasing adjacent coset pair acts by $b_dT_i=b_c$, $b_cT_i=z b_d+(z-1)b_c$, with $\ell(c)=\ell(d)+1$, and the diagonal weights give $\beta(b_dT_i,b_c)=z^{\ell(c)}=z\beta(b_d,b_d)$. All other entries are zero or the corresponding diagonal equality. Thus $\beta$ gives an $H_n$-isomorphism $x_\rho H_n\cong(x_\rho H_n)^\circ$, since every diagonal $z^{\ell(d)}$ is a unit. The independently proved same-shape bridge gives $C_{\mathrm M}(\lambda)^\circ\cong P(\lambda)$, the ordinary Dipper–James Specht module, by finite-free biduality. Dualize the split Murphy filtration and transport it through this permutation self-duality. The resulting reversed filtration is an ordinary Specht filtration with exactly the same multiplicities. The original Murphy filtration is not called the ordinary one. This preserves the full every-ring/unit-parameter existence Statement without generic semisimplicity or form nondegeneracy on a Specht module. [F1, F4, step 3.1, algebra]

5.1 The generic multiplicity interpretation. Over the generic field the finite Hecke algebra is split semisimple: by [F2] every simple is a nonzero cellular head, a simple factor of an ordinary cell module has a word character from that module and from the head's own cell shape, and disjoint word sets force the shapes to agree; existence of a factor forces its own head to be nonzero, diagonal multiplicity $1$ forces the cell module to be simple, and the sum of squared dimensions equals the Hecke rank, so the algebra and each parabolic are split semisimple. Consequently the filtration multiplicity $\#\operatorname{SStd}_\rho(\lambda)$ equals the multiplicity of the trivial character of the $\rho$-row parabolic in $S^\lambda$, by induction/restriction adjunction in the semisimple category. [F2, step 4.1, algebra]

6.1 Conclusion. Steps 1.1, 1.2, 2.1 and 3.1 prove the semistandard Murphy basis of $x_\rho H_n$, step 1.2 gives the explicit Garnir and same-column generator rules with their termination, step 4.1 gives the Specht filtration with multiplicity $\#\operatorname{SStd}_\rho(\lambda)$, and step 5.1 gives the generic parabolic-multiplicity interpretation. Everything is proved universally over $\mathbb Z[z,z^{-1}]$ and specializes; the row-double-coset membership uses each coset word once and introduces no quantum-factorial division. [step 3.1, step 4.1, step 5.1] ∎

## Remarks

This is the narrow ordinary type-A supplier consumed by the finite Mackey count of the higher-level theory: the basis and filtration are proved here rather than imported from a definition of the ordinary Schur algebra. No choice principle is used; all tableaux and quotient spaces are finite.
