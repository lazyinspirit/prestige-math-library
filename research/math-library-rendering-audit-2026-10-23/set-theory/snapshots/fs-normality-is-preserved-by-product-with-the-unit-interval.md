---
id: fs-normality-is-preserved-by-product-with-the-unit-interval
kind: false-statement
title: Normality need not survive product with the interval
status: published
origin: pipeline
deps: [thm-rudin-dowker-space-and-cardinality, thm-dowker-product-characterization, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Hart, Set-Theoretic Methods in General Topology, Chapter 4 Theorem 3.4 p. 28 and Chapter 6 pp. 35–38"
      url: https://fa.ewi.tudelft.nl/~hart/onderwijs/old-courses/settop.pdf
---

## Statement

**False:** Every normal $T_1$ space $X$ has normal product $X\times[0,1]$, with the ordinary product topology and usual real interval.

## Facts & Assumptions

**Given:** We refute the assertion under AC.

[F1] For infinite $B\subseteq\omega\setminus\{0,1\}$, the Rudin space $X_R(B)$ is $T_1$, normal and not countably paracompact ([[thm-rudin-dowker-space-and-cardinality]]).

[F2] For $T_1$ spaces, normality of the interval product implies normality and countable paracompactness of the factor ([[thm-dowker-product-characterization]]).

[A1] AC is assumed for both cited constructions ([[def-axiom-of-choice]]).

## Refutation

1.1 Set $B=\{2,3,4,\ldots\}$ and take the specific witness $X=X_R(B)$. Explicitly its points are functions $h(n)\le\aleph_n$ whose coordinate cofinalities are all uncountable and strictly bounded by one finite aleph, with the relative ordinal box topology. The set $B$ is infinite and avoids zero and one, so F1 and A1 apply and verify that $X$ satisfies the asserted normality and $T_1$ hypotheses while failing countable paracompactness. [F1, A1]

2.1 If this $X\times[0,1]$ were normal, F2 would imply that $X$ is countably paracompact, contradicting step 1.1. Thus the witness has a nonnormal interval product and refutes the universal assertion. The product in the conclusion is the ordinary product of the already defined space $X$ and the entire interval, including its endpoints. QED. [step 1.1, F2, A1]
