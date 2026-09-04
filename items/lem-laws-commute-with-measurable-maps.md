---
id: lem-laws-commute-with-measurable-maps
kind: lemma
title: "Laws commute with measurable maps"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-law-or-distribution-of-a-random-element, lem-law-of-a-random-element-is-a-probability-measure, thm-composition-with-borel-functions-preserves-measurability]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  references:
    - title: "S. R. S. Varadhan, Probability Theory, Section 1.4"
      url: "https://math.nyu.edu/~varadhan/course/PROB.ch1.pdf"
    - title: "J. R. Norris, Probability and Measure, Section 3.3"
      url: "https://www.statslab.cam.ac.uk/~james/Lectures/pmall.pdf"
---

## Statement

Let $X:(\Omega,\mathcal F,\mathbb P)\to(S,\Sigma)$ be a random element, and let
$g:(S,\Sigma)\to(T,\Tau)$ be measurable. Then $g\circ X$ is a random element and
for every $B\in\Tau$,
$$\mathbb P_{g\circ X}(B)=\mathbb P_X(g^{-1}(B)).$$

## Facts & Assumptions

**Given:** A random element $X$ and a measurable map $g$ as in the Statement.

[L1] Composition of measurable maps is measurable
([[thm-composition-with-borel-functions-preserves-measurability]]).

[L2] The law of a random element is defined by pullback of measurable target
sets ([[def-law-or-distribution-of-a-random-element]]).

[L3] The law of any random element is a probability measure
([[lem-law-of-a-random-element-is-a-probability-measure]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the composite $g\circ X$ is measurable, hence a random element. [given, L1]

1.2 For every $B\in\Tau$, $$(g\circ X)^{-1}(B)=X^{-1}(g^{-1}(B)).$$ Therefore [L2] gives $$\mathbb P_{g\circ X}(B)=\mathbb P((g\circ X)^{-1}(B))=\mathbb P(X^{-1}(g^{-1}(B)))=\mathbb P_X(g^{-1}(B)).$$ This right-hand side is defined because [L3] makes $\mathbb P_X$ a probability measure on $(S,\Sigma)$. [L2, L3]

2.1 Steps 1.1 and 1.2 prove the measurable-map compatibility of laws. [step 1.1, step 1.2] ∎
