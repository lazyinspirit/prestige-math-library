---
id: ex-knot-kt-25-worked-cases
kind: example
title: "Unknot, trefoil, and positive untwisted Whitehead double cases"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - thm-alexander-polynomial-one-implies-topologically-slice
  - thm-seifert-determinant-is-the-knot-alexander-polynomial
  - def-knot-seifert-pairing-and-matrix
  - def-satellite-pattern-companion-and-winding-number
  - lem-positive-hopf-plumbing-has-trefoil-seifert-matrix
  - lem-seifert-matrix-skew-part-is-surface-intersection
  - lem-seifert-pairing-well-defined
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
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
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

## Example

Assume full AC. The unknot has the empty Seifert matrix, Alexander polynomial $1$, and a smooth slice disk. The right-handed trefoil has positive-push matrix $\begin{pmatrix}-1&0\\-1&-1\end{pmatrix}$ and Alexander polynomial $t^2-t+1$, so the Alexander-one theorem gives no conclusion for it and does not prove it nonslice. Let $Wh^+(T)$ denote the satellite of the right-handed trefoil $T$ by the positive-clasped, untwisted Whitehead pattern, embedded using the preferred longitude. This knot has Alexander polynomial $1$; by topologically slice we mean that it bounds a locally flat embedded disk in $B^4$. The established theorem gives that topological conclusion, not a smooth slice disk.

## Example references

[[thm-alexander-polynomial-one-implies-topologically-slice|The Alexander-one topological sliceness theorem]]

[[lem-positive-hopf-plumbing-has-trefoil-seifert-matrix|The right-handed trefoil matrix]]

[[thm-seifert-determinant-is-the-knot-alexander-polynomial|The determinant convention used in the calculations]]

[[def-satellite-pattern-companion-and-winding-number|The satellite-pattern and winding-number conventions]]

Matthew Hedden and Juanita Pinzón-Caicedo, “Satellites of Infinite Rank in the Smooth Concordance Group,” §5.2.2 and [Figure 2](https://arxiv.org/pdf/1809.04186#page=19), printed pp.18–19, https://arxiv.org/pdf/1809.04186

Arunima Ray, *Slice Knots and Knot Concordance*, Definition 1.10, Theorem 1.13, and [Figure 8](https://aru-ray.github.io/documents/slicenotes.pdf#page=6), printed pp.5–6, https://aru-ray.github.io/documents/slicenotes.pdf

Stavros Garoufalidis and Peter Teichner, “On Knots with Trivial Alexander Polynomial,” Appendix A, https://people.math.gatech.edu/~stavros/publications/teichner1.pdf

## Facts & Assumptions

**Given:** Full AC, the unknot, the right-handed trefoil, and its positive untwisted Whitehead double.

[A1] [[def-axiom-of-choice]]: Full AC is the axiom used by the determinant supplier.

[F1] [[lem-positive-hopf-plumbing-has-trefoil-seifert-matrix]]: The right-handed trefoil has $V=\begin{pmatrix}-1&0\\-1&-1\end{pmatrix}$ in the positive-push convention.

[F2] [[thm-seifert-determinant-is-the-knot-alexander-polynomial]]: $\det(V-tV^T)\doteq\Delta_K(t)$.

[F3] [[def-satellite-pattern-companion-and-winding-number]]: A satellite is obtained by inserting a pattern into a preferred-longitude tubular embedding of its companion; its winding number is the pattern's algebraic intersection with a meridional disk.

[F4] [[thm-alexander-polynomial-one-implies-topologically-slice]]: Under full AC, a smooth oriented Alexander-one knot bounds a locally flat proper disk in the standard four-ball.

[F5] [[lem-seifert-matrix-skew-part-is-surface-intersection]]: In a positive handle basis $(a,b)$, the entries satisfy $V_{12}-V_{21}=a\cdot_F b=1$.

[F6] [[lem-seifert-pairing-well-defined]]: Linking is symmetric and the positive-push pairing is independent of the sufficiently small positive push and cycle representatives.

## Proof

1.1 For the unknot, the Seifert surface is a disk, so $H_1(F;\mathbb Z)=0$ and the empty determinant is $1$; the standard flat disk in $B^4$ proves sliceness. For the trefoil, [F1] and [F2] give $\det(V-tV^T)=t^2-t+1$, which is not a Laurent unit. [given, A1, F1, F2, algebra]

1.2 Construct the actual surface inside the preferred-longitude tube of $T$ from [F3]. Take a narrow annulus $A$ about its core with the zero product framing. In a small ball meeting $A$ in one square $Q$, plumb $A$ to a positive Hopf annulus $H$: identify their squares so the two annular core arcs are the two crossing coordinate axes in $Q$, and place the parts outside the square on opposite sides. Smooth the four square corners. Outside that ball the boundary is the two oppositely oriented zero-framed parallels of $T$; inside the ball the positive Hopf band joins them by its positive clasp. This is precisely the positive-clasped untwisted Whitehead pattern in the specified tube. The untwisted condition is the zero framing of $A$, and the construction uses the preferred longitude rather than an arbitrary longitude. It is also the $k=0$ surface of the cited [Figure 2](https://arxiv.org/pdf/1809.04186#page=19); that figure identifies the convention but is not a substitute for the following matrix calculation. [given, F3, construct]

2.1 Let $a$ be the annulus core and $b$ the Hopf core, with orientations chosen so their sole square intersection has $a\cdot_F b=1$. The plumbed surface is connected and oriented. Its Euler characteristic is $0+0-1=-1$, and tracing the alternating four attaching edges gives one boundary component. The two annuli retract to their two core loops with the square intersection identified, so $(a,b)$ is an integral handle basis and the surface has genus one. Choose the plumbing side in which the positive push of the $a$-arc is above the square. The unknotted Hopf core $b$ has a spanning disk in the local ball lying below the square except for its boundary arc; use the lower side for the remainder of $H$. Thus this disk misses $a^+$, including the part of $a^+$ outside the ball. This is a local disk for $b$, and does not assert that the companion $a=T$ bounds a disk. [F3, F6, step 1.2, construct]

3.1 The positive push of $a$ is a small parallel with the product annulus framing; its linking with $a$ is zero because that product longitude is the preferred longitude. Equivalently move the push to the annular side direction through nonzero normal directions, keeping it disjoint from $a$. The local square does not add a twist to this annular framing. Hence $V_{11}=0$. The two boundary components of the positive Hopf annulus, with induced orientations, link $+1$. Equally oriented core parallels therefore link $-1$, since one induced boundary orientation is reversed. Moving one core parallel to the positive normal push preserves this linking, so $V_{22}=-1$. The local spanning disk from step 2.1 and symmetry of linking give $V_{12}=\operatorname{lk}(a^+,b)=0$. Finally [F5] gives $V_{21}=-1$. Thus the ACTUAL Whitehead double of $T$, not just the pattern applied to the unknot, has matrix $V_0=\begin{pmatrix}0&0\\-1&-1\end{pmatrix}$. [F2, F3, F5, F6, step 2.1, construct]

4.1 Direct calculation gives $\det(V_0-tV_0^T)=t$. This is a Laurent unit, with inverse $t^{-1}$, so [F2] gives $\Delta_{Wh^+(T)}\doteq1$. Applying [F4] proves the stated locally flat proper slice disk in the standard $B^4$. The argument establishes the announced topological conclusion; it contains no smooth slice-disk construction and no inference that the trefoil is nonslice from its nonunit Alexander polynomial. Every claim in the example follows without a general satellite determinant theorem. [A1, F2, F4, step 1.1, step 3.1, algebra] ∎
