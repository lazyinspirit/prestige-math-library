---
id: def-sheaf-ext-for-coherent-modules
kind: definition
title: Sheaf Ext of coherent modules
status: published
origin: pipeline
landmark: false
deps:
  - def-sheaf-hom
  - def-cohomology-object-of-a-cochain-complex
  - def-ext-via-an-injective-resolution-of-the-second-variable
  - thm-injective-comparison-map-exists
  - thm-injective-comparison-maps-are-unique-up-to-cochain-homotopy
  - lem-ringed-space-module-sheaves-enough-injectives
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "The Stacks Project, Duality for Schemes"
      url: https://stacks.math.columbia.edu/download/duality.pdf
      locator: "§27, Lemmas 27.1, 27.4-27.5 and Remarks 27.2-27.3, 27.6"
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, Classes 53-54"
      url: https://math.stanford.edu/~vakil/0506-216/216Cjun2807.pdf
      locator: "Class 53 §§1-5 and Class 54 §§7, 11"
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $(Y,\mathcal O_Y)$ be
a ringed space and let $\mathcal F,\mathcal G$ be $\mathcal O_Y$-modules. An
**$\mathcal O_Y$-injective resolution** of $\mathcal G$ is an exact sequence
$$0\longrightarrow\mathcal G\longrightarrow I^0\xrightarrow{d^0}I^1\xrightarrow{d^1}\cdots$$
of $\mathcal O_Y$-modules in which every $I^p$ is an injective object of the
category of $\mathcal O_Y$-modules. The in-run theorem
`lem-ringed-space-module-sheaves-enough-injectives` of batch 9 supplies such a
resolution for every $\mathcal G$, and the published comparison results
[[thm-injective-comparison-map-exists]] and
[[thm-injective-comparison-maps-are-unique-up-to-cochain-homotopy]] (applied
in the abelian category of $\mathcal O_Y$-modules) make the constructions
below independent of the supplied resolution up to a canonical isomorphism, as
recorded in the final paragraph of this definition.
Their Dependent Choice hypothesis follows from the declared Axiom of Choice
by [[thm-choice-implies-dependent-implies-countable-choice]].

Two complexes are attached to such a resolution:

- **Global Ext.** The complex of abelian groups
  $\operatorname{Hom}_{\mathcal O_Y}(\mathcal F,I^\bullet)$ has degree-$p$ term
  $\operatorname{Hom}_{\mathcal O_Y}(\mathcal F,I^p)$ and differential
  $d^p\circ(-)$. Its cohomology in the sense of
  [[def-cohomology-object-of-a-cochain-complex]] is written
  $$\operatorname{Ext}^q_{\mathcal O_Y}(\mathcal F,\mathcal G):=H^q\bigl(\operatorname{Hom}_{\mathcal O_Y}(\mathcal F,I^\bullet)\bigr),\qquad q\ge0 .$$
- **Sheaf Ext.** The complex of $\mathcal O_Y$-modules
  $\mathcal Hom_{\mathcal O_Y}(\mathcal F,I^\bullet)$, with internal Hom as in
  [[def-sheaf-hom]] and the same differential, has cohomology sheaves written
  $$\mathcal Ext^q_{\mathcal O_Y}(\mathcal F,\mathcal G):=H^q\bigl(\mathcal Hom_{\mathcal O_Y}(\mathcal F,I^\bullet)\bigr),\qquad q\ge0 .$$

The terms of $\operatorname{Hom}_{\mathcal O_Y}(\mathcal F,I^\bullet)$ are the
global sections of the terms of $\mathcal Hom_{\mathcal O_Y}(\mathcal F,I^\bullet)$,
but the two constructions are different functors: taking global sections does
not commute with taking cohomology, so the global Ext for $q>0$ is not in
general the group of global sections of the sheaf Ext.

Because $\operatorname{Hom}_{\mathcal O_Y}(\mathcal F,-)$ is left exact, the
degree-zero terms are identified with the ordinary Hom modules:
$\operatorname{Ext}^0_{\mathcal O_Y}(\mathcal F,\mathcal G)\cong\operatorname{Hom}_{\mathcal O_Y}(\mathcal F,\mathcal G)$
and $\mathcal Ext^0_{\mathcal O_Y}(\mathcal F,\mathcal G)\cong\mathcal Hom_{\mathcal O_Y}(\mathcal F,\mathcal G)$,
the isomorphisms being induced by the coaugmentation
$\mathcal G\to I^0$.

**Independence of the resolution.** The subscript-free notation is justified as
follows. Let $\mathcal G\to J^\bullet$ be a second $\mathcal O_Y$-injective
resolution. The comparison theorem
[[thm-injective-comparison-map-exists]] produces a coaugmentation-preserving
cochain map $I^\bullet\to J^\bullet$, and
[[thm-injective-comparison-maps-are-unique-up-to-cochain-homotopy]] shows that
any two such maps are cochain-homotopic; applying the additive functors
$\operatorname{Hom}_{\mathcal O_Y}(\mathcal F,-)$ and
$\mathcal Hom_{\mathcal O_Y}(\mathcal F,-)$ to such a homotopy produces a
homotopy of the resulting complexes of abelian groups, respectively of sheaves
of $\mathcal O_Y$-modules, because these functors are additive and preserve the
homotopy relation. Cochain-homotopic maps induce the same map on cohomology,
so the groups and sheaves above are well-defined up to canonical isomorphism
independent of the resolution. This is the same well-definedness mechanism as
in the abstract construction of
[[def-ext-via-an-injective-resolution-of-the-second-variable]], specialized to
$\mathcal O_Y$-modules.

**Local computation.** If $\mathcal F$ admits a resolution
$\cdots\to F_1\to F_0\to\mathcal F\to0$ by finite locally free
$\mathcal O_Y$-modules, then $\mathcal Ext^q_{\mathcal O_Y}(\mathcal F,\mathcal G)$
is computed by the complex $\mathcal Hom_{\mathcal O_Y}(F_\bullet,\mathcal G)$;
this local computation, together with its compatibility with the injective
resolution defining sheaf Ext, is proved in
[[lem-regular-immersion-koszul-ext-sheaf]] in the smooth regular-immersion case
where it is used, and is not assumed here.
