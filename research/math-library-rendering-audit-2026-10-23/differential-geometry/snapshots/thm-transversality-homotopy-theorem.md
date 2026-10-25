---
id: thm-transversality-homotopy-theorem
kind: theorem
title: "The transversality homotopy theorem"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-countable-choice,
       lem-a-tubular-target-produces-a-submersive-finite-dimensional-perturbation-family,
       thm-parametric-transversality,
       def-homotopy-relative-and-path-homotopy]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, Part 10, Corollary 3.28"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes-10.pdf"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-02-maintenance-receipts.jsonl (thm-transversality-homotopy-theorem). No independent judge or whole-closure certification.
    delegated_by: owner
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $f:M\to N$ be smooth and let $Z\subseteq N$ be a closed embedded
submanifold. Then $f$ is smoothly homotopic to a smooth map $g:M\to N$ with
$g\pitchfork Z$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a smooth map $f:M\to N$ and a closed embedded submanifold $Z\subseteq N$.

[L1] A smooth map admits a finite-dimensional perturbation family whose evaluation map is a submersion, hence transverse to $Z$ ([[lem-a-tubular-target-produces-a-submersive-finite-dimensional-perturbation-family]]).

[L2] Under $\mathrm{AC}_\omega$, parametric transversality makes the bad-slice parameter set null ([[thm-parametric-transversality]]). In a positive-dimensional ball its complement is dense; in a zero-dimensional ball a null subset is empty.

[F1] Homotopies are maps on products with $I=[0,1]$ ([[def-homotopy-relative-and-path-homotopy]]).

## Proof
**Proof technique:** direct.

1.1 By [L1], choose an open ball $B\subseteq\mathbb R^m$ and a smooth family $\mathcal F:M\times B\to N$ with $\mathcal F_0=f$ such that the evaluation map $\mathcal F$ is transverse to $Z$. [L1, given, choose]

2.1 By [L2], the bad-slice parameter set is null in $B$. If $m>0$, its complement is dense and nonempty; if $m=0$, the null set is empty and $a=0$ is good. Choose a good parameter $a$. [L2, step 1.1]

3.1 Because $B$ is an open ball containing $0$, the straight segment $ta$ stays in $B$ for all $t\in I$. Therefore $$ H:M\times I\to N,\qquad H(x,t):=\mathcal F(x,ta), $$ is a smooth homotopy from $f$ to $g$ in the sense of [F1]. Thus $f$ is smoothly homotopic to a smooth map transverse to $Z$. [F1, step 1.1, step 2.1, algebra] ∎
