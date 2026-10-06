---
id: ex-central-elements-as-natural-endomorphisms-of-the-identity
kind: example
title: "Central elements as natural endomorphisms of the identity"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 8
justified_by: []
aliases: []
deps: [cor-center-is-morita-invariant-via-natural-endomorphisms, def-center-of-a-ring, def-natural-transformation, def-vertical-composition-of-natural-transformations, def-ring, def-commutative-ring, cor-square-matrices-form-a-ring, def-matrix-units, lem-matrix-unit-multiplication, def-matrices-over-a-commutative-ring, def-field]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "nLab, Morita equivalence, Definitions (center of an algebra as the center of its module category)"
      url: "https://ncatlab.org/nlab/show/Morita+equivalence"
    - title: "W. Crawley-Boevey, Noncommutative Algebra, §1.4 (Z(R)) and §3.12 (regular bimodule and Morita equivalence)"
      url: "https://www.math.uni-bielefeld.de/~wcrawley/1617noncommalg/Noncommutative%20algebra.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Example

Let $A$ be a unital ring. For every central element $z\in Z(A)$ ([[def-center-of-a-ring]]) the family
$$\eta^z_X:X\longrightarrow X,\qquad \eta^z_X(x)=zx,$$
is a natural endomorphism of the identity functor of $A\text{-Mod}$: each $\eta^z_X$ is $A$-linear because $z$ is central, and naturality is the identity $f(zx)=zf(x)$ for every $A$-linear $f$. Conversely every natural endomorphism of the identity is $\eta^z$ for a unique $z\in Z(A)$, and $\eta^{zz'}=\eta^z\circ\eta^{z'}$; hence $\operatorname{Nat}(1_{A\text{-}\mathrm{Mod}},1_{A\text{-}\mathrm{Mod}})\cong Z(A)$ as rings ([[cor-center-is-morita-invariant-via-natural-endomorphisms]], [[def-natural-transformation]], [[def-vertical-composition-of-natural-transformations]]). In particular, for the matrix ring $M_n(k)$ over a field $k$ with $n\ge1$ the center is the ring of scalar matrices, so the natural endomorphisms of the identity of $M_n(k)\text{-Mod}$ are exactly the scalars; and for a commutative ring $A$ they are exactly the multiplications by elements of $A$. No choice is used.

## Facts & Assumptions

**Given:** A unital ring $A$ and its category $A\text{-Mod}$ of left modules.

[F1] The center $Z(A)=\{z\in A:za=az\text{ for every }a\in A\}$ is a commutative subring of $A$ containing $1$, and $A$ is commutative if and only if $Z(A)=A$ ([[def-center-of-a-ring]], [[def-commutative-ring]]).

[F2] Evaluation at the component $A\to A$ is a ring isomorphism from the natural endomorphisms of the identity functor to $Z(A)$; its inverse sends a central $z$ to the family $x\mapsto zx$, and vertical composition is componentwise ([[cor-center-is-morita-invariant-via-natural-endomorphisms]], [[def-natural-transformation]], [[def-vertical-composition-of-natural-transformations]], [[def-ring]]).

[F3] For a field $k$ and $n\ge1$, the matrix units $E_{ij}$ of $B=M_n(k)$ form a $k$-basis, multiply by $E_{ij}E_{k\ell}=\delta_{jk}E_{i\ell}$, and $B$ is a unital ring ([[cor-square-matrices-form-a-ring]], [[def-matrix-units]], [[lem-matrix-unit-multiplication]], [[def-matrices-over-a-commutative-ring]], [[def-field]]).

## Verification

**Proof technique:** direct.

1.1 ($\eta^z$ is natural.) Let $z\in Z(A)$ and let $f:X\to Y$ be $A$-linear. The map $\eta^z_X$ is additive and $A$-linear since $\eta^z_X(ax)=a(zx)=(az)x=z(ax)$ for $a\in A$, using centrality; and $\eta^z_Y(f(x))=zf(x)=f(zx)=f(\eta^z_X(x))$, so the naturality squares commute. Hence $\eta^z$ is a natural endomorphism of the identity. [F1, given, algebra]

1.2 (Center of a matrix ring.) Let $B=M_n(k)$ and let $C=\sum_{p,q}c_{pq}E_{pq}\in B$ commute with every $E_{ij}$. Then $CE_{ij}=\sum_pc_{pi}E_{pj}$ and $E_{ij}C=\sum_qc_{jq}E_{iq}$ by [F3]; comparing the $(p,q)$-entries gives $\delta_{qj}c_{pi}=\delta_{pi}c_{jq}$ for all $i,j,p,q$. Taking $p\ne i$, $q=j$ gives $c_{pi}=0$, and taking $p=i$, $q\ne j$ gives $c_{jq}=0$, so $C$ is diagonal; taking $p=i$, $q=j$ gives $c_{ii}=c_{jj}$ for all $i,j$, so all diagonal entries are equal. Hence $C=\lambda I_n$ is scalar, and every scalar matrix is central; thus $Z(M_n(k))=\{\lambda I_n:\lambda\in k\}\cong k$. [F3, given, algebra]

2.1 (Converse, uniqueness, and composition.) By [F2] every natural endomorphism $\eta$ of the identity has $\eta=\eta^{z}$ for the unique central element $z=\eta_A(1)$, and conversely every central element arises this way; explicitly, naturality at the left $A$-linear map $\ell_x:A\to X$, $a\mapsto ax$, gives $\eta_X(x)=\ell_x(\eta_A(1))=zx$. For central $z,z'$ one has $\eta^{zz'}_X(x)=(zz')x=z(z'x)=(\eta^z_X\circ\eta^{z'}_X)(x)$, so $\eta^{zz'}=\eta^z\circ\eta^{z'}$ componentwise. Therefore the bijection $z\mapsto\eta^z$ is a ring isomorphism $Z(A)\cong\operatorname{Nat}(1_{A\text{-}\mathrm{Mod}},1_{A\text{-}\mathrm{Mod}})$. [F2, step 1.1, given, algebra]

3.1 (Commutative rings.) If $A$ is commutative, then $Z(A)=A$ by [F1], so by step 2.1 the natural endomorphisms of the identity of $A\text{-Mod}$ are exactly the maps $x\mapsto zx$ for elements $z\in A$. [F1, step 2.1, given]

3.2 (Matrix rings.) For $A=M_n(k)$ step 1.2 identifies $Z(A)$ with the scalar matrices, so by step 2.1 the natural endomorphisms of the identity of $M_n(k)\text{-Mod}$ are exactly the multiplications by scalar matrices, i.e. the scalars, and this is the special case of the Morita-invariance statement [[cor-center-is-morita-invariant-via-natural-endomorphisms]]. [step 2.1, step 1.2, given]

4.1 Steps 1.1 and 2.1 verify naturality, uniqueness, composition and the ring identification, step 1.2 computes the center in the matrix case, and steps 3.1 and 3.2 record the two announced specializations; the bijection is the one of [[cor-center-is-morita-invariant-via-natural-endomorphisms]], and no choice is used. [step 1.1, step 2.1, step 1.2, step 3.1, step 3.2] ∎
