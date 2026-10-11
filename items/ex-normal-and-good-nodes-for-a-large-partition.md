---
id: ex-normal-and-good-nodes-for-a-large-partition
kind: example
title: "Normal and good nodes for the partition (6,4,4,3,2)"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-general-hecke-residue-branching-endpoints-from-normalized-schur-cells,
       lem-q-schur-central-hecke-jm-scalars-give-residue-separation,
       thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell,
       def-quantum-characteristic-of-an-invertible-hecke-parameter,
       def-generic-type-a-hecke-algebra,
       def-module-radical-socle-head-and-loewy-series,
       def-residue-signature-normal-good-conormal-and-cogood-nodes,
       cor-socle-of-uncoloured-modular-restriction-is-the-sum-over-good-residues,
       thm-good-node-gives-the-simple-socle-and-head-of-residue-restriction]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 20
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

Let $F$ be a field and $q\in F^\times$, and use the Hecke algebra
$H(r)$ with $(T_j-q)(T_j+1)=0$ ([[def-generic-type-a-hecke-algebra]]).
Here $\ell=e(F,q)$ is its quantum characteristic
([[def-quantum-characteristic-of-an-invertible-hecke-parameter]]), taken
in turn to be $3$ or $4$. The case $\ell=4$ means a parameter of order $4$
and is not a field of characteristic $4$; both cases occur over $F=\mathbb C$
with $q$ a primitive root of the specified order. Use Brundan's restricted
DJ labels: $S^\lambda$ here denotes the ordinary right Specht module
labelled by $\lambda'$ and $D^\lambda$ its simple head, as in his §2.1.
Right modules may be carried to left modules through the Hecke
anti-involution fixing the generators; this preserves socles and direct
sum decompositions. These source labels must not be silently identified
with the same-shape Murphy labels of the group-theoretic suppliers.

Work Brundan's Example 2.8 (complete 34-page author manuscript, p. 5) in his
conventions: $\lambda=(6,4,4,3,2)$, padded by $\lambda_6=0$ with $n=6$, is $\ell$-restricted for $\ell=3$ and
$\ell=4$, residues are $r-c\bmod\ell$ in the source's orientation (the
negative of the $c-r$ convention of this page,
[[def-residue-signature-normal-good-conormal-and-cogood-nodes]]),
$R(\lambda)=\{1,3,4,5\}$ is the set of removable rows, and for
$i\in R(\lambda)$ one compares $B_{i,6}(\lambda)\cap R(\lambda)$ with
$C_{i,6}(\lambda)\cap R(\lambda)$ in the lattice order $\downarrow$, where
$$B_{i,j}(\lambda)=\{k\in[i..j):\operatorname{res}_\ell(i,\lambda_i)= \operatorname{res}_\ell(k+1,\lambda_{k+1}+1)\},\qquad C_{i,j}(\lambda)=\{k\in(i..j):\operatorname{res}_\ell(i,\lambda_i)= \operatorname{res}_\ell(k,\lambda_k)\},$$
and $A\downarrow B$ means that there is an injection $\theta:A\to B$ with
$\theta(a)\le a$ for all $a$.

For $\ell=3$ the removable nodes have residues $1,2,1,0$ for
$i=1,3,4,5$ and
$$(B\cap R,C\cap R)=(\varnothing,\{4\}),\ (\{4,5\},\varnothing), (\varnothing,\varnothing),\ (\varnothing,\varnothing);$$
hence $R^{normal}(\lambda)=\{1,4,5\}$ and, since rows $4$ and $1$ share
residue $1$, $R^{good}(\lambda)=\{1,5\}$. For $\ell=4$ the residues are
$3,3,1,3$ and
$$(B\cap R,C\cap R)=(\varnothing,\{3,5\}),\ (\varnothing,\{5\}), (\{5\},\varnothing),\ (\varnothing,\varnothing);$$
hence row $4$ is normal-refuted by $\{5\}\not\downarrow\varnothing$ and
$R^{normal}(\lambda)=\{1,3,5\}$, and since rows $1,3,5$ share residue $3$,
$R^{good}(\lambda)=\{1\}$. By the branching theorems the restriction of
$D^{\lambda}$ to $H(r-1)$ is therefore decomposable for $\ell=3$ (socle
$D^{(5,4,4,3,2)}\oplus D^{(6,4,4,3,1)}$) and indecomposable for $\ell=4$
(socle $D^{(5,4,4,3,2)}$).

## Facts & Assumptions

**Given:** The partition $\lambda=(6,4,4,3,2)$ of $r=19$, the field and invertible Hecke parameters with quantum characteristics $\ell=3$ and $\ell=4$, and Brundan's index sets and lattice order as displayed.

[F1] The source's definitions: $R(\lambda)=\{i:\lambda_i\ne\lambda_{i+1}\}$ is the set of removable rows, the node $(i,\lambda_i)$ has residue $i-\lambda_i\bmod\ell$, $R^{normal}(\lambda)=\{i\in R(\lambda):B_{i,n}(\lambda)\downarrow C_{i,n}(\lambda)\}$ with $n=6$, and $R^{good}(\lambda)=\{i\in R^{normal}(\lambda):$ no $j\in R^{normal}(\lambda)$ with $j<i$ and the same residue$\}$; there is at most one good row per residue (Brundan §2.2-2.4 and Remark 2.7, printed pp. 3-5). These are this page's normal and good nodes on the same partition, with residue names negated; Remark 2.4(II) instead compares Brundan's convention with Kleshchev's older convention on the transpose ([[def-residue-signature-normal-good-conormal-and-cogood-nodes]]).

