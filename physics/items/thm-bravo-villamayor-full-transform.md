---
id: "thm-bravo-villamayor-full-transform"
kind: "theorem"
title: "Bravo-Villamayor strengthening of embedded desingularization"
status: published
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 17
deps:
  - "def-axiom-of-choice"
  - "def-coherent-module-scheme"
  - "def-companion-ideal-and-monomial-part"
  - "def-integral-scheme"
  - "def-marked-ideal"
  - "def-multiple-test-blowup-and-controlled-transform"
  - "def-smooth-morphism-schemes"
  - "def-strict-transform-closed-subscheme"
  - "lem-addition-and-multiplication-of-marked-ideals"
  - "lem-codimension-one-maximal-order-components"
  - "lem-coefficient-ideal-disjoint-centres"
  - "lem-coefficient-ideal-restriction-support"
  - "lem-canonical-resolution-over-nonclosed-fields"
  - "lem-refined-giraud-maximal-contact"
  - "prop-canonical-resolution-of-marked-ideals"
  - "thm-weak-embedded-desingularization"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
sources:
  references:
    - title: "Jaroslaw Wlodarczyk, Simple Hironaka resolution in characteristic zero, J. Amer. Math. Soc. 18 (2005) 779-822; author's arXiv version math/0401401 (28 pp., dated October 25, 2018)"
      url: "https://arxiv.org/pdf/math/0401401"
---

## Statement

Assume AC ([[def-axiom-of-choice]]).

Let $Y\subseteq X$ be a reduced closed subscheme of a smooth $K$-scheme of finite type over a field $K$ of characteristic zero, with decomposition $Y=\bigcup_i Y_i$ into irreducible components.
Then there is a canonical resolution of $Y$ in $X$ by blowups of regular centers as in [[thm-weak-embedded-desingularization]] such that, in addition, the strict transforms $\widetilde Y_i$ are smooth and pairwise disjoint and the full transform of $Y$ has the form
$$(\widetilde\sigma)^*(\mathcal I_Y)=M\bigl((\widetilde\sigma)^*(\mathcal I_Y)\bigr)\cdot\mathcal I_{\widetilde Y},$$
where $\mathcal I_{\widetilde Y}$ is the ideal sheaf of the disjoint union $\widetilde Y=\coprod_i\widetilde Y_i$ and $M((\widetilde\sigma)^*(\mathcal I_Y))$ is the monomial part of the full transform with respect to the exceptional divisors. Componentwise, any irreducible component $X_\alpha$ of $X$ contained in $Y$ receives the identity sequence; on it set the monomial factor to $\mathcal O_{X_\alpha}$, so the factorization there is exactly $0=\mathcal O_{X_\alpha}\cdot0$. On every other ambient component the ideal of $Y$ is generically nonzero and the monomial part has its usual meaning.

## Facts & Assumptions

**Given:** A reduced closed subscheme $Y=\bigcup_iY_i$ of a smooth finite-type $K$-scheme $X$ over a field $K$ of characteristic zero, with ideal sheaf $\mathcal I_Y$, and the marked ideal $(\mathcal I_Y,\varnothing,1)$ on components not contained in $Y$; components contained in $Y$ are handled by the identity sequence.



[A1] [[def-axiom-of-choice]]: AC is assumed for the canonical-resolution consumer clauses and their cited AC-dependent construction suppliers.

[F1] [[prop-canonical-resolution-of-marked-ideals]], [[lem-canonical-resolution-over-nonclosed-fields]], [[def-companion-ideal-and-monomial-part]] supply the original Steps 1–2 on components where the ideal is generically nonzero with positive marking, including the monomial threshold-subset rule and the maximal-order reduction. They do not assert the modified $3/2$ branch. That modification is constructed and checked in step 1.1 below, following the complete argument in Włodarczyk §4.7, pp. 25–26. Components of $X$ contained in $Y$ take the identity sequence.

[F2] [[thm-weak-embedded-desingularization]] supplies the embedded stopping convention and conditions (a)–(d). Its source-backed procedure uses the same §4.7 modification checked here; the full-transform identity still requires the local ideal argument of step 1.2.

[F3] The codimension induction needed here is proved in step 1.2 below, following Włodarczyk, §4.7, pp. 25–26. The coefficient-restriction and tangent-support lemmas supply its reduction to a hypersurface; they do not themselves assert equality with the strict-transform ideal.

[F4] [[lem-codimension-one-maximal-order-components]] supplies smoothness, isolation and the local ideal-division calculation for codimension-one maximal-order support components. Their Cartier blowups are admissible controlled transforms only when the components have SNC with the full boundary; after Step 1a, [[prop-canonical-resolution-of-marked-ideals]], Proof 1.3, supplies this SNC condition. Then those blowups remove the components from the support. [[lem-coefficient-ideal-disjoint-centres]] keeps subsequent calculations on the remaining strict transforms after separation.

[F5] [[def-multiple-test-blowup-and-controlled-transform]]: unwinding controlled transforms factors the total transform into exceptional monomial factors times the residual controlled ideal. Equality of that residual ideal with the strict-transform ideal is the additional assertion established below, not a consequence of the transform formula alone.

