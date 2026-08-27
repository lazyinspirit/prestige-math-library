---
id: thm-epimorphism-monomorphism-factorisation-exists-and-is-unique-up-to-unique-isomorphism
kind: theorem
title: "Every morphism factors as an epimorphism followed by a monomorphism, uniquely up to unique isomorphism"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-the-canonical-morphism-from-the-coimage-to-the-image-exists-and-is-unique, prop-the-coimage-projection-is-epic-and-the-image-inclusion-is-monic, def-abelian-category, thm-an-abelian-category-is-balanced, thm-every-monomorphism-is-the-kernel-of-its-cokernel]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, Proposition VIII.3.1"
      url: "https://link.springer.com/book/10.1007/978-1-4757-4721-8"
pipeline_run: frontier-21
---

## Statement

Every morphism $f:A\to B$ in an abelian category admits a factorization

$$A\overset{e_f}\longrightarrow I_f\overset{m_f}\longrightarrow B$$

with $e_f$ epic and $m_f$ monic. If also
$f=m'e'$ with $e'$ epic and $m'$ monic, then there is a unique isomorphism
$u:I_f\to I'$ such that

$$m'=m_fu^{-1},\qquad u\circ e_f=e'.$$

## Facts & Assumptions

**Given:** An abelian category and a morphism $f:A\to B$.

[L1] The canonical coimage-to-image map exists
([[thm-the-canonical-morphism-from-the-coimage-to-the-image-exists-and-is-unique]]).

[L2] The coimage projection is epic and the image inclusion is monic
([[prop-the-coimage-projection-is-epic-and-the-image-inclusion-is-monic]]).

[L3] In an abelian category the canonical coimage-to-image map is an
isomorphism ([[def-abelian-category]]).

[L4] Abelian categories are balanced
([[thm-an-abelian-category-is-balanced]]).

[L5] Every monomorphism is the kernel of its cokernel
([[thm-every-monomorphism-is-the-kernel-of-its-cokernel]]).

## Proof

**Proof technique:** direct.

1.1 Let $q_f:A\to\operatorname{coim}(f)$ and $i_f:\operatorname{im}(f)\to B$ be the defining maps. By [L1], $f$ factors as $f=i_f\overline f q_f$, and [L2] makes $q_f$ epic and $i_f$ monic. Since $\overline f$ is an isomorphism by [L3], the composite $e_f:=\overline f q_f:A\to\operatorname{im}(f)$ is epic, so $f=i_f e_f$ is an epic-monic factorization. [L1, L2, L3]

2.1 Suppose also $f=m'e'$ with $e'$ epic and $m'$ monic. Then $\operatorname{coker}(m')f=0$, so $\operatorname{coker}(m')i_f e_f=0$, and the epicity of $e_f$ gives $\operatorname{coker}(m')i_f=0$. Since $m'$ is a kernel of its cokernel by [L5], $i_f$ factors uniquely through $m'$ as $i_f=m'u$. Reversing the roles of $i_f$ and $m'$ gives $m'=i_fv$ for a unique $v$. [L2, L5, step 1.1]

3.1 From step 2.1 one gets $m'=m'uv$ and $i_f=i_fvu$, so monicity gives $uv=1$ and $vu=1$. Thus $u$ is an isomorphism. Finally, $m'ue_f=i_fe_f=f=m'e'$, and monicity of $m'$ gives $ue_f=e'$. Any other comparison map with the same property equals $u$ by the uniqueness in step 2.1. [L4, step 2.1] ∎
