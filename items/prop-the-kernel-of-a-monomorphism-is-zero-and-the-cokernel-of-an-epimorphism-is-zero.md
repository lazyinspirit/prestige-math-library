---
id: prop-the-kernel-of-a-monomorphism-is-zero-and-the-cokernel-of-an-epimorphism-is-zero
kind: proposition
title: "The kernel of a monomorphism is zero and the cokernel of an epimorphism is zero"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-initial-terminal-and-zero-object, def-monomorphism-and-epimorphism, def-kernels-and-cokernels-as-equalizers-and-coequalizers]
justified_by: []
aliases: []
landmark: false
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
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, VIII.1"
      url: "https://link.springer.com/book/10.1007/978-1-4757-4721-8"
    - title: "Gautam Tamme, Algebra II Lecture 9"
      url: "https://people.math.osu.edu/gautam.42/S21/AII/Notes/Lecture09.pdf"
pipeline_run: frontier-21
---

## Statement

Let $\mathcal C$ be a category with a zero object and the needed kernels and
cokernels. If $m:A\to B$ is monic and $k:K\to A$ is a kernel of $m$, then $K$
is a zero object and $k$ is the zero morphism into $A$.

Dually, if $e:A\to B$ is epic and $q:B\to Q$ is a cokernel of $e$, then $Q$ is
a zero object and $q$ is the zero morphism out of $B$.

## Facts & Assumptions

**Given:** A zero object $0$, a monomorphism $m:A\to B$ with kernel
$k:K\to A$, and an epimorphism $e:A\to B$ with cokernel $q:B\to Q$.

[L1] A zero object is both initial and terminal, so there are unique morphisms
$0\to X$ and $X\to0$ for every object $X$
([[def-initial-terminal-and-zero-object]]).

[L2] Monomorphisms are left-cancellable and epimorphisms are right-cancellable
([[def-monomorphism-and-epimorphism]]).

[L3] A kernel of $m$ is a morphism $k$ with $mk=0$ through which every
morphism $h$ with $mh=0$ factors uniquely; a cokernel is dual
([[def-kernels-and-cokernels-as-equalizers-and-coequalizers]]).

## Proof

**Proof technique:** direct.

1.1 If $h:X\to A$ satisfies $mh=0$, then also $m0_{X,A}=0$, so [L2] gives $h=0_{X,A}$. Therefore the unique map $0\to A$ from [L1] has the kernel universal property for $m$, because every morphism killed by $m$ factors uniquely through $0$. [L1, L2, L3]

2.1 Kernels are unique up to a unique compatible isomorphism, so the displayed kernel $k:K\to A$ is isomorphic to the zero morphism $0\to A$ from step 1.1. Hence $K$ is a zero object and $k$ is the zero map into $A$. The cokernel claim is the formal dual of the same argument with right cancellation in [L2]. [L1, L2, L3, step 1.1] ∎
