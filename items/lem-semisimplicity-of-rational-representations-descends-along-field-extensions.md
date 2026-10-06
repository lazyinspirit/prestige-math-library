---
id: lem-semisimplicity-of-rational-representations-descends-along-field-extensions
kind: lemma
title: "Semisimplicity of rational representations descends along field extensions"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 5
deps: [def-rational-representation-and-comodule-of-an-affine-group-scheme, def-simple-and-semisimple-representations, lem-tensor-and-hom-representations-are-rational, def-linear-basis, def-algebraic-dual-and-linear-functional, thm-affine-fibre-product-tensor-ring, thm-gauss-jordan-elimination-produces-reduced-row-echelon-form]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: "https://www.jmilne.org/math/Books/iAG2022.pdf"
      locator: "Ch. 22, Lemma 22.39, printed p. 477; Ch. 4 (4.19), printed pp. 90-91"
---

## Statement

Let $G$ be an algebraic group over a field $k$, let $(V,r)$ be a
finite-dimensional rational representation and let $k'\supseteq k$ be a field
extension. If the base change $(V_{k'},r_{k'})$ is semisimple as a
representation of $G_{k'}$, then $(V,r)$ is semisimple
([[def-rational-representation-and-comodule-of-an-affine-group-scheme]],
[[def-simple-and-semisimple-representations]]). In particular it suffices to
test semisimplicity after extending scalars to an algebraic closure of $k$. For a possibly nonaffine $G$, rationality here means that $r:G\to\operatorname{GL}_V$ is a morphism; subrepresentations are the invariant subspaces. This agrees with the cited comodule definition for affine $G$.

## Facts & Assumptions

**Given:** An algebraic group $G$ over $k$, a finite-dimensional rational representation $(V,r)$, a field extension $k'\supseteq k$, and the base changes $G_{k'}$ and $(V_{k'},r_{k'})$. Put $A=\Gamma(G,\mathcal O_G)$; finite representation matrices have entries in $A$, whether or not $G$ is affine.

[F1] *Base change of matrix coefficients.* Base change of the morphism $r:G\to\operatorname{GL}_V$ defines the representation on $V_{k'}$, and preserves invariant subspaces. A finite-dimensional subspace $C\subseteq A$ remains linearly independent after base change: the restriction maps from $C$ to the rings of affine opens jointly detect zero, and finitely many suffice. Indeed choose a finite intersection of their kernels of minimal dimension; if it were nonzero, another restriction would lower its dimension. Thus $C$ injects into a finite direct sum of affine-open coordinate rings. Tensoring with $k'$ preserves this injection by finite coefficient comparison, and these rings become the coordinate rings of the base-changed affine opens by [[thm-affine-fibre-product-tensor-ring]]. Consequently $C\otimes_kk'\to\Gamma(G_{k'},\mathcal O_{G_{k'}})$ is injective. In the affine case these are the usual comodule coefficient calculations of [[def-rational-representation-and-comodule-of-an-affine-group-scheme]]; the argument does not require global affineness.

[F2] *Hom representation and scalar extension.* For finite-dimensional $W$, the space $M=\operatorname{Hom}_k(V,W)$ with $(g\cdot f)(v)=g\cdot f(g^{-1}v)$ is a finite-dimensional rational representation of $G$ ([[lem-tensor-and-hom-representations-are-rational]]). For nonaffine $G$ its matrices are still regular: they are the products of the representation matrix on $W$ and the inverse representation matrix on $V$, so the displayed action gives a morphism into $\operatorname{GL}_M$ directly. Choose a finite basis $(e_i)$ of $V$ with dual basis $(e_i^*)$, and a finite basis $(w_j)$ of $W$. The rank-one maps $E_{ij}:v\mapsto e_i^*(v)w_j$ form a $k$-basis of $M$; after scalar extension, their corresponding maps on $V_{k'}$ with values in $W_{k'}$ form a $k'$-basis of $\operatorname{Hom}_{k'}(V_{k'},W_{k'})$. Thus the canonical map $M\otimes_kk'\to\operatorname{Hom}_{k'}(V_{k'},W_{k'})$ sending $f\otimes a$ to $a f_{k'}$ is an isomorphism ([[def-linear-basis]], [[def-algebraic-dual-and-linear-functional]]).

[F3] *Equivariance is a finite linear system.* In a finite basis $m_1,\dots,m_N$ of $M$, write $g\cdot m_j=\sum_i a_{ij}(g)m_i$ with $a_{ij}\in A$. For $f=\sum_j z_jm_j$, fixedness is exactly $\sum_j a_{ij}z_j=z_i$ as regular functions on $G$, for every $i$. Let $C\subseteq A$ be the span of $1$ and all $a_{ij}$. Comparing coefficients in a finite basis of $C$ turns these identities into finitely many linear equations over $k$. By [F1] that coefficient basis stays independent on $G_{k'}$, so the base-changed equations express exactly $G_{k'}$-fixedness. Fixedness in the Hom action means equivariance of $f$. Adding the finite coordinate equations $f|_W=\operatorname{id}_W$ defines the affine solution set
$$S=\{f\in M:f\text{ is }G\text{-equivariant},\ f|_W=\operatorname{id}_W\}.$$
This uses the finite matrix interpretation of rationality; in the affine case it is the usual comodule condition ([[def-rational-representation-and-comodule-of-an-affine-group-scheme]], [F2]).

[F4] *Linear systems over a field.* Every finite matrix over a field is row equivalent to a matrix in reduced row echelon form, obtained by Gauss-Jordan elimination ([[thm-gauss-jordan-elimination-produces-reduced-row-echelon-form]]). Row operations are invertible and preserve solution sets over every extension field; a system in reduced row echelon form is solvable if and only if it has no row $(0\ \cdots\ 0\mid c)$ with $c\ne0$, and when it is solvable, setting the free variables equal to $0$ and solving the pivot equations gives a solution with coordinates in the field generated by the coefficients, hence in $k$ when the coefficients lie in $k$.

[F5] *Splitting implies semisimplicity.* If every subrepresentation of a finite-dimensional rational representation $U$ is a direct summand, then $U$ is semisimple: choose a nonzero subrepresentation of minimal dimension, which is simple, split it off, and iterate on the complement of smaller dimension ([[def-simple-and-semisimple-representations]]).

## Proof

**Proof technique:** direct.

1.1 Assume that $(V_{k'},r_{k'})$ is semisimple and let $W\subseteq V$ be a subrepresentation. Then $W_{k'}$ is a subrepresentation of $V_{k'}$. Write $V_{k'}$ as a finite direct sum of simple subrepresentations and choose a largest subfamily whose sum $C$ intersects $W_{k'}$ trivially. If $W_{k'}+C\ne V_{k'}$, some simple summand $S_i$ is not contained in $W_{k'}+C$; simplicity gives $S_i\cap(W_{k'}+C)=0$, so adjoining $S_i$ contradicts maximality. Hence $V_{k'}=W_{k'}\oplus C$. [F1, given, algebra]

