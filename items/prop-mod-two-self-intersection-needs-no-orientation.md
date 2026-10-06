---
id: prop-mod-two-self-intersection-needs-no-orientation
kind: proposition
title: "The mod two self-intersection is the top Stiefel-Whitney evaluation"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [prop-zero-locus-of-a-transverse-oriented-bundle-section-represents-the-euler-dual, lem-normal-thom-class-realizes-the-poincare-dual-of-a-submanifold, lem-normal-bundle-of-the-zero-locus-of-a-transverse-section, lem-pullback-of-the-thom-class-along-a-transverse-section, thm-mod-two-euler-class-is-the-top-stiefel-whitney-class, def-stiefel-whitney-classes-from-the-projective-bundle-relation, prop-first-stiefel-whitney-class-classifies-orientability, thm-naturality-of-stiefel-whitney-classes, thm-whitney-sum-formula-for-stiefel-whitney-classes, def-r-oriented-vector-bundle-and-orientation-local-system, def-mod-two-intersection-number, thm-mod-two-intersection-number-is-homotopy-invariant, def-self-intersection-number-of-an-oriented-submanifold, lem-normal-push-off-zeros-are-self-intersection-points, def-euler-class-by-zero-section-pullback-of-the-thom-class, def-axiom-of-choice, def-fundamental-class-of-a-compact-oriented-manifold, lem-second-countable-smooth-manifolds-have-cw-homotopy-type]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy (author draft bookR4)"
      url: https://math.stanford.edu/~ralph/bookR4.pdf
      locator: "Chapter 8 (Tubular Neighborhoods, more on Transversality, and Intersection Theory) and Chapter 9 (Poincare Duality, Intersection theory, and Linking numbers) Sections 9.1-9.3, printed pp. 249-263, PDF pp. 260-274: Definition 9.3 and Theorems 9.4-9.5 (the intersection product is Poincare dual to the cup product and is represented by transverse intersections), Theorems 9.2 and Corollary 9.3 (the Thom class of a normal bundle is dual to the submanifold), Theorem 9.9, Corollaries 9.10-9.11 and Theorem 9.12 (self-intersection, nowhere-zero sections, Euler characteristic), and the representability remark after Theorem 9.5. The design register cites the earlier bookR3 numbering Sections 8.3-9.3, pp. 244-260; the recovered current draft bookR4 renumbers these sections, so the named results above are the binding locator."
    - title: "John W. Milnor and James D. Stasheff, Characteristic Classes (Princeton University Press, 1974; complete PDF)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "Sec. 9 Oriented Bundles and the Euler Class (printed pp. 95-104); Sec. 10 The Thom Isomorphism Theorem (pp. 105-114); Sec. 11 Computations in a Smooth Manifold (pp. 115-137, the dual-class intersection calculus); Sec. 12 Obstructions (pp. 139-146)."
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall, 1974; complete 236-page PDF)"
      url: https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf
      locator: "Ch. 2 Sec. 4, printed pp. 79-80 (the Mobius central curve and the RP^1 in RP^2 boundary example, mod two); Ch. 3 Sec. 3, printed pp. 107-118 (orientation number, factor order, and the exercise I(Delta,Delta)=chi(M))."
dependency_level: 3
---

## Statement

Assume AC. Let $M$ be a boundaryless smooth $n$-manifold (not assumed orientable) and let $A^a\subseteq M$ be a compact boundaryless embedded submanifold with $2a=n$; write $\nu_A$ for its normal bundle. Then the mod 2 self-intersection $A\cdot_2A\in\mathbb F_2$ of [[def-self-intersection-number-of-an-oriented-submanifold]] is well defined, depends only on $(A,\nu_A)$, and satisfies $$A\cdot_2A=\langle w_a(\nu_A),[A]\rangle_2\in\mathbb F_2,$$ where $w_a(\nu_A)\in H^{a}(A;\mathbb F_2)$ is the top Stiefel-Whitney class of the rank-$a$ normal bundle and $[A]\in H_a(A;\mathbb F_2)$ is the mod 2 fundamental class. More generally, for a smooth real rank-$r$ bundle $E\to S$ over a closed smooth $r$-manifold, and a smooth section $\sigma$ transverse to the zero section, the zero locus $Z$ is finite and $\#Z\equiv\langle w_r(E),[S]\rangle_2\pmod 2$ and $e_2(E)\cap[S]=(i_Z)_*[Z]$ where $e_2$ is the canonical mod 2 Euler class. The integral self-intersection number requires an oriented normal bundle and is not asserted here; this proposition is the mod 2 fallback, not an integral substitute.

## Facts & Assumptions

