---
id: def-the-deformed-category-o-family-and-its-specializations
kind: definition
title: The deformed category O family over the Cartan symmetric algebra
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 1
deps: [def-regular-integral-category-o-block-and-its-antidominant-weight,
       def-verma-module, thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra,
       def-translation-functor-between-o-blocks,
       def-multivariate-polynomial-ring-by-iteration,
       def-graded-ring-module-bimodule-and-internal-shift, def-axiom-of-choice,
       lem-tensoring-with-a-finite-dimensional-module-preserves-verma-flags,
       thm-shapovalov-determinant-formula,
       cor-central-characters-are-dot-weyl-orbits, def-bgg-category-o,
       thm-chinese-remainder-theorem-for-comaximal-ideals, lem-harish-chandra-projection-computes-highest-weight-scalars]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Wolfgang Soergel, Kategorie O, perverse Garben und Moduln ueber den Koinvarianten zur Weylgruppe, J. Amer. Math. Soc. 3 (1990) 421-445 (MPIM preprint 1989/46 full text)"
      url: "https://archive.mpim-bonn.mpg.de/3653/1/preprint_1989_46.pdf"
      locator: "Section 2.1, paragraphs defining M_S(lambda) = U \\otimes_b (C_lambda \\otimes S), the twisted S-operation, M_T(lambda), and the category D_T(lambda) (preprint pp. 8-9)"
    - title: "Wolfgang Soergel, The combinatorics of Harish-Chandra bimodules, J. reine angew. Math. 429 (1992) 49-74 (full text)"
      url: "http://sporadic.stanford.edu/macdo/papers/SoergelHC.pdf"
      locator: "Section 1, the setting of locally ad-g-finite bimodules and the deformed categories used in Section 3.2"
---

## Definition

Assume the Axiom of Choice, inherited from the published block theory
([[def-axiom-of-choice]]). Let $S=S(\mathfrak h)$ be the symmetric algebra of
the Cartan subalgebra of [[def-bgg-category-o]], graded by $\deg\mathfrak h=2$
as fixed on this page ([[def-graded-ring-module-bimodule-and-internal-shift]],
[[def-multivariate-polynomial-ring-by-iteration]]). Let
$\mathfrak b=\mathfrak h\oplus\mathfrak n^+$ act on $S\otimes\mathbb C_\lambda$
by
$$x\cdot(s\otimes1)=xs\otimes1+\lambda(x)s\otimes1\quad(x\in\mathfrak h),\qquad x\cdot(s\otimes1)=0\quad(x\in\mathfrak n^+),$$
where for $x\in\mathfrak h$, $xs$ means multiplication by the
linear polynomial $x\in S(\mathfrak h)$; $\mathfrak n^+$ acts trivially. Put
$$M_S(\lambda):=U(\mathfrak g)\otimes_{U(\mathfrak b)}(S\otimes\mathbb C_\lambda),$$
a module over $\mathfrak g\otimes S$: the left $\mathfrak g$-action is induced,
and $S$ acts on the right by multiplication on the last factor, which commutes
with $\mathfrak g$. Specializing at a closed point $\epsilon$ of
$\operatorname{Spec} S$ gives
$$M_S(\lambda)\otimes_S\mathbb C_\epsilon\cong M(\lambda+\epsilon),$$
the Verma module of [[def-verma-module]]; this is the universal family of
Verma modules with deformation parameter $\epsilon$.

