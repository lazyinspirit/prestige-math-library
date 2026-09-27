---
id: ex-completion-depth-computation
title: A depth computation before and after completion
kind: example
status: published
origin: pipeline
deps: [thm-completion-preserves-cohen-macaulayness, lem-completion-reflects-depth]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://stacks.math.columbia.edu/download/algebra.pdf
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
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

1.1 If $(x+y)g=0$ modulo $(xy)$, reduction modulo $(x)$ and modulo $(y)$ shows that $g$ lies in both $(x)$ and $(y)$, hence in $(xy)$; thus $x+y$ is regular in $A$. Flat base change preserves its regularity in $\widehat A$. [given]

2.1 The regular element gives depth at least $1$, and the dimension bound gives depth at most $1$, on both sides. This also illustrates the general completion depth equality. [step 1.1, algebra] ∎
