---
id: ex-fixed-point-congruence-for-an-action-of-z-two
kind: example
title: 'An involution on five points has three fixed points and one two-point orbit, verifying $5\equiv3\pmod2$'
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-p-group-fixed-point-congruence, thm-integers-modulo-n-basic-algebra, thm-standard-representatives-modulo-n, def-congruence-modulo-an-integer]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Conrad, Group Actions, Section 5"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/gpaction.pdf"
pipeline_run: null
---

## Example

Let $\mathbb Z/2$ act on $X=\{1,2,3,4,5\}$ so that its nonidentity element
interchanges $1$ and $2$ and fixes $3,4,5$. Then $|X^{\mathbb Z/2}|=3$ and
$5\equiv3\pmod2$.

## Facts & Assumptions

**Given:** The additive group $P=\mathbb Z/2$ and the displayed permutation of $X$.

[L1] A finite $p$-group action satisfies $|X|\equiv|X^P|\pmod p$ ([[thm-p-group-fixed-point-congruence]]).

[L2] The residue classes modulo $2$ form a group ([[thm-integers-modulo-n-basic-algebra]]).

[L3] The two classes are represented by $0$ and $1$ ([[thm-standard-representatives-modulo-n]]).

[L4] Congruence modulo $2$ means divisibility of the difference by $2$ ([[def-congruence-modulo-an-integer]]).

## Verification

**Proof technique:** direct.

1.1 Map $0$ to the identity permutation and $1$ to $(1\,2)$. Since $(1\,2)^2=e$, [L2] and [L3] give an action of $P$ on $X$. [L2, L3]

2.1 Its orbit partition is $\{1,2\},\{3\},\{4\},\{5\}$, and the global fixed set is $\{3,4,5\}$. [step 1.1, L1]

3.1 Hence $|X|=5$, $|X^P|=3$, and $5-3=2$ is divisible by $2$, verifying [L1] by [L4]. [step 2.1, L1, L4, algebra] ∎
