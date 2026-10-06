---
id: ex-parallelizable-tori-have-trivial-stable-normal-class
kind: example
title: "Parallelizable tori have trivial stable normal class"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: ["prop-parallelizable-manifolds-have-no-stable-characteristic-class-obstruction-to-euclidean-immersion", "def-two-dimensional-torus", "def-torus-and-maximal-torus-in-a-compact-lie-group", "thm-left-invariant-vector-fields-evaluate-isomorphically-at-the-identity", "def-local-frame-and-global-frame-of-a-vector-bundle", "cor-a-vector-bundle-is-trivial-if-and-only-if-it-has-a-global-frame", "def-countable-choice", "thm-choice-implies-dependent-implies-countable-choice", "def-axiom-of-choice", prop-a-nowhere-zero-section-forces-the-euler-class-to-vanish]
justified_by: []
dependency_level: 14
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
    - title: "John W. Milnor and James D. Stasheff, Characteristic Classes (Annals of Mathematics Studies 74, Princeton University Press; complete text)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "SS4, printed pp. 43-48 (Lemma 4.4, Theorem 4.5, Corollary 4.6, the immersion paragraph, Theorem 4.8); SS11, printed pp. 119-136 (Theorem 11.3, Corollary 11.12, Wu's formula and Corollary 11.15); SS15, printed pp. 173-178 (Theorem 15.3, Corollary 15.5, Corollary 15.8)"
    - title: "Ralph L. Cohen, Immersions of Manifolds and Homotopy Theory (lecture notes, 30 June 2022; complete 46-page text)"
      url: "https://math.stanford.edu/~ralph/immersions-final.pdf"
      locator: "SS1-3.1, PDF pp. 4-13: Proposition 1, Theorem 2 (Hirsch-Smale), Corollary 3 (k-dimensional inverse of the tangent bundle), Theorems 4-5, Corollary 10 (normal Stiefel-Whitney nonimmersion test) and the RP^{2^k} example, Theorem 11 (Massey)"
    - title: "Arkadiy Skopenkov, Embedding and Knotting of Manifolds in Euclidean Spaces (arXiv:math/0604045)"
      url: "https://arxiv.org/pdf/math/0604045"
      locator: "SS1-2, article pp. 1-13; the subsection 'The Whitney obstruction' on article pp. 11-12 (modulo 2 and integral Whitney obstructions, normal Stiefel-Whitney classes, Pontryagin classes p_i as embedding obstructions), and the knotting boundary in SS2-3 and SS5"
---

## Example

Assume AC. For $n\ge1$ the torus $T^n=\mathbb R^n/\mathbb Z^n$ has trivial tangent bundle: left translations trivialize it, and the images of a basis of $T_eT^n$ under the left-invariant framing form a global frame ([[thm-left-invariant-vector-fields-evaluate-isomorphically-at-the-identity]], [[def-local-frame-and-global-frame-of-a-vector-bundle]], [[cor-a-vector-bundle-is-trivial-if-and-only-if-it-has-a-global-frame]]; for $n=2$ see the two-dimensional torus [[def-two-dimensional-torus]]). Hence $\bar w(T^n)=1$ and $\bar p(T^n)=1$ ([[prop-parallelizable-manifolds-have-no-stable-characteristic-class-obstruction-to-euclidean-immersion]]): no Stiefel-Whitney or Pontryagin class test of this page obstructs an immersion of a torus into Euclidean space, and indeed $T^n$ immerses in $\mathbb R^{n+1}$ and hence in every $\mathbb R^{n+k}$ with $k\ge1$. The example says nothing about embeddability: it exhibits a Euclidean formal immersion with trivial normal class, not an embedding theorem.

## Facts & Assumptions

**Given:** An integer $n\ge1$, the torus $T^n=\mathbb R^n/\mathbb Z^n$ as the product of $n$ copies of the circle group $\mathbb R/\mathbb Z$ (a compact connected abelian Lie group), and AC.

[F1] The product of $n$ copies of the circle group is a compact connected abelian Lie group of dimension $n$, hence a torus in the sense of the Lie-group definition; for $n=2$ this is the two-dimensional torus $T^2=(\mathbb R/\mathbb Z)^2$ ([[def-torus-and-maximal-torus-in-a-compact-lie-group]], [[def-two-dimensional-torus]]).

[F2] Left-invariant vector fields on a Lie group evaluate isomorphically at the identity; equivalently the map carrying a vector $v\in T_eG$ to the left-invariant field with that value is an isomorphism onto the space of left-invariant fields ([[thm-left-invariant-vector-fields-evaluate-isomorphically-at-the-identity]]).

[F3] A global frame of a smooth rank-$r$ bundle trivializes it: a bundle is trivial if and only if it has a global frame, and the frame determines the trivialization ([[def-local-frame-and-global-frame-of-a-vector-bundle]], [[cor-a-vector-bundle-is-trivial-if-and-only-if-it-has-a-global-frame]]).

[F4] For a closed smooth $M$ with trivial tangent bundle, the trivial bundle is a rank-$k$ stable normal inverse for every $k\ge1$, $M$ immerses in $\mathbb R^{m+k}$, and the normal classes vanish: $\bar w(M)=1$ and $\bar p(M)=1$ ([[prop-parallelizable-manifolds-have-no-stable-characteristic-class-obstruction-to-euclidean-immersion]]). The relevant countable choice is implied by AC ([[thm-choice-implies-dependent-implies-countable-choice]], [[def-countable-choice]], [[def-axiom-of-choice]]).

[F5] A trivial positive-rank bundle has a nowhere-zero constant section, so its Euler class vanishes ([[prop-a-nowhere-zero-section-forces-the-euler-class-to-vanish]]).

## Verification

**Proof technique:** direct.

1.1 By [F1] the torus $T^n$ is a compact connected abelian Lie group of dimension $n$. Choose a basis $v_1,\dots,v_n$ of the tangent space $T_eT^n$ at the identity; by [F2] the corresponding left-invariant vector fields $X_1,\dots,X_n$ are smooth global sections of $TT^n$ whose values at $e$ form a basis, and left invariance carries this basis to a basis of every tangent space $T_gT^n$ (translation by $g$ is a diffeomorphism and identifies $T_eT^n$ with $T_gT^n$). Hence $(X_1,\dots,X_n)$ is a global frame of $TT^n$, smooth by [F2]. [F1, F2]

2.1 By [F3] the existence of the global frame of step 1.1 makes $TT^n$ trivial: $TT^n\cong\varepsilon^n$ over $T^n$, with the trivialization determined by the frame. [F2, F3, step 1.1]

3.1 By [F4] applied to the closed manifold $T^n$ with trivial tangent bundle, the trivial bundle is a rank-$k$ stable normal inverse of $T^n$ for every $k\ge1$; consequently $T^n$ immerses in $\mathbb R^{n+k}$ for every $k\ge1$, in particular in $\mathbb R^{n+1}$, and its normal classes are trivial: $$\bar w(T^n)=w(TT^n)^{-1}=1^{-1}=1,\qquad \bar p(T^n)=p(TT^n)^{-1}=1^{-1}=1.$$ [F4, step 2.1]

4.1 Therefore no Stiefel-Whitney or Pontryagin class test of this page obstructs a Euclidean immersion of $T^n$: every class $\bar w_i(T^n)$, $\bar p_i(T^n)$ with $i\ge1$ vanishes, and the Euler class of the trivial normal bundle vanishes as well. The example exhibits a Euclidean formal immersion with trivial normal class and says nothing about embeddability of tori; in particular it does not assert that $T^n$ embeds in $\mathbb R^{n+1}$ or in any other specific Euclidean space, nor does it identify a minimal immersion dimension below $n+1$. The only choice used is the AC assumed by the parallelizable-manifold proposition and its countable-choice input. [F4, F5, step 2.1, step 3.1] ∎
