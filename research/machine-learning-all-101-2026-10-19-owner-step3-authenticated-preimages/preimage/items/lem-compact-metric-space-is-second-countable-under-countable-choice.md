---
id: lem-compact-metric-space-is-second-countable-under-countable-choice
kind: lemma
title: "A compact metric space is second-countable under countable choice"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-countable-choice
  - lem-compact-metric-space-has-a-countable-dense-subset
  - def-countable
  - thm-product-of-countable
  - cor-archimedean-reciprocal
  - def-metric-space
  - def-metric-ball
  - def-metric-topology
  - def-second-countable-space
justified_by: []
axiom_use: "AC_omega is used through the published compact-metric countable-dense-subset lemma; the only use is to supply a countable dense set. No full Axiom of Choice or Dependent Choice is used."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
sources:
  references:
    - title: "Dmitriy Panchenko, Lecture Notes on Probability Theory, §4.4"
      url: "https://drive.google.com/uc?export=download&id=0B6JeBUquZ5BwVlV1dEpsTHVVbTA&resourcekey=0-5xbvKhDXZjrYRLfqppsHuQ"
    - title: "Filippo Santambrogio, Introduction to Optimal Transport Theory, §§1–2"
      url: "https://arxiv.org/pdf/1009.3856"
---

## Statement

Assume the Axiom of Countable Choice. If $(X,d)$ is a compact metric space, then its metric topology has an at-most-countable basis; equivalently, $X$ is second-countable.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and a compact metric space $(X,d)$.

[A1] The Axiom of Countable Choice selects one member from each member of a countable family of nonempty sets. [[def-countable-choice]]

[F1] Under the Axiom of Countable Choice, every compact metric space has an at-most-countable dense subset. [[lem-compact-metric-space-has-a-countable-dense-subset]]

[F2] A product of two at-most-countable sets is at most countable. [[thm-product-of-countable]]

[F3] For every $r>0$ there is an integer $n\ge1$ with $1/n<r$. [[cor-archimedean-reciprocal]]

[F4] A metric-open set contains a positive-radius ball around each of its points, and $B(a,r)=\{x:d(x,a)<r\}$. [[def-metric-topology]] [[def-metric-ball]]

[F5] A topological space is second-countable when it has an at-most-countable basis. [[def-second-countable-space]]

## Proof

**Proof technique:** direct.

1.1 By [F1], choose an at-most-countable dense set $D\subseteq X$. If $X=\varnothing$, the empty family is a countable basis. Otherwise set $\mathcal U:=\{B(a,1/n):a\in D,\ n\in\mathbb N,\ n\ge1\}$. By [F2], the index set $D\times\{n\in\mathbb N:n\ge1\}$ and therefore $\mathcal U$ are at most countable. [A1, F1, F2, construct]

2.1 To check that $\mathcal U$ is a basis, let $O$ be open and $x\in O$. By [F4], choose $r>0$ with $B(x,r)\subseteq O$. Apply [F3] to $r/2$ to choose $n\ge1$ with $2/n<r$. Density of $D$ gives $a\in D$ with $d(x,a)<1/n$. Then $x\in B(a,1/n)$, and every $y\in B(a,1/n)$ satisfies $d(x,y)\le d(x,a)+d(a,y)<2/n<r$. Hence $x\in B(a,1/n)\subseteq O$. [F1, F3, F4, step 1.1, choose]

3.1 By [F5], the at-most-countable basis $\mathcal U$ makes $X$ second-countable. [step 2.1, F5] ∎

