---
id: thm-q-schur-weyl-modules-are-in-the-same-block-iff-their-labels-have-the-same-e-core
kind: theorem
title: "q-Schur Weyl modules are in the same block iff their labels have the same e-core"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 13
deps: [lem-virtual-weyl-combinations-detect-q-schur-block-separation, thm-e-core-is-independent-of-the-rim-hook-removal-order, def-e-core-e-quotient-and-e-weight, thm-q-schaper-virtual-radical-layer-formula, def-type-a-q-schur-algebra-and-weyl-modules, def-quantum-characteristic-of-an-invertible-hecke-parameter, def-q-integer-q-factorial-and-q-multinomial, def-dominance-order-on-partitions, lem-semistandard-weight-dimensions-detect-virtual-weyl-classes, def-blocks-of-a-finite-dimensional-algebra-by-primitive-central-idempotents, lem-cell-form-is-associative-and-its-radical-is-a-submodule, thm-nonzero-cell-heads-classify-the-simple-modules-of-a-cellular-algebra]
justified_by: []
aliases: []
landmark: true
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
      locator: "Lemma 5.34, Lemma 5.35 and Theorem 5.36 with their printed proofs, printed pp. 60-62: the abacus proof of the core, the block-separation lemma, and the two-direction block classification via the Jantzen-Schaper sum formula, Lemma 5.26's index description and the induction moving rim e-hooks to the first row"
    - title: "Sinead Lyle and Andrew Mathas, Blocks of affine and cyclotomic Hecke algebras, author-hosted complete 19-page preprint (published in Math. Z.)"
      url: "https://www.maths.usyd.edu.au/u/pubs/publist/preprints/2006/lyle-24.pdf"
      locator: "Lemma 2.2 (Graham-Lehrer: the composition factors of a cell module lie in one block), Lemma 2.4 (linear independence of Weyl classes), Theorem 2.6 (Jantzen sum formula) and Propositions 2.3 and 2.9 with their proofs, printed pp. 4-7"
---

## Statement

Let $F$ be a field and $q\in F^{\times}$ with quantum characteristic $e$
([[def-quantum-characteristic-of-an-invertible-hecke-parameter]],
[[def-q-integer-q-factorial-and-q-multinomial]]), let $d\ge n$, and let
$W^{\lambda}_F$ be the Weyl modules of $S_F(d,n)$
([[def-type-a-q-schur-algebra-and-weyl-modules]]). Then for partitions
$\lambda,\mu\vdash n$ with at most $d$ parts, $W^{\lambda}_F$ and
$W^{\mu}_F$ lie in the same block of $S_F(d,n)$ if and only if $\lambda$ and
$\mu$ have the same $e$-core ([[def-e-core-e-quotient-and-e-weight]]).
Consequently the blocks of $S_F(d,n)$ are indexed by the $e$-cores $\gamma$
with $|\gamma|\le n$ and $|\gamma|\equiv n\pmod e$, and the block of
$W^{\lambda}_F$ is determined by $C_e(\lambda)$. (For $e=\infty$ every
partition is its own core and every Weyl module is its own block, the algebra
being semisimple.)

No choice principle is used.

## Facts & Assumptions

**Given:** A field $F$, $q\in F^{\times}$ with quantum characteristic $e$, an
integer $d\ge n$, the $q$-Schur algebra $S_F(d,n)$ with Weyl modules
$W^{\lambda}_F$ for $\lambda\in\Lambda^{+}(d,n)$, and the positive Jantzen
layers $W^{\lambda}_F(i)$, $i\ge1$, of the missing batch-20 supplier
thm-q-schaper-virtual-radical-layer-formula (scaffolded on the batch-20 A
page `type-a-hecke-specht-modules-and-cellular-bases` of this run; not yet
authored on disk at this dispatch, so every use of [F5] below is an open
obligation recorded in the dispatch report).

