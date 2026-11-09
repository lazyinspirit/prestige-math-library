---
id: lem-author-60d95bfb692a-finite-subintegral-cdh-cover
kind: lemma
title: Finite subintegral maps are cdh covers
status: published
domain: mathematics
deps:
  - def-cdh-topology-interface
  - def-seminormal-scheme-interface
dependency_roles:
  def-cdh-topology-interface: mathematical-premise
  def-seminormal-scheme-interface: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 8
---

## Statement
Let $p:T\to X$ be a finite subintegral morphism between separated finite-type schemes over a field. Then the singleton $\{p\}$ is a cdh covering family. Here finite means affine with finite-module coordinate rings; subintegral means integral, bijective on points and inducing isomorphisms on all residue fields. A cdh covering family generates a covering sieve for the topology of [[def-cdh-topology-interface]].

## Facts & Assumptions

**Given:** A finite subintegral morphism $p:T\to X$ in the indicated scheme category.

**Goal:** Show that $p$ is a completely decomposed proper morphism and hence a cdh cover.

[F1] A finite morphism is proper: it is separated, of finite type and universally closed. This follows affine-locally from integral maps being closed, a property preserved by base change. [[def-cdh-topology-interface]]

[F2] A completely decomposed proper morphism is a cdh covering singleton. Complete decomposition means that every target point has a preimage with isomorphic residue field. [[def-cdh-topology-interface]]

## Proof

**Proof technique:** Apply the definitions.

1.1 By finiteness and [F1], $p$ is proper. By subintegrality, every $x\in X$ has a preimage $t$ and $\kappa(x)\to\kappa(t)$ is an isomorphism. Thus $p$ is completely decomposed. [F1, given]

2.1 By [F2], the singleton $\{p\}$ is a cdh cover, as required. [F2, step 1.1] ∎
