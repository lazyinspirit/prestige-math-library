---
id: lem-lower-central-series-terms-are-characteristic-ideals
kind: lemma
title: Lower-central-series terms are characteristic ideals
status: draft
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-lower-central-series-and-nilpotent-lie-algebra, def-homomorphism-of-possibly-infinite-dimensional-lie-algebras]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Milne, Lie Algebras, §2.1"
      url: https://www.jmilne.org/math/CourseNotes/LAG.pdf
      locator: "Definition 2.1 and Proposition 2.5, printed pp. 11–12"
---

## Statement

For every Lie algebra $\mathfrak g$ and every $r\geq1$, the lower-central
term $\gamma_r(\mathfrak g)$ is a characteristic ideal.

## Facts & Assumptions

**Given:** A Lie algebra $\mathfrak g$, an automorphism
$f:\mathfrak g\to\mathfrak g$, and an integer $r\geq1$.

[L1] The lower central series has $\gamma_1(\mathfrak g)=\mathfrak g$ and
$\gamma_{j+1}(\mathfrak g)=[\mathfrak g,\gamma_j(\mathfrak g)]$; every term is
an ideal ([[def-lower-central-series-and-nilpotent-lie-algebra]]).

[L2] A Lie-algebra homomorphism is linear and preserves brackets
([[def-homomorphism-of-possibly-infinite-dimensional-lie-algebras]]).

## Proof

**Proof technique:** direct.

1.1 For subspaces $A,B\subseteq\mathfrak g$, bracket preservation, linearity, and surjectivity give $f([A,B])=[f(A),f(B)]$. [given, L2, algebra]

2.1 The equality $f(\gamma_1)=\mathfrak g=\gamma_1$ is immediate. If $f(\gamma_j)=\gamma_j$, then [L1] and step 1.1 give $f(\gamma_{j+1})=f([\mathfrak g,\gamma_j])=[\mathfrak g,\gamma_j]=\gamma_{j+1}$. Finite induction reaches the given $r$, and [L1] supplies ideality. [L1, step 1.1, given] ∎
