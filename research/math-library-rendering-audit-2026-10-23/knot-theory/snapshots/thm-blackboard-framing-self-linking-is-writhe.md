---
id: thm-blackboard-framing-self-linking-is-writhe
kind: theorem
title: "Blackboard self-linking equals diagram self-writhe"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps: [def-oriented-link-in-s-three-and-ambient-isotopy,
       def-regular-oriented-link-diagram,
       def-oriented-crossing-sign-writhe-and-blackboard-framing,
       alg-oriented-linking-number-from-diagram,
       thm-oriented-linking-number-scan-terminates-and-is-correct,
       lem-linking-number-even-sum-and-reidemeister-invariance,
       lem-framed-knot-push-off-self-linking-well-defined,
       def-framed-knot-self-linking-and-seifert-framing,
       lem-blackboard-push-off-has-two-mixed-crossings-per-crossing,
       def-countable-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mohamed Elhamdadi, Mustafa Hajij, and Kyle Istvan, Framed Knots, arXiv:1910.10257v6 (2020), §3, pp. 3–9"
      url: "https://arxiv.org/pdf/1910.10257v6"
      locator: "§3, Proposition 3.9 and its local push-off calculation, pp. 8–9"
    - title: "Danny Calegari, Introduction to Knot Theory, University of Chicago course notes (2025), §3.3, pp. 26–29"
      url: "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
      locator: "§3.3, writhe discussion following Proposition 3.12, p. 29"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Assume the Axiom of Countable Choice. Let $D$ be a regular oriented diagram
of a knot $K$ with blackboard framing $b_D$. The self-linking number of the
framed knot $(K,b_D)$ equals the diagram writhe:
$$\operatorname{sl}(K,b_D)=\operatorname{wr}(D).$$
More generally, let $D$ be a regular oriented diagram of an oriented link
$L=K_1\cup\cdots\cup K_r$, and let $b_{D,i}$ be the blackboard framing
of $K_i$ induced by its component subdiagram. Then
$\operatorname{sl}(K_i,b_{D,i})=\operatorname{wr}_i(D)\qquad(1\le i\le r).$ Total writhe of a link still includes
the signs of mixed crossings, while the sum of component self-linking numbers
uses only self-crossings.

## Statement references

[[def-regular-oriented-link-diagram|Regular oriented diagrams]]

[[def-oriented-crossing-sign-writhe-and-blackboard-framing|Crossing signs, writhe, and blackboard framing]]

[[lem-blackboard-push-off-has-two-mixed-crossings-per-crossing|Crossing count for a blackboard push-off]]

[[def-framed-knot-self-linking-and-seifert-framing|Self-linking of a framed knot]]

[[def-countable-choice|Countable-choice hypothesis]]

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and a regular oriented diagram $D$ of a knot $K$, or, for the component claim, of a link $L=K_1\cup\cdots\cup K_r$.

[A1] The Axiom of Countable Choice, written $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

[F1] The self-linking number of a framed knot is the linking number with a sufficiently small embedded push-off along its framing section ([[lem-framed-knot-push-off-self-linking-well-defined]], [[def-framed-knot-self-linking-and-seifert-framing]]).

[F2] For a two-component diagram the algorithmic linking number is one half of the signed sum of its mixed crossing signs ([[alg-oriented-linking-number-from-diagram]], [[thm-oriented-linking-number-scan-terminates-and-is-correct]]).

[F3] The blackboard push-off has exactly two mixed crossings of the original sign for each original self-crossing and no other mixed crossings ([[lem-blackboard-push-off-has-two-mixed-crossings-per-crossing]]).

## Proof

1.1 By [F3], the mixed crossing list for $K\cup K_{b_D}$ has two crossings of sign $\operatorname{sgn}(c)$ for each crossing $c$ of $D$ and no others. Therefore its signed mixed sum is $2\sum_c\operatorname{sgn}(c)=2\operatorname{wr}(D)$. [A1, F3, given, algebra]

2.1 By [F2], the linking number of $K$ with its blackboard push-off is half this mixed sum; by [F1] it is the self-linking number. Thus $\operatorname{sl}(K,b_D)=\operatorname{wr}(D)$. For a link diagram $D$ and each component $K_i$, apply the same calculation to its regular component subdiagram with induced blackboard framing $b_{D,i}$; crossings with other components are not mixed crossings of that component and its push-off, so precisely its self-crossings contribute. [A1, F1, F2, step 1.1, construct] ∎