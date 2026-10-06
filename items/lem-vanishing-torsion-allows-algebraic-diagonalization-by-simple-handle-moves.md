---
id: lem-vanishing-torsion-allows-algebraic-diagonalization-by-simple-handle-moves
kind: lemma
title: "Vanishing torsion allows algebraic diagonalization by simple handle moves"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 14
deps: ["def-based-handle-chain-complex-over-the-fundamental-group-ring", "def-whitehead-torsion-of-an-h-cobordism", "lem-relative-handle-complex-torsion-agrees-with-the-inclusion", "def-k-one-of-a-ring-and-the-whitehead-group-of-a-discrete-group", "def-stable-general-linear-group-and-elementary-subgroup-of-a-ring", "lem-the-stable-elementary-subgroup-is-normal-and-contains-the-commutator-subgroup", "prop-elementary-matrix-operations-are-realized-by-handle-slides", "lem-handle-slides-act-by-elementary-basis-change-on-handle-chains", "def-middle-handle-intersection-matrix-of-an-h-cobordism", "thm-creation-of-a-cancelling-handle-pair", "lem-elementary-basis-changes-orientations-and-deck-lift-changes-die-in-the-whitehead-group", "lem-handle-slides-and-cancelling-pair-creations-preserve-whitehead-torsion", "def-countable-choice", "lem-group-ring-modification-lemma-for-embedded-spheres", "lem-attaching-handles-along-isotopic-attaching-embeddings-preserves-the-diffeomorphism-type"]
provenance:
  statement: ai-altered
  proof: literature-derived
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Wolfgang Lück, A Basic Introduction to Surgery Theory (ICTP lecture notes, 27 October 2004; complete author text)"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Chapter 1 §1.4, proof of Lemma 1.27(1), printed pp. 19--20"
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, electronic edition)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/books/surgery.pdf"
      locator: "The proof of Theorem 8.33, printed pp. 184--185; PDF pages 192, 193"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let a nonempty connected oriented smooth h-cobordism of dimension $n+1\ge6$ have a two-index presentation in degrees $q,q+1$, $2\le q\le n-2$, with right-module differential matrix $A\in\mathrm{GL}_c(R)$, $R=\mathbb Z[\pi_1(W)]$. If $[A]=0$ in $\operatorname{Wh}(\pi_1(W))$, finitely many cancelling-pair additions, equal-index slides, reorderings and choices of oriented lifts give a presentation with diagonal differential matrix of size $c+b$ and entries $\pm g_i$, for some $b\ge0$. The stabilization is allowed to remain until geometric cancellation.

Algebraically there are elementary matrices $E_1,\ldots,E_k$ of size $c+b$ and a trivial-unit diagonal matrix $D$ with
$$A\oplus I_b=E_1\cdots E_kD.$$

## Facts & Assumptions

**Given:** The oriented high-dimensional two-index presentation and $[A]=0$ in the statement.

[F1] $K_1(R)=\mathrm{GL}(R)/\mathrm E(R)$ and $\operatorname{Wh}(\pi)=K_1(R)/\langle[\pm g]\rangle$; the stable elementary subgroup is normal. [[def-k-one-of-a-ring-and-the-whitehead-group-of-a-discrete-group]], [[def-stable-general-linear-group-and-elementary-subgroup-of-a-ring]], [[lem-the-stable-elementary-subgroup-is-normal-and-contains-the-commutator-subgroup]].

[F2] A cancelling $q/(q+1)$ pair adds a unit block, normalized to $1$ by orientations and lifts. Elementary and trivial-unit basis changes have zero Whitehead class. [[thm-creation-of-a-cancelling-handle-pair]], [[lem-elementary-basis-changes-orientations-and-deck-lift-changes-die-in-the-whitehead-group]], [[lem-handle-slides-and-cancelling-pair-creations-preserve-whitehead-torsion]].

[F3] The modification construction in the complement of one omitted upper handle replaces its attaching-sphere class $v_j$ by $v_j+v_i r$, $i\ne j$, and gives an isotopy after the other upper handles are attached. It preserves its framing and the resulting manifold. [[lem-group-ring-modification-lemma-for-embedded-spheres]], [[lem-attaching-handles-along-isotopic-attaching-embeddings-preserves-the-diffeomorphism-type]].

[F4] A two-term differential in degrees $q+1,q$ has contraction torsion $(-1)^q[A]$; its right-module matrix uses lower handles as rows and upper handles as columns. [[def-based-handle-chain-complex-over-the-fundamental-group-ring]], [[lem-relative-handle-complex-torsion-agrees-with-the-inclusion]].

## Proof

1.1 By [F1], the $K_1$ class of $A$ is a finite sum of classes of units $\pm g$, with inverses again of that form. Represent that sum by a finite diagonal matrix $D$, padding $A$ and $D$ by identities to the same size. Then $(A\oplus I)D^{-1}\in\mathrm E(R)$. Membership in the stable union gives a further finite padding for which it is a finite product of elementary matrices. This proves the displayed factorization; $D$ has $c+b$ diagonal entries. [F1, given]

2.1 Normalize the target handle basis by $D$. In right coordinate columns, a new target basis with matrix $D$ changes the differential $B=A\oplus I_b$ to $D^{-1}B$. Normality in [F1] gives $D^{-1}B\in\mathrm E(R)$; after further identity padding if necessary it is a product of elementary matrices of the displayed size. The padding is geometrically supplied by [F2], and each diagonal basis change is an orientation or deck-lift choice. [F1, F2, step 1.1]

3.1 Realize multiplication on the right by an elementary matrix $e_{ij}(r)$. Its effect is column $j\mapsto$ column $j+$ column $i\cdot r$. Apply [F3] with the $j$th upper handle omitted and the $i$th retained. All upper handles have index $q+1\ge3$, so omitting one changes no fundamental group; thus the ambient coefficient group is still $\pi_1(W)$. The framed band modifications of [F3] are upper-handle slides, one per signed monomial of $r$; arbitrary $r$ generally needs several slides. The new attaching embedding is isotopic after the retained upper handles are attached, so the relative diffeomorphism type is preserved. No incorrect direct identification of core and belt basis changes is used. [F3, F4, step 2.1, construct]

4.1 Apply step 3.1 to the elementary factors of $(D^{-1}B)^{-1}$ in their multiplication order. The resulting matrix is $I_{c+b}$, a permitted trivial-unit diagonal matrix. All its added handles remain part of the stabilized presentation. By [F2] torsion is unchanged, and [F4] gives $(-1)^q[I_{c+b}]=0$. This proves the geometric diagonalization with the stated dimension and stabilization hypotheses. [F2, F4, step 2.1, step 3.1] ∎
