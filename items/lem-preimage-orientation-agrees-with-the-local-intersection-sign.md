---
id: lem-preimage-orientation-agrees-with-the-local-intersection-sign
kind: lemma
title: "Preimage orientation agrees with the local intersection sign"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-local-oriented-intersection-sign, def-transverse-complementary-dimensional-intersection-set, def-local-orientation-sign-of-a-regular-preimage, def-determinant-line-orientation-of-a-finite-dimensional-real-vector-space, def-product-orientation, def-transverse-linear-subspaces, thm-transverse-preimage-theorem, thm-transverse-preimage-for-manifolds-with-boundary]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall, 1974; complete 236-page PDF)"
      url: https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf
      locator: "Ch. 3 §3, printed pp. 107–108 (the preimage orientation and its agreement with the direct-sum criterion, “in that order”)"
    - title: "John Milnor, Topology from the Differentiable Viewpoint (Princeton University Press; complete 76-page PDF, including the appendix Classifying 1-manifolds)"
      url: https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf
      locator: "§5, printed pp. 27–29 (the sign of $df_x$ at a regular preimage)"
---

## Statement

Let $f:Y\to M$ be transverse to a closed oriented embedded submanifold $Z$, with $Y,M$ oriented, $M$ boundaryless, and, if $Y$ has boundary, $f|_{\partial Y}$ transverse to $Z$. Orient $Q_y=T_{f(y)}M/T_{f(y)}Z$ by the **normal-first** determinant isomorphism $\det Q_y\otimes\det T_{f(y)}Z\cong\det T_{f(y)}M$: quotient lifts precede the tangent determinant of $Z$. Orient $K_y=T_yf^{-1}(Z)$ by the **kernel-first** exact-sequence convention
$$\det T_yY\cong\det K_y\otimes\det Q_y,$$
where $df$ induces the quotient map. In complementary dimensions $\dim Y+\dim Z=\dim M$, the resulting point sign is the local oriented intersection sign. If $Z=\{z\}$ has positive point orientation, this sign is $\operatorname{sgn}(df_y)$; reversing that point orientation reverses the intersection sign.

## Facts & Assumptions

**Given:** Oriented $Y,M,Z$, a transverse $f:Y\to M$, and $y\in f^{-1}(Z)$.

[F1] The transverse preimage tangent is $K_y=\{v:df_y(v)\in T_{f(y)}Z\}$; thus $0\to K_y\to T_yY\to Q_y\to0$ is exact ([[thm-transverse-preimage-theorem]], and [[thm-transverse-preimage-for-manifolds-with-boundary]] for a boundary source).

[F2] Orientation rays and ordered product determinants are the conventions of [[def-determinant-line-orientation-of-a-finite-dimensional-real-vector-space]] and [[def-product-orientation]].

[F3] In complementary dimensions the local sign compares $(df_y,di):T_yY\oplus T_{f(y)}Z\to T_{f(y)}M$ with its given orientations ([[def-local-oriented-intersection-sign]]).

[F4] The local sign of an equidimensional regular preimage compares the supplied source and target determinant rays, including point signs in dimension zero ([[def-local-orientation-sign-of-a-regular-preimage]]).

## Proof

1.1 For the normal-first isomorphism, wedge lifts of a quotient determinant before a tangent determinant of $Z$. Replacing a lift by a tangent vector changes the wedge by zero, so this is independent of lifts. Similarly wedging a kernel determinant before lifts of a quotient determinant defines the kernel-first exact-sequence isomorphism in the statement; it is independent of lifts and smooth in local adapted frames. The given rays therefore determine a unique smooth orientation of $K$. [F1, F2, given, construct]

2.1 In complementary dimensions $K_y=0$. Take positive determinant elements $u$ of $T_yY$ and $w$ of $T_{f(y)}Z$. The sign $\varepsilon$ of $(df_yu)\wedge w$ relative to the ambient ray is exactly the local intersection sign. By the normal-first convention, $\overline{df}_y(u)$ has sign $\varepsilon$ relative to the quotient ray. In $\det T_yY=\det K_y\otimes\det Q_y$, the chosen scalar ray of $\det K_y=\mathbb R$ must therefore have sign $\varepsilon$ too, so that the product ray is the given source ray. This is precisely the point orientation of the fibre. [F1, F2, F3, step 1.1, algebra]

3.1 For a positively oriented point $Z$, the normal-first quotient ray is the ambient ray, so 2.1 gives $\operatorname{sgn}(df_y)$ by [F4]. A negatively oriented point changes that quotient ray and hence the fibre sign. All computations use determinant elements rather than positive empty bases and therefore include dimension zero; no choice principle is needed. [F2, F4, step 2.1, algebra] ∎
