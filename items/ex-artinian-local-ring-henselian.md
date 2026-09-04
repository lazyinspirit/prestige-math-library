---
id: ex-artinian-local-ring-henselian
kind: example
title: "A truncated polynomial local ring is Henselian"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-artinian-local-henselian-via-nilpotent-maximal-ideal, def-polynomial-ring-over-a-commutative-ring, def-quotient-ring]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 10.153: Henselian local rings"
      url: "https://stacks.math.columbia.edu/tag/04GE"
pipeline_run: null
---

## Example

Let $k$ be a field and let
$$A=k[x]/(x^n) \qquad (n \ge 1).$$
Then $A$ is a local Artinian ring, hence Henselian.

## Facts & Assumptions

**Given:** A field $k$, an integer $n \ge 1$, and the quotient ring
$A=k[x]/(x^n)$.

[L1] Polynomial rings and quotient rings are the ambient objects in which this
example lives ([[def-polynomial-ring-over-a-commutative-ring]], [[def-quotient-ring]]).

[L2] Artinian local rings are Henselian
([[cor-artinian-local-henselian-via-nilpotent-maximal-ideal]]).

## Verification

**Proof technique:** identify the maximal ideal and its nilpotence.

1.1 In $A$, every class with nonzero constant term is a unit, so the nonunits are exactly the classes divisible by $x$. Thus $A$ is local with maximal ideal $(x)$, and $(x)^n=0$. [L1, given, algebra]

2.1 The descending chain of ideals in $A$ is finite because every ideal is one of $(1),(x),\ldots,(x^{n-1}),(0)$, so $A$ is Artinian. Therefore [L2] applies and shows that $A$ is Henselian. [L2, step 1.1, algebra]

3.1 Hence the truncated polynomial local ring $k[x]/(x^n)$ is a concrete Artinian Henselian ring. [step 2.1] ∎
