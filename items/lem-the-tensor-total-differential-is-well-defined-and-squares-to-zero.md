---
id: lem-the-tensor-total-differential-is-well-defined-and-squares-to-zero
title: "The tensor-total differential is balanced, well defined, and squares to zero"
kind: lemma
status: published
origin: pipeline
deps: ["def-tensor-product-total-complex-of-chain-complexes", "def-balanced-and-bilinear-maps"]
proof_strategy: direct
sources:
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

Let $P$ be a chain complex of right $R$-modules and $Q$ a chain complex of left $R$-modules.  On the finite-diagonal total module $\operatorname{Tot}(P\otimes_RQ)$, the formula $d(p\otimes q)=d_Pp\otimes q+(-1)^pp\otimes d_Qq$ is balanced and satisfies $d^2=0$.

## Proof

**Given:** homogeneous $p\in P_p$, $q\in Q_q$, and the tensor-total convention.

1.1 For $r\in R$, $d((pr)\otimes q)=d_Pp\,r\otimes q+(-1)^pp r\otimes d_Qq=d(p\otimes rq)$, since both differentials are $R$-linear; thus the formula descends from elementary tensors. [given]

2.1 Applying $d$ again gives $d_P^2p\otimes q+(-1)^{p-1}d_Pp\otimes d_Qq+(-1)^pd_Pp\otimes d_Qq+p\otimes d_Q^2q$. [step 1.1, algebra]

3.1 The first and last terms vanish and the two middle terms cancel.  Linearity then proves $d^2=0$ on every finite sum in each total degree. [step 2.1, algebra] ∎