1.2 The set $S$ of $G$-equivariant $k$-linear maps $f:V\to W$ with $f|_W=\operatorname{id}_W$ is, by [F3], the solution set of a finite system of linear equations with coefficients in $k$, inside the finite-dimensional $k$-vector space $M=\operatorname{Hom}_k(V,W)$; and $M\otimes_kk'\cong\operatorname{Hom}_{k'}(V_{k'},W_{k'})$ identifies the base-changed system with the corresponding system over $k'$. [F2, F3]

2.1 The base-changed system has a solution over $k'$: the projection $p:V_{k'}\to W_{k'}$ along the decomposition $V_{k'}=W_{k'}\oplus C$ of step 1.1 is $G_{k'}$-equivariant and restricts to the identity on $W_{k'}$. Thus $p$ solves the equations of step 1.2 over $k'$; the affine solution set $S$ itself need not be a vector space. [step 1.1, step 1.2]

3.1 The system of step 1.2 has a solution over $k$. Row-reduce its augmented matrix over $k$ by Gauss-Jordan elimination; the resulting reduced row echelon system has the same solution set over $k'$, so it is solvable over $k'$ by step 2.1 and therefore has no row of the form $(0\ \cdots\ 0\mid c)$ with $c\ne0$; setting the free variables equal to zero and solving the pivot equations then produces a solution in $k$. [F4, step 1.2, step 2.1]

4.1 Let $f\in S$. Then $f:V\to W$ is $G$-equivariant with $f|_W=\operatorname{id}_W$, so $W\cap\ker f=0$ and every $v\in V$ satisfies $v-f(v)\in\ker f$, giving $V=W\oplus\ker f$; thus every subrepresentation of $V$ is a direct summand. [step 3.1]

5.1 By [F5] the representation $(V,r)$ is semisimple. [F5, step 4.1]

6.1 If in particular $V_{\bar k}$ is semisimple for an algebraic closure $\bar k$ of $k$, applying step 5.1 to the extension $k\subseteq\bar k$ shows that $V$ is semisimple; this completes the proof. [step 5.1] ∎

## Remarks

- The extension $k'$ need not be algebraic or separable: only the invariance of consistency of a $k$-linear system under base change is used, which holds for every field extension.
- The field extension enters twice: in defining the base-changed representation $V_{k'}$ and in producing the $k'$-solution of the complement equations; the descent of the solution itself is elementary linear algebra over $k$.
