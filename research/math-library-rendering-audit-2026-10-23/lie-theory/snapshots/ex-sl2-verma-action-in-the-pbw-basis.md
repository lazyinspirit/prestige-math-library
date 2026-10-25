---
id: ex-sl2-verma-action-in-the-pbw-basis
kind: example
title: "The sl2 Verma action in the PBW basis"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-verma-module, thm-pbw-model-of-a-verma-module]
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Mrudul Thatte, Category O: Verma's Thesis, §1.2"
      url: "https://member.ipmu.jp/henry.liu/seminars/s20-category-o/mrudul-notes.pdf"
---

## Example

For $\mathfrak{sl}_2=\langle e,f,h\rangle$ with $[h,f]=-2f$ and $[e,f]=h$, the PBW basis of $M(\lambda)$ is $f^nv_\lambda$ ($n\ge0$), and

$$hf^nv_\lambda=(\lambda-2n)f^nv_\lambda,\qquad ff^nv_\lambda=f^{n+1}v_\lambda\qquad(n\ge0),$$

and

$$ev_\lambda=0,\qquad ef^nv_\lambda=n(\lambda-n+1)f^{n-1}v_\lambda\qquad(n\ge1).$$

## Facts & Assumptions

**Given:** The induced highest vector [[def-verma-module]] and its PBW model [[thm-pbw-model-of-a-verma-module]].

## Verification

**Proof technique:** direct.

1.1 The first two identities follow by $[h,f]=-2f$ and multiplication; at $n=0$, $ev_\lambda=0$. [given, algebra]

2.1 Induction using $ef^{n+1}=fef^n+hf^n$ transforms the $n$th coefficient into $(n+1)(\lambda-n)$, which is the stated formula for $n+1$. [given, algebra] ∎
