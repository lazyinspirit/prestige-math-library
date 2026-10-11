---
id: prop-weight-zero-symmetric-group-blocks-are-defect-zero
kind: proposition
title: "Weight-zero symmetric-group blocks are defect zero"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 18
deps: [thm-nakayama-block-classification-for-symmetric-groups, thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads, prop-core-quotient-size-and-weight-formula, thm-symmetric-group-decomposition-matrix-is-dominance-unitriangular, thm-cartan-matrix-is-d-transpose-d, thm-defect-zero-blocks-are-simple-algebras, def-defect-group-and-numerical-defect-of-a-block, def-p-blocks-by-primitive-central-idempotents, def-e-core-e-quotient-and-e-weight, def-blocks-of-a-finite-dimensional-algebra-by-primitive-central-idempotents]
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
    - title: "J. L. Alperin, Local Representation Theory, Cambridge Studies in Advanced Mathematics 11, Chapters 1 and 4 (blocks, defect groups and the Cartan matrix)"
      url: "https://www.cambridge.org/core/books/local-representation-theory/44B0F0A0A9F0CFA2E1B5B30A8D0C5D3B"
      locator: "the block-theoretic statements quoted through the published library items (Weil's defect-zero criterion and the decomposition/Cartan identities); the combinatorial input is the p-core classification of this page"
    - title: "G. D. James, The Representation Theory of the Symmetric Groups, Lecture Notes in Mathematics 682, Springer 1978 (complete author-hosted scan, 161 pp.)"
      url: "https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf"
      locator: "Theorem 12.1 and Corollaries 12.2-12.3, printed pp. 42-43: dominance unitriangularity of the modular decomposition matrix of $S_n$"
---

## Statement

Let $k$ be a splitting field of characteristic $p>0$ and let $\lambda\vdash n$
be a partition of $p$-weight $w_p(\lambda)=0$, that is, a $p$-core
([[def-e-core-e-quotient-and-e-weight]]). Then the block $B$ of $k[S_n]$
containing $S^{\lambda}_k$
([[thm-nakayama-block-classification-for-symmetric-groups]]) contains exactly
one Specht label, namely $\lambda$; its decomposition matrix is the $1\times1$
matrix $(1)$, so $D^{\lambda}$ is both the unique simple and the unique
projective indecomposable module of $B$; its Cartan matrix is $(1)$; the
block algebra is a full matrix algebra over $k$; and $B$ has trivial defect
group, that is, defect zero in the fixed splitting modular system
([[def-defect-group-and-numerical-defect-of-a-block]]).

No choice principle is used.

## Facts & Assumptions

**Given:** A splitting field $k$ of characteristic $p>0$ for $S_n$ and all its
subgroups, an integer $n\ge0$, a partition $\lambda\vdash n$ with
$w_p(\lambda)=0$, and the block $B$ of $k[S_n]$ containing $S^{\lambda}_k$.

[F1] $w_p(\lambda)=(n-|C_p(\lambda)|)/p$, so $w_p(\lambda)=0$ is equivalent to
$C_p(\lambda)=\lambda$, and a $p$-core is $p$-regular
([[def-e-core-e-quotient-and-e-weight]],
[[prop-core-quotient-size-and-weight-formula]]). Hence $D^{\lambda}\ne0$ and
$S^{\lambda}_k$ has simple head $D^{\lambda}$, with $D^{\lambda}$ its unique
maximal quotient, so $S^{\lambda}_k$ is indecomposable
([[thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads]]).

[F2] Nakayama: two Specht modules of $k[S_n]$ lie in the same block if and only
if their labels have the same $p$-core
([[thm-nakayama-block-classification-for-symmetric-groups]]); the blocks are
indexed by the $p$-cores $\gamma$ with $|\gamma|\le n$,
$|\gamma|\equiv n\pmod p$. The simple $k[S_n]$-modules are exactly the
$D^{\mu}$ for the $p$-regular $\mu\vdash n$, pairwise non-isomorphic
([[thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads]]).

