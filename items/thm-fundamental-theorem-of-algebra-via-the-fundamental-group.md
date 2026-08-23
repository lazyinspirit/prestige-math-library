---
id: thm-fundamental-theorem-of-algebra-via-the-fundamental-group
kind: theorem
title: "Fundamental theorem of algebra by the fundamental-group obstruction"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-root-free-polynomial-circle-loops-are-nullhomotopic, lem-large-radius-polynomial-circle-loop-has-degree, def-complex-polynomial-degree-and-monic, cor-a-circle-loop-is-nullhomotopic-iff-its-degree-is-zero]
justified_by: []
aliases: []
landmark: true
short: 'FTA by $\pi_1(S^1)$'
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, Theorem 1.8"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
    - title: "J. Peter May, A Concise Course in Algebraic Topology, Chapter 1, §7"
      url: "https://math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
pipeline_run: null
---

## Statement

Every nonconstant complex polynomial has a complex root.

## Facts & Assumptions

**Given:** A nonconstant complex polynomial $p$.

[F1] A nonzero polynomial has a degree and a nonzero leading coefficient, and it is monic exactly when its leading coefficient is $1$ ([[def-complex-polynomial-degree-and-monic]]).

[L1] If a complex polynomial has no zero, then every normalized circle loop obtained from it is nullhomotopic ([[lem-root-free-polynomial-circle-loops-are-nullhomotopic]]).

[L2] For a monic complex polynomial of positive degree $n$, every radius satisfying the strict leading-term bound gives a normalized circle loop of degree $n$ ([[lem-large-radius-polynomial-circle-loop-has-degree]]).

[L3] A based circle loop is nullhomotopic exactly when its degree is zero ([[cor-a-circle-loop-is-nullhomotopic-iff-its-degree-is-zero]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose $p$ has no root. Since $p$ is nonconstant, it is nonzero and has degree $n\ge1$ and leading coefficient $c\ne0$. Dividing every coefficient by $c$ gives a monic polynomial $q=c^{-1}p$ of the same degree and with the same zero set, so $q$ is also root-free. [given, F1, assume-contra, algebra]

2.1 By [L1], every normalized radius-$R$ loop of $q$ is nullhomotopic, and therefore has degree zero by [L3]. [step 1.1, L1, L3]

2.2 Write $q(z)=z^n+\sum_{j<n}a_jz^j$, put $S=\sum_{j<n}|a_j|$, and take $R=\max\{1,S\}+1$. Then $R>\max\{1,S\}$, so [L2] says that the normalized radius-$R$ loop has degree $n$. [step 1.1, L2, choose]

3.1 Steps 2.1 and 2.2 assign the same loop both degree $0$ and degree $n$, impossible because $n\ge1$. Hence the root-free assumption is false and $p$ has a complex root. [step 2.1, step 2.2, algebra, discharge-contradiction] ∎
