---
id: cor-finite-cw-real-vector-bundle-has-orthogonal-complement-under-ac
kind: corollary
title: Finite-CW real bundles have orthogonal complements under AC
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-clifford-modules-ko-and-abs-orientations
dependency_level: 1
deps:
- lem-numerated-real-vector-bundle-embeds-in-finite-trivial-bundle
- def-cw-complex-with-closure-finiteness-and-weak-topology
- thm-subordinate-partitions-of-unity-exist
- lem-ac-supplies-dependent-choice-for-vector-bundle-constructions
- def-axiom-of-choice
- prop-compact-spaces-are-paracompact
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
  - title: M. F. Atiyah, K-Theory (lectures, notes by D. W. Anderson, 1967), with
      K-Theory and Reality reprint
    url: https://www.maths.ed.ac.uk/~v1ranick/papers/atiyahk.pdf
  - title: Max Karoubi, Lectures on K-theory, ICTP Lecture Notes (2004)
    url: https://webusers.imj-prg.fr/~max.karoubi/Publications/71.pdf
  - title: Jost-Hinrich Eschenburg and Bernhard Hanke, Bott–Thom isomorphism, Hopf
      bundles and Morse theory (2021)
    url: https://arxiv.org/pdf/2011.14368
---

## Statement

Assume AC. If $X$ is a finite CW complex and $E\to X$ is any finite-rank real vector bundle, then $E$ is isomorphic to a subbundle of a finite trivial bundle and has an orthogonal vector-bundle complement.

## Facts & Assumptions
**Given:** ZF+AC, a finite CW complex $X$ (meaning a CW complex with finitely many cells), and a finite-rank real vector bundle $E\to X$.

[F1] A CW complex is Hausdorff and is built from closed disks by characteristic maps ([[def-cw-complex-with-closure-finiteness-and-weak-topology]]).

[F2] Every compact topological space is paracompact ([[prop-compact-spaces-are-paracompact]]).

[F3] Under AC and DC, every open cover of a paracompact Hausdorff space admits a locally finite subordinate partition of unity ([[thm-subordinate-partitions-of-unity-exist]]).

[F4] AC implies the prescribed-initial-point form of DC ([[lem-ac-supplies-dependent-choice-for-vector-bundle-constructions]]).

[F5] A finite numerated real vector bundle over a compact Hausdorff base embeds in a finite trivial bundle and has its standard orthogonal complement ([[lem-numerated-real-vector-bundle-embeds-in-finite-trivial-bundle]]).

## Proof

**Proof technique:** finite numeration followed by the explicit embedding.

1.1 If $X$ is empty, the claim is vacuous; assume it is nonempty. Each closed cell of $X$ is the continuous image of a closed disk and hence compact. Since there are finitely many cells, $X$ is a finite union of compact closed-cell images, so it is compact; [F1] gives Hausdorffness. [given, F1, algebra]


2.1 By [F2] and step 1.1, $X$ is paracompact and Hausdorff. The bundle's local trivializations form an open cover of $X$. Compactness gives a finite subcover. Apply [F3] to this cover: its AC and DC hypotheses hold because AC is given and [F4] derives DC. The resulting locally finite partition has only finitely many nonzero members: choose for each point a neighborhood meeting finitely many supports, then take a finite subcover of those neighborhoods by compactness; the union of the finite index sets is finite. Thus the chart subcover and partition give a finite numeration. [given, F2, F3, F4, step 1.1, choose]


3.1 Apply [F5] to this finite numeration. It supplies a fiberwise-linear embedding $E\hookrightarrow X\times\mathbb R^N$ and the subbundle $F$ orthogonal to its image in the standard Euclidean metric. The fiberwise orthogonal direct sum is the whole trivial bundle, so $E\oplus F\cong X\times\mathbb R^N$. AC is used to obtain the partition in [F3] and, through [F4], to discharge its DC hypothesis in step 2.1. [F5, step 2.1] ∎
