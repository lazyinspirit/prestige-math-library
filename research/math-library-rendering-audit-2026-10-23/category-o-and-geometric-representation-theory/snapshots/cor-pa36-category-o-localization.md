---
id: cor-pa36-category-o-localization
kind: corollary
title: The integral regular localization equivalence restricts to Category O
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps:
  - def-axiom-of-choice
  - def-bgg-category-o
  - def-complex-semisimple-algebraic-group-borel-and-flag-variety
  - def-pa36-flag-tdo-and-module
  - lem-harish-chandra-projection-computes-highest-weight-scalars
  - lem-pa36-global-section-unit
  - lem-pa36-localization-adjunction
  - lem-semisimple-borel-root-factorization
  - thm-category-o-is-abelian-and-extension-closed
  - thm-every-category-o-object-has-finite-length
  - thm-harish-chandra-isomorphism-for-the-center
  - thm-pa36-regular-beilinson-bernstein-localization
  - thm-simple-objects-of-category-o-are-highest-weight-modules
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Masaki Kashiwara, Representation theory and D-modules on flag varieties, Astérisque 173–174 (1989)"
      url: "https://numdam.org/item/AST_1989__173-174__55_0.pdf"
      locator: "§§2 and 6.4, printed pp. 60–62 and 96; equivariant and coherent restrictions"
---

## Statement

Let $\kappa$ be integral, regular and antidominant. Define the **exact
central-character subcategory**
$$\mathcal O_{\chi_\kappa}^{\mathrm{exact}} =\{V\in\mathcal O:(\ker\chi_\kappa)V=0\}.$$
A **strongly $B$-equivariant coherent $\mathcal D_\kappa$-module** means a
coherent left $\mathcal D_\kappa$-module with a rational $B$-linearization
whose differential is the action-algebroid action and whose action is
compatible with the $\mathcal D_\kappa$-module structure. Then
$\operatorname{Loc}_\kappa$ and $\Gamma_\kappa$ restrict to inverse
equivalences between $\mathcal O_{\chi_\kappa}^{\mathrm{exact}}$ and these
strongly $B$-equivariant coherent modules.

The exact subcategory is distinct from the generalized-character block, where
each vector is killed by some power of $\ker\chi_\kappa$; the theorem does not
identify the whole generalized block with $B$-equivariant coherent modules.

## Facts & Assumptions

**Given:** Integral regular antidominant $\kappa$; the BGG category $\mathcal O$
of [[def-bgg-category-o]]; its finite-length and simple-highest-weight
structure; and the equivalence of
[[thm-pa36-regular-beilinson-bernstein-localization]].

[F1] Every object of $\mathcal O$ has finite length, and its simple objects
are exactly the highest-weight modules $L(\lambda)$
([[thm-every-category-o-object-has-finite-length]],
[[thm-simple-objects-of-category-o-are-highest-weight-modules]]).

[F2] The center acts on a cyclic highest-weight module of highest weight
$\lambda$ by the Harish–Chandra character $z\mapsto\operatorname{pr}(z)(\lambda)$;
the shifted Harish–Chandra map separates Weyl orbits
([[lem-harish-chandra-projection-computes-highest-weight-scalars]],
[[thm-harish-chandra-isomorphism-for-the-center]]).

[F3] In BGG category $\mathcal O$, $\mathfrak h$ acts semisimply and
$U(\mathfrak n^+)v$ is finite-dimensional for each vector; the module is
finitely generated ([[def-bgg-category-o]]).

[F4] The regular antidominant equivalence restricts to finitely generated
$A_\kappa$-modules and coherent $\mathcal D_\kappa$-modules, and its unit and
counit are natural isomorphisms
([[thm-pa36-regular-beilinson-bernstein-localization]]).

