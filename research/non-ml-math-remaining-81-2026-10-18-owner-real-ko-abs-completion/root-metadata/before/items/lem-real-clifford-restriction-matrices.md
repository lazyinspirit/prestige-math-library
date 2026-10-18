---
id: lem-real-clifford-restriction-matrices
kind: lemma
title: Restriction matrices for negative-square graded real Clifford modules
status: draft
origin: pipeline
deps:
- def-clifford-module-restriction-cokernel-a-n
- lem-graded-c-n-modules-equivalent-to-ungraded-c-n-1-modules
- thm-real-complex-clifford-algebra-classification
- thm-clifford-graded-tensor-product-for-orthogonal-sums
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Atiyah–Bott–Shapiro, Clifford Modules, sections 5–6
    url: https://www.math.ens.psl.eu/~benoist/refs/ABS.pdf
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-clifford-modules-ko-and-abs-orientations
dependency_level: 3
---

## Statement

Use $C_n=\mathrm{Cl}_{0,n}$ and the graded groups $M_n$ and restriction maps
$r_n:M_{n+1}\to M_n$. In the irreducible bases specified below the matrices are

| $n$ | $M_n$ | $M_{n+1}$ | $r_n$ | $A_n$ |
|---:|---|---|---|---|
| $0$ | $\mathbb Z^2$ | $\mathbb Z$ | $\binom11$ | $\mathbb Z$ |
| $1$ | $\mathbb Z$ | $\mathbb Z$ | $(2)$ | $\mathbb Z/2$ |
| $2$ | $\mathbb Z$ | $\mathbb Z$ | $(2)$ | $\mathbb Z/2$ |
| $3$ | $\mathbb Z$ | $\mathbb Z^2$ | $(1\ \ 1)$ | $0$ |
| $4$ | $\mathbb Z^2$ | $\mathbb Z$ | $\binom11$ | $\mathbb Z$ |
| $5$ | $\mathbb Z$ | $\mathbb Z$ | $(1)$ | $0$ |
| $6$ | $\mathbb Z$ | $\mathbb Z$ | $(1)$ | $0$ |
| $7$ | $\mathbb Z$ | $\mathbb Z^2$ | $(1\ \ 1)$ | $0$ |

The table continues with period eight by tensoring with a chosen irreducible
graded $C_8$-module $B$. The generator of a split-row cokernel is the first
irreducible modulo the diagonal, with the second its negative. At $n=0$ this
is the even-minus-odd rank convention.

## Facts & Assumptions

**Given:** The negative-square convention, finite-dimensional modules, and
restriction along the first $n$ generators.

[F1] The graded/even-part equivalence and the negative-square algebra
classification are the exact interfaces of
[[lem-graded-c-n-modules-equivalent-to-ungraded-c-n-1-modules]] and
[[thm-real-complex-clifford-algebra-classification]].

[F2] Orthogonal sum corresponds to graded tensor product
([[thm-clifford-graded-tensor-product-for-orthogonal-sums]]).



**Proof technique:** explicit symbols and finite-dimensional bundle constructions.

## Proof

**Proof technique:** direct construction.

1.1 Choose the *first* generator as common anchor: identify $C_n^0$ with $C_{n-1}$ by $f_i\mapsto e_1e_{i+1}$. These elements square to $-1$, anticommute, and span the even algebra by multiplication and dimension. The same anchor in $C_{n+1}$ makes the inclusion of even algebras the standard inclusion of these $C_{n-1}$ and $C_n$. Consequently for $n\geq1$ the map $r_n$ is exactly restriction of ungraded $C_n$-modules to $C_{n-1}$ under [F1], not merely a map between abstract groups of the same rank. [F1, algebra]


1.2 The ungraded algebras $C_k$ for $k=0,\ldots,8$ are $\mathbb R,\mathbb C,\mathbb H,\mathbb H\oplus\mathbb H, M_2(\mathbb H),M_4(\mathbb C),M_8(\mathbb R), M_8(\mathbb R)\oplus M_8(\mathbb R),M_{16}(\mathbb R)$. Their real simple-module dimensions are respectively $1,2,4,(4,4),8,8,8,(8,8),16$. For a matrix algebra $M_k(D)$ every module is a sum of column modules: the matrix idempotents decompose it, and matrix units identify each column component with the first. Thus all these decompositions are actual semisimple decompositions, with multiplicities readable from dimensions except when the target is split. [F1, algebra]


1.3 Choose an irreducible ungraded $C_8$-module $B=\mathbb R^{16}$ and give it the grading by its volume involution. It has two eight-dimensional parts. The action $C_8\to\operatorname{End}_{\mathbb R}(B)$ is an isomorphism of graded algebras: it is faithful, dimensions agree, and conjugation by the grading operator sends each generator to its negative. For any graded $C_8$-module $L$, homogeneous matrix units show that signed evaluation $B\widehat\otimes\operatorname{Hom}_{C_8}^{\mathrm{gr}}(B,L)\to L$, $b\otimes f\mapsto(-1)^{|b||f|}f(b)$, is an isomorphism when Hom contains both homogeneous degrees and a degree-$|f|$ intertwiner satisfies $f(ab)=(-1)^{|f||a|}af(b)$. The displayed sign makes evaluation $C_8$-linear. More explicitly, choose a homogeneous basis of $B$; the diagonal matrix units split $L$, the off-diagonal units identify those pieces, and their degrees prescribe exactly the parity shifts of a single multiplicity space. This proves graded Morita equivalence also after a commuting graded $C_n$ action is included. [F1, F2, algebra]


2.1 For $n=1,2$ the unique simple restricts to respectively two copies of the preceding simple, so the matrix is $(2)$. For $n=3,7$ each of the two source simples has exactly the target simple's dimension, so both restrict to one copy and the matrix is $(1\ \ 1)$. For $n=5,6$ dimensions are equal and both algebras are simple, giving $(1)$. For $n=4,8$, let $\omega$ be the odd-dimensional target volume element; its square is $1$, its two eigenspaces distinguish the two target simples, and the additional generator anticommutes with $\omega$. That generator is invertible and interchanges the eigenspaces, so their multiplicities are equal. The dimension ratio is two, hence both multiplicities are one. These give $\binom11$. [step 1.1, step 1.2, algebra]


3.1 At $n=0$ the simple graded $C_1$-module has even and odd dimensions one, since its invertible odd generator identifies those parts. Restriction therefore gives $(1,1)$ in the even/odd basis of $M_0=\mathbb Z^2$. The cokernel is $\mathbb Z$ by $(a,b)\mapsto a-b$. Computing the other cokernels of the displayed integer matrices proves all eight rows. [step 2.1, algebra]


4.1 Hence $L\mapsto L\widehat\otimes B$ is an equivalence of graded $C_n$- and graded $C_{n+8}$-modules. Place the eight new generators after the old generators. Under [F2] restriction of the extra old generator commutes with tensoring by $B$, so the restriction squares commute, including $M_1\to M_0$. An equivalence of these semisimple categories sends simples bijectively to simples; transporting the chosen bases gives the same matrices and identifies $A_n\to A_{n+8}$ with multiplication by $[B]$. This establishes the asserted periodic continuation. [F2, step 3.1, step 1.3, algebra] ∎
