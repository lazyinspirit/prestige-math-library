---
id: alg-kauffman-bracket-state-sum
kind: algorithm
title: "Kauffman bracket state sum"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps: [def-kauffman-bracket-smoothing-and-loop-value]
justified_by: []
aliases: []
axiom_use: "Choice-free: the input crossing set is finite, and every state is traversed."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Louis H. Kauffman, An Invariant of Regular Isotopy, Transactions of the AMS 318(2) (1990), §III, printed pp. 430–432"
      url: "https://homepages.math.uic.edu/~kauffman/IRH.pdf"
    - title: "Louis H. Kauffman, Combinatorial Knot Theory and the Jones Polynomial, arXiv:2204.12104v2, §2"
      url: "https://arxiv.org/pdf/2204.12104v2"
    - title: "Justin Roberts, Knots Knotes, §§4.1 and 4.3, printed pp. 21 and 24–25"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/knotes.pdf"
    - title: "François Funar, A Crash Course in Quantum Invariants of Knots and 3-Manifolds, Chapter 3, §1.1"
      url: "https://www-fourier.univ-grenoble-alpes.fr/~funar/quantum.pdf"
---

## Definition

The input is a nonempty unoriented regular link diagram $D$: a finite immersed
planar projection of one or more circles with finitely many transverse double
points, no triple points, and over/under data at each double point. Let $C(D)$
be its finite crossing set. At each crossing take the local chart in which the
over-strand runs southwest to northeast and is drawn continuously over the
under-strand, which runs northwest to southeast with a gap at the intersection.
The A-smoothing joins the two left endpoints and the two right endpoints, with
weight $A$; the B-smoothing joins the two top endpoints and the two bottom
endpoints, with weight $A^{-1}$. These labels are transported with
orientation-preserving changes of local coordinates. Put
$\delta=-A^2-A^{-2}$. The output is the Laurent polynomial $\langle D\rangle$.

1. Set an accumulator $p:=0$ in $\mathbb Z[A^{\pm1}]$.
2. For each function $S:C(D)\to\{A,B\}$, smooth every crossing according to
   $S$, obtaining a crossingless diagram with $|S|$ circles. Count the A- and
   B-smoothings as $a(S)$ and $b(S)$, and replace
   $$p\quad\text{by}\quad p+A^{a(S)-b(S)}\delta^{|S|-1}.$$
3. Return $p$ after all states have been processed.

The input is a mathematical diagram object, not a serialized string. The
procedure specifies no parsing or malformed-string rejection behavior. Since
the diagram has at least one component, every complete smoothing has
$|S|\ge1$ and every exponent of $\delta$ is nonnegative.

## Definition references

[[def-kauffman-bracket-smoothing-and-loop-value|Kauffman bracket smoothing and loop value]]

[Kauffman, *An Invariant of Regular Isotopy* (1990), §III, printed pp. 430–432](https://homepages.math.uic.edu/~kauffman/IRH.pdf)

[Kauffman, *Combinatorial Knot Theory and the Jones Polynomial* (2022), §2](https://arxiv.org/pdf/2204.12104v2)

[Roberts, *Knots Knotes* (1999), §4.3](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/knotes.pdf)

[Funar, *A Crash Course in Quantum Invariants of Knots and 3-Manifolds*, Chapter 3, §1.1](https://www-fourier.univ-grenoble-alpes.fr/~funar/quantum.pdf)