[F1] $S_F(d,n)$ is finite-dimensional, each $W^{\lambda}_F$ has simple head
$L^{\lambda}_F$ with $[W^{\lambda}_F:L^{\lambda}_F]=1$, and
$[W^{\lambda}_F:L^{\mu}_F]\ne0$ implies $\lambda\unrhd\mu$; the classes
$[W^{\lambda}_F]$ form a $\mathbb Z$-basis of $G_0(S_F(d,n)\text{-mod})$, and
the Cartan matrix satisfies $C=D^{\top}D$
([[def-type-a-q-schur-algebra-and-weyl-modules]],
[[lem-semistandard-weight-dimensions-detect-virtual-weyl-classes]] — also not
authored on disk at this dispatch; recorded as an open obligation).

[F2] Quantum characteristic: for $h\ge1$ one has $[h]_q=0$ in $F$ if and only
if $e\mid h$; and if $e=\infty$ then $[h]_q\ne0$ for every $h\ge1$
([[def-quantum-characteristic-of-an-invertible-hecke-parameter]],
[[def-q-integer-q-factorial-and-q-multinomial]]).

[F3] Blocks: $1=\sum_B\epsilon_B$ is the decomposition of the identity of
$S_F(d,n)$ into pairwise orthogonal primitive central idempotents, the blocks
are the ideals $B=S\epsilon_B$, every right module $N$ decomposes as
$N=\bigoplus_BN\epsilon_B$, and a simple module lies in exactly one block
([[def-blocks-of-a-finite-dimensional-algebra-by-primitive-central-idempotents]]).

[F4] Every composition factor of a cell module $W^{\lambda}_F$ lies in the
block containing $L^{\lambda}_F$ (Graham-Lehrer; Lyle-Mathas Lemma 2.2, printed
p. 4). The in-run cellular items
[[thm-nonzero-cell-heads-classify-the-simple-modules-of-a-cellular-algebra]]
and [[lem-cell-form-is-associative-and-its-radical-is-a-submodule]] carry the
cell-form theory; the block statement is recorded here as a further input from
the same cellular-algebra source (open obligation).

[F5] **Jantzen filtration and sum formula** (the missing batch-20 supplier
thm-q-schaper-virtual-radical-layer-formula; scaffolded statement
quoted in full in the dispatch report). Let $R$ be a principal ideal domain
with a prime $\pi$ and residue field $F=R/\pi R$, and let
$\hat q\in R^{\times}$ satisfy $[n]!_{\hat q}\ne0$ in $R$, with
$q=\hat q+\pi R$. Then: (a) there is a finite decreasing filtration
$W^{\lambda}_F=W^{\lambda}_F(0)\supseteq W^{\lambda}_F(1)\supseteq\cdots$ of
$W^{\lambda}_F$ by submodules with $W^{\lambda}_F(1)=\operatorname{rad}
W^{\lambda}_F$, whose layers $W^{\lambda}_F(i):=W^{\lambda}_F(i)/W^{\lambda}_F(i+1)$
are finite-dimensional and satisfy, in $G_0(S_F(d,n)\text{-mod})$,
$$\sum_{i>0}\bigl[W^{\lambda}_F(i)\bigr]=\sum_{\substack{(a,b),(a,c)\in[\lambda]\\ b<c}}\Bigl(\nu_\pi\bigl([h^{\lambda}_{ab}]_{\hat q}\bigr)-\nu_\pi\bigl([h^{\lambda}_{ac}]_{\hat q}\bigr)\Bigr)\Bigl[W^{\mu(a,b,c)}_F\Bigr],$$
where $\nu_\pi$ is the $\pi$-adic valuation, $h^{\lambda}_{ab}$ are the hook
lengths of $\lambda$, and $\mu(a,b,c)$ is the partition of $n$ with beta
sequence $(\beta_1,\dots,\beta_b+h^{\lambda}_{ab},\dots,\beta_c-h^{\lambda}_{ac},\dots,\beta_n)$,
$\beta=\beta(\lambda)$ being the beta sequence of $\lambda$; (b) by Lemma 5.26
the partition $\mu(a,b,c)$ is obtained from $\lambda$ by unwrapping the rim
hook $R^{\lambda}_{ac}$ and wrapping it back on lower down, so that
$\mu(a,b,c)\lhd\lambda$ in the dominance order; (c) if $R$ is a domain then
$\nu_\pi([h]_{\hat q})\ne0$ for $h\ge1$ if and only if $[h]_{q}=0$ in $F$.