**The family.** For a localization $T$ of $S$ put
$M_T(\lambda):=M_S(\lambda)\otimes_S T$, and let $\mathcal D_T(\lambda)$ be the
full subcategory of $\mathfrak g\otimes T$-modules that are direct summands of
a finite direct sum of modules $E\otimes M_T(\lambda)$ for finite-dimensional
$\mathfrak g$-modules $E$. Write $\mathcal D_R(\lambda)$ for
$R=S_{(0)}$, the localization of $S$ at the origin of
$\operatorname{Spec} S$. The **deformed family** is the assignment
$T\mapsto\mathcal D_T(\lambda)$ together with the specialization functors
$-\otimes_T\kappa(p)$ at closed points $p$ of $\operatorname{Spec} T$, where
$\kappa(p)=T/p$ is the residue field. The image of the tautological map
$\mathfrak h\to T\to\kappa(p)$ is the parameter $\epsilon_p$, and
$M_T(\lambda)\otimes_T\kappa(p)$ is the Verma module over $\kappa(p)$ with
highest weight $\lambda+\epsilon_p$ for $\mathfrak g\otimes_{\mathbb C}\kappa(p)$.
For a complex-valued point $\epsilon:T\to\mathbb C$, this is precisely
$-\otimes_T\mathbb C_\epsilon$ and the ordinary complex Verma module
$M(\lambda+\epsilon)$. An arbitrary localization can have closed points
whose residue fields are larger than $\mathbb C$; for example,
$T=\mathbb C(t)$ has only the residue field $\mathbb C(t)$ and has no
complex-valued point. By the tensor identity for finite-dimensional modules
and the Verma flags of tensor products
([[lem-tensoring-with-a-finite-dimensional-module-preserves-verma-flags]]) the
specializations have Verma constituents over their residue fields of highest
weights $\lambda+\nu+\epsilon_p$, where $\nu$ runs through the weights of the
finite-dimensional tensor factors. At complex-valued points they can meet several
central-character blocks, whose labels are the dot-Weyl orbits through these
highest weights ([[cor-central-characters-are-dot-weyl-orbits]]); a generic
parameter is generally nonintegral, and the distinct constituent labels have distinct central characters at the
generic parameter: an equality $\lambda+\gamma+\tau+\rho=w(\lambda+\gamma'+\tau+\rho)$
as affine functions of $\tau$ forces $w=1$ by comparing linear parts,
and then $\gamma=\gamma'$ ([[cor-central-characters-are-dot-weyl-orbits]]).

**Selected components.** For a regular dominant integral source $\lambda$ as in
[[def-regular-integral-category-o-block-and-its-antidominant-weight]] and a
dot-dominant integral target $\nu$, so that $\nu+\rho$ lies in the closed
positive chamber, denote by $\mathcal D_R^{[\nu]}(\lambda)$ the component of
$\mathcal D_R(\lambda)$ whose closed fiber at the origin lies in the selected
target block $\mathcal O_\nu$ of
[[def-translation-functor-between-o-blocks]]. Finite Verma flags of the
deformed tensor products and pairwise-unit resultants of their
central-character polynomials define this component by actual central
idempotents over $R$, obtained from [[thm-chinese-remainder-theorem-for-comaximal-ideals]].
Indeed choose a linear combination $z$ of central elements separating the
finitely many distinct special characters. On each deformed Verma factor,
$z$ acts by a polynomial $c_i(\tau)$ by
[[lem-harish-chandra-projection-computes-highest-weight-scalars]], and a flag
is annihilated by $\prod_i(z-c_i(\tau))$. Group these factors by their
constant values at the origin; differences from different groups are units
in $R$, so their product polynomials are comaximal in $R[X]$. CRT gives
mutually orthogonal polynomial projectors, whose images are the selected
components and whose sum is the identity. Other central-character components remain part of the full tensor
family; thus whole-family statements and selected-block statements are
distinguished.

**Weight structure.** Write $\tau:\mathfrak h\to T$ for the tautological linear map.
Modules in $\mathcal D_T(\lambda)$ carry a **deformed weight decomposition**
$X=\bigoplus_\xi X^\xi$, where
$$X^\xi=\{m:(h-\tau(h))m=\xi(h)m\text{ for every }h\in\mathfrak h\}.$$
These are eigenmodules for $h-\tau(h)$, not ordinary complex weight spaces
for $h$. They are finite projective, hence locally free of finite rank over $T$, as follows from the PBW model of Verma modules and the
flatness of the localization
([[thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra]]). The
conventions are those of [Soe90, Section 2.1]; no choice beyond the inherited
Axiom of Choice of the block theory is used.
