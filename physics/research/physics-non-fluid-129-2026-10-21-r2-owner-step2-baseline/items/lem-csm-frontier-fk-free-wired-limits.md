---
id: lem-csm-frontier-fk-free-wired-limits
kind: lemma
title: "Existence of the free and wired infinite-volume FK limits"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 3
deps:
  - def-csm-frontier-fk-infinite-volume-states
  - lem-csm-frontier-fk-fkg-spatial-markov
  - lem-csm-lattice-product-and-measure-compactness
  - def-countable-choice
dependency_roles:
  def-csm-frontier-fk-infinite-volume-states: mathematical-premise
  lem-csm-frontier-fk-fkg-spatial-markov: mathematical-premise
  lem-csm-lattice-product-and-measure-compactness: mathematical-premise
  def-countable-choice: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Geoffrey Grimmett, The Random-Cluster Model, second edition"
      url: https://www.statslab.cam.ac.uk/~grg/books/rcm1-1.pdf
      locator: "Chapter 4, finite-volume free/wired limits and stochastic boundary comparison."
    - title: "Sascha Friedli and Yvan Velenik, Statistical Mechanics of Lattice Systems: A Concrete Mathematical Introduction"
      url: https://www.unige.ch/math/folks/velenik/smbook/Statistical_Mechanics_of_Lattice_Systems.pdf
      locator: "Chapter 3, compactness of finite-alphabet configuration laws and thermodynamic limits."
verification:
  precheck: pass
---

## Statement

For every $q\geq1$ and $p\in(0,1)$, the free finite-volume FK laws on $\Lambda_n$ are stochastically increasing under restriction as $n$ grows, and the wired finite-volume FK laws are stochastically decreasing under restriction. The probabilities of every finite-coordinate atom therefore have unique nonnegative normalized consistent numerical limits. Under Countable Choice, each limiting family extends uniquely to a probability measure on the cylinder-generated Borel sigma-algebra of $\{0,1\}^{E_\infty}$. Thus the free and wired infinite-volume states exist under this measure-extension hypothesis.

## Statement references

[[def-csm-frontier-fk-infinite-volume-states]]

[[def-countable-choice]]

## Facts & Assumptions

**Given:** $q\geq1$, $p\in(0,1)$, the free and wired finite-volume FK laws on the boxes $\Lambda_n$, and, for the measure-existence clause only, Countable Choice.

[F1] Finite FK laws have the spatial Markov property and are stochastically increasing in boundary wiring ([[lem-csm-frontier-fk-fkg-spatial-markov]]).

[A1] For the measure-existence clause only, assume Countable Choice [[def-countable-choice]]. No such assumption is used for the numerical cylinder limits.

[F2] Under Countable Choice, a consistent family of finite-coordinate probabilities on a finite-alphabet countable product extends to a probability measure, and sequences of such measures have cylinder-convergent subsequences ([[lem-csm-lattice-product-and-measure-compactness]]).

[F3] The free and wired finite-volume edge sets, extension convention, and cylinder-limit definition are those in [[def-csm-frontier-fk-infinite-volume-states]].

## Proof

1.1 Fix $n<m$ and condition the law on $E_m$ on every edge outside $E_n$. By [F1], the conditional law on $E_n$ is an FK law whose boundary partition records connections made by those fixed exterior edges. This partition is at least as wired as the free partition, so averaging the conditional laws gives $\phi^0_{m,p,q}|_{E_n}\geq_{st}\phi^0_{n,p,q}$. For the wired law on $E_m$, each induced partition on $\partial\Lambda_n$ is at most as wired as the one-class wired partition, so the same conditional comparison gives $\phi^1_{m,p,q}|_{E_n}\leq_{st}\phi^1_{n,p,q}$. [F1, F3, algebra]

2.1 For each finite edge set $F\subset E_\infty$ and each $S\subseteq F$, the event that every edge in $S$ is open is increasing. Its free probabilities therefore have a bounded monotone limit by step 1.1, and its wired probabilities also have a bounded monotone limit. Every atom on $F$ is recovered from these all-open probabilities by finite inclusion-exclusion: if $O$ is the prescribed open set and $C=F\setminus O$ the prescribed closed set, then $P(\omega|_F=O)=\sum_{T\subseteq C}(-1)^{|T|}P(\omega_e=1\text{ for all }e\in O\cup T)$. Hence every finite-dimensional atom probability converges for both sequences. [step 1.1, algebra]

3.1 The limits in step 2.1 are consistent under restriction, because the finite-volume atom probabilities are consistent whenever the smaller edge set lies inside $E_n$. Under [A1], use a fixed explicit enumeration of the countable edge set to apply the finite-alphabet extension in [F2]. Each limiting consistent family extends uniquely to a probability measure on the cylinder-generated Borel sigma-algebra; the same cylinder limits make it the unique subsequential limit of the corresponding sequence. Therefore the free and wired cylinder limits exist and are unique. [A1, F2, F3, step 2.1] ∎
