---
id: cor-affine-qc-sheaf-determined-global-sections
kind: corollary
title: Affine quasi-coherent sheaf determined by sections
status: published
origin: pipeline
deps:
  - thm-affine-quasi-coherent-equivalence
  - def-axiom-of-choice
  - def-quasi-coherent-module-scheme
  - def-associated-sheaf-module-affine-scheme
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Schemes, §§26.5, 26.7, 26.24"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022, Chapters 6, 14, 17"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
pipeline_run: frontier-36-complete
---

## Statement

Assume the Axiom of Choice, inherited from the affine equivalence
([[def-axiom-of-choice]]). Let $A$ be a commutative ring with $1$, put
$X=\operatorname{Spec}A$, and let $\mathcal F,\mathcal G$ be quasi-coherent
$\mathcal O_X$-modules ([[def-quasi-coherent-module-scheme]]).

Then:

1. The canonical comparison morphism
   $\kappa_{\mathcal F}:\widetilde{\Gamma(X,\mathcal F)}\to\mathcal F$,
   induced on $D(f)$ by the restriction map
   $\Gamma(X,\mathcal F)\to\Gamma(D(f),\mathcal F)$ followed by localisation, is
   an isomorphism
   ([[thm-affine-quasi-coherent-equivalence]],
   [[def-associated-sheaf-module-affine-scheme]]).
2. A morphism $\psi:\mathcal F\to\mathcal G$ of quasi-coherent
   $\mathcal O_X$-modules is determined uniquely by its global section map
   $\psi_X:\Gamma(X,\mathcal F)\to\Gamma(X,\mathcal G)$: if
   $\psi_X=\varphi_X$ for a second morphism $\varphi$, then $\psi=\varphi$, and
   the assignment
   $\operatorname{Hom}_{\mathcal O_X}(\mathcal F,\mathcal G)\to\operatorname{Hom}_A(\Gamma(X,\mathcal F),\Gamma(X,\mathcal G))$,
   $\psi\mapsto\psi_X$, is a bijection.

## Facts & Assumptions

**Given:** The Axiom of Choice; a commutative ring $A$; the scheme
$X=\operatorname{Spec}A$; quasi-coherent $\mathcal O_X$-modules
$\mathcal F,\mathcal G$.

[F1] Unit, counit and full faithfulness of the affine equivalence: the functor
$M\mapsto\widetilde M$ from $A$-modules to quasi-coherent $\mathcal O_X$-modules
and $\Gamma(X,-)$ are quasi-inverse equivalences; the canonical map
$M\to\Gamma(X,\widetilde M)$ is an isomorphism; the canonical comparison
$\kappa_{\mathcal F}:\widetilde{\Gamma(X,\mathcal F)}\to\mathcal F$, whose
component on $D(f)$ is induced by the restriction
$\Gamma(X,\mathcal F)\to\Gamma(D(f),\mathcal F)$ followed by the canonical
localisation $M\to M_f$, is an isomorphism and is natural in $\mathcal F$; and
for all $A$-modules $M,N$ the map
$\operatorname{Hom}_A(M,N)\to\operatorname{Hom}_{\mathcal O_X}(\widetilde M,\widetilde N)$,
$u\mapsto\widetilde u$, is a bijection with inverse
$\psi\mapsto\psi_X$
([[thm-affine-quasi-coherent-equivalence]],
[[def-associated-sheaf-module-affine-scheme]]).

[F2] For a quasi-coherent $\mathcal F$ and $f\in A$ the module
$\Gamma(X,\mathcal F)$ is an $A$-module and the restriction
$\Gamma(X,\mathcal F)\to\Gamma(D(f),\mathcal F)$ is $A$-linear, so it factors
through the canonical localisation
$\Gamma(X,\mathcal F)\to\Gamma(X,\mathcal F)_f$
([[def-associated-sheaf-module-affine-scheme]]).



**Proof technique:** direct; apply the counit and the full faithfulness of the affine equivalence and use naturality to identify global sections.

## Proof

1.1 Claim 1 is exactly the counit statement of [F1]: for quasi-coherent $\mathcal F$ on $X=\operatorname{Spec}A$ the canonical comparison $\kappa_{\mathcal F}:\widetilde{\Gamma(X,\mathcal F)}\to\mathcal F$ is an isomorphism, and by [F2] its component on $D(f)$ is indeed induced by the restriction map followed by localisation. [F1, F2]

2.1 Claim 2, determination: let $\psi,\varphi:\mathcal F\to\mathcal G$ be morphisms of quasi-coherent $\mathcal O_X$-modules with $\psi_X=\varphi_X$. Using the isomorphisms $\kappa_{\mathcal F}$ and $\kappa_{\mathcal G}$ of step 1.1, form the morphisms of associated sheaves $\widetilde{\Gamma(X,\psi)}:=\kappa_{\mathcal G}^{-1}\circ\psi\circ\kappa_{\mathcal F}$ and $\widetilde{\Gamma(X,\varphi)}:=\kappa_{\mathcal G}^{-1}\circ\varphi\circ\kappa_{\mathcal F}$ from $\widetilde{\Gamma(X,\mathcal F)}$ to $\widetilde{\Gamma(X,\mathcal G)}$. By naturality of the counit in [F1] these are the morphisms induced by the $A$-linear maps $\Gamma(X,\psi)$ and $\Gamma(X,\varphi)$, which are equal by hypothesis; hence the two morphisms of associated sheaves coincide and therefore $\psi=\kappa_{\mathcal G}\circ\widetilde{\Gamma(X,\psi)}\circ\kappa_{\mathcal F}^{-1}=\kappa_{\mathcal G}\circ\widetilde{\Gamma(X,\varphi)}\circ\kappa_{\mathcal F}^{-1}=\varphi$. [F1, step 1.1]

3.1 Claim 2, bijectivity: given any $A$-linear map $u:\Gamma(X,\mathcal F)\to\Gamma(X,\mathcal G)$, the composite $\kappa_{\mathcal G}\circ\widetilde u\circ\kappa_{\mathcal F}^{-1}$ is a morphism $\mathcal F\to\mathcal G$ whose induced map on global sections is $u$, because the global component of $\kappa_{\mathcal F}$ is the canonical identification $\Gamma(X,\mathcal F)\to\Gamma(X,\mathcal F)$ of [F1]; by step 2.1 this construction is inverse to $\psi\mapsto\psi_X$, so
$\operatorname{Hom}_{\mathcal O_X}(\mathcal F,\mathcal G)\cong\operatorname{Hom}_A(\Gamma(X,\mathcal F),\Gamma(X,\mathcal G))$. [F1, step 2.1]

4.1 Choice accounting: no choice is made beyond the one inherited from the affine equivalence [F1], which is the Axiom of Choice recorded in the Statement; the morphisms $\kappa_{\mathcal F}$, their inverses and the induced maps are canonical. [F1, step 3.1] ∎
