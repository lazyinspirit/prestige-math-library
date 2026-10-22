---
id: lem-csm-frontier-fk-crossing-amplification
kind: lemma
title: "Crossing sharpness and subcritical decay for square-lattice FK"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 7
deps:
  - def-countable-choice
  - def-csm-frontier-fk-infinite-volume-states
  - lem-csm-frontier-fk-free-wired-limits
  - lem-csm-frontier-fk-cylinder-pressure-comparison
  - lem-csm-frontier-fk-wired-annuli-and-numerical-threshold
  - lem-csm-frontier-fk-subcritical-exponential-decay
dependency_roles:
  def-countable-choice: mathematical-premise
  def-csm-frontier-fk-infinite-volume-states: mathematical-premise
  lem-csm-frontier-fk-free-wired-limits: mathematical-premise
  lem-csm-frontier-fk-cylinder-pressure-comparison: mathematical-premise
  lem-csm-frontier-fk-wired-annuli-and-numerical-threshold: mathematical-premise
  lem-csm-frontier-fk-subcritical-exponential-decay: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Vincent Beffara and Hugo Duminil-Copin, The self-dual point of the two-dimensional random-cluster model is critical for q >= 1"
      url: https://arxiv.org/pdf/1006.5073
      locator: "Sections 3–4: Theorems 12–13, Propositions 10 and 16, Lemmas 14–15, and the proof of Theorem 2."
    - title: "Geoffrey Grimmett, The Random-Cluster Model, second edition"
      url: https://www.statslab.cam.ac.uk/~grg/books/rcm1-1.pdf
      locator: "Chapters 4 and 6: free/wired limits, planar sharpness route, and subcritical finite-size estimates."
verification:
  precheck: pass
---

## Statement

Assume Countable Choice. For every real $q\geq1$, put $p_{\rm sd}(q)=\sqrt q/(1+\sqrt q)$. The square-lattice free and wired cylinder-limit FK probability laws exist. For every $p>p_{\rm sd}(q)$, both have positive percolation probability. For every $p<p_{\rm sd}(q)$, there are $C(p,q),c(p,q)>0$ such that every arbitrary-boundary cylinder-limit FK state $\phi$ satisfies
$$\phi(x\leftrightarrow y)\leq C(p,q)e^{-c(p,q)\lVert x-y\rVert_2}\qquad(x,y\in\mathbb Z^2).$$
In particular, both percolation probabilities vanish below $p_{\rm sd}(q)$ and $p_c^0(q)=p_c^1(q)=p_{\rm sd}(q)$. These conclusions do not identify the free and wired measures at the critical parameter.

## Statement references

[[def-countable-choice]]

[[def-csm-frontier-fk-infinite-volume-states]]

[[lem-csm-frontier-fk-free-wired-limits]]

[[lem-csm-frontier-fk-cylinder-pressure-comparison]]

[[lem-csm-frontier-fk-wired-annuli-and-numerical-threshold]]

[[lem-csm-frontier-fk-subcritical-exponential-decay]]

## Facts & Assumptions

**Given:** Real $q\geq1$, parameters $p\in(0,1)$, and the square-lattice model and percolation thresholds of [[def-csm-frontier-fk-infinite-volume-states]].

[A1] Countable Choice, in the sense of [[def-countable-choice]], is assumed for the countably additive probability-law and countable coupling constructions below.

[F1] Under [A1], free and wired finite-box FK laws have countably additive Borel cylinder-limit probability laws ([[lem-csm-frontier-fk-free-wired-limits]]).

[F2] Write $D_r$ for the cylinder event of an origin path to $\partial\Lambda_r$ within $\Lambda_r$, and $\pi^b_p$ for the numerical cylinder weights. With $\Theta^b(p)=\inf_r\pi^b_p(D_r)$, the numerical pressure comparison proves $\Theta^1(t)\leq\Theta^0(p)$ whenever $t<p$ ([[lem-csm-frontier-fk-cylinder-pressure-comparison]]).

[F3] The numerical threshold construction proves $\Theta^1(t)>0$ for every $t>p_{\rm sd}(q)$ ([[lem-csm-frontier-fk-wired-annuli-and-numerical-threshold]]).

[F4] Under [A1], the subcritical exponential-decay lemma gives the displayed two-point bound uniformly for every arbitrary-boundary cylinder-limit state whenever $p<p_{\rm sd}(q)$ ([[lem-csm-frontier-fk-subcritical-exponential-decay]]).

## Proof

1.1 By [A1] and [F1] the free and wired probability laws exist. In either law the events $D_r$ decrease with $r$. Their intersection is precisely the event that the origin cluster is unbounded: connection to every box boundary is equivalent to an unbounded cluster, and every finite path reaching a farther boundary contains an initial path to the nearer boundary. Countable additivity gives continuity from above, hence $\theta^b(p,q)=\inf_r\pi^b_p(D_r)=\Theta^b(p)$. This uses actual existing probability laws, rather than inferring their existence from consistent numerical cylinder weights. [A1, F1, F2, given, algebra]

2.1 Fix $p>p_{\rm sd}(q)$ and set $t=(p+p_{\rm sd}(q))/2$. Then $p_{\rm sd}(q)<t<p$. By [F2] and [F3], $\Theta^0(p)\geq\Theta^1(t)>0$, while [F3] directly gives $\Theta^1(p)>0$. Step 1.1 proves positive percolation for both laws at $p$. No equality of free and wired laws is used. [F2, F3, step 1.1, algebra]

3.1 For $p<p_{\rm sd}(q)$ apply [F4]. In particular, each free or wired law satisfies the displayed bound. An origin path to $\partial\Lambda_r$ reaches one of its $8r$ vertices, each of Euclidean norm at least $r$. A finite union bound gives $\phi(D_r)\leq8rC(p,q)e^{-c(p,q)r}\to0$. Step 1.1 then gives zero percolation. Both defining infima are $p_{\rm sd}(q)$, since every parameter above it belongs to each positive-percolation set and none below it does. The bound for all other cylinder-limit states is already exactly [F4]. [F4, given, step 1.1, step 2.1, algebra] ∎

## Remarks

The finite numerical annulus construction and pressure comparison are choice-free. Countable Choice is stated explicitly where the proof requires actual infinite-volume Borel laws and the subcritical countable coupling process. Free/wired threshold coincidence is proved here by comparison across two distinct parameters, without an additional planar threshold-coincidence assumption.

