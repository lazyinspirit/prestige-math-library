---
id: ex-a-torus-translation-has-zero-lefschetz-number-and-no-fixed-points
kind: example
title: "A torus translation has zero Lefschetz number and no fixed points"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-algebraic-lefschetz-number, cor-lefschetz-number-is-homotopy-invariant, cor-lefschetz-number-of-the-identity-is-the-euler-characteristic, def-euler-characteristic-of-a-compact-manifold, prop-euler-characteristic-additivity-for-relative-finite-cell-decompositions, def-euler-characteristic-of-a-finite-cw-complex, def-cw-complex-with-closure-finiteness-and-weak-topology, def-cell-attachment-by-a-characteristic-map, thm-lefschetz-fixed-point-theorem, def-c-r-and-smooth-maps-between-smooth-manifolds, def-axiom-of-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall 1974; complete 236-page PDF)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf"
      locator: "Ch. 3 §4, printed p. 120 (maps homotopic to the identity have Lefschetz number the Euler characteristic; fixed-point-free examples force chi=0)"
    - title: "Peter Wong, Lectures on Fixed Point Theory, Mini-Course XV Encontro Brasileiro de Topologia, Rio Claro 2006 (complete notes)"
      url: "https://www.dm.ufscar.br/profs/ebt/history/2006/files/fixed_point.pdf"
      locator: "Lecture II §7, printed p. 16 (the converse of the Lefschetz theorem fails: L(f)=0 does not force fixed points)"
    - title: "Allen Hatcher, Algebraic Topology (complete book PDF)"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "Chapter 0, printed pp. 5-6 (the torus S^1 x S^1 built from one 0-cell, two 1-cells and one 2-cell)"
dependency_level: 13
---

## Example

Assume AC ([[def-axiom-of-choice]]). Let $T^2=\mathbb R^2/\mathbb Z^2$ be the two-torus and let
$T_a:T^2\to T^2$, $T_a(x)=x+a$, be the translation by $a\in\mathbb R^2$. If
$a\neq0$ in $\mathbb R^2/\mathbb Z^2$ then $T_a$ has no fixed points; and
$L(T_a)=0=\chi(T^2)$
([[def-algebraic-lefschetz-number]]). This realises the sharpness of the
nonzero hypothesis in the Lefschetz fixed point theorem: the conclusion of
[[thm-lefschetz-fixed-point-theorem]] can fail when $L=0$. This example has
$L(T_a)=\chi(T^2)=0$ and no fixed points; the separate counterexample with
canceling fixed points refutes the converse.

## Verification

**Given:** The torus $T^2=\mathbb R^2/\mathbb Z^2$ and a translation $T_a$ by a nonzero class $a$.

[F1] Present the torus as the square with opposite edges identified. Its
vertices form one point, its open horizontal and vertical edges form two
$1$-cells, and its open interior is one $2$-cell. Traversing the boundary gives
the attaching word $aba^{-1}b^{-1}$. Thus this CW structure has one $0$-cell, two $1$-cells and one $2$-cell attached along the commutator $aba^{-1}b^{-1}$; with this structure the alternating cell count is $1-2+1=0$ ([[def-cw-complex-with-closure-finiteness-and-weak-topology]], [[def-cell-attachment-by-a-characteristic-map]], [[def-euler-characteristic-of-a-finite-cw-complex]]).

[F2] On a compact manifold the Euler characteristic is the alternating sum of the rational Betti numbers, and it agrees with the cell count for a finite CW model ([[def-euler-characteristic-of-a-compact-manifold]]); clause (ii) of [[prop-euler-characteristic-additivity-for-relative-finite-cell-decompositions]] computes it from a finite relative cell decomposition, and the translation and the identity are homotopic through translations.

[L1] Lefschetz numbers are homotopy invariant and $L(\mathrm{id}_M)=\chi(M)$ ([[cor-lefschetz-number-is-homotopy-invariant]], [[cor-lefschetz-number-of-the-identity-is-the-euler-characteristic]], [[def-axiom-of-choice]]).

1.1 No fixed points for $a\neq0$. A point $x\in T^2$ is fixed by $T_a$ exactly when $a=x-x=0$ in $\mathbb R^2/\mathbb Z^2$; hence for nonzero $a$ the translation is fixed-point-free. [given]

2.1 The Lefschetz number vanishes. The family $t\mapsto T_{ta}$, $t\in[0,1]$, is a homotopy from the identity to $T_a$, so $L(T_a)=L(\mathrm{id})=\chi(T^2)$ by [L1]. The standard CW structure of [F1] has cell count $1-2+1=0$, and by [F2] this is $\chi(T^2)$; hence $L(T_a)=0$. Thus a vanishing Lefschetz number coincides here with the complete absence of fixed points, which is exactly why the example does not contradict the theorem but exhibits its sharpness. [step 1.1, F1, F2, L1] ∎
