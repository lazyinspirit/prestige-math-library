---
id: rem-linearization-existence-outside-this-pair
kind: remark
title: "Recorded: linearization existence is outside this pair"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
justified_by: []
aliases: []
proved_here: false
deps: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Michel Brion, Introduction to actions of algebraic groups, Les cours du CIRM 1 (2010), no. 1, 1-22"
      url: "https://ccirm.centre-mersenne.org/item/10.5802/ccirm.1.pdf"
      locator: "Section 1.3, remark after Lemma 1.34, printed p. 12 (PDF p. 13)"
external_dependency:
  source_url: "https://ccirm.centre-mersenne.org/item/10.5802/ccirm.1.pdf"
  exact_statement: "Brion, printed p. 12, after Lemma 1.34: 'But given a connected linear algebraic group G, and a line bundle L on a normal G-variety X, some positive power L^n admits a linearization; also, there exists a finite covering p: G' -> G of algebraic groups such that L admits a G'-linearization (see [6]); [6] = F. Knop, H. Kraft, D. Luna and T. Vust, Local properties of algebraic group actions, DMV Seminar Band 13 (1989), 63-76.' The same page records the non-linearization example for PGL(V) on positive-dimensional P(V); the item makes the necessary condition dim(V) >= 2 explicit. The natural action of PGL(V) on P(V) does not admit a linearization of O(1)."
  local_proof_attempt: "No local proof is attempted. The positive-power and finite-covering statements reduce to the local-properties theory of Knop-Kraft-Luna-Vust, which was not read in full; the PGL(V) non-liftability example is recorded from the same source. Both statements lie outside the commissioned inventory of this pair, and no item of the pair uses them as a hypothesis."
  necessity: "The recorded statement fixes the boundary of this pair: the design requires that any theorem supplying a linearization after passing to a power be kept separate, with its connectedness and normality hypotheses, so that the pair never implies that every projective action comes with a linearization. Recording the exact external statement here satisfies that requirement without importing unproved external theory; all theorems of the pair assume a linearization outright."
---

## Remark

Recorded external result, not proved here: let $G$ be a connected complex linear algebraic group acting algebraically on a normal complex $G$-variety $X$, and let $L$ be an invertible sheaf on $X$. Then some positive power $L^{\otimes n}$ with $n\ge1$ admits a $G$-linearization; moreover there is a finite covering $p:G'\to G$ of algebraic groups such that $L$ itself admits a $G'$-linearization (Brion, remark after Lemma 1.34, printed p. 12, citing Knop--Kraft--Luna--Vust). For $\dim V\ge2$, Brion also records that the natural action of $\mathrm{PGL}(V)$ on $\mathbf P(V)$ does not linearize $\mathcal O_{\mathbf P(V)}(1)$.

This pair neither proves nor uses the existence result: every theorem on this page assumes that a linearization of $L$ is given, and the connectedness and normality hypotheses are exactly the ones recorded in the source. In particular no item of this pair asserts that an arbitrary ample invertible sheaf admits a linearization, with or without passing to a positive power.