[F6] $e$-core facts ([[def-e-core-e-quotient-and-e-weight]],
[[thm-e-core-is-independent-of-the-rim-hook-removal-order]]): the $e$-core
$C_e(\lambda)$ is well defined and is the terminal partition of every maximal
sequence of removals of removable border strips of size $e$; if $\mu$ is
obtained from $\lambda$ by unwrapping a rim hook of $e$-divisible length and
wrapping it back on (equivalently, by a sequence of rim $e$-hook moves), then
$C_e(\mu)=C_e(\lambda)$; and for an $e$-core $\gamma$ the partition
$\lambda_\gamma:=(\gamma_1+we,\gamma_2,\gamma_3,\dots)$ of $n=|\gamma|+we$ has
$e$-core $\gamma$.

[F7] Two simple modules of a finite-dimensional algebra $A$ over a field lie
in the same block if and only if their labels are connected by a chain
$\nu_0,\dots,\nu_k$ with $C_{\nu_i\nu_{i+1}}\ne0$, where
$C_{\mu\nu}=[P_\nu:L_\mu]$ is the Cartan matrix and $P_\nu$ is the projective
cover of $L_\nu$ (standard block theory: the blocks are the connected
components of the Cartan graph). Applied to $S_F(d,n)$ using $C=D^{\top}D$ of
[F1] this says: labels in the same block are connected by a chain of pairs
sharing a Weyl module as a composition factor. This algebraic input is used
here and carries no in-run supplier (open obligation).




## Proof

**Proof technique:** direct.

1.1 Lift and the valuation criterion. Let $\pi=X-q$ and $R=F[X]_{(\pi)}$, the localisation of the polynomial ring at the maximal ideal generated by $\pi$; then $R$ is a principal ideal domain (indeed a discrete valuation ring) with residue field $F$, $\pi$ is a prime element, and $\hat q:=X\in R^{\times}$ satisfies $\hat q+\pi R=q$. Since $R$ is a domain and $[m]_{\hat q}=1+X+\cdots+X^{m-1}\ne0$ for every $m\ge1$, one has $[n]!_{\hat q}=\prod_{m=1}^{n}[m]_{\hat q}\ne0$ in $R$. By [F5](c) and [F2], for every hook length $h$ of a partition of $n$ one has $$\nu_\pi\bigl([h]_{\hat q}\bigr)\ne0\iff [h]_q=0\iff e\mid h ,$$ and for $e=\infty$ every such valuation is zero. [F2, F5, algebra]

1.2 Jantzen links lie in one block. Let $C_\lambda$ be the block of $W^{\lambda}_F$ and put $M_\lambda:=\bigoplus_{i>0}W^{\lambda}_F(i)$, the direct sum of the positive Jantzen layers. Each layer is a subquotient of $W^{\lambda}_F$, so all composition factors of $M_\lambda$ lie in $C_\lambda$ by [F3] and [F4]; by the sum formula of [F5](a), the class of $M_\lambda$ is $[M_\lambda]=\sum_{\mu}c_\mu[W^{\mu}_F]$ with the integers $c_\mu$ the accumulated coefficients of the displayed terms. Applying the block-separation lemma [[lem-virtual-weyl-combinations-detect-q-schur-block-separation]] to $M_\lambda$ gives: if $c_\mu\ne0$, then $W^{\mu}_F$ lies in $C_\lambda$. [F3, F4, F5, algebra]

