---
id: ex-completion-depth-computation
title: A depth computation before and after completion
kind: example
status: published
origin: pipeline
deps: [def-depth-with-respect-to-an-ideal]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://stacks.math.columbia.edu/download/algebra.pdf
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-02-maintenance-receipts.jsonl (ex-completion-depth-computation). No independent judge or whole-closure certification.
    delegated_by: owner
---
## Example

Let
$$A=k[x,y]_{(x,y)}/(xy),\qquad \widehat A\cong k\llbracket x,y\rrbracket/(xy).$$
Then $x+y$ is regular on both rings and
$\operatorname{depth}A=\operatorname{depth}\widehat A=1$.

## Facts & Assumptions

**Given:** both rings have dimension $1$.

## Verification

**Proof technique:** direct.

1.1 In either the localized polynomial ring or the formal power-series ring, if $(x+y)g=0$ modulo $(xy)$, reduction modulo $(x)$ and modulo $(y)$ gives $yg=0$ in the domain $k[y]_{(y)}$ or $k\llbracket y\rrbracket$ and $xg=0$ in $k[x]_{(x)}$ or $k\llbracket x\rrbracket$. Thus $g$ lies in both $(x)$ and $(y)$, whose intersection is $(xy)$ in each ambient ring. Hence $x+y$ is regular on both $A$ and $\widehat A$. [given, algebra]

2.1 The regular element gives depth at least $1$, and the given dimension bound gives depth at most $1$, on both sides. Thus both depths equal $1$ directly. [step 1.1, algebra] ∎
