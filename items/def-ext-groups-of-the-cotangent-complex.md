---
id: "def-ext-groups-of-the-cotangent-complex"
kind: "definition"
title: "Ext groups of the cotangent complex"
status: published
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 12
justified_by: []
aliases: []
deps:
  - "def-derived-hom-in-the-bounded-setting"
  - "prop-cohomology-of-derived-hom-is-ext"
  - "thm-ext-is-hom-in-the-derived-category"
  - "def-sheaf-ext-for-coherent-modules"
  - "def-quasi-coherent-module-scheme"
  - "def-cotangent-complex-of-a-scheme-morphism"
  - "def-shift-of-a-chain-complex"
  - "def-axiom-of-choice"
  - "thm-choice-implies-dependent-implies-countable-choice"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  precheck: "n/a"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "The Stacks Project, The Cotangent Complex, complete chapter (Chapter 92)"
      url: "https://stacks.math.columbia.edu/download/cotangent.pdf"
      locator: "Lemma 23.1 (tag 08V5) and Lemma 92.16.1 (tag 08SP), Lemma 92.21.1 (tag 08UZ): the deformation-theoretic Ext^i(L,-) groups and the torsor/obstruction statements (printed pages 39 and 25-33, read 2026-10-05)"
    - title: "The Stacks Project, Deformation Theory, complete chapter (Chapter 91)"
      url: "https://stacks.math.columbia.edu/download/defos.pdf"
      locator: "Sections 91.2 and 91.8 (tags 08S5-08S9, 0D13-0D14): Ext^1 and Ext^0 of the cotangent complex in deformation problems (printed pages 3-6 and 30-33, read 2026-10-05)"
---

## Definition

Assume the Axiom of Choice; it implies the Dependent Choice hypothesis of the
derived-Hom supplier ([[def-axiom-of-choice]],
[[thm-choice-implies-dependent-implies-countable-choice]]). Let $X$ be a
scheme, let $L$ be a bounded-above complex of $\mathcal O_X$-modules with
quasi-coherent cohomology (for instance $L=L_{X/S}$ of
[[def-cotangent-complex-of-a-scheme-morphism]]), and let $M$ be a
quasi-coherent $\mathcal O_X$-module, regarded as a complex concentrated in
degree $0$ ([[def-quasi-coherent-module-scheme]]). Define
$$\operatorname{Ext}^i_{\mathcal O_X}(L,M):=H^i\bigl(\mathbf R\operatorname{Hom}_{\mathcal O_X}(L,M)\bigr),$$
the cohomology of the derived Hom computed in the abelian category of
$\mathcal O_X$-modules via [[def-derived-hom-in-the-bounded-setting]]. Then
$$\operatorname{Ext}^i_{\mathcal O_X}(L,M)\cong\operatorname{Hom}_{D(\mathcal O_X)}(L,M[i])$$
for every $i$ ([[prop-cohomology-of-derived-hom-is-ext]],
[[thm-ext-is-hom-in-the-derived-category]],
[[def-shift-of-a-chain-complex]]), so the groups are natural in $L$ and $M$
and vanish for $i<0$ when $L$ is concentrated in cohomological degrees $\le0$.
If $L$ is concentrated in degree $0$ and is a module $F$, then
$\operatorname{Ext}^i_{\mathcal O_X}(F,M)$ is the global sheaf-Ext group of
[[def-sheaf-ext-for-coherent-modules]]. For a two-term complex
$N^{-1}\xrightarrow{d}N^0$ of $\mathcal O_X$-modules, Ext is still computed by $\mathbf R\operatorname{Hom}(N,M)$. If both terms are projective objects of the chosen abelian module category, then the ordinary Hom complex computes derived Hom and hence
$$\operatorname{Ext}^0(N,M)=\ker\bigl(\operatorname{Hom}(N^0,M)\to\operatorname{Hom}(N^{-1},M)\bigr),\qquad \operatorname{Ext}^1(N,M)=\operatorname{coker}\bigl(\operatorname{Hom}(N^0,M)\to\operatorname{Hom}(N^{-1},M)\bigr),$$
the map being composition with $d$. Without that hypothesis one must retain derived Hom. For finite locally free terms on a scheme, one may instead take derived global sections of the internal Hom complex; ordinary global Hom gives the displayed formula only when its terms are acyclic for global sections. Ring analogue: for a ring map $A\to B$, a
bounded-above complex $L$ of $B$-modules and a $B$-module $M$,
$\operatorname{Ext}^i_B(L,M)$ is defined in the same way in the abelian
category of $B$-modules.

## Remarks

- **Reference conventions.** The notation $\operatorname{Ext}^i(L_{X/S},-)$ is
  the one used by Illusie, *Complexe cotangent et deformations I*, Chapitre II,
  and by Stacks, *The Cotangent Complex*, Sections 92.16 and 92.21, where the
  same groups carry the obstruction class, the torsor structure and the
  automorphism groups of deformations. The identification with
  $\operatorname{Hom}_D(L,M[i])$ is the published derived-Hom comparison
  [[prop-cohomology-of-derived-hom-is-ext]], whose Dependent Choice hypothesis
  is supplied by the declared Axiom of Choice.
- **Two-term computation.** The ordinary Hom formula requires the projectivity or acyclicity hypotheses just stated. A module in degree zero has arbitrary positive Ext in general; boundedness of the ordinary Hom complex alone does not make it a representative of derived Hom.
- **Open supplier note.** The derived-Hom and resolution suppliers used here
  are published except for the in-run ring-map cotangent complex
  [[def-cotangent-complex-of-a-ring-map]] and the comparison
  [[lem-cotangent-complex-resolution-independence]]; the consumer steps that
  rely on them are recorded in the pair report.
