---
id: ex-countable-discrete-spaces-are-standard-borel
kind: example
title: "Countable discrete spaces are standard borel"
status: published
origin: pipeline
deps: [def-standard-borel-space, def-polish-space]
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
proof_strategy: direct
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, 5th ed."
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Example

Every at most countable set $S$ with its full power-set sigma-algebra is standard Borel, including the empty set. For example $S=\mathbb N$ has the discrete complete metric $d(m,n)=\mathbf1_{\{m\ne n\}}$.

## Facts & Assumptions

**Given:** An at most countable set S with its full power-set sigma-algebra.

[F1] A separable completely metrizable space is Polish. ([[def-polish-space]])

[F2] A measurable space with a Polish presentation is standard Borel. ([[def-standard-borel-space]])

## Verification

**Proof technique:** direct.

1.1 On S define $d(x,y)=0$ if $x=y$ and $d(x,y)=1$ otherwise. Symmetry and separation are immediate, and if $x\ne z$, at least one of $x\ne y$ or $y\ne z$ holds, giving $d(x,z)=1\le d(x,y)+d(y,z)$. Balls of radius one half are singletons. Every Cauchy sequence is eventually constant, by applying the Cauchy condition with tolerance one half; hence d is complete. On N, for instance, $d(2,5)=1$ and $B_d(2,1/2)=\{2\}$. [given]

2.1 The countable set S itself is dense. Every subset is a union of singleton opens, so the Borel sigma-algebra is exactly its full power set. By [F1] S is Polish and the identity gives the presentation in [F2]. For empty S there are no Cauchy sequences, the empty metric is complete, and the empty set is a countable dense subset; for a singleton the only sequence is constant. [step 1.1, F1, F2] ∎

## Source notes

Marker, Descriptive Set Theory, Example 1.2, printed p.2; Durrett Theorem 2.1.22, printed pp.53–54. The metric and its Cauchy property are explicitly evaluated here.
