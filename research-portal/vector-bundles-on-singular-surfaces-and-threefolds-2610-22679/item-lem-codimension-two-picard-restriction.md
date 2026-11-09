---
title: Line bundles are detected off codimension two
status: published
research_item: lem-codimension-two-picard-restriction
dependency_level: 3
---

PDF p. 10: Injectivity of Picard restriction in Lemma 5.2

## Prerequisites

- [lem-codimension-two-extension](item-lem-codimension-two-extension)
- [math:def-picard-group-scheme](https://alphabetamath.cc/item/def-picard-group-scheme)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Statement
Assume the Axiom of Choice. Let $X$ be a noetherian normal scheme and let $j:U\hookrightarrow X$ be an open immersion whose image contains every point of codimension at most one in its irreducible component. Then restriction $\operatorname{Pic}(X)\to\operatorname{Pic}(U)$ is injective. More precisely, a trivialization $\mathcal O_U\xrightarrow{\sim}\mathcal L|_U$ of a line bundle $\mathcal L$ determines a section of $\mathcal L|_U$ and an inverse section of its dual; both extend uniquely to $X$, and their evaluation product is $1$.

A noetherian normal scheme is a scheme with a finite cover by spectra of noetherian rings and with all local rings integrally closed domains. The codimension of a point in its irreducible component is the supremum of the lengths of chains of strict specializations from the component's generic point to that point. A line bundle is an $\mathcal O_X$-module locally isomorphic to $\mathcal O_X$; its dual is $\mathcal L^\vee=\mathcal Hom_{\mathcal O_X}(\mathcal L,\mathcal O_X)$. The Picard group consists of isomorphism classes of line bundles, with tensor product as its operation and $[\mathcal O_X]$ as identity. Restriction sends a class to the class of its restriction.

## Statement references

[lem-codimension-two-extension](item-lem-codimension-two-extension)

[math:def-picard-group-scheme](https://alphabetamath.cc/item/def-picard-group-scheme)

## Facts & Assumptions

[F1] Under the stated hypotheses and the Axiom of Choice, restriction is an isomorphism of sheaves of rings $\mathcal O_X\xrightarrow{\sim}j_*\mathcal O_U$ ([lem-codimension-two-extension](item-lem-codimension-two-extension)).

[F2] The Picard group has the stated tensor-product law, identity and dual inverses ([math:def-picard-group-scheme](https://alphabetamath.cc/item/def-picard-group-scheme)).

[A1] The Axiom of Choice is assumed as required by [F1] ([math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)).

## Proof

**Given:** $X$, $U$ and $j$ as in the statement, the Axiom of Choice, and a line bundle $\mathcal L$ on $X$.

**Goal:** Extend a trivialization on $U$ as stated and prove injectivity of restriction on Picard groups.

1.1 For any line bundle $\mathcal M$ on $X$, the natural restriction morphism $\mathcal M\to j_*(\mathcal M|_U)$ is an isomorphism. Indeed, on every open set $V$ where $\mathcal M\cong\mathcal O_V$, it identifies with the restriction of the isomorphism in [F1] to $V$. Such opens cover $X$, and a morphism of sheaves that is an isomorphism locally is an isomorphism: its local inverses agree on overlaps and glue. In particular, sections of $\mathcal M|_U$ extend uniquely to sections of $\mathcal M$ on $X$. The dual $\mathcal L^\vee$ is also a line bundle, since the dual of a local copy of $\mathcal O_X$ is a local copy of $\mathcal O_X$. [F1, A1, given]

2.1 Suppose $\phi:\mathcal O_U\xrightarrow{\sim}\mathcal L|_U$ is a trivialization. Set $s_U=\phi(1)$ and let $t_U$ be the section of $\mathcal L^\vee|_U$ corresponding to $\phi^{-1}$; thus $t_U(s_U)=1$. By step 1.1, these sections extend uniquely to $s\in\Gamma(X,\mathcal L)$ and $t\in\Gamma(X,\mathcal L^\vee)$. The evaluation $t(s)$ restricts to $1$ on $U$, so [F1] implies $t(s)=1$ on $X$. Locally write $s=a e$ and $t=b e^\vee$ in a basis $e$ and its dual. Then $ba=1$, so the maps $\mathcal O_X\to\mathcal L$, $1\mapsto s$, and $\mathcal L\to\mathcal O_X$ defined by $t$ are inverse isomorphisms locally, hence globally. [F1, step 1.1, construct]

3.1 Restriction respects tensor products and the identity by their local constructions, so it is a homomorphism of the Picard groups in [F2]. If a class restricts to the identity, its representative admits a trivialization on $U$; step 2.1 makes that representative trivial on $X$. Thus the kernel is trivial, and the restriction homomorphism is injective. [F2, step 2.1] ∎
