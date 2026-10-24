---
id: def-qc-exact-recovery-of-a-quantum-code
kind: definition
title: Exact recovery of an encoded quantum code
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 6
deps: [def-adjoint-of-a-linear-map-between-inner-product-spaces, def-inner-product-space, def-qc-kraus-representation, def-qc-quantum-channel, def-qc-quantum-code-isometry-and-code-projector, lem-qc-linear-map-agreement-on-pure-states-implies-complete-agreement, thm-adjoint-exists-and-is-unique-in-finite-dimension, thm-qc-isometric-encoding-projector, thm-qc-trace-preserving-kraus-normalization]
provenance:
  statement: literature-derived
  proof: not-applicable
aliases: []
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Preskill, Quantum Information, Chapter 7: Quantum Error Correction (working draft, March 2026)"
      url: https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf
    - title: "David W. Kribs, Raymond Laflamme, David Poulin, and Maia Lesosky, Operator Quantum Error Correction"
      url: https://arxiv.org/pdf/quant-ph/0504189
---

## Definition

Let $H_L,H_P,H_O$ be nonzero finite-dimensional complex inner-product
spaces. An encoding isometry $V:H_L\to H_P$ has code projector $P=VV^*$;
[[thm-qc-isometric-encoding-projector]] gives $V^*V=I_{H_L}$, so
$\operatorname{Ad}_V(X)=VXV^*$ is trace-preserving.
Let $\mathcal N:\mathcal B(H_P)\to\mathcal B(H_O)$ be a channel. The code
is **exactly correctable** for $\mathcal N$ if there is a decoded recovery
channel
$\mathcal R:\mathcal B(H_O)\to\mathcal B(H_L)$ for which

$$\mathcal R\circ\mathcal N\circ\operatorname{Ad}_V =\operatorname{id}_{\mathcal B(H_L)}$$

as linear maps, where $\operatorname{Ad}_V(X)=VXV^*$. Equivalently,
the physical recovery $\operatorname{Ad}_V\circ\mathcal R$ satisfies
$$(\operatorname{Ad}_V\circ\mathcal R\circ\mathcal N\circ\operatorname{Ad}_V)(\rho)=V\rho V^*$$
for every positive semidefinite trace-one logical operator $\rho$.

It suffices to check equality on the rank-one projectors $P_\psi$ from
[[lem-qc-linear-map-agreement-on-pure-states-implies-complete-agreement]]
for unit vectors $\psi$: by that lemma,
agreement on those projectors implies agreement on every operator and after
tensoring with the identity on any finite reference system.

For any chosen finite Kraus representation
$\mathcal N(X)=\sum_aE_aXE_a^*$, trace preservation gives
$\sum_aE_a^*E_a=I_{H_P}$ by
[[thm-qc-trace-preserving-kraus-normalization]].
