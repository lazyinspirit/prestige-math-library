---
id: cex-coset-multiplication-by-a-nonnormal-subgroup
kind: counterexample
title: "A nonnormal two-element subgroup of $\\operatorname{Sym}(\\{1,2,3\\})$ makes coset multiplication depend on representatives"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-coset-multiplication-well-defined-iff-normal, def-symmetric-group, lem-symmetric-group-is-a-group, def-coset, lem-coset-membership-and-equality]
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

## Statement refuted

For every subgroup $H$ of a group $G$, the rule

$$
(aH)(bH)=(ab)H
$$

is independent of the representatives $a$ and $b$.

## Counterexample

Take $G=\operatorname{Sym}(\{1,2,3\})$ and
$H=\{\operatorname{id},(12)\}$. Then
$\operatorname{id}H=(12)H=H$, but with $g=(123)$ one has

$$(\operatorname{id}g)H=gH\quad\text{and}\quad((12)g)H\ne gH.$$

Thus replacing the first representative $\operatorname{id}$ by the equivalent
representative $(12)$ changes the proposed product.

## Facts & Assumptions

**Given:** Permutations are composed from right to left, and $g=(123)$.

[L1] The symmetric group on $\{1,2,3\}$ is a group under composition ([[def-symmetric-group]], [[lem-symmetric-group-is-a-group]]).

[F1] A left coset has the form $aH$, and $aH=bH$ exactly when $a^{-1}b\in H$ ([[def-coset]], [[lem-coset-membership-and-equality]]).

[L2] Coset multiplication is well-defined exactly for normal subgroups ([[thm-coset-multiplication-well-defined-iff-normal]]).

## Verification

**Proof technique:** direct.

1.1 The set $H=\{\operatorname{id},(12)\}$ is a subgroup because $(12)^2=\operatorname{id}$, so both elements have their inverses in $H$ and $H$ is closed under composition. [L1, algebra]

1.2 Since $(12)\in H$, the representatives $\operatorname{id}$ and $(12)$ determine the same left coset $H$. [F1]

1.3 These output cosets would be equal only if $g^{-1}(12)g\in H$. Direct composition gives $g^{-1}(12)g=(13)\notin H$, so they are unequal. [F1, algebra]

2.1 For this $g$, the two proposed products obtained from the equal first input cosets are $gH$ and $((12)g)H$. [step 1.2, F1]

3.1 Hence the displayed multiplication rule depends on the chosen representative for this subgroup, refuting the proposed statement and concretely realizing the nonnormal case in [L2]. [step 2.1, step 1.3, L2] ∎
