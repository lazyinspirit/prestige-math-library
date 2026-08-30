---
id: def-monoidal-equivalence
kind: definition
title: "Monoidal equivalence and monoidal quasi-inverse data"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-lax-strong-and-strict-monoidal-functor, def-monoidal-natural-transformation, thm-monoidal-functors-compose-and-laxness-is-preserved, def-equivalence-and-adjoint-equivalence-of-categories, thm-every-equivalence-can-be-made-an-adjoint-equivalence]
verification:
  audited: 2026-08-31
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Remark 2.4.10"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
pipeline_run: null
---

## Definition

A **monoidal equivalence** from $\mathcal C$ to $\mathcal D$ is a strong
monoidal functor $F:\mathcal C\to\mathcal D$
([[def-lax-strong-and-strict-monoidal-functor]]) together with:

- a strong monoidal functor $G:\mathcal D\to\mathcal C$;
- monoidal natural isomorphisms
  $$\eta:1_{\mathcal C}\Rightarrow GF,\qquad \varepsilon:FG\Rightarrow1_{\mathcal D}$$
  ([[def-monoidal-natural-transformation]]).

Here $GF$ and $FG$ carry the composite strong monoidal structures of
[[thm-monoidal-functors-compose-and-laxness-is-preserved]], and each identity
functor carries the strict monoidal structure whose binary and unit maps are
identities. Thus both displayed transformations are between specified lax
monoidal functors.

Thus the underlying functor $F$ is an equivalence of categories in the sense of
[[def-equivalence-and-adjoint-equivalence-of-categories]], but the monoidal
quasi-inverse $G$ is part of the data and not a canonical construction. By
[[thm-every-equivalence-can-be-made-an-adjoint-equivalence]], one may choose the
underlying equivalence data so that the triangle identities also hold, but that
extra choice is not built into the base definition here.
