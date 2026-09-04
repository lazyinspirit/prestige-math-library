---
id: prop-positive-left-derived-functors-vanish-on-projective-objects
kind: proposition
title: "Positive left derived functors vanish on projective objects"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-left-derived-functors-from-two-supplied-resolution-data-are-naturally-isomorphic, prop-a-projective-object-has-a-length-zero-projective-resolution, def-left-derived-object-relative-to-projective-resolution-data]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Romyar Sharifi, Homological Algebra"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
pipeline_run: frontier-29
---
## Statement

Assume the Axiom of Dependent Choice.

Let $P$ be a supplied projective resolution datum on a class $\mathcal D$ and
$F:\mathcal A\to\mathcal B$ an additive functor between abelian categories.
If $Q\in\mathcal D$ is a projective object, then for every $n>0$,
$$L_n^PF(Q)=0.$$
## Facts & Assumptions

**Given:** A projective object $Q\in\mathcal D$ and an integer $n>0$.

[L1] Every projective object admits a length-zero projective resolution ([[prop-a-projective-object-has-a-length-zero-projective-resolution]]).

[L2] Changing the supplied projective resolution datum changes the derived objects only by natural isomorphism ([[thm-left-derived-functors-from-two-supplied-resolution-data-are-naturally-isomorphic]]).

[L3] The left derived object is the homology of the deleted chosen resolution ([[def-left-derived-object-relative-to-projective-resolution-data]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the object $Q$ has a projective resolution concentrated in degree $0$. Its deleted complex therefore has only one nonzero term, namely $Q$ in degree $0$. [L1, given, construct]

2.1 Let $P'$ be the supplied projective resolution datum on the same domain as $P$ that agrees with $P$ away from $Q$ and assigns the length-zero resolution from step 1.1 to $Q$. By [L2], the derived object computed from $P$ is isomorphic to the one computed from $P'$. By [L3], the deleted resolution in $P'(Q)$ is the one-term complex from step 1.1, whose homology is zero in every positive degree. Hence $L_n^PF(Q)=0$ for $n>0$. [L2, L3, step 1.1] ∎
