---
id: prop-positive-ext-vanishes-on-a-projective-first-variable
kind: proposition
title: "Positive projective-resolution Ext vanishes on a projective first variable"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-ext-via-a-projective-resolution-of-the-first-variable, prop-positive-right-derived-functors-vanish-on-injective-objects]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2"
      url: https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf
pipeline_run: frontier-31a
---
## Statement

Assume the Axiom of Dependent Choice.
Let $\mathcal A$ be an abelian category with the supplied projective-resolution
construction. If $P$ is projective, then for every object $N$ and every
$q>0$,
$$\operatorname{Ext}_{P}^{q}(P,N)=0.$$

## Facts & Assumptions

**Given:** A projective object $P$ and an object $N$.

[L1] Projective-resolution Ext is the cohomology of $\operatorname{Hom}(P_\bullet,-)$ ([[def-ext-via-a-projective-resolution-of-the-first-variable]]).

[L2] Positive right derived functors computed from arbitrary supplied
injective-resolution data vanish on injective objects, assuming Dependent
Choice ([[prop-positive-right-derived-functors-vanish-on-injective-objects]]).

## Proof

**Proof technique:** direct.

1.1 For the additive functor $F=\operatorname{Hom}_{\mathcal A}(-,N)$ on $\mathcal A^{\mathrm{op}}$, the supplied projective resolution of $P$ in $\mathcal A$ is an injective resolution in $\mathcal A^{\mathrm{op}}$, and $P$ is injective there. Thus the cohomology in [L1] is the corresponding right-derived construction, and [L2] compares it with the length-zero resolution of $P$. [L1, L2, given, construct]

2.1 The Hom cochain complex of that length-zero resolution is concentrated in degree zero, so its cohomology is zero for $q>0$. The comparison in step 1.1 therefore gives $\operatorname{Ext}_{P}^{q}(P,N)=0$. [step 1.1, algebra] ∎
