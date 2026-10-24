---
id: lem-magnus-conjugation-coefficients-use-shorter-subwords
kind: lemma
title: "Magnus coefficient changes under longitude conjugation depend on lower-order coefficients"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-lower-central-series-and-magnus-expansion-for-links
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "John Milnor, Link Groups"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnorlink.pdf"
      locator: "§§3–5, PDF pp. 7–16, Magnus expansion and coefficient indeterminacy"
    - title: "Ryan Stees, Milnor’s Invariants for Knots and Links in Closed Orientable 3-Manifolds"
      url: "https://scholarworks.iu.edu/iuswrrest/api/core/bitstreams/54c7d68f-d982-4e1f-9550-e54140ada5ea/content"
      locator: "§2.5, printed pp. 16–18 (PDF pp. 24–26), based coefficient and indeterminacy discussion"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Let $F_r$ be the free group with Magnus expansion $E$, let $u,\lambda\in F_r$,
and let $w$ be a nonempty word of length $m$. The coefficient of $X_w$ in
$E(u^{-1}\lambda u)-E(\lambda)$ is an integer linear combination of
coefficients of $E(\lambda)$ on proper contiguous subwords of $w$. Thus, when
$w$ is the prefix of a Milnor index $I=(w,j)$, conjugating the longitude can
change its degree-$m$ coefficient only by an integer combination of
coefficients indexed by proper subsequences of $I$.

## Statement references

[Milnor, *Link Groups*, §§3–5](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnorlink.pdf)

[Stees, §2.5](https://scholarworks.iu.edu/iuswrrest/api/core/bitstreams/54c7d68f-d982-4e1f-9550-e54140ada5ea/content)

## Facts & Assumptions

**Given:** The noncommutative formal-series ring, augmentation ideal $\mathfrak m$, and Magnus expansion in the preceding definition.

[F1] Every Magnus expansion has constant term $1$, its positive-degree part lies in $\mathfrak m$, and multiplication concatenates words. [[def-lower-central-series-and-magnus-expansion-for-links]]

## Proof

**Given:** The words $u,\lambda\in F_r$, the Magnus expansion $E$, and the formal-series ring from the Definition.

1.1 Write $E(u)=1+U$ and $E(\lambda)=1+V$ with $U,V\in\mathfrak m$. Then $$E(u^{-1}\lambda u)-E(\lambda) =(1+U)^{-1}V(1+U)-V.$$ Expand $(1+U)^{-1}=\sum_{a\geq0}(-U)^a$. The term with no $U$ on either side is $V$ and cancels the subtracted $V$. Every remaining term is a product $(-U)^a VU^b$ with $a+b\geq1$. [F1, algebra]

2.1 A coefficient of degree $m$ in such a product uses a degree-$p$ monomial of $U^a$, a degree-$s$ monomial of $V$, and a degree-$q$ monomial of $U^b$ with $p+s+q=m$ and $p+q\geq1$. The $V$ monomial therefore has degree $s<m$ and occupies a contiguous middle block of the target word $w$, while the nonempty left or right block comes from $U$. Summing the finitely many decompositions of $w$ expresses its coefficient as an integer linear combination of coefficients of $E(\lambda)$ on proper contiguous subwords. Appending the longitude index $j$ makes each such index a proper subsequence of $(w,j)$. [F1, step 1.1, algebra] ∎

