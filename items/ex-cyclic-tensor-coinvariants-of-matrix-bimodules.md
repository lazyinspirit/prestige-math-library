---
id: ex-cyclic-tensor-coinvariants-of-matrix-bimodules
kind: example
title: "Matrix-unit rotation for a k–Mat_n(k) Morita pair"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - lem-double-bar-comparison-for-cyclic-bimodule-tensor-products
  - thm-derived-cyclicity-of-hochschild-hyperhomology
  - prop-hochschild-degree-zero-is-bimodule-coinvariants
  - def-matrix-units
  - lem-matrix-unit-multiplication
  - def-trace-of-a-square-matrix
  - def-axiom-of-choice
  - def-matrix-space
  - thm-matrix-multiplication-laws
  - def-matrix-product-and-identity-matrix
  - thm-trace-of-ab-equals-trace-of-ba
  - prop-trace-is-linear
  - def-generated-cyclic-finitely-generated-and-free-modules
  - thm-free-modules-are-projective-with-choice-boundary
  - thm-a-direct-summand-of-a-projective-is-projective
  - def-algebra-over-a-commutative-ring
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
sources:
  references:
    - title: "Beliakova–Putyra–Wehrli, Quantum Link Homology via Trace Functor I, §3.8.4, printed pp.37–39"
      url: "https://arxiv.org/pdf/1605.03523"
      locator: "Equations (3.34) and (3.39): the cyclic twist $[n'\\otimes n]\\mapsto[n\\otimes n']$ realizing the trace cyclic invariance, here specialized to a Morita pair."
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 9, §9.1, printed pp.300–304"
      url: "https://math.mit.edu/~hrm/palestine/weibel/09-hochschild_and_cyclic_homology.pdf"
      locator: "§9.1.1: $HH_0(A,M)=M/[A,M]$."
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 9, §§9.5.1–9.5.4, printed pp.326–327"
      url: "https://math.mit.edu/~hrm/palestine/weibel/09-hochschild_and_cyclic_homology.pdf"
      locator: "Definition 9.5.1 and Proposition 9.5.2 give the row/column matrix-ring Morita pair and multiplication maps; Lemma 9.5.4 gives finite projectivity. The example verifies the maps and right-module splitting explicitly."
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 9, Definition 9.5.7 and Corollary 9.5.8, printed pp.329–330"
      url: "https://math.mit.edu/~hrm/palestine/weibel/09-hochschild_and_cyclic_homology.pdf"
      locator: "The trace map on matrix-valued Hochschild chains and its role in the Morita isomorphism; this example checks the degree-zero matrix-unit case directly."
verification:
  audited: 2026-10-02
  precheck: n/a
---

## Example

Assume the Axiom of Choice (AC). Fix a field $k$ and an integer $n\geq2$, and
let
$$A:=k,\qquad B:=M_n(k),\qquad M:=k^{1\times n},\qquad N:=k^{n\times1},$$
where $M$ is the space of row vectors, on which $B$ acts on the right by matrix
multiplication, and $N$ is the space of column vectors, on which $B$ acts on the
left by matrix multiplication
([[def-matrix-space]], [[def-matrix-product-and-identity-matrix]],
[[thm-matrix-multiplication-laws]]). Thus $M$ is a $(k,B)$-bimodule and $N$ is a
$(B,k)$-bimodule, both finite dimensional over $k\;$; $M$ is finite projective
as a right $B$-module, because $B\cong M^{n}$ as right $B$-modules via the rows,
and $N$ is the free right $k$-module of rank $n$
([[def-generated-cyclic-finitely-generated-and-free-modules]]).

Use the index set $\{0,\ldots,n-1\}$ of [[def-matrix-space]]. Write $e_0,\ldots,e_{n-1}$ for the standard row basis of $M$ and $e_0^{\mathsf T},\ldots,e_{n-1}^{\mathsf T}$ for the standard column basis of $N$, so that the row-column product is $e_ie_j^{\mathsf T}=\delta_{ij}$, while
$e_i^{\mathsf T}e_j=E_{ij}$ is the matrix unit. Then:

1. Matrix multiplication identifies $M\otimes_BN$ with $k$, by
   $e_i\otimes e_j^{\mathsf T}\mapsto e_ie_j^{\mathsf T}=\delta_{ij}$.
2. Matrix multiplication identifies $N\otimes_kM$ with $B$, by
   $e_j^{\mathsf T}\otimes e_i\mapsto e_j^{\mathsf T}e_i=E_{ji}$.