2.1 Nonzero coefficients keep the core. Fix $\lambda\vdash n$ with at most $d$ parts and a term of the sum formula of [F5] with labels $(a,b),(a,c)$, $b<c$, and coefficient $\nu_\pi([h^{\lambda}_{ab}]_{\hat q})-\nu_\pi([h^{\lambda}_{ac}]_{\hat q})\ne0$. Then the two valuations differ, so at least one of $h^{\lambda}_{ab}$, $h^{\lambda}_{ac}$ has nonzero valuation and is therefore divisible by $e$ by step 1.1. If $e\mid h^{\lambda}_{ac}$, then by [F5](b) the index $\mu(a,b,c)$ is obtained from $\lambda$ by unwrapping and rewrapping the rim hook $R^{\lambda}_{ac}$ of $e$-divisible length, a sequence of rim $e$-hook moves, so $C_e(\mu(a,b,c))=C_e(\lambda)$ by [F6]. If $e\nmid h^{\lambda}_{ac}$, then $e\mid h^{\lambda}_{ab}$, and the same index description exhibits $\mu(a,b,c)$ as obtained from $\lambda$ by sliding the rim hook $R^{\lambda}_{ab}$ along the rim, again a sequence of rim $e$-hook moves, so $C_e(\mu(a,b,c))=C_e(\lambda)$ as well. Hence in all cases $C_e(\mu(a,b,c))=C_e(\lambda)$ whenever the coefficient is nonzero. [F5, F6, step 1.1, algebra]

2.2 Sufficiency: same core forces the same block. Fix an $e$-core $\gamma$ with $|\gamma|\le n$, $|\gamma|\equiv n\pmod e$, and put $w:=(n-|\gamma|)/e$ and $\lambda_\gamma:=(\gamma_1+we,\gamma_2,\gamma_3,\dots)$, a partition of $n$ with at most $d$ parts and $C_e(\lambda_\gamma)=\gamma$ by [F6]. Let $\mu\ne\lambda_\gamma$ be a partition of $n$ with $C_e(\mu)=\gamma$. Then $\mu$ has a rim $e$-hook whose lowest node lies in a row later than the first row: otherwise every rim $e$-hook of $\mu$ would be a horizontal strip inside the first row, the abacus of $\mu$ would have no bead with a gap in the position $e$ labels above it on the runners other than in the first row, and concatenating such strips would show that $\mu$ is obtained from its core $\gamma$ by adjoining $we$ boxes to the first row, against $\mu\ne\lambda_\gamma$. Fix such a rim hook $R^{\mu}_{ab}$ of length $e$, remove it from $\mu$ and add it back at the end of the first row, obtaining a partition $\lambda'$ of $n$ with first part $\lambda'_1=\mu_1+e$, with $\mu=\mu(a,b,c)$ for suitable nodes of $\lambda'$ by [F5](b), and with $C_e(\lambda')=C_e(\mu)=\gamma$ by [F6]. By [F5](a) the class of $\sum_{i>0}W^{\lambda'}_F(i)$ contains $[W^{\mu}_F]$ with coefficient the hook length $e$ and valuation difference $\nu_\pi([e]_{\hat q})-0$; that coefficient is nonzero because $[e]_{\hat q}\not\equiv[e]_q=0$, so step 1.2 shows that $W^{\mu}_F$ and $W^{\lambda'}_F$ lie in the same block. The first part increased strictly, so iterating this move reaches after finitely many steps a partition with no rim $e$-hook below the first row, which by the same abacus argument is $\lambda_\gamma$; hence every partition of $n$ with $e$-core $\gamma$ lies in the block of $W^{\lambda_\gamma}_F$. [F5, F6, step 1.2, construct, algebra]

