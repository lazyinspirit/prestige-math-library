---
page: etale-covers-and-the-etale-fundamental-group
title: "Etale Covers and the Etale Fundamental Group"
status: published
requires:
- affine-schemes-and-the-structure-sheaf
- fibre-products-base-change-and-scheme-theoretic-fibres
- flat-smooth-and-etale-morphisms
items:
- lem-finite-etale-algebra-module-presentation-and-rank
- lem-faithfully-flat-effective-descent-of-modules-and-algebras
- thm-effective-fpqc-descent-of-finite-etale-covers
- def-etale-fundamental-group-and-fibre-functor
- lem-finite-etale-galois-refinements-and-quotients
- thm-finite-etale-covers-equivalent-to-finite-continuous-pi1-sets
- lem-finite-etale-separability-and-hochschild-contraction
- thm-finite-etale-algebras-invariant-under-nilpotent-thickening
- lem-complete-local-finite-etale-algebra-lifting
- lem-punctured-hartogs-and-flat-base-change-for-finite-projectives
- lem-formal-full-faithfulness-on-regular-punctured-spectrum
- lem-discriminant-detects-etaleness-of-finite-free-algebra
- thm-purity-for-finite-covers-of-regular-local-rings
- thm-purity-of-branch-locus-for-finite-normal-covers
- lem-projective-cech-finiteness-and-serre-vanishing-for-etale-lifting
- thm-projective-flat-dvr-finite-etale-cover-lifting
- lem-projective-modification-of-proper-integral-dvr-scheme
- thm-proper-smooth-complete-dvr-finite-etale-cover-equivalence
- lem-smooth-proper-complete-dvr-geometric-generic-connectedness
- lem-etale-specialization-trait-through-a-specialization
- lem-etale-specialization-proper-geometric-finite-etale-invariance
- lem-etale-specialization-geometric-basepoint-interface
- lem-tame-dvr-inertia-and-abhyankar-ramification-killing
- thm-specialization-of-etale-pi1-under-geometric-hypotheses
examples: []
---

This page develops Grothendieck's finite étale descent and the étale
fundamental group of a connected scheme, together with the smooth proper
specialization theorem that compares the fundamental groups of the geometric
fibres of a specialization of the base. The Axiom of Choice is assumed
throughout and is declared, with its exact use, in every proof item.

The starting point is the structure of finite étale algebras: a module-finite
algebra is finitely presented as a module exactly when it is finitely
presented as an algebra, and its spectrum is finite étale over the base
exactly when it is finitely presented and flat as a module with vanishing
differentials, in which case it is finite projective and locally free of
finite rank and that rank counts geometric fibre points. Faithfully flat
descent of modules and algebras is effective through the equalizer
construction, and it yields effective fpqc descent of finite étale covers,
with no Noetherian hypothesis. Finite étale algebras also carry an explicit
separability idempotent whose contraction makes every positive-degree
Hochschild cocycle a coboundary;
this gives unique lifting of finite étale algebras and their maps through
nilpotent thickenings, and, over a complete Noetherian local ring, the
equivalence between finite étale algebras and their reductions modulo a
complete ideal.

With these foundations, the geometric fibre functor $F_{\bar x}$ and the
profinite group $\pi_1^{\mathrm{et}}(X,\bar x)=\operatorname{Aut}(F_{\bar x})$
are defined for a connected scheme and a geometric basepoint, and the
classification theorem identifies $\operatorname{FEt}(X)$ with finite sets
carrying a continuous action of $\pi_1^{\mathrm{et}}(X,\bar x)$. Every finite
étale cover is trivialized by a connected Galois cover; subgroup quotients and
contracted covers exist, and connected nonempty covers correspond to transitive
actions; the classification holds for an arbitrary connected base scheme and
therefore includes the locally Noetherian and finite-type cases.

Purity for the closed point of a regular local ring of dimension at least two
is proved from the punctured Hartogs property for depth-two finite modules,
the resulting recovery of vector-bundle maps from all parameter thickenings,
and the trace discriminant criterion; it in turn gives purity of the branch
locus of a finite normal generically étale cover of a regular scheme. Over a
complete DVR the same circle of ideas, together with a projective modification
of a proper integral family and Čech finiteness and Serre vanishing, proves
that finite étale covers of a smooth proper family are equivalent to finite
étale covers of its closed fibre. Connected closed-fibre covers stay connected
on the geometric generic fibre, so the specialization homomorphism
$\operatorname{sp}:\pi_1^{\mathrm{et}}(X_{\bar s_1},\bar x_1)\to
\pi_1^{\mathrm{et}}(X_{\bar s_0},\bar x_0)$ attached to a specialization
$s_0\in\overline{\{s_1\}}$ of a locally Noetherian base is surjective, is an
isomorphism when $\kappa(s_0)$ has characteristic zero, and is an isomorphism
on prime-to-$p$ quotients when $\kappa(s_0)$ has characteristic $p>0$.
Changing the chosen basepoint path conjugates the homomorphism; no
independence from unspecified geometric specialization data is asserted. The
companion examples page computes the Kummer covers of the multiplicative
group and shows that the étale fundamental group of a connected finite type
scheme can change under extension of the base field.
