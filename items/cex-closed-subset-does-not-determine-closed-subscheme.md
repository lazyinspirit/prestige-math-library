---
id: cex-closed-subset-does-not-determine-closed-subscheme
kind: counterexample
title: "A closed subset has many scheme structures"
status: published
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-affine-closed-immersions-quotient-rings, rem-topological-versus-scheme-theoretic-subspace]
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Schemes, Section 8"
      url: "https://stacks.math.columbia.edu/tag/01I6"
---
## Statement refuted

A closed subset of an affine scheme determines its closed subscheme structure.

## Facts & Assumptions

**Given:** A field $k$.

[F1] Closed immersions into $\operatorname{Spec}A$ are classified, up to
unique isomorphism over the target, by quotient rings $A/I$
[[thm-affine-closed-immersions-quotient-rings]].

## Counterexample

**Proof technique:** direct.

1.1 The ideals $(t)$ and $(t^2)$ in $k[t]$ have the same radical $(t)$, so their quotient-spectrum closed immersions have the same underlying closed subset $V(t)$. [given]

2.1 The ring $k[t]/(t)$ is reduced, whereas the nonzero class of $t$ in $k[t]/(t^2)$ is nilpotent. Their quotient rings are therefore not isomorphic, so [F1] gives distinct closed subscheme structures with the same support. [F1, step 1.1] ∎
