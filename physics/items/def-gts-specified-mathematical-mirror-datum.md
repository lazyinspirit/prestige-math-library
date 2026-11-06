---
id: def-gts-specified-mathematical-mirror-datum
kind: definition
title: Specified mathematical mirror datum
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
deps:
  - def-symplectic-form-and-symplectic-manifold
dependency_roles:
  def-symplectic-form-and-symplectic-manifold: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Mark Gross and Bernd Siebert, Mirror Symmetry via Logarithmic Degeneration Data I
      url: https://arxiv.org/pdf/math/0309070v3
      locator: Introduction, printed pp. 2–7; §1.1–§1.3 through Definition 1.22, ambient affine and degeneration data
    - title: Maxim Kontsevich, Homological Algebra of Mirror Symmetry
      url: https://arxiv.org/pdf/alg-geom/9411018v1
      locator: pp. 16–18, tentative homological mirror comparison and required categorical data
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

A specified mathematical mirror datum is a typed record. It includes (i) declared categories $\mathcal C_A,\mathcal C_B$ in which the two family arrows $p_A:X_A\to B_A$ and $p_B:X_B\to B_B$ live, together with the chosen complex, symplectic, or other structures on their objects and arrows and the axioms those structures satisfy; (ii) a declared category $\mathcal U$ containing the selected parameter objects $U_A,U_B$, specified inclusions $j_A:U_A\hookrightarrow B_A$ and $j_B:U_B\hookrightarrow B_B$ in the respective base categories, and a specified morphism $\varphi:U_A\to U_B$ in $\mathcal U$; (iii) coefficient rings $R_A,R_B$, specified completions or filtrations on them, a comparison ring $R$, and ring homomorphisms $R_A\to R$ and $R_B\to R$ (or a specified ring isomorphism when the rings are identified); (iv) for every category whose objects are designated as branes in the instance, its objects and morphisms, grading, and local-system conventions; and (v) either a functor, specified by its object and morphism assignments, between the declared categories or invariant functors from them to a common declared target category, together with the objects and comparison morphism to be compared. Every symbol in the record therefore has an ambient type, and every additional structure is accompanied by its defining axioms. The selected categories, bases, and structures may vary by instance; the tuple does not select them implicitly.

Here a functor $F:\mathcal C\to\mathcal D$ consists of an assignment $x\mapsto F(x)$ on objects and maps $F_{x,y}:\operatorname{Hom}_{\mathcal C}(x,y)\to\operatorname{Hom}_{\mathcal D}(F(x),F(y))$ satisfying $F(\operatorname{id}_x)=\operatorname{id}_{F(x)}$ and $F(g\circ f)=F(g)\circ F(f)$ for every composable pair $f,g$. These requirements apply to each functor in (v), including invariant functors.

The datum makes a later comparison proposition well-formed; it does not assert that $\varphi$ is an isomorphism or that the functor or invariant is an equivalence. An A-side is required to be symplectic only when that is part of the selected datum. Compact Calabi–Yau hypotheses are instance-specific and are not built into this generic definition. If a symplectic form is selected, use the convention in [[def-symplectic-form-and-symplectic-manifold]].

## Definition references

[[def-symplectic-form-and-symplectic-manifold]]
