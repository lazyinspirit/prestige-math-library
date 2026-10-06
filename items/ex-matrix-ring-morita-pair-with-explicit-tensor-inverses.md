---
id: ex-matrix-ring-morita-pair-with-explicit-tensor-inverses
kind: example
title: "The matrix-ring Morita pair with explicit tensor inverses"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 7
justified_by: []
aliases: []
deps: [thm-morita-equivalence-is-invertibility-of-a-bimodule, def-bimodule, cor-square-matrices-form-a-ring, thm-matrix-multiplication-laws, def-matrices-over-a-commutative-ring, def-matrix-units, lem-matrix-unit-multiplication, thm-universal-property-of-module-tensor-products, prop-elementary-tensor-formulas-descend-exactly-when-balanced, def-field, def-module-homomorphism-kernel-image-and-cokernel]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "W. Crawley-Boevey, Noncommutative Algebra, §3.12, Examples (i)-(ii): R is Morita equivalent to M_n(R); idempotents Re, eR"
      url: "https://www.math.uni-bielefeld.de/~wcrawley/1617noncommalg/Noncommutative%20algebra.pdf"
    - title: "nLab, Morita equivalence, Classical Morita theorem (bimodule inverses)"
      url: "https://ncatlab.org/nlab/show/Morita+equivalence"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Example

Let $k$ be a field and $n\ge1$, let $B=M_n(k)$ be the ring of $n\times n$ matrices over $k$ ([[def-matrices-over-a-commutative-ring]], [[thm-matrix-multiplication-laws]], [[cor-square-matrices-form-a-ring]]), relabel the row and column indices as $1,\ldots,n$ and let $e=E_{11}$, and put $A=eBe=k e\cong k$. Then $M=Be$ is a $(B,A)$-bimodule, $N=eB$ is an $(A,B)$-bimodule, and the multiplication maps
$$\mu_N:\;eB\otimes_BBe\longrightarrow eBe,\qquad x\otimes y\longmapsto xy,$$
$$\mu_M:\;Be\otimes_AeB\longrightarrow B,\qquad m\otimes n\longmapsto mn,$$
are isomorphisms of bimodules, with inverses $a\mapsto e\otimes a$ and $E_{ij}\mapsto E_{i1}\otimes E_{1j}$ extended $k$-linearly. Hence $k$ and $M_n(k)$ are Morita equivalent, realized by the inverse pair of bimodules $(M,N)$ ([[thm-morita-equivalence-is-invertibility-of-a-bimodule]]). No choice is used.

## Facts & Assumptions

**Given:** A field $k$, an integer $n\ge1$, $B=M_n(k)$ with row and column indices relabelled $1,\ldots,n$ and matrix units $E_{ij}$ ([[def-matrix-units]]), $e=E_{11}$, and $A=eBe$.

[F1] $B$ is a unital ring under entrywise addition and matrix multiplication, matrix multiplication is associative and bilinear over $k$, and $E_{ij}E_{kl}=\delta_{jk}E_{i\ell}$ ([[cor-square-matrices-form-a-ring]], [[thm-matrix-multiplication-laws]], [[lem-matrix-unit-multiplication]], [[def-matrices-over-a-commutative-ring]]).

[F2] In a $(B,A)$-bimodule the left $B$-action and right $A$-action commute, and $A=k e$ acts on $Be$ by scalar multiplication ([[def-bimodule]]).

[F3] A $k$-bilinear map that is balanced descends to a unique homomorphism out of the tensor product, and an elementary-tensor prescription descends exactly when its pairing is balanced ([[thm-universal-property-of-module-tensor-products]], [[prop-elementary-tensor-formulas-descend-exactly-when-balanced]], [[def-field]]).

[F4] Morita equivalent rings are exactly the pairs admitting bimodules ${}_BM_A$, ${}_AN_B$ with bimodule isomorphisms $N\otimes_BM\cong{}_AA_A$ and $M\otimes_AN\cong{}_BB_B$ ([[thm-morita-equivalence-is-invertibility-of-a-bimodule]]).

## Verification

