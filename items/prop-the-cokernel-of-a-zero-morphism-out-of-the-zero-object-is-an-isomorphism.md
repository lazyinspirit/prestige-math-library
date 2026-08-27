---
id: prop-the-cokernel-of-a-zero-morphism-out-of-the-zero-object-is-an-isomorphism
kind: proposition
title: "The cokernel of the zero map out of the zero object is the target, and dually for kernels"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-initial-terminal-and-zero-object, def-kernels-and-cokernels-as-equalizers-and-coequalizers]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, VIII.1"
      url: "https://link.springer.com/book/10.1007/978-1-4757-4721-8"
pipeline_run: frontier-21
---

## Statement

Let $0$ be a zero object in a category with zero morphisms and kernels and
cokernels. For every object $A$, the identity $1_A:A\to A$ is a cokernel of the
zero morphism $0\to A$. Dually, $1_A$ is a kernel of the zero morphism
$A\to0$.

So $\operatorname{coker}(0\to A)\cong A$ and $\ker(A\to0)\cong A$.

## Facts & Assumptions

**Given:** A zero object $0$ and an object $A$.

[L1] There is a unique morphism $0\to A$ and a unique morphism $A\to0$
([[def-initial-terminal-and-zero-object]]).

[L2] A cokernel of $u$ is a morphism $q$ with $qu=0$ through which every
morphism annihilating $u$ factors uniquely, and a kernel is dual
([[def-kernels-and-cokernels-as-equalizers-and-coequalizers]]).

## Proof

**Proof technique:** direct.

1.1 Let $u:0\to A$ be the unique map from [L1]. Since every composite $h\circ u:0\to X$ equals the unique map $0\to X$, every morphism $h:A\to X$ annihilates $u$. Each such $h$ factors uniquely through $1_A$, namely as $h=h\circ1_A$. Therefore $1_A$ is a cokernel of $u$. [L1, L2]

2.1 The dual argument with the unique map $A\to0$ shows that $1_A$ is also a kernel of $A\to0$. So both displayed identifications hold up to the unique compatible isomorphism of kernels and cokernels. [L1, L2, step 1.1] ∎
