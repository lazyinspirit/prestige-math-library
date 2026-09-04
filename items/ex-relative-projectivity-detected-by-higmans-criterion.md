---
id: ex-relative-projectivity-detected-by-higmans-criterion
kind: example
title: "A permutation-induced summand is detected as relatively projective by Higman's criterion"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-higman-criterion-for-relative-projectivity]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "J. MacQuarrie, Modular Representations of Profinite Groups"
      url: "https://eprints.maths.manchester.ac.uk/1262/1/relprojpaperB.pdf"
    - title: "Peter Webb, A Course in Finite Group Representation Theory (23 Feb 2016 draft)"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
---

## Example

Let $H\le G$ be finite groups and consider the permutation module

$$ k[G/H]\cong \operatorname{Ind}_H^G(k), $$

where $k$ is the trivial $kH$-module. Then Higman's criterion detects
$k[G/H]$ as relatively $H$-projective.

## Facts & Assumptions

**Given:** A subgroup $H\le G$ of a finite group and the permutation module
$M=k[G/H]$.

[L1] Higman's criterion says that a module is relatively $H$-projective exactly
when the identity is a relative trace from an $H$-endomorphism
([[thm-higman-criterion-for-relative-projectivity]]).

## Verification

**Proof technique:** direct.

1.1 The module $M$ is itself induced from the trivial $kH$-module, so it is relatively $H$-projective by definition. [given]

2.1 Applying [L1] to the relatively $H$-projective module of step 1.1 produces an $H$-endomorphism $\alpha$ with $\operatorname{Tr}_H^G(\alpha)=\operatorname{id}_M$. Thus Higman's criterion detects this permutation-induced module exactly as expected. [L1, step 1.1] ∎
