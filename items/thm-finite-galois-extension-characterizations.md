---
id: thm-finite-galois-extension-characterizations
kind: theorem
title: "Equivalent characterizations of a finite Galois extension"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-finite-galois-extension-and-galois-group, thm-artin-fixed-field-degree-theorem, prop-finitely-generated-normal-extensions-are-splitting-fields, def-polynomials-that-split-and-splitting-fields, prop-endomorphisms-of-a-splitting-field-permute-its-roots, thm-finite-extension-is-separable-iff-separable-degree-is-full, thm-extension-generated-by-separable-elements-is-separable, thm-tower-law-for-finite-field-extensions, thm-relative-automorphism-group-and-separable-degree-bound, def-separable-degree]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Theorem 3.10"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
    - title: "K. Conrad, The Galois Correspondence, Theorem 4.1"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/galoiscorr.pdf"
pipeline_run: null
---

## Statement

Let $K/F$ be a finite extension and put $G=\operatorname{Aut}(K/F)$. The following conditions are equivalent:

1. $K/F$ is Galois, that is, normal and separable.
2. $K$ is the splitting field over $F$ of a separable polynomial.
3. $|G|=[K:F]$.
4. $K^G=F$.

In particular, a finite extension is Galois if and only if it is the splitting field of a separable polynomial.

## Facts & Assumptions

**Given:** A finite extension $K/F$ and $G=\operatorname{Aut}(K/F)$; splitting fields as in [[def-polynomials-that-split-and-splitting-fields]]; the facts that endomorphisms of a splitting field permute its roots ([[prop-endomorphisms-of-a-splitting-field-permute-its-roots]]), $K/F$ is separable exactly when $[K:F]_s=[K:F]$ ([[thm-finite-extension-is-separable-iff-separable-degree-is-full]]), and finite degrees multiply in towers ([[thm-tower-law-for-finite-field-extensions]]); the separable degree $[K:F]_s$ is the number of $F$-embeddings of $K$ into an algebraic closure of $F$ ([[def-separable-degree]]).

[L1] If $H$ is a finite group of automorphisms of a field $L$, then $[L:L^H]=|H|$ and $\operatorname{Aut}(L/L^H)=H$ ([[thm-artin-fixed-field-degree-theorem]]).

[L2] If $E/F$ is normal and $E=F(\alpha_1,\ldots,\alpha_m)$, then $E$ is the splitting field of the product of the minimal polynomials of the generators; for $m=0$ the product is $1$ and $E=F$ ([[prop-finitely-generated-normal-extensions-are-splitting-fields]]).

[L3] If $K/F$ is algebraic and $K=F(S)$ for a set $S$ of elements separable over $F$, then $K/F$ is separable ([[thm-extension-generated-by-separable-elements-is-separable]]).

[L4] For every field extension $K/F$ composition makes $\operatorname{Aut}(K/F)$ a group, and if $K/F$ is finite then $|\operatorname{Aut}(K/F)|\le [K:F]_s\le [K:F]$; in particular the relative automorphism group is finite ([[thm-relative-automorphism-group-and-separable-degree-bound]]).

## Proof

**Proof technique:** direct.

1.1 For the implication from condition 1 to condition 2, choose a finite generating family for $K/F$. By [L2], normality makes $K$ the splitting field of the product of their distinct minimal polynomials; separability makes each factor separable, so their distinct product is separable. If $K=F$, the empty product $1$ has splitting field $F$. [L2, given]

1.2 For the implication from condition 2 to condition 3, let $K$ be the splitting field of the separable $f\in F[x]$. Then $K$ is generated over $F$ by the roots of $f$, and the minimal polynomial of each root divides $f$ and therefore has no repeated root, so every generator is separable over $F$; by [L3], $K/F$ is separable and the full-degree criterion in the Given gives $[K:F]_s=[K:F]$. Every $F$-embedding of $K$ into an algebraic closure permutes the roots of $f$ and hence maps $K$ onto itself, so the $[K:F]_s$ embeddings are precisely the elements of $G$ and $|G|=[K:F]$. [given, L3]

1.3 For the implication from condition 3 to condition 4, [L1] gives $[K:K^G]=|G|=[K:F]$. Since $F\subseteq K^G\subseteq K$, the tower law forces $[K^G:F]=1$, hence $K^G=F$. [L1, given]

2.1 For the implication from condition 4 to condition 1, [L4] makes $G$ finite, so [L1] applies to $H=G$ and gives $[K:K^G]=|G|$; with $K^G=F$ this reads $|G|=[K:F]$. The bound in [L4] then gives $[K:F]=|G|\le [K:F]_s\le [K:F]$, so $[K:F]_s=[K:F]$ and the full-degree criterion in the Given makes $K/F$ separable. For $\alpha\in K$, the orbit polynomial $q_\alpha(x)=\prod_{\beta\in G\alpha}(x-\beta)$ has distinct roots in $K$ and coefficients fixed by $G$, hence in $K^G=F$. The minimal polynomial of $\alpha$ divides $q_\alpha$, while every orbit element is one of its roots; separability makes $q_\alpha$ divide that minimal polynomial. They are therefore equal, so every minimal polynomial over $F$ splits in $K$ and $K/F$ is normal. This also covers $\alpha=0$ and the degree-one extension. [L1, L4, given, algebra] ∎
