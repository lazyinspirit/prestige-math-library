---
id: thm-frattini-subgroup-is-nilpotent
kind: theorem
title: "The Frattini subgroup of a finite group is nilpotent"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-nilpotence-is-detected-modulo-the-frattini-subgroup]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "David A. Craven, Finite Group Theory, Sections 1.4 and 2.3"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/finitegroups2012.pdf"
pipeline_run: null
---

## Statement

The Frattini subgroup of every finite group is nilpotent. See [[thm-nilpotence-is-detected-modulo-the-frattini-subgroup]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] Let $G$ be finite and let $\Phi(G)\le N\trianglelefteq G$. Then $N$ is nilpotent if and only if $N/\Phi(G)$ is nilpotent. In particular, $G$ is nilpotent if and only if $G/\Phi(G)$ is nilpotent. ([[thm-nilpotence-is-detected-modulo-the-frattini-subgroup]]).

## Proof

**Proof technique:** direct.

1.1 Every automorphism of $G$ permutes the maximal proper subgroups, so their intersection $\Phi(G)$ is characteristic and therefore normal; the lifting theorem applies with $N=\Phi(G)$, whose quotient by $\Phi(G)$ is the trivial nilpotent group. [L1, given, algebra]

2.1 The trivial group is admitted: it has no maximal proper subgroup, so the defining family is empty and its intersection inside $G$ is $G$ itself, giving $\Phi(1)=1$, which is nilpotent of class zero. This proves the stated claim. [step 1.1, given, algebra] ∎
