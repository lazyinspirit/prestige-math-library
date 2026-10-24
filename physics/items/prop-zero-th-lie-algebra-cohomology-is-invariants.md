---
id: prop-zero-th-lie-algebra-cohomology-is-invariants
kind: proposition
title: Zeroth Lie algebra cohomology is invariants
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-lie-algebra-cohomology, def-chevalley-eilenberg-differential]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Weibel, Lie Algebra Homology and Cohomology, §7.7"
      url: https://math.mit.edu/~hrm/palestine/weibel/07-lie_algebra_homology_and_cohomology.pdf
      locator: "§7.7, low-degree calculation, printed pp. 239–240"
---

## Statement

$$H^0(\mathfrak g,M)=M^{\mathfrak g}=\{m\in M:xm=0\text{ for every }x\in\mathfrak g\}.$$

## Facts & Assumptions

**Given:** A Lie algebra $\mathfrak g$ and a module $M$.

[L1] Degree-zero cochains are $M$ and $(dm)(x)=xm$ ([[def-chevalley-eilenberg-differential]]).

[L2] Cohomology is kernel modulo the preceding image ([[def-lie-algebra-cohomology]]).

## Proof

**Proof technique:** compute in degree zero.

1.1 By [L1], $m$ lies in the degree-zero kernel exactly when every $x$ kills it, so $\ker d^0=M^{\mathfrak g}$. [L1, given]

2.1 The degree-minus-one cochain space is zero, hence $\operatorname{im}d^{-1}=0$. Substitution in [L2] proves the displayed equality. If $M=0$ both sides are zero; if $\mathfrak g=0$, the condition is vacuous and both sides are all of $M$. [L2, step 1.1] ∎