**Proof technique:** direct.

1.1 (The four subspaces.) Since $bE_{11}$ is the matrix whose first column is the first column of $b$ and whose other columns vanish, $Be=\{\sum_i a_iE_{i1}:a_i\in k\}$; dually $eB=\{\sum_jc_jE_{1j}:c_j\in k\}$, and $eBe=kE_{11}$ with $e=E_{11}$ as identity, so $A=kE_{11}\cong k$ as a field, the isomorphism being $\lambda\mapsto\lambda e$. The products land where claimed because $E_{1j}E_{i1}=\delta_{ji}E_{11}$ and $E_{i1}E_{1j}=E_{ij}$ by [F1]. [F1, given, algebra]

2.1 (The bimodule structures.) Left multiplication by $B$ and right multiplication by $A\subseteq B$ make $M=Be$ a $(B,A)$-bimodule: both actions are $k$-linear, and associativity of matrix multiplication gives $b(m a)=(bm)a$ for $b\in B$, $m\in Be$, $a\in A$, with $A=k e$ acting by scalar multiplication by [F2]. Symmetrically $N=eB$ is an $(A,B)$-bimodule. [F1, F2, step 1.1, given]

3.1 ($\mu_N$.) The pairing $(x,y)\mapsto xy$ from $eB\times Be$ to $eBe$ is $k$-bilinear and $B$-balanced: $((xb)y)=x(by)$ by associativity for $b\in B$; by [F3] it descends to a homomorphism $\mu_N$ with $\mu_N(x\otimes y)=xy$, which is a map of $(A,A)$-bimodules because both the product and the tensor actions are induced from the two factors. The map $eBe\to eB\otimes_BBe$, $a\mapsto e\otimes a$, is well defined, and for $x\in eB$, $y\in Be$ one has $x=ex$ and hence $x\otimes y=(ex)\otimes y=e\otimes(xy)$ by $B$-balance, so the two composites are the identities: $\mu_N(e\otimes a)=a$ for $a\in eBe$ and $e\otimes xy=x\otimes y$. Hence $\mu_N$ is an isomorphism of $(A,A)$-bimodules. [F1, F3, step 1.1, step 2.1, given, algebra]

3.2 ($\mu_M$.) The pairing $(m,n)\mapsto mn$ from $Be\times eB$ to $B$ is $k$-bilinear and balanced over $A=kE_{11}$: $(mE_{11})n=m(E_{11}n)$ is a case of associativity, and scalar balancing holds because $A=k$ acts as scalars by [F2]. By [F3] it descends to a homomorphism $\mu_M$ with $\mu_M(m\otimes n)=mn$, a map of $(B,B)$-bimodules. Define the $k$-linear inverse on the basis $\{E_{ij}\}$ by $E_{ij}\mapsto E_{i1}\otimes E_{1j}$; this is well defined because the matrix units form a $k$-basis of $B$, and $\mu_M(E_{i1}\otimes E_{1j})=E_{i1}E_{1j}=E_{ij}$. Conversely, writing $m=\sum_ia_iE_{i1}$ and $n=\sum_jc_jE_{1j}$ one has $m\otimes n=\sum_{i,j}a_ic_jE_{i1}\otimes E_{1j}$ and $mn=\sum_{i,j}a_ic_jE_{ij}$, so the two composites are the identities on a spanning set and hence everywhere. Thus $\mu_M$ is an isomorphism of $(B,B)$-bimodules. [F1, F3, step 2.1, given, algebra]

4.1 (Conclusion.) Step 3.1 gives the bimodule isomorphism $N\otimes_BM\cong eBe=A$ and step 3.2 gives $M\otimes_AN\cong B$, so by [F4] the rings $A\cong k$ and $B=M_n(k)$ are Morita equivalent with inverse pair of bimodules $(M,N)$; the explicit inverses are $a\mapsto e\otimes a$ and $E_{ij}\mapsto E_{i1}\otimes E_{1j}$ extended $k$-linearly, and the only elements used are the fixed matrix units, so no choice is used. [F4, step 3.1, step 3.2] ∎
