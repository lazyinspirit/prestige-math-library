---
id: def-internal-hom-qc-sheaves
kind: definition
title: Internal Hom of module sheaves
status: draft
origin: pipeline
deps:
  - def-sheaf-hom
  - def-finite-type-finite-presentation-module-sheaf
  - def-quasi-coherent-module-scheme
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Schemes, §§26.5, 26.7, 26.24"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022, Chapters 6, 14, 17"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
pipeline_run: frontier-36-complete
---

## Definition

Let $X$ be a scheme and let $\mathcal F,\mathcal G$ be $\mathcal O_X$-modules.
The **internal Hom** of $\mathcal F$ and $\mathcal G$ is the sheaf
$$\mathcal H om_{\mathcal O_X}(\mathcal F,\mathcal G)$$
of [[def-sheaf-hom]], whose sections over an open $U\subseteq X$ are
$$\Gamma\bigl(U,\mathcal H om_{\mathcal O_X}(\mathcal F,\mathcal G)\bigr) =\operatorname{Hom}_{\mathcal O_U}\bigl(\mathcal F|_U,\mathcal G|_U\bigr),$$
the $\mathcal O_X(U)$-module of $\mathcal O_U$-linear maps, with restrictions
given by restriction of morphisms. It is a sheaf of $\mathcal O_X$-modules, and
its formation is contravariant in $\mathcal F$ and covariant in $\mathcal G$.

This definition introduces no quasi-coherence claim. When $\mathcal F$ is
finitely presented and quasi-coherent
([[def-finite-type-finite-presentation-module-sheaf]],
[[def-quasi-coherent-module-scheme]]) and $\mathcal G$ is quasi-coherent, the
lemma on this page proves that
$\mathcal H om_{\mathcal O_X}(\mathcal F,\mathcal G)$ is again quasi-coherent;
for an arbitrary quasi-coherent $\mathcal F$ no such claim is made here, and
none is used on this page. The functor
$\mathcal G\mapsto\mathcal H om_{\mathcal O_X}(\mathcal F,\mathcal G)$ is left
exact for every $\mathcal F$, because the functor $V\mapsto\operatorname{Hom}$
is left exact, and the global sections are
$\operatorname{Hom}_{\mathcal O_X}(\mathcal F,\mathcal G)$; the stalk at a point
$x$ is not $\operatorname{Hom}(\mathcal F_x,\mathcal G_x)$ in general.
