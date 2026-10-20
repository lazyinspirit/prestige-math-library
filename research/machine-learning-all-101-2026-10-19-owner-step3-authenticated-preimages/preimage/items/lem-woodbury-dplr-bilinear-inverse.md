---
id: lem-woodbury-dplr-bilinear-inverse
kind: lemma
title: Woodbury inverse for a diagonal-plus-low-rank update
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: []
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gu, Goel, and Ré, Efficiently Modeling Long Sequences with Structured State Spaces, Appendix C.2–C.3"
      url: "https://arxiv.org/pdf/2111.00396"
---

## Statement

Let $D\in\mathbb C^{N\times N}$ be invertible, let $U,V\in\mathbb C^{N\times r}$, and set $W=I_r+V^*D^{-1}U$, where $^*$ denotes conjugate transpose. Then $D+UV^*$ is invertible if and only if $W$ is invertible. When these matrices are invertible,
$$
(D+UV^*)^{-1}=D^{-1}-D^{-1}U W^{-1}V^*D^{-1}.
$$

## Statement references

[Gu, Goel, and Ré, “Efficiently Modeling Long Sequences with Structured State Spaces,” Appendix C.2–C.3](https://arxiv.org/pdf/2111.00396)

## Facts & Assumptions

**Given:** Finite integers $N,r\ge1$, matrices $D\in\mathbb C^{N\times N}$ and $U,V\in\mathbb C^{N\times r}$, with $D$ invertible, and $W:=I_r+V^*D^{-1}U$.

[A1] The inverse $D^{-1}$ exists, so all displayed matrix products are defined.

[A2] $W$ is an $r\times r$ matrix; a square linear map in finite dimension is invertible once its kernel is zero.

## Proof

1.1 Assume $W$ is invertible and define $X:=D^{-1}-D^{-1}UW^{-1}V^*D^{-1}$. Expansion gives $(D+UV^*)X=I+U(V^*D^{-1}-W^{-1}V^*D^{-1}-V^*D^{-1}UW^{-1}V^*D^{-1})=I$, because $(I_r+V^*D^{-1}U)W^{-1}V^*D^{-1}=WW^{-1}V^*D^{-1}=V^*D^{-1}$. [A1, algebra]

2.1 Expanding in the other order gives $X(D+UV^*)=I+D^{-1}U(V^*-W^{-1}V^*-W^{-1}V^*D^{-1}UV^*)=I$, because $W^{-1}(I_r+V^*D^{-1}U)V^*=W^{-1}WV^*=V^*$. Thus $X$ is the two-sided inverse of $D+UV^*$, proving this direction and the formula. [A1, step 1.1, algebra]

3.1 Conversely assume $D+UV^*$ is invertible and let $w\in\mathbb C^r$ satisfy $Ww=0$. Set $x=D^{-1}Uw$. Then $(D+UV^*)x=U(I_r+V^*D^{-1}U)w=UWw=0$, so invertibility gives $x=0$. Hence $Uw=Dx=0$, and therefore $Ww=w+V^*D^{-1}Uw=w$. Since $Ww=0$, we have $w=0$. Thus $W$ has zero kernel; by [A2] it is invertible. [A1, A2, step 1.1, algebra] ∎
