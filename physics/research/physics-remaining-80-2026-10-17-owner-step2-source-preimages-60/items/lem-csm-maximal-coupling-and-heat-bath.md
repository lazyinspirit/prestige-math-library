---
id: lem-csm-maximal-coupling-and-heat-bath
kind: lemma
title: "Finite maximal coupling and heat-bath stationary law"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 3
deps: ["lem-csm-lattice-specification-consistency", "def-countable-choice"]
justified_by: []
dependency_roles: {"lem-csm-lattice-specification-consistency": "mathematical-premise", "def-countable-choice": "mathematical-premise"}
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Sascha Friedli and Yvan Velenik, Statistical Mechanics of Lattice Systems: A Concrete Mathematical Introduction (complete author PDF, revised 2017)"
      url: "https://www.unige.ch/math/folks/velenik/smbook/Statistical_Mechanics_of_Lattice_Systems.pdf"
      locator: "Chapter 3, PDF pp. 127–132; Chapter 6, PDF pp. 265–289; Appendix, PDF pp. 329–332."
    - title: "Junior Seminar in Mathematical Physics, Proofs from the Book: Ising, DLR, Dobrushin and Peierls sections (complete 99-page seminar notes)"
      url: "https://web.math.princeton.edu/~js129/PDFs/Junior_Seminar_in_Mathematical_Physics__Proofs_from_the_Book.pdf"
      locator: "PDF pp. 20–24, 31–43, and 52–55."
---

## Statement

For probability vectors $p,q$ on a finite set $A$, there is a coupling $(X,Y)$ with $\Pr(X\ne Y)=\tfrac12\sum_{a\in A}|p(a)-q(a)|$. For a finite region $\Lambda$ with strictly positive single-site Gibbs conditionals, the random-scan heat-bath chain has the finite-volume Gibbs law as its unique stationary distribution. This chain is an auxiliary finite-state proof device, not a physical time evolution.

## Facts & Assumptions

**Given:** A finite state alphabet and the normalized finite-volume conditional laws of [[lem-csm-lattice-specification-consistency]].

[F1] The finite-volume conditional Gibbs laws are positive probability kernels consistent under nested regions ([[lem-csm-lattice-specification-consistency]]).

## Proof
1.1 Put $m(a)=\min\{p(a),q(a)\}$ and $r=1-\sum_a m(a)=\tfrac12\sum_a|p(a)-q(a)|$. Couple the common mass $m(a)$ on the diagonal. If $r>0$, couple the residual masses $p-m$ and $q-m$ by their product divided by $r$; their supports are disjoint, so this part always disagrees. If $r=0$, the diagonal coupling already has the required marginals. [given, algebra]

1.2 On the finite configuration space $A^\Lambda$, choose a site uniformly and resample its spin from the conditional Gibbs law. The finite-volume Gibbs law is invariant under each such update because it resamples from its own conditional distribution; hence it is stationary for the random-scan mixture. [F1, algebra]

2.1 Let $N=|\Lambda|>0$ and fix a target configuration. Since there are finitely many strictly positive conditional probabilities, their minimum $p_*>0$. In $N$ updates, the probability of selecting a fixed ordering of all sites is $N^{-N}$, and conditional on that ordering the probability of setting every spin to its target is at least $p_*^N$. Thus every starting state reaches the target with probability at least $\varepsilon=N^{-N}p_*^N>0$. The $N$-step kernel has a common component $\varepsilon\delta_{\rm target}$, so it contracts total variation by at most $1-\varepsilon$; two stationary laws must coincide. If $\Lambda=\varnothing$, the configuration space is a singleton and uniqueness is immediate. [F1, step 1.2, algebra] ∎ 