---
id: lem-complete-ordered-field-is-archimedean
kind: lemma
title: "A complete ordered field has cofinal canonical integers"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: delaunay-triangulations-and-voronoi-computation
dependency_level: 0
proof_strategy: contradiction
deps: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Truman, Bruckner, and Bruckner, Elementary Real Analysis, 2nd ed., Section 1.7, The Archimedean Property"
      url: "https://people.math.sc.edu/girardi/m5545/TBB-AllChapters-Landscape.pdf"
verification:
  precheck: n/a
---

## Statement

Let $F$ be a Dedekind-complete ordered field with $1_F>0$. For every $x\in F$, some canonical integer $n\cdot1_F$ satisfies $x<n\cdot1_F$.

## Facts & Assumptions

**Given:** A Dedekind-complete ordered field $F$ and an element $x\in F$.

[A1] Every nonempty subset of $F$ that is bounded above has a least upper bound in $F$.

[A2] The ordered field has $1_F>0$, addition preserves order, and its canonical integers satisfy $(n+1)\cdot1_F=n\cdot1_F+1_F$.

## Proof

1.1 Suppose the positive canonical integers $N=\{n\cdot1_F:n\ge1\}$ were bounded above by some $y\in F$. By [A1], let $s=\sup N$. Since $1_F>0$, $s-1_F<s$, so $s-1_F$ is not an upper bound; choose $m\ge1$ with $m\cdot1_F>s-1_F$. [given, A1, A2, assume-contra, choose]

2.1 Adding $1_F$ gives $(m+1)\cdot1_F>s$, while $(m+1)\cdot1_F\in N$ and $s$ is an upper bound of $N$. This contradiction proves that $N$ is unbounded above. [A2, step 1.1, contradiction]

3.1 Suppose no canonical integer exceeds $x$. Then every positive canonical integer is at most $x$, making $N$ bounded above, contrary to step 2.1. Thus some canonical integer exceeds $x$. [given, step 2.1, assume-contra, discharge-contradiction] ∎
