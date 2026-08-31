---
id: ex-distinguishable-prefix-nonregularity-criterion
kind: example
title: "The prefixes 0^n distinguish the language {0^n1^n : n >= 0}"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-distinguishable-prefix-nonregularity-criterion, def-distinguishing-word]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Eric Blais, Models of Computation, 20. Nonregular Languages"
      url: "https://cs.uwaterloo.ca/~eblais/cs365/w26/nonregular"
---

## Example

Let
$$ L:=\{0^n1^n:n\geq 0\}. $$
The prefixes $0^n$ give an infinite family of pairwise distinguishable words for
$L$.

## Facts & Assumptions

**Given:** The language $L=\{0^n1^n:n\geq 0\}$.

[L1] By [[def-distinguishing-word]], a suffix distinguishes two prefixes exactly when appending it puts one resulting word in $L$ and the other outside $L$.

[L2] By [[cor-distinguishable-prefix-nonregularity-criterion]], infinitely many pairwise distinguishable prefixes force nonregularity.

## Verification

**Proof technique:** direct.

1.1 Fix integers $i<j$. Appending the suffix $1^i$ gives $0^i1^i\in L$ and $0^j1^i\notin L$, so [L1] shows that $1^i$ distinguishes the prefixes $0^i$ and $0^j$. [L1, given]

2.1 Because every pair $0^i,0^j$ with $i<j$ is distinguished by step 1.1, the family $\{0^n:n\geq 0\}$ is pairwise distinguishable. Therefore [L2] implies that $L$ is not regular. [L2, step 1.1] ∎
