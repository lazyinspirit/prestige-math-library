---
id: thm-weight-one-block-decomposition-pattern
kind: theorem
title: "The weight-one block decomposition pattern"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 14
deps: [def-e-core-e-quotient-and-e-weight, thm-q-schaper-virtual-radical-layer-formula, thm-schur-functor-sends-weyl-and-simple-modules-to-specht-and-hecke-simple-modules, prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality, def-type-a-hecke-specht-module-and-cell-form, def-type-a-q-schur-algebra-and-weyl-modules, def-quantum-characteristic-of-an-invertible-hecke-parameter, def-q-integer-q-factorial-and-q-multinomial, lem-virtual-weyl-combinations-detect-q-schur-block-separation, def-e-regular-and-e-restricted-partitions, thm-e-core-is-independent-of-the-rim-hook-removal-order, def-schur-idempotent-and-schur-functor-for-type-a-q-schur-algebras, def-beta-set-and-e-runner-abacus-of-a-partition, def-partition-young-diagram-and-conjugate-partition]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete 79-page prepublication manuscript (1998; expanded AMS University Lecture Series 15 edition, 1999)"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Proposition 5.38 (due to James) with its printed proof, printed pp. 62-63: the e partitions of e-weight 1 with a fixed e-core, the Jantzen evaluation $\\sum_{i>0}[W^{\\lambda_k}(i)]=\\sum_{j>k}(-1)^{j-k+1}[W^{\\lambda_j}]$, and the induction giving $W^{\\lambda_e}=L^{\\lambda_e}$ and $W^{\\lambda_k}=L^{\\lambda_k}+L^{\\lambda_{k+1}}$; Proposition 4.19 for the Schur functor dictionary"
    - title: "Sinead Lyle and Andrew Mathas, Blocks of affine and cyclotomic Hecke algebras, author-hosted complete 19-page preprint (published in Math. Z.)"
      url: "https://www.maths.usyd.edu.au/u/pubs/publist/preprints/2006/lyle-24.pdf"
      locator: "Remark on the failure of the Jantzen argument for Specht modules and Proposition 2.3, printed pp. 4-7: the Schur functor comparison $[S(\\lambda):D(\\nu)]=[\\Delta(\\lambda):L(\\nu)]$ when $D(\\nu)\\ne0$"
---

## Statement

Let $F$ be a field and $q\in F^{\times}$ with quantum characteristic $e\ge2$ ([[def-quantum-characteristic-of-an-invertible-hecke-parameter]]), let $\gamma$ be an $e$-core of $m$, and put $n=m+e$ ([[def-e-core-e-quotient-and-e-weight]]). There are exactly $e$ partitions $\lambda_1,\dots,\lambda_e$ of $n$ with $e$-core $\gamma$; list them in dominance order, $\lambda_1\rhd\lambda_2\rhd\cdots\rhd\lambda_e$. In the source's (Murphy) normalisation the Weyl modules and simple modules of this weight-one class satisfy $W^{\lambda_e}=L^{\lambda_e}$ and $$[W^{\lambda_k}]=[L^{\lambda_k}]+[L^{\lambda_{k+1}}]\qquad(1\le k<e),$$ so the decomposition matrix of the class is the $e\times e$ bidiagonal matrix with rows and columns $\lambda_1,\dots,\lambda_e$. Moreover exactly $\lambda_1$ is not $e$-restricted, while $\lambda_2,\dots,\lambda_e$ are. Under the Schur functor ([[thm-schur-functor-sends-weyl-and-simple-modules-to-specht-and-hecke-simple-modules]]) the corresponding Murphy Specht classes are $$[S^{\lambda_1}_{\mathrm M}]=[D^{\lambda_2}_{\mathrm M}],\qquad [S^{\lambda_k}_{\mathrm M}]=[D^{\lambda_k}_{\mathrm M}]+[D^{\lambda_{k+1}}_{\mathrm M}]\ (2\le k<e),\qquad [S^{\lambda_e}_{\mathrm M}]=[D^{\lambda_e}_{\mathrm M}],$$ with $D^{\lambda_1}_{\mathrm M}=0$; conjugating partitions and applying the same $\theta$ pullback to both modules ([[def-type-a-hecke-specht-module-and-cell-form]], [[prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality]]) gives the corresponding decomposition matrix for the page's Dipper-James Specht modules in $e$-regular labels.

No choice principle is used.

## Facts & Assumptions

**Given:** A field $F$, $q\in F^{\times}$ with quantum characteristic $e\ge2$, an $e$-core $\gamma$ of $m$, the integer $n=m+e$, and the Weyl modules $W^{\lambda}_F$ of $S_F(d,n)$ for $\lambda\vdash n$ with at most $d$ parts, where $d\ge n$.

