---
id: "def-weyl-discriminant-and-reflecting-hyperplane-arrangement"
kind: "definition"
title: "Weyl discriminant and reflecting hyperplane arrangement"
deps: ["def-finite-weyl-root-system-lattice-and-chamber-conventions", "lem-finite-weyl-positive-roots-and-simple-reflections", "lem-finite-weyl-closed-chambers-and-stabilizers", "def-finite-linear-invariant-and-coinvariant-polynomial-algebras"]
provenance:
  statement: "ai-altered"
  proof: "ai-generated"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Pavel Etingof, Lie Groups and Lie Algebras, \u00a7\u00a721\u201322; local sign-change proofs fill the chamber argument"
      url: "https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Definition

Use the finite root system, $W$ and $\Phi^+$ of [[def-finite-weyl-root-system-lattice-and-chamber-conventions]], complexify to $V=E\otimes_{\mathbb R}\mathbb C$, and write $S=\mathbb C[V]$ with the action $(w\cdot p)(v)=p(w^{-1}v)$ of [[def-finite-linear-invariant-and-coinvariant-polynomial-algebras]]. For each root let $\ell_\alpha(v)=(\alpha,v)$, extending the Euclidean form complex bilinearly. The **reflecting arrangement** is the collection of distinct hyperplanes $\ker\ell_\alpha$ for $\alpha\in\Phi^+$. The **Weyl discriminant** is
$$\Delta=\prod_{\alpha\in\Phi^+}\ell_\alpha\in S.$$
Reducedness makes these factors pairwise nonproportional, so its degree is the number of these hyperplanes. In rank zero the product is $1$ and the arrangement is empty. The following argument verifies that these are exactly the reflection hyperplanes of $W$, and that $w\cdot\Delta=\det(w)\Delta$.

## Facts & Assumptions

**Given:** The root-system and polynomial conventions in the Definition.

[F1] Simple reflections generate $W$ and permute all positive roots except their own, by [[lem-finite-weyl-positive-roots-and-simple-reflections]].

[F2] A regular point has trivial stabilizer by [[lem-finite-weyl-closed-chambers-and-stabilizers]]: move it into the open chamber and use its zero-label stabilizer assertion.

## Proof

1.1 Two nonzero root forms have the same complex kernel only if they are proportional. Restricting to real vectors makes the proportionality scalar real; reducedness then makes their roots equal up to sign, and positivity selects the same root. Every root reflection fixes its corresponding real hyperplane and its complexification. Conversely let $w\in W$ be a complex reflection, meaning $w\ne1$ and its fixed complex subspace has codimension one. Since its matrix is real, its real fixed subspace has real codimension one too. Orthogonality forces $w$ to be the unique orthogonal reflection in that hyperplane $H$. If $H$ were different from every real root hyperplane, their intersections with $H$ would be finitely many proper subspaces of $H$. They cannot cover $H$: in a finite basis of $H$, substitute $(1,z,\ldots,z^{\dim H-1})$ in each of the nonzero restricted forms, and choose a real value outside the finite set of roots of those polynomials. In dimension zero, the assertion that $H$ differs from every root hyperplane can occur only if there are no roots in a positive-dimensional spanning root system, which is excluded. Thus $H$ would contain a regular point fixed by $w$, contrary to F2. Hence $H$ is a root hyperplane. [F2, given, algebra]

2.1 Orthogonality gives $w\cdot\ell_\alpha=\ell_{w\alpha}$. By F1, applying $s_i$ to the product defining $\Delta$ permutes every factor except $\ell_{\alpha_i}$, which changes sign. Thus $s_i\cdot\Delta=-\Delta=\det(s_i)\Delta$. Multiplication of these identities along any simple-reflection word yields $w\cdot\Delta=\det(w)\Delta$ for all $w$. No choice of a word for each group element is needed; the identity holds for every word. The polynomial is nonzero since its factors are nonzero in a polynomial ring over a field, as also follows by multiplying leading monomials in any fixed monomial order. Rank zero gives the same identity for the unit. [F1, given, algebra] ∎
