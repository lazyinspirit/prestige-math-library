---
id: fs-a-set-theoretic-section-of-an-extension-is-automatically-a-homomorphism
kind: false-statement
title: "FALSE: a set-theoretic section of an extension is automatically a homomorphism"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-split-extension-of-groups, def-group-homomorphism]
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
    - title: "J. S. Milne, Group Theory"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
---

## Statement

Every set-theoretic section of the surjection in a group extension is a group
homomorphism.

## Facts & Assumptions

**Given:** The quotient map $\pi:C_4\to C_2$ written additively, and the set section $s([0])=[0]$, $s([1])=[1]$.

[L1] A split extension requires a homomorphic section, not merely a set section
([[def-split-extension-of-groups]]).

[L2] A group homomorphism must preserve addition in cyclic additive notation
([[def-group-homomorphism]]).

## Refutation

**Proof technique:** direct.

1.1 The map $s$ is a set-theoretic section because reducing mod $2$ sends $[0]$ to $[0]$ and $[1]$ to $[1]$. [given, algebra]

2.1 In $C_2$ we have $[1]+[1]=[0]$, but in $C_4$ we get $s([1]+[1])=s([0])=[0]\neq[2]=[1]+[1]=s([1])+s([1])$. So [L2] shows that $s$ is not a homomorphism. Therefore the claim is false, and [L1] explains why set sections alone do not split extensions. [L1, L2, step 1.1] ∎
