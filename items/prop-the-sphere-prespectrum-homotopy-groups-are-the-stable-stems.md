---
id: prop-the-sphere-prespectrum-homotopy-groups-are-the-stable-stems
kind: proposition
title: The sphere prespectrum groups are the classical stable stems
status: draft
origin: pipeline
deps: ["def-stable-stem-of-the-sphere", "lem-freudenthal-identifies-the-eventual-suspension-system-for-spheres"]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: J. P. May, A Concise Course in Algebraic Topology
      url: https://web.archive.org/web/20220823180711if_/http://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: Chapter 22, Section 2, printed page 177
---

## Statement

For every $k\geq0$, $\pi_k(\mathbb S)$ is canonically isomorphic to the
eventual value of

$$ \pi_{n+k}(S^n)\xrightarrow{E} \pi_{n+k+1}(S^{n+1})\xrightarrow{E}\cdots. $$

This eventual group is the classical $k$th stable homotopy group of spheres.

## Facts & Assumptions

[F1] For fixed $k\geq0$, every bonding map after any index $N>k+1$ is an isomorphism ([[lem-freudenthal-identifies-the-eventual-suspension-system-for-spheres]]).

[F2] The stable-stem definition is the colimit of the sphere suspension system and records its finite-tail independence ([[def-stable-stem-of-the-sphere]]).

## Proof

**Given:** A fixed integer $k\geq0$.

1.1 Choose $N>k+1$. By [F1], every map in the tail beginning at $N$ is an isomorphism. Sending $x\in\pi_{N+k}(S^N)$ to its colimit class is surjective, since every later representative can be transported back uniquely through the intervening isomorphisms. [F1]

1.2 If two elements at stage $N$ have the same colimit class, their images agree at a later stage. The composite from stage $N$ to that stage is an isomorphism by [F1], so the original elements agree. The stage-$N$ map is therefore injective. [F1]

2.1 Changing $N$ replaces this isomorphism by transport through canonical bonding isomorphisms; [F2] shows that all choices identify the same colimit. By the definition of the sphere prespectrum and the stable stem, that colimit is $\pi_k(\mathbb S)=\pi_k^s$. $\square$ [F1]
