---
id: ex-wang-sequence-of-a-mapping-torus
kind: example
title: Wang sequence of a mapping torus
status: draft
origin: pipeline
pipeline_run: phase-2-next-18
deps: [thm-wang-sequence-for-a-fibration-over-the-circle, def-fiber-transport-and-monodromy-action]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: Hatcher, Algebraic Topology, Serre sequence over the circle
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch5.pdf
      locator: Theorem 5.3 and the two-column base-circle specialization, pp. 526–532
---

## Statement

Let $f:F\to F$ be a homeomorphism and form its mapping-torus bundle
$$T_f=(F\times[0,1])/(x,1)\sim(f(x),0)\longrightarrow S^1.$$
For every $q\geq0$, with $H_{-1}(F;\mathbb Z)=0$, its Wang sequence has map
$1-f_*$ and yields a natural short exact sequence
$$0\longrightarrow\operatorname {coker}(1-f_*:H_q(F)\to H_q(F))\longrightarrow H_q(T_f)\longrightarrow\ker(1-f_*:H_{q-1}(F)\to H_{q-1}(F))\longrightarrow0.$$
No splitting, natural or otherwise, is asserted.

## Facts & Assumptions

**Given:** a homeomorphism $f:F\to F$, its displayed mapping-torus bundle, the positive orientation of $S^1=[0,1]/0\sim1$, and integral coefficients.

[F1] [[def-fiber-transport-and-monodromy-action]] defines transport and its induced homology monodromy.

[F2] [[thm-wang-sequence-for-a-fibration-over-the-circle]] gives the natural long exact sequence with map $1-T_q$ for positive-loop transport $T_q$ and specifies the simultaneous sign change under orientation reversal.

## Verification

**Proof technique:** identify the gluing map as monodromy, then isolate the kernel and cokernel in one exact five-term segment.

1.1 Away from the identified endpoint, the quotient projection has product charts. Across the endpoint, use one interval on the $t=1$ side and one on the $t=0$ side, changing the fiber coordinate by $f$ in one direction and by $f^{-1}$ in the other. Thus the displayed map is the standard mapping-torus fiber bundle. Lifting the positive base loop from $t=0$ to $t=1$ starts at $x$ and ends at the class of $(x,1)$, which equals the class of $(f(x),0)$. Hence [F1] gives $T_q=f_*:H_q(F)\to H_q(F)$. [F1]

2.1 Substitute $T_q=f_*$ into the five-term part of [F2]: $$H_q(F)\xrightarrow{1-f_*}H_q(F)\xrightarrow{i_q}H_q(T_f) \xrightarrow{\partial_q}H_{q-1}(F) \xrightarrow{1-f_*}H_{q-1}(F).$$ Exactness gives $\ker i_q=\operatorname {im}(1-f_*)$, so $i_q$ descends to an injection from the displayed cokernel, whose image is $\ker\partial_q$. It also gives $\operatorname {im}\partial_q=\ker(1-f_*|_{H_{q-1}(F)})$, so $\partial_q$ corestricts to a surjection onto the displayed kernel. These two conclusions are exactly the claimed short exact sequence. [F2, step 1.1]

3.1 For $q=0$, the right group is zero by the stated $H_{-1}=0$ convention, so the conclusion is the literal isomorphism $H_0(T_f)\cong\operatorname {coker}(1-f_*|_{H_0F})$. If $F$ is empty, all three nonzero-index groups are zero and the same sequence is exact. If $f=\operatorname{id}$, both Wang maps vanish and the sequence becomes $0\to H_q(F)\to H_q(F\times S^1)\to H_{q-1}(F)\to0$, still without selecting a splitting. Orientation reversal replaces $1-f_*$ by $f_*-1$; multiplication by $-1$ leaves its kernel, image, and cokernel canonically isomorphic. Thus zero maps, identity monodromy, both exactness endpoints, and both orientation signs are covered. The argument uses no choice principle and proves no converse. [F2, step 1.1, step 2.1] ∎

## Source notes

Hatcher's proof of the Serre sequence, printed pp. 526–532, specializes over the one-cell circle to the two-column exact couple underlying Wang. The local Wang theorem [F2] supplies that derived sequence; steps 1.1–2.1 provide the mapping-torus monodromy and the complete kernel-cokernel extraction.
