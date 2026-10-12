---
id: thm-symmetric-alternating-relations-by-characteristic
kind: theorem
title: 'Alternating forms are skew-symmetric; the converse holds when $\operatorname{char}F\neq2$, while in characteristic $2$ alternating forms are symmetric'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-bilinear-symmetric-skew-and-alternating-forms, def-ring-characteristic, def-field]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: 'K. Conrad, Bilinear Forms, §4'
      url: 'https://kconrad.math.uconn.edu/blurbs/linmultialg/bilinearform.pdf'
pipeline_run: null
---

## Statement

Every alternating bilinear form is skew-symmetric. If $\operatorname{char}F\ne2$, every skew-symmetric bilinear form is alternating. If $\operatorname{char}F=2$, every alternating bilinear form is symmetric.

## Facts & Assumptions

**Given:** A bilinear form $B:V\times V\to F$.

[L1] Alternating means $B(v,v)=0$ for all $v$, skew-symmetric means $B(u,v)=-B(v,u)$, and symmetric means $B(u,v)=B(v,u)$ ([[def-bilinear-symmetric-skew-and-alternating-forms]]).

[L2] The characteristic is the least positive natural multiple of $1_F$ that is zero, or $0$ if none exists ([[def-ring-characteristic]]); a field has $0_F\ne1_F$ and every nonzero element is invertible ([[def-field]]).

## Proof

**Proof technique:** direct.

1.1 If $B$ is alternating, bilinearity gives $0=B(u+v,u+v)=B(u,v)+B(v,u)$, so $B(u,v)=-B(v,u)$ and $B$ is skew-symmetric. [L1, algebra]

1.2 If $B$ is skew-symmetric, then $B(v,v)=-B(v,v)$, so $2B(v,v)=0$. When $\operatorname{char}F\ne2$, [L2] makes $2=1_F+1_F$ nonzero and invertible, giving $B(v,v)=0$ for every $v$ and hence alternation. [L1, L2, algebra]

2.1 If $\operatorname{char}F=2$ and $B$ is alternating, [L2] gives $1_F+1_F=0_F$ and hence $-a=a$ for every $a\in F$. Step 1.1 therefore gives $B(u,v)=-B(v,u)=B(v,u)$, so $B$ is symmetric. [step 1.1, L1, L2, algebra]

3.1 These arguments prove each asserted implication without claiming that every symmetric form in characteristic $2$ is alternating. [step 1.1, step 1.2, step 2.1] ∎
