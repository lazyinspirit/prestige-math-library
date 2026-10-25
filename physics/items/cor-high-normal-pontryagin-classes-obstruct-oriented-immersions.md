---
id: cor-high-normal-pontryagin-classes-obstruct-oriented-immersions
kind: corollary
title: "High normal Pontryagin classes obstruct low-codimension immersions"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: ["def-normal-stiefel-whitney-and-pontryagin-classes-of-a-closed-manifold", "lem-normal-pontryagin-class-is-the-rational-inverse-of-the-tangent-pontryagin-class", "thm-naturality-stability-and-mod-two-reduction-of-pontryagin-classes", "lem-an-immersion-into-r-n-gives-a-rank-n-minus-m-representative-of-the-stable-normal-bundle", "thm-choice-implies-dependent-implies-countable-choice", "def-axiom-of-choice", "def-pontryagin-classes-by-complexification"]
justified_by: []
dependency_level: 4
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "John W. Milnor and James D. Stasheff, Characteristic Classes (Annals of Mathematics Studies 74, Princeton University Press; complete text)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "SS4, printed pp. 43-48 (Lemma 4.4, Theorem 4.5, Corollary 4.6, the immersion paragraph, Theorem 4.8); SS11, printed pp. 119-136 (Theorem 11.3, Corollary 11.12, Wu's formula and Corollary 11.15); SS15, printed pp. 173-178 (Theorem 15.3, Corollary 15.5, Corollary 15.8)"
    - title: "Arkadiy Skopenkov, Embedding and Knotting of Manifolds in Euclidean Spaces (arXiv:math/0604045)"
      url: "https://arxiv.org/pdf/math/0604045"
      locator: "SS1-2, article pp. 1-13; the subsection 'The Whitney obstruction' on article pp. 11-12 (modulo 2 and integral Whitney obstructions, normal Stiefel-Whitney classes, Pontryagin classes p_i as embedding obstructions), and the knotting boundary in SS2-3 and SS5"
    - title: "Ralph L. Cohen, Immersions of Manifolds and Homotopy Theory (lecture notes, 30 June 2022; complete 46-page text)"
      url: "https://math.stanford.edu/~ralph/immersions-final.pdf"
      locator: "SS1-3.1, PDF pp. 4-13: Proposition 1, Theorem 2 (Hirsch-Smale), Corollary 3 (k-dimensional inverse of the tangent bundle), Theorems 4-5, Corollary 10 (normal Stiefel-Whitney nonimmersion test) and the RP^{2^k} example, Theorem 11 (Massey)"
---

## Statement

Assume AC. Let $M$ be a closed connected smooth $m$-manifold and let $k\ge1$. If $\bar p_i(M)\neq0$ in $H^{4i}(M;\mathbb Q)$ for some $i\ge1$ with $2i>k$ ([[def-normal-stiefel-whitney-and-pontryagin-classes-of-a-closed-manifold]]), then $M$ does not immerse in $\mathbb R^{m+k}$; equivalently, if $\bar p_i(M)\neq0$ then every immersion of $M$ has codimension at least $2i$, so $M$ does not immerse in $\mathbb R^{m+2i-1}$. All assertions are over $\mathbb Q$: the integral Whitney product for Pontryagin classes carries a two-torsion correction and the integral form of this test is not asserted.

## Facts & Assumptions

**Given:** A closed connected smooth $m$-manifold $M$, an integer $k\ge1$, an index $i\ge1$ with $2i>k$ and $\bar p_i(M)\neq0$ in $H^{4i}(M;\mathbb Q)$, and AC ([[def-axiom-of-choice]]).

[F1] AC implies the countable choice used by the normal-bundle splitting ([[thm-choice-implies-dependent-implies-countable-choice]]).

[F2] For a smooth immersion $f:M\looparrowright\mathbb R^n$ of a closed smooth $m$-manifold with $n>m$, the normal bundle $\nu_f$ of rank $n-m$ is a rank-$(n-m)$ stable normal inverse of $M$, with $TM\oplus\nu_f\cong\varepsilon^n$ ([[lem-an-immersion-into-r-n-gives-a-rank-n-minus-m-representative-of-the-stable-normal-bundle]]).

[F3] The normal Pontryagin class is $\bar p(M)=p(TM)^{-1}=p(\nu)$ over $\mathbb Q$ for any stable normal inverse $(\nu,\varphi)$ of $M$, so $p_i(\nu)=\bar p_i(M)$ for every $i$ ([[def-normal-stiefel-whitney-and-pontryagin-classes-of-a-closed-manifold]], [[lem-normal-pontryagin-class-is-the-rational-inverse-of-the-tangent-pontryagin-class]]).

[F4] Pontryagin classes vanish above the rank: if $\operatorname{rank}E=r$ then $p_i(E)=0$ for $2i>r$ ([[thm-naturality-stability-and-mod-two-reduction-of-pontryagin-classes]], [[def-pontryagin-classes-by-complexification]]).

## Proof

1.1 Suppose for contradiction that $f:M\looparrowright\mathbb R^{m+k}$ is a smooth immersion. Since $k\ge1$ and $M$ is closed, [F2] applies with $n=m+k>m$ under the countable choice granted by [F1]; therefore the normal bundle $\nu_f$, of rank $k$, is a rank-$k$ stable normal inverse of $M$. [F1, F2]

2.1 By [F3] the class $p_i(\nu_f)=\bar p_i(M)$ for the given index $i$, and $2i>k=\operatorname{rank}\nu_f$, so [F4] gives $p_i(\nu_f)=0$, contradicting $\bar p_i(M)\neq0$. Hence no immersion of $M$ into $\mathbb R^{m+k}$ exists. [F3, F4, step 1.1]

3.1 The final sentence is the case $k=2i-1$: if $\bar p_i(M)\neq0$ then no immersion into $\mathbb R^{m+2i-1}$ exists, because $2i>2i-1$. Equivalently every immersion of $M$ has codimension at least $2i$ under this hypothesis. The argument is stated over $\mathbb Q$ because the rank vanishing and the inverse identity for $p_i$ are used rationally; the integral form is not asserted, since the integral Whitney product for Pontryagin classes only holds modulo two-torsion. No orientation of $M$ is needed beyond the rational normalization. [F3, step 2.1] ∎
