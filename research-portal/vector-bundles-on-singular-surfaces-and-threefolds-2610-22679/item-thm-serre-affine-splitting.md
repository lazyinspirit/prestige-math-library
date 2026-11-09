---
title: Serre splitting above the dimension
status: draft
research_item: thm-serre-affine-splitting
dependency_level: 3
---

PDF p. 1: Serre splitting theorem

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [lem-affine-bundle-module-interface](item-lem-affine-bundle-module-interface)
- [lem-author-3af31ead36fb-finite-projective-presentation](item-lem-author-3af31ead36fb-finite-projective-presentation)
- [lem-author-3af31ead36fb-max-spectrum-dimension](item-lem-author-3af31ead36fb-max-spectrum-dimension)
- [lem-author-3af31ead36fb-local-rank](item-lem-author-3af31ead36fb-local-rank)
- [lem-author-3af31ead36fb-split-complement](item-lem-author-3af31ead36fb-split-complement)
- [lem-author-3af31ead36fb-iteration](item-lem-author-3af31ead36fb-iteration)
- [thm-author-3af31ead36fb-serre-module-input](item-thm-author-3af31ead36fb-serre-module-input)


## Statement
Assume the Axiom of Choice. Let $X$ be a nonempty noetherian affine scheme of finite dimension $d\geq0$, and let $E$ be a vector bundle of constant rank $r>d$. Then $E\cong\mathcal O_X\oplus E_1$ for a vector bundle $E_1$ of rank $r-1$. More precisely, iteration gives $E\cong\mathcal O_X^{\oplus(r-d)}\oplus F$ for a vector bundle $F$ of rank $d$, hence at most $d$. On the empty affine scheme the corresponding splitting assertion is immediate because all sheaves of modules are zero.

A vector bundle means a finite locally free sheaf, and constant rank $r$ means that its local free rank is $r$ at every point. The dimension of $X$ is the supremum of the lengths of strict chains of irreducible closed subsets.

## Facts & Assumptions

**Given:** $X$, $d$, $E$, $r$, and the Axiom of Choice as in the statement.

**Goal:** Split off a trivial line and iterate down to rank $d$.

[A1] The assumed Axiom of Choice is used through the affine bundle–module equivalence in [F1] and its finite-projective and rank suppliers [F2]–[F4]. The iteration in [F6] is finite. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] The affine bundle–module equivalence preserves direct sums and rank. [lem-affine-bundle-module-interface](item-lem-affine-bundle-module-interface)

[F2] A finite projective module is finitely presented. [lem-author-3af31ead36fb-finite-projective-presentation](item-lem-author-3af31ead36fb-finite-projective-presentation)

[F3] For a nonzero noetherian ring of finite dimension $d$, the maximal spectrum is noetherian and has dimension at most $d$. [lem-author-3af31ead36fb-max-spectrum-dimension](item-lem-author-3af31ead36fb-max-spectrum-dimension)

[F4] The global sections of a rank-$r$ affine bundle form a finite projective module whose localizations at primes are free of rank $r$. [lem-author-3af31ead36fb-local-rank](item-lem-author-3af31ead36fb-local-rank)

[F5] A free rank-one complement of a finite projective constant-rank module is finite projective of rank one less. [lem-author-3af31ead36fb-split-complement](item-lem-author-3af31ead36fb-split-complement)

[F6] A criterion splitting a free line from every finite projective module of rank greater than $d$ iterates down to rank $d$. [lem-author-3af31ead36fb-iteration](item-lem-author-3af31ead36fb-iteration)

[F7] The imported Serre module theorem applies to a finitely presented module when the maximal spectrum is noetherian of finite dimension $e$ and every maximal localization has a free direct summand of rank greater than $e$. [thm-author-3af31ead36fb-serre-module-input](item-thm-author-3af31ead36fb-serre-module-input)

## Proof

1.1 Write $X=\operatorname{Spec}A$. Since $X$ is nonempty, $A$ is nonzero. The ring $A$ is noetherian and its Krull dimension is $d$: irreducible closed subsets of an affine spectrum are the sets $V(\mathfrak p)$ for prime ideals, with inclusion reversed. By [F3], its maximal spectrum is noetherian of some finite dimension $e\leq d$. [F3, given]

2.1 Let $P$ be any finite projective $A$-module of constant rank $s>d$. It is finitely presented by [F2]. At each maximal ideal its localization is free of rank $s$, so it has a free direct summand of rank $s>e$. The imported theorem [F7] therefore gives $P\cong A\oplus P'$. Thus the hypothesis of [F6] holds for this ring and $d$. [F2, F7, given, step 1.1]

3.1 The module $P=\Gamma(X,E)$ is finite projective of constant rank $r$ by [F4]. Applying step 2.1 gives a decomposition $P\cong A\oplus P'$; [F5] makes $P'$ finite projective of rank $r-1$. The equivalence [F1] turns this into $E\cong\mathcal O_X\oplus E_1$ with $E_1$ a rank-$(r-1)$ bundle. [A1, F1, F4, F5, step 2.1]

4.1 By [F6] and step 2.1, $P\cong A^{r-d}\oplus Q$ with $Q$ finite projective of rank $d$. Applying [F1] yields the asserted bundle decomposition. On the empty scheme every sheaf of modules is the zero sheaf, so the stated empty-case splitting is immediate. [F1, F6, step 2.1, step 3.1] ∎
