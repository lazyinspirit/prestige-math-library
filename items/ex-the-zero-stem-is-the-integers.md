---
id: ex-the-zero-stem-is-the-integers
kind: example
title: The zero stable stem is the integers
status: draft
origin: pipeline
deps: ["def-stable-stem-of-the-sphere", "lem-freudenthal-identifies-the-eventual-suspension-system-for-spheres", "thm-based-sphere-maps-are-classified-by-geometric-degree", "prop-suspension-preserves-sphere-map-degree"]
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
      locator: Chapter 22, Section 2, printed pages 176--177
---

## Example

Degree gives a canonical isomorphism

$$ \pi_0^s\cong\mathbb Z, $$

under which the stable class of the identity sphere map is $1$.

## Facts & Assumptions

[F1] Degree is an isomorphism $\pi_n(S^n)\cong\mathbb Z$ and sends the identity to $1$ ([[thm-based-sphere-maps-are-classified-by-geometric-degree]]); suspension preserves degree ([[prop-suspension-preserves-sphere-map-degree]]).

[F2] The zero stem is the colimit of the suspension system $\pi_n(S^n)$ ([[def-stable-stem-of-the-sphere]]).

## Verification

**Given:** The sphere prespectrum and its zero-graded suspension system.

1.1 For every $n\geq1$, [F1] gives $\deg:\pi_n(S^n)\xrightarrow{\cong}\mathbb Z$, with the identity sent to $1$. [F1]

1.2 Suspension preserves degree by [F1]. Consequently the square [F1]

$$ \begin{CD} \pi_n(S^n) @>E>> \pi_{n+1}(S^{n+1})\\ @V\deg VV @VV\deg V\\ \mathbb Z @= \mathbb Z \end{CD} $$

commutes. Thus the degree identifications turn the entire system defining $\pi_0^s$ into the constant identity system on $\mathbb Z$.

2.1 By [F2], its colimit is the zero stem and hence is $\mathbb Z$. The identity at any stage represents the compatible element $1$, so its stable class maps to $1$. $\square$ [F1, F2, step 1.2]
