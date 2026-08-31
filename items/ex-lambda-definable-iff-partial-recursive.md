---
id: ex-lambda-definable-iff-partial-recursive
kind: example
title: "Factorial is both lambda-definable and partial recursive"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-lambda-definable-iff-partial-recursive]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jeremy Avigad and Richard Zach, Lambda Definability"
      url: "https://builds.openlogicproject.org/content/lambda-calculus/lambda-definability/lambda-definability.pdf"
---

## Example

Let $\operatorname{fact}(0)=1$ and
$$ \operatorname{fact}(n+1)=(n+1)\operatorname{fact}(n). $$
This is the standard primitive-recursive presentation of factorial. The
lambda-definability theorem therefore supplies a closed lambda term $F$ such
that $F\,\overline n$ beta-reduces to
$\overline{\operatorname{fact}(n)}$ for each $n$.

## Facts & Assumptions

**Given:** The factorial function displayed above.

[L1] A partial function is lambda-definable if and only if it is partial recursive, by [[thm-lambda-definable-iff-partial-recursive]].

## Verification

**Proof technique:** direct.

1.1 The displayed recursion for factorial uses the initial value $1$ and the recursive update $(n,u)\mapsto (n+1)u$, so factorial is a primitive-recursive total function. [given]

2.1 Every primitive-recursive function is partial recursive. Applying [L1] to step 1.1 therefore gives a closed lambda term $F$ representing factorial on Church numerals. [L1, step 1.1]

3.1 Step 1.1 gives the partial-recursive side and step 2.1 gives the lambda-definable side, so factorial is a concrete example of the equivalence asserted in [L1]. [L1, step 1.1, step 2.1] ∎
