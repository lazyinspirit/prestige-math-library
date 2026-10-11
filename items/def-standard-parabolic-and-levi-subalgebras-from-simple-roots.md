---
id: def-standard-parabolic-and-levi-subalgebras-from-simple-roots
kind: definition
title: "Standard parabolic and Levi subalgebras from a subset of simple roots"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 0
deps: [def-positive-system-and-base-of-simple-roots,
       def-reduced-crystallographic-euclidean-root-system,
       thm-the-root-set-is-a-reduced-crystallographic-root-system,
       thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates,
       def-positive-and-negative-nilpotent-subalgebras-and-borel-subalgebra,
       def-levi-subalgebra-and-levi-decomposition,
       def-radical-of-a-finite-dimensional-lie-algebra,
       def-simple-semisimple-and-reductive-lie-algebras,
       def-nilradical-of-a-finite-dimensional-lie-algebra,
       def-weyl-group-of-a-root-system,
       def-cg-parabolic-quotient-and-two-sided-minima,
       thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra,
       thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional,
       thm-root-sl-two-triple, prop-finite-type-cartan-matrix-properties,
       thm-cartans-semisimplicity-criterion,
       prop-killing-form-is-invariant-and-nondegenerate-on-a-complex-semisimple-lie-algebra,
       prop-brackets-of-root-spaces,
       thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra,
       def-axiom-of-choice, def-coroot-of-a-lie-algebra-root,
       def-killing-dual-vector-of-a-root,
       prop-killing-form-orthogonality-of-root-spaces,
       prop-trace-forms-are-symmetric-and-invariant,
       prop-bracket-of-opposite-root-spaces-is-the-root-line-in-the-cartan-subalgebra]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "James E. Humphreys, Representations of Semisimple Lie Algebras in the BGG Category O, AMS Graduate Studies in Mathematics 94"
      url: null
      locator: "Section 0.3 and 9.1: standard parabolic subalgebras and their Levi decompositions; the conventions are reproduced from the fetched treatments."
    - title: "Volodymyr Mazorchuk and Catharina Stroppel, Translation and shuffling of projectively presentable modules and a categorification of a parabolic Hecke module, Trans. Amer. Math. Soc. 357 (2005) 2939-2973 (author-hosted published version)"
      url: "http://www.math.uni-bonn.de/people/stroppel/Shuffling.pdf"
      locator: "Section 2.2 (printed pp. 2941-2942): the fixed triangular decomposition of a complex semisimple Lie algebra and its category O conventions. This passage supplies background conventions; the parabolic and Levi structural assertions are proved locally below."
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]), inherited from the
published root-space and $\mathfrak{sl}_2$ suppliers. Let $\mathfrak g$ be a
finite-dimensional complex semisimple Lie algebra with Cartan subalgebra
$\mathfrak h$, root system $\Phi$
([[thm-the-root-set-is-a-reduced-crystallographic-root-system]],
[[thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra]],
[[thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional]]),
positive system $\Phi^+$ with base of simple roots
$\Delta=\{\alpha_1,\dots,\alpha_r\}$
([[def-positive-system-and-base-of-simple-roots]],
[[def-reduced-crystallographic-euclidean-root-system]]), and let $J$ be a
subset of the simple indices $\{1,\dots,r\}$. Write $\Phi_J$ for the root
subsystem spanned by the simple roots indexed by $J$,
$$\Phi_J=\Phi\cap\operatorname{span}_{\mathbb R}\{\alpha_j:j\in J\},$$
and let $H_j=h_{\alpha_j}\in\mathfrak h$ be the coroot of $\alpha_j$
([[def-coroot-of-a-lie-algebra-root]] via
[[def-killing-dual-vector-of-a-root]]). Put
$$\mathfrak h_J=\operatorname{span}_{\mathbb C}\{H_j:j\in J\},\qquad \mathfrak z_J=\{h\in\mathfrak h:\alpha_j(h)=0\text{ for all }j\in J\},$$
and define the following subspaces of $\mathfrak g$, where $\mathfrak g_\alpha$
is the root space of $\alpha$
([[thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra]]):

$$\mathfrak s_J=\mathfrak h_J\oplus\bigoplus_{\alpha\in\Phi_J}\mathfrak g_\alpha,\qquad \mathfrak l_J=\mathfrak s_J\oplus\mathfrak z_J=\mathfrak h\oplus\bigoplus_{\alpha\in\Phi_J}\mathfrak g_\alpha,$$
$$\mathfrak u_J=\bigoplus_{\beta\in\Phi^+\smallsetminus\Phi_J^+}\mathfrak g_\beta,\qquad \mathfrak v_J=\bigoplus_{\beta\in\Phi^-\smallsetminus\Phi_J^-}\mathfrak g_\beta,\qquad \mathfrak p_J=\mathfrak l_J\oplus\mathfrak u_J .$$

