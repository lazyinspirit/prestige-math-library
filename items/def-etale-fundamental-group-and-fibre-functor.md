---
id: def-etale-fundamental-group-and-fibre-functor
kind: definition
title: "Geometric fibre functor and étale fundamental group"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-axiom-of-choice
  - def-finite-morphism-schemes
  - def-etale-morphism-schemes
  - thm-fibre-products-of-schemes-exist
  - lem-finite-etale-algebra-module-presentation-and-rank
  - thm-etale-over-algebraically-closed-field-discrete-smooth-points
  - def-natural-transformation
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "SGA 1, Exposé V §§3–5, especially Theorem 4.1"
      url: https://arxiv.org/pdf/math/0206203
    - title: "Stacks Project, Fundamental Groups of Schemes §§3, 5–6"
      url: https://stacks.math.columbia.edu/download/pione.pdf
---

## Definition

Assume AC. Let $X$ be a connected scheme and fix a **geometric basepoint** $\bar x:\operatorname{Spec}\Omega\to X$, where $\Omega$ is algebraically closed. A **finite étale cover** is a finite étale morphism $Y\to X$, allowing the empty cover. Denote by $\operatorname{FEt}(X)$ its category, with all $X$-morphisms as arrows. Finiteness and étaleness have their scheme meanings ([[def-finite-morphism-schemes]], [[def-etale-morphism-schemes]]); in particular this is not the category of all étale morphisms.

The **geometric fibre functor** is
$$F_{\bar x}:\operatorname{FEt}(X)\longrightarrow\operatorname{FinSet},\qquad F_{\bar x}(Y)=\operatorname{Hom}_X(\operatorname{Spec}\Omega,Y).$$
A morphism acts by composition. This is the point set of $Y\times_X\operatorname{Spec}\Omega$, a disjoint union of finitely many copies of $\operatorname{Spec}\Omega$ ([[thm-fibre-products-of-schemes-exist]], [[thm-etale-over-algebraically-closed-field-discrete-smooth-points]]). Its cardinality is the rank of the locally free algebra of the cover ([[lem-finite-etale-algebra-module-presentation-and-rank]]).

Define
$$\pi_1^{\mathrm{et}}(X,\bar x)=\operatorname{Aut}(F_{\bar x}).$$
Here an element is a family of permutations of all fibres, commuting with every arrow of $\operatorname{FEt}(X)$; composition is componentwise ([[def-natural-transformation]]). Give it the topology induced by its inclusion in the product of the finite discrete symmetric groups $\operatorname{Sym}(F_{\bar x}(Y))$. Equivalently a neighbourhood basis of the identity consists of the kernels of the actions on finitely many fibres. Its action on each fibre is continuous by this definition. Profinite reconstruction and classification are proved in the subsequent theorem, not assumed in this definition.

Size is handled by taking a small skeleton of $\operatorname{FEt}(X)$, or by fixing a universe containing $X$. Such a skeleton exists: on a set of affine charts of $X$, finite algebras and their finite presentations, together with compatible ring maps on charts of the intersections, have a set of possible codes, and their glued covers exhaust the category up to isomorphism. AC ([[def-axiom-of-choice]]) permits choosing representatives and is also inherited through the étale suppliers above. Replacing the skeleton transports the functor and its automorphisms by equivalence and gives the same topological group up to the canonical transport. All classification statements use finite sets with the discrete topology and continuous left actions.
