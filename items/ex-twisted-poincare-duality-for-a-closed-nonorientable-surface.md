---
id: ex-twisted-poincare-duality-for-a-closed-nonorientable-surface
kind: example
title: Twisted duality for a nonorientable surface
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [thm-poincare-duality-with-the-orientation-local-system, thm-cellular-chains-compute-homology-with-local-coefficients, prop-the-manifold-orientation-system-is-a-local-system]
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: Davis and Kirk, Lecture Notes in Algebraic Topology, Chapter 5 §2.2, Theorem 5.7, pp.101–103
      url: https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
provenance:
  statement: literature-derived
  proof: literature-derived
---

## Statement

Let $N_g$ be the closed connected nonorientable surface of genus $g\ge1$ and let $\mathcal O$ be its integral orientation system. Then $H_2(N_g;\mathcal O)\cong\mathbb Z$, and cap with its canonical twisted fundamental class gives
$$H^k(N_g;\mathbb Z)\cong H_{2-k}(N_g;\mathcal O),\qquad H^k(N_g;\mathcal O)\cong H_{2-k}(N_g;\mathbb Z)$$
for every integer $k$.

## Facts & Assumptions

**Given:** The polygon CW structure on $N_g$ with one vertex, one two-cell, and one-cells $a_1,\ldots,a_g$, attached by $a_1^2\cdots a_g^2$.

[F1] [[prop-the-manifold-orientation-system-is-a-local-system]] gives monodromy $a_i\mapsto-1$ for every crosscap loop.

[F2] [[thm-cellular-chains-compute-homology-with-local-coefficients]] computes the twisted complex from its group-ring incidence matrix.

[F3] [[thm-poincare-duality-with-the-orientation-local-system]] gives twisted duality on the closed surface.

## Proof

**Proof technique:** direct.

1.1 The lifted boundary of the two-cell has $a_i$-coefficient $a_1^2\cdots a_{i-1}^2(1+a_i)$, obtained by differentiating the attaching word one letter at a time, or equivalently by grouping its two successive lifted incidences along $a_i$. Under the orientation action in [F1], each preceding square acts as $1$ and $1+a_i$ acts as $1-1=0$. Thus the twisted $d_2:\mathbb Z\to\mathbb Z^g$ is zero. [F1, F2]

2.1 Each lifted one-cell has endpoint incidence $a_i-1$, which evaluates to $-2$. Hence $d_1:\mathbb Z^g\to\mathbb Z$ is $(x_1,\ldots,x_g)\mapsto-2\sum_i x_i$. In particular $H_2(N_g;\mathcal O)=\ker d_2=\mathbb Z$; also $H_1(N_g;\mathcal O)\cong\mathbb Z^{g-1}$ and $H_0(N_g;\mathcal O)\cong\mathbb Z/2$. These include $g=1$, where the middle group is zero. [F2, step 1.1]

3.1 There is a canonical pairing $\mathcal O\otimes\mathcal O\to\underline{\mathbb Z}$: after choosing either generator $o_x$, send $o_x\otimes o_x$ to $1$ and extend bilinearly. Replacing $o_x$ by $-o_x$ changes both factors, so the map is independent of the choice; the two monodromy signs cancel, so it commutes with transport. Apply [F3] first with the constant system and then with $\mathcal L=\mathcal O$. The first target is $\mathcal O$, and the second is $\mathcal O\otimes\mathcal O\cong\underline{\mathbb Z}$, giving the two displayed families. Step 2.1 verifies the top group directly. Degrees outside $0,1,2$ vanish, and no AC beyond that already assumed by [F3] is introduced. [F3, step 2.1] ∎
