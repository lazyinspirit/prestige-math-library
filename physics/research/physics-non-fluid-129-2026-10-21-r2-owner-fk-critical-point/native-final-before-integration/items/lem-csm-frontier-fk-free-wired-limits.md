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
dependency_roles:
  def-csm-frontier-fk-infinite-volume-states: mathematical-premise
  lem-csm-frontier-fk-fkg-spatial-markov: mathematical-premise
  lem-csm-lattice-product-and-measure-compactness: mathematical-premise
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
  precheck: pending
---

## Statement

For every $q\geq1$ and $p\in(0,1)$, the free finite-volume FK laws on $\Lambda_n$ are stochastically increasing under restriction as $n$ grows, and the wired finite-volume FK laws are stochastically decreasing under restriction. Both sequences therefore have unique cylinder-probability limits, and those limits are probability measures on $\{0,1\}^{E_\infty}$; hence the free and wired infinite-volume states are well-defined.

## Statement references

[[def-csm-frontier-fk-infinite-volume-states]]

## Facts & Assumptions

**Given:** $q\geq1$, $p\in(0,1)$, the free and wired finite-volume FK laws on the boxes $\Lambda_n$, and cylinder-probability compactness for finite-alphabet configurations.

[F1] Finite FK laws have the spatial Markov property and are stochastically increasing in boundary wiring ([[lem-csm-frontier-fk-fkg-spatial-markov]]).

[F2] A consistent family of finite-coordinate probabilities on a finite-alphabet countable product extends to a probability measure, and sequences of such measures have cylinder-convergent subsequences ([[lem-csm-lattice-product-and-measure-compactness]]).

[F3] The free and wired finite-volume edge sets, extension convention, and cylinder-limit definition are those in [[def-csm-frontier-fk-infinite-volume-states]].

## Proof

1.1 Fix $n<m$ and condition the law on $E_m$ on every edge outside $E_n$. By [F1], the conditional law on $E_n$ is an FK law whose boundary partition records connections made by those fixed exterior edges. This partition is at least as wired as the free partition, so averaging the conditional laws gives $\phi^0_{m,p,q}|_{E_n}\geq_{st}\phi^0_{n,p,q}$. For the wired law on $E_m$, each induced partition on $\partial\Lambda_n$ is at most as wired as the one-class wired partition, so the same conditional comparison gives $\phi^1_{m,p,q}|_{E_n}\leq_{st}\phi^1_{n,p,q}$. [F1, F3, algebra]

2.1 For each finite edge set $F\subset E_\infty$ and each $S\subseteq F$, the event that every edge in $S$ is open is increasing. Its free probabilities therefore have a bounded monotone limit by step 1.1, and its wired probabilities also have a bounded monotone limit. Every atom on $F$ is recovered from these all-open probabilities by finite inclusion-exclusion: if $O$ is the prescribed open set and $C=F\setminus O$ the prescribed closed set, then $P(\omega|_F=O)=\sum_{T\subseteq C}(-1)^{|T|}P(\omega_e=1\text{ for all }e\in O\cup T)$. Hence every finite-dimensional atom probability converges for both sequences. [step 1.1, algebra]

3.1 The limits in step 2.1 are consistent under restriction, because the finite-volume atom probabilities are consistent whenever the smaller edge set lies inside $E_n$. By [F2], each limiting consistent family extends to a probability measure; the same cylinder limits make it the unique subsequential limit of the corresponding sequence. Therefore the free and wired cylinder limits exist and are unique. [F2, F3, step 2.1] ∎
