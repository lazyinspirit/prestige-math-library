---
id: cex-ringed-space-map-not-locally-ringed
kind: counterexample
title: "A morphism of ringed spaces need not be a morphism of locally ringed spaces"
status: draft
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-local-ring, def-morphism-locally-ringed-spaces, def-morphism-ringed-spaces]
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
    - title: "Ravi Vakil, The Rising Sea, Exercise 6.2.E"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGnov1817public.pdf"
    - title: "The Stacks Project, Section 26.2"
      url: "https://stacks.math.columbia.edu/tag/01HA"
---

## Statement refuted

Every morphism of ringed spaces between locally ringed spaces is automatically a
morphism of locally ringed spaces.

## Facts & Assumptions

**Given:** A field $k$, the local ring $A=k[y]_{(y)}$, and the field
$K=k(x)$.

[F1] A morphism of ringed spaces between one-point spaces is exactly a ring map
between their stalk rings ([[def-morphism-ringed-spaces]]).

[F2] A morphism of locally ringed spaces must induce local maps on stalks
([[def-morphism-locally-ringed-spaces]]).

[L1] A local ring has a unique maximal ideal ([[def-local-ring]]).

## Counterexample

**Proof technique:** direct.

1.1 Regard $(\{\ast\},A)$ and $(\{\ast\},K)$ as one-point ringed spaces. The assignment $y\mapsto x$ defines a ring homomorphism $A\to K$, so by [F1] it defines a morphism of ringed spaces $$(\{\ast\},K)\longrightarrow (\{\ast\},A).$$ [F1, given, construct]

2.1 The unique maximal ideal of $A$ is $(y)$ by [L1], while the unique maximal ideal of the field $K$ is $0$. Under the stalk map $A\to K$, the element $y$ goes to the nonzero element $x$, hence to a unit of $K$. Therefore the image of $(y)$ is not contained in $0$, so the stalk map is not local. By [F2], the morphism is not a morphism of locally ringed spaces. [F2, L1, step 1.1]

3.1 This gives a morphism of ringed spaces between locally ringed spaces that is not locally ringed. The statement is false. [step 1.1, step 2.1] ∎
