---
title: Unimodular elements and trivial summands
status: draft
research_item: def-unimodular-sections
dependency_level: 1
---

PDF p. 1: Serre splitting and top Chern obstruction

## Prerequisites

- [lem-affine-bundle-module-interface](item-lem-affine-bundle-module-interface)

## Definition
Let $A$ be a commutative ring with identity and $P$ a finite projective $A$-module: $P$ is finitely generated, and maps from $P$ lift through surjective module homomorphisms. An element $p\in P$ is **unimodular** if there is an $A$-linear functional $\phi:P\to A$ with $\phi(p)=1$. A functional $\phi:P\to A$ is **unimodular** if it is surjective. A pair $(p,\phi)$ with $\phi(p)=1$ is a **unimodular pair**.

A vector bundle $E$ on a scheme $X$ is a finite locally free $\mathcal O_X$-module: every point has an open neighbourhood on which $E$ is a finite direct sum of copies of $\mathcal O_X$. Its dual is $E^\vee=\mathcal Hom_{\mathcal O_X}(E,\mathcal O_X)$. A global section $s\in\Gamma(X,E)$ is **nowhere zero** if, at every point $x$, its image in the fiber $E\otimes_{\mathcal O_X}k(x)$ is nonzero, where $k(x)$ is the residue field of the local ring $\mathcal O_{X,x}$. Equivalently, locally on $X$ the map $\mathcal O_X\to E$, $1\mapsto s$, identifies $\mathcal O_X$ with a direct summand of $E$. A morphism $E\to\mathcal O_X$ is instead a global section of the dual $E^\vee$.

Assume the Axiom of Choice for the following affine correspondence. On $X=\operatorname{Spec}A$, the bundle associated to a finite projective module $P$ has global sections $P$; under this identification a section is nowhere zero exactly when its element is unimodular. A unimodular pair gives an isomorphism $A\oplus\ker\phi\to P$, $(a,q)\mapsto ap+q$. In particular, a surjective functional on $P$ belongs to such a pair.

## Justification
The fiber condition uses the actual residue class of the section and is independent of a choice of local frame. The equivalences and the displayed direct-sum decomposition are established below. The affine assertion uses the stated Axiom of Choice through the cited affine module–bundle interface.

## Facts & Assumptions

**Given:** A commutative ring $A$, a finite projective $A$-module $P$, a scheme $X$ with a vector bundle $E$, and the Axiom of Choice for the affine assertions.

**Goal:** Justify the local description of nowhere-zero sections and the stated affine equivalences and splitting.

[F1] Under the Axiom of Choice, finite projective $A$-modules and vector bundles on $\operatorname{Spec}A$ correspond by associated sheaf and global sections, compatibly with localizations and duals; a finite projective module is a direct summand of a finite free module. [lem-affine-bundle-module-interface](item-lem-affine-bundle-module-interface)

## Proof

**Proof technique:** direct; use local coordinates and the affine module–bundle correspondence.

1.1 On a neighbourhood of a point $x$, choose a frame of $E$ and write $s=(a_1,\ldots,a_r)$. Its fiber value at $x$ is nonzero exactly when some $a_i$ has nonzero image in the residue field of $\mathcal O_{X,x}$, equivalently is a unit in that local ring. After shrinking the neighbourhood, that coordinate is invertible. Projection to this coordinate followed by multiplication by $a_i^{-1}$ is then a functional taking $s$ to $1$, so $s$ generates a direct summand. Conversely, if such a local splitting exists, its fiber sends the fiber value of $s$ to $1$, so that value is nonzero. Thus the two local descriptions agree. [given, construct]

1.2 If $\phi(p)=1$, the map $(a,q)\mapsto ap+q$ from $A\oplus\ker\phi$ to $P$ has inverse $v\mapsto(\phi(v),v-\phi(v)p)$. If $\phi$ is surjective, choose $p$ with $\phi(p)=1$. These statements also hold for the zero ring, where $1=0$. [given, algebra, construct]

1.3 For the affine converse, write $P$ as a direct summand of $A^n$ using [F1]. The resulting coordinate functionals $\lambda_i\in P^\vee$ and elements $e_i\in P$ satisfy $v=\sum_i\lambda_i(v)e_i$ for every $v\in P$. Put $I=(\lambda_1(p),\ldots,\lambda_n(p))$. At a prime $\mathfrak p$, the fiber of the associated section is zero exactly when all $\lambda_i(p)$ lie in $\mathfrak p$: one direction follows by applying the functionals and the other from the displayed expansion. If the section is nowhere zero, $I$ is contained in no prime. Under Choice a proper ideal lies in a maximal, hence prime, ideal, so $I=A$. Coefficients expressing $1$ as a linear combination of the $\lambda_i(p)$ yield a functional $\phi$ with $\phi(p)=1$. [F1, given, construct]

2.1 Conversely, if $\phi(p)=1$, its localization and passage to every residue field send the fiber value of $p$ to $1$; hence that value is nonzero. Steps 1.1 through 1.3 and this implication establish all the stated equivalences and the splitting. [F1, step 1.1, step 1.2, step 1.3] ∎
