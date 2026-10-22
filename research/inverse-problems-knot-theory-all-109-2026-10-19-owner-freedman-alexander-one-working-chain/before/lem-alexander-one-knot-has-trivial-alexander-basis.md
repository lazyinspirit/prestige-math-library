---
id: lem-alexander-one-knot-has-trivial-alexander-basis
kind: lemma
title: "An Alexander-one knot has a trivial Alexander basis"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-alexander-one-seifert-form-is-s-equivalent-to-empty
  - def-seifert-form-s-equivalence
  - def-oriented-seifert-surface
  - thm-every-oriented-knot-bounds-a-seifert-surface
  - def-countable-choice
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
dependency_level: 13
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Stavros Garoufalidis and Peter Teichner, On Knots with Trivial Alexander Polynomial"
      url: "https://people.math.gatech.edu/~stavros/publications/teichner1.pdf"
      locator: "Definition 4.1 and Lemma 4.2, printed pp.5–6"
    - title: "H. F. Trotter, On S-equivalence of Seifert Matrices"
      url: "https://gdz.sub.uni-goettingen.de/download/pdf/PPN356556735_0020/LOG_0020.pdf"
      locator: "The S-equivalence input invoked in Lemma 4.2; proof not yet reconstructed locally"
---

## Statement

Assume full AC. Let $K\subset S^3$ be a smooth oriented knot with $\Delta_K(t)\doteq1$, where $\doteq$ denotes equality up to multiplication by a unit $\pm t^k$ of $\mathbb Z[t^{\pm1}]$. Then $K$ has a connected compact smooth oriented Seifert surface $F$ and an ordered geometric basis, represented by embedded simple closed curves $s_1,\ldots,s_g,\ell_1,\ldots,\ell_g$ for $H_1(F;\mathbb Z)$, such that $s_i\cdot_Fs_j=0=\ell_i\cdot_F\ell_j$ and $s_i\cdot_F\ell_j=\delta_{ij}$, and the Seifert matrix in this basis has block form
$$
V=\begin{pmatrix}0&I_g+U\\U^T&W\end{pmatrix},
$$
where $U$ is strictly upper triangular and $W$ is symmetric with zero diagonal. Such a geometric symplectic basis and block matrix are called a trivial Alexander basis.

## Statement references

[[def-oriented-seifert-surface|Connected compact oriented Seifert surfaces and their genus]]

[[thm-every-oriented-knot-bounds-a-seifert-surface|Existence of a Seifert surface under countable choice]]

[[lem-alexander-one-seifert-form-is-s-equivalent-to-empty|The Alexander-one S-equivalence claim needed for the basis construction]]

Stavros Garoufalidis and Peter Teichner, “On Knots with Trivial Alexander Polynomial,” Definition 4.1 and Lemma 4.2, https://people.math.gatech.edu/~stavros/publications/teichner1.pdf

## Facts & Assumptions

**Given:** Full AC and an oriented knot $K$ with $\Delta_K(t)\doteq1$.

[A1] [[def-axiom-of-choice]]: AC is the choice-function axiom used by the Seifert-form interfaces.

[F1] [[def-oriented-seifert-surface]]: A Seifert surface is connected, compact, smooth, oriented, and has boundary the given oriented knot.

[F2] [[thm-every-oriented-knot-bounds-a-seifert-surface]]: Under $\mathrm{AC}_\omega$, every smooth oriented knot bounds such a surface.

## Proof

1.1 By [F2] and full AC, choose a connected compact oriented Seifert surface $F$ for $K$; its integral first homology is a free group of rank $2g$ by the compact-surface convention in [F1]. [given, A1, F1, F2, choose]

1.2 The S-equivalence supplier would express the Seifert form as finitely many tube additions from the empty form, and the source then converts the resulting algebraic basis to a geometric one. Neither the Trotter reduction argument nor the required basis-realization argument is completed locally here; therefore the existence of the displayed trivial Alexander basis is not proved in this draft. [step 1.1]

## Unresolved proof obligation

Supply the actual tube-addition induction, verify the upper-triangular/symmetric block conditions in the positive-push convention, and prove that the resulting symplectic basis is represented by a geometric basis on the chosen surface. Do not use the unproved S-equivalence claim as an established result.
