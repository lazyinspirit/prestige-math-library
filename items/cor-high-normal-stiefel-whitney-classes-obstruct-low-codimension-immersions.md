---
id: cor-high-normal-stiefel-whitney-classes-obstruct-low-codimension-immersions
kind: corollary
title: "High normal Stiefel-Whitney classes obstruct low-codimension immersions"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [thm-compactness-under-continuous-maps,
       thm-compact-subset-of-a-hausdorff-space-is-closed,
       prop-smooth-maps-are-continuous,
       thm-smooth-inverse-function-theorem-on-manifolds,
       def-compact-space,
       "def-normal-stiefel-whitney-and-pontryagin-classes-of-a-closed-manifold", "lem-normal-stiefel-whitney-class-is-the-multiplicative-inverse-of-the-tangent-class", "lem-an-immersion-into-r-n-gives-a-rank-n-minus-m-representative-of-the-stable-normal-bundle", "def-stiefel-whitney-classes-from-the-projective-bundle-relation", "thm-choice-implies-dependent-implies-countable-choice", "def-axiom-of-choice"]
justified_by: []
dependency_level: 4
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Ralph L. Cohen, Immersions of Manifolds and Homotopy Theory (lecture notes, 30 June 2022; complete 46-page text)"
      url: "https://math.stanford.edu/~ralph/immersions-final.pdf"
      locator: "SS1-3.1, PDF pp. 4-13: Proposition 1, Theorem 2 (Hirsch-Smale), Corollary 3 (k-dimensional inverse of the tangent bundle), Theorems 4-5, Corollary 10 (normal Stiefel-Whitney nonimmersion test) and the RP^{2^k} example, Theorem 11 (Massey)"
    - title: "John W. Milnor and James D. Stasheff, Characteristic Classes (Annals of Mathematics Studies 74, Princeton University Press; complete text)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "SS4, printed pp. 43-48 (Lemma 4.4, Theorem 4.5, Corollary 4.6, the immersion paragraph, Theorem 4.8); SS11, printed pp. 119-136 (Theorem 11.3, Corollary 11.12, Wu's formula and Corollary 11.15); SS15, printed pp. 173-178 (Theorem 15.3, Corollary 15.5, Corollary 15.8)"
    - title: "Arkadiy Skopenkov, Embedding and Knotting of Manifolds in Euclidean Spaces (arXiv:math/0604045)"
      url: "https://arxiv.org/pdf/math/0604045"
      locator: "SS1-2, article pp. 1-13; the subsection 'The Whitney obstruction' on article pp. 11-12 (modulo 2 and integral Whitney obstructions, normal Stiefel-Whitney classes, Pontryagin classes p_i as embedding obstructions), and the knotting boundary in SS2-3 and SS5"
---

## Statement

Assume AC. Let $M$ be a closed smooth $m$-manifold and let $k\ge1$. If there is an index $i>k$ with $\bar w_i(M)\neq0$ ([[def-normal-stiefel-whitney-and-pontryagin-classes-of-a-closed-manifold]]), then $M$ does not immerse in $\mathbb R^{m+k}$; equivalently every immersion of $M$ into a Euclidean space has codimension at least $i$, so fewer than $i$ dimensions of codimension are impossible. In particular, if $\bar w_i(M)\neq0$ for some $i\ge1$, then $M$ does not immerse in $\mathbb R^{m+i-1}$. This is the standard normal Stiefel-Whitney non-immersion test.

## Facts & Assumptions

**Given:** A closed smooth $m$-manifold $M$, an integer $k\ge1$, an index $i>k$ with $\bar w_i(M)\neq0$, and AC ([[def-axiom-of-choice]]).

[F1] AC implies the countable choice $\mathrm{AC}_\omega$ used by the normal-bundle splitting ([[thm-choice-implies-dependent-implies-countable-choice]]).

[F2] For a smooth immersion $f:M\looparrowright\mathbb R^n$ of a closed smooth $m$-manifold with $n>m$, its normal bundle $\nu_f$ of rank $n-m$ is a rank-$(n-m)$ stable normal inverse of $M$, and $TM\oplus\nu_f\cong\varepsilon^n$ ([[lem-an-immersion-into-r-n-gives-a-rank-n-minus-m-representative-of-the-stable-normal-bundle]]).

[F3] The normal classes are $\bar w(M)=w(TM)^{-1}=w(\nu)$ for any stable normal inverse $(\nu,\varphi)$ of $M$, and $w_i(\nu)=\bar w_i(M)$ for every $i$ ([[def-normal-stiefel-whitney-and-pontryagin-classes-of-a-closed-manifold]], [[lem-normal-stiefel-whitney-class-is-the-multiplicative-inverse-of-the-tangent-class]]).

[F4] Stiefel-Whitney classes of a bundle vanish above its rank: if $\operatorname{rank}E=r$ then $w_j(E)=0$ for $j>r$ ([[def-stiefel-whitney-classes-from-the-projective-bundle-relation]]).

[F5] A smooth map with invertible differential is a local diffeomorphism ([[thm-smooth-inverse-function-theorem-on-manifolds]]).

[F6] Smooth maps are continuous, continuous images of compact topological spaces are compact, and compact subsets of Hausdorff spaces are closed ([[prop-smooth-maps-are-continuous]], [[thm-compactness-under-continuous-maps]], [[thm-compact-subset-of-a-hausdorff-space-is-closed]]).

## Proof

1.1 Suppose, for contradiction, that there is a smooth immersion $f:M\looparrowright\mathbb R^{m+k}$. By [F1] the hypothesis $\mathrm{AC}_\omega$ of [F2] holds with $n=m+k>m$, so the normal bundle $\nu_f$ of the immersion is a rank-$k$ stable normal inverse of $M$. [F1, F2]

2.1 By [F3] applied to the rank-$k$ inverse $\nu_f$, the class $\bar w_i(M)=w_i(\nu_f)$ for the given index $i>k$. But [F4] gives $w_i(\nu_f)=0$ because $\operatorname{rank}\nu_f=k<i$, a contradiction with $\bar w_i(M)\ne0$. Hence no immersion into $\mathbb R^{m+k}$ exists. [F3, F4, step 1.1]

3.1 The final sentence uses $k=i-1$. For $i\ge2$ this satisfies $k\ge1$, so step 2.1 excludes immersion in $\mathbb R^{m+i-1}$. For $i=1$, a nonzero class $\bar w_1(M)$ forces $M$ to be nonempty and $m\ge1$. No nonempty compact positive-dimensional manifold immerses in $\mathbb R^m$: an equal-dimensional immersion is a local diffeomorphism by [F5], so its image is open; the image is also compact by [F6], hence closed in Hausdorff $\mathbb R^m$. Euclidean space is connected because any two points are joined by their straight segment, and it is noncompact for $m\ge1$ because the cover by balls of integer radius has no finite subcover. Thus connectedness of $\mathbb R^m$ makes a nonempty open-and-closed image all of $\mathbb R^m$, contradicting its noncompactness. Thus the codimension-zero instance is excluded too. Negative codimension is impossible because the derivative could not be injective. Consequently every immersion has codimension at least $i$ under the nonzero-class hypothesis. No converse or classification is asserted. [F5, F6, step 2.1, construct] ∎
