---
id: "def-formally-etale-morphism"
kind: "definition"
title: "Formally etale morphism"
status: draft
origin: "pipeline"
deps: ["def-formally-unramified-morphism", "def-formally-smooth-morphism", "lem-morphism-schemes-local-on-source-target", "def-scheme-over-base"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "Stacks Algebra, Definition 10.150.1 (tag 00U7) and Stacks More on Morphisms, Section 37.7"
      url: "https://stacks.math.columbia.edu/tag/00U7"
---

## Definition

A morphism of schemes $f\colon X\to S$ ([[def-scheme-over-base]]) is
**formally etale** if it is both formally smooth
([[def-formally-smooth-morphism]]) and formally unramified
([[def-formally-unramified-morphism]]).

**Uniqueness of the local lifts.** Explicitly, $f$ is formally etale exactly
when every commutative $S$-diagram with a square-zero thickening
$i\colon T_0\hookrightarrow T$ admits lifts $T\to X$ extending the given
$T_0\to X$ **Zariski locally on $T$**, and any two such local lifts agree on the
overlaps of their domains of definition: local existence is formal smoothness,
and uniqueness is formal unramifiedness. Consequently the local lifts glue
uniquely, by [[lem-morphism-schemes-local-on-source-target]], to a single
$S$-morphism $T\to X$ extending the given morphism from $T_0$. Thus for a
formally etale morphism every square-zero lifting problem has a unique lift, and
the unique lift is obtained by gluing the local ones.

No finite-type, finite-presentation or flatness hypothesis is part of the
definition: those enter the notion of an etale morphism of schemes, which is a
formally etale morphism that is additionally locally of finite presentation (and
flat); the comparison with that finite-presentation notion is made on a later
page and is not claimed here.
