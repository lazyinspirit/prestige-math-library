---
id: def-representable-morphism-of-presheaves
kind: definition
title: "Representable morphisms of presheaves and fibrewise properties"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 2
justified_by: []
aliases: []
deps:
  - def-fppf-topology-on-schemes
  - def-fppf-sheaf-and-sheafification
  - def-natural-transformation
  - def-fibre-product-schemes-universal-property
  - def-presheaf-representable-functor-and-representation
  - def-morphism-of-schemes
  - def-etale-morphism-schemes
  - def-flat-morphism-schemes
  - def-open-immersion-schemes
  - def-closed-immersion-schemes
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
    - title: "The Stacks Project, Chapter 65 (Algebraic Spaces), Sections 65.3-65.5"
      url: "https://stacks.math.columbia.edu/download/spaces.pdf"
      locator: "Lemma 65.3.1 (tag 02W9, representable morphisms of presheaves), Section 65.5 (tag 025V, fibrewise properties) and Sections 65.6-65.9"
---

## Definition

Let $F$ and $G$ be presheaves of sets on $(\mathit{Sch}/S)_{fppf}$
([[def-fppf-sheaf-and-sheafification]]) and let $a\colon F\to G$ be a
morphism of presheaves ([[def-natural-transformation]]). For a morphism
$\xi\colon T\to G$ from an $S$-scheme $T$ — that is, $\xi\in G(T)$, the
represented functor of $T$ mapping to $G$ — the **fibre product**
$F\times_{G,\xi}T$ is the presheaf
$$T'\longmapsto\{(x,\varphi):x\in F(T'),\ \varphi\colon T'\to T,\ a(x)=\xi\circ\varphi\}$$
with the evident restriction maps
([[def-fibre-product-schemes-universal-property]]).

The morphism $a$ is **representable by schemes** when for every $S$-scheme
$T$ and every $\xi\colon T\to G$ this fibre product is representable by a
scheme ([[def-presheaf-representable-functor-and-representation]]); that is,
there is a scheme $U$ and an isomorphism of presheaves
$F\times_{G,\xi}T\cong\operatorname{Mor}_S(-,U)$
([[def-morphism-of-schemes]]). The representing scheme, when it exists, is
well defined up to unique isomorphism, by the Yoneda lemma.

Let $\mathcal P$ be a property of morphisms of schemes that is stable under
base change. A representable morphism $a$ has **property $\mathcal P$** when
for every $T$ and $\xi$ the induced morphism of schemes
$U\to T$ representing the fibre product has property $\mathcal P$. Since
$\mathcal P$ is stable under base change and the construction of the fibre
product is compatible with base change in $T$, this is well defined and
depends only on $a$. In this way one defines **representable etale**, **flat**,
**surjective**, **open-immersion** and **closed-immersion** morphisms
([[def-etale-morphism-schemes]], [[def-flat-morphism-schemes]],
[[def-open-immersion-schemes]], [[def-closed-immersion-schemes]]).

A morphism of sheaves $a\colon F\to G$ is **fppf-locally surjective** (or an
**epimorphism of sheaves**) when
every section of $G$ lifts fppf-locally to $F$: for every $S$-scheme $T$ and
every $\xi\in G(T)$ there is an fppf covering $\{T_i\to T\}$ such that each
$\xi|_{T_i}$ lies in the image of $a_{T_i}\colon F(T_i)\to G(T_i)$. An
**etale cover** is a representable, etale morphism whose scheme base changes
are surjective. For etale morphisms this is equivalent to fppf-local
surjectivity: a surjective etale base change is itself an fppf cover and
supplies the lift, while local lifts force its image to cover the target.
For a general representable morphism, surjectivity on scheme points and
fppf-local lifting are distinct notions and must be named separately. These
definitions are used only for morphisms of presheaves satisfying the
representability clause, so each fibrewise property is a property of actual
morphisms of schemes.