3. The cyclic rotation sends the class of $e_i\otimes e_j^{\mathsf T}$ to the
   class of $e_j^{\mathsf T}\otimes e_i$. Under the multiplication
   identification $N\otimes_kM\cong B$ from (2), this class maps to
   $e_j^{\mathsf T}e_i=E_{ji}$, whose trace is
   $\operatorname{tr}(E_{ji})=\delta_{ij}$, matching the scalar
   $e_ie_j^{\mathsf T}=\delta_{ij}$ under the identification of (1).
4. Consequently the rotation identifies $HH_0(k,k)\cong k$ with $HH_0(B,B)$
   through the canonical identifications $HH_0(k,k)=k/[k,k]=k$ and
   $HH_0(B,B)=B/[B,B]\cong k$, the latter induced by the trace; and by the
   general derived-cyclicity theorem the higher Hochschild groups agree as well.

## Facts & Assumptions

**Given:** AC, a field $k$, an integer $n\geq2$, the algebras $A=k$ and $B=M_n(k)$, the row space $M=k^{1\times n}$ as a $(k,B)$-bimodule, and the column space $N=k^{n\times1}$ as a $(B,k)$-bimodule.

[F1] For $0\leq i,j<n$, the matrix unit $E_{ij}$ has a single $1$ in entry $(i,j)$ and zeros elsewhere, and $E_{ij}E_{rs}=\delta_{jr}E_{is}$ ([[def-matrix-units]], [[lem-matrix-unit-multiplication]]).

[F2] The trace of a square matrix is the sum of its diagonal entries, is $k$-linear, and satisfies $\operatorname{tr}(XY)=\operatorname{tr}(YX)$ ([[def-trace-of-a-square-matrix]], [[prop-trace-is-linear]], [[thm-trace-of-ab-equals-trace-of-ba]]).

[F3] $M_n(k)$ is a $k$-vector space with matrix multiplication, hence a unital associative $k$-algebra, and $k^{1\times n}$ with $k^{n\times1}$ carry the usual right and left matrix actions ([[def-matrix-space]], [[thm-matrix-multiplication-laws]], [[def-algebra-over-a-commutative-ring]]).

[F4] Assume AC. For a fixed $(A,B)$-bimodule $M'$ finite projective as a right $B$-module and a fixed $(B,A)$-bimodule $N'$ finite projective as a right $A$-module, the cyclic rotation gives a natural zigzag of chain-homotopy equivalences $C_\bullet(A,M'\otimes_BN')\simeq C_\bullet(B,N'\otimes_AM')$; in particular $HH_0(A,M'\otimes_BN')\cong HH_0(B,N'\otimes_AM')$, and on bar degree zero the rotation is the map $[m\otimes n]\mapsto[n\otimes m]$ ([[lem-double-bar-comparison-for-cyclic-bimodule-tensor-products]]).

[F5] Assume AC. For a bounded complex $M$ of graded $(A,B)$-bimodules termwise finite projective as right $B$-modules and a bounded complex $N$ of graded $(B,A)$-bimodules termwise finite projective as right $A$-modules, there are natural isomorphisms $\mathrm{HH}^{\mathrm{hyper},p}(A,M\otimes_B^{\mathbf L}N)\cong\mathrm{HH}^{\mathrm{hyper},p}(B,N\otimes_A^{\mathbf L}M)$ realized by the cyclic rotation ([[thm-derived-cyclicity-of-hochschild-hyperhomology]]).

[F6] $HH_0(A,C)\cong C/D(A,C)$ with $D(A,C)=\operatorname{span}_k\{ac-ca\}$ for any $k$-central bimodule $C$; the identification is induced by the identity on $C$ ([[prop-hochschild-degree-zero-is-bimodule-coinvariants]]).

[F7] A module with a finite generating set is finitely generated, and a module with a basis is free ([[def-generated-cyclic-finitely-generated-and-free-modules]]).

[F8] Finite-rank free modules are projective without AC ([[thm-free-modules-are-projective-with-choice-boundary]]), and a direct summand of a projective module is projective ([[thm-a-direct-summand-of-a-projective-is-projective]]).

## Proof

**Proof technique:** direct.

1.1 The row space $M$ is finitely generated by its standard row basis. Let $\pi:B\to M$ take the first row and define $\sigma:M\to B$ by $\sigma(v)=e_0^{\mathsf T}v$, the matrix whose first row is $v$ and whose other rows are zero. Both maps are right $B$-linear, and $\pi\sigma(v)=v$. Thus $M$ is a direct summand of the free right $B$-module $B$, so it is finite projective. The column space $N$ is free of rank $n$ as a right $k$-module. [F3, F7, F8, given, construct, algebra]

