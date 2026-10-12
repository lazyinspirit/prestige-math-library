---
id: lem-smooth-quasiprojective-varieties-admit-snc-projective-compactifications
kind: lemma
title: "SNC projective compactifications of smooth quasiprojective varieties"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-resolution-of-singularities-in-characteristic-zero, thm-principalization-of-ideals, def-simple-normal-crossings-divisors, def-axiom-of-choice]
proof_strategy: direct
sources:
  references:
    - title: "Pierre Deligne, Theorie de Hodge II"
      url: "https://www.numdam.org/item/PMIHES_1971__40__5_0/"
    - title: "Pierre Deligne, Theorie de Hodge III"
      url: "https://www.numdam.org/item/PMIHES_1974__44__5_0/"
---

## Statement

Assume AC. Every smooth quasiprojective complex variety $U$ admits a smooth projective compactification $j:U\hookrightarrow X$ with reduced boundary a simple normal crossings divisor $D$. Given finitely many such compactifications, there is another dominating all of them and restricting to the identity on $U$. A morphism of smooth quasiprojective varieties extends to a morphism of such compactifications after modifying the source compactification outside its open variety.

## Facts & Assumptions

**Given:** $U$ and its projective embedding. SNC has the arbitrary-dimensional meaning of [[def-simple-normal-crossings-divisors]], not the surface-only definition. Resolution and principalization are supplied by [[thm-resolution-of-singularities-in-characteristic-zero]] and [[thm-principalization-of-ideals]], with their AC convention [[def-axiom-of-choice]].

## Proof

1.1 Take the reduced closure of $U$ in projective space, componentwise if necessary, and resolve it. The resulting morphism is projective (the canonical resolution is a finite sequence of blowups), and is the identity over $U$ because $U$ is smooth. On its smooth projective source principalize the coherent ideal of the complement of $U$. The ideal is nonzero on every component. The principalization centers lie over the support of that ideal, so the resulting modification is still the identity on $U$. Its ideal becomes that of a divisor with SNC support. The source remains smooth projective since a blowup of a coherent ideal on a projective scheme is projective. This supplies $X,D$. [given, construct]

2.1 For common domination, take the closure of the diagonal copy of $U$ in the product of the given compactifications. Its projections are projective and identity over $U$. Resolve this closure and principalize its boundary as in step 1.1. For a morphism $U\to V$ take instead the closure of its graph in $X\times Y$ for chosen compactifications of source and target. This graph is isomorphic to $U$ over $U$, so resolution and boundary principalization yield the required extension. Applying the common-domination construction to two such extensions makes the two resulting pullback maps identical on the open variety. [step 1.1, construct] ∎