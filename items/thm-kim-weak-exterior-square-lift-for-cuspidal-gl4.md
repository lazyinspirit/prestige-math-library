---
id: thm-kim-weak-exterior-square-lift-for-cuspidal-gl4
kind: theorem
title: Kim Weak Exterior-Square Lift for Cuspidal GL(4) Representations
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-standard-and-rankin-selberg-l-functions-on-gln
  - def-unitary-cuspidal-generic-gln-representation
proof_strategy: base-change-and-descent
provenance:
  statement: literature-derived
  proof: not-supplied
verification:
  precheck: pending
sources:
  references:
    - title: "Henry H. Kim, Functoriality for the Exterior Square of GL4 and the Symmetric Fourth of GL2"
      url: "https://web.archive.org/web/20200307192400id_/https://www.ams.org/journals/jams/2003-16-01/S0894-0347-02-00410-1/S0894-0347-02-00410-1.pdf"
      locator: "§4.2, Theorem 4.2.3: weak exterior-square lift for cuspidal GL(4)."
    - title: "D. Ramakrishnan, Modularity of the Rankin–Selberg L-series, and Multiplicity One for SL(2)"
      url: "https://www.maths.tcd.ie/EMIS/journals/Annals/152_1/ramak.pdf"
      locator: "The solvable base-change and descent input cited in Kim §4.2."
---

## Statement

Let $F$ be a number field and let $\pi$ be a unitary cuspidal generic
automorphic representation of $\mathrm{GL}_4(\mathbb A_F)$. There exists an
isobaric automorphic representation
$\Pi=\tau_1\boxplus\cdots\boxplus\tau_k$ of
$\mathrm{GL}_6(\mathbb A_F)$, where each $\tau_i$ is unitary and cuspidal on
$\mathrm{GL}_{n_i}(\mathbb A_F)$ and $\sum_i n_i=6$, such that at almost every
finite unramified place $v$ the Satake parameter of $\Pi_v$ is the exterior
square of the Satake parameter of $\pi_v$. Such a representation $\Pi$ is a
weak exterior-square lift of $\pi$.

## Statement references

[Henry H. Kim, *Functoriality for the Exterior Square of GL4 and the Symmetric Fourth of GL2*](https://web.archive.org/web/20200307192400id_/https://www.ams.org/journals/jams/2003-16-01/S0894-0347-02-00410-1/S0894-0347-02-00410-1.pdf)

[D. Ramakrishnan, *Modularity of the Rankin–Selberg L-series, and Multiplicity One for SL(2)*](https://www.maths.tcd.ie/EMIS/journals/Annals/152_1/ramak.pdf)

## Proof status

The cited proof uses solvable base change, converse theorems, descent for
isobaric representations, and local gamma-factor matching. Those constructions
are not locally reconstructed on this page. The established lift is retained
with its exact weak scope and escalated; the source citation is not a local
proof.
