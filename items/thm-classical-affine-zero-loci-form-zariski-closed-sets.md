---
id: "thm-classical-affine-zero-loci-form-zariski-closed-sets"
kind: "theorem"
title: "Classical affine zero loci form the Zariski closed sets"
status: "draft"
origin: "pipeline"
deps: ["def-classical-affine-algebraic-set-with-empty-boundaries", "lem-classical-zero-locus-ideal-radical-invariance", "def-sum-and-product-of-ideals"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry v6.10, Proposition 2.10, pp. 38–39"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
landmark: false
proof_strategy: direct
---

## Statement

Affine zero loci are the closed sets of a topology on $k^n$: arbitrary intersections and finite unions are zero loci. In particular $V(I)\cup V(J)=V(IJ)$. Every algebraic subset $X$ carries the induced topology, whose closed sets are $X\cap V(S)$.

## Facts & Assumptions

**Given:** An algebraically closed field $k$, a nonnegative integer $n$, arbitrary equation sets in $k[x_1,\ldots,x_n]$, and ideals $I,J$ in that ring.

[F1] The empty and full sets are zero loci ([[def-classical-affine-algebraic-set-with-empty-boundaries]]).

[F2] Replacing equations by their generated ideal does not change their zero locus ([[lem-classical-zero-locus-ideal-radical-invariance]]).

[F3] The product ideal consists of finite sums of products ([[def-sum-and-product-of-ideals]]).

## Proof

**Proof technique:** direct.

1.1 For any indexed family $(S_\lambda)$, a tuple vanishes on $\bigcup_\lambda S_\lambda$ exactly when it vanishes on every $S_\lambda$. Hence $\bigcap_\lambda V(S_\lambda)=V(\bigcup_\lambda S_\lambda)$; the empty intersection is $k^n$. [F1, given]

1.2 If $a\in V(I)\cup V(J)$, every product of an element of $I$ with one of $J$ vanishes at $a$, hence every element of $IJ$ does. If $a$ belongs to neither locus, there are $f\in I,g\in J$ with $f(a),g(a)\ne0$; then $(fg)(a)\ne0$, so $a\notin V(IJ)$. This proves both inclusions. [F3, given, algebra]

2.1 Replace arbitrary equation sets by generated ideals and iterate the two-set union identity. The zero-set identities for 0 and 1 supply the empty union and the full space. Intersecting these identities with $X$ verifies the induced closed-set axioms. [F1, F2, step 1.1, step 1.2] ∎


## Sources

Source comparison: Milne, *Algebraic Geometry*, v6.10, Proposition 2.10, pp. 38–39. Conventions here distinguish arbitrary affine algebraic sets from nonempty irreducible varieties.