[F2] The actual general-Hecke endpoint [[lem-general-hecke-residue-branching-endpoints-from-normalized-schur-cells]] gives the multiplicity-free good-deletion socle for Murphy restricted labels. Brundan's source-labelled simple here is $D^{\lambda}_{\mathrm{source}}\cong D_{\mathrm M}(\lambda)^\theta$, where $\theta(T_j)=q-1-T_j$: this is the actual unit-scaled ordinary module/form dictionary applied at ordinary shape $\lambda'$ ([[thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell]]). The automorphism respects the tower, so twisting both sides transfers the socle and all direct-sum conclusions without renaming a Murphy simple as an untwisted source simple. Distinct good-deletion source simples are separated by the central operator $\theta(\sum_{a=1}^{r-1}L_a)$: on $D_{\mathrm M}(\mu)^\theta$ its scalar is the actual Murphy scalar $\sum_{A\in[\mu]}[c(A)]_q$ of [[lem-q-schur-central-hecke-jm-scalars-give-residue-separation]]. For two deletions of different residues their scalar difference is the difference of their distinct q-contents, hence nonzero. Polynomial primary projectors in this central operator separate the full restricted module, not merely its socle. This proves the required separation without a sufficient same-content block-classification premise.

[F3] A nonzero finite-dimensional module has nonzero socle: choose a nonzero submodule of least positive dimension. Thus a module with simple socle is indecomposable, because the socle of a direct sum is the direct sum of the summand socles ([[def-module-radical-socle-head-and-loewy-series]]). No self-duality of cell modules is assumed.

## Verification

**Proof technique:** direct.

1.1 Removable rows and residues. $\lambda=(6,4,4,3,2)$ has consecutive differences $2,0,1,1,2$, so $R(\lambda)=\{1,3,4,5\}$ and $\lambda$ is $\ell$-restricted for $\ell=3$ and $\ell=4$; the residues $i-\lambda_i$ are, modulo $3$, $1,2,1,0$ for $i=1,3,4,5$, and modulo $4$, $3,3,1,3$ for the same rows. [given, F1]

2.1 Pad by $\lambda_6=0$. For $k=1,\ldots,5$, the integers $k-\lambda_{k+1}$ are $(-3,-2,0,2,5)$ and $k-\lambda_k$ are $(-5,-2,-1,1,3)$. To compute $B_{i,6}$ use indices $i\le k<6$ with the first integer congruent to $i-\lambda_i$; for $C_{i,6}$ use $i<k<6$ with the second integer congruent to $i-\lambda_i$, then intersect with $R=\{1,3,4,5\}$. For $i=1,3,4,5$, respectively, this gives $(B\cap R,C\cap R)=(\varnothing,\{4\}),(\{4,5\},\varnothing),(\varnothing,\varnothing),(\varnothing,\varnothing)$ modulo $3$, and $(\varnothing,\{3,5\}),(\varnothing,\{5\}),(\{5\},\varnothing),(\varnothing,\varnothing)$ modulo $4$. These are exactly the corrected displayed pairs. [step 1.1, F1]

3.1 For $\ell=3$, rows $1,4,5$ pass the lattice test: their demand sets are empty. Row $3$ fails because $\{4,5\}\not\downarrow\varnothing$. Hence $R^{normal}=\{1,4,5\}$, with residues $1,1,0$; taking the least normal row in each residue gives $R^{good}=\{1,5\}$. For $\ell=4$, rows $1,3,5$ pass, while row $4$ fails because $\{5\}\not\downarrow\varnothing$. The normal rows all have residue $3$, so $R^{good}=\{1\}$. [step 1.1, step 2.1, F1]

4.1 $\ell=3$: decomposability. By [F2] the actual source-labelled restriction $M=D^\lambda\downarrow_{H(r-1)}$ has the two simple socle factors $D^{\lambda(1)}=D^{(5,4,4,3,2)}$ and $D^{\lambda(5)}=D^{(6,4,4,3,1)}$. Their removed Murphy node contents are $5$ and $-3$, of residues $2$ and $0$ modulo $3$, so [F2]'s central operator has distinct scalars on them. Its minimal polynomial on $M$ has distinct linear factors at those two scalars; the polynomial CRT produces a central primary projector $b$ selecting the first and annihilating the second (other factors are included in $1-b$). Thus $M=bM\oplus(1-b)M$ is a sum of submodules and both are nonzero because they contain the respective simple socle factors. This proves decomposability by actual full-module projections. [step 3.1, F2]

4.2 $\ell=4$: indecomposability. By the proved branching input [F2], the socle of $D^{\lambda}\downarrow_{H(r-1)}$ is the single simple module $D^{\lambda(1)}=D^{(5,4,4,3,2)}$. By [F3] this makes the restriction indecomposable: a decomposition into two nonzero modules would give two nonzero summand socles. No cell-module self-duality is used. [step 3.1, F2, F3]

5.1 At $\ell=4$, rows $1,3,5$ have residue $3$ and are all normal, whereas row $4$ has residue $1$ and fails $\{5\}\downarrow\varnothing$. At $\ell=3$, both removable rows of residue $1$ are normal. Thus these tables do not exhibit same-residue removable nodes of different normality; they do show that good rows are the least normal rows of each residue, rather than rows whose residue occurs once. The branching conclusions in steps 4.1–4.2 use the actual general-Hecke supplier and source-label transport [F2], with $\ell=4$ socle label $D^{(5,4,4,3,2)}$. [step 1.1, step 2.1, step 3.1, step 4.1, step 4.2, F2] ∎

The general-Hecke input is the actual constructed endpoint supplier in [F2], including quantum characteristic four. The source's negative residue orientation affects color names but leaves residue equality and the selected row unchanged; the actual theta-twist dictionary transfers the displayed module labels and decomposability conclusions. The finite tables verify the concrete signature calculation; the independent endpoint proof supplies its module-theoretic meaning.
