---
id: lem-finite-support-iteration-size-bound
kind: lemma
title: Size bound for finite-support ccc iterations
status: published
origin: pipeline
deps: [def-finite-support-forcing-iteration, thm-finite-support-iterations-preserve-ccc, cor-cardinal-absorption, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Karagila, Forcing & Symmetric Extensions, Lemma 7.12", url: "https://karagila.org/files/Forcing-2023.pdf"}
---

## Statement

In ZFC, let $\mu$ be infinite with $\mu^{\aleph_0}=\mu$. If a finite-support iteration has length at most $\mu$ and every iterand is forced ccc and to have cardinality below $\mu$, then it can be replaced stage by stage by a forcing-equivalent coherently coded presentation in which every $P_\alpha$ has cardinality at most $\mu$. Equivalently, each original stage has a dense suborder of cardinality at most $\mu$; no bound is asserted for redundant names in an arbitrary raw presentation.

## Facts & Assumptions

**Given:** AC, the stated iteration, and $\mu^{\aleph_0}=\mu$.

[F1] [[def-finite-support-forcing-iteration]] gives the recursion and finite supports.

[F2] [[thm-finite-support-iterations-preserve-ccc]] makes every stage ccc. The name-count below uses a forced enumeration of each iterand, not a nice-name theorem for subsets of a ground-model set.

[F3] [[cor-cardinal-absorption]] supplies finite and countable cardinal bounds.

## Proof

1.1 Inductively build a coded order $P_\alpha^*$ of size at most $\mu$ with a dense embedding into $P_\alpha$, coherent under restriction. At a successor, the forcing hypothesis and AC give a $P_\alpha$-name $\dot e_\alpha$ forced to be a surjection from $\check\mu$ onto $\dot Q_\alpha$ (allow repetitions). The local names $\dot e_\alpha(\check\xi)$ need not belong to the prescribed second-name carrier $R_\alpha$. For every $\xi<\mu$, use the AC/maximal-antichain mixing clause of the two-step convention underlying F1 to choose $\rho_{\alpha\xi}\in R_\alpha$ with $1_{P_\alpha}\Vdash\rho_{\alpha\xi}=\dot e_\alpha(\check\xi)$. AC selects these representatives simultaneously; retain only these at most $\mu$ carrier names as coded second coordinates. Given a raw $(p,\dot q)$, first strengthen its prefix to a coded condition and then choose a stronger coded prefix forcing $\dot q=\rho_{\alpha\xi}$ for some ground $\xi<\mu$, using the forced surjectivity and density of ordinal decisions. The pair with second coordinate $\rho_{\alpha\xi}$ is then a legal restricted-iteration condition below the raw pair. The coded successor has at most $\mu\cdot\mu=\mu$ conditions by F3. No arbitrary value name is silently used as an $R_\alpha$-coordinate. [F1, F2, F3]

2.1 At a limit, every raw condition is forcing-equivalent to the one obtained by replacing each off-support coordinate by its distinguished literal top name: the original prefix forces equality to top there, and induction on coordinates preserves the iteration order in both directions. Its remaining support is finite. Strengthen those finitely many coordinates successively to the coded carrier representatives from step 1.1, and pad every other coordinate with the distinguished top names. A finite support is chosen from an ordinal of size at most $\mu$, and each coordinate from one of at most $\mu$ earlier codes; F3 bounds the set of finite coded tuples by $\mu$. [F1, F3, step 1.1]

3.1 Successor evaluation and the limit union maps are dense embeddings, so the coded iteration is forcing-equivalent stage by stage and coherent under restriction. AC is used to choose the forced enumerations and dense-embedding representatives. Raw presentations may contain arbitrarily many forced-equal names, which is why only a dense presentation, not their literal size, is bounded. [step 1.1, step 2.1] ∎
