---
id: ex-normal-and-good-nodes-for-a-large-partition
kind: example
title: "Normal and good nodes for the partition (6,4,4,3,2)"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-module-radical-socle-head-and-loewy-series,
       def-residue-signature-normal-good-conormal-and-cogood-nodes,
       cor-socle-of-uncoloured-modular-restriction-is-the-sum-over-good-residues,
       thm-good-node-gives-the-simple-socle-and-head-of-residue-restriction]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 16
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jonathan Brundan, Modular Branching Rules and the Mullineux Map for Hecke Algebras of Type A, Proc. London Math. Soc. (3) 77 (1998) 551-581; complete 34-page author manuscript, §2.2-2.4 with the index sets B_{i,j}(lambda), C_{i,j}(lambda), the lattice order and Remark 2.4(II), Remark 2.7, Example 2.8 (printed p. 5) and Theorems 2.5-2.6 (printed pp. 4-5)"
      url: "https://pages.uoregon.edu/brundan/papers/quantum.pdf"
    - title: "Alexander Kleshchev, Representation Theory of Symmetric Groups and Related Hecke Algebras, Bull. Amer. Math. Soc. 47 (2010) 419-481, author arXiv version; §11.4 with Theorems 11.6-11.7, printed pp. 53-54 (the socle and the multiplicities used for the decomposability conclusions). Complete 66-page text, SHA-256 8685199608967fa7c479e4dd883990b716a6f708e71cf75f6ce4aba41c6f2cab"
      url: "https://arxiv.org/pdf/0909.4844"
---

## Example

Work Brundan's Example 2.8 (complete 34-page author manuscript, p. 5) in his
conventions: $\lambda=(6,4,4,3,2)$ is $\ell$-restricted for $\ell=3$ and
$\ell=4$, residues are $r-c\bmod\ell$ in the source's orientation (the
negative of the $c-r$ convention of this page,
[[def-residue-signature-normal-good-conormal-and-cogood-nodes]]),
$R(\lambda)=\{1,3,4,5\}$ is the set of removable rows, and for
$i\in R(\lambda)$ one compares $B_{i,5}(\lambda)\cap R(\lambda)$ with
$C_{i,5}(\lambda)\cap R(\lambda)$ in the lattice order $\downarrow$, where
$$B_{i,j}(\lambda)=\{k\in[i..j):\operatorname{res}_\ell(i,\lambda_i)= \operatorname{res}_\ell(k+1,\lambda_{k+1}+1)\},\qquad C_{i,j}(\lambda)=\{k\in(i..j):\operatorname{res}_\ell(i,\lambda_i)= \operatorname{res}_\ell(k,\lambda_k)\},$$
and $A\downarrow B$ means that there is an injection $\theta:A\to B$ with
$\theta(a)\le a$ for all $a$.

For $\ell=3$ the removable nodes have residues $1,2,1,0$ for
$i=1,3,4,5$ and
$$(B\cap R,C\cap R)=(\varnothing,\{4\}),\ (\{4\},\varnothing), (\varnothing,\varnothing),\ (\varnothing,\varnothing);$$
hence $R^{normal}(\lambda)=\{1,4,5\}$ and, since rows $4$ and $1$ share
residue $1$, $R^{good}(\lambda)=\{1,5\}$. For $\ell=4$ the residues are
$3,3,1,3$ and
$$(B\cap R,C\cap R)=(\varnothing,\{3,5\}),\ (\varnothing,\{5\}), (\varnothing,\varnothing),\ (\varnothing,\varnothing);$$
hence row $4$ is normal-refuted by $\{5\}\not\downarrow\varnothing$ and
$R^{normal}(\lambda)=\{1,3,5\}$, and since rows $1,3,5$ share residue $3$,
$R^{good}(\lambda)=\{1\}$. By the branching theorems the restriction of
$D^{\lambda}_{\mathrm M}$ to $H(r-1)$ is therefore decomposable for $\ell=3$ (socle
$D^{(5,4,4,3,2)}_{\mathrm M}\oplus D^{(6,4,4,3,1)}_{\mathrm M}$) and indecomposable for $\ell=4$
(socle $D^{(5,4,4,3,2)}_{\mathrm M}$).

## Facts & Assumptions

**Given:** The partition $\lambda=(6,4,4,3,2)$ of $r=19$, the characteristics $\ell=3$ and $\ell=4$, and Brundan's index sets and lattice order as displayed.

[F1] The source's definitions: $R(\lambda)=\{i:\lambda_i\ne\lambda_{i+1}\}$ is the set of removable rows, the node $(i,\lambda_i)$ has residue $i-\lambda_i\bmod\ell$, $R^{normal}(\lambda)=\{i\in R(\lambda):B_{i,n}(\lambda)\downarrow C_{i,n}(\lambda)\}$ with $n=5$, and $R^{good}(\lambda)=\{i\in R^{normal}(\lambda):$ no $j\in R^{normal}(\lambda)$ with $j<i$ and the same residue$\}$; there is at most one good row per residue (Brundan §2.2-2.4 and Remark 2.7, printed pp. 3-5). The translation to this page's conventions is the transposed-node dictionary of Remark 2.4(II) ([[def-residue-signature-normal-good-conormal-and-cogood-nodes]]).

[F2] The branching theorems: the socle of the restriction of $D^\lambda$ to $H(r-1)$ is $\bigoplus_{i\in R^{good}(\lambda)}D^{\lambda(i)}$, and distinct good rows have their socle summands in pairwise different blocks of $H(r-1)$ (Brundan Remark 2.7 and Theorem 2.6, printed pp. 4-5; [[cor-socle-of-uncoloured-modular-restriction-is-the-sum-over-good-residues]], [[thm-good-node-gives-the-simple-socle-and-head-of-residue-restriction]]).

