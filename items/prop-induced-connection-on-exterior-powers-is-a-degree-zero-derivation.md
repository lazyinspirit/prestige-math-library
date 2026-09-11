---
id: prop-induced-connection-on-exterior-powers-is-a-degree-zero-derivation
kind: proposition
title: "Induced connection on exterior powers is a degree zero derivation"
status: draft
origin: pipeline
deps: ["prop-induced-connections-commute-with-contraction-and-permutation","def-product-connection-on-tensor-and-hom-bundles","def-alternating-k-covectors"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
---

## Statement

A connection on $E$ induces a connection on each $\bigwedge^kE$, including the scalar bundle $\bigwedge^0E$. For sections $S$ and $T$ of exterior degrees $p$ and $q$,
$$\nabla_X(S\wedge T)=(\nabla_XS)\wedge T+S\wedge(\nabla_XT).$$
There is no graded sign: the covariant derivative in a fixed direction has degree zero.

## Facts & Assumptions

**Given:** A finite-rank smooth real bundle with connection and nonnegative integers $k,p,q$.

[F1] Tensor covariant differentiation commutes with permutations ([[prop-induced-connections-commute-with-contraction-and-permutation]]).

[F2] Product connections differentiate each slot and the empty tensor product carries scalar differentiation ([[def-product-connection-on-tensor-and-hom-bundles]]).

[F3] Alternating covectors are alternating multilinear maps, with degree zero the scalars ([[def-alternating-k-covectors]]).

## Proof

1.1 Realize $\bigwedge^kE$ as the alternating tensors in $E^{\otimes k}$, or alternating multilinear forms on $(E^*)^k$. Locally the signed sums $\sum_{\sigma\in S_k}\operatorname{sgn}(\sigma)e_{i_{\sigma(1)}}\otimes\cdots\otimes e_{i_{\sigma(k)}}$ for $i_1<\cdots<i_k$ form a basis: alternation makes repeated-index coefficients zero and determines all distinct-index coefficients from the increasing ones. Frame changes preserve alternation, with smooth polynomial coefficients and smooth inverses. Hence these local frames define a smooth subbundle. The normalized alternating projection is $\operatorname{Alt}_k=(1/k!)\sum_\sigma\operatorname{sgn}(\sigma)\sigma$; alternation gives $\operatorname{Alt}_k^2=\operatorname{Alt}_k$, and its image is exactly this subbundle. [F2, F3]

2.1 Since $\nabla_X$ commutes with every permutation and real constant, it commutes with $\operatorname{Alt}_k$. It therefore preserves the image and its restriction obeys the connection laws. Write the usual wedge of alternating tensors as $S\wedge T=((p+q)!/(p!q!))\operatorname{Alt}_{p+q}(S\otimes T)$. Applying the product rule and commuting the alternating projection with the derivative gives the claimed sum with two positive signs. [F1, F2, step 1.1]

3.1 Degree zero uses $0!=1$ and ordinary scalar multiplication, so the formula becomes the ordinary scalar Leibniz rule. For $k>\operatorname{rank}E$ there is no increasing index tuple and the bundle is zero; a rank-zero bundle consequently has only its degree-zero scalar part. Degree one returns $E$. Empty bases present no sections to test. The finite permutation sums and local frames require no AC. [step 1.1, step 2.1] ∎