[F1] Each Weyl module has simple head $L^{\lambda}$ of multiplicity one, the decomposition matrix is dominance-unitriangular, and all simple modules are obtained this way ([[def-type-a-q-schur-algebra-and-weyl-modules]]). In a finite-dimensional module, a simple head implies indecomposability: any nonzero direct summand has a nonzero head, so two nonzero summands would give a nonsimple head.

[F2] The corrected balanced Jantzen formula sums positive filtration **submodules**, not their successive quotients: $$\sum_{i>0}[W^{\lambda}_F(i)]=\sum_{(a,b),(a,c)\in[\lambda],\ b<c}\bigl(\nu_\pi([h^{\lambda}_{ab}]_{\hat q})-\nu_\pi([h^{\lambda}_{ac}]_{\hat q})\bigr)[W^{\beta+h^{\lambda}_{ac}\varepsilon_b-h^{\lambda}_{ac}\varepsilon_c}_F].$$ Here $\beta_b=\lambda'_b+N-b$ for a fixed sufficiently long conjugate beta sequence, and the right hand symbols are alternating symbols: sort strictly decreasing, attach the sorting sign, and vanish on repeated or negative entries. The equal transfer preserves total size. Moreover $W(1)=\operatorname{rad}W$. This is the balanced hook-ratio formula required from [[thm-q-schaper-virtual-radical-layer-formula]] and [[def-alternating-weyl-and-specht-symbols-from-beta-sequences]]. Its source arithmetic must be repaired before binding: the manuscript's displayed beta indices are inconsistent, while its worked Example 5.28 determines the balanced transfer.

[F3] Core-quotient and abacus theory: a weight-one partition is obtained from a packed core abacus by moving the bottom bead of one runner down one place. The bead move removes/adds a rim $e$-hook, and distinct runners give distinct partitions ([[def-e-core-e-quotient-and-e-weight]], [[thm-e-core-is-independent-of-the-rim-hook-removal-order]], [[def-beta-set-and-e-runner-abacus-of-a-partition]]). Restricted means $\lambda_i-\lambda_{i+1}<e$ for every $i$ ([[def-e-regular-and-e-restricted-partitions]]).

[F4] The exact Schur functor sends $W^{\lambda}$ to $S^{\lambda}_{\mathrm M}$ and $L^{\lambda}$ to $D^{\lambda}_{\mathrm M}$, whose nonzero labels are precisely the restricted partitions. The ordinary Specht dictionary uses conjugation and the same $\theta$ pullback on every module ([[def-schur-idempotent-and-schur-functor-for-type-a-q-schur-algebras]], [[thm-schur-functor-sends-weyl-and-simple-modules-to-specht-and-hecke-simple-modules]], [[def-type-a-hecke-specht-module-and-cell-form]]).



## Proof

**Proof technique:** direct.

1.1 Enumeration and ordering. Choose a conjugate core beta set long enough that every runner contains a bead, and list its bottom beads $x_1<\cdots<x_e$. Each runner is packed, so replacing $x_k$ by $x_k+e$ gives precisely the $e$ weight-one partitions, denoted $\lambda_k$. For $j>k$, moving $x_j$ instead of $x_k$ gives the more dominant conjugate partition: comparing the sorted bead lists, each partial sum increases when the move starts at the larger bead. Conjugation reverses dominance, hence $\lambda_1\rhd\cdots\rhd\lambda_e$. The largest original partition is $(\gamma_1+e,\gamma_2,\ldots)$, since its added horizontal first-row strip dominates every other placement. [F3, construct, algebra]

1.2 Choose a lift with valuation one. If $q\ne1$, its finite quantum characteristic $e$ is its multiplicative order, and is prime to the field characteristic; use $R=F[X]_{(X-q)}$ and $\hat q=X$. The derivative of $X^e-1$ at $q$ is $eq^{e-1}\ne0$, so $\nu([e]_X)=1$; also $\nu([h]_X)=0$ when $e\nmid h$. If $q=1$, then $\operatorname{char}F=p=e$. First work over $\mathbb F_p$ with $R=\mathbb Z_{(p)}$, $\hat q=1$, giving $\nu([e]_1)=\nu(p)=1$ and $\nu([h]_1)=0$ for $p\nmid h$, and then extend scalars to $F$. This extension preserves the decomposition multiplicities because the q-Schur simple modules are absolutely irreducible and its integral Weyl modules commute with scalar extension. In both cases the generic factorial is nonzero and [F2] applies. [F1, F2, given, algebra]