## Proof

1.1 Construct and check the modified algorithm. Split the smooth ambient into its disjoint open-and-closed components $X_{\mathrm{full}}$ contained in $Y$ and $X_{\mathrm{rest}}$; use the identity on the former. On the latter start with $(I_Y,\varnothing,1)$ and use the original Steps 1–2, with the following extra branch at every recursive mark-one input. After higher residual-order strata have been handled, where the residual order is at most one and $M$ is nonunit, resolve $(M,1)$ before the residual ideal, assigning source invariant $(3/2,0,\ldots)$ and the monomial $\nu,\rho$; where $M$ is a unit use the original residual branch. At mark one each minimal threshold subset is a single positive-exponent boundary divisor, so a maximal-$\rho$ center is a union of disjoint regular components of that divisor. It lies in the marked support, is SNC with the full boundary, and its labelled Cartier blowup reduces its exponent by one. The residual factor $N$ is unchanged, and no new non-monomial singularity is introduced. There are finitely many positive exponents, so these passes terminate; in higher recursive marks use the unchanged finite monomial procedure of [F1]. The rational $3/2$ lies strictly between residual orders one and two, so it gives the intended priority on these closed boundary pieces without changing the higher-order passes. Successive assignment on untouched strata, as in [F1], preserves the primary invariant comparisons; the closed monomial strata give the chosen centers. No standalone upper semicontinuity of the auxiliary functions is used here. All centers are defined by ordered boundary equations, exponents and lower-dimensional invariant maxima; these data commute with smooth pullback and semilinear isomorphisms, and the maximal-contact gluing is unchanged. Under an ambient embedding the extra tangent parameters give the same constant prefixes before the induced recursive problem, so this modification commutes with that comparison as well. Thus the dimension induction proving canonicity and SNC centers for the original algorithm applies with this checked finite extra branch. The stopping convention of [F2] preserves the original smooth locus; any exceptional divisor encountered there would require an earlier center meeting that locus. Over nonclosed fields these intrinsic centers are Galois-stable and descend as in [F1]. [A1, F1, F2]

1.2 Prove the source's local ideal claim by induction on the codimension $c$ of an irreducible component $Z$ of the support, whose ideal agrees generically with the active mark-one ideal $J$. At the stage with maximal source invariant $(1,0;\ldots;1,0;\infty;0,\ldots)$, with $c$ copies of $(1,0)$, the added monomial branch has already removed residual exceptional factors, and the active input is $(J,1)$ of maximal order. Since $H(J,1)=C(J,1)=(J,1)$, the boundary reduction and maximal-contact reductions act on this same ideal. For $c=1$, [[lem-codimension-one-maximal-order-components]] gives $J=I_Z$ along the smooth isolated component. For $c>1$, choose a tangent parameter $u\in J$ and let $H=V(u)$. The coefficient-restriction lemma identifies the induced mark-one ideal and its sequence on $H$, where $Z$ has codimension $c-1$. The induction gives $J\mathcal O_{H}=I_{Z,H}$ near the final strict transform. Since $u\in J$ and $Z\subseteq H$, equality modulo $(u)$ lifts to $J=I_Z$ in the ambient ring: both are inverse images of the same ideal under its quotient by $(u)$. The smoothness and SNC position of $Z$ also lift from the successive compatible parameter reductions. Thus when such a component would be the next center it is already smooth, isolated in the active support, and its active ideal is exactly its strict-transform ideal. Retain it and omit that blowup; repeat on the remaining components. [A1, F1, F2, F3, F4]


2.1 The remaining components. After $\widetilde Y_1$ is separated, all strict transforms of components of codimension $r_1$ are isolated and are ignored in the further resolution; the process continues with the next codimension $r_2>r_1$ and the same argument shows that at the moment the strict transform of a codimension-$r_2$ component becomes a center, the controlled transform near it is its ideal. Iterating over the finitely many codimensions and components separates the strict transforms $\widetilde Y_i$, which are smooth and pairwise disjoint. Any remaining active support is disjoint from these completed strict transforms and is principalized by the canonical process of [F1]. [A1, F1, F3, F4, step 1.2]

3.1 The full transform. On $X_{\mathrm{rest}}$, the controlled-transform rule [F5] separates the exceptional monomial factors from the residual ideal. By steps 1.2 and 2.1, that residual ideal is the ideal of each completed strict transform near it and is the unit ideal away from their union after the remaining principalization; these local identities glue. Thus the full transform factors as $M((\widetilde\sigma)^*\mathcal I_Y)\cdot\mathcal I_{\widetilde Y}$, where the monomial part collects exceptional-divisor factors and the remaining factor is the ideal of the disjoint strict transforms. On $X_{\mathrm{full}}$ the sequence is the identity, $\mathcal I_Y=0$, and by convention the factorization is $0=\mathcal O_{X_{\mathrm{full}}}\cdot0$. This proves the componentwise formula and the theorem. [A1, F2, F3, F5, step 1.2, step 2.1] ∎
