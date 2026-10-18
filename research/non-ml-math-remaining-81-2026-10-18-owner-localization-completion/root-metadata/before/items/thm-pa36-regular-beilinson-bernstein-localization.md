---
id: thm-pa36-regular-beilinson-bernstein-localization
kind: theorem
title: Regular antidominant Beilinson–Bernstein localization
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps:
  - cor-finite-variable-polynomial-ring-noetherian
  - def-complex-semisimple-algebraic-group-borel-and-flag-variety
  - def-pa36-global-sections-and-localization
  - lem-enveloping-algebra-is-left-and-right-noetherian
  - lem-pa36-global-section-unit
  - lem-pa36-localization-adjunction
  - thm-pa36-flag-d-affinity
  - thm-pa36-global-twisted-differential-operators
  - thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra
  - thm-semisimple-flag-variety-smooth-projective
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
      locator: "§6.4, Theorem 6.4.1 and its proof, printed p. 96; counit after the unit"
    - title: "Yi Sun, D-modules and representation theory"
      url: "https://yisun.io/notes/dmod.pdf"
      locator: "Corollary 4.12, printed pp. 43–44; full equivalence statement and adjunction"
---

## Statement

Assume the setup of [[def-pa36-global-sections-and-localization]]. If
$\kappa$ is regular antidominant, then
$$\operatorname{Loc}_\kappa:A_\kappa\text{-}\mathbf{Mod} \rightleftarrows\operatorname{QCoh}(X,\mathcal D_\kappa):\Gamma_\kappa$$
are inverse equivalences between all left $A_\kappa$-modules and all
quasi-coherent left $\mathcal D_\kappa$-modules. The equivalence restricts to
finitely generated $A_\kappa$-modules and coherent $\mathcal D_\kappa$-modules.
It does not assert that $\Gamma$ is faithful for a fixed non-antidominant
representative of a regular central character. Here a coherent
$\mathcal D_\kappa$-module means a module locally finitely presented over the
sheaf of rings $\mathcal D_\kappa$; its local noetherianity is part of the
proof below.

## Facts & Assumptions

**Given:** Regular antidominant $\kappa$, the adjunction
$\operatorname{Loc}_\kappa\dashv\Gamma_\kappa$, and the unit and
conservativity results already proved.

[F1] $\operatorname{Loc}_\kappa$ is left adjoint to $\Gamma_\kappa$
([[lem-pa36-localization-adjunction]]).

[F2] The unit $V\to\Gamma\operatorname{Loc}V$ is an isomorphism for every
$A_\kappa$-module when $\kappa$ is antidominant
([[lem-pa36-global-section-unit]]).

[F3] $\Gamma$ is exact and conservative when $\kappa$ is regular
antidominant ([[thm-pa36-flag-d-affinity]]).

## Proof

1.1 The unit is an isomorphism by [F2]. For a quasi-coherent $\mathcal D_\kappa$-module $M$, let $\epsilon_M:\operatorname{Loc}_\kappa\Gamma_\kappa M\to M$ be the counit. The triangular identity for the adjunction says $$\Gamma_\kappa(\epsilon_M)\circ \eta_{\Gamma_\kappa M}=\operatorname{id}_{\Gamma_\kappa M},$$ where $\eta$ is the unit. Since $\eta$ is an isomorphism, $\Gamma(\epsilon_M)$ is an isomorphism. [F1, F2]

2.1 Exactness of $\Gamma$ in [F3] implies $\Gamma(\ker\epsilon_M)=0$ and $\Gamma(\operatorname{coker}\epsilon_M)=0$. Conservativity in [F3] makes both sheaves zero, so $\epsilon_M$ is an isomorphism. The unit and counit are isomorphisms, hence the adjoint functors are inverse equivalences. [F1, F3, step 1.1]

3.1 By [[lem-enveloping-algebra-is-left-and-right-noetherian]], $U(\mathfrak g)$ is left Noetherian, so its quotient $A_\kappa$ is left Noetherian. On a smooth affine chart of $X$, $\operatorname{Sym}T_X$ is a polynomial algebra over a finite-type $\mathbb C$-algebra and hence is Noetherian by [[cor-finite-variable-polynomial-ring-noetherian]]. If a filtered ring has Noetherian associated graded, every left ideal is finitely generated: choose finitely many lifts of homogeneous generators of its graded ideal, subtract their leading terms from an arbitrary ideal element, and induct on its finite filtration degree. This proves that $\mathcal D_\kappa$ is locally left Noetherian. A finitely generated $A_\kappa$-module has a finite presentation over the Noetherian ring $A_\kappa$; localization presents it locally as a quotient of a finite free $\mathcal D_\kappa$-module, hence as a coherent $\mathcal D_\kappa$-module. [F1, step 2.1, algebra]

4.1 Conversely, let $M$ be coherent over $\mathcal D_\kappa$. A finite affine cover of $X$ and local finite generation give finitely many local generators. The counit is an isomorphism by step 2.1, so each such generator is locally in the image of the evaluation map $\mathcal D_\kappa\otimes_{\mathbb C}\Gamma(X,M)\to M$. These local image neighborhoods cover $X$; quasi-compactness gives a finite subcover, hence a finite set $S\subset\Gamma(X,M)$ whose $\mathcal D_\kappa$-span is all of $M$. Thus the map $\mathcal D_\kappa^{|S|}\to M$ is surjective. Exactness of $\Gamma$ in [F3] gives a surjection $A_\kappa^{|S|}=\Gamma(X,\mathcal D_\kappa^{|S|})\to\Gamma(X,M)$, so $\Gamma(X,M)$ is finitely generated over $A_\kappa$. This is coherence over $\mathcal D_\kappa$, not coherence over $\mathcal O_X$. [F1, F3, step 2.1, step 3.1, algebra] ∎

