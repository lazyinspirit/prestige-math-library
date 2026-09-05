---
id: lem-dimension-shift-for-a-cohomological-delta-functor-effaced-in-the-middle
kind: lemma
title: "Dimension shift for a cohomological delta functor effaced in the middle"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-cohomological-delta-functor]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.12: Cohomological delta-functors"
      url: "https://stacks.math.columbia.edu/tag/010P"
    - title: "Romyar Sharifi, Homological Algebra"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
pipeline_run: frontier-30
---

## Statement

Let $T=(T^n,\partial)$ be a cohomological delta functor. For a short exact
sequence
$$0\to A\to I\to C\to0$$
and an integer $n>0$, the connecting map
$$\partial^{n-1}:T^{n-1}(C)\to T^n(A)$$
has the following properties:

1. if $T^{n-1}(I)\to T^{n-1}(C)$ is the zero map, then $\partial^{n-1}$ is a
   monomorphism,
2. if $T^n(A)\to T^n(I)$ is the zero map, then $\partial^{n-1}$ is an
   epimorphism,
3. if both conditions hold, then $\partial^{n-1}$ is an isomorphism.
## Facts & Assumptions

**Given:** A short exact sequence $0\to A\to I\to C\to0$ and an integer $n>0$.

[L1] A cohomological delta functor attaches an exact segment
$$T^{n-1}(I)\to T^{n-1}(C)\xrightarrow{\partial^{n-1}}T^n(A)\to T^n(I)$$
to the given short exact sequence
([[def-cohomological-delta-functor]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the kernel of $\partial^{n-1}$ is the image of $T^{n-1}(I)\to T^{n-1}(C)$. If that map is zero, then $\ker(\partial^{n-1})=0$, so $\partial^{n-1}$ is monic. [L1, given, algebra]

1.2 By [L1], the image of $\partial^{n-1}$ is the kernel of $T^n(A)\to T^n(I)$. If the latter map is zero, this kernel is all of $T^n(A)$, so $\partial^{n-1}$ is epic. [L1, given, algebra]

2.1 When both hypotheses hold, steps 1.1 and 1.2 show that $\partial^{n-1}$ is an isomorphism. [step 1.1, step 1.2] ∎