1.2 The row-column pairing $(x,y)\mapsto xy$ is bilinear and balanced over $B$, since $(xb)y=x(by)$ by associativity. It induces $\mu:M\otimes_BN\to k$ with $\mu(e_i\otimes e_j^{\mathsf T})=\delta_{ij}$. The balance relations give, for every $i,j$, $e_i\otimes e_j^{\mathsf T}=e_0E_{0i}\otimes e_j^{\mathsf T}=e_0\otimes E_{0i}e_j^{\mathsf T}=\delta_{ij}\,e_0\otimes e_0^{\mathsf T}$. Here $0\leq i,j<n$. The tensors on the left span $M\otimes_BN$, so this quotient is spanned by $e_0\otimes e_0^{\mathsf T}$; its image under $\mu$ is $1$, hence $\mu$ is an isomorphism. For the other tensor product, the elementary tensors $e_j^{\mathsf T}\otimes e_i$ form a $k$-basis of $N\otimes_kM$, and column-row multiplication sends them to the matrix-unit basis $E_{ji}$ of $B$. Thus $N\otimes_kM\cong B$ by an explicit basis-to-basis isomorphism. [F1, F3, given, algebra]

1.3 Every commutator in $B$ has trace zero by [F2], so $[B,B]\subseteq\ker(\operatorname{tr})$. Conversely, if $i\ne j$, then $E_{ij}=[E_{ii},E_{ij}]$ and $E_{ii}-E_{jj}=[E_{ij},E_{ji}]$ by [F1]. The off-diagonal units and the diagonal differences span the trace-zero subspace: for a diagonal matrix $\operatorname{diag}(d_0,\ldots,d_{n-1})$ with $\sum_i d_i=0$, it is $\sum_{i=0}^{n-2}d_i(E_{ii}-E_{n-1,n-1})$. Thus $\ker(\operatorname{tr})\subseteq[B,B]$. Since $\operatorname{tr}(E_{00})=1$, trace is onto $k$, so $B/[B,B]\cong k$ in every characteristic; no division by $n$ is used. For $A=k$, the commutator subspace is zero, giving $HH_0(k,k)\cong k$. [F1, F2, F6, given, algebra]

2.1 The cyclic rotation of [F4], in bar degree zero, sends the class of $e_i\otimes e_j^{\mathsf T}$ to the class of $e_j^{\mathsf T}\otimes e_i$, which by step 1.2 corresponds to the matrix unit $E_{ji}$. By [F1] and [F2], $\operatorname{tr}(E_{ji})=\delta_{ij}$, while the scalar corresponding to $e_i\otimes e_j^{\mathsf T}$ under the identification of step 1.2 is $e_ie_j^{\mathsf T}=\delta_{ij}$. Hence the rotation matches the two identifications: the scalar product of the row and column vectors and the trace of the corresponding matrix unit agree. [F1, F2, F4, step 1.2, given, algebra]

3.1 By step 1.1 the pair $(M,N)$ satisfies the hypotheses of [F4], so the cyclic rotation gives an isomorphism $HH_0(k,M\otimes_BN)\cong HH_0(B,N\otimes_kM)$, natural in the pair. Under the identifications $M\otimes_BN\cong k$ and $N\otimes_kM\cong B$ of step 1.2 and the coinvariant description of [F6], this becomes the isomorphism $k\cong B/[B,B]\cong k$ whose two composites are computed on classes by step 2.1 and step 1.3: the rotation sends $[e_i\otimes e_j^{\mathsf T}]$ to $[E_{ji}]$, and the trace of $E_{ji}$ is $\delta_{ij}$, which is exactly the class of the scalar product. For higher Hochschild degrees the same rotation is applied to the terms of the bounded complexes concentrated in cochain degree zero, and the derived-cyclicity isomorphism of [F5] applies with $M$ and $N$ regarded as complexes concentrated in cochain degree zero, in hyperhomology degree $-p$, giving $HH_p(k,k)\cong HH_p(B,B)$ for every $p\geq0$ (the coefficient complexes are concentrated in cochain degree zero) and showing that the agreement is not special to degree zero. [F4, F5, F6, step 1.1, step 1.2, step 2.1, step 1.3, given, algebra] ∎
