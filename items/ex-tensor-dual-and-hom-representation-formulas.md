---
id: ex-tensor-dual-and-hom-representation-formulas
kind: example
title: Tensor, dual, and Hom representation formulas
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [prop-direct-sum-dual-hom-and-tensor-representations]
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
    - title: "Etingof, MIT 18.745 notes, §11.2, printed pp. 62–63"
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
    - title: "Kirillov, An Introduction to Lie Groups and Lie Algebras, §4.2, printed pp. 50–52"
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
---

## Example

For representations $V,W$, the induced actions are

$$x(v\otimes w)=xv\otimes w+v\otimes xw,$$

$$ (x\lambda)(v)=-\lambda(xv),\qquad xT=\rho_W(x)T-T\rho_V(x).$$

## Facts & Assumptions

**Given:** Representations $V,W$ of the same Lie algebra.

[L1] These constructions are asserted in
[[prop-direct-sum-dual-hom-and-tensor-representations]].

## Verification

**Proof technique:** direct expansion illustrating the signs.

1.1 Applying two tensor operators to $v\otimes w$ produces the two unmixed commutator terms $[x,y]v\otimes w$ and $v\otimes[x,y]w$; the mixed terms $xv\otimes yw$ and $yv\otimes xw$ occur with opposite signs and cancel. [given, algebra]

1.2 On the dual, two applications give $(x(y\lambda)-y(x\lambda))(v)=\lambda(yxv-xyv)=-\lambda([x,y]v)$, which is exactly the displayed dual action of $[x,y]$. [given, algebra]

1.3 On Hom, expanding the commutator of $T\mapsto\rho_W(x)T-T\rho_V(x)$ and its $y$-analogue cancels the mixed composites and leaves $\rho_W([x,y])T-T\rho_V([x,y])$. [given, algebra]

2.1 These computations verify the representation identity for all three formulas in [L1] and show why the dual minus sign and Hom subtraction are necessary. [step 1.1, step 1.2, step 1.3, L1] ∎