3.1 All composition factors of $W^{\lambda}_F$ have core $C_e(\lambda)$. Let $L^{\nu}_F$ be a composition factor of $W^{\lambda}_F$. If $\nu=\lambda$ then $C_e(\nu)=C_e(\lambda)$ trivially. Otherwise $L^{\nu}_F$ is a composition factor of $M_\lambda$, since by [F5](a) one has $[W^{\lambda}_F]=[L^{\lambda}_F]+\sum_{i>0}[W^{\lambda}_F(i)]$; the class expansion of [F5](a) then gives a partition $\mu_1$ with $c_{\mu_1}\ne0$ and $[W^{\mu_1}_F:L^{\nu}_F]\ne0$, and $C_e(\mu_1)=C_e(\lambda)$ by step 2.1 and $c_{\mu_1}\ne0$. If $\nu\ne\mu_1$, repeat the argument with $\mu_1$ in place of $\lambda$: since $L^{\nu}_F\ne L^{\mu_1}_F$ is a composition factor of $W^{\mu_1}_F$, it is a factor of $M_{\mu_1}$, giving $\mu_2$ with nonzero coefficient in the sum formula for $\mu_1$ and $[W^{\mu_2}_F:L^{\nu}_F]\ne0$; here $\mu_2\lhd\mu_1$ strictly by [F5](b) and $C_e(\mu_2)=C_e(\mu_1)=C_e(\lambda)$ by step 2.1. Iterating, a strictly descending chain in the finite poset of partitions of $n$ is produced, so the process terminates at some $\mu_k$ for which no further step is possible, that is, for which $L^{\nu}_F=L^{\mu_k}_F$; hence $\nu=\mu_k$ and $C_e(\nu)=C_e(\mu_k)=C_e(\lambda)$. [F1, F5, step 2.1, algebra]

4.1 Necessity: same block forces the same core. Suppose that $W^{\lambda}_F$ and $W^{\mu}_F$ lie in the same block. Then the simple heads $L^{\lambda}_F$ and $L^{\mu}_F$ lie in that block, so by [F7] and [F1] there is a chain $\lambda=\nu_0,\nu_1,\dots,\nu_k=\mu$ such that consecutive labels share a Weyl module as a composition factor: for each $i$ there is $\sigma_i$ with $[W^{\sigma_i}_F:L^{\nu_i}_F]\ne0$ and $[W^{\sigma_i}_F:L^{\nu_{i+1}}_F]\ne0$. By step 3.1 applied to $W^{\sigma_i}_F$, both $C_e(\nu_i)=C_e(\sigma_i)$ and $C_e(\nu_{i+1})=C_e(\sigma_i)$, so $C_e(\nu_i)=C_e(\nu_{i+1})$ for every $i$, and transitivity gives $C_e(\lambda)=C_e(\mu)$. [F1, F7, step 3.1]

5.1 Blocks and their labels. By steps 4.1 and 2.2, for partitions $\lambda,\mu\vdash n$ with at most $d$ parts, $W^{\lambda}_F$ and $W^{\mu}_F$ are in the same block exactly when $C_e(\lambda)=C_e(\mu)$. Every block of $S_F(d,n)$ contains a simple module, hence a head $L^{\mu}_F$ of some Weyl module with $\mu\in\Lambda^{+}(d,n)$, so the blocks are exactly the nonempty classes $\{\mu:C_e(\mu)=\gamma\}$; these are indexed by the partitions $\gamma$ with $C_e(\gamma)=\gamma$, $|\gamma|\le n$ and $|\gamma|\equiv|n|\pmod e$, since $|\gamma|=n-ew$ for $w=(n-|\gamma|)/e\ge0$ along the rim-hook removals of [F6] and every such $\gamma$ occurs as $\lambda_\gamma$ in step 2.2. [F6, step 4.1, step 2.2]

6.1 The case $e=\infty$. If $e=\infty$, then by step 1.1 every valuation $\nu_\pi([h]_{\hat q})$ vanishes, so every coefficient in the sum formula of [F5](a) is zero; hence $[M_\lambda]=0$ and each positive layer of $W^{\lambda}_F$ is zero, so $W^{\lambda}_F(1)=\operatorname{rad}W^{\lambda}_F=0$ by [F5](a) and $W^{\lambda}_F=L^{\lambda}_F$ is simple. Then the decomposition matrix is the identity, so $C=D^{\top}D$ is the identity by [F1], and [F7] shows that distinct partitions lie in distinct blocks; moreover each simple $L^{\lambda}_F=W^{\lambda}_F$ is its own projective cover, so every simple $S_F(d,n)$-module is projective and the algebra is semisimple, and each $W^{\lambda}_F$ is its own block. This is the parenthetical case of the statement, and it also shows that no hook length is divisible by $e$ and every partition is its own $e$-core. [F1, F5, F7, step 1.1] ∎
