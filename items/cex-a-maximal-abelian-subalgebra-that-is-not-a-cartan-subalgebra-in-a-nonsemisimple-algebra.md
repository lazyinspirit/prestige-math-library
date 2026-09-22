---
id: cex-a-maximal-abelian-subalgebra-that-is-not-a-cartan-subalgebra-in-a-nonsemisimple-algebra
kind: counterexample
title: A maximal abelian subalgebra that is not a Cartan subalgebra
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-cartan-subalgebra-of-a-lie-algebra, def-normalizer-of-a-lie-subalgebra, def-lower-central-series-and-nilpotent-lie-algebra, def-lie-algebra-over-a-field, def-derived-series-and-solvable-lie-algebra, def-radical-of-a-finite-dimensional-lie-algebra, def-semisimple-lie-algebra-by-vanishing-radical]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, Problem 3"
landmark: false
proof_strategy: direct
---

## Statement refuted

In every Lie algebra, a maximal abelian subalgebra is a Cartan subalgebra, so
the notion of a Cartan subalgebra reduces to maximal abelianness.

## Facts & Assumptions

**Given:** The two-dimensional complex Lie algebra $\mathfrak g=\mathbb CX\oplus\mathbb CY$ with $[X,Y]=Y$ and $[Y,X]=-Y$, all other brackets zero, which satisfies alternation and Jacobi ([[def-lie-algebra-over-a-field]]). A Cartan subalgebra is by definition nilpotent and equal to its normalizer ([[def-cartan-subalgebra-of-a-lie-algebra]], [[def-normalizer-of-a-lie-subalgebra]]), and $\mathbb CX$ is nilpotent because its lower central series ends at once ([[def-lower-central-series-and-nilpotent-lie-algebra]]). An abelian ideal is solvable, the radical contains every solvable ideal, and a finite-dimensional algebra is semisimple exactly when its radical is zero ([[def-derived-series-and-solvable-lie-algebra]], [[def-radical-of-a-finite-dimensional-lie-algebra]], [[def-semisimple-lie-algebra-by-vanishing-radical]]).

## Counterexample

**Proof technique:** explicit witness.

1.1 The one-dimensional subalgebra $\mathbb CY$ is abelian and maximal abelian: no abelian subalgebra can strictly contain it, because $\mathfrak g$ itself is not abelian, as $[X,Y]=Y\ne0$. It is also a nonzero ideal, since both $[X,Y]$ and $[Y,Y]$ lie in $\mathbb CY$. Being abelian it is solvable, so $0\ne\mathbb CY\subseteq\operatorname{rad}(\mathfrak g)$; consequently $\mathfrak g$ is not semisimple. [given, algebra]

2.1 However $N_{\mathfrak g}(\mathbb CY)=\mathfrak g$: for $aX+bY$ one has $[aX+bY,Y]=aY\in\mathbb CY$ and $[Y,Y]=0$, so every element of $\mathfrak g$ normalizes $\mathbb CY$, while $\mathbb CY\ne\mathfrak g$. Hence $\mathbb CY$ is not a Cartan subalgebra, since a Cartan subalgebra must equal its normalizer. [given, step 1.1, algebra]

3.1 The notion is therefore strictly finer than maximal abelianness in this nonsemisimple algebra: nonsemisimplicity was proved in step 1.1, and $\mathbb CX$ is a Cartan subalgebra, as $[aX+bY,X]=-bY\in\mathbb CX$ forces $b=0$, so $N_{\mathfrak g}(\mathbb CX)=\mathbb CX$ and $\mathbb CX$ is abelian, whereas $\mathbb CY$ is maximal abelian but not Cartan. This witnesses the failure of the claimed equivalence. [given, step 1.1, step 2.1, algebra] ∎
