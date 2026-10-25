---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/def-kauffman-bracket-smoothing-and-loop-value.json
  precheck: pass
id: def-kauffman-bracket-smoothing-and-loop-value
kind: definition
title: "Kauffman bracket smoothing and loop value"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: [def-regular-oriented-link-diagram, def-planar-isotopy-of-link-diagrams]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Choice-free: each input diagram has a finite crossing set and the state sum is indexed by that finite set."
provenance:
  statement: literature-derived
  proof: ai-altered
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

Let $A$ be an indeterminate and let $\mathbb Z[A^{\pm1}]$ be the Laurent
polynomial ring in $A$. A **nonempty unoriented regular link diagram** is the
finite planar projection and over/under data of a regular oriented link diagram
after its strand arrows are forgotten. Its finite crossing set is denoted
$C(D)$, and at least one closed component is required. The empty link diagram is
outside this definition.

At a crossing use the following local chart: the over-strand runs from the
southwest endpoint to the northeast endpoint and is drawn continuously over the
under-strand, which runs from northwest to southeast with a gap at the
intersection. Horizontal-right followed by vertical-up is the positive
orientation of this displayed chart. In this chart the **A-smoothing** joins the
two left endpoints and joins the two right endpoints; the **B-smoothing** joins
the two top endpoints and joins the two bottom endpoints. These labels are
attached to this displayed chart and are transported by orientation-preserving
changes of local coordinates. Thus turning right from an entering underpassing
half-strand gives the A-smoothing.

```tikz
\begin{tikzpicture}[scale=1, line cap=round, line join=round]
  \begin{scope}
    \draw[thick] (-1,1)--(-0.14,0.14);
    \draw[thick] (0.14,-0.14)--(1,-1);
    \draw[very thick] (-1,-1)--(1,1);
    \node at (0,-1.45) {crossing};
  \end{scope}
  \begin{scope}[xshift=3.8cm]
    \draw[thick] (-1,1) .. controls (-0.45,0.35) and (-0.45,-0.35) .. (-1,-1);
    \draw[thick] (1,1) .. controls (0.45,0.35) and (0.45,-0.35) .. (1,-1);
    \node[align=center] at (0,-1.65) {$A$-smoothing\\weight $A$};
  \end{scope}
  \begin{scope}[xshift=7.6cm]
    \draw[thick] (-1,1) .. controls (-0.35,0.45) and (0.35,0.45) .. (1,1);
    \draw[thick] (-1,-1) .. controls (-0.35,-0.45) and (0.35,-0.45) .. (1,-1);
    \node[align=center] at (0,-1.65) {$B$-smoothing\\weight $A^{-1}$};
  \end{scope}
\end{tikzpicture}
```

For a state $S:C(D)\to\{A,B\}$, let $a(S)$ and $b(S)$ be the numbers of
A- and B-smoothings, and let $|S|$ be the number of closed circles in the
crossingless diagram obtained by performing all smoothings. Set
$$\delta:=-A^2-A^{-2}$$
and define the **Kauffman bracket** of $D$ by
$$\langle D\rangle:=\sum_{S:C(D)\to\{A,B\}} A^{a(S)-b(S)}\delta^{|S|-1}\in\mathbb Z[A^{\pm1}].$$
Because $D$ is nonempty, every complete smoothing has $|S|\ge1$, so the loop
exponent is nonnegative. A crossingless $k$-component unlink with $k\ge1$ has
bracket $\delta^{k-1}$.

## Definition references

[[def-regular-oriented-link-diagram|Regular oriented link diagrams]]

[[def-planar-isotopy-of-link-diagrams|Planar isotopy of link diagrams]]

[Kauffman, *An Invariant of Regular Isotopy* (1990), §III, printed pp. 430–432](https://homepages.math.uic.edu/~kauffman/IRH.pdf)

[Kauffman, *Combinatorial Knot Theory and the Jones Polynomial* (2022), §2](https://arxiv.org/pdf/2204.12104v2)

[Roberts, *Knots Knotes* (1999), §§4.1 and 4.3](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/knotes.pdf)

[Funar, *A Crash Course in Quantum Invariants of Knots and 3-Manifolds*, Chapter 3, §1.1](https://www-fourier.univ-grenoble-alpes.fr/~funar/quantum.pdf)

## Facts & Assumptions

**Given:** A nonempty unoriented regular link diagram $D$ with finite crossing set $C(D)$.

[F1] A regular oriented link diagram has finitely many transverse double points, no triple points, and an over/under datum at every crossing; forgetting the strand arrows leaves the input used here ([[def-regular-oriented-link-diagram]]).

[F2] A planar isotopy is an orientation-preserving smooth family of planar diffeomorphisms that transports the diagram and its over/under data and creates or deletes no crossings ([[def-planar-isotopy-of-link-diagrams]]).

## Proof

1.1 Since $C(D)$ is finite by [F1], the set of all functions $S:C(D)\to\{A,B\}$ is finite with exactly $2^{|C(D)|}$ elements. Each state replaces every crossing in a finite collection of disjoint crossing disks by one of the two specified pairings. The resulting finite 1-manifold has at least one circle because the input diagram has at least one component. Hence each term $A^{a(S)-b(S)}\delta^{|S|-1}$ is a defined Laurent polynomial. [given, F1, construct]

2.1 The displayed sum is indexed by the set of states itself, so reordering a list of crossings merely gives a bijective reindexing of the same finite sum. By [F2], a planar isotopy carries crossings, local charts, states, and resulting circles bijectively to those of the isotoped diagram, preserving $a(S)$, $b(S)$, and $|S|$. Therefore the formula is well-defined on planar-isotopy classes and is choice-free. [given, F2, step 1.1, algebra] ∎
