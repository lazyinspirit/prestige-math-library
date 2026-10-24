---
id: def-derived-scheme-and-cotangent-complex
kind: definition
title: "Derived schemes and the cotangent complex of a morphism"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 10
justified_by: []
aliases: []
deps:
  - def-simplicial-object-and-simplicial-commutative-ring
  - def-cotangent-complex-of-a-ring-map
  - lem-cotangent-complex-resolution-independence
  - def-quasi-coherent-module-scheme
  - def-scheme
  - def-quasi-isomorphism
  - def-shift-of-a-chain-complex
  - def-homology-object-of-a-chain-complex
  - def-axiom-of-choice
  - lem-simplicial-algebra-cotangent-adjunctions-before-deriving
  - thm-dold-kan-equivalence-for-simplicial-modules
  - thm-model-structures-on-variable-simplicial-modules-and-algebras
  - lem-replacement-invariant-derived-enriched-mapping-spaces
  - thm-projective-models-for-simplicial-and-variable-module-diagrams
  - lem-projective-span-homotopy-pushout-mapping-property
  - lem-fixed-base-simplicial-cotangent-represents-derived-derivations
  - lem-projective-representables-and-derived-colimits-of-module-diagrams
  - lem-contractible-cosimplicial-evaluation-computes-derived-colimit
  - lem-derived-colimit-coefficient-and-category-change
  - lem-bounded-above-flat-tensor-complexes-preserve-quasi-isomorphisms
  - thm-qc-sheaf-affine-higher-cohomology-vanishes
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Bertrand Toen, Derived algebraic geometry, EMS Surveys in Mathematical Sciences 1 (2014)"
      url: "https://perso.math.univ-toulouse.fr/btoen/files/2012/04/dag-ems.pdf"
      locator: "Definition 2.1 and surrounding comments (PDF 20), truncation and constant/discrete embedding (PDF 33, 38-40)"
    - title: "Toen-Vezzosi, Homotopical Algebraic Geometry II: Geometric Stacks and Applications"
      url: "https://arxiv.org/pdf/math/0404373"
      locator: "Proposition 1.2.1.2 and Lemma 1.2.1.3 (PDF 33-34), Theorem 1.3.7.2 (PDF 96-97), Definition 1.4.1.15 and Lemma 1.4.1.16 (PDF 111-112), model context 2.2.1 (PDF 142-146), Corollary 2.2.3.3 (PDF 160-161)"
    - title: "The Stacks Project, Chapter 92 (The Cotangent Complex)"
      url: "https://stacks.math.columbia.edu/download/cotangent.pdf"
      locator: "Definition 92.3.2 (tag 08PN), Sections 92.4-92.6 and Lemma 92.8.1 (tag 08QZ)"
---

## Definition

Assume the Axiom of Choice inherited from the cotangent-comparison suppliers
used in the cotangent portion ([[def-axiom-of-choice]]).

A **derived scheme** is a pair $(X,\mathcal O_X)$ consisting of a topological
space $X$ and a sheaf of simplicial commutative rings $\mathcal O_X$
([[def-simplicial-object-and-simplicial-commutative-ring]]) such that
$(X,\pi_0\mathcal O_X)$ is a scheme ([[def-scheme]]) and each
$\pi_i\mathcal O_X$, $i>0$, is a quasi-coherent module on that scheme
([[def-quasi-coherent-module-scheme]]). Thus the truncation
$t_0(X,\mathcal O_X)=(X,\pi_0\mathcal O_X)$ is an ordinary scheme and the
higher homotopy sheaves are quasi-coherent modules on it.

