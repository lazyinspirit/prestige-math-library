---
id: lem-polynomials-and-roots-transport-along-field-isomorphisms
kind: lemma
title: 'A field isomorphism transports polynomials coefficientwise and carries roots, factorizations, and splitting to roots, factorizations, and splitting'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-field-homomorphism, thm-universal-property-of-a-polynomial-ring, def-polynomial-evaluation-and-root, def-polynomials-that-split-and-splitting-fields]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: 'T. Judson, Abstract Algebra: Theory and Applications, Section 21.2'
      url: 'https://judsonbooks.org/aata-files/aata-html/fields-section-splitting-fields.html'
pipeline_run: frontier-12
---

## Statement

Let $\tau:E\to E'$ be a field isomorphism carrying a subfield $F\subseteq E$ onto $F'\subseteq E'$, and write $\sigma=\tau|_F$. Then
$$ \sigma_*:F[x]\longrightarrow F'[x],\qquad \sum_i a_ix^i\longmapsto\sum_i\sigma(a_i)x^i $$
is a ring isomorphism, and for every $f\in F[x]$ and $\alpha\in E$,
$$ \tau(f(\alpha))=(\sigma_*f)(\tau(\alpha)). $$
Consequently $\tau$ carries roots of $f$ bijectively to roots of $\sigma_*f$, transports factorizations coefficientwise, and carries a splitting field of $f$ over $F$ to a splitting field of $\sigma_*f$ over $F'$.

## Facts & Assumptions

**Given:** An isomorphism $\tau:E\to E'$ with $\tau(F)=F'$ and restriction $\sigma:F\to F'$.

[F1] A coefficient homomorphism and the chosen image of $x$ determine a unique homomorphism of polynomial rings ([[thm-universal-property-of-a-polynomial-ring]]).

[F2] Polynomial evaluation is substitution into the coefficient sum, and a root is an element where that evaluation is zero ([[def-polynomial-evaluation-and-root]]).

[F3] A splitting field is generated over the base by all roots of a polynomial that splits there ([[def-polynomials-that-split-and-splitting-fields]]).

## Proof

**Proof technique:** direct.

1.1 Apply [F1] to $\sigma$ and the indeterminate $x\in F'[x]$. This gives $\sigma_*$ with the displayed coefficient formula. Applying the same construction to $\sigma^{-1}$ gives its inverse, so $\sigma_*$ is an isomorphism. [F1]

1.2 For $f=\sum_i a_ix^i$, the homomorphism laws give $\tau(f(\alpha))=\sum_i\sigma(a_i)\tau(\alpha)^i=(\sigma_*f)(\tau(\alpha))$. Thus $f(\alpha)=0$ if and only if $(\sigma_*f)(\tau(\alpha))=0$, because $\tau$ is injective. [F2, algebra]

2.1 Applying the construction of step 1.1 to $\tau$ gives a coefficientwise isomorphism $\tau_*:E[x]\to E'[x]$ extending $\sigma_*$. It transports every product factorisation and, in particular, a linear factorisation of $f$ to one of $\sigma_*f$. Since $\tau$ is bijective, step 1.2 gives a bijection of root sets, and $\tau(F(\text{roots of }f))=F'(\text{roots of }\sigma_*f)$. The splitting-field claim follows from [F3]. [F1, F3, step 1.1, step 1.2] ∎
