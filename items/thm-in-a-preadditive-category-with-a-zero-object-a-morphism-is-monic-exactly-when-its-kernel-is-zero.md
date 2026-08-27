---
id: thm-in-a-preadditive-category-with-a-zero-object-a-morphism-is-monic-exactly-when-its-kernel-is-zero
kind: theorem
title: "In a preadditive category with a zero object, a morphism is monic exactly when its kernel is zero"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-preadditive-category, thm-in-a-preadditive-category-an-object-is-initial-exactly-when-it-is-terminal, prop-the-zero-morphism-of-a-preadditive-category-is-the-neutral-element-of-its-hom-group, def-monomorphism-and-epimorphism, def-kernels-and-cokernels-as-equalizers-and-coequalizers]
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
    - title: "The Stacks Project, Section 12.3: Preadditive and additive categories"
      url: "https://stacks.math.columbia.edu/tag/09SE"
pipeline_run: frontier-20
---

## Statement

Let $f:A\to B$ be a morphism in a preadditive category with a zero object, and
let $k:K\to A$ be a kernel of $f$. Then $f$ is monic if and only if the kernel
object $K$ is a zero object, equivalently the kernel arrow is the unique zero
morphism into $A$.

## Facts & Assumptions

**Given:** A morphism $f:A\to B$ with kernel $k:K\to A$ in a preadditive
category with a zero object.

[L1] Monic means left-cancellable ([[def-monomorphism-and-epimorphism]]).

[L2] A kernel is an equalizer of $f$ and the zero morphism
([[def-kernels-and-cokernels-as-equalizers-and-coequalizers]]).

[L3] In this setting, the published zero morphism is the additive identity of
the hom-group ([[prop-the-zero-morphism-of-a-preadditive-category-is-the-neutral-element-of-its-hom-group]]).

[L4] In a preadditive category, initial and terminal objects coincide
([[thm-in-a-preadditive-category-an-object-is-initial-exactly-when-it-is-terminal]]).

[L5] Hom-sets in a preadditive category are abelian groups
([[def-preadditive-category]]).

## Proof

**Proof technique:** direct.

1.1 Assume $f$ is monic. Since $k$ is a kernel, [L2] gives $fk=0=f0_{K,A}$. By monicity and [L1], one has $k=0_{K,A}$. Now $k1_K=k=0=k0_{K,K}$, and both $1_K$ and $0_{K,K}$ satisfy the kernel factorization condition for the morphism $k:K\to A$. The kernel universal property from [L2] therefore makes them equal. So $1_K=0_{K,K}$, which makes $K$ initial and hence also terminal by [L4]. Thus $K$ is a zero object. [L1, L2, L3, L4]

1.2 Conversely, assume $K$ is a zero object, so $k$ is the unique zero morphism into $A$ by [L3]. Let $u,v:X\to A$ satisfy $fu=fv$. Then $f(u-v)=fu-fv=0$ by the group law and bilinearity from [L5]. Since $k$ is a kernel, $u-v$ factors uniquely through $k$, hence through the zero object, so $u-v=0$. Therefore $u=v$, and $f$ is monic by [L1]. [L1, L2, L3, L5]

2.1 Therefore $f$ is monic exactly when its kernel is zero. [step 1.1, step 1.2] ∎
