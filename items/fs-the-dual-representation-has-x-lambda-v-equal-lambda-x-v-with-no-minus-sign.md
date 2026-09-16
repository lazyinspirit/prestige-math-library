---
id: fs-the-dual-representation-has-x-lambda-v-equal-lambda-x-v-with-no-minus-sign
kind: false-statement
title: The dual action needs a minus sign
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [prop-direct-sum-dual-hom-and-tensor-representations]
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Etingof, MIT 18.745 notes, dual representations in §11.2, printed pp. 62–63"
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
    - title: "Kirillov, An Introduction to Lie Groups and Lie Algebras, §4.2, printed pp. 50–52"
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
---

## Statement

The dual action is $(x\lambda)(v)=\lambda(xv)$, with no minus sign.

## Facts & Assumptions

**Given:** The proposed plus-sign formula on the algebraic dual of a representation.

[L1] The valid dual formula has a minus sign ([[prop-direct-sum-dual-hom-and-tensor-representations]]).

## Refutation

**Proof technique:** direct computation in the standard $\mathfrak{sl}_2$-module over a characteristic-zero field.

1.1 Write $P_x(\lambda)=\lambda\circ\rho(x)$ for the proposed plus-sign operator. Then $[P_x,P_y](\lambda)=\lambda\circ(\rho(y)\rho(x)-\rho(x)\rho(y))=-P_{[x,y]}(\lambda)$, so the proposed operators reverse rather than preserve the Lie bracket. [given, algebra]

2.1 In the standard two-dimensional $\mathfrak{sl}_2$-module, $[e,f]=h$ and $P_h\ne0$. Hence $[P_e,P_f]=-P_h\ne P_h$, since the field has characteristic zero. The plus formula is therefore not a representation; the two minus signs in the commutator of the formula in [L1] correct this reversal. [step 1.1, L1, algebra] ∎
