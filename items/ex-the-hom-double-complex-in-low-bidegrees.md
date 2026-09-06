---
id: ex-the-hom-double-complex-in-low-bidegrees
kind: example
title: "The Hom double complex in low bidegrees"
status: published
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-altered
deps: [def-hom-double-complex-of-a-projective-and-an-injective-resolution, lem-the-two-hom-double-complex-differentials-commute-before-signing, def-direct-sum-total-complex-on-finite-diagonals]
generation:
  role: example
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2"
      url: https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf
pipeline_run: frontier-31a
---
## Example

Display K^{0,0}, K^{1,0}, K^{0,1}, and K^{1,1}, label the two unsigned differentials, and compute the signed total differential in degrees zero and one.

## Facts & Assumptions

**Given:** Differentials $d_P:P_1\to P_0$ and $d_I:I^0\to I^1$ of supplied resolutions, and $K^{p,q}=\operatorname{Hom}(P_p,I^q)$.

## Verification

**Proof technique:** direct.

1.1 The low square has $K^{0,0}=\operatorname{Hom}(P_0,I^0)$, $K^{1,0}=\operatorname{Hom}(P_1,I^0)$, $K^{0,1}=\operatorname{Hom}(P_0,I^1)$, and $K^{1,1}=\operatorname{Hom}(P_1,I^1)$. Its unsigned arrows are $d_h(f)=f d_P$ and $d_v(f)=d_I f$, and $d_hd_v=d_vd_h$ on each $f$. [given, algebra]

2.1 With $D|_{K^{p,q}}=d_h+(-1)^p d_v$, $\operatorname{Tot}^0=K^{0,0}$ and $\operatorname{Tot}^1=K^{1,0}\oplus K^{0,1}$, so $D(f)=(fd_P,d_If)$. For $(a,b)\in\operatorname{Tot}^1$, its $K^{1,1}$ component is $-d_Ia+bd_P$, displaying the sign which makes $D^2=0$. [step 1.1, algebra] ∎
