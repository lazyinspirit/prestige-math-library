---
id: lem-dimension-shift-for-a-homological-delta-functor-effaced-in-the-middle
kind: lemma
title: "Dimension shift for a homological delta functor effaced in the middle"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-homological-delta-functor]
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Romyar Sharifi, Homological Algebra"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
    - title: "Alexandre Grothendieck, Some aspects of homological algebra (Barr translation)"
      url: "https://ncatlab.org/nlab/files/BarrTranslOf-GrothedieckTohoku.pdf"
pipeline_run: frontier-30
---

## Statement

Let $T=(T_n,\partial)$ be a homological delta functor. For a short exact
sequence
$$0\to K\to P\to A\to0$$
and an integer $n>0$, the connecting map
$$\partial_n:T_n(A)\to T_{n-1}(K)$$
has the following properties:

1. if $T_n(P)\to T_n(A)$ is the zero map, then $\partial_n$ is a monomorphism,
2. if $T_{n-1}(K)\to T_{n-1}(P)$ is the zero map, then $\partial_n$ is an
   epimorphism,
3. if both conditions hold, then $\partial_n$ is an isomorphism.
## Facts & Assumptions

**Given:** A short exact sequence $0\to K\to P\to A\to0$ and an integer $n>0$.

[L1] A homological delta functor attaches an exact segment
$$T_n(P)\to T_n(A)\xrightarrow{\partial_n}T_{n-1}(K)\to T_{n-1}(P)$$
to the given short exact sequence
([[def-homological-delta-functor]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the kernel of $\partial_n$ is the image of $T_n(P)\to T_n(A)$. Therefore if that incoming map is zero, then $\ker(\partial_n)=0$ and $\partial_n$ is monic. [L1, given, algebra]

1.2 Again by [L1], the image of $\partial_n$ is the kernel of $T_{n-1}(K)\to T_{n-1}(P)$. If the outgoing map is zero, then that kernel is all of $T_{n-1}(K)$, so $\partial_n$ is epic. [L1, given, algebra]

2.1 When both hypotheses hold, steps 1.1 and 1.2 show that $\partial_n$ is both monic and epic, hence an isomorphism in the abelian target category. [step 1.1, step 1.2] ∎
