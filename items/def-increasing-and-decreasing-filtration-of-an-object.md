---
id: def-increasing-and-decreasing-filtration-of-an-object
kind: definition
title: Increasing and decreasing filtration of an object
deps: ["def-abelian-category"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Charles A. Weibel, An Introduction to Homological Algebra, Chapter 5
      url: https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf
    - title: Romyar Sharifi, Homological Algebra
      url: https://math.ucla.edu/~sharifi/homalg.pdf
status: draft
origin: pipeline
pipeline_run: phase-2-catchup-24
---



## Definition

Let $A$ be an object of an abelian category. An **increasing filtration** is a specified family of subobjects $F_pA\subseteq A$, $p\in\mathbb Z$, with $F_pA\subseteq F_{p+1}A$. A **decreasing filtration** satisfies $F^{p+1}A\subseteq F^pA$. The translation on the same object is $F^pA=F_{-p}A$; translating back gives $F_pA=F^{-p}A$. A filtration-preserving morphism $f:A\to B$ factors on each piece as $F_pA\to F_pB\hookrightarrow B$ (or with upper indices). The restrictions are unique because the inclusions are monic. The ambient setting is [[def-abelian-category]].

## Source notes

[Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), §5.2 pp.122–125 and Definitions 5.4.2–4 pp.132–133; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), §4.1 pp.87–89 and Definition 4.2.1 p.90.
