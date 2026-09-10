---
id: thm-third-isomorphism-theorem-in-an-abelian-category
kind: theorem
title: "Third isomorphism theorem in an abelian category"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-the-quotient-of-an-object-by-a-subobject, thm-the-quotient-is-independent-of-the-representing-monomorphism, thm-first-isomorphism-theorem-in-an-abelian-category, cor-equalizers-are-monic-and-coequalizers-are-epic, thm-every-monomorphism-is-the-kernel-of-its-cokernel]
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

[L4] Every monomorphism in an abelian category is a kernel of its cokernel ([[thm-every-monomorphism-is-the-kernel-of-its-cokernel]]).

## Proof

**Proof technique:** direct.

1.1 Let $q_C:A\to A/C$ and $q_B:A\to A/B$ be the quotient maps from [L1]. Since $q_Bbc=0$, the morphism $q_B$ kills $C$, so the universal property of $q_C$ gives a unique map $\overline q:A/C\to A/B$ with $\overline q\,q_C=q_B$. [L1]

1.2 The composite $bc$ is monic: equality $bcu=bcv$ implies $cu=cv$ and then $u=v$. By [L4], $bc$ is therefore a kernel of its cokernel $q_C$. If $h:X\to B$ satisfies $q_Cbh=0$, there is a unique $t:X\to C$ with $bct=bh$. Monicity of $b$ gives $ct=h$, and monicity of $c$ gives uniqueness. Since $q_Cbc=0$, this proves that $c$ is a kernel of $q_Cb$. [given, L1, L4]

2.1 Let $p:B\to B/C$ be the cokernel of $c$. By [L2], the canonical image factorization of $q_Cb$ gives a monomorphism $\widetilde b:B/C\to A/C$ satisfying $\widetilde b p=q_Cb$. Since $p$ is epic by [L3] and $\overline q\widetilde b p=q_Bb=0$, we have $\overline q\widetilde b=0$. [L1, L2, L3, step 1.1, step 1.2]

3.1 If $r:A/C\to Y$ satisfies $r\widetilde b=0$, then $rq_Cb=r\widetilde b p=0$. The cokernel property of $q_B$ gives a unique $s:A/B\to Y$ with $sq_B=rq_C$. Since $q_B=\overline q q_C$ and $q_C$ is epic, $s\overline q=r$. Conversely, any $s$ satisfying this last equality satisfies $sq_B=rq_C$, proving uniqueness. Thus $\overline q$ is a cokernel of $\widetilde b$, and [L1] identifies $(A/C)/(B/C)$ canonically with $A/B$. [L1, L3, step 1.1, step 2.1] ∎
