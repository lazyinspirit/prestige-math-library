---
id: lem-gln-local-iwasawa-and-cartan-decompositions
kind: lemma
title: Local GL(n) Iwasawa and Cartan decompositions
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
- def-spherical-hecke-algebra-and-normalized-satake-transform-for-gln
- thm-smith-normal-form-existence-over-a-pid
- thm-uniqueness-of-left-haar-measure-up-to-scale
- def-axiom-of-choice
sources:
  references:
  - title: Masao Oi, Introduction to the Local Langlands Correspondence, §§8.2, 11.1–11.2
    url: https://masaooi.github.io/LLC.pdf
  - title: W. Casselman, Introduction to the Theory of Admissible Representations of p-adic Reductive Groups (1995 draft), §§2.1–2.2
    url: https://www.math.ubc.ca/~cass/research/pdf/p-adic-book.pdf
proof_strategy: direct
---
## Statement

Assume the Axiom of Choice and the local data in the spherical Hecke definition. Then $G=BK$ and
$$
G=\coprod_{\lambda_1\ge\cdots\ge\lambda_n,\ \lambda_i\in\mathbb Z}Kt_\lambda K.
$$
Each displayed double coset is a finite union of right $K$-cosets. The characteristic functions $h_\lambda=1_{Kt_\lambda K}$ form a vector-space basis of $H$. For every compactly supported locally constant function $a:G\to\mathbb C$ that is right $K$-invariant, the measures fixed in the definition satisfy
$$
\int_G a(g)\,dg=\int_T\int_U a(tu)\,du\,dt.
$$
For each $t\in T$, conjugation $u\mapsto tut^{-1}$ scales $du$ by $\delta(t)$.

## Statement references

[[def-spherical-hecke-algebra-and-normalized-satake-transform-for-gln]]

[[thm-smith-normal-form-existence-over-a-pid]]

[[thm-uniqueness-of-left-haar-measure-up-to-scale]]

[[def-axiom-of-choice]]

## Facts & Assumptions

**Given:** The local data of [F1], the Axiom of Choice [A1], and the Smith normal form result [F2].

[A1] AC is assumed in the Haar-existence and uniqueness context used for the fixed measures. [[def-axiom-of-choice]]

[F1] The field, groups, compact open subgroups, Haar measures and normalization are those of [[def-spherical-hecke-algebra-and-normalized-satake-transform-for-gln]].

[F2] Every matrix over a PID admits Smith normal form by invertible row and column operations. [[thm-smith-normal-form-existence-over-a-pid]]

[F3] Left Haar measures on the same locally compact Hausdorff group are unique up to positive scale. This identifies normalized coordinate Haar measures with the fixed measures. [[thm-uniqueness-of-left-haar-measure-up-to-scale]]

## Proof

1.1 For $n=1$, $G=B$ and the assertion $G=BK$ is immediate. For $n>1$, take a matrix $g\in G$. In its last row choose a nonzero entry of least valuation, move it to the last column, and subtract its $\mathcal O$-multiples from the other columns to make all other last-row entries zero. Each operation is right multiplication by an element of $K$, because every ratio of a last-row entry to the chosen pivot has nonnegative valuation. The remaining upper-left block is invertible. Induction on its size makes the whole matrix upper triangular, and right multiplication by a diagonal unit matrix makes each diagonal entry a power of $\varpi$. Hence $g\in BK$. [given, F1, construct, algebra]

1.2 Every nonzero ideal $I\subseteq\mathcal O$ is principal: the valuations of its nonzero elements form a nonempty subset of $\mathbb N$, so choose $x\in I$ of least valuation; for every $y\in I$, $v(y/x)\ge0$, whence $y\in x\mathcal O$ and $I=x\mathcal O$. Thus $\mathcal O$ is a PID. Multiply a given $g\in G$ by a sufficiently large scalar power of $\varpi$ to put its entries in $\mathcal O$, apply [F2], absorb diagonal units into $K$, and undo the scalar. Permuting the diagonal entries gives $g\in Kt_\lambda K$ with $\lambda_1\ge\cdots\ge\lambda_n$. For each $j$, the least valuation among the nonzero $j$-minors is invariant under multiplication on either side by $K$: Cauchy–Binet gives one inequality because the coefficients lie in $\mathcal O$, and applying it to the inverse matrices in $K$ gives the reverse. For $t_\lambda$ this least valuation is $\lambda_{n-j+1}+\cdots+\lambda_n$. These sums determine $\lambda$, proving disjointness. [given, F1, F2, construct, algebra]

