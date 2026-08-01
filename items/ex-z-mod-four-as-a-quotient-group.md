---
id: ex-z-mod-four-as-a-quotient-group
kind: example
title: "The four cosets of $4\\mathbb Z$ in $(\\mathbb Z,+)$ reproduce addition modulo $4$"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [prop-integers-modulo-n-as-a-quotient-group, def-integers-modulo-n, def-addition-and-multiplication-modulo-n, thm-standard-representatives-modulo-n]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "UCL lecture notes, Normal subgroups and quotients"
      url: "https://www.homepages.ucl.ac.uk/~ucahmto/0007/_book/4-7-normal-subgroups-and-quotient-groups.html"
pipeline_run: null
---

## Example

The quotient group $\mathbb Z/4\mathbb Z$ has the four cosets

$$
4\mathbb Z,\quad 1+4\mathbb Z,\quad 2+4\mathbb Z,\quad 3+4\mathbb Z,
$$

and its operation is

$$
(a+4\mathbb Z)+(b+4\mathbb Z)=(a+b)+4\mathbb Z.
$$

Under the identification of $a+4\mathbb Z$ with the residue class $[a]_4$,
this is addition modulo $4$.

## Facts & Assumptions

**Given:** The additive group $(\mathbb Z,+)$ and its subgroup $4\mathbb Z$.

[L1] Every congruence class modulo $4$ has a unique representative among $0,1,2,3$ ([[thm-standard-representatives-modulo-n]]).

[F1] The integers modulo $4$ are congruence classes, and addition is defined by $[a]_4+[b]_4=[a+b]_4$ ([[def-integers-modulo-n]], [[def-addition-and-multiplication-modulo-n]]).

[L2] The quotient group $\mathbb Z/4\mathbb Z$ is literally the same set of classes with the same addition as the additive group of integers modulo $4$ ([[prop-integers-modulo-n-as-a-quotient-group]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], every coset $a+4\mathbb Z$ equals exactly one of the four displayed cosets, and the four are distinct. [L1]

1.2 Quotient addition adds representatives, so the sum of $a+4\mathbb Z$ and $b+4\mathbb Z$ is $(a+b)+4\mathbb Z$. [L2]

2.1 Sending $a+4\mathbb Z$ to $[a]_4$ therefore matches the four cosets with the four residue classes and carries the operation in step 1.2 to the modular addition in [F1]. [step 1.1, step 1.2, F1, L2] ∎
