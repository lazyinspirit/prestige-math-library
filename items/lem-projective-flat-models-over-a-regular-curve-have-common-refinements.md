---
id: lem-projective-flat-models-over-a-regular-curve-have-common-refinements
kind: lemma
title: Common projective flat refinements of models over a regular curve
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-projective-morphism-pre-proj
  - lem-graph-closed-separated-target
  - thm-over-a-pid-flat-is-equivalent-to-torsion-free
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is added; a finite family of models and its projective presentations are used, and local flatness is checked one point at a time.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Alexander Carney, The Arithmetic Hodge Index Theorem and Rigidity of Dynamical Systems over Function Fields
      url: https://arxiv.org/pdf/1810.06342v2
      locator: Sections2.1–2.4 model intersection setup; common-refinement construction proved here, not imported.
---

## Statement

Let $B$ be a Noetherian regular integral scheme of dimension one, with function field $K$, and let $X/K$ be an integral projective scheme. Given a nonempty finite family of projective flat $B$-schemes $\mathcal X_1,\ldots,\mathcal X_s$ with specified generic-fiber identifications $(\mathcal X_i)_K\cong X$, there is an integral projective flat $B$-scheme $\mathcal Z$ with generic fiber $X$ and projective morphisms $p_i:\mathcal Z\to\mathcal X_i$ inducing the specified identity on $X$. It is the schematic closure of the generic diagonal in $\prod_B\mathcal X_i$. Thus these models admit common refinements. Morphisms between such models that induce the identity on $X$ are unique whenever they exist. Any finite family of line bundles already supplied on the models pulls back to this common refinement, preserving its specified generic restrictions. No assertion that an arbitrary generic line bundle already extends to a model, or that intersections or local metric measures exist, is part of this lemma.

## Facts & Assumptions

**Given:** The base, generic integral projective scheme, finite family of models and their generic identifications in the Statement.

[F1] Projective here means a closed immersion into a finite-dimensional projective space over the base. [[def-projective-morphism-pre-proj]]

[F2] The graph of a morphism to a separated target is a closed immersion. [[lem-graph-closed-separated-target]]

[F3] A module over a principal ideal domain is flat if and only if it is torsion-free. [[thm-over-a-pid-flat-is-equivalent-to-torsion-free]]

## Proof

1.1 The finite fiber product $\mathcal P=\prod_B\mathcal X_i$ is projective over $B$: combine the supplied projective embeddings by the Segre embedding. Its affine chart inverse is obtained by choosing one nonzero product coordinate; the equations expressing each product coordinate as the product of its row and column coordinates are the rank-one minor equations, so this is a closed immersion, and iteration handles the finite family. Its generic fiber contains the closed diagonal copy of $X$, by separatedness and [F2]. The projection $\mathcal P\to\mathcal X_i$ is projective by the same Segre construction over $\mathcal X_i$. [F1, F2, given, construct, algebra]

2.1 We construct its closure without a separate normalization or closure theorem. On an affine chart $\operatorname{Spec}A$ lying over an integral affine base $\operatorname{Spec}R$, the diagonal in the generic chart has ideal $J_K\subseteq A\otimes_RK$. Put $J=\ker(A\to(A\otimes_RK)/J_K)$. These ideals commute with restriction to principal affine opens, because localization is exact; they therefore glue to an ideal sheaf on $\mathcal P$. Their closed subscheme $\mathcal Z$ has generic fiber exactly the diagonal. Every nonempty affine chart of $\mathcal Z$ has ring $A/J$ embedded in the coordinate domain of its generic diagonal chart. Thus it is a domain and has dense generic fiber. All these charts meet the same irreducible generic fiber, so $\mathcal Z$ is integral. The kernel construction also shows that every closed subscheme containing that diagonal contains $\mathcal Z$, proving its asserted schematic-closure property. [step 1.1, construct, algebra]

3.1 At a closed point $b$ of $B$, the local ring $R_b$ is a DVR. Here is the finite local argument needed for this use: regularity and dimension one give a generator $t$ of its maximal ideal by the determinant form of Nakayama applied to a lift of a basis of $\mathfrak m/\mathfrak m^2$. Since $B$ is integral, $t$ is a nonzero divisor. The ideal $I=\bigcap_{a\ge0}t^aR_b$ is finitely generated; cancellation gives $I=tI$, and on finite generators the matrix $1-tC$ has unit determinant, so $I=0$. Every nonzero element is therefore $t^a u$ with $u$ a unit, which is the DVR valuation description and implies that every ideal is principal. Each affine ring of $\mathcal Z$ over this local base injects its generic localization by step 2.1, so is torsion-free over $R_b$, and [F3] makes it flat. At the generic point flatness holds over the field $K$. This proves flatness over all of $B$ without a simultaneous choice of local parameters. [F3, step 2.1, algebra]

4.1 The closed immersion $\mathcal Z\hookrightarrow\mathcal P$ makes $\mathcal Z$ projective over $B$ and makes each restricted projection $p_i$ projective. Its generic restriction is the specified identity. A supplied model $\mathcal X_i$ is itself integral: over a local base DVR its affine rings inject their generic localizations by flatness, and those nonempty generic charts are domains in $X$; density of the common generic fiber then gives global irreducibility as in step 2.1. If two morphisms from a supplied model to a separated model agree on the generic fiber, their equalizer is closed and contains that schematically dense fiber. On affine rings the equalizer equations vanish in the generic localization and hence vanish by this injection. The two morphisms are equal, proving uniqueness. [F1, F2, step 1.1, step 2.1, step 3.1, algebra]

5.1 Applying the construction to any finite family proves the common-refinement assertion. Pullback of an invertible sheaf is invertible, as seen by pulling back its local rank-one trivializations; generic restriction commutes with pullback and therefore has precisely the specified generic line bundle. Further refinements and pullbacks compose, and the uniqueness in step 4.1 removes any ambiguity in the transition morphisms. No claim about extending an as-yet-unmodeled line bundle, nef intersection positivity, metric convergence or local measures has been used. [step 4.1, construct, algebra] ∎
