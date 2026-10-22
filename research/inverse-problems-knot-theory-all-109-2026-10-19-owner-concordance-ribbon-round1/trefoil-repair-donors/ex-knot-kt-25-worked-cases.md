---
id: ex-knot-kt-25-worked-cases
kind: example
title: "Unknot, trefoil, and positive untwisted Whitehead double cases"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - thm-alexander-polynomial-one-implies-topologically-slice
  - thm-seifert-determinant-is-the-knot-alexander-polynomial
  - def-knot-seifert-pairing-and-matrix
  - def-satellite-pattern-companion-and-winding-number
  - lem-positive-hopf-plumbing-has-trefoil-seifert-matrix
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
dependency_level: 16
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
    - title: "Matthew Hedden and Juanita Pinzón-Caicedo, Satellites of Infinite Rank in the Smooth Concordance Group"
      url: "https://arxiv.org/pdf/1809.04186"
      locator: "§5.2.2, Figure 2, printed pp.18–19; $P_0$ is the positive untwisted pattern and $V_0=\begin{pmatrix}0&0\\-1&-1\end{pmatrix}$"
    - title: "Stavros Garoufalidis and Peter Teichner, On Knots with Trivial Alexander Polynomial"
      url: "https://people.math.gatech.edu/~stavros/publications/teichner1.pdf"
      locator: "Introduction and Appendix A: Alexander-one knots and topological sliceness"
    - title: "Arunima Ray, Slice Knots and Knot Concordance"
      url: "https://aru-ray.github.io/documents/slicenotes.pdf"
      locator: "Definition 1.10, Theorem 1.13, and Figure 8, printed pp.5–6"
---

## Statement

Assume full AC. The unknot has the empty Seifert matrix, Alexander polynomial $1$, and a smooth slice disk. The right-handed trefoil has positive-push matrix $\begin{pmatrix}-1&0\\-1&-1\end{pmatrix}$ and Alexander polynomial $t^2-t+1$, so the Alexander-one theorem gives no conclusion for it and does not prove it nonslice. Let $Wh^+(T)$ denote the satellite of the right-handed trefoil $T$ by the positive-clasped, untwisted Whitehead pattern, embedded using the preferred longitude. This knot has Alexander polynomial $1$; by topologically slice we mean that it bounds a locally flat embedded disk in $B^4$. The established theorem gives that topological conclusion, not a smooth slice disk. The satellite determinant and local Freedman proofs remain explicit proof obligations in this example.

## Statement references

[[thm-alexander-polynomial-one-implies-topologically-slice|The Alexander-one topological sliceness theorem]]

[[lem-positive-hopf-plumbing-has-trefoil-seifert-matrix|The right-handed trefoil matrix]]

[[thm-seifert-determinant-is-the-knot-alexander-polynomial|The determinant convention used in the calculations]]

[[def-satellite-pattern-companion-and-winding-number|The satellite-pattern and winding-number conventions]]

Matthew Hedden and Juanita Pinzón-Caicedo, “Satellites of Infinite Rank in the Smooth Concordance Group,” §5.1, https://arxiv.org/pdf/1809.04186

Arunima Ray, *Slice Knots and Knot Concordance*, Definition 1.10, Theorem 1.13, and Figure 8, printed pp.5–6, https://aru-ray.github.io/documents/slicenotes.pdf

Stavros Garoufalidis and Peter Teichner, “On Knots with Trivial Alexander Polynomial,” Appendix A, https://people.math.gatech.edu/~stavros/publications/teichner1.pdf

## Facts & Assumptions

**Given:** Full AC, the unknot, the right-handed trefoil, and its positive untwisted Whitehead double.

[A1] [[def-axiom-of-choice]]: Full AC is the axiom used by the determinant supplier.

[F1] [[lem-positive-hopf-plumbing-has-trefoil-seifert-matrix]]: The right-handed trefoil has $V=\begin{pmatrix}-1&0\\-1&-1\end{pmatrix}$ in the positive-push convention.

[F2] [[thm-seifert-determinant-is-the-knot-alexander-polynomial]]: $\det(V-tV^T)\doteq\Delta_K(t)$.

[F3] [[def-satellite-pattern-companion-and-winding-number]]: A satellite is obtained by inserting a pattern into a preferred-longitude tubular embedding of its companion; its winding number is the pattern's algebraic intersection with a meridional disk.

## Proof

1.1 For the unknot, the Seifert surface is a disk, so $H_1(F;\mathbb Z)=0$ and the empty determinant is $1$; the standard flat disk in $B^4$ proves sliceness. For the trefoil, [F1] and [F2] give $\det(V-tV^T)=t^2-t+1$, which is not a Laurent unit. [given, A1, F1, F2, algebra]

1.2 For the positive untwisted Whitehead pattern $P_0$, the cited genus-one surface has matrix $V_0=\begin{pmatrix}0&0\\-1&-1\end{pmatrix}$, and direct calculation gives $\det(V_0-tV_0^T)=t$, whose inverse in $\mathbb Z[t^{\pm1}]$ is $t^{-1}$. This verifies the pattern's determinant when viewed as $P_0(U)$. To conclude $\Delta_{P_0(T)}\doteq1$ one still needs a local proof of the satellite Alexander-polynomial formula (or a direct Seifert-surface calculation) for the winding number defined in [F3]; that argument is not supplied here. The local Freedman theorem proof is also incomplete, so the topological slice conclusion remains escalated and no smooth sliceness follows. [F2, F3, step 1.1]

## Unresolved proof obligation

Supply a local construction/proof of the Whitehead pattern's Seifert matrix and the satellite determinant formula for $P_0(T)$, then resolve [[thm-alexander-polynomial-one-implies-topologically-slice]] and its unresolved S-equivalence, cyclic-good-group, complement/dual-sphere, and disk-embedding suppliers before marking this example ready.