2.1 Restriction. If $\lambda$ is not restricted, some $\lambda_i-\lambda_{i+1}\ge e$, so removing the last $e$ boxes of row $i$ leaves a partition. Its size is $|\gamma|$ and its core is $\gamma$, so it equals $\gamma$. Thus $\lambda$ is obtained by adding $e$ boxes to row $i$ of $\gamma$. An $e$-core has $\gamma_r-\gamma_{r+1}<e$ for every $r$, since otherwise it has a removable horizontal $e$-strip. Consequently $i>1$ is impossible: the partition inequality $\gamma_{i-1}\ge\gamma_i+e$ would contradict this core property. Therefore the only nonrestricted member is $\lambda_1=(\gamma_1+e,\gamma_2,\ldots)$; it is indeed nonrestricted because its first-row difference is at least $e$. [F3, step 1.1, algebra]

2.2 Evaluate the balanced formula. A nonzero coefficient involves a hook of length divisible by $e$. A weight-one abacus has exactly one bead-gap pair of equal residue with the gap below the bead: $x_k+e$ and $x_k$; thus its only $e$-divisible hook has length $e$. Any surviving term in [F2] replaces two bead values, and its new runner counts equal the old ones: either $e$ divides the transfer $h_{ac}$, leaving residues fixed, or $e$ divides $h_{ab}=h_{ac}+\beta_b-\beta_c$, exchanging their residues. Hence its sorted symbol is one of the $\lambda_j$. For $j>k$, the distinct bead sets of $\lambda_k$ and $\lambda_j$ differ exactly by replacing $x_k+e,x_j$ with $x_k,x_j+e$. There is exactly one balanced transfer yielding this change: if $x_j<x_k+e$, its two hook lengths are $h_{ab}=e$, $h_{ac}=x_j-x_k$; if $x_j>x_k+e$, they are $h_{ab}=x_j-x_k$, $h_{ac}=e$. The difference $x_j-x_k$ is not divisible by $e$ since bottom beads are on distinct runners. Thus the respective unsigned coefficients are $+1$ and $-1$ by step 1.2. Sorting gives in either case the signed coefficient $(-1)^{j-k+1}$: in the packed core set, exactly one bead from each runner with bottom bead $>x_r$ lies between $x_r$ and $x_r+e$, so moving $x_r$ crosses $e-r$ beads; the relative sorting parity for the two moves, together with their opposite orientation, is $(-1)^{(e-j)-(e-k)+1}$. There are no other terms and no repeated contributions: the two lost and two gained bead values determine the pair and transfer uniquely. Therefore $\sum_{i>0}[W^{\lambda_k}(i)]=\sum_{j>k}(-1)^{j-k+1}[W^{\lambda_j}]$. [F2, F3, step 1.1, step 1.2, algebra]

3.1 Descending induction and the matrix. For $k=e$, step 2.2 gives zero on the left; all summands are actual submodule classes with nonnegative simple multiplicities, so $W^{\lambda_e}(1)=0$ and $W^{\lambda_e}=L^{\lambda_e}$. Suppose the stated rows are known for $j>k$. Substitution into step 2.2 telescopes to $\sum_{i>0}[W^{\lambda_k}(i)]=[L^{\lambda_{k+1}}]$. Since $W(1)=\operatorname{rad}W$ and each later term is a submodule of $W(1)$, positivity shows $W(1)\cong L^{\lambda_{k+1}}$ and $W(i)=0$ for $i\ge2$. The head quotient is $L^{\lambda_k}$, giving $[W^{\lambda_k}]=[L^{\lambda_k}]+[L^{\lambda_{k+1}}]$. Notice that the identity $[W]=[L]+\sum_{i>0}[W(i)]$ is used only after proving all later filtration submodules vanish; it is false for a general Jantzen filtration. Reading simple multiplicities yields the complete $e\times e$ bidiagonal matrix. [F1, F2, step 2.2, algebra]

4.1 Specht rows. Apply the exact functor of [F4] to step 3.1 and use step 2.1: $D^{\lambda_1}_{\mathrm M}=0$, while the other $D^{\lambda_k}_{\mathrm M}$ are the nonzero simples. This gives exactly the three displayed Murphy Specht class identities, hence the full $e\times(e-1)$ Murphy matrix. Conjugation sends the core to $\gamma'$ and the restricted simple labels to regular ones, and the same $\theta$ pullback applied to every module preserves all composition multiplicities. Thus the ordinary Specht matrix has the same entries under the accepted conjugate/sign label dictionary. [F4, step 2.1, step 3.1] ∎

