---
id: cex-qft-qed-compact-charge-sector
kind: counterexample
title: Compact gauge model fixes total matter charge
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 5
proof_strategy: direct
deps:
  - lem-qft-lattice-local-gauss-flux
dependency_roles:
  lem-qft-lattice-local-gauss-flux: mathematical-premise
generation:
  role: counterexample
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "John B. Kogut, An Introduction to Lattice Gauge Theory and Spin Systems, Reviews of Modern Physics 51 (1979), §VI.C, printed pp. 694–696"
      url: "https://chimera.roma1.infn.it/ENZO/FC/ESTRATTI/DUALITY/kogut1979.pdf"
      locator: "Complete review retrieved; §VI.C read for Gauss constraints, flux and external charge sectors."
    - title: "Patrick Emonts and Erez Zohar, Gauss Law, Minimal Coupling and Fermionic PEPS for Lattice Gauge Theories, SciPost Physics Lecture Notes 12 (2020), §§2.1–2.4"
      url: "https://arxiv.org/html/1807.01294"
      locator: "Complete notes retrieved; §§2.1–2.4 read for the global charge constraint implied by summing lattice Gauss laws."
---

## Statement refuted

For every finite oriented graph and every fixed background $b$, the compact gauge model has a physical state in every total matter-occupation sector $N\in\{0,\ldots,s|V|\}$, independently of $b$.

## Counterexample

Use two vertices $v_1,v_2$, one link $e:v_1\to v_2$, one fermion mode per vertex, and $b_{v_1}=b_{v_2}=0$. A state with exactly one occupied fermion mode cannot be physical, whatever link-electric basis label is chosen: summing the two Gauss equations fixes total occupation to zero.

## Facts & Assumptions

**Given:** The finite-graph CAR model on the specified graph, fixed zero background, and the Gauss-law physical subspace.

[F1] [[lem-qft-lattice-local-gauss-flux]]: on a graph with no external boundary, every physical vector satisfies $\sum_x n_x=\sum_x b_x$.

## Proof

**Given:** [F1] and the graph and background in the Counterexample.

1.1 Here $G_{v_1}=E_e-n_{v_1}$ and $G_{v_2}=-E_e-n_{v_2}$, so $G_{v_1}+G_{v_2}=-(n_{v_1}+n_{v_2})$ on their common domain; the link flux cancels. [given, F1, algebra]

1.2 The zero-background identity from [F1] requires $n_{v_1}+n_{v_2}=0$ on every physical vector. The normalized occupation vector with $n_{v_1}=1,n_{v_2}=0$ has total number one, so it is not physical and the asserted every-sector property fails. [F1, step 1.1, algebra] ∎

