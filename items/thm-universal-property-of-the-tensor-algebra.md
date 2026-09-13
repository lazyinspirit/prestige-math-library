---
id: thm-universal-property-of-the-tensor-algebra
kind: theorem
title: Universal property of the tensor algebra
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-tensor-algebra-of-a-vector-space, cor-finite-iterated-tensor-products-represent-multilinear-maps, thm-universal-property-of-module-direct-sums, def-algebra-over-a-commutative-ring]
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
    - title: "Etingof, MIT 18.745 notes, §12.1, printed pp. 69–70"
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
    - title: "Kirillov, An Introduction to Lie Groups and Lie Algebras, §5.1, printed pp. 71–72"
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
---

## Statement

If $A$ is a unital associative $k$-algebra, every linear map $f:V\to A$
extends uniquely to a unital $k$-algebra homomorphism
$\widehat f:T(V)\to A$.

## Facts & Assumptions

**Given:** A vector space $V$, a unital associative $k$-algebra $A$, and a
linear map $f:V\to A$.

[L1] Multilinear maps on $V^n$ factor uniquely through $V^{\otimes n}$
([[cor-finite-iterated-tensor-products-represent-multilinear-maps]]).

[L2] Maps from a direct sum are determined uniquely by their restrictions to
the summands ([[thm-universal-property-of-module-direct-sums]]).

[L3] The grading and concatenation multiplication are those of
[[def-tensor-algebra-of-a-vector-space]].

## Proof

**Proof technique:** direct.

1.1 For $n\geq1$, the map $(v_1,\ldots,v_n)\mapsto f(v_1)\cdots f(v_n)$ is multilinear, so [L1] gives a linear map $f_n:V^{\otimes n}\to A$ with $f_n(v_1\otimes\cdots\otimes v_n)=f(v_1)\cdots f(v_n)$. Put $f_0(a)=a1_A$. [L1, construct]

2.1 By [L2], the maps $f_n$ combine uniquely to a linear map $\widehat f:T(V)\to A$. On pure homogeneous tensors, concatenation gives $\widehat f(uv)=\widehat f(u)\widehat f(v)$, and bilinearity extends this to all finite sums; also $\widehat f(1)=1_A$ and $\widehat f\circ j=f$. [step 1.1, L2, L3, algebra]

3.1 If $F:T(V)\to A$ is any unital algebra homomorphism with $Fj=f$, then $F(v_1\otimes\cdots\otimes v_n)=F(jv_1)\cdots F(jv_n)=f(v_1)\cdots f(v_n)$ and $F(1)=1_A$. Pure tensors span every homogeneous summand, so [L2] gives $F=\widehat f$. [step 2.1, L2, L3, algebra]

4.1 The map constructed in step 2.1 is therefore the unique unital algebra extension of $f$, including the boundary case $V=0$, where $T(V)=k$. [step 2.1, step 3.1] ∎
