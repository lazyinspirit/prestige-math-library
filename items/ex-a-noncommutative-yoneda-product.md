---
id: ex-a-noncommutative-yoneda-product
kind: example
title: "A noncommutative Yoneda product"
status: published
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-altered
deps: [def-graded-ext-algebra-of-an-object, fs-the-yoneda-product-is-graded-commutative-for-every-abelian-category]
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
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapters 3–4"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
pipeline_run: frontier-31a
---
## Example

Use a finite-dimensional algebra with composable nonsymmetric extension classes to calculate two products in opposite orders and show they differ or one is undefined by endpoints.

## Facts & Assumptions

**Given:** A field $k$, $R=k\langle x,y\rangle/(x,y)^2$, and the simple left
$R$-module $S=R/(x,y)$.

## Verification

**Proof technique:** direct.

1.1 Let $V=(x,y)$, so $V^2=0$. The free resolution $P_n=R\otimes_kV^{\otimes n}$ with differential given by multiplication by the first $V$-factor has $\ker d_n=V\otimes_kV^{\otimes n}=\operatorname{im}d_{n+1}$. Applying $\operatorname{Hom}_R(-,S)$ gives zero differentials, so $\operatorname{Ext}^n_R(S,S)\cong(V^*)^{\otimes n}$. Let $u,v$ be the dual basis classes in degree one. [given, construct]

2.1 Yoneda splicing corresponds to concatenating tensors under this resolution. Consequently $uv$ and $vu$ are distinct basis vectors of $(V^*)^{\otimes2}=\operatorname{Ext}^2_R(S,S)$. Both products are typed in the same self-Ext algebra, and they differ; this is a genuinely noncommutative Yoneda product. [step 1.1, algebra] ∎
