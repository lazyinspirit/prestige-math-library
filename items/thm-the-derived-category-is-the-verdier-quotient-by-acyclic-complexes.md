---
id: "thm-the-derived-category-is-the-verdier-quotient-by-acyclic-complexes"
kind: "theorem"
title: "The derived category is the verdier quotient by acyclic complexes"
deps: ["thm-the-derived-category-inherits-a-triangulated-structure", "prop-a-complex-is-zero-in-the-derived-category-exactly-when-it-is-acyclic", "thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic", "prop-the-full-subcategory-of-acyclic-complexes-is-thick-in-the-homotopy-category", "thm-long-exact-hom-sequences-of-a-distinguished-triangle"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://stacks.math.columbia.edu/tag/05RI"
      title: "Definition 13.6.7, specialized to acyclic complexes"
provenance:
  statement: ai-altered
  proof: ai-altered
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Let $K_{\mathrm{ac}}(\mathcal A)$ be the thick full subcategory of acyclic complexes. Define its Verdier quotient here by inverting maps whose cones are acyclic. Under the standing size assumption this quotient is $D(\mathcal A)$. An exact functor $F:K(\mathcal A)\to\mathcal T$ annihilating acyclic complexes factors uniquely through an exact functor $\overline F:D(\mathcal A)\to\mathcal T$; conversely any such factorization annihilates acyclics. The kernel of $Q$ is exactly $K_{\mathrm{ac}}(\mathcal A)$.

## Facts & Assumptions

**Given:** Let $K_{\mathrm{ac}}(\mathcal A)$ be the thick full subcategory of acyclic complexes. Define its Verdier quotient here by inverting maps whose cones are acyclic. Under the standing size assumption this quotient is $D(\mathcal A)$. An exact functor $F:K(\mathcal A)\to\mathcal T$ annihilating acyclic complexes factors uniquely through an exact functor $\overline F:D(\mathcal A)\to\mathcal T$; conversely any such factorization annihilates acyclics. The kernel of $Q$ is exactly $K_{\mathrm{ac}}(\mathcal A)$.

[F1] The acyclic complexes form a thick full subcategory of the homotopy category ([[prop-the-full-subcategory-of-acyclic-complexes-is-thick-in-the-homotopy-category]]).

[F2] A map is a quasi-isomorphism exactly when its cone is acyclic ([[thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic]]).

[F3] The derived category is triangulated and its localization functor is exact ([[thm-the-derived-category-inherits-a-triangulated-structure]]).

[F4] A complex is zero in the derived category exactly when it is acyclic ([[prop-a-complex-is-zero-in-the-derived-category-exactly-when-it-is-acyclic]]).

[F5] Both representable Hom sequences of a distinguished triangle are exact ([[thm-long-exact-hom-sequences-of-a-distinguished-triangle]]).

## Proof

1.1 The acyclic subcategory is thick, and a map has acyclic cone exactly when it is a quasi-isomorphism. Thus the indicated quotient inverts precisely the denominators used to construct $D(\mathcal A)$, with its proved triangulation. Its kernel is precisely the complexes with zero cohomology, including the zero complex. [F1, F2, F3, F4]

2.1 If exact $F$ kills acyclics, a denominator triangle becomes $F(X)\xrightarrow {F(s)}F(Y)\to0\to F(X)[1]$. Hom exactness implies $\operatorname{Hom}(W,F(s))$ is bijective for every $W$. Taking $W=F(Y)$ supplies a right inverse; injectivity at $W=F(X)$ shows it is also a left inverse. Thus $F(s)$ is invertible and localization gives a unique factorization. [F5, step 1.1, algebra]

3.1 Its additivity follows from the common-denominator sum formula and additivity of $F$. The shift comparison descends by naturality for inverse denominators. Each distinguished triangle is an isomorphic image of a $K$ triangle, so its image under $\overline F$ is distinguished because $F$ is exact. Conversely any exact factor through $Q$ takes an acyclic to the image of a zero object, hence to zero. [F3, step 1.1, step 2.1, algebra] ∎