Here $\Phi_J^\pm=\Phi_J\cap\Phi^\pm$ and $\Phi^\pm$ are the positive and
negative roots with $\mathfrak n^\pm$, $\mathfrak b$ as in
[[def-positive-and-negative-nilpotent-subalgebras-and-borel-subalgebra]]. The
construction depends only on the positive system and on $J$. The following
structural facts are part of the definition (proofs and references in the
Remarks; $\operatorname{rad}$ and $\operatorname{nilrad}$ are those of
[[def-radical-of-a-finite-dimensional-lie-algebra]] and
[[def-nilradical-of-a-finite-dimensional-lie-algebra]]).

**(1) Decomposition of the Cartan.** $\mathfrak h=\mathfrak h_J\oplus\mathfrak z_J$
and $\dim\mathfrak h_J=|J|$, so $\dim\mathfrak z_J=r-|J|$.

**(2) The semisimple part.** $\mathfrak s_J$ is a Lie subalgebra of
$\mathfrak g$; it is semisimple, and its root system with respect to the
Cartan subalgebra $\mathfrak h_J$ is $\Phi_J$, with positive system
$\Phi_J^+$ and Weyl group $W_J=\langle s_j:j\in J\rangle\le W$
([[def-weyl-group-of-a-root-system]],
[[def-cg-parabolic-quotient-and-two-sided-minima]]).

**(3) The reductive Levi algebra.** $\mathfrak l_J$ is a Lie subalgebra with
root system $\Phi_J$ relative to $\mathfrak h$; it is reductive as in
[[def-simple-semisimple-and-reductive-lie-algebras]], with center
$\mathfrak z_J$ and derived algebra $[\mathfrak l_J,\mathfrak l_J]=\mathfrak s_J$;
$\mathfrak h$ is a Cartan subalgebra of $\mathfrak l_J$ and the Weyl group of
$(\mathfrak l_J,\mathfrak h)$ is $W_J$. The algebra $\mathfrak l_J$ need not
be semisimple: its center $\mathfrak z_J$ is nonzero as soon as $J\ne\{1,\dots,r\}$.

**(4) Parabolic and radicals.** $\mathfrak l_J$, $\mathfrak u_J$, $\mathfrak v_J$
and $\mathfrak p_J$ are Lie subalgebras
([[prop-brackets-of-root-spaces]]); $\mathfrak u_J$ is an ideal of
$\mathfrak p_J$, $\mathfrak l_J$ stabilizes $\mathfrak u_J$ and $\mathfrak v_J$,
and $\mathfrak p_J=\mathfrak l_J\ltimes\mathfrak u_J$ is a semidirect product
([[def-levi-subalgebra-and-levi-decomposition]]). Moreover
$\operatorname{nilrad}(\mathfrak p_J)=\mathfrak u_J$ and
$$\operatorname{rad}(\mathfrak p_J)=\mathfrak z_J\oplus\mathfrak u_J .$$
Consequently $[\mathfrak p_J,\mathfrak p_J]=\mathfrak s_J\oplus\mathfrak u_J$
and the quotient $\mathfrak p_J/\operatorname{rad}(\mathfrak p_J)\cong\mathfrak s_J$
is semisimple: in the sense of
[[def-levi-subalgebra-and-levi-decomposition]], $\mathfrak s_J$ is a semisimple
Levi factor of $\mathfrak p_J$ and $\mathfrak l_J$ is the reductive complement
to the nilradical. The parabolic $\mathfrak p_J$ contains $\mathfrak b$ and
$\mathfrak p_J=\mathfrak b\oplus\bigoplus_{\alpha\in\Phi_J^-}\mathfrak g_\alpha$,
the span of the negative root spaces of $\Phi_J$; for $J=\varnothing$ one has
$\mathfrak p_J=\mathfrak b$, and for $J=\{1,\dots,r\}$ one has
$\mathfrak l_J=\mathfrak s_J=\mathfrak g$ and
$\mathfrak u_J=\mathfrak v_J=0$.

**(5) The positive grading.** There exists $\zeta\in\mathfrak z_J$ with
$\alpha_j(\zeta)=0$ for $j\in J$ and $\alpha_i(\zeta)=1$ for $i\notin J$. With
respect to $\operatorname{ad}(\zeta)$ every root space $\mathfrak g_\beta$ has
weight $\beta(\zeta)$, so:

* $\mathfrak l_J$ has degree $0$ (all of $\Phi_J$ vanishes on $\zeta$);
* $\mathfrak u_J$ has strictly positive integral degrees
  $\beta(\zeta)\in\mathbb Z_{>0}$;
