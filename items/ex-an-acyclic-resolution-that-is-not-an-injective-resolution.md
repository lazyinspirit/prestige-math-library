---
id: ex-an-acyclic-resolution-that-is-not-an-injective-resolution
kind: example
title: "An acyclic resolution that is not an injective resolution"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
deps: [def-f-acyclic-resolution, prop-positive-left-derived-functors-vanish-on-projective-objects, def-projective-object, def-injective-object]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2 `Derived Functors`"
      url: "https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf"
pipeline_run: frontier-29
---
## Example

For the identity functor on abelian groups and a supplied projective resolution
datum $P$ on a class containing the free abelian groups, the standard free
resolution
$$0\to\mathbb Z\xrightarrow{\times2}\mathbb Z\to\mathbb Z/2\mathbb Z\to0$$
is an $F$-acyclic resolution relative to $P$, but it is not an injective
resolution.
## Facts & Assumptions

**Given:** The identity functor on abelian groups, a supplied projective resolution datum $P$ on a class containing the free abelian groups, and the displayed free resolution.

[L1] Projective objects are acyclic for left derived functors ([[prop-positive-left-derived-functors-vanish-on-projective-objects]]).

[L2] An $F$-acyclic resolution is an exact augmented resolution by $F$-acyclic objects ([[def-f-acyclic-resolution]]).

[L3] Projective and injective objects are defined by distinct lifting and extension properties ([[def-projective-object]], [[def-injective-object]]).

## Verification

**Proof technique:** direct.

1.1 The terms of the displayed resolution are free abelian groups, hence projective and in the domain of $P$. By [L1], they are acyclic for the identity functor, so [L2] identifies the displayed exact sequence as an acyclic resolution relative to $P$. [L1, L2, given]

2.1 The term $\mathbb Z$ is not injective, because the map $2\mathbb Z\to\mathbb Z$, $2n\mapsto n$, does not extend across $2\mathbb Z\hookrightarrow\mathbb Z$. By [L3], the resolution is therefore not an injective resolution. [L3, step 1.1, algebra] ∎
