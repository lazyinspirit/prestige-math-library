---
id: cex-an-abstractly-dense-proper-subgroup-of-zp
kind: counterexample
title: "The embedded integers form an abstractly proper but topologically dense subgroup of Zp"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [prop-zp-is-topologically-generated-by-one, thm-the-integers-map-injectively-and-densely-into-zp]
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
    - title: "Jordan Bell, The profinite completion of the integers, the p-adic integers, and Prufer p-groups"
      url: "https://jordanbell.info/LaTeX/mathematics/profinite/"
---

## Statement refuted

Every dense subgroup of $\mathbb Z_p$ is all of $\mathbb Z_p$ as an abstract
subgroup.

## Facts & Assumptions

**Given:** The embedded copy of $\mathbb Z$ inside $\mathbb Z_p$.

[L1] The image of $\mathbb Z$ in $\mathbb Z_p$ is dense
([[thm-the-integers-map-injectively-and-densely-into-zp]]).

[L2] The additive group of $\mathbb Z_p$ is not abstractly cyclic, even though
the closure of $\mathbb Z\cdot1$ is all of $\mathbb Z_p$
([[prop-zp-is-topologically-generated-by-one]]).

## Counterexample

**Proof technique:** direct.

1.1 By [L1], the embedded copy of $\mathbb Z$ is dense in $\mathbb Z_p$. [L1, given]

2.1 The embedded copy of $\mathbb Z$ is exactly $\mathbb Z\cdot1$. By [L2], its closure is all of $\mathbb Z_p$ but it is not equal to $\mathbb Z_p$ as an abstract subgroup. Thus a dense subgroup can be proper. [L2, step 1.1]

3.1 Therefore the stated universal claim is false, and the embedded copy of $\mathbb Z$ is the required counterexample. [step 1.1, step 2.1] ∎
