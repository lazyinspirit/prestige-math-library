---
id: lem-ray-class-congruence-subgroup-well-defined
kind: lemma
title: "The ray congruence principal ideals form a subgroup"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-global-field-modulus
  - def-number-field
  - def-ring-of-integers-of-a-number-field
  - def-fractional-ideal
  - def-global-field
  - def-place-of-a-global-field
  - def-completion-of-a-global-field-at-a-place
  - def-local-field-valuation-ring-uniformizer-and-residue-field
  - def-prime-ideal-valuations-on-fractional-ideals
  - def-archimedean-embeddings-and-number-field-signature
  - def-group-homomorphism
dependency_level: 4
proof_strategy: direct
axiom_use: >-
  The subgroup proof uses no choice principle.
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, version 4.03"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Chapter V §1, Definition 1.3 and ray-principal subgroup, printed pp.149–150."

---

## Statement

Let $K$ be a number field and let $\mathfrak m=(\mathfrak m_0,S_\infty)$ be a modulus. Define $K_{\mathfrak m,1}$ to consist of the elements $\alpha\in K^\times$ satisfying $v_{\mathfrak p}((\alpha))=0$ and $v_{\mathfrak p}((\alpha-1))\ge n_{\mathfrak p}$ at every finite prime $\mathfrak p\mid\mathfrak m_0$, and $\sigma(\alpha)>0$ at every $\sigma\in S_\infty$. Then $K_{\mathfrak m,1}$ is a subgroup of $K^\times$, and its principal-ideal image is a subgroup of the fractional ideals coprime to $\mathfrak m_0$.

## Statement references

[[def-place-of-a-global-field|Finite-place valuations]]

[[def-prime-ideal-valuations-on-fractional-ideals|Prime-ideal valuations]]

[J. S. Milne, Chapter V §1](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

## Facts & Assumptions

**Given:** A number field $K$, a modulus $\mathfrak m$, and the explicitly defined set $K_{\mathfrak m,1}$ in the Statement.

[F1] At every finite prime dividing $\mathfrak m_0$, the exponent $n_{\mathfrak p}$ is at least $1$; the modulus records these exponents and the selected real embeddings. ([[def-global-field-modulus]])

[F2] At each finite place, the valuation is nonarchimedean; if $v(\alpha-1)>0$, then $v(\alpha)=0$, and $v(x+y)\ge\min(v(x),v(y))$. ([[def-place-of-a-global-field]], [[def-completion-of-a-global-field-at-a-place]], [[def-local-field-valuation-ring-uniformizer-and-residue-field]])

[F3] A real embedding is a field homomorphism into $\mathbb R$, so it preserves products and inverses. ([[def-archimedean-embeddings-and-number-field-signature]])

[F4] The principal-ideal map is multiplicative: $(\alpha\beta)=(\alpha)(\beta)$ and $(\alpha^{-1})=(\alpha)^{-1}$. ([[def-fractional-ideal]])

## Proof


**Given:** The data in the Statement.

1.1 The element $1$ satisfies every finite congruence and every selected positivity condition, so $1\in K_{\mathfrak m,1}$. If $\alpha,\beta\in K_{\mathfrak m,1}$, then at each $\mathfrak p\mid\mathfrak m_0$, [F2] gives $v_{\mathfrak p}(\alpha)=v_{\mathfrak p}(\beta)=0$ and $\alpha\beta-1=(\alpha-1)\beta+(\beta-1)$ has valuation at least $n_{\mathfrak p}$. At each selected real embedding, $\sigma(\alpha\beta)>0$. Hence $\alpha\beta\in K_{\mathfrak m,1}$. [F1, F2, F3, given, algebra]

2.1 For $\alpha\in K_{\mathfrak m,1}$, at every finite prime in the modulus $\alpha^{-1}-1=-(\alpha-1)/\alpha$ has valuation at least $n_{\mathfrak p}$ because $v_{\mathfrak p}(\alpha)=0$. At each selected real embedding, $\sigma(\alpha^{-1})>0$. Thus $\alpha^{-1}\in K_{\mathfrak m,1}$. Together with the identity and product closure in step 1.1, inverse closure proves $K_{\mathfrak m,1}\le K^\times$. [F1, F2, F3, step 1.1, algebra]

3.1 For $\alpha\in K_{\mathfrak m,1}$, the finite-prime valuations of $(\alpha)$ vanish at every $\mathfrak p\mid\mathfrak m_0$, so $(\alpha)$ is coprime to $\mathfrak m_0$. By [F4], $\alpha\mapsto(\alpha)$ is a group homomorphism; its image of the subgroup from step 2.1 is therefore a subgroup of the fractional ideals coprime to $\mathfrak m_0$. [F1, F4, step 2.1] ∎

