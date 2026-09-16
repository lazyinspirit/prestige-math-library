---
id: lem-simple-reflections-preserve-weight-multiplicities
kind: lemma
title: Simple reflections preserve weight multiplicities
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-weight-and-weight-space-of-a-lie-algebra-representation, prop-finite-dimensional-representations-of-a-complex-semisimple-lie-algebra-decompose-into-weight-spaces, thm-root-sl-two-triple, def-coroot-of-a-lie-algebra-root, thm-finite-dimensional-representations-of-sl-two, prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system, def-weyl-group-of-a-root-system, def-root-reflection-from-a-coroot, prop-weyl-length-equals-positive-root-inversion-number, thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Theorem 5.5(e) and Chapter V §1"
    - title: "Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras"
      url: "https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf"
      locator: "§8.1"
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $\mathfrak g$ be a finite-dimensional complex
semisimple Lie algebra with Cartan subalgebra $\mathfrak h$ and root system
$\Phi$, let $V$ be a finite-dimensional representation of $\mathfrak g$, and
let $W$ be the Weyl group of $\Phi$, acting on $\mathfrak h^*$ by
complex-linear extension of its action on $E=\operatorname{span}_{\mathbb R}\Phi$
([[def-weyl-group-of-a-root-system]],
[[prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system]]).
Then for every simple root $\alpha_i$ and every $\mu\in\mathfrak h^*$
$$\dim V_\mu=\dim V_{s_i(\mu)},\qquad s_i(\mu)=\mu-\mu(h_{\alpha_i})\alpha_i ,$$
and consequently $\dim V_{w\mu}=\dim V_\mu$ for every $w\in W$ and every
$\mu\in\mathfrak h^*$
([[def-weight-and-weight-space-of-a-lie-algebra-representation]]).

## Facts & Assumptions

**Given:** The Axiom of Choice, such $\mathfrak g,\mathfrak h,\Phi$, a finite-dimensional representation $V$, and the Weyl group $W$ acting on $\mathfrak h^*$.

[A1] The Axiom of Choice is assumed; it enters through the root-space theory supplying [L1] and the abstract root-system identification [L4] ([[def-axiom-of-choice]]).

[L1] For every root $\alpha$ the coroot $h_\alpha$ and suitable $e_\alpha\in\mathfrak g_\alpha$, $f_\alpha\in\mathfrak g_{-\alpha}$ form a copy of $\mathfrak{sl}_2$ with $[e_\alpha,f_\alpha]=h_\alpha$; moreover $\alpha(h_\alpha)=2$ and $s_\alpha(\mu)=\mu-\mu(h_\alpha)\alpha$ is the reflection of [[def-root-reflection-from-a-coroot]] ([[thm-root-sl-two-triple]], [[def-coroot-of-a-lie-algebra-root]]).

[L2] A finite-dimensional $\mathfrak{sl}_2$-module is a direct sum of irreducible submodules, and an irreducible submodule of dimension $m+1$ has $h$ acting with eigenvalues $m,m-2,\dots,-m$, each on a one-dimensional subspace ([[thm-finite-dimensional-representations-of-sl-two]]).

[L3] $V$ is the direct sum of its weight spaces for $\mathfrak h$, and each weight space is finite dimensional ([[prop-finite-dimensional-representations-of-a-complex-semisimple-lie-algebra-decompose-into-weight-spaces]]).

[L4] The roots of $\mathfrak g$ form a reduced crystallographic Euclidean root system on $E$ whose reflections coincide with the $s_\alpha$ of [L1], and for a chosen base the simple roots are a basis of $E$ ([[prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system]], [[thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]]).

[L5] Every element of the Weyl group is a product of simple reflections ([[prop-weyl-length-equals-positive-root-inversion-number]]).

## Proof

**Proof technique:** direct.

1.1 Fix a simple root $\alpha=\alpha_i$ and the $\mathfrak{sl}_2$-triple $(e_\alpha,f_\alpha,h_\alpha)$ of [L1], and write $\rho$ for the action of $\mathfrak g$ on $V$; restricting $\rho$ to this triple makes $V$ a finite-dimensional $\mathfrak{sl}_2$-module, which by [L2] is a direct sum $V=\bigoplus_rT_r$ of irreducible $\mathfrak{sl}_2$-submodules. [A1, L1, L2]

2.1 For an irreducible summand $T=T_r$ let $m\ge0$ be its top weight with respect to $h_\alpha$, so that by [L2] the operator $\rho(h_\alpha)$ has on $T$ the eigenvalues $m,m-2,\dots,-m$, each with multiplicity one, and every $h_\alpha$-eigenvector in $T$ is a weight vector for $\mathfrak h$ of some weight $\nu$ with $\nu(h_\alpha)=m-2k$ for a unique $k\in\{0,\dots,m\}$. [L2, step 1.1]

3.1 For such a summand $T$ and its weight $\nu$ write $q=\nu(h_\alpha)=m-2k$ with $0\le k\le m$; then $s_\alpha(\nu)=\nu-q\alpha$ satisfies $s_\alpha(\nu)(h_\alpha)=-q=m-2(m-k)$ by [L1], so $s_\alpha(\nu)$ is the weight of the (one-dimensional) $h_\alpha$-eigenspace of $T$ of eigenvalue $-q$; hence $T_\nu$ and $T_{s_\alpha(\nu)}$ are either both zero or both one-dimensional, and $\dim T_\nu=\dim T_{s_\alpha(\nu)}$. [L1, L2, step 2.1]

4.1 Summing the equalities of step 3.1 over the finitely many irreducible summands of step 1.1 gives $\dim V_\nu=\sum_r\dim(T_r)_\nu=\sum_r\dim(T_r)_{s_\alpha(\nu)}=\dim V_{s_\alpha(\nu)}$ for every weight $\nu$, and hence, both sides being zero, for an arbitrary $\mu\in\mathfrak h^*$. [L3, step 1.1, step 3.1]

5.1 Every $w\in W$ is a product of simple reflections by [L5], so applying step 4.1 once for each factor, with the reflections acting on $\mathfrak h^*$ by the linear formulas of [L4], gives $\dim V_{w\mu}=\dim V_\mu$ for every $w\in W$. [L4, L5, step 4.1]

6.1 The stated equalities are proved. ∎