**Morphisms** of derived schemes are taken in the homotopical category of
derived locally ringed spaces: a morphism is a morphism of the underlying
simplicially ringed spaces which is local on the truncations, and the mapping
spaces are the derived enriched mapping spaces constructed from the model
structures on simplicial commutative rings and their modules
([[thm-model-structures-on-variable-simplicial-modules-and-algebras]],
[[lem-replacement-invariant-derived-enriched-mapping-spaces]]) together with
the strict simplicial algebra adjunctions and the Dold-Kan equivalence
([[lem-simplicial-algebra-cotangent-adjunctions-before-deriving]],
[[thm-dold-kan-equivalence-for-simplicial-modules]]). The global category is the full subcategory of derived locally ringed spaces of Toën, Definition 2.5 (cited survey, PDF page 33). Affine computations may be performed in the strict projective diagram models of
[[thm-projective-models-for-simplicial-and-variable-module-diagrams]] and the
span comparison of
[[lem-projective-span-homotopy-pushout-mapping-property]]. The local diagram models alone are not a construction of the global category; the cited derived locally ringed-space construction supplies that category and its homotopical gluing.

A scheme embeds as the **constant (discrete) derived scheme** via
$i\colon\mathit{Sch}\to\mathit{dSch}$: a scheme $Y$ is sent to the pair with
the constant simplicial structure sheaf; this is fully faithful. The
**truncation** $t_0(X)=(X,\pi_0\mathcal O_X)$ is right adjoint to this
inclusion,
$$\operatorname{Map}_{\mathit{dSch}}(iY,X)\simeq \operatorname{Hom}_{\mathit{Sch}}(Y,t_0X),$$
with the right-hand side discrete: for a constant derived scheme a morphism
to $X$ is determined by its truncation, and every morphism $Y\to t_0X$
lifts. The counit of the adjunction is the canonical morphism
$j_X\colon i(t_0X)\to X$.

For a morphism of derived schemes $f\colon X\to Y$, the **cotangent complex**
$L_{X/Y}$ is a quasi-coherent derived $\mathcal O_X$-module, obtained by
gluing the affine derived cotangent complexes: on charts
$\operatorname{Spec}B\to\operatorname{Spec}A$ of derived rings it is the
$B$-module cotangent complex representing relative derived derivations in the
fixed-base sense of
[[lem-fixed-base-simplicial-cotangent-represents-derived-derivations]]; the global existence and descent of these modules uses HAG II, Theorem 1.3.7.2 (QCoh is a stack), in the simplicial-ring context of Section 2.2.1, and Corollary 2.2.3.3 for the relative cotangent complex. This agrees with the affine-local construction of Toën (survey, PDF pages 38-40). The local comparisons use the projective module-diagram models, the contractible
cosimplicial evaluation criterion, coefficient and category change, and the
bounded-above flat tensor compatibility
([[lem-projective-representables-and-derived-colimits-of-module-diagrams]],
[[lem-contractible-cosimplicial-evaluation-computes-derived-colimit]],
[[lem-derived-colimit-coefficient-and-category-change]],
[[lem-bounded-above-flat-tensor-complexes-preserve-quasi-isomorphisms]]),
with the affine higher-cohomology vanishing of
[[thm-qc-sheaf-affine-higher-cohomology-vanishes]] under its stated AC used
for the bounded section computation. For **discrete ordinary** $A$ and $B$
this is the ordinary ring-map complex
([[def-cotangent-complex-of-a-ring-map]]), whose resolution and base-change
comparisons are
[[lem-cotangent-complex-resolution-independence]]. The derived pullback
$j_X^*L_{X/Y}$ is a complex of $\pi_0\mathcal O_X$-modules on $t_0X$ and must
be distinguished from the full derived $\mathcal O_X$-module $L_{X/Y}$; its
homology and shifts use [[def-homology-object-of-a-chain-complex]] and
[[def-shift-of-a-chain-complex]], and quasi-isomorphisms are those of
[[def-quasi-isomorphism]].

These constructions require genuine homotopical module and cotangent
comparisons: they are not obtained by applying the ordinary-ring definition of
[[def-cotangent-complex-of-a-ring-map]] to non-discrete simplicial rings, and
the definition therefore imports only the interfaces listed above.

**Source applications.** The source passages above define the global category, establish descent of quasi-coherent derived modules, and supply the relative cotangent complex. The exact HAG II statements and printed proofs at PDF pages 33-34, 96-97, 111-112, 142-146 and 160-161, together with the cited Toën survey pages 20, 33 and 38-40, were checked. The strict diagram suppliers are used for affine computations and do not replace the global descent theorem.
