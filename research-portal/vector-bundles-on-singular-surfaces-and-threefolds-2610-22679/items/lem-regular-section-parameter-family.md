---
id: lem-regular-section-parameter-family
kind: lemma
title: Finite-dimensional families of generated bundle functionals
status: published
domain: mathematics
deps:
  - lem-surjection-kernel-bundle
  - def-unimodular-sections
dependency_roles:
  lem-surjection-kernel-bundle: mathematical-premise
  def-unimodular-sections: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 2
---

## Statement
Let $k$ be a field, $U$ a $k$-scheme, and $E$ a vector bundle of constant rank $r$ on $U$. Write $E^\vee=\mathcal Hom_{\mathcal O_U}(E,\mathcal O_U)$, and suppose that global sections $\phi_1,\ldots,\phi_m$ generate $E^\vee$, meaning that the morphism $q:\mathcal O_U^m\to E^\vee$ sending the standard basis to these sections is surjective. Here $m$ and $r$ may be zero.

The affine parameter space $\mathbb A_k^m=\operatorname{Spec}k[T_1,\ldots,T_m]$ carries a universal functional $\Phi=\sum_i T_i\phi_i$ on the pullback of $E$ to $U\times_k\mathbb A_k^m$. Its zero-incidence subscheme $I$ is the closed subscheme defined locally by the coefficients of $\Phi$ in a frame of $E^\vee$. For every point $u\in U$, evaluation gives a surjective linear map $\kappa(u)^m\to E^\vee\otimes_{\mathcal O_U}\kappa(u)$, and this remains surjective after any field extension of $\kappa(u)$.

For every closed subscheme $Z\hookrightarrow U$, the incidence subscheme constructed from the restricted sections on $Z$ is canonically $I\times_U Z$, viewed as a closed subscheme of $Z\times_k\mathbb A_k^m$. More generally, for any $k$-scheme $T$ and any $T$-valued parameter $(a_1,\ldots,a_m)$, the pullback of $I$ to $U\times_k T$ is the zero subscheme of the functional $\sum_i a_i\phi_i$.

## Statement references
[[lem-surjection-kernel-bundle]]

[[def-unimodular-sections]]

## Facts & Assumptions
**Given:** The field $k$, the $k$-scheme $U$, the rank-$r$ vector bundle $E$, and the surjective generating map $q$ in the statement.

**Goal:** Construct the universal zero-incidence subscheme, prove fiberwise surjectivity of evaluation, and identify its base changes.

[F1] A vector bundle is a finite locally free module; its dual is the sheaf of homomorphisms to the structure sheaf, and a functional is a section of that dual. [[def-unimodular-sections]]

[F2] A surjective morphism between finite locally free sheaves splits locally. [[lem-surjection-kernel-bundle]]

## Proof
**Proof technique:** Use local frames and the locally split generating map.

1.1 Let $p:U\times_k\mathbb A_k^m\to U$ be the projection. The coordinate functions $T_i$ and the pullbacks $p^*\phi_i$ define a section $\Phi=\sum_i T_i p^*\phi_i$ of $p^*E^\vee$, hence a functional $p^*E\to\mathcal O_{U\times_k\mathbb A_k^m}$. On a trivializing open for $E$, write its coefficients as $f_1,\ldots,f_r$. Define $I$ there by the ideal $(f_1,\ldots,f_r)$. On overlapping trivializations the coefficient columns differ by an invertible matrix, so they generate the same ideal. These ideals glue to a closed subscheme $I$; equivalently, its ideal is the image of the functional $\Phi$. This also covers rank zero, where the ideal is zero. [F1, given, construct]

2.1 By [F2], $q$ has a right inverse locally on $U$. Pulling this local splitting back to the residue field $\kappa(u)$ of any point $u$ gives a right inverse to the evaluation map $\kappa(u)^m\to E^\vee\otimes\kappa(u)$, so that map is surjective. Tensoring the same right inverse with any field extension of $\kappa(u)$ proves the asserted surjectivity over the extension. [F2, given, step 1.1]

2.2 A morphism $T\to\mathbb A_k^m$ is specified by the images $a_i$ of the coordinate functions. Pulling back the local coefficients $f_j$ along $U\times_k T\to U\times_k\mathbb A_k^m$ substitutes $a_i$ for $T_i$; their generated ideal is therefore the image ideal of $\sum_i a_i\phi_i$. The scheme-theoretic inverse image of a closed subscheme is defined by the extended ideal, so this pullback is exactly the stated zero subscheme. [step 1.1, given, algebra]

3.1 For a closed subscheme $Z\hookrightarrow U$, pulling the same coefficient ideals back to $Z\times_k\mathbb A_k^m$ gives the coefficients of the restricted sections of $E^\vee|_Z\cong(E|_Z)^\vee$ in the restricted frames. Thus their incidence subscheme is canonically $I\times_U Z$. Together with steps 1.1 through 2.2 this proves all the assertions. [F1, step 1.1, step 2.1, step 2.2] ∎

## Remarks
This construction alone does not assert smoothness, irreducibility, codimension, or avoidance for any parameter. Generation of $E$ does not by itself supply the assumed generation of $E^\vee$.
