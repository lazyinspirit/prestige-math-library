---
id: lem-point-process-law-is-determined-by-count-fidi
kind: lemma
title: "A point-process law is determined by its finite-dimensional count laws"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - def-random-measure-and-locally-finite-point-process
  - def-law-or-distribution-of-a-random-element
  - lem-law-of-a-random-element-is-a-probability-measure
  - thm-dynkin-pi-lambda
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gunter Last and Mathew Penrose, Lectures on the Poisson Process, author-hosted 2017 version"
      url: "https://stoch.math.kit.edu/img/Last/lastpenrose2017.pdf"
      locator: "Chapter 2, Proposition 2.10, proof of (ii) implies (i), printed p. 15 (PDF p. 27): count evaluation cylinders form a generating pi-system."
    - title: "Adrian Baddeley, Spatial Point Processes and their Applications, complete lecture notes"
      url: "https://leman.stat.vt.edu/VTCourses/BaddeleyPointProcesses.pdf"
      locator: "Lecture 1, Theorem 1.1, PDF p. 15: finite-dimensional count distributions determine the point-process distribution."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Statement

Let $\eta$ and $\eta'$ be point processes on $S$ with the evaluation sigma
algebra on $\mathcal N_{\mathrm{lf}}(S)$. If every finite vector of Borel-set
counts has the same distribution under $\eta$ and $\eta'$, then their laws on
$\mathcal N_{\mathrm{lf}}(S)$ are equal.

## Facts & Assumptions

**Given:** Point processes $\eta,\eta'$ with equal finite-dimensional laws of their count evaluations.

[F1] The evaluation maps generate the configuration sigma-algebra, and the law of a point process is its push-forward probability measure. ([[def-random-measure-and-locally-finite-point-process]], [[def-law-or-distribution-of-a-random-element]], [[lem-law-of-a-random-element-is-a-probability-measure]])

[F2] A probability measure is determined by its values on a generating pi-system. ([[thm-dynkin-pi-lambda]])

## Proof
**Proof technique:** direct.

1.1 Let $\overline{\mathbb N}_0:=\mathbb N_0\cup\{+\infty\}$, the range of every count evaluation, and let $\mathcal C$ consist of the cylinder sets $\{\mu:\mu(B_j)\in E_j,\ 1\le j\le m\}$ for finite Borel families $B_1,\ldots,B_m$ and subsets $E_j\subseteq\overline{\mathbb N}_0$. Each such constraint is measurable because this countable range consists of Borel singletons in $[0,+\infty]$. The family is a pi-system: intersecting two cylinders concatenates their finite coordinate lists, and if a Borel set occurs twice its two constraints are replaced by their intersection. Every evaluation preimage is a one-coordinate cylinder of this form, so by definition of the evaluation sigma-algebra $\sigma(\mathcal C)$ is the full configuration sigma-algebra. [given, F1, construct]

2.1 The hypothesis says the laws $P_\eta$ and $P_{\eta'}$ assign the same probability to every member of $\mathcal C$, since membership in a cylinder is a finite-vector count event. Both are probability measures by [F1]. Applying [F2] to this generating pi-system gives $P_\eta=P_{\eta'}$. [given, step 1.1, F1, F2] ∎
