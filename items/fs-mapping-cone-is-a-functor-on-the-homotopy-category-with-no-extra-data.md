---
id: fs-mapping-cone-is-a-functor-on-the-homotopy-category-with-no-extra-data
kind: false-statement
title: "FALSE: mapping cone is a functor on the homotopy category with no extra data"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [prop-mapping-cone-is-functorial-on-the-arrow-category-of-complexes, lem-homotopic-maps-have-chain-isomorphic-mapping-cones, def-homotopy-category-of-chain-complexes, def-chain-homotopy]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 13.9: Cones and termwise split sequences"
      url: "https://stacks.math.columbia.edu/tag/014D"
pipeline_run: frontier-26
---

## Statement

Mapping cone defines a functor on the homotopy category with no extra choices.

## Facts & Assumptions

**Given:** The zero map $0:C_\bullet\to D_\bullet$, where $C_\bullet$ is the
stalk complex $\mathbb Z[0]$ and $D_\bullet$ is the stalk complex $\mathbb Z[1]$.

[A1] The statement refuted is: mapping cone defines a functor on the homotopy
category with no extra choices.

[L1] Chain homotopies of maps can alter the induced upper-triangular cone map
([[def-chain-homotopy]]).

[L2] Strict functoriality is proved only on the arrow category of chain maps
([[prop-mapping-cone-is-functorial-on-the-arrow-category-of-complexes]]).

## Refutation

**Proof technique:** direct.

1.1 The identity square on the zero map admits two homotopies between the two zero composites: the zero homotopy and the degree-one map $t_0=1_{\mathbb Z}$. They induce two cone endomorphisms of $$\operatorname{Cone}(0)=\mathbb Z[1]\oplus\mathbb Z[1],$$ namely the identity matrix and $$\begin{pmatrix}1&1\\0&1\end{pmatrix}.$$ [A1, L1, given, algebra]

2.1 This cone complex has zero differential, so two endomorphisms are homotopic only when they are equal. The two matrices from step 1.1 are distinct, so a homotopy-category morphism does not determine a unique cone morphism without extra data. Therefore [A1] is false, and [L2] records the correct strict functoriality level. [A1, L2, step 1.1, algebra] ∎
