---
id: lem-ptfa-finite-projective-basechange-preserves-euler-characteristic
kind: lemma
title: PTFA finite projective base change and Euler characteristic
status: published
origin: pipeline
deps:
  - thm-ptfa-augmentation-detects-projective-injectivity-without-choice
  - def-projective-module
  - def-opposite-ring
  - def-tensor-product-of-modules-by-generators-and-relations
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Cochran, Orr and Teichner, Knot concordance, Whitney towers and
        L2-signatures
      url: https://arxiv.org/pdf/math/9908117
      locator: Proposition2.11, skew-field Betti comparison
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
---

## Statement

Let $k$ be a commutative field, let $G$ be PTFA, put $A=k[G]$, and supply its Ore fraction division ring $K$. Subscripts $k$ and $K$ mean tensor base change along augmentation $A\to k$ and inclusion $A\to K$, respectively.

For every finitely generated projective right-$A$ module $P$,
$$\dim_K P_K=\dim_k P_k<\infty.$$
For a homomorphism $f:P\to Q$ between such modules,
$$\dim_K\operatorname{im}f_K\ge\dim_k\operatorname{im}f_k.$$
Consequently, for any bounded complex $P_*$ of finitely generated projective right-$A$ modules,
$$\sum_i(-1)^i\dim_K H_i(P_K)=\sum_i(-1)^i\dim_k H_i(P_k).$$
If additionally the complex is nonnegative, $\dim_k H_0(P_k)=1$ and $H_0(P_K)=0$, then
$$\dim_K H_1(P_K)\le\dim_k H_1(P_k)-1.$$
No choice principle or free basis for a projective module is assumed.

## Facts & Assumptions

**Given:** The field, group, fraction division ring and the finite projective modules or bounded complex in the relevant assertion.

[F1] PTFA augmentation detects projective injectivity, and finite matrices over $A$ have $K$-rank at least their augmented $k$-rank, without a choice principle. [[thm-ptfa-augmentation-detects-projective-injectivity-without-choice]]

[F2] Projectivity is the individual lifting property for surjections, with right modules read over the opposite ring. Tensor base change preserves compositions, sums and split identities. [[def-projective-module]], [[def-opposite-ring]], [[def-tensor-product-of-modules-by-generators-and-relations]]

## Proof

1.1 Choose a finite generating list for $P$, giving a surjection $\pi:A^n\to P$. Projectivity gives one section $s:P\to A^n$. The matrix $E=s\pi$ is idempotent, and after either base change $P$ identifies with the image of that idempotent. Put $r=\operatorname{rank}_k E_k$. By [F1], $\operatorname{rank}_K E_K\ge r$ and $\operatorname{rank}_K(1-E)_K\ge n-r$. Idempotency gives the actual complementary decomposition $K^n=\operatorname{im}E_K\oplus\operatorname{im}(1-E)_K$: every vector is the sum of its two displayed images, and their intersection is zero after applying $E_K$. Their dimensions therefore add to $n$, forcing equality in both inequalities. Hence $\dim_K P_K=r=\dim_k P_k$. Only one finite generating list and one projectivity section were used. [F1, F2, given, construct, algebra]

2.1 Take finite split surjections $\pi_P:A^m\to P$ and $\pi_Q:A^n\to Q$, with sections $s_P,s_Q$. The finite matrix $T=s_Qf\pi_P$ has, after either base change, the same image dimension as $f$: the map $\pi_P$ remains surjective and $s_Q$ remains injective by their split identities. Applying [F1] to $T$ yields $\dim_K\operatorname{im}f_K\ge\dim_k\operatorname{im}f_k$. This argument does not treat $P$ or $Q$ as free. [F1, F2, step 1.1, construct, algebra]

3.1 For a bounded complex after either base change all chain groups are finite-dimensional. If $d_i:P_i\to P_{i-1}$ is its differential, finite-dimensional rank-nullity and cycles modulo boundaries give $$\dim (P_i)_*=\operatorname{rank}(d_i)_*+\dim H_i(P_*)+\operatorname{rank}(d_{i+1})_*,$$ where $*$ is $k$ or $K$. Summing with signs over the finite range cancels every differential rank, so the alternating homology dimension equals the alternating chain dimension. The latter sums are equal under the two base changes by step 1.1. This proves the asserted Euler equality, with no boundedness or generation conclusion inferred for an unrelated singular complex. [step 1.1, step 2.1, construct, algebra]

4.1 In the nonnegative case, $d_0=0$. Write $n_i=\dim_k(P_i)_k=\dim_K(P_i)_K$. The degree-zero hypotheses give $\operatorname{rank}(d_1)_k=n_0-1$ and $\operatorname{rank}(d_1)_K=n_0$. Step 2.1 gives $\operatorname{rank}(d_2)_K\ge\operatorname{rank}(d_2)_k$. Therefore $$\dim_K H_1(P_K)=n_1-n_0-\operatorname{rank}(d_2)_K\le n_1-n_0-\operatorname{rank}(d_2)_k=\dim_k H_1(P_k)-1.$$ Every section and generating set needed for the bounded complex belongs to one finite list; finite elimination over $k$ and $K$ requires no choice axiom. This proves all assertions in their stated projective scope. [F2, step 1.1, step 2.1, step 3.1, algebra] ∎
