---
id: lem-cone-triangles-satisfy-tr-two-with-the-declared-rotation-sign
kind: lemma
title: "Cone triangles satisfy TR2 with the declared rotation sign"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-distinguished-cone-triangle-in-the-homotopy-category, def-rotation-of-a-triangle, thm-the-cone-of-an-identity-map-is-contractible, def-triangulated-category-axiom-tr-two]
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Lemma 13.9.16"
      url: "https://stacks.math.columbia.edu/tag/014D"
---

## Statement

The distinguished cone triangles in $K(\mathcal A)$ satisfy TR2 with final
arrow $-f[1]$ in a left rotation.

## Facts & Assumptions

**Given:** The standard cone triangle of a chain map $f$.

## Proof

1.1 Write the standard cone triangle as $$C\xrightarrow fD\xrightarrow j\operatorname{Cone}(f)\xrightarrow qC[1].$$ A direct cone calculation for $j$ splits $\operatorname{Cone}(j)$ as $C[1]$ together with the contractible cone of $1_D$.  Projection onto $C[1]$ is therefore a homotopy equivalence. [given]

2.1 Under that projection the standard triangle of $j$ becomes $$D\xrightarrow j\operatorname{Cone}(f)\xrightarrow qC[1] \xrightarrow{-f[1]}D[1];$$ the minus sign is the one forced by the cone differential.  Thus the left rotation of every standard cone triangle is distinguished. [step 1.1, given]

3.1 The converse uses the right rotation, not merely the inverse rotation of the particular triangle in step 2.1.  A second direct cone calculation splits $$\operatorname{Cone}(-q[-1])\simeq D\oplus\operatorname{Cone}(1_C)$$ compatibly with the canonical maps.  Since the identity cone is contractible, the standard cone triangle of $-q[-1]$ is therefore isomorphic in $K(\mathcal A)$ to $$\operatorname{Cone}(f)[-1]\xrightarrow{-q[-1]}C \xrightarrow fD\xrightarrow j\operatorname{Cone}(f),$$ the declared right rotation of the original standard triangle. [step 1.1, given, algebra]

4.1 Every distinguished cone triangle is isomorphic to a standard one, and left and right rotation preserve isomorphisms of triangles.  Steps 2.1 and 3.1 therefore prove both directions of the TR2 equivalence for an arbitrary triangle. [step 2.1, step 3.1, given] ∎
