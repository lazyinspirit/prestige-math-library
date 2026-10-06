---
id: "def-coefficient-ideal"
kind: "definition"
title: "The coefficient ideal of a marked ideal of maximal order"
status: draft
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 6
deps:
  - "def-axiom-of-choice"
  - "def-ideal-of-derivatives"
  - "def-ideal-sheaf"
  - "def-field"
  - "def-smooth-morphism-schemes"
  - "def-maximal-order-and-tangent-directions"
  - "lem-addition-and-multiplication-of-marked-ideals"
provenance:
  statement: "literature-derived"
  proof: "not-applicable"
sources:
  references:
    - title: "Jaroslaw Wlodarczyk, Simple Hironaka resolution in characteristic zero, J. Amer. Math. Soc. 18 (2005) 779-822; author's arXiv version math/0401401 (28 pp., dated October 25, 2018)"
      url: "https://arxiv.org/pdf/math/0401401"
    - title: "Herwig Hauser, The Hironaka theorem on resolution of singularities (or: A proof we always wanted to understand), Bull. Amer. Math. Soc. 40 (2003) 323-403"
      url: "https://homepage.univie.ac.at/herwig.hauser/Publications/hauser%20hironaka%20thm%20bams.pdf"
---

## Definition

Let $X$ be a smooth $K$-scheme over a field $K$, and let $(\mathcal I,E,\mu)$ be a marked ideal of maximal order on $X$ with $\mu\ge1$ ([[def-smooth-morphism-schemes]]).
The coefficient ideal is the marked ideal
$$C(\mathcal I,\mu):=\sum_{i=0}^{\mu-1}\bigl(\mathcal D^i(\mathcal I),\mu-i\bigr),$$
the sum being that of [[lem-addition-and-multiplication-of-marked-ideals]]; explicitly
$$C(\mathcal I,\mu)=\Bigl(\sum_{i=0}^{\mu-1}\mathcal D^i(\mathcal I)^{\mu!/ (\mu-i)},\mu!\Bigr).$$
Under AC ([[def-axiom-of-choice]]), in every characteristic it satisfies $C(\mathcal I,\mu)\simeq(\mathcal I,\mu)$. Under the same AC assumption, if $K$ has characteristic zero or perfect characteristic $p>\mu$ ([[def-field]]), then for every regular closed subscheme $S\subseteq X$ having SNC with $E$,
$$\operatorname{supp}(\mathcal I,\mu)\cap S=\operatorname{supp}\bigl(C(\mathcal I,\mu)|_S\bigr),$$
and this identity persists under multiple test blow-ups whose centers lie in the strict transforms of $S$ (proved below).
