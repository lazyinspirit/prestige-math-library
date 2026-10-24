---
id: def-sesquilinear-and-hermitian-forms-over-a-field-with-involution
kind: definition
title: 'Sesquilinear and Hermitian forms over a field with an involution, using the convention linear in the first variable'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-field, def-vector-space]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: 'H. Pinkham, Linear Algebra, §7.8'
      url: 'https://www.math.columbia.edu/department/pinkham/HCP_LinearAlgebra.pdf'
    - title: 'K. Conrad, Bilinear Forms, §7'
      url: 'https://kconrad.math.uconn.edu/blurbs/linmultialg/bilinearform.pdf'
pipeline_run: null
---

## Definition

Let $F$ be a field with an **involution**, an automorphism $\sigma:F\to F$ satisfying $\sigma^2=\operatorname{id}_F$. A function $H:V\times V\to F$ is **sesquilinear**, with the convention used here, when it is linear in the first variable and $\sigma$-linear in the second:

$$H(au+bv,w)=aH(u,w)+bH(v,w),$$

$$H(u,av+bw)=\sigma(a)H(u,v)+\sigma(b)H(u,w).$$

It is **Hermitian** when

$$H(u,v)=\sigma(H(v,u))$$

for all $u,v\in V$. When $\sigma$ is the identity, sesquilinear forms are bilinear and Hermitian forms are symmetric bilinear forms.
