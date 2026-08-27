---
id: ex-noetherian-nilradical-common-exponent
kind: example
title: "A common nilpotence exponent in a Noetherian quotient"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
deps: [thm-nilradical-of-a-noetherian-ring-is-nilpotent]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Hochster, Introduction to Commutative Algebra, Math 614 notes (2020)"
      url: "http://web.archive.org/web/20230308152844if_/https://dept.math.lsa.umich.edu/~hochster/615W22/614Lx.pdf"
    - title: "The Stacks Project, Section 10.32: Rings and modules with finiteness conditions"
      url: "https://stacks.math.columbia.edu/tag/00IM"
pipeline_run: null
---

## Example

Let $A=k[x,y]/(x^3,x^2y,y^4)$. Then the nilradical of $A$ is $(\overline x,\overline y)$, and a common nilpotence exponent is $5$: $(\overline x,\overline y)^5=(0)$.

## Facts & Assumptions

**Given:** A field $k$ and the quotient ring $A=k[x,y]/(x^3,x^2y,y^4)$.

[L1] In a Noetherian ring the nilradical is a nilpotent ideal ([[thm-nilradical-of-a-noetherian-ring-is-nilpotent]]).

## Verification

**Proof technique:** direct.

1.1 Every element of $(\overline x,\overline y)$ is a $k$-linear combination of positive-degree residue classes, and every such monomial is nilpotent because powers eventually hit one of the relations $x^3=0$, $x^2y=0$, or $y^4=0$. Thus $(\overline x,\overline y)$ is the nilradical. [given, algebra]

2.1 Any monomial of total degree $5$ in $\overline x$ and $\overline y$ either has $\overline y$-exponent at least $4$ or $\overline x$-exponent at least $2$ together with a positive $\overline y$-exponent, or else $\overline x$-exponent at least $3$; each case is zero in $A$. Hence $(\overline x,\overline y)^5=(0)$. The theorem [L1] guarantees that some common exponent must exist; this computation shows that $5$ works in this example. [L1, step 1.1, algebra]

3.1 Therefore the nilradical of this Noetherian quotient has a concrete common nilpotence exponent. [step 1.1, step 2.1] ∎
