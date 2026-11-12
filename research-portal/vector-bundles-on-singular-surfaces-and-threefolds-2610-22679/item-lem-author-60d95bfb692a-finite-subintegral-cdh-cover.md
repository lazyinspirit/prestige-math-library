---
title: Finite subintegral maps are cdh covers
status: published
research_item: lem-author-60d95bfb692a-finite-subintegral-cdh-cover
dependency_level: 8
---

PDF p. 5: HK18 Theorem 1.4

## Prerequisites

- [def-cdh-topology-interface](item-def-cdh-topology-interface)
- [def-seminormal-scheme-interface](item-def-seminormal-scheme-interface)
- [math:cor-finite-morphism-proper](https://alphabetamath.cc/item/cor-finite-morphism-proper)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
Assume the Axiom of Choice. Fix a field $k$ and let $p:T\to X$ be a finite subintegral $k$-morphism between separated finite-type $k$-schemes. Then the singleton $\{p\}$ is a cdh covering family. Here finite means affine with finite-module coordinate rings; subintegral means integral, bijective on points and inducing isomorphisms on all residue fields. A cdh covering family generates a covering sieve for the cdh topology on this scheme category.

## Statement references
[def-cdh-topology-interface](item-def-cdh-topology-interface)

[def-seminormal-scheme-interface](item-def-seminormal-scheme-interface)

[math:cor-finite-morphism-proper](https://alphabetamath.cc/item/cor-finite-morphism-proper)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Facts & Assumptions

**Given:** The Axiom of Choice, a field $k$, and a finite subintegral $k$-morphism $p:T\to X$ between separated finite-type $k$-schemes in the indicated scheme category.

**Goal:** Show that $p$ is a completely decomposed proper morphism and hence a cdh cover.

[F1] Under the Axiom of Choice, every finite morphism of schemes is proper: it is separated, of finite type and universally closed. The properness supplier uses Choice only for universal closedness; this application inherits that assumption. [math:cor-finite-morphism-proper](https://alphabetamath.cc/item/cor-finite-morphism-proper) The Axiom of Choice states that every family of nonempty sets has a choice function. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F2] A completely decomposed proper morphism is a cdh covering singleton. Complete decomposition means that every target point has a preimage with isomorphic residue field. The scheme category and covering-sieve convention are those of [def-cdh-topology-interface](item-def-cdh-topology-interface).

[F3] A subintegral morphism is integral, bijective on underlying points and induces isomorphisms on all residue fields. Finiteness means affineness with coordinate algebras finite as modules. [def-seminormal-scheme-interface](item-def-seminormal-scheme-interface)

## Proof

**Proof technique:** Apply the finite-proper theorem and the definitions.

1.1 By finiteness and [F1], $p$ is proper. This is the only use of Choice in this argument, inherited through the universal-closedness conclusion of the properness supplier. By subintegrality and [F3], every $x\in X$ has a preimage $t$ and $\kappa(x)\to\kappa(t)$ is an isomorphism. Thus $p$ is completely decomposed in the sense of [F2]. [F1, F2, F3, given]

2.1 By [F2], the singleton $\{p\}$ is a cdh cover, as required. [F2, step 1.1] ∎
