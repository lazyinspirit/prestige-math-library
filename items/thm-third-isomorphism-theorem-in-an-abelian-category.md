---
id: thm-third-isomorphism-theorem-in-an-abelian-category
kind: theorem
title: "Third isomorphism theorem in an abelian category"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-the-quotient-of-an-object-by-a-subobject, thm-the-quotient-is-independent-of-the-representing-monomorphism, thm-first-isomorphism-theorem-in-an-abelian-category, cor-equalizers-are-monic-and-coequalizers-are-epic]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, VIII.3"
      url: "https://link.springer.com/book/10.1007/978-1-4757-4721-8"
pipeline_run: frontier-21
---

## Statement

Let $C\le B\le A$ be subobjects in an abelian category. Then there is a
canonical isomorphism

$$(A/C)/(B/C)\;\cong\;A/B.$$

## Facts & Assumptions

**Given:** Subobjects $C\le B\le A$ represented by monomorphisms $c:C\to B$ and $b:B\to A$.

[L1] Quotients by subobjects are well defined ([[def-the-quotient-of-an-object-by-a-subobject]], [[thm-the-quotient-is-independent-of-the-representing-monomorphism]]).

[L2] The first isomorphism theorem identifies a quotient by a kernel with the image ([[thm-first-isomorphism-theorem-in-an-abelian-category]]).

[L3] Every coequalizer, hence every cokernel, is epic ([[cor-equalizers-are-monic-and-coequalizers-are-epic]]).

## Proof

**Proof technique:** direct.

1.1 Let $q_C:A\to A/C$ and $q_B:A\to A/B$ be the quotient maps from [L1]. Since $q_Bbc=0$, the morphism $q_B$ kills $C$, so the universal property of $q_C$ gives a unique map $\overline q:A/C\to A/B$ with $\overline q\,q_C=q_B$. [L1]

1.2 The composite $q_C b:B\to A/C$ kills $C$, since $q_C b c=q_C(bc)=0$. Conversely, if $h:X\to B$ satisfies $q_C b h=0$, then $b h$ is killed by $q_C$, so the cokernel property of $q_C$ makes $b h$ factor through $b c$. Because $b$ is monic, $h$ factors through $c$. Thus $c:C\to B$ is a kernel of $q_C b$, and [L2] identifies the image of $q_C b$ with $B/C$. Let $\widetilde b:B/C\to A/C$ be the corresponding monic image inclusion. Then $\overline q\,\widetilde b=0$, because $\overline q q_C b=q_B b=0$. [L1, L2]

2.1 If $r:A/C\to Y$ satisfies $r\widetilde b=0$, then $r q_C b=0$, so $r q_C$ kills $B$. Since $q_B$ is the cokernel of $B\to A$, there is a unique $s:A/B\to Y$ with $s q_B=r q_C$. Using $q_B=\overline q\,q_C$ and the epicity of $q_C$ from [L3], one gets $s\overline q=r$. Thus $\overline q$ is the cokernel of $\widetilde b$, so by [L1] the quotient $(A/C)/(B/C)$ is canonically $A/B$. [L1, L3, step 1.1, step 1.2] ∎