[F3] Block bookkeeping: the identity of $k[S_n]$ decomposes uniquely into
primitive central idempotents, every finite-dimensional module decomposes
along the blocks, and a simple module lies in exactly one block
([[def-p-blocks-by-primitive-central-idempotents]],
[[def-blocks-of-a-finite-dimensional-algebra-by-primitive-central-idempotents]]);
in particular an indecomposable finite-dimensional module lies in a single
block.

[F4] Dominance unitriangularity: $d_{\mu\mu}=1$ and $d_{\mu\nu}\ne0$ implies
$\mu\unrhd\nu$ for the modular decomposition numbers
$d_{\mu\nu}=[S^{\mu}_k:D^{\nu}]$
([[thm-symmetric-group-decomposition-matrix-is-dominance-unitriangular]]).

[F5] For a block $B$ with decomposition matrix $D_B$ and Cartan matrix $C_B$
one has $C_B=D_B^{\mathsf T}D_B$
([[thm-cartan-matrix-is-d-transpose-d]]); the $(1,1)$-entry of $C_B$ is the
multiplicity of the simple module in its projective cover
([[def-defect-group-and-numerical-defect-of-a-block]]).

[F6] Defect-zero criterion: over the splitting residue field, for a block $B$
the following are equivalent: the defect group of $B$ is trivial; $B$ is a
full matrix algebra over $k$; $B$ has a projective simple module; in that case
there is exactly one simple module and it is projective
([[thm-defect-zero-blocks-are-simple-algebras]]).

## Proof


**Proof technique:** direct.

1.1 Bookkeeping for the labels of $B$. Let $\nu\vdash n$ be a $p$-regular partition with block $B(\nu)=B$; by [F1] and [F2] this is equivalent to $C_p(\nu)=C_p(\lambda)=\lambda$, and since $|\nu|=n=|\lambda|$ this forces $\nu=\lambda$. Hence the only $p$-regular label in $B$ is $\lambda$, and by [F2] the only simple module in $B$ is $D^{\lambda}$. Since $S^{\lambda}_k$ is indecomposable with head $D^{\lambda}$ by [F1] and lies in $B$ by hypothesis, the decomposition matrix of $B$ is the $1\times1$ matrix with entry $d_{\lambda\lambda}=[S^{\lambda}_k:D^{\lambda}]=1$, which holds both because $D^{\lambda}$ is the simple head of $S^{\lambda}_k$ and, independently, by dominance unitriangularity [F4]. [F1, F2, F3, F4]

2.1 The Cartan matrix and the projective cover. By [F5] applied to the block $B$ the Cartan matrix of $B$ is $C_B=D_B^{\mathsf T}D_B=(1)$, so the projective cover $P^{\lambda}$ of $D^{\lambda}$ has $D^{\lambda}$ as its only composition factor, with multiplicity one. A nonzero module of length one is simple, so $P^{\lambda}\cong D^{\lambda}$: the block $B$ has a projective simple module. [F1, F5, step 1.1, algebra]

3.1 Defect zero and the matrix algebra. By step 2.1 the projective indecomposable $P^{\lambda}$ equals the simple $D^{\lambda}$, and it is the unique projective indecomposable of $B$ because the simple modules of $B$ are in bijection with its projective indecomposables; so $D^{\lambda}$ is both the unique simple and the unique projective indecomposable of $B$. The defect-zero criterion [F6] now gives that $B$ is a full matrix algebra over $k$ and that the defect group of $B$ is trivial, that is, $B$ has defect zero in the fixed splitting modular system. [F5, F6, step 1.1, step 2.1]

4.1 Steps 1.1, 2.1 and 3.1 give all the assertions: the single Specht label $\lambda$, the decomposition matrix $(1)$, the unique simple and projective indecomposable $D^{\lambda}$, the Cartan matrix $(1)$, the full matrix algebra structure and defect zero. [step 1.1, step 2.1, step 3.1] ∎