**Given:** The boundaryless $n$-manifold $M$ (not assumed orientable), the closed embedded $A^a$ with $2a=n$ and its normal bundle $\nu_A$, all taken over $\mathbb F_2$.

[F1] Over $\mathbb F_2$ every real bundle is canonically oriented, so the mod 2 Euler class $e_2(E)$ is defined for every real bundle in the Thom scope, and the mod 2 fundamental class of a closed manifold is the canonical orientation class ([[def-euler-class-by-zero-section-pullback-of-the-thom-class]]).

[F2] The zero-locus duality admits a mod 2 clause with no orientability hypothesis on the ambient: $e_2(E)\cap[M]=(i_Z)_*[Z]$ over $\mathbb F_2$, where the Koszul sign $(-1)^{r(n-r)}$ becomes $1$ in characteristic two ([[prop-zero-locus-of-a-transverse-oriented-bundle-section-represents-the-euler-dual]]).

[F3] The mod 2 Euler class equals the top Stiefel-Whitney class: $e_2(E)=w_r(E)$ for a numerable real rank-$r$ bundle in the Thom scope ([[thm-mod-two-euler-class-is-the-top-stiefel-whitney-class]]).

[F4] The mod 2 intersection number is the parity of the finite transverse count, $I_2(g,Z):=I_2(f,Z)=\#f^{-1}(Z)\bmod 2$, and it is homotopy invariant: $I_2(F_0,Z)=I_2(F_1,Z)$ ([[def-mod-two-intersection-number]], [[thm-mod-two-intersection-number-is-homotopy-invariant]]).

[F5] The mod 2 self-intersection is the parity of a small transverse normal push-off count. The push-off lemma's orientation-free clauses give $A\cap A_s=\varphi(Z(s))$ and transversality at these points; hence each zero contributes $1\in\mathbb F_2$, including rank zero. No integral determinant sign is needed here ([[def-self-intersection-number-of-an-oriented-submanifold]], [[lem-normal-push-off-zeros-are-self-intersection-points]]).

[F6] For every numerable real bundle over an admissible base, $w_1(E)=0$ if and only if $E$ is orientable ([[prop-first-stiefel-whitney-class-classifies-orientability]]).

## Proof

**Proof technique:** repeat the integral argument in $\mathbb F_2$ coefficients, where every bundle is canonically oriented and every manifold has a mod 2 fundamental class, and identify the mod 2 Euler class with the top Stiefel-Whitney class.

1.1 Canonical mod 2 data. By [F1] every real vector bundle carries a canonical $\mathbb F_2$-orientation, so $\nu_A$, $TM$ and the normal Thom class are defined over $\mathbb F_2$, and the mod 2 fundamental class of the closed manifold $A$ is the canonical orientation class of [[def-fundamental-class-of-a-compact-oriented-manifold]] applied to that orientation. [F1, given]

2.1 The zero-locus duality and the push-off count have mod 2 clauses: the $\mathbb F_2$ case of [F2], together with [[lem-normal-bundle-of-the-zero-locus-of-a-transverse-section]] and [F5], gives for a small transverse section $s$ (whose existence is the finite spanning-section construction in [[def-self-intersection-number-of-an-oriented-submanifold]]) of $\nu_A\to A$ that $e_2(\nu_A)\cap[A]=[Z(s)]$ with $Z(s)=A\cap A_s$ under the tube; evaluating on the mod 2 fundamental class gives $A\cdot_2A=\langle e_2(\nu_A),[A]\rangle_2$, and the isotopy argument of [F4] makes the count independent of the push-off. [F2, F4, F5, step 1.1]

3.1 Identify the classes: [F3] states $e_2(E)=w_r(E)$ for every numerable real rank-$r$ bundle in the Thom scope, and a closed smooth manifold is such a base and its smooth bundles are numerable by [[lem-second-countable-smooth-manifolds-have-cw-homotopy-type]]. Substituting into step 2.1 gives the displayed formula $A\cdot_2A=\langle w_a(\nu_A),[A]\rangle_2$, and the general bundle clause $\#Z\equiv\langle w_r(E),[S]\rangle_2\pmod 2$ with $e_2(E)\cap[S]=(i_Z)_*[Z]$ follows from the same proposition. When $\nu_A$ is nonorientable, [F6] shows that $w_1(\nu_A)\neq0$ obstructs an integral orientation, and no integral claim is made here. The mod 2 statement is the fallback, not an integral substitute. [F2, F3, F6, step 2.1] ∎

## Remarks

For oriented $A$ in oriented $M$, the integral counterpart is [[thm-self-intersection-is-the-euler-number-of-the-normal-bundle]]. The mod two proof above uses the zero-locus supplier directly and does not require that integral counterpart.