[F3] The cell modules and simple modules are self-dual, the socle of a self-dual module of finite length equals the dual of its head, and a module whose socle is a single simple module with multiplicity one is indecomposable ([[def-module-radical-socle-head-and-loewy-series]]).

## Verification

**Proof technique:** direct.

1.1 Removable rows and residues. $\lambda=(6,4,4,3,2)$ has consecutive differences $2,0,1,1,2$, so $R(\lambda)=\{1,3,4,5\}$ and $\lambda$ is $\ell$-restricted for $\ell=3$ and $\ell=4$; the residues $i-\lambda_i$ are, modulo $3$, $1,2,1,0$ for $i=1,3,4,5$, and modulo $4$, $3,3,1,3$ for the same rows. [given, F1]

2.1 The index sets. For $\ell=3$: $B_{1,5}$ requires $k\in[1,5)$ with $k-\lambda_{k+1}\equiv1$: the values $k-\lambda_{k+1}$ for $k=1,2,3,4$ are $-3,-2,0,2\equiv0,1,0,2$, so $B_{1,5}=\{2\}$ and $B_{1,5}\cap R=\varnothing$; $C_{1,5}$ requires $k\in(1,5)$ with $k-\lambda_k\equiv1$: the values are $-2,-1,1,3\equiv1,2,1,0$, so $C_{1,5}=\{2,4\}$ and $C_{1,5}\cap R=\{4\}$. For $i=3$: $k-\lambda_{k+1}$ for $k=3,4$ are $0,2$, so $B_{3,5}=\{4\}$, $B_{3,5}\cap R=\{4\}$; $k-\lambda_k$ for $k=4,5$ are $1,3\equiv1,0$, so $C_{3,5}=\varnothing$. For $i=4$: $k=4$ gives $4-\lambda_5=2\ne1$ and $C_{4,5}=\varnothing$. For $i=5$ both sets are empty. This gives the four displayed pairs for $\ell=3$. For $\ell=4$: $B_{1,5}$ requires $k-\lambda_{k+1}\equiv3$: the values are $-3,-2,0,2\equiv1,2,0,2$, so $B_{1,5}=\varnothing$; $C_{1,5}$ requires $k-\lambda_k\equiv3$: values $2,3,1,3$ for $k=2,3,4,5$, so $C_{1,5}=\{3,5\}$ and $C_{1,5}\cap R=\{3,5\}$. For $i=3$: $B_{3,5}=\varnothing$ as the values $0,2$ are $\ne3$; $C_{3,5}$ requires $k-\lambda_k\equiv3$ for $k=4,5$: values $1,3$, so $C_{3,5}=\{5\}$ and $C_{3,5}\cap R=\{5\}$. For $i=4$: $k=4$ gives $4-\lambda_5=2\ne1$ and $5-\lambda_5=3\ne1$, so both sets are empty; for $i=5$ both are empty. This gives the four displayed pairs for $\ell=4$. [step 1.1, F1]

3.1 Lattice tests and the good rows. For $\ell=3$: $\varnothing\downarrow\{4\}$ and $\varnothing\downarrow\varnothing$ hold, while $\{4\}\downarrow\varnothing$ fails, so $R^{normal}=\{1,4,5\}$; the residues are $1,1,0$ for rows $1,4,5$, so the minimal normal row of residue $1$ is row $1$ and $R^{good}=\{1,5\}$. For $\ell=4$: $\varnothing\downarrow\{3,5\}$, $\varnothing\downarrow\{5\}$, $\varnothing\downarrow\varnothing$ hold, so $R^{normal}=\{1,3,5\}$, and with residues $3,3,3$ the minimal normal row is row $1$, so $R^{good}=\{1\}$. [step 2.1, F1]

4.1 $\ell=3$: decomposability. By [F2] the socle of $D^{\lambda}\downarrow_{H(r-1)}$ is the sum of the two simple modules $D^{\lambda(1)}=D^{(5,4,4,3,2)}$ and $D^{\lambda(5)}=D^{(6,4,4,3,1)}$ attached to the two good rows, and these two simples lie in pairwise different blocks of $H(r-1)$; a direct sum of modules in different blocks has more than one nonzero summand, so the restriction is decomposable. [step 3.1, F2]

4.2 $\ell=4$: indecomposability. By [F2] the socle of $D^{\lambda}\downarrow_{H(r-1)}$ is the single simple module $D^{\lambda(1)}=D^{(5,4,4,3,2)}$, occurring with multiplicity one; the restriction is self-dual by [F3], so its head is the dual of its socle, again the same simple module, and a module with simple socle occurring once is indecomposable, since a nontrivial decomposition would exhibit the socle as the direct sum of the socles of two nonzero summands. [step 3.1, F2, F3]

5.1 The example as a convention stress test. The computed tables show that the residue list alone does not determine normality: at $\ell=4$ row $4$ has the same residue as rows $1,3,5$ yet fails the lattice test $\{5\}\not\downarrow\varnothing$, so it is not normal; and good rows are the minimal normal rows per residue, not the removable rows whose residue occurs once. The two conclusions, decomposable at $\ell=3$ and indecomposable at $\ell=4$, follow from the socle theorem and the block separation recorded in [F2], as verified in steps 4.1 and 4.2; the $\ell=4$ socle label is $D^{(5,4,4,3,2)}=D^{\lambda(1)}$. [step 4.1, step 4.2, F1, F2] ∎
