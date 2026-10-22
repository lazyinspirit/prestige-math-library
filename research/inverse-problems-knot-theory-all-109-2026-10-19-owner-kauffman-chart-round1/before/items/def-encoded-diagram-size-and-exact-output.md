---
id: def-encoded-diagram-size-and-exact-output
kind: definition
title: "Encoded diagram size and exact output"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-regular-oriented-link-diagram
  - def-quandle-and-knot-coloring
  - def-kauffman-bracket-smoothing-and-loop-value
  - def-planar-diagram-gauss-and-dowker-codes
justified_by: []
aliases: []
proof_strategy: not-applicable
axiom_use: "Choice-free: all input diagrams, component sets, arc sets, crossing sets, code records, coefficients, and finite fields are finite."
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Danny Calegari, Introduction to Knot Theory, University of Chicago course notes (2025), §§1.2–1.3 and 4.1"
      url: "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
      locator: "§1.2–1.3, printed pp. 5–8; §4.1, printed pp. 30–32."
    - title: "Justin Roberts, Knots Knotes, Edinburgh course notes (1999), §§3.3–3.4 and 4.3"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/knotes.pdf"
      locator: "§§3.3–3.4, printed pp. 16–19; §4.3, printed pp. 24–25."
verification:
  precheck: n/a
---

## Definition

Let $D$ be a nonempty finite regular oriented link diagram: a projection of a finite union of oriented circles with finitely many transverse double points, no triple points, and one overpassing branch specified at each double point. Let $c(D)$ be its number of crossings and $m(D)$ its number of components. An arc is a connected strand segment cut at each undercrossing; each component with no undercrossings contributes one closed arc. Write $a(D)$ for the number of arcs. If $q(D)$ components have no undercrossings, then $a(D)=c(D)+q(D)$ and $0\le q(D)\le m(D)$.

A supplied finite code for $D$ has code length $L$, the total number of bits in that literal code, including its tags, signs, labels, and separators. The length depends on the chosen encoding. In particular, for one of the tagged Gauss, signed Dowker–Thistlethwaite, or oriented planar-diagram formats, $L$ is the bit length of the supplied valid code in that format. The procedures in this page take typed mathematical diagrams or valid codes as stated; no string parser or malformed-code behavior is included in any operation count.

For an integer $z$, define its signed-magnitude bit length by $\ell_{\mathbb Z}(0)=1$ and $\ell_{\mathbb Z}(z)=1+\lceil\log_2(|z|+1)\rceil$ for $z\ne0$. For a Laurent polynomial $P(A)=\sum_{j\in\mathbb Z}z_jA^j$ with finite support, define its coefficient-bit size as $0$ if $P=0$, and otherwise as $\max_{j:z_j\ne0}\ell_{\mathbb Z}(z_j)$. Its absolute Laurent degree is $\max_{j:z_j\ne0}|j|$, with value $0$ for $P=0$. For a prime $p$, elements of $\mathbb F_p$ are represented exactly by residues $0,\ldots,p-1$, and their representation uses $\lceil\log_2p\rceil$ bits.

An exact output is the complete integer, finite list, or Laurent polynomial with its integer coefficients and exponents. A floating-point approximation is not an exact output. A field-operation count treats each addition, subtraction, multiplication, division by a nonzero element, and equality test in $\mathbb F_p$ as one operation; this convention does not assert that these operations have constant bit cost as $p$ varies.

## Definition references

[[def-regular-oriented-link-diagram]]

[[def-quandle-and-knot-coloring]]

[[def-kauffman-bracket-smoothing-and-loop-value]]

[[def-planar-diagram-gauss-and-dowker-codes]]

[Calegari, *Introduction to Knot Theory* (2025), §§1.2–1.3 and 4.1](https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf)

[Roberts, *Knots Knotes* (1999), §§3.3–3.4 and 4.3](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/knotes.pdf)
