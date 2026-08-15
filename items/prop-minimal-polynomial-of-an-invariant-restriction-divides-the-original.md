---
id: prop-minimal-polynomial-of-an-invariant-restriction-divides-the-original
kind: proposition
title: "The minimal polynomial of a restriction to an invariant subspace divides the original minimal polynomial"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-minimal-polynomial-is-well-defined-and-controls-annihilators]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'Keith Conrad, The Minimal Polynomial and Some Applications, §5, Lemma 5.1'
      url: 'https://kconrad.math.uconn.edu/blurbs/linmultialg/minpolyandappns.pdf'
pipeline_run: null
---

## Statement

Let $W$ be a $T$-invariant subspace of a finite-dimensional vector space. Then the restriction $T|_W:W\to W$ satisfies

$$\mu_{T|_W}\mid\mu_T.$$

## Facts & Assumptions

**Given:** A finite-dimensional endomorphism $T:V\to V$ and a $T$-invariant subspace $W\subseteq V$.

[L1] A polynomial annihilates an endomorphism exactly when it is divisible by that endomorphism's minimal polynomial ([[thm-minimal-polynomial-is-well-defined-and-controls-annihilators]]).

## Proof

**Proof technique:** direct.

1.1 Invariance makes $T|_W$ an endomorphism of $W$, and for every polynomial $p$ one has $p(T|_W)=p(T)|_W$ by induction on powers. [given, algebra]

2.1 Since $\mu_T(T)=0$, step 1.1 gives $\mu_T(T|_W)=0$. Applying [L1] to $T|_W$ yields $\mu_{T|_W}\mid\mu_T$. This includes $W=0$, where $\mu_{T|_W}=1$. [step 1.1, L1] ∎
