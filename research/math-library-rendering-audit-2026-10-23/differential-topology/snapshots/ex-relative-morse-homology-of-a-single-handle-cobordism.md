---
id: ex-relative-morse-homology-of-a-single-handle-cobordism
kind: example
title: "Relative Morse homology of a single-handle cobordism"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [prop-relative-morse-complex-for-an-adapted-cobordism, def-smooth-cobordism-triad-for-morse-theory, def-morse-function-adapted-to-a-cobordism, def-handle-decomposition-relative-to-the-incoming-boundary, thm-one-critical-point-handle-attachment, cor-relative-homology-of-a-single-handle-pair, def-nondegenerate-critical-point-nullity-index-and-coindex, def-relative-singular-homology, def-axiom-of-choice, lem-relative-homology-of-the-standard-handle-pair]
justified_by: []
dependency_level: 9
proof_strategy: direct
sources:
  references:
    - title: "Liviu I. Nicolaescu, An Invitation to Morse Theory, 2nd ed. (complete author PDF, 291 pp.)"
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
      locator: "Sec. 2.1 (handle attachment and the disk-boundary model with a single critical point of index lambda) and Sec. 2.3, printed pp. 27-33 and 46-53, PDF pp. 37-43 and 56-63"
    - title: "Alexander F. Ritter, Part III Morse Homology (Cambridge lecture notes, complete author PDF, 115 pp.)"
      url: "https://people.maths.ox.ac.uk/ritter/morse-cambridge/combined.pdf"
      locator: "Lecture 19, Sec. 6.2 and the closing examples: the disk D^m with one interior critical point computes H_*(D^m, partial D^m), PDF pp. 88-90"
verification:
  precheck: pass
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $0\le k\le n$
and let $(W;M_0,M_1)$ be a compact smooth cobordism obtained from a collar
of $M_0$ by attaching one index-$k$ handle, with corners rounded. Fix adapted
Morse--Smale data having exactly one interior critical point, of index $k$
([[def-smooth-cobordism-triad-for-morse-theory]],
[[def-morse-function-adapted-to-a-cobordism]],
[[def-handle-decomposition-relative-to-the-incoming-boundary]],
[[def-nondegenerate-critical-point-nullity-index-and-coindex]]).
The two boundary faces of this cobordism are disjoint closed manifolds.
The handle attachment pair is
$(D^k\times D^{n-k},S^{k-1}\times D^{n-k})$; its attaching and belt regions
meet at a corner when $0<k<n$, so they are not themselves the two faces of
a cobordism triad.

Then the relative Morse complex of
[[prop-relative-morse-complex-for-an-adapted-cobordism]] has exactly one
generator, in degree $k$, and no differential, so
$$HM_i(W,M_0;\Lambda)=\begin{cases}\Lambda,&i=k,\\0,&i\ne k,\end{cases}$$
recovering the single relative generator of the handle pair
([[thm-one-critical-point-handle-attachment]],
[[cor-relative-homology-of-a-single-handle-pair]]) and matching
$H_*(W,M_0;\Lambda)\cong H_*(D^k,S^{k-1};\Lambda)$ as groups
([[def-relative-singular-homology]]).

## Facts & Assumptions

**Given:** The Axiom of Choice, $0\le k\le n$, and the smooth single-handle cobordism with the adapted Morse--Smale data just specified.

[F1] By the hypothesis, the adapted Morse function has exactly one interior critical point of index $k$. The single rounded handle is its handle model ([[thm-one-critical-point-handle-attachment]], [[def-morse-function-adapted-to-a-cobordism]], [[def-smooth-cobordism-triad-for-morse-theory]]).

[F2] The relative Morse chain groups are free on the interior critical points, and the differential counts trajectories between points of adjacent index ([[prop-relative-morse-complex-for-an-adapted-cobordism]], part 2). With one critical point the formula defines a chain complex directly; no general cellular comparison is needed for its homology computation.

[F3] Collar excision identifies the relative homology of the single-handle cobordism with the standard handle-pair homology, which is $\Lambda$ in degree $k$ and zero otherwise ([[cor-relative-homology-of-a-single-handle-pair]], [[lem-relative-homology-of-the-standard-handle-pair]], [[def-relative-singular-homology]]).

## Verification

**Proof technique:** direct.

1.1 By [F1] the only critical point of the adapted function is the interior point of index $k$; hence the relative Morse chain groups of [F2] are $\Lambda$ in degree $k$ and zero in every other degree, since they are free on the interior critical points. [F1, F2, given]

2.1 The only differential that could be nonzero is $\partial_k:CM_k\to CM_{k-1}$, whose target is the group of the critical points of index $k-1$; there are none, so $\partial_k=0$, and all other differentials have zero source or target. Therefore the relative Morse complex is $\Lambda$ concentrated in degree $k$. [F2, step 1.1]

3.1 The homology of that complex is $\Lambda$ in degree $k$ and zero otherwise, which is the displayed formula for $HM_i(W,M_0;\Lambda)$. [step 2.1]

4.1 By [F3] the handle pair has the relative homology of $(D^k,S^{k-1})$, again $\Lambda$ in degree $k$ and zero otherwise; the two computations agree, and the single relative generator is the one recorded by the handle attachment. [F2, F3, step 3.1] ∎
