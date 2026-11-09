---
id: def-derived-sections-on-sites
kind: definition
title: Derived global sections on a scheme site
status: published
domain: mathematics
deps:
  - math:def-axiom-of-choice
  - def-scheme-sites-and-sheafification
  - lem-author-a44f2061570d-site-derived-input
  - lem-author-a44f2061570d-nonnegative-resolution
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  def-scheme-sites-and-sheafification: mathematical-premise
  lem-author-a44f2061570d-site-derived-input: mathematical-premise
  lem-author-a44f2061570d-nonnegative-resolution: mathematical-premise
provenance:
  statement: ai-generated
  proof: not-applicable
dependency_level: 11
---

## Definition
Assume the Axiom of Choice and fixed universe size bounds. For each $\tau\in\{\mathrm{Nis},\mathrm{cdh},\mathrm{et}\}$, fix a small scheme site $\mathcal C_\tau$ equipped with the indicated Nisnevich, cdh, or étale topology, and an object represented by the scheme $X$. The choice of site and topology is part of the data; these names alone do not identify a big site with a small one.

An abelian sheaf is a contravariant functor from the site to abelian groups whose underlying set-valued presheaf satisfies the sheaf condition. Let $D(\operatorname{Ab}(\mathcal C_\tau))$ be its unbounded derived category: complexes are localized at the chain maps inducing isomorphisms on all cohomology sheaves. For $C$ in this category define $R\Gamma_\tau(X,C)$ as the right derived functor of evaluation at $X$, with value in the derived category $D(\operatorname{Ab})$ of complexes of abelian groups. Concretely, for a representative complex choose a quasi-isomorphism to a K-injective complex $I^\bullet$ and take the derived-category class of $I^\bullet(X)$. K-injective means that every chain map from an acyclic complex to $I^\bullet$ is chain-homotopic to zero. Set $H^n_\tau(X,C)=H^n(R\Gamma_\tau(X,C))$, where $H^n$ is the kernel of the degree-$n$ differential modulo the preceding image.

For an ordinary abelian sheaf $F$ regarded as a complex concentrated in degree zero, $H^n_\tau(X,F)=0$ for $n<0$. This convention does not assert a comparison between the three topologies or an identification between sheafification and derived localization.

## Definition references
[[def-scheme-sites-and-sheafification]]

[[lem-author-a44f2061570d-site-derived-input]]

## Justification
The already stated Choice premise is inherited by the selected K-injective construction and its derived evaluation. [[math:def-axiom-of-choice]]

The chosen site and object make evaluation meaningful, and the size bounds specify the ambient categories. [[lem-author-a44f2061570d-site-derived-input]] supplies the abelian category, existence and choice-independent derived-functor interpretation of K-injective evaluation, and a nonnegative injective resolution computing the value for $F[0]$. Applying [[lem-author-a44f2061570d-nonnegative-resolution]] to that resolution proves the negative-degree assertion. These inputs apply to each chosen topology separately; no comparison among them is used.
