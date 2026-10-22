---
id: ex-qftx-doublet-removal
kind: example
title: Gauge-fixing doublets cannot create a new polynomial class
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 2
deps:
  - def-qftx-abelian-local-brst
  - lem-qftx-brst-nilpotence-doublets
justified_by: []
dependency_roles:
  def-qftx-abelian-local-brst: mathematical-premise
  lem-qftx-brst-nilpotence-doublets: mathematical-premise
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Glenn Barnich, Friedemann Brandt and Marc Henneaux, Local BRST cohomology in gauge theories
      url: https://arxiv.org/pdf/hep-th/0002245
      locator: Section 2.7, Appendix 2.B, equations (2.48)–(2.50) and the positive-doublet-degree exactness argument.
    - title: Norbert Dragon and Friedemann Brandt, BRST Symmetry and Cohomology
      url: https://arxiv.org/pdf/1205.3293
      locator: Section 3.1, the contracting-homotopy proof of the basic lemma.
---

## Example

In the local Abelian BRST algebra, take the nonminimal pair $\bar c,B$ with $\bar c$ odd, ghost number $-1$, $B$ even, ghost number $0$, and $s\bar c=B$, $sB=0$. The polynomial $B^2$ is $s$-closed, has doublet degree two, and is exact:
$$B^2=s(\bar c B)=s\left(\frac{hB^2}{2}\right).$$
This finite polynomial calculation illustrates removal of a doublet class. It does not establish positivity of any physical Hilbert-space quotient.

## Example references

[[def-qftx-abelian-local-brst]]

[[lem-qftx-brst-nilpotence-doublets]]

## Facts & Assumptions

**Given:** The nonminimal BRST pair and the doublet homotopy.

[F1] [[def-qftx-abelian-local-brst]]: $\bar c$ is odd with ghost number $-1$, $B$ is even with ghost number $0$, and $s\bar c=B$, $sB=0$.

[F2] [[lem-qftx-brst-nilpotence-doublets]]: for this pair, $h=\bar c\,\partial_L/\partial B$, $N=\bar c\,\partial_L/\partial\bar c+B\,\partial_L/\partial B$, and $sh+hs=N$.

## Verification

**Given:** [F1]–[F2].

1.1 Since $B$ is even, the graded Leibniz rule gives $s(B^2)=(sB)B+B(sB)=0$, so $B^2$ is $s$-closed. [given, F1, algebra]

1.2 Because $\bar c$ is odd, $s(\bar c B)=(s\bar c)B-\bar c(sB)=B^2$. Thus $B^2$ is exact with primitive $\bar c B$, whose ghost number is $-1$. [F1, algebra]

2.1 The operator $N$ counts the two factors of $B$, so $N(B^2)=2B^2$, while $hB^2=2\bar c B$. Therefore $s(hB^2/2)=B^2$, agreeing with the general contraction of [F2]. This is an algebraic polynomial identity and makes no statement about a positive norm or a state space. [F2, step 1.2, algebra] ∎

