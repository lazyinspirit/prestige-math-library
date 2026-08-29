---
id: fs-the-exterior-power-is-a-canonical-subspace-of-the-tensor-power-over-every-field
kind: false-statement
title: "FALSE: $\\Lambda^kV$ is canonically a subspace of $V^{\\otimes k}$ over every field"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-kth-exterior-power-by-quotient, thm-exterior-algebra-laws]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Exterior Powers"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/extmod.pdf"
---

## Statement

For every field $F$, every $F$-vector space $V$, and every $k\ge0$, the $k$th exterior power $\Lambda^kV$ is canonically a linear subspace of the $k$-fold tensor power $V^{\otimes k}$: the antisymmetrization map

$$\operatorname{Alt}(v_1\wedge\cdots\wedge v_k):=\sum_{\sigma\in S_k}\operatorname{sgn}(\sigma)\,v_{\sigma(1)}\otimes\cdots\otimes v_{\sigma(k)}$$

is a well-defined injective linear section of the quotient map $\pi:V^{\otimes k}\to\Lambda^kV$, for every field $F$.

## Facts & Assumptions

**Given:** A field $F$, a vector space $V$ with $\dim V\ge k\ge2$, the quotient map $\pi$, and the antisymmetrization $\operatorname{Alt}$.

[L1] The exterior power is the quotient $\Lambda^kV=V^{\otimes k}/W_k$ with quotient map $\pi$ ([[def-kth-exterior-power-by-quotient]]).

[L2] Permuting the entries of a wedge multiplies it by the permutation sign ([[thm-exterior-algebra-laws]]).

## Refutation

**Proof technique:** direct.


1.1 By [L1], $\Lambda^kV$ is a quotient of $V^{\otimes k}$, and the structure map $\pi$ is a surjection with nonzero kernel: for $\dim V\ge2$ and $k\ge2$, extend a nonzero vector $v$ to a basis $(v,e_2,\ldots,e_n)$; then the pure tensor $v\otimes v\otimes e_3\otimes\cdots\otimes e_k\in V^{\otimes k}$ (with the tail omitted when $k=2$) is nonzero yet $\pi$ of it is $v\wedge v\wedge e_3\wedge\cdots\wedge e_k=0$ because the first two entries repeat, so the canonical construction presents $\Lambda^kV$ as a quotient, not a subspace. [L1]

1.2 For the formula-defined antisymmetrization, [L2] gives

$$\pi(\operatorname{Alt}(v_1\wedge\cdots\wedge v_k))=\sum_\sigma\operatorname{sgn}(\sigma)\,v_{\sigma(1)}\wedge\cdots\wedge v_{\sigma(k)}=\sum_\sigma(\operatorname{sgn}\sigma)^2\,v_1\wedge\cdots\wedge v_k=k!\,v_1\wedge\cdots\wedge v_k.$$

[L2, algebra]

2.1 Over a field whose characteristic divides $k!$, step 1.2 gives $\pi\circ\operatorname{Alt}=k!\cdot\operatorname{id}=0$, while $\Lambda^kV\ne0$ by the hypothesis $\dim V\ge k$; a section must satisfy $\pi\circ s=\operatorname{id}$, so $\operatorname{Alt}$ is not a section over such a field. The concrete witness is $F=\mathbb F_2$, $V=\mathbb F_2^2$, $k=2$: $\operatorname{Alt}(e_1\wedge e_2)=e_1\otimes e_2+e_2\otimes e_1$ and $\pi$ of that is $2\,e_1\wedge e_2=0$. [step 1.1, step 1.2]

3.1 Step 2.1 gives a field $F$, a vector space $V$, and a degree $k$ for which the displayed formula is not a section of $\pi$, so the universal claim "for every field" is false. [step 2.1] ∎
