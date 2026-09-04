---
id: ex-elimination-of-useless-symbols
kind: example
title: "Removing one nongenerating variable and one unreachable variable"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-elimination-of-useless-symbols]
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://dokumen.pub/notes-on-formal-languages-automata-computability-and-complexity-draftnbsped.html"
---

## Example

Consider the grammar
$$ S\to AB\mid a,\qquad A\to a,\qquad B\to b,\qquad C\to cC,\qquad D\to d. $$
The variable $C$ is nongenerating, and $D$ is generating but unreachable from
$S$. Deleting both yields the smaller grammar
$$ S\to AB\mid a,\qquad A\to a,\qquad B\to b, $$
which generates the same language $\{ab,a\}$.

## Facts & Assumptions

**Given:** The grammar displayed above.

[L1] Eliminating useless symbols preserves the generated language, by
[[thm-elimination-of-useless-symbols]].

## Verification

**Proof technique:** direct.

1.1 The variable $C$ is nongenerating because its only production is $C\to cC$, which never removes the variable $C$. The variable $D$ is reachable from no sentential form derived from $S$, because no production from $S$, $A$, or $B$ mentions $D$. [given]

2.1 Every terminal derivation from $S$ therefore uses only the variables $S$, $A$, and $B$, and those derivations yield either $a$ or $ab$. So deleting $C$ and $D$ leaves the language unchanged. [step 1.1]

3.1 This is exactly the useless-symbol elimination guaranteed by [L1]. [L1, step 2.1] ∎
