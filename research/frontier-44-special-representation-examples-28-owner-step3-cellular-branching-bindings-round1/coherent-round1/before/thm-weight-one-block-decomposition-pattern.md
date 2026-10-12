---
id: thm-weight-one-block-decomposition-pattern
kind: theorem
title: "The weight-one block decomposition pattern"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 13
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

Let $F$ be a field and $q\in F^{\times}$ with quantum characteristic $e\ge2$
([[def-quantum-characteristic-of-an-invertible-hecke-parameter]]), let $\gamma$
be an $e$-core of $m$, and put $n=m+e$
([[def-e-core-e-quotient-and-e-weight]]). There are exactly $e$ partitions
$\lambda_1,\dots,\lambda_e$ of $n$ with $e$-core $\gamma$; list them in
dominance order, $\lambda_1\rhd\lambda_2\rhd\cdots\rhd\lambda_e$. In the
source's (Murphy) normalisation the Weyl modules and simple modules of this
weight-one class satisfy $W^{\lambda_e}=L^{\lambda_e}$ and
$$[W^{\lambda_k}]=[L^{\lambda_k}]+[L^{\lambda_{k+1}}]\qquad(1\le k<e),$$
so the decomposition matrix of the class is the $e\times e$ bidiagonal matrix
with rows and columns $\lambda_1,\dots,\lambda_e$. Moreover exactly $\lambda_1$
is not $e$-restricted, while $\lambda_2,\dots,\lambda_e$ are. Under the Schur
functor
(the batch-20 item thm-schur-functor-sends-weyl-and-simple-modules-to-specht-and-hecke-simple-modules)
the corresponding Murphy Specht classes are
$$[S^{\lambda_1}_{\mathrm M}]=[D^{\lambda_2}_{\mathrm M}],\qquad [S^{\lambda_k}_{\mathrm M}]=[D^{\lambda_k}_{\mathrm M}]+[D^{\lambda_{k+1}}_{\mathrm M}]\ (2\le k<e),\qquad [S^{\lambda_e}_{\mathrm M}]=[D^{\lambda_e}_{\mathrm M}],$$
with $D^{\lambda_1}_{\mathrm M}=0$; conjugating partitions and applying the
same $\theta$ pullback to both modules
([[def-type-a-hecke-specht-module-and-cell-form]],
[[prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality]])
gives the corresponding decomposition matrix for the page's Dipper-James
Specht modules in $e$-regular labels.

No choice principle is used.

## Facts & Assumptions

**Given:** A field $F$, $q\in F^{\times}$ with quantum characteristic $e\ge2$,
an $e$-core $\gamma$ of $m$, the integer $n=m+e$, and the Weyl modules
$W^{\lambda}_F$ of $S_F(d,n)$ for $\lambda\vdash n$ with at most $d$ parts,
where $d\ge n$.

[F1] Weyl modules and classes: each $W^{\lambda}_F$ has simple head
$L^{\lambda}_F$, the class $[N]$ of a finite-dimensional module is its
composition-character vector in the basis of simple classes, a class
$[N]=[L]$ with a single simple summand forces $N\cong L$, and the Jantzen
filtration satisfies $W^{\lambda}_F(1)=\operatorname{rad}W^{\lambda}_F$, so
$[W^{\lambda}_F]=[L^{\lambda}_F]+\sum_{i>0}[W^{\lambda}_F(i)]$
([[def-type-a-q-schur-algebra-and-weyl-modules]]).

[F2] Jantzen sum formula in the exact form of the missing batch-20 supplier
thm-q-schaper-virtual-radical-layer-formula (scaffolded on the
batch-20 A page `type-a-hecke-specht-modules-and-cellular-bases` of this run,
not yet authored on disk at this dispatch; every use below is an open
obligation recorded in the dispatch report):
$$\sum_{i>0}\bigl[W^{\lambda}_F(i)\bigr]=\sum_{\substack{(a,b),(a,c)\in[\lambda]\\ b<c}}\Bigl(\nu_\pi\bigl([h^{\lambda}_{ab}]_{\hat q}\bigr)-\nu_\pi\bigl([h^{\lambda}_{ac}]_{\hat q}\bigr)\Bigr)\Bigl[W^{\mu(a,b,c)}_F\Bigr],$$
with the index partition $\mu(a,b,c)$ obtained from $\lambda$ by unwrapping a
rim hook and wrapping it back on lower down (Mathas Lemma 5.26). In the
weight-one configuration of the statement, where $\lambda$ has $e$-core
$\gamma$ and $\lambda\in\{\lambda_1,\dots,\lambda_e\}$, this formula evaluates
for $k=1,\dots,e$ to
$$\sum_{i>0}\bigl[W^{\lambda_k}_F(i)\bigr]=\sum_{j>k}(-1)^{j-k+1}\bigl[W^{\lambda_j}_F\bigr]$$
(Mathas Proposition 5.38, whose printed proof records exactly this
evaluation).

[F3] $e$-core and quotient ([[def-e-core-e-quotient-and-e-weight]],
[[thm-e-core-is-independent-of-the-rim-hook-removal-order]]): a partition is
recovered from its $e$-core together with its $e$-quotient, the quotient of
$\lambda$ has size the $e$-weight $w_e(\lambda)$, and $w_e(\lambda)=1$ holds
exactly when $n=|\gamma|+e$ for some $e$-core $\gamma$. A partition is
$e$-restricted when its conjugate is $e$-regular, i.e. when no $e$ of its
columns have the same height ([[def-e-regular-and-e-restricted-partitions]]).

