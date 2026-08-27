---
id: thm-an-abelian-category-is-balanced
kind: theorem
title: "An abelian category is balanced"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [prop-the-kernel-of-a-monomorphism-is-zero-and-the-cokernel-of-an-epimorphism-is-zero, prop-the-cokernel-of-a-zero-morphism-out-of-the-zero-object-is-an-isomorphism, thm-the-canonical-morphism-from-the-coimage-to-the-image-exists-and-is-unique, def-abelian-category]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Junhan Tan, The Freyd-Mitchell Embedding Theorem, Theorem 2.4"
      url: "https://arxiv.org/pdf/1901.08591"
    - title: "The Stacks Project, Section 12.5, Lemma 12.5.2"
      url: "https://stacks.math.columbia.edu/tag/00ZX"
pipeline_run: frontier-21
---

## Statement

If $f:A\to B$ in an abelian category is both monic and epic, then $f$ is an
isomorphism.

## Facts & Assumptions

**Given:** An abelian category and a morphism $f:A\to B$ that is both monic and
epic.

[L1] The kernel of a monomorphism is zero, and the cokernel of an epimorphism
is zero
([[prop-the-kernel-of-a-monomorphism-is-zero-and-the-cokernel-of-an-epimorphism-is-zero]]).

[L2] The cokernel of $0\to A$ is $A$, and the kernel of $B\to0$ is $B$
([[prop-the-cokernel-of-a-zero-morphism-out-of-the-zero-object-is-an-isomorphism]]).

[L3] Every morphism has a canonical factorization
$A\to\operatorname{coim}(f)\to\operatorname{im}(f)\to B$
([[thm-the-canonical-morphism-from-the-coimage-to-the-image-exists-and-is-unique]]).

[L4] In an abelian category the canonical map
$\operatorname{coim}(f)\to\operatorname{im}(f)$ is an isomorphism
([[def-abelian-category]]).

## Proof

**Proof technique:** direct.

1.1 Because $f$ is monic and epic, [L1] identifies $\ker(f)$ and $\operatorname{coker}(f)$ with zero objects. Hence [L2] gives isomorphisms $q_f:A\overset{\sim}\longrightarrow\operatorname{coim}(f)$ and $i_f:\operatorname{im}(f)\overset{\sim}\longrightarrow B$ for the coimage projection and image inclusion of $f$. [L1, L2, L3]

2.1 By [L4], the middle map $\overline f:\operatorname{coim}(f)\to\operatorname{im}(f)$ is an isomorphism. Since $f=i_f\overline f q_f$, step 1.1 shows that $f$ is a composite of three isomorphisms, so $f$ itself is an isomorphism. [L3, L4, step 1.1] ∎
