---
id: def-marked-position-decomposition
kind: definition
title: "Marked positions and admissible Ogden decompositions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-computation-alphabet-and-word-convention]
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://www.scribd.com/document/977881977/Tcbook-Lang"
---

## Definition

Let $z=a_1\cdots a_n$ be a word over $\Sigma$. A set
$$ M\subseteq \{1,\ldots,n\} $$
is a set of **marked positions** of $z$.

Fix an integer $p\ge 1$. A decomposition
$$ z=uvwxy $$
is **$p$-admissible with respect to $M$** when:

- the concatenated substring $vx$ contains at least one marked position;
- the substring $vwx$ contains at most $p$ marked positions.

## Remarks

- Ogden's lemma strengthens the ordinary pumping lemma by controlling where the
  pumped material $vx$ must lie relative to the marked positions.

- The definition does not itself assert that pumping preserves the language; it
  only records the combinatorial shape of the decomposition.
