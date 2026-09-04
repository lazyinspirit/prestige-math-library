---
id: lem-the-change-of-projective-resolution-isomorphisms-are-natural
kind: lemma
title: "The change-of-projective-resolution isomorphisms are natural"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-a-morphism-has-a-comparison-lift-between-the-supplied-projective-resolutions, lem-objectwise-comparison-of-two-projective-resolution-data-induces-an-isomorphism-on-derived-objects, thm-projective-comparison-maps-are-unique-up-to-chain-homotopy, thm-chain-homotopic-maps-induce-the-same-map-on-homology]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2 `Derived Functors`"
      url: "https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf"
pipeline_run: frontier-29
---
## Statement

Assume the Axiom of Dependent Choice.

With the notation of
[[lem-objectwise-comparison-of-two-projective-resolution-data-induces-an-isomorphism-on-derived-objects]],
the isomorphisms $\theta_{P,Q}(A)$ are natural in $A$.
## Facts & Assumptions

**Given:** A morphism $u:A\to B$ and an integer $n$.

[L1] The supplied projective data admit comparison lifts of $u$ on both sides
([[lem-a-morphism-has-a-comparison-lift-between-the-supplied-projective-resolutions]]).

[L2] The objectwise comparison maps induce isomorphisms on derived objects
([[lem-objectwise-comparison-of-two-projective-resolution-data-induces-an-isomorphism-on-derived-objects]]).

[L3] Two projective comparison maps lifting the same morphism are
chain-homotopic, and chain-homotopic maps induce the same homology map
([[thm-projective-comparison-maps-are-unique-up-to-chain-homotopy]],
[[thm-chain-homotopic-maps-induce-the-same-map-on-homology]]).

## Proof

**Proof technique:** direct.

1.1 Choose objectwise comparison maps $c_A:P_\bullet(A)\to Q_\bullet(A)$ and $c_B:P_\bullet(B)\to Q_\bullet(B)$ that define the isomorphisms in [L2], and choose comparison lifts $\widetilde u^P:P_\bullet(A)\to P_\bullet(B)$ and $\widetilde u^Q:Q_\bullet(A)\to Q_\bullet(B)$ from [L1]. [L1, L2, given, construct]

2.1 Both composites $c_B\widetilde u^P$ and $\widetilde u^Q c_A$ are comparison maps from $P_\bullet(A)$ to $Q_\bullet(B)$ lifting the same morphism $u$, so [L3] makes them chain-homotopic. Passing to homology gives $$\theta_{P,Q}(B)\circ L_n^PF(u)=L_n^QF(u)\circ\theta_{P,Q}(A).$$ Therefore the family $\theta_{P,Q}(A)$ is natural. [L2, L3, step 1.1] ∎
