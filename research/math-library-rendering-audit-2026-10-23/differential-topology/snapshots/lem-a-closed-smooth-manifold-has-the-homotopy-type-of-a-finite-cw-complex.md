---
id: lem-a-closed-smooth-manifold-has-the-homotopy-type-of-a-finite-cw-complex
kind: lemma
title: A closed smooth manifold has the homotopy type of a finite CW complex
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps:
- cor-every-compact-smooth-manifold-admits-an-excellent-morse-function
- cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points
- cor-one-critical-point-cell-attachment-homotopy-type
- def-morse-function-and-excellent-morse-function
- def-critical-point-and-critical-value-of-a-smooth-function
- def-cell-attachment-by-a-characteristic-map
- def-cw-complex-with-closure-finiteness-and-weak-topology
- def-compact-space
- def-smooth-manifold
- def-axiom-of-choice
- lem-axiom-of-choice-implies-countable-choice
- thm-cellular-approximation-for-maps-of-cw-pairs
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
  - title: John Milnor, Morse Theory (Annals of Mathematics Studies 51; complete PDF)
    url: https://www.maths.ed.ac.uk/~v1ranick/papers/milnmors.pdf
    locator: §3, Theorem 3.5 and Lemmas 3.6–3.7, printed pp. 20–24 (cell-attachment homotopy invariance and the CW-model construction); §6, printed
      pp. 28–35 (existence of Morse functions on compact manifolds)
dependency_level: 2
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $M$ be a closed smooth
manifold ([[def-smooth-manifold]]). Then $M$ has the homotopy type of a finite
CW complex ([[def-cw-complex-with-closure-finiteness-and-weak-topology]]).

## Facts & Assumptions

**Given:** A closed smooth manifold $M$ and the Axiom of Choice.

[F1] Assume the axiom of choice; every compact smooth manifold admits an excellent Morse function ([[cor-every-compact-smooth-manifold-admits-an-excellent-morse-function]]).

[F2] If $M$ is a compact smooth manifold and $f:M\to\mathbb R$ is Morse, then $f$ has only finitely many critical points ([[cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points]]).

[F3] A function is an excellent Morse function when it is Morse and any two distinct critical points have distinct critical values; on a nonempty compact manifold the minimum and maximum of a smooth real function occur at critical points, since its derivative vanishes at an interior extremum ([[def-morse-function-and-excellent-morse-function]], [[def-critical-point-and-critical-value-of-a-smooth-function]], [[def-compact-space]]).

[F4] Assume $\mathrm{AC}_\omega$ and the one-critical-point compact-band hypotheses: if $f^{-1}([a,b])$ is compact with exactly one critical point $p$, nondegenerate of index $k$, and $a<b$ are regular values, then $M^b$ is homotopy equivalent to $M^a$ with one $k$-cell attached along the transported attaching sphere, and the comparison respects the lower sublevel up to homotopy of pairs ([[cor-one-critical-point-cell-attachment-homotopy-type]]).

[F5] A CW complex is built by successively attaching cells; the attachment of a single cell to a space is described by the characteristic map, and a finite CW complex has finitely many cells ([[def-cell-attachment-by-a-characteristic-map]], [[def-cw-complex-with-closure-finiteness-and-weak-topology]]).

[F6] The Axiom of Choice implies the countable choice principle $\mathrm{AC}_\omega$ ([[lem-axiom-of-choice-implies-countable-choice]]).

[F7] A map from a finite CW complex to a CW complex is homotopic to a cellular map, without extra choice ([[thm-cellular-approximation-for-maps-of-cw-pairs]]).

[F8] Homotopic attaching maps $S^{r-1}\to X$ give homotopy-equivalent cell attachments relative to $X$; a homotopy equivalence $X\to Y$ extends to a homotopy equivalence after attaching the corresponding cell to each space. These are Milnor, *Morse Theory*, §3, Lemmas 3.6–3.7, printed pp. 20–23, with their explicit collar homotopies and two-sided homotopy-inverse construction. For $r=0$ the assertion is simply disjointly adjoining one point.

## Proof

**Proof technique:** direct, assembling the Morse handle decomposition.

1.1 (Critical values and regular levels.) If $M=\varnothing$, the empty CW complex has no cells and the identity is a homotopy equivalence, proving the claim. Hence assume $M\ne\varnothing$. By [F1] choose an excellent Morse function $f:M\to\mathbb R$; this is a single existential instantiation from the hypothesis that one exists, and the Axiom of Choice is what supplies that existence [F1]. By [F2] $f$ has finitely many critical points, so its set of critical values is finite, say $c_1<\dots<c_k$; the values $c_j$ are distinct by excellence [F3]. Since a value of $f$ is critical exactly when it is the image of a critical point, every real number different from $c_1,\dots,c_k$ is a regular value. Choose $a_0<c_1$, then $a_j\in(c_j,c_{j+1})$ for $1\le j\le k-1$, and $a_k>c_k$; these are finitely many choices from nonempty open intervals, the last possible because $M$ is compact so $f$ is bounded [F3]. Then $M^{a_0}=\varnothing$ and $M^{a_k}=M$. [F1, F2, F3]

1.2 (One critical point per band.) Fix $j\in\{1,\dots,k\}$. The band $f^{-1}([a_{j-1},a_j])$ is a closed subset of the compact manifold $M$, hence compact, its boundary values $a_{j-1}<a_j$ are regular, and it contains exactly the one critical point $p_j$ of $f$, which is nondegenerate of some index $\lambda_j$ because $f$ is Morse [F3]. The hypotheses of the one-critical-point attachment statement are therefore satisfied, and it provides a homotopy equivalence from $M^{a_j}$ to $M^{a_{j-1}}$ with one $\lambda_j$-cell attached, compatible with the lower sublevel [F4]. Suppose inductively that $M^{a_{j-1}}\simeq X_{j-1}$, with $X_{j-1}$ finite CW. Transport the attaching map through that equivalence using F8. For $\lambda_j>0$, cellular approximation F7 homotopes the transported sphere map into $X_{j-1}^{\lambda_j-1}$; F8 preserves the attachment homotopy type. Adjoining the $\lambda_j$-cell along this cellular map gives a finite CW complex $X_j$. If $\lambda_j=0$, adjoin one isolated vertex. Starting with $X_0=\varnothing$, this proves the induction, including out-of-index-order critical points. [F3, F4, F5, F7, F8]

2.1 (Conclusion.) Taking $j=k$ gives $M=M^{a_k}\simeq X_k$, and $X_k$ is a finite CW complex with exactly $k$ cells, one for each critical point [F5]. The Axiom of Choice is used only through the existence of the excellent Morse function [F1] and through the countable choice principle consumed by the handle attachment statement, which follows from full AC by [F6]. Hence $M$ has the homotopy type of a finite CW complex. [F5, F6, step 1.2] ∎
