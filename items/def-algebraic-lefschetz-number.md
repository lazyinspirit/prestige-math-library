---
id: def-algebraic-lefschetz-number
kind: definition
title: "Algebraic Lefschetz number via rational homology traces"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-singular-chain-complex-and-singular-homology, def-trace-of-an-endomorphism, def-rationals, def-lefschetz-number-of-a-finite-cw-self-map, thm-cellular-homology-computes-singular-homology, thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology, prop-morse-handle-chain-complex-computes-singular-homology, prop-euler-characteristic-additivity-for-relative-finite-cell-decompositions, cor-homotopic-maps-induce-the-same-map-on-singular-homology, def-axiom-of-choice, def-countable-choice, cor-every-compact-smooth-manifold-admits-an-excellent-morse-function, lem-a-handle-decomposition-gives-a-relative-cw-complex, thm-cellular-approximation-for-maps-of-cw-pairs, prop-cellular-maps-induce-cellular-chain-maps, thm-relative-homology-of-consecutive-cw-skeleta, lem-hopf-trace-formula, cor-submodules-of-finite-free-pid-modules-are-free, cor-finitely-generated-torsion-free-modules-over-a-pid-are-free]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Peter Wong, Lectures on Fixed Point Theory, Mini-Course XV Encontro Brasileiro de Topologia, Rio Claro 2006 (complete notes)"
      url: "https://www.dm.ufscar.br/profs/ebt/history/2006/files/fixed_point.pdf"
      locator: "Lecture II §5, printed p. 12 (L(f)=sum (-1)^q trace(f_{*q}) over rational homology)"
    - title: "Eleny Ionel, notes by Andrew Lin, Stanford Math 215B Differential Topology, Winter 2023 (complete 63-page lecture notes)"
      url: "https://web.stanford.edu/~lindrew/math215B.pdf"
      locator: "Lecture 17, printed p. 54 (Theorem 155: L(f)=sum (-1)^k trace(f_{*,k}))"
dependency_level: 7
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $M$ be a closed smooth
$n$-manifold and let $f:M\to M$ be continuous. Its **Lefschetz number** is
$$L(f):=\sum_{i=0}^{n}(-1)^i\operatorname{tr}\bigl(f_*:H_i(M;\mathbb Q)\to H_i(M;\mathbb Q)\bigr)\in\mathbb Q,$$
the alternating sum of the traces of the induced rational homology
endomorphisms ([[def-singular-chain-complex-and-singular-homology]],
[[def-trace-of-an-endomorphism]], [[def-rationals]]). The sum is finite and
every trace is of a finite-dimensional operator because
$\dim_{\mathbb Q}H_i(M;\mathbb Q)<\infty$ and $H_i(M;\mathbb Q)=0$ for $i>n$
([[prop-euler-characteristic-additivity-for-relative-finite-cell-decompositions]],
clause (i), which is where the Axiom of Choice enters, through the existence of
an excellent Morse function
([[cor-every-compact-smooth-manifold-admits-an-excellent-morse-function]])).
When a finite CW model whose cellular chains compute $H_*(M;\mathbb Q)$ is
available ([[prop-morse-handle-chain-complex-computes-singular-homology]],
[[thm-cellular-homology-computes-singular-homology]]), this number agrees with
the published finite-CW Lefschetz number
[[def-lefschetz-number-of-a-finite-cw-self-map]] of the induced self-map
transported along the homotopy equivalence
([[thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology]]); the
comparison is a consistency statement, not part of the definition. Homotopic
maps have the same $L$ because they induce the same maps on homology
([[cor-homotopic-maps-induce-the-same-map-on-singular-homology]]). No
orientation, no smoothness of $f$ and no field other than $\mathbb Q$ is used.

## Remarks

- **Why the sum stops at $n$.** A closed $n$-manifold has
  $H_i(M;\mathbb Q)=0$ for $i>n$, by the finiteness proposition cited above,
  which is proved from the existence of an excellent Morse function on the
  double of $M$ and the in-run handle chain complex. This is the only place
  where the Axiom of Choice is used in the definition; the trace is a
  basis-independent invariant of an endomorphism of a finite-dimensional
  $\mathbb Q$-vector space ([[def-trace-of-an-endomorphism]]).
- **Value field.** Each rational homology trace, and hence $L(f)$, is an integer.
  Choose the finite CW model from the Morse handle presentation and
  [[lem-a-handle-decomposition-gives-a-relative-cw-complex]], and transport $f$
  using a homotopy inverse. Cellular approximation
  ([[thm-cellular-approximation-for-maps-of-cw-pairs]]) gives a homotopic
  cellular map with integral matrices on the finite free cellular chains
  ([[thm-relative-homology-of-consecutive-cw-skeleta]],
  [[prop-cellular-maps-induce-cellular-chain-maps]]). Its cycles are finite free
  ([[cor-submodules-of-finite-free-pid-modules-are-free]]), so integral homology
  is finitely generated. Quotienting torsion gives a finite free lattice
  ([[cor-finitely-generated-torsion-free-modules-over-a-pid-are-free]]).
  Clearing denominators in rational cycles shows that this lattice spans
  rational homology; clearing denominators in a rational bounding chain shows
  that its kernel before quotienting is exactly torsion. Thus rational homology
  is the rationalization of the lattice, and the induced map has an integral
  lattice matrix and integer trace. Cellular comparison and homology
  conjugation give the same trace for $f_*$. Alternatively
  [[lem-hopf-trace-formula]] computes $L(f)$ as the alternating integral
  cellular-chain trace.

- **Not the same as the geometric number.** This definition applies to every
  continuous self-map, including maps with non-isolated fixed points such as the
  identity; the equality with the finite index sum
  $I(f)=\sum_x\operatorname{ind}_x(f)$ for smooth self-maps of closed smooth
  $n$-manifolds with $n\ge1$ and isolated fixed points is
  [[thm-lefschetz-hopf-index-formula]], and the corresponding geometric number
  is [[def-global-geometric-lefschetz-number]].
