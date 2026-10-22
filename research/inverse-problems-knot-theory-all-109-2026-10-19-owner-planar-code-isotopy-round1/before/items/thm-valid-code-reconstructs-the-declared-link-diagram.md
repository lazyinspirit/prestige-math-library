---
id: thm-valid-code-reconstructs-the-declared-link-diagram
kind: theorem
title: "Valid codes reconstruct the declared link diagram"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-planar-diagram-gauss-and-dowker-codes
  - lem-planar-diagram-code-realizability-and-face-validation
  - thm-planar-code-validation-and-diagram-reconstruction-procedure-properties
  - alg-enumerate-diagrams-up-to-crossing-bound
  - thm-enumerate-diagrams-up-to-crossing-bound-procedure-properties
  - lem-a-sphere-homeomorphism-extends-over-the-disk-by-the-alexander-trick
  - lem-a-smooth-finite-disk-arc-system-isotopy-extends-relative-boundary-and-marked-points
  - def-countable-choice
  - def-planar-isotopy-of-link-diagrams
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Jeff Erickson, Planar Graphs, Computational Topology lecture notes (2023)"
      url: "https://jeffe.web.engr.illinois.edu/teaching/comptop/2023/notes/09-planar-graphs.html"
      locator: "Rotation Systems and Formalities and Trivialities, lines 49–72"
    - title: "Joel Hass, Jeffrey C. Lagarias, and Nicholas Pippenger, The Computational Complexity of Knot and Link Problems, Journal of the ACM 46 (1999), section 1"
      url: "https://arxiv.org/pdf/math/9807016"
      locator: "§1 Introduction, finite link-diagram representation, web text lines 102–121"
---

## Statement

Assume the Axiom of Countable Choice. For every valid connected one-component
oriented code with a selected outer face, the reconstruction procedure
produces a regular oriented diagram representing that code. Any two such
diagrams with the same code differ only by crossing and edge relabeling and
are planar isotopic. The normalized planar-diagram code of a diagram with $c$
crossings appears among the candidates enumerated at bound $c$. This statement
concerns diagrams and their finite codes; it does not identify distinct codes
that may represent the same knot type. The finite realization and enumeration
claims are choice-free; $\mathrm{AC}_\omega$ is assumed only for the smooth
ambient-isotopy uniqueness clause.

## Statement references

[[def-planar-diagram-gauss-and-dowker-codes]] — code formats, normalization, and crossing data.

[[lem-planar-diagram-code-realizability-and-face-validation]] — finite spherical realization from the face count.

[[thm-planar-code-validation-and-diagram-reconstruction-procedure-properties]] — correctness of the reconstruction procedure.

[[alg-enumerate-diagrams-up-to-crossing-bound]] — bounded normalized-code enumeration.

[[thm-enumerate-diagrams-up-to-crossing-bound-procedure-properties]] — exact enumeration of accepted one-component codes.

[[lem-a-sphere-homeomorphism-extends-over-the-disk-by-the-alexander-trick]] — extension of each matching face-boundary homeomorphism across its disk.

[[def-planar-isotopy-of-link-diagrams]] — smooth orientation-preserving ambient isotopy of the plane.

