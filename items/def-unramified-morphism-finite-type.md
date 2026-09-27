---
id: "def-unramified-morphism-finite-type"
kind: "definition"
title: "Unramified morphism"
status: published
origin: "pipeline"
deps: ["def-formally-unramified-morphism", "thm-formally-unramified-differentials-zero", "def-locally-finite-type-and-finite-type-morphism", "def-sheaf-relative-differentials"]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Stacks Morphisms, Definition 29.36.1 (tag 02G4) and Lemma 29.36.2"
      url: "https://stacks.math.columbia.edu/tag/02G4"
verification:
  audited: 2026-09-27
---

## Definition

A morphism of schemes $f\colon X\to S$ is **unramified** if it is locally of
finite type ([[def-locally-finite-type-and-finite-type-morphism]]) and formally
unramified ([[def-formally-unramified-morphism]]). By
[[thm-formally-unramified-differentials-zero]] this is equivalent to asking that
$f$ be locally of finite type and that $\Omega_{X/S}=0$
([[def-sheaf-relative-differentials]]); either formulation may be used.

**Convention: finite type versus finite presentation.** The convention here is
the one for which "unramified" requires only **locally of finite type**, in
accordance with the Stacks Project. Some authors (and the older terminology of
EGA) use the stronger convention, asking for local finite **presentation**
instead of local finite type; a morphism with that stronger property is
sometimes called *G-unramified*. The two notions coincide when the source and
target are locally Noetherian, but not in general. This page uses the
finite-type convention throughout; where a later page needs the
finite-presentation notion, it says so explicitly.
