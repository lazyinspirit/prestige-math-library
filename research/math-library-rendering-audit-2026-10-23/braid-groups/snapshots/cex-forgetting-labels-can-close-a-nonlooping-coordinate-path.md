---
id: cex-forgetting-labels-can-close-a-nonlooping-coordinate-path
kind: counterexample
title: "An exchange closes only after forgetting labels"
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps: [def-unordered-configuration-space,
       def-ordered-configuration-space,
       def-elementary-geometric-half-twist,
       lem-a-geometric-braid-slices-to-a-configuration-loop,
       def-based-loops-and-fundamental-group]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: counterexample
sources:
  scraped: []
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, §1.5, Figure 2, printed pp. 7–8"
      url: https://arxiv.org/pdf/1010.0321
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
---

## Statement refuted

A based loop in the unordered configuration space can occur only when its
ordered coordinate path also returns to the same ordered tuple.

## Facts & Assumptions

**Given:** Take $n=2$, $h=1/12$, $q_1=(-h,0)$, $q_2=(h,0)$, and $Q=(q_1,q_2)$. Consider the published positive elementary half twist $\sigma_1$.

[L1] The ordered configuration space $F_2(D^\circ)$ consists of ordered pairs with distinct coordinates ([[def-ordered-configuration-space]]).

[L2] The unordered quotient sends an ordered tuple to its coordinate-permutation orbit; in particular $(q_2,q_1)$ and $(q_1,q_2)$ have the same image ([[def-unordered-configuration-space]]).

[L3] The quotient projection $p_2:F_2(D^\circ)\to C_2(D^\circ)$ is continuous ([[def-unordered-configuration-space]]).

[L4] For $n=2$, the published positive half twist has midpoint $m_1=0$ and coordinates $(\sigma_1)_1(t)=\rho(t)$ and $(\sigma_1)_2(t)=-\rho(t)$; $\rho$ is continuous, nonzero, has endpoints $(-h,0)$ and $(h,0)$, and has norm at most $h$ ([[def-elementary-geometric-half-twist]]).

[L5] The positive elementary half twist is a geometric braid based at $Q$ ([[def-elementary-geometric-half-twist]]).

[L6] The slice path of a geometric braid is defined by $S(\beta)(t)=[(z_1(t),\ldots,z_n(t))]$ ([[lem-a-geometric-braid-slices-to-a-configuration-loop]]).

[L7] A based loop at $x_0$ is a path whose two endpoints both equal $x_0$ ([[def-based-loops-and-fundamental-group]]).

The coordinates and endpoint exchange are explicit; no choice principle is assumed or used.

## Counterexample

**Proof technique:** direct.

1.1 *Track the ordered pair.* The midpoint of $q_1$ and $q_2$ is $0$, so the published half-twist formula in [L4] gives the ordered path $$\widetilde\sigma_1(t)=(\rho(t),-\rho(t)).$$ Its coordinates lie in $D^\circ$ because $\lVert\rho(t)\rVert\le h<1$, and they are distinct because their difference is $2\rho(t)\ne0$. Thus this is a path in $F_2(D^\circ)$, with endpoints $$\widetilde\sigma_1(0)=(q_1,q_2)=Q,\qquad \widetilde\sigma_1(1)=(q_2,q_1).$$ [L1, L4]

2.1 Since $q_1\ne q_2$, the terminal ordered tuple $(q_2,q_1)$ is not $Q$. By [L7], $\widetilde\sigma_1$ is a path in the ordered configuration space but is not a based loop at $Q$. [step 1.1, L7]

2.2 *Forget the labels.* By [L2], the endpoint tuples have the same orbit: $$[(q_1,q_2)]=[(q_2,q_1)]=[Q].$$ By [L3], the quotient projection is continuous, so $\alpha(t):=[\widetilde\sigma_1(t)]$ is a continuous path in $C_2(D^\circ)$ with $\alpha(0)=\alpha(1)=[Q]$. By [L5, L6], this is the slice path $S(\sigma_1)$ of the positive geometric half twist, so it is the unordered based loop promised by the counterexample. [step 1.1, L2, L3, L5, L6, L7]

3.1 The ordered coordinate path fails to close at $Q$, while its unordered image closes at $[Q]$. Hence forgetting labels can close a nonlooping ordered coordinate path, refuting the claim in the statement. [step 2.1, step 2.2] ∎