* $\mathfrak v_J$ has strictly negative integral degrees.

In particular $\mathfrak u_J$ is nilpotent by this positive grading, and both
$\mathfrak u_J$ and $\mathfrak v_J$ have finite-dimensional fixed-degree
slices of their PBW algebras:
$\dim U(\mathfrak u_J)_d<\infty$ and $\dim U(\mathfrak v_J)_d<\infty$ for
every $d\in\mathbb Z$ ([[thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra]]).

## Remarks

- **The Cartan splitting (1).** The pairing matrix
  $A=\bigl(\alpha_i(H_j)\bigr)_{i,j\in J}$ is the principal submatrix of the
  Cartan matrix of $(\Phi,\Delta)$ with respect to the base
  $\{\alpha_j:j\in J\}$ of $\Phi_J$
  ([[thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]]).
  By [[prop-finite-type-cartan-matrix-properties]] (4) the symmetrization
  $DAD^{-1}$ is positive definite, so $A$ is nonsingular. Hence if
  $h=\sum_jc_jH_j$ satisfies $\alpha_i(h)=0$ for all $i\in J$, then
  $Ac=0$ and $c=0$; so $\mathfrak h_J\cap\mathfrak z_J=0$ and
  $\dim\mathfrak h_J=|J|$. Counting dimensions gives
  $\mathfrak h=\mathfrak h_J\oplus\mathfrak z_J$ and $\dim\mathfrak z_J=r-|J|$.
- **Semisimplicity of $\mathfrak s_J$ (2).** The Killing-dual map is
  linear, so $\alpha=\sum_{j\in J}m_j\alpha_j$ gives
  $H_\alpha=\sum_{j\in J}m_jH_{\alpha_j}\in\mathfrak h_J$
  ([[def-killing-dual-vector-of-a-root]], [[def-coroot-of-a-lie-algebra-root]]).
  Opposite-root brackets therefore lie in $\mathfrak h_J$, and root
  brackets give subalgebra closure. Use its intrinsic Killing form
  $\kappa$, which need not equal the ambient Killing restriction. Its
  root-space decomposition gives
  $\kappa(h,h')=\sum_{\alpha\in\Phi_J}\alpha(h)\alpha(h')$ on
  $\mathfrak h_J$. On the real coroot span this is positive definite:
  the simple-root pairing matrix is nonsingular by (1), and the sum of
  squares vanishes only when every simple-root value is zero. Thus its
  complexification is nondegenerate there. Trace-form invariance
  ([[prop-trace-forms-are-symmetric-and-invariant]]) gives orthogonality
  of weights whose sum is nonzero: applying a Cartan element gives
  $(\alpha+\beta)(h)\kappa(x_\alpha,x_\beta)=0$. For a normalized
  $\mathfrak{sl}_2$ triple $e_\alpha,f_\alpha,h_\alpha$
  ([[thm-root-sl-two-triple]]), invariance gives
  $\kappa(h_\alpha,h_\alpha)=2\kappa(e_\alpha,f_\alpha)\ne0$.
  One-dimensionality of the root spaces makes each opposite pair
  nondegenerate. Hence $\kappa$ is nondegenerate on $\mathfrak s_J$, and
  [[thm-cartans-semisimplicity-criterion]] proves semisimplicity. Every
  root restricts nontrivially to $\mathfrak h_J$, since it vanishes on
  $\mathfrak z_J$ and $\mathfrak h=\mathfrak h_J\oplus\mathfrak z_J$.
  The weight decomposition then shows that the centralizer and normalizer
  of $\mathfrak h_J$ in $\mathfrak s_J$ are both $\mathfrak h_J$; thus
  it is a Cartan subalgebra. Restriction identifies its roots with
  $\Phi_J$ and its simple reflections with $s_j$, $j\in J$, extended
  by the identity on $\mathfrak z_J$.
- **Reductive $\mathfrak l_J$ (3).** Since $\mathfrak z_J$ centralizes
  $\mathfrak h_J$ and each root space of $\Phi_J$ ($\alpha_j(h)=0$ for
  $h\in\mathfrak z_J$), it commutes with $\mathfrak s_J$, so
  $\mathfrak l_J=\mathfrak z_J\oplus\mathfrak s_J$ is a Lie subalgebra with
  central summand; $[\mathfrak l_J,\mathfrak l_J]=\mathfrak s_J$ because every root vector is a bracket with a Cartan element,
  and the simple coroots spanning $\mathfrak h_J$ are the brackets
  $[e_j,f_j]$. The center contributes nothing. Its center is $\mathfrak z_J$ together with the center of
  $\mathfrak s_J$, which is zero, and the displayed sum is direct. Hence
  $\mathfrak l_J$ is reductive in the sense of
  [[def-simple-semisimple-and-reductive-lie-algebras]], with root system
  $\Phi_J$ relative to $\mathfrak h$ and Weyl group $W_J$. For $J\ne$ all
  indices, $\mathfrak z_J\ne0$ by (1), so $\mathfrak l_J$ is not semisimple.
