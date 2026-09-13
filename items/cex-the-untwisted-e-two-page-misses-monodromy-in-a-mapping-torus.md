---
id: cex-the-untwisted-e-two-page-misses-monodromy-in-a-mapping-torus
kind: counterexample
title: An untwisted E2 table misses mapping-torus monodromy
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [thm-cellular-chains-compute-homology-with-local-coefficients, lem-fiber-transport-homology-and-cohomology-form-the-serre-local-systems, def-fiber-transport-and-monodromy-action]
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
    - title: Davis and Kirk, Lecture Notes in Algebraic Topology, Chapter 5 §§2.1 and 3, pp.98–107
      url: https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
---

## Statement

For the mapping torus of a homeomorphism $h:F\to F$, the coefficient system $b\mapsto H_q(F_b;R)$ over $S^1$ has monodromy $h_*$. Hence the formal untwisted table $H_p(S^1;H_q(F;R))$ can differ from the correct groups $H_p(S^1;H_q(F;R)_{h_*})$. For $F=S^1$, $R=\mathbb Z$, and a reflection $h$, the $q=1$ row changes from $(\mathbb Z,\mathbb Z)$ in degrees $(p=0,p=1)$ to $(\mathbb Z/2,0)$.

## Facts & Assumptions

**Given:** A homeomorphism $h:F\to F$, its mapping-torus bundle
$F\to T_h\to S^1$, and in the explicit case a reflection of $S^1$.

[F1] [[def-fiber-transport-and-monodromy-action]] identifies transport around the base loop with the gluing map up to fiber homotopy.

[F2] [[lem-fiber-transport-homology-and-cohomology-form-the-serre-local-systems]] turns its induced homology maps into the coefficient local systems.

[F3] [[thm-cellular-chains-compute-homology-with-local-coefficients]] computes
base homology from the lifted one-cell incidence and the specified monodromy.

## Proof

**Proof technique:** direct.

1.1 Lift one positive circuit of the base interval in the mapping-torus model $(F\times[0,1])/(x,1)\sim(h(x),0)$. Its endpoint identification on the fiber is $h$, so [F1] and [F2] give monodromy $h_*$ on $H_q(F;R)$. Therefore the correct base groups retain this local system rather than replacing it by a constant copy of its stalk. [F1, F2]

2.1 Let $F=S^1$ and let $h$ be a reflection. On $H_1(S^1;\mathbb Z)=\mathbb Z$, $h_*=-1$. Give the base circle one vertex and one edge. Its lifted edge boundary evaluates through [F3] to $T-1:\mathbb Z\to\mathbb Z$. For the correct monodromy $T=-1$, this is multiplication by $-2$, so the $q=1$ row is $H_0(S^1;\mathbb Z_{-1})=\mathbb Z/2$ and $H_1(S^1;\mathbb Z_{-1})=0$. If monodromy is discarded, $T=1$ makes the differential zero, giving $H_0=\mathbb Z$ and $H_1=\mathbb Z$ instead. [F3, step 1.1]

3.1 In the $q=0$ row the reflection acts trivially on $H_0(S^1;\mathbb Z)$, so the untwisted and correct rows agree there; the discrepancy is specifically caused by monodromy, not by the fiber groups. This comparison computes only the proposed coefficient rows and does not invoke or assert convergence of a Serre spectral sequence. No AC is used. [F2, F3, step 2.1] ∎
