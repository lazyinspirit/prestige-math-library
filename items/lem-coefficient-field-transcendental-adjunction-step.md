---
id: lem-coefficient-field-transcendental-adjunction-step
kind: lemma
title: "Transcendental residue elements adjoin across a maximal subfield"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-maximal-residue-injective-subfield, def-equicharacteristic-local-ring-and-coefficient-field]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Melvin Hochster, The structure theory of complete local rings"
      url: "https://sites.lsa.umich.edu/hochster/wp-content/uploads/sites/1337/2026/04/Structure.pdf"
pipeline_run: null
---

## Statement

Let $(A,\mathfrak m)$ be a local ring, let $K \subseteq A$ be a residue-injective
subfield, and let $\overline u \in A/\mathfrak m$ be transcendental over the
residue image $\rho(K)$. Then there exists a larger residue-injective subfield
$K' \subseteq A$ whose residue image contains $\overline u$.

## Facts & Assumptions

**Given:** A local ring $(A,\mathfrak m)$, a residue-injective subfield
$K \subseteq A$, and a residue element $\overline u$ transcendental over
$\rho(K)$.

[L1] A coefficient-field argument enlarges a residue-injective subfield by
adjoining new residue elements when injectivity is preserved
([[lem-maximal-residue-injective-subfield]]).

[L2] The residue image of a subfield is a field inside the residue field
([[def-equicharacteristic-local-ring-and-coefficient-field]]).

## Proof

**Proof technique:** evaluate rational functions at a lift of the transcendental residue element.

1.1 Choose any lift $u \in A$ of $\overline u$. For every nonzero polynomial $q(T) \in K[T]$, the residue of $q(u)$ is $q(\overline u) \in \rho(K)(\overline u)$. Since $\overline u$ is transcendental over $\rho(K)$, this residue is nonzero, so $q(u) \notin \mathfrak m$ and therefore is a unit of $A$. [L2, given, choose]

2.1 Hence evaluation at $u$ defines an injective homomorphism $$K(T) \longrightarrow A, \qquad r(T) \longmapsto r(u),$$ because every denominator evaluates to a unit by step 1.1. Let $K'$ be its image. Then $K'$ is a subfield of $A$, and its residue image contains $\rho(K)$ together with $\overline u$. [step 1.1, given, construct]

3.1 If an element of $K'$ has zero residue, its representing rational function has zero value at the transcendental element $\overline u$, so the rational function is zero. Thus the residue map is injective on $K'$. By [L1], this is exactly the desired enlargement step. [L1, step 2.1, algebra]

4.1 Therefore every transcendental residue element adjoins across a maximal residue-injective subfield. [step 3.1] ∎
