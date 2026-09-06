---
id: thm-relative-homology-of-consecutive-cw-skeleta
kind: theorem
title: Relative homology of consecutive CW skeleta
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-skeleta-cw-subcomplex-and-relative-cw-complex, prop-cw-skeleta-are-closed-and-cells-form-a-disjoint-partition, lem-a-compact-subspace-of-a-cw-complex-meets-only-finitely-many-cells, thm-excision-for-singular-homology, cor-homology-of-good-pairs-is-reduced-homology-of-the-quotient, cor-homology-of-spheres]
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
  judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}
sources:
  references:
    - title: Allen Hatcher, Algebraic Topology, Section 2.2
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
---

## Statement

For any abelian group $G$, $H_k(X^n,X^{n-1};G)$ is $0$ for $k\ne n$ and is naturally $\bigoplus_{e^n_\alpha}G$ for $k=n$.

## Facts & Assumptions

**Given:** A CW complex $X$ and an integer $n\geq0$.

## Proof

**Proof technique:** direct.

1.1 For $n\geq1$, the pair $(X^n,X^{n-1})$ is a good pair (collar neighborhoods in the attached disks retract to $X^{n-1}$), and collapsing $X^{n-1}$ gives the wedge $\bigvee_\alpha D^n/S^{n-1}\cong\bigvee_\alpha S^n$. For $n=0$, $X^0$ is discrete and the same direct-sum calculation follows directly from its singular chain complex. [given]

2.1 If there are no $n$-cells, both sides are zero. Otherwise, for $n\geq1$, [[cor-homology-of-good-pairs-is-reduced-homology-of-the-quotient]] and [[cor-homology-of-spheres]] give one copy of $G$ in degree $n$ and zero otherwise.  A singular simplex has compact image, so [[lem-a-compact-subspace-of-a-cw-complex-meets-only-finitely-many-cells]] makes every chain involve only finitely many wedge summands; the wedge group is therefore the direct sum, not a product. The direct $n=0$ calculation in step 1.1 gives the same conclusion. [step 1.1] ∎
