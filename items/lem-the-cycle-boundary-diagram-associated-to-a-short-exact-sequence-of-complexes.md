---
id: lem-the-cycle-boundary-diagram-associated-to-a-short-exact-sequence-of-complexes
kind: lemma
title: "The cycle-boundary diagram associated to a short exact sequence of complexes"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-short-exact-sequence-of-complexes,
       def-cycle-and-boundary-subobjects-of-a-complex,
       thm-the-kernel-row-and-cokernel-row-of-a-morphism-of-short-exact-sequences-are-exact-at-two-nodes-each]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
    - title: "The Stacks Project, Section 12.13: Complexes"
      url: "https://stacks.math.columbia.edu/tag/010V"
pipeline_run: frontier-27
---

## Statement

Let
$$0\to A_\bullet\xrightarrow{i}B_\bullet\xrightarrow{p}C_\bullet\to0$$
be a short exact sequence of complexes in an abelian category, and fix
$n\in\mathbb Z$. Write
$$\overline A_n:=A_n/B_n(A),\quad \overline B_n:=B_n/B_n(B),\quad \overline C_n:=C_n/B_n(C).$$
Then the differentials induce a commutative diagram
$$\begin{matrix}\overline A_n&\to&\overline B_n&\to&\overline C_n&\to&0\\ \downarrow&&\downarrow&&\downarrow&&\\ 0&\to&Z_{n-1}(A)&\to&Z_{n-1}(B)&\to&Z_{n-1}(C)\end{matrix}$$
in which the top row is exact at $\overline B_n$ and $\overline C_n$, and the
bottom row is exact at $Z_{n-1}(A)$ and $Z_{n-1}(B)$.

## Facts & Assumptions

**Given:** The short exact sequence of complexes in the statement and an integer $n$.

[L1] A short exact sequence of complexes is exact in each degree in the ambient abelian category ([[def-short-exact-sequence-of-complexes]]).

[L2] Cycles are kernels of outgoing differentials and boundaries are images of incoming differentials ([[def-cycle-and-boundary-subobjects-of-a-complex]]).

[L3] For a morphism of short exact sequences, the induced kernel row is exact at its first two nodes and the induced cokernel row is exact at its last two nodes ([[thm-the-kernel-row-and-cokernel-row-of-a-morphism-of-short-exact-sequences-are-exact-at-two-nodes-each]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L3] to the commutative square in degree $n+1$. Using [L2], its cokernel row is exactly $$\overline A_n\to\overline B_n\to\overline C_n\to0,$$ so the top row is exact at $\overline B_n$ and $\overline C_n$. [L1, L2, L3, given, construct]

2.1 Apply [L3] to the commutative square in degree $n-1$. By [L2], the resulting kernel row is $$0\to Z_{n-1}(A)\to Z_{n-1}(B)\to Z_{n-1}(C),$$ exact at $Z_{n-1}(A)$ and $Z_{n-1}(B)$. The two rows are connected by the differentials, and the chain-map equalities from [L1] make the diagram commutative. [L1, L2, L3, step 1.1, construct] ∎