- **Brackets, ideals and grading (4)-(5).** For roots
  $\alpha,\beta\in\Phi_J$ (i.e. sums of simple roots in $J$) one has
  $\alpha+\beta\in\Phi_J$ whenever the sum is a root; if the sum
  is neither a root nor zero, the bracket is zero. This gives
  the bracket closure for $\mathfrak l_J$; the mixed brackets with
  $\mathfrak u_J$ likewise stay in
  $\mathfrak u_J\cup\mathfrak l_J\cup\{0\}$ by
  [[prop-brackets-of-root-spaces]] and the signs of the simple-root
  coefficients ([[thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]]),
  so $\mathfrak u_J$ is an ideal of $\mathfrak p_J$ and $\mathfrak l_J$
  preserves $\mathfrak u_J$ and $\mathfrak v_J$; this gives the semidirect
  product $\mathfrak p_J=\mathfrak l_J\ltimes\mathfrak u_J$, and
  $\mathfrak p_J=\mathfrak b\oplus\bigoplus_{\alpha\in\Phi_J^-}\mathfrak g_\alpha$
  is a restatement of $\mathfrak l_J=\mathfrak h\oplus\bigoplus_{\alpha\in\Phi_J}\mathfrak g_\alpha$.
  The simple roots form a basis of $\mathfrak h^*$, so there is a
  unique $\zeta\in\mathfrak h$ with the prescribed simple-root values.
  Its zero values on $J$ put it in $\mathfrak z_J$. Every positive root
  outside $\Phi_J$ has a positive sum of coefficients outside $J$;
  negative roots have the opposite sign. This proves (5), and brackets
  add degrees, proving nilpotency of $\mathfrak u_J$. For maximality,
  let $\mathfrak I$ be a nilpotent ideal of $\mathfrak p_J$. Its image
  in $\mathfrak l_J$ is nilpotent and has zero projection to the
  semisimple $\mathfrak s_J$, since nilpotent algebras are solvable.
  If its central projection contained $h\ne0$, then some $i\notin J$
  would have $\alpha_i(h)\ne0$. Choose $x=h+a\in\mathfrak I$ with
  $a\in\mathfrak u_J$ and $0\ne e_i\in\mathfrak g_{\alpha_i}$.
  The element $[x,e_i]\in\mathfrak I$ has degree-one component
  $\alpha_i(h)e_i$; the contributions from $a$ have degree at least two.
  For every $k\ge0$, $(\operatorname{ad}x)^k[x,e_i]$ has degree-one
  component $\alpha_i(h)^{k+1}e_i\ne0$. This contradicts nilpotency
  of $\mathfrak I$, whose lower central series makes $\operatorname{ad}x$
  nilpotent on $\mathfrak I$. Thus $\mathfrak I\subseteq\mathfrak u_J$,
  proving the nilradical assertion. Finally
  $\mathfrak z_J\oplus\mathfrak u_J$ is a solvable ideal with semisimple
  quotient $\mathfrak s_J$, so it is exactly
  $\operatorname{rad}(\mathfrak p_J)$; and by
  [[def-levi-subalgebra-and-levi-decomposition]] the semisimple complement
  $\mathfrak s_J$ is a Levi factor of $\mathfrak p_J$. The fixed-degree
  PBW finiteness in (5) uses finite-dimensionality of each root space, the
  finite height bound on positive roots occurring in a fixed degree, and the
  PBW basis theorem ([[thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra]]).
- **The cases $J=\varnothing$ and $J$ all.** For $J=\varnothing$ one has
  $\mathfrak h_J=0$, $\mathfrak z_J=\mathfrak h$, $\Phi_J=\varnothing$,
  $\mathfrak l_J=\mathfrak h$ and $\mathfrak u_J=\mathfrak n^+$, so
  $\mathfrak p_J=\mathfrak b$. For $J=\{1,\dots,r\}$ one has
  $\mathfrak z_J=0$, $\Phi_J=\Phi$, $\mathfrak u_J=\mathfrak v_J=0$ and
  $\mathfrak p_J=\mathfrak g$. These are the two extreme cases of the
  standard parabolic construction.
- **Choice.** The Axiom of Choice is inherited from the published root-space
  and $\mathfrak{sl}_2$ suppliers used in the justifications; no further
  choice principle enters this construction.