[F5] The Borel has the semidirect-product decomposition $B=T\ltimes U$.
Multiplication in $U$ is given by the height-ordered positive-root coordinates,
whose finite BCH law is compatible with the Lie brackets; conjugation by $T$
acts on each root subgroup through its root character
([[lem-semisimple-borel-root-factorization]]).

## Proof

1.1 Let $V\in\mathcal O_{\chi_\kappa}^{\mathrm{exact}}$. By [F1] it has a finite composition series with factors $L(\lambda)$. Since the central ideal $\ker\chi_\kappa$ annihilates $V$, it annihilates every subquotient; thus each factor has central character $\chi_\kappa$. By [F2], this means $\lambda+\rho$ and $\kappa$ have the same values on all Weyl-invariant polynomials. These invariants separate the finite $W$-orbits: for two disjoint finite orbits, polynomial interpolation separates their point sets, and averaging the separating polynomial over $W$ makes it invariant. Therefore $\lambda+\rho=w\kappa$ for some $w\in W$. Since $\kappa$ is integral, $\lambda$ is integral, and every weight of $L(\lambda)$ differs from $\lambda$ by an element of the root lattice. All weights of $V$ are therefore integral. [F1, F2, given, algebra]

2.1 For a weight vector $v\in V$, the subspace $U(\mathfrak n^+)v$ is finite-dimensional by [F3] and is stable under $\mathfrak h$, since $[\mathfrak h,\mathfrak n^+]\subseteq\mathfrak n^+$. Its weights are integral by step 1.1. Define the rational $T$-action on each such finite-dimensional subspace by its integral weight characters. Each positive-root operator is nilpotent there because it strictly raises weights in a finite weight set; more generally, a real linear functional positive on all positive roots gives a finite weight filtration strictly raised by every element of $\mathfrak n^+$, so $\pi(X)$ is nilpotent for each $X\in\mathfrak n^+$. The Lie representation of the nilpotent algebra $\mathfrak n^+$ integrates by $u=\exp(X)\mapsto\exp(\pi(X))$: the finite BCH polynomial is respected by the Lie representation, and the exponential coordinates $\mathfrak n^+\to U$ and their multiplication law are those of [F5]. For $t_0\in T$, the weight action satisfies $\rho_T(t_0)\exp(\pi(X))\rho_T(t_0)^{-1}=\exp(\pi(\operatorname{Ad}(t_0)X))$, so [F5] combines the $T$ and $U$ actions into a rational $B=T\ltimes U$-action differentiating to the given $\mathfrak b$-action. Any finite sum of these subspaces is again finite-dimensional and $\mathfrak b$-stable; uniqueness of the exponential $U$-action and the prescribed weight action makes the constructions compatible under inclusions. The subspaces form a directed cover of $V$, so their compatible actions define a rational $B$-action on $V$. [F2, F3, F5, step 1.1, construct]

3.1 The TDO $\mathcal D_\kappa$ is $G$-equivariant by its action-algebroid construction. The diagonal $B$-action therefore makes $\operatorname{Loc}_\kappa(V)$ strongly $B$-equivariant; it is coherent by [F4]. Conversely, if $M$ is strongly $B$-equivariant and coherent, its global sections inherit a rational $B$-action. The torus action is a direct sum of integral weight spaces, and the unipotent action makes each $U(\mathfrak n^+)$-orbit finite-dimensional. By [F4], $\Gamma M$ is finitely generated over $A_\kappa$, hence over $U(\mathfrak g)$, and its central ideal acts by zero because $A_\kappa$ is the central quotient in [[def-pa36-flag-tdo-and-module]]. Thus $\Gamma M$ lies in $\mathcal O_{\chi_\kappa}^{\mathrm{exact}}$. [F3, F4, step 2.1]

4.1 The unit and counit of the equivalence in [F4] are natural and $B$-equivariant, because all functors and maps in their construction commute with the diagonal $B$-action. Their restrictions are still isomorphisms, so the two restricted functors are inverse equivalences. [F4, step 3.1] ∎

