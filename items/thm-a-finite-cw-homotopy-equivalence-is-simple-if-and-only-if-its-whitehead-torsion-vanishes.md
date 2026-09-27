---
id: thm-a-finite-cw-homotopy-equivalence-is-simple-if-and-only-if-its-whitehead-torsion-vanishes
kind: theorem
title: "Whitehead torsion is the complete obstruction to finite CW simple homotopy"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-simple-homotopy-equivalences-have-zero-whitehead-torsion, lem-the-target-inclusion-in-a-cellular-mapping-cylinder-is-simple, lem-zero-torsion-is-realized-by-elementary-expansions-collapses-and-cellular-basis-moves, thm-whitehead-torsion-is-independent-of-cellular-approximation-basepaths-lifts-orientations-orders-and-contraction, thm-composition-and-sum-formulas-for-whitehead-torsion, def-simple-homotopy-equivalence, thm-cellular-approximation-for-maps-of-cw-pairs]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Cohen, §§8.5 and 22, printed pp.32–33, 72–75"
      url: "https://math.uchicago.edu/~shmuel/tom-readings/Cohen%2C%20simple-htpy-thry.pdf"
      locator: "§§8.5 and 22, printed pp.32–33, 72–75"
    - title: "Lück, Theorem 2.21, printed pp.37–38"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Theorem 2.21, printed pp.37–38"
    - title: "Casson, Theorem 4.7, printed pp.32–34"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/cassonsimp.pdf"
      locator: "Theorem 4.7, printed pp.32–34"
---
## Statement

A homotopy equivalence $f:X\to Y$ of finite CW complexes is simple if and
only if $\tau(f)=0$ in
$\bigoplus_{D\in\pi_0Y}\operatorname{Wh}(\pi_1D)$, with basepoint changes
transported canonically. This is a statement about finite CW complexes, with
no smooth handle or cobordism assertion.

## Facts & Assumptions

**Given:** A homotopy equivalence of finite CW complexes.

[F1] Every simple homotopy equivalence has zero Whitehead torsion ([[thm-simple-homotopy-equivalences-have-zero-whitehead-torsion]]).

[F2] For a cellular $f$, the target inclusion $j:Y\hookrightarrow M_f$ is simple, the mapping cylinder is finite, and its retraction $p:M_f\to Y$ satisfies $p\circ i_X=f$ ([[lem-the-target-inclusion-in-a-cellular-mapping-cylinder-is-simple]]).

[F3] A finite connected homotopy-equivalence inclusion with zero torsion admits a finite elementary deformation relative to its source ([[lem-zero-torsion-is-realized-by-elementary-expansions-collapses-and-cellular-basis-moves]]).

[F4] Whitehead torsion is invariant under cellular approximation and under the stated basepoint and cellular-basis choices ([[thm-whitehead-torsion-is-independent-of-cellular-approximation-basepaths-lifts-orientations-orders-and-contraction]]).

[F5] $\tau(gf)=\tau(g)+g_*\tau(f)$ for composable finite CW homotopy equivalences ([[thm-composition-and-sum-formulas-for-whitehead-torsion]]).

[F6] A map homotopic to a finite composite of elementary expansions, collapses and cellular isomorphisms is simple ([[def-simple-homotopy-equivalence]]).

[F7] A map with finite CW source is homotopic to a cellular map without any choice principle ([[thm-cellular-approximation-for-maps-of-cw-pairs]]).

## Proof

**Proof technique:** direct.

1.1 If $f$ is simple, [F1] gives $\tau(f)=0$ on each target component. [F1]

1.2 Conversely suppose $\tau(f)=0$. By [F7] and [F4] replace $f$ by a cellular map in its homotopy class; this changes neither its torsion nor whether it is simple. The construction is finite because $X$ is finite. Work first on one connected component; a homotopy equivalence bijects the finite component sets. [F4, F7, given]

2.1 Form the finite cellular mapping cylinder $M_f$. Its target inclusion $j:Y\hookrightarrow M_f$ is simple by [F2], so [F1] gives $\tau(j)=0$. Since $p\circ j=\operatorname{id}_Y$, [F5] yields $0=\tau(p)+p_*\tau(j)=\tau(p)$. Also $f=p\circ i_X$, whence $0=\tau(f)=\tau(p)+p_*\tau(i_X)=p_*\tau(i_X)$. The retraction $p$ is a homotopy equivalence and induces an isomorphism on Whitehead groups, so $\tau(i_X)=0$. [F1, F2, F5, step 1.2]

3.1 The source inclusion $i_X:X\hookrightarrow M_f$ is a homotopy equivalence of finite connected CW complexes. Apply [F3] to obtain a finite relative elementary deformation from $M_f$ to $X$. Reversing that sequence shows $i_X$ is simple. The target inclusion $j$ is also simple, so its inverse retraction $p$ is homotopic to the reverse composite of its elementary moves and is simple by [F6]. Thus $f=p\circ i_X$ is simple. Repeat on each of the finitely many components and concatenate their finite move sequences. This proves the reverse implication and the asserted direct-sum statement. ∎ [F2, F3, F6, step 2.1]