[F4] Schur functor dictionary ([[def-schur-idempotent-and-schur-functor-for-type-a-q-schur-algebras]],
the batch-20 item thm-schur-functor-sends-weyl-and-simple-modules-to-specht-and-hecke-simple-modules,
[[def-type-a-hecke-specht-module-and-cell-form]]; the first two are also not
yet authored on disk, and are recorded as open obligations): for $d\ge n$ the
exact Schur functor sends $W^{\lambda}_F$ to the Murphy cell module
$S^{\lambda}_{\mathrm M}=W^{\lambda}_Fe$ and $L^{\lambda}_F$ to
$D^{\lambda}_{\mathrm M}=L^{\lambda}_Fe$, which is zero exactly when $\lambda$
is not $e$-restricted, and it preserves composition multiplicities, so
$[S^{\lambda}_{\mathrm M}]=\sum_{\mu}[W^{\lambda}_F:L^{\mu}_F][D^{\mu}_{\mathrm M}]$.




## Proof

**Proof technique:** direct.

1.1 Enumeration. By [F3] the partitions of $n=m+e$ of $e$-core $\gamma$ are exactly the partitions whose $e$-quotient has total size $1$, that is, whose quotient is a single box placed in one of the $e$ components $\lambda^{(0)},\dots,\lambda^{(e-1)}$; since a partition is recovered from its core and its quotient, there are exactly $e$ such partitions. On the abacus of a normalised $\beta$-set of $\gamma$ they are obtained by moving one bead down one row on one runner, one partition per runner, and the partitions obtained from the various runners are pairwise distinct and are ordered by dominance as $\lambda_1\rhd\cdots\rhd\lambda_e$, the largest one $\lambda_1=(\gamma_1+e,\gamma_2,\gamma_3,\dots)$ coming from the move at the end of the first row and $\lambda_e$ from the move whose target position is lowest on its runner ([[def-beta-set-and-e-runner-abacus-of-a-partition]], [F3]). [F3, construct]

2.1 $e$-restriction pattern. The first part of $\lambda_1=(\gamma_1+e,\gamma_2,\dots)$ is $\gamma_1+e$, so columns $\gamma_1+1,\dots,\gamma_1+e$ of $[\lambda_1]$ contain only the first row and all have height $1$: $\lambda_1$ has $e$ equal column heights, its conjugate is not $e$-regular, and $\lambda_1$ is not $e$-restricted. For $k\ge2$ the partition $\lambda_k$ comes from moving down a bead of a runner strictly below the row that carries the moved bead for $\lambda_1$; each such move leaves the column heights $\lambda'_{k,j}$ alternating with gaps, so that $\lambda'_{k,j}>\lambda'_{k,j+1}$ whenever $j$ and $j+e-1$ are both within range, that is, no $e$ columns of $[\lambda_k]$ have equal height, and $\lambda_k$ is $e$-restricted. [F3, step 1.1, given]

2.2 The descending induction. For $k=e$ the evaluation of [F2] is an empty sum, so $[W^{\lambda_e}_F]=[L^{\lambda_e}_F]$ by [F1] and $W^{\lambda_e}_F=L^{\lambda_e}_F$; the decomposition row of $\lambda_e$ is $(0,\dots,0,1)$. Suppose now $k<e$ and that for every $j$ with $k<j\le e$ the row $[W^{\lambda_j}_F]=[L^{\lambda_j}_F]+[L^{\lambda_{j+1}}_F]$ is known, where $[L^{\lambda_{e+1}}_F]:=0$. Then [F2] and [F1] give $$[W^{\lambda_k}_F]=[L^{\lambda_k}_F]+\sum_{j>k}(-1)^{j-k+1}[W^{\lambda_j}_F]=[L^{\lambda_k}_F]+\sum_{j>k}(-1)^{j-k+1}\bigl([L^{\lambda_j}_F]+[L^{\lambda_{j+1}}_F]\bigr),$$ and the last sum telescopes: the coefficient of $[L^{\lambda_j}_F]$ is $(-1)^{j-k+1}+(-1)^{j-k}=0$ for $k+1<j\le e$, while the coefficient of $[L^{\lambda_{k+1}}_F]$ is $(-1)^2=1$. Hence $[W^{\lambda_k}_F]=[L^{\lambda_k}_F]+[L^{\lambda_{k+1}}_F]$, and reading off simple multiplicities gives the bidiagonal decomposition matrix $d_{\lambda_k\lambda_k}=d_{\lambda_k\lambda_{k+1}}=1$ of the statement. [F1, F2, step 1.1, algebra]

3.1 Schur functor translation. By [F4] and step 2.1 the functor sends $W^{\lambda_k}_F$ to $S^{\lambda_k}_{\mathrm M}$ and $L^{\lambda_k}_F$ to $D^{\lambda_k}_{\mathrm M}$, with $D^{\lambda_1}_{\mathrm M}=0$ exactly for the non-$e$-restricted label $\lambda_1$, and preserves the class identities of step 2.2 term by term. Hence $[S^{\lambda_1}_{\mathrm M}]=[D^{\lambda_2}_{\mathrm M}]$, $[S^{\lambda_k}_{\mathrm M}]=[D^{\lambda_k}_{\mathrm M}]+[D^{\lambda_{k+1}}_{\mathrm M}]$ for $2\le k<e$, and $[S^{\lambda_e}_{\mathrm M}]=[D^{\lambda_e}_{\mathrm M}]$, as displayed. Finally conjugation preserves hook lengths and hence $e$-cores and $e$-restriction ([[def-partition-young-diagram-and-conjugate-partition]], [F3]), and the Dipper-James Specht module of this page is the signed $\theta$-pullback of the Murphy cell module of conjugate shape, the same $\theta$ being applied to each Hecke module; applying it to the displayed rows gives the corresponding decomposition matrix in $e$-regular labels ([[def-type-a-hecke-specht-module-and-cell-form]], [[prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality]]). [F3, F4, step 2.1, step 2.2] ∎
