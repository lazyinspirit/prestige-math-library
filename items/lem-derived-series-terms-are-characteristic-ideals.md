---
id: lem-derived-series-terms-are-characteristic-ideals
kind: lemma
title: Derived-series terms are characteristic ideals
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-derived-series-and-solvable-lie-algebra, def-homomorphism-of-possibly-infinite-dimensional-lie-algebras]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Milne, Lie Algebras, §3, Generalities"
      url: https://www.jmilne.org/math/CourseNotes/LAG.pdf
      locator: "§3, immediately after the definition of the derived series, printed p. 16"
---

## Statement

For every Lie algebra $\mathfrak g$ and every $r\geq0$, the derived-series
term $\mathfrak g^{(r)}$ is a characteristic ideal: every Lie-algebra
automorphism $f$ of $\mathfrak g$ satisfies
$f(\mathfrak g^{(r)})=\mathfrak g^{(r)}$.

## Facts & Assumptions

**Given:** A Lie algebra $\mathfrak g$, an automorphism
$f:\mathfrak g\to\mathfrak g$, and an integer $r\geq0$.

[L1] The derived series starts at $\mathfrak g$ and replaces each term $I$ by
$[I,I]$; every term is an ideal
([[def-derived-series-and-solvable-lie-algebra]]).

[L2] A Lie-algebra homomorphism is linear and satisfies
$f([x,y])=[f(x),f(y)]$
([[def-homomorphism-of-possibly-infinite-dimensional-lie-algebras]]).

## Proof

**Proof technique:** direct.

1.1 For every subspace $A\subseteq\mathfrak g$, linearity and bracket preservation give $f([A,A])=[f(A),f(A)]$: each spanning bracket maps to a spanning bracket, and every bracket on the right has a preimage because $f$ is surjective. [given, L2, algebra]

2.1 Starting with $f(\mathfrak g)=\mathfrak g$, suppose $f(\mathfrak g^{(j)})=\mathfrak g^{(j)}$. Then [L1] and step 1.1 give $f(\mathfrak g^{(j+1)})=[\mathfrak g^{(j)},\mathfrak g^{(j)}]=\mathfrak g^{(j+1)}$. Finite induction proves the equality at the given index $r$; [L1] already supplies ideality. [L1, step 1.1, given] ∎
