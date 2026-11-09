---
title: Critical-rank representatives of rank-zero classes
status: published
research_item: lem-critical-rank-representatives
dependency_level: 11
---

PDF p. 12: Proof of Theorem A, rank two representative; PDF p. 15: Proof of Theorem 6.7, first sentence; PDF p. 17: Proof of Theorem B, rank three representatives

## Prerequisites

- [thm-serre-affine-splitting](item-thm-serre-affine-splitting)
- [lem-finite-projective-complements](item-lem-finite-projective-complements)
- [lem-affine-perfect-k-zero-bridge](item-lem-affine-perfect-k-zero-bridge)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
Assume the Axiom of Choice and suitable universes. Let $X$ be a nonempty affine scheme of finite type over a field, of dimension $d=2$ or $3$. Every class $\alpha$ of pointwise rank zero in $K_0(X)=\pi_0 K(X)$ can be written $\alpha=[E]-[\mathcal O_X^d]$ for a vector bundle $E$ of constant rank $d$. Moreover, any vector bundle $V$ of constant rank $r\geq d$ is isomorphic to $E'\oplus\mathcal O_X^{r-d}$ for a vector bundle $E'$ of rank $d$.

A vector bundle is a finite locally free $\mathcal O_X$-module; its rank at a point is the number of copies of the structure sheaf in a local trivialization there. Constant rank means the same rank at every point. The dimension is the supremum of the lengths of strict chains of irreducible closed subsets. The spectrum $K(X)$ is the nonconnective K-theory of perfect complexes in the supplied interface. The class of a vector bundle in $K_0(X)$ is the class of the complex concentrated in degree zero. Pointwise rank on $K_0(X)$ is transported through the affine K-zero isomorphism to the rank homomorphism on the vector-bundle Grothendieck group: a difference $[B]-[C]$ has rank $\operatorname{rank}_x B-\operatorname{rank}_x C$ at $x$.

## Facts & Assumptions

**Given:** The Axiom of Choice, suitable universes, and $X$ and $d$ as in the statement.

**Goal:** Represent every pointwise rank-zero class by a rank-$d$ bundle minus the trivial rank-$d$ bundle, and split any constant-rank bundle down to rank $d$.

[A1] The Axiom of Choice is used through the assumed contracts of the affine perfect-K-zero bridge and finite-projective-complement suppliers in step 1.1, and of Serre splitting in steps 3.1 and 4.1. Padding in step 2.1 requires no additional choice. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] For an affine scheme, the supplied bridge identifies $K_0(X)$ with the vector-bundle Grothendieck group $K^0(X)$ and sends the spectral class of a bundle to its bundle class. This requires the Axiom of Choice and suitable universes. [lem-affine-perfect-k-zero-bridge](item-lem-affine-perfect-k-zero-bridge)

[F2] For a locally noetherian affine scheme, under the Axiom of Choice, each element of $K^0(X)$ is $[B]-[\mathcal O_X^N]$ for some vector bundle $B$ and integer $N\geq0$. Its rank at $x$ is $\operatorname{rank}_x B-N$. The construction uses a finite projective complement to turn the negative bundle into a trivial bundle. [lem-finite-projective-complements](item-lem-finite-projective-complements)

[F3] Under the Axiom of Choice, on a nonempty noetherian affine scheme of dimension $d$, a constant-rank-$r$ vector bundle with $r>d$ is isomorphic to a rank-$d$ bundle plus $r-d$ trivial line summands. [thm-serre-affine-splitting](item-thm-serre-affine-splitting)

## Proof

**Proof technique:** First use a finite projective complement to obtain a single bundle minus a trivial bundle, then pad or split off trivial summands.

1.1 A finite-type algebra over a field is noetherian, so $X$ is noetherian and locally noetherian. By [F1] and [F2], write the given rank-zero class as $\alpha=[B]-[\mathcal O_X^N]$ with $N\geq0$. Since its rank is zero at every point, [F2] gives $\operatorname{rank}_x B=N$ for every $x$; thus $B$ has constant rank $N$. [A1, F1, F2, given]

2.1 If $N\leq d$, put $E=B\oplus\mathcal O_X^{d-N}$. Then $E$ has rank $d$, and the direct-sum relation in $K^0(X)$ gives $[E]-[\mathcal O_X^d]=[B]-[\mathcal O_X^N]=\alpha$. [F1, step 1.1, construct]

3.1 If $N>d$, apply [F3] to $B$ to obtain $B\cong E\oplus\mathcal O_X^{N-d}$ with $E$ of rank $d$. The direct-sum relation gives $[B]-[\mathcal O_X^N]=[E]-[\mathcal O_X^d]$. Together with step 2.1, this proves the representative assertion in all cases. [A1, F1, F3, step 1.1, step 2.1]

4.1 For the additional assertion, if $r=d$ take $E'=V$; the trivial rank-zero bundle is the zero bundle. If $r>d$, [F3] directly supplies $V\cong E'\oplus\mathcal O_X^{r-d}$ with $E'$ of rank $d$. This proves the stated splitting as well as the representative claim. [A1, F3, given, step 3.1] ∎
