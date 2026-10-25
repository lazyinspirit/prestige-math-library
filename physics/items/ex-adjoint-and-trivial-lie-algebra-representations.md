---
id: ex-adjoint-and-trivial-lie-algebra-representations
kind: example
title: Adjoint and trivial representations
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-representation-of-a-lie-algebra, prop-derivations-form-a-lie-algebra-and-inner-derivations-form-an-ideal]
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
    date: 2026-09-13
sources:
  references:
    - title: "Etingof, MIT 18.745 notes, Example 11.1, printed p. 62"
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
    - title: "Kirillov, An Introduction to Lie Groups and Lie Algebras, Examples 4.2–4.3, printed p. 49"
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
---

## Example

Every Lie algebra $\mathfrak g$ acts on itself by
$x\cdot y=[x,y]$, the **adjoint representation**. It also acts on any vector
space $V$ by $x\cdot v=0$, the **trivial representation**.

## Facts & Assumptions

**Given:** A Lie algebra $\mathfrak g$ over $k$ and an arbitrary vector space $V$ over $k$.

[L1] A representation requires $[\rho(x),\rho(y)]=\rho([x,y])$ ([[def-representation-of-a-lie-algebra]]).

[L2] The adjoint map is a Lie-algebra homomorphism ([[prop-derivations-form-a-lie-algebra-and-inner-derivations-form-an-ideal]]).

## Verification

**Proof technique:** direct.

1.1 For the adjoint action, [L2] gives $[\operatorname{ad}_x,\operatorname{ad}_y]=\operatorname{ad}_{[x,y]}$, exactly the identity in [L1]. [L1, L2]

1.2 For the trivial action, both $[0,0]$ and the operator assigned to $[x,y]$ are zero, so [L1] holds. [L1, algebra]

2.1 Hence both formulas define representations; the adjoint action is trivial precisely when $\mathfrak g$ is abelian. [step 1.1, step 1.2, algebra] ∎
