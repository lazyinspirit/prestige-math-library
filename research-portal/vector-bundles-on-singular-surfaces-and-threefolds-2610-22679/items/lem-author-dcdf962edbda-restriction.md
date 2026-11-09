---
id: lem-author-dcdf962edbda-restriction
kind: lemma
title: Prime-field restriction preserves actual comparison diagrams
status: draft
domain: mathematics
deps:
  - def-motivic-cohomology
  - lem-author-dcdf962edbda-qcqs-site
dependency_roles:
  def-motivic-cohomology: mathematical-premise
  lem-author-dcdf962edbda-qcqs-site: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 9
---

## Statement
For the forgetful functor $u:\mathrm{Sch}^{\mathrm{qcqs}}_k\to\mathcal C_F$, the completed weight-zero motivic functor is $u^*\mathbb Z(0)_{\mathrm{mot},F}$. Precomposition transports natural maps, cartesian diagrams and equivalences of source $D(\mathbb Z)$-valued functors to actual natural maps, cartesian diagrams and equivalences on qcqs $k$-schemes. It requires no assertion that cdh sheafification commutes with changing the base field.

## Facts & Assumptions
**Given:** The hypotheses in the statement.

**Goal:** Establish the displayed construction or conclusion with its actual maps.

[F1] [[def-motivic-cohomology]] defines the actual restriction; [[lem-author-dcdf962edbda-qcqs-site]] provides its source objects.

## Proof
1.1 The completed motivic definition is explicitly restriction from the prime field. Precomposition evaluates a source diagram at $u(X)$, without changing any value or arrow. Limits and equivalences in a functor category are computed objectwise, so cartesian diagrams and equivalences are retained. [F1, construct]

2.1 A morphism of $k$-schemes is also an $F$-morphism. The same source naturality square therefore remains commutative after restriction. These observations give the actual diagram and all its compatibility maps, without comparing the big $k$- and big $F$-topoi. [F1, step 1.1] ∎