2.1 For fixed $\lambda$, the subgroup $K\cap t_\lambda Kt_\lambda^{-1}$ contains a principal congruence subgroup $K(\ell)=\{k\in K:k\equiv I\pmod{\varpi^\ell}\}$ for sufficiently large $\ell$: conjugation changes each off-diagonal valuation by a fixed integer, and choosing $\ell$ larger than every possible loss makes both a matrix and its inverse integral. Reduction modulo $\varpi^\ell$ has finite image because $\mathcal O/\varpi^\ell\mathcal O$ has $q^\ell$ elements by successive residue digits. Thus $K\cap t_\lambda Kt_\lambda^{-1}$ has finite index in $K$, so $Kt_\lambda K$ is a finite union of right $K$-cosets. A compact set meets only finitely many open right $K$-cosets, so each compactly supported bi-$K$-invariant function has finite double-coset support. This proves the basis assertion. [F1, step 1.2, algebra]

2.2 By step 1.1, every right coset $gK$ has a representative $t_\mu u$ with $\mu\in\mathbb Z^n$ and $u\in U$. The exponent word $\mu$ is unique: the lattice $L=g\mathcal O^n$ determines, for each $j$, the ideal obtained by projecting $L\cap\operatorname{span}_F(e_1,\ldots,e_j)$ to its $j$th coordinate. For an upper-triangular basis $t_\mu u$, the condition that a vector in $L$ lies in this span forces the coefficients of columns $n,n-1,\ldots,j+1$ to vanish in that order, since each next diagonal entry is nonzero and all later coefficients have already vanished. Among the first $j$ columns, only column $j$ has nonzero $j$th coordinate, namely $\varpi^{\mu_j}$. Thus the projection ideal is $\varpi^{\mu_j}\mathcal O$, which recovers every $\mu_j$. For fixed $t_\mu$, $t_\mu uK=t_\mu u'K$ exactly when $u^{-1}u'\in U\cap K$. Hence $G/K$ is parametrized by the disjoint union over $\mu\in\mathbb Z^n$ of $U/(U\cap K)$. Every right coset has $dg$-mass one. Each coset of $T\cap K$ has $dt$-mass one, and each coset of $U\cap K$ has $du$-mass one. For $z\in T\cap K$, conjugation $u\mapsto zuz^{-1}$ preserves $U\cap K$ and is an automorphism of $U$. Its pushforward of $du$ is a left Haar measure with the same mass one on $U\cap K$, so [F3] makes it equal to $du$. Therefore replacing $t_\mu$ by $t_\mu z$ does not change the inner integral: $t_\mu z u=t_\mu(zuz^{-1})z$, and right $K$-invariance removes the final $z$. Thus both integrals count each right $K$-coset once, proving the integration formula. [F1, F3, step 1.1, algebra]

3.1 In the coordinates $u_{ij}$ for $i<j$, take product additive Haar measure, using on each $F$-coordinate an additive Haar measure normalized by $\operatorname{vol}(\mathcal O)=1$; these measures exist by the Haar prerequisites in [F1] under [A1]. Product measure is left invariant on $U$: left multiplication is a triangular affine change of coordinates, ordered by superdiagonal, with every diagonal coefficient equal to one, so iterated translation invariance preserves compact-open boxes and their finite unions. This product measure has mass one on $U\cap K$, hence equals the selected $du$ by [F3]. For $a\in F^\times$, the measure $E\mapsto\mu(aE)$ on additive $F$ is translation invariant because $a(E+x)=aE+ax$ and $\mu$ is translation invariant; it is therefore Haar and equals $c(a)\mu(E)$ by [F3]. Since $\mathcal O$ is the disjoint union of $q$ cosets of $\varpi\mathcal O$, $c(\varpi)=q^{-1}$; units preserve $\mathcal O$, so $c(u)=1$ for $u\in\mathcal O^\times$. The decomposition $a=\varpi^{v(a)}u$ gives $c(a)=q^{-v(a)}=|a|$. Conjugation by $t$ scales coordinate $u_{ij}$ by $t_i/t_j$, and therefore scales product measure, hence $du$, by $\prod_{i<j}|t_i/t_j|=\delta(t)$. [A1, F1, F3, algebra] ∎

## Notes

The finite row, column and residue choices in the proof use only finite choice; AC is carried for the Haar-existence and uniqueness suppliers.