[Erickson, “Planar Graphs”](https://jeffe.web.engr.illinois.edu/teaching/comptop/2023/notes/09-planar-graphs.html) — rotation systems encode plane embeddings up to orientation-preserving homeomorphism; lines 49–61 also identify equivalence with a continuous family of embeddings.

[Hass–Lagarias–Pippenger, §1](https://arxiv.org/pdf/math/9807016) — finite crossing-graph data for regular link diagrams.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and a valid connected one-component oriented code with $c$ crossings and a selected outer face.

[A1] [[def-countable-choice]]: Countable Choice is the axiom that every countable family of nonempty sets has a choice function.

[F1] [[def-planar-diagram-gauss-and-dowker-codes]]: the code specifies a finite crossing set, paired darts, crossing rotations, oriented opposite strands, over/under data, signs, and a face selector; its normalized PD form fixes crossing labels, edge labels, and the face identifier, while the crossingless form carries one of two orientation markers.

[F2] [[lem-planar-diagram-code-realizability-and-face-validation]]: for a nonempty connected code with the prescribed local crossing data, the Euler face condition $V-E+F=2$ gives a spherical realization, and a selected face gives the plane model.

[F3] [[thm-planar-code-validation-and-diagram-reconstruction-procedure-properties]]: the validator terminates and reconstructs a diagram exactly for codes satisfying the stated syntax, incidence, crossing, component, connectedness, face, and outer-face conditions.

[F4] [[thm-enumerate-diagrams-up-to-crossing-bound-procedure-properties]]: at every nonnegative crossing bound, the enumerator returns every normalized connected one-component code of at most that size that passes validation.

[F5] [[def-planar-isotopy-of-link-diagrams]]: planar isotopy is a jointly smooth orientation-preserving ambient isotopy of $\mathbb R^2$ carrying the diagram image, strand orientations, and over/under data.

[L1] [[lem-a-smooth-finite-disk-arc-system-isotopy-extends-relative-boundary-and-marked-points]]: under Countable Choice, a given smooth isotopy of a finite disk arc system, stationary near fixed boundary endpoints and avoiding the specified closed sets, extends to an ambient isotopy fixing the boundary and those sets.

[F6] [[lem-a-sphere-homeomorphism-extends-over-the-disk-by-the-alexander-trick]]: every homeomorphism of the boundary circle of a disk extends to a homeomorphism of the disk.

## Proof

1.1 By validity, the code passes every finite check in [F3]. If $c=0$, [F1] gives the one-component crossingless code and its `cw` or `ccw` orientation; [F2] realizes that oriented code as the standard circle with the `outside` face selector. If $c>0$, its one component satisfies the knot-code condition, and the face-count hypothesis in [F2] yields a spherical crossing graph with the prescribed rotations and edge pairings; deleting a point in the selected face gives its plane model. In this nonempty case, replacing each crossing disk by the prescribed transverse crossing and lifting the over-strand gives the decorated regular diagram returned by the procedure. [given, F1, F2, F3]

2.1 Relabel the finite crossing set in increasing order and assign edge labels by the canonical scan in [F1]. The selected face is represented by the least dart of its face cycle. These are exactly the normalization rules used by the bounded enumerator. The resulting code has $c$ crossings, so it occurs in the enumerator's finite loops at bound $c$; [F4] then guarantees that its reconstruction is returned. [given, F1, F4, step 1.1]

3.1 Suppose $c>0$. The rotation-system data determine the cyclic order at every vertex and the paired edge ends. For two sphere embeddings with those same data, choose matching small vertex disks and edge bands; the cyclic orders and edge pairings give compatible orientation-preserving maps on these pieces, and the maps agree on their glued intervals. Thus they give a homeomorphism of regular neighborhoods carrying the embedded graph and its decorations to the corresponding graph. The boundary components of these neighborhoods correspond to the same cycles of $\alpha\circ\sigma$. Each bounded complementary component of a connected graph neighborhood is a disk; the induced boundary map extends over that disk by [F6]. Choose a sufficiently large circle in the common selected outer face of the two plane drawings. The part of each outer face between its neighborhood boundary and this circle is an annulus. Identify each annulus with $S^1\times[0,1]$, with the neighborhood boundary at $t=0$ and the common circle at $t=1$. The induced inner boundary map is orientation-preserving, so it has an increasing lift $g:\mathbb R\to\mathbb R$ with $g(x+1)=g(x)+1$. The maps $g_t(x)=(1-t)g(x)+tx$ are increasing lifts of circle homeomorphisms from the inner map to the identity; $(e^{2\pi ix},t)\mapsto(e^{2\pi ig_t(x)},t)$ extends the boundary map across the annulus while fixing the common circle. Extending by the identity outside that circle gives an orientation-preserving plane homeomorphism carrying one decorated embedding to the other and preserving the selected outer face. [F1, F5, F6, construct]

3.2 For $c>0$, step 3.1 establishes equivalence only by an ambient homeomorphism. The required conclusion [F5] is a **smooth ambient isotopy**, which requires a smooth path of embeddings (or a smooth disk-arc isotopy) before [L1] can extend it. The rotation-system construction does not supply that path, and the inspected current suppliers do not prove it for connected four-valent graphs with loops, parallel edges, and cut vertices. When $c=0$, the crossingless-circle case is outside the rotation-system argument and its smooth uniqueness is also unproved here. These uniqueness clauses remain escalated; no planar-isotopy conclusion is claimed. [A1, F5, L1, step 3.1]
