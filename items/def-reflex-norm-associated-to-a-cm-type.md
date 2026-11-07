---
id: def-reflex-norm-associated-to-a-cm-type
kind: definition
title: "Reflex norm associated to a CM type"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-reflex-field-and-reflex-type-of-a-cm-type
  - lem-cm-type-module-exists-uniquely
  - def-group-of-multiplicative-type-and-torus
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Complex Multiplication, Chapter I §1"
      url: "https://www.jmilne.org/math/CourseNotes/CM.pdf"
      locator: "The reflex norm, determinant construction, and formulas (7)–(10), printed pp. 15–16."
    - title: "J. S. Milne, The Fundamental Theorem of Complex Multiplication"
      url: "https://arxiv.org/pdf/0705.3446"
      locator: "§1, equations (2)–(5), printed pp. 2–3."
verification: {}
---

## Definition

For a CM pair $(E,\Phi)$ with reflex field $E^r$, let $V_\Phi$ be the trace module whose existence and uniqueness are established by the preceding trace-module lemma. For every commutative $\mathbb Q$-algebra $R$, an element $u\in(E^r\otimes_{\mathbb Q}R)^\times$ acts $E\otimes_{\mathbb Q}R$-linearly on $V_\Phi\otimes_{\mathbb Q}R$. The **reflex norm** is the natural morphism of restriction-of-scalars tori
$$N_\Phi:\operatorname{Res}_{E^r/\mathbb Q}\mathbb G_m\longrightarrow\operatorname{Res}_{E/\mathbb Q}\mathbb G_m,$$
whose $R$-points are
$$N_\Phi(u)=\det_{E\otimes R}\bigl(u\mid V_\Phi\otimes R\bigr).$$
Its finite-idèle map is the continuous homomorphism $N_\Phi:\mathbb A_{f,E^r}^{\times}\to\mathbb A_{f,E}^{\times}$ induced on the restricted products of local unit groups. It sends $E^{r,\times}$ into $E^\times$. On fractional ideals, $N_\Phi$ denotes the map induced by the valuations of this finite-idèle homomorphism; it is multiplicative because the determinant homomorphism is multiplicative and sends local units to local units.

## Definition references

[[def-reflex-field-and-reflex-type-of-a-cm-type]]

[[lem-cm-type-module-exists-uniquely]]

[[def-group-of-multiplicative-type-and-torus]]

## Facts & Assumptions

**Given:** A CM pair $(E,\Phi)$, its reflex field $E^r$, and the module $V_\Phi$.

[F1] The trace module exists and is unique up to $E\otimes k$-isomorphism for every number field $k\supseteq E^r$. [[lem-cm-type-module-exists-uniquely]]

## Proof

1.1 The determinant is multiplicative, is unchanged by an $E\otimes R$-linear change of basis, and commutes with extension of scalars in $R$. Therefore the formula is independent of the representative module in [F1] and defines a natural homomorphism on points of the indicated tori. [F1, given, algebra]

1.2 Choose an $O_{E^r}$-lattice in $V_\Phi$ stable under the finite $O_E$-action by taking the $O_{E^r}$-span of the $O_E$-orbit of a finite set of generators. A local unit preserves this lattice in both directions, so its determinant is a local unit. Thus the pointwise determinant maps the restricted product of local unit groups to the corresponding restricted product, giving the finite-idèle homomorphism; on principal elements the determinant lies in $E^\times$. [F1, step 1.1, construct, algebra] ∎

