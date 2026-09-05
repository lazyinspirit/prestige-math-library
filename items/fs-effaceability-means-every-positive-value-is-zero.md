---
id: fs-effaceability-means-every-positive-value-is-zero
kind: false-statement
title: "FALSE: effaceability means every positive value is zero"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-effaceable-homological-delta-functor-in-positive-degrees, def-effaceable-cohomological-delta-functor-in-positive-degrees, prop-positive-left-derived-functors-are-effaceable-by-projectives, thm-left-derived-functors-from-two-supplied-resolution-data-are-naturally-isomorphic]
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Alexandre Grothendieck, Some aspects of homological algebra (Barr translation)"
      url: "https://ncatlab.org/nlab/files/BarrTranslOf-GrothedieckTohoku.pdf"
    - title: "The Stacks Project, Section 12.12: Cohomological delta-functors"
      url: "https://stacks.math.columbia.edu/tag/010P"
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Sections 2.4 and 2.5"
      url: "https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf"
pipeline_run: frontier-30
---

## Statement

Assume the Axiom of Dependent Choice.

> **False.** If a delta functor is effaceable in positive degrees, then all of
> its positive-degree values are zero.
## Facts & Assumptions

**Given:** The right exact functor $F=(-)\otimes_{\mathbb Z}\mathbb Z/n$ on
abelian groups, where $n>1$ is an integer, together with supplied projective
resolution data on all abelian groups.

[L1] Effaceability only says that a suitable induced map is zero
([[def-effaceable-homological-delta-functor-in-positive-degrees]],
[[def-effaceable-cohomological-delta-functor-in-positive-degrees]]).

[L2] Positive left derived functors of a right exact functor on a category with
enough projectives are effaceable
([[prop-positive-left-derived-functors-are-effaceable-by-projectives]]).

[L3] Replacing supplied projective resolution data gives naturally isomorphic
left derived functors
([[thm-left-derived-functors-from-two-supplied-resolution-data-are-naturally-isomorphic]]).

## Refutation

**Proof technique:** direct.

1.1 Every abelian group is a quotient of a free abelian group, so $\mathbf{Ab}$ has enough projectives. Hence [L2] makes the positive left derived functors of $F$ effaceable in the sense of [L1]. [L1, L2, given]

1.2 Let $Q$ be supplied projective resolution data obtained from the given datum by using $$0\to\mathbb Z\xrightarrow{n}\mathbb Z\to\mathbb Z/n\to0$$ at the object $\mathbb Z/n$. Applying $F$ to this resolution gives a deleted complex whose differential $n:\mathbb Z/n\to\mathbb Z/n$ is zero. Therefore $$L_1^QF(\mathbb Z/n)\cong\ker(\mathbb Z/n\xrightarrow{0}\mathbb Z/n)\cong\mathbb Z/n\ne0.$$ By [L3], $L_1^PF(\mathbb Z/n)\cong L_1^QF(\mathbb Z/n)$ for the original supplied datum $P$, so its first derived value is nonzero as well. [L3, given, algebra]

2.1 Thus this homological delta functor is effaceable in positive degrees but has a nonzero positive-degree value, refuting the statement. [step 1.1, step 1.2] ∎
