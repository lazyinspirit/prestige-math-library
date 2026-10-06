---
id: prop-annihilators-of-simple-highest-weight-modules-are-primitive
kind: proposition
title: "Annihilators of simple highest-weight modules are primitive"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
deps: [def-primitive-ideal-of-an-enveloping-algebra, def-annihilator-ideal-of-a-lie-algebra-module, thm-verma-module-has-a-unique-simple-quotient, def-verma-module]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "P. Etingof, Representations of Lie Groups (18.757, MIT OCW 2023 full notes)"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
      locator: "Section 25.1, printed pp.123-124"
    - title: "D. Barbasch, Cells in Weyl groups and primitive ideals (AIM workshop notes, 2006)"
      url: "http://www.liegroups.org/papers/summer06/cells.pdf"
      locator: "Section 2.1, printed pp.6-7"
---

## Statement

Let $\mathfrak g$ be a finite-dimensional complex semisimple Lie algebra, let
$\lambda\in\mathfrak h^*$, let $M(\lambda)$ be the Verma module of highest
weight $\lambda$, and let $L(\lambda)$ be its unique simple quotient. Then
$I(\lambda):=\operatorname{Ann}_{U(\mathfrak g)}(L(\lambda))$ is a primitive
ideal of $U(\mathfrak g)$; moreover
$\operatorname{Ann}_{U(\mathfrak g)}M(\lambda)\subseteq I(\lambda)$, with
equality whenever $M(\lambda)$ is simple (in which case
$L(\lambda)\cong M(\lambda)$).

## Facts & Assumptions

**Given:** A finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a weight $\lambda\in\mathfrak h^*$, the Verma module $M(\lambda)$, and its unique simple quotient $L(\lambda)$.

[F1] $M(\lambda)$ has a unique maximal submodule $J(\lambda)$, and $L(\lambda)=M(\lambda)/J(\lambda)$ is simple; it is the unique simple quotient ([[thm-verma-module-has-a-unique-simple-quotient]], [[def-verma-module]]).

[F2] A two-sided ideal is primitive when it is the annihilator of some simple module ([[def-primitive-ideal-of-an-enveloping-algebra]]).

[F3] The annihilator of a module is a two-sided ideal, annihilators grow when passing to quotients, and the annihilator of a quotient $M/N$ contains the annihilator of $M$ ([[def-annihilator-ideal-of-a-lie-algebra-module]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], $L(\lambda)$ is a simple $U(\mathfrak g)$-module, so by [F2] its annihilator $I(\lambda)=\operatorname{Ann}_{U(\mathfrak g)}(L(\lambda))$ is a primitive ideal. [F1, F2, given]

1.2 The natural surjection $M(\lambda)\twoheadrightarrow L(\lambda)$ has kernel $J(\lambda)$; if $u$ annihilates every element of $M(\lambda)$, then it annihilates the image of every element in $L(\lambda)$, so $u\in\operatorname{Ann}_{U(\mathfrak g)}L(\lambda)$. Hence $\operatorname{Ann}_{U(\mathfrak g)}M(\lambda)\subseteq I(\lambda)$ by [F3]. [F1, F3, algebra]

2.1 If $M(\lambda)$ is simple, then its unique maximal submodule $J(\lambda)$ is a proper submodule by [F1] and therefore must be $0$, since a simple module has no nonzero proper submodule; hence $L(\lambda)=M(\lambda)/J(\lambda)\cong M(\lambda)$. The two modules then have the same annihilator, and by step 1.2 the inclusion is an equality. [step 1.2, F1, algebra] ∎ 