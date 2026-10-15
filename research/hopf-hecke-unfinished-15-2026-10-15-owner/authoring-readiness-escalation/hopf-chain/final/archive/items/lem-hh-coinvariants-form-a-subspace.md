---
id: lem-hh-coinvariants-form-a-subspace
kind: lemma
title: "The coinvariants of a right-right Hopf module form a subspace"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 4
deps: [def-hh-right-right-hopf-module-and-coinvariants]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Hans-Juergen Schneider, Lectures on Hopf Algebras, notes by Sonia Natale, Trabajos de Matematica 31/95"
      url: "https://www.famaf.unc.edu.ar/~andrus/papers/Schn1.pdf"
      locator: "Section 2, printed p. 22: the coinvariant set is a k-subspace."
    - title: "D. S. Drogalski, Chapter 3: Hopf Algebras, UC San Diego 207A lecture notes"
      url: "https://mathweb.ucsd.edu/~drogalsk/207a-s20-lecturenotes.pdf"
      locator: "Section 3.6, printed p. 43: Definition 3.37 states that the coinvariants are a k-subspace."
---

## Statement

For a right-right Hopf module $M$ over a Hopf algebra $H$ over a field $k$, the subset $M^{\operatorname{co}H}=\{m\in M:\rho(m)=m\otimes1_H\}$ is a $k$-linear subspace of $M$.

## Facts & Assumptions

**Given:** A field $k$, a Hopf algebra $H$ over $k$, and a right-right Hopf module $M$.

[F1] The right coaction $\rho:M\to M\otimes H$ is linear and $M^{\operatorname{co}H}$ consists exactly of those $m$ with $\rho(m)=m\otimes1_H$ ([[def-hh-right-right-hopf-module-and-coinvariants]]).

## Proof

1.1 Define the linear map $T:M\to M\otimes H$ by $T(m)=\rho(m)-m\otimes1_H$. It is linear because $\rho$ and $m\mapsto m\otimes1_H$ are linear, and its kernel is exactly $M^{\operatorname{co}H}$ by [F1]. [given, F1, construct]

2.1 If $x,y\in\ker T$ and $a,b\in k$, then $T(ax+by)=aT(x)+bT(y)=0$. Also $T(0)=0$, so $\ker T$ is a $k$-linear subspace and hence so is $M^{\operatorname{co}H}$. [step 1.1, F1, algebra] ∎
