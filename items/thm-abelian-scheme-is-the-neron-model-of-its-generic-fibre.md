---
id: thm-abelian-scheme-is-the-neron-model-of-its-generic-fibre
kind: theorem
title: "An abelian scheme is the Neron model of its generic fibre"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - cor-extension-of-k-morphisms-into-abelian-schemes
  - def-neron-model-and-mapping-property
  - def-abelian-scheme
  - def-smooth-morphism-schemes
  - def-separated-morphism-schemes
  - def-scheme-theoretic-fibre
  - def-locally-noetherian-and-noetherian-scheme
  - cor-morphisms-equal-on-dense-open-reduced-source
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "S. Bosch, W. Lutkebohmert, M. Raynaud, Neron Models (1990), 1.2/8 (an abelian scheme is a Neron model of its generic fibre)"
      url: "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
---

## Statement

Assume AC and DC. Let $S$ be a Dedekind scheme with function field $K$, and let $A\to S$ be an abelian scheme ([[def-abelian-scheme]]). Then $A$ is a Neron model ([[def-neron-model-and-mapping-property]]) of its generic fibre $A_K$: for every smooth $S$-scheme $Y$ and every $K$-morphism $u_K:Y_K\to A_K$ there is a unique $S$-morphism $Y\to A$ extending $u_K$.

## Facts & Assumptions

**Given:** AC and DC, a Dedekind scheme $S$ with function field $K$, an abelian scheme $A\to S$, a smooth $S$-scheme $Y$, and a $K$-morphism $u_K:Y_K\to A_K$.

[F1] For a smooth finite-type $S$-scheme $Z$, every $K$-morphism $Z_K\to A_K$ extends uniquely to $Z\to A$ ([[cor-extension-of-k-morphisms-into-abelian-schemes]]).

[F2] A smooth morphism is locally of finite presentation; over the locally Noetherian scheme $S$, every point of a smooth $S$-scheme has an open neighbourhood of finite type over $S$ ([[def-smooth-morphism-schemes]], [[def-locally-noetherian-and-noetherian-scheme]]).

[F3] Two $S$-morphisms from a flat $S$-scheme to a separated $S$-scheme agreeing on the generic fibre are equal. Indeed their equalizer is closed; on a chart over an affine integral open $\operatorname{Spec}B\subseteq S$, its ideal vanishes after tensoring with $K$. Flatness makes the chart ring $B$-torsion-free, so that ideal is zero. This argument uses the closed diagonal ([[def-separated-morphism-schemes]]) and generic localization ([[def-scheme-theoretic-fibre]]); it does not require the generic fibre to be open.

## Proof

**Proof technique:** apply the extension result for finite-type smooth tests, then cover an arbitrary smooth test by finite-type opens and glue using separatedness.

1.1 First suppose $Y$ is of finite type over $S$. Then [F1] gives the unique extension $u:Y\to A$ of $u_K$. This proves the mapping property for finite-type smooth test schemes. [F1, given, construct]

2.1 For an arbitrary smooth $S$-scheme $Y$, use [F2] to cover it by open subschemes $Y_i$ of finite type over $S$. Apply step 1.1 to each restriction $u_K|_{(Y_i)_K}$, obtaining $u_i:Y_i\to A$. On an overlap $Y_i\cap Y_j$, the maps agree on the schematically dense generic fibre, so they agree everywhere by [F3]. The $u_i$ glue to an $S$-morphism $u:Y\to A$ extending $u_K$. The same density and separatedness give uniqueness. Thus $A$ satisfies the full Neron mapping property; the weak property is a consequence, and no group law on a general model is constructed. [F1, F2, F3, step 1.1, construct] ∎
