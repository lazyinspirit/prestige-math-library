---
id: thm-moore-zfc-l-space
kind: theorem
title: A ZFC L-space
status: published
origin: pipeline
deps:
  - def-set-theoretic-l-and-s-spaces
  - def-moore-l-space-topology
  - lem-moore-topology-is-nonseparable
  - lem-moore-topology-is-hereditarily-lindelof
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Moore, A solution to the L space problem, Theorem 1.3 and Section 7, printed pp. 2 and 21–24"
      url: https://arxiv.org/pdf/math/0501524
---

## Statement

ZFC proves that $(\omega_1,\tau[\omega_1])$ is a zero-dimensional regular
Hausdorff, hereditarily Lindelöf, nonseparable space.  In particular it is an
L-space.

## Facts & Assumptions

**Given:** ZFC and the fixed Moore minimal-walk construction.

[F1] [[def-moore-l-space-topology]] makes every Moore space zero-dimensional regular Hausdorff.

[F2] [[lem-moore-topology-is-hereditarily-lindelof]] proves hereditary Lindelöfness for every $X\subseteq\omega_1$.

[F3] [[lem-moore-topology-is-nonseparable]] proves nonseparability whenever $X$ is uncountable.

[F4] [[def-set-theoretic-l-and-s-spaces]] defines an L-space as regular Hausdorff, hereditarily Lindelöf, and not hereditarily separable.

## Proof

**Proof technique:** direct assembly.

1.1 Take $X=\omega_1$.  By [F1] its Moore topology is zero-dimensional, regular, and Hausdorff; by [F2] it is hereditarily Lindelöf. [F1, F2, given]

2.1 The set $\omega_1$ is uncountable, so [F3] says the whole space is nonseparable.  A hereditarily separable space must itself be separable, since the whole underlying set is one of its subspaces.  Thus this space is not hereditarily separable. [F3, given, step 1.1]

3.1 The four conclusions in steps 1.1 and 2.1 meet [F4] exactly, proving that $(\omega_1,\tau[\omega_1])$ is an L-space.  No new choice is made in this assembly; every choice-dependent construction or thinning belongs to the corresponding supplier under its own stated hypotheses.  The empty and singleton cases of the topology are irrelevant to the witness because $\omega_1$ is uncountable. [F1, F2, F3, F4, step 1.1, step 2.1] ∎